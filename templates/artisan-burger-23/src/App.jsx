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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-transparent">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="uppercase text-4xl text-[#f91814]" href="/" style={{fontFamily: '"Modak", system-ui'}}>
          CRAV
        </a>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors uppercase" href="/">
              Accueil
            </a>
<a className="text-xs font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors uppercase" href="#about">
              À Propos
            </a>
<a className="text-xs font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors uppercase" href="#ingredients">
              Ingrédients
            </a>
<a className="text-xs font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors uppercase" href="#locations">
              Adresses
            </a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-xs uppercase tracking-tight font-medium text-white bg-[#f91814] hover:bg-red-700 px-5 py-2 rounded-full transition-all shadow-sm" href="/menu">
            Les Burgers
          </a>
<button aria-label="Menu" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-700 md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center text-center px-6 overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5 pointer-events-none select-none">
<span className="text-[25vw] leading-none text-[#F4A804]" style={{fontFamily: '\'Modak\', system-ui'}}>
          CRAV
        </span>
</div>
<h1 className="text-6xl md:text-[10vw] leading-none text-[#f91814] tracking-tighter max-w-5xl mx-auto drop-shadow-sm" style={{fontFamily: '\'Modak\', system-ui'}}>
        THE BURGER
      </h1>
<div className="flex items-center justify-center gap-4 mt-6 text-[#F4A804]">
<p className="text-xl md:text-3xl tracking-tight uppercase" style={{fontFamily: '\'Mouse Memoirs\', sans-serif'}}>
          Écrasé Frais
        </p>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
<p className="text-xl md:text-3xl tracking-tight uppercase" style={{fontFamily: '\'Mouse Memoirs\', sans-serif'}}>
          Goût Audacieux
        </p>
</div>
<div className="relative w-full max-w-4xl mt-12 mb-8 z-10">
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent z-10 top-1/2"></div>
<img alt="CRAV Artisan Smashed Burger" className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 object-contain" src="https://www.cravburgers.shop/img-webp/burgerH.webp"/>
</div>
<div className="flex flex-col md:flex-row justify-between w-full max-w-4xl gap-8 text-sm font-medium text-zinc-500 text-left px-6 relative z-20">
<p className="max-w-xs tracking-tight">
          Écrasés chauds sur la plaque, nos steaks hachés conservent une
          jutosité ultime sous une croûte caramélisée.
        </p>
<p className="max-w-xs md:text-right tracking-tight">
          Garnis de cheddar fondu et de notre sauce secrète, créés pour
          satisfaire vos envies depuis 1997.
        </p>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F4EBE1]" id="about">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<p className="text-2xl tracking-tight mb-4 uppercase text-[#f91814]" style={{fontFamily: '\'Mouse Memoirs\', sans-serif'}}>
          Le Grand Classique
        </p>
<h2 className="text-4xl md:text-6xl tracking-tighter leading-tight mb-8 text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
          JUTEUX ET FROMAGER
          <br/>
          BIEN GARNI
        </h2>
<p className="max-w-xl mx-auto text-zinc-500 mb-10 text-sm font-medium tracking-tight leading-relaxed">
          CRAV est de retour et plus audacieux que jamais. L'ultime expérience
          du burger écrasé, généreux, chaud et préparé à la commande.
        </p>
<a className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full font-medium text-xs uppercase tracking-tight transition-colors shadow-sm bg-[#f91814] hover:bg-red-700" href="/menu">
          Commander
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-5xl">
<div className="rounded-3xl overflow-hidden h-72 md:h-96 w-full shadow-sm border border-zinc-100 group">
<img alt="Chef preparing" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.cravburgers.shop/img-webp/about-1.webp"/>
</div>
<div className="rounded-3xl overflow-hidden h-72 md:h-96 w-full shadow-sm border border-zinc-100 md:-mt-8 group relative z-10">
<img alt="Melted cheese" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.cravburgers.shop/img-webp/about-2.webp"/>
</div>
<div className="rounded-3xl overflow-hidden h-72 md:h-96 w-full shadow-sm border border-zinc-100 group">
<img alt="Restaurant atmosphere" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.cravburgers.shop/img-webp/about-3.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden bg-[#f91814]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-xl md:text-2xl tracking-tight mb-4 uppercase text-white" style={{fontFamily: '\'Mouse Memoirs\', sans-serif'}}>
            L'Expérience
          </p>
<h2 className="text-4xl md:text-5xl tracking-tighter leading-tight text-white" style={{fontFamily: '\'Modak\', system-ui'}}>
            UNE NOURRITURE QUI FAIT DU BIEN
          </h2>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12 relative bg-transparent p-0">
<div className="flex flex-col gap-6 text-xs uppercase tracking-tight font-medium md:w-1/4 text-white">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>450 kcal</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="solar:dumbbell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Riche en Protéines</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Ingrédients Frais</span>
</div>
</div>
<div className="md:w-2/4 relative flex justify-center z-10">
<img alt="Burger with hands" className="w-full max-w-[280px] md:max-w-[400px] drop-shadow-xl" src="https://www.cravburgers.shop/img-webp/burgerwithhands.webp"/>
</div>
<div className="flex flex-col gap-6 text-xs uppercase tracking-tight font-medium md:w-1/4 md:items-end text-white">
<div className="flex items-center gap-3 flex-row-reverse md:flex-row">
<span>100% Bio</span>
<iconify-icon className="text-lg text-white" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center gap-3 flex-row-reverse md:flex-row">
<span>Zéro Culpabilité</span>
<iconify-icon className="text-lg text-white" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center gap-3 flex-row-reverse md:flex-row">
<span>Goût Authentique</span>
<iconify-icon className="text-lg text-white" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F4EBE1]" id="ingredients">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
            QUALITÉ PURE
          </h2>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#f91814]">
            Chaque couche remplie de notre saveur signature
          </h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
<div className="rounded-3xl p-8 flex flex-col items-center text-center transition-colors bg-transparent">
<img alt="Fresh Tomato" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md mb-6 hover:scale-110 transition-transform duration-500" src="https://www.cravburgers.shop/img-webp/tomato.webp"/>
<h4 className="tracking-tight text-[#f91814] font-bold text-lg">
              Tomate Fraîche
            </h4>
</div>
<div className="rounded-3xl p-8 flex flex-col items-center text-center transition-colors md:translate-y-4 bg-transparent">
<img alt="Premium Cheese" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md mb-6 hover:scale-110 transition-transform duration-500" src="https://www.cravburgers.shop/img-webp/cheese.webp"/>
<h4 className="tracking-tight text-[#f91814] font-bold text-lg">
              Cheddar Premium
            </h4>
</div>
<div className="rounded-3xl p-8 flex flex-col items-center text-center transition-colors bg-transparent">
<img alt="Smashed Beef" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md mb-6 hover:scale-110 transition-transform duration-500" src="https://www.cravburgers.shop/img-webp/meat.webp"/>
<h4 className="tracking-tight text-[#f91814] font-bold text-lg">
              Bœuf Écrasé Artisanal
            </h4>
</div>
<div className="rounded-3xl p-8 flex flex-col items-center text-center transition-colors md:translate-y-4 bg-transparent">
<img alt="Crispy Lettuce" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md mb-6 hover:scale-110 transition-transform duration-500" src="https://www.cravburgers.shop/img-webp/lettuce.webp"/>
<h4 className="tracking-tight text-[#f91814] font-bold text-lg">
              Laitue du Jardin
            </h4>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F9CD25]" id="locations">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 md:gap-8 items-start">
<div className="md:w-1/3 sticky top-32">
<p className="text-2xl uppercase tracking-tight mb-4 text-white" style={{fontFamily: '\'Mouse Memoirs\', sans-serif'}}>
            À Emporter
          </p>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 leading-tight text-white" style={{fontFamily: '\'Modak\', system-ui'}}>
            LA QUALITÉ QUI VOYAGE AVEC VOUS
          </h2>
<p className="text-sm font-medium leading-relaxed max-w-sm text-white font-semibold">
            Des smash burgers fraîchement emballés, prêts à vous suivre partout.
            De notre plaque chauffante à n'importe quel coin du globe.
          </p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 bg-transparent">
<img alt="Berlin" className="rounded-3xl w-full aspect-[4/5] object-cover mb-4 shadow-sm" src="https://www.cravburgers.shop/img-webp/berlin.webp"/>
<p className="text-center text-xl tracking-tight pb-2 text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
              BERLIN
            </p>
</div>
<div className="rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 md:mt-8 bg-transparent">
<img alt="London" className="rounded-3xl w-full aspect-[4/5] object-cover mb-4 shadow-sm" src="https://www.cravburgers.shop/img-webp/london.webp"/>
<p className="text-center text-xl tracking-tight pb-2 text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
              LONDRES
            </p>
</div>
<div className="rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 bg-transparent">
<img alt="New York" className="rounded-3xl w-full aspect-[4/5] object-cover mb-4 shadow-sm" src="https://www.cravburgers.shop/img-webp/newyork.webp"/>
<p className="text-center text-xl tracking-tight pb-2 text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
              NEW YORK
            </p>
</div>
<div className="rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 md:-mt-8 bg-transparent">
<img alt="Sydney" className="rounded-3xl w-full aspect-[4/5] object-cover mb-4 shadow-sm" src="https://www.cravburgers.shop/img-webp/sydney.webp"/>
<p className="text-center text-xl tracking-tight pb-2 text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
              SYDNEY
            </p>
</div>
<div className="rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 bg-transparent">
<img alt="Tokyo" className="rounded-3xl w-full aspect-[4/5] object-cover mb-4 shadow-sm" src="https://www.cravburgers.shop/img-webp/tokyo.webp"/>
<p className="text-center text-xl tracking-tight pb-2 text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
              TOKYO
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden bg-[#F4EBE1]">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
<p className="text-xl md:text-2xl tracking-tight mb-4 uppercase text-[#f91814]" style={{fontFamily: '\'Mouse Memoirs\', sans-serif'}}>
            Ressentez-le
          </p>
<h2 className="text-5xl md:text-7xl tracking-tighter text-[#f91814] leading-none mb-8" style={{fontFamily: '\'Modak\', system-ui'}}>
            SENTEZ LA
            <br/>
            DIFFÉRENCE
          </h2>
<p className="text-sm text-zinc-500 mb-10 font-medium leading-relaxed max-w-sm">
            Écrasé pour les audacieux, conçu pour les affamés. Plongez dans une
            expérience légendaire où chaque bord croustillant et chaque couche
            juteuse règnent en maître.
          </p>
<a className="inline-flex items-center gap-2 bg-[#f91814] text-white px-8 py-3.5 rounded-full font-medium text-xs uppercase tracking-tight hover:bg-red-700 transition-colors shadow-md shadow-red-500/20" href="/menu">
            Commander
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="md:w-1/2 w-full relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-transparent rounded-[2rem] -z-10 translate-x-4 translate-y-4"></div>
<img alt="Premium smashed burger" className="rounded-[2rem] shadow-xl object-cover aspect-[4/5] w-full border border-zinc-100" src="https://www.cravburgers.shop/img-webp/cta.webp"/>
</div>
</div>
</section>

<footer className="pt-20 pb-12 mt-auto text-white border-t bg-[#2c1608] border-[#40220d]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="uppercase text-5xl text-[#f91814] block mb-6 drop-shadow-sm" href="/" style={{fontFamily: '\'Modak\', system-ui'}}>
              CRAV
            </a>
<p className="text-sm text-zinc-400 font-medium leading-relaxed tracking-tight mb-6">
              L'ultime expérience du burger écrasé, généreux, chaud et préparé à
              la commande depuis 1997.
            </p>
<div className="flex items-center gap-4 text-zinc-400">
<a aria-label="Instagram" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:instagram"></iconify-icon>
</a>
<a aria-label="Facebook" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:facebook"></iconify-icon>
</a>
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:twitter"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1 md:pl-8">
<h4 className="text-white font-bold tracking-tight mb-6 uppercase text-sm">
              Navigation
            </h4>
<div className="flex flex-col gap-4">
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="/">
                Accueil
              </a>
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="#about">
                À Propos
              </a>
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="#ingredients">
                Ingrédients
              </a>
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="#locations">
                Adresses
              </a>
</div>
</div>

<div className="col-span-1">
<h4 className="text-white font-bold tracking-tight mb-6 uppercase text-sm">
              Informations
            </h4>
<div className="flex flex-col gap-4">
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="/menu">
                Notre Carte
              </a>
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="/faq">
                FAQ
              </a>
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="/contact">
                Contact
              </a>
<a className="text-sm text-zinc-400 hover:text-[#f91814] transition-colors tracking-tight font-medium" href="/jobs">
                Recrutement
              </a>
</div>
</div>

<div className="col-span-1">
<h4 className="text-white font-bold tracking-tight mb-6 uppercase text-sm">
              La lettre CRAV
            </h4>
<p className="text-sm text-zinc-400 font-medium leading-relaxed tracking-tight mb-4">
              Rejoignez le club pour des offres exclusives et les nouveautés.
            </p>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault();">
<input className="w-full border rounded-full px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#f91814] transition-colors bg-[#40220d] border-[#583115]" placeholder="Votre email" required="" type="email"/>
<button className="w-full bg-[#f91814] text-white px-5 py-3 rounded-full font-semibold text-xs uppercase tracking-tight hover:bg-red-700 transition-colors shadow-sm" type="submit">
                S'inscrire
              </button>
</form>
</div>
</div>

<div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 border-[#40220d]">
<p className="text-xs font-medium tracking-tight text-zinc-500">
            © 2026 CRAV — Tous droits réservés.
          </p>
<div className="flex gap-4">
<a className="text-xs font-medium tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors" href="/privacy">
              Confidentialité
            </a>
<a className="text-xs font-medium tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors" href="/terms">
              CGV
            </a>
</div>
</div>

<div className="mt-16 flex justify-center overflow-hidden">
<h2 className="text-[25vw] md:text-[15vw] leading-none tracking-tighter select-none text-[#f91814]" style={{fontFamily: '\'Modak\', system-ui'}}>
            CRAV
          </h2>
</div>
</div>
</footer>

    </>
  );
}
