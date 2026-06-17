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

        // Mobile Menu Toggle
        const openMenuBtn = document.getElementById('open-menu');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        openMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            // Small delay to allow display:block to apply before changing opacity for transition
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = ''; // Restore scrolling
            }, 300); // match transition duration
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
      

<div className="fixed inset-0 bg-white z-50 flex flex-col pt-20 px-6 hidden opacity-0 transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black" id="close-menu">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<nav className="flex flex-col space-y-6 font-mono text-lg uppercase tracking-wider text-gray-600">
<a className="text-black font-semibold" href="#">Product</a>
<a className="hover:text-black transition-colors" href="#">How it works</a>
<a className="hover:text-black transition-colors" href="#">Brokers</a>
<a className="hover:text-black transition-colors" href="#">Security</a>
<a className="hover:text-black transition-colors" href="#">Pricing</a>
<a className="hover:text-black transition-colors" href="#">Docs</a>
</nav>
<div className="mt-auto pb-12">
<a className="w-full flex items-center justify-between bg-black text-white px-6 py-4 font-mono text-sm uppercase tracking-wider" href="#">
<span>Get early access</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<main className="w-full max-w-[1400px] mx-auto border-x border-grid bg-white relative shadow-2xl shadow-black/5">

<header className="h-16 flex items-center justify-between border-b border-grid bg-white/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-0">

<div className="flex items-center h-full w-48 pl-6">
<a className="flex items-center gap-3" href="#">
<div className="flex flex-col gap-[3px]">
<div className="w-5 h-1.5 bg-black"></div>
<div className="w-5 h-1.5 bg-black w-[14px] mx-auto"></div>
</div>
<span className="font-mono text-xs uppercase tracking-[0.25em] text-black font-semibold">Modulate</span>
</a>
</div>

<nav className="hidden lg:flex h-full items-center space-x-10 font-mono text-xs uppercase tracking-wider text-gray-500">
<a className="text-black relative flex items-center h-full" href="#">
                    Product
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full"></span>
</a>
<a className="hover:text-black transition-colors flex items-center h-full" href="#">How it works</a>
<a className="hover:text-black transition-colors flex items-center h-full" href="#">Brokers</a>
<a className="hover:text-black transition-colors flex items-center h-full" href="#">Security</a>
<a className="hover:text-black transition-colors flex items-center h-full" href="#">Pricing</a>
<a className="hover:text-black transition-colors flex items-center h-full" href="#">Docs</a>
</nav>

<div className="flex items-center h-full border-l border-grid">

<div className="hidden lg:grid grid-cols-3 gap-1 p-5 border-r border-grid cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
</div>
<a className="hidden lg:flex h-full items-center gap-4 bg-black text-white px-8 font-mono text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors" href="#">
<span>Get early access</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<button className="lg:hidden p-4 text-black border-l border-grid" id="open-menu">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px] border-b border-grid relative overflow-hidden">

<div className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 border-r border-grid bg-white relative z-10">
<p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-8">Automated Portfolio Intelligence</p>
<h1 className="text-5xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-gray-900 mb-2">
                    All your brokers.
                </h1>
<h1 className="text-5xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-blue-600 mb-8">
                    One portfolio.
                </h1>
<p className="text-lg text-gray-500 max-w-md leading-relaxed mb-12 font-light">
                    Automatically consolidate your investments from multiple brokers. Get a real-time, unified view of your entire portfolio—accurate, secure, effortless.
                </p>
<div className="flex flex-wrap items-center gap-8">
<a className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-4 font-mono text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors group" href="#">
<span>Get early access</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
<a className="group flex flex-col items-center gap-2" href="#how-it-works">
<span className="font-mono text-xs text-gray-600 uppercase tracking-wider border-b border-dashed border-gray-400 pb-0.5 group-hover:text-black group-hover:border-black transition-colors">
                            See how it works
                        </span>
<i className="w-3 h-3 text-gray-400 group-hover:text-black transition-colors group-hover:translate-y-1 transform duration-200" data-lucide="arrow-down"></i>
</a>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
<span className="font-mono text-[10px] text-gray-400 pr-4">01</span>
<div className="w-2 h-2 bg-blue-600 rounded-full mr-4 ring-4 ring-white"></div>
</div>
</div>

<div className="bg-gray-50/50 relative overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-0 pt-12 lg:pt-0">

<div className="scene w-[400px] h-[400px] relative mt-[-50px] ml-[-50px]">
<div className="w-full h-full isometric absolute top-0 left-0">

<div className="absolute left-1/2 top-[10%] bottom-[10%] w-[1px] border-l border-dashed border-gray-300 transform -translate-x-1/2" style={{transform: 'translateZ(-20px)'}}></div>

<div className="absolute inset-0 bg-white shadow-xl shadow-gray-200/50 border border-grid p-6 rounded-sm flex items-center justify-between" style={{transform: 'translateZ(0px)'}}>
<div className="relative w-32 h-32">
<svg className="transform -rotate-90 w-full h-full" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#f3f4f6" strokeWidth="15"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#3b82f6" stroke-dasharray="251.2" stroke-dashoffset="95" strokeWidth="15"></circle> 
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#93c5fd" stroke-dasharray="251.2" stroke-dashoffset="204" strokeWidth="15"></circle> 
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#d1d5db" stroke-dasharray="251.2" stroke-dashoffset="223" strokeWidth="15"></circle> 
</svg>
<div className="absolute inset-0 flex items-center justify-center bg-white rounded-full m-4"></div>
</div>
<div className="flex flex-col gap-2 w-1/2 pl-4">
<div className="flex items-center justify-between text-[10px] font-mono">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span><span className="text-gray-600">Equities</span></div>
<span className="font-semibold text-gray-900">62.1%</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-300"></span><span className="text-gray-600">ETFs</span></div>
<span className="font-semibold text-gray-900">18.7%</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-300"></span><span className="text-gray-600">Bonds</span></div>
<span className="font-semibold text-gray-900">11.3%</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-400"></span><span className="text-gray-600">Cash</span></div>
<span className="font-semibold text-gray-900">7.9%</span>
</div>
</div>
</div>

<div className="absolute inset-x-[-20px] top-[50px] bottom-[-50px] bg-white/90 backdrop-blur-sm shadow-xl shadow-gray-200/50 border border-grid p-6 rounded-sm flex flex-col items-center justify-center overflow-hidden" style={{transform: 'translateZ(80px)'}}>

<svg className="w-full h-full opacity-60 text-blue-600 fill-current" viewbox="0 0 200 100">

<g transform="translate(10, 20)">

<circle cx="20" cy="10" r="1.5"></circle><circle cx="25" cy="8" r="1.5"></circle><circle cx="30" cy="12" r="1.5"></circle><circle cx="15" cy="15" r="1.5"></circle><circle cx="22" cy="18" r="1.5"></circle><circle cx="28" cy="20" r="1.5"></circle><circle cx="35" cy="15" r="1.5"></circle><circle cx="18" cy="25" r="1.5"></circle><circle cx="25" cy="28" r="1.5"></circle>

<circle cx="30" cy="40" r="1.5"></circle><circle cx="35" cy="45" r="1.5"></circle><circle cx="32" cy="50" r="1.5"></circle><circle cx="38" cy="55" r="1.5"></circle><circle cx="34" cy="60" r="1.5"></circle>

<circle cx="80" cy="15" r="1.5"></circle><circle cx="85" cy="12" r="1.5"></circle><circle cx="90" cy="18" r="1.5"></circle><circle cx="75" cy="20" r="1.5"></circle><circle cx="82" cy="25" r="1.5"></circle><circle cx="88" cy="22" r="1.5"></circle>

<circle cx="85" cy="35" r="1.5"></circle><circle cx="90" cy="40" r="1.5"></circle><circle cx="82" cy="45" r="1.5"></circle><circle cx="88" cy="50" r="1.5"></circle><circle cx="85" cy="60" r="1.5"></circle><circle cx="92" cy="65" r="1.5"></circle>

<circle cx="110" cy="10" r="1.5"></circle><circle cx="120" cy="15" r="1.5"></circle><circle cx="130" cy="12" r="1.5"></circle><circle cx="115" cy="25" r="1.5"></circle><circle cx="125" cy="20" r="1.5"></circle><circle cx="135" cy="28" r="1.5"></circle><circle cx="120" cy="35" r="1.5"></circle><circle cx="130" cy="38" r="1.5"></circle><circle cx="140" cy="30" r="1.5"></circle><circle cx="145" cy="25" r="1.5"></circle>

<circle cx="140" cy="65" r="1.5"></circle><circle cx="145" cy="70" r="1.5"></circle><circle cx="150" cy="68" r="1.5"></circle><circle cx="155" cy="75" r="1.5"></circle>
</g>
</svg>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 relative">
<div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black -translate-y-1/2"></div>
<div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black -translate-x-1/2"></div>
</div>
</div>

<div className="absolute inset-x-[-10px] top-[100px] bottom-[-10px] bg-white shadow-2xl shadow-gray-300/50 border border-grid p-8 rounded-sm flex flex-col justify-center items-center" style={{transform: 'translateZ(160px)'}}>
<div className="w-full flex justify-between items-start mb-4">
<span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Total Portfolio Value</span>
<div className="bg-black text-white p-1 rounded-sm">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
</div>
<h2 className="text-5xl font-mono tracking-tighter text-gray-900 mb-2">$2,842,651</h2>
<div className="w-full flex justify-start">
<span className="font-mono text-xs text-blue-600 font-semibold flex items-center gap-1">
                                    Day change <br/> +1.28%
                                </span>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-24 border-l border-grid bg-white/50 backdrop-blur-sm hidden md:flex flex-col items-center py-8 z-20">
<div className="flex flex-col items-center gap-1 mb-8 text-center">
<span className="font-mono text-[8px] uppercase tracking-widest text-gray-500">Live Sync</span>
<div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
<span className="font-mono text-[8px] uppercase tracking-widest text-gray-500">Across<br/>Brokers</span>
</div>

<div className="flex flex-col gap-6 relative w-full items-center flex-1 justify-center border-l border-dashed border-gray-300 ml-[1px]">
<div className="w-10 h-10 border border-grid bg-white flex items-center justify-center relative shadow-sm hover:border-black transition-colors cursor-pointer group">
<span className="font-serif text-[8px] leading-tight text-center text-gray-700 group-hover:text-black">Charles<br/>SCHWAB</span>
<div className="absolute top-1/2 -left-[12px] w-[11px] h-[1px] bg-gray-300"></div>
</div>
<div className="w-10 h-10 border border-grid bg-white flex items-center justify-center relative shadow-sm hover:border-black transition-colors cursor-pointer group">

<i className="w-5 h-5 text-gray-700 group-hover:text-black" data-lucide="sun"></i>
<div className="absolute top-1/2 -left-[12px] w-[11px] h-[1px] bg-gray-300"></div>
</div>
<div className="w-10 h-10 border border-grid bg-white flex items-center justify-center relative shadow-sm hover:border-black transition-colors cursor-pointer group">

<i className="w-5 h-5 text-gray-700 group-hover:text-black" data-lucide="ship"></i>
<div className="absolute top-1/2 -left-[12px] w-[11px] h-[1px] bg-gray-300"></div>
</div>
<div className="mt-4 w-10 h-10 border border-grid bg-gray-50 flex items-center justify-center text-[10px] font-mono text-gray-500 hover:text-black transition-colors cursor-pointer">
                            + 50
                        </div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-grid bg-white">

<div className="p-6 lg:p-8 bg-blue-600 text-white flex flex-col justify-between relative group overflow-hidden">
<i className="w-8 h-8 opacity-50 mb-12 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" data-lucide="arrow-down-right"></i>
<div>
<div className="flex items-center gap-2 mb-2 opacity-80">
<i className="w-4 h-4" data-lucide="link"></i>
<span className="font-mono text-xs uppercase tracking-wider">50+ Brokers</span>
</div>
<p className="text-sm font-light text-blue-100">Connect all your accounts in minutes.</p>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 border border-blue-500 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
</div>

<div className="p-6 lg:p-8 border-r border-b md:border-b-0 border-grid flex flex-col justify-between group bg-white hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-2 mb-12 text-gray-500">
<i className="w-4 h-4" data-lucide="clock"></i>
<span className="font-mono text-xs uppercase tracking-wider text-gray-900">Real-time sync</span>
</div>
<p className="text-sm text-gray-500">Automatic updates across all accounts.</p>
</div>

<div className="p-6 lg:p-8 border-r border-b md:border-b-0 border-grid flex flex-col justify-between group bg-white hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-2 mb-12 text-gray-500">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span className="font-mono text-xs uppercase tracking-wider text-gray-900">Bank-level security</span>
</div>
<p className="text-sm text-gray-500">Read-only access.<br/>Your data stays yours.</p>
</div>

<div className="p-6 lg:p-8 flex flex-col justify-between bg-white relative">
<span className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-4 block">Portfolios consolidated</span>
<div className="flex items-end justify-between mt-auto">
<span className="text-4xl font-mono text-blue-600 tracking-tighter">37,842+</span>

<div className="flex items-end gap-[3px] h-8 opacity-60">
<div className="w-1.5 bg-blue-600 h-1/3"></div>
<div className="w-1.5 bg-blue-600 h-1/2"></div>
<div className="w-1.5 bg-blue-600 h-2/3"></div>
<div className="w-1.5 bg-blue-600 h-3/4"></div>
<div className="w-1.5 bg-blue-600 h-full"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-grid bg-white flex flex-col items-center justify-center">
<p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 mb-8 text-center">Trusted by wealth managers at</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale">

<span className="font-serif text-xl tracking-tight text-black font-semibold">Goldman Sachs</span>
<span className="font-sans text-xl tracking-tighter text-black font-semibold">Morgan Stanley</span>
<span className="font-mono text-xl tracking-tight text-black uppercase">Vanguard</span>
<span className="font-serif text-xl italic tracking-tight text-black">J.P.Morgan</span>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-b border-grid" id="how-it-works">

<div className="p-8 lg:p-24 flex flex-col justify-center border-r border-grid">
<div className="w-10 h-10 border border-grid flex items-center justify-center mb-8">
<i className="w-5 h-5 text-black" data-lucide="plug"></i>
</div>
<h2 className="text-4xl font-serif tracking-tight text-gray-900 mb-6">Connect once.<br/>Track forever.</h2>
<p className="text-lg text-gray-500 mb-8 font-light">
                    Forget manual CSV uploads. Modulate uses secure API integrations and advanced read-only scraping to maintain a live connection with over 50 brokerages globally.
                </p>
<ul className="space-y-4 font-mono text-sm text-gray-600">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-black" data-lucide="check"></i> Instantly fetch historical data
                    </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-black" data-lucide="check"></i> Automatic dividend tracking
                    </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-black" data-lucide="check"></i> Corporate action adjustments
                    </li>
</ul>
</div>

<div className="bg-gray-50 p-8 lg:p-16 flex items-center justify-center relative overflow-hidden">

<div className="w-full max-w-md bg-[#0a0a0a] rounded-md shadow-2xl overflow-hidden border border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#111]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
</div>
<div className="mx-auto font-mono text-[10px] text-gray-500 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i> connection_stream.py
                        </div>
</div>

<div className="p-6 font-mono text-xs leading-loose text-gray-300">
<p><span className="text-blue-400">import</span> modulate</p>
<p className="mt-2"><span className="text-gray-500"># Initialize secure client</span></p>
<p>client = modulate.<span className="text-blue-300">Client</span>(api_key=<span className="text-green-400">'sk_live_...'</span>)</p>
<p className="mt-4"><span className="text-gray-500"># Connect brokerage account via Plaid</span></p>
<p>session = client.brokers.<span className="text-blue-300">connect</span>(</p>
<p className="pl-4">provider=<span className="text-green-400">'schwab'</span>,</p>
<p className="pl-4">sync_history=<span className="text-blue-400">True</span></p>
<p>)</p>
<p className="mt-4"><span className="text-gray-500"># Event listener</span></p>
<p><span className="text-blue-400">await</span> session.<span className="text-blue-300">on</span>(<span className="text-green-400">'sync_complete'</span>):</p>
<p className="pl-4">print(<span className="text-green-400">"Portfolio synchronized."</span>)</p>
<div className="mt-6 flex items-center gap-2 text-green-400 animate-pulse">
<span>&gt;</span> <span className="text-white">Connecting... Success.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-grid bg-white flex flex-col items-center overflow-hidden">
<div className="text-center max-w-2xl px-6 mb-16 relative z-10">
<p className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4">Deep Analytics</p>
<h2 className="text-4xl font-serif tracking-tight text-gray-900 mb-6">See the signal through the noise.</h2>
<p className="text-lg text-gray-500 font-light">
                    Advanced performance metrics, risk analysis, and asset allocation breakdown. Understand your true exposure across all accounts.
                </p>
</div>

<div className="w-full max-w-5xl px-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
<div className="bg-white border border-grid shadow-2xl rounded-lg overflow-hidden flex flex-col">

<div className="h-12 border-b border-grid flex items-center justify-between px-6 bg-gray-50/50">
<div className="flex items-center gap-4">
<span className="font-mono text-xs font-semibold text-black">Performance</span>
<span className="font-mono text-xs text-gray-400">Allocation</span>
<span className="font-mono text-xs text-gray-400">Risk</span>
</div>

<div className="flex items-center gap-2">
<span className="font-mono text-[10px] text-gray-500">YTD</span>
<div className="w-8 h-4 bg-gray-200 rounded-full relative cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
<span className="font-mono text-[10px] text-black">ALL</span>
</div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 flex flex-col">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-3xl font-mono tracking-tighter text-black">$2,842,651</h3>
<span className="text-sm text-green-600 font-mono flex items-center gap-1 mt-1">
<i className="w-4 h-4" data-lucide="trending-up"></i> +$342,109 (13.6%)
                                    </span>
</div>

<div className="flex border border-grid rounded p-1 gap-1">
<span className="px-3 py-1 text-[10px] font-mono text-gray-500 hover:bg-gray-50 cursor-pointer">1M</span>
<span className="px-3 py-1 text-[10px] font-mono text-black bg-gray-100 rounded cursor-pointer shadow-sm">YTD</span>
<span className="px-3 py-1 text-[10px] font-mono text-gray-500 hover:bg-gray-50 cursor-pointer">1Y</span>
<span className="px-3 py-1 text-[10px] font-mono text-gray-500 hover:bg-gray-50 cursor-pointer">ALL</span>
</div>
</div>

<div className="w-full h-64 relative border-b border-grid border-dashed">

<div className="absolute inset-0 flex flex-col justify-between opacity-10">
<div className="w-full h-[1px] bg-black"></div><div className="w-full h-[1px] bg-black"></div><div className="w-full h-[1px] bg-black"></div><div className="w-full h-[1px] bg-black"></div>
</div>
<svg className="w-full h-full overflow-visible preserve-aspect-ratio-none" preserveaspectratio="none" viewbox="0 0 800 200">

<defs>
<lineargradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,180 C100,160 200,190 300,130 C400,70 500,100 600,40 C700,-20 800,20 800,20 L800,200 L0,200 Z" fill="url(#chart-gradient)"></path>

<path className="drop-shadow-sm" d="M0,180 C100,160 200,190 300,130 C400,70 500,100 600,40 C700,-20 800,20 800,20" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>

<circle className="shadow-sm" cx="600" cy="40" fill="#3b82f6" r="4" stroke="white" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[10px] left-[550px] bg-black text-white px-3 py-2 text-[10px] font-mono rounded shadow-lg pointer-events-none">
                                    Nov 12<br/>
<span className="font-semibold text-xs">$2,610,400</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4 border-l border-grid pl-8">
<div className="bg-gray-50 border border-grid p-4">
<span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-2">Alpha (vs SPY)</span>
<span className="text-xl font-mono text-black">+2.4%</span>
</div>
<div className="bg-gray-50 border border-grid p-4">
<span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-2">Beta</span>
<span className="text-xl font-mono text-black">1.12</span>
</div>
<div className="bg-gray-50 border border-grid p-4 flex-1">
<span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-4">Top Movers</span>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-sm font-mono">
<span className="text-black font-semibold">AAPL</span>
<span className="text-green-600">+4.2%</span>
</div>
<div className="flex justify-between items-center text-sm font-mono">
<span className="text-black font-semibold">TSLA</span>
<span className="text-red-600">-1.8%</span>
</div>
<div className="flex justify-between items-center text-sm font-mono">
<span className="text-black font-semibold">NVDA</span>
<span className="text-green-600">+8.4%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-grid bg-gray-50 relative">
<div className="max-w-4xl mx-auto px-6 relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-gray-300 md:-translate-x-1/2"></div>
<div className="text-center mb-20 relative z-10 bg-gray-50 inline-block px-4 mx-auto w-full md:w-auto">
<h2 className="text-4xl font-serif tracking-tight text-gray-900">How Modulate works.</h2>
</div>
<div className="flex flex-col gap-24 relative z-10">

<div className="flex flex-col md:flex-row items-start md:items-center w-full group pl-12 md:pl-0">
<div className="md:w-1/2 md:pr-16 md:text-right mb-6 md:mb-0 relative">
<span className="absolute -left-12 md:left-auto md:-right-6 top-0 text-7xl font-mono text-gray-200 group-hover:text-blue-100 transition-colors pointer-events-none select-none z-[-1]">01</span>
<h3 className="text-xl font-semibold font-serif tracking-tight mb-3">Connect Sources</h3>
<p className="text-gray-500 font-light text-sm leading-relaxed">Securely link your brokerages, wallets, and bank accounts using read-only APIs. We support over 50+ major institutions.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1 md:mt-0 group-hover:scale-125 group-hover:bg-black transition-all duration-300"></div>
<div className="md:w-1/2 md:pl-16">

<div className="h-32 border border-grid bg-white flex items-center justify-center gap-4 p-4 shadow-sm">
<div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center"><i className="w-5 h-5 text-gray-400" data-lucide="building-2"></i></div>
<div className="w-8 h-[1px] border-b border-dashed border-gray-300"></div>
<div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center font-mono text-xs">M</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-start md:items-center w-full group pl-12 md:pl-0">
<div className="md:w-1/2 md:pl-16 md:text-left mb-6 md:mb-0 relative">
<span className="absolute -left-12 top-0 text-7xl font-mono text-gray-200 group-hover:text-blue-100 transition-colors pointer-events-none select-none z-[-1]">02</span>
<h3 className="text-xl font-semibold font-serif tracking-tight mb-3">Normalize Data</h3>
<p className="text-gray-500 font-light text-sm leading-relaxed">Our engine cleanses, categorizes, and normalizes transaction data across different providers into a single, standard format.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1 md:mt-0 group-hover:scale-125 group-hover:bg-black transition-all duration-300"></div>
<div className="md:w-1/2 md:pr-16 flex justify-end">
<div className="h-32 w-full border border-grid bg-white flex flex-col justify-center p-6 shadow-sm font-mono text-[10px] text-gray-400">
<div className="flex justify-between border-b border-grid pb-2 mb-2"><span className="text-black">RAW_DATA</span> <i className="w-3 h-3" data-lucide="arrow-right"></i> <span className="text-blue-600">CLEAN_SCHEMA</span></div>
<div>{"ticker": "AAPL", "qty": 150} <span className="text-green-500">✓</span></div>
<div>{"symbol": "MSFT", "amount": 50} <i className="w-3 h-3 inline mx-1" data-lucide="arrow-right"></i> {"ticker": "MSFT", "qty": 50}</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center w-full group pl-12 md:pl-0">
<div className="md:w-1/2 md:pr-16 md:text-right mb-6 md:mb-0 relative">
<span className="absolute -left-12 md:left-auto md:-right-6 top-0 text-7xl font-mono text-gray-200 group-hover:text-blue-100 transition-colors pointer-events-none select-none z-[-1]">03</span>
<h3 className="text-xl font-semibold font-serif tracking-tight mb-3">Analyze &amp; Report</h3>
<p className="text-gray-500 font-light text-sm leading-relaxed">View your consolidated portfolio through our advanced dashboard. Generate reports, analyze risk, and monitor performance in real-time.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1 md:mt-0 group-hover:scale-125 group-hover:bg-black transition-all duration-300"></div>
<div className="md:w-1/2 md:pl-16">
<div className="h-32 border border-grid bg-white flex items-end justify-between p-4 shadow-sm gap-2">
<div className="w-full bg-blue-100 h-1/4 rounded-t-sm"></div>
<div className="w-full bg-blue-300 h-2/4 rounded-t-sm"></div>
<div className="w-full bg-blue-500 h-3/4 rounded-t-sm"></div>
<div className="w-full bg-blue-700 h-full rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 text-white border-b border-gray-800">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-12 lg:p-24 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col justify-center">
<i className="w-8 h-8 mb-8 text-gray-400" data-lucide="shield"></i>
<h2 className="text-4xl font-serif tracking-tight mb-6">Security is our foundation.</h2>
<p className="text-lg text-gray-400 font-light mb-8">
                        We don't hold your assets. We don't have the ability to trade. We simply read and organize your data with bank-level encryption.
                    </p>
<a className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors" href="#">
                        Read Security Documentation <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2">
<div className="p-10 border-b sm:border-r border-gray-800 flex flex-col items-start hover:bg-gray-800/50 transition-colors">
<i className="w-5 h-5 mb-6 text-gray-400" data-lucide="eye-off"></i>
<h4 className="font-mono text-sm mb-2 text-gray-200">Read-Only Access</h4>
<p className="text-xs text-gray-500 leading-relaxed">Modulate uses strictly read-only API connections. Funds cannot be moved or traded.</p>
</div>
<div className="p-10 border-b border-gray-800 flex flex-col items-start hover:bg-gray-800/50 transition-colors">
<i className="w-5 h-5 mb-6 text-gray-400" data-lucide="lock-keyhole"></i>
<h4 className="font-mono text-sm mb-2 text-gray-200">AES-256 Encryption</h4>
<p className="text-xs text-gray-500 leading-relaxed">All sensitive data is encrypted at rest and in transit using industry-standard protocols.</p>
</div>
<div className="p-10 border-b sm:border-b-0 sm:border-r border-gray-800 flex flex-col items-start hover:bg-gray-800/50 transition-colors">
<i className="w-5 h-5 mb-6 text-gray-400" data-lucide="file-check-2"></i>
<h4 className="font-mono text-sm mb-2 text-gray-200">SOC 2 Type II</h4>
<p className="text-xs text-gray-500 leading-relaxed">We undergo regular audits by independent firms to ensure rigorous security compliance.</p>
</div>
<div className="p-10 flex flex-col items-start hover:bg-gray-800/50 transition-colors">
<i className="w-5 h-5 mb-6 text-gray-400" data-lucide="server-crash"></i>
<h4 className="font-mono text-sm mb-2 text-gray-200">No Data Selling</h4>
<p className="text-xs text-gray-500 leading-relaxed">Your financial data belongs to you. We never sell or share it with third-party advertisers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-grid bg-white">
<div className="text-center mb-16">
<h2 className="text-4xl font-serif tracking-tight text-gray-900 mb-4">Simple, transparent pricing.</h2>
<p className="text-lg text-gray-500 font-light">Start for free, upgrade when you need advanced features.</p>
</div>
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border border-grid p-8 lg:p-12 flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
<h3 className="font-mono text-lg mb-2">Basic</h3>
<p className="text-sm text-gray-500 mb-8 h-10">Essential tracking for individual investors.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-mono tracking-tighter text-black">$0</span>
<span className="text-sm text-gray-500 font-mono">/mo</span>
</div>
<ul className="space-y-4 mb-12 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-600"><i className="w-4 h-4 text-black mt-0.5" data-lucide="check"></i> Up to 3 brokerage connections</li>
<li className="flex items-start gap-3 text-sm text-gray-600"><i className="w-4 h-4 text-black mt-0.5" data-lucide="check"></i> Daily sync</li>
<li className="flex items-start gap-3 text-sm text-gray-600"><i className="w-4 h-4 text-black mt-0.5" data-lucide="check"></i> Basic performance dashboard</li>
<li className="flex items-start gap-3 text-sm text-gray-400"><i className="w-4 h-4 mt-0.5" data-lucide="minus"></i> No API access</li>
</ul>
<a className="w-full py-4 border border-black text-center font-mono text-xs uppercase tracking-wider text-black hover:bg-gray-50 transition-colors" href="#">Start Free</a>
</div>

<div className="border-2 border-black p-8 lg:p-12 flex flex-col bg-black text-white relative shadow-xl transform md:-translate-y-2">
<div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[10px] px-3 py-1 uppercase tracking-widest">Recommended</div>
<h3 className="font-mono text-lg mb-2">Pro</h3>
<p className="text-sm text-gray-400 mb-8 h-10">Advanced intelligence for active portfolios.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-mono tracking-tighter text-white">$29</span>
<span className="text-sm text-gray-400 font-mono">/mo</span>
</div>
<ul className="space-y-4 mb-12 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-blue-400 mt-0.5" data-lucide="check"></i> Unlimited connections</li>
<li className="flex items-start gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-blue-400 mt-0.5" data-lucide="check"></i> Real-time sync</li>
<li className="flex items-start gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-blue-400 mt-0.5" data-lucide="check"></i> Advanced risk &amp; allocation analytics</li>
<li className="flex items-start gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-blue-400 mt-0.5" data-lucide="check"></i> Full API access &amp; Webhooks</li>
</ul>
<a className="w-full py-4 bg-white text-center font-mono text-xs uppercase tracking-wider text-black hover:bg-gray-100 transition-colors" href="#">Get Pro</a>
</div>
</div>
</section>

<section className="py-32 bg-blue-600 text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8 relative z-10">Stop guessing.<br/>Start knowing.</h2>
<p className="text-xl text-blue-100 mb-12 max-w-xl font-light relative z-10">Join thousands of investors using Modulate to bring clarity to their financial lives.</p>
<form className="w-full max-w-md flex flex-col sm:flex-row gap-4 relative z-10">
<input className="flex-1 bg-white/10 border border-blue-400/50 text-white placeholder-blue-200 px-4 py-4 focus:outline-none focus:border-white font-mono text-sm rounded-none" placeholder="Enter your email" required="" type="email"/>
<button className="bg-white text-blue-600 px-8 py-4 font-mono text-xs uppercase tracking-wider hover:bg-blue-50 transition-colors font-semibold" type="submit">
                    Request Access
                </button>
</form>
</section>

<footer className="bg-white border-t border-grid pt-16 pb-8 px-6 lg:px-24">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="flex flex-col gap-[3px]">
<div className="w-4 h-1 bg-black"></div>
<div className="w-4 h-1 bg-black w-[10px]"></div>
</div>
<span className="font-mono text-xs uppercase tracking-[0.25em] text-black font-semibold">Modulate</span>
</a>
<p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">Automated portfolio intelligence for modern investors. Consolidate, analyze, and optimize your wealth.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-black mb-6">Product</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Features</a></li>
<li><a className="hover:text-black transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-black transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-black mb-6">Resources</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-black transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-black mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">About</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Security</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-grid text-xs text-gray-400 font-mono">
<p>© 2024 Modulate Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
