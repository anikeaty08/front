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



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="layers"></i>
</div>
            TRAILR
          </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#platform">
              Platform
            </a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#engines">
              Engines
            </a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#vision">
              Vision
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-500 border border-white/10 rounded-full px-3 py-1">
<span className="text-white">EN</span>
<span className="w-px h-3 bg-white/20"></span>
<span className="hover:text-white cursor-pointer transition-colors">
              ES
            </span>
</div>
<button className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Request Demo
          </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
          A new category of infrastructure
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-tight">
          The Operating System
          <br className="hidden md:block"/>
          for ETNs.
        </h1>
<p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          An AI-powered system that automates NAV, trading, and trailer fees
          end-to-end.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-full text-lg font-medium transition-colors flex items-center justify-center gap-2">
            Request Demo
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
            Explore System
          </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl overflow-hidden shadow-2xl">

<div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-neutral-950/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 font-medium">
                  Auto-Sync Active
                </span>

<div className="w-8 h-4 rounded-full bg-indigo-500 flex items-center px-0.5">
<div className="w-3 h-3 rounded-full bg-white translate-x-4 shadow-sm"></div>
</div>
</div>
</div>

<div className="p-6 grid grid-cols-12 gap-6 h-[400px]">

<div className="col-span-3 space-y-4">
<div className="h-8 bg-white/5 rounded-lg w-3/4"></div>
<div className="h-8 bg-white/5 rounded-lg w-full"></div>
<div className="h-8 bg-indigo-500/20 border border-indigo-500/30 rounded-lg w-5/6"></div>
<div className="h-8 bg-white/5 rounded-lg w-4/5"></div>
</div>

<div className="col-span-9 flex flex-col gap-6">

<div className="flex-1 border border-white/5 bg-neutral-950/50 rounded-xl p-4 flex flex-col justify-end relative overflow-hidden">
<div className="absolute top-4 left-4 flex gap-4">
<div className="h-4 w-24 bg-white/10 rounded"></div>
<div className="h-4 w-16 bg-white/10 rounded"></div>
</div>
<svg className="w-full h-32" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,100 C20,80 40,90 60,40 C80,-10 90,60 100,20 L100,100 Z" fill="url(#gradient)" opacity="0.2"></path>
<path d="M0,100 C20,80 40,90 60,40 C80,-10 90,60 100,20" fill="none" stroke="#6366f1" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="h-1/3 grid grid-cols-3 gap-4">
<div className="border border-white/5 bg-neutral-950/50 rounded-xl p-4">
<div className="h-3 w-1/2 bg-white/10 rounded mb-4"></div>
<div className="h-6 w-3/4 bg-white/20 rounded"></div>
</div>
<div className="border border-white/5 bg-neutral-950/50 rounded-xl p-4">
<div className="h-3 w-1/2 bg-white/10 rounded mb-4"></div>
<div className="h-6 w-3/4 bg-white/20 rounded"></div>
</div>
<div className="border border-white/5 bg-neutral-950/50 rounded-xl p-4 border-l-2 border-l-indigo-500">
<div className="h-3 w-1/2 bg-white/10 rounded mb-4"></div>
<div className="h-6 w-3/4 bg-indigo-400/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-950">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
          Replace your entire ETN operations stack.
        </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xl text-neutral-400">
<span className="flex items-center gap-3">
<i className="w-6 h-6 text-neutral-600" data-lucide="x"></i>
            No more spreadsheets
          </span>
<span className="flex items-center gap-3">
<i className="w-6 h-6 text-neutral-600" data-lucide="x"></i>
            No fragmented systems
          </span>
<span className="flex items-center gap-3">
<i className="w-6 h-6 text-neutral-600" data-lucide="x"></i>
            No manual reconciliation
          </span>
</div>
</div>
</section>
<section className="py-24 border-y border-white/5 bg-neutral-900/20" id="vision">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8 max-w-4xl mx-auto">
          Built for ETNs.
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Not adapted to them.
          </span>
</h2>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
<div className="p-8 md:p-12 rounded-3xl border border-white/5 bg-neutral-900/20">
<div className="flex items-center gap-3 mb-6 text-neutral-400 font-medium text-xl tracking-tight">
<i className="w-6 h-6" data-lucide="archive"></i>
              Legacy Approach
            </div>
<ul className="space-y-6 text-lg text-neutral-500">
<li className="flex items-start gap-4">
<i className="w-6 h-6 mt-0.5 shrink-0 text-neutral-600" data-lucide="x"></i>
                NAV calculators &amp; fund-focused platforms.
              </li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 mt-0.5 shrink-0 text-neutral-600" data-lucide="x"></i>
                Fragmented data across isolated spreadsheets.
              </li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 mt-0.5 shrink-0 text-neutral-600" data-lucide="x"></i>
                Manual workflows and constant reconciliation.
              </li>
</ul>
</div>
<div className="p-8 md:p-12 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-3 mb-6 text-indigo-400 font-medium text-xl tracking-tight relative z-10">
<i className="w-6 h-6" data-lucide="layers"></i>
              TRAILR System
            </div>
<ul className="space-y-6 text-xl text-neutral-300 relative z-10">
<li className="flex items-start gap-4">
<i className="w-6 h-6 mt-0.5 shrink-0 text-indigo-400" data-lucide="check"></i>
                Built exclusively for ETNs.
              </li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 mt-0.5 shrink-0 text-indigo-400" data-lucide="check"></i>
                End-to-end operational system.
              </li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 mt-0.5 shrink-0 text-indigo-400" data-lucide="check"></i>
                AI-native and fully integrated.
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32" id="engines">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Three core infrastructure layers.
            <br className="hidden sm:block"/>
            One seamless system.
          </h2>
<p className="text-xl text-neutral-400 max-w-2xl">
            TRAILR is built around three foundational layers that operate as a
            single unified system, eliminating breaks and replacing disparate
            tools.
          </p>
</div>
<div className="space-y-6">
<div className="flex flex-col md:flex-row items-center gap-12 p-10 md:p-16 rounded-3xl border border-white/5 bg-neutral-900/30 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="flex-1 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 text-blue-400">
<i className="w-7 h-7" data-lucide="calculator"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
                NAV Infrastructure
              </h3>
<p className="text-xl text-neutral-400 leading-relaxed">
                Automated, real-time NAV calculation built to handle the complex
                payoff structures of modern ETNs. Fully auditable, completely
                integrated.
              </p>
</div>
<div className="flex-1 w-full bg-neutral-950/50 rounded-2xl border border-white/5 h-72 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="flex gap-4 items-end h-40 relative z-10">
<div className="w-10 bg-blue-500/20 border border-blue-500/40 rounded-t-md h-20"></div>
<div className="w-10 bg-blue-500/40 border border-blue-500/60 rounded-t-md h-28"></div>
<div className="w-10 bg-blue-500/60 border border-blue-500/80 rounded-t-md h-24"></div>
<div className="w-10 bg-blue-500/80 border border-blue-500 rounded-t-md h-40"></div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse items-center gap-12 p-10 md:p-16 rounded-3xl border border-white/5 bg-neutral-900/30 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/5 to-transparent pointer-events-none"></div>
<div className="flex-1 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 text-indigo-400">
<i className="w-7 h-7" data-lucide="arrow-left-right"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
                Trading &amp; Lifecycle
              </h3>
<p className="text-xl text-neutral-400 leading-relaxed">
                End-to-end automation for issuance, redemption workflows, and
                secondary market tracking. Connected directly to your broker and
                custodian APIs.
              </p>
</div>
<div className="flex-1 w-full bg-neutral-950/50 rounded-2xl border border-white/5 h-72 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-20 h-20 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center">
<i className="w-8 h-8 text-indigo-400" data-lucide="building"></i>
</div>
<div className="w-16 h-[2px] bg-indigo-500/30"></div>
<div className="w-20 h-20 rounded-full border border-indigo-500/50 bg-indigo-500/20 flex items-center justify-center">
<i className="w-8 h-8 text-indigo-300" data-lucide="refresh-cw"></i>
</div>
<div className="w-16 h-[2px] bg-indigo-500/30"></div>
<div className="w-20 h-20 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center">
<i className="w-8 h-8 text-indigo-400" data-lucide="wallet"></i>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-12 p-10 md:p-16 rounded-3xl border border-white/5 bg-neutral-900/30 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
<div className="flex-1 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 text-cyan-400">
<i className="w-7 h-7" data-lucide="percent"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
                Trailer Fee Automation
              </h3>
<p className="text-xl text-neutral-400 leading-relaxed">
                Systematic calculation and distribution of fees based on
                flexible logic. Complete transparency for all parties,
                eliminating spreadsheet errors entirely.
              </p>
</div>
<div className="flex-1 w-full bg-neutral-950/50 rounded-2xl border border-white/5 h-72 flex flex-col gap-4 items-center justify-center relative overflow-hidden px-8 md:px-16">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="w-full h-14 bg-neutral-900/80 border border-white/5 rounded-xl relative z-10 flex items-center px-6 justify-between shadow-lg">
<div className="w-32 h-2.5 bg-white/10 rounded-full"></div>
<div className="w-16 h-2.5 bg-cyan-500/50 rounded-full"></div>
</div>
<div className="w-full h-14 bg-neutral-900/80 border border-white/5 rounded-xl relative z-10 flex items-center px-6 justify-between shadow-lg">
<div className="w-40 h-2.5 bg-white/10 rounded-full"></div>
<div className="w-20 h-2.5 bg-cyan-500/50 rounded-full"></div>
</div>
<div className="w-full h-14 bg-neutral-900/80 border border-cyan-500/30 rounded-xl relative z-10 flex items-center px-6 justify-between shadow-[0_0_20px_rgba(6,182,212,0.1)]">
<div className="w-24 h-2.5 bg-white/10 rounded-full"></div>
<div className="w-16 h-2.5 bg-cyan-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
<i className="w-3.5 h-3.5" data-lucide="cpu"></i>
            System-Level Automation
          </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Intelligence that replaces manual operations.
          </h2>
<p className="text-xl text-neutral-400 mb-10">
            TRAILR isn't an analytics dashboard. It is an active intelligence
            layer that executes workflows, catches errors, and manages
            reconciliation without human intervention.
          </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-1">
                  AI reconciles data automatically
                </h4>
<p className="text-neutral-400">
                  Ingests and normalizes data from brokers, custodians, and
                  market feeds in real-time.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-1">
                  AI detects breaks and inconsistencies
                </h4>
<p className="text-neutral-400">
                  Spots pricing anomalies and operational breaks instantly
                  before NAV is finalized.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-1">
                  AI reduces manual workflows
                </h4>
<p className="text-neutral-400">
                  Replaces repetitive spreadsheet tasks with self-healing,
                  autonomous processes.
                </p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="aspect-square rounded-full border border-white/10 bg-neutral-900/50 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#6366f1_100%)] animate-[spin_4s_linear_infinite] opacity-20"></div>
<div className="absolute inset-[2px] rounded-full bg-neutral-950 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center">
<i className="w-12 h-12 text-indigo-400" data-lucide="network"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
          Ready to upgrade your infrastructure?
        </h2>
<p className="text-xl md:text-2xl text-neutral-400 mb-10">
          Join the visionary issuers running their operations on TRAILR.
        </p>
<button className="bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-full text-lg font-medium transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
          Request a Live Demo
        </button>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight">
<i className="w-5 h-5 text-indigo-400" data-lucide="layers"></i>
          TRAILR
        </div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-sm text-neutral-500">
          © 2024 TRAILR Inc. All rights reserved.
        </div>
</div>
</footer>




    </>
  );
}
