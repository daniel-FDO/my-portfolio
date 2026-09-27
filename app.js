const LINKS = {
  linkedin: "https://www.linkedin.com/in/daniel-fasan-a0b503331/",
  github: "https://github.com/daniel-FDO",
  instagram:
    "https://www.instagram.com/d4ni3lllll__?stkn=Y2Y0Njk3NjczeW91&utm_source=qr",
  email: "danielfash2007@gmail.com",
  spotify: "https://open.spotify.com/user/313dgijnrcg4vwkwuuryvr4wqfb4?si=2398cc1ef403403d",
};

const projects = [
  {
    id: "porchlight",
    number: "01",
    name: "Porchlight Support Finder",
    category: "Community support",
    short:
      "A multi-page support finder for local services, contact details and practical guidance.",
    detail:
      "Built to help people find local support services, contact information and guidance. The site brings support options, Google Maps links, and routes to donation or volunteering into a clear experience.",
    feature: "Local support · Google Maps · Get involved",
    tech: "HTML · CSS · JavaScript",
    url: "https://porchlightwebproj.netlify.app/",
    image: "porchlight.webp",
    art: "art-porch",
  },
  {
    id: "blueprint",
    number: "02",
    name: "BluePrint",
    category: "Career tools",
    short:
      "A career-tools platform centred on a guided CV-building experience.",
    detail:
      "A career tools platform with a professional CV builder at its centre. Its landing page introduces the product, the guided CV flow and tools planned for later.",
    feature: "Career tools · CV builder",
    tech: "HTML · CSS · JavaScript",
    url: "https://blueprint-wig.onrender.com/",
    image: "blueprint.webp",
    art: "art-blueprint",
  },
  {
    id: "bank",
    number: "03",
    name: "Digitalbank",
    category: "Frontend practice",
    short:
      "A digital banking landing-page build with app visuals and responsive sections.",
    detail:
      "A Front-End Mentor project built with HTML, CSS and JavaScript. It practised responsive design and page structure, including product messaging, feature explanations and article layouts.",
    feature: "Responsive design · Interface layout",
    tech: "HTML · CSS · JavaScript",
    url: "https://digitalbankingweb.netlify.app/",
    image: "digitalbank.webp",
    art: "art-bank",
  },
  {
    id: "rps",
    number: "04",
    name: "Rock, Paper, Scissors",
    category: "Interactive project",
    short: "A quick browser game built around choice, score and replay.",
    detail:
      "A browser game built around the familiar rock, paper and scissors choices. The interface keeps each round, hand selection and score easy to follow.",
    feature: "JavaScript · DOM interaction",
    tech: "JavaScript · HTML · CSS",
    url: "https://rock-paper-scissors-daniel.netlify.app/",
    image: "rock-paper-scissors.webp",
    art: "art-rps",
  },
  {
    id: "ticket",
    number: "05",
    name: "Conference Ticket Generator",
    category: "Interactive web app",
    short: "A JavaScript-powered ticket generator that collects user details and creates a personalised conference ticket.",
    detail: "An interactive conference ticket generator. Users enter their name, email and GitHub username, then receive a personalised conference-style ticket.",
    feature: "Personalised ticket · Interactive form",
    tech: "HTML · CSS · JavaScript",
    url: "https://vermillion-panda-960b32.netlify.app/",
    image: "desktop-design-ticket.webp",
    art: "art-ticket",
  },
];

const work = [
  {
    title: "Front-end projects",
    org: "Frontend Mentor",
    date: "Ongoing",
    mode: "Independent practice",
    text: "Responsive websites, interactive forms and JavaScript challenges.",
    detail:
      "Current examples include a conference ticket generator, digital banking landing page and interactive exercises.",
  },
  {
    title: "Industry Placement Student",
    org: "Dover Library",
    date: "Current",
    mode: "EKC Canterbury College · T Level placement",
    text: "Supporting library operations and helping visitors professionally.",
    detail:
      "Shelving and organising stock, customer service, initiative, reliability and teamwork.",
  },
  {
    title: "Member",
    org: "The Black Apprentice Network (BAN)",
    date: "Sep 2025 — Present",
    mode: "Community",
    text: "Member of The Black Apprentice Network.",
    detail: "Member · Sep 2025 to present.",
  },
  {
    title: "Virtual Work Experience",
    org: "Skook Games",
    date: "Oct 2025",
    mode: "Digital and creative media",
    text: "Explored digital and creative media, including game development, design processes and teamwork in a professional setting.",
    detail: "Virtual work experience · 1 month.",
  },
  {
    title: "Cybersecurity Virtual Work Experience",
    org: "Fujitsu",
    date: "Oct 2025",
    mode: "Cybersecurity",
    text: "Explored key areas of cybersecurity, including online safety, digital threats and industry practices through interactive modules and tasks.",
    detail: "Virtual work experience · 1 month.",
  },
  {
    title: "Virtual Work Experience",
    org: "QA Ltd",
    date: "Jul 2025",
    mode: "Technology and IT",
    text: "Learned about the tech sector, IT training pathways and workplace skills through structured tasks and mentoring.",
    detail: "Virtual work experience · 1 month.",
  },
  {
    title: "Virtual Work Experience",
    org: "Experian UK",
    date: "Jul 2025",
    mode: "Finance and technology",
    text: "Gained insight into the finance and credit industry, teamwork and workplace expectations in a professional environment.",
    detail: "Virtual work experience · 1 month.",
  },
  {
    title: "NHS Digital Data Virtual Work Experience",
    org: "NHS",
    date: "Mar 2025",
    mode: "Digital data",
    text: "Virtual work experience exploring digital data in a health service context.",
    detail: "Virtual work experience · 1 month.",
  },
];

const education = [
  {
    title: "T Level Digital Software Development",
    org: "EKC Canterbury College",
    date: "Sep 2025 — Present",
    mode: "Year 2",
    text: "Programming, web development, software design, testing and digital systems.",
    detail:
      "Practical work with Python, JavaScript, HTML/CSS, data handling and software projects.",
  },
  {
    title: "BTEC Level 2 IT / Extended Certificate in ICT",
    org: "EKC Canterbury College",
    date: "Sep 2024 — Jul 2025",
    mode: "Double Award · Merit/Pass",
    text: "Foundations in IT systems, digital technology, programming and problem-solving.",
    detail: "Completed before starting the T Level.",
  },
  {
    title: "GCSEs",
    org: "Sandwich Technology School",
    date: "Dec 2023 — Jul 2024",
    mode: "Education",
    text: "Maths, English, Geography, Combined Science, English Literature and Statistics.",
    detail: "Grades are listed in my CV.",
  },
];

const nav = document.documentElement.dataset.singlePage === "true"
  ? [["Home", "#home", "home"], ["About", "#about", "about"], ["Projects", "#projects", "projects"], ["Experience", "#experience", "experience"], ["Education", "#education", "education"], ["Contact", "#contact", "contact"]]
  : [["Home", "./index.html", "home"], ["Projects", "./projects.html", "projects"], ["About", "./about.html", "about"], ["Experience", "./experience.html", "experience"], ["Contact", "./contact.html", "contact"]];

function preview(kind, full = false, numberOverride = "", deferImage = false) {
  const item = projects.find((project) => project.art === kind);
  if (!item) return "";
  const imageAttribute = deferImage ? `data-src="./assets/${item.image}"` : `src="./assets/${item.image}"`;
  return `<div class="preview preview-photo ${kind}${full ? " full-preview" : ""}" aria-label="${item.name} supplied screenshot"><img ${imageAttribute} alt="${item.name} website screenshot" loading="lazy" draggable="false"><span class="image-label">${numberOverride || item.number} / ${item.category}</span><span class="image-corner" aria-hidden="true">↗</span></div>`;
}

function projectCard(project, index, feature = false) {
  return `<article class="${feature ? "featured-project" : "project-card"} reveal" data-project="${project.id}" data-cursor="project" tabindex="0" role="button" aria-label="Open ${project.name} project details">
    <div class="${feature ? "feature-visual" : ""}">${preview(project.art)}${feature ? `<div class="feature-meta"><div><strong>${project.name}</strong><br><span>${project.category}</span></div><span class="feature-open" aria-hidden="true">↗</span></div>` : ""}</div>
    ${feature ? "" : `<div class="project-info"><div class="project-info-top"><span class="project-tag">${project.category}</span><span class="project-index">${project.number}</span></div><h2>${project.name}</h2><p>${project.short}</p><div class="feature-label">${project.feature}</div><div class="project-card-bottom"><span class="tech-list">${project.tech}</span><span class="card-action">Explore <b>↗</b></span></div></div>`}
  </article>`;
}

const page = document.documentElement.dataset.page || "home";
const singlePage = document.documentElement.dataset.singlePage === "true";
document.body.classList.add("js-ready");
const portfolioScrollTasks = new Set();
let portfolioScrollFrame = 0;
const portfolioScrollState = { y: window.scrollY, max: 1, progress: 0 };
function schedulePortfolioScroll() {
  if (portfolioScrollFrame) return;
  portfolioScrollFrame = requestAnimationFrame(() => {
    portfolioScrollFrame = 0;
    portfolioScrollState.y = window.scrollY;
    portfolioScrollState.max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    portfolioScrollState.progress = Math.min(1, Math.max(0, portfolioScrollState.y / portfolioScrollState.max));
    portfolioScrollTasks.forEach((task) => task(portfolioScrollState));
  });
}
window.addPortfolioScrollTask = (task) => portfolioScrollTasks.add(task);
window.addEventListener("scroll", schedulePortfolioScroll, { passive: true });
window.addEventListener("resize", schedulePortfolioScroll, { passive: true });
const identityOpening = document.querySelector(".identity-opening");
if (identityOpening) {
  if (document.documentElement.dataset.showIntro === "true") {
    window.setTimeout(() => {
      identityOpening.remove();
      delete document.documentElement.dataset.showIntro;
    }, 2800);
  } else {
    identityOpening.remove();
  }
}
const header = document.querySelector("#site-header");
header.innerHTML = `<div class="topbar"><a class="brand" href="./index.html" aria-label="Home"><span class="brand-dot">D</span><span>DANIEL FASAN</span></a><nav class="nav-links" aria-label="Main navigation">${nav.map(([name, url, id]) => `<a class="nav-link" href="${url}" ${page === id ? 'aria-current="page"' : ""}>${name}</a>`).join("")}</nav><div class="theme-control"><button class="theme-toggle" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Choose visual mode"><span class="theme-glyph" aria-hidden="true"></span><span class="theme-current">DAY</span></button><div class="theme-menu" hidden><div class="theme-menu-label">VISUAL MODE</div><button type="button" data-theme-choice="day">DAY</button><button type="button" data-theme-choice="studio">STUDIO</button><button type="button" data-theme-choice="night">NIGHT</button></div></div><div class="nav-end"><button class="sound-toggle" type="button" aria-pressed="false" aria-label="Play background music"><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span><span>Music off</span></button><a class="nav-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello ↗</a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button></div></div>`;
document.body.insertAdjacentHTML("beforeend", `<aside class="music-player" aria-label="Music player" aria-hidden="true"><div class="music-player-top"><span class="music-now"><i class="music-eq" aria-hidden="true"><b></b><b></b><b></b></i> NOW PLAYING</span><button class="music-collapse" type="button" aria-label="Collapse music player">−</button></div><div class="music-track-title" aria-live="polite">INNER LIGHTS</div><div class="music-track-count">01 / 02</div><div class="music-progress-row"><span class="music-time-current">0:00</span><input class="music-seek" type="range" min="0" max="1000" value="0" aria-label="Seek through track"><span class="music-time-total">0:00</span></div><div class="music-player-controls"><button type="button" class="music-previous" aria-label="Previous track">‹</button><button type="button" class="music-play" aria-label="Play">▶</button><button type="button" class="music-next" aria-label="Next track">›</button><label class="music-volume-label" aria-label="Volume"><span aria-hidden="true">VOL</span><input class="music-volume" type="range" min="0" max="1" step="0.01" value="0.68" aria-label="Volume"></label></div><div class="music-status" role="status" aria-live="polite"></div></aside>`);

const themeNames = ["day", "studio", "night"];
const themePalette = { day: "#F3F1EA", studio: "#D4D3CE", night: "#101111" };
const themeToggle = document.querySelector(".theme-toggle");
const themeMenu = document.querySelector(".theme-menu");
const themeToast = document.createElement("div");
themeToast.className = "theme-toast";
themeToast.setAttribute("aria-live", "polite");
document.body.append(themeToast);
function updateThemeControl(mode) {
  document.querySelector(".theme-current").textContent = mode.toUpperCase();
  themeToggle.setAttribute(
    "aria-label",
    `Visual mode: ${mode}. Choose visual mode`,
  );
  document
    .querySelector("meta[name=theme-color]")
    ?.setAttribute("content", themePalette[mode]);
  themeMenu.querySelectorAll("[data-theme-choice]").forEach((item) => {
    item.setAttribute(
      "aria-pressed",
      String(item.dataset.themeChoice === mode),
    );
  });
}
function closeThemeMenu() {
  themeMenu.hidden = true;
  themeToggle.setAttribute("aria-expanded", "false");
}
let themeChanging = false;
function setTheme(mode) {
  if (
    themeChanging ||
    !themeNames.includes(mode) ||
    mode === document.documentElement.dataset.theme
  ) {
    closeThemeMenu();
    return;
  }
  themeChanging = true;
  closeThemeMenu();
  const bounds = themeToggle.getBoundingClientRect();
  const x = bounds.left + bounds.width / 2;
  const y = bounds.top + bounds.height / 2;
  const wipe = document.createElement("div");
  wipe.className = "theme-wipe";
  wipe.style.setProperty("--wipe-x", `${x}px`);
  wipe.style.setProperty("--wipe-y", `${y}px`);
  wipe.style.setProperty("--wipe-colour", themePalette[mode]);
  document.body.append(wipe);
  wipe.addEventListener("animationend", (event) => {
    if (event.animationName === "theme-expand") {
      document.documentElement.dataset.theme = mode;
      try {
        localStorage.setItem("portfolio-theme", mode);
      } catch {}
      updateThemeControl(mode);
      wipe.classList.add("uncover");
    } else {
      wipe.remove();
      themeChanging = false;
      themeToast.textContent = `${mode.toUpperCase()} MODE`;
      themeToast.classList.add("show");
      clearTimeout(themeToast.hideTimer);
      themeToast.hideTimer = setTimeout(
        () => themeToast.classList.remove("show"),
        1100,
      );
    }
  });
}
let savedTheme = "day";
try {
  savedTheme = localStorage.getItem("portfolio-theme") || "day";
} catch {}
if (!themeNames.includes(savedTheme)) savedTheme = "day";
document.documentElement.dataset.theme = savedTheme;
updateThemeControl(savedTheme);
themeToggle.addEventListener("click", () => {
  const open = themeMenu.hidden;
  themeMenu.hidden = !open;
  themeToggle.setAttribute("aria-expanded", String(open));
});
themeMenu.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-theme-choice]");
  if (choice) setTheme(choice.dataset.themeChoice);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".theme-control")) closeThemeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeThemeMenu();
});

const scene = document.querySelector("#scene");
const timelineMarkup = (items) =>
  `<div class="timeline-list">${items.map((item, i) => `<article class="timeline-item reveal" tabindex="0" role="button" aria-expanded="false"><div class="timeline-date">${item.date}</div><h3>${item.title}</h3><div class="timeline-meta">${item.org} · ${item.mode}</div><p>${item.text}</p><div class="timeline-detail">${item.detail}</div></article>`).join("")}</div>`;

if (page === "home") {
  const homeScenes = projects
    .map(
      (
        project,
        index,
      ) => `<article class="project-scene${index === 0 ? " is-active" : ""}${project.id === "ticket" ? " scene-ticket" : ""}" data-scene="${index}" data-project-id="${project.id}" aria-hidden="${index === 0 ? "false" : "true"}"${index === 0 ? "" : " inert"}>
    <a class="scene-image" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.name}" data-cursor="project">${preview(project.art)}<span class="scene-image-open">Open project <b>↗</b></span></a>
    <div class="scene-copy"><div class="scene-kicker"><span>${project.number}</span><i></i><span>${project.category}</span></div><h3>${project.name}</h3><p>${project.short}</p><div class="feature-label">${project.tech}</div><a class="scene-link${project.id === "ticket" ? " ticket-project-link" : ""}" href="${project.url}" target="_blank" rel="noreferrer" data-cursor="link">View project <span>↗</span></a></div>
  </article>`,
    )
    .join("");
  scene.innerHTML = `<section class="home-hero"><div class="hero-copy shell"><div class="eyebrow">MY WORK · MY JOURNEY · MY IDEAS</div><h1 class="display hero-title" aria-label="Daniel Fasan"><span class="line name-line"><span>DANIEL</span></span><span class="line name-line"><span class="accent">FASAN.</span></span></h1><div class="hero-subrow"><div><p>I’m an aspiring IT professional who learns by building. I enjoy turning ideas into useful websites and applications, and exploring the technology behind them — from data to hardware.</p><div class="hero-actions"><a class="button button-light" href="#work-traverse">Explore my work <span>↗</span></a><a class="button button-outline" href="./about.html">More about me <span>↗</span></a></div></div></div></div><div class="hero-orbit"><span class="orbit-mark" aria-hidden="true"></span><button class="orbit-card" type="button" data-notebook aria-expanded="false" aria-label="Open Daniel's digital notebook"></button></div><div class="hero-lines" aria-hidden="true"><i></i><i></i><i></i></div><div class="hero-hint"><span class="hint-wheel">↓</span> Scroll to explore</div></section><section class="project-intro shell"><div><div class="eyebrow">My projects · scroll to explore</div><h2>Things I've built.</h2></div><p>Projects I've built while exploring web development, software and digital systems.</p></section><section class="scroll-stage" id="work-traverse" aria-label="My five projects"><div class="scroll-pinned"><div class="project-presentation">${homeScenes}</div><div class="rail-footer shell"><span class="project-counter" aria-live="polite">01 <i>—</i> ${String(projects.length).padStart(2, "0")}</span><div class="rail-progress" role="progressbar" aria-label="Project journey" aria-valuemin="1" aria-valuemax="${projects.length}" aria-valuenow="1"><i></i></div><div class="scene-steps" aria-label="Choose a project">${projects.map((project, index) => `<button type="button" data-project-step="${index}" aria-label="Go to project ${project.number}: ${project.name}" aria-current="${index === 0 ? "step" : "false"}">${project.number}</button>`).join("")}</div><a class="button button-dark" href="./projects.html">All my projects <span>↗</span></a></div></div></section><section class="home-band"><div class="shell"><div class="eyebrow">A little about me</div><div class="snapshot-grid"><h2>Curious by<br>nature.<br>Building by doing.</h2><div class="snapshot-cards"><article class="snapshot-card" tabindex="0"><span class="snapshot-number">01</span><span class="snapshot-indicator"></span><small>Current focus</small><strong>Software development</strong><p>Studying at EKC Canterbury College.</p></article><article class="snapshot-card" tabindex="0"><span class="snapshot-number">02</span><span class="snapshot-indicator"></span><small>Learning through</small><strong>Python · JavaScript</strong><p>Web development, software and data.</p></article><article class="snapshot-card" tabindex="0"><span class="snapshot-number">03</span><span class="snapshot-indicator"></span><small>On placement</small><strong>Kent County Council</strong><p>Dover Library · visitor support and library operations.</p></article><article class="snapshot-card" tabindex="0"><span class="snapshot-number">04</span><span class="snapshot-indicator"></span><small>Exploring next</small><strong>Cybersecurity · AI</strong><p>Interested in computer science, IT and emerging technology.</p></article></div></div></div></section><section class="home-contact"><div class="shell home-contact-inner"><div><div class="eyebrow">One more thing</div><h2>Have a project<br>or opportunity?</h2></div><a class="button button-light" href="mailto:${LINKS.email}" data-cursor="email">Say hello <span>↗</span></a></div></section>`;
} else if (page === "projects") {
  const byId = (id) => projects.find((project) => project.id === id);
  const archiveMain = [
    {
      project: byId("porchlight"),
      title: "PORCHLIGHT SUPPORT FINDER",
      description: "A multi-page hub for support services, locations and Google Maps links, practical guidance, donations and volunteering.",
      tech: "HTML · CSS · JavaScript",
    },
    {
      project: byId("ticket"),
      title: "CONFERENCE TICKET GENERATOR",
      description: "A JavaScript-powered ticket generator. Enter a name, email and GitHub username to create a personalised conference ticket.",
      tech: "HTML · CSS · JavaScript",
    },
    {
      project: byId("bank"),
      title: "DIGITALBANK",
      description: "A responsive digital banking landing page focused on layout, navigation and modern frontend styling.",
      tech: "HTML · CSS · JavaScript",
    },
  ];
  const archiveStage = (item, number, index) => `<article class="archive-scene archive-scene-project${item.project.id === "ticket" ? " archive-ticket" : item.project.id === "porchlight" ? " archive-porchlight" : " archive-bank"}" data-archive-scene="${index}" aria-hidden="${index === 0 ? "false" : "true"}"${index ? " inert" : ""}>
    <div class="archive-stage-shell">
      <a class="archive-window" href="${item.project.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.title}" data-cursor="project"><span class="archive-window-bar"><i></i><i></i><i></i><b>DANIEL FASAN / PROJECT ${number}</b></span>${preview(item.project.art, false, number, true)}<span class="archive-window-corner" aria-hidden="true">↗</span></a>
      <div class="archive-story"><div class="archive-story-kicker"><span>${number}</span><i></i><span>CASE STUDY</span></div><h2>${item.title}</h2><p>${item.description}</p><div class="archive-tech">${item.tech}</div>${item.project.id === "ticket" ? `<div class="archive-ticket-sequence" aria-label="Name, email and GitHub username become a generated ticket"><span>NAME</span><i></i><span>EMAIL</span><i></i><span>GITHUB</span><i></i><b>TICKET</b></div>` : ""}<a class="button button-dark archive-view" href="${item.project.url}" target="_blank" rel="noreferrer" data-cursor="link">View project <span>↗</span></a></div>
    </div>
  </article>`;
  const mainStages = archiveMain.map((item, index) => archiveStage(item, `0${index + 1}`, index)).join("");
  const practiceProjects = [byId("rps"), byId("blueprint")];
  const practiceStrip = practiceProjects.map((project) => `<a class="archive-strip-item" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Visit ${project.name}" data-cursor="project"><span class="archive-strip-preview">${preview(project.art)}</span><span class="archive-strip-meta"><strong>${project.name}</strong><small>${project.tech}</small></span><b class="archive-strip-arrow" aria-hidden="true">↗</b></a>`).join("");
  const indexItems = [
    ["01", "PORCHLIGHT", "porchlight.webp"],
    ["02", "TICKET", "desktop-design-ticket.webp"],
    ["03", "DIGITALBANK", "digitalbank.webp"],
    ["04", "FRONT-END", "rock-paper-scissors.webp"],
    ["05", "PYTHON / DATA", ""],
  ];
  const projectIndex = indexItems.map(([number, label, image], index) => `<button type="button" class="archive-index-item" data-archive-go="${index}" aria-label="Scroll to ${number} ${label}"${image ? ` style="--archive-thumb:url('./assets/${image}')"` : ""}><i>${number}</i><span>${label}</span></button>`).join("");
  scene.innerHTML = `<div class="archive-page">
    <section class="archive-intro shell"><div class="archive-intro-copy"><div class="eyebrow">PROJECT ARCHIVE · 2026</div><h1 class="display archive-title">PROJECTS</h1><p>Things I’ve built while learning, experimenting and developing.</p></div><div class="archive-peeks" aria-hidden="true"><span class="archive-peek archive-peek-one"><img src="./assets/porchlight.webp" alt=""></span><span class="archive-peek archive-peek-two"><img src="./assets/desktop-design-ticket.webp" alt=""></span><span class="archive-peek archive-peek-three"><img src="./assets/digitalbank.webp" alt=""></span><b>01 → 05</b></div></section>
    <nav class="archive-index" aria-label="Project index">${projectIndex}</nav>
    <div class="archive-progress" aria-live="polite"><b>01</b><i>/</i><span>05</span></div>
    <section class="archive-journey" aria-label="Five project chapters"><svg class="archive-ambient" viewBox="0 0 800 800" aria-hidden="true"><g class="ambient-orbit ambient-orbit-slow"><circle cx="400" cy="400" r="344"/><circle cx="400" cy="400" r="302"/><path d="M116 303C186 130 381 80 546 153s232 253 151 416c-80 162-285 225-440 128C105 602 57 438 116 303Z"/></g><g class="ambient-orbit ambient-orbit-mid"><path d="M96 467c4-141 110-249 256-267 105-13 214 28 275 109 54 73 54 162 1 221-53 60-151 78-240 44-77-29-122-91-114-154 8-57 62-96 125-88 50 7 82 42 78 83-3 31-28 53-58 52"/><path d="M92 540c114 120 283 163 431 100 88-37 144-105 158-189"/></g></svg><div class="archive-pinned"><div class="archive-presentation">${mainStages}
      <article class="archive-scene archive-scene-practice" data-archive-scene="3" aria-hidden="true" inert><div class="archive-practice-layout"><div class="archive-story"><div class="archive-story-kicker"><span>04</span><i></i><span>COLLECTION</span></div><h2>FRONT-END PRACTICE</h2><p>Responsive layouts, forms, DOM work and JavaScript challenges, with the Ticket Generator and Digitalbank featured as standalone case studies above.</p><div class="archive-tech">HTML · CSS · JavaScript</div><small class="archive-practice-note">A few builds from the archive</small></div><div class="archive-strip" aria-label="Front-end project previews">${practiceStrip}</div></div></article>
      <article class="archive-scene archive-scene-data" data-archive-scene="4" aria-hidden="true" inert><div class="archive-data-layout"><div class="archive-data-board" aria-label="Python data workflow"><div class="archive-board-top"><span>WORKFLOW / 05</span><span>PYTHON + DATA</span></div><div class="data-node data-node-python"><b>Py</b><span>PYTHON</span></div><div class="data-branch"></div><div class="data-tools"><span>PANDAS</span><span>MATPLOTLIB</span><span>SQLITE</span></div><div class="data-flow"><i>HANDLE</i><b>→</b><i>FILTER</i><b>→</b><i>VISUALISE</i></div><div class="archive-board-foot">TEST · DEBUG · REFINE</div></div><div class="archive-story"><div class="archive-story-kicker"><span>05</span><i></i><span>TOOLS IN PRACTICE</span></div><h2>PYTHON / DATA PROJECTS</h2><p>Practical work with data handling, filtering, visualisation, testing, debugging and SQLite.</p><div class="archive-tech">Python · pandas · matplotlib · SQLite</div></div></div></article>
      </div><div class="archive-current-label"><span>SCROLL TO EXPLORE</span><i></i><strong>01 / PORCHLIGHT</strong></div></div></section>
    <section class="archive-end shell"><div><div class="eyebrow">MORE TO EXPLORE</div><h2>From projects<br>to what’s next.</h2></div><div class="archive-end-links"><a href="./about.html">About me <span>↗</span></a><a href="./experience.html">Experience <span>↗</span></a><a href="./contact.html">Let’s connect <span>↗</span></a></div></section>
  </div>`;
} else if (page === "about") {
  scene.innerHTML = `<section class="shell about-hero"><div><div class="eyebrow">About me · digital / IT</div><h1 class="display">Curious by<br>nature.<br><span>Building by doing.</span></h1></div><div><p class="about-note">I’m studying Digital Software Development and learning through hands-on IT and web projects.</p><p class="about-note">I like making clear interfaces, solving practical problems and finding out how the technology underneath works.</p></div></section><section class="shell"><div class="about-collage reveal" aria-label="A moving composition of design notes"><div class="collage-orbit"><span class="collage-orbit-dot"></span></div><div class="collage-paper"><small>Digital / IT · Creative technology</small><strong>Make the<br>next thing<br>clearer.</strong><i></i></div></div></section><section class="shell about-sections"><article class="info-panel reveal"><div class="eyebrow">Education</div><h2>T Level · Digital Software Development</h2><p>Year 2 · EKC Canterbury College · Sep 2025 — Present</p><p>Before that: BTEC Level 2 IT / ICT · Double Award: Merit/Pass.</p><div class="about-stamp" aria-hidden="true">DESIGN<br>· BUILD ·</div></article><article class="info-panel reveal"><div class="eyebrow">Tools I’m learning</div><h2>From interface to data.</h2><div class="skill-bag"><button class="skill-chip" draggable="true">Python</button><button class="skill-chip" draggable="true">JavaScript</button><button class="skill-chip" draggable="true">HTML</button><button class="skill-chip" draggable="true">CSS</button><button class="skill-chip" draggable="true">GitHub</button><button class="skill-chip" draggable="true">VS Code</button><button class="skill-chip" draggable="true">pandas</button><button class="skill-chip" draggable="true">matplotlib</button><button class="skill-chip" draggable="true">SQLite</button><button class="skill-chip" draggable="true">Microsoft Office</button><button class="skill-chip" draggable="true">Testing</button><button class="skill-chip" draggable="true">Windows / Linux</button><button class="skill-chip" draggable="true">PC troubleshooting</button></div></article><article class="info-panel reveal"><div class="eyebrow">Learning & achievements</div><h2>Practice with purpose.</h2><ul><li>Cisco Hardware Basics</li><li>NHS DigiData</li><li>IT and cybersecurity workshops</li><li>MIT App Inventor quiz app</li></ul><p>OpenLearn · Springpod · Speakers for Schools</p></article><article class="info-panel reveal"><div class="eyebrow">Where I’m going</div><h2>IT · Support · Security.</h2><p>Career interests: IT support, IT technician roles, digital support, computer science, cybersecurity and technology.</p><div class="skill-bag"><span class="skill-chip">Sport &amp; fitness</span><span class="skill-chip">Fitness</span><span class="skill-chip">Music production</span><span class="skill-chip">Self-development</span></div></article></section>`;
} else if (page === "experience") {
  scene.innerHTML = `<section class="shell page-intro"><div class="eyebrow">Experience · education · practice</div><h1 class="display">Learning<br>by doing.</h1><p>Study, work and virtual experiences that shape how I build and collaborate.</p></section><section class="shell timeline-wrap"><aside class="timeline-index"><div class="eyebrow">The timeline</div><h2>Each step<br>adds a tool.</h2><p>Select an entry to open a little more detail.</p><a class="button button-dark" href="./about.html">More about me ↗</a></aside>${timelineMarkup([...work, ...education])}</section>`;
} else if (page === "contact") {
  scene.innerHTML = `<section class="shell contact-canvas"><div class="contact-copy"><div class="eyebrow">Have a project or opportunity?</div><h1 class="display">Let’s make<br>something<br><span>useful.</span></h1><p>I’m glad to connect about digital projects, learning opportunities and work that helps people.</p><a class="button button-dark contact-mail-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello <span>↗</span></a></div><div class="contact-links"><a class="contact-link" href="mailto:${LINKS.email}" data-cursor="email"><span>Email<small>${LINKS.email}</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.instagram}" target="_blank" rel="noreferrer"><span>Instagram<small>Find me on Instagram</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn<small>Connect with me</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.github}" target="_blank" rel="noreferrer"><span>GitHub<small>See what I’m building</small></span><span class="contact-symbol">↗</span></a></div><div class="contact-emblem" data-cursor="drag" role="img" aria-label="Drag the mark." tabindex="0"><video class="wall-video" autoplay muted loop playsinline poster="https://images.pexels.com/videos/8516677/free-video-8516677.jpg?auto=compress&cs=tinysrgb&w=1000"><source src="https://videos.pexels.com/video-files/8516677/8516677-hd_1080_1920_25fps.mp4" type="video/mp4"></video><strong>DF</strong><span class="drag-tip">Drag the mark</span></div><p class="wall-credit">Plant-shadow footage · <a href="https://www.pexels.com/video/shadow-of-a-plant-moving-on-a-white-wall-8516677/" target="_blank" rel="noreferrer">Hanna Pad / Pexels ↗</a></p></section>`;
}

if (singlePage) {
  document.querySelector(".home-hero").id = "home";
  document.querySelectorAll(".project-intro,#work-traverse,.home-band,.home-contact").forEach((section) => section.remove());
  const about = `<section class="journey-about journey-chapter" id="about" data-journey-section><div class="shell journey-about-grid"><div class="journey-about-copy"><div class="eyebrow">02 / A LITTLE ABOUT ME</div><h2 class="display">Curious by<br>nature.<br><span>Building by doing.</span></h2><p>I’m Daniel Fasan, a T Level Digital Software Development student at EKC Canterbury College. I enjoy building websites, experimenting with software, working with data and developing practical IT skills.</p><div class="journey-interests"><span>TECHNOLOGY</span><span>WEB DEVELOPMENT</span><span>COMPUTER SCIENCE</span><span>CYBERSECURITY</span><span>AI</span></div></div><div class="about-collage journey-profile" aria-label="Digital software development notebook"><div class="collage-orbit"><span class="collage-orbit-dot"></span></div><div class="collage-paper"><small>DANIEL FASAN / DIGITAL &amp; IT</small><strong>Ideas into<br>interfaces.</strong><i></i></div></div></div><div class="journey-chapter-no">02 <span>ABOUT</span></div></section>`;

  const archiveMain = [
    { project: projects.find((item) => item.id === "porchlight"), title: "PORCHLIGHT SUPPORT FINDER", description: "A multi-page hub for support services, locations and Google Maps links, practical guidance, donations and volunteering.", tech: "HTML · CSS · JavaScript" },
    { project: projects.find((item) => item.id === "ticket"), title: "CONFERENCE TICKET GENERATOR", description: "Enter a name, email and GitHub username to create a personalised conference-style ticket.", tech: "HTML · CSS · JavaScript" },
    { project: projects.find((item) => item.id === "bank"), title: "DIGITALBANK", description: "A responsive digital banking landing page focused on layout, navigation and modern frontend styling.", tech: "HTML · CSS · JavaScript" },
  ];
  const archiveStage = (item, number, index) => `<article class="archive-scene archive-scene-project${item.project.id === "ticket" ? " archive-ticket" : item.project.id === "porchlight" ? " archive-porchlight" : " archive-bank"}" data-archive-scene="${index}" aria-hidden="${index ? "true" : "false"}"${index ? " inert" : ""}><div class="archive-stage-shell"><a class="archive-window" href="${item.project.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.title}" data-cursor="project"><span class="archive-window-bar"><i></i><i></i><i></i><b>DANIEL FASAN / PROJECT ${number}</b></span>${preview(item.project.art, false, number, true)}<span class="archive-window-corner" aria-hidden="true">↗</span></a><div class="archive-story"><div class="archive-story-kicker"><span>${number}</span><i></i><span>CASE STUDY</span></div><h2>${item.title}</h2><p>${item.description}</p><div class="archive-tech">${item.tech}</div>${item.project.id === "ticket" ? `<div class="archive-ticket-sequence" aria-label="Name, email and GitHub username become a generated ticket"><span>NAME</span><i></i><span>EMAIL</span><i></i><span>GITHUB</span><i></i><b>TICKET</b></div>` : ""}<a class="button button-dark archive-view" href="${item.project.url}" target="_blank" rel="noreferrer" data-cursor="link">View project <span>↗</span></a></div></div></article>`;
  const mainStages = archiveMain.map((item, index) => archiveStage(item, `0${index + 1}`, index)).join("");
  const practice = ["rps", "blueprint"].map((id) => projects.find((item) => item.id === id));
  const practiceStrip = practice.map((item) => `<a class="archive-strip-item" href="${item.url}" target="_blank" rel="noreferrer" aria-label="Visit ${item.name}" data-cursor="project"><span class="archive-strip-preview">${preview(item.art, false, "", true)}</span><span class="archive-strip-meta"><strong>${item.name}</strong><small>${item.tech}</small></span><b class="archive-strip-arrow" aria-hidden="true">↗</b></a>`).join("");
  const archiveNames = ["PORCHLIGHT SUPPORT FINDER", "CONFERENCE TICKET GENERATOR", "DIGITALBANK", "FRONT-END MENTOR PROJECTS", "PYTHON / DATA PROJECTS"];
  const archiveFolders = [
    ["01", "porchlight-support-finder", "Porchlight Support Finder", "porchlight.webp"],
    ["02", "conference-ticket-generator", "Conference Ticket Generator", "desktop-design-ticket.webp"],
    ["03", "digitalbank", "Digitalbank", "digitalbank.webp"],
    ["04", "frontend-mentor-projects", "Front-End Mentor Projects", "rock-paper-scissors.webp"],
    ["05", "python-data-projects", "Python / Data Projects", "python-data-workflow.svg"],
  ];
  const projectIndex = archiveFolders.map(([number, folder, label, image], index) => `<button type="button" class="archive-index-item${index === 0 ? " is-selected" : ""}" style="--folder-index:${index}" data-archive-go="${index}" data-command="${folder}"${image ? ` data-preview-source="./assets/${image}"` : ""} aria-label="Enter project ${number}: ${label}" aria-current="${index === 0 ? "step" : "false"}"><i>${number}</i><span>${folder}/</span><b aria-hidden="true">&#8599;</b></button>`).join("");
  const projectsChapter = `<section class="archive-page journey-chapter" id="projects" data-journey-section>
    <div class="archive-intro shell">
      <div class="archive-intro-copy"><div class="eyebrow">03 / CODE TO CREATION</div><h2 class="display archive-title">PROJECTS</h2><p>Things I&rsquo;ve built while learning, experimenting and developing.</p><div class="archive-intro-note"><span>05 DIRECTORIES</span><i></i><span>SCROLL TO EXPLORE</span></div></div>
      <div class="archive-terminal" aria-label="Daniel Fasan project workspace">
        <div class="archive-terminal-head"><span class="terminal-lights" aria-hidden="true"><i></i><i></i><i></i></span><strong>DANIEL@PORTFOLIO</strong><span class="terminal-status"><i></i> WORKSPACE / ONLINE</span></div>
        <div class="archive-terminal-path"><b>~/projects</b><span>LOCAL INDEX / 05</span></div>
        <div class="archive-terminal-command" aria-hidden="true"><span>$</span> ls --projects</div>
        <nav class="archive-file-list" aria-label="Project directories">${projectIndex}</nav>
        <div class="archive-terminal-prompt" aria-hidden="true"><span>$</span> open <b class="archive-command-target">porchlight-support-finder</b><i class="terminal-cursor">_</i></div>
        <div class="archive-terminal-foot"><span>SCROLL OR SELECT A DIRECTORY</span><span class="terminal-identity">DF <i>+</i> &#123; &#125;</span></div>
        <div class="archive-cursor-preview" aria-hidden="true"><img alt=""><span>PROJECT 01</span></div>
      </div>
    </div>
    <div class="archive-progress" aria-live="polite"><b>01</b><i>/</i><span>05</span></div>
    <section class="archive-journey" aria-label="Five project chapters"><svg class="archive-ambient" viewBox="0 0 800 800" aria-hidden="true"><g class="ambient-orbit ambient-orbit-slow"><circle cx="400" cy="400" r="344"/><circle cx="400" cy="400" r="302"/><path d="M116 303C186 130 381 80 546 153s232 253 151 416c-80 162-285 225-440 128C105 602 57 438 116 303Z"/></g><g class="ambient-orbit ambient-orbit-mid"><path d="M96 467c4-141 110-249 256-267 105-13 214 28 275 109 54 73 54 162 1 221-53 60-151 78-240 44-77-29-122-91-114-154 8-57 62-96 125-88 50 7 82 42 78 83-3 31-28 53-58 52"/><path d="M92 540c114 120 283 163 431 100 88-37 144-105 158-189"/></g></svg><div class="archive-pinned"><div class="archive-presentation">${mainStages}
        <article class="archive-scene archive-scene-practice" data-archive-scene="3" aria-hidden="true" inert><div class="archive-practice-layout"><div class="archive-story"><div class="archive-story-kicker"><span>04</span><i></i><span>COLLECTION</span></div><h2>FRONT-END MENTOR PROJECTS</h2><p>Interactive builds and responsive interfaces from my frontend practice.</p><div class="archive-tech">HTML &middot; CSS &middot; JavaScript</div><small class="archive-practice-note">A few builds from the archive</small></div><div class="archive-strip" aria-label="Front-end project previews">${practiceStrip}</div></div></article>
      <article class="archive-scene archive-scene-data" data-archive-scene="4" aria-hidden="true" inert><div class="archive-data-layout"><div class="archive-data-board" aria-label="Python data workflow"><div class="archive-board-top"><span>WORKFLOW / 05</span><span>PYTHON + DATA</span></div><div class="data-node data-node-python"><b>Py</b><span>PYTHON</span></div><div class="data-branch"></div><div class="data-tools"><span>PANDAS</span><span>MATPLOTLIB</span><span>SQLITE</span></div><div class="data-flow"><i>HANDLE</i><b>&rarr;</b><i>FILTER</i><b>&rarr;</b><i>VISUALISE</i></div><div class="archive-board-foot">TEST &middot; DEBUG &middot; REFINE</div></div><div class="archive-story"><div class="archive-story-kicker"><span>05</span><i></i><span>TOOLS IN PRACTICE</span></div><h2>PYTHON / DATA PROJECTS</h2><p>Practical work with data handling, filtering, visualisation, testing, debugging and SQLite.</p><div class="archive-tech">Python &middot; pandas &middot; matplotlib &middot; SQLite</div></div></div></article>
      </div><div class="archive-current-label"><span>PROJECT MODE / SCROLL</span><i></i><strong>01 / PORCHLIGHT SUPPORT FINDER</strong></div></div></section>
    <section class="archive-end shell"><div><div class="eyebrow">SYSTEM RETURN</div><h2>Back to the<br>main journey.</h2></div><div class="archive-end-links"><a href="#about">About me <span>&#8599;</span></a><a href="#experience">Experience <span>&#8599;</span></a><a href="#contact">Let&rsquo;s connect <span>&#8599;</span></a></div></section><div class="journey-chapter-no">03 <span>PROJECTS</span></div></section>`;

  const timelineItems = [work[1], work[0], ...work.slice(2)];
  const experience = `<section class="journey-experience journey-chapter" id="experience" data-journey-section><div class="shell journey-section-head"><div><div class="eyebrow">04 / EXPERIENCE</div><h2 class="display">Learning<br>in the real world.</h2></div><p>People, places and practical work that shape how I learn.</p></div><div class="shell timeline-wrap journey-timeline"><aside class="timeline-index"><div class="eyebrow">KENT COUNTY COUNCIL</div><h3>Dover Library</h3><p>Industry placement student</p></aside>${timelineMarkup(timelineItems)}</div><div class="journey-chapter-no">04 <span>EXPERIENCE</span></div></section>`;
  const education = `<section class="journey-education journey-chapter" id="education" data-journey-section><div class="shell journey-section-head"><div><div class="eyebrow">05 / EDUCATION + SKILLS</div><h2 class="display">Building my<br>foundations.</h2></div><p>Learning software development through study, projects and practice.</p></div><div class="shell journey-education-grid"><div class="education-path"><article class="education-node"><i>01</i><small>YEAR 2 / CURRENT</small><h3>T Level Digital Software Development</h3><p>EKC Canterbury College</p></article><article class="education-node"><i>02</i><small>PREVIOUS STUDY</small><h3>BTEC Level 2 IT / Extended Certificate in ICT</h3><p>Double Award: Merit/Pass</p></article></div><div class="skill-system"><div class="skill-system-head"><span>TOOLS / PRACTICE</span><span>01—12</span></div><div class="skill-nodes">${["HTML", "CSS", "JavaScript", "Python", "GitHub", "VS Code", "pandas", "matplotlib", "SQLite", "Windows / Linux", "PC hardware", "Troubleshooting"].map((name, index) => `<span class="skill-node" style="--skill-delay:${index * 35}ms" tabindex="0">${name}</span>`).join("")}</div><div class="skill-system-foot"><i></i> LEARN · TEST · REFINE</div></div></div><div class="journey-chapter-no">05 <span>EDUCATION / SKILLS</span></div></section>`;
  const contact = `<section class="journey-contact journey-chapter" id="contact" data-journey-section><div class="shell contact-canvas"><div class="contact-copy"><div class="eyebrow">06 / THE DESTINATION</div><h2 class="display">Have a project<br>or opportunity?</h2><p>I’m always glad to connect about digital projects, learning opportunities and work that helps people.</p><a class="button button-light contact-mail-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello <span>↗</span></a></div><div class="contact-links"><a class="contact-link" href="mailto:${LINKS.email}" data-cursor="email"><span>Email<small>${LINKS.email}</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.instagram}" target="_blank" rel="noreferrer"><span>Instagram<small>Connect with me</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn<small>Connect with me</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.github}" target="_blank" rel="noreferrer"><span>GitHub<small>See what I’m building</small></span><span class="contact-symbol">↗</span></a></div><div class="contact-core-wrap"><nav class="contact-core-actions" aria-label="Core destinations"><a href="#about" data-core-target="about">ABOUT</a><a href="#projects" data-core-target="projects">PROJECTS</a><a href="#contact" data-core-target="contact">CONTACT</a></nav><div class="contact-emblem" data-cursor="drag" role="button" aria-label="Drag the DF core to a destination" aria-describedby="core-readout" tabindex="0"><video class="wall-video" autoplay muted loop playsinline poster="https://images.pexels.com/videos/8516677/free-video-8516677.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1000"><source src="https://videos.pexels.com/video-files/8516677/8516677-hd_1080_1920_25fps.mp4" type="video/mp4"></video><strong>DF</strong><span class="drag-tip">Drag me / route</span></div><div class="contact-core-readout" id="core-readout" aria-live="polite">DRAG DF INTO A DESTINATION</div></div></div><div class="journey-chapter-no">06 <span>CONTACT</span></div></section>`;
  scene.insertAdjacentHTML("beforeend", about + projectsChapter + experience + education + contact);
  const aboutLink = document.querySelector('.hero-actions a[href="./about.html"]');
  if (aboutLink) aboutLink.href = "#about";
}

if (page === "home") {
  const hero = document.querySelector(".home-hero");
  const notebook = hero.querySelector("[data-notebook]");
  notebook.innerHTML = `<span class="book-spread" aria-hidden="true"><span class="book-page book-page-left"><span class="book-page-kicker">DANIEL FASAN <i>01</i></span><strong>DANIEL<br>FASAN.</strong><span class="book-page-specialty">DIGITAL SOFTWARE<br>DEVELOPMENT</span><span class="book-page-rule"></span><span class="book-page-footer">IDEAS INTO INTERFACES</span></span><span class="book-page book-page-right"><span class="book-page-kicker">INSIDE THE WORKSPACE <i>02</i></span><span class="book-modules"><span class="book-module"><i>&lt;/&gt;</i><small>CODE</small></span><span class="book-module"><i class="module-web">▱</i><small>WEB</small></span><span class="book-module"><i class="module-data">▥</i><small>DATA</small></span><span class="book-module"><i class="module-system">◎</i><small>SYSTEMS</small></span></span><span class="book-page-footer">A DIGITAL PRACTICE</span></span></span><span class="book-cover"><span class="book-cover-front"><span class="book-cover-top">A DIGITAL NOTEBOOK</span><span class="book-cover-ring" aria-hidden="true"></span><span class="book-sun" aria-hidden="true"></span><span class="book-cover-title">IDEAS<br>INTO<br>INTERFACES.</span><span class="book-cover-index">DF / 01</span></span><span class="book-cover-inside"><span>DF</span><small>THOUGHTS<br>IN MOTION</small></span></span>`;
  hero.insertAdjacentHTML("afterbegin", `<svg class="hero-ambient" viewBox="0 0 800 800" aria-hidden="true"><g class="ambient-orbit ambient-orbit-slow"><circle cx="400" cy="400" r="344"/><circle cx="400" cy="400" r="302"/><path d="M116 303C186 130 381 80 546 153s232 253 151 416c-80 162-285 225-440 128C105 602 57 438 116 303Z"/></g><g class="ambient-orbit ambient-orbit-mid"><path d="M96 467c4-141 110-249 256-267 105-13 214 28 275 109 54 73 54 162 1 221-53 60-151 78-240 44-77-29-122-91-114-154 8-57 62-96 125-88 50 7 82 42 78 83-3 31-28 53-58 52"/><path d="M92 540c114 120 283 163 431 100 88-37 144-105 158-189"/></g><g class="ambient-orbit ambient-orbit-fine"><path d="M169 148c135-80 326-55 429 57 90 99 87 242-6 327-72 66-184 81-266 35-62-35-89-99-66-152 21-49 75-73 123-55"/><path d="M136 606c91 101 238 143 370 106"/></g></svg>`);
  const spotify = document.createElement("button");
  spotify.className = "spotify-object";
  spotify.type = "button";
  spotify.dataset.spotify = "";
  spotify.setAttribute("aria-label", "Open Daniel's Spotify profile");
  spotify.innerHTML = `<svg viewBox="0 0 38 38" aria-hidden="true"><path d="M8 21v-2a11 11 0 0 1 22 0v2"/><path d="M8 20H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4V20H8Zm22 0h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4V20h2Z"/><path d="M26 29c-1.2 2.4-3.6 4-6.5 4H17"/><path class="headphone-accent" d="M12 17c4-2 10-2 14 0M13 21c3-1.5 8-1.5 11 0"/></svg><span class="spotify-copy"><small>MY SOUNDTRACK</small><strong>LISTEN</strong></span><span class="spotify-open" aria-hidden="true">↗</span>`;
  hero.querySelector(".hero-orbit").append(spotify);
  const note = document.querySelector(".sound-note");
  let spotifyNoteTimer;
  spotify.addEventListener("click", () => {
    if (LINKS.spotify) {
      window.open(LINKS.spotify, "_blank", "noopener,noreferrer");
      return;
    }
    note.textContent = "Add your Spotify profile URL to LINKS.spotify in app.js.";
    note.classList.add("show");
    clearTimeout(spotifyNoteTimer);
    spotifyNoteTimer = setTimeout(() => note.classList.remove("show"), 2400);
  });
}

document.querySelector("#site-footer").innerHTML =
  `<div class="shell footer"><a class="footer-home" href="./index.html">DANIEL FASAN · © ${new Date().getFullYear()}</a><div class="footer-links"><a href="./projects.html">My work</a><a href="./about.html">About me</a><a href="./experience.html">Experience</a><a href="./contact.html">Contact</a><a href="${LINKS.instagram}" target="_blank" rel="noreferrer">Instagram ↗</a><a href="${LINKS.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="${LINKS.github}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:${LINKS.email}">Email ↗</a></div><button class="to-top" aria-label="Back to top">↑ <span>Back to top</span></button></div>`;

if (singlePage) {
  document.querySelector(".brand").href = "#home";
  document.querySelector(".footer-home").href = "#home";
  const footerLinks = [...document.querySelectorAll(".footer-links a")];
  ["#projects", "#about", "#experience", "#contact"].forEach((href, index) => { footerLinks[index].href = href; });
  const explore = document.querySelector(".hero-actions .button-light");
  if (explore) explore.href = "#projects";
  const chapterElements = [...document.querySelectorAll("[data-journey-section]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const setActiveChapter = (id) => navLinks.forEach((link) => {
    if (link.hash === `#${id}`) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const chapterObserver = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => entry.target.classList.add("chapter-entered"));
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveChapter(visible.target.id);
  }, { rootMargin: "-30% 0px -50% 0px", threshold: [0, .15, .4, .7] });
  chapterElements.forEach((section) => chapterObserver.observe(section));
  document.querySelectorAll('.nav-link[href^="#"],.footer-links a[href^="#"],.brand[href^="#"],.archive-end-links a[href^="#"]').forEach((link) => link.addEventListener("click", (event) => {
    const target = document.querySelector(link.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", link.hash);
    document.querySelector(".nav-links")?.classList.remove("open");
    document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  }));
  const scrollChapterMotion = () => {
    const hero = document.querySelector(".home-hero");
    const heroProgress = Math.max(0, Math.min(1, scrollY / Math.max(1, hero.offsetHeight)));
    hero.style.setProperty("--hero-scroll", heroProgress.toFixed(3));
    const timeline = document.querySelector(".journey-timeline");
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      timeline.style.setProperty("--timeline-draw", Math.max(0, Math.min(1, (innerHeight * .78 - rect.top) / Math.max(1, rect.height * .8))).toFixed(3));
    }
  };
  window.addPortfolioScrollTask(scrollChapterMotion);
  scrollChapterMotion();
}

const interactiveHeadings = [...document.querySelectorAll(".hero-title, .project-intro h2, .home-band h2, .journey-chapter h1, .journey-chapter h2, .journey-chapter h3, .contact-copy h2, .archive-title, .archive-story h2")];
interactiveHeadings.forEach((heading) => {
  heading.classList.add("interactive-heading");
  if (heading.classList.contains("hero-title")) return;
  let letterIndex = 0;
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) if (walker.currentNode.nodeValue.trim()) textNodes.push(walker.currentNode);
  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();
    [...textNode.nodeValue].forEach((character) => {
      if (/\s/.test(character)) fragment.append(document.createTextNode(character));
      else {
        const letter = document.createElement("span");
        letter.className = "heading-letter";
        letter.setAttribute("aria-hidden", "true");
        letter.style.setProperty("--letter-index", letterIndex++);
        letter.textContent = character;
        fragment.append(letter);
      }
    });
    textNode.replaceWith(fragment);
  });
  heading.setAttribute("aria-label", heading.textContent);
});
const heroName = document.querySelector(".hero-title");
if (heroName && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroName.querySelectorAll(".name-line > span").forEach((word) => {
    const label = word.textContent;
    word.innerHTML = [...label].map((letter, index) => `<span class="magnetic-letter" style="--letter-index:${index}" aria-hidden="true">${letter === " " ? "&nbsp;" : letter}</span>`).join("");
  });
  const letters = [...heroName.querySelectorAll(".magnetic-letter")];
  let letterBounds = [];
  heroName.addEventListener("pointerenter", () => {
    letterBounds = letters.map((letter) => letter.getBoundingClientRect());
  });
  heroName.addEventListener("pointermove", (event) => {
    if (!matchMedia("(pointer:fine)").matches) return;
    letters.forEach((letter, index) => {
      const bounds = letterBounds[index];
      const dx = event.clientX - (bounds.left + bounds.width / 2);
      const dy = event.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(dx, dy);
      const influence = Math.max(0, 1 - distance / 125);
      letter.style.transform = `translate3d(${(dx * influence * .07).toFixed(1)}px, ${(dy * influence * .07).toFixed(1)}px, 0) rotate(${(dx * influence * .025).toFixed(2)}deg)`;
    });
  });
  heroName.addEventListener("pointerleave", () => letters.forEach((letter) => { letter.style.transform = ""; }));
}

const dialog = document.querySelector("#project-dialog");
function openProject(id) {
  const item = projects.find((project) => project.id === id);
  if (!item) return;
  dialog.innerHTML = `<article class="dialog-sheet"><button class="dialog-close" aria-label="Close project details">×</button>${preview(item.art, true)}<div class="dialog-content"><div class="project-tag">${item.category} · ${item.number}</div><h2>${item.name}</h2><p>${item.detail}</p><div class="feature-label">${item.feature}</div><div class="project-card-bottom"><span class="tech-list">${item.tech}</span><a class="button button-dark${item.id === "ticket" ? " ticket-project-link" : ""}" href="${item.url}" target="_blank" rel="noreferrer">View project ↗</a></div></div></article>`;
  dialog.classList.add("open");
  dialog.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  dialog.querySelector(".dialog-close").focus();
}
function closeProject() {
  dialog.classList.remove("open");
  dialog.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project]");
  if (card && !event.target.closest("a")) openProject(card.dataset.project);
  if (event.target.closest(".dialog-close") || event.target === dialog)
    closeProject();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProject();
  const card = event.target.closest("[data-project]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProject(card.dataset.project);
  }
  const timelineItem = event.target.closest(".timeline-item");
  if (timelineItem && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    timelineItem.classList.toggle("expanded");
    timelineItem.setAttribute(
      "aria-expanded",
      String(timelineItem.classList.contains("expanded")),
    );
  }
});

// Scroll reveals use clipping and upward travel rather than opacity fades.
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((item, i) => {
  item.style.transitionDelay = `${Math.min(i % 4, 3) * 55}ms`;
  revealObserver.observe(item);
});

// Small pointer-driven parallax on the home composition.
const hero = document.querySelector(".home-hero");
const notebook = document.querySelector("[data-notebook]");
notebook?.addEventListener("click", () => {
  const open = notebook.classList.toggle("is-open");
  hero?.classList.toggle("book-open", open);
  notebook.setAttribute("aria-expanded", String(open));
  notebook.setAttribute(
    "aria-label",
    open ? "Close Daniel's digital notebook" : "Open Daniel's digital notebook",
  );
});
if (hero && matchMedia("(pointer:fine)").matches) {
  const orbit = hero.querySelector(".hero-orbit");
  const card = hero.querySelector(".orbit-card");
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    orbit.style.translate = `${x * -13}px ${y * -11}px`;
    orbit.style.rotate = `${x * 2}deg`;
    const note = card.getBoundingClientRect();
    const nx = Math.max(
      -1,
      Math.min(1, ((event.clientX - note.left) / note.width) * 2 - 1),
    );
    const ny = Math.max(
      -1,
      Math.min(1, ((event.clientY - note.top) / note.height) * 2 - 1),
    );
    card.style.setProperty("--note-x", `${nx * 5}px`);
    card.style.setProperty("--note-y", `${ny * 5}px`);
    card.style.setProperty("--note-tilt", `${nx * 3}deg`);
    orbit.style.setProperty("--ring-shift-x", `${nx * -5}px`);
    orbit.style.setProperty("--ring-shift-y", `${ny * -5}px`);
  });
  hero.addEventListener("pointerleave", () => {
    card.style.removeProperty("--note-x");
    card.style.removeProperty("--note-y");
    card.style.removeProperty("--note-tilt");
    orbit.style.removeProperty("--ring-shift-x");
    orbit.style.removeProperty("--ring-shift-y");
  });
}

// Mobile menu follows the same rounded pill language as desktop navigation.
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const menu = document.querySelector(".nav-links");
  const open = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

// Playback state comes directly from the audio element; no analyser sits in the sound path.
const soundToggle = document.querySelector(".sound-toggle");
const musicPlayer = document.querySelector(".music-player");
const playlist = [
  { title: "INNER LIGHTS", src: "./assets/inner-lights.mp4" },
  { title: "BAD BUNNY - SI VEO A TU MAMÁ", src: "./assets/bad-bunny-si-veo-a-tu-mama.mp3" },
];
const soundtrack = new Audio();
soundtrack.preload = "metadata";
soundtrack.volume = 0.68;
let trackIndex = 0;
let failedTracks = new Set();
let seekDragging = false;
const musicTitle = musicPlayer.querySelector(".music-track-title");
const musicCount = musicPlayer.querySelector(".music-track-count");
const musicSeek = musicPlayer.querySelector(".music-seek");
const musicCurrent = musicPlayer.querySelector(".music-time-current");
const musicTotal = musicPlayer.querySelector(".music-time-total");
const musicPlay = musicPlayer.querySelector(".music-play");
const musicStatus = musicPlayer.querySelector(".music-status");
function formatMusicTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}
function syncMusicState() {
  const playing = !soundtrack.paused && !soundtrack.ended && !soundtrack.error;
  soundToggle.setAttribute("aria-pressed", String(playing));
  soundToggle.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
  soundToggle.querySelector("span:last-child").textContent = playing ? "Music on" : "Music off";
  musicPlay.textContent = playing ? "Ⅱ" : "▶";
  musicPlay.setAttribute("aria-label", playing ? "Pause" : "Play");
  document.body.classList.toggle("music-on", playing);
}
function updateTrackLabel() {
  musicTitle.textContent = playlist[trackIndex].title;
  musicTitle.animate?.([{ transform: "translate3d(0,5px,0)", opacity: 0.35 }, { transform: "translate3d(0,0,0)", opacity: 1 }], { duration: 240, easing: "cubic-bezier(.2,.8,.2,1)" });
  musicCount.textContent = `${String(trackIndex + 1).padStart(2, "0")} / ${String(playlist.length).padStart(2, "0")}`;
  musicSeek.value = "0";
  musicCurrent.textContent = "0:00";
  musicTotal.textContent = "0:00";
}
function showMusicPlayer() {
  musicPlayer.classList.add("is-open");
  musicPlayer.setAttribute("aria-hidden", "false");
  const collapsed = matchMedia("(max-width: 600px)").matches;
  musicPlayer.classList.toggle("is-collapsed", collapsed);
  musicPlayer.querySelector(".music-collapse").setAttribute("aria-label", collapsed ? "Expand music player" : "Collapse music player");
}
async function playTrack(index, attemptFallback = true) {
  trackIndex = (index + playlist.length) % playlist.length;
  failedTracks = new Set();
  soundtrack.pause();
  soundtrack.src = playlist[trackIndex].src;
  soundtrack.load();
  updateTrackLabel();
  musicStatus.textContent = "";
  showMusicPlayer();
  try {
    await soundtrack.play();
    syncMusicState();
    return true;
  } catch (error) {
    syncMusicState();
    if (attemptFallback && playlist.length > 1) return tryNextAvailable(trackIndex);
    musicStatus.textContent = error?.name === "NotAllowedError" ? "Playback needs a click to start." : "UNAVAILABLE";
    return false;
  }
}
async function tryNextAvailable(failedIndex) {
  failedTracks.add(failedIndex);
  if (failedTracks.size >= playlist.length) {
    musicStatus.textContent = "UNAVAILABLE";
    soundtrack.pause();
    syncMusicState();
    return false;
  }
  const next = (failedIndex + 1) % playlist.length;
  trackIndex = next;
  soundtrack.src = playlist[next].src;
  soundtrack.load();
  updateTrackLabel();
  try {
    await soundtrack.play();
    syncMusicState();
    return true;
  } catch {
    return tryNextAvailable(next);
  }
}
soundtrack.addEventListener("play", syncMusicState);
soundtrack.addEventListener("pause", syncMusicState);
soundtrack.addEventListener("ended", () => playTrack(trackIndex + 1));
soundtrack.addEventListener("error", () => {
  if (!musicPlayer.classList.contains("is-open") || soundtrack.paused || failedTracks.has(trackIndex)) return;
  soundtrack.pause();
  tryNextAvailable(trackIndex);
});
soundtrack.addEventListener("loadedmetadata", () => {
  musicTotal.textContent = formatMusicTime(soundtrack.duration);
});
soundtrack.addEventListener("timeupdate", () => {
  if (!seekDragging) musicSeek.value = String(soundtrack.duration ? Math.round(soundtrack.currentTime / soundtrack.duration * 1000) : 0);
  musicCurrent.textContent = formatMusicTime(soundtrack.currentTime);
});
soundToggle.addEventListener("click", () => {
  if (soundtrack.paused || soundtrack.ended) playTrack(trackIndex);
  else soundtrack.pause();
});
musicPlay.addEventListener("click", () => {
  if (soundtrack.paused || soundtrack.ended) playTrack(trackIndex);
  else soundtrack.pause();
});
musicPlayer.querySelector(".music-next").addEventListener("click", () => playTrack(trackIndex + 1));
musicPlayer.querySelector(".music-previous").addEventListener("click", () => playTrack(trackIndex - 1));
musicPlayer.querySelector(".music-collapse").addEventListener("click", () => {
  musicPlayer.classList.toggle("is-collapsed");
  const collapsed = musicPlayer.classList.contains("is-collapsed");
  musicPlayer.querySelector(".music-collapse").setAttribute("aria-label", collapsed ? "Expand music player" : "Collapse music player");
  musicPlayer.querySelector(".music-collapse").textContent = collapsed ? "+" : "−";
});
musicSeek.addEventListener("input", () => {
  seekDragging = true;
  if (Number.isFinite(soundtrack.duration)) {
    soundtrack.currentTime = soundtrack.duration * Number(musicSeek.value) / 1000;
    musicCurrent.textContent = formatMusicTime(soundtrack.currentTime);
  }
});
musicSeek.addEventListener("change", () => { seekDragging = false; });
musicPlayer.querySelector(".music-volume").addEventListener("input", (event) => { soundtrack.volume = Number(event.currentTarget.value); });
updateTrackLabel();

// Press-and-hold / drag interactions make project artwork respond to touch too.
let pressTimer;
document.addEventListener("pointerdown", (event) => {
  const card = event.target.closest("[data-project]");
  if (!card) return;
  pressTimer = setTimeout(() => {
    card.classList.add("long-held");
    card.style.transform = "scale(.975) rotate(-.3deg)";
  }, 440);
});
document.addEventListener("pointerup", () => {
  clearTimeout(pressTimer);
  document.querySelectorAll(".long-held").forEach((card) => {
    card.classList.remove("long-held");
    card.style.transform = "";
  });
});
document.addEventListener("pointercancel", () => clearTimeout(pressTimer));

// Skills can be rearranged; the monogram can be dragged within its own canvas.
let draggedSkill;
document.querySelectorAll(".skill-chip").forEach((chip) => {
  chip.addEventListener("dragstart", () => {
    draggedSkill = chip;
    chip.classList.add("is-picked");
  });
  chip.addEventListener("dragend", () => chip.classList.remove("is-picked"));
  chip.addEventListener("click", () => chip.classList.toggle("is-picked"));
});
document
  .querySelector(".skill-bag")
  ?.addEventListener("dragover", (event) => event.preventDefault());
document.querySelector(".skill-bag")?.addEventListener("drop", (event) => {
  event.preventDefault();
  if (draggedSkill) event.currentTarget.append(draggedSkill);
});
const emblem = document.querySelector(".contact-emblem");
if (emblem) {
  const coreWrap = emblem.closest(".contact-core-wrap");
  const readout = coreWrap?.querySelector(".contact-core-readout");
  const destinations = [...(coreWrap?.querySelectorAll("[data-core-target]") || [])];
  const reducedCoreMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let dragging = false, startX = 0, startY = 0, dragX = 0, dragY = 0, pointerX = 0, pointerY = 0, pointerId = null, dragFrame = 0, springFrame = 0, targets = [];
  const setCorePosition = (x, y, rotate = 0, scale = 1) => {
    emblem.style.setProperty("--core-x", `${x.toFixed(1)}px`);
    emblem.style.setProperty("--core-y", `${y.toFixed(1)}px`);
    emblem.style.setProperty("--core-rotate", `${rotate.toFixed(2)}deg`);
    emblem.style.setProperty("--core-scale", scale.toFixed(3));
  };
  const moveCore = () => {
    dragFrame = 0;
    if (!dragging) return;
    dragX = pointerX - startX;
    dragY = pointerY - startY;
    setCorePosition(dragX, dragY, reducedCoreMotion ? 0 : Math.max(-7, Math.min(7, dragX * .035)), reducedCoreMotion ? 1 : 1.035);
    let near = null, best = Infinity;
    targets.forEach(({ element, rect }) => {
      const distance = Math.hypot(pointerX - (rect.left + rect.width / 2), pointerY - (rect.top + rect.height / 2));
      element.classList.toggle("is-near", distance < Math.max(45, Math.max(rect.width, rect.height) * .65));
      if (distance < best) { best = distance; near = element; }
    });
    const candidate = best < 76 ? near : null;
    if (readout) readout.textContent = candidate ? `DROP TO OPEN ${candidate.textContent.trim()}` : "DRAG DF INTO A DESTINATION";
  };
  const settleCore = () => {
    springFrame = 0;
    const x = Number.parseFloat(emblem.style.getPropertyValue("--core-x")) || 0;
    const y = Number.parseFloat(emblem.style.getPropertyValue("--core-y")) || 0;
    if (Math.abs(x) < .5 && Math.abs(y) < .5) { setCorePosition(0, 0); return; }
    setCorePosition(x * .72, y * .72, x * .72 * .035, 1 + Math.min(.025, Math.hypot(x,y) / 1800));
    springFrame = requestAnimationFrame(settleCore);
  };
  emblem.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    cancelAnimationFrame(springFrame);
    dragging = true;
    pointerId = event.pointerId;
    pointerX = startX = event.clientX;
    pointerY = startY = event.clientY;
    dragX = dragY = 0;
    targets = destinations.map((element) => ({ element, rect: element.getBoundingClientRect() }));
    emblem.setPointerCapture(event.pointerId);
    emblem.classList.add("is-dragging");
    if (readout) readout.textContent = "DRAG DF INTO A DESTINATION";
    event.preventDefault();
  });
  emblem.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!dragFrame) dragFrame = requestAnimationFrame(moveCore);
  });
  const releaseCore = (event) => {
    if (!dragging || (event?.pointerId != null && event.pointerId !== pointerId)) return;
    const drop = targets.reduce((best, item) => {
      const distance = Math.hypot(pointerX - (item.rect.left + item.rect.width / 2), pointerY - (item.rect.top + item.rect.height / 2));
      return distance < best.distance ? { element: item.element, distance } : best;
    }, { element: null, distance: Infinity });
    const destinationChip = drop.distance < 76 ? drop.element : null;
    dragging = false;
    pointerId = null;
    emblem.classList.remove("is-dragging");
    destinations.forEach((element) => element.classList.remove("is-near"));
    if (destinationChip) {
      if (readout) readout.textContent = `OPENING ${destinationChip.textContent.trim()}`;
      const destination = document.querySelector(destinationChip.getAttribute("href"));
      destination?.scrollIntoView({ behavior: reducedCoreMotion ? "auto" : "smooth", block: "start" });
      if (destination?.id) history.replaceState(null, "", `#${destination.id}`);
    } else if (readout) readout.textContent = "DRAG DF INTO A DESTINATION";
    if (dragFrame) { cancelAnimationFrame(dragFrame); dragFrame = 0; }
    if (reducedCoreMotion) setCorePosition(0, 0);
    else springFrame = requestAnimationFrame(settleCore);
  };
  emblem.addEventListener("pointerup", releaseCore);
  emblem.addEventListener("pointercancel", releaseCore);
  emblem.addEventListener("lostpointercapture", releaseCore);
  emblem.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    destinations[0]?.focus();
    if (readout) readout.textContent = "CHOOSE ABOUT, PROJECTS OR CONTACT";
  });
}

// Timeline markers open their own short note.
document.querySelectorAll(".timeline-item").forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("expanded");
    item.setAttribute(
      "aria-expanded",
      String(item.classList.contains("expanded")),
    );
  }),
);

// The pinned project journey follows native document scroll position for every scene.
const traverse = document.querySelector("#work-traverse");
const railProgress = document.querySelector(".rail-progress");
const projectScenes = [...document.querySelectorAll(".project-scene")];
const projectCounter = document.querySelector(".project-counter");
const sceneButtons = [...document.querySelectorAll("[data-project-step]")];
let railStart = 0;
let railTravel = 1;
let previousRailActive = -1;
function measureRail() {
  if (!traverse) return;
  railStart = window.scrollY + traverse.getBoundingClientRect().top;
  railTravel = Math.max(1, traverse.offsetHeight - window.innerHeight);
}
window.addEventListener("resize", measureRail, { passive: true });
function updateRail() {
  if (!traverse || !projectScenes.length) return;
  const progress = Math.min(1, Math.max(0, (window.scrollY - railStart) / railTravel));
  const position = progress * (projectScenes.length - 1);
  const active = Math.min(projectScenes.length - 1, Math.round(position));
  projectScenes.forEach((item, index) => {
    const enter =
      index === 0 ? 1 : Math.min(1, Math.max(0, position - index + 1));
    const leave = Math.min(1, Math.max(0, position - index));
    const opacity = index === 0 ? Math.max(0, 1 - leave) : Math.max(0, enter * (1 - leave));
    const x = (1 - enter) * 12 - leave * 9;
    const scale = 0.96 + enter * 0.04 - leave * 0.025;
    item.style.setProperty("--scene-opacity", opacity.toFixed(3));
    item.style.setProperty("--scene-x", `${x}vw`);
    item.style.setProperty("--scene-scale", scale.toFixed(3));
    item.style.setProperty(
      "--scene-image-scale",
      (1.045 - enter * 0.045 + leave * 0.035).toFixed(3),
    );
    item.style.setProperty(
      "--scene-copy-y",
      `${(1 - enter) * 20 - leave * 16}px`,
    );
    if (active !== previousRailActive) {
      item.classList.toggle("is-active", index === active);
      item.setAttribute("aria-hidden", String(index !== active));
      item.inert = index !== active;
    }
  });
  railProgress?.style.setProperty("--rail-progress", progress.toFixed(3));
  if (active !== previousRailActive) {
    previousRailActive = active;
    projectCounter.innerHTML = `${String(active + 1).padStart(2, "0")} <i>—</i> ${String(projectScenes.length).padStart(2, "0")}`;
    railProgress?.setAttribute("aria-valuenow", String(active + 1));
    sceneButtons.forEach((button, index) => button.setAttribute("aria-current", index === active ? "step" : "false"));
  }
}
window.addPortfolioScrollTask(updateRail);
sceneButtons.forEach((button) =>
  button.addEventListener("click", () => {
    if (!traverse) return;
    const index = Number(button.dataset.projectStep);
    const rect = traverse.getBoundingClientRect();
    const stageTop = scrollY + rect.top;
    const travel = Math.max(0, traverse.offsetHeight - innerHeight);
    window.scrollTo({
      top: stageTop + (travel * index) / Math.max(1, projectScenes.length - 1),
      behavior: "smooth",
    });
  }),
);
measureRail();
updateRail();

// The Projects route is one scroll-driven archive: every chapter shares the same viewport mask.
const archiveJourney = document.querySelector(".archive-journey");
const archiveScenes = [...document.querySelectorAll("[data-archive-scene]")];
const archiveProgress = document.querySelector(".archive-progress");
const archiveIndexItems = [...document.querySelectorAll("[data-archive-go]")];
const archiveNames = ["PORCHLIGHT SUPPORT FINDER", "CONFERENCE TICKET GENERATOR", "DIGITALBANK", "FRONT-END MENTOR PROJECTS", "PYTHON / DATA PROJECTS"];
const archiveCommandTarget = document.querySelector(".archive-command-target");
const archiveTerminal = document.querySelector(".archive-terminal");
const archiveCursorPreview = document.querySelector(".archive-cursor-preview");
const archiveCursorImage = archiveCursorPreview?.querySelector("img");
const archiveCursorLabel = archiveCursorPreview?.querySelector("span");
let archivePreviewFrame = 0;
let archivePreviewPoint = { x: 0, y: 0 };
let reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let archiveStart = 0;
let archiveTravel = 1;
let archiveHeight = 0;
const archiveMotionPreference = matchMedia("(prefers-reduced-motion: reduce)");
let previousArchiveActive = -1;
let previousArchiveIncoming = -1;
let previousArchiveOutgoing = -1;
let reducedArchiveReady = false;
function measureArchive() {
  if (!archiveJourney) return;
  archiveStart = window.scrollY + archiveJourney.getBoundingClientRect().top;
  archiveHeight = archiveJourney.offsetHeight;
  archiveTravel = Math.max(1, archiveHeight - window.innerHeight);
}
function loadArchiveSceneImages(index) {
  archiveScenes[index]?.querySelectorAll("img[data-src]").forEach((image) => {
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  });
}
window.addEventListener("resize", measureArchive, { passive: true });
function updateArchive() {
  if (!archiveJourney || !archiveScenes.length) return;
  if (reducedMotion) {
    if (reducedArchiveReady) return;
    archiveScenes.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-hidden", "false");
      item.inert = false;
    });
    archiveScenes.forEach((_, index) => loadArchiveSceneImages(index));
    reducedArchiveReady = true;
    return;
  }
  reducedArchiveReady = false;
  const top = archiveStart - window.scrollY;
  const progress = Math.min(1, Math.max(0, (window.scrollY - archiveStart) / archiveTravel));
  archiveJourney.closest(".archive-page")?.classList.toggle("archive-nav-on", top < innerHeight * 0.82 && top + archiveHeight > innerHeight * 0.18);
  const position = progress * (archiveScenes.length - 1);
  const active = Math.min(archiveScenes.length - 1, Math.round(position));
  const outgoing = Math.min(archiveScenes.length - 1, Math.floor(position));
  const incoming = Math.min(archiveScenes.length - 1, outgoing + 1);
  archiveScenes.forEach((item, index) => {
    const enter = index === 0 ? 1 : Math.min(1, Math.max(0, position - index + 1));
    const leave = Math.min(1, Math.max(0, position - index));
    const opacity = index === 0 ? Math.max(0, 1 - leave) : Math.max(0, enter * (1 - leave));
    item.style.setProperty("--archive-opacity", opacity.toFixed(3));
    item.style.setProperty("--archive-enter", enter.toFixed(3));
    item.style.setProperty("--archive-x", `${(1 - enter) * 6 - leave * 4}vw`);
    item.style.setProperty("--archive-scale", (0.965 + enter * 0.035 - leave * 0.025).toFixed(3));
    item.style.setProperty("--archive-rotate", `${((1 - enter) * 0.65 - leave * 1.1).toFixed(2)}deg`);
    if (incoming !== previousArchiveIncoming || outgoing !== previousArchiveOutgoing) item.style.zIndex = String(index === incoming ? 3 : index === outgoing ? 2 : 1);
    if (active !== previousArchiveActive) {
      item.classList.toggle("is-active", index === active);
      item.setAttribute("aria-hidden", String(index !== active));
      item.inert = index !== active;
    }
  });
  if (active !== previousArchiveActive) {
    previousArchiveActive = active;
    const number = String(active + 1).padStart(2, "0");
    archiveProgress?.querySelector("b")?.replaceChildren(number);
    const currentLabel = document.querySelector(".archive-current-label strong");
    if (currentLabel) currentLabel.textContent = `${number} / ${archiveNames[active]}`;
    if (archiveCommandTarget) archiveCommandTarget.textContent = `open ${archiveFoldersForCommand(active)}`;
    loadArchiveSceneImages(active);
    loadArchiveSceneImages(Math.min(active + 1, archiveScenes.length - 1));
    archiveIndexItems.forEach((button, index) => {
      button.setAttribute("aria-current", index === active ? "step" : "false");
      button.classList.toggle("is-selected", index === active);
    });
  }
  previousArchiveIncoming = incoming;
  previousArchiveOutgoing = outgoing;
}
function archiveFoldersForCommand(index) {
  return archiveIndexItems[index]?.dataset.command || archiveNames[index]?.toLowerCase().replaceAll(" ", "-") || "projects";
}
window.addPortfolioScrollTask(updateArchive);
archiveIndexItems.forEach((button) => button.addEventListener("click", () => {
  if (!archiveJourney) return;
  const index = Number(button.dataset.archiveGo);
  if (reducedMotion) {
    archiveScenes[index]?.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }
  const bounds = archiveJourney.getBoundingClientRect();
  const travel = Math.max(0, archiveJourney.offsetHeight - innerHeight);
  window.scrollTo({
    top: scrollY + bounds.top + travel * index / Math.max(1, archiveScenes.length - 1),
    behavior: "smooth",
  });
}));
archiveMotionPreference.addEventListener?.("change", (event) => {
  reducedMotion = event.matches;
  reducedArchiveReady = false;
  measureArchive();
  updateArchive();
});
if (archiveTerminal && archiveCursorPreview && archiveCursorImage) {
  const scheduleArchivePreviewPosition = () => {
    archivePreviewFrame = 0;
    const x = Math.min(archivePreviewPoint.x + 17, window.innerWidth - 240);
    const y = Math.max(12, Math.min(archivePreviewPoint.y - 52, window.innerHeight - 150));
    archiveCursorPreview.style.setProperty("--preview-x", `${x}px`);
    archiveCursorPreview.style.setProperty("--preview-y", `${y}px`);
  };
  archiveTerminal.addEventListener("pointerover", (event) => {
    const button = event.target.closest("[data-archive-go]");
    if (!button || !button.dataset.previewSource || !archiveTerminal.contains(button)) return;
    if (archiveCursorImage.getAttribute("src") !== button.dataset.previewSource) {
      archiveCursorImage.src = button.dataset.previewSource;
      archiveCursorImage.animate?.([{ opacity: 0.3, transform: "scale(.96)" }, { opacity: 1, transform: "scale(1)" }], { duration: 230, easing: "cubic-bezier(.2,.8,.2,1)" });
    }
    archiveCursorLabel.textContent = `PROJECT ${button.querySelector("i").textContent} / ${archiveNames[Number(button.dataset.archiveGo)]}`;
    archiveCursorPreview.classList.add("is-visible");
    archivePreviewPoint = { x: event.clientX, y: event.clientY };
    if (!archivePreviewFrame) archivePreviewFrame = requestAnimationFrame(scheduleArchivePreviewPosition);
  });
  archiveTerminal.addEventListener("pointermove", (event) => {
    if (!archiveCursorPreview.classList.contains("is-visible")) return;
    archivePreviewPoint = { x: event.clientX, y: event.clientY };
    if (!archivePreviewFrame) archivePreviewFrame = requestAnimationFrame(scheduleArchivePreviewPosition);
  }, { passive: true });
  archiveTerminal.addEventListener("pointerout", (event) => {
    if (event.target.closest("[data-archive-go]") && !event.relatedTarget?.closest("[data-archive-go]")) archiveCursorPreview.classList.remove("is-visible");
  });
  archiveTerminal.addEventListener("pointerleave", () => archiveCursorPreview.classList.remove("is-visible"));
}
measureArchive();
updateArchive();
window.addEventListener("load", () => {
  measureRail();
  measureArchive();
  schedulePortfolioScroll();
}, { once: true });

// Native horizontal overflow stays in place for touch/trackpad; pointer drag adds a desktop option.
const archiveStrip = document.querySelector(".archive-strip");
if (archiveStrip) {
  let stripPointer = null;
  let stripStartX = 0;
  let stripStartScroll = 0;
  let stripDragged = false;
  archiveStrip.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    stripPointer = event.pointerId;
    stripStartX = event.clientX;
    stripStartScroll = archiveStrip.scrollLeft;
    stripDragged = false;
  });
  archiveStrip.addEventListener("pointermove", (event) => {
    if (stripPointer !== event.pointerId) return;
    const delta = event.clientX - stripStartX;
    if (Math.abs(delta) > 5) {
      stripDragged = true;
      archiveStrip.setPointerCapture(event.pointerId);
      event.preventDefault();
    }
    if (stripDragged) archiveStrip.scrollLeft = stripStartScroll - delta;
  });
  const releaseStrip = () => { stripPointer = null; };
  archiveStrip.addEventListener("pointerup", releaseStrip);
  archiveStrip.addEventListener("pointercancel", releaseStrip);
  archiveStrip.addEventListener("click", (event) => {
    if (!stripDragged) return;
    event.preventDefault();
    event.stopPropagation();
    stripDragged = false;
  }, true);
}

// A light image response and magnetic nudge make hover feel physical without tilting screenshots.
document.querySelectorAll(".preview-photo").forEach((frame) =>
  frame.addEventListener("pointermove", (event) => {
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.setProperty("--image-shift-x", `${x * 8}px`);
    frame.style.setProperty("--image-shift-y", `${y * 8}px`);
  }),
);
document.querySelectorAll(".button,.nav-cta,.sound-toggle,.theme-toggle,.music-player-controls button").forEach((button) => {
  let bounds = null;
  button.addEventListener("pointerenter", () => { bounds = button.getBoundingClientRect(); });
  button.addEventListener("pointermove", (event) => {
    if (!bounds || !matchMedia("(pointer:fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = Math.max(-4, Math.min(4, (event.clientX - bounds.left - bounds.width / 2) * .045));
    const y = Math.max(-4, Math.min(4, (event.clientY - bounds.top - bounds.height / 2) * .08));
    button.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
  });
  button.addEventListener("pointerleave", () => { button.style.translate = ""; bounds = null; });
});

document
  .querySelector(".to-top")
  ?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
