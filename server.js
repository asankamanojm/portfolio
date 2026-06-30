const express = require("express");
const multer = require("multer");
const path = require("node:path");
const fs = require("node:fs");
const { createPortfolioStore } = require("./lib/portfolio-store");

const app = express();
const port = process.env.PORT || 3000;
const adminPassword = process.env.ADMIN_PASSWORD || "change-me-now";
const dataPath = path.join(__dirname, "data", "portfolio.json");
const uploadsDir = path.join(__dirname, "uploads");
const store = createPortfolioStore(dataPath);

fs.mkdirSync(uploadsDir, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: uploadsDir,
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const safeName = path
        .basename(file.originalname, ext)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 40);
      cb(null, `${safeName || "upload"}-${Date.now()}${ext}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Only image uploads are allowed."));
      return;
    }
    cb(null, true);
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadsDir));
app.use(
  "/vendor/lottie-web",
  express.static(path.join(__dirname, "node_modules", "lottie-web", "build", "player")),
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/portfolio-media", express.static(path.join(__dirname, "portfolio")));

function requireAdmin(req, res, next) {
  const header = req.get("x-admin-password");
  if (header !== adminPassword) {
    res.status(401).json({ error: "Invalid admin password." });
    return;
  }
  next();
}

app.get("/api/portfolio", async (_req, res, next) => {
  try {
    res.json(await store.getData());
  } catch (error) {
    next(error);
  }
});

app.post("/api/profile", requireAdmin, async (req, res, next) => {
  try {
    res.json(await store.updateProfile(req.body));
  } catch (error) {
    next(error);
  }
});

app.post("/api/items", requireAdmin, upload.single("image"), async (req, res, next) => {
  try {
    const item = await store.addItem({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image,
      featured: req.body.featured !== "false",
    });
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
});

app.put("/api/items/:id", requireAdmin, upload.single("image"), async (req, res, next) => {
  try {
    const item = await store.updateItem(req.params.id, {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image,
      featured: req.body.featured !== "false",
    });
    if (!item) {
      res.status(404).json({ error: "Portfolio item not found." });
      return;
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/items/:id", requireAdmin, async (req, res, next) => {
  try {
    const item = await store.deleteItem(req.params.id);
    if (!item) {
      res.status(404).json({ error: "Portfolio item not found." });
      return;
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((error, _req, res, _next) => {
  res.status(400).json({ error: error.message || "Something went wrong." });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Portfolio running on http://localhost:${port}`);
  });
}

module.exports = app;
