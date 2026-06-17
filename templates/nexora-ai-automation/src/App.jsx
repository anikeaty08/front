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


  (function () {
    if (window.__nexoraMotionInitialized) return;
    window.__nexoraMotionInitialized = true;

    document.addEventListener('DOMContentLoaded', function () {
      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.body.classList.add('motion-ready');

      function addLoadTarget(selector, delay) {
        var element = document.querySelector(selector);
        if (!element) return;
        element.classList.add('load-fade');
        element.style.setProperty('--load-delay', delay + 'ms');
        window.requestAnimationFrame(function () {
          element.classList.add('is-visible');
        });
      }

      if (!reduceMotion) {
        addLoadTarget('header', 80);
        addLoadTarget('[data-load="eyebrow"]', 180);
        addLoadTarget('[data-load="headline"]', 280);
        addLoadTarget('#hero-p > p', 390);
        addLoadTarget('[data-load="cta"]', 500);
        addLoadTarget('[data-load="dashboard"]', 660);
      } else {
        document.querySelectorAll('header, [data-load="eyebrow"], [data-load="headline"], #hero-p > p, [data-load="cta"], [data-load="dashboard"]').forEach(function (element) {
          element.classList.add('is-visible');
        });
      }

      var sections = Array.prototype.slice.call(document.querySelectorAll('main > section'));
      sections.slice(1).forEach(function (section, index) {
        section.classList.add('scroll-reveal');
        section.style.setProperty('--reveal-delay', Math.min(index * 40, 160) + 'ms');
      });

      if ('IntersectionObserver' in window && !reduceMotion) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

        document.querySelectorAll('.scroll-reveal').forEach(function (element) {
          observer.observe(element);
        });
      } else {
        document.querySelectorAll('.scroll-reveal').forEach(function (element) {
          element.classList.add('is-visible');
        });
      }

      var canUseCursor = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
      var glow = document.getElementById('cursor-glow');
      var dot = document.getElementById('cursor-dot');
      if (!canUseCursor || !glow || !dot || reduceMotion) return;

      var mouseX = window.innerWidth / 2;
      var mouseY = window.innerHeight / 2;
      var glowX = mouseX;
      var glowY = mouseY;
      var dotX = mouseX;
      var dotY = mouseY;

      window.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        document.body.classList.add('cursor-active');
      }, { passive: true });

      window.addEventListener('mouseleave', function () {
        document.body.classList.remove('cursor-active');
      });

      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(function (element) {
        element.addEventListener('mouseenter', function () {
          document.body.classList.add('cursor-hover');
        });
        element.addEventListener('mouseleave', function () {
          document.body.classList.remove('cursor-hover');
        });
      });

      function animateCursor() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        dotX += (mouseX - dotX) * 0.32;
        dotY += (mouseY - dotY) * 0.32;

        glow.style.transform = 'translate3d(' + glowX + 'px, ' + glowY + 'px, 0) translate(-50%, -50%)';
        dot.style.transform = 'translate3d(' + dotX + 'px, ' + dotY + 'px, 0) translate(-50%, -50%)';
        window.requestAnimationFrame(animateCursor);
      }

      animateCursor();
    });
  })();



  !function(){
    var u = window.UnicornStudio;
    if (u && u.init) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function(){ u.init(); });
      } else {
        u.init();
      }
    } else {
      window.UnicornStudio = { isInitialized: false };
      var i = document.createElement("script");
      i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.12/dist/unicornStudio.umd.js";
      i.onload = function(){
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", function(){ UnicornStudio.init(); });
        } else {
          UnicornStudio.init();
        }
      };
      (document.head || document.body).appendChild(i);
    }
  }();



  (function () {
    var button = document.getElementById('mobile-menu-button');
    var menu = document.getElementById('mobile-navigation');
    if (!button || !menu) return;

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      button.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      menu.classList.toggle('hidden', isOpen);
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Open navigation menu');
        menu.classList.add('hidden');
      });
    });
  })();



      lucide.createIcons({
          attrs: {
            "stroke-width": 1.5
          }
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
      video.muted = true;
      video.playsInline = true;

      var preset = video.dataset.auraVideoPreset || "loop-in-view";

      if (!('IntersectionObserver' in window)) {
        playVideo(video);
        return;
      }

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (preset === "play-once" && video.__auraVideoPlayed === true) return;
            playVideo(video);
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.25 });

      video.addEventListener("ended", function () {
        video.__auraVideoPlayed = true;
      });

      observer.observe(video);
    }

    document.querySelectorAll('section video[data-aura-video-preset]').forEach(setupVideo);
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
      
<div aria-hidden="true" id="cursor-glow"></div>
<div aria-hidden="true" id="cursor-dot"></div>
<main className="w-full max-w-7xl mx-auto min-h-screen overflow-x-clip bg-[#05070d] border-x border-white/15">
<section className="min-h-[1080px] overflow-hidden sm:px-6 lg:pl-8 lg:pr-8 lg:pb-32 bg-[#030610] w-full border-white/15 border-b mx-auto pr-8 pb-12 pl-8 relative">

<div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[800px] w-[1672px] max-w-none -translate-x-1/2 overflow-hidden">
<div className="absolute left-1/2 top-[-120px] h-[941px] w-[1672px] max-w-none -translate-x-1/2 opacity-100 sm:top-[-112px] lg:top-[-104px]" data-us-project="5cVInE9KMG4bk2odXqPQ"></div>
</div>

<div className="pointer-events-none absolute left-0 top-[700px] z-[1] h-[180px] w-full bg-gradient-to-b from-transparent via-[#030610]/55 to-[#030610]"></div>
<div className="relative z-20 mx-auto max-w-7xl">
<header className="relative z-50 -mx-8 w-[calc(100%+4rem)] border-b border-white/15 bg-[#02050d]/90 px-8 backdrop-blur-xl sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 lg:-mx-8 lg:w-[calc(100%+4rem)] lg:px-8 load-fade is-visible" style={{'--load-delay': '80ms'}}>
<div className="flex sm:px-4 lg:px-2 w-full h-[76px] max-w-7xl mr-auto ml-auto pr-2 pl-2 gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-3" href="/home">
<svg aria-label="NEXORA" className="overflow-visible drop-shadow-[0_0_12px_rgba(255,255,255,0.22)] h-[24px] w-[160px] sm:w-[190px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 360 42" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="nexoraText" x1="0" x2="360" y1="0" y2="42">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="45%" stop-color="#f8fafc"></stop>
<stop offset="100%" stop-color="#dbeafe"></stop>
</lineargradient>
</defs>
<path className="" d="M0 41V1H9.5L32 27V1H41V41H31.5L9 15V41H0Z" fill="url(#nexoraText)"></path>
<path d="M64 1H104V9H64V1Z" fill="url(#nexoraText)"></path>
<path className="" d="M64 17H99V25H64V17Z" fill="url(#nexoraText)"></path>
<path className="" d="M64 33H104V41H64V33Z" fill="url(#nexoraText)"></path>
<path className="" d="M124 1H135L149 16.5L163 1H174L155 21L175 41H164L149 25L134 41H123L143 21L124 1Z" fill="url(#nexoraText)"></path>
<path className="" d="M236 21C236 32.8 227.3 42 215 42C202.7 42 194 32.8 194 21C194 9.2 202.7 0 215 0C227.3 0 236 9.2 236 21ZM203.5 21C203.5 27.9 208.1 33.5 215 33.5C221.9 33.5 226.5 27.9 226.5 21C226.5 14.1 221.9 8.5 215 8.5C208.1 8.5 203.5 14.1 203.5 21Z" fill="url(#nexoraText)"></path>
<path className="" d="M257 41V1H278.5C287.2 1 293 6.2 293 14C293 19.4 289.9 23.6 284.9 25.3L296.5 41H285.6L275.5 27H266.5V41H257ZM266.5 19H277.5C281.2 19 283.5 17.2 283.5 14C283.5 10.8 281.2 9 277.5 9H266.5V19Z" fill="url(#nexoraText)"></path>
<path className="" d="M328 41H318L335 1H345L362 41H352L340 11L328 41Z" fill="url(#nexoraText)"></path>
<path d="M333.5 41L340 24L346.5 41H333.5Z" fill="#020617"></path>
</svg>
</a>

<nav aria-label="Main navigation" className="hidden items-center gap-5 md:flex">
<a className="rounded-full px-4 py-2 text-sm font-light text-white/58 transition-colors hover:bg-white/[0.06] hover:text-white" href="/platform">Platform</a>
<a className="rounded-full px-4 py-2 text-sm font-light text-white/58 transition-colors hover:bg-white/[0.06] hover:text-white" href="/resources">Resources</a>
<a className="rounded-full px-4 py-2 text-sm font-light text-white/58 transition-colors hover:bg-white/[0.06] hover:text-white" href="/pricing">Pricing</a>
<a className="rounded-full px-4 py-2 text-sm font-light text-white/58 transition-colors hover:bg-white/[0.06] hover:text-white" href="/contact">Contact</a>
</nav>
<div className="flex gap-x-3 gap-y-3 items-center" onclick="window.location.href='/startfree'" role="button">

<a aria-label="Start free" className="group relative hidden items-center justify-center overflow-hidden rounded-full border border-cyan-200/70 bg-slate-950/90 px-5 py-2.5 text-xs font-normal text-white shadow-[0_0_18px_rgba(34,211,238,0.42),0_0_38px_rgba(37,99,235,0.28),inset_0_0_14px_rgba(34,211,238,0.18)] transition-all duration-300 hover:scale-[1.02] sm:inline-flex" href="/startfree">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300 opacity-60 blur-[1.5px]"></span>
<span className="absolute inset-[1.5px] rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-black"></span>
<span className="absolute left-3 right-3 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-cyan-200/20 via-blue-300/8 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-6 right-6 h-5 bg-blue-500/25 blur-lg"></span>
<span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.55)]" onclick="window.location.href='/startfree'" role="button">Start Free</span>
</a>

<button aria-controls="mobile-navigation" aria-expanded="false" aria-label="Open navigation menu" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white md:hidden" id="mobile-menu-button" type="button">
<svg aria-hidden="true" className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden border-t border-white/10 pb-4 pt-3 md:hidden" id="mobile-navigation">
<nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1">
<a className="rounded-2xl px-4 py-3 text-sm font-light text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white" href="/platform">Platform</a>
<a className="rounded-2xl px-4 py-3 text-sm font-light text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white" href="/resources">Resources</a>
<a className="rounded-2xl px-4 py-3 text-sm font-light text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white" href="/pricing">Pricing</a>
<a className="rounded-2xl px-4 py-3 text-sm font-light text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white" href="/contact">Contact</a>
<a className="mt-2 rounded-2xl border border-cyan-200/40 bg-cyan-300/10 px-4 py-3 text-center text-sm font-normal text-white shadow-[0_0_24px_rgba(34,211,238,0.18)]" href="/startfree">Start Free</a>
</nav>
</div>
</header>

<div className="flex flex-col sm:pt-24 text-center max-w-5xl mx-auto pt-12 items-center" id="hero-p">
<div className="inline-flex text-sm font-normal text-white/80 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-full mb-8 px-5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md gap-x-2 gap-y-2 items-center load-fade is-visible" data-load="eyebrow" id="hero-tag" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px', '--load-delay': '180ms'}}>
<svg aria-hidden="true" className="lucide lucide-sparkles h-4 w-4 text-cyan-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Early Access opens this Fall
            </div>
<h1 className="max-w-4xl text-5xl font-normal leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl load-fade is-visible" data-load="headline" id="hero-h1" style={{'--load-delay': '280ms'}}>Scale faster with<br className="hidden sm:block"/>intelligent AI <span className="bg-gradient-to-r from-teal-200 via-cyan-300 to-violet-400 bg-clip-text text-transparent">workflows</span></h1>
<p className="leading-8 text-lg font-normal text-white max-w-2xl mt-8 load-fade is-visible" style={{'--load-delay': '390ms'}}>
              Automate operations, surface insights, and empower your team
              <br className="hidden sm:block"/>
              with a unified AI platform built for modern businesses.
            </p>
<a className="group relative mt-12 inline-flex items-center justify-center overflow-hidden rounded-[28px] border border-cyan-200/80 bg-slate-950/90 px-10 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.65),0_0_70px_rgba(37,99,235,0.45),inset_0_0_22px_rgba(34,211,238,0.22)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(34,211,238,0.85),0_0_90px_rgba(37,99,235,0.65),inset_0_0_28px_rgba(34,211,238,0.28)] load-fade is-visible" data-load="cta" href="#" id="hero-cta" style={{'--load-delay': '500ms'}}>
<span className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300 opacity-80 blur-[2px]"></span>
<span className="absolute inset-[2px] rounded-[26px] bg-gradient-to-b from-slate-900 via-slate-950 to-black"></span>
<span className="absolute left-4 right-4 top-2 h-1/2 rounded-full bg-gradient-to-b from-cyan-200/25 via-blue-300/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-10 right-10 h-8 bg-blue-500/35 blur-xl"></span>
<span className="absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-cyan-400/45 blur-2xl"></span>
<span className="absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-blue-500/50 blur-2xl"></span>
<span className="relative z-10 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.75)]">
                Start Free
              </span>
</a>
</div>

<div className="flex min-h-[520px] flex-col sm:px-6 lg:mt-24 lg:flex-col items-center lg:px-8 lg:mb-0 w-full z-30 mt-32 mb-12 px-4 relative">
<div className="overflow-hidden bg-[#050914] w-full max-w-7xl border-blue-500/20 border rounded-xl mr-auto ml-auto pt-0 pr-0 pb-0 pl-0 relative load-fade is-visible" data-load="dashboard" id="hero-dashboard" style={{'--load-delay': '660ms'}}>
<div className="overflow-hidden bg-[#050914] w-full max-w-7xl border-blue-500/20 border rounded-xl mr-auto ml-auto pt-1.5 pr-1.5 pb-1.5 pl-1.5 relative" data-dashboard-frame="true">
<div className="flex min-h-[520px] overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>

<aside className="hidden w-[210px] shrink-0 flex-col justify-between border-r border-white/10 bg-[#06111f]/60 p-4 lg:flex">

<div className="">

<div className="mb-7">
<p className="text-sm font-semibold tracking-[-0.04em] text-white">
              NEXORA
            </p>
<p className="text-[10px] text-white/35">Social automation</p>
</div>

<div className="">
<p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/30">
              Main
            </p>
<nav className="space-y-1">
<a className="group flex items-center gap-2.5 text-xs font-medium text-white border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 relative" href="#">
<span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-cyan-300"></span>
<svg className="h-4 w-4 text-cyan-200" fill="none" viewbox="0 0 24 24">
<path d="M4 13H10V20H4V13Z" stroke="currentColor" strokeWidth="1.8"></path>
<path d="M14 4H20V20H14V4Z" stroke="currentColor" strokeWidth="1.8"></path>
<path d="M4 4H10V9H4V4Z" stroke="currentColor" strokeWidth="1.8"></path>
</svg>

                Overview
              </a>
<a className="group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-white/55 transition hover:bg-white/[0.04] hover:text-white" href="#">
<svg className="h-4 w-4 text-white/35 group-hover:text-cyan-200" fill="none" viewbox="0 0 24 24">
<path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
</path>
</svg>
                Workflows
              </a>
<a className="group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-white/55 transition hover:bg-white/[0.04] hover:text-white" href="#">
<svg className="h-4 w-4 text-white/35 group-hover:text-cyan-200" fill="none" viewbox="0 0 24 24">
<path d="M4 18V10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M10 18V6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M16 18V13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M22 20H2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
</svg>
                Insights
              </a>
<a className="group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-white/55 transition hover:bg-white/[0.04] hover:text-white" href="#">
<svg className="h-4 w-4 text-white/35 group-hover:text-cyan-200" fill="none" viewbox="0 0 24 24">
<path d="M8 12H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M12 8V16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
<circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"></circle>
</svg>
                Integrations
              </a>
</nav>
</div>

<div className="mt-6">
<p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/30">
              Workspace
            </p>
<nav className="space-y-1">
<a className="group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-white/55 transition hover:bg-white/[0.04] hover:text-white" href="#">
<svg className="h-4 w-4 text-white/35 group-hover:text-cyan-200" fill="none" viewbox="0 0 24 24">
<path d="M5 8H19M5 12H19M5 16H13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
</path>
</svg>
                Campaigns
              </a>
<a className="group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-white/55 transition hover:bg-white/[0.04] hover:text-white" href="#">
<svg className="h-4 w-4 text-white/35 group-hover:text-cyan-200" fill="none" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"></circle>
<path d="M12 3V5M12 19V21M3 12H5M19 12H21M5.6 5.6L7 7M17 17L18.4 18.4M18.4 5.6L17 7M7 17L5.6 18.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
</svg>
                Settings
              </a>
</nav>
</div>
</div>

<div className="">

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="relative">
<div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] text-cyan-200">
<svg className="h-3.5 w-3.5" fill="none" viewbox="0 0 24 24">
<path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</div>
<h4 className="text-xs font-semibold text-white">
                Upgrade Plan
              </h4>
<p className="mt-1 text-[11px] leading-4 text-white/45">
                Unlock advanced workflows and automation insights.
              </p>
<button className="text-[11px] transition hover:bg-white/[0.08] font-medium text-white w-full border-white/10 border rounded-full mt-3 pt-1.5 pb-1.5">
                          Upgrade
                        </button>
</div>
</div>

<button className="flex transition hover:bg-white/[0.04] text-left bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-full rounded-xl mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-2.5 gap-y-2.5 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<div className="min-w-0 flex-1">
<p className="truncate text-[11px] font-medium text-white/80">
                          Nexora Studio
                        </p>
<p className="truncate text-[10px] text-white/35">
                          Pro workspace
                        </p>
</div>
<svg className="h-3.5 w-3.5 shrink-0 text-white/35" fill="none" viewbox="0 0 24 24">
<path d="M9 6L15 12L9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</aside>

<div className="flex-1 overflow-hidden bg-[#07101c] p-4 lg:p-5">
<header className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
<div className="">
<h2 className="text-xl font-medium tracking-[-0.03em] text-white">Automation Hub</h2>
<p className="mt-1 text-xs text-white/45">
              Monitor, manage, and optimize your AI workflows.
            </p>
</div>
<div className="flex items-center gap-3">
<div className="hidden h-9 items-center rounded-xl border border-white/10 bg-white/[0.035] px-3 text-xs text-white/40 sm:flex sm:w-60">
              Search workflows...
            </div>

<button className="flex items-center gap-2 rounded-xl border border-transparent px-2 py-1.5 text-left transition hover:border-white/10 hover:bg-white/[0.035]">
<div className="bg-center w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/840846ea-2944-4fd2-9919-2d45d90b4634_320w.webp)] bg-cover rounded-full ring-white/10 ring-1"></div>
<div className="hidden leading-tight sm:block">
<p className="text-xs font-normal text-white">
                            Olivia Carter
                          </p>
<p className="text-[11px] text-white/45">
                            Account settings
                          </p>
</div>
<svg className="hidden h-3.5 w-3.5 text-white/35 sm:block" fill="none" viewbox="0 0 24 24">
<path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</header>

<div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-lg px-3 py-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>
<p className="text-xs text-white/55">Workflow Runs</p>
<div className="mt-2 flex items-end gap-2">
<span className="text-xl font-normal text-white">
                          12,842
                        </span>
<span className="text-[11px] text-emerald-300">
                          ‚Üë 18.6%
                        </span>
</div>
<p className="mt-1 text-[11px] text-white/40">
              vs last 7 days
            </p>
<svg className="mt-2 overflow-visible w-[188px] h-[32px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '188px', height: '32px'}} viewbox="0 0 140 42">
<path className="" d="M2 34 L15 22 L26 27 L39 15 L52 20 L65 9 L78 17 L91 6 L104 12 L117 3 L138 22" fill="none" stroke="#2dd4bf" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-lg px-3 py-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>
<p className="text-xs text-white/55">Tasks Automated</p>
<div className="mt-2 flex items-end gap-2">
<span className="text-xl font-normal text-white">
                          98.7%
                        </span>
<span className="text-[11px] text-emerald-300">
                          ‚Üë 12.4%
                        </span>
</div>
<div className="mt-2 flex items-center justify-between">
<p className="text-[11px] text-white/40">Success rate</p>
<div className="h-11 w-11 rounded-full border-[5px] border-cyan-300/80 border-l-white/10"></div>
</div>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-lg px-3 py-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>
<p className="text-xs text-white/55">Time Saved</p>
<div className="mt-2 flex items-end gap-2">
<span className="text-xl font-normal text-white">320h</span>
<span className="text-[11px] text-emerald-300">
                          ‚Üë 22.1%
                        </span>
</div>
<p className="mt-1 text-[11px] text-white/40">
              vs last 7 days
            </p>
<div className="mt-3 flex h-9 items-end gap-1.5">
<span className="h-3 w-1.5 rounded-full bg-violet-500/80"></span>
<span className="h-5 w-1.5 rounded-full bg-blue-400/80"></span>
<span className="h-8 w-1.5 rounded-full bg-indigo-400/80"></span>
<span className="h-4 w-1.5 rounded-full bg-violet-500/80"></span>
<span className="h-9 w-1.5 rounded-full bg-blue-400/80"></span>
<span className="h-6 w-1.5 rounded-full bg-indigo-400/80"></span>
</div>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-lg px-3 py-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>
<p className="text-xs text-white/55">Cost Savings</p>
<div className="mt-2 flex items-end gap-2">
<span className="text-xl font-normal text-white">
                          $24,560
                        </span>
<span className="text-[11px] text-emerald-300">
                          ‚Üë 15.3%
                        </span>
</div>
<svg className="mt-2 h-8 w-full overflow-visible" viewbox="0 0 140 42">
<path className="" d="M2 34 L16 32 L29 25 L41 27 L53 18 L66 19 L79 10 L92 14 L105 4 L118 13 L136 2" fill="none" stroke="#a855f7" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 gap-3 xl:grid-cols-6 mt-3">
<div className="xl:col-span-3 font-sans bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 to-blue-500/0 rounded-lg pt-3 pr-3 pb-3 pl-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1))', '--border-radius-before': '8px'}}>

<div className="mb-2 flex items-center justify-between">
<div className="flex items-center gap-1">
<h2 className="text-sm font-light text-white">Engagement Overview</h2>
<svg className="cursor-help text-slate-500 transition-colors hover:text-slate-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
</div>
<button className="flex items-center gap-1 rounded border border-white/10 bg-white/[0.035] px-1.5 py-1 text-[10px] font-light text-slate-300 transition-colors hover:bg-white/[0.05]">
                          Last 7 days
                          <svg className="text-slate-400" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>

<div className="mb-3 flex items-center gap-3 px-0.5">
<div className="flex items-center gap-1.5">
<div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]"></div>
<span className="text-[10px] text-slate-400">
                            Engagements
                          </span>
</div>
<div className="flex items-center gap-1.5">
<div className="h-1.5 w-1.5 rounded-full bg-[#a855f7]"></div>
<span className="text-[10px] text-slate-400">
                            Impressions
                          </span>
</div>
</div>

<div className="relative h-40 pl-7 pr-2 pt-2">

<div className="absolute bottom-5 left-0 top-2 w-7">
<span className="absolute top-[0%] -mt-1.5 w-full text-right text-[9px] text-slate-500">
                            50K
                          </span>
<span className="absolute top-[20%] -mt-1.5 w-full text-right text-[9px] text-slate-500">
                            40K
                          </span>
<span className="absolute top-[40%] -mt-1.5 w-full text-right text-[9px] text-slate-500">
                            30K
                          </span>
<span className="absolute top-[60%] -mt-1.5 w-full text-right text-[9px] text-slate-500">
                            20K
                          </span>
<span className="absolute top-[80%] -mt-1.5 w-full text-right text-[9px] text-slate-500">
                            10K
                          </span>
<span className="absolute top-[100%] -mt-1.5 w-full text-right text-[9px] text-slate-500">
                            0
                          </span>
</div>

<div className="absolute bottom-5 inset-x-7 top-2 flex flex-col justify-between">
<div className="w-full border-t border-white/[0.05]"></div>
<div className="w-full border-t border-white/[0.05]"></div>
<div className="w-full border-t border-white/[0.05]"></div>
<div className="w-full border-t border-white/[0.05]"></div>
<div className="w-full border-t border-white/[0.05]"></div>
<div className="w-full border-t border-white/[0.05]"></div>
</div>

<div className="absolute bottom-5 inset-x-7 top-2">

<div className="absolute inset-0">

<svg className="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradient-engagements" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.14"></stop>
<stop offset="100%" stop-color="#38bdf8" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,70 L16.6,50 L33.3,60 L50,30 L66.6,45 L83.3,25 L100,10" fill="none" stroke="#38bdf8" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,70 L16.6,50 L33.3,60 L50,30 L66.6,45 L83.3,25 L100,10 L100,100 L0,100 Z" fill="url(#gradient-engagements)"></path>
</svg>

<svg className="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradient-impressions" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#a855f7" stop-opacity="0.14"></stop>
<stop offset="100%" stop-color="#a855f7" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,85 L16.6,75 L33.3,80 L50,60 L66.6,65 L83.3,45 L100,20" fill="none" stroke="#a855f7" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="" d="M0,85 L16.6,75 L33.3,80 L50,60 L66.6,65 L83.3,45 L100,20 L100,100 L0,100 Z" fill="url(#gradient-impressions)"></path>
</svg>
</div>

<div className="absolute bottom-0 left-[50%] top-0 w-px bg-white/15"></div>

<div className="absolute left-[50%] top-[30%] -ml-1 h-2 w-2 rounded-full border border-[#07101c] bg-[#38bdf8]">
</div>
<div className="absolute left-[50%] top-[60%] -ml-1 h-2 w-2 rounded-full border border-[#07101c] bg-[#a855f7]">
</div>
</div>

<div className="absolute left-[50%] top-[14%] z-10 -ml-[72px] w-[144px] rounded-lg border border-white/10 bg-[#0b1220]/95 p-2">
<p className="mb-2 text-[10px] font-light text-slate-400">
                  May 11
                </p>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]"></div>
<span className="text-[10px] text-slate-300">
                                  Engagements
                                </span>
</div>
<span className="text-[10px] font-light text-white">
                                34,682
                              </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="h-1.5 w-1.5 rounded-full bg-[#a855f7]"></div>
<span className="text-[10px] text-slate-300">
                                  Impressions
                                </span>
</div>
<span className="text-[10px] font-light text-white">
                                78,943
                              </span>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-7 h-4">
<span className="absolute left-[0%] -ml-4 w-8 text-center text-[9px] text-slate-500">
                            May 8
                          </span>
<span className="absolute left-[16.66%] -ml-4 w-8 text-center text-[9px] text-slate-500">
                            May 9
                          </span>
<span className="absolute left-[33.33%] -ml-4 w-8 text-center text-[9px] text-slate-500">
                            May 10
                          </span>
<span className="absolute left-[50%] -ml-4 w-8 text-center text-[9px] text-slate-300">
                            May 11
                          </span>
<span className="absolute left-[66.66%] -ml-4 w-8 text-center text-[9px] text-slate-500">
                            May 12
                          </span>
<span className="absolute left-[83.33%] -ml-4 w-8 text-center text-[9px] text-slate-500">
                            May 13
                          </span>
<span className="absolute left-[100%] -ml-4 w-8 text-center text-[9px] text-slate-500">
                            May 14
                          </span>
</div>
</div>

<div className="mt-5 flex items-start justify-between border-t border-white/10 pt-3">
<div className="flex-1 px-2">
<p className="mb-1 text-[10px] text-slate-400">
                  Total Engagements
                </p>
<div className="flex items-end gap-1.5">
<span className="text-base font-light leading-none text-white">
                              162,593
                            </span>
<span className="flex items-center pb-0 text-[10px] font-light text-emerald-400">
                              ‚Üë 14.5%
                            </span>
</div>
</div>
<div className="mt-1 h-5 w-px bg-white/10"></div>
<div className="flex-1 px-4">
<p className="mb-1 text-[10px] text-slate-400">
                  Total Impressions
                </p>
<div className="flex items-end gap-1.5">
<span className="text-base font-light leading-none text-white">
                              478,281
                            </span>
<span className="flex items-center pb-0 text-[10px] font-light text-emerald-400">
                              ‚Üë 11.3%
                            </span>
</div>
</div>
<div className="mt-1 h-5 w-px bg-white/10"></div>
<div className="flex-1 px-4">
<p className="mb-1 text-[10px] text-slate-400">
                  Avg. Engagement Rate
                </p>
<div className="flex items-end gap-1.5">
<span className="text-base font-light leading-none text-white">
                              5.87%
                            </span>
<span className="flex items-center pb-0 text-[10px] font-light text-emerald-400">
                              ‚Üë 12.6%
                            </span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-3 font-sans bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 to-blue-500/0 rounded-lg pt-3 pr-3 pb-3 pl-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>

<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<h3 className="text-[13px] font-normal text-white">
                  Channel Performance
                </h3>
<span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/45">
                            i
                          </span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[10px] font-light text-white/55 transition hover:bg-white/[0.06] hover:text-white/80">
                          Last 7 days
                          <svg className="h-3 w-3 text-white/35" fill="none" viewbox="0 0 24 24">
<path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="grid items-center gap-6 lg:grid-cols-[135px_1fr]">

<div className="flex justify-center lg:justify-start">
<div className="relative flex h-[115px] w-[115px] items-center justify-center rounded-full">

<div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#7C3AED_0deg_128deg,#38BDF8_128deg_180deg,#2DD4BF_180deg_250deg,#14B8A6_250deg_294deg,#172033_294deg_360deg)]">
</div>

<svg className="absolute inset-0 z-10 h-[115px] w-[115px] -rotate-90 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" viewbox="0 0 115 115">
<circle cx="57.5" cy="57.5" fill="none" r="56" stroke="rgba(255,255,255,0.05)" strokeWidth="3">
</circle>
<circle cx="57.5" cy="57.5" fill="none" r="56" stroke="#2DD4BF" stroke-dasharray="351.8" stroke-dashoffset="80" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="relative z-20 flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full bg-[#07101c]">
<p className="text-[9px] font-light text-white/45">
                      Total Reach
                    </p>

<div className="mt-0.5 flex h-[24px] items-center justify-center text-[18px] font-normal text-white">
<span className="reach-counter">45.2K</span>
</div>

<div className="mt-0.5 flex h-[16px] items-center justify-center text-[10px] font-normal text-emerald-400">
                      ‚Üë 2.1%
                    </div>
</div>
<div className="pointer-events-none absolute inset-0 z-20 rounded-full ring-1 ring-white/10"></div>
</div>
</div>

<div className="min-w-0">
<div className="grid grid-cols-[1.5fr_0.75fr_0.85fr] gap-2 border-b border-white/10 pb-2 text-[10px] font-light text-white/45">
<span className="">Channel</span>
<span>Reach</span>
<span className="">Eng. Rate</span>
</div>
<div className="divide-y divide-white/10">

<div className="group grid grid-cols-[1.5fr_0.75fr_0.85fr] items-center gap-2 -mx-2 rounded-lg px-2 py-2 transition-colors duration-300 hover:bg-white/[0.04]">
<div className="flex min-w-0 items-center gap-2">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 via-orange-400 to-purple-600 text-[9px] font-medium text-white">
                        ‚óé
                      </div>
<span className="truncate text-[11px] font-light text-white/80">
                                  Instagram
                                </span>
</div>
<div className="flex h-[16px] items-center text-[11px] font-light text-white/70">
                      12.1K
                    </div>
<div className="flex h-[16px] items-center text-[11px] font-normal text-emerald-400">
                      1.12%
                    </div>
</div>

<div className="group grid grid-cols-[1.5fr_0.75fr_0.85fr] items-center gap-2 -mx-2 rounded-lg px-2 py-2 transition-colors duration-300 hover:bg-white/[0.04]">
<div className="flex min-w-0 items-center gap-2">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#0A66C2] text-[9px] font-medium text-white">
                        in
                      </div>
<span className="truncate text-[11px] font-light text-white/80">
                                  LinkedIn
                                </span>
</div>
<div className="flex h-[16px] items-center text-[11px] font-light text-white/70">
                      9.4K
                    </div>
<div className="flex h-[16px] items-center text-[11px] font-normal text-emerald-400">
                      0.8%
                    </div>
</div>

<div className="group grid grid-cols-[1.5fr_0.75fr_0.85fr] items-center gap-2 -mx-2 rounded-lg px-2 py-2 transition-colors duration-300 hover:bg-white/[0.04]">
<div className="flex min-w-0 items-center gap-2">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-500 text-[9px] font-medium text-white">
                        X
                      </div>
<span className="truncate text-[11px] font-light text-white/80">
                                  Twitter / X
                                </span>
</div>
<div className="flex h-[16px] items-center text-[11px] font-light text-white/70">
                      4.2K
                    </div>
<div className="flex h-[16px] items-center text-[11px] font-normal text-emerald-400">
                      0.5%
                    </div>
</div>

<div className="group grid grid-cols-[1.5fr_0.75fr_0.85fr] items-center gap-2 -mx-2 rounded-lg px-2 py-2 transition-colors duration-300 hover:bg-white/[0.04]">
<div className="flex min-w-0 items-center gap-2">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-[10px] font-medium text-white">
                        f
                      </div>
<span className="truncate text-[11px] font-light text-white/80">
                                  Facebook
                                </span>
</div>
<div className="flex h-[16px] items-center text-[11px] font-light text-white/70">
                      3.1K
                    </div>
<div className="flex h-[16px] items-center text-[11px] font-normal text-emerald-400">
                      0.4%
                    </div>
</div>

<div className="group grid grid-cols-[1.5fr_0.75fr_0.85fr] items-center gap-2 -mx-2 rounded-lg px-2 py-2 transition-colors duration-300 hover:bg-white/[0.04]">
<div className="flex min-w-0 items-center gap-2">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-black ring-1 ring-white/10 text-[9px] font-medium text-white">
                        ‚ô™
                      </div>
<span className="truncate text-[11px] font-light text-white/80">
                                  TikTok
                                </span>
</div>
<div className="flex h-[16px] items-center text-[11px] font-light text-white/70">
                      2.8K
                    </div>
<div className="flex h-[16px] items-center text-[11px] font-normal text-emerald-400">
                      1.2%
                    </div>
</div>
</div>
</div>
</div>

<div className="mt-4 border-t border-white/10 pt-3">
<a className="group inline-flex items-center gap-2 text-[11px] font-normal text-sky-400 transition hover:text-sky-300" href="#">
                View detailed analytics
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                            ‚Üí
                          </span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-3 xl:grid-cols-5 mt-3">
<div className="xl:col-span-3 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-lg px-3 py-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>
<div className="mb-3 flex items-center justify-between">
<h3 className="text-sm font-normal tracking-[-0.02em] text-white">
                Active Workflows
              </h3>
<button className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-cyan-300">
                          + New Workflow
                        </button>
</div>
<div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
<div className="grid grid-cols-6 border-b border-white/10 px-3 py-2 text-[10px] uppercase text-white/35">
<span className="col-span-2">Workflow</span>
<span className="">Status</span>
<span>Runs</span>
<span className="">Rate</span>
<span className="">Last</span>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-6 items-center px-3 py-2.5 text-xs text-white/70">
<span className="col-span-2">Lead Qualification</span>
<span className="text-emerald-300">Active</span>
<span className="">2,842</span>
<span>98.9%</span>
<span className="">2m</span>
</div>
<div className="grid grid-cols-6 items-center px-3 py-2.5 text-xs text-white/70">
<span className="col-span-2">Invoice Processing</span>
<span className="text-emerald-300">Active</span>
<span>1,987</span>
<span>99.3%</span>
<span className="">5m</span>
</div>
<div className="grid grid-cols-6 items-center px-3 py-2.5 text-xs text-white/70">
<span className="col-span-2">Invoice Processing</span>
<span className="text-emerald-300">Active</span>
<span className="">1,987</span>
<span className="">99.3%</span>
<span className="">5m</span>
</div>
</div>
</div>
</div>
<div className="xl:col-span-2 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-lg px-3 py-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '8px'}}>
<div className="mb-3 flex items-center justify-between">
<h3 className="text-sm font-normal tracking-[-0.02em] text-white">
                Recent Activity
              </h3>
<span className="text-[11px] text-white/45">View all</span>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-start gap-2.5 py-2">
<span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-300"></span>
<div className="flex-1">
<p className="text-xs text-white/75">
                    Lead Qualification completed
                  </p>
<p className="text-[11px] text-white/35">
                    2,142 records processed
                  </p>
</div>
<span className="text-[10px] text-white/35">2m</span>
</div>
<div className="flex items-start gap-2.5 py-2">
<span className="mt-0.5 h-2 w-2 rounded-full bg-blue-300"></span>
<div className="flex-1">
<p className="text-xs text-white/75">
                    Invoice Processing completed
                  </p>
<p className="text-[11px] text-white/35">
                    1,987 invoices processed
                  </p>
</div>
<span className="text-[10px] text-white/35">5m</span>
</div>
<div className="flex items-start gap-2.5 py-2">
<span className="mt-0.5 h-2 w-2 rounded-full bg-indigo-300"></span>
<div className="flex-1">
<p className="text-xs text-white/75">
                    Customer Onboarding triggered
                  </p>
<p className="text-[11px] text-white/35">
                    New workflow run started
                  </p>
</div>
<span className="text-[10px] text-white/35">12m</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

<div className="w-full pt-24 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="uppercase text-sm font-medium text-zinc-400 tracking-wide">Powering the world‚Äôs most focused product teams
    </p>
</div>
<div className="relative w-full overflow-hidden mt-6 py-4" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<style>
    @keyframes marquee-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  </style>
<div className="flex w-max" style={{animation: 'marquee-scroll 80s linear infinite'}}>
<div className="flex items-center gap-16 pr-16">
<img alt="NASA" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nasa.svg?color=%23a1a1aa"/>
<img alt="SpaceX" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:spacex.svg?color=%23a1a1aa"/>
<img alt="Uber" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:uber.svg?color=%23a1a1aa"/>
<img alt="Visa" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:visa.svg?color=%23a1a1aa"/>
<img alt="Grab" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:grab.svg?color=%23a1a1aa"/>
<img alt="Bose" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:bose.svg?color=%23a1a1aa"/>
<img alt="Discover" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:discover.svg?color=%23a1a1aa"/>
<img alt="DJI" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:dji.svg?color=%23a1a1aa"/>
<img alt="Nikon" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nikon.svg?color=%23a1a1aa"/>
<img alt="Craftsman" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:craftsman.svg?color=%23a1a1aa"/>
<img alt="Sony" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:sony.svg?color=%23a1a1aa"/>
<img alt="NASA" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nasa.svg?color=%23a1a1aa"/>
<img alt="SpaceX" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:spacex.svg?color=%23a1a1aa"/>
<img alt="Uber" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:uber.svg?color=%23a1a1aa"/>
<img alt="Visa" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:visa.svg?color=%23a1a1aa"/>
<img alt="Grab" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:grab.svg?color=%23a1a1aa"/>
<img alt="Bose" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:bose.svg?color=%23a1a1aa"/>
<img alt="Discover" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:discover.svg?color=%23a1a1aa"/>
<img alt="DJI" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:dji.svg?color=%23a1a1aa"/>
<img alt="Nikon" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nikon.svg?color=%23a1a1aa"/>
<img alt="Craftsman" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:craftsman.svg?color=%23a1a1aa"/>
<img alt="Sony" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:sony.svg?color=%23a1a1aa"/>
</div>
<div className="flex items-center gap-16 pr-16">
<img alt="NASA" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nasa.svg?color=%23a1a1aa"/>
<img alt="SpaceX" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:spacex.svg?color=%23a1a1aa"/>
<img alt="Uber" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:uber.svg?color=%23a1a1aa"/>
<img alt="Visa" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:visa.svg?color=%23a1a1aa"/>
<img alt="Grab" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:grab.svg?color=%23a1a1aa"/>
<img alt="Bose" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:bose.svg?color=%23a1a1aa"/>
<img alt="Discover" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:discover.svg?color=%23a1a1aa"/>
<img alt="DJI" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:dji.svg?color=%23a1a1aa"/>
<img alt="Nikon" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nikon.svg?color=%23a1a1aa"/>
<img alt="Craftsman" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:craftsman.svg?color=%23a1a1aa"/>
<img alt="Sony" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:sony.svg?color=%23a1a1aa"/>
<img alt="NASA" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nasa.svg?color=%23a1a1aa"/>
<img alt="SpaceX" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:spacex.svg?color=%23a1a1aa"/>
<img alt="Uber" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:uber.svg?color=%23a1a1aa"/>
<img alt="Visa" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:visa.svg?color=%23a1a1aa"/>
<img alt="Grab" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:grab.svg?color=%23a1a1aa"/>
<img alt="Bose" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:bose.svg?color=%23a1a1aa"/>
<img alt="Discover" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:discover.svg?color=%23a1a1aa"/>
<img alt="DJI" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:dji.svg?color=%23a1a1aa"/>
<img alt="Nikon" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:nikon.svg?color=%23a1a1aa"/>
<img alt="Craftsman" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:craftsman.svg?color=%23a1a1aa"/>
<img alt="Sony" className="w-16 h-16 object-contain flex-shrink-0" src="https://api.iconify.design/simple-icons:sony.svg?color=%23a1a1aa"/>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08), transparent 55%), repeating-linear-gradient(to right, rgba(255, 255, 255, 0.24) 0px, rgba(255, 255, 255, 0.24) 1px, transparent 1px, transparent 16px)'}}></div>
</section>
<section className="overflow-hidden sm:px-6 lg:pl-8 lg:pr-8 lg:pb-32 lg:pt-12 text-white bg-[#030711] border-white/15 border-b pt-16 pr-8 pb-20 pl-8 relative scroll-reveal" style={{'--reveal-delay': '0ms'}}>

<div className="relative mx-auto max-w-6xl">

<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between border-white/10 border-b pb-10 gap-x-8 gap-y-8">
<div className="max-w-xl">
<div className="inline-flex uppercase text-xs font-normal text-cyan-300/90 tracking-[0.24em] gap-x-3 gap-y-3 items-center">
<span className="text-cyan-400">//</span>
<span className="">Features</span>
</div>
<h2 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">Everything you need to run AI at scale.</h2>
</div>
<div className="max-w-md lg:pb-2">
<p className="text-base leading-relaxed text-white/60 lg:flex-1">
                Nexora helps teams automate workflows, monitor performance, and
                connect their tools in one place.
              </p>
<a className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/85 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)]" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 via-blue-500/20 to-violet-400/30 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="absolute left-4 right-4 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-8 right-8 h-4 bg-cyan-400/10 blur-lg"></span>
<span className="relative z-10 tracking-[-0.01em]">
                  Explore Nexora
                </span>
</a>
</div>
</div>
<div className="max-w-xl"></div>

<div className="border-t border-cyan-200/10 pt-5">
<div className="grid gap-3 lg:grid-cols-[0.85fr_0.85fr_1.3fr] gap-x-3 gap-y-3">

<div className="grid gap-3">

<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<div className="flex gap-3">
<div className="">
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                        Workflow Automation
                      </h3>
<p className="mt-1.5 text-sm leading-6 text-white/55">
                        Design, automate, and scale AI workflows with a no-code
                        builder.
                      </p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<div className="flex gap-3">
<div className="">
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                        Integrations
                      </h3>
<p className="mt-1.5 text-sm leading-6 text-white/55">
                        Connect your tools and unify your data, workflows, and
                        teams.
                      </p>
</div>
</div>
<div className="mt-4 grid grid-cols-5 gap-2">
<div className="flex h-9 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-400/10">
<span className="grid grid-cols-2 gap-0.5">
<span className="h-2 w-2 rounded bg-cyan-300"></span>
<span className="h-2 w-2 rounded bg-sky-400/70"></span>
<span className="h-2 w-2 rounded bg-teal-300/80"></span>
<span className="h-2 w-2 rounded bg-blue-400/60"></span>
</span>
</div>
<div className="flex h-9 items-center justify-center rounded-lg border border-emerald-300/15 bg-emerald-400/10">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-medium text-emerald-300">
                        S
                      </span>
</div>
<div className="flex h-9 items-center justify-center rounded-lg border border-violet-300/15 bg-violet-400/10 text-violet-300">
                      ‚ú¶
                    </div>
<div className="flex h-9 items-center justify-center rounded-lg border border-sky-300/15 bg-sky-400/10">
<span className="grid grid-cols-2 gap-0.5">
<span className="h-2 w-2 rounded-full bg-sky-300"></span>
<span className="h-2 w-2 rounded-full bg-cyan-400/70"></span>
<span className="h-2 w-2 rounded-full bg-indigo-400/70"></span>
<span className="h-2 w-2 rounded-full bg-teal-300/70"></span>
</span>
</div>
<div className="flex h-9 items-center justify-center rounded-lg border border-amber-300/15 bg-amber-400/10 text-amber-300">
                      +
                    </div>
</div>
</div>

<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<div className="flex gap-3">
<div className="">
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                        Enterprise Security
                      </h3>
<p className="mt-1.5 text-sm leading-6 text-white/55">
                        Security, compliance, and access controls to protect
                        your data.
                      </p>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-cyan-300/15 bg-cyan-400/[0.07] px-3 py-2">
<div className="mb-2 h-1 w-8 rounded-full bg-cyan-300/70"></div>
<p className="text-xs text-white">SOC 2</p>
<p className="text-[11px] text-white/45">Type II</p>
</div>
<div className="rounded-lg border border-emerald-300/15 bg-emerald-400/[0.07] px-3 py-2">
<div className="mb-2 h-1 w-8 rounded-full bg-emerald-300/70"></div>
<p className="text-xs text-white">GDPR</p>
<p className="text-[11px] text-white/45">Ready</p>
</div>
<div className="rounded-lg border border-violet-300/15 bg-violet-400/[0.07] px-3 py-2">
<div className="mb-2 h-1 w-8 rounded-full bg-violet-300/70"></div>
<p className="text-xs text-white">SSO</p>
<p className="text-[11px] text-white/45">SAML</p>
</div>
</div>
</div>
</div>

<div className="grid gap-3">
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<div className="flex gap-3">
<div className="">
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                        Real-time Insights
                      </h3>
<p className="mt-1.5 text-sm leading-6 text-white/55">
                        Monitor performance, track KPIs, and get insights as
                        things happen.
                      </p>
</div>
</div>
<div className="mt-4 rounded-lg border border-cyan-300/10 bg-cyan-400/[0.04] p-3">
<p className="text-xs text-white/65">Success Rate</p>
<div className="mt-1.5 flex items-end gap-2">
<span className="text-2xl font-medium tracking-[-0.03em] text-white">
                        98.7%
                      </span>
<span className="pb-1 text-xs text-emerald-300">‚Üë 12.4%</span>
</div>
<svg className="mt-1 h-14 w-full overflow-visible" viewbox="0 0 310 86">
<defs>
<lineargradient id="insightLine" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#22d3ee"></stop>
<stop offset="55%" stop-color="#38bdf8"></stop>
<stop offset="100%" stop-color="#2dd4bf"></stop>
</lineargradient>
<lineargradient id="insightFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.18"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M5 67 C24 66 28 62 43 64 C58 66 60 58 72 65 C87 75 94 47 108 42 C121 39 126 60 142 55 C154 51 157 47 169 55 C181 63 188 29 205 23 C220 17 225 36 238 35 C251 34 254 18 267 21 C281 25 288 8 305 5 L305 86 L5 86 Z" fill="url(#insightFill)"></path>
<path d="M5 67 C24 66 28 62 43 64 C58 66 60 58 72 65 C87 75 94 47 108 42 C121 39 126 60 142 55 C154 51 157 47 169 55 C181 63 188 29 205 23 C220 17 225 36 238 35 C251 34 254 18 267 21 C281 25 288 8 305 5" fill="none" stroke="url(#insightLine)" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="305" cy="5" fill="#2dd4bf" r="3.5" stroke="#07111d" strokeWidth="2"></circle>
</svg>
</div>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                    Active Workflows
                  </h3>
<div className="border-white/10 border rounded-lg mt-3 pr-3 pl-3">
<div className="flex items-center justify-between border-b border-white/5 py-2.5">
<div>
<p className="text-xs text-white">Invoice Processing</p>
<p className="text-[11px] text-white/40">
                          Runs every 15 min
                        </p>
</div>
<span className="text-[11px] text-emerald-300">
                        ‚Ä¢ Running
                      </span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-2.5">
<div className="">
<p className="text-xs text-white">Support Triage</p>
<p className="text-[11px] text-white/40">
                          Runs every 5 min
                        </p>
</div>
<span className="text-[11px] text-cyan-300">‚Ä¢ Running</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 py-2.5">
<div>
<p className="text-xs text-white">Lead Enrichment</p>
<p className="text-[11px] text-white/40">Runs hourly</p>
</div>
<span className="text-[11px] text-violet-300">‚Ä¢ Running</span>
</div>
<div className="flex items-center justify-between py-2.5">
<div>
<p className="text-xs text-white">Data Sync</p>
<p className="text-[11px] text-white/40">
                          Runs every 30 min
                        </p>
</div>
<span className="text-[11px] text-sky-300">‚Ä¢ Running</span>
</div>
</div>
</div>
</div>

<div className="grid gap-3">
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<div className="mb-4 flex items-center justify-between">
<div className="flex gap-2.5 gap-x-2.5 gap-y-2.5 items-center">
<span className="text-base font-medium tracking-[-0.02em] text-white">
                        NEXORA
                      </span>
</div>
<button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60">
                      Last 7 days
                    </button>
</div>
<div className="border-t border-white/10 pt-4">
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                      Operational Overview
                    </h3>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="rounded-lg border border-cyan-300/10 bg-cyan-400/[0.045] p-3">
<div className="mb-2 h-1 w-10 rounded-full bg-cyan-300/70"></div>
<p className="text-[11px] text-white/55">Workflow Runs</p>
<p className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">
                          12,842
                        </p>
<p className="text-[11px] text-emerald-300">‚Üë 18.6%</p>
</div>
<div className="rounded-lg border border-emerald-300/10 bg-emerald-400/[0.045] p-3">
<div className="mb-2 h-1 w-10 rounded-full bg-emerald-300/70"></div>
<p className="text-[11px] text-white/55">Success Rate</p>
<p className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">
                          98.7%
                        </p>
<p className="text-[11px] text-emerald-300">‚Üë 12.4%</p>
</div>
<div className="rounded-lg border border-violet-300/10 bg-violet-400/[0.045] p-3">
<div className="mb-2 h-1 w-10 rounded-full bg-violet-300/70"></div>
<p className="text-[11px] text-white/55">Time Saved</p>
<p className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">
                          320h
                        </p>
<p className="text-[11px] text-emerald-300">‚Üë 22.1%</p>
</div>
<div className="rounded-lg border border-amber-300/10 bg-amber-400/[0.045] p-3">
<div className="mb-2 h-1 w-10 rounded-full bg-amber-300/70"></div>
<p className="text-[11px] text-white/55">Cost Savings</p>
<p className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">
                          $48.2K
                        </p>
<p className="text-[11px] text-emerald-300">‚Üë 15.3%</p>
</div>
</div>
</div>
</div>
<div className="grid gap-3 md:grid-cols-[0.9fr_1.4fr]">
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                      Performance
                    </h3>
<div className="mt-4 flex flex-col items-center">
<div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[conic-gradient(from_0deg,#22d3ee_0_38%,#2dd4bf_38%_68%,#8b5cf6_68%_82%,rgba(255,255,255,0.08)_82%_100%)] shadow-[0_0_24px_rgba(34,211,238,0.08)]">
<div className="absolute inset-2.5 rounded-full bg-[#07111d]"></div>
<span className="relative text-xl font-medium text-white">
                          98.7%
                        </span>
</div>
<p className="mt-3 text-xs text-white/50">
                        Overall Success Rate
                      </p>
</div>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<h3 className="text-base font-medium tracking-[-0.02em] text-white">
                      Recent Activity
                    </h3>
<div className="mt-3 divide-y divide-white/5">
<div className="flex items-center gap-3 py-2">
<span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.35)]"></span>
<p className="flex-1 text-xs text-white/70">
                          Invoice Processing completed
                        </p>
<span className="text-[10px] text-white/35">7m</span>
</div>
<div className="flex items-center gap-3 py-2">
<span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.3)]"></span>
<p className="flex-1 text-xs text-white/70">
                          Slack integration connected
                        </p>
<span className="text-[10px] text-white/35">7m</span>
</div>
<div className="flex items-center gap-3 py-2">
<span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.3)]"></span>
<p className="flex-1 text-xs text-white/70">
                          High latency detected
                        </p>
<span className="text-[10px] text-white/35">18m</span>
</div>
<div className="flex items-center gap-3 py-2">
<span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.3)]"></span>
<p className="flex-1 text-xs text-white/70">
                          Lead Enrichment updated
                        </p>
<span className="text-[10px] text-white/35">32m</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style="background-image:
      linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%),
      repeating-linear-gradient(
        to right,
        rgba(255, 255, 255, 0.24) 0px,
        rgba(255, 255, 255, 0.24) 1px,
        transparent 1px,
        transparent 16px
      )"></div>
</section><section className="overflow-hidden sm:px-6 lg:pl-8 lg:pr-8 lg:pb-32 lg:pt-12 text-white bg-[#030711] border-white/15 border-b pt-16 pr-8 pb-20 pl-8 relative scroll-reveal" style={{'--reveal-delay': '40ms'}}>

<div className="relative mx-auto max-w-6xl">

<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between border-white/10 border-b pb-10 gap-x-8 gap-y-8">
<div className="max-w-xl">
<div className="inline-flex uppercase text-xs font-normal text-cyan-300/90 tracking-[0.24em] gap-x-3 gap-y-3 items-center">
<span className="text-cyan-400">//</span>
<span className="">USE CASES</span>
</div>
<h2 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">Solutions for every team.</h2>
</div>
<div className="max-w-md lg:pb-2">
<p className="text-base leading-relaxed text-white/60 lg:flex-1">From sales pipelines to customer support, discover how different teams use Nexora to eliminate manual tasks and scale operations.</p>
<a className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/85 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)]" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 via-blue-500/20 to-violet-400/30 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="absolute left-4 right-4 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-8 right-8 h-4 bg-cyan-400/10 blur-lg"></span>
<span className="relative z-10 tracking-[-0.01em]">Explore all workflows</span>
</a>
</div>
</div>

<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-x-5 gap-y-5">

<div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_80px_rgba(8,145,178,0.16)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(59,130,246,0.12),transparent_32%)]"></div>
<div className="relative mb-6 h-[190px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" style={{WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)'}}>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
<div className="grid h-full grid-cols-[1.15fr_0.72fr] gap-3">
<div className="rounded-lg border border-white/10 bg-slate-950/35 p-3">
<div className="mb-3 flex items-center justify-between text-[11px] text-white/70">
<span>Sales Pipeline</span>
<span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-emerald-300">Won</span>
</div>
<div className="space-y-2.5">
<div className="grid grid-cols-[4.8rem_1fr_2rem] items-center gap-2 text-[10px] text-white/55"><span>Prospecting</span><span className="h-3 rounded bg-white/[0.06]"><span className="block h-full w-[92%] rounded bg-gradient-to-r from-blue-600 to-cyan-400"></span></span><span className="text-right text-white/70">1.2K</span></div>
<div className="grid grid-cols-[4.8rem_1fr_2rem] items-center gap-2 text-[10px] text-white/55"><span>Qualified</span><span className="h-3 rounded bg-white/[0.06]"><span className="block h-full w-[74%] rounded bg-gradient-to-r from-indigo-500 to-cyan-400"></span></span><span className="text-right text-white/70">860</span></div>
<div className="grid grid-cols-[4.8rem_1fr_2rem] items-center gap-2 text-[10px] text-white/55"><span>Proposal</span><span className="h-3 rounded bg-white/[0.06]"><span className="block h-full w-[52%] rounded bg-gradient-to-r from-violet-500 to-cyan-500"></span></span><span className="text-right text-white/70">520</span></div>
<div className="grid grid-cols-[4.8rem_1fr_2rem] items-center gap-2 text-[10px] text-white/55"><span>Negotiation</span><span className="h-3 rounded bg-white/[0.06]"><span className="block h-full w-[34%] rounded bg-gradient-to-r from-violet-600 to-cyan-500"></span></span><span className="text-right text-white/70">310</span></div>
<div className="grid grid-cols-[4.8rem_1fr_2rem] items-center gap-2 text-[10px] text-emerald-300"><span>Won</span><span className="h-3 rounded bg-white/[0.06]"><span className="block h-full w-[24%] rounded bg-gradient-to-r from-indigo-500 to-cyan-400"></span></span><span className="text-right text-white/70">210</span></div>
</div>
</div>
<div className="space-y-3">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="text-[10px] text-white/45">Won This Month</div>
<div className="mt-1 text-xl font-light tracking-tight text-white">$230K</div>
<div className="mt-1 text-[10px] text-emerald-300">‚Üë 18% <span className="text-white/35">vs last month</span></div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center justify-between text-[10px] text-white/45"><span>Conversion</span><span className="text-white">26.4%</span></div>
<svg className="mt-2 h-12 w-full overflow-visible" fill="none" viewbox="0 0 120 48">
<path d="M2 42 C14 30 18 22 30 32 C42 42 48 24 60 28 C72 32 74 10 88 16 C100 22 104 2 118 10" stroke="rgb(34 211 238)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M2 42 C14 30 18 22 30 32 C42 42 48 24 60 28 C72 32 74 10 88 16 C100 22 104 2 118 10 V48 H2 Z" fill="url(#salesGlowFixed)" opacity="0.32"></path>
<defs><lineargradient id="salesGlowFixed" x1="0" x2="0" y1="0" y2="1"><stop stop-color="rgb(34 211 238)"></stop><stop offset="1" stop-color="rgb(34 211 238)" stop-opacity="0"></stop></lineargradient></defs>
</svg>
</div>
</div>
</div>
</div>
<div className="relative flex flex-1 flex-col">
<h3 className="mb-2 text-2xl font-light tracking-tight text-white">Sales Operations</h3>
<p className="mb-5 text-base leading-relaxed text-white/55">Automate lead qualification, CRM updates, enrichment, and Slack handoffs.</p>
<div className="mt-auto flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">CRM Updates</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Enrichment</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Handoffs</span>
</div>
</div>
</div>

<div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_80px_rgba(8,145,178,0.16)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_0%,rgba(96,165,250,0.13),transparent_35%),radial-gradient(circle_at_88%_14%,rgba(34,211,238,0.1),transparent_30%)]"></div>
<div className="relative mb-6 h-[190px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" style={{WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)'}}>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="grid h-full grid-cols-[0.9fr_1fr] gap-3">
<div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/35">
<div className="border-b border-white/10 px-3 py-2 text-[11px] text-white/80">New Ticket</div>
<div className="divide-y divide-white/5 text-[10px]">
<div className="flex items-center justify-between gap-2 px-3 py-2"><span className="text-white/65">Auto-triage</span><span className="rounded-full bg-red-500/10 px-2 py-0.5 text-red-300">High</span></div>
<div className="flex items-center justify-between gap-2 px-3 py-2"><span className="text-white/65">Account Access</span><span className="rounded-full bg-red-500/10 px-2 py-0.5 text-red-300">High</span></div>
<div className="flex items-center justify-between gap-2 px-3 py-2"><span className="text-white/65">Billing Question</span><span className="text-amber-300">Medium</span></div>
<div className="flex items-center justify-between gap-2 px-3 py-2"><span className="text-white/65">Feature Request</span><span className="text-emerald-300">Low</span></div>
<div className="flex items-center justify-between gap-2 px-3 py-2"><span className="text-white/65">Routed to L2</span><span className="text-white/35">9:12</span></div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="ml-auto max-w-[11rem] rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.05] p-3 text-[10px] leading-relaxed text-white/80">I can't access my account.<div className="mt-1 text-right text-[9px] text-white/40">9:07 AM</div></div>
<div className="mt-3 max-w-[12rem] rounded-xl rounded-br-sm bg-gradient-to-br from-blue-500 to-blue-700 p-3 text-[10px] leading-relaxed text-white shadow-lg shadow-blue-950/40">Let's help you with that! Can you share the email linked to your account?<div className="mt-1 text-right text-[9px] text-white/60">9:08 AM</div></div>
<div className="mt-3 flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-200 to-rose-500 ring-2 ring-white/15"></span><span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] text-white/45">‚Ä¢‚Ä¢‚Ä¢</span></div>
</div>
</div>
</div>
<div className="relative flex flex-1 flex-col">
<h3 className="mb-2 text-2xl font-light tracking-tight text-white">Customer Support</h3>
<p className="mb-5 text-base leading-relaxed text-white/55">Triage tickets, summarize conversations, route issues, and detect escalations.</p>
<div className="mt-auto flex flex-wrap gap-2"><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Triage</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Routing</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Summaries</span></div>
</div>
</div>

<div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_80px_rgba(8,145,178,0.16)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(167,139,250,0.12),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(236,72,153,0.12),transparent_32%)]"></div>
<div className="relative mb-6 h-[190px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" style={{WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)'}}>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"></div>
<div className="grid h-full grid-cols-[0.85fr_1.15fr] gap-3">
<div className="flex flex-col gap-2">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
<div className="text-[10px] text-white/45">Invoices</div>
<div className="mt-1 flex items-baseline gap-2"><span className="text-lg font-light tracking-tight text-white">1,248</span><span className="text-[9px] text-emerald-300">‚Üë 12%</span></div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
<div className="text-[10px] text-white/45">Reconciled</div>
<div className="mt-1 flex items-baseline gap-2"><span className="text-lg font-light tracking-tight text-white">98.7%</span><span className="text-[9px] text-emerald-300">‚Üë 6%</span></div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
<div className="text-[10px] text-white/45">Anomalies</div>
<div className="mt-1 flex items-baseline gap-2"><span className="text-lg font-light tracking-tight text-white">7</span><span className="text-[9px] text-red-400">‚Üì 22%</span></div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/35 p-3 h-full">
<div className="mb-3 flex items-center justify-between text-[11px] text-white/70">
<span>Top Invoices</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-[10px] text-white/55">
<span className="flex items-center gap-1.5">INV-0234 <span className="text-[8px] text-emerald-400">‚óè</span> Paid</span>
<span className="text-white/70">$12.4K</span>
</div>
<div className="flex items-center justify-between text-[10px] text-white/55">
<span className="flex items-center gap-1.5">INV-0235 <span className="text-[8px] text-emerald-400">‚óè</span> Paid</span>
<span className="text-white/70">$8.2K</span>
</div>
<div className="flex items-center justify-between text-[10px] text-white/55">
<span className="flex items-center gap-1.5">INV-0236 <span className="text-[8px] text-amber-400">‚óè</span> Flagged</span>
<span className="text-white/70">$2.9K</span>
</div>
</div>
</div>
</div>
</div>
<div className="relative flex flex-1 flex-col">
<h3 className="mb-2 text-2xl font-light tracking-tight text-white">Finance &amp; Admin</h3>
<p className="mb-5 text-base leading-relaxed text-white/55">Process invoices, reconcile data, generate reports, and flag anomalies.</p>
<div className="mt-auto flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Invoices</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Reports</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Anomalies</span>
</div>
</div>
</div>

<div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_80px_rgba(8,145,178,0.16)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(236,72,153,0.12),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(59,130,246,0.12),transparent_32%)]"></div>
<div className="relative mb-6 h-[190px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" style={{WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)'}}>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-300/40 to-transparent"></div>
<div className="grid h-full grid-rows-[auto_1fr] gap-3">
<div className="rounded-lg border border-white/10 bg-slate-950/35 p-3">
<div className="mb-3 text-[11px] text-white/70">Campaign Performance</div>
<div className="grid grid-cols-3 gap-2">
<div>
<div className="text-[10px] text-white/45">Impressions</div>
<div className="mt-1 text-sm font-light tracking-tight text-white">2.4M</div>
<div className="text-[9px] text-emerald-300">‚Üë 24%</div>
</div>
<div>
<div className="text-[10px] text-white/45">Clicks</div>
<div className="mt-1 text-sm font-light tracking-tight text-white">128K</div>
<div className="text-[9px] text-emerald-300">‚Üë 18%</div>
</div>
<div>
<div className="text-[10px] text-white/45">CTR</div>
<div className="mt-1 text-sm font-light tracking-tight text-white">5.3%</div>
<div className="text-[9px] text-emerald-300">‚Üë 6%</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="mb-2 text-[10px] text-white/45">Top Channels</div>
<div className="space-y-2 text-[10px] text-white/55">
<div className="grid grid-cols-[4rem_1fr_2rem] items-center gap-2"><span>Paid Search</span><span className="h-2 rounded-full bg-white/[0.06]"><span className="block h-full w-[84%] rounded-full bg-gradient-to-r from-pink-500 to-rose-400"></span></span><span>42%</span></div>
<div className="grid grid-cols-[4rem_1fr_2rem] items-center gap-2"><span>Email</span><span className="h-2 rounded-full bg-white/[0.06]"><span className="block h-full w-[56%] rounded-full bg-gradient-to-r from-purple-500 to-pink-400"></span></span><span>28%</span></div>
<div className="grid grid-cols-[4rem_1fr_2rem] items-center gap-2"><span>LinkedIn</span><span className="h-2 rounded-full bg-white/[0.06]"><span className="block h-full w-[36%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"></span></span><span>18%</span></div>
</div>
</div>
</div>
</div>
<div className="relative flex flex-1 flex-col">
<h3 className="mb-2 text-2xl font-light tracking-tight text-white">Marketing Operations</h3>
<p className="mb-5 text-base leading-relaxed text-white/55">Sync campaign data, monitor performance, generate reports, and trigger follow-ups.</p>
<div className="mt-auto flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Campaigns</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Sync</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Reports</span>
</div>
</div>
</div>

<div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_80px_rgba(8,145,178,0.16)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_32%_0%,rgba(34,197,94,0.1),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(59,130,246,0.12),transparent_32%)]"></div>
<div className="relative mb-6 h-[190px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" style={{WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)'}}>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"></div>
<div className="grid h-full grid-cols-[1fr_0.9fr] gap-3">
<div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/35">
<div className="border-b border-white/10 px-3 py-2 text-[11px] text-white/80">New Hire Onboarding</div>
<div className="space-y-2 p-3 text-[10px]"><div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2.5 py-2 text-white/75"><span className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white">‚úì</span>Offer Accepted</span><span className="text-white/30">‚Ä∫</span></div><div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2.5 py-2 text-white/75"><span className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white">‚úì</span>Collect Docs</span><span className="text-white/30">‚Ä∫</span></div><div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2.5 py-2 text-white/75"><span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-cyan-400"></span>IT Setup</span><span className="text-white/30">‚Ä∫</span></div><div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-2.5 py-2 text-white/55"><span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-blue-500/50"></span>Approval</span><span className="text-white/30">‚Ä∫</span></div></div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-3"><span className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-200 via-amber-200 to-pink-500 ring-2 ring-white/15"></span><div><div className="text-sm text-white">Ava Martinez</div><div className="text-[10px] text-white/50">Product Designer</div></div></div>
<div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-[10px] text-white/55"><div className="flex justify-between"><span>Start Date</span><span className="text-white/75">May 20</span></div><div className="flex justify-between"><span>Department</span><span className="text-white/75">Product</span></div><div className="flex justify-between"><span>Manager</span><span className="text-white/75">Liam Chen</span></div></div>
<div className="mt-4 flex -space-x-2"><span className="h-6 w-6 rounded-full bg-amber-400 ring-2 ring-slate-950"></span><span className="h-6 w-6 rounded-full bg-rose-400 ring-2 ring-slate-950"></span><span className="h-6 w-6 rounded-full bg-cyan-400 ring-2 ring-slate-950"></span><span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08] text-[10px] text-white/65 ring-2 ring-slate-950">+3</span></div>
</div>
</div>
</div>
<div className="relative flex flex-1 flex-col"><h3 className="mb-2 text-2xl font-light tracking-tight text-white">HR &amp; People Ops</h3><p className="mb-5 text-base leading-relaxed text-white/55">Automate onboarding, approvals, document collection, and internal requests.</p><div className="mt-auto flex flex-wrap gap-2"><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Onboarding</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Approvals</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Docs</span></div></div>
</div>

<div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_80px_rgba(8,145,178,0.16)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_0%,rgba(34,211,238,0.11),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(168,85,247,0.11),transparent_32%)]"></div>
<div className="relative mb-6 h-[190px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" style={{WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)'}}>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
<div className="grid h-full grid-rows-[auto_1fr] gap-3">
<div className="grid grid-cols-3 gap-3"><div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5"><div className="text-[10px] text-white/45">Revenue</div><div className="mt-1 text-xl font-light tracking-tight text-white">$3.2M</div><div className="text-[10px] text-emerald-300">‚Üë 12%</div></div><div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5"><div className="text-[10px] text-white/45">Growth</div><div className="mt-1 text-xl font-light tracking-tight text-white">24%</div><div className="text-[10px] text-emerald-300">‚Üë 6%</div></div><div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5"><div className="text-[10px] text-white/45">Customers</div><div className="mt-1 text-xl font-light tracking-tight text-white">1,842</div><div className="text-[10px] text-emerald-300">‚Üë 8%</div></div></div>
<div className="grid min-h-0 grid-cols-[1.08fr_0.92fr] gap-3"><div className="rounded-lg border border-white/10 bg-white/[0.04] p-3"><div className="text-[10px] text-white/60">Activity Overview</div><svg className="mt-3 h-16 w-full overflow-visible" fill="none" viewbox="0 0 220 82"><path d="M4 66 L24 42 L44 48 L64 36 L84 42 L104 18 L124 30 L144 46 L164 52 L184 31 L204 38 L216 28" stroke="rgb(34 211 238)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path><path d="M4 66 L24 42 L44 48 L64 36 L84 42 L104 18 L124 30 L144 46 L164 52 L184 31 L204 38 L216 28 V82 H4 Z" fill="url(#execGlowFixed)" opacity="0.34"></path><defs><lineargradient id="execGlowFixed" x1="0" x2="0" y1="0" y2="1"><stop stop-color="rgb(34 211 238)"></stop><stop offset="1" stop-color="rgb(34 211 238)" stop-opacity="0"></stop></lineargradient></defs></svg></div><div className="rounded-lg border border-white/10 bg-white/[0.04] p-3"><div className="mb-2 text-[10px] text-white/60">Workflows by Team</div><div className="flex items-center gap-3"><div className="h-16 w-16 rounded-full bg-[conic-gradient(from_90deg,rgb(34,211,238)_0_35%,rgb(124,58,237)_35%_60%,rgb(236,72,153)_60%_80%,rgb(245,158,11)_80%_100%)] p-2.5"><div className="h-full w-full rounded-full bg-slate-950"></div></div><div className="space-y-1.5 text-[10px] text-white/60"><div><span className="text-cyan-300">‚óè</span> Sales 35%</div><div><span className="text-violet-400">‚óè</span> Support 25%</div><div><span className="text-pink-400">‚óè</span> Ops 20%</div></div></div></div></div>
</div>
</div>
<div className="relative flex flex-1 flex-col"><h3 className="mb-2 text-2xl font-light tracking-tight text-white">Executive Reporting</h3><p className="mb-5 text-base leading-relaxed text-white/55">Turn scattered team activity into live dashboards and weekly summaries.</p><div className="mt-auto flex flex-wrap gap-2"><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Dashboards</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Summaries</span><span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60 transition-colors group-hover:bg-white/[0.06] group-hover:text-white/75">Analytics</span></div></div>
</div>
</div>

</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style="background-image:
      linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%),
      repeating-linear-gradient(
        to right,
        rgba(255, 255, 255, 0.24) 0px,
        rgba(255, 255, 255, 0.24) 1px,
        transparent 1px,
        transparent 16px
      )"></div>
</section>
<section className="sm:px-6 lg:pl-8 lg:pr-8 lg:pb-32 font-sans bg-[#030711] border-white/15 border-b pt-16 pr-8 pb-20 pl-8 relative scroll-reveal" style={{'--reveal-delay': '80ms'}}>
<div className="relative mx-auto max-w-6xl">
<div className="mb-24 flex w-full flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between gap-x-8 gap-y-8">
<div className="max-w-xl">
<div className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.24em] text-cyan-300/90">
<span className="text-cyan-400">//</span>
<span>How It Works</span>
</div>
<h2 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">From scattered tools to AI-run workflows.</h2>
</div>
<div className="max-w-md lg:pb-2">
<p className="text-base leading-relaxed text-white/60">
                Connect your data, describe the outcome, and let Nexora run the
                workflow with live visibility across every step.
              </p>
<a className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/85 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)]" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-500/25 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="absolute left-4 right-4 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-8 right-8 h-4 bg-cyan-400/10 blur-lg"></span>
<span className="relative z-10 tracking-[-0.01em]">
                  See It In Action
                </span>
</a>
</div>
</div>
<div className="stack-cards-container relative flex flex-col gap-[35vh] pb-[20vh]">
<div className="stack-card sticky top-24 origin-top overflow-hidden rounded-[32px] border border-white/10 bg-[#02050e] transition-all duration-75 ease-linear" data-card-index="0" style={{filter: 'brightness(100%)'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent"></div>
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[80px]"></div>
<div className="pointer-events-none absolute right-4 top-2 select-none text-[160px] font-semibold leading-none tracking-tighter text-white/[0.055] sm:text-[200px]">
                01
              </div>
<div className="grid md:p-16 lg:grid-cols-2 lg:p-20 z-10 pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12 items-center">
<div className="relative flex min-h-[360px] items-center justify-center">
<div className="relative h-[360px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f17] p-5 shadow-2xl shadow-cyan-950/20">

<div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="relative mb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18">
<path d="M12 5L5 18H19L12 5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="12" cy="5" fill="currentColor" r="2"></circle>
<circle cx="5" cy="18" fill="currentColor" r="2"></circle>
<circle cx="19" cy="18" fill="currentColor" r="2"></circle>
</svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">
                            Connected workspace
                          </p>
<p className="mt-1 text-xs text-white/45">
                            6 sources ¬∑ All systems operational
                          </p>
</div>
</div>
<div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]"></span>
                        Live
                      </div>
</div>

<div className="relative grid grid-cols-3 gap-2.5">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center shadow-lg shadow-black/20">
<div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
<span className="text-[10px] font-bold">SF</span>
</div>
<p className="text-[11px] font-medium text-white">
                          Salesforce
                        </p>
<p className="mt-1 text-[10px] text-emerald-300">
                          ‚óè Synced
                        </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center shadow-lg shadow-black/20">
<div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-400/15 text-fuchsia-300">
<span className="text-[10px] font-bold">SL</span>
</div>
<p className="text-[11px] font-medium text-white">Slack</p>
<p className="mt-1 text-[10px] text-emerald-300">
                          ‚óè Synced
                        </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center shadow-lg shadow-black/20">
<div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-green-400/15 text-green-300">
<span className="text-[10px] font-bold">SH</span>
</div>
<p className="text-[11px] font-medium text-white">Sheets</p>
<p className="mt-1 text-[10px] text-emerald-300">
                          ‚óè Synced
                        </p>
</div>
</div>

<div className="relative flex h-12 items-center justify-center">
<div className="absolute left-[18%] top-0 h-9 w-[32%] rounded-b-full border-b border-l border-cyan-300/35"></div>
<div className="absolute right-[18%] top-0 h-9 w-[32%] rounded-b-full border-b border-r border-cyan-300/35"></div>
<div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/40 to-transparent"></div>
<div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0d1722] text-cyan-300 shadow-[0_0_32px_rgba(34,211,238,0.28)]">
<svg fill="none" height="17" viewbox="0 0 24 24" width="17">
<path d="M7 17V7L17 17V7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-black/25 p-3.5">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/5 text-cyan-300">
<svg fill="none" height="15" viewbox="0 0 24 24" width="15">
<path d="M12 5L5 18H19L12 5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium text-white">
                              Unified data graph
                            </p>
<p className="mt-0.5 text-[10px] text-white/45">
                              Real-time, deduplicated, and secure
                            </p>
</div>
</div>
<div className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 text-[10px] text-cyan-300">
                          4.2M records
                        </div>
</div>

<div className="relative h-[72px] overflow-hidden rounded-xl border border-white/5 bg-[#070b12]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_34%)]"></div>
<div className="absolute left-4 top-1/2 h-px w-[42%] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-cyan-300"></div>
<div className="absolute right-4 top-1/2 h-px w-[42%] -translate-y-1/2 bg-gradient-to-r from-blue-400 to-transparent"></div>
<div className="absolute left-8 top-5 h-1 w-1 rounded-full bg-cyan-300/70"></div>
<div className="absolute left-16 top-8 h-1 w-1 rounded-full bg-cyan-300/60"></div>
<div className="absolute left-28 top-6 h-1 w-1 rounded-full bg-cyan-300/50"></div>
<div className="absolute left-36 bottom-5 h-1 w-1 rounded-full bg-cyan-300/50"></div>
<div className="absolute right-8 top-6 h-1 w-1 rounded-full bg-blue-300/70"></div>
<div className="absolute right-20 top-9 h-1 w-1 rounded-full bg-blue-300/60"></div>
<div className="absolute right-32 bottom-5 h-1 w-1 rounded-full bg-violet-300/50"></div>
<div className="absolute right-44 top-7 h-1 w-1 rounded-full bg-violet-300/50"></div>
<div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.95)]"></div>
</div>

<div className="mt-3 grid grid-cols-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
<div className="border-r border-white/10 p-2.5">
<p className="text-[9px] text-white/40">Records</p>
<p className="mt-1 text-[11px] font-medium text-cyan-300">
                            4.2M
                          </p>
</div>
<div className="border-r border-white/10 p-2.5">
<p className="text-[9px] text-white/40">Sync</p>
<p className="mt-1 text-[11px] font-medium text-cyan-300">
                            2m ago
                          </p>
</div>
<div className="border-r border-white/10 p-2.5">
<p className="text-[9px] text-white/40">Success</p>
<p className="mt-1 text-[11px] font-medium text-cyan-300">
                            99.8%
                          </p>
</div>
<div className="p-2.5">
<p className="text-[9px] text-white/40">Fresh</p>
<p className="mt-1 text-[11px] font-medium text-cyan-300">
                            Live
                          </p>
</div>
</div>
</div>
</div>
</div>
<div className="">
<h3 className="mb-6 text-4xl font-normal tracking-tight text-white">
                    Connect your stack
                  </h3>
<p className="max-w-xl text-lg leading-relaxed text-white/70">
                    Bring CRM records, tickets, spreadsheets, and internal
                    systems into one secure workspace so Nexora can act with the
                    full context.
                  </p>
<div className="mt-8 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                      Integrations
                    </span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                      Permissions
                    </span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                      Data sync
                    </span>
</div>
</div>
</div>
</div>
<div className="stack-card sticky top-28 origin-top overflow-hidden rounded-[32px] border border-white/10 bg-[#02050e] transition-all duration-75 ease-linear" data-card-index="1" style={{filter: 'brightness(100%)'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
<div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]"></div>
<div className="pointer-events-none absolute right-4 top-2 select-none text-[160px] font-semibold leading-none tracking-tighter text-white/[0.055] sm:text-[200px]">
                02
              </div>
<div className="grid md:p-16 lg:grid-cols-2 lg:p-20 z-10 pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12 items-center">
<div className="relative flex min-h-[360px] items-center justify-center">
<div className="relative flex min-h-[360px] items-center justify-center">
<div className="relative h-[360px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f17] p-5 shadow-2xl shadow-cyan-950/20">

<div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="relative mb-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
<svg fill="none" height="18" viewbox="0 0 24 24" width="18">
<path d="M6 7H12M12 7C12 5.89543 12.8954 5 14 5H18M12 7C12 8.10457 12.8954 9 14 9H18M6 17H12M12 17C12 15.8954 12.8954 15 14 15H18M12 17C12 18.1046 12.8954 19 14 19H18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"></path>
</svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">
                              Workflow builder
                            </p>
<p className="mt-1 text-xs text-white/45">
                              AI-assisted automation logic
                            </p>
</div>
</div>
<div className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-300">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></span>
                          Draft
                        </div>
</div>

<div className="relative grid gap-3">

<div className="absolute left-[23px] top-12 h-[150px] w-px bg-gradient-to-b from-white/10 via-cyan-300/35 to-white/10"></div>

<div className="relative rounded-xl border border-white/10 bg-white/[0.04] p-3.5 shadow-lg shadow-black/20">
<div className="flex items-center gap-3">
<div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111722] text-white/70">
<svg fill="none" height="19" viewbox="0 0 24 24" width="19">
<path d="M12 5V12L16 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path>
<circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6"></circle>
</svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<p className="text-xs font-medium text-white">
                                  Trigger
                                </p>
<span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/45">
                                  Instant
                                </span>
</div>
<p className="mt-1 text-[11px] text-white/45">
                                New high-intent lead enters CRM
                              </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-white/[0.03] p-3.5 shadow-[0_0_35px_rgba(34,211,238,0.14)]">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-cyan-300/10 blur-2xl"></div>
<div className="relative flex items-center gap-3">
<div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-[#061018] shadow-[0_0_24px_rgba(34,211,238,0.35)]">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" fill="currentColor"></path>
<path d="M18 15L18.8 17.2L21 18L18.8 18.8L18 21L17.2 18.8L15 18L17.2 17.2L18 15Z" fill="currentColor"></path>
</svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<p className="text-xs font-medium text-white">
                                  AI decision
                                </p>
<span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-[10px] text-cyan-300">
                                  Processing
                                </span>
</div>
<p className="mt-1 text-[11px] text-white/55">
                                Score, route, summarize, and suggest next step
                              </p>
</div>
</div>

<div className="relative mt-3 flex flex-wrap gap-2 pl-14">
<span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-white/55">
                              Score 92%
                            </span>
<span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-white/55">
                              Enterprise
                            </span>
<span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-white/55">
                              Route to sales
                            </span>
</div>
</div>

<div className="relative rounded-xl border border-white/10 bg-white/[0.04] p-3.5 shadow-lg shadow-black/20">
<div className="flex items-center gap-3">
<div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111722] text-white/70">
<svg fill="none" height="19" viewbox="0 0 24 24" width="19">
<path d="M5 12L10 17L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<p className="text-xs font-medium text-white">
                                  Action
                                </p>
<span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2 py-0.5 text-[10px] text-emerald-300">
                                  Ready
                                </span>
</div>
<p className="mt-1 text-[11px] text-white/45">
                                Assign owner and notify team in Slack
                              </p>
</div>
</div>
</div>
</div>

<div className="relative mt-4 rounded-xl border border-white/10 bg-black/25 p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] font-medium text-white">
                              Generated summary
                            </p>
<p className="mt-1 text-[10px] text-white/40">
                              Lead is ready for sales follow-up
                            </p>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300/50"></span>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300/30"></span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="">
<h3 className="mb-6 text-4xl font-normal tracking-tight text-white">
                    Describe the outcome
                  </h3>
<p className="max-w-xl text-lg leading-relaxed text-white/70">
                    Use plain language to define what should happen. Nexora
                    turns the request into triggers, AI decisions, actions, and
                    approval steps.
                  </p>
<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                      Example prompt
                    </p>
<p className="text-white/75">
                      When a qualified lead replies, enrich the account, assign
                      an owner, and post a summary in Slack.
                    </p>
</div>
</div>
</div>
</div>
<div className="stack-card sticky top-32 origin-top overflow-hidden rounded-[32px] border border-white/10 bg-[#02050e] transition-all duration-75 ease-linear" data-card-index="2" style={{filter: 'brightness(100%)'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
<div className="pointer-events-none absolute left-1/2 top-[-7rem] h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]"></div>
<div className="pointer-events-none absolute right-4 top-2 select-none text-[160px] font-semibold leading-none tracking-tighter text-white/[0.055] sm:text-[200px]">
                03
              </div>
<div className="grid md:p-16 lg:grid-cols-2 lg:p-20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 z-10 px-8 py-8 relative gap-x-12 gap-y-12 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0))'}}>
<div className="relative flex min-h-[360px] items-center justify-center">
<div className="relative h-[360px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f17] p-5 shadow-2xl shadow-blue-950/20">

<div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="relative mb-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
<svg className="" fill="none" height="18" viewbox="0 0 24 24" width="18">
<path d="M4 18V6M9 18V10M14 18V4M19 18V8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7"></path>
</svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">
                            Operations overview
                          </p>
<p className="mt-1 text-xs text-white/45">
                            Last 7 days ¬∑ 24 automations tracked
                          </p>
</div>
</div>
<div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]"></span>
                        98.7%
                      </div>
</div>

<div className="relative mb-3 grid grid-cols-3 gap-2.5">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<p className="text-[10px] text-white/40">Completed</p>
<p className="mt-1 text-sm font-medium text-white">12.8k</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<p className="text-[10px] text-white/40">Avg. time</p>
<p className="mt-1 text-sm font-medium text-cyan-300">
                          1.2s
                        </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<p className="text-[10px] text-white/40">Errors</p>
<p className="mt-1 text-sm font-medium text-emerald-300">
                          0.3%
                        </p>
</div>
</div>

<div className="relative grid gap-2.5">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
<div className="mb-2.5 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]"></div>
<p className="text-xs font-medium text-white">
                              Invoice Processing
                            </p>
</div>
<p className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-2 py-0.5 text-[10px] text-emerald-300">
                            Running
                          </p>
</div>
<div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[96%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
<div className="mb-2.5 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]"></div>
<p className="text-xs font-medium text-white">
                              Support Triage
                            </p>
</div>
<p className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-2 py-0.5 text-[10px] text-cyan-300">
                            Running
                          </p>
</div>
<div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[84%] rounded-full bg-gradient-to-r from-teal-300 to-cyan-400"></div>
</div>
</div>
</div>

<div className="relative mt-3 overflow-hidden rounded-2xl border border-blue-300/15 bg-blue-500/10 p-3.5">
<div className="mb-2 flex items-center justify-between">
<div className="">
<p className="text-[11px] font-medium text-white">
                            Automation volume
                          </p>
<p className="mt-0.5 text-[10px] text-white/40">
                            Tasks completed per day
                          </p>
</div>
<div className="rounded-full border border-blue-300/15 bg-blue-300/10 px-2.5 py-1 text-[10px] text-blue-300">
                          +18.4%
                        </div>
</div>
<div className="relative h-[72px] overflow-hidden rounded-xl border border-white/5 bg-[#070b12]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.18),transparent_36%)]"></div>

<div className="absolute left-0 top-1/4 h-px w-full bg-white/[0.04]"></div>
<div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.04]"></div>
<div className="absolute left-0 top-3/4 h-px w-full bg-white/[0.04]"></div>
<svg className="relative h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,24 C12,20 20,26 32,16 C44,6 54,12 64,10 C76,8 82,17 91,9 C96,5 100,4 100,4" fill="none" stroke="rgba(96,165,250,0.95)" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M0,24 C12,20 20,26 32,16 C44,6 54,12 64,10 C76,8 82,17 91,9 C96,5 100,4 100,4 L100,30 L0,30 Z" fill="rgba(96,165,250,0.12)"></path>
</svg>
<div className="absolute right-[9%] top-[18px] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.9)]"></div>
</div>
</div>
</div>
</div>
<div className="">
<h3 className="mb-6 text-4xl font-normal tracking-tight text-white">
                    Monitor every run
                  </h3>
<p className="max-w-xl text-lg leading-relaxed text-white/70">
                    Track workflow runs, latency, success rates, and approvals
                    from the same command center your team already uses to
                    manage operations.
                  </p>
<div className="mt-8 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                      Run history
                    </span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                      Alerts
                    </span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                      Audit trail
                    </span>
</div>
</div>
</div>
</div>
<div className="stack-card sticky top-36 origin-top overflow-hidden rounded-[32px] border border-white/10 bg-[#02050e] transition-all duration-75 ease-linear" data-card-index="3" style={{filter: 'brightness(100%)'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent"></div>
<div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[90px]"></div>
<div className="pointer-events-none absolute right-4 top-2 select-none text-[160px] font-semibold leading-none tracking-tighter text-white/[0.055] sm:text-[200px]">
                04
              </div>
<div className="grid md:p-16 lg:grid-cols-2 lg:p-20 z-10 pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12 items-center">
<div className="relative flex min-h-[360px] items-center justify-center">
<div className="relative h-[360px] w-full max-w-[520px] overflow-hidden rounded-[28px] border border-white/10 bg-[#070b12] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]">

<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl"></div>
<div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl"></div>
<div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:34px_34px] opacity-60"></div>
<div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10"></div>

<div className="relative mb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]">
<svg fill="none" height="17" viewbox="0 0 24 24" width="17">
<path d="M4 17.5V6.5M9.5 17.5V10M15 17.5V4.5M20 17.5V8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium tracking-[-0.02em] text-white">
                            Impact overview
                          </p>
<p className="mt-0.5 text-xs text-white/45">
                            Automation performance this month
                          </p>
</div>
</div>
<div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]"></span>
                        Live
                      </div>
</div>

<div className="relative grid grid-cols-3 gap-2.5">

<div className="group relative overflow-hidden rounded-2xl border border-cyan-300/10 bg-white/[0.045] p-3 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.065]">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
<div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-300/10 blur-2xl"></div>
<div className="mb-2.5 flex items-center justify-between">
<div className="flex h-7 w-7 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
<svg fill="none" height="15" viewbox="0 0 24 24" width="15">
<path d="M12 6V12L16 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></path>
<circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7"></circle>
</svg>
</div>
<span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-1.5 py-0.5 text-[10px] text-emerald-300">
                            +22%
                          </span>
</div>
<p className="text-[11px] text-white/45">Time Saved</p>
<p className="mt-1 text-[24px] font-medium leading-none tracking-tight text-white">
                          320h
                        </p>
<div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_14px_rgba(34,211,238,0.35)]"></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-emerald-300/10 bg-white/[0.045] p-3 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/25 hover:bg-white/[0.065]">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"></div>
<div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-300/10 blur-2xl"></div>
<div className="mb-2.5 flex items-center justify-between">
<div className="flex h-7 w-7 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/10 text-emerald-300">
<svg fill="none" height="15" viewbox="0 0 24 24" width="15">
<path d="M12 3V21M17 7.5C16.2 6.5 14.8 6 13.2 6H10.5C8.8 6 7.5 7 7.5 8.5C7.5 10 8.7 10.7 10.4 11.1L13.8 11.9C15.5 12.3 16.7 13.1 16.7 14.7C16.7 16.4 15.2 17.5 13.2 17.5H10.8C9.1 17.5 7.6 16.9 6.7 15.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"></path>
</svg>
</div>
<span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-1.5 py-0.5 text-[10px] text-emerald-300">
                            +15%
                          </span>
</div>
<p className="text-[11px] text-white/45">Savings</p>
<p className="mt-1 text-[24px] font-medium leading-none tracking-tight text-white">
                          $24.5K
                        </p>
<div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-400 shadow-[0_0_14px_rgba(45,212,191,0.35)]"></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-blue-300/10 bg-white/[0.045] p-3 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/25 hover:bg-white/[0.065]">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
<div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-300/10 blur-2xl"></div>
<div className="mb-2.5 flex items-center justify-between">
<div className="flex h-7 w-7 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-300/10 text-blue-300">
<svg fill="none" height="15" viewbox="0 0 24 24" width="15">
<path d="M5 12L10 17L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</div>
<span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-1.5 py-0.5 text-[10px] text-emerald-300">
                            +12%
                          </span>
</div>
<p className="text-[11px] text-white/45">Success</p>
<p className="mt-1 text-[24px] font-medium leading-none tracking-tight text-white">
                          98.7%
                        </p>
<div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[94%] rounded-full bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 shadow-[0_0_14px_rgba(96,165,250,0.35)]"></div>
</div>
</div>
</div>

<div className="relative mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent"></div>
<div className="pointer-events-none absolute -right-16 -top-12 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl"></div>
<div className="mb-2.5 flex items-center justify-between">
<div>
<p className="text-xs font-medium text-white">
                            Efficiency trend
                          </p>
<p className="mt-0.5 text-[11px] text-white/40">
                            Tasks completed vs. manual workload
                          </p>
</div>
<div className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-2.5 py-1 text-[10px] text-emerald-300">
                          +18.4%
                        </div>
</div>
<div className="relative h-[82px] overflow-hidden rounded-xl border border-white/5 bg-[#050914] px-4 py-2.5">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.16),transparent_36%)]"></div>
<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_22px]"></div>

<div className="relative z-10 flex h-[61px] items-end justify-between gap-3">
<div className="flex flex-1 flex-col items-center gap-1">
<div className="flex h-[45px] w-full items-end justify-center">
<div className="w-full max-w-[14px] rounded-full bg-white/[0.08] p-[2px]">
<div className="h-5 rounded-full bg-cyan-300/45"></div>
</div>
</div>
<span className="text-[9px] text-white/30">M</span>
</div>
<div className="flex flex-1 flex-col items-center gap-1">
<div className="flex h-[45px] w-full items-end justify-center">
<div className="w-full max-w-[14px] rounded-full bg-white/[0.08] p-[2px]">
<div className="h-8 rounded-full bg-cyan-300/55"></div>
</div>
</div>
<span className="text-[9px] text-white/30">T</span>
</div>
<div className="flex flex-1 flex-col items-center gap-1">
<div className="flex h-[45px] w-full items-end justify-center">
<div className="w-full max-w-[14px] rounded-full bg-white/[0.08] p-[2px]">
<div className="h-6 rounded-full bg-sky-300/45"></div>
</div>
</div>
<span className="text-[9px] text-white/30">W</span>
</div>
<div className="flex flex-1 flex-col items-center gap-1">
<div className="flex h-[45px] w-full items-end justify-center">
<div className="w-full max-w-[14px] rounded-full bg-white/[0.08] p-[2px]">
<div className="h-9 rounded-full bg-sky-300/60"></div>
</div>
</div>
<span className="text-[9px] text-white/30">T</span>
</div>
<div className="flex flex-1 flex-col items-center gap-1">
<div className="flex h-[45px] w-full items-end justify-center">
<div className="w-full max-w-[14px] rounded-full bg-white/[0.08] p-[2px]">
<div className="h-7 rounded-full bg-blue-300/50"></div>
</div>
</div>
<span className="text-[9px] text-white/30">F</span>
</div>
<div className="flex flex-1 flex-col items-center gap-1">
<div className="flex h-[45px] w-full items-end justify-center">
<div className="w-full max-w-[14px] rounded-full bg-white/[0.08] p-[2px] shadow-[0_0_18px_rgba(45,212,191,0.12)]">
<div className="h-10 rounded-full bg-gradient-to-t from-cyan-400 to-teal-300 shadow-[0_0_16px_rgba(45,212,191,0.35)]"></div>
</div>
</div>
<span className="text-[9px] text-teal-300/70">S</span>
</div>
<div className="flex flex-1 flex-col items-center gap-1">
<div className="flex h-[45px] w-full items-end justify-center">
<div className="w-full max-w-[14px] rounded-full bg-white/[0.08] p-[2px]">
<div className="h-8 rounded-full bg-blue-300/45"></div>
</div>
</div>
<span className="text-[9px] text-white/30">S</span>
</div>
</div>

<div className="absolute right-3 top-2.5 z-20 rounded-xl border border-white/10 bg-[#0b0f17]/85 px-2 py-1.5 shadow-xl backdrop-blur-md">
<p className="text-[9px] text-white/35">
                            Peak efficiency
                          </p>
<p className="mt-0.5 text-[11px] font-medium text-white">
                            98.7%
                            <span className="text-emerald-300">‚Üë</span>
</p>
</div>
</div>
</div>
</div>
</div>
<div className="">
<h3 className="mb-6 text-4xl font-normal tracking-tight text-white">
                    Optimize at scale
                  </h3>
<p className="max-w-xl text-lg leading-relaxed text-white/70">
                    Turn performance data into better workflows. Nexora
                    highlights bottlenecks, suggests improvements, and helps
                    teams reduce manual work over time.
                  </p>
<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                    Built for teams that want fewer manual handoffs, clearer
                    ownership, and measurable operational impact.
                  </div>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style="background-image:
      linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%),
      repeating-linear-gradient(
        to right,
        rgba(255, 255, 255, 0.24) 0px,
        rgba(255, 255, 255, 0.24) 1px,
        transparent 1px,
        transparent 16px
      )"></div>
</section>
<section className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-white/15 border-b pt-16 pb-0 relative gap-x-8 gap-y-8 scroll-reveal" style={{'--reveal-delay': '120ms'}}>
<section className="relative w-full border-b border-white/15 pt-16 pb-32">
<div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

<div className="flex w-full flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between gap-x-8 gap-y-8">
<div className="max-w-xl">
<div className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.24em] text-cyan-300/90">
<span className="text-cyan-400">//</span>
<span>Security &amp; Compliance</span>
</div>
<h2 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">Enterprise-grade security built-in.</h2>
</div>
<div className="max-w-md lg:pb-2">
<p className="text-base leading-relaxed text-white/60">
          Our platform is designed with security, privacy, and compliance at its core to protect your most sensitive operations.
        </p>
<a className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-6 py-3 text-sm font-normal text-white/85 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)]" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-500/25 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="absolute left-4 right-4 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-8 right-8 h-4 bg-cyan-400/10 blur-lg"></span>
<span className="relative z-10 tracking-[-0.01em]">
            View Security Documentation
          </span>
</a>
</div>
</div>

<div className="mt-14 grid w-full gap-6 lg:grid-cols-12">

<article className="group relative overflow-hidden rounded-[1.75rem] border border-cyan-300/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/35 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_32px_90px_rgba(8,145,178,0.16)] lg:col-span-7">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_92%_12%,rgba(59,130,246,0.14),transparent_35%)]">
</div>
<div className="relative flex h-full flex-col">
<div className="security-visual-fade relative mb-7 min-h-[270px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent">
</div>
<div className="mb-4 flex items-center justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-[0.18em] text-cyan-300">Security Control Center</div>
<div className="mt-1 text-sm text-white/50">Live protection overview</div>
</div>
<span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                Protected
              </span>
</div>
<div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
<div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
<div className="mb-4 flex items-center justify-between">
<span className="text-xs text-white/55">Access Events</span>
<span className="text-xs text-white/35">Last 7 days</span>
</div>
<div className="flex h-32 items-end gap-2">
<span className="h-10 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
<span className="h-20 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
<span className="h-14 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
<span className="h-28 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
<span className="h-16 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
<span className="h-24 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
<span className="h-12 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
<span className="h-30 flex-1 rounded-t bg-gradient-to-t from-cyan-500/25 to-cyan-300"></span>
</div>
</div>
<div className="grid gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-xs text-white/45">Encryption</div>
<div className="mt-2 text-3xl font-normal tracking-tight text-white">AES-256</div>
<div className="mt-2 text-xs text-emerald-300">Enabled across all data</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="mb-3 text-xs text-white/45">Policy Coverage</div>
<div className="space-y-3">
<div>
<div className="mb-2 flex items-center justify-between text-xs text-white/60">
<span>Identity</span>
<span className="text-emerald-300">100%</span>
</div>
<div className="h-2 rounded-full bg-white/[0.06]">
<div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"></div>
</div>
</div>
<div>
<div className="mb-2 flex items-center justify-between text-xs text-white/60">
<span>Workspaces</span>
<span className="text-emerald-300">96%</span>
</div>
<div className="h-2 rounded-full bg-white/[0.06]">
<div className="h-full w-[96%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative mt-auto">
<h3 className="text-3xl font-normal tracking-[-0.03em] text-white">Security by default</h3>
<p className="mt-3 max-w-[56ch] text-base leading-relaxed text-white/60">
          Centralize encryption, access monitoring, identity controls, and compliance evidence in one secure foundation.
        </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/65">SOC 2-Ready</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/65">AES-256</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/65">Private Workspaces</span>
</div>
</div>
</div>
</article>

<div className="grid gap-6 lg:col-span-5">

<article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/25 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.10),transparent_34%)]">
</div>
<div className="relative">
<div className="mb-5 flex items-start justify-between gap-5">
<div>
<h3 className="text-2xl font-normal tracking-tight text-white">SSO &amp; SAML</h3>
<p className="mt-2 text-sm leading-relaxed text-white/60">
              Secure access with your existing identity provider.
            </p>
</div>
<div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-200">
            Connected
          </div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<div className="mb-3 text-xs text-white/45">Identity Providers</div>
<div className="grid grid-cols-3 gap-2">
<div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-xs text-white/65">
              Okta</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-xs text-white/65">
              Google</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-xs text-white/65">
              Azure</div>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-blue-950/25 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(59,130,246,0.12),transparent_34%)]">
</div>
<div className="relative">
<h3 className="text-2xl font-normal tracking-tight text-white">Audit Logs</h3>
<p className="mt-2 text-sm leading-relaxed text-white/60">
          Immutable activity records for investigations and security reviews.
        </p>
<div className="mt-5 space-y-2">
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-white/60">
<span>User permission updated</span>
<span className="text-cyan-300">2m ago</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-white/60">
<span>Workspace export generated</span>
<span className="text-white/35">18m ago</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-white/60">
<span>Approval step completed</span>
<span className="text-white/35">41m ago</span>
</div>
</div>
</div>
</article>
</div>

<article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-blue-500/0 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 lg:col-span-4">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.11),transparent_34%)]">
</div>
<div className="relative">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-2xl font-normal tracking-tight text-white">Role-Based Access</h3>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">RBAC</span>
</div>
<p className="text-sm leading-relaxed text-white/60">
        Granular permissions controlling exactly who can view, edit, or execute critical workflows.
      </p>
<div className="mt-6 space-y-3">
<div className="grid grid-cols-[6rem_1fr] items-center gap-3 text-xs text-white/55">
<span>Admin</span>
<span className="h-2 rounded-full bg-white/[0.06]">
<span className="block h-full w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
</span>
</div>
<div className="grid grid-cols-[6rem_1fr] items-center gap-3 text-xs text-white/55">
<span>Manager</span>
<span className="h-2 rounded-full bg-white/[0.06]">
<span className="block h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
</span>
</div>
<div className="grid grid-cols-[6rem_1fr] items-center gap-3 text-xs text-white/55">
<span>Reviewer</span>
<span className="h-2 rounded-full bg-white/[0.06]">
<span className="block h-full w-[48%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
</span>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-blue-500/0 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 lg:col-span-4">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.11),transparent_34%)]">
</div>
<div className="relative">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-2xl font-normal tracking-tight text-white">Data Encryption</h3>
<span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Active</span>
</div>
<p className="text-sm leading-relaxed text-white/60">
        AES-256 encryption applied to your data, both at rest and in transit.
      </p>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
<div className="flex items-center justify-between text-xs text-white/55">
<span>At rest</span>
<span className="text-emerald-300">Encrypted</span>
</div>
<div className="mt-3 h-2 rounded-full bg-white/[0.06]">
<div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300"></div>
</div>
<div className="mt-4 flex items-center justify-between text-xs text-white/55">
<span>In transit</span>
<span className="text-emerald-300">Encrypted</span>
</div>
<div className="mt-3 h-2 rounded-full bg-white/[0.06]">
<div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300"></div>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-blue-500/0 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 lg:col-span-4">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_34%)]">
</div>
<div className="relative">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-2xl font-normal tracking-tight text-white">Compliance Reports</h3>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">Exportable</span>
</div>
<p className="text-sm leading-relaxed text-white/60">
        Detailed reports built to streamline recurring audits.
      </p>
<div className="mt-6 space-y-2">
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-white/60">
<span>SOC 2 evidence</span>
<span className="text-emerald-300">Ready</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-white/60">
<span>Access review</span>
<span className="text-emerald-300">Ready</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs text-white/60">
<span>Audit export</span>
<span className="text-cyan-300">Generate</span>
</div>
</div>
</div>
</article>

<div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl lg:col-span-12">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_42%)]">
</div>
<div className="relative flex flex-wrap items-center justify-between gap-4">
<div>
<div className="text-sm text-white">Enterprise controls included</div>
<div className="mt-1 text-sm text-white/45">Security features designed for regulated and fast-growing teams.</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/65">SOC 2-Ready</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/65">Private Workspaces</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/65">Human Approvals</span>
<span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/65">SAML</span>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%), repeating-linear-gradient(to right, rgba(255, 255, 255, 0.24) 0px, rgba(255, 255, 255, 0.24) 1px, transparent 1px, transparent 16px)'}}></div>


</section>
</section><section className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-white/15 border-b pt-16 pb-0 relative gap-x-8 gap-y-8 scroll-reveal" style={{'--reveal-delay': '160ms'}}>
<section className="relative w-full border-b border-white/15 pt-16 pb-32">
<div className="relative mx-auto w-full max-w-6xl">

<div className="flex w-full flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between gap-x-8 gap-y-8">
<div className="max-w-xl">
<div className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.24em] text-cyan-300/90">
<span className="text-cyan-400">//</span>
<span>Testimonials</span>
</div>
<h2 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">Trusted by teams building with AI.</h2>
</div>
<div className="max-w-md lg:pb-2">
<p className="text-base leading-relaxed text-white/60">
                  See how modern teams use Nexora to automate workflows,
                  simplify operations, and move faster with AI-powered systems.
                </p>
<a className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/85 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)]" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-500/25 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="absolute left-4 right-4 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-8 right-8 h-4 bg-cyan-400/10 blur-lg"></span>
<span className="relative z-10 tracking-[-0.01em]">
                    Read Customer Stories
                  </span>
</a>
</div>
</div>

<style>
  @keyframes marquee-vertical-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
</style>
<div className="mt-12 grid w-full gap-6 lg:grid-cols-[1fr_1.08fr_1fr] lg:items-stretch">

<div className="relative h-[600px] lg:h-full w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
<div className="absolute inset-x-0 top-0 flex flex-col gap-6 hover:[animation-play-state:paused]" style={{animation: 'marquee-vertical-down 40s linear infinite'}}>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Olivia Martinez" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4514320b-dec0-43a1-ac07-4ef303eba216_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Olivia Martinez
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Head of Operations, Pulse Labs
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúNexora cut our weekly operations work in half. We
                      automated reporting, approvals, and data syncs without
                      adding more tools.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Workflow automation</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="James Patel" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf728e3d-89a4-468d-96e5-d2d55f70e406_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            James Patel
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            COO, Northstar Ops
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúThe dashboards gave us real-time clarity across every
                      workflow. Everything feels more structured and easier to
                      manage.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Real-time dashboards</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Olivia Martinez" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4514320b-dec0-43a1-ac07-4ef303eba216_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Olivia Martinez
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Head of Operations, Pulse Labs
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúNexora cut our weekly operations work in half. We
                      automated reporting, approvals, and data syncs without
                      adding more tools.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Workflow automation</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="James Patel" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf728e3d-89a4-468d-96e5-d2d55f70e406_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            James Patel
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            COO, Northstar Ops
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúThe dashboards gave us real-time clarity across every
                      workflow. Everything feels more structured and easier to
                      manage.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Real-time dashboards</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Olivia Martinez" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4514320b-dec0-43a1-ac07-4ef303eba216_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Olivia Martinez
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Head of Operations, Pulse Labs
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúNexora cut our weekly operations work in half. We
                      automated reporting, approvals, and data syncs without
                      adding more tools.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Workflow automation</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="James Patel" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf728e3d-89a4-468d-96e5-d2d55f70e406_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            James Patel
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            COO, Northstar Ops
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúThe dashboards gave us real-time clarity across every
                      workflow. Everything feels more structured and easier to
                      manage.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Real-time dashboards</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Olivia Martinez" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4514320b-dec0-43a1-ac07-4ef303eba216_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Olivia Martinez
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Head of Operations, Pulse Labs
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúNexora cut our weekly operations work in half. We
                      automated reporting, approvals, and data syncs without
                      adding more tools.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Workflow automation</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="James Patel" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf728e3d-89a4-468d-96e5-d2d55f70e406_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            James Patel
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            COO, Northstar Ops
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúThe dashboards gave us real-time clarity across every
                      workflow. Everything feels more structured and easier to
                      manage.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Real-time dashboards</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>
</div>
</div>

<div className="relative min-h-[720px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#060b14] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
<video aria-label="Marcus Lee" className="absolute inset-0 h-full w-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/491fb3a7-aa96-4243-8cf2-c339424ecdd1_800w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779934931247-ee50bc63-a640-42c6-98d8-2732056072c4.mp4"></video>
<div className="absolute inset-0 rounded-[2rem] border border-white/10"></div>
<div className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs text-white/65 backdrop-blur-md">
<span className="h-1.5 w-1.5 rounded-full bg-white/45"></span>
                  Featured customer story
                </div>
<div className="absolute inset-x-0 bottom-0 p-8">
<blockquote className="max-w-[18ch] text-[30px] font-normal leading-[1.22] tracking-tight text-white sm:text-[34px]">
                    ‚ÄúNexora gave us one clean place to manage automation,
                    reporting, and approvals.‚Äù
                  </blockquote>
<div className="mt-8 h-px w-24 bg-white/20"></div>
<div className="mt-6 flex items-end justify-between gap-5">
<div className="">
<p className="text-2xl font-normal leading-tight tracking-tight text-white">
                        Marcia Lee
                      </p>
<p className="mt-2 text-base text-white/62">
                        VP of Automation, Verta Systems
                      </p>
</div>
<div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-white/55 sm:flex">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                        5.0
                      </span>
</div>
</div>
</div>
</div>

<div className="relative h-[600px] lg:h-full w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
<div className="absolute inset-x-0 top-0 flex flex-col gap-6 hover:[animation-play-state:paused]" style={{animation: 'marquee-vertical-down 40s linear infinite'}}>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Ethan Brooks" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e66151d-ff65-4ff7-8bb0-084c3f363d3f_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Ethan Brooks
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Founder, AlignOps
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúImplementation was smooth, and the product feels premium.
                      Our team adopted it almost immediately.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Team adoption</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Daniel Cho" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85c367a3-5bab-42f7-acff-98dcd87115cd_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Daniel Cho
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Operations Lead, Arcbase
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúHaving used almost every automation tool, Nexora is the
                      easiest way to turn scattered processes into reliable
                      systems.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Reliable systems</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Ethan Brooks" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e66151d-ff65-4ff7-8bb0-084c3f363d3f_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Ethan Brooks
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Founder, AlignOps
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúImplementation was smooth, and the product feels premium.
                      Our team adopted it almost immediately.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Team adoption</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Daniel Cho" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85c367a3-5bab-42f7-acff-98dcd87115cd_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Daniel Cho
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Operations Lead, Arcbase
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúHaving used almost every automation tool, Nexora is the
                      easiest way to turn scattered processes into reliable
                      systems.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Reliable systems</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Ethan Brooks" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e66151d-ff65-4ff7-8bb0-084c3f363d3f_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Ethan Brooks
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Founder, AlignOps
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúImplementation was smooth, and the product feels premium.
                      Our team adopted it almost immediately.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Team adoption</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Daniel Cho" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85c367a3-5bab-42f7-acff-98dcd87115cd_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Daniel Cho
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Operations Lead, Arcbase
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúHaving used almost every automation tool, Nexora is the
                      easiest way to turn scattered processes into reliable
                      systems.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Reliable systems</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>


<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Ethan Brooks" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e66151d-ff65-4ff7-8bb0-084c3f363d3f_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Ethan Brooks
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Founder, AlignOps
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúImplementation was smooth, and the product feels premium.
                      Our team adopted it almost immediately.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Team adoption</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>

<div className="group transition duration-300 hover:border-white/20 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[1.75rem] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '1.75rem'}}>
<div className="flex items-start justify-between gap-5">
<div className="flex min-w-0 items-center gap-3.5">
<div className="relative shrink-0">
<img alt="Daniel Cho" className="h-12 w-12 rounded-full border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85c367a3-5bab-42f7-acff-98dcd87115cd_320w.webp"/>
<span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#07111f] bg-white/70"></span>
</div>
<div className="min-w-0">
<p className="truncate text-base font-normal tracking-[-0.01em] text-white">
                            Daniel Cho
                          </p>
<p className="mt-1 truncate text-sm leading-5 text-white/45">
                            Operations Lead, Arcbase
                          </p>
</div>
</div>
<div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-white/55">
<svg className="h-3.5 w-3.5 fill-current" viewbox="0 0 24 24">
<path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.32l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.94L12 2.5Z"></path>
</svg>
<span className="text-xs font-normal tracking-tight">
                          5.0
                        </span>
</div>
</div>
<blockquote className="mt-9 text-[19px] font-normal leading-8 tracking-[-0.035em] text-white/88">
                      ‚ÄúHaving used almost every automation tool, Nexora is the
                      easiest way to turn scattered processes into reliable
                      systems.‚Äù
                    </blockquote>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
<p className="text-sm text-white/42">Reliable systems</p>
<div className="flex items-center gap-1.5 text-sm text-white/55">
<span className="h-1.5 w-1.5 rounded-full bg-white/35"></span>
                        Verified customer
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%), repeating-linear-gradient(to right, rgba(255, 255, 255, 0.24) 0px, rgba(255, 255, 255, 0.24) 1px, transparent 1px, transparent 16px)'}}></div>
</section>
</section>
<section className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-white/15 border-b pt-16 pb-32 relative gap-x-8 gap-y-8 scroll-reveal" style={{'--reveal-delay': '160ms'}}>
<div className="relative mx-auto max-w-6xl">

<div className="flex w-full flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between gap-x-8 gap-y-8">
<div className="max-w-xl">
<div className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.24em] text-cyan-300/90">
<span className="text-cyan-400">//</span>
<span>Pricing</span>
</div>
<h2 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">Simple, transparent pricing plans.</h2>
</div>
<div className="max-w-md lg:pb-2">
<p className="text-base leading-relaxed text-white/60">
                Choose the perfect plan for your team's needs. Scale seamlessly
                as you grow, with no hidden fees.
              </p>
<a className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/85 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)]" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-500/25 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="absolute left-4 right-4 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-8 right-8 h-4 bg-cyan-400/10 blur-lg"></span>
<span className="relative z-10 tracking-[-0.01em]">
                  Compare All Features
                </span>
</a>
</div>
</div>

<div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] mt-12 gap-x-5 gap-y-5">

<div className="flex flex-col overflow-hidden lg:p-7 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="relative flex flex-1 flex-col">
<div className="flex items-start justify-between gap-6">
<div>
<h3 className="text-3xl font-light tracking-tight text-white">
                      Pro
                    </h3>
<p className="mt-2 text-sm font-light text-white/50">
                      Most Popular for Scaling Teams
                    </p>
</div>
<div className="flex text-white/65 bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-12 h-12 border-white/10 border rounded-xl items-center justify-center">
<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-6xl font-light tracking-tight text-white">
                    $49
                  </span>
<span className="text-lg font-light text-white/50">/ month</span>
</div>
<p className="mt-5 text-lg font-light leading-8 tracking-tight text-white sm:text-xl">
                  Everything you need to automate workflows, sync data, and
                  collaborate at scale.
                </p>
<div className="mt-7 grid gap-3 sm:grid-cols-3">
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl px-4 py-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<p className="text-lg font-light tracking-tight text-white">
                      Unlimited
                    </p>
<p className="mt-1 text-xs font-light text-white/50">
                      Workflows
                    </p>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl px-4 py-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
<p className="text-lg font-light tracking-tight text-white">
                      Advanced
                    </p>
<p className="mt-1 text-xs font-light text-white/50">
                      AI Models
                    </p>
</div>
<div className="bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-xl px-4 py-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1))', '--border-radius-before': '12px'}}>
<p className="text-lg font-light tracking-tight text-white">
                      24/7
                    </p>
<p className="mt-1 text-xs font-light text-white/50">Support</p>
</div>
</div>
<div className="mt-7 flex-1 border-t border-white/10 pt-5">
<ul className="flex flex-col gap-4 text-sm font-light text-white/80">
<li className="flex items-center gap-3">
<svg className="h-5 w-5 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Invite up to 10 team members
                    </li>
<li className="flex items-center gap-3">
<svg className="h-5 w-5 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Real-time analytics and reporting
                    </li>
<li className="flex items-center gap-3">
<svg className="h-5 w-5 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Custom integrations with 50+ apps
                    </li>
</ul>
</div>
<button className="mt-8 w-full rounded-xl bg-white px-4 py-3.5 text-sm font-normal text-[#030711] transition-colors hover:bg-white/90">
                  Start 14-day free trial
                </button>
</div>
</div>

<div className="grid gap-5">
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

<div className="flex flex-col bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light tracking-tight text-white">
                        Starter
                      </h3>
<span className="text-2xl font-light tracking-tight text-white">
                        $0
                        <span className="text-sm font-light text-white/45">
                          /mo
                        </span>
</span>
</div>
<p className="mt-4 text-sm font-light leading-6 text-white/72">
                      Perfect for individuals trying out Nexora with basic
                      automation features.
                    </p>
<ul className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm font-light text-white/70">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Up to 2 users
                      </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        100 AI tasks per month
                      </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Community support
                      </li>
</ul>
</div>
<button className="transition-colors hover:bg-white/10 text-sm font-light text-white bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-full rounded-xl mt-6 px-4 py-3.5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
                    Get Started
                  </button>
</div>

<div className="flex flex-col bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light tracking-tight text-white">
                        Enterprise
                      </h3>
<span className="text-2xl font-light tracking-tight text-white">
                        Custom
                      </span>
</div>
<p className="mt-4 text-sm font-light leading-6 text-white/72">
                      For large organizations requiring maximum security,
                      control, and support.
                    </p>
<ul className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm font-light text-white/70">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        SSO &amp; SAML authentication
                      </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        Dedicated account manager
                      </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 shrink-0 text-white/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                        99.99% Uptime SLA
                      </li>
</ul>
</div>
<button className="transition-colors hover:bg-white/10 text-sm font-light text-white bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-full rounded-xl mt-6 px-4 py-3.5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '12px'}}>
                    Contact Sales
                  </button>
</div>
</div>

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-2xl pt-5 pr-5 pb-5 pl-5 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '16px'}}>
<div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
<div className="">
<p className="text-sm font-light text-white/50">Trusted by</p>
<p className="mt-1 text-2xl font-light tracking-tight text-white">
                      2,000+ teams
                    </p>
</div>
<div className="h-px bg-white/10 sm:h-12 sm:w-px"></div>
<div className="">
<div className="flex items-end gap-1">
<span className="text-2xl font-light tracking-tight text-white">
                        14-Day
                      </span>
</div>
<div className="mt-2 flex items-center gap-1 text-white/55">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm font-light">
                        Money-back guarantee
                      </span>
</div>
</div>
<p className="text-sm font-light text-white/50 sm:max-w-[150px]">
                    Cancel anytime. No questions asked.
                  </p>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%), repeating-linear-gradient(to right, rgba(255, 255, 255, 0.24) 0px, rgba(255, 255, 255, 0.24) 1px, transparent 1px, transparent 16px)'}}></div>
</section>
<section className="relative overflow-hidden border-b border-white/15 bg-[#030711] px-8 pb-28 pt-24 font-sans sm:px-6 lg:px-8 lg:pb-32 lg:pt-16 scroll-reveal" style={{'--reveal-delay': '160ms'}}>
<div className="pointer-events-none absolute inset-0"></div>

<div className="relative z-10 mx-auto max-w-6xl">
<div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start gap-x-12 gap-y-12">

<div className="lg:sticky lg:top-24">
<div className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.24em] text-cyan-300/90">
<span className="text-cyan-400">//</span>
<span>Support &amp; FAQ</span>
</div>
<h2 className="mt-8 max-w-xl text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">Questions, answered clearly.</h2>
<p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
                Everything you need to know about Nexora, billing, security, and
                team support.
              </p>
<div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-500/0 p-6 shadow-[0_0_40px_rgba(34,211,238,0.03),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '24px'}}>
<h3 className="text-xl font-normal tracking-tight text-white">
                  Still need help?
                </h3>
<p className="mt-3 text-sm leading-relaxed text-white/55">
                  Our team can help you choose the right plan or answer product
                  questions.
                </p>
<a className="group relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-5 py-2.5 text-sm font-medium text-white/90 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)]" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-500/25 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="relative z-10 flex items-center gap-2 tracking-[-0.01em]">
                    Contact support
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</span>
</a>
</div>
</div>

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_0_60px_rgba(34,211,238,0.045),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '2rem'}}>
<details className="group relative border-b border-white/10 px-5 py-6 transition-colors duration-300 sm:px-6" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-normal text-white [&amp;::-webkit-details-marker]:hidden sm:text-lg">
<span className="">Is there a free trial available?</span>
<span className="flex shrink-0 items-center justify-center transition-all duration-300 group-open:rotate-180 group-hover:border-cyan-300/30 bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-9 h-9 rounded-full" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-5 flex gap-4 text-sm leading-relaxed text-white/60 sm:text-base">
<span className="mt-1 block h-auto w-px shrink-0 bg-gradient-to-b from-cyan-300 to-cyan-300/10"></span>
<p className="max-w-2xl">
                    Yes, we offer a 14-day free trial with full access to all
                    features so you can evaluate if Nexora is the right fit for
                    your team. No credit card required.
                  </p>
</div>
</details>
<details className="group relative border-b border-white/10 px-5 py-6 open:bg-white/[0.025] transition-colors duration-300 hover:bg-white/[0.018] sm:px-6">
<summary className="flex cursor-pointer list-none gap-6 [&amp;::-webkit-details-marker]:hidden sm:text-lg text-base font-normal text-white gap-x-6 gap-y-6 items-center justify-between">
<span className="">Can I change my plan later?</span>
<span className="flex shrink-0 items-center justify-center transition-all duration-300 group-open:rotate-180 group-hover:border-cyan-300/30 bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-9 h-9 rounded-full" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(103, 232, 249)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-5 flex gap-4 text-sm leading-relaxed text-white/60 sm:text-base">
<span className="mt-1 block h-auto w-px shrink-0 bg-gradient-to-b from-cyan-300 to-cyan-300/10"></span>
<p className="max-w-2xl">
                    Absolutely. You can upgrade or downgrade your plan at any
                    time from your workspace settings.
                  </p>
</div>
</details>
<details className="group relative border-b border-white/10 px-5 py-6 open:bg-white/[0.025] transition-colors duration-300 hover:bg-white/[0.018] sm:px-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-normal text-white [&amp;::-webkit-details-marker]:hidden sm:text-lg">
<span className="">What is your cancellation policy?</span>
<span className="flex shrink-0 items-center justify-center transition-all duration-300 group-open:rotate-180 group-hover:border-cyan-300/30 bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-9 h-9 rounded-full" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-5 flex gap-4 text-sm leading-relaxed text-white/60 sm:text-base">
<span className="mt-1 block h-auto w-px shrink-0 bg-gradient-to-b from-cyan-300 to-cyan-300/10"></span>
<p className="max-w-2xl">
                    You can cancel anytime. Your workspace stays active until
                    the end of your current billing period.
                  </p>
</div>
</details>
<details className="group relative border-b border-white/10 px-5 py-6 open:bg-white/[0.025] transition-colors duration-300 hover:bg-white/[0.018] sm:px-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-normal text-white [&amp;::-webkit-details-marker]:hidden sm:text-lg">
<span>Do you offer custom enterprise plans?</span>
<span className="flex shrink-0 items-center justify-center transition-all duration-300 group-open:rotate-180 group-hover:border-cyan-300/30 bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-9 h-9 rounded-full" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-5 flex gap-4 text-sm leading-relaxed text-white/60 sm:text-base">
<span className="mt-1 block h-auto w-px shrink-0 bg-gradient-to-b from-cyan-300 to-cyan-300/10"></span>
<p className="max-w-2xl">
                    Yes. Enterprise plans can include custom SLAs, dedicated
                    support, SSO, and priority onboarding.
                  </p>
</div>
</details>
<details className="group relative px-5 py-6 open:bg-white/[0.025] transition-colors duration-300 hover:bg-white/[0.018] sm:px-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-normal text-white [&amp;::-webkit-details-marker]:hidden sm:text-lg">
<span className="">How secure is my data?</span>
<span className="flex shrink-0 items-center justify-center transition-all duration-300 group-open:rotate-180 group-hover:border-cyan-300/30 bg-gradient-to-br from-blue-500/10 to-blue-500/0 w-9 h-9 rounded-full" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-4 w-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="mt-5 flex gap-4 text-sm leading-relaxed text-white/60 sm:text-base">
<span className="mt-1 block h-auto w-px shrink-0 bg-gradient-to-b from-cyan-300 to-cyan-300/10"></span>
<p className="max-w-2xl">
                    We use encryption for data at rest and in transit, plus
                    regular security reviews and access controls.
                  </p>
</div>
</details>
</div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style="background-image:
      linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%),
      repeating-linear-gradient(
        to right,
        rgba(255, 255, 255, 0.24) 0px,
        rgba(255, 255, 255, 0.24) 1px,
        transparent 1px,
        transparent 16px
      )"></div>
</section>
<section className="overflow-hidden sm:px-6 lg:pl-8 lg:pr-8 lg:pb-32 lg:pt-16 font-sans bg-[#030711] border-white/15 border-b pt-16 pr-8 pb-32 pl-8 relative scroll-reveal" style={{'--reveal-delay': '160ms'}}>

<div className="relative z-10 mx-auto max-w-3xl text-center">
<div className="inline-flex items-center justify-center gap-3 text-xs font-normal uppercase tracking-[0.24em] text-cyan-300/90">
<span className="text-cyan-400">//</span>
<span>Get Started Today</span>
</div>
<h2 className="mt-8 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">Ready to scale your team's workflow?</h2>
<p className="mt-6 text-lg leading-relaxed text-white/60">
            Join 2,000+ teams who have already automated their operations, saved
            countless hours, and accelerated their growth with Nexora.
          </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-cyan-200/30 bg-white/[0.035] px-8 py-4 text-base font-medium text-white/90 shadow-[0_0_14px_rgba(34,211,238,0.16),inset_0_0_14px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_22px_rgba(34,211,238,0.24),inset_0_0_16px_rgba(255,255,255,0.06)] sm:w-auto" href="#">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-500/25 opacity-60 blur-[1px]"></span>
<span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/[0.06] via-slate-950/90 to-black/90"></span>
<span className="absolute left-4 right-4 top-1.5 h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-sm"></span>
<span className="absolute bottom-0 left-8 right-8 h-4 bg-cyan-400/10 blur-lg"></span>
<span className="relative z-10 flex items-center gap-2 tracking-[-0.01em]">
                Start your free trial
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</span>
</a>
<a className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-normal text-white transition-colors hover:bg-white/10 sm:w-auto" href="#">
              Talk to Sales
            </a>
</div>
<div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/50">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-cyan-300/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
              No credit card required
            </div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-cyan-300/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
              14-day money-back guarantee
            </div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-cyan-300/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
              Cancel anytime
            </div>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full overflow-hidden border-t border-white/25" style="background-image:
      linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 55%),
      repeating-linear-gradient(
        to right,
        rgba(255, 255, 255, 0.24) 0px,
        rgba(255, 255, 255, 0.24) 1px,
        transparent 1px,
        transparent 16px
      )"></div>
</section>
<section className="relative overflow-hidden rounded-b-2xl bg-[#020712] px-4 py-12 font-sans text-white sm:px-6 lg:px-8 scroll-reveal" style={{'--reveal-delay': '160ms'}}>

<div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.55) 0.0625rem, transparent 0.0625rem)', backgroundSize: '1.25rem 1.25rem'}}></div>
<div className="relative mx-auto max-w-6xl">

<div className="grid gap-12 lg:grid-cols-[1.45fr_3fr] lg:gap-16">

<div className="lg:border-r lg:border-white/10 lg:pr-12">
<a className="group flex items-center gap-3" href="#">
<svg aria-label="NEXORA" className="overflow-visible drop-shadow-[0_0_12px_rgba(255,255,255,0.22)] w-[190px] h-[24px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '190px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 360 42" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="nexoraText" x1="0" x2="360" y1="0" y2="42">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="45%" stop-color="#f8fafc"></stop>
<stop offset="100%" stop-color="#dbeafe"></stop>
</lineargradient>
</defs>
<path className="" d="M0 41V1H9.5L32 27V1H41V41H31.5L9 15V41H0Z" fill="url(#nexoraText)"></path>
<path d="M64 1H104V9H64V1Z" fill="url(#nexoraText)"></path>
<path className="" d="M64 17H99V25H64V17Z" fill="url(#nexoraText)"></path>
<path className="" d="M64 33H104V41H64V33Z" fill="url(#nexoraText)"></path>
<path className="" d="M124 1H135L149 16.5L163 1H174L155 21L175 41H164L149 25L134 41H123L143 21L124 1Z" fill="url(#nexoraText)"></path>
<path className="" d="M236 21C236 32.8 227.3 42 215 42C202.7 42 194 32.8 194 21C194 9.2 202.7 0 215 0C227.3 0 236 9.2 236 21ZM203.5 21C203.5 27.9 208.1 33.5 215 33.5C221.9 33.5 226.5 27.9 226.5 21C226.5 14.1 221.9 8.5 215 8.5C208.1 8.5 203.5 14.1 203.5 21Z" fill="url(#nexoraText)"></path>
<path className="" d="M257 41V1H278.5C287.2 1 293 6.2 293 14C293 19.4 289.9 23.6 284.9 25.3L296.5 41H285.6L275.5 27H266.5V41H257ZM266.5 19H277.5C281.2 19 283.5 17.2 283.5 14C283.5 10.8 281.2 9 277.5 9H266.5V19Z" fill="url(#nexoraText)"></path>
<path className="" d="M328 41H318L335 1H345L362 41H352L340 11L328 41Z" fill="url(#nexoraText)"></path>
<path d="M333.5 41L340 24L346.5 41H333.5Z" fill="#020617"></path>
</svg>
</a>

<p className="mt-6 max-w-sm text-base leading-7 text-white/65">
                Automate. Monitor. Optimize.
                <br/>
                Workflows that drive real results.
              </p>
<div className="flex gap-3 mt-6 gap-x-3 gap-y-3 items-center">
<a className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-white/65 transition-all hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-200" href="#">
<span className="sr-only">X</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 4l16 16"></path>
<path d="M20 4L4 20"></path>
</svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-white/65 transition-all hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-200" href="#">
<span className="sr-only">LinkedIn</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-white/65 transition-all hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-200" href="#">
<span className="sr-only">GitHub</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-white/65 transition-all hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-200" href="#">
<span className="sr-only">Website</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20"></path>
<path d="M12 2a14.5 14.5 0 0 1 0 20"></path>
<path className="" d="M2 12h20"></path>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
<div className="sm:border-r sm:border-white/10 sm:pr-8">
<div className="flex items-center gap-3">
<h3 className="text-xs font-semibold uppercase tracking-[0.22rem] text-blue-100">
                    Product
                  </h3>
</div>
<ul className="mt-6 space-y-4 text-sm leading-6 text-white/65">
<li className="">
<a className="transition-colors hover:text-cyan-300" href="#">
                      Features
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-cyan-300" href="#">
                      Integrations
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-cyan-300" href="#">
                      Workflow Builder
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-cyan-300" href="#">
                      AI Assistant
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-cyan-300" href="#">
                      Pricing
                    </a>
</li>
</ul>
</div>
<div className="sm:border-r sm:border-white/10 sm:pr-8">
<div className="flex items-center gap-3">
<h3 className="text-xs font-semibold uppercase tracking-[0.22rem] text-blue-100">
                    Resources
                  </h3>
</div>
<ul className="mt-6 space-y-4 text-sm leading-6 text-white/65">
<li className="">
<a className="transition-colors hover:text-blue-300" href="#">
                      Documentation
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-blue-300" href="#">
                      Guides
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-blue-300" href="#">
                      API Reference
                    </a>
</li>
<li>
<a className="transition-colors hover:text-blue-300" href="#">
                      Blog
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-blue-300" href="#">
                      Case Studies
                    </a>
</li>
</ul>
</div>
<div className="sm:border-r sm:border-white/10 sm:pr-8">
<div className="flex items-center gap-3">
<h3 className="text-xs font-semibold uppercase tracking-[0.22rem] text-blue-100">
                    Company
                  </h3>
</div>
<ul className="mt-6 space-y-4 text-sm leading-6 text-white/65">
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      About Us
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      Careers
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      Partners
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      Contact
                    </a>
</li>
</ul>
</div>
<div className="">
<div className="flex items-center gap-3">
<h3 className="text-xs font-semibold uppercase tracking-[0.22rem] text-blue-100">
                    Legal
                  </h3>
</div>
<ul className="mt-6 space-y-4 text-sm leading-6 text-white/65">
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      Privacy Policy
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      Terms of Service
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      Security
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-violet-300" href="#">
                      Cookies
                    </a>
</li>
</ul>
</div>
</div>
</div>

<div className="relative mt-14 overflow-hidden pt-2">
<div aria-label="Nexora" className="select-none flex justify-center items-center text-center text-[22vw] font-medium leading-none tracking-tight sm:text-[18vw] lg:text-[13.5vw]">
<a className="group flex items-center justify-center w-full transition-transform duration-700 hover:scale-105" href="#">
<svg aria-label="NEXORA" className="overflow-visible drop-shadow-[0_0_32px_rgba(147,197,253,0.34)] sm:w-[140vw] lg:w-[100vw] max-w-[2400px] w-[2400px] h-[134px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '2400px', height: '134px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 360 42" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="nexoraText" x1="0" x2="360" y1="0" y2="42">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="45%" stop-color="#f8fafc"></stop>
<stop offset="100%" stop-color="#dbeafe"></stop>
</lineargradient>
</defs>
<path className="" d="M0 41V1H9.5L32 27V1H41V41H31.5L9 15V41H0Z" fill="url(#nexoraText)"></path>
<path className="" d="M64 1H104V9H64V1Z" fill="url(#nexoraText)"></path>
<path className="" d="M64 17H99V25H64V17Z" fill="url(#nexoraText)"></path>
<path d="M64 33H104V41H64V33Z" fill="url(#nexoraText)"></path>
<path className="" d="M124 1H135L149 16.5L163 1H174L155 21L175 41H164L149 25L134 41H123L143 21L124 1Z" fill="url(#nexoraText)"></path>
<path className="" d="M236 21C236 32.8 227.3 42 215 42C202.7 42 194 32.8 194 21C194 9.2 202.7 0 215 0C227.3 0 236 9.2 236 21ZM203.5 21C203.5 27.9 208.1 33.5 215 33.5C221.9 33.5 226.5 27.9 226.5 21C226.5 14.1 221.9 8.5 215 8.5C208.1 8.5 203.5 14.1 203.5 21Z" fill="url(#nexoraText)"></path>
<path className="" d="M257 41V1H278.5C287.2 1 293 6.2 293 14C293 19.4 289.9 23.6 284.9 25.3L296.5 41H285.6L275.5 27H266.5V41H257ZM266.5 19H277.5C281.2 19 283.5 17.2 283.5 14C283.5 10.8 281.2 9 277.5 9H266.5V19Z" fill="url(#nexoraText)"></path>
<path className="" d="M328 41H318L335 1H345L362 41H352L340 11L328 41Z" fill="url(#nexoraText)"></path>
<path className="" d="M333.5 41L340 24L346.5 41H333.5Z" fill="#020617"></path>
</svg>
</a>
</div>
</div>

<div className="border-t border-white/10 pt-6">
<div className="flex flex-col lg:flex-row border-white/10 border-t pt-6 items-center justify-between">

<div className="flex items-center gap-3">
<p className="text-sm text-white/45">
                  ¬© 2026 Nexora. All rights reserved.
                </p>
</div>

<div className="flex items-center gap-5 text-sm text-white/45">
<a className="transition-colors hover:text-cyan-200" href="#">
                  Privacy
                </a>
<span className="h-1 w-1 rounded-full bg-white/25"></span>
<a className="transition-colors hover:text-cyan-200" href="#">
                  Terms
                </a>
</div>
</div>
</div>
</div>
</section>
</main>






    </>
  );
}
