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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/5 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-zinc-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-zinc-800/10 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed w-full z-50 top-0 pt-6 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex items-center justify-between bg-[#18181B]/40 backdrop-blur-md border border-zinc-800/50 rounded-full px-6 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-['DM_Sans'] font-medium text-lg tracking-tight">
            CySAE
          </span>
</div>
<div className="hidden md:flex items-center gap-8 font-['JetBrains_Mono'] text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#approach">
            Method
          </a>
<a className="hover:text-white transition-colors" href="#principles">
            Principles
          </a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
</div>
<button className="bg-white text-black font-medium text-sm px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
          Start Project
          <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-screen flex flex-col justify-center relative pt-32 pb-20 border-b border-zinc-800/50 bg-[#050505] overflow-hidden px-6">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-3 border border-zinc-800/80 rounded-full px-5 py-2.5 mb-10 bg-zinc-900/50 backdrop-blur-sm">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
<span className="font-['JetBrains_Mono'] text-xs text-zinc-400 uppercase tracking-widest">
              Sys.Online / Architecture 001
            </span>
</div>
<h1 className="font-['DM_Sans'] font-medium text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] tracking-tighter leading-[0.95] text-white max-w-5xl mx-auto mb-8">
            Crafted Code.
            <br/>
<span className="text-zinc-500">Flawless Execution.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 font-light font-['JetBrains_Mono'] leading-relaxed max-w-3xl mx-auto mb-12">
            Minimalist architecture meets rigorous quality assurance. We build
            resilient digital platforms designed to scale effortlessly and
            perform flawlessly.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="bg-white text-black font-['JetBrains_Mono'] text-sm px-8 py-5 uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 w-full sm:w-auto">
              Initiate Project
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-transparent border border-zinc-800 text-white font-['JetBrains_Mono'] text-sm px-8 py-5 uppercase tracking-widest hover:border-zinc-500 transition-all w-full sm:w-auto text-center">
              View Stack
            </button>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-800/30 bg-transparent">
<div className="max-w-7xl mx-auto px-6 overflow-hidden flex items-center justify-between opacity-50 grayscale font-['JetBrains_Mono'] text-lg">
<span>Nexus</span>
<span>Quantum</span>
<span>Lumina</span>
<span>Aether</span>
<span>Forge</span>
</div>
</section>

<section className="py-32 px-6" id="approach">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="sticky top-32 self-start">
<h2 className="font-['DM_Sans'] font-medium text-4xl md:text-5xl tracking-tight mb-6">
              Architecting digital frontiers with precision.
            </h2>
<p className="text-lg text-zinc-400 font-light max-w-md">
              We don't just write code. We design modular environments and
              meticulously test every edge case. Our dual focus on development
              and QA ensures resilient products.
            </p>
</div>
<div className="flex flex-col gap-0 border-l border-zinc-800">
<div className="pl-10 pb-20 relative group">
<div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors"></div>
<div className="font-['JetBrains_Mono'] text-xs text-zinc-500 mb-4 tracking-widest uppercase">
                Phase 01
              </div>
<h3 className="font-['DM_Sans'] text-2xl tracking-tight mb-4 group-hover:text-zinc-300 transition-colors">
                System Design &amp; Architecture
              </h3>
<p className="text-lg text-zinc-400 font-light">
                Defining the blueprint. We select the optimal stack and
                architecture patterns to ensure scalability before a single line
                of code is written.
              </p>
</div>
<div className="pl-10 pb-20 relative group">
<div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors"></div>
<div className="font-['JetBrains_Mono'] text-xs text-zinc-500 mb-4 tracking-widest uppercase">
                Phase 02
              </div>
<h3 className="font-['DM_Sans'] text-2xl tracking-tight mb-4 group-hover:text-zinc-300 transition-colors">
                Pixel-Perfect Development
              </h3>
<p className="text-lg text-zinc-400 font-light">
                Translating design into interactive, performant frontends and
                robust backends. Focused on clean code and component
                reusability.
              </p>
</div>
<div className="pl-10 relative group">
<div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors"></div>
<div className="font-['JetBrains_Mono'] text-xs text-zinc-500 mb-4 tracking-widest uppercase">
                Phase 03
              </div>
<h3 className="font-['DM_Sans'] text-2xl tracking-tight mb-4 group-hover:text-zinc-300 transition-colors">
                Rigorous Automation QA
              </h3>
<p className="text-lg text-zinc-400 font-light">
                End-to-end testing ecosystems. We automate visual, functional,
                and performance testing to guarantee zero regression on
                deployment.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="principles">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end border-b border-zinc-800/50 pb-8">
<h2 className="font-['DM_Sans'] font-medium text-4xl md:text-5xl tracking-tight max-w-2xl">
              Engineering principles that define our craft.
            </h2>
<p className="text-zinc-500 font-['JetBrains_Mono'] text-sm hidden md:block uppercase tracking-widest">
              / Core Values
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<h3 className="font-['DM_Sans'] text-2xl mb-4 text-white">
                Modularity
              </h3>
<p className="text-zinc-400 font-light leading-relaxed">
                Systems designed as independent, interchangeable components. We
                build for scalability from day one, ensuring your architecture
                evolves gracefully.
              </p>
</div>
<div>
<h3 className="font-['DM_Sans'] text-2xl mb-4 text-white">
                Resilience
              </h3>
<p className="text-zinc-400 font-light leading-relaxed">
                Anticipating failure is the best way to prevent it. We implement
                robust fallback mechanisms and extensive error boundaries.
              </p>
</div>
<div>
<h3 className="font-['DM_Sans'] text-2xl mb-4 text-white">
                Performance
              </h3>
<p className="text-zinc-400 font-light leading-relaxed">
                Every millisecond counts. We relentlessly optimize critical
                rendering paths, minimize asset delivery, and leverage edge
                computing.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-800/30 bg-zinc-900/10" id="stack">
<div className="max-w-7xl mx-auto text-center">
<h2 className="font-['DM_Sans'] font-medium text-4xl md:text-5xl tracking-tight mb-6">
            Powered by modern tooling.
          </h2>
<p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-20">
            We carefully select our technological ecosystem to prioritize
            developer experience, end-user performance, and long-term
            maintainability.
          </p>
<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              TypeScript
            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              React &amp; Next.js
            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              Node.js
            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              Rust
            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              GraphQL
            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              PostgreSQL
            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              Kubernetes
            </div>
<div className="px-6 py-3 border border-zinc-800 rounded-full font-['JetBrains_Mono'] text-sm text-zinc-300 hover:bg-white hover:text-black transition-colors cursor-default">
              Terraform
            </div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-['DM_Sans'] font-medium text-4xl tracking-tight">
              Core Competencies
            </h2>
</div>
<div className="border-t border-zinc-800 flex flex-col">

<div className="group flex flex-col md:flex-row justify-between py-10 border-b border-zinc-800 hover:bg-[#18181B]/30 transition-colors cursor-pointer px-4 -mx-4 rounded-xl">
<div className="flex-1 mb-4 md:mb-0">
<h3 className="font-['DM_Sans'] text-3xl tracking-tight mb-2 group-hover:translate-x-2 transition-transform">
                  Frontend Engineering
                </h3>
<div className="font-['JetBrains_Mono'] text-xs text-zinc-500 flex gap-4">
<span>React</span>
<span>Vue</span>
<span>Tailwind</span>
<span>WebGL</span>
</div>
</div>
<div className="flex-1 text-lg text-zinc-400 font-light flex items-center md:justify-end">
<p className="max-w-sm md:text-right">
                  Crafting responsive, accessible, and performant user
                  interfaces with complex state management.
                </p>
</div>
</div>

<div className="group flex flex-col md:flex-row justify-between py-10 border-b border-zinc-800 hover:bg-[#18181B]/30 transition-colors cursor-pointer px-4 -mx-4 rounded-xl">
<div className="flex-1 mb-4 md:mb-0">
<h3 className="font-['DM_Sans'] text-3xl tracking-tight mb-2 group-hover:translate-x-2 transition-transform">
                  QA Automation Systems
                </h3>
<div className="font-['JetBrains_Mono'] text-xs text-zinc-500 flex gap-4">
<span>Cypress</span>
<span>Playwright</span>
<span>Jest</span>
</div>
</div>
<div className="flex-1 text-lg text-zinc-400 font-light flex items-center md:justify-end">
<p className="max-w-sm md:text-right">
                  Building resilient CI/CD pipelines with automated E2E and
                  component testing integration.
                </p>
</div>
</div>

<div className="group flex flex-col md:flex-row justify-between py-10 border-b border-zinc-800 hover:bg-[#18181B]/30 transition-colors cursor-pointer px-4 -mx-4 rounded-xl">
<div className="flex-1 mb-4 md:mb-0">
<h3 className="font-['DM_Sans'] text-3xl tracking-tight mb-2 group-hover:translate-x-2 transition-transform">
                  UI/UX Design Systems
                </h3>
<div className="font-['JetBrains_Mono'] text-xs text-zinc-500 flex gap-4">
<span>Figma</span>
<span>Tokens</span>
<span>Storybook</span>
</div>
</div>
<div className="flex-1 text-lg text-zinc-400 font-light flex items-center md:justify-end">
<p className="max-w-sm md:text-right">
                  Designing scalable token-based systems that bridge the gap
                  between design and development.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-zinc-800/50 bg-[#050505]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="font-['JetBrains_Mono'] text-xs text-zinc-500 mb-8 tracking-widest uppercase border-l-2 border-zinc-700 pl-4">
              / Performance &amp; Scale
            </div>
<h2 className="font-['DM_Sans'] text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              Engineered for zero downtime.
              <br/>
              Built for absolute scale.
            </h2>
<p className="text-zinc-400 font-light mb-10 font-['JetBrains_Mono'] text-sm leading-relaxed">
              Our architecture isn't just about writing code—it's about
              mathematical certainty. We deploy systems that handle exponential
              growth while maintaining sub-second latency and uncompromised
              security protocols.
            </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 border-b border-zinc-800/50 pb-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
<i className="w-4 h-4 text-zinc-400" data-lucide="shield"></i>
</div>
<span className="font-['JetBrains_Mono'] text-sm text-zinc-300">
                  99.999% Uptime SLA Guaranteed
                </span>
</div>
<div className="flex items-center gap-4 border-b border-zinc-800/50 pb-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
<i className="w-4 h-4 text-zinc-400" data-lucide="cpu"></i>
</div>
<span className="font-['JetBrains_Mono'] text-sm text-zinc-300">
                  Automated multi-region failover
                </span>
</div>
<div className="flex items-center gap-4 pb-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
<i className="w-4 h-4 text-zinc-400" data-lucide="activity"></i>
</div>
<span className="font-['JetBrains_Mono'] text-sm text-zinc-300">
                  Real-time anomaly detection
                </span>
</div>
</div>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-px bg-zinc-800/50 border border-zinc-800/50">
<div className="bg-[#050505] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
<div className="font-['JetBrains_Mono'] text-zinc-600 text-[10px] md:text-xs mb-4 uppercase tracking-widest">
                Requests / Sec
              </div>
<div className="font-['DM_Sans'] text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter">
                100k
                <span className="text-zinc-700">+</span>
</div>
</div>
<div className="bg-[#050505] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
<div className="font-['JetBrains_Mono'] text-zinc-600 text-[10px] md:text-xs mb-4 uppercase tracking-widest">
                Avg Latency
              </div>
<div className="font-['DM_Sans'] text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter">
                &lt;12
                <span className="text-zinc-700">ms</span>
</div>
</div>
<div className="bg-[#050505] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
<div className="font-['JetBrains_Mono'] text-zinc-600 text-[10px] md:text-xs mb-4 uppercase tracking-widest">
                Test Coverage
              </div>
<div className="font-['DM_Sans'] text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter">
                99.8
                <span className="text-zinc-700">%</span>
</div>
</div>
<div className="bg-[#050505] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
<div className="font-['JetBrains_Mono'] text-zinc-600 text-[10px] md:text-xs mb-4 uppercase tracking-widest">
                Deployments
              </div>
<div className="font-['DM_Sans'] text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter">
                CI/CD
              </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-zinc-800/30">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="w-16 h-16 border border-zinc-700 rounded-2xl mb-8 flex items-center justify-center bg-[#18181B]/50 backdrop-blur-sm">
<i className="w-8 h-8 text-white" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h2 className="font-['DM_Sans'] font-medium text-5xl md:text-7xl tracking-tighter mb-6">
            Unlock Your Asset's Potential.
          </h2>
<p className="text-xl text-zinc-400 font-light mb-12 max-w-xl">
            Dive into software architecture where innovative technology meets
            uncompromising quality assurance.
          </p>
<div className="flex items-center justify-center gap-6">
<button className="bg-white text-black font-medium text-lg px-10 py-5 rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Deploy Quality Now
            </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-[#050505] pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="font-['DM_Sans'] font-medium text-lg tracking-tight">
              CySAE
            </span>
</div>
<p className="text-zinc-500 font-['JetBrains_Mono'] text-xs max-w-xs">
            Architecting digital frontiers with precision.
            <br/>
            Software Dev &amp; QA Engineering.
          </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="font-medium text-white mb-2">Platform</span>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
              Development
            </a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
              QA Automation
            </a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
              Design Systems
            </a>
</div>
<div className="flex flex-col gap-4">
<span className="font-medium text-white mb-2">Company</span>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
              Portfolio
            </a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
              About Us
            </a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
              Contact
            </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 font-['JetBrains_Mono'] text-xs">
<p>© Designed with code by CySAE Studio. 2024</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
