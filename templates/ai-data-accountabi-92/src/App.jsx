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



tailwind.config = {
theme: {
extend: {}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateValues = [0, 5, 6, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
}
});
const perspectiveUtilities = {
".perspective-[1000px]": { perspective: "1000px" },
};
addUtilities({
...rotateXUtilities,
...perspectiveUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      import * as THREE from 'https://esm.sh/three@0.160.0';

      /*
       * ==========================================
       * 1. THEME / CONSTANTS CONFIGURATION
       * ==========================================
       */
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const CONFIG = {
          scrollDistance: "+=3800",
          scrubSmoothing: 1,
          particleCount: 12000,
          particleSize: 1.5,
          spread: 2500,
          orbRadius: 280,
          cameraZStart: 600,
          cameraZEnd: 150,
          idleRotationSpeed: isReducedMotion ? 0.0001 : 0.0008,
          scrollRotationFactor: isReducedMotion ? 0 : 0.5
      };

      const state = {
          scrollProgress: 0,
          targetProgress: 0
      };

      const THEMES = [
          { id: '#pinned-stage', bg: '#030303', accent: '#A3FF00', border: '#1e1e1e', panel: 'rgba(20, 20, 20, 0.4)' },
          { id: '#about',    bg: '#050508', accent: '#85CC00', border: '#1a1c23', panel: 'rgba(15, 20, 30, 0.4)' },
          { id: '#problem',     bg: '#02040a', accent: '#A3FF00', border: '#161b22', panel: 'rgba(10, 15, 25, 0.4)' },
          { id: '#solution',    bg: '#000000', accent: '#6BA300', border: '#171717', panel: 'rgba(15, 15, 15, 0.4)' },
          { id: '#how-it-works',      bg: '#05030a', accent: '#A3FF00', border: '#201633', panel: 'rgba(20, 15, 35, 0.4)' },
          { id: '#testimonials',      bg: '#020202', accent: '#A3FF00', border: '#111111', panel: 'rgba(10, 10, 10, 0.4)' },
          { id: '#roi-carousel', bg: '#030303', accent: '#A3FF00', border: '#1e1e1e', panel: 'rgba(20, 20, 20, 0.4)' },
          { id: '#demo',       bg: '#000000', accent: '#A3FF00', border: '#1a1a1a', panel: 'rgba(15, 15, 15, 0.4)' }
      ];

      /*
       * ==========================================
       * 2. WEBGL SUBSYSTEM (Three.js)
       * ==========================================
       */
      let scene, camera, renderer, particles;
      const webglState = {
          fieldPositions: null,
          orbPositions: null
      };

      const themeProxy = {
          bg: new THREE.Color(THEMES[0].bg),
          accent: new THREE.Color(THEMES[0].accent)
      };

      function initWebGL() {
          const container = document.getElementById('webgl-container');

          scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(themeProxy.bg.getHex(), 0.0015);
          scene.background = themeProxy.bg;

          camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
          camera.position.z = CONFIG.cameraZStart;

          renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          renderer.setSize(window.innerWidth, window.innerHeight);
          container.appendChild(renderer.domElement);

          initParticles();
          window.addEventListener('resize', resizeWebGL);
          renderWebGL();
      }

      function initParticles() {
          const geometry = new THREE.BufferGeometry();
          const vertices = new Float32Array(CONFIG.particleCount * 3);

          webglState.fieldPositions = new Float32Array(CONFIG.particleCount * 3);
          webglState.orbPositions = new Float32Array(CONFIG.particleCount * 3);

          for (let i = 0; i < CONFIG.particleCount; i++) {
              // Field distribution
              webglState.fieldPositions[i*3] = (Math.random() - 0.5) * CONFIG.spread;
              webglState.fieldPositions[i*3+1] = (Math.random() - 0.5) * CONFIG.spread;
              webglState.fieldPositions[i*3+2] = (Math.random() - 0.5) * CONFIG.spread;

              // Orb distribution
              const u = Math.random();
              const v = Math.random();
              const theta = 2 * Math.PI * u;
              const phi = Math.acos(2 * v - 1);
              const r = CONFIG.orbRadius * Math.cbrt(Math.random());

              webglState.orbPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
              webglState.orbPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
              webglState.orbPositions[i*3+2] = r * Math.cos(phi);

              // Initial position (Orb)
              vertices[i*3] = webglState.orbPositions[i*3];
              vertices[i*3+1] = webglState.orbPositions[i*3+1];
              vertices[i*3+2] = webglState.orbPositions[i*3+2];
          }

          geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

          const material = new THREE.PointsMaterial({
              color: themeProxy.accent,
              size: CONFIG.particleSize,
              sizeAttenuation: true,
              transparent: true,
              opacity: 0.8,
              blending: THREE.AdditiveBlending,
              depthWrite: false
          });

          particles = new THREE.Points(geometry, material);
          scene.add(particles);
      }

      function resizeWebGL() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      }

      function renderWebGL() {
          requestAnimationFrame(renderWebGL);

          if (particles) {
              // Base rotation
              particles.rotation.y += CONFIG.idleRotationSpeed;

              // Add scroll-based rotation momentum
              if (!isReducedMotion) {
                  particles.rotation.y += (state.targetProgress - state.scrollProgress) * CONFIG.scrollRotationFactor;
              }
          }

          // Smoothly interpolate scroll progress for WebGL
          state.scrollProgress += (state.targetProgress - state.scrollProgress) * 0.05;

          // Update scene colors based on theme switching
          scene.fog.color.copy(themeProxy.bg);
          scene.background.copy(themeProxy.bg);

          if (particles) {
              particles.material.color.copy(themeProxy.accent);

              // Interpolate vertex positions (Orb -> Field) based on scroll progress
              const positions = particles.geometry.attributes.position.array;
              for(let i = 0; i < CONFIG.particleCount; i++) {
                  const idx = i * 3;
                  positions[idx] = THREE.MathUtils.lerp(webglState.orbPositions[idx], webglState.fieldPositions[idx], state.scrollProgress);
                  positions[idx+1] = THREE.MathUtils.lerp(webglState.orbPositions[idx+1], webglState.fieldPositions[idx+1], state.scrollProgress);
                  positions[idx+2] = THREE.MathUtils.lerp(webglState.orbPositions[idx+2], webglState.fieldPositions[idx+2], state.scrollProgress);
              }
              particles.geometry.attributes.position.needsUpdate = true;

              // Interpolate Camera Depth
              camera.position.z = THREE.MathUtils.lerp(CONFIG.cameraZStart, CONFIG.cameraZEnd, state.scrollProgress);
          }

          renderer.render(scene, camera);
      }


      /*
       * ==========================================
       * 3. GSAP, LENIS & DOM ANIMATIONS
       * ==========================================
       */

      // Initialize Lenis Smooth Scroll
      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
      });

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
      window.lenis = lenis; // Export to window for click handlers

      // Init App
      window.addEventListener('DOMContentLoaded', () => {
          gsap.registerPlugin(ScrollTrigger);
          initWebGL();
          initScrollAnimations();
          initIntroAnimation();
          initMarquee();
      });

      function initIntroAnimation() {
          const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

          tl.to('.line-content', {
              y: 0,
              duration: 1.2,
              stagger: 0.1,
              delay: 0.2
          })
          .to(['#hero-descriptor', '#hero-ctas'], {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.15
          }, "-=0.6")
          .to(['#ui-top', '#ui-bottom'], {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.1
          }, "-=0.8")
          .call(() => {
              document.body.classList.add('nav-ready');
          });
      }

      function initScrollAnimations() {
          // Pinned Stage Timeline
          const stageTl = gsap.timeline({
              scrollTrigger: {
                  trigger: '#pinned-stage',
                  start: 'top top',
                  end: CONFIG.scrollDistance,
                  scrub: CONFIG.scrubSmoothing,
                  pin: true,
                  onUpdate: (self) => {
                      state.targetProgress = self.progress;
                      gsap.set('#scroll-progress', { scaleY: self.progress });
                  }
              }
          });

          // Stage Sequence (Phase 1 -> Phase 2 -> Phase 3 -> Phase 4)
          stageTl
              // Phase 1 Fade out
              .to('#phase-1-content', { opacity: 0, scale: 0.95, filter: 'blur(10px)', duration: 1 })
              // Phase 2 Fade In
              .to('#phase-2-content', { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1 }, "-=0.5")
              .to('#phase-2-scanline', { opacity: 1, top: '110%', duration: 1.5, ease: 'none' }, "-=1")
              // Phase 2 Fade Out
              .to('#phase-2-content', { opacity: 0, filter: 'blur(10px)', scale: 1.05, duration: 1 })
              // Phase 3 Cards In
              .to('#phase-3-content', { opacity: 1, duration: 0.5 }, "-=0.5")
              .to('#phase-3-intro', { opacity: 1, y: 0, duration: 1 }, "-=0.5")
              .fromTo('.feature-card',
                  { opacity: 0, y: 40, rotateX: 10 },
                  { opacity: 1, y: 0, rotateX: 0, stagger: 0.1, duration: 1, ease: 'power2.out' }, "-=0.5"
              )
              // Phase 3 Fade Out
              .to('#phase-3-content', { opacity: 0, y: -50, filter: 'blur(10px)', duration: 1 })
              // Phase 4 Bridge In
              .to('#bridge-content', { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1 }, "-=0.5")
              .to('.bridge-stagger', { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.out' }, "-=0.5");


          // Theme Switching
          THEMES.forEach((theme, index) => {
              ScrollTrigger.create({
                  trigger: theme.id,
                  start: index === 0 ? 'top bottom' : 'top center',
                  end: 'bottom center',
                  onEnter: () => applyTheme(theme),
                  onEnterBack: () => applyTheme(theme)
              });
          });

          // Reveal Blocks (Fade up content as you scroll)
          gsap.utils.toArray('.reveal-block').forEach(block => {
              const items = block.querySelectorAll('.reveal-item');
              const texts = block.querySelectorAll('.reveal-text');

              const tl = gsap.timeline({
                  scrollTrigger: {
                      trigger: block,
                      start: 'top 85%',
                  }
              });

              if(texts.length) {
                  tl.fromTo(texts,
                      { y: '100%', opacity: 0 },
                      { y: '0%', opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' }
                  );
              }

              if(items.length) {
                  tl.fromTo(items,
                      { y: 30, opacity: 0 },
                      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
                      texts.length ? "-=0.5" : 0
                  );
              }
          });

          // Update Nav Active States
          const sections = document.querySelectorAll("section[id]");
          const navLinks = document.querySelectorAll(".nav-link");

          sections.forEach((section) => {
              ScrollTrigger.create({
                  trigger: section,
                  start: "top center",
                  end: "bottom center",
                  onToggle: (self) => {
                      if (self.isActive) {
                          const id = section.getAttribute("id");
                          navLinks.forEach((link) => {
                              link.classList.remove("is-active");
                              if (link.getAttribute("href") === `#${id}`) {
                                  link.classList.add("is-active");
                              }
                          });
                      }
                  }
              });
          });
      }

      function applyTheme(theme) {
          // Apply CSS Variables to DOM
          gsap.to('body', {
              '--bg': theme.bg,
              '--accent': theme.accent,
              '--border': theme.border,
              '--panel': theme.panel,
              duration: 0.8,
              ease: 'power2.out'
          });

          // Apply to WebGL Proxy Colors
          gsap.to(themeProxy.bg, {
              r: new THREE.Color(theme.bg).r,
              g: new THREE.Color(theme.bg).g,
              b: new THREE.Color(theme.bg).b,
              duration: 0.8
          });
          gsap.to(themeProxy.accent, {
              r: new THREE.Color(theme.accent).r,
              g: new THREE.Color(theme.accent).g,
              b: new THREE.Color(theme.accent).b,
              duration: 0.8
          });
      }

      function initMarquee() {
          const track = document.querySelector('#logo-marquee');
          if(!track) return;

          // Clone track for infinite loop
          const clone = track.firstElementChild.cloneNode(true);
          track.appendChild(clone);

          // Animate
          gsap.to(track, {
              xPercent: -50,
              repeat: -1,
              duration: 20,
              ease: 'linear'
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg)]/60 border-b border-[var(--border)] transition-colors duration-700 pointer-events-none">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
<div className="flex-1 pointer-events-auto flex items-center">
<div className="cursor-pointer flex items-center font-sans font-black text-[24px] md:text-[28px] tracking-tighter" onclick="lenis.scrollTo('#pinned-stage')">
<span className="text-[#45b458]" style={{textShadow: '1px 2px 3px rgba(0,0,0,0.5)'}}>
              DΛTΛ
            </span>
<span className="text-[#204378]" style={{textShadow: '0px 1px 2px rgba(255,255,255,0.3)'}}>
              SCRUBBER.Λ
              <span className="text-[#45b458]">i</span>
</span>
</div>
</div>
<div className="flex-none hidden lg:flex gap-8 items-center pointer-events-auto">
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] transition-colors relative pb-1" href="#about">
            About
          </a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] transition-colors relative pb-1" href="#problem">
            Problem
          </a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] transition-colors relative pb-1" href="#solution">
            Solution
          </a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] transition-colors relative pb-1" href="#how-it-works">
            How It Works
          </a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] transition-colors relative pb-1" href="#testimonials">
            Testimonials
          </a>
<a className="nav-link text-xs uppercase tracking-widest text-[var(--muted)] transition-colors relative pb-1" href="#demo">
            Demo
          </a>
</div>
<div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
<div className="hidden xl:flex flex-col items-end text-[10px] tracking-widest uppercase text-[var(--muted)]">
<span className="text-[var(--accent)] flex items-center gap-2">
<span className="w-1 h-1 bg-[var(--accent)] block rounded-none animate-pulse"></span>
              System.Online
            </span>
<span>Latency: 12ms</span>
</div>
<a className="text-xs uppercase tracking-widest border border-[var(--border)] bg-transparent px-6 py-2.5 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors font-medium rounded-none focus:outline-none text-[var(--fg)] flex items-center justify-center" href="https://calendly.com/yasminegardiner/1-1-with-clearsetai" target="_blank">
            BOOK A DEMO
          </a>
</div>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none w-full h-full" id="webgl-container">
<div className="absolute inset-0 bg-noise z-10"></div>
</div>

<main className="relative z-10 w-full pb-24" id="app-wrapper">

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent" id="pinned-stage">
<div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 md:px-12 md:py-8 mt-16">
<div className="flex justify-between items-center opacity-0 translate-y-[-10px]" id="ui-top">
<div className="text-[10px] font-medium tracking-widest uppercase flex items-center gap-3">
<span className="text-[var(--muted)]">SYS.01</span>
</div>
<div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium">
              Index / 00
            </div>
</div>
<div className="flex justify-between items-end opacity-0 translate-y-[10px]" id="ui-bottom">
<div className="flex flex-col gap-1 text-[10px] text-[var(--muted)] font-medium tracking-widest uppercase">
<span>Status: Cleaned Data</span>
<span>Render: Native</span>
</div>
<div className="flex flex-col items-end gap-3 text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium">
<span>Depth Mapping</span>
<div className="w-[1px] h-12 bg-[var(--border)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[var(--accent)] transform origin-top scale-y-0 will-change-transform" id="scroll-progress"></div>
</div>
</div>
</div>
</div>
<div className="flex w-full z-20 px-6 absolute inset-0 items-center justify-center perspective-[1000px]">

<div className="absolute flex flex-col items-center justify-center text-center w-full pointer-events-auto px-4" id="phase-1-content">
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-5xl lg:text-7xl tracking-tight font-medium flex flex-col items-center mb-6 drop-shadow-2xl">
<span className="line-wrapper">
<span className="line-content whitespace-nowrap text-[var(--fg)] font-display opacity-1" style={{transform: 'translateY(125%)'}}>
                    Detect and correct
                  </span>
</span>
<span className="line-wrapper">
<span className="line-content whitespace-nowrap text-[var(--muted)] font-display opacity-1" style={{transform: 'translateY(125%)'}}>
                    data errors.
                  </span>
</span>
</h2>
<div className="flex flex-col items-center gap-4 mt-2 opacity-0 translate-y-[15px]" id="hero-descriptor">
<span className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-medium">
                  Transform Data Into Decision Intelligence
                </span>
<p className="text-lg text-[var(--muted)] font-normal max-w-xl">
                  A business intelligence system that transforms garbage data
                  into metrics and recommendations to reveal insights that
                  bridges gaps amongst teams—all from one centralized hub.
                </p>
</div>
<div className="flex gap-4 mt-10 opacity-0 translate-y-[15px]" id="hero-ctas">
<a className="px-8 py-4 text-xs tracking-widest uppercase font-medium bg-[var(--accent)] text-black hover:bg-white transition-colors duration-300 rounded-none focus:outline-none flex items-center justify-center" href="https://calendly.com/yasminegardiner/1-1-with-clearsetai" target="_blank">
                  BOOK A DEMO
                </a>
<button className="px-8 py-4 text-xs tracking-widest uppercase font-medium border border-[var(--border)] bg-black/50 backdrop-blur-md text-[var(--fg)] hover:bg-[var(--fg)] hover:text-black transition-colors duration-300 rounded-none focus:outline-none hidden sm:block" onclick="lenis.scrollTo('#how-it-works')">
                  HOW IT WORKS
                </button>
</div>
</div>
</div>

<div className="absolute inset-0 w-full flex flex-col items-center justify-center text-center opacity-0 pointer-events-none blur-[6px] scale-[0.98] px-4 overflow-hidden" id="phase-2-content">
<div className="absolute inset-0 pointer-events-none" id="phase-2-grid"></div>
<div className="absolute left-0 right-0 h-px pointer-events-none" id="phase-2-scanline"></div>
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16 relative z-10">
<h3 className="text-2xl md:text-4xl tracking-tight font-normal leading-relaxed text-[var(--fg)] drop-shadow-2xl">
                Elite advisory for
                <br/>
<span className="text-[var(--muted)]">
                  organizations business intelligence.
                </span>
</h3>
</div>
</div>

<div className="absolute w-full flex flex-col items-center justify-center opacity-0 pointer-events-none px-4" id="phase-3-content">
<div className="w-full max-w-[980px] mx-auto text-center mb-6 px-6 opacity-0 translate-y-[20px]" id="phase-3-intro">
<div className="text-[10px] text-[var(--muted)] font-medium tracking-widest mb-3 uppercase">
                SYS.02 / TRANSFORMATION MINDSET
              </div>
<h3 className="text-2xl md:text-3xl tracking-tight text-[var(--fg)] font-normal mb-2">
                We approach performance the way KPIs do.
              </h3>
<p className="text-lg text-[var(--muted)] font-normal max-w-xl mx-auto">
                Finding data inaccuracies and metrics before decision-making.
              </p>
</div>

<div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:target-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">
                      01
                    </span>
</div>
<h4 className="text-xl tracking-tight font-normal text-[var(--fg)] mb-2 group-hover:text-white transition-colors">
                    Upload Your Data
                  </h4>
<p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                    Seamlessly import datasets from multiple sources into our
                    centralized platform with enterprise-grade security.
                  </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:test-tube-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">
                      02
                    </span>
</div>
<h4 className="text-xl tracking-tight font-normal text-[var(--fg)] mb-2 group-hover:text-white transition-colors">
                    Ask Questions
                  </h4>
<p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                    Use our conversational AI to query your data in natural
                    language—no coding required for instant insights.
                  </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:map-arrow-up-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">
                      03
                    </span>
</div>
<h4 className="text-xl tracking-tight font-normal text-[var(--fg)] mb-2 group-hover:text-white transition-colors">
                    Receive Insights
                  </h4>
<p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                    Every finding is translated into actionable risk remediation
                    guidance and impact.
                  </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="feature-card aspect-[3/4] bg-[rgba(15,15,15,0.4)] backdrop-blur-xl border border-[var(--border)] flex flex-col rounded-none group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--muted)]">
<div className="aspect-video w-full border-b border-[var(--border)] bg-[var(--panel)] flex flex-col relative z-20 group-hover:bg-[rgba(25,25,25,0.5)] transition-colors duration-500">
<div className="h-5 border-b border-[var(--border)] flex items-center px-2 gap-1.5 bg-black/40">
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
<div className="w-1 h-1 bg-[var(--border)]"></div>
</div>
<div className="flex-1 flex items-center justify-center w-full h-full">
<iconify-icon className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" icon="solar:library-linear" width="46"></iconify-icon>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end z-20">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-medium">
                      04
                    </span>
</div>
<h4 className="text-xl tracking-tight font-normal text-[var(--fg)] mb-2 group-hover:text-white transition-colors">
                    Track &amp; Manage
                  </h4>
<p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                    Store, track, and manage your data's entire lifecycle in one
                    centralized hub with full governance control.
                  </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
</div>
</div>

<div className="absolute flex flex-col items-center justify-center text-center w-full opacity-0 pointer-events-none blur-[10px] translate-y-[20px] px-4" id="bridge-content">
<div className="w-full max-w-[980px] mx-auto flex flex-col items-center py-12 md:py-16">
<div className="bridge-stagger text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase flex items-center gap-3 drop-shadow-xl opacity-0 translate-y-[12px]">
<div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-none"></div>
                [ DATA_SCRUBBING ]
              </div>
<h2 className="bridge-stagger text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--fg)] font-normal drop-shadow-2xl mb-4 opacity-0 translate-y-[12px]">
                We don't just find duplicates.
              </h2>
<p className="bridge-stagger text-lg md:text-xl text-[var(--muted)] font-normal max-w-[680px] mx-auto mb-2 opacity-0 translate-y-[12px]">
                We correct them as we monitor garbage data
              </p>
<p className="bridge-stagger text-lg md:text-xl text-[var(--fg)] font-normal max-w-[680px] mx-auto opacity-0 translate-y-[12px]">
                to prevent a model that outputs
                <span className="text-[var(--accent)]">garbage results.</span>
</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-4 md:px-8 z-10 w-full reveal-block" id="about">
<div className="section-slab">
<div className="section-inner max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5 flex flex-col justify-start">
<div className="text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase flex items-center gap-3 reveal-item">
<div className="w-1.5 h-1.5 bg-[var(--accent)] animate-pulse"></div>
                  [ ABOUT_US ]
                </div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[var(--fg)] mb-6 reveal-item">
                  We exist to eliminate garbage data.
                </h2>
<p className="text-lg text-[var(--muted)] leading-relaxed font-normal mb-8 reveal-item">
                  Our mission is to guide and support enterprises by providing a
                  safe, modern software to clean, organize, secure, and validate
                  their data. Our vision combines conversational AI with a
                  comprehensive data cleaning management, enabling natural
                  language queries without coding requirements.
                </p>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 reveal-item">
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
<h3 className="text-lg font-normal text-[var(--fg)] tracking-tight">
                    Data Scrubbing
                  </h3>
<p className="text-base text-[var(--muted)] leading-relaxed font-normal">
                    We detect, correct, and or remove corrupt, incomplete,
                    incorrectly formatted, or duplicate data within a dataset
                    such as spreadsheets or API to your data source. Our
                    technology can autocorrect sensitive information such as PII
                    and SSN for your organization.
                  </p>
</div>
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:code-scan-linear" width="24"></iconify-icon>
<h3 className="text-lg font-normal text-[var(--fg)] tracking-tight">
                    Business Intelligence
                  </h3>
<p className="text-base text-[var(--muted)] leading-relaxed font-normal">
                    Unlocking insights to make ethical, strategic decisions. Our
                    tool analyzes your organization's historical and current
                    data to present findings and recommendations in an intuitive
                    visual format with a step-by-step documentation.
                  </p>
</div>
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:graph-up-linear" width="24"></iconify-icon>
<h3 className="text-lg font-normal text-[var(--fg)] tracking-tight">
                    Communication Bridge
                  </h3>
<p className="text-base text-[var(--muted)] leading-relaxed font-normal">
                    Non-technical and technical teams can communicate best
                    practices, stakeholder intelligence, and recommendations
                    from documentation generated within your DataScrubber.AI
                    analysis workflow silo.
                  </p>
</div>
<div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4">
<iconify-icon className="text-[var(--accent)]" icon="solar:ghost-smile-linear" width="24"></iconify-icon>
<h3 className="text-lg font-normal text-[var(--fg)] tracking-tight">
                    Data Accountability
                  </h3>
<p className="text-base text-[var(--muted)] leading-relaxed font-normal">
                    Structure your organization's obligation to collect, use,
                    store, and delete data ensuring it is ethical, secure, and
                    compliant with ongoing regulations.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="problem">
<div className="section-slab">
<div className="section-inner max-w-4xl mx-auto text-center flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[var(--fg)] mb-8 flex flex-col items-center">
<span className="overflow-hidden pb-2 block">
<span className="block reveal-text">The Problem</span>
</span>
<span className="overflow-hidden pb-2 block text-[var(--muted)] text-2xl md:text-3xl mt-2">
<span className="block reveal-text">
                  Lack of Data Accountability.
                </span>
</span>
</h2>
<p className="text-lg text-[var(--muted)] mb-10 max-w-2xl leading-relaxed font-normal reveal-item">
              Non-technical teams and technical teams aren’t communicating
              effectively due to lack of understanding, inaccurate data, and
              failed data accountability.
            </p>
<div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center text-xs text-[var(--muted)] mb-12 font-mono uppercase tracking-widest reveal-item">
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">01</span>
                DATA SCRUBBING
              </div>
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">02</span>
                CONVERSATIONAL AI
              </div>
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">03</span>
                DOCUMENTATION ANALYSIS
              </div>
<div className="flex items-center gap-3">
<span className="text-[var(--accent)]">04</span>
                DATA LIBRARY
              </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full reveal-item">
<a className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest uppercase font-medium bg-[var(--accent)] text-black hover:bg-white transition-colors duration-300 focus:outline-none flex items-center justify-center" href="https://calendly.com/yasminegardiner/1-1-with-clearsetai" target="_blank">
                BOOK A DEMO
              </a>
<button className="w-full sm:w-auto px-8 py-4 text-xs tracking-widest uppercase font-medium border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--fg)] hover:text-black transition-colors duration-300 focus:outline-none" onclick="lenis.scrollTo('#testimonials')">
                TESTIMONIALS
              </button>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="solution">
<div className="section-slab">
<div className="section-inner max-w-4xl mx-auto">
<div className="reveal-item">
<div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] mb-8 bg-[var(--bg)] p-3 border border-[var(--border)] w-max">
<span className="text-[var(--accent)]">CLEANING</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>INSIGHTS</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>DOCUMENTING</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-[var(--fg)]">GOVERNANCE</span>
</div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[var(--fg)] mb-6 flex flex-col">
<span className="overflow-hidden pb-1 block">
<span className="block reveal-text">
                    Garbage Data In, Cleaned Data Out
                  </span>
</span>
</h2>
<p className="text-lg text-[var(--muted)] mb-10 leading-relaxed font-normal reveal-item">
                Every analysis concludes with a comprehensive documentation
                designed for internal teams and organizational leadership.
              </p>
<ul className="text-lg text-[var(--fg)] font-normal reveal-item grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="leading-relaxed text-[var(--fg)]">
                    We provide enterprises a boost in performance, improve ROI,
                    identify market trends, and make faster, data-driven
                    decisions in centralized hub.
                  </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="leading-relaxed text-[var(--fg)]">
                    Teams spend 80% of their time preparing data metrics instead
                    of analyzing insights. Our automation lets your team focus
                    on insights, not preparation.
                  </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="leading-relaxed text-[var(--fg)]">
                    Robust automation for detecting and fixing data errors
                    efficiently, eliminating manual processes that slow down
                    your workflow.
                  </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="leading-relaxed text-[var(--fg)]">
                    Existing tools struggle with massive datasets and real-time
                    data streams, causing bottlenecks. Our platform scales with
                    your business.
                  </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="leading-relaxed text-[var(--fg)]">
                    Lack of data governance accountability creates compliance
                    and quality risks. Our built-in governance ensures
                    compliance and quality assurance.
                  </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="leading-relaxed text-[var(--fg)]">
                    Query your data in natural language—no coding required. Ask
                    questions and receive actionable insights instantly.
                  </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[var(--accent)] mt-0.5 flex-shrink-0" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="leading-relaxed text-[var(--fg)]">
                    Store, track, and manage your data's entire lifecycle in one
                    centralized platform with comprehensive reporting.
                  </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="how-it-works">
<div className="section-slab">
<div className="section-inner max-w-7xl mx-auto">
<div className="mb-12 text-center reveal-item">
<div className="text-xs text-[var(--muted)] font-medium tracking-widest mb-4 uppercase">
                SYS.03 / HOW IT WORKS
              </div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[var(--fg)] mb-4">
                Our Solution Process
              </h2>
<p className="text-lg text-[var(--muted)] font-normal max-w-3xl mx-auto leading-relaxed">
                Four streamlined steps to transform your data into actionable
                insights and measurable ROI. Reduce team collaboration time by
                minimum 40% with automated workflows.
              </p>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 text-xs uppercase tracking-widest text-[var(--muted)] font-medium reveal-item">
<span className="text-[var(--fg)]">Upload Your Data</span>
<iconify-icon className="hidden md:block text-[var(--accent)]" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<iconify-icon className="md:hidden text-[var(--accent)]" icon="solar:arrow-down-linear" width="16"></iconify-icon>
<span className="text-[var(--fg)]">Ask Questions</span>
<iconify-icon className="hidden md:block text-[var(--accent)]" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<iconify-icon className="md:hidden text-[var(--accent)]" icon="solar:arrow-down-linear" width="16"></iconify-icon>
<span className="text-[var(--fg)]">Receive Insights</span>
<iconify-icon className="hidden md:block text-[var(--accent)]" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<iconify-icon className="md:hidden text-[var(--accent)]" icon="solar:arrow-down-linear" width="16"></iconify-icon>
<span className="text-[var(--accent)]">Track &amp; Manage</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 reveal-item">

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<div className="aspect-video w-full bg-[#0a0a0a] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center p-6">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,255,0,0.05)_0,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(163,255,0,0.1)_0,transparent_70%)] transition-all duration-700"></div>
<div className="flex flex-col items-center gap-6 relative z-10">
<iconify-icon className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-500" icon="solar:server-square-linear" width="48"></iconify-icon>
<div className="flex gap-3">
<div className="w-1.5 h-1.5 rounded-none bg-[var(--muted)] group-hover:bg-[var(--accent)] animate-pulse" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 rounded-none bg-[var(--muted)] group-hover:bg-[var(--accent)] animate-pulse" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 rounded-none bg-[var(--muted)] group-hover:bg-[var(--accent)] animate-pulse" style={{animationDelay: '300ms'}}></div>
</div>
<div className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="text-xs uppercase tracking-widest text-[var(--muted)] font-medium mb-3 flex items-center gap-2">
<span className="text-[var(--accent)]">01</span>
                    / Input
                  </div>
<h3 className="text-xl text-[var(--fg)] font-normal tracking-tight mb-3 group-hover:text-white transition-colors">
                    Upload your data
                  </h3>
<p className="text-lg text-[var(--muted)] font-normal leading-relaxed">
                    Securely ingest structured and unstructured datasets from
                    multiple sources. Our system automatically parses, cleanses,
                    and prepares your data for analysis in an isolated,
                    encrypted environment.
                  </p>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<div className="aspect-video w-full bg-[#0a0a0a] border-b border-[var(--border)] relative overflow-hidden flex flex-col items-start justify-center p-8 gap-5">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
<div className="w-3/4 h-10 bg-[var(--bg)] border border-[var(--border)] rounded-none flex items-center px-4 relative group-hover:border-[var(--muted)] transition-colors">
<div className="w-2 h-2 bg-[var(--muted)] rounded-none animate-pulse"></div>
</div>
<div className="w-2/3 h-10 bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-none self-end flex items-center px-4 relative group-hover:bg-[var(--accent)]/10 transition-colors">
<div className="w-full h-1 bg-[var(--accent)]/40 rounded-none overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-[var(--accent)] w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></div>
</div>
</div>
<div className="w-1/2 h-10 bg-[var(--bg)] border border-[var(--border)] rounded-none flex items-center px-4 group-hover:border-[var(--muted)] transition-colors">
<div className="w-2 h-2 bg-[var(--muted)] rounded-none animate-pulse" style={{animationDelay: '500ms'}}></div>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="text-xs uppercase tracking-widest text-[var(--muted)] font-medium mb-3 flex items-center gap-2">
<span className="text-[var(--accent)]">02</span>
                    / Query
                  </div>
<h3 className="text-xl text-[var(--fg)] font-normal tracking-tight mb-3 group-hover:text-white transition-colors">
                    Ask questions about your data
                  </h3>
<p className="text-lg text-[var(--muted)] font-normal leading-relaxed">
                    Interact with your data using natural language. Our
                    conversational AI translates your business questions into
                    complex queries instantly, eliminating the need for SQL or
                    specialized data science skills.
                  </p>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<div className="aspect-video w-full bg-[#0a0a0a] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center p-8">
<div className="absolute right-0 top-0 w-32 h-32 bg-[var(--accent)] opacity-[0.03] blur-3xl group-hover:opacity-[0.08] transition-opacity duration-700"></div>
<div className="w-full max-w-sm border border-[var(--border)] bg-[var(--bg)] p-5 flex flex-col gap-4 group-hover:-translate-y-1 transition-transform duration-500 shadow-2xl">
<div className="w-1/3 h-1.5 bg-[var(--muted)] rounded-none"></div>
<div className="w-full h-px bg-[var(--border)]"></div>
<div className="flex gap-4 w-full items-start">
<iconify-icon className="text-[var(--accent)] flex-shrink-0 mt-0.5" icon="solar:bolt-linear" width="20"></iconify-icon>
<div className="flex flex-col gap-2 w-full mt-1">
<div className="w-full h-1.5 bg-[var(--border)] rounded-none relative overflow-hidden">
<div className="absolute inset-0 bg-[var(--muted)] w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
</div>
<div className="w-4/5 h-1.5 bg-[var(--border)] rounded-none relative overflow-hidden">
<div className="absolute inset-0 bg-[var(--muted)] w-0 group-hover:w-full transition-all duration-1000 delay-150 ease-out"></div>
</div>
</div>
</div>
<div className="flex gap-4 w-full items-start mt-2">
<iconify-icon className="text-[var(--muted)] flex-shrink-0 mt-0.5 group-hover:text-[var(--accent)] transition-colors" icon="solar:code-linear" width="20"></iconify-icon>
<div className="w-full h-16 bg-[#050505] border border-[var(--border)] rounded-none p-3 flex flex-col gap-2">
<div className="w-1/2 h-1 bg-[var(--muted)]/30 rounded-none"></div>
<div className="w-3/4 h-1 bg-[var(--muted)]/30 rounded-none ml-4"></div>
<div className="w-1/3 h-1 bg-[var(--accent)]/50 rounded-none ml-4"></div>
</div>
</div>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="text-xs uppercase tracking-widest text-[var(--muted)] font-medium mb-3 flex items-center gap-2">
<span className="text-[var(--accent)]">03</span>
                    / Output
                  </div>
<h3 className="text-xl text-[var(--fg)] font-normal tracking-tight mb-3 group-hover:text-white transition-colors">
                    Receive insights &amp; generated code
                  </h3>
<p className="text-lg text-[var(--muted)] font-normal leading-relaxed">
                    Receive comprehensive documents containing clear insights,
                    strategic recommendations, and generated code snippets. Move
                    from raw data to executable action plans in seconds.
                  </p>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<div className="aspect-video w-full bg-[#0a0a0a] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center p-8">
<div className="grid grid-cols-3 gap-4 w-full h-full max-w-sm">
<div className="col-span-2 bg-[var(--bg)] border border-[var(--border)] rounded-none flex items-end p-4 gap-3 relative overflow-hidden group-hover:border-[var(--muted)] transition-colors">
<div className="w-full bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-colors h-[40%] rounded-none relative">
<div className="absolute top-0 w-full h-px bg-[var(--accent)]/50"></div>
</div>
<div className="w-full bg-[var(--accent)]/20 group-hover:bg-[var(--accent)]/40 transition-colors h-[70%] rounded-none relative">
<div className="absolute top-0 w-full h-px bg-[var(--accent)]/50"></div>
</div>
<div className="w-full bg-[var(--accent)]/40 group-hover:bg-[var(--accent)]/60 transition-colors h-[50%] rounded-none relative">
<div className="absolute top-0 w-full h-px bg-[var(--accent)]/50"></div>
</div>
<div className="w-full bg-[var(--accent)]/60 group-hover:bg-[var(--accent)]/80 transition-colors h-[90%] rounded-none relative">
<div className="absolute top-0 w-full h-px bg-[var(--accent)]"></div>
</div>
</div>
<div className="col-span-1 flex flex-col gap-4">
<div className="h-full bg-[var(--bg)] border border-[var(--border)] rounded-none flex items-center justify-center group-hover:border-[var(--muted)] transition-colors">
<iconify-icon className="text-[var(--muted)]" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="h-full bg-[var(--bg)] border border-[var(--border)] rounded-none flex items-center justify-center relative overflow-hidden group-hover:border-[var(--accent)] transition-colors">
<div className="absolute inset-0 bg-[var(--accent)]/5 group-hover:bg-[var(--accent)]/10 transition-colors"></div>
<iconify-icon className="text-[var(--accent)] relative z-10" icon="solar:git-branch-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="text-xs uppercase tracking-widest text-[var(--muted)] font-medium mb-3 flex items-center gap-2">
<span className="text-[var(--accent)]">04</span>
                    / Governance
                  </div>
<h3 className="text-xl text-[var(--fg)] font-normal tracking-tight mb-3 group-hover:text-white transition-colors">
                    Track and manage your data
                  </h3>
<p className="text-lg text-[var(--muted)] font-normal leading-relaxed">
                    Maintain full auditability. Track exactly who accessed what,
                    when they queried it, and why. Build a secure, centralized
                    data library with built-in governance and compliance
                    reporting.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="testimonials">
<div className="section-slab">
<div className="section-inner max-w-7xl mx-auto">
<div className="mb-12 text-center reveal-item">
<h2 className="text-3xl font-normal tracking-tight text-[var(--fg)] mb-4 uppercase">
                TESTIMONIALS AND USE CASES
              </h2>
<p className="text-lg text-[var(--muted)] font-normal">
                Trusted by innovative companies worldwide. Read their
                testimonials.
              </p>
</div>

<div className="flex flex-col gap-6 max-w-3xl mx-auto reveal-item relative z-10">

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-8 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-[var(--accent)] opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity duration-700"></div>
<p className="text-xl text-[var(--fg)] font-normal leading-relaxed mb-10 flex-1 tracking-tight">
                  Cleaned their data and provided insights on their most
                  reliable vendors. TS/SCI clearance.
                </p>
<div className="flex items-center gap-4 border-t border-[var(--border)] pt-6 mt-auto">
<div className="text-xs uppercase tracking-widest text-[var(--muted)] font-medium">
                    ATALO
                  </div>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-8 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-[var(--accent)] opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity duration-700"></div>
<p className="text-xl text-[var(--fg)] font-normal leading-relaxed mb-10 flex-1 tracking-tight">
                  DataScrubber.AI focused on the technical structuring of a
                  specialized data hallucination detection model. This scope of
                  work is dedicated to contract and document analysis,
                  specifically aiming to identify and mitigate inaccuracies or
                  fabricated information within AI-generated outputs.
                </p>
<div className="flex items-center gap-4 border-t border-[var(--border)] pt-6 mt-auto">
<div className="text-xs uppercase tracking-widest text-[var(--muted)] font-medium">
                    SquarePact
                  </div>
</div>
</div>

<div className="border border-[var(--border)] bg-[var(--panel)] backdrop-blur-md p-8 flex flex-col hover:border-[var(--accent)] transition-colors duration-500 rounded-none group relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-[var(--accent)] opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity duration-700"></div>
<p className="text-xl text-[var(--fg)] font-normal leading-relaxed mb-10 flex-1 tracking-tight">
                  Used our data deduplication layer to transform their raw
                  client data into a trustworthy system. The comprehensive
                  report provided a robust machine learning (ML) model
                  recommendation for developers.
                </p>
<div className="flex items-center gap-4 border-t border-[var(--border)] pt-6 mt-auto">
<div className="text-xs uppercase tracking-widest text-[var(--muted)] font-medium">
                    CooperCast
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-12 pb-24 px-4 md:px-8 z-10 w-full reveal-block" id="roi-carousel">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<div className="mb-12 text-center reveal-item">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-[var(--muted)] uppercase">
              Proven Results &amp; Measurable ROI Backed By Global Leaders
            </h2>
</div>
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-8 reveal-item">
<div className="flex items-center w-max flex-none" id="logo-marquee">

<div className="flex items-center justify-start gap-16 md:gap-32 pr-16 md:pr-32 flex-none">

<div className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-500 cursor-default flex-none">
<svg className="h-8 md:h-10 w-auto fill-current" viewbox="0 0 200 140">
<path d="M 70,10 C 30,10 10,25 10,45 C 10,55 15,65 25,70 C 15,75 10,85 10,95 C 10,115 30,130 70,130 L 90,130 L 90,10 L 70,10 Z M 70,30 L 70,60 C 45,60 35,55 35,45 C 35,35 45,30 70,30 Z M 70,80 L 70,110 C 45,110 35,105 35,95 C 35,85 45,80 70,80 Z"></path>
<path d="M 110,10 L 110,130 L 130,130 C 170,130 190,115 190,95 C 190,85 185,75 175,70 C 185,65 190,55 190,45 C 190,25 170,10 130,10 L 110,10 Z M 130,30 C 155,30 165,35 165,45 C 165,55 155,60 130,60 L 130,30 Z M 130,80 C 155,80 165,85 165,95 C 165,105 155,110 130,110 L 130,80 Z"></path>
</svg>
<div className="flex flex-col justify-center">
<span className="text-xl md:text-2xl font-semibold tracking-tight leading-none uppercase">
                      BEEF BOOTLEGGER
                    </span>
<span className="text-[10px] font-normal tracking-[0.2em] uppercase mt-1">
                      MEAT YOU BRAG ABOUT
                    </span>
</div>
</div>

<div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-default flex-none">
<svg className="h-8 md:h-10 w-auto" viewbox="0 0 100 100">
<g fill="none" strokeWidth="8">
<circle cx="40" cy="50" r="24" stroke="#5A7996"></circle>
<circle cx="70" cy="35" r="24" stroke="#87AD6C"></circle>
<circle cx="70" cy="65" r="24" stroke="#5A7996"></circle>
</g>
</svg>
<div className="h-8 w-px bg-[#87AD6C] opacity-50"></div>
<div className="flex flex-col justify-center">
<span className="text-xl md:text-2xl font-medium tracking-tight leading-none text-[#4B6082]">
                      Correlate
                    </span>
<span className="text-lg md:text-xl font-normal tracking-tight leading-none text-[#87AD6C] mt-1 pl-2">
                      Health
                    </span>
</div>
</div>

<div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-default flex-none">
<svg className="h-8 md:h-10 w-auto text-[#4285F4]" fill="currentColor" viewbox="0 0 24 24">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
<div className="flex flex-col justify-center">
<span className="text-xl md:text-2xl font-medium tracking-tight leading-none text-[var(--fg)]">
                      Google Cloud
                    </span>
<span className="text-xs font-normal tracking-tight leading-none text-[var(--muted)] mt-1">
                      for Startups
                    </span>
</div>
</div>

<div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-default flex-none">
<div className="flex items-center gap-2">
<svg className="h-8 md:h-10 w-auto fill-current text-[#76B900]" viewbox="0 0 100 100">
<path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 85 C30.7 85 15 69.3 15 50 C15 30.7 30.7 15 50 15 C69.3 15 85 30.7 85 50 C85 69.3 69.3 85 50 85 Z"></path>
</svg>
<div className="flex flex-col justify-center">
<span className="text-xl md:text-2xl font-semibold tracking-tight leading-none">
                        NVIDIA
                      </span>
<span className="text-xs font-medium tracking-[0.1em] uppercase mt-1">
                        Inception Program
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 px-4 md:px-8 z-10 w-full reveal-block" id="demo">
<div className="section-slab">
<div className="section-inner w-full flex flex-col items-center text-center">
<div className="text-[10px] text-[var(--accent)] font-medium tracking-widest mb-6 uppercase reveal-item">
              System / Ready
            </div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-[var(--fg)] mb-6 flex flex-col reveal-item">
<span className="overflow-hidden pb-1 block">
<span className="block reveal-text">
                  Ready to discuss your data needs?
                </span>
</span>
</h2>
<p className="text-lg text-[var(--muted)] mb-12 max-w-2xl leading-relaxed font-normal reveal-item">
              Data Accountability demands foresight. Let's build yours. Whether
              you're cleaning corrupt data, setting up intelligence workflows,
              or building a long-term governance program — we are ready to
              engage.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6 reveal-item">
<a className="group inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest font-medium text-black uppercase bg-[var(--accent)] hover:bg-white hover:text-black transition-all duration-300 rounded-none focus:outline-none" href="https://calendly.com/yasminegardiner/1-1-with-clearsetai" target="_blank">
<span>BOOK A DEMO</span>
<iconify-icon className="ml-3 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="text-xs text-[var(--muted)] hover:text-[var(--fg)] uppercase tracking-widest transition-colors font-medium border-b border-[var(--border)] pb-1 hover:border-[var(--fg)]" href="#problem">
                VIEW THE PROBLEM
              </a>
</div>
<footer className="mt-32 pt-8 w-full border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center text-[10px] text-[var(--muted)] uppercase tracking-widest font-medium gap-8 md:gap-6 reveal-item">
<div className="flex flex-col items-center md:items-start gap-4">
<div className="cursor-pointer flex items-center font-sans font-black text-xl md:text-2xl tracking-tighter opacity-80 hover:opacity-100 transition-opacity" onclick="lenis.scrollTo('#pinned-stage')">
<span className="text-[#45b458]" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                    DΛTΛ
                  </span>
<span className="text-[#204378]" style={{textShadow: '0px 1px 2px rgba(255,255,255,0.3)'}}>
                    SCRUBBER.Λ
                    <span className="text-[#45b458]">i</span>
</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-[var(--fg)]">
                    © 2026 DataScrubber.AI Incorporated. All rights reserved.
                  </span>
<span>Powered by ClearSet.AI LLC</span>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-[var(--accent)] transition-colors" href="https://docs.google.com/document/d/10jac7DHTJeHs-j9JBhkVZwPK7WwlR71nP7zaJPHyPww/edit?tab=t.0#heading=h.wc2apdwnnv1" target="_blank">
                  Privacy Policy
                </a>
<a className="hover:text-[var(--accent)] transition-colors" href="https://docs.google.com/document/d/1iNzC_C9A3OEBIh4ICjZSAeL7Djb8Axxvh2-E1_Vmig0/edit?tab=t.0#heading=h.jup6vxqct7ts" target="_blank">
                  Terms of Service
                </a>
<a className="hover:text-[var(--accent)] transition-colors" href="https://calendly.com/yasminegardiner/1-1-with-clearsetai" target="_blank">
                  Schedule a demo
                </a>
<a aria-label="LinkedIn" className="hover:text-[var(--accent)] transition-colors flex items-center text-base" href="https://www.linkedin.com/company/datascrubberai/" target="_blank">
<iconify-icon icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</footer>
</div>
</div>
</section>
</main>



    ed Data
  
    </>
  );
}
