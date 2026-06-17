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



                // Tab interaction logic
                document.addEventListener('DOMContentLoaded', () => {
                    const buttons = document.querySelectorAll('.tab-btn');
                    const panes = document.querySelectorAll('.tab-pane');

                    buttons.forEach(button => {
                        button.addEventListener('click', () => {
                            // Remove active from all
                            buttons.forEach(b => b.classList.remove('active'));
                            panes.forEach(p => {
                                p.classList.remove('opacity-100');
                                p.classList.add('opacity-0', 'pointer-events-none');
                            });

                            // Add active to clicked
                            button.classList.add('active');
                            const targetId = button.getAttribute('data-target');
                            const targetPane = document.getElementById(targetId);
                            
                            targetPane.classList.remove('opacity-0', 'pointer-events-none');
                            targetPane.classList.add('opacity-100');
                        });
                    });
                });
            


                            for(let i=0; i<144; i++) {
                                document.write('<div class="bg-white rounded-full scale-50"></div>');
                            }
                        


        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        btn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                btn.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
                lucide.createIcons(); // re-init icon
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                btn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                lucide.createIcons(); // re-init icon
            }
        });

        // Close mobile menu on link click
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                isMenuOpen = false;
                btn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                lucide.createIcons();
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
      

<div className="max-w-[1600px] w-full mx-auto border-x border-zinc-200 flex-grow flex flex-col relative bg-white">

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 text-xs font-medium uppercase tracking-widest text-zinc-900">
<div className="flex items-stretch justify-between">

<div className="flex items-center gap-2 px-6 py-5 border-r border-zinc-200 w-auto lg:w-64 shrink-0">
<span className="text-xl font-semibold leading-none tracking-tighter">Æ</span>
<span>AETERNA</span>
</div>

<nav className="hidden lg:flex flex-1 justify-center divide-x divide-zinc-200">
<a className="px-8 flex items-center hover:bg-zinc-50 transition-colors" href="#product">Product</a>
<a className="px-8 flex items-center hover:bg-zinc-50 transition-colors" href="#how-it-works">How it works</a>
<a className="px-8 flex items-center hover:bg-zinc-50 transition-colors" href="#use-cases">Use Cases</a>
<a className="px-8 flex items-center hover:bg-zinc-50 transition-colors" href="#pricing">Pricing</a>
<a className="px-8 flex items-center hover:bg-zinc-50 transition-colors" href="#resources">Resources</a>
</nav>

<div className="hidden lg:flex items-stretch border-l border-zinc-200 shrink-0">
<a className="px-8 flex items-center hover:bg-zinc-50 transition-colors" href="#login">Log In</a>
<a className="bg-[#d6ff00] px-8 flex items-center gap-2 hover:bg-[#c4ec00] transition-colors text-black" href="#demo">
                        Book a Demo
                        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>

<button className="lg:hidden px-6 flex items-center border-l border-zinc-200 hover:bg-zinc-50" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="hidden fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 flex-col border-x border-zinc-200 max-w-[1600px] mx-auto text-sm font-medium uppercase tracking-widest" id="mobile-menu">
<div className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200 mb-8">
<a className="py-4 hover:text-zinc-500" href="#product">Product</a>
<a className="py-4 hover:text-zinc-500" href="#how-it-works">How it works</a>
<a className="py-4 hover:text-zinc-500" href="#use-cases">Use Cases</a>
<a className="py-4 hover:text-zinc-500" href="#pricing">Pricing</a>
<a className="py-4 hover:text-zinc-500" href="#resources">Resources</a>
<a className="py-4 hover:text-zinc-500" href="#login">Log In</a>
</div>
<a className="bg-[#d6ff00] py-4 w-full flex justify-center items-center gap-2 text-black border border-black" href="#demo">
                Book a Demo <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>

<section className="flex flex-col lg:grid lg:grid-cols-12 border-b border-zinc-200 relative overflow-hidden bg-[#fafafa]">

<div className="lg:col-span-5 flex flex-col justify-center p-8 lg:p-16 border-r border-zinc-200 relative z-10">
<div className="mb-12">
<div className="flex items-center gap-2 mb-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
<span>Finance Intelligence. Autonomous.</span>
<div className="w-2 h-2 bg-[#d6ff00]"></div>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-zinc-900 mb-8">
                        The Autonomous<br/>
                        AI CFO Agent<br/>
<span className="text-zinc-400">for Series A Startups.</span>
</h1>
<p className="text-lg text-zinc-600 max-w-md leading-relaxed mb-12">
                        Aeterna runs your numbers, analyses your business, and guides every financial decision—so you can focus on building what's next.
                    </p>
<div className="inline-flex">
<a className="bg-[#d6ff00] text-black text-xs font-medium uppercase tracking-widest px-8 py-4 flex items-center gap-4 hover:bg-[#c4ec00] transition-colors border-r-4 border-black group" href="#action">
                            See Aeterna In Action
                            <i className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="absolute bottom-16 left-16 text-zinc-300">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>

<div className="hidden lg:flex lg:col-span-2 flex-col items-center border-r border-zinc-200 py-16 relative z-10 bg-white">

<div className="text-zinc-300 mb-12">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<div className="flex flex-col items-center text-center px-4 mb-24">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 block">Built For<br/>Series</span>
<span className="text-7xl font-medium tracking-tight text-zinc-900">A</span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mt-4">Startups</span>
</div>
<div className="flex-grow flex flex-col justify-center items-center text-center px-4">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-8 max-w-[120px] leading-relaxed">
                        Trusted By<br/>Founders &amp;<br/>Finance Teams<br/>Worldwide
                    </span>
<i className="w-12 h-12 text-zinc-300 stroke-[1]" data-lucide="globe"></i>
</div>

<div className="text-zinc-300 mt-12">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>

<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-zinc-200 -z-10"></div>
</div>

<div className="lg:col-span-5 relative min-h-[500px] lg:min-h-0 bg-[#fafafa] flex items-center justify-center p-8 overflow-hidden z-0">

<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
<div className="w-full h-px bg-zinc-200"></div>
<div className="h-full w-px bg-zinc-200 absolute"></div>
</div>

<div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center scale-75 md:scale-100">

<div className="absolute inset-4 rounded-full border border-zinc-200/60"></div>
<div className="absolute inset-16 rounded-full border border-zinc-200/80"></div>
<div className="absolute inset-32 rounded-full border border-dashed border-zinc-300"></div>


<div className="absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="w-1 h-1 bg-[#d6ff00] rounded-full mb-2"></div>
<div className="bg-white/80 backdrop-blur-sm border border-zinc-200 px-3 py-2 flex flex-col shadow-sm">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-900">
<i className="w-3 h-3 text-[#d6ff00]" data-lucide="activity"></i>
                                CASH FLOW
                            </div>
<span className="text-[10px] text-zinc-500 mt-0.5">Forecasting &amp; Monitoring</span>
</div>
</div>

<div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex items-center flex-row-reverse">
<div className="w-1 h-1 bg-[#d6ff00] rounded-full ml-2"></div>
<div className="bg-white/80 backdrop-blur-sm border border-zinc-200 px-3 py-2 flex flex-col shadow-sm">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-900">
<i className="w-3 h-3 text-[#d6ff00]" data-lucide="layers"></i>
                                FUNDRAISING OS
                            </div>
<span className="text-[10px] text-zinc-500 mt-0.5">Metrics that win rounds</span>
</div>
</div>

<div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center flex-col-reverse">
<div className="w-1 h-1 bg-[#d6ff00] rounded-full mt-2"></div>
<div className="bg-white/80 backdrop-blur-sm border border-zinc-200 px-3 py-2 flex flex-col shadow-sm">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-900">
<i className="w-3 h-3 text-[#d6ff00]" data-lucide="git-branch"></i>
                                SCENARIO PLANNING
                            </div>
<span className="text-[10px] text-zinc-500 mt-0.5">Model the future. Decide today.</span>
</div>
</div>

<div className="absolute left-[0%] top-1/2 -translate-y-1/2 flex items-center">
<div className="w-1 h-1 bg-[#d6ff00] rounded-full mr-2"></div>
<div className="bg-white/80 backdrop-blur-sm border border-zinc-200 px-3 py-2 flex flex-col shadow-sm">
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-900">
<i className="w-3 h-3 text-[#d6ff00]" data-lucide="pie-chart"></i>
                                FINANCIAL ANALYSIS
                            </div>
<span className="text-[10px] text-zinc-500 mt-0.5">Insightful. Real-time.</span>
</div>
</div>

<div className="relative w-64 h-64 bg-[#111111] rounded-[2.5rem] flex flex-col items-center justify-center chip-glow shadow-2xl border border-zinc-800 z-10 transform rotate-45 overflow-hidden">

<div className="absolute inset-1 border border-zinc-700/50 rounded-[2.2rem]"></div>

<div className="transform -rotate-45 flex flex-col items-center text-center">
<span className="text-6xl font-semibold text-[#d6ff00] mb-2 drop-shadow-[0_0_15px_rgba(214,255,0,0.4)]">Æ</span>
<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">Aeterna<br/>AI CFO Agent</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-white">
<div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-zinc-200">

<div className="p-6 lg:p-8 flex flex-col justify-between hidden lg:flex relative">
<i className="w-4 h-4 text-zinc-900 absolute bottom-6 left-6" data-lucide="arrow-up-left"></i>
<div>
<div className="flex items-center gap-2 mb-2 text-xs font-medium uppercase tracking-widest text-zinc-900">
                            Aeterna Impact
                            <div className="w-2 h-2 bg-[#d6ff00]"></div>
</div>
<p className="text-xs text-zinc-500">Real outcomes. Measurable impact.</p>
</div>
</div>

<div className="p-6 lg:p-8 flex flex-col justify-center bg-[#fafafa]">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-medium tracking-tight text-zinc-900">34%</span>
<i className="w-5 h-5 text-[#d6ff00]" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-zinc-500 leading-tight">Lower Burn Rate<br/>(Median)</p>
</div>

<div className="p-6 lg:p-8 flex flex-col justify-center">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-medium tracking-tight text-zinc-900">28+</span>
<i className="w-5 h-5 text-[#d6ff00]" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-zinc-500 leading-tight">Hours Saved Per Week<br/>(Finance Teams)</p>
</div>

<div className="p-6 lg:p-8 flex flex-col justify-center bg-[#fafafa]">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-medium tracking-tight text-zinc-900">2.7x</span>
<i className="w-5 h-5 text-[#d6ff00]" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-zinc-500 leading-tight">Faster Decision Making<br/>(Median)</p>
</div>

<div className="p-6 lg:p-8 flex flex-col justify-between relative bg-black text-white col-span-2 lg:col-span-1 border-t lg:border-t-0 border-zinc-200">
<div>
<div className="flex text-white mb-3">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-xs text-zinc-400 leading-tight">Trusted by Founders<br/>&amp; Finance Leaders</p>
</div>
<i className="w-4 h-4 text-white absolute bottom-6 right-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-white grid-bg relative" id="product">
<div className="p-8 lg:p-16 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 max-w-2xl mb-4">Intelligence that scales with your ambition.</h2>
<p className="text-lg text-zinc-600 max-w-xl">Aeterna moves beyond retroactive reporting. It actively manages your financial present and simulates your future.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 bg-white/90">

<div className="p-8 lg:p-12 group hover:bg-zinc-50 transition-colors cursor-default">
<div className="w-12 h-12 bg-zinc-100 flex items-center justify-center mb-8 border border-zinc-200 group-hover:border-[#d6ff00] transition-colors">
<i className="w-5 h-5 text-zinc-900" data-lucide="database"></i>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Unified Data Engine</h3>
<p className="text-lg text-zinc-600">Connects natively to your banks, payment processors, HRIS, and ERP. Normalizes millions of transaction rows into a single source of truth in seconds.</p>
</div>

<div className="p-8 lg:p-12 group hover:bg-zinc-50 transition-colors cursor-default">
<div className="w-12 h-12 bg-zinc-100 flex items-center justify-center mb-8 border border-zinc-200 group-hover:border-[#d6ff00] transition-colors">
<i className="w-5 h-5 text-zinc-900" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Autonomous Reconciliation</h3>
<p className="text-lg text-zinc-600">Machine learning models categorize transactions, match receipts, and identify anomalies with 99.8% accuracy, eliminating month-end close panic.</p>
</div>

<div className="p-8 lg:p-12 group hover:bg-zinc-50 transition-colors cursor-default">
<div className="w-12 h-12 bg-zinc-100 flex items-center justify-center mb-8 border border-zinc-200 group-hover:border-[#d6ff00] transition-colors">
<i className="w-5 h-5 text-zinc-900" data-lucide="line-chart"></i>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Predictive Runway</h3>
<p className="text-lg text-zinc-600">Real-time cash flow monitoring mapped against historical burn and upcoming liabilities. Know exactly when you need to raise, down to the week.</p>
</div>
</div>
</section>

<section className="border-b border-zinc-200 relative h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center">
<img alt="Abstract Data Visualization" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 mix-blend-multiply" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/10"></div>
<div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-md border border-zinc-200 max-w-3xl mx-auto shadow-xl">
<i className="w-8 h-8 text-zinc-900 mx-auto mb-6" data-lucide="cpu"></i>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-4">Finance is no longer a historical record. It's an active operating system.</h2>
<div className="h-px w-16 bg-zinc-300 mx-auto mt-8"></div>
</div>
</section>

<section className="border-b border-zinc-200 flex flex-col lg:flex-row bg-[#fafafa]" id="how-it-works">

<div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-200 p-8 lg:p-16 relative">
<div className="sticky top-32">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500 block mb-4">Architecture</span>
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6">How Aeterna<br/>processes reality.</h2>
<p className="text-lg text-zinc-600 mb-8">A linear ingestion to insight pipeline, entirely managed by the AI agent without manual intervention.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:text-zinc-600 border-b border-zinc-900 pb-0.5 transition-colors" href="#">
                        Read the technical whitepaper <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="lg:w-2/3 flex flex-col divide-y divide-zinc-200">

<div className="p-8 lg:p-16 flex gap-8">
<div className="text-2xl font-medium text-zinc-300">01</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Connect &amp; Ingest</h3>
<p className="text-lg text-zinc-600 mb-6">Secure API connections continuously stream raw data from bank accounts, Stripe, Gusto, and AWS.</p>

<div className="flex gap-4 flex-wrap">
<div className="px-4 py-2 bg-white border border-zinc-200 text-xs font-medium text-zinc-500">Stripe</div>
<div className="px-4 py-2 bg-white border border-zinc-200 text-xs font-medium text-zinc-500">Plaid</div>
<div className="px-4 py-2 bg-white border border-zinc-200 text-xs font-medium text-zinc-500">QuickBooks</div>
<div className="px-4 py-2 bg-white border border-zinc-200 text-xs font-medium text-zinc-500">Deel</div>
</div>
</div>
</div>

<div className="p-8 lg:p-16 flex gap-8">
<div className="text-2xl font-medium text-zinc-300">02</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Cleanse &amp; Structure</h3>
<p className="text-lg text-zinc-600">The LLM core normalizes vendor names, standardizes currencies, and applies GAAP-compliant accounting principles automatically.</p>
</div>
</div>

<div className="p-8 lg:p-16 flex gap-8 bg-white">
<div className="text-2xl font-medium text-zinc-300">03</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Analyze &amp; Advise</h3>
<p className="text-lg text-zinc-600 mb-6">Generates Board-ready P&amp;L, balance sheets, and provides proactive alerts on spend anomalies or runway risks.</p>
<div className="bg-zinc-900 text-white p-4 rounded-sm font-mono text-sm border-l-4 border-[#d6ff00]">
<span className="text-zinc-500">Aeterna Agent:</span> "Server costs spiked 14% this week. This diverges from user growth. Investigating unused EC2 instances."
                        </div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-white" id="use-cases">
<div className="p-8 lg:p-16 border-b border-zinc-200">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900">Built for operational complexity.</h2>
</div>
<div className="flex flex-col lg:flex-row min-h-[600px]">

<div className="lg:w-1/4 border-b lg:border-b-0 lg:border-r border-zinc-200 flex flex-col" id="tab-controls">
<button className="tab-btn active p-6 lg:p-8 text-left border-b border-zinc-200 hover:bg-zinc-50 transition-colors focus:outline-none" data-target="tab-fundraising">
<span className="block text-xl font-medium tracking-tight mb-2 text-zinc-900">Fundraising</span>
<span className="text-sm text-zinc-500 block">Prepare data rooms instantly.</span>
</button>
<button className="tab-btn p-6 lg:p-8 text-left border-b border-zinc-200 hover:bg-zinc-50 transition-colors focus:outline-none" data-target="tab-hiring">
<span className="block text-xl font-medium tracking-tight mb-2 text-zinc-900">Headcount Planning</span>
<span className="text-sm text-zinc-500 block">Model the impact of new hires.</span>
</button>
<button className="tab-btn p-6 lg:p-8 text-left border-b lg:border-b-0 border-zinc-200 hover:bg-zinc-50 transition-colors focus:outline-none" data-target="tab-board">
<span className="block text-xl font-medium tracking-tight mb-2 text-zinc-900">Board Reporting</span>
<span className="text-sm text-zinc-500 block">Automated investor updates.</span>
</button>
</div>

<div className="lg:w-3/4 bg-[#fafafa] relative overflow-hidden" id="tab-content">

<div className="tab-pane absolute inset-0 p-8 lg:p-16 flex flex-col justify-center opacity-100 transition-opacity duration-500" id="tab-fundraising">
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Never fail due diligence.</h3>
<p className="text-lg text-zinc-600 max-w-xl mb-8">Aeterna maintains a permanent, audit-ready data room. Generate cohort analyses, LTV:CAC ratios, and clean historical financials with a single prompt.</p>
<div className="bg-white border border-zinc-200 p-6 shadow-sm max-w-md">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-100">
<span className="text-sm font-medium text-zinc-900">Series B Data Room Status</span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-sm">100% Ready</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-600"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Historical P&amp;L (36 mo)</div>
<div className="flex items-center gap-3 text-sm text-zinc-600"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Cap Table Integration</div>
<div className="flex items-center gap-3 text-sm text-zinc-600"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> SaaS Metrics Dashboard</div>
</div>
</div>
</div>

<div className="tab-pane absolute inset-0 p-8 lg:p-16 flex flex-col justify-center opacity-0 pointer-events-none transition-opacity duration-500" id="tab-hiring">
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Hire with confidence.</h3>
<p className="text-lg text-zinc-600 max-w-xl mb-8">Input your hiring plan. Aeterna simulates the exact impact on your runway, factoring in localized taxes, benefits burden, and ramp times.</p>
<div className="w-full max-w-md h-48 bg-zinc-900 flex items-end p-4 gap-2">

<div className="w-1/4 bg-zinc-700 h-[40%] relative"><span className="absolute -top-6 text-xs text-zinc-400">Q1</span></div>
<div className="w-1/4 bg-zinc-700 h-[60%] relative"><span className="absolute -top-6 text-xs text-zinc-400">Q2</span></div>
<div className="w-1/4 bg-[#d6ff00] h-[80%] relative"><span className="absolute -top-6 text-[#d6ff00] text-xs font-medium">+3 Eng</span></div>
<div className="w-1/4 bg-red-500 h-[30%] relative"><span className="absolute -top-6 text-red-400 text-xs">Runway Hit</span></div>
</div>
</div>

<div className="tab-pane absolute inset-0 p-8 lg:p-16 flex flex-col justify-center opacity-0 pointer-events-none transition-opacity duration-500" id="tab-board">
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Impress your investors.</h3>
<p className="text-lg text-zinc-600 max-w-xl mb-8">Generate beautifully formatted board decks and monthly investor updates. Aeterna highlights the narrative behind the numbers automatically.</p>
<div className="flex gap-4">
<button className="bg-white border border-zinc-200 px-6 py-3 text-sm font-medium hover:bg-zinc-50 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="file-text"></i> Generate PDF
                            </button>
<button className="bg-white border border-zinc-200 px-6 py-3 text-sm font-medium hover:bg-zinc-50 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="mail"></i> Draft Email Update
                            </button>
</div>
</div>
</div>
</div>
<style>
                /* Simple CSS for tab active state styling */
                .tab-btn.active {
                    background-color: #fafafa;
                    border-right-color: transparent !important; /* Merge with content area visually */
                }
                .tab-btn.active span:first-child {
                    color: #000;
                }
                .tab-btn.active::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background-color: #d6ff00;
                }
                .tab-btn { position: relative; }
                @media (max-width: 1024px) {
                    .tab-btn.active { border-bottom-color: transparent !important; border-right-color: #e4e4e7 !important; }
                    .tab-btn.active::before { width: 100%; height: 4px; bottom: 0; top: auto; }
                }
            </style>

</section>

<section className="bg-zinc-950 text-white border-b border-zinc-800">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 lg:p-16 lg:border-r border-zinc-800 flex flex-col justify-center">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 block">Performance</span>
<h2 className="text-4xl font-medium tracking-tight mb-6">Engineered for speed and precision.</h2>
<p className="text-lg text-zinc-400 mb-8">Traditional finance teams take 15 days to close the books. Aeterna does it continuously.</p>
<ul className="space-y-4 text-zinc-300">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d6ff00]" data-lucide="zap"></i> Real-time sync across 500+ integrations.</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d6ff00]" data-lucide="shield-check"></i> SOC 2 Type II compliant architecture.</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#d6ff00]" data-lucide="server"></i> Isolated LLM instances for data privacy.</li>
</ul>
</div>
<div className="p-8 lg:p-16 flex items-center justify-center bg-zinc-900 relative overflow-hidden">

<div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-10">


</div>
<div className="relative z-10 text-center">
<div className="text-[8rem] leading-none font-medium text-[#d6ff00] tracking-tighter mb-2">0.2s</div>
<div className="text-sm font-medium uppercase tracking-widest text-zinc-400">Average Transaction Classification Time</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-white py-24 px-8 lg:px-16 flex flex-col items-center text-center">
<i className="w-12 h-12 text-zinc-200 mb-8 fill-current" data-lucide="quote"></i>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-zinc-900 max-w-4xl leading-tight mb-12">
                "We delayed hiring a VP of Finance for 18 months because Aeterna handled everything from bookkeeping to our Series B forecasting models flawlessly."
            </h2>
<div className="flex items-center gap-4 text-left">
<img alt="Sarah Chen" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-zinc-900">Sarah Chen</div>
<div className="text-sm text-zinc-500">CEO, Nexus Data Systems (Backed by Sequoia)</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200 flex flex-col lg:flex-row bg-[#fafafa]">
<div className="lg:w-1/3 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-200">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Common Questions</h2>
<p className="text-lg text-zinc-600">Everything you need to know about the product and billing.</p>
</div>
<div className="lg:w-2/3 divide-y divide-zinc-200 bg-white">
<details className="group" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-8 lg:px-16 text-xl tracking-tight text-zinc-900 hover:bg-zinc-50">
<span>How secure is my financial data?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-600 pb-8 px-8 lg:px-16 text-lg">
                        We employ bank-level AES-256 encryption at rest and TLS 1.3 in transit. Aeterna is SOC 2 Type II certified. Our AI models are isolated; your data is never used to train public models.
                    </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-8 lg:px-16 text-xl tracking-tight text-zinc-900 hover:bg-zinc-50">
<span>Does it replace my CPA?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-600 pb-8 px-8 lg:px-16 text-lg">
                        Aeterna replaces manual bookkeeping and strategic financial modeling. You will still need a CPA for final year-end tax filings, but Aeterna packages all necessary data for them instantly, reducing their billable hours by up to 80%.
                    </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-8 lg:px-16 text-xl tracking-tight text-zinc-900 hover:bg-zinc-50">
<span>How long does onboarding take?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-600 pb-8 px-8 lg:px-16 text-lg">
                        Initial integration takes under 15 minutes. Connect your bank and software stack, and our system will ingest and structure your historical data within 24-48 hours depending on volume.
                    </div>
</details>
</div>
<style>
                /* Remove default details marker in webkit */
                details > summary::-webkit-details-marker { display: none; }
            </style>
</section>

<section className="bg-[#d6ff00] border-b border-zinc-200 p-8 lg:p-24 flex flex-col items-center text-center relative overflow-hidden" id="demo">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 max-w-3xl">
<h2 className="text-5xl lg:text-7xl font-medium tracking-tight text-black mb-8">Deploy your AI CFO today.</h2>
<p className="text-xl text-black/80 font-medium mb-12">Join hundreds of Series A startups operating with extreme financial clarity.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                        Start Free Trial <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-transparent border-2 border-black text-black px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-black/5 transition-colors flex items-center justify-center gap-2">
                        Book Enterprise Demo
                    </button>
</div>
</div>
</section>

<footer className="bg-white px-8 lg:px-16 py-16 flex flex-col lg:flex-row justify-between gap-16 border-b-[16px] border-black">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<span className="text-2xl font-semibold leading-none tracking-tighter">Æ</span>
<span className="font-medium tracking-widest uppercase text-sm">AETERNA</span>
</div>
<p className="text-sm text-zinc-500 mb-8">Autonomous financial intelligence for high-growth startups.</p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 text-sm">
<div className="flex flex-col gap-4">
<span className="font-medium text-zinc-900 uppercase tracking-widest text-xs mb-2">Product</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Features</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Integrations</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pricing</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-medium text-zinc-900 uppercase tracking-widest text-xs mb-2">Solutions</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">For Founders</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">For Finance Teams</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">For Investors</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-medium text-zinc-900 uppercase tracking-widest text-xs mb-2">Company</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About Us</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Blog</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-medium text-zinc-900 uppercase tracking-widest text-xs mb-2">Legal</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Security</a>
</div>
</div>
</footer>
<div className="p-8 text-center text-xs text-zinc-400 bg-white">
            © 2024 Aeterna Technologies, Inc. All rights reserved.
        </div>
</div>



    </>
  );
}
