const INTRO_ENABLED = true;
const INTRO_TIMING = Object.freeze({
  total: 6000,
  captionDelay: 100,
  captionDuration: 420,
  roadDuration: 800,
  carDelay: 800,
  carDuration: 2200,
  letterDelay: 1200,
  letterDuration: 520,
  letterStagger: 80,
  subtitleDelay: 3600,
  subtitleDuration: 520,
  counterDuration: 4600,
  skipDelay: 300,
  skipFade: 400,
  exitDelay: 4800,
  shutterDuration: 800,
  heroDelay: 5200,
});
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
    imageWidth: 1546,
    imageHeight: 2048,
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
    url: "https://blueprint-vwig.onrender.com/",
    image: "blueprint.webp",
    imageWidth: 1284,
    imageHeight: 2048,
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
    imageWidth: 1627,
    imageHeight: 2048,
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
    imageWidth: 1278,
    imageHeight: 787,
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
    imageWidth: 1440,
    imageHeight: 1024,
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
  ? [["Home", "#home", "home"], ["About", "#about", "about"], ["Projects", "#projects", "projects"], ["Experience", "#experience", "experience"], ["Education", "#education", "education"], ["Skills", "#skills", "skills"], ["Contact", "#contact", "contact"]]
  : [["Home", "./index.html", "home"], ["Projects", "./projects.html", "projects"], ["About", "./about.html", "about"], ["Experience", "./experience.html", "experience"], ["Contact", "./contact.html", "contact"]];

function preview(kind, full = false, numberOverride = "", deferImage = false) {
  const item = projects.find((project) => project.art === kind);
  if (!item) return "";
  const imageAttribute = deferImage ? `data-src="./assets/${item.image}"` : `src="./assets/${item.image}"`;
  return `<div class="preview preview-photo ${kind}${full ? " full-preview" : ""}" aria-label="${item.name} supplied screenshot"><img ${imageAttribute} alt="${item.name} website screenshot" loading="lazy" decoding="async" width="${item.imageWidth}" height="${item.imageHeight}" draggable="false"><span class="image-label">${numberOverride || item.number} / ${item.category}</span><span class="image-corner" aria-hidden="true">↗</span></div>`;
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
function refreshPortfolioScrollMetrics() {
  portfolioScrollState.max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
}
function schedulePortfolioScroll() {
  if (portfolioScrollFrame) return;
  portfolioScrollFrame = requestAnimationFrame(() => {
    portfolioScrollFrame = 0;
    portfolioScrollState.y = window.scrollY;
    portfolioScrollState.progress = Math.min(1, Math.max(0, portfolioScrollState.y / portfolioScrollState.max));
    portfolioScrollTasks.forEach((task) => task(portfolioScrollState));
  });
}
window.addPortfolioScrollTask = (task) => portfolioScrollTasks.add(task);
window.addEventListener("scroll", schedulePortfolioScroll, { passive: true });
window.addEventListener("resize", () => {
  refreshPortfolioScrollMetrics();
  schedulePortfolioScroll();
}, { passive: true });
if ("ResizeObserver" in window) {
  const portfolioResizeObserver = new ResizeObserver(() => {
    refreshPortfolioScrollMetrics();
    schedulePortfolioScroll();
  });
  portfolioResizeObserver.observe(document.body);
}
const identityOpening = document.querySelector(".identity-opening");
function startDriveIntro() {
  const root = document.documentElement;
  const forced = new URLSearchParams(location.search).get("intro") === "1";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const requested = root.dataset.showIntro === "true" || forced;
  if (!identityOpening) return;
  if (!INTRO_ENABLED || reducedMotion || !requested) {
    identityOpening.style.visibility = "hidden";
    identityOpening.style.pointerEvents = "none";
    requestAnimationFrame(() => identityOpening.remove());
    delete root.dataset.showIntro;
    return;
  }

  let completed = false;
  let counterFrame = 0;
  let exitTimer = 0;
  let finishTimer = 0;
  let removeTimer = 0;
  const counter = identityOpening.querySelector(".intro-counter span");
  const previousOverflow = root.style.overflow;
  Object.entries(INTRO_TIMING).forEach(([name, value]) => {
    root.style.setProperty(`--intro-${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, `${value}ms`);
  });
  root.classList.add("intro-in-progress", "intro-scroll-lock");
  identityOpening.classList.add("is-active");
  try { sessionStorage.setItem("df-identity-opening-seen", "1"); } catch {}

  const mountCar = () => {
    const source = document.querySelector(".road-car-art");
    const mount = identityOpening.querySelector(".intro-car-bounce");
    if (!source || !mount || mount.firstElementChild) return;
    const carSvg = source.cloneNode(true);
    const ids = new Map();
    carSvg.querySelectorAll("[id]").forEach((element) => {
      const oldId = element.id;
      const newId = `intro-${oldId}`;
      ids.set(oldId, newId);
      element.id = newId;
    });
    carSvg.querySelectorAll("*").forEach((element) => {
      for (const attribute of [...element.attributes]) {
        let value = attribute.value;
        ids.forEach((newId, oldId) => { value = value.replaceAll(`url(#${oldId})`, `url(#${newId})`); });
        if (value !== attribute.value) element.setAttribute(attribute.name, value);
      }
    });
    carSvg.setAttribute("focusable", "false");
    mount.append(carSvg);
  };
  window.addEventListener("DOMContentLoaded", mountCar, { once: true });
  if (document.readyState === "complete") mountCar();

  const cleanUp = (natural = false) => {
    if (completed) return;
    completed = true;
    cancelAnimationFrame(counterFrame);
    clearTimeout(exitTimer);
    clearTimeout(finishTimer);
    clearTimeout(removeTimer);
    document.removeEventListener("keydown", onKey, true);
    document.removeEventListener("click", onClick, true);
    window.removeEventListener("error", onFailure);
    window.removeEventListener("unhandledrejection", onFailure, true);
    if (natural) root.classList.add("intro-completed");
    root.classList.remove("intro-in-progress", "intro-scroll-lock");
    root.style.overflow = previousOverflow;
    delete root.dataset.showIntro;
    identityOpening.style.visibility = "hidden";
    identityOpening.style.pointerEvents = "none";
    requestAnimationFrame(() => identityOpening.remove());
  };
  const finish = (skip = false) => {
    if (completed || identityOpening.classList.contains("is-shuttering") || identityOpening.classList.contains("is-skipping")) return;
    if (skip) {
      identityOpening.classList.add("is-skipping");
      removeTimer = window.setTimeout(() => cleanUp(false), INTRO_TIMING.skipFade);
      return;
    }
    identityOpening.classList.add("is-shuttering");
    finishTimer = window.setTimeout(() => cleanUp(true), INTRO_TIMING.shutterDuration + 80);
  };
  function onKey(event) {
    if (event.key === "Escape" || event.key === " " || event.code === "Space") {
      event.preventDefault();
      finish(true);
    }
  }
  function onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    finish(true);
  }
  function onFailure() { cleanUp(false); }
  document.addEventListener("keydown", onKey, true);
  document.addEventListener("click", onClick, true);
  window.addEventListener("error", onFailure);
  window.addEventListener("unhandledrejection", onFailure, true);

  const start = performance.now();
  const tickCounter = (now) => {
    if (completed) return;
    const progress = Math.min(1, Math.max(0, (now - start) / INTRO_TIMING.counterDuration));
    const eased = 1 - (1 - progress) ** 3;
    counter.textContent = String(Math.round(eased * 100)).padStart(3, "0");
    if (progress < 1) counterFrame = requestAnimationFrame(tickCounter);
  };
  counterFrame = requestAnimationFrame(tickCounter);
  exitTimer = window.setTimeout(() => finish(false), INTRO_TIMING.exitDelay);
}
try {
  startDriveIntro();
} catch {
  document.documentElement.classList.remove("intro-in-progress", "intro-scroll-lock");
  identityOpening?.remove();
  delete document.documentElement.dataset.showIntro;
}
const header = document.querySelector("#site-header");
header.innerHTML = `<div class="topbar"><a class="brand" href="./index.html" aria-label="Home"><span class="brand-dot">D</span><span>DANIEL FASAN</span></a><nav class="nav-links" aria-label="Main navigation">${nav.map(([name, url, id]) => `<a class="nav-link" href="${url}" ${page === id ? 'aria-current="page"' : ""}>${name}</a>`).join("")}</nav><div class="theme-control"><button class="theme-toggle" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Choose visual mode"><span class="theme-glyph" aria-hidden="true"></span><span class="theme-current">DAY</span></button><div class="theme-menu" hidden><div class="theme-menu-label">VISUAL MODE</div><button type="button" data-theme-choice="day">DAY</button><button type="button" data-theme-choice="studio">STUDIO</button><button type="button" data-theme-choice="night">NIGHT</button></div></div><div class="nav-end"><button class="sound-toggle" type="button" aria-pressed="false" aria-label="Play background music"><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span><span>Music off</span></button><a class="nav-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello ↗</a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button></div></div>`;
document.body.insertAdjacentHTML("beforeend", `<aside class="music-player" aria-label="Music player" aria-hidden="true" inert>
  <div class="music-player-top"><span class="music-now"><i class="music-eq" aria-hidden="true"><b></b><b></b><b></b></i> NOW PLAYING</span><button class="music-collapse" type="button" aria-label="Collapse music player" aria-expanded="true" aria-controls="music-details">−</button></div>
  <div class="music-track-info" aria-live="polite"><div class="music-track-title"></div><div class="music-track-artist"></div></div>
  <div class="music-player-controls"><button type="button" class="music-previous" aria-label="Previous track">‹</button><button type="button" class="music-play" aria-label="Play">▶</button><button type="button" class="music-next" aria-label="Next track">›</button><span class="music-track-count"></span></div>
  <div class="music-details" id="music-details"><div class="music-details-inner">
    <div class="music-progress-row"><span class="music-time-current">0:00</span><input class="music-seek" type="range" min="0" max="1000" value="0" aria-label="Seek through track"><span class="music-time-total">0:00</span></div>
    <div class="music-options"><button class="music-shuffle" type="button" aria-label="Shuffle" aria-pressed="false" title="Shuffle">⤨</button><button class="music-repeat" type="button" aria-label="Repeat playlist" title="Repeat playlist">↻</button><button class="music-mute" type="button" aria-label="Mute" aria-pressed="false">VOL</button><input class="music-volume" type="range" min="0" max="1" step="0.01" value="0.68" aria-label="Volume"><button class="music-queue-toggle" type="button" aria-expanded="false" aria-controls="music-queue">QUEUE</button></div>
    <div class="music-identity"><img class="music-cover" alt="DF: IN MOTION cover" decoding="async" width="42" height="42" hidden><div><strong>DF: IN MOTION</strong><span>PORTFOLIO SOUNDTRACK · <span class="music-library-count"></span></span></div></div>
    <div class="music-queue-panel" id="music-queue" inert><ol class="music-queue" aria-label="DF: IN MOTION playlist"></ol></div>
    <div class="music-status" role="status" aria-live="polite"></div>
  </div></div>
</aside>`);

const themeNames = ["day", "studio", "night", "purple"];
const themePalette = { day: "#F3F1EA", studio: "#D4D3CE", night: "#101111", purple: "#140D22" };
const themeToggle = document.querySelector(".theme-toggle");
const themeMenu = document.querySelector(".theme-menu");
themeMenu.insertAdjacentHTML("beforeend", '<button type="button" data-theme-choice="purple">PURPLE</button>');
document.querySelector(".sound-toggle")?.insertAdjacentHTML("afterend", '<button class="verse-toggle" type="button" aria-expanded="false" aria-controls="verse-panel" aria-label="Open random Bible verse">♧ <span>Verse</span></button>');
document.body.insertAdjacentHTML("beforeend", `<aside class="verse-panel" id="verse-panel" aria-hidden="true" inert><header><div><small>VERSE OF THE MOMENT · KJV</small><button class="verse-close" type="button" aria-label="Close verse">×</button></div><strong class="verse-reference"></strong></header><p class="verse-text"></p><footer><button class="verse-new" type="button">New verse ↻</button><button class="verse-copy" type="button">Copy verse</button><span class="verse-status" role="status"></span></footer></aside>`);
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

const scripture = [
  ["Psalm 23:1", "The LORD is my shepherd; I shall not want."],
  ["Psalm 27:1", "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?"],
  ["Psalm 46:1", "God is our refuge and strength, a very present help in trouble."],
  ["Psalm 55:22", "Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved."],
  ["Psalm 118:24", "This is the day which the LORD hath made; we will rejoice and be glad in it."],
  ["Proverbs 3:5", "Trust in the LORD with all thine heart; and lean not unto thine own understanding."],
  ["Proverbs 16:3", "Commit thy works unto the LORD, and thy thoughts shall be established."],
  ["Isaiah 40:31", "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."],
  ["Isaiah 41:10", "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness."],
  ["Jeremiah 29:11", "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end."],
  ["Micah 6:8", "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"],
  ["Matthew 5:16", "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."],
  ["Matthew 6:34", "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof."],
  ["Matthew 11:28", "Come unto me, all ye that labour and are heavy laden, and I will give you rest."],
  ["Matthew 19:26", "With men this is impossible; but with God all things are possible."],
  ["Mark 10:27", "With men it is impossible, but not with God: for with God all things are possible."],
  ["John 8:12", "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life."],
  ["John 13:34", "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another."],
  ["John 14:27", "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."],
  ["Romans 8:28", "And we know that all things work together for good to them that love God, to them who are the called according to his purpose."],
  ["Romans 12:12", "Rejoicing in hope; patient in tribulation; continuing instant in prayer;"],
  ["Romans 15:13", "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost."],
  ["1 Corinthians 13:4", "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,"],
  ["1 Corinthians 16:14", "Let all your things be done with charity."],
  ["2 Corinthians 12:9", "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me."],
  ["Galatians 6:9", "And let us not be weary in well doing: for in due season we shall reap, if we faint not."],
  ["Ephesians 4:32", "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you."],
  ["Philippians 4:6", "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God."],
  ["Philippians 4:13", "I can do all things through Christ which strengtheneth me."],
  ["Colossians 3:23", "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;"],
  ["2 Thessalonians 3:3", "But the Lord is faithful, who shall stablish you, and keep you from evil."],
  ["Hebrews 10:23", "Let us hold fast the profession of our faith without wavering; (for he is faithful that promised;)"],
  ["James 1:12", "Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him."],
  ["James 1:5", "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him."],
  ["1 Peter 5:7", "Casting all your care upon him; for he careth for you."],
  ["1 John 4:19", "We love him, because he first loved us."],
];
const versePanel = document.querySelector(".verse-panel");
const verseToggle = document.querySelector(".verse-toggle");
let lastVerse = -1;
function newVerse() {
  let index;
  do index = Math.floor(Math.random() * scripture.length); while (scripture.length > 1 && index === lastVerse);
  lastVerse = index;
  versePanel.querySelector(".verse-reference").textContent = scripture[index][0];
  versePanel.querySelector(".verse-text").textContent = scripture[index][1];
  versePanel.querySelector(".verse-status").textContent = "King James Version · public domain";
}

function projectShowcaseMarkup(singlePage = false) {
  const byId = (id) => projects.find((project) => project.id === id);
  const cards = [
    { project: byId("porchlight"), label: "Porchlight", title: "PORCHLIGHT SUPPORT FINDER", tagline: "Local help, made easier to find." },
    { project: byId("rps"), label: "Rock, Paper, Scissors", title: "ROCK, PAPER, SCISSORS", tagline: "A quick round. Clear rules. One more go." },
    { project: byId("blueprint"), label: "BluePrint", title: "BLUEPRINT", tagline: "A clearer first step toward your next role." },
    { project: byId("ticket"), label: "Conference Tickets", title: "CONFERENCE TICKET GENERATOR", tagline: "Your conference details, ready to go." },
    { project: byId("bank"), label: "Digitalbank", title: "DIGITALBANK", tagline: "Digital banking, explained at a glance." },
  ];
  const supportingUI = (project) => project.id === "blueprint"
    ? `<div class="archive-float-ui archive-blueprint-builder"><span class="archive-float-label">LIVE CV BUILDER</span><iframe src="https://blueprint-vwig.onrender.com/pages/cvStart.html" title="BluePrint's real CV builder page" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`
    : project.id === "rps"
      ? `<div class="archive-float-ui archive-rps-rules"><span class="archive-float-label">THE REAL GAME RULES</span><img src="https://rock-paper-scissors-daniel.netlify.app/images/image-rules.svg" alt="Rock, paper, scissors rules from the live game" loading="lazy" decoding="async" width="304" height="270"></div>`
      : "";
  const stages = cards.map((item, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `<article class="archive-case-study project-environment project-${item.project.id}" id="archive-project-${number}" data-project-section aria-labelledby="archive-project-title-${number}">
      <div class="archive-case-shell">
        <div class="archive-story"><div class="archive-story-kicker"><span>${number} / 05</span><i></i><span>${item.project.category}</span></div><h2 id="archive-project-title-${number}">${item.title}</h2><p class="archive-tagline">${item.tagline}</p><p>${item.project.detail}</p><div class="archive-tech">${item.project.tech.split(" · ").map((tech) => `<span>${tech}</span>`).join("")}</div><a class="button button-dark archive-view" href="${item.project.url}" target="_blank" rel="noreferrer" data-cursor="link">View project <span>↗</span></a></div>
        <div class="archive-preview-stack"><a class="archive-window" href="${item.project.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.project.name}" data-cursor="project"><span class="archive-window-bar"><i></i><i></i><i></i><b>DANIEL FASAN / PROJECT ${number}</b></span>${preview(item.project.art, false, number)}<span class="archive-window-corner" aria-hidden="true">↗</span></a>${supportingUI(item.project)}</div>
      </div>
    </article>`;
  }).join("");
  const index = cards.map((item, i) => {
    const number = String(i + 1).padStart(2, "0");
    return `<a class="archive-index-item${i ? "" : " is-selected"}" href="#archive-project-${number}" data-project-nav aria-label="Go to ${item.label}" aria-current="${i ? "false" : "location"}"><i>${number}</i><span>${item.label}</span></a>`;
  }).join("");
  const homeLinks = singlePage ? `<a href="#about">About me <span>↗</span></a><a href="#experience">Experience <span>↗</span></a><a href="#contact">Let&rsquo;s connect <span>↗</span></a>` : `<a href="./about.html">About me <span>↗</span></a><a href="./experience.html">Experience <span>↗</span></a><a href="./contact.html">Let&rsquo;s connect <span>↗</span></a>`;
  return `<section class="archive-page${singlePage ? " journey-chapter integrated-projects" : ""}"${singlePage ? ' id="projects" data-journey-section' : ""}>
    <section class="archive-intro shell"><div class="archive-intro-copy"><div class="eyebrow">${singlePage ? "03 / CODE TO CREATION" : "PROJECT ARCHIVE · 2026"}</div><h${singlePage ? "2" : "1"} class="display archive-title">PROJECTS</h${singlePage ? "2" : "1"}><p>Five projects, each with its own story and point of view.</p></div><div class="archive-peeks" aria-hidden="true"><span class="archive-peek archive-peek-one"><img src="./assets/porchlight.webp" alt="" decoding="async" width="1546" height="2048"></span><span class="archive-peek archive-peek-two"><img src="./assets/rock-paper-scissors.webp" alt="" decoding="async" width="1278" height="787"></span><span class="archive-peek archive-peek-three"><img src="./assets/blueprint.webp" alt="" decoding="async" width="1284" height="2048"></span><b>01 → 05</b></div></section>
    <nav class="archive-index archive-showcase-index" aria-label="Jump to a project">${index}</nav>
    <section class="archive-showcase" aria-label="Five individual project case studies">${stages}</section>
    <section class="archive-end shell"><div><div class="eyebrow">${singlePage ? "SYSTEM RETURN" : "MORE TO EXPLORE"}</div><h2>${singlePage ? "Back to the<br>main journey." : "From projects<br>to what&rsquo;s next."}</h2></div><div class="archive-end-links">${homeLinks}</div></section>${singlePage ? '<div class="journey-chapter-no">03 <span>PROJECTS</span></div>' : ""}
  </section>`;
}
function showVerse(show) {
  versePanel.classList.toggle("is-open", show);
  versePanel.toggleAttribute("inert", !show);
  versePanel.setAttribute("aria-hidden", String(!show));
  verseToggle.setAttribute("aria-expanded", String(show));
  if (show) {
    const music = document.querySelector(".music-player");
    music?.classList.remove("is-open");
    music?.setAttribute("aria-hidden", "true");
    if (music) music.inert = true;
    newVerse();
  }
}
verseToggle?.addEventListener("click", () => showVerse(!versePanel.classList.contains("is-open")));
versePanel.querySelector(".verse-close").addEventListener("click", () => showVerse(false));
versePanel.querySelector(".verse-new").addEventListener("click", newVerse);
versePanel.querySelector(".verse-copy").addEventListener("click", async () => {
  const text = `${versePanel.querySelector(".verse-text").textContent} — ${versePanel.querySelector(".verse-reference").textContent} (KJV)`;
  try { await navigator.clipboard.writeText(text); versePanel.querySelector(".verse-status").textContent = "Copied to clipboard"; }
  catch { versePanel.querySelector(".verse-status").textContent = text; }
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
  const archiveCards = [
    { project: byId("porchlight"), label: "Porchlight", title: "PORCHLIGHT SUPPORT FINDER", tagline: "Local help, made easier to find." },
    { project: byId("rps"), label: "Rock, Paper, Scissors", title: "ROCK, PAPER, SCISSORS", tagline: "A quick round. Clear rules. One more go." },
    { project: byId("blueprint"), label: "BluePrint", title: "BLUEPRINT", tagline: "A clearer first step toward your next role." },
    { project: byId("ticket"), label: "Conference Tickets", title: "CONFERENCE TICKET GENERATOR", tagline: "Your conference details, ready to go." },
    { project: byId("bank"), label: "Digitalbank", title: "DIGITALBANK", tagline: "Digital banking, explained at a glance." },
  ].map((item) => ({
    ...item,
    category: item.category || item.project.category,
    description: item.description || item.project.detail,
    tech: item.tech || item.project.tech,
    url: item.url || item.project.url,
  }));
  const archiveCardMedia = (item, number) => {
    const supportingUI = item.project.id === "blueprint"
      ? `<div class="archive-float-ui archive-blueprint-builder"><span class="archive-float-label">LIVE CV BUILDER</span><iframe src="https://blueprint-vwig.onrender.com/pages/cvStart.html" title="BluePrint's real CV builder page" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`
      : item.project.id === "rps"
        ? `<div class="archive-float-ui archive-rps-rules"><span class="archive-float-label">THE REAL GAME RULES</span><img src="https://rock-paper-scissors-daniel.netlify.app/images/image-rules.svg" alt="Rock, paper, scissors rules from the live game" loading="lazy" decoding="async" width="304" height="270"></div>`
        : "";
    return `<div class="archive-preview-stack"><a class="archive-window" href="${item.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.project.name}" data-cursor="project"><span class="archive-window-bar"><i></i><i></i><i></i><b>DANIEL FASAN / PROJECT ${number}</b></span>${preview(item.project.art, false, number)}<span class="archive-window-corner" aria-hidden="true">↗</span></a>${supportingUI}</div>`;
  };
  const archiveStages = archiveCards.map((item, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `<article class="archive-case-study project-environment project-${item.project.id}" id="archive-project-${number}" data-project-section aria-labelledby="archive-project-title-${number}">
      <div class="archive-case-shell">
        <div class="archive-story"><div class="archive-story-kicker"><span>${number} / 05</span><i></i><span>${item.category}</span></div><h2 id="archive-project-title-${number}">${item.title}</h2><p class="archive-tagline">${item.tagline}</p><p>${item.description}</p><div class="archive-tech">${item.tech.split(" · ").map((tech) => `<span>${tech}</span>`).join("")}</div><a class="button button-dark archive-view" href="${item.url}" target="_blank" rel="noreferrer" data-cursor="link">View project <span>↗</span></a></div>
        ${archiveCardMedia(item, number)}
      </div>
    </article>`;
  }).join("");
  const projectIndex = archiveCards.map((item, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `<a class="archive-index-item${index ? "" : " is-selected"}" href="#archive-project-${number}" data-project-nav aria-label="Go to ${item.label}" aria-current="${index ? "false" : "location"}"><i>${number}</i><span>${item.label}</span></a>`;
  }).join("");
  scene.innerHTML = `<div class="archive-page">
    <section class="archive-intro shell"><div class="archive-intro-copy"><div class="eyebrow">PROJECT ARCHIVE · 2026</div><h1 class="display archive-title">PROJECTS</h1><p>Five projects, each with its own story and point of view.</p></div><div class="archive-peeks" aria-hidden="true"><span class="archive-peek archive-peek-one"><img src="./assets/porchlight.webp" alt="" decoding="async" width="1546" height="2048"></span><span class="archive-peek archive-peek-two"><img src="./assets/rock-paper-scissors.webp" alt="" decoding="async" width="1278" height="787"></span><span class="archive-peek archive-peek-three"><img src="./assets/blueprint.webp" alt="" decoding="async" width="1284" height="2048"></span><b>01 → 05</b></div></section>
    <nav class="archive-index archive-showcase-index" aria-label="Jump to a project">${projectIndex}</nav>
    <section class="archive-showcase" aria-label="Five individual project case studies">${archiveStages}</section>
    <section class="archive-end shell"><div><div class="eyebrow">MORE TO EXPLORE</div><h2>From projects<br>to what’s next.</h2></div><div class="archive-end-links"><a href="./about.html">About me <span>↗</span></a><a href="./experience.html">Experience <span>↗</span></a><a href="./contact.html">Let’s connect <span>↗</span></a></div></section>
  </div>`;
} else if (page === "about") {
  scene.innerHTML = `<section class="shell about-hero"><div><div class="eyebrow">About me · digital / IT</div><h1 class="display">Curious by<br>nature.<br><span>Building by doing.</span></h1></div><div><p class="about-note">I’m studying Digital Software Development and learning through hands-on IT and web projects.</p><p class="about-note">I like making clear interfaces, solving practical problems and finding out how the technology underneath works.</p></div></section><section class="shell"><div class="about-collage reveal" aria-label="A moving composition of design notes"><div class="collage-orbit"><span class="collage-orbit-dot"></span></div><div class="collage-paper"><small>Digital / IT · Creative technology</small><strong>Make the<br>next thing<br>clearer.</strong><i></i></div></div></section><section class="shell about-sections"><article class="info-panel reveal"><div class="eyebrow">Education</div><h2>T Level · Digital Software Development</h2><p>Year 2 · EKC Canterbury College · Sep 2025 — Present</p><p>Before that: BTEC Level 2 IT / ICT · Double Award: Merit/Pass.</p><div class="about-stamp" aria-hidden="true">DESIGN<br>· BUILD ·</div></article><article class="info-panel reveal"><div class="eyebrow">Tools I’m learning</div><h2>From interface to data.</h2><div class="skill-bag"><button class="skill-chip" draggable="true">Python</button><button class="skill-chip" draggable="true">JavaScript</button><button class="skill-chip" draggable="true">HTML</button><button class="skill-chip" draggable="true">CSS</button><button class="skill-chip" draggable="true">GitHub</button><button class="skill-chip" draggable="true">VS Code</button><button class="skill-chip" draggable="true">pandas</button><button class="skill-chip" draggable="true">matplotlib</button><button class="skill-chip" draggable="true">SQLite</button><button class="skill-chip" draggable="true">Microsoft Office</button><button class="skill-chip" draggable="true">Testing</button><button class="skill-chip" draggable="true">Windows / Linux</button><button class="skill-chip" draggable="true">PC troubleshooting</button></div></article><article class="info-panel reveal"><div class="eyebrow">Learning & achievements</div><h2>Practice with purpose.</h2><ul><li>Cisco Hardware Basics</li><li>NHS DigiData</li><li>IT and cybersecurity workshops</li><li>MIT App Inventor quiz app</li></ul><p>OpenLearn · Springpod · Speakers for Schools</p></article><article class="info-panel reveal"><div class="eyebrow">Where I’m going</div><h2>IT · Support · Security.</h2><p>Career interests: IT support, IT technician roles, digital support, computer science, cybersecurity and technology.</p><div class="skill-bag"><span class="skill-chip">Sport &amp; fitness</span><span class="skill-chip">Fitness</span><span class="skill-chip">Music production</span><span class="skill-chip">Self-development</span></div></article></section>`;
} else if (page === "experience") {
  scene.innerHTML = `<section class="shell page-intro"><div class="eyebrow">Experience · education · practice</div><h1 class="display">Learning<br>by doing.</h1><p>Study, work and virtual experiences that shape how I build and collaborate.</p></section><section class="shell timeline-wrap"><aside class="timeline-index"><div class="eyebrow">The timeline</div><h2>Each step<br>adds a tool.</h2><p>Select an entry to open a little more detail.</p><a class="button button-dark" href="./about.html">More about me ↗</a></aside>${timelineMarkup([...work, ...education])}</section>`;
} else if (page === "contact") {
  scene.innerHTML = `<section class="shell contact-canvas"><div class="contact-copy"><div class="eyebrow">Have a project or opportunity?</div><h1 class="display">Let’s make<br>something<br><span>useful.</span></h1><p>I’m glad to connect about digital projects, learning opportunities and work that helps people.</p><a class="button button-dark contact-mail-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello <span>↗</span></a></div><div class="contact-links"><a class="contact-link" href="mailto:${LINKS.email}" data-cursor="email"><span>Email<small>${LINKS.email}</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.instagram}" target="_blank" rel="noreferrer"><span>Instagram<small>Find me on Instagram</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn<small>Connect with me</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.github}" target="_blank" rel="noreferrer"><span>GitHub<small>See what I’m building</small></span><span class="contact-symbol">↗</span></a></div><div class="contact-emblem" data-cursor="drag" role="img" aria-label="Drag the mark." tabindex="0"><video class="wall-video" autoplay muted loop playsinline poster="https://images.pexels.com/videos/8516677/free-video-8516677.jpg?auto=compress&cs=tinysrgb&w=1000"><source src="https://videos.pexels.com/video-files/8516677/8516677-hd_1080_1920_25fps.mp4" type="video/mp4"></video><strong>DF</strong><span class="drag-tip">Drag the mark</span></div><p class="wall-credit">Plant-shadow footage · <a href="https://www.pexels.com/video/shadow-of-a-plant-moving-on-a-white-wall-8516677/" target="_blank" rel="noreferrer">Hanna Pad / Pexels ↗</a></p></section>`;
}

const projectShowcaseSections = [...document.querySelectorAll("[data-project-section]")];
if (projectShowcaseSections.length && "IntersectionObserver" in window) {
  const projectNavItems = [...document.querySelectorAll("[data-project-nav]")];
  const projectSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-in-view", entry.isIntersecting));
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const activeIndex = projectShowcaseSections.indexOf(visible.target);
    projectNavItems.forEach((link, index) => {
      if (index === activeIndex) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
      link.classList.toggle("is-selected", index === activeIndex);
    });
  }, { rootMargin: "-35% 0px -50% 0px", threshold: [0, .15, .35, .65] });
  projectShowcaseSections.forEach((section) => projectSectionObserver.observe(section));
}

if (singlePage) {
  document.querySelector(".home-hero").id = "home";
  document.querySelectorAll(".project-intro,#work-traverse,.home-band,.home-contact").forEach((section) => section.remove());
  const about = `<section class="journey-about journey-chapter" id="about" data-journey-section><div class="shell journey-about-grid"><div class="journey-about-copy"><div class="eyebrow">02 / A LITTLE ABOUT ME</div><h2 class="display">Curious by<br>nature.<br><span>Building by doing.</span></h2><p>I’m Daniel Fasan, a T Level Digital Software Development student at EKC Canterbury College. I enjoy building websites, experimenting with software, working with data and developing practical IT skills.</p><div class="journey-interests"><span>TECHNOLOGY</span><span>WEB DEVELOPMENT</span><span>COMPUTER SCIENCE</span><span>CYBERSECURITY</span><span>AI</span></div></div><div class="about-collage journey-profile" aria-label="Digital software development notebook"><div class="collage-orbit"><span class="collage-orbit-dot"></span></div><div class="collage-paper"><small>DANIEL FASAN / DIGITAL &amp; IT</small><strong>Ideas into<br>interfaces.</strong><i></i></div></div></div><div class="journey-chapter-no">02 <span>ABOUT</span></div></section>`;

  const projectsChapter = projectShowcaseMarkup(true);

  const timelineItems = [work[1], work[0], ...work.slice(2)];
  const experience = `<section class="journey-experience journey-chapter" id="experience" data-journey-section><div class="shell journey-section-head"><div><div class="eyebrow">04 / EXPERIENCE</div><h2 class="display">Learning<br>in the real world.</h2></div><p>People, places and practical work that shape how I learn.</p></div><div class="shell timeline-wrap journey-timeline"><aside class="timeline-index"><div class="eyebrow">KENT COUNTY COUNCIL</div><h3>Dover Library</h3><p>Industry placement student</p></aside>${timelineMarkup(timelineItems)}</div><div class="journey-chapter-no">04 <span>EXPERIENCE</span></div></section>`;
  const education = `<section class="journey-education journey-chapter" id="education" data-journey-section><div class="shell journey-section-head"><div><div class="eyebrow">05 / EDUCATION + SKILLS</div><h2 class="display">Building my<br>foundations.</h2></div><p>Learning software development through study, projects and practice.</p></div><div class="shell journey-education-grid"><div class="education-path"><article class="education-node"><i>01</i><small>YEAR 2 / CURRENT</small><h3>T Level Digital Software Development</h3><p>EKC Canterbury College</p></article><article class="education-node"><i>02</i><small>PREVIOUS STUDY</small><h3>BTEC Level 2 IT / Extended Certificate in ICT</h3><p>Double Award: Merit/Pass</p></article></div><div class="skill-system" id="skills" data-journey-section><div class="skill-system-head"><span>TOOLS / PRACTICE</span><span>01—12</span></div><div class="skill-nodes">${["HTML", "CSS", "JavaScript", "Python", "GitHub", "VS Code", "pandas", "matplotlib", "SQLite", "Windows / Linux", "PC hardware", "Troubleshooting"].map((name, index) => `<span class="skill-node" style="--skill-delay:${index * 35}ms" tabindex="0">${name}</span>`).join("")}</div><div class="skill-system-foot"><i></i> LEARN · TEST · REFINE</div></div></div><div class="journey-chapter-no">05 <span>EDUCATION / SKILLS</span></div></section>`;
  const contact = `<section class="journey-contact journey-chapter" id="contact" data-journey-section><div class="shell contact-canvas"><div class="contact-copy"><div class="eyebrow">06 / THE DESTINATION</div><h2 class="display">Have a project<br>or opportunity?</h2><p>I’m always glad to connect about digital projects, learning opportunities and work that helps people.</p><a class="button button-light contact-mail-cta" href="mailto:${LINKS.email}" data-cursor="email">Say hello <span>↗</span></a></div><div class="contact-links"><a class="contact-link" href="mailto:${LINKS.email}" data-cursor="email"><span>Email<small>${LINKS.email}</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.instagram}" target="_blank" rel="noreferrer"><span>Instagram<small>Connect with me</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn<small>Connect with me</small></span><span class="contact-symbol">↗</span></a><a class="contact-link" href="${LINKS.github}" target="_blank" rel="noreferrer"><span>GitHub<small>See what I’m building</small></span><span class="contact-symbol">↗</span></a></div><div class="contact-core-wrap"><nav class="contact-core-actions" aria-label="Core destinations"><a href="#about" data-core-target="about">ABOUT</a><a href="#projects" data-core-target="projects">PROJECTS</a><a href="#contact" data-core-target="contact">CONTACT</a></nav><div class="contact-emblem" data-cursor="drag" role="button" aria-label="Drag the DF core to a destination" aria-describedby="core-readout" tabindex="0"><video class="wall-video" autoplay muted loop playsinline poster="https://images.pexels.com/videos/8516677/free-video-8516677.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1000"><source src="https://videos.pexels.com/video-files/8516677/8516677-hd_1080_1920_25fps.mp4" type="video/mp4"></video><strong>DF</strong><span class="drag-tip">Drag me / route</span></div><div class="contact-core-readout" id="core-readout" aria-live="polite">DRAG DF INTO A DESTINATION</div></div></div><div class="journey-chapter-no">06 <span>CONTACT</span></div></section>`;
  scene.insertAdjacentHTML("beforeend", about + projectsChapter + experience + education + contact);
  const projectSections = [...document.querySelectorAll("#projects [data-project-section]")];
  if (projectSections.length && "IntersectionObserver" in window) {
    const projectNavItems = [...document.querySelectorAll("#projects [data-project-nav]")];
    const projectSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-in-view", entry.isIntersecting));
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const activeIndex = projectSections.indexOf(visible.target);
      projectNavItems.forEach((link, index) => {
        if (index === activeIndex) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
        link.classList.toggle("is-selected", index === activeIndex);
      });
    }, { rootMargin: "-35% 0px -50% 0px", threshold: [0, .15, .35, .65] });
    projectSections.forEach((section) => projectSectionObserver.observe(section));
  }
  const aboutLink = document.querySelector('.hero-actions a[href="./about.html"]');
  if (aboutLink) aboutLink.href = "#about";
}

if (page === "home") {
  const hero = document.querySelector(".home-hero");
  hero.insertAdjacentHTML("beforeend", '<div class="hero-spotlight" aria-hidden="true"></div>');
  const yearWidget = document.createElement("section");
  yearWidget.className = "year-progress shell reveal";
  yearWidget.setAttribute("aria-label", "Live year progress");
  yearWidget.innerHTML = `<div class="year-copy"><span class="eyebrow">A YEAR IN MOTION</span><h2><b class="year-number"></b> IS <b class="year-percent"></b> COMPLETE</h2><p><b class="year-remaining"></b> DAYS REMAINING</p></div><div class="year-segments" role="img"></div>`;
  (document.querySelector(".home-band") || document.querySelector(".archive-end"))?.before(yearWidget);
  yearWidget.querySelector(".year-segments").innerHTML = Array.from({ length: 48 }, () => "<i></i>").join("");
  const updateYearWidget = () => {
    const now = new Date(), start = new Date(now.getFullYear(), 0, 1), end = new Date(now.getFullYear() + 1, 0, 1);
    const ratio = (now - start) / (end - start), percent = Math.floor(ratio * 100);
    yearWidget.querySelector(".year-number").textContent = now.getFullYear();
    yearWidget.querySelector(".year-percent").textContent = `${percent}%`;
    yearWidget.querySelector(".year-remaining").textContent = Math.ceil((end - now) / 86400000);
    yearWidget.querySelector(".year-segments").setAttribute("aria-label", `${percent}% of ${now.getFullYear()} complete`);
    yearWidget.querySelectorAll("i").forEach((segment, index) => segment.classList.toggle("is-complete", index < ratio * 48));
  };
  updateYearWidget(); setInterval(updateYearWidget, 60000);
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
  document.querySelectorAll('.nav-link[href^="#"],.footer-links a[href^="#"],.brand[href^="#"],.archive-end-links a[href^="#"],.archive-showcase-index a[href^="#"],.hero-actions a[href^="#"],.contact-core-actions a[href^="#"]').forEach((link) => link.addEventListener("click", (event) => {
    const target = document.querySelector(link.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", link.hash);
    document.querySelector(".nav-links")?.classList.remove("open");
    document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  }));
  const hero = document.querySelector(".home-hero");
  const timeline = document.querySelector(".journey-timeline");
  let heroHeight = 1;
  let timelineTop = 0;
  let timelineHeight = 1;
  let chapterViewportHeight = innerHeight;
  const measureChapterMotion = () => {
    heroHeight = Math.max(1, hero.offsetHeight);
    chapterViewportHeight = innerHeight;
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      timelineTop = scrollY + rect.top;
      timelineHeight = Math.max(1, rect.height);
    }
  };
  const scrollChapterMotion = () => {
    const heroProgress = Math.max(0, Math.min(1, scrollY / heroHeight));
    hero.style.setProperty("--hero-scroll", heroProgress.toFixed(3));
    if (timeline) {
      const timelineDraw = (scrollY + chapterViewportHeight * .78 - timelineTop) / Math.max(1, timelineHeight * .8);
      timeline.style.setProperty("--timeline-draw", Math.max(0, Math.min(1, timelineDraw)).toFixed(3));
    }
  };
  window.addEventListener("resize", measureChapterMotion, { passive: true });
  window.addEventListener("load", measureChapterMotion, { once: true });
  measureChapterMotion();
  window.addPortfolioScrollTask(scrollChapterMotion);
  scrollChapterMotion();
}

refreshPortfolioScrollMetrics();

const interactiveHeadings = [...document.querySelectorAll(".hero-title, .project-intro h2, .home-band h2, .journey-chapter h1, .journey-chapter h2, .journey-chapter h3, .contact-copy h2, .archive-title, .archive-story h2")];
interactiveHeadings.forEach((heading) => {
  heading.classList.add("interactive-heading");
  if (heading.classList.contains("hero-title")) return;
  if (heading.closest(".archive-story")) {
    heading.setAttribute("aria-label", heading.textContent);
    return;
  }
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

// Scroll reveals use a compositor-friendly fade and upward travel.
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
  const spotlight = hero.querySelector(".hero-spotlight");
  let heroBounds = hero.getBoundingClientRect();
  window.addEventListener("resize", () => { heroBounds = hero.getBoundingClientRect(); }, { passive: true });
  let pointerFrame = 0;
  hero.addEventListener("pointermove", (event) => {
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
    const x = (event.clientX - heroBounds.left) / heroBounds.width - 0.5;
    const y = (event.clientY - heroBounds.top) / heroBounds.height - 0.5;
    spotlight.style.setProperty("--spot-x", `${event.clientX - heroBounds.left}px`);
    spotlight.style.setProperty("--spot-y", `${event.clientY - heroBounds.top}px`);
    if (notebook?.classList.contains("is-open")) return;
    orbit.style.translate = `${x * -8}px ${y * -7}px`;
    orbit.style.rotate = `${x}deg`;
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

// A single, event-driven audio element, independent of all scroll/scene animation.
const soundToggle = document.querySelector(".sound-toggle");
const musicPlayer = document.querySelector(".music-player");
const playlist = [
  {
    "title": "INNER LIGHTS",
    "artist": "",
    "src": "./assets/music/Inner Lights.mp4"
  },
  {
    "title": "SI VEO A TU MAMÁ",
    "artist": "Bad Bunny",
    "src": "./assets/bad-bunny-si-veo-a-tu-mama.mp3"
  },
  {
    "title": "Agent Sale",
    "artist": "La Rvfleuze",
    "src": "./assets/music/Agent Sale - La Rvfleuze.mp3"
  },
  {
    "title": "GRIS METALLIQUE",
    "artist": "M2R",
    "src": "./assets/music/GRIS METALLIQUE - M2R.mp3"
  },
  {
    "title": "melodrama",
    "artist": "disiz, Theodora",
    "src": "./assets/music/melodrama - disiz, Theodora.mp3"
  },
  {
    "title": "Omote",
    "artist": "Yuki Chiba",
    "src": "./assets/music/Omote - Yuki Chiba.mp3"
  },
  {
    "title": "PARISIENNE",
    "artist": "GIMS, La Mano 1.9",
    "src": "./assets/music/PARISIENNE - GIMS, La Mano 1.9.mp3"
  },
  {
    "title": "Solo",
    "artist": "Future",
    "src": "./assets/music/Solo - Future.mp3"
  },
  {
    "title": "SOLO STEPPIN CRETE BOY",
    "artist": "Lil Yachty",
    "src": "./assets/music/SOLO STEPPIN CRETE BOY - Lil Yachty.mp3"
  },
  {
    "title": "Soñar",
    "artist": "Morad",
    "src": "./assets/music/Soñar - Morad.mp3"
  },
  {
    "title": "Talk of the Town",
    "artist": "Fred again...",
    "src": "./assets/music/Talk of the Town - Fred again....mp3"
  },
  {
    "title": "Way Too Self Aware",
    "artist": "Ian Asher",
    "src": "./assets/music/Way Too Self Aware - Ian Asher.mp3"
  },
  {
    "title": "Whisper My Name",
    "artist": "Drake",
    "src": "./assets/music/Whisper My Name - Drake.mp3"
  }
];
// Set cover to a real asset URL here when artwork is supplied. No placeholder request.
const playlistConfig = { name: "DF: IN MOTION", cover: null };
const MUSIC_STORAGE_KEY = "df-in-motion-v1";
let savedMusic = {};
try { savedMusic = JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY)) || {}; } catch { /* Storage is optional. */ }
const soundtrack = new Audio();
soundtrack.preload = "metadata";
soundtrack.volume = Number.isFinite(savedMusic.volume) ? Math.max(0, Math.min(1, savedMusic.volume)) : 0.68;
soundtrack.muted = savedMusic.muted === true;
let trackIndex = Number.isInteger(savedMusic.index) && playlist[savedMusic.index] ? savedMusic.index : 0;
let resumePosition = Number.isFinite(savedMusic.position) ? Math.max(0, savedMusic.position) : 0;
let shuffle = savedMusic.shuffle === true;
let repeat = ["off", "playlist", "song"].includes(savedMusic.repeat) ? savedMusic.repeat : "playlist";
const failedTracks = new Set();
let shuffleBag = [];
let trackHistory = [];
let wantsPlayback = false;
let playbackRequest = 0;
let lastSaved = 0;
let titleTimer;
const musicTitle = musicPlayer.querySelector(".music-track-title");
const musicArtist = musicPlayer.querySelector(".music-track-artist");
const musicInfo = musicPlayer.querySelector(".music-track-info");
const musicCount = musicPlayer.querySelector(".music-track-count");
const musicSeek = musicPlayer.querySelector(".music-seek");
const musicCurrent = musicPlayer.querySelector(".music-time-current");
const musicTotal = musicPlayer.querySelector(".music-time-total");
const musicPlay = musicPlayer.querySelector(".music-play");
const musicStatus = musicPlayer.querySelector(".music-status");
const musicVolume = musicPlayer.querySelector(".music-volume");
const musicShuffle = musicPlayer.querySelector(".music-shuffle");
const musicRepeat = musicPlayer.querySelector(".music-repeat");
const musicMute = musicPlayer.querySelector(".music-mute");
const musicQueueToggle = musicPlayer.querySelector(".music-queue-toggle");
const musicQueuePanel = musicPlayer.querySelector(".music-queue-panel");
const musicDetails = musicPlayer.querySelector(".music-details");
const musicCollapse = musicPlayer.querySelector(".music-collapse");
const queueButtons = playlist.map((track, index) => {
  const row = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  const number = document.createElement("span");
  number.className = "music-queue-number";
  number.textContent = String(index + 1).padStart(2, "0");
  const label = document.createElement("span");
  label.textContent = track.title;
  if (track.artist) {
    const artist = document.createElement("small");
    artist.textContent = track.artist;
    label.append(artist);
  }
  button.append(number, label);
  button.addEventListener("click", () => {
    shuffleBag = [];
    trackHistory = [];
    loadTrack(index);
    if (shuffle) refillShuffleBag();
    startMusic();
  });
  row.append(button);
  musicPlayer.querySelector(".music-queue").append(row);
  return button;
});
if (playlistConfig.cover) {
  const cover = musicPlayer.querySelector(".music-cover");
  cover.addEventListener("error", () => { cover.hidden = true; });
  cover.src = playlistConfig.cover;
  cover.hidden = false;
}
function formatMusicTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}
function saveMusicState() {
  try {
    localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify({ index: trackIndex, position: resumePosition || soundtrack.currentTime || 0, volume: soundtrack.volume, muted: soundtrack.muted, shuffle, repeat }));
  } catch { /* Playback works with blocked/full storage. */ }
  lastSaved = Date.now();
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
function updateTrackLabel(animate = true) {
  clearTimeout(titleTimer);
  const setTitle = () => {
    musicTitle.textContent = playlist[trackIndex].title;
    musicTitle.title = playlist[trackIndex].title;
    musicArtist.textContent = playlist[trackIndex].artist;
    musicArtist.hidden = !playlist[trackIndex].artist;
    musicInfo.classList.remove("is-leaving");
    if (animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) musicInfo.animate?.([{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 140, easing: "ease-out" });
  };
  if (animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    musicInfo.classList.add("is-leaving");
    titleTimer = setTimeout(setTitle, 130);
  } else setTitle();
  const available = playlist.length - failedTracks.size;
  const ordinal = playlist.slice(0, trackIndex + 1).filter((_, i) => !failedTracks.has(i)).length;
  musicCount.textContent = `${String(ordinal).padStart(2, "0")} / ${String(available).padStart(2, "0")}`;
  musicPlayer.querySelector(".music-library-count").textContent = `${available} TRACKS`;
  queueButtons.forEach((button, i) => {
    button.classList.toggle("is-current", i === trackIndex);
    button.setAttribute("aria-current", i === trackIndex ? "true" : "false");
    button.disabled = failedTracks.has(i);
    button.title = failedTracks.has(i) ? "Unavailable in this browser" : playlist[i].title;
  });
}
function setMusicCollapsed(collapsed) {
  musicPlayer.classList.toggle("is-collapsed", collapsed);
  musicDetails.inert = collapsed;
  musicCollapse.setAttribute("aria-label", collapsed ? "Expand music player" : "Collapse music player");
  musicCollapse.setAttribute("aria-expanded", String(!collapsed));
  musicCollapse.textContent = collapsed ? "+" : "−";
}
function showMusicPlayer() {
  showVerse(false);
  if (!musicPlayer.classList.contains("is-open")) setMusicCollapsed(matchMedia("(max-width: 600px)").matches);
  musicPlayer.classList.add("is-open");
  musicPlayer.setAttribute("aria-hidden", "false");
  musicPlayer.inert = false;
}
function loadTrack(index, position = 0) {
  playbackRequest++;
  soundtrack.pause();
  trackIndex = index;
  resumePosition = position;
  soundtrack.src = playlist[index].src;
  soundtrack.load();
  musicSeek.value = "0";
  musicCurrent.textContent = formatMusicTime(position);
  musicTotal.textContent = "0:00";
  updateTrackLabel();
  saveMusicState();
}
async function startMusic() {
  showMusicPlayer();
  wantsPlayback = true;
  if (failedTracks.has(trackIndex)) { skipFailedTrack(); return; }
  const request = ++playbackRequest;
  try {
    await soundtrack.play();
    if (request === playbackRequest) syncMusicState();
  } catch (error) {
    if (request !== playbackRequest || error.name === "AbortError") return;
    if (error.name === "NotAllowedError") {
      wantsPlayback = false;
      musicStatus.textContent = "Press play to continue.";
    } else markFailedTrack();
    syncMusicState();
  }
}
function pauseMusic() {
  wantsPlayback = false;
  playbackRequest++;
  soundtrack.pause();
  saveMusicState();
}
function skipFailedTrack() {
  for (let step = 1; step <= playlist.length; step++) {
    const next = (trackIndex + step) % playlist.length;
    if (!failedTracks.has(next)) {
      loadTrack(next);
      if (wantsPlayback) startMusic();
      return;
    }
  }
  pauseMusic();
  musicStatus.textContent = "No playable tracks available.";
}
function markFailedTrack() {
  if (failedTracks.has(trackIndex)) return;
  failedTracks.add(trackIndex);
  musicStatus.textContent = `Unavailable: ${[...failedTracks].map(i => playlist[i].src.split("/").pop()).join(", ")}`;
  updateTrackLabel(false);
  skipFailedTrack();
}
function refillShuffleBag() {
  shuffleBag = playlist.map((_, i) => i).filter(i => i !== trackIndex && !failedTracks.has(i));
  for (let i = shuffleBag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleBag[i], shuffleBag[j]] = [shuffleBag[j], shuffleBag[i]];
  }
}
function nextTrack(automatic = false) {
  if (automatic && repeat === "song") {
    soundtrack.currentTime = 0;
    startMusic();
    return;
  }
  let next;
  if (shuffle) {
    shuffleBag = shuffleBag.filter(i => !failedTracks.has(i));
    if (!shuffleBag.length) {
      if (automatic && repeat === "off") { pauseMusic(); return; }
      refillShuffleBag();
    }
    next = shuffleBag.shift() ?? trackIndex;
  } else {
    next = playlist.findIndex((_, i) => i > trackIndex && !failedTracks.has(i));
    if (next < 0) {
      if (automatic && repeat === "off") { pauseMusic(); return; }
      next = playlist.findIndex((_, i) => !failedTracks.has(i));
    }
  }
  if (next < 0) return;
  trackHistory.push(trackIndex);
  if (trackHistory.length > 200) trackHistory.shift();
  loadTrack(next);
  startMusic();
}
function syncMusicOptions() {
  musicShuffle.setAttribute("aria-pressed", String(shuffle));
  musicRepeat.textContent = repeat === "song" ? "↻¹" : "↻";
  musicRepeat.dataset.active = String(repeat !== "off");
  musicRepeat.setAttribute("aria-label", `Repeat ${repeat}`);
  musicRepeat.title = `Repeat ${repeat}`;
  musicMute.textContent = soundtrack.muted ? "MUTE" : "VOL";
  musicMute.setAttribute("aria-label", soundtrack.muted ? "Unmute" : "Mute");
  musicMute.setAttribute("aria-pressed", String(soundtrack.muted));
  musicVolume.value = String(soundtrack.volume);
}
soundtrack.addEventListener("play", syncMusicState);
soundtrack.addEventListener("pause", syncMusicState);
soundtrack.addEventListener("ended", () => nextTrack(true));
soundtrack.addEventListener("error", markFailedTrack);
soundtrack.addEventListener("loadedmetadata", () => {
  musicTotal.textContent = formatMusicTime(soundtrack.duration);
  if (resumePosition && Number.isFinite(soundtrack.duration)) soundtrack.currentTime = Math.min(resumePosition, Math.max(0, soundtrack.duration - 0.1));
  resumePosition = 0;
});
soundtrack.addEventListener("timeupdate", () => {
  musicSeek.value = String(Number.isFinite(soundtrack.duration) && soundtrack.duration > 0 ? Math.round(soundtrack.currentTime / soundtrack.duration * 1000) : 0);
  musicCurrent.textContent = formatMusicTime(soundtrack.currentTime);
  if (Date.now() - lastSaved > 2000) saveMusicState();
});
soundtrack.addEventListener("volumechange", () => { syncMusicOptions(); saveMusicState(); });
const toggleMusic = () => { if (soundtrack.paused || soundtrack.ended) startMusic(); else pauseMusic(); };
soundToggle.addEventListener("click", toggleMusic);
musicPlay.addEventListener("click", toggleMusic);
musicPlayer.querySelector(".music-next").addEventListener("click", () => nextTrack());
musicPlayer.querySelector(".music-previous").addEventListener("click", () => {
  if (soundtrack.currentTime > 3) { soundtrack.currentTime = 0; startMusic(); return; }
  let previous;
  if (shuffle) {
    previous = trackHistory.pop() ?? trackIndex;
    shuffleBag = shuffleBag.filter(i => i !== previous);
    if (previous !== trackIndex) shuffleBag.unshift(trackIndex);
  } else {
    for (let step = 1; step <= playlist.length; step++) {
      const candidate = (trackIndex - step + playlist.length) % playlist.length;
      if (!failedTracks.has(candidate)) { previous = candidate; break; }
    }
  }
  if (previous !== undefined) { loadTrack(previous); startMusic(); }
});
musicCollapse.addEventListener("click", () => setMusicCollapsed(!musicPlayer.classList.contains("is-collapsed")));
musicInfo.addEventListener("click", () => { if (musicPlayer.classList.contains("is-collapsed")) setMusicCollapsed(false); });
musicQueueToggle.addEventListener("click", () => {
  const open = musicQueueToggle.getAttribute("aria-expanded") !== "true";
  musicQueueToggle.setAttribute("aria-expanded", String(open));
  musicQueuePanel.classList.toggle("is-open", open);
  musicQueuePanel.inert = !open;
});
musicShuffle.addEventListener("click", () => {
  shuffle = !shuffle;
  trackHistory = [];
  shuffleBag = [];
  if (shuffle) refillShuffleBag();
  syncMusicOptions(); saveMusicState();
});
musicRepeat.addEventListener("click", () => {
  repeat = { off: "playlist", playlist: "song", song: "off" }[repeat];
  syncMusicOptions(); saveMusicState();
});
musicMute.addEventListener("click", () => { soundtrack.muted = !soundtrack.muted; });
musicVolume.addEventListener("input", () => { soundtrack.volume = Number(musicVolume.value); soundtrack.muted = false; });
musicSeek.addEventListener("input", () => {
  if (Number.isFinite(soundtrack.duration)) {
    resumePosition = 0;
    soundtrack.currentTime = soundtrack.duration * Number(musicSeek.value) / 1000;
    musicCurrent.textContent = formatMusicTime(soundtrack.currentTime);
    saveMusicState();
  }
});
window.addEventListener("pagehide", saveMusicState);
document.addEventListener("visibilitychange", () => { if (document.hidden) saveMusicState(); });
loadTrack(trackIndex, resumePosition);
if (shuffle) refillShuffleBag();
updateTrackLabel(false);
syncMusicOptions();
syncMusicState();


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
const archivePresentation = document.querySelector(".archive-presentation");
const archivePage = archiveJourney?.closest(".archive-page");
const archiveProgress = document.querySelector(".archive-progress");
const archiveIndexItems = [...document.querySelectorAll("[data-archive-go]")];
const archiveNames = document.documentElement.dataset.projectCarousel === "true"
  ? ["PORCHLIGHT", "CONFERENCE TICKETS", "DIGITALBANK", "FRONT-END MENTOR", "PYTHON / DATA"]
  : ["PORCHLIGHT SUPPORT FINDER", "CONFERENCE TICKET GENERATOR", "DIGITALBANK", "FRONT-END MENTOR PROJECTS", "PYTHON / DATA PROJECTS"];
const archiveCommandTarget = document.querySelector(".archive-command-target");
const archiveTerminal = document.querySelector(".archive-terminal");
const archiveCursorPreview = document.querySelector(".archive-cursor-preview");
const archiveCursorImage = archiveCursorPreview?.querySelector("img");
const archiveCursorLabel = archiveCursorPreview?.querySelector("span");
const archivePrevious = document.querySelector(".archive-arrow-prev");
const archiveNext = document.querySelector(".archive-arrow-next");
const archiveCarouselPage = document.documentElement.dataset.projectCarousel === "true";
const archiveMobilePreference = matchMedia("(max-width:600px)");
let archivePreviewFrame = 0;
let archivePreviewPoint = { x: 0, y: 0 };
let reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let archiveStart = 0;
let archiveTravel = 1;
let archiveHeight = 0;
let archiveViewportHeight = innerHeight;
let archiveSideOffset = 520;
let archiveMobileTargets = [];
let archiveMobileMax = 0;
let archiveStageInView = false;
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
  archiveViewportHeight = window.innerHeight;
  if (archiveCarouselPage && archivePresentation && archiveScenes.length) {
    archiveSideOffset = Math.min(archivePresentation.clientWidth * .48, archiveScenes[0].offsetWidth * .82);
    archiveMobileMax = Math.max(0, archivePresentation.scrollWidth - archivePresentation.clientWidth);
    archiveMobileTargets = archiveScenes.map((scene) => Math.min(
      archiveMobileMax,
      Math.max(0, scene.offsetLeft - (archivePresentation.clientWidth - scene.offsetWidth) / 2),
    ));
  }
}
function loadArchiveSceneImages(index) {
  archiveScenes[index]?.querySelectorAll("img[data-src]").forEach((image) => {
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  });
}
window.addEventListener("resize", measureArchive, { passive: true });
function syncArchiveActive(active) {
  if (active === previousArchiveActive) return;
  previousArchiveActive = active;
  archiveScenes.forEach((item, index) => {
    item.classList.toggle("is-active", index === active);
    item.setAttribute("aria-hidden", String(index !== active));
    item.inert = index !== active;
    if (archiveCarouselPage) item.style.zIndex = String(index === active ? 3 : Math.abs(index - active) === 1 ? 2 : 1);
  });
  const number = String(active + 1).padStart(2, "0");
  archiveProgress?.querySelector("b")?.replaceChildren(number);
  const currentLabel = document.querySelector(".archive-current-label strong");
  if (currentLabel) currentLabel.textContent = `${number} / ${archiveNames[active]}`;
  if (archiveCommandTarget) archiveCommandTarget.textContent = `open ${archiveFoldersForCommand(active)}`;
  const firstNearby = archiveCarouselPage ? active - 1 : active;
  const lastNearby = Math.min(active + 1, archiveScenes.length - 1);
  for (let index = Math.max(0, firstNearby); index <= lastNearby; index += 1) loadArchiveSceneImages(index);
  archiveIndexItems.forEach((button, index) => {
    button.setAttribute("aria-current", index === active ? "step" : "false");
    button.classList.toggle("is-selected", index === active);
  });
  if (archivePrevious) archivePrevious.disabled = active === 0;
  if (archiveNext) archiveNext.disabled = active === archiveScenes.length - 1;
}
function updateArchiveCarousel() {
  const y = window.scrollY;
  archiveStageInView = y + archiveViewportHeight > archiveStart && y < archiveStart + archiveHeight;
  archivePage?.classList.toggle("archive-nav-on", archiveStageInView);
  if (archiveMobilePreference.matches) {
    const left = archivePresentation?.scrollLeft || 0;
    let active = 0;
    let nearest = Infinity;
    archiveMobileTargets.forEach((target, index) => {
      const distance = Math.abs(target - left);
      if (distance < nearest) {
        nearest = distance;
        active = index;
      }
    });
    syncArchiveActive(active);
    return;
  }
  const progress = Math.min(1, Math.max(0, (y - archiveStart) / archiveTravel));
  const position = progress * (archiveScenes.length - 1);
  const active = Math.min(archiveScenes.length - 1, Math.round(position));
  archiveScenes.forEach((item, index) => {
    const distance = index - position;
    const absoluteDistance = Math.abs(distance);
    const direction = Math.sign(distance);
    const beyondAdjacent = Math.min(1, Math.max(0, absoluteDistance - 1));
    const x = direction * archiveSideOffset * (Math.min(absoluteDistance, 1) + beyondAdjacent * .72);
    const scale = absoluteDistance <= 1 ? 1 - absoluteDistance * .15 : .85 - beyondAdjacent * .1;
    const rotation = direction * (Math.min(absoluteDistance, 1) * 3 + beyondAdjacent * 2);
    const opacity = absoluteDistance <= 1 ? 1 - absoluteDistance * .45 : .55 * (1 - beyondAdjacent);
    item.style.transform = `translate3d(${x.toFixed(1)}px,0,0) scale(${scale.toFixed(3)}) rotate(${rotation.toFixed(2)}deg)`;
    item.style.opacity = Math.max(0, opacity).toFixed(3);
  });
  syncArchiveActive(active);
}
function updateArchiveLegacy() {
  const top = archiveStart - window.scrollY;
  const progress = Math.min(1, Math.max(0, (window.scrollY - archiveStart) / archiveTravel));
  archivePage?.classList.toggle("archive-nav-on", top < archiveViewportHeight * .82 && top + archiveHeight > archiveViewportHeight * .18);
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
    item.style.setProperty("--archive-scale", (0.965 + enter * .035 - leave * .025).toFixed(3));
    item.style.setProperty("--archive-rotate", `${((1 - enter) * .65 - leave * 1.1).toFixed(2)}deg`);
    if (incoming !== previousArchiveIncoming || outgoing !== previousArchiveOutgoing) item.style.zIndex = String(index === incoming ? 3 : index === outgoing ? 2 : 1);
  });
  syncArchiveActive(active);
  previousArchiveIncoming = incoming;
  previousArchiveOutgoing = outgoing;
}
function updateArchive() {
  if (!archiveJourney || !archiveScenes.length) return;
  if (reducedMotion) {
    if (reducedArchiveReady) return;
    archiveStageInView = false;
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
  if (archiveCarouselPage) updateArchiveCarousel();
  else updateArchiveLegacy();
}
function archiveFoldersForCommand(index) {
  return archiveIndexItems[index]?.dataset.command || archiveNames[index]?.toLowerCase().replaceAll(" ", "-") || "projects";
}
window.addPortfolioScrollTask(updateArchive);
function scrollToArchive(index, behavior = "smooth") {
  const target = Math.max(0, Math.min(archiveScenes.length - 1, index));
  if (archiveCarouselPage && archiveMobilePreference.matches) {
    archivePresentation?.scrollTo({ left: archiveMobileTargets[target] || 0, behavior });
    return;
  }
  window.scrollTo({
    top: archiveStart + archiveTravel * target / Math.max(1, archiveScenes.length - 1),
    behavior,
  });
}
archiveIndexItems.forEach((button) => button.addEventListener("click", (event) => {
  if (!archiveJourney) return;
  const index = Number(button.dataset.archiveGo);
  if (reducedMotion) {
    if (archiveCarouselPage) return;
    archiveScenes[index]?.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }
  event.preventDefault();
  scrollToArchive(index);
}));
archivePrevious?.addEventListener("click", () => scrollToArchive(previousArchiveActive - 1));
archiveNext?.addEventListener("click", () => scrollToArchive(previousArchiveActive + 1));
archivePresentation?.addEventListener("scroll", schedulePortfolioScroll, { passive: true });
document.addEventListener("keydown", (event) => {
  if (!archiveCarouselPage || reducedMotion || !archiveStageInView || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  if (event.target.closest("input,textarea,select,[contenteditable]")) return;
  event.preventDefault();
  scrollToArchive(previousArchiveActive + (event.key === "ArrowRight" ? 1 : -1));
});
archiveMobilePreference.addEventListener?.("change", () => {
  measureArchive();
  if (archiveMobilePreference.matches && previousArchiveActive >= 0) archivePresentation?.scrollTo({ left: archiveMobileTargets[previousArchiveActive] || 0, behavior: "auto" });
  updateArchive();
});
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
  refreshPortfolioScrollMetrics();
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
