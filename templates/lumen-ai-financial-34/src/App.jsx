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
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            }
            lucide.createIcons();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
                lucide.createIcons();
            });
        });

        // Use Cases Tabs Logic
        const tabInputs = document.querySelectorAll('input[name="usecase"]');
        const contents = document.querySelectorAll('.use-case-content');

        tabInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                // Update styling of parent labels
                tabInputs.forEach(inp => {
                    const label = inp.closest('label');
                    if(inp.checked) {
                        label.classList.remove('border-slate-200', 'bg-white');
                        label.classList.add('border-slate-900', 'bg-slate-50');
                    } else {
                        label.classList.add('border-slate-200', 'bg-white');
                        label.classList.remove('border-slate-900', 'bg-slate-50');
                    }
                });

                // Show/Hide content
                const targetId = e.target.dataset.target;
                contents.forEach(content => {
                    if (content.id === targetId) {
                        content.classList.remove('hidden');
                        // Small delay for fade-in effect
                        setTimeout(() => content.classList.remove('opacity-0'), 50);
                    } else {
                        content.classList.add('opacity-0');
                        setTimeout(() => content.classList.add('hidden'), 500); // Wait for transition
                    }
                });
            });
        });

        // Pricing Toggle Logic
        const billingToggle = document.getElementById('billing-toggle');
        const toggleKnob = document.getElementById('toggle-knob');
        const priceDisplay = document.getElementById('price-display');
        const billingPeriod = document.getElementById('billing-period');
        const monthlyLabel = document.getElementById('monthly-label');
        const annualLabel = document.getElementById('annual-label');
        let isAnnual = false;

        billingToggle.addEventListener('click', () => {
            isAnnual = !isAnnual;
            if (isAnnual) {
                toggleKnob.classList.add('translate-x-7');
                billingToggle.classList.replace('bg-slate-200', 'bg-emerald-200');
                priceDisplay.textContent = '$950';
                billingPeriod.textContent = '/yr';
                monthlyLabel.classList.replace('text-slate-900', 'text-slate-500');
                annualLabel.classList.replace('text-slate-500', 'text-slate-900');
            } else {
                toggleKnob.classList.remove('translate-x-7');
                billingToggle.classList.replace('bg-emerald-200', 'bg-slate-200');
                priceDisplay.textContent = '$99';
                billingPeriod.textContent = '/mo';
                monthlyLabel.classList.replace('text-slate-500', 'text-slate-900');
                annualLabel.classList.replace('text-slate-900', 'text-slate-500');
            }
        });

        // Add scroll behavior for smooth navigation highlight (Optional enhancement)
        // ...
    
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
      

<nav className="fixed top-0 w-full bg-[#f8f9fa]/90 backdrop-blur-md z-50 border-b border-slate-200">
<div className="max-w-[1600px] mx-auto w-full flex items-stretch h-[72px]">

<div className="flex items-center px-6 lg:px-10 border-r border-slate-200 w-auto lg:w-[350px] shrink-0">
<a className="flex items-center gap-4 group" href="#">
<div className="w-8 h-8 border border-slate-900 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900 transition-colors duration-300">

<div className="w-4 h-4 border border-slate-900 group-hover:border-white transition-colors duration-300 relative">
<div className="absolute inset-0 border-l border-b border-slate-900 transform translate-x-1 translate-y-1 group-hover:border-white transition-colors duration-300"></div>
</div>
</div>
<div className="flex flex-col">
<span className="text-lg font-medium tracking-[0.2em] leading-none mb-1">LUMEN</span>
<span className="text-[10px] text-slate-500 tracking-widest uppercase">AI Financial Coach</span>
</div>
</a>
</div>

<div className="hidden lg:flex flex-1 items-center justify-center gap-12 px-8">
<a className="text-xs font-medium tracking-widest text-slate-800 hover:text-black uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all" href="#how-it-works">How it works</a>
<a className="text-xs font-medium tracking-widest text-slate-800 hover:text-black uppercase relative" href="#solutions">Solutions<span className="absolute -top-1 -right-2 w-1 h-1 bg-slate-400 rounded-full"></span></a>
<a className="text-xs font-medium tracking-widest text-slate-800 hover:text-black uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all" href="#about">About</a>
<a className="text-xs font-medium tracking-widest text-slate-800 hover:text-black uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all" href="#resources">Resources</a>
</div>

<div className="flex items-stretch ml-auto border-l border-slate-200">
<a className="hidden md:flex bg-slate-900 hover:bg-black text-white px-8 items-center gap-6 transition-colors group border-r border-slate-700" href="#">
<span className="text-xs font-medium tracking-widest uppercase">Get Started</span>
<i className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" data-lucide="plus"></i>
</a>
<button className="lg:hidden px-6 flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col pt-24 pb-10 px-6" id="mobile-menu">
<div className="flex flex-col gap-8 text-2xl font-light tracking-tight mt-10">
<a className="mobile-link border-b border-slate-100 pb-4" href="#how-it-works">How it works</a>
<a className="mobile-link border-b border-slate-100 pb-4" href="#solutions">Solutions</a>
<a className="mobile-link border-b border-slate-100 pb-4" href="#about">About</a>
<a className="mobile-link border-b border-slate-100 pb-4" href="#resources">Resources</a>
</div>
<div className="mt-auto">
<a className="flex bg-slate-900 text-white p-6 items-center justify-between w-full" href="#">
<span className="text-sm font-medium tracking-widest uppercase">Get Started</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<header className="pt-[72px] min-h-screen flex flex-col relative border-b border-slate-200 grid-bg overflow-hidden">

<div className="flex-1 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 relative">

<div className="lg:col-span-5 flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-0 border-r border-slate-200 relative z-10 bg-[#f8f9fa]/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">

<div className="flex items-center gap-4 mb-12">
<span className="text-xs font-medium text-slate-400">01</span>
<div className="flex gap-1">
<div className="w-1 h-1 bg-slate-800 rounded-full"></div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
</div>
</div>

<h1 className="text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tighter font-light uppercase mb-8">
<span className="block text-slate-900">AI Financial</span>
<span className="block text-slate-900">Coaching For</span>
<span className="block text-[#7a8b88]">Your Next Level</span>
</h1>

<p className="text-lg text-slate-600 max-w-md mb-12 leading-relaxed">
                    Personalized AI guidance to grow wealth, optimize taxes, and build true financial freedom.
                </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
<a className="bg-slate-900 hover:bg-black text-white px-8 py-5 flex items-center gap-6 group transition-all" href="#">
<span className="text-xs font-medium tracking-widest uppercase">Start Your Plan</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#f8f9fa] grayscale object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#f8f9fa] grayscale object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#f8f9fa] grayscale object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">Trusted By</span>
<span className="text-xs font-medium text-slate-800 uppercase">25,000+ Millennials</span>
</div>
</div>
</div>

<div className="absolute bottom-12 left-12 w-4 h-4 border-l border-t border-slate-300 hidden lg:block"></div>
</div>

<div className="lg:col-span-4 relative flex items-center justify-center min-h-[500px] lg:min-h-0 border-r border-slate-200 overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-multiply pointer-events-none scale-150 lg:scale-125">
<img alt="Abstract Data" className="w-full h-full object-cover rounded-full filter grayscale contrast-125 blur-[2px]" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<div className="w-[80%] h-[80%] rounded-full border border-slate-200/50 border-dashed absolute"></div>
<div className="w-[60%] h-[60%] rounded-full border border-slate-200/50 absolute"></div>
<div className="w-[1px] h-full bg-slate-200/30 absolute"></div>
<div className="w-full h-[1px] bg-slate-200/30 absolute"></div>
</div>

<div className="relative z-20 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50">
<i className="w-6 h-6 text-white stroke-[1.5px]" data-lucide="cpu"></i>
</div>

<div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase mb-1">Your Wealth</span>
<span className="text-xs font-medium text-slate-800 uppercase">Potential</span>
<div className="w-[1px] h-8 bg-slate-300 mt-2"></div>
</div>
<div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="w-[1px] h-8 bg-slate-300 mb-2"></div>
<span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase mb-1">Target Goal</span>
<span className="text-xs font-medium text-slate-800 uppercase">Financial Freedom</span>
</div>
<div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex items-center gap-2 transform -rotate-90 origin-left">
<span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">AI Insight</span>
<div className="w-8 h-[1px] bg-slate-300"></div>
</div>
<div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex items-center gap-2 transform rotate-90 origin-right">
<div className="w-8 h-[1px] bg-slate-300"></div>
<span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">Optimization</span>
</div>
</div>

<div className="lg:col-span-3 flex flex-col bg-[#f8f9fa]">

<div className="flex-1 border-b border-slate-200 p-8 lg:p-12 flex flex-col justify-center relative group">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
<i className="w-5 h-5 text-slate-600" data-lucide="trending-up"></i>
</div>
<div className="text-4xl lg:text-5xl tracking-tight font-light text-slate-900 mb-2">$128K</div>
<div className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed max-w-[150px]">Projected Wealth In 10 Years</div>

<div className="absolute -left-[1px] top-1/2 w-4 h-[1px] bg-slate-300 hidden lg:block"></div>
</div>

<div className="flex-1 border-b border-slate-200 p-8 lg:p-12 flex flex-col justify-center relative group">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
<i className="w-5 h-5 text-slate-600" data-lucide="crosshair"></i>
</div>
<div className="text-4xl lg:text-5xl tracking-tight font-light text-slate-900 mb-2">$24.6K</div>
<div className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed max-w-[150px]">Taxes Optimized Annually</div>
<div className="absolute -left-[1px] top-1/2 w-4 h-[1px] bg-slate-300 hidden lg:block"></div>
</div>

<div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative group">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
<i className="w-5 h-5 text-slate-600" data-lucide="shield"></i>
</div>
<div className="text-4xl lg:text-5xl tracking-tight font-light text-slate-900 mb-2">92</div>
<div className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed max-w-[150px]">Financial Health Score</div>
<div className="absolute -left-[1px] top-1/2 w-4 h-[1px] bg-slate-300 hidden lg:block"></div>
</div>
</div>
</div>

<div className="w-full border-t border-slate-200 bg-white relative z-20">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

<div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-center relative">
<div className="w-2 h-2 bg-slate-300 rounded-full mb-6"></div>
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-2">Built For</span>
<span className="text-sm font-medium text-slate-900 uppercase">High-Earning Millennials</span>
</div>

<div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 flex items-start gap-4">
<i className="w-5 h-5 text-slate-400 mt-1 shrink-0" data-lucide="sparkles"></i>
<div>
<h4 className="text-xs font-medium tracking-widest text-slate-900 uppercase mb-3">AI-Personalized</h4>
<p className="text-sm text-slate-500 leading-relaxed">Custom strategies tailored to your income, goals, and lifestyle.</p>
</div>
</div>

<div className="p-8 border-b lg:border-b-0 md:border-r border-slate-200 flex items-start gap-4">
<div className="w-8 h-8 border border-slate-200 flex items-center justify-center shrink-0 rounded-sm">
<i className="w-4 h-4 text-slate-600" data-lucide="layout-dashboard"></i>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest text-slate-900 uppercase mb-3">Data-Driven</h4>
<p className="text-sm text-slate-500 leading-relaxed">Real-time insights that turn complexity into clarity.</p>
</div>
</div>

<div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-start gap-4">
<i className="w-5 h-5 text-slate-400 mt-1 shrink-0" data-lucide="lock"></i>
<div>
<h4 className="text-xs font-medium tracking-widest text-slate-900 uppercase mb-3">Private &amp; Secure</h4>
<p className="text-sm text-slate-500 leading-relaxed">Bank-level security to protect your data and your future.</p>
</div>
</div>

<div className="bg-slate-900 text-white p-8 flex flex-col justify-between relative group cursor-pointer hover:bg-black transition-colors">
<span className="text-xs font-medium tracking-widest text-slate-400">02</span>
<h3 className="text-lg font-medium uppercase mt-8 mb-4">Smarter Decisions.<br/>Richer Future.</h3>
<i className="w-5 h-5 text-slate-400 absolute bottom-8 right-8 group-hover:rotate-90 transition-transform duration-300" data-lucide="plus"></i>
</div>
</div>
</div>
</header>

<section className="py-24 lg:py-32 border-b border-slate-200 bg-white relative" id="solutions">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4 block">The Neural Engine</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-light uppercase text-slate-900">
                        See Every Dollar.<br/>Optimize Every Move.
                    </h2>
</div>
<p className="text-lg text-slate-600 max-w-md">
                    Lumen connects to your entire financial life, analyzing patterns across accounts to surface opportunities human advisors miss.
                </p>
</div>

<div className="border border-slate-200 bg-[#f8f9fa] rounded-xl overflow-hidden shadow-2xl shadow-slate-200/50">

<div className="h-12 border-b border-slate-200 flex items-center px-6 gap-2 bg-white">
<div className="w-3 h-3 rounded-full border border-slate-300 bg-slate-100"></div>
<div className="w-3 h-3 rounded-full border border-slate-300 bg-slate-100"></div>
<div className="w-3 h-3 rounded-full border border-slate-300 bg-slate-100"></div>
<div className="ml-4 flex-1 flex justify-center">
<div className="w-64 h-6 bg-slate-100 border border-slate-200 rounded-md flex items-center justify-center">
<i className="w-3 h-3 text-slate-400 mr-2" data-lucide="lock"></i>
<span className="text-[10px] text-slate-500 tracking-wider">app.lumen.ai/dashboard</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="hidden lg:block lg:col-span-2 border-r border-slate-200 bg-white p-6">
<div className="space-y-6">
<div>
<span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase mb-3 block">Overview</span>
<ul className="space-y-3">
<li className="text-sm font-medium text-slate-900 flex items-center gap-3"><i className="w-4 h-4" data-lucide="layout-grid"></i> Dashboard</li>
<li className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer flex items-center gap-3"><i className="w-4 h-4" data-lucide="activity"></i> Cash Flow</li>
<li className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer flex items-center gap-3"><i className="w-4 h-4" data-lucide="pie-chart"></i> Portfolio</li>
</ul>
</div>
<div className="pt-6 border-t border-slate-100">
<span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase mb-3 block">AI Modules</span>
<ul className="space-y-3">
<li className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="calculator"></i> Tax Engine</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</li>
<li className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="building"></i> Real Estate</div>
</li>
<li className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="zap"></i> Crypto Alg</div>
<i className="w-3 h-3 text-slate-300" data-lucide="lock"></i>
</li>
</ul>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-10 p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-3 bg-white border border-slate-200 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h3 className="text-sm font-medium text-slate-500 mb-1">Total Net Worth</h3>
<div className="text-4xl font-light tracking-tight text-slate-900">$1,459,203.88</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> +12.4%
                                    </span>
<span className="text-xs text-slate-400">vs last year</span>
</div>
</div>

<div className="flex-1 w-full h-24 relative flex items-end justify-between gap-1">

<div className="w-full bg-slate-100 h-[20%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[35%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[30%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[45%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[60%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[55%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[70%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[85%] hover:bg-slate-200 transition-colors rounded-t-sm"></div>
<div className="w-full bg-slate-900 h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded">Today</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-[#7a8b88]" data-lucide="sparkles"></i> AI Tax Recommendation
                                </h3>
<span className="text-[10px] uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-1 rounded-sm">High Priority</span>
</div>
<div className="bg-amber-50 border border-amber-100 p-4 rounded-md mb-6">
<p className="text-sm text-amber-900 leading-relaxed">
                                    Based on your recent RSUs vesting, harvesting $14,500 in losses from your tech ETF holdings by Dec 31st will optimize your bracket.
                                </p>
</div>
<div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-sm font-medium text-slate-900">Potential Savings: <span className="text-emerald-600">$4,200</span></span>
<button className="text-xs bg-slate-900 text-white px-4 py-2 rounded-sm font-medium hover:bg-black transition-colors">Execute Strategy</button>
</div>
</div>

<div className="col-span-1 bg-white border border-slate-200 rounded-lg p-6">
<h3 className="text-sm font-medium text-slate-900 mb-6">Asset Allocation</h3>

<div className="relative w-32 h-32 mx-auto mb-6">
<svg className="transform -rotate-90 w-full h-full" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#f1f5f9" strokeWidth="15"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#0f172a" stroke-dasharray="150 100" strokeWidth="15"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#7a8b88" stroke-dasharray="60 200" stroke-dashoffset="-150" strokeWidth="15"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-xl font-light text-slate-900">62%</span>
<span className="text-[8px] uppercase tracking-widest text-slate-500">Equities</span>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-900"></div> Equities</div>
<span className="font-medium">62%</span>
</li>
<li className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a8b88]"></div> Fixed Income</div>
<span className="font-medium">24%</span>
</li>
<li className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-200"></div> Alternatives</div>
<span className="font-medium">14%</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 text-white border-b border-slate-800" id="how-it-works">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4 block">Methodology</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-light uppercase text-white mb-6">
                    Engineering Financial Growth
                </h2>
<p className="text-lg text-slate-400">A systematic, algorithmic approach to managing your wealth, eliminating emotion and maximizing return.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 border border-slate-800">

<div className="bg-slate-900 p-10 lg:p-12 group hover:bg-slate-800/50 transition-colors">
<div className="w-12 h-12 border border-slate-700 flex items-center justify-center mb-8 bg-slate-800/50">
<i className="w-5 h-5 text-slate-300" data-lucide="database"></i>
</div>
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-2 block">Phase 01</span>
<h3 className="text-xl font-medium text-white mb-4">Data Aggregation</h3>
<p className="text-base text-slate-400 leading-relaxed">Securely connect accounts via Plaid API. Lumen ingests transaction history, holding details, and interest rates in real-time.</p>
</div>

<div className="bg-slate-900 p-10 lg:p-12 group hover:bg-slate-800/50 transition-colors">
<div className="w-12 h-12 border border-slate-700 flex items-center justify-center mb-8 bg-slate-800/50">
<i className="w-5 h-5 text-[#7a8b88]" data-lucide="network"></i>
</div>
<span className="text-xs font-medium tracking-widest text-[#7a8b88] uppercase mb-2 block">Phase 02</span>
<h3 className="text-xl font-medium text-white mb-4">Algorithmic Analysis</h3>
<p className="text-base text-slate-400 leading-relaxed">Our proprietary ML models analyze spending inefficiencies, identify tax harvesting opportunities, and simulate market scenarios.</p>
</div>

<div className="bg-slate-900 p-10 lg:p-12 group hover:bg-slate-800/50 transition-colors">
<div className="w-12 h-12 border border-slate-700 flex items-center justify-center mb-8 bg-slate-800/50">
<i className="w-5 h-5 text-slate-300" data-lucide="zap"></i>
</div>
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-2 block">Phase 03</span>
<h3 className="text-xl font-medium text-white mb-4">Automated Execution</h3>
<p className="text-base text-slate-400 leading-relaxed">Approve AI-generated strategies with one click. Lumen automatically shifts funds, rebalances portfolios, and files tax documents.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-b border-slate-200">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

<div className="w-full lg:w-1/3 flex flex-col">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4 block">Use Cases</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-light uppercase text-slate-900 mb-8">
                    Built for your complexity.
                </h2>

<div className="flex flex-col gap-4 mt-4" id="use-case-tabs">
<label className="relative flex items-center p-6 border border-slate-900 cursor-pointer bg-slate-50 group">
<input checked="" className="peer sr-only" data-target="case-tax" name="usecase" type="radio"/>
<div className="flex-1">
<span className="block text-sm font-medium text-slate-900 uppercase tracking-wide mb-1">Tax Optimization</span>
<span className="block text-sm text-slate-500">Minimize liability automatically</span>
</div>
<div className="w-5 h-5 border border-slate-300 rounded-full flex items-center justify-center peer-checked:border-slate-900 peer-checked:bg-slate-900 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
</label>
<label className="relative flex items-center p-6 border border-slate-200 cursor-pointer hover:border-slate-400 transition-colors group">
<input className="peer sr-only" data-target="case-equity" name="usecase" type="radio"/>
<div className="flex-1">
<span className="block text-sm font-medium text-slate-900 uppercase tracking-wide mb-1">Equity Compensation</span>
<span className="block text-sm text-slate-500">Navigate RSUs and Options</span>
</div>
<div className="w-5 h-5 border border-slate-300 rounded-full flex items-center justify-center peer-checked:border-slate-900 peer-checked:bg-slate-900 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
</label>
<label className="relative flex items-center p-6 border border-slate-200 cursor-pointer hover:border-slate-400 transition-colors group">
<input className="peer sr-only" data-target="case-wealth" name="usecase" type="radio"/>
<div className="flex-1">
<span className="block text-sm font-medium text-slate-900 uppercase tracking-wide mb-1">Wealth Compounding</span>
<span className="block text-sm text-slate-500">Accelerate FIRE goals</span>
</div>
<div className="w-5 h-5 border border-slate-300 rounded-full flex items-center justify-center peer-checked:border-slate-900 peer-checked:bg-slate-900 transition-colors">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
</label>
</div>
</div>

<div className="w-full lg:w-2/3 bg-[#f8f9fa] border border-slate-200 p-8 lg:p-16 relative min-h-[400px] flex items-center">

<div className="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>

<div className="use-case-content w-full relative z-10 transition-opacity duration-500" id="case-tax">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<i className="w-6 h-6 text-slate-800" data-lucide="file-bar-chart"></i>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-slate-900">Tax-Loss Harvesting Engine</h3>
</div>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Lumen scans your portfolio daily, automatically selling depreciated assets to offset capital gains and ordinary income, then repurchasing similar assets to maintain your target allocation.
                    </p>
<div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
<div>
<span className="text-3xl font-light text-slate-900 block mb-1">Up to 3%</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Annual Yield Boost</span>
</div>
<div>
<span className="text-3xl font-light text-slate-900 block mb-1">Zero</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Manual Effort</span>
</div>
</div>
</div>

<div className="use-case-content w-full relative z-10 hidden transition-opacity duration-500" id="case-equity">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<i className="w-6 h-6 text-slate-800" data-lucide="briefcase"></i>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-slate-900">RSU &amp; Options Strategist</h3>
</div>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Stop guessing when to sell your company stock. Lumen models blackout periods, vesting schedules, and AMT implications to generate an exact schedule for diversification.
                    </p>
<div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
<div>
<span className="text-3xl font-light text-slate-900 block mb-1">100%</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Vesting Tracked</span>
</div>
<div>
<span className="text-3xl font-light text-slate-900 block mb-1">AMT</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Liability Minimized</span>
</div>
</div>
</div>

<div className="use-case-content w-full relative z-10 hidden transition-opacity duration-500" id="case-wealth">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<i className="w-6 h-6 text-slate-800" data-lucide="line-chart"></i>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-slate-900">Dynamic Rebalancing</h3>
</div>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Maintain your exact risk profile effortlessly. As markets drift, Lumen executes micro-trades to keep your asset allocation perfectly aligned with your long-term FIRE goals.
                    </p>
<div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
<div>
<span className="text-3xl font-light text-slate-900 block mb-1">24/7</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Portfolio Monitoring</span>
</div>
<div>
<span className="text-3xl font-light text-slate-900 block mb-1">Direct</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Indexing Support</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#f8f9fa] border-b border-slate-200 overflow-hidden flex flex-col items-center">
<span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase mb-8">Syncs securely with 10,000+ institutions</span>

<div className="w-full relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center gap-12 lg:gap-24 px-12 group-hover:[animation-play-state:paused]">

<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="landmark"></i> Chase</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="gem"></i> Fidelity</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="building-2"></i> Schwab</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="credit-card"></i> Amex</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="wallet"></i> Coinbase</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="banknote"></i> Vanguard</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="landmark"></i> Chase</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="gem"></i> Fidelity</div>
</div>

<div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 lg:gap-24 px-12 group-hover:[animation-play-state:paused]">
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="landmark"></i> Chase</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="gem"></i> Fidelity</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="building-2"></i> Schwab</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="credit-card"></i> Amex</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="wallet"></i> Coinbase</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="banknote"></i> Vanguard</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="landmark"></i> Chase</div>
<div className="text-xl font-medium text-slate-400 flex items-center gap-2"><i className="w-6 h-6" data-lucide="gem"></i> Fidelity</div>
</div>
</div>
<style>
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
            .animate-marquee2 {
                animation: marquee2 30s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
            }
            @keyframes marquee2 {
                0% { transform: translateX(100%); }
                100% { transform: translateX(0%); }
            }
        </style>
</section>

<section className="py-24 lg:py-32 bg-white border-b border-slate-200">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-slate-300">
<i className="w-8 h-8 text-white" data-lucide="shield-check"></i>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight font-light uppercase text-slate-900 mb-6">
                    Bank-Level Security.<br/>Zero Compromises.
                </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                    We built Lumen with security as the foundational layer. Your data is encrypted at rest and in transit. We never sell your data, and we operate with read-only access to your core accounts.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
<span className="text-sm font-medium text-slate-900">AES-256 Bit Encryption</span>
</div>
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
<span className="text-sm font-medium text-slate-900">SOC 2 Type II Certified</span>
</div>
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
<span className="text-sm font-medium text-slate-900">Multi-Factor Authentication Required</span>
</div>
</div>
</div>

<div className="relative h-[400px] border border-slate-200 bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-30"></div>

<div className="relative z-10 flex gap-4">
<div className="w-24 h-48 border border-slate-300 bg-white shadow-lg flex flex-col justify-between p-4 relative top-8">
<div className="w-full h-1 bg-emerald-400 rounded-full"></div>
<div className="space-y-2">
<div className="w-full h-2 bg-slate-100"></div>
<div className="w-3/4 h-2 bg-slate-100"></div>
</div>
</div>
<div className="w-32 h-64 border border-slate-300 bg-slate-900 shadow-2xl flex flex-col justify-center items-center p-4 z-20">
<i className="w-8 h-8 text-white mb-4" data-lucide="lock"></i>
<div className="w-full h-px bg-slate-800 my-4"></div>
<span className="text-[8px] uppercase tracking-widest text-slate-500 text-center">Encrypted<br/>Vault</span>
</div>
<div className="w-24 h-48 border border-slate-300 bg-white shadow-lg flex flex-col justify-between p-4 relative top-8">
<div className="w-full h-1 bg-emerald-400 rounded-full"></div>
<div className="space-y-2">
<div className="w-full h-2 bg-slate-100"></div>
<div className="w-3/4 h-2 bg-slate-100"></div>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-200" fill="none">
<path className="animate-pulse" d="M0,200 L150,200 L150,250 L250,250" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="animate-pulse" d="M1000,200 L850,200 L850,250 L750,250" stroke-dasharray="4 4" strokeWidth="1" style={{animationDelay: '1s'}}></path>
</svg>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#f8f9fa] border-b border-slate-200" id="about">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="mb-16">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4 block">Proof of Work</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-light uppercase text-slate-900">
                    Trusted by high-earners.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 p-8 flex flex-col shadow-sm">
<div className="flex items-center gap-1 mb-6">
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8 flex-1">
                        "Lumen found tax inefficiencies in my setup that my CPA of 5 years completely missed. It essentially paid for itself in the first 48 hours. The interface is cold, clinical, and exactly what I want for my money."
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">JD</div>
<div>
<h4 className="text-sm font-medium text-slate-900 uppercase">James D.</h4>
<span className="text-xs text-slate-500">Software Engineer, L6</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 p-8 flex flex-col shadow-sm">
<div className="flex items-center gap-1 mb-6">
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8 flex-1">
                        "Managing RSUs from two different tech IPOs was a nightmare. Lumen aggregates it perfectly, runs the AMT scenarios, and literally tells me 'sell X shares on Tuesday'. It's indispensable."
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">SC</div>
<div>
<h4 className="text-sm font-medium text-slate-900 uppercase">Sarah C.</h4>
<span className="text-xs text-slate-500">VP Product</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 p-8 flex flex-col shadow-sm md:hidden lg:flex">
<div className="flex items-center gap-1 mb-6">
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 text-slate-900 fill-slate-900" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-8 flex-1">
                        "I used to spend 5 hours a month managing spreadsheets. Now I spend 5 minutes checking the Lumen dashboard. The automated rebalancing and direct indexing features are institutional grade."
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">MK</div>
<div>
<h4 className="text-sm font-medium text-slate-900 uppercase">Michael K.</h4>
<span className="text-xs text-slate-500">Surgeon</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-b border-slate-200 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none flex justify-center opacity-20">
<div className="w-px h-full bg-slate-300"></div>
<div className="w-px h-full bg-slate-300 absolute left-1/4"></div>
<div className="w-px h-full bg-slate-300 absolute right-1/4"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl tracking-tight font-light uppercase text-slate-900 mb-6">
                    Transparent Access.
                </h2>
<p className="text-lg text-slate-600">Flat fee structure. No AUM percentages. No hidden costs.</p>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm font-medium text-slate-900" id="monthly-label">Monthly</span>
<button className="w-14 h-7 bg-slate-200 rounded-full relative transition-colors focus:outline-none" id="billing-toggle">
<div className="w-5 h-5 bg-slate-900 rounded-full absolute top-1 left-1 transition-transform duration-300" id="toggle-knob"></div>
</button>
<span className="text-sm font-medium text-slate-500" id="annual-label">Annually <span className="text-[10px] text-emerald-600 ml-1 uppercase tracking-widest">Save 20%</span></span>
</div>
</div>
<div className="bg-white border border-slate-900 shadow-2xl p-8 lg:p-12 relative group corner-plus corner-plus-tl">

<div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] uppercase tracking-widest px-4 py-1">Standard</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-8 mb-8 gap-6">
<div>
<h3 className="text-2xl font-light tracking-tight text-slate-900 mb-2 uppercase">Lumen Pro</h3>
<p className="text-sm text-slate-500">Everything you need to automate your wealth.</p>
</div>
<div className="text-right">
<div className="flex items-end gap-1">
<span className="text-5xl font-light tracking-tighter text-slate-900" id="price-display">$99</span>
<span className="text-sm text-slate-500 mb-1" id="billing-period">/mo</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-12">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
<span className="text-sm text-slate-700">Unlimited account syncing</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
<span className="text-sm text-slate-700">Daily tax-loss harvesting</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
<span className="text-sm text-slate-700">RSU &amp; Equity tracking</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
<span className="text-sm text-slate-700">Automated rebalancing</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
<span className="text-sm text-slate-700">Direct indexing access</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
<span className="text-sm text-slate-700">Priority email support</span>
</div>
</div>
<button className="w-full bg-slate-900 text-white py-5 text-sm font-medium tracking-widest uppercase hover:bg-black transition-colors flex justify-center items-center gap-2">
                    Start 14-Day Free Trial <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-center text-xs text-slate-500 mt-6">Require institutional management? <a className="underline hover:text-slate-900" href="#">Contact Sales</a> for AUM &gt; $10M.</p>
</div>
</section>

<footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800" id="resources">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-24">

<div className="md:col-span-4 lg:col-span-3">
<a className="flex items-center gap-4 mb-8" href="#">
<div className="w-8 h-8 border border-slate-700 flex items-center justify-center relative">
<div className="w-4 h-4 border border-white relative">
<div className="absolute inset-0 border-l border-b border-white transform translate-x-1 translate-y-1"></div>
</div>
</div>
<span className="text-lg font-medium tracking-[0.2em] leading-none">LUMEN</span>
</a>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                        The clinical, data-driven operating system for your net worth. Built for those who value optimization over emotion.
                    </p>
</div>

<div className="md:col-span-2 lg:col-span-2 lg:col-start-6">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-6 block">Platform</span>
<ul className="space-y-4">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">How it works</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Tax Engine</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Equity Compensation</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-2">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-6 block">Company</span>
<ul className="space-y-4">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="md:col-span-4 lg:col-span-3">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-6 block">Subscribe</span>
<p className="text-sm text-slate-300 mb-4">Weekly technical insights on tax law, market mechanics, and wealth architecture.</p>
<form className="flex" onsubmit="event.preventDefault();">
<input className="bg-slate-800 border border-slate-700 text-white px-4 py-3 w-full text-sm focus:outline-none focus:border-slate-500 placeholder:text-slate-500" placeholder="Email address" required="" type="email"/>
<button className="bg-white text-slate-900 px-4 flex items-center justify-center hover:bg-slate-200 transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<p className="text-xs text-slate-500">© 2024 Lumen AI, Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-slate-300" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-slate-300" href="#">Terms of Service</a>
<a className="text-xs text-slate-500 hover:text-slate-300" href="#">Legal Disclosures</a>
</div>
</div>
<p className="text-[10px] text-slate-600 mt-8 max-w-4xl text-justify leading-relaxed">
                Lumen is a financial technology company, not a bank. Brokerage services are provided by Lumen Securities LLC, member FINRA/SIPC. Investment advisory services are provided by Lumen Advisors LLC, an SEC-registered investment adviser. Investing involves risk, including possible loss of principal. Past performance does not guarantee future results.
            </p>
</div>
</footer>



    </>
  );
}
