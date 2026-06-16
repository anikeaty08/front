import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const root = document.documentElement;

    function lerp(start, end, t) {
      return start + (end - start) * t;
    }

    // Hero 3D sphere & card parallax
    (function () {
      const sphere = document.getElementById("hero-3d-sphere");
      const orbit = document.getElementById("hero-orbit");
      const wrapper = document.getElementById("hero-3d-wrapper");

      if (!sphere || !orbit || !wrapper) return;

      let currentX = 0, currentY = 0;
      let targetX = 0, targetY = 0;

      wrapper.addEventListener("mousemove", (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 15;
        targetY = y * 15;
      });

      wrapper.addEventListener("mouseleave", () => {
        targetX = 0;
        targetY = 0;
      });

      function animate() {
        currentX = lerp(currentX, targetX, 0.08);
        currentY = lerp(currentY, targetY, 0.08);

        sphere.style.transform =
          "translate3d(" + (-currentX / 2) + "px," + (-currentY / 2 - 8) + "px,0) rotateX(" +
          (currentY / 2) + "deg) rotateY(" + (-currentX) + "deg)";
        orbit.style.transform =
          "rotateX(" + (currentY / 6) + "deg) rotateY(" + (-currentX / 3) + "deg) translateZ(0)";

        requestAnimationFrame(animate);
      }
      animate();
    })();

    // Floating motion via animation keyframes (CSS in Tail utilities already used)
    // Portfolio 3D tilt on hover
    (function () {
      const cards = document.querySelectorAll(".portfolio-card, .service-card, .testimonial-card");

      cards.forEach((card) => {
        let currentX = 0, currentY = 0;
        let targetX = 0, targetY = 0;

        function update() {
          currentX = lerp(currentX, targetX, 0.12);
          currentY = lerp(currentY, targetY, 0.12);
          card.style.transform =
            "perspective(900px) rotateX(" + currentY + "deg) rotateY(" + (-currentX) + "deg) translateY(-4px)";
          requestAnimationFrame(update);
        }
        update();

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          targetX = x * 8;
          targetY = -y * 8;
        });

        card.addEventListener("mouseleave", () => {
          targetX = 0;
          targetY = 0;
        });
      });
    })();

    // Parallax on scroll for large sections
    (function () {
      const scrollElements = document.querySelectorAll("#services, #portfolio, #testimonials");

      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || window.pageYOffset;
        scrollElements.forEach((el, index) => {
          const speed = 0.05 + index * 0.03;
          const offset = scrollY * speed;
          el.style.transform = "translate3d(0," + (-offset) + "px,0)";
        });
      }, { passive: true });
    })();

    // Smooth scroll for nav links
    (function () {
      const links = document.querySelectorAll("a[href^='#']");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          const targetId = link.getAttribute("href").slice(1);
          const target = document.getElementById(targetId);
          if (target) {
            e.preventDefault();
            const rect = target.getBoundingClientRect();
            const offset = rect.top + window.scrollY - 80;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        });
      });
    })();

    // Year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">

<div className="pointer-events-none fixed inset-0 -z-20">
<div className="absolute -top-32 -left-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="absolute -bottom-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0)_0,_rgba(15,23,42,1)_60%)]"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] mix-blend-soft-light" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')'}}></div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800/70">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-4 py-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-fuchsia-500 shadow-[0_0_40px_rgba(56,189,248,0.55)]">
<span className="text-xs font-semibold tracking-tight text-slate-900">NV</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">NOVA Studio</span>
<span className="text-xs text-slate-400">Creative Digital Agency</span>
</div>
</div>
<nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
<a className="transition-colors hover:text-cyan-300" href="#services">Services</a>
<a className="transition-colors hover:text-cyan-300" href="#portfolio">Portfolio</a>
<a className="transition-colors hover:text-cyan-300" href="#testimonials">Testimonials</a>
<a className="transition-colors hover:text-cyan-300" href="#contact">Contact</a>
</nav>
<button className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-tight text-cyan-50 shadow-[0_0_30px_rgba(34,211,238,0.4)] transition hover:border-cyan-300 hover:bg-cyan-400/20">
<span>Schedule a call</span>
<span className="iconify h-4 w-4 text-cyan-200 transition-transform group-hover:translate-x-0.5" data-height="16" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</div>
</header>

<main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

<section className="relative flex min-h-[80vh] flex-col justify-center gap-12 py-12 md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:py-20" id="hero">

<div className="relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 backdrop-blur-xl">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div>
<span>Next‑gen creative digital agency</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              We design immersive
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                3D digital experiences
              </span>
              that feel like the future.
            </h1>
<p className="text-sm sm:text-base text-slate-300">
              NOVA Studio blends interactive 3D, cinematic motion, and precision-crafted interfaces to transform ambitious brands into unforgettable experiences.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium tracking-tight text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.7)] transition hover:shadow-[0_0_60px_rgba(236,72,153,0.7)]" id="cta-main">
<span>Start a project</span>
<span className="iconify h-4 w-4 text-slate-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-height="16" data-icon="lucide:sparkles" data-width="16"></span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-xl transition hover:border-cyan-400/60 hover:bg-slate-900/90">
<span className="iconify h-4 w-4 text-cyan-300" data-height="16" data-icon="lucide:play-circle" data-width="16"></span>
<span>View showreel</span>
</button>
</div>
<div className="flex flex-wrap gap-8 text-xs text-slate-400">
<div className="space-y-1">
<div className="text-sm font-medium text-slate-100">80+</div>
<div>brands launched</div>
</div>
<div className="space-y-1">
<div className="text-sm font-medium text-slate-100">4.9</div>
<div>client rating</div>
</div>
<div className="space-y-1">
<div className="text-sm font-medium text-slate-100">12</div>
<div>countries served</div>
</div>
</div>
</div>

<div className="relative mt-10 h-[20rem] w-full md:mt-0 md:h-[26rem]" id="hero-3d-wrapper">
<div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/25 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-fuchsia-500/25 blur-3xl"></div>
<div className="relative flex h-full w-full items-center justify-center">

<div className="group relative h-[18rem] w-[18rem] max-w-full rounded-[2.5rem] border border-slate-700/60 bg-slate-900/40 shadow-[0_40px_140px_rgba(15,23,42,0.9)] backdrop-blur-3xl transition-transform duration-500 will-change-transform" id="hero-orbit">
<div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10"></div>
<div className="pointer-events-none absolute inset-[1px] rounded-[2.35rem] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90"></div>

<div className="relative flex h-full flex-col items-center justify-center gap-6">
<div className="relative">
<div className="relative h-40 w-40 rounded-full bg-[conic-gradient(from_210deg_at_50%_40%,rgba(34,211,238,0.1),rgba(56,189,248,0.8),rgba(129,140,248,0.8),rgba(236,72,153,0.8),rgba(34,211,238,0.1))] shadow-[0_0_60px_rgba(56,189,248,0.7)] transition-transform duration-300 will-change-transform" id="hero-3d-sphere">
<div className="absolute inset-[18%] rounded-full bg-slate-900/40 blur-xl"></div>
<div className="absolute -top-5 -left-3 h-10 w-10 rounded-full bg-cyan-300/70 blur-xl"></div>
<div className="absolute -bottom-2 -right-4 h-12 w-12 rounded-full bg-fuchsia-400/60 blur-xl"></div>
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_55%)] mix-blend-screen opacity-90"></div>
</div>
<div className="absolute inset-0 -z-10 translate-y-10">
<div className="h-20 w-40 rounded-full bg-slate-900/90 blur-2xl shadow-[0_0_50px_rgba(15,23,42,1)]"></div>
</div>
</div>
<div className="flex items-center gap-4 px-4 text-xs text-slate-300">
<div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 backdrop-blur-xl">
<span className="iconify h-3.5 w-3.5 text-cyan-300" data-height="14" data-icon="lucide:cpu" data-width="14"></span>
<span>Real‑time 3D UI</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 backdrop-blur-xl">
<span className="iconify h-3.5 w-3.5 text-fuchsia-300" data-height="14" data-icon="lucide:orbit" data-width="14"></span>
<span>Parallax depth</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute left-2 top-8 hidden h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/40 bg-slate-900/80 text-[0.65rem] text-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:flex animate-[float_7s_ease-in-out_infinite]">
<span className="iconify mr-1.5 h-3.5 w-3.5 text-cyan-300" data-height="14" data-icon="lucide:cube" data-width="14"></span>
              3D
            </div>
<div className="pointer-events-none absolute right-4 bottom-4 hidden h-11 w-32 items-center justify-between rounded-2xl border border-fuchsia-400/40 bg-slate-900/80 px-3 text-[0.65rem] text-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:flex animate-[float_9s_ease-in-out_infinite]">
<div>
<div className="font-medium text-slate-50">Realtime</div>
<div className="text-[0.6rem] text-slate-400">Motion &amp; depth</div>
</div>
<span className="iconify h-4 w-4 text-fuchsia-300" data-height="16" data-icon="lucide:activity" data-width="16"></span>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16" id="services">
<div className="mb-10 flex items-center justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Services sculpted in 3D</h2>
<p className="mt-2 text-sm sm:text-base text-slate-300">
              From concept to launch, we craft interactive ecosystems that move, react, and glow.
            </p>
</div>
<div className="hidden text-xs text-slate-400 sm:flex">
<span className="mr-2 h-1 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"></span>
            Full‑stack creative partner
          </div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<article className="service-card group relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-slate-900/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.5)]">
<span className="iconify h-5 w-5" data-height="20" data-icon="lucide:panels-top-left" data-width="20"></span>
</div>
<span className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-2 py-0.5 text-[0.65rem] text-cyan-100">
                  Interactive UI
                </span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">Immersive product sites</h3>
<p className="mt-2 text-sm text-slate-300">
                  3D‑driven marketing sites with cinematic scrolling, parallax storytelling, and tactile UI details.
                </p>
</div>
<ul className="mt-2 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14"></span>
                  Narrative scroll experiences
                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14"></span>
                  Launch‑ready performance
                </li>
</ul>
</div>
</article>

<article className="service-card group relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-transparent to-slate-900/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-500/20 text-fuchsia-300 shadow-[0_0_25px_rgba(236,72,153,0.5)]">
<span className="iconify h-5 w-5" data-height="20" data-icon="lucide:gallery-vertical" data-width="20"></span>
</div>
<span className="rounded-full border border-fuchsia-400/50 bg-fuchsia-400/10 px-2 py-0.5 text-[0.65rem] text-fuchsia-100">
                  Brand systems
                </span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">Visual identity &amp; art direction</h3>
<p className="mt-2 text-sm text-slate-300">
                  Cohesive brand worlds that span logo, motion language, 3D assets, and multi‑channel design systems.
                </p>
</div>
<ul className="mt-2 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-fuchsia-300" data-height="14" data-icon="lucide:check" data-width="14"></span>
                  Brand platforms &amp; guidelines
                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-fuchsia-300" data-height="14" data-icon="lucide:check" data-width="14"></span>
                  Motion &amp; 3D assets
                </li>
</ul>
</div>
</article>

<article className="service-card group relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 via-transparent to-fuchsia-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300 shadow-[0_0_25px_rgba(56,189,248,0.5)]">
<span className="iconify h-5 w-5" data-height="20" data-icon="lucide:rocket" data-width="20"></span>
</div>
<span className="rounded-full border border-sky-400/50 bg-sky-400/10 px-2 py-0.5 text-[0.65rem] text-sky-100">
                  Launch &amp; scale
                </span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">Product &amp; platform UX</h3>
<p className="mt-2 text-sm text-slate-300">
                  High‑performing digital products optimized for clarity, speed, and long‑term growth.
                </p>
</div>
<ul className="mt-2 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-sky-300" data-height="14" data-icon="lucide:check" data-width="14"></span>
                  End‑to‑end product design
                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-sky-300" data-height="14" data-icon="lucide:check" data-width="14"></span>
                  Design systems &amp; handoff
                </li>
</ul>
</div>
</article>
</div>
</section>

<section className="relative py-12 sm:py-16" id="portfolio">
<div className="mb-8 flex items-center justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Selected work</h2>
<p className="mt-2 text-sm sm:text-base text-slate-300">
              Interfaces and experiences engineered to feel alive with motion and depth.
            </p>
</div>
<button className="hidden items-center gap-2 text-xs text-slate-300 md:inline-flex">
<span>View all projects</span>
<span className="iconify h-3.5 w-3.5 text-cyan-300" data-height="14" data-icon="lucide:arrow-up-right" data-width="14"></span>
</button>
</div>
<div className="grid gap-6 md:grid-cols-3">

<article className="portfolio-card group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="relative h-44 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-sky-500/10 to-slate-900"></div>
<div className="absolute inset-0">
<div className="absolute left-6 top-8 h-32 w-32 rounded-full bg-cyan-400/40 blur-2xl"></div>
<div className="absolute right-4 bottom-0 h-32 w-32 rounded-full bg-fuchsia-400/40 blur-2xl"></div>
</div>
<div className="relative flex h-full items-center justify-center">
<div className="h-24 w-40 rounded-2xl border border-slate-100/10 bg-slate-900/70 shadow-[0_22px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:rotate-1">
<div className="relative h-full w-full overflow-hidden rounded-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.2),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-indigo-500/20 to-slate-900/80 mix-blend-screen"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[0.65rem] text-slate-200">
<span className="font-medium tracking-tight">Neural Commerce</span>
<span className="rounded-full bg-slate-900/80 px-1.5 py-0.5 text-[0.6rem] text-cyan-300">3D product launch</span>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-3 p-4">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Neural Commerce</span>
<span className="rounded-full border border-slate-700/80 px-2 py-0.5">E‑commerce</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                A volumetric product story that increased conversion by 31%.
              </h3>
<p className="text-sm text-slate-300">
                Multi‑layered hero, parallax product views, and adaptive motion for every viewport.
              </p>
</div>
</article>

<article className="portfolio-card group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="relative h-44 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-purple-500/10 to-slate-900"></div>
<div className="absolute inset-0">
<div className="absolute left-4 bottom-0 h-28 w-28 rounded-full bg-fuchsia-400/40 blur-2xl"></div>
<div className="absolute right-6 top-4 h-28 w-28 rounded-full bg-cyan-400/40 blur-2xl"></div>
</div>
<div className="relative flex h-full items-center justify-center">
<div className="h-24 w-40 rounded-2xl border border-slate-100/10 bg-slate-900/70 shadow-[0_22px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-0.5 group-hover:-rotate-1">
<div className="relative h-full w-full overflow-hidden rounded-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.2),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-slate-900/80 mix-blend-screen"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[0.65rem] text-slate-200">
<span className="font-medium tracking-tight">Orbit Finance</span>
<span className="rounded-full bg-slate-900/80 px-1.5 py-0.5 text-[0.6rem] text-fuchsia-200">Product platform</span>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-3 p-4">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Orbit Finance</span>
<span className="rounded-full border border-slate-700/80 px-2 py-0.5">Fintech</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                A responsive dashboard with micro‑interactions at every layer.
              </h3>
<p className="text-sm text-slate-300">
                3D data visualizations, ambient animation, and a calm interface for complex decisions.
              </p>
</div>
</article>

<article className="portfolio-card group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="relative h-44 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-emerald-500/10 to-slate-900"></div>
<div className="absolute inset-0">
<div className="absolute left-8 top-4 h-28 w-28 rounded-full bg-emerald-400/40 blur-2xl"></div>
<div className="absolute right-2 bottom-0 h-32 w-32 rounded-full bg-cyan-400/40 blur-2xl"></div>
</div>
<div className="relative flex h-full items-center justify-center">
<div className="h-24 w-40 rounded-2xl border border-slate-100/10 bg-slate-900/70 shadow-[0_22px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:rotate-1">
<div className="relative h-full w-full overflow-hidden rounded-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.2),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-emerald-500/30 to-slate-900/80 mix-blend-screen"></div>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[0.65rem] text-slate-200">
<span className="font-medium tracking-tight">Lumen Health</span>
<span className="rounded-full bg-slate-900/80 px-1.5 py-0.5 text-[0.6rem] text-emerald-200">Experience site</span>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-3 p-4">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Lumen Health</span>
<span className="rounded-full border border-slate-700/80 px-2 py-0.5">Health</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                A calming digital clinic that guides patients with clarity.
              </h3>
<p className="text-sm text-slate-300">
                Accessible interactions, subtle parallax, and ambient 3D to soften every touchpoint.
              </p>
</div>
</article>
</div>
</section>

<section className="relative py-12 sm:py-16" id="testimonials">
<div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">What partners say</h2>
<p className="mt-2 text-sm sm:text-base text-slate-300">
              Teams we collaborate with describe the work as transformative, precise, and unexpectedly human.
            </p>
</div>
<div className="flex gap-3 text-xs text-slate-400">
<div className="flex items-center gap-1">
<span className="iconify h-3.5 w-3.5 text-amber-300" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span>4.9 average rating</span>
</div>
<span>•</span>
<span>80+ projects shipped</span>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<article className="testimonial-card group relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="pointer-events-none absolute -top-10 right-4 h-16 w-16 rounded-full bg-cyan-500/15 blur-2xl transition-transform duration-500 group-hover:translate-y-1"></div>
<div className="relative flex h-full flex-col justify-between gap-4">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-cyan-200">
<span className="iconify h-3.5 w-3.5" data-height="14" data-icon="lucide:sparkles" data-width="14"></span>
<span>Launch partner</span>
</div>
<p className="text-sm text-slate-200">
                  “The new site feels like a living product demo. Engagement doubled in the first 3 weeks and we’re still discovering delightful details.”
                </p>
</div>
<div className="flex items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_20px_rgba(56,189,248,0.7)]"></div>
<div className="text-xs">
<div className="font-medium text-slate-50">Elena Ramirez</div>
<div className="text-slate-400">VP Marketing, Neural Commerce</div>
</div>
</div>
<div className="flex gap-0.5 text-amber-300">
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
</div>
</div>
</div>
</article>

<article className="testimonial-card group relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="pointer-events-none absolute -bottom-10 left-6 h-16 w-16 rounded-full bg-fuchsia-500/15 blur-2xl transition-transform duration-500 group-hover:-translate-y-1"></div>
<div className="relative flex h-full flex-col justify-between gap-4">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-fuchsia-200">
<span className="iconify h-3.5 w-3.5" data-height="14" data-icon="lucide:orbit" data-width="14"></span>
<span>Design leadership</span>
</div>
<p className="text-sm text-slate-200">
                  “They anticipate challenges before we see them. The design system they built scaled seamlessly as our product exploded.”
                </p>
</div>
<div className="flex items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-400 via-purple-500 to-sky-500 shadow-[0_0_20px_rgba(236,72,153,0.7)]"></div>
<div className="text-xs">
<div className="font-medium text-slate-50">Marcus Lee</div>
<div className="text-slate-400">Head of Product, Orbit Finance</div>
</div>
</div>
<div className="flex gap-0.5 text-amber-300">
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star-half" data-width="12"></span>
</div>
</div>
</div>
</article>

<article className="testimonial-card group relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 will-change-transform">
<div className="pointer-events-none absolute -top-8 -left-4 h-20 w-20 rounded-full bg-emerald-500/15 blur-2xl transition-transform duration-500 group-hover:translate-y-1"></div>
<div className="relative flex h-full flex-col justify-between gap-4">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-emerald-200">
<span className="iconify h-3.5 w-3.5" data-height="14" data-icon="lucide:heartbeat" data-width="14"></span>
<span>Healthcare launch</span>
</div>
<p className="text-sm text-slate-200">
                  “Patients tell us the new experience feels ‘calm’ and ‘reassuring’. That’s exactly what we hoped for but didn’t know how to design.”
                </p>
</div>
<div className="flex items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-slate-100 shadow-[0_0_20px_rgba(52,211,153,0.7)]"></div>
<div className="text-xs">
<div className="font-medium text-slate-50">Dr. Amina Sol</div>
<div className="text-slate-400">Founder, Lumen Health</div>
</div>
</div>
<div className="flex gap-0.5 text-amber-300">
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
<span className="iconify h-3 w-3" data-height="12" data-icon="lucide:star" data-width="12"></span>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="relative py-12 sm:py-20" id="contact">
<div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-950 shadow-[0_40px_120px_rgba(8,47,73,1)]">
<div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/25 blur-3xl"></div>
<div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-3xl"></div>
<div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100 backdrop-blur-xl">
<span className="iconify h-3.5 w-3.5" data-height="14" data-icon="lucide:radar" data-width="14"></span>
<span>Booking Q1–Q2 collaborations</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Ready to build something that feels like it’s from the future?
              </h2>
<p className="text-sm sm:text-base text-slate-200">
                Share a few details about your product, timeline, and goals. We’ll reply within 24 hours with next steps and a potential direction.
              </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-medium tracking-tight text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.7)] transition hover:bg-cyan-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.9)]">
<span>Book a discovery call</span>
<span className="iconify h-4 w-4 text-slate-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-height="16" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 backdrop-blur-xl transition hover:border-cyan-300/80 hover:text-cyan-100">
<span className="iconify h-3.5 w-3.5 text-slate-300" data-height="14" data-icon="lucide:send" data-width="14"></span>
<span>Share brief</span>
</button>
</div>
</div>

<div className="relative">
<div className="pointer-events-none absolute -top-10 right-4 h-28 w-28 rounded-full bg-cyan-400/25 blur-3xl"></div>
<form className="relative space-y-4 rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 shadow-[0_30px_80px_rgba(8,47,73,1)] backdrop-blur-2xl">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Project snapshot</span>
<span className="flex items-center gap-1 text-cyan-300">
<span className="iconify h-3.5 w-3.5" data-height="14" data-icon="lucide:clock" data-width="14"></span>
                    ~2 minutes
                  </span>
</div>
<div className="space-y-3 text-xs">
<div>
<label className="mb-1 block text-slate-300">Work email</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900" placeholder="you@company.com"/>
</div>
<div>
<label className="mb-1 block text-slate-300">Company</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900" placeholder="Brand / Product name"/>
</div>
<div>
<label className="mb-1 block text-slate-300">What are you building?</label>
<select className="w-full cursor-pointer rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900">
<option className="bg-slate-900">Immersive marketing site</option>
<option className="bg-slate-900">Product UX / platform</option>
<option className="bg-slate-900">Brand &amp; visual identity</option>
<option className="bg-slate-900">3D / motion system</option>
<option className="bg-slate-900">Other</option>
</select>
</div>
<div>
<label className="mb-1 block text-slate-300">Timeline</label>
<div className="grid grid-cols-2 gap-2">
<button className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1 text-[0.65rem] text-slate-200 transition hover:border-cyan-400 hover:bg-slate-900" type="button">
                        0–3 months
                      </button>
<button className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1 text-[0.65rem] text-slate-200 transition hover:border-cyan-400 hover:bg-slate-900" type="button">
                        3–6 months
                      </button>
<button className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1 text-[0.65rem] text-slate-200 transition hover:border-cyan-400 hover:bg-slate-900" type="button">
                        6+ months
                      </button>
<button className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1 text-[0.65rem] text-slate-200 transition hover:border-cyan-400 hover:bg-slate-900" type="button">
                        Not sure yet
                      </button>
</div>
</div>
</div>
<button className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 px-4 py-2 text-xs font-medium tracking-tight text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.7)] transition hover:shadow-[0_0_55px_rgba(236,72,153,0.8)]">
<span>Send project overview</span>
<span className="iconify h-3.5 w-3.5 text-slate-900" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<div className="text-[0.6rem] text-slate-500">
                  By submitting, you agree to our respectful use of your data for this conversation only.
                </div>
</form>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-slate-800/80 py-6 text-xs text-slate-400">
<div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-100">NOVA Studio</span>
<span className="text-slate-500">© <span id="year"></span></span>
</div>
<div className="flex flex-wrap items-center gap-4">
<span className="flex items-center gap-1">
<span className="iconify h-3 w-3 text-emerald-400" data-height="12" data-icon="lucide:shield-check" data-width="12"></span>
              Privacy‑first
            </span>
<span className="flex items-center gap-1">
<span className="iconify h-3 w-3 text-cyan-400" data-height="12" data-icon="lucide:globe" data-width="12"></span>
              Remote‑native
            </span>
</div>
</div>
</footer>
</main>
</div>



    </>
  );
}
