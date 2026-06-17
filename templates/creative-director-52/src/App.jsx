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
          // Intersection Observer for the Entrance Animation
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.3
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.crazy-reveal-container').forEach(el => {
              observer.observe(el);
          });

          // Interactive 3D Tilt Effect on Mouse Move
          const wrapper = document.querySelector('.crazy-reveal-container');
          const text = document.querySelector('.crazy-text');

          if(wrapper && text) {
              wrapper.addEventListener('mousemove', (e) => {
                  const rect = wrapper.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const xPct = (x / rect.width) - 0.5;
                  const yPct = (y / rect.height) - 0.5;

                  // Creates a magnetic tilt effect following the mouse
                  text.style.transform = `rotateX(${yPct * -15}deg) rotateY(${xPct * 15}deg) translateZ(30px)`;
              });

              wrapper.addEventListener('mouseleave', () => {
                  // Resets transform smoothly when mouse leaves
                  text.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
              });
          }
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
      

<div className="absolute top-0 left-0 w-full h-[85vh] z-0 pointer-events-none">
<img alt="Cinematic piano string texture" className="w-full h-full object-cover opacity-[0.15] filter grayscale blur-[2px]" src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0a0a0a_90%)] opacity-95"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
</div>

<header className="w-full max-w-7xl mx-auto px-6 py-10 flex justify-between items-center relative z-10">
<div className="text-lg tracking-tight font-normal text-white">Y.N.</div>
<div className="text-xs font-light tracking-widest uppercase text-neutral-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse"></span>
        San Francisco
      </div>
</header>
<main className="flex-grow flex flex-col relative z-10">

<section className="w-full max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-40 md:pb-48">
<div className="max-w-4xl relative z-10">
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-medium text-white tracking-tighter mb-8 animate-hero-fade-up delay-100">
            SYSTEMS FOR CREATIVE SCALING
          </h1>
<h2 className="md:text-2xl text-xl font-normal text-neutral-400 tracking-wide max-w-3xl mb-12 animate-hero-fade-up delay-300">
            Creative Strategy / Narrative Design / AI Curation
          </h2>
<div className="w-12 h-[2px] bg-neutral-700 mb-10 animate-hero-fade-up delay-500"></div>
<p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl font-light animate-hero-fade-up delay-700">
            Bridging 15 years of global production and 100M+ streams with the
            architecture of human-centric AI. I design the narrative frameworks
            that align emerging technology with cultural integrity.
          </p>
</div>
</section>

<section className="w-full border-t border-neutral-900/50 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
<div className="flex items-baseline justify-between mb-24 md:mb-32">
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-200">
              Selected Projects
            </h3>
<span className="uppercase hidden md:inline-block text-sm font-light text-neutral-600 tracking-widest">
              2015 — Present
            </span>
</div>
<div className="flex flex-col gap-24 md:gap-40">

<article className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center group">
<div className="w-full lg:w-[45%] aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/60 relative order-1">
<img alt="Faul &amp; Wad Brand Visual and Abstract Graphic Logo" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/723a1326-8dca-41ff-a1ae-7ad194a63554_1600w.png"/>
</div>
<div className="w-full lg:w-[55%] flex flex-col gap-6 order-2">
<div className="flex flex-col gap-2">
<span className="text-sm font-light tracking-widest text-neutral-600 uppercase">
                    100M+ Streams
                  </span>
<h4 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                    Music Production &amp; Composition
                  </h4>
</div>
<p className="leading-relaxed text-xl text-neutral-400 font-extralight">
                  Foundational creative contributions to international hits,
                  including 'Changes' and Genblue’s 'Badass'. Focused on melodic
                  efficiency , harmony , sound design.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-base font-normal" href="https://www.youtube.com/watch?v=Cj25UpcBDt0" target="_blank">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                    Watch 'Changes'
                  </a>
<a className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors text-base font-light" href="https://www.youtube.com/watch?v=_nzdeQrEg3Q" target="_blank">
<iconify-icon className="text-xl text-neutral-400" icon="solar:play-linear"></iconify-icon>
                    Watch 'Badass'
                  </a>
</div>
</div>
</article>

<article className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center group">
<div className="w-full lg:w-[55%] flex flex-col gap-6 order-2 lg:order-1">
<div className="flex flex-col gap-2">
<span className="text-sm font-light tracking-widest text-neutral-600 uppercase">
                    Seoul, Bangkok, Paris
                  </span>
<h4 className="md:text-4xl text-3xl font-light text-white tracking-tight">
                    Growth Strategy
                  </h4>
</div>
<p className="text-xl text-neutral-400 font-extralight leading-relaxed">
                  Expertise in building digital ecosystems for the modern era.
                  Through platforms like Trinket.ai, I redefine the interaction
                  between fans and creators by transforming passive engagement
                  into active communities. By focusing on deep-tier engagement
                  and narrative-led growth, I have successfully scaled digital
                  footprints across high-dynamic markets.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors text-base font-light group/btn" href="https://trinket.ai/" target="_blank">
                    Explore Trinket
                    <iconify-icon className="text-base text-neutral-500 group-hover/btn:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="w-full lg:w-[45%] aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/60 relative order-1 lg:order-2">
<img alt="Trinket Logo on Gradient Background" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ad9a012-ae70-4d8f-b0d7-f98858944ecb_1600w.jpg"/>
</div>
</article>

<article className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center group">
<div className="w-full lg:w-[45%] aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/60 relative order-1">
<img alt="Ink &amp; Iron Impressionist Graphic Art" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb3cb69a-7fb8-4eb1-ac66-7a5432c8c0ff_1600w.png"/>
</div>
<div className="w-full lg:w-[55%] flex flex-col gap-6 order-2">
<div className="flex flex-col gap-2">
<span className="text-sm font-light tracking-widest text-neutral-600 uppercase">
                    Generative Media
                  </span>
<h4 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                    Narrative Innovation
                  </h4>
</div>
<p className="text-xl text-neutral-400 font-extralight leading-relaxed">
                  Exploring the new frontiers of storytelling via generative AI.
                  'L'Empire Bleu' is a visual and sonic laboratory where
                  technology serves aesthetic, proving that AI can be a
                  high-fashion narrative tool in the hands of a human creator.
                  This project represents a shift toward immersive,
                  multi-platform world-building.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors text-base font-light group/btn" href="https://lempirebleu.com/" target="_blank">
                    Preview: L'Empire Bleu (WIP)
                    <iconify-icon className="text-base text-neutral-500 group-hover/btn:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="w-full border-t border-neutral-900/50 relative overflow-hidden bg-[#050505] group">

<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
<div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-900/10 blur-[100px] rounded-full mix-blend-screen group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
<div className="max-w-[1000px] mx-auto px-6 py-40 md:py-56 text-center relative z-10 flex flex-col items-center crazy-reveal-container">
<iconify-icon className="text-5xl text-neutral-600 mb-12 spinning-vinyl" icon="solar:vinyl-linear"></iconify-icon>
<div className="crazy-text-wrapper perspective-1000">
<p className="crazy-text md:text-5xl lg:text-7xl bg-clip-text leading-[1.2] transition-transform duration-200 ease-out text-4xl font-normal italic text-transparent text-center bg-gradient-to-r from-neutral-600 via-white to-neutral-600 pb-4" style={{fontFamily: '\'Playfair Display\', serif', backgroundSize: '200% auto'}}>
              "An ongoing exploration into teaching machine learning to
              recognize the nuances of production and artistic merit. My work is
              dedicated to keeping the '
              <a className="text-[#A0C4FF] inline-block animate-bounce-subtle hover:underline underline-offset-8 decoration-[#A0C4FF]/50" href="https://olivier-e91.pages.dev/" style={{fontFamily: '\'Playfair Display\', serif'}} target="_blank">
                soul
              </a>
              ' in music discovery."
            </p>
</div>
<div className="w-[1px] h-[60px] bg-gradient-to-b from-neutral-600 to-transparent mt-12 mb-6 line-grow"></div>
<span className="text-xs font-light text-neutral-500 tracking-widest uppercase tag-reveal">
            — The Mission
          </span>
</div>
</section>

<section className="w-full border-t border-neutral-900/50">
<div className="flex flex-col text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 items-center justify-center">
<a className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all duration-300" href="mailto:olivierlhbz@gmail.com?subject=Inquiry%20About%20Extra%20Works&amp;body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20learn%20more%20about%20your%20extra%20works%20and%20unreleased%20projects.%0D%0A%0D%0AThank%20you!">
<span className="text-base font-light text-neutral-200">
              Explore Extra Works
            </span>
<iconify-icon className="text-base text-neutral-400 group-hover:text-neutral-200 group-hover:translate-x-1 transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="w-full border-t border-neutral-900/80 bg-[#0a0a0a] relative z-10 mt-auto">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-2">
<span className="text-lg font-light tracking-tight text-neutral-300">
            Y.N.
          </span>
<span className="text-sm font-extralight text-neutral-600">
            © 2026. All rights reserved.
          </span>
</div>
<div className="flex flex-wrap items-center gap-3 md:gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-all duration-300 text-sm font-light group" href="https://www.linkedin.com/in/olivier-lhabouz-670437122" rel="noopener noreferrer" target="_blank">
            LinkedIn
            <iconify-icon className="text-base text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-all duration-300 text-sm font-light group" href="mailto:olivierlhbz@gmail.com">
            Email
            <iconify-icon className="text-base text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-all duration-300 text-sm font-light group" href="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/81f0a1c2-c2dd-4093-9992-ba55b76ef471/6b0ae854-2b54-44cc-a236-d995ebcba77c-Resume-Olivier-Lhabouz.pdf?v=1780312291762" rel="noopener noreferrer" target="_blank">
            Resume
            <iconify-icon className="text-base text-neutral-500 group-hover:text-white transition-colors" icon="solar:document-text-linear"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
