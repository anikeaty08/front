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



tailwind.config = {
theme: {
extend: {
colors: {
gold: {
DEFAULT: '#C5A059',
light: '#DCC287',
dark: '#A68545'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
marquee: 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
<div className="md:px-8 flex h-24 max-w-screen-2xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">

<button className="md:hidden p-2 text-black hover:text-gold transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-normal text-gray-500">
<a className="hover:text-black transition-colors duration-300" href="#kollektion">
            Kollektion
          </a>
<a className="hover:text-black transition-colors duration-300" href="#atelier">
            ÜBER MICH
          </a>
</div>

<a className="flex items-center justify-center group" href="#">
<svg className="group-hover:text-gold transition-colors duration-500 w-[60px] h-[60px]" fill="none" height="60" strokeWidth="2" style={{color: 'rgb(197, 160, 89)'}} viewbox="0 0 100 100" width="60" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M50 5 L93.3 30 V75 L50 95 L6.7 75 V30 L50 5Z" fill="none" stroke="currentColor" strokeWidth="3"></path>
<text className="" fill="currentColor" fontFamily="Playfair Display" fontSize="40" text-anchor="middle" x="50" y="65">
              VA
            </text>
<path d="M40 70 Q 45 50 60 35" fill="none" opacity="0.8" stroke="currentColor" strokeWidth="2"></path>
<path d="M42 65 L45 62 M45 60 L48 57 M48 55 L51 52" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</a>

<div className="flex items-center gap-8">
<button className="relative p-1 text-black hover:text-gold transition-colors group">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              0
            </span>
</button>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
<div className="grid grid-cols-1 md:grid-cols-2 w-full h-full max-w-screen-2xl gap-x-8 gap-y-8 items-center">

<div className="order-2 md:order-1 flex flex-col justify-center items-start md:pl-8 lg:pl-16 space-y-8">
<div className="w-16 h-[2px] bg-gold"></div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] serif text-5xl font-normal text-black tracking-tight">
            Westend Juwelier
            <br/>
<span className="text-gold italic">Haider</span>
</h1>
<p className="md:text-lg leading-relaxed text-base text-gray-600 max-w-md">
            Ihr Juwelier in Berlin für professionellen Ankauf von Luxuswaren.
            <br/>
<br/>
            Seit über 40 Jahren stehen wir unseren Kunden besten Gewissens zur
            Seite.
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
<a className="group relative px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-normal text-center overflow-hidden" href="#kollektion">
<span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Kollektion ansehen
              </span>
<div className="absolute inset-0 h-full w-full bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</a>
<a className="group uppercase hover:bg-black hover:text-white transition-colors duration-300 text-xs font-normal text-black tracking-widest text-center border-black border pt-4 pr-8 pb-4 pl-8" href="#atelier">
              ÜBER MICH
            </a>
</div>
</div>

<div className="order-1 md:order-2 relative h-[60vh] md:h-[80vh] bg-gray-100 overflow-hidden">
<img alt="Gold Schmuck Detail" className="object-center hover:grayscale-0 transition-all duration-1000 bg-yellow-300 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white mix-blend-difference">
<span className="uppercase text-xs tracking-widest">Est. 2023</span>
<span className="uppercase text-xs tracking-widest">
              Krottendorf, AT
            </span>
</div>
</div>
</div>
</header>

<section className="py-12 border-t border-b border-gray-100 bg-white overflow-hidden flex select-none">

<div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-black/5 mx-8">
          Handmade
        </span>
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-gold/20 serif italic mx-8">
          Vidalli
        </span>
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-black/5 mx-8">
          Timeless
        </span>
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-gold/20 serif italic mx-8">
          Unique
        </span>
</div>

<div aria-hidden="true" className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center">
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-black/5 mx-8">
          Handmade
        </span>
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-gold/20 serif italic mx-8">
          Vidalli
        </span>
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-black/5 mx-8">
          Timeless
        </span>
<span className="text-6xl md:text-8xl font-normal tracking-tighter uppercase text-gold/20 serif italic mx-8">
          Unique
        </span>
</div>
</section>

<section className="md:px-8 max-w-screen-2xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="kollektion">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8">
<div className="max-w-lg">
<span className="text-gold font-normal text-xs tracking-widest uppercase mb-3 block">
            Aktuelle Kollektion
          </span>
<h2 className="text-4xl tracking-tight text-black serif font-normal">
            Signature Pieces
          </h2>
</div>
<a className="mt-4 md:mt-0 group flex items-center gap-3 text-xs uppercase tracking-widest font-normal hover:text-gold transition-colors" href="#">
          Alle Produkte
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/5 transition-colors z-10 duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Gold Ring" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg"/>
<span className="text-[10px] uppercase z-20 font-normal text-black tracking-wider bg-white pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4">
              Neu
            </span>
</div>
<div className="flex justify-between items-baseline">
<div className="">
<h3 className="text-xl text-black serif font-normal">Aura Ring</h3>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1 group-hover:text-gold transition-colors">
                18k Gold
              </p>
</div>
<span className="text-sm font-normal">€240</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/5 transition-colors z-10 duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Pearl Necklace" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fabedb0d-467e-45ed-930f-2a561895a076_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div className="">
<h3 className="text-xl text-black serif font-normal">
                Luna Halskette
              </h3>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1 group-hover:text-gold transition-colors">
                Süßwasserperle
              </p>
</div>
<span className="text-sm font-normal">€180</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/5 transition-colors z-10 duration-300 bg-black/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de3055f3-7ce2-4f8e-810a-1d061b7f3537_1600w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Earrings" className="w-full h-full object-cover image-hover-zoom" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline">
<div>
<h3 className="text-xl text-black serif font-normal">
                Nova Ohrringe
              </h3>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1 group-hover:text-gold transition-colors">
                Silber 925
              </p>
</div>
<span className="text-sm font-normal">€120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/5 transition-colors z-10 duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Bracelet" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7ff11b2-928c-4005-bf7d-47d33d2b58d0_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div>
<h3 className="text-xl text-black serif font-normal">
                Helix Armreif
              </h3>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1 group-hover:text-gold transition-colors">
                Gold Vermeil
              </p>
</div>
<span className="text-sm font-normal">€160</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/5 transition-colors z-10 duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Signet Ring" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a50b35f0-09bf-4a77-8d53-270981b17e22_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div className="">
<h3 className="text-xl text-black serif font-normal">Signum Ring</h3>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1 group-hover:text-gold transition-colors">
                Massivgold
              </p>
</div>
<span className="text-sm font-normal">€210</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/5 transition-colors z-10 duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Set Collection" className="image-hover-zoom w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7998a59f-416e-4cb4-8999-bdf11936bc71_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] uppercase tracking-wider font-normal z-20">
              Set
            </span>
</div>
<div className="flex justify-between items-baseline">
<div>
<h3 className="text-xl text-black serif font-normal">Abend-Set</h3>
<p className="text-xs text-gray-500 uppercase tracking-wide mt-1 group-hover:text-gold transition-colors">
                Complete Collection
              </p>
</div>
<span className="text-sm font-normal">€380</span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-black pt-32 pb-32 relative" id="atelier">
<div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/50 hidden md:block"></div>
<img alt="Werkstatt" className="aspect-square hover:opacity-100 transition-opacity duration-700 opacity-80 w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da81b8a5-ec37-4de5-86fb-e9896c5bb37b_1600w.jpg"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/50 hidden md:block"></div>
</div>
<div className="space-y-8">
<h2 className="md:text-5xl lg:text-6xl serif leading-tight text-4xl font-normal tracking-tight">
              Vidalli Andrea
              <br/>
<span className="text-gold italic">Handwerk &amp; Seele</span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400">
              Abseits der Massenproduktion entsteht hier Schmuck mit Charakter.
              Jedes Stück geht durch meine Hände – vom Entwurf bis zur Politur.
              Ich nutze ausschließlich recyceltes Gold und konfliktfreie Steine,
              weil wahrer Luxus Verantwortung bedeutet.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
<div className="border-l border-gold pl-4">
<h4 className="text-gold serif text-xl mb-1 font-normal">100%</h4>
<p className="text-sm text-gray-400">Recycelte Edelmetalle</p>
</div>
<div className="border-l border-gold pl-4">
<h4 className="text-gold serif text-xl mb-1 font-normal">
                  Krottendorf, Steiermark
                </h4>
<p className="text-sm text-gray-400">Lokale Produktion</p>
</div>
</div>
<div className="pt-8">
<a className="inline-flex items-center gap-3 text-white border-b border-gold pb-1 hover:text-gold transition-colors text-sm uppercase tracking-widest font-normal" href="#">
                Mehr über den Prozess
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-b pt-20 pb-20">
<div className="max-w-screen-xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="p-8 text-center group">
<div className="mb-4 text-gray-400 group-hover:text-gold transition-colors duration-300 flex justify-center">
<iconify-icon icon="lucide:gem" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-black mb-2">
              Lebenslange Garantie
            </h3>
<p className="text-sm text-gray-500 max-w-xs mx-auto">
              Auf alle Material- und Verarbeitungsfehler.
            </p>
</div>
<div className="p-8 text-center group">
<div className="mb-4 text-gray-400 group-hover:text-gold transition-colors duration-300 flex justify-center">
<iconify-icon icon="lucide:refresh-cw" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-black mb-2">
              Kostenlose Aufarbeitung
            </h3>
<p className="text-sm text-gray-500 max-w-xs mx-auto">
              Einmal jährlich polieren wir Ihr Schmuckstück.
            </p>
</div>
<div className="p-8 text-center group">
<div className="mb-4 text-gray-400 group-hover:text-gold transition-colors duration-300 flex justify-center">
<iconify-icon icon="lucide:gift" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-black mb-2">
              Premium Verpackung
            </h3>
<p className="text-sm text-gray-500 max-w-xs mx-auto">
              Nachhaltig und elegant verpackt als Geschenk.
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-10">
<div className="md:px-8 max-w-screen-2xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20">

<div className="md:w-1/3">
<div className="flex items-center gap-2 mb-6">
<svg className="text-white" fill="none" height="30" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 100 100" width="30" xmlns="http://www.w3.org/2000/svg">
<path d="M50 5 L93.3 30 V75 L50 95 L6.7 75 V30 L50 5Z" fill="none" stroke="currentColor" strokeWidth="5"></path>
<text fill="currentColor" fontFamily="Playfair Display" fontSize="50" font-weight="bold" text-anchor="middle" x="50" y="70">
                  VA
                </text>
</svg>
<span className="serif text-2xl font-normal tracking-tight">
                Vidalli Andrea
              </span>
</div>
<p className="leading-relaxed text-sm text-gray-400 max-w-xs mb-8">
              Wir kreieren Schmuck für Individualisten. Zeitloses Design trifft
              auf steirische Handwerkskunst.
            </p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="">
<h5 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
                Shop
              </h5>
<ul className="space-y-4 text-sm text-gray-400">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Neuheiten
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Bestseller
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Geschenke
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Gutscheine
                  </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
                Service
              </h5>
<ul className="space-y-4 text-sm text-gray-400">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Kontakt
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Versand &amp; Retouren
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Ringgröße finden
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h5 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
                Newsletter
              </h5>
<p className="text-xs text-gray-500 mb-4">
                Erhalten Sie 10% Rabatt auf Ihre erste Bestellung.
              </p>
<form className="flex border-b border-gray-700 pb-2">
<input className="bg-transparent w-full text-sm text-white placeholder-gray-600 focus:outline-none" placeholder="E-Mail Adresse" type="email"/>
<button className="text-xs uppercase tracking-widest hover:text-gold transition-colors" type="button">
                  Senden
                </button>
</form>
</div>
</div>
</div>
<div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p className="">© 2023 Vidalli Andrea. Krottendorf.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400 transition-colors" href="#">
              Impressum
            </a>
<a className="hover:text-gray-400 transition-colors" href="#">
              Datenschutz
            </a>
<a className="hover:text-gray-400 transition-colors" href="#">AGB</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
