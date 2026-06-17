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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3">
<i className="text-emerald-500 w-8 h-8" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="font-medium text-2xl tracking-tight text-gray-900">
              Pajottenland
            </span>
</div>

<div className="hidden lg:flex space-x-8">
<a className="text-base font-medium text-gray-900" href="#">Home</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Verhalen
            </a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Ambassadeurs
            </a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Activiteiten
            </a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Wandelen
            </a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Partnerorganisaties
            </a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">
              Contact
            </a>
</div>

<div className="hidden lg:flex items-center gap-6">
<a className="text-gray-400 hover:text-sky-500 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600 transition-all hover:shadow-md" href="#">
              Pajottenland+
            </a>
</div>

<div className="lg:hidden flex items-center">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<style>
      @keyframes s-fade1{0%,25%{opacity:1}33.33%,91.66%{opacity:0}100%{opacity:1}}@keyframes s-fade2{0%,25%{opacity:0}33.33%,58.33%{opacity:1}66.66%,100%{opacity:0}}@keyframes s-fade3{0%,58.33%{opacity:0}66.66%,91.66%{opacity:1}100%{opacity:0}}.slide-1{animation:s-fade1 9s infinite}.slide-2{animation:s-fade2 9s infinite}.slide-3{animation:s-fade3 9s infinite}
    </style>
<div className="relative w-full h-[300px] md:h-[400px] bg-gray-100 overflow-hidden">
<img alt="Pajottenland Landscape 1" className="absolute inset-0 w-full h-full object-cover slide-1" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<img alt="Pajottenland Landscape 2" className="absolute inset-0 w-full h-full object-cover opacity-0 slide-2" src="https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<img alt="Pajottenland Landscape 3" className="absolute inset-0 w-full h-full object-cover opacity-0 slide-3" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-transparent z-10"></div>
</div>

<section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
            Een plattelandsproject indienen
          </h1>
<div className="h-1 w-16 bg-emerald-400 mx-auto rounded-full mb-8"></div>
<p className="text-xl font-medium text-gray-800 mb-8 tracking-tight">
            Je kan jouw projectidee altijd indienen. Wij bekijken dan via welke
            weg je subsidies kan krijgen.
          </p>

<div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 md:p-8 text-left shadow-sm mb-12">
<div className="flex flex-col sm:flex-row gap-4 sm:items-start">
<div className="bg-white rounded-full p-2 shadow-sm shrink-0 w-fit">
<i className="text-red-500 w-6 h-6" data-lucide="alert-triangle" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-lg font-medium text-red-800 mb-3">
                  Belangrijke mededelingen:
                </p>
<ul className="space-y-3 text-lg text-red-700/90 list-disc list-inside">
<li>
                    Je kan vanaf 10 april '26 voorlopig geen micro-, reguliere-
                    of koepelprojecten meer indienen !!!
                  </li>
<li>
                    Een samenwerkingsproject indienen is mogelijk; maar dient
                    eerst goedgekeurd te worden door de LAG alvorens in te
                    dienen. Contacteer de LEADER-coördinator voor meer info.
                  </li>
<li className="font-medium text-red-800">
                    Deadline voor indiening van een samenwerkingsproject is 30
                    juni 2026.
                  </li>
</ul>
</div>
</div>
</div>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
<p>
              Pajottenland+ is een samenwerkingsverband tussen de
              gemeentebesturen van de gemeenten Bever, Pepingen (Galmaarden,
              Herne en Gooik), Lennik, Pepingen, Roosdaal, Ternat en
              Sint-Pieters-Leeuw, de provincie Vlaams-Brabant,
              (middenveld)organisaties, landbouwers, ondernemers en experten die
              in de streek actief zijn.
            </p>
<p>
              Woon je in één van deze gemeenten of wil je een project realiseren
              in één van deze 7 plattelandsgemeenten?
              <br/>
<a className="text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-4 decoration-emerald-200 hover:decoration-emerald-400 transition-all" href="#">
                Ga dan verder naar onze LEADER-pagina
              </a>
</p>
<p>
              Weet je al wat LEADER is... Hoe Pajottenland+ werkt...
              <span className="font-medium text-gray-900">
                dien dan onderaan jouw idee of microproject in!
              </span>
<br/>
              Regelmatig zijn er ook oproepen.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-300 transition-all duration-300 flex flex-col items-center text-center" href="#">
<div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">
              Dien je idee in
            </h3>
</a>
<a className="group bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-xl hover:shadow-sky-500/5 hover:border-sky-300 transition-all duration-300 flex flex-col items-center text-center" href="#">
<div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">
              Dien een microproject in
            </h3>
</a>
<a className="group bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-300 transition-all duration-300 flex flex-col items-center text-center" href="#">
<div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">
              Projectoproep
            </h3>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
            Merkgebruikers worden 'Ambassadeurs'
          </h2>
<div className="h-1 w-16 bg-sky-400 mx-auto rounded-full mb-8"></div>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
              Ondernemen met een hart voor hun streek, voor de merkgebruikers
              uit 't Pajottenland en de Zennevallei is het 'n bewuste keuze.
              Ondernemers uit 't Pajottenland startten in maart 2022 hun eigen
              vzw 'Ambassadeurs van het Pajottenland'. Doel: de merknaam
              'Pajottenland' versterken, samenwerken en nieuwe afzetmarkten
              aanboren. Info?
              <a className="text-sky-600 hover:underline" href="#">
                http://www.pajottenlandambassadeurs.be
              </a>
</p>
<p>
              Tot eind '21 had Pajottenland+ de merkgebruikers onder haar
              vleugels. Je vindt hen hier onderaan - per categorie - terug.
              Mogelijks zijn er reeds merkgebruikers gestopt of stapten zij niet
              over naar de Ambassadeurs van het Pajottenland.
            </p>
<p>
              Via het LEADER-project '175 jaar Pajottenland' werd de overdracht
              naar de vzw Ambassadeurs van het Pajottenland georganiseerd.
            </p>
<p>
              Je kan de ambassadeurs bereiken via het volgende e-mail adres:
              <a className="text-emerald-600 hover:underline" href="mailto:info@pajottenlandambassadeurs.be">
                info@pajottenlandambassadeurs.be
              </a>
</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-emerald-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-emerald-700 transition-colors">
              Producenten
            </span>
</a>
<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-sky-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-sky-700 transition-colors">
              Producenten cvba 'Lekkers uit het Pajottenland'
            </span>
</a>
<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-emerald-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-emerald-700 transition-colors">
              Producenten met marktkraam
            </span>
</a>
<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-sky-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-sky-700 transition-colors">
              Winkels met Pajotse producten
            </span>
</a>
<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-sky-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-sky-700 transition-colors">
              Logies
            </span>
</a>
<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-emerald-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-emerald-700 transition-colors">
              Restaurants &amp; cafés
            </span>
</a>
<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-sky-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-sky-700 transition-colors">
              Catering
            </span>
</a>
<a className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center min-h-[140px] relative overflow-hidden group" href="#">
<div className="absolute top-0 inset-x-0 h-1 bg-emerald-400/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
<span className="text-lg font-medium tracking-tight text-gray-800 group-hover:text-emerald-700 transition-colors">
              Recreatie, beleving en attracties
            </span>
</a>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-900 overflow-hidden">

<div className="absolute inset-0 opacity-20 mix-blend-overlay">
<img alt="Background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          3 B's van Pajottenland
        </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Het heuvelige landschap, bieren en onze Brabantse trekpaarden... daar
          zijn we in het Pajottenland trots op. Wist je dat onze boerenpaarden
          wereldberoemd zijn? Dat Bruegel Pajotse landschappen vereeuwigde? En
          dat onze lambiekbieren nergens anders geproduceerd worden?
        </p>
<a className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium text-gray-900 bg-white hover:bg-gray-100 mb-20 shadow-lg shadow-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-white/20" href="#">
          Lees Meer
        </a>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10">
<div className="aspect-w-16 aspect-h-10 w-full overflow-hidden">
<img alt="Bier" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-white">
                Bier
              </h3>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10">
<div className="aspect-w-16 aspect-h-10 w-full overflow-hidden bg-gray-800 flex items-center justify-center">

<i className="w-16 h-16 text-gray-500 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500" data-lucide="palette" strokeWidth="1"></i>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-white">
                Bruegel
              </h3>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10">
<div className="aspect-w-16 aspect-h-10 w-full overflow-hidden">
<img alt="Brabantse trekpaarden" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1553531384-cc64ac80f931?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-white">
                Brabantse trekpaarden
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
          Onze projecten
        </h2>
<div className="h-1 w-16 bg-emerald-400 mx-auto rounded-full"></div>
</div>
<div className="space-y-16">
<article className="prose prose-lg prose-gray max-w-none">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
            175 jaar Pajottenland (promotor)
          </h3>
<p className="text-lg text-gray-600 leading-relaxed">
            Pajottenland+ is al enkele jaren bezig met Regional Branding. 175
            jaar Pajottenland wordt als (verjaardags)kans gebruikt om met de RB
            nieuwe wegen in te slaan, namelijk de samenwerking binnen de
            plattelandseconomie in het Pajottenland te versterken en in te
            spelen op nieuwe ontwikkelingen (bv. na corona). Sedert eind 2019
            werd er naast de netwerkmomenten ook een stuurgroep opgericht die
            nauwgezet meebouwt aan het merkgebruik en aan economische
            plattelandsacties. Dat merkgebruik zal via dit project versterkt
            worden, met als concreet doel een verzelfstandiging van het
            economische plattelandsnetwerk en hedendaagse accenten. Vanuit de
            LEADER-doelstelling DER (développement de l'économie rurale) zal
            Pajottenland+ dat verzelfstandigde, economische netwerk blijven
            ondersteunen.
          </p>
</article>
<article className="prose prose-lg prose-gray max-w-none border-t border-gray-100 pt-16">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
            Pajotse toerismepunten (copromotor)
          </h3>
<p className="text-lg text-gray-600 leading-relaxed mb-6">
            Het project 'Pajotse toerismepunten' zal de streektroeven
            versterken, vanuit de 6 Pajotse mobipunten. Er wordt in een
            (e-)deelfietssysteem voorzien dat zowel toeristen, bezoekers als
            inwoners toelaat om comfortabel grotere afstanden af te leggen in de
            heuvelrijke streek. Bijkomend zal een aangepast toeristisch infobord
            een startwijzer vormen om de streek te ontdekken. Met visuele info
            en verwijzing naar digitale info over het Pajottenland &amp; fiets-
            en wandelroutes en bezienswaardigheden. Op die manier wordt er een
            win-win beoogd van toerisme en mobiliteit, die een transitie naar
            aangename en duurzame verplaatsingen voor bezoekers en inwoners in
            de hand werkt.
          </p>
</article>
<article className="prose prose-lg prose-gray max-w-none border-t border-gray-100 pt-16">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
            Pajottenland+ en Vlaamse Ardennen voor streekversterking (promotor)
          </h3>
<p className="text-lg text-gray-600 leading-relaxed mb-4">
            Het Pajottenland, het Toscane van het noorden en de Vlaamse
            Ardennen, het decor van Vlaanderens Mooiste. Ook meesters als
            Bruegel en Adriaan Brouwer, Valerius De Saedeleer en nog zovele
            anderen zijn extra troeven waar de aangrenzende regio's blijvend en
            internationaal mee kunnen uitpakken.
          </p>
<p className="text-lg text-gray-600 leading-relaxed">
            Met dit samenwerkingsproject wensen beide regio's de
            plattelandseconomie te versterken door de krachten te bundelen via
            kenmerken die ze binden zoals landschap, erfgoed, wandelen, fietsen
            en streekproducten en door het uitwisselen van expertise.
          </p>
</article>

</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">
              Recente blogposts
            </h2>
<div className="h-1 w-16 bg-sky-400 rounded-full"></div>
</div>
<a className="hidden sm:inline-flex items-center text-base font-medium text-emerald-600 hover:text-emerald-700" href="#">
            Bekijk alle artikels
            <i className="ml-2 w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="bg-white rounded-3xl border border-gray-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col group">
<div className="h-56 overflow-hidden">
<img alt="Equitrail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<time className="text-base text-gray-400 mb-3 block">12.12.2023</time>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                Equitrail rond Brussel
              </h3>
<p className="text-lg text-gray-600 line-clamp-3 mb-8 flex-grow">
                Het Pajottenland maakt deel uit van de Groene Gordel rond
                Brussel. Die Gordel verrast fietsers en wandelaars met kastelen
                en bijhorende parken, met bossen en weilanden...
              </p>
<a className="inline-flex items-center justify-center w-fit px-5 py-2 rounded-full border border-gray-200 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors mt-auto" href="#">
                Lees meer
              </a>
</div>
</article>

<article className="bg-white rounded-3xl border border-gray-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col group">
<div className="h-56 bg-emerald-50 flex items-center justify-center p-8 overflow-hidden">
<span className="text-3xl font-medium text-emerald-800 tracking-tight">
                Pajottenland
              </span>
</div>
<div className="p-8 flex flex-col flex-grow">
<time className="text-base text-gray-400 mb-3 block">29.06.2023</time>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                LEADER-projecten versterken de streek
              </h3>
<p className="text-lg text-gray-600 line-clamp-3 mb-8 flex-grow">
                Het Pajottenland heeft heel wat troeven. In deze dynamische
                regio zetten diverse stakeholders, ik noem ze ook graag de
                'streekhouders', in op de open ruimte...
              </p>
<a className="inline-flex items-center justify-center w-fit px-5 py-2 rounded-full border border-gray-200 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors mt-auto" href="#">
                Lees meer
              </a>
</div>
</article>

<article className="bg-white rounded-3xl border border-gray-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col group">
<div className="h-56 overflow-hidden">
<img alt="Raf Van Der Meulen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<time className="text-base text-gray-400 mb-3 block">29.06.2023</time>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                Raf Van Der Meulen, klimaatslimme fruitteler in het Pajottenland
              </h3>
<p className="text-lg text-gray-600 line-clamp-3 mb-8 flex-grow">
                Ga je langs bij de hoevewinkel 'Een Mandvol, fruit van eigen
                teelt' in Lennik, dan ontmoet je er Raf Van Der Meulen en zijn
                vrouw Hadewijch.
              </p>
<a className="inline-flex items-center justify-center w-fit px-5 py-2 rounded-full border border-gray-200 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors mt-auto" href="#">
                Lees meer
              </a>
</div>
</article>
</div>
<div className="mt-8 text-center sm:hidden">
<a className="inline-flex items-center text-base font-medium text-emerald-600 hover:text-emerald-700" href="#">
            Bekijk alle artikels
            <i className="ml-2 w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-gray-600">
<i className="w-8 h-8" data-lucide="flag" strokeWidth="1.5"></i>
<span className="text-base font-medium tracking-tight">
              Europees Landbouwfonds
            </span>
</div>
<div className="flex items-center gap-2 text-gray-600">
<i className="w-8 h-8 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight">
              Pajottenland+
            </span>
</div>
<div className="flex items-center gap-2 text-gray-600">
<i className="w-8 h-8" data-lucide="map" strokeWidth="1.5"></i>
<span className="text-base font-medium tracking-tight">
              Vlaams-Brabant
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center text-base text-gray-500 border-t border-gray-100 pt-8 gap-4 text-center md:text-left">
<p>
            Molenstraat 26, 1760 Pamel-Roosdaal
            <span className="hidden md:inline mx-2">·</span>
<br className="md:hidden"/>
            054 50 02 45
            <span className="hidden md:inline mx-2">·</span>
<a className="hover:text-gray-900 transition-colors" href="#">
              Privacyverklaring
            </a>
</p>
<p>© 2026 Webdesign by Puzzle</p>
</div>
</div>
</footer>


    </>
  );
}
