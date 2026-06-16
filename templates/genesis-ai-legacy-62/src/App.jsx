import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const closeMenuBtn = document.getElementById('close-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMenu() {
          if (mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.remove('hidden');
              mobileMenu.classList.add('flex');
              document.body.style.overflow = 'hidden'; // Prevent scrolling
          } else {
              mobileMenu.classList.add('hidden');
              mobileMenu.classList.remove('flex');
              document.body.style.overflow = '';
          }
      }

      mobileMenuBtn.addEventListener('click', toggleMenu);
      closeMenuBtn.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => {
          link.addEventListener('click', toggleMenu);
      });

      // Tabs Logic
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');

      tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              // Remove active class from all buttons
              tabBtns.forEach(b => {
                  b.classList.remove('bg-gray-100', 'text-gray-900');
                  b.classList.add('text-gray-500');
              });
              // Add active class to clicked button
              btn.classList.add('bg-gray-100', 'text-gray-900');
              btn.classList.remove('text-gray-500');

              // Hide all contents
              tabContents.forEach(content => {
                  content.classList.add('hidden');
                  content.classList.remove('block');
              });

              // Show target content
              const targetId = btn.getAttribute('data-target');
              const targetContent = document.getElementById(targetId);
              if (targetContent) {
                  targetContent.classList.remove('hidden');
                  targetContent.classList.add('block');
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="z-50 lg:px-12 flex w-full pt-6 pr-6 pb-6 pl-6 absolute top-0 items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<div className="grid grid-cols-2 gap-0.5">
<div className="w-2.5 h-2.5 bg-gray-900 rounded-tl-md"></div>
<div className="w-2.5 h-2.5 bg-gray-900 rounded-tr-sm"></div>
<div className="w-2.5 h-2.5 bg-gray-900 rounded-bl-sm"></div>
<div className="w-2.5 h-2.5 bg-gray-900 rounded-br-md"></div>
</div>
<span className="uppercase text-sm font-medium tracking-widest">
          Genesis
        </span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm text-gray-600 font-medium absolute left-1/2 transform -translate-x-1/2">
<a className="hover:text-gray-900 transition-colors" href="#platform">
          Platform
        </a>
<a className="hover:text-gray-900 transition-colors" href="#solutions">
          Solutions
        </a>
<a className="hover:text-gray-900 transition-colors" href="#how-it-works">
          How It Works
        </a>
<a className="hover:text-gray-900 transition-colors" href="#insights">
          Insights
        </a>
<a className="hover:text-gray-900 transition-colors" href="#about">
          About Us
        </a>
</div>
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">
          Log in
        </a>
<button className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm">
          Get Started
          <i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>

<button className="lg:hidden text-gray-900 p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<div className="fixed inset-0 bg-white z-[60] hidden flex-col p-6" id="mobile-menu">
<div className="flex justify-between items-center mb-12">
<span className="font-medium tracking-widest text-sm uppercase">
          Genesis
        </span>
<button className="p-2" id="close-menu-btn">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<div className="flex flex-col gap-6 text-2xl font-medium tracking-tight mb-auto">
<a className="mobile-link" href="#platform">Platform</a>
<a className="mobile-link" href="#solutions">Solutions</a>
<a className="mobile-link" href="#how-it-works">How It Works</a>
<a className="mobile-link" href="#insights">Insights</a>
<a className="mobile-link" href="#about">About Us</a>
</div>
<div className="flex flex-col gap-4 mt-8">
<a className="text-center py-3 text-lg font-medium border border-gray-200 rounded-md" href="#">
          Log in
        </a>
<button className="bg-black text-white text-lg font-medium py-3 rounded-md">
          Get Started
        </button>
</div>
</div>

<section className="min-h-screen lg:pt-0 flex flex-col lg:flex-row overflow-hidden relative top-24">

<div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:pl-16 xl:pl-28 lg:pr-12 z-10 py-12 lg:py-0">
<div className="flex gap-2 bg-white w-max border-gray-200 border rounded-full mb-10 pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm items-center">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="sparkles"></i>
<span className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-medium">
            AI-Powered Legacy Planning
          </span>
</div>
<h1 className="lg:text-[5rem] leading-[1.05] text-5xl font-medium text-[#111827] tracking-tight mb-8">
          Plan Today.
          <br/>
          Preserve Tomorrow.
          <br/>
<span className="font-normal italic text-gray-800 font-serif">
            Empower Generations.
          </span>
</h1>
<p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
          The AI platform that unifies inheritance planning, investment
          strategies, and family legacy—so your wealth creates impact that
          lasts.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
<button className="w-full sm:w-auto bg-black text-white text-sm font-medium px-6 py-3.5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-md">
            Start Your Legacy Plan
            <i className="w-4 h-4 text-gray-300" data-lucide="arrow-up-right"></i>
</button>
<button className="w-full sm:w-auto text-sm font-medium text-gray-600 flex items-center justify-center gap-3 hover:text-gray-900 transition-colors group">
<div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
<i className="w-4 h-4 ml-0.5 fill-current" data-lucide="play"></i>
</div>
            Watch how it works
          </button>
</div>
<div className="mt-auto pt-10 border-t border-gray-100/80">
<p className="text-[0.65rem] uppercase tracking-widest text-gray-400 font-semibold mb-6">
            Trusted by forward-thinking families
          </p>
<div className="flex items-center gap-8 lg:gap-12 opacity-40 grayscale select-none overflow-x-auto hide-scrollbar">
<span className="text-xl font-bold tracking-tighter">KPMG</span>
<span className="text-xl font-serif font-bold italic tracking-tighter lowercase">
              pwc
            </span>
<span className="text-lg font-medium tracking-tight">Deloitte.</span>
<span className="text-xl font-bold tracking-tighter">EY</span>
<span className="text-sm font-semibold tracking-tight flex items-center gap-1">
<i className="w-4 h-4 fill-current" data-lucide="send"></i>
              BNY MELLON
            </span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative min-h-[60vh] lg:min-h-screen bg-[#f3f4f6] lg:bg-transparent overflow-hidden">

<div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#e4d4f4] via-[#f2d8e9] to-[#8de4ed]"></div>
<img alt="Abstract rendering" className="absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay opacity-40" src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>

<div className="z-10 hidden lg:block absolute top-0 right-0 bottom-0 left-0">

<div className="absolute left-[15%] top-[30%] max-w-[200px]">
<div className="text-[0.65rem] uppercase tracking-widest text-gray-800 font-semibold mb-2">
              Legacy DNA™
            </div>
<p className="text-xs text-gray-600 leading-relaxed">
              AI maps your values, wealth, and vision to build a lasting legacy.
            </p>
<div className="absolute -bottom-6 left-0 w-48 h-[1px] bg-gray-300/60"></div>
<div className="absolute -bottom-6 left-24 w-1 h-1 bg-gray-600 rounded-full transform -translate-y-1/2"></div>
</div>

<div className="absolute right-[10%] top-[40%]">
<div className="absolute top-1/2 -left-32 w-32 h-[1px] bg-gray-300/60"></div>
<div className="glass-panel p-5 rounded-2xl shadow-sm min-w-[240px] bg-white/70 backdrop-blur-md border-white/50">
<div className="flex justify-between items-center mb-3">
<span className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-semibold">
                  Legacy Score
                </span>
<i className="w-3 h-3 text-gray-400" data-lucide="arrow-up-right"></i>
</div>
<div className="flex items-end gap-1 mb-4">
<span className="text-4xl font-medium tracking-tight text-gray-900 leading-none">
                  92
                </span>
<span className="text-xs text-gray-400 mb-1">/100</span>
</div>
<div className="flex items-end gap-1.5 h-8">
<div className="w-full bg-gray-200 h-[20%] rounded-sm"></div>
<div className="w-full bg-gray-200 h-[30%] rounded-sm"></div>
<div className="w-full bg-gray-300 h-[45%] rounded-sm"></div>
<div className="w-full bg-gray-300 h-[60%] rounded-sm"></div>
<div className="w-full bg-gray-400 h-[80%] rounded-sm"></div>
<div className="w-full bg-gray-900 h-[100%] rounded-sm"></div>
<div className="w-full bg-teal-100 h-[70%] rounded-sm"></div>
<div className="w-full bg-gray-200 h-[40%] rounded-sm"></div>
</div>
</div>
</div>

<div className="absolute right-[15%] top-[65%] max-w-[200px]">
<div className="absolute top-1/2 -left-32 w-32 h-[1px] bg-gray-300/60"></div>
<div className="absolute top-1/2 -left-32 w-1.5 h-1.5 bg-gray-900 rounded-full transform -translate-y-1/2 ring-4 ring-white/50"></div>
<div className="text-[0.65rem] uppercase tracking-widest text-gray-800 font-semibold mb-2">
              Multi-Generational Impact
            </div>
<p className="text-xs text-gray-600 leading-relaxed">
              Your plan. Their future. Generations empowered.
            </p>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fafafa] to-transparent lg:hidden z-20"></div>
</div>
</section>

<div className="bg-black text-white w-full">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">
<div className="p-8 flex items-start gap-4 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:border-gray-600 transition-colors">
<i className="w-5 h-5 text-gray-300" data-lucide="cpu"></i>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase mb-2 text-gray-200">
              AI Insights
            </h4>
<p className="text-sm text-gray-400 leading-relaxed">
              Personalized strategies driven by intelligent insights.
            </p>
</div>
</div>
<div className="p-8 flex items-start gap-4 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:border-gray-600 transition-colors">
<i className="w-5 h-5 text-gray-300" data-lucide="target"></i>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase mb-2 text-gray-200">
              Invest With Purpose
            </h4>
<p className="text-sm text-gray-400 leading-relaxed">
              Growth aligned with your values and long-term vision.
            </p>
</div>
</div>
<div className="p-8 flex items-start gap-4 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:border-gray-600 transition-colors">
<i className="w-5 h-5 text-gray-300" data-lucide="line-chart"></i>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase mb-2 text-gray-200">
              Legacy Simulation
            </h4>
<p className="text-sm text-gray-400 leading-relaxed">
              See the future impact of your decisions across generations.
            </p>
</div>
</div>
<div className="p-8 flex items-start gap-4 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:border-gray-600 transition-colors">
<i className="w-5 h-5 text-gray-300" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase mb-2 text-gray-200">
              Bank-Grade Security
            </h4>
<p className="text-sm text-gray-400 leading-relaxed">
              Your data and legacy are protected at every layer.
            </p>
</div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto" id="platform">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
          The Platform
        </h2>
<h3 className="text-3xl lg:text-4xl tracking-tight font-medium text-gray-900 mb-6">
          Intelligent Wealth Architecture
        </h3>
<p className="text-lg text-gray-600">
          A unified environment that brings together legal structures,
          investment portfolios, and family values into one living, breathing
          strategy.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" data-lucide="network"></i>
</div>
<h4 className="text-lg font-medium tracking-tight text-gray-900 mb-3">
            Holistic Entity Mapping
          </h4>
<p className="text-base text-gray-600 leading-relaxed">
            Visualize your entire estate—trusts, LLCs, foundations, and personal
            accounts—in a single, interconnected graph.
          </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" data-lucide="calculator"></i>
</div>
<h4 className="text-lg font-medium tracking-tight text-gray-900 mb-3">
            Dynamic Tax Optimization
          </h4>
<p className="text-base text-gray-600 leading-relaxed">
            Continuous AI analysis identifies opportunities to minimize tax
            liabilities across generations and jurisdictions.
          </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" data-lucide="users"></i>
</div>
<h4 className="text-lg font-medium tracking-tight text-gray-900 mb-3">
            Heir Readiness
          </h4>
<p className="text-base text-gray-600 leading-relaxed">
            Educational modules and simulated scenarios to prepare the next
            generation for the responsibilities of wealth.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2">
<h2 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
            Control Center
          </h2>
<h3 className="text-3xl lg:text-4xl tracking-tight font-medium text-gray-900 mb-6">
            Dial in your generational parameters.
          </h3>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our advanced simulation engine lets you adjust variables in
            real-time. See how changes in market conditions, distribution rates,
            or tax laws impact your family's future over 100+ years.
          </p>
<ul className="space-y-4 text-base text-gray-700">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-400" data-lucide="check"></i>
              Monte Carlo simulations
            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-400" data-lucide="check"></i>
              Custom inflation modeling
            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-400" data-lucide="check"></i>
              Charitable impact tracking
            </li>
</ul>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white rounded-3xl transform rotate-2 scale-105 opacity-50"></div>
<div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-6 sm:p-8">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
<div>
<h4 className="text-base font-medium text-gray-900">
                  Simulation Parameters
                </h4>
<p className="text-xs text-gray-500">
                  Adjust variables to project outcomes.
                </p>
</div>
<button className="text-xs font-medium bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-md transition-colors">
                Reset
              </button>
</div>

<div className="space-y-6 mb-8">
<div>
<div className="flex justify-between items-center mb-3">
<label className="text-sm font-medium text-gray-700">
                    Annual Distribution Rate
                  </label>
<span className="text-sm font-medium text-gray-900" id="dist-val">
                    4.2%
                  </span>
</div>
<input className="custom-slider" max="10" min="1" oninput="document.getElementById('dist-val').innerText = this.value + '%'" step="0.1" type="range" value="4.2"/>
</div>
<div>
<div className="flex justify-between items-center mb-3">
<label className="text-sm font-medium text-gray-700">
                    Philanthropic Allocation
                  </label>
<span className="text-sm font-medium text-gray-900" id="phil-val">
                    15%
                  </span>
</div>
<input className="custom-slider" max="50" min="0" oninput="document.getElementById('phil-val').innerText = this.value + '%'" step="1" type="range" value="15"/>
</div>
</div>

<div className="space-y-4 mb-8">
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
<div>
<h5 className="text-sm font-medium text-gray-900">
                    Auto-Rebalance
                  </h5>
<p className="text-xs text-gray-500">
                    Maintain target asset allocation.
                  </p>
</div>
<input checked="" className="custom-toggle" type="checkbox"/>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
<div>
<h5 className="text-sm font-medium text-gray-900">
                    Tax-Loss Harvesting
                  </h5>
<p className="text-xs text-gray-500">
                    Optimize portfolio for tax efficiency.
                  </p>
</div>
<input className="custom-toggle" type="checkbox"/>
</div>
</div>
<div className="flex items-center gap-3">
<input checked="" className="custom-checkbox" id="terms" type="checkbox"/>
<label className="text-xs text-gray-600 select-none cursor-pointer" htmlFor="terms">
                Apply settings to all secondary trusts.
              </label>
</div>
<button className="w-full mt-6 bg-black text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Run Simulation
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto" id="how-it-works">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
          Process
        </h2>
<h3 className="text-3xl lg:text-4xl tracking-tight font-medium text-gray-900">
          From complexity to clarity in three steps.
        </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gray-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-lg font-medium text-gray-900 mb-6 shadow-sm group-hover:border-gray-900 transition-colors">
            1
          </div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
            Aggregate
          </h4>
<p className="text-base text-gray-600 leading-relaxed">
            Securely connect accounts, upload legal documents, and define your
            family tree. Genesis maps your current reality.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-lg font-medium text-gray-900 mb-6 shadow-sm group-hover:border-gray-900 transition-colors">
            2
          </div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
            Analyze
          </h4>
<p className="text-base text-gray-600 leading-relaxed">
            Our AI identifies gaps in coverage, tax inefficiencies, and
            misalignment with your stated values.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 bg-black border border-black rounded-full flex items-center justify-center text-lg font-medium text-white mb-6 shadow-md">
            3
          </div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
            Architect
          </h4>
<p className="text-base text-gray-600 leading-relaxed">
            Receive a dynamic, actionable blueprint. Execute strategies directly
            or collaborate seamlessly with your advisors.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="solutions">
<div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-gray-900 mb-12">
          Built for the stewards of wealth.
        </h2>

<div className="flex flex-wrap justify-center gap-2 mb-12 bg-white p-1.5 rounded-xl border border-gray-200 inline-flex shadow-sm">
<button className="tab-btn active px-6 py-2.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-900 transition-colors" data-target="tab-individuals">
            Individuals &amp; Families
          </button>
<button className="tab-btn px-6 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 transition-colors" data-target="tab-offices">
            Family Offices
          </button>
<button className="tab-btn px-6 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 transition-colors" data-target="tab-advisors">
            Wealth Advisors
          </button>
</div>

<div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm text-left relative overflow-hidden">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
<div className="tab-content block relative z-10" id="tab-individuals">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="user"></i>
</div>
<div>
<h3 className="text-2xl tracking-tight font-medium text-gray-900 mb-4">
                  Empower your family's future.
                </h3>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Take control of your legacy. Translate your life's work into a
                  structured plan that protects your wealth and prepares your
                  heirs. No more scattered documents or fragmented advice.
                </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700 font-medium">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Unified Dashboard
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Document Vault
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Values Mapping
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Beneficiary Education
                  </li>
</ul>
</div>
</div>
</div>
<div className="tab-content hidden relative z-10" id="tab-offices">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="building-2"></i>
</div>
<div>
<h3 className="text-2xl tracking-tight font-medium text-gray-900 mb-4">
                  Scale your operational excellence.
                </h3>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Streamline complex entity structures and multi-generational
                  reporting. Genesis provides the infrastructure to manage
                  multiple households with precision and absolute privacy.
                </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700 font-medium">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Multi-Entity Rollups
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Custom Reporting
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Governance Tracking
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Private Cloud Options
                  </li>
</ul>
</div>
</div>
</div>
<div className="tab-content hidden relative z-10" id="tab-advisors">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="briefcase"></i>
</div>
<div>
<h3 className="text-2xl tracking-tight font-medium text-gray-900 mb-4">
                  Deepen client relationships.
                </h3>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Move beyond asset management. Offer sophisticated legacy
                  planning tools that engage the next generation and
                  differentiate your practice in a competitive landscape.
                </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700 font-medium">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    White-label Interface
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Client Collaboration
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Scenario Modeling
                  </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    Compliance Logs
                  </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-gray-800/40 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium mb-6">
              Your legacy is more than a number.
            </h2>
<p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              We measure success not just by wealth preserved, but by the
              positive impact generated across families and communities.
            </p>
<button className="border border-gray-700 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
              View Impact Report
            </button>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-12">
<div>
<div className="text-5xl font-medium tracking-tight mb-2">$50B+</div>
<div className="text-sm text-gray-400 font-medium tracking-widest uppercase">
                Assets Mapped
              </div>
</div>
<div>
<div className="text-5xl font-medium tracking-tight mb-2">10k+</div>
<div className="text-sm text-gray-400 font-medium tracking-widest uppercase">
                Families Empowered
              </div>
</div>
<div>
<div className="text-5xl font-medium tracking-tight mb-2">99.9%</div>
<div className="text-sm text-gray-400 font-medium tracking-widest uppercase">
                System Uptime
              </div>
</div>
<div>
<div className="text-5xl font-medium tracking-tight mb-2">3.5x</div>
<div className="text-sm text-gray-400 font-medium tracking-widest uppercase">
                Avg. Philanthropic Increase
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
<i className="w-6 h-6 text-gray-900 mb-4" data-lucide="lock"></i>
<h4 className="text-base font-medium text-gray-900 mb-2">
                End-to-End Encryption
              </h4>
<p className="text-sm text-gray-600">
                AES-256 encryption at rest and in transit. Your data is
                unreadable to anyone but you.
              </p>
</div>
<div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
<i className="w-6 h-6 text-gray-900 mb-4" data-lucide="shield"></i>
<h4 className="text-base font-medium text-gray-900 mb-2">
                SOC 2 Type II
              </h4>
<p className="text-sm text-gray-600">
                Audited continuously to ensure the highest standards of security
                and availability.
              </p>
</div>
<div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
<i className="w-6 h-6 text-gray-900 mb-4" data-lucide="eye-off"></i>
<h4 className="text-base font-medium text-gray-900 mb-2">
                Zero-Knowledge Arch
              </h4>
<p className="text-sm text-gray-600">
                We cannot access your personal financial data. You hold the
                ultimate keys.
              </p>
</div>
<div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
<i className="w-6 h-6 text-gray-900 mb-4" data-lucide="fingerprint"></i>
<h4 className="text-base font-medium text-gray-900 mb-2">
                Biometric Access
              </h4>
<p className="text-sm text-gray-600">
                Multi-factor authentication and biometric locks for all
                sensitive actions.
              </p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2">
<h2 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
            Security
          </h2>
<h3 className="text-3xl lg:text-4xl tracking-tight font-medium text-gray-900 mb-6">
            Fort Knox for your digital legacy.
          </h3>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We understand that we are handling your most sensitive information.
            Genesis is built on a foundation of paranoia, employing
            military-grade security protocols to ensure your family's data
            remains utterly private.
          </p>
<a className="text-sm font-medium text-gray-900 flex items-center gap-2 hover:underline underline-offset-4" href="#">
            Read our security whitepaper
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="insights">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
              Insights
            </h2>
<h3 className="text-3xl tracking-tight font-medium text-gray-900">
              Perspectives on wealth.
            </h3>
</div>
<a className="hidden sm:flex text-sm font-medium text-gray-900 items-center gap-2 hover:underline underline-offset-4" href="#">
            View all articles
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="aspect-[16/10] bg-gray-200 rounded-xl mb-6 overflow-hidden">
<img alt="Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
              Strategy
            </div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
              The shifting landscape of estate tax in 2025.
            </h4>
<p className="text-sm text-gray-600 line-clamp-2">
              Understanding the sunset provisions and how proactive planning can
              save millions in potential liabilities.
            </p>
</a>

<a className="group block" href="#">
<div className="aspect-[16/10] bg-gray-200 rounded-xl mb-6 overflow-hidden">
<img alt="Technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
              AI &amp; Tech
            </div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
              How machine learning is redefining asset allocation.
            </h4>
<p className="text-sm text-gray-600 line-clamp-2">
              Beyond modern portfolio theory: Using predictive models to build
              truly resilient generational wealth.
            </p>
</a>

<a className="group block sm:hidden lg:block" href="#">
<div className="aspect-[16/10] bg-gray-200 rounded-xl mb-6 overflow-hidden">
<img alt="Family" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
              Governance
            </div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
              Preparing the next generation for the burden of wealth.
            </h4>
<p className="text-sm text-gray-600 line-clamp-2">
              Practical frameworks for communicating values, responsibilities,
              and the mechanics of the family trust.
            </p>
</a>
</div>
<div className="mt-8 sm:hidden">
<a className="text-sm font-medium text-gray-900 flex items-center gap-2 hover:underline underline-offset-4" href="#">
            View all articles
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="border-t border-gray-200">

<div className="py-32 px-6 text-center max-w-3xl mx-auto">
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium text-gray-900 mb-6">
          Ready to shape your future?
        </h2>
<p className="text-lg text-gray-600 mb-10">
          Join the forward-thinking families who are building legacies that last
          generations.
        </p>
<form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
<input className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-base" placeholder="Enter your email" type="email"/>
<button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap" type="submit">
            Request Access
          </button>
</form>
<p className="text-xs text-gray-500 mt-4">
          For individuals with $10M+ in investable assets.
        </p>
</div>

<footer className="bg-white pt-16 pb-8 px-6 lg:px-12 border-t border-gray-100" id="about">
<div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="grid grid-cols-2 gap-[1px]">
<div className="w-2 h-2 bg-gray-900 rounded-tl-sm"></div>
<div className="w-2 h-2 bg-gray-900 rounded-tr-[1px]"></div>
<div className="w-2 h-2 bg-gray-900 rounded-bl-[1px]"></div>
<div className="w-2 h-2 bg-gray-900 rounded-br-sm"></div>
</div>
<span className="font-medium tracking-widest text-xs uppercase">
                Genesis
              </span>
</div>
<p className="text-sm text-gray-500 max-w-xs mb-6">
              The AI-powered platform for modern wealth architecture and
              multi-generational legacy planning.
            </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900 mb-4">Product</h5>
<ul className="space-y-3 text-sm text-gray-600">
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Platform Overview
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  AI Mapping
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Legacy Simulation
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Security
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900 mb-4">Solutions</h5>
<ul className="space-y-3 text-sm text-gray-600">
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Individuals
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Family Offices
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Wealth Advisors
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900 mb-4">Company</h5>
<ul className="space-y-3 text-sm text-gray-600">
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-500">
<p>© 2024 Genesis Legacy Solutions Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-gray-900 transition-colors" href="#">
              Terms of Service
            </a>
<a className="hover:text-gray-900 transition-colors" href="#">
              Cookie Policy
            </a>
</div>
</div>
</footer>
</section>


    </>
  );
}
