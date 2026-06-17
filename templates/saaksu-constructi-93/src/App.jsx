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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60 transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">

<span className="text-lg font-semibold tracking-tighter text-slate-900 uppercase">Saaksu</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="hover:text-slate-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-slate-900 transition-colors" href="#about">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-xs font-semibold tracking-wide uppercase bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors" href="#contact">
                    Start a Project
                </a>
<button className="md:hidden text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Accepting new projects for Q3
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                    Precision in every <br className="hidden md:block"/> structural detail.
                </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    SAAKSU is a premier construction firm executing modern architectural visions with uncompromising quality and sustainable engineering practices.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" href="#work">
                        View Portfolio
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-md hover:bg-slate-50 transition-colors flex items-center justify-center" href="#about">
                        Our Process
                    </a>
</div>
</div>

<div className="max-w-7xl mx-auto mt-20 relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-2xl shadow-slate-200/50">
<div className="aspect-[16/9] md:aspect-[21/9] bg-slate-200">
<img alt="Modern concrete architecture" className="w-full h-full object-cover object-center" loading="lazy" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent mix-blend-multiply"></div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-1">120+</span>
<span className="text-xs font-medium tracking-wide text-slate-500 uppercase">Projects Completed</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-1">15</span>
<span className="text-xs font-medium tracking-wide text-slate-500 uppercase">Years Experience</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-1">Zero</span>
<span className="text-xs font-medium tracking-wide text-slate-500 uppercase">Compromise</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-1">4</span>
<span className="text-xs font-medium tracking-wide text-slate-500 uppercase">Industry Awards</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Disciplined Execution</h2>
<p className="text-base text-slate-500">We specialize in comprehensive construction solutions, bridging the gap between ambitious architectural design and physical reality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col h-full">
<div className="h-12 w-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Commercial Development</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">Scalable infrastructure and modern corporate spaces built for operational efficiency and aesthetic impact.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col h-full">
<div className="h-12 w-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">High-End Residential</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">Bespoke residential construction focusing on premium materials, spatial harmony, and meticulous finishing.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col h-full">
<div className="h-12 w-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:ruler-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Structural Renovation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">Adaptive reuse and complete overhauls of existing structures, preserving heritage while modernizing utility.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white border-y border-slate-200/60" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Selected Works</h2>
<p className="text-base text-slate-500">A curated collection of our recent endeavors, showcasing our commitment to structural integrity and design fidelity.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors pb-1 border-b border-slate-900" href="#">
                        View Complete Archive
                        <iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative block aspect-[4/5] rounded-xl overflow-hidden bg-slate-100" href="#">
<img alt="The Helix Tower" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-xs font-medium text-white/70 tracking-wide uppercase mb-2">Commercial</span>
<h3 className="text-xl font-semibold tracking-tight text-white">The Helix Tower</h3>
</div>
</a>

<a className="group relative block aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 lg:translate-y-12" href="#">
<img alt="Aura Residence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-xs font-medium text-white/70 tracking-wide uppercase mb-2">Residential</span>
<h3 className="text-xl font-semibold tracking-tight text-white">Aura Residence</h3>
</div>
</a>

<a className="group relative block aspect-[4/5] rounded-xl overflow-hidden bg-slate-100" href="#">
<img alt="Oasis Pavilion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-xs font-medium text-white/70 tracking-wide uppercase mb-2">Civic</span>
<h3 className="text-xl font-semibold tracking-tight text-white">Oasis Pavilion</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="contact">
<div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to build?</h2>
<p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl mx-auto font-light">
                        Partner with SAAKSU to bring your next architectural vision to life with unparalleled precision.
                    </p>
<a className="inline-flex items-center gap-2 bg-white text-slate-900 text-sm font-medium px-8 py-4 rounded-md hover:bg-slate-100 transition-colors" href="mailto:hello@saaksu.com">
                        Contact our team
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/60 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-xl font-semibold tracking-tighter text-slate-900 uppercase block mb-4">Saaksu</span>
<p className="text-sm text-slate-500 max-w-sm">
                    Setting the standard in modern construction, engineering, and architectural realization since 2008.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold tracking-wide text-slate-900 uppercase mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-wide text-slate-900 uppercase mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon> info@saaksu.com</a></li>
<li><a className="hover:text-slate-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 (555) 019-283</a></li>
<li><a className="hover:text-slate-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon> New York, NY</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p>© 2023 SAAKSU Construction. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
