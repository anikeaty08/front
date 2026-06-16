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
        'stroke-width': 1.5
      }
    });
  


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
      
<div className="min-h-screen">
<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
<i className="h-5 w-5" data-lucide="building-2"></i>
</div>
<div className="">
<div className="text-lg font-semibold tracking-tight text-slate-900">Prime Property Care</div>
<div className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Full-Service Maintenance</div>
</div>
</a>
<nav className="hidden items-center gap-8 lg:flex">
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#why-us">Why Us</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#contact">Contact</a>
</nav>
<div className="hidden items-center gap-4 sm:flex">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900" href="tel:+14014337663">
<i className="h-4 w-4 text-orange-500" data-lucide="phone"></i>
<span className="">(401) 433-7663</span>
</a>
<a className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600" href="#contact">
            Get a Quote
          </a>
</div>
<button className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</header>
<main className="">
<section className="relative overflow-hidden bg-slate-950">
<div className="absolute inset-0">
<img alt="Property maintenance professional working on a residential repair project" className="h-full w-full object-cover opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-br from-[#002e7a] via-slate-900/85 to-slate-900/55 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="grid sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8 lg:py-24 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/19a95dae-4e31-4252-8c35-55ba0d2d41d2/1600w.png)] max-w-7xl bg-cover mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative gap-x-12 gap-y-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
    Emergency Maintenance Available
  </div>
<h1 className="leading-tight sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight max-w-4xl mt-6">
    Complete Property Maintenance — Done Right, On Time, Every Time.
  </h1>
<p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-slate-300 sm:text-xl">
    From turnovers to repairs, we handle everything so you don’t have to.
  </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600" href="#contact">
      Get a Free Quote
    </a>
<a className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10" href="#contact">
      Schedule Service
    </a>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white">
<i className="h-4 w-4 text-emerald-400" data-lucide="shield-check"></i>
      Reliable
    </div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white">
<i className="h-4 w-4 text-orange-400" data-lucide="timer-reset"></i>
      Fast Response
    </div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white">
<i className="h-4 w-4 text-sky-400" data-lucide="briefcase-business"></i>
      Full-Service Team
    </div>
</div>
<div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">24 hrs</div>
<div className="mt-1 text-sm font-medium text-slate-300">Response time on quote requests</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">One Team</div>
<div className="mt-1 text-sm font-medium text-slate-300">For repairs, turnovers, cleaning, and more</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">Move-In Ready</div>
<div className="mt-1 text-sm font-medium text-slate-300">Fast apartment turnover solutions</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/10 sm:p-7">
<div className="flex items-center justify-between">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Request a Quote</h2>
<p className="mt-2 text-base font-normal leading-7 text-slate-600">Get a response within 24 hours.</p>
</div>
<div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 sm:flex">
<i className="h-5 w-5" data-lucide="clipboard-list"></i>
</div>
</div>
<form className="mt-6 space-y-4">
<div className="">
<label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
<input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-slate-900" placeholder="Your full name" type="text"/>
</div>
<div className="">
<label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
<input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-slate-900" placeholder="(000) 000-0000" type="tel"/>
</div>
<div className="">
<label className="mb-2 block text-sm font-medium text-slate-700">Service Needed</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 text-sm font-normal text-slate-900 outline-none transition focus:border-slate-900">
<option>Apartment Turnover</option>
<option>General Maintenance &amp; Repairs</option>
<option>Electrical Services</option>
<option>Painting</option>
<option>Landscaping</option>
<option>Kitchen Repairs &amp; Installations</option>
<option>Flooring</option>
<option>Roof Repairs</option>
<option>Deep Cleaning</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<button className="inline-flex transition hover:bg-slate-800 text-sm font-semibold text-white bg-[#0042aa] w-full rounded-xl px-6 py-3.5 items-center justify-center" type="submit">
                  Get My Free Quote
                </button>
</form>
<div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
<div className="text-sm font-medium text-slate-600">Serving property managers, landlords, and homeowners.</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700" href="tel:+14014337663">
<i className="h-4 w-4" data-lucide="phone-call"></i>
      Call Now
    </a>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-slate-200 bg-white">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
<div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="map-pinned"></i>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-900">Service Area</div>
<div className="text-sm font-normal text-slate-600">Local and surrounding communities</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="zap"></i>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-900">Fast Turnarounds</div>
<div className="text-sm font-normal text-slate-600">Ideal for vacancies and move-outs</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="users"></i>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-900">One-Stop Solution</div>
<div className="text-sm font-normal text-slate-600">No need to coordinate multiple contractors</div>
</div>
</div>
</div>
</section>
<section className="sm:py-20 bg-white pt-16 pb-16" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-2xl saturate-50">
<div className="max-w-3xl">
<div className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">Services Overview</div>
<h2 className="sm:text-4xl transition duration-300 cursor-pointer text-3xl font-semibold text-slate-900 tracking-tight mt-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-md hue-rotate-30 saturate-100 brightness-90" id="headline">
  Everything your property needs, under one roof.
</h2>
<p className="mt-4 text-lg font-normal leading-8 text-slate-600">
              Tired of dealing with multiple contractors? We simplify property care with a full-service team that handles repairs, turnovers, installations, cleaning, and exterior work.
            </p>
</div>
<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
<i className="h-5 w-5" data-lucide="key-round"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Apartment Turnovers</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Fast, coordinated unit prep to get apartments move-in ready without delays.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
<i className="h-5 w-5" data-lucide="wrench"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">General Maintenance &amp; Repairs</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Dependable fixes for everyday issues, from drywall and doors to leaks and hardware.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
<i className="h-5 w-5" data-lucide="lightbulb"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Electrical Services</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Safe, professional electrical repairs, fixture replacements, and troubleshooting.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
<i className="h-5 w-5" data-lucide="paintbrush-2"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Interior &amp; Exterior Painting</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Clean, polished finishes that refresh units, increase appeal, and protect surfaces.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
<i className="h-5 w-5" data-lucide="trees"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Landscaping &amp; Outdoor Maintenance</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Keep exterior spaces neat, safe, and welcoming with regular upkeep and cleanups.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
<i className="h-5 w-5" data-lucide="chef-hat"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Kitchen Repairs &amp; Installations</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Cabinet repairs, fixture updates, countertop support, and practical kitchen improvements.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
<i className="h-5 w-5" data-lucide="layout-panel-top"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Flooring Installation &amp; Repairs</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Durable flooring solutions for damaged areas, upgrades, and turnover-ready interiors.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
<i className="h-5 w-5" data-lucide="house-plus"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Roof Repairs &amp; Leak Fixing</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Prompt leak response and roofing repairs to protect units and avoid bigger issues.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<h3 className="mt-5 text-xl font-semibold text-slate-900">Deep Cleaning &amp; Move-Out Cleaning</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Detailed cleaning services that leave homes and units fresh, presentable, and ready.</p>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 py-16 sm:py-20" id="why-us">
<div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
<div className="lg:col-span-5">
<div className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">Why Choose Us</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              The maintenance partner that saves you time, stress, and money.
            </h2>
<p className="mt-4 text-lg font-normal leading-8 text-slate-600">
              Need fast turnovers? Looking for reliable maintenance you can count on? We understand what property managers and owners need most: speed, quality, communication, and fewer headaches.
            </p>
<div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
<i className="h-5 w-5 text-emerald-400" data-lucide="badge-check"></i>
</div>
<div className="">
<h3 className="text-xl font-semibold">One company. Total coverage.</h3>
<p className="mt-2 text-base font-normal leading-7 text-slate-300">
                    From repairs and painting to cleaning, flooring, and roof work, we coordinate everything under one trusted team.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-5 sm:grid-cols-2">
<div className="rounded-3xl border border-slate-200 bg-white p-6">
<i className="h-6 w-6 text-slate-900" data-lucide="layers-3"></i>
<h3 className="mt-4 text-xl font-semibold text-slate-900">One company for all maintenance needs</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Stop juggling multiple vendors. We simplify scheduling, communication, and accountability.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6">
<i className="h-6 w-6 text-slate-900" data-lucide="timer"></i>
<h3 className="mt-4 text-xl font-semibold text-slate-900">Quick turnaround times</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">We move fast to help reduce vacancy time and keep repairs from piling up.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6">
<i className="h-6 w-6 text-slate-900" data-lucide="hard-hat"></i>
<h3 className="mt-4 text-xl font-semibold text-slate-900">Professional and experienced team</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Our crew delivers dependable workmanship with clear updates and professional service.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6">
<i className="h-6 w-6 text-slate-900" data-lucide="thumbs-up"></i>
<h3 className="mt-4 text-xl font-semibold text-slate-900">Consistent, high-quality results</h3>
<p className="mt-3 text-base font-normal leading-7 text-slate-600">Clean finishes, reliable fixes, and work completed to a standard you can trust every time.</p>
</div>
</div>
</div>
</div>
</section>
<section className="sm:py-20 bg-white pt-16 pb-16" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
<div className="max-w-3xl">
<div className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">Before &amp; After Gallery</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
      Real improvements that build trust at a glance.
    </h2>
<p className="mt-4 text-lg font-normal leading-8 text-slate-600">
      From worn-down units to refreshed, move-in ready spaces, our work is designed to make properties look better,
      function better, and rent faster.
    </p>
</div>
<a className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50" href="#contact">
    Schedule a Walkthrough
  </a>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-3">
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="grid grid-cols-2">
<div className="relative">
<div className="relative overflow-hidden h-56 w-full">
<img className="transition duration-300 hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c73f0f84-f610-4097-b2be-be6b3dea7c86_800w.jpg"/>
<div className="relative overflow-hidden h-56 w-full group">
<img alt="Before kitchen condition" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-500"></div>
</div>
</div>
<div className="absolute left-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white">Before</div>
</div>
<div className="relative">
<img alt="After kitchen repair and refresh" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64b58f21-5e4c-4d7a-b461-000b3e419cfb_800w.jpg" style={{height: 'clamp(10rem, 32vw, 14rem)'}}/>
<div className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">After</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-slate-900">Kitchen Refresh</h3>
<p className="mt-2 text-base font-normal leading-7 text-slate-600">Repairs, paint, fixture updates, and detailed cleaning
  for a fast turnover.</p>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="grid grid-cols-2">
<div className="relative">
<img alt="Before living area flooring wear" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11383b53-6bcb-48a4-ad0c-5fa19b54b321_800w.jpg"/>
<div className="absolute left-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white">Before</div>
</div>
<div className="relative">
<img alt="After living area turnover and flooring update" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a63bf39-d9c9-4a05-b692-1d80fa9c50e6_800w.jpg"/>
<div className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">After</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-slate-900">Turnover Ready Unit</h3>
<p className="mt-2 text-base font-normal leading-7 text-slate-600">Flooring repair, paint touch-ups, maintenance fixes, and move-out cleaning.</p>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="grid grid-cols-2">
<div className="relative">
<img alt="Before exterior maintenance condition" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2360162-8b60-4f5f-99c0-b8efc9cc4279_800w.jpg"/>
<div className="absolute left-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white">Before</div>
</div>
<div className="relative">
<img alt="After exterior cleanup and maintenance" className="h-56 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc441696-4fe6-4051-9f17-74d1aea9cebb_800w.jpg?w=800&amp;q=80"/>
<div className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">After</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-slate-900">Exterior Cleanup</h3>
<p className="mt-2 text-base font-normal leading-7 text-slate-600">Landscaping, repairs, and cleanup that improve curb appeal and first impressions.</p>
</div>
</div>
</div>
</div>
</section><style>
    body { font-family: 'Inter', sans-serif; }
  </style><section className="sm:py-24 overflow-hidden bg-[#002e7a] py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<div className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-500">Portfolio Showcase</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Excellence in every square foot.
        </h2>
<p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-slate-400">
          From high-traffic commercial spaces to luxury residential interiors, our team ensures every project meets the highest standards of durability and aesthetic appeal.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[240px]">

<div className="group relative lg:col-span-8 lg:row-span-2 overflow-hidden rounded-3xl bg-slate-800">
<img alt="Modern kitchen renovation" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-60 opacity-80" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b434fc88-1728-45e2-b8d8-1c55ad92951e_3840w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 backdrop-blur-md mb-4">
<i className="h-3 w-3" data-lucide="home"></i>
              Residential
            </div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Full Interior Modernization</h3>
<p className="mt-2 text-slate-300 max-w-md">Complete cabinetry overhaul, premium lighting installation, and structural repairs for a high-end rental property.</p>
</div>
</div>

<div className="group relative lg:col-span-4 lg:row-span-1 overflow-hidden rounded-3xl bg-slate-800">
<img alt="Living room maintenance" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-60 opacity-80" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64b58f21-5e4c-4d7a-b461-000b3e419cfb_800w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-lg font-semibold text-white tracking-tight bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-stone-400 to-stone-600">Turnover Preparation</h3>
<p className="text-sm text-slate-300 bg-slate-800 mt-1">Deep cleaning and cosmetic repairs.</p>
</div>
</div>

<div className="group relative lg:col-span-4 lg:row-span-1 overflow-hidden rounded-3xl bg-slate-800">
<img alt="Exterior architecture" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-60 opacity-80" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51a31e08-ed48-4960-ad59-9b3e364b05a5_800w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-lg font-semibold text-white tracking-tight border-slate-500">Exterior Upkeep</h3>
<p className="mt-1 text-sm text-slate-300">Curb appeal and structural maintenance.</p>
</div>
</div>

<div className="lg:col-span-12 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<div className="text-3xl font-semibold tracking-tight text-white">500+</div>
<div className="mt-1 text-sm font-medium text-slate-400">Units Refreshed</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<div className="text-3xl font-semibold tracking-tight text-white">98%</div>
<div className="mt-1 text-sm font-medium text-slate-400">On-Time Delivery</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<div className="text-3xl font-semibold tracking-tight text-white">12hr</div>
<div className="mt-1 text-sm font-medium text-slate-400">Avg Response</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<div className="text-3xl font-semibold tracking-tight text-white">15+</div>
<div className="mt-1 text-sm font-medium text-slate-400">Expert Crew</div>
</div>
</div>
</div>
<div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
<a className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600" href="#contact">
          Book Your Project
        </a>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400 transition" href="tel:+14014337663">
<i className="h-4 w-4" data-lucide="phone-call"></i>
          Speak with a specialist
        </a>
</div>
</div>
</section>
<section className="sm:py-20 bg-slate-50 pt-16 pb-16" id="reviews">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<div className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">Testimonials</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by property managers, landlords, and homeowners.
            </h2>
<p className="mt-4 text-lg font-normal leading-8 text-slate-600">
              Reliable service, strong communication, and work that gets done when it matters most.
            </p>
</div>
<div className="mt-10 grid gap-5 lg:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex gap-1 text-orange-500">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-4 text-base font-normal leading-8 text-slate-600">
                “They’ve become our go-to team for turnovers and repairs. Fast response, clear communication, and quality work every time.”
              </p>
<div className="mt-5 border-t border-slate-200 pt-5">
<div className="text-sm font-semibold text-slate-900">Sarah M.</div>
<div className="text-sm font-normal text-slate-500">Property Manager</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex gap-1 text-orange-500">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-4 text-base font-normal leading-8 text-slate-600">
                “Instead of calling three different contractors, we made one call and everything was handled. Huge time saver.”
              </p>
<div className="mt-5 border-t border-slate-200 pt-5">
<div className="text-sm font-semibold text-slate-900">James T.</div>
<div className="text-sm font-normal text-slate-500">Landlord</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex gap-1 text-orange-500">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-4 text-base font-normal leading-8 text-slate-600">
                “Professional, responsive, and dependable. The unit was cleaned, repaired, and ready much faster than we expected.”
              </p>
<div className="mt-5 border-t border-slate-200 pt-5">
<div className="text-sm font-semibold text-slate-900">Lisa R.</div>
<div className="text-sm font-normal text-slate-500">Homeowner</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-16 sm:py-20" id="about">
<div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
<div className="lg:col-span-5">
<div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
<img alt="Property maintenance team at work preparing a residential unit" className="w-full h-auto object-cover shadow-md backdrop-blur" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17f268f2-f7d9-437e-be9b-776028ebdede_1600w.jpg?w=800&amp;q=80" style={{display: 'block', width: '100%', height: 'auto', Width: '100%'}}/>
</div>
</div>
<div className="lg:col-span-7">
<div className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">About Us</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built for owners and managers who need dependable execution.
            </h2>
<p className="mt-4 text-lg font-normal leading-8 text-slate-600">
              We’re a full-service property maintenance company focused on speed, reliability, and professional results. Whether it’s a single repair or a complete apartment turnover, we help clients keep properties in top shape without the hassle of coordinating multiple vendors.
            </p>
<p className="leading-8 text-lg font-normal text-slate-600 mt-4">
              We understand the pressure that comes with vacancies, tenant issues, and time-sensitive maintenance. That’s why we prioritize responsive service, efficient scheduling, and clear communication from start to finish.
            </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-200 p-5">
<div className="text-lg font-semibold text-slate-900">Professional Communication</div>
<div className="mt-2 text-base font-normal leading-7 text-slate-600">Clear updates, reliable scheduling, and no guessing about project status.</div>
</div>
<div className="rounded-2xl border border-slate-200 p-5">
<div className="text-lg font-semibold text-slate-900">Results You Can Count On</div>
<div className="mt-2 text-base font-normal leading-7 text-slate-600">Consistent workmanship that helps protect your time, budget, and reputation.</div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:py-20 bg-[#002e7a] py-16" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-400">Contact / Quote</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to stop chasing multiple contractors?
              </h2>
<p className="mt-4 text-lg font-normal leading-8 text-slate-300">
                Tell us what you need and our team will follow up within 24 hours. Fast turnovers, urgent repairs, and ongoing maintenance plans available.
              </p>
<div className="mt-8 space-y-4">
<a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-white/10" href="tel:+14014337663">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
<i className="h-5 w-5" data-lucide="phone"></i>
</div>
<div className="">
<div className="text-sm font-medium text-slate-300">Call us now</div>
<div className="text-lg font-semibold tracking-tight">(401) 433-7663</div>
</div>
</a>
<div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
<i className="h-5 w-5" data-lucide="clock-3"></i>
</div>
<div className="">
<div className="text-sm font-medium text-slate-300">Response promise</div>
<div className="text-lg font-semibold tracking-tight">Get a response within 24 hours</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">
<form className="grid gap-4 sm:grid-cols-2">
<div className="sm:col-span-1">
<label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
<input className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900" placeholder="Your name" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
<input className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900" placeholder="Your phone number" type="tel"/>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-sm font-medium text-slate-700">Service Needed</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 text-sm font-normal text-slate-900 outline-none transition focus:border-slate-900">
<option>Select a service</option>
<option>Apartment Turnovers</option>
<option>General Maintenance &amp; Repairs</option>
<option>Electrical Services</option>
<option>Interior &amp; Exterior Painting</option>
<option>Landscaping &amp; Outdoor Maintenance</option>
<option>Kitchen Repairs &amp; Installations</option>
<option>Flooring Installation &amp; Repairs</option>
<option>Roof Repairs &amp; Leak Fixing</option>
<option>Deep Cleaning &amp; Move-Out Cleaning</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-sm font-medium text-slate-700">Project Details</label>
<textarea className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900" placeholder="Tell us about the property, timeline, or maintenance issue" rows="5"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-sm font-medium text-slate-500">Serving local property managers, landlords, and homeowners.</div>
<button className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600" type="submit">
                      Get a Free Quote
                    </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
<div className="">
<div className="text-base font-semibold text-slate-900">Prime Property Care</div>
<div className="mt-1 text-sm font-normal text-slate-500">Complete property maintenance for turnovers, repairs, and everything in between.</div>
</div>
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="tel:+14014337663">(401) 433-7663</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#contact">Get a Quote</a>
</div>
</div>
</footer>
<div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:hidden">
<div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900" href="tel:+14014337663">
<i className="h-4 w-4" data-lucide="phone-call"></i>
          Call
        </a>
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white" href="#contact">
<i className="h-4 w-4" data-lucide="file-text"></i>
          Get a Quote
        </a>
</div>
</div>
</div>



    </>
  );
}
