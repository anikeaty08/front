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



    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && window.gsap && window.ScrollTrigger && window.Lenis) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: "power3.out" });

      const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.15
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // ---- On-load: brand preloader -> hero entrance ----
      const axLoader = document.getElementById("ax-loader");

      if (lenis && axLoader) {
        lenis.stop();
      }

      const loadTl = gsap.timeline({ paused: true });

      loadTl
        .from("header", { y: -24, opacity: 0, duration: 0.75 })
        .from(".hero-copy > *", { y: 28, opacity: 0, stagger: 0.09, duration: 0.8 }, "-=0.35")
        .from(".hero-card", { y: 90, opacity: 0, rotate: 0, scale: 0.94, stagger: 0.08, duration: 1.05 }, "-=0.55")
        .from(".hero-cta", { scale: 0, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".hero-wordmark", { yPercent: 18, opacity: 0, duration: 1 }, "-=0.7")
        .from(".hero-meta", { y: 24, opacity: 0, duration: 0.75 }, "-=0.65");

      if (axLoader) {
        const brandEl = axLoader.querySelector(".ax-loader__brand");
        const barEl = axLoader.querySelector(".ax-loader__bar");
        const metaEl = axLoader.querySelector(".ax-loader__meta");
        const pctEl = axLoader.querySelector(".ax-loader__pct");
        const counter = { v: 0 };

        gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete() {
            axLoader.remove();
            lenis.start();
            ScrollTrigger.refresh();
          }
        })
          .to(brandEl, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out" }, 0)
          .to(metaEl, { opacity: 1, duration: 0.6 }, 0.3)
          .to(barEl, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0.2)
          .to(counter, {
            v: 100,
            duration: 1.1,
            ease: "power2.inOut",
            onUpdate() {
              pctEl.textContent = String(Math.round(counter.v)).padStart(3, "0");
            }
          }, 0.2)
          .to([brandEl, metaEl], { opacity: 0, y: -20, filter: "blur(8px)", duration: 0.5, ease: "power2.in" }, "+=0.15")
          .to(axLoader, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "<0.1")
          .add(() => { loadTl.play(); }, "<0.35");
      } else {
        loadTl.play();
        lenis.start();
      }

      // Universal soft reveals
      gsap.utils.toArray("[data-reveal], .reveal").forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: .9,
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Hero pinned cinematic transformation
      const hero = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=115%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      hero
        .to(".hero-wordmark", { yPercent: -50, scale: 1.07, opacity: .86, duration: 1 }, 0)
        .to(".hero-copy", { y: -60, opacity: .42, duration: 1 }, 0)
        .to(".hero-meta", { y: -34, opacity: .72, duration: 1 }, 0)
        .to(".hero-stack", { y: -70, scale: .94, duration: 1 }, 0)
        .to(".hero-card:nth-child(1)", { x: -46, y: 34, rotate: -24, duration: 1 }, 0)
        .to(".hero-card:nth-child(2)", { x: 42, y: -34, rotate: 20, duration: 1 }, 0)
        .to(".hero-card:nth-child(3)", { x: 54, y: 22, rotate: 22, duration: 1 }, 0)
        .to(".hero-card:nth-child(4)", { x: 8, y: 12, rotate: 0, duration: 1 }, 0);

      // Studio pinned word rhythm
      const brand = gsap.timeline({
        scrollTrigger: {
          trigger: ".brand-section",
          start: "top top",
          end: "+=110%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      brand
        .fromTo(".brand-drift", { xPercent: 4 }, { xPercent: -22, duration: 1 }, 0)
        .fromTo(".brand-word", {
          opacity: 0,
          y: 80,
          x: (i) => (i % 2 ? -90 : 90)
        }, {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: .08,
          duration: .6
        }, .08)
        .to(".brand-word", {
          x: (i) => (i % 2 ? -34 : 34),
          stagger: .04,
          duration: .45
        }, .64);

      // Services reveal and image strip motion
      gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 65%",
          end: "bottom 30%",
          scrub: 1
        }
      })
        .from(".services-copy", { y: 90, opacity: 0, duration: .35 })
        .from(".service-card", { y: 42, opacity: 0, stagger: .08, duration: .45 }, .16)
        .to(".strip-image", { xPercent: -14, scale: 1.22, duration: .8 }, 0);

      // Parallax media
      gsap.utils.toArray(".parallax-image").forEach((item) => {
        const isFast = item.classList.contains("parallax-fast");
        const section = item.closest("section");

        gsap.fromTo(item, { y: isFast ? 90 : 50 }, {
          y: isFast ? -120 : -70,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        const img = item.querySelector("img");
        if (img) {
          gsap.fromTo(img, { scale: 1.18, yPercent: isFast ? -8 : -5 }, {
            scale: 1.04,
            yPercent: isFast ? 8 : 5,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });

      // Stats stagger
      gsap.from(".stat-grid .note-card", {
        y: 52,
        opacity: 0,
        stagger: .08,
        duration: .8,
        scrollTrigger: {
          trigger: ".numbers-intro",
          start: "top 58%",
          toggleActions: "play none none reverse"
        }
      });

      // Archive scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: ".archive-scroll-section",
          start: "top 75%",
          end: "bottom 20%",
          scrub: 1
        }
      })
        .from(".archive-title", { y: 80, opacity: 0, duration: 0.45 }, 0)
        .from(".archive-card", {
          y: 100,
          opacity: 0,
          rotate: (i) => [-3, 2, -2, 3, -1][i],
          stagger: 0.08,
          duration: 0.65
        }, 0.12)
        .to(".archive-gallery", { xPercent: -18, duration: 1 }, 0.25)
        .to(".archive-card img", { scale: 1.18, duration: 1 }, 0.25);

      // Work pinned number
      const work = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      work
        .from(".work-copy", { x: -80, opacity: 0, duration: .4 }, 0)
        .fromTo(".masked-number", { scale: .82, y: 80, backgroundPosition: "50% 28%" }, { scale: 1.1, y: -50, backgroundPosition: "50% 74%", duration: 1 }, 0)
        .from(".project-card", { y: 80, opacity: 0, rotate: 0, stagger: .1, duration: .4 }, .15)
        .to(".project-card", { y: -40, x: (i) => (i ? 42 : -34), duration: .8 }, .45);

      // Field notes editorial
      gsap.timeline({
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top 72%",
          end: "bottom 28%",
          scrub: 1
        }
      })
        .fromTo(".partners-heading", { yPercent: 10, opacity: 0.06 }, { yPercent: -16, opacity: 0.12, duration: 1 }, 0)
        .from(".partners-section .section-label", { y: 24, opacity: 0, duration: 0.35 }, 0.08)
        .from(".partners-section h2:not(.partners-heading)", { y: 70, opacity: 0, duration: 0.55 }, 0.12)
        .from(".partner-logos .note-card", {
          y: 100,
          opacity: 0,
          rotate: (i) => [-2, 2, -1, 1, -2][i],
          stagger: 0.08,
          duration: 0.7
        }, 0.2)
        .to(".partner-logos .note-card", {
          y: (i) => [-24, 18, -12, 14, -18][i],
          stagger: 0.04,
          duration: 0.55
        }, 0.62);

      // Timeline process
      gsap.timeline({
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1
        }
      })
        .to(".timeline-bar", { scaleX: 1, stagger: .12, duration: .6 }, 0)
        .from(".process-columns > div", { y: 38, opacity: 0, stagger: .08, duration: .45 }, .25);

      // Pricing pin on desktop only
      gsap.timeline({
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top top",
          end: "+=80%",
          scrub: 1,
          pin: window.innerWidth >= 768,
          anticipatePin: 1
        }
      })
        .from(".pricing-copy", { y: 50, opacity: 0, duration: .35 }, 0)
        .from(".pricing-card", { x: 110, opacity: 0, stagger: .16, duration: .55 }, .12);

      // Contact / footer
      gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 62%",
          end: "bottom 34%",
          scrub: 1
        }
      })
        .from(".contact-form > *", { y: 36, opacity: 0, stagger: .07, duration: .45 }, 0)
        .from(".faq-row", { y: 38, opacity: 0, stagger: .08, duration: .45 }, .12);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 72%",
          end: "bottom bottom",
          scrub: 1
        }
      })
        .fromTo(".footer-wordmark", { scale: 0.9, y: 120, opacity: 0.35 }, { scale: 1, y: 0, opacity: 1, duration: 0.9 }, 0)
        .from(".footer-links", { y: 80, opacity: 0, duration: 0.5 }, 0.2)
        .from(".footer-links h3", { y: 60, opacity: 0, letterSpacing: "-0.12em", duration: 0.45 }, 0.3)
        .from(".footer-links a", { y: 18, opacity: 0, stagger: 0.04, duration: 0.3 }, 0.45);

      window.addEventListener("load", () => ScrollTrigger.refresh());
      window.addEventListener("resize", () => ScrollTrigger.refresh());

    } else {
      document.getElementById("ax-loader")?.remove();

      document.querySelectorAll(".reveal, [data-reveal]").forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });

      document.querySelectorAll(".timeline-bar").forEach((item) => {
        item.style.transform = "scaleX(1)";
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div aria-hidden="true" className="noise"></div>
<div aria-hidden="true" className="grid-veil"></div>
<div aria-hidden="true" className="page-rail">Launch OS / Axisform</div>
<div aria-hidden="true" className="ax-loader" id="ax-loader">
<div className="ax-loader__inner">
<div className="ax-loader__brand">
<span>Axisform</span><sup>®</sup><span className="ax-dot"></span>
</div>
<div className="ax-loader__track">
<div className="ax-loader__bar"></div>
</div>
<div className="ax-loader__meta">
<span className="ax-loader__pct">000</span>
<span>Launch OS / Axisform</span>
</div>
</div>
</div>
<header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-8 lg:px-12">
<a className="text-lg font-semibold tracking-[-0.055em] text-[#f3f0e8] md:text-xl" href="#home">
      Axisform<sup className="ml-0.5 text-[10px]">®</sup>
</a>
<nav className="hidden items-center gap-11 text-xs font-bold text-[#f3f0e8]/82 md:flex">
<a className="nav-link" href="#work"><span className="mr-5 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a1f] align-middle"></span>Systems</a>
<a className="nav-link" href="#studio">Signals</a>
<a className="nav-link" href="#pricing">Engage</a>
<a className="nav-link" href="#contact">Brief</a>
</nav>
<button aria-label="Open menu" className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden">
<i className="h-4 w-4" data-lucide="menu"></i>
</button>
</header>
<main className="relative z-10 overflow-hidden" id="home">

<section className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12">
<div className="hero-copy relative z-20 max-w-[360px]">
<p className="section-label mb-10">Axisform® Studio</p>
<p className="max-w-[340px] text-[21px] font-medium leading-[1.45] tracking-[-0.045em] text-[#f3f0e8]/76 md:text-[25px]">
<span className="text-[#f3f0e8]">Axisform®</span> builds launch operating systems for founders, product teams, and cultural projects that need a sharper public signal before the next move.
        </p>
<a className="magnetic-button mt-14 inline-flex items-center gap-5 rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f3f0e8]" href="#work">
          View Selected Work
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5a1f] text-[#060706]">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
</div>
<div className="hero-stack absolute left-1/2 top-[48%] z-10 h-[430px] w-[310px] -translate-x-1/2 -translate-y-1/2 md:h-[560px] md:w-[430px] lg:h-[620px] lg:w-[480px]">
<div className="hero-card absolute inset-0 -translate-x-20 translate-y-12 -rotate-[17deg] rounded-[20px] bg-[#151713]">
<div className="h-full w-full rounded-[20px] bg-gradient-to-br from-[#ff5a1f]/30 via-transparent to-black"></div>
</div>
<div className="hero-card absolute inset-0 translate-x-20 translate-y-10 rotate-[13deg] rounded-[20px] bg-[#d8cbb5]">
<div className="absolute right-10 top-24 font-serif text-[110px] text-[#ff5a1f]/80">A</div>
<div className="absolute bottom-12 left-10 h-32 w-32 rounded-full border border-black/20"></div>
</div>
<div className="hero-card absolute inset-0 translate-x-32 translate-y-20 rotate-[18deg] rounded-[20px] bg-[#080808]">
<div className="h-full w-full rounded-[20px] bg-[linear-gradient(135deg,rgba(255,255,255,.16),transparent_45%)]"></div>
</div>
<div className="hero-card absolute inset-0 rotate-[4deg] overflow-hidden rounded-[20px] bg-[#201714]">
<img alt="Editorial studio portrait" className="h-full w-full object-cover saturate-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1be70dfc-949c-405c-893d-614e400fb2ca_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-orange-950/10"></div>
<div className="absolute inset-0 bg-[#ff5a1f]/10 mix-blend-overlay"></div>
</div>
<button aria-label="Explore" className="hero-cta absolute right-[-22px] top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-2xl backdrop-blur transition duration-300 hover:scale-110 hover:bg-[#ff5a1f]">
<i className="h-7 w-7" data-lucide="arrow-right"></i>
</button>
</div>
<h1 className="hero-wordmark wordmark pointer-events-none absolute -bottom-5 left-2 z-0 select-none text-[23vw] font-black leading-none text-[#e8e0d4] md:-bottom-12 lg:left-6 lg:text-[20vw]">
        Axisform
      </h1>
<div className="hero-meta glass absolute bottom-10 right-5 z-20 hidden w-[270px] rounded-[24px] p-6 md:right-8 lg:block">
<div className="mb-8 text-2xl text-[#ff5a1f]">✳</div>
<p className="text-[19px] leading-[1.25] tracking-[-0.04em]">
          Branding, digital experiences, and motion systems.
        </p>
<div className="mt-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/45">
<span>Global Studio</span>
<span className="h-1 w-1 rounded-full bg-[#ff5a1f]"></span>
<span>Field 04 / 2026</span>
</div>
</div>
</section>

<section className="brand-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12" id="studio">
<h2 className="brand-drift wordmark pointer-events-none absolute -top-16 left-0 text-[6rem] font-black leading-none text-[#f3f0e8]/10 sm:text-[9rem] md:text-[13rem] lg:text-[18rem]">
        Axisform®
      </h2>
<div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
<div className="md:col-span-4">
<p className="section-label">Studio Method</p>
<p className="mt-8 max-w-sm text-sm font-medium leading-[1.7] text-[#f3f0e8]/56" data-reveal="">
            The studio works in loops: read the field, reduce the noise, ship the system, then sharpen what survives contact.
          </p>
</div>
<div className="brand-words grid gap-6 md:col-span-7 md:col-start-6">
<p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">observe</p>
<p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">compress</p>
<p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">prototype.</p>
<p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">publish</p>
<p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">repeat</p>
</div>
</div>
</section>

<section className="services-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
<div className="absolute left-1/2 top-0 h-[360px] w-[78%] -translate-x-1/2 overflow-hidden rounded-b-[32px] border-x border-b border-[#f3f0e8]/10 md:h-[480px] lg:h-[620px]">
<img alt="Green atmospheric strip" className="strip-image h-full w-full object-cover object-center opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b2725ca-5b05-49fe-b2ff-9de382bf26ef_1600w.webp"/>
</div>
<div className="grid min-h-screen items-center gap-14 md:grid-cols-12">
<div className="md:col-span-3" data-reveal="">
<p className="section-label mb-20">Operating Stack</p>
<p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
            For teams preparing a launch, funding round, product shift, or public repositioning.
          </p>
</div>
<div className="md:col-span-6 md:col-start-4">
<p className="services-copy text-4xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-6xl lg:text-7xl">
            We design the launch layer around a product.
          </p>
<div className="mt-10 grid gap-3 sm:grid-cols-2">
<div className="service-card glass rounded-[28px] p-6">
<p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">01</p>
<h3 className="text-2xl font-semibold tracking-[-0.05em]">Signal Audit</h3>
<p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Find where the story is unclear and what the market should remember.</p>
</div>
<div className="service-card glass rounded-[28px] p-6">
<p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">02</p>
<h3 className="text-2xl font-semibold tracking-[-0.05em]">Narrative Kernel</h3>
<p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Compress positioning into a clear structure your team can reuse.</p>
</div>
<div className="service-card glass rounded-[28px] p-6">
<p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">03</p>
<h3 className="text-2xl font-semibold tracking-[-0.05em]">Launch Interface</h3>
<p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Build pages, decks, and product surfaces with one visual logic.</p>
</div>
<div className="service-card glass rounded-[28px] p-6">
<p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">04</p>
<h3 className="text-2xl font-semibold tracking-[-0.05em]">Operator Kit</h3>
<p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">Transfer motion rules, components, and launch material to your team.</p>
</div>
</div>
</div>
<div className="md:col-span-2 md:col-start-11" data-reveal="">
<p className="mb-6 text-xs font-bold uppercase tracking-[0.12em]">Open Intake <span aria-hidden="true">→</span></p>
<p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
            The output is not a moodboard. It is a working kit for launch decisions.
          </p>
</div>
</div>
</section>

<section className="numbers-intro relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
<figure className="parallax-image parallax-slow pointer-events-none right-4 top-32 h-28 w-40 rotate-[7deg] md:right-8 md:top-28 md:h-48 md:w-72">
<img alt="Abstract architecture detail" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07705938-ccca-4133-9f21-1b3f01af3463_3840w.png"/>
</figure>
<figure className="parallax-image parallax-fast pointer-events-none bottom-24 left-4 h-24 w-36 rotate-[-9deg] md:bottom-20 md:left-10 md:h-40 md:w-60">
<img alt="Landscape color field" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b07ad449-1292-4c6b-aff4-6ce345d9fa12_3840w.png"/>
</figure>
<div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
<div className="md:col-span-3" data-reveal="">
<p className="section-label mb-8">Launch Telemetry</p>
<p className="max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
            The public layer should reduce explanation time.
          </p>
<a className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]" href="#contact">Send the brief <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
<div className="md:col-span-5 md:col-start-5" data-reveal="">
<h2 className="text-6xl font-semibold leading-[0.92] tracking-[-0.08em] md:text-8xl lg:text-9xl">Launch<br/>Telemetry</h2>
</div>
<div className="stat-grid md:col-span-3 md:col-start-10">
<div className="grid grid-cols-2 gap-4">
<div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">04</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">operating loops</p></div>
<div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">21</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">launch windows</p></div>
<div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">06</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">week cycles</p></div>
<div className="note-card glass rounded-[24px] p-5"><p className="text-5xl font-semibold tracking-[-0.06em]">90</p><p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">day adoption map</p></div>
</div>
</div>
</div>
</section>

<section className="archive-scroll-section relative overflow-hidden px-5 py-24 md:px-8 lg:px-12">
<div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
<div className="md:col-span-3">
<p className="section-label">Field Archive</p>
<p className="mt-8 max-w-64 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
            Visual fragments from launch systems, product surfaces, and studio research.
          </p>
</div>
<div className="md:col-span-8 md:col-start-5">
<h2 className="archive-title text-[54px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[86px] lg:text-[112px]">
            Signals collected before the system takes shape.
          </h2>
</div>
</div>
<div className="archive-gallery mt-20 flex gap-5 will-change-transform">
<figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
<img alt="Archive image" className="h-full w-full object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07705938-ccca-4133-9f21-1b3f01af3463_3840w.png"/>
</figure>
<figure className="archive-card mt-20 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
<img alt="Archive image" className="h-full w-full object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b07ad449-1292-4c6b-aff4-6ce345d9fa12_3840w.png"/>
</figure>
<figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
<img alt="Archive image" className="h-full w-full object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e4228e-37c5-45bc-a352-ae8b41b6d71b_3840w.png"/>
</figure>
<figure className="archive-card mt-28 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
<img alt="Archive image" className="h-full w-full object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92ae1957-bb5d-4fef-b4fe-26a43ca6c254_3840w.png"/>
</figure>
<figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
<img alt="Archive image" className="h-full w-full object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1f39209-cbcc-4857-bc13-744562e16d78_3840w.png"/>
</figure>
</div>
</section>

<section className="work-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12" id="work">
<div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
<div className="work-copy md:col-span-3">
<p className="section-label mb-8">Systems</p>
<h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-6xl">04 Operating Loops</h2>
<p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
            The work is organized as a repeatable loop: signal, frame, interface, deploy. Each loop leaves a usable artifact behind.
          </p>
<a className="magnetic-button mt-8 inline-flex rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]" href="#contact">Study the Loop</a>
</div>
<div className="relative md:col-span-7 md:col-start-4">
<div className="relative flex min-h-[520px] items-center justify-center">
<span className="masked-number text-[13rem] font-black leading-none tracking-[-0.09em] md:text-[24rem] lg:text-[29rem]" style={{-NumberImage: 'url(\'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp'}}>04</span>
<img alt="Project preview one" className="project-card absolute left-0 top-14 hidden h-44 w-72 rotate-[-14deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf697fb6-c82a-4c34-95ec-cbfc47b8622f_3840w.png"/>
<img alt="Project preview two" className="project-card absolute right-4 top-6 hidden h-44 w-72 rotate-[10deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/095918f0-0508-4c1f-867f-ec46e9f0720d_3840w.png"/>
</div>
</div>
<div className="md:col-span-2" data-reveal="">
<p className="text-xs font-bold uppercase tracking-[0.12em] text-[#f3f0e8]/62">Loop Archive</p>
<p className="mt-8 text-sm font-medium leading-[1.7] text-[#f3f0e8]/50">Narrative Systems, Product Surfaces, Founder Material</p>
</div>
</div>
</section>

<section className="partners-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
<h2 className="partners-heading pointer-events-none absolute left-5 top-16 text-[18vw] font-black leading-none tracking-[-0.1em] text-[#f3f0e8]/[0.055] md:left-8 md:top-10 md:text-[15vw]">
        Field Notes
      </h2>
<figure className="parallax-image parallax-slow pointer-events-none absolute right-5 top-28 hidden h-44 w-72 rotate-[5deg] overflow-hidden rounded-[28px] border border-[#f3f0e8]/10 md:block lg:right-14 lg:h-56 lg:w-96">
<img alt="Studio workspace detail" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92ae1957-bb5d-4fef-b4fe-26a43ca6c254_3840w.png"/>
</figure>
<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center">
<div className="mb-16 grid gap-8 md:grid-cols-12">
<div className="md:col-span-3">
<p className="section-label">Field Notes</p>
</div>
<div className="md:col-span-7 md:col-start-5">
<h2 className="text-[52px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[84px] lg:text-[104px]">
              Five rules for making a launch easier to understand.
            </h2>
</div>
</div>
<div className="partner-logos grid grid-cols-1 gap-5 md:grid-cols-12">
<article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#f3f0e8] p-8 text-[#060706] md:col-span-5">
<div className="absolute -right-6 -top-8 text-[180px] font-black leading-none tracking-[-0.12em] text-[#060706]/[0.06]">01</div>
<div className="relative z-10 flex h-full flex-col justify-between">
<div>
<p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/45">01 / Signal</p>
<h3 className="mt-12 max-w-sm text-[50px] font-black leading-[0.88] tracking-[-0.08em] md:text-[64px]">Make the story repeatable.</h3>
</div>
<p className="max-w-sm text-base font-semibold leading-[1.55] text-[#060706]/62">Reduce the story to what buyers, investors, and users can repeat.</p>
</div>
</article>
<article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#111612] md:col-span-4">
<img alt="Structural facade detail" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e4228e-37c5-45bc-a352-ae8b41b6d71b_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#060706] via-[#060706]/25 to-transparent"></div>
<div className="absolute bottom-7 left-7 right-7">
<p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/50">02 / Interface</p>
<h3 className="mt-5 text-[34px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8]">The first screen should explain less.</h3>
</div>
</article>
<article className="note-card relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-white/[0.035] p-7 md:col-span-3">
<p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">Index</p>
<div className="mt-10 space-y-5">
<div className="border-b border-[#f3f0e8]/10 pb-5"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">03</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Motion</p></div>
<div className="border-b border-[#f3f0e8]/10 pb-5"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">04</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Handoff</p></div>
<div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">05</p><p className="mt-2 text-2xl font-black tracking-[-0.06em]">Adoption</p></div>
</div>
<div className="absolute bottom-7 left-7 right-7">
<p className="text-sm font-medium leading-[1.65] text-[#f3f0e8]/56">Movement, handoff, and adoption are treated as one system.</p>
</div>
</article>
<article className="note-card group relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#0c0f0c] p-8 md:col-span-7">
<div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#f3f0e8]/10"></div>
<div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-[#f3f0e8]/10"></div>
<div className="relative z-10 grid gap-8 md:grid-cols-12">
<div className="md:col-span-4">
<p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">04 / Handoff</p>
</div>
<div className="md:col-span-8">
<h3 className="max-w-2xl text-[44px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[64px]">Build once. Reuse after launch.</h3>
<p className="mt-7 max-w-lg text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Give teams reusable material, not fragile one-off compositions.</p>
</div>
</div>
</article>
<article className="note-card relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#ff5a1f] p-8 text-[#060706] md:col-span-5">
<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#060706]/10"></div>
<p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/50">05 / Adoption</p>
<h3 className="mt-12 max-w-sm text-[42px] font-black leading-[0.9] tracking-[-0.08em] md:text-[58px]">Design past the launch day.</h3>
<p className="mt-8 max-w-sm text-sm font-semibold leading-[1.65] text-[#060706]/62">Design for the first ninety days after launch.</p>
</article>
</div>
</div>
</section>

<section className="process-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
<figure className="parallax-image parallax-slow pointer-events-none right-4 top-24 h-28 w-44 rotate-[4deg] md:right-8 md:top-20 md:h-56 md:w-80">
<img alt="Collaborative planning table" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1f39209-cbcc-4857-bc13-744562e16d78_3840w.png"/>
</figure>
<div className="mb-16 max-w-2xl" data-reveal="">
<p className="section-label mb-8">Operating Loop</p>
<h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">Operating Loop</h2>
<p className="mt-6 max-w-md text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
          A compact sequence for turning early product complexity into a public system.
        </p>
</div>
<div className="relative h-72 overflow-hidden rounded-[32px] border border-[#f3f0e8]/10 bg-white/[0.025]">
<div className="timeline-bar absolute left-0 top-10 h-7 w-1/4 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Read</span></div>
<div className="timeline-bar absolute left-[18%] top-24 h-7 w-1/4 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Frame</span></div>
<div className="timeline-bar absolute left-[36%] top-[9.5rem] h-7 w-1/3 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Build</span></div>
<div className="timeline-bar absolute left-[62%] top-52 h-7 w-1/3 rounded-r-full text-[#060706]"><span className="ml-4 text-xs font-bold leading-7">Transfer</span></div>
<div className="grid h-full grid-cols-4 divide-x divide-[#f3f0e8]/10"></div>
</div>
<div className="process-columns mt-8 grid gap-4 md:grid-cols-4">
<div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Read</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We study the product, audience, category pressure, and the points where confusion slows momentum.</p></div>
<div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Frame</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We create a narrative kernel, visual direction, and structural rules for every launch surface.</p></div>
<div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Build</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We assemble pages, decks, motion cues, components, and source files into one coherent kit.</p></div>
<div className="glass rounded-[28px] p-6"><h3 className="text-2xl font-semibold tracking-[-0.05em]">Transfer</h3><p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">We document the system so your team can reuse it without asking what belongs where.</p></div>
</div>
</section>

<section className="pricing-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12" id="pricing">
<div className="grid gap-12 md:grid-cols-12">
<div className="pricing-copy md:col-span-4">
<p className="section-label mb-8">Engage</p>
<h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">Engage</h2>
<p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
            Choose the depth of the operating system: a tight signal sprint or a full launch loop.
          </p>
</div>
<div className="pricing-list grid gap-5 md:col-span-7 md:col-start-6">
<div className="pricing-card glass rounded-[36px] p-8">
<div className="mb-10 flex flex-wrap gap-2">
<span className="rounded-full border border-[#f3f0e8]/12 px-3 py-1 text-xs font-medium text-[#f3f0e8]/66">Monthly</span>
<span className="rounded-full bg-[#ff5a1f] px-3 py-1 text-xs font-bold text-[#060706]">Yearly -15%</span>
</div>
<div className="flex items-baseline gap-3"><p className="text-4xl font-semibold tracking-[-0.06em]">$4,800</p><p className="text-xl font-semibold tracking-tight text-[#f3f0e8]/38">/sprint</p><p className="text-sm font-semibold text-[#f3f0e8]/34 line-through">$6,000</p></div>
<h3 className="mt-12 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">Signal Sprint</h3>
<div className="mt-8 grid gap-4 md:grid-cols-2">
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Positioning map</p>
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Visual direction</p>
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Landing page concept</p>
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Launch checklist</p>
</div>
</div>
<div className="pricing-card glass rounded-[36px] p-8">
<div className="flex items-baseline gap-3"><p className="text-4xl font-semibold tracking-[-0.06em]">$9,600</p><p className="text-xl font-semibold tracking-tight text-[#f3f0e8]/38">/cycle</p><p className="text-sm font-semibold text-[#f3f0e8]/34 line-through">$12,000</p></div>
<h3 className="mt-12 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">Launch System</h3>
<div className="mt-8 grid gap-4 md:grid-cols-2">
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Identity system</p>
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Motion toolkit</p>
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Web direction</p>
<p className="flex items-center gap-2 text-sm font-medium"><i className="h-4 w-4 text-[#ff5a1f]" data-lucide="check"></i> Team handoff</p>
</div>
</div>
</div>
</div>
</section>

<section className="contact-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12" id="contact">
<div className="grid gap-14 md:grid-cols-12">
<div className="contact-form md:col-span-4">
<p className="section-label mb-10">Brief</p>
<div className="glass mb-5 flex w-full max-w-sm items-center justify-between rounded-[22px] px-5 py-4 text-sm font-medium text-[#f3f0e8]/58">Select a Launch Window <i className="h-4 w-4" data-lucide="chevron-down"></i></div>
<div className="mb-5 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">Reach me at <span className="text-[#f3f0e8]">Email *</span></div>
<div className="mb-10 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">Tell us what needs to become clearer.</div>
<p className="mb-8 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Ready to turn a scattered launch into a working system?</p>
<a className="magnetic-button inline-flex items-center gap-4 rounded-full border border-[#f3f0e8]/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em]" href="#footer">
            Begin <span className="rounded-full bg-[#ff5a1f] px-5 py-3 text-[#060706]">Send Brief</span>
</a>
</div>
<div className="faq-list md:col-span-7 md:col-start-6">
<p className="mb-6 text-xs font-bold uppercase tracking-[0.14em]">Brief notes. <span className="float-right">×</span></p>
<div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h2 className="text-4xl font-semibold tracking-[-0.07em] md:text-6xl">What happens after the first call?</h2><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">We define the launch problem, collect existing material, and return with a focused scope that names the exact system we should build.</p></div>
<div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h3 className="text-3xl font-semibold tracking-[-0.06em]">How fast can a sprint move?</h3><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Most focused sprints run in two to four weeks. Full launch systems usually need six to nine weeks depending on content and approvals.</p></div>
<div className="faq-row border-t border-[#f3f0e8]/10 py-9"><h3 className="text-3xl font-semibold tracking-[-0.06em]">Can this support an internal team?</h3><p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">Yes. We build assets, rules, and examples so founders, marketers, and product teams can keep using the system after handoff.</p></div>
</div>
</div>
</section>

<footer className="footer-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12" id="footer">
<div className="grid gap-12 md:grid-cols-12">
<div className="md:col-span-3"><p className="section-label">Axisform®</p></div>
<div className="md:col-span-9"><h2 className="footer-wordmark wordmark text-[5rem] font-black leading-none sm:text-[8rem] md:text-[11rem] lg:text-[14rem]">Axisform®</h2></div>
</div>
<div className="absolute right-5 top-28 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44 md:right-8">© 2020–26</div>
<div className="footer-links absolute bottom-16 left-5 right-5 grid gap-10 border-t border-[#f3f0e8]/12 pt-10 md:left-8 md:right-8 md:grid-cols-12">
<div className="md:col-span-5">
<p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Independent Design Studio / 2026</p>
<h3 className="max-w-xl text-[42px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8] md:text-[64px] lg:text-[76px]">
            Building public systems for the next launch.
          </h3>
<div className="mt-10 grid max-w-lg grid-cols-2 border-y border-[#f3f0e8]/12 py-5">
<div>
<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">Studio</p>
<p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">Axisform®</p>
</div>
<div>
<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">Field</p>
<p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">Launch OS / 04</p>
</div>
</div>
</div>
<div className="md:col-span-3 md:col-start-7">
<p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Notes</p>
<p className="mt-6 text-sm font-medium leading-[1.75] text-[#f3f0e8]/58">
            We build identity systems, launch pages, and compact brand infrastructure for teams who need their next chapter to feel deliberate.
          </p>
<a className="group mt-9 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8] transition hover:border-[#f3f0e8]/40" href="#contact">
            Send the brief
            <span className="transition duration-300 group-hover:translate-x-2">→</span>
</a>
<a className="group mt-4 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8]/62 transition hover:border-[#f3f0e8]/40 hover:text-[#f3f0e8]" href="#">
            Get studio notes
            <span className="transition duration-300 group-hover:translate-x-2">→</span>
</a>
</div>
<div className="grid gap-10 md:col-span-2 md:col-start-11">
<div>
<p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Social</p>
<div className="mt-6 space-y-4 text-sm font-bold text-[#f3f0e8]/72">
<a className="group flex items-center justify-between transition hover:text-[#f3f0e8]" href="#">LinkedIn <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
<a className="group flex items-center justify-between transition hover:text-[#f3f0e8]" href="#">X / Twitter <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
<a className="group flex items-center justify-between transition hover:text-[#f3f0e8]" href="#">Instagram <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">↗</span></a>
</div>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">Legal</p>
<div className="mt-6 space-y-3 text-sm font-semibold text-[#f3f0e8]/50">
<a className="block transition hover:text-[#f3f0e8]" href="#">Privacy Policy</a>
<a className="block transition hover:text-[#f3f0e8]" href="#">Terms of Service</a>
<a className="block transition hover:text-[#f3f0e8]" href="#">404</a>
</div>
</div>
</div>
<div className="md:col-span-12">
<div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#f3f0e8]/12 pt-5">
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">© 2020-2026 Axisform®</p>
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">Montréal / Global Studio / Field 04</p>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
