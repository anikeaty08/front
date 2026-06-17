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



      document.addEventListener("DOMContentLoaded", function () {
          const revealItems = document.querySelectorAll(".reveal");
          const observer = new IntersectionObserver(
              function (entries) {
                  entries.forEach(function (entry) {
                      if (entry.isIntersecting) {
                          entry.target.style.opacity = "1";
                          entry.target.style.transform = "translateY(0)";
                          entry.target.style.filter = "blur(0)";
                          observer.unobserve(entry.target);
                      }
                  });
              },
              { threshold: 0.1 }
          );

          revealItems.forEach(function (item) {
              observer.observe(item);
          });
      });
    


      (function() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 80) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }, { passive: true });
      })();
    
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
      
<header className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 px-6 py-3 header-pill glass-panel" style={{'--panel-radius': '9999px'}}>
<nav className="flex transition-all duration-500 max-w-5xl mx-auto items-center justify-between" style={{}}>
<a aria-label="Donovan Apps home" className="group flex items-center gap-3" href="#hero">
<span className="text-base tracking-tighter text-[#F2F0EB] font-medium uppercase">
            DONOVAN
          </span>
</a>
<div className="hidden items-center gap-8 text-xs font-normal uppercase tracking-widest text-[#A8A29E] md:flex hide-on-scroll transition-all duration-500">
<a className="transition-colors duration-300 hover:text-[#F2F0EB]" href="#thesis">
            Thesis
          </a>
<a className="transition-colors duration-300 hover:text-[#F2F0EB]" href="#process">
            Process
          </a>
<a className="transition-colors duration-300 hover:text-[#F2F0EB]" href="#fit">
            Fit
          </a>
<a className="transition-colors duration-300 hover:text-[#F2F0EB]" href="#offer">
            Offer
          </a>
</div>
<a className="group hidden md:flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium text-[#F2F0EB] transition-all duration-500 hover:scale-[1.03] hide-on-scroll bg-gradient-to-b from-blue-500/10 via-blue-500/20 to-blue-500/10" href="#apply" style={{boxShadow: '0 18px 35px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(59, 130, 246, 0.8), rgba(0, 0, 0, 0.4), rgba(59, 130, 246, 0.8))', '--border-radius-before': '9999px'}}>
          Apply to build
          <iconify-icon aria-hidden="true" className="text-sm transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a aria-label="Apply" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F2F0EB]/10 text-[#F2F0EB] transition-all duration-500 hover:scale-105 hover:bg-[#1C1917] md:hidden hide-on-scroll" href="#apply">
<iconify-icon aria-hidden="true" className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</a>
</nav>
</header>
<main className="relative z-10">
<section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-4 pb-12 pt-32 text-[#F2F0EB] sm:px-6 lg:px-12" id="hero">
<div className="absolute inset-0 opacity-40">
<video aria-label="Abstract code environment" className="h-full w-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/888350e7-324c-4318-a356-ff129608b385_1600w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779167002223-99fabe3c-2225-4a08-9265-d8237a7d41a5.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]"></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(242,240,235,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,240,235,0.04) 1px, transparent 1px)', backgroundSize: '4rem 4rem', animation: 'grid-pan 15s linear infinite'}}></div>
</div>
<div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
<div className="reveal flex w-full flex-col items-center text-center" style={{opacity: '0', transform: 'translateY(2rem)', filter: 'blur(0.5rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)'}}>
<div className="mb-8 flex flex-wrap items-center gap-3 justify-center">
<span className="border-gradient relative rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-[#F2F0EB]/80 backdrop-blur-xl">
                Now accepting clients
              </span>
</div>
<h1 className="max-w-4xl text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl font-normal">
              Turn your audience into an app business.
            </h1>
<div className="mt-8 grid gap-6 border-t border-[#F2F0EB]/10 pt-8 md:grid-cols-1 mx-auto w-full max-w-3xl">
<p className="text-lg leading-relaxed text-[#F2F0EB]/70 max-w-2xl font-light mx-auto">
                Donovan Apps builds paid web and mobile products for creators
                who already have trust, distribution, and a clear audience
                problem.
              </p>
<div className="flex flex-col gap-4 sm:flex-row mt-4 justify-center">
<div className="btn-wrapper">
<a aria-label="Apply for a build sprint" className="btn px-6 py-4 focus:outline-none" href="#apply" title="Apply for a build sprint">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">A</span>
<span className="btn-letter">P</span>
<span className="btn-letter">P</span>
<span className="btn-letter">L</span>
<span className="btn-letter">Y</span>
<span className="space-char"></span>
<span className="btn-letter">F</span>
<span className="btn-letter">O</span>
<span className="btn-letter">R</span>
<span className="space-char"></span>
<span className="btn-letter">A</span>
<span className="space-char"></span>
<span className="btn-letter">B</span>
<span className="btn-letter">U</span>
<span className="btn-letter">I</span>
<span className="btn-letter">L</span>
<span className="btn-letter">D</span>
<span className="space-char"></span>
<span className="btn-letter">S</span>
<span className="btn-letter">P</span>
<span className="btn-letter">R</span>
<span className="btn-letter">I</span>
<span className="btn-letter">N</span>
<span className="btn-letter">T</span>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#0A0A0A] px-4 py-24 sm:px-6 md:py-32 lg:px-12 border-t border-[#F2F0EB]/5" id="credibility">
<div className="mx-auto max-w-3xl">
<div className="reveal p-4 transition-all duration-700 hover:-translate-y-2 glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', '--panel-radius': '24px', '--highlight': '#22c55e'}}>
<div className="rounded-2xl p-6 text-[#F2F0EB] sm:p-10 bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '1rem'}}>
<div className="flex flex-col sm:flex-row items-start justify-between gap-6">
<div>
<p className="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
                    Founder Credibility
                  </p>
<p className="mt-3 text-2xl tracking-tight font-normal leading-snug sm:text-3xl">
                    Built by a founder who has generated six figures from
                    software as a teenager.
                  </p>
</div>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[#F2F0EB] bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<iconify-icon aria-hidden="true" className="text-3xl" icon="solar:user-circle-linear"></iconify-icon>
</span>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2">
<div className="flex flex-col gap-4 rounded-2xl border border-[#F2F0EB]/5 bg-[#050505]/55 p-6" style={{background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(255,255,255,0.04))'}}>
<span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<iconify-icon aria-hidden="true" className="text-2xl text-[#F2F0EB]" icon="solar:magnifer-linear"></iconify-icon>
</span>
<div>
<p className="text-base font-medium">Audience Insight</p>
<p className="text-sm text-[#A8A29E] mt-1">
                      Knows how creators build trust.
                    </p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-2xl border border-[#F2F0EB]/5 bg-[#050505]/55 p-6" style={{background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(255,255,255,0.04))'}}>
<span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<iconify-icon aria-hidden="true" className="text-2xl text-[#F2F0EB]" icon="solar:code-square-linear"></iconify-icon>
</span>
<div>
<p className="text-base font-medium">AI-Native Execution</p>
<p className="text-sm text-[#A8A29E] mt-1">
                      Compresses time and cost of building.
                    </p>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 text-center">
<div className="rounded-2xl p-6 bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '1rem'}}>
<p className="text-xl tracking-tight font-medium">Zach Donovan</p>
<p className="mt-1 text-sm text-[#F2F0EB]/45">
                  Lead Engineer &amp; Strategist
                </p>
</div>
<div className="rounded-2xl p-6 bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '1rem'}}>
<p className="text-xl tracking-tight font-medium">Product Focus</p>
<p className="mt-1 text-sm text-[#F2F0EB]/45">Audience to Asset</p>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-12 bg-[#0A0A0A]" id="thesis">
<div className="mx-auto max-w-7xl">
<div className="reveal mb-16 grid gap-10 border-b border-[#1C1917] pb-12 lg:grid-cols-12" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)'}}>
<div className="lg:col-span-4">
<p className="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
                // The Core Thesis
              </p>
</div>
<div className="lg:col-span-8">
<h2 className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl font-normal">
                Creators should not only monetize through courses, coaching, or
                sponsorships.
              </h2>
<p className="mt-6 text-lg leading-relaxed text-[#A8A29E]">
                The highest-leverage creators can turn their trust, niche
                expertise, and repeated audience problems into software products
                their audience pays for.
              </p>
</div>
</div>
<div className="grid gap-4 md:grid-cols-3">
<article className="reveal group p-8 transition-all duration-700 hover:-translate-y-2 glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', '--panel-radius': '24px', '--highlight': '#3b82f6'}}>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full text-[#F2F0EB] bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<iconify-icon aria-hidden="true" className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium">
                You have the distribution
              </h3>
<p className="mt-4 text-sm leading-relaxed text-[#A8A29E]">
                You have an audience with repeated problems, niche taste, and
                the ability to launch. We do not need to create demand from
                zero.
              </p>
</article>
<article className="reveal group p-8 transition-all duration-700 hover:-translate-y-2 glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '100ms', '--panel-radius': '24px', '--highlight': '#ef4444'}}>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full text-[#F2F0EB] bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<iconify-icon aria-hidden="true" className="text-2xl" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium">
                We fill the technical gap
              </h3>
<p className="mt-4 text-sm leading-relaxed text-[#A8A29E]">
                You lack product strategy, AI-native development workflows,
                software design taste, and knowledge of databases and auth. We
                handle all of it.
              </p>
</article>
<article className="reveal group p-8 transition-all duration-700 hover:-translate-y-2 glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '200ms', '--panel-radius': '24px', '--highlight': '#22c55e'}}>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full text-[#F2F0EB] bg-gradient-to-b from-black/10 via-black/20 to-black/10" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<iconify-icon aria-hidden="true" className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium">
                Build a real asset
              </h3>
<p className="mt-4 text-sm leading-relaxed text-[#A8A29E]">
                Transition from trading time for money to owning a scalable
                software asset that solves a focused pain point for your
                community.
              </p>
</article>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#050505] px-4 py-24 sm:px-6 md:py-32 lg:px-12 border-t border-[#F2F0EB]/5" id="process">
<div className="mx-auto max-w-7xl" style={{'--highlight': 'rgba(242,240,235,0.9)'}}>
<div className="reveal mx-auto mb-20 max-w-2xl text-center" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)'}}>
<p className="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
              // The Blueprint
            </p>
<h2 className="mt-4 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl font-normal">
              Our structured launch process.
            </h2>
</div>
<div className="relative grid gap-8 md:grid-cols-4">
<div className="absolute top-1/2 left-0 right-0 hidden h-[1px] bg-gradient-to-r from-transparent via-[#F2F0EB]/10 to-transparent md:block -translate-y-1/2"></div>
<div className="reveal relative z-10 flex flex-col items-center text-center" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)'}}>
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-black/10 via-black/20 to-black/10 text-[#F2F0EB]" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<span className="text-xs font-medium uppercase tracking-widest">
                  01
                </span>
</div>
<h3 className="text-xl tracking-tight font-medium">
                Audience App Map
              </h3>
<p className="mt-3 text-sm leading-relaxed text-[#A8A29E]">
                Study your audience, comments, and offers. Identify the software
                product with the clearest demand.
              </p>
</div>
<div className="reveal relative z-10 flex flex-col items-center text-center" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '100ms'}}>
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-black/10 via-black/20 to-black/10 text-[#F2F0EB]" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<span className="text-xs font-medium uppercase tracking-widest">
                  02
                </span>
</div>
<h3 className="text-xl tracking-tight font-medium">Build Sprint</h3>
<p className="mt-3 text-sm leading-relaxed text-[#A8A29E]">
                Scope the smallest paid app. Build the MVP quickly with our
                fixed AI-native technical stack.
              </p>
</div>
<div className="reveal relative z-10 flex flex-col items-center text-center" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '200ms'}}>
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-black/10 via-black/20 to-black/10 text-[#F2F0EB]" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<span className="text-xs font-medium uppercase tracking-widest">
                  03
                </span>
</div>
<h3 className="text-xl tracking-tight font-medium">Launch</h3>
<p className="mt-3 text-sm leading-relaxed text-[#A8A29E]">
                You promote the product. We support the launch technically and
                help interpret initial data.
              </p>
</div>
<div className="reveal relative z-10 flex flex-col items-center text-center" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '300ms'}}>
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-black/10 via-black/20 to-black/10 text-[#F2F0EB]" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}}>
<span className="text-xs font-medium uppercase tracking-widest">
                  04
                </span>
</div>
<h3 className="text-xl tracking-tight font-medium">
                Iterate or Partner
              </h3>
<p className="mt-3 text-sm leading-relaxed text-[#A8A29E]">
                Continue improving the product, maintain the foundation, or
                explore deeper partnership structures.
              </p>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#0A0A0A] px-4 py-24 sm:px-6 md:py-32 lg:px-12" id="fit">
<div className="mx-auto max-w-7xl">
<div className="reveal mb-16 text-center" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)'}}>
<h2 className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl font-normal">
              We don't build random app ideas.
            </h2>
<p className="mt-4 text-lg text-[#A8A29E]">
              We build audience-backed software.
            </p>
</div>
<div className="grid gap-6 md:grid-cols-2">
<div className="reveal p-8 sm:p-10 glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', '--panel-radius': '32px', '--highlight': '#22c55e'}}>
<div className="mb-6 flex items-center gap-3 text-white">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10" style={{background: 'rgba(34,197,94,0.14)'}}>
<iconify-icon aria-hidden="true" className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</span>
<h3 className="text-xl tracking-tight font-medium">
                  Good-fit clients
                </h3>
</div>
<ul className="space-y-4 text-sm text-[#A8A29E]">
<li className="flex items-start gap-3">
<span className="mt-0.5 text-[#F2F0EB]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</span>
                  Already have an audience, customers, or niche trust.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 text-[#F2F0EB]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</span>
                  Have identified repeated audience pain points.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 text-[#F2F0EB]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</span>
                  Can effectively promote the app when it launches.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 text-[#F2F0EB]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</span>
                  Understand that the first version should be highly focused.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 text-[#F2F0EB]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</span>
                  Want a product partner, not just a cheap developer.
                </li>
</ul>
</div>
<div className="reveal p-8 sm:p-10 opacity-70 glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '150ms', '--panel-radius': '32px', '--highlight': '#ef4444'}}>
<div className="mb-6 flex items-center gap-3 text-[#A8A29E]">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1917]" style={{background: 'rgba(239,68,68,0.14)'}}>
<iconify-icon aria-hidden="true" className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</span>
<h3 className="text-xl tracking-tight font-medium">
                  Bad-fit clients
                </h3>
</div>
<ul className="space-y-4 text-sm text-[#A8A29E]/70">
<li className="flex items-start gap-3">
<span className="mt-0.5">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</span>
                  Beginners with no audience or distribution.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</span>
                  No clear niche or undefined target user.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</span>
                  Want a massive, complex app before selling anything.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</span>
                  Just want cheap code or a traditional dev shop.
                </li>
<li className="flex items-start gap-3">
<span className="mt-0.5">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</span>
                  Expect us to create market demand from zero.
                </li>
</ul>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#050505] px-4 py-24 text-[#F2F0EB] sm:px-6 md:py-32 lg:px-12 border-y border-[#F2F0EB]/5" id="offer">
<div className="relative mx-auto max-w-4xl text-center">
<div className="reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)'}}>
<p className="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
              // The Primary Offer
            </p>
<h2 className="mt-4 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl font-normal">
              A focused launch sprint to build your first paid product.
            </h2>
<p className="mt-6 text-lg text-[#A8A29E] max-w-2xl mx-auto">
              Everything you need to go from an audience problem to a launched,
              monetizable software asset. No bloat, just execution.
            </p>
</div>
<div className="reveal mt-12 p-8 text-left glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '100ms', '--panel-radius': '32px'}}>
<div className="grid gap-8 md:grid-cols-2">
<div>
<h3 className="text-lg font-medium text-white mb-6 border-b border-[#F2F0EB]/10 pb-4">
                  Strategy &amp; Design
                </h3>
<ul className="space-y-4 text-sm text-[#A8A29E]">
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    Audience and offer research
                  </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    Product strategy &amp; validation
                  </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    Feature scoping for MVP
                  </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    Premium UX/UI design
                  </li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-6 border-b border-[#F2F0EB]/10 pb-4">
                  Engineering &amp; Launch
                </h3>
<ul className="space-y-4 text-sm text-[#A8A29E]">
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    Web or mobile app development
                  </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    Payments, auth, and database setup
                  </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    AI feature implementation (if useful)
                  </li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-lg text-[#F2F0EB]" icon="solar:check-circle-linear"></iconify-icon>
                    Launch page &amp; analytics setup
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-12 bg-[#0A0A0A]" id="apply">
<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
<div className="reveal lg:col-span-5" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)'}}>
<p className="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
              // Application
            </p>
<h2 className="mt-4 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl font-normal">
              Apply for a Build Sprint.
            </h2>
<p className="mt-6 text-lg leading-relaxed text-[#A8A29E]">
              We review every application. If there is a strong fit between your
              audience and our technical execution, we will schedule a strategy
              call.
            </p>
<div className="mt-10 space-y-4 border-t border-[#F2F0EB]/10 pt-8">
<p className="text-sm text-[#F2F0EB]/70">
<strong>Note:</strong>
                We are highly selective to ensure we only build products that
                have a high probability of generating revenue for our partners.
              </p>
</div>
</div>
<form className="reveal p-6 lg:col-span-7 md:p-10 glass-panel" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 1s cubic-bezier(0.2,0.6,0.2,1)', transitionDelay: '150ms', '--panel-radius': '32px', '--highlight': '#3b82f6'}}>
<div className="grid gap-6 sm:grid-cols-2">
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
                  Name
                </span>
<input className="w-full rounded-xl border border-[#F2F0EB]/10 bg-[#050505]/70 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-[#A8A29E]/50 focus:border-[#F2F0EB]/30 focus:bg-[#050505]" placeholder="Your name" type="text"/>
</label>
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
                  Email
                </span>
<input className="w-full rounded-xl border border-[#F2F0EB]/10 bg-[#050505]/70 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-[#A8A29E]/50 focus:border-[#F2F0EB]/30 focus:bg-[#050505]" placeholder="you@domain.com" type="email"/>
</label>
</div>
<div className="mt-6 grid gap-6 sm:grid-cols-2">
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
                  Main Social/Platform Link
                </span>
<input className="w-full rounded-xl border border-[#F2F0EB]/10 bg-[#050505]/70 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-[#A8A29E]/50 focus:border-[#F2F0EB]/30 focus:bg-[#050505]" placeholder="twitter.com/yourhandle" type="url"/>
</label>
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
                  Audience Size
                </span>
<select className="w-full appearance-none rounded-xl border border-[#F2F0EB]/10 bg-[#050505]/70 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#F2F0EB]/30 focus:bg-[#050505] text-[#F2F0EB]/90">
<option disabled="" selected="" value="">
                    Select an estimate
                  </option>
<option>1k - 10k</option>
<option>10k - 50k</option>
<option>50k - 200k</option>
<option>200k+</option>
</select>
</label>
</div>
<label className="mt-6 block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#A8A29E]">
                What repeated problem does your audience have?
              </span>
<textarea className="w-full resize-none rounded-xl border border-[#F2F0EB]/10 bg-[#050505]/70 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-[#A8A29E]/50 focus:border-[#F2F0EB]/30 focus:bg-[#050505]" placeholder="Briefly describe the pain point or the app idea..." rows="4"></textarea>
</label>
<button className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-all duration-500 hover:scale-[1.01] bg-gradient-to-b from-black/10 via-black/20 to-black/10 text-[#F2F0EB]" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px'}} type="button">
              Submit Application
              <iconify-icon aria-hidden="true" className="text-lg transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</form>
</div>
</section>
</main>
<footer className="relative z-10 bg-[#050505] px-4 pb-8 pt-16 text-[#F2F0EB] sm:px-6 lg:px-12 border-t border-[#F2F0EB]/10">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#A8A29E]">
<div className="flex items-center gap-3">
<span className="text-lg tracking-tighter text-[#F2F0EB] font-medium uppercase">
              DONOVAN
            </span>
</div>
<p className="text-xs">© 2024 Donovan Apps. All rights reserved.</p>
<div className="flex gap-6 text-xs uppercase tracking-widest">
<a className="transition-colors duration-300 hover:text-white" href="#">
              Twitter
            </a>
<a className="transition-colors duration-300 hover:text-white" href="#">
              Contact
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
