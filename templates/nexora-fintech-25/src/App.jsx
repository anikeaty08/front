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
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
black: '#0a0a0a',
surface: '#fbfbfb',
},
letterSpacing: {
tightest: '-.04em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
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
      

<nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-gray-200">
<div className="flex items-center justify-between h-16 w-full relative">

<div className="flex items-center h-full border-r border-gray-200 w-16 lg:w-24 justify-center shrink-0">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<div className="flex items-center pl-6 lg:pl-10 mr-auto">
<a className="text-base font-medium tracking-widest uppercase" href="#">N E X O R A</a>
</div>

<div className="hidden lg:flex items-center space-x-12 px-12 text-xs font-mono tracking-wider uppercase text-gray-600 border-x border-gray-200 h-full">
<a className="hover:text-black transition-colors" href="#product">Product</a>
<a className="hover:text-black transition-colors" href="#edge">AI Edge</a>
<a className="hover:text-black transition-colors" href="#method">Method</a>
<a className="hover:text-black transition-colors" href="#security">Security</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-black transition-colors" href="#about">About</a>
</div>

<div className="hidden md:flex items-center h-full">
<a className="flex items-center space-x-2 px-8 text-xs font-mono tracking-wider uppercase hover:bg-gray-50 h-full transition-colors border-r border-gray-200" href="#login">
<div className="w-2 h-2 bg-black rotate-45"></div>
<span>Log In</span>
</a>
<a className="flex items-center space-x-4 bg-black text-white px-8 text-xs font-mono tracking-wider uppercase hover:bg-gray-800 h-full transition-colors group" href="#request">
<span>Request Access</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>

<button className="lg:hidden px-6 h-full border-l border-gray-200 hover:bg-gray-50" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-surface border-b border-gray-200 flex flex-col font-mono text-xs uppercase tracking-wider" id="mobile-menu">
<a className="p-4 border-b border-gray-100" href="#product">Product</a>
<a className="p-4 border-b border-gray-100" href="#edge">AI Edge</a>
<a className="p-4 border-b border-gray-100" href="#method">Method</a>
<a className="p-4 border-b border-gray-100" href="#security">Security</a>
<a className="p-4 border-b border-gray-100 flex items-center gap-2" href="#login"><div className="w-2 h-2 bg-black rotate-45"></div> Log In</a>
<a className="p-4 bg-black text-white flex justify-between items-center" href="#request">
                Request Access <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>

<section className="relative flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] border-b border-gray-200">

<div className="hidden lg:flex flex-col items-center justify-between w-24 border-r border-gray-200 py-12 shrink-0">
<div className="text-xs font-mono text-gray-400 text-vertical tracking-widest uppercase">40.7128° N</div>
<div className="grid grid-cols-2 gap-1 opacity-50">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div><div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<div className="w-1.5 h-1.5 bg-black rounded-full"></div><div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<div className="text-xs font-mono text-gray-400 text-vertical tracking-widest uppercase">74.0060° W</div>
<div className="flex flex-col items-center gap-4 text-xs font-mono">
<span className="text-xl">01</span>
<div className="w-2 h-2 bg-black rotate-45"></div>
<span className="text-gray-400">/05</span>
</div>
</div>

<div className="flex-1 flex flex-col">

<div className="flex-1 flex flex-col lg:flex-row border-b border-gray-200 relative">

<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>

<div className="flex-1 p-8 lg:p-20 flex flex-col justify-center relative z-10">
<div className="flex items-center space-x-3 mb-10 text-xs font-mono uppercase tracking-widest text-gray-600">
<span>AI Portfolio Rebalancing</span>
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-medium mb-12">
<span className="block">Rebalance.</span>
<span className="block text-gray-400">Refine.</span>
<span className="block">Outperform.</span>
</h1>
<p className="font-mono text-base text-gray-600 max-w-md leading-relaxed mb-16">
                        Nexora uses proprietary AI models to continuously analyze markets, manage risk, and rebalance your hedge fund portfolio for superior returns.
                    </p>
<div className="flex flex-wrap items-center gap-8 font-mono text-xs uppercase tracking-widest">
<a className="bg-black text-white px-8 py-4 flex items-center gap-6 hover:bg-gray-800 transition-colors group" href="#request">
                            Request Access
                            <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
<a className="flex items-center gap-4 hover:text-gray-600 transition-colors group" href="#works">
                            See How It Works
                            <i className="w-4 h-4 group-hover:rotate-90 transition-transform" data-lucide="plus"></i>
</a>
</div>
</div>

<div className="flex-1 relative bg-gray-50 overflow-hidden min-h-[500px] lg:min-h-0">
<img alt="Abstract 3D blocks representing data" className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-90 grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent lg:hidden"></div>

<div className="hidden md:block absolute inset-0 z-10 pointer-events-none">

<div className="absolute top-1/4 left-1/4">
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center justify-end gap-2 mb-1">
                                        Expected Return <div className="w-2 h-2 border border-gray-400"></div>
</div>
<div className="text-2xl font-medium tracking-tight">18.7% <span className="text-xs text-gray-400 font-mono font-normal">/YR</span></div>
</div>
<div className="w-16 h-px dotted-line-x"></div>
<div className="w-1.5 h-8 bg-black"></div>
</div>
</div>

<div className="absolute top-1/5 right-12">
<div className="flex items-center gap-4">
<div className="w-1.5 h-6 bg-black"></div>
<div className="w-24 h-px dotted-line-x"></div>
<div>
<div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-1">
<div className="w-2 h-2 border border-gray-400"></div> Risk Score
                                    </div>
<div className="text-2xl font-medium tracking-tight">23 <span className="text-xs text-gray-400 font-mono font-normal">/100</span></div>
</div>
</div>
<div className="h-32 w-px dotted-line-y absolute right-[100px] top-full"></div>
</div>

<div className="absolute bottom-1/3 right-1/4">
<div className="flex items-center gap-4">
<div className="w-16 h-px dotted-line-x"></div>
<div>
<div className="text-[10px] font-mono text-gray-300 uppercase tracking-widest flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 bg-white"></div> AI Confidence
                                    </div>
<div className="text-2xl font-medium tracking-tight text-white drop-shadow-md">92%</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-24 flex flex-col md:flex-row border-t border-gray-200">
<div className="flex items-center px-8 lg:px-20 border-b md:border-b-0 md:border-r border-gray-200 h-full shrink-0">
<span className="text-xs font-mono uppercase tracking-widest text-gray-500">Trusted by leading investors</span>
</div>
<div className="flex-1 flex overflow-x-auto no-scrollbar items-center justify-around px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex flex-col items-center gap-2 min-w-[120px]">
<i className="w-6 h-6" data-lucide="triangle"></i>
<div className="text-[10px] font-mono tracking-widest font-medium uppercase text-center leading-tight">Northridge<br/><span className="text-gray-400">Capital</span></div>
</div>
<div className="flex flex-col items-center gap-2 min-w-[120px]">
<i className="w-6 h-6" data-lucide="hexagon"></i>
<div className="text-[10px] font-mono tracking-widest font-medium uppercase text-center leading-tight">Veritas<br/><span className="text-gray-400">Partners</span></div>
</div>
<div className="flex flex-col items-center gap-2 min-w-[120px]">
<i className="w-6 h-6" data-lucide="mountain"></i>
<div className="text-[10px] font-mono tracking-widest font-medium uppercase text-center leading-tight">Summit<br/><span className="text-gray-400">Management</span></div>
</div>
<div className="flex flex-col items-center gap-2 min-w-[120px]">
<i className="w-6 h-6" data-lucide="shield"></i>
<div className="text-[10px] font-mono tracking-widest font-medium uppercase text-center leading-tight">Aegis<br/><span className="text-gray-400">Investments</span></div>
</div>
<div className="flex flex-col items-center gap-2 min-w-[120px]">
<i className="w-6 h-6" data-lucide="circle-dot"></i>
<div className="text-[10px] font-mono tracking-widest font-medium uppercase text-center leading-tight">Orion<br/><span className="text-gray-400">Capital</span></div>
</div>
</div>

<div className="hidden xl:flex w-72 bg-[#0a0f14] text-white flex-col justify-center px-8 border-l border-gray-800">
<div className="text-[10px] font-mono uppercase tracking-widest flex items-center justify-between mb-4">
                        Real-time Market Analysis <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
</div>
<div className="flex items-end gap-1 h-8 opacity-50">
<div className="w-1 flex-1 bg-white h-2"></div><div className="w-1 flex-1 bg-white h-4"></div>
<div className="w-1 flex-1 bg-white h-3"></div><div className="w-1 flex-1 bg-white h-6"></div>
<div className="w-1 flex-1 bg-white h-5"></div><div className="w-1 flex-1 bg-white h-8"></div>
<div className="w-1 flex-1 bg-white h-4"></div><div className="w-1 flex-1 bg-white h-7"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white relative border-b border-gray-800" id="edge">

<div className="absolute inset-0 pointer-events-none grid grid-cols-4 lg:grid-cols-12 gap-px bg-gray-900/50">
<div className="bg-black col-span-1 lg:col-span-1"></div><div className="bg-black col-span-1 lg:col-span-1"></div>
<div className="bg-black col-span-1 lg:col-span-1"></div><div className="bg-black col-span-1 lg:col-span-1"></div>
<div className="bg-black hidden lg:block"></div><div className="bg-black hidden lg:block"></div>
<div className="bg-black hidden lg:block"></div><div className="bg-black hidden lg:block"></div>
<div className="bg-black hidden lg:block"></div><div className="bg-black hidden lg:block"></div>
<div className="bg-black hidden lg:block"></div><div className="bg-black hidden lg:block"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-24 py-32 relative z-10 flex flex-col lg:flex-row gap-20">
<div className="lg:w-1/2">
<div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
<i className="w-4 h-4" data-lucide="cpu"></i> The Paradigm Shift
                </div>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium mb-8 leading-tight">
                    Human latency is<br/>the new <span className="text-gray-500">liability.</span>
</h2>
<p className="font-mono text-base text-gray-400 mb-12 leading-relaxed">
                    Traditional quantitative models rely on static parameters and retrospective analysis. In volatile markets, this latency costs basis points. Nexora introduces continuous, predictive rebalancing.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4 border-b border-gray-800 pb-6">
<div className="text-gray-500 mt-1"><i className="w-5 h-5" data-lucide="x"></i></div>
<div>
<div className="font-mono text-xs uppercase tracking-widest mb-2">Legacy Approach</div>
<div className="text-gray-400">Quarterly rebalancing based on historical covariance matrices. Vulnerable to sudden regime shifts.</div>
</div>
</div>
<div className="flex items-start gap-4 pt-2">
<div className="text-white mt-1"><i className="w-5 h-5" data-lucide="check"></i></div>
<div>
<div className="font-mono text-xs uppercase tracking-widest mb-2 text-white">Nexora Architecture</div>
<div className="text-gray-400">Micro-second tick data ingestion feeding deep learning networks that predict asset correlation decay in real-time.</div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 relative border border-gray-800 bg-[#050505] p-8 overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] opacity-20 mix-blend-screen bg-cover bg-center grayscale transition-opacity duration-700 group-hover:opacity-40"></div>
<div className="relative z-10 flex flex-col justify-between h-full min-h-[400px]">
<div className="flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-4">
<span>Neural Net Diagnostics</span>
<span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Online</span>
</div>
<div className="py-12 space-y-4">

<div className="flex items-center gap-4 text-xs font-mono text-gray-600">
<span className="w-16">Data I/O</span>
<div className="flex-1 h-1 bg-gray-900 rounded overflow-hidden">
<div className="h-full bg-white w-[85%]"></div>
</div>
<span>85%</span>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-gray-600">
<span className="w-16">Inference</span>
<div className="flex-1 h-1 bg-gray-900 rounded overflow-hidden">
<div className="h-full bg-gray-400 w-[62%]"></div>
</div>
<span>62%</span>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-gray-600">
<span className="w-16">Execution</span>
<div className="flex-1 h-1 bg-gray-900 rounded overflow-hidden">
<div className="h-full bg-white w-[98%]"></div>
</div>
<span>98%</span>
</div>
</div>
<div className="pt-4 border-t border-gray-800 flex justify-between items-end">
<div>
<div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Alpha Generation Target</div>
<div className="text-3xl font-medium tracking-tight text-white">+4.2% <span className="text-sm text-gray-600 font-mono font-normal">Alpha</span></div>
</div>
<i className="text-gray-600 w-8 h-8" data-lucide="activity"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-gray-200 bg-surface" id="method">
<div className="max-w-7xl mx-auto px-6 lg:px-24">
<div className="text-center mb-20">
<div className="inline-flex items-center justify-center space-x-3 mb-6 px-4 py-2 border border-gray-200 text-xs font-mono uppercase tracking-widest text-gray-600 bg-white">
<span>Core Methodology</span>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium max-w-2xl mx-auto">Engineered for absolute return in any regime.</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">

<div className="bg-surface p-10 hover:bg-white transition-colors group">
<i className="w-8 h-8 mb-8 text-gray-400 group-hover:text-black transition-colors" data-lucide="network"></i>
<h3 className="text-lg font-medium tracking-tight mb-4">Topology Optimization</h3>
<p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">Map asset relationships using complex network theory, identifying hidden risk concentrations before they manifest as drawdowns.</p>
<div className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                        Module 01 <i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-surface p-10 hover:bg-white transition-colors group">
<i className="w-8 h-8 mb-8 text-gray-400 group-hover:text-black transition-colors" data-lucide="git-merge"></i>
<h3 className="text-lg font-medium tracking-tight mb-4">Factor Alignment</h3>
<p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">Dynamically isolate and neutralize unwanted stylistic factors (Value, Momentum, Size) to maintain pure alpha generation.</p>
<div className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                        Module 02 <i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-surface p-10 hover:bg-white transition-colors group">
<i className="w-8 h-8 mb-8 text-gray-400 group-hover:text-black transition-colors" data-lucide="zap"></i>
<h3 className="text-lg font-medium tracking-tight mb-4">Smart Execution</h3>
<p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">Minimize market impact with adaptive routing algorithms that break down large rebalancing orders across dark pools and lit venues.</p>
<div className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                        Module 03 <i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-surface p-10 hover:bg-white transition-colors group">
<i className="w-8 h-8 mb-8 text-gray-400 group-hover:text-black transition-colors" data-lucide="eye"></i>
<h3 className="text-lg font-medium tracking-tight mb-4">Sentiment Ingestion</h3>
<p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">NLP models parse millions of news feeds, earnings calls, and alternative data sources to quantify market psychology.</p>
<div className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                        Module 04 <i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-surface p-10 hover:bg-white transition-colors group md:col-span-2 lg:col-span-2 flex flex-col md:flex-row gap-10 items-center justify-between relative overflow-hidden">
<div className="relative z-10 w-full md:w-1/2">
<i className="w-8 h-8 mb-8 text-gray-400 group-hover:text-black transition-colors" data-lucide="shield-alert"></i>
<h3 className="text-lg font-medium tracking-tight mb-4">Tail Risk Hedging</h3>
<p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">Autonomous deployment of convexity strategies using derivatives when the model detects an elevated probability of black swan events.</p>
<div className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            Module 05 <i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>

<div className="w-full md:w-1/2 h-32 flex items-end justify-between gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-full bg-black h-[20%]"></div><div className="w-full bg-black h-[25%]"></div>
<div className="w-full bg-black h-[15%]"></div><div className="w-full bg-black h-[30%]"></div>
<div className="w-full bg-black h-[40%]"></div><div className="w-full bg-black h-[20%]"></div>
<div className="w-full bg-black h-[10%]"></div><div className="w-full bg-black h-[5%]"></div>
<div className="w-full bg-red-500 h-[60%]"></div><div className="w-full bg-black h-[15%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-50 border-b border-gray-200 overflow-hidden" id="product">
<div className="max-w-7xl mx-auto px-6 lg:px-24">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium mb-4">Command Center</h2>
<p className="font-mono text-base text-gray-600 max-w-lg">Complete transparency into AI logic. Override suggestions, adjust risk parameters, or set it to fully autonomous mode.</p>
</div>
<div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest">
<span className="text-gray-400">View</span>
<button className="px-4 py-2 bg-white border border-gray-200 hover:border-black transition-colors">Terminal</button>
<button className="px-4 py-2 bg-black text-white">Visual</button>
</div>
</div>

<div className="bg-white border border-gray-200 shadow-2xl rounded-sm overflow-hidden flex flex-col">

<div className="h-12 border-b border-gray-200 bg-surface flex items-center justify-between px-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
</div>
<div className="text-[10px] font-mono uppercase tracking-widest text-gray-400">nexora_workspace_production</div>
<i className="w-4 h-4 text-gray-400" data-lucide="maximize-2"></i>
</div>

<div className="flex flex-col md:flex-row h-full min-h-[500px]">

<div className="w-full md:w-64 border-r border-gray-200 bg-surface p-6 font-mono text-xs flex flex-col gap-8">
<div>
<div className="text-gray-400 uppercase tracking-widest mb-4">Portfolios</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-black font-medium"><span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="folder"></i> Global Macro Fund</span> <span className="w-2 h-2 rounded-full bg-green-500"></span></div>
<div className="flex items-center justify-between text-gray-500"><span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="folder"></i> Quant Equity Neutral</span></div>
<div className="flex items-center justify-between text-gray-500"><span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="folder"></i> Distressed Credit</span></div>
</div>
</div>
<div>
<div className="text-gray-400 uppercase tracking-widest mb-4">Risk Constraints</div>

<div className="space-y-4">
<div>
<div className="flex justify-between mb-1"><span>Max Drawdown</span> <span>15%</span></div>
<div className="h-1 w-full bg-gray-200 rounded"><div className="h-full bg-black w-[40%] rounded"></div></div>
</div>
<div>
<div className="flex justify-between mb-1"><span>Target Volatility</span> <span>8%</span></div>
<div className="h-1 w-full bg-gray-200 rounded"><div className="h-full bg-black w-[25%] rounded"></div></div>
</div>
<div className="flex items-center justify-between pt-2">
<span>Autonomous Exec</span>

<div className="w-8 h-4 bg-black rounded-full relative cursor-pointer">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 lg:p-10 flex flex-col">
<div className="flex justify-between items-end border-b border-gray-200 pb-6 mb-6">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Global Macro Rebalance Proposal</h3>
<div className="text-xs font-mono text-gray-500">Generated: 14:32:05 UTC • Confidence: High</div>
</div>
<div className="hidden sm:flex gap-3">
<button className="px-4 py-2 border border-gray-200 text-xs font-mono uppercase hover:bg-gray-50">Reject</button>
<button className="px-4 py-2 bg-black text-white text-xs font-mono uppercase hover:bg-gray-800">Execute Order</button>
</div>
</div>

<div className="flex-1 overflow-x-auto no-scrollbar">
<table className="w-full text-left text-sm font-mono whitespace-nowrap">
<thead className="text-xs text-gray-400 uppercase tracking-widest border-b border-gray-100">
<tr>
<th className="pb-3 font-normal">Asset Class</th>
<th className="pb-3 font-normal">Ticker</th>
<th className="pb-3 font-normal text-right">Current Wgt</th>
<th className="pb-3 font-normal text-right">Target Wgt</th>
<th className="pb-3 font-normal text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-gray-600">
<tr className="hover:bg-gray-50">
<td className="py-4 text-black flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500"></div> Equities</td>
<td className="py-4">SPY</td>
<td className="py-4 text-right">45.2%</td>
<td className="py-4 text-right font-medium text-black">42.0%</td>
<td className="py-4 text-right text-red-500">Sell $12.4M</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-4 text-black flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-500"></div> Commodities</td>
<td className="py-4">GLD</td>
<td className="py-4 text-right">8.5%</td>
<td className="py-4 text-right font-medium text-black">12.0%</td>
<td className="py-4 text-right text-green-500">Buy $8.2M</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-4 text-black flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500"></div> Fixed Income</td>
<td className="py-4">TLT</td>
<td className="py-4 text-right">20.1%</td>
<td className="py-4 text-right font-medium text-black">18.5%</td>
<td className="py-4 text-right text-red-500">Sell $4.1M</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-4 text-black flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500"></div> Cash / Equiv</td>
<td className="py-4">SHV</td>
<td className="py-4 text-right">26.2%</td>
<td className="py-4 text-right font-medium text-black">27.5%</td>
<td className="py-4 text-right text-green-500">Buy $3.1M</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
<div className="flex flex-col relative border-l border-gray-200 pl-8">
<div className="absolute top-0 left-[-4px] w-2 h-2 bg-black"></div>
<div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-6">Avg Annual Outperformance</div>
<div className="text-5xl lg:text-7xl font-medium tracking-tight mb-4 text-black">340<span className="text-3xl text-gray-400">bps</span></div>
<p className="font-mono text-sm text-gray-600">Net of simulated transaction costs across 10 years of backtested institutional portfolios.</p>
</div>
<div className="flex flex-col relative border-l border-gray-200 pl-8">
<div className="absolute top-0 left-[-4px] w-2 h-2 bg-black"></div>
<div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-6">Execution Latency</div>
<div className="text-5xl lg:text-7xl font-medium tracking-tight mb-4 text-black">&lt;12<span className="text-3xl text-gray-400">ms</span></div>
<p className="font-mono text-sm text-gray-600">From signal generation to FIX protocol order routing via direct cross-connects.</p>
</div>
<div className="flex flex-col relative border-l border-gray-200 pl-8">
<div className="absolute top-0 left-[-4px] w-2 h-2 bg-black"></div>
<div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-6">Assets Optimized</div>
<div className="text-5xl lg:text-7xl font-medium tracking-tight mb-4 text-black">$42<span className="text-3xl text-gray-400">B+</span></div>
<p className="font-mono text-sm text-gray-600">Currently managed by autonomous agents for top-tier hedge funds and family offices.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface border-b border-gray-200" id="security">
<div className="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row gap-20">
<div className="lg:w-1/3">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium mb-6">Institutional Grade Infrastructure</h2>
<p className="font-mono text-base text-gray-600 mb-10">Security and reliability are not features; they are the foundation. Nexora is built to comply with the most stringent financial regulations.</p>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors" href="#">
                    Download Security Whitepaper <i className="w-4 h-4" data-lucide="download"></i>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-gray-800" data-lucide="lock"></i>
<h4 className="text-base font-medium tracking-tight">Zero-Knowledge Architecture</h4>
</div>
<p className="font-mono text-sm text-gray-600">Your strategies and alpha signals are encrypted end-to-end. Nexora processes data without ever exposing raw proprietary logic to our servers.</p>
</div>

<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-gray-800" data-lucide="server"></i>
<h4 className="text-base font-medium tracking-tight">Bare Metal Redundancy</h4>
</div>
<p className="font-mono text-sm text-gray-600">Hosted in NY4 and LD4 data centers on dedicated bare metal servers with sub-millisecond failover capabilities to ensure 99.999% uptime.</p>
</div>

<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-gray-800" data-lucide="file-check"></i>
<h4 className="text-base font-medium tracking-tight">SOC 2 Type II Certified</h4>
</div>
<p className="font-mono text-sm text-gray-600">Independently audited annually to verify that our security controls, processes, and policies meet rigorous enterprise standards.</p>
</div>

<div>
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-gray-800" data-lucide="workflow"></i>
<h4 className="text-base font-medium tracking-tight">VPC Peering</h4>
</div>
<p className="font-mono text-sm text-gray-600">Deploy Nexora directly within your own AWS, GCP, or Azure Virtual Private Cloud via secure peering for maximum data isolation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
<div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-12">Plugs into your existing tech stack via FIX/API</div>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-medium text-xl tracking-tight">Bloomberg<span className="text-xs font-mono ml-1 text-gray-400">EMSX</span></div>
<div className="font-medium text-xl tracking-tight">Charles River</div>
<div className="font-medium text-xl tracking-tight">Aladdin<span className="text-xs font-mono ml-1 text-gray-400">API</span></div>
<div className="font-medium text-xl tracking-tight">Interactive Brokers</div>
<div className="font-medium text-xl tracking-tight">Enfusion</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 bg-black text-white relative overflow-hidden" id="request">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<div className="w-full h-px bg-white absolute top-1/4"></div>
<div className="w-full h-px bg-white absolute top-2/4"></div>
<div className="w-full h-px bg-white absolute top-3/4"></div>
<div className="w-px h-full bg-white absolute left-1/4"></div>
<div className="w-px h-full bg-white absolute left-2/4"></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-24 text-center relative z-10">
<h2 className="text-5xl md:text-7xl tracking-tight font-medium mb-8 leading-tight">
                Stop reacting.<br/><span className="text-gray-500">Start outperforming.</span>
</h2>
<p className="font-mono text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                Nexora is currently available to qualified institutional investors. Request access to our beta program.
            </p>
<form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
<input className="flex-1 bg-transparent border border-gray-700 px-6 py-4 font-mono text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors" placeholder="Work Email" required="" type="email"/>
<button className="bg-white text-black px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors whitespace-nowrap" type="submit">
                    Request Access
                </button>
</form>
<div className="mt-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                Minimum AUM requirement: $500M
            </div>
</div>
</section>

<footer className="bg-surface pt-24 pb-12 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-24">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
<div className="col-span-2 lg:col-span-2">
<a className="text-base font-medium tracking-widest uppercase mb-6 inline-block flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="plus"></i> N E X O R A
                    </a>
<p className="font-mono text-sm text-gray-500 max-w-xs mb-6">
                        The autonomous engine for institutional portfolio rebalancing.
                    </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
</div>
</div>
<div>
<h5 className="font-mono text-xs uppercase tracking-widest text-black mb-6">Platform</h5>
<ul className="space-y-4 font-mono text-sm text-gray-600">
<li><a className="hover:text-black transition-colors" href="#">AI Engine</a></li>
<li><a className="hover:text-black transition-colors" href="#">Risk Models</a></li>
<li><a className="hover:text-black transition-colors" href="#">Execution</a></li>
<li><a className="hover:text-black transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs uppercase tracking-widest text-black mb-6">Company</h5>
<ul className="space-y-4 font-mono text-sm text-gray-600">
<li><a className="hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-4 lg:col-span-2">
<h5 className="font-mono text-xs uppercase tracking-widest text-black mb-6">System Status</h5>
<div className="p-4 border border-gray-200 bg-white">
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-xs text-gray-600">NY4 Datacenter</span>
<span className="flex items-center gap-2 font-mono text-[10px] uppercase text-green-600"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Operational</span>
</div>
<div className="flex items-center justify-between">
<span className="font-mono text-xs text-gray-600">LD4 Datacenter</span>
<span className="flex items-center gap-2 font-mono text-[10px] uppercase text-green-600"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Operational</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
<p>© 2024 Nexora Technologies Inc. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-black transition-colors" href="#">Privacy</a>
<a className="hover:text-black transition-colors" href="#">Terms</a>
<a className="hover:text-black transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
