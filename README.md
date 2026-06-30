# Asanka Portfolio

Simple Hostinger-ready Node.js portfolio website with a password-protected admin page for adding software, products, websites, and image projects.

## Local Run

```bash
npm install
npm start
```

Open `http://localhost:3000`.

Admin page: `http://localhost:3000/admin.html`

Default admin password: `change-me-now`

## Hostinger Setup

- Node.js version: 18, 20, 22, or 24
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm start`
- Entry file: `server.js`

Set this environment variable in Hostinger:

```bash
ADMIN_PASSWORD=your-secure-password
```

Uploaded images are stored in the `uploads/` folder. Portfolio content is stored in `data/portfolio.json`.
