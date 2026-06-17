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



    (function () {
        const toggle = document.getElementById("solutions-toggle");
        const menu = document.getElementById("solutions-menu");
        const arrow = document.getElementById("solutions-arrow");
        if (!toggle || !menu || !arrow) return;
        toggle.addEventListener("click", function (event) {
          event.stopPropagation();
          menu.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        });
        document.addEventListener("click", function () {
          menu.classList.add("hidden");
          arrow.classList.remove("rotate-180");
        });
        menu.addEventListener("click", function (event) {
          event.stopPropagation();
        });
      })();

      (function () {
        const mobileToggle = document.getElementById("mobile-menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        const ham1 = document.getElementById("ham-1");
        const ham2 = document.getElementById("ham-2");
        const ham3 = document.getElementById("ham-3");
        if (!mobileToggle || !mobileMenu) return;
        mobileToggle.addEventListener("click", function () {
          const open = !mobileMenu.classList.contains("hidden");
          mobileMenu.classList.toggle("hidden");
          if (!open) {
            ham1.style.transform = "translateY(8px) rotate(45deg)";
            ham2.style.opacity = "0";
            ham3.style.transform = "translateY(-8px) rotate(-45deg)";
          } else {
            ham1.style.transform = "";
            ham2.style.opacity = "";
            ham3.style.transform = "";
          }
        });
      })();
  


        document.addEventListener("DOMContentLoaded", function () {
          const section = document.querySelector(".scale-break-section");
          if (!section) return;
          const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                setTimeout(() => { section.classList.add("animate-now"); }, 800);
                observer.unobserve(section);
              }
            });
          }, { threshold: 0.35 });
          observer.observe(section);
        });
      


        document.addEventListener("DOMContentLoaded", function () {
          const steps = document.querySelectorAll(".approach-step");
          const title = document.getElementById("approach-title");
          const copy = document.getElementById("approach-copy");
          const progress = document.querySelector(".approach-progress");
          const dot = document.querySelector(".approach-dot");
          const states = [
            { offset: 986, rotation: 0 },
            { offset: 498, rotation: 120 },
            { offset: 0, rotation: 240 },
          ];
          function setStep(index) {
            steps.forEach(s => s.classList.remove("active"));
            steps[index].classList.add("active");
            title.textContent = steps[index].dataset.title;
            copy.textContent = steps[index].dataset.copy;
            progress.style.strokeDashoffset = states[index].offset;
            dot.style.transform = `rotate(${states[index].rotation}deg)`;
          }
          steps.forEach((step, i) => {
            step.addEventListener("mouseenter", () => setStep(i));
            step.addEventListener("click", () => setStep(i));
          });
          setStep(0);
        });
      


    document.addEventListener("DOMContentLoaded", () => {
      // 1. Reveal Elements on Scroll
      const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); }
        });
      }, observerOptions);
      document.querySelectorAll('.typography-reveal, .fade-up-element').forEach((el) => { observer.observe(el); });

      // 2. Testimonial Scroll Stacking Effect
      const testimonials = document.querySelectorAll('.testimonial-sticky');
      window.addEventListener('scroll', () => {
        testimonials.forEach((el, index) => {
          const rect = el.getBoundingClientRect();
          const inner = el.querySelector('.testimonial-inner');
          const offsetTop = parseInt(window.getComputedStyle(el).top, 10);
          if (rect.top <= offsetTop && index < testimonials.length - 1) {
            const nextEl = testimonials[index + 1];
            const nextRect = nextEl.getBoundingClientRect();
            const distance = nextRect.top - rect.top;
            const threshold = 180;
            if (distance < threshold) {
              const progress = 1 - (distance / threshold);
              const scale = 1 - (progress * 0.05);
              const brightness = 1 - (progress * 0.5);
              inner.style.transform = `scale(${scale})`;
              inner.style.filter = `brightness(${brightness})`;
            } else {
              inner.style.transform = 'scale(1)';
              inner.style.filter = 'brightness(1)';
            }
          } else {
            inner.style.transform = 'scale(1)';
            inner.style.filter = 'brightness(1)';
          }
        });
      });
    });
  
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
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.dropbox.com/scl/fi/2bcesx0wtw73f7czy93gv/freepik_everyone-in-the-photo-is-_2792017953.mp4?rlkey=q2h7ac32rl0khobmyrjfhxxmv&amp;st=yzkfu6yx&amp;dl=0"></video>
</div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900/50 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-32 items-center justify-between">
<a className="flex-shrink-0" href="/home">
<img alt="Kindling Solutions" className="h-24 w-auto rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb846fe5-c422-46d6-b6c7-7729fedb2b5a_320w.png"/>
</a>
<nav className="hidden md:flex font-inter gap-x-8 gap-y-8 items-center">
<div className="relative">
<button className="flex items-center gap-2 hover:text-white transition-colors text-base font-normal text-zinc-400" id="solutions-toggle" type="button">
              Solutions
              <svg className="transition-transform duration-200" fill="none" height="16" id="solutions-arrow" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden absolute left-0 top-full mt-4 w-60 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden z-50" id="solutions-menu">
<a className="block px-5 py-4 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors" href="/fullstak">
              FullStak
            </a>
<a className="block px-5 py-4 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors border-t border-white/10" href="/in-house-agent">
              In-House Agent
            </a>
</div>
</div>
<a className="hover:text-white transition-colors text-base font-normal text-zinc-400" href="/about-us">About
          Us</a>
<a className="hover:text-white transition-colors text-base font-normal text-zinc-400" href="/case-studies">Case
          Studies</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center hover:bg-zinc-900 transition-colors sm:w-auto text-sm font-normal text-white font-inter bg-[#FE4C00] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="/contact-form">
          Get in Touch
        </a>
<button aria-label="Open menu" className="md:hidden flex flex-col gap-1.5 p-2" id="mobile-menu-toggle" type="button">
<span className="block w-6 h-0.5 bg-white transition-all duration-300" id="ham-1"></span>
<span className="block w-6 h-0.5 bg-white transition-all duration-300" id="ham-2"></span>
<span className="block w-6 h-0.5 bg-white transition-all duration-300" id="ham-3"></span>
</button>
</div>
</div>
</div>
<div className="hidden md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800" id="mobile-menu">
<nav className="flex flex-col px-6 py-6 gap-5 font-inter">
<a className="text-zinc-300 hover:text-white transition-colors text-base" href="/fullstak">FullStak</a>
<a className="text-zinc-300 hover:text-white transition-colors text-base" href="/in-house-agent">In-House Agent</a>
<a className="text-zinc-300 hover:text-white transition-colors text-base" href="/about-us">About Us</a>
<a className="text-zinc-300 hover:text-white transition-colors text-base" href="/case-studies">Case Studies</a>
<a className="inline-flex items-center justify-center text-sm font-normal text-white bg-[#FE4C00] rounded-full py-3.5 px-8 mt-2" href="https://calendly.com/kindling-solutions/kindling-solutions" rel="noopener noreferrer" target="_blank">
        Get in Touch
      </a>
</nav>
</div>

</header>
<main className="flex-grow z-20">

<section className="relative min-h-[850px] overflow-hidden border-b border-zinc-900/50 bg-black flex items-end">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover object-center opacity-100" loop="" muted="" playsinline="" src="https://www.dropbox.com/scl/fi/ovmu0bu3fpssbsftjisg8/magnific_the-guy-in-orange-pulls-t_62xx9FGiJO.mp4?rlkey=5zf98id26lgy2na1u9y15f09g&amp;st=kko1254y&amp;raw=1"></video>
<div className="absolute inset-0 bg-black/35"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10"></div>
<div className="sm:px-10 lg:px-16 sm:pb-16 lg:pb-16 w-full max-w-7xl z-10 mx-auto pr-6 pb-20 pl-6 relative">
<div className="max-w-6xl">
<h1 className="text-white text-4xl font-medium tracking-tight leading-[0.95] font-space-grotesk sm:text-5xl md:text-6xl lg:text-8xl">
      One spark. Your systems.
    </h1>
<div className="inline-block mt-2 bg-[#FE4C00] px-4 sm:px-5 py-1.5 sm:py-2">
<h2 className="text-white text-4xl font-medium tracking-tight leading-[0.95] font-space-grotesk sm:text-5xl md:text-6xl lg:text-8xl">
        Infinite Scale.
      </h2>
</div>
<p className="leading-relaxed sm:text-lg text-sm text-zinc-200 font-inter max-w-2xl mt-6 mb-6">
      We build AI-run operations: faster output, higher standards, more capacity...
      <br className="hidden sm:block"/> without more headcount.
    </p>
<a className="inline-flex items-center justify-center hover:bg-zinc-900 transition-colors sm:w-auto text-sm font-normal text-white font-inter bg-[#FE4C00] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://calendly.com/kindling-solutions/kindling-solutions" rel="noopener noreferrer" target="_blank">
      Book a Call
    </a>
</div>
</div>
</section>
<section className="animate-now sm:pb-0 sm:pt-24 bg-black border-zinc-900/50 border-b pt-18 pb-4 relative scale-break-section">
<div className="text-center max-w-7xl mr-auto mb-4 ml-auto">
<style>
          .split-word-top,
          .split-word-bottom,
          .split-word-line {
            transition: transform 1400ms cubic-bezier(.22, 1, .36, 1), opacity 1400ms cubic-bezier(.22, 1, .36, 1);
          }

          .split-word-line {
            transform: translateY(-50%) scaleX(0);
          }

          .scale-break-section.animate-now .split-word-top {
            transform: translateY(-0.5rem) translateX(-0.25rem) rotate(-2deg);
          }

          .scale-break-section.animate-now .split-word-bottom {
            transform: translateY(0.5rem) translateX(0.25rem) rotate(2deg);
          }

          .scale-break-section.animate-now .split-word-line {
            transform: translateY(-50%) scaleX(1);
          }
        </style>
<h2 className="md:text-6xl text-4xl font-medium text-white tracking-tight font-space-grotesk mt-6 mb-6">
          Scale
          <span className="inline-flex align-bottom text-[#FE4C00] mx-1 relative">
<span aria-hidden="true" className="invisible">breaks</span>
<span className="split-word-top [clip-path:polygon(0_0,100%_0,100%_50%,0_50%)] font-medium font-space-grotesk w-full h-full absolute top-0 left-0 text-[#FE4C00]">breaks</span>
<span className="split-word-line text-[#FE4C00] bg-white w-full h-[2px] rounded-full absolute top-1/2 left-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
<span className="split-word-bottom [clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)] font-medium text-[#FE4C00] w-full h-full absolute top-0 left-0">breaks</span>
</span>
          duct tape.
        </h2>
<p className="text-3xl font-light text-white font-inter">
          If work only moves when you're in the middle, you're the system.
        </p>
</div>

</section>
<section className="overflow-visible z-10 bg-black max-w-7xl border-zinc-900/50 border-b mr-auto ml-auto pt-0 pr-6 pb-12 pl-6 relative">
<style>
        @keyframes flow-custom {
          to {
            stroke-dashoffset: -1000;
          }
        }

        .animate-flow-custom {
          animation: flow-custom 10s linear infinite;
        }

        @keyframes scanner {

          0%,
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }

          50% {
            opacity: 1;
          }

          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .animate-scanner {
          animation: scanner 3s ease-in-out infinite;
        }

        @keyframes lottieDraw {
          0% {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            opacity: 0.5;
          }

          40% {
            opacity: 1;
          }

          100% {
            stroke-dasharray: 60;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes lottiePop {

          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.15);
          }
        }

        @keyframes lottieFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes lottieWiggle {

          0%,
          100% {
            transform: rotate(0deg);
          }

          25% {
            transform: rotate(-8deg);
          }

          75% {
            transform: rotate(8deg);
          }
        }

        @keyframes lottieRotate {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes lottieSlideRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }

          50% {
            transform: translateX(4px);
            opacity: 0.8;
          }

          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes lottieSwitch {

          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(3px);
          }
        }

        .lottie-stroke path,
        .lottie-stroke rect,
        .lottie-stroke circle,
        .lottie-stroke line,
        .lottie-stroke polyline {
          animation: lottieDraw 3s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
          stroke-dasharray: 60;
        }

        .anim-slack {
          animation: lottieWiggle 3s ease-in-out infinite;
        }

        .anim-chevron {
          animation: lottieSlideRight 2s ease-in-out infinite;
        }

        .anim-command {
          animation: lottiePop 2.5s ease-in-out infinite;
        }

        .anim-figma {
          animation: lottieFloat 3.5s ease-in-out infinite;
        }

        .anim-asterisk {
          animation: lottieRotate 8s linear infinite;
        }

        .anim-link {
          animation: lottiePop 3s ease-in-out infinite reverse;
        }

        .anim-aperture {
          animation: lottieRotate 12s linear infinite reverse;
        }

        .anim-toggle {
          animation: lottieSwitch 2s ease-in-out infinite;
        }
      </style>
<div className="flex mt-32 z-20 relative justify-center">
<div className="flex relative items-center justify-center">
<div className="absolute -top-32 h-32 w-[2px] bg-gradient-to-b from-transparent via-[#FE4C00]/50 to-[#FE4C00] shadow-[0_0_20px_#FE4C00] overflow-hidden">
<div className="absolute inset-0 bg-white/50 w-full h-1/2 animate-[scanner_2s_linear_infinite] blur-[2px]">
</div>
</div>
<div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-zinc-950 shadow-[0_0_50px_rgba(254,76,0,0.3)] border border-[#FE4C00]/30">
<div className="absolute inset-[-10px] rounded-full border border-[#FE4C00]/20 border-dashed animate-[spin_10s_linear_infinite]">
</div>
<div className="absolute inset-[-4px] rounded-full border border-[#FE4C00]/30 border-dotted animate-[spin_15s_linear_infinite_reverse]">
</div>
<div className="absolute inset-0 rounded-full bg-[#FE4C00]/20 blur-xl animate-pulse"></div>
<div className="relative z-10 animate-[pulse_3s_ease-in-out_infinite]">
<img alt="Custom Icon" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] w-[80px] h-[80px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f965d3f0-25ae-426e-8843-d393473e2223_320w.png" style={{width: '80px', height: '80px'}}/>
</div>
</div>
</div>
</div>
<div className="text-center max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
<h2 className="md:text-6xl text-4xl font-medium text-[#FE4C00] font-space-grotesk mt-8" style={{animation: 'slideInY 800ms ease-in-out 0ms forwards'}}>
          Stop being the system. Install one.
        </h2>
<h2 className="md:text-6xl text-4xl font-medium text-white font-space-grotesk mb-10" style={{animation: 'slideInY 800ms ease-in-out 0ms forwards'}}>
          Built for how you actually operate.
        </h2>
<div className="grid grid-cols-1 gap-y-8 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
<div className="flex flex-col gap-y-4">
<div className="">
<svg aria-hidden="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(254, 76, 0)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z">
</path>
<path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18">
</path>
<path d="m2.3 2.3 7.286 7.286"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
<p className="leading-relaxed text-xl font-light text-white font-inter text-left">AI-run roles built into the
              business (not random tools)</p>
</div>
<div className="flex flex-col gap-y-4">
<div>
<svg aria-hidden="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(254, 76, 0)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
</div>
<p className="leading-relaxed text-xl font-light text-white font-inter text-left">Work completes without
              constant human coordination</p>
</div>
<div className="flex flex-col gap-y-4">
<div>
<svg aria-hidden="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(254, 76, 0)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
</div>
<p className="leading-relaxed text-xl font-light text-white font-inter text-left">Capacity scales without hiring
            </p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#FE4C00] pt-28 pb-28 sm:pt-32 sm:pb-32 overflow-hidden">
<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
<div className="text-center max-w-4xl mx-auto mb-16">
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[0.95] font-space-grotesk">Our
            Approach</h2>
<p className="mt-6 text-xl md:text-2xl text-white/85 font-light font-inter">Find the leverage. Build the system.
            Put AI to work.</p>
</div>
<div className="approach-orbit relative mx-auto max-w-5xl min-h-[720px] flex items-center justify-center">
<div className="absolute z-20 w-[260px] sm:w-[340px] text-center">
<p className="text-xs uppercase tracking-[0.25em] text-black/60 font-inter mb-4">Process</p>
<h3 className="text-4xl sm:text-5xl font-medium text-white tracking-tight font-space-grotesk leading-none" id="approach-title">Find leverage</h3>
<p className="mt-5 text-base sm:text-lg font-light text-white/85 font-inter leading-relaxed" id="approach-copy">What to fix first + where AI creates outsized upside.</p>
</div>
<svg className="absolute w-[620px] h-[620px] max-w-[92vw] max-h-[92vw]" fill="none" viewbox="0 0 620 620">
<circle cx="310" cy="310" r="238" stroke="rgba(0,0,0,0.22)" strokeWidth="1"></circle>
<circle cx="310" cy="310" r="238" stroke="rgba(255,255,255,0.28)" stroke-dasharray="6 10" strokeWidth="1">
</circle>
<circle className="approach-progress" cx="310" cy="310" r="238" stroke="#ffffff" strokeLinecap="round" strokeWidth="3" style={{strokeDashoffset: '986'}} transform="rotate(-90 310 310)"></circle>
<circle cx="310" cy="72" fill="#000000" r="7"></circle>
<circle cx="516" cy="429" fill="#000000" r="7"></circle>
<circle cx="104" cy="429" fill="#000000" r="7"></circle>
<g transform="translate(310,310)">
<g className="approach-dot">
<circle cx="0" cy="-238" fill="#000000" r="10"></circle>
<circle cx="0" cy="-238" fill="rgba(0,0,0,0.18)" r="20"></circle>
</g>
</g>
</svg>
<button className="approach-step absolute top-[3%] left-1/2 -translate-x-1/2 active" data-copy="What to fix first + where AI creates outsized upside." data-title="Find leverage" type="button">
<span>01</span> Find leverage
          </button>
<button className="approach-step absolute bottom-[15%] right-[6%]" data-copy="Custom decisions, routing, and accountability — built around how you actually operate." data-title="Build your system" type="button">
<span>02</span> Build your system
          </button>
<button className="approach-step absolute bottom-[15%] left-[6%]" data-copy="AI roles wired into your system, in production, until it runs without you." data-title="Put AI to work" type="button">
<span>03</span> Put AI to work
          </button>
</div>
</div>
<style>
        .approach-progress {
          stroke-dasharray: 1495;
          stroke-dashoffset: 986;
          transition: stroke-dashoffset 700ms cubic-bezier(.22, 1, .36, 1);
        }

        .approach-dot {
          transform: rotate(0deg);
          transition: transform 700ms cubic-bezier(.22, 1, .36, 1);
        }

        .approach-step {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.18);
          background: rgba(0, 0, 0, 0.18);
          color: rgba(255, 255, 255, 0.85);
          padding: 0.85rem 1.2rem;
          font-family: Inter, sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          backdrop-filter: blur(10px);
          transition: all 300ms ease;
          cursor: pointer;
        }

        .approach-step span {
          color: #FE4C00;
          background: #000;
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .approach-step.active {
          background: #000;
          color: #fff;
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.22);
        }

        @media (max-width: 767px) {
          .approach-orbit {
            min-height: auto;
            flex-direction: column;
            gap: 0.85rem;
            padding-top: 0;
          }

          .approach-orbit svg {
            position: relative !important;
            top: auto !important;
            width: 360px;
            height: 360px;
            max-width: 92vw;
            max-height: 92vw;
            order: 1;
            margin-bottom: 1.5rem;
          }

          .approach-orbit>div.absolute.z-20 {
            position: relative !important;
            width: 100% !important;
            max-width: 340px;
            order: 2;
            margin-bottom: 1.5rem;
          }

          #approach-title {
            font-size: 2.4rem;
            line-height: 0.95;
          }

          #approach-copy {
            font-size: 1rem;
            line-height: 1.45;
          }

          .approach-step {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            width: 100%;
            justify-content: flex-start;
            order: 3;
          }
        }
      </style>

</section>
<section className="sm:py-32 bg-black z-10 py-24 relative">
<div className="sm:px-6 lg:px-8 max-w-6xl mx-auto pr-8 pl-8">
<h2 className="md:text-7xl text-5xl font-medium text-white tracking-tight font-space-grotesk mb-16" style={{animation: 'slideInY 800ms ease-in-out 0ms forwards'}}>Start Here</h2>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-3 relative flex h-full">
<div aria-hidden="true" className="absolute inset-0 bg-white/25 blur-3xl rounded-3xl scale-110"></div>
<div aria-hidden="true" className="absolute inset-0 bg-white/40 blur-3xl rounded-3xl scale-105"></div>
<div className="sm:p-12 flex flex-col z-10 transition-all duration-300 hover:scale-[1.02] w-full h-full rounded-3xl pt-8 pr-8 pb-8 pl-8 relative overflow-hidden bg-black">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c246bd49-b5ce-4f7c-b958-f53e967da1ad_3840w.jpg)] bg-cover bg-center opacity-40">
</div>
<div className="absolute inset-0 bg-black/5"></div>
<div className="relative z-10">
<div className="mb-10">
<span className="inline-block border border-[#FE4C00] text-[#FE4C00] font-semibold text-base sm:text-lg rounded-full px-8 py-2 font-grotesk">FullStak</span>
</div>
<div className="flex-grow flex flex-col">
<p className="text-2xl sm:text-3xl font-medium text-white font-inter leading-tight tracking-tight mb-16">
                    We build and install your custom AI team across the business — so work runs, quality goes up, and
                    output scales without you in the middle.
                  </p>
<div className="mt-auto">
<a className="inline-flex items-center justify-center hover:bg-zinc-900 transition-colors sm:w-auto text-sm font-normal text-white font-inter bg-[#FE4C00] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://calendly.com/kindling-solutions/kindling-solutions" rel="noopener noreferrer" target="_blank">Book
                      a Call</a>
</div>
<p className="text-lg text-white/80 font-normal font-inter mt-6 mb-0 sm:text-base">We'll diagnose fast and
                    tell you what to build first.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2 flex flex-col z-10 h-full">
<div className="sm:p-10 flex flex-col transition-all duration-300 hover:scale-[1.02] bg-zinc-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aa83035-c72b-4cb5-9937-66ce103b64ef_1600w.webp)] bg-cover bg-center rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-14">
<span className="inline-block border border-[#FE4C00] text-[#FE4C00] font-semibold text-base sm:text-lg rounded-full px-8 py-2 font-grotesk">In-House Agent</span>
</div>
<div>
<p className="sm:text-xl leading-snug text-lg font-normal text-white font-inter mb-2">Want to start small?
                </p>
<p className="sm:text-3xl leading-tight text-2xl font-medium text-white tracking-tight font-inter">One AI
                  role installed to solve one defined problem—fast.</p>
<div className="mt-10 px-2 flex flex-col items-start">
<a className="inline-flex items-center justify-center hover:bg-zinc-900 transition-colors sm:w-auto text-sm font-normal text-white font-inter bg-[#FE4C00] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://calendly.com/kindling-solutions/kindling-solutions" rel="noopener noreferrer" target="_blank">Book
                    a Call</a>
<p className="leading-relaxed sm:text-base text-lg font-normal text-white font-inter mt-6 mb-0">We'll tell
                    you if you need an agent or a full system.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative bg-black border-t border-zinc-900/50 overflow-hidden z-10">
<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.dropbox.com/scl/fi/s9lsw2tiaf9hp348gic6p/magnific_have-the-orange-glow-on-t_62Ha4AEiJO.mp4?rlkey=1iija8e324iwnibisiw7uwz7d&amp;st=qojig28h&amp;raw=1"></video>
<div className="bg-gradient-to-r from-black via-black/30 to-transparent mb-2 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="sm:px-6 lg:px-8 sm:py-32 max-w-max z-10 mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">
<div className="fade-up-element is-visible mb-12">
<h2 className="sm:text-6xl text-4xl font-medium text-white tracking-tight font-space-grotesk mb-4">Results, not
            rhetoric</h2>
<p className="text-lg sm:text-xl font-light text-zinc-300">Some results Kindling clients have experienced:</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl gap-x-4 gap-y-4">
<style>
            @keyframes staggerFadeUp {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            [data-element-id="aura-empfw44jo23478usw"]>div {
              opacity: 0;
              animation: staggerFadeUp 0.7s ease-out forwards;
            }

            [data-element-id="aura-empfw44jo23478usw"]>div:nth-child(1) {
              animation-delay: 0ms;
            }

            [data-element-id="aura-empfw44jo23478usw"]>div:nth-child(2) {
              animation-delay: 100ms;
            }

            [data-element-id="aura-empfw44jo23478usw"]>div:nth-child(3) {
              animation-delay: 200ms;
            }
          </style>
<div className="sm:p-8 bg-zinc-900/40 border-slate-800/50 border rounded-2xl px-6 py-6 backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/50">
<div className="text-5xl sm:text-6xl font-bold text-[#FE4C00] tracking-tight font-grotesk mb-4">10-15</div>
<p className="text-base font-medium text-white leading-tight mb-1">hours/week eliminated</p>
<p className="text-base font-light text-zinc-300 leading-tight">by removing manual coordination</p>
</div>
<div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/50">
<div className="text-5xl sm:text-6xl font-bold text-[#FE4C00] tracking-tight font-grotesk mb-4">20%</div>
<p className="text-base text-white leading-tight">
<span className="font-medium text-[#FE4C00]">month-over-month growth</span>
<span className="font-light text-zinc-100"> after installing systems that made follow-up consistent.</span>
</p>
</div>
<div className="bg-[#FE4C00] rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/50">
<svg className="shrink-0" fill="none" height="70" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="70" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
<path d="M6 18a4 4 0 0 1-1.967-.516"></path>
<path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
</svg>
<p className="leading-tight text-xl font-semibold text-white mt-4 mb-4">The business stopped living in one
              person's head</p>
<p className="text-sm font-light text-white/90 leading-relaxed">(clear process + accountability the team can
              actually run).</p>
</div>
</div>
</div>
</section>
<section className="sm:py-32 bg-black z-10 pt-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl z-30 mr-auto ml-auto pr-4 pl-4 relative">
<h2 className="leading-tight typography-reveal is-visible sm:text-5xl lg:text-6xl text-4xl font-normal text-white tracking-tight font-grotesk">
<span className="overflow-hidden inline-block align-bottom pb-1 -mb-1">
<span className="reveal-text inline-block font-medium text-[#FE4C00]">This is the leverage shift.</span>
</span>
<br className="hidden sm:block"/>
</h2>
<div className="sm:text-2xl leading-relaxed text-xl font-light text-zinc-300 font-sans max-w-7xl space-y-8">
<p className="fade-up-element is-visible font-inter max-w-7xl">More customers. More moving parts. More "quick
            questions." Work only moves when someone pushes it.</p>
<p className="fade-up-element is-visible font-inter max-w-7xl">AI breaks that constraint—when it's built into how
            you work. Not as more tools. As the system behind the work. Work completes itself. Visibility goes
            real-time. Output scales without headcount.</p>
<p className="fade-up-element is-visible font-normal text-[#FE4C00] tracking-tight font-inter">
<style>
              @keyframes gradientAnim {
                0% {
                  background-position: 0% 50%;
                }

                100% {
                  background-position: 200% 50%;
                }
              }
            </style>
            Digital had winners. The internet had winners. Mobile had winners. AI will too. AI changes the rules of
            scale. The gap widens every week.
          </p>
</div>
</div>
</section>

<section className="lg:py-20 flex min-h-[160px] z-20 bg-black border-zinc-900 border-t pt-16 pb-16 relative items-center">
<div className="absolute -top-48 sm:-top-64 inset-x-0 bottom-0 z-0 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, transparent, black 50%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 50%, black 100%)'}}>
<video autoplay="" className="w-full h-full object-cover opacity-[0.65]" loop="" muted="" playsinline="">
<source src="https://www.dropbox.com/scl/fi/w9nevz50tma7ffb3en1jh/freepik_guy-in-vr-goggles-looking_2802940161.mp4?rlkey=fyfw1rue0iwmqtihbehkbqxtq&amp;st=cd0lkv5e&amp;raw=1" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/35"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col xl:flex-row gap-12 xl:gap-8 gap-x-12 gap-y-12 items-center justify-between">
<div className="flex-shrink-0 text-center xl:text-left w-full xl:w-auto">
<h3 className="sm:text-3xl text-2xl font-normal text-white tracking-tight font-inter pr-8">Trusted by the best:
            </h3>
</div>
<div className="w-full overflow-hidden flex items-center relative py-6" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<style>
              @keyframes scroll-logos {
                0% {
                  transform: translateX(0);
                }

                100% {
                  transform: translateX(-50%);
                }
              }

              .animate-marquee {
                animation: scroll-logos 40s linear infinite;
                width: max-content;
              }

              .animate-marquee:hover {
                animation-play-state: paused;
              }
            </style>
<div className="flex animate-marquee items-center gap-x-16 sm:gap-x-24 opacity-90">
<div className="lowercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight font-montserrat flex-shrink-0" onclick="window.location.href='https://www.xerox.com/en-us'" role="button">Xerox</div>
<div className="lowercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight font-jakarta flex-shrink-0" onclick="window.location.href='https://squlptbody.com'" role="button">squlpt</div>
<div className="uppercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight font-playfair flex-shrink-0" onclick="window.location.href='https://www.johnwcrow.com'" role="button">CROW</div>
<div className="lowercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight flex-shrink-0" onclick="window.location.href='https://www.sheepisblack.com'" role="button">blacksheep</div>
<div className="flex items-center gap-2 sm:gap-4 cursor-pointer flex-shrink-0" onclick="window.location.href='https://www.spray-net.com'" role="button">
<svg className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2.5 12 L20 5"></path>
<path d="M2.5 12 L21.5 10"></path>
<path d="M2.5 12 L21.5 14"></path>
<path d="M2.5 12 L20 19"></path>
<path d="M2.5 12 L17 21"></path>
<path d="M2.5 12 L17 3"></path>
</svg>
<span className="font-medium text-3xl sm:text-4xl tracking-tight text-white uppercase">Spray•Net</span>
</div>
<div className="text-[54px] sm:text-6xl font-bold text-white lowercase tracking-tight flex-shrink-0" onclick="window.location.href='https://www.aspbranding.com'" role="button" style={{letterSpacing: '-0.08em'}}>asp</div>
<div className="flex flex-col text-white uppercase justify-center cursor-pointer flex-shrink-0" onclick="window.location.href='https://throughtheleash.com'" role="button">
<span className="text-sm sm:text-base font-medium tracking-wide">Through the</span>
<span className="leading-none border-b-[4px] sm:pb-0 text-4xl sm:text-5xl font-bold tracking-tight border-white pb-1.5">Leash</span>
</div>

<div className="lowercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight font-montserrat flex-shrink-0" onclick="window.location.href='https://www.xerox.com/en-us'" role="button">Xerox</div>
<div className="lowercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight font-jakarta flex-shrink-0" onclick="window.location.href='https://squlptbody.com'" role="button">squlpt</div>
<div className="uppercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight font-playfair flex-shrink-0" onclick="window.location.href='https://www.johnwcrow.com'" role="button">CROW</div>
<div className="lowercase cursor-pointer text-4xl sm:text-5xl font-medium text-white tracking-tight flex-shrink-0" onclick="window.location.href='https://www.sheepisblack.com'" role="button">blacksheep</div>
<div className="flex items-center gap-2 sm:gap-4 cursor-pointer flex-shrink-0" onclick="window.location.href='https://www.spray-net.com'" role="button">
<svg className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2.5 12 L20 5"></path>
<path d="M2.5 12 L21.5 10"></path>
<path d="M2.5 12 L21.5 14"></path>
<path d="M2.5 12 L20 19"></path>
<path d="M2.5 12 L17 21"></path>
<path d="M2.5 12 L17 3"></path>
</svg>
<span className="font-medium text-3xl sm:text-4xl tracking-tight text-white uppercase">Spray•Net</span>
</div>
<div className="text-[54px] sm:text-6xl font-bold text-white lowercase tracking-tight flex-shrink-0" onclick="window.location.href='https://www.aspbranding.com'" role="button" style={{letterSpacing: '-0.08em'}}>asp</div>
<div className="flex flex-col text-white uppercase justify-center cursor-pointer flex-shrink-0" onclick="window.location.href='https://throughtheleash.com'" role="button">
<span className="text-sm sm:text-base font-medium tracking-wide">Through the</span>
<span className="leading-none border-b-[4px] sm:pb-0 text-4xl sm:text-5xl font-bold tracking-tight border-white pb-1.5">Leash</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-zinc-900 border-t pt-24 pb-24 relative overflow-hidden z-10">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative z-10">
<div className="flex flex-col lg:flex-row gap-10 fade-up-element is-visible mb-0 gap-x-10 gap-y-10 items-start justify-between">
<h2 className="text-3xl font-medium tracking-tight text-white max-w-3xl leading-tight font-grotesk sm:text-6xl">
<span className="text-[#FE4C00]">What we build.</span> In the wild.
          </h2>
</div>
<div className="flex flex-col lg:flex-row gap-10 fade-up-element is-visible mb-16 gap-x-10 gap-y-10 items-start justify-between">
<h2 className="leading-tight sm:text-xl text-3xl font-medium text-white tracking-tight font-grotesk max-w-3xl">
            Some highlighted case studies:</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 fade-up-element is-visible gap-x-4 gap-y-4">
<div className="flex flex-col hover:border-zinc-700 transition-colors bg-zinc-900/40 h-[420px] border-zinc-800/50 border rounded-3xl pt-0 pr-8 pb-8 pl-8 backdrop-blur-md justify-between">
<div className="mt-8 border-t border-zinc-800/50 pt-6">
<div className="flex gap-3 items-center">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale border border-zinc-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1effcd7-271a-45bb-bcb1-c46652da778c_320w.jpg"/>
<div className="text-sm font-medium text-white leading-none mb-1 font-grotesk">Xerox</div>
</div>
</div>
<div>
<h3 className="leading-tight text-xl font-medium text-white tracking-tight font-grotesk mb-20 pb-0">Billing
                that matches reality.</h3>
<p className="text-zinc-400 leading-relaxed text-base font-light font-inter">An IT services firm billed per
                install. Installs become billable operations automatically—and invoice prep drops to minutes.</p>
</div>
</div>
<div className="flex flex-col hover:border-zinc-700 transition-colors bg-zinc-900/40 h-[420px] border-zinc-800/50 border rounded-3xl pt-0 pr-8 pb-8 pl-8 backdrop-blur-md justify-between">
<div className="mt-8 border-t border-zinc-800/50 pt-6">
<div className="flex gap-3 items-center">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale border border-zinc-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7db84f60-1d18-48fb-9287-aa8597dbcb7b_320w.jpg"/>
<div className="text-sm font-medium text-white leading-none mb-1 font-grotesk">Crow Estate Planning &amp;
                  Probate</div>
</div>
</div>
<div>
<h3 className="leading-tight text-xl font-medium text-white tracking-tight font-grotesk mb-8">AI-run case
                management built for how estate + probate actually runs.</h3>
<p className="text-zinc-400 leading-relaxed text-base font-light font-inter">One system for cases,
                communication, tasks, and documents—so nothing slips and attorneys aren't exposed.</p>
</div>
</div>
<div className="flex flex-col hover:border-zinc-700 transition-colors bg-zinc-900/40 h-[420px] border-zinc-800/50 border rounded-3xl pt-0 pr-8 pb-8 pl-8 backdrop-blur-md justify-between">
<div className="mt-8 border-t border-zinc-800/50 pt-6">
<div className="flex gap-3 items-center">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale border border-zinc-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54571749-f1d2-4b32-9e2f-136640adae0d_320w.jpg"/>
<div className="text-sm font-medium text-white leading-none mb-1 font-grotesk">Squlpt Body</div>
</div>
</div>
<div>
<h3 className="leading-tight text-xl font-medium text-white tracking-tight font-grotesk mb-20">A waiting room
                that runs itself.</h3>
<p className="text-zinc-400 leading-relaxed text-base font-light font-inter">Live queues, role-based
                dashboards, and automated reminders—so sessions move and utilization climbs.</p>
</div>
</div>
<div className="flex flex-col overflow-hidden group bg-center text-white bg-stone-950 h-[420px] bg-[url(https://images.unsplash.com/photo-1764946023990-2780e4905bb5?w=800&amp;q=80)] bg-cover border-zinc-800/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-[#FE4C00]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#FE4C00]/30 transition-colors duration-500">
</div>
<div className="flex justify-between items-start relative z-10 text-white">
<span className="text-lg font-medium tracking-tight font-grotesk">Case Studies</span>
<svg aria-hidden="true" className="text-white" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5">
</path>
</svg>
</div>
<div className="relative z-10 mt-auto mb-8">
<p className="leading-relaxed text-xl font-light text-white font-inter max-w-[260px] pb-12">See how operators
                remove bottlenecks, install leverage, and scale without adding headcount. Explore the case studies.</p>
</div>
<div className="space-y-3 text-sm text-zinc-300 relative z-10 font-inter">
<a className="inline-flex hover:bg-[#e64400] transition-colors sm:text-sm text-xs font-light text-white font-inter bg-[#FE4C00] rounded-full mt-4 px-5 py-2" href="/case-studies">Read
                Case Studies</a>
</div>
</div>
</div>
</div>
</section>
<section className="bg-black border-zinc-900 border-t pt-24 pb-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="fade-up-element flex flex-col sm:flex-row sm:items-end gap-6 z-40 is-visible mb-16 relative gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<h2 className="sm:text-6xl text-3xl font-medium text-white tracking-tight font-grotesk mb-4">Why Kindling?</h2>
<p className="sm:text-xl text-lg font-light text-zinc-400">Operator-built. Strategy-backed engineering. Outcomes
              over theory.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="flex flex-col gap-4">
<div className="flex-1 sm:p-8 flex fade-up-element min-h-[140px] is-visible bg-zinc-900/40 border-zinc-800/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center">
<svg className="shrink-0 w-[70px] h-[70px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(254, 76, 0)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7v11a1 1 0 0 0 1 1h11"></path>
<path d="M5.293 18.707 11 13"></path>
<circle cx="19" cy="19" r="2"></circle>
<circle cx="5" cy="5" r="2"></circle>
</svg>
<p className="leading-tight text-xl font-bold text-white font-sans">Built, led, and scaled 5 businesses</p>
</div>
<div className="flex-1 sm:p-8 flex gap-6 fade-up-element min-h-[140px] is-visible bg-zinc-900/40 border-zinc-800/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center">
<span className="text-8xl font-bold text-[#FE4C00] tracking-tight font-inter">17</span>
<p className="leading-tight text-xl font-light text-white font-inter">Years leading companies from startup to
                scale</p>
</div>
<div className="flex-1 sm:p-8 flex gap-6 fade-up-element min-h-[140px] is-visible bg-zinc-900/40 border-zinc-800/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center">
<p className="leading-tight text-2xl font-bold text-[#FE4C00] font-inter">We don't sell advice. We develop
                working systems.</p>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full fade-up-element group border border-zinc-800/50 is-visible">
<img alt="Vintage and Modern Cars in Residential Garage" className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d348428-4a26-439e-9abe-73272d1bc0a8_1600w.png"/>
<div className="transition-opacity duration-1000 group-hover:bg-black/20 bg-black/40 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-40 h-40 bg-[#FE4C00] animate-[spin_12s_linear_infinite]" style={{WebkitMask: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png\') center/contain no-repeat', mask: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png\') center/contain no-repeat'}}>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="flex-1 flex fade-up-element min-h-[140px] is-visible sm:p-8 bg-zinc-900/40 border-zinc-800/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center">
<p className="leading-tight text-xl font-light text-white font-inter">Three exits totaling</p>
<span className="text-8xl font-bold text-[#FE4C00] tracking-tight font-inter">$12B</span>
</div>
<div className="flex-1 sm:p-8 flex gap-6 fade-up-element min-h-[140px] is-visible bg-zinc-900/40 border-zinc-800/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-center">
<svg className="shrink-0 w-[70px] h-[70px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(254, 76, 0)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
<path d="M12 18V6"></path>
</svg>
<p className="leading-tight text-2xl font-bold text-white font-inter">8-, 9-, and 10-figure exits</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950/50 border-zinc-900 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="fade-up-element flex flex-col sm:flex-row sm:items-end gap-6 z-40 is-visible mb-16 relative gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<h2 className="sm:text-6xl text-3xl font-medium text-[#FE4C00] tracking-tight font-grotesk mb-4">Trusted by
              businesses</h2>
<h2 className="text-3xl font-medium text-white tracking-tight font-grotesk mb-4 sm:text-6xl">around the world.
            </h2>
<p className="text-lg sm:text-xl text-zinc-400 font-light">Hear from the partners we've helped scale.</p>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#">Read
            case studies</a>
</div>
<div className="flex flex-col sm:gap-24 pb-[5vh] relative gap-x-12 gap-y-12">
<div className="testimonial-sticky sticky top-24 z-10 w-full">
<div className="testimonial-inner w-full relative z-10" style={{filter: 'brightness(1)'}}>
<div className="absolute -top-16 -left-10 sm:-top-24 sm:-left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FE4C00] rounded-full blur-[100px] sm:blur-[120px] opacity-30 pointer-events-none z-0">
</div>
<div className="absolute -bottom-12 right-6 sm:-bottom-20 sm:right-16 w-48 sm:w-[280px] z-0 pointer-events-none drop-shadow-[0_10px_30px_rgba(254,76,0,0.2)] translate-y-[20%]">
<img alt="Orange Quote Marks" className="w-full h-auto opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5782a90f-3351-458e-b20b-e4b0a099d529_800w.png"/>
</div>
<div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[60px] rounded-3xl sm:rounded-[2rem] border border-zinc-700/50 shadow-2xl z-10">
</div>
<div className="z-20 sm:p-12 flex flex-col gap-10 sm:gap-14 pt-8 pr-8 pb-8 pl-8 relative gap-x-10 gap-y-10">
<div className="flex items-center justify-between w-full">
<span className="font-grotesk text-[#FE4C00] text-sm font-semibold uppercase tracking-widest">Client's Testimonial</span>
<span className="font-grotesk text-white text-sm font-semibold uppercase tracking-widest">008</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
<div className="lg:col-span-4 flex flex-col h-full">
<div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-6 sm:gap-8">
<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex-shrink-0 border border-zinc-800">
<img alt="Chris Stevenson" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0c9e981-4181-4858-920f-e00abb098e87_320w.jpg"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="sm:text-4xl leading-none text-3xl font-medium text-[#FE4C00] tracking-tight font-grotesk">
                          Chris Stevenson</h3>
<span className="sm:text-lg sm:mt-2 text-base font-light text-white font-sans mt-1">Founder &amp; Creative Director, Black Sheep Creative</span>
</div>
</div>
</div>
<div className="lg:col-span-8 flex flex-col sm:gap-12 sm:pb-0 pb-8 gap-x-8 gap-y-8">
<div className="flex flex-col gap-6 max-w-2xl font-light">
<p className="leading-relaxed text-base text-zinc-300 font-sans sm:text-2xl">
                        "Before Kindling, I was stuck in AI overwhelm—wasting days comparing tools and still not
                        producing better work. Kindling helped me implement AI workflows that fit how I work, and I cut
                        my workload by about 75% while delivering my best work in a fraction of the time. Kindling
                        didn't just speed me up—it transformed my business."
                      </p>
</div>
</div>
<div className="block lg:hidden mt-2">
<span className="font-sans text-white text-base font-semibold tracking-widest uppercase">HYPEFIN.COM</span>
</div>
</div>
</div>
</div>
</div>
<div className="testimonial-sticky sticky top-32 z-20 w-full">
<div className="testimonial-inner grid grid-cols-1 md:grid-cols-2 lg:gap-12 w-full backdrop-blur gap-x-8 gap-y-8" style={{filter: 'brightness(1)'}}>
<div className="group h-full">
<div className="sm:p-10 group-hover:border-zinc-700 transition-colors flex flex-col bg-zinc-900/60 h-full border-zinc-800/80 border rounded-2xl px-8 py-8 relative shadow-2xl backdrop-blur-lg">
<svg className="w-10 h-10 text-zinc-700 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
</path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z">
</path>
</svg>
<p className="sm:text-2xl leading-relaxed flex-grow text-xl font-light text-zinc-300 font-sans">
                    "Everything lived in my head—lead response was slow and follow-up was inconsistent. After the
                    Blueprint and implementation, we eliminated 10–15 hours/week of manual work and grew 20% month over
                    month."
                  </p>
<div className="flex border-zinc-800/50 border-t mt-10 pt-6 gap-x-4 gap-y-4 items-center">
<div className="h-12 w-12 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0 border border-zinc-700/50">
<img alt="Steve Urbanski" className="opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dcdd895-28af-4d5d-87be-b6281ddcffd2_320w.png"/>
</div>
<div>
<h3 className="group-hover:text-zinc-300 transition-colors text-lg font-normal text-white tracking-tight font-grotesk mb-1">
                        Steve Urbanski</h3>
<p className="sm:text-sm uppercase text-xs font-normal text-zinc-500 tracking-widest font-pixel">
                        Owner, Through the Leash</p>
</div>
</div>
</div>
</div>
<div className="group h-full">
<div className="sm:p-10 group-hover:border-zinc-700 transition-colors flex flex-col bg-zinc-900/60 h-full border-zinc-800/80 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md">
<svg className="w-10 h-10 text-zinc-700 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z">
</path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z">
</path>
</svg>
<p className="sm:text-2xl leading-relaxed flex-grow text-xl font-light text-zinc-300 font-sans">
                    "Before Kindling, I was the system—and that's not a system, it's a liability. Now the business has a
                    brain outside of me, and I'm spending less time being the answer to every question."
                  </p>
<div className="flex items-center gap-4 mt-10 pt-6 border-t border-zinc-800/50">
<div className="h-12 w-12 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0 border border-zinc-700/50">
<img alt="Peter Straub" className="opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1005be2-22ee-4d22-a288-9eafac19a3a7_320w.png"/>
</div>
<div>
<h3 className="group-hover:text-zinc-300 transition-colors text-lg font-normal text-white tracking-tight font-grotesk mb-1">
                        Peter Straub</h3>
<p className="sm:text-sm uppercase text-xs font-normal text-zinc-500 tracking-widest font-pixel">
                        Franchise Partner, SprayNet</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="testimonial-sticky sticky top-40 z-30 w-full"></div>
</div>
</div>
</section>
<div className="sm:px-6 lg:px-8 z-10 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="fade-up-element flex flex-col sm:flex-row is-visible gap-x-4 gap-y-4 items-center justify-center">
<a className="inline-flex items-center justify-center hover:bg-zinc-900 transition-colors sm:w-auto text-sm font-normal text-white font-inter bg-[#FE4C00] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://calendly.com/kindling-solutions/kindling-solutions" rel="noopener noreferrer" target="_blank">
          Book a Call
        </a>
</div>
<p className="leading-relaxed typography-reveal is-visible sm:text-2xl text-xl text-zinc-300 text-center max-w-5xl mr-auto mb-12 ml-auto">
<span className="overflow-hidden inline-block align-bottom -mb-1 font-inter max-w-6xl pt-0 pb-0">
<span className="reveal-text inline-block font-inter max-w-6xl mt-8">We'll confirm fit, then map the highest-leverage implementation path.</span>
</span>
</p>
</div>

<section className="sm:pb-12 z-40 bg-black border-zinc-900 border-t pt-24 pb-8 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="fade-up-element rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800/50 is-visible">
<img alt="Ignite Whats Next Keyboard Keys Banner" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18e3593-27b3-4df7-82f6-35fdb9b26ebb_1600w.png"/>
</div>
</div>
</section>

<section className="pb-24 pt-8 sm:pt-12 bg-black relative z-40">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="fade-up-element text-center mb-16 is-visible">
<img alt="Orange Message Bubble Icon" className="w-[4.2rem] sm:w-[4.8rem] h-auto mx-auto mb-6 animate-bounce" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0547f70f-43a3-4916-98fd-dab34ad57238_320w.png"/>
<h2 className="sm:text-4xl text-3xl font-medium text-white tracking-tight font-inter mb-4">Frequently Asked
            Questions</h2>
<p className="sm:text-xl text-lg font-light text-zinc-400">Everything you need to know about partnering with us.
          </p>
</div>
<div className="divide-y divide-zinc-800/70 border-y border-zinc-800/70">
<details className="fade-up-element group first:pt-6 last:pb-6 is-visible pt-6 pb-6">
<summary className="flex items-center justify-between cursor-pointer list-none text-zinc-200 hover:text-white transition-colors focus:outline-none">
<span className="text-lg font-normal tracking-tight font-grotesk">Is this just "AI tools"?</span>
<span className="flex-shrink-0 ml-4 flex items-center justify-center h-6 w-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<svg className="w-6 h-6 group-open:rotate-180 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content leading-relaxed text-lg font-light text-zinc-400 pt-4 pr-8 pb-2">No. Tools
              don't scale a business—systems do. We don't sell prompts or a pile of subscriptions. We build the
              operating layer that makes AI useful inside the work.</div>
</details>
<details className="fade-up-element group py-5 is-visible">
<summary className="flex cursor-pointer list-none hover:text-white transition-colors focus:outline-none text-zinc-200 items-center justify-between">
<span className="text-lg font-normal tracking-tight font-grotesk">What do you actually deliver?</span>
<span className="flex-shrink-0 ml-4 flex items-center justify-center h-6 w-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<svg className="w-6 h-6 group-open:rotate-180 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content leading-relaxed text-lg font-light text-zinc-400 pt-4 pr-8 pb-2">A working
              system behind the work: how tasks get captured, routed, executed, checked, and shipped—plus AI where it
              creates leverage. That usually includes automation, AI agents, dashboards/visibility, and the standards +
              accountability so it doesn't fall apart after week two.</div>
</details>
<details className="fade-up-element group is-visible pt-5 pb-5">
<summary className="flex cursor-pointer list-none hover:text-white transition-colors focus:outline-none text-zinc-200 items-center justify-between">
<span className="text-lg font-normal tracking-tight font-grotesk">What happens on the first call?</span>
<span className="flex-shrink-0 flex items-center justify-center group-hover:text-zinc-300 transition-colors text-zinc-500 w-6 h-6 ml-4">
<svg className="group-open:rotate-180 transition-transform duration-300 w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content leading-relaxed text-lg font-light text-zinc-400 pt-4 pr-8 pb-2">We diagnose
              the constraint, show you the highest-leverage system to build first, and give you clear next steps. If
              there's a fit, we scope the fastest path to install it.</div>
</details>
<details className="fade-up-element group py-5 is-visible">
<summary className="flex items-center justify-between cursor-pointer list-none text-zinc-200 hover:text-white transition-colors focus:outline-none">
<span className="text-lg font-normal tracking-tight font-grotesk">How do we start?</span>
<span className="flex-shrink-0 ml-4 flex items-center justify-center h-6 w-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<svg className="group-open:rotate-180 transition-transform duration-300 w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content pt-4 pb-2 text-lg text-zinc-400 leading-relaxed pr-8 font-light">We start with
              a diagnostic Blueprint to map how work actually moves, find the constraint, and outline the
              highest-leverage system to build first. Then we scope the custom build from there.</div>
</details>
<details className="fade-up-element group last:pb-6 is-visible pt-5 pb-6">
<summary className="flex items-center justify-between cursor-pointer list-none text-zinc-200 hover:text-white transition-colors focus:outline-none">
<span className="font-grotesk text-lg font-normal tracking-tight">What does it cost?</span>
<span className="flex-shrink-0 ml-4 flex items-center justify-center h-6 w-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<svg className="w-6 h-6 group-open:rotate-180 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content pt-4 pb-2 text-lg text-zinc-400 leading-relaxed pr-8 font-light">We start with
              the Blueprint (21 days • $5K) to map how work actually moves, find the constraint, and define what to
              build first. From there, we scope FullStak to your needs—only what's required, no more, no less.</div>
</details>
<details className="fade-up-element group last:pb-6 is-visible pt-5 pb-6">
<summary className="flex cursor-pointer list-none hover:text-white transition-colors focus:outline-none text-zinc-200 items-center justify-between">
<span className="text-lg font-normal tracking-tight font-grotesk">How do you work with our current tools?</span>
<span className="flex-shrink-0 ml-4 flex items-center justify-center h-6 w-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<svg className="w-6 h-6 group-open:rotate-180 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content leading-relaxed text-lg font-light text-zinc-400 pt-4 pr-8 pb-2">We build
              around what you already use. If a tool stays, we integrate it. If a tool is the bottleneck, we replace
              it—but only when the math is obvious.</div>
</details>
<details className="fade-up-element group last:pb-6 is-visible pt-5 pb-6">
<summary className="flex cursor-pointer list-none hover:text-white transition-colors focus:outline-none text-zinc-200 items-center justify-between">
<span className="text-lg font-normal tracking-tight font-grotesk">How fast will we see impact?</span>
<span className="flex-shrink-0 ml-4 flex items-center justify-center h-6 w-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<svg className="w-6 h-6 group-open:rotate-180 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content leading-relaxed text-lg font-light text-zinc-400 pt-4 pr-8 pb-2">You'll see
              early wins in weeks—faster follow-up, cleaner handoffs, fewer "where is this?" pings. Then it compounds as
              more of the business runs through the system.</div>
</details>
<details className="fade-up-element group last:pb-6 is-visible pt-5 pb-6">
<summary className="flex cursor-pointer list-none hover:text-white transition-colors focus:outline-none text-zinc-200 items-center justify-between">
<span className="text-lg font-normal tracking-tight font-grotesk">Do we need to be technical?</span>
<span className="flex-shrink-0 ml-4 flex items-center justify-center h-6 w-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<svg className="group-open:rotate-180 transition-transform duration-300 w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="accordion-content leading-relaxed text-lg font-light text-zinc-400 pt-4 pr-8 pb-2">No. This
              isn't a course. We implement with you, train your team on how the system runs, and make sure someone
              internal can own it.</div>
</details>
</div>
</div>
</section>

<section className="overflow-hidden flex whitespace-nowrap border-y bg-[#FE4C00] border-[#FE4C00] pt-5 pb-5">
<div className="flex w-max items-center" style={{animation: 'scrollMarquee 40s linear infinite'}}>
<div className="flex shrink-0 font-medium font-space-grotesk pr-12 gap-x-12 gap-y-12 items-center">
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
<span className="font-space-grotesk text-2xl md:text-3xl font-semibold tracking-normal text-black uppercase">One Spark. Your Systems. Infinite Scale.</span>
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
<span className="font-space-grotesk text-2xl md:text-3xl font-semibold tracking-normal text-black uppercase">One Spark. Your Systems. Infinite Scale.</span>
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
<span className="font-space-grotesk text-2xl md:text-3xl font-semibold tracking-normal text-black uppercase">One Spark. Your Systems. Infinite Scale.</span>
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
</div>
<div className="flex shrink-0 items-center gap-12 pr-12">
<span className="font-space-grotesk text-2xl md:text-3xl font-semibold tracking-normal text-black uppercase">One Spark. Your Systems. Infinite Scale.</span>
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
<span className="font-space-grotesk text-2xl md:text-3xl font-semibold tracking-normal text-black uppercase">One Spark. Your Systems. Infinite Scale.</span>
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
<span className="font-space-grotesk text-2xl md:text-3xl font-semibold tracking-normal text-black uppercase">One Spark. Your Systems. Infinite Scale.</span>
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
<span className="font-space-grotesk text-2xl md:text-3xl font-semibold tracking-normal text-black uppercase">One Spark. Your Systems. Infinite Scale.</span>
<img alt="Pinwheel Logo" className="w-[34px] h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21a3a351-757d-4dc4-ac9e-be28def84fcb_320w.png"/>
</div>
</div>
</section>
</main>

<footer className="bg-black z-40 border-zinc-900 border-t pt-20 pb-10 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 gap-x-12 gap-y-12">
<div className="md:col-span-6 lg:col-span-5">
<img alt="Kindling Solutions" className="-ml-2 w-auto h-16 rounded-sm mb-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb846fe5-c422-46d6-b6c7-7729fedb2b5a_320w.png"/>
<div className="flex flex-col gap-6 w-full font-sans mt-2">
<p className="leading-relaxed text-lg font-light text-zinc-100 font-inter max-w-md">Join our newsletter and stay
              updated on the latest trends in AI-Automation World.</p>
<div className="flex w-full max-w-[400px] mt-2">
<input className="flex-1 h-12 bg-white text-zinc-900 placeholder:text-zinc-400 placeholder:font-mono font-mono px-4 text-sm outline-none min-w-0 rounded-none border-none" placeholder="Email Address" type="email"/>
<button className="hover:bg-[#e64400] transition-colors whitespace-nowrap border-none focus:outline-none text-sm font-medium text-black font-inter bg-[#FE4C00] h-12 rounded-none pr-6 pl-6 cursor-pointer" onclick="window.location.href='https://calendly.com/kindling-solutions/kindling-solutions'" role="button" type="button">SIGN-UP</button>
</div>
</div>
</div>
<div className="md:col-span-3 lg:col-span-2 lg:col-start-8 font-inter">
<h4 className="font-sans text-white text-lg font-normal mb-8">Social</h4>
<ul className="space-y-5">
<li className=""><a className="hover:text-white transition-colors flex items-center gap-2 group text-base font-light text-zinc-400" href="https://x.com/KindlingSpark">X</a>
</li>
<li className=""><a className="hover:text-white transition-colors flex items-center gap-2 group text-base font-light text-zinc-400" href="https://www.facebook.com/kindlingsolutions/">Facebook</a>
</li>
<li className=""><a className="hover:text-white transition-colors flex items-center gap-2 group text-base font-light text-zinc-400" href="https://www.youtube.com/@KindlingSolutions">YouTube</a>
</li>
<li className=""><a className="hover:text-white transition-colors flex items-center gap-2 group text-base font-light text-zinc-400" href="https://www.linkedin.com/company/kindling-solutions/">LinkedIn</a>
</li>
<li className=""><a className="hover:text-white transition-colors flex items-center gap-2 group text-base font-light text-zinc-400" href="https://www.instagram.com/kindlingsolutions/">Instagram</a>
</li>
</ul>
</div>
<div className="md:col-span-3 lg:col-span-3">
<h4 className="text-lg font-normal text-white font-inter mb-8">Get in touch</h4>
<p className="leading-relaxed text-base font-light text-zinc-400 font-inter max-w-[280px] mb-8">Ready to start
    your next project?<br/>Let's build something extraordinary.</p>
<a className="inline-flex items-center justify-center hover:bg-[#e64400] transition-colors hover:shadow-[0_0_30px_rgba(254,76,0,0.5)] text-sm font-normal text-white bg-[#FE4C00] rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(254,76,0,0.3)]" href="mailto:hello@kindling-solutions.com">Email
  us Here</a>
</div>
</div>
<div className="pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm font-light text-zinc-500">© 2026 Kindling Solutions. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-zinc-300 font-light text-sm transition-colors" href="#">Privacy Policy</a>
<a className="text-zinc-500 hover:text-zinc-300 font-light text-sm transition-colors" href="#">Terms of
            Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
