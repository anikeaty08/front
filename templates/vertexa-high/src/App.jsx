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
extend: {
colors: {
'vertex-bg': '#02040a',
'vertex-blue': '#2D43E6',
'vertex-blue-bright': '#374EF0',
'vertex-border': '#374151',
'vertex-text-pri': '#D1D5DB',
'vertex-text-sec': '#FFFFFF',
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- 1. GSAP Animations ---
      gsap.registerPlugin(ScrollTrigger);

      // Hero Animation
      const heroTimeline = gsap.timeline();

      heroTimeline.to(".reveal-word", {
          y: "0%",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.2
      })
      .to(["#hero-desc", "#hero-cta"], {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          startAt: { y: 20 },
      }, "-=0.6");

      // Scroll Animations for sections
      const revealElements = document.querySelectorAll('.gs-reveal');
      revealElements.forEach((el) => {
          gsap.fromTo(el,
              { autoAlpha: 0, y: 30 },
              {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  scrollTrigger: {
                      trigger: el,
                      start: "top 85%",
                      toggleActions: "play none none reverse"
                  }
              }
          );
      });

      // --- 2. FAQ Accordion Logic ---
      function toggleFaq(button) {
          const item = button.parentElement;
          const allItems = document.querySelectorAll('.faq-item');

          // Close others
          allItems.forEach(el => {
              if(el !== item) el.classList.remove('active');
          });

          // Toggle current
          item.classList.toggle('active');
      }

      // --- 3. Canvas Pixel Wave Effect (Optimized for full page scrolling) ---
      const canvas = document.getElementById('pixel-canvas');
      const ctx = canvas.getContext('2d', { alpha: false });

      let width, height;
      const blockSize = 28;
      let blocks = [];

      function resize() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;
          initBlocks();
      }

      function initBlocks() {
          blocks = [];
          const columns = Math.ceil(width / blockSize);
          const rows = Math.ceil(height / blockSize);

          for (let c = 0; c < columns; c++) {
              let normalizedX = c / columns;
              let curve = Math.pow(normalizedX, 4);
              let startRow = rows - Math.floor(rows * curve * 0.9) - Math.floor(Math.random() * 4);

              for (let r = 0; r < rows; r++) {
                  let shouldAdd = false;
                  let blockType = 'base';

                  if (r >= startRow) {
                      if (Math.random() > 0.05) shouldAdd = true;
                  } else if (r >= startRow - 4 && normalizedX > 0.4) {
                      if (Math.random() > 0.6) {
                          shouldAdd = true;
                          blockType = 'sparse';
                      }
                  } else if (normalizedX > 0.6 && Math.random() > 0.98) {
                      shouldAdd = true;
                      blockType = 'sparse';
                  }

                  if (shouldAdd) {
                      let rColor = 0;
                      let gColor = 0;
                      let bColor = 255;
                      let maxAlpha = 1;

                      let rand = Math.random();
                      if (rand > 0.8) {
                          rColor = 45; gColor = 67; bColor = 230; // Match Vertex Blue #2D43E6 approx
                      } else if (rand > 0.4) {
                          rColor = 20; gColor = 30; bColor = 200;
                      } else {
                          rColor = 10; gColor = 15; bColor = 100;
                          maxAlpha = 0.5;
                      }

                      if(blockType === 'sparse') maxAlpha *= 0.4;

                      blocks.push({
                          x: c * blockSize,
                          y: r * blockSize,
                          r: rColor,
                          g: gColor,
                          b: bColor,
                          alpha: Math.random() * maxAlpha,
                          targetAlpha: Math.random() * maxAlpha,
                          maxAlpha: maxAlpha,
                          speed: Math.random() * 0.02 + 0.005
                      });
                  }
              }
          }
      }

      window.addEventListener('resize', resize);
      resize();

      function animate() {
          ctx.fillStyle = '#02040a';
          ctx.fillRect(0, 0, width, height);

          blocks.forEach(b => {
              b.alpha += (b.targetAlpha - b.alpha) * b.speed;

              if (Math.abs(b.alpha - b.targetAlpha) < 0.02) {
                  b.targetAlpha = Math.random() * b.maxAlpha;
              }

              ctx.fillStyle = `rgba(${b.r}, ${b.g}, ${b.b}, ${b.alpha})`;
              ctx.fillRect(b.x, b.y, blockSize - 1, blockSize - 1);

              ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.1})`;
              ctx.fillRect(b.x, b.y, blockSize - 1, 2);
          });

          requestAnimationFrame(animate);
      }

      animate();
    


      const maskRevealHeadings = document.querySelectorAll('.mask-reveal-heading');
      maskRevealHeadings.forEach((heading) => {
          gsap.to(heading.querySelectorAll('.scroll-reveal-word'), {
              y: '0%',
              duration: 1.2,
              ease: 'power4.out',
              stagger: 0.15,
              scrollTrigger: {
                  trigger: heading,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{opacity: '0.85'}}>
<canvas className="absolute inset-0 w-full h-full" height="2048" id="pixel-canvas" width="1024"></canvas>
<div className="absolute inset-0 scanline-overlay opacity-50 mix-blend-overlay"></div>
</div>

<div className="relative z-10 flex flex-col min-h-screen">

<header className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 py-6 flex justify-between items-center bg-vertex-bg/50 backdrop-blur-md sticky top-0 z-50 border-b border-vertex-border/30">

<div className="flex gap-4 mb-8 gap-x-4 gap-y-4 items-center">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" strokeWidth="2" style={{color: 'rgb(209, 213, 219)', width: '32px', height: '32px'}} viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 28L4 8H10L16 18L22 8H28L16 28Z" fill="#3B82F6"></path>
<path d="M16 14.5L11 6H21L16 14.5Z" fill="#93C5FD"></path>
</svg>
<span className="text-[22px] tracking-[0.15em] text-white font-geist font-semibold">
            VERTEXA
          </span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-vertex-text-pri hover:text-white transition-colors duration-200 text-sm font-normal font-geist" href="#features">
            Features
          </a>
<a className="text-vertex-text-pri hover:text-white transition-colors duration-200 text-sm font-normal font-geist" href="#how-it-works">
            Workflow
          </a>
<a className="text-vertex-text-pri hover:text-white transition-colors duration-200 text-sm font-normal font-geist" href="#pricing">
            Pricing
          </a>
<a className="text-vertex-text-pri hover:text-white transition-colors duration-200 text-sm font-normal font-geist" href="#faq">
            FAQ
          </a>
</nav>

<a className="hidden items-center justify-center text-vertex-text-pri border-vertex-border hover:bg-gray-800/50 hover:text-white transition-all duration-200 sm:inline-flex text-sm font-normal border rounded-md px-4 py-2 font-geist" href="#pricing">
          Sign In
        </a>
</header>

<main className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 pt-20 pb-32">

<div className="w-full lg:w-[45%] max-w-2xl relative z-10 shrink-0">

<h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tighter leading-[1.05] mb-6 text-white" id="hero-title">
<span className="" style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                Build
              </span>
</span>
<span className="" style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                Beyond
              </span>
</span>
<br className="hidden sm:block"/>
<span className="" style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                the
              </span>
</span>
<span className="" style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="reveal-word block text-vertex-blue font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                Ordinary.
              </span>
</span>
</h1>

<p className="text-lg md:text-xl text-vertex-text-pri max-w-lg leading-relaxed mb-10 opacity-0 font-geist font-semibold" id="hero-desc">
            We architect scalable digital products and experiences that empower
            ambitious engineering teams to ship faster with absolute precision.
          </p>

<div className="flex items-center gap-6 opacity-0" id="hero-cta">
<a className="inline-flex items-center gap-2 bg-vertex-blue hover:bg-vertex-blue-bright text-white px-6 py-3.5 rounded-lg font-normal text-base transition-all duration-200 shadow-[0_0_20px_rgba(45,67,230,0.3)] hover:shadow-[0_0_30px_rgba(45,67,230,0.5)] group font-geist" href="#pricing">
              Start Building
              <i className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center gap-2 text-vertex-text-pri hover:text-white px-4 py-3 rounded-md font-light text-base transition-all duration-200 font-geist" href="#features">
              Explore Platform
            </a>
</div>
</div>

<div className="relative w-full lg:w-[58%] min-h-[620px] flex items-center justify-center overflow-visible">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-1/2 top-1/2 h-[520px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]">
</div>
<div className="absolute right-0 bottom-12 h-[260px] w-[360px] rounded-full bg-cyan-400/10 blur-[100px]"></div>
</div>
<div className="absolute right-20 top-24 h-4 w-4 bg-blue-600/30"></div>
<div className="absolute right-0 bottom-28 h-10 w-10 bg-blue-600/25"></div>
<div className="relative z-10 w-full max-w-[920px]">
<div className="relative w-full h-[455px] overflow-hidden rounded-xl border border-blue-500/30 bg-[#070b14]/95 shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_30px_90px_rgba(0,0,0,0.75),0_0_80px_rgba(37,99,235,0.18)] backdrop-blur-xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(37,99,235,0.18),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]">
</div>
<div className="relative flex h-full">
<aside className="hidden h-full w-[172px] shrink-0 border-r border-white/10 bg-[#050913]/90 p-5 sm:block">
<div className="mb-8 flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600/10">
<svg fill="none" height="16" viewbox="0 0 32 32" width="16">
<path d="M16 28L3 5H11L16 16L21 5H29L16 28Z" fill="#2447FF"></path>
</svg>
</div>
<span className="text-[13px] font-medium tracking-wide text-white/85 font-geist">
                      VERTEXA
                    </span>
</div>
<nav className="space-y-1.5 text-[12px]">
<a className="flex items-center gap-3 rounded-lg bg-blue-600/15 px-3 py-2.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] font-geist" href="#">
<i className="h-3.5 w-3.5 text-white" data-lucide="home"></i>
              Overview
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/55 hover:bg-white/5 hover:text-white font-geist" href="#">
<i className="h-3.5 w-3.5" data-lucide="folder"></i>
              Projects
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/55 hover:bg-white/5 hover:text-white font-geist" href="#">
<i className="h-3.5 w-3.5" data-lucide="layers"></i>
              Deployments
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/55 hover:bg-white/5 hover:text-white font-geist" href="#">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-2"></i>
              Analytics
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/55 hover:bg-white/5 hover:text-white font-geist" href="#">
<i className="h-3.5 w-3.5" data-lucide="users"></i>
              Team
            </a>
<a className="mt-4 flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/55 hover:bg-white/5 hover:text-white font-geist" href="#">
<i className="h-3.5 w-3.5" data-lucide="settings"></i>
              Settings
            </a>
</nav>
</aside>
<main className="flex-1 p-5">
<div className="mb-5 flex items-center justify-between">
<h3 className="text-[13px] font-medium text-white/90 font-geist">
              Project Overview
            </h3>
<div className="flex items-center gap-3">
<button className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/65 md:flex font-geist">
                        Last 30 days
                        <i className="h-3 w-3" data-lucide="chevron-down"></i>
</button>
<i className="h-4 w-4 text-white/45" data-lucide="bell"></i>
<div className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600/20 text-[11px] font-medium text-white font-geist">
                AK
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
<div className="flex flex-col h-full rounded-lg border border-white/10 bg-[#0b1221]/90 p-4">
<p className="mb-2 text-[11px] text-white/45 whitespace-nowrap font-geist">Deployments</p>
<p className="text-2xl tracking-tight text-white whitespace-nowrap font-geist font-semibold">
                156
              </p>
<p className="mt-auto pt-2 flex items-center gap-1 text-[11px] text-emerald-400">
<i className="h-3 w-3 shrink-0" data-lucide="arrow-up"></i>
<span className="truncate font-geist">18% from last month</span>
</p>
</div>
<div className="flex flex-col h-full rounded-lg border border-white/10 bg-[#0b1221]/90 p-4">
<p className="mb-2 text-[11px] text-white/45 whitespace-nowrap font-geist">Success Rate</p>
<p className="text-2xl tracking-tight text-white whitespace-nowrap font-geist font-semibold">
                99.9%
              </p>
<p className="mt-auto pt-2 flex items-center gap-1 text-[11px] text-emerald-400">
<i className="h-3 w-3 shrink-0" data-lucide="arrow-up"></i>
<span className="truncate font-geist">2.1% from last month</span>
</p>
</div>
<div className="flex flex-col h-full rounded-lg border border-white/10 bg-[#0b1221]/90 p-4">
<p className="mb-2 text-[11px] text-white/45 whitespace-nowrap font-geist">Avg. Build Time</p>
<p className="text-2xl tracking-tight text-white whitespace-nowrap font-geist font-semibold">
                2m 34s
              </p>
<p className="mt-auto pt-2 flex items-center gap-1 text-[11px] text-white/35">
<i className="h-3 w-3 shrink-0" data-lucide="arrow-down"></i>
<span className="truncate font-geist">8% from last month</span>
</p>
</div>
<div className="flex flex-col h-full rounded-lg border border-white/10 bg-[#0b1221]/90 p-4">
<p className="mb-2 text-[11px] text-white/45 whitespace-nowrap font-geist">Active Projects</p>
<p className="text-2xl tracking-tight text-white whitespace-nowrap font-geist font-semibold">
                24
              </p>
<p className="mt-auto pt-2 flex items-center gap-1 text-[11px] text-emerald-400">
<i className="h-3 w-3 shrink-0" data-lucide="arrow-up"></i>
<span className="truncate font-geist">12% from last month</span>
</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] mt-6 gap-x-4 gap-y-4">
<div className="rounded-lg border border-white/10 bg-[#0b1221]/90 p-4">
<h4 className="mb-4 text-[12px] font-medium text-white/85 font-geist">
                Deployment Activity
              </h4>
<div className="relative h-[155px] pl-8 pr-2 pb-6">
<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-white/25">
<span className="font-geist">60</span>
<span className="font-geist">40</span>
<span className="font-geist">20</span>
<span className="font-geist">0</span>
</div>
<div className="absolute bottom-0 left-8 right-2 flex justify-between text-[10px] text-white/25">
<span className="font-geist">May 1</span>
<span className="font-geist">May 8</span>
<span className="font-geist">May 15</span>
<span className="font-geist">May 22</span>
<span className="font-geist">May 29</span>
</div>
<div className="absolute left-8 right-2 top-2 bottom-6 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_33%]">
</div>
<svg className="relative h-full w-full overflow-visible text-blue-500" preserveaspectratio="none" viewbox="0 0 100 44">
<defs>
<lineargradient id="deploymentFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor" stop-opacity="0.35"></stop>
<stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
<filter id="lineGlow">
<fegaussianblur result="blur" stddeviation="1.8"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M0 26 C8 30 13 18 21 22 C30 28 33 38 42 25 C51 11 57 29 65 21 C73 10 79 8 86 21 C93 32 96 16 100 3 L100 44 L0 44 Z" fill="url(#deploymentFill)"></path>
<path d="M0 26 C8 30 13 18 21 22 C30 28 33 38 42 25 C51 11 57 29 65 21 C73 10 79 8 86 21 C93 32 96 16 100 3" fill="none" filter="url(#lineGlow)" stroke="currentColor" strokeWidth="1.8"></path>
<circle cx="100" cy="3" fill="#3b82f6" r="2"></circle>
</svg>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0b1221]/90 p-4">
<h4 className="mb-4 text-[12px] font-medium text-white/85 font-geist">
                Recent Deployments
              </h4>
<div className="space-y-3.5 text-[11px]">
<div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span className="text-blue-300 font-geist">checkout-service</span>
</div>
<span className="rounded bg-white/5 px-2 py-0.5 font-mono text-white/35 font-geist">
                            v2.4.1
                          </span>
<span className="text-white/35 font-geist">2m ago</span>
</div>
<div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span className="text-blue-300 font-geist">user-dashboard</span>
</div>
<span className="rounded bg-white/5 px-2 py-0.5 font-mono text-white/35 font-geist">
                            v1.8.3
                          </span>
<span className="text-white/35 font-geist">15m ago</span>
</div>
<div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span className="text-blue-300 font-geist">payment-gateway</span>
</div>
<span className="rounded bg-white/5 px-2 py-0.5 font-mono text-white/35 font-geist">
                            v3.2.0
                          </span>
<span className="text-white/35 font-geist">1h ago</span>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
<span className="text-blue-300 font-geist">marketing-site</span>
</div>
<span className="rounded bg-white/5 px-2 py-0.5 font-mono text-white/35 font-geist">
                            v1.3.7
                          </span>
<span className="text-white/35 font-geist">3h ago</span>
</div>
</div>
<a className="mt-5 flex items-center gap-1.5 text-[12px] text-blue-400 font-geist" href="#">
                View All Deployments
                <i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</main>
</div>
</div>
<div className="absolute -right-20 top-[280px] z-20 hidden w-[520px] overflow-hidden rounded-xl border border-blue-500/25 bg-[#070b14] shadow-[0_30px_80px_rgba(0,0,0,0.75),0_0_50px_rgba(37,99,235,0.2)] lg:block">
<div className="flex items-center gap-2 border-b border-white/10 bg-[#0b1221] px-4 py-3">
<span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<div className="ml-4 rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/60 font-geist">
          api.service.ts
        </div>
</div>
<div className="flex max-h-[285px] overflow-hidden p-4 font-mono text-[11px] leading-[1.75]">
<div className="mr-4 select-none text-right text-white/20">
<div className="font-geist">1</div>
<div className="font-geist">2</div>
<div className="font-geist">3</div>
<div className="font-geist">4</div>
<div className="font-geist">5</div>
<div className="font-geist">6</div>
<div className="font-geist">7</div>
<div className="font-geist">8</div>
<div className="font-geist">9</div>
<div className="font-geist">10</div>
<div className="font-geist">11</div>
<div className="font-geist">12</div>
<div className="font-geist">13</div>
<div className="font-geist">14</div>
<div className="font-geist">15</div>
</div>
<pre className="overflow-hidden text-white/70"><code className="font-geist"><span className="text-purple-400 font-geist">import</span> { <span className="text-yellow-300 font-geist">Injectable</span> } <span className="text-purple-400 font-geist">from</span> <span className="text-emerald-300 font-geist">'@nestjs/common'</span>;
<span className="text-purple-400 font-geist">import</span> { <span className="text-yellow-300 font-geist">PrismaService</span> } <span className="text-purple-400 font-geist">from</span> <span className="text-emerald-300 font-geist">'@/core/prisma.service'</span>;

<span className="text-blue-300 font-geist">@Injectable</span>()
<span className="text-purple-400 font-geist">export class</span> <span className="text-yellow-300 font-geist">ApiService</span> {
  <span className="text-purple-400 font-geist">constructor</span>(<span className="text-purple-400 font-geist">private</span> <span className="text-red-300 font-geist">prisma</span>: <span className="text-yellow-300 font-geist">PrismaService</span>) {}

  <span className="text-purple-400 font-geist">async</span> <span className="text-blue-300 font-geist">getMetrics</span>() {
    <span className="text-purple-400 font-geist">const</span> [deployments, successRate, avgBuildTime] =
      <span className="text-purple-400 font-geist">await</span> <span className="text-yellow-300 font-geist">Promise</span>.<span className="text-blue-300 font-geist">all</span>([
        <span className="text-cyan-300 font-geist">this</span>.prisma.deployment.count(),
        <span className="text-cyan-300 font-geist">this</span>.prisma.deployment.groupBy({
          <span className="text-orange-300 font-geist">by</span>: [<span className="text-emerald-300 font-geist">'status'</span>],
        }),
      ]);
  }
}</code></pre>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 py-24 md:py-32" id="features">
<div className="w-full mb-16 gs-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8">
<div className="max-w-2xl">
<h2 className="mask-reveal-heading text-3xl md:text-5xl font-thin tracking-tight text-white mb-6">
<span className="" style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold">Precision</span>
</span>
<span className="" style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold">at</span>
</span>
<span className="" style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold">scale.</span>
</span>
</h2>
<p className="text-base md:text-lg text-gray-400 font-light leading-relaxed font-geist">
              Our architecture is designed from the ground up to eliminate
              bottlenecks, providing a foundation that scales organically with
              your codebase.
            </p>
</div>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/[0.08] bg-[#0b1221] hover:border-blue-500/30 text-white rounded-xl font-normal hover:bg-blue-600/10 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-500 w-full md:w-auto flex-shrink-0 group">
<span className="font-geist">Learn More</span>
<i className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<style>
    @keyframes ms-dash-flow {
      0% { stroke-dashoffset: 8; }
      100% { stroke-dashoffset: 0; }
    }
    @keyframes ms-dash-flow-reverse {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 8; }
    }
    @keyframes ms-pulse-node {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.3); }
    }
    @keyframes ms-float-element {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }
    @keyframes ms-float-element-alt {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(4px); }
    }
    @keyframes ms-pulse-glow {
      0%, 100% { filter: brightness(1); opacity: 0.6; }
      50% { filter: brightness(1.5); opacity: 1; }
    }
    @keyframes ms-dash-draw {
      0% { stroke-dashoffset: 200; }
      40%, 100% { stroke-dashoffset: 0; }
    }
  </style>

<div className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b1221] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] gs-reveal">
<div className="h-[240px] w-full relative flex items-center justify-center border-b border-white/[0.05] bg-gradient-to-b from-[#050810] to-[#0b1221] overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 transform group-hover:bg-blue-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="relative z-10 w-[70%] h-auto max-w-[200px] transform group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewbox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">

<circle className="opacity-50" cx="100" cy="80" fill="#0f172a" r="40" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5"></circle>
<circle cx="100" cy="80" fill="url(#globeGrad1)" r="30"></circle>
<path className="opacity-40" d="M70 80 Q100 50 130 80 Q100 110 70 80" fill="none" stroke="#3b82f6" strokeWidth="1" style={{animation: 'ms-pulse-glow 4s infinite'}}></path>
<path className="opacity-40" d="M100 50 Q70 80 100 110 Q130 80 100 50" fill="none" stroke="#3b82f6" strokeWidth="1" style={{animation: 'ms-pulse-glow 4s infinite 2s'}}></path>

<path className="opacity-60" d="M100 80 L40 40" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1.5s linear infinite'}}></path>
<path className="opacity-60" d="M100 80 L160 40" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow-reverse 1.5s linear infinite'}}></path>
<path className="opacity-60" d="M100 80 L100 20" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1.5s linear infinite'}}></path>

<g style={{animation: 'ms-float-element 3s infinite'}}>
<rect fill="#1e3a8a" height="25" rx="3" stroke="#3b82f6" strokeWidth="1.5" width="20" x="30" y="25"></rect>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="2" x1="34" x2="46" y1="31" y2="31"></line>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="2" x1="34" x2="46" y1="38" y2="38"></line>
<circle cx="43" cy="44" fill="#60a5fa" r="1.5" style={{animation: 'ms-pulse-node 2s infinite', transformOrigin: '43px 44px'}}></circle>
</g>
<g style={{animation: 'ms-float-element 3.5s infinite 0.5s'}}>
<rect fill="#1e3a8a" height="25" rx="3" stroke="#3b82f6" strokeWidth="1.5" width="20" x="150" y="25"></rect>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="2" x1="154" x2="166" y1="31" y2="31"></line>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="2" x1="154" x2="166" y1="38" y2="38"></line>
<circle cx="163" cy="44" fill="#60a5fa" r="1.5" style={{animation: 'ms-pulse-node 2s infinite 1s', transformOrigin: '163px 44px'}}></circle>
</g>
<g style={{animation: 'ms-float-element-alt 3s infinite 1s'}}>
<rect className="" fill="#1e3a8a" height="25" rx="3" stroke="#3b82f6" strokeWidth="1.5" width="20" x="90" y="5"></rect>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="2" x1="94" x2="106" y1="11" y2="11"></line>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="2" x1="94" x2="106" y1="18" y2="18"></line>
<circle cx="103" cy="24" fill="#60a5fa" r="1.5" style={{animation: 'ms-pulse-node 2s infinite 0.5s', transformOrigin: '103px 24px'}}></circle>
</g>
<defs>
<radialgradient cx="0" cy="0" gradienttransform="translate(100 80) rotate(90) scale(30)" gradientunits="userSpaceOnUse" id="globeGrad1" r="1">
<stop stop-color="#1e3a8a"></stop>
<stop offset="1" stop-color="#0f172a"></stop>
</radialgradient>
</defs>
</svg>
</div>
<div className="p-8">
<h3 className="text-lg font-extralight tracking-tight text-white mb-3 font-geist">
        Edge Compute
      </h3>
<p className="text-sm text-gray-400 font-extralight leading-relaxed font-geist">
        Deploy logic instantly across our global edge network,
        minimizing latency and maximizing throughput for your users
        worldwide.
      </p>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b1221] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] gs-reveal delay-100">
<div className="h-[240px] w-full relative flex items-center justify-center border-b border-white/[0.05] bg-gradient-to-b from-[#050810] to-[#0b1221] overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 transform group-hover:bg-blue-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="relative z-10 w-[70%] h-auto max-w-[200px] transform group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewbox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
<ellipse className="opacity-40" cx="100" cy="60" rx="80" ry="25" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 2s linear infinite'}}></ellipse>
<ellipse className="opacity-30" cx="100" cy="60" rx="60" ry="40" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow-reverse 2.5s linear infinite'}}></ellipse>
<g style={{animation: 'ms-float-element 4s ease-in-out infinite'}}>
<path d="M100 20 L130 30 V60 C130 85 100 100 100 100 C100 100 70 85 70 60 V30 L100 20 Z" fill="#0f172a" stroke="#3b82f6" strokeWidth="2"></path>
<path className="opacity-80" d="M100 20 L130 30 V60 C130 85 100 100 100 100 V20 Z" fill="#1e3a8a"></path>
<rect fill="#60a5fa" height="15" rx="3" width="20" x="90" y="55"></rect>
<path d="M94 55 V48 C94 44 106 44 106 48 V55" stroke="#60a5fa" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="100" cy="62" fill="#0f172a" r="2"></circle>
</g>
<g style={{animation: 'ms-pulse-glow 3s infinite'}}>
<circle className="" cx="40" cy="60" fill="#1e3a8a" r="8" stroke="#3b82f6" strokeWidth="1.5"></circle>
<path d="M37 60 L39 62 L44 57" stroke="#93c5fd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</g>
<g style={{animation: 'ms-pulse-glow 3s infinite 1.5s'}}>
<circle cx="160" cy="40" fill="#1e3a8a" r="8" stroke="#3b82f6" strokeWidth="1.5"></circle>
<path d="M157 40 L159 42 L164 37" stroke="#93c5fd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</g>
</svg>
</div>
<div className="p-8">
<h3 className="text-lg font-extralight tracking-tight text-white mb-3 font-geist">
        Zero-Trust Security
      </h3>
<p className="text-sm text-gray-400 font-extralight leading-relaxed font-geist">
        Every internal request is cryptographically signed and verified,
        ensuring your infrastructure remains impenetrable by default.
      </p>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b1221] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] gs-reveal delay-200">
<div className="h-[240px] w-full relative flex items-center justify-center border-b border-white/[0.05] bg-gradient-to-b from-[#050810] to-[#0b1221] overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 transform group-hover:bg-blue-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="relative z-10 w-[70%] h-auto max-w-[200px] transform group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewbox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
<rect className="opacity-90" fill="#0f172a" height="80" rx="6" stroke="#1e40af" strokeWidth="1.5" width="120" x="40" y="20"></rect>
<path className="opacity-80" d="M40 35 L160 35" stroke="#1e40af" strokeWidth="1.5"></path>
<circle cx="50" cy="27.5" fill="#475569" r="2.5"></circle>
<circle cx="60" cy="27.5" fill="#475569" r="2.5"></circle>
<circle cx="70" cy="27.5" fill="#475569" r="2.5"></circle>
<line className="opacity-90" stroke="#3b82f6" strokeLinecap="round" strokeWidth="3" style={{animation: 'ms-pulse-glow 2s infinite'}} x1="55" x2="100" y1="50" y2="50"></line>
<line className="opacity-60" stroke="#60a5fa" strokeLinecap="round" strokeWidth="3" style={{animation: 'ms-pulse-glow 2s infinite 0.4s'}} x1="55" x2="130" y1="65" y2="65"></line>
<line className="opacity-60" stroke="#60a5fa" strokeLinecap="round" strokeWidth="3" style={{animation: 'ms-pulse-glow 2s infinite 0.8s'}} x1="70" x2="110" y1="80" y2="80"></line>
<g style={{animation: 'ms-float-element 3s infinite'}}>
<rect fill="#1e3a8a" height="24" rx="4" stroke="#3b82f6" strokeWidth="1.5" width="40" x="135" y="60"></rect>
<path d="M145 72 L155 72 M145 68 L150 68" stroke="#93c5fd" strokeLinecap="round" strokeWidth="2"></path>
</g>
</svg>
</div>
<div className="p-8">
<h3 className="text-lg font-extralight tracking-tight text-white mb-3 font-geist">
        Declarative Config
      </h3>
<p className="text-sm text-gray-400 font-extralight leading-relaxed font-geist">
        Manage your entire stack through version-controlled
        configuration files. Infrastructure as code, simplified and
        predictable.
      </p>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b1221] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] gs-reveal">
<div className="h-[240px] w-full relative flex items-center justify-center border-b border-white/[0.05] bg-gradient-to-b from-[#050810] to-[#0b1221] overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 transform group-hover:bg-blue-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="relative z-10 w-[70%] h-auto max-w-[200px] transform group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewbox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
<path className="opacity-30" d="M40 20 V100 M70 20 V100 M100 20 V100 M130 20 V100 M160 20 V100" stroke="#1e40af" strokeWidth="1"></path>
<path className="opacity-30" d="M40 100 H160 M40 75 H160 M40 50 H160 M40 25 H160" stroke="#1e40af" strokeWidth="1"></path>
<path d="M40 90 L70 60 L100 70 L130 30 L160 40" fill="none" stroke="#60a5fa" strokeLinejoin="round" strokeWidth="2.5" style={{strokeDasharray: '200', strokeDashoffset: '0', animation: 'ms-dash-draw 3s ease-out infinite'}}></path>
<circle cx="70" cy="60" fill="#93c5fd" r="3" style={{animation: 'ms-pulse-node 2s infinite 0.5s', transformOrigin: '70px 60px'}}></circle>
<circle cx="100" cy="70" fill="#93c5fd" r="3" style={{animation: 'ms-pulse-node 2s infinite 1s', transformOrigin: '100px 70px'}}></circle>
<circle cx="130" cy="30" fill="#93c5fd" r="3" style={{animation: 'ms-pulse-node 2s infinite 1.5s', transformOrigin: '130px 30px'}}></circle>
<circle cx="160" cy="40" fill="#93c5fd" r="3" style={{animation: 'ms-pulse-node 2s infinite 2s', transformOrigin: '160px 40px'}}></circle>
<g style={{animation: 'ms-float-element 4s infinite'}}>
<rect fill="#1e3a8a" height="16" rx="2" stroke="#3b82f6" strokeWidth="1" width="35" x="80" y="20"></rect>
<circle cx="86" cy="28" fill="#60a5fa" r="2"></circle>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" x1="92" x2="108" y1="28" y2="28"></line>
</g>
</svg>
</div>
<div className="p-8">
<h3 className="text-lg font-extralight tracking-tight text-white mb-3 font-geist">
        Granular Telemetry
      </h3>
<p className="text-sm text-gray-400 font-extralight leading-relaxed font-geist">
        Sub-millisecond resolution metrics and distributed tracing built
        directly into the runtime. Complete observability without
        overhead.
      </p>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b1221] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] gs-reveal delay-100">
<div className="h-[240px] w-full relative flex items-center justify-center border-b border-white/[0.05] bg-gradient-to-b from-[#050810] to-[#0b1221] overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 transform group-hover:bg-blue-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="relative z-10 w-[70%] h-auto max-w-[200px] transform group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewbox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">

<path className="opacity-80" d="M100 60 Q130 40 140 35" fill="none" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1.5s linear infinite'}}></path>
<path className="opacity-80" d="M100 60 Q130 80 140 85" fill="none" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1.5s linear infinite'}}></path>
<path className="opacity-80" d="M100 60 Q70 40 60 35" fill="none" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow-reverse 1.5s linear infinite'}}></path>
<path className="opacity-80" d="M100 60 Q70 80 60 85" fill="none" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow-reverse 1.5s linear infinite'}}></path>

<g style={{animation: 'ms-float-element 3s infinite'}} transform="translate(85, 40)">
<path d="M0 8 C0 3.58172 6.71573 0 15 0 C23.2843 0 30 3.58172 30 8 V32 C30 36.4183 23.2843 40 15 40 C6.71573 40 0 36.4183 0 32 V8 Z" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 8 C0 12.4183 6.71573 16 15 16 C23.2843 16 30 12.4183 30 8" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 18 C0 22.4183 6.71573 26 15 26 C23.2843 26 30 22.4183 30 18" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 28 C0 32.4183 6.71573 36 15 36 C23.2843 36 30 32.4183 30 28" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
</g>

<g style={{animation: 'ms-float-element-alt 3.5s infinite 1s'}} transform="translate(140, 20)">
<path d="M0 6 C0 2.68629 5.37258 0 12 0 C18.6274 0 24 2.68629 24 6 V18 C24 21.3137 18.6274 24 12 24 C5.37258 24 0 21.3137 0 18 V6 Z" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 6 C0 9.31371 5.37258 12 12 12 C18.6274 12 24 9.31371 24 6" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 12 C0 15.3137 5.37258 18 12 18 C18.6274 18 24 15.3137 24 12" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
</g>

<g style={{animation: 'ms-float-element 4s infinite 0.5s'}} transform="translate(140, 75)">
<path d="M0 6 C0 2.68629 5.37258 0 12 0 C18.6274 0 24 2.68629 24 6 V18 C24 21.3137 18.6274 24 12 24 C5.37258 24 0 21.3137 0 18 V6 Z" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 6 C0 9.31371 5.37258 12 12 12 C18.6274 12 24 9.31371 24 6" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 12 C0 15.3137 5.37258 18 12 18 C18.6274 18 24 15.3137 24 12" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
</g>

<g style={{animation: 'ms-float-element-alt 3s infinite 1.5s'}} transform="translate(36, 20)">
<path d="M0 6 C0 2.68629 5.37258 0 12 0 C18.6274 0 24 2.68629 24 6 V18 C24 21.3137 18.6274 24 12 24 C5.37258 24 0 21.3137 0 18 V6 Z" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 6 C0 9.31371 5.37258 12 12 12 C18.6274 12 24 9.31371 24 6" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="opacity-60" d="M0 12 C0 15.3137 5.37258 18 12 18 C18.6274 18 24 15.3137 24 12" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
</g>

<g style={{animation: 'ms-pulse-glow 2s infinite'}}>
<rect fill="#0f172a" height="16" rx="2" stroke="#3b82f6" strokeWidth="1.5" width="16" x="40" y="78"></rect>
<rect className="opacity-60" fill="#60a5fa" height="8" rx="1" width="8" x="44" y="82"></rect>
</g>
</svg>
</div>
<div className="p-8">
<h3 className="text-lg font-extralight tracking-tight text-white mb-3 font-geist">
        Distributed State
      </h3>
<p className="text-sm text-gray-400 font-extralight leading-relaxed font-geist">
        Strongly consistent, globally distributed key-value store. Read
        from anywhere with single-digit millisecond latency.
      </p>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b1221] overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] gs-reveal delay-200">
<div className="h-[240px] w-full relative flex items-center justify-center border-b border-white/[0.05] bg-gradient-to-b from-[#050810] to-[#0b1221] overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-150 transform group-hover:bg-blue-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="relative z-10 w-[70%] h-auto max-w-[200px] transform group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewbox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">

<path className="opacity-80" d="M55 60 L75 60 Q90 60 100 35 T130 35" fill="none" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1.5s linear infinite'}}></path>
<path className="opacity-80" d="M55 60 L130 60" fill="none" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1.5s linear infinite'}}></path>
<path className="opacity-80" d="M55 60 L75 60 Q90 60 100 85 T130 85" fill="none" stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1.5s linear infinite'}}></path>

<g style={{animation: 'ms-float-element 3s infinite'}}>
<rect fill="#0f172a" height="30" rx="4" stroke="#3b82f6" strokeWidth="1.5" width="30" x="25" y="45"></rect>
<circle cx="40" cy="55" fill="#60a5fa" r="4"></circle>
<path d="M32 66 C32 62 36 60 40 60 C44 60 48 62 48 66" stroke="#60a5fa" strokeLinecap="round" strokeWidth="1.5"></path>
</g>

<g style={{animation: 'ms-float-element-alt 3.5s infinite 0.5s'}}>
<rect fill="#1e3a8a" height="26" rx="3" stroke="#3b82f6" strokeWidth="1.5" width="40" x="130" y="22"></rect>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" x1="135" x2="145" y1="30" y2="30"></line>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" x1="135" x2="155" y1="38" y2="38"></line>
<circle cx="162" cy="30" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-glow 2s infinite'}}></circle>
<circle cx="162" cy="38" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-glow 2s infinite 0.5s'}}></circle>
</g>
<g style={{animation: 'ms-float-element 4s infinite 1s'}}>
<rect fill="#1e3a8a" height="26" rx="3" stroke="#3b82f6" strokeWidth="1.5" width="40" x="130" y="47"></rect>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" x1="135" x2="145" y1="55" y2="55"></line>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" x1="135" x2="155" y1="63" y2="63"></line>
<circle cx="162" cy="55" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-glow 2s infinite 1s'}}></circle>
<circle cx="162" cy="63" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-glow 2s infinite 1.5s'}}></circle>
</g>
<g style={{animation: 'ms-float-element-alt 3.5s infinite 1.5s'}}>
<rect fill="#1e3a8a" height="26" rx="3" stroke="#3b82f6" strokeWidth="1.5" width="40" x="130" y="72"></rect>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" x1="135" x2="145" y1="80" y2="80"></line>
<line stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" x1="135" x2="155" y1="88" y2="88"></line>
<circle cx="162" cy="80" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-glow 2s infinite 0.3s'}}></circle>
<circle cx="162" cy="88" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-glow 2s infinite 0.8s'}}></circle>
</g>

<circle cx="90" cy="48" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-node 1.5s infinite', transformOrigin: '90px 48px'}}></circle>
<circle cx="95" cy="60" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-node 1.5s infinite 0.5s', transformOrigin: '95px 60px'}}></circle>
<circle cx="90" cy="72" fill="#60a5fa" r="2" style={{animation: 'ms-pulse-node 1.5s infinite 1s', transformOrigin: '90px 72px'}}></circle>

<line stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1s linear infinite'}} x1="175" x2="190" y1="35" y2="35"></line>
<line stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1s linear infinite'}} x1="175" x2="190" y1="60" y2="60"></line>
<line stroke="#1e40af" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'ms-dash-flow 1s linear infinite'}} x1="175" x2="190" y1="85" y2="85"></line>
</svg>
</div>
<div className="p-8">
<h3 className="text-lg font-extralight tracking-tight text-white mb-3 font-geist">
        Smart Routing
      </h3>
<p className="text-sm text-gray-400 font-extralight leading-relaxed font-geist">
        Dynamic request routing based on load, geography, and custom
        metadata. Ensure optimal pathing for every single packet.
      </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden lg:px-12 md:py-32 w-full max-w-[90rem] rounded-none mx-auto px-6 py-24 relative" id="how-it-works">

<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
<div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[120px] rounded-[100%] pointer-events-none"></div>

<div className="absolute bottom-0 left-0 right-0 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_top,white,transparent)] pointer-events-none opacity-40"></div>
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

<div className="lg:w-5/12 flex flex-col justify-center">

<div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 px-4 py-1.5 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
</span>
<span className="text-xs font-medium tracking-wider text-gray-400 uppercase font-geist">
                Built for speed.
                <span className="text-white font-geist">Designed for scale.</span>
</span>
</div>

<h2 className="mask-reveal-heading mb-6 text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-tight text-white leading-[1.05]">
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  The
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  deployment
                </span>
</span>
<br className="hidden lg:block"/>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  pipeline,
                </span>
</span>
<br/>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  re-engineered.
                </span>
</span>
</h2>

<p className="mb-10 text-lg font-light leading-relaxed text-gray-400 max-w-lg font-geist">
              Move from local development to global production in under three
              seconds. No containers to manage, no clusters to provision.
            </p>

<a className="inline-flex items-center gap-3 w-fit rounded-lg border border-blue-500/30 px-6 py-3.5 text-base font-medium text-blue-400 transition-all hover:bg-blue-500/10 hover:border-blue-500/60 hover:text-blue-300 group shadow-[0_0_20px_rgba(59,130,246,0.05)] font-geist" href="#">
              Read the documentation
              <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>

<div className="lg:w-7/12 relative py-4 pl-2 md:pl-0">

<div className="absolute left-[31px] md:left-[39px] top-16 bottom-16 w-[2px] bg-gradient-to-b from-blue-600 via-blue-500/50 to-blue-900/20 hidden sm:block z-0"></div>

<div className="absolute left-[31px] md:left-[39px] top-[30%] h-[8%] w-[2px] hidden sm:block z-0"></div>
<div className="absolute left-[31px] md:left-[39px] top-[65%] h-[8%] w-[2px] hidden sm:block z-0"></div>
<div className="flex flex-col gap-8 relative z-10">

<div className="flex flex-col sm:flex-row gap-6 md:gap-8 group items-start">

<div className="relative shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mt-2">
<div className="absolute inset-0 rounded-full border border-blue-500/10 scale-100 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-2 md:inset-2.5 rounded-full border border-blue-500/20"></div>
<div className="absolute inset-4 md:inset-5 rounded-full border border-blue-500/30"></div>
<div className="relative w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6] border-2"></div>
</div>

<div className="flex-1 flex flex-col sm:flex-row gap-5 md:gap-6 rounded-2xl border border-blue-500/20 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">

<div className="flex-1 pt-1">
<h3 className="text-xl md:text-2xl text-white mb-3 tracking-tight font-geist font-semibold">
<span className="text-blue-500 mr-2 font-geist font-semibold">1.</span>
                      Push to Repository
                    </h3>
<p className="text-base text-gray-400 leading-relaxed font-light font-geist">
                      Connect your GitHub, GitLab, or Bitbucket. Every push to
                      your designated branch triggers an immutable build
                      process.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 md:gap-8 group items-start">
<div className="relative shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mt-2">
<div className="absolute inset-0 rounded-full border border-blue-500/10 scale-100 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-2 md:inset-2.5 rounded-full border border-blue-500/20"></div>
<div className="absolute inset-4 md:inset-5 rounded-full border border-blue-500/30"></div>
<div className="relative w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6] border-2"></div>
</div>
<div className="flex-1 flex flex-col sm:flex-row gap-5 md:gap-6 rounded-2xl border border-blue-500/20 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
<div className="flex-1 pt-1">
<h3 className="text-xl md:text-2xl text-white mb-3 tracking-tight font-geist font-semibold">
<span className="text-blue-500 mr-2 font-geist font-semibold">2.</span>
                      Static Analysis &amp; Build
                    </h3>
<p className="text-base text-gray-400 leading-relaxed font-light font-geist">
                      Our compiler analyzes dependencies, strips dead code, and
                      generates highly optimized WebAssembly binaries specific
                      to your application's architecture.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 md:gap-8 group items-start">
<div className="relative shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mt-2">
<div className="absolute inset-0 rounded-full border border-blue-500/10 scale-100 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-2 md:inset-2.5 rounded-full border border-blue-500/20"></div>
<div className="absolute inset-4 md:inset-5 rounded-full border border-blue-500/30"></div>
<div className="relative w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6] border-2"></div>
</div>
<div className="flex-1 flex flex-col sm:flex-row gap-5 md:gap-6 rounded-2xl border border-blue-500/20 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
<div className="flex-1 pt-1">
<h3 className="text-xl md:text-2xl text-white mb-3 tracking-tight font-geist font-semibold">
<span className="text-blue-500 mr-2 font-geist font-semibold">3.</span>
                      Global Distribution
                    </h3>
<p className="text-base text-gray-400 leading-relaxed font-light font-geist">
                      The resulting artifacts are atomically distributed across
                      200+ edge nodes. The old version remains active until the
                      new version is verified globally.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 py-24 md:py-32" id="pricing">
<div className="w-full mb-16 gs-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8">
<div className="max-w-2xl">
<h2 className="mask-reveal-heading text-3xl md:text-5xl font-thin tracking-tight text-white mb-6">
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  Transparent
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  compute.
                </span>
</span>
</h2>
<p className="text-base md:text-lg text-gray-400 font-light leading-relaxed font-geist">
              Pay only for the resources you consume. No hidden fees, no
              artificial limits.
            </p>
</div>
<div className="inline-flex items-center gap-1 bg-[#0b1221] border border-white/[0.08] rounded-xl p-1.5 w-full md:w-auto flex-shrink-0">
<button className="px-5 py-2 text-sm font-medium text-white bg-blue-600/20 border border-blue-500/30 rounded-lg shadow-sm transition-all font-geist">
              Monthly
            </button>
<button className="px-5 py-2 text-sm font-normal text-gray-400 hover:text-white rounded-lg transition-all font-geist">
              Annually
              <span className="text-blue-400 ml-1 font-geist">-20%</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">

<div className="p-[1px] gradient-shell rounded-lg h-full gs-reveal">
<div className="bg-vertex-bg rounded-[7px] p-8 h-full flex flex-col">
<h3 className="text-lg font-normal tracking-tight text-white mb-2 font-geist">
                Developer
              </h3>
<p className="text-xs text-vertex-text-pri mb-6 font-geist">
                For individuals and small teams building next-gen applications.
              </p>
<div className="mb-8">
<span className="text-4xl tracking-tighter text-white font-geist font-semibold">
                  $20
                </span>
<span className="text-xs text-vertex-text-pri font-geist">/ seat / mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  100GB Global Edge Bandwidth
                </li>
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  1M Serverless Invocations
                </li>
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Basic Telemetry (7-day retention)
                </li>
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Community Support
                </li>
</ul>
<button className="w-full py-3 text-xs font-medium text-vertex-text-pri border border-vertex-border hover:bg-gray-800/50 hover:text-white rounded-md transition-all duration-200 font-geist">
                Start for Free
              </button>
</div>
</div>

<div className="p-[1px] bg-gradient-to-b from-vertex-blue/80 to-vertex-blue/20 rounded-lg h-full shadow-[0_0_30px_rgba(45,67,230,0.15)] relative gs-reveal delay-100">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-vertex-blue text-white text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-widest font-geist">
              Recommended
            </div>
<div className="bg-vertex-bg rounded-[7px] p-8 h-full flex flex-col">
<h3 className="text-lg font-normal tracking-tight text-white mb-2 font-geist">
                Enterprise
              </h3>
<p className="text-xs text-vertex-text-pri mb-6 font-geist">
                For mission-critical production environments requiring high SLA.
              </p>
<div className="mb-8">
<span className="text-4xl tracking-tighter text-white font-geist font-semibold">
                  $99
                </span>
<span className="text-xs text-vertex-text-pri font-geist">/ seat / mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  5TB Global Edge Bandwidth
                </li>
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Unlimited Invocations
                </li>
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Granular Telemetry (90-day retention)
                </li>
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Dedicated 24/7 Support &amp; SLA
                </li>
<li className="flex items-start gap-3 text-xs text-vertex-text-pri font-geist">
<iconify-icon className="text-vertex-blue text-base shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  VPC Peering
                </li>
</ul>
<button className="w-full py-3 text-xs font-medium text-white bg-vertex-blue hover:bg-vertex-blue-bright rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(45,67,230,0.3)] hover:shadow-[0_0_25px_rgba(45,67,230,0.5)] font-geist">
                Upgrade to Enterprise
              </button>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 py-24 md:py-32 border-t border-white/5 relative">

<div className="w-full mb-16 lg:mb-24 gs-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8">
<div className="max-w-2xl">
<h2 className="mask-reveal-heading text-3xl md:text-5xl font-thin tracking-tight text-white mb-6">
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  Trusted
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  by
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  engineering
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  leaders.
                </span>
</span>
</h2>
<p className="text-base md:text-lg text-gray-400 font-light leading-relaxed font-geist">
              See how high-performance teams are radically accelerating their
              deployment workflows with Vertexa.
            </p>
</div>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/[0.08] bg-[#0b1221] hover:border-blue-500/30 text-white rounded-xl font-normal hover:bg-blue-600/10 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-500 w-full md:w-auto flex-shrink-0 group">
<span className="font-geist">Read Stories</span>
<i className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</button>
</div>

<div className="max-w-[76rem] mx-auto rounded-[2rem] border border-blue-500/20 bg-[#020617]/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 shadow-[0_0_80px_rgba(37,99,235,0.07)] relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20">

<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

<div className="lg:w-[55%] flex flex-col relative z-10">
<div className="mb-8 flex">
<i className="w-14 h-14 text-blue-600 fill-blue-600" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-2xl md:text-3xl leading-relaxed text-gray-300 tracking-tight mb-16 font-geist font-semibold">
              "Vertexa completely transformed our deployment cadence. What used
              to take
              <span className="text-blue-500 font-geist font-semibold">hours</span>
              of wrestling with Kubernetes manifests now happens in
              <span className="text-blue-500 font-geist font-semibold">seconds</span>
              . The
              <span className="text-blue-500 font-geist font-semibold">
                edge latency reduction
              </span>
              alone justified the migration."
            </h3>
<div className="flex items-center gap-5 mt-auto">
<div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-b from-blue-500 to-blue-900/20">
<img alt="Elena Rostova" className="w-full h-full rounded-full object-cover border-2 border-[#020617]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;h=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xl text-white mb-1 font-geist font-semibold">
                  Elena Rostova
                </div>
<div className="text-sm text-gray-400 mb-2 font-light font-geist">
                  VP of Engineering at FinScale
                </div>
<div className="flex items-center gap-1.5 text-blue-600 text-sm font-medium font-geist">
<i className="w-4 h-4" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
                  Verified Review
                </div>
</div>
</div>
</div>

<div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-blue-900/30 to-transparent"></div>

<div className="block lg:hidden h-px w-full bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>

<div className="lg:w-[45%] flex flex-col relative z-10 pl-0 lg:pl-2">
<div className="">
<div className="flex items-center gap-4 mb-10">
<span className="text-xs font-medium tracking-[0.2em] text-blue-500 uppercase font-geist">
                  Measurable Impact
                </span>
<div className="h-px flex-1 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
</div>
<div className="space-y-10">

<div className="flex items-center gap-6">
<div className="flex flex-row items-center gap-5">
<div className="text-5xl text-blue-600 w-[5rem] tracking-tighter shrink-0 font-geist font-semibold">
                      10x
                    </div>
<div className="flex flex-col justify-center">
<div className="text-base font-medium text-gray-200 mb-1 font-geist">
                        Faster Deployments
                      </div>
<div className="text-sm text-gray-500 font-light font-geist">
                        Ship changes in a fraction of the time
                      </div>
</div>
</div>
</div>

<div className="flex items-center gap-6">
<div className="flex flex-row items-center gap-5">
<div className="text-5xl text-blue-600 w-[5rem] tracking-tighter shrink-0 font-geist font-semibold">
                      90%
                    </div>
<div className="flex flex-col justify-center">
<div className="text-base font-medium text-gray-200 mb-1 font-geist">
                        Less Time Spent
                      </div>
<div className="text-sm text-gray-500 font-light font-geist">
                        Automate the heavy lifting
                      </div>
</div>
</div>
</div>

<div className="flex items-center gap-6">
<div className="flex flex-row items-center gap-5">
<div className="text-5xl text-blue-600 w-[5rem] tracking-tighter shrink-0 font-geist font-semibold">
                      60%
                    </div>
<div className="flex flex-col justify-center">
<div className="text-base font-medium text-gray-200 mb-1 font-geist">
                        Edge Latency Reduction
                      </div>
<div className="text-sm text-gray-500 font-light font-geist">
                        Better performance for every user
                      </div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-14 pt-8 flex flex-col gap-3 border-t border-blue-900/20">
<div className="flex items-center gap-1.5">
<i className="w-5 h-5 text-blue-600 fill-blue-600" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-blue-600 fill-blue-600" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-blue-600 fill-blue-600" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-blue-600 fill-blue-600" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-blue-600 fill-blue-600" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<a className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors font-light font-geist" href="#">
                Read more reviews on G2
                <i className="w-4 h-4" data-lucide="external-link" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 py-24 md:py-32" id="faq">

<div className="w-full mb-16 gs-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8">
<div className="max-w-2xl">
<h2 className="mask-reveal-heading text-3xl md:text-5xl font-thin tracking-tight text-white mb-6">
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  Technical
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  specifications.
                </span>
</span>
</h2>
<p className="text-base md:text-lg text-gray-400 font-light leading-relaxed font-geist">
              Everything you need to know about our edge architecture.
            </p>
</div>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/[0.08] bg-[#0b1221] hover:border-blue-500/30 text-white rounded-xl font-normal hover:bg-blue-600/10 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-500 w-full md:w-auto flex-shrink-0 group">
<span className="font-geist">View Docs</span>
<i className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</button>
</div>

<div className="space-y-3 gs-reveal max-w-4xl w-full mx-auto">

<div className="faq-item border border-vertex-border/40 bg-gray-900/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-vertex-border/80 hover:bg-gray-900/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-sm">
<button aria-controls="faq-content-1" aria-expanded="false" className="group w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-xl" onclick="toggleFaq(this)">
<span className="text-base font-medium text-white tracking-tight transition-colors duration-300 group-hover:text-blue-400 font-geist">
                Does Vertexa support stateful WebSockets?
              </span>
<iconify-icon className="faq-icon text-xl text-vertex-text-pri transition-all duration-300 group-hover:rotate-90 group-hover:text-blue-400" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content bg-gray-900/40 px-6" id="faq-content-1">
<p className="text-sm text-vertex-text-pri pb-6 leading-relaxed opacity-90 font-geist">
                Yes, our edge network maintains persistent connections natively.
                You can broadcast to millions of clients simultaneously using
                our distributed pub/sub architecture without managing connection
                pools.
              </p>
</div>
</div>

<div className="faq-item border border-vertex-border/40 bg-gray-900/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-vertex-border/80 hover:bg-gray-900/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-sm">
<button aria-controls="faq-content-2" aria-expanded="false" className="group w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-xl" onclick="toggleFaq(this)">
<span className="text-base font-medium text-white tracking-tight transition-colors duration-300 group-hover:text-blue-400 font-geist">
                How is cold start latency handled?
              </span>
<iconify-icon className="faq-icon text-xl text-vertex-text-pri transition-all duration-300 group-hover:rotate-90 group-hover:text-blue-400" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content bg-gray-900/40 px-6" id="faq-content-2">
<p className="text-sm text-vertex-text-pri pb-6 leading-relaxed opacity-90 font-geist">
                By utilizing V8 isolates instead of traditional containers or
                VMs, we've eliminated cold starts entirely. Instantiation
                happens in under 5ms globally, ensuring consistent performance
                for every request.
              </p>
</div>
</div>

<div className="faq-item border border-vertex-border/40 bg-gray-900/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-vertex-border/80 hover:bg-gray-900/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-sm">
<button aria-controls="faq-content-3" aria-expanded="false" className="group w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-xl" onclick="toggleFaq(this)">
<span className="text-base font-medium text-white tracking-tight transition-colors duration-300 group-hover:text-blue-400 font-geist">
                Can I run custom binaries?
              </span>
<iconify-icon className="faq-icon text-xl text-vertex-text-pri transition-all duration-300 group-hover:rotate-90 group-hover:text-blue-400" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content bg-gray-900/40 px-6" id="faq-content-3">
<p className="text-sm text-vertex-text-pri pb-6 leading-relaxed opacity-90 font-geist">
                Currently, we support Wasm (WebAssembly) targets. Any language
                that can compile down to Wasm (Rust, Go, C++, Zig) is supported
                natively on our edge runtime with near-native performance.
              </p>
</div>
</div>

<div className="faq-item border border-vertex-border/40 bg-gray-900/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-vertex-border/80 hover:bg-gray-900/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-sm">
<button aria-controls="faq-content-4" aria-expanded="false" className="group w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-xl" onclick="toggleFaq(this)">
<span className="text-base font-medium text-white tracking-tight transition-colors duration-300 group-hover:text-blue-400 font-geist">
                Is there a local development environment?
              </span>
<iconify-icon className="faq-icon text-xl text-vertex-text-pri transition-all duration-300 group-hover:rotate-90 group-hover:text-blue-400" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content bg-gray-900/40 px-6" id="faq-content-4">
<p className="text-sm text-vertex-text-pri pb-6 leading-relaxed opacity-90 font-geist">
                Yes. The Vertexa CLI includes a lightweight emulator of our
                distributed architecture. What you test locally via `vtx dev` is
                exact 1:1 behavioral parity with our global production network.
              </p>
</div>
</div>
</div>
</section>
<section className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 py-24 md:py-32 border-t border-white/5 relative">



<div className="overflow-hidden flex flex-col md:p-16 lg:p-20 lg:mt-0 lg:ml-auto lg:mr-auto text-center bg-[#020617]/80 max-w-[76rem] border-blue-500/20 border rounded-[2rem] mt-24 mr-auto ml-auto px-8 py-8 relative shadow-[0_0_80px_rgba(37,99,235,0.07)] backdrop-blur-xl items-center justify-center">

<div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="mask-reveal-heading text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  Ready
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  to
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  accelerate
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  your
                </span>
</span>
<span style={{overflow: 'hidden', display: 'inline-block', verticalAlign: 'top', paddingBottom: '0.1em', marginBottom: '-0.1em'}}>
<span className="scroll-reveal-word block font-geist font-semibold" style={{transform: 'translateY(110%)'}}>
                  deployment?
                </span>
</span>
</h2>
<p className="text-lg text-gray-400 font-light mb-10 font-geist">
              Join high-performance teams worldwide shipping with absolute
              precision and zero friction.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="flex w-full sm:w-auto items-center justify-center h-12 md:h-14 px-8 rounded-xl bg-blue-600 text-white font-normal hover:bg-blue-500 transition-colors gap-2 shadow-[0_0_30px_rgba(37,99,235,0.2)] font-geist" href="#">
                Start building for free
                <i className="w-5 h-5" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="flex w-full sm:w-auto items-center justify-center h-12 md:h-14 px-8 rounded-xl border border-white/10 bg-white/5 text-white font-normal hover:bg-white/10 transition-colors gap-2 font-geist" href="#">
                Talk to an expert
              </a>
</div>
<div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400 font-light">
<div className="flex items-center gap-2 font-geist">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
                No credit card required
              </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-gray-700"></div>
<div className="flex items-center gap-2 font-geist">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
                14-day free trial
              </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-gray-700"></div>
<div className="flex items-center gap-2 font-geist">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
                Cancel anytime
              </div>
</div>
</div>
</div>
</section>

<footer className="border-vertex-border/30 w-full border-t mt-auto backdrop-blur-sm">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 py-20 font-sans">
<div className="flex flex-col lg:flex-row w-full gap-0">

<div className="w-full lg:w-[360px] shrink-0 lg:pr-14 flex flex-col relative">

<div className="flex gap-4 mb-8 gap-x-4 gap-y-4 items-center">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" strokeWidth="2" style={{color: 'rgb(209, 213, 219)', width: '32px', height: '32px'}} viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 28L4 8H10L16 18L22 8H28L16 28Z" fill="#3B82F6"></path>
<path d="M16 14.5L11 6H21L16 14.5Z" fill="#93C5FD"></path>
</svg>
<span className="text-[22px] tracking-[0.15em] text-white font-geist font-semibold">
                  VERTEXA
                </span>
</div>
<p className="text-neutral-400 text-[15px] leading-relaxed mb-10 pr-4 font-geist">
                Engineered for high-performance teams deploying resilient,
                globally distributed systems with zero friction.
              </p>
<a className="flex items-center justify-between px-5 py-3.5 rounded-xl border border-blue-900/60 bg-blue-950/20 text-blue-400 hover:bg-blue-900/30 transition-all mb-6 group w-full sm:w-[85%] lg:w-full" href="#">
<div className="flex items-center gap-3">
<i className="w-[18px] h-[18px] stroke-[1.5]" data-lucide="globe"></i>
<span className="text-[15px] font-normal font-geist">Deploy globally</span>
</div>
<i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] transition-all mb-12 group w-full sm:w-[85%] lg:w-full" href="#">
<div className="flex items-center gap-4">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/80"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
</div>
<div className="flex flex-col gap-0.5">
<div className="text-[13px] text-neutral-500 font-normal font-geist">
                      System Status
                    </div>
<div className="text-[15px] text-green-400 font-normal font-geist">
                      All systems operational
                    </div>
</div>
</div>
<i className="w-4 h-4 text-neutral-600 stroke-[1.5] group-hover:translate-x-1 transition-transform group-hover:text-neutral-400" data-lucide="chevron-right"></i>
</a>
</div>

<div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/[0.1] to-transparent self-stretch my-2"></div>

<div className="w-full lg:flex-1 lg:pl-16 pt-16 lg:pt-0 flex flex-col">

<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">

<div className="">
<div className="flex items-center gap-2.5 mb-6">
<div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
<h4 className="text-[12px] font-medium text-blue-500 uppercase tracking-[0.15em] font-geist">
                      Product
                    </h4>
</div>
<ul className="flex flex-col">
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Edge Compute</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Distributed State</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Global Network</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Pricing</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-2.5 mb-6">
<div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
<h4 className="text-[12px] font-medium text-blue-500 uppercase tracking-[0.15em] font-geist">
                      Developers
                    </h4>
</div>
<ul className="flex flex-col">
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Documentation</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">API Reference</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">CLI Tool</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Status</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-2.5 mb-6">
<div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
<h4 className="text-[12px] font-medium text-blue-500 uppercase tracking-[0.15em] font-geist">
                      Company
                    </h4>
</div>
<ul className="flex flex-col">
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">About Us</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Blog</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Careers</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center justify-between py-3.5 text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Contact</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-2.5 mb-6">
<div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
<h4 className="text-[12px] font-medium text-blue-500 uppercase tracking-[0.15em] font-geist">
                      Legal
                    </h4>
</div>
<ul className="flex flex-col">
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Privacy Policy</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 border-b border-white/[0.04] text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Terms of Service</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
<li className="">
<a className="flex items-center justify-between py-3.5 text-[15px] text-neutral-400 hover:text-white group transition-colors" href="#">
<span className="font-geist">Cookie Policy</span>
<i className="w-3.5 h-3.5 text-neutral-700 stroke-[1.5] group-hover:text-neutral-400 transition-colors" data-lucide="chevron-right"></i>
</a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-2xl border border-white/[0.06] bg-[#050914] gap-6 mt-auto">
<div className="flex items-center gap-5">
<div className="flex flex-col gap-1">
<h5 className="text-white font-medium text-[15px] font-geist">
                      Join the newsletter
                    </h5>
<p className="text-neutral-500 text-[13px] font-geist">
                      Updates on edge infrastructure, releases, and more.
                    </p>
</div>
</div>
<form className="flex w-full md:w-auto gap-3 items-center shrink-0">
<input className="bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-2.5 text-[15px] text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 w-full md:w-[280px] transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-[#1D4ED8] hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-[14px] font-normal transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-blue-900/20 shrink-0 font-geist" type="submit">
                    Subscribe
                    <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</form>
</div>
</div>
</div>

<div className="w-full mt-24 relative pt-8">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-neutral-500">
<p className="font-geist">© 2024 Vertexa Inc. All rights reserved.</p>
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
<p className="font-geist">Designed with absolute precision.</p>
</div>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
