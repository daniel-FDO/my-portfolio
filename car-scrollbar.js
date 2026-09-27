(() => {
  const page = document.documentElement.dataset.page || "home";
  const projects = [
    ["01", "PORCHLIGHT"],
    ["02", "BLUEPRINT"],
    ["03", "DIGITALBANK"],
    ["04", "ROCK · PAPER · SCISSORS"],
    ["05", "CONFERENCE TICKETS"],
  ];
  const road = document.createElement("aside");
  road.className = "journey-road";
  road.setAttribute("aria-label", "Portfolio journey scrollbar");
  road.innerHTML = `<span class="road-caption" aria-hidden="true">JOURNEY</span><div class="road-track"><i class="road-centerline" aria-hidden="true"></i><div class="road-markers"></div><div class="road-car" role="scrollbar" tabindex="0" aria-label="Portfolio scroll position. Drag the car or use arrow keys." aria-controls="scene" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><svg class="road-car-art" viewBox="0 0 72 40" aria-hidden="true"><path class="car-body" d="M6 26h7.2l5.4-9.2c1.4-2.4 3.4-3.7 6.3-3.7h17.7c3.7 0 6.1 1.7 8.4 4.8l5.5 8.1h5.2c2.6 0 4.2 1.7 4.2 4v2.2h-8.1a7 7 0 0 0-13.6 0H28a7 7 0 0 0-13.6 0H6z"/><path class="car-window" d="m21.1 17.8-4.2 7h13.7v-9.2h-5.7c-1.8 0-3 .6-3.8 2.2zm12-.2v7.2h22.5l-5-6.1c-1.6-1.9-3.2-2.7-5.6-2.7z"/><path class="car-accent" d="M15 27.3h31.5v1.7H15z"/><path class="car-headlight" d="M62.4 26.1h2.1v2.1h-2.1z"/><circle class="car-wheel" cx="21.2" cy="31" r="4.3"/><circle class="car-wheel" cx="50.8" cy="31" r="4.3"/><g class="car-spokes"><path d="M21.2 28.7v4.6m-2.3-2.3h4.6"/></g><g class="car-spokes car-spokes-front"><path d="M50.8 28.7v4.6m-2.3-2.3h4.6"/></g></svg><span class="car-hit-label" aria-hidden="true">DRAG TO SCROLL</span></div><span class="road-coordinate road-coordinate-top" aria-hidden="true">00</span><span class="road-coordinate road-coordinate-bottom" aria-hidden="true">100</span></div>`;
  document.body.append(road);
  document.documentElement.classList.add("has-journey-road");

  const track = road.querySelector(".road-track");
  const car = road.querySelector(".road-car");
  const markersNode = road.querySelector(".road-markers");
  let anchors = [];
  let frame = 0;
  let stopTimer = 0;
  let previousY = scrollY;

  function pageTop(element) {
    return element ? scrollY + element.getBoundingClientRect().top : 0;
  }

  function buildAnchors() {
    const anchorsNext = [];
    const add = (label, element, region, top = null) => {
      if (!element && top === null) return;
      anchorsNext.push({ label, element, region, top: top ?? pageTop(element) });
    };
    const intro = document.querySelector(".page-intro");
    if (document.documentElement.dataset.singlePage === "true") {
      [["01", "HOME", "home"], ["02", "ABOUT", "about"], ["03", "PROJECTS", "projects"], ["04", "EXPERIENCE", "experience"], ["05", "EDUCATION", "education"], ["06", "CONTACT", "contact"]].forEach(([number, name, id]) => {
        const chapter = document.getElementById(id);
        add(`${number} / ${name}`, chapter, id, chapter ? pageTop(chapter) : null);
      });
    } else if (page === "home") {
      add("HOME", document.querySelector(".home-hero"), "home", 0);
      add("WORK", document.querySelector(".project-intro"), "work");
      const stage = document.querySelector("#work-traverse");
      if (stage) {
        const start = pageTop(stage);
        const travel = Math.max(0, stage.offsetHeight - innerHeight);
        projects.forEach(([number, name], index) => {
          add(`${number} / ${name}`, stage, "projects", start + travel * index / (projects.length - 1));
        });
      }
      add("ABOUT", document.querySelector(".home-band"), "about");
      add("CONTACT", document.querySelector(".home-contact"), "contact");
    } else if (page === "projects") {
      add("WORK", intro, "projects");
      const archive = document.querySelector(".archive-journey");
      if (archive) {
        const start = pageTop(archive);
        const travel = Math.max(0, archive.offsetHeight - innerHeight);
        const chapters = [["01", "PORCHLIGHT"], ["02", "TICKET"], ["03", "DIGITALBANK"], ["04", "FRONT-END"], ["05", "PYTHON / DATA"]];
        chapters.forEach(([number, name], index) => {
          add(`${number} / ${name}`, archive, "projects", start + travel * index / (chapters.length - 1));
        });
      } else {
        document.querySelectorAll(".project-card").forEach((card, index) => {
          const [number, name] = projects[index] || [];
          if (number) add(`${number} / ${name}`, card, "projects");
        });
      }
    } else if (page === "about") {
      add("ABOUT", document.querySelector(".about-hero"), "about");
      add("EDUCATION", document.querySelector(".info-panel:nth-child(1)"), "about");
      add("SKILLS", document.querySelector(".info-panel:nth-child(2)"), "about");
      add("NEXT", document.querySelector(".info-panel:nth-child(4)"), "about");
    } else if (page === "experience") {
      add("EXPERIENCE", intro, "experience");
      add("DOVER LIBRARY", document.querySelector(".timeline-item:nth-child(2)"), "experience");
      add("T LEVEL", document.querySelector(".timeline-item:last-child"), "experience");
    } else if (page === "contact") {
      add("CONTACT", document.querySelector(".contact-canvas"), "contact");
      add("CONNECT", document.querySelector(".contact-links"), "contact");
    }
    add("END", document.querySelector("#site-footer"), "contact");
    anchors = anchorsNext.sort((a, b) => a.top - b.top);
    markersNode.innerHTML = anchors.map((anchor, index) =>
      `<button class="road-marker" type="button" style="--marker-index:${index}" aria-label="Go to ${anchor.label}" data-road-index="${index}"><i aria-hidden="true"></i><span aria-hidden="true">${anchor.label}</span></button>`,
    ).join("");
    update();
  }

  function update() {
    frame = 0;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / max));
    const travel = Math.max(0, track.clientHeight - car.offsetHeight);
    car.style.setProperty("--car-y", `${travel * progress}px`);
    car.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
    let nearest = 0;
    let nearestDistance = Infinity;
    const markers = [...markersNode.querySelectorAll(".road-marker")];
    anchors.forEach((anchor, index) => {
      const distance = Math.abs(anchor.top - scrollY);
      const markerPosition = Math.min(100, Math.max(0, anchor.top / max * 100));
      markers[index]?.style.setProperty("--marker-y", `${markerPosition}%`);
      if (distance < nearestDistance) { nearestDistance = distance; nearest = index; }
    });
    markers.forEach((marker, index) => marker.toggleAttribute("data-active", index === nearest));
    road.dataset.region = anchors[nearest]?.region || "home";

    const delta = scrollY - previousY;
    previousY = scrollY;
    if (Math.abs(delta) > 0.2) {
      road.classList.add("is-moving");
      road.classList.toggle("is-reverse", delta < 0);
      roadCarLean(delta);
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => {
        road.classList.remove("is-moving", "is-reverse");
        car.style.setProperty("--car-lean", "0deg");
      }, 180);
    }
  }

  let wheelAngle = 0;
  function roadCarLean(delta) {
    wheelAngle += delta * 1.3;
    car.style.setProperty("--car-lean", `${Math.max(-1.6, Math.min(1.6, delta * 0.035))}deg`);
    car.style.setProperty("--wheel-turn", `${wheelAngle}deg`);
  }
  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", () => { buildAnchors(); requestUpdate(); }, { passive: true });
  window.addEventListener("load", () => { buildAnchors(); requestUpdate(); }, { once: true });

  track.addEventListener("click", (event) => {
    if (event.target.closest(".road-car,.road-marker")) return;
    const bounds = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    window.scrollTo({ top: ratio * Math.max(0, document.documentElement.scrollHeight - innerHeight), behavior: "smooth" });
  });
  markersNode.addEventListener("click", (event) => {
    const marker = event.target.closest("[data-road-index]");
    if (!marker) return;
    const anchor = anchors[Number(marker.dataset.roadIndex)];
    if (anchor) window.scrollTo({ top: anchor.top, behavior: "smooth" });
  });

  let dragging = false;
  let startY = 0;
  let startScroll = 0;
  let previousBehavior = "";
  car.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    dragging = true;
    startY = event.clientY;
    startScroll = scrollY;
    previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    road.classList.add("is-dragging");
    car.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  car.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const trackTravel = Math.max(1, track.clientHeight - car.offsetHeight);
    const pageTravel = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    window.scrollTo(0, startScroll + (event.clientY - startY) / trackTravel * pageTravel);
  });
  function release() {
    if (!dragging) return;
    dragging = false;
    road.classList.remove("is-dragging");
    document.documentElement.style.scrollBehavior = previousBehavior;
    car.style.setProperty("--car-lean", "0deg");
  }
  car.addEventListener("pointerup", release);
  car.addEventListener("pointercancel", release);
  car.addEventListener("keydown", (event) => {
    const pageTravel = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    const moves = { ArrowDown: 48, ArrowRight: 48, ArrowUp: -48, ArrowLeft: -48, PageDown: innerHeight * 0.85, PageUp: -innerHeight * 0.85 };
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      window.scrollTo({ top: event.key === "Home" ? 0 : pageTravel, behavior: "smooth" });
    } else if (event.key in moves) {
      event.preventDefault();
      window.scrollTo({ top: scrollY + moves[event.key], behavior: "smooth" });
    }
  });

  requestAnimationFrame(buildAnchors);
})();
