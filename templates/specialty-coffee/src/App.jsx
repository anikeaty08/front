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



    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && window.Lenis) {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
          const target = document.querySelector(anchor.getAttribute("href"));
          if (!target) return;
          event.preventDefault();
          lenis.scrollTo(target, { offset: -80 });
        });
      });
    }

    document.querySelectorAll("[data-mask-reveal]").forEach((heading) => {
      const text = heading.textContent.trim();
      heading.setAttribute("aria-label", text);
      heading.textContent = "";

      text.split(" ").forEach((word) => {
        const outer = document.createElement("span");
        outer.style.display = "inline-block";
        outer.style.overflow = "hidden";
        outer.style.verticalAlign = "top";
        outer.style.paddingBottom = "0.05em";

        const inner = document.createElement("span");
        inner.textContent = word;
        inner.style.display = "inline-block";
        inner.style.transform = "translateY(110%)";
        inner.style.willChange = "transform";

        outer.appendChild(inner);
        heading.appendChild(outer);
        heading.appendChild(document.createTextNode(" "));
      });

      if (prefersReducedMotion) {
        heading.querySelectorAll("span span").forEach((span) => {
          span.style.transform = "translateY(0)";
        });
        return;
      }

      gsap.to(heading.querySelectorAll("span span"), {
        y: "0%",
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.035,
        scrollTrigger: {
          trigger: heading,
          start: "top 86%",
          once: true
        }
      });
    });

    if (!prefersReducedMotion) {
      gsap.utils.toArray("[data-reveal]").forEach((item, index) => {
        gsap.fromTo(item, {
          opacity: 0,
          y: 28,
          filter: "blur(12px)"
        }, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          delay: Math.min((index % 6) * 0.045, 0.25),
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true
          }
        });
      });

      gsap.utils.toArray("[data-card]").forEach((card) => {
        card.addEventListener("mousemove", (event) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const rotateY = ((x / rect.width) - 0.5) * 5;
          const rotateX = ((y / rect.height) - 0.5) * -5;

          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 900,
            transformOrigin: "center",
            duration: 0.35,
            ease: "power2.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.55,
            ease: "elastic.out(1, 0.45)"
          });
        });
      });

      gsap.utils.toArray("[data-magnetic]").forEach((element) => {
        element.addEventListener("mousemove", (event) => {
          const rect = element.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;

          gsap.to(element, {
            x: x * 0.18,
            y: y * 0.18,
            duration: 0.35,
            ease: "power3.out"
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.55,
            ease: "elastic.out(1, 0.45)"
          });
        });
      });
    } else {
      document.querySelectorAll("[data-reveal]").forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
        item.style.filter = "none";
      });
    }

    document.querySelectorAll("button, a, input").forEach((element) => {
      element.addEventListener("pointerdown", () => {
        if (prefersReducedMotion) return;
        gsap.to(element, { scale: 0.985, duration: 0.12, ease: "power2.out" });
      });

      element.addEventListener("pointerup", () => {
        if (prefersReducedMotion) return;
        gsap.to(element, { scale: 1, duration: 0.22, ease: "back.out(2)" });
      });

      element.addEventListener("pointerleave", () => {
        if (prefersReducedMotion) return;
        gsap.to(element, { scale: 1, duration: 0.22, ease: "back.out(2)" });
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
  }, []);

  return (
    <>
      
<main className="mx-auto min-h-screen w-full max-w-[112rem] overflow-hidden bg-[#faf8f1] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f1]/88 backdrop-blur-xl">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
<a aria-label="Café Nova home" className="group flex items-center gap-3 rounded-full outline-none transition duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#1f6f49]/40" data-magnetic="" href="#top">
<span className="text-sm font-semibold tracking-[-0.06em] text-[#17191f] sm:text-base">CAFÉNOVA</span>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35" data-interactive="" href="#features">Menu</a>
<a className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35" data-interactive="" href="#testimonials">Stories</a>
<a className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35" data-interactive="" href="#about">About</a>
<a className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35" data-interactive="" href="#gallery">Gallery</a>
</div>
<a className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#17191f] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f3f7ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35" data-magnetic="" href="#visit">
          Visit today
          <iconify-icon className="text-lg transition duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>
</header>
<section className="overflow-hidden sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 pt-16 pr-5 pb-20 pl-5 relative gap-x-12 gap-y-12" id="top">
<div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12">
<div className="absolute left-1/2 top-0 h-[32rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#1f6f49]/10 blur-3xl"></div>
<div className="absolute right-0 top-28 h-[22rem] w-[22rem] rounded-full bg-[#d8b48b]/20 blur-3xl"></div>
<div className="absolute inset-x-0 top-8 mx-auto h-72 max-w-5xl opacity-25" style={{backgroundImage: 'radial-gradient(circle, rgba(23,25,31,0.13) 1px, transparent 1px)', backgroundSize: '2rem 2rem'}}></div>
</div>
<div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] max-w-7xl mr-auto ml-auto relative gap-x-12 gap-y-12 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 rounded-full bg-[#1f6f49] px-3 py-1.5 text-xs font-semibold text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" data-reveal="" style={{filter: 'blur(0px)'}}>
<iconify-icon className="text-base" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
            Open daily · 7:00—18:00
          </div>
<h1 aria-label="Coffee roasted for bright mornings and slower afternoons" className="mt-6 max-w-5xl text-5xl font-light leading-none tracking-tight text-[#17191f] sm:text-6xl lg:text-7xl" data-mask-reveal="" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>Coffee</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>roasted</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>for</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>bright</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>mornings</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>and</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>slower</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>afternoons</span></span> </h1>
<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg lg:mx-0" data-reveal="" style={{filter: 'blur(0px)'}}>
            Café Nova is a neighborhood specialty coffee shop serving floral espresso, hand-poured filter, small-batch pastries, and a room designed for calm conversation.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start" data-reveal="" style={{filter: 'blur(0px)'}}>
<a className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#17191f] px-7 py-4 text-sm font-semibold text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-[#1f6f49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/40 sm:w-auto" data-magnetic="" href="#features">
              Explore the menu
              <iconify-icon className="text-lg transition duration-300 group-hover:translate-x-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/20 bg-white px-7 py-4 text-sm font-semibold text-[#17191f] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-[#f4f7ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35 sm:w-auto" data-magnetic="" href="#visit">
              Reserve a table
            </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-black/5 bg-white/65 p-3 text-left shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur" data-reveal="" style={{filter: 'blur(0px)'}}>
<div className="rounded-xl bg-[#f7f7f3] p-4">
<p className="text-2xl font-light tracking-tight sm:text-3xl" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>18</p>
<p className="mt-1 text-xs font-medium text-black/55">single-origin lots</p>
</div>
<div className="rounded-xl bg-[#f7f7f3] p-4">
<p className="text-2xl font-light tracking-tight sm:text-3xl" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>4.9</p>
<p className="mt-1 text-xs font-medium text-black/55">guest rating</p>
</div>
<div className="rounded-xl bg-[#f7f7f3] p-4">
<p className="text-2xl font-light tracking-tight sm:text-3xl" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>7d</p>
<p className="mt-1 text-xs font-medium text-black/55">fresh roasting</p>
</div>
</div>
</div>
<div className="relative" data-reveal="" style={{filter: 'blur(0px)'}}>
<div className="absolute z-20 -left-4 -top-4 hidden rounded-2xl bg-white p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:block lg:-left-8">
<div className="flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7efe2] text-[#1f6f49]">
<iconify-icon className="text-xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</span>
<div className="">
<p className="text-sm font-medium">Ethiopia Guji</p>
<p className="text-xs text-black/50">jasmine · lime · honey</p>
</div>
</div>
</div>
<div className="overflow-hidden rounded-[2rem] bg-[#e9eadf] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<video aria-label="Barista pouring latte art at Café Nova" className="h-[32rem] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-[1.035]" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68be631c-b384-41c4-8a37-8f72870ba941_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779131605992-bc94c4e1-0062-4bf8-99ef-a198c77b8e94.mp4"></video>
</div>
<div className="absolute -bottom-6 right-4 max-w-xs rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur sm:right-8">
<div className="flex items-center gap-3">
<img alt="Regular guest avatar" className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div>
<p className="text-sm font-semibold">Mara, daily regular</p>
<p className="text-xs leading-5 text-black/55">“The cortado has ruined every other morning coffee for me.”</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#e9eadf] px-5 py-20 sm:px-8 lg:px-10" id="features">
<div className="mx-auto max-w-7xl">
<div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
<div>
<span className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white" data-reveal="" style={{filter: 'blur(0px)'}}>What we pour</span>
<h2 aria-label="A smaller menu, carefully made" className="mt-4 max-w-2xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" data-mask-reveal="" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>A</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>smaller</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>menu,</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>carefully</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>made</span></span> </h2>
</div>
<p className="max-w-2xl text-base leading-7 text-black/62 lg:justify-self-end" data-reveal="" style={{filter: 'blur(0px)'}}>
            Every drink is built around clarity: balanced espresso, seasonal milk options, thoughtful brew recipes, and pastries that are baked before sunrise.
          </p>
</div>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
<article className="group rounded-3xl bg-white/85 p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:bg-white" data-card="" data-reveal="" style={{filter: 'blur(0px)', transformOrigin: '50% 50%'}}>
<span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7efe2] text-[#1f6f49] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
</span>
<h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Signature espresso</h3>
<p className="mt-4 text-sm leading-6 text-black/60">A rotating house blend pulled for sweetness, crema, and a round finish.</p>
</article>
<article className="group rounded-3xl bg-white/85 p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:bg-white" data-card="" data-reveal="" style={{filter: 'blur(0px)', transformOrigin: '50% 50%'}}>
<span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff3e8] text-[#1f6f49] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</span>
<h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Slow filter bar</h3>
<p className="mt-4 text-sm leading-6 text-black/60">Single-origin pour-overs brewed to highlight florals, acidity, and texture.</p>
</article>
<article className="group rounded-3xl bg-white/85 p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:bg-white" data-card="" data-reveal="" style={{filter: 'blur(0px)', transformOrigin: '50% 50%'}}>
<span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f0df] text-[#8a633d] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:chef-hat-linear" strokeWidth="1.5"></iconify-icon>
</span>
<h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Fresh pastry case</h3>
<p className="mt-4 text-sm leading-6 text-black/60">Cardamom buns, olive oil cake, and savory galettes made in small batches.</p>
</article>
<article className="group rounded-3xl bg-[#17191f] p-6 text-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] transition duration-500 hover:-translate-y-2" data-card="" data-reveal="" style={{filter: 'blur(0px)', transformOrigin: '50% 50%'}}>
<span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#b9d9ab] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</span>
<h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Calm work tables</h3>
<p className="mt-4 text-sm leading-6 text-white/60">Soft lighting, reliable Wi‑Fi, and quiet corners for reading or planning.</p>
</article>
</div>
<div className="mt-10 grid gap-5 rounded-[2rem] bg-[#dce5d6] p-5 lg:grid-cols-[1fr_0.8fr] lg:p-8" data-reveal="" style={{filter: 'blur(0px)'}}>
<div className="overflow-hidden rounded-3xl">
<video aria-label="Coffee cups and pastries on a café table" className="h-80 w-full object-cover transition duration-700 hover:scale-105 lg:h-full" data-aura-generated-video="true" data-aura-video-preset="hover" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4d7282c-0562-4aa5-a2a7-1a2843307e9b_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779131655695-670ad566-83e0-46bd-a807-d46395600461.mp4"></video>
</div>
<div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
<div className="">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f6f49]">Today’s favorite</p>
<h3 className="mt-4 text-4xl font-light leading-none tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Iced pistachio latte</h3>
<p className="mt-4 text-base leading-7 text-black/62">House pistachio milk, double espresso, sea salt, and a pale green finish that tastes like spring.</p>
</div>
<div className="mt-8 flex flex-wrap gap-2">
<span className="rounded-full bg-[#eef3e8] px-4 py-2 text-sm font-medium text-black/65">oat friendly</span>
<span className="rounded-full bg-[#eef3e8] px-4 py-2 text-sm font-medium text-black/65">limited batch</span>
<span className="rounded-full bg-[#eef3e8] px-4 py-2 text-sm font-medium text-black/65">served over ice</span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#fbfbf8] px-5 py-20 sm:px-8 lg:px-10" id="testimonials">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
<div className="">
<span className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white" data-reveal="" style={{filter: 'blur(0px)'}}>Guest notes</span>
<h2 aria-label="The kind of place people build rituals around" className="mt-4 max-w-3xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" data-mask-reveal="" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>The</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>kind</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>of</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>place</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>people</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>build</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>rituals</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>around</span></span> </h2>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17191f] px-6 py-4 text-sm font-semibold text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-[#1f6f49]" data-magnetic="" data-reveal="" href="#visit" style={{filter: 'blur(0px)'}}>
            Plan your visit
            <iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="mt-12 grid gap-5 lg:grid-cols-3">
<article className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" data-card="" data-reveal="" style={{filter: 'blur(0px)'}}>
<div aria-label="Five stars" className="flex gap-1 text-[#1f6f49]">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>“Café Nova has that rare mix of serious coffee and zero pretension. The filter menu is beautiful.”</p>
<div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
<img alt="Guest Lina Ortiz" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div>
<p className="text-sm font-semibold">Lina Ortiz</p>
<p className="text-xs text-black/50">Ceramicist</p>
</div>
</div>
</article>
<article className="rounded-3xl bg-[#e8ebe3] p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" data-card="" data-reveal="" style={{filter: 'blur(0px)', transformOrigin: '50% 50%'}}>
<div aria-label="Five stars" className="flex gap-1 text-[#1f6f49]">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>“I bring clients here because the room feels intentional. Quiet enough to think, warm enough to stay.”</p>
<div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
<img alt="Guest Theo Park" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div className="">
<p className="text-sm font-semibold">Theo Park</p>
<p className="text-xs text-black/50">Studio founder</p>
</div>
</div>
</article>
<article className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" data-card="" data-reveal="" style={{filter: 'blur(0px)', transformOrigin: '50% 50%'}}>
<div aria-label="Five stars" className="flex gap-1 text-[#1f6f49]">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>“The cardamom bun is reason enough to cross town. Add a cappuccino and it is perfect.”</p>
<div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
<img alt="Guest Amara Bell" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=240&amp;q=80"/>
<div>
<p className="text-sm font-semibold">Amara Bell</p>
<p className="text-xs text-black/50">Food writer</p>
</div>
</div>
</article>
</div>
<div className="mt-8 grid gap-5 rounded-[2rem] bg-[#17191f] p-5 text-white lg:grid-cols-[0.8fr_1.2fr] lg:p-8" data-reveal="" style={{filter: 'blur(0px)'}}>
<video aria-label="Interior of a cozy café" className="h-80 w-full rounded-3xl object-cover lg:h-full" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/581abf40-e37d-4fd8-b99f-d8ef81991d84_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779132224753-8326d8bd-b858-4d08-b342-9c164b6379e6.mp4"></video>
<div className="flex flex-col justify-center rounded-3xl bg-white/5 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d9ab]">Proof point</p>
<p className="mt-5 text-4xl font-light leading-tight tracking-tight sm:text-5xl" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
              82% of weekend guests return within two weeks.
            </p>
<p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
              We measure loyalty the simple way: familiar faces, remembered orders, and coffee good enough to become part of the week.
            </p>
</div>
</div>
</div>
</section>
<section className="border-y border-black/5 bg-[#f7f7f3] px-5 py-16 sm:px-8 lg:px-10" id="trusted">
<div className="mx-auto max-w-7xl">
<p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-black/45" data-reveal="" style={{filter: 'blur(0px)'}}>Beans, tools, and creative neighbors trusted by global teams</p>
<div className="relative mt-10 flex w-full overflow-hidden py-4" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<style>
    @keyframes marquee-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-scroll {
      animation: marquee-scroll 40s linear infinite;
    }
    .animate-marquee-scroll:hover {
      animation-play-state: paused;
    }
  </style>
<div className="animate-marquee-scroll flex w-max">
<div className="flex w-max shrink-0 gap-6 px-3">
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:nasa" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:spacex" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:uber" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:visa" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:grab" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:bose" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:discover" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:dji" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:nikon" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:craftsman" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:sony" style={{fontSize: '4rem'}}></iconify-icon>
</div>
</div>
<div className="flex w-max shrink-0 gap-6 px-3">
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:nasa" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:spacex" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:uber" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:visa" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:grab" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:bose" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:discover" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:dji" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:nikon" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:craftsman" style={{fontSize: '4rem'}}></iconify-icon>
</div>
<div className="flex h-24 w-32 shrink-0 items-center justify-center rounded-2xl bg-white text-black/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:text-[#1f6f49]" data-card="">
<iconify-icon icon="simple-icons:sony" style={{fontSize: '4rem'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#faf8f1] px-5 py-20 sm:px-8 lg:px-10" id="about">
<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
<div className="">
<span className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white" data-reveal="" style={{filter: 'blur(0px)'}}>Our approach</span>
<h2 aria-label="Built by baristas who believe hospitality is a craft" className="mt-4 text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" data-mask-reveal="" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>Built</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>by</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>baristas</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>who</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>believe</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>hospitality</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>is</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>a</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>craft</span></span> </h2>
<p className="mt-6 text-base leading-7 text-black/62" data-reveal="" style={{filter: 'blur(0px)'}}>
            We source with patient importers, roast in measured weekly batches, and train every barista to serve coffee with clarity rather than ceremony. The result is a café that feels polished, personal, and easy to return to.
          </p>
<div className="mt-8 grid gap-3 sm:grid-cols-2" data-reveal="" style={{filter: 'blur(0px)'}}>
<div className="rounded-2xl bg-white p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
<p className="text-3xl font-light tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Direct relationships</p>
<p className="mt-3 text-sm leading-6 text-black/58">Seasonal coffee purchased through transparent producer partnerships.</p>
</div>
<div className="rounded-2xl bg-white p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
<p className="text-3xl font-light tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Low-waste service</p>
<p className="mt-3 text-sm leading-6 text-black/58">Reusable cups, composted grounds, and pastry planning by demand.</p>
</div>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-2" data-reveal="" style={{filter: 'blur(0px)'}}>
<div className="flex h-full flex-col gap-5">
<div className="rounded-3xl bg-[#e9eadf] p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" data-card="" style={{transformOrigin: '50% 50%'}}>
<video aria-label="Head barista tasting espresso" className="h-64 w-full rounded-2xl object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c08df5a4-9c88-4a4d-89f1-f48893a64eb8_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779132099187-acc1a31c-4a1a-43e3-b935-c651e58008d4.mp4"></video>
<p className="mt-4 text-sm font-medium">Nico Vale</p>
<p className="text-xs text-black/50">Head barista</p>
</div>
<div className="flex flex-1 flex-col justify-between rounded-3xl bg-[#17191f] p-6 text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" data-card="" style={{transformOrigin: '50% 50%'}}>
<iconify-icon className="text-3xl text-[#b9d9ab]" icon="solar:medal-ribbons-star-linear" strokeWidth="1.5"></iconify-icon>
<img alt="Freshly roasted coffee beans" className="mt-6 h-40 w-full rounded-2xl object-cover opacity-90 transition-opacity duration-300 hover:opacity-100" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<p className="mt-6 text-3xl font-extralight leading-none tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Roasted within seven days of service.</p>
</div>
</div>
<div className="space-y-5 sm:pt-14">
<div className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" data-card="" style={{transformOrigin: '50% 50%'}}>
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f6f49]">Mission</p>
<p className="mt-5 text-3xl font-light leading-tight tracking-tight" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>Make excellent coffee feel welcoming, repeatable, and quietly memorable.</p>
</div>
<div className="rounded-3xl bg-[#dce5d6] p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" data-card="" style={{transformOrigin: '50% 50%'}}>
<video aria-label="Pastry chef preparing dough" className="h-72 w-full rounded-2xl object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71815886-1276-4f2b-addf-a79d285be6b3_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779132272229-470dc80f-f610-4478-83eb-769dc47e2692.mp4"></video>
<p className="mt-4 text-sm font-semibold">Iris Chen</p>
<p className="text-xs text-black/50">Pastry lead</p>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#e9eadf] px-5 py-20 sm:px-8 lg:px-10" id="gallery">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
<div>
<span className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white" data-reveal="" style={{filter: 'blur(12px)'}}>Inside the café</span>
<h2 aria-label="Soft light, fresh bakes, green details" className="mt-4 max-w-3xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" data-mask-reveal="" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>Soft</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>light,</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>fresh</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>bakes,</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>green</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>details</span></span> </h2>
</div>
<p className="max-w-md text-base leading-7 text-black/62" data-reveal="" style={{filter: 'blur(12px)'}}>
            A visual taste of the bar, the morning bake, and the quiet corners our regulars love most.
          </p>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:auto-rows-[260px] mt-12">

<figure className="group col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[320px] sm:h-[360px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" data-card="" data-reveal="" style={{filter: 'blur(12px)'}}>
<video aria-label="Freshly poured coffee" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ce75ddb-2ca9-4359-a463-0a64830d1f6c_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779131906933-fd7060a7-90b4-4bc9-8f01-baa89dd962ea.mp4"></video>
</figure>

<figure className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" data-card="" data-reveal="" style={{filter: 'blur(12px)'}}>
<img alt="Coffee beans close up" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e62346fe-8572-4f4b-af7b-bf0c0f3b178c_3840w.png"/>
</figure>

<figure className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" data-card="" data-reveal="" style={{filter: 'blur(12px)'}}>
<img alt="Café seating and plants" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecee3f84-538e-4626-be30-d43ec73b376d_3840w.png"/>
</figure>

<figure className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" data-card="" data-reveal="" style={{filter: 'blur(12px)'}}>
<img alt="Fresh pastries on display" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e458f247-6d97-4aab-aa32-8d5b7d2505e6_3840w.png"/>
</figure>

<figure className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" data-card="" data-reveal="" style={{filter: 'blur(12px)'}}>
<video aria-label="Person reading beside coffee" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daf7a894-7b17-4e80-b249-69b024610bb2_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779132318452-fadf49a3-041c-411f-92f8-49d907787c09.mp4"></video>
</figure>
</div>
</div>
</section>
<footer className="bg-[#17191f] px-5 py-10 text-white sm:px-8 lg:px-10" id="visit">
<div className="mx-auto max-w-7xl">
<div className="rounded-[2rem] bg-[#1e211f] p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:p-8">
<div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
<div>
<a className="inline-flex items-center gap-3 rounded-full outline-none transition duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white/30" data-magnetic="" href="#top">
<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#17191f]">
<span className="text-sm font-semibold tracking-[-0.08em]">CN</span>
</span>
<span className="text-sm font-semibold tracking-[-0.06em]">CAFÉNOVA</span>
</a>
<h3 aria-label="Come for the coffee. Stay for the light." className="mt-8 max-w-md text-4xl font-light leading-none tracking-tight text-white/88 sm:text-5xl" data-mask-reveal="" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}><span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>Come</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>for</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>the</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>coffee.</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>Stay</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>for</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>the</span></span> <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.05em'}}><span style={{display: 'inline-block', willChange: 'transform'}}>light.</span></span> </h3>
<p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                42 Greenway Lane, Portland · Open daily from 7:00 to 18:00.
              </p>
</div>
<div>
<h4 className="text-sm font-semibold">Explore</h4>
<ul className="mt-4 space-y-3 text-sm text-white/55">
<li><a className="transition duration-300 hover:text-white" data-interactive="" href="#features">Menu</a></li>
<li><a className="transition duration-300 hover:text-white" data-interactive="" href="#testimonials">Guest notes</a></li>
<li><a className="transition duration-300 hover:text-white" data-interactive="" href="#about">About</a></li>
<li><a className="transition duration-300 hover:text-white" data-interactive="" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold">Hours</h4>
<ul className="mt-4 space-y-3 text-sm text-white/55">
<li>Mon—Fri · 7:00—18:00</li>
<li>Saturday · 8:00—18:00</li>
<li>Sunday · 8:00—16:00</li>
<li>Kitchen closes at 15:00</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold">Get the weekly roast note</h4>
<p className="mt-4 text-sm leading-6 text-white/55">Seasonal beans, pastry drops, and quiet events in your inbox.</p>
<form action="#" className="mt-5 flex gap-2" method="post">
<label className="sr-only" htmlFor="email">Email address</label>
<input className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#b9d9ab]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#b9d9ab]/15" id="email" placeholder="Email address" type="email"/>
<button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#17191f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#dce5d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35" data-magnetic="" type="submit">Join</button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/42 sm:flex-row">
<p>Copyright © 2028 Café Nova</p>
<div className="flex flex-wrap gap-5">
<a className="transition duration-300 hover:text-white" data-interactive="" href="#">Instagram</a>
<a className="transition duration-300 hover:text-white" data-interactive="" href="#">Privacy</a>
<a className="transition duration-300 hover:text-white" data-interactive="" href="#">Accessibility</a>
</div>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
