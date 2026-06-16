import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Navigation handling
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");
    const menuIcon = document.getElementById("menuIcon");

    menuBtn?.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
      const open = !mobileNav.classList.contains("hidden");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (menuIcon) {
        menuIcon.setAttribute("icon", open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear");
      }
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
          if (menuIcon) menuIcon.setAttribute("icon", "solar:hamburger-menu-linear");
        }
      });
    });

    // Reveal animations
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll(".reveal"));

    const setInitial = (el) => {
      el.classList.add("will-change-transform");
      el.style.opacity = "0";
      el.style.transform = "translate3d(0, 1.5rem, 0)";
      el.style.transition =
        "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)";
    };

    const show = (el, delay = 0) => {
      const existingDelay = el.style.transitionDelay || `${delay}ms`;
      el.style.transitionDelay = existingDelay;
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

    // GSAP Scroll interactions
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
          const c = mix("#bef264", "#2dd4bf", p);
          if (glow) glow.style.background = c;

          const ringA = `rgba(0, 0, 0, 0.5) 0px 10px 30px, rgba(190, 242, 100, 0.15) 0px 0px 0px 2px inset`;
          const ringB = `rgba(0, 0, 0, 0.5) 0px 10px 30px, rgba(45, 212, 191, 0.15) 0px 0px 0px 2px inset`;

          if (cardA) cardA.style.boxShadow = p < 0.5 ? ringA : ringB;
          if (cardB) cardB.style.boxShadow = p > 0.5 ? ringA : ringB;
        },
      });
    }

    // Forms
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (status) status.textContent = "Message sent. I’ll get back to you shortly.";
      form.reset();
      setTimeout(() => status.textContent = "", 5000);
    });

    // Modal data
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
            <div class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 shadow-lg transition-all hover:-translate-y-1 hover:border-[#bef264]/40 hover:bg-white/[0.04] hover:shadow-[0_10px_20px_-5px_rgba(190,242,100,0.1)]">
              <div class="absolute inset-0 bg-gradient-to-br from-[#bef264]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div class="relative flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <div class="text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264]">${it.name}</div>
                  <div class="mt-1 text-xs text-zinc-400">${it.meta}</div>
                </div>
                <span class="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors group-hover:border-[#bef264]/40 group-hover:text-[#bef264]">${it.tag}</span>
              </div>
            </div>
          `
        )
        .join("");

      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    };

    const closeModalFn = () => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };

    document.querySelectorAll(".case-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const caseId = btn.getAttribute("data-case");
        if(caseId) openModal(caseId);
      });
    });

    closeBtn?.addEventListener("click", closeModalFn);
    overlay?.addEventListener("click", closeModalFn);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModalFn();
    });

    // Marquee
    const marquee = document.getElementById("skillsMarquee");

    if (marquee && !prefersReduced) {
      marquee.innerHTML += marquee.innerHTML;

      const getLoopWidth = () => marquee.scrollWidth / 2;
      let loopWidth = getLoopWidth();

      const tween = gsap.to(marquee, {
        x: () => -loopWidth,
        duration: 35,
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
      
<div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#bef264]/[0.04] via-[#09090b]/0 to-[#09090b]/0"></div>
<header className="sticky top-0 z-50 border-b border-white/5 bg-[#09090b]/60 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
<a className="group flex items-center gap-3" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all group-hover:border-[#bef264]/40 group-hover:bg-[#bef264]/10 group-hover:shadow-[0_0_15px_rgba(190,242,100,0.2)]">
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#bef264] transition-colors">JS</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-white">Your Name</div>
<div className="text-xs text-zinc-500 transition-colors group-hover:text-zinc-400">Design • Build • Ship</div>
</div>
</a>
<nav className="hidden items-center gap-6 sm:flex">
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#bef264]" href="#about">About</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#bef264]" href="#tech">Technologies</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#bef264]" href="#process">Workflow</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#bef264]" href="#work">Portfolio</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#bef264]" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white shadow-sm shadow-black/50 transition-all hover:border-[#bef264]/50 hover:bg-[#bef264]/10 hover:text-[#bef264] hover:shadow-[0_0_20px_rgba(190,242,100,0.2)]" href="#contact">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
          Let’s talk
        </a>
<button aria-expanded="false" aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 shadow-sm transition-all hover:border-[#bef264]/50 hover:bg-[#bef264]/10 hover:text-[#bef264] sm:hidden" id="menuBtn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" id="menuIcon" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="hidden border-t border-white/5 bg-[#09090b]/95 backdrop-blur-xl" id="mobileNav">
<div className="mx-auto max-w-6xl px-6 py-4 sm:px-8">
<div className="grid gap-3">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-[#bef264]" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-[#bef264]" href="#tech">Technologies</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-[#bef264]" href="#process">Workflow</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-[#bef264]" href="#work">Portfolio</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-[#bef264]" href="#contact">Contact</a>
</div>
</div>
</div>
</header>
<main className="relative z-10" id="top">

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#bef264]/20 to-transparent blur-[120px]"></div>
<div className="absolute bottom-[-10rem] right-0 h-[25rem] w-[25rem] rounded-full bg-teal-500/10 blur-[100px]"></div>
</div>
<div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-24">
<div className="grid items-center gap-12 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="reveal will-change-transform">
<div className="inline-flex items-center gap-2 rounded-full border border-[#bef264]/30 bg-[#bef264]/10 px-3 py-1 text-xs font-semibold text-[#bef264] shadow-[0_0_15px_rgba(190,242,100,0.15)] backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bef264] opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-[#bef264]"></span>
</span>
                Available for freelance
              </div>
<h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                I build polished web experiences that feel fast, clear, and modern.
              </h1>
<p className="mt-5 max-w-xl text-lg text-zinc-400">
                Portfolio layout with subtle motion, clean typography, and a structure that scales: hero, work, skills, about, testimonials, and contact.
              </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
<a className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#bef264] px-5 py-3 text-sm font-semibold text-[#09090b] shadow-[0_0_20px_rgba(190,242,100,0.25)] transition-all hover:scale-[1.02] hover:bg-[#a3e635] hover:shadow-[0_0_30px_rgba(190,242,100,0.4)]" href="#work">
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  View work
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/10 hover:text-[#bef264] hover:shadow-[0_0_20px_rgba(190,242,100,0.15)]" href="#contact">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Contact
                </a>
</div>
<div className="mt-10 grid max-w-md grid-cols-3 gap-4">
<div className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/5 hover:shadow-[0_0_20px_rgba(190,242,100,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="relative">
<div className="text-lg font-semibold tracking-tight text-white group-hover:text-[#bef264] transition-colors">8+</div>
<div className="mt-1 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Projects shipped</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/5 hover:shadow-[0_0_20px_rgba(190,242,100,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="relative">
<div className="text-lg font-semibold tracking-tight text-white group-hover:text-[#bef264] transition-colors">3yr</div>
<div className="mt-1 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Experience</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/5 hover:shadow-[0_0_20px_rgba(190,242,100,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="relative">
<div className="text-lg font-semibold tracking-tight text-white group-hover:text-[#bef264] transition-colors">Remote</div>
<div className="mt-1 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Worldwide</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="reveal will-change-transform">
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/50 p-6 shadow-2xl shadow-black/80 backdrop-blur-xl transition-all hover:border-[#bef264]/30 hover:shadow-[0_0_40px_-10px_rgba(190,242,100,0.2)]">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent"></div>
<div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#bef264]/10 blur-[50px] transition-all group-hover:bg-[#bef264]/20"></div>
<div className="relative flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#bef264] shadow-[0_0_15px_rgba(190,242,100,0.15)]">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-base font-semibold tracking-tight text-white">Profile</div>
<div className="text-xs text-zinc-400">Quick overview</div>
</div>
</div>
<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">2026</div>
</div>
<div className="relative mt-6 grid gap-3">
<div className="group/item rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-[#bef264]/30 hover:bg-[#bef264]/5">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-[#bef264]">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold tracking-tight text-white group-hover/item:text-[#bef264] transition-colors">Frontend + UI</div>
<div className="mt-1 text-xs text-zinc-400">Responsive layouts, component systems, and motion.</div>
</div>
</div>
</div>
<div className="group/item rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-[#bef264]/30 hover:bg-[#bef264]/5">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-[#bef264]">
<iconify-icon className="text-xl" icon="solar:code-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold tracking-tight text-white group-hover/item:text-[#bef264] transition-colors">Performance-minded</div>
<div className="mt-1 text-xs text-zinc-400">Fast interactions, accessible patterns, clean code.</div>
</div>
</div>
</div>
<div className="group/item rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-[#bef264]/30 hover:bg-[#bef264]/5">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-[#bef264]">
<iconify-icon className="text-xl" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold tracking-tight text-white group-hover/item:text-[#bef264] transition-colors">Product delivery</div>
<div className="mt-1 text-xs text-zinc-400">From wireframe to shipped, iterating quickly.</div>
</div>
</div>
</div>
</div>
<div className="relative mt-6 flex flex-wrap items-center gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300 transition-colors hover:border-[#bef264]/50 hover:bg-[#bef264]/10 hover:text-[#bef264] cursor-default">UI</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300 transition-colors hover:border-[#bef264]/50 hover:bg-[#bef264]/10 hover:text-[#bef264] cursor-default">Frontend</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300 transition-colors hover:border-[#bef264]/50 hover:bg-[#bef264]/10 hover:text-[#bef264] cursor-default">Motion</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300 transition-colors hover:border-[#bef264]/50 hover:bg-[#bef264]/10 hover:text-[#bef264] cursor-default">Accessibility</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-[#09090b]/80" id="about">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.08)_0%,transparent_50%)]"></div>
<div className="absolute right-[10%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[150px]"></div>
</div>
<div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<div className="reveal will-change-transform">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur-sm">
<span className="inline-flex h-2 w-2 rounded-full shadow-[0_0_10px_#bef264]" style={{background: '#bef264'}}></span>
                How I work
              </div>
<h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Calm UI, crisp execution — built for real users.</h2>
<p className="mt-4 text-lg text-zinc-400">
                I focus on clarity, consistent components, and performance. As you scroll, the highlight color subtly shifts to reflect progress — without distracting from content.
              </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/60 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1" id="aboutCardA" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 30px, rgba(190, 242, 100, 0.15) 0px 0px 0px 2px inset'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent"></div>
<div className="relative flex items-center gap-3">
<div className="rounded-lg bg-white/5 p-2 text-[#bef264] shadow-[0_0_15px_rgba(190,242,100,0.1)]">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">Accessible by default</div>
</div>
<p className="relative mt-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Semantic structure, focus states, and readable contrast.</p>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/60 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1" id="aboutCardB" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 30px, rgba(45, 212, 191, 0.15) 0px 0px 0px 2px inset'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent"></div>
<div className="relative flex items-center gap-3">
<div className="rounded-lg bg-white/5 p-2 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.1)]">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-white">Fast interactions</div>
</div>
<p className="relative mt-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Motion that supports understanding, not distraction.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="reveal will-change-transform">
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/80 shadow-2xl shadow-black/80 backdrop-blur-xl" id="aboutImageWrap">
<div className="absolute inset-0 z-0">
<div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full opacity-30 blur-[90px]" id="aboutGlow" style={{background: 'rgb(190, 242, 100)'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]"></div>
</div>
<div className="relative z-10 p-6 sm:p-8">
<div className="flex items-center justify-between gap-4">
<div className="min-w-0">
<div className="text-base font-semibold tracking-tight text-white">Design → Development</div>
<div className="mt-1 text-xs text-zinc-400">Clean details, quick iteration, reliable delivery</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#bef264]/30 bg-[#bef264]/10 px-3 py-1 text-xs font-semibold text-[#bef264] shadow-[0_0_15px_rgba(190,242,100,0.15)]">
<span className="inline-flex h-2 w-2 animate-pulse rounded-full" style={{background: '#bef264'}}></span>
                      Scroll-reactive
                    </div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/5 hover:shadow-[0_0_20px_rgba(190,242,100,0.1)]">
<div className="flex items-center gap-3 text-white">
<iconify-icon className="text-xl text-[#bef264]" icon="solar:pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-semibold tracking-tight">UX-first</div>
</div>
<div className="mt-2 text-xs text-zinc-400">Flows, states, empty screens, and edge cases.</div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/5 hover:shadow-[0_0_20px_rgba(190,242,100,0.1)]">
<div className="flex items-center gap-3 text-white">
<iconify-icon className="text-xl text-[#bef264]" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-semibold tracking-tight">Consistency</div>
</div>
<div className="mt-2 text-xs text-zinc-400">Reusable patterns for speed and coherence.</div>
</div>
</div>
<div className="mt-5 relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-colors group-hover:border-[#bef264]/30">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity group-hover:opacity-40"></div>
<img alt="Workspace" className="h-48 w-full object-cover sm:h-56 transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="mt-5 flex flex-wrap items-center gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">UI Systems</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">A11y</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">Performance</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">Ship fast</span>
</div>
</div>
</div>
<p className="mt-4 text-center text-xs text-zinc-500 sm:text-left">
                Tip: the accent color shifts from <span className="font-semibold text-[#bef264]">#bef264</span> to <span className="font-semibold text-teal-400">#2dd4bf</span> as you scroll.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden border-t border-white/5 bg-[#09090b]" id="tech">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute left-1/2 top-1/2 h-[20rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-[#bef264]/10 via-teal-500/10 to-[#bef264]/10 blur-[120px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(24,24,27,0.8)_100%)]"></div>
</div>
<div className="relative z-10 mx-auto max-w-[90rem] px-6 py-16 sm:px-8 sm:py-24">
<div className="reveal will-change-transform text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Development Skills</h2>
<p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            A focused set of tools and platforms used to build fast, scalable, and polished digital experiences.
          </p>
</div>
<div className="reveal mt-12 will-change-transform sm:mt-16">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] pointer-events-none"></div>
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#09090b] to-transparent sm:w-40"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#09090b] to-transparent sm:w-40"></div>
<div className="flex w-max items-stretch gap-6 px-2 py-10 sm:gap-10 sm:py-14" id="skillsMarquee">

<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="WordPress" className="relative z-10 h-14 w-14 object-contain opacity-70 filter invert transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">WordPress</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="React" className="relative z-10 h-14 w-14 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">React</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="Next.js" className="relative z-10 h-14 w-14 object-contain opacity-70 filter invert transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">Next.js</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="Tailwind CSS" className="relative z-10 h-14 w-14 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">Tailwind</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="JavaScript" className="relative z-10 h-14 w-14 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">JavaScript</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="TypeScript" className="relative z-10 h-14 w-14 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">TypeScript</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="HTML" className="relative z-10 h-14 w-14 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">HTML</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="CSS" className="relative z-10 h-14 w-14 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">CSS</div>
</div>
<div className="skill-item group flex w-36 shrink-0 flex-col items-center text-center sm:w-44 transition-transform hover:-translate-y-2">
<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all group-hover:border-[#bef264]/50 group-hover:bg-[#bef264]/5 group-hover:shadow-[0_0_30px_rgba(190,242,100,0.2)] sm:h-28 sm:w-28">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<img alt="Figma" className="relative z-10 h-14 w-14 object-contain opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 sm:h-16 sm:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/>
</div>
<div className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-[#bef264]">Figma</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden border-t border-white/5 bg-[#09090b]" id="process">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute bottom-0 left-[20%] h-80 w-80 rounded-full bg-[#bef264]/10 blur-[150px]"></div>
<div className="absolute right-[10%] top-[20%] h-96 w-96 rounded-full bg-teal-500/10 blur-[160px]"></div>
</div>
<div className="relative z-10 mx-auto max-w-[90rem] px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
<div className="reveal will-change-transform" style={{transitionDelay: '150ms'}}>
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-[#bef264]/30 bg-[#bef264]/10 px-3 py-1 text-xs font-semibold text-[#bef264] shadow-[0_0_15px_rgba(190,242,100,0.15)] backdrop-blur-sm">Workflow</div>
<div className="mx-auto mt-6 flex max-w-5xl items-start justify-center gap-3 sm:gap-4">
<div className="relative mt-3 hidden h-10 w-10 shrink-0 rounded-full border border-[#bef264]/50 sm:block">
<span className="absolute inset-1 rounded-full bg-[#bef264] shadow-[0_0_20px_rgba(190,242,100,0.6)]"></span>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Proven Methodology
              </h2>
</div>
</div>
</div>
<div className="mt-16 sm:mt-20">
<div className="relative">

<div className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-[#bef264]/40 to-transparent lg:block shadow-[0_0_15px_rgba(190,242,100,0.3)]"></div>
<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
<div className="reveal group relative text-center will-change-transform transition-transform duration-500 hover:-translate-y-3 lg:text-left" style={{transitionDelay: '250ms'}}>
<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-[#bef264]/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="flex flex-col items-center lg:items-start">
<div className="text-xl font-semibold tracking-tight text-[#bef264]">Step 01</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-[#bef264] group-hover:shadow-[0_0_30px_rgba(190,242,100,0.8)]"></span>
<span className="absolute inset-[4px] rounded-full bg-zinc-900 transition-colors group-hover:bg-[#09090b]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-bold leading-none tracking-tight text-white/[0.03] transition-colors duration-500 group-hover:text-[#bef264]/10 sm:text-8xl">01</div>
<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264] sm:text-3xl lg:max-w-xs">Consultation &amp; Goals</h3>
<p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300 lg:mx-0">
                  We will understand your requirements for a store, whether a new build, migration, or enhancement.
                </p>
</div>
<div className="reveal group relative text-center will-change-transform transition-transform duration-500 hover:-translate-y-3 lg:text-left" style={{transitionDelay: '350ms'}}>
<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-[#bef264]/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="flex flex-col items-center lg:items-start">
<div className="text-xl font-semibold tracking-tight text-[#bef264]">Step 02</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-[#bef264] group-hover:shadow-[0_0_30px_rgba(190,242,100,0.8)]"></span>
<span className="absolute inset-[4px] rounded-full bg-zinc-900 transition-colors group-hover:bg-[#09090b]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-bold leading-none tracking-tight text-white/[0.03] transition-colors duration-500 group-hover:text-[#bef264]/10 sm:text-8xl">02</div>
<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264] sm:text-3xl lg:max-w-xs">Platform Transition</h3>
<p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300 lg:mx-0">
                  Our experts will plan to migrate existing stores, app integrations, and custom logic tailored to you.
                </p>
</div>
<div className="reveal group relative text-center will-change-transform transition-transform duration-500 hover:-translate-y-3 lg:text-left" style={{transitionDelay: '450ms'}}>
<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-[#bef264]/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="flex flex-col items-center lg:items-start">
<div className="text-xl font-semibold tracking-tight text-[#bef264]">Step 03</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-[#bef264] group-hover:shadow-[0_0_30px_rgba(190,242,100,0.8)]"></span>
<span className="absolute inset-[4px] rounded-full bg-zinc-900 transition-colors group-hover:bg-[#09090b]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-bold leading-none tracking-tight text-white/[0.03] transition-colors duration-500 group-hover:text-[#bef264]/10 sm:text-8xl">03</div>
<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264] sm:text-3xl lg:max-w-xs">Enhancements</h3>
<p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300 lg:mx-0">
                  We will focus on theme enhancement and app integration for improved user experience and core functionality.
                </p>
</div>
<div className="reveal group relative text-center will-change-transform transition-transform duration-500 hover:-translate-y-3 lg:text-left" style={{transitionDelay: '550ms'}}>
<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-[#bef264]/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="flex flex-col items-center lg:items-start">
<div className="text-xl font-semibold tracking-tight text-[#bef264]">Step 04</div>
<div className="relative mt-8 h-5 w-5">
<span className="absolute inset-0 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-[#bef264] group-hover:shadow-[0_0_30px_rgba(190,242,100,0.8)]"></span>
<span className="absolute inset-[4px] rounded-full bg-zinc-900 transition-colors group-hover:bg-[#09090b]"></span>
</div>
</div>
<div className="pointer-events-none mt-6 text-7xl font-bold leading-none tracking-tight text-white/[0.03] transition-colors duration-500 group-hover:text-[#bef264]/10 sm:text-8xl">04</div>
<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264] sm:text-3xl lg:max-w-xs">Optimization Strategy</h3>
<p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300 lg:mx-0">
                  We address speed conversion, and SEO to maximize your store's performance and ensure user-friendliness.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-[#09090b]" id="work">
<div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.02)_0%,transparent_70%)]"></div>
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute right-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#bef264]/10 blur-[180px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-teal-500/10 blur-[180px]"></div>
</div>
<div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
<div className="reveal will-change-transform text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Featured Projects</h2>
<p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            A selection of recent work showcasing modern web development techniques and creative problem-solving.
          </p>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

<button className="case-card reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/40 text-left shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#bef264]/50 hover:bg-[#18181b]/80 hover:shadow-[0_20px_40px_-10px_rgba(190,242,100,0.2)]" data-case="wordpress" type="button">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative h-40 overflow-hidden bg-zinc-900">
<div className="absolute inset-0 z-10 bg-black/50 transition-colors duration-500 group-hover:bg-transparent"></div>
<img alt="WordPress sites" className="h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="relative flex flex-1 flex-col p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264]">WordPress sites</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">Themes, editable sections, and speed improvements for marketing and content-driven websites.</p>
</div>
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all group-hover:bg-[#bef264] group-hover:text-[#09090b] group-hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-5 space-y-2">
<li className="flex items-start gap-2 text-xs text-zinc-300">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bef264] shadow-[0_0_8px_#bef264]"></span>
                  Custom theme + templates
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bef264] shadow-[0_0_8px_#bef264]"></span>
                  CMS editing experience
                </li>
</ul>
<div className="mt-auto pt-6">
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Deliverable time</span>
<span className="text-xs font-semibold text-white transition-colors group-hover:text-[#bef264]">3–6 weeks</span>
</div>
</div>
</div>
</button>

<button className="case-card reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/40 text-left shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#bef264]/50 hover:bg-[#18181b]/80 hover:shadow-[0_20px_40px_-10px_rgba(190,242,100,0.2)]" data-case="shopify" style={{transitionDelay: '100ms'}} type="button">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative h-40 overflow-hidden bg-zinc-900">
<div className="absolute inset-0 z-10 bg-black/50 transition-colors duration-500 group-hover:bg-transparent"></div>
<img alt="Shopify storefronts" className="h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="relative flex flex-1 flex-col p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264]">Shopify storefronts</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">Product pages, collection UX, and conversion-ready sections tailored for ecommerce.</p>
</div>
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all group-hover:bg-[#bef264] group-hover:text-[#09090b] group-hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-5 space-y-2">
<li className="flex items-start gap-2 text-xs text-zinc-300">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bef264] shadow-[0_0_8px_#bef264]"></span>
                  Theme sections + blocks
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bef264] shadow-[0_0_8px_#bef264]"></span>
                  Conversion improvements
                </li>
</ul>
<div className="mt-auto pt-6">
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Deliverable time</span>
<span className="text-xs font-semibold text-white transition-colors group-hover:text-[#bef264]">2–5 weeks</span>
</div>
</div>
</div>
</button>

<button className="case-card reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/40 text-left shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#bef264]/50 hover:bg-[#18181b]/80 hover:shadow-[0_20px_40px_-10px_rgba(190,242,100,0.2)]" data-case="custom" style={{transitionDelay: '200ms'}} type="button">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative h-40 overflow-hidden bg-zinc-900">
<div className="absolute inset-0 z-10 bg-black/50 transition-colors duration-500 group-hover:bg-transparent"></div>
<img alt="Custom solutions" className="h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="relative flex flex-1 flex-col p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-[#bef264]">Custom solutions</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">Dashboards, portals, and internal tools with thoughtful UX and scalable systems.</p>
</div>
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all group-hover:bg-[#bef264] group-hover:text-[#09090b] group-hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-5 space-y-2">
<li className="flex items-start gap-2 text-xs text-zinc-300">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bef264] shadow-[0_0_8px_#bef264]"></span>
                  Design system foundations
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bef264] shadow-[0_0_8px_#bef264]"></span>
                  Complex states handled
                </li>
</ul>
<div className="mt-auto pt-6">
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Deliverable time</span>
<span className="text-xs font-semibold text-white transition-colors group-hover:text-[#bef264]">4–10 weeks</span>
</div>
</div>
</div>
</button>


</div>
<div className="mt-14 flex justify-center reveal">
<a className="group inline-flex items-center gap-2 rounded-lg bg-[#bef264] px-6 py-3.5 text-sm font-semibold text-[#09090b] shadow-[0_0_20px_rgba(190,242,100,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#a3e635] hover:shadow-[0_0_30px_rgba(190,242,100,0.4)]" href="#contact">
            View All Projects
            <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-[#09090b]" id="contact">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-[#bef264]/10 blur-[150px]"></div>
<div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-teal-500/5 blur-[150px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_100%)]"></div>
</div>
<div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
<div className="reveal will-change-transform text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Let's Work Together</h2>
<p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Ready to bring your ideas to life? Get in touch and let's discuss how we can create something amazing together.
          </p>
</div>
<div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
<div className="reveal will-change-transform lg:col-span-5">
<div className="grid gap-4">
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#18181b]/60 p-6 shadow-2xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#bef264]/40 hover:bg-[#18181b]/80 hover:shadow-[0_15px_30px_-10px_rgba(190,242,100,0.15)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#bef264] transition-all group-hover:bg-[#bef264] group-hover:text-[#09090b] group-hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-zinc-300">Email</div>
<div className="mt-1 text-base text-white transition-colors group-hover:text-[#bef264]">hello@yourname.com</div>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#18181b]/60 p-6 shadow-2xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#bef264]/40 hover:bg-[#18181b]/80 hover:shadow-[0_15px_30px_-10px_rgba(190,242,100,0.15)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#bef264] transition-all group-hover:bg-[#bef264] group-hover:text-[#09090b] group-hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-zinc-300">Phone</div>
<div className="mt-1 text-base text-white transition-colors group-hover:text-[#bef264]">+1 (555) 123-4567</div>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#18181b]/60 p-6 shadow-2xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#bef264]/40 hover:bg-[#18181b]/80 hover:shadow-[0_15px_30px_-10px_rgba(190,242,100,0.15)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="relative flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#bef264] transition-all group-hover:bg-[#bef264] group-hover:text-[#09090b] group-hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]">
<iconify-icon className="text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-zinc-300">Location</div>
<div className="mt-1 text-base text-white transition-colors group-hover:text-[#bef264]">San Francisco, CA</div>
</div>
</div>
</div>
<div className="group relative mt-2 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-xl transition-colors group-hover:border-white/20">
<div className="absolute inset-0 z-10 bg-black/40 transition-colors duration-500 group-hover:bg-transparent"></div>
<img alt="Workspace" className="h-48 w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-56" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>
<div className="reveal will-change-transform lg:col-span-7">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/60 p-6 shadow-2xl shadow-black/80 backdrop-blur-xl sm:p-8">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none z-0"></div>
<div className="absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full bg-[#bef264]/20 blur-[60px]"></div>
<form className="relative z-10 grid gap-5" id="contactForm">
<div className="grid gap-5 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Full Name</span>
<input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-[#bef264]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#bef264]/50 focus:shadow-[0_0_15px_rgba(190,242,100,0.15)]" placeholder="Your Name" required=""/>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Email Address</span>
<input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-[#bef264]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#bef264]/50 focus:shadow-[0_0_15px_rgba(190,242,100,0.15)]" placeholder="your@email.com" required="" type="email"/>
</label>
</div>
<label className="grid gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Subject</span>
<input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-[#bef264]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#bef264]/50 focus:shadow-[0_0_15px_rgba(190,242,100,0.15)]" placeholder="Project Discussion"/>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Message</span>
<textarea className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-[#bef264]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#bef264]/50 focus:shadow-[0_0_15px_rgba(190,242,100,0.15)]" placeholder="Tell me about your project..." required="" rows="5"></textarea>
</label>
<div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs font-medium text-[#bef264]" id="formStatus"></p>
<button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#bef264] px-6 py-3.5 text-sm font-semibold text-[#09090b] shadow-[0_0_20px_rgba(190,242,100,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#a3e635] hover:shadow-[0_0_30px_rgba(190,242,100,0.4)]" type="submit">
<iconify-icon className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Send Message
                  </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#09090b]">
<div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181b]/50 shadow-2xl shadow-black/80 backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute left-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#bef264] opacity-15 blur-[120px]"></div>
<div className="absolute bottom-[-6rem] right-[-6rem] h-72 w-72 rounded-full bg-teal-500 opacity-15 blur-[120px]"></div>
</div>
<div className="relative z-10 p-6 sm:p-10">
<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="text-sm font-semibold tracking-tight text-white">JS</span>
</div>
<div>
<div className="text-base font-semibold tracking-tight text-white">Your Name</div>
<div className="text-sm text-zinc-500">© <span id="year">2026</span> All rights reserved</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/10 hover:text-[#bef264] hover:shadow-[0_0_15px_rgba(190,242,100,0.15)]" href="#top">
<iconify-icon className="text-lg" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Back to top
                </a>
<a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/10 hover:text-[#bef264] hover:shadow-[0_0_15px_rgba(190,242,100,0.15)]" href="#">
<iconify-icon className="text-xl" icon="solar:laptop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#bef264]/40 hover:bg-[#bef264]/10 hover:text-[#bef264] hover:shadow-[0_0_15px_rgba(190,242,100,0.15)]" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-zinc-500">Built with care: smooth motion, dark tones, and fast UI.</p>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_#bef264]" style={{background: '#bef264'}}></span>
<span className="font-medium">#bef264</span>
<span className="ml-3 inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_#2dd4bf]" style={{background: '#2dd4bf'}}></span>
<span className="font-medium">#2dd4bf</span>
</div>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="caseModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" id="caseOverlay"></div>
<div className="relative mx-auto flex min-h-full items-center justify-center p-4 sm:p-6">
<div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#09090b] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full opacity-15 blur-[100px]" id="modalGlowA" style={{background: '#bef264'}}></div>
<div className="absolute bottom-[-6rem] left-[-6rem] h-72 w-72 rounded-full opacity-15 blur-[100px]" id="modalGlowB" style={{background: '#2dd4bf'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]"></div>
</div>
<div className="relative z-10 border-b border-white/10 bg-[#18181b]/50 px-6 py-5 backdrop-blur-xl">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="text-xs font-semibold uppercase tracking-wider text-[#bef264]">Case Study</div>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl" id="modalTitle">Projects</h3>
<p className="mt-2 text-sm text-zinc-400" id="modalDesc">Selected work inside this category.</p>
</div>
<button aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white" id="closeModal" type="button">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="relative z-10 p-6 sm:p-8">
<div className="grid gap-4 sm:grid-cols-2" id="modalGrid"></div>
<div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
<p className="text-sm text-zinc-400">Want to see full case studies? Share your requirements.</p>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#bef264] px-5 py-2.5 text-sm font-semibold text-[#09090b] shadow-[0_0_15px_rgba(190,242,100,0.25)] transition-all hover:bg-[#a3e635] hover:shadow-[0_0_25px_rgba(190,242,100,0.4)]" href="#contact" id="modalCta">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Contact me
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
