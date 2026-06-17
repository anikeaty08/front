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



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

          document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
      });
    


      document.addEventListener('DOMContentLoaded', () => {
          const counters = document.querySelectorAll('.counter');

          const animateCounters = (entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const counter = entry.target;
                      const target = +counter.getAttribute('data-target');
                      const duration = 2000;
                      const frameDuration = 1000 / 60;
                      const totalFrames = Math.round(duration / frameDuration);
                      let frame = 0;

                      const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                      const counterInterval = setInterval(() => {
                          frame++;
                          const progress = 1 - Math.pow(1 - frame / totalFrames, 4);
                          const currentCount = Math.round(target * progress);

                          if (frame >= totalFrames) {
                              clearInterval(counterInterval);
                              counter.innerText = formatNumber(target);
                          } else {
                              counter.innerText = formatNumber(currentCount);
                          }
                      }, frameDuration);

                      observer.unobserve(counter);
                  }
              });
          };

          const counterObserver = new IntersectionObserver(animateCounters, { threshold: 0.1 });
          counters.forEach(counter => counterObserver.observe(counter));
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
      

<div className="hidden lg:flex justify-between items-center px-8 py-2.5 bg-zinc-50 border-b border-zinc-100 text-sm text-zinc-600">
<div className="flex items-center gap-6 font-medium">
<a className="flex items-center gap-2 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
          +32 56 36 19 10
        </a>
<a className="flex items-center gap-2 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
          office@futurn.com
        </a>
<a className="flex items-center gap-2 hover:text-zinc-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
          chat via whatsapp
        </a>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-3 font-medium">
<button className="text-zinc-900">NL</button>
<span className="text-zinc-300">|</span>
<button className="hover:text-zinc-900 transition-colors">FR</button>
</div>
<a className="bg-emerald-600 text-white px-5 py-1.5 rounded-full font-medium hover:bg-emerald-700 transition-colors" href="#">
          Jouw bedrijfsterrein verkopen?
        </a>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex flex-col" href="#">
<span className="text-2xl font-semibold tracking-tight leading-none text-zinc-900">
            FUTURN
          </span>
<span className="text-xs font-medium tracking-widest text-zinc-500 uppercase mt-1">
            Real estate that fits
          </span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-base font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#">
            Projectaanbod
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#">
            Realisaties
          </a>
<div className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 transition-colors group">
            Over Futurn
            <i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-1 cursor-pointer hover:text-zinc-900 transition-colors group">
            Onze expertise
            <i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="hover:text-zinc-900 transition-colors" href="#">Nieuws</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
            Aanmelden
          </a>
<button className="lg:hidden text-zinc-900 p-2 -mr-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative w-full h-[85vh] min-h-[600px] bg-zinc-100 overflow-hidden">
<img alt="Modern business park" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="relative h-full max-w-screen-2xl mx-auto px-6 lg:px-8 flex items-end pb-24">
<div className="bg-white p-10 lg:p-12 rounded-2xl shadow-xl max-w-xl w-full fade-up">
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
            Bornem • Cesar business park
          </h1>
<p className="text-lg text-zinc-600 mb-8">
            Lancering project fase 2 met KMO-units en kantoren.
          </p>
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-zinc-800 transition-colors" href="#">
            Lees meer
          </a>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
<button className="w-2.5 h-2.5 rounded-full bg-white"></button>
<button className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/60 transition-colors"></button>
<button className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/60 transition-colors"></button>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center fade-up">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 mb-10">
          Real estate that fits
        </h2>
<div className="space-y-6 text-lg lg:text-xl text-zinc-600 leading-relaxed mb-12">
<p>
            Futurn is specialist in de
            <span className="font-medium text-zinc-900">
              herontwikkeling van bedrijfsvastgoed
            </span>
            . Al 14 jaar transformeren we verloren gewaande sites tot
            werkplekken waar bedrijven écht kunnen groeien. Voor ons moet
            bedrijfsvastgoed inspireren, functioneel en duurzaam zijn.
          </p>
<p>
            Daarom ontwerpen we
            <span className="font-medium text-zinc-900">
              gebouwen die slim met ruimte omgaan, oog hebben voor schoonheid en
              architectuur, en tegelijk een gevoel van community creëren
            </span>
            . We combineren reconversie van bestaande sites met moderne,
            maatschappelijk verantwoorde oplossingen. Zo ontstaan werkplekken
            die passen bij jouw bedrijf, bij de mensen die er werken én bij de
            omgeving.
          </p>
</div>
<a className="inline-flex items-center justify-center bg-zinc-100 text-zinc-900 px-8 py-3.5 rounded-lg text-base font-medium hover:bg-zinc-200 transition-colors" href="#">
          Onze duurzame visie
        </a>
</div>
</section>

<section className="py-16 px-6 lg:px-8 border-t border-zinc-100">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center fade-up">
<h3 className="text-xl lg:text-2xl font-medium tracking-tight text-zinc-900 mb-10">
          Futurn wint Real Estate Society Award 2025
        </h3>
<div className="w-full aspect-[21/9] bg-zinc-100 rounded-2xl overflow-hidden mb-10 border border-zinc-200">
<img alt="Award Ceremony" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-zinc-800 transition-colors" href="#">
          Meer lezen
        </a>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-50 px-6 lg:px-8 border-y border-zinc-200">
<div className="max-w-screen-xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 text-center mb-16 fade-up">
          Projecten in de kijker
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

<a className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-md transition-shadow duration-300 fade-up" href="#">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
<img alt="West Gate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 lg:p-8">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
                West Gate business campus
              </h3>
<p className="flex items-center gap-2 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                Groot-Bijgaarden
              </p>
</div>
</a>

<a className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-md transition-shadow duration-300 fade-up delay-100" href="#">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
<img alt="RE|CORE" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 lg:p-8">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
                RE|CORE business campus
              </h3>
<p className="flex items-center gap-2 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                Hasselt
              </p>
</div>
</a>

<a className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-md transition-shadow duration-300 fade-up delay-200" href="#">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
<img alt="Cesar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&amp;w=2067&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 lg:p-8">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Cesar business campus
              </h3>
<p className="flex items-center gap-2 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                Bornem
              </p>
</div>
</a>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-zinc-800 transition-colors gap-2" href="#">
<i className="w-5 h-5" data-lucide="grid" strokeWidth="1.5"></i>
            Onze projecten
          </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-900 text-white px-6 lg:px-8">
<div className="max-w-screen-lg mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center mb-20 fade-up">
          Onze impact in cijfers
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
<div className="flex flex-col items-center fade-up">
<div className="w-16 h-16 mb-6 text-zinc-400">
<i className="w-full h-full" data-lucide="map" strokeWidth="1.5"></i>
</div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              ±
              <span className="counter" data-target="410840">0</span>
</div>
<div className="text-lg text-zinc-400">m² grond herontwikkeld</div>
</div>
<div className="flex flex-col items-center fade-up delay-100">
<div className="w-16 h-16 mb-6 text-zinc-400">
<i className="w-full h-full" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
<span className="counter" data-target="11">0</span>
</div>
<div className="text-lg text-zinc-400">
              bedrijvencampussen gerealiseerd
            </div>
</div>
<div className="flex flex-col items-center fade-up delay-200">
<div className="w-16 h-16 mb-6 text-zinc-400">
<i className="w-full h-full" data-lucide="building" strokeWidth="1.5"></i>
</div>
<div className="text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              +
              <span className="counter" data-target="228">0</span>
</div>
<div className="text-lg text-zinc-400">verkochte bedrijfsunits</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-emerald-600 mb-4">
            Plekken die passen bij jouw bedrijf,
          </h2>
<p className="text-xl text-zinc-500">die bouwen wij</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer fade-up">
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-6">
<img alt="KMO-units" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-zinc-900 text-white text-center py-5 rounded-xl text-lg font-medium tracking-tight mb-4 group-hover:bg-emerald-700 transition-colors">
              KMO-units
            </div>
<p className="text-center text-lg text-zinc-600">
              Functioneel en toekomstbestendig
            </p>
</div>

<div className="group cursor-pointer fade-up delay-100">
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-6">
<img alt="Kantoren" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-zinc-900 text-white text-center py-5 rounded-xl text-lg font-medium tracking-tight mb-4 group-hover:bg-emerald-700 transition-colors">
              Kantoren en showrooms
            </div>
<p className="text-center text-lg text-zinc-600">
              Inspirerend, praktisch en duurzaam
            </p>
</div>

<div className="group cursor-pointer fade-up delay-200">
<div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-6">
<img alt="Build to suit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&amp;w=2067&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-zinc-900 text-white text-center py-5 rounded-xl text-lg font-medium tracking-tight mb-4 group-hover:bg-emerald-700 transition-colors">
              Build to suit
            </div>
<p className="text-center text-lg text-zinc-600">
              100% gebouwd op maat
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-100 px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center fade-up">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-8">
          Bedrijfsterrein te koop?
        </h2>
<div className="space-y-6 text-lg text-zinc-600 mb-10">
<p>
            Futurn is altijd op zoek naar interessante locaties voor nieuwe
            projecten. Met onze expertise in (her)ontwikkeling en duurzaam
            bouwen zijn we de ideale partner.
          </p>
<p>
<span className="font-medium text-zinc-900">
              We kopen sites, activeren onbenutte terreinen en zetten in op
              hergebruik van bestaand vastgoed.
            </span>
            Samen bouwen we duurzame partnerships met eigenaars, verhuurders,
            kopers en huurders.
          </p>
</div>
<a className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-emerald-700 transition-colors" href="#">
          Neem contact op
        </a>
</div>
</section>

<section className="py-24 px-6 lg:px-8 border-y border-zinc-200">
<div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-16 lg:gap-32">
<a className="group flex flex-col items-center fade-up" href="#">
<div className="w-24 h-24 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">
            FAQtory
          </span>
</a>
<a className="group flex flex-col items-center fade-up delay-100" href="#">
<div className="w-24 h-24 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="newspaper" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">
            Nieuws
          </span>
</a>
<a className="group flex flex-col items-center fade-up delay-200" href="#">
<div className="w-24 h-24 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="user" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">
            Contacteer ons
          </span>
</a>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8">
<div className="max-w-screen-xl mx-auto text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-emerald-600 mb-4 fade-up">
          Onze klanten
        </h2>
<p className="text-xl text-zinc-500 mb-20 fade-up delay-100">
          waarvoor we werkplekken creëerden
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 fade-up delay-200">

<div className="text-2xl font-bold tracking-tighter text-zinc-800">
            AstraZeneca
          </div>
<div className="text-2xl font-bold tracking-tighter text-zinc-800">
            ABInBev
          </div>
<div className="text-2xl font-bold tracking-tighter text-zinc-800">
            Zenith
            <br/>
            Graphics
          </div>
<div className="text-2xl font-bold tracking-tighter text-zinc-800">
            JAKO
          </div>
</div>
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-zinc-800 transition-colors" href="#">
          Lees hun verhalen
        </a>
</div>
</section>

<section className="bg-emerald-50 py-16 px-6 lg:px-8">
<a className="max-w-4xl mx-auto flex items-center justify-center gap-4 group fade-up" href="#">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-emerald-900 group-hover:text-emerald-700 transition-colors">
          Schrijf je in en blijf op de hoogte van onze projecten
        </h2>
<i className="w-6 h-6 text-emerald-900 group-hover:translate-x-2 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</section>

<footer className="bg-zinc-50 pt-24 pb-12 px-6 lg:px-8 border-t border-zinc-200">
<div className="max-w-screen-xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="lg:pr-8 fade-up">
<a className="flex flex-col mb-6 block" href="#">
<span className="text-2xl font-semibold tracking-tight leading-none text-zinc-900">
                FUTURN
              </span>
<span className="text-xs font-medium tracking-widest text-zinc-500 uppercase mt-1">
                Real estate that fits
              </span>
</a>
<p className="text-base text-zinc-500 leading-relaxed">
              Futurn is specialist in de
              <span className="font-medium text-zinc-700">
                herontwikkeling van bedrijfsvastgoed in Vlaanderen
              </span>
              . Wij transformeren verouderde of ongebruikte sites tot duurzame,
              moderne en veelzijdige werkplekken die klaar zijn voor de
              toekomst.
            </p>
</div>

<div className="fade-up delay-100">
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-6">
              Overzicht
            </h4>
<ul className="space-y-4 text-base text-zinc-500">
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Over Futurn
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Projecten te koop
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Realisaties
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Nieuws
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Getuigenissen
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  FAQtory
                </a>
</li>
</ul>
</div>

<div className="fade-up delay-200">
<h4 className="text-lg font-medium tracking-tight text-transparent mb-6 hidden lg:block select-none">
              Links
            </h4>
<ul className="space-y-4 text-base text-zinc-500">
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Contact
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Algemene Voorwaarden
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Bedrijfsterrein Verkopen
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
                  Jobs
                </a>
</li>
</ul>
</div>

<div className="fade-up delay-300">
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-6">
              Contact
            </h4>
<address className="not-italic text-base text-zinc-500 space-y-4">
<p>
                Dumolinlaan 1 bus 0031
                <br/>
                8500 Kortrijk
                <br/>
                België
              </p>
<p>
<a className="text-emerald-600 hover:text-emerald-700 transition-colors block" href="#">
                  +32 (0)56 36 19 10
                </a>
<a className="text-emerald-600 hover:text-emerald-700 transition-colors block" href="#">
                  office@futurn.com
                </a>
</p>
<p>BE 725.738.954</p>
<div className="flex gap-4 pt-2">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</address>
</div>
</div>

<div className="pt-8 border-t border-zinc-200 text-center text-sm text-zinc-400">
<p>© 2025 Futurn Holding NV - Alle rechten voorbehouden</p>
</div>
</div>
</footer>




    </>
  );
}
