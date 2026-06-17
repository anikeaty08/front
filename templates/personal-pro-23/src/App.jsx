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



        // Initialize Lucide icons
        lucide.createIcons();
    
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
      

<header className="absolute inset-x-0 top-0 z-50">
<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 flex items-center justify-center w-10 h-10 border border-white/20 bg-white/10 backdrop-blur-md rounded-lg" href="#">
<span className="sr-only">Personal Pro</span>
<span className="text-xl font-semibold tracking-tight text-white">P</span>
</a>
</div>
<div className="hidden lg:flex lg:gap-x-10">
<a className="text-base font-medium leading-6 text-white/90 hover:text-white transition-colors" href="#what-i-do">Who I am</a>
<a className="text-base font-medium leading-6 text-white/90 hover:text-white transition-colors" href="#who-i-am">What I do</a>
<a className="text-base font-medium leading-6 text-white/90 hover:text-white transition-colors" href="#social">Social media</a>
<a className="text-base font-medium leading-6 text-white/90 hover:text-white transition-colors" href="#contact">Contacts</a>
</div>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
<a className="rounded-full bg-white/10 px-5 py-2.5 text-base font-medium text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 backdrop-blur-md transition-all" href="#">Download</a>
</div>
</nav>
</header>

<div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">

<img alt="Team working" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950"></div>
<div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto mt-16">
<h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white mb-8">
                Personal <span className="font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400">pro</span>
</h1>
<p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                Crafting digital experiences with precision and passion. Discover my journey and what I can build for you.
            </p>
<div className="mt-12 flex items-center justify-center gap-x-6">
<a className="group flex flex-col items-center gap-3 text-base font-medium text-white/80 hover:text-white transition-colors" href="#what-i-do">
                    Check me out
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 group-hover:bg-white/20 transition-all backdrop-blur-sm">
<i className="h-5 w-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</a>
</div>
</div>
</div>

<section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden" id="what-i-do">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-50/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">What I do</h2>
<p className="mt-6 text-lg text-slate-600 leading-relaxed">Specialized in creating robust, scalable, and visually stunning digital solutions tailored to your unique needs.</p>
</div>
<div className="mx-auto mt-20 grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">

<div className="flex flex-col items-center text-center group">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm ring-1 ring-indigo-200/50 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
<i className="h-8 w-8" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Design &amp; Content</h3>
<p className="text-lg text-slate-600 leading-relaxed flex-auto">Crebitate tunica die et armatis nihil muros <span className="font-medium text-slate-900">mandato obscuro</span> Polam prope celeri.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm ring-1 ring-emerald-200/50 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
<i className="h-8 w-8" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Audio &amp; Consulting</h3>
<p className="text-lg text-slate-600 leading-relaxed flex-auto">Miaci celeri non <span className="font-medium text-slate-900">non pavceids</span> si hostes rapacium vastabant nec tamen <span className="font-medium text-slate-900">ultro</span> vantur.</p>
<a className="mt-6 inline-flex items-center gap-2 text-base font-medium text-emerald-600 hover:text-emerald-700" href="#">
                        Listen to an extract <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="flex flex-col items-center text-center group">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 shadow-sm ring-1 ring-rose-200/50 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
<i className="h-8 w-8" data-lucide="copy" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Replication &amp; Scale</h3>
<p className="text-lg text-slate-600 leading-relaxed flex-auto">Retentabant dubitatur esset Lotophagi domicilium <span className="font-medium text-slate-900">virtutum humanitatis</span> ingenuos.</p>
<a className="mt-6 inline-flex items-center gap-2 text-base font-medium text-rose-600 hover:text-rose-700" href="#">
                        Read an extract <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="mt-20 flex justify-center">
<a className="rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white shadow-md hover:bg-slate-800 hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" href="#who-i-am">
                    Find out who I am
                </a>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-slate-900" id="who-i-am">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition duration-500"></div>
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-slate-800">
<img alt="Working session" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/20"></div>

<div className="absolute inset-0 flex items-center justify-center">
<span className="text-2xl font-medium tracking-tight text-white/90 drop-shadow-md backdrop-blur-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10">Creative Process</span>
</div>
</div>
</div>

<div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-8">Who I am</h2>
<div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
<p>This is the "About Me" sample section, here you will write information about yourself or your business.</p>
<p>With the modern rich-text editor in <a className="text-indigo-400 hover:text-indigo-300 border-b border-indigo-400/30 hover:border-indigo-300 transition-colors" href="#">edit mode</a> you can easily modify this text, add fonts, <span className="italic font-normal text-white">style italic</span>, <span className="font-medium text-white">bold type</span>, and integrate images &amp; links.</p>
<p>People will get to know you better if your message is clear, authentic, and straight forward.</p>
<p className="pt-4 text-base font-medium text-white">
                            To start editing now <a className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 ml-1" href="#">click here <i className="h-4 w-4" data-lucide="external-link" strokeWidth="1.5"></i></a>
</p>
</div>
<div className="mt-10">
<a className="inline-flex rounded-full bg-indigo-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 hover:shadow-indigo-500/40 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" href="#contact">
                            Contact me
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">Contact me</h2>
<p className="mt-4 text-xl text-slate-500">yeah, go ahead!</p>
<div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">

<div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-8">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Telephone</h3>
<p className="text-lg text-slate-600">+0 (1)2 34 56 78</p>
</div>

<div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-8">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Openings</h3>
<div className="text-lg text-slate-600 space-y-1">
<p>Monday - Friday: 9am - 6pm</p>
<p>Saturday: 9am - 2pm</p>
<p className="text-slate-400">Sunday: Closed</p>
</div>
</div>

<div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-8">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Address</h3>
<div className="text-lg text-slate-600 space-y-1">
<p>10 rue de Example</p>
<p>75006 Paris</p>
<p>France</p>
</div>
</div>

<div className="flex flex-col items-center pt-8 sm:pt-0 sm:px-8">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="send" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">E-mail</h3>
<a className="text-lg text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-4 decoration-indigo-200" href="mailto:your@email.here">your@email.here</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 border-t border-white/5" id="social">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Social profiles</h2>
<p className="text-lg text-slate-400 mb-10 font-light">follow me ..</p>
<div className="flex items-center justify-center gap-8">
<a className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all" href="#">
<i className="h-6 w-6 text-slate-300 group-hover:text-white transition-colors" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all" href="#">
<i className="h-6 w-6 text-slate-300 group-hover:text-white transition-colors" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center text-center">
<p className="text-lg text-slate-400 mb-2">A footer phrase goes here</p>
<p className="text-base text-slate-500 font-light mb-8">and subtitle here</p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-slate-500">
<p>You want to download other add-ons? <a className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-2" href="#">click here</a></p>
<p className="flex items-center gap-1">Developed with <i className="h-3 w-3 fill-slate-500 text-slate-500" data-lucide="heart" strokeWidth="1.5"></i> by <a className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-2" href="#">Matteo</a></p>
</div>
</div>
</footer>


    </>
  );
}
