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

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md transition-all duration-300 border-white/10 bg-orange-950/50">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<svg className="opacity-80 group-hover:opacity-100 transition-opacity text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeWidth="20" viewBox="0 0 100 100" width="20">
<path d="M75 25 C 75 -5, 25 -5, 25 25 C 25 60, 75 40, 75 75 C 75 105, 25 105, 25 75"></path>
</svg>
<span className="tracking-tight text-sm uppercase opacity-80 group-hover:opacity-100 transition-opacity font-medium text-white font-sans">
            Living Culture Studios
          </span>
</div>

<div className="hidden items-center text-xs font-medium gap-8 lg:flex text-orange-400">
<a className="transition-colors hover:text-white font-sans" href="#about">
            Our Design
          </a>
<a className="transition-colors hover:text-white font-sans" href="#explore">
            Our Spaces
          </a>
<a className="transition-colors hover:text-white font-sans" href="#offerings">
            Our Support
          </a>
<a className="transition-colors hover:text-white font-sans" href="#collaborate">
            Collaborate
          </a>
</div>

<a className="px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 bg-white text-orange-950 hover:bg-orange-200 font-sans" href="HTML-template-as-a-near-pixel-faithful-single-page-React-project.html">
          Explore
          <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</nav>

<header className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex items-center bg-orange-950">

<div className="absolute inset-0">
<img alt="Forest Cabin" className="w-full h-full object-cover opacity-40 scale-105 duration-[20s] ease-out hover:scale-100 transition-transform grayscale-[30%]" src="/assets/5aaa2638-5813-4fc7-86c2-35fbcbc2bbdc_3840w.png" />
</div>

<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-orange-950 via-orange-950/40"></div>

<div className="relative z-20 w-full px-6 pt-20">
<div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1400px] mr-auto ml-auto gap-x-12 gap-y-12 items-end">
<div className="lg:col-span-8">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-5xl mb-6 text-white font-fraunces tracking-tight font-semibold">
              Retreat,
              <br className="" />
<span className="text-orange-500 font-fraunces tracking-tight font-semibold">reimagined from the</span>
              inside out.
            </h1>
</div>
<div className="lg:col-span-4 lg:pb-3 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm font-light text-orange-400 font-sans">
              A modular, scalable retreat operating system combining
              experiential design, regenerative hospitality, and nervous-system
              informed wellness.
            </p>
<div className="flex flex-wrap gap-3">
<a className="transition-colors flex gap-x-2 gap-y-2 items-center text-xs font-medium rounded-full pt-2.5 pr-5 pb-2.5 pl-5 hover:bg-orange-200 text-orange-950 bg-white font-sans" href="#explore">
                Explore Property
                <iconify-icon icon="solar:map-arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="glass-panel px-5 py-2.5 rounded-full text-xs font-medium transition-colors text-white hover:bg-white/10 font-sans">
                Book a consultation
              </button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-12 right-6 hidden lg:block z-20 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="glass-panel p-2 rounded-2xl w-64 transform hover:-translate-y-1 transition-transform duration-500 shadow-2xl">
<div className="relative rounded-xl overflow-hidden mb-3 h-32 w-full group">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="/assets/309407a0-e40c-4d1d-b1f9-bf12967acf91_800w.jpg" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer transition-colors border bg-black/40 hover:bg-black/60 border-white/10">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="px-2 pb-1">
<p className="text-xs text-orange-500 uppercase tracking-widest mb-1 font-medium font-sans">
              Architecture
            </p>
<p className="text-sm leading-tight font-medium tracking-tight text-orange-200 font-sans">
              Eco-Architected Suites
            </p>
</div>
</div>
</div>
</header>
<section className="md:py-32 scroll-mt-16 z-10 pt-24 pb-24 relative text-white bg-orange-950" id="offerings">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-20 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="md:text-5xl text-4xl mb-6 text-white font-fraunces tracking-tight font-semibold">
            We design the feeling first.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll border cursor-pointer border-white/10">
<img alt="Executive Retreats" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1771830937026-3e3474fdd947?w=1600&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-orange-950 via-orange-950/60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest uppercase mb-3 block text-orange-400 font-sans">
                01
              </span>
<h3 className="text-2xl md:text-3xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                Residential / Private Somatic Residencies
              </h3>
<p className="max-w-lg text-sm font-light leading-relaxed text-orange-400 font-sans">
                Focused on high-impact corporate programs and adaptive
                leadership. Featuring high-impact resource kits and leadership
                transformational intensives.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll border cursor-pointer border-white/10">
<img alt="Somatic Prep" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1738034950582-271276c5af7d?w=1600&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-orange-950 via-orange-950/60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest uppercase mb-3 block text-orange-400 font-sans">
                02
              </span>
<h3 className="text-xl md:text-2xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                Executive & Leadership Retreat Venues
              </h3>
<p className="text-sm font-light leading-relaxed text-orange-400 font-sans">
                Focus on the "Premium Wellness" niche. Highlighting behavioral
                psychology, flow state optimization, and premium wellness
                products.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll border cursor-pointer border-white/10">
<img alt="Regenerative Living" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1735949992167-6f0fb70f0973?w=1600&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-orange-950 via-orange-950/60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest uppercase mb-3 block text-orange-400 font-sans">
                03
              </span>
<h3 className="text-xl md:text-2xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                Regenerative Living Intensives
              </h3>
<p className="text-sm font-light leading-relaxed text-orange-400 font-sans">
                Focus on education, nature-based immersion, and lore/mythology.
                Featuring educational outdoor programs, somatic-led training,
                and seasonal intensives.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll border cursor-pointer border-white/10">
<img alt="Somatic Reset" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1585815157396-ad62043f721b?w=1600&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-orange-950 via-orange-950/60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest uppercase mb-3 block text-orange-400 font-sans">
                04
              </span>
<h3 className="text-xl md:text-2xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                Somatic Reset & Recovery Hubs
              </h3>
<p className="text-sm font-light leading-relaxed text-orange-400 font-sans">
                Focus on the "Drift" and nervous system recovery paths.
                Dedicated to recovery protocols, hydrotherapy, and "Saunagus"
                sessions.
              </p>
</div>
</div>

<div className="group relative h-[450px] rounded-2xl overflow-hidden [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll border cursor-pointer border-white/10">
<img alt="Weddings & Milestones" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1768179123386-a86a85f1c35c?w=1600&q=80" />
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 from-orange-950 via-orange-950/60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs font-medium tracking-widest uppercase mb-3 block text-orange-400 font-sans">
                05
              </span>
<h3 className="text-xl md:text-2xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                Milestone & Celebration Locations
              </h3>
<p className="text-sm font-light leading-relaxed text-orange-400 font-sans">
                Focused on high-fidelity event production, cash-flow stable
                venue partnerships, and celebration logistics.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b pt-16 pb-16 bg-white border-orange-200">
<div className="flex flex-col md:flex-row gap-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-[1400px] mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8 items-center justify-between">
<p className="text-xs uppercase tracking-widest font-medium whitespace-nowrap text-orange-400 font-sans">
          Trusted by visionaries at
        </p>
<div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-orange-900" icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon className="text-orange-900" icon="simple-icons:tesla" width="24"></iconify-icon>
<iconify-icon className="text-orange-900" icon="simple-icons:uber" width="28"></iconify-icon>
<iconify-icon className="text-orange-900" icon="simple-icons:apple" width="24"></iconify-icon>
<iconify-icon className="text-orange-900" icon="simple-icons:notion" width="28"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 md:py-32 overflow-hidden scroll-mt-16 bg-white" id="about">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="order-2 lg:order-1 relative [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="w-10 h-10 rounded-full border flex items-center justify-center mb-8 border-orange-200">
<iconify-icon className="text-orange-900" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl mb-8 leading-[1.1] text-orange-950 font-fraunces tracking-tight font-semibold">
              Living Culture Studios.
              <span className="text-orange-400 font-fraunces tracking-tight font-semibold">Emotional Architecture.</span><br className="" />
</h2>
<p className="text-orange-500 text-sm md:text-base leading-relaxed mb-8 font-light max-w-lg font-sans">
              We sit at the intersection of retreat production, hospitality
              consultancy, and atmosphere-led spatial design.
            </p>
<div className="flex flex-col gap-8 pl-5 border-l ml-2 border-orange-200">
<div className="mb-6">
<h3 className="text-sm font-medium mb-2 flex items-center gap-2 text-orange-950 font-sans">
<iconify-icon className="text-orange-500" icon="solar:pen-new-square-linear" width="16"></iconify-icon>
                  Experience Studio
                </h3>
<p className="leading-relaxed text-sm font-light text-orange-500 max-w-md font-sans">
                  A creative partner for event design, taking a hands-on
                  approach to crafting intentional and memorable spaces. To help
                  turn a vision into a physical reality through thoughtful
                  "Emotional Architecture".
                </p>
</div>
<div className="mb-6">
<h3 className="text-sm font-medium mb-2 flex items-center gap-2 text-orange-950 font-sans">
<iconify-icon className="text-orange-500" icon="solar:star-fall-minimalistic-linear" width="16"></iconify-icon>
                  Atmospheric Consultant
                </h3>
<p className="text-sm text-orange-500 leading-relaxed max-w-md font-light font-sans">
                  A strategic guide for anyone wanting to optimize the "vibe"
                  and feeling of their environment. Ensuring that the spatial
                  design serves the specific goals of the gathering, from focus
                  to restoration.
                </p>
</div>
<div className="">
<h3 className="text-sm font-medium mb-2 flex items-center gap-2 text-orange-950 font-sans">
<iconify-icon className="text-orange-500" icon="solar:box-linear" width="16"></iconify-icon>
                  Retreat Producer
                </h3>
<p className="text-sm text-orange-500 leading-relaxed max-w-md font-light font-sans">
                  A comprehensive support system that handles the end-to-end
                  logistics of hosting. Managing the details—from venue
                  selection to on-site styling—so that hosts can focus entirely
                  on their community.
                </p>
</div>
</div>
<div className="mt-12 mb-4">
<h3 className="text-xs uppercase tracking-widest font-medium mb-6 ml-2 text-orange-400 font-sans">
                Practical Infrastructure
              </h3>
<div className="flex flex-col gap-6 pl-5 border-l ml-2 border-orange-200">
<div>
<h4 className="text-sm font-medium mb-1 text-orange-950 font-sans">
                    The Location
                    <span className="font-normal text-orange-400 font-sans">
                      (Venue Scouting)
                    </span>
</h4>
<p className="text-sm text-orange-500 leading-relaxed max-w-md font-light font-sans">
                    We provide access to curated spaces like Wakecroft House,
                    Arcadia Hall, and Farm Land, ensuring the setting aligns
                    with the "Where place becomes practice" philosophy.
                  </p>
</div>
<div className="">
<h4 className="text-sm font-medium mb-1 text-orange-950 font-sans">
                    The Logistics
                    <span className="font-normal text-orange-400 font-sans">
                      (Infrastructure Rental)
                    </span>
</h4>
<p className="text-sm text-orange-500 leading-relaxed max-w-md font-light font-sans">
                    A full-service rental model for all required retreat
                    hardware, including high-quality tenting and modular setups
                    to transform any environment.
                  </p>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-orange-950 font-sans">
                    The Team
                    <span className="font-normal text-orange-400 font-sans">
                      (Facilitator Network)
                    </span>
</h4>
<p className="text-sm text-orange-500 leading-relaxed max-w-md font-light font-sans">
                    Access to a distributed ecosystem of facilitators and
                    specialists who can be integrated into your retreat to
                    provide specialized support.
                  </p>
</div>
</div>
</div>
<div className="mt-10 ml-2">
<a className="inline-flex items-center gap-2 font-medium text-sm group text-orange-950 font-sans" href="#">
                Read our philosophy
                <iconify-icon className="text-orange-500 group-hover:text-orange-950 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] md:h-[700px] w-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-2xl overflow-hidden shadow-sm border border-orange-200">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale-[20%]" src="https://images.unsplash.com/photo-1647023964567-74c855dac8ac?w=2560&q=80" />
</div>

<div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
<img className="w-full h-full object-cover grayscale-[10%]" src="https://images.unsplash.com/photo-1706112305366-89d4d8c5ef24?w=1600&q=80" />
<div className="absolute bottom-4 right-4 glass-panel-light rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-950"></div>
<span className="text-[10px] font-medium uppercase tracking-widest text-orange-900 font-sans">
                  Now Booking
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 scroll-mt-16 bg-orange-950 text-orange-200" id="explore">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="">
<span className="text-xs font-medium tracking-[0.15em] text-orange-500 uppercase mb-3 block font-sans">
              Properties
            </span>
<h2 className="text-3xl md:text-5xl text-white font-fraunces tracking-tight font-semibold">
              Featured Properties
            </h2>
</div>
<p className="max-w-sm text-sm font-light leading-relaxed text-orange-400 font-sans">
            Atmosphere-led spatial design. Retreat, reimagined from the inside
            out across our diverse portfolio.
          </p>
</div>

<div className="flex flex-col gap-12 mt-12 w-full">

<div className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group cursor-pointer [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll border border-white/10">
<div className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80" style={{backgroundImage: `url('/assets/02ec3fdf-4f8c-4433-b2c6-9793000d7100_1600w.webp')`}}></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-orange-950 via-orange-950/40"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
<div className="">
<div className="flex items-center gap-3 mb-5">
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white font-sans">
                    Residential Anchor
                  </span>
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white font-sans">
                    KwaZulu-Natal
                  </span>
</div>
<h3 className="text-3xl md:text-5xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                  Wakecroft House
                </h3>
<p className="max-w-xl text-sm font-light leading-relaxed text-orange-400 font-sans">
                  The ultimate residential anchor combining atmosphere-led
                  design with somatic nervous-system recovery elements.
                </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="px-6 py-3 rounded-full text-xs font-medium transition-colors flex items-center gap-2 bg-white text-orange-950 hover:bg-orange-200 font-sans">
                  View Details
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group cursor-pointer [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll border border-white/10">
<div className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 grayscale-[20%]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600')`}}></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-orange-950 via-orange-950/40"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
<div>
<div className="flex items-center gap-3 mb-5">
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white font-sans">
                    Industrial / Commercial
                  </span>
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white font-sans">
                    Western Cape
                  </span>
</div>
<h3 className="text-3xl md:text-5xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                  Arcadia Hall, Cape Town CBD
                </h3>
<p className="max-w-xl text-sm font-light leading-relaxed text-orange-400 font-sans">
                  An industrial-heritage gem in the heart of the city. Featuring
                  raw textures, high ceilings, and expansive volumes, it is a
                  masterclass in "Atmospheric Spatial Design" for urban
                  intensives. Ideal for Executive & Leadership Retreats or
                  Milestone Gatherings that require a high-fidelity,
                  creative-industrial backdrop.
                </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="px-6 py-3 rounded-full text-xs font-medium transition-colors flex items-center gap-2 bg-white text-orange-950 hover:bg-orange-200 font-sans">
                  View Details
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group cursor-pointer [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll border border-white/10">
<div className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80" style={{backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600')`}}></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-orange-950 via-orange-950/40"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
<div>
<div className="flex items-center gap-3 mb-5">
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white font-sans">
                    Residential / Farm
                  </span>
<span className="glass-panel px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white font-sans">
                    Western Cape
                  </span>
</div>
<h3 className="text-3xl md:text-5xl mb-3 text-white font-fraunces tracking-tight font-semibold">
                  Farm Land, Tulbagh
                </h3>
<p className="max-w-xl text-sm font-light leading-relaxed text-orange-400 font-sans">
                  A vast, rewilding landscape framed by the Tulbagh mountains.
                  This site embodies "Retreat, reimagined from the inside out,"
                  offering a grounding, off-the-grid environment for deep
                  restoration. Recommended for Regenerative Living Intensives
                  and Somatic Reset & Recovery programs.
                </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="px-6 py-3 rounded-full text-xs font-medium transition-colors flex items-center gap-2 bg-white text-orange-950 hover:bg-orange-200 font-sans">
                  View Details
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="py-24 md:py-32 scroll-mt-16 relative z-10 bg-white text-orange-950" id="collaborate">
<div className="max-w-[800px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="mb-12 text-center">
<span className="text-xs font-medium tracking-[0.15em] text-orange-500 uppercase mb-3 block font-sans">
            Start a Conversation
          </span>
<h2 className="text-3xl md:text-5xl mb-4 text-orange-950 font-fraunces tracking-tight font-semibold">
            Let’s Build an Experience Together.
          </h2>
<p className="text-orange-500 text-sm md:text-base leading-relaxed font-light mx-auto max-w-lg font-sans">
            Whether you are looking for a specific location, need logistical
            support, or want to design a custom atmosphere, we are here to
            facilitate the process.
          </p>
</div>
<form className="space-y-8">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-orange-900 font-sans" htmlFor="interest">
              I am interested in...
            </label>
<div className="relative">
<select className="border rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 font-light appearance-none bg-orange-50 border-orange-200 text-orange-900" id="interest">
<option className="font-sans" disabled selected value="">
                  Select an option
                </option>
<option className="font-sans" value="Space Styling & Design">
                  Space Styling & Design (Experience Studio)
                </option>
<option className="font-sans" value="Atmospheric Consulting">
                  Atmospheric Consulting for my Venue
                </option>
<option className="font-sans" value="Full Retreat Production">
                  Full Retreat Production & Logistics
                </option>
<option className="font-sans" value="Curated Property Rentals">
                  Curated Property Rentals
                </option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-orange-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-orange-900 font-sans" htmlFor="vision">
              The Vision
            </label>
<textarea className="border rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 placeholder:text-orange-400 font-light resize-y bg-orange-50 border-orange-200 text-orange-900" id="vision" placeholder="Tell us a bit about the gathering you are dreaming of." rows="4"></textarea>
</div>
<div className="flex flex-col gap-3">
<label className="text-sm font-medium mb-1 text-orange-900 font-sans">
              Support Needed
            </label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 cursor-pointer accent-orange-900" type="checkbox" />
<span className="text-sm font-light group-hover:text-orange-900 transition-colors text-orange-600 font-sans">
                Location Scouting
              </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 cursor-pointer accent-orange-900" type="checkbox" />
<span className="text-sm font-light group-hover:text-orange-900 transition-colors text-orange-600 font-sans">
                Tenting & Physical Infrastructure
              </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 cursor-pointer accent-orange-900" type="checkbox" />
<span className="text-sm font-light group-hover:text-orange-900 transition-colors text-orange-600 font-sans">
                Facilitator Network Access
              </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 cursor-pointer accent-orange-900" type="checkbox" />
<span className="text-sm font-light group-hover:text-orange-900 transition-colors text-orange-600 font-sans">
                Operational Management
              </span>
</label>
</div>
<button className="w-full px-6 py-4 rounded-lg text-sm font-medium transition-colors mt-4 bg-orange-950 text-white hover:bg-orange-800 font-sans" type="submit">
            Submit Inquiry
          </button>
<p className="text-xs text-center mt-6 font-light text-orange-400 font-sans">
            Grounded in emotional architecture and the philosophy of "Retreat,
            reimagined from the inside out."
          </p>
</form>
</div>
</section>
<footer className="pt-20 pb-10 border-t bg-orange-950 text-white border-white/5">
<div className="max-w-[1400px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeWidth="20" viewBox="0 0 100 100" width="20">
<path d="M75 25 C 75 -5, 25 -5, 25 25 C 25 60, 75 40, 75 75 C 75 105, 25 105, 25 75"></path>
</svg>
<span className="text-sm uppercase tracking-tight font-medium text-white font-sans">
                Living Culture Studios
              </span>
</div>
<p className="text-orange-500 text-sm leading-relaxed max-w-xs font-light mb-8 font-sans">
              A sanctuary for the soul, hidden in the heart of the ancient
              forest. Disconnect from the noise, reconnect with yourself.
            </p>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors border-white/10 text-orange-400 hover:text-white hover:border-white/30" href="#">
<iconify-icon icon="solar:instagram-linear" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors border-white/10 text-orange-400 hover:text-white hover:border-white/30" href="#">
<iconify-icon icon="solar:camera-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="font-medium text-xs uppercase tracking-widest mb-6 text-white font-sans">
              Resort
            </h4>
<ul className="space-y-3 text-sm text-orange-500 font-light">
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Villas
                </a>
</li>
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Dining
                </a>
</li>
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Spa & Wellness
                </a>
</li>
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Gallery
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-medium text-xs uppercase tracking-widest mb-6 text-white font-sans">
              Experiences
            </h4>
<ul className="space-y-3 text-sm text-orange-500 font-light">
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Forest Bathing
                </a>
</li>
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Stargazing
                </a>
</li>
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Hiking Trails
                </a>
</li>
<li>
<a className="transition-colors hover:text-white font-sans" href="#">
                  Private Events
                </a>
</li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="font-medium text-xs uppercase tracking-widest mb-6 text-white font-sans">
              Newsletter
            </h4>
<p className="text-orange-500 text-sm mb-4 font-light leading-relaxed font-sans">
              Subscribe to receive seasonal updates and exclusive retreat
              offers.
            </p>
<form className="flex gap-2">
<input className="border rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 placeholder:text-orange-600 transition-all font-light bg-orange-900 border-orange-800 text-white" placeholder="Email address" type="email" />
<button className="px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap bg-white text-orange-950 hover:bg-orange-200 font-sans" type="button">
                Subscribe
              </button>
</form>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-orange-500 font-light border-white/5">
<p className="font-sans">© 2024 Living Culture Studios. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors hover:text-white font-sans" href="#">
              Privacy Policy
            </a>
<a className="transition-colors hover:text-white font-sans" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
