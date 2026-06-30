let adminPassword = "";

const loginCard = document.getElementById("login-card");
const dashboard = document.getElementById("dashboard");
const loginForm = document.getElementById("login-form");
const profileForm = document.getElementById("profile-form");
const itemForm = document.getElementById("item-form");
const adminList = document.getElementById("admin-list");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  adminPassword = document.getElementById("password").value;
  await loadAdmin();
  loginCard.classList.add("hidden");
  dashboard.classList.remove("hidden");
});

profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(profileForm);
  const body = Object.fromEntries(formData.entries());
  body.skills = body.skills.split(",").map((skill) => skill.trim()).filter(Boolean);

  await fetch("/api/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-password": adminPassword,
    },
    body: JSON.stringify(body),
  });

  await loadAdmin();
});

itemForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(itemForm);

  await fetch("/api/items", {
    method: "POST",
    headers: { "x-admin-password": adminPassword },
    body: formData,
  });

  itemForm.reset();
  await loadAdmin();
});

async function loadAdmin() {
  const response = await fetch("/api/portfolio");
  const data = await response.json();
  fillProfileForm(data.profile);
  renderAdminList(data.items);
}

function fillProfileForm(profile) {
  for (const [key, value] of Object.entries(profile)) {
    const field = profileForm.elements[key];
    if (!field) continue;
    field.value = Array.isArray(value) ? value.join(", ") : value || "";
  }
}

function renderAdminList(items) {
  adminList.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "admin-item";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.type)} · ${escapeHtml(item.tech)}</span>
      </div>
      <button class="button danger" data-id="${item.id}">Delete</button>
    `;
    adminList.appendChild(row);
  });

  adminList.querySelectorAll("button[data-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      await fetch(`/api/items/${button.dataset.id}`, {
        method: "DELETE",
        headers: { "x-admin-password": adminPassword },
      });
      await loadAdmin();
    });
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
