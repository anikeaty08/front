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



        // Initialize Lucide Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Simple Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        let menuOpen = false;
        
        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if(menuOpen) {
                // In a real app, this would open a full-screen menu overlay
                menuBtn.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
                lucide.createIcons({ strokeWidth: 1.5 });
            } else {
                menuBtn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                lucide.createIcons({ strokeWidth: 1.5 });
            }
        });

        // Horizontal Scroll Drag Logic for 'The Fleet' section
        const slider = document.querySelector('.hide-scrollbar');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            slider.scrollLeft = scrollLeft - walk;
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
      

<header className="fixed top-0 w-full z-50 mix-blend-difference pointer-events-none px-6 py-8 md:px-12 flex justify-between items-center text-white text-xs tracking-widest uppercase font-medium">
<div className="flex items-center gap-12 pointer-events-auto">
<a className="text-base tracking-[0.2em]" href="#">Northsea</a>
<span className="hidden md:block opacity-60">01</span>
</div>
<nav className="hidden lg:flex gap-8 pointer-events-auto">
<a className="hover:opacity-60 transition-opacity" href="#yachts">Yachts</a>
<a className="hover:opacity-60 transition-opacity" href="#sell">Sell</a>
<a className="hover:opacity-60 transition-opacity" href="#services">Services</a>
<a className="hover:opacity-60 transition-opacity" href="#about">About</a>
<a className="hover:opacity-60 transition-opacity" href="#journal">Journal</a>
</nav>
<div className="flex items-center gap-8 pointer-events-auto">
<button className="hidden md:flex items-center gap-2 hover:opacity-60 transition-opacity">
                EN <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<a className="border border-white/30 px-6 py-2 rounded-none hover:bg-white hover:text-black transition-colors flex items-center gap-3" href="#contact">
                Contact <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
</a>
<button className="lg:hidden" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative h-screen w-full overflow-hidden bg-[#0c0c0c]">

<div className="absolute inset-0 z-0">
<img alt="Luxury Yacht" className="w-full h-full object-cover object-center opacity-80 mix-blend-luminosity brightness-50" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&amp;w=3000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-[#0a0a0a]/80 to-transparent z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 grid-texture opacity-30 z-10" style={{transform: 'perspective(500px) rotateX(60deg)', transformOrigin: 'bottom'}}></div>
</div>

<div className="absolute inset-0 bg-[#e4e4e2] z-10 hero-clip-lg noise-bg"></div>

<div className="relative z-20 h-full w-full flex flex-col lg:flex-row">

<div className="w-full lg:w-[45%] h-full pt-32 pb-12 px-6 md:px-12 flex flex-col justify-center text-black">
<div className="mb-8 flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-medium">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
<div>
<span className="block">Premium Yachts</span>
<span className="block text-black/60">Curated to perfection</span>
</div>
</div>
<h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tight-override font-normal mb-16">
                    BEYOND<br/>
                    THE HORIZON
                </h1>
<div className="mt-auto md:mt-0 flex items-center justify-between border-b border-black/20 pb-4 max-w-sm group cursor-pointer">
<span className="text-xs uppercase tracking-widest font-medium group-hover:pl-2 transition-all">Explore Yachts</span>
<i className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="hidden lg:block absolute top-32 right-32 z-20 text-white/60 text-[10px] tracking-widest uppercase font-mono text-right">
<div className="mb-2">Lat<br/><span className="text-white">36.7627° N</span></div>
<div className="mb-4">Lon<br/><span className="text-white">-122.1694° W</span></div>
<i className="w-4 h-4 ml-auto opacity-50" data-lucide="crosshair"></i>
</div>

<div className="absolute bottom-12 left-6 md:left-12 z-20 text-black flex items-end gap-4 mix-blend-difference" style={{color: 'white'}}>
<div className="text-5xl font-light tracking-tight-override">01</div>
<div className="text-xs mb-2 opacity-60 tracking-widest">/ 05</div>
<div className="w-32 h-[1px] bg-white/20 mb-3 ml-4 relative hidden md:block">
<div className="absolute left-0 top-0 h-full w-1/5 bg-white"></div>
</div>
</div>

<div className="absolute bottom-12 right-32 z-20 hidden lg:flex gap-3 items-center">
<div className="w-16 h-10 border border-white p-0.5 cursor-pointer opacity-100 transition-opacity">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-16 h-10 border border-transparent p-0.5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-16 h-10 border border-transparent p-0.5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-16 h-10 border border-transparent p-0.5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center ml-2 hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="hidden 2xl:flex absolute right-0 top-0 h-full w-24 bg-[#111] border-l border-white/5 flex-col items-center justify-between py-12 z-30 grid-texture relative">
<div className="absolute inset-0 bg-black/50 z-0"></div>
<div className="text-white/40 text-xs tracking-widest z-10">01</div>
<div className="z-10" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
<span className="text-6xl tracking-[0.2em] text-white/20 uppercase font-light">Northsea</span>
</div>

<div className="relative w-16 h-16 z-10 spin-slow">
<svg className="w-full h-full overflow-visible fill-white/40" viewbox="0 0 100 100">
<path d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="transparent" id="curve"></path>
<text className="text-[10px] tracking-[0.3em] uppercase"><textpath href="#curve">Northsea Yachts • Excellence At Sea • </textpath></text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-4 h-4 text-white/40" data-lucide="anchor"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-white/10 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
<div className="flex flex-col border-l border-white/20 pl-6">
<span className="text-xs uppercase tracking-widest text-white/40 mb-4">Total Length</span>
<span className="text-4xl md:text-5xl font-light tracking-tight-override">115<span className="text-xl text-white/40 ml-1">M</span></span>
</div>
<div className="flex flex-col border-l border-white/20 pl-6">
<span className="text-xs uppercase tracking-widest text-white/40 mb-4">Cruising Speed</span>
<span className="text-4xl md:text-5xl font-light tracking-tight-override">18<span className="text-xl text-white/40 ml-1">KN</span></span>
</div>
<div className="flex flex-col border-l border-white/20 pl-6">
<span className="text-xs uppercase tracking-widest text-white/40 mb-4">Guests</span>
<span className="text-4xl md:text-5xl font-light tracking-tight-override">24<span className="text-xl text-white/40 ml-1">PAX</span></span>
</div>
<div className="flex flex-col border-l border-white/20 pl-6">
<span className="text-xs uppercase tracking-widest text-white/40 mb-4">Range</span>
<span className="text-4xl md:text-5xl font-light tracking-tight-override">6000<span className="text-xl text-white/40 ml-1">NM</span></span>
</div>
</div>
</section>

<section className="py-32 pl-6 md:pl-12 overflow-hidden bg-[#0a0a0a]" id="yachts">
<div className="flex items-end justify-between pr-6 md:pr-12 mb-16">
<div>
<h2 className="text-xs uppercase tracking-widest text-white/60 mb-4">02 / Collection</h2>
<h3 className="text-4xl md:text-5xl font-normal tracking-tight-override">CURATED FLEET</h3>
</div>
<div className="hidden md:flex gap-4">
<button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex gap-8 overflow-x-auto hide-scrollbar pr-12 pb-8 cursor-grab active:cursor-grabbing">

<div className="min-w-[85vw] md:min-w-[600px] group">
<div className="relative h-[400px] w-full overflow-hidden mb-6 bg-white/5">
<img alt="Yacht 1" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 text-xs tracking-widest uppercase border border-white/10">For Sale</div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6">
<div>
<h4 className="text-2xl font-normal tracking-tight-override mb-2">AETHER</h4>
<p className="text-lg text-white/50">Lürssen • 2023</p>
</div>
<div className="text-right">
<div className="text-lg font-normal">€85,000,000</div>
<div className="text-xs tracking-widest text-white/40 mt-1 uppercase">85m / 278ft</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] group">
<div className="relative h-[400px] w-full overflow-hidden mb-6 bg-white/5">
<img alt="Yacht 2" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white text-black px-4 py-2 text-xs tracking-widest uppercase">Charter</div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6">
<div>
<h4 className="text-2xl font-normal tracking-tight-override mb-2">SOLARIS</h4>
<p className="text-lg text-white/50">Feadship • 2021</p>
</div>
<div className="text-right">
<div className="text-lg font-normal">From €1,200,000 / wk</div>
<div className="text-xs tracking-widest text-white/40 mt-1 uppercase">102m / 335ft</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] group">
<div className="relative h-[400px] w-full overflow-hidden mb-6 bg-white/5 flex items-center justify-center border border-white/10">
<div className="text-center">
<i className="w-8 h-8 text-white/40 mx-auto mb-4" data-lucide="ship"></i>
<span className="text-xs uppercase tracking-widest text-white/60">View All 42 Yachts</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0">
<img alt="Ocean Wake" className="w-full h-full object-cover object-center opacity-60 grayscale" src="https://images.unsplash.com/photo-1520255870062-bd79d3865de7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6">
<h2 className="text-xs uppercase tracking-[0.3em] text-white/60 mb-8">03 / The Experience</h2>
<p className="text-3xl md:text-5xl font-light tracking-tight-override leading-tight">
                "We don't just broker transactions; we architect maritime legacies for those who demand the absolute pinnacle of engineering and design."
            </p>
<button className="mt-12 border-b border-white pb-2 text-xs uppercase tracking-widest hover:text-white/60 hover:border-white/60 transition-all">Discover Our Story</button>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#0a0a0a]" id="services">
<h2 className="text-xs uppercase tracking-widest text-white/60 mb-16 text-center">04 / Expertise</h2>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border border-white/10 bg-[#111] p-12 hover:bg-[#151515] transition-colors group">
<i className="w-8 h-8 mb-32 text-white/40 group-hover:text-white transition-colors" data-lucide="compass"></i>
<h3 className="text-3xl font-normal tracking-tight-override mb-4">Brokerage</h3>
<p className="text-lg text-white/50 max-w-md mb-8">Navigating the complex global market to acquire or sell your asset with unmatched discretion and precision.</p>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>

<div className="border border-white/10 bg-[#111] p-12 hover:bg-[#151515] transition-colors group">
<i className="w-8 h-8 mb-32 text-white/40 group-hover:text-white transition-colors" data-lucide="anchor"></i>
<h3 className="text-2xl font-normal tracking-tight-override mb-4">Charter</h3>
<p className="text-lg text-white/50 mb-8">Curating bespoke itineraries across the world's most exclusive destinations.</p>
</div>

<div className="border border-white/10 bg-[#111] p-12 hover:bg-[#151515] transition-colors group">
<i className="w-8 h-8 mb-32 text-white/40 group-hover:text-white transition-colors" data-lucide="wrench"></i>
<h3 className="text-2xl font-normal tracking-tight-override mb-4">Management</h3>
<p className="text-lg text-white/50 mb-8">Comprehensive operational, technical, and financial administration of your vessel.</p>
</div>

<div className="lg:col-span-2 border border-white/10 bg-[#111] p-12 hover:bg-[#151515] transition-colors group relative overflow-hidden">
<div className="absolute inset-0 opacity-10 grayscale mix-blend-overlay">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative z-10">
<i className="w-8 h-8 mb-32 text-white/40 group-hover:text-white transition-colors" data-lucide="hammer"></i>
<h3 className="text-3xl font-normal tracking-tight-override mb-4">New Build</h3>
<p className="text-lg text-white/50 max-w-md mb-8">From blank canvas to launch, we oversee the conception and construction of custom masterpieces.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050505] overflow-hidden border-y border-white/10">
<div className="absolute inset-0 grid-texture opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/3">
<h2 className="text-xs uppercase tracking-widest text-white/60 mb-6">05 / Engineering</h2>
<h3 className="text-4xl md:text-5xl font-normal tracking-tight-override mb-8">UNCOMPROMISING<br/>ARCHITECTURE</h3>
<p className="text-lg text-white/50 mb-12">Every vessel in our curated fleet represents the zenith of naval architecture. We analyze hydrodynamics, structural integrity, and propulsion efficiency.</p>
<ul className="space-y-6 border-t border-white/10 pt-8">
<li className="flex items-start gap-4">
<div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
<div>
<h4 className="text-base uppercase tracking-widest font-medium mb-1">Hull Efficiency</h4>
<p className="text-base text-white/40">Optimized displacement for maximum range.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
<div>
<h4 className="text-base uppercase tracking-widest font-medium mb-1 text-white/60">Hybrid Propulsion</h4>
<p className="text-base text-white/40">Next-generation silent cruising capabilities.</p>
</div>
</li>
</ul>
</div>
<div className="w-full lg:w-2/3 relative h-[500px]">

<div className="absolute inset-0 border border-white/20 p-8 flex items-center justify-center bg-black/50 backdrop-blur-sm">
<img className="w-full h-full object-cover opacity-30 grayscale contrast-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{mixBlendMode: 'screen'}}/>

<div className="absolute top-1/4 left-1/4 flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full relative"><div className="absolute inset-0 bg-white animate-ping rounded-full opacity-50"></div></div>
<div className="h-[1px] w-12 bg-white/50"></div>
<span className="text-[10px] uppercase tracking-widest font-mono">Bridge Deck</span>
</div>
<div className="absolute bottom-1/3 right-1/4 flex items-center gap-2 flex-row-reverse">
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="h-[1px] w-24 bg-white/50"></div>
<span className="text-[10px] uppercase tracking-widest font-mono">Engine Room</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#0a0a0a]" id="journal">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight-override">JOURNAL</h2>
<a className="text-xs uppercase tracking-widest hover:text-white/60 transition-colors" href="#">View All Archive</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">

<a className="group block cursor-pointer" href="#">
<div className="relative h-64 mb-6 overflow-hidden bg-white/5">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center text-xs text-white/40 uppercase tracking-widest mb-3">
<span>Design</span>
<span>Oct 12, 2023</span>
</div>
<h3 className="text-xl font-normal tracking-tight-override mb-3 group-hover:text-white/80 transition-colors">The Evolution of Minimalist Interiors in Superyachts</h3>
<div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>
</a>

<a className="group block cursor-pointer" href="#">
<div className="relative h-64 mb-6 overflow-hidden bg-white/5">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center text-xs text-white/40 uppercase tracking-widest mb-3">
<span>Destination</span>
<span>Sep 28, 2023</span>
</div>
<h3 className="text-xl font-normal tracking-tight-override mb-3 group-hover:text-white/80 transition-colors">Navigating the Uncharted: Svalbard Expedition</h3>
<div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>
</a>

<a className="group block cursor-pointer" href="#">
<div className="relative h-64 mb-6 overflow-hidden bg-white/5">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center text-xs text-white/40 uppercase tracking-widest mb-3">
<span>Market</span>
<span>Sep 15, 2023</span>
</div>
<h3 className="text-xl font-normal tracking-tight-override mb-3 group-hover:text-white/80 transition-colors">Q3 Market Analysis: The Rise of the Explorer Segment</h3>
<div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#050505]" id="contact">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-xs uppercase tracking-widest text-white/60 mb-6">07 / Connect</h2>
<h3 className="text-4xl md:text-5xl font-normal tracking-tight-override mb-8">BEGIN YOUR<br/>JOURNEY</h3>
<p className="text-lg text-white/50 mb-12">Our brokers are available worldwide to discuss your requirements with the utmost discretion.</p>
<div className="space-y-6 text-sm text-white/70">
<div className="flex items-center gap-4">
<i className="w-4 h-4 opacity-50" data-lucide="map-pin"></i>
<span>Monaco • London • Miami • Dubai</span>
</div>
<div className="flex items-center gap-4">
<i className="w-4 h-4 opacity-50" data-lucide="mail"></i>
<span>private@northsea.com</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<form className="space-y-10">
<div className="relative">
<input className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-4 text-white/40 text-lg transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-4 text-white/40 text-lg transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest" htmlFor="email">Email Address</label>
</div>

<div className="flex items-center gap-4 pt-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/40"></div>
<span className="ms-3 text-sm text-white/50">Subscribe to private market updates</span>
</label>
</div>
<button className="w-full border border-white/30 py-4 mt-8 hover:bg-white hover:text-black transition-colors text-xs uppercase tracking-widest font-medium" type="button">
                        Submit Inquiry
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-12 px-6 md:px-12 border-t border-white/10">
<div className="max-w-7xl mx-auto">

<div className="w-full overflow-hidden mb-24 border-b border-white/10 pb-12 text-center md:text-left">
<span className="text-[12vw] leading-none tracking-tight-override font-light text-white/90 uppercase block">Northsea</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
<div className="col-span-2 md:col-span-1">
<h5 className="text-xs uppercase tracking-widest text-white/40 mb-6">Company</h5>
<ul className="space-y-4 text-base text-white/70">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">The Fleet</a></li>
<li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h5 className="text-xs uppercase tracking-widest text-white/40 mb-6">Services</h5>
<ul className="space-y-4 text-base text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Brokerage</a></li>
<li><a className="hover:text-white transition-colors" href="#">Charter</a></li>
<li><a className="hover:text-white transition-colors" href="#">Management</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Build</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2">
<h5 className="text-xs uppercase tracking-widest text-white/40 mb-6">Global Offices</h5>
<div className="grid grid-cols-2 gap-4 text-base text-white/70">
<div>
<p className="text-white mb-1">Monaco</p>
<p className="text-sm opacity-50">Port Hercules<br/>MC 98000</p>
</div>
<div>
<p className="text-white mb-1">Miami</p>
<p className="text-sm opacity-50">Brickell Ave<br/>FL 33131</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest pt-8 border-t border-white/10">
<p>© 2024 Northsea Yachts Ltd. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
