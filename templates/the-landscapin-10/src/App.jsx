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



      // Scroll Reveal Animation
      const revealElements = document.querySelectorAll('.reveal');

      const revealOptions = {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px"
      };

      const revealObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
          });
      }, revealOptions);

      revealElements.forEach(el => revealObserver.observe(el));

      // Before & After Slider Logic
      const sliders = document.querySelectorAll('.img-compare');

      sliders.forEach(slider => {
          let isDown = false;
          const beforeImage = slider.querySelector('.clip-before');
          const handle = slider.querySelector('.handle');

          const moveSlider = (e) => {
              const rect = slider.getBoundingClientRect();

              // Support for both touch and mouse events
              const clientX = e.touches && e.touches.length > 0
                  ? e.touches[0].clientX
                  : e.clientX;

              let x = Math.max(0, Math.min(clientX - rect.left, rect.width));
              const percent = (x / rect.width) * 100;

              beforeImage.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
              handle.style.left = `${percent}%`;
          };

          const startDrag = (e) => {
              isDown = true;
              slider.style.cursor = 'ew-resize';
              moveSlider(e);
          };

          const stopDrag = () => {
              isDown = false;
              slider.style.cursor = 'ew-resize';
          };

          const drag = (e) => {
              if (!isDown) return;
              e.preventDefault();
              moveSlider(e);
          };

          // Mouse Events
          slider.addEventListener('mousedown', startDrag);
          window.addEventListener('mouseup', stopDrag);
          window.addEventListener('mousemove', drag);

          // Touch Events
          slider.addEventListener('touchstart', startDrag, { passive: true });
          window.addEventListener('touchend', stopDrag);
          window.addEventListener('touchmove', drag, { passive: false });
      });

      // Mobile Menu Navigation Toggle (Simple representation)
      const menuBtn = document.querySelector('nav button');
      menuBtn.addEventListener('click', () => {
          alert('Mobile Navigation Menu Activated!');
      });
    


      function switchCompView(btn, index) {
        const container = btn.closest('.comparison-module');
        const btns = container.querySelectorAll('.comp-btn');
        btns.forEach((b, i) => {
          if(i === index) {
            b.className = 'comp-btn px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-md transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]';
          } else {
            b.className = 'comp-btn px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 text-sm font-medium rounded-md transition-all';
          }
        });
        const views = container.querySelectorAll('.comp-view');
        views.forEach((v, i) => {
          if(i === index) {
            v.classList.remove('hidden');
            setTimeout(() => {
              v.classList.remove('opacity-0', 'translate-y-4');
              v.classList.add('opacity-100', 'translate-y-0');
            }, 50);
          } else {
            v.classList.add('hidden', 'opacity-0', 'translate-y-4');
            v.classList.remove('opacity-100', 'translate-y-0');
          }
        });
      }
    
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1781181643/hf_20260611_122403_a7ca7f81-1341-4bb9-9199-17fac4062d4f_dkowiw.mp4"></video>
</div>

<nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-white" href="#">
<img alt="The Landscaping Croc Logo Text" className="sm:w-64 md:w-72 lg:w-80 w-48 h-auto max-h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5db4388b-e4ae-47d7-9c56-3082ddc2ab3c_1600w.png"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#work">
            Work
          </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#about">
            About
          </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#process">
            Process
          </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#faq">
            FAQ
          </a>
</div>
<div className="hidden md:flex">
<a className="group relative px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-md overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]" href="#contact">
<span className="relative z-10 flex items-center gap-2">
              Get Quote
              <iconify-icon className="transition-transform group-hover:translate-x-1" height="1.2em" icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</span>
<div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</a>
</div>
<button className="md:hidden text-white p-2">
<iconify-icon height="1.5em" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-[100svh] w-full overflow-hidden bg-black" id="home">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1781181643/hf_20260611_122403_a7ca7f81-1341-4bb9-9199-17fac4062d4f_dkowiw.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#09090b] z-10 pointer-events-none"></div>
</section>

<section className="py-24 relative border-t border-white/5 bg-black" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Our Services
          </h2>
<p className="text-base text-neutral-400 max-w-2xl">
            Precision work for every corner of your property. We handle the
            heavy lifting so you don't have to.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="1.5em" icon="solar:leaf-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Landscape Maintenance
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Consistent, sharp cuts and edging to keep your turf looking
              immaculate year-round.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="1.5em" icon="solar:scissors-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Tree &amp; Shrub Care
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Expert pruning, trimming, and health management for powerful,
              structured growth.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="1.5em" icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Yard Cleanups
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Total property resets. Debris removal, leaf clearing, and
              heavy-duty seasonal cleanups.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="1.5em" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Custom Projects
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              From hardscaping to complete redesigns, we build rugged, premium
              outdoor environments.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="1.5em" icon="solar:danger-triangle-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Demolition
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Controlled teardowns and removal of old structures, concrete, and
              hardscaping to give you a clean slate.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="flex group-hover:scale-110 transition-transform text-red-500 bg-neutral-900 w-12 h-12 border-neutral-800 border rounded-lg mb-6 items-center justify-center">
<iconify-icon height="1.5em" icon="solar:sprout-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
<iconify-icon className="" height="24" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" style={{color: 'rgb(239, 68, 68)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Landscaping
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Comprehensive design and installation to elevate your outdoor
              spaces with premium, long-lasting appeal.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="flex group-hover:scale-110 transition-transform text-red-500 bg-neutral-900 w-12 h-12 border-neutral-800 border rounded-lg mb-6 items-center justify-center">
<iconify-icon height="1.5em" icon="solar:hammer-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
<iconify-icon className="" height="24" icon="solar:panorama-outline" strokeWidth="1.5" style={{color: 'rgb(239, 68, 68)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Hardscaping
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Durable, structured outdoor builds including patios, walkways, and
              retaining walls engineered to last.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" height="24" icon="mingcute:ai-line" strokeWidth="1.5" style={{color: 'rgb(239, 68, 68)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Artificial Turf
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Flawless, low-maintenance synthetic grass installations for a
              perfectly green lawn year-round.
            </p>
</div>
<div className="group bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="1.5em" icon="solar:waterdrop-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
              Irrigation
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Smart water management and sprinkler systems designed to keep your
              landscape hydrated and healthy.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-black border-white/5 border-t pt-24 pb-24 relative" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col reveal text-center mb-16 items-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            The Proof Is in the Dirt
          </h2>
<p className="text-base text-neutral-400 max-w-2xl">
            Select a project below to view the side-by-side transformation.
          </p>
</div>
<div className="flex flex-col gap-16 w-full max-w-5xl mx-auto">

<div className="comparison-module w-full reveal active">
<div className="flex flex-wrap justify-center gap-3 mb-8">
<button className="comp-btn px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-md transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]" onclick="switchCompView(this, 0)">
                1
              </button>
<button className="comp-btn px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 text-sm font-medium rounded-md transition-all" onclick="switchCompView(this, 1)">
                2
              </button>
<button className="comp-btn px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 text-sm font-medium rounded-md transition-all" onclick="switchCompView(this, 2)">
                3
              </button>
</div>
<div className="relative w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-6 shadow-lg min-h-[300px]">

<div className="comp-view transition-all duration-500 transform translate-y-0 opacity-100 flex flex-col gap-8">
<div className="flex flex-col md:flex-row gap-4 sm:gap-6">
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="Before" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/576befac-1da9-4997-812a-52fe10a0b68b_800w.jpg"/>
<span className="absolute top-4 left-4 bg-black/80 text-neutral-400 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5 font-medium tracking-wide uppercase z-10 shadow-lg">
                      Before
                    </span>
</div>
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="After" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05d1a072-1b97-44d9-a8e1-bfb33a9c2b92_800w.jpg"/>
<span className="absolute top-4 right-4 bg-red-600/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] font-medium tracking-wide uppercase z-10">
                      After
                    </span>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 sm:gap-6">
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="Before" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fae9a7a0-b794-4c52-820c-4a24e995ba84_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-black/80 text-neutral-400 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5 font-medium tracking-wide uppercase z-10 shadow-lg">
                      Before
                    </span>
</div>
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="After" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfc85134-85fd-4807-9456-9beefdf81098_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-red-600/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] font-medium tracking-wide uppercase z-10">
                      After
                    </span>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 sm:gap-6">
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="Before" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d803f070-16ca-45cf-9a81-826697406288_800w.png"/>
<span className="absolute top-4 left-4 bg-black/80 text-neutral-400 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5 font-medium tracking-wide uppercase z-10 shadow-lg">
                      Before
                    </span>
</div>
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="After" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efcca05d-ed5e-450c-b643-a69596e0323a_800w.png"/>
<span className="absolute top-4 right-4 bg-red-600/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] font-medium tracking-wide uppercase z-10">
                      After
                    </span>
</div>
</div>
</div>

<div className="comp-view hidden transition-all duration-500 transform translate-y-4 opacity-0 flex flex-col gap-8">
<div className="flex flex-col md:flex-row gap-4 sm:gap-6">
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="Before" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdd5b2c4-eaed-4cba-bf3c-9cb3ded53e93_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-black/80 text-neutral-400 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5 font-medium tracking-wide uppercase z-10 shadow-lg">
                      Before
                    </span>
</div>
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="After" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8a3ae9a-4b5a-409d-ba14-6b709290b81a_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-red-600/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] font-medium tracking-wide uppercase z-10">
                      After
                    </span>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 sm:gap-6">
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="Before" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70c29c9d-abfb-4ad1-b487-937fe7dde0cf_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-black/80 text-neutral-400 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5 font-medium tracking-wide uppercase z-10 shadow-lg">
                      Before
                    </span>
</div>
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="After" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/838d2408-e2bd-47f9-92b0-b30298f0105f_1600w.png"/>
<span className="absolute top-4 right-4 bg-red-600/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] font-medium tracking-wide uppercase z-10">
                      After
                    </span>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 sm:gap-6">
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="Before" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65b3606a-a5b7-415e-b115-7eff28ebf7fd_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-black/80 text-neutral-400 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5 font-medium tracking-wide uppercase z-10 shadow-lg">
                      Before
                    </span>
</div>
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="After" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67220522-3372-4482-a523-1f24f51cbdec_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-red-600/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] font-medium tracking-wide uppercase z-10">
                      After
                    </span>
</div>
</div>
</div>

<div className="comp-view hidden transition-all duration-500 transform translate-y-4 opacity-0 flex flex-col gap-8">
<div className="flex flex-col md:flex-row gap-4 sm:gap-6">
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="Before" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/576befac-1da9-4997-812a-52fe10a0b68b_800w.jpg"/>
<span className="absolute top-4 left-4 bg-black/80 text-neutral-400 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/5 font-medium tracking-wide uppercase z-10 shadow-lg">
                      Before
                    </span>
</div>
<div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-neutral-800 group">
<img alt="After" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05d1a072-1b97-44d9-a8e1-bfb33a9c2b92_800w.jpg"/>
<span className="absolute top-4 right-4 bg-red-600/90 text-white text-xs px-3 py-1.5 rounded-md backdrop-blur-sm border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] font-medium tracking-wide uppercase z-10">
                      After
                    </span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="overflow-hidden bg-black border-white/5 border-t pt-24 pb-24 relative" id="instagram-work">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-16 reveal">
<div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(220,38,38,0.2)] text-red-500">
<iconify-icon height="1.5em" icon="solar:link-circle-linear" width="1.5em"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Here is More of Our Work
          </h2>
<p className="text-base text-neutral-400 max-w-2xl">
            Check out our latest projects, cleanups, and behind-the-scenes
            content on our social media.
          </p>
</div>
<div className="grid grid-cols-1 gap-6 w-full mx-auto items-center justify-center reveal sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
<div className="w-full transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(220,38,38,0.1)] rounded-xl overflow-hidden bg-black border border-neutral-800 p-8 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-[2px] mb-4">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center border-2 border-black">
<iconify-icon className="text-white" height="2em" icon="mdi:instagram" width="2em"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">
              The Landscaping Croc
            </h3>
<p className="text-sm text-neutral-400 mb-8">@thelandscapingcroc</p>
<a className="w-full py-3 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_20px_rgba(220,38,38,0.5)]" href="https://www.instagram.com/thelandscapingcroc/" target="_blank">
              Follow on Instagram
              <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</a>
</div>
<div className="w-full transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] rounded-xl overflow-hidden bg-black border border-neutral-800 p-8 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-400 to-blue-700 p-[2px] mb-4">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center border-2 border-black">
<iconify-icon className="text-white" height="2em" icon="mdi:facebook" width="2em"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">
              The Landscaping Croc
            </h3>
<p className="text-sm text-neutral-400 mb-8">@The-Landscaping-Croc</p>
<a className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_rgba(37,99,235,0.5)]" href="https://www.facebook.com/people/The-Landscaping-Croc/61590206188549/?mibextid=wwXIfr" target="_blank">
              Follow on Facebook
              <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</a>
</div>
<div className="w-full transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)] rounded-xl overflow-hidden bg-black border border-neutral-800 p-8 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-700 p-[2px] mb-4">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center border-2 border-black">
<iconify-icon className="text-white" height="2em" icon="mdi:google-maps" width="2em"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1">Google Reviews</h3>
<p className="text-lg text-yellow-500 tracking-widest mb-8 leading-none">
              ★★★★★
            </p>
<a className="w-full py-3 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_rgba(16,185,129,0.5)]" href="https://maps.app.goo.gl/kAnN6Wne5RnnexGY9" target="_blank">
              Leave us a review
              <iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-black" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative reveal order-2 lg:order-1">
<div className="relative rounded-3xl overflow-hidden border border-neutral-800 aspect-[4/5] md:aspect-[3/4] shadow-[0_0_50px_rgba(220,38,38,0.05)]">
<img alt="Landscaping equipment and truck" className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-center bg-cover absolute top-0 right-0 bottom-0 left-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d9c142-ea4a-4a91-a0d1-9ed62a53ec3a_1600w.jpg)]"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-red-600/10 border border-red-600/30 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
<div className="flex items-center gap-4 mb-2">
<div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
<iconify-icon icon="solar:medal-star-linear" width="1.5em"></iconify-icon>
</div>
<div className="">
<p className="text-white font-semibold tracking-tight text-lg">
                        No shortcuts.
                      </p>
</div>
</div>
<p className="text-neutral-300 text-sm ml-16">
                    Just hard work and premium results.
                  </p>
</div>
</div>
</div>
<div className="absolute -top-8 -left-8 w-40 h-40 bg-red-600/10 rounded-full blur-[50px]"></div>
<div className="-bottom-8 -right-8 blur-[50px] bg-red-600/10 w-40 h-40 rounded-full absolute"></div>
</div>
<div className="reveal order-1 lg:order-2 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-semibold uppercase tracking-widest mb-8">
<iconify-icon icon="solar:shield-check-bold" width="1.2em"></iconify-icon>
              Licensed &amp; Insured
            </div>
<h2 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-white tracking-tight mb-6">
              Our Story
              <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
                Landscaping Croc
              </span>
</h2>
<p className="md:text-lg leading-relaxed text-base text-neutral-400 mb-6">
              The Landscaping Croc was founded in 2024 in Monterey County with a
              simple goal — deliver reliable, high-quality landscaping and
              hardscape work done right the first time. What started as a small
              maintenance operation quickly grew through hard work and word of
              mouth into a full-service company.
            </p>
<p className="md:text-lg leading-relaxed text-base text-neutral-400 mb-10">
              Today, we specialize in everything from maintenance and cleanups
              to artificial turf, irrigation, pavers, and complete outdoor
              transformations. We take pride in our work and focus on building
              long-term relationships through consistency, communication, and
              results.
            </p>
<div className="grid grid-cols-2 gap-8 w-full pt-10 border-t border-neutral-800/50">
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  5
                  <span className="text-red-600">+</span>
</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mt-2">
                  Years Experience
                </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl md:text-5xl font-bold text-white tracking-tighter flex items-center">
                  100
                  <span className="text-red-600">%</span>
</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mt-2">
                  Satisfaction Focus
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            How We Work
          </h2>
<p className="text-base text-neutral-400 max-w-2xl">
            A seamless, no-nonsense approach to upgrading your outdoor space.
          </p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="desktop-line absolute top-10 left-0 w-full h-[2px] bg-neutral-900 z-0">
<div className="h-full bg-red-600 animate-flow-desktop drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
</div>

<div className="mobile-line absolute top-0 left-10 w-[2px] h-full bg-neutral-900 z-0">
<div className="w-full bg-red-600 animate-flow-mobile drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">

<div className="flex flex-col items-start md:items-center text-left md:text-center relative pl-24 md:pl-0 reveal">
<div className="absolute left-0 md:relative md:left-auto w-20 h-20 rounded-full border-2 text-white flex items-center justify-center text-2xl font-bold mb-6 node-1 transition-colors">
                1
              </div>
<h3 className="text-xl font-semibold text-white mb-3">
                Assessment &amp; Quote
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                We walk the property, listen to your goals, and give you a
                rock-solid, transparent price and timeline.
              </p>
</div>

<div className="flex flex-col items-start md:items-center text-left md:text-center relative pl-24 md:pl-0 reveal">
<div className="absolute left-0 md:relative md:left-auto w-20 h-20 rounded-full border-2 text-white flex items-center justify-center text-2xl font-bold mb-6 node-2 transition-colors">
                2
              </div>
<h3 className="text-xl font-semibold text-white mb-3">
                The Heavy Lifting
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Our crew arrives on time and executes the plan with
                commercial-grade equipment and ruthless precision.
              </p>
</div>

<div className="flex flex-col items-start md:items-center text-left md:text-center relative pl-24 md:pl-0 reveal">
<div className="absolute left-0 md:relative md:left-auto w-20 h-20 rounded-full border-2 text-white flex items-center justify-center text-2xl font-bold mb-6 node-3 transition-colors">
                3
              </div>
<h3 className="text-xl font-semibold text-white mb-3">
                Final Polish
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                We conduct a final walkthrough, clean up all debris, and ensure
                the property looks absolutely immaculate.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-black" id="faq">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
<p className="text-base text-neutral-400 max-w-2xl">
            Got questions? We've got answers. Here's everything you need to know
            about working with us.
          </p>
</div>
<div className="space-y-4 reveal">
<details className="group bg-black border border-neutral-800 rounded-xl hover:border-red-600/30 transition-colors">
<summary className="flex justify-between items-center p-6 list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer">
<h3 className="text-lg font-medium text-white tracking-tight">
                How much does landscaping cost?
              </h3>
<iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 -mt-2">
<p className="text-sm text-neutral-400 leading-relaxed">
                Every project is unique. Costs depend on the scope, materials,
                and property size. We provide custom, transparent quotes after
                assessing your specific needs.
              </p>
</div>
</details>
<details className="group bg-black border border-neutral-800 rounded-xl hover:border-red-600/30 transition-colors">
<summary className="flex justify-between items-center p-6 list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer">
<h3 className="text-lg font-medium text-white tracking-tight">
                Do you offer free estimates?
              </h3>
<iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 -mt-2">
<p className="text-sm text-neutral-400 leading-relaxed">
                Yes! We offer 100% free, no-obligation estimates. We'll walk
                your property, discuss your vision, and provide a rock-solid
                price.
              </p>
</div>
</details>
<details className="group bg-black border border-neutral-800 rounded-xl hover:border-red-600/30 transition-colors">
<summary className="flex justify-between items-center p-6 list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer">
<h3 className="text-lg font-medium text-white tracking-tight">
                How quickly can you start?
              </h3>
<iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 -mt-2">
<p className="text-sm text-neutral-400 leading-relaxed">
                Depending on our current schedule and the size of your project,
                we can typically begin within 1 to 2 weeks after estimate
                approval.
              </p>
</div>
</details>
<details className="group bg-black border border-neutral-800 rounded-xl hover:border-red-600/30 transition-colors">
<summary className="flex justify-between items-center p-6 list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer">
<h3 className="text-lg font-medium text-white tracking-tight">
                Do you bring your own materials?
              </h3>
<iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 -mt-2">
<p className="text-sm text-neutral-400 leading-relaxed">
                Absolutely. We source and supply all necessary premium
                materials, plants, and hardscaping elements to ensure
                top-quality results.
              </p>
</div>
</details>
<details className="group bg-black border border-neutral-800 rounded-xl hover:border-red-600/30 transition-colors">
<summary className="flex justify-between items-center p-6 list-none [&amp;::-webkit-details-marker]:hidden cursor-pointer">
<h3 className="text-lg font-medium text-white tracking-tight">
                Are you licensed and insured?
              </h3>
<iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 -mt-2">
<p className="text-sm text-neutral-400 leading-relaxed">
                Yes, we are fully licensed and insured. Your property is
                protected, and our work is guaranteed to meet the highest
                professional standards.
              </p>
</div>
</details>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 relative bg-black" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Ready to Transform Your Yard?
          </h2>
<p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Get in touch today for a free estimate. We bring the tools, you get
            the results.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
<form className="space-y-5 reveal bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl h-full flex flex-col justify-between" onsubmit="event.preventDefault(); alert('Form submission connected to backend!');">
<div className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    First Name
                  </label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    Last Name
                  </label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    Email Address
                  </label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    Phone Number
                  </label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                  Service Needed
                </label>
<select className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">
                    Select a service...
                  </option>
<option value="maintenance">Lawn Maintenance</option>
<option value="cleanup">Yard Cleanup</option>
<option value="demolition">Demolition</option>
<option value="custom">Custom Project</option>
<option value="irrigation">Irrigation</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                  Project Details
                </label>
<textarea className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-none" placeholder="Tell us about the property and what you're looking to get done..." required="" rows="4"></textarea>
</div>
</div>
<button className="w-full py-4 mt-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.5)] active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
              Request Free Estimate
              <iconify-icon icon="solar:alt-arrow-right-linear" width="1.2em"></iconify-icon>
</button>
</form>
<div className="reveal rounded-2xl overflow-hidden border border-white/5 shadow-2xl w-full h-[400px] lg:h-auto min-h-[400px] relative bg-neutral-900 group">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=The%20Landscaping%20Croc&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0', filter: 'invert(90%) hue-rotate(180deg) grayscale(10%)'}}></iframe>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
<a className="flex items-center gap-2 text-white mb-2" href="#">
<span className="text-lg font-semibold tracking-tighter uppercase text-white">
            The
            <span className="text-red-600">Landscaping</span>
            Croc
          </span>
</a>
<div className="flex flex-col items-center gap-3">
<div className="flex items-center gap-6">
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all" href="https://www.instagram.com/thelandscapingcroc/">
<iconify-icon className="" icon="mdi:instagram" width="1.2em"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all" href="https://www.facebook.com/people/The-Landscaping-Croc/61590206188549/?mibextid=wwXIfr">
<iconify-icon className="" icon="mdi:facebook" width="1.2em"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all" href="https://maps.app.goo.gl/kAnN6Wne5RnnexGY9" target="_blank">
<iconify-icon className="" icon="mdi:google-maps" width="1.2em"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
<span>Leave us a review</span>
<span className="text-yellow-500 text-base leading-none tracking-widest">
              ★★★★★
            </span>
</div>
</div>
<div className="w-full h-px bg-white/5 my-2"></div>
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500 uppercase tracking-widest">
<p className="">© 2023 The Landscaping Croc. All rights reserved.</p>
<div className="flex items-center gap-6">
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
