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



        // Initialize Lucide Icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('border-neutral-200/60', 'border-neutral-200');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('border-neutral-200', 'border-neutral-200/60');
            }
        });

        // Custom FAQ Accordion Logic
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');
                
                // Close others
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-content').classList.add('hidden');
                        otherItem.querySelector('.faq-icon').classList.remove('rotate-45');
                    }
                });

                // Toggle current
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-45');
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F4F3ED]/80 backdrop-blur-md border-b border-neutral-200/60 transition-all duration-300" id="navbar">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<i className="w-6 h-6 text-black group-hover:rotate-90 transition-transform duration-500" data-lucide="asterisk"></i>
<span className="text-base font-medium tracking-tight">NOMADNEST</span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors uppercase tracking-widest" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors uppercase tracking-widest flex items-center gap-1.5" href="#solutions">
                    Solutions <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
</a>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors uppercase tracking-widest" href="#about">About</a>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors uppercase tracking-widest" href="#resources">Resources</a>
</div>

<div className="hidden lg:flex items-center gap-6">
<div className="w-px h-6 bg-neutral-300"></div>
<a className="bg-black text-white px-6 py-3 text-xs font-medium uppercase tracking-widest flex items-center gap-3 hover:bg-neutral-800 transition-colors" href="#cta">
<span className="w-1.5 h-1.5 rounded-full bg-[#E2FF4A] animate-pulse"></span>
                    Plan My Future
                </a>
</div>

<button className="lg:hidden text-black p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-[#F4F3ED] border-b border-neutral-200 p-6 flex flex-col gap-6" id="mobile-menu">
<a className="text-base font-medium text-black uppercase tracking-widest" href="#how-it-works">How It Works</a>
<a className="text-base font-medium text-black uppercase tracking-widest" href="#solutions">Solutions</a>
<a className="text-base font-medium text-black uppercase tracking-widest" href="#about">About</a>
<a className="text-base font-medium text-black uppercase tracking-widest" href="#resources">Resources</a>
<a className="bg-black text-white px-6 py-4 text-sm font-medium uppercase tracking-widest flex items-center justify-center gap-3 mt-4" href="#cta">
<span className="w-2 h-2 rounded-full bg-[#E2FF4A]"></span>
                Plan My Future
            </a>
</div>
</nav>
<main className="pt-20">

<section className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 pt-16 lg:pt-28 pb-16 lg:pb-0 min-h-[85vh] flex flex-col justify-between">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center flex-grow">

<div className="max-w-2xl z-10">
<div className="inline-flex items-center gap-2 border border-neutral-300 px-3 py-1.5 rounded-full mb-8">
<i className="w-3.5 h-3.5 text-neutral-500" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-widest">AI Financial Plan</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-medium tracking-tight text-neutral-950 mb-8">
                        Financial clarity.<br/>
                        Freedom to live<br/>
<span className="font-serif italic font-normal highlight-yellow text-neutral-900 pr-2">life anywhere.</span>
</h1>
<p className="text-lg lg:text-xl text-neutral-600 mb-12 max-w-lg leading-relaxed">
                        AI-powered financial plans for expats &amp; digital nomads. Optimize taxes. Grow wealth. Stay borderless.
                    </p>
<div className="flex flex-wrap items-center gap-6">
<a className="bg-black text-white px-7 py-4 text-xs font-medium uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-800 transition-all hover:pr-5 group" href="#builder">
<i className="w-4 h-4 text-[#E2FF4A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right"></i>
                            Build My Plan
                        </a>
<a className="text-xs font-medium text-neutral-900 uppercase tracking-widest flex items-center gap-2 hover:text-neutral-500 transition-colors" href="#how-it-works">
                            See How It Works
                            <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end select-none">

<div className="absolute inset-0 bg-dots opacity-30 mix-blend-multiply"></div>
<div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">

<div className="absolute w-full h-full border border-neutral-300/60 rounded-full"></div>
<div className="absolute w-[70%] h-[70%] border border-neutral-300/60 rounded-full"></div>
<div className="absolute w-[40%] h-[40%] border border-neutral-300/80 rounded-full border-dashed"></div>

<div className="absolute w-full h-px bg-neutral-200/50"></div>
<div className="absolute h-full w-px bg-neutral-200/50"></div>

<div className="relative w-24 h-24 md:w-32 md:h-32 bg-[#E2FF4A] rounded-full flex items-center justify-center shadow-lg z-20">
<i className="w-12 h-12 md:w-16 md:h-16 text-black" data-lucide="asterisk"></i>
</div>

<div className="absolute w-2 h-2 bg-black rounded-full top-[15%] left-[25%] z-10"></div>
<div className="absolute w-2 h-2 bg-black rounded-full bottom-[20%] right-[35%] z-10"></div>
<div className="absolute w-1.5 h-1.5 bg-neutral-400 rounded-full top-[10%] right-[40%]"></div>

<div className="absolute top-1/4 right-[5%] lg:-right-4 bg-white/90 backdrop-blur-sm border border-neutral-100 p-3 rounded-xl shadow-sm flex items-center gap-3 z-30 transform hover:scale-105 transition-transform">
<div className="w-8 h-8 rounded-full bg-[#E2FF4A]/20 flex items-center justify-center">
<i className="w-4 h-4 text-green-700" data-lucide="pie-chart"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-black">Optimize</p>
<p className="text-[10px] text-neutral-500">Tax Efficiency</p>
</div>
</div>
<div className="absolute bottom-1/3 left-0 lg:-left-12 bg-white/90 backdrop-blur-sm border border-neutral-100 p-3 rounded-xl shadow-sm flex items-center gap-3 z-30 transform hover:scale-105 transition-transform">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<i className="w-4 h-4 text-black" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-black">Grow</p>
<p className="text-[10px] text-neutral-500">Global Wealth</p>
</div>
</div>
<div className="absolute bottom-[10%] right-[15%] bg-white/90 backdrop-blur-sm border border-neutral-100 p-3 rounded-xl shadow-sm flex items-center gap-3 z-30 transform hover:scale-105 transition-transform">
<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
<i className="w-4 h-4 text-amber-600" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-black">Protect</p>
<p className="text-[10px] text-neutral-500">What Matters</p>
</div>
</div>

<span className="absolute top-0 right-1/4 text-[9px] font-medium tracking-[0.2em] text-neutral-400 uppercase -translate-y-full">Freedom</span>
<span className="absolute bottom-0 right-1/4 text-[9px] font-medium tracking-[0.2em] text-neutral-400 uppercase translate-y-full">Future</span>
<span className="absolute left-0 top-1/2 text-[9px] font-medium tracking-[0.2em] text-neutral-400 uppercase -translate-x-full -rotate-90">Now</span>
<span className="absolute right-0 top-1/2 text-[9px] font-medium tracking-[0.2em] text-neutral-400 uppercase translate-x-full rotate-90">Anywhere</span>

<div className="absolute top-0 right-0 w-2 h-2 grid grid-cols-2 grid-rows-2 gap-0.5 opacity-30">
<div className="w-0.5 h-0.5 bg-black"></div><div className="w-0.5 h-0.5 bg-black"></div>
<div className="w-0.5 h-0.5 bg-black"></div><div className="w-0.5 h-0.5 bg-black"></div>
</div>
<div className="absolute bottom-0 right-0 w-2 h-2 grid grid-cols-2 grid-rows-2 gap-0.5 opacity-30">
<div className="w-0.5 h-0.5 bg-black"></div><div className="w-0.5 h-0.5 bg-black"></div>
<div className="w-0.5 h-0.5 bg-black"></div><div className="w-0.5 h-0.5 bg-black"></div>
</div>
</div>
</div>
</div>

<div className="border-t border-b border-neutral-300 mt-12 mb-0">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 lg:divide-x divide-neutral-300">
<div className="p-6 flex items-center gap-4">
<i className="w-6 h-6 text-neutral-400" data-lucide="globe"></i>
<span className="text-xs font-medium text-neutral-800 uppercase tracking-widest leading-relaxed">Built for a<br/>borderless life</span>
</div>
<div className="p-6 flex flex-col justify-center">
<span className="text-2xl lg:text-3xl font-medium tracking-tight text-black mb-1">150+</span>
<span className="text-base text-neutral-500">Countries covered</span>
</div>
<div className="p-6 flex flex-col justify-center">
<span className="text-2xl lg:text-3xl font-medium tracking-tight text-black mb-1">10K+</span>
<span className="text-base text-neutral-500">Digital nomads<br/>planned for</span>
</div>
<div className="p-6 flex flex-col justify-center">
<span className="text-2xl lg:text-3xl font-medium tracking-tight text-black mb-1">97%</span>
<span className="text-base text-neutral-500">Clients feel more<br/>in control</span>
</div>
<div className="p-6 flex items-start gap-4 col-span-1 md:col-span-2 lg:col-span-1">
<img alt="Liam" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-base text-neutral-800 italic font-serif leading-snug mb-2">"Finally, a financial plan that fits my lifestyle."</p>
<p className="text-xs text-neutral-500">- Liam, Full-time traveler</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-neutral-200">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<p className="text-center text-sm font-medium tracking-widest uppercase text-neutral-400 mb-10">Trusted by remote workers from</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-2xl font-semibold tracking-tighter">Deel.</h3>
<h3 className="text-2xl font-serif italic">Stripe</h3>
<h3 className="text-2xl font-medium tracking-tight flex items-center gap-1"><i className="w-5 h-5 fill-current" data-lucide="triangle"></i> Vercel</h3>
<h3 className="text-2xl font-bold tracking-tighter">Remote</h3>
<h3 className="text-xl font-medium uppercase tracking-widest border border-current px-2 py-0.5">Wise</h3>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="how-it-works">
<div className="max-w-screen-xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">The Process</h2>
<h3 className="text-4xl lg:text-5xl font-medium tracking-tight text-black mb-6">From chaos to clarity in three simple steps.</h3>
<p className="text-lg text-neutral-600">Our AI analyzes your unique multi-jurisdictional footprint to output a legally sound, optimized financial roadmap.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-neutral-200"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#F4F3ED] rounded-full flex items-center justify-center mb-8 relative z-10 border-4 border-white group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-black" data-lucide="map-pin"></i>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E2FF4A] rounded-full text-xs flex items-center justify-center font-medium">1</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-black mb-3">Map Your Footprint</h4>
<p className="text-base text-neutral-500 leading-relaxed">Input your citizenship, residencies, and income sources. We handle the complex overlapping tax treaties.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#F4F3ED] rounded-full flex items-center justify-center mb-8 relative z-10 border-4 border-white group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-black" data-lucide="cpu"></i>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E2FF4A] rounded-full text-xs flex items-center justify-center font-medium">2</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-black mb-3">AI Engine Analysis</h4>
<p className="text-base text-neutral-500 leading-relaxed">Our proprietary algorithm cross-references thousands of tax codes to find your optimal structural setup.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-8 relative z-10 border-4 border-white group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-[#E2FF4A]" data-lucide="file-check-2"></i>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E2FF4A] rounded-full text-xs flex items-center justify-center font-medium">3</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-black mb-3">Execute &amp; Grow</h4>
<p className="text-base text-neutral-500 leading-relaxed">Receive a step-by-step blueprint. Open the right accounts, file correctly, and start compounding your wealth.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-50 border-t border-neutral-200" id="solutions">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="mb-16">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-black mb-6 max-w-2xl">Everything you need to master borderless finance.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">

<div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col justify-between group overflow-hidden relative hover:border-neutral-300 transition-colors">
<div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-[#E2FF4A]/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
<div>
<i className="w-6 h-6 text-neutral-800 mb-6" data-lucide="scale"></i>
<h3 className="text-2xl font-medium tracking-tight text-black mb-3">Tax Optimization Engine</h3>
<p className="text-base text-neutral-500 max-w-md">Stop paying double taxes. Discover legal frameworks like the FEIE, Non-Habitual Resident programs, and territorial tax systems applicable to your profile.</p>
</div>

<div className="mt-8 bg-[#F4F3ED] rounded-xl p-4 border border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-xs">🇺🇸</div>
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-right"></i>
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-xs">🇦🇪</div>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Estimated Savings</p>
<p className="text-lg font-medium text-green-600">+$24,500/yr</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-300 transition-colors">
<div>
<i className="w-6 h-6 text-neutral-800 mb-6" data-lucide="landmark"></i>
<h3 className="text-2xl font-medium tracking-tight text-black mb-3">Offshore Banking Setup</h3>
<p className="text-base text-neutral-500">Recommendations for multi-currency accounts that won't freeze you out when you change borders.</p>
</div>
<ul className="space-y-3 mt-6">
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-[#A8CC10]" data-lucide="check"></i> Zero foreign transaction fees</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-[#A8CC10]" data-lucide="check"></i> Hold 40+ currencies</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-[#A8CC10]" data-lucide="check"></i> Remote account opening</li>
</ul>
</div>

<div className="bg-black rounded-2xl border border-neutral-800 p-8 flex flex-col justify-between text-white relative overflow-hidden group">
<div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-[#E2FF4A]/10 transition-colors duration-500"></div>
<div>
<i className="w-6 h-6 text-[#E2FF4A] mb-6" data-lucide="shield-alert"></i>
<h3 className="text-2xl font-medium tracking-tight mb-3">Audit Protection</h3>
<p className="text-base text-neutral-400">Generate airtight documentation. Prove your physical presence and tax residency status instantly.</p>
</div>
<div className="mt-auto">
<a className="text-sm font-medium text-[#E2FF4A] hover:text-white transition-colors flex items-center gap-1 group/link" href="#">
                                Explore Security <i className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-6">
<i className="w-6 h-6 text-neutral-800" data-lucide="line-chart"></i>
<span className="px-2.5 py-1 bg-green-100 text-green-800 text-[10px] font-medium uppercase tracking-widest rounded-full">New Feature</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-black mb-3">Global Investment Portfolios</h3>
<p className="text-base text-neutral-500 max-w-xl mb-8">Access brokerages that accept non-residents. Invest in global ETFs without punitive PFIC rules ruining your returns.</p>

<div className="w-full h-24 flex items-end gap-2 border-b border-neutral-100 pb-2">
<div className="w-1/6 bg-neutral-100 h-[30%] rounded-t-sm hover:bg-[#E2FF4A] transition-colors"></div>
<div className="w-1/6 bg-neutral-100 h-[45%] rounded-t-sm hover:bg-[#E2FF4A] transition-colors"></div>
<div className="w-1/6 bg-neutral-200 h-[40%] rounded-t-sm hover:bg-[#E2FF4A] transition-colors"></div>
<div className="w-1/6 bg-neutral-200 h-[60%] rounded-t-sm hover:bg-[#E2FF4A] transition-colors"></div>
<div className="w-1/6 bg-neutral-300 h-[85%] rounded-t-sm hover:bg-[#E2FF4A] transition-colors"></div>
<div className="w-1/6 bg-black h-[100%] rounded-t-sm relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">8.2% CAGR</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black z-0"></div>
<div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8 leading-tight">
                        Stop leaving money on the table in <span className="text-[#E2FF4A] italic font-serif">bureaucratic limbo.</span>
</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed">
                        The world is built for static citizens. Our system bridges the gap, allowing you to operate legally and efficiently across borders while compounding wealth.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5 text-white" data-lucide="check"></i>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Entity Structuring</h4>
<p className="text-sm text-neutral-400">LLCs, FZCOs, and holding companies decoded.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5 text-white" data-lucide="check"></i>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Visa &amp; Residency Tracking</h4>
<p className="text-sm text-neutral-400">Know exactly how many days you can stay without triggering tax liability.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full relative">

<div className="aspect-square w-full max-w-md mx-auto border border-neutral-800 rounded-full p-8 relative">
<div className="w-full h-full border border-neutral-700/50 rounded-full p-8 animate-[spin_60s_linear_infinite]">
<div className="w-full h-full border border-dashed border-neutral-600/30 rounded-full flex items-center justify-center">
<div className="w-32 h-32 bg-[#E2FF4A] rounded-full blur-3xl opacity-20"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] bg-neutral-900 border border-neutral-800 rounded-lg p-5 shadow-2xl">
<div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Tax Residency Status</span>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm text-white">Portugal (NHR)</span>
<span className="text-sm font-medium text-neutral-400">142 Days Left</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#E2FF4A] w-[45%] h-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F4F3ED]">
<div className="max-w-screen-xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight text-black mb-4">Nomads who took control.</h2>
<p className="text-lg text-neutral-500">Join thousands who stopped guessing and started optimizing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-700 mb-8 flex-grow leading-relaxed">"Before NomadNest, my CPA charged me $3k just to tell me he didn't understand digital nomad taxes. The AI plan gave me a clear roadmap to 0% tax legally via the UAE."</p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<img alt="Sarah" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-sm font-medium text-black">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">E-commerce Founder</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-700 mb-8 flex-grow leading-relaxed">"The FEIE calculator and day-tracking feature alone paid for the subscription 10x over. I finally feel confident opening brokerage accounts abroad."</p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<img alt="David" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-sm font-medium text-black">David Chen</p>
<p className="text-xs text-neutral-500">Freelance Developer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col lg:col-span-1 md:col-span-2 lg:col-start-3">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star"></i><i className="w-4 h-4 text-neutral-200 fill-neutral-200" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-700 mb-8 flex-grow leading-relaxed">"Incredibly thorough. It flagged a potential dual-taxation issue between Spain and the US I had no idea about. Essential tool for slow-travelers."</p>
<div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
<img alt="Elena" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-sm font-medium text-black">Elena Rodriguez</p>
<p className="text-xs text-neutral-500">Content Creator</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-t border-neutral-200" id="pricing">
<div className="max-w-screen-xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight text-black mb-6">Transparent pricing. No surprises.</h2>

<div className="inline-flex items-center gap-3 bg-neutral-100 p-1.5 rounded-full border border-neutral-200">
<button className="px-5 py-2 text-sm font-medium bg-white shadow-sm rounded-full text-black">Annually <span className="text-xs text-green-600 ml-1">-20%</span></button>
<button className="px-5 py-2 text-sm font-medium text-neutral-500 hover:text-black transition-colors rounded-full">Monthly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-neutral-200 rounded-3xl p-10 hover:shadow-xl transition-shadow duration-300 bg-white">
<h3 className="text-xl font-medium text-black mb-2">Explorer</h3>
<p className="text-sm text-neutral-500 mb-6">For freelancers and slow travelers starting out.</p>
<div className="mb-8">
<span className="text-5xl font-medium tracking-tight text-black">$29</span>
<span className="text-base text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-neutral-700"><i className="w-5 h-5 text-neutral-300" data-lucide="check"></i> AI Tax Profile Analysis</li>
<li className="flex items-center gap-3 text-base text-neutral-700"><i className="w-5 h-5 text-neutral-300" data-lucide="check"></i> Visa &amp; Days Tracker</li>
<li className="flex items-center gap-3 text-base text-neutral-700"><i className="w-5 h-5 text-neutral-300" data-lucide="check"></i> Basic Banking Guide</li>
</ul>
<a className="block w-full py-4 px-6 text-center text-sm font-medium uppercase tracking-widest text-black border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors" href="#">Start Free Trial</a>
</div>

<div className="border-2 border-black rounded-3xl p-10 relative bg-black text-white shadow-2xl transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E2FF4A] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-xl font-medium mb-2">Global Citizen</h3>
<p className="text-sm text-neutral-400 mb-6">For high-earning expats and business owners.</p>
<div className="mb-8">
<span className="text-5xl font-medium tracking-tight">$99</span>
<span className="text-base text-neutral-400">/mo</span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-white"><i className="w-5 h-5 text-[#E2FF4A]" data-lucide="check"></i> Everything in Explorer</li>
<li className="flex items-center gap-3 text-base text-white"><i className="w-5 h-5 text-[#E2FF4A]" data-lucide="check"></i> Offshore Entity Structuring</li>
<li className="flex items-center gap-3 text-base text-white"><i className="w-5 h-5 text-[#E2FF4A]" data-lucide="check"></i> Investment Portfolio Access</li>
<li className="flex items-center gap-3 text-base text-white"><i className="w-5 h-5 text-[#E2FF4A]" data-lucide="check"></i> 1-on-1 CPA Consultation (1/yr)</li>
</ul>
<a className="block w-full py-4 px-6 text-center text-sm font-medium uppercase tracking-widest bg-[#E2FF4A] text-black rounded-lg hover:bg-[#d4f531] transition-colors" href="#">Get Started Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F4F3ED] border-t border-neutral-200">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-black mb-12 text-center">Common Questions</h2>
<div className="space-y-4">

<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden faq-item cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center bg-white hover:bg-neutral-50 transition-colors">
<h4 className="text-base font-medium text-black">Does this replace my CPA?</h4>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</div>
<div className="px-6 pb-5 hidden text-base text-neutral-500 leading-relaxed faq-content">
                            Not entirely. NomadNest acts as your strategic architect. We provide the blueprint, entity structures, and residency plans. You can then hand off our airtight reports to your local CPA for the actual filing, saving you hours of consultation fees.
                        </div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden faq-item cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center bg-white hover:bg-neutral-50 transition-colors">
<h4 className="text-base font-medium text-black">Is the AI advice legally binding?</h4>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</div>
<div className="px-6 pb-5 hidden text-base text-neutral-500 leading-relaxed faq-content">
                            Our AI is trained on up-to-date tax treaties and legal frameworks across 150+ countries. However, for highly complex enterprise structures, we recommend having one of our vetted partner lawyers review your final plan.
                        </div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden faq-item cursor-pointer">
<div className="px-6 py-5 flex justify-between items-center bg-white hover:bg-neutral-50 transition-colors">
<h4 className="text-base font-medium text-black">What if I only travel a few months a year?</h4>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</div>
<div className="px-6 pb-5 hidden text-base text-neutral-500 leading-relaxed faq-content">
                            Even part-time nomads can benefit. We help you utilize tax deductions for remote work trips and ensure you don't accidentally trigger tax residency in a foreign country during a long stay.
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-black border-t border-neutral-800" id="cta">
<div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
<i className="w-12 h-12 text-[#E2FF4A] mx-auto mb-8" data-lucide="globe-2"></i>
<h2 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-8 max-w-4xl mx-auto leading-tight">
                    Your borderless life,<br/>financially engineered.
                </h2>
<p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                    Stop letting outdated tax codes dictate where you live. Generate your custom AI financial plan today.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="bg-[#E2FF4A] text-black px-8 py-5 text-sm font-medium uppercase tracking-widest flex items-center gap-3 hover:bg-[#d4f531] transition-all hover:scale-105 w-full sm:w-auto justify-center" href="#">
                        Build My Plan Now
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<p className="text-sm text-neutral-500 mt-4 sm:mt-0 sm:ml-4">Takes ~3 minutes. No credit card required.</p>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 pt-20 pb-10">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<i className="w-5 h-5 text-black" data-lucide="asterisk"></i>
<span className="text-sm font-medium tracking-tight">NOMADNEST</span>
</a>
<p className="text-sm text-neutral-500 mb-6 max-w-xs leading-relaxed">
                        The financial operating system for the globally mobile. Optimize taxes, grow wealth, stay borderless.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h5 className="text-xs font-medium text-black uppercase tracking-widest mb-6">Product</h5>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">AI Tax Plan</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Residency Tracker</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Entity Setup</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-black uppercase tracking-widest mb-6">Resources</h5>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Tax Guides by Country</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Digital Nomad Visas</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-black uppercase tracking-widest mb-6">Company</h5>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Partners</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-black uppercase tracking-widest mb-6">Legal</h5>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-neutral-500 hover:text-black transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 NomadNest Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<p className="text-xs text-neutral-400">All systems operational</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
