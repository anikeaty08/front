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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/10 h-[90px] flex items-center">
<div className="max-w-[1280px] mx-auto px-6 w-full flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center" href="#">
<img alt="FundedNext" className="h-8 object-contain" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFundednext%20logo_White%20(1).png&amp;w=256&amp;q=75"/>
</a>
<div className="hidden lg:flex items-center bg-[#1A1A1A] rounded-full p-1 border border-white/10">
<button className="px-5 py-2 text-sm font-medium bg-[#635BFF] rounded-full text-white">CFDs</button>
<button className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2">
                        Futures <span className="bg-[#0032DA] text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span>
</button>
</div>
</div>
<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-6 text-sm font-medium">
<div className="relative group">
<button className="flex items-center gap-1 hover:text-[#84A1FF] transition-colors">Markets <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></button>
</div>
<div className="relative group">
<button className="flex items-center gap-1 hover:text-[#84A1FF] transition-colors">FAQ <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></button>
</div>
<div className="relative group">
<button className="flex items-center gap-1 hover:text-[#84A1FF] transition-colors">About FN <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></button>
</div>
<div className="relative group">
<button className="flex items-center gap-1 hover:text-[#84A1FF] transition-colors">Partners <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></button>
</div>
<div className="relative group">
<button className="flex items-center gap-1 hover:text-[#84A1FF] transition-colors">More <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></button>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-black px-6 py-2.5 rounded-[10px] text-sm font-semibold hover:bg-gray-200 transition-colors">Login</button>
<button className="flex items-center gap-2 text-sm">
<img alt="EN" className="w-6 h-4 rounded-[2px]" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw80%2Fgb.png&amp;w=32&amp;q=75"/>
                        EN <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
</div>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>
<main className="pt-[90px]">

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="max-w-[1280px] mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h1 className="font-heading text-5xl lg:text-[80px] leading-[1.1] font-extrabold tracking-tight mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                            Empowering Promising<br/>Traders Worldwide
                        </h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
<div>
<i className="w-6 h-6 text-[#84A1FF] mb-3" data-lucide="bar-chart-2"></i>
<div className="text-lg font-semibold">Up to 95%</div>
<div className="text-sm text-gray-400">Performance Reward</div>
</div>
<div>
<i className="w-6 h-6 text-[#84A1FF] mb-3" data-lucide="users"></i>
<div className="text-lg font-semibold">Up to $300K</div>
<div className="text-sm text-gray-400">Simulated Accounts</div>
</div>
<div>
<i className="w-6 h-6 text-[#84A1FF] mb-3" data-lucide="clock"></i>
<div className="text-lg font-semibold">24 Hours</div>
<div className="text-sm text-gray-400">Guaranteed Reward</div>
</div>
<div>
<i className="w-6 h-6 text-[#84A1FF] mb-3" data-lucide="infinity"></i>
<div className="text-lg font-semibold">No time limit</div>
<div className="text-sm text-gray-400">in Challenge Phase</div>
</div>
</div>
<div className="flex flex-wrap gap-4">
<button className="bg-[#635BFF] hover:bg-[#5249FF] text-white px-8 py-4 rounded-[10px] font-semibold text-base flex items-center gap-2 transition-colors glow-effect">
                                Start Challenge <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
<button className="glass-panel hover:bg-white/10 text-white px-8 py-4 rounded-[10px] font-semibold text-base transition-colors">
                                Free Trial
                            </button>
</div>
</div>
<div className="relative hidden lg:block">

<div className="relative h-[400px] w-full flex items-end justify-center gap-4 opacity-80">

<div className="w-12 h-[40%] bg-gradient-to-t from-transparent via-[#372DFF] to-[#84A1FF] rounded-t-sm shadow-[0_0_30px_rgba(132,161,255,0.5)]"></div>
<div className="w-12 h-[60%] bg-gradient-to-t from-transparent via-[#372DFF] to-[#84A1FF] rounded-t-sm shadow-[0_0_30px_rgba(132,161,255,0.5)]"></div>
<div className="w-12 h-[30%] bg-gradient-to-t from-transparent via-[#635BFF] to-[#CF47FF] rounded-t-sm shadow-[0_0_30px_rgba(207,71,255,0.5)]"></div>
<div className="w-12 h-[80%] bg-gradient-to-t from-transparent via-[#372DFF] to-[#84A1FF] rounded-t-sm shadow-[0_0_30px_rgba(132,161,255,0.5)]"></div>
<div className="w-12 h-[50%] bg-gradient-to-t from-transparent via-[#372DFF] to-[#84A1FF] rounded-t-sm shadow-[0_0_30px_rgba(132,161,255,0.5)]"></div>
<div className="w-12 h-[90%] bg-gradient-to-t from-transparent via-[#372DFF] to-[#84A1FF] rounded-t-sm shadow-[0_0_30px_rgba(132,161,255,0.5)]"></div>

<div className="absolute w-0.5 h-[50%] bg-[#84A1FF] left-[calc(50%-144px+24px)] bottom-0"></div>
<div className="absolute w-0.5 h-[70%] bg-[#84A1FF] left-[calc(50%-80px+24px)] bottom-0"></div>
<div className="absolute w-0.5 h-[40%] bg-[#CF47FF] left-[calc(50%-16px+24px)] bottom-0"></div>
<div className="absolute w-0.5 h-[90%] bg-[#84A1FF] left-[calc(50%+48px+24px)] bottom-0"></div>
<div className="absolute w-0.5 h-[60%] bg-[#84A1FF] left-[calc(50%+112px+24px)] bottom-0"></div>
<div className="absolute w-0.5 h-[100%] bg-[#84A1FF] left-[calc(50%+176px+24px)] bottom-0"></div>
</div>
</div>
</div>

<div className="mt-24 glass-panel rounded-[20px] p-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center divide-x divide-white/10">
<div>
<div className="font-mono-like text-3xl font-bold mb-1">441.1K+</div>
<div className="text-xs text-gray-400 font-brand">FundedNext<br/>Accounts</div>
</div>
<div>
<div className="font-mono-like text-3xl font-bold mb-1">113.7K+</div>
<div className="text-xs text-gray-400 font-brand">Rewarded<br/>Traders</div>
</div>
<div>
<div className="font-mono-like text-3xl font-bold mb-1">$293.9M+</div>
<div className="text-xs text-gray-400 font-brand">Total<br/>Rewarded</div>
</div>
<div className="flex flex-col items-center justify-center pt-2">
<div className="text-xl font-bold mb-1 tracking-tighter">fmawards</div>
<div className="text-[10px] text-gray-400 font-bold tracking-wider mb-1">PROP FIRM<br/>OF THE YEAR</div>
<div className="text-[10px] text-gray-500">— 2025 —</div>
</div>
<div className="flex flex-col items-center justify-center pt-2">
<div className="text-sm font-bold mb-2 flex items-center gap-1"><i className="w-4 h-4 text-blue-500" data-lucide="check-circle"></i> Prop Firm Match</div>
<div className="text-[10px] text-gray-400 font-bold tracking-wider mb-1">BEST TRADING<br/>EXPERIENCE</div>
<div className="text-[10px] text-gray-500">— 2025 —</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 mb-32">
<div className="bg-white rounded-[20px] p-8 text-black shadow-2xl relative overflow-hidden">
<button className="absolute top-4 right-4 text-gray-400 hover:text-black">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="mb-6">
<p className="text-sm text-gray-500 font-medium">Selected Plan</p>
<h2 className="text-3xl font-bold">Free Trial</h2>
</div>
<div className="w-32 h-4 bg-gray-200 rounded-full mb-10 flex items-center px-1">
<div className="w-4 h-4 bg-gray-400 rounded-full"></div>
</div>
<div className="border-t border-gray-100 pt-6">
<h3 className="text-base font-semibold mb-4">Platform and Swap options</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer">
<div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-700">MT5</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-700">Swap Account</span>
</label>
</div>
</div>
<div className="mt-8 bg-gray-100 h-12 rounded-lg w-full"></div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 mb-32">
<div className="grid lg:grid-cols-4 gap-6">

<div className="lg:col-span-1 flex flex-col justify-between">
<div>
<h2 className="text-4xl font-bold tracking-tight mb-4">Highlights</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-12">
                            Power up your trading success with FundedNext &amp; get maximum reward.
                        </p>
</div>
<div>
<div className="text-[10px] font-bold text-gray-500 tracking-wider mb-4 uppercase">There is more -</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-gray-400" data-lucide="percent"></i> Low commissions
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-gray-400" data-lucide="activity"></i> Raw spreads
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-gray-400" data-lucide="package"></i> Best packages
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-gray-400" data-lucide="tag"></i> Affordable
                            </li>
</ul>
</div>
</div>

<div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-[12px] flex flex-col justify-between">
<div>
<h3 className="text-xl font-bold mb-3">15% Performance Reward in Challenge Phase</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                                The only trading prop firm that offers a 15% performance reward from the Challenge Phase rewards.
                            </p>
</div>
</div>

<div className="glass-panel p-6 rounded-[12px] flex flex-col justify-between">
<div>
<h3 className="text-xl font-bold mb-3">No Time Limits</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                                FundedNext puts traders in control, providing full trading freedom with no time limits to worry about.
                            </p>
</div>
</div>

<div className="glass-panel p-6 rounded-[12px] flex flex-col justify-between">
<div>
<h3 className="text-xl font-bold mb-3">Daily News Trading</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                                Make rewards quickly by utilizing big market movements when a high-impact news is announced.
                            </p>
</div>
</div>

<div className="glass-panel p-6 rounded-[12px] flex flex-col justify-between mt-0 lg:mt-6">
<div>
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-blue-400" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-bold mb-2">Competitive spreads &amp; High Leverage</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                                With spreads starting from 0.0 pips and a leverage of up to 1:100, FundedNext gives traders an unmatched trading experience.
                            </p>
</div>
</div>

<div className="glass-panel p-6 rounded-[12px] flex flex-col justify-between mt-0 lg:mt-6">
<div>
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-blue-400" data-lucide="rotate-ccw"></i>
</div>
<h3 className="text-lg font-bold mb-2">Reset</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                                Reset your account to restart your trading journey, even if you've violated any rules.
                            </p>
</div>
</div>

<div className="glass-panel p-6 rounded-[12px] flex flex-col justify-between mt-0 lg:mt-6">
<div>
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-blue-400" data-lucide="trophy"></i>
</div>
<h3 className="text-lg font-bold mb-2">Monthly Competition</h3>
<p className="text-xs text-gray-400 leading-relaxed">
                                FundedNext hosts free monthly competitions where you can compete for exclusive rewards.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 mb-32 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-1 space-y-6">

<div className="bg-gradient-to-br from-[#635BFF] to-[#372DFF] rounded-[20px] p-6 relative overflow-hidden h-[240px] flex flex-col justify-between">
<div className="relative z-10 w-2/3">
<h3 className="text-xl font-bold mb-2">Guaranteed Rewards</h3>
<p className="text-sm text-white/80">Get rewarded in 24 hours or<br/>we pay $1,000 extra.</p>
</div>
<div className="relative z-10">
<div className="inline-block bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider">
                            AVG. DISBURSEMENT TIME - 5HRS
                        </div>
</div>

<div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-80">
<svg className="drop-shadow-2xl" fill="rgba(255,255,255,0.2)" height="140" stroke="white" strokeWidth="1" viewbox="0 0 24 24" width="120">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="bg-gradient-to-br from-[#4A3AFF] to-[#2B1B99] rounded-[20px] p-6 relative overflow-hidden h-[240px]">
<div className="relative z-10 w-2/3">
<h3 className="text-xl font-bold mb-2">Best Trading Conditions</h3>
<p className="text-sm text-white/80">Transforming trading journeys globally through industry-leading resources</p>
</div>

<div className="absolute right-0 bottom-0 w-32 h-32">
<svg className="w-full h-full opacity-90" fill="none" viewbox="0 0 100 100">
<path d="M50 90 L20 70 L30 30 L70 30 L80 70 Z" fill="#4ADE80" opacity="0.8"></path>
<circle cx="50" cy="50" fill="#FCD34D" r="15"></circle>
<path d="M45 50 L50 55 L60 45" stroke="white" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="80" cy="20" fill="white" r="3"></circle>
<circle cx="20" cy="20" fill="white" r="4"></circle>
<circle cx="90" cy="50" fill="white" r="2"></circle>
</svg>
</div>
</div>
</div>

<div className="lg:col-span-2 card-gradient rounded-[20px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
<div className="relative z-10 max-w-md">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Best Trading Platforms</h2>
<p className="text-sm text-gray-300 leading-relaxed mb-8">
                        Trade on our main label MT4, MT5, cTrader &amp; Match-Trader<br/><br/>
                        Our MQ licenses and advanced in-house technology ensure enhanced experience, security, and efficiency.
                    </p>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"><span className="text-blue-600 font-bold text-xs">MT4</span></div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"><span className="text-blue-600 font-bold text-xs">MT5</span></div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"><span className="text-red-500 font-bold text-xs">cT</span></div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"><span className="text-teal-500 font-bold text-[10px]">Match</span></div>
</div>
</div>

<div className="absolute right-[-10%] bottom-[-20%] w-[70%] md:w-[60%] lg:w-[50%] transform rotate-[-5deg]">
<div className="relative pb-[60%]">
<div className="absolute inset-0 bg-black rounded-xl border-4 border-gray-800 shadow-2xl overflow-hidden">

<div className="w-full h-full bg-[#0B0B0B] p-2 flex flex-col">
<div className="h-4 border-b border-white/10 flex gap-2">
<div className="w-8 h-1 bg-red-500/50 mt-1"></div>
<div className="w-8 h-1 bg-green-500/50 mt-1"></div>
</div>
<div className="flex-1 flex items-end gap-1 px-1 opacity-50">
<div className="w-2 h-[30%] bg-green-500"></div>
<div className="w-2 h-[50%] bg-green-500"></div>
<div className="w-2 h-[40%] bg-red-500"></div>
<div className="w-2 h-[60%] bg-green-500"></div>
<div className="w-2 h-[20%] bg-red-500"></div>
<div className="w-2 h-[80%] bg-green-500"></div>
<div className="w-2 h-[70%] bg-red-500"></div>
<div className="w-2 h-[90%] bg-green-500"></div>
</div>
</div>
</div>
<div className="absolute bottom-[-10%] left-[-10%] right-[-10%] h-[15%] bg-gray-700 rounded-b-3xl"></div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto mb-32 overflow-hidden border-y border-white/5 py-8 opacity-60">
<div className="marquee-container">
<div className="marquee-content flex items-center gap-16 px-8">

<img alt="Skrill" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-1.png&amp;w=128&amp;q=75"/>
<img alt="M-Pesa" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-2.png&amp;w=128&amp;q=75"/>
<img alt="Elo" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-3.png&amp;w=128&amp;q=75"/>
<img alt="GrabPay" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-4.png&amp;w=128&amp;q=75"/>
<img alt="Amex" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-6.png&amp;w=128&amp;q=75"/>
<img alt="Mastercard" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-7.png&amp;w=128&amp;q=75"/>
<img alt="GPay" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-8.png&amp;w=128&amp;q=75"/>
<img alt="Neteller" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-9.png&amp;w=128&amp;q=75"/>
<img alt="Discover" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-10.png&amp;w=128&amp;q=75"/>
<img alt="PayPal" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-11.png&amp;w=128&amp;q=75"/>

<img alt="Skrill" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-1.png&amp;w=128&amp;q=75"/>
<img alt="M-Pesa" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-2.png&amp;w=128&amp;q=75"/>
<img alt="Elo" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-3.png&amp;w=128&amp;q=75"/>
<img alt="GrabPay" className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://fundednext.com/_next/image?url=https%3A%2F%2Fdirslur24ie1a.cloudfront.net%2Ffundednext%2FFN-V2%2Fpayment-provider-4.png&amp;w=128&amp;q=75"/>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 mb-32 py-20 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-5xl font-bold tracking-tight mb-2">Rewarding</h2>
<h2 className="text-5xl font-bold tracking-tight mb-16">our best traders</h2>
<div className="grid grid-cols-3 gap-8">
<div>
<div className="font-mono-like text-2xl font-bold mb-1">441.1K+</div>
<div className="text-[11px] text-gray-400 font-brand">FundedNext Accounts</div>
</div>
<div>
<div className="font-mono-like text-2xl font-bold mb-1">113.7K+</div>
<div className="text-[11px] text-gray-400 font-brand">Rewarded Traders</div>
</div>
<div>
<div className="font-mono-like text-2xl font-bold mb-1">$293.9M+</div>
<div className="text-[11px] text-gray-400 font-brand">Total Rewarded</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 mb-32 grid lg:grid-cols-3 gap-16 items-center">
<div className="lg:col-span-1">
<div className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-semibold mb-6">
                    Stars Talk
                </div>
<h2 className="text-4xl font-bold tracking-tight mb-6 leading-tight">Icons<br/>Around the<br/>World</h2>
<p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                    Global leaders are cheering for and supporting FundedNext. Now, it is your turn to be a part of the best trading Challenge.
                </p>
</div>

<div className="lg:col-span-2 h-[400px] rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-16 h-16 text-white/20" data-lucide="play-circle"></i>
</div>
</section>

<section className="max-w-[800px] mx-auto px-6 mb-32 text-center">
<div className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-medium mb-6">
                Trader Feedback &amp; Analysis
            </div>
<h2 className="text-4xl font-bold tracking-tight mb-6">Our Traders Love Us</h2>
<p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto mb-16">
                FundedNext shines with traders like you! See what real traders have to say about our best-in-class prop trading firm.
            </p>

<div className="h-[300px] glass-panel rounded-[20px] flex items-center justify-center">
<span className="text-gray-500 text-sm">Review Widget Placeholder</span>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 mb-32">
<div className="relative rounded-[24px] p-1 bg-gradient-to-r from-[#635BFF] via-[#CF47FF] to-transparent">
<div className="bg-[#0B0B0B] rounded-[22px] p-10 md:p-16 h-full flex flex-col justify-center min-h-[400px] relative overflow-hidden">

<div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #635BFF 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 max-w-xl">
<h2 className="text-4xl font-bold tracking-tight mb-6">Global Events</h2>
<p className="text-sm text-gray-300 leading-relaxed mb-8">
                            Dive into FundedNext's global events, where trading enthusiasts connect, engage, and grow. We're more than the best prop firm; we're a community of new and experienced traders committed to learning, growing, and finding success.
                        </p>
<a className="inline-block text-white font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors" href="#">Learn more</a>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 mb-32 text-center">
<h2 className="text-5xl md:text-[66px] font-bold tracking-tight mb-6">Trade Smart &amp; Win</h2>
<p className="text-base text-gray-400 mb-16">Join FundedNext today and experience a trading community unlike any other.</p>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#111115] border border-white/5 rounded-[20px] p-10 flex flex-col items-center justify-center min-h-[250px]">
<h3 className="text-2xl font-bold mb-4">24/7 Pro Support</h3>
<p className="text-sm text-gray-400 text-center mb-8 max-w-[280px]">FN provides 24/7 support, ensuring real-time assistance is always available.</p>
<div className="flex gap-4">
<button className="bg-[#635BFF] hover:bg-[#5249FF] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">Talk to support</button>
<button className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">Open FAQs</button>
</div>
</div>
<div className="bg-[#111115] border border-white/5 rounded-[20px] p-10 flex flex-col items-center justify-center min-h-[250px]">
<h3 className="text-2xl font-bold mb-4">Join the FN community</h3>
<p className="text-sm text-gray-400 text-center mb-8 max-w-[280px]">Day or night, our team is ready to help you with any of your trading needs.</p>
<div className="flex gap-4">
<button className="bg-[#635BFF] hover:bg-[#5249FF] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">Open Discord</button>
<button className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">Open Instagram</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 pt-20 pb-10 bg-[#000000]">
<div className="max-w-[1280px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
<div>
<h4 className="text-white font-semibold text-sm mb-6">Markets</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">FundedNext CFDs</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">FundedNext Futures</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-6">Education</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Dashboard Tour</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Economic Calendar</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Calculator</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Trading Guide</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Market Overview</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-6">Important Links</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">FundedNext Partner</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Global Events</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Risk Disclosure</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Public Announcements</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-6">Privacy &amp; Policy</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">CFDs Challenge Terms</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Futures Challenge Terms</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Instant Account Terms</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Trust and Security</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Partners T&amp;C</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">AML Policy</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Subscribe to newsletter</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-6">Contact Us</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Email</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Live Chat</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Messenger</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Telegram</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Connect with us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-6">Community</h4>
<ul className="space-y-4">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Join Local Community</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Join Discord</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Join X</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 text-[10px] text-gray-500 space-y-4 leading-relaxed font-mono-like">
<p>Trading activities on this platform are executed solely by FundedNext Ltd. using virtual funds in a simulated environment and do not involve real financial risk or trading with real financial instruments. FundedNext Ltd is a company registered in accordance with the laws of Comoros Islands, with registration number HY01023052, and has its registered office at Bonovo Road, Fomboni, Island of Moheli, Comoros Union. Our Hong Kong Office, FundedNext Limited is based in 8/F China Hong Kong Tower 8-12, Hennessy Road, Wan Chai, Hong Kong. The website fundednext.com is operated by FundedNext Limited.</p>
<p><strong className="text-gray-400">Other Operational Entity Information:</strong> GrowthNext F.Z.E. registered at Executive Office No. 7, AI Robotics Hub, C1 Building AFZ, Ajman, UAE, with Company registration number: 28831. FundedNext™ © 2026 is a registered trademark and brand name owned by GrowthNext F.Z.E.. Our Cyprus office, Incenteco Trading LTD, located at 26 Pittakou Str, 3118, Agia Fyla, Limassol, Cyprus to facilitate payment operations related activities for the business.</p>
<p><strong className="text-gray-400">Legal Disclosure:</strong> FundedNext Ltd. provides access to simulated trading programs designed solely for the evaluation of trading proficiency and risk-management skills. All trading occurs in a demo environment using virtual capital.</p>
<p><strong className="text-gray-400">No Client Funds / No Live Trading:</strong> FundedNext is not a broker, dealer, exchange, or investment advisor, and does not accept or manage client deposits. Participants do not trade real assets or place live market orders. Any rewards are performance-based and derived from evaluation results only.</p>
<p><strong className="text-gray-400">Evaluation Use Only:</strong> All content, tools and services are provided for evaluation and assessment purposes only and shall not be construed as investment advice, solicitation, or an offer to buy or sell any financial product, cryptocurrency, or derivative. Participants are encouraged to consult independent financial, legal, or tax advisors before engaging in any trading activity outside of this program.</p>
<p><strong className="text-gray-400">Hypothetical Performance Disclosure - CFTC Rule 4.41:</strong> Simulated or hypothetical trading results have inherent limitations. Unlike actual performance records, they do not represent real trading activity and may be designed with the benefit of hindsight. No representation is being made that any account will, or is likely to, achieve profits or losses similar to those shown or implied.</p>
<p><strong className="text-gray-400">Jurisdictional Restrictions:</strong> FundedNext Ltd. does not offer services to residents of the following jurisdictions: North Korea (DPRK), Myanmar, Belarus, Iran, and Russia.</p>
<p><strong className="text-gray-400">Risk Warning:</strong> Trading in futures, derivatives, and digital assets markets involves substantial risk of loss. Past performance is not indicative of future results.</p>
<p><strong className="text-gray-400">Payments &amp; Refunds:</strong> All subscription fees paid are strictly for Evaluation purposes and for access to our evaluation services.</p>
<p className="font-bold text-gray-400">Not a Deposit | Not FDIC Insured | May Lose Value</p>
<div className="text-center pt-8 mt-8 border-t border-white/5">
                    FundedNext-Copyright © 2026
                </div>
</div>
</div>
</footer>


    </>
  );
}
