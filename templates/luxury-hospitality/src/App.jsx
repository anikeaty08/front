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



      document.addEventListener('DOMContentLoaded', function () {
        gsap.registerPlugin(ScrollTrigger);

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        gsap.to('#hero-marquee', {
          xPercent: -50,
          duration: 28,
          ease: 'none',
          repeat: -1
        });

        function splitWords(el) {
          const words = el.textContent.trim().split(/\s+/);
          el.textContent = '';
          words.forEach(function (word, index) {
            const outer = document.createElement('span');
            const inner = document.createElement('span');
            outer.style.display = 'inline-block';
            outer.style.overflow = 'hidden';
            outer.style.verticalAlign = 'top';
            inner.style.display = 'inline-block';
            inner.style.transform = 'translate3d(0, 110%, 0)';
            inner.style.opacity = '0';
            inner.style.filter = 'blur(14px)';
            inner.textContent = word;
            outer.appendChild(inner);
            el.appendChild(outer);
            if (index < words.length - 1) el.appendChild(document.createTextNode(' '));
          });
        }

        document.querySelectorAll('.reveal-words').forEach(function (el) {
          splitWords(el);
          gsap.to(el.querySelectorAll('span span'), {
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true
            },
            y: '0%',
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.035,
            ease: 'power3.out'
          });
        });

        function batchReveal(selector, options) {
          const settings = options || {};
          const items = gsap.utils.toArray(selector);
          if (!items.length) return;
          gsap.set(items, {
            opacity: 0,
            x: settings.x || 0,
            y: settings.y || 42,
            filter: 'blur(' + (settings.blur || 14) + 'px)',
            willChange: 'transform, opacity, filter'
          });
          ScrollTrigger.batch(items, {
            start: settings.start || 'top 88%',
            once: true,
            onEnter: function (batch) {
              gsap.to(batch, {
                opacity: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)',
                duration: settings.duration || 0.85,
                stagger: { each: settings.stagger || 0.08, from: 'start' },
                ease: 'power3.out',
                clearProps: 'willChange,transform,filter,opacity'
              });
            }
          });
        }

        gsap.fromTo('header nav > *',
          { opacity: 0, y: -18, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75, stagger: 0.08, ease: 'power3.out' }
        );

        gsap.fromTo('.hero-copy',
          { opacity: 0, x: -36, filter: 'blur(18px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo('.hero-copy .relative.z-10 > *',
          { opacity: 0, y: 30, filter: 'blur(14px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, delay: 0.15, stagger: 0.12, ease: 'power3.out' }
        );

        gsap.fromTo('.hero-media',
          { opacity: 0, x: 44, scale: 0.98, filter: 'blur(20px)' },
          { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 1.15, delay: 0.1, ease: 'power3.out' }
        );

        gsap.fromTo('.hero-media .interactive',
          { opacity: 0, y: 24, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75, delay: 0.55, stagger: 0.09, ease: 'power3.out' }
        );

        batchReveal('.story-sticky > div:first-child, .story-sticky > p, .story-sticky > div:last-child', { y: 34, stagger: 0.1 });
        batchReveal('.feature-card', { y: 60, blur: 18, stagger: 0.09 });
        batchReveal('.testimonial-card', { y: 46, blur: 16, stagger: 0.1 });
        batchReveal('.price-card', { y: 50, blur: 16, stagger: 0.1 });
        batchReveal('#contact form label, #contact form button', { y: 28, blur: 12, stagger: 0.07 });
        batchReveal('.gallery-item', { y: 44, blur: 16, stagger: 0.08 });
        batchReveal('.list-row', { x: -28, y: 16, blur: 12, stagger: 0.08 });
        batchReveal('footer .grid > div, footer .mt-12 > span', { y: 28, blur: 12, stagger: 0.07, start: 'top 92%' });

        gsap.utils.toArray('.parallax-img').forEach(function (img) {
          gsap.to(img, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8
            }
          });
        });

        gsap.to('.story-image', {
          scale: 1.08,
          filter: 'grayscale(0%) brightness(1)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        });

        document.querySelectorAll('.interactive, a, button').forEach(function (el) {
          el.addEventListener('mouseenter', function () {
            gsap.to(el, { scale: 1.015, duration: 0.28, ease: 'power2.out' });
          });
          el.addEventListener('mouseleave', function () {
            gsap.to(el, { scale: 1, duration: 0.28, ease: 'power2.out' });
          });
        });

        gsap.to('#page-glow', {
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
          }
        });
      });
    


(function () {
  function playVideo(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }

  function setupVideo(video) {
    if (video.__auraVideoReady === true) return;
    video.__auraVideoReady = true;
    video.removeAttribute("data-aura-video-ready");
    video.removeAttribute("data-aura-video-played");
    video.muted = true;
    video.playsInline = true;

    var preset = video.dataset.auraVideoPreset || "loop-in-view";
    if (preset === "hover") {
      video.addEventListener("mouseenter", function () {
        playVideo(video);
      });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      playVideo(video);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (preset === "play-once" && video.__auraVideoPlayed === true) {
            return;
          }
          playVideo(video);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    if (preset === "play-once") {
      video.addEventListener("ended", function () {
        video.__auraVideoPlayed = true;
      }, { once: true });
    }

    observer.observe(video);
  }

  function setupVideos() {
    document
      .querySelectorAll("video[data-aura-video-preset]")
      .forEach(setupVideo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupVideos);
  } else {
    setupVideos();
  }
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
      
<div className="pointer-events-none fixed inset-0 z-0 opacity-70" id="page-glow" style={{background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.85), transparent 42%), radial-gradient(circle at 85% 35%, rgba(25,28,33,0.08), transparent 34%)'}}></div>
<header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
<nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-[#e7e7e7]/70 px-4 py-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-[#e7e7e7]/90">
<a className="group flex items-center gap-3" href="#hero">
<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-xs font-medium tracking-tighter text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            AO
          </span>
<span className="text-sm font-medium tracking-tight">AMAORI</span>
</a>
<div className="hidden items-center gap-7 md:flex">
<a className="text-xs font-normal text-zinc-600 transition-colors duration-300 hover:text-black" href="#features">
            Sanctuary
          </a>
<a className="text-xs font-normal text-zinc-600 transition-colors duration-300 hover:text-black" href="#pricing">
            Suites
          </a>
<a className="text-xs font-normal text-zinc-600 transition-colors duration-300 hover:text-black" href="#gallery">
            Gallery
          </a>
<a className="text-xs font-normal text-zinc-600 transition-colors duration-300 hover:text-black" href="#contact">
            Reserve
          </a>
</div>
<a className="group inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#191C21] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#e7e7e7]" href="#contact">
          Book stay
          <iconify-icon className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</nav>
</header>
<main className="relative z-10">
<section className="relative min-h-screen px-4 pb-12 pt-28 md:px-8 md:pt-32" id="hero">
<div className="mx-auto max-w-7xl border border-zinc-300/70 bg-[#e7e7e7]/55 p-4 shadow-sm backdrop-blur-sm md:p-8">
<div className="pointer-events-none absolute left-4 top-28 h-5 w-5 border-l-2 border-t-2 border-zinc-400 md:left-8 md:top-32"></div>
<div className="pointer-events-none absolute right-4 top-28 h-5 w-5 border-r-2 border-t-2 border-zinc-400 md:right-8 md:top-32"></div>
<div className="mb-6 overflow-hidden border-b border-zinc-300/70 pb-4">
<div className="flex w-max whitespace-nowrap" id="hero-marquee">
<div className="flex items-center gap-8 px-4 text-xs font-normal uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
<span>okinawa oceanfront</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>five-star ryukyu hospitality</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>private villas</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>coral lagoon spa</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>okinawa oceanfront</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>five-star ryukyu hospitality</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>private villas</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>coral lagoon spa</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
</div>
<div className="flex items-center gap-8 px-4 text-xs font-normal uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
<span>okinawa oceanfront</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>five-star ryukyu hospitality</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>private villas</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>coral lagoon spa</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>okinawa oceanfront</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>five-star ryukyu hospitality</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>private villas</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>coral lagoon spa</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
</div>
</div>
</div>
<div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
<div className="hero-copy relative overflow-hidden rounded-2xl bg-[#111111] p-6 text-white shadow-2xl md:p-10 lg:col-span-5">
<div className="absolute inset-0 opacity-40" style={{background: 'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.16), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 45%)'}}></div>
<div className="relative z-10 flex min-h-[34rem] flex-col justify-between">
<div>
<div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-normal text-zinc-300 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                    Five-star coastal retreat · Okinawa, Japan
                  </div>
<h1 className="reveal-words text-5xl font-medium leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
                    Your island escape should feel inevitable.
                  </h1>
<p className="mt-6 max-w-md text-sm font-light leading-relaxed text-zinc-400 md:text-base">
                    AMAORI is a cinematic oceanfront hotel where Ryukyu craft,
                    private pool villas, coral-blue water, and anticipatory
                    service meet in one quiet Okinawan rhythm.
                  </p>
</div>
<div className="mt-10">
<div className="flex flex-col gap-3 sm:flex-row">
<a className="interactive group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50" href="#pricing">
                      Explore suites
                      <iconify-icon className="text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="interactive group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-normal text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" href="#gallery">
                      View sanctuary
                      <iconify-icon className="text-base" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
<div>
<div className="text-2xl font-medium tracking-tight">42</div>
<div className="mt-1 text-xs text-zinc-500">
                        Private suites
                      </div>
</div>
<div>
<div className="text-2xl font-medium tracking-tight">3</div>
<div className="mt-1 text-xs text-zinc-500">
                        Chef concepts
                      </div>
</div>
<div>
<div className="text-2xl font-medium tracking-tight">24h</div>
<div className="mt-1 text-xs text-zinc-500">Butler desk</div>
</div>
</div>
</div>
</div>
</div>
<div className="hero-media group relative min-h-[32rem] overflow-hidden rounded-2xl bg-[#191C21] shadow-2xl lg:col-span-7">
<video aria-label="Luxury oceanfront hotel terrace overlooking blue water" className="parallax-img h-full w-full scale-110 object-cover grayscale-[20%] brightness-75 contrast-110 transition-transform duration-700 group-hover:scale-105" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f38069e-f5c8-4966-8b65-fb6ac29401f2_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779113213014-8756d3b3-ba30-4d7b-bebc-ccedcd340df2.mp4"></video>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(17,17,17,0.88), rgba(17,17,17,0.12) 50%, rgba(17,17,17,0.25))'}}></div>
<div className="absolute inset-0 mix-blend-overlay opacity-30" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E\')'}}></div>
<div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-black/25 p-4 text-white shadow-2xl backdrop-blur-xl md:left-8 md:top-8">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
<iconify-icon className="text-xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400">Guest rating</div>
<div className="text-sm font-medium">5.0 · 1,842 stays</div>
</div>
</div>
</div>
<div className="absolute bottom-5 left-5 right-5 grid gap-3 md:bottom-8 md:left-8 md:right-8 md:grid-cols-3">
<div className="interactive rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
<iconify-icon className="text-2xl text-zinc-200" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="mt-4 text-sm font-medium">Dawn rituals</div>
<div className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Tea, breathwork, and reef-light mornings.
                  </div>
</div>
<div className="interactive rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
<iconify-icon className="text-2xl text-zinc-200" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="mt-4 text-sm font-medium">Lagoon spa</div>
<div className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Mineral baths facing the East China Sea.
                  </div>
</div>
<div className="interactive rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
<iconify-icon className="text-2xl text-zinc-200" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="mt-4 text-sm font-medium">Island table</div>
<div className="mt-1 text-xs leading-relaxed text-zinc-400">
                    Okinawan produce, fire, salt, and seaweed.
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="story-section relative px-4 py-16 md:px-8 md:py-24" id="features">
<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="story-sticky lg:sticky lg:top-28">
<div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
<span className="h-2.5 w-0.5 bg-zinc-400"></span>
                The stay, composed
              </div>
<h2 className="reveal-words text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Every detail follows the tide.
              </h2>
<p className="mt-5 max-w-md text-sm font-normal leading-relaxed text-zinc-600 md:text-base">
                From airport arrival to your final sunset, AMAORI choreographs a
                stay that feels quiet, personal, and completely handled.
              </p>
<div className="mt-8 overflow-hidden rounded-2xl bg-[#111111] p-1 shadow-2xl">
<img alt="Five star hotel suite with warm interior design" className="story-image h-72 w-full rounded-xl object-cover grayscale-[35%] brightness-90 transition-transform duration-700 hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5ab9c1c-bc9e-418a-a347-381c5b110842_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5ab9c1c-bc9e-418a-a347-381c5b110842_3840w.png"/>
</div>
</div>
</div>
<div className="grid gap-4 lg:col-span-7">
<article className="feature-card interactive rounded-2xl bg-[#111111] p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:p-8">
<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
<iconify-icon className="text-2xl" icon="solar:key-minimalistic-square-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight">
                    Private arrival, no friction
                  </h3>
<p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-zinc-400">
                    A dedicated host meets you at Naha Airport, transfers you
                    along the coast, and prepares your suite before you touch
                    the door.
                  </p>
</div>
<span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  01
                </span>
</div>
</article>
<article className="feature-card interactive rounded-2xl border border-zinc-300/70 bg-[#e7e7e7]/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 md:p-8">
<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white">
<iconify-icon className="text-2xl" icon="solar:bedside-table-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight">
                    Suites designed for silence
                  </h3>
<p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
                    Deep terraces, stone baths, linen rooms, and acoustic
                    privacy create a restorative rhythm between sea, garden, and
                    sleep.
                  </p>
</div>
<span className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-500">
                  02
                </span>
</div>
</article>
<article className="feature-card interactive rounded-2xl bg-[#191C21] p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:p-8">
<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div>
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
<iconify-icon className="text-2xl" icon="solar:map-point-wave-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight">
                    Rare Okinawa access
                  </h3>
<p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-zinc-400">
                    Private reef snorkeling, pottery studio visits, sunset
                    sanshin performances, and chef-led market mornings.
                  </p>
</div>
<span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  03
                </span>
</div>
</article>
</div>
</div>
</section>
<section className="px-4 py-16 md:px-8 md:py-24" id="testimonials">
<div className="mx-auto max-w-7xl">
<div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div>
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                Proof from quiet travelers
              </div>
<h2 className="reveal-words max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Chosen by guests who notice everything.
              </h2>
</div>
<div className="flex -space-x-3">
<img alt="Guest portrait" className="h-12 w-12 rounded-full border-2 border-[#e7e7e7] object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<img alt="Guest portrait" className="h-12 w-12 rounded-full border-2 border-[#e7e7e7] object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<img alt="Guest portrait" className="h-12 w-12 rounded-full border-2 border-[#e7e7e7] object-cover grayscale" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#e7e7e7] bg-[#111111] text-xs font-medium text-white">
                900+
              </div>
</div>
</div>
<div className="grid gap-4 md:grid-cols-3">
<article className="testimonial-card interactive rounded-2xl bg-[#111111] p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:p-8">
<div className="mb-8 flex gap-1 text-zinc-300">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-normal leading-relaxed tracking-tight">
                “The service was almost invisible, yet every need was met before
                we named it. Okinawa felt cinematic from the first morning.”
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Mina guest avatar" className="h-11 w-11 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<div className="text-sm font-medium">Mina Takahashi</div>
<div className="text-xs text-zinc-500">Tokyo</div>
</div>
</div>
</article>
<article className="testimonial-card interactive rounded-2xl border border-zinc-300/70 bg-white/35 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/50 md:p-8">
<div className="mb-8 flex gap-1 text-zinc-900">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-normal leading-relaxed tracking-tight">
                “The villa, the reef, the food, the sound of wind through the
                palms — everything had restraint. Nothing felt overdesigned.”
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Daniel guest avatar" className="h-11 w-11 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<div className="text-sm font-medium">Daniel Reed</div>
<div className="text-xs text-zinc-500">Melbourne</div>
</div>
</div>
</article>
<article className="testimonial-card interactive rounded-2xl bg-[#191C21] p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:p-8">
<div className="mb-8 flex gap-1 text-zinc-300">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-normal leading-relaxed tracking-tight">
                “A five-star hotel with genuine soul. The team arranged a
                private pottery visit that became the highlight of our year.”
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="Clara guest avatar" className="h-11 w-11 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<div className="text-sm font-medium">Clara Moreau</div>
<div className="text-xs text-zinc-500">Paris</div>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="px-4 py-16 md:px-8 md:py-24" id="pricing">
<div className="mx-auto max-w-7xl">
<div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
<div className="lg:col-span-7">
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                Suites and villas
              </div>
<h2 className="reveal-words text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Stay packages with nothing left uncertain.
              </h2>
</div>
<p className="max-w-md text-sm leading-relaxed text-zinc-600 md:text-base lg:col-span-5">
              All rates include breakfast, airport coordination, wellness
              access, and a dedicated guest experience host.
            </p>
</div>
<div className="grid gap-4 lg:grid-cols-3">
<article className="price-card interactive rounded-2xl border border-zinc-300/70 bg-white/35 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 md:p-8">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-medium tracking-tight">Ocean Suite</h3>
<iconify-icon className="text-2xl text-zinc-500" icon="solar:cloud-sun-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-3 text-sm leading-relaxed text-zinc-600">
                For couples seeking ocean air, quiet mornings, and refined
                comfort.
              </p>
<div className="mt-8 flex items-end gap-2">
<span className="text-4xl font-medium tracking-tight">¥96,000</span>
<span className="pb-1 text-xs text-zinc-500">/ night</span>
</div>
<ul className="mt-8 space-y-3 text-sm text-zinc-700">
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base text-zinc-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Private terrace and sea view bath
                </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base text-zinc-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Daily Okinawan breakfast
                </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base text-zinc-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Lagoon spa thermal access
                </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl" href="#contact">
                Request suite
              </a>
</article>
<article className="price-card interactive relative overflow-hidden rounded-2xl bg-[#111111] p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:p-8">
<div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
<div className="relative z-10">
<div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-300">
                  Most requested
                </div>
<div className="flex items-center justify-between">
<h3 className="text-2xl font-medium tracking-tight">
                    Pool Villa
                  </h3>
<iconify-icon className="text-2xl text-zinc-300" icon="solar:water-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-3 text-sm font-light leading-relaxed text-zinc-400">
                  A standalone sanctuary with a private pool, garden courtyard,
                  and tailored rituals.
                </p>
<div className="mt-8 flex items-end gap-2">
<span className="text-4xl font-medium tracking-tight">
                    ¥168,000
                  </span>
<span className="pb-1 text-xs text-zinc-500">/ night</span>
</div>
<ul className="mt-8 space-y-3 text-sm text-zinc-300">
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Private heated pool and garden
                  </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Evening aperitif ceremony
                  </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Dedicated villa host
                  </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl" href="#contact">
                  Reserve villa
                </a>
</div>
</article>
<article className="price-card interactive rounded-2xl border border-zinc-300/70 bg-white/35 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 md:p-8">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-medium tracking-tight">
                  Amami Residence
                </h3>
<iconify-icon className="text-2xl text-zinc-500" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-3 text-sm leading-relaxed text-zinc-600">
                For families and long stays requiring privacy, ceremony, and
                generous space.
              </p>
<div className="mt-8 flex items-end gap-2">
<span className="text-4xl font-medium tracking-tight">
                  ¥290,000
                </span>
<span className="pb-1 text-xs text-zinc-500">/ night</span>
</div>
<ul className="mt-8 space-y-3 text-sm text-zinc-700">
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base text-zinc-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Two-bedroom residence
                </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base text-zinc-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Private chef breakfast option
                </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-base text-zinc-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Curated island itinerary
                </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl" href="#contact">
                Plan residence
              </a>
</article>
</div>
</div>
</section>
<section className="px-4 py-16 md:px-8 md:py-24" id="contact">
<div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
<div className="rounded-2xl bg-[#191C21] p-6 text-white shadow-2xl md:p-10 lg:col-span-5">
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
              Reservation desk
            </div>
<h2 className="reveal-words text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Tell us how the island should feel.
            </h2>
<p className="mt-5 text-sm font-light leading-relaxed text-zinc-400 md:text-base">
              Our guest experience team replies within one business day with
              availability, tailored recommendations, and arrival details.
            </p>
<div className="mt-10 space-y-4">
<div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:phone-calling-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-medium">+81 98 000 1122</div>
<div className="text-xs text-zinc-500">Reservations, daily</div>
</div>
</div>
<div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-medium">stay@amaori.jp</div>
<div className="text-xs text-zinc-500">
                    Private itinerary support
                  </div>
</div>
</div>
</div>
</div>
<form className="rounded-2xl border border-zinc-300/70 bg-white/40 p-6 shadow-sm backdrop-blur-sm md:p-10 lg:col-span-7">
<div className="grid gap-4 md:grid-cols-2">
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                  Name
                </span>
<input className="w-full rounded-2xl border border-zinc-300 bg-[#e7e7e7]/70 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white focus:ring-4 focus:ring-zinc-900/5" placeholder="Your name" type="text"/>
</label>
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                  Email
                </span>
<input className="w-full rounded-2xl border border-zinc-300 bg-[#e7e7e7]/70 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white focus:ring-4 focus:ring-zinc-900/5" placeholder="you@example.com" type="email"/>
</label>
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                  Arrival
                </span>
<input className="w-full rounded-2xl border border-zinc-300 bg-[#e7e7e7]/70 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-zinc-900 focus:bg-white focus:ring-4 focus:ring-zinc-900/5" type="date"/>
</label>
<label className="group block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                  Suite type
                </span>
<select className="w-full appearance-none rounded-2xl border border-zinc-300 bg-[#e7e7e7]/70 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-zinc-900 focus:bg-white focus:ring-4 focus:ring-zinc-900/5">
<option>Ocean Suite</option>
<option>Pool Villa</option>
<option>Amami Residence</option>
</select>
</label>
</div>
<label className="mt-4 block">
<span className="mb-2 block text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                Request
              </span>
<textarea className="w-full resize-none rounded-2xl border border-zinc-300 bg-[#e7e7e7]/70 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white focus:ring-4 focus:ring-zinc-900/5" placeholder="Tell us about your ideal Okinawa stay." rows="5"></textarea>
</label>
<button className="interactive mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#e7e7e7]" type="button">
              Send inquiry
              <iconify-icon className="text-base" icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</section>
<section className="px-4 py-16 md:px-8 md:py-24" id="gallery">
<div className="mx-auto max-w-7xl">
<div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div>
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                Visual proof
              </div>
<h2 className="reveal-words max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                A hotel shaped by reef light and shadow.
              </h2>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-black" href="#contact">
              Request private lookbook
              <iconify-icon className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
<div className="gallery-item group relative min-h-80 overflow-hidden rounded-2xl bg-[#111111] shadow-2xl md:col-span-2 md:row-span-2">
<img alt="Luxury resort pool" className="h-full w-full object-cover grayscale-[15%] brightness-90 transition-transform duration-700 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90644e8b-14b7-460a-9c13-40e81a6a53fe_1600w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90644e8b-14b7-460a-9c13-40e81a6a53fe_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-5 left-5 text-white">
<div className="text-xl font-medium tracking-tight">
                  Pool villas
                </div>
<div className="mt-1 text-xs text-zinc-400">
                  Heated courtyards and deep quiet
                </div>
</div>
</div>
<div className="gallery-item group relative min-h-56 overflow-hidden rounded-2xl bg-[#111111] shadow-xl">
<img alt="Hotel lobby" className="h-full w-full object-cover grayscale-[20%] brightness-90 transition-transform duration-700 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e8072d8-7d38-461d-8629-dab8ca78e009_1600w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e8072d8-7d38-461d-8629-dab8ca78e009_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-medium">Arrival hall</div>
</div>
</div>
<div className="gallery-item group relative min-h-56 overflow-hidden rounded-2xl bg-[#111111] shadow-xl">
<img alt="Fine dining table" className="h-full w-full object-cover grayscale-[25%] brightness-90 transition-transform duration-700 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7527a596-2941-4c12-81ea-b2b095e4882c_1600w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7527a596-2941-4c12-81ea-b2b095e4882c_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-medium">Island dining</div>
</div>
</div>
<div className="gallery-item group relative min-h-56 overflow-hidden rounded-2xl bg-[#111111] shadow-xl md:col-span-2">
<img alt="Ocean resort at sunset" className="h-full w-full object-cover grayscale-[10%] brightness-90 transition-transform duration-700 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a60c2e0b-4c59-4a94-976f-e302c028e8d9_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a60c2e0b-4c59-4a94-976f-e302c028e8d9_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-medium">Sunset terrace</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-4 py-16 md:px-8 md:py-24" id="list">
<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
              Included with every stay
            </div>
<h2 className="reveal-words text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              The essentials are already elevated.
            </h2>
</div>
<div className="lg:col-span-7">
<div className="divide-y divide-zinc-300/80 overflow-hidden rounded-2xl border border-zinc-300/70 bg-white/35 shadow-sm backdrop-blur-sm">
<div className="list-row interactive flex flex-col gap-4 p-5 transition-colors duration-300 hover:bg-white/45 md:flex-row md:items-center md:justify-between md:p-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-zinc-600" icon="solar:route-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-medium tracking-tight">
                    Airport coordination
                  </span>
</div>
<p className="max-w-sm text-sm leading-relaxed text-zinc-600">
                  Private transfers, luggage handling, and check-in before
                  arrival.
                </p>
</div>
<div className="list-row interactive flex flex-col gap-4 p-5 transition-colors duration-300 hover:bg-white/45 md:flex-row md:items-center md:justify-between md:p-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-zinc-600" icon="solar:tea-cup-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-medium tracking-tight">
                    Daily breakfast
                  </span>
</div>
<p className="max-w-sm text-sm leading-relaxed text-zinc-600">
                  Okinawan vegetables, sea salt, tropical fruit, rice, and fresh
                  fish.
                </p>
</div>
<div className="list-row interactive flex flex-col gap-4 p-5 transition-colors duration-300 hover:bg-white/45 md:flex-row md:items-center md:justify-between md:p-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-zinc-600" icon="solar:spa-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-medium tracking-tight">
                    Wellness access
                  </span>
</div>
<p className="max-w-sm text-sm leading-relaxed text-zinc-600">
                  Thermal bathing, ocean sauna, meditation deck, and movement
                  studio.
                </p>
</div>
<div className="list-row interactive flex flex-col gap-4 p-5 transition-colors duration-300 hover:bg-white/45 md:flex-row md:items-center md:justify-between md:p-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-zinc-600" icon="solar:compass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-medium tracking-tight">
                    Experience host
                  </span>
</div>
<p className="max-w-sm text-sm leading-relaxed text-zinc-600">
                  Restaurant bookings, reef guides, craft visits, and quiet
                  celebrations.
                </p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative z-10 px-4 pb-6 pt-16 md:px-8">
<div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#111111] p-6 text-white shadow-2xl md:p-10">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="mb-5 flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-medium tracking-tighter text-black">
                AO
              </span>
<span className="text-sm font-medium tracking-tight">
                AMAORI OKINAWA
              </span>
</div>
<p className="max-w-md text-sm font-light leading-relaxed text-zinc-400">
              A five-star ocean sanctuary on Okinawa’s quiet coast, designed for
              travelers who prefer precision, privacy, and a slower kind of
              luxury.
            </p>
</div>
<div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
<div>
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                Explore
              </div>
<div className="space-y-3 text-sm text-zinc-400">
<a className="block transition-colors hover:text-white" href="#features">
                  Sanctuary
                </a>
<a className="block transition-colors hover:text-white" href="#pricing">
                  Suites
                </a>
<a className="block transition-colors hover:text-white" href="#gallery">
                  Gallery
                </a>
</div>
</div>
<div>
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                Contact
              </div>
<div className="space-y-3 text-sm text-zinc-400">
<a className="block transition-colors hover:text-white" href="mailto:stay@amaori.jp">
                  stay@amaori.jp
                </a>
<a className="block transition-colors hover:text-white" href="tel:+81980001122">
                  +81 98 000 1122
                </a>
<span className="block">Onna Village, Okinawa</span>
</div>
</div>
<div>
<div className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500" style={{fontFamily: 'JetBrains Mono, ui-monospace, monospace'}}>
                Social
              </div>
<div className="flex gap-3">
<a className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" href="#">
<iconify-icon className="text-lg" icon="solar:video-frame-play-horizontal-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 md:flex-row">
<span>© 2026 AMAORI Okinawa. All rights reserved.</span>
<span>Privacy · Terms · Accessibility</span>
</div>
</div>
</footer>


    </>
  );
}
