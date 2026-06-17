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



        // Subtle navbar background change on scroll for modern luxury feel
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('py-4', 'bg-[#030303]/95');
                nav.classList.remove('py-6', 'bg-[#030303]/80');
            } else {
                nav.classList.add('py-6', 'bg-[#030303]/80');
                nav.classList.remove('py-4', 'bg-[#030303]/95');
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
      

<nav className="fixed w-full z-50 transition-all duration-700 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 py-6" id="navbar">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
<div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-light text-gray-400">
<a className="hover:text-[#C8A97E] transition-colors duration-500" href="#collection">The Collection</a>
<a className="hover:text-[#C8A97E] transition-colors duration-500" href="#maison">La Maison</a>
<a className="hover:text-[#C8A97E] transition-colors duration-500" href="#experience">Olfactory Art</a>
</div>
<a className="text-2xl md:text-3xl font-medium tracking-tight serif uppercase text-white flex-shrink-0 absolute left-1/2 transform -translate-x-1/2" href="#">
                Parfums La Nobleza
            </a>
<div className="flex items-center gap-8 text-gray-400">
<button className="hover:text-[#C8A97E] transition-colors duration-500 flex items-center">
<iconify-icon height="22" icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-[#C8A97E] transition-colors duration-500 flex items-center relative group">
<iconify-icon height="22" icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-[#C8A97E] text-[#030303] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">0</span>
</button>
<button className="md:hidden flex items-center hover:text-[#C8A97E] transition-colors">
<iconify-icon height="26" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="26"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 z-10"></div>
<img alt="Luxury Perfume Cinematic" className="w-full h-full object-cover opacity-70 transform scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
</div>

<div className="relative z-20 max-w-[90rem] mx-auto px-6 w-full pt-20 flex flex-col items-center text-center">
<div className="glass-panel p-10 md:p-16 rounded-sm max-w-4xl relative overflow-hidden group">

<div className="absolute -inset-10 bg-[#C8A97E] opacity-0 blur-3xl group-hover:opacity-[0.03] transition-opacity duration-1000"></div>
<span className="block text-xs uppercase tracking-[0.3em] mb-8 text-[#C8A97E] font-light">Le Chef-d'œuvre</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.1] mb-8 text-white uppercase serif">
                    The Art of <br/>
<span className="italic font-light text-gray-300 capitalize">Niche Perfumery</span>
</h1>
<p className="text-sm md:text-base font-light mb-12 max-w-xl mx-auto leading-relaxed text-gray-400">
                    Rare fragrances crafted from the world's most precious absolutes, designed for those who understand true luxury.
                </p>
<a className="inline-flex items-center justify-center gap-4 border border-[#C8A97E]/40 text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-light hover:bg-[#C8A97E] hover:text-black hover:border-[#C8A97E] transition-all duration-700 w-full sm:w-auto" href="#collection">
                    Discover Collection
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-50">
<span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
</div>
</section>

<section className="py-32 px-6 max-w-[90rem] mx-auto" id="collection">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<span className="text-xs uppercase tracking-[0.2em] text-[#C8A97E] mb-4 block font-light">Exclusive Masterpieces</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-white serif font-normal">Symphony of Scents</h2>
</div>
<a className="text-xs uppercase tracking-[0.2em] font-light text-gray-400 border-b border-gray-800 pb-2 hover:text-white hover:border-[#C8A97E] transition-all duration-500 flex items-center gap-2" href="#">
                View Entire Collection
                <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#0A0A0A] overflow-hidden mb-8 relative rounded-sm border border-white/5">
<img alt="Oud Imperial" className="w-full h-full object-cover img-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/40 backdrop-blur-sm">
<button className="bg-white/10 border border-white/20 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-colors duration-500">
                            Acquire
                        </button>
</div>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-2 text-white serif font-medium tracking-tight group-hover:text-[#C8A97E] transition-colors duration-500">Oud Impérial</h3>
<p className="text-xs text-gray-500 mb-4 tracking-[0.1em] font-light italic">Cambodian Oud • Taif Rose • Ambergris</p>
<span className="text-sm font-light tracking-widest text-gray-300">$485.00</span>
</div>
</div>

<div className="group cursor-pointer mt-0 lg:mt-12">
<div className="aspect-[3/4] bg-[#0A0A0A] overflow-hidden mb-8 relative rounded-sm border border-white/5">
<img alt="Rose Mystique" className="w-full h-full object-cover img-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/40 backdrop-blur-sm">
<button className="bg-white/10 border border-white/20 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-colors duration-500">
                            Acquire
                        </button>
</div>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-2 text-white serif font-medium tracking-tight group-hover:text-[#C8A97E] transition-colors duration-500">Rose Mystique</h3>
<p className="text-xs text-gray-500 mb-4 tracking-[0.1em] font-light italic">Grasse Rose • Black Pepper • Patchouli</p>
<span className="text-sm font-light tracking-widest text-gray-300">$390.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#0A0A0A] overflow-hidden mb-8 relative rounded-sm border border-white/5">
<img alt="Ambre Nuit" className="w-full h-full object-cover img-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/40 backdrop-blur-sm">
<button className="bg-white/10 border border-white/20 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-colors duration-500">
                            Acquire
                        </button>
</div>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-2 text-white serif font-medium tracking-tight group-hover:text-[#C8A97E] transition-colors duration-500">Ambre Noir</h3>
<p className="text-xs text-gray-500 mb-4 tracking-[0.1em] font-light italic">Labdanum • Benzoin • Madagascan Vanilla</p>
<span className="text-sm font-light tracking-widest text-gray-300">$420.00</span>
</div>
</div>

<div className="group cursor-pointer mt-0 lg:mt-12">
<div className="aspect-[3/4] bg-[#0A0A0A] overflow-hidden mb-8 relative rounded-sm border border-white/5">
<img alt="Cuir Blanc" className="w-full h-full object-cover img-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/40 backdrop-blur-sm">
<button className="bg-white/10 border border-white/20 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-colors duration-500">
                            Acquire
                        </button>
</div>
</div>
<div className="text-center px-4">
<h3 className="text-2xl mb-2 text-white serif font-medium tracking-tight group-hover:text-[#C8A97E] transition-colors duration-500">Cuir Blanc</h3>
<p className="text-xs text-gray-500 mb-4 tracking-[0.1em] font-light italic">Russian Leather • Iris • White Musk</p>
<span className="text-sm font-light tracking-widest text-gray-300">$450.00</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-y border-white/5 bg-[#050505]" id="maison">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/20 to-transparent"></div>
<div className="absolute -left-64 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-[#C8A97E]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
<div className="order-2 md:order-1 relative group">
<div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 border border-white/10">
<img alt="Parisian Maison" className="w-full h-full object-cover img-hover-zoom grayscale group-hover:grayscale-[50%] transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-10 -right-10 w-2/3 aspect-square overflow-hidden rounded-sm border border-white/5 z-0 hidden lg:block opacity-40">
<img alt="Ingredients" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="order-1 md:order-2 flex flex-col justify-center">
<span className="text-xs uppercase tracking-[0.4em] text-[#C8A97E] mb-8 font-light flex items-center gap-4">
<span className="w-12 h-[1px] bg-[#C8A97E]/50"></span>
                    Heritage
                </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-10 leading-[1.1] serif font-normal">
                    Silence is the <br/> <span className="italic text-gray-400 font-light">Ultimate Luxury.</span>
</h2>
<div className="space-y-6 text-sm lg:text-base font-light leading-relaxed text-gray-400 mb-12">
<p>
                        Born in the heart of Paris, Parfums La Nobleza operates on a singular philosophy: true luxury whispers, it never shouts. We do not create fragrances for the masses; we compose olfactory symphonies for the discerning few.
                    </p>
<p>
                        Every drop encapsulated in our heavy crystal flacons is the result of years of meticulous aging, utilizing raw materials so rare they are considered liquid gold in the world of haute perfumery.
                    </p>
</div>
<div>
<img alt="Founder Signature" className="h-12 invert opacity-50 mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{filter: 'invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(0.8)'}}/>
<p className="text-xs uppercase tracking-[0.2em] font-light text-gray-500">Master Perfumer</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="experience">
<div className="max-w-[90rem] mx-auto">
<div className="text-center mb-20">
<span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block font-light">The Palette</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-white serif font-normal">Raw Elegance</h2>
<p className="mt-6 text-sm font-light text-gray-400 max-w-2xl mx-auto">Sourced from the most remote corners of the earth, our ingredients are uncompromised in their purity.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4">

<div className="relative aspect-square md:aspect-[4/3] overflow-hidden group">
<img alt="Oud Wood" className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 img-hover-zoom" src="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-80 group-hover:opacity-100">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] mb-2 font-light">Agarwood</span>
<h3 className="text-2xl md:text-3xl text-white serif font-medium">Assam Oud</h3>
</div>
</div>

<div className="relative aspect-square md:aspect-[4/3] overflow-hidden group">
<img alt="Amber Resin" className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 img-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-80 group-hover:opacity-100">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] mb-2 font-light">Fossilized Resin</span>
<h3 className="text-2xl md:text-3xl text-white serif font-medium">Baltic Amber</h3>
</div>
</div>

<div className="relative aspect-square md:aspect-[4/3] overflow-hidden group">
<img alt="Damask Rose" className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 img-hover-zoom" src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-80 group-hover:opacity-100">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] mb-2 font-light">Rosa Damascena</span>
<h3 className="text-2xl md:text-3xl text-white serif font-medium">Taif Rose</h3>
</div>
</div>

<div className="relative aspect-square md:aspect-[4/3] overflow-hidden group">
<img alt="Vanilla Pods" className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 img-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-80 group-hover:opacity-100">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] mb-2 font-light">Planifolia</span>
<h3 className="text-2xl md:text-3xl text-white serif font-medium">Madagascar Vanilla</h3>
</div>
</div>

<div className="relative aspect-square md:aspect-[4/3] overflow-hidden group hidden md:block">
<img alt="Tobacco Leaves" className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 img-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-80 group-hover:opacity-100">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] mb-2 font-light">Nicotiana Tabacum</span>
<h3 className="text-2xl md:text-3xl text-white serif font-medium">Blonde Tobacco</h3>
</div>
</div>

<div className="relative aspect-square md:aspect-[4/3] overflow-hidden group hidden lg:block">
<img alt="Leather" className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 img-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-80 group-hover:opacity-100">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] mb-2 font-light">Accord</span>
<h3 className="text-2xl md:text-3xl text-white serif font-medium">Russian Leather</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
<div className="max-w-[90rem] mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight text-white serif font-normal">The Noble Circle Favorites</h2>
</div>
<div className="flex gap-4">
<button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors rounded-full text-gray-400 hover:text-white">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors rounded-full text-gray-400 hover:text-white">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 px-6 lg:px-[calc((100vw-90rem)/2+1.5rem)] overflow-x-auto pb-12 snap-x no-scrollbar">

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer">
<div className="bg-[#0A0A0A] p-8 aspect-square flex flex-col justify-center items-center border border-white/5 hover:border-[#C8A97E]/30 transition-colors duration-500 relative overflow-hidden">
<img alt="Bestseller" className="w-3/4 h-3/4 object-contain img-hover-zoom opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h4 className="text-lg text-white serif font-medium tracking-tight">Santal Volcanique</h4>
<p className="text-xs text-gray-500 mt-1 font-light">Sandalwood • Cardamom</p>
</div>
<span className="text-xs text-[#C8A97E] tracking-widest">$350.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer">
<div className="bg-[#0A0A0A] p-8 aspect-square flex flex-col justify-center items-center border border-white/5 hover:border-[#C8A97E]/30 transition-colors duration-500 relative overflow-hidden">
<img alt="Bestseller" className="w-3/4 h-3/4 object-contain img-hover-zoom opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h4 className="text-lg text-white serif font-medium tracking-tight">Oud Impérial Extrait</h4>
<p className="text-xs text-gray-500 mt-1 font-light">50% Concentration</p>
</div>
<span className="text-xs text-[#C8A97E] tracking-widest">$850.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer">
<div className="bg-[#0A0A0A] p-8 aspect-square flex flex-col justify-center items-center border border-white/5 hover:border-[#C8A97E]/30 transition-colors duration-500 relative overflow-hidden">
<img alt="Bestseller" className="w-3/4 h-3/4 object-contain img-hover-zoom opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h4 className="text-lg text-white serif font-medium tracking-tight">Iris Cendré</h4>
<p className="text-xs text-gray-500 mt-1 font-light">Orris Root • Ash</p>
</div>
<span className="text-xs text-[#C8A97E] tracking-widest">$410.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[360px] snap-start group cursor-pointer pr-6">
<div className="bg-[#0A0A0A] p-8 aspect-square flex flex-col justify-center items-center border border-white/5 hover:border-[#C8A97E]/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-[#C8A97E]/5 flex flex-col items-center justify-center p-10 text-center">
<iconify-icon className="text-[#C8A97E] mb-4" icon="solar:box-minimalistic-linear" strokeWidth="1" width="32"></iconify-icon>
<span className="text-sm uppercase tracking-[0.2em] font-light">Discovery Set</span>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h4 className="text-lg text-white serif font-medium tracking-tight">Le Coffret</h4>
<p className="text-xs text-gray-500 mt-1 font-light">6 x 10ml Miniatures</p>
</div>
<span className="text-xs text-[#C8A97E] tracking-widest">$185.00</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] relative">
<div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505]/95 to-[#030303]"></div>
<div className="max-w-[90rem] mx-auto relative z-10">
<div className="text-center mb-20">
<iconify-icon className="text-[#C8A97E]/30 mb-6" icon="solar:quote-right-bold" width="32"></iconify-icon>
<h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">Whispers of the Elite</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
<div className="flex flex-col gap-6 text-center md:text-left">
<div className="flex gap-1 justify-center md:justify-start text-[#C8A97E]">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-lg lg:text-xl serif italic text-gray-300 leading-relaxed font-light">"An uncompromising masterpiece. Oud Impérial possesses a depth and projection I have only encountered in bespoke royal commissions."</p>
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 border-t border-white/10 pt-4 inline-block w-max mx-auto md:mx-0">— H.R.H. A.M., Dubai</span>
</div>
<div className="flex flex-col gap-6 text-center md:text-left">
<div className="flex gap-1 justify-center md:justify-start text-[#C8A97E]">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-lg lg:text-xl serif italic text-gray-300 leading-relaxed font-light">"The presentation alone is an event. But the juice inside Rose Mystique redefines what floral fragrances can be. Dark, mysterious, perfect."</p>
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 border-t border-white/10 pt-4 inline-block w-max mx-auto md:mx-0">— E. V., Paris</span>
</div>
<div className="flex flex-col gap-6 text-center md:text-left">
<div className="flex gap-1 justify-center md:justify-start text-[#C8A97E]">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-lg lg:text-xl serif italic text-gray-300 leading-relaxed font-light">"I stopped wearing commercial perfumes the day I discovered La Nobleza. It is not a fragrance, it is an aura of absolute exclusivity."</p>
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 border-t border-white/10 pt-4 inline-block w-max mx-auto md:mx-0">— J. C., New York</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#080808]">
<div className="max-w-4xl mx-auto glass-panel p-10 md:p-20 text-center border border-white/5 relative overflow-hidden rounded-sm">

<div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/5 to-transparent"></div>
<div className="relative z-10">
<iconify-icon className="text-[#C8A97E] mb-6" icon="solar:crown-minimalistic-linear" strokeWidth="1" width="40"></iconify-icon>
<h2 className="text-3xl md:text-5xl tracking-tight mb-6 serif font-normal text-white">Join The Noble Circle</h2>
<p className="text-sm font-light text-gray-400 mb-12 max-w-md mx-auto leading-relaxed">
                    Membership is by invitation or application. Join our private registry to access limited allocations, vaulted editions, and private atelier events.
                </p>
<form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
<input className="flex-1 bg-transparent border-b border-white/20 py-4 px-4 focus:border-[#C8A97E] outline-none transition-colors font-light text-sm text-center sm:text-left placeholder-gray-600 text-white rounded-none" placeholder="Enter your email address" type="email"/>
<button className="bg-white text-black px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#C8A97E] transition-colors duration-500 mt-6 sm:mt-0">Apply</button>
</form>
<p className="text-[9px] uppercase tracking-widest text-gray-600 mt-6">Limited memberships available globally.</p>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-32 pb-12 px-6 border-t border-white/5">
<div className="max-w-[90rem] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-24">
<div className="md:col-span-4 lg:col-span-5">
<a className="text-3xl tracking-tight text-white mb-8 block serif uppercase font-medium" href="#">
                        Parfums <br/>La Nobleza
                    </a>
<p className="text-xs font-light leading-relaxed text-gray-500 max-w-xs">
                        Elevating the senses through uncompromising high-perfumery. Handcrafted in Grasse, conceptualized in Paris, cherished globally.
                    </p>
</div>
<div className="md:col-span-3 lg:col-span-2">
<h5 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-8">La Collection</h5>
<ul className="flex flex-col gap-5 text-xs font-light text-gray-500">
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">Extrait de Parfum</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">Eau de Parfum</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">The Vault (Private)</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">Discovery Coffrets</a></li>
</ul>
</div>
<div className="md:col-span-3 lg:col-span-2">
<h5 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-8">La Maison</h5>
<ul className="flex flex-col gap-5 text-xs font-light text-gray-500">
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">Our Heritage</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">The Ingredients</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">Boutiques</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#">Concierge</a></li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-3">
<h5 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-8">Connect</h5>
<div className="flex gap-6 text-gray-500">
<a className="hover:text-[#C8A97E] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="22"></iconify-icon></a>
<a className="hover:text-[#C8A97E] transition-colors" href="#"><iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon></a>
<a className="hover:text-[#C8A97E] transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="22"></iconify-icon></a>
</div>
<div className="mt-10">
<p className="text-[10px] uppercase tracking-[0.2em] font-light text-gray-600 mb-2">Private Concierge</p>
<a className="text-sm font-light text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1" href="mailto:concierge@lanobleza.com">concierge@lanobleza.com</a>
</div>
</div>
</div>
<div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 font-light">© 2024 Parfums La Nobleza Paris. All Rights Reserved.</p>
<div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] text-gray-600 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
