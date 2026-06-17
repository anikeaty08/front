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
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
      });

      // Close mobile menu on link click
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFDFE]/80 backdrop-blur-md border-b border-gray-100/50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="flex h-6 w-6 relative transition-transform group-hover:scale-105">
<div className="w-1/2 h-full bg-black rounded-l-full"></div>
<div className="w-1/2 h-full border border-black rounded-r-full border-l-0"></div>

<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white -translate-x-1/2"></div>
</div>
<span className="font-normal text-xl tracking-tight">GhostDraft™</span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-sm text-slate-600 hover:text-black transition-colors" href="#how-it-works">
            How it works
          </a>
<a className="text-sm text-slate-600 hover:text-black transition-colors" href="#executives">
            For Executives
          </a>
<a className="text-sm text-slate-600 hover:text-black transition-colors" href="#security">
            Security
          </a>
<a className="text-sm text-slate-600 hover:text-black transition-colors" href="#about">
            About
          </a>
<a className="text-sm text-slate-600 hover:text-black transition-colors" href="#insights">
            Insights
          </a>
</div>

<div className="flex items-center gap-4">
<button className="hidden lg:flex bg-black hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 text-sm font-medium items-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Deploy Model
          </button>
<button className="lg:hidden text-slate-600 hover:text-black p-2" id="mobile-menu-btn">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="hidden lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg pb-6 px-6" id="mobile-menu">
<div className="flex flex-col gap-4 pt-4">
<a className="text-base text-slate-600 py-2 border-b border-gray-50" href="#how-it-works">
            How it works
          </a>
<a className="text-base text-slate-600 py-2 border-b border-gray-50" href="#executives">
            For Executives
          </a>
<a className="text-base text-slate-600 py-2 border-b border-gray-50" href="#security">
            Security
          </a>
<a className="text-base text-slate-600 py-2 border-b border-gray-50" href="#about">
            About
          </a>
<a className="text-base text-slate-600 py-2" href="#insights">Insights</a>
<button className="mt-4 bg-black text-white rounded-xl px-6 py-3 text-base font-medium flex items-center justify-center gap-2 w-full transition-all">
<span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Deploy Model
          </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center">

<div className="absolute right-0 top-0 w-full lg:w-[60%] h-full opacity-40 lg:opacity-100 pointer-events-none overflow-hidden z-0 flex items-center justify-center lg:justify-end">

<img alt="Abstract white waves" className="w-[150%] max-w-none h-auto object-cover hero-image-mask translate-x-1/4 scale-150 mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-8">
<div className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 flex items-center gap-2 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[11px] uppercase tracking-[0.15em] text-slate-700 font-semibold">
                GhostDraft Engine v2.0 Live
              </span>
</div>
</div>
<h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter font-medium text-black mb-6 max-w-3xl">
            Executive presence,
            <br/>
<span className="text-slate-400">fully autonomous.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed mb-10 font-light">
            GhostDraft maps your cognitive style and linguistic patterns to
            draft perfect communications—zero prompting required. So you can
            lead, not write.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-black hover:bg-slate-800 text-white rounded-2xl px-8 py-4 text-base font-medium flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] group hover:-translate-y-0.5" href="#">
              Deploy your model
              <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<a className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-black rounded-2xl px-6 py-4 text-base font-medium flex items-center justify-center gap-3 transition-all group hover:bg-slate-50" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors" data-lucide="play" strokeWidth="2"></i>
              Watch architecture demo
            </a>
</div>
<div className="mt-16 flex flex-wrap items-center gap-y-4 gap-x-6 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-300" data-lucide="lock" strokeWidth="2"></i>
<span>Bank-grade security</span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-300" data-lucide="server" strokeWidth="2"></i>
<span>Isolated instances</span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-300" data-lucide="shield-check" strokeWidth="2"></i>
<span>SOC 2 Type II</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative hidden lg:block">
<div className="relative w-full h-full flex items-center justify-center lg:justify-end">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md">
<div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-[2rem] p-6 relative z-20 hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px]">
<div className="w-full h-full bg-white rounded-full flex items-center justify-center">
<span className="text-sm font-bold text-black">SJ</span>
</div>
</div>
<div>
<p className="text-base font-medium text-black">
                        Sarah's Model
                      </p>
<p className="text-xs text-slate-500">
                        Syncing strategic context...
                      </p>
</div>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="space-y-4 mb-6">
<div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-full bg-indigo-500 origin-left animate-[scaleX_2s_ease-in-out_infinite_alternate]"></div>
</div>
<div className="h-2.5 w-2/3 bg-slate-100 rounded-full"></div>
<div className="h-2.5 w-4/5 bg-slate-100 rounded-full"></div>
</div>
<div className="pt-5 border-t border-slate-100/50 flex items-center justify-between text-xs font-medium">
<span className="flex items-center gap-1.5 text-emerald-600">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                    Tone match: 99.8%
                  </span>
<span className="px-3 py-1 bg-slate-50 rounded-lg text-slate-500 border border-slate-100">
                    Drafting response...
                  </span>
</div>
</div>
<div className="absolute -right-8 -bottom-16 w-72 bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl rotate-3 z-10 hover:rotate-0 transition-transform duration-500 border border-slate-800">
<p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-semibold mb-4">
                  Hours Recovered
                </p>
<p className="text-6xl tracking-tighter mb-3 font-medium">1,248</p>
<div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
<i className="w-4 h-4" data-lucide="trending-up"></i>
                  +24% vs last month
                </div>
</div>
<div className="absolute -left-16 top-10 bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 z-30 animate-[bounce_4s_ease-in-out_infinite]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-500" data-lucide="zap"></i>
</div>
<div>
<p className="text-sm font-semibold text-black">
                      Context Ingested
                    </p>
<p className="text-xs text-slate-500">
                      2,400+ threads analyzed
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden border-y border-slate-100/50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-12">
          Empowering Visionaries At
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
<span className="text-2xl font-bold tracking-tighter text-slate-800">
            AcmeCorp
          </span>
<span className="text-2xl font-medium tracking-tight text-slate-800">
            Global
            <span className="font-bold text-indigo-600">Ind</span>
</span>
<span className="text-xl tracking-widest uppercase font-semibold text-slate-800">
            Nexus
          </span>
<span className="text-2xl font-serif italic text-slate-800">Stellar</span>
<span className="text-2xl font-medium tracking-tight text-slate-800">
            Vanguard
          </span>
</div>
<div className="mt-40 max-w-5xl mx-auto">
<h2 className="text-4xl md:text-5xl lg:text-[4rem] tracking-tighter font-medium leading-[1.1] text-black">
            Executive time is your most constrained asset.
            <br/>
<span className="text-slate-300">
              Content creation shouldn't be the bottleneck.
            </span>
</h2>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative" id="how-it-works">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="mb-20 md:flex items-end justify-between">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl tracking-tighter font-medium mb-6 text-black">
              Autonomy, not assistance.
            </h2>
<p className="text-xl text-slate-500 leading-relaxed font-light">
              Traditional AI requires constant prompting. GhostDraft operates
              like a true Chief of Staff, anticipating needs and executing in
              your exact tone.
            </p>
</div>
<div className="mt-8 md:mt-0">
<a className="inline-flex items-center gap-2 pb-1 border-b border-black text-sm font-medium hover:text-indigo-600 hover:border-indigo-600 transition-colors" href="#">
              Explore the architecture
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-8 p-10 lg:p-14 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group overflow-hidden relative min-h-[400px]">
<div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-100/50 transition-colors duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-16 text-white group-hover:scale-110 transition-transform duration-500">
<i className="w-8 h-8" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-3xl tracking-tight font-medium mb-4 text-black">
                  Ingests your context
                </h3>
<p className="text-lg text-slate-500 leading-relaxed max-w-xl font-light">
                  Securely connects to your past emails, memos, and slack
                  messages to build a perfect LLM profile of your unique
                  cadence, vocabulary, and strategic framing.
                </p>
</div>
</div>
</div>
<div className="md:col-span-4 p-10 lg:p-14 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group flex flex-col justify-between min-h-[400px]">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-indigo-50 transition-colors duration-500">
<i className="w-8 h-8 text-slate-700 group-hover:text-indigo-600" data-lucide="feather" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-2xl tracking-tight font-medium mb-3 text-black">
                Drafts autonomously
              </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
                Give it a bulleted brief. GhostDraft returns a polished response
                ready to send.
              </p>
</div>
</div>
<div className="md:col-span-4 p-10 lg:p-14 rounded-[2.5rem] bg-slate-900 text-white border border-slate-800 shadow-xl transition-all group overflow-hidden relative min-h-[400px] flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-12">
<i className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-700" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium mb-3">
                Self-refining
              </h3>
<p className="text-base text-slate-400 leading-relaxed font-light">
                Every edit you make teaches the model. Tomorrow's draft is
                better than today's.
              </p>
</div>
</div>
<div className="md:col-span-8 p-10 lg:p-14 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex items-center group min-h-[400px]">
<div className="w-full flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h3 className="text-3xl tracking-tight font-medium mb-4 text-black">
                  Deploy anywhere
                </h3>
<p className="text-lg text-slate-500 leading-relaxed font-light mb-8">
                  Works seamlessly where you already work. No new tabs, no
                  copy-pasting.
                </p>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-slate-700" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-slate-700" data-lucide="slack" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-slate-700" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="w-full md:w-1/2 h-48 bg-slate-50 rounded-[2rem] border border-slate-100 relative overflow-hidden flex items-center justify-center group-hover:bg-slate-100/50 transition-colors duration-500">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '16px 16px'}}></div>
<div className="px-5 py-3 bg-white rounded-xl shadow-md border border-slate-100 text-sm font-semibold flex items-center gap-2 relative z-10 hover:scale-105 transition-transform">
<i className="w-4 h-4 text-indigo-500" data-lucide="sparkles" strokeWidth="2"></i>
                  GhostDraft active
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-bl from-indigo-600/20 to-purple-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="mb-24 text-center max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl tracking-tighter font-medium mb-6">
            The engine behind the execution.
          </h2>
<p className="text-xl text-slate-400 font-light">
            A seamless, zero-friction workflow designed specifically for busy
            executives.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-md hover:bg-slate-800/40 transition-colors relative overflow-hidden group min-h-[360px] flex flex-col">
<div className="text-[160px] font-bold text-slate-800/20 absolute -right-6 -bottom-16 group-hover:text-slate-700/20 transition-colors leading-none pointer-events-none">
              1
            </div>
<div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center mb-12 text-base font-bold relative z-10 group-hover:scale-110 transition-transform">
              01
            </div>
<h4 className="text-3xl font-medium mb-4 relative z-10 text-white">
              Connect
            </h4>
<p className="text-lg text-slate-400 leading-relaxed font-light relative z-10">
              Secure OAuth integration with your workspace. Zero manual data
              upload required. We strictly sync to isolate your profile.
            </p>
</div>
<div className="p-10 rounded-[2.5rem] bg-indigo-900/20 border border-indigo-500/20 backdrop-blur-md hover:bg-indigo-900/30 transition-colors relative overflow-hidden group min-h-[360px] flex flex-col">
<div className="text-[160px] font-bold text-indigo-900/20 absolute -right-6 -bottom-16 group-hover:text-indigo-800/20 transition-colors leading-none pointer-events-none">
              2
            </div>
<div className="w-14 h-14 bg-indigo-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] rounded-2xl flex items-center justify-center mb-12 text-base font-bold relative z-10 group-hover:scale-110 transition-transform">
              02
            </div>
<h4 className="text-3xl font-medium mb-4 relative z-10 text-white">
              Synthesize
            </h4>
<p className="text-lg text-slate-300 leading-relaxed font-light relative z-10">
              Our proprietary engine processes your history to extract stylistic
              markers, strategic priorities, and unique phrasing.
            </p>
</div>
<div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-md hover:bg-slate-800/40 transition-colors relative overflow-hidden group min-h-[360px] flex flex-col">
<div className="text-[160px] font-bold text-slate-800/20 absolute -right-6 -bottom-16 group-hover:text-slate-700/20 transition-colors leading-none pointer-events-none">
              3
            </div>
<div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center mb-12 text-base font-bold relative z-10 group-hover:scale-110 transition-transform">
              03
            </div>
<h4 className="text-3xl font-medium mb-4 relative z-10 text-white">
              Deploy
            </h4>
<p className="text-lg text-slate-400 leading-relaxed font-light relative z-10">
              Access via a minimal extension or directly in your client.
              Highlight context, click draft, and send perfection.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="executives">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium mb-20 text-center text-black">
          Built for executive communication.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group p-10 lg:p-14 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-all cursor-pointer flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-md">
<div className="flex justify-between items-start">
<div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<i className="w-7 h-7 text-slate-700" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right" strokeWidth="2"></i>
</div>
</div>
<div className="mt-12">
<h4 className="text-3xl font-medium mb-4 text-black">
                Team Alignment
              </h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                Weekly memos, all-hands scripts, and strategic alignment emails
                crafted perfectly.
              </p>
</div>
</div>
<div className="group p-10 lg:p-14 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-all cursor-pointer flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-md">
<div className="flex justify-between items-start">
<div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<i className="w-7 h-7 text-slate-700" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right" strokeWidth="2"></i>
</div>
</div>
<div className="mt-12">
<h4 className="text-3xl font-medium mb-4 text-black">
                Board Reporting
              </h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                Quarterly updates, investor memos, and financial narratives with
                strict precision.
              </p>
</div>
</div>
<div className="group p-10 lg:p-14 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-all cursor-pointer flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-md">
<div className="flex justify-between items-start">
<div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<i className="w-7 h-7 text-slate-700" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right" strokeWidth="2"></i>
</div>
</div>
<div className="mt-12">
<h4 className="text-3xl font-medium mb-4 text-black">
                Thought Leadership
              </h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                LinkedIn posts, opinion pieces, and public relations statements
                that sound authentically you.
              </p>
</div>
</div>
<div className="group p-10 lg:p-14 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-all cursor-pointer flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-md">
<div className="flex justify-between items-start">
<div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<i className="w-7 h-7 text-slate-700" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right" strokeWidth="2"></i>
</div>
</div>
<div className="mt-12">
<h4 className="text-3xl font-medium mb-4 text-black">
                Complex Threads
              </h4>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                Synthesizing 20-email threads into a single, decisive response
                in seconds.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50" id="security">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="bg-white rounded-[3rem] p-10 lg:p-20 border border-slate-100 shadow-2xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold uppercase tracking-widest text-slate-600 mb-10">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="2"></i>
              Enterprise Foundation
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium mb-8 leading-[1.1] text-black">
              Your data is yours.
              <br/>
<span className="text-slate-400">Period.</span>
</h2>
<p className="text-lg text-slate-500 mb-12 leading-relaxed font-light">
              Built for the C-Suite, security isn't a feature—it's our
              foundation. We never train public models on your data, employing
              strict zero-retention policies.
            </p>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="mt-1 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
<i className="w-5 h-5 text-emerald-600" data-lucide="check" strokeWidth="2.5"></i>
</div>
<div>
<h5 className="font-medium text-xl mb-2 text-slate-900">
                    SOC 2 Type II Certified
                  </h5>
<p className="text-base text-slate-500 font-light leading-relaxed">
                    Independently audited for security, availability, and
                    absolute confidentiality.
                  </p>
</div>
</div>
<div className="flex gap-5 group">
<div className="mt-1 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
<i className="w-5 h-5 text-emerald-600" data-lucide="check" strokeWidth="2.5"></i>
</div>
<div>
<h5 className="font-medium text-xl mb-2 text-slate-900">
                    Private LLM Infrastructure
                  </h5>
<p className="text-base text-slate-500 font-light leading-relaxed">
                    Your specific voice model runs in an isolated, dedicated
                    instance.
                  </p>
</div>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-[2.5rem] p-8 min-h-[480px] relative overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center group">
<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
<div className="relative z-10 w-full max-w-sm">
<div className="bg-black/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl text-sm font-mono text-slate-300 transform group-hover:scale-105 transition-transform duration-500">
<div className="flex gap-2 mb-8 border-b border-slate-800 pb-5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<div className="space-y-4 opacity-90 text-base">
<p>
<span className="text-purple-400">const</span>
                    session =
                    <span className="text-blue-400">initVault</span>
                    ();
                  </p>
<p>
                    session.verify({
                    <span className="text-emerald-400">strict</span>
                    :
                    <span className="text-orange-400">true</span>
                    });
                  </p>
<p className="text-slate-500 italic mt-6">
                    // Zero-retention active
                  </p>
<p>
<span className="text-purple-400">await</span>
                    core.load(
                    <span className="text-yellow-300">'enc_profile_v2'</span>
                    );
                  </p>
<div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3 font-semibold">
<div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                    ISOLATED INSTANCE SECURE
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="about">
<div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
<div className="mb-12 inline-flex">
<i className="w-20 h-20 text-indigo-50" data-lucide="quote" strokeWidth="1"></i>
</div>
<h3 className="text-3xl md:text-5xl lg:text-[3.5rem] tracking-tighter font-medium leading-[1.1] text-black mb-16 max-w-5xl mx-auto">
          "GhostDraft didn't just save me 10 hours a week. It elevated the
          quality of my communication. My team thinks I'm suddenly
          <span className="italic text-slate-400">superhuman</span>
          at synthesizing complex strategy."
        </h3>
<div className="flex flex-col items-center justify-center gap-5">
<div className="relative">
<img alt="CEO" className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ring-4 ring-slate-50 shadow-lg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 bg-black text-white p-2 rounded-full border-4 border-white shadow-sm">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
</div>
</div>
<div>
<p className="font-medium text-xl text-black">Sarah Jenkins</p>
<p className="text-xs text-slate-400 font-semibold tracking-widest uppercase mt-2">
              CEO, Nexus Technologies
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium mb-6 text-black">
            The new standard.
          </h2>
<p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Why leading executives are upgrading their communication workflow to
            GhostDraft.
          </p>
</div>
<div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
<div className="grid grid-cols-3 bg-slate-50/50 border-b border-slate-100 p-8 md:p-10">
<div className="col-span-1"></div>
<div className="col-span-1 text-center font-semibold text-2xl tracking-tight text-black">
              GhostDraft
            </div>
<div className="col-span-1 text-center font-medium text-xl text-slate-400">
              Standard AI
            </div>
</div>
<div className="grid grid-cols-3 border-b border-slate-100 p-8 md:p-10 hover:bg-slate-50/50 transition-colors items-center group">
<div className="col-span-1 font-medium text-slate-900 text-xl tracking-tight">
              Tone matching
            </div>
<div className="col-span-1 text-center flex flex-col items-center gap-3">
<div className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-2.5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="font-medium text-black">
                Autonomous &amp; Perfect
              </span>
</div>
<div className="col-span-1 text-center text-slate-500 font-light text-lg">
              Requires constant prompting
            </div>
</div>
<div className="grid grid-cols-3 border-b border-slate-100 p-8 md:p-10 hover:bg-slate-50/50 transition-colors items-center group">
<div className="col-span-1 font-medium text-slate-900 text-xl tracking-tight">
              Context awareness
            </div>
<div className="col-span-1 text-center flex flex-col items-center gap-3">
<div className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-2.5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="font-medium text-black">Deep History Synced</span>
</div>
<div className="col-span-1 text-center text-slate-500 font-light text-lg">
              Session-only memory
            </div>
</div>
<div className="grid grid-cols-3 border-b border-slate-100 p-8 md:p-10 hover:bg-slate-50/50 transition-colors items-center group">
<div className="col-span-1 font-medium text-slate-900 text-xl tracking-tight">
              Data Privacy
            </div>
<div className="col-span-1 text-center flex flex-col items-center gap-3">
<div className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-2.5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="font-medium text-black">
                Zero Retention &amp; SOC 2
              </span>
</div>
<div className="col-span-1 text-center text-slate-500 font-light text-lg">
              Used for training data
            </div>
</div>
<div className="grid grid-cols-3 p-8 md:p-10 hover:bg-slate-50/50 transition-colors items-center group">
<div className="col-span-1 font-medium text-slate-900 text-xl tracking-tight">
              Workflow integration
            </div>
<div className="col-span-1 text-center flex flex-col items-center gap-3">
<div className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-2.5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="font-medium text-black">Native in Workspace</span>
</div>
<div className="col-span-1 text-center text-slate-500 font-light text-lg">
              Manual Copy &amp; Paste
            </div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-black text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] opacity-10 object-cover mix-blend-overlay scale-110 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-6xl md:text-[5rem] lg:text-[6rem] tracking-tighter font-medium mb-8 leading-[1.05]">
          Start leading.
          <br/>
<span className="text-slate-500">Stop drafting.</span>
</h2>
<p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Join visionary executives who have reclaimed their time and amplified
          their presence with GhostDraft.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="w-full sm:w-auto bg-white text-black rounded-2xl px-12 py-5 text-lg font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] group">
            Request Priority Access
            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</div>
<div className="mt-10 flex items-center justify-center gap-3 text-sm text-slate-400 font-medium tracking-wide uppercase">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          Currently onboarding from waitlist
        </div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="flex h-5 w-5">
<div className="w-1/2 h-full bg-black rounded-l-full"></div>
<div className="w-1/2 h-full border border-black rounded-r-full border-l-0"></div>
</div>
<span className="font-normal text-lg tracking-tight">
                GhostDraft™
              </span>
</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">
              The autonomous AI ghostwriter built exclusively for the modern
              executive.
            </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-black transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="hover:text-black transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h6 className="font-medium text-sm mb-4">Product</h6>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-black transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                  Security
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h6 className="font-medium text-sm mb-4">Company</h6>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-black transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">Blog</a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h6 className="font-medium text-sm mb-4">Legal</h6>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-black transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">DPA</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-sm text-slate-400">
<p>© 2024 GhostDraft Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
            Systems operational
          </div>
</div>
</div>
</footer>



    </>
  );
}
