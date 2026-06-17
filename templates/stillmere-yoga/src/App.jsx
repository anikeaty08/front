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



    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('pointer-events-none', isOpen);
      mobileMenu.classList.toggle('opacity-0', isOpen);
      mobileMenu.classList.toggle('translate-y-3', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('pointer-events-none', 'opacity-0', 'translate-y-3');
      });
    });

    document.querySelectorAll('.journey-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const article = button.closest('article');
        const panel = article.querySelector('.journey-panel');
        const icon = button.querySelector('iconify-icon');
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', String(!isOpen));
        panel.classList.toggle('hidden');
        icon.setAttribute('icon', isOpen ? 'solar:alt-arrow-down-linear' : 'solar:alt-arrow-up-linear');
      });
    });

    if (window.Lenis && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.1
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  


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
      
<main className="min-h-screen overflow-hidden">
<section className="relative min-h-screen border-b border-[#252417]/10 bg-[#252417] text-[#f4f1df]" id="home">
<video aria-label="Yoga retreat at sunrise beside calm water" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60 transition duration-1000 ease-out hover:scale-100" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b450e403-88e0-4b48-8e23-5033326e544f_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779104147402-abf3c3b8-0528-4726-8b11-150c69510af9.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-b from-[#14140d]/55 via-[#14140d]/20 to-[#14140d]/80"></div>
<header className="relative z-20 flex items-center justify-between border-b border-[#f4f1df]/10 px-5 py-5 sm:px-8 lg:px-10">
<a aria-label="Stillmere home" className="group flex items-center gap-2 text-sm font-medium tracking-tight transition duration-300 hover:text-white" href="#home">
<span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f4f1df]/20 bg-[#f4f1df]/10 backdrop-blur-md transition duration-300 group-hover:-rotate-12 group-hover:bg-[#f4f1df] group-hover:text-[#252417]">
<iconify-icon height="18" icon="solar:lotus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
<span className="tracking-tight">Stillmere</span>
</a>
<nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/70 md:flex">
<a className="transition duration-300 hover:text-[#f4f1df]" href="#features">Retreat</a>
<a className="transition duration-300 hover:text-[#f4f1df]" href="#journey">Journey</a>
<a className="transition duration-300 hover:text-[#f4f1df]" href="#about">Teachers</a>
<a className="transition duration-300 hover:text-[#f4f1df]" href="#gallery">Spaces</a>
</nav>
<div className="hidden items-center gap-8 text-xs text-[#f4f1df]/75 md:flex">
<a className="transition duration-300 hover:text-[#f4f1df]" href="tel:+14209024711">+1 420 902 4711</a>
<a className="group inline-flex items-center gap-2 rounded-full border border-[#f4f1df]/20 px-4 py-2 uppercase tracking-[0.16rem] transition duration-300 hover:border-[#f4f1df]/70 hover:bg-[#f4f1df] hover:text-[#252417]" href="#reserve">
            Reserve
            <iconify-icon className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" height="14" icon="solar:arrow-up-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
<button aria-expanded="false" aria-label="Open navigation" className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f1df]/20 bg-[#f4f1df]/5 text-[#f4f1df] backdrop-blur-md transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417] md:hidden" id="menuButton">
<iconify-icon className="transition duration-300 group-hover:scale-90" height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</header>
<div className="pointer-events-none fixed inset-x-4 top-20 z-30 translate-y-3 border border-[#f4f1df]/15 bg-[#252417]/90 p-5 opacity-0 backdrop-blur-xl transition duration-300 md:hidden" id="mobileMenu">
<nav className="grid gap-4 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/75">
<a className="border-b border-[#f4f1df]/10 pb-4 transition hover:text-[#f4f1df]" href="#features">Retreat</a>
<a className="border-b border-[#f4f1df]/10 pb-4 transition hover:text-[#f4f1df]" href="#journey">Journey</a>
<a className="border-b border-[#f4f1df]/10 pb-4 transition hover:text-[#f4f1df]" href="#about">Teachers</a>
<a className="transition hover:text-[#f4f1df]" href="#gallery">Spaces</a>
</nav>
</div>
<div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-end px-5 pb-10 sm:px-8 lg:px-10">
<div className="mb-16 hidden justify-between text-xs text-[#f4f1df]/55 md:flex">
<span>/ seven-night mountain yoga retreat</span>
<span>001</span>
</div>
<div className="grid items-end gap-10 lg:grid-cols-[1.62fr_1fr]">
<div>
<p className="mb-5 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/65">Breathwork / Yoga / Restorative Living</p>
<h1 className="max-w-6xl text-5xl font-light leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" style={{fontFamily: 'Newsreader, serif'}}>
              Return to the Body’s <span className="italic">Quiet Intelligence.</span>
</h1>
</div>
<div className="max-w-sm lg:ml-auto">
<p className="text-sm leading-6 text-[#f4f1df]/75 sm:text-base">
              Stillmere is an intimate yoga retreat shaped for deep rest, precise movement, seasonal nourishment, and the kind of silence that lets life become clear again.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f4f1df] px-5 py-3 text-xs font-medium uppercase tracking-[0.14rem] text-[#252417] transition duration-300 hover:bg-white hover:pr-4" href="#reserve">
                Request dates
                <iconify-icon className="transition duration-300 group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#f4f1df]/20 px-5 py-3 text-xs font-medium uppercase tracking-[0.14rem] text-[#f4f1df] transition duration-300 hover:border-[#f4f1df]/60 hover:bg-[#f4f1df]/10" href="#features">
                View program
                <iconify-icon className="transition duration-300 group-hover:translate-y-1" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-[#252417]/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20" id="features">
<div className="grid gap-10 lg:grid-cols-[0.9fr_2fr]">
<div className="text-xs uppercase tracking-[0.18rem] text-[#252417]/60">/ the retreat offering</div>
<div>
<h2 className="max-w-5xl text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>
            A complete week of <span className="italic">embodied restoration</span> — designed for people who need spacious days, attentive teachers, and a softer relationship with effort.
          </h2>
</div>
</div>
<div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
<article className="group border border-[#252417]/10 bg-[#f4f1df]/35 p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#f4f1df]/70">
<div className="mb-14 flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/45">01</span>
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252417]/10 transition duration-500 group-hover:rotate-6 group-hover:bg-[#252417] group-hover:text-[#f4f1df]">
<iconify-icon height="20" icon="solar:body-shape-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</div>
<h3 className="text-2xl font-normal tracking-tight" style={{fontFamily: 'Newsreader, serif'}}>Daily Yoga Labs</h3>
<p className="mt-4 text-sm leading-6 text-[#252417]/65">
            Morning alignment, evening yin, and intelligent sequencing that helps you move with less force and more awareness.
          </p>
</article>
<article className="group border border-[#252417]/10 bg-[#f4f1df]/35 p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#f4f1df]/70">
<div className="mb-14 flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/45">02</span>
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252417]/10 transition duration-500 group-hover:rotate-6 group-hover:bg-[#252417] group-hover:text-[#f4f1df]">
<iconify-icon height="20" icon="solar:wind-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</div>
<h3 className="text-2xl font-normal tracking-tight" style={{fontFamily: 'Newsreader, serif'}}>Breath &amp; Nervous System</h3>
<p className="mt-4 text-sm leading-6 text-[#252417]/65">
            Guided breathwork, meditation, and restorative rituals for better sleep, emotional regulation, and calm attention.
          </p>
</article>
<article className="group border border-[#252417]/10 bg-[#f4f1df]/35 p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#f4f1df]/70">
<div className="mb-14 flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/45">03</span>
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252417]/10 transition duration-500 group-hover:rotate-6 group-hover:bg-[#252417] group-hover:text-[#f4f1df]">
<iconify-icon height="20" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</div>
<h3 className="text-2xl font-normal tracking-tight" style={{fontFamily: 'Newsreader, serif'}}>Seasonal Nourishment</h3>
<p className="mt-4 text-sm leading-6 text-[#252417]/65">
            Plant-forward meals, herbal infusions, and digestion-friendly menus composed around the rhythm of practice.
          </p>
</article>
<article className="group border border-[#252417]/10 bg-[#f4f1df]/35 p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#f4f1df]/70">
<div className="mb-14 flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/45">04</span>
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252417]/10 transition duration-500 group-hover:rotate-6 group-hover:bg-[#252417] group-hover:text-[#f4f1df]">
<iconify-icon height="20" icon="solar:moon-fog-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
</div>
<h3 className="text-2xl font-normal tracking-tight" style={{fontFamily: 'Newsreader, serif'}}>Private Silence</h3>
<p className="mt-4 text-sm leading-6 text-[#252417]/65">
            Spacious afternoons, cedar saunas, cold river walks, and quiet rooms for journaling, integration, and rest.
          </p>
</article>
</div>
</section>
<section className="border-b border-[#252417]/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20" id="testimonials">
<div className="grid gap-10 lg:grid-cols-[0.75fr_1.55fr_0.8fr]">
<div>
<p className="mb-8 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ proof of return</p>
<div className="max-w-44 overflow-hidden">
<img alt="Retreat guest portrait" className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a1015ff-839f-481d-8b62-2b2b3d3ef269_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a1015ff-839f-481d-8b62-2b2b3d3ef269_3840w.png"/>
<div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.16rem] text-[#252417]/50">
<span>/ guest</span>
<span>0208</span>
</div>
</div>
</div>
<blockquote>
<div className="mb-5 text-4xl leading-none" style={{fontFamily: 'Newsreader, serif'}}>“</div>
<p className="max-w-3xl text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>
            I arrived exhausted and guarded. By the fourth morning, my practice felt honest again — not performative, not forced, just quietly mine.
          </p>
<footer className="mt-8 flex items-center gap-4 text-sm text-[#252417]/70 sm:text-base">
<img alt="Mara Vale avatar" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=crop&amp;w=300&amp;q=85"/>
<span>— Mara V., Creative Director</span>
</footer>
</blockquote>
<div className="flex flex-col justify-between">
<img alt="Meditation practice detail" className="ml-auto aspect-[4/5] w-32 object-cover transition duration-700 hover:scale-105 sm:w-40" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5d577ad-0b9d-49fc-971c-7d3985e25754_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5d577ad-0b9d-49fc-971c-7d3985e25754_3840w.png"/>
<div className="mt-8 grid grid-cols-2 gap-2 text-xs text-[#252417]/65">
<span className="flex items-center gap-2">Founders <iconify-icon height="13" icon="solar:record-circle-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon></span>
<span className="flex items-center gap-2">Teachers <iconify-icon height="13" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon></span>
<span className="flex items-center gap-2">Couples <iconify-icon height="13" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon></span>
<span className="flex items-center gap-2">Seekers <iconify-icon height="13" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon></span>
</div>
</div>
</div>
<div className="mt-16 grid gap-4 md:grid-cols-3">
<article className="group border-t border-[#252417]/10 pt-5 transition duration-300 hover:border-[#252417]/40">
<p className="text-sm leading-6 text-[#252417]/70">“The teaching was exacting without being severe. I learned how to listen before correcting.”</p>
<div className="mt-5 flex items-center gap-3">
<img alt="Guest avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=240&amp;q=85"/>
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">Nina / London</span>
</div>
</article>
<article className="group border-t border-[#252417]/10 pt-5 transition duration-300 hover:border-[#252417]/40">
<p className="text-sm leading-6 text-[#252417]/70">“Meals, silence, movement, and mountain air worked together. Nothing felt accidental.”</p>
<div className="mt-5 flex items-center gap-3">
<img alt="Guest avatar" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">Jonas / Berlin</span>
</div>
</article>
<article className="group border-t border-[#252417]/10 pt-5 transition duration-300 hover:border-[#252417]/40">
<p className="text-sm leading-6 text-[#252417]/70">“The retreat gave me a practical calm I could carry into my actual life.”</p>
<div className="mt-5 flex items-center gap-3">
<img alt="Guest avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=240&amp;q=85"/>
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">Leah / Toronto</span>
</div>
</article>
</div>
</section>
<section className="border-b border-[#252417]/10" id="journey">
<div className="grid gap-8 border-b border-[#252417]/10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.55fr] lg:px-10 lg:py-20">
<div>
<p className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ seven days, one gentle arc</p>
<h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>The Path from Noise to <span className="italic">Presence.</span></h2>
</div>
<div className="max-w-xl lg:ml-auto">
<div className="mb-4 flex gap-1 text-[#252417]">
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
<span className="h-1.5 w-1.5 rounded-full bg-current"></span>
</div>
<p className="text-sm leading-6 text-[#252417]/70 sm:text-base">
            The retreat moves deliberately: arrive, settle, deepen, integrate. Each phase has fewer demands and more attention.
          </p>
</div>
</div>
<div className="divide-y divide-[#252417]/10">
<article className="group px-5 py-8 transition duration-500 hover:bg-[#f4f1df]/35 sm:px-8 lg:px-10">
<button aria-expanded="true" className="journey-toggle grid w-full gap-6 text-left lg:grid-cols-[0.7fr_1.1fr_1fr_auto] lg:items-center">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">Days 01–02 / arrive</span>
<h3 className="text-2xl font-normal tracking-tight sm:text-3xl" style={{fontFamily: 'Newsreader, serif'}}>Settling the System</h3>
<div className="flex flex-wrap gap-2 text-xs text-[#252417]/60">
<span>Tea</span><span>•</span><span>Orientation</span><span>•</span><span>Gentle Flow</span>
</div>
<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252417]/15 transition duration-300 group-hover:bg-[#252417] group-hover:text-[#f4f1df]">
<iconify-icon height="16" icon="solar:alt-arrow-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</button>
<div className="journey-panel mt-6 grid gap-2 md:grid-cols-3">
<img alt="Yoga mat in a quiet room" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6984e203-62c5-4fe1-a7dd-4c405c811bbd_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6984e203-62c5-4fe1-a7dd-4c405c811bbd_3840w.png"/>
<video aria-label="Herbal tea preparation" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" data-aura-generated-video="true" data-aura-video-preset="hover" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6419b76c-1633-416c-8013-f044dc825a07_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779104208201-a5a36f21-3541-4189-bcb4-777383fdba5d.mp4"></video>
<img alt="Retreat landscape" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8b8e531-19ee-4acb-a3d9-861a80d43887_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8b8e531-19ee-4acb-a3d9-861a80d43887_3840w.png"/>
</div>
</article>
<article className="group px-5 py-8 transition duration-500 hover:bg-[#f4f1df]/35 sm:px-8 lg:px-10">
<button aria-expanded="false" className="journey-toggle grid w-full gap-6 text-left lg:grid-cols-[0.7fr_1.1fr_1fr_auto] lg:items-center">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">Days 03–05 / deepen</span>
<h3 className="text-2xl font-normal tracking-tight sm:text-3xl" style={{fontFamily: 'Newsreader, serif'}}>Practice with Precision</h3>
<div className="flex flex-wrap gap-2 text-xs text-[#252417]/60">
<span>Alignment</span><span>•</span><span>Breath</span><span>•</span><span>Reflection</span>
</div>
<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252417]/15 transition duration-300 group-hover:bg-[#252417] group-hover:text-[#f4f1df]">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</button>
<div className="journey-panel hidden mt-6 grid gap-2 md:grid-cols-3">
<img alt="Yoga class practice" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/553e7281-1683-4cfb-be03-f6494470e513_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/553e7281-1683-4cfb-be03-f6494470e513_3840w.png"/>
<img alt="Meditation" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8be5c5a4-0450-4b2f-a254-58706adb9d89_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8be5c5a4-0450-4b2f-a254-58706adb9d89_3840w.png"/>
<img alt="Journal on linen" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f0e796a-2d3d-4edb-b655-663160aad13f_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f0e796a-2d3d-4edb-b655-663160aad13f_3840w.png"/>
</div>
</article>
<article className="group px-5 py-8 transition duration-500 hover:bg-[#f4f1df]/35 sm:px-8 lg:px-10">
<button aria-expanded="false" className="journey-toggle grid w-full gap-6 text-left lg:grid-cols-[0.7fr_1.1fr_1fr_auto] lg:items-center">
<span className="text-xs uppercase tracking-[0.16rem] text-[#252417]/50">Days 06–07 / return</span>
<h3 className="text-2xl font-normal tracking-tight sm:text-3xl" style={{fontFamily: 'Newsreader, serif'}}>Integration &amp; Departure</h3>
<div className="flex flex-wrap gap-2 text-xs text-[#252417]/60">
<span>Ritual</span><span>•</span><span>Plan</span><span>•</span><span>Rest</span>
</div>
<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#252417]/15 transition duration-300 group-hover:bg-[#252417] group-hover:text-[#f4f1df]">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
</button>
<div className="journey-panel hidden mt-6 grid gap-2 md:grid-cols-3">
<img alt="Quiet breakfast" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4595783-c6ef-4367-9d0e-549019e80cad_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4595783-c6ef-4367-9d0e-549019e80cad_3840w.png"/>
<img alt="Sunrise landscape" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"/>
<img alt="Calm portrait after retreat" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.015]" src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"/>
</div>
</article>
</div>
</section>
<section className="border-b border-[#252417]/10 px-5 py-14 sm:px-8 lg:px-10" id="trusted">
<div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<p className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ trusted by quiet leaders from</p>
<h2 className="text-3xl font-normal tracking-tight sm:text-4xl" style={{fontFamily: 'Newsreader, serif'}}>A retreat for high-attention lives.</h2>
</div>
<p className="max-w-md text-sm leading-6 text-[#252417]/65">
          Guests join us from global teams, creative studios, research labs, and founder communities seeking steadier presence.
        </p>
</div>
<div className="grid grid-cols-2 gap-px overflow-hidden border border-[#252417]/10 bg-[#252417]/10 sm:grid-cols-3 lg:grid-cols-6">
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:nasa" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:spacex" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:uber" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:visa" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:grab" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:bose" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:discover" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:dji" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:nikon" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="simple-icons:sony" width="64"></iconify-icon></div>
<div className="group flex min-h-32 items-center justify-center bg-[#eeede2] text-[#252417]/45 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]"><iconify-icon className="transition duration-500 group-hover:scale-105" height="64" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon></div>
</div>
</section>
<section className="border-b border-[#252417]/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20" id="about">
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.35fr_0.85fr]">
<div>
<p className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ about stillmere</p>
<h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>A house for precise practice and <span className="italic">deep permission.</span></h2>
</div>
<div>
<p className="text-sm leading-6 text-[#252417]/70 sm:text-base">
            Stillmere is led by a small faculty of yoga teachers, somatic practitioners, chefs, and retreat hosts. We combine careful movement education with restorative silence, warm hospitality, and nature-led pacing.
          </p>
<div className="mt-10 grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-normal tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>14</div>
<p className="mt-1 text-xs uppercase tracking-[0.14rem] text-[#252417]/55">Guests per retreat</p>
</div>
<div>
<div className="text-4xl font-normal tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>92%</div>
<p className="mt-1 text-xs uppercase tracking-[0.14rem] text-[#252417]/55">Report softer sleep</p>
</div>
</div>
</div>
<div className="grid gap-3">
<div className="group flex items-center gap-4 border border-[#252417]/10 bg-[#f4f1df]/35 p-4 transition duration-300 hover:bg-[#f4f1df]">
<img alt="Yoga teacher portrait" className="h-14 w-14 rounded-full object-cover grayscale transition duration-300 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?auto=format&amp;fit=crop&amp;w=300&amp;q=85"/>
<div>
<h3 className="text-sm font-medium">Elian Moor</h3>
<p className="text-xs text-[#252417]/55">Movement Director</p>
</div>
</div>
<div className="group flex items-center gap-4 border border-[#252417]/10 bg-[#f4f1df]/35 p-4 transition duration-300 hover:bg-[#f4f1df]">
<img alt="Breathwork teacher portrait" className="h-14 w-14 rounded-full object-cover grayscale transition duration-300 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=300&amp;q=85"/>
<div>
<h3 className="text-sm font-medium">Sora Vale</h3>
<p className="text-xs text-[#252417]/55">Breathwork Guide</p>
</div>
</div>
<div className="group flex items-center gap-4 border border-[#252417]/10 bg-[#f4f1df]/35 p-4 transition duration-300 hover:bg-[#f4f1df]">
<img alt="Retreat chef portrait" className="h-14 w-14 rounded-full object-cover grayscale transition duration-300 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&amp;fit=crop&amp;w=300&amp;q=85"/>
<div>
<h3 className="text-sm font-medium">Noam Iris</h3>
<p className="text-xs text-[#252417]/55">Seasonal Chef</p>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-[#252417]/10" id="gallery">
<div className="grid gap-8 border-b border-[#252417]/10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.55fr] lg:px-10 lg:py-20">
<div>
<p className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#252417]/50">/ the retreat house</p>
<h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>Spaces that Invite the Body to <span className="italic">Exhale.</span></h2>
</div>
<p className="max-w-xl text-sm leading-6 text-[#252417]/70 sm:text-base lg:ml-auto">
          Practice rooms open to the trees. Bedrooms are spare and warm. Meals are shared beneath soft light. Every detail is quiet by design.
        </p>
</div>
<div className="grid gap-px bg-[#252417]/10 md:grid-cols-2 lg:grid-cols-4">
<figure className="group relative overflow-hidden bg-[#eeede2]">
<img alt="Yoga studio with natural light" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&amp;fit=crop&amp;w=1200&amp;q=90"/>
<figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#14140d]/70 to-transparent p-5 text-xs uppercase tracking-[0.16rem] text-[#f4f1df] opacity-0 transition duration-500 group-hover:opacity-100">
<span>Practice Hall</span><span>01</span>
</figcaption>
</figure>
<figure className="group relative overflow-hidden bg-[#eeede2] lg:mt-16">
<img alt="Retreat spa and sauna detail" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&amp;fit=crop&amp;w=1200&amp;q=90"/>
<figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#14140d]/70 to-transparent p-5 text-xs uppercase tracking-[0.16rem] text-[#f4f1df] opacity-0 transition duration-500 group-hover:opacity-100">
<span>Cedar Sauna</span><span>02</span>
</figcaption>
</figure>
<figure className="group relative overflow-hidden bg-[#eeede2]">
<img alt="Mountain path near retreat" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;w=1200&amp;q=90"/>
<figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#14140d]/70 to-transparent p-5 text-xs uppercase tracking-[0.16rem] text-[#f4f1df] opacity-0 transition duration-500 group-hover:opacity-100">
<span>Morning Trail</span><span>03</span>
</figcaption>
</figure>
<figure className="group relative overflow-hidden bg-[#eeede2] lg:mt-16">
<img alt="Seasonal retreat meal" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&amp;fit=crop&amp;w=1200&amp;q=90"/>
<figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#14140d]/70 to-transparent p-5 text-xs uppercase tracking-[0.16rem] text-[#f4f1df] opacity-0 transition duration-500 group-hover:opacity-100">
<span>Seasonal Table</span><span>04</span>
</figcaption>
</figure>
</div>
</section>
<footer className="bg-[#252417] text-[#f4f1df]" id="reserve">
<section className="border-b border-[#f4f1df]/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
<div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
<div>
<p className="mb-4 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">/ reserve your week of quiet</p>
<h2 className="max-w-md text-4xl font-normal leading-tight tracking-tight sm:text-5xl" style={{fontFamily: 'Newsreader, serif'}}>
              Begin the Return to <span className="italic">Stillness.</span>
</h2>
<a className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#f4f1df] px-5 py-3 text-xs font-medium uppercase tracking-[0.14rem] text-[#252417] transition duration-300 hover:bg-white" href="mailto:arrival@stillmere.house">
              Request availability
              <iconify-icon className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" height="16" icon="solar:arrow-up-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div className="transition duration-300 hover:text-white">
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Location</h3>
<p className="text-sm leading-6 sm:text-base">1182 Vale House Rd.<br/>North Ashbury, 48106</p>
</div>
<div className="transition duration-300 hover:text-white">
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Call us</h3>
<p className="text-sm leading-6 sm:text-base">+1 420 902 4711</p>
</div>
<div className="transition duration-300 hover:text-white">
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Next retreats</h3>
<p className="text-sm leading-6 sm:text-base">May 12 — 19<br/>June 04 — 11</p>
</div>
<div className="transition duration-300 hover:text-white">
<h3 className="mb-3 text-xs uppercase tracking-[0.18rem] text-[#f4f1df]/50">Included</h3>
<p className="text-sm leading-6 sm:text-base">Practice, lodging,<br/>meals, rituals</p>
</div>
</div>
</div>
<div className="mt-16 flex flex-col justify-between gap-8 border-t border-[#f4f1df]/10 pt-8 lg:flex-row lg:items-end">
<div className="flex gap-3">
<a aria-label="Instagram" className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#f4f1df]/20 text-[#f4f1df]/80 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]" href="#">
<iconify-icon className="transition duration-300 group-hover:scale-110" height="16" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a aria-label="Newsletter" className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#f4f1df]/20 text-[#f4f1df]/80 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]" href="#">
<iconify-icon className="transition duration-300 group-hover:scale-110" height="16" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a aria-label="Maps" className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#f4f1df]/20 text-[#f4f1df]/80 transition duration-300 hover:bg-[#f4f1df] hover:text-[#252417]" href="#">
<iconify-icon className="transition duration-300 group-hover:scale-110" height="16" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-4 text-xs text-[#f4f1df]/45 sm:flex-row sm:gap-10">
<span>/ softness is not escape, but return</span>
<span>©2026 Stillmere. All rights reserved.</span>
</div>
</div>
</section>
<section className="flex flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
<a className="group flex items-center gap-2 text-base font-medium tracking-tight" href="#home">
<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f4f1df]/20 transition duration-300 group-hover:bg-[#f4f1df] group-hover:text-[#252417]">
<iconify-icon height="20" icon="solar:lotus-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<span>Stillmere</span>
</a>
<nav className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.14rem] text-[#f4f1df]/60">
<a className="text-[#f4f1df] transition duration-300 hover:text-white" href="#home">Home</a>
<a className="transition duration-300 hover:text-white" href="#features">Retreat</a>
<a className="transition duration-300 hover:text-white" href="#testimonials">Stories</a>
<a className="transition duration-300 hover:text-white" href="#journey">Journey</a>
<a className="transition duration-300 hover:text-white" href="#about">About</a>
<a className="transition duration-300 hover:text-white" href="#gallery">Gallery</a>
</nav>
</section>
</footer>
</main>


    </>
  );
}
