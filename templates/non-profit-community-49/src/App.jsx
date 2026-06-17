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



            (function() {
              const initHero = () => {
                const observerOptions = { threshold: 0.1 };
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('reveal-active');
                    }
                  });
                }, observerOptions);

                document.querySelectorAll('#etheria-hero .reveal-item').forEach(el => observer.observe(el));

                const heroBg = document.getElementById('hero-bg-img');
                window.addEventListener('scroll', () => {
                  const scrollPosition = window.scrollY;
                  if (scrollPosition < window.innerHeight && heroBg) {
                    heroBg.style.transform = `translateY(${scrollPosition * 0.35}px)`;
                  }
                });
              };

              if (document.readyState === 'complete') initHero();
              else window.addEventListener('load', initHero);
            })();
          
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
      
<header className="sticky z-[100] bg-zinc-950/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex md:px-12 md:pt-4 w-full max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-4 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex gap-3 items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdfb4f4e-4c75-4c8d-99e6-68d33902b860_1600w.png)] bg-cover rounded" href="#"></a>
</div>
<nav className="hidden md:flex text-sm text-neutral-300 gap-x-6 gap-y-6 items-center">
<a className="hover:text-white transition-colors text-base font-medium font-poppins" href="#new">
            About
          </a>
<div className="relative group">
<button className="hover:text-white transition-colors text-base flex items-center gap-1 focus:outline-none font-medium font-poppins">
              Services
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-200 group-hover:-scale-y-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="absolute left-0 top-full pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50">
<div className="w-56 rounded-xl bg-zinc-950 border border-white/10 shadow-xl py-2 flex flex-col">
<a className="px-4 py-2 text-base text-neutral-300 hover:text-white hover:bg-white/5 transition-colors font-medium font-poppins" href="#collision">
                  Collision Repair
                </a>
<a className="px-4 py-2 text-base text-neutral-300 hover:text-white hover:bg-white/5 transition-colors font-medium font-poppins" href="#painting">
                  Auto Painting
                </a>
<a className="px-4 py-2 text-base text-neutral-300 hover:text-white hover:bg-white/5 transition-colors font-medium font-poppins" href="#dent">
                  Paintless Dent Repair
                </a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors text-base font-medium font-poppins" href="#platforms">
            Locations
          </a>
<a className="hover:text-white transition-colors text-base font-medium font-poppins" href="#deals">
            Certifications
          </a>
<div className="relative group">
<button className="hover:text-white transition-colors flex focus:outline-none text-base font-medium gap-x-1 gap-y-1 items-center font-poppins">
              Support
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-200 group-hover:-scale-y-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9-0 top-full pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50"></path>
</svg>
</button>
</div>
</nav>
<div className="flex items-center gap-x-4">




<a className="hover:bg-blue-900 hover:text-white/100 hover:border-blue-900 transition-all flex items-center justify-center gap-2 sm:w-auto text-base font-medium text-black font-poppins bg-neutral-200 w-full border-white/100 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm" href="tel:312-555-0198">
  Get started
</a><button aria-label="Open menu" className="md:hidden inline-flex text-white w-10 h-10 ring-0 rounded-none items-center justify-center">
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 12h16"></path>
<path className="" d="M4 18h16"></path>
<path className="" d="M4 6h16"></path>
</svg>
</button>
</div>
</div>
</header>
<section className="min-h-screen flex overflow-hidden bg-black pt-8 relative gap-x-y-2 gap-y-2 items-start" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="z-0 absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="bg-gradient-to-r from-black via-black/90 to-transparent relative top-0 right-0 bottom-0 left-0"></div>
<img alt="Euro Collision Auto Body Shop Exterior at Dusk" className="object-center opacity-30 mix-blend-luminosity w-full h-full object-cover pt-2 pb-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d59da34f-dbb6-4269-9691-2ab299c48da3_3840w.png" style={{maskImage: 'linear-gradient(0deg, transparent, black 40%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 40%, black 100%, transparent)'}}/>
<section className="relative h-screen w-full overflow-hidden bg-stone-900 text-[#F2F0EB]" id="etheria-hero" style={{fontFamily: '\'Inter\', sans-serif'}}>

<style>
            @keyframes revealFlow {
              0% {
                opacity: 0;
                transform: translateY(40px) scale(0.98);
                filter: blur(12px);
              }

              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
              }
            }

            .reveal-item {
              opacity: 0;
              will-change: transform, opacity, filter;
            }

            .reveal-active {
              animation: revealFlow 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) both;
            }

            .delay-100 {
              animation-delay: 100ms;
            }

            .delay-200 {
              animation-delay: 200ms;
            }

            .delay-300 {
              animation-delay: 300ms;
            }

            .delay-400 {
              animation-delay: 400ms;
            }

            .delay-500 {
              animation-delay: 500ms;
            }
          </style>

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Serene Portrait" className="absolute left-0 -top-[10%] h-[120%] w-full object-cover opacity-60 mix-blend-overlay will-change-transform" id="hero-bg-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/137a8e52-96bb-4cf9-847b-3152b677ef0c_3840w.png" style={{transform: 'translateY(278.95px)'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<nav className="relative z-20 flex w-full items-center justify-between px-6 pt-8 md:px-12">
<div className="flex items-center gap-2 reveal-item delay-100">
<iconify-icon className="text-3xl" icon="solar:tornado-small-outline" style={{color: '#F2F0EB'}}></iconify-icon>
<span className="text-2xl text-white tracking-tight font-semibold font-poppins" style={{fontFamily: '"DM Sans", sans-serif'}}>
                Etheria
              </span>
</div>
<div className="hidden items-center gap-12 text-sm font-medium tracking-wide text-white/80 md:flex">
<a className="reveal-item delay-200 tracking-tighter transition-colors hover:text-white font-medium font-poppins" href="#">
                Expertise
              </a>
<a className="reveal-item delay-300 tracking-tighter transition-colors hover:text-white font-medium font-poppins" href="#">
                Solutions
              </a>
<a className="reveal-item delay-400 tracking-tighter transition-colors hover:text-white font-medium font-poppins" href="#">
                Research
              </a>
<a className="reveal-item delay-500 tracking-tighter transition-colors hover:text-white font-medium font-poppins" href="#">
                Insights
              </a>
</div>
<div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/70 md:flex reveal-item delay-500">
<span className="tracking-tighter font-medium font-poppins">+1-800-ETHERIA</span>
<a className="group flex items-center gap-1 text-white transition-opacity hover:opacity-80 tracking-tighter font-medium font-poppins" href="#">
                Consult With Us
                <iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<button className="text-white md:hidden reveal-item">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<div className="relative z-10 flex h-[calc(100vh-100px)] flex-col justify-end px-6 pb-12 md:px-12 md:pb-20">
<div className="mb-auto flex w-full justify-between pt-12 text-xs font-medium tracking-wider text-white/40 reveal-item delay-300">
<span className="uppercase tracking-tighter font-medium font-poppins">
                // Exclusive intelligence for the future of business.
              </span>
<span className="tracking-tighter font-medium font-poppins">©2026</span>
</div>
<div className="flex flex-col items-end gap-12 md:flex-row md:items-end md:justify-between">
<h1 className="max-w-4xl text-5xl leading-[1.1] text-white reveal-item delay-100 md:text-7xl lg:text-8xl tracking-tight font-light font-poppins" style={{fontFamily: '"DM Sans", sans-serif'}}>
                Ascending Your Enterprise to a State of
                <span className="text-white/90 tracking-tight font-light">Algorithmic Perfection.</span>
</h1>
<div className="flex max-w-sm flex-col gap-8 reveal-item delay-300">
<p className="text-lg leading-relaxed tracking-tighter text-white/80 font-medium font-poppins">
                  Intelligence is not just data processing—it is an art, a
                  strategy, and the finest investment for your future.
                </p>
<a className="group flex w-fit items-center gap-3 rounded-full bg-[#F2F0EB] px-8 py-4 text-sm tracking-tighter text-stone-900 transition-all hover:scale-105 hover:bg-white hover:shadow-lg font-medium font-poppins" href="#">
                  Explore Intelligence
                  <iconify-icon className="text-lg transition-transform group-hover:rotate-45" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>

</section>
<a className="hidden md:inline-flex items-center justify-center hover:bg-white/15 text-base text-white bg-white/10 h-10 border-white/10 border rounded-full pr-4 pl-4 font-medium font-poppins" href="#signin">
          Get started
        </a>
</div>
<div className="-multi md:px-12 md:bg-clip-text md:text-transparent z-10 text-center w-full max-w-7xl max-h-min mr-auto ml-auto pt-2 pr-6 pb-20 pl-6">
<div className="animate-fade-up flex flex-col text-center max-w-4xl mr-auto ml-auto items-center justify-center">
<h2 className="leading-tight md:text-xl text-xl font-semibold text-white tracking-tight text-center mt-6 mb-6 font-poppins">
      Serving Chicagoland since 1998
    </h2>
<h1 className="animate-text-shimmer text-[10vw] sm:text-[6vw] lg:text-[6vw] leading-[1.05] font-semibold tracking-tight font-poppins text-center max-h-fit mr-auto ml-auto pb-2" style={{animation: '30s ease-in-out 0s infinite normal none running text-shimmer', backgroundImage: 'linear-gradient(to right, rgb(177, 216, 255) 10%, rgb(255, 255, 255) 30%, rgb(255, 228, 142) 45%, rgb(255, 255, 200) 70%, rgb(255, 228, 142) 80%, rgb(177, 216, 255) 90%)'}}>
      Chicago's premier
    </h1>
<h1 className="animate-text-shimmer text-[10vw] sm:text-[6vw] lg:text-[6vw] leading-[1.05] font-semibold tracking-tight font-poppins text-center max-h-fit mr-auto ml-auto pb-2" style={{animation: '25s ease-in-out 0s infinite normal none running text-shimmer', backgroundImage: 'linear-gradient(to right, rgb(177, 216, 255) 25%, rgb(255, 255, 255) 35%, rgb(255, 228, 142) 45%, rgb(255, 255, 181) 80%, rgb(255, 228, 142) 90%, rgb(177, 216, 255) 94%)'}}>
      I-CAR Gold Class
    </h1>
<h1 className="animate-text-shimmer text-[10vw] sm:text-[6vw] lg:text-[6vw] leading-[1.05] font-semibold tracking-tight text-center max-h-fit mr-auto ml-auto font-poppins" style={{animation: '17s ease-in-out 0s infinite normal none running text-shimmer', backgroundImage: 'linear-gradient(to left, rgb(255, 255, 255) 5%, rgb(177, 216, 255) 20%, rgb(255, 255, 255) 30%, rgb(255, 228, 142) 45%, rgb(255, 255, 181) 50%, rgb(255, 228, 142) 60%, rgb(177, 216, 255) 80%, rgb(255, 255, 255) 90%)'}}>
      collision center.
    </h1>
<h2 className="leading-tight md:text-xl text-lg font-semibold text-white tracking-tight text-center mt-10 font-poppins">
      Factory-certified care for world-class automobiles.
    </h2>
<p className="md:text-2xl leading-relaxed text-lg text-zinc-400 font-normal max-w-2xl mb-10 text-center mx-auto mt-6">
</p>
<div className="flex flex-col sm:flex-row w-full pb-7 gap-x-10 gap-y-4 items-center justify-center">
<a className="hover:bg-blue-900 hover:text-white/100 hover:border-blue-900 transition-all flex items-center justify-center gap-2 sm:w-auto text-lg font-medium text-black font-poppins bg-neutral-200 w-full border-white/100 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="tel:312-555-0198">
        Start quote
      </a>
<a className="hover:border-neutral-400 hover:bg-neutral-400 transition-all flex items-center justify-center gap-2 sm:w-auto text-lg text-white w-full border-white border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm font-medium font-poppins" href="tel:312-555-0198">
        Contact us
      </a>
</div>
</div>
<section className="fade-in fade-in-delay-4 z-10 w-full h-30 max-h-48 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl max-h-fit mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12"></div>

<div className="overflow-hidden max-h-fit relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}></div>

</div>
</div>
<style className="">
      @keyframes ticker {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-100%);
        }
      }

      .ticker-track {
        animation: ticker 40s linear infinite;
        width: calc(200% + 16px);
      }

      .ticker-track:hover {
        animation-play-state: paused;
      }
    </style>
</section>
<section className="fade-in fade-in-delay-4 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12"></div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(270deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(270deg, transparent, black 10%, black 90%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black-20 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}></div>

<div className="ticker-track flex pt-2 pb-2 items-center">

<div className="flex shrink-0 pr-8 pl-8 gap-x-16 gap-y-0 items-center">
<img alt="Genesis Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/540e09e4-b86f-46c1-8140-a64d12db24db_3840w.png?w=800&amp;q=80"/>
<img alt="Lexus Logo" className="w-auto h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/529c5abc-50dc-40eb-9122-5f4c4c6bdfbe_320w.png"/>
<img alt="Aston Martin Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/137a8e52-96bb-4cf9-847b-3152b677ef0c_800w.png"/>
<img alt="Mercedes Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/465a7c4e-39b9-45f8-ac90-439956abcaa8_1600w.png"/>
<img alt="Alfa Romeo Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b72fc062-49bf-4762-aeaf-795627bf73c2_1600w.png"/>
<img alt="Hyundai Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9340543-11a3-4b85-b955-2d21991ca90f_1600w.png?w=800&amp;q=80"/>
<img alt="Tesla Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f276043-4fb6-4b36-a2f0-4ec4df37806f_320w.png"/>
</div>

<div aria-hidden="true" className="flex gap-16 shrink-0 pr-8 pl-8 gap-x-16 gap-y-16 items-center">
<img alt="Genesis Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/540e09e4-b86f-46c1-8140-a64d12db24db_3840w.png?w=800&amp;q=80"/>
<img alt="Lexus Logo" className="w-auto h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/529c5abc-50dc-40eb-9122-5f4c4c6bdfbe_320w.png"/>
<img alt="Aston Martin Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/137a8e52-96bb-4cf9-847b-3152b677ef0c_800w.png"/>
<img alt="Mercedes Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/465a7c4e-39b9-45f8-ac90-439956abcaa8_1600w.png"/>
<img alt="Alfa Romeo Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b72fc062-49bf-4762-aeaf-795627bf73c2_1600w.png"/>
<img alt="Hyundai Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9340543-11a3-4b85-b955-2d21991ca90f_1600w.png?w=800&amp;q=80"/>
<img alt="Tesla Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-70 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f276043-4fb6-4b36-a2f0-4ec4df37806f_320w.png"/>
</div>
</div>
</div>
</div>
<style className="">
      @keyframes ticker {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-50%);
        }
      }

      .ticker-track {
        animation: ticker 40s linear infinite;
        width: max-content;
        display: flex;
      }

      .ticker-track:hover {
        animation-play-state: paused;
      }
    </style>
</section>
</div>
</section>
<section className="bg-black pb-10 relative" id="about">
<div className="md:px-12 bg-center max-w-7xl mt-20 mr-auto ml-auto pt-30 pr-6 pl-6 gap-x-y-10 gap-y-12">
<div className="flex flex-col text-center max-w-7xl pt-10 gap-x-y-10 gap-y-12 items-center justify-center">
<div className="flex flex-col text-center max-w-full space-y-6 gap-x-y-3 gap-y-3 items-center justify-center">
<h2 className="md:text-5xl leading-tight text-3xl font-semibold text-white tracking-tight text-center max-w-full font-poppins">
      Integrity. Through and through.
    </h2>
<p className="leading-relaxed md:text-4xl text-base font-semibold text-neutral-400 tracking-tight font-poppins text-center max-w-full mr-auto ml-auto" id="hero2-subtitle">Twenty-five years of uncompromised trust.</p>
</div>
</div>
</div>
</section><section className="bg-black border-white/5 border-t pt-10 pb-16 relative">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">

<div className="group relative overflow-hidden rounded-2xl h-[420px] border border-white/10 bg-zinc-900 cursor-pointer">
<img alt="Lifetime Warranty" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-md opacity-70 group-hover:opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4df3dccd-a2fc-4606-bc8a-835c698eb87d_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 group-hover:bg-black/40">
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-md shadow-2xl">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white text-center font-poppins">Lifetime warranty</h3>
<p className="text-zinc-300 text-sm font-medium mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-poppins leading-relaxed">
        Uncompromised protection for your vehicle's metalwork and refinishing, valid for as long as you own it.
      </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl h-[420px] border border-white/10 bg-zinc-900 cursor-pointer">
<img alt="OEM Certified" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-md opacity-70 group-hover:opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96f43a0b-a4f7-41ff-a0ff-7998afd313fa_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 group-hover:bg-black/40">
</div>
<div className="flex flex-col group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 translate-y-8 items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-md shadow-2xl">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="8" r="6"></circle>
<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white text-center font-poppins">OEM certified</h3>
<p className="text-zinc-300 text-sm font-medium mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-poppins leading-relaxed">
        Restored exclusively to precise manufacturer safety and aesthetic specifications. Proudly certified by 20+
        manufacturers.
      </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl h-[420px] border border-white/10 bg-zinc-900 cursor-pointer">
<img alt="Industry Leaders" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-md opacity-70 group-hover:opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef8c8a05-9107-4662-b92d-b165bf257bf4_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 group-hover:bg-black/40">
</div>
<div className="flex flex-col group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 translate-y-8 items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-md shadow-2xl">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white text-center font-poppins">Industry leaders</h3>
<p className="text-zinc-300 text-sm font-medium mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-poppins leading-relaxed">
        Integrating 3D laser mapping and ADAS recalibrations into modern collision workflows.
      </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl h-[420px] border border-white/10 bg-zinc-900 cursor-pointer">
<img alt="Proud Family Business" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-md opacity-70 group-hover:opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8282c86f-8e49-403a-a3bf-8b8f1808bff3_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 group-hover:bg-black/40">
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-md shadow-2xl">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white text-center font-poppins">Proud family business
      </h3>
<p className="text-zinc-300 text-sm font-medium mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-poppins leading-relaxed">
        Treating every client and vehicle with absolute respect and care since 1998.
      </p>
</div>
</div>
</div>
</div>
</section>
<section className="md:pt-16 bg-black pt-10 pb-10 relative" id="about">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto items-center justify-center">
<div className="flex flex-col text-center max-w-full space-y-6 items-center justify-center">
<h2 className="md:text-5xl leading-tight text-3xl text-white text-center max-w-full tracking-tight font-semibold font-poppins">
    Mastery in every detail.
  </h2>
<p className="leading-relaxed md:text-lg text-base font-medium text-zinc-400 tracking-tight font-poppins text-center max-w-full mr-auto ml-auto" id="hero2-subtitle">Our experienced team restores your vehicle to its original condition with unmatched
    craftsmanship,
    using advanced techniques like 3D structural blueprinting, Glasurit and PPG Envirobase, and ADAS safety
    recalibration.
    Our modular services cater to your needs.<br/><br/> Contact us or get an online quote.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left w-full max-w-7xl mt-16 mr-auto ml-auto relative gap-x-6 gap-y-6">

<div className="group flex flex-col overflow-hidden border-0 pt-8 pr-8 pb-8 pl-8 relative">
<ul className="flex-1 z-10 text-lg relative space-y-4">
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="">Frame Alignment</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Aluminum Repair</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Suspension Restoration</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Panel Replacement</span>
</li>
</ul>
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 pointer-events-none">
</div>
</div>

<div className="group flex flex-col overflow-hidden z-10 border-0 pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-white/10 pointer-events-none">
</div>
<ul className="flex-1 z-10 relative space-y-4">
<li className="flex md:text-base group/item text-sm font-medium text-zinc-400 font-poppins gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Paint and Refinishing</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Paintless Dent Repair (PDR)</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="">Bumper Repair</span>
</li>
<li className="flex gap-3 md:text-base group/item text-sm font-medium text-zinc-400 font-poppins gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="">Glass Replacement</span>
</li>
</ul>
</div>

<div className="group flex flex-col hover:border-white/10 overflow-hidden border-0 pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-32 h- group-hover:bg-white/10 pointer-events-none"></div>
<ul className="space-y-4 flex-1 relative z-10">
<li className="flex gap-3 md:text-base group/item text-sm font-medium text-zinc-400 font-poppins gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">ADAS Recalibration</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Diagnostic Scanning</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Mechanical Integration</span>
</li>
<li className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-medium font-poppins group/item">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
<span className="group-hover/item:text-zinc-200 transition-colors duration-300">Lease Return Inspection</span>
</li>
</ul>
</div>

</div>
<p className="leading-relaxed md:text-2xl text-base font-semibold text-zinc-400 tracking-tight text-center max-w-full mr-auto ml-auto font-poppins" id="hero2-subtitle"> </p>
<p className="leading-relaxed md:text-2xl text-base font-semibold text-zinc-400 tracking-tight text-center max-w-full mr-auto ml-auto font-poppins" id="hero2-subtitle"></p>
</div>
<div className="flex flex-row text-center max-w-full space-x-6 items-end justify-center">
<p className="leading-relaxed md:text-2xl text-base font-normal text-zinc-400 text-center max-w-fit mt-0 mr-auto mb-0 ml-auto" id="hero2-subtitle"></p>
</div>
</div>
</div>
</section><section className="z-10 bg-blue-950 max-w-full border-white/5 border-t mr-auto ml-auto pt-16 pb-16 relative" id="trust-banner">
<div className="max-w-7xl mr-auto ml-auto pr-0 pl-0 md:pl-0">
<div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 mx-12 gap-x-8 gap-y-8 items-start justify-center">

<div className="flex hover:grayscale-0 hover:opacity-100 transition-all duration-500 group cursor-pointer text-left opacity-50 grayscale items-center justify-start">
<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="leading-none md:text-4xl text-sm font-semibold text-white tracking-tight font-poppins">10,000+</span>
<span className="text-[10px] md:text-lg font-medium text-zinc-500 tracking-wider font-poppins mt-1">vehicles repaired.</span>
</div>
</div>
</div>

<div className="flex hover:grayscale-0 hover:opacity-100 transition-all duration-500 group cursor-pointer opacity-50 grayscale items-center justify-start">
<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="leading-none md:text-4xl text-sm font-semibold text-white tracking-tight font-poppins">78</span>
<span className="text-[10px] md:text-lg font-medium text-zinc-500 tracking-wider font-poppins mt-1">expert technicians.</span>
</div>
</div>
</div>

<div className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="leading-none md:text-4xl text-sm font-semibold text-white tracking-tight font-poppins">40+</span>
<span className="text-[10px] md:text-lg font-medium text-zinc-500 tracking-wider font-poppins mt-1">years of industry experience.</span>
</div>
</div>
</div>

<div className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="leading-none md:text-4xl text-sm font-semibold text-white tracking-tight font-poppins">35</span>
<span className="text-[10px] md:text-lg font-medium text-zinc-500 tracking-wider font-poppins mt-1">official shop certifications.</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-32 border-y bg-zinc-950 border-zinc-950 pt-24 pb-24 relative" id="services">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-y-0 gap-y-0">
<div className="flex flex-col md:flex-row md:items-end gap-6 text-center mb-12 gap-x-6 gap-y-6 justify-center">
<div className="">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight font-poppins text-center mb-8">
      Expert Services in Chicago
    </h2><a className="hover:border-white hover:text-white transition-all inline-flex items-center gap-2 text-base font-medium text-zinc-400 tracking-tight font-poppins border-white/20 border-b pb-1" href="#all-services">View
      all services</a>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group bg-zinc-900/40 rounded-2xl p-8 card-hover-border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-white/10">
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-4 tracking-tight font-semibold font-poppins">
    Collision repair
  </h3>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 flex-grow font-medium font-poppins">
    Comprehensive structural and body repairs following severe
    impacts. We utilize advanced measuring systems to guarantee exact
    factory safety specifications.
  </p>
<a className="inline-flex items-center gap-2 text-sm text-zinc-500 group-hover:text-white transition-colors uppercase tracking-widest font-medium font-poppins" href="#">
    Explore Repair
    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group card-hover-border transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden bg-zinc-900/40 h-full rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-white/10">
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon className="text-2xl" icon="solar:pallete-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-4 tracking-tight font-semibold font-poppins">
    Refinishing and painting
  </h3>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 flex-grow font-medium font-poppins">
    Utilizing computerized color-matching technology and premium
    waterborne paints to achieve a flawless, undetectable
    factory-finish blend.
  </p>
<a className="inline-flex items-center gap-2 text-sm text-zinc-500 group-hover:text-white transition-colors uppercase tracking-widest font-medium font-poppins" href="#">
    Explore Painting
    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group bg-zinc-900/40 rounded-2xl p-8 card-hover-border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-white/10">
</div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-4 tracking-tight font-semibold font-poppins">
    Paintless dent removal
  </h3>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 flex-grow font-medium font-poppins">
    Efficient and precise removal of minor dents, door dings, and hail
    damage while preserving your vehicle's original factory paint.
  </p>
<a className="inline-flex items-center gap-2 text-sm text-zinc-500 group-hover:text-white transition-colors uppercase tracking-widest font-medium font-poppins" href="#">
    Explore PDR
    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
<section className="md:pt-20 bg-zinc-950 pt-20 pb-24">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight font-poppins">
            Getting back on the road is simple.
          </h2>
</div>
<div className="relative">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
<div className="space-y-16">
<div className="flex flex-col md:flex-row md:items-center group relative items-start">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
<h3 className="text-2xl font-semibold text-white tracking-tight font-poppins mb-3">Estimate &amp; insurance</h3>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium font-poppins">
                  We provide a transparent, detailed estimate and communicate
                  directly with your insurance provider to expedite approval.
                </p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-auto w-8 h-8 rounded-full bg-zinc-950 border border-white/20 group-hover:border-white group-hover:bg-white flex items-center justify-center transition-all duration-300 z-10 order-1 md:order-2">
<span className="text-sm text-zinc-400 group-hover:text-black font-medium font-poppins">
                  1
                </span>
</div>
<div className="md:w-1/2 md:pl-16 order-3 hidden md:block"></div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-16 order-3 md:order-1 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-auto w-8 h-8 rounded-full bg-zinc-950 border border-white/20 group-hover:border-white group-hover:bg-white flex items-center justify-center transition-all duration-300 z-10 order-1 md:order-2">
<span className="text-sm text-zinc-400 group-hover:text-black font-medium font-poppins">
                  2
                </span>
</div>
<div className="md:w-1/2 md:pl-16 pl-12 md:pl-0 mb-4 md:mb-0 order-2 md:order-3">
<h3 className="text-2xl font-semibold text-white tracking-tight font-poppins mb-3">Expert restoration </h3>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium font-poppins">
                  Certified technicians perform structural alignments, bodywork,
                  and precise refinishing using state-of-the-art equipment.
                </p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
<h3 className="text-2xl font-semibold text-white tracking-tight font-poppins mb-3">Inspection &amp; delivery</h3>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium font-poppins">
                  Following rigorous quality control and a complimentary clean,
                  your vehicle is ready to drive safely off the lot.
                </p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-auto w-8 h-8 rounded-full bg-zinc-950 border border-white/20 group-hover:border-white group-hover:bg-white flex items-center justify-center transition-all duration-300 z-10 order-1 md:order-2">
<span className="text-sm text-zinc-400 group-hover:text-black font-medium font-poppins">
                  3
                </span>
</div>
<div className="md:w-1/2 md:pl-16 order-3 hidden md:block"></div>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-32 border-y overflow-hidden bg-zinc-950 border-white/5 pt-24 pb-24 relative" id="locations">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60 pointer-events-none z-10"></div>
<div className="md:px-12 z-20 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-3xl md:text-5xl text-white mb-8 max-w-3xl mx-auto leading-tight tracking-tight font-semibold font-poppins">
          Experience the
          <span className="font-semibold text-blue-900 tracking-tight font-poppins shadow-lg">Euro Collision Standard</span>
</h2>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12 font-medium font-poppins">
          Your safety and peace of mind are our priority. We maintain stringent
          repair protocols so your vehicle not only looks impeccable but
          performs safely in critical moments. Trust the experts dedicated to
          European and domestic precision.
        </p>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 justify-center">
</div>
<div className="border-white/5 border-t mt-20 pt-10">
<p className="text-sm text-zinc-500 tracking-widest uppercase mb-8 font-medium font-poppins">
            Proudly Serving Chicagoland
          </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg text-zinc-300 font-normal">
<span className="font-medium font-poppins">Andersonville</span>
<span className="text-zinc-800 hidden md:inline font-medium font-poppins">•</span>
<span className="font-medium font-poppins">Lincoln Park</span>
<span className="text-zinc-800 hidden md:inline font-medium font-poppins">•</span>
<span className="font-medium font-poppins">Rogers Park</span>
<span className="text-zinc-800 hidden md:inline font-medium font-poppins">•</span>
<span className="font-medium font-poppins">Skokie</span>
<span className="text-zinc-800 hidden md:inline font-medium font-poppins">•</span>
<span className="font-medium font-poppins">Rosemont</span>
<span className="text-zinc-800 hidden md:inline font-medium font-poppins">•</span>
<span className="font-medium font-poppins">Harlem</span>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-zinc-950" id="faq">
<div className="max-w-3xl mx-auto px-6 md:px-12">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-5xl text-white mb-4 tracking-tight font-semibold font-poppins">
            Frequently Asked
          </h2>
<p className="md:text-lg text-base font-medium text-zinc-400 font-poppins">
            Common inquiries about our collision repair process.
          </p>
</div>
<div className="space-y-3">
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-base md:text-lg text-zinc-200 hover:text-white select-none font-medium font-poppins">
              Do you work directly with my insurance company?
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4 font-medium font-poppins">
              Yes. Euro Collision works seamlessly with all major insurance
              providers. We handle the paperwork, communicate with adjusters,
              and ensure the repair process is as smooth as possible for you.
            </div>
</details>
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-base md:text-lg text-zinc-200 hover:text-white select-none font-medium font-poppins">
              Is there a warranty on your repair work?
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4 font-medium font-poppins">
              Absolutely. We stand behind our craftsmanship with a lifetime
              warranty on all metalwork and painting/refinishing for as long as
              you own the vehicle.
            </div>
</details>
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-base md:text-lg text-zinc-200 hover:text-white select-none font-medium font-poppins">
              Will the new paint match my car's existing color?
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4 font-medium font-poppins">
              Yes. We utilize advanced, computerized paint matching systems and
              premium waterborne factory-grade finishes to ensure an exact,
              undetectable color match.
            </div>
</details>
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-base md:text-lg text-zinc-200 hover:text-white select-none font-medium font-poppins">
              Do I need an appointment for an estimate?
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4 font-medium font-poppins">
              While walk-ins are welcome at our locations, scheduling an
              appointment ensures a dedicated estimator is ready to assist you
              immediately, saving you valuable time.
            </div>
</details>
</div>
</div>
</section>
<section className="py-24 bg-zinc-100 relative overflow-hidden">
<div className="opacity-[0.03] bg-[url(default)] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-3xl md:text-5xl text-zinc-900 mb-6 tracking-tight font-semibold font-poppins">
          Ready for the Euro Collision Treatment?
        </h2>
<p className="md:text-lg text-base text-zinc-600 max-w-2xl mr-auto mb-10 ml-auto font-medium font-poppins">
          Begin your stress-free repair journey. Contact us today to arrange
          your comprehensive estimate or to discuss your insurance claim.
        </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 justify-center">
<a className="hover:bg-blue-900 hover:text-white/100 hover:border-blue-900 transition-all flex items-center justify-center gap-2 sm:w-auto text-lg font-medium text-black font-poppins bg-neutral-200 w-full border-white/100 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="tel:312-555-0198">Start quote</a><a className="hover:bg-blue-900 hover:text-white/100 hover:border-blue-900 transition-all flex items-center justify-center gap-2 sm:w-auto text-lg font-medium text-black font-poppins bg-neutral-200 w-full border-white/100 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="tel:312-555-0198">Schedule appointment</a><a className="hover:bg-blue-900 hover:text-white/100 hover:border-blue-900 transition-all flex items-center justify-center gap-2 sm:w-auto text-lg font-medium text-black font-poppins bg-neutral-200 w-full border-white/100 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="tel:312-555-0198">Contact us</a></div>
</div>
</section>
<footer className="bg-zinc-950 border-white/5 border-t pt-20 pb-10">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 gap-x-12 gap-y-12">
<div className="md:col-span-1">
<a className="text-xl text-white mb-6 block tracking-tight font-semibold font-poppins" href="#">
              Euro Collision
            </a>
<p className="leading-relaxed text-zinc-50 mb-8 font-medium font-poppins">
              Precision collision repair and flawless refinishing. Returning
              your vehicle to safe, pristine condition across Chicago.
            </p>
<div className="flex gap-4 gap-x-4 gap-y-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="mailto:service@eurocollisionchicago.com">
<iconify-icon className="text-2xl" height="23" icon="solar:letter-linear" style={{color: 'rgb(255, 255, 255)'}} width="23"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="tel:312-555-0198">
<iconify-icon className="text-2xl" height="23" icon="solar:phone-calling-linear" style={{color: 'rgb(255, 255, 255)'}} width="23"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-white mb-6 font-medium font-poppins">Company</h4>
<ul className="space-y-4">
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#">
                  Home
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#about">
                  About Us
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#locations">
                  Locations
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#faq">
                  FAQ
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white mb-6 font-medium font-poppins">Services</h4>
<ul className="space-y-4">
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#services">
                  Collision Repair
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#services">
                  Auto Refinishing
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#services">
                  Paintless Dent Repair
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-zinc-50 font-medium font-poppins" href="#services">
                  Insurance Claims
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white mb-6 font-medium font-poppins">Contact</h4>
<ul className="font-normal text-zinc-50 space-y-3">
<li className="flex justify-between">
<span className="font-medium font-poppins">Mon - Fri:</span>
<span className="font-medium font-poppins">7:30 AM - 6:00 PM</span>
</li>
<li className="flex justify-between">
<span className="font-medium font-poppins">Saturday:</span>
<span className="font-medium font-poppins">8:00 AM - 1:00 PM</span>
</li>
</ul>
<div className="border-white/5 border-t mt-8 pt-8">
<a className="text-base text-white hover:text-zinc-300 transition-colors font-medium font-poppins" href="tel:312-555-0198">
                312-555-0198
              </a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 font-normal">
<p className="text-white mb-6 font-medium font-poppins">
            © 2024 Euro Collision. All Rights Reserved.
          </p>
<p className="font-medium font-poppins">Designed for Precision.</p>
</div>
</div>
</footer>

    </>
  );
}
