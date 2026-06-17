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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      document.addEventListener('DOMContentLoaded', () => {
        // Lucide
        lucide.createIcons();

        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Mobile menu
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        let open = false;
        btn?.addEventListener('click', () => {
          open = !open;
          if (nav) nav.classList.toggle('hidden', !open);
          btn.innerHTML = open
            ? '<i data-lucide="x" class="h-5 w-5 text-white"></i>'
            : '<i data-lucide="menu" class="h-5 w-5 text-white"></i>';
          lucide.createIcons();
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[1100px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div></div>


<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-neutral-950/80 border-b border-white/10">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-5 pb-5 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center w-[70px] h-[26px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce051efb-23c7-4a80-8de4-ef217d431457_320w.png)] bg-cover pr-2 pl-2 invert" href="/home"></a>

<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition text-sm font-normal text-neutral-300 font-sans" href="/services">Services</a>
<a className="hover:text-white transition text-sm font-normal text-neutral-300 font-sans" href="/work">Work</a>
<a className="hover:text-white transition text-sm font-normal text-neutral-300 font-sans" href="/insights">Insights</a>
<a className="hover:text-white transition text-sm font-normal text-neutral-300 font-sans" href="/contact">Contact</a>
</nav>


<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10" id="menuBtn">
<svg aria-hidden="true" className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden" id="mobileNav">
<div className="mt-2 rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur">
<div className="p-4 grid gap-2">
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#">Services</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#">Work</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#">Insights</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans" href="#">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 font-sans" href="#">
<svg aria-hidden="true" className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Request Access
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="pt-24 relative">
<div className="max-w-7xl md:px-8 md:pt-16 md:pb-28 mr-auto ml-auto pt-10 pr-6 pb-10 pl-6">

<div className="mx-auto mb-6 flex w-full items-center justify-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm font-normal text-neutral-200 font-sans">Crafting Distinctive Digital Identities</span>
</div>
</div>

<div className="max-w-4xl text-center mr-auto ml-auto space-y-8">
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-3xl font-light text-white tracking-tight font-manrope">
            Branding that truly converts
          </h1>
<p className="md:text-lg text-base text-neutral-400 mt-5">
            Elevate your presence with identity systems and product visuals. We design for clarity, momentum, and measurable outcomes.
          </p>

<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
<a className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block bg-gray-950 rounded-xl pt-3 pr-6 pb-3 pl-6">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-1 text-sm font-medium">Get Started Now</span>
<svg className="lucide lucide-arrow-right w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</span>
</a>
<a className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl pt-3 pr-5 pb-3 pl-5 backdrop-blur-lg" href="#">
              See Projects
              <svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>


<section className="z-10 sm:py-24 fade-in fade-in-delay-4 pt-8 pb-8 relative" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Trusted by teams at</p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>
<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">
<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="NASA logo" className="" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="SpaceX logo" className="" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Uber logo" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Visa logo" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Grab logo" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Bose logo" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
</div>
<div className="flex h16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Discover logo" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="DJI logo" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Nikon logo" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Craftsman logo" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Sony logo" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-16 shrink-0">
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="NASA logo" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="SpaceX logo" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Uber logo" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Visa logo" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Grab logo" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Bose logo" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Discover logo" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="DJI logo" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Nikon logo" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Craftsman logo" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
</div>
<div className="flex h-16 w-16 items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300">
<iconify-icon aria-label="Sony logo" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>
</div>
</div>

</div>
<style className="">
        @keyframes ticker {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        .ticker-track {
            animation: ticker 40s linear infinite;
            width: calc(200% + 16px);
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }
    </style>
</section>
</div>
</section>

<section className="relative" style={{opacity: '0', transform: 'translateY(30px)', animation: 'fadeInUp 0.8s ease-out 0.3s forwards'}}>
<style className="">
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: 200px 0;
      }
    }

    .portfolio-card {
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform-style: preserve-3d;
    }

    .portfolio-card:hover {
      transform: translateY(-8px) rotateX(5deg) rotateY(2deg);
    }

    .portfolio-card img {
      transition: all 0.6s ease;
      filter: grayscale(100%);
    }

    .portfolio-card:hover img {
      filter: grayscale(20%);
      transform: scale(1.05);
    }

    .portfolio-card .view-button {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }

    .portfolio-card:hover .view-button {
      opacity: 1;
      transform: translateY(0);
    }

    .masonry-item:nth-child(1) { animation-delay: 0.1s; }
    .masonry-item:nth-child(2) { animation-delay: 0.2s; }
    .masonry-item:nth-child(3) { animation-delay: 0.3s; }
    .masonry-item:nth-child(4) { animation-delay: 0.4s; }
    .masonry-item:nth-child(5) { animation-delay: 0.5s; }
    .masonry-item:nth-child(6) { animation-delay: 0.6s; }
    .masonry-item:nth-child(7) { animation-delay: 0.7s; }
    .masonry-item:nth-child(8) { animation-delay: 0.8s; }
    .masonry-item:nth-child(9) { animation-delay: 0.9s; }

    .section-header {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    .section-header h2 {
      background: linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: float 4s ease-in-out infinite;
    }

    .loading-shimmer {
      background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
      background-size: 200px 100%;
      animation: shimmer 2s infinite;
    }

    .view-button svg {
      transition: transform 0.2s ease;
    }

    .portfolio-card:hover .view-button svg {
      transform: rotate(45deg) scale(1.1);
    }

    @media (prefers-reduced-motion: reduce) {
      .portfolio-card,
      .portfolio-card img,
      .view-button,
      .section-header {
        animation: none !important;
        transition: none !important;
      }
      
      .portfolio-card:hover {
        transform: none !important;
      }
    }
  </style>
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6" style={{display: 'block'}}>
<div className="mx-auto max-w-3xl text-center section-header">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-manrope font-medium">Selected Work</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300 font-sans" style={{opacity: '0', animation: '0.8s ease-out 0.5s 1 normal forwards running fadeInUp'}}>Strategy-led direction and tasteful execution across identity, web, and motion.</p>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mt-10">

<a className="portfolio-card masonry-item group block overflow-hidden transition bg-neutral-900/50 rounded-lg ring-white/10 ring-1 mb-6 relative" href="/casestudy" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Industrial 3D player render" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e5edfb1-71c0-45ee-851e-b931230335ef_800w.png"/>
<div className="pointer-events-none absolute inset-x-3 bottom-3 cursor-pointer" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
    View Casestudy
    <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 transition" href="/casestudy" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Minimal portrait with headphones" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dda8e6d4-379e-4543-be25-a52f7ddaaf0a_800w.png"/>
<div className="pointer-events-none absolute inset-x-3 bottom-3 cursor-pointer" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Casestudy
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 transition" href="/casestudy" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Cosmetic tube held by hand" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f952d389-43de-4241-860a-7ac1c4efacc5_800w.png?w=800&amp;q=80"/>
<div className="absolute right-3 bottom-3 left-3" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Casestudy
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>


<a className="portfolio-card masonry-item group relative block overflow-hidden ring-1 ring-white/10 transition bg-neutral-900/50 rounded-lg mb-6" href="/casestudy" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Lemon still life on block" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab0ad909-3ead-4caa-a873-7fb9966063f3_800w.png?w=800&amp;q=80"/>
<div className="absolute right-3 bottom-3 left-3 gap-x-2 gap-y-2" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button md:text-sm flex gap-2 text-xs text-white font-sans bg-white/10 w-full ring-white/20 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center justify-center">
    View Casestudy
    <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
<a className="portfolio-card masonry-item group relative block overflow-hidden ring-1 ring-white/10 transition bg-neutral-900/50 rounded-lg mb-6" href="/casestudy" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Lemon still life on block" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d2bf92d-d36d-45a3-81f2-91fbf415f24c_800w.png?w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-x-3 bottom-3 cursor-pointer" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Casestudy
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 transition" href="#" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Cosmetics on circular plinth" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e6d8d1b-115f-4e3b-9e0e-0f62391d07cc_800w.png"/>
<div className="pointer-events-none absolute inset-x-3 bottom-3 cursor-pointer" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Casestudy
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 transition" href="#" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Matte coffee bag packaging" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0b0e741-063f-42e3-aea0-6bbda44c8af1_1600w.png"/>
<div className="pointer-events-none absolute inset-x-3 bottom-3 cursor-pointer" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Casestudy
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 transition" href="/casestudy" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Hand holding product bottle" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5da4838-3aa6-46dc-a9e9-3cbd28174d22_1600w.png"/>
<div className="pointer-events-none absolute inset-x-3 bottom-3 cursor-pointer" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Casestudy
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="portfolio-card masonry-item group relative mb-6 block overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-900/50 transition" href="/casestudy" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out forwards'}}>
<img alt="Minimal packaging still life" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0eb740cc-bb33-4d58-a47f-f8244aa5f47f_800w.png"/>
<div className="pointer-events-none absolute inset-x-3 bottom-3 cursor-pointer" onclick="window.location.href='/casestudy'" role="button">
<div className="view-button w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Casestudy
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section><section className="relative">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">

<div className="ring-1 ring-white/10 overflow-hidden bg-neutral-900/50 rounded-lg">
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="Professional portrait" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_800w.jpg"/>
</div>
</div><div className="">
<h2 className="md:text-6xl text-4xl font-light text-white tracking-tight font-manrope">Meet Alex</h2>
<p className="mt-4 text-sm md:text-base text-neutral-300 font-sans">
          I'm Alex, a creative Digital Product Designer and Front-end Developer based in San Francisco. I specialize in creating seamless user experiences and innovative digital solutions that bridge design and technology to drive business growth.
        </p>

<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">UI/UX Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">React Development</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Design Systems</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Prototyping</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Web Development</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">TypeScript</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Figma</span>
</div>
<div className="mt-6 h-px bg-white/10"></div>

<div className="mt-6 space-y-4">
<div className="grid grid-cols-3 items-baseline">
<span className="text-sm md:text-base text-neutral-200 font-sans">Senior Designer</span>
<span className="text-sm md:text-base text-neutral-300 font-sans">TechFlow Inc</span>
<span className="text-right text-sm md:text-base text-neutral-400 font-sans">Currently</span>
</div>
<div className="grid grid-cols-3 items-baseline">
<span className="text-sm md:text-base text-neutral-200 font-sans">Product Designer</span>
<span className="text-sm md:text-base text-neutral-300 font-sans">PixelCraft Studio</span>
<span className="text-right text-sm md:text-base text-neutral-400 font-sans">2022–24</span>
</div>
<div className="grid grid-cols-3 items-baseline">
<span className="text-sm md:text-base text-neutral-200 font-sans">UI Designer</span>
<span className="text-sm md:text-base text-neutral-300 font-sans">StartupLab</span>
<span className="text-right text-sm md:text-base text-neutral-400 font-sans">2020–22</span>
</div>
</div>

<div className="mt-8 flex items-center gap-3 text-sm text-neutral-300">
<span className="font-sans">Recent Projects</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg aria-hidden="true" className="lucide lucide-arrow-down h-3.5 w-3.5 text-neutral-200" data-lucide="arrow-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</span>
</div>
</div>

</div>
<div className="mt-10 h-px bg-white/10"></div>

<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="/work">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Dashboard interface design" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b1b4397-d561-464c-9729-1d5617f66579_800w.jpg"/>
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Project
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="/work">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Mobile app interface" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dc04406-de49-4988-8d82-e1d9fe1d83c1_800w.jpg"/>
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Project
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Website design mockup" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d1e46f6-6956-44c3-a8b6-ceb2c438c8f5_800w.jpg"/>
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Project
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<div className="aspect-[16/11] w-full overflow-hidden">
<img alt="Design system components" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77827dc5-39e4-4855-bf02-5d844f2cc636_800w.jpg"/>
</div>
<div className="pointer-events-none absolute inset-x-3 bottom-3">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white font-sans flex items-center justify-center gap-2">
            View Project
            <svg aria-hidden="true" className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section><section className="relative">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-neutral-900/50 rounded-2xl items-start p-6 md:p-8">

<div className="aspect-[4/5] w-full overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 rounded-lg">
<img alt="Design process sketching on paper" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ab83c55-bb01-43d7-b04c-23f9c4a252e4_800w.jpg"/>
</div>

<div className="">

<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs md:text-sm text-neutral-200 font-sans">Design process</span>
</div>

<h2 className="mt-4 md:text-6xl text-4xl font-light text-white tracking-tight font-manrope">Process</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300 font-sans">
          Crafting bold visuals that inspire and elevate brands through a thoughtful, streamlined process.
        </p>

<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block px-5 py-2.5 rounded-xl bg-gray-950 text-sm">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-0.5">Book a Free Call</span>
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
</span>
</a>
<a className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl px-5 py-2.5 backdrop-blur" href="/work">
            See Projects
            <svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>

<div className="mt-6 space-y-4">

<div className="relative overflow-hidden ring-1 ring-white/10 md:p-6 bg-neutral-900/60 rounded-2xl pt-5 pr-5 pb-5 pl-5">
<span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-neutral-300 text-xs ring-1 ring-white/10">1</span>
<div className="flex gap-4 items-start">
<div className="inline-flex h-9 w-20 ring-1 ring-white/10 bg-[#ffffff]/5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-lightbulb text-neutral-200" data-lucide="lightbulb" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="">
<h3 className="md:text-xl text-lg font-medium text-white tracking-tight">Define Your Vision</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans">
                  Find the perfect plan tailored to your needs—balancing features, flexibility, and value—so we can align on goals effortlessly.
                </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-neutral-300 text-xs ring-1 ring-white/10">2</span>
<div className="flex items-start gap-4">
<div className="inline-flex h-9 w-20 ring-1 ring-white/10 bg-[#ffffff]/5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-sliders text-neutral-200" data-lucide="sliders" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg>
</div>
<div className="">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium">Submit Your Request</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans">
                  Send your requirements via our private portal. We clarify scope, share direction, and translate your vision into precise, actionable work.
                </p>
</div>
</div>
</div>

<div className="relative overflow-hidden ring-1 ring-white/10 md:p-6 bg-neutral-900/60 rounded-2xl pt-5 pr-5 pb-5 pl-5">
<span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-neutral-300 text-xs ring-1 ring-white/10">3</span>
<div className="flex items-start gap-4">
<div className="inline-flex h-9 w-20 ring-1 ring-white/10 bg-[#ffffff]/5 rounded-full items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-rocket text-neutral-200" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>
</div>
<div className="">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium">Project Delivered</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans">
                  Receive polished deliverables in 2–3 days. With an eye for detail and quality, we bring your brand to life—on time and beyond expectations.
                </p>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pb-24 pl-6">

<div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">

<div className="">

<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs md:text-sm text-neutral-200 font-sans">Design services</span>
</div>
<h2 className="mt-4 md:text-6xl text-4xl font-light text-white tracking-tight font-manrope">Services</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300 font-sans">
          Helping teams stand out with refined identity, product visuals, and content updates that captivate and convert.
        </p>

<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Product Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Brand Identity Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Branding</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Packaging Design</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Mockup Design</span>
</div>

<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block px-5 py-2.5 rounded-xl bg-gray-950 text-sm">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-0.5">Book a Free Call</span>
<svg className="lucide lucide-phone w-5 h-5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
</span>
</a>
<a className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl px-5 py-2.5 backdrop-blur" href="/work">
            See Projects
            <svg className="lucide lucide-play h-4 w-4" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>

<div className="ring-1 ring-white/10 overflow-hidden bg-neutral-900/50 rounded-xl">
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="Minimal product bottles still life" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e62d3a0-57fa-4882-a644-34db751f6e28_1600w.jpg"/>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg className="lucide lucide-sparkles h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle className="" cx="4" cy="20" r="2"></circle></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium">Brand Identity</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans">
              Crafting unique, memorable identities that resonate — from names and logos to flexible systems that scale across every touchpoint.
            </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg className="lucide lucide-shapes h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 3h8v8H3z"></path><path d="M7 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8"></path><path d="M16 3h5v5h-5z"></path></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium">Brand Design</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans">
              Visual systems and guidelines that keep your brand consistent — typography, colors, components, and motion rules.
            </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg className="lucide lucide-package h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium">Package Design</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans">
              Shelf‑ready packaging that looks premium and prints perfectly — dielines, variants, and compliance handled.
            </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-5 md:p-6">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 ring-1 ring-white/10 items-center justify-center bg-[#ffffff]/5 rounded-full">
<svg ="20"="" className="lucide lucide-image h-4.5 w-4.5 text-neutral-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L3 24"></path></svg>
</span>
<div className="flex-1">
<h3 className="text-lg md:text-xl text-white tracking-tight font-sans font-medium">Mockup Design</h3>
<p className="mt-1.5 text-sm md:text-base text-neutral-300 font-sans">
              High‑fidelity mockups for products and campaigns — perfect for pitches, listings, and launch pages.
            </p>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans"><svg className="lucide lucide-pen-line h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5 20.5 7.5"></path><path d="m7 13 9-9 4 4-9 9H7v-4z"></path></svg>Copy Updates</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Brand Migration</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Slide Decks</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Brand Graphics</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Social Media</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Icons</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Brand Integrations</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Optimization</span>
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs md:text-sm text-neutral-200 font-sans">Landing Pages</span>
</div>
</div>
</section><footer className="border-white/10 border-t relative pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">

<div className="col-span-2 md:col-span-4 lg:col-span-2">
<a className="inline-flex items-center justify-center bg-center w-[70px] h-[26px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce051efb-23c7-4a80-8de4-ef217d431457_320w.png)] bg-cover invert" href="#"></a>
<p className="text-sm text-neutral-400 font-sans mb-6 max-w-xs leading-relaxed">
          Crafting distinctive brand identities and digital product visuals that inspire and convert. Strategy-first design for modern teams.
        </p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-white transition" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="hover:text-white transition" href="#">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:text-white transition" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="col-span-1">
<h3 className="text-sm font-medium text-white mb-5 font-sans">Services</h3>
<ul className="space-y-3.5">
<li className=""><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Brand Identity</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Product Design</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Motion Graphics</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Web Development</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Design Systems</a></li>
</ul>
</div>

<div className="col-span-1">
<h3 className="text-sm font-medium text-white mb-5 font-sans">Company</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans flex items-center gap-2" href="#">Careers <span className="inline-flex items-center rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-white ring-1 ring-white/20">We're hiring</span></a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Our Process</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Case Studies</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Blog</a></li>
</ul>
</div>

<div className="col-span-1">
<h3 className="text-sm font-medium text-white mb-5 font-sans">Resources</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Help Center</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Documentation</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Community</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">API Status</a></li>
</ul>
</div>

<div className="col-span-1">
<h3 className="text-sm font-medium text-white mb-5 font-sans">Connect</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Contact Us</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Support</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Partner Program</a></li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition font-sans shadow-sm" href="#">
<svg aria-hidden="true" className="lucide lucide-mail h-3.5 w-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            hello@novalume.studio
          </a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-sm text-neutral-400 font-sans hover:text-white transition cursor-pointer">All systems operational</span>
</div>
<p className="text-sm text-neutral-400 font-sans">© <span className="font-sans" id="year">2026</span> Novalume Studio. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Privacy Policy</a>
<a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Terms of Service</a>
<a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Cookies</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
