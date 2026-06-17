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



        (function () {
          const cards = [
            { name: 'Sofia Alvarez', role: 'Growth Lead', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Jackson Mitchel', role: 'AI Lead', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80&auto=format&fit=crop' },
            { name: 'John Doe', role: 'Product Head', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Armenia Sean', role: 'Social Media Head', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Maya Patel', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a2d?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Liam Becker', role: 'Platform Engineer', img: 'https://images.unsplash.com/photo-1544005316-04d7f94c1d27?w=1200&q=80&auto=format&fit=crop' }
          ];

          let currentIndex = 2;
          const prevBtn = document.getElementById('teamPrevBtn');
          const nextBtn = document.getElementById('teamNextBtn');
          const carouselCards = document.querySelectorAll('.carousel-card');

          function updateCarousel() {
            carouselCards.forEach((card, i) => {
              const relativePos = i - currentIndex;
              let transform = '';
              let opacity = 1;
              let filter = 'brightness(1)';
              let zIndex = 1;
              let ringClass = 'ring-1 ring-white/10';
              let shadow = '';

              if (relativePos === 0) {
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                opacity = 1;
                zIndex = 10;
                ringClass = 'ring-2 ring-lime-300/40';
                shadow = '0 20px 60px rgba(163,230,53,0.3)';
              } else if (relativePos === -1) {
                transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
              } else if (relativePos === 1) {
                transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
              } else if (relativePos === -2) {
                transform = 'translateX(-360px) scale(0.85) rotateY(20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
              } else if (relativePos === 2) {
                transform = 'translateX(360px) scale(0.85) rotateY(-20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
              } else {
                transform = `translateX(${relativePos * 180}px) scale(0.75) rotateY(${-relativePos * 15}deg)`;
                opacity = 0;
                filter = 'brightness(0.5)';
                zIndex = 1;
              }

              card.style.transform = transform;
              card.style.opacity = opacity;
              card.style.filter = filter;
              card.style.zIndex = zIndex;
              card.style.boxShadow = shadow;
              card.className = `carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ${ringClass} ${relativePos === 0 ? 'bg-lime-400/10' : ''} transition-all duration-500`;
            });
          }

          if (prevBtn) {
            prevBtn.addEventListener('click', () => {
              currentIndex = (currentIndex - 1 + cards.length) % cards.length;
              updateCarousel();
            });
          }

          if (nextBtn) {
            nextBtn.addEventListener('click', () => {
              currentIndex = (currentIndex + 1) % cards.length;
              updateCarousel();
            });
          }

          updateCarousel();
        })();
      


        lucide.createIcons();
    
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
      

<nav className="fixed z-50 transition-all duration-300 bg-white/70 w-full border-gray-200/60 border-b top-0 right-0 left-0 shadow-[0_2px_15px_rgba(0,0,0,0.02)] backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex-1 flex max-w-min justify-start">
<a className="inline-flex items-center justify-center bg-center w-[160px] h-[55px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e8fca93-09c1-4713-b8aa-f1c0a6b79d55_320w.png)] bg-cover rounded" href="#"></a>
</div>


<div className="hidden lg:flex flex-row flex-1 gap-x-10 gap-y-10 items-center justify-center">

<div className="relative group cursor-pointer">
<a className="group/link flex items-center gap-1 hover:text-gray-900 transition-colors whitespace-nowrap text-sm font-medium text-gray-500 pt-2 pb-2 relative" href="#">
          Secteurs d'activités
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-56 transform group-hover:translate-y-0 translate-y-1">
<div className="bg-white rounded-xl overflow-hidden py-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50">
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Sécurité Sociale
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Collectivités / Services Publics
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Santé
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Économie Sociale et Solidaire
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Services Marchands
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Banque, Finance &amp; Conseil
            </a>
</div>
</div>
</div>

<div className="relative group cursor-pointer">
<a className="group/link flex items-center gap-1 hover:text-gray-900 transition-colors whitespace-nowrap text-sm font-medium text-gray-500 pt-2 pb-2 relative" href="#">
          Nos formations
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-56 transform group-hover:translate-y-0 translate-y-1">
<div className="bg-white rounded-xl overflow-hidden py-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50">
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Toutes nos formations
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Formations OPCO Atlas
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Formations ComCoop
            </a>
</div>
</div>
</div>

<div className="relative group cursor-pointer">
<a className="group/link flex items-center gap-1 hover:text-gray-900 transition-colors whitespace-nowrap text-sm font-medium text-gray-500 pt-2 pb-2 relative" href="#">
          Nos atouts
        </a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-56 transform group-hover:translate-y-0 translate-y-1">
<div className="bg-white rounded-xl overflow-hidden py-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50">
</div>
</div>
</div>

<div className="relative group cursor-pointer">
<a className="group/link flex items-center gap-1 hover:text-gray-900 transition-colors whitespace-nowrap text-sm font-medium text-gray-500 pt-2 pb-2 relative" href="#">
          Actualités
        </a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-56 transform group-hover:translate-y-0 translate-y-1">
<div className="bg-white rounded-xl overflow-hidden py-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50">
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Guides pratiques
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Webinaires
            </a>
</div>
</div>
</div>

<div className="relative group cursor-pointer">
<a className="group/link flex items-center gap-1 hover:text-gray-900 transition-colors whitespace-nowrap text-sm font-medium text-gray-500 pt-2 pb-2 relative" href="#">
          Contact
        </a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-56 transform group-hover:translate-y-0 translate-y-1">
<div className="bg-white rounded-xl overflow-hidden py-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50">
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Nous écrire
            </a>
<a className="flex items-center hover:text-gray-900 hover:bg-gray-50/80 transition-colors text-sm font-medium text-gray-500 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
              Prendre rendez-vous
            </a>
</div>
</div>
</div>
</div>
<div className="flex-1 flex max-w-max gap-x-4 gap-y-4 items-center justify-end">
<a className="hidden sm:flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:bg-white hover:border-gray-300 hover:text-gray-900 text-sm font-medium text-gray-600 bg-[#f9fafb] border-gray-200 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">
        Télécharger notre brochure
      </a>
<a className="flex items-center justify-center transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,102,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-[#fa5a00] text-sm font-medium text-white bg-[#FF6600] rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-[0_6px_20px_rgba(255,102,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]" href="#">
        Contactez nous
      </a>
</div>
</div>
</nav>

<main className="min-h-[100dvh] flex flex-col overflow-hidden pt-32 pr-6 pb-24 pl-6 relative items-center justify-center">

<div className="flex flex-col z-10 text-center w-full max-w-5xl mt-12 mr-auto ml-auto relative items-center">

<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[260px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e8fca93-09c1-4713-b8aa-f1c0a6b79d55_800w.png)] bg-cover rounded mt-5 mb-5 py-1" href="#"></a>

<h1 className="sm:text-5xl lg:text-6xl leading-[1.15] text-4xl font-semibold text-gray-900 tracking-tight max-w-4xl mb-7">
                OPTA-S, <span className="text-[#FF6600]">Conseil et Formation</span><br className="hidden md:block"/> pour une performance durable et solidaire
            </h1>

<p className="sm:text-base lg:text-lg leading-relaxed text-sm font-normal text-gray-500 max-w-[840px] mb-14">
                Nous accompagnons les organisations dans l'améliorations de leur performance durable et inclusive, en structurant leurs projets, en développant les compétences des équipes et en apportant des solutions concrètes en management, organisation et gouvernance, grâce à des programmes de formations, des missions de conseil et un accompagnement opérationnel.
            </p>

<div className="group w-full max-w-2xl mr-auto ml-auto relative">

<div className="absolute inset-0 z-0 flex justify-between items-center pointer-events-none">
<div className="w-1/2 h-full bg-[#0055FF]/15 blur-[45px] rounded-full scale-110 -translate-x-4 mix-blend-normal transition-opacity duration-500 group-hover:opacity-80"></div>
<div className="w-1/2 h-full bg-[#FF6600]/20 blur-[45px] rounded-full scale-110 translate-x-4 mix-blend-normal transition-opacity duration-500 group-hover:opacity-80"></div>
</div>

<div className="relative z-10 w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_2px_6px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.01)] flex items-center px-2 py-1.5 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_2px_6px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.01)] hover:border-gray-300">
<input className="w-full h-12 bg-transparent outline-none border-none pl-6 pr-4 text-gray-800 placeholder-gray-400 text-base font-normal tracking-wide" placeholder="Search…" type="text"/>
<button aria-label="Search" className="w-12 h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-[#FF6600] transition-colors ml-1 bg-transparent flex-shrink-0">
<iconify-icon className="text-[22px]" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_30%,transparent_100%)] opacity-80"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF6600]/[0.02] blur-[120px] rounded-full"></div>
</div>
</main>

<section className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center z-10 bg-transparent">

<div className="flex flex-col items-center text-center max-w-2xl mb-20">
<span className="text-xs font-semibold tracking-widest text-[#FF6600] uppercase mb-4">
                Secteurs d'intervention
            </span>
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                Des solutions adaptées à chaque écosystème
            </h2>
<p className="text-base text-gray-500 font-normal leading-relaxed">
                Nos programmes de formation et missions de conseil sont spécifiquement structurés pour répondre aux défis et aux normes des acteurs publics, para-publics et de l'économie sociale.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="group relative flex flex-col items-start p-8 md:p-10 bg-white border border-gray-200/60 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-gray-300/80 transition-all duration-500 overflow-hidden cursor-pointer">
<div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FF6600]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-100 rounded-[14px] mb-8 text-gray-600 group-hover:text-[#FF6600] group-hover:bg-[#FF6600]/5 group-hover:border-[#FF6600]/10 transition-colors duration-300">
<iconify-icon className="text-2xl" height="24" icon="solar:shield-plus-outline" strokeWidth="1.5" style={{color: 'rgb(255, 102, 0)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-3">Sécurité Sociale</h3>
<p className="leading-relaxed text-base font-normal text-gray-500 w-[100%] mb-10">Expertise, méthodes et outils efficients pour optimiser les processus et développer des pratiques innovantes.</p>
<div className="mt-auto flex items-center text-sm font-medium text-[#FF6600] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Découvrir le secteur
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:p-10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-gray-300/80 transition-all duration-500 overflow-hidden cursor-pointer bg-white border-gray-200/60 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2px_10px_rgba(0,0,0,0.02)] items-start">
<div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FF6600]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-100 rounded-[14px] mb-8 text-gray-600 group-hover:text-[#FF6600] group-hover:bg-[#FF6600]/5 group-hover:border-[#FF6600]/10 transition-colors duration-300">
<iconify-icon className="text-2xl" height="24" icon="solar:buildings-outline" strokeWidth="1.5" style={{color: 'rgb(255, 102, 0)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-3">Collectivités / Services Publics</h3>
<p className="leading-relaxed text-base font-normal text-gray-500 w-[100%] mb-10">Solutions personnalisés pour répondre aux enjeux des organisations de service publics.</p>
<div className="mt-auto flex items-center text-sm font-medium text-[#FF6600] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Découvrir le secteur
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col items-start p-8 md:p-10 bg-white border border-gray-200/60 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-gray-300/80 transition-all duration-500 overflow-hidden cursor-pointer">
<div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FF6600]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-100 rounded-[14px] mb-8 text-gray-600 group-hover:text-[#FF6600] group-hover:bg-[#FF6600]/5 group-hover:border-[#FF6600]/10 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-3">Santé</h3>
<p className="leading-relaxed text-base font-normal text-gray-500 w-[100%] mb-10">A l'origine de la naissance d'Opta-S : formations, conseils et audits adaptés accompagner l'évolution des organismes de santé.</p>
<div className="mt-auto flex items-center text-sm font-medium text-[#FF6600] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Découvrir le secteur
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col items-start p-8 md:p-10 bg-white border border-gray-200/60 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-gray-300/80 transition-all duration-500 overflow-hidden cursor-pointer">
<div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FF6600]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-100 rounded-[14px] mb-8 text-gray-600 group-hover:text-[#FF6600] group-hover:bg-[#FF6600]/5 group-hover:border-[#FF6600]/10 transition-colors duration-300">
<iconify-icon className="text-2xl" height="24" icon="solar:euro-outline" strokeWidth="1.5" style={{color: 'rgb(255, 102, 0)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-3">Économie Sociale et Solidaire</h3>
<p className="leading-relaxed text-base font-normal text-gray-500 w-[100%] mb-10">Accompagner les acteurs pour renforcer leur organisation, soutenir leurs projets et concilier performance économique et impactr social</p>
<div className="mt-auto flex items-center text-sm font-medium text-[#FF6600] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Découvrir le secteur
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col items-start p-8 md:p-10 bg-white border border-gray-200/60 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-gray-300/80 transition-all duration-500 overflow-hidden cursor-pointer">
<div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FF6600]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-100 rounded-[14px] mb-8 text-gray-600 group-hover:text-[#FF6600] group-hover:bg-[#FF6600]/5 group-hover:border-[#FF6600]/10 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-3">Services marchands</h3>
<p className="leading-relaxed text-base font-normal text-gray-500 w-[100%] mb-10">Secteur des services marchands : renforcer la compétitivité, optimiser les processus et réussir la transformation numérique et managériale durable.</p>
<div className="mt-auto flex items-center text-sm font-medium text-[#FF6600] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Découvrir le secteur
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col items-start p-8 md:p-10 bg-white border border-gray-200/60 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-gray-300/80 transition-all duration-500 overflow-hidden cursor-pointer">
<div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FF6600]/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 bg-gray-50 border border-gray-100 rounded-[14px] mb-8 text-gray-600 group-hover:text-[#FF6600] group-hover:bg-[#FF6600]/5 group-hover:border-[#FF6600]/10 transition-colors duration-300">
<iconify-icon className="text-2xl" height="24" icon="solar:leaf-linear" strokeWidth="1.5" style={{color: 'rgb(255, 102, 0)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-3">Banque, Finance &amp; Conseil</h3>
<p className="leading-relaxed text-base font-normal text-gray-500 w-[100%] mb-10">Secteur banque, finance et conseil : développer les compétences, structurer les formations et accompagner les transformations.</p>
<div className="mt-auto flex items-center text-sm font-medium text-[#FF6600] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Découvrir le secteur
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="md:py-32 flex flex-col z-10 bg-white w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative items-center justify-center">

<div className="flex flex-col items-center text-center max-w-2xl mb-16 md:mb-24">
<span className="text-xs font-semibold tracking-widest text-[#FF6600] uppercase mb-4">
                Approche Holistique
            </span>
<h2 className="md:text-5xl text-3xl font-semibold text-gray-900 tracking-tight mb-6">Les raisons de notre succès</h2>
<p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-xl">
                La réussite d'un projet public nécessite un alignement parfait, de la direction générale aux agents de terrain. Nous construisons des cadres méthodologiques sur-mesure pour maximiser votre impact.
            </p>
</div>

</section><section className="py-20 lg:py-32 bg-[#fafafa] relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#FF6600]/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

<div className="col-span-1 lg:col-span-5 flex flex-col items-start">
<span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#FF6600] shadow-sm mb-6">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
          Notre Méthodologie
        </span>
<h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
          Une approche globale de la performance durable
        </h2>
<div className="pl-4 border-l-2 border-[#FF6600]/20 mb-8">
<p className="text-base sm:text-lg font-normal text-slate-500 leading-relaxed">
            Nous accompagnons les organisations à travers une approche systémique qui conjugue vision stratégique, facteur humain et excellence opérationnelle pour garantir des résultats pérennes.
          </p>
</div>
<ul className="space-y-4 mb-10 w-full">
<li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-gray-100 hover:shadow-sm">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-medium text-slate-800">Vision stratégique et transformation</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-gray-100 hover:shadow-sm">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-medium text-slate-800">Développement des compétences</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-gray-100 hover:shadow-sm">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-medium text-slate-800">Optimisation des processus</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-gray-100 hover:shadow-sm">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-medium text-slate-800">Performance sociale et durable</span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium transition-all duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.2)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 hover:bg-slate-800 group" href="#">
          Découvrir notre approche
          <svg className="ml-2 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="col-span-1 lg:col-span-7 flex justify-center lg:justify-end mt-10 lg:mt-0">
<div className="lg:max-w-[550px] aspect-square lg:mr-0 w-full max-w-[500px] mr-auto ml-auto relative">

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="42" stroke="#e2e8f0" stroke-dasharray="1 1" strokeWidth="0.3"></circle>
<circle cx="50" cy="50" fill="none" r="22" stroke="#e2e8f0" stroke-dasharray="1 1" strokeWidth="0.3"></circle>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-br from-[#FF6600] to-[#e65c00] rounded-full shadow-[0_12px_30px_rgba(255,102,0,0.3)] z-40 flex flex-col items-center justify-center p-4 border-[6px] border-white text-center cursor-default hover:scale-105 transition-transform duration-500">
<span className="text-white font-semibold text-base sm:text-lg tracking-tight mb-1 leading-tight">LA ROUE</span>
<span className="text-white/90 text-[9px] sm:text-[10px] uppercase tracking-widest leading-tight">de la performance<br/>durable et solidaire</span>
</div>

<div className="absolute top-[30.9%] left-[61%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
<span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest bg-[#fafafa]/80 backdrop-blur-sm px-1.5 py-0.5 rounded">Conseil</span>
</div>
<div className="absolute top-[50%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
<span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest bg-[#fafafa]/80 backdrop-blur-sm px-1.5 py-0.5 rounded">AMOA</span>
</div>
<div className="absolute top-[69.1%] left-[61%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
<span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest bg-[#fafafa]/80 backdrop-blur-sm px-1.5 py-0.5 rounded">Coaching</span>
</div>
<div className="absolute top-[69.1%] left-[39%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
<span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest bg-[#fafafa]/80 backdrop-blur-sm px-1.5 py-0.5 rounded">Audit</span>
</div>
<div className="absolute top-[50%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
<span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest bg-[#fafafa]/80 backdrop-blur-sm px-1.5 py-0.5 rounded">Formation</span>
</div>
<div className="absolute top-[30.9%] left-[39%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
<span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest bg-[#fafafa]/80 backdrop-blur-sm px-1.5 py-0.5 rounded">Codev</span>
</div>


<div className="absolute top-[8%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover class=" leading-tight"="" mt-0.5="" sm:text-[10px]="" text-[9px]="" text-center="" text-slate-500="">Responsabilité sociale<p></p>
</h4></div>

<div className="absolute top-[17.8%] left-[77%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover:text-[#FF6600] transition-colors leading-tight">Créer</h4>
<p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 text-center leading-tight">Intelligence collective</p>
</div>

<div className="absolute top-[42.7%] left-[91.3%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover:text-[#FF6600] transition-colors leading-tight">Prévenir</h4>
<p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 text-center leading-tight">Risques psychosociaux</p>
</div>

<div className="absolute top-[71%] left-[86.4%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover:text-[#FF6600] transition-colors leading-tight">Piloter</h4>
<p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 text-center leading-tight">Qualité, coût, délai</p>
</div>

<div className="absolute top-[89.4%] left-[64.4%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover:text-[#FF6600] transition-colors leading-tight">Optimiser</h4>
<p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 text-center leading-tight">Processus</p>
</div>

<div className="absolute top-[89.4%] left-[35.6%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover:text-[#FF6600] transition-colors leading-tight">Manager</h4>
<p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 text-center leading-tight">Équipes</p>
</div>

<div className="absolute top-[71%] left-[13.6%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path className="" d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.3-.4a2.5 2.5 0 1 0-3.5 3.5l3.8 3.9 3.8-3.9a2.5 2.5 0 0 0 0-3.5Z"></path>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover:text-[#FF6600] transition-colors leading-tight">Améliorer</h4>
<p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 text-center leading-tight">Qualité relationnelle</p>
</div>

<div className="absolute top-[42.7%] left-[8.7%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
</svg>
</div>
<h4 className="mt-2 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-wider text-center group-hover:text-[#FF6600] transition-colors leading-tight">Construire</h4>
<p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 text-center leading-tight">Stratégie &amp; Changement</p>
</div>

<div className="absolute top-[17.8%] left-[23%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-28 sm:w-32 group cursor-pointer">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6600] group-hover:text-[#FF6600] group-hover:shadow-md relative">
<svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path></svg></div></div></div></div></div></div></section>

<section className="overflow-hidden flex flex-col bg-[#ffffff] w-full z-10 border-gray-100/60 border-t pr-6 pb-24 pl-6 relative items-center justify-center">

<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
<div className="w-[800px] h-[500px] bg-[#FF6600]/[0.015] rounded-full blur-[100px]"></div>
</div>

<div className="z-10 flex flex-col w-full max-w-4xl mr-auto ml-auto relative items-center">


<section className="sm:py-24 grid-corners pt-16 pb-16 relative" id="why">
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-in text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ring-1 ring-lime-300/20 uppercase tracking-tight bg-gradient-to-br from-white/10 to-white/0 xl:text-[#ff6600]">
<svg aria-hidden="true" className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Team
          </span>
<h2 className="sm:text-5xl karaoke-container text-4xl font-semibold tracking-tight mt-4" data-karaoke-animated="true" data-karaoke-wrapped="true">Découvrez les atous d'Opta-S</h2>
<p className="sm:text-base karaoke-container text-sm text-neutral-300 max-w-2xl mt-3 mr-auto ml-auto" data-karaoke-animated="true" data-karaoke-wrapped="true">les humains derrière votre succès</p>
</div>
<div className="flex mt-16 relative items-center justify-center" style={{perspective: '1200px'}}>
<button aria-label="Previous" className="absolute left-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamPrevBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="flex w-full h-[500px] max-w-md relative items-center justify-center">
<div className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="carouselTrack" style={{transformStyle: 'preserve-3d'}}>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="0" style={{filter: 'brightness(0.6)', zIndex: '2', transform: 'translateX(-360px) scale(0.85) rotateY(20deg)', opacity: '0.4'}}>
<img alt="Team member" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7424f84-9806-48a8-b864-0ea622dc2efd_800w.png"/>
<div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute right-6 bottom-6 left-6">
<div className="inline-flex gap-2 text-xs bg-white/10 ring-white/20 ring-1 rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="text-[#ff6600] w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="9" cy="7" r="4"></circle>
<path className="" d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="text-white">Consultant</span>
</div>
<p className="text-xl font-semibold text-white tracking-tight">Nicolas-Henri ANTHEAUME</p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="1" style={{filter: 'brightness(0.75)', zIndex: '5', transform: 'translateX(-180px) scale(0.9) rotateY(10deg)', opacity: '0.6'}}>
<img alt="Team member" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ba24315-3156-4f21-878a-bda3c43f7131_800w.png"/>
<div className="absolute top-0 right-0 bottom-0 left-0 blur-none"></div>
<div className="absolute right-6 bottom-6 left-6">
<div className="inline-flex gap-2 text-xs bg-white/10 ring-white/20 ring-1 rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="text-[#FF6600] w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 8V4H8"></path>
<rect className="" height="12" rx="2" width="16" x="4" y="8"></rect>
<path className="" d="M2 14h2"></path>
<path className="" d="M20 14h2"></path>
<path className="" d="M15 13v2"></path>
<path className="" d="M9 13v2"></path>
</svg>
<span className="text-white">Consultante</span>
</div>
<p className="text-xl font-semibold text-white tracking-tight">Leia MARCADET</p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-2 ring-lime-300/40 bg-lime-400/10 transition-all duration-500" data-index="2" style={{zIndex: '10', boxShadow: 'rgba(163, 230, 53, 0.3) 0px 20px 60px', filter: 'brightness(1)', transform: 'translateX(0px) scale(1) rotateY(0deg)', opacity: '1'}}>
<img alt="Team member" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31f9d6d0-7387-40fe-84eb-3a4e8197c4c7_800w.png"/>
<div className="bg-gradient-to-t from-black/85 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-6 right-6 gap-x-1 gap-y-1">
<div className="inline-flex gap-1 text-xs font-medium text-neutral-950 bg-[#ff6600] rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2v20M2 12h20"></path>
</svg>
      Featured
    </div>
</div>
<div className="absolute right-8 bottom-8 left-8">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs ring-1 ring-white/20 backdrop-blur-md mb-4">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 102, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect className="" height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span className="text-white">Président</span>
</div>
<p className="text-3xl font-bold text-white tracking-tight mb-1">Stéphane TATU</p>
<p className="text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Leading</span>
<span className="karaoke-word">product</span>
<span className="karaoke-word">vision</span>
<span className="karaoke-word">&amp;</span>
<span className="karaoke-word">strategy</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="3" style={{filter: 'brightness(0.75)', zIndex: '5', transform: 'translateX(180px) scale(0.9) rotateY(-10deg)', opacity: '0.6'}}>
<img alt="Team member" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c60de00b-b9d2-4a06-ad0e-b827f03d11ef_800w.png"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute right-6 bottom-6 left-6">
<div className="inline-flex gap-2 text-xs bg-white/10 ring-white/20 ring-1 rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="text-[#ff6600] w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
</path>
</svg>
<span className="text-white">Directeur Général</span>
</div>
<p className="text-xl font-semibold text-white tracking-tight">Pierre-Henri HAMBURGER</p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="4" style={{filter: 'brightness(0.6)', zIndex: '2', transform: 'translateX(360px) scale(0.85) rotateY(-20deg)', opacity: '0.4'}}>
<img alt="Team member" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4f7c79c-5c54-4855-acb2-883915d67ad6_800w.png"/>
<div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute right-6 bottom-6 left-6">
<div className="inline-flex gap-2 text-xs bg-white/10 ring-white/20 ring-1 rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="text-[#ff6600] w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
<polyline className="" points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline className="" points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline className="" points="21 12 16.5 14.6 16.5 19.79"></polyline>
<polyline className="" points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line className="" x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
<span className="text-white">Consultant</span>
</div>
<p className="text-xl font-semibold text-white tracking-tight">Dimitrios ECONOMIDES</p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="5" style={{filter: 'brightness(0.5)', zIndex: '1', transform: 'translateX(540px) scale(0.75) rotateY(-45deg)', opacity: '0'}}>
<img alt="Team member" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63148dc4-2a0b-4a9b-b8d4-ba5c34e4ab04_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" width="18" x="3" y="3"></rect>
<path className="" d="M9 3v18"></path>
<path className="" d="m16 15-3-3 3-3"></path>
</svg>
<span className="text-white">Platform Engineer</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
        Liam Becker
      </p>
</div>
</div>
</div>
</div>
<button aria-label="Next" className="absolute right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamNextBtn">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

</section>

<p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed text-center max-w-2xl mb-12">
                Nos consultants allient une connaissance fine des rouages de l'administration publique à une maîtrise des méthodes du secteur privé. Une synergie pluridisciplinaire pensée pour structurer vos projets, accompagner vos agents et pérenniser vos résultats.
            </p>

<a className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0B1525] text-white text-sm font-medium transition-all duration-300 shadow-[0_4px_14px_rgba(11,21,37,0.15)] hover:shadow-[0_8px_25px_rgba(11,21,37,0.25)] hover:-translate-y-0.5 hover:bg-gray-900" href="#">
                Découvrez notre équipe
                <iconify-icon className="ml-2.5 text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section><section className="md:py-32 z-10 overflow-hidden bg-white w-full max-w-7xl border-gray-100/60 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6600]/[0.02] rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 z-10 relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col items-start w-full max-w-xl mx-auto lg:mx-0">

<div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-6 shadow-sm">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
                Partenaire OPCO Atlas
            </div>

<h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 tracking-tight leading-[1.15] mb-6">
                Formez-vous simplement avec notre partenaire <span className="text-blue-600">OPCO Atlas</span>
</h2>

<p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed mb-10">
                En tant que partenaire privilégié, nous vous donnons accès à des parcours de formation professionnels via la plateforme numérique Campus Atlas. Développez les compétences de vos équipes grâce à des solutions de financement simplifiées et un environnement d'apprentissage intuitif.
            </p>

<ul className="space-y-4 mb-10 w-full">
<li className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-colors duration-300">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center mt-0.5">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base text-gray-800 font-medium tracking-tight">Accès à des formations certifiées et financées</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-colors duration-300">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center mt-0.5">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base text-gray-800 font-medium tracking-tight">Plateforme digitale intuitive et accessible</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-colors duration-300">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center mt-0.5">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base text-gray-800 font-medium tracking-tight">Parcours adaptés aux besoins des entreprises</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-colors duration-300">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6600]/10 flex items-center justify-center mt-0.5">
<svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base text-gray-800 font-medium tracking-tight">Accompagnement par des experts métier</span>
</li>
</ul>

<a className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0B1525] text-white text-sm font-medium transition-all duration-300 shadow-[0_4px_14px_rgba(11,21,37,0.15)] hover:shadow-[0_8px_25px_rgba(11,21,37,0.25)] hover:-translate-y-0.5 hover:bg-gray-900" href="#">
                Accéder aux formations
                <svg className="ml-2.5 transition-transform group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="lg:ml-auto aspect-[4/3] sm:aspect-auto sm:h-[480px] overflow-hidden flex flex-col group transition-transform duration-700 hover:shadow-[0_32px_60px_-15px_rgba(0,0,0,0.12)] bg-white w-full max-w-[540px] border-gray-200/80 border rounded-[24px] mr-auto ml-auto relative shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08)]">

<div className="[background-size:16px_16px] pointer-events-none opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Platform Mockup" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-contain z-10 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cdbecb8-81fe-4df6-b92b-86887f82ca8f_1600w.webp"/>
</div>
</div>
</section><section className="py-24 md:py-32 bg-white relative z-10 w-full border-t border-gray-100/60 overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6600]/[0.015] rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-20">
<span className="inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-gray-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-5 shadow-sm">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
                Gage de confiance
            </span>
<h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 tracking-tight leading-[1.15]">
                Nos certifications et reconnaissances
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

<div className="group flex flex-col lg:p-12 transition-all duration-500 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.06)] hover:bg-white hover:border-gray-300/80 hover:-translate-y-1 bg-[#fafafa] border-gray-200/60 border rounded-[24px] pt-10 pr-10 pb-10 pl-10 items-start">

<div className="w-full h-48 md:h-56 lg:h-64 mb-10 bg-white rounded-2xl border border-gray-200/60 p-4 md:p-8 flex items-center justify-center shadow-sm transition-all duration-500 group-hover:border-gray-300/80 group-hover:shadow-md overflow-hidden relative">
<img alt="Logo" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-80 mix-blend-multiply w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59e2cacf-c52b-4282-9612-1bdc873592ff_3840w.jpg"/>
</div>

<div className="flex items-center gap-3.5 mb-10">
<div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-red-50 text-red-500 border border-red-100/60 shadow-sm group-hover:scale-105 transition-transform duration-300">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
<path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h1.66"></path>
<path d="M11 21.73a2 2 0 0 0 2-2v0a2 2 0 0 1 2-2h.54"></path>
<path className="" d="M21.54 15a8.95 8.95 0 1 1-19.08 0"></path>
<path className="" d="M7 3.34a8.95 8.95 0 0 1 14.54 11.66"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[22px] font-semibold tracking-tight text-gray-900 leading-none">Qualiopi</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-medium">Processus Certifié</span>
</div>
</div>

<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-4">
                    Certification Qualiopi
                </h3>
<p className="text-base text-gray-500 font-normal leading-relaxed m-0">
                    Certification attestant de la qualité des processus de formation et du respect des exigences du Référentiel National Qualité.
                </p>
</div>

<div className="group flex flex-col items-start p-10 lg:p-12 bg-[#fafafa] border border-gray-200/60 rounded-[24px] transition-all duration-500 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.06)] hover:bg-white hover:border-gray-300/80 hover:-translate-y-1">

<div className="md:h-56 lg:h-64 md:p-8 flex transition-all duration-500 group-hover:border-gray-300/80 group-hover:shadow-md overflow-hidden bg-white w-full h-48 border-gray-200/60 border rounded-2xl mb-10 pt-4 pr-4 pb-4 pl-4 relative shadow-sm items-center justify-center">
<img alt="Logo" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-80 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66fa318d-22a8-479e-af8b-881cfc0ae930_1600w.png"/>
</div>

<div className="flex items-center gap-3.5 mb-10">
<div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-emerald-50 text-emerald-600 border border-emerald-100/60 shadow-sm group-hover:scale-105 transition-transform duration-300">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path className="" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[22px] font-semibold tracking-tight text-gray-900 leading-none">ecovadis</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-medium">Sustainability Rating</span>
</div>
</div>

<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-4">
                    Évaluation EcoVadis
                </h3>
<p className="text-base text-gray-500 font-normal leading-relaxed m-0">
                    Reconnaissance des engagements en matière de responsabilité sociétale, de développement durable et de performance éthique.
                </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 z-10 bg-white w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="relative overflow-hidden rounded-[24px] border border-gray-200/80 bg-[linear-gradient(to_bottom_right,#f9fafb,#f3f4f6)] p-8 sm:p-12 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">

<div className="absolute -left-20 -bottom-20 h-72 w-72 bg-[#FF6600]/[0.04] rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute -right-20 -top-20 h-72 w-72 bg-[#0055FF]/[0.02] rounded-full blur-[80px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">

<div className="flex flex-col items-start">
<span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-medium text-gray-600 shadow-sm mb-6">
<iconify-icon className="text-[#FF6600] text-sm" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                        Veille &amp; Décryptage
                    </span>
<h3 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-4">Abonnez-vous à notre <br className="hidden xl:block"/> newsletter</h3>
<p className="text-base font-normal text-gray-500 leading-relaxed">
                        Recevez nos dernières analyses, actualités réglementaires et bonnes pratiques dédiées à l'écosystème public et associatif. Une fois par mois, sans spam.
                    </p>
</div>

<form className="w-full flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0" onsubmit="event.preventDefault(); this.reset(); const btn = this.querySelector('button'); const originalText = btn.innerHTML; btn.innerHTML = 'Inscrit ✓'; setTimeout(()=&gt;btn.innerHTML = originalText, 3000);">
<label className="sr-only" htmlFor="email">Adresse e-mail</label>
<input className="flex-1 h-12 rounded-full bg-white border border-gray-200 px-5 text-sm placeholder:text-gray-400 text-gray-900 outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]" id="email" placeholder="vous@institution.fr" required="" type="email"/>
<button className="h-12 px-7 rounded-full bg-[#FF6600] hover:bg-[#fa5a00] text-white text-sm font-medium transition-all duration-300 shadow-[0_4px_14px_rgba(255,102,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_20px_rgba(255,102,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] whitespace-nowrap" type="submit">
                        S'inscrire
                    </button>
</form>
</div>
</div>
</section><section className="overflow-hidden bg-[#fafafa] w-full border-gray-200/80 border-t mt-auto pt-20 pr-6 pb-8 pl-6 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6600]/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4">
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
<div className="col-span-1 md:col-span-4 lg:col-span-2 flex flex-col items-start">
<a className="inline-block w-[160px] h-[55px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e8fca93-09c1-4713-b8aa-f1c0a6b79d55_320w.png)] bg-cover bg-center mb-6 mix-blend-multiply" href="#"></a>
<p className="text-sm text-gray-500 font-normal leading-relaxed max-w-sm mb-8">
          Allier conseil, formation et communication pour transformer durablement les organisations et renforcer la
          coopération au sein de vos équipes.
        </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FF6600] hover:border-[#FF6600]/30 hover:bg-[#FF6600]/5 transition-all shadow-sm" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FF6600] hover:border-[#FF6600]/30 hover:bg-[#FF6600]/5 transition-all shadow-sm" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg>
</a>
</div>
</div>
<div className="lg:col-start-4 lg:col-span-1">
<h4 className="text-sm font-semibold text-gray-900 mb-6 tracking-tight">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Secteurs
              d'activités</a></li>
<li><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Nos
              formations</a></li>
<li className=""><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Nos
              atouts</a></li>
<li><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Actualités</a></li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-sm font-semibold text-gray-900 mb-6 tracking-tight">Légal</h4>
<ul className="space-y-4">
<li className=""><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Mentions légales</a></li>
<li className=""><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Confidentialité</a></li>
<li className=""><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">CGV</a></li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-sm font-semibold text-gray-900 mb-6 tracking-tight">Contact</h4>
<ul className="space-y-4">
<li><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Nous
              contacter</a></li>
<li className=""><a className="text-sm text-gray-500 hover:text-[#FF6600] transition-colors font-medium" href="#">Prendre rendez-vous</a>
</li>
</ul>
<div className="mt-6">
<a className="inline-flex h-10 px-5 items-center justify-center rounded-full bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 text-sm font-medium transition-all duration-300 shadow-sm whitespace-nowrap" href="#contact">
            Être accompagné
          </a>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400 font-normal">
        © 2024 OPTA-S. Tous droits réservés.
      </p>
<div className="flex items-center gap-6">
<a className="text-sm text-gray-400 hover:text-gray-600 transition-colors" href="#">Plan du site</a>
<a className="text-sm text-gray-400 hover:text-gray-600 transition-colors" href="#">Accessibilité</a>
</div>
</div>
</div>
</section>



    </>
  );
}
