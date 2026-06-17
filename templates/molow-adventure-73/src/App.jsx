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
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
if (el.classList.contains("delay-100")) el.style.transitionDelay = "100ms";
if (el.classList.contains("delay-200")) el.style.transitionDelay = "200ms";
if (el.classList.contains("delay-300")) el.style.transitionDelay = "300ms";
observer.observe(el);
});
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const translations = {
        fr: {
          bookBtn: "RÉSERVER",
          journalTitle: "Journal d’Exploration",
          journalDesc: "Photographie, exploration, sensations et découvertes : un univers inspiré par le mouvement, la nature et l’authenticité.",
          experience: "Expérience",
          alpineMastery: "Maîtrise<br>Alpine",
          routeDesc: "Chaque itinéraire avec Molow. est conçu avec intention. Naviguez sur un terrain technique avec une confiance absolue, soutenu par des professionnels chevronnés qui connaissent intimement les montagnes.",
          expertGuides: "Guides Experts",
          premiumEquipment: "Équipement Premium",
          curatedItineraries: "Itinéraires Sur Mesure",
          featuredRoutes: "Itinéraires <span class='text-neutral-500'>Phares</span>",
          allVisuals: "Tous les visuels"
        },
        en: {
          bookBtn: "BOOK EXPEDITION",
          journalTitle: "Exploration Journal",
          journalDesc: "Photography, exploration, sensations and discoveries: a universe inspired by movement, nature, and authenticity.",
          experience: "Experience",
          alpineMastery: "Alpine<br>Mastery",
          routeDesc: "Every route with Molow. is designed with intention. Navigate technical terrain with absolute confidence, supported by seasoned professionals who know the mountains intimately.",
          expertGuides: "Expert Guides",
          premiumEquipment: "Premium Equipment",
          curatedItineraries: "Curated Itineraries",
          featuredRoutes: "Featured <span class='text-neutral-500'>Routes</span>",
          allVisuals: "All visuals"
        }
      };

      function setLang(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
          const key = el.getAttribute('data-lang-key');
          if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
          }
        });

        const frBtn = document.getElementById('btn-fr');
        const enBtn = document.getElementById('btn-en');
        const activeClass = "opacity-100 cursor-pointer border-b border-white pb-0.5 text-white";
        const inactiveClass = "opacity-50 hover:opacity-100 cursor-pointer transition-opacity text-white";

        if (lang === 'fr') {
          frBtn.className = activeClass;
          enBtn.className = inactiveClass;
        } else {
          enBtn.className = activeClass;
          frBtn.className = inactiveClass;
        }
      }
    
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
      
<button className="fixed top-6 left-6 md:top-6 md:left-12 z-[100] text-2xl md:text-3xl text-white tracking-tight font-semibold animate-on-scroll hover:text-neutral-300 transition-colors focus:outline-none cursor-pointer" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
      Molow.
    </button>
<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9efc02f-613c-4858-948f-f88509e48994_1600w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<section className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 z-0 bg-black/40 pointer-events-none"></div>

<nav className="relative z-50 w-full px-6 py-6 md:px-12 flex items-center border-b border-white/10 animate-on-scroll justify-end" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex items-center gap-8">
<div className="hidden md:flex gap-4 text-sm font-normal tracking-wide">
<span className="opacity-100 cursor-pointer border-b border-white pb-0.5 text-white" id="btn-fr" onclick="setLang('fr')">
              FR
            </span>
<span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity text-white" id="btn-en" onclick="setLang('en')">
              EN
            </span>
</div>
<button className="hidden md:block bg-white text-black px-6 py-2.5 rounded-full text-xs md:text-sm font-normal hover:bg-neutral-200 transition-colors tracking-wide" data-lang-key="bookBtn">
            BOOK EXPEDITION
          </button>
<button className="text-white hover:text-neutral-300 transition-colors flex items-center justify-center">
<iconify-icon className="" height="32" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</button>
</div>
</nav>

<div className="flex-grow flex flex-col md:pb-0 z-10 pb-12 relative justify-end">

<div className="absolute top-[20%] md:top-auto md:bottom-[20%] right-6 md:right-12 w-[90%] md:w-[32rem] p-8 md:p-10 rounded-sm animate-on-scroll" style={{'--fx-filter': 'blur(12px) liquid-glass(2, 5) saturate(1.1)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.05)'}}>
<h2 className="text-3xl md:text-4xl leading-tight mb-6 tracking-tight text-white font-normal" data-lang-key="journalTitle">
            Journal d’Exploration
          </h2>
<p className="text-base md:text-lg font-light leading-relaxed opacity-90 text-neutral-200" data-lang-key="journalDesc">
            Photographie, exploration, sensations et découvertes : un univers
            inspiré par le mouvement, la nature et l’authenticité.
          </p>
</div>

<div className="relative w-full px-4 md:px-8 mt-auto z-0 pointer-events-none select-none mb-12 md:mb-20">
<h1 className="leading-[0.75] tracking-tight text-white mix-blend-overlay opacity-90 animate-on-scroll font-semibold text-[24vw]" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
            Molow.
          </h1>
</div>

<div className="absolute bottom-8 right-8 md:right-12 z-20 flex items-center gap-2 text-white animate-on-scroll" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<span className="text-xs md:text-sm uppercase tracking-widest font-normal">
            Scroll
          </span>
<iconify-icon className="animate-bounce" height="16" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
</div>
</section>

<section className="bg-neutral-900 text-neutral-200 py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
<div className="animate-on-scroll" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<span className="block text-xs font-normal tracking-[0.2em] text-neutral-500 mb-4 uppercase" data-lang-key="experience">
            Derniere Experience
          </span>
<h3 className="text-4xl md:text-6xl tracking-tight mb-8 text-white font-normal" data-lang-key="alpineMastery">
            Shooting for
            <br/>
            Almanarre clothing
          </h3>
<div className="h-[50vh] md:h-[60vh] w-full bg-neutral-800 rounded-sm overflow-hidden relative group" x-data="{ images: ['https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/babe9481-b174-4250-8966-b8ff29f39952_1600w.jpg', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9879a62f-0b5c-4843-bfa8-f3793ac5a0ae_1600w.jpg', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/227c5b48-6c93-4113-9740-04deed945659_1600w.jpg', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a433e19e-30c1-4840-8a58-68ec18381ddc_1600w.jpg', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70ea762e-4e44-4552-87a0-2749c520126c_1600w.jpg', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e9b0e9e-308d-49a8-a2a5-e6e80459d744_1600w.jpg'], currentIndex: 0, next() { this.currentIndex = (this.currentIndex + 1) % this.images.length }, prev() { this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length } }">
<img alt="Hiker on ridge" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/babe9481-b174-4250-8966-b8ff29f39952_1600w.jpg" x-bind:src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<button aria-label="Image précédente" className="pointer-events-auto cursor-pointer flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 hover:scale-105 active:scale-95" x-on:click="prev()">
<iconify-icon height="28" icon="solar:alt-arrow-left-linear" width="28"></iconify-icon>
</button>
<span className="pointer-events-none text-2xl sm:text-4xl font-semibold tracking-tight text-white drop-shadow-lg">
                Marseille
              </span>
<button aria-label="Image suivante" className="pointer-events-auto cursor-pointer flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 hover:scale-105 active:scale-95" x-on:click="next()">
<iconify-icon className="" height="28" icon="solar:alt-arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="28"></iconify-icon>
</button>

</div>
</div>
</div>
<div className="flex flex-col justify-center animate-on-scroll delay-100" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1) 100ms'}}>
<p className="text-lg md:text-2xl font-light leading-relaxed mb-12 text-neutral-400" data-lang-key="routeDesc">Une incroyable journée de skate à Marseille aux côtés de Almanarre Clothing. Entre bonne humeur, passion et partage, tout était réuni pour passer un moment mémorable. Un accueil au top, une organisation parfaitement gérée et surtout des vêtements de grande qualité, pensés autant pour le style que pour le confort. Merci à toute l’équipe pour cette expérience authentique et cette superbe énergie.</p>
<ul className="space-y-0">
<li className="flex items-center justify-between group cursor-pointer border-t border-neutral-800 py-8 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm">
<div className="flex items-center gap-4">
<span className="text-neutral-600 text-xl font-light">01</span>
<span className="text-lg font-normal text-neutral-300 group-hover:text-white transition-colors cursor-pointer" data-lang-key="expertGuides" onclick="window.location.href='https://www.instagram.com/almanarre_ww/'" role="button">
                  Compte instagram de la marque
                </span>
</div>
<div className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 flex items-center justify-center">
<iconify-icon className="" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
</li>
<li className="flex items-center justify-between group cursor-pointer border-t border-neutral-800 py-8 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm">
<div className="flex items-center gap-4">
<span className="text-neutral-600 text-xl font-light">02</span>
<span className="text-lg font-normal text-neutral-300 group-hover:text-white transition-colors" data-lang-key="premiumEquipment" onclick="window.location.href='https://www.instagram.com/eliya_accetta/'" role="button">
                  Compte de la photographe
                </span>
</div>
<div className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 flex items-center justify-center">
<iconify-icon className="" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
</li>
<li className="flex items-center justify-between group cursor-pointer border-t border-b border-neutral-800 py-8 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm">
<div className="flex items-center gap-4">
<span className="text-neutral-600 text-xl font-light">03</span>
<span className="text-lg font-normal text-neutral-300 group-hover:text-white transition-colors" data-lang-key="curatedItineraries" onclick="window.location.href='https://www.instagram.com/molowaa_/'" role="button">
                  Compte du modèle
                </span>
</div>
<div className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 flex items-center justify-center">
<iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-neutral-950 text-white py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 animate-on-scroll" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="">
<span className="block text-xs font-normal tracking-[0.2em] text-neutral-500 mb-4 uppercase">Autres experiences</span>
<h2 className="text-4xl md:text-5xl tracking-tight leading-none font-normal" data-lang-key="featuredRoutes">Toutes <span className="text-neutral-500">Routes</span></h2>
</div>
<div className="mt-8 md:mt-0">
<a className="group flex uppercase hover:text-white transition-colors text-sm text-neutral-400 tracking-wider gap-x-2 gap-y-2 items-center" href="expeditions.html">
<span className="" data-lang-key="allVisuals">Tous les visuels</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
<div className="md:col-span-8 group relative animate-on-scroll" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm bg-neutral-900">
<img alt="Mont Blanc Summit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
<div className="flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-1 bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest rounded-full font-medium">Skate</span>
</div>
<h3 className="text-2xl md:text-4xl font-normal tracking-tight text-white mb-1">Arte collection</h3>
<p className="text-neutral-400 text-sm md:text-base font-light">Fréjus, France</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/0 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 cursor-pointer" onclick="window.location.href='/pop-up'" role="button">
<iconify-icon className="transition-transform duration-300" height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-4 group relative animate-on-scroll delay-100" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1) 100ms'}}>
<div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full overflow-hidden rounded-sm bg-neutral-900">
<img alt="Dolomites Traverse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
<div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-1 bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest rounded-full font-medium">
                      Multi-day
                    </span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-1">
                    Dolomites Traverse
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    South Tyrol, Italy
                  </p>
</div>
</div>
</div>
</div>
<div className="md:col-span-4 group relative animate-on-scroll" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="relative w-full aspect-square overflow-hidden rounded-sm bg-neutral-900">
<img alt="Patagonia Circuit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white mb-1">
                  Patagonia Circuit
                </h3>
<p className="text-neutral-400 text-sm font-light">
                  Torres del Paine, Chile
                </p>
</div>
</div>
</div>
<div className="md:col-span-8 group relative animate-on-scroll delay-100" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1) 100ms'}}>
<div className="relative w-full aspect-video md:aspect-auto md:h-full overflow-hidden rounded-sm bg-neutral-900">
<img alt="Swiss Alps Trek" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
<div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-1">
                    Swiss Alps Trek
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    Zermatt, Switzerland
                  </p>
</div>
<div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs uppercase tracking-widest border-b border-white pb-1">
                    View Details
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-neutral-400 pt-24 pb-12 px-6 md:px-12 border-t border-neutral-900">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
<div className="md:col-span-1 animate-on-scroll" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<button className="text-2xl text-white tracking-tight font-semibold mb-6 hover:text-neutral-300 transition-colors focus:outline-none cursor-pointer" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
              Molow.
            </button>
<p className="text-sm font-light leading-relaxed mb-6 max-w-xs">
              Redefining alpine exploration through expert guidance and
              uncompromising safety.
            </p>
<div className="flex gap-4 text-white">
<div className="hover:text-neutral-300 cursor-pointer flex items-center justify-center">
<iconify-icon height="20" icon="solar:twitter-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div className="hover:text-neutral-300 cursor-pointer flex items-center justify-center">
<iconify-icon height="20" icon="solar:camera-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
</div>
</div>
<div className="animate-on-scroll delay-100" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1) 100ms'}}>
<h4 className="text-white text-sm font-normal uppercase tracking-widest mb-6">
              Explore
            </h4>
<ul className="space-y-4 text-sm font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Expeditions
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Our Guides
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Equipment
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Basecamp
                </a>
</li>
</ul>
</div>
<div className="animate-on-scroll delay-200" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1) 200ms'}}>
<h4 className="text-white text-sm font-normal uppercase tracking-widest mb-6">
              Contact
            </h4>
<address className="not-italic text-sm font-light space-y-4">
<p>
                1942 Pearl Street,
                <br/>
                Boulder, CO 80302
              </p>
<p>
<a className="hover:text-white transition-colors" href="tel:+1234567890">
                  +1 (555) 837-9120
                </a>
</p>
<p>
<a className="hover:text-white transition-colors" href="mailto:summit@molow.com">
                  summit@molow.com
                </a>
</p>
</address>
</div>
<div className="md:col-span-1 animate-on-scroll delay-300" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1) 300ms'}}>
<h4 className="text-white text-sm font-normal uppercase tracking-widest mb-6">
              Dispatch
            </h4>
<form className="flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-neutral-600 transition-colors rounded-sm placeholder:text-neutral-600" placeholder="Email address" type="email"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors flex items-center justify-center" type="submit">
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</button>
</div>
<p className="text-xs text-neutral-600 font-light">
                Subscribe for early access to new routes.
              </p>
</form>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-600 animate-on-scroll" style={{transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<p>© 2024 Molow. Expeditions. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-neutral-400 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
