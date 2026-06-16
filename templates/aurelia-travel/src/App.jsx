import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



    lucide.createIcons({
      attrs: {
        "stroke-width": 1.5
      }
    });

    document.addEventListener("DOMContentLoaded", function () {
      if (window.gsap) {
        gsap.registerPlugin(ScrollTrigger);

        /* SECTION 1 / HERO ANIMATION */
        gsap.to(".hero-word-inner", {
          y: 0,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.075,
          delay: 0.18
        });

        gsap.to(".hero-accent-reveal", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.72
        });

        gsap.to(".hero-copy-reveal", {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.86
        });

        gsap.to(".hero-cta-reveal", {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 1.02
        });

        gsap.to(".hero-trust-reveal", {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 1.16
        });

        /* SECTION 2 / OUR PROMISE ANIMATION */
gsap.to(".section-word-inner", {
  y: 0,
  duration: 1.15,
  ease: "power4.out",
  stagger: 0.075,
  scrollTrigger: {
    trigger: ".section-word-inner",
    start: "top 85%"
  }
});

gsap.to(".section-reveal", {
  opacity: 1,
  y: 0,
  duration: 0.85,
  ease: "power3.out",
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".section-reveal",
    start: "top 86%"
  }
});

/* SECTION 3 / CURATED DESTINATIONS ANIMATION */
gsap.to(".destination-word-inner", {
  y: 0,
  duration: 1.15,
  ease: "power4.out",
  stagger: 0.075,
  scrollTrigger: {
    trigger: ".destination-word-inner",
    start: "top 85%"
  }
});

gsap.to(".destination-reveal", {
  opacity: 1,
  y: 0,
  duration: 0.85,
  ease: "power3.out",
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".destination-reveal",
    start: "top 86%"
  }
});

/* SECTION 4 / HOW IT WORKS ANIMATION */
gsap.to(".how-word-inner", {
  y: 0,
  duration: 1.15,
  ease: "power4.out",
  stagger: 0.075,
  scrollTrigger: {
    trigger: ".how-word-inner",
    start: "top 85%"
  }
});

gsap.to(".how-reveal", {
  opacity: 1,
  y: 0,
  duration: 0.85,
  ease: "power3.out",
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".how-reveal",
    start: "top 86%"
  }
});

/* SECTION 5 / YOUR JOURNEY ANIMATION */
gsap.to(".journey-word-inner", {
  y: 0,
  duration: 1.15,
  ease: "power4.out",
  stagger: 0.075,
  scrollTrigger: {
    trigger: ".journey-word-inner",
    start: "top 85%"
  }
});

gsap.to(".journey-reveal", {
  opacity: 1,
  y: 0,
  duration: 0.85,
  ease: "power3.out",
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".journey-reveal",
    start: "top 86%"
  }
});

/* SECTION 6 / MEMBERSHIP ANIMATION */
gsap.to(".membership-word-inner", {
  y: 0,
  duration: 1.15,
  ease: "power4.out",
  stagger: 0.075,
  scrollTrigger: {
    trigger: ".membership-word-inner",
    start: "top 85%"
  }
});

gsap.to(".membership-reveal", {
  opacity: 1,
  y: 0,
  duration: 0.85,
  ease: "power3.out",
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".membership-reveal",
    start: "top 86%"
  }
});

// SECTION 7 / FINAL CTA ANIMATION
gsap.timeline({
  scrollTrigger: {
    trigger: ".cta-word",
    start: "top 82%",
    once: true
  }
})
.to(".cta-word-inner", {
  y: "0%",
  duration: 1.05,
  ease: "power4.out",
  stagger: 0.045
})
.to(".cta-reveal", {
  opacity: 1,
  y: 0,
  duration: 0.85,
  ease: "power3.out",
  stagger: 0.08
}, "-=0.65");

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
  }, []);

  return (
    <>
      
<main className="relative min-h-screen overflow-hidden bg-[#07162b]">



<section className="relative min-h-screen overflow-hidden bg-[#07162b]">

<div className="absolute inset-0">
<video aria-label="Golden hour Mediterranean coastline with sea cliffs and luxury terrace" className="hero-image h-full w-full object-cover" data-aura-generated-video="true" data-aura-video-preset="play-once" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b68afc6c-e0c1-4c42-9ad5-e249029cd375_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/66a84ecf-0972-40f3-8a4c-15b11d3aee0a/1780012144095-ab0599bc-ae79-4ab5-abe6-8cc021e4fbd4.mp4"></video>

<div className="absolute inset-0 bg-gradient-to-r from-[#fffaf2]/82 via-[#fffaf2]/42 to-transparent"></div>

<div className="absolute inset-0 bg-gradient-to-br from-[#f1d6aa]/22 via-transparent to-[#07162b]/25"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/38 via-transparent to-[#fffaf2]/4"></div>

<div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#07162b]/50 via-[#07162b]/20 to-transparent">
</div>

<div className="absolute inset-y-0 right-0 w-[48%] bg-gradient-to-l from-[#07162b]/34 via-[#07162b]/12 to-transparent">
</div>

<div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[30rem] w-[68%] bg-[radial-gradient(ellipse_at_28%_78%,rgba(247,239,230,0.92)_0%,rgba(247,239,230,0.72)_28%,rgba(247,239,230,0.34)_52%,transparent_76%)]"></div>
</div>

<header className="fixed left-0 right-0 top-0 z-50 border-b border-[#07162b]/10 bg-[#fffaf2]/74 backdrop-blur-xl">
<nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-8 lg:px-10">

<div className="hidden items-center gap-8 text-[0.82rem] font-semibold tracking-[0.01em] text-[#07162b] lg:flex">
<a className="nav-link transition hover:text-[#8a612d]" href="#">Destinations</a>
<a className="nav-link transition hover:text-[#8a612d]" href="#">Journeys</a>
<a className="nav-link transition hover:text-[#8a612d]" href="#">How It Works</a>
</div>

<a className="block justify-self-start lg:hidden" href="#">
<span className="font-serif-display block text-2xl font-medium uppercase tracking-[0.24em] text-[#07162b]">
              Aurelia
            </span>
</a>

<a className="hidden text-center lg:block" href="#">
<span className="font-serif-display block text-3xl font-medium uppercase leading-none tracking-[0.38em] text-[#07162b]">
              Aurelia
            </span>
<span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.34em] text-[#9d7337]">
              AI Travel
            </span>
</a>

<div className="hidden items-center justify-end gap-7 text-[0.82rem] font-semibold tracking-[0.01em] text-[#07162b] lg:flex">
<a className="nav-link transition hover:text-[#8a612d]" href="#">Membership</a>
<a className="nav-link transition hover:text-[#8a612d]" href="#">About</a>
<a className="transition hover:text-[#8a612d]" href="#">Log in</a>
<a className="inline-flex items-center justify-center rounded-xl bg-[#07162b] px-6 py-3.5 text-[0.82rem] font-semibold text-[#fffaf2] shadow-lg shadow-[#07162b]/15 transition hover:bg-[#10233d]" href="#">
              Plan My Trip
            </a>
</div>

<button aria-label="Open menu" className="col-start-3 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[#bd8a3c]/34 bg-[#fffaf2]/80 text-[#07162b] lg:hidden">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</nav>
</header>

<div className="hero-shell relative z-10 mx-auto grid min-h-screen max-w-[88rem] grid-cols-1 items-center gap-12 px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-12 lg:px-10 lg:pb-14 lg:pt-28">

<div className="max-w-3xl lg:col-span-7 lg:pb-10">

<div className="mb-8 flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#f7efe6] text-[#9d7337] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_18px_rgba(7,22,43,0.08)]">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</span>
<p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8a612d]">
              Private Travel Concierge
            </p>
</div>

<h1 className="hero-title font-serif-display max-w-3xl text-6xl font-medium leading-[1.02] tracking-tight text-[#07162b] sm:text-7xl lg:text-8xl">
<span className="hero-word"><span className="hero-word-inner">Travel, </span></span>
<span className="hero-word"><span className="hero-word-inner">designed</span></span>
<br/>
<span className="hero-word"><span className="hero-word-inner">around </span></span>
<span className="hero-word"><span className="hero-word-inner">your</span></span>
<br/>
<span className="hero-word"><span className="hero-word-inner">rhythm.</span></span>
</h1>
<div className="hero-accent-reveal mt-9 h-1 w-20 rounded-full bg-[#bd8a3c]"></div>
<p className="hero-copy-reveal mt-8 max-w-xl text-lg leading-8 text-[#1f2d41] sm:text-xl">
            Discover hidden stays, seamless itineraries, and private recommendations — shaped by intelligent planning
            and refined by real travel experts.
          </p>

<div className="hero-cta-reveal mt-10 flex flex-col gap-4 sm:flex-row">
<a className="premium-button group inline-flex h-[58px] items-center justify-center gap-4 rounded-[12px] bg-[#07162b] px-8 text-base font-bold text-[#fffaf2] transition hover:-translate-y-0.5 hover:bg-[#10233d]" href="#">
              Start Planning
              <i className="h-5 w-5 text-[#bd8a3c] transition group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="premium-button-light group inline-flex h-[58px] items-center justify-center gap-4 rounded-[12px] border border-[#d8c5a3] bg-[#eee5da] px-8 text-base font-bold text-[#7d5627] transition hover:-translate-y-0.5 hover:border-[#bd8a3c] hover:bg-[#f6eddf]" href="#">
              See Sample Itinerary
              <i className="h-5 w-5 text-[#bd8a3c] transition group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="hero-trust-reveal mt-12 grid max-w-[48rem] grid-cols-3 items-center gap-5">
<div className="flex min-w-0 items-center gap-3">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#bd8a3c] shadow-[0_10px_24px_rgba(7,22,43,0.12),inset_0_1px_0_rgba(255,255,255,0.72)]">
<i className="h-5 w-5" data-lucide="key-round"></i>
</span>
<div className="min-w-0">
<p className="truncate whitespace-nowrap text-[0.86rem] font-bold text-[#07162b]">
                  Private Stays
                </p>
<p className="mt-0.5 truncate whitespace-nowrap text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#8a612d]">
                  Handpicked
                </p>
</div>
</div>
<div className="flex min-w-0 items-center gap-3">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#bd8a3c] shadow-[0_10px_24px_rgba(7,22,43,0.12),inset_0_1px_0_rgba(255,255,255,0.72)]">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</span>
<div className="min-w-0">
<p className="truncate whitespace-nowrap text-[0.86rem] font-bold text-[#07162b]">
                  Smart Itineraries
                </p>
<p className="mt-0.5 truncate whitespace-nowrap text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#8a612d]">
                  AI-assisted
                </p>
</div>
</div>
<div className="flex min-w-0 items-center gap-3">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#bd8a3c] shadow-[0_10px_24px_rgba(7,22,43,0.12),inset_0_1px_0_rgba(255,255,255,0.72)]">
<i className="h-5 w-5" data-lucide="headphones"></i>
</span>
<div className="min-w-0">
<p className="truncate whitespace-nowrap text-[0.86rem] font-bold text-[#07162b]">
                  Concierge Support
                </p>
<p className="mt-0.5 truncate whitespace-nowrap text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#8a612d]">
                  Human refined
                </p>
</div>
</div>
</div>
</div>

<div className="relative lg:col-span-5">
<div className="relative mx-auto flex w-full max-w-[38.75rem] flex-col gap-5 lg:translate-x-4">

<div className="premium-panel w-full overflow-hidden rounded-[1.35rem]">
<div className="p-5 pb-3 sm:p-6 sm:pb-3">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-4">
<img alt="Amalfi Coast" className="h-16 w-16 rounded-full object-cover ring-1 ring-[#bd8a3c]/35 shadow-[0_10px_22px_rgba(7,22,43,0.12)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df941c56-7c71-432a-841f-0103fd695dbb_320w.png"/>
<div>
<h2 className="font-serif-display text-2xl font-medium tracking-tight text-[#07162b]">
                        7-Day Amalfi Escape
                      </h2>
<p className="mt-1 flex items-center gap-2 text-sm font-medium text-[#526071]">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="map-pin"></i>
                        Amalfi Coast, Italy
                      </p>
</div>
</div>
<button aria-label="More itinerary options" className="mt-1 text-[#07162b]">
<i className="h-5 w-5" data-lucide="ellipsis"></i>
</button>
</div>
<div className="mt-6 space-y-0">
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 1</span>
<span className="font-bold text-[#2b3748]">Positano Arrival</span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="bed-double"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 2</span>
<span className="font-bold text-[#2b3748]">Amalfi &amp; Atrani</span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="sailboat"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 3</span>
<span className="font-bold text-[#2b3748]">Ravello Villa Lunch</span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="landmark"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 4</span>
<span className="font-bold text-[#2b3748]">Capri by Private Boat</span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="ship"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center border-b border-[#d1c4b7] py-2.5 text-sm">
<div className="relative flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
<span className="absolute top-2 h-[2.05rem] w-px bg-[#bd8a3c]/45"></span>
</div>
<span className="font-medium text-[#526071]">Day 5</span>
<span className="font-bold text-[#2b3748]">Praiano Leisure Day</span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="umbrella"></i>
</div>
<div className="grid grid-cols-[1.8rem_4rem_1fr_1.5rem] items-center py-2.5 text-sm">
<div className="flex justify-center">
<span className="h-2 w-2 rounded-full bg-[#bd8a3c]"></span>
</div>
<span className="font-medium text-[#526071]">Day 6</span>
<span className="font-bold text-[#2b3748]">Lemon Grove Dinner</span>
<i className="h-4 w-4 text-[#8a612d]" data-lucide="leaf"></i>
</div>
</div>
</div>
<a className="flex items-center justify-between border-t border-[#d1c4b7] bg-[#f7efe6] px-5 py-4 text-sm font-bold text-[#253449] shadow-[inset_0_1px_0_rgba(255,255,255,0.58)] transition hover:bg-[#fbf4ec] sm:px-6" href="#">
                View full itinerary
                <i className="h-5 w-5 text-[#bd8a3c]" data-lucide="arrow-right"></i>
</a>
</div>

<div className="w-full rounded-[1.35rem] bg-[#07162b] p-5 text-[#fffaf2] shadow-[0_30px_82px_rgba(7,22,43,0.34),inset_0_1px_0_rgba(255,255,255,0.08)]">
<div className="flex items-center justify-between">
<p className="text-xs font-bold uppercase tracking-[0.20em] text-[#d6ad68]">
                  Your Preferences
                </p>
<button className="text-xs font-bold text-[#d6ad68]">Edit</button>
</div>
<div className="mt-4 grid grid-cols-3 gap-2.5">
<span className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[10px] bg-[#10233d] px-3 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
<i className="h-4 w-4 shrink-0 text-[#d6ad68]" data-lucide="gem"></i>
<span className="truncate whitespace-nowrap">Quiet luxury</span>
</span>
<span className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[10px] bg-[#10233d] px-3 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
<i className="h-4 w-4 shrink-0 text-[#d6ad68]" data-lucide="waves"></i>
<span className="truncate whitespace-nowrap">Coastal</span>
</span>
<span className="inline-flex min-w-0 items-center justify-center gap-2 rounded-[10px] bg-[#10233d] px-3 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
<i className="h-4 w-4 shrink-0 text-[#d6ad68]" data-lucide="car"></i>
<span className="truncate whitespace-nowrap">Private transfer</span>
</span>
</div>
</div>

<div className="premium-panel w-full overflow-hidden rounded-[1.35rem] p-0">
<div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr]">

<div className="relative min-h-[10rem] overflow-hidden sm:min-h-full">
<img alt="Journey visual placeholder" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/012c0562-9f4b-4672-aed3-d6b794a79360_320w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/28 via-transparent to-[#fffaf2]/8"></div>

<span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#07162b] ring-4 ring-[#fffaf2]"></span>
</div>

<div className="min-w-0 p-5 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<h3 className="font-serif-display text-2xl font-medium leading-none tracking-tight text-[#07162b]">
                        Your Journey
                      </h3>
<p className="mt-2 whitespace-nowrap text-sm font-medium text-[#526071]">
                        May 24 – May 30, 2025 · 2 Adults
                      </p>
</div>
<a className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-bold text-[#9d7337]" href="#">
                      View Details
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-7 flex items-center gap-3">
<i className="h-5 w-5 shrink-0 text-[#bd8a3c]" data-lucide="plane"></i>
<div className="relative flex h-6 flex-1 items-center">
<div className="absolute left-[5px] right-[5px] top-1/2 h-[2px] -translate-y-1/2 bg-[#bd8a3c]/70">
</div>
<div className="relative z-10 flex w-full items-center justify-between">
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#eee5da]"></span>
</div>
</div>
<i className="h-5 w-5 shrink-0 text-[#8a612d]" data-lucide="car"></i>
</div>
<div className="mt-4 grid grid-cols-4 gap-3 text-center text-xs text-[#526071]">
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">Positano</span>
<span className="block whitespace-nowrap">2 Nights</span>
</div>
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">Ravello</span>
<span className="block whitespace-nowrap">2 Nights</span>
</div>
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">Capri</span>
<span className="block whitespace-nowrap">1 Night</span>
</div>
<div className="min-w-0">
<span className="block truncate font-bold text-[#07162b]">Praiano</span>
<span className="block whitespace-nowrap">2 Nights</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>



<section className="relative z-20 bg-[#f7efe6] px-5 pb-24 pt-24 sm:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(189,138,60,0.055),transparent_30rem),radial-gradient(circle_at_88%_24%,rgba(7,22,43,0.025),transparent_28rem)]"></div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18rem] bg-gradient-to-t from-[#fffaf2] via-[#fffaf2]/72 to-transparent"></div>

<div className="pointer-events-none absolute bottom-[-4rem] right-0 h-[24rem] w-[55%] bg-[radial-gradient(ellipse_at_70%_65%,rgba(255,250,242,0.82)_0%,rgba(255,250,242,0.46)_38%,transparent_72%)]"></div>
<div className="relative mx-auto max-w-[88rem]">
<div className="relative mx-auto max-w-[88rem]">

<div className="overflow-hidden rounded-[1.25rem] border border-[#d8c5a3] bg-[#fffaf2] shadow-[0_48px_130px_rgba(7,22,43,0.18),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="grid min-h-[48rem] grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">

<div className="relative flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-16 xl:px-20">

<div className="section-reveal mb-8">
<p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9d7337]">
                  Our Promise
                </p>
<div className="mt-5 h-px w-36 bg-[#bd8a3c]/70"></div>
</div>

<h2 className="font-serif-display max-w-3xl text-5xl font-medium leading-[1.02] tracking-tight text-[#07162b] sm:text-6xl lg:text-7xl">
<span className="section-word"><span className="section-word-inner">Journeys </span></span>
<span className="section-word"><span className="section-word-inner">begin </span></span>
<span className="section-word"><span className="section-word-inner">with</span></span>
<br/>
<span className="section-word"><span className="section-word-inner">understanding </span></span>
<span className="section-word"><span className="section-word-inner">you.</span></span>
</h2>
<p className="section-reveal mt-8 max-w-2xl text-base leading-8 text-[#324055] sm:text-lg">
                Aurelia learns how you like to move through the world — your pace, preferences, rituals, and sense of
                wonder — then shapes every recommendation into a journey that feels personal, effortless, and deeply
                considered.
              </p>

<div className="section-reveal mt-11 space-y-8">
<div className="grid grid-cols-[4rem_1fr] gap-5">
<div className="flex justify-center">
<span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8a3c]/65 bg-[#fffaf2] text-[#bd8a3c] shadow-[0_12px_26px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.75)]">
<i className="h-6 w-6" data-lucide="user-round"></i>
</span>
</div>
<div className="border-l border-[#bd8a3c]/42 pl-5">
<h3 className="text-sm font-bold text-[#07162b]">
                      You, at the center
                    </h3>
<p className="mt-1 max-w-md text-sm leading-6 text-[#526071]">
                      Every itinerary begins with your travel style, energy, interests, and ideal pace.
                    </p>
</div>
</div>
<div className="grid grid-cols-[4rem_1fr] gap-5">
<div className="flex justify-center">
<span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8a3c]/65 bg-[#fffaf2] text-[#bd8a3c] shadow-[0_12px_26px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.75)]">
<i className="h-6 w-6" data-lucide="sparkles"></i>
</span>
</div>
<div className="border-l border-[#bd8a3c]/42 pl-5">
<h3 className="text-sm font-bold text-[#07162b]">
                      Intelligence, refined by taste
                    </h3>
<p className="mt-1 max-w-md text-sm leading-6 text-[#526071]">
                      AI creates the first layer of discovery, then human expertise adds judgment, nuance, and care.
                    </p>
</div>
</div>
<div className="grid grid-cols-[4rem_1fr] gap-5">
<div className="flex justify-center">
<span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8a3c]/65 bg-[#fffaf2] text-[#bd8a3c] shadow-[0_12px_26px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.75)]">
<i className="h-6 w-6" data-lucide="heart"></i>
</span>
</div>
<div className="border-l border-[#bd8a3c]/42 pl-5">
<h3 className="text-sm font-bold text-[#07162b]">
                      Beyond the obvious
                    </h3>
<p className="mt-1 max-w-md text-sm leading-6 text-[#526071]">
                      Hidden stays, local rituals, and meaningful moments that connect you to the soul of a place.
                    </p>
</div>
</div>
</div>

<div className="section-reveal mt-12 max-w-xl border-t border-[#bd8a3c]/45 pt-7">
<p className="font-serif-display text-3xl italic leading-none text-[#bd8a3c] sm:text-4xl">
                  “ Less searching. More belonging. ”
                </p>
</div>
</div>

<div className="relative min-h-[42rem] overflow-hidden lg:min-h-full">
<img alt="Luxury breakfast terrace overlooking the Amalfi Coast" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df941c56-7c71-432a-841f-0103fd695dbb_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-l from-[#07162b]/10 via-transparent to-[#fffaf2]/16"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/24 via-transparent to-[#f1d6aa]/12"></div>

<div className="absolute left-1/2 top-10 w-[calc(100%-3rem)] max-w-[22rem] -translate-x-1/2 rounded-[1.15rem] border border-[#d8c5a3] bg-[#eee5da] p-5 shadow-[0_30px_82px_rgba(7,22,43,0.24),inset_0_1px_0_rgba(255,255,255,0.68)] sm:p-6 lg:left-auto lg:right-8 lg:top-10 lg:w-[22rem] lg:translate-x-0">
<div className="flex items-center justify-between">
<h3 className="font-serif-display text-xl font-medium text-[#07162b]">
                    Your Preferences
                  </h3>
<button className="text-xs font-bold text-[#9d7337]">
                Edit
              </button>
</div>
<div className="mt-5 space-y-4">
<div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-b border-[#d1c4b7] pb-3">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="shuffle"></i>
<span className="text-xs font-semibold text-[#526071]">Travel Style</span>
<span className="text-xs font-bold text-[#07162b]">Slow &amp; Immersive</span>
</div>
<div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-b border-[#d1c4b7] pb-3">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="heart"></i>
<span className="text-xs font-semibold text-[#526071]">Interests</span>
<span className="text-xs font-bold text-[#07162b]">Food, Art, Architecture</span>
</div>
<div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-b border-[#d1c4b7] pb-3">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="gauge"></i>
<span className="text-xs font-semibold text-[#526071]">Pace</span>
<span className="text-xs font-bold text-[#07162b]">Relaxed</span>
</div>
<div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-b border-[#d1c4b7] pb-3">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="users-round"></i>
<span className="text-xs font-semibold text-[#526071]">Companions</span>
<span className="text-xs font-bold text-[#07162b]">Partner</span>
</div>
<div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="sparkles"></i>
<span className="text-xs font-semibold text-[#526071]">Signature Moments</span>
<span className="text-xs font-bold text-[#07162b]">Sunsets, Local Cuisine</span>
</div>
</div>
<div className="mt-5 -mx-5 -mb-5 rounded-b-[1.15rem] border-t border-[#d1c4b7] bg-[#f7efe6] px-5 py-4 sm:-mx-6 sm:-mb-6 sm:px-6">
<p className="flex items-center gap-2 text-xs font-bold text-[#9d7337]">
<i className="h-4 w-4" data-lucide="sparkle"></i>
                    Aurelia is crafting your perfect journey
                  </p>
</div>
</div>

<div className="absolute bottom-8 left-1/2 w-[78%] max-w-[22rem] -translate-x-1/2 rotate-[-3deg] sm:bottom-10 sm:w-[22rem] lg:bottom-12 lg:left-auto lg:right-8 lg:w-[20.5rem] lg:translate-x-0">
<img alt="Aurelia passport memory" className="h-auto w-full object-contain drop-shadow-[0_28px_70px_rgba(7,22,43,0.24)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f4798ae-e81c-4799-b9f4-ad93ba22ef9a_1600w.png"/>
</div>
</div>
</div>
</div>

<div className="mx-auto h-10 max-w-5xl rounded-full bg-[#07162b]/10 blur-2xl"></div>
</div>
</div></section>



<section className="relative z-10 bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(189,138,60,0.08),transparent_32rem),radial-gradient(circle_at_86%_18%,rgba(7,22,43,0.045),transparent_30rem)]">
</div>
<div className="relative mx-auto max-w-[88rem]">

<div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">

<div className="lg:pt-8">
<div className="destination-reveal mb-7">
<p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9d7337]">
                Curated Destinations
              </p>
<div className="mt-5 h-[3px] w-16 rounded-full bg-[#bd8a3c]"></div>
</div>

<h2 className="font-serif-display max-w-2xl text-5xl font-medium leading-[1.02] tracking-tight text-[#07162b] sm:text-6xl lg:text-7xl">
<span className="destination-word"><span className="destination-word-inner">Private </span></span>
<span className="destination-word"><span className="destination-word-inner">places.</span></span>
<br/>
<span className="destination-word"><span className="destination-word-inner">Perfectly </span></span>
<span className="destination-word"><span className="destination-word-inner">matched.</span></span>
</h2>
<p className="destination-reveal mt-8 max-w-xl text-base leading-8 text-[#324055] sm:text-lg">
              Discover handpicked destinations matched to your mood, season, and travel style — each one vetted for
              beauty, privacy, and remarkable experiences.
            </p>

<div className="destination-reveal relative mt-10 max-w-xl">

<div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-7 bg-gradient-to-r from-[#fffaf2] to-transparent">
</div>

<div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-[#fffaf2] to-transparent">
</div>
<div className="overflow-x-auto pb-2 pl-0 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
<div className="flex w-max items-center gap-2.5">
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] bg-[#07162b] px-4 py-2.5 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
<i className="h-4 w-4 text-[#d6ad68]" data-lucide="compass"></i>
  All Destinations
</button>
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-[#d8c5a3] bg-[#fffaf2] px-4 py-2.5 text-xs font-bold text-[#8a612d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="waves"></i>
                Coastal
              </button>
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-[#d8c5a3] bg-[#fffaf2] px-4 py-2.5 text-xs font-bold text-[#8a612d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="flame-kindling"></i>
                Wellness
              </button>
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-[#d8c5a3] bg-[#fffaf2] px-4 py-2.5 text-xs font-bold text-[#8a612d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="hotel"></i>
                Design Hotels
              </button>
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-[#d8c5a3] bg-[#fffaf2] px-4 py-2.5 text-xs font-bold text-[#8a612d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="utensils"></i>
                Culinary
              </button>
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-[#d8c5a3] bg-[#fffaf2] px-4 py-2.5 text-xs font-bold text-[#8a612d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="car"></i>
                Slow Travel
              </button>
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-[#d8c5a3] bg-[#fffaf2] px-4 py-2.5 text-xs font-bold text-[#8a612d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                Hidden Gems
              </button>
<button className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-[#d8c5a3] bg-[#fffaf2] px-4 py-2.5 text-xs font-bold text-[#8a612d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="wine"></i>
                Romantic
              </button>
</div>
</div>
</div>
</div>

<div className="destination-reveal grid grid-cols-1 gap-5 md:grid-cols-[1.55fr_0.95fr] lg:self-end">

<article className="group relative h-[24rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_30px_80px_rgba(7,22,43,0.18)]">
<img alt="Amalfi Coast" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0da3c0a-192a-4c59-8d1d-61414367ed5d_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/34 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#f1d6aa]/18 via-transparent to-transparent"></div>
<div className="absolute left-6 top-6">
<span className="rounded-md bg-[#bd8a3c] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#fffaf2] shadow-[0_12px_30px_rgba(7,22,43,0.2)]">
              Featured
            </span>
</div>

<button aria-label="Save Amalfi Coast" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#ef4b4b] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5 fill-current" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                  Amalfi Coast
                </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-[#d6ad68]" data-lucide="waves"></i>
      Coastal luxury
    </span>
<span className="whitespace-nowrap text-[#fffaf2]/90">
      Cliffs <span className="mx-1.5 text-[#fffaf2]/55">•</span> Villages <span className="mx-1.5 text-[#fffaf2]/55">•</span>
                  Private boats
                  </span>
</div>
</div>
</article>

<article className="group relative h-[24rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_30px_80px_rgba(7,22,43,0.16)]">
<img alt="Kyoto" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9019d6c5-f4ff-4724-a555-4011885eb5aa_800w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/36 to-transparent"></div>
<button aria-label="Save Kyoto" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#fffaf2] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                  Kyoto
                </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-[#d6ad68]" data-lucide="landmark"></i>
      Cultural immersion
    </span>
<span className="whitespace-nowrap text-[#fffaf2]/90">
      Temples <span className="mx-1.5 text-[#fffaf2]/55">•</span> Ryokans <span className="mx-1.5 text-[#fffaf2]/55">•</span>
                  Gardens
                  </span>
</div>
</div>
</article>
</div>
</div>

<div className="destination-reveal mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">

<article className="group relative h-[19rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_26px_70px_rgba(7,22,43,0.16)]">
<img alt="Marrakech" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cbcb68f-c73d-4f4c-b0bc-258fe87a09f4_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/34 to-transparent"></div>
<button aria-label="Save Marrakech" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#fffaf2] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                Marrakech
              </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-[#d6ad68]" data-lucide="palette"></i>
      Design &amp; culture
    </span>
<span className="whitespace-nowrap text-[#fffaf2]/90">
      Riads <span className="mx-1.5 text-[#fffaf2]/55">•</span> Souks <span className="mx-1.5 text-[#fffaf2]/55">•</span> Modern
                heritage
                </span>
</div>
</div>
</article>

<article className="group relative h-[19rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_26px_70px_rgba(7,22,43,0.16)]">
<img alt="Swiss Alps" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74ac8992-7bfd-43b7-815c-451a028f1ae2_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/34 to-transparent"></div>
<button aria-label="Save Swiss Alps" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#fffaf2] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                Swiss Alps
              </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-[#d6ad68]" data-lucide="flame-kindling"></i>
      Wellness &amp; nature
    </span>
<span className="whitespace-nowrap text-[#fffaf2]/90">
      Chalets <span className="mx-1.5 text-[#fffaf2]/55">•</span> Spa retreats <span className="mx-1.5 text-[#fffaf2]/55">•</span>
                Hiking
                </span>
</div>
</div>
</article>

<article className="group relative h-[19rem] overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] shadow-[0_26px_70px_rgba(7,22,43,0.16)]">
<img alt="St. Barth" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a7c6073-fa3d-4dd2-a0af-6273aa023a14_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020713]/92 via-[#07162b]/30 to-transparent"></div>
<button aria-label="Save St. Barth" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#fffaf2]/40 bg-[#07162b]/28 text-[#fffaf2] backdrop-blur-md transition hover:bg-[#07162b]/46">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="font-serif-display text-4xl font-medium leading-[0.92] tracking-tight text-[#fffaf2]">
                St. Barth
              </h3>
<div className="mt-3 flex flex-col gap-1.5 text-[0.82rem] font-semibold leading-tight text-[#fffaf2] sm:text-sm">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-[#d6ad68]" data-lucide="home"></i>
      Private villas
    </span>
<span className="whitespace-nowrap text-[#fffaf2]/90">
      Beaches <span className="mx-1.5 text-[#fffaf2]/55">•</span> Yachts <span className="mx-1.5 text-[#fffaf2]/55">•</span> Fine
                dining
                </span>
</div>
</div>
</article>
</div>
</div>
</section>



<section className="relative z-10 bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(189,138,60,0.075),transparent_34rem),radial-gradient(circle_at_84%_28%,rgba(7,22,43,0.04),transparent_32rem)]">
</div>
<div className="relative mx-auto max-w-[88rem]">

<div className="mx-auto max-w-5xl text-center">
<div className="how-reveal mx-auto mb-5 h-[3px] w-16 rounded-full bg-[#bd8a3c]"></div>
<p className="how-reveal text-xs font-bold uppercase tracking-[0.34em] text-[#9d7337]">
            How It Works
          </p>

<h2 className="mt-5 font-serif-display text-5xl font-medium leading-[1.02] tracking-tight text-[#07162b] sm:text-6xl lg:text-7xl">
<span className="how-word"><span className="how-word-inner">From preferences to a</span></span>
<br/>
<span className="how-word"><span className="how-word-inner">perfectly paced itinerary.</span></span>
</h2>
<p className="how-reveal mx-auto mt-6 max-w-2xl text-base leading-7 text-[#526071] sm:text-lg">
            Our AI concierge blends your travel style with real local knowledge to craft journeys that feel effortless
            and unforgettable.
          </p>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
            01
          </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="user-round"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
            Profile
          </span>
<div className="hidden h-px flex-1 bg-[#bd8a3c]/45 lg:block"></div>
<i className="hidden h-6 w-6 shrink-0 text-[#bd8a3c] lg:block" data-lucide="arrow-right"></i>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                Share Your Preferences
              </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                Tell us what you love — your travel style, interests, pace, and must-haves.
              </p>
</div>

<div className="mt-8 rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] p-5 shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                Your Preferences
              </h4>
<div className="mt-5 space-y-4">
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">Travel Style</label>
<div className="mt-2 flex items-center justify-between rounded-md border border-[#d8c5a3]/70 bg-[#fffaf2] px-3 py-2 text-xs font-semibold text-[#07162b]">
                    Culture &amp; Relaxation
                    <i className="h-3.5 w-3.5 text-[#9d7337]" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">Interests</label>
<div className="mt-2 flex flex-wrap gap-2">
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">Art &amp; Design</span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">Local Cuisine</span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">Wellness</span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">History</span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">Nature</span>
<span className="rounded-md bg-[#eee5da] px-3 py-1.5 text-[0.7rem] font-bold text-[#526071]">Architecture</span>
</div>
</div>
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">Pace</label>
<div className="mt-3">
<div className="relative h-px bg-[#d8c5a3]">
<div className="absolute left-0 top-1/2 h-px w-[54%] -translate-y-1/2 bg-[#bd8a3c]"></div>
<span className="absolute left-[54%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bd8a3c] shadow-[0_0_0_4px_#fffaf2]"></span>
</div>
<div className="mt-2 flex justify-between text-[0.65rem] font-semibold text-[#526071]">
<span>Relaxed</span>
<span>Active</span>
</div>
</div>
</div>
<div>
<label className="text-[0.68rem] font-bold text-[#526071]">Must-haves</label>
<div className="mt-2 min-h-[4.75rem] rounded-md border border-[#d8c5a3]/70 bg-[#fffaf2] p-3 text-xs leading-5 text-[#526071]">
                    Sea view, boutique hotels, authentic local experiences
                  </div>
</div>
<button className="mt-2 w-full rounded-md bg-[#07162b] px-4 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
              Save Preferences
            </button>
</div>
</div>
</article>

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
            02
          </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="sparkles"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
            Match
          </span>
<div className="hidden h-px flex-1 bg-[#bd8a3c]/45 lg:block"></div>
<i className="hidden h-6 w-6 shrink-0 text-[#bd8a3c] lg:block" data-lucide="arrow-right"></i>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                Explore Smart Matches
              </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                We curate destinations and experiences that align with your unique taste.
              </p>
</div>

<div className="mt-8 rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] p-5 shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="flex items-center justify-between">
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                  Smart Matches for You
                </h4>
<button className="inline-flex items-center gap-1 text-[0.65rem] font-bold text-[#526071]">
              Why these?
              <i className="h-3.5 w-3.5" data-lucide="info"></i>
</button>
</div>
<div className="mt-5 space-y-3">
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Amalfi Coast" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36307d9e-9da6-4d74-b1fa-3b70af0f5188_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">Amalfi Coast, Italy</h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">Seaside elegance, culture &amp;
                      cuisine</p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">98% Match</p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Kyoto" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fdf3678-12d8-4f40-b14d-e3b66a9bd67e_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">Kyoto, Japan</h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">Timeless culture, serene
                      moments</p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">95% Match</p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Cote d'Azur" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f7782df-1dad-4435-8807-8ff8cf835b9f_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">Côte d’Azur, France</h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">Art, luxury &amp; Riviera charm
                    </p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">93% Match</p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
<div className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2.5">
<img alt="Lake Como" className="h-16 w-full rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bacbf091-ee10-40e7-9a2e-51f858f213b5_320w.png"/>
<div className="min-w-0">
<h5 className="truncate text-sm font-bold text-[#07162b]">Lake Como, Italy</h5>
<p className="mt-1 truncate text-[0.68rem] font-semibold text-[#526071]">Villas, lake views &amp; slow
                      mornings</p>
<p className="mt-1 text-[0.68rem] font-bold text-[#9d7337]">91% Match</p>
</div>
<i className="h-4 w-4 text-[#9d7337]" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</article>

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
            03
          </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="map"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
            Refine
          </span>
<div className="hidden h-px flex-1 bg-[#bd8a3c]/45 lg:block"></div>
<i className="hidden h-6 w-6 shrink-0 text-[#bd8a3c] lg:block" data-lucide="arrow-right"></i>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                Refine Your Journey
              </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                Customize your itinerary with an intuitive builder — drag, drop, and perfect the details.
              </p>
</div>

<div className="mt-8 rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] p-5 shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="flex items-center justify-between">
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                  Your Itinerary
                </h4>
<div className="flex gap-2">
<button className="rounded-md bg-[#eee5da] px-2.5 py-1.5 text-[0.62rem] font-bold text-[#526071]">
                Add Day
              </button>
<button className="rounded-md bg-[#eee5da] px-2.5 py-1.5 text-[0.62rem] font-bold text-[#526071]">
                Optimize Route
              </button>
</div>
</div>
<div className="mt-5 space-y-3">
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">Day 1</span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Arrival" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ef8445-0771-4ce8-a3d1-8c6683ea178b_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">Arrival in Positano</p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">Private transfer · Seaside stay
                      </p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">Day 2</span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Amalfi" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d7a0ef5-935d-4241-973e-3cef35682ea7_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">Amalfi &amp; Atrani</p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">Guided walking tour · Lunch by the
                        sea</p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">Day 3</span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Ravello" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2aaf56f5-8d16-4a71-84a2-ebe02d37db23_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">Ravello &amp; Villa Cimbrone</p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">Gardens · Sunset aperitivo</p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">Day 4</span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Capri" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a707d53e-3283-424d-be2e-d2885f3be2c0_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">Capri by Private Boat</p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">Blue Grotto · Leisure time</p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span className="text-[0.7rem] font-bold text-[#526071]">Day 5</span>
<div className="grid min-w-0 grid-cols-[3.5rem_1fr] items-center gap-3 rounded-lg border border-[#d8c5a3]/70 bg-[#fffaf2] p-2">
<img alt="Praiano" className="h-11 w-14 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1282f76-7939-4f18-a9dc-ac4d2cd92920_320w.png"/>
<div className="min-w-0">
<p className="truncate text-xs font-bold text-[#07162b]">Praiano Leisure Day</p>
<p className="truncate text-[0.65rem] font-semibold text-[#526071]">Wellness · Beach · Local market
                      </p>
</div>
</div>
<i className="h-4 w-4 justify-self-center text-[#9d7337]" data-lucide="grip-vertical"></i>
</div>
<div className="grid grid-cols-[2.7rem_1fr_1rem] items-center gap-3">
<span></span>
<div className="relative mt-1 rounded-lg border border-dashed border-[#d8c5a3] bg-[#fffaf2]/72 p-3 text-center text-xs font-bold text-[#8a612d]">
                    + Drag experience here
                  </div>
<span></span>
</div>
</div>

<div className="pointer-events-none absolute hidden translate-x-[13rem] translate-y-[-4.4rem] rounded-xl border border-[#d8c5a3] bg-[#fffaf2] p-3 shadow-[0_20px_50px_rgba(7,22,43,0.16)] xl:block">
<div className="flex items-center gap-3">
<img alt="Lemon Grove Visit" className="h-12 w-16 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31a37767-71b7-4507-bb70-0dd03acfcba3_320w.png"/>
<div>
<p className="text-xs font-bold text-[#07162b]">Lemon Grove Visit</p>
<p className="text-[0.65rem] font-semibold text-[#526071]">Local farm experience</p>
</div>
</div>
</div>
</div>
</article>

<article className="how-reveal relative">
<div className="mb-7 flex items-center gap-4">
<span className="font-serif-display text-2xl font-semibold text-[#9d7337]">
            04
          </span>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#07162b] shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
<i className="h-6 w-6" data-lucide="briefcase-business"></i>
</span>
<span className="hidden shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9d7337] lg:inline-flex">
            Book
          </span>
</div>
<div className="px-0 sm:px-1">
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
                Book with Confidence
              </h3>
<p className="mt-4 max-w-xs text-sm leading-6 text-[#526071]">
                We handle the details — secure bookings, 24/7 support, and peace of mind.
              </p>
</div>

<div className="mt-8 overflow-hidden rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="flex items-center justify-between bg-[#eef1e8] px-5 py-4">
<div>
<h4 className="font-serif-display text-lg font-medium text-[#07162b]">
                    Your Journey is Confirmed
                  </h4>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                    We can’t wait to welcome you.
                  </p>
</div>
<span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fffaf2] text-[#4b7d54] shadow-[0_12px_28px_rgba(7,22,43,0.10)]">
<i className="h-6 w-6" data-lucide="check"></i>
</span>
</div>
<div className="p-5">
<div>
<h5 className="font-serif-display text-xl font-medium text-[#07162b]">
                    Amalfi Escape
                  </h5>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                    May 24 – May 30, 2025 · 2 Adults
                  </p>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="clipboard-list"></i>
                  Itinerary
                </span>
<span className="text-[#07162b]">5 Days</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="bed-double"></i>
                  Accommodation
                </span>
<span className="text-[#07162b]">Hotel Poseidon</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="car"></i>
                  Transfers
                </span>
<span className="text-[#07162b]">Private</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="sparkles"></i>
                  Experiences
                </span>
<span className="text-[#07162b]">7 Included</span>
</div>
<div className="flex items-center justify-between text-xs font-semibold">
<span className="inline-flex items-center gap-2 text-[#526071]">
<i className="h-4 w-4 text-[#9d7337]" data-lucide="headphones"></i>
                  Support
                </span>
<span className="text-[#07162b]">24/7 Concierge</span>
</div>
</div>
<button className="mt-7 flex w-full items-center justify-center gap-3 rounded-md bg-[#07162b] px-4 py-3 text-xs font-bold text-[#fffaf2] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
              View Trip Dashboard
              <i className="h-4 w-4 text-[#bd8a3c]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</article>
</div>

<div className="how-reveal mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 rounded-[1.1rem] border border-[#d8c5a3] bg-[#fffaf2] px-6 py-5 shadow-[0_22px_70px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.78)] md:grid-cols-2">
<div className="flex items-center gap-4">
<span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7efe6] text-[#9d7337]">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</span>
<div>
<h4 className="text-sm font-bold text-[#07162b]">Your privacy, always.</h4>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                Your data is secure and never shared.
              </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Concierge expert" className="h-10 w-10 rounded-full border-2 border-[#fffaf2] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5cbf539-f61a-4c9d-aff7-ea01dc1ddcb9_3840w.webp?w=800&amp;q=80"/>
<img alt="Concierge expert" className="h-10 w-10 rounded-full border-2 border-[#fffaf2] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34c1d155-2bc2-483e-ba5a-7f83641c46d5_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<h4 className="text-sm font-bold text-[#07162b]">Real people. Real expertise.</h4>
<p className="mt-1 text-xs font-semibold text-[#526071]">
                Our travel concierges know the places — and care.
              </p>
</div>
</div>
</div>
</div>
</section>



<section className="relative z-10 bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-10">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(189,138,60,0.075),transparent_34rem),radial-gradient(circle_at_84%_20%,rgba(7,22,43,0.045),transparent_34rem)]">
</div>
<div className="relative mx-auto max-w-[88rem]">
<div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">

<div>
<div className="journey-reveal mb-7">
<p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9d7337]">
                05 / Your Journey
              </p>
<div className="mt-5 h-[3px] w-16 rounded-full bg-[#bd8a3c]"></div>
</div>

<h2 className="font-serif-display max-w-2xl text-5xl font-medium leading-[1.02] tracking-tight text-[#07162b] sm:text-6xl lg:text-7xl">
<span className="journey-word"><span className="journey-word-inner">See a journey</span></span>
<br/>
<span className="journey-word"><span className="journey-word-inner">take shape.</span></span>
</h2>
<p className="journey-reveal mt-8 max-w-xl text-base leading-8 text-[#324055] sm:text-lg">
              From hidden gems to once-in-a-lifetime moments, we design every detail so your trip feels beautifully
              paced, personal, and effortless.
            </p>

<div className="journey-reveal mt-10 space-y-7">
<div className="grid grid-cols-[3.75rem_1fr] gap-4">
<div className="flex justify-center">
<span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8a3c]/70 bg-[#fffaf2] text-[#bd8a3c] shadow-[0_12px_30px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.75)]">
<i className="h-6 w-6" data-lucide="map-pin"></i>
</span>
</div>
<div>
<h3 className="text-sm font-bold text-[#07162b]">
                    Handpicked stays
                  </h3>
<p className="mt-1 text-sm leading-6 text-[#526071]">
                    Boutique hotels and villas in unforgettable locations.
                  </p>
</div>
</div>
<div className="grid grid-cols-[3.75rem_1fr] gap-4">
<div className="flex justify-center">
<span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8a3c]/70 bg-[#fffaf2] text-[#bd8a3c] shadow-[0_12px_30px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.75)]">
<i className="h-6 w-6" data-lucide="sparkles"></i>
</span>
</div>
<div>
<h3 className="text-sm font-bold text-[#07162b]">
                    Curated experiences
                  </h3>
<p className="mt-1 text-sm leading-6 text-[#526071]">
                    Private access, expert guides, and meaningful moments.
                  </p>
</div>
</div>
<div className="grid grid-cols-[3.75rem_1fr] gap-4">
<div className="flex justify-center">
<span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bd8a3c]/70 bg-[#fffaf2] text-[#bd8a3c] shadow-[0_12px_30px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.75)]">
<i className="h-6 w-6" data-lucide="headphones"></i>
</span>
</div>
<div>
<h3 className="text-sm font-bold text-[#07162b]">
                    Seamless by design
                  </h3>
<p className="mt-1 text-sm leading-6 text-[#526071]">
                    Transfers, timing, and every detail — handled for you.
                  </p>
</div>
</div>
</div>

<div className="journey-reveal mt-10 max-w-[38rem] rounded-[1.15rem] border border-[#d8c5a3] bg-[#fffaf2] px-6 py-6 shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-4">
<img alt="Senior concierge" className="h-[4.5rem] w-[4.5rem] rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a8193c-5674-4f5d-a436-4cefec7e77fb_3840w.webp?w=800&amp;q=80"/>
<div className="min-w-0">
<h3 className="text-sm font-bold text-[#9d7337]">
                    Concierge Insight
                  </h3>
<p className="mt-2 text-sm leading-6 text-[#324055]">
                    “Start with sunrise in Positano and a private boat day to Capri—it sets the tone for a week to
                    remember.”
                  </p>
<p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#526071]">
                    Sofia Bianchi · Senior Concierge
                  </p>
</div>
</div>
</div>
</div>

<div className="journey-reveal">
<div className="overflow-hidden rounded-[1.35rem] border border-[#d8c5a3] bg-[#fffaf2] shadow-[0_34px_95px_rgba(7,22,43,0.14),inset_0_1px_0_rgba(255,255,255,0.82)]">

<div className="px-6 pt-5">
<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-4">
<img alt="Amalfi Coast" className="h-16 w-16 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0da3c0a-192a-4c59-8d1d-61414367ed5d_320w.png"/>
<div>
<h3 className="font-serif-display text-2xl font-medium leading-none text-[#07162b] sm:text-3xl">
                        7-Day Amalfi Escape
                      </h3>
<p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-[#526071]">
<span className="inline-flex items-center gap-1.5">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="map-pin"></i>
                May 24 – May 30, 2025
              </span>
<span>·</span>
<span>2 Adults</span>
</p>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#bd8a3c] bg-[#fffaf2] px-5 py-3 text-sm font-bold text-[#9d7337] shadow-[inset_0_1px_0_rgba(255,255,255,0.74)] transition hover:bg-[#f7efe6]">
<i className="h-4 w-4" data-lucide="pencil"></i>
          Customize This Trip
        </button>
</div>

<div className="mt-5 h-px w-full bg-[#d8c5a3]/35"></div>
</div>

<div className="grid grid-cols-1 px-6 pt-2 pb-2 sm:grid-cols-3">
<div className="flex items-center justify-center gap-3 px-4 py-1.5">
<i className="h-5 w-5 text-[#bd8a3c]" data-lucide="bed-double"></i>
<div>
<p className="text-sm font-bold leading-tight text-[#07162b]">6 Nights</p>
<p className="text-xs font-semibold text-[#526071]">Boutique Stays</p>
</div>
</div>
<div className="flex items-center justify-center gap-3 px-4 py-1.5">
<i className="h-5 w-5 text-[#bd8a3c]" data-lucide="ship-wheel"></i>
<div>
<p className="text-sm font-bold leading-tight text-[#07162b]">4 Experiences</p>
<p className="text-xs font-semibold text-[#526071]">Curated for You</p>
</div>
</div>
<div className="flex items-center justify-center gap-3 px-4 py-1.5">
<i className="h-5 w-5 text-[#bd8a3c]" data-lucide="car"></i>
<div>
<p className="text-sm font-bold leading-tight text-[#07162b]">All Transfers</p>
<p className="text-xs font-semibold text-[#526071]">Private &amp; Seamless</p>
</div>
</div>
</div>

<div className="grid border-t border-[#d8c5a3]/55 grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">

<div className="relative min-h-[34rem] overflow-hidden border-b border-[#d8c5a3]/75 bg-[#f7efe6] lg:border-b-0 lg:border-r">
<img alt="Amalfi itinerary visual placeholder" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d11ec60-5718-40aa-acbc-5a48c78fbee5_800w.png"/>

<div className="absolute inset-0 bg-[#fffaf2]/18"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#fffaf2]/48 via-[#fffaf2]/12 to-[#07162b]/10"></div>

<div className="absolute bottom-6 left-6 right-6 rounded-xl border border-[#d8c5a3]/70 bg-[#fffaf2]/82 px-4 py-3 shadow-[0_18px_45px_rgba(7,22,43,0.12)] backdrop-blur-sm">
<p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#9d7337]">
      Visual Route Preview
    </p>
<p className="mt-1 text-xs font-semibold leading-5 text-[#526071]">
      A curated glimpse of your Amalfi journey.
    </p>
</div>
</div>

<div className="w-full min-w-0 bg-[#fffaf2]">
<div className="w-full divide-y divide-[#d8c5a3]/70">

<div className="relative grid min-h-[4.85rem] w-full grid-cols-[3rem_1.5rem_minmax(13rem,1fr)] items-center gap-2 py-2.5 pl-6 pr-[6.25rem]">

<div className="font-serif-display text-xl text-[#07162b]">
    Day 1
  </div>

<div className="relative flex h-full items-center justify-center">
<span className="absolute left-1/2 top-1/2 h-1/2 -translate-x-1/2 border-l border-dashed border-[#bd8a3c]/55"></span>
<span className="relative z-10 h-3 w-3 rounded-full bg-[#bd8a3c]"></span>
</div>

<div className="min-w-0">
<h4 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
      Positano
    </h4>
<p className="mt-1.5 whitespace-nowrap text-xs font-semibold text-[#526071]">
      2 Nights · Le Sirenuse
    </p>
<p className="mt-1 whitespace-nowrap text-xs font-bold text-[#526071]">
      Arrive &amp; Settle In
    </p>
</div>

<img alt="Positano" className="absolute right-6 top-1/2 aspect-[16/9] h-[calc(100%-1rem)] -translate-y-1/2 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1526f54a-b7a8-4300-be0a-f6a80d75faa0_320w.png"/>
</div>

<div className="relative grid min-h-[4.85rem] w-full grid-cols-[3rem_1.5rem_minmax(13rem,1fr)] items-center gap-2 py-2.5 pl-6 pr-[9.75rem]">

<div className="font-serif-display text-xl text-[#07162b]">
    Day 2
  </div>

<div className="relative flex h-full items-center justify-center">
<span className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-[#bd8a3c]/55"></span>
<span className="relative z-10 h-3 w-3 rounded-full bg-[#bd8a3c]"></span>
</div>

<div className="min-w-0">
<h4 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
      Positano
    </h4>
<p className="mt-1.5 whitespace-nowrap text-xs font-semibold text-[#526071]">
      Le Sirenuse
    </p>
<p className="mt-1 whitespace-nowrap text-xs font-bold text-[#526071]">
      Private Boat Day
    </p>
</div>

<img alt="Private boat day" className="absolute right-6 top-1/2 aspect-[16/9] h-[calc(100%-1rem)] -translate-y-1/2 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3730b8c8-8fb8-4c98-b0f1-7cea37ce2ce7_320w.png"/>
</div>

<div className="relative grid min-h-[4.85rem] w-full grid-cols-[3rem_1.5rem_minmax(13rem,1fr)] items-center gap-2 py-2.5 pl-6 pr-[9.75rem]">
<div className="font-serif-display text-xl text-[#07162b]">
    Day 3
  </div>

<div className="relative flex h-full items-center justify-center">
<span className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-[#bd8a3c]/55"></span>
<span className="relative z-10 h-3 w-3 rounded-full bg-[#bd8a3c]"></span>
</div>
<div className="min-w-0">
<h4 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
      Amalfi
    </h4>
<p className="mt-1.5 whitespace-nowrap text-xs font-semibold text-[#526071]">
      1 Night · Hotel Santa Caterina
    </p>
<p className="mt-1 whitespace-nowrap text-xs font-bold text-[#526071]">
      Cliffside Dinner
    </p>
</div>
<img alt="Cliffside dinner" className="absolute right-6 top-1/2 aspect-[16/9] h-[calc(100%-1rem)] -translate-y-1/2 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7088562b-9147-468a-9ecf-00cc4931f919_320w.png"/>
</div>

<div className="relative grid min-h-[4.85rem] w-full grid-cols-[3rem_1.5rem_minmax(13rem,1fr)] items-center gap-2 py-2.5 pl-6 pr-[9.75rem]">
<div className="font-serif-display text-xl text-[#07162b]">
    Day 4
  </div>

<div className="relative flex h-full items-center justify-center">
<span className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-[#bd8a3c]/55"></span>
<span className="relative z-10 h-3 w-3 rounded-full bg-[#bd8a3c]"></span>
</div>
<div className="min-w-0">
<h4 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
      Ravello
    </h4>
<p className="mt-1.5 whitespace-nowrap text-xs font-semibold text-[#526071]">
      2 Nights · Caruso, A Belmond Hotel
    </p>
<p className="mt-1 whitespace-nowrap text-xs font-bold text-[#526071]">
      Villa Cimbrone &amp; Music Experience
    </p>
</div>
<img alt="Ravello gardens" className="absolute right-6 top-1/2 aspect-[16/9] h-[calc(100%-1rem)] -translate-y-1/2 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b637aff3-b057-439c-88cf-93053193d0f2_320w.png"/>
</div>

<div className="relative grid min-h-[4.85rem] w-full grid-cols-[3rem_1.5rem_minmax(13rem,1fr)] items-center gap-2 py-2.5 pl-6 pr-[9.75rem]">
<div className="font-serif-display text-xl text-[#07162b]">
    Day 5
  </div>

<div className="relative flex h-full items-center justify-center">
<span className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-[#bd8a3c]/55"></span>
<span className="relative z-10 h-3 w-3 rounded-full bg-[#bd8a3c]"></span>
</div>
<div className="min-w-0">
<h4 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
      Ravello
    </h4>
<p className="mt-1.5 whitespace-nowrap text-xs font-semibold text-[#526071]">
      Caruso, A Belmond Hotel
    </p>
<p className="mt-1 whitespace-nowrap text-xs font-bold text-[#526071]">
      Private Boat &amp; Blue Grotto
    </p>
</div>
<img alt="Capri cliffs" className="absolute right-6 top-1/2 aspect-[16/9] h-[calc(100%-1rem)] -translate-y-1/2 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b5fb95d-59b3-4393-b10d-b62fcaf61c46_320w.png"/>
</div>

<div className="relative grid min-h-[4.85rem] w-full grid-cols-[3rem_1.5rem_minmax(13rem,1fr)] items-center gap-2 py-2.5 pl-6 pr-[9.75rem]">
<div className="font-serif-display text-xl text-[#07162b]">
    Day 6
  </div>

<div className="relative flex h-full items-center justify-center">
<span className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-[#bd8a3c]/55"></span>
<span className="relative z-10 h-3 w-3 rounded-full bg-[#bd8a3c]"></span>
</div>
<div className="min-w-0">
<h4 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
      Praiano
    </h4>
<p className="mt-1.5 whitespace-nowrap text-xs font-semibold text-[#526071]">
      2 Nights · Casa Angelina
    </p>
<p className="mt-1 whitespace-nowrap text-xs font-bold text-[#526071]">
      Lemon Grove Visit &amp; Cooking Class
    </p>
</div>
<img alt="Lemon grove" className="absolute right-6 top-1/2 aspect-[16/9] h-[calc(100%-1rem)] -translate-y-1/2 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39d4d215-8171-4e62-b890-9641e034d496_320w.png"/>
</div>

<div className="relative grid min-h-[4.85rem] w-full grid-cols-[3rem_1.5rem_minmax(13rem,1fr)] items-center gap-2 py-2.5 pl-6 pr-[9.75rem]">
<div className="font-serif-display text-xl text-[#07162b]">
    Day 7
  </div>

<div className="relative flex h-full items-center justify-center">
<span className="absolute left-1/2 top-0 h-1/2 -translate-x-1/2 border-l border-dashed border-[#bd8a3c]/55"></span>
<span className="relative z-10 h-3 w-3 rounded-full bg-[#bd8a3c]"></span>
</div>
<div className="min-w-0">
<h4 className="font-serif-display text-2xl font-medium leading-none text-[#07162b]">
      Departure
    </h4>
<p className="mt-1.5 whitespace-nowrap text-xs font-semibold text-[#526071]">
      Private Transfer to Naples
    </p>
<p className="mt-1 whitespace-nowrap text-xs font-bold text-[#526071]">
      Arrivederci
    </p>
</div>
<img alt="Private transfer" className="absolute right-6 top-1/2 aspect-[16/9] h-[calc(100%-1rem)] -translate-y-1/2 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64b69a04-ce7d-47d9-a7df-d1e0f253c443_320w.png"/>
</div>
</div>
</div>
</div>

<div className="border-t border-[#d8c5a3]/75 p-6">
<div className="flex flex-col gap-4 rounded-xl border border-[#d8c5a3] bg-[#f7efe6] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#bd8a3c]" data-lucide="star"></i>
<p className="whitespace-nowrap text-sm font-bold text-[#9d7337]">
                      Curated for you
                    </p>
</div>
<p className="text-sm font-semibold text-[#526071]">
                    This itinerary balances iconic moments with quiet, authentic experiences.
                  </p>
<button className="inline-flex items-center justify-end whitespace-nowrap text-sm font-bold text-[#9d7337]">
          Learn more
        </button>
</div>
</div>
</div>
</div>
</div>
</div></section>



<section className="relative z-10 overflow-hidden bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-10">

<div className="absolute inset-0">
<img alt="Luxury coastal terrace at golden hour" className="h-full w-full object-cover opacity-[0.82]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b31006c-ad26-487a-8347-659e7d637803_3840w.png"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#fffaf2] via-[#fffaf2]/88 to-[#fffaf2]/35"></div>

<div className="absolute inset-y-0 right-0 w-[34%] bg-gradient-to-l from-[#07162b]/18 via-[#07162b]/6 to-transparent"></div>

<div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#07162b]/18 via-transparent to-transparent"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(189,138,60,0.10),transparent_34rem),radial-gradient(circle_at_76%_18%,rgba(7,22,43,0.06),transparent_32rem)]"></div>
</div>
<div className="relative mx-auto max-w-[88rem]">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">

<div className="membership-reveal max-w-xl">
<div className="mb-7">
<p className="text-xs font-bold uppercase tracking-[0.26em] text-[#9d7337]">
            06 / Membership
          </p>
<div className="mt-5 h-[3px] w-16 rounded-full bg-[#bd8a3c]"></div>
</div>

<h2 className="font-serif-display text-5xl font-medium leading-[1.02] tracking-tight text-[#07162b] sm:text-6xl lg:text-7xl">
<span className="membership-word"><span className="membership-word-inner">Choose </span></span>
<span className="membership-word"><span className="membership-word-inner">the </span></span>
<span className="membership-word"><span className="membership-word-inner">level</span></span>
<br/>
<span className="membership-word"><span className="membership-word-inner">of </span></span>
<span className="membership-word"><span className="membership-word-inner">planning </span></span>
<span className="membership-word"><span className="membership-word-inner">that</span></span>
<br/>
<span className="membership-word"><span className="membership-word-inner">fits </span></span>
<span className="membership-word"><span className="membership-word-inner">your </span></span>
<span className="membership-word"><span className="membership-word-inner">style.</span></span>
</h2>
<p className="membership-reveal mt-8 max-w-md text-base leading-8 text-[#324055] sm:text-lg">
          Whether you love to explore on your own or want every detail handled, Aurelia offers flexible planning options designed around how you travel.
        </p>

<div className="membership-reveal mt-10 inline-flex items-center rounded-full border border-[#d8c5a3] bg-[#fffaf2]/82 p-1 shadow-[0_18px_44px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<button className="rounded-full px-6 py-2.5 text-sm font-bold text-[#526071]">
            Per Trip
          </button>
<button className="rounded-full bg-[#07162b] px-6 py-2.5 text-sm font-bold text-[#fffaf2] shadow-[0_10px_26px_rgba(7,22,43,0.22)]">
            Monthly
          </button>
</div>
<p className="membership-reveal mt-7 flex items-center gap-2 text-sm font-semibold text-[#526071]">
<i className="h-5 w-5 text-[#bd8a3c]" data-lucide="shield-check"></i>
          Cancel anytime. No hidden fees.
        </p>
</div>

<div className="membership-reveal lg:col-span-1">
<div className="grid grid-cols-1 items-end gap-5 md:grid-cols-3">

<article className="relative flex min-h-[35rem] flex-col rounded-[1.35rem] border border-[#d8c5a3] bg-[#fffaf2] p-6 shadow-[0_30px_80px_rgba(7,22,43,0.14),inset_0_1px_0_rgba(255,255,255,0.82)]">
<div className="flex justify-center">
<span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#f7efe6] text-[#bd8a3c] shadow-[0_18px_44px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<i className="h-9 w-9" data-lucide="leaf"></i>
</span>
</div>
<div className="mt-7 text-center">
<h3 className="font-serif-display text-3xl font-medium leading-none text-[#07162b]">
          Essential
        </h3>
<p className="mx-auto mt-3 max-w-[13.5rem] text-sm font-semibold leading-6 text-[#526071]">
          Smart planning, curated ideas, and flexible itinerary guidance for independent travelers.
        </p>
</div>
<div className="mt-8 text-center">
<p className="font-serif-display text-5xl font-medium leading-none text-[#07162b]">
          $49
          <span className="font-sans text-base font-semibold text-[#526071]">/ month</span>
</p>
<p className="mt-2 text-sm font-semibold text-[#8a612d]">
          or $499 per trip
        </p>
</div>
<div className="my-7 h-px w-full bg-[#d8c5a3]"></div>
<ul className="space-y-4 text-sm font-semibold text-[#324055]">
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="sparkles"></i>
          Curated itineraries
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="hotel"></i>
          Hotel &amp; stay guidance
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="map"></i>
          Smart recommendations
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="route"></i>
          Itinerary updates
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="mail"></i>
          Email support
        </li>
</ul>
<div className="mt-auto pt-8">
<a className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-[#bd8a3c] bg-[#fffaf2] text-sm font-bold text-[#9d7337] transition hover:bg-[#f7efe6]" href="#">
          Choose Essential
        </a>
</div>
</article>

<article className="relative flex min-h-[42rem] flex-col rounded-[1.35rem] border border-[#d8c5a3] bg-[#fffaf2] p-6 shadow-[0_40px_105px_rgba(7,22,43,0.22),inset_0_1px_0_rgba(255,255,255,0.86)]">
<div className="absolute left-1/2 top-0 min-w-[11.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8c5a3] bg-[#fffaf2]/94 px-6 py-2 text-center text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#9d7337] shadow-[0_12px_28px_rgba(7,22,43,0.10)] backdrop-blur-sm">
  Most Popular
</div>
<div className="flex justify-center pt-5">
<span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#f7efe6] text-[#bd8a3c] shadow-[0_18px_44px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<i className="h-9 w-9" data-lucide="concierge-bell"></i>
</span>
</div>
<div className="mt-7 text-center">
<h3 className="font-serif-display text-3xl font-medium leading-none text-[#07162b]">
          Concierge
        </h3>
<p className="mx-auto mt-3 max-w-[13.5rem] text-sm font-semibold leading-6 text-[#526071]">
          Personalized planning, booking support, and expert help when you want the details handled.
        </p>
</div>
<div className="mt-8 text-center">
<p className="font-serif-display text-5xl font-medium leading-none text-[#07162b]">
          $149
          <span className="font-sans text-base font-semibold text-[#526071]">/ month</span>
</p>
<p className="mt-2 text-sm font-semibold text-[#8a612d]">
          or $1,499 per trip
        </p>
</div>
<div className="my-7 h-px w-full bg-[#d8c5a3]"></div>
<ul className="space-y-4 text-sm font-semibold text-[#324055]">
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="sparkles"></i>
          Everything in Essential
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="messages-square"></i>
          Concierge chat support
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="calendar-check"></i>
          Bookings &amp; reservations
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="utensils"></i>
          Dining &amp; experience picks
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="headphones"></i>
          24/7 support
        </li>
</ul>
<div className="mt-auto pt-8">
<a className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#bd8a3c] text-sm font-bold text-[#fffaf2] shadow-[0_18px_44px_rgba(138,97,45,0.26),inset_0_1px_0_rgba(255,255,255,0.18)] transition hover:bg-[#a87531]" href="#">
          Choose Concierge
        </a>
</div>
</article>

<article className="relative flex min-h-[35rem] flex-col rounded-[1.35rem] border border-[#d8c5a3] bg-[#fffaf2] p-6 shadow-[0_30px_80px_rgba(7,22,43,0.14),inset_0_1px_0_rgba(255,255,255,0.82)]">
<div className="flex justify-center">
<span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#f7efe6] text-[#bd8a3c] shadow-[0_18px_44px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]">
<i className="h-9 w-9" data-lucide="key-round"></i>
</span>
</div>
<div className="mt-7 text-center">
<h3 className="font-serif-display text-3xl font-medium leading-none text-[#07162b]">
          Private
        </h3>
<p className="mx-auto mt-3 max-w-[13.5rem] text-sm font-semibold leading-6 text-[#526071]">
          Fully bespoke travel design with dedicated advisory, elevated access, and in-destination care.
        </p>
</div>
<div className="mt-8 text-center">
<p className="font-serif-display text-5xl font-medium leading-none text-[#07162b]">
          $399
          <span className="font-sans text-base font-semibold text-[#526071]">/ month</span>
</p>
<p className="mt-2 text-sm font-semibold text-[#8a612d]">
          or $3,999 per trip
        </p>
</div>
<div className="my-7 h-px w-full bg-[#d8c5a3]"></div>
<ul className="space-y-4 text-sm font-semibold text-[#324055]">
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="sparkles"></i>
          Everything in Concierge
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="pen-tool"></i>
          Private trip design
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="badge-check"></i>
          VIP perks &amp; upgrades
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="map-pin"></i>
          In-destination support
        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="user-round-check"></i>
          Dedicated travel advisor
        </li>
</ul>
<div className="mt-auto pt-8">
<a className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-[#bd8a3c] bg-[#fffaf2] text-sm font-bold text-[#9d7337] transition hover:bg-[#f7efe6]" href="#">
          Choose Private
        </a>
</div>
</article>
</div>

<div className="mt-10 flex justify-center">
<a className="inline-flex items-center gap-3 rounded-full border border-[#d8c5a3]/70 bg-[#fffaf2]/72 px-6 py-3 text-sm font-bold text-[#8a612d] shadow-[0_18px_44px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-sm transition hover:bg-[#fffaf2]" href="#">
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="sparkles"></i>
      Not sure which is right for you?
      <span className="underline underline-offset-4">Compare all features</span>
<i className="h-4 w-4 text-[#bd8a3c]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div></div></section>



<section className="relative z-10 min-h-screen overflow-hidden bg-[#07162b] px-5 py-20 sm:px-8 lg:px-10">

<div className="absolute inset-0">
<img alt="Evening Amalfi Coast terrace" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c1b6dde-d0b7-4ce0-a87f-ee8076cdfc1b_3840w.png"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#07162b]/88 via-[#07162b]/54 to-[#07162b]/18"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/78 via-transparent to-[#07162b]/28"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_34%,rgba(189,138,60,0.16),transparent_32rem),radial-gradient(circle_at_78%_62%,rgba(255,250,242,0.10),transparent_30rem)]"></div>
</div>
<div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-[88rem] flex-col justify-between">

<div className="cta-reveal">
<div className="flex items-center justify-between gap-8">
<h2 className="font-serif-display text-2xl font-medium uppercase tracking-[0.24em] text-[#fffaf2] sm:text-3xl">
          Aurelia AI Travel
        </h2>
<p className="hidden text-sm font-semibold text-[#fffaf2] sm:block">
          Curated journeys. Crafted for you.
        </p>
</div>
<div className="mt-7 flex items-center">
<div className="h-px flex-1 bg-[#d8c5a3]/55"></div>
<span className="mx-5 text-[#bd8a3c]">
<i className="h-4 w-4" data-lucide="sparkle"></i>
</span>
<div className="h-px flex-1 bg-[#d8c5a3]/55"></div>
</div>
</div>

<div className="relative py-20">

<div className="max-w-[74rem]">

<h2 className="font-serif-display max-w-[74rem] text-6xl font-medium leading-[1.02] tracking-tight text-[#fffaf2] sm:text-7xl lg:text-8xl xl:text-[7.1rem]">
<span className="block whitespace-nowrap">
<span className="cta-word"><span className="cta-word-inner">Plan </span></span>
<span className="cta-word"><span className="cta-word-inner">the </span></span>
<span className="cta-word"><span className="cta-word-inner">journey.</span></span>
</span>
<span className="block whitespace-nowrap">
<span className="cta-word"><span className="cta-word-inner">Remember </span></span>
<span className="cta-word"><span className="cta-word-inner">it </span></span>
<span className="cta-word"><span className="cta-word-inner">forever.</span></span>
</span>
</h2>
<div className="cta-reveal mt-9 h-1 w-20 rounded-full bg-[#bd8a3c]"></div>
<p className="cta-reveal mt-8 max-w-2xl text-lg font-medium leading-8 text-[#fffaf2] sm:text-xl">
          Discover a more personal way to travel — where every itinerary is crafted around you, so you can focus on what matters most: the moments that stay with you.
        </p>
<div className="cta-reveal mt-10 flex flex-col gap-4 sm:flex-row">
<a className="group inline-flex h-[58px] items-center justify-center gap-4 rounded-[12px] border border-[#fffaf2]/20 bg-[#07162b] px-8 text-base font-bold text-[#fffaf2] shadow-[0_22px_48px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.10)] transition hover:-translate-y-0.5 hover:bg-[#10233d]" href="#">
            Start Planning
            <i className="h-5 w-5 text-[#bd8a3c] transition group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="group inline-flex h-[58px] items-center justify-center gap-4 rounded-[12px] border border-[#d8c5a3] bg-[#fffaf2] px-8 text-base font-bold text-[#8a612d] shadow-[0_18px_42px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.82)] transition hover:-translate-y-0.5 hover:bg-[#f7efe6]" href="#">
            View Sample Journey
            <i className="h-5 w-5 text-[#bd8a3c] transition group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="cta-reveal mt-14">
<p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad68]">
            Built for travelers who want every detail considered
          </p>
<div className="flex flex-wrap items-center gap-x-7 gap-y-5 text-[#fffaf2] lg:flex-nowrap">
<div className="flex items-center gap-3">
<span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bd8a3c]/70 text-[#bd8a3c]">
<i className="h-5 w-5" data-lucide="heart"></i>
</span>
<span className="whitespace-nowrap text-sm font-semibold">Honeymooners</span>
</div>
<div className="hidden h-10 w-px bg-[#d8c5a3]/35 sm:block"></div>
<div className="flex items-center gap-3">
<span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bd8a3c]/70 text-[#bd8a3c]">
<i className="h-5 w-5" data-lucide="users-round"></i>
</span>
<span className="whitespace-nowrap text-sm font-semibold">Families</span>
</div>
<div className="hidden h-10 w-px bg-[#d8c5a3]/35 sm:block"></div>
<div className="flex items-center gap-3">
<span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bd8a3c]/70 text-[#bd8a3c]">
<i className="h-5 w-5" data-lucide="briefcase-business"></i>
</span>
<span className="whitespace-nowrap text-sm font-semibold">Founders</span>
</div>
<div className="hidden h-10 w-px bg-[#d8c5a3]/35 sm:block"></div>
<div className="flex items-center gap-3">
<span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bd8a3c]/70 text-[#bd8a3c]">
<i className="h-5 w-5" data-lucide="waves"></i>
</span>
<span className="whitespace-nowrap text-sm font-semibold">Solo Travelers</span>
</div>
</div>
</div>
</div>

<div className="cta-reveal mt-12 lg:absolute lg:bottom-20 lg:right-0 lg:mt-0">
<div className="grid w-full max-w-[36rem] grid-cols-1 gap-5 rounded-[1.2rem] border border-[#d8c5a3] bg-[#fffaf2] p-6 shadow-[0_34px_95px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.86)] sm:grid-cols-[1fr_10rem]">
<div className="min-w-0">
<div className="font-serif-display text-5xl leading-none text-[#bd8a3c]">
              “
            </div>
<p className="mt-1 font-serif-display text-xl italic leading-8 text-[#324055]">
              Our trip felt effortlessly perfect — every detail thoughtful, every moment unforgettable.
            </p>
<p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#07162b]">
              Jessica &amp; David, Italy
            </p>
<p className="mt-1 text-sm font-semibold text-[#526071]">
              Aurelia Travelers
            </p>
</div>
<img alt="Amalfi Coast memory" className="h-full min-h-[10rem] w-full rounded-[0.85rem] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b31006c-ad26-487a-8347-659e7d637803_320w.png"/>
</div>
</div>
</div>
</div>
</section>



<footer className="relative z-10 bg-[#fffaf2] px-5 py-14 sm:px-8 lg:px-10">

<div className="absolute inset-x-0 top-0 h-px bg-[#d8c5a3]/70"></div>
<div className="mx-auto max-w-[88rem]">

<div className="grid grid-cols-1 gap-10 border-b border-[#d8c5a3]/65 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">

<div className="max-w-md">
<a className="inline-block" href="#">
<span className="font-serif-display block text-3xl font-medium uppercase leading-none tracking-[0.28em] text-[#07162b]">
            Aurelia
          </span>
<span className="mt-2 block text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#9d7337]">
            AI Travel
          </span>
</a>
<p className="mt-6 max-w-sm text-sm font-medium leading-7 text-[#526071]">
          Private travel planning shaped by intelligent recommendations and refined by real concierge expertise.
        </p>
<div className="mt-7 flex items-center gap-3">
<a aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#9d7337] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i>
</a>
<a aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#9d7337] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c5a3] bg-[#fffaf2] text-[#9d7337] transition hover:border-[#bd8a3c] hover:bg-[#f7efe6]" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div>
<h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d7337]">
          Explore
        </h3>
<ul className="mt-5 space-y-3 text-sm font-semibold text-[#526071]">
<li><a className="transition hover:text-[#07162b]" href="#">Destinations</a></li>
<li><a className="transition hover:text-[#07162b]" href="#">Journeys</a></li>
<li><a className="transition hover:text-[#07162b]" href="#">How It Works</a></li>
<li><a className="transition hover:text-[#07162b]" href="#">Membership</a></li>
</ul>
</div>

<div>
<h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d7337]">
          Concierge
        </h3>
<ul className="mt-5 space-y-3 text-sm font-semibold text-[#526071]">
<li><a className="transition hover:text-[#07162b]" href="#">Plan My Trip</a></li>
<li><a className="transition hover:text-[#07162b]" href="#">Sample Journey</a></li>
<li><a className="transition hover:text-[#07162b]" href="#">Private Stays</a></li>
<li><a className="transition hover:text-[#07162b]" href="#">Travel Support</a></li>
</ul>
</div>

<div>
<h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d7337]">
          Contact
        </h3>
<ul className="mt-5 space-y-3 text-sm font-semibold text-[#526071]">
<li>
<a className="transition hover:text-[#07162b]" href="mailto:hello@aureliatravel.com">
              hello@aureliatravel.com
            </a>
</li>
<li>Montreal · Paris · Remote</li>
<li>Available worldwide</li>
</ul>
<a className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[#07162b] px-5 py-3 text-sm font-bold text-[#fffaf2] shadow-[0_18px_44px_rgba(7,22,43,0.16),inset_0_1px_0_rgba(255,255,255,0.10)] transition hover:-translate-y-0.5 hover:bg-[#10233d]" href="#">
          Start Planning
          <i className="h-4 w-4 text-[#bd8a3c]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="flex flex-col gap-4 pt-7 text-sm font-semibold text-[#526071] sm:flex-row sm:items-center sm:justify-between">
<p>
        © 2026 Aurelia AI Travel. All rights reserved.
      </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<a className="transition hover:text-[#07162b]" href="#">Privacy</a>
<a className="transition hover:text-[#07162b]" href="#">Terms</a>
<a className="transition hover:text-[#07162b]" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
</main>





    </>
  );
}
