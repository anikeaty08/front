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



    lucide.createIcons({
      attrs: {
        "stroke-width": 1.5
      }
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
      
<div className="min-h-screen overflow-hidden">
<header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-950/10 bg-[#fbfaf7]/80 backdrop-blur-xl">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
<a aria-label="Wallo Plumbers home" className="group flex items-center gap-3" href="#">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-semibold tracking-tight text-white shadow-lg shadow-zinc-950/10 transition duration-300 group-hover:scale-105 group-hover:bg-[#e7355f]">
            WP
          </div>
<div className="hidden sm:block">
<p className="text-sm font-semibold leading-tight tracking-tight text-zinc-950">Wallo Plumbers</p>
<p className="text-xs text-zinc-500">Reliable plumbing services</p>
</div>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#areas">Areas</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#testimonials">Reviews</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden rounded-full border border-zinc-950/10 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-950/20 hover:shadow-md sm:inline-flex" href="tel:0847090679">
            084 709 0679
          </a>
<a className="inline-flex items-center gap-2 rounded-full bg-[#e7355f] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#e7355f]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d92e56] hover:shadow-xl hover:shadow-[#e7355f]/30" href="tel:0847090679">
<i className="h-4 w-4" data-lucide="phone"></i>
            Call
          </a>
</div>
</nav>
</header>
<main>
<section className="relative pt-28 sm:pt-32 lg:pt-36">
<div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#e7355f]/10 blur-3xl"></div>
<div className="absolute right-0 top-36 -z-10 h-80 w-80 rounded-full bg-[#f3ead8] blur-3xl"></div>
<div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28">
<div className="lg:col-span-7">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-950/10 bg-white/80 px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-950/5 backdrop-blur">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e7355f] opacity-75"></span>
<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e7355f]"></span>
</span>
              Serving Nelson Mandela Bay and Cape Town
            </div>
<h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Get a plumber that gets the job done, once and for all.
            </h1>
<p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600">
              No surprises. We arrive on time, work cleanly, and leave you with professional plumbing that is neat, reliable, and exactly what you paid for.
            </p>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-zinc-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e7355f] hover:shadow-2xl hover:shadow-[#e7355f]/25" href="tel:0847090679">
                Call a Plumber
                <i className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-950/10 bg-white px-6 py-3.5 text-base font-semibold text-zinc-950 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-950/20 hover:shadow-lg" href="https://wa.me/27847090679">
<i className="h-4 w-4 text-[#e7355f]" data-lucide="message-circle"></i>
                WhatsApp Us
              </a>
</div>
<div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
<div className="rounded-3xl border border-zinc-950/10 bg-white p-4 shadow-sm shadow-zinc-950/5">
<p className="text-2xl font-semibold tracking-tight text-zinc-950">5/5</p>
<p className="mt-1 text-sm text-zinc-500">Client rated</p>
</div>
<div className="rounded-3xl border border-zinc-950/10 bg-white p-4 shadow-sm shadow-zinc-950/5">
<p className="text-2xl font-semibold tracking-tight text-zinc-950">On time</p>
<p className="mt-1 text-sm text-zinc-500">Reliable visits</p>
</div>
<div className="rounded-3xl border border-zinc-950/10 bg-white p-4 shadow-sm shadow-zinc-950/5">
<p className="text-2xl font-semibold tracking-tight text-zinc-950">Clean</p>
<p className="mt-1 text-sm text-zinc-500">Neat finish</p>
</div>
</div>
</div>
<div className="relative lg:col-span-5">
<div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#e7355f]/20 via-[#f3ead8] to-transparent blur-2xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-zinc-950/10 bg-white shadow-2xl shadow-zinc-950/10">
<div className="bg-zinc-950 px-5 py-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">Emergency-ready plumbing</p>
<p className="text-xs text-zinc-400">Fast help when you need it</p>
</div>
<div className="rounded-full bg-[#e7355f] p-2 text-white">
<i className="h-5 w-5" data-lucide="wrench"></i>
</div>
</div>
</div>
<div className="bg-[#f3ead8] p-5 sm:p-6">
<div className="rounded-3xl bg-white p-5 shadow-xl shadow-zinc-950/10">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-[#e7355f]/10 p-3 text-[#e7355f]">
<i className="h-6 w-6" data-lucide="droplets"></i>
</div>
<div>
<p className="text-lg font-semibold tracking-tight text-zinc-950">Professional work, clear pricing</p>
<p className="mt-2 text-base leading-7 text-zinc-600">Blocked drains, burst pipes, geyser installations, replacements and bathroom renovations.</p>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-2xl border border-zinc-950/10 bg-[#fbfaf7] p-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#e7355f]" data-lucide="clock-3"></i>
<span className="text-sm font-medium text-zinc-700">Home rate</span>
</div>
<span className="text-sm font-semibold text-zinc-950">R 550/hour</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-zinc-950/10 bg-[#fbfaf7] p-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#e7355f]" data-lucide="map-pin"></i>
<span className="text-sm font-medium text-zinc-700">Call-out fee</span>
</div>
<span className="text-sm font-semibold text-zinc-950">R 250</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-zinc-950/10 bg-[#fbfaf7] p-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#e7355f]" data-lucide="building-2"></i>
<span className="text-sm font-medium text-zinc-700">Business work</span>
</div>
<span className="text-sm font-semibold text-zinc-950">Quoted</span>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-3xl bg-zinc-950 p-5 text-white">
<i className="h-6 w-6 text-[#e7355f]" data-lucide="shield-check"></i>
<p className="mt-4 text-sm font-semibold">Trusted workmanship</p>
</div>
<div className="rounded-3xl bg-white p-5 text-zinc-950 shadow-sm shadow-zinc-950/5">
<i className="h-6 w-6 text-[#e7355f]" data-lucide="sparkles"></i>
<p className="mt-4 text-sm font-semibold">Neat and clean finish</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-zinc-950/10 bg-[#f3ead8] py-6">
<div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
<p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">People that trust us</p>
<div className="grid gap-3 sm:grid-cols-3 lg:w-auto">
<div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-zinc-950/5">
<i className="h-4 w-4 fill-[#e7355f] text-[#e7355f]" data-lucide="star"></i>
<span className="text-sm font-medium text-zinc-700">Home owners</span>
</div>
<div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-zinc-950/5">
<i className="h-4 w-4 fill-[#e7355f] text-[#e7355f]" data-lucide="star"></i>
<span className="text-sm font-medium text-zinc-700">Contractors</span>
</div>
<div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-zinc-950/5">
<i className="h-4 w-4 fill-[#e7355f] text-[#e7355f]" data-lucide="star"></i>
<span className="text-sm font-medium text-zinc-700">Businesses</span>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-24" id="services">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">Work that we do best</p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">We’ve done it all.</h2>
<p className="mt-5 text-xl leading-8 text-zinc-600">From urgent leaks to full bathroom renovations, Wallo Plumbers brings dependable workmanship to every job.</p>
</div>
<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="group rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7355f]/10 text-[#e7355f] transition duration-300 group-hover:bg-[#e7355f] group-hover:text-white">
<i className="h-6 w-6" data-lucide="waves"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">Blocked drains</h3>
<p className="mt-3 text-base leading-7 text-zinc-600">Clear, efficient drain unblocking to get water flowing properly again.</p>
</div>
<div className="group rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7355f]/10 text-[#e7355f] transition duration-300 group-hover:bg-[#e7355f] group-hover:text-white">
<i className="h-6 w-6" data-lucide="circle-alert"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">Burst pipes</h3>
<p className="mt-3 text-base leading-7 text-zinc-600">Quick repairs that reduce damage and restore your plumbing safely.</p>
</div>
<div className="group rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7355f]/10 text-[#e7355f] transition duration-300 group-hover:bg-[#e7355f] group-hover:text-white">
<i className="h-6 w-6" data-lucide="flame"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">Geyser replacements</h3>
<p className="mt-3 text-base leading-7 text-zinc-600">Replace faulty geysers with clean installation and careful finishing.</p>
</div>
<div className="group rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7355f]/10 text-[#e7355f] transition duration-300 group-hover:bg-[#e7355f] group-hover:text-white">
<i className="h-6 w-6" data-lucide="settings"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">New geyser installations</h3>
<p className="mt-3 text-base leading-7 text-zinc-600">Professional setup for new geysers with reliable connections.</p>
</div>
<div className="group rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7355f]/10 text-[#e7355f] transition duration-300 group-hover:bg-[#e7355f] group-hover:text-white">
<i className="h-6 w-6" data-lucide="bath"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">Bathroom renovations</h3>
<p className="mt-3 text-base leading-7 text-zinc-600">Neat bathroom plumbing for upgrades, renovations and remodels.</p>
</div>
<div className="group rounded-[2rem] border border-zinc-950/10 bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-950/10 transition duration-300 hover:-translate-y-1">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
<i className="h-6 w-6" data-lucide="phone-call"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight">Need help today?</h3>
<p className="mt-3 text-base leading-7 text-zinc-300">Call now and speak directly to a plumber you can trust.</p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e7355f]" href="tel:0847090679">
                Call 084 709 0679
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>
<section className="bg-zinc-950 py-20 text-white sm:py-24" id="testimonials">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">Reviews</p>
<h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">People trust us because the work speaks for itself.</h2>
</div>
<a className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-[#f3ead8]" href="tel:0847090679">
              Call a Plumber
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-12 grid gap-4 lg:grid-cols-3">
<article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
<div className="flex gap-1 text-[#e7355f]">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-5 text-lg leading-8 text-zinc-200">“He was very professional, reliable, trustworthy, and the price was affordable. I was happy with the work that he presented to me.”</p>
<div className="mt-6 flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7355f] text-sm font-semibold">L</div>
<div>
<p className="text-sm font-semibold">Luyanda</p>
<p className="text-xs text-zinc-400">Home Owner</p>
</div>
</div>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
<div className="flex gap-1 text-[#e7355f]">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-5 text-lg leading-8 text-zinc-200">“Walter is my go-to man whenever I have plumbing work that needs to be done. He is reliable, and the work is of good quality.”</p>
<div className="mt-6 flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7355f] text-sm font-semibold">J</div>
<div>
<p className="text-sm font-semibold">James</p>
<p className="text-xs text-zinc-400">Building Contractor</p>
</div>
</div>
</article>
<article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
<div className="flex gap-1 text-[#e7355f]">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-5 text-lg leading-8 text-zinc-200">“He is always on time, and he delivers exactly what the client wants. I can gladly say he is a good plumber.”</p>
<div className="mt-6 flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7355f] text-sm font-semibold">G</div>
<div>
<p className="text-sm font-semibold">Gert</p>
<p className="text-xs text-zinc-400">Building Contractor</p>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="py-20 sm:py-24" id="areas">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">Service areas</p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Local plumbing, expanding fast.</h2>
<p className="mt-5 text-xl leading-8 text-zinc-600">We service the entire Nelson Mandela Bay area in South Africa and have expanded to Cape Town.</p>
</div>
<div className="grid gap-4 lg:col-span-7">
<div className="rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-sm shadow-zinc-950/5">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-[#e7355f]/10 p-3 text-[#e7355f]">
<i className="h-6 w-6" data-lucide="map"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-950">Nelson Mandela Bay</h3>
<p className="text-base text-zinc-500">And we’re still expanding.</p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Port Elizabeth</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Summerstrand</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Swartkops</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Bethelsdorp</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Despatch</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Clarendon Marine</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">KwaNobuhle</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Uitenhage</span>
<span className="rounded-full bg-[#f3ead8] px-3 py-1.5 text-sm font-medium text-zinc-700">Motherwell</span>
</div>
</div>
<div className="rounded-[2rem] border border-zinc-950/10 bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-950/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/10 p-3 text-[#e7355f]">
<i className="h-6 w-6" data-lucide="navigation"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Cape Town</h3>
<p className="text-base text-zinc-400">More areas coming soon.</p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white">Goodwood</span>
<span className="rounded-full bg-[#e7355f]/20 px-3 py-1.5 text-sm font-medium text-[#ff9ab0]">More areas coming soon</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#f3ead8] py-20 sm:py-24" id="pricing">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">Pricing</p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Clear pricing before the work begins.</h2>
<p className="mt-5 text-xl leading-8 text-zinc-600">Get straightforward pricing for home plumbing and quoted project work for businesses.</p>
</div>
<div className="mt-14 grid gap-5 lg:grid-cols-2">
<div className="rounded-[2rem] border border-zinc-950/10 bg-white p-6 shadow-xl shadow-zinc-950/10 sm:p-8">
<div className="flex items-start justify-between gap-6">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">For your home</p>
<div className="mt-5 flex items-end gap-2">
<span className="text-5xl font-semibold tracking-tight text-zinc-950">R 550</span>
<span className="pb-2 text-base font-medium text-zinc-500">per hour</span>
</div>
<p className="mt-2 text-base text-zinc-500">R 250 call-out fee</p>
</div>
<div className="rounded-2xl bg-[#e7355f]/10 p-3 text-[#e7355f]">
<i className="h-7 w-7" data-lucide="home"></i>
</div>
</div>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#e7355f]" href="tel:0847090679">
                Call a Plumber
                <i className="h-4 w-4" data-lucide="phone"></i>
</a>
<div className="mt-8 border-t border-zinc-950/10 pt-6">
<p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Estimates</p>
<ul className="mt-4 space-y-3 text-base text-zinc-700">
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>Blocked drains: ~1 hour</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>Burst pipes: ~4–5 hours</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>Geyser replacement: ~3 hours</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>New geyser installation: ~4 hours</li>
</ul>
</div>
</div>
<div className="rounded-[2rem] border border-zinc-950/10 bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-950/10 sm:p-8">
<div className="flex items-start justify-between gap-6">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">For your business</p>
<div className="mt-5 flex items-end gap-2">
<span className="text-5xl font-semibold tracking-tight">Quoted</span>
</div>
<p className="mt-2 text-base text-zinc-400">Per project</p>
</div>
<div className="rounded-2xl bg-white/10 p-3 text-[#e7355f]">
<i className="h-7 w-7" data-lucide="briefcase-business"></i>
</div>
</div>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-base font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-[#f3ead8]" href="tel:0847090679">
                Call a Plumber
                <i className="h-4 w-4" data-lucide="phone"></i>
</a>
<div className="mt-8 border-t border-white/10 pt-6">
<p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Best for</p>
<ul className="mt-4 space-y-3 text-base text-zinc-300">
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>Contractor plumbing support</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>Commercial maintenance</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>Renovation project plumbing</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-[#e7355f]" data-lucide="check"></i>Custom scope and scheduling</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-24">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">Our latest projects</p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Clean work. Solid results.</h2>
</div>
<p className="max-w-xl text-xl leading-8 text-zinc-600">Every project is handled with care, respect for your space, and attention to the details that make plumbing last.</p>
</div>
<div className="mt-12 grid gap-4 md:grid-cols-3">
<div className="group relative min-h-80 overflow-hidden rounded-[2rem] bg-zinc-950 p-6 shadow-xl shadow-zinc-950/10">
<div className="absolute inset-0 bg-gradient-to-br from-[#e7355f]/40 via-transparent to-[#f3ead8]/20 opacity-80 transition duration-500 group-hover:scale-105"></div>
<div className="relative flex h-full flex-col justify-between">
<i className="h-8 w-8 text-white" data-lucide="flame"></i>
<div>
<p className="text-sm font-medium text-[#ff9ab0]">Geyser work</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Replacements and installations</h3>
</div>
</div>
</div>
<div className="group relative min-h-80 overflow-hidden rounded-[2rem] bg-[#f3ead8] p-6 shadow-xl shadow-zinc-950/10">
<div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#e7355f]/20 transition duration-500 group-hover:scale-105"></div>
<div className="relative flex h-full flex-col justify-between">
<i className="h-8 w-8 text-[#e7355f]" data-lucide="bath"></i>
<div>
<p className="text-sm font-medium text-[#e7355f]">Renovations</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">Bathroom plumbing upgrades</h3>
</div>
</div>
</div>
<div className="group relative min-h-80 overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl shadow-zinc-950/10 ring-1 ring-zinc-950/10">
<div className="absolute inset-0 bg-gradient-to-br from-[#e7355f]/10 via-transparent to-zinc-950/10 transition duration-500 group-hover:scale-105"></div>
<div className="relative flex h-full flex-col justify-between">
<i className="h-8 w-8 text-[#e7355f]" data-lucide="waves"></i>
<div>
<p className="text-sm font-medium text-[#e7355f]">Drainage</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">Blocked drains cleared</h3>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8" id="contact">
<div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-zinc-950 shadow-2xl shadow-zinc-950/20">
<div className="grid lg:grid-cols-2">
<div className="p-7 sm:p-10 lg:p-12">
<p className="text-sm font-semibold uppercase tracking-widest text-[#e7355f]">Contact us</p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Get a plumber you can trust.</h2>
<p className="mt-5 text-xl leading-8 text-zinc-300">Call, WhatsApp or email Wallo Plumbers for reliable service and honest workmanship.</p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e7355f] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#e7355f]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d92e56]" href="tel:0847090679">
<i className="h-4 w-4" data-lucide="phone"></i>
                  Call a Plumber
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-[#f3ead8]" href="mailto:walter@walloplumbers.co.za">
<i className="h-4 w-4" data-lucide="mail"></i>
                  Email us
                </a>
</div>
</div>
<div className="bg-[#f3ead8] p-7 sm:p-10 lg:p-12">
<div className="space-y-4">
<a className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg" href="tel:0847090679">
<div className="rounded-2xl bg-[#e7355f]/10 p-3 text-[#e7355f]">
<i className="h-5 w-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-500">Call</p>
<p className="text-lg font-semibold tracking-tight text-zinc-950">084 709 0679</p>
</div>
</a>
<a className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg" href="https://wa.me/27847090679">
<div className="rounded-2xl bg-[#e7355f]/10 p-3 text-[#e7355f]">
<i className="h-5 w-5" data-lucide="message-circle"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-500">WhatsApp</p>
<p className="text-lg font-semibold tracking-tight text-zinc-950">084 709 0679</p>
</div>
</a>
<a className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm shadow-zinc-950/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg" href="mailto:walter@walloplumbers.co.za">
<div className="rounded-2xl bg-[#e7355f]/10 p-3 text-[#e7355f]">
<i className="h-5 w-5" data-lucide="mail"></i>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-zinc-500">Email</p>
<p className="truncate text-lg font-semibold tracking-tight text-zinc-950">walter@walloplumbers.co.za</p>
</div>
</a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-950/10 bg-[#fbfaf7]">
<div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-semibold text-white">WP</div>
<div>
<p className="text-sm font-semibold text-zinc-950">Wallo Plumbers</p>
<p className="text-xs text-zinc-500">© 2020 All rights reserved.</p>
</div>
</div>
<p className="text-sm text-zinc-500">Made with love by RS Web Solutions Idea 💡</p>
</div>
</footer>
</div>


    </>
  );
}
