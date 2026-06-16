import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons({
      attrs: {
        "stroke-width": 1.5
      }
    });

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");
    const menuIcon = document.getElementById("menuIcon");

    const setMenuIcon = (open) => {
      if (!menuIcon) return;
      menuIcon.setAttribute("data-lucide", open ? "x" : "menu");
      lucide.createIcons({
        icons: { [open ? "x" : "menu"]: lucide.icons[open ? "X" : "Menu"] },
        attrs: { "stroke-width": 1.5 }
      });
    };

    menuBtn?.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
      const open = !mobileNav.classList.contains("hidden");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      setMenuIcon(open);
    });

    document.getElementById("year").textContent = new Date().getFullYear();

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href === "#") return;
        const el = document.querySelector(href);
        if (!el) return;

        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        if (!mobileNav.classList.contains("hidden")) {
          mobileNav.classList.add("hidden");
          menuBtn?.setAttribute("aria-expanded", "false");
          setMenuIcon(false);
        }
      });
    });

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll(".reveal"));

    const setInitial = (el) => {
      el.classList.add("will-change-transform");
      el.style.opacity = "0";
      el.style.transform = "translate3d(0, 0.75rem, 0)";
      el.style.transition =
        "opacity 700ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1)";
    };

    const show = (el, delay = 0) => {
      el.style.transitionDelay = `${delay}ms`;
      el.style.opacity = "1";
      el.style.transform = "translate3d(0, 0, 0)";
    };

    if (!prefersReduced) {
      items.forEach((el) => setInitial(el));

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const idx = items.indexOf(el);
            show(el, Math.min(idx * 70, 350));
            io.unobserve(el);
          });
        },
        { threshold: 0.12 }
      );

      items.forEach((el) => io.observe(el));
    } else {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }

    if (!prefersReduced) {
      gsap.registerPlugin(ScrollTrigger);

      const about = document.getElementById("about");
      const glow = document.getElementById("aboutGlow");
      const cardA = document.getElementById("aboutCardA");
      const cardB = document.getElementById("aboutCardB");

      const mix = (c1, c2, p) => {
        const a = c1.replace("#", "");
        const b = c2.replace("#", "");
        const r1 = parseInt(a.substring(0, 2), 16),
          g1 = parseInt(a.substring(2, 4), 16),
          b1 = parseInt(a.substring(4, 6), 16);
        const r2 = parseInt(b.substring(0, 2), 16),
          g2 = parseInt(b.substring(2, 4), 16),
          b2 = parseInt(b.substring(4, 6), 16);
        const r = Math.round(r1 + (r2 - r1) * p);
        const g = Math.round(g1 + (g2 - g1) * p);
        const bl = Math.round(b1 + (b2 - b1) * p);
        return `rgb(${r} ${g} ${bl})`;
      };

      ScrollTrigger.create({
        trigger: about,
        start: "top 70%",
        end: "bottom 30%",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          const c = mix("#FC4F24", "#E3894C", p);
          if (glow) glow.style.background = c;

          const ringA = `0 0 0 1px rgba(15,23,42,.06), 0 10px 30px rgba(15,23,42,.06), 0 0 0 2px rgba(252,79,36,.08)`;
          const ringB = `0 0 0 1px rgba(15,23,42,.06), 0 10px 30px rgba(15,23,42,.06), 0 0 0 2px rgba(227,137,76,.10)`;

          if (cardA) cardA.style.boxShadow = p < 0.5 ? ringA : ringB;
          if (cardB) cardB.style.boxShadow = p > 0.5 ? ringA : ringB;
        },
      });
    }

    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (status) status.textContent = "Message sent. I’ll get back to you shortly.";
      form.reset();
    });

    const CASES = {
      wordpress: {
        title: "WordPress Projects",
        desc: "Themes, landing pages, SEO-friendly builds, and speed optimizations.",
        items: [
          { name: "Agency Site Redesign", meta: "Theme + speed pass", tag: "WordPress" },
          { name: "Portfolio CMS Setup", meta: "Custom blocks", tag: "WordPress" },
          { name: "Blog Performance Upgrade", meta: "Core Web Vitals", tag: "WordPress" },
          { name: "Landing Pages", meta: "Conversion-focused", tag: "WordPress" },
        ],
      },
      shopify: {
        title: "Shopify Projects",
        desc: "Storefront UI, product pages, sections, and conversion improvements.",
        items: [
          { name: "PDP Rebuild", meta: "Better UX + CRO", tag: "Shopify" },
          { name: "Theme Custom Sections", meta: "Flexible blocks", tag: "Shopify" },
          { name: "Collection UX Polish", meta: "Filters + layout", tag: "Shopify" },
          { name: "Speed Cleanup", meta: "Lean assets", tag: "Shopify" },
        ],
      },
      custom: {
        title: "Custom Solutions",
        desc: "Dashboards, portals, and custom workflows for teams.",
        items: [
          { name: "Client Portal", meta: "Auth + documents", tag: "Custom" },
          { name: "Ops Dashboard", meta: "Metrics + tables", tag: "Custom" },
          { name: "Booking Flow", meta: "Multi-step UX", tag: "Custom" },
          { name: "Admin Tools", meta: "Internal workflows", tag: "Custom" },
        ],
      },
      react: {
        title: "React Projects",
        desc: "Component systems, apps, and modern interactive interfaces.",
        items: [
          { name: "UI Component Library", meta: "Reusable system", tag: "React" },
          { name: "Marketing Web App", meta: "App-like UX", tag: "React" },
          { name: "Dashboard UI", meta: "Charts + filters", tag: "React" },
          { name: "Performance Pass", meta: "Improve INP", tag: "React" },
        ],
      },
    };

    const modal = document.getElementById("caseModal");
    const overlay = document.getElementById("caseOverlay");
    const closeBtn = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalGrid = document.getElementById("modalGrid");

    const openModal = (key) => {
      const data = CASES[key];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;

      modalGrid.innerHTML = data.items
        .map(
          (it) => `
            <div class="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm shadow-stone-900/5">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <div class="text-sm font-medium tracking-tight text-stone-900">${it.name}</div>
                  <div class="mt-1 text-xs text-stone-600">${it.meta}</div>
                </div>
                <span class="shrink-0 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-700">${it.tag}</span>
              </div>
            </div>
          `
        )
        .join("");

      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    };

    const closeModalFn = () => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };

    document.querySelectorAll(".case-card").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.dataset.case));
    });

    closeBtn?.addEventListener("click", closeModalFn);
    overlay?.addEventListener("click", closeModalFn);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModalFn();
    });

    const marquee = document.getElementById("skillsMarquee");

    if (marquee && !prefersReduced) {
      marquee.innerHTML += marquee.innerHTML;

      const getLoopWidth = () => marquee.scrollWidth / 2;

      let loopWidth = getLoopWidth();

      const tween = gsap.to(marquee, {
        x: () => -loopWidth,
        duration: 28,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % -loopWidth}px`;
          }
        }
      });

      const refreshLoop = () => {
        loopWidth = getLoopWidth();
      };

      window.addEventListener("resize", refreshLoop);

      marquee.addEventListener("mouseenter", () => tween.pause());
      marquee.addEventListener("mouseleave", () => tween.play());
      marquee.addEventListener("touchstart", () => tween.pause(), { passive: true });
      marquee.addEventListener("touchend", () => tween.play(), { passive: true });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
<a className="flex items-center gap-3" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-stone-50">
<span className="text-sm font-medium tracking-tight">JS</span>
</div>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight">Your Name</div>
<div className="text-xs text-stone-600">Design • Build • Ship</div>
</div>
</a>
<nav className="hidden items-center gap-6 sm:flex">
<a className="text-sm text-stone-600 transition-colors hover:text-stone-900" href="#about">About</a>
<a className="text-sm text-stone-600 transition-colors hover:text-stone-900" href="#tech">Technologies</a>
<a className="text-sm text-stone-600 transition-colors hover:text-stone-900" href="#process">Workflow</a>
<a className="text-sm text-stone-600 transition-colors hover:text-stone-900" href="#work">Portfolio</a>
<a className="text-sm text-stone-600 transition-colors hover:text-stone-900" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-900 shadow-sm shadow-stone-900/5 transition-colors hover:bg-stone-50" href="#contact">
<i className="h-4 w-4 text-slate-900" data-lucide="message-circle"></i>
          Let’s talk
        </a>
<button aria-expanded="false" aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 shadow-sm shadow-stone-900/5 transition-colors hover:bg-stone-50 sm:hidden" id="menuBtn">
<i className="h-5 w-5 text-stone-700" data-lucide="menu" id="menuIcon"></i>
</button>
</div>
</div>
<div className="hidden border-t border-stone-200 bg-white" id="mobileNav">
<div className="mx-auto max-w-6xl px-6 py-4 sm:px-8">
<div className="grid gap-3">
<a className="rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-50" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-50" href="#tech">Technologies</a>
<a className="rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-50" href="#process">Workflow</a>
<a className="rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-50" href="#work">Portfolio</a>
<a className="rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-50" href="#contact">Contact</a>
</div>
</div>
</div>
</header>
<main className="relative" id="top">
<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<div className="absolute left-1/2 top-[-6rem] h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl"></div>
<div className="absolute bottom-[-8rem] right-10 h-72 w-72 rounded-full bg-slate-100 blur-3xl"></div>
</div>
<div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
<div className="grid items-center gap-10 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="reveal will-change-transform">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm shadow-slate-900/5">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Available for freelance
              </div>
<h1 className="mt-5 text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                I build polished web experiences that feel fast, clear, and modern.
              </h1>
<p className="mt-4 max-w-xl text-lg text-slate-600">
                Portfolio layout with subtle motion, clean typography, and a structure that scales: hero, work, skills, about, testimonials, and contact.
              </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-slate-900/20 transition-colors hover:bg-slate-800" href="#work">
<i className="h-4.5 w-4.5" data-lucide="arrow-right"></i>
                  View work
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/5 transition-colors hover:bg-slate-50" href="#contact">
<i className="h-4.5 w-4.5" data-lucide="mail"></i>
                  Contact
                </a>
</div>
<div className="mt-8 grid max-w-md grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 bg-white/70 p-3 shadow-sm shadow-slate-900/5">
<div className="text-sm font-medium tracking-tight">8+</div>
<div className="mt-1 text-xs text-slate-600">Projects shipped</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white/70 p-3 shadow-sm shadow-slate-900/5">
<div className="text-sm font-medium tracking-tight">3yr</div>
<div className="mt-1 text-xs text-slate-600">Experience</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white/70 p-3 shadow-sm shadow-slate-900/5">
<div className="text-sm font-medium tracking-tight">Remote</div>
<div className="mt-1 text-xs text-slate-600">Worldwide</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="reveal will-change-transform">
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
<i className="h-5.5 w-5.5" data-lucide="user-circle-2"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Profile</div>
<div className="text-xs text-slate-600">Quick overview</div>
</div>
</div>
<div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">2026</div>
</div>
<div className="mt-5 grid gap-3">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-slate-700">
<i className="h-4.5 w-4.5" data-lucide="zap"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium tracking-tight">Frontend + UI</div>
<div className="mt-1 text-xs text-slate-600">Responsive layouts, component systems, and motion.</div>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-slate-700">
<i className="h-4.5 w-4.5" data-lucide="code-2"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium tracking-tight">Performance-minded</div>
<div className="mt-1 text-xs text-slate-600">Fast interactions, accessible patterns, clean code.</div>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-slate-700">
<i className="h-4.5 w-4.5" data-lucide="rocket"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium tracking-tight">Product delivery</div>
<div className="mt-1 text-xs text-slate-600">From wireframe to shipped, iterating quickly.</div>
</div>
</div>
</div>
</div>
<div className="mt-5 flex flex-wrap items-center gap-2">
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">UI</span>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Frontend</span>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Motion</span>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Accessibility</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-stone-200/70 bg-white" id="about">
<div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<div className="reveal will-change-transform">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700 shadow-sm shadow-stone-900/5">
<span className="inline-flex h-2 w-2 rounded-full" style={{background: '#E3894C'}}></span>
                How I work
              </div>
<h2 className="mt-4 text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl">Calm UI, crisp execution — built for real users.</h2>
<p className="mt-3 text-lg text-stone-600">
                I focus on clarity, consistent components, and performance. As you scroll, the highlight color subtly shifts to reflect progress — without distracting from content.
              </p>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-5" id="aboutCardA" style={{boxShadow: 'rgba(15, 23, 42, 0.06) 0px 0px 0px 1px, rgba(15, 23, 42, 0.06) 0px 10px 30px, rgba(252, 79, 36, 0.08) 0px 0px 0px 2px'}}>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-stone-900" data-lucide="shield-check"></i>
<div className="text-sm font-medium tracking-tight">Accessible by default</div>
</div>
<p className="mt-2 text-lg text-stone-600">Semantic structure, focus states, and readable contrast.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-5" id="aboutCardB" style={{boxShadow: 'rgba(15, 23, 42, 0.06) 0px 0px 0px 1px, rgba(15, 23, 42, 0.06) 0px 10px 30px, rgba(227, 137, 76, 0.1) 0px 0px 0px 2px'}}>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-stone-900" data-lucide="clock-3"></i>
<div className="text-sm font-medium tracking-tight">Fast interactions</div>
</div>
<p className="mt-2 text-lg text-stone-600">Motion that supports understanding, not distraction.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="reveal will-change-transform">
<div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm shadow-stone-900/5" id="aboutImageWrap">
<div className="absolute inset-0">
<div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full opacity-50 blur-3xl" id="aboutGlow" style={{background: 'rgb(252, 79, 36)'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white"></div>
</div>
<div className="relative p-5 sm:p-6">
<div className="flex items-center justify-between gap-4">
<div className="min-w-0">
<div className="text-sm font-medium tracking-tight">Design → Development</div>
<div className="mt-1 text-xs text-stone-600">Clean details, quick iteration, reliable delivery</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">
<span className="inline-flex h-2 w-2 rounded-full" style={{background: '#FC4F24'}}></span>
                      Scroll-reactive
                    </div>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
<div className="flex items-center gap-2 text-stone-800">
<i className="h-5 w-5 text-stone-900" data-lucide="pen-square"></i>
<div className="text-sm font-medium tracking-tight">UX-first</div>
</div>
<div className="mt-2 text-xs text-stone-600">Flows, states, empty screens, and edge cases.</div>
</div>
<div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
<div className="flex items-center gap-2 text-stone-800">
<i className="h-5 w-5 text-stone-900" data-lucide="scale"></i>
<div className="text-sm font-medium tracking-tight">Consistency</div>
</div>
<div className="mt-2 text-xs text-stone-600">Reusable patterns for speed and coherence.</div>
</div>
</div>
<div className="mt-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
<img alt="Workspace" className="h-48 w-full object-cover sm:h-56" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">UI Systems</span>
<span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">A11y</span>
<span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">Performance</span>
<span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700">Ship fast</span>
</div>
</div>
</div>
<p className="mt-3 text-xs text-stone-500">
                Tip: the accent color shifts from <span className="font-medium">#FC4F24</span> to <span className="font-medium">#E3894C</span> as you scroll this section.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden border-t border-stone-900 bg-black" id="tech">
<div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-8 sm:py-20">
<div className="reveal will-change-transform text-center">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">Development Skills</h2>
<p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
            A focused set of tools and platforms used to build fast, scalable, and polished digital experiences.
          </p>
</div>
<div className="reveal will-change-transform mt-12 sm:mt-14">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black via-black/80 to-transparent sm:w-24"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black via-black/80 to-transparent sm:w-24"></div>
<div className="flex w-max items-stretch gap-5 px-2 py-8 sm:gap-8 sm:py-10" id="skillsMarquee">
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="WordPress" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">WordPress</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="Shopify" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">Shopify</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="Custom Solutions" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">Custom Solutions</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="Elementor" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">Elementor</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="WP Bakery" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">WP Bakery</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="HTML" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">HTML</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="CSS" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">CSS</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="JavaScript" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">JavaScript</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="WooCommerce" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">WooCommerce</div>
</div>
<div className="skill-item flex w-40 shrink-0 flex-col items-center text-center sm:w-44">
<div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-28 sm:w-28">
<img alt="SEO" className="h-16 w-16 object-contain sm:h-20 sm:w-20" src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"/>
</div>
<div className="mt-5 text-base font-medium uppercase tracking-tight text-white sm:text-lg">SEO</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden border-t border-stone-900 bg-black" id="process">
<div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
<div className="reveal will-change-transform" style={{transitionDelay: '350ms'}}>
<div className="text-center">
<div className="text-sm font-medium text-lime-300">Workflow</div>
<div className="mx-auto mt-4 flex max-w-5xl items-start justify-center gap-3 sm:gap-4">
<div className="relative mt-4 hidden h-10 w-10 shrink-0 rounded-full border border-lime-400/70 sm:block">
<span className="absolute left-1 top-1 inline-flex h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_0.75rem_rgba(190,242,100,0.55)]"></span>
</div>
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Proven Work Methodology
              </h2>
</div>
</div>
</div>
<div className="mt-14 sm:mt-16">
<div className="relative">
<div className="absolute left-0 right-0 top-14 hidden h-px bg-white/8 lg:block"></div>
<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
<div className="reveal relative text-center will-change-transform lg:text-left" style={{transitionDelay: '350ms'}}>
<div className="flex flex-col items-center lg:items-start">
<div className="text-2xl font-medium tracking-tight text-lime-300">Step 01</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-lime-400 shadow-[0_0_1.5rem_rgba(190,242,100,0.5)]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-medium leading-none tracking-tight text-white/[0.05] sm:text-8xl">01</div>
<h3 className="mt-3 text-3xl font-medium tracking-tight text-lime-300 sm:text-4xl lg:max-w-xs">Consultation &amp; Goal Setting</h3>
<p className="mx-auto mt-5 max-w-xs text-xl leading-relaxed text-white/80 lg:mx-0">
                  We will understand your requirements for a Shopify store, whether a new build, migration, or enhancement.
                </p>
</div>
<div className="reveal relative text-center will-change-transform lg:text-left" style={{transitionDelay: '350ms'}}>
<div className="flex flex-col items-center lg:items-start">
<div className="text-2xl font-medium tracking-tight text-lime-300">Step 02</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-lime-400 shadow-[0_0_1.5rem_rgba(190,242,100,0.5)]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-medium leading-none tracking-tight text-white/[0.05] sm:text-8xl">02</div>
<h3 className="mt-3 text-3xl font-medium tracking-tight text-lime-300 sm:text-4xl lg:max-w-sm">Platform Transition &amp; Customization</h3>
<p className="mx-auto mt-5 max-w-xs text-xl leading-relaxed text-white/80 lg:mx-0">
                  Our experts will plan to migrate existing stores, private and public app integrations, and customizations to your store.
                </p>
</div>
<div className="reveal relative text-center will-change-transform lg:text-left" style={{transitionDelay: '350ms'}}>
<div className="flex flex-col items-center lg:items-start">
<div className="text-2xl font-medium tracking-tight text-lime-300">Step 03</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-lime-400 shadow-[0_0_1.5rem_rgba(190,242,100,0.5)]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-medium leading-none tracking-tight text-white/[0.05] sm:text-8xl">03</div>
<h3 className="mt-3 text-3xl font-medium tracking-tight text-lime-300 sm:text-4xl lg:max-w-sm">Functional Enhancements</h3>
<p className="mx-auto mt-5 max-w-xs text-xl leading-relaxed text-white/80 lg:mx-0">
                  We will focus on theme enhancement and app integration for improved user experience and functionality.
                </p>
</div>
<div className="reveal relative text-center will-change-transform lg:text-left" style={{transitionDelay: '350ms'}}>
<div className="flex flex-col items-center lg:items-start">
<div className="text-2xl font-medium tracking-tight text-lime-300">Step 04</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-lime-400 shadow-[0_0_1.5rem_rgba(190,242,100,0.5)]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-medium leading-none tracking-tight text-white/[0.05] sm:text-8xl">04</div>
<h3 className="mt-3 text-3xl font-medium tracking-tight text-lime-300 sm:text-4xl lg:max-w-sm">Optimization Strategy</h3>
<p className="mx-auto mt-5 max-w-xs text-xl leading-relaxed text-white/80 lg:mx-0">
                  We will address speed conversion, and SEO optimization to maximize your store's performance, ensuring user-friendliness.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-stone-200/70 bg-stone-100/80" id="work">
<div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
<div className="reveal will-change-transform text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">Featured Projects</h2>
<p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            A selection of recent work showcasing modern web development techniques and creative problem-solving.
          </p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
<button className="case-card reveal group overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-sm shadow-stone-900/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10" data-case="wordpress" type="button">
<div className="h-36 overflow-hidden bg-sky-200">
<img alt="WordPress sites" className="h-full w-full object-cover opacity-75 transition duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">WordPress sites</h3>
<p className="mt-2 text-base text-slate-600">Themes, editable sections, and speed improvements for marketing and content-driven websites.</p>
</div>
<i className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" data-lucide="arrow-up-right"></i>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                  Custom theme + templates
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                  CMS editing experience
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                  Core Web Vitals improvements
                </li>
</ul>
<div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Deliverable time</span>
<span className="text-sm font-medium text-slate-900">3–6 weeks</span>
</div>
</div>
</button>
<button className="case-card reveal group overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-sm shadow-stone-900/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10" data-case="shopify" type="button">
<div className="h-36 overflow-hidden bg-slate-900">
<img alt="Shopify storefronts" className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Shopify storefronts</h3>
<p className="mt-2 text-base text-slate-600">Product pages, collection UX, and conversion-ready sections tailored for ecommerce growth.</p>
</div>
<i className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" data-lucide="arrow-up-right"></i>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                  Theme sections + blocks
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                  Conversion improvements
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                  Speed + UX polish
                </li>
</ul>
<div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Deliverable time</span>
<span className="text-sm font-medium text-slate-900">2–5 weeks</span>
</div>
</div>
</button>
<button className="case-card reveal group overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-sm shadow-stone-900/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10" data-case="custom" type="button">
<div className="h-36 overflow-hidden bg-fuchsia-100">
<img alt="Custom solutions" className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Custom solutions</h3>
<p className="mt-2 text-base text-slate-600">Dashboards, portals, and internal tools with thoughtful UX and scalable front-end systems.</p>
</div>
<i className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" data-lucide="arrow-up-right"></i>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500"></span>
                  Design system foundations
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500"></span>
                  Complex states handled
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500"></span>
                  Documentation + handoff
                </li>
</ul>
<div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Deliverable time</span>
<span className="text-sm font-medium text-slate-900">4–10 weeks</span>
</div>
</div>
</button>
<button className="case-card reveal group overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-sm shadow-stone-900/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10" data-case="react" type="button">
<div className="h-36 overflow-hidden bg-cyan-100">
<img alt="React apps" className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">React apps</h3>
<p className="mt-2 text-base text-slate-600">Modern interfaces, reusable components, and app-like flows for interactive digital products.</p>
</div>
<i className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" data-lucide="arrow-up-right"></i>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span>
                  Component library
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span>
                  Smooth micro-interactions
                </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span>
                  Performance tuning
                </li>
</ul>
<div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Deliverable time</span>
<span className="text-sm font-medium text-slate-900">3–8 weeks</span>
</div>
</div>
</button>
</div>
<div className="mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-blue-900/20 transition-colors hover:bg-blue-500" href="#contact">
            View All Projects
            <i className="h-4 w-4 text-white" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>
<section className="border-t border-slate-900 bg-[linear-gradient(135deg,#0f1b4d_0%,#142861_50%,#10214f_100%)]" id="contact">
<div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
<div className="reveal will-change-transform text-center">
<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Let's Work Together</h2>
<p className="mx-auto mt-3 max-w-2xl text-lg text-slate-200">
            Ready to bring your ideas to life? Get in touch and let's discuss how we can create something amazing together.
          </p>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
<div className="reveal will-change-transform lg:col-span-5">
<div className="grid gap-4">
<div className="rounded-xl border border-white/10 bg-white/10 p-5 shadow-sm shadow-black/10 backdrop-blur">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
<i className="h-4 w-4 text-white" data-lucide="mail"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white">Email</div>
<div className="mt-1 text-base text-slate-200">hello@yourname.com</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/10 p-5 shadow-sm shadow-black/10 backdrop-blur">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
<i className="h-4 w-4 text-white" data-lucide="phone"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white">Phone</div>
<div className="mt-1 text-base text-slate-200">+1 (555) 123-4567</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/10 p-5 shadow-sm shadow-black/10 backdrop-blur">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
<i className="h-4 w-4 text-white" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white">Location</div>
<div className="mt-1 text-base text-slate-200">San Francisco, CA</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-sm shadow-black/10">
<img alt="Workspace" className="h-56 w-full object-cover sm:h-64" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>
<div className="reveal will-change-transform lg:col-span-7">
<div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm shadow-black/10 backdrop-blur sm:p-6">
<form className="grid gap-4" id="contactForm">
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-xs font-medium text-slate-100">Full Name</span>
<input className="h-11 rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-slate-300/70 outline-none transition focus:border-blue-400 focus:ring-2" placeholder="Your Name" required="" style={{-TwRingColor: 'rgba(96,165,250,.28)'}}/>
</label>
<label className="grid gap-2">
<span className="text-xs font-medium text-slate-100">Email Address</span>
<input className="h-11 rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-slate-300/70 outline-none transition focus:border-blue-400 focus:ring-2" placeholder="your@email.com" required="" style={{-TwRingColor: 'rgba(96,165,250,.28)'}} type="email"/>
</label>
</div>
<label className="grid gap-2">
<span className="text-xs font-medium text-slate-100">Subject</span>
<input className="h-11 rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-slate-300/70 outline-none transition focus:border-blue-400 focus:ring-2" placeholder="Project Discussion" style={{-TwRingColor: 'rgba(96,165,250,.28)'}}/>
</label>
<label className="grid gap-2">
<span className="text-xs font-medium text-slate-100">Message</span>
<textarea className="rounded-lg border border-white/15 bg-white/10 px-3 py-3 text-sm text-white placeholder:text-slate-300/70 outline-none transition focus:border-blue-400 focus:ring-2" placeholder="Tell me about your project..." required="" rows="6" style={{-TwRingColor: 'rgba(96,165,250,.28)'}}></textarea>
</label>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-slate-200" id="formStatus"></p>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500" type="submit">
<i className="h-4 w-4 text-white" data-lucide="send"></i>
                    Send Message
                  </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-stone-200/70 bg-white">
<div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
<div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm shadow-stone-900/5">
<div className="pointer-events-none absolute inset-0">
<div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#FC4F24] opacity-50 blur-3xl"></div>
<div className="absolute bottom-[-6rem] right-[-6rem] h-72 w-72 rounded-full bg-[#E3894C] opacity-40 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-stone-50">
<span className="text-sm font-medium tracking-tight">JS</span>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Your Name</div>
<div className="text-xs text-stone-600">© <span id="year">2026</span> All rights reserved</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50" href="#top">
<i className="h-4 w-4 text-stone-800" data-lucide="arrow-up"></i>
                  Back to top
                </a>
<a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 transition-colors hover:bg-stone-50" href="#">
<i className="h-5 w-5 text-stone-700" data-lucide="github"></i>
</a>
<a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 transition-colors hover:bg-stone-50" href="#">
<i className="h-5 w-5 text-stone-700" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-stone-600">Built with care: smooth motion, accessible patterns, and fast UI.</p>
<div className="flex items-center gap-2 text-xs text-stone-600">
<span className="inline-flex h-2 w-2 rounded-full" style={{background: '#FC4F24'}}></span>
<span className="font-medium">#FC4F24</span>
<span className="ml-2 inline-flex h-2 w-2 rounded-full" style={{background: '#E3894C'}}></span>
<span className="font-medium">#E3894C</span>
</div>
</div>
</div>
</div>
</div>
</footer>
<div className="fixed inset-0 z-[60] hidden" id="caseModal">
<div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm" id="caseOverlay"></div>
<div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6">
<div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl shadow-stone-900/20">
<div className="pointer-events-none absolute inset-0">
<div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full opacity-40 blur-3xl" id="modalGlowA" style={{background: '#FC4F24'}}></div>
<div className="absolute bottom-[-6rem] left-[-6rem] h-72 w-72 rounded-full opacity-35 blur-3xl" id="modalGlowB" style={{background: '#E3894C'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white"></div>
</div>
<div className="relative border-b border-stone-200 px-5 py-4 sm:px-6">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="text-xs font-medium text-stone-600">Case</div>
<h3 className="mt-1 text-xl font-medium tracking-tight text-stone-900 sm:text-2xl" id="modalTitle">Projects</h3>
<p className="mt-2 text-sm text-stone-600" id="modalDesc">Selected work inside this category.</p>
</div>
<button aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 transition-colors hover:bg-stone-50" id="closeModal" type="button">
<i className="h-5 w-5 text-stone-700" data-lucide="x"></i>
</button>
</div>
</div>
<div className="relative p-5 sm:p-6">
<div className="grid gap-4 sm:grid-cols-2" id="modalGrid"></div>
<div className="mt-6 flex items-center justify-between">
<p className="text-xs text-stone-600">Want to see full case studies? Share your requirements.</p>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800" href="#contact" id="modalCta">
<i className="h-4 w-4 text-white" data-lucide="message-circle"></i>
                Contact
              </a>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
