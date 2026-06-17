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

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.style.overflow = 'auto';
        });

        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.style.overflow = 'auto';
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
      

<aside className="w-16 border-r border-gray-200 hidden lg:flex flex-col items-center justify-between py-6 sticky top-0 h-screen bg-[#fafafa] z-50 shrink-0">
<button aria-label="Menu" className="text-gray-400 hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="flex flex-col items-center space-y-12">

<div className="flex flex-col items-center space-y-6 relative">
<div className="absolute w-[1px] h-full bg-gray-200 left-1/2 -translate-x-1/2 -z-10"></div>
<div className="flex flex-col items-center group cursor-pointer">
<span className="text-xs text-black font-medium mb-2 group-hover:-translate-y-1 transition-transform">01</span>
<div className="w-2 h-2 rounded-full bg-black"></div>
</div>
<div className="flex flex-col items-center group cursor-pointer opacity-30 hover:opacity-100 transition-opacity">
<span className="text-xs font-medium mb-2">02</span>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
<div className="flex flex-col items-center group cursor-pointer opacity-30 hover:opacity-100 transition-opacity">
<span className="text-xs font-medium mb-2">03</span>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
<div className="flex flex-col items-center group cursor-pointer opacity-30 hover:opacity-100 transition-opacity">
<span className="text-xs font-medium mb-2">04</span>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>
<div className="rotate-180" style={{writingMode: 'vertical-rl'}}>
<span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Autonomous Edge</span>
</div>
</div>
<div className="w-8 h-8 border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-500">
            [ s ]
        </div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#fafafa]">

<header className="h-20 border-b border-gray-200 flex items-stretch sticky top-0 bg-[#fafafa]/90 backdrop-blur-sm z-40">

<div className="lg:hidden flex items-center px-4 border-r border-gray-200">
<button className="p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center px-6 lg:px-8 border-r border-gray-200 shrink-0 min-w-[280px]">
<div className="flex items-center gap-3">
<div className="grid grid-cols-3 gap-[2px]">
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-[0.1em] leading-none mb-1">SENTIENT</span>
<span className="text-[0.6rem] text-gray-500 uppercase tracking-widest leading-none">Capital Intelligence</span>
</div>
</div>
</div>

<nav className="hidden lg:flex flex-1 items-center justify-center px-8 gap-12 text-xs font-medium uppercase tracking-[0.1em] text-gray-600">
<a className="hover:text-black transition-colors" href="#product">Product</a>
<a className="hover:text-black transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-black transition-colors" href="#data-edge">Data Edge</a>
<a className="hover:text-black transition-colors" href="#about">About</a>
<a className="hover:text-black transition-colors" href="#careers">Careers</a>
</nav>

<div className="border-l border-gray-200 flex items-stretch ml-auto">
<a className="bg-black text-white px-8 flex items-center gap-4 hover:bg-gray-900 transition-colors group" href="#request">
<span className="text-xs uppercase tracking-[0.1em] font-medium">Request Access</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</header>

<div className="fixed inset-0 bg-[#fafafa] z-50 hidden flex-col pt-20 px-6 pb-6" id="mobile-menu">
<button className="absolute top-6 right-6 p-2" id="close-menu-btn">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
<nav className="flex flex-col space-y-6 text-2xl tracking-tight font-light mt-12">
<a className="border-b border-gray-200 pb-4" href="#product">Product</a>
<a className="border-b border-gray-200 pb-4" href="#methodology">Methodology</a>
<a className="border-b border-gray-200 pb-4" href="#data-edge">Data Edge</a>
<a className="border-b border-gray-200 pb-4" href="#about">About</a>
<a className="border-b border-gray-200 pb-4" href="#careers">Careers</a>
</nav>
</div>

<section className="flex flex-col lg:flex-row flex-1 border-b border-gray-200 relative overflow-hidden">

<div className="flex-1 lg:w-1/2 border-r border-gray-200 flex flex-col justify-center px-8 lg:px-20 py-20 lg:py-0 relative z-10 bg-[#fafafa]/80 backdrop-blur-md">
<div className="mb-8 flex items-center gap-3">
<div className="flex gap-1 text-gray-400">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><line x1="4" x2="20" y1="20" y2="4"></line><line x1="4" x2="12" y1="12" y2="4"></line><line x1="12" x2="20" y1="20" y2="12"></line></svg>
</div>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">Sentient Analyst Agent</span>
</div>
<h1 className="text-5xl lg:text-7xl font-normal tracking-tighter leading-[1.1] uppercase mb-8 text-black">
                    Autonomous<br/>
                    Hedge Fund<br/>
                    Research Analyst<br/>
                    Agent <span className="inline-block w-4 h-4 lg:w-6 lg:h-6 bg-black ml-2 translate-y-[-4px] lg:translate-y-[-8px]"></span>
</h1>
<p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-12 font-light">
                    An autonomous AI analyst that continuously researches markets, companies and macro signals to surface asymmetric opportunities and hidden risks—24/7.
                </p>
<div className="flex flex-wrap items-center gap-6">
<a className="bg-black text-white h-14 px-8 flex items-center gap-4 hover:bg-gray-900 transition-colors group" href="#demo">
<span className="text-xs uppercase tracking-[0.1em] font-medium">See the Agent in Action</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<button className="h-14 px-6 flex items-center gap-4 text-gray-600 hover:text-black transition-colors group border border-transparent hover:border-gray-200">
<span className="text-xs uppercase tracking-[0.1em] font-medium">Watch Overview</span>
<div className="w-6 h-6 border border-gray-300 border-dashed flex items-center justify-center group-hover:border-solid transition-all">
<i className="w-3 h-3 fill-current" data-lucide="play" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>

<div className="flex-1 lg:w-1/2 relative bg-white overflow-hidden min-h-[600px] flex items-center justify-center p-8">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<i className="absolute top-1/4 left-1/4 text-gray-300 w-4 h-4 z-0" data-lucide="plus" strokeWidth="1.5"></i>
<i className="absolute bottom-1/4 right-1/4 text-gray-300 w-4 h-4 z-0" data-lucide="plus" strokeWidth="1.5"></i>

<div className="relative w-[500px] h-[500px] flex items-center justify-center z-10 pulse-slow">
<div className="absolute inset-0 abstract-sphere-bg opacity-40"></div>

<div className="relative w-32 h-32 z-20">
<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 100 100">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#333', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#000', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<polygon fill="url(#grad1)" opacity="0.9" points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25"></polygon>
<polygon fill="#444" opacity="0.6" points="50 5, 95 25, 50 50, 5 25"></polygon>
<polygon fill="#222" opacity="0.8" points="5 25, 50 50, 50 95, 5 75"></polygon>
</svg>
</div>

<div className="absolute w-40 h-40 border border-gray-300 border-dashed rounded-full z-10 opacity-30"></div>
<div className="absolute w-48 h-48 z-10 flex items-center justify-between">
<div className="w-2 h-2 border-l border-t border-black absolute top-0 left-0"></div>
<div className="w-2 h-2 border-r border-t border-black absolute top-0 right-0"></div>
<div className="w-2 h-2 border-l border-b border-black absolute bottom-0 left-0"></div>
<div className="w-2 h-2 border-r border-b border-black absolute bottom-0 right-0"></div>
</div>

<div className="w-1.5 h-1.5 bg-black absolute top-[20%] right-[30%]"></div>
<div className="w-1 h-1 bg-black absolute bottom-[30%] left-[25%]"></div>
<div className="w-1.5 h-1.5 bg-black absolute bottom-[40%] right-[15%]"></div>
</div>


<div className="absolute top-12 lg:top-24 left-8 lg:left-12 z-20">
<div className="flex flex-col">
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 mb-1">Universe Scanned</span>
<span className="text-3xl font-light tracking-tight text-black mb-1 font-mono-numbers">93,671</span>
<span className="text-xs text-gray-500">Sources</span>
</div>

<div className="hidden lg:block absolute top-1/2 left-[110%] w-24 h-[1px] bg-gray-200 rotate-[15deg] origin-left">
<div className="w-1 h-1 bg-gray-300 rounded-full absolute right-0 -translate-y-1/2"></div>
</div>
</div>

<div className="absolute top-12 lg:top-20 right-8 lg:right-12 z-20">
<div className="flex flex-col space-y-4">
<div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 block mb-1">Agent Status</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium tracking-widest uppercase">Online</span>
</div>
</div>
<div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 block mb-0.5">Cycle</span>
<span className="text-sm font-medium tracking-tight font-mono-numbers">17,532</span>
</div>
<div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 block mb-0.5">Last Update</span>
<span className="text-xs font-medium tracking-tight">2 MIN AGO</span>
</div>
</div>
</div>

<div className="absolute bottom-24 lg:bottom-40 right-8 lg:right-12 z-20">
<div className="flex flex-col text-right lg:text-left">
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 mb-1">Insights Generated</span>
<span className="text-3xl font-light tracking-tight text-black mb-1 font-mono-numbers">7,284</span>
<span className="text-xs text-gray-500">Today</span>
</div>

<div className="hidden lg:block absolute top-1/2 right-[110%] w-16 h-[1px] bg-gray-200 -rotate-[5deg] origin-right">
<div className="w-1 h-1 bg-gray-300 rounded-full absolute left-0 -translate-y-1/2"></div>
</div>
</div>

<div className="absolute bottom-20 lg:bottom-28 left-8 lg:left-32 z-20">
<div className="flex flex-col">
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 mb-1">Opportunities<br/>Identified</span>
<span className="text-3xl font-light tracking-tight text-black mb-1 font-mono-numbers">128</span>
<span className="text-xs text-gray-500">This Week</span>
</div>

<div className="hidden lg:block absolute top-1/2 left-[110%] w-20 h-[1px] bg-gray-200 -rotate-[20deg] origin-left">
<div className="w-1 h-1 bg-gray-300 rounded-full absolute right-0 -translate-y-1/2"></div>
</div>
</div>
</div>
</section>

<div className="border-b border-gray-200 flex flex-col md:flex-row bg-[#fafafa] relative z-20">

<div className="hidden lg:flex w-24 border-r border-gray-200 items-center justify-center shrink-0">
<div className="relative flex items-center justify-center w-8 h-8">
<span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-black"></span>
<span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-black"></span>
<span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-black"></span>
<span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-black"></span>
<span className="font-medium text-sm">s</span>
</div>
</div>

<div className="flex-1 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200">

<div className="p-6 lg:p-8 flex items-start gap-4 hover:bg-white transition-colors group">
<i className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors mt-0.5 shrink-0" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 block mb-2">Earnings Calls Analyzed</span>
<span className="text-2xl font-light tracking-tight text-black block mb-1 font-mono-numbers">24,301</span>
<span className="text-[0.65rem] text-gray-500">This Month</span>
</div>
</div>

<div className="p-6 lg:p-8 flex items-start gap-4 hover:bg-white transition-colors group">
<i className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors mt-0.5 shrink-0" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 block mb-2">Filings Processed</span>
<span className="text-2xl font-light tracking-tight text-black block mb-1 font-mono-numbers">18,342</span>
<span className="text-[0.65rem] text-gray-500">This Month</span>
</div>
</div>

<div className="p-6 lg:p-8 flex items-start gap-4 hover:bg-white transition-colors group">
<i className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors mt-0.5 shrink-0" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 block mb-2">News &amp; Events Tracked</span>
<span className="text-2xl font-light tracking-tight text-black block mb-1 font-mono-numbers">56,298</span>
<span className="text-[0.65rem] text-gray-500">This Month</span>
</div>
</div>

<div className="p-6 lg:p-8 flex items-start gap-4 hover:bg-white transition-colors group">
<i className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors mt-0.5 shrink-0" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div>
<span className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-gray-500 block mb-2">Macro Indicators Monitored</span>
<span className="text-2xl font-light tracking-tight text-black block mb-1 font-mono-numbers">1,102</span>
<span className="text-[0.65rem] text-gray-500">Real-time</span>
</div>
</div>
</div>

<div className="hidden lg:flex w-32 bg-black text-white items-center justify-center flex-col gap-2 shrink-0">
<span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium">Scroll</span>
<div className="w-[1px] h-8 bg-white/20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
</div>
</div>
</div>

<section className="border-b border-gray-200" id="methodology">
<div className="grid lg:grid-cols-[1fr_2fr]">

<div className="p-10 lg:p-20 border-r border-gray-200 flex flex-col justify-between bg-white">
<div>
<div className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-4">Phase 02</div>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight uppercase leading-tight mb-6">Cognitive<br/>Processing<br/>Architecture</h2>
<p className="text-base text-gray-600 font-light leading-relaxed">
                            A multi-modal approach to market intelligence. The agent moves beyond simple NLP, employing structured reasoning frameworks to connect disparate data points.
                        </p>
</div>
<div className="mt-12 lg:mt-0">
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors" href="#">
                            Read Whitepaper <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-[#fafafa]">

<div className="p-10 lg:p-12 hover:bg-white transition-colors group relative">
<div className="text-4xl text-gray-200 font-light mb-8 group-hover:text-black transition-colors font-mono-numbers">01</div>
<h3 className="text-lg font-medium tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="database" strokeWidth="1.5"></i> Ingestion
                        </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                            Continuous parsing of 10-Ks, 10-Qs, transcripts, broker research, alternative data, and global macro feeds in real-time.
                        </p>
<div className="space-y-2 border-t border-gray-200 pt-6">
<div className="flex justify-between items-center text-xs text-gray-500">
<span>Latency</span>
<span className="font-mono-numbers text-black">&lt; 50ms</span>
</div>
<div className="flex justify-between items-center text-xs text-gray-500">
<span>Throughput</span>
<span className="font-mono-numbers text-black">10k docs/sec</span>
</div>
</div>
</div>

<div className="p-10 lg:p-12 hover:bg-white transition-colors group relative">
<div className="text-4xl text-gray-200 font-light mb-8 group-hover:text-black transition-colors font-mono-numbers">02</div>
<h3 className="text-lg font-medium tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="cpu" strokeWidth="1.5"></i> Synthesis
                        </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                            Cross-referencing entities, sentiment analysis, anomaly detection, and semantic mapping to build a proprietary knowledge graph.
                        </p>
<div className="space-y-2 border-t border-gray-200 pt-6">
<div className="flex justify-between items-center text-xs text-gray-500">
<span>Entities</span>
<span className="font-mono-numbers text-black">4.2B Nodes</span>
</div>
<div className="flex justify-between items-center text-xs text-gray-500">
<span>Models</span>
<span className="text-black">Proprietary LLMs</span>
</div>
</div>
</div>

<div className="p-10 lg:p-12 hover:bg-white transition-colors group relative">
<div className="text-4xl text-gray-200 font-light mb-8 group-hover:text-black transition-colors font-mono-numbers">03</div>
<h3 className="text-lg font-medium tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="target" strokeWidth="1.5"></i> Action
                        </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                            Translating insights into actionable conviction scores, risk factor attributions, and direct trade signals.
                        </p>
<div className="space-y-2 border-t border-gray-200 pt-6">
<div className="flex justify-between items-center text-xs text-gray-500">
<span>Output</span>
<span className="text-black">Conviction Scoring</span>
</div>
<div className="flex justify-between items-center text-xs text-gray-500">
<span>Integration</span>
<span className="text-black">API / FIX Protocol</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-white" id="data-edge">
<div className="py-20 lg:py-32 px-8 lg:px-20 text-center max-w-5xl mx-auto">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-6 block">The Data Edge</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter uppercase mb-8 leading-tight">
                    Transforming<br/>Noise Into Signal
                </h2>
<p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                    The edge in modern markets isn't having data, it's synthesizing unstructured complexity faster than humanly possible.
                </p>
</div>

<div className="border-t border-gray-200">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-gray-200">
<div className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#fafafa] transition-colors h-32">
<i className="w-5 h-5 text-gray-400" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-widest text-black">SEC Filings</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#fafafa] transition-colors h-32">
<i className="w-5 h-5 text-gray-400" data-lucide="mic" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-widest text-black">Transcripts</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#fafafa] transition-colors h-32">
<i className="w-5 h-5 text-gray-400" data-lucide="globe" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-widest text-black">Global News</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#fafafa] transition-colors h-32">
<i className="w-5 h-5 text-gray-400" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-widest text-black">Broker Notes</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#fafafa] transition-colors h-32">
<i className="w-5 h-5 text-gray-400" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-widest text-black">Alt Data</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#fafafa] transition-colors h-32">
<i className="w-5 h-5 text-gray-400" data-lucide="twitter" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-widest text-black">Social Sentiment</span>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-[#fafafa] p-8 lg:p-20">
<div className="mb-12 flex justify-between items-end">
<div>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-4 block">Capabilities</span>
<h2 className="text-3xl font-normal tracking-tight uppercase">Analytical Precision</h2>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="lg:col-span-2 border border-gray-200 bg-white p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<i className="w-6 h-6 mb-6 text-black" data-lucide="zap" strokeWidth="1.5"></i>
<h3 className="text-xl font-normal tracking-tight mb-3">Event-Driven Alpha Detection</h3>
<p className="text-sm text-gray-600 font-light max-w-md">Instantly analyzes breaking news, management changes, and M&amp;A rumors, correlating events with historical market reactions to predict price impact probabilities within milliseconds.</p>
</div>

<div className="mt-6 border border-gray-100 bg-[#fafafa] p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono font-medium">ALERT_TRIGGER: M&amp;A_RUMOR</span>
</div>
<span className="text-xs font-mono text-gray-500">Confidence: 89.4%</span>
</div>
</div>
</div>

<div className="border border-gray-200 bg-white p-8 flex flex-col justify-between hover:border-black transition-colors">
<div>
<i className="w-6 h-6 mb-6 text-black" data-lucide="microscope" strokeWidth="1.5"></i>
<h3 className="text-xl font-normal tracking-tight mb-3">Fundamental Deep Dive</h3>
<p className="text-sm text-gray-600 font-light">Automated extraction of KPIs, segment revenues, and hidden footnotes from dense regulatory filings.</p>
</div>
<a className="text-xs font-medium uppercase tracking-widest text-black flex items-center gap-2 mt-4" href="#">
                        View Models <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="border border-gray-200 bg-white p-8 flex flex-col justify-between hover:border-black transition-colors">
<div>
<i className="w-6 h-6 mb-6 text-black" data-lucide="shield-alert" strokeWidth="1.5"></i>
<h3 className="text-xl font-normal tracking-tight mb-3">Risk Factor Attribution</h3>
<p className="text-sm text-gray-600 font-light">Continuous monitoring of portfolio exposure against emerging macro risks and geopolitical shifts.</p>
</div>
<div className="w-full h-1 bg-gray-100 mt-4 overflow-hidden">
<div className="w-[75%] h-full bg-black"></div>
</div>
</div>

<div className="lg:col-span-2 border border-gray-200 bg-black text-white p-8 relative overflow-hidden group">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
<div className="relative z-10 flex flex-col h-full justify-center lg:flex-row lg:items-center justify-between gap-8">
<div className="max-w-md">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-4 block">Beta Feature</span>
<h3 className="text-2xl font-normal tracking-tight mb-3">Sentiment Divergence Scoring</h3>
<p className="text-sm text-gray-400 font-light">Identifies dislocations between market price action and underlying fundamental sentiment derived from textual analysis.</p>
</div>
<div className="shrink-0 flex items-end gap-2 h-24">

<div className="w-8 bg-gray-800 h-[30%] hover:bg-white transition-colors duration-300"></div>
<div className="w-8 bg-gray-800 h-[50%] hover:bg-white transition-colors duration-300"></div>
<div className="w-8 bg-gray-700 h-[40%] hover:bg-white transition-colors duration-300"></div>
<div className="w-8 bg-gray-600 h-[70%] hover:bg-white transition-colors duration-300"></div>
<div className="w-8 bg-white h-[90%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-[#0a0a0a] text-gray-300 font-mono-numbers relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.02] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="grid lg:grid-cols-2">
<div className="p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col justify-center relative z-10">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-6 block">Terminal View</span>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-white mb-6">See Inside the<br/>Agent's Mind</h2>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-8 max-w-md">
                        The decision-making process is fully transparent. Access structured logs of the agent's reasoning, source citations, and confidence intervals for every signal generated.
                    </p>
<a className="w-fit text-xs font-medium uppercase tracking-[0.1em] text-white border border-gray-700 px-6 py-3 hover:bg-white hover:text-black transition-all" href="#">
                        Request API Docs
                    </a>
</div>

<div className="p-6 lg:p-10 bg-black relative min-h-[400px] text-xs font-mono flex flex-col">

<div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
<span className="ml-4 text-gray-600">sentient_core_v2.log</span>
</div>

<div className="space-y-3 flex-1 overflow-y-auto">
<div className="text-gray-500">[14:32:01.045] INFO: Polling SEC EDGAR for new filings...</div>
<div className="text-gray-500">[14:32:02.112] SUCCESS: New 8-K detected for Ticker: <span className="text-white">NVDA</span></div>
<div className="text-gray-500">[14:32:02.150] INFO: Initiating semantic parse. Extraction target: Forward Guidance.</div>
<div className="text-emerald-500/80">[14:32:03.400] SIGNAL: Positive divergence identified in supply chain commentary vs consensus.</div>
<div className="text-gray-400 pl-4 border-l border-gray-800 my-2 py-1">
                            "Reasoning: Mention of 'advanced packaging capacity constraints easing' contradicts recent sell-side notes predicting tight supply through Q4."<br/>
                            "Confidence: 91.2%"<br/>
                            "Source: NVDA 8-K Ex. 99.1, Para 4, Line 2."
                        </div>
<div className="text-gray-500">[14:32:04.010] ACTION: Updating conviction score matrix.</div>
<div className="text-white typing-container mt-4">awaiting next event stream</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-white">
<div className="py-20 px-8 lg:px-20 max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-4 block">Architecture</span>
<h2 className="text-3xl font-normal tracking-tight uppercase">Institutional Grade By Design</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="flex flex-col items-center md:items-start group">
<div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6 bg-[#fafafa] group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium tracking-tight mb-3">Isolated Environments</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Single-tenant architecture ensures your proprietary data, models, and signals are never commingled. SOC2 Type II certified.</p>
</div>
<div className="flex flex-col items-center md:items-start group">
<div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6 bg-[#fafafa] group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="server" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium tracking-tight mb-3">Low-Latency Infrastructure</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Deployed on bare-metal clusters adjacent to major exchange datacenters to minimize execution and parsing delays.</p>
</div>
<div className="flex flex-col items-center md:items-start group">
<div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-6 bg-[#fafafa] group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium tracking-tight mb-3">Seamless Integration</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">RESTful APIs, WebSockets, and FIX protocol support for direct integration into existing OMS/EMS systems.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-[#fafafa] py-16 px-8 flex flex-col items-center justify-center overflow-hidden">
<span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gray-400 mb-8 text-center">Trusted by Quantitative &amp; Fundamental Funds Managing $50B+</span>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale filter hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-serif text-xl tracking-widest"><div className="w-4 h-4 bg-black rounded-sm rotate-45"></div> APEX</div>
<div className="flex items-center gap-2 font-sans font-bold text-xl tracking-tighter uppercase"><div className="w-6 h-1 bg-black"></div> Quantedge</div>
<div className="flex items-center gap-2 font-mono text-lg"><div className="w-4 h-4 border-2 border-black rounded-full"></div> STRATOS</div>
<div className="flex items-center gap-2 font-serif italic text-xl">Meridian</div>
</div>
</section>

<section className="bg-black text-white relative overflow-hidden" id="request">

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
<div className="py-32 px-8 text-center relative z-10 flex flex-col items-center">
<div className="w-16 h-16 border border-white/20 flex items-center justify-center mb-8">
<div className="w-3 h-3 bg-white animate-pulse"></div>
</div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tighter uppercase mb-6 leading-none">
                    Initialize Your<br/>Agent
                </h2>
<p className="text-gray-400 font-light max-w-md mx-auto mb-10 text-base">
                    Access to the platform is strictly limited to ensure alpha decay mitigation. Request a technical demonstration.
                </p>
<form className="w-full max-w-md mx-auto flex flex-col gap-4">
<input className="bg-transparent border border-gray-700 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors text-white placeholder:text-gray-600 font-mono" placeholder="Institutional Email" required="" type="email"/>
<button className="bg-white text-black px-6 py-4 text-xs font-medium uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" type="submit">
                        Submit Request <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</section>

<footer className="bg-black text-gray-500 border-t border-gray-800 text-xs font-mono px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white"></div>
<span>© 2024 Sentient Capital Intelligence LLC.</span>
</div>
<div className="flex gap-8 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">System Status</a>
</div>
</footer>
</main>


    </>
  );
}
