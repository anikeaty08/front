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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            
            if(menu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons({ strokeWidth: 1.5 });
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
      

<nav className="fixed w-full top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 flex flex-wrap gap-1 items-center justify-center">
<div className="w-3 h-3 bg-slate-900 rounded-full"></div>
<div className="w-3 h-3 bg-slate-900 rounded-full"></div>
<div className="w-3 h-3 bg-slate-900 rounded-full"></div>
<div className="w-3 h-3 bg-slate-900 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#FAFAFA] rounded-full"></div></div>
</div>
<span className="text-xl font-semibold tracking-tight tracking-widest">TAXO</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-base font-medium text-slate-600">
<div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900 transition-colors">
                    Product <i className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
<a className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-900" href="#">Tax Calculator</a>
<a className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-900" href="#">Portfolio Tracker</a>
<a className="px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-900" href="#">Tax Loss Harvesting</a>
</div>
</div>
<a className="hover:text-slate-900 transition-colors" href="#">Integrations</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900 transition-colors">
                    Resources <i className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</div>
<div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900 transition-colors">
                    Company <i className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</div>
</div>
<div className="hidden lg:flex items-center gap-6 text-base font-medium">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm" href="#">
                    Get started free <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<button className="lg:hidden p-2 text-slate-600" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#FAFAFA] z-40 pt-24 px-6 hidden flex-col gap-6 text-xl font-medium border-t border-slate-200" id="mobile-menu">
<a className="py-2 border-b border-slate-100 flex justify-between items-center" href="#">Product <i className="w-5 h-5 text-slate-400" data-lucide="chevron-right"></i></a>
<a className="py-2 border-b border-slate-100" href="#">Integrations</a>
<a className="py-2 border-b border-slate-100" href="#">Pricing</a>
<a className="py-2 border-b border-slate-100 flex justify-between items-center" href="#">Resources <i className="w-5 h-5 text-slate-400" data-lucide="chevron-right"></i></a>
<a className="py-2 border-b border-slate-100 flex justify-between items-center" href="#">Company <i className="w-5 h-5 text-slate-400" data-lucide="chevron-right"></i></a>
<div className="mt-8 flex flex-col gap-4">
<a className="text-center py-3 text-slate-600 border border-slate-200 rounded-xl" href="#">Log in</a>
<a className="text-center py-3 bg-slate-900 text-white rounded-xl" href="#">Get started free</a>
</div>
</div>

<section className="pt-32 lg:pt-40 pb-20 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start z-10">
<div className="flex items-center gap-4 mb-8">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#FAFAFA]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#FAFAFA]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#FAFAFA]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#FAFAFA]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex gap-0.5 text-slate-900">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-slate-500 font-medium">Trusted by 50,000+ users</span>
</div>
<h1 className="text-5xl lg:text-[72px] font-semibold tracking-tight leading-[1.05] text-slate-900 mb-6">
                    Crypto taxes<br/>done <span className="italic text-indigo-500 font-normal pr-2 hero-gradient">right</span>
</h1>
<p className="text-xl text-slate-600 mb-10 max-w-md leading-relaxed">
                    Automatic tracking. Accurate calculations. Tax reports you can file with confidence.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-10 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]" href="#">
                        Get started free <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-900 font-medium text-lg hover:text-slate-600 transition-colors group" href="#">
                        See how it works <i className="w-6 h-6 text-slate-400 group-hover:text-slate-600" data-lucide="play-circle"></i>
</a>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-slate-500 font-medium">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check-circle-2"></i> No credit card</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check-circle-2"></i> Cancel anytime</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check-circle-2"></i> Free report preview</div>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[600px] select-none">

<div className="absolute top-10 right-10 w-[80%] h-[80%] bg-indigo-500/20 blob-shape blur-3xl z-0"></div>
<div className="absolute inset-0 bg-dots z-0 opacity-50"></div>

<div className="absolute -top-6 -right-6 lg:-right-12 z-30 w-32 h-32 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl animate-[spin_10s_linear_infinite]">
<svg className="w-full h-full p-2" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
<text className="text-[10px] uppercase tracking-[0.3em] font-medium fill-white">
<textpath href="#curve" startoffset="0%">Accurate &amp; Compliant • Accurate &amp; Compliant •</textpath>
</text>
</svg>
<i className="absolute w-8 h-8 text-white" data-lucide="asterisk"></i>
</div>

<div className="absolute top-8 left-4 lg:-left-12 right-20 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-6 z-20 flex flex-col gap-6 transition-transform hover:-translate-y-1 duration-500">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="text-xl font-semibold tracking-tight">2024 Tax Report</span>
<span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full border border-emerald-100">Ready to file</span>
</div>
</div>

<div className="bg-indigo-500 rounded-xl p-5 text-white relative overflow-hidden h-40 flex flex-col justify-between">
<div className="relative z-10">
<div className="text-indigo-200 text-sm font-medium mb-1">Estimated Tax Due</div>
<div className="text-4xl font-semibold tracking-tight">$2,894</div>
<div className="text-xs text-indigo-200 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-down"></i> 18% vs last year</div>
</div>
<div className="relative z-10 flex justify-end">
<button className="bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="download"></i> Download report
                            </button>
</div>

<svg className="absolute bottom-0 left-0 w-full h-24 text-indigo-400 opacity-50 z-0" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,50 Q20,20 40,60 T80,30 T100,50 L100,100 L0,100 Z" fill="currentColor" opacity="0.3"></path>
<path d="M0,50 Q20,20 40,60 T80,30 T100,50" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>

<div className="grid grid-cols-4 gap-4 pb-4 border-b border-slate-100">
<div>
<div className="text-xs text-slate-500 mb-1 flex items-center gap-1">Total Gains <i className="w-3 h-3 text-slate-300" data-lucide="info"></i></div>
<div className="text-base font-semibold">$24,439.26</div>
</div>
<div>
<div className="text-xs text-slate-500 mb-1 flex items-center gap-1">Total Losses <i className="w-3 h-3 text-slate-300" data-lucide="info"></i></div>
<div className="text-base font-semibold">- $8,123.47</div>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">Net Gain</div>
<div className="text-base font-semibold">$16,315.79</div>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">Transactions</div>
<div className="text-base font-semibold">1,248</div>
</div>
</div>

<div>
<div className="text-sm font-medium mb-4">Holdings by Asset</div>
<div className="flex items-center gap-8">

<div className="w-20 h-20 rounded-full border-8 border-indigo-100 relative shrink-0">
<div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-t-amber-400 border-r-amber-400 rotate-45"></div>
<div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-b-indigo-500 border-l-indigo-500 rotate-45"></div>
<div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-r-teal-400 rotate-[225deg]"></div>
</div>
<div className="flex-1 flex flex-col gap-2.5">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div> <span className="text-slate-600 text-xs">Bitcoin (BTC)</span></div>
<div className="text-slate-500 text-xs">43.2%</div>
<div className="font-medium text-xs">$12,542.21</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div> <span className="text-slate-600 text-xs">Ethereum (ETH)</span></div>
<div className="text-slate-500 text-xs">28.1%</div>
<div className="font-medium text-xs">$8,153.45</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div> <span className="text-slate-600 text-xs">Solana (SOL)</span></div>
<div className="text-slate-500 text-xs">12.4%</div>
<div className="font-medium text-xs">$3,600.00</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-20 right-0 w-44 z-10 flex flex-col gap-2">
<div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-slate-100 shadow-sm flex items-center gap-3 ml-6 transition-transform hover:-translate-x-2 duration-300">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center shrink-0"><i className="w-4 h-4" data-lucide="boxes"></i></div>
<div><div className="text-xs font-semibold">Binance</div><div className="text-[10px] text-emerald-500">Connected</div></div>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-slate-100 shadow-sm flex items-center gap-3 ml-2 transition-transform hover:-translate-x-2 duration-300">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center shrink-0"><i className="w-4 h-4" data-lucide="circle-dot"></i></div>
<div><div className="text-xs font-semibold">Coinbase</div><div className="text-[10px] text-emerald-500">Connected</div></div>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-slate-100 shadow-sm flex items-center gap-3 ml-0 transition-transform hover:-translate-x-2 duration-300">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center shrink-0"><i className="w-4 h-4" data-lucide="tent"></i></div>
<div><div className="text-xs font-semibold">Kraken</div><div className="text-[10px] text-emerald-500">Connected</div></div>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-slate-100 shadow-sm flex items-center gap-3 ml-4 transition-transform hover:-translate-x-2 duration-300">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0"><i className="w-4 h-4" data-lucide="wallet"></i></div>
<div><div className="text-xs font-semibold">MetaMask</div><div className="text-[10px] text-emerald-500">Connected</div></div>
</div>
<button className="bg-slate-50/80 backdrop-blur-md rounded-xl p-3 border border-slate-200 border-dashed text-slate-500 flex items-center justify-center gap-2 text-xs font-medium hover:bg-slate-100 ml-8 transition-colors">
<i className="w-3 h-3" data-lucide="plus"></i> Add more
                    </button>
</div>
</div>
</div>
</section>

<div className="border-t border-b border-slate-200/60 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-base font-semibold text-slate-900">Built for compliance.</div>
<div className="text-sm text-slate-500">Trusted by professionals.</div>
</div>
</div>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-2xl font-serif font-bold tracking-tight">Forbes</span>
<div className="flex items-center gap-1 text-xl font-medium tracking-tight"><i className="w-5 h-5" data-lucide="grip"></i> coindesk</div>
<span className="text-2xl font-sans font-semibold tracking-tighter">Bloomberg</span>
<span className="text-2xl font-sans font-bold tracking-widest uppercase">Intuit</span>
</div>
<div className="hidden lg:block w-12 flex justify-end text-slate-300">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto text-center">
<h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Seamless Integrations</h2>
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Connect your entire crypto life.</h3>
<p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16">We support over 500 exchanges, wallets, and blockchains. Sync your data automatically via API or CSV upload in seconds.</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700"><i className="w-6 h-6" data-lucide="bitcoin"></i></div>
<span className="text-base font-medium">Bitcoin</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700"><i className="w-6 h-6" data-lucide="gem"></i></div>
<span className="text-base font-medium">Ethereum</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700"><i className="w-6 h-6" data-lucide="circle-dot"></i></div>
<span className="text-base font-medium">Coinbase</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700"><i className="w-6 h-6" data-lucide="boxes"></i></div>
<span className="text-base font-medium">Binance</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700"><i className="w-6 h-6" data-lucide="wallet"></i></div>
<span className="text-base font-medium">Ledger</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><i className="w-6 h-6" data-lucide="plus"></i></div>
<span className="text-base font-medium text-slate-500">495+ More</span>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative h-[500px]">
<div className="absolute inset-0 bg-indigo-50 rounded-[3rem] transform -rotate-3 scale-105"></div>
<div className="absolute inset-0 bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden flex flex-col">
<div className="h-14 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
<div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-amber-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
<div className="text-sm font-medium text-slate-500 flex-1 text-center font-mono bg-white py-1 rounded-md border border-slate-200">Transactions_Sync</div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><i className="w-5 h-5" data-lucide="arrow-down-left"></i></div>
<div><div className="text-base font-medium">Received ETH</div><div className="text-xs text-slate-500">Today, 10:42 AM • Coinbase</div></div>
</div>
<div className="text-right"><div className="text-base font-semibold">+ 2.50 ETH</div><div className="text-xs text-slate-500">$4,120.50</div></div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center"><i className="w-5 h-5" data-lucide="refresh-cw"></i></div>
<div><div className="text-base font-medium">Traded BTC for SOL</div><div className="text-xs text-slate-500">Yesterday, 14:20 PM • Binance</div></div>
</div>
<div className="text-right"><div className="text-base font-semibold text-slate-900">145 SOL</div><div className="text-xs text-slate-500">Taxable Event</div></div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center"><i className="w-5 h-5" data-lucide="arrow-up-right"></i></div>
<div><div className="text-base font-medium">Sent USDT</div><div className="text-xs text-slate-500">Oct 24, 09:15 AM • MetaMask</div></div>
</div>
<div className="text-right"><div className="text-base font-semibold">- 500.00 USDT</div><div className="text-xs text-slate-500">Fee: $4.20</div></div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-6">
<div className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
<i className="w-4 h-4 animate-spin" data-lucide="loader-2"></i> Syncing 14 new transactions...
                            </div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col items-start z-10">
<div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Never enter a trade manually again.</h3>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Taxo securely connects to your accounts via read-only APIs and automatically pulls your transaction history. We standardise the data and categorise every transfer, trade, and fee.
                </p>
<ul className="flex flex-col gap-4 text-lg text-slate-700">
<li className="flex items-start gap-3"><i className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" data-lucide="check"></i> Auto-categorisation of internal transfers to avoid double counting.</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" data-lucide="check"></i> Daily syncs ensure your portfolio is always up to date.</li>
<li className="flex items-start gap-3"><i className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" data-lucide="check"></i> Support for thousands of obscure coins and tokens.</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="calculator"></i>
</div>
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Built for complex DeFi and NFTs.</h3>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Staking, liquidity pools, margin trading, airdrops, and NFT mints. Our calculation engine is built to handle the most complex on-chain activities with pinpoint accuracy.
                </p>
<div className="w-full bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-lg font-medium text-slate-900">Cost Basis Methods</span>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">FIFO</span>
<span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200 ring-1 ring-purple-500">LIFO</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">HIFO</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">Spec ID</span>
</div>
<p className="text-base text-slate-500 mt-2">Switch methods to see how it impacts your final tax bill before generating reports.</p>
</div>
</div>

<div className="relative h-[450px]">
<div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative bg-slate-900 rounded-3xl p-6 text-slate-300 font-mono text-sm shadow-2xl overflow-hidden h-full border border-slate-800 flex flex-col">
<div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="file-code"></i> tx_hash: 0x8f...3a9
                        </div>
<span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Liquidity Provision</span>
</div>
<div className="space-y-4 flex-1">
<div>
<div className="text-slate-500 mb-1">// 1. Sent to pool</div>
<div className="flex items-center justify-between text-red-400 bg-red-400/10 p-2 rounded">
<span>- 5.00 ETH</span> <span>$10,250.00</span>
</div>
<div className="flex items-center justify-between text-red-400 bg-red-400/10 p-2 rounded mt-1">
<span>- 10,250 USDC</span> <span>$10,250.00</span>
</div>
</div>
<div>
<div className="text-slate-500 mb-1">// 2. Received LP Token</div>
<div className="flex items-center justify-between text-emerald-400 bg-emerald-400/10 p-2 rounded">
<span>+ 224.5 UNI-V2</span> <span className="text-slate-500 text-xs">(Cost basis set)</span>
</div>
</div>
<div>
<div className="text-slate-500 mb-1">// 3. Tax Event Calculation</div>
<div className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-white flex flex-col gap-2">
<div className="flex justify-between"><span>Disposal ETH (5.00)</span> <span>$10,250</span></div>
<div className="flex justify-between text-slate-400 text-xs"><span>Orig. Cost Basis</span> <span>$8,000</span></div>
<div className="w-full h-px bg-slate-700 my-1"></div>
<div className="flex justify-between font-medium text-emerald-400"><span>Capital Gain</span> <span>$2,250.00</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Ready to file</h2>
<h3 className="text-3xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Generate IRS forms in one click.</h3>
<p className="text-xl text-slate-600 max-w-2xl mx-auto">Download pre-filled Form 8949 and Schedule D, or export directly to TurboTax, TaxAct, and H&amp;R Block.</p>
</div>
<div className="max-w-5xl mx-auto px-6 relative h-[600px] flex justify-center perspective-[1000px]">

<div className="absolute w-full max-w-3xl h-[500px] bg-slate-100 rounded-xl shadow-md border border-slate-200 transform translate-y-8 scale-95 rotate-2 z-0"></div>
<div className="absolute w-full max-w-3xl h-[500px] bg-slate-50 rounded-xl shadow-lg border border-slate-200 transform translate-y-4 scale-95 -rotate-1 z-10"></div>
<div className="absolute w-full max-w-3xl h-[500px] bg-white rounded-xl shadow-2xl border border-slate-200 z-20 flex flex-col overflow-hidden">
<div className="bg-blue-600 text-white p-6 flex items-center justify-between">
<div>
<div className="text-3xl font-serif font-bold tracking-tight">Form 8949</div>
<div className="text-sm text-blue-100 mt-1">Sales and Other Dispositions of Capital Assets</div>
</div>
<div className="text-right">
<div className="text-sm font-medium">Department of the Treasury</div>
<div className="text-xs text-blue-200">Internal Revenue Service</div>
</div>
</div>
<div className="p-8 flex-1 overflow-hidden opacity-50 pointer-events-none">

<div className="flex gap-4 border-b-2 border-slate-900 pb-2 mb-4 font-medium text-sm">
<div className="w-1/4">Description of property</div>
<div className="w-1/6">Date acquired</div>
<div className="w-1/6">Date sold</div>
<div className="w-1/6 text-right">Proceeds</div>
<div className="w-1/6 text-right">Cost basis</div>
<div className="w-1/6 text-right">Gain/Loss</div>
</div>
<div className="space-y-4 text-sm font-mono">
<div className="flex gap-4 border-b border-slate-200 pb-2">
<div className="w-1/4">0.5 BTC</div><div className="w-1/6">01/15/2021</div><div className="w-1/6">04/12/2024</div><div className="w-1/6 text-right">32,450.00</div><div className="w-1/6 text-right">18,200.00</div><div className="w-1/6 text-right text-slate-900">14,250.00</div>
</div>
<div className="flex gap-4 border-b border-slate-200 pb-2">
<div className="w-1/4">15.0 ETH</div><div className="w-1/6">06/20/2022</div><div className="w-1/6">08/05/2024</div><div className="w-1/6 text-right">45,000.00</div><div className="w-1/6 text-right">22,500.00</div><div className="w-1/6 text-right text-slate-900">22,500.00</div>
</div>
<div className="flex gap-4 border-b border-slate-200 pb-2">
<div className="w-1/4">1000.0 SOL</div><div className="w-1/6">11/05/2023</div><div className="w-1/6">12/10/2024</div><div className="w-1/6 text-right">25,000.00</div><div className="w-1/6 text-right">30,000.00</div><div className="w-1/6 text-right text-slate-900">(5,000.00)</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
<button className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
<i className="w-5 h-5" data-lucide="download"></i> Download PDF
                    </button>
<button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                        Export CSV
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 text-center mb-16">Trusted by traders and CPAs.</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8">"I had thousands of transactions across multiple DEXs and CEXs. Taxo was the only software that actually managed to sync everything and calculate it correctly without hours of manual fixing."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div><div className="font-semibold text-slate-900">David M.</div><div className="text-sm text-slate-500">Day Trader</div></div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8">"As a CPA handling crypto clients, this tool is invaluable. The audit trails are transparent, and the ability to switch cost basis methods on the fly saves me days of spreadsheet work."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div><div className="font-semibold text-slate-900">Sarah J., CPA</div><div className="text-sm text-slate-500">Tax Professional</div></div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-amber-400 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8">"The UI is gorgeous and intuitive. I connected my wallets, and within 5 minutes I had my completed 8949 ready for TurboTax. Easiest tax season ever."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div><div className="font-semibold text-slate-900">Alex K.</div><div className="text-sm text-slate-500">Crypto Investor</div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Simple, transparent pricing.</h2>
<p className="text-xl text-slate-600 max-w-2xl mx-auto">Pay once per tax year. Free to track your portfolio, only pay when you need to download your reports.</p>

<div className="flex items-center justify-center gap-3 mt-8">
<span className="text-slate-500 font-medium">Individual</span>
<div className="w-14 h-8 bg-indigo-600 rounded-full relative cursor-pointer flex items-center px-1">
<div className="w-6 h-6 bg-white rounded-full shadow-sm"></div>
</div>
<span className="text-slate-900 font-medium">Tax Professional</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-[#FAFAFA] border border-slate-200 rounded-3xl p-8 flex flex-col">
<h3 className="text-xl font-semibold mb-2">Hobbyist</h3>
<p className="text-slate-500 text-base mb-6">For casual investors.</p>
<div className="flex items-baseline gap-1 mb-8"><span className="text-4xl font-semibold tracking-tight">$49</span><span className="text-slate-500">/ tax year</span></div>
<ul className="flex flex-col gap-4 text-slate-700 flex-1 mb-8">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check"></i> Up to 100 transactions</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check"></i> Unlimited exchanges &amp; wallets</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check"></i> Standard tax reports</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-300 shrink-0" data-lucide="minus"></i> <span className="text-slate-400">DeFi &amp; NFT support</span></li>
</ul>
<a className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-medium text-center hover:bg-slate-50 transition-colors" href="#">Get started</a>
</div>

<div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">Most Popular</div>
<h3 className="text-xl font-semibold mb-2">Trader</h3>
<p className="text-slate-400 text-base mb-6">For active traders and DeFi users.</p>
<div className="flex items-baseline gap-1 mb-8"><span className="text-4xl font-semibold tracking-tight">$99</span><span className="text-slate-400">/ tax year</span></div>
<ul className="flex flex-col gap-4 text-slate-300 flex-1 mb-8">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> Up to 1,000 transactions</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> Full DeFi &amp; NFT support</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> Margin trading calculations</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-400 shrink-0" data-lucide="check"></i> Priority email support</li>
</ul>
<a className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium text-center hover:bg-indigo-500 transition-colors" href="#">Get started</a>
</div>

<div className="bg-[#FAFAFA] border border-slate-200 rounded-3xl p-8 flex flex-col">
<h3 className="text-xl font-semibold mb-2">Pro</h3>
<p className="text-slate-500 text-base mb-6">For high volume professionals.</p>
<div className="flex items-baseline gap-1 mb-8"><span className="text-4xl font-semibold tracking-tight">$199</span><span className="text-slate-500">/ tax year</span></div>
<ul className="flex flex-col gap-4 text-slate-700 flex-1 mb-8">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check"></i> Unlimited transactions</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check"></i> Everything in Trader</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check"></i> Custom CPA access</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-slate-900 shrink-0" data-lucide="check"></i> 1-on-1 onboarding</li>
</ul>
<a className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-medium text-center hover:bg-slate-50 transition-colors" href="#">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-slate-900 list-none">
                        Do I need to pay taxes if I didn't sell for fiat?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed text-lg">Yes. In most jurisdictions (like the US, UK, Australia), trading one crypto for another (e.g., BTC to ETH) is considered a taxable disposal. You must calculate the fair market value in fiat at the time of the trade to determine your gain or loss.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-slate-900 list-none">
                        How secure is my data? Do you have access to my crypto?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed text-lg">We use bank-level encryption. We only use read-only APIs or public wallet addresses to fetch your transaction history. We cannot move or access your funds under any circumstances.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-slate-900 list-none">
                        What if I made a mistake in previous years?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed text-lg">You can generate reports for previous tax years using Taxo to file amendments. Our software will recalculate your entire history to ensure your cost basis carries forward correctly.</p>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-slate-900 list-none">
                        Can my accountant use Taxo?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed text-lg">Absolutely. We have a dedicated CPA portal. You can invite your accountant to your account, allowing them to review your transactions, adjust settings, and download the reports they need.</p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-24 pb-12 text-slate-400">
<div className="max-w-7xl mx-auto px-6">

<div className="bg-indigo-600 rounded-3xl p-10 lg:p-16 text-center text-white mb-20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Ready to sort your taxes?</h2>
<p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">Join 50,000+ users who file their crypto taxes with confidence. Track your portfolio for free.</p>
<a className="inline-flex bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-colors items-center gap-2" href="#">
                        Get started for free <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 text-white mb-6">
<div className="w-6 h-6 flex flex-wrap gap-0.5 items-center justify-center">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
<div className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-slate-900 rounded-full"></div></div>
</div>
<span className="text-xl font-semibold tracking-widest">TAXO</span>
</div>
<p className="text-slate-400 mb-6 max-w-sm">The most accurate crypto tax calculator for investors and professionals.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Tax Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
<p>© 2024 Taxo Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div> All systems operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
