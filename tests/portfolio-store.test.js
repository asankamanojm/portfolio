const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const { createPortfolioStore } = require("../lib/portfolio-store");

test("adds portfolio items with generated ids and timestamps", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-store-"));
  const store = createPortfolioStore(path.join(dir, "portfolio.json"));

  const item = await store.addItem({
    title: "Inventory App",
    type: "Software",
    description: "A stock tracking app for small businesses.",
    tech: "React, Node.js",
    link: "https://example.com",
    image: "/uploads/inventory.png",
  });

  assert.equal(item.title, "Inventory App");
  assert.equal(item.type, "Software");
  assert.equal(item.featured, true);
  assert.match(item.id, /^[a-z0-9-]+$/);
  assert.match(item.createdAt, /^\d{4}-\d{2}-\d{2}T/);

  const saved = await store.getData();
  assert.equal(saved.items.length, 1);
  assert.equal(saved.items[0].id, item.id);
});

test("updates and deletes existing portfolio items", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-store-"));
  const store = createPortfolioStore(path.join(dir, "portfolio.json"));
  const item = await store.addItem({ title: "Old", type: "Product" });

  const updated = await store.updateItem(item.id, {
    title: "New",
    featured: false,
  });

  assert.equal(updated.title, "New");
  assert.equal(updated.featured, false);

  const removed = await store.deleteItem(item.id);
  assert.equal(removed.id, item.id);

  const saved = await store.getData();
  assert.equal(saved.items.length, 0);
});

