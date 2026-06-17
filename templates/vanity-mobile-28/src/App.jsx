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
        lucide.createIcons();

        // Mobile Menu Toggle logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
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
      

<nav className="fixed w-full top-0 z-50 bg-[#FCFBF8]/90 backdrop-blur-md border-b border-gray-100/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative">
<svg className="text-black group-hover:-rotate-3 transition-transform duration-300" fill="none" height="40" viewbox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M14 16C14 12 18 10 24 10C30 10 34 12 34 16C34 20 30 22 24 22C18 22 14 20 14 16Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M18 14H18.02" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M30 14H30.02" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M24 18V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M12 28C12 28 14 36 24 36C34 36 36 28 36 28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M8 18C6 20 4 24 6 28C8 32 12 32 12 32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M40 18C42 20 44 24 42 28C40 32 36 32 36 32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight leading-none">VANITY</span>
<span className="text-[0.65rem] font-medium tracking-[0.2em] text-slate-500 mt-1">GROOMING ON WHEELS</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-base font-medium flex flex-col items-center group" href="#">
<span>Home</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8EA66E] mt-1 opacity-100"></div>
</a>
<a className="text-base font-medium text-slate-600 hover:text-black transition-colors flex flex-col items-center group" href="#how-it-works">
<span>How It Works</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8EA66E] mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
<a className="text-base font-medium text-slate-600 hover:text-black transition-colors flex flex-col items-center group" href="#services">
<span>Services</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8EA66E] mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
<a className="text-base font-medium text-slate-600 hover:text-black transition-colors flex flex-col items-center group" href="#about">
<span>About Us</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8EA66E] mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
<a className="text-base font-medium text-slate-600 hover:text-black transition-colors flex flex-col items-center group" href="#faq">
<span>FAQ</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8EA66E] mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-3 bg-[#0F0F0F] text-white pl-6 pr-2 py-2 rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95" href="#book">
<span className="text-base font-medium">Book Now</span>
<div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
<button className="lg:hidden p-2 text-slate-600 hover:text-black" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-[#FCFBF8] border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-black" href="#">Home</a>
<a className="text-lg font-medium text-slate-600" href="#how-it-works">How It Works</a>
<a className="text-lg font-medium text-slate-600" href="#services">Services</a>
<a className="text-lg font-medium text-slate-600" href="#about">About Us</a>
<a className="text-lg font-medium text-slate-600" href="#faq">FAQ</a>
<a className="mt-4 flex items-center justify-center gap-3 bg-[#0F0F0F] text-white py-4 rounded-full" href="#book">
<span className="text-base font-medium">Book Now</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 flex flex-col items-start">
<div className="inline-flex items-center gap-2 bg-[#EAF1E0] text-[#485C32] px-4 py-2 rounded-full mb-8">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base font-medium">We come to you!</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[1.05] text-[#0F0F0F] relative">
                        Grooming<br/>
                        made easy.<br/>
                        For <span className="text-[#8EA66E]">happy dogs.</span>

<div className="absolute top-0 right-[-40px] text-slate-300 hidden md:block">
<svg fill="none" height="40" viewbox="0 0 40 40" width="40">
<path d="M10 30L20 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M30 10L20 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</h1>
<p className="mt-8 text-xl text-slate-600 max-w-md leading-relaxed font-medium">
                        Our mobile grooming van brings the spa experience directly to your driveway.
                    </p>

<div className="flex flex-wrap items-center gap-6 mt-10">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#EAE0F5] flex items-center justify-center text-[#7C5CA5]">
<i className="w-6 h-6" data-lucide="bath" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium leading-tight max-w-[100px]">Stress-free<br/>experience</span>
</div>
<div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#FDE8C6] flex items-center justify-center text-[#B08035]">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium leading-tight max-w-[100px]">Premium &amp;<br/>gentle care</span>
</div>
<div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#D6EAF4] flex items-center justify-center text-[#4A8DB7]">
<i className="w-6 h-6" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium leading-tight max-w-[100px]">Happy dog<br/>guaranteed</span>
</div>
</div>

<div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
<a className="inline-flex items-center gap-4 bg-[#0F0F0F] text-white pl-8 pr-3 py-3 rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 group shadow-xl shadow-black/5" href="#book">
<span className="text-lg font-medium">Book Your Grooming</span>
<div className="bg-[#DAE8CA] text-[#485C32] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#C9DFB2] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-[#FCFBF8] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-[#FCFBF8] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-12 h-12 rounded-full border-2 border-[#FCFBF8] bg-[#D4E1C6] flex items-center justify-center text-sm font-semibold text-[#485C32]">
                                    50K+
                                </div>
</div>
<div className="flex flex-col">
<span className="text-base font-medium leading-tight">Pawsitively happy</span>
<span className="text-base font-medium leading-tight text-slate-500 flex items-center gap-1">customers <i className="w-4 h-4 text-rose-400" data-lucide="heart" strokeWidth="1.5"></i></span>
</div>
</div>
</div>
</div>

<div className="relative h-[600px] w-full mt-10 lg:mt-0 flex justify-center items-end hidden md:flex">

<div className="absolute right-0 top-0 w-[450px] h-[550px] bg-[#DECEF5] rounded-t-full rounded-bl-[120px] -z-20"></div>
<div className="absolute right-[15%] top-[5%] w-[380px] h-[380px] bg-[#FFCE65] rounded-full -z-10"></div>
<div className="absolute bottom-[-20px] left-[-10%] right-[-10%] h-[180px] bg-[#D4E1C6] rounded-t-[50%] -z-10 overflow-hidden">

<div className="absolute bottom-6 right-20 text-[#6B7D52] opacity-80">
<svg fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="60">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
<path d="M19 10v4"></path>
<path d="M21 12c-1.5 0-2.5 1-3 2.5-1-2-3-2-4 0-.5-1.5-1.5-2.5-3-2.5"></path>
</svg>
</div>
</div>

<div className="absolute top-[10%] left-[10%] w-32 h-32 text-slate-800/10">
<svg height="100%" viewbox="0 0 100 100" width="100%">
<pattern height="20" id="dots" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="currentColor" r="2"></circle>
</pattern>
<rect fill="url(#dots)" height="100%" width="100%" x="0" y="0"></rect>
</svg>
</div>

<div className="absolute top-10 right-20 text-white/50 w-24 h-12">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 20">
<path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10"></path>
</svg>
</div>

<div className="absolute bottom-10 left-10 w-64 h-24 -rotate-6">
<svg height="100%" viewbox="0 0 200 50" width="100%">
<path d="M10,40 Q50,10 100,30 T190,20" fill="transparent" id="curve" stroke="transparent"></path>
<text className="text-base font-medium text-slate-800 tracking-wide" width="200">
<textpath href="#curve" startoffset="0%">
                                    We come to you
                                </textpath>
</text>
</svg>
</div>


<div className="relative w-[90%] h-[110%] flex justify-center items-end bottom-4">

<img alt="White Van" className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-2xl opacity-90 mix-blend-multiply filter grayscale opacity-20" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Happy Golden Doodle" className="relative z-20 w-[60%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] mb-[-20px]" src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-sm font-medium text-slate-400 tracking-wider uppercase mb-8">Trusted by pet parents &amp; recommended by</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">

<svg fill="currentColor" height="30" viewbox="0 0 120 30" width="120"><path d="M10 15a5 5 0 1 0 10 0 5 5 0 0 0-10 0zm25 0h20v5H35v-5zm35 0a5 5 0 1 0 10 0 5 5 0 0 0-10 0zm25 0h20v5H95v-5z"></path></svg>
<svg fill="currentColor" height="30" viewbox="0 0 100 30" width="100"><path d="M5 25L15 5h10L15 25H5zm30 0V5h10v15h15v5H35zm40 0a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"></path></svg>
<svg fill="currentColor" height="30" viewbox="0 0 140 30" width="140"><path d="M10 5v20h5V15h10V5H10zm30 0v20h20V5H40zm10 5h-5v10h5V10zm30-5v20h5V5H80zm30 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path></svg>
<svg fill="currentColor" height="30" viewbox="0 0 110 30" width="110"><path d="M5 5h30v5H10v20H5V5zm45 0h10v20H50V5zm30 0h30v5H85v20h-5V5z"></path></svg>
</div>
</div>
</section>

<section className="py-32 bg-[#FCFBF8]" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F]">Simple process.<br/>Stress-free pups.</h2>
<p className="mt-6 text-xl text-slate-600 font-medium">We've streamlined the grooming process so you and your best friend can relax.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10"></div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
<div className="w-16 h-16 rounded-2xl bg-[#EAE0F5] text-[#7C5CA5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="calendar-check" strokeWidth="1.5"></i>
</div>
<span className="absolute top-8 right-8 text-4xl font-semibold text-gray-100">01</span>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Book Online</h3>
<p className="text-base text-slate-600 font-medium">Choose your package and select a time that fits perfectly into your schedule.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
<div className="w-16 h-16 rounded-2xl bg-[#FDE8C6] text-[#B08035] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<span className="absolute top-8 right-8 text-4xl font-semibold text-gray-100">02</span>
<h3 className="text-2xl font-semibold tracking-tight mb-3">We Arrive</h3>
<p className="text-base text-slate-600 font-medium">Our state-of-the-art mobile spa pulls right up to your driveway.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
<div className="w-16 h-16 rounded-2xl bg-[#D6EAF4] text-[#4A8DB7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<span className="absolute top-8 right-8 text-4xl font-semibold text-gray-100">03</span>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Pampering</h3>
<p className="text-base text-slate-600 font-medium">One-on-one attention with warm water, premium products, and gentle hands.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
<div className="w-16 h-16 rounded-2xl bg-[#EAF1E0] text-[#485C32] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<span className="absolute top-8 right-8 text-4xl font-semibold text-gray-100">04</span>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Happy Dog</h3>
<p className="text-base text-slate-600 font-medium">Your pup returns to your door looking fresh, smelling great, and feeling happy.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F]">Tailored care for<br/>every tail.</h2>
<p className="mt-6 text-xl text-slate-600 font-medium">Transparent pricing. No hidden fees. Just pure pampering.</p>
</div>
<div className="flex items-center gap-3 bg-gray-100 p-1.5 rounded-full">
<button className="px-6 py-2.5 bg-white shadow-sm rounded-full text-base font-semibold text-black">Small Dogs</button>
<button className="px-6 py-2.5 rounded-full text-base font-semibold text-slate-500 hover:text-black transition-colors">Large Dogs</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center">

<div className="bg-[#FCFBF8] rounded-[2rem] p-8 md:p-10 border border-gray-100">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Bath &amp; Brush</h3>
<p className="text-base text-slate-500 font-medium mb-8">Perfect for a quick refresh between full grooms.</p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight">$75</span>
<span className="text-slate-500 font-medium">/starting</span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Warm hydro-massage bath</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Premium shampoo &amp; conditioner</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Blow dry &amp; thorough brush out</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Nail trim &amp; ear cleaning</li>
</ul>
<a className="block w-full py-4 text-center rounded-full border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white transition-colors" href="#book">Select Package</a>
</div>

<div className="bg-[#0F0F0F] text-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFCE65] text-black px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                        Most Popular
                    </div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">The Full Spa</h3>
<p className="text-base text-gray-400 font-medium mb-8">The ultimate makeover for your furry friend.</p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight">$110</span>
<span className="text-gray-400 font-medium">/starting</span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#FFCE65]" data-lucide="check" strokeWidth="2"></i> Everything in Bath &amp; Brush</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#FFCE65]" data-lucide="check" strokeWidth="2"></i> Full body customized haircut</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#FFCE65]" data-lucide="check" strokeWidth="2"></i> Paw pad trim &amp; sanitary trim</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#FFCE65]" data-lucide="check" strokeWidth="2"></i> Breath freshener spray</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#FFCE65]" data-lucide="check" strokeWidth="2"></i> Bow or bandana accessory</li>
</ul>
<a className="block w-full py-4 text-center rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors" href="#book">Select Package</a>
</div>

<div className="bg-[#FCFBF8] rounded-[2rem] p-8 md:p-10 border border-gray-100">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Puppy First Trim</h3>
<p className="text-base text-slate-500 font-medium mb-8">A gentle introduction to grooming (under 6 mo).</p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight">$60</span>
<span className="text-slate-500 font-medium">/flat</span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Gentle introductory bath</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Face, feet, and tail trim</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Lots of treats and praise</li>
<li className="flex items-center gap-3 text-base font-medium"><i className="w-5 h-5 text-[#8EA66E]" data-lucide="check" strokeWidth="2"></i> Grooming report card</li>
</ul>
<a className="block w-full py-4 text-center rounded-full border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white transition-colors" href="#book">Select Package</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full bg-[#222] rounded-l-[100px] -z-10 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-[#FFCE65] rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
<img alt="Clean Grooming Interior" className="relative rounded-3xl object-cover h-[500px] w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -bottom-10 -right-10 bg-white text-black p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
<div className="flex items-center gap-4 mb-2">
<div className="w-10 h-10 rounded-full bg-[#EAF1E0] flex items-center justify-center text-[#485C32]">
<i className="w-5 h-5" data-lucide="thermometer" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-lg">Climate Controlled</span>
</div>
<p className="text-sm text-slate-500 font-medium">Perfect temperature year-round for maximum comfort.</p>
</div>
</div>
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">A luxury spa,<br/>parked outside.</h2>
<p className="text-xl text-gray-400 font-medium mb-12">Our vans are custom-built sanctuaries designed exclusively for your dog's safety and comfort.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#FFCE65]" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2">Heated Hydrobath</h4>
<p className="text-base text-gray-400 font-medium">Warm water massages the coat, removing deep dirt and relaxing anxious muscles.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#DECEF5]" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2">Quiet Dry Technology</h4>
<p className="text-base text-gray-400 font-medium">No loud, scary noises. We use variable speed dryers to keep your pet calm.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-[#8EA66E]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2">Hospital-Grade Sanitization</h4>
<p className="text-base text-gray-400 font-medium">Tools and surfaces are meticulously sterilized between every single appointment.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FCFBF8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F]">Why choose Vanity?</h2>
<p className="mt-6 text-xl text-slate-600 font-medium">Because your best friend deserves better than a crowded, noisy salon.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-800" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Saves You Time</h4>
<p className="text-base text-slate-600 font-medium">No more car rides, no more waiting around. We come to you and get straight to work.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-800" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Cage-Free Environment</h4>
<p className="text-base text-slate-600 font-medium">Your dog is never placed in a cage or crate. They have our undivided attention the entire time.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-800" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">One-on-One Attention</h4>
<p className="text-base text-slate-600 font-medium">No other dogs, no distractions. Just your pet and their dedicated professional groomer.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-800" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Less Mess at Home</h4>
<p className="text-base text-slate-600 font-medium">Keep your bathroom clean. We handle all the water, fur, and nail clippings in our van.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm lg:col-span-2 bg-gradient-to-br from-[#EAE0F5] to-[#FCFBF8]">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h4 className="text-2xl font-semibold tracking-tight mb-3">Expert Certified Groomers</h4>
<p className="text-base text-slate-700 font-medium mb-6">Our team isn't just pet lovers; they are highly trained, certified professionals who understand breed-specific cuts, skin conditions, and dog psychology.</p>
<a className="text-black font-semibold border-b border-black pb-0.5 hover:text-[#7C5CA5] hover:border-[#7C5CA5] transition-colors inline-flex items-center gap-2" href="#about">Meet the team <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<img alt="Groomer" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F] text-center mb-20">Tales of wagging tails.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#FCFBF8] p-8 rounded-3xl flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#FFCE65] mb-6">
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
</div>
<p className="text-lg text-slate-800 font-medium mb-8">"My Golden Retriever used to shake violently on the way to the salon. With Vanity, he just walks out the front door and wags his tail when he sees the van. Life changing!"</p>
</div>
<div className="flex items-center gap-4">
<img alt="Dog" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-base font-semibold text-black">Sarah &amp; Buster</p>
<p className="text-sm font-medium text-slate-500">Golden Retriever</p>
</div>
</div>
</div>

<div className="bg-[#FCFBF8] p-8 rounded-3xl flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#FFCE65] mb-6">
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
</div>
<p className="text-lg text-slate-800 font-medium mb-8">"The convenience is unmatched. I work from home, so they pull up, text me, take Bella, and an hour later she's back looking like a show dog. The cut is always perfect."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Dog" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-base font-semibold text-black">Michael &amp; Bella</p>
<p className="text-sm font-medium text-slate-500">Poodle Mix</p>
</div>
</div>
</div>

<div className="bg-[#FCFBF8] p-8 rounded-3xl flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#FFCE65] mb-6">
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="2"></i>
</div>
<p className="text-lg text-slate-800 font-medium mb-8">"Highly recommend for older dogs. My senior pug has arthritis and salons are too stressful. The groomer was incredibly gentle and took her time. Very professional."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Dog" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-base font-semibold text-black">Emily &amp; Frank</p>
<p className="text-sm font-medium text-slate-500">Pug</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FCFBF8]" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0F0F0F] text-center mb-16">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-gray-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-slate-900">
                        Do I need to provide power or water?
                        <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-2 text-slate-500 group-open:bg-[#EAF1E0] group-open:text-[#485C32] transition-colors">
<i className="h-5 w-5 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-5 w-5 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 font-medium leading-relaxed">
                        Nope! Our vans are fully self-contained. We carry our own fresh water supply, water heaters, and power generators. We just need a safe place to park on a relatively flat surface.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-gray-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-slate-900">
                        Can I stay in the van with my dog?
                        <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-2 text-slate-500 group-open:bg-[#EAF1E0] group-open:text-[#485C32] transition-colors">
<i className="h-5 w-5 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-5 w-5 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 font-medium leading-relaxed">
                        For safety and space reasons, we ask that owners do not stay in the van during the groom. Dogs often behave much better and are less anxious when their owners aren't present. We promise to treat them like our own!
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-gray-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-slate-900">
                        How long does an appointment take?
                        <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-2 text-slate-500 group-open:bg-[#EAF1E0] group-open:text-[#485C32] transition-colors">
<i className="h-5 w-5 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-5 w-5 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 font-medium leading-relaxed">
                        Typically, a full groom takes about 1 to 2 hours depending on the size of your dog, their coat condition, and their temperament. We will give you a specific estimate when we arrive.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-gray-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-slate-900">
                        What areas do you serve?
                        <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-2 text-slate-500 group-open:bg-[#EAF1E0] group-open:text-[#485C32] transition-colors">
<i className="h-5 w-5 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="h-5 w-5 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 font-medium leading-relaxed">
                        We currently serve the greater metropolitan area and surrounding suburbs within a 20-mile radius. Enter your zip code on our booking page to confirm we cover your specific location.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[#DECEF5] -z-20"></div>

<div className="absolute inset-0 opacity-10 -z-10" style={{backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#0F0F0F] mb-8">Ready to treat your<br/>dog to a spa day?</h2>
<p className="text-2xl text-slate-800 font-medium mb-12 max-w-2xl mx-auto">Join thousands of happy pet parents who have switched to the convenience of Vanity mobile grooming.</p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-6 py-4 rounded-full text-lg border-2 border-transparent focus:border-black focus:outline-none shadow-xl shadow-black/5" placeholder="Enter your Zip Code" type="text"/>
<button className="bg-[#0F0F0F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-black/5 whitespace-nowrap" type="button">Check Availability</button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<svg className="text-black" fill="none" height="32" viewbox="0 0 48 48" width="32">
<path d="M14 16C14 12 18 10 24 10C30 10 34 12 34 16C34 20 30 22 24 22C18 22 14 20 14 16Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M18 14H18.02" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
<path d="M30 14H30.02" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
<path d="M24 18V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M12 28C12 28 14 36 24 36C34 36 36 28 36 28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
<span className="text-xl font-semibold tracking-tight">VANITY</span>
</a>
<p className="text-base text-slate-500 font-medium mb-8 max-w-sm">Premium mobile dog grooming serving the community with love, care, and convenience.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h5 className="text-base font-semibold text-black mb-6">Company</h5>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">About Us</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Service Areas</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold text-black mb-6">Services</h5>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Bath &amp; Brush</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Full Spa Groom</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Puppy Trim</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold text-black mb-6">Legal</h5>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-base text-slate-500 hover:text-black font-medium transition-colors" href="#">Cancellation Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500 font-medium">© 2024 Vanity Grooming On Wheels. All rights reserved.</p>
<div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    Designed with <i className="w-4 h-4 text-rose-400" data-lucide="heart" strokeWidth="1.5"></i> for happy dogs.
                </div>
</div>
</div>
</footer>


    </>
  );
}
