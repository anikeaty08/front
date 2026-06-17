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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
black: '#0f0f0f',
red: '#D01B1B',
cream: '#F7F4EB',
accent: '#F4EBD0'
}
},
animation: {
'scroll': 'scroll 25s linear infinite',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
        
        // Simple scroll to anchor behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
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
      

<main className="">








</main>

<header className="fixed z-50 flex pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase text-xl font-semibold text-slate-950 tracking-tighter font-display inline-flex items-center" href="#"><img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/></a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><section className="sm:px-8 overflow-hidden bg-[#F7F4EB] pt-40 pr-4 pb-24 pl-4 relative" id="catering-hero">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 gap-x-12 gap-y-12 items-center">

<div className="z-10 relative">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8">
<svg className="lucide lucide-sparkles text-[#E85424]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
</path>
<path d="M5 3v4"></path>
<path d="M19 17v4"></path>
<path d="M3 5h4"></path>
<path d="M17 19h4"></path>
</svg>
<span className="uppercase text-xs font-semibold text-slate-900 tracking-wide">Christchurch's NO.1 Bánh mì shop</span>
</div>

<h1 className="sm:text-6xl lg:text-7xl uppercase leading-[1.1] text-5xl font-semibold text-[#234220] tracking-tight font-display mb-6">
  Catering<br/>
<span className="text-[#E85424]">Your Team</span><br/>
          will love
</h1>

<p className="text-base text-slate-700 max-w-lg mb-10 leading-relaxed">
          Bring the vibrant, fresh flavours of Northern Vietnam to your next office meeting, party, or special occasion.
          From our signature crispy bánh mì to hand-rolled rice paper rolls, we deliver perfection in every bite.
        </p>

<div className="flex flex-wrap items-center gap-4 mb-12">
<a className="inline-flex items-center gap-2 uppercase shadow-[#234220]/20 hover:bg-[#1a3118] transition-colors text-xs font-semibold text-white tracking-wider bg-[#234220] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="/#catering-form">
  Enquire Now
  <svg className="lucide lucide-arrow-right w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 uppercase hover:bg-gray-50 transition-colors text-xs font-semibold text-slate-900 tracking-wider bg-white border-black/5 border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm" href="/#catering-menu-section">
  View Menu
</a>
</div>

<div className="flex gap-5 gap-x-5 gap-y-5 items-center">
<div className="flex -space-x-3">
<div className="h-10 w-10 rounded-full border-2 border-[#F7F4EB] bg-[#E85424] flex items-center justify-center font-bold text-white text-xs z-30 shadow-sm">
              TH</div>
<div className="h-10 w-10 rounded-full border-2 border-[#F7F4EB] bg-[#234220] flex items-center justify-center font-bold text-white text-xs z-20 shadow-sm">
              LC</div>
<div className="h-10 w-10 rounded-full border-2 border-[#F7F4EB] bg-[#F3D86D] flex items-center justify-center font-bold text-slate-900 text-xs z-10 shadow-sm">
              PC</div>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs font-semibold text-slate-900 mb-1">126+ Customer Reviews on Google</span>
<div className="flex text-[#E85424] gap-0.5">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
<img alt="Rollicious Catering Spread" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5964bb91-9586-4191-a270-9f71cc661053_1600w.jpg"/>

<div className="absolute inset-0 bg-black/5"></div>

<div className="absolute top-6 right-6 bg-white rounded-2xl p-3 pr-5 flex items-center gap-3 shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-xl bg-[#E85424]/10 flex items-center justify-center text-[#E85424]">
<svg className="lucide lucide-award" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="6"></circle>
<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">Top Choice</span>
<span className="text-sm font-semibold text-slate-900 leading-tight">Bánh Mì Box</span>
</div>
</div>

<div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 flex items-center gap-4 shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center justify-center text-[#E85424]">
<svg className="lucide lucide-star" fill="currentColor" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div className="flex flex-col pr-2">
<span className="text-xl font-semibold text-slate-900 leading-none">4.9</span>
<span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider mt-1">126+ Reviews</span>
</div>
</div>

<div className="hidden lg:flex absolute top-1/2 -left-7 -translate-y-1/2 w-14 h-14 bg-[#234220] rounded-full items-center justify-center shadow-xl text-white border-[6px] border-[#F7F4EB] z-10 cursor-pointer hover:bg-[#1a3118] transition-colors">
<svg className="lucide lucide-trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
</div>
</div>

<div className="mt-24 pt-16 border-t border-black/5 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-black/5">
<div className="flex flex-col items-center pt-8 md:pt-0">
<span className="md:text-6xl text-5xl font-semibold text-[#234220] tracking-tight font-display mb-3">1,250<span className="text-[#E85424]">+</span></span>
<span className="uppercase text-xs font-semibold text-slate-500 tracking-widest">Events attended</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0">
<span className="md:text-6xl text-5xl font-semibold text-[#234220] tracking-tight font-display mb-3">3,500<span className="text-[#E85424]">+</span></span>
<span className="uppercase text-xs font-semibold text-slate-500 tracking-widest">ave. Bánh Mì sold each month</span>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0">
<span className="text-5xl md:text-6xl font-display font-semibold text-[#234220] tracking-tight mb-3">100<span className="text-[#E85424]">%</span></span>
<span className="uppercase text-xs font-semibold text-slate-500 tracking-widest">Fresh Ingredients</span>
</div>
</div>
</div>
</div>
</section><div className="overflow-hidden border-black/5 border-b pt-6 pb-6">
<div className="flex animate-scroll whitespace-nowrap">
<div className="flex pr-4 pl-4 relative gap-x-8 gap-y-8 items-center">
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">fresh</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">healthy</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="uppercase sm:text-6xl text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">delicious</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">baked fresh daily</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">fresh</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">healthy</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="uppercase sm:text-6xl text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">delicious</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">baked fresh daily</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">fresh</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">healthy</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="uppercase sm:text-6xl text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">delicious</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">baked fresh daily</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">fresh</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">healthy</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="uppercase sm:text-6xl text-4xl font-semibold text-[#F3D86D] tracking-tight font-display">delicious</span>
<span className="text-2xl text-brand-orange">●</span>
<span className="sm:text-6xl uppercase text-4xl font-semibold text-[#234220] tracking-tight font-display">baked fresh daily</span>
<span className="text-2xl text-brand-orange">●</span>
</div>
</div>
</div><header className="fixed flex z-50 pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><header className="fixed z-50 flex pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase text-xl font-semibold text-slate-950 tracking-tighter font-display inline-flex items-center" href="#"><img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/></a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><header className="fixed flex z-50 pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/story-page">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/menu-page">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/location-page">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/catering-page">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/contact-page">contact</a><a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/feedback-review">Reviews</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="https://order.rollicious.co.nz/">
  Order Online
</a>
</div>
</nav>
</header><section className="sm:px-8 bg-[#f7f4eb] border-black/5 border-t pt-24 pr-4 pb-24 pl-4">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row mt-10 mb-8 gap-x-3 gap-y-3 items-end justify-between" id="catering-menu-section">
<div className="">
<h2 className="sm:text-7xl uppercase leading-none text-5xl font-medium text-[#E85424] tracking-tight font-display mt-2">Catering Menu</h2>
</div>
<div className="md:max-w-xs text-right md:text-left">
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group flex flex-col">
<div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-square">
<img alt="Salad Roll Box" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddcd3581-6903-4449-86f9-ef6a020e3a1d_1600w.png"/>
</div>
<div className="flex mb-1 items-center">
<h3 className="uppercase text-xl font-medium text-white font-display bg-[#E85424] pt-0.5 pr-2 pb-0.5 pl-2">
            SALAD ROLL BOX</h3>
</div>
<span className="block uppercase text-xl font-normal text-[#234220] font-display mb-4">BOX NO.1</span>
<p className="text-sm font-medium text-[#234220] mb-2">Caters: 6-8 people</p>
<p className="text-sm text-black mb-4">30 x Assorted Rolls served with a variety of delicious sauces.</p>
</div>

<div className="group flex flex-col">
<div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-square">
<img alt="Banh Mi Box" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6af9d9c1-eb48-45d5-a2a9-b9b74be3ad81_3840w.jpg"/>
</div>
<div className="flex items-center mb-1 mt-0.5">
<h3 className="uppercase text-xl font-medium text-[#FFFFFF] font-display bg-[#E85424] pt-0.5 pr-2 pb-0.5 pl-2">
            BANH MI BOX</h3>
</div>
<span className="block uppercase text-xl font-normal text-[#234220] font-display mb-4">BOX NO.2</span>
<p className="text-sm font-medium text-[#234220] mb-2">Caters: 6-8 people</p>
<p className="text-sm text-black mb-4">15 x Bánh Mì mixed protein options cut in 30 portions.</p>
</div>
</div>
</div>
</section><section className="sm:px-8 bg-white border-black/5 border-t pt-24 pr-4 pb-24 pl-4" id="social-gallery">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col items-center text-center mb-16">
<a className="inline-flex items-center gap-2 hover:bg-[#F3D86D] transition-colors group bg-[#F7F4EB] border-black/5 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<svg className="lucide lucide-instagram text-[#E85424]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="uppercase text-xs font-semibold text-slate-900 tracking-wide">@rollicious_vietnamese</span>
</a>
<h2 className="sm:text-6xl text-5xl font-semibold uppercase text-[#234220] tracking-tight font-display mb-4">
        Follow Our Journey
      </h2>
<p className="text-base text-slate-700 max-w-lg">
        Share your fresh Rollicious moments with <span className="font-semibold text-[#E85424]">#RolliciousNZ</span>
</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Banh Mi Platter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6af9d9c1-eb48-45d5-a2a9-b9b74be3ad81_3840w.jpg"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Beef Banh Mi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64824e9f-03bd-4d7c-b8ad-65660489d00f_3840w.jpg"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Noodle Salad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/358674c7-1b4b-4090-b0ad-bbe34e260ac0_1600w.png"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Rice Paper Rolls" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc4fddf0-f913-4479-a183-a949cd7b66a7_1600w.jpg"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Vietnamese Iced Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e11a377-e2ba-4ad5-9f8b-7a4f18965b5c_1600w.png"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Mango Tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3311ae5a-9c1c-41a4-8c49-4b2f5e97e233_1600w.jpg"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>
</div>
</div>
</section><section className="sm:px-8 bg-[#F7F4EB] border-black/5 border-t pt-24 pr-4 pb-24 pl-4" id="Catering Enquiry Section">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">
<h2 className="sm:text-6xl text-5xl font-semibold uppercase text-[#234220] tracking-tight font-display mb-4">
        Get In Touch
      </h2>
<p className="text-base text-slate-700 max-w-lg mx-auto">
        Have a catering enquiry or general question? We'd love to hear from you. Fill out the form below and our team
        will be in touch.
      </p>
</div>

<div className="grid lg:grid-cols-12 gap-8 lg:gap-10">

<div className="lg:col-span-7 sm:p-12 bg-white border-black/5 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm" id="catering-form">
<h3 className="uppercase text-3xl font-normal text-[#234220] tracking-tight font-display mb-8">Catering Enquiry</h3>
<form action="https://formsubmit.co/hello@socialcreatives.co.nz" className="space-y-6" method="POST">
<input name="_webhook" type="hidden" value="https://hook.us2.make.com/s5lr4h5r12t2q7dvzxf1fk2e12egh7rs"/>
<input name="formtype" type="hidden" value="catering"/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">First name <span className="text-[#E85424]">*</span></label>
<input className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="first-name" required="" type="text"/>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Last name <span className="text-[#E85424]">*</span></label>
<input className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="last-name" required="" type="text"/>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Email <span className="text-[#E85424]">*</span></label>
<input className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="email" type="email"/>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Phone <span className="text-[#E85424]">*</span></label>
<input className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="phone" required="" type="tel"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Catering date <span className="text-[#E85424]">*</span></label>
<input className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="catering-date" required="" type="date"/>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Number of attendees <span className="text-[#E85424]">*</span></label>
<div className="relative">
<select className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="attendees" required="">
<option disabled="" selected="" value="">- Select -</option>
<option value="1-10">1 - 10</option>
<option value="11-20">11 - 20</option>
<option value="21-50">21 - 50</option>
<option value="50+">50+</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="pb-3.5">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-5 h-5 border border-black/20 rounded-full bg-[#F7F4EB] checked:bg-[#E85424] checked:border-[#E85424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] cursor-pointer" name="urgent" type="checkbox"/>
<svg className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-normal text-slate-700 group-hover:text-slate-900 transition-colors">Is this an urgent request?</span>
</label>
</div>
</div>

<div className="pt-4 border-t border-black/5">
<h4 className="text-lg font-normal text-[#234220] font-display mb-1">Choose your box
              <span className="text-[#E85424]">*</span></h4>
<p className="text-sm text-slate-500 mb-4 uppercase tracking-widest font-normal">Multiple boxes can be selected
              OR YOU CAN CUSTOMISE AS REQUIRED</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">BOX NO.1: Salad Roll Box <span className="text-[#E85424]">*</span></label>
<input className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" min="0" name="salad-roll-box" placeholder="0" required="" type="number"/>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">BOX NO.2: Banh Mi Box <span className="text-[#E85424]">*</span></label>
<input className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" min="0" name="banh-mi-box" placeholder="0" required="" type="number"/>
</div>
</div>
</div>

<div className="">
<label className="block text-base font-normal text-slate-900 mb-3">Select all that apply</label>
<div className="flex flex-wrap gap-x-8 gap-y-4">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-5 h-5 border border-black/20 rounded-full bg-[#F7F4EB] checked:bg-[#E85424] checked:border-[#E85424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] cursor-pointer" name="vegan" type="checkbox"/>
<svg className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-normal text-slate-900 group-hover:text-[#E85424] transition-colors">Vegan</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-5 h-5 border border-black/20 rounded-full bg-[#F7F4EB] checked:bg-[#E85424] checked:border-[#E85424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] cursor-pointer" name="vegetarian" type="checkbox"/>
<svg className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-normal text-slate-900 group-hover:text-[#E85424] transition-colors">Vegetarian</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-5 h-5 border border-black/20 rounded-full bg-[#F7F4EB] checked:bg-[#E85424] checked:border-[#E85424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] cursor-pointer" name="dairy-free" type="checkbox"/>
<svg className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-normal text-slate-900 group-hover:text-[#E85424] transition-colors">Dairy Free</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-5 h-5 border border-black/20 rounded-full bg-[#F7F4EB] checked:bg-[#E85424] checked:border-[#E85424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] cursor-pointer" name="gluten-free" type="checkbox"/>
<svg className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-normal text-slate-900 group-hover:text-[#E85424] transition-colors">Gluten Free</span>
</label>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Pick up or delivery <span className="text-[#E85424]">*</span></label>
<div className="relative">
<select className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="pickup-or-delivery" required="">
<option disabled="" selected="" value="">- Select -</option>
<option value="Pickup">Pickup</option>
<option value="Delivery">Delivery</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Pickup or delivery time <span className="text-[#E85424]">*</span></label>
<div className="relative">
<select className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="delivery-time" required="">
<option disabled="" selected="" value="">- Select -</option>
<option value="morning">Morning (9AM - 11AM)</option>
<option value="lunch">Lunch (11AM - 2PM)</option>
<option value="afternoon">Afternoon (2PM - 5PM)</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div>
<label className="block text-base font-normal text-slate-900 mb-2">What city are you in? <span className="text-[#E85424]">*</span></label>
<div className="relative">
<select className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all" name="city" required="">
<option disabled="" selected="" value="">- Select -</option>
<option value="christchurch">Christchurch</option>
<option value="auckland">Auckland</option>
<option value="wellington">Wellington</option>
<option value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Company name and/or event details <span className="text-[#E85424]">*</span></label>
<textarea className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all resize-y" name="company-event-details" required="" rows="3"></textarea>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Catering Event Address (to locate closest store) <span className="text-[#E85424]">*</span></label>
<textarea className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all resize-y" name="event-address" required="" rows="3"></textarea>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Pick Up or Delivery Notes for this Catering Order</label>
<textarea className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all resize-y" name="delivery-notes" rows="3"></textarea>
</div>
<div className="">
<label className="block text-base font-normal text-slate-900 mb-2">Any other notes</label>
<textarea className="w-full bg-[#F7F4EB] border border-black/5 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all resize-y" name="notes" rows="3"></textarea>
</div>

<div className="">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5 shrink-0">
<input className="peer appearance-none w-5 h-5 border border-black/20 rounded-full bg-[#F7F4EB] checked:bg-[#E85424] checked:border-[#E85424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] cursor-pointer" name="updates" type="checkbox"/>
<svg className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-base font-normal text-slate-700 group-hover:text-slate-900 transition-colors leading-relaxed">Sign me up for tasty news, fresh offers &amp; exclusive promotions. You can unsubscribe at any time. View our Privacy Policy &amp; Terms of Use.</span>
</label>
</div>

<button className="w-full md:w-auto md:px-16 mx-auto block bg-[#E85424] hover:bg-[#d0451a] text-white font-display uppercase tracking-widest font-normal text-base py-4 rounded-full transition-colors mt-2 shadow-lg shadow-[#E85424]/20" type="submit">
      Place Order
    </button>
</form>
</div>

<div className="lg:col-span-5 flex flex-col gap-x-8 gap-y-8">

<div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-black/5">
<h3 className="font-display text-2xl tracking-tight font-semibold uppercase text-[#234220] mb-8">Contact
            Information</h3>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F4EB] flex items-center justify-center text-[#E85424] shrink-0 border border-black/5">
<svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div className="pt-0.5">
<h4 className="text-base font-semibold text-slate-900 mb-1">Email</h4>
<a className="text-base text-slate-600 hover:text-[#E85424] transition-colors" href="mailto:hello@rollicious.co.nz">hello@rollicious.co.nz</a>
<p className="text-base text-slate-600">catering@rollicious.co.nz</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F4EB] flex items-center justify-center text-[#E85424] shrink-0 border border-black/5">
<svg className="lucide lucide-phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
</div>
<div className="pt-0.5">
<h4 className="text-base font-semibold text-slate-900 mb-1">Phone</h4>
<p className="text-base text-slate-600">020 434 8989</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F4EB] flex items-center justify-center text-[#E85424] shrink-0 border border-black/5">
<svg className="lucide lucide-map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="pt-0.5">
<h4 className="text-base font-semibold text-slate-900 mb-1">Address</h4>
<p className="text-base text-slate-600">270 Saint Asaph Street<br/>Christchurch Central City<br/>Christchurch 8011
                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F4EB] flex items-center justify-center text-[#E85424] shrink-0 border border-black/5">
<svg className="lucide lucide-clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="pt-0.5">
<h4 className="text-base font-semibold text-slate-900 mb-1">Business Hours</h4>
<p className="text-base text-slate-600">Mon - Fri: 10:00 AM - 3:00 PM<br/>Sat - Sun: Closed</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-black/5">
<h3 className="font-display text-2xl tracking-tight font-semibold uppercase text-[#234220] mb-8">Delivery Fees
          </h3>
<div className="overflow-x-auto">
<div className="overflow-hidden rounded-xl border border-[#234220]/20 min-w-[280px]">
<table className="w-full text-base text-slate-700">
<thead className="bg-[#F7F4EB] text-slate-900">
<tr className="">
<th className="font-semibold text-center w-1/2 border-[#234220]/20 border-r pt-4 pr-6 pb-4 pl-6" scope="col">Distance
                    </th>
<th className="px-6 py-4 font-semibold text-center w-1/2" scope="col">Delivery Fee</th>
</tr>
</thead>
<tbody className="divide-y divide-[#234220]/20 bg-white">
<tr className="transition-colors hover:bg-[#F7F4EB]/50">
<td className="px-6 py-4 border-r border-[#234220]/20 text-center">0-10 minutes</td>
<td className="px-6 py-4 text-center">$25</td>
</tr>
<tr className="transition-colors hover:bg-[#F7F4EB]/50">
<td className="px-6 py-4 border-r border-[#234220]/20 text-center">11-15 Minutes</td>
<td className="px-6 py-4 text-center">$30</td>
</tr>
<tr className="transition-colors hover:bg-[#F7F4EB]/50">
<td className="px-6 py-4 border-r border-[#234220]/20 text-center">16-20 Minutes</td>
<td className="px-6 py-4 text-center">$35</td>
</tr>
<tr className="transition-colors hover:bg-[#F7F4EB]/50">
<td className="px-6 py-4 border-r border-[#234220]/20 text-center">20+ Minutes</td>
<td className="px-6 py-4 text-center">Contact store</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
</div>
</div>
</section><footer className="text-white bg-[#f7f4eb] border-white/10 border-t pt-20 pb-10">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row gap-12 mb-20 gap-x-12 gap-y-12 justify-between items-center md:items-start text-center md:text-left">
<div className="max-w-sm">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center text-center w-auto object-cover pt-4 pb-4 mx-auto md:mx-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6aaace39-7e06-49d7-b37b-924c6e273acf_320w.png"/>
<p className="leading-relaxed text-sm text-[#E85424]">Rollicious is a Christchurch-based Vietnamese shop specialising in Northern-style bánh mì, with light, balanced flavours and bread baked fresh daily at 5am for that perfect crispy outside and fluffy inside.</p>
<div className="flex gap-4 mt-6 gap-x-4 gap-y-4 justify-center md:justify-start">
<a className="transition-colors hover:text-brand-orange text-[#000000]" href="https://www.instagram.com/rollicious_vietnamese/"><svg aria-hidden="true" className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="https://www.facebook.com/RolliciousVietnamese/"><svg aria-hidden="true" className="lucide lucide-facebook w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="#"></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-12">
<div className="">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
            information</h4>
<ul className="text-sm text-white/60 space-y-3">
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/story-page">Our Story</a></li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/menu-page">Our Menu</a></li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="https://order.rollicious.co.nz/">Order Online</a></li>
<li className="">
<a className="text-[#E85424] hover:text-[#E85424] transition-colors" href="/catering-page">
    Catering
  </a>
</li>
</ul>
</div>
<div className="">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
            Get in
            touch</h4>
<ul className="space-y-3 text-sm text-white/60">
<li className="transition-colors select-text text-[#E85424]">
              020 434 8989
            </li>
<li className="text-[#E85424] transition-colors select-text">
              hello@rollicious.co.nz
            </li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 uppercase text-xs text-[#E85424] tracking-widest border-white/10 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="">© Rollicious, 2026</p>
<div className="flex gap-6">
<a className="hover:text-[#234220]" href="/privacy-page">Privacy Policy</a>
<a className="hover:text-[#234220]" href="/terms-page">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


<header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="flex md:justify-between text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 relative shadow-2xl items-center justify-center">

<div className="md:hidden absolute top-1/2 left-6 -translate-y-1/2 z-[102]">
<button aria-label="Open menu" className="hover:text-[#E85424] transition-colors focus:outline-none cursor-pointer block text-slate-950 bg-transparent border-0 shadow-none p-2" onclick="let o=document.getElementById('mobile-menu-overlay'),s=document.getElementById('mobile-menu-sidebar');if(o&amp;&amp;s){o.classList.remove('hidden','opacity-0','pointer-events-none');o.classList.add('opacity-100','pointer-events-auto');s.classList.remove('hidden','-translate-x-full','opacity-0','pointer-events-none');s.classList.add('translate-x-0','opacity-100','pointer-events-auto');document.body.style.overflow='hidden';}">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line className="" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/story-page">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/menu-page">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/location-page">find
            us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/catering-page">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/contact-page">contact</a><a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/feedback-review">Reviews</a>
</div>
<div className="hidden md:flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="https://order.rollicious.co.nz/">
            Order Online
          </a>
</div>
</nav>
</header>

<div className="hidden md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] opacity-0 pointer-events-none transition-all duration-300" id="mobile-menu-overlay" onclick="let s=document.getElementById('mobile-menu-sidebar'),o=document.getElementById('mobile-menu-overlay');if(s){s.classList.remove('translate-x-0','opacity-100','pointer-events-auto');s.classList.add('-translate-x-full','opacity-0','pointer-events-none');setTimeout(function(){s.classList.add('hidden');},300);}if(o){o.classList.remove('opacity-100','pointer-events-auto');o.classList.add('opacity-0','pointer-events-none');setTimeout(function(){o.classList.add('hidden');},300);}document.body.style.overflow='';">
</div>

<div className="hidden md:hidden fixed top-0 left-0 w-[80%] max-w-[320px] h-screen bg-white z-[101] flex flex-col -translate-x-full opacity-0 pointer-events-none transition-all duration-300 overflow-y-auto text-left" id="mobile-menu-sidebar" onclick="event.stopPropagation()">

<div className="flex items-center justify-between border-b border-gray-200 p-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight font-display">Menu</h2>
<button aria-label="Close menu" className="p-2 -mr-2 text-slate-900 hover:text-[#E85424] transition-colors cursor-pointer" onclick="event.stopPropagation();let s=document.getElementById('mobile-menu-sidebar'),o=document.getElementById('mobile-menu-overlay');if(s){s.classList.remove('translate-x-0','opacity-100','pointer-events-auto');s.classList.add('-translate-x-full','opacity-0','pointer-events-none');setTimeout(function(){s.classList.add('hidden');},300);}if(o){o.classList.remove('opacity-100','pointer-events-auto');o.classList.add('opacity-0','pointer-events-none');setTimeout(function(){o.classList.add('hidden');},300);}document.body.style.overflow='';">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="flex flex-col py-2 border-b border-gray-200">
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/story-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Story</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/menu-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Menu</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/location-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Find Us</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/catering-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Catering</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/contact-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Contact</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/feedback-review">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Reviews</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
</div>

<div className="px-6 py-8 mt-auto">
<a className="flex items-center justify-center w-full uppercase transition-colors hover:bg-[#E85424] text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg py-3 shadow-lg cursor-pointer" href="https://order.rollicious.co.nz/">
          Order Online
        </a>
</div>
</div>

    </>
  );
}
