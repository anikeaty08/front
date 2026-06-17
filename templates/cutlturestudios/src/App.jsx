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



(function () {
const once = true;
document.addEventListener("DOMContentLoaded", () => {
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -5% 0px" });
}
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
window.__inViewIO.observe(el);
});
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
      

<div className="gradient-blur hidden md:block">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/50 backdrop-blur-md transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<svg className="text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeWidth="20" viewbox="0 0 100 100" width="20">
<path d="M75 25 C 75 -5, 25 -5, 25 25 C 25 60, 75 40, 75 75 C 75 105, 25 105, 25 75"></path>
</svg>
<span className="text-white tracking-tight text-sm uppercase opacity-80 group-hover:opacity-100 transition-opacity font-medium">
            Living Culture Studios
          </span>
</div>

<div className="hidden items-center text-xs font-medium text-zinc-400 gap-8 lg:flex">
<a className="hover:text-white transition-colors" href="#about">
            Our Design
          </a>
<a className="hover:text-white transition-colors" href="#explore">
            Our Spaces
          </a>
<a className="hover:text-white transition-colors" href="#offerings">
            Our Support
          </a>
<a className="hover:text-white transition-colors" href="#collaborate">
            Collaborate
          </a>
</div>

<a className="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-all flex items-center gap-2" href="HTML-template-as-a-near-pixel-faithful-single-page-React-project.html">
          Explore
          <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</nav>

<header className="relative w-full h-[100vh] min-h-[800px] overflow-hidden bg-zinc-950 flex items-center">

<div className="absolute inset-0">
<img alt="Forest Cabin" className="w-full h-full object-cover opacity-40 scale-105 duration-[20s] ease-out hover:scale-100 transition-transform grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38b9e48c-27d7-418e-bd02-9d98b2146694_1600w.webp"/>
</div>

<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-20 w-full px-6 pt-20">
<div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1400px] mr-auto ml-auto gap-x-12 gap-y-12 items-end">
<div className="lg:col-span-8">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-5xl font-medium text-white tracking-tighter mb-6">
              Retreat,
              <br/>
<span className="text-zinc-500">reimagined from the</span>
              inside out.
            </h1>
</div>
<div className="lg:col-span-4 lg:pb-3 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-light">
              A modular, scalable retreat operating system combining
              experiential design, regenerative hospitality, and nervous-system
              informed wellness.
            </p>
<div className="flex flex-wrap gap-3">
<a className="hover:bg-zinc-200 transition-colors flex gap-x-2 gap-y-2 items-center text-xs font-medium text-zinc-950 bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#explore">
                Explore Property
                <iconify-icon icon="solar:map-arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="glass-panel px-5 py-2.5 rounded-full text-white text-xs font-medium hover:bg-white/10 transition-colors">
                Book a consultation
              </button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-12 right-6 hidden lg:block z-20 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="glass-panel p-2 rounded-2xl w-64 transform hover:-translate-y-1 transition-transform duration-500 shadow-2xl">
<div className="relative rounded-xl overflow-hidden mb-3 h-32 w-full group">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/309407a0-e40c-4d1d-b1f9-bf12967acf91_800w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-black/60 transition-colors border border-white/10">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="px-2 pb-1">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-1 font-medium">
              Architecture
            </p>
<p className="text-zinc-200 text-sm leading-tight font-medium tracking-tight">
              Eco-Architected Suites
            </p>
</div>
</div>
</div>
</header>
<section className="md:py-32 scroll-mt-16 z-10 text-white bg-zinc-950 pt-24 pb-24 relative" id="offerings">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-20 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-6">
            We design the feeling first.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll border border-white/10 cursor-pointer">
<img alt="Executive Retreats" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1771830937026-3e3474fdd947?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3 block">
                01
              </span>
<h3 className="text-2xl md:text-3xl text-white tracking-tight mb-3 font-medium">
                Residential / Private Somatic Residencies
              </h3>
<p className="text-zinc-400 max-w-lg text-sm font-light leading-relaxed">
                Focused on high-impact corporate programs and adaptive
                leadership. Featuring high-impact resource kits and leadership
                transformational intensives.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll border border-white/10 cursor-pointer">
<img alt="Somatic Prep" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1738034950582-271276c5af7d?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3 block">
                02
              </span>
<h3 className="text-xl md:text-2xl text-white tracking-tight mb-3 font-medium">
                Executive &amp; Leadership Retreat Venues
              </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Focus on the "Premium Wellness" niche. Highlighting behavioral
                psychology, flow state optimization, and premium wellness
                products.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll border border-white/10 cursor-pointer">
<img alt="Regenerative Living" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1735949992167-6f0fb70f0973?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3 block">
                03
              </span>
<h3 className="text-xl md:text-2xl text-white tracking-tight mb-3 font-medium">
                Regenerative Living Intensives
              </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Focus on education, nature-based immersion, and lore/mythology.
                Featuring educational outdoor programs, somatic-led training,
                and seasonal intensives.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll border border-white/10 cursor-pointer">
<img alt="Somatic Reset" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1585815157396-ad62043f721b?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3 block">
                04
              </span>
<h3 className="text-xl md:text-2xl text-white tracking-tight mb-3 font-medium">
                Somatic Reset &amp; Recovery Hubs
              </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Focus on the "Drift" and nervous system recovery paths.
                Dedicated to recovery protocols, hydrotherapy, and "Saunagus"
                sessions.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll border border-white/10 cursor-pointer">
<img alt="Weddings &amp; Milestones" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1768179123386-a86a85f1c35c?w=1600&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3 block">
                05
              </span>
<h3 className="text-xl md:text-2xl text-white tracking-tight mb-3 font-medium">
                Milestone &amp; Celebration Locations
              </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Focused on high-fidelity event production, cash-flow stable
                venue partnerships, and celebration logistics.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-zinc-200 border-b pt-16 pb-16">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<p className="text-xs uppercase tracking-widest text-zinc-400 font-medium whitespace-nowrap">
          Trusted by visionaries at
        </p>
<div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-zinc-900" icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="simple-icons:tesla" width="24"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="simple-icons:uber" width="28"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="simple-icons:apple" width="24"></iconify-icon>
<iconify-icon className="text-zinc-900" icon="simple-icons:notion" width="28"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white overflow-hidden scroll-mt-16" id="about">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="order-2 lg:order-1 relative [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center mb-8">
<iconify-icon className="text-zinc-900" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl text-zinc-950 mb-8 leading-[1.1] tracking-tight font-medium">
              Living Culture Studios.
              <br/>
<span className="text-zinc-400">Emotional Architecture.</span>
</h2>
<p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 font-light max-w-lg">
              We sit at the intersection of retreat production, hospitality
              consultancy, and atmosphere-led spatial design.
            </p>
<div className="flex flex-col gap-8 pl-5 border-l border-zinc-200 ml-2">
<div className="mb-6">
<h3 className="text-sm font-medium text-zinc-950 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:pen-new-square-linear" width="16"></iconify-icon>
                  Experience Studio
                </h3>
<p className="leading-relaxed text-sm font-light text-zinc-500 max-w-md">
                  A creative partner for event design, taking a hands-on
                  approach to crafting intentional and memorable spaces. To help
                  turn a vision into a physical reality through thoughtful
                  "Emotional Architecture".
                </p>
</div>
<div className="mb-6">
<h3 className="text-sm font-medium text-zinc-950 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:star-fall-minimalistic-linear" width="16"></iconify-icon>
                  Atmospheric Consultant
                </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md font-light">
                  A strategic guide for anyone wanting to optimize the "vibe"
                  and feeling of their environment. Ensuring that the spatial
                  design serves the specific goals of the gathering, from focus
                  to restoration.
                </p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-950 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:box-linear" width="16"></iconify-icon>
                  Retreat Producer
                </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md font-light">
                  A comprehensive support system that handles the end-to-end
                  logistics of hosting. Managing the details—from venue
                  selection to on-site styling—so that hosts can focus entirely
                  on their community.
                </p>
</div>
</div>
<div className="mt-12 mb-4">
<h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-6 ml-2">
                Practical Infrastructure
              </h3>
<div className="flex flex-col gap-6 pl-5 border-l border-zinc-200 ml-2">
<div>
<h4 className="text-sm font-medium text-zinc-950 mb-1">
                    The Location
                    <span className="text-zinc-400 font-normal">
                      (Venue Scouting)
                    </span>
</h4>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md font-light">
                    We provide access to curated spaces like Wakecroft House,
                    Arcadia Hall, and Farm Land, ensuring the setting aligns
                    with the "Where place becomes practice" philosophy.
                  </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-950 mb-1">
                    The Logistics
                    <span className="text-zinc-400 font-normal">
                      (Infrastructure Rental)
                    </span>
</h4>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md font-light">
                    A full-service rental model for all required retreat
                    hardware, including high-quality tenting and modular setups
                    to transform any environment.
                  </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-950 mb-1">
                    The Team
                    <span className="text-zinc-400 font-normal">
                      (Facilitator Network)
                    </span>
</h4>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md font-light">
                    Access to a distributed ecosystem of facilitators and
                    specialists who can be integrated into your retreat to
                    provide specialized support.
                  </p>
</div>
</div>
</div>
<div className="mt-10 ml-2">
<a className="inline-flex items-center gap-2 text-zinc-950 font-medium text-sm group" href="#">
                Read our philosophy
                <iconify-icon className="text-zinc-500 group-hover:text-zinc-950 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] md:h-[700px] w-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-2xl overflow-hidden shadow-sm border border-zinc-200">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale-[20%]" src="https://images.unsplash.com/photo-1647023964567-74c855dac8ac?w=2560&amp;q=80"/>
</div>

<div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
<img className="w-full h-full object-cover grayscale-[10%]" src="https://images.unsplash.com/photo-1706112305366-89d4d8c5ef24?w=1600&amp;q=80"/>
<div className="absolute bottom-4 right-4 glass-panel-light rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse"></div>
<span className="text-[10px] font-medium uppercase tracking-widest text-zinc-900">
                  Now Booking
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 text-zinc-200 scroll-mt-16" id="explore">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div>
<span className="text-xs font-medium tracking-[0.15em] text-zinc-500 uppercase mb-3 block">
              Properties
            </span>
<h2 className="text-3xl md:text-5xl text-white tracking-tight font-medium">
              Featured Properties
            </h2>
</div>
<p className="text-zinc-400 max-w-sm text-sm font-light leading-relaxed">
            Atmosphere-led spatial design. Retreat, reimagined from the inside
            out across our diverse portfolio.
          </p>
</div>

<div className="flex flex-col gap-12 mt-12 w-full">

<div className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group cursor-pointer [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll border border-white/10">
<div className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02ec3fdf-4f8c-4433-b2c6-9793000d7100_1600w.webp\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
<div>
<div className="flex items-center gap-3 mb-5">
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium text-white uppercase tracking-widest">
                    Residential Anchor
                  </span>
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium text-white uppercase tracking-widest">
                    KwaZulu-Natal
                  </span>
</div>
<h3 className="text-3xl md:text-5xl text-white tracking-tight mb-3 font-medium">
                  Wakecroft House
                </h3>
<p className="text-zinc-400 max-w-xl text-sm font-light leading-relaxed">
                  The ultimate residential anchor combining atmosphere-led
                  design with somatic nervous-system recovery elements.
                </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="bg-white text-zinc-950 px-6 py-3 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                  View Details
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group cursor-pointer [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll border border-white/10">
<div className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 grayscale-[20%]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
<div>
<div className="flex items-center gap-3 mb-5">
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium text-white uppercase tracking-widest">
                    Industrial / Commercial
                  </span>
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium text-white uppercase tracking-widest">
                    Western Cape
                  </span>
</div>
<h3 className="text-3xl md:text-5xl text-white tracking-tight mb-3 font-medium">
                  Arcadia Hall, Cape Town CBD
                </h3>
<p className="text-zinc-400 max-w-xl text-sm font-light leading-relaxed">
                  An industrial-heritage gem in the heart of the city. Featuring
                  raw textures, high ceilings, and expansive volumes, it is a
                  masterclass in "Atmospheric Spatial Design" for urban
                  intensives. Ideal for Executive &amp; Leadership Retreats or
                  Milestone Gatherings that require a high-fidelity,
                  creative-industrial backdrop.
                </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="bg-white text-zinc-950 px-6 py-3 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                  View Details
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group cursor-pointer [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll border border-white/10">
<div className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
<div>
<div className="flex items-center gap-3 mb-5">
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium text-white uppercase tracking-widest">
                    Residential / Farm
                  </span>
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium text-white uppercase tracking-widest">
                    Western Cape
                  </span>
</div>
<h3 className="text-3xl md:text-5xl text-white tracking-tight mb-3 font-medium">
                  Farm Land, Tulbagh
                </h3>
<p className="text-zinc-400 max-w-xl text-sm font-light leading-relaxed">
                  A vast, rewilding landscape framed by the Tulbagh mountains.
                  This site embodies "Retreat, reimagined from the inside out,"
                  offering a grounding, off-the-grid environment for deep
                  restoration. Recommended for Regenerative Living Intensives
                  and Somatic Reset &amp; Recovery programs.
                </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="bg-white text-zinc-950 px-6 py-3 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                  View Details
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="py-24 md:py-32 bg-white text-zinc-950 scroll-mt-16 relative z-10" id="collaborate">
<div className="max-w-[800px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="mb-12 text-center">
<span className="text-xs font-medium tracking-[0.15em] text-zinc-500 uppercase mb-3 block">
            Start a Conversation
          </span>
<h2 className="text-3xl md:text-5xl text-zinc-950 tracking-tight font-medium mb-4">
            Let’s Build an Experience Together.
          </h2>
<p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light mx-auto max-w-lg">
            Whether you are looking for a specific location, need logistical
            support, or want to design a custom atmosphere, we are here to
            facilitate the process.
          </p>
</div>
<form className="space-y-8">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-900" htmlFor="interest">
              I am interested in...
            </label>
<div className="relative">
<select className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 w-full text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 font-light appearance-none" id="interest">
<option disabled="" selected="" value="">
                  Select an option
                </option>
<option value="Space Styling &amp; Design">
                  Space Styling &amp; Design (Experience Studio)
                </option>
<option value="Atmospheric Consulting">
                  Atmospheric Consulting for my Venue
                </option>
<option value="Full Retreat Production">
                  Full Retreat Production &amp; Logistics
                </option>
<option value="Curated Property Rentals">
                  Curated Property Rentals
                </option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-zinc-900" htmlFor="vision">
              The Vision
            </label>
<textarea className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 w-full text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 placeholder:text-zinc-400 font-light resize-y" id="vision" placeholder="Tell us a bit about the gathering you are dreaming of." rows="4"></textarea>
</div>
<div className="flex flex-col gap-3">
<label className="text-sm font-medium text-zinc-900 mb-1">
              Support Needed
            </label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="accent-zinc-900 w-4 h-4 cursor-pointer" type="checkbox"/>
<span className="text-sm text-zinc-600 font-light group-hover:text-zinc-900 transition-colors">
                Location Scouting
              </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="accent-zinc-900 w-4 h-4 cursor-pointer" type="checkbox"/>
<span className="text-sm text-zinc-600 font-light group-hover:text-zinc-900 transition-colors">
                Tenting &amp; Physical Infrastructure
              </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="accent-zinc-900 w-4 h-4 cursor-pointer" type="checkbox"/>
<span className="text-sm text-zinc-600 font-light group-hover:text-zinc-900 transition-colors">
                Facilitator Network Access
              </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="accent-zinc-900 w-4 h-4 cursor-pointer" type="checkbox"/>
<span className="text-sm text-zinc-600 font-light group-hover:text-zinc-900 transition-colors">
                Operational Management
              </span>
</label>
</div>
<button className="w-full bg-zinc-950 text-white px-6 py-4 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors mt-4" type="submit">
            Submit Inquiry
          </button>
<p className="text-xs text-zinc-400 text-center mt-6 font-light">
            Grounded in emotional architecture and the philosophy of "Retreat,
            reimagined from the inside out."
          </p>
</form>
</div>
</section>
<footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeWidth="20" viewbox="0 0 100 100" width="20">
<path d="M75 25 C 75 -5, 25 -5, 25 25 C 25 60, 75 40, 75 75 C 75 105, 25 105, 25 75"></path>
</svg>
<span className="text-sm uppercase tracking-tight text-white font-medium">
                Living Culture Studios
              </span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light mb-8">
              A sanctuary for the soul, hidden in the heart of the ancient
              forest. Disconnect from the noise, reconnect with yourself.
            </p>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="font-medium text-xs text-white uppercase tracking-widest mb-6">
              Resort
            </h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Villas
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Dining
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Spa &amp; Wellness
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Gallery
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-medium text-xs text-white uppercase tracking-widest mb-6">
              Experiences
            </h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Forest Bathing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Stargazing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Hiking Trails
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Private Events
                </a>
</li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="font-medium text-xs text-white uppercase tracking-widest mb-6">
              Newsletter
            </h4>
<p className="text-zinc-500 text-sm mb-4 font-light leading-relaxed">
              Subscribe to receive seasonal updates and exclusive retreat
              offers.
            </p>
<form className="flex gap-2">
<input className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 w-full text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-600 transition-all font-light" placeholder="Email address" type="email"/>
<button className="bg-white text-zinc-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                Subscribe
              </button>
</form>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-light">
<p>© 2024 Living Culture Studios. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
