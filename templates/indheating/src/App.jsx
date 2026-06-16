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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col items-start justify-center text-slate-900 group" href="#">
<span className="text-xl tracking-tight font-semibold uppercase leading-none">
            INDHEATING
          </span>
<span className="uppercase text-base font-semibold text-slate-950 tracking-widest mt-1">
            &amp; SHEETMETAL
          </span>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#services">
            HVAC
          </a>
<a className="hover:text-slate-900 transition-colors" href="#services">
            Plumbing
          </a>
<a className="hover:text-slate-900 transition-colors" href="#services">
            Sheet Metal
          </a>
<a className="hover:text-slate-900 transition-colors" href="#portfolio">
            Projects
          </a>
<a className="hover:text-slate-900 transition-colors" href="#about">
            About Us
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-orange-500 transition-colors" href="tel:3077425793">
<iconify-icon height="18" icon="solar:phone-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
            (307) 742-5793
          </a>
<a className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm flex items-center gap-2" href="#contact">
<iconify-icon height="18" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
            24/7 Emergency
          </a>
</div>
</div>
</header>

<section className="relative bg-slate-900 overflow-hidden">
<img alt="HVAC Facility" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-texture"></div>
<div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90"></div>
<div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col items-start justify-center">
<div className="max-w-3xl">
<div className="inline-flex text-xs font-medium text-slate-300 bg-slate-800/50 border-slate-700 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">Serving Laramie, Albany County &amp; Surrounding Areas </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-white leading-tight mb-6">
            Laramie’s Trusted HVAC, Plumbing &amp; Sheet Metal Experts
          </h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Serving Wyoming with precision, safety, and craftsmanship since day
            one. We handle extreme weather readiness and complex mechanical
            projects with ease.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
<a className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-8 py-3.5 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2" href="tel:3077425793">
<iconify-icon height="20" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
              Call Now: (307) 742-5793
            </a>
<a className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 text-base font-medium px-8 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2" href="#contact">
              Request Service
              <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
<div className="flex items-center gap-3 text-slate-300">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-orange-500" height="16" icon="solar:verified-check-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">Licensed Mechanical</span>
</div>
<div className="flex items-center gap-3 text-slate-300">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-orange-500" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">Fully Insured</span>
</div>
<div className="flex items-center gap-3 text-slate-300">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-orange-500" height="16" icon="solar:home-angle-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">Local &amp; Family-Owned</span>
</div>
<div className="flex items-center gap-3 text-slate-300">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-orange-500" height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">NAICS 238220</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-6">
              Deep Roots in Laramie. Uncompromising Standards.
            </h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
              Led by Bryan Van Buren, a licensed mechanical contractor,
              Independent Heating &amp; Sheetmetal, Inc. brings decades of
              combined mechanical experience to Albany County. We are proud of
              our local roots and our commitment to the community.
            </p>
<p className="text-base text-slate-600 mb-8 leading-relaxed">
              What truly sets us apart is our
              <strong className="">in-house sheet metal shop</strong>
              . This allows our non-union, highly trained workforce to fabricate
              custom ductwork and architectural metals with faster turnaround
              times and superior precision compared to competitors who
              outsource.
            </p>
<div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
<iconify-icon height="24" icon="solar:user-id-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                  Bryan Van Buren
                </p>
<p className="text-xs text-slate-500">
                  Licensed Mechanical Contractor
                </p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Shop Exterior" className="aspect-square w-full object-cover rounded-2xl border border-slate-200 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 mt-8 relative overflow-hidden">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon height="48" icon="solar:hammer-linear" style={{strokeWidth: '1px'}} width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
            Core Capabilities
          </h2>
<p className="text-base text-slate-600">
            Comprehensive mechanical solutions built for Wyoming's demanding
            environments.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors">
<iconify-icon height="28" icon="solar:wind-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-4">
              HVAC Systems
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Residential and commercial climate control with an emphasis on
              extreme-weather readiness.
            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Furnace repair &amp; replacement
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                AC installation &amp; service
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Heat pumps &amp; ductless mini-splits
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Indoor air quality solutions
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Winter emergency service
              </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors">
<iconify-icon height="28" icon="solar:ruler-pen-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-4">
              Sheet Metal Fabrication
            </h3>
<p className="text-sm text-slate-600 mb-6">
              In-house fabrication shop allowing faster turnaround for
              commercial bids and custom builds.
            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                In-house fabrication shop
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Custom ductwork design
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Architectural metals
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Flashings &amp; precision fittings
              </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors">
<iconify-icon height="28" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-4">
              Plumbing &amp; Mechanical
            </h3>
<p className="text-sm text-slate-600 mb-6">
              Full-scope services for complex commercial projects, new
              construction, and remodels.
            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Commercial mechanical systems
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Boilers &amp; hydronics
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Large-scale installations
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Full-scope plumbing services
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                New construction &amp; remodels
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-texture opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-16 text-center">
          Why Partner With Us?
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-orange-500">
<iconify-icon height="24" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold mb-1">
                Local Wyoming Expertise
              </h4>
<p className="text-sm text-slate-400">
                Deep understanding of local building codes and extreme weather
                requirements.
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-orange-500">
<iconify-icon height="24" icon="solar:diploma-verified-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold mb-1">
                Licensed &amp; Insured
              </h4>
<p className="text-sm text-slate-400">
                Fully compliant and protected, giving you complete peace of mind
                on every job.
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-orange-500">
<iconify-icon height="24" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold mb-1">Fast Turnaround</h4>
<p className="text-sm text-slate-400">
                Our in-house metal shop eliminates third-party delays on custom
                fabrications.
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-orange-500">
<iconify-icon height="24" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold mb-1">
                Emergency HVAC Service
              </h4>
<p className="text-sm text-slate-400">
                24/7 availability for critical heating failures during Wyoming's
                harsh winters.
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-orange-500">
<iconify-icon height="24" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold mb-1">
                Trusted Across Sectors
              </h4>
<p className="text-sm text-slate-400">
                Ried upon by local homeowners, commercial builders, and
                municipal projects.
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-orange-500">
<iconify-icon height="24" icon="solar:medal-ribbon-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold mb-1">
                Precision Workmanship
              </h4>
<p className="text-sm text-slate-400">
                Backed by decades of experience, we measure twice and cut once.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-12">
          Project Capabilities
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3]">
<img alt="Commercial Mechanical Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-base">
                Commercial Mechanical Room
              </p>
<p className="text-slate-300 text-xs mt-1">
                Full system installation
              </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3]">
<img alt="Custom Ductwork" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-base">Custom Ductwork</p>
<p className="text-slate-300 text-xs mt-1">Fabricated in-house</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3]">
<img alt="Residential HVAC Upgrade" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-base">
                Residential HVAC Upgrade
              </p>
<p className="text-slate-300 text-xs mt-1">High-efficiency furnace</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3]">
<img alt="Architectural Metal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-base">
                Architectural Metal
              </p>
<p className="text-slate-300 text-xs mt-1">Custom flashings</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3]">
<img alt="Hydronic Boiler Installation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-base">
                Hydronic Boiler Installation
              </p>
<p className="text-slate-300 text-xs mt-1">Complex plumbing</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3]">
<img alt="Before and After System Modernization" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white font-medium text-base">Before &amp; After</p>
<p className="text-slate-300 text-xs mt-1">System modernization</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-12 text-center">
          What Our Clients Say
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="text-orange-500 mb-4">
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic leading-relaxed">
              "When our furnace quit in sub-zero temps, they were there within
              hours. Professional, fast, and completely reliable. Wouldn't trust
              anyone else in Laramie."
            </p>
<p className="text-sm font-semibold text-slate-900">
              - Sarah T., Homeowner
            </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="text-orange-500 mb-4">
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic leading-relaxed">
              "The custom sheet metal work they did for our commercial build was
              flawless. Having their own shop meant no waiting around for parts
              from out of state."
            </p>
<p className="text-sm font-semibold text-slate-900">
              - Mark R., General Contractor
            </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="text-orange-500 mb-4">
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-bold" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic leading-relaxed">
              "Bryan and his crew replumbed our entire older home. Their
              craftsmanship is top-tier, and they left the site cleaner than
              they found it."
            </p>
<p className="text-sm font-semibold text-slate-900">
              - Dave &amp; Lisa M.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-6">
              Get in Touch
            </h2>
<p className="text-base text-slate-600 mb-8">
              Ready to discuss your project or need immediate service? Reach out
              to our local team.
            </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 flex-shrink-0">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Phone</p>
<a className="text-sm text-slate-600 hover:text-orange-500 transition-colors" href="tel:3077425793">
                    (307) 742-5793
                  </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 flex-shrink-0">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900">
                    Physical Address
                  </p>
<p className="text-sm text-slate-600">
                    104 Superior Ct, Laramie, WY 82070
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 flex-shrink-0">
<iconify-icon height="20" icon="solar:mailbox-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900">
                    Mailing Address
                  </p>
<p className="text-sm text-slate-600">
                    P.O. Box 925, Laramie, WY 82073
                  </p>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<img alt="Business Location Exterior View 1" className="w-full h-48 sm:h-64 object-cover rounded-xl border border-slate-200 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f337c303-e79c-40a3-9397-0e1f816191f5_1600w.jpg?w=800&amp;q=80"/>
<img alt="Business Location Exterior View 2" className="w-full h-48 sm:h-64 object-cover rounded-xl border border-slate-200 shadow-sm" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<div className="bg-orange-50 border border-orange-200 text-orange-800 p-4 rounded-lg mb-8 flex gap-3 text-sm">
<iconify-icon className="flex-shrink-0 mt-0.5" height="20" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<p>
                For urgent heating or plumbing issues, please call us directly
                at
                <strong>(307) 742-5793</strong>
                .
              </p>
</div>
<form action="mailto:indheating@gmail.com" className="space-y-5" enctype="text/plain" method="post">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Name
                  </label>
<input className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400" name="Name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Phone
                  </label>
<input className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400" name="Phone" placeholder="(307) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Email
                </label>
<input className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400" name="Email" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Service Needed
                  </label>
<div className="relative">
<select className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all appearance-none text-slate-700" name="Service Needed">
<option>HVAC</option>
<option>Plumbing</option>
<option>Sheet Metal</option>
<option>Commercial</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Urgency Level
                  </label>
<div className="relative">
<select className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all appearance-none text-slate-700" name="Urgency Level">
<option>Standard Scheduling</option>
<option>Within 48 Hours</option>
<option>Emergency (Call instead)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Project Details
                </label>
<textarea className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none placeholder:text-slate-400" name="Project Details" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-3 rounded-lg transition-colors" type="submit">
                Send Request
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 mt-auto border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1 flex flex-col items-start">
<span className="text-xl tracking-tight font-semibold text-white uppercase leading-none mb-1">
              INDHEATING
            </span>
<span className="uppercase text-base font-semibold text-gray-50 tracking-widest mb-4">
              &amp; SHEETMETAL
            </span>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Precision HVAC, Plumbing, and Sheet Metal fabrication serving
              Laramie and Albany County.
            </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#services">
                  HVAC Services
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#services">
                  Plumbing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#services">
                  Sheet Metal
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#portfolio">
                  Projects
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#contact">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#contact">
                  Emergency Service
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Licensing</h4>
<ul className="space-y-2 text-xs">
<li>Licensed Mechanical Contractor</li>
<li>NAICS: 238220</li>
<li>Fully Insured</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p className="">
            © 2026 Independent Heating &amp; Sheetmetal, Inc. All rights
            reserved.
            <span className="block md:inline md:ml-1 mt-2 md:mt-0">
              2024 - 2026 - Developed, Managed, Maintained &amp; Protected by
              <a className="hover:text-white underline underline-offset-2 transition-colors" href="https://307it.com" rel="noopener noreferrer" target="_blank">
                AVLP
              </a>
              .
            </span>
</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:mailbox-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
