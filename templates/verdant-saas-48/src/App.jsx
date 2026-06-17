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
sans: ["Inter", "sans-serif"],
serif: ["PT Serif", "serif"],
},
colors: {
brand: {
green: "#D6F866",
},
},
},
},
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<img alt="Mossy nature background" className="w-full h-full object-cover opacity-30 object-top" src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&amp;w=3226&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#050806]/40 via-[#050806]/80 to-[#050806]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(214,248,102,0.05)_0%,transparent_50%)]"></div>
</div>

<div className="relative z-10 flex flex-col items-center pb-24">

<nav className="w-full max-w-5xl mx-auto mt-6 px-4">
<div className="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2.5">

<div className="flex items-center gap-2 pl-2 cursor-pointer">
<div className="text-brand-green">
<iconify-icon height="24" icon="lucide:leaf" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="font-semibold tracking-wide text-sm uppercase text-white/90">
              Verdant
            </span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/90 hover:text-white transition-colors relative flex flex-col items-center" href="#">
              Product
              <span className="absolute -bottom-2 w-1 h-1 bg-white rounded-full"></span>
</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Solutions
            </a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Pricing
            </a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Resources
            </a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Company
            </a>
</div>

<div className="flex items-center gap-3 pr-1">
<a className="text-sm text-white/80 hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-white/10 rounded-full" href="#">
              Log in
            </a>
<button className="bg-brand-green hover:bg-[#c2e455] text-black text-sm font-medium px-5 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(214,248,102,0.2)]">
              Get Started
              <iconify-icon height="16" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="w-full max-w-4xl mx-auto mt-24 px-6 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(214,248,102,0.6)]"></div>
<span className="text-xs text-white/80">New</span>
<span className="text-xs text-white/60">
            Verdant 2.0 is now available
          </span>
<iconify-icon className="text-white/40" height="14" icon="lucide:chevron-right" width="14"></iconify-icon>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
          Intelligence that
          <br/>
<span className="font-serif italic text-brand-green pr-2">grows</span>
          with you.
        </h1>

<p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          The all-in-one platform for teams who want clarity,
          <br className="hidden sm:block"/>
          speed, and sustainable growth.
        </p>

<button className="group bg-brand-green hover:bg-[#c2e455] text-black font-medium text-base px-8 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(214,248,102,0.25)] hover:shadow-[0_0_40px_rgba(214,248,102,0.4)]">
          Start Free Trial
          <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>

<div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-8">
<div className="flex items-center gap-2 text-sm text-white/50">
<iconify-icon className="text-white/40" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
            No credit card
          </div>
<div className="flex items-center gap-2 text-sm text-white/50">
<iconify-icon className="text-white/40" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
            14-day free trial
          </div>
<div className="flex items-center gap-2 text-sm text-white/50">
<iconify-icon className="text-white/40" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
            Cancel anytime
          </div>
</div>
</main>

<section className="w-full max-w-6xl mx-auto mt-32 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative overflow-hidden group bg-[#111612]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col min-h-[400px] transition-all duration-300">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-green/10 blur-[50px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green">
<iconify-icon height="20" icon="lucide:leaf" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white/90">
                Unify your data
              </h3>
</div>
<p className="text-base text-white/50 leading-relaxed">
              Connect all your sources and turn scattered data into a single
              source of truth.
            </p>
</div>

<div className="flex-1 mt-8 relative flex items-center z-10 w-full">
<div className="w-full flex items-center justify-between">

<div className="flex flex-col gap-3 relative z-10">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
<iconify-icon height="14" icon="lucide:database" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
<iconify-icon height="14" icon="lucide:cloud" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
<iconify-icon height="14" icon="lucide:table" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
<iconify-icon height="14" icon="lucide:code-2" width="14"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 20 20 C 50 20, 50 50, 75 50" fill="none" stroke="rgba(255,255,255,0.15)" stroke-dasharray="3 3" strokeWidth="1"></path>
<path d="M 20 40 C 50 40, 50 50, 75 50" fill="none" stroke="rgba(255,255,255,0.15)" stroke-dasharray="3 3" strokeWidth="1"></path>
<path d="M 20 60 C 50 60, 50 50, 75 50" fill="none" stroke="rgba(255,255,255,0.15)" stroke-dasharray="3 3" strokeWidth="1"></path>
<path d="M 20 80 C 50 80, 50 50, 75 50" fill="none" stroke="rgba(255,255,255,0.15)" stroke-dasharray="3 3" strokeWidth="1"></path>
</svg>
</div>

<div className="w-16 h-16 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green shadow-[0_0_20px_rgba(214,248,102,0.15)] relative z-10 mr-4">
<iconify-icon height="28" icon="lucide:leaf" width="28"></iconify-icon>

<div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-brand-green"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-brand-green"></div>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden group bg-[#111612]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col min-h-[400px] transition-all duration-300">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-green/10 blur-[50px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green">
<iconify-icon height="20" icon="lucide:line-chart" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white/90">
                Surface what matters
              </h3>
</div>
<p className="text-base text-white/50 leading-relaxed">
              AI that cuts through noise and highlights the insights that drive
              impact.
            </p>
</div>

<div className="flex-1 mt-8 relative w-full flex items-end justify-center z-10">
<div className="relative w-full h-[120px] mb-4">

<div className="absolute top-0 right-[25%] -translate-y-full translate-x-1/2 mb-2 bg-white/10 backdrop-blur-md border border-white/10 rounded px-2 py-1 flex items-center gap-1 shadow-lg z-20">
<iconify-icon className="text-brand-green" height="12" icon="lucide:arrow-up" width="12"></iconify-icon>
<span className="text-xs font-medium text-white">32%</span>
</div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#D6F866" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#D6F866" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="chartGradient2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffffff" stop-opacity="0.05"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M 0 80 Q 25 70, 50 85 T 100 80 T 150 90 T 200 75 L 200 100 L 0 100 Z" fill="url(#chartGradient2)"></path>
<path d="M 0 80 Q 25 70, 50 85 T 100 80 T 150 90 T 200 75" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"></path>

<path d="M 0 60 Q 30 80, 70 50 T 130 65 T 150 20 Q 170 50, 200 40 L 200 100 L 0 100 Z" fill="url(#chartGradient)"></path>
<path d="M 0 60 Q 30 80, 70 50 T 130 65 T 150 20 Q 170 50, 200 40" fill="none" stroke="#D6F866" strokeWidth="2"></path>

<circle className="shadow-[0_0_10px_#D6F866]" cx="150" cy="20" fill="#D6F866" r="4"></circle>
</svg>
</div>
</div>
</div>

<div className="relative overflow-hidden group bg-[#111612]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col min-h-[400px] transition-all duration-300">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-green/10 blur-[50px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green">
<iconify-icon height="20" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white/90">
                Act with confidence
              </h3>
</div>
<p className="text-base text-white/50 leading-relaxed">
              Built-in governance and privacy so your team can move fast,
              without risk.
            </p>
</div>

<div className="flex-1 mt-8 relative flex items-center justify-center z-10 w-full overflow-hidden">
<div className="relative w-48 h-48 flex items-center justify-center">

<div className="absolute w-full h-full rounded-full border border-white/5 border-dashed"></div>
<div className="absolute w-[70%] h-[70%] rounded-full border border-white/10"></div>
<div className="absolute w-[40%] h-[40%] rounded-full border border-brand-green/20"></div>

<div className="absolute top-[15%] left-[15%] w-1.5 h-1.5 rounded-full bg-brand-green/60 shadow-[0_0_8px_#D6F866]"></div>
<div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 rounded-full bg-brand-green/60 shadow-[0_0_8px_#D6F866]"></div>
<div className="absolute top-[40%] right-[5%] w-1 h-1 rounded-full bg-white/40"></div>
<div className="absolute bottom-[10%] left-[30%] w-1 h-1 rounded-full bg-white/40"></div>

<div className="relative w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green shadow-[0_0_20px_rgba(214,248,102,0.2)]">
<iconify-icon className="opacity-80" fill="currentColor" height="20" icon="lucide:shield" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-6xl mx-auto mt-32 px-6 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Designed for simplicity
        </h2>
<p className="text-lg text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
          Get up and running in minutes, not months. Our platform seamlessly
          integrates with your existing tools.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative w-full">
<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent z-0"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#111612]/80 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(214,248,102,0.05)]">
<iconify-icon className="text-white/60" height="32" icon="lucide:plug" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white/90 mb-3">
              1. Connect
            </h3>
<p className="text-white/50 text-center leading-relaxed max-w-xs">
              Link your data sources with zero-config integrations.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-brand-green/10 backdrop-blur-md border border-brand-green/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(214,248,102,0.15)] relative">
<iconify-icon className="text-brand-green" height="32" icon="lucide:cpu" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-green shadow-[0_0_10px_#D6F866]"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white/90 mb-3">
              2. Analyze
            </h3>
<p className="text-white/50 text-center leading-relaxed max-w-xs">
              Our AI automatically maps and categorizes your data.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#111612]/80 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(214,248,102,0.05)]">
<iconify-icon className="text-white/60" height="32" icon="lucide:rocket" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white/90 mb-3">
              3. Scale
            </h3>
<p className="text-white/50 text-center leading-relaxed max-w-xs">
              Deploy insights directly to your teams and workflows.
            </p>
</div>
</div>
</section>
<section className="w-full max-w-6xl mx-auto mt-32 px-6">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Loved by pioneers
          </h2>
<p className="text-lg text-white/50 max-w-xl leading-relaxed">
            Don't just take our word for it. Here's what industry leaders are
            saying.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-brand-green/10 transition-colors"></div>
<div className="flex gap-1 text-brand-green mb-8">
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-medium">
              "Verdant completely changed how we handle our internal metrics.
              The integration was flawless, and the insights are actually
              actionable from day one."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
<img alt="Sarah J." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-white/90 font-medium tracking-tight">
                  Sarah Jenkins
                </h4>
<p className="text-sm text-white/40">VP of Data, TechCorp</p>
</div>
</div>
</div>
<div className="bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-brand-green/10 transition-colors"></div>
<div className="flex gap-1 text-brand-green mb-8">
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-medium">
              "We were drowning in raw data before Verdant. Now we have a clear,
              unified view that the entire executive team relies on daily."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
<img alt="Marcus T." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-white/90 font-medium tracking-tight">
                  Marcus Thompson
                </h4>
<p className="text-sm text-white/40">CEO, Lumen Innovations</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-4xl mx-auto mt-32 px-6 relative mb-12">
<div className="absolute inset-0 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 bg-[#111612]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden">
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"></div>
<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green mb-8 shadow-[0_0_30px_rgba(214,248,102,0.1)]">
<iconify-icon height="28" icon="lucide:leaf" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Ready to
            <span className="font-serif italic text-brand-green pr-2">grow</span>
            ?
          </h2>
<p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Join hundreds of forward-thinking teams building the future with
            Verdant. Start your 14-day free trial today.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-brand-green hover:bg-[#c2e455] text-black font-medium text-base px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(214,248,102,0.25)] hover:shadow-[0_0_40px_rgba(214,248,102,0.4)] whitespace-nowrap">
              Start Free Trial
              <iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto text-white/80 hover:text-white font-medium text-base px-8 py-3.5 rounded-full transition-all border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 whitespace-nowrap">
              Book a Demo
            </button>
</div>
</div>
</section>

<section className="w-full max-w-4xl mx-auto mt-32 px-6 border-t border-white/5 pt-12">
<h4 className="text-xs font-semibold tracking-[0.2em] text-white/30 text-center uppercase mb-10">
          Trusted by innovative teams
        </h4>
<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<iconify-icon className="fill-white" height="24" icon="lucide:triangle" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight">Acme</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="28" icon="lucide:asterisk" width="28"></iconify-icon>
<span className="text-xl font-semibold tracking-widest uppercase text-sm">
              Lumen
            </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="lucide:activity" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight">Nova</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="lucide:aperture" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-wider">PULSE</span>
</div>
<div className="flex items-center gap-2">
<div className="grid grid-cols-2 gap-0.5">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full border border-white"></div>
<div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="text-xl font-medium tracking-tight lowercase ml-1">
              atelier
            </span>
</div>
</div>
</section>
</div>

    </>
  );
}
