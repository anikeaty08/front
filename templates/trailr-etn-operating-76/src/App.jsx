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



document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);
// Hero Text Mask Reveal
gsap.to(".word-inner", {
y: "0%",
duration: 1.2,
stagger: 0.1,
ease: "power4.out",
delay: 0.2
});
// Hero Elements Fade
gsap.to(".hero-fade", {
opacity: 1,
y: 0,
duration: 1,
stagger: 0.2,
ease: "power3.out",
delay: 0.6
});
// Dashboard Float Animation
gsap.to(".dashboard-wrapper", {
y: -15,
rotationX: 10,
rotationY: -15,
duration: 4,
repeat: -1,
yoyo: true,
ease: "sine.inOut"
});
// Typing Lines Reveal
gsap.fromTo(".typing-line",
{ opacity: 0, x: -10 },
{
scrollTrigger: {
trigger: ".code-window",
start: "top 85%"
},
opacity: 1,
x: 0,
duration: 0.4,
stagger: 0.15,
ease: "power2.out"
}
);
// Generic Fade Up Elements
gsap.utils.toArray('.gs-fade-up').forEach(elem => {
gsap.fromTo(elem,
{ y: 50, opacity: 0 },
{
scrollTrigger: {
trigger: elem,
start: "top 85%",
},
y: 0,
opacity: 1,
duration: 1,
ease: "power3.out"
}
);
});
// Generic Scale Up Elements
gsap.utils.toArray('.gs-scale-up').forEach(elem => {
gsap.fromTo(elem,
{ scale: 0.95, opacity: 0 },
{
scrollTrigger: {
trigger: elem,
start: "top 85%",
},
scale: 1,
opacity: 1,
duration: 1.2,
ease: "expo.out"
}
);
});
// Staggered Elements (Bento Grids)
gsap.utils.toArray('.gs-stagger').forEach((elem, i) => {
gsap.fromTo(elem,
{ y: 40, opacity: 0 },
{
scrollTrigger: {
trigger: elem.parentElement,
start: "top 80%",
},
y: 0,
opacity: 1,
duration: 0.8,
delay: (i % 3) * 0.1,
ease: "power2.out"
}
);
});
// Workflow Connecting Lines Animation
gsap.to(".line-anim", {
strokeDashoffset: -20,
duration: 1,
repeat: -1,
ease: "linear"
});
// Testimonial Wall Entrance Stagger
gsap.utils.toArray('.gs-stagger-test').forEach((elem, i) => {
const isCenter = elem.classList.contains('center-card');
gsap.fromTo(elem,
{ y: 60, opacity: 0, scale: 0.9 },
{
scrollTrigger: {
trigger: elem.parentElement,
start: "top 75%",
},
y: 0,
opacity: 1,
scale: isCenter ? 1 : 0.95,
duration: 1.2,
delay: i * 0.15,
ease: "back.out(1.2)"
}
);
});
});



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
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
`.replace(/\\s+/g, ' ').trim(),
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
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Text Mask Reveal
        gsap.to(".word-inner", {
          y: "0%",
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2
        });

        // Dashboard Float Animation
        gsap.to(".dashboard-wrapper", {
          y: -15,
          rotationX: 10,
          rotationY: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Generic Fade Up Elements
        gsap.utils.toArray('.gs-fade-up').forEach(elem => {
          gsap.fromTo(elem,
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
              },
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out"
            }
          );
        });

        // Generic Scale Up Elements
        gsap.utils.toArray('.gs-scale-up').forEach(elem => {
          gsap.fromTo(elem,
            { scale: 0.95, opacity: 0 },
            {
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
              },
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: "expo.out"
            }
          );
        });

        // Staggered Elements (Bento Grids)
        gsap.utils.toArray('.gs-stagger').forEach((elem, i) => {
          gsap.fromTo(elem,
            { y: 40, opacity: 0 },
            {
              scrollTrigger: {
                trigger: elem.parentElement,
                start: "top 80%",
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: (i % 3) * 0.1, // Stagger based on column index
              ease: "power2.out"
            }
          );
        });

        // Workflow Connecting Lines Animation
        gsap.to(".line-anim", {
          strokeDashoffset: -20,
          duration: 1,
          repeat: -1,
          ease: "linear"
        });

        // Testimonial Wall Entrance Stagger
        gsap.utils.toArray('.gs-stagger-test').forEach((elem, i) => {
          const isCenter = elem.classList.contains('center-card');
          gsap.fromTo(elem,
            { y: 60, opacity: 0, scale: 0.9 },
            {
              scrollTrigger: {
                trigger: elem.parentElement,
                start: "top 75%",
              },
              y: 0,
              opacity: 1,
              scale: isCenter ? 1 : 0.95,
              duration: 1.2,
              delay: i * 0.15,
              ease: "back.out(1.2)"
            }
          );
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="bg-orb w-[800px] h-[800px] bg-orange-600 top-[-10%] left-[-10%]"></div>
<div className="bg-orb w-[600px] h-[600px] bg-neutral-600 bottom-[-10%] right-[-10%]" style={{animationDelay: '-5s'}}></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20"></div>
</div>

<nav className="z-50 flex bg-black/30 w-full max-w-full border-white/5 border-b mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 sticky top-0 backdrop-blur-xl items-center justify-between">
<a className="flex items-center gap-3 text-lg font-normal tracking-tight text-white cursor-pointer group" href="#hero">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_18px_rgba(249,115,22,0.35)] group-hover:shadow-[0_0_26px_rgba(249,115,22,0.55)] transition-all">
<iconify-icon className="text-white text-xl" icon="lucide:orbit"></iconify-icon>
</div>
<span className="tracking-tight">TRAILR</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-light">
<a className="hover:text-white transition-colors" href="#product">
          Product
        </a>
<a className="hover:text-white transition-colors" href="#engines">
          Engines
        </a>
<a className="hover:text-white transition-colors" href="#ai">AI Layer</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">
          Contact
        </a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm text-neutral-300 hover:text-white font-normal transition-colors" href="#es">
          EN / ES
        </a>
<a className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-normal transition-all backdrop-blur-sm" href="#contact">
          Request Demo
        </a>
</div>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="lucide:menu"></iconify-icon>
</button>
</nav>

<section className="relative z-10 w-full min-h-[90vh] pt-20 pb-32 flex flex-col items-center scene-container overflow-hidden" id="hero">
<div className="max-w-[1400px] w-full mx-auto px-6 flex flex-col items-center">
<div className="max-w-4xl flex flex-col items-center text-center mb-16 relative z-20 mx-auto">
<div className="hero-fade inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.1)]">
<iconify-icon icon="lucide:brain-circuit"></iconify-icon>
<span>AI-native infrastructure for Exchange-Traded Notes</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.05]">
<span className="word-wrapper">
<span className="word-inner">The </span>
</span>
<span className="word-wrapper">
<span className="word-inner">Operating </span>
</span>
<span className="word-wrapper">
<span className="word-inner">System </span>
</span>
<span className="word-wrapper">
<span className="word-inner">for </span>
</span>
<span className="word-wrapper">
<span className="word-inner">ETNs</span>
</span>
</h1>
<p className="hero-fade text-neutral-400 text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed font-light">
            TRAILR automates NAV calculation, trading workflows, lifecycle
            events, and trailer fee distribution in one auditable AI platform
            built specifically for Exchange-Traded Notes.
          </p>
<div className="hero-fade flex flex-wrap justify-center items-center gap-4">
<a className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-base font-normal shadow-[0_0_24px_rgba(249,115,22,0.28)] hover:from-orange-400 hover:to-orange-500 border border-orange-400/50 transition-all" href="#contact">
              Request Demo
            </a>
<a className="px-6 py-2.5 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-300 text-base font-normal hover:bg-neutral-800 transition-all backdrop-blur-md" href="#product">
              Explore Platform
            </a>
</div>
</div>
<div className="perspective-container w-full max-w-6xl mx-auto relative z-10 hero-fade">
<div className="dashboard-plane border-gradient-surface w-full aspect-[16/10] flex overflow-hidden">
<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#070707]/80">
<div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center mb-4">
<iconify-icon className="text-orange-400" icon="lucide:command" width="18"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<span className="w-10 h-10 rounded-lg flex items-center justify-center text-orange-500 bg-orange-500/10 relative">
<iconify-icon icon="lucide:layout-dashboard" width="20"></iconify-icon>
<div className="absolute left-0 top-2 bottom-2 w-0.5 bg-orange-500 rounded-r-full"></div>
</span>
<span className="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-500">
<iconify-icon icon="lucide:calculator" width="20"></iconify-icon>
</span>
<span className="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-500">
<iconify-icon icon="lucide:repeat-2" width="20"></iconify-icon>
</span>
<span className="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-500">
<iconify-icon icon="lucide:split" width="20"></iconify-icon>
</span>
</div>
</div>
<div className="flex-1 flex flex-col bg-[#0d0d0d]/90 backdrop-blur-xl relative">
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-500/[0.06] to-transparent pointer-events-none"></div>
<div className="px-8 py-8 border-b border-white/5 flex flex-col sm:flex-row gap-6 justify-between sm:items-center">
<h2 className="text-xl font-normal tracking-tight text-white flex items-center gap-2">
                  ETN Command Center
                  <span className="px-2 py-0.5 rounded-md bg-neutral-800/80 border border-neutral-700/50 text-sm font-normal text-neutral-400">
                    42 live notes
                  </span>
</h2>
<div className="relative group w-full sm:w-auto">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-base" icon="lucide:search"></iconify-icon>
<input className="w-full sm:w-72 bg-[#161616] border border-neutral-800 rounded-full pl-9 pr-4 py-2 text-sm text-neutral-300 focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-neutral-600" placeholder="Search ETNs, brokers, fees..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="border-gradient-card p-5 flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-orange-400">
<iconify-icon className="text-xl" icon="lucide:calculator"></iconify-icon>
</div>
<h4 className="text-base font-normal text-white tracking-tight">
                          NAV Engine
                        </h4>
</div>
<span className="px-2 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-normal tracking-wide">
                        Live NAV
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      Real-time ETN NAV calculation with payoff logic, source
                      validation, exception detection, and full audit trails.
                    </p>
<div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<span className="text-sm text-neutral-400">
                        NAV published
                      </span>
<span className="text-sm text-emerald-400">99.997%</span>
</div>
</div>
<div className="border-gradient-card p-5 flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="lucide:repeat-2"></iconify-icon>
</div>
<h4 className="text-base font-normal text-white tracking-tight">
                          Trading Engine
                        </h4>
</div>
<span className="px-2 py-1 rounded-md bg-[#222] border border-neutral-800 text-xs text-neutral-400 font-normal tracking-wide">
                        Lifecycle
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      Issuance, redemption, secondary market tracking, broker
                      APIs, custodian files, and exchange events.
                    </p>
<div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<span className="text-sm text-neutral-400">
                        Open exceptions
                      </span>
<span className="text-sm text-orange-400">3</span>
</div>
</div>
<div className="border-gradient-card p-5 flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-orange-400">
<iconify-icon className="text-xl" icon="lucide:split"></iconify-icon>
</div>
<h4 className="text-base font-normal text-white tracking-tight">
                          Trailer Fee Engine
                        </h4>
</div>
<span className="px-2 py-1 rounded-md bg-[#222] border border-neutral-800 text-xs text-neutral-400 font-normal tracking-wide">
                        Fees
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      Automated accruals, flexible distribution rules,
                      reconciliation support, and transparent fee lineage.
                    </p>
<div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<span className="text-sm text-neutral-400">
                        Distribution run
                      </span>
<span className="text-sm text-emerald-400">Ready</span>
</div>
</div>
<div className="border-gradient-card p-5 flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="lucide:brain-circuit"></iconify-icon>
</div>
<h4 className="text-base font-normal text-white tracking-tight">
                          AI Control Layer
                        </h4>
</div>
<span className="px-2 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-xs text-orange-400 font-normal tracking-wide">
                        AI Ops
                      </span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                      Detects breaks, explains root causes, recommends fixes,
                      and learns from approvals over time.
                    </p>
<div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
<span className="text-sm text-neutral-400">
                        Auto-resolved today
                      </span>
<span className="text-sm text-orange-400">18</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden gs-reveal bg-gradient-to-b from-[#050505] to-[#0a0a0a] w-full z-10 border-neutral-800/40 pt-20 pb-20 relative">
<style>
        @keyframes scrollMarquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-infinite-scroll{animation:scrollMarquee 40s linear infinite;display:flex;width:max-content}.animate-infinite-scroll:hover{animation-play-state:paused}.brand-logo{color:#525252;transition:all .6s cubic-bezier(.16,1,.3,1);transform-style:preserve-3d}.brand-logo:hover{color:#fff;transform:scale(1.08) translateY(-4px);text-shadow:0 0 25px rgba(255,255,255,.28)}.marquee-mask{mask-image:linear-gradient(to right,transparent,black 15%,black 85%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 15%,black 85%,transparent)}
      </style>
<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_0%,#050505_100%)]"></div>
</div>
<div className="relative z-10 w-full">
<div className="max-w-7xl mx-auto px-6 text-center mb-14">
<p className="text-sm tracking-[0.2em] uppercase text-neutral-500 font-normal">
            Built for the institutions powering modern ETN markets
          </p>
</div>
<div className="w-full overflow-hidden marquee-mask relative">
<div className="animate-infinite-scroll py-6">
<div className="flex items-center">
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:landmark"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Issuers
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:line-chart"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Brokers
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:shield-check"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Custodians
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:building-2"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Exchanges
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:activity"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Market Makers
                </span>
</div>
</div>
<div className="flex items-center">
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:landmark"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Issuers
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:line-chart"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Brokers
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:shield-check"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Custodians
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:building-2"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Exchanges
                </span>
</div>
<div className="flex items-center gap-3 px-10 md:px-16 brand-logo">
<iconify-icon className="text-3xl md:text-4xl" icon="lucide:activity"></iconify-icon>
<span className="text-2xl md:text-3xl font-normal tracking-tight">
                  Market Makers
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 w-full pt-32 pb-32 relative" id="product">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 gs-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6">
<iconify-icon icon="lucide:layers-3"></iconify-icon>
            Unified product
          </div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-4">
            One platform.
            <br/>
<span className="text-neutral-500">Three ETN engines.</span>
</h2>
<p className="text-neutral-400 text-base md:text-lg font-light max-w-2xl">
            TRAILR replaces spreadsheets, fragmented systems, and legacy
            NAV-only tooling with a single operating system for the full
            Exchange-Traded Note lifecycle.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">
<div className="bento-card rounded-[2rem] p-8 border border-neutral-800/60 relative overflow-hidden group gs-stagger">
<iconify-icon className="text-orange-500 text-3xl mb-4" icon="lucide:calculator"></iconify-icon>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
              NAV Engine
            </h3>
<p className="text-base text-neutral-400 font-light">
              Automated, real-time NAV calculation built specifically for ETNs —
              not funds. Model complex payoff structures, validate inputs, and
              produce auditable calculation trails.
            </p>
<div className="absolute bottom-6 left-8 right-8 h-2 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-4/5 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.5)]"></div>
</div>
</div>
<div className="bento-card rounded-[2rem] p-8 border border-neutral-800/60 relative overflow-hidden group gs-stagger">
<iconify-icon className="text-white text-3xl mb-4" icon="lucide:repeat-2"></iconify-icon>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
              Trading &amp; Lifecycle Engine
            </h3>
<p className="text-base text-neutral-400 font-light">
              Run issuance, redemption, secondary-market tracking, lifecycle
              events, and broker, custodian, and exchange integrations through
              one connected workflow.
            </p>
<div className="absolute bottom-6 left-8 right-8 grid grid-cols-4 gap-2">
<div className="h-8 rounded-lg bg-neutral-800 border border-neutral-700"></div>
<div className="h-8 rounded-lg bg-orange-500/30 border border-orange-500/40"></div>
<div className="h-8 rounded-lg bg-neutral-800 border border-neutral-700"></div>
<div className="h-8 rounded-lg bg-neutral-800 border border-neutral-700"></div>
</div>
</div>
<div className="bento-card rounded-[2rem] p-8 border border-neutral-800/60 relative overflow-hidden group gs-stagger">
<iconify-icon className="text-white text-3xl mb-4" icon="lucide:split"></iconify-icon>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">
              Trailer Fee Engine
            </h3>
<p className="text-base text-neutral-400 font-light">
              Calculate and distribute trailer fees automatically with flexible
              fee logic, transparent allocations, reconciliation support, and
              complete auditability.
            </p>
<div className="absolute bottom-6 left-8 right-8 flex items-end gap-2 h-16">
<div className="w-full h-1/3 bg-neutral-800 rounded-t"></div>
<div className="w-full h-2/3 bg-orange-500/50 rounded-t"></div>
<div className="w-full h-full bg-orange-500 rounded-t shadow-[0_0_15px_rgba(249,115,22,0.4)]"></div>
<div className="w-full h-1/2 bg-neutral-800 rounded-t"></div>
</div>
</div>
</div>
<div className="mt-6 rounded-[2rem] border border-neutral-800/60 bg-[#0a0a0a]/70 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="text-sm text-neutral-400">
<span className="block text-white text-base mb-1">
              NAV feeds trading.
            </span>
            Published NAVs, exceptions, and approvals flow directly into
            lifecycle workflows.
          </div>
<div className="text-sm text-neutral-400">
<span className="block text-white text-base mb-1">
              Trading feeds fees.
            </span>
            Issuance, redemption, and holdings events update fee obligations
            automatically.
          </div>
<div className="text-sm text-neutral-400">
<span className="block text-white text-base mb-1">
              AI monitors everything.
            </span>
            Breaks are detected across the full system, not inside isolated
            tools.
          </div>
</div>
</div>
</section>

<section className="z-10 border-y bg-[#0f0f0f] w-full border-neutral-900/50 pt-32 pb-32 relative" id="ai">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6">
<iconify-icon icon="lucide:brain-circuit"></iconify-icon>
          AI-first operating layer
        </div>
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-6 gs-fade-up">
          AI that runs inside the ETN workflow
        </h2>
<p className="text-neutral-400 text-lg font-light max-w-2xl mx-auto mb-16">
          TRAILR does not bolt a chatbot onto finance operations. Intelligence
          is embedded into the operating layer: detecting inconsistencies,
          resolving exceptions, learning from approvals, and continuously
          tightening controls.
        </p>
<div className="relative w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 gs-scale-up">
<div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 text-left">
<iconify-icon className="text-orange-400 text-3xl mb-4" icon="lucide:scan-search"></iconify-icon>
<h3 className="text-xl font-normal text-white tracking-tight mb-2">
              Detect breaks automatically
            </h3>
<p className="text-neutral-400 font-light">
              Surface stale market data, mismatched trade states, fee anomalies,
              missing files, and NAV outliers before operations teams chase them
              manually.
            </p>
</div>
<div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6 text-left shadow-[0_0_40px_rgba(249,115,22,0.08)]">
<iconify-icon className="text-orange-400 text-3xl mb-4" icon="lucide:route"></iconify-icon>
<h3 className="text-xl font-normal text-white tracking-tight mb-2">
              Orchestrate next actions
            </h3>
<p className="text-neutral-300 font-light">
              Trigger approvals, create exception cases, rerun calculations,
              notify custodians, or route issues to the right owner with context
              attached.
            </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 text-left">
<iconify-icon className="text-orange-400 text-3xl mb-4" icon="lucide:refresh-cw"></iconify-icon>
<h3 className="text-xl font-normal text-white tracking-tight mb-2">
              Improve continuously
            </h3>
<p className="text-neutral-400 font-light">
              Learn from resolved exceptions, approved overrides, and
              reconciliation patterns so recurring breaks get prevented instead
              of repeated.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full py-32 bg-[#0a0a0a] border-b border-neutral-900/50 overflow-hidden" id="engines">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 engine-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
<iconify-icon className="text-base" icon="lucide:network"></iconify-icon>
              Product page
            </div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight">
              Deep ETN engines.
              <br/>
<span className="text-neutral-500">One connected system.</span>
</h2>
<p className="text-neutral-400 text-lg font-light mb-8 max-w-md leading-relaxed">
              Each engine is powerful on its own, but TRAILR is designed so NAV,
              trading, lifecycle events, and fees operate from the same data
              model, controls, and audit trail.
            </p>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<span className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</span>
                ETN-specific payoff and lifecycle logic
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<span className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</span>
                API integrations with brokers, custodians, and exchanges
              </li>
<li className="flex items-center gap-3 text-neutral-300 text-base font-light">
<span className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon className="text-base" icon="lucide:check-circle"></iconify-icon>
</span>
                Audit-ready lineage from input data to final output
              </li>
</ul>
</div>
<div className="w-full lg:w-1/2 relative engine-right perspective-1000 h-[420px] flex items-center justify-center">
<div className="w-full max-w-lg bg-[#0d0d0d] rounded-2xl border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 relative z-20 code-window">
<div className="h-10 border-b border-neutral-800/80 bg-[#141414] flex items-center px-4 gap-2 relative">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
<div className="absolute left-1/2 -translate-x-1/2 text-[11px] text-neutral-500 font-mono tracking-wider">
                  trailr-runtime.log
                </div>
</div>
<div className="p-6 font-mono text-sm text-neutral-400 h-72 overflow-hidden relative leading-loose">
<div className="typing-line text-neutral-500">
                  Initializing ETN lifecycle run...
                </div>
<div className="typing-line">
<span className="text-blue-400">NAV</span>
                  Fetching market data and payoff parameters
                </div>
<div className="typing-line">
<span className="text-green-400">OK</span>
                  NAV calculation validated against tolerance
                </div>
<div className="typing-line">
<span className="text-blue-400">TRADE</span>
                  Matching issuance and redemption orders
                </div>
<div className="typing-line">
<span className="text-orange-400">AI</span>
                  Flagged custodian quantity mismatch: 0.04%
                </div>
<div className="typing-line">
<span className="text-blue-400">FEES</span>
                  Applying distributor-specific trailer logic
                </div>
<div className="typing-line text-green-400">
                  ✓ Run completed with full audit package
                </div>
<div className="typing-line text-neutral-300 mt-3">
                  Artifacts: nav.json, lifecycle.csv, fees.pdf, audit.log
                </div>
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none"></div>
</div>
</div>
<div className="absolute inset-0 z-10 pointer-events-none">
<div className="absolute top-[15%] right-[-5%] w-16 h-16 glass-panel rounded-2xl flex items-center justify-center animate-float-slow text-neutral-500">
<iconify-icon className="text-2xl" icon="lucide:server"></iconify-icon>
</div>
<div className="absolute bottom-[20%] right-[5%] w-14 h-14 glass-panel rounded-xl flex items-center justify-center animate-float-fast text-orange-500/50 border-orange-500/20">
<iconify-icon className="text-xl" icon="lucide:globe"></iconify-icon>
</div>
<div className="absolute top-[30%] left-[-10%] w-20 h-20 glass-panel rounded-3xl flex items-center justify-center animate-float-med text-neutral-600">
<iconify-icon className="text-3xl" icon="lucide:cpu"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] w-full border-neutral-900/50 border-b py-32 relative" id="system">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-4">
            From fragmented operations to one source of truth
          </h2>
<p className="text-neutral-400 text-lg font-light max-w-2xl mx-auto">
            TRAILR is not a NAV calculator and not fund software. It is
            infrastructure for ETN operations — the system where calculation,
            execution, reconciliation, approvals, and fees converge.
          </p>
</div>
<div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-[#0a0a0a] rounded-2xl border border-neutral-800 p-6">
<h3 className="text-xl font-normal text-white tracking-tight mb-3">
              Before TRAILR
            </h3>
<ul className="space-y-3 text-neutral-400 font-light">
<li>Spreadsheets and copied data</li>
<li>Manual broker and custodian workflows</li>
<li>Legacy NAV tools built for funds</li>
<li>Opaque trailer fee calculations</li>
<li>Exception handling after the fact</li>
</ul>
</div>
<div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-orange-400 text-4xl mb-4" icon="lucide:arrow-right-left"></iconify-icon>
<h3 className="text-xl font-normal text-white tracking-tight mb-2">
              TRAILR OS
            </h3>
<p className="text-neutral-300 font-light">
              A unified data model and AI operating layer for the full ETN
              lifecycle.
            </p>
</div>
<div className="bg-[#0a0a0a] rounded-2xl border border-neutral-800 p-6">
<h3 className="text-xl font-normal text-white tracking-tight mb-3">
              After TRAILR
            </h3>
<ul className="space-y-3 text-neutral-400 font-light">
<li>Real-time NAV with full lineage</li>
<li>Automated lifecycle workflows</li>
<li>Connected broker, custodian, and exchange APIs</li>
<li>Transparent fee logic and distribution</li>
<li>AI-detected breaks with recommended action</li>
</ul>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden bg-[#0a0a0a] w-full border-neutral-900/50 border-b pt-32 pb-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 gs-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md">
<iconify-icon className="text-base" icon="lucide:rocket"></iconify-icon>
              About TRAILR
            </div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight">
              Reinventing ETN infrastructure for the AI era.
            </h2>
<p className="text-neutral-400 text-lg font-light mb-8 max-w-xl leading-relaxed">
              Exchange-Traded Notes have become more sophisticated, but the
              operational stack behind them has not. Issuers still rely on
              disconnected NAV tools, manual checks, spreadsheets, and workflows
              that were never designed for ETNs.
            </p>
<p className="text-neutral-400 text-lg font-light mb-8 max-w-xl leading-relaxed">
              TRAILR exists to create the category-defining operating system for
              ETNs: AI-native, audit-first, deeply integrated, and designed for
              modern issuers who need speed without sacrificing control.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
<div className="text-2xl text-white tracking-tight">100%</div>
<div className="text-sm text-neutral-500">ETN-focused</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
<div className="text-2xl text-white tracking-tight">3</div>
<div className="text-sm text-neutral-500">Core engines</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
<div className="text-2xl text-white tracking-tight">AI</div>
<div className="text-sm text-neutral-500">Operational layer</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative gs-scale-up group perspective-1000">
<div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl bg-[#0a0a0a] p-6">
<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-5">
<iconify-icon className="text-orange-400 text-3xl mb-8" icon="lucide:shield-check"></iconify-icon>
<h3 className="text-white text-xl font-normal tracking-tight mb-2">
                    Audit-first
                  </h3>
<p className="text-neutral-500 text-sm font-light">
                    Every calculation, workflow, approval, and distribution is
                    traceable.
                  </p>
</div>
<div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-5">
<iconify-icon className="text-orange-400 text-3xl mb-8" icon="lucide:cpu"></iconify-icon>
<h3 className="text-white text-xl font-normal tracking-tight mb-2">
                    AI-native
                  </h3>
<p className="text-neutral-500 text-sm font-light">
                    Automation and intelligence are part of the system
                    architecture.
                  </p>
</div>
<div className="col-span-2 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-800 border border-orange-400/30 p-6">
<h3 className="text-white text-2xl font-normal tracking-tight mb-2">
                    The category is not NAV tooling.
                  </h3>
<p className="text-orange-100 font-light">
                    The category is ETN operations infrastructure.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden bg-[#050505] w-full border-neutral-900/50 border-b pt-32 pb-32 relative" id="es">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col lg:flex-row-reverse items-start gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 gs-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-normal mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md">
<iconify-icon className="text-base" icon="lucide:languages"></iconify-icon>
              Versión en español
            </div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight">
              El sistema operativo para ETNs.
            </h2>
<p className="text-neutral-400 text-lg font-light mb-8 max-w-md leading-relaxed">
              TRAILR es una plataforma SaaS con inteligencia artificial que
              automatiza NAV, trading, ciclo de vida y trailer fees en un solo
              sistema auditable para Exchange-Traded Notes.
            </p>
<a className="px-6 py-2.5 rounded-full bg-[#111] hover:bg-neutral-800 border border-neutral-800 text-white text-base font-normal transition-all group inline-flex items-center gap-2" href="#contact">
              Solicitar demo
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6">
<h3 className="text-xl text-white font-normal tracking-tight mb-2">
                Motor NAV
              </h3>
<p className="text-neutral-400 font-light">
                Cálculo NAV automatizado y en tiempo real, diseñado
                específicamente para ETNs y estructuras de payoff complejas.
              </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6">
<h3 className="text-xl text-white font-normal tracking-tight mb-2">
                Motor de trading
              </h3>
<p className="text-neutral-400 font-light">
                Flujos de emisión, redención, mercado secundario e integraciones
                con brokers, custodios y bolsas.
              </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6">
<h3 className="text-xl text-white font-normal tracking-tight mb-2">
                Motor de trailer fees
              </h3>
<p className="text-neutral-400 font-light">
                Cálculo y distribución automatizada de comisiones con lógica
                flexible, transparencia y trazabilidad.
              </p>
</div>
<div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6">
<h3 className="text-xl text-white font-normal tracking-tight mb-2">
                Capa de IA
              </h3>
<p className="text-neutral-300 font-light">
                Detecta inconsistencias, reduce intervención manual y mejora
                continuamente los procesos operativos.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full py-32 overflow-hidden bg-[#050505]" id="differentiation">
<div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#111111] z-0 pointer-events-none"></div>
<div className="absolute top-1/2 left-[-15%] -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 gs-fade-up">
<h2 className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Not a NAV tool. Not fund software.
          </h2>
<p className="text-lg font-light text-neutral-400 max-w-2xl mr-auto ml-auto">
            TRAILR defines a new category: AI-native infrastructure for ETN
            operations.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-[2rem] border border-neutral-800 bg-[#0a0a0a]/80 p-8">
<h3 className="text-2xl font-normal text-neutral-300 tracking-tight mb-4">
              Legacy fund platforms
            </h3>
<p className="text-neutral-500 font-light mb-6">
              Optimized for fund NAV, reporting, and operational models that do
              not map cleanly to ETN lifecycle complexity.
            </p>
<ul className="text-sm text-neutral-500 space-y-2">
<li>Fund-centric assumptions</li>
<li>Reporting-first workflows</li>
<li>Limited lifecycle automation</li>
</ul>
</div>
<div className="rounded-[2rem] border border-neutral-800 bg-[#0a0a0a]/80 p-8">
<h3 className="text-2xl font-normal text-neutral-300 tracking-tight mb-4">
              NAV-only tools
            </h3>
<p className="text-neutral-500 font-light mb-6">
              Useful for calculations, but disconnected from trading operations,
              trailer fee distribution, and cross-system exception handling.
            </p>
<ul className="text-sm text-neutral-500 space-y-2">
<li>Calculation without orchestration</li>
<li>Manual reconciliation gaps</li>
<li>No unified audit layer</li>
</ul>
</div>
<div className="rounded-[2rem] border border-orange-500/30 bg-orange-500/10 p-8 shadow-[0_0_50px_rgba(249,115,22,0.08)]">
<h3 className="text-2xl font-normal text-white tracking-tight mb-4">
              TRAILR
            </h3>
<p className="text-neutral-300 font-light mb-6">
              Built 100% for ETNs, covering NAV, trading, lifecycle automation,
              and trailer fees in one AI-native operating system.
            </p>
<ul className="text-sm text-orange-100 space-y-2">
<li>ETN-specific from day one</li>
<li>NAV + trading + fees</li>
<li>AI inside the workflow</li>
<li>Modern issuer infrastructure</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full py-32 bg-[#050505] border-t border-neutral-900/50 overflow-hidden" id="architecture">
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 lg:px-8 gs-fade-up">
<h2 className="text-5xl md:text-6xl lg:text-7xl w-full md:w-[65%] leading-[1.05] text-white font-light tracking-tight drop-shadow-sm">
            How the system connects.
          </h2>
<p className="text-base md:text-lg text-neutral-400 w-full md:w-[30%] max-w-sm text-balance mb-2 md:mb-4 font-light tracking-wide border-l border-white/10 pl-4">
            A single operational graph connects product data, market data,
            lifecycle events, fee rules, approvals, and audit outputs.
          </p>
</header>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 h-auto md:h-[600px] lg:px-8">
<article className="md:col-span-4 relative border border-neutral-800 overflow-hidden bg-[#0a0a0a] rounded-xl p-8 flex flex-col justify-between">
<div>
<iconify-icon className="text-orange-400 text-4xl mb-6" icon="lucide:database-zap"></iconify-icon>
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">
                Unified ETN data model
              </h3>
<p className="text-neutral-400 font-light leading-relaxed">
                Product terms, payoff structures, market inputs, trades,
                positions, fees, approvals, and outputs live in one governed
                system.
              </p>
</div>
<div className="mt-8 grid grid-cols-3 gap-2">
<div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800"></div>
<div className="h-16 rounded-lg bg-orange-500/20 border border-orange-500/30"></div>
<div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800"></div>
</div>
</article>
<article className="md:col-span-4 relative border border-orange-500/30 overflow-hidden bg-gradient-to-b from-orange-500/15 to-[#0a0a0a] rounded-xl p-8 flex flex-col justify-end">
<div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-orange-500/30 animate-pulse"></div>
<iconify-icon className="text-orange-400 text-5xl mb-6" icon="lucide:brain-circuit"></iconify-icon>
<h3 className="text-3xl font-normal text-white mb-3 tracking-tight">
              AI exception graph
            </h3>
<p className="text-neutral-300 font-light leading-relaxed">
              AI monitors dependencies across engines, explains root causes,
              recommends actions, and records human approvals for future
              automation.
            </p>
</article>
<article className="md:col-span-4 relative border border-neutral-800 overflow-hidden bg-[#111111] rounded-xl p-8 flex flex-col justify-between">
<div>
<h3 className="text-5xl font-light text-white mb-3 tracking-tight">
                Audit
              </h3>
<p className="text-neutral-400 font-light leading-relaxed">
                Every final NAV, trade event, fee distribution, override, and
                reconciliation step is available as a complete audit package.
              </p>
</div>
<div className="mt-8 space-y-3">
<div className="h-3 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-[92%] bg-orange-500"></div>
</div>
<div className="h-3 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-[74%] bg-neutral-600"></div>
</div>
<div className="h-3 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-[88%] bg-neutral-600"></div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="md:py-40 overflow-visible bg-[#000000] w-full border-neutral-900/80 border-t pt-32 pb-32 relative" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/25 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="gs-scale-up">
<h2 className="text-5xl md:text-7xl font-normal text-white tracking-tight mb-8 drop-shadow-sm leading-tight">
              Request a demo of TRAILR.
            </h2>
<p className="text-lg md:text-xl text-neutral-400 font-light mb-8 max-w-xl leading-relaxed">
              See how an AI-native operating system can replace fragmented ETN
              workflows across NAV, trading, lifecycle automation, and trailer
              fees.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
<iconify-icon className="text-orange-400 text-2xl mb-3" icon="lucide:clock"></iconify-icon>
<p className="text-neutral-300 font-light">
                  30-minute product walkthrough
                </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
<iconify-icon className="text-orange-400 text-2xl mb-3" icon="lucide:shield-check"></iconify-icon>
<p className="text-neutral-300 font-light">
                  Discuss controls, audit, and integrations
                </p>
</div>
</div>
</div>
<form className="bg-[#0a0a0a]/80 border border-neutral-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50" placeholder="Work email"/>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50" placeholder="Company"/>
<select className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-400 focus:outline-none focus:border-orange-500/50">
<option>Primary interest</option>
<option>NAV Engine</option>
<option>Trading &amp; Lifecycle Engine</option>
<option>Trailer Fee Engine</option>
<option>Full ETN operating system</option>
</select>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 min-h-28" placeholder="Tell us about your ETN operations"></textarea>
<button className="w-full px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-base font-medium transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2" type="button">
              Request Demo
              <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</button>
<p className="text-xs text-neutral-600 text-center">
              TRAILR will use this information to contact you about your demo
              request.
            </p>
</form>
</div>
</div>
</section>

<footer className="overflow-hidden z-10 bg-[#000000] border-neutral-900/80 border-t pt-16 pb-8 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-3 text-lg font-normal tracking-tight text-white mb-6">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-white text-xl" icon="lucide:orbit"></iconify-icon>
</div>
<span className="tracking-tight">TRAILR</span>
</div>
<p className="text-sm text-neutral-400 font-light max-w-xs leading-relaxed mb-6">
              The AI-native operating system for Exchange-Traded Notes. NAV,
              trading, lifecycle automation, and trailer fees in one auditable
              platform.
            </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Platform</h4>
<ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#product">
                  Product
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#engines">
                  Engines
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#ai">
                  AI Layer
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Engines</h4>
<ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
<li>NAV Engine</li>
<li>Trading &amp; Lifecycle</li>
<li>Trailer Fees</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="flex flex-col gap-4 text-sm text-neutral-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#about">
                  About
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#es">
                  Español
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-neutral-900/80 border-t pt-8 items-center justify-between">
<div className="text-sm text-neutral-600 font-light">
            © 2024 TRAILR. All rights reserved.
          </div>
<div className="flex gap-6 text-sm text-neutral-600 font-light">
<a className="hover:text-neutral-300 transition-colors" href="#">
              Privacy
            </a>
<a className="hover:text-neutral-300 transition-colors" href="#">
              Terms
            </a>
<a className="hover:text-neutral-300 transition-colors" href="#">
              Security
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
