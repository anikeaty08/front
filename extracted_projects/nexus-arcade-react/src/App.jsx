import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    // Matter.js & GSAP code initialized inside useEffect hook
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



    /* =====================================================
     01. GSAP SETUP
     ===================================================== */

  gsap.registerPlugin(ScrollTrigger);

  /* =====================================================
     01b. SCROLL REVEAL SYSTEM (GSAP + ScrollTrigger)
     - Initial states are set via gsap.set() so the page
       stays fully visible if JS fails / reduced motion.
     - Headlines that double as Matter.js colliders are
       revealed with clip-path + opacity only, because
       clip-path never changes getBoundingClientRect(),
       so physics collider measurement stays accurate.
     - Hero title animates the INNER span; the outer
       .word-collider (the measured element) never moves.
     - Inline "transition: none" is set during reveals and
       cleared on complete so CSS hover transitions don't
       fight the tweens.
     ===================================================== */

  const CLIP_HIDDEN = "inset(0% 0% 100% 0%)";
  const CLIP_SHOWN = "inset(0% 0% 0% 0%)";

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {

    /* ---------- Helper: prime + play a section ---------- */

    function buildReveal(trigger, steps, start = "top 80%") {
      steps.forEach((step) => {
        gsap.set(step.targets, { transition: "none", autoAlpha: 0, ...step.from });
      });

      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "power3.out" },
        scrollTrigger: {
          trigger,
          start,
          toggleActions: "play none none none"
        },
        onComplete: () => {
          steps.forEach((step) => {
            gsap.set(step.targets, { clearProps: "transition" });
          });
        }
      });

      steps.forEach((step) => {
        tl.to(step.targets, { autoAlpha: 1, ...step.to }, step.at);
      });

      return tl;
    }

    /* ---------- Header drops in on load ---------- */

    gsap.set(".nexus-header", { xPercent: -50, x: 0, y: -28, autoAlpha: 0 });
    gsap.to(".nexus-header", {
      y: 0,
      autoAlpha: 1,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.15
    });

    /* ---------- Hero: word cascade (collider-safe) ---------- */

    const heroWords = gsap.utils.toArray("#hero-title .word-collider > span");

    gsap.set(heroWords, { yPercent: 80, autoAlpha: 0 });
    gsap.to(heroWords, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 1.0,
      ease: "power4.out",
      stagger: 0.15,
      delay: 0.2,
      onComplete: () => {
        setTimeout(() => {
          createWordColliders();
          releaseDelayedWave();
        }, 120);
      }
    });

    gsap.set(["#hero-kicker", "#hero-desc", "#hero-cta", "#hero-stats"], {
      y: 22,
      autoAlpha: 0
    });
    gsap.to(["#hero-kicker", "#hero-desc", "#hero-cta", "#hero-stats"], {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.16,
      delay: 0.55
    });

    gsap.set(".nexus-core-wrap", { autoAlpha: 0, y: 36, scale: 0.97 });
    gsap.to(".nexus-core-wrap", {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 1.1,
      ease: "power3.out",
      delay: 0.7
    });

    /* Subtle parallax drift on the core visual as you scroll away */
    gsap.to(".nexus-core-wrap", {
      yPercent: -9,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    /* ---------- Section 02 — Conversion Chamber ---------- */

    buildReveal("#chaos-to-form", [
      { targets: ".nexus-s2-corner",
        from: { scale: 0 },
        to: { scale: 1, duration: 0.5, ease: "back.out(2)", stagger: 0.07 },
        at: 0 },
      { targets: "#chaos-to-form .nexus-s2-title .line-one, #chaos-to-form .nexus-s2-title .line-two",
        from: { clipPath: CLIP_HIDDEN },
        to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 },
        at: 0.1 },
      { targets: ".nexus-s2-intro",
        from: { y: 24 },
        to: { y: 0 },
        at: 0.4 },
      { targets: ".nexus-s2-rail-item",
        from: { x: -34 },
        to: { x: 0, stagger: 0.13 },
        at: 0.55 },
      { targets: ".nexus-s2-machine",
        from: { x: 46, scale: 0.98 },
        to: { x: 0, scale: 1, duration: 0.9 },
        at: 0.6 },
      { targets: "#chaos-to-form .nexus-s2-node",
        from: { scale: 0.5 },
        to: { scale: 1, duration: 0.5, ease: "back.out(1.8)", stagger: 0.08 },
        at: 1.1 },
      { targets: [".nexus-s2-info-card", ".nexus-s2-note"],
        from: { y: 26 },
        to: { y: 0, stagger: 0.14 },
        at: 0.95 }
    ]);

    /* ---------- Section 03 — Game Modes ---------- */

    buildReveal("#game-modes", [
      { targets: ".nexus-s3-eyebrow",
        from: { y: 18 },
        to: { y: 0, duration: 0.55 },
        at: 0 },
      { targets: "#game-modes .nexus-s3-title .line-one, #game-modes .nexus-s3-title .line-two",
        from: { clipPath: CLIP_HIDDEN },
        to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 },
        at: 0.1 },
      { targets: ".nexus-s3-copy",
        from: { y: 24 },
        to: { y: 0 },
        at: 0.4 },
      { targets: ".nexus-s3-card",
        from: { y: 52, scale: 0.96 },
        to: { y: 0, scale: 1, duration: 0.8, stagger: 0.12 },
        at: 0.5 }
    ]);

    /* ---------- Section 04 — Collision Engine ---------- */

    buildReveal("#collision-engine", [
      { targets: ".nexus-s4-eyebrow",
        from: { y: 18 },
        to: { y: 0, duration: 0.55 },
        at: 0 },
      { targets: "#collision-engine .nexus-s4-title .line-one, #collision-engine .nexus-s4-title .line-two",
        from: { clipPath: CLIP_HIDDEN },
        to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 },
        at: 0.1 },
      { targets: ".nexus-s4-copy",
        from: { y: 24 },
        to: { y: 0 },
        at: 0.4 },
      { targets: ".nexus-s4-process-card",
        from: { y: 42 },
        to: { y: 0, stagger: 0.13 },
        at: 0.55 },
      { targets: ".nexus-s4-machine",
        from: { y: 48, scale: 0.98 },
        to: { y: 0, scale: 1, duration: 0.9 },
        at: 0.65 },
      { targets: ".nexus-s4-console",
        from: { y: 26 },
        to: { y: 0 },
        at: 1.05 }
    ]);

    /* ---------- Section 05 — High Scores ---------- */

    buildReveal("#high-scores", [
      { targets: ".nexus-s5-eyebrow",
        from: { y: 18 },
        to: { y: 0, duration: 0.55 },
        at: 0 },
      { targets: "#high-scores .nexus-s5-title .line-one, #high-scores .nexus-s5-title .line-two",
        from: { clipPath: CLIP_HIDDEN },
        to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 },
        at: 0.1 },
      { targets: ".nexus-s5-copy",
        from: { y: 24 },
        to: { y: 0 },
        at: 0.35 },
      { targets: ".nexus-s5-tags",
        from: { y: 18 },
        to: { y: 0, duration: 0.55 },
        at: 0.5 },
      { targets: ".nexus-s5-metric-card",
        from: { y: 44, scale: 0.97 },
        to: { y: 0, scale: 1, stagger: 0.1 },
        at: 0.55 },
      { targets: ".nexus-s5-board-grid > *",
        from: { y: 40 },
        to: { y: 0, duration: 0.8, stagger: 0.15 },
        at: 0.8 },
      { targets: ".nexus-s5-row",
        from: { x: -26 },
        to: { x: 0, duration: 0.55, stagger: 0.09 },
        at: 1.05 }
    ]);

    /* ---------- Section 06 — Cheat Codes ---------- */

    buildReveal("#cheat-codes", [
      { targets: ".nexus-s6-eyebrow",
        from: { y: 18 },
        to: { y: 0, duration: 0.55 },
        at: 0 },
      { targets: "#cheat-codes .nexus-s6-title .line-one, #cheat-codes .nexus-s6-title .line-two",
        from: { clipPath: CLIP_HIDDEN },
        to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 },
        at: 0.1 },
      { targets: ".nexus-s6-copy",
        from: { y: 24 },
        to: { y: 0 },
        at: 0.35 },
      { targets: ".nexus-s6-command",
        from: { y: 28, scale: 0.98 },
        to: { y: 0, scale: 1 },
        at: 0.5 },
      { targets: ".nexus-s6-card",
        from: { y: 46, scale: 0.97 },
        to: { y: 0, scale: 1, stagger: 0.11 },
        at: 0.65 },
      { targets: ".nexus-s6-export",
        from: { y: 36 },
        to: { y: 0, duration: 0.8 },
        at: 1.0 }
    ]);

    /* ---------- Section 07 — Join the Guild ---------- */

    buildReveal("#join-the-guild", [
      { targets: ".nexus-s7-core",
        from: { scale: 0.4 },
        to: { scale: 1, duration: 0.9, ease: "back.out(1.6)" },
        at: 0 },
      { targets: ".nexus-s7-eyebrow",
        from: { y: 18 },
        to: { y: 0, duration: 0.55 },
        at: 0.35 },
      { targets: "#join-the-guild .nexus-s7-title .line-one, #join-the-guild .nexus-s7-title .line-two",
        from: { clipPath: CLIP_HIDDEN },
        to: { clipPath: CLIP_SHOWN, duration: 0.85, stagger: 0.14 },
        at: 0.45 },
      { targets: ".nexus-s7-copy",
        from: { y: 24 },
        to: { y: 0 },
        at: 0.75 },
      { targets: ".nexus-s7-actions",
        from: { y: 26 },
        to: { y: 0 },
        at: 0.9 },
      { targets: ".nexus-s7-status-item",
        from: { y: 30 },
        to: { y: 0, duration: 0.6, stagger: 0.1 },
        at: 1.05 }
    ], "top 75%");

    /* ---------- Footer ---------- */

    buildReveal(".nexus-footer", [
      { targets: ".nexus-footer-shell",
        from: { y: 34 },
        to: { y: 0, duration: 0.85 },
        at: 0 }
    ], "top 92%");

  });


  /* =====================================================
     02. MATTER.JS GLOBAL SETUP
     ===================================================== */

  const canvas = document.getElementById("pixel-canvas");
  const physicsLayer = document.getElementById("physics-layer");
  const ctx = canvas.getContext("2d", { alpha: false });

  const {
    Engine,
    World,
    Bodies,
    Body,
    Runner,
    Sleeping
  } = Matter;

  let width;
  let height;
  let pageHeight;
  let engine;
  let world;
  let runner;

  const blockSize = 30;
  const blocks = [];
  const boundaries = [];
  const wordColliderBodies = [];
  const delayedBodies = [];
  const sectionCatcherBodies = [];

  let physicsActive = true;
  let settleTimer = null;
  let started = false;
  let wordCollidersCreated = false;
  let delayedWaveReleased = false;
  let sceneStartTime = performance.now();

  let currentStage = "hero";
  let section2Activated = false;
  let section3Activated = false;
  let section4Activated = false;
  let section5Activated = false;
  let section6Activated = false;
  let section7Activated = false;

  const palette = [
    {
      name: "cyan",
      r: 0,
      g: 240,
      b: 255,
      glow: "rgba(0,240,255,0.7)",
      maxAlpha: 0.95
    },
    {
      name: "pink",
      r: 255,
      g: 0,
      b: 127,
      glow: "rgba(255,0,127,0.7)",
      maxAlpha: 0.95
    },
    {
      name: "purple",
      r: 124,
      g: 60,
      b: 255,
      glow: "rgba(124,60,255,0.55)",
      maxAlpha: 0.76
    },
    {
      name: "blue",
      r: 46,
      g: 93,
      b: 255,
      glow: "rgba(46,93,255,0.55)",
      maxAlpha: 0.76
    },
    {
      name: "coin",
      r: 255,
      g: 209,
      b: 102,
      glow: "rgba(255,209,102,0.45)",
      maxAlpha: 0.64
    }
  ];


  /* =====================================================
     03. SIZE / CANVAS HELPERS
     ===================================================== */

  function getPageHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    pageHeight = getPageHeight();

    canvas.width = width;
    canvas.height = pageHeight;

    physicsLayer.style.height = `${pageHeight}px`;

    if (started) {
      resetPhysicsScene();
      ScrollTrigger.refresh();
    }
  }


  /* =====================================================
     04. PHYSICS CREATION HELPERS
     ===================================================== */

  function initPhysics() {
    engine = Engine.create({
      enableSleeping: true
    });

    world = engine.world;
    world.gravity.x = 0;
    world.gravity.y = 1.15;

    runner = Runner.create();
    Runner.run(runner, engine);
  }

  function createBoundary(x, y, w, h, options = {}) {
    const body = Bodies.rectangle(x, y, w, h, {
      isStatic: true,
      friction: 0.8,
      restitution: 0.1,
      ...options
    });

    boundaries.push(body);
    World.add(world, body);

    return body;
  }

  function createPixelBody(x, y, size, color, index, options = {}) {
    const body = Bodies.rectangle(x, y, size, size, {
      restitution: 0.26,
      friction: 0.74,
      frictionStatic: 0.85,
      frictionAir: 0.012,
      density: 0.0035,
      chamfer: {
        radius: 1
      },
      sleepThreshold: 42,
      ...options
    });

    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.18);

    Body.setVelocity(body, {
      x: (Math.random() - 0.5) * 2.8,
      y: Math.random() * 1.8
    });

    return {
      body,
      size,
      color,
      index,
      alpha: Math.random() * color.maxAlpha,
      targetAlpha: Math.random() * color.maxAlpha,
      maxAlpha: color.maxAlpha,
      flickerSpeed: Math.random() * 0.035 + 0.012,
      blinkOffset: Math.random() * Math.PI * 2,
      settled: false
    };
  }

  function buildPhysicsStage() {
    boundaries.length = 0;

    createBoundary(width / 2, height + 40, width + 400, 80, {
      label: "hero-floor"
    });

    createBoundary(-80, pageHeight / 2, 120, pageHeight * 2, {
      label: "left-wall"
    });

    createBoundary(width + 80, pageHeight / 2, 120, pageHeight * 2, {
      label: "right-wall"
    });

    const ramp = Bodies.rectangle(width * 0.72, height * 0.88, width * 0.82, 34, {
      isStatic: true,
      angle: -0.28,
      friction: 0.92,
      restitution: 0.05,
      label: "hero-ramp"
    });

    boundaries.push(ramp);
    World.add(world, ramp);
  }

  function spawnFallingPixels() {
    blocks.length = 0;
    delayedBodies.length = 0;

    const isMobile = width < 768;
    const count = isMobile ? 70 : 130;
    const firstWaveCount = Math.floor(count * 0.64);

    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const isDelayed = i >= firstWaveCount;

      const spawnMinX = isMobile
        ? width * 0.12
        : isDelayed
          ? width * 0.06
          : width * 0.48;

      const spawnMaxX = isMobile
        ? width * 0.95
        : isDelayed
          ? width * 0.58
          : width * 0.98;

      const x = spawnMinX + Math.random() * (spawnMaxX - spawnMinX);

      const y = isDelayed
        ? -160 - Math.random() * 360
        : -80 - Math.random() * height * 0.9 - i * 1.4;

      const sizeVariation = Math.random();

      const size =
        sizeVariation > 0.88 ? blockSize * 1.35 :
        sizeVariation > 0.62 ? blockSize * 1.1 :
        blockSize;

      const block = createPixelBody(x, y, size, color, i, {
        isStatic: isDelayed
      });

      blocks.push(block);

      if (isDelayed) {
        delayedBodies.push(block.body);
      }

      World.add(world, block.body);
    }
  }


  /* =====================================================
     05. HERO WORD COLLIDERS
     ===================================================== */

  function createWordColliders() {
    if (!world || wordCollidersCreated) return;

    if (wordColliderBodies.length) {
      World.remove(world, wordColliderBodies);
      wordColliderBodies.length = 0;
    }

    const wordEls = document.querySelectorAll(".word-collider");

    wordEls.forEach((el, index) => {
      const rect = el.getBoundingClientRect();

      if (rect.width < 8 || rect.height < 8) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + window.scrollY + rect.height / 2;

      const colliderWidth = rect.width * 0.88;
      const colliderHeight = rect.height * 0.68;

      const body = Bodies.rectangle(centerX, centerY, colliderWidth, colliderHeight, {
        isStatic: true,
        restitution: 0.34,
        friction: 0.18,
        frictionStatic: 0.2,
        label: `word-collider-${index}`,
        render: {
          visible: false
        }
      });

      wordColliderBodies.push(body);
    });

    World.add(world, wordColliderBodies);
    wordCollidersCreated = true;

    setTimeout(() => {
      if (world && wordColliderBodies.length) {
        World.remove(world, wordColliderBodies);
        wordColliderBodies.length = 0;
        wordCollidersCreated = false;
      }
    }, 5200);
  }

  function releaseDelayedWave() {
    if (delayedWaveReleased) return;

    delayedWaveReleased = true;

    delayedBodies.forEach((body, index) => {
      setTimeout(() => {
        Body.setStatic(body, false);

        Body.setVelocity(body, {
          x: 0.8 + Math.random() * 2.4,
          y: 1.5 + Math.random() * 2.2
        });

        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.22);
        Sleeping.set(body, false);
      }, index * 28);
    });
  }


  /* =====================================================
     06. SECTION 2 CATCHERS
     ===================================================== */

  function createSection2Catchers() {
  const target = document.getElementById("section-2-catcher");
  if (!target || !world) return;

  if (sectionCatcherBodies.length) {
    World.remove(world, sectionCatcherBodies);
    sectionCatcherBodies.length = 0;
  }

  const sectionRect = target.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionLeft = sectionRect.left + window.scrollX;
  const sectionRight = sectionRect.right + window.scrollX;
  const sectionCenterX = sectionLeft + sectionRect.width / 2;

  /*
    Side walls only.
    No big top platform, because you want blocks to fall INTO the section,
    not sit on the top edge of the container.
  */
  const leftWall = Bodies.rectangle(
    sectionLeft + 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-2-left-wall"
    }
  );

  const rightWall = Bodies.rectangle(
    sectionRight - 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-2-right-wall"
    }
  );

  sectionCatcherBodies.push(leftWall, rightWall);

  const colliderTargets = target.querySelectorAll("[data-s2-collider]");

  colliderTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.width < 16 || rect.height < 10) return;

    const type = el.getAttribute("data-s2-collider");

    let centerX = rect.left + window.scrollX + rect.width / 2;
    let centerY = rect.top + window.scrollY + rect.height / 2;

    let bodyWidth = rect.width * 0.92;
    let bodyHeight = Math.max(14, rect.height * 0.30);
    let angle = 0;

    if (type === "headline") {
      bodyWidth = rect.width * 0.92;
      bodyHeight = Math.max(18, rect.height * 0.22);
      centerY = rect.top + window.scrollY + rect.height * 0.30;
    }

    if (type === "subtitle") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = -0.012;
    }

    if (type === "rail-card") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(22, rect.height * 0.26);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = 0.018;
    }

    if (type === "rail-index") {
      bodyWidth = rect.width * 1.15;
      bodyHeight = Math.max(18, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
    }

    if (type === "rail-title") {
      bodyWidth = rect.width * 1.04;
      bodyHeight = Math.max(16, rect.height * 0.48);
      centerY = rect.top + window.scrollY + rect.height * 0.58;
    }

    if (type === "info-card" || type === "note-card") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(22, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.38;
      angle = type === "info-card" ? -0.018 : 0.018;
    }

    if (type === "machine") {
      bodyWidth = rect.width * 0.90;
      bodyHeight = 26;
      centerY = rect.top + window.scrollY + rect.height * 0.18;
      angle = -0.014;
    }

    if (type === "machine-header") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(22, rect.height * 0.38);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
    }

    if (type === "machine-title" || type === "machine-status") {
      bodyWidth = rect.width * 0.98;
      bodyHeight = Math.max(16, rect.height * 0.46);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
    }

    if (type === "monitor") {
      bodyWidth = rect.width * 0.86;
      bodyHeight = 26;
      centerY = rect.top + window.scrollY + rect.height * 0.62;
      angle = 0.018;
    }

    if (type === "node") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(16, rect.height * 0.48);
      centerY = rect.top + window.scrollY + rect.height * 0.55;
    }

    if (type === "chamber") {
      bodyWidth = rect.width * 0.72;
      bodyHeight = Math.max(22, rect.height * 0.30);
      centerY = rect.top + window.scrollY + rect.height * 0.42;
    }

    if (type === "console") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(24, rect.height * 0.32);
      centerY = rect.top + window.scrollY + rect.height * 0.30;
    }

    if (type === "run-score") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(18, rect.height * 0.45);
      centerY = rect.top + window.scrollY + rect.height * 0.42;
    }

    const body = Bodies.rectangle(centerX, centerY, bodyWidth, bodyHeight, {
      isStatic: true,
      friction: 0.94,
      restitution: 0.05,
      angle,
      label: `section-2-${type}`
    });

    sectionCatcherBodies.push(body);
  });

  /*
    Soft fallback shelf near the lower part of the section.
    This catches leftover blocks without making them sit on top of the container.
  */
  const lowerShelf = Bodies.rectangle(
    sectionCenterX,
    sectionTop + sectionRect.height * 0.90,
    sectionRect.width * 0.86,
    30,
    {
      isStatic: true,
      friction: 0.95,
      restitution: 0.04,
      label: "section-2-lower-shelf"
    }
  );

  sectionCatcherBodies.push(lowerShelf);
  World.add(world, sectionCatcherBodies);
}

function spawnSectionBlocks(sectionId, count = 36) {
  if (!world) return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const sectionTop = rect.top + window.scrollY;
  const sectionLeft = rect.left + window.scrollX;

  for (let i = 0; i < count; i++) {
    const color = palette[Math.floor(Math.random() * palette.length)];

    const sizeRoll = Math.random();
    const size =
      sizeRoll > 0.86 ? blockSize * 1.25 :
      sizeRoll > 0.58 ? blockSize :
      blockSize * 0.82;

    const x = sectionLeft + rect.width * (0.12 + Math.random() * 0.76);
    const y = sectionTop - 180 - Math.random() * 280;

    const block = createPixelBody(x, y, size, color, blocks.length, {
      isStatic: false,
      frictionAir: 0.012
    });

    Body.setVelocity(block.body, {
      x: (Math.random() - 0.5) * 2.2,
      y: 2.4 + Math.random() * 2.8
    });

    Body.setAngularVelocity(block.body, (Math.random() - 0.5) * 0.24);

    blocks.push(block);
    World.add(world, block.body);
  }
}

  function activateSection2Physics() {
  if (section2Activated) return;

  section2Activated = true;
  currentStage = "section-2";

  createSection2Catchers();

  const removable = boundaries.filter(body =>
    body.label === "hero-floor" || body.label === "hero-ramp"
  );

  if (removable.length) {
    World.remove(world, removable);
  }

  spawnSectionBlocks("section-2-catcher", 42);
  wakeBlocks(1.8, 2.5, 3.2, 0.18);
}


  /* =====================================================
     07. SECTION 3 CATCHERS
     ===================================================== */

  function createSection3Catchers() {
  const target = document.getElementById("section-3-catcher");
  if (!target || !world) return;

  if (sectionCatcherBodies.length) {
    World.remove(world, sectionCatcherBodies);
    sectionCatcherBodies.length = 0;
  }

  const sectionRect = target.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionLeft = sectionRect.left + window.scrollX;
  const sectionRight = sectionRect.right + window.scrollX;
  const sectionCenterX = sectionLeft + sectionRect.width / 2;

  /*
    Side walls only.
    No top platform. Blocks should fall into the section and land on the content.
  */
  const leftWall = Bodies.rectangle(
    sectionLeft + 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-3-left-wall"
    }
  );

  const rightWall = Bodies.rectangle(
    sectionRight - 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-3-right-wall"
    }
  );

  sectionCatcherBodies.push(leftWall, rightWall);

  const colliderTargets = target.querySelectorAll("[data-s3-collider]");

  colliderTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.width < 16 || rect.height < 10) return;

    const type = el.getAttribute("data-s3-collider");

    let centerX = rect.left + window.scrollX + rect.width / 2;
    let centerY = rect.top + window.scrollY + rect.height / 2;

    let bodyWidth = rect.width * 0.92;
    let bodyHeight = Math.max(14, rect.height * 0.30);
    let angle = 0;

    if (type === "eyebrow") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(14, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = -0.012;
    }

    if (type === "headline") {
      bodyWidth = rect.width * 0.92;
      bodyHeight = Math.max(18, rect.height * 0.22);
      centerY = rect.top + window.scrollY + rect.height * 0.32;
    }

    if (type === "subtitle") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = 0.012;
    }

    if (type === "card") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(26, rect.height * 0.20);

      /*
        Randomize each card shelf slightly so the pile feels less mechanical.
      */
      centerY = rect.top + window.scrollY + rect.height * (0.24 + Math.random() * 0.18);
      angle = (Math.random() - 0.5) * 0.06;
    }

    if (type === "card-top") {
      bodyWidth = rect.width * 0.92;
      bodyHeight = Math.max(18, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "card-index" || type === "badge") {
      bodyWidth = rect.width * 1.08;
      bodyHeight = Math.max(16, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
    }

    if (type === "icon") {
      bodyWidth = rect.width * 0.70;
      bodyHeight = Math.max(20, rect.height * 0.32);
      centerY = rect.top + window.scrollY + rect.height * 0.58;
      angle = (Math.random() - 0.5) * 0.08;
    }

    if (type === "card-title") {
      bodyWidth = rect.width * 1.02;
      bodyHeight = Math.max(16, rect.height * 0.48);
      centerY = rect.top + window.scrollY + rect.height * 0.58;
      angle = (Math.random() - 0.5) * 0.04;
    }

    if (type === "card-copy") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.38);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "meters") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(22, rect.height * 0.24);
      centerY = rect.top + window.scrollY + rect.height * 0.40;
      angle = (Math.random() - 0.5) * 0.04;
    }

    if (type === "action") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(20, rect.height * 0.48);
      centerY = rect.top + window.scrollY + rect.height * 0.42;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "tip" || type === "rank") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(22, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.38;
      angle = type === "tip" ? -0.018 : 0.018;
    }

    const body = Bodies.rectangle(centerX, centerY, bodyWidth, bodyHeight, {
      isStatic: true,
      friction: 0.94,
      restitution: 0.05,
      angle,
      label: `section-3-${type}`
    });

    sectionCatcherBodies.push(body);
  });

  /*
    Soft fallback shelf near the bottom, only to catch leftovers.
    It should not visually feel like the main landing zone.
  */
  const lowerShelf = Bodies.rectangle(
    sectionCenterX,
    sectionTop + sectionRect.height * 0.92,
    sectionRect.width * 0.86,
    30,
    {
      isStatic: true,
      friction: 0.95,
      restitution: 0.04,
      label: "section-3-lower-shelf"
    }
  );

  sectionCatcherBodies.push(lowerShelf);
  World.add(world, sectionCatcherBodies);
}

function activateSection3Physics() {
  if (section3Activated) return;

  section3Activated = true;
  currentStage = "section-3";

  createSection3Catchers();

  if (typeof spawnSectionBlocks === "function") {
    spawnSectionBlocks("section-3-catcher", 36);
  }

  wakeBlocks(1.9, 2.4, 3.2, 0.20);
}

function createSection4Catchers() {
  const target = document.getElementById("section-4-catcher");
  if (!target || !world) return;

  if (sectionCatcherBodies.length) {
    World.remove(world, sectionCatcherBodies);
    sectionCatcherBodies.length = 0;
  }

  const sectionRect = target.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionLeft = sectionRect.left + window.scrollX;
  const sectionRight = sectionRect.right + window.scrollX;
  const sectionCenterX = sectionLeft + sectionRect.width / 2;

  const leftWall = Bodies.rectangle(
    sectionLeft + 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-4-left-wall"
    }
  );

  const rightWall = Bodies.rectangle(
    sectionRight - 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-4-right-wall"
    }
  );

  sectionCatcherBodies.push(leftWall, rightWall);

  const colliderTargets = target.querySelectorAll("[data-s4-collider]");

  colliderTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.width < 16 || rect.height < 10) return;

    const type = el.getAttribute("data-s4-collider");

    let centerX = rect.left + window.scrollX + rect.width / 2;
    let centerY = rect.top + window.scrollY + rect.height / 2;

    let bodyWidth = rect.width * 0.92;
    let bodyHeight = Math.max(14, rect.height * 0.30);
    let angle = 0;

    if (type === "eyebrow") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(14, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = -0.012;
    }

    if (type === "headline") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(18, rect.height * 0.22);
      centerY = rect.top + window.scrollY + rect.height * 0.32;
    }

    if (type === "subtitle") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = -0.012;
    }

    if (type === "process-card") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(24, rect.height * 0.28);
      centerY = rect.top + window.scrollY + rect.height * (0.34 + Math.random() * 0.16);
      angle = (Math.random() - 0.5) * 0.055;
    }

    if (type === "process-index") {
      bodyWidth = rect.width * 1.12;
      bodyHeight = Math.max(18, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
    }

    if (type === "process-title") {
      bodyWidth = rect.width * 1.02;
      bodyHeight = Math.max(16, rect.height * 0.50);
      centerY = rect.top + window.scrollY + rect.height * 0.58;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "process-copy") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.36);
      centerY = rect.top + window.scrollY + rect.height * 0.45;
      angle = (Math.random() - 0.5) * 0.03;
    }

    if (type === "machine") {
      bodyWidth = rect.width * 0.90;
      bodyHeight = 26;
      centerY = rect.top + window.scrollY + rect.height * 0.18;
      angle = -0.014;
    }

    if (type === "machine-header") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(22, rect.height * 0.40);
      centerY = rect.top + window.scrollY + rect.height * 0.48;
    }

    if (type === "status-title" || type === "status-badge") {
      bodyWidth = rect.width * 0.98;
      bodyHeight = Math.max(16, rect.height * 0.46);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
    }

    if (type === "monitor") {
      bodyWidth = rect.width * 0.86;
      bodyHeight = 26;
      centerY = rect.top + window.scrollY + rect.height * 0.62;
      angle = 0.018;
    }

    if (type === "monitor-label") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(16, rect.height * 0.50);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "core-field") {
      bodyWidth = rect.width * 0.72;
      bodyHeight = Math.max(24, rect.height * 0.26);
      centerY = rect.top + window.scrollY + rect.height * 0.42;
      angle = -0.018;
    }

    if (type === "core") {
      bodyWidth = rect.width * 0.82;
      bodyHeight = Math.max(22, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.48;
    }

    if (type === "console") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(24, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.32;
    }

    if (type === "signal") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(16, rect.height * 0.45);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
    }

    const body = Bodies.rectangle(centerX, centerY, bodyWidth, bodyHeight, {
      isStatic: true,
      friction: 0.94,
      restitution: 0.05,
      angle,
      label: `section-4-${type}`
    });

    sectionCatcherBodies.push(body);
  });

  const lowerShelf = Bodies.rectangle(
    sectionCenterX,
    sectionTop + sectionRect.height * 0.92,
    sectionRect.width * 0.86,
    30,
    {
      isStatic: true,
      friction: 0.95,
      restitution: 0.04,
      label: "section-4-lower-shelf"
    }
  );

  sectionCatcherBodies.push(lowerShelf);
  World.add(world, sectionCatcherBodies);
}

  function activateSection4Physics() {
  if (section4Activated) return;

  section4Activated = true;
  currentStage = "section-4";

  createSection4Catchers();

  if (typeof spawnSectionBlocks === "function") {
    spawnSectionBlocks("section-4-catcher", 34);
  }

  wakeBlocks(2.0, 2.5, 3.3, 0.22);
}

  /* =====================================================
   08B. SECTION 5 HIGH SCORE CATCHERS
   ===================================================== */

function createSection5Catchers() {
  const target = document.getElementById("section-5-catcher");
  if (!target || !world) return;

  if (sectionCatcherBodies.length) {
    World.remove(world, sectionCatcherBodies);
    sectionCatcherBodies.length = 0;
  }

  const sectionRect = target.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionLeft = sectionRect.left + window.scrollX;
  const sectionRight = sectionRect.right + window.scrollX;
  const sectionCenterX = sectionLeft + sectionRect.width / 2;

  /*
    Side walls only.
    No top shelf, because blocks should fall into the section
    and land on the scoreboard elements.
  */
  const leftWall = Bodies.rectangle(
    sectionLeft + 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-5-left-wall"
    }
  );

  const rightWall = Bodies.rectangle(
    sectionRight - 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-5-right-wall"
    }
  );

  sectionCatcherBodies.push(leftWall, rightWall);

  const colliderTargets = target.querySelectorAll("[data-s5-collider]");

  colliderTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.width < 16 || rect.height < 10) return;

    const type = el.getAttribute("data-s5-collider");

    let centerX = rect.left + window.scrollX + rect.width / 2;
    let centerY = rect.top + window.scrollY + rect.height / 2;

    let bodyWidth = rect.width * 0.92;
    let bodyHeight = Math.max(14, rect.height * 0.30);
    let angle = 0;

    if (type === "eyebrow") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(14, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = -0.012;
    }

    if (type === "headline") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(18, rect.height * 0.22);
      centerY = rect.top + window.scrollY + rect.height * 0.32;
    }

    if (type === "subtitle") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = 0.012;
    }

    if (type === "tags") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(20, rect.height * 0.40);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
      angle = -0.014;
    }

    if (type === "tag") {
      bodyWidth = rect.width * 0.98;
      bodyHeight = Math.max(16, rect.height * 0.50);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "metric-card") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(24, rect.height * 0.24);
      centerY = rect.top + window.scrollY + rect.height * (0.30 + Math.random() * 0.18);
      angle = (Math.random() - 0.5) * 0.055;
    }

    if (type === "metric-top") {
      bodyWidth = rect.width * 0.92;
      bodyHeight = Math.max(16, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
    }

    if (type === "metric-number") {
      bodyWidth = rect.width * 0.86;
      bodyHeight = Math.max(26, rect.height * 0.28);
      centerY = rect.top + window.scrollY + rect.height * 0.48;
      angle = (Math.random() - 0.5) * 0.04;
    }

    if (type === "metric-caption") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(14, rect.height * 0.50);
      centerY = rect.top + window.scrollY + rect.height * 0.55;
    }

    if (type === "leaderboard") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = 26;
      centerY = rect.top + window.scrollY + rect.height * 0.18;
      angle = -0.012;
    }

    if (type === "leaderboard-head") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(20, rect.height * 0.52);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
    }

    if (type === "leaderboard-row") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(22, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * (0.42 + Math.random() * 0.12);
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (
      type === "rank" ||
      type === "player-name" ||
      type === "player-meta" ||
      type === "run-type" ||
      type === "score"
    ) {
      bodyWidth = rect.width * 1.02;
      bodyHeight = Math.max(14, rect.height * 0.46);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
      angle = (Math.random() - 0.5) * 0.03;
    }

    if (type === "current-run") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = 26;
      centerY = rect.top + window.scrollY + rect.height * 0.20;
      angle = 0.012;
    }

    if (type === "run-header") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(22, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.48;
    }

    if (type === "run-icon") {
      bodyWidth = rect.width * 0.72;
      bodyHeight = Math.max(20, rect.height * 0.36);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
      angle = (Math.random() - 0.5) * 0.06;
    }

    if (type === "progress-group") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(24, rect.height * 0.24);
      centerY = rect.top + window.scrollY + rect.height * 0.35;
      angle = -0.014;
    }

    if (type === "progress-row") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "bonus") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(24, rect.height * 0.38);
      centerY = rect.top + window.scrollY + rect.height * 0.38;
      angle = 0.018;
    }

    if (type === "bonus-title" || type === "bonus-copy") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(16, rect.height * 0.46);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
    }

    const body = Bodies.rectangle(centerX, centerY, bodyWidth, bodyHeight, {
      isStatic: true,
      friction: 0.94,
      restitution: 0.05,
      angle,
      label: `section-5-${type}`
    });

    sectionCatcherBodies.push(body);
  });

  /*
    Soft fallback shelf near the bottom only.
    It catches leftovers without making the section feel like
    one large container platform.
  */
  const lowerShelf = Bodies.rectangle(
    sectionCenterX,
    sectionTop + sectionRect.height * 0.92,
    sectionRect.width * 0.86,
    30,
    {
      isStatic: true,
      friction: 0.95,
      restitution: 0.04,
      label: "section-5-lower-shelf"
    }
  );

  sectionCatcherBodies.push(lowerShelf);
  World.add(world, sectionCatcherBodies);
}

function activateSection5Physics() {
  if (section5Activated) return;

  section5Activated = true;
  currentStage = "section-5";

  createSection5Catchers();

  if (typeof spawnSectionBlocks === "function") {
    spawnSectionBlocks("section-5-catcher", 34);
  }

  wakeBlocks(2.1, 2.6, 3.4, 0.24);
}

/* =====================================================
   08C. SECTION 6 CHEAT CODE CATCHERS
   ===================================================== */

function createSection6Catchers() {
  const target = document.getElementById("section-6-catcher");
  if (!target || !world) return;

  if (sectionCatcherBodies.length) {
    World.remove(world, sectionCatcherBodies);
    sectionCatcherBodies.length = 0;
  }

  const sectionRect = target.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionLeft = sectionRect.left + window.scrollX;
  const sectionRight = sectionRect.right + window.scrollX;
  const sectionCenterX = sectionLeft + sectionRect.width / 2;

  const leftWall = Bodies.rectangle(
    sectionLeft + 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-6-left-wall"
    }
  );

  const rightWall = Bodies.rectangle(
    sectionRight - 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-6-right-wall"
    }
  );

  sectionCatcherBodies.push(leftWall, rightWall);

  const colliderTargets = target.querySelectorAll("[data-s6-collider]");

  colliderTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.width < 16 || rect.height < 10) return;

    const type = el.getAttribute("data-s6-collider");

    let centerX = rect.left + window.scrollX + rect.width / 2;
    let centerY = rect.top + window.scrollY + rect.height / 2;

    let bodyWidth = rect.width * 0.92;
    let bodyHeight = Math.max(14, rect.height * 0.30);
    let angle = 0;

    if (type === "eyebrow") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(14, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = -0.012;
    }

    if (type === "headline") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(18, rect.height * 0.22);
      centerY = rect.top + window.scrollY + rect.height * 0.32;
    }

    if (type === "subtitle") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = 0.012;
    }

    if (type === "main-command") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(28, rect.height * 0.38);
      centerY = rect.top + window.scrollY + rect.height * 0.42;
      angle = -0.014;
    }

    if (
      type === "command-label" ||
      type === "command-code" ||
      type === "command-button"
    ) {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.46);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "code-card") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = Math.max(24, rect.height * 0.24);
      centerY = rect.top + window.scrollY + rect.height * (0.30 + Math.random() * 0.18);
      angle = (Math.random() - 0.5) * 0.055;
    }

    if (type === "card-top") {
      bodyWidth = rect.width * 0.92;
      bodyHeight = Math.max(18, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "card-index" || type === "card-icon") {
      bodyWidth = rect.width * 0.98;
      bodyHeight = Math.max(18, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
    }

    if (type === "card-title") {
      bodyWidth = rect.width * 1.02;
      bodyHeight = Math.max(16, rect.height * 0.48);
      centerY = rect.top + window.scrollY + rect.height * 0.58;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "card-copy") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.36);
      centerY = rect.top + window.scrollY + rect.height * 0.45;
      angle = (Math.random() - 0.5) * 0.03;
    }

    if (type === "card-command") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(20, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.44;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "terminal") {
      bodyWidth = rect.width * 0.94;
      bodyHeight = 26;
      centerY = rect.top + window.scrollY + rect.height * 0.18;
      angle = 0.012;
    }

    if (type === "terminal-head") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(22, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.48;
    }

    if (type === "terminal-title" || type === "terminal-dots") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.46);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
    }

    if (type === "terminal-lines") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(24, rect.height * 0.26);
      centerY = rect.top + window.scrollY + rect.height * 0.36;
      angle = -0.014;
    }

    if (type === "terminal-line") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(14, rect.height * 0.52);
      centerY = rect.top + window.scrollY + rect.height * 0.56;
      angle = (Math.random() - 0.5) * 0.025;
    }

    if (type === "export") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(24, rect.height * 0.30);
      centerY = rect.top + window.scrollY + rect.height * 0.30;
      angle = 0.018;
    }

    if (
      type === "export-top" ||
      type === "export-title" ||
      type === "export-icon" ||
      type === "export-copy"
    ) {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
    }

    if (type === "meter-group") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(24, rect.height * 0.24);
      centerY = rect.top + window.scrollY + rect.height * 0.36;
      angle = -0.014;
    }

    if (type === "meter-row") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "chips") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(20, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
      angle = 0.014;
    }

    if (type === "chip") {
      bodyWidth = rect.width * 0.98;
      bodyHeight = Math.max(16, rect.height * 0.50);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = (Math.random() - 0.5) * 0.035;
    }

    const body = Bodies.rectangle(centerX, centerY, bodyWidth, bodyHeight, {
      isStatic: true,
      friction: 0.94,
      restitution: 0.05,
      angle,
      label: `section-6-${type}`
    });

    sectionCatcherBodies.push(body);
  });

  const lowerShelf = Bodies.rectangle(
    sectionCenterX,
    sectionTop + sectionRect.height * 0.92,
    sectionRect.width * 0.86,
    30,
    {
      isStatic: true,
      friction: 0.95,
      restitution: 0.04,
      label: "section-6-lower-shelf"
    }
  );

  sectionCatcherBodies.push(lowerShelf);
  World.add(world, sectionCatcherBodies);
}

function activateSection6Physics() {
  if (section6Activated) return;

  section6Activated = true;
  currentStage = "section-6";

  createSection6Catchers();

  if (typeof spawnSectionBlocks === "function") {
    spawnSectionBlocks("section-6-catcher", 34);
  }

  wakeBlocks(2.2, 2.7, 3.5, 0.26);
}

/* =====================================================
   08D. SECTION 7 FINAL CTA TARGETED CATCHERS
   Extra left/right block burst for final section only.
   ===================================================== */

function createSection7Catchers() {
  const target = document.getElementById("section-7-catcher");
  if (!target || !world) return;

  if (sectionCatcherBodies.length) {
    World.remove(world, sectionCatcherBodies);
    sectionCatcherBodies.length = 0;
  }

  const sectionRect = target.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.scrollY;
  const sectionLeft = sectionRect.left + window.scrollX;
  const sectionRight = sectionRect.right + window.scrollX;
  const sectionCenterX = sectionLeft + sectionRect.width / 2;

  const leftWall = Bodies.rectangle(
    sectionLeft + 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-7-left-wall"
    }
  );

  const rightWall = Bodies.rectangle(
    sectionRight - 12,
    sectionTop + sectionRect.height * 0.5,
    24,
    sectionRect.height * 0.88,
    {
      isStatic: true,
      friction: 0.9,
      restitution: 0.04,
      label: "section-7-right-wall"
    }
  );

  sectionCatcherBodies.push(leftWall, rightWall);

  const colliderTargets = target.querySelectorAll("[data-s7-collider]");

  colliderTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.width < 16 || rect.height < 10) return;

    const type = el.getAttribute("data-s7-collider");

    let centerX = rect.left + window.scrollX + rect.width / 2;
    let centerY = rect.top + window.scrollY + rect.height / 2;

    let bodyWidth = rect.width * 0.92;
    let bodyHeight = Math.max(14, rect.height * 0.30);
    let angle = 0;

    if (type === "core") {
      bodyWidth = rect.width * 0.78;
      bodyHeight = Math.max(24, rect.height * 0.28);
      centerY = rect.top + window.scrollY + rect.height * 0.42;
      angle = -0.018;
    }

    if (type === "coin") {
      bodyWidth = rect.width * 0.84;
      bodyHeight = Math.max(22, rect.height * 0.38);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
    }

    if (type === "eyebrow") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(14, rect.height * 0.44);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = -0.012;
    }

    if (type === "headline") {
      bodyWidth = rect.width * 0.92;
      bodyHeight = Math.max(20, rect.height * 0.24);
      centerY = rect.top + window.scrollY + rect.height * 0.34;
      angle = (Math.random() - 0.5) * 0.018;
    }

    if (type === "subtitle") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.34);
      centerY = rect.top + window.scrollY + rect.height * 0.46;
      angle = 0.012;
    }

    if (type === "buttons") {
      bodyWidth = rect.width * 0.95;
      bodyHeight = Math.max(22, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.50;
      angle = -0.012;
    }

    if (type === "button") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(18, rect.height * 0.46);
      centerY = rect.top + window.scrollY + rect.height * 0.54;
      angle = (Math.random() - 0.5) * 0.035;
    }

    if (type === "status") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(24, rect.height * 0.32);
      centerY = rect.top + window.scrollY + rect.height * 0.38;
      angle = 0.014;
    }

    if (type === "status-card") {
      bodyWidth = rect.width * 0.96;
      bodyHeight = Math.max(20, rect.height * 0.42);
      centerY = rect.top + window.scrollY + rect.height * 0.52;
      angle = (Math.random() - 0.5) * 0.025;
    }

    const body = Bodies.rectangle(centerX, centerY, bodyWidth, bodyHeight, {
      isStatic: true,
      friction: 0.94,
      restitution: 0.05,
      angle,
      label: `section-7-${type}`
    });

    sectionCatcherBodies.push(body);
  });

  const lowerShelf = Bodies.rectangle(
    sectionCenterX,
    sectionTop + sectionRect.height * 0.92,
    sectionRect.width * 0.86,
    30,
    {
      isStatic: true,
      friction: 0.95,
      restitution: 0.04,
      label: "section-7-lower-shelf"
    }
  );

  sectionCatcherBodies.push(lowerShelf);
  World.add(world, sectionCatcherBodies);
}

function spawnSection7SideBurst() {
  if (!world) return;

  const target = document.getElementById("section-7-catcher");
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const sectionTop = rect.top + window.scrollY;
  const burstCount = width < 768 ? 28 : 54;

  for (let i = 0; i < burstCount; i++) {
    const color = palette[Math.floor(Math.random() * palette.length)];
    const side = i % 2 === 0 ? "left" : "right";

    const sizeRoll = Math.random();
    const size =
      sizeRoll > 0.86 ? blockSize * 1.25 :
      sizeRoll > 0.58 ? blockSize :
      blockSize * 0.82;

    const x = side === "left"
      ? -40 - Math.random() * 160
      : width + 40 + Math.random() * 160;

    const y = sectionTop + rect.height * (0.18 + Math.random() * 0.50);

    const block = createPixelBody(x, y, size, color, blocks.length, {
      isStatic: false,
      frictionAir: 0.01
    });

    Body.setVelocity(block.body, {
      x: side === "left"
        ? 5.2 + Math.random() * 3.2
        : -5.2 - Math.random() * 3.2,
      y: -1.5 + Math.random() * 3.6
    });

    Body.setAngularVelocity(block.body, (Math.random() - 0.5) * 0.34);

    blocks.push(block);
    World.add(world, block.body);
  }
}

function activateSection7Physics() {
  if (section7Activated) return;

  section7Activated = true;
  currentStage = "section-7";

  createSection7Catchers();

  wakeBlocks(2.4, 2.8, 3.8, 0.28);

  setTimeout(() => {
    spawnSection7SideBurst();
  }, 420);

  setTimeout(() => {
    spawnSection7SideBurst();
  }, 1150);
}

  /* =====================================================
   SECTION 05 — COUNT-UP + PROGRESS ANIMATIONS
   ===================================================== */

function setupSection5Animations() {
  const section = document.getElementById("high-scores");
  if (!section || !window.gsap || !window.ScrollTrigger) return;

  const counters = section.querySelectorAll(".nexus-count");
  const progressBars = section.querySelectorAll(".nexus-s5-progress-fill");

  ScrollTrigger.create({
    trigger: section,
    start: "top 72%",
    once: true,
    onEnter: () => {
      counters.forEach((counter) => {
        const target = parseFloat(counter.dataset.count || "0");
        const decimal = parseInt(counter.dataset.decimal || "0", 10);
        const prefix = counter.dataset.prefix || "";
        const suffix = counter.dataset.suffix || "";

        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 1.7,
          ease: "power3.out",
          onUpdate: () => {
            let value = decimal > 0
              ? obj.value.toFixed(decimal)
              : Math.round(obj.value).toString();

            if (prefix && value.length === 1) {
              value = `${prefix}${value}`;
            }

            counter.textContent = `${value}${suffix}`;
          }
        });
      });

      progressBars.forEach((bar) => {
        bar.classList.add("is-animated");
      });
    }
  });
}

setupSection5Animations();


  /* =====================================================
     09. SHARED BLOCK WAKE / FREEZE LOGIC
     ===================================================== */

  function wakeBlocks(horizontalRange, minY, maxY, angularRange) {
    blocks.forEach((block) => {
      Body.setStatic(block.body, false);
      Sleeping.set(block.body, false);

      Body.setVelocity(block.body, {
        x: (Math.random() - 0.5) * horizontalRange,
        y: minY + Math.random() * maxY
      });

      Body.setAngularVelocity(block.body, (Math.random() - 0.5) * angularRange);
      block.settled = false;
    });

    physicsActive = true;
    settleTimer = null;
    sceneStartTime = performance.now();

    if (runner) {
      Runner.run(runner, engine);
    }
  }

  function averageMotion() {
    if (!blocks.length) return Infinity;

    let total = 0;

    blocks.forEach(block => {
      const v = block.body.velocity;
      total += Math.abs(v.x) + Math.abs(v.y) + Math.abs(block.body.angularVelocity);
    });

    return total / blocks.length;
  }

  function checkSettled() {
    if (!physicsActive) return;

    const elapsed = performance.now() - sceneStartTime;
    const elapsedEnough = elapsed > 4800;
    const lowMotion = averageMotion() < 0.08;

    if (elapsedEnough && lowMotion) {
      if (!settleTimer) {
        settleTimer = setTimeout(() => {
          freezePile();
        }, 900);
      }
    } else {
      settleTimer = null;
    }

    if (elapsed > 12000) {
      freezePile();
    }
  }

  function freezePile() {
    if (!physicsActive) return;

    physicsActive = false;

    if (wordColliderBodies.length) {
      World.remove(world, wordColliderBodies);
      wordColliderBodies.length = 0;
    }

    blocks.forEach(block => {
      block.settled = true;
      Sleeping.set(block.body, true);
      Body.setStatic(block.body, true);
    });

    if (runner) {
      Runner.stop(runner);
    }
  }


  /* =====================================================
     10. DRAWING
     ===================================================== */

  function drawBlock(block, time) {
    const body = block.body;
    const pos = body.position;
    const angle = body.angle;
    const size = block.size;
    const color = block.color;

    const blinkPulse = Math.sin(time * 0.002 + block.blinkOffset) * 0.18 + 0.82;

    block.alpha += (block.targetAlpha - block.alpha) * block.flickerSpeed;

    if (Math.abs(block.alpha - block.targetAlpha) < 0.025) {
      block.targetAlpha = (0.22 + Math.random() * 0.78) * block.maxAlpha;
    }

    const alpha = Math.max(0.08, block.alpha * blinkPulse);

    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angle);

    ctx.shadowBlur = 16;
    ctx.shadowColor = color.glow;

    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
    ctx.fillRect(-size / 2, -size / 2, size - 2, size - 2);

    ctx.shadowBlur = 0;

    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.32})`;
    ctx.fillRect(-size / 2, -size / 2, size - 2, 3);

    ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.44})`;
    ctx.fillRect(-size / 2, size / 2 - 5, size - 2, 3);

    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.10})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(-size / 2 + 3, -size / 2 + 3, size - 8, size - 8);

    ctx.restore();
  }

  function drawBackgroundBase() {
    ctx.fillStyle = "#03000a";
    ctx.fillRect(0, 0, width, pageHeight);

    const gradient = ctx.createRadialGradient(
      width * 0.78,
      height * 0.38,
      0,
      width * 0.78,
      height * 0.38,
      Math.max(width, height) * 0.72
    );

    gradient.addColorStop(0, "rgba(0, 240, 255, 0.13)");
    gradient.addColorStop(0.35, "rgba(255, 0, 127, 0.08)");
    gradient.addColorStop(1, "rgba(5, 0, 16, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function animatePixels(time) {
    drawBackgroundBase();

    blocks.forEach(block => {
      drawBlock(block, time);
    });

    checkSettled();

    requestAnimationFrame(animatePixels);
  }


  /* =====================================================
     11. SCROLL TRIGGERS
     ===================================================== */

  function setupScrollPhysics() {
  ScrollTrigger.create({
    trigger: "#chaos-to-form",
    start: "top 72%",
    once: true,
    onEnter: () => {
      activateSection2Physics();
    }
  });

  ScrollTrigger.create({
    trigger: "#game-modes",
    start: "top 72%",
    once: true,
    onEnter: () => {
      activateSection3Physics();
    }
  });

  ScrollTrigger.create({
    trigger: "#collision-engine",
    start: "top 72%",
    once: true,
    onEnter: () => {
      activateSection4Physics();
    }
  });

  ScrollTrigger.create({
    trigger: "#high-scores",
    start: "top 72%",
    once: true,
    onEnter: () => {
      activateSection5Physics();
    }
  });

  ScrollTrigger.create({
    trigger: "#cheat-codes",
    start: "top 72%",
    once: true,
    onEnter: () => {
      activateSection6Physics();
    }
  });

  ScrollTrigger.create({
    trigger: "#join-the-guild",
    start: "top 72%",
    once: true,
    onEnter: () => {
      activateSection7Physics();
    }
  });
}


  /* =====================================================
     12. RESET / INIT
     ===================================================== */

  function resetPhysicsScene() {
    if (runner) {
      Runner.stop(runner);
    }

    if (engine) {
      World.clear(world, false);
      Engine.clear(engine);
    }

    section2Activated = false;
    section3Activated = false;
    section4Activated = false;
    section5Activated = false;
    section6Activated = false;
    section7Activated = false;

    sectionCatcherBodies.length = 0;
    wordColliderBodies.length = 0;

    initPhysics();
    buildPhysicsStage();
    spawnFallingPixels();

    physicsActive = true;
    settleTimer = null;
    wordCollidersCreated = false;
    delayedWaveReleased = false;
    sceneStartTime = performance.now();

    setTimeout(() => {
      createWordColliders();
      releaseDelayedWave();
    }, 900);
  }

  window.addEventListener("resize", () => {
    resize();
  });

  window.addEventListener("load", () => {
    resize();
    ScrollTrigger.refresh();
  });

  resize();
  resetPhysicsScene();

  started = true;

  setupScrollPhysics();

  requestAnimationFrame(animatePixels);
  
    } catch (error) {
      console.error("Error running template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="physics-layer">
<canvas id="pixel-canvas"></canvas>
<div className="nexus-scanlines"></div>
<div className="nexus-vignette"></div>
</div>

<div className="nexus-page-shell">

<header className="nexus-header">

<a className="nexus-logo flex items-center gap-3 group" href="#">
<span className="nexus-logo-mark">
<span className="font-arcade text-3xl leading-none">N</span>
</span>
<span className="flex flex-col leading-none">
<span className="font-display text-[1.55rem] font-extrabold uppercase tracking-[-0.04em] text-white transition-colors duration-300 group-hover:[color:var(--nexus-cyan)]">
            Nexus
          </span>
<span className="mt-1 text-[0.58rem] font-bold tracking-[0.32em] uppercase" style={{color: 'rgba(232, 184, 93, 0.70)'}}>
            Idea Arcade
          </span>
</span>
</a>

<nav className="nexus-nav">
<a className="nexus-nav-link is-active" href="#">[ Arcades ]</a>
<a className="nexus-nav-link" href="#high-scores">High Scores</a>
<a className="nexus-nav-link" href="#cheat-codes">Cheats</a>
<a className="nexus-nav-link" href="#join-the-guild">Guild</a>
</nav>

<a className="nexus-header-cta" href="#join-the-guild">
<span className="text-base leading-none">●</span>
        Insert Coin
      </a>
</header>

<main className="nexus-hero" id="hero">

<div className="relative z-10 max-w-4xl">
<div className="nexus-hero-kicker" id="hero-kicker">
<span className="kicker-symbol font-arcade text-2xl leading-none">//</span>
<span className="text-xs font-bold uppercase tracking-[0.28em]">Creative engine online</span>
</div>
<h1 className="nexus-hero-title" id="hero-title">
<span className="block whitespace-nowrap">
<span className="word-collider">
<span className="inline-block">Ideas</span>
</span>
<span className="word-collider">
<span className="inline-block">Collide.</span>
</span>
</span>
<span className="block whitespace-nowrap">
<span className="word-collider">
<span className="inline-block cyan">Worlds</span>
</span>
<span className="word-collider">
<span className="inline-block pink">Unlock.</span>
</span>
</span>
</h1>
<p className="nexus-hero-copy" id="hero-desc">
          Drop loose prompts, visual references, and half-formed concepts into the field.
          NEXUS turns creative chaos into structured worlds, playable systems, and sharper visual direction.
        </p>
<div className="nexus-hero-actions" id="hero-cta">
<a className="nexus-button-primary group" href="#chaos-to-form">
            Insert Coin
            <iconify-icon className="text-2xl transform transition-transform group-hover:translate-x-1" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</a>
<a className="nexus-button-secondary" href="#game-modes">
            Explore Engine
          </a>
</div>
<div className="nexus-hero-stats" id="hero-stats">
<div className="nexus-hero-stat">
<div className="nexus-hero-stat-value" style={{color: 'var(--nexus-cyan)'}}>128</div>
<div className="nexus-hero-stat-label">Input fragments</div>
</div>
<div className="nexus-hero-stat">
<div className="nexus-hero-stat-value" style={{color: 'var(--nexus-pink)'}}>42</div>
<div className="nexus-hero-stat-label">World collisions</div>
</div>
<div className="nexus-hero-stat">
<div className="nexus-hero-stat-value" style={{color: 'var(--nexus-gold)'}}>87%</div>
<div className="nexus-hero-stat-label">World stability</div>
</div>
</div>
</div>

<aside aria-hidden="true" className="nexus-core-wrap">
<div className="nexus-core-stage">
<div className="nexus-core-glow"></div>
<div className="nexus-core-axis"></div>
<div className="nexus-core-ring r1"></div>
<div className="nexus-core-ring r2"></div>
<div className="nexus-core-ring r3"></div>
<div className="nexus-core-chip input">Input</div>
<div className="nexus-core-chip remix">Remix</div>
<div className="nexus-core-chip lock">World Lock</div>
<div className="nexus-core-chip output">Output</div>
<div className="nexus-mini-particle p1"></div>
<div className="nexus-mini-particle p2"></div>
<div className="nexus-mini-particle p3"></div>
<div className="nexus-mini-particle p4"></div>
<div className="nexus-mini-particle p5"></div>
<div className="nexus-cube-scene">
<div className="nexus-cube">
<div className="nexus-cube-face front"></div>
<div className="nexus-cube-face back"></div>
<div className="nexus-cube-face right"></div>
<div className="nexus-cube-face left"></div>
<div className="nexus-cube-face top"></div>
<div className="nexus-cube-face bottom"></div>
</div>
</div>
<div className="nexus-core-side-panel">
<div className="text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{color: 'rgba(232, 184, 93, 0.70)'}}>
              Core Motion
            </div>
<div className="mt-2 font-arcade text-3xl leading-none" style={{color: 'var(--nexus-gold)'}}>
              Sync 04
            </div>
<div className="mt-4 grid gap-2">
<div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
<span>Axis</span>
<span style={{color: 'rgba(232, 184, 93, 0.80)'}}>Stable</span>
</div>
<div className="flex items-center justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/38">
<span>Loop</span>
<span style={{color: 'rgba(53, 221, 242, 0.80)'}}>Active</span>
</div>
</div>
</div>
<div className="nexus-core-panel">
<div className="nexus-core-panel-top">
<span>World Core</span>
<span>87%</span>
</div>
<div className="nexus-core-meter">
<span></span>
</div>
<div className="mt-4 grid grid-cols-3 gap-2 text-center">
<div className="p-2" style={{border: '1px solid rgba(53, 221, 242, 0.20)', background: 'rgba(53, 221, 242, 0.05)'}}>
<div className="font-arcade text-2xl" style={{color: 'var(--nexus-cyan)'}}>01</div>
<div className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">
                  Input
                </div>
</div>
<div className="p-2" style={{border: '1px solid rgba(244, 91, 168, 0.20)', background: 'rgba(244, 91, 168, 0.05)'}}>
<div className="font-arcade text-2xl" style={{color: 'var(--nexus-pink)'}}>02</div>
<div className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">
                  Collide
                </div>
</div>
<div className="p-2" style={{border: '1px solid rgba(232, 184, 93, 0.20)', background: 'rgba(232, 184, 93, 0.05)'}}>
<div className="font-arcade text-2xl" style={{color: 'var(--nexus-gold)'}}>03</div>
<div className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">
                  Unlock
                </div>
</div>
</div>
</div>
</div>
</aside>
</main>

<section className="relative w-full max-w-[90rem] mx-auto px-6 lg:px-12 pb-28 lg:pb-36" id="chaos-to-form">
<div className="nexus-s2-frame" id="section-2-catcher">

<div className="nexus-s2-corner tl"></div>
<div className="nexus-s2-corner tr"></div>
<div className="nexus-s2-corner bl"></div>
<div className="nexus-s2-corner br"></div>
<div className="relative z-10 min-h-[820px] p-6 md:p-10 lg:p-14 xl:p-16">

<div className="mx-auto max-w-5xl text-center">
<h2 className="nexus-s2-title">
<span className="line-one" data-s2-collider="headline">From chaos</span>
<span className="line-two" data-s2-collider="headline">to playable form</span>
</h2>
<p className="nexus-s2-intro" data-s2-collider="subtitle">
              Every idea enters messy: a prompt, a screenshot, a reference, or a half-built direction.
              NEXUS gives those pieces a field to collide, remix, and lock into a stronger creative system.
            </p>
</div>

<div className="nexus-s2-content-grid">

<div className="nexus-s2-left-stack">

<div className="nexus-s2-rail">
<div className="nexus-s2-rail-item" data-s2-collider="rail-card">
<div className="nexus-s2-rail-index" data-s2-collider="rail-index" style={{color: 'var(--nexus-cyan)'}}>
                    01
                  </div>
<h3 className="nexus-s2-rail-title" data-s2-collider="rail-title">
                    Input fragments
                  </h3>
<p className="nexus-s2-rail-copy">
                    Prompts, screenshots, references, moods, loose concepts, and visual signals.
                  </p>
</div>
<div className="nexus-s2-rail-item" data-s2-collider="rail-card">
<div className="nexus-s2-rail-index" data-s2-collider="rail-index" style={{color: 'var(--nexus-pink)'}}>
                    02
                  </div>
<h3 className="nexus-s2-rail-title" data-s2-collider="rail-title">
                    Force collision
                  </h3>
<p className="nexus-s2-rail-copy">
                    The system compares, compresses, remixes, rejects, and sharpens the direction.
                  </p>
</div>
<div className="nexus-s2-rail-item" data-s2-collider="rail-card">
<div className="nexus-s2-rail-index" data-s2-collider="rail-index" style={{color: 'var(--nexus-gold)'}}>
                    03
                  </div>
<h3 className="nexus-s2-rail-title" data-s2-collider="rail-title">
                    Lock the world
                  </h3>
<p className="nexus-s2-rail-copy">
                    The strongest patterns become typography, color, layout, motion, and section rhythm.
                  </p>
</div>
</div>

<div className="nexus-s2-info-card" data-s2-collider="info-card">
<div className="mb-3 flex items-center gap-3">
<div className="h-2.5 w-2.5" style={{background: 'var(--nexus-cyan)', boxShadow: '0 0 12px rgba(53, 221, 242, 0.9)'}}></div>
<div className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{color: 'rgba(53, 221, 242, 0.80)'}}>
                    First transformation
                  </div>
</div>
<p className="text-sm leading-relaxed" style={{color: 'rgba(248, 243, 255, 0.62)'}}>
                  This is where falling fragments stop being random pixels and start becoming a readable creative
                  structure.
                </p>
</div>
<div className="nexus-s2-note" data-s2-collider="note-card">
<div className="mb-3 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center font-arcade text-2xl" style={{border: '1px solid rgba(232, 184, 93, 0.35)', color: 'var(--nexus-gold)'}}>
                    i
                  </div>
<div className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{color: 'rgba(232, 184, 93, 0.72)'}}>
                    System note
                  </div>
</div>
<p className="text-xs leading-relaxed" style={{color: 'rgba(232, 184, 93, 0.72)'}}>
                  Better inputs create better collisions. Better collisions create better worlds.
                  This chamber is the first physical stop in the page-wide falling block sequence.
                </p>
</div>
</div>

<div className="relative">
<div className="nexus-s2-machine" data-s2-collider="machine">

<div className="nexus-s2-machine-header" data-s2-collider="machine-header">
<div>
<div className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{color: 'rgba(248, 243, 255, 0.40)'}}>
                      Nexus Engine v2.0
                    </div>
<div className="nexus-s2-machine-title" data-s2-collider="machine-title">
                      Conversion chamber
                    </div>
</div>
<div className="nexus-s2-machine-status" data-s2-collider="machine-status">
<span></span>
                    Online
                  </div>
</div>

<div className="nexus-s2-monitor" data-s2-collider="monitor">

<div className="nexus-s2-node-line one"></div>
<div className="nexus-s2-node-line two"></div>
<div className="nexus-s2-node-line three"></div>
<div className="nexus-s2-node-line four"></div>

<div className="nexus-s2-node input" data-s2-collider="node">Raw input</div>
<div className="nexus-s2-node collision" data-s2-collider="node">Collision</div>
<div className="nexus-s2-node system" data-s2-collider="node">Rules locked</div>
<div className="nexus-s2-node output" data-s2-collider="node">Playable form</div>

<div className="nexus-s2-chamber" data-s2-collider="chamber">
<div className="nexus-s2-core"></div>
</div>

<div className="nexus-s2-flow-pixel" style={{'--delay': '0s'}}></div>
<div className="nexus-s2-flow-pixel pink" style={{'--delay': '-1.2s'}}></div>
<div className="nexus-s2-flow-pixel gold" style={{'--delay': '-2.4s'}}></div>
<div className="nexus-s2-flow-pixel blue" style={{'--delay': '-3.6s'}}></div>

<div className="nexus-s2-console" data-s2-collider="console">
<div className="grid gap-4 md:grid-cols-[1fr_150px] md:items-end">
<div>
<div className="nexus-s2-meter-label">
<span>World stability</span>
<span style={{color: 'var(--nexus-cyan)'}}>active</span>
</div>
<div className="nexus-s2-meter">
<span></span>
</div>
</div>
<div className="p-3 text-right" data-s2-collider="run-score" style={{border: '1px solid rgba(232, 184, 93, 0.22)', background: 'rgba(232, 184, 93, 0.06)'}}>
<div className="text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{color: 'rgba(232, 184, 93, 0.70)'}}>
                          Current run
                        </div>
<div className="font-arcade text-3xl leading-none" style={{color: 'var(--nexus-gold)'}}>
                          87%
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="nexus-s3-section" id="game-modes">
<div className="nexus-s3-catcher" id="section-3-catcher">
<div className="nexus-s3-inner">

<div className="nexus-s3-header">
<div className="nexus-s3-eyebrow" data-s3-collider="eyebrow">
<span className="font-arcade text-2xl leading-none">//</span>
<span className="text-xs font-bold uppercase tracking-[0.28em]">Choose your route</span>
</div>
<h2 className="nexus-s3-title">
<span className="line-one" data-s3-collider="headline">Choose your</span>
<span className="line-two" data-s3-collider="headline">game mode</span>
</h2>
<p className="nexus-s3-copy" data-s3-collider="subtitle">
              Different missions. Different rules. One goal: turn creative fragments into a complete world with the
              right level of speed, structure, and polish.
            </p>
</div>

<div className="nexus-s3-mode-grid">

<article className="nexus-s3-card is-cyan is-selected" data-s3-collider="card">
<div className="nexus-s3-card-content">
<div className="nexus-s3-card-top" data-s3-collider="card-top">
<div className="nexus-s3-index" data-s3-collider="card-index">01</div>
<div className="nexus-s3-badge" data-s3-collider="badge">Selected</div>
</div>
<div className="nexus-s3-icon-wrap" data-s3-collider="icon">
<iconify-icon icon="solar:gamepad-minimalistic-linear"></iconify-icon>
</div>
<h3 className="nexus-s3-card-title" data-s3-collider="card-title">
                  Arcade Mode
                </h3>
<p className="nexus-s3-card-copy" data-s3-collider="card-copy">
                  Rapid-fire creativity. Generate, test, and explore visual ideas at lightning speed.
                </p>
<div className="nexus-s3-meter-list" data-s3-collider="meters">
<div className="nexus-s3-meter-row">
<span>Speed</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '96%', '--delay': '0s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Clarity</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '74%', '--delay': '-0.6s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Risk</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '62%', '--delay': '-1.2s'}}></i>
</div>
</div>
</div>
</div>
<div className="nexus-s3-action" data-s3-collider="action">
<span>Select mode</span>
<span>Fast run</span>
</div>
</article>

<article className="nexus-s3-card is-pink" data-s3-collider="card">
<div className="nexus-s3-card-content">
<div className="nexus-s3-card-top" data-s3-collider="card-top">
<div className="nexus-s3-index" data-s3-collider="card-index">02</div>
</div>
<div className="nexus-s3-icon-wrap" data-s3-collider="icon">
<iconify-icon icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<h3 className="nexus-s3-card-title" data-s3-collider="card-title">
                  Campaign Mode
                </h3>
<p className="nexus-s3-card-copy" data-s3-collider="card-copy">
                  Build a complete journey. Shape full landing pages section by section with narrative flow.
                </p>
<div className="nexus-s3-meter-list" data-s3-collider="meters">
<div className="nexus-s3-meter-row">
<span>Speed</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '72%', '--delay': '-0.2s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Flow</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '94%', '--delay': '-0.8s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Polish</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '88%', '--delay': '-1.4s'}}></i>
</div>
</div>
</div>
</div>
<div className="nexus-s3-action" data-s3-collider="action">
<span>Select mode</span>
<span>Full build</span>
</div>
</article>

<article className="nexus-s3-card is-purple" data-s3-collider="card">
<div className="nexus-s3-card-content">
<div className="nexus-s3-card-top" data-s3-collider="card-top">
<div className="nexus-s3-index" data-s3-collider="card-index">03</div>
</div>
<div className="nexus-s3-icon-wrap" data-s3-collider="icon">
<iconify-icon icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="nexus-s3-card-title" data-s3-collider="card-title">
                  Boss Mode
                </h3>
<p className="nexus-s3-card-copy" data-s3-collider="card-copy">
                  Face the hard truths. Hunt weak layouts, poor hierarchy, generic copy, and visual noise.
                </p>
<div className="nexus-s3-meter-list" data-s3-collider="meters">
<div className="nexus-s3-meter-row">
<span>Pressure</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '92%', '--delay': '-0.3s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Clarity</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '86%', '--delay': '-0.9s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Fix rate</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '78%', '--delay': '-1.5s'}}></i>
</div>
</div>
</div>
</div>
<div className="nexus-s3-action" data-s3-collider="action">
<span>Select mode</span>
<span>Audit run</span>
</div>
</article>

<article className="nexus-s3-card is-blue" data-s3-collider="card">
<div className="nexus-s3-card-content">
<div className="nexus-s3-card-top" data-s3-collider="card-top">
<div className="nexus-s3-index" data-s3-collider="card-index">04</div>
</div>
<div className="nexus-s3-icon-wrap" data-s3-collider="icon">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="nexus-s3-card-title" data-s3-collider="card-title">
                  Sandbox Mode
                </h3>
<p className="nexus-s3-card-copy" data-s3-collider="card-copy">
                  No rules, just possibilities. Remix references, colors, layouts, and components freely.
                </p>
<div className="nexus-s3-meter-list" data-s3-collider="meters">
<div className="nexus-s3-meter-row">
<span>Freedom</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '98%', '--delay': '-0.4s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Risk</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '76%', '--delay': '-1s'}}></i>
</div>
</div>
<div className="nexus-s3-meter-row">
<span>Range</span>
<div className="nexus-s3-meter-track">
<i className="nexus-s3-meter-fill" style={{'--meter-width': '91%', '--delay': '-1.6s'}}></i>
</div>
</div>
</div>
</div>
<div className="nexus-s3-action" data-s3-collider="action">
<span>Select mode</span>
<span>Free remix</span>
</div>
</article>
</div>

<div className="nexus-s3-footer-row">
<div className="nexus-s3-tip" data-s3-collider="tip">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 shrink-0 items-center justify-center font-arcade text-3xl" style={{border: '1px solid rgba(53, 221, 242, 0.40)', color: 'var(--nexus-cyan)'}}>
                  i
                </div>
<div>
<div className="text-xs font-bold uppercase tracking-[0.24em]" style={{color: 'var(--nexus-cyan)'}}>
                    Tip
                  </div>
<p className="mt-2 text-sm leading-relaxed" style={{color: 'rgba(248, 243, 255, 0.70)'}}>
                    Start in Arcade Mode when the idea is still loose. Switch to Campaign Mode once the world starts to
                    take shape.
                  </p>
</div>
</div>
</div>
<div className="nexus-s3-rank" data-s3-collider="rank">
<div className="flex items-center justify-between gap-5">
<div>
<div className="text-xs font-bold uppercase tracking-[0.24em]" style={{color: 'rgba(232, 184, 93, 0.75)'}}>
                    Your Rank
                  </div>
<div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.05em] text-white">
                    Creative Player
                  </div>
</div>
<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2" style={{borderColor: 'rgba(232, 184, 93, 0.55)', color: 'var(--nexus-gold)', boxShadow: '0 0 24px rgba(232, 184, 93, 0.18)'}}>
<span className="font-arcade text-4xl">N</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="nexus-s4-section" id="collision-engine">
<div className="nexus-s4-catcher" id="section-4-catcher">
<div className="nexus-s4-inner">
<div className="nexus-s4-layout">

<div className="relative z-10">
<div className="nexus-s4-eyebrow" data-s4-collider="eyebrow">
<span className="font-arcade text-2xl leading-none">//</span>
<span className="text-xs font-bold uppercase tracking-[0.28em]">System pressure layer</span>
</div>
<h2 className="nexus-s4-title">
<span className="line-one" data-s4-collider="headline">Collision</span>
<span className="line-two" data-s4-collider="headline">Engine</span>
</h2>
<p className="nexus-s4-copy" data-s4-collider="subtitle">
            The engine does not simply generate ideas. It applies pressure. Inputs collide,
            weak signals break apart, useful patterns survive, and the strongest direction becomes easier to build.
          </p>

<div className="nexus-s4-process">
<article className="nexus-s4-process-card is-cyan" data-s4-collider="process-card">
<div className="nexus-s4-process-card-inner">
<div className="nexus-s4-process-index" data-s4-collider="process-index">01</div>
<div>
<h3 className="nexus-s4-process-title" data-s4-collider="process-title">
                    Drop Inputs
                  </h3>
<p className="nexus-s4-process-copy" data-s4-collider="process-copy">
                    Prompts, references, colors, moods, screenshots, layout fragments, and rough creative instincts
                    enter the system.
                  </p>
</div>
</div>
</article>
<article className="nexus-s4-process-card is-pink" data-s4-collider="process-card">
<div className="nexus-s4-process-card-inner">
<div className="nexus-s4-process-index" data-s4-collider="process-index">02</div>
<div>
<h3 className="nexus-s4-process-title" data-s4-collider="process-title">
                    Force Collision
                  </h3>
<p className="nexus-s4-process-copy" data-s4-collider="process-copy">
                    Ideas are compared, remixed, rejected, compressed, and pushed until a sharper visual language
                    emerges.
                  </p>
</div>
</div>
</article>
<article className="nexus-s4-process-card is-gold" data-s4-collider="process-card">
<div className="nexus-s4-process-card-inner">
<div className="nexus-s4-process-index" data-s4-collider="process-index">03</div>
<div>
<h3 className="nexus-s4-process-title" data-s4-collider="process-title">
                    Lock Direction
                  </h3>
<p className="nexus-s4-process-copy" data-s4-collider="process-copy">
                    The strongest patterns become rules: typography, color, hierarchy, interaction, and section
                    rhythm.
                  </p>
</div>
</div>
</article>
</div>
</div>

<div className="relative z-10">
<div className="nexus-s4-machine" data-s4-collider="machine">

<div className="nexus-s4-machine-header" data-s4-collider="machine-header">
<div>
<div className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{color: 'rgba(232, 184, 93, 0.62)'}}>
                  Engine Status
                </div>
<div className="nexus-s4-status-title" data-s4-collider="status-title">
                  Collision Stable
                </div>
</div>
<div className="nexus-s4-status-badge" data-s4-collider="status-badge">
<span></span>
                Online
              </div>
</div>

<div className="nexus-s4-monitor" data-s4-collider="monitor">

<div className="nexus-s4-monitor-label color" data-s4-collider="monitor-label">Color</div>
<div className="nexus-s4-monitor-label type" data-s4-collider="monitor-label">Type</div>
<div className="nexus-s4-monitor-label motion" data-s4-collider="monitor-label">Motion</div>
<div className="nexus-s4-monitor-label system" data-s4-collider="monitor-label">System</div>

<div className="nexus-s4-core-field" data-s4-collider="core-field">
<div className="nexus-s4-ring"></div>
<div className="nexus-s4-ring"></div>
<div className="nexus-s4-ring"></div>
<div className="nexus-s4-core" data-s4-collider="core"></div>
<span className="nexus-s4-orbit-dot d1"></span>
<span className="nexus-s4-orbit-dot d2"></span>
<span className="nexus-s4-orbit-dot d3"></span>
<span className="nexus-s4-orbit-dot d4"></span>
</div>

<div className="nexus-s4-console" data-s4-collider="console">
<div className="nexus-s4-console-grid">
<div data-s4-collider="signal" style={{color: 'var(--nexus-cyan)'}}>
<div className="nexus-s4-signal-label">
<span>Signal Match</span>
<span>94%</span>
</div>
<div className="nexus-s4-signal-track">
<i className="nexus-s4-signal-fill" style={{'--signal-width': '94%', '--delay': '0s'}}></i>
</div>
</div>
<div data-s4-collider="signal" style={{color: 'var(--nexus-pink)'}}>
<div className="nexus-s4-signal-label">
<span>Remix Force</span>
<span>88%</span>
</div>
<div className="nexus-s4-signal-track">
<i className="nexus-s4-signal-fill" style={{'--signal-width': '88%', '--delay': '-0.8s'}}></i>
</div>
</div>
<div data-s4-collider="signal" style={{color: 'var(--nexus-gold)'}}>
<div className="nexus-s4-signal-label">
<span>World Lock</span>
<span>97%</span>
</div>
<div className="nexus-s4-signal-track">
<i className="nexus-s4-signal-fill" style={{'--signal-width': '97%', '--delay': '-1.4s'}}></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="nexus-s5-section" id="high-scores">
<div className="nexus-s5-stage" id="section-5-catcher">
<div className="nexus-s5-inner">

<div className="nexus-s5-header">
<div>
<div className="nexus-s5-eyebrow" data-s5-collider="eyebrow">
<span className="font-arcade text-2xl leading-none">//</span>
<span className="text-xs font-bold uppercase tracking-[0.28em]">Performance layer</span>
</div>
<h2 className="nexus-s5-title">
<span className="line-one" data-s5-collider="headline">High</span>
<span className="line-two" data-s5-collider="headline">Scores</span>
</h2>
</div>
<div className="lg:ml-auto">
<p className="nexus-s5-copy" data-s5-collider="subtitle">
                Every run leaves a signal. Track the worlds created, systems stabilized, layouts upgraded,
                and creative loops completed across the Idea Arcade.
              </p>
<div className="nexus-s5-tags" data-s5-collider="tags">
<span className="nexus-s5-tag text-[#00f0ff]" data-s5-collider="tag">Live Board</span>
<span className="nexus-s5-tag text-[#6f9bff]" data-s5-collider="tag">Creative Runs</span>
<span className="nexus-s5-tag text-[#ff66b3]" data-s5-collider="tag">World Lock</span>
</div>
</div>
</div>

<div className="nexus-s5-metrics">
<article className="nexus-s5-metric-card is-cyan" data-s5-collider="metric-card">
<div className="nexus-s5-metric-inner">
<div className="nexus-s5-metric-top" data-s5-collider="metric-top">
<div className="nexus-s5-metric-label">Concepts</div>
<span className="nexus-s5-dot" style={{'--delay': '0s'}}></span>
</div>
<div className="nexus-s5-number" data-s5-collider="metric-number">
<span className="nexus-count" data-count="128">0</span>
</div>
<div className="nexus-s5-caption" data-s5-collider="metric-caption">Generated Ideas</div>
</div>
</article>
<article className="nexus-s5-metric-card is-blue" data-s5-collider="metric-card">
<div className="nexus-s5-metric-inner">
<div className="nexus-s5-metric-top" data-s5-collider="metric-top">
<div className="nexus-s5-metric-label">Worlds</div>
<span className="nexus-s5-dot" style={{'--delay': '-0.4s'}}></span>
</div>
<div className="nexus-s5-number" data-s5-collider="metric-number">
<span className="nexus-count" data-count="42">0</span>
</div>
<div className="nexus-s5-caption" data-s5-collider="metric-caption">Stabilized Systems</div>
</div>
</article>
<article className="nexus-s5-metric-card is-pink" data-s5-collider="metric-card">
<div className="nexus-s5-metric-inner">
<div className="nexus-s5-metric-top" data-s5-collider="metric-top">
<div className="nexus-s5-metric-label">Speed</div>
<span className="nexus-s5-dot" style={{'--delay': '-0.8s'}}></span>
</div>
<div className="nexus-s5-number" data-s5-collider="metric-number">
<span className="nexus-count" data-count="9.8" data-decimal="1" data-suffix="x">0</span>
</div>
<div className="nexus-s5-caption" data-s5-collider="metric-caption">Faster Direction</div>
</div>
</article>
<article className="nexus-s5-metric-card is-purple" data-s5-collider="metric-card">
<div className="nexus-s5-metric-inner">
<div className="nexus-s5-metric-top" data-s5-collider="metric-top">
<div className="nexus-s5-metric-label">Modes</div>
<span className="nexus-s5-dot" style={{'--delay': '-1.2s'}}></span>
</div>
<div className="nexus-s5-number" data-s5-collider="metric-number">
<span className="nexus-count" data-count="4" data-prefix="0">0</span>
</div>
<div className="nexus-s5-caption" data-s5-collider="metric-caption">Active Game Modes</div>
</div>
</article>
</div>

<div className="nexus-s5-board-grid">

<div className="nexus-s5-leaderboard" data-s5-collider="leaderboard">
<div className="nexus-s5-leaderboard-head" data-s5-collider="leaderboard-head">
<div>Rank</div>
<div>Player</div>
<div>Run Type</div>
<div className="text-right">Score</div>
</div>
<div className="nexus-s5-row" data-s5-collider="leaderboard-row">
<div className="nexus-s5-rank-number text-[#00f0ff]" data-s5-collider="rank">01</div>
<div>
<div className="nexus-s5-player-name" data-s5-collider="player-name">NovaByte</div>
<div className="nexus-s5-player-meta" data-s5-collider="player-meta">Visual System Run</div>
</div>
<div className="nexus-s5-run-type text-[#00f0ff]" data-s5-collider="run-type">Brand System</div>
<div className="nexus-s5-score text-[#00f0ff]" data-s5-collider="score">98,400</div>
</div>
<div className="nexus-s5-row" data-s5-collider="leaderboard-row">
<div className="nexus-s5-rank-number text-[#6f9bff]" data-s5-collider="rank">02</div>
<div>
<div className="nexus-s5-player-name" data-s5-collider="player-name">Mira Vector</div>
<div className="nexus-s5-player-meta" data-s5-collider="player-meta">Campaign Completion</div>
</div>
<div className="nexus-s5-run-type text-[#6f9bff]" data-s5-collider="run-type">Landing Page</div>
<div className="nexus-s5-score text-[#6f9bff]" data-s5-collider="score">87,200</div>
</div>
<div className="nexus-s5-row" data-s5-collider="leaderboard-row">
<div className="nexus-s5-rank-number text-[#ff66b3]" data-s5-collider="rank">03</div>
<div>
<div className="nexus-s5-player-name" data-s5-collider="player-name">PixelMancer</div>
<div className="nexus-s5-player-meta" data-s5-collider="player-meta">Motion Pattern Lock</div>
</div>
<div className="nexus-s5-run-type text-[#ff66b3]" data-s5-collider="run-type">Motion Concept</div>
<div className="nexus-s5-score text-[#ff66b3]" data-s5-collider="score">76,900</div>
</div>
<div className="nexus-s5-row" data-s5-collider="leaderboard-row">
<div className="nexus-s5-rank-number text-[#b45cff]" data-s5-collider="rank">04</div>
<div>
<div className="nexus-s5-player-name" data-s5-collider="player-name">Ryo Signal</div>
<div className="nexus-s5-player-meta" data-s5-collider="player-meta">Sandbox Remix Chain</div>
</div>
<div className="nexus-s5-run-type text-[#b45cff]" data-s5-collider="run-type">Visual Identity</div>
<div className="nexus-s5-score text-[#b45cff]" data-s5-collider="score">71,300</div>
</div>
</div>

<aside className="nexus-s5-current-run" data-s5-collider="current-run">
<div className="nexus-s5-run-panel">
<div className="flex items-center justify-between gap-5" data-s5-collider="run-header">
<div>
<div className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#00f0ff]/75">
                      Current Run
                    </div>
<div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.055em] text-white">
                      Arcade Mode
                    </div>
</div>
<div className="nexus-s5-run-icon" data-s5-collider="run-icon">
<iconify-icon className="text-3xl" icon="solar:gamepad-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="nexus-s5-progress-group" data-s5-collider="progress-group">
<div className="text-[#00f0ff]" data-s5-collider="progress-row">
<div className="nexus-s5-progress-label">
<span>World Stability</span>
<span>87%</span>
</div>
<div className="nexus-s5-progress-track">
<i className="nexus-s5-progress-fill" style={{'--target-width': '87%', '--delay': '0s'}}></i>
</div>
</div>
<div className="text-[#6f9bff]" data-s5-collider="progress-row">
<div className="nexus-s5-progress-label">
<span>Signal Clarity</span>
<span>74%</span>
</div>
<div className="nexus-s5-progress-track">
<i className="nexus-s5-progress-fill" style={{'--target-width': '74%', '--delay': '0.18s'}}></i>
</div>
</div>
<div className="text-[#ff66b3]" data-s5-collider="progress-row">
<div className="nexus-s5-progress-label">
<span>Remix Depth</span>
<span>91%</span>
</div>
<div className="nexus-s5-progress-track">
<i className="nexus-s5-progress-fill" style={{'--target-width': '91%', '--delay': '0.36s'}}></i>
</div>
</div>
</div>
<div className="nexus-s5-bonus" data-s5-collider="bonus">
<div className="nexus-s5-bonus-title" data-s5-collider="bonus-title">
                    Bonus Round
                  </div>
<p className="mt-3 text-sm leading-relaxed text-gray-300" data-s5-collider="bonus-copy">
                    Complete one more remix chain to unlock a cleaner system direction.
                  </p>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="nexus-s6-section" id="cheat-codes">
<div className="nexus-s6-stage" id="section-6-catcher">
<div className="nexus-s6-inner">

<div className="nexus-s6-header">
<div className="nexus-s6-eyebrow" data-s6-collider="eyebrow">
<span className="font-arcade text-2xl leading-none">//</span>
<span className="text-xs font-bold uppercase tracking-[0.28em]">Command layer</span>
</div>
<h2 className="nexus-s6-title">
<span className="line-one" data-s6-collider="headline">Cheat</span>
<span className="line-two" data-s6-collider="headline">Codes</span>
</h2>
<p className="nexus-s6-copy" data-s6-collider="subtitle">
          Not every creative problem needs a full rebuild. Sometimes you need the right command:
          lock the style, chain the remix, sync the section rhythm, or export the world.
        </p>
<div className="nexus-s6-command" data-s6-collider="main-command">
<div className="nexus-s6-command-inner">
<div>
<div className="nexus-s6-command-label" data-s6-collider="command-label">
                Enter code
              </div>
<div className="nexus-s6-command-code" data-s6-collider="command-code">
                &gt; unlock<span>_creative_system</span><span className="nexus-s6-cursor">_</span>
</div>
</div>
<div className="nexus-s6-command-button" data-s6-collider="command-button">
              Execute
            </div>
</div>
</div>
</div>

<div className="nexus-s6-layout">

<div className="nexus-s6-code-grid">

<article className="nexus-s6-card is-pink" data-s6-collider="code-card">
<div className="nexus-s6-card-inner">
<div className="nexus-s6-card-top" data-s6-collider="card-top">
<div className="nexus-s6-index" data-s6-collider="card-index">01</div>
<div className="nexus-s6-icon" data-s6-collider="card-icon">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
<h3 className="nexus-s6-card-title" data-s6-collider="card-title">STYLE_LOCK</h3>
<p className="nexus-s6-card-copy" data-s6-collider="card-copy">
                Preserve the strongest visual direction so future sections keep the same design DNA.
              </p>
<div className="nexus-s6-card-command" data-s6-collider="card-command">
<div className="nexus-s6-card-command-label">Command</div>
<div className="nexus-s6-card-command-code">/lock style --active</div>
</div>
</div>
</article>

<article className="nexus-s6-card is-purple" data-s6-collider="code-card">
<div className="nexus-s6-card-inner">
<div className="nexus-s6-card-top" data-s6-collider="card-top">
<div className="nexus-s6-index" data-s6-collider="card-index">02</div>
<div className="nexus-s6-icon" data-s6-collider="card-icon">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon>
</div>
</div>
<h3 className="nexus-s6-card-title" data-s6-collider="card-title">REMIX_CHAIN</h3>
<p className="nexus-s6-card-copy" data-s6-collider="card-copy">
                Create new variations from an existing direction without losing the original creative thread.
              </p>
<div className="nexus-s6-card-command" data-s6-collider="card-command">
<div className="nexus-s6-card-command-label">Command</div>
<div className="nexus-s6-card-command-code">/remix chain --x04</div>
</div>
</div>
</article>

<article className="nexus-s6-card is-blue" data-s6-collider="code-card">
<div className="nexus-s6-card-inner">
<div className="nexus-s6-card-top" data-s6-collider="card-top">
<div className="nexus-s6-index" data-s6-collider="card-index">03</div>
<div className="nexus-s6-icon" data-s6-collider="card-icon">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
</div>
<h3 className="nexus-s6-card-title" data-s6-collider="card-title">SECTION_SYNC</h3>
<p className="nexus-s6-card-copy" data-s6-collider="card-copy">
                Keep spacing, hierarchy, type scale, borders, and interaction logic consistent across the page.
              </p>
<div className="nexus-s6-card-command" data-s6-collider="card-command">
<div className="nexus-s6-card-command-label">Command</div>
<div className="nexus-s6-card-command-code">/sync sections --all</div>
</div>
</div>
</article>

<article className="nexus-s6-card is-cyan" data-s6-collider="code-card">
<div className="nexus-s6-card-inner">
<div className="nexus-s6-card-top" data-s6-collider="card-top">
<div className="nexus-s6-index" data-s6-collider="card-index">04</div>
<div className="nexus-s6-icon" data-s6-collider="card-icon">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
</div>
</div>
<h3 className="nexus-s6-card-title" data-s6-collider="card-title">BOSS_FIX</h3>
<p className="nexus-s6-card-copy" data-s6-collider="card-copy">
                Detect weak hierarchy, muddy contrast, generic UI patterns, and layout imbalance before shipping.
              </p>
<div className="nexus-s6-card-command" data-s6-collider="card-command">
<div className="nexus-s6-card-command-label">Command</div>
<div className="nexus-s6-card-command-code">/boss fix --critical</div>
</div>
</div>
</article>
</div>

<aside className="nexus-s6-terminal" data-s6-collider="terminal">
<div className="nexus-s6-terminal-inner">
<div className="nexus-s6-terminal-head" data-s6-collider="terminal-head">
<div>
<div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{color: 'rgba(244, 91, 168, 0.75)'}}>
                  Terminal
                </div>
<div className="mt-2 font-display text-3xl font-extrabold uppercase tracking-[-0.055em] text-white" data-s6-collider="terminal-title">
                  Code Console
                </div>
</div>
<div className="nexus-s6-dots" data-s6-collider="terminal-dots">
<span style={{background: 'var(--nexus-pink)', color: 'var(--nexus-pink)'}}></span>
<span style={{background: 'var(--nexus-purple)', color: 'var(--nexus-purple)'}}></span>
<span style={{background: 'var(--nexus-cyan)', color: 'var(--nexus-cyan)'}}></span>
</div>
</div>

<div className="nexus-s6-terminal-lines" data-s6-collider="terminal-lines">
<div data-s6-collider="terminal-line" style={{color: 'var(--nexus-pink)'}}>&gt; boot creative_engine</div>
<div className="text-gray-500" data-s6-collider="terminal-line">loading visual memory...</div>
<div data-s6-collider="terminal-line" style={{color: 'var(--nexus-purple)'}}>style map detected</div>
<div className="text-gray-500" data-s6-collider="terminal-line">checking section rhythm...</div>
<div data-s6-collider="terminal-line" style={{color: 'var(--nexus-cyan)'}}>generic patterns removed</div>
<div className="text-gray-500" data-s6-collider="terminal-line">stabilizing direction...</div>
<div data-s6-collider="terminal-line" style={{color: 'var(--nexus-pink)'}}>
                &gt; world_export ready<span className="nexus-s6-cursor">_</span>
</div>
</div>

<div className="nexus-s6-export" data-s6-collider="export">
<div className="nexus-s6-export-top" data-s6-collider="export-top">
<div>
<div className="text-[0.65rem] font-bold uppercase tracking-[0.24em]" style={{color: 'rgba(164, 119, 255, 0.75)'}}>
                    Final Code
                  </div>
<div className="nexus-s6-export-title" data-s6-collider="export-title">
                    WORLD_EXPORT
                  </div>
</div>
<div className="nexus-s6-export-icon" data-s6-collider="export-icon">
<iconify-icon className="text-3xl" icon="solar:export-linear"></iconify-icon>
</div>
</div>
<p className="mt-5 text-sm leading-relaxed" data-s6-collider="export-copy" style={{color: 'rgba(248, 243, 255, 0.70)'}}>
                Turn the final creative direction into a reusable HTML system with consistent visual rules.
              </p>
<div className="nexus-s6-meter-group" data-s6-collider="meter-group">
<div data-s6-collider="meter-row" style={{color: 'var(--nexus-pink)'}}>
<div className="nexus-s6-meter-label">
<span>Structure</span>
<span>94%</span>
</div>
<div className="nexus-s6-meter-track">
<i className="nexus-s6-meter-fill" style={{'--meter-width': '94%', '--delay': '0s'}}></i>
</div>
</div>
<div data-s6-collider="meter-row" style={{color: 'var(--nexus-purple)'}}>
<div className="nexus-s6-meter-label">
<span>Visual DNA</span>
<span>88%</span>
</div>
<div className="nexus-s6-meter-track">
<i className="nexus-s6-meter-fill" style={{'--meter-width': '88%', '--delay': '-0.8s'}}></i>
</div>
</div>
<div data-s6-collider="meter-row" style={{color: 'var(--nexus-cyan)'}}>
<div className="nexus-s6-meter-label">
<span>Export Readiness</span>
<span>97%</span>
</div>
<div className="nexus-s6-meter-track">
<i className="nexus-s6-meter-fill" style={{'--meter-width': '97%', '--delay': '-1.4s'}}></i>
</div>
</div>
</div>
</div>

<div className="nexus-s6-chip-row" data-s6-collider="chips">
<span className="nexus-s6-chip" data-s6-collider="chip" style={{'--delay': '0s', color: 'var(--nexus-pink)'}}>HTML</span>
<span className="nexus-s6-chip" data-s6-collider="chip" style={{'--delay': '-0.6s', color: 'var(--nexus-purple)'}}>Design DNA</span>
<span className="nexus-s6-chip" data-s6-collider="chip" style={{'--delay': '-1.2s', color: 'var(--nexus-cyan)'}}>Export</span>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="nexus-s7-section" id="join-the-guild">
<div className="nexus-s7-stage" id="section-7-catcher">
<div className="nexus-s7-inner">

<div className="nexus-s7-core" data-s7-collider="core">
<div className="nexus-s7-ring r1"></div>
<div className="nexus-s7-ring r2"></div>
<div className="nexus-s7-ring r3"></div>
<div className="nexus-s7-coin" data-s7-collider="coin">
<span className="font-arcade text-6xl leading-none">N</span>
</div>
</div>

<div className="nexus-s7-eyebrow" data-s7-collider="eyebrow">
<span className="font-arcade text-2xl leading-none">//</span>
<span className="text-xs font-bold uppercase tracking-[0.28em]">Final stage</span>
</div>

<h2 className="nexus-s7-title">
<span className="line-one" data-s7-collider="headline">Your Next</span><br/>
<span className="line-two" data-s7-collider="headline">World Is Waiting</span>
</h2>

<p className="nexus-s7-copy" data-s7-collider="subtitle">
        Start with a loose idea, a visual reference, or a messy prompt. NEXUS gives it a playable system,
        a sharper design direction, and a clearer path from chaos to finished creative work.
      </p>

<div className="nexus-s7-actions" data-s7-collider="buttons">
<a className="nexus-s7-button-primary" data-s7-collider="button" href="#">
          Insert Coin
          <iconify-icon className="text-2xl" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</a>
<a className="nexus-s7-button-secondary" data-s7-collider="button" href="#game-modes">
          Replay Modes
        </a>
</div>

<div className="nexus-s7-status" data-s7-collider="status">
<div className="nexus-s7-status-grid">
<div className="nexus-s7-status-item" data-s7-collider="status-card">
<div className="font-arcade text-4xl leading-none" style={{color: 'var(--nexus-cyan)'}}>
              128
            </div>
<div className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{color: 'rgba(248, 243, 255, 0.42)'}}>
              Input fragments
            </div>
</div>
<div className="nexus-s7-status-item" data-s7-collider="status-card">
<div className="font-arcade text-4xl leading-none" style={{color: 'var(--nexus-pink)'}}>
              42
            </div>
<div className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{color: 'rgba(248, 243, 255, 0.42)'}}>
              World collisions
            </div>
</div>
<div className="nexus-s7-status-item" data-s7-collider="status-card">
<div className="font-arcade text-4xl leading-none" style={{color: 'var(--nexus-gold)'}}>
              87%
            </div>
<div className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em]" style={{color: 'rgba(248, 243, 255, 0.42)'}}>
              World stability
            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="nexus-footer">
<div className="nexus-footer-shell">
<div className="nexus-footer-grid">

<div className="nexus-footer-logo">
<span className="nexus-footer-mark">
<span className="font-arcade text-3xl leading-none">N</span>
</span>
<span className="flex flex-col leading-none">
<span className="font-display text-[1.35rem] font-extrabold uppercase tracking-[-0.04em] text-white">
            Nexus
          </span>
<span className="mt-1 text-[0.56rem] font-bold uppercase tracking-[0.30em]" style={{color: 'rgba(232, 184, 93, 0.70)'}}>
            Idea Arcade
          </span>
</span>
</div>

<nav className="nexus-footer-nav">
<a className="nexus-footer-link" href="#hero">Arcade</a>
<a className="nexus-footer-link" href="#game-modes">Modes</a>
<a className="nexus-footer-link" href="#high-scores">Scores</a>
<a className="nexus-footer-link" href="#cheat-codes">Cheats</a>
<a className="nexus-footer-link" href="#join-the-guild">Guild</a>
</nav>

<div className="flex items-center justify-start gap-3 lg:justify-end">
<span className="h-2.5 w-2.5" style={{background: 'var(--nexus-cyan)', boxShadow: '0 0 12px rgba(53, 221, 242, 0.85)'}}></span>
<span className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{color: 'rgba(53, 221, 242, 0.78)'}}>
          Creative engine online
        </span>
</div>
</div>

<div className="nexus-footer-meta">
<span>© 2026 NEXUS Idea Arcade. All systems online.</span>
<span>Designed for creative collisions, remix chains, and playable worlds.</span>
</div>
</div>
</footer>
</div>



    </>
  );
}
