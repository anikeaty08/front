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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<nav className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-bold tracking-tight text-zinc-100">
            AI-R
          </span>
<span className="px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            Pre-launch
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">Pricing</a>
<a className="hover:text-zinc-100 transition-colors" href="#">
            Revenue Generators
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#">FAQ</a>
<a className="hover:text-zinc-100 transition-colors" href="#">
            How AI-R Works
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#">Demo</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
            Owner Login
          </a>
<button className="border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 text-sm font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all">
<iconify-icon className="text-zinc-400" icon="solar:sun-linear"></iconify-icon>
            Light
          </button>
<a className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all" href="#">
            Join Beta
          </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-[55%] flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
<span className="w-2 h-2 rounded-full bg-cyan-500"></span>
<span className="text-[11px] font-semibold tracking-widest text-zinc-300 uppercase">
              RELAX. YOU'VE GOT AI-R.
            </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-6" style={{textWrap: 'balance'}}>
            You run the restaurant.
            <br/>
<span className="text-zinc-400">AI-R runs the rest.</span>
</h1>
<p className="text-lg text-zinc-400 font-normal max-w-xl mb-10 leading-relaxed">
            Restaurants have been paying too much for disconnected software,
            delivery fees, and missed calls for years. Upload your menu and see
            AIR assemble POS, ordering, phones, website, loyalty, pricing, and
            restaurant intelligence around your restaurant.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
<a className="w-full sm:w-auto bg-cyan-600 text-white hover:bg-cyan-500 text-base font-medium px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2" href="#">
              Run the 3-minute demo
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-zinc-300 hover:text-white border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800 text-base font-medium px-8 py-3 rounded-xl transition-all flex items-center justify-center" href="#">
              Join Beta
            </a>
</div>
<div className="text-sm text-zinc-500 flex flex-wrap items-center gap-2">
<span>No credit card. No sales call. Just upload and look.</span>
<span className="text-zinc-700 hidden sm:inline">|</span>
<a className="text-zinc-400 hover:text-zinc-300 underline decoration-zinc-700 underline-offset-4" href="#">
              Rather talk to a person?
            </a>
</div>
</div>

<div className="lg:w-[45%] w-full max-w-lg mx-auto relative">
<div className="rounded-2xl border border-zinc-800 bg-[#0a0a0a] p-6 shadow-2xl relative overflow-hidden">

<div className="flex justify-between items-start mb-6">
<div>
<div className="text-[10px] font-bold tracking-widest text-cyan-700 uppercase mb-1.5">
                  Startup Proof
                </div>
<h3 className="text-xl font-semibold text-white tracking-tight">
                  Chan Nara: test case #1
                </h3>
</div>
<div className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-[11px] text-zinc-400 font-medium">
                Day 37 on AIR
              </div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors">
<div className="text-[11px] text-zinc-500 mb-1 font-medium">
                  Menu converted
                </div>
<div className="text-sm font-semibold text-zinc-100 mb-3">
                  229 items live
                </div>
<a className="text-[11px] text-cyan-600 hover:text-cyan-500 font-medium flex items-center gap-1" href="#">
                  See menu
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors">
<div className="text-[11px] text-zinc-500 mb-1 font-medium">
                  Website + ordering
                </div>
<div className="text-sm font-semibold text-zinc-100 mb-3">
                  Live on AIR
                </div>
<a className="text-[11px] text-cyan-600 hover:text-cyan-500 font-medium flex items-center gap-1" href="#">
                  View website
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors">
<div className="text-[11px] text-zinc-500 mb-1 font-medium">
                  Phone AI setup
                </div>
<div className="text-sm font-semibold text-zinc-100 mb-3">
                  (540) 216-5800
                </div>
<a className="text-[11px] text-cyan-600 hover:text-cyan-500 font-medium flex items-center gap-1" href="#">
                  Call Joe
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 transition-colors">
<div className="text-[11px] text-zinc-500 mb-1 font-medium">
                  Revenue recovery
                </div>
<div className="text-sm font-semibold text-zinc-100 mb-3">
                  Direct orders + disputes
                </div>
<a className="text-[11px] text-cyan-600 hover:text-cyan-500 font-medium flex items-center gap-1" href="#">
                  Revenue engines
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="border border-zinc-800/80 rounded-xl p-5 bg-zinc-900/20">
<div className="text-[10px] font-bold tracking-widest text-cyan-700 uppercase mb-2.5">
                Maestro / Claude Desktop
              </div>
<h4 className="text-sm font-medium text-white mb-2">
                "What should I fix before Friday night service?"
              </h4>
<p className="text-[11px] text-zinc-500 mb-4 leading-relaxed">
                AIR can answer from the dashboard or Claude Desktop, with
                desktop access prepared from your account when you want it.
              </p>
<div className="bg-[#050505] border border-zinc-800 rounded-lg p-3 flex items-center text-[11px] text-zinc-400">
                Maestro, how do I calculate Pad See Ew plate cost?
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950 relative border-t border-zinc-900/50">
<div className="max-w-5xl mx-auto">

<div className="flex items-center justify-between border border-zinc-800/80 bg-[#0a0a0a] rounded-[2rem] py-3 px-4 md:px-6 mb-12 flex-col md:flex-row gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cyan-950/40 border border-cyan-900/50 flex items-center justify-center text-cyan-600">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-bold tracking-widest text-cyan-700 uppercase mb-0.5">
                MAESTRO, YOUR ALWAYS-ON BACK OFFICE
              </div>
<div className="text-sm text-zinc-400">
                Talk to Maestro first, then run the 3-minute demo.
              </div>
</div>
</div>
<a className="border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-full transition-all flex items-center gap-2 whitespace-nowrap" href="#">
<iconify-icon className="text-lg" icon="solar:link-round-linear"></iconify-icon>
            Talk to Maestro
          </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors">
<div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-semibold mb-6">
              1
            </div>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">
              Upload a menu
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Drop a PDF, CSV, photo, or POS export. AIR turns it into a working
              restaurant system.
            </p>
</div>

<div className="bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors">
<div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-semibold mb-6">
              2
            </div>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">
              See the operating system
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              POS, website, ordering, phones, loyalty, pricing, and reporting
              light up around the same data.
            </p>
</div>

<div className="bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors">
<div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-semibold mb-6">
              3
            </div>
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">
              Ask questions in plain English
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Use Maestro in AIR or Claude Desktop when you want the same
              operator brain on your own machine.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-white" style={{textWrap: 'balance'}}>
            A system that thinks, learns, and acts.
          </h2>
<p className="text-lg text-zinc-400 mb-8 font-normal leading-relaxed">
            Legacy point-of-sale systems are just digital cash registers. AIR is
            an active participant in your business. By analyzing thousands of
            data points daily—from local events and weather to historical sales
            and ticket times—AIR continuously optimizes your operations.
          </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-300 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100 tracking-tight">
                  Dynamic Menu Pricing
                </h4>
<p className="text-sm text-zinc-500 mt-1">
                  Automatically adjust prices on 3rd party apps during peak
                  hours to maximize profitability.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-300 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100 tracking-tight">
                  Staffing Predictions
                </h4>
<p className="text-sm text-zinc-500 mt-1">
                  Generate schedules based on predicted foot traffic, not just
                  last week's numbers.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-300 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100 tracking-tight">
                  Review Management
                </h4>
<p className="text-sm text-zinc-500 mt-1">
                  Draft context-aware, personalized responses to Google and Yelp
                  reviews instantly.
                </p>
</div>
</li>
</ul>
</div>

<div className="md:w-1/2 w-full">
<div className="aspect-square w-full max-w-md mx-auto relative flex items-center justify-center">

<div className="absolute inset-0 border border-zinc-800/40 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-8 border border-zinc-800/60 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="absolute inset-16 border border-zinc-700/40 rounded-full border-dashed animate-[spin_30s_linear_infinite]"></div>
<div className="relative w-32 h-32 bg-zinc-900 rounded-full border border-zinc-700 shadow-2xl flex flex-col items-center justify-center z-10">
<iconify-icon className="text-3xl text-zinc-100 mb-2" icon="solar:cpu-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-zinc-400">
                MAESTRO
              </span>
</div>

<div className="absolute top-1/4 left-0 w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:cloud-sun-linear"></iconify-icon>
</div>
<div className="absolute bottom-1/4 right-0 w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:bill-list-linear"></iconify-icon>
</div>
<div className="absolute top-1/8 right-1/4 w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-900 bg-zinc-950 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-100/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
          Ready to run on autopilot?
        </h2>
<p className="text-lg text-zinc-400 mb-10 font-normal">
          Join the next generation of restaurants scaling operations, cutting
          bloat, and increasing margins with AIR.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-zinc-100 text-zinc-950 hover:bg-white text-base font-medium px-8 py-4 rounded-full transition-all" href="#">
            Get started today
          </a>
</div>
<p className="text-xs text-zinc-600 mt-6 font-medium tracking-tight">
          Includes free data migration from Toast, Square, and Aloha.
        </p>
</div>
</section>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-zinc-500">
            A I - R
          </span>
</div>
<div className="flex gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Status</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
