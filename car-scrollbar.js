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
  road.innerHTML = `<span class="road-caption" aria-hidden="true">JOURNEY</span><div class="road-track"><i class="road-centerline" aria-hidden="true"></i><div class="road-markers"></div><div class="road-car" role="scrollbar" tabindex="0" aria-label="Portfolio scroll position. Drag the car or use arrow keys." aria-controls="scene" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><svg class="road-car-art" viewBox="0 0 144 64" aria-hidden="true"><defs><linearGradient id="fastback-paint" x1="0" x2=".85" y1="0" y2="1"><stop stop-color="var(--car-highlight,#a9aaa8)"/><stop offset=".44" stop-color="var(--car-body)"/><stop offset="1" stop-color="var(--car-shadow,#353738)"/></linearGradient><linearGradient id="fastback-glass" x1="0" x2="1" y1="0" y2="1"><stop stop-color="var(--car-glass,#192124)"/><stop offset="1" stop-color="var(--car-window)"/></linearGradient></defs><path class="car-body" fill="url(#fastback-paint)" d="M8 41.8c1.2-3.7 4.6-6.5 9.3-7.7l13.7-3.6 15.4-15.8c3.4-3.5 7.1-5.2 12.8-5.2h34.2c7 0 12.1 1.8 17.6 6.5l14 11.5 8.1 3.2c4.2 1.7 6.2 4.7 6.2 8.7v5.2h-15.5a12.2 12.2 0 0 0-23.8 0H49.2a12.2 12.2 0 0 0-23.8 0H8z"/><path class="car-window" fill="url(#fastback-glass)" d="m49.3 16.3-12.6 13h23V13h-5.8c-1.8 0-3.2.8-4.6 3.3zm14-3.3v16.3h48.1l-12-10.1c-4.4-3.7-8.3-6.2-15-6.2z"/><path class="car-glass-line" d="M60 14v15m3.3-15v15"/><path class="car-highlight" d="M19 35.6 42 30.1m26-17.4h17"/><path class="car-grille" d="M8.8 37.1h7.4v6.2H8.2m122.5-8.5 6.2 2.8v5.7h-9.4"/><path class="car-headlight" d="m10.4 35.1 7.9-2.2-1.2 3.5-7.4 2z"/><path class="car-taillight" d="m132.3 31.1 6.1 2.2v2.1l-5.4-1.5z"/><path class="car-accent" d="M22 45h25m50 0h16"/><circle class="car-wheel" cx="37.4" cy="45" r="11.1"/><circle class="car-wheel" cx="111" cy="45" r="11.1"/><circle class="car-hub" cx="37.4" cy="45" r="3.1"/><circle class="car-hub" cx="111" cy="45" r="3.1"/><g class="car-spokes"><path d="M37.4 35.1v19.8m-9.9-9.9h19.8m-17-7 14 14m0-14-14 14"/></g><g class="car-spokes car-spokes-front"><path d="M111 35.1v19.8m-9.9-9.9h19.8m-17-7 14 14m0-14-14 14"/></g><path class="car-splitter" d="M6.7 44.4h18.8m97.7 0h18.1"/></svg><span class="car-hit-label" aria-hidden="true">DRAG TO SCROLL</span></div><span class="road-coordinate road-coordinate-top" aria-hidden="true">00</span><span class="road-coordinate road-coordinate-bottom" aria-hidden="true">100</span></div>`;
  document.body.append(road);
  document.documentElement.classList.add("has-journey-road");

  const track = road.querySelector(".road-track");
  const car = road.querySelector(".road-car");
  const markersNode = road.querySelector(".road-markers");
  let anchors = [];
  let frame = 0;
  let motionFrame = 0;
  let currentCarY = 0;
  let targetCarY = 0;
  let carVelocity = 0;
  let carTravel = 0;
  let pageMaxScroll = 0;
  let markers = [];
  let previousNearest = -1;
  let previousPercent = -1;
  let stopTimer = 0;
  let previousY = scrollY;

  function pageTop(element) {
    return element ? scrollY + element.getBoundingClientRect().top : 0;
  }

  function buildAnchors() {
    carTravel = Math.max(0, track.clientHeight - car.offsetHeight);
    pageMaxScroll = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    const anchorsNext = [];
    const add = (label, element, region, top = null) => {
      if (!element && top === null) return;
      anchorsNext.push({ label, element, region, top: top ?? pageTop(element) });
    };
    const intro = document.querySelector(".page-intro");
    if (document.documentElement.dataset.singlePage === "true") {
      [["01", "HOME", "home"], ["02", "ABOUT", "about"], ["03", "PROJECTS", "projects"], ["04", "EXPERIENCE", "experience"], ["05", "EDUCATION", "education"], ["06", "SKILLS", "skills"], ["07", "CONTACT", "contact"]].forEach(([number, name, id]) => {
        const chapter = document.getElementById(id);
        add(`${number} / ${name}`, chapter, id, chapter ? pageTop(chapter) : null);
      });
      document.querySelectorAll("#projects [data-project-section]").forEach((chapter, index) => {
        const number = String(index + 1).padStart(2, "0");
        const name = chapter.querySelector("h2")?.textContent || "PROJECT";
        add(`${number} / ${name}`, chapter, "projects");
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
      const chapters = [...document.querySelectorAll("[data-project-section]")];
      if (chapters.length) {
        chapters.forEach((chapter, index) => {
          const number = String(index + 1).padStart(2, "0");
          const name = chapter.querySelector("h2")?.textContent || "PROJECT";
          add(`${number} / ${name}`, chapter, "projects");
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
    markers = [...markersNode.querySelectorAll(".road-marker")];
    anchors.forEach((anchor, index) => markers[index]?.style.setProperty("--marker-y", `${Math.min(100, Math.max(0, anchor.top / Math.max(1, pageMaxScroll) * 100))}%`));
    previousNearest = -1;
    update();
  }

  function update() {
    frame = 0;
    const progress = Math.min(1, Math.max(0, scrollY / Math.max(1, pageMaxScroll)));
    targetCarY = carTravel * progress;
    if (!motionFrame) motionFrame = requestAnimationFrame(animateCar);
    const percent = Math.round(progress * 100);
    if (percent !== previousPercent) {
      car.setAttribute("aria-valuenow", String(percent));
      previousPercent = percent;
    }
    let nearest = 0;
    let nearestDistance = Infinity;
    anchors.forEach((anchor, index) => {
      const distance = Math.abs(anchor.top - scrollY);
      if (distance < nearestDistance) { nearestDistance = distance; nearest = index; }
    });
    if (nearest !== previousNearest) {
      markers.forEach((marker, index) => marker.toggleAttribute("data-active", index === nearest));
      previousNearest = nearest;
    }
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

  function animateCar(timestamp) {
    const previous = animateCar.lastTime || timestamp;
    const delta = Math.min(32, timestamp - previous) / 1000;
    animateCar.lastTime = timestamp;
    const frequency = 23;
    const acceleration = frequency * frequency * (targetCarY - currentCarY) - 2 * .82 * frequency * carVelocity;
    carVelocity += acceleration * delta;
    currentCarY += carVelocity * delta;
    const speed = Math.min(1, Math.abs(carVelocity) / 620);
    car.style.setProperty("--car-suspension", `${(speed * 1.35).toFixed(2)}px`);
    car.style.setProperty("--car-physics-tilt", `${Math.max(-1.5, Math.min(1.5, -carVelocity * .002))}deg`);
    if (Math.abs(targetCarY - currentCarY) < 0.12 && Math.abs(carVelocity) < 1.8) {
      currentCarY = targetCarY;
      carVelocity = 0;
      motionFrame = 0;
    } else {
      motionFrame = requestAnimationFrame(animateCar);
    }
    car.style.setProperty("--car-y", `${currentCarY}px`);
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
  if (window.addPortfolioScrollTask) window.addPortfolioScrollTask(update);
  else window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", () => { buildAnchors(); requestUpdate(); }, { passive: true });
  window.addEventListener("load", () => { buildAnchors(); requestUpdate(); }, { once: true });

  track.addEventListener("click", (event) => {
    if (event.target.closest(".road-car,.road-marker")) return;
    const bounds = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    window.scrollTo({ top: ratio * pageMaxScroll, behavior: "smooth" });
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
    window.scrollTo(0, startScroll + (event.clientY - startY) / Math.max(1, carTravel) * pageMaxScroll);
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
    const moves = { ArrowDown: 48, ArrowRight: 48, ArrowUp: -48, ArrowLeft: -48, PageDown: innerHeight * 0.85, PageUp: -innerHeight * 0.85 };
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      window.scrollTo({ top: event.key === "Home" ? 0 : pageMaxScroll, behavior: "smooth" });
    } else if (event.key in moves) {
      event.preventDefault();
      window.scrollTo({ top: scrollY + moves[event.key], behavior: "smooth" });
    }
  });

  requestAnimationFrame(buildAnchors);
})();
