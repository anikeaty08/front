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
      

<header className="fixed top-3 inset-x-0 z-50 px-3 sm:px-6 flex justify-center">
<nav className="w-full max-w-7xl bg-black/80 backdrop-blur border border-white/10 rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
<a className="flex items-center gap-2" href="#">
<span className="w-7 h-7 rounded-md ember flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:fire-linear" width="16"></iconify-icon>
</span>
<span className="font-display text-2xl tracking-tight text-white">
            BULL'S
            <span className="text-red-500">.</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-white/70">
<a className="hover:text-white transition" href="#burgers">Burgers</a>
<a className="hover:text-white transition" href="#hotdogs">Bull Dogs</a>
<a className="hover:text-white transition" href="#menu">Menu</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</div>
<a className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 transition text-white text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-lg" href="#menu">
          Commander
          <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</nav>
</header>

<section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
<div className="absolute inset-0 grain opacity-60"></div>
<div className="absolute inset-x-0 bottom-0 h-2/3 flame-grad pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6">

<div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/50 mb-10 rise">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 flicker"></span>
            Mantes-la-Jolie · 78
          </span>
<span className="hidden sm:block">Est. — Smash &amp; Flame</span>
<span className="hidden md:flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
            11:30 — 23:00
          </span>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-end">

<div className="lg:col-span-12 rise text-center flex flex-col items-center">
<p className="font-serif-it text-red-400 text-xl sm:text-2xl mb-3">
              Steak grillé à la flamme —
            </p>
<h1 className="font-display text-white leading-[0.82] tracking-tight" style={{fontSize: 'clamp(96px, 18vw, 280px)'}}>
              BULL'S
              <br/>
<span className="text-red-600">BURGER</span>
</h1>
<p className="mt-6 max-w-xl text-sm sm:text-base text-white/65">
              Le smash patty fait à la maison, le feu maîtrisé, le pain brioché
              toasté. Burgers, hot dogs et grilled cheese — au cœur de
              Mantes-la-Jolie.
            </p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 transition text-white text-sm uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-red-900/40" href="#menu">
<iconify-icon icon="solar:fire-bold" width="18"></iconify-icon>
                Voir le menu
              </a>
<a className="inline-flex items-center gap-2 border border-white/15 hover:bg-white/5 transition text-white text-sm uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl" href="#contact">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                Nous trouver
              </a>
</div>

<div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
<div>
<p className="font-display text-3xl text-white">
                  80
                  <span className="text-red-500">g</span>
</p>
<p className="text-xs uppercase tracking-widest text-white/50 mt-1">
                  Steak smash
                </p>
</div>
<div>
<p className="font-display text-3xl text-white">
                  100
                  <span className="text-red-500">%</span>
</p>
<p className="text-xs uppercase tracking-widest text-white/50 mt-1">
                  Viande fraîche
                </p>
</div>
<div>
<p className="font-display text-3xl text-white">
                  3
                  <span className="text-red-500">×</span>
</p>
<p className="text-xs uppercase tracking-widest text-white/50 mt-1">
                  Tailles L · XL · XXL
                </p>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="border-y border-white/10 bg-black overflow-hidden py-6">
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex items-center gap-10 px-5 font-display text-4xl sm:text-5xl text-white/90">
<span>SMASH BURGER</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span>HOT DOGS</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span>GRILLED CHEESE</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span className="">MANTES-LA-JOLIE</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span>FLAMME</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
</div>
<div className="flex items-center gap-10 px-5 font-display text-4xl sm:text-5xl text-white/90">
<span>SMASH BURGER</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span>HOT DOGS</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span>GRILLED CHEESE</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span>MANTES-LA-JOLIE</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
<span>FLAMME</span>
<iconify-icon className="text-red-600" icon="solar:fire-bold" width="28"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 relative" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
<div>
<p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-3">
              — Formules
            </p>
<h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight leading-none">
              CHOISIS
              <br/>
              TA TAILLE
            </h2>
</div>
<p className="text-sm text-white/60 max-w-sm">
            Trois tailles de steaks smashés à 80g, accompagnés d'une sauce et
            frites maison.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-7 hover:border-red-600/60 transition">
<div className="flex items-baseline justify-between">
<span className="font-display text-6xl text-white">L</span>
<span className="text-xs uppercase tracking-widest text-white/40">
                2 steaks
              </span>
</div>
<div className="mt-6 h-px bg-white/10"></div>
<p className="mt-6 text-sm text-white/65">
              Le format classique. Deux smash patties juteux, fondant garanti.
            </p>
<div className="mt-8 flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:hamburger-linear" width="16"></iconify-icon>
              Inclus
            </div>
</div>

<div className="group relative bg-red-600 rounded-2xl p-7 overflow-hidden">
<div className="absolute -right-6 -top-6 text-[10px] uppercase tracking-[0.3em] bg-black text-white px-4 py-1 rotate-12">
              Populaire
            </div>
<div className="flex items-baseline justify-between">
<span className="font-display text-6xl text-white">XL</span>
<span className="text-xs uppercase tracking-widest text-white/80">
                3 steaks
              </span>
</div>
<div className="mt-6 h-px bg-white/20"></div>
<p className="mt-6 text-sm text-white/90">
              Triple steak + cheese fondu. Pour les grosses faims.
            </p>
<div className="mt-8 flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-white/80 flex items-center gap-2">
<iconify-icon icon="solar:cheese-linear" width="16"></iconify-icon>
                Cheese inclus
              </span>
<span className="font-display text-2xl text-white">+2€</span>
</div>
</div>

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-7 hover:border-red-600/60 transition">
<div className="flex items-baseline justify-between">
<span className="font-display text-6xl text-white">XXL</span>
<span className="text-xs uppercase tracking-widest text-white/40">
                4 steaks
              </span>
</div>
<div className="mt-6 h-px bg-white/10"></div>
<p className="mt-6 text-sm text-white/65">
              Quadruple steak + cheese. Le défi du taureau.
            </p>
<div className="mt-8 flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-2">
<iconify-icon icon="solar:cheese-linear" width="16"></iconify-icon>
                Cheese inclus
              </span>
<span className="font-display text-2xl text-white">+3€</span>
</div>
</div>
</div>

<div className="mt-8 grid sm:grid-cols-3 gap-3">
<div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-widest text-white/50">
                Menu étudiant
              </p>
<p className="font-display text-3xl text-white mt-1">7,50€</p>
</div>
<iconify-icon className="text-red-500" icon="solar:user-linear" width="22"></iconify-icon>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-widest text-white/50">
                Menu classique
              </p>
<p className="font-display text-3xl text-white mt-1">8,50€</p>
</div>
<iconify-icon className="text-red-500" icon="solar:bag-4-linear" width="22"></iconify-icon>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-widest text-white/50">
                Burger seul
              </p>
<p className="font-display text-3xl text-white mt-1">6,00€</p>
</div>
<iconify-icon className="text-red-500" icon="solar:hamburger-linear" width="22"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="sm:px-6 border-y bg-neutral-950 border-white/10 pt-24 pr-4 pb-24 pl-4" id="burgers">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12 gap-6">
<div>
<p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-3">
              — La carte
            </p>
<h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight leading-none">
              BURGERS
              <br/>
              VIANDE FRAÎCHE
            </h2>
</div>
<span className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
<iconify-icon icon="solar:fire-linear" width="14"></iconify-icon>
            06 signatures
          </span>
</div>
<div className="mb-10">
<img alt="Burgers viande fraîche" className="aspect-[21/9] w-full object-cover border-white/10 border rounded-2xl" src="https://images.unsplash.com/photo-1554306297-0c86e837d24b?w=2560&amp;q=80"/>
</div>
<div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition">
<div className="flex items-baseline justify-between gap-4">
<h3 className="font-display text-3xl text-white">LE BULL'S</h3>
<span className="font-serif-it text-red-400 text-sm">
                simple, juteux, intemporel
              </span>
</div>
<ul className="mt-5 space-y-1.5 text-sm text-white/65">
<li>· Steak smash bœuf 80/20</li>
<li className="">· Cheddar fondant · Cornichons · Oignons</li>
<li>· Sauce burger (ketchup + US moutarde)</li>
<li className="">· Pain brioché toasté</li>
</ul>
</div>

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition">
<div className="flex items-baseline justify-between gap-4">
<h3 className="font-display text-3xl text-white">LE MOUNTAIN</h3>
<span className="font-serif-it text-red-400 text-sm">
                ultra réconfort
              </span>
</div>
<ul className="mt-5 space-y-1.5 text-sm text-white/65">
<li>· Double steak smash</li>
<li>· Rosties · Raclette · Oignons caramélisés</li>
<li>· Sauce mayo-moutarde à l'ancienne</li>
<li>· Pain brioché ou potato bun</li>
</ul>
</div>

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition">
<div className="flex items-baseline justify-between gap-4">
<h3 className="font-display text-3xl text-white">LE SMOKY B</h3>
<span className="font-serif-it text-red-400 text-sm">
                fumé &amp; généreux
              </span>
</div>
<ul className="mt-5 space-y-1.5 text-sm text-white/65">
<li>· Steak smash · Cheddar ou Monterey Jack</li>
<li>· Bacon croustillant · Oignons frits</li>
<li>· Sauce BBQ + mayo</li>
<li>· Pain brioché toasté</li>
</ul>
</div>

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition">
<div className="flex items-baseline justify-between gap-4">
<h3 className="font-display text-3xl text-white">LE FRENCH TOUCH</h3>
<span className="font-serif-it text-red-400 text-sm">gourmet</span>
</div>
<ul className="mt-5 space-y-1.5 text-sm text-white/65">
<li>· Steak smash · Crème de truffe</li>
<li>· Oignons rouges confits · Roquette</li>
<li>· Pain artisanal légèrement beurré</li>
</ul>
</div>

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition">
<div className="flex items-baseline justify-between gap-4">
<h3 className="font-display text-3xl text-white">LE HONEY G.O.A.T</h3>
<span className="font-serif-it text-red-400 text-sm">
                sucré / salé
              </span>
</div>
<ul className="mt-5 space-y-1.5 text-sm text-white/65">
<li>· Steak smash · Chèvre · Miel</li>
<li>· Oignons rouges confits · Roquette</li>
<li>· Pain artisanal légèrement beurré</li>
</ul>
</div>

<div className="bg-red-600 p-8 hover:bg-red-500 transition">
<div className="flex items-baseline justify-between gap-4">
<h3 className="font-display text-3xl text-white flex items-center gap-2">
                LE CHIK
                <iconify-icon icon="solar:fire-bold" width="22"></iconify-icon>
</h3>
<span className="font-serif-it text-white/90 text-sm">
                flamme · gourmet
              </span>
</div>
<ul className="mt-5 space-y-1.5 text-sm text-white/90">
<li>· Escalope braisée · Sauce BBQ</li>
<li>· Oignons rouges confits</li>
<li>· Salade · Tomate</li>
<li>· Pain artisanal légèrement beurré</li>
</ul>
</div>
</div>
</div>
</section>

<section className="sm:px-6 pt-24 pr-4 pb-24 pl-4" id="hotdogs">
<div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-3">
            — Bull dogs
          </p>
<h2 className="font-display text-5xl sm:text-6xl text-white tracking-tight leading-none mb-10">
            HOT DOGS
            <br/>
            SIGNATURE
          </h2>
<div className="mb-6 grid grid-cols-3 gap-3">
<img alt="Hot dog classique" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-xl" src="https://images.unsplash.com/photo-1613482084286-41f25b486fa2?w=800&amp;q=80"/>
<img alt="Hot dog smoky" className="w-full aspect-[4/3] object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500&amp;q=80"/>
<img alt="Hot dog french" className="w-full aspect-[4/3] object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=500&amp;q=80"/>
</div>
<div className="space-y-3">
<div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 rounded-xl border border-white/10 hover:border-red-600/60 hover:bg-neutral-950 transition">
<div>
<h3 className="font-display text-2xl text-white">
                  HOT-DOG CLASSIQUE US
                </h3>
<p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                  Intemporel
                </p>
<p className="text-sm text-white/60 mt-3">
                  Saucisse de bœuf · Pain brioché · Moutarde jaune · Ketchup ·
                  Oignons frais
                </p>
</div>
<iconify-icon className="text-white/30 group-hover:text-red-500 transition shrink-0" icon="solar:arrow-right-up-linear" width="22"></iconify-icon>
</div>
<div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 rounded-xl border border-white/10 hover:border-red-600/60 hover:bg-neutral-950 transition">
<div>
<h3 className="font-display text-2xl text-white">
                  HOT-DOG SMOKY B
                </h3>
<p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                  Fumé &amp; généreux
                </p>
<p className="text-sm text-white/60 mt-3">
                  Saucisse grillée · Bacon · Cheddar · Oignons frits · Sauce BBQ
                  · Pain brioché
                </p>
</div>
<iconify-icon className="text-white/30 group-hover:text-red-500 transition shrink-0" icon="solar:arrow-right-up-linear" width="22"></iconify-icon>
</div>
<div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 rounded-xl border border-white/10 hover:border-red-600/60 hover:bg-neutral-950 transition">
<div className="">
<h3 className="font-display text-2xl text-white">
                  HOT-DOG FRENCH TOUCH
                </h3>
<p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                  Gourmet
                </p>
<p className="text-sm text-white/60 mt-3">
                  Saucisse artisanale · Comté ou raclette · Oignons rouges
                  confits · Cornichons · Sauce moutarde à l'ancienne
                </p>
</div>
<iconify-icon className="text-white/30 group-hover:text-red-500 transition shrink-0" icon="solar:arrow-right-up-linear" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="bg-red-600 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 grain opacity-30"></div>
<div className="relative">
<iconify-icon className="text-white/90" icon="solar:bread-linear" width="48"></iconify-icon>
<p className="text-xs uppercase tracking-[0.3em] text-white/80 mt-6">
              — Spécialité
            </p>
<h3 className="font-display text-5xl text-white mt-2 leading-none">
              GRILLED
              <br/>
              CHEESE
            </h3>
<p className="mt-6 text-sm text-white/90">
              Pain grillé · Cheddar · Emmental · Oignons caramélisés.
              <br/>
              Avec Steak ou Chicken au choix.
            </p>
</div>
<div className="relative mt-10 flex items-center justify-between">
<span className="font-serif-it text-white/90 text-lg">
              le confort, version Bull's
            </span>
<iconify-icon className="text-white flicker" icon="solar:fire-bold" width="32"></iconify-icon>
</div>
</div>
</div>
</section>


<section className="py-24 px-4 sm:px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 flame-grad opacity-50"></div>
<div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-3">
            — Visit
          </p>
<h2 className="font-display text-6xl sm:text-8xl text-white tracking-tight leading-[0.85]">
            VIENS
            <br/>
            GOÛTER
            <br/>
<span className="text-red-600">LA FLAMME</span>
</h2>
<p className="mt-6 max-w-md text-sm text-white/65">
            Bull's Burger t'attend à Mantes-la-Jolie. Smash, flame, hot dogs et
            grilled cheese — fait sur place avec la viande fraîche du jour.
          </p>
<div className="mt-10 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 transition text-white text-sm uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl" href="#">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
              Appeler
            </a>
<a className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 transition text-white text-sm uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
              @bullsburger
            </a>
</div>
</div>
<div className="bg-black/60 backdrop-blur border border-white/10 rounded-2xl p-8 sm:p-10">
<img alt="Bull's Burger signature" className="w-full aspect-[16/9] object-cover rounded-xl border border-white/10 mb-8" src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&amp;q=80"/>
<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
                Adresse
              </p>
<p className="text-white text-sm leading-relaxed">
                Mantes-la-Jolie
                <br/>
                78200, France
              </p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
                Horaires
              </p>
<p className="text-white text-sm leading-relaxed">
                Lun — Dim
                <br/>
                11:30 — 23:00
              </p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
                Téléphone
              </p>
<p className="text-white text-sm">01 00 00 00 00</p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
                Livraison
              </p>
<p className="text-white text-sm">Uber · Deliveroo</p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
<span className="font-serif-it text-white/60 text-lg">
              Smash · Flame · Repeat
            </span>
<iconify-icon className="text-red-600 flicker" icon="solar:fire-bold" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 px-4 sm:px-6 py-10">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-md ember flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:fire-linear" width="18"></iconify-icon>
</span>
<span className="font-display text-3xl tracking-tight text-white">
            BULL'S
            <span className="text-red-500">.</span>
</span>
</div>
<p className="text-xs uppercase tracking-widest text-white/40">
          © 2024 Bull's Burger · Mantes-la-Jolie
        </p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-lg border border-white/10 hover:border-red-500 hover:text-red-500 text-white/70 transition flex items-center justify-center" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg border border-white/10 hover:border-red-500 hover:text-red-500 text-white/70 transition flex items-center justify-center" href="#">
<iconify-icon icon="solar:tiktok-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg border border-white/10 hover:border-red-500 hover:text-red-500 text-white/70 transition flex items-center justify-center" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
