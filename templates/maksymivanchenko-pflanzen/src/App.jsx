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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => { document.querySelectorAll('section:not(.hero-bg) h2, section:not(.hero-bg) h3, section:not(.hero-bg) p, section:not(.hero-bg) .group, section:not(.hero-bg) [class*="aspect-"], footer h5, footer ul').forEach(el => { el.classList.add('reveal'); }); const obs = new IntersectionObserver(e => e.forEach(en => { if(en.isIntersecting) { en.target.classList.add('active'); obs.unobserve(en.target); } }), { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.1 + 's'; obs.observe(el); }); const btn = document.getElementById('menu-btn'); const menu = document.getElementById('mobile-menu'); if(btn && menu) { btn.addEventListener('click', () => { menu.classList.toggle('opacity-0'); menu.classList.toggle('pointer-events-none'); }); } });
    


      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".hero-bg",{scale:1.1,opacity:0,duration:2});
      gsap.from("h1,h2",{y:80,opacity:0,stagger:0.2});

      gsap.utils.toArray("section").forEach(section=>{
       gsap.from(section,{
        opacity:0,y:100,
        scrollTrigger:{trigger:section,start:"top 85%"}
       });
      });
    


      const burger = document.getElementById("burger");
      const mobileMenu = document.getElementById("mobileMenu");
      if (burger && mobileMenu) {
        burger.addEventListener("click", () => {
          burger.classList.toggle("active");
          mobileMenu.classList.toggle("open");
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="hero-bg min-h-screen overflow-hidden bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af4fb703-8b2f-4995-a43e-299eb915bcef_3840w.png?w=800&amp;q=80)] bg-cover relative">

<div className="mobile-nav">

<div className="burger" id="burger">
<span></span>
<span></span>
<span></span>
</div>

<div className="absolute left-1/2 -translate-x-1/2">
<a className="inline-flex items-center justify-center bg-center w-[60px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4b91505-ab9c-44cc-a67e-bc515d59a942_3840w.png?w=800&amp;q=80)] bg-cover rounded z-50" href="#"></a>
</div>

<a className="text-[10px] tracking-[0.2em] uppercase border border-gold px-3 py-2 gold hover:bg-gold hover:text-stone-900 transition" href="/gutschein">
          Gutschein
        </a>
</div>
<nav className="lg:px-10 flex desktop-nav z-50 w-full max-w-[1400px] mr-auto ml-auto pt-8 pr-6 pl-6 relative items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4b91505-ab9c-44cc-a67e-bc515d59a942_3840w.png?w=800&amp;q=80)] bg-cover rounded z-50 hover:scale-105 transition-transform" href="#"></a>
<div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em]">
<a className="gold border-gold border-b pb-1" href="/home">STARTSEITE</a>
<a className="hover:text-white text-stone-300" href="/leistungen">
            LEISTUNGEN
          </a>
<a className="hover:text-white text-stone-300" href="/gartnerei">
            GÄRTNEREI
          </a>
<a className="hover:text-white text-stone-300" href="/offnungzeiten">
            ÖFFNUNGSZEITEN
          </a>
<a className="hover:text-white text-stone-300" href="/kontakt">KONTAKT</a>
</div>
<div className="flex items-center gap-3 lg:gap-4 z-50">
<button className="border border-gold gold px-3 py-2 lg:px-5 lg:py-2.5 text-[10px] lg:text-xs tracking-[0.2em] flex items-center gap-1.5 lg:gap-2 hover:bg-gold hover:text-stone-900 transition">
<span className="hidden sm:inline">GUTSCHEIN</span>
            KAUFEN
            <svg className="lucide lucide-gift w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v14"></path>
<path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path>
<path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"></path>
<rect height="4" rx="1" width="18" x="3" y="7"></rect>
</svg>
</button>
<button className="lg:hidden text-gold p-1.5 border border-gold/50 rounded transition hover:bg-gold hover:text-stone-900" id="menu-btn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>

<div className="lg:px-10 lg:pt-28 grid lg:grid-cols-2 max-w-[1400px] mr-auto ml-auto pt-28 pr-6 pb-32 pl-6 relative items-center">

<div className="relative z-10 fade-in">
<p className="text-xs text-stone-300 tracking-[0.35em] mb-8 backdrop-blur-none">
            QUALITÄT. KOMPETENZ. LEIDENSCHAFT.
          </p>
<h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-serif mb-8 md:mb-10">
            NATUR.
            <br/>
            QUALITÄT. LEBENSFREUDE.
          </h1>
<p className="text-sm md:text-base text-stone-300 leading-relaxed mb-10 max-w-md">
            Besuchen Sie unser Pflanzencenter vor Ort. Wir freuen uns darauf,
            Sie persönlich zu beraten und Ihnen unsere große Auswahl zu
            präsentieren.
            <br/>
<br/>
<span className="text-base font-medium text-white">
              Eckernförder Landstraße 14
              <br/>
              24991 Freienwill
            </span>
</p>
<div className="flex flex-wrap gap-4">
<button className="flex hover:bg-amber-400 transition text-xs font-medium text-stone-900 tracking-[0.25em] bg-[#c9a961] pt-3.5 pr-7 pb-3.5 pl-7 gap-x-3 gap-y-3 items-center" onclick="window.open('https://maps.google.com/?q=Eckernförder+Landstraße+14,+24991+Freienwill', '_blank');window.location.href='/google-map'" role="button">
              ROUTE PLANEN
              <svg aria-hidden="true" className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</button>
</div>
</div>

<div className="lg:mt-0 text-right mt-12 space-y-8">
<div className="flex gap-3 gap-x-3 gap-y-3 items-start justify-end">
<div className="">
<p className="text-xs tracking-[0.2em] gold">REGIONAL VERBUNDEN</p>
<p className="text-xs text-stone-400 mt-1">
                Aus der Region, für die Region
              </p>
</div>
<div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-map-pin w-3.5 h-3.5 gold" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
<div className="flex items-start gap-3 justify-end">
<div className="">
<p className="text-xs tracking-[0.2em] gold">PERSÖNLICHE BERATUNG</p>
<p className="text-xs text-stone-400 mt-1">
                Individuell und mit Herz
              </p>
</div>
<div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-heart w-3.5 h-3.5 gold" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-start justify-end">
<div className="">
<p className="text-xs tracking-[0.2em] gold">HÖCHSTE QUALITÄT</p>
<p className="text-xs text-stone-400 mt-1">
                Für gesunde Pflanzen
                <br/>
                und schöne Gärten
              </p>
</div>
<div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-star w-3.5 h-3.5 gold" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 hidden xl:block fade-in fade-in-delay-3"></div>

</section>
<section className="bg-center py-16 lg:py-24 overflow-hidden">
<div className="lg:px-10 grid md:grid-cols-2 gap-12 max-w-[1200px] mr-auto ml-auto pr-6 pl-6 items-center">
<div className="">
<p className="text-xs tracking-[0.3em] gold mb-6 reveal" style={{transitionDelay: '0s'}}>
            PFLANZEN CENTRUM FREIENWILL
          </p>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mb-8 reveal" style={{transitionDelay: '0.1s'}}>
            LEIDENSCHAFT
            <br/>
            FÜR PFLANZEN
          </h2>
<p className="text-sm md:text-base text-stone-300 leading-relaxed mb-8 max-w-md reveal" style={{transitionDelay: '0.2s'}}>
            Wir stehen für Qualität, Fachkompetenz und persönliche Beratung. Mit
            Liebe zur Natur und einem Gespür für das Besondere gestalten wir
            grüne Lebensräume, die begeistern.
          </p>
<button className="gold flex hover:gap-5 transition-all text-xs tracking-[0.25em] gap-x-3 gap-y-3 items-center" onclick="window.location.href='/leistungen'" role="button">
            MEHR ÜBER UNS
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="aspect-[4/3] overflow-hidden flex rounded-sm relative items-center justify-center reveal" style={{transitionDelay: '0s'}}>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdde7b95-ff77-49e3-9836-9c86e82f6eb1_1600w.png)] bg-cover rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>


<section className="bg-center bg-[#0f1a13] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed759379-3c9f-4cfa-a285-789e38790dcd_3840w.png?w=800&amp;q=80)] bg-cover py-16 lg:py-24 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 lg:px-10">
<div className="text-center mb-16">
<p className="text-xs tracking-[0.3em] gold mb-6 reveal" style={{transitionDelay: '0.1s'}}>
            SORTIMENT
          </p>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight reveal" style={{transitionDelay: '0.2s'}}>
            VIELFALT, DIE BEGEISTERT
          </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="group cursor-pointer reveal" style={{transitionDelay: '0s'}}>
<div className="aspect-square flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04b3803a-1f81-4957-8ce2-a70742dce5e1_800w.png?w=800&amp;q=80)] bg-cover rounded-3xl mb-3 items-center justify-center reveal" style={{transitionDelay: '0.1s'}}></div>
<h3 className="text-sm font-medium mb-1 reveal" style={{transitionDelay: '0.2s'}}>
              Nadelgehölze
            </h3>
<p className="text-xs text-stone-400 reveal" style={{transitionDelay: '0s'}}>
              Robust &amp; immergrün
            </p>
</div>
<div className="group cursor-pointer reveal" style={{transitionDelay: '0.1s'}}>
<div className="aspect-square flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18ed98ea-202a-472f-abc4-7e9421d65dfd_800w.png?w=800&amp;q=80)] bg-cover rounded-3xl mb-3 items-center justify-center reveal" style={{transitionDelay: '0.2s'}}></div>
<h3 className="text-sm font-medium mb-1 reveal" style={{transitionDelay: '0s'}}>
              Blühpflanzen
            </h3>
<p className="text-xs text-stone-400 reveal" style={{transitionDelay: '0.1s'}}>
              Farbenpracht in jeder Saison
            </p>
</div>
<div className="group cursor-pointer reveal" style={{transitionDelay: '0.2s'}}>
<div className="aspect-square flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a21da03-ab0e-488a-ab9c-b10d5cd2c02e_800w.png?w=800&amp;q=80)] bg-cover rounded-3xl mb-3 items-center justify-center reveal" style={{transitionDelay: '0s'}}></div>
<h3 className="text-sm font-medium mb-1 reveal" style={{transitionDelay: '0.1s'}}>
              Ziergräser
            </h3>
<p className="text-xs text-stone-400 reveal" style={{transitionDelay: '0.2s'}}>
              Leichtigkeit für Ihren Garten
            </p>
</div>
<div className="group cursor-pointer reveal" style={{transitionDelay: '0s'}}>
<div className="aspect-square flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b8d061b-30b1-4a9a-82e1-c63ee1f2ac65_800w.png?w=800&amp;q=80)] bg-cover rounded-3xl mb-3 items-center justify-center reveal" style={{transitionDelay: '0.1s'}}></div>
<h3 className="text-sm font-medium mb-1 reveal" style={{transitionDelay: '0.2s'}}>
              Laubgehölze
            </h3>
<p className="text-xs text-stone-400 reveal" style={{transitionDelay: '0s'}}>
              Struktur &amp; Region
            </p>
</div>
<div className="group cursor-pointer reveal" style={{transitionDelay: '0.1s'}}>
<div className="aspect-square flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/585734dd-23d8-4830-b207-ff70036166ad_800w.png?w=800&amp;q=80)] bg-cover rounded-3xl mb-3 items-center justify-center reveal" style={{transitionDelay: '0.2s'}}></div>
<h3 className="text-sm font-medium mb-1 reveal" style={{transitionDelay: '0s'}}>
              Obst &amp; Gemüse
            </h3>
<p className="text-xs text-stone-400 reveal" style={{transitionDelay: '0.1s'}}>
              Frisch aus eigenem Anbau
            </p>
</div>
<div className="group cursor-pointer reveal" style={{transitionDelay: '0.2s'}}>
<div className="aspect-square flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/749cca0a-6b89-480a-bb33-51b674a08a8a_800w.png)] bg-cover rounded-3xl mb-3 items-center justify-center reveal" style={{transitionDelay: '0s'}}></div>
<h3 className="text-sm font-medium mb-1 reveal" style={{transitionDelay: '0.1s'}}>
              Gartenaccessoires
            </h3>
<p className="text-xs text-stone-400 reveal" style={{transitionDelay: '0.2s'}}>
              Schönes für Ihren Garten
            </p>
</div>
</div>
<div className="text-center mt-12"></div>
</div>
</section>
<div className="text-right space-y-8"></div>

<section className="bg-center bg-yellow-950 border-stone-800 border-t py-16 lg:py-20 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
<div className="">
<div className="border-gold/40 flex w-10 h-10 border rounded-3xl mb-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-leaf w-4 h-4 gold" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h4 className="text-xs tracking-[0.2em] mb-2">PERSÖNLICHE BERATUNG</h4>
<p className="text-xs text-stone-400 leading-relaxed reveal" style={{transitionDelay: '0s'}}>
            Individuell, kompetent und mit Freude.
          </p>
</div>
<div className="">
<div className="border-gold/40 flex w-10 h-10 border rounded-3xl mb-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-layout w-4 h-4 gold" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h4 className="text-xs tracking-[0.2em] mb-2">GARTENPLANUNG</h4>
<p className="text-xs text-stone-400 leading-relaxed reveal" style={{transitionDelay: '0.1s'}}>
            Maßgeschneiderte Konzepte für Ihr grünes Paradies.
          </p>
</div>
<div className="">
<div className="border-gold/40 flex w-10 h-10 border rounded-3xl mb-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-truck w-4 h-4 gold" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h4 className="text-xs tracking-[0.2em] mb-2">LIEFERSERVICE</h4>
<p className="text-xs text-stone-400 leading-relaxed reveal" style={{transitionDelay: '0.2s'}}>
            Zuverlässig und komfortabel zu Ihnen nach Hause.
          </p>
</div>
<div className="">
<div className="border-gold/40 flex w-10 h-10 border rounded-3xl mb-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-scissors w-4 h-4 gold" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h4 className="text-xs tracking-[0.2em] mb-2">PFLANZSERVICE</h4>
<p className="text-xs text-stone-400 leading-relaxed reveal" style={{transitionDelay: '0s'}}>
            Professionelle Pflanzung für ein perfektes Ergebnis.
          </p>
</div>
<div className="">
<div className="border-gold/40 flex w-10 h-10 border rounded-3xl mb-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-gift w-4 h-4 gold" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"></path><rect height="4" rx="1" width="18" x="3" y="7"></rect></svg>
</div>
<h4 className="text-xs tracking-[0.2em] mb-2">GESCHENKGUTSCHEINE</h4>
<p className="text-xs text-stone-400 leading-relaxed reveal" style={{transitionDelay: '0.1s'}}>
            Damit Sie Garten das ganze Jahr gute Idee.
          </p>
</div>
</div>
</section>



<section className="bg-[#0f1a13] border-stone-800 border-t py-16 lg:py-20 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10">
<div className="">
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5 gold" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<h4 className="text-xs tracking-[0.25em] gold">ÖFFNUNGSZEITEN</h4>
</div>
<div className="space-y-2 text-xs text-stone-300">
<div className="flex justify-between">
<span>Montag – Freitag</span>
<span className="">09:00 – 18:00 Uhr</span>
</div>
<div className="flex justify-between">
<span>Samstag</span>
<span className="">09:00 – 16:00 Uhr</span>
</div>
<div className="flex justify-between">
<span>Sonntag</span>
<span className="">10:00 – 15:00 Uhr</span>
</div>
</div>
<button className="gold flex hover:gap-4 transition-all text-xs tracking-[0.25em] mt-6 gap-x-2 gap-y-2 items-center" onclick="window.location.href='/offnungzeiten'" role="button">
            ALLE ÖFFNUNGSZEITEN
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="">
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" className="lucide lucide-map-pin w-5 h-5 gold" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h4 className="text-xs tracking-[0.25em] gold">STANDORT</h4>
</div>
<div className="text-xs text-stone-300 space-y-1">
<p className="reveal" style={{transitionDelay: '0.2s'}}>
              Pflanzen Centrum Freienwill
            </p>
<p className="reveal" style={{transitionDelay: '0s'}}>
              Eckernförder Landstraße 14
            </p>
<p className="reveal" style={{transitionDelay: '0.1s'}}>
              24991 Freienwill
            </p>
</div>
<button className="gold flex hover:gap-4 transition-all text-xs tracking-[0.25em] mt-6 gap-x-2 gap-y-2 items-center" onclick="window.location.href='/google-map'" role="button">
            ANFAHRT PLANEN
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="">
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5 gold" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<h4 className="text-xs tracking-[0.25em] gold">KONTAKT</h4>
</div>
<div className="text-xs text-stone-300 space-y-1">
<p className="reveal" style={{transitionDelay: '0.2s'}}>
              Telefon: 04602 - 967 09 09
            </p>
<p className="reveal" style={{transitionDelay: '0s'}}>
              E-Mail: info@pflanzen-centrum-freienwill.de
            </p>
</div>
<button className="gold flex hover:gap-4 transition-all text-xs tracking-[0.25em] mt-6 gap-x-2 gap-y-2 items-center" onclick="window.location.href='/kontakt'" role="button">
            ZUR KONTAKTSEITE
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<footer className="bg-[#0a130d] border-stone-800 border-t py-12 lg:py-16 overflow-hidden">
<div className="lg:px-10 grid md:grid-cols-4 gap-10 max-w-[1200px] mr-auto mb-12 ml-auto pr-6 pl-6 gap-x-10 gap-y-10">
<div className="">
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4b91505-ab9c-44cc-a67e-bc515d59a942_320w.png?w=800&amp;q=80)] bg-cover rounded translate-y-0 lg:translate-y-6 hover:scale-105 transition-transform" href="#"></a>
</div>
<div className="">
<h5 className="text-xs tracking-[0.2em] gold mb-5 reveal" style={{transitionDelay: '0.1s'}}>
            NAVIGATION
          </h5>
<ul className="space-y-2 text-xs text-stone-400 reveal" style={{transitionDelay: '0.2s'}}>
<li className="">
<a className="hover:text-white" href="/home">Startseite</a>
</li>
<li className="">
<a className="hover:text-white" href="/leistungen">Leistungen</a>
</li>
<li className="">
<a className="hover:text-white" href="/gartnerei">Gärtnerei</a>
</li>
<li className=""></li>
</ul>
</div>
<div className="">
<h5 className="text-xs tracking-[0.2em] gold mb-5 reveal" style={{transitionDelay: '0s'}}>
            SERVICE
          </h5>
<ul className="space-y-2 text-xs text-stone-400 reveal" style={{transitionDelay: '0.1s'}}>
<li className="">
<a className="hover:text-white" href="/gutschein">Gutschein kaufen</a>
</li>
<li className="">
<a className="hover:text-white" href="/offnungzeiten">
                Öffnungszeiten
              </a>
</li>
<li className=""><a className="hover:text-white" href="#">Kontakt</a></li>
<li className="">
<a className="hover:text-white" href="#">Datenschutz</a>
</li>
<li className=""><a className="hover:text-white" href="#">Impressum</a></li>
</ul>
</div>
<div className="">
<div className="flex gap-3"></div>
</div>
</div>
<div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-8 border-t border-stone-800">
<p className="text-xs text-stone-500">
          © 2024 Pflanzen Centrum Freienwill. Alle Rechte vorbehalten.
        </p>
</div>
</footer>

<div className="mobile-menu" id="mobileMenu">
<a href="/home">Startseite</a>
<a href="/leistungen">Leistungen</a>
<a href="/gartnerei">Gärtnerei</a>
<a href="/offnungzeiten">Öffnungszeiten</a>
<a href="/kontakt">Kontakt</a>
</div>




    </>
  );
}
