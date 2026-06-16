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



    // 1. Loading Sequence
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 1200);
      }, 800);
    });

    // 2. High-End Dual Cursor System
    const cursorDot = document.getElementById('cursorDot');
    const cursorGlow = document.getElementById('cursorGlow');
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dotPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let glowPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function renderCursor() {
      // Lerp for smooth trailing (fast for dot, slow for glow)
      dotPos.x += (mouse.x - dotPos.x) * 0.3;
      dotPos.y += (mouse.y - dotPos.y) * 0.3;
      glowPos.x += (mouse.x - glowPos.x) * 0.08;
      glowPos.y += (mouse.y - glowPos.y) * 0.08;

      cursorDot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
      cursorGlow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Cursor Hover States
    document.querySelectorAll('.cursor-hover, a, button, input[type="checkbox"]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(0)`;
        cursorGlow.classList.add('scale-150', 'bg-[#FF7A00]/60');
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(1)`;
        cursorGlow.classList.remove('scale-150', 'bg-[#FF7A00]/60');
      });
    });

    // 3. Cinematic Scroll Parallax (Background + Elements)
    const parallaxElements = document.querySelectorAll('[data-speed]');
    let scrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      requestAnimationFrame(() => {
        parallaxElements.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-speed'));
          const yPos = -(scrollY * speed);
          // Combine mouse offset with scroll for backgrounds
          if(el.id.includes('bgBlob')) {
             const xPos = (mouse.x - window.innerWidth/2) * speed * 0.5;
             el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
          } else {
             el.style.transform = `translate3d(0, ${yPos}px, 0)`;
          }
        });
        
        // Header Blur on Scroll
        const header = document.getElementById('header');
        if(scrollY > 50) {
          header.classList.add('bg-[#0A0A0A]/70');
          header.classList.remove('bg-[#0A0A0A]/40');
        } else {
          header.classList.add('bg-[#0A0A0A]/40');
          header.classList.remove('bg-[#0A0A0A]/70');
        }
      });
    }, { passive: true });

    // 4. Apple-style Text & Element Reveals
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Trigger staggered text lines if applicable
          const lines = entry.target.querySelectorAll('.line-block');
          if(lines.length > 0) {
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0) rotateX(0)';
                line.style.filter = 'blur(0)';
              }, index * 150);
            });
          }
          revealObserver.unobserve(entry.target); // Reveal once
        }
      });
    }, observerOptions);

    // Setup Text Lines
    document.querySelectorAll('.reveal-lines').forEach(el => {
      const text = el.textContent.trim();
      // Split by words to ensure safe wrapping, wrap in line-blocks
      const words = text.split(' ');
      const chunks = [];
      while (words.length) chunks.push(words.splice(0, 3).join(' ')); // group 3 words per block for smoother flow
      el.innerHTML = chunks.map(chunk => `<span class="line-block mr-2">${chunk}</span>`).join('');
      revealObserver.observe(el);
    });

    document.querySelectorAll('.reveal').forEach(el => {
      if(!el.classList.contains('reveal-lines')) {
         revealObserver.observe(el);
      }
    });

    // 5. 3D Tilt Interaction (Cards)
    document.querySelectorAll('.tilt-card').forEach(card => {
      const content = card.querySelector('.tilt-content');
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate minimal rotation (-3 to 3 degrees)
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        if(content) content.style.transform = `translateZ(20px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        if(content) content.style.transform = `translateZ(0)`;
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0A0A] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]" id="loader">
<div className="text-2xl font-semibold tracking-tighter text-white animate-pulse">NA</div>
<div className="mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-white/5">
<div className="h-full w-full origin-left bg-gradient-to-r from-[#FF5A00] to-[#FFB800]" style={{animation: 'load-bar 1.5s cubic-bezier(0.85, 0, 0.15, 1) forwards'}}></div>
</div>
</div>

<div className="fixed inset-0 z-[9999] pointer-events-none hidden md:block mix-blend-screen">
<div className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-200" id="cursorDot"></div>
<div className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A00]/40 blur-xl transition-all duration-500 ease-out" id="cursorGlow"></div>
</div>

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute -top-24 -left-16 h-[32rem] w-[32rem] rounded-full opacity-20 blur-[100px]" data-speed="0.05" id="bgBlob1" style={{background: 'radial-gradient(circle, rgba(255,90,0,0.4) 0%, rgba(255,42,42,0.15) 50%, transparent 100%)'}}></div>
<div className="absolute top-[40%] right-[-10rem] h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-[100px]" data-speed="-0.03" id="bgBlob2" style={{background: 'radial-gradient(circle, rgba(255,184,0,0.3) 0%, rgba(201,28,28,0.15) 50%, transparent 100%)'}}></div>
<div className="absolute bottom-[-10rem] left-[20%] h-[24rem] w-[24rem] rounded-full opacity-10 blur-[100px]" data-speed="0.08" id="bgBlob3" style={{background: 'radial-gradient(circle, rgba(255,42,42,0.2) 0%, transparent 100%)'}}></div>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
</div>
<header className="fixed w-full top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/40 backdrop-blur-2xl transition-all duration-500" id="header">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
<a className="cursor-hover text-xl font-semibold tracking-tighter text-white transition-transform hover:scale-105" href="#">NA</a>
<nav className="hidden items-center gap-10 md:flex">
<a className="cursor-hover text-xs font-medium uppercase tracking-[0.1em] text-white/60 transition duration-300 hover:text-white" href="#services">Services</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-[0.1em] text-white/60 transition duration-300 hover:text-white" href="#process">Process</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-[0.1em] text-white/60 transition duration-300 hover:text-white" href="#portfolio">Work</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-[0.1em] text-white/60 transition duration-300 hover:text-white" href="#dashboard">System</a>
</nav>
<a className="cursor-hover group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/10" href="#cta">
<span className="relative z-10">Start Project</span>
<div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-[#FF5A00] to-[#FF2A2A] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
</a>
</div>
</header>
<main>
<section className="relative min-h-[100vh] pt-24 flex items-center overflow-hidden">
<div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-32">
<div className="max-w-3xl z-10">
<div className="reveal mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111111]/60 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF7A00] opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF7A00]"></span>
</span>
            Engineering premium digital growth
          </div>
<h1 className="reveal-lines text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            We build digital brands that move faster, look sharper, and convert harder.
          </h1>
<p className="reveal mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            An independent creative and performance agency. We combine cinematic motion, refined aesthetics, and data-driven acquisition for modern companies.
          </p>
<div className="reveal mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
<a className="cursor-hover group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-medium text-white transition duration-500 hover:scale-[1.02]" href="#contact" style={{background: 'linear-gradient(90deg, #FF5A00 0%, #FF2A2A 100%)', boxShadow: '0 0 3rem rgba(255,90,0,0.3)'}}>
<span className="relative z-10">Explore the system</span>
<iconify-icon className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
<div className="absolute inset-0 -z-10 translate-y-full bg-black/20 transition-transform duration-500 group-hover:translate-y-0"></div>
</a>
</div>
</div>
<div className="reveal relative hidden lg:block z-10 perspective-[2000px]">

<div className="tilt-card relative h-[36rem] w-full rounded-[2.5rem] border border-white/10 bg-[#111111]/40 backdrop-blur-2xl p-6 overflow-hidden" data-speed="0.08">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-50"></div>
<div className="tilt-content relative h-full w-full rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#FF7A00]/20 blur-[80px]"></div>
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="text-xs uppercase tracking-[0.2em] text-white/40">Live Metrics</div>
<div className="flex gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
</div>
</div>
<div className="flex-1 mt-8 space-y-6">

<div className="relative h-24 w-full">
<svg className="h-full w-full overflow-visible stroke-[#FF5A00] stroke-[0.5] fill-none drop-shadow-[0_0_10px_rgba(255,90,0,0.5)]" viewbox="0 0 100 40">
<path className="dash-anim" d="M0 40 Q 15 30, 25 35 T 50 15 T 75 20 T 100 0" strokeLinecap="round"></path>
</svg>
<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#FF5A00]/10 to-transparent clip-path-chart"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/[0.02] p-4 border border-white/[0.05]">
<div className="text-xs text-white/40 mb-1">Acquisition</div>
<div className="text-2xl font-semibold tracking-tight text-white">+142%</div>
</div>
<div className="rounded-2xl bg-white/[0.02] p-4 border border-white/[0.05]">
<div className="text-xs text-white/40 mb-1">Brand Velocity</div>
<div className="text-2xl font-semibold tracking-tight text-white">9.8x</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center overflow-hidden px-6 py-24 lg:px-8 border-y border-white/[0.03]" id="process">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,90,0,0.03)_0%,transparent_70%)]"></div>
<div className="reveal text-center mb-16 relative z-20">
<div className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF5A00]">The Creative Engine</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Continuous intelligence flow.</h2>
<p className="mt-4 text-sm text-white/50 max-w-md mx-auto">We process raw market data, design inspiration, and brand strategy to output high-converting assets.</p>
</div>
<div className="reveal relative flex h-[28rem] w-full max-w-5xl items-center justify-center">

<div className="absolute left-0 top-0 flex h-full w-1/3 flex-col justify-center gap-12 pr-12">

<div className="relative flex items-center justify-end">
<span className="absolute -left-4 text-xs tracking-tight text-white/40">Data Strategy</span>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/10 relative overflow-hidden">
<div className="particle-in absolute h-[1px] w-12 bg-gradient-to-r from-transparent via-[#FF2A2A] to-transparent shadow-[0_0_10px_#FF2A2A]" style={{animationDelay: '0s'}}></div>
</div>
</div>

<div className="relative flex items-center justify-end">
<span className="absolute -left-4 text-xs tracking-tight text-white/40">Design Language</span>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/10 relative overflow-hidden">
<div className="particle-in absolute h-[1px] w-16 bg-gradient-to-r from-transparent via-[#FFB800] to-transparent shadow-[0_0_10px_#FFB800]" style={{animationDelay: '0.8s'}}></div>
</div>
</div>

<div className="relative flex items-center justify-end">
<span className="absolute -left-4 text-xs tracking-tight text-white/40">Media Buying</span>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/10 relative overflow-hidden">
<div className="particle-in absolute h-[1px] w-10 bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent shadow-[0_0_10px_#FF5A00]" style={{animationDelay: '1.5s'}}></div>
</div>
</div>
</div>

<div className="relative z-10 flex h-48 w-48 items-center justify-center">
<div className="energy-ring-1 absolute h-[220%] w-[220%] rounded-full border border-white/[0.05] border-t-[#FF5A00]/30 border-b-[#FF5A00]/30 mix-blend-screen"></div>
<div className="energy-ring-2 absolute h-[170%] w-[170%] rounded-full border border-white/[0.08] border-r-[#FFB800]/40 border-l-[#FFB800]/40 mix-blend-screen"></div>
<div className="energy-core relative flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl">
<div className="h-16 w-16 rounded-full bg-gradient-to-tr from-[#FF5A00] to-[#FFB800] blur-[4px] mix-blend-screen"></div>
<div className="absolute h-8 w-8 rounded-full bg-white blur-[2px] opacity-80"></div>
</div>
</div>

<div className="absolute right-0 top-0 flex h-full w-1/3 flex-col justify-center gap-12 pl-12">

<div className="relative flex items-center justify-start">
<div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/10 relative overflow-hidden">
<div className="particle-out absolute h-[1px] w-20 bg-gradient-to-l from-transparent via-[#FFB800] to-transparent shadow-[0_0_15px_#FFB800]" style={{animationDelay: '0.4s'}}></div>
</div>
<span className="absolute -right-4 text-xs tracking-tight text-white/40 whitespace-nowrap">Brand Identity</span>
</div>

<div className="relative flex items-center justify-start">
<div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/10 relative overflow-hidden">
<div className="particle-out absolute h-[1px] w-16 bg-gradient-to-l from-transparent via-[#FF5A00] to-transparent shadow-[0_0_15px_#FF5A00]" style={{animationDelay: '1.2s'}}></div>
</div>
<span className="absolute -right-4 text-xs tracking-tight text-white/40 whitespace-nowrap">Cinematic Assets</span>
</div>

<div className="relative flex items-center justify-start">
<div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/10 relative overflow-hidden">
<div className="particle-out absolute h-[1px] w-24 bg-gradient-to-l from-transparent via-[#FF2A2A] to-transparent shadow-[0_0_15px_#FF2A2A]" style={{animationDelay: '2.1s'}}></div>
</div>
<span className="absolute -right-4 text-xs tracking-tight text-white/40 whitespace-nowrap">Acquisition Campaigns</span>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-8" id="services">
<div className="mb-16 max-w-3xl">
<div className="reveal text-xs uppercase tracking-[0.2em] text-white/40">Capabilities</div>
<h2 className="reveal-lines mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Systems designed to make your brand impossible to ignore.</h2>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md">
<div className="tilt-content">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF7A00]" height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Digital Experiences</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50">High-conversion platforms with refined aesthetics, smooth WebGL interactions, and cinematic storytelling.</p>
</div>
</div>
<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-100">
<div className="tilt-content">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FFB800]" height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Brand Architecture</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50">Comprehensive identity systems, typography grids, and visual languages built for premium positioning.</p>
</div>
</div>
<div className="tilt-card cursor-hover reveal group rounded-[2rem] border border-white/[0.08] bg-[#0E0E0E]/80 p-8 backdrop-blur-md transition-all delay-200">
<div className="tilt-content">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors group-hover:bg-[#FF2A2A]/10 group-hover:border-[#FF2A2A]/30">
<iconify-icon className="text-white transition-colors group-hover:text-[#FF2A2A]" height="24" icon="solar:cursor-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Performance Media</h3>
<p className="mt-4 text-sm leading-relaxed text-white/50">Algorithmic bidding strategies paired with thumb-stopping creative to drive scalable, profitable acquisition.</p>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-8 border-t border-white/[0.03]" id="portfolio">
<div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div className="max-w-3xl">
<div className="reveal text-xs uppercase tracking-[0.2em] text-white/40">Selected Work</div>
<h2 className="reveal-lines mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Crafted for impact.</h2>
</div>
</div>
<div className="grid gap-8 lg:grid-cols-2">

<div className="tilt-card cursor-hover reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 aspect-[4/3]">
<div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
<div className="absolute inset-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(255,90,0,0.15), transparent 50%), #161616'}}>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-transform duration-[1.5s] group-hover:scale-150"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
<div className="text-xs uppercase tracking-wider text-white/50 mb-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100">E-Commerce System</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Aureline Commerce</h3>
</div>
</div>
</div>

<div className="tilt-card cursor-hover reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 aspect-[4/3] lg:translate-y-24">
<div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
<div className="absolute inset-0 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(255,184,0,0.12), transparent 60%), #141414'}}>
<div className="absolute right-0 bottom-0 h-full w-2/3 border-l border-t border-white/[0.03] bg-white/[0.01] rounded-tl-3xl backdrop-blur-sm transition-transform duration-[1.5s] group-hover:translate-x-4 group-hover:translate-y-4"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
<div className="text-xs uppercase tracking-wider text-white/50 mb-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100">SaaS Identity</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Nexora Engine</h3>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-8 mt-12 lg:mt-32" id="dashboard">
<div className="mb-16 max-w-3xl">
<div className="reveal text-xs uppercase tracking-[0.2em] text-[#FFB800]">System Interface</div>
<h2 className="reveal-lines mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Diagnostic Workspace.</h2>
</div>
<div className="reveal tilt-card rounded-[2.5rem] border border-white/10 bg-[#111111]/60 p-2 backdrop-blur-2xl">
<div className="rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-8 lg:p-12 overflow-hidden relative">

<div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/5 pb-8 mb-8">
<div>
<div className="text-sm font-medium tracking-tight text-white">Growth Projection Model</div>
<div className="mt-1 text-xs text-white/40">Interactive strategic baseline</div>
</div>
<button className="cursor-hover group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-medium text-white transition hover:border-[#FFB800]/30 hover:bg-white/10">
<span className="relative z-10 flex items-center gap-2">
                Run Simulation
                <iconify-icon height="16" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</span>
</button>
</div>
<div className="grid gap-8 lg:grid-cols-3">

<div className="group relative rounded-2xl border border-white/[0.04] bg-[#141414] p-6 transition-colors hover:bg-[#181818]">
<div className="text-xs uppercase tracking-widest text-white/40 mb-4">Brand Clarity</div>
<div className="flex items-end gap-3">
<span className="text-4xl font-semibold tracking-tighter text-white">84</span>
<span className="text-xs text-[#FFB800] mb-1">/100</span>
</div>
<div className="mt-6 h-1 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[84%] bg-gradient-to-r from-[#FF5A00] to-[#FFB800] rounded-full transform origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100"></div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/[0.04] bg-[#141414] p-6 transition-colors hover:bg-[#181818]">
<div className="text-xs uppercase tracking-widest text-white/40 mb-4">Conversion Rate</div>
<div className="flex items-end gap-3">
<span className="text-4xl font-semibold tracking-tighter text-white">4.2</span>
<span className="text-xs text-[#FF7A00] mb-1">% Avg</span>
</div>
<div className="mt-6 h-1 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[65%] bg-gradient-to-r from-[#FF2A2A] to-[#FF7A00] rounded-full transform origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100"></div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/[0.04] bg-[#141414] p-6 transition-colors hover:bg-[#181818]">
<div className="text-xs uppercase tracking-widest text-white/40 mb-4">Acquisition Cost</div>
<div className="flex items-end gap-3">
<span className="text-4xl font-semibold tracking-tighter text-white">12</span>
<span className="text-xs text-[#2A2A2A] mb-1 line-through border border-white/10 px-1 rounded bg-white/5">$28</span>
</div>
<div className="mt-6 h-1 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[40%] bg-[#FF2A2A] rounded-full transform origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-8" id="cta">
<div className="reveal tilt-card relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#111111]/80 px-8 py-24 backdrop-blur-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,90,0,0.15),transparent_60%)]"></div>
<div className="tilt-content relative z-10 mx-auto max-w-2xl">
<div className="text-xs uppercase tracking-[0.2em] text-[#FF7A00] mb-6">Initiate</div>
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">Ready to architect your next growth phase?</h2>
<a className="cursor-hover group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition duration-500 hover:scale-[1.02]" href="#contact-form">
<span className="relative z-10">Start the conversation</span>
<iconify-icon className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
<div className="absolute inset-0 -z-10 translate-y-full bg-gray-200 transition-transform duration-500 group-hover:translate-y-0"></div>
</a>
</div>
</div>
</section>

<section className="relative w-full border-t border-white/[0.05]" id="contact-form" style={{background: 'linear-gradient(90deg, #FF5A00 0%, #FF2A2A 100%)'}}>
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
<div className="grid gap-16 lg:grid-cols-2 lg:gap-12">

<div className="reveal max-w-xl">
<div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white">Contato</div>
<h2 className="mb-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Vamos conversar sobre seus projetos?</h2>
<p className="mb-6 text-lg leading-relaxed text-white/90">
              Quer saber mais sobre como trabalhamos, conversar sobre seus desafios ou tirar dúvidas? Fale com a gente. Adoramos trocar ideias sobre produtos digitais!
            </p>
<p className="text-lg leading-relaxed text-white/90">
              Entre em contato e conheça o jeito soft de desenvolver software.
            </p>
</div>

<div className="reveal reveal-delay-100">
<form className="flex flex-col gap-6">

<div className="grid gap-6 sm:grid-cols-2">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-white">Nome Completo*</label>
<input className="w-full rounded-lg border border-white/10 bg-black/15 px-4 py-3.5 text-base text-white placeholder-white/40 shadow-sm backdrop-blur-md transition-all focus:border-white/40 focus:bg-black/20 focus:outline-none focus:ring-0" required="" type="text"/>
</div>
<div className="relative flex flex-col gap-2">
<label className="text-sm font-medium text-white">Cargo*</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-white/10 bg-black/15 px-4 py-3.5 text-base text-white shadow-sm backdrop-blur-md transition-all focus:border-white/40 focus:bg-black/20 focus:outline-none focus:ring-0 cursor-pointer" required="">
<option className="text-black" disabled="" selected="" value="">Selecione</option>
<option className="text-black" value="ceo">CEO / Fundador</option>
<option className="text-black" value="diretor">Diretor</option>
<option className="text-black" value="gerente">Gerente</option>
<option className="text-black" value="outro">Outro</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/60">
<iconify-icon height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid gap-6 sm:grid-cols-2">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-white">Nome da empresa*</label>
<input className="w-full rounded-lg border border-white/10 bg-black/15 px-4 py-3.5 text-base text-white placeholder-white/40 shadow-sm backdrop-blur-md transition-all focus:border-white/40 focus:bg-black/20 focus:outline-none focus:ring-0" required="" type="text"/>
</div>
<div className="relative flex flex-col gap-2">
<label className="text-sm font-medium text-white">Mercado*</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-white/10 bg-black/15 px-4 py-3.5 text-base text-white shadow-sm backdrop-blur-md transition-all focus:border-white/40 focus:bg-black/20 focus:outline-none focus:ring-0 cursor-pointer" required="">
<option className="text-black" disabled="" selected="" value="">Selecione</option>
<option className="text-black" value="tecnologia">Tecnologia</option>
<option className="text-black" value="saude">Saúde</option>
<option className="text-black" value="financas">Finanças</option>
<option className="text-black" value="varejo">Varejo</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/60">
<iconify-icon height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid gap-6 sm:grid-cols-2">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-white">E-mail*</label>
<input className="w-full rounded-lg border border-white/10 bg-black/15 px-4 py-3.5 text-base text-white placeholder-white/40 shadow-sm backdrop-blur-md transition-all focus:border-white/40 focus:bg-black/20 focus:outline-none focus:ring-0" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-white">Telefone*</label>
<input className="w-full rounded-lg border border-white/10 bg-black/15 px-4 py-3.5 text-base text-white placeholder-white/40 shadow-sm backdrop-blur-md transition-all focus:border-white/40 focus:bg-black/20 focus:outline-none focus:ring-0" required="" type="tel"/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-white">Fale sobre seu projeto ou desafio</label>
<textarea className="w-full resize-none rounded-lg border border-white/10 bg-black/15 px-4 py-3.5 text-base text-white placeholder-white/40 shadow-sm backdrop-blur-md transition-all focus:border-white/40 focus:bg-black/20 focus:outline-none focus:ring-0" rows="4"></textarea>
</div>

<div className="mt-2 flex items-start gap-3">
<div className="relative flex h-6 items-center justify-center">
<input className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/40 bg-black/10 transition-all checked:border-white checked:bg-white hover:border-white" id="privacy" required="" type="checkbox"/>
<div className="pointer-events-none absolute text-[#FF5A00] opacity-0 peer-checked:opacity-100 flex items-center justify-center">
<iconify-icon height="14" icon="lucide:check" style={{strokeWidth: '2.5px'}} width="14"></iconify-icon>
</div>
</div>
<label className="text-sm leading-6 text-white cursor-pointer select-none" htmlFor="privacy">
                  Eu concordo com a <a className="font-medium underline underline-offset-2 hover:text-white/80 transition-colors" href="#">Política de Privacidade</a>
</label>
</div>

<div className="mt-4">
<button className="group inline-flex items-center gap-3 rounded-full bg-white p-1.5 pr-6 text-base font-medium text-[#111] transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 shadow-xl shadow-black/10" type="submit">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-transparent text-[#FF5A00] transition-transform group-hover:translate-x-0.5">
<iconify-icon height="20" icon="lucide:arrow-right" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</span>
<span>Vamos conversar</span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-black">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
<div className="grid gap-12 lg:grid-cols-2">
<div>
<a className="cursor-hover text-2xl font-semibold tracking-tighter text-white" href="#">NA</a>
<p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">Engineering premium digital systems. Cinematic aesthetics fused with mathematical performance.</p>
</div>
<div className="grid gap-8 grid-cols-2 sm:grid-cols-3">
<div>
<div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Index</div>
<div className="flex flex-col gap-4">
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#services">Services</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#process">Process</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#portfolio">Work</a>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Social</div>
<div className="flex flex-col gap-4">
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#">X / Twitter</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#">LinkedIn</a>
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="#">Read.cv</a>
</div>
</div>
<div className="col-span-2 sm:col-span-1">
<div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Contact</div>
<div className="flex flex-col gap-4">
<a className="cursor-hover text-sm tracking-tight text-white/60 transition hover:text-white" href="mailto:hello@novaaxis.com">hello@nova.axis</a>
<span className="text-xs text-white/30 mt-4">Los Angeles / Remote</span>
</div>
</div>
</div>
</div>
<div className="mt-20 flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-white/30">
<p>© 2026 Nova Axis System.</p>
<p className="mt-2 sm:mt-0">All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
