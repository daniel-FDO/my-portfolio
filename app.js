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

const nav = [
  ["Home", "./index.html", "home"],
  ["Projects", "./projects.html", "projects"],
  ["About", "./about.html", "about"],
  ["Experience", "./experience.html", "experience"],
  ["Contact", "./contact.html", "contact"],
];

function preview(kind, full = false) {
  const item = projects.find((project) => project.art === kind);
  if (!item) return "";
  return `<div class="preview preview-photo ${kind}${full ? " full-preview" : ""}" aria-label="${item.name} supplied screenshot"><img src="./assets/${item.image}" alt="${item.name} website screenshot" loading="lazy" draggable="false"><span class="image-label">${item.number} / ${item.category}</span><span class="image-corner" aria-hidden="true">↗</span></div>`;
}

function projectCard(project, index, feature = false) {
  return `<article class="${feature ? "featured-project" : "project-card"} reveal" data-project="${project.id}" data-cursor="project" tabindex="0" role="button" aria-label="Open ${project.name} project details">
    <div class="${feature ? "feature-visual" : ""}">${preview(project.art)}${feature ? `<div class="feature-meta"><div><strong>${project.name}</strong><br><span>${project.category}</span></div><span class="feature-open" aria-hidden="true">↗</span></div>` : ""}</div>
    ${feature ? "" : `<div class="project-info"><div class="project-info-top"><span class="project-tag">${project.category}</span><span class="project-index">${project.number}</span></div><h2>${project.name}</h2><p>${project.short}</p><div class="feature-label">${project.feature}</div><div class="project-card-bottom"><span class="tech-list">${project.tech}</span><span class="card-action">Explore <b>↗</b></span></div></div>`}
  </article>`;
}

const page = document.documentElement.dataset.page || "home";
document.body.classList.add("js-ready");
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
header.innerHTML = `<div class="topbar"><a class="brand" href="./index.html" aria-label="Home"><span class="brand-dot">D</span><span>DANIEL FASAN</span></a><nav class="nav-links" aria-label="Main navigation">${nav.map(([name, url, id]) => `<a class="nav-link" href="${url}" ${page === id ? 'aria-current="page"' : ""}>${name}</a>`).join("")}</nav><div class="theme-control"><button class="theme-toggle" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Choose visual mode"><span class="theme-glyph" aria-hidden="true"></span><span class="theme-current">DAY</span></button><div class="theme-menu" hidden><div class="theme-menu-label">VISUAL MODE</div><button type="button" data-theme-choice="day">DAY</button><button type="button" data-theme-choice="studio">STUDIO</button><button type="button" data-theme-choice="night">NIGHT</button></div></div><div class="nav-end"><button class="sound-toggle" aria-pressed="false" aria-label="Play background music"><span class="eq"><i></i><i></i><i></i></span><span>Music off</span></button><a class="nav-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello ↗</a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button></div></div>`;

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
  scene.innerHTML = `<section class="shell page-intro"><div class="eyebrow">Selected work</div><h1 class="display">Made to<br>move ideas.</h1><p>Five projects across community support, careers, money, play and practical tools. Pick one to open its story.</p></section><section class="shell project-grid">${projects.map((project, i) => projectCard(project, i)).join("")}</section>`;
} else if (page === "about") {
  scene.innerHTML = `<section class="shell about-hero"><div><div class="eyebrow">About me · digital / IT</div><h1 class="display">Curious by<br>nature.<br><span>Building by doing.</span></h1></div><div><p class="about-note">I’m studying Digital Software Development and learning through hands-on IT and web projects.</p><p class="about-note">I like making clear interfaces, solving practical problems and finding out how the technology underneath works.</p></div></section><section class="shell"><div class="about-collage reveal" aria-label="A moving composition of design notes"><div class="collage-orbit"><span class="collage-orbit-dot"></span></div><div class="collage-paper"><small>Digital / IT · Creative technology</small><strong>Make the<br>next thing<br>clearer.</strong><i></i></div></div></section><section class="shell about-sections"><article class="info-panel reveal"><div class="eyebrow">Education</div><h2>T Level · Digital Software Development</h2><p>Year 2 · EKC Canterbury College · Sep 2025 — Present</p><p>Before that: BTEC Level 2 IT / ICT · Double Award: Merit/Pass.</p><div class="about-stamp" aria-hidden="true">DESIGN<br>· BUILD ·</div></article><article class="info-panel reveal"><div class="eyebrow">Tools I’m learning</div><h2>From interface to data.</h2><div class="skill-bag"><button class="skill-chip" draggable="true">Python</button><button class="skill-chip" draggable="true">JavaScript</button><button class="skill-chip" draggable="true">HTML</button><button class="skill-chip" draggable="true">CSS</button><button class="skill-chip" draggable="true">GitHub</button><button class="skill-chip" draggable="true">VS Code</button><button class="skill-chip" draggable="true">pandas</button><button class="skill-chip" draggable="true">matplotlib</button><button class="skill-chip" draggable="true">SQLite</button><button class="skill-chip" draggable="true">Microsoft Office</button><button class="skill-chip" draggable="true">Testing</button><button class="skill-chip" draggable="true">Windows / Linux</button><button class="skill-chip" draggable="true">PC troubleshooting</button></div></article><article class="info-panel reveal"><div class="eyebrow">Learning & achievements</div><h2>Practice with purpose.</h2><ul><li>Cisco Hardware Basics</li><li>NHS DigiData</li><li>IT and cybersecurity workshops</li><li>MIT App Inventor quiz app</li></ul><p>OpenLearn · Springpod · Speakers for Schools</p></article><article class="info-panel reveal"><div class="eyebrow">Where I’m going</div><h2>IT · Support · Security.</h2><p>Career interests: IT support, IT technician roles, digital support, computer science, cybersecurity and technology.</p><div class="skill-bag"><span class="skill-chip">Sport &amp; fitness</span><span class="skill-chip">Fitness</span><span class="skill-chip">Music production</span><span class="skill-chip">Self-development</span></div></article></section>`;
} else if (page === "experience") {
  scene.innerHTML = `<section class="shell page-intro"><div class="eyebrow">Experience · education · practice</div><h1 class="display">Learning<br>by doing.</h1><p>Study, work and virtual experiences that shape how I build and collaborate.</p></section><section class="shell timeline-wrap"><aside class="timeline-index"><div class="eyebrow">The timeline</div><h2>Each step<br>adds a tool.</h2><p>Select an entry to open a little more detail.</p><a class="button button-dark" href="./about.html">More about me ↗</a></aside>${timelineMarkup([...work, ...education])}</section>`;
} else if (page === "contact") {
  scene.innerHTML = `<section class="shell contact-canvas"><div class="contact-copy"><div class="eyebrow">Have a project or opportunity?</div><h1 class="display">Let’s make<br>something<br><span>useful.</span></h1><p>I’m glad to connect about digital projects, learning opportunities and work that helps people.</p><a class="button button-dark contact-mail-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello <span>↗</span></a></div><div class="contact-links"><a class="contact-link" href="mailto:${LINKS.email}" data-cursor="email"><span>Email<small>${LINKS.email}</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.instagram}" target="_blank" rel="noreferrer"><span>Instagram<small>Find me on Instagram</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn<small>Connect with me</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.github}" target="_blank" rel="noreferrer"><span>GitHub<small>See what I’m building</small></span><span class="contact-symbol">↗</span></a></div><div class="contact-emblem" data-cursor="drag" role="img" aria-label="Drag the mark." tabindex="0"><video class="wall-video" autoplay muted loop playsinline poster="https://images.pexels.com/videos/8516677/free-video-8516677.jpg?auto=compress&cs=tinysrgb&w=1000"><source src="https://videos.pexels.com/video-files/8516677/8516677-hd_1080_1920_25fps.mp4" type="video/mp4"></video><strong>DF</strong><span class="drag-tip">Drag the mark</span></div><p class="wall-credit">Plant-shadow footage · <a href="https://www.pexels.com/video/shadow-of-a-plant-moving-on-a-white-wall-8516677/" target="_blank" rel="noreferrer">Hanna Pad / Pexels ↗</a></p></section>`;
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

// Route changes use a single physical shutter, shared across all five pages.
const shutter = document.querySelector(".page-shutter");
try {
  if (sessionStorage.getItem("df-page-push") === "1") {
    sessionStorage.removeItem("df-page-push");
    const origin = (sessionStorage.getItem("df-portal") || "50,50").split(",");
    shutter.style.setProperty("--portal-x", `${origin[0]}px`);
    shutter.style.setProperty("--portal-y", `${origin[1]}px`);
    shutter.classList.add("arriving");
    setTimeout(() => shutter.classList.remove("arriving"), 520);
  }
} catch {}
document.querySelectorAll('a[href$=".html"]').forEach((link) =>
  link.addEventListener("click", (event) => {
    const destination = new URL(link.href, location.href);
    if (
      destination.origin !== location.origin ||
      destination.pathname === location.pathname
    )
      return;
    event.preventDefault();
    const x = Math.round(event.clientX || innerWidth / 2),
      y = Math.round(event.clientY || innerHeight / 2);
    shutter.style.setProperty("--portal-x", `${x}px`);
    shutter.style.setProperty("--portal-y", `${y}px`);
    try {
      sessionStorage.setItem("df-page-push", "1");
      sessionStorage.setItem("df-portal", `${x},${y}`);
    } catch {}
    shutter.classList.add("leaving");
    setTimeout(() => {
      location.href = destination.href;
    }, 390);
  }),
);

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

// User-initiated playback of the supplied music file. The live analyser adds gentle beat response.
const soundToggle = document.querySelector(".sound-toggle");
let soundOn = false;
const soundtrack = new Audio("./assets/inner-lights.mp4");
soundtrack.loop = true;
soundtrack.volume = 0.58;
soundtrack.preload = "auto";
let musicContext, musicAnalyser, musicSource, musicData, musicFrame;
function setMusicState(on, message = "") {
  soundOn = on;
  soundToggle.setAttribute("aria-pressed", String(on));
  soundToggle.setAttribute(
    "aria-label",
    on ? "Turn music off" : "Turn music on",
  );
  soundToggle.querySelector("span:last-child").textContent =
    message || (on ? "Music on" : "Music off");
  document.body.classList.toggle("music-on", on);
  if (!on) {
    cancelAnimationFrame(musicFrame);
    document.documentElement.style.setProperty("--music-energy", "0");
  }
}
soundtrack.addEventListener("play", () => setMusicState(true));
soundtrack.addEventListener("pause", () => setMusicState(false));
soundtrack.addEventListener("ended", () => setMusicState(false));
soundtrack.addEventListener("error", () =>
  setMusicState(false, "Audio unavailable"),
);
function animateToMusic() {
  if (!soundOn || !musicAnalyser) return;
  musicAnalyser.getByteFrequencyData(musicData);
  let sum = 0;
  for (let i = 1; i < 20; i++) sum += musicData[i];
  const energy = Math.min(1, sum / 3600);
  document.documentElement.style.setProperty(
    "--music-energy",
    energy.toFixed(3),
  );
  musicFrame = requestAnimationFrame(animateToMusic);
}
function connectMusicMeter() {
  if (musicAnalyser) return;
  musicContext = new (window.AudioContext || window.webkitAudioContext)();
  musicAnalyser = musicContext.createAnalyser();
  musicAnalyser.fftSize = 256;
  musicData = new Uint8Array(musicAnalyser.frequencyBinCount);
  musicSource = musicContext.createMediaElementSource(soundtrack);
  musicSource.connect(musicAnalyser);
  musicAnalyser.connect(musicContext.destination);
}
soundToggle.addEventListener("click", async () => {
  if (!soundOn) {
    try {
      try {
        connectMusicMeter();
        await musicContext.resume();
      } catch {}
      await soundtrack.play();
      setMusicState(true);
      animateToMusic();
    } catch {
      setMusicState(false, "Audio unavailable");
    }
  } else {
    soundtrack.pause();
    cancelAnimationFrame(musicFrame);
    document.documentElement.style.setProperty("--music-energy", "0");
    setMusicState(false);
  }
});

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
  let dragging = false,
    startX = 0,
    startY = 0,
    originX = 0,
    originY = 0;
  emblem.addEventListener("pointerdown", (event) => {
    dragging = true;
    emblem.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    originX = Number(emblem.dataset.x || 0);
    originY = Number(emblem.dataset.y || 0);
  });
  emblem.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const x = originX + event.clientX - startX,
      y = originY + event.clientY - startY;
    emblem.dataset.x = x;
    emblem.dataset.y = y;
    emblem.style.translate = `${x}px ${y}px`;
  });
  emblem.addEventListener("pointerup", () => {
    dragging = false;
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
let railFrame = 0;
function updateRail() {
  railFrame = 0;
  if (!traverse || !projectScenes.length) return;
  const bounds = traverse.getBoundingClientRect();
  const travel = Math.max(1, traverse.offsetHeight - innerHeight);
  const progress = Math.min(1, Math.max(0, -bounds.top / travel));
  const position = progress * (projectScenes.length - 1);
  const active = Math.min(projectScenes.length - 1, Math.round(position));
  projectScenes.forEach((item, index) => {
    const enter =
      index === 0 ? 1 : Math.min(1, Math.max(0, position - index + 1));
    const leave = Math.min(1, Math.max(0, position - index));
    const clipped = Math.max(1 - enter, leave);
    const x = (1 - enter) * 12 - leave * 9;
    const scale = 0.96 + enter * 0.04 - leave * 0.025;
    item.style.setProperty("--scene-clip", `${clipped * 100}%`);
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
    item.classList.toggle("is-active", index === active);
    item.setAttribute("aria-hidden", String(index !== active));
    item.inert = index !== active;
  });
  projectCounter.innerHTML = `${String(active + 1).padStart(2, "0")} <i>—</i> ${String(projectScenes.length).padStart(2, "0")}`;
  railProgress?.style.setProperty("--rail-progress", progress.toFixed(3));
  railProgress?.setAttribute("aria-valuenow", String(active + 1));
  sceneButtons.forEach((button, index) =>
    button.setAttribute("aria-current", index === active ? "step" : "false"),
  );
}
window.addEventListener(
  "scroll",
  () => {
    if (!railFrame) railFrame = requestAnimationFrame(updateRail);
  },
  { passive: true },
);
window.addEventListener(
  "resize",
  () => {
    if (!railFrame) railFrame = requestAnimationFrame(updateRail);
  },
  { passive: true },
);
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
updateRail();

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
document.querySelectorAll(".button,.nav-cta").forEach((button) =>
  button.addEventListener("pointermove", (event) => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const rect = button.getBoundingClientRect();
    button.style.translate = `${(event.clientX - rect.left - rect.width / 2) * 0.045}px ${(event.clientY - rect.top - rect.height / 2) * 0.08}px`;
  }),
);
document.querySelectorAll(".button,.nav-cta").forEach((button) =>
  button.addEventListener("pointerleave", () => {
    button.style.translate = "";
  }),
);

document
  .querySelector(".to-top")
  ?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
