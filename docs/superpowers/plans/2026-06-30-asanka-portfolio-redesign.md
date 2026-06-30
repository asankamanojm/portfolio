# Asanka Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved creative watercolor/smoke portfolio redesign with a canvas hero, five result boxes, four featured portfolio cards, compact skill tags, a systems gallery lightbox, and contact buttons.

**Architecture:** Keep the existing static Express app. `public/index.html` owns semantic structure, `public/site.css` owns responsive visual styling and CSS animation, and `public/app.js` owns rendering, canvas animation, reveal behavior, counters, contacts, and modals.

**Tech Stack:** Node.js, Express, vanilla HTML/CSS/JavaScript, Node test runner.

---

## File Structure

- Modify `public/index.html`: homepage sections for hero, results, portfolio, skills, systems gallery, contact, and modal.
- Modify `public/site.css`: watercolor/smoke theme, canvas hero layout, hover effects, scroll shine, tags, gallery tiles, responsive rules.
- Modify `public/app.js`: four portfolio cards, compact skills, systems gallery, modal content, canvas animation, reveal/counter/contact behavior.
- Create `tests/homepage-content.test.js`: static content contract for required section hooks and portfolio/gallery data.

---

### Task 1: Add Frontend Content Contract Test

**Files:**
- Create: `tests/homepage-content.test.js`

- [ ] **Step 1: Write the failing test**

Create `tests/homepage-content.test.js`:

```js
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("homepage includes approved redesign sections and hero actions", () => {
  assert.match(html, /Asanka Manoj/);
  assert.match(html, /Digital Marketing & AI Automation Specialist/);
  assert.match(html, /Dubai, UAE/);
  assert.match(html, /id="hero-canvas"/);
  assert.match(html, /SEO · Google Ads · Meta Ads · WordPress · Web Development · Lead Funnels · AI Automation/);
  assert.match(html, /View Work/);
  assert.match(html, /Download CV/);
  assert.match(html, /WhatsApp/);
  assert.match(html, /id="results"/);
  assert.match(html, /id="portfolio"/);
  assert.match(html, /id="skills"/);
  assert.match(html, /id="systems"/);
  assert.match(html, /id="contact"/);
});

test("app script contains four featured projects and gallery behavior", () => {
  for (const project of ["Matrix Waterproofing", "Dreamland Real Estate", "CatchMyTours", "AI Lead Automation"]) {
    assert.match(app, new RegExp(project));
  }
  assert.match(app, /const systemGalleryItems = \[/);
  assert.match(app, /function initHeroCanvas/);
  assert.match(app, /function openGalleryItem/);
});
```

- [ ] **Step 2: Run the new test and confirm it fails**

Run: `node --test tests/homepage-content.test.js`

Expected: FAIL because `id="hero-canvas"`, the exact keyword row, `systemGalleryItems`, `initHeroCanvas`, and `openGalleryItem` are not implemented.

- [ ] **Step 3: Commit the failing test**

Run:

```bash
git add tests/homepage-content.test.js
git commit -m "test: add homepage redesign contract"
```

Expected: Commit succeeds with the new test file.

---

### Task 2: Replace Homepage Structure

**Files:**
- Modify: `public/index.html`

- [ ] **Step 1: Update header navigation**

Use these nav links in `public/index.html`:

```html
<nav aria-label="Main navigation">
  <a href="#results">Results</a>
  <a href="#portfolio">Work</a>
  <a href="#skills">Skills</a>
  <a href="#systems">Systems</a>
  <a href="#contact">Contact</a>
  <a href="/admin.html">Admin</a>
</nav>
```

- [ ] **Step 2: Replace the main homepage sections**

Replace the current `<main>` content with:

```html
<main>
  <section class="hero" id="top">
    <canvas id="hero-canvas" class="hero-canvas" aria-hidden="true"></canvas>
    <div class="hero-smoke" aria-hidden="true"></div>
    <div class="hero-copy reveal">
      <p class="eyebrow">Dubai, UAE</p>
      <h1>Asanka Manoj</h1>
      <p class="role">Digital Marketing & AI Automation Specialist</p>
      <p class="keyword-row">SEO · Google Ads · Meta Ads · WordPress · Web Development · Lead Funnels · AI Automation</p>
      <div class="hero-actions">
        <a class="button primary magnetic" href="#portfolio">View Work</a>
        <a class="button magnetic" id="cv-link-top" href="#" target="_blank" rel="noreferrer">Download CV</a>
        <a class="button magnetic" id="whatsapp-link-top" href="#contact">WhatsApp</a>
      </div>
    </div>
  </section>

  <section class="results-section" id="results" aria-label="Results and experience">
    <div class="result-card reveal"><strong data-count="6">0</strong><span>Years</span><p>Digital marketing experience</p></div>
    <div class="result-card reveal"><strong data-count="51">0</strong><span>Organic traffic growth</span><p>Organic traffic growth</p></div>
    <div class="result-card reveal"><strong data-count="18">0</strong><span>Keywords</span><p>Google Top-3</p></div>
    <div class="result-card reveal"><strong>Dubai Experience</strong><span>Market focus</span><p>Real estate & construction marketing</p></div>
    <div class="result-card reveal"><strong>Skills</strong><span>Creative + performance</span><p>10+ graphic artist + creatives, 3+ performance marketing experience</p></div>
  </section>

  <section class="section dark-section" id="portfolio">
    <div class="section-heading reveal">
      <p class="eyebrow">Portfolio Work</p>
      <h2>Campaigns, funnels, and automation systems built for measurable growth</h2>
    </div>
    <div class="portfolio-grid" id="portfolio-grid"></div>
  </section>

  <section class="section light-section compact" id="skills">
    <div class="section-heading reveal">
      <p class="eyebrow">Skills</p>
      <h2>Marketing, creative, web, and automation tools</h2>
    </div>
    <div class="skill-cloud reveal" id="skill-cloud"></div>
  </section>

  <section class="section dark-section" id="systems">
    <div class="section-heading reveal">
      <p class="eyebrow">Systems Gallery</p>
      <h2>AI, lead handling, reporting, and campaign systems</h2>
    </div>
    <div class="systems-grid" id="systems-grid"></div>
  </section>

  <section class="contact" id="contact">
    <div class="reveal">
      <p class="eyebrow">Contact</p>
      <h2>Available for digital marketing, SEO, paid ads, real estate marketing, and AI automation work in Dubai.</h2>
    </div>
    <div class="contact-links reveal">
      <a id="whatsapp-link" href="#">WhatsApp</a>
      <a id="email-link" href="mailto:">Email</a>
      <a id="linkedin-link" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  </section>
</main>
```

Keep the existing modal container, sticky WhatsApp link, footer, and `/app.js` script after `main`.

- [ ] **Step 3: Run the contract test**

Run: `node --test tests/homepage-content.test.js`

Expected: FAIL only on app-script assertions for `systemGalleryItems`, `initHeroCanvas`, and `openGalleryItem`.

- [ ] **Step 4: Commit the HTML structure**

Run:

```bash
git add public/index.html
git commit -m "feat: update homepage redesign structure"
```

Expected: Commit succeeds with `public/index.html`.

---

### Task 3: Implement Rendering, Gallery, and Canvas Behavior

**Files:**
- Modify: `public/app.js`

- [ ] **Step 1: Replace portfolio, skill, and gallery data**

Use these top-level constants in `public/app.js`:

```js
const portfolioItems = [
  { id: "matrix-waterproofing", title: "Matrix Waterproofing", category: "SEO + Google Business + Lead Generation", role: "Construction and waterproofing marketing", result: "Result: +51% organic traffic, 18 keywords Top-3", work: "SEO, Google Business Profile, local lead generation, reporting", tags: ["SEO", "Google Business", "Lead Generation"], industry: "Construction, Dubai", tools: "WordPress, GA4, GSC, Google Business Profile, SEO reporting", visual: "matrix" },
  { id: "dreamland-real-estate", title: "Dreamland Real Estate", category: "Real Estate Marketing in Dubai", role: "Dubai real estate marketing", result: "Work: Ads, SEO, social media, property creatives", work: "Ads, SEO, social media, property creatives", tags: ["Real Estate", "Ads", "Creative"], industry: "Real Estate, Dubai", tools: "Google Ads, Meta Ads, WordPress, Canva, GA4", visual: "dreamland" },
  { id: "catchmytours", title: "CatchMyTours", category: "Travel Marketing", role: "Travel campaign growth", result: "Work: Google Ads, Meta Ads, SEO, email campaigns", work: "Google Ads, Meta Ads, SEO, email campaigns", tags: ["Travel", "Google Ads", "Email"], industry: "Travel and Hospitality", tools: "Google Ads, Meta Ads, SEO, Email Marketing", visual: "catchmytours" },
  { id: "ai-lead-automation", title: "AI Lead Automation", category: "Lead follow-up system", role: "AI automation and CRM flow", result: "Work: Website/ads leads to WhatsApp follow-up to Google Sheet/CRM", work: "Website and ad leads, WhatsApp follow-up, Google Sheet/CRM routing", tags: ["AI Automation", "WhatsApp", "CRM"], industry: "Service Businesses", tools: "n8n, AI Agents, Google Sheets, WhatsApp workflows", visual: "automation" },
];

const skills = ["Google Ads", "Meta Ads", "SEO", "WordPress", "GA4", "GSC", "GTM", "Google Business Profile", "Photoshop", "Canva", "n8n", "AI Agents", "Google Sheets"];

const systemGalleryItems = [
  { id: "lead-follow-up", title: "Lead Follow-Up Flow", type: "WhatsApp + CRM", description: "Website and ad leads routed into fast WhatsApp follow-up and sales tracking." },
  { id: "seo-reporting", title: "SEO Reporting System", type: "GA4 + GSC", description: "Monthly reporting structure for traffic, rankings, and business actions." },
  { id: "real-estate-routing", title: "Real Estate Lead Routing", type: "Property Inquiry System", description: "Buyer inquiries organized by budget, location, and property type." },
  { id: "campaign-tracker", title: "Campaign Tracker", type: "Ads + Sheets", description: "Paid campaign performance organized into a clean tracking view." },
];
```

- [ ] **Step 2: Render portfolio, skills, and systems**

Implement `renderPortfolio()`, `renderSkills()`, and `renderSystemsGallery()` so they fill `#portfolio-grid`, `#skill-cloud`, and `#systems-grid`. Portfolio cards must use class `portfolio-card reveal`; gallery buttons must use class `system-tile reveal`; both must call `openCaseStudy(id)` or `openGalleryItem(id)` on click.

- [ ] **Step 3: Implement `openGalleryItem(id)`**

Use the existing `#case-modal` and `#case-modal-content` elements. The modal content must include `Systems Gallery`, the selected title, a `.gallery-preview` visual block, and a `.case-detail-grid` containing System, Type, and Use fields.

- [ ] **Step 4: Implement `initHeroCanvas()`**

Add a decorative canvas animation that:

- Reads `#hero-canvas`.
- Scales for `devicePixelRatio` up to 2.
- Draws a soft gradient sky, drifting watercolor smoke circles, a stylized skyline, and a central tower that builds upward over roughly 150 frames.
- Uses `prefers-reduced-motion: reduce` to draw the completed scene once without looping.
- Registers a resize listener to keep the canvas sharp.

- [ ] **Step 5: Update startup**

`loadPortfolio()` must call:

```js
renderPortfolio();
renderSkills();
renderSystemsGallery();
initReveal();
initCounters();
initMagneticButtons();
initModal();
initHeroCanvas();
```

Keep `setContact()`, `toWhatsApp()`, `initCounters()`, `initReveal()`, `initMagneticButtons()`, `closeModal()`, and `escapeHtml()` working.

- [ ] **Step 6: Run test and commit JavaScript**

Run: `node --test tests/homepage-content.test.js`

Expected: PASS.

Run:

```bash
git add public/app.js
git commit -m "feat: add portfolio gallery and hero canvas behavior"
```

Expected: Commit succeeds with `public/app.js`.

---

### Task 4: Apply Watercolor/Smoke Styling

**Files:**
- Modify: `public/site.css`

- [ ] **Step 1: Update theme variables**

Use a multi-color creative palette:

```css
:root {
  --bg: #120b20;
  --bg-soft: #1c1230;
  --panel: rgba(255, 255, 255, 0.09);
  --paper: #fff8fb;
  --paper-card: #ffffff;
  --text: #fffafd;
  --muted: #d8c9df;
  --ink: #20162b;
  --ink-muted: #6f6078;
  --accent: #49ddce;
  --accent-rose: #ff8ac8;
  --accent-gold: #ffe08a;
  --line: rgba(255, 255, 255, 0.18);
  --dark-line: rgba(32, 22, 43, 0.13);
  --shadow: 0 26px 90px rgba(36, 14, 52, 0.34);
}
```

- [ ] **Step 2: Style hero canvas and smoke layer**

Define `.hero`, `.hero-canvas`, `.hero-smoke`, `.hero-copy`, `.keyword-row`, `.hero-actions`, and `.button` so desktop uses a split composition and mobile stacks text above the canvas. Text must remain above animation layers with `z-index`.

- [ ] **Step 3: Style five result boxes**

Define `.results-section` as a five-column grid on wide screens. Define `.result-card` with `::before` watercolor/smoke hover animation, readable text, and no text overlap.

- [ ] **Step 4: Style portfolio cards**

Define `.portfolio-grid`, `.portfolio-card`, `.portfolio-card::before`, `.portfolio-card::after`, `.portfolio-visual`, `.portfolio-copy`, `.tag-row`, and `.view-project`. `.portfolio-card.is-visible::after` must run a top-to-bottom shine animation.

- [ ] **Step 5: Style skills and systems gallery**

Define `.skill-cloud`, `.skill-cloud span`, `.systems-grid`, `.system-tile`, `.system-art`, and `.gallery-preview`. Skills must be tags only, not grouped cards.

- [ ] **Step 6: Add keyframes and responsive rules**

Add `@keyframes smokeDrift` and `@keyframes shineDrop`. Add breakpoints at about `1040px`, `860px`, and `620px` so hero, results, portfolio, systems, contact, and modal layouts fit without overlap. Keep the existing `prefers-reduced-motion` block and ensure animation durations are reduced there.

- [ ] **Step 7: Run build and commit CSS**

Run: `npm run build`

Expected: PASS with `Build check passed. Hostinger can run this app with npm start.`

Run:

```bash
git add public/site.css
git commit -m "feat: apply watercolor portfolio styling"
```

Expected: Commit succeeds with `public/site.css`.

---

### Task 5: Full Verification And Polish

**Files:**
- Modify: `public/index.html`, `public/site.css`, `public/app.js`, or `tests/homepage-content.test.js` only if verification reveals issues.

- [ ] **Step 1: Run all automated checks**

Run:

```bash
npm test
npm run build
```

Expected:

- `npm test` passes all tests.
- `npm run build` prints `Build check passed. Hostinger can run this app with npm start.`

- [ ] **Step 2: Start local server**

Run: `npm run dev`

Expected: `server.js` starts the local Express site.

- [ ] **Step 3: Manually verify the homepage**

Verify:

- Hero shows name, role, Dubai, keyword row, and three buttons.
- Canvas renders a skyline/building animation without covering text.
- Results section shows exactly five boxes.
- Result boxes hover with watercolor/smoke movement while text stays readable.
- Portfolio section shows exactly four cards.
- Portfolio cards reveal on scroll, glow, shine, and open project modals.
- Skills section shows small tags only.
- Systems gallery opens the modal/lightbox on click.
- Contact shows WhatsApp, Email, LinkedIn.
- Mobile width has no overlapping text/buttons.

- [ ] **Step 4: Commit verification fixes only if needed**

If fixes were needed, run:

```bash
git add public/index.html public/site.css public/app.js tests/homepage-content.test.js
git commit -m "fix: polish redesigned portfolio verification"
```

Expected: Commit is created only when verification produced code changes.
