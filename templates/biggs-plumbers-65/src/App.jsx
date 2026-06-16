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



    lucide.createIcons({
      attrs: {
        "stroke-width": 1.5
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen overflow-hidden">
<header className="relative border-b border-slate-200/80 bg-white/90 backdrop-blur">
<div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0998d7] via-[#ff8018] to-[#12a85a]"></div>
<div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
<a aria-label="Biggs Plumbers and Electrical home" className="flex items-center gap-3" href="#">
<div className="relative flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-sky-50 ring-1 ring-sky-100">
<div className="absolute -left-6 top-2 h-4 w-24 rotate-[-10deg] bg-sky-100"></div>
<div className="absolute -left-4 top-8 h-4 w-24 rotate-[-10deg] bg-sky-100"></div>
<div className="relative flex items-center">
<i className="h-8 w-8 text-[#0998d7]" data-lucide="wrench"></i>
<span className="-ml-2 h-7 w-3 rounded-full bg-[#ff8018]"></span>
</div>
</div>
<div className="leading-none">
<div className="flex items-start gap-1">
<span className="text-4xl font-extrabold tracking-tight text-[#0998d7] sm:text-5xl">BIGGS</span>
<span className="mt-0.5 h-3 w-3 bg-[#ff8018]"></span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
<span className="text-lg font-extrabold tracking-tight text-[#ff8018] sm:text-xl">PLUMBERS</span>
<span className="text-lg font-extrabold tracking-tight text-[#ff8018] sm:text-xl">&amp;</span>
<span className="text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">ELECTRICAL</span>
</div>
<div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
<span className="text-sm font-extrabold tracking-wide text-[#0998d7] sm:text-base">Leak Detection</span>
<span className="text-sm font-extrabold tracking-wide text-slate-950 sm:text-base">&amp;</span>
<span className="text-sm font-extrabold tracking-wide text-[#12a85a] sm:text-base">Solar Installation</span>
</div>
</div>
</a>
<nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
<a className="text-sm font-medium text-slate-700 transition hover:text-[#0998d7]" href="#services">Services</a>
<a className="text-sm font-medium text-slate-700 transition hover:text-[#0998d7]" href="#areas">Areas</a>
<a className="text-sm font-medium text-slate-700 transition hover:text-[#0998d7]" href="#contact">Contact</a>
</nav>
<a className="hidden rounded-full bg-[#0998d7] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-500/20 transition hover:bg-sky-600 lg:inline-flex" href="#contact">
          Request help
        </a>
</div>
</header>
<main>
<section className="relative bg-white">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl"></div>
<div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-orange-100 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-100 blur-3xl"></div>
</div>
<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-[#0998d7]">
<i className="h-4 w-4" data-lucide="clock-3"></i>
              Emergency plumbing support across the Eastern Cape
            </div>
<h1 className="mt-7 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Reliable plumbing when your home or business needs it most.
            </h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Biggs Plumbers handles emergency callouts, leak detection, water leak repairs, geysers, bathroom plumbing, drains, septic tanks, sewage services and borehole pumps.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0998d7] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600" href="#contact">
                Contact us
                <i className="h-5 w-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50" href="#services">
                View services
                <i className="h-5 w-5" data-lucide="chevron-down"></i>
</a>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#ff8018]">
<i className="h-5 w-5" data-lucide="siren"></i>
</div>
<p className="mt-3 text-base font-semibold text-slate-950">Emergency plumber</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0998d7]">
<i className="h-5 w-5" data-lucide="droplets"></i>
</div>
<p className="mt-3 text-base font-semibold text-slate-950">Leak detection</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#12a85a]">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<p className="mt-3 text-base font-semibold text-slate-950">Trusted repairs</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200 via-white to-orange-200 blur-2xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
<div className="bg-[#0998d7] px-6 py-5">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm font-medium text-sky-100">Service dashboard</p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Fast response team</h2>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
<i className="h-6 w-6" data-lucide="wrench"></i>
</div>
</div>
</div>
<div className="space-y-4 p-6">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0998d7] shadow-sm">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-950">Coverage areas</h3>
<p className="mt-2 text-base leading-7 text-slate-600">
                        Port Elizabeth, Uitenhage, Jeffreys Bay, Grahamstown, Port Alfred and surrounds.
                      </p>
</div>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#ff8018]">
<i className="h-5 w-5" data-lucide="flame"></i>
</div>
<p className="mt-4 text-base font-semibold text-slate-950">Geyser repairs</p>
<p className="mt-2 text-sm leading-6 text-slate-600">Repairs and installations handled with care.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#12a85a]">
<i className="h-5 w-5" data-lucide="waves"></i>
</div>
<p className="mt-4 text-base font-semibold text-slate-950">Drain services</p>
<p className="mt-2 text-sm leading-6 text-slate-600">Bathroom plumbing and blocked drain support.</p>
</div>
</div>
<div className="rounded-2xl bg-slate-950 p-5 text-white">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff8018]">
<i className="h-5 w-5" data-lucide="phone-call"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-300">Need assistance?</p>
<p className="text-lg font-semibold">Send a request and we will respond.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 py-16 sm:py-20" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<p className="text-base font-semibold text-[#0998d7]">What we offer</p>
<h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Complete plumbing services for homes, businesses and sites.
            </h2>
<p className="mt-5 text-lg leading-8 text-slate-600">
              From urgent leaks to planned installations, Biggs Plumbers provides practical support across a wide range of plumbing needs.
            </p>
</div>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#ff8018]">
<i className="h-6 w-6" data-lucide="siren"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Emergency Plumber</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Responsive plumbing support when faults, bursts or urgent issues disrupt your property.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0998d7]">
<i className="h-6 w-6" data-lucide="search-check"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Leak Detection</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Find hidden leaks quickly and accurately before they become costly damage.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0998d7]">
<i className="h-6 w-6" data-lucide="droplet"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Water Leak Repairs</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Professional repairs for visible and hidden water leaks across your plumbing system.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#ff8018]">
<i className="h-6 w-6" data-lucide="flame"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Geyser Repairs &amp; Installation</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Repairs, replacements and new geyser installations completed safely and neatly.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#12a85a]">
<i className="h-6 w-6" data-lucide="bath"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Bathroom Plumbing &amp; Drains</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Bathroom installations, plumbing repairs and drain services for smooth flow.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
<i className="h-6 w-6" data-lucide="truck"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Honey Sucker Sewage Service</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Sewage removal and support for sanitation systems and site requirements.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0998d7]">
<i className="h-6 w-6" data-lucide="wrench"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Plumbing Services</h3>
<p className="mt-3 text-base leading-7 text-slate-600">General maintenance, repairs and installations for residential and commercial clients.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#12a85a]">
<i className="h-6 w-6" data-lucide="database"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Septic Tanks</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Septic tank plumbing support, servicing and practical maintenance guidance.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0998d7]">
<i className="h-6 w-6" data-lucide="gauge"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Borehole Pumps</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Pump plumbing assistance for borehole systems, pressure issues and water supply needs.</p>
</div>
</div>
</div>
</section>
<section className="bg-white py-16 sm:py-20" id="areas">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
<div>
<p className="text-base font-semibold text-[#ff8018]">Service areas</p>
<h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Serving coastal and inland communities across the region.
              </h2>
<p className="mt-5 text-lg leading-8 text-slate-600">
                Biggs Plumbers assists clients across Port Elizabeth, Uitenhage, Jeffreys Bay, Grahamstown, Port Alfred and surrounding areas.
              </p>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#0998d7]" data-lucide="map-pin"></i>
<span className="text-lg font-semibold text-slate-950">Port Elizabeth</span>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#0998d7]" data-lucide="map-pin"></i>
<span className="text-lg font-semibold text-slate-950">Uitenhage</span>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#0998d7]" data-lucide="map-pin"></i>
<span className="text-lg font-semibold text-slate-950">Jeffreys Bay</span>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#0998d7]" data-lucide="map-pin"></i>
<span className="text-lg font-semibold text-slate-950">Grahamstown</span>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#0998d7]" data-lucide="map-pin"></i>
<span className="text-lg font-semibold text-slate-950">Port Alfred</span>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#ff8018]" data-lucide="navigation"></i>
<span className="text-lg font-semibold">Surrounding areas</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative bg-slate-950 py-16 sm:py-20" id="contact">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0998d7]/20 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#ff8018]/20 blur-3xl"></div>
</div>
<div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
<div>
<p className="text-base font-semibold text-[#ff8018]">Contact us</p>
<h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tell us what plumbing help you need.
            </h2>
<p className="mt-5 text-lg leading-8 text-slate-300">
              Send your details and a short description of the issue. The Biggs Plumbers team can assist with urgent callouts, leaks, geysers, drains, septic tanks, borehole pumps and more.
            </p>
<div className="mt-10 space-y-5">
<div className="flex gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#0998d7] ring-1 ring-white/10">
<i className="h-6 w-6" data-lucide="map"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Areas covered</h3>
<p className="mt-1 text-base leading-7 text-slate-300">Port Elizabeth, Uitenhage, Jeffreys Bay, Grahamstown, Port Alfred and surrounds.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#ff8018] ring-1 ring-white/10">
<i className="h-6 w-6" data-lucide="badge-check"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Services available</h3>
<p className="mt-1 text-base leading-7 text-slate-300">Emergency plumbing, leak repairs, geysers, drains, honey sucker sewage service, septic tanks and borehole pumps.</p>
</div>
</div>
</div>
</div>
<form className="rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">
<div className="grid gap-5 sm:grid-cols-2">
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="first-name">First name</label>
<input autocomplete="given-name" className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0998d7] focus:ring-4 focus:ring-sky-100" id="first-name" name="first-name" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="last-name">Last name</label>
<input autocomplete="family-name" className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0998d7] focus:ring-4 focus:ring-sky-100" id="last-name" name="last-name" placeholder="Your surname" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="phone">Phone number</label>
<input autocomplete="tel" className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0998d7] focus:ring-4 focus:ring-sky-100" id="phone" name="phone" placeholder="Your contact number" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="email">Email address</label>
<input autocomplete="email" className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0998d7] focus:ring-4 focus:ring-sky-100" id="email" name="email" placeholder="you@example.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-800" htmlFor="area">Area</label>
<input autocomplete="address-level2" className="mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0998d7] focus:ring-4 focus:ring-sky-100" id="area" name="area" placeholder="Port Elizabeth, Uitenhage, Jeffreys Bay..." type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-800" htmlFor="service">Service needed</label>
<select className="mt-2 block w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-[#0998d7] focus:ring-4 focus:ring-sky-100" id="service" name="service">
<option>Emergency Plumber</option>
<option>Leak Detection</option>
<option>Water Leak Repairs</option>
<option>Geyser Repairs and Installation</option>
<option>Bathroom Plumbing and Drain Services</option>
<option>Honey Sucker Sewage Service</option>
<option>Plumbing Services</option>
<option>Septic Tanks</option>
<option>Borehole Pumps</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-800" htmlFor="message">Message</label>
<textarea className="mt-2 block w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0998d7] focus:ring-4 focus:ring-sky-100" id="message" name="message" placeholder="Tell us what happened and where you need help." rows="5"></textarea>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0998d7] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600" type="submit">
              Send request
              <i className="h-5 w-5" data-lucide="send"></i>
</button>
<p className="mt-4 text-center text-sm leading-6 text-slate-500">
              For urgent plumbing problems, include your area and a brief description so the team can prioritise your request.
            </p>
</form>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
<div>
<p className="text-lg font-extrabold tracking-tight text-[#0998d7]">BIGGS <span className="text-[#ff8018]">PLUMBERS</span> <span className="text-slate-950">&amp; ELECTRICAL</span></p>
<p className="mt-1 text-sm font-semibold tracking-wide text-slate-600">
<span className="text-[#0998d7]">Leak Detection</span> &amp; <span className="text-[#12a85a]">Solar Installation</span>
</p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50" href="#contact">
          Get in touch
          <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</footer>
</div>


    </>
  );
}
