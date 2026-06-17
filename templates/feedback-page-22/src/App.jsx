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
</header><section className="sm:px-8 sm:pt-40 sm:pb-24 bg-[#F7F4EB] border-black/5 border-t pt-20 pr-4 pb-32 pl-4 relative" id="feedback-section">
<div className="max-w-5xl mr-auto ml-auto">
<h2 className="leading-tight sm:text-5xl text-4xl font-semibold text-[#234220] tracking-tight text-center max-w-2xl mt-16 mr-auto mb-16 ml-auto">
    How was your recent experience with Rollicious?
  </h2>
<div className="grid sm:grid-cols-2 gap-6 sm:gap-10 max-w-3xl mx-auto">

<a className="flex flex-col items-center justify-center gap-2 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group bg-white border-black/5 border rounded-[2rem] pt-14 pr-10 pb-12 pl-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" href="/review-page">
<div className="flex flex-col items-center mb-6">
<div className="flex gap-1.5 justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
<svg className="lucide lucide-star translate-y-1" fill="#F3D86D" height="24" stroke="#F3D86D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star" fill="#F3D86D" height="32" stroke="#F3D86D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star translate-y-1" fill="#F3D86D" height="24" stroke="#F3D86D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div className="w-24 h-24 rounded-full bg-[#234220]/10 flex items-center justify-center text-[#234220] relative transition-transform group-hover:scale-105 duration-300">
<svg className="lucide lucide-thumbs-up" fill="currentColor" height="44" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12"></path>
<path className="" d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
</svg>
</div>
</div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight text-center">Great Experience!</h3>
</a>

<a className="bg-white rounded-[2rem] pt-14 pr-10 pb-12 pl-10 flex flex-col items-center justify-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-black/5 group" href="/feedback-page">
<div className="flex flex-col items-center mb-6 pt-6">
<div className="w-24 h-24 rounded-full bg-[#E85424]/10 flex items-center justify-center text-[#E85424] relative transition-transform group-hover:scale-105 duration-300">
<svg className="lucide lucide-thumbs-down" fill="currentColor" height="44" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M17 14V2"></path>
<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z">
</path>
</svg>
<div className="absolute -bottom-3 -right-3 bg-white rounded-full p-1.5 shadow-sm transition-transform group-hover:scale-110 duration-300 delay-75">
<div className="bg-[#E85424] rounded-full w-10 h-10 flex items-center justify-center text-white">
<svg className="lucide lucide-frown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
</div>
</div>
</div>
</div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight text-center">Could Be Better!</h3>
</a>
</div>
</div>
</section><header className="fixed flex z-50 pr-4 pl-4 top-4 right-0 left-0 justify-center">
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
</header><footer className="text-white bg-[#f7f4eb] border-white/10 border-t pt-20 pb-10">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row gap-12 mb-20 gap-x-12 gap-y-12 justify-between items-center md:items-start text-center md:text-left">
<div className="max-w-sm flex flex-col items-center md:items-start">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center w-auto object-cover pt-4 pb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6aaace39-7e06-49d7-b37b-924c6e273acf_320w.png"/>
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
<div className="flex flex-col items-center md:items-start">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
        information</h4>
<ul className="text-sm text-white/60 space-y-3 flex flex-col items-center md:items-start">
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/story-page">Our Story</a>
</li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/menu-page">Our Menu</a>
</li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="https://order.rollicious.co.nz/">Order Online</a></li>
<li className="">
<a className="text-[#E85424] hover:text-[#E85424] transition-colors" href="/catering-page">
            Catering
          </a>
</li>
</ul>
</div>
<div className="flex flex-col items-center md:items-start">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
        Get in
        touch</h4>
<ul className="space-y-3 text-sm text-white/60 flex flex-col items-center md:items-start">
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
