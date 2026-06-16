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



tailwind.config = { darkMode: 'class' };



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function(){
        const root = document.documentElement;
        const btn = document.getElementById('theme-toggle');
        if(!btn) return;
        const moon = btn.querySelector('[data-lucide="moon"]');
        const sun = btn.querySelector('[data-lucide="sun"]');

        function apply(mode){
          const isDark = mode === 'dark';
          root.classList.toggle('dark', isDark);
          try{ localStorage.setItem('theme', mode); }catch(e){}
          if(moon && sun){
            moon.classList.toggle('hidden', isDark);
            sun.classList.toggle('hidden', !isDark);
          }
          if(window.lucide && window.lucide.createIcons){ window.lucide.createIcons(); }
        }

        let saved = null;
        try{ saved = localStorage.getItem('theme'); }catch(e){}
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        apply(saved ? saved : (prefersDark ? 'dark' : 'light'));

        btn.addEventListener('click', function(){
          apply(root.classList.contains('dark') ? 'light' : 'dark');
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
<a className="flex items-center gap-2 group" href="#">
<span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:opacity-75 transition-opacity duration-300" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Dugsiiye
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600 dark:text-slate-300">
<a className="hover:text-[#ff210a] transition-colors duration-200" href="#">
            Home
          </a>
<a className="hover:text-[#ff210a] transition-colors duration-200" href="#courses">
            Courses
          </a>
<a className="hover:text-[#ff210a] transition-colors duration-200" href="#bootcamps">
            Bootcamps
          </a>
<a className="hover:text-[#ff210a] transition-colors duration-200" href="#about">
            About Us
          </a>
<a className="hover:text-[#ff210a] transition-colors duration-200" href="#contact">
            Contact
          </a>
</div>
<div className="hidden" style={{display: 'none'}}></div>
<button className="md:hidden text-slate-700 dark:text-slate-200 p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors duration-300">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<button aria-label="Toggle dark mode" className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" id="theme-toggle" type="button">
<i className="block dark:hidden w-[20px] h-[20px] hidden" data-icon-replaced="true" data-lucide="moon" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(71, 85, 105)'}}></i>
<i className="w-5 h-5 dark:block" data-lucide="sun"></i>
</button>
</div>
</nav>

<section className="overflow-hidden flex flex-col min-h-screen md:pt-52 md:pb-32 md:pl-6 md:pr-6 text-center pt-40 pr-6 pb-24 pl-6 relative items-center justify-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-gradient-to-br from-[#ff210a]/20 via-[#fd760c]/10 to-[#ff210a]/5 rounded-full blur-[100px] -z-10 pointer-events-none opacity-80"></div>
<div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
<div className="inline-flex gap-2 shadow-[#ff210a]/10 text-xs font-semibold text-[#ff210a] bg-[#ff210a]/5 border-[#ff210a]/20 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-lg backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="flex h-2 w-2 rounded-full bg-[#ff210a] relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd760c] opacity-75"></span>
</span>
          Driving Sustainable Innovation in Africa
        </div>
<h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6 leading-[1.05] animate-[pulse_3s_ease-in-out_infinite] hover:scale-[1.02] transition-transform duration-500" style={{fontFamily: '\'Poppins\', sans-serif'}}>
  Transforming Potential into
  <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#ff210a] to-[#fd760c]">
    Sustainable Progress.
  </span>
</h1>
<p className="text-lg md:text-xl text-slate-500 dark:text-slate-300 max-w-2xl mb-10 font-normal leading-relaxed">
          Helix Horn Tech delivers modern solutions across digital
          transformation, renewable energy, fintech, and logistics to accelerate
          growth across the continent.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#fd760c] text-white text-sm font-medium rounded-xl hover:bg-[#e56a0b] transition-all duration-300 shadow-lg shadow-[#fd760c]/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#contact">
            Start a Project
          </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#services">
            Explore Services
            <iconify-icon className="" height="16" icon="solar:arrow-right-down-outline" strokeWidth="1.5" style={{color: 'currentColor'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none h-full"></div>
<div className="grid grid-cols-2 md:grid-cols-4 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl gap-x-4 gap-y-4">
<div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col gap-2 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-500 rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-2 gap-y-2">
<i className="text-[#ff210a] dark:text-red-400 w-6 h-6 mb-2" data-lucide="bar-chart-2"></i>
<span className="text-3xl font-normal tracking-tight text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              150+
            </span>
<span className="text-xs font-light text-slate-500 dark:text-slate-400">
              Enterprise Clients
            </span>
</div>
<div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-500 rounded-xl px-6 py-6 shadow-sm gap-x-2 gap-y-2">
<i className="text-[#fd760c] dark:text-orange-400 w-6 h-6 mb-2" data-lucide="sun"></i>
<span className="text-3xl font-normal tracking-tight text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              25MW
            </span>
<span className="text-xs font-light text-slate-500 dark:text-slate-400">
              Clean Energy Generated
            </span>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-2 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-500">
<i className="text-slate-900 dark:text-slate-100 w-6 h-6 mb-2" data-lucide="wallet"></i>
<span className="text-3xl font-normal tracking-tight text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              $50M+
            </span>
<span className="text-xs font-light text-slate-500 dark:text-slate-400">
              Transactions Processed
            </span>
</div>
<div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-500 rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-2 gap-y-2">
<i className="text-[#ff210a] dark:text-red-400 w-6 h-6 mb-2" data-lucide="users"></i>
<span className="text-3xl font-normal tracking-tight text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              10k+
            </span>
<span className="text-xs font-light text-slate-500 dark:text-slate-400">
              Professionals Trained
            </span>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-950">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<p className="text-center text-xs font-medium text-slate-400 dark:text-slate-500 mb-8 uppercase tracking-widest">
          Trusted by innovative organizations
        </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
<span className="text-xl font-semibold tracking-tighter text-slate-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            AFRICA.IO
          </span>
<span className="text-xl font-semibold tracking-tighter text-slate-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            ECOGRID
          </span>
<span className="text-xl font-semibold tracking-tighter text-slate-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            NEXUSPAY
          </span>
<span className="text-xl font-semibold tracking-tighter text-slate-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            GOVTECH
          </span>
<span className="text-xl font-semibold tracking-tighter text-slate-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            LOGISTIX
          </span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative dark:bg-slate-950" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 md:mb-24 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Comprehensive Solutions for a Modern Era.
          </h2>
<p className="text-base text-slate-500 dark:text-slate-300">
            We bridge the gap between complex technological challenges and
            sustainable, scalable outcomes across multiple critical sectors.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-[#ff210a]/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ff210a]/10 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-[#ff210a] transition-colors" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              ICT Services
            </h3>
<p className="text-sm text-slate-500 dark:text-slate-300 mb-8 flex-grow">
              End-to-end digital transformation, cloud architecture, software
              development, and enterprise IT infrastructure management.
            </p>
<a className="text-sm font-medium text-[#ff210a] flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" href="#">
              Learn more
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-[#fd760c]/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col h-full lg:translate-y-6 lg:hover:translate-y-4">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#fd760c]/10 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-[#fd760c] transition-colors" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Renewable Energy
            </h3>
<p className="text-sm text-slate-500 dark:text-slate-300 mb-8 flex-grow">
              Designing and deploying scalable solar, wind, and smart grid
              solutions for commercial and industrial applications.
            </p>
<a className="text-sm font-medium text-[#fd760c] flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" href="#">
              Learn more
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col h-full lg:translate-y-12 lg:hover:translate-y-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-100 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-slate-900 transition-colors" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Logistics &amp; Procurement
            </h3>
<p className="text-sm text-slate-500 dark:text-slate-300 mb-8 flex-grow">
              Tech-enabled supply chain optimization, strategic sourcing, and
              efficient distribution networks across borders.
            </p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" href="#">
              Learn more
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-[#ff210a]/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ff210a]/10 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-[#ff210a] transition-colors" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Fintech Solutions
            </h3>
<p className="text-sm text-slate-500 dark:text-slate-300 mb-8 flex-grow">
              Secure payment gateways, digital wallets, and financial inclusion
              platforms designed for the modern economy.
            </p>
<a className="text-sm font-medium text-[#ff210a] flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" href="#">
              Learn more
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-[#fd760c]/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col h-full lg:translate-y-6 lg:hover:translate-y-4 md:col-span-2 lg:col-span-1">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#fd760c]/10 transition-all duration-300">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-[#fd760c] transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Capacity Building
            </h3>
<p className="text-sm text-slate-500 dark:text-slate-300 mb-8 flex-grow">
              Corporate training programs, skill development, and executive
              education focused on emerging technologies.
            </p>
<a className="text-sm font-medium text-[#fd760c] flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" href="#">
              Learn more
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-800" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Built on Innovation, Driven by Purpose.
            </h2>
<p className="text-base text-slate-500 dark:text-slate-300 mb-8">
              At Helix Horn Tech, we believe that technology is the greatest
              catalyst for sustainable development. Our mission is to architect
              and deliver solutions that not only solve today's operational
              challenges but also secure tomorrow's environmental and economic
              landscape.
            </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#ff210a]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#ff210a]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 dark:text-slate-100 mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                    Unwavering Reliability
                  </h4>
<p className="text-sm text-slate-500 dark:text-slate-300">
                    Enterprise-grade infrastructure ensuring 99.9% uptime for
                    mission-critical operations.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#fd760c]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#fd760c]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 dark:text-slate-100 mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                    Sustainable at Core
                  </h4>
<p className="text-sm text-slate-500 dark:text-slate-300">
                    Every project is evaluated for carbon footprint and
                    long-term ecological impact.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-slate-700" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 dark:text-slate-100 mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                    Forward-Thinking Innovation
                  </h4>
<p className="text-sm text-slate-500 dark:text-slate-300">
                    Integrating AI, blockchain, and IoT to keep your
                    organization ahead of the curve.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[600px] bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-900 dark:to-slate-950 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.5'}}></div>

<div className="relative z-10 w-full max-w-sm">
<div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/30 border border-slate-100 dark:border-slate-800 transform -rotate-6 translate-y-8 translate-x-4">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-[#ff210a]/10 flex items-center justify-center">
<iconify-icon className="text-[#ff210a] text-lg" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Efficiency Index
                    </div>
<div className="text-xs text-slate-500 dark:text-slate-400">
                      +42% YoY
                    </div>
</div>
</div>
<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-[#ff210a] rounded-full"></div>
</div>
</div>
<div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/30 border border-slate-100 dark:border-slate-800 transform rotate-3 -translate-y-8 -translate-x-4 backdrop-blur-md bg-white/80 dark:bg-slate-950/80">
<div className="flex justify-between items-center mb-6">
<div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Energy Source
                  </div>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-end gap-2 h-20">
<div className="w-1/4 bg-slate-100 rounded-t-md h-1/4"></div>
<div className="w-1/4 bg-slate-200 rounded-t-md h-2/4"></div>
<div className="w-1/4 bg-[#fd760c]/10 rounded-t-md h-3/4"></div>
<div className="w-1/4 bg-[#fd760c] rounded-t-md h-full relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Solar
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-slate-950" id="industries">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-10" style={{fontFamily: '\'Poppins\', sans-serif'}}>
          Empowering Critical Sectors
        </h2>
<div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
<span className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-default">
            Government &amp; Public Sector
          </span>
<span className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-default">
            Financial Institutions
          </span>
<span className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-default">
            NGOs &amp; Non-Profits
          </span>
<span className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-default">
            Energy &amp; Utilities
          </span>
<span className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-default">
            Education &amp; EdTech
          </span>
<span className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-default">
            Private Enterprises
          </span>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-[#0a0f1c] text-white rounded-t-3xl md:rounded-t-[3rem] overflow-hidden relative shadow-2xl" id="projects">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-[#ff210a]/5 to-transparent blur-[100px] pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Proven Impact.
            </h2>
<p className="text-base text-slate-400">
              Real-world applications of our technology and sustainability
              solutions driving measurable success.
            </p>
</div>
<a className="text-sm font-medium text-[#ff210a] flex items-center gap-2 hover:text-[#ff210a]/80 transition-colors" href="#">
            View all case studies
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl bg-slate-800/50 border border-slate-700/50 p-8 hover:bg-slate-800 transition-all duration-300">
<div className="flex justify-between items-start mb-12">
<span className="px-3 py-1 bg-[#ff210a]/10 text-[#ff210a] text-xs font-medium rounded-full border border-[#ff210a]/20">
                Renewable Energy
              </span>
<iconify-icon className="text-2xl text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              National Solar Grid Integration
            </h3>
<p className="text-sm text-slate-400 mb-8">
              Deployed a decentralized smart grid system increasing rural energy
              access by 40% while reducing transmission losses.
            </p>
<div className="pt-6 border-t border-slate-700/50 flex gap-8">
<div>
<div className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  40%
                </div>
<div className="text-xs text-slate-500">Access Increase</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  12MW
                </div>
<div className="text-xs text-slate-500">Capacity Added</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-slate-800/50 border border-slate-700/50 p-8 hover:bg-slate-800 transition-all duration-300">
<div className="flex justify-between items-start mb-12">
<span className="px-3 py-1 bg-[#fd760c]/10 text-[#fd760c] text-xs font-medium rounded-full border border-[#fd760c]/20">
                Fintech &amp; Digital
              </span>
<iconify-icon className="text-2xl text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Cross-Border Payment Hub
            </h3>
<p className="text-sm text-slate-400 mb-8">
              Developed a scalable payment infrastructure facilitating
              low-latency, secure transactions across multiple African nations.
            </p>
<div className="pt-6 border-t border-slate-700/50 flex gap-8">
<div>
<div className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  &lt;1s
                </div>
<div className="text-xs text-slate-500">Transaction Time</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  2.5M
                </div>
<div className="text-xs text-slate-500">Active Users</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Partner Feedback.
            </h2>
<p className="text-sm text-slate-500 dark:text-slate-300 mb-8">
              Don't just take our word for it. Hear from the organizations we've
              helped transform.
            </p>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-black/30 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
<iconify-icon className="text-3xl text-[#ff210a]/40 mb-6" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-sm text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
                "Helix Horn Tech completely overhauled our legacy IT
                infrastructure. Their approach was methodical, secure, and
                delivered a 30% reduction in our operational tech costs."
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-semibold text-slate-600 dark:text-slate-200">
                  AM
                </div>
<div>
<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    Amina Mohammed
                  </div>
<div className="text-xs text-slate-500 dark:text-slate-400">
                    CTO, EcoGrid Solutions
                  </div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-black/30 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
<iconify-icon className="text-3xl text-[#fd760c]/40 mb-6" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-sm text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
                "The capacity building programs provided by HHT equipped our
                workforce with the exact digital skills needed to navigate the
                new financial regulations smoothly."
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-semibold text-slate-600 dark:text-slate-200">
                  DK
                </div>
<div>
<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    David Kwame
                  </div>
<div className="text-xs text-slate-500 dark:text-slate-400">
                    Director, NexusPay
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col lg:flex-row">

<div className="w-full lg:w-2/5 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0a0f1c] p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#ff210a]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                Get in touch.
              </h2>
<p className="text-sm text-slate-400 mb-12">
                Whether you need digital transformation, renewable energy
                solutions, or strategic consulting, our team is ready to help.
              </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="mailto:hello@helixhorn.tech">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#ff210a]/20 group-hover:text-[#ff210a] transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    hello@helixhorn.tech
                  </span>
</a>
<a className="flex items-center gap-4 group" href="tel:+254700000000">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#fd760c]/20 group-hover:text-[#fd760c] transition-colors">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    +254 700 000 000
                  </span>
</a>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-300">
                    Nairobi, Kenya (HQ)
                    <br/>
                    Operating Pan-Africa
                  </span>
</div>
</div>
</div>
<div className="relative z-10 mt-16 pt-8 border-t border-slate-800">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#ff210a] hover:text-[#ff210a]/80 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear" strokeWidth="1.5"></iconify-icon>
                Chat on WhatsApp
              </a>
</div>
</div>

<div className="w-full lg:w-3/5 p-10 md:p-16 dark:bg-slate-950">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    First Name
                  </label>
<input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#ff210a]/20 focus:border-[#ff210a] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-slate-100" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Last Name
                  </label>
<input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#ff210a]/20 focus:border-[#ff210a] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-slate-100" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Work Email
                </label>
<input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#ff210a]/20 focus:border-[#ff210a] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-slate-100" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Interest Area
                </label>

<div className="relative">
<select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#ff210a]/20 focus:border-[#ff210a] outline-none transition-all appearance-none text-slate-700 dark:text-slate-100">
<option disabled="" selected="" value="">
                      Select a service...
                    </option>
<option value="ict">ICT Services</option>
<option value="energy">Renewable Energy</option>
<option value="logistics">
                      Logistics &amp; Procurement
                    </option>
<option value="fintech">Fintech Solutions</option>
<option value="training">Capacity Building</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Message
                </label>
<textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#ff210a]/20 focus:border-[#ff210a] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-slate-100 resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>

<div className="flex items-start gap-3">
<div className="relative flex items-center mt-1">
<input className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-[#ff210a] checked:border-[#ff210a] transition-all cursor-pointer" id="privacy" type="checkbox"/>
<iconify-icon className="absolute left-0 top-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-base" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<label className="text-xs text-slate-500 dark:text-slate-300 cursor-pointer leading-tight" htmlFor="privacy">
                  I agree to the
                  <a className="text-slate-900 dark:text-slate-100 underline underline-offset-2" href="#">
                    Privacy Policy
                  </a>
                  and consent to being contacted regarding my inquiry.
                </label>
</div>
<button className="w-full px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-all shadow-sm" type="button">
                Send Message
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="inline-block mb-6" href="#">
<span className="text-2xl font-semibold tracking-tighter text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                HHT.
              </span>
</a>
<p className="text-sm text-slate-500 dark:text-slate-300 mb-6 max-w-sm">
              Helix Horn Tech is a modern African technology and sustainability
              company driving digital transformation and sustainable energy
              solutions.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">
<iconify-icon icon="solar:hashtag-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4">
              Services
            </h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-300">
<li>
<a className="hover:text-[#ff210a] transition-colors" href="#">
                  ICT Infrastructure
                </a>
</li>
<li>
<a className="hover:text-[#ff210a] transition-colors" href="#">
                  Renewable Energy
                </a>
</li>
<li>
<a className="hover:text-[#ff210a] transition-colors" href="#">
                  Logistics Tech
                </a>
</li>
<li>
<a className="hover:text-[#ff210a] transition-colors" href="#">
                  Fintech Platforms
                </a>
</li>
<li>
<a className="hover:text-[#ff210a] transition-colors" href="#">
                  Training &amp; Capacity
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4">
              Company
            </h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-300">
<li>
<a className="hover:text-slate-900 transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#projects">
                  Case Studies
                </a>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors" href="#">
                  News &amp; Insights
                </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4">
              Stay Updated
            </h4>
<p className="text-xs text-slate-500 dark:text-slate-300 mb-4">
              Subscribe to our newsletter for the latest tech and sustainability
              insights in Africa.
            </p>
<form className="flex gap-2">
<input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-[#ff210a] focus:border-[#ff210a] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-slate-100" placeholder="Email address" type="email"/>
<button className="px-3 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-md hover:bg-slate-800 dark:hover:bg-white transition-colors flex items-center justify-center" type="button">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 dark:text-slate-500">
            © 2024 Helix Horn Tech. All rights reserved.
          </p>
<div className="flex gap-6 text-xs text-slate-400 dark:text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-slate-900 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
