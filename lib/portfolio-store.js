const fs = require("node:fs/promises");
const path = require("node:path");

const defaultData = {
  profile: {
    name: "Asanka Manoj Mudannayaka",
    role: "Digital Marketing & AI Automation Specialist",
    intro:
      "I combine SEO, Google Ads, Meta Ads, WordPress, creative content, and AI automation to help businesses capture inquiries, follow up faster, and convert more leads into sales opportunities.",
    location: "Dubai, UAE",
    email: "",
    phone: "",
    cvUrl: "",
    linkedin: "",
    skills: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "WordPress",
      "Lead Generation",
      "AI Automation",
    ],
  },
  items: [],
};

function createSlug(input) {
  return String(input || "portfolio-item")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

function normalizeItem(item, existing = {}) {
  const now = new Date().toISOString();
  return {
    id: existing.id,
    title: String(item.title || existing.title || "Untitled Project").trim(),
    type: String(item.type || existing.type || "Project").trim(),
    description: String(item.description || existing.description || "").trim(),
    tech: String(item.tech || existing.tech || "").trim(),
    link: String(item.link || existing.link || "").trim(),
    image: String(item.image || existing.image || "").trim(),
    featured:
      typeof item.featured === "boolean"
        ? item.featured
        : typeof existing.featured === "boolean"
          ? existing.featured
          : true,
    createdAt: existing.createdAt || now,
  };
}

function createPortfolioStore(filePath) {
  async function ensureFile() {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2));
    }
  }

  async function getData() {
    await ensureFile();
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    return {
      profile: { ...defaultData.profile, ...(parsed.profile || {}) },
      items: Array.isArray(parsed.items) ? parsed.items : [],
    };
  }

  async function saveData(data) {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return data;
  }

  async function addItem(input) {
    const data = await getData();
    const base = createSlug(input.title);
    const id = `${base}-${Date.now().toString(36)}`;
    const item = normalizeItem(input, { id });
    data.items.unshift(item);
    await saveData(data);
    return item;
  }

  async function updateItem(id, input) {
    const data = await getData();
    const index = data.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    data.items[index] = normalizeItem(input, data.items[index]);
    await saveData(data);
    return data.items[index];
  }

  async function deleteItem(id) {
    const data = await getData();
    const index = data.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    const [removed] = data.items.splice(index, 1);
    await saveData(data);
    return removed;
  }

  async function updateProfile(profile) {
    const data = await getData();
    data.profile = {
      ...data.profile,
      ...profile,
      skills: Array.isArray(profile.skills)
        ? profile.skills
        : String(profile.skills || data.profile.skills.join(","))
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),
    };
    await saveData(data);
    return data.profile;
  }

  return { addItem, deleteItem, getData, saveData, updateItem, updateProfile };
}

module.exports = { createPortfolioStore, defaultData };
