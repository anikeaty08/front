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
      

<header className="fixed top-0 inset-x-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-zinc-900" href="#">
                    STRMN.
                </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#channels">Channels</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#pricing">Log in</a>
<a className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all" href="#pricing">
                    Start Watching
                </a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden pt-24 pb-32">
<div className="absolute inset-0 -z-10" style={{backgroundImage: 'radial-gradient(circle at top center, #e4e4e7, transparent 70%)'}}></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-zinc-600">V3 Servers Now Live - 99.9% Uptime</span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6">
                    Premium entertainment, <br className="hidden md:block"/> without the premium price.
                </h1>
<p className="mx-auto max-w-2xl text-lg text-zinc-500 mb-10">
                    Access over 15,000 live channels and 50,000 movies &amp; series in stunning 4K quality. Instant setup on any device. No contracts, cancel anytime.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white shadow-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all" href="#pricing">
                        View Pricing Plans
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-zinc-200 px-8 py-3.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 transition-all" href="#features">
<iconify-icon className="mr-2 text-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Explore Channels
                    </a>
</div>
<div className="mt-16 pt-8 border-t border-zinc-200/50 max-w-3xl mx-auto">
<p className="text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">Compatible with your favorite devices</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-zinc-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:tv-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Smart TV</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">iOS &amp; Android</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:monitor-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Web Player</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl" icon="solar:devices-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Firestick / Roku</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Engineered for a flawless streaming experience.</h2>
<p className="text-base text-zinc-500">We utilize a globally distributed CDN and anti-freeze technology to ensure your stream never buffers, even during major sporting events.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="h-12 w-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">4K &amp; FHD Quality</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Experience true clarity with true 4K and 1080p channels. High bitrate streams for crisp, lag-free viewing.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="h-12 w-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Anti-Freeze Tech</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Our proprietary load-balancing ensures zero buffering. Watch peak-time sports without interruptions.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="h-12 w-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Massive VOD Library</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Over 50,000 movies and TV series updated daily. Catch up on the latest releases in multiple languages.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Simple, transparent pricing.</h2>
<p className="text-base text-zinc-500">Choose the plan that fits you best. All features included in every tier.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="rounded-3xl p-8 bg-white border border-zinc-200 shadow-sm relative">
<h3 className="text-lg font-medium text-zinc-900 mb-2">1 Month</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$14.99</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<a className="w-full block text-center rounded-full bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors mb-8" href="#">
                            Select Plan
                        </a>
<ul className="space-y-4 text-sm text-zinc-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>15,000+ Live Channels</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>50,000+ VODs</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>1 Device Connection</span>
</li>
</ul>
</div>

<div className="rounded-3xl p-8 bg-zinc-900 border border-zinc-800 shadow-xl relative md:-translate-y-4">
<div className="absolute -top-3 inset-x-0 flex justify-center">
<span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">BEST VALUE - SAVE 50%</span>
</div>
<h3 className="text-lg font-medium text-zinc-300 mb-2">12 Months</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-white">$89.99</span>
</div>
<p className="text-sm text-zinc-400 mb-6">Equals $7.49 / month</p>
<a className="w-full block text-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors mb-8" href="#">
                            Select Plan
                        </a>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>15,000+ Live Channels</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>50,000+ VODs</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>2 Device Connections</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white font-medium">Free EPG included</span>
</li>
</ul>
</div>

<div className="rounded-3xl p-8 bg-white border border-zinc-200 shadow-sm relative">
<h3 className="text-lg font-medium text-zinc-900 mb-2">6 Months</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$54.99</span>
</div>
<p className="text-sm text-zinc-500 mb-6">Equals $9.16 / month</p>
<a className="w-full block text-center rounded-full bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors mb-8" href="#">
                            Select Plan
                        </a>
<ul className="space-y-4 text-sm text-zinc-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>15,000+ Live Channels</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>50,000+ VODs</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>1 Device Connection</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 flex items-center justify-center gap-2 text-sm text-zinc-500">
<iconify-icon className="text-lg text-zinc-700" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Secure payments via Stripe. 7-day money-back guarantee.
                </div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-12">Start watching in 3 easy steps</h2>
<div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-px bg-zinc-200 -z-10"></div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-semibold text-lg mb-4 ring-8 ring-white">1</div>
<h4 className="text-base font-semibold text-zinc-900 mb-2">Choose Plan</h4>
<p className="text-sm text-zinc-500">Select a subscription tier and complete the secure checkout.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-semibold text-lg mb-4 ring-8 ring-white">2</div>
<h4 className="text-base font-semibold text-zinc-900 mb-2">Get Credentials</h4>
<p className="text-sm text-zinc-500">Receive your M3U link and Xtream API details instantly via email.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-semibold text-lg mb-4 ring-8 ring-white">3</div>
<h4 className="text-base font-semibold text-zinc-900 mb-2">Start Streaming</h4>
<p className="text-sm text-zinc-500">Enter details into your favorite app (Smarters, TiviMate) and enjoy.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-50 border-t border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-zinc-900">STRMN.</span>
<span className="text-xs text-zinc-400 border-l border-zinc-300 pl-2">© 2023 All rights reserved.</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Refund Policy</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-6 text-center md:text-left">
<p className="text-xs text-zinc-400 max-w-3xl">
                Disclaimer: We do not host, provide, archive, store, or distribute media of any kind, and act merely as an index (or directory) of media posted by other enthusiasts on the internet, which is completely outside of our control.
            </p>
</div>
</footer>

    </>
  );
}
