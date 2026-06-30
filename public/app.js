const portfolioItems = [
  {
    id: "dreamland-real-estate",
    title: "Dreamland Real Estate",
    category: "Ads",
    role: "Digital Marketing Specialist",
    result: "Property campaigns / SEO / Paid Ads / Creatives",
    tags: ["Ads", "SEO", "Creative", "Real Estate"],
    industry: "Real Estate, Dubai",
    tools: "Google Ads, Meta Ads, WordPress, Canva, GA4, YouTube",
    visual: "realestate",
    coverImage: "/portfolio-media/dreamland real estate/dreamland-main.jpg",
    description: "Real Estate marketing campaigns in Dubai. Multi-channel property campaigns featuring Google Ads, Meta Ads, search engine optimization (SEO), and dynamic video creatives to drive qualified buyer inquiries for off-plan property launches.",
    youtube: [
      "https://youtube.com/shorts/3Sx86S5ctd8?feature=share",
      "https://youtube.com/shorts/ltH2H5trnq8?feature=share",
      "https://youtube.com/shorts/42CxV3WDJ9c?feature=share",
      "https://youtube.com/shorts/PU0rojM3tkA?feature=share",
      "https://youtube.com/shorts/BE05-4LypoY?feature=share"
    ],
    website: "https://dreamlanddubai.ae/",
    instagram: "https://www.instagram.com/dreamlandrealestate.dubai/"
  },
  {
    id: "matrix-waterproofing",
    title: "Matrix Waterproofing",
    category: "SEO",
    role: "SEO Growth / Construction Marketing",
    result: "+51% organic traffic / 18 Top-3 keywords",
    tags: ["SEO", "GMB", "Reporting", "Construction"],
    industry: "Construction, Dubai",
    tools: "WordPress, GA4, GSC, Semrush, Google Business Profile",
    visual: "growth",
    description: "Comprehensive search engine optimization campaign for a waterproofing and construction fixing company in Dubai. Achieved +51% organic growth and 18 top-3 ranking positions on Google through technical SEO, content generation, and local SEO optimizations.",
    images: [
      "/portfolio-media/matrix bldg waterproofing/matrix case studies firelynx - main file.jpg",
      "/portfolio-media/matrix bldg waterproofing/albedo case studies firelynx.jpg",
      "/portfolio-media/matrix bldg waterproofing/portfolio (2).jpeg",
      "/portfolio-media/matrix bldg waterproofing/portfolio 1 (1).jpeg",
      "/portfolio-media/matrix bldg waterproofing/portfolio 1 (3).jpeg",
      "/portfolio-media/matrix bldg waterproofing/portfolio 1 (4).jpeg",
      "/portfolio-media/matrix bldg waterproofing/portfolio 1 (5).jpeg"
    ]
  },
  {
    id: "catchmytours",
    title: "CatchMyTours",
    category: "Ads",
    role: "Travel Marketing Funnel",
    result: "SEO / Google Ads / Meta Ads / Email remarketing",
    tags: ["Travel", "Ads", "Email", "SEO"],
    industry: "Travel and Hospitality",
    tools: "Google Ads, Meta Ads, SEO, Email Marketing",
    visual: "travel",
    description: "Multi-channel advertising campaigns and travel marketing funnels for a tour operator. Implemented Google Search Ads, Meta Ads retargeting, SEO, and email marketing workflows to scale tour bookings and increase brand engagement.",
    images: [
      "/portfolio-media/catchmytours/catch my tours - cover image.jpg",
      "/portfolio-media/catchmytours/35.jpg"
    ],
    website: "https://www.catchmytour.lk/",
    facebook: "https://www.facebook.com/catchmytournow/"
  },
  {
    id: "ai-automation-seo",
    title: "AI Automation SEO",
    category: "SEO",
    role: "SEO & CRM Architect",
    result: "Turn traffic into leads / Automated growth",
    tags: ["SEO", "AI", "CRM", "Automation"],
    industry: "Lead Gen & Marketing, Dubai",
    tools: "SEO Tools, AI Agents, CRM, GSC, Looker Studio",
    visual: "growth",
    description: "This AI Automation SEO system is designed to turn website traffic into real business leads. It combines keyword research, SEO optimization, AI content creation, lead capture, CRM automation, and performance tracking into one connected growth process. The goal is to improve organic visibility, attract qualified prospects, and automate the journey from traffic to leads.",
    images: [
      "/portfolio-media/ai automation SEO/high-level-description-a-premium-futuris_Yptj9PgsUJO6TEdaduMQbA_hMRFU5XRQXCeePrd4nludQ.jpg",
      "/portfolio-media/ai automation SEO/ChatGPT Image Jun 30, 2026, 06_38_27 PM.png"
    ]
  },
  {
    id: "ai-lead-automation",
    title: "AI Lead Automation Solution",
    category: "Automation",
    role: "Automation & Outreach Specialist",
    result: "Consistent sales pipeline & follow-ups",
    tags: ["AI", "CRM", "WhatsApp", "n8n"],
    industry: "B2B Services",
    tools: "n8n, AI Agents, Email Verification APIs, CRM, WhatsApp",
    visual: "automation",
    description: "I built an AI-powered lead generation and email marketing workflow that helps businesses find the right prospects, verify contacts, send personalized outreach, manage follow-ups, track replies, and book meetings. The system reduces manual outreach work while creating a more consistent and professional sales process.",
    images: [
      "/portfolio-media/lead gen ai automation solution/high-level-description-a-premium-futuris_6tr8AWR6UGuSva_YG6iHBg_XrB7rFM-SoaWs6wW-7a22g_cover.jpg",
      "/portfolio-media/lead gen ai automation solution/ChatGPT Image Jun 30, 2026, 06_31_36 PM.png"
    ]
  },
  {
    id: "vineyard-club",
    title: "Vineyard Club Label Design",
    category: "Creative",
    role: "Graphic Designer",
    result: "Bespoke label design & luxury packaging branding",
    tags: ["Design", "Branding", "Creative", "Luxury"],
    industry: "Luxury Consumer Goods",
    tools: "Photoshop, Illustrator, InDesign",
    visual: "creative",
    description: "Graphic and label design for high-end boutique wine bottles. Designed numbered edition labels and promotional graphic banners to enhance product exclusivity and brand appeal.",
    images: [
      "/portfolio-media/vineyard club/NUMBERED EDITION LABLE.JPG"
    ]
  }
];

const filters = ["All", "SEO", "Ads", "Websites", "Automation", "Creative"];

const skillGroups = {
  "marketing-skills": ["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "GMB", "GA4", "GSC", "GTM"],
  "web-skills": ["WordPress", "Elementor", "Shopify", "HTML/CSS", "JavaScript"],
  "automation-skills": ["n8n", "AI Agents", "Python", "APIs", "Google Sheets", "WhatsApp workflows"],
  "creative-skills": ["Photoshop", "Illustrator", "Premiere Pro", "Canva", "Figma"],
};

async function loadPortfolio() {
  const response = await fetch("/api/portfolio");
  const data = await response.json();
  const profile = data.profile;

  document.title = "Asanka Manoj | Digital Marketing & AI Automation Portfolio";
  setContact("email-link", profile.email, `mailto:${profile.email}`);
  setContact("cv-link", profile.cvUrl, profile.cvUrl);
  setContact("cv-link-top", profile.cvUrl, profile.cvUrl);
  setContact("linkedin-link", profile.linkedin || "", profile.linkedin || "#");
  setContact("whatsapp-link", profile.phone, toWhatsApp(profile.phone));
  setContact("whatsapp-link-top", profile.phone, toWhatsApp(profile.phone));
  setContact("sticky-whatsapp", profile.phone, toWhatsApp(profile.phone));
  setContact("call-link", profile.phone, toTel(profile.phone));
  setContact("call-link-top", profile.phone, toTel(profile.phone));
  setContact("sticky-call", profile.phone, toTel(profile.phone));
  
  // Set Facebook and Instagram from response or default fallback
  setContact("facebook-link", "https://www.facebook.com/manoj.mudannayake", "https://www.facebook.com/manoj.mudannayake");
  setContact("instagram-link", "https://www.instagram.com/manoj_mudannayake/", "https://www.instagram.com/manoj_mudannayake/");

  renderFilters();
  renderPortfolio("All");
  renderSkillGroups();
  initReveal();
  initCounters();
  initMagneticButtons();
  initHeroLottie();
  initHeroBackgroundLottie();
  initHeaderScrollState();
  initMobileNavigation();
  initModal();
  initMediaLightbox();
  initStatsScroll();
}

function renderFilters() {
  const wrapper = document.getElementById("portfolio-filters");
  wrapper.innerHTML = "";
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = filter;
    button.className = filter === "All" ? "filter active" : "filter";
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderPortfolio(filter);
    });
    wrapper.appendChild(button);
  });
}

function renderPortfolio(activeFilter) {
  const grid = document.getElementById("portfolio-grid");
  const items = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter || item.tags.includes(activeFilter));

  grid.innerHTML = "";
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "portfolio-card reveal";
    article.dataset.project = item.id;
    
    // Resolve cover image: prefer explicit coverImage, then first image in array
    const coverImage = item.coverImage || (item.images && item.images.length > 0 ? item.images[0] : "");
    const visualStyle = coverImage 
      ? `style="background: url('${encodeURI(coverImage)}') center center / cover no-repeat; background-size: cover;"` 
      : "";

    article.innerHTML = `
      <div class="portfolio-visual visual-${item.visual}" ${visualStyle}></div>
      <div class="portfolio-copy">
        <p>${escapeHtml(item.category)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <strong>${escapeHtml(item.role)}</strong>
        <span>${escapeHtml(item.result)}</span>
        <div class="tag-row">${item.tags.map((tag) => `<em>${escapeHtml(tag)}</em>`).join("")}</div>
      </div>
      <button class="view-project" type="button">View Project</button>
    `;
    article.addEventListener("click", () => openCaseStudy(item.id));
    grid.appendChild(article);
  });
  initReveal();
}

function getYoutubeVideoId(url) {
  if (!url) return "";
  let videoId = "";
  const normalized = url.trim();
  if (normalized.includes("/shorts/")) {
    const part = normalized.split("/shorts/")[1];
    videoId = part.split("?")[0].split("/")[0];
  } else if (normalized.includes("youtu.be/")) {
    const part = normalized.split("youtu.be/")[1];
    videoId = part.split("?")[0].split("/")[0];
  } else if (normalized.includes("youtube.com/watch")) {
    try {
      const params = new URLSearchParams(normalized.split("?")[1]);
      videoId = params.get("v") || "";
    } catch(e) { videoId = ""; }
  }
  return videoId;
}

function getYoutubeEmbedUrl(url, autoplay = false) {
  const videoId = getYoutubeVideoId(url);
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return videoId ? `https://www.youtube.com/embed/${videoId}?${params.toString()}` : "";
}

function getYoutubeThumbnail(url) {
  const videoId = getYoutubeVideoId(url);
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
}

function openCaseStudy(id) {
  const item = portfolioItems.find((project) => project.id === id);
  if (!item) return;
  const modal = document.getElementById("case-modal");
  const content = document.getElementById("case-modal-content");

  // Build Links HTML
  let linksHtml = "";
  if (item.website) {
    linksHtml += `<a href="${item.website}" target="_blank" rel="noreferrer" class="button primary modal-link">Visit Website</a>`;
  }
  if (item.facebook) {
    linksHtml += `<a href="${item.facebook}" target="_blank" rel="noreferrer" class="button modal-link">Facebook Page</a>`;
  }
  if (item.instagram) {
    linksHtml += `<a href="${item.instagram}" target="_blank" rel="noreferrer" class="button modal-link">Instagram Profile</a>`;
  }

  // Build Media HTML
  let mediaHtml = "";

  // Check if we have videos
  if (item.videos && item.videos.length > 0) {
    mediaHtml += `
      <div class="modal-section">
        <h3>Video Demonstration</h3>
        <div class="video-player-wrapper">
          <button class="media-preview-button video-preview-button" type="button" data-media-type="video" data-media-src="${item.videos[0]}" data-media-title="${escapeHtml(item.title)} Video" data-media-poster="${item.images && item.images[0] ? item.images[0] : ''}">
            <video muted playsinline class="modal-video" src="${item.videos[0]}" poster="${item.images && item.images[0] ? item.images[0] : ''}"></video>
            <span>Play Video</span>
          </button>
        </div>
      </div>
    `;
  }

  // Check if we have YouTube videos (Shorts or standard)
  if (item.youtube && item.youtube.length > 0) {
    // Separate the first one (main video) from portfolio videos
    const mainVideo = item.youtube[0];
    const extraVideos = item.youtube.slice(1);
    const mainEmbedUrl = getYoutubeEmbedUrl(mainVideo);

    let youtubeHtml = "";
    if (mainEmbedUrl) {
      const mainThumb = getYoutubeThumbnail(mainVideo);
      youtubeHtml += `
        <div class="yt-main-wrapper">
          <button class="yt-short-frame media-preview-button" type="button" data-media-type="youtube" data-media-src="${mainVideo}" data-media-title="Dreamland Real Estate Main Video">
            ${mainThumb ? `<img src="${mainThumb}" alt="Dreamland Real Estate Main Video" loading="lazy" />` : ""}
            <span>Play Main Video</span>
          </button>
        </div>
      `;
    }

    if (extraVideos.length > 0) {
      const extraFrames = extraVideos.map((url, index) => {
        const embed = getYoutubeEmbedUrl(url);
        const thumb = getYoutubeThumbnail(url);
        return embed ? `
          <button class="yt-short-frame media-preview-button" type="button" data-media-type="youtube" data-media-src="${url}" data-media-title="Dreamland Portfolio Video ${index + 1}">
            ${thumb ? `<img src="${thumb}" alt="Dreamland Portfolio Video ${index + 1}" loading="lazy" />` : ""}
            <span>Play Video</span>
          </button>
        ` : "";
      }).join("");

      if (extraFrames.trim()) {
        youtubeHtml += `
          <h4 class="yt-sub-label">Portfolio Videos</h4>
          <div class="yt-scroll-row">${extraFrames}</div>
        `;
      }
    }

    mediaHtml += `
      <div class="modal-section">
        <h3>Campaign Videos</h3>
        ${youtubeHtml}
      </div>
    `;
  }

  // Check if we have images
  if (item.images && item.images.length > 0) {
    mediaHtml += `
      <div class="modal-section">
        <h3>Screenshots & Proof</h3>
        <div class="gallery-grid">
          ${item.images.map(img => `
            <button class="gallery-item media-preview-button" type="button" data-media-type="image" data-media-src="${img}" data-media-title="${escapeHtml(item.title)} Screenshot">
              <img src="${img}" alt="${escapeHtml(item.title)} Screenshot" loading="lazy" />
              <span class="gallery-overlay"><span>View Preview</span></span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <p class="eyebrow">Case Study</p>
    <h2 id="case-title">${escapeHtml(item.title)}</h2>
    
    <div class="case-detail-grid">
      <div><span>Project</span><strong>${escapeHtml(item.title)}</strong></div>
      <div><span>Industry</span><strong>${escapeHtml(item.industry || 'Digital Marketing')}</strong></div>
      <div><span>Role</span><strong>${escapeHtml(item.role)}</strong></div>
      <div><span>Result</span><strong>${escapeHtml(item.result)}</strong></div>
      <div class="wide"><span>Tools & Technologies</span><strong>${escapeHtml(item.tools)}</strong></div>
    </div>

    ${item.description ? `
      <div class="modal-section description-section">
        <h3>Overview</h3>
        <p class="project-description">${escapeHtml(item.description)}</p>
      </div>
    ` : ''}

    ${linksHtml ? `
      <div class="modal-section links-section">
        <div class="modal-links-row">${linksHtml}</div>
      </div>
    ` : ''}

    ${mediaHtml}
  `;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function initModal() {
  const modal = document.getElementById("case-modal");
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener("click", (event) => {
    const trigger = event.target.closest(".media-preview-button");
    if (!trigger) return;
    event.stopPropagation();
    openMediaLightbox(trigger.dataset.mediaType, trigger.dataset.mediaSrc, trigger.dataset.mediaTitle, trigger.dataset.mediaPoster);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const lightbox = document.getElementById("media-lightbox");
    if (lightbox && !lightbox.classList.contains("hidden")) {
      closeMediaLightbox();
      return;
    }
    closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById("case-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  
  // Pause any playing videos inside the modal content
  const content = document.getElementById("case-modal-content");
  const videos = content.querySelectorAll("video");
  videos.forEach(v => v.pause());
  const iframes = content.querySelectorAll("iframe");
  iframes.forEach(iframe => {
    const src = iframe.src;
    iframe.src = src; // this resets the iframe loading and stops video audio!
  });
  closeMediaLightbox();
}

function initMobileNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("site-nav");
  if (!toggle || !header || !nav) return;

  const closeMenu = () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 620) closeMenu();
  });
}

function initMediaLightbox() {
  const lightbox = document.getElementById("media-lightbox");
  const closeButton = document.getElementById("media-close");
  if (!lightbox || !closeButton) return;

  closeButton.addEventListener("click", closeMediaLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeMediaLightbox();
  });
}

function openMediaLightbox(type, src, title = "Media preview", poster = "") {
  const lightbox = document.getElementById("media-lightbox");
  const content = document.getElementById("media-lightbox-content");
  if (!lightbox || !content || !src) return;

  const safeTitle = escapeHtml(title);
  let media = "";
  if (type === "youtube") {
    const embed = getYoutubeEmbedUrl(src, true);
    if (!embed) return;
    media = `
      <div class="media-frame short">
        <iframe
          src="${embed}"
          title="${safeTitle}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    `;
  } else if (type === "video") {
    media = `
      <div class="media-frame video">
        <video controls autoplay playsinline src="${src}" ${poster ? `poster="${poster}"` : ""}></video>
      </div>
    `;
  } else {
    media = `
      <div class="media-frame image">
        <img src="${src}" alt="${safeTitle}" />
      </div>
    `;
  }

  content.innerHTML = `
    <h3>${safeTitle}</h3>
    ${media}
  `;
  lightbox.classList.remove("hidden");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeMediaLightbox() {
  const lightbox = document.getElementById("media-lightbox");
  const content = document.getElementById("media-lightbox-content");
  if (!lightbox || !content) return;
  lightbox.classList.add("hidden");
  lightbox.setAttribute("aria-hidden", "true");
  content.innerHTML = "";
}

function renderSkillGroups() {
  Object.entries(skillGroups).forEach(([id, skills]) => {
    const wrapper = document.getElementById(id);
    if (!wrapper) return;
    wrapper.innerHTML = "";
    skills.forEach((skill) => {
      const pill = document.createElement("span");
      pill.textContent = skill;
      wrapper.appendChild(pill);
    });
  });
}

function setContact(id, value, href) {
  const link = document.getElementById(id);
  if (!link) return;
  if (!value) {
    link.classList.add("disabled");
    return;
  }
  link.href = href;
  link.classList.remove("disabled");
}

function toWhatsApp(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "#";
}

function toTel(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits ? `tel:+${digits}` : "#";
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.done) return;
        entry.target.dataset.done = "true";
        const target = Number(entry.target.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 34));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = target === 51 ? `+${current}%` : `${current}+`;
        }, 22);
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((counter) => observer.observe(counter));
}

function initMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.1;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
}

function initHeroLottie() {
  const container = document.getElementById("hero-lottie");
  if (!container || !window.lottie) return;
  window.lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: container.dataset.animation,
  });
}

function initHeroBackgroundLottie() {
  const container = document.getElementById("hero-lottie-bg");
  if (!container || !window.lottie) return;
  window.lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: container.dataset.animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
  });
}

function initHeaderScrollState() {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  if (!header || !hero) return;

  const updateHeader = () => {
    const threshold = Math.max(80, hero.offsetHeight * 0.42);
    header.classList.toggle("is-scrolled", window.scrollY > threshold);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function initStatsScroll() {
  const resultBar = document.getElementById("results");
  if (!resultBar) return;
  
  window.addEventListener("scroll", () => {
    const rect = resultBar.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    
    if (rect.top < viewHeight && rect.bottom > 0) {
      const scrolledFraction = (viewHeight - rect.top) / (viewHeight + rect.height);
      const shift = (scrolledFraction - 0.5) * 120; // shifting up to 120px
      
      const stats = resultBar.querySelectorAll(".stat");
      stats.forEach((stat) => {
        stat.style.transform = `translateX(${shift}px)`;
      });
    }
  }, { passive: true });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

loadPortfolio();
