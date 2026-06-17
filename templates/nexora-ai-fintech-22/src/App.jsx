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



        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = btn.querySelector('i');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
            
            if (menu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        }

        btn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));
    
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
      

<header className="fixed top-0 w-full bg-[#fcfcfc]/80 backdrop-blur-md z-50 border-b border-zinc-200">
<div className="flex items-stretch h-20">

<div className="border-r border-zinc-200 flex items-center px-6 lg:px-10 shrink-0">
<a className="flex items-center gap-3" href="#">
<div className="grid grid-cols-3 gap-[2px]">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full opacity-30"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full opacity-30"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full opacity-30"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full rounded-full"></div>
</div>
<span className="font-medium tracking-widest text-sm uppercase">Nexora</span>
</a>
</div>

<nav className="hidden lg:flex flex-1 items-center justify-center gap-12">
<a className="text-sm text-zinc-500 hover:text-black transition-colors" href="#product">Product</a>
<a className="text-sm text-zinc-500 hover:text-black transition-colors" href="#solutions">Solutions</a>
<a className="text-sm text-zinc-500 hover:text-black transition-colors" href="#use-cases">Use Cases</a>
<a className="text-sm text-zinc-500 hover:text-black transition-colors" href="#resources">Resources</a>
<a className="text-sm text-zinc-500 hover:text-black transition-colors" href="#about">About</a>
</nav>

<div className="hidden lg:flex shrink-0 items-stretch">
<a className="border-l border-zinc-200 flex items-center px-10 text-sm text-zinc-600 hover:text-black transition-colors" href="#">
                    Login
                </a>
<a className="bg-black text-white flex items-center px-10 text-sm hover:bg-zinc-800 transition-colors group" href="#">
                    Request Access
                    <i className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="lg:hidden ml-auto px-6 flex items-center border-l border-zinc-200" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="fixed inset-0 bg-[#fcfcfc] z-40 hidden pt-20 flex-col border-t border-zinc-200" id="mobile-menu">
<nav className="flex flex-col p-6 gap-6 text-lg">
<a className="mobile-link text-zinc-600 hover:text-black" href="#product">Product</a>
<a className="mobile-link text-zinc-600 hover:text-black" href="#solutions">Solutions</a>
<a className="mobile-link text-zinc-600 hover:text-black" href="#use-cases">Use Cases</a>
<a className="mobile-link text-zinc-600 hover:text-black" href="#resources">Resources</a>
<a className="mobile-link text-zinc-600 hover:text-black" href="#about">About</a>
</nav>
<div className="mt-auto flex flex-col p-6 gap-4 border-t border-zinc-200">
<a className="flex justify-center items-center py-4 text-zinc-600 border border-zinc-200" href="#">Login</a>
<a className="flex justify-center items-center py-4 bg-black text-white" href="#">Request Access</a>
</div>
</div>

<div className="flex pt-20 min-h-screen">

<aside className="hidden lg:flex flex-col w-24 shrink-0 border-r border-zinc-200 relative pt-12 pb-8 items-center justify-between">
<div className="flex flex-col gap-6 relative">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div>

<div className="absolute -left-6 top-[-5px] text-[10px] text-zinc-800 font-medium tracking-widest">01</div>
<div className="absolute -left-6 top-[25px] text-[10px] text-zinc-400 tracking-widest">02</div>
<div className="absolute -left-6 top-[55px] text-[10px] text-zinc-400 tracking-widest">03</div>
<div className="absolute -left-6 top-[85px] text-[10px] text-zinc-400 tracking-widest">04</div>
</div>
<div className="absolute bottom-48 left-1/2 -translate-x-1/2 origin-center -rotate-90 whitespace-nowrap">
<span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">AI Analyst for Investment Banks</span>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<section className="flex-1 flex flex-col relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none hidden lg:block">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-100"></div>
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-zinc-100"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-zinc-100"></div>
<div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-100"></div>
</div>
<div className="flex-1 flex flex-col lg:flex-row items-stretch">

<div className="flex-1 px-6 lg:px-20 py-16 lg:py-24 flex flex-col justify-center relative z-10">

<div className="relative inline-flex items-center self-start mb-10 px-4 py-2">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-300"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-300"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-300"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-300"></div>
<span className="w-1 h-1 bg-black rounded-full mr-3"></span>
<span className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-600">AI Analyst for Investment Banks</span>
</div>
<h1 className="text-5xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight font-medium text-black mb-8">
                            Autonomous AI.<br/>
<span className="text-zinc-600">Institutional<br/>Intelligence.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed mb-12">
                            Nexora is an autonomous AI analyst that researches, models, and delivers investment insights—so your team can focus on what moves markets.
                        </p>
<div className="flex flex-wrap items-center gap-6">
<a className="bg-black text-white px-8 py-4 flex items-center text-sm hover:bg-zinc-800 transition-colors group" href="#">
                                Request Early Access
                                <i className="w-4 h-4 ml-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a className="flex items-center text-sm text-zinc-500 hover:text-black transition-colors group" href="#">
                                See it in action
                                <i className="w-3 h-3 ml-2 fill-current opacity-70 group-hover:opacity-100" data-lucide="play" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="flex-1 relative min-h-[500px] lg:min-h-[auto] border-t lg:border-t-0 lg:border-l border-zinc-200 bg-zinc-50/50 flex items-center justify-center p-10 overflow-hidden">

<div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-zinc-300"></div>
<div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-zinc-300"></div>
<div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-zinc-300"></div>
<div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-zinc-300"></div>

<div className="relative w-full max-w-lg aspect-square">
<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 400 400">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#f4f4f5', stopOpacity: '0.8'}}></stop>
<stop offset="100%" style={{stopColor: '#e4e4e7', stopOpacity: '0.2'}}></stop>
</lineargradient>
<pattern height="20" id="dotGrid" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="#d4d4d8" r="1"></circle>
</pattern>
</defs>

<polygon fill="url(#grad1)" points="200,50 350,136 350,264 200,350 50,264 50,136" stroke="#d4d4d8" strokeWidth="1"></polygon>

<line stroke="#d4d4d8" strokeWidth="1" x1="200" x2="200" y1="200" y2="350"></line>
<line stroke="#d4d4d8" strokeWidth="1" x1="200" x2="50" y1="200" y2="136"></line>
<line stroke="#d4d4d8" strokeWidth="1" x1="200" x2="350" y1="200" y2="136"></line>

<polygon fill="url(#dotGrid)" opacity="0.5" points="200,50 350,136 200,200 50,136"></polygon>

<g transform="translate(180, 160)">
<polygon fill="#18181b" points="20,0 40,11.5 40,34.5 20,46 0,34.5 0,11.5"></polygon>
<polygon fill="#27272a" points="20,0 40,11.5 20,23 0,11.5"></polygon>
<polygon fill="#09090b" points="40,11.5 40,34.5 20,46 20,23"></polygon>

<path d="M15,10 L25,18 M15,18 L25,10" stroke="#a1a1aa" strokeLinecap="round" strokeWidth="1.5"></path>
</g>
<g transform="translate(240, 200)">
<polygon fill="#18181b" points="15,0 30,8.6 30,25.8 15,34.5 0,25.8 0,8.6"></polygon>
<polygon fill="#3f3f46" points="15,0 30,8.6 15,17.2 0,8.6"></polygon>
<polygon fill="#09090b" points="30,8.6 30,25.8 15,34.5 15,17.2"></polygon>
</g>
<g transform="translate(130, 220)">
<polygon fill="#27272a" opacity="0.9" points="25,0 50,14.4 50,43.2 25,57.6 0,43.2 0,14.4"></polygon>
<polygon fill="#52525b" opacity="0.9" points="25,0 50,14.4 25,28.8 0,14.4"></polygon>
<polygon fill="#18181b" opacity="0.9" points="50,14.4 50,43.2 25,57.6 25,28.8"></polygon>

<circle cx="25" cy="28.8" fill="white" r="2"></circle>
<circle cx="50" cy="14.4" fill="white" r="2"></circle>
<circle cx="0" cy="14.4" fill="white" r="2"></circle>
</g>

<g opacity="0.4" transform="translate(100, 100)">
<polygon fill="none" points="15,0 30,8.6 30,25.8 15,34.5 0,25.8 0,8.6" stroke="#52525b" strokeWidth="1"></polygon>
<line stroke="#52525b" strokeWidth="1" x1="15" x2="15" y1="17.2" y2="34.5"></line>
<line stroke="#52525b" strokeWidth="1" x1="15" x2="0" y1="17.2" y2="8.6"></line>
<line stroke="#52525b" strokeWidth="1" x1="15" x2="30" y1="17.2" y2="8.6"></line>
</g>
<g opacity="0.3" transform="translate(260, 110)">
<polygon fill="#a1a1aa" points="20,0 40,11.5 40,34.5 20,46 0,34.5 0,11.5"></polygon>
<polygon fill="#e4e4e7" points="20,0 40,11.5 20,23 0,11.5"></polygon>
</g>

<path d="M 180,50 L 180,-20 L 120,-20" fill="none" stroke="#a1a1aa" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<circle cx="180" cy="50" fill="#18181b" r="2"></circle>
<path d="M 350,200 L 420,200" fill="none" stroke="#a1a1aa" strokeWidth="0.5"></path>
<circle cx="350" cy="200" fill="#18181b" r="2"></circle>
<path d="M 200,350 L 200,400 L 150,400" fill="none" stroke="#a1a1aa" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<circle cx="200" cy="350" fill="#18181b" r="2"></circle>
</svg>

<div className="absolute -top-6 left-0 text-[10px] tracking-widest text-zinc-500 uppercase w-24">
                                Unstructured Data Sources
                            </div>
<div className="absolute top-1/2 -right-8 translate-x-full -translate-y-1/2 flex items-center gap-3">
<div className="w-6 h-6 bg-black flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="chevron-right" strokeWidth="2"></i>
</div>
<span className="text-[10px] tracking-widest text-zinc-500 uppercase w-20">AI Research Engine</span>
</div>
<div className="absolute -bottom-8 left-12 text-[10px] tracking-widest text-zinc-500 uppercase w-28 text-right">
                                Institutional Grade Insights
                            </div>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-5 border-t border-zinc-200 divide-x divide-y lg:divide-y-0 divide-zinc-200 bg-white">
<div className="p-6 flex flex-col gap-3 justify-center">
<i className="w-5 h-5 text-black" data-lucide="landmark" strokeWidth="1.5"></i>
<div>
<div className="text-[10px] font-medium tracking-[0.1em] text-zinc-500 uppercase">Built For</div>
<div className="text-xs font-medium tracking-wide text-black mt-0.5">Investment Banks</div>
</div>
</div>
<div className="p-6 flex flex-col justify-center">
<div className="text-3xl font-medium tracking-tight text-black mb-1">10x</div>
<div className="text-[10px] tracking-widest text-zinc-500 uppercase">Faster Research</div>
</div>
<div className="p-6 flex flex-col justify-center">
<div className="text-3xl font-medium tracking-tight text-black mb-1">85%</div>
<div className="text-[10px] tracking-widest text-zinc-500 uppercase">Time Saved</div>
</div>
<div className="p-6 flex flex-col justify-center">
<div className="text-3xl font-medium tracking-tight text-black mb-1">100%</div>
<div className="text-[10px] tracking-widest text-zinc-500 uppercase">Data Privacy</div>
</div>
<div className="p-6 flex flex-col gap-3 justify-center">
<i className="w-5 h-5 text-black" data-lucide="shield-check" strokeWidth="1.5"></i>
<div>
<div className="text-[10px] font-medium tracking-[0.1em] text-zinc-500 uppercase">Institutional</div>
<div className="text-xs font-medium tracking-wide text-black mt-0.5">Security</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200" id="product">
<div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">

<div className="p-10 lg:p-20 flex flex-col justify-center bg-zinc-50">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> The Status Quo
                        </span>
<h2 className="text-3xl tracking-tight font-medium mb-8">The era of manual modeling is a bottleneck.</h2>
<ul className="space-y-6 text-lg text-zinc-600">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-zinc-400 shrink-0 mt-0.5" data-lucide="file-x" strokeWidth="1.5"></i>
<span>Hours wasted reading through 10-Ks, 10-Qs, and earnings transcripts to find a single data point.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-zinc-400 shrink-0 mt-0.5" data-lucide="calculator" strokeWidth="1.5"></i>
<span>Manually updating massive Excel models is prone to human error and version control nightmares.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-zinc-400 shrink-0 mt-0.5" data-lucide="clock" strokeWidth="1.5"></i>
<span>Reacting to market news instead of anticipating structural shifts due to bandwidth constraints.</span>
</li>
</ul>
</div>

<div className="p-10 lg:p-20 flex flex-col justify-center bg-white">
<span className="text-xs font-medium tracking-widest uppercase text-black mb-6 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> With Nexora
                        </span>
<h2 className="text-3xl tracking-tight font-medium mb-8">Instant contextual analysis and dynamic updates.</h2>
<ul className="space-y-6 text-lg text-zinc-600">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-100 shrink-0 mt-0.5">
<i className="w-4 h-4 text-black" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span>Automated extraction of qualitative sentiment and quantitative metrics across millions of documents.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-100 shrink-0 mt-0.5">
<i className="w-4 h-4 text-black" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</div>
<span>Direct integration with Excel via Add-in for real-time model synchronization.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-100 shrink-0 mt-0.5">
<i className="w-4 h-4 text-black" data-lucide="target" strokeWidth="1.5"></i>
</div>
<span>Proactive alert generation when new filings impact your coverage universe's core thesis.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="border-t border-zinc-200" id="solutions">
<div className="px-6 lg:px-20 py-16 text-center border-b border-zinc-200">
<h2 className="text-4xl tracking-tight font-medium mb-4">Deep financial comprehension.</h2>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto">Trained specifically on financial lexicon, accounting standards, and capital markets mechanics.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:border-b border-zinc-200 bg-white">

<div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50 transition-colors group">
<i className="w-8 h-8 text-black mb-6 group-hover:-translate-y-1 transition-transform" data-lucide="activity" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight mb-3">Earnings Call Breakdown</h3>
<p className="text-zinc-500">Automatically parses management tone, highlights Q&amp;A dodging, and compares forward guidance against historicals.</p>
</div>

<div className="p-10 lg:p-12 border-b md:border-b-0 lg:border-r border-zinc-200 hover:bg-zinc-50 transition-colors group">
<i className="w-8 h-8 text-black mb-6 group-hover:-translate-y-1 transition-transform" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight mb-3">M&amp;A Diligence</h3>
<p className="text-zinc-500">Cross-references target company contracts, identifies red flags in footnotes, and builds preliminary synergy models.</p>
</div>

<div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r lg:border-r-0 border-zinc-200 hover:bg-zinc-50 transition-colors group">
<i className="w-8 h-8 text-black mb-6 group-hover:-translate-y-1 transition-transform" data-lucide="layout-template" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight mb-3">Pitchbook Generation</h3>
<p className="text-zinc-500">Drafts complete sector overviews and company profiles directly into compliant PowerPoint templates.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 border-b border-zinc-200 bg-white">

<div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50 transition-colors group">
<i className="w-8 h-8 text-black mb-6 group-hover:-translate-y-1 transition-transform" data-lucide="network" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight mb-3">Competitor Mapping</h3>
<p className="text-zinc-500">Creates dynamic matrices tracking product launches, geographic expansion, and pricing changes across peers.</p>
</div>

<div className="p-10 lg:p-12 border-b md:border-b-0 lg:border-r border-zinc-200 hover:bg-zinc-50 transition-colors group">
<i className="w-8 h-8 text-black mb-6 group-hover:-translate-y-1 transition-transform" data-lucide="database" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight mb-3">Alternative Data Prep</h3>
<p className="text-zinc-500">Cleans and normalizes credit card panels or web-scraped pricing to correlate with GAAP revenue metrics.</p>
</div>

<div className="p-10 lg:p-12 hover:bg-zinc-50 transition-colors group">
<i className="w-8 h-8 text-black mb-6 group-hover:-translate-y-1 transition-transform" data-lucide="cpu" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight mb-3">Custom LLM Fine-tuning</h3>
<p className="text-zinc-500">Securely adapt the model to your bank's specific house view, valuation methodologies, and stylistic guidelines.</p>
</div>
</div>
</section>

<section className="bg-[#111111] text-white overflow-hidden relative" id="use-cases">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 px-6 lg:px-20 py-20 lg:py-32 flex flex-col items-center">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium mb-6">Designed for the modern analyst.</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">A command center that understands financial syntax. Chat with documents, visualize data streams, and export directly to Excel.</p>
</div>

<div className="w-full max-w-5xl bg-[#1c1c1c] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden flex flex-col">

<div className="h-12 border-b border-zinc-800 flex items-center px-4 gap-2 bg-[#161616]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="mx-auto px-3 py-1 bg-[#222] border border-zinc-800 rounded text-[10px] text-zinc-400 font-mono tracking-wide flex items-center gap-2">
<i className="w-3 h-3" data-lucide="lock" strokeWidth="1.5"></i> app.nexora.ai/workspace/nvda-q3
                            </div>
</div>

<div className="flex h-[500px]">

<div className="w-48 border-r border-zinc-800 bg-[#161616] p-4 hidden md:block">
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mb-4">Sources</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800/50 p-2 rounded">
<i className="w-4 h-4 text-blue-400" data-lucide="file-text"></i> NVDA_10Q.pdf
                                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-500 p-2">
<i className="w-4 h-4 text-purple-400" data-lucide="headphones"></i> Q3_Call_Transcript
                                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-500 p-2">
<i className="w-4 h-4 text-green-400" data-lucide="table"></i> Consensus_Est.xlsx
                                    </div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#111]">

<div className="h-1/2 border-b border-zinc-800 p-6 flex flex-col">
<div className="flex justify-between items-center mb-4">
<div className="text-sm font-medium">Data Center Revenue Growth YoY</div>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300">Q1</span>
<span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-300">Q2</span>
<span className="text-[10px] px-2 py-1 bg-zinc-700 text-white rounded">Q3 (Act)</span>
</div>
</div>
<div className="flex-1 relative w-full flex items-end pt-4 pb-2">

<div className="absolute inset-0 border-b border-l border-zinc-800"></div>

<div className="absolute top-1/4 w-full border-t border-zinc-800/50 border-dashed"></div>
<div className="absolute top-2/4 w-full border-t border-zinc-800/50 border-dashed"></div>
<div className="absolute top-3/4 w-full border-t border-zinc-800/50 border-dashed"></div>

<svg className="w-full h-full overflow-visible z-10" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 C20,70 40,90 60,40 C75,10 90,20 100,5" fill="none" stroke="#fff" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<circle cx="60" cy="40" fill="#000" r="3" stroke="#fff" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>
<circle cx="100" cy="5" fill="#fff" r="3" vector-effect="non-scaling-stroke"></circle>
</svg>
</div>
</div>

<div className="flex-1 p-6 flex flex-col bg-[#161616]">
<div className="flex-1 space-y-4 overflow-y-auto hide-scrollbar">

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center shrink-0">
<i className="w-3 h-3 text-zinc-400" data-lucide="user"></i>
</div>
<div className="text-sm text-zinc-300 pt-1">
                                                Extract management commentary on China export restrictions from the Q3 call and quantify the expected Q4 revenue impact.
                                            </div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center shrink-0">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<div className="text-sm text-zinc-300 pt-1 space-y-3">
<p>Based on the <span className="text-blue-400 underline decoration-blue-400/30 underline-offset-2">Q3 Call Transcript</span>, Colette Kress noted:</p>
<blockquote className="border-l-2 border-zinc-600 pl-3 text-zinc-400 italic">
                                                    "Sales to China and other affected destinations, derived from products that are now subject to licensing requirements, have consistently contributed approximately 20% to 25% of Data Center revenue over the past few quarters."
                                                </blockquote>
<p>Management expects sales to these destinations to decline significantly in Q4. Based on your model's current Q4 Data Center revenue estimate of <span className="font-mono text-green-400 bg-green-400/10 px-1 rounded">$16.4B</span>, a total loss of this segment would impact top-line by approximately <span className="font-mono text-red-400 bg-red-400/10 px-1 rounded">$3.28B - $4.10B</span>.</p>
<div className="flex gap-2 mt-2">
<button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-[10px] text-zinc-300 border border-zinc-700 flex items-center gap-1 transition-colors">
<i className="w-3 h-3" data-lucide="table"></i> Export to Model
                                                    </button>
<button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-[10px] text-zinc-300 border border-zinc-700 flex items-center gap-1 transition-colors">
<i className="w-3 h-3" data-lucide="copy"></i> Copy Citation
                                                    </button>
</div>
</div>
</div>
</div>

<div className="mt-4 relative">
<input className="w-full bg-[#111] border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Ask Nexora about the filings..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white text-black rounded hover:bg-zinc-200 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200 bg-white">
<div className="px-6 lg:px-20 py-16 border-b border-zinc-200">
<h2 className="text-3xl tracking-tight font-medium mb-4">The Data Pipeline</h2>
<p className="text-lg text-zinc-500 max-w-2xl">A deterministic architecture designed for absolute accuracy. No hallucinations, full traceability.</p>
</div>
<div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">

<div className="p-8 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<span className="font-mono text-sm">01</span>
</div>
<h3 className="text-lg font-medium mb-2">Ingestion</h3>
<p className="text-sm text-zinc-500">Connects to SEC EDGAR, Bloomberg DL, Refinitiv, and internal repositories.</p>
</div>

<div className="p-8 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<span className="font-mono text-sm">02</span>
</div>
<h3 className="text-lg font-medium mb-2">Parsing</h3>
<p className="text-sm text-zinc-500">Extracts structured tables and unstructured text using custom OCR and NLP models.</p>
</div>

<div className="p-8 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<span className="font-mono text-sm">03</span>
</div>
<h3 className="text-lg font-medium mb-2">Reasoning</h3>
<p className="text-sm text-zinc-500">Applies financial logic to calculate metrics, identify anomalies, and synthesize sentiment.</p>
</div>

<div className="p-8 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<span className="font-mono text-sm">04</span>
</div>
<h3 className="text-lg font-medium mb-2">Delivery</h3>
<p className="text-sm text-zinc-500">Pushes formatted outputs to Excel models, Word docs, or the Nexora dashboard.</p>
</div>
</div>
</section>

<section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 lg:py-32 flex flex-col items-center text-center relative">

<div className="absolute top-16 text-9xl font-serif text-zinc-200/50 leading-none select-none">"</div>
<div className="relative z-10 max-w-4xl">
<h3 className="text-2xl lg:text-4xl font-medium tracking-tight text-black leading-snug mb-10">
                        "Nexora completely altered our deal velocity. It reduces the time spent on preliminary diligence by 80%, allowing our teams to cover more targets with higher conviction and present flawless models to the investment committee."
                    </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden grayscale">
<img alt="Executive Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div className="text-left">
<div className="font-medium text-black">Managing Director</div>
<div className="text-sm text-zinc-500">Tier 1 Bulge Bracket Bank</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200 bg-white">
<div className="px-6 lg:px-20 py-16 border-b border-zinc-200">
<h2 className="text-3xl tracking-tight font-medium mb-4">Bank-grade security posture.</h2>
<p className="text-lg text-zinc-500 max-w-2xl">Deployed within isolated virtual private clouds. Your proprietary models and data never leave your environment.</p>
</div>
<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="p-10">
<i className="w-6 h-6 mb-4 text-zinc-800" data-lucide="shield" strokeWidth="1.5"></i>
<h4 className="font-medium mb-2">SOC 2 Type II Certified</h4>
<p className="text-sm text-zinc-500">Independently audited for security, availability, and processing integrity.</p>
</div>
<div className="p-10">
<i className="w-6 h-6 mb-4 text-zinc-800" data-lucide="lock" strokeWidth="1.5"></i>
<h4 className="font-medium mb-2">Zero Data Retention</h4>
<p className="text-sm text-zinc-500">Nexora models are never trained on client inputs. Your proprietary research remains yours.</p>
</div>
<div className="p-10">
<i className="w-6 h-6 mb-4 text-zinc-800" data-lucide="server" strokeWidth="1.5"></i>
<h4 className="font-medium mb-2">On-Premises Option</h4>
<p className="text-sm text-zinc-500">Available for deployment directly within your institution's air-gapped infrastructure.</p>
</div>
</div>
</section>

<section className="bg-black text-white px-6 py-24 lg:py-32 flex flex-col items-center text-center">
<div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center mb-8">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<h2 className="text-4xl lg:text-6xl tracking-tight font-medium mb-6">Ready to augment your team?</h2>
<p className="text-xl text-zinc-400 max-w-xl mb-10">Join leading investment banks deploying autonomous AI to gain an informational edge.</p>
<a className="bg-white text-black px-10 py-5 flex items-center text-sm font-medium hover:bg-zinc-200 transition-colors group" href="#">
                    Request Enterprise Access
                    <i className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</section>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-8 px-6 lg:px-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div>
<div className="font-medium text-black mb-4">Platform</div>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-black transition-colors" href="#">Features</a></li>
<li><a className="hover:text-black transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-black transition-colors" href="#">Security</a></li>
<li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<div className="font-medium text-black mb-4">Solutions</div>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-black transition-colors" href="#">Investment Banking</a></li>
<li><a className="hover:text-black transition-colors" href="#">Private Equity</a></li>
<li><a className="hover:text-black transition-colors" href="#">Hedge Funds</a></li>
<li><a className="hover:text-black transition-colors" href="#">Corporate CorpDev</a></li>
</ul>
</div>
<div>
<div className="font-medium text-black mb-4">Company</div>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="font-medium text-black mb-4">Legal</div>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-black transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="grid grid-cols-3 gap-[1px]">
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full opacity-30"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full opacity-30"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full opacity-30"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-widest uppercase">Nexora</span>
</div>
<div className="text-sm text-zinc-500">
                        © 2024 Nexora AI, Inc. All rights reserved.
                    </div>
</div>
</footer>
</main>
</div>


    </>
  );
}
