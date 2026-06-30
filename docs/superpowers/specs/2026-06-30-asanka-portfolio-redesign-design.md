# Asanka Portfolio Redesign Design

Date: 2026-06-30

## Goal

Redesign the portfolio homepage for Asanka Manoj as a creative, fluid digital marketing and AI automation portfolio for Dubai clients. The page should feel artistic through watercolor and smoke motion, while still making the marketing proof, Dubai experience, and contact actions easy to scan.

## Current Project Context

The project is a small Node/Express site serving static frontend files from `public/`. The homepage is `public/index.html`, styling is in `public/site.css`, and the interactive portfolio rendering is in `public/app.js`. The site already has an admin upload path and placeholder portfolio data, so the redesign should keep the current lightweight hosting model and avoid introducing a build step or frontend framework.

## Visual Direction

Use a creative watercolor/smoke identity with softer gradients, ink-like hover motion, and fluid scroll reveals. The hero should include a canvas-style animated scene: a central building constructs itself upward, with a stylized Dubai skyline in the background and subtle drifting smoke/watercolor particles.

The canvas should be the main rich animation. Other sections should use CSS and small JavaScript interactions so the site stays practical on Hostinger/static hosting and remains responsive on mobile.

## Page Structure

### 1. Hero

Content:

- Asanka Manoj
- Digital Marketing & AI Automation Specialist
- Dubai, UAE
- Small keyword row: SEO, Google Ads, Meta Ads, WordPress, Web Development, Lead Funnels, AI Automation
- Buttons: View Work, Download CV, WhatsApp

Behavior:

- Replace the current dashboard-style hero preview with a full canvas animation area.
- The canvas draws a stylized Dubai skyline and a primary building that assembles itself from lines, floors, and glowing accents.
- The animation should loop gently after the initial build sequence.
- Hero text remains readable and prominent: desktop uses a split composition, while mobile stacks text above the animated scene.

### 2. Results

Use exactly five hover-animated boxes:

- 6+ Years: Digital marketing experience
- +51%: Organic traffic growth
- 18 Keywords: Google Top-3
- Dubai Experience: Real estate & construction marketing
- Skills: 10+ graphic artist + creatives, 3+ performance marketing experience

Behavior:

- Each box uses a watercolor/smoke hover effect.
- The effect should feel fluid but should not obscure the text.
- Counters may remain for numeric values.

### 3. Portfolio Work

Use cards only, with four featured cards:

- Matrix Waterproofing: SEO + Google Business + Lead Generation. Result: +51% organic traffic, 18 keywords Top-3.
- Dreamland Real Estate: Real Estate Marketing in Dubai. Work: Ads, SEO, social media, property creatives.
- CatchMyTours: Travel Marketing. Work: Google Ads, Meta Ads, SEO, email campaigns.
- AI Lead Automation: Lead follow-up system. Work: Website/ads leads to WhatsApp follow-up to Google Sheet/CRM.

Behavior:

- Cards pop up on scroll.
- Cards have a center glow during scroll reveal.
- A shining vertical line moves from top to bottom when a card becomes visible.
- Clicking a card opens the existing modal pattern with project details.

### 4. Skills

Use small tags only, not grouped cards:

Google Ads, Meta Ads, SEO, WordPress, GA4, GSC, GTM, Google Business Profile, Photoshop, Canva, n8n, AI Agents, Google Sheets.

The skills section should be compact and scannable.

### 5. Systems Gallery

Add a portfolio/gallery section for systems that Asanka has built. It should show polished visual tiles now and allow real uploaded images to replace them later.

Behavior:

- Show a grid of image-style cards with abstract system visuals until real screenshots are uploaded.
- Clicking a gallery item opens a popup/lightbox.
- Tile copy should describe the system category and avoid unfinished language.

### 6. Contact

Content:

Available for digital marketing, SEO, paid ads, real estate marketing, and AI automation work in Dubai.

Buttons:

- WhatsApp
- Email
- LinkedIn

## Components And Boundaries

- Keep the static structure in `public/index.html`.
- Keep major visual rules in `public/site.css`.
- Keep rendering and interaction code in `public/app.js`.
- Add a small canvas animation module inside `public/app.js` or as a separate static JS file only if the app file becomes too crowded.
- Do not add new dependencies unless absolutely required.

## Responsive Behavior

Desktop:

- Hero can use a two-layer or split composition with large text and animated canvas visible in the first viewport.
- Results use a five-column grid when space allows and wrap cleanly to two columns or one column on narrower screens.
- Portfolio cards use a two-column grid.

Mobile:

- Hero stacks text before the canvas or overlays text safely above it.
- Results and portfolio cards stack into one column.
- Canvas animation should scale down and respect reduced motion preferences.

## Accessibility And Performance

- Respect `prefers-reduced-motion` by reducing or pausing canvas and scroll animations.
- Keep readable contrast for all text over animated backgrounds.
- Buttons and modal controls must remain keyboard accessible.
- Canvas is decorative and should use appropriate ARIA treatment.
- The gallery modal should close via button, backdrop click, and Escape key.

## Testing

Run:

- `npm test`
- `npm run build`

Manually verify:

- Homepage loads without console errors.
- Hero canvas renders and animates.
- Result cards hover without hiding text.
- Portfolio cards reveal, glow, and open modals.
- Systems gallery opens image popups.
- Contact buttons keep the existing configured links and disabled behavior when profile fields are blank.
