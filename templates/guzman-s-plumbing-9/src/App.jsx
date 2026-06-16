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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1778540771/hf_20260511_230210_7452906a-58fa-4857-92de-b35facad30b5_kzlbtw.mp4"></video>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-chrome font-semibold tracking-tighter text-lg uppercase">
            Guzman's
          </span>
</div>
<div className="flex items-center gap-6">
<span className="hidden sm:block text-xs font-medium text-zinc-500 tracking-tight">
            LIC #1092555
          </span>
<a className="text-xs font-medium text-white hover:text-zinc-300 transition-colors flex items-center gap-1.5" href="tel:6199422034">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="hidden sm:inline">619-942-2034</span>
</a>
</div>
</div>
</nav>

<a className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-zinc-100 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] text-black" href="tel:6199422034" style={{boxShadow: '0 0 0 1px rgba(255,255,255,0.8), 0 10px 20px rgba(0,0,0,0.5)'}}>
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>

<section className="relative h-[85vh] min-h-[600px] w-full flex flex-col justify-end items-center pb-28">

<a className="chrome-btn hover:bg-zinc-900 transition-all flex text-sm font-medium text-zinc-200 bg-gradient-to-b from-zinc-800/80 via-black to-zinc-900/80 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.5),0px_2px_4px_rgba(0,0,0,0.5),0px_8px_16px_rgba(0,0,0,0.5),_0px_0px_30px_rgba(161,161,170,0.15)] gap-x-3 items-center group relative overflow-hidden" href="tel:6199422034" style={{boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(161, 161, 170, 0.2), rgba(255, 255, 255, 0.5))', -BorderRadiusBefore: '9999px'}}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<iconify-icon className="text-zinc-300 group-hover:text-white transition-colors" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-base font-medium text-white tracking-tight drop-shadow-md">
          Call Us Now
        </span>
</a>
</section>

<section className="py-24 px-6 bg-black relative">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-12 text-center text-chrome">
          Our Services
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:fire-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Water Heater Installation
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Expert installation for both electric and gas water heaters.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="mdi:water-heater" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Water Heater Repair
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Fast, reliable repairs to get your hot water back running.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:waterdrop-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Leak Detection &amp; Repair
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Precision detection and patching to prevent water damage.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:bath-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Drain Cleaning
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Thorough clearing of clogs for smooth-flowing drains.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:routing-2-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Sewer Line Services
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Comprehensive inspection, repair, and replacement.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:link-broken-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Pipe Repair &amp; Repiping
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Modern repiping solutions for deteriorating plumbing systems.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:siren-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Emergency Plumbing
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Rapid response for urgent, middle-of-the-night plumbing crises.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:sink-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Fixture Installation
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Professional installation of sinks, toilets, and modern faucets.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-zinc-400 mb-4 group-hover:text-white transition-colors" icon="solar:trash-bin-trash-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-white tracking-tight mb-2">
              Garbage Disposal
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Repair and installation of high-efficiency disposal units.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-zinc-950">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-white">
            San Diego's Trusted Plumbers
          </h2>
<p className="text-sm text-zinc-400 leading-relaxed">
            As a family-owned and operated business, Guzman’s and Sons Plumbing
            treats every home like our own. We deliver reliable, professional
            service across San Diego with transparency and speed. Fully licensed
            and insured, we ensure every job is done right the first time.
          </p>
<div className="flex items-center gap-6 pt-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-300" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">
                Lic #1092555
              </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-300" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">
                Family Owned
              </span>
</div>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl shadow-black">
<div className=""></div>
<img alt="Plumbing Tools" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6d61408-bf5a-4902-b1e0-ff7ff014abfc_800w.png"/>
</div>

<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-zinc-500/30 rounded-br-3xl"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between relative gap-12 md:gap-4">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent -z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-zinc-400 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-zinc-300" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white tracking-tight">
              1. Request Service
            </h3>
<p className="text-xs text-zinc-500 mt-1">Call us anytime.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-zinc-400 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-zinc-300" height="24" icon="solar:clipboard-check-linear" style={{color: 'rgb(212, 212, 216)'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white tracking-tight">
              2. We Diagnose
            </h3>
<p className="text-xs text-zinc-500 mt-1">
              Quick, accurate assessment.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="flex group-hover:scale-110 group-hover:border-zinc-400 transition-all duration-500 bg-zinc-900 w-16 h-16 border-zinc-700 border rounded-full mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] items-center justify-center">
<iconify-icon className="text-zinc-300" icon="solar:wrench-linear" width="24"></iconify-icon>
<iconify-icon className="group-hover:text-emerald-600 transition-colors text-xl text-zinc-600" height="20" icon="solar:check-circle-outline" strokeWidth="1.5" style={{color: 'rgb(5, 150, 105)'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white tracking-tight">
              3. Fast Fix
            </h3>
<p className="text-xs text-zinc-500 mt-1">Reliable, lasting results.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950 overflow-hidden">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-10 text-chrome">
          See Us in Action
        </h2>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">

<div className="w-80 md:w-[320px] h-[540px] flex-none snap-center relative rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden">
<iframe allowtransparency="true" className="absolute inset-0 w-full h-full border-0" frameborder="0" scrolling="no" src="https://www.instagram.com/p/DUj7YBijSGU/embed"></iframe>
</div>

<div className="w-80 md:w-[320px] h-[540px] flex-none snap-center relative rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden">
<iframe allowtransparency="true" className="absolute inset-0 w-full h-full border-0" frameborder="0" scrolling="no" src="https://www.instagram.com/p/DUKC9nJDQI1/embed"></iframe>
</div>

<div className="w-80 md:w-[320px] h-[540px] flex-none snap-center relative rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden">
<iframe allowtransparency="true" className="absolute inset-0 w-full h-full border-0" frameborder="0" scrolling="no" src="https://www.instagram.com/p/DTjWhf8DFLy/embed"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black overflow-hidden relative">
<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="scroller max-w-7xl mx-auto">
<div className="scroller-inner flex gap-6 px-6">

<div className="w-80 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
<div className="flex gap-1 mb-3">
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4">
              "Called them for an emergency leak late at night. They were here
              in 30 mins and fixed it flawlessly. Highly recommend!"
            </p>
<span className="text-xs font-semibold text-white tracking-tight">
              — Mark T., San Diego
            </span>
</div>
<div className="w-80 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
<div className="flex gap-1 mb-3">
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4">
              "Professional, clean, and fast. Replaced our old water heater with
              a new gas unit. The pricing was fair and transparent."
            </p>
<span className="text-xs font-semibold text-white tracking-tight">
              — Sarah J., La Jolla
            </span>
</div>
<div className="w-80 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
<div className="flex gap-1 mb-3">
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4">
              "Guzman's repiped my entire older home. The crew was respectful of
              our space and finished ahead of schedule."
            </p>
<span className="text-xs font-semibold text-white tracking-tight">
              — David R., Chula Vista
            </span>
</div>
<div className="w-80 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
<div className="flex gap-1 mb-3">
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4">
              "Called them for an emergency leak late at night. They were here
              in 30 mins and fixed it flawlessly. Highly recommend!"
            </p>
<span className="text-xs font-semibold text-white tracking-tight">
              — Mark T., San Diego
            </span>
</div>
<div className="w-80 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
<div className="flex gap-1 mb-3">
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4">
              "Professional, clean, and fast. Replaced our old water heater with
              a new gas unit. The pricing was fair and transparent."
            </p>
<span className="text-xs font-semibold text-white tracking-tight">
              — Sarah J., La Jolla
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-black flex flex-col items-center text-center">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black pointer-events-none"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 text-chrome">
          Ready to Fix Your Plumbing Today?
        </h2>
<p className="text-sm md:text-base text-zinc-400 mb-10">
          Fast, reliable, and professional service across San Diego. Don't wait
          for a small leak to become a big problem.
        </p>
<a className="chrome-btn inline-flex hover:bg-zinc-800 transition-all text-sm font-semibold text-white bg-gradient-to-b from-zinc-700 via-zinc-900 to-black rounded-full pt-4 pr-10 pb-4 pl-10 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1),0px_8px_16px_rgba(0,0,0,0.8),_0px_0px_40px_rgba(255,255,255,0.1)] gap-x-3 items-center group relative overflow-hidden" href="tel:6199422034" style={{-BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(161, 161, 170, 0.4), rgba(255, 255, 255, 0.8))', -BorderRadiusBefore: '9999px'}}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<iconify-icon className="text-white" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-base tracking-tight drop-shadow-md">Call Now</span>
</a>
<p className="mt-6 text-xs text-zinc-600 font-medium tracking-wide uppercase">
          619-942-2034
        </p>
</div>
</section>

<footer className="py-8 border-t border-white/5 bg-black text-center px-6">
<p className="text-xs text-zinc-600">
        © 2024 Guzman’s and Sons Plumbing. All rights reserved. San Diego, CA.
      </p>
</footer>

    </>
  );
}
