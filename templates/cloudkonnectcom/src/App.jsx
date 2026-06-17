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
      
<header className="sticky top-0 z-50 border-b border-[#2b2b2b]/10 bg-white/85 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
<a aria-label="CloudKonnect home" className="group flex items-center gap-3" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2b2b2b] text-sm font-semibold tracking-tighter text-white shadow-sm">
          CK
        </div>
<div className="leading-none">
<div className="text-sm font-semibold tracking-tight text-[#2b2b2b]">CloudKonnect</div>
<div className="mt-1 text-xs font-medium text-[#2b2b2b]/55">Freedom Business</div>
</div>
</a>
<nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-[#2b2b2b]/70 transition hover:text-[#2b2b2b]" href="#community">Community</a>
<a className="text-sm font-medium text-[#2b2b2b]/70 transition hover:text-[#2b2b2b]" href="#book">Book</a>
<a className="text-sm font-medium text-[#2b2b2b]/70 transition hover:text-[#2b2b2b]" href="#services">Services</a>
<a className="text-sm font-medium text-[#2b2b2b]/70 transition hover:text-[#2b2b2b]" href="#about">About</a>
</nav>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87722] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-[#e87722]/25 transition hover:bg-[#c45e10]" href="https://skool.cloudkonnect.com">
        Join Community
        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</header>
<main>
<section className="relative isolate overflow-hidden bg-white">
<div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(circle at 75% 20%, rgba(232, 119, 34, 0.16), transparent 34%), linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'}}></div>
<div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
<div className="max-w-2xl">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e87722]/20 bg-white px-4 py-2 text-xs font-semibold text-[#c45e10] shadow-sm">
<span className="h-2 w-2 rounded-full bg-[#e87722]"></span>
            For owner-operated businesses
          </div>
<h1 className="text-4xl font-bold tracking-tight text-[#2b2b2b] sm:text-5xl lg:text-6xl">
            You do not own a business.
            <span className="mt-2 block text-[#e87722]">You own a set of obligations that happen to pay you.</span>
</h1>
<p className="mt-6 max-w-xl text-base leading-8 text-[#2b2b2b]/70 sm:text-lg">
            The Freedom Business Flywheel helps owner-dependent businesses systemise, automate and delegate their way toward freedom. The community is where the work gets done.
          </p>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87722] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#e87722]/25 transition hover:-translate-y-0.5 hover:bg-[#c45e10]" href="https://skool.cloudkonnect.com">
              Join the Freedom Business Community
              <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2b2b2b]/15 bg-white px-7 py-4 text-sm font-semibold text-[#2b2b2b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2b2b2b]/25" href="#book">
              Get the First Chapter Free
              <iconify-icon className="text-xl" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
<div className="rounded-3xl border border-[#2b2b2b]/10 bg-white/70 p-4 shadow-sm">
<div className="text-2xl font-semibold tracking-tight">5</div>
<div className="mt-1 text-xs font-medium text-[#2b2b2b]/55">Flywheel sectors</div>
</div>
<div className="rounded-3xl border border-[#2b2b2b]/10 bg-white/70 p-4 shadow-sm">
<div className="text-2xl font-semibold tracking-tight">1</div>
<div className="mt-1 text-xs font-medium text-[#2b2b2b]/55">Owner-free goal</div>
</div>
<div className="rounded-3xl border border-[#2b2b2b]/10 bg-white/70 p-4 shadow-sm">
<div className="text-2xl font-semibold tracking-tight">∞</div>
<div className="mt-1 text-xs font-medium text-[#2b2b2b]/55">Systems built</div>
</div>
</div>
</div>
<div className="relative mx-auto w-full max-w-xl">
<div className="absolute inset-6 rounded-full bg-[#e87722]/20 blur-3xl"></div>
<div className="relative rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-5 shadow-2xl shadow-[#2b2b2b]/10 sm:p-8">
<div className="flex items-center justify-between pb-6">
<div>
<div className="text-xs font-semibold uppercase tracking-[0.22rem] text-[#e87722]">Freedom Business</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-[#2b2b2b]">Flywheel</div>
</div>
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5f5f5] text-[#e87722]">
<iconify-icon className="text-2xl" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="relative aspect-square">
<div className="absolute inset-0 rounded-full border border-[#2b2b2b]/10 bg-[#f5f5f5]"></div>
<div className="absolute inset-[7%] rounded-full" style={{background: 'conic-gradient(from -18deg, #e87722 0deg 72deg, #f09b57 72deg 144deg, #2b2b2b 144deg 216deg, #c45e10 216deg 288deg, #f6c49f 288deg 360deg)'}}></div>
<div className="absolute inset-[18%] rounded-full border border-white/80 bg-white shadow-inner"></div>
<div className="absolute inset-[31%] flex flex-col items-center justify-center rounded-full border border-[#2b2b2b]/10 bg-white text-center shadow-xl shadow-[#2b2b2b]/10">
<iconify-icon className="mb-2 text-4xl text-[#e87722]" icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-lg font-semibold tracking-tight text-[#2b2b2b]">Owner</div>
<div className="text-lg font-semibold tracking-tight text-[#2b2b2b]">Freedom</div>
</div>
<div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2b2b2b] shadow-lg shadow-[#2b2b2b]/10">Systems</div>
<div className="absolute right-3 top-[30%] rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2b2b2b] shadow-lg shadow-[#2b2b2b]/10">Subscriptions</div>
<div className="absolute bottom-[18%] right-[12%] rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2b2b2b] shadow-lg shadow-[#2b2b2b]/10">AI</div>
<div className="absolute bottom-[18%] left-[10%] rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2b2b2b] shadow-lg shadow-[#2b2b2b]/10">Offshore</div>
<div className="absolute left-2 top-[30%] rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2b2b2b] shadow-lg shadow-[#2b2b2b]/10">Partners</div>
</div>
<div className="mt-6 rounded-3xl bg-[#2b2b2b] p-5 text-white">
<p className="text-sm leading-6 text-white/80">
                The goal is not a bigger job. The goal is a business that keeps moving when you are not in the room.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white px-5 py-20 sm:px-6 lg:px-8" id="about">
<div className="mx-auto max-w-5xl">
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
<div>
<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-4 py-2 text-xs font-semibold text-[#2b2b2b]/70">
<iconify-icon className="text-lg text-[#e87722]" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              The problem
            </div>
<h2 className="text-3xl font-bold tracking-tight text-[#2b2b2b] sm:text-4xl">
              Does your business stop when you do?
            </h2>
</div>
<div className="rounded-[2rem] border border-[#2b2b2b]/10 bg-[#f5f5f5] p-8 sm:p-10">
<p className="text-lg leading-8 text-[#2b2b2b]/75">
              If every quote, approval, customer issue and decision still routes through you, you do not own a business.
            </p>
<p className="mt-5 text-2xl font-semibold tracking-tight text-[#2b2b2b]">
              You own a job with overhead.
            </p>
<div className="mt-8 h-px bg-[#2b2b2b]/10"></div>
<p className="mt-8 text-lg leading-8 text-[#2b2b2b]/75">
              The goal is not to work harder. The goal is to build a business that runs without your constant involvement.
            </p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#f5f5f5] px-5 py-20 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="mx-auto max-w-3xl text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#c45e10] shadow-sm">
<iconify-icon className="text-lg" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            The framework
          </div>
<h2 className="text-3xl font-bold tracking-tight text-[#2b2b2b] sm:text-5xl">
            The Freedom Business Flywheel
          </h2>
<p className="mt-5 text-base leading-8 text-[#2b2b2b]/65 sm:text-lg">
            Five compounding sectors that reduce reliance on the owner and increase operational leverage.
          </p>
</div>
<div className="mt-14 grid gap-5 lg:grid-cols-5">
<article className="group rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2b2b2b]/10">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e87722]/10 text-[#e87722]">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#2b2b2b]">Systems</h3>
<p className="mt-4 text-sm leading-6 text-[#2b2b2b]/65">Document the business so it runs on process, not memory.</p>
</article>
<article className="group rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2b2b2b]/10">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e87722]/10 text-[#e87722]">
<iconify-icon className="text-2xl" icon="solar:repeat-one-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#2b2b2b]">Subscriptions</h3>
<p className="mt-4 text-sm leading-6 text-[#2b2b2b]/65">Create predictable recurring revenue.</p>
</article>
<article className="group rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2b2b2b]/10">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b2b2b] text-white">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#2b2b2b]">AI</h3>
<p className="mt-4 text-sm leading-6 text-[#2b2b2b]/65">Scale execution without scaling headcount.</p>
</article>
<article className="group rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2b2b2b]/10">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e87722]/10 text-[#e87722]">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#2b2b2b]">Offshore</h3>
<p className="mt-4 text-sm leading-6 text-[#2b2b2b]/65">Build a profitable delegation engine.</p>
</article>
<article className="group rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2b2b2b]/10">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e87722]/10 text-[#e87722]">
<iconify-icon className="text-2xl" icon="solar:hand-stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#2b2b2b]">Partners</h3>
<p className="mt-4 text-sm leading-6 text-[#2b2b2b]/65">Create referral channels that consistently generate opportunities.</p>
</article>
</div>
<div className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-[#2b2b2b] p-8 text-center shadow-xl shadow-[#2b2b2b]/10">
<p className="text-xl font-semibold tracking-tight text-white">
            Each turn of the flywheel removes another layer of owner dependency.
          </p>
</div>
</div>
</section>
<section className="relative isolate overflow-hidden bg-[#2b2b2b] px-5 py-24 text-white sm:px-6 lg:px-8" id="community">
<div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(circle at 20% 20%, rgba(232,119,34,0.35), transparent 28%), radial-gradient(circle at 80% 80%, rgba(232,119,34,0.22), transparent 32%)'}}></div>
<div className="mx-auto max-w-7xl">
<div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
<div>
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
<iconify-icon className="text-lg text-[#e87722]" icon="solar:people-nearby-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              The centrepiece
            </div>
<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Community Is Where The Work Gets Done
            </h2>
<p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              The Freedom Business Community is where business owners implement the flywheel alongside other owners.
            </p>
<div className="mt-9">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87722] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#e87722]/25 transition hover:-translate-y-0.5 hover:bg-[#c45e10]" href="https://skool.cloudkonnect.com">
                Join the Community
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white p-5 text-[#2b2b2b] shadow-2xl shadow-black/20 sm:p-7">
<div className="rounded-[1.5rem] bg-[#f5f5f5] p-5">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs font-semibold uppercase tracking-[0.22rem] text-[#e87722]">Inside</div>
<h3 className="mt-2 text-2xl font-semibold tracking-tight">Freedom Business Community</h3>
</div>
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e87722] text-white">
<iconify-icon className="text-2xl" icon="solar:chat-round-like-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<div className="flex items-start gap-3 rounded-2xl border border-[#2b2b2b]/10 bg-white p-4">
<iconify-icon className="mt-0.5 text-xl text-[#e87722]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#2b2b2b]/80">Systems training</span>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-[#2b2b2b]/10 bg-white p-4">
<iconify-icon className="mt-0.5 text-xl text-[#e87722]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#2b2b2b]/80">AI implementation</span>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-[#2b2b2b]/10 bg-white p-4">
<iconify-icon className="mt-0.5 text-xl text-[#e87722]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#2b2b2b]/80">Subscription strategies</span>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-[#2b2b2b]/10 bg-white p-4">
<iconify-icon className="mt-0.5 text-xl text-[#e87722]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#2b2b2b]/80">Offshore frameworks</span>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-[#2b2b2b]/10 bg-white p-4">
<iconify-icon className="mt-0.5 text-xl text-[#e87722]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#2b2b2b]/80">Monthly live coaching</span>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-[#2b2b2b]/10 bg-white p-4">
<iconify-icon className="mt-0.5 text-xl text-[#e87722]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#2b2b2b]/80">Templates and SOPs</span>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-[#2b2b2b]/10 bg-white p-4 sm:col-span-2">
<iconify-icon className="mt-0.5 text-xl text-[#e87722]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#2b2b2b]/80">Accountability and support from other owner-operators building the same kind of business</span>
</div>
</div>
<div className="mt-5 rounded-[1.5rem] bg-[#2b2b2b] p-5 text-white">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border-2 border-[#2b2b2b] bg-[#e87722]"></div>
<div className="h-8 w-8 rounded-full border-2 border-[#2b2b2b] bg-white"></div>
<div className="h-8 w-8 rounded-full border-2 border-[#2b2b2b] bg-[#c45e10]"></div>
</div>
<p className="text-sm font-medium text-white/75">Build in public, implement in private, stay accountable every month.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white px-5 py-20 sm:px-6 lg:px-8" id="services">
<div className="mx-auto max-w-7xl">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl font-bold tracking-tight text-[#2b2b2b] sm:text-5xl">
            Three ways to work with us
          </h2>
<p className="mt-5 text-base leading-8 text-[#2b2b2b]/65 sm:text-lg">
            Start with the path that matches where you are today.
          </p>
</div>
<div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.18fr_1fr] lg:items-stretch">
<article className="rounded-[2rem] border border-[#2b2b2b]/10 bg-[#f5f5f5] p-7" id="book">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#e87722] shadow-sm">
<iconify-icon className="text-2xl" icon="solar:notebook-bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#2b2b2b]">Read the Book</h3>
<p className="mt-4 text-sm leading-6 text-[#2b2b2b]/65">Freedom Business Through AI, Systems and Subscriptions.</p>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#2b2b2b]/15 bg-white px-5 py-3 text-sm font-semibold text-[#2b2b2b] transition hover:border-[#e87722]/40 hover:text-[#c45e10]" href="#">
              Get the First Chapter
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="relative rounded-[2rem] bg-[#e87722] p-8 text-white shadow-2xl shadow-[#e87722]/25 lg:-mt-6 lg:mb-6">
<div className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">Recommended</div>
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#e87722] shadow-sm">
<iconify-icon className="text-3xl" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-9 text-3xl font-bold tracking-tight text-white">Join the Community</h3>
<p className="mt-4 text-base leading-7 text-white/85">Recommended starting point for most business owners.</p>
<div className="mt-8 rounded-3xl bg-white/12 p-5">
<p className="text-sm leading-6 text-white/80">
                Implement the flywheel with coaching, templates, accountability and other operators doing the work beside you.
              </p>
</div>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#c45e10] transition hover:-translate-y-0.5" href="https://skool.cloudkonnect.com">
              Join the Community
              <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="rounded-[2rem] border border-[#2b2b2b]/10 bg-[#f5f5f5] p-7">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#e87722] shadow-sm">
<iconify-icon className="text-2xl" icon="solar:case-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#2b2b2b]">Work With Us Directly</h3>
<ul className="mt-5 space-y-3">
<li><a className="flex items-center gap-3 text-sm font-medium text-[#2b2b2b]/70 hover:text-[#c45e10]" href="/it-support"><iconify-icon className="text-lg text-[#e87722]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>IT Support</a></li>
<li><a className="flex items-center gap-3 text-sm font-medium text-[#2b2b2b]/70 hover:text-[#c45e10]" href="/subscription-management"><iconify-icon className="text-lg text-[#e87722]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Subscription Management</a></li>
<li><a className="flex items-center gap-3 text-sm font-medium text-[#2b2b2b]/70 hover:text-[#c45e10]" href="/systems-consulting"><iconify-icon className="text-lg text-[#e87722]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Systems Consulting</a></li>
</ul>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#2b2b2b]/15 bg-white px-5 py-3 text-sm font-semibold text-[#2b2b2b] transition hover:border-[#e87722]/40 hover:text-[#c45e10]" href="#">
              Book a Call
              <iconify-icon className="text-lg" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
</div>
</div>
</section>
<section className="bg-[#f5f5f5] px-5 py-20 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
<div>
<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#c45e10] shadow-sm">
<iconify-icon className="text-lg" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Proof of progress
            </div>
<h2 className="text-3xl font-bold tracking-tight text-[#2b2b2b] sm:text-5xl">
              Outcomes that matter to owner-operators
            </h2>
</div>
<p className="text-base leading-8 text-[#2b2b2b]/65 sm:text-lg">
            Freedom is measured by fewer owner bottlenecks, more recurring revenue, clearer processes and teams that can execute without waiting for permission.
          </p>
</div>
<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
<div className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm">
<div className="text-4xl font-bold tracking-tight text-[#e87722]">↓</div>
<p className="mt-4 text-sm font-semibold text-[#2b2b2b]">Reduced owner involvement</p>
</div>
<div className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm">
<div className="text-4xl font-bold tracking-tight text-[#e87722]">↑</div>
<p className="mt-4 text-sm font-semibold text-[#2b2b2b]">Increased recurring revenue</p>
</div>
<div className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm">
<div className="text-4xl font-bold tracking-tight text-[#e87722]">SOP</div>
<p className="mt-4 text-sm font-semibold text-[#2b2b2b]">Documented critical processes</p>
</div>
<div className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm">
<div className="text-4xl font-bold tracking-tight text-[#e87722]">✓</div>
<p className="mt-4 text-sm font-semibold text-[#2b2b2b]">Successful delegation</p>
</div>
<div className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
<div className="text-4xl font-bold tracking-tight text-[#e87722]">OOO</div>
<p className="mt-4 text-sm font-semibold text-[#2b2b2b]">Extended holidays without disruption</p>
</div>
</div>
<div className="mt-5 grid gap-5 lg:grid-cols-3">
<blockquote className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-7 shadow-sm">
<p className="text-base leading-7 text-[#2b2b2b]/75">“The biggest shift was moving decisions out of my head and into documented systems the team could actually use.”</p>
<footer className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#e87722]/15"></div>
<div>
<div className="text-sm font-semibold">Owner-led service business</div>
<div className="text-xs text-[#2b2b2b]/50">Systems implementation</div>
</div>
</footer>
</blockquote>
<blockquote className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-7 shadow-sm">
<p className="text-base leading-7 text-[#2b2b2b]/75">“Recurring revenue gave us breathing room. The business stopped feeling like every month started from zero.”</p>
<footer className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#2b2b2b]/10"></div>
<div>
<div className="text-sm font-semibold">SMB operator</div>
<div className="text-xs text-[#2b2b2b]/50">Subscription strategy</div>
</div>
</footer>
</blockquote>
<blockquote className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white p-7 shadow-sm">
<p className="text-base leading-7 text-[#2b2b2b]/75">“We finally delegated outcomes, not tasks. That changed everything about how the team performed.”</p>
<footer className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#c45e10]/15"></div>
<div>
<div className="text-sm font-semibold">Founder-managed company</div>
<div className="text-xs text-[#2b2b2b]/50">Offshore delegation</div>
</div>
</footer>
</blockquote>
</div>
</div>
</section>
<section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
<div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#2b2b2b] p-8 text-center shadow-2xl shadow-[#2b2b2b]/15 sm:p-12 lg:p-16" style={{background: 'radial-gradient(circle at 20% 10%, rgba(232, 119, 34, 0.45), transparent 30%), linear-gradient(135deg, #2b2b2b 0%, #1f1f1f 100%)'}}>
<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Build a business that works without you.
        </h2>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Join other business owners building their Freedom Business one system at a time.
        </p>
<div className="mt-9">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e87722] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#e87722]/25 transition hover:-translate-y-0.5 hover:bg-[#c45e10]" href="https://skool.cloudkonnect.com">
            Join the Freedom Business Community
            <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>
</main>
<footer className="border-t border-[#2b2b2b]/10 bg-white px-5 py-10 sm:px-6 lg:px-8">
<div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2b2b2b] text-sm font-semibold tracking-tighter text-white">
          CK
        </div>
<div>
<div className="text-sm font-semibold tracking-tight text-[#2b2b2b]">CloudKonnect</div>
<div className="mt-1 text-xs text-[#2b2b2b]/50">Build a business that works without you.</div>
</div>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-3">
<a className="text-sm font-medium text-[#2b2b2b]/65 hover:text-[#c45e10]" href="https://skool.cloudkonnect.com">Community</a>
<a className="text-sm font-medium text-[#2b2b2b]/65 hover:text-[#c45e10]" href="#book">Book</a>
<a className="text-sm font-medium text-[#2b2b2b]/65 hover:text-[#c45e10]" href="/it-support">IT Support</a>
<a className="text-sm font-medium text-[#2b2b2b]/65 hover:text-[#c45e10]" href="/systems-consulting">Systems Consulting</a>
<a className="text-sm font-medium text-[#2b2b2b]/65 hover:text-[#c45e10]" href="/subscription-management">Subscription Management</a>
</div>
</div>
</footer>

    </>
  );
}
