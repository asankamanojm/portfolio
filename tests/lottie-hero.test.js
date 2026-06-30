const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "public", "site.css"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("hero uses the astronaut Lottie animation instead of the rocket illustration", () => {
  assert.match(html, /class="hero-lottie-shell astronaut-lottie-shell"/);
  assert.match(html, /id="hero-lottie"/);
  assert.match(html, /data-animation="\/assets\/astronaut-illustration\.json"/);
  assert.match(html, /\/vendor\/lottie-web\/lottie\.min\.js/);
  assert.match(css, /\.astronaut-lottie-shell/);
  assert.match(css, /\.hero-lottie/);
  assert.match(css, /height: min\(72vw, 760px\)/);
  assert.match(css, /background: transparent/);
  assert.match(css, /border: 0/);
  assert.match(app, /function initHeroLottie/);
  assert.match(app, /lottie\.loadAnimation/);
  assert.ok(fs.existsSync(path.join(root, "public", "assets", "astronaut-illustration.json")));
  assert.doesNotMatch(html, /class="rocket-hero"/);
  assert.doesNotMatch(html, /class="rocket-boy"/);
});

test("hero uses compact navy starfield motion background", () => {
  assert.match(html, /class="hero-watercolor"/);
  assert.match(css, /--cursor-x/);
  assert.match(css, /--cursor-y/);
  assert.match(css, /--wash-hue/);
  assert.match(css, /--star-shift/);
  assert.match(css, /\.hero-watercolor/);
  assert.match(css, /\.hero-watercolor::before/);
  assert.match(css, /#020817/);
  assert.match(css, /starDrift/);
  assert.match(css, /min-height: min\(760px, calc\(100vh - 74px\)\)/);
  assert.match(app, /function initHeroWatercolorCursor/);
  assert.match(app, /function initHeroStarScroll/);
  assert.match(app, /mousemove/);
  assert.match(app, /style\.setProperty\("--cursor-x"/);
  assert.match(app, /style\.setProperty\("--wash-hue"/);
  assert.match(app, /style\.setProperty\("--star-shift"/);
});

test("header starts transparent with white text then transitions after hero scroll", () => {
  assert.match(html, /<header class="site-header"/);
  assert.match(css, /background: rgba\(2, 8, 23, 0\.16\)/);
  assert.match(css, /color: #ffffff/);
  assert.match(css, /\.site-header\.is-scrolled/);
  assert.match(css, /background: rgba\(255, 255, 255, 0\.94\)/);
  assert.match(css, /\.site-header\.is-scrolled nav a/);
  assert.match(css, /text-transform: uppercase/);
  assert.match(css, /letter-spacing: 0\.14em/);
  assert.match(css, /font-weight: 500/);
  assert.match(app, /function initHeaderScrollState/);
  assert.match(app, /classList\.toggle\("is-scrolled"/);
});

test("hero typography and astronaut scale respond across screen sizes", () => {
  assert.match(css, /h1 \{\s*font-size: clamp\(2\.75rem, 7\.6vw, 6\.9rem\)/);
  assert.match(css, /\.role \{\s*color: var\(--text\);\s*font-size: clamp\(1\.05rem, 2vw, 1\.76rem\)/);
  assert.match(css, /\.hero-stack,\s*\.tagline \{\s*color: var\(--muted\);\s*font-size: clamp\(0\.86rem, 1\.35vw, 1\.05rem\)/);
  assert.match(css, /@media \(max-width: 1040px\)/);
  assert.match(css, /height: min\(82vw, 620px\)/);
  assert.match(css, /@media \(max-width: 620px\)/);
  assert.match(css, /height: min\(110vw, 430px\)/);
});
