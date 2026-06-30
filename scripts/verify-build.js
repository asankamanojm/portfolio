const fs = require("node:fs");
const path = require("node:path");

const required = [
  "server.js",
  "public/index.html",
  "public/admin.html",
  "public/site.css",
  "public/app.js",
  "public/admin.js",
  "data/portfolio.json",
];

for (const file of required) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log("Build check passed. Hostinger can run this app with npm start.");
