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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize Lucide Icons with specified stroke width
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
</div>

<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>


<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center h-20">

<div className="flex items-center pr-8 border-r border-white/10 h-10">
<a className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-violet-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
<div className="w-2 h-2 bg-white rounded-sm"></div>
</div>
            Kova
          </a>
</div>

<div className="hidden md:flex items-center gap-8 pl-8 text-base font-medium text-neutral-400">
<a className="text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Websites</a>
<a className="hover:text-white transition-colors" href="#">AI Systems</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="ml-auto flex items-center gap-4">
<a className="hidden sm:block text-base font-medium text-neutral-300 hover:text-white transition-colors" href="#">
            Sign In
          </a>
<a className="relative group" href="#">
<div className="absolute -inset-0.5 bg-violet-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
<button className="relative bg-black border border-violet-500/30 text-violet-300 px-5 py-2.5 rounded-full text-base font-medium hover:bg-violet-950/50 hover:scale-105 transition-all flex items-center gap-2">
              LET'S CONNECT
            </button>
</a>
</div>
</div>
</nav>

<main className="lg:pt-52 lg:pb-32 lg:px-12 min-h-screen flex flex-col z-10 max-w-7xl mr-auto ml-auto pt-40 pr-6 pb-20 pl-6 relative justify-center">
<div className="max-w-3xl">

<div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-3 py-1.5 mb-8 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="plus"></i>
<span className="text-xs font-medium text-neutral-300 tracking-widest uppercase">
            Welcome to Kova
          </span>
</div>

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards] [animation-delay:100ms]">
          Building digital presence
          <br/>
<span className="text-neutral-600">automating what's next</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards] [animation-delay:200ms]">
          We design high-performance websites and integrate intelligent AI
          workflows to streamline operations and scale your business.
        </p>

<div className="flex items-center gap-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards] [animation-delay:400ms]">
<div className="relative group">
<div className="absolute -inset-1 bg-violet-500 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-500"></div>
<button className="relative bg-violet-500 text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-violet-400 hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Get Started
            </button>
</div>
<button className="text-base font-medium text-neutral-300 hover:text-white hover:scale-105 transition-all flex items-center gap-2 group">
            View capabilities
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</main>

<div>

<section className="border-y border-white/5 bg-black/20 py-10 mt-12 relative z-10 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards] [animation-delay:600ms]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<p className="text-center text-sm font-medium text-neutral-500 uppercase tracking-widest mb-6">
            Trusted by growing businesses
          </p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-600"></div>
<span className="text-lg font-bold text-white tracking-tight">
                AcmeCorp
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-600"></div>
<span className="text-lg font-bold text-white tracking-tight">
                TechFlow
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rotate-45 bg-neutral-600"></div>
<span className="text-lg font-bold text-white tracking-tight">
                Nexus
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-tl-lg rounded-br-lg bg-neutral-600"></div>
<span className="text-lg font-bold text-white tracking-tight">
                Vanguard
              </span>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Core Capabilities
          </h2>
<p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Two pillars of growth. We build your digital foundation and automate
            your workflows.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="group p-10 rounded-3xl bg-gradient-to-b from-[#111] to-black border border-white/5 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-10 h-10 text-violet-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" data-lucide="layout"></i>
<h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">
              Web Development
            </h3>
<p className="text-neutral-400 mb-8 text-base leading-relaxed">
              High-performance websites designed for conversion. Fast, modern,
              and built to scale.
            </p>
<ul className="space-y-4 text-base text-neutral-300">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                Conversion-focused design
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                Next-gen performance
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                Scalable architecture
              </li>
</ul>
</div>
<div className="group p-10 rounded-3xl bg-gradient-to-b from-[#111] to-black border border-white/5 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-10 h-10 text-violet-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" data-lucide="bot"></i>
<h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">
              AI Automation
            </h3>
<p className="text-neutral-400 mb-8 text-base leading-relaxed">
              Intelligent workflows that eliminate manual tasks. Lead scraping,
              AI receptionists, and seamless sync.
            </p>
<ul className="space-y-4 text-base text-neutral-300">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                Lead generation systems
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                24/7 AI Receptionists
              </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-500" data-lucide="check"></i>
                Operational workflows
              </li>
</ul>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-black/40 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              How It Works
            </h2>
<p className="text-neutral-400 text-lg">
              A simple, effective process to transform your business.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">
<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative text-center group">
<div className="w-20 h-20 mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-xl text-violet-400 font-semibold group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                01
              </div>
<h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                Analyze
              </h3>
<p className="text-base text-neutral-400 leading-relaxed">
                We audit your current systems and identify automation
                opportunities.
              </p>
</div>
<div className="relative text-center group">
<div className="w-20 h-20 mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-xl text-violet-400 font-semibold group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                02
              </div>
<h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                Build
              </h3>
<p className="text-base text-neutral-400 leading-relaxed">
                We design your platform and integrate AI-driven workflows.
              </p>
</div>
<div className="relative text-center group">
<div className="w-20 h-20 mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-xl text-violet-400 font-semibold group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                03
              </div>
<h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                Scale
              </h3>
<p className="text-base text-neutral-400 leading-relaxed">
                You operate with higher efficiency, zero manual work, and more
                leads.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Simple Pricing
          </h2>
<p className="text-neutral-400 text-lg">
            High-end solutions without the enterprise bloat.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col hover:-translate-y-1">
<h3 className="text-2xl font-semibold mb-2 text-white tracking-tight">
              Web Platform
            </h3>
<p className="text-base text-neutral-400 mb-8">
              A premium digital presence.
            </p>
<div className="mb-10">
<span className="text-5xl font-bold text-white">$1500</span>
<span className="text-neutral-500 text-lg">/one-time</span>
</div>
<ul className="space-y-5 text-base text-neutral-300 mb-10 flex-1">
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                Custom high-end design
              </li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                Optimized for speed &amp; SEO
              </li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                CMS Integration
              </li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                1 month of support
              </li>
</ul>
<button className="w-full py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors hover:scale-[1.02] duration-300">
              Select Plan
            </button>
</div>

<div className="p-10 rounded-3xl bg-gradient-to-b from-violet-900/20 to-[#0a0a0a] border border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col relative hover:-translate-y-1">
<div className="absolute top-0 right-10 -translate-y-1/2 bg-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              Best Value
            </div>
<h3 className="text-2xl font-semibold mb-2 text-violet-50 tracking-tight">
              AI Automation
            </h3>
<p className="text-base text-violet-200/60 mb-8">
              Scale operations effortlessly.
            </p>
<div className="mb-10">
<span className="text-5xl font-bold text-white">$300</span>
<span className="text-neutral-400 text-lg">/month</span>
</div>
<ul className="space-y-5 text-base text-neutral-200 mb-10 flex-1">
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                Lead generation &amp; scraping
              </li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                AI Agent configuration
              </li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                Workflow automation
              </li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 text-violet-400" data-lucide="check"></i>
                Ongoing optimization
              </li>
</ul>
<button className="w-full py-4 rounded-full bg-violet-500 text-white font-semibold hover:bg-violet-400 hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Select Plan
            </button>
</div>
</div>
</section>

<section className="py-32 relative z-10 max-w-3xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Frequently Asked Questions
          </h2>
</div>
<div className="space-y-4">
<details className="group rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-white hover:text-violet-300 transition-colors">
              How long does a website build take?
              <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
              Typically 2-4 weeks depending on the complexity of the design and
              integrations. We prioritize quality and high performance.
            </div>
</details>
<details className="group rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-white hover:text-violet-300 transition-colors">
              What does the AI Automation plan include?
              <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
              It includes setting up lead scraping, AI email responders, and
              workflow automations using Zapier/Make to eliminate manual data
              entry.
            </div>
</details>
<details className="group rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-white hover:text-violet-300 transition-colors">
              Do I need technical knowledge?
              <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
              Not at all. We handle the technical heavy lifting and provide you
              with simple, ready-to-use platforms and automations.
            </div>
</details>
</div>
</section>

<section className="py-32 relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center border-t border-white/5">
<div className="absolute inset-0 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 text-white">
          Stop wasting time
          <br/>
<span className="text-neutral-500">on manual work.</span>
</h2>
<p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let Kova build and automate your growth. High-performance systems
          designed for the future.
        </p>
<button className="relative bg-violet-500 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-violet-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center gap-3 mx-auto group">
          Start Now
          <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</section>
</div>

<div className="fixed top-6 left-6 text-neutral-700 pointer-events-none z-50">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<div className="fixed top-6 right-6 text-neutral-700 pointer-events-none z-50">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<div className="fixed bottom-6 left-6 text-neutral-700 pointer-events-none z-50">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<div className="fixed bottom-6 right-6 text-neutral-700 pointer-events-none z-50">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>


    </>
  );
}
