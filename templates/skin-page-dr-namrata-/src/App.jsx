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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="font-serif text-xl tracking-tight text-stone-900" href="#">Dr. Rashmi Shetty</a>
<div className="hidden lg:flex items-center gap-8 text-sm text-stone-600">
<a className="hover:text-stone-900 transition" href="#">Home</a>
<a className="text-stone-900 font-medium" href="#">Concerns</a>
<a className="hover:text-stone-900 transition" href="#">Treatments</a>
<a className="hover:text-stone-900 transition" href="#">RA Supplements</a>
<a className="hover:text-stone-900 transition" href="#">Before &amp; After</a>
<a className="hover:text-stone-900 transition" href="#">Testimonial</a>
<a className="hover:text-stone-900 transition" href="#">Blogs</a>
<a className="hover:text-stone-900 transition" href="#">In News</a>
</div>
<a className="hidden lg:inline-flex items-center gap-2 bg-stone-900 text-white text-sm px-4 py-2 rounded-full hover:bg-stone-800 transition" href="#">
        Reach Us <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<button className="lg:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative h-[60vh] min-h-[420px] overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent"></div>
<div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
<div className="max-w-2xl text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs mb-6">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
        Now accepting consultations
      </div>
<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-5 leading-[1.05]">Skin Concerns</h1>
<p className="text-lg text-stone-200 max-w-xl leading-relaxed">Personalised dermatological care designed around your skin's unique needs — backed by 20+ years of clinical expertise.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-7">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">About</div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-8 leading-tight">Your face is what makes you, <em className="font-light">you.</em></h2>
<div className="space-y-5 text-base text-stone-600 leading-relaxed">
<p>Treating the face is an art and a science. Smooth, soft and glowing skin is the result of beautiful texture, proper hydration and luminosity. The skin on your face is fragile, more sensitive, and needs extra attention.</p>
<p>Most people believe skin care predominantly involves treating the surface — but in reality, it involves much more. Good skin care goes below the surface to understand the root cause of the problem.</p>
<p>Dr. Rashmi has more than <span className="text-stone-900 font-medium">20 years of experience</span> beautifying faces of various ethnicities. She personally consults, analyses and treats each client to bring out their natural best.</p>
</div>
<div className="mt-10 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 bg-stone-900 text-white text-sm px-5 py-3 rounded-full hover:bg-stone-800 transition" href="#">
          Book Consultation <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 bg-white border border-stone-200 text-sm px-5 py-3 rounded-full hover:border-stone-400 transition" href="#">
          View Treatments
        </a>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800"/>
</div>
<div className="grid grid-cols-3 gap-6 mt-8">
<div>
<div className="font-serif text-3xl tracking-tight">20+</div>
<div className="text-xs text-stone-500 mt-1">Years Experience</div>
</div>
<div>
<div className="font-serif text-3xl tracking-tight">15K+</div>
<div className="text-xs text-stone-500 mt-1">Happy Clients</div>
</div>
<div>
<div className="font-serif text-3xl tracking-tight">50+</div>
<div className="text-xs text-stone-500 mt-1">Treatments</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-stone-200 py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">What we treat</div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-5">Concerns we address</h2>
<p className="text-base text-stone-600 leading-relaxed">A holistic approach to skin health, addressing every concern with precision and care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-stone-300 transition">
<div className="w-11 h-11 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="circle-dot"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-5">Acne</h3>
<ul className="space-y-3 text-base text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Teenage Acne</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Adult Acne</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Post Acne Scars</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Post Acne Pigmentation</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>PCOD</li>
</ul>
<a className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-900 group-hover:gap-2.5 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-stone-300 transition">
<div className="w-11 h-11 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-5">Texture</h3>
<ul className="space-y-3 text-base text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Open Pores</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Scars</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Bumps on Forehead</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Flakey / Rough Skin</li>
</ul>
<a className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-900 group-hover:gap-2.5 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-stone-300 transition">
<div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="hexagon"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-5">Structure</h3>
<ul className="space-y-3 text-base text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Ideal Facial Structure</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Cheekbones</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Angle of Jaw</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Jawline</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Chin Enhancement</li>
</ul>
<a className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-900 group-hover:gap-2.5 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-stone-300 transition">
<div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="eye"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-5">Features</h3>
<ul className="space-y-3 text-base text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Eyes</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Nose</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Lips</li>
</ul>
<a className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-900 group-hover:gap-2.5 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-stone-300 transition">
<div className="w-11 h-11 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="palette"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-5">Colour &amp; Tone</h3>
<ul className="space-y-3 text-base text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Pigmentation &amp; Patchy Skin</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Tan</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Black-Spots</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Under-Eye / Dark Circles</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Red &amp; Sensitive Skin</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Freckles, Rosacea</li>
</ul>
<a className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-900 group-hover:gap-2.5 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-stone-300 transition">
<div className="w-11 h-11 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-5">Other Concerns</h3>
<ul className="space-y-3 text-base text-stone-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Facial Hair</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Excessive Sweating</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="check"></i>Remedies &amp; Prevention</li>
</ul>
<a className="mt-6 inline-flex items-center gap-1.5 text-sm text-stone-900 group-hover:gap-2.5 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">Watch</div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">Skin pigmentation care, explained.</h2>
<p className="text-base text-stone-600 leading-relaxed mb-8">Understand the science behind pigmentation and how the right treatment plan can restore your skin's natural radiance.</p>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-stone-700" data-lucide="microscope"></i>
</div>
<div>
<h4 className="text-base font-medium mb-1">Clinical analysis first</h4>
<p className="text-sm text-stone-600">Every plan begins with a thorough skin assessment.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-stone-700" data-lucide="leaf"></i>
</div>
<div>
<h4 className="text-base font-medium mb-1">Personalised treatment</h4>
<p className="text-sm text-stone-600">Tailored protocols for your skin type and goals.</p>
</div>
</div>
</div>
</div>
<div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 group cursor-pointer">
<img alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition">
<i className="w-7 h-7 text-stone-900 ml-1" data-lucide="play" fill="currentColor"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<div className="text-xs uppercase tracking-widest mb-2 opacity-80">Featured</div>
<div className="font-serif text-xl tracking-tight">Skin pigmentation care</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-stone-200 py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">Results</div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-5">Before &amp; After</h2>
<p className="text-base text-stone-600 leading-relaxed">Real transformations from clients treated at our clinic.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-xs rounded-full">Pigmentation</div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-xs rounded-full">Acne Treatment</div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=800"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-xs rounded-full">Skin Brightening</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 text-sm text-stone-900 hover:gap-3 transition-all" href="#">
        View all results <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">Our Services</div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-5">Skin Treatments</h2>
<p className="text-base text-stone-600 leading-relaxed">Advanced clinical procedures using the most cutting-edge skincare technologies.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
<div className="flex items-center gap-2 mb-5">
<div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center">
<i className="w-4 h-4 text-rose-700" data-lucide="droplet"></i>
</div>
<h3 className="text-base font-semibold">Peels</h3>
</div>
<ul className="space-y-2.5 text-sm text-stone-600">
<li>Pigment peel</li>
<li>Acne peel</li>
<li>Hydrating peel</li>
<li>Antioxidant &amp; Brightening</li>
<li>Black peel</li>
<li>Yellow peel</li>
<li>Argi peel</li>
<li>Phenol peel</li>
<li>Scalp peel</li>
<li>Instant Glow / Party peel</li>
</ul>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
<div className="flex items-center gap-2 mb-5">
<div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-700" data-lucide="flower"></i>
</div>
<h3 className="text-base font-semibold">Facials</h3>
</div>
<ul className="space-y-2.5 text-sm text-stone-600">
<li>Cleanup</li>
<li>Hydra facial</li>
<li>Medi facial</li>
<li>Oxy facial</li>
<li>Pollogen facial</li>
<li>Galvanic facial</li>
<li>RA Reboot ritual</li>
</ul>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
<div className="flex items-center gap-2 mb-5">
<div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-700" data-lucide="scissors"></i>
</div>
<h3 className="text-base font-semibold">Hair &amp; Scalp</h3>
</div>
<ul className="space-y-2.5 text-sm text-stone-600">
<li>Hair Oxy</li>
<li>Meso hair</li>
<li>PRP</li>
<li>Derma hair</li>
<li>Progenitor</li>
<li>Scalp peel</li>
</ul>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
<div className="flex items-center gap-2 mb-5">
<div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
<i className="w-4 h-4 text-orange-700" data-lucide="zap"></i>
</div>
<h3 className="text-base font-semibold">Energy Devices</h3>
</div>
<ul className="space-y-2.5 text-sm text-stone-600">
<li>Q-switched laser</li>
<li>RF / Fraxis</li>
<li>Laser Hair Reduction</li>
<li>Sigma lift</li>
<li>MNRF / Dermaroller</li>
<li>Morpheus 8</li>
<li>Thermage</li>
<li>Ultherapy</li>
<li>Coolsculpting</li>
<li>Mini Fx</li>
</ul>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
<div className="flex items-center gap-2 mb-5">
<div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
<i className="w-4 h-4 text-amber-700" data-lucide="syringe"></i>
</div>
<h3 className="text-base font-semibold">Injectables</h3>
</div>
<ul className="space-y-2.5 text-sm text-stone-600">
<li>IV</li>
<li>Botox / Underarm botox</li>
<li>Fillers</li>
<li>Profhilo</li>
<li>PRP</li>
<li>Skin Booster</li>
<li>Facial Thread Lifts</li>
</ul>
</div>
</div>
<div className="mt-12 p-6 bg-amber-50 border border-amber-100 rounded-2xl flex gap-4 items-start">
<i className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" data-lucide="info"></i>
<div className="text-sm text-stone-700">
<span className="font-semibold text-stone-900">Disclaimer: </span>The initial approach is always a detailed consultation and clinical analysis of your concern, after which medical care, home care, lifestyle adjustments and nutritional care is suggested.
    </div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
<div className="relative overflow-hidden rounded-3xl bg-stone-900 text-white p-10 lg:p-16">
<div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
<div className="absolute -left-20 -bottom-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"></div>
<div className="relative grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-5 leading-tight">Ready to begin your skincare journey?</h2>
<p className="text-base text-stone-300 mb-8 max-w-md">Book a personalised consultation with Dr. Rashmi Shetty and discover what your skin truly needs.</p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 bg-white text-stone-900 text-sm px-5 py-3 rounded-full hover:bg-stone-100 transition" href="#">
            Book Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 border border-white/20 text-sm px-5 py-3 rounded-full hover:bg-white/5 transition" href="#">
<i className="w-4 h-4" data-lucide="phone"></i> +91 9833055236
          </a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-5 bg-white/5 backdrop-blur border border-white/10 rounded-2xl">
<i className="w-5 h-5 text-amber-400 mb-3" data-lucide="map-pin"></i>
<div className="text-xs text-stone-400 mb-1">Location</div>
<div className="text-sm">Santacruz West, Mumbai</div>
</div>
<div className="p-5 bg-white/5 backdrop-blur border border-white/10 rounded-2xl">
<i className="w-5 h-5 text-amber-400 mb-3" data-lucide="clock"></i>
<div className="text-xs text-stone-400 mb-1">Hours</div>
<div className="text-sm">Mon – Sat, 10AM – 7PM</div>
</div>
<div className="p-5 bg-white/5 backdrop-blur border border-white/10 rounded-2xl">
<i className="w-5 h-5 text-amber-400 mb-3" data-lucide="award"></i>
<div className="text-xs text-stone-400 mb-1">Experience</div>
<div className="text-sm">20+ years</div>
</div>
<div className="p-5 bg-white/5 backdrop-blur border border-white/10 rounded-2xl">
<i className="w-5 h-5 text-amber-400 mb-3" data-lucide="heart"></i>
<div className="text-xs text-stone-400 mb-1">Rated</div>
<div className="text-sm">4.9 / 5 (2K+ reviews)</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-4 gap-10">
<div>
<div className="font-serif text-xl tracking-tight mb-4">Dr. Rashmi Shetty</div>
<p className="text-sm text-stone-600 leading-relaxed">Premium dermatology and aesthetic clinic in Mumbai.</p>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">Pages</div>
<ul className="space-y-2.5 text-sm text-stone-600">
<li><a className="hover:text-stone-900" href="#">Concerns</a></li>
<li><a className="hover:text-stone-900" href="#">Treatments</a></li>
<li><a className="hover:text-stone-900" href="#">Before &amp; After</a></li>
<li><a className="hover:text-stone-900" href="#">Testimonials</a></li>
<li><a className="hover:text-stone-900" href="#">Blogs</a></li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">Contact</div>
<ul className="space-y-2.5 text-sm text-stone-600">
<li>301/405, La Magasine</li>
<li>Santacruz West, Mumbai 400054</li>
<li>+91 9833055236</li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">Follow</div>
<div className="flex gap-3">
<a className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
<a className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
<div className="border-t border-stone-200 mt-12 pt-6 flex flex-wrap justify-between gap-4 text-xs text-stone-500">
<div>© All rights reserved by Dr. Rashmi Shetty</div>
<div className="flex gap-5">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition z-40" href="#">
<i className="w-6 h-6 text-white" data-lucide="message-circle"></i>
</a>


    </>
  );
}
