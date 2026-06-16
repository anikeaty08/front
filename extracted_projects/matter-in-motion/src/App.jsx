import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



"use strict";

/* ===============================
   PRELOADER
================================ */

const preloader = document.getElementById("preloader");
const preCount = document.getElementById("preCount");
const preBar = document.getElementById("preBar");

let preValue = 0;

const preInterval = setInterval(() => {
  preValue += Math.max(1, Math.floor((100 - preValue) * 0.08));
  if (preValue >= 100) {
    preValue = 100;
    clearInterval(preInterval);

    setTimeout(() => {
      preloader.classList.add("is-hidden");
      document.body.classList.add("is-loaded");
      revealInitial();
    }, 400);
  }

  preCount.textContent = preValue;
  preBar.style.width = preValue + "%";
}, 28);

/* ===============================
   SUBTLE LIVE CANVAS BACKGROUND
   Lightweight atmospheric field
================================ */

const canvas = document.getElementById("atmosphere");
const ctx = canvas.getContext("2d", { alpha: true });

let width = 0;
let height = 0;
let dpr = Math.min(window.devicePixelRatio || 1, 2);

let mouse = {
  x: 0.5,
  y: 0.5,
  tx: 0.5,
  ty: 0.5,
  active: false,
  pulse: 0
};

const blobs = [
  { x: 0.28, y: 0.38, r: 0.34, vx: 0.00018, vy: 0.00012, color: "184,199,217", alpha: 0.12 },
  { x: 0.70, y: 0.28, r: 0.26, vx: -0.00014, vy: 0.00011, color: "213,181,116", alpha: 0.08 },
  { x: 0.54, y: 0.72, r: 0.38, vx: 0.00010, vy: -0.00015, color: "143,168,197", alpha: 0.09 },
  { x: 0.18, y: 0.78, r: 0.24, vx: 0.00016, vy: -0.00008, color: "241,236,227", alpha: 0.045 }
];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resize();
window.addEventListener("resize", resize);

window.addEventListener("pointermove", (event) => {
  mouse.tx = event.clientX / width;
  mouse.ty = event.clientY / height;
  mouse.active = true;
});

window.addEventListener("pointerdown", () => {
  mouse.pulse = 1;
});

function drawAtmosphere(time) {
  const t = time * 0.001;

  mouse.x += (mouse.tx - mouse.x) * 0.035;
  mouse.y += (mouse.ty - mouse.y) * 0.035;
  mouse.pulse *= 0.94;

  ctx.clearRect(0, 0, width, height);

  const base = ctx.createRadialGradient(
    width * 0.5,
    height * 0.42,
    0,
    width * 0.5,
    height * 0.5,
    Math.max(width, height) * 0.82
  );

  base.addColorStop(0, "#10141c");
  base.addColorStop(0.46, "#07080b");
  base.addColorStop(1, "#050506");

  ctx.fillStyle = base;
  ctx.fillRect(0, 0, width, height);

  ctx.globalCompositeOperation = "screen";

  for (const blob of blobs) {
    blob.x += Math.sin(t * 0.18 + blob.r * 4) * blob.vx;
    blob.y += Math.cos(t * 0.15 + blob.r * 5) * blob.vy;

    const driftX = Math.sin(t * 0.25 + blob.r * 12) * 0.04;
    const driftY = Math.cos(t * 0.22 + blob.r * 8) * 0.035;

    const x = (blob.x + driftX) * width;
    const y = (blob.y + driftY) * height;
    const radius = blob.r * Math.max(width, height);

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(${blob.color}, ${blob.alpha})`);
    gradient.addColorStop(0.44, `rgba(${blob.color}, ${blob.alpha * 0.36})`);
    gradient.addColorStop(1, `rgba(${blob.color}, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const mx = mouse.x * width;
  const my = mouse.y * height;
  const mr = Math.max(width, height) * (0.18 + mouse.pulse * 0.18);

  const cursorGlow = ctx.createRadialGradient(mx, my, 0, mx, my, mr);
  cursorGlow.addColorStop(0, `rgba(184, 199, 217, ${mouse.active ? 0.075 + mouse.pulse * 0.12 : 0.025})`);
  cursorGlow.addColorStop(0.42, `rgba(213, 181, 116, ${mouse.active ? 0.035 + mouse.pulse * 0.08 : 0.01})`);
  cursorGlow.addColorStop(1, "rgba(184, 199, 217, 0)");

  ctx.fillStyle = cursorGlow;
  ctx.beginPath();
  ctx.arc(mx, my, mr, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalCompositeOperation = "source-over";

  requestAnimationFrame(drawAtmosphere);
}

requestAnimationFrame(drawAtmosphere);

/* ===============================
   REVEALS
================================ */

function revealInitial() {
  document.querySelectorAll(".hero .mask").forEach((el, index) => {
    setTimeout(() => el.classList.add("is-visible"), 140 + index * 160);
  });

  document.querySelectorAll(".hero .reveal").forEach((el, index) => {
    setTimeout(() => el.classList.add("is-visible"), 380 + index * 120);
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18
});

document.querySelectorAll(".reveal").forEach((el) => {
  if (!el.closest(".hero")) {
    revealObserver.observe(el);
  }
});

/* ===============================
   MASK REVEAL ON SCROLL
================================ */

const maskObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      maskObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.24
});

document.querySelectorAll(".mask").forEach((mask) => {
  if (!mask.closest(".hero")) {
    maskObserver.observe(mask);
  }
});

/* ===============================
   PINNED STATEMENT SCRUB
================================ */

const statementSection = document.querySelector(".opening-statement");
const statementLines = document.querySelectorAll("[data-statement-lines] .statement-line");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateStatementScrub() {
  if (!statementSection || !statementLines.length) return;

  const rect = statementSection.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  const activeIndex = Math.min(
    statementLines.length - 1,
    Math.floor(progress * statementLines.length)
  );

  statementLines.forEach((line, index) => {
    line.classList.toggle("is-active", index === activeIndex);
    line.classList.toggle("is-passed", index < activeIndex);
  });
}

window.addEventListener("scroll", updateStatementScrub, { passive: true });
window.addEventListener("resize", updateStatementScrub);
updateStatementScrub();

/* ===============================
   HORIZONTAL ROOMS SCRUB
================================ */

const roomsSection = document.querySelector(".rooms-section");
const roomsTrack = document.getElementById("roomsTrack");
const roomsProgress = document.getElementById("roomsProgress");

function updateRoomsScrub() {
  if (!roomsSection || !roomsTrack) return;

  if (window.innerWidth <= 860) {
    roomsTrack.style.transform = "translate3d(0, 0, 0)";
    if (roomsProgress) roomsProgress.style.width = "0%";
    return;
  }

  const rect = roomsSection.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  const maxShift = roomsTrack.scrollWidth - window.innerWidth + window.innerWidth * 0.18;
  const x = -maxShift * progress;

  roomsTrack.style.transform = `translate3d(${x}px, 0, 0)`;

  if (roomsProgress) {
    roomsProgress.style.width = `${progress * 100}%`;
  }
}

window.addEventListener("scroll", updateRoomsScrub, { passive: true });
window.addEventListener("resize", updateRoomsScrub);
updateRoomsScrub();

/* ===============================
   TICKET SLOT SELECTOR
================================ */

const ticketSlots = document.querySelectorAll(".slot");

ticketSlots.forEach((slot) => {
  slot.addEventListener("click", () => {
    ticketSlots.forEach((item) => item.classList.remove("is-active"));
    slot.classList.add("is-active");
  });
});

/* ===============================
   SOFT MAGNETIC BUTTONS
================================ */

const magneticButtons = document.querySelectorAll("[data-magnetic]");

magneticButtons.forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });

  button.addEventListener("pointerleave", () => {
    button.style.transform = "translate(0, 0)";
  });
});



/* ===============================
   ENHANCEMENT: smooth scroll · 3D particle field · custom cursor
================================ */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Lenis smooth scroll, synced to GSAP ScrollTrigger ---- */
  let lenis = null;
  if (typeof Lenis !== "undefined" && !reduceMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    if (typeof gsap !== "undefined" && gsap.ticker) {
      lenis.on("scroll", () => { if (window.ScrollTrigger) ScrollTrigger.update(); });
      gsap.ticker.add((time) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      const rafLoop = (t) => { lenis.raf(t); requestAnimationFrame(rafLoop); };
      requestAnimationFrame(rafLoop);
    }
    // route anchor links through Lenis so nav stays smooth
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (id && id.length > 1) {
          const target = document.querySelector(id);
          if (target) { e.preventDefault(); lenis.scrollTo(target); }
        }
      });
    });
  }

  /* ---- Three.js particle field: "matter in motion" ---- */
  if (typeof THREE !== "undefined") {
    const canvas = document.getElementById("webgl");
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 14;

    const isMobile = window.innerWidth < 720;
    const COUNT = isMobile ? 1400 : 3600;

    // soft round glow sprite so points aren't hard squares
    const sprite = (function () {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const g = c.getContext("2d");
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.25, "rgba(255,255,255,0.7)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grad;
      g.beginPath();
      g.arc(32, 32, 32, 0, Math.PI * 2);
      g.fill();
      const tex = new THREE.Texture(c);
      tex.needsUpdate = true;
      return tex;
    })();

    // mostly silver-blue, with rare warm + spectral sparks (the dispersion signature)
    const palette = [
      new THREE.Color("#9fb3cc"),
      new THREE.Color("#9fb3cc"),
      new THREE.Color("#9fb3cc"),
      new THREE.Color("#d5b574"),
      new THREE.Color("#b79cff"),
      new THREE.Color("#7fb6ff"),
      new THREE.Color("#ff9ed2")
    ];

    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 36;
      positions[i3 + 1] = (Math.random() - 0.5) * 24;
      positions[i3 + 2] = (Math.random() - 0.5) * 22;
      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: isMobile ? 0.10 : 0.085,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let mx = 0, my = 0, tmx = 0, tmy = 0;
    window.addEventListener("pointermove", (e) => {
      tmx = (e.clientX / window.innerWidth - 0.5);
      tmy = (e.clientY / window.innerHeight - 0.5);
    });

    let scrollY = 0;
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY || window.pageYOffset;
    }, { passive: true });

    const clock = new THREE.Clock();
    function render() {
      const t = clock.getElapsedTime();
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;
      points.rotation.y = t * 0.02 + mx * 0.4;
      points.rotation.x = my * 0.25;
      points.position.y = Math.sin(t * 0.15) * 0.4;
      camera.position.y = -(scrollY / window.innerHeight) * 1.2;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    if (!reduceMotion) { render(); } else { renderer.render(scene, camera); }

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  /* ---- Custom cursor (desktop only) ---- */
  const dot = document.getElementById("cursorDot");
  if (dot && window.matchMedia("(hover: hover)").matches) {
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2, dx = cx, dy = cy;
    window.addEventListener("pointermove", (e) => {
      cx = e.clientX; cy = e.clientY;
      dot.classList.add("is-on");
    });
    document.querySelectorAll("a, button, [data-magnetic], .index-item").forEach((el) => {
      el.addEventListener("pointerenter", () => dot.classList.add("is-hover"));
      el.addEventListener("pointerleave", () => dot.classList.remove("is-hover"));
    });
    (function loop() {
      dx += (cx - dx) * 0.18;
      dy += (cy - dy) * 0.18;
      dot.style.transform = "translate(" + dx + "px, " + dy + "px) translate(-50%, -50%)";
      requestAnimationFrame(loop);
    })();
  }
})();


    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="atmosphere"></canvas>
<canvas id="webgl"></canvas>
<div className="cursor-dot" id="cursorDot"></div>
<div id="projection-glow"></div>
<div id="scrim"></div>
<div id="grain"></div>
<div id="progress"></div>
<div id="preloader">
<div className="pre-count" id="preCount">0</div>
<div className="pre-label">Opening<br/>Exhibition</div>
<div className="pre-bar"><span id="preBar"></span></div>
</div>
<nav className="nav">
<a className="logo" href="#hero">Matter <span>in Motion</span></a>
<div className="nav-links">
<a href="#exhibition">Exhibition</a>
<a href="#rooms">Rooms</a>
<a href="#program">Program</a>
<a className="nav-ticket" href="#visit">Reserve Tickets</a>
</div>
</nav>
<div id="index">
<div className="index-item is-active" data-target="hero">
<span className="index-label">Arrival</span>
<span className="index-line"></span>
</div>
<div className="index-item" data-target="exhibition">
<span className="index-label">Statement</span>
<span className="index-line"></span>
</div>
<div className="index-item" data-target="rooms">
<span className="index-label">Rooms</span>
<span className="index-line"></span>
</div>
<div className="index-item" data-target="installation">
<span className="index-label">Installation</span>
<span className="index-line"></span>
</div>
<div className="index-item" data-target="visit">
<span className="index-label">Visit</span>
<span className="index-line"></span>
</div>
</div>
<div className="index-item" data-target="program">
<span className="index-label">Program</span>
<span className="index-line"></span>
</div>
<div className="index-item" data-target="manifesto">
<span className="index-label">Manifesto</span>
<span className="index-line"></span>
</div>
<div className="index-item" data-target="final">
<span className="index-label">Final</span>
<span className="index-line"></span>
</div>
<main>
<section className="section hero" data-index="Arrival" id="hero">
<div className="hero-frame">
<span className="corner tl"></span>
<span className="corner tr"></span>
<span className="corner bl"></span>
<span className="corner br"></span>
</div>
<div className="wrap hero-grid">
<div className="hero-center">
<div className="eyebrow reveal">Opening Exhibition · Immersive Wing</div>
<h1 className="hero-title">
<span className="mask"><span>Matter</span></span>
<span className="mask"><span><em>in Motion</em></span></span>
</h1>
<p className="hero-copy reveal">
          An exhibition of <strong>living surfaces</strong>, shifting light, and digital matter in quiet motion.
        </p>
<div className="hero-actions reveal">
<a className="btn btn-primary" data-magnetic="" href="#visit"><span>Reserve Tickets</span></a>
<a className="btn btn-secondary" data-magnetic="" href="#rooms"><span>Explore the Rooms</span></a>
</div>
</div>
<div className="hero-meta reveal">
<div className="meta-block">
<div className="meta-label">Dates</div>
<div className="meta-value">May 18 — September 14<br/>Evening entries available</div>
</div>
<div className="scroll-cue">
<span></span>
          Begin the walk
        </div>
<div className="meta-block right">
<div className="meta-label">Location</div>
<div className="meta-value">Gallery 03 · Immersive Wing<br/>Montréal Contemporary Arts Center</div>
</div>
</div>
</div>
</section>
<section className="section opening-statement" data-index="Statement" id="exhibition">
<div className="statement-sticky">
<div className="wrap statement-wrap">
<div className="statement-kicker reveal">Curatorial Statement</div>
<div className="statement-lines" data-statement-lines="">
<div className="statement-line">
<span className="muted">What if an image</span>
</div>
<div className="statement-line">
            was never still?
          </div>
<div className="statement-line">
<span className="muted">What if light could</span>
</div>
<div className="statement-line">
<em>remember movement?</em>
</div>
</div>
<div className="statement-note reveal">
          Matter in Motion studies the space between image and presence — where light becomes physical, memory becomes
          visible, and the viewer becomes part of the work.
        </div>
</div>
</div>
</section>
<section className="section rooms-section" data-index="Rooms" id="rooms">
<div className="rooms-sticky">
<div className="rooms-head">
<div className="wrap rooms-head-inner">
<div>
<div className="eyebrow">Exhibition Rooms</div>
<h2>Six rooms of<br/><em>living light.</em></h2>
</div>
<p>
          Move through a sequence of installations where projection, sensor input,
          sound, and memory systems turn the visitor into part of the work.
        </p>
</div>
</div>
<div className="rooms-track" id="roomsTrack">
<article className="room-card">
<div className="room-number">01</div>
<div className="room-visual surface"></div>
<div className="room-content">
<div className="room-label">The Surface</div>
<h3>Light behaves like material.</h3>
<p>
            A field of projected particles reacts to proximity, forming quiet waves
            across the floor and walls.
          </p>
<div className="room-meta">
<span>Reactive projection</span>
<span>8 min cycle</span>
</div>
</div>
</article>
<article className="room-card">
<div className="room-number">02</div>
<div className="room-visual body"></div>
<div className="room-content">
<div className="room-label">The Body</div>
<h3>Your shadow becomes an instrument.</h3>
<p>
            Motion-tracked silhouettes stretch, dissolve, and return as delayed
            traces of movement.
          </p>
<div className="room-meta">
<span>Body tracking</span>
<span>Live response</span>
</div>
</div>
</article>
<article className="room-card">
<div className="room-number">03</div>
<div className="room-visual signal"></div>
<div className="room-content">
<div className="room-label">The Signal</div>
<h3>Invisible inputs become visible.</h3>
<p>
            Environmental data is translated into subtle pulses of light, rhythm,
            and spatial distortion.
          </p>
<div className="room-meta">
<span>Data sculpture</span>
<span>Generative system</span>
</div>
</div>
</article>
<article className="room-card">
<div className="room-number">04</div>
<div className="room-visual archive"></div>
<div className="room-content">
<div className="room-label">The Archive</div>
<h3>The room remembers previous visitors.</h3>
<p>
            Accumulated gestures are stored as faint luminous residue, slowly
            rewriting the atmosphere throughout the day.
          </p>
<div className="room-meta">
<span>Memory layer</span>
<span>Evolving archive</span>
</div>
</div>
</article>
<article className="room-card">
<div className="room-number">05</div>
<div className="room-visual chamber"></div>
<div className="room-content">
<div className="room-label">The Chamber</div>
<h3>Sound presses against the walls.</h3>
<p>
            Low frequencies move through haze and projection, creating a slow
            atmospheric composition.
          </p>
<div className="room-meta">
<span>Sound reactive</span>
<span>Spatial audio</span>
</div>
</div>
</article>
<article className="room-card final">
<div className="room-number">06</div>
<div className="room-visual exit"></div>
<div className="room-content">
<div className="room-label">The Exit</div>
<h3>A final image follows you out.</h3>
<p>
            The visitor leaves with a unique generated still, composed from the
            movement patterns gathered during the exhibition.
          </p>
<div className="room-meta">
<span>Generated keepsake</span>
<span>Personal output</span>
</div>
</div>
</article>
</div>
<div className="rooms-progress">
<span id="roomsProgress"></span>
</div>
</div>
</section>
<section className="section featured-installation" data-index="Installation" id="installation">
<div className="wrap">
<div className="featured-head">
<div>
<div className="eyebrow reveal">Featured Installation</div>
<h2 className="featured-title reveal">
          A room that keeps<br/>
<em>its own memory.</em>
</h2>
</div>
<p className="featured-intro reveal">
        The central installation records the movement of visitors as faint traces of light,
        layering each gesture into a slowly evolving field.
      </p>
</div>
<div className="installation-stage">
<div className="installation-window reveal">
<div className="window-top">
<div className="window-dots">
<span></span>
<span></span>
<span></span>
</div>
<div className="window-label">Gallery 03 · Memory Field</div>
</div>
<div className="installation-visual">
<div className="memory-field">
<span className="trace trace-1"></span>
<span className="trace trace-2"></span>
<span className="trace trace-3"></span>
<span className="trace trace-4"></span>
<span className="trace trace-5"></span>
<span className="trace trace-6"></span>
</div>
<div className="installation-grid"></div>
<div className="installation-mark">
            Memory<br/>Field
          </div>
<div className="installation-hud">
<span>Live installation · 11 min cycle</span>
<span>Sensor input active</span>
</div>
</div>
</div>
<div className="installation-annotation annotation-artist reveal">
<div className="annotation-card">
<div className="annotation-label">Artist</div>
<div className="annotation-value">
            Lena Moreau
            <small>Generative systems, projection, spatial memory</small>
</div>
</div>
</div>
<div className="installation-annotation annotation-medium reveal">
<div className="annotation-card">
<div className="annotation-label">Medium</div>
<div className="annotation-value">
            Real-time projection
            <small>Depth sensors, soft haze, spatial audio</small>
</div>
</div>
</div>
<div className="installation-annotation annotation-room reveal">
<div className="annotation-card">
<div className="annotation-label">Room</div>
<div className="annotation-value">
            Gallery 03
            <small>Immersive Wing · limited evening capacity</small>
</div>
</div>
</div>
</div>
<div className="installation-details reveal">
<div>
<span className="detail-number">11</span>
<span className="detail-label">Minute continuous cycle</span>
</div>
<div>
<span className="detail-number">04</span>
<span className="detail-label">Projection surfaces</span>
</div>
<div>
<span className="detail-number">360°</span>
<span className="detail-label">Spatial sound field</span>
</div>
</div>
</div>
</section>
<section className="section visit-section" data-index="Visit" id="visit">
<div className="visit-sticky">
<div className="wrap visit-grid">
<div className="visit-copy">
<div className="eyebrow reveal">Plan Your Visit</div>
<h2 className="visit-title reveal">
          Enter slowly.<br/>
          Stay with the <em>light.</em>
</h2>
<p className="visit-text reveal">
          Matter in Motion is designed as a timed-entry exhibition. Each visit begins
          in small groups, allowing the rooms to respond quietly to movement, sound,
          and presence.
        </p>
<div className="visit-actions reveal">
<a className="btn btn-primary" data-magnetic="" href="#"><span>Reserve Tickets</span></a>
<a className="btn btn-secondary" data-magnetic="" href="#program"><span>View Program</span></a>
</div>
</div>
<div className="ticket-card reveal">
<div className="ticket-top">
<div>
<div className="ticket-label">Exhibition Pass</div>
<h3>Matter in Motion</h3>
</div>
<div className="ticket-price">$24</div>
</div>
<div className="ticket-divider"></div>
<div className="ticket-row">
<span>Dates</span>
<strong>May 18 — September 14</strong>
</div>
<div className="ticket-row">
<span>Hours</span>
<strong>Wed — Sun · 11:00 — 21:00</strong>
</div>
<div className="ticket-row">
<span>Location</span>
<strong>Gallery 03 · Immersive Wing</strong>
</div>
<div className="ticket-row">
<span>Entry</span>
<strong>Timed groups · 30 visitors</strong>
</div>
<div className="ticket-divider"></div>
<div className="ticket-slots">
<button className="slot is-active" type="button">
<span>Morning</span>
<strong>11:00</strong>
</button>
<button className="slot" type="button">
<span>Afternoon</span>
<strong>14:30</strong>
</button>
<button className="slot" type="button">
<span>Evening</span>
<strong>19:00</strong>
</button>
</div>
<a className="ticket-button" href="#">
          Continue to reservation
          <span>→</span>
</a>
<div className="ticket-note">
          Evening entries include extended access to the sound chamber and artist notes.
        </div>
</div>
</div>
</div>
</section>
<section className="section program-section" data-index="Program" id="program">
<div className="wrap">
<div className="program-head">
<div>
<div className="program-eyebrow reveal">Public Program</div>
<h2 className="program-title reveal">
          Talks, night sessions,<br/>
          and guided walks.
        </h2>
</div>
<p className="program-intro reveal">
        A series of artist conversations, extended evening visits, and small-group
        tours designed to deepen the experience beyond the exhibition rooms.
      </p>
</div>
<div className="program-grid">
<article className="program-feature reveal">
<div className="program-feature-image">
<div className="program-orbit">
<span></span>
<span></span>
<span></span>
</div>
</div>
<div className="program-feature-content">
<div className="program-date">June 02 · 18:30</div>
<h3>Artist Talk: Memory as Material</h3>
<p>
            Lena Moreau discusses how generative systems can transform visitor
            movement into evolving visual memory.
          </p>
<a className="program-link" href="#">
            Reserve a seat
            <span>→</span>
</a>
</div>
</article>
<div className="program-list">
<article className="program-item reveal">
<div className="program-item-date">
<span>Every Friday</span>
<strong>20:00</strong>
</div>
<div className="program-item-copy">
<h3>Night Session</h3>
<p>
              Extended access to Gallery 03, including the sound chamber at full scale.
            </p>
</div>
<a href="#">Details</a>
</article>
<article className="program-item reveal">
<div className="program-item-date">
<span>Sat + Sun</span>
<strong>12:30</strong>
</div>
<div className="program-item-copy">
<h3>Guided Walk</h3>
<p>
              A small-group route through the six rooms with notes from the curatorial team.
            </p>
</div>
<a href="#">Details</a>
</article>
<article className="program-item reveal">
<div className="program-item-date">
<span>Wednesday</span>
<strong>17:00</strong>
</div>
<div className="program-item-copy">
<h3>Student Evening</h3>
<p>
              Reduced entry for students and emerging artists during late gallery hours.
            </p>
</div>
<a href="#">Details</a>
</article>
<article className="program-item reveal">
<div className="program-item-date">
<span>July 14</span>
<strong>19:30</strong>
</div>
<div className="program-item-copy">
<h3>Sound Chamber Performance</h3>
<p>
              A live spatial audio performance inside Room 05, composed for projection haze.
            </p>
</div>
<a href="#">Details</a>
</article>
</div>
</div>
</div>
</section>
<section className="section manifesto-section" data-index="Manifesto" id="manifesto">
<div className="wrap manifesto-wrap">
<div className="manifesto-kicker reveal">Curatorial Note</div>
<div className="manifesto-lines">
<div className="manifesto-line reveal">
<span>Images are no longer</span>
<em>fixed objects.</em>
</div>
<div className="manifesto-line reveal">
<span>They listen, shift,</span>
<em>and remember.</em>
</div>
<div className="manifesto-line reveal">
<span>In this exhibition,</span>
<em>light becomes physical.</em>
</div>
<div className="manifesto-line reveal">
<span>The viewer does not simply watch.</span>
<em>The viewer completes the work.</em>
</div>
</div>
<div className="manifesto-credit reveal">
<span>Curated by</span>
<strong>Montréal Contemporary Arts Center</strong>
</div>
</div>
</section>
<section className="section final-cta" data-index="Final" id="final">
<div className="wrap final-wrap">
<div className="final-kicker reveal">Timed Entry Now Open</div>
<h2 className="final-title">
<span className="mask"><span>Reserve your</span></span>
<span className="mask"><span><em>place in the light.</em></span></span>
</h2>
<p className="final-copy reveal">
      Matter in Motion runs from May 18 to September 14 at the Montréal Contemporary Arts Center.
      Evening entries are limited to preserve the quiet atmosphere of the installation rooms.
    </p>
<div className="final-actions reveal">
<a className="btn btn-primary" data-magnetic="" href="#visit"><span>Reserve Tickets</span></a>
<a className="btn btn-secondary" data-magnetic="" href="#program"><span>View Program</span></a>
</div>
<div className="final-info reveal">
<div>
<span>Dates</span>
<strong>May 18 — September 14</strong>
</div>
<div>
<span>Location</span>
<strong>Gallery 03 · Immersive Wing</strong>
</div>
<div>
<span>Hours</span>
<strong>Wed — Sun · 11:00 — 21:00</strong>
</div>
</div>
</div>
</section>
<footer className="site-footer">
<div className="wrap footer-wrap">
<div className="footer-top">
<a className="footer-brand" href="#hero">
        Matter<br/>
<em>in Motion</em>
</a>
<div className="footer-columns">
<div className="footer-col">
<h4>Exhibition</h4>
<a href="#exhibition">Statement</a>
<a href="#rooms">Rooms</a>
<a href="#installation">Installation</a>
<a href="#manifesto">Curatorial Note</a>
</div>
<div className="footer-col">
<h4>Visit</h4>
<a href="#visit">Tickets</a>
<a href="#program">Program</a>
<a href="#">Accessibility</a>
<a href="#">Directions</a>
</div>
<div className="footer-col">
<h4>Museum</h4>
<a href="#">Membership</a>
<a href="#">Press</a>
<a href="#">Education</a>
<a href="#">Contact</a>
</div>
</div>
</div>
<div className="footer-bottom">
<span>© 2026 Montréal Contemporary Arts Center</span>
<span>Gallery 03 · Immersive Wing</span>
</div>
</div>
</footer>
</main>







    </>
  );
}
