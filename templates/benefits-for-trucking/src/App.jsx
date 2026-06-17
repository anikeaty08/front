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



        // Scroll Animation Logic using Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // 3D Card Animation Logic
        const container = document.getElementById('cardContainer');
        const card = document.getElementById('card3d');
        const glare = document.getElementById('cardGlare');
        const shadow = document.getElementById('cardShadow');
        const rotationLimit = 20;
        
        if(container && card) {
            container.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease-out';
                if(shadow) shadow.style.transition = 'all 0.1s ease-out';
                if(glare) glare.style.opacity = '1';
                if(shadow) {
                    shadow.style.width = '80%';
                    shadow.style.opacity = '0.6';
                    shadow.style.filter = 'blur(24px)';
                }
            });

            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateY = (x / (rect.width / 2)) * rotationLimit;
                const rotateX = (y / (rect.height / 2)) * -rotationLimit;

                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                if(glare) {
                    glare.style.background = `linear-gradient(${135 + rotateY}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)`;
                }
            });

            container.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
                if(shadow) shadow.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
                
                card.style.transform = 'rotateX(10deg) rotateY(15deg) rotateZ(-2deg)';
                if(glare) glare.style.opacity = '0';
                if(shadow) {
                    shadow.style.width = '90%';
                    shadow.style.opacity = '0.4';
                    shadow.style.filter = 'blur(16px)';
                }
            });
        }
    
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
      

<div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#E63946] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.05] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#FF4D4D] rounded-full mix-blend-screen filter blur-[250px] opacity-[0.03] pointer-events-none z-0"></div>
<nav className="fixed top-0 w-full z-50 bg-[#080304]/90 backdrop-blur-xl border-b border-[#1E1E1E]/50">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 relative z-10 group" href="#">
<span className="font-['Bebas_Neue'] text-3xl tracking-tight text-white mt-1 group-hover:text-[#E63946] transition-colors duration-300">BFT</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#process">Process</a>
<a className="text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#included">Included</a>
<a className="text-[#A0A0A0] text-sm hover:text-white transition-colors" href="#proof">Proof</a>
</div>
<div className="flex items-center gap-6">
<a className="hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm font-normal text-white bg-gradient-to-br from-[#C30003] to-[#630305] border-white/10 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="#calendly">
                    Book Consultation
                </a>
</div>
</div>
</nav>

<section className="overflow-hidden bg-[#080304] border-[#1E1E1E]/30 border-b pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 w-full relative z-20 mt-12">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

<div className="flex flex-col items-start text-left reveal-on-scroll is-visible">
<h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl leading-[0.9] text-white tracking-tight mb-6 drop-shadow-2xl">
                        YOUR DRIVERS DESERVE BENEFITS.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFE5E5] to-[#C30003]">YOUR BUDGET DOESN'T</span><br/>
                        HAVE TO BREAK.
                    </h1>
<p className="leading-relaxed text-lg font-light text-[#A0A0A0] max-w-xl mb-10">
                        Benefits aren't just for the big carriers. Benefits For Trucking was built specifically for owner operators and small fleets and has been in the trucking industry for over 40 years.
                    </p>
<div className="mb-4 w-full md:w-auto">
<a className="transition-all duration-300 inline-flex items-center justify-center hover:shadow-[0_0_50px_rgba(230,57,70,0.6)] hover:scale-[1.02] gap-3 w-full md:w-auto text-lg font-normal text-white bg-gradient-to-r from-[#C30003] to-[#630305] border-white/10 border rounded-full px-10 py-5 shadow-[0_0_30px_rgba(230,57,70,0.3)]" href="#calendly">
                            Get Your Free Benefits Consultation <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative h-[350px] sm:h-[450px] flex items-center justify-center lg:justify-end reveal-on-scroll is-visible stagger-1">
<div className="card-container group relative w-full max-w-[380px] aspect-[1.586/1] z-10 cursor-pointer" id="cardContainer">
<div className="card-3d relative w-full h-full rounded-2xl will-change-transform" id="card3d">

<div className="absolute inset-0 rounded-2xl bg-[#310203]/80 layer-depth-1 border border-white/5 pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl bg-[#1a0102]/80 layer-depth-2 border border-white/5 pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl bg-[#110101]/80 layer-depth-3 border border-white/5 pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl bg-black/50 layer-depth-5 shadow-2xl pointer-events-none"></div>

<div className="absolute inset-0 rounded-2xl epic-gradient-bft glass-panel overflow-hidden">
<div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300" id="cardGlare"></div>
<div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10 pointer-events-none">

<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
<span className="font-['Bebas_Neue'] text-lg tracking-wider mt-0.5">BFT</span>
</div>
<span className="text-sm font-medium tracking-wide uppercase opacity-80">Benefits Card</span>
</div>
<iconify-icon className="text-white/60 text-2xl" icon="solar:shield-check-bold"></iconify-icon>
</div>

<div className="flex flex-col gap-5 mt-2">
<div className="w-10 h-7 rounded-md chip relative border border-white/20 shadow-sm flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 border border-black/10 rounded-md"></div>
<div className="absolute w-[1px] h-full bg-black/10 left-1/3"></div>
<div className="absolute w-[1px] h-full bg-black/10 right-1/3"></div>
<div className="absolute h-[1px] w-full bg-black/10 top-1/2"></div>
<div className="absolute w-5 h-3 border border-black/10 rounded-sm"></div>
</div>
<div className="flex justify-between items-center w-full max-w-[90%]">
<span className="text-lg sm:text-xl font-mono-card text-white/90 tracking-widest drop-shadow-md">HEALTH</span>
<span className="text-lg sm:text-xl font-mono-card text-white/90 tracking-widest drop-shadow-md">DENTAL</span>
<span className="text-lg sm:text-xl font-mono-card text-white/90 tracking-widest drop-shadow-md">LIFE</span>
</div>
</div>

<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-medium">Valued Member</span>
<span className="text-sm sm:text-base font-medium text-white tracking-wide uppercase">TRUCK DRIVER</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-medium">Valid Thru</span>
<span className="text-sm sm:text-base font-mono-card text-white tracking-wide">12/99</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-[#C30003]/20 blur-xl rounded-[100%] transition-all duration-500 opacity-40" id="cardShadow"></div>
</div>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mb-10 border border-[#1E1E1E]/50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative bg-[#1a1a1a] reveal-on-scroll stagger-2">
<div className="" style={{paddingTop: '56.25%', position: 'relative', width: '100%'}}>

</div>
</div>

<div className="flex flex-wrap justify-center items-center gap-3 w-full max-w-5xl mx-auto border-t border-[#1E1E1E]/30 pt-12 reveal-on-scroll stagger-3">
<span className="inline-flex items-center hover:border-[#E63946]/30 transition-colors cursor-default text-xs font-light text-[#A0A0A0] tracking-wide bg-[#110507] border-[#1E1E1E] border rounded-full pt-2 pr-4 pb-2 pl-4">3rd generation family-owned agency since 1974</span>
<span className="inline-flex items-center hover:border-[#E63946]/30 transition-colors cursor-default text-xs font-light text-[#A0A0A0] tracking-wide bg-[#110507] border-[#1E1E1E] border rounded-full pt-2 pr-4 pb-2 pl-4">Trucking industry specialists since the mid-1980s</span>
<span className="inline-flex items-center hover:border-[#E63946]/30 transition-colors cursor-default text-xs font-light text-[#A0A0A0] tracking-wide bg-[#110507] border-[#1E1E1E] border rounded-full pt-2 pr-4 pb-2 pl-4">Founded Benefits For Trucking 2021 exclusively serving trucking</span>
<span className="inline-flex items-center hover:border-[#E63946]/30 transition-colors cursor-default text-xs font-light text-[#A0A0A0] tracking-wide bg-[#110507] border-[#1E1E1E] border rounded-full pt-2 pr-4 pb-2 pl-4">Serving owner operators and fleets across all 50 states</span>
<span className="inline-flex items-center hover:border-[#E63946]/30 transition-colors cursor-default text-xs font-light text-[#A0A0A0] tracking-wide bg-[#110507] border-[#1E1E1E] border rounded-full pt-2 pr-4 pb-2 pl-4">Founding member Total Trucking Resource (TTR)</span>
</div>
</div>
</section>

<section className="bg-[#080304] py-24 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

<div className="reveal-on-scroll stagger-1 hover:border-[#E63946]/30 hover:shadow-[0_20px_40px_rgba(230,57,70,0.05)] hover:-translate-y-1 transition-all duration-500 bg-red-950 border-[#1E1E1E] border rounded-3xl pt-10 pr-10 pb-10 pl-10 relative">
<iconify-icon className="text-4xl text-[#FF4D4D] mb-6 drop-shadow-[0_0_10px_rgba(255,77,77,0.3)]" height="36" icon="solar:shield-warning-linear" style={{color: 'rgb(195, 0, 3)'}} width="36"></iconify-icon>
<h3 className="leading-tight text-3xl font-normal text-gray-50 tracking-tight font-['Barlow_Condensed'] mb-4">"You're too small" you've heard it before.</h3>
<p className="leading-relaxed text-sm font-light text-red-100">Most brokers won't touch a fleet under 50 trucks. BFT starts at two employees, and works with single-person LLCs every day.</p>
</div>

<div className="reveal-on-scroll stagger-2 relative rounded-3xl bg-[#110507] p-10 border border-[#1E1E1E] hover:border-[#E63946]/30 hover:shadow-[0_20px_40px_rgba(230,57,70,0.05)] hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-4xl text-[#FF4D4D] mb-6 drop-shadow-[0_0_10px_rgba(255,77,77,0.3)]" height="36" icon="solar:users-group-two-rounded-linear" style={{color: 'rgb(248, 250, 252)'}} width="36"></iconify-icon>
<h3 className="font-['Barlow_Condensed'] font-normal text-3xl text-white tracking-tight mb-4 leading-tight">Your drivers are leaving for carriers that offer benefits.</h3>
<p className="leading-relaxed text-sm font-light text-[#A0A0A0]">You can match the pay. You can't always match the package and that gap is costing you drivers you trained and trusted.</p>
</div>

<div className="reveal-on-scroll stagger-3 hover:border-[#E63946]/30 hover:shadow-[0_20px_40px_rgba(230,57,70,0.05)] hover:-translate-y-1 transition-all duration-500 text-slate-50 bg-red-950 border-[#1E1E1E] border rounded-3xl pt-10 pr-10 pb-10 pl-10 relative">
<iconify-icon className="text-4xl text-[#FF4D4D] mb-6 drop-shadow-[0_0_10px_rgba(255,77,77,0.3)]" height="36" icon="solar:graph-up-linear" style={{color: 'rgb(195, 0, 3)'}} width="36"></iconify-icon>
<h3 className="leading-tight text-3xl font-normal text-slate-50 tracking-tight font-['Barlow_Condensed'] bg-red-950 mb-4">Your premiums keep going up and nobody's explaining why.</h3>
<p className="leading-relaxed text-sm font-light text-red-100">Health insurance costs in trucking are rising nationwide but most operators are absorbing the increase without knowing their options or that a specialist exists who works exclusively in their lane.</p>
</div>
</div>
</div>
</section>

<section className="z-20 bg-gradient-to-b from-[#080304] to-[#0A0304] border-[#1E1E1E]/30 border-t pt-24 pb-24 relative">
<div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
<p className="leading-relaxed md:text-2xl text-xl font-light text-[#F0F0F0]">BFT is not a general insurance agency that added trucking as a side niche it is the entire business, built on four decades of family experience working inside the trucking industry. 

Every benefits package is built around your specific company structure, headcount, and budget not a generic plan pulled from a shelf. Through the partnership with Swartzendruber Solutions, BFT handles the full enrollment experience, meaning your drivers actually understand what they have and how to use it. This is a long-term relationship built on knowing your operation not a transaction that ends when the policy starts.</p>
</div>
</section>

<section className="bg-[#080304] py-32 relative z-20 border-t border-[#1E1E1E]/30" id="proof">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="reveal-on-scroll stagger-1 hover:border-[#E63946]/20 transition-all duration-500 flex flex-col group cursor-default bg-slate-50 border-[#1E1E1E] border rounded-3xl px-10 py-10">
<iconify-icon className="text-2xl text-[#1E1E1E] mb-6 group-hover:text-[#E63946]/30 transition-colors" icon="solar:quote-left-bold"></iconify-icon>
<p className="leading-relaxed flex-grow text-lg font-light italic text-stone-950 mb-8">[placeholder - Zach to supply exact client quote, name or first name, company type (e.g. owner operator, 12-truck fleet), and source platform]</p>
</div>
<div className="reveal-on-scroll stagger-2 hover:border-[#E63946]/20 transition-all duration-500 flex flex-col group cursor-default bg-slate-50 border-[#1E1E1E] border rounded-3xl pt-10 pr-10 pb-10 pl-10">
<iconify-icon className="text-2xl text-[#1E1E1E] mb-6 group-hover:text-[#E63946]/30 transition-colors" icon="solar:quote-left-bold"></iconify-icon>
<p className="leading-relaxed flex-grow text-lg font-light italic text-stone-950 mb-8">[placeholder - Zach to supply exact client quote, name or first name, company type, and source platform]</p>
</div>
<div className="reveal-on-scroll stagger-3 hover:border-[#E63946]/20 transition-all duration-500 flex flex-col group cursor-default bg-slate-50 border-[#1E1E1E] border rounded-3xl px-10 py-10">
<iconify-icon className="text-2xl text-[#1E1E1E] mb-6 group-hover:text-[#E63946]/30 transition-colors" icon="solar:quote-left-bold"></iconify-icon>
<p className="leading-relaxed flex-grow text-lg font-light italic text-stone-950 mb-8">[placeholder - Zach to supply exact client quote, name or first name, company type, and source platform]</p>
</div>
</div>
</div>
</section>

<section className="bg-[#080304] py-32 relative z-20 border-t border-[#1E1E1E]/30" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col gap-4">
<div className="reveal-on-scroll stagger-1 bg-gradient-to-r from-[#110507] to-[#0A0304] p-8 md:p-10 rounded-3xl flex gap-6 md:gap-10 items-center border border-[#1E1E1E] hover:border-[#E63946]/20 transition-all duration-500 group cursor-default">
<span className="font-['Bebas_Neue'] text-6xl tracking-tight text-[#333] group-hover:text-[#FF4D4D] transition-colors duration-500 leading-none">1</span>
<p className="leading-relaxed text-lg font-light text-[#F0F0F0]">Book a free consultation: share your fleet size, structure, and current coverage situation.</p>
</div>
<div className="reveal-on-scroll stagger-2 bg-gradient-to-r from-[#110507] to-[#0A0304] p-8 md:p-10 rounded-3xl flex gap-6 md:gap-10 items-center border border-[#1E1E1E] hover:border-[#E63946]/20 transition-all duration-500 group cursor-default">
<span className="font-['Bebas_Neue'] text-6xl tracking-tight text-[#333] group-hover:text-[#FF4D4D] transition-colors duration-500 leading-none">2</span>
<p className="text-lg text-[#F0F0F0] font-light leading-relaxed">Receive a customised benefits assessment built around your specific operation and budget.</p>
</div>
<div className="reveal-on-scroll stagger-3 bg-gradient-to-r from-[#110507] to-[#0A0304] p-8 md:p-10 rounded-3xl flex gap-6 md:gap-10 items-center border border-[#1E1E1E] hover:border-[#E63946]/20 transition-all duration-500 group cursor-default">
<span className="font-['Bebas_Neue'] text-6xl tracking-tight text-[#333] group-hover:text-[#FF4D4D] transition-colors duration-500 leading-none">3</span>
<p className="text-lg text-[#F0F0F0] font-light leading-relaxed">Review your options across health, dental, disability, retirement, supplemental, and more.</p>
</div>
<div className="reveal-on-scroll stagger-4 bg-gradient-to-r from-[#110507] to-[#0A0304] p-8 md:p-10 rounded-3xl flex gap-6 md:gap-10 items-center border border-[#1E1E1E] hover:border-[#E63946]/20 transition-all duration-500 group cursor-default">
<span className="font-['Bebas_Neue'] text-6xl tracking-tight text-[#333] group-hover:text-[#FF4D4D] transition-colors duration-500 leading-none">4</span>
<p className="leading-relaxed text-lg font-light text-[#F0F0F0]">Enroll your team with guided support from BFT and Swartzendruber Solutions: drivers understand what they're getting.</p>
</div>
<div className="reveal-on-scroll stagger-1 bg-gradient-to-r from-[#110507] to-[#0A0304] p-8 md:p-10 rounded-3xl flex gap-6 md:gap-10 items-center border border-[#1E1E1E] hover:border-[#E63946]/20 transition-all duration-500 group cursor-default">
<span className="font-['Bebas_Neue'] text-6xl tracking-tight text-[#333] group-hover:text-[#FF4D4D] transition-colors duration-500 leading-none">5</span>
<p className="leading-relaxed text-lg font-light text-[#F0F0F0]">Ongoing partnership: BFT stays with you long-term, not just at sign-up.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#080304] py-32 relative z-20 border-t border-[#1E1E1E]/30" id="included">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="reveal-on-scroll stagger-1 bg-gradient-to-br from-[#110507] to-[#0A0304] border border-[#1E1E1E] hover:border-[#E63946]/30 p-10 md:p-12 rounded-3xl transition-all duration-500">
<div className="border-b border-[#1E1E1E]/50 pb-8 mb-8">
<h3 className="font-['Barlow_Condensed'] font-normal text-4xl text-white tracking-tight mb-2">Owner operators &amp; independent contractors</h3>
</div>
<ul className="flex flex-col gap-5 mb-12">
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="flex-shrink-0 text-xl text-[#FF4D4D] mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Health insurance tailored to solo operators and single-person LLCs
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Dental insurance
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Life insurance
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Critical illness insurance
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Virtual doctor care
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Truck warranty options
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Enrollment available with no minimum fleet size
                        </li>
</ul>
<div className="text-2xl text-white tracking-tight font-['Barlow_Condensed'] border-[#1E1E1E]/50 border-t pt-8">
                        Pricing: <span className="text-base text-[#A0A0A0] tracking-normal font-['DM_Sans'] ml-2">[placeholder for Zach to confirm]</span>
</div>
</div>

<div className="reveal-on-scroll stagger-2 bg-gradient-to-br from-[#110507] to-[#0A0304] border border-[#1E1E1E] hover:border-[#E63946]/30 p-10 md:p-12 rounded-3xl transition-all duration-500">
<div className="border-b border-[#1E1E1E]/50 pb-8 mb-8">
<h3 className="font-['Barlow_Condensed'] font-normal text-4xl text-white tracking-tight mb-2">Small to mid-size fleets &amp; trucking companies</h3>
</div>
<ul className="flex flex-col gap-5 mb-12">
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Group health, dental, disability &amp; retirement packages
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Employee benefits counselling and full guided enrollment
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Supplemental health insurance
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Customised plans for 2-employee operations through regional carriers
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Multi-state coverage
                        </li>
<li className="flex items-start gap-4 text-[#A0A0A0] text-base font-light group">
<iconify-icon className="text-[#FF4D4D] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Driver-focused enrollment experience through Swartzendruber Solutions
                        </li>
</ul>
<div className="text-white font-['Barlow_Condensed'] tracking-tight text-2xl border-t border-[#1E1E1E]/50 pt-8 mt-auto">
                        Pricing: <span className="text-base text-[#A0A0A0] tracking-normal font-['DM_Sans'] ml-2">[placeholder for Zach to confirm]</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#080304] py-20 relative z-20 reveal-on-scroll">
<div className="max-w-4xl mx-auto px-6 text-center border border-[#1E1E1E] bg-[#0A0304] rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 bg-gradient-to-t from-[#E63946]/5 to-transparent pointer-events-none"></div>
<a className="transition-all duration-300 inline-flex items-center gap-3 hover:shadow-[0_0_50px_rgba(230,57,70,0.6)] hover:scale-[1.02] justify-center md:w-auto text-lg font-normal text-white text-center bg-gradient-to-r from-[#d71d2d] to-[#630305] w-full z-10 border-white/10 border rounded-full pt-5 pr-10 pb-5 pl-10 relative shadow-[0_0_30px_rgba(230,57,70,0.3)]" href="#calendly">Find Out What Your Fleet Can Actually Afford </a>
</div>
</section>

<section className="z-20 bg-[#080304] border-[#1E1E1E]/30 border-t pt-32 pb-32 relative reveal-on-scroll">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="flex flex-col items-center">
<span className="font-['Bebas_Neue'] text-7xl md:text-8xl text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">2002</span>
<span className="text-[#A0A0A0] text-sm uppercase tracking-widest font-normal">Year Zach entered benefits</span>
</div>
<div className="flex flex-col items-center">
<span className="md:text-8xl text-7xl text-[#FF4D4D] tracking-tight font-['Bebas_Neue'] mb-4 drop-shadow-[0_0_15px_rgba(255,77,77,0.3)]">2+</span>
<span className="text-[#A0A0A0] text-sm uppercase tracking-widest font-normal">Minimum employees to enroll</span>
</div>
<div className="flex flex-col items-center">
<span className="font-['Bebas_Neue'] text-7xl md:text-8xl text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">40+</span>
<span className="text-[#A0A0A0] text-sm uppercase tracking-widest font-normal">Years of family industry experience</span>
</div>
<div className="flex flex-col items-center">
<span className="md:text-8xl text-7xl text-[#FF4D4D] tracking-tight font-['Bebas_Neue'] mb-4 drop-shadow-[0_0_15px_rgba(255,77,77,0.3)]">100%</span>
<span className="text-[#A0A0A0] text-sm uppercase tracking-widest font-normal">Trucking industry. Nothing else.</span>
</div>
</div>
</div>
</section>

<section className="bg-[#080304] py-32 relative z-20 border-t border-[#1E1E1E]/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 items-stretch reveal-on-scroll">

<div className="w-full lg:w-2/5 relative rounded-3xl overflow-hidden min-h-[400px] border border-[#1E1E1E] bg-[#110507]">
<div className="absolute bottom-4 right-4 text-[#333] text-xs">[Zach Photo Placeholder]</div>
<img alt="Zach Swartzendruber" className="w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6f82a3d-5bca-4a93-92ac-3e9c41ae4311_1600w.jpg"/>
</div>

<div className="w-full lg:w-3/5 flex flex-col justify-center">
<p className="leading-relaxed text-lg font-light text-[#F0F0F0] mb-10">Zach Swartzendruber didn't stumble into trucking benefits, he grew up in them. His grandfather Don founded the family agency. His father Scott started working specifically with trucking companies. By the time Zach started his own career, the trucking industry wasn't a niche to explore, it was home. He launched Benefits For Trucking with one mission: make real, valuable benefits accessible to the owner operators and small fleets that the rest of the industry keeps turning away. Zach is based in the Minneapolis area and works with trucking companies across the entire country.</p>
<div className="flex flex-col gap-4 border-l-2 border-[#E63946] pl-6 py-2">
<a className="text-[#A0A0A0] hover:text-white transition-colors flex items-center gap-3" href="tel:+19525296953">
<iconify-icon className="text-[#FF4D4D] text-xl" icon="solar:phone-calling-linear"></iconify-icon> +1 (952) 529-6953
                        </a>
<a className="text-[#A0A0A0] hover:text-white transition-colors flex items-center gap-3" href="mailto:zach@benefitsfortrucking.com">
<iconify-icon className="text-[#FF4D4D] text-xl" icon="solar:letter-linear"></iconify-icon> zach@benefitsfortrucking.com
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 bg-[#080304] border-[#1E1E1E]/30 border-t pt-32 pb-32 relative reveal-on-scroll">
<div className="max-w-4xl mx-auto px-6">
<div className="space-y-2">
<details className="group border border-[#1E1E1E] bg-[#110507] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="cursor-pointer flex justify-between items-center p-6 text-white font-normal hover:bg-[#1a080a] transition-colors">
<span className="text-lg pr-4">I run a single truck, is this actually for me?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#FF4D4D] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-[#A0A0A0] font-light leading-relaxed border-t border-[#1E1E1E]/50 mt-2 mx-6">
                        Yes. BFT works with single-person LLCs and independent contractors every day. You don't need a fleet or a full-time HR person to access real benefits — that's exactly the gap BFT was built to fill.
                    </div>
</details>
<details className="group border border-[#1E1E1E] bg-[#110507] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="cursor-pointer flex justify-between items-center p-6 text-white font-normal hover:bg-[#1a080a] transition-colors">
<span className="text-lg pr-4">How is Zach different from the insurance broker who already cold-called me?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#FF4D4D] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-[#A0A0A0] font-light leading-relaxed border-t border-[#1E1E1E]/50 mt-2 mx-6">
                        Most brokers covering trucking also cover dentists, restaurants, and tech startups — trucking is one of fifty industries on their list. Zach's agency works exclusively in trucking, which means the products, the language, and the understanding of your situation are specific to your world, not adapted from a generic playbook.
                    </div>
</details>
<details className="group border border-[#1E1E1E] bg-[#110507] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="cursor-pointer flex justify-between items-center p-6 text-white font-normal hover:bg-[#1a080a] transition-colors">
<span className="text-lg pr-4">I already have some coverage through a big provider, why would I switch?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#FF4D4D] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-[#A0A0A0] font-light leading-relaxed border-t border-[#1E1E1E]/50 mt-2 mx-6">
                        The consultation isn't about switching — it's about knowing whether what you have is the best available option for your specific situation. Many operators discover better coverage at a comparable or lower cost once someone who knows the trucking market actually reviews their current plan.
                    </div>
</details>
<details className="group border border-[#1E1E1E] bg-[#110507] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="cursor-pointer flex justify-between items-center p-6 text-white font-normal hover:bg-[#1a080a] transition-colors">
<span className="text-lg pr-4">Will my drivers actually use the benefits or will they ignore them?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#FF4D4D] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-[#A0A0A0] font-light leading-relaxed border-t border-[#1E1E1E]/50 mt-2 mx-6">
                        Enrollment without explanation is one of the biggest reasons benefits go unused in small companies. BFT handles the full counselling and enrollment process through Swartzendruber Solutions, so your team understands what they have, how to access it, and why it matters — before the plan ever starts.
                    </div>
</details>
<details className="group border border-[#1E1E1E] bg-[#110507] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="cursor-pointer flex justify-between items-center p-6 text-white font-normal hover:bg-[#1a080a] transition-colors">
<span className="text-lg pr-4">What does the first call actually look like?</span>
<span className="transition duration-300 group-open:-rotate-180 text-[#FF4D4D] flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-[#A0A0A0] font-light leading-relaxed border-t border-[#1E1E1E]/50 mt-2 mx-6">
                        It's a straightforward conversation — no pitch deck, no pressure. Zach or a BFT specialist reviews your company structure, current coverage or lack of it, and budget range. You leave the call knowing exactly what your options are and what the right next step looks like, whether you move forward with BFT or not.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#080304] z-20 border-[#1E1E1E]/30 border-t pt-32 pb-32 relative reveal-on-scroll" id="calendly">
<div className="max-w-4xl mx-auto px-6 text-center">
<h3 className="md:text-4xl text-3xl font-normal text-white tracking-tight font-['Barlow_Condensed'] mb-10">15–30 minutes. Free. You're talking to Zach, not a call centre.</h3>
<div className="w-full bg-[#110507] border border-[#1E1E1E] rounded-3xl p-8 min-h-[600px] flex items-center justify-center relative shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
<div className="font-light text-[#A0A0A0] font-['DM_Sans']">[placeholder for Zach to supply Calendly scheduling link]</div>
</div>
</div>
</section>
<footer className="bg-[#050102] border-t border-[#1E1E1E]/50 pt-16 pb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[#555] text-xs tracking-widest uppercase">
                © 2024 Benefits For Trucking
            </p>
<div className="flex items-center gap-8 text-[#555] text-xs uppercase tracking-widest">
<span>Minneapolis / Anoka, MN</span>
</div>
</div>
</footer>


    </>
  );
}
