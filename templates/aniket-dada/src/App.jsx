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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Initialize icons with consistent thinner stroke widths
      lucide.createIcons({
          strokeWidth: 1.5
      });
    


      (function () {
        var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var revealItems = Array.prototype.slice.call(document.querySelectorAll('.aura-scroll-reveal'));
        if (reduceMotion) {
          revealItems.forEach(function (item) { item.classList.add('is-visible'); });
          return;
        }
        if ('IntersectionObserver' in window) {
          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
          revealItems.forEach(function (item) { observer.observe(item); });
        } else {
          revealItems.forEach(function (item) { item.classList.add('is-visible'); });
        }
        var ticking = false;
        function updateScrollEffects() {
          document.documentElement.style.setProperty('--aura-scroll', String(window.scrollY || window.pageYOffset || 0));
          ticking = false;
        }
        function requestUpdate() {
          if (!ticking) {
            window.requestAnimationFrame(updateScrollEffects);
            ticking = true;
          }
        }
        updateScrollEffects();
        window.addEventListener('scroll', requestUpdate, { passive: true });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{opacity: '0.75', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 86%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 86%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent py-24 aura-section-depth">


<div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-24 aura-scroll-reveal is-visible">
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide mb-8 inline-flex items-center gap-2 shadow-2xl">
<span className="text-neutral-200">Happy 24th Birthday</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white mb-6 drop-shadow-2xl">Happy Birthday, <br className=""/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Aniket Dada !</span></h1>
<p className="text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-normal">
          Wishing you a day filled with joy, laughter, love, and all the
          happiness you deserve. May this new chapter bring you success,
          adventure, and unforgettable memories.
        </p>
</div>

<div className="absolute bottom-12 z-10 animate-bounce"></div>
</section>

<section className="relative z-20 bg-neutral-950/85 backdrop-blur-sm py-32 px-6" id="message">
<div className="max-w-4xl mx-auto">
<div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-10 md:p-16 backdrop-blur-2xl relative overflow-hidden group aura-scroll-reveal">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center gap-4 mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              A Birthday Note For You
            </h2>
</div>
<div className="space-y-8 text-lg md:text-xl text-neutral-400 leading-relaxed relative z-10 font-normal">
<p className="">
              Happy birthday, brother. Today is all about celebrating you—the
              kindness, strength, humor, and heart you bring into every room. I
              hope you feel truly appreciated and loved.
            </p>
<p className="">
              As you turn 24, I’m wishing you a year full of growth, good
              health, big wins, and moments that make you proud. Keep chasing
              your dreams and enjoying every step of the journey.
            </p>
<p className="text-neutral-200 font-medium pt-4 text-xl">
              I’m grateful to call you my brother. Have the happiest birthday
              and an amazing year ahead.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950/85 backdrop-blur-sm pb-40 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-3 max-w-3xl mx-auto p-4 rounded-[2rem] bg-neutral-900/50 border border-white/10 relative overflow-hidden shadow-2xl shadow-indigo-500/10 aura-scroll-reveal">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-transparent to-white/5 pointer-events-none"></div>
<div className="absolute -inset-10 bg-indigo-400/10 blur-3xl pointer-events-none"></div>
<img alt="Man with open arms in lush green mountains" className="relative w-full h-[28rem] md:h-[34rem] object-cover object-center rounded-[1.5rem] border border-white/10 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/115da7ef-1875-45e9-8356-6144fd7003e2_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 rounded-b-[1.5rem] bg-gradient-to-t from-black/70 to-transparent p-8">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
                Embracing 24
              </h3>
<p className="text-neutral-200">
                Open arms, fresh heights, and a new year full of adventure.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">



</div>
</div>
</section>

<footer className="border-t border-white/5 py-16 text-center bg-neutral-950/90 backdrop-blur-sm aura-scroll-reveal">
<p className="text-lg text-neutral-600 flex items-center justify-center gap-2">
        Made with
        <i className="w-4 h-4 text-neutral-500" data-lucide="heart"></i>
        to wish my brother a happy birthday
      </p>
</footer>

<style>
      :root { --aura-scroll: 0; }
      .aura-ambient-field {
        position: fixed;
        inset: -18%;
        z-index: -9;
        pointer-events: none;
        background:
          radial-gradient(circle at 18% 18%, rgba(250, 204, 21, 0.16), transparent 34%),
          radial-gradient(circle at 82% 28%, rgba(255, 255, 255, 0.08), transparent 30%),
          radial-gradient(circle at 50% 82%, rgba(250, 204, 21, 0.10), transparent 36%);
        opacity: 0.9;
        filter: blur(18px) saturate(120%);
        transform: translate3d(0, 0, 0);
        animation: auraAmbientDrift 18s ease-in-out infinite alternate;
        will-change: transform;
      }
      .aura-enhanced-bg { opacity: 0.72; transform: translate3d(0, calc(var(--aura-scroll) * -0.035px), 0); will-change: transform; }
      .aura-section-depth::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          radial-gradient(circle at 50% calc(18% + (var(--aura-scroll) * 0.018px)), rgba(250, 204, 21, 0.14), transparent 34%),
          linear-gradient(to bottom, rgba(255,255,255,0.04), transparent 42%, rgba(9,9,11,0.58));
        mix-blend-mode: screen;
        opacity: 0.85;
      }
      .aura-scroll-reveal {
        opacity: 0;
        transform: translateY(30px) scale(0.985);
        filter: blur(10px);
        transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1), filter 900ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: opacity, transform, filter;
      }
      .aura-scroll-reveal.is-visible { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
      @keyframes auraAmbientDrift {
        0% { transform: translate3d(-1.5%, -1%, 0) scale(1); }
        100% { transform: translate3d(1.5%, 1%, 0) scale(1.06); }
      }
      @media (prefers-reduced-motion: reduce) {
        .aura-ambient-field { animation: none; }
        .aura-enhanced-bg { transform: none; }
        .aura-scroll-reveal { opacity: 1; transform: none; filter: none; transition: none; }
      }
    </style>


    </>
  );
}
