import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context":"https://schema.org",
"@type":"Organization",
"name":"Webdesigncult",
"url":"https://webdesigncult.com",
"description":"Premium web design agency for US & UK businesses. Conversion-focused web design, WordPress/Divi development, e-commerce, landing pages, and performance optimization.",
"sameAs":[],
"contactPoint":[{"@type":"ContactPoint","contactType":"Sales","availableLanguage":["en"],"email":"hello@webdesigncult.com"}]
}



{
"@context":"https://schema.org",
"@type":"WebSite",
"name":"Webdesigncult",
"url":"https://webdesigncult.com",
"potentialAction":{
"@type":"SearchAction",
"target":"https://webdesigncult.com/?q={search_term_string}",
"query-input":"required name=search_term_string"
}
}



    // Helpers
    const $ = (s, root=document) => root.querySelector(s);
    const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));

    // Year
    $("#year").textContent = new Date().getFullYear();

    // Mobile menu
    const mobileMenuBtn = $("#mobileMenuBtn");
    const mobileMenu = $("#mobileMenu");
    function setMenu(open) {
      mobileMenu.classList.toggle("hidden", !open);
      mobileMenuBtn.setAttribute("aria-expanded", String(open));
      const icon = mobileMenuBtn.querySelector("iconify-icon");
      icon.setAttribute("icon", open ? "lucide:x" : "lucide:menu");
    }
    mobileMenuBtn?.addEventListener("click", () => setMenu(mobileMenu.classList.contains("hidden")));
    $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => setMenu(false)));

    // Service tabs
    const tabs = $$(".serviceTab");
    const panels = $$(".servicePanel");
    function openPanel(key) {
      panels.forEach(p => p.classList.add("hidden"));
      const panel = $("#servicePanel-" + key);
      panel?.classList.remove("hidden");

      tabs.forEach(t => {
        const active = t.dataset.detail === key;
        t.classList.toggle("border-cyan-300/30", active);
        t.classList.toggle("bg-cyan-300/10", active);
        t.classList.toggle("text-cyan-100", active);
        t.classList.toggle("border-white/10", !active);
        t.classList.toggle("bg-black/20", !active);
        t.classList.toggle("text-white/80", !active);
      });
    }
    tabs.forEach(t => t.addEventListener("click", () => openPanel(t.dataset.detail)));
    // Deep-link open buttons
    $$("[data-open]").forEach(a => a.addEventListener("click", () => openPanel(a.dataset.open)));
    openPanel("webdesign");

    // FAQ accordion
    $$(".faqBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const body = btn.querySelector(".faqBody");
        const icon = btn.querySelector(".faqIcon");
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        body.classList.toggle("hidden", expanded);
        icon.setAttribute("icon", expanded ? "lucide:plus" : "lucide:minus");
      });
    });

    // Reveal on scroll
    const revealEls = $$(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("opacity-100", "translate-y-0");
          e.target.classList.remove("opacity-0", "translate-y-4");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => {
      el.classList.add("opacity-0", "translate-y-4", "transition", "duration-700", "ease-out");
      io.observe(el);
    });

    // Back to top visibility
    const toTop = $("#toTop");
    window.addEventListener("scroll", () => {
      const show = window.scrollY > 800;
      toTop.classList.toggle("hidden", !show);
    }, { passive: true });
    toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Custom cursor
    const cursor = $("#cursor");
    const cursorDot = $("#cursorDot");
    let mx = 0, my = 0, dx = 0, dy = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }, { passive: true });

    function animateCursor() {
      dx += (mx - dx) * 0.12;
      dy += (my - dy) * 0.12;
      cursor.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    if (cursor && cursorDot) requestAnimationFrame(animateCursor);

    // Theme toggle (dark <-> light)
    const root = document.documentElement;
    const THEME_KEY = "wbc-theme";

    function applyTheme(theme) {
      // Tailwind classes are mostly dark; we provide a light override by flipping body background/text
      const body = document.body;
      const isLight = theme === "light";

      body.classList.toggle("bg-[#0B0E11]", !isLight);
      body.classList.toggle("text-[#F5F7FA]", !isLight);

      body.classList.toggle("bg-[#F6F7FB]", isLight);
      body.classList.toggle("text-[#0B0E11]", isLight);

      // Update meta theme-color
      const meta = document.querySelector('meta[name="theme-color"]');
      meta?.setAttribute("content", isLight ? "#F6F7FB" : "#0B0E11");

      // Swap icons
      const iconName = isLight ? "lucide:sun" : "lucide:moon";
      $("#themeToggle iconify-icon")?.setAttribute("icon", iconName);
      $("#themeToggleMobile iconify-icon")?.setAttribute("icon", iconName);

      localStorage.setItem(THEME_KEY, theme);
    }

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) applyTheme(savedTheme);

    function toggleTheme() {
      const isLight = document.body.classList.contains("bg-[#F6F7FB]");
      applyTheme(isLight ? "dark" : "light");
    }

    $("#themeToggle")?.addEventListener("click", toggleTheme);
    $("#themeToggleMobile")?.addEventListener("click", toggleTheme);

    // Contact form (client-side demo)
    $("#contactForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = $("#formStatus");
      const form = e.currentTarget;

      // basic validation
      const name = $("#name")?.value?.trim();
      const email = $("#email")?.value?.trim();
      const message = $("#message")?.value?.trim();

      if (!name || !email || !message) {
        status.textContent = "Please complete name, email, and project details.";
        status.className = "text-xs text-red-200";
        return;
      }

      // Simulate success (replace with real endpoint)
      status.textContent = "Thanks — request received. We’ll reply within 24 hours.";
      status.className = "text-xs text-cyan-200";
      form.reset();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-fuchsia-500/15 blur-3xl"></div>
<div className="absolute bottom-[-16rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-purple-500/15 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(0,229,255,0.10),transparent_55%),radial-gradient(900px_circle_at_80%_55%,rgba(123,97,255,0.08),transparent_50%)]"></div>
</div>

<div className="hidden lg:block fixed left-0 top-0 z-[60] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-300/5 backdrop-blur-sm transition-transform duration-150 ease-out" id="cursor"></div>
<div className="hidden lg:block fixed left-0 top-0 z-[61] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/70 transition-transform duration-100 ease-out" id="cursorDot"></div>

<div className="border-b border-white/5 bg-black/10 backdrop-blur supports-[backdrop-filter]:bg-black/5">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<p className="text-xs text-white/70">
        Premium web design agency for USA &amp; UK — conversion-first, SEO-ready, fast by default.
      </p>
<div className="hidden items-center gap-3 sm:flex">
<a className="text-xs font-medium text-white/70 hover:text-white transition" href="#pricing">View Packages</a>
<span className="h-4 w-px bg-white/10"></span>
<a className="text-xs font-medium text-cyan-200 hover:text-cyan-100 transition" href="#contact">Book a Call</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B0E11]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0B0E11]/50">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3" href="#home">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
<span className="font-semibold tracking-tight text-sm">WC</span>
</div>
<div className="leading-tight">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight">Webdesigncult</span>
<span className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-[0.65rem] font-medium text-cyan-100 sm:inline">USA • UK</span>
</div>
<p className="text-xs text-white/60">Websites That Convert. Design That Dominates.</p>
</div>
</a>
<nav className="hidden items-center gap-6 lg:flex">
<a className="text-sm font-medium text-white/70 hover:text-white transition" href="#services">Services</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition" href="#work">Work</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition" href="#process">Process</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition" href="#faq">FAQ</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition" href="#about">About</a>
</nav>
<div className="flex items-center gap-2">
<button className="group hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70 hover:text-white hover:border-white/20 transition" id="themeToggle">
<iconify-icon className="text-base text-white/70 group-hover:text-white" icon="lucide:moon" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Mode</span>
</button>
<a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-4 py-2 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
          Get a Free Strategy Call
        </a>
<button aria-expanded="false" aria-label="Open menu" className="inline-flex lg:hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:border-white/20 transition" id="mobileMenuBtn">
<iconify-icon className="text-xl" icon="lucide:menu" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="hidden border-t border-white/5 bg-[#0B0E11]/85 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid gap-2">
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="#services">Services</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="#work">Work</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="#process">Process</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="#pricing">Pricing</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="#faq">FAQ</a>
<a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="#about">About</a>
<a className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-4 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
            Get a Free Strategy Call
          </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition" id="themeToggleMobile">
<iconify-icon className="text-lg" icon="lucide:moon" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Toggle Mode</span>
</button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home">

<section className="relative pt-10 sm:pt-14 lg:pt-20">
<div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80"></span>
            Premium web design agency • USA &amp; UK
            <span className="hidden sm:inline text-white/50">— strategy + design + build + optimization</span>
</div>
<h1 className="mt-5 font-[Bebas_Neue] text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
            High‑Converting Websites <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400">Built to Scale</span>
</h1>
<p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
            Webdesigncult designs and builds SEO‑optimized, lightning‑fast websites that turn visitors into customers.
            Clean UI. Clear messaging. Performance that improves rankings and conversions.
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
              Get a Free Strategy Call
              <iconify-icon className="text-base transition-transform duration-200 group-hover:translate-x-0.5" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:text-white hover:border-white/20 transition" href="#work">
              See Featured Work
              <iconify-icon className="text-base text-cyan-200/90" icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<div className="sm:ml-auto flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/0"></div>
<div className="h-7 w-7 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/0"></div>
<div className="h-7 w-7 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/0"></div>
</div>
<div className="leading-tight">
<p className="text-xs font-semibold tracking-tight">Trusted by founders &amp; teams</p>
<p className="text-xs text-white/60">Fast response • clear timelines • no fluff</p>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 reveal">
<p className="text-xs text-white/60">Avg. speed gains</p>
<p className="mt-1 text-lg font-semibold tracking-tight">30–70%</p>
<p className="mt-1 text-xs text-white/55">Performance-first builds</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 reveal">
<p className="text-xs text-white/60">Typical timeline</p>
<p className="mt-1 text-lg font-semibold tracking-tight">2–6 weeks</p>
<p className="mt-1 text-xs text-white/55">Depending on scope</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 reveal">
<p className="text-xs text-white/60">Conversion focus</p>
<p className="mt-1 text-lg font-semibold tracking-tight">CRO-ready</p>
<p className="mt-1 text-xs text-white/55">Messaging + UX</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 reveal">
<p className="text-xs text-white/60">SEO foundations</p>
<p className="mt-1 text-lg font-semibold tracking-tight">Built-in</p>
<p className="mt-1 text-xs text-white/55">Structure + speed</p>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 reveal">
<div className="absolute -top-5 -right-5 h-24 w-24 rounded-3xl bg-gradient-to-tr from-cyan-300/20 via-blue-400/15 to-fuchsia-400/15 blur-xl"></div>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium text-white/60">Live Conversion Snapshot</p>
<h2 className="mt-2 text-lg font-semibold tracking-tight">Clarity → Trust → Action</h2>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  We engineer pages that answer the buyer’s questions in the right order—then push the next step with confident CTAs.
                </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:line-chart" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60">Above-the-fold clarity</p>
<span className="text-xs font-medium text-cyan-200">High</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60">Mobile performance</p>
<span className="text-xs font-medium text-cyan-200">Optimized</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[76%] rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400"></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60">CTA visibility</p>
<span className="text-xs font-medium text-cyan-200">Strong</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[88%] rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400"></div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:zap" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Want a revenue-first rebuild?</p>
<p className="text-xs text-white/60">We’ll send a 5-point teardown within 24–48 hours.</p>
</div>
</div>
<a className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/20 transition" href="#contact">
                Request a Free Website Teardown
                <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<p className="mt-4 text-xs text-white/50 leading-relaxed">
            Conversion strategy + design + development under one roof. No handoffs. No generic templates.
          </p>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20">
<div className="grid gap-6 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-5 reveal">
<h2 className="font-[Bebas_Neue] text-3xl sm:text-4xl tracking-tight leading-[1]">
            Premium doesn’t mean complicated.<br className="hidden sm:block"/> It means predictable results.
          </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            If your website isn’t generating leads, bookings, or sales, it’s not doing its job.
            Webdesigncult builds sites that are easy to understand, fast to load, and built around what your buyers need to see to say “yes.”
          </p>
</div>
<div className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 reveal">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:badge-check" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Conversion-first UX</p>
<p className="text-xs text-white/60">Structure, hierarchy, intent</p>
</div>
</div>
<p className="mt-3 text-xs text-white/65 leading-relaxed">
              We design flows that remove friction: clear value props, proof, and CTAs that feel inevitable.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 reveal">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">SEO-ready builds</p>
<p className="text-xs text-white/60">Speed + structure</p>
</div>
</div>
<p className="mt-3 text-xs text-white/65 leading-relaxed">
              Clean markup, scalable pages, and on-page foundations that support long-term rankings.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 reveal">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:gauge" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Performance by default</p>
<p className="text-xs text-white/60">Core Web Vitals focus</p>
</div>
</div>
<p className="mt-3 text-xs text-white/65 leading-relaxed">
              Lightweight components, lazy-loaded media, and clean systems for fast, stable pages.
            </p>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 scroll-mt-24" id="services">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="reveal">
<p className="text-xs font-medium text-cyan-200/90">Website design services</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
            Everything you need to launch, rank, and convert
          </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
            Choose a full website build, a high-performance landing page, or a redesign that fixes what’s currently bleeding conversions.
            Built for US &amp; UK markets with messaging that reads confidently—without sounding generic.
          </p>
</div>
<div className="reveal">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 hover:text-white hover:border-white/20 transition" href="#pricing">
            See packages
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Custom Website Design</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                Premium UI/UX designed around your offer, buyer intent, and brand positioning—so visitors understand you fast.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 group-hover:border-white/20 transition">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:layout-dashboard" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-white/65">
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Buyer-driven page structure</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Clear copy blocks + CTA systems</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Responsive by default</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition" data-open="webdesign" href="#servicesDetail">
            Explore Web Design
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">WordPress &amp; Divi Development</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                Clean, maintainable builds in WordPress and Divi—fast editing, stable performance, and SEO-friendly structure.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 group-hover:border-white/20 transition">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:code" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-white/65">
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Divi performance tuning</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Reusable sections &amp; templates</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Launch checklist + QA</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition" data-open="wordpress" href="#servicesDetail">
            Explore WordPress/Divi
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">E‑Commerce / Online Stores</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                Storefronts engineered for conversion rate: product clarity, speed, trust signals, and checkout friction removal.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 group-hover:border-white/20 transition">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:shopping-bag" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-white/65">
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Conversion-focused product pages</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Upsells &amp; bundles (optional)</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Performance + analytics</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition" data-open="ecom" href="#servicesDetail">
            Explore E‑Commerce
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">SEO‑Optimized Website Builds</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                A website that Google can understand—and humans trust. Structured pages built to rank and convert.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 group-hover:border-white/20 transition">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:target" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-white/65">
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> SEO-friendly headings &amp; IA</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Indexable, scalable page patterns</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Technical hygiene checklist</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition" data-open="seo" href="#servicesDetail">
            Explore SEO Websites
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">High‑Performance Landing Pages</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                Built for paid traffic and offers: razor-sharp positioning, proof placement, and CTA design that drives action.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 group-hover:border-white/20 transition">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:mouse-pointer-click" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-white/65">
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Above-the-fold clarity</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Proof, objections, FAQs</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Analytics-ready</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition" href="#contact">
            Build a Landing Page
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Redesigns + Speed Optimization</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                Fix what’s holding you back: unclear messaging, dated UI, slow load times, and weak mobile UX.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 group-hover:border-white/20 transition">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:wrench" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-white/65">
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> CRO + UI refresh</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> Core Web Vitals improvements</li>
<li className="flex gap-2"><span className="text-cyan-200/90">•</span> SEO-safe migrations</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition" href="#contact">
            Request a Redesign Plan
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-12" id="servicesDetail">
<div className="lg:col-span-5 reveal">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<p className="text-xs font-medium text-cyan-200/90">Service detail pages (recommended)</p>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Explore the core service pages</h3>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              These sections are written as standalone service pages you can split into separate URLs for stronger SEO:
              <span className="text-white/80">/web-design</span>, <span className="text-white/80">/wordpress-divi</span>, <span className="text-white/80">/ecommerce</span>, <span className="text-white/80">/seo-websites</span>.
            </p>
<div className="mt-5 flex flex-wrap gap-2">
<button className="serviceTab rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white/20 transition" data-detail="webdesign">Web Design</button>
<button className="serviceTab rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white/20 transition" data-detail="wordpress">WordPress / Divi</button>
<button className="serviceTab rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white/20 transition" data-detail="ecom">E‑Commerce</button>
<button className="serviceTab rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white/20 transition" data-detail="seo">SEO Websites</button>
</div>
</div>
</div>
<div className="lg:col-span-7 reveal">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="servicePanel" id="servicePanel-webdesign">
<p className="text-xs font-medium text-white/60">Web Design (Service Page Copy)</p>
<h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">Web Design that makes your offer instantly obvious</h3>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Most websites fail for one reason: visitors don’t understand what you do in the first few seconds.
                We build premium web design that clarifies your positioning, highlights proof, and guides users to the next step.
              </p>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Who it’s for</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    Founders, service businesses, coaches, consultants, and agencies who want a modern brand presence that converts.
                  </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Problems it solves</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    Low lead volume, unclear messaging, generic templates, weak trust signals, and poor mobile UX.
                  </p>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
                  Book a Strategy Call
                  <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:text-white hover:border-white/20 transition" href="#work">
                  View results
                  <iconify-icon className="text-base" icon="lucide:briefcase" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="servicePanel hidden" id="servicePanel-wordpress">
<p className="text-xs font-medium text-white/60">WordPress / Divi (Service Page Copy)</p>
<h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">WordPress &amp; Divi development that stays fast</h3>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                You get the flexibility of WordPress without the typical bloat. We build streamlined Divi experiences,
                set up reusable components, and harden the foundations for speed, stability, and easy updates.
              </p>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Who it’s for</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    Teams who want to edit content quickly, scale pages, and avoid developer bottlenecks.
                  </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Problems it solves</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    Slow Divi sites, messy templates, inconsistent styling, plugin overload, and fragile page builders.
                  </p>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
                  Talk to a Divi Designer
                  <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:text-white hover:border-white/20 transition" href="#faq">
                  See common questions
                  <iconify-icon className="text-base" icon="lucide:help-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="servicePanel hidden" id="servicePanel-ecom">
<p className="text-xs font-medium text-white/60">E‑Commerce (Service Page Copy)</p>
<h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">E‑commerce websites built for trust and checkout flow</h3>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                A beautiful store isn’t enough. We design for product understanding, persuasion, and speed—so your traffic doesn’t bounce
                before it reaches checkout.
              </p>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Who it’s for</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    DTC brands, boutique stores, and founders launching a new product line or replatforming for performance.
                  </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Problems it solves</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    Low add-to-cart rates, confusing product pages, weak trust elements, slow load times, and leaky checkout.
                  </p>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
                  Get an E‑Commerce Plan
                  <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:text-white hover:border-white/20 transition" href="#pricing">
                  View packages
                  <iconify-icon className="text-base" icon="lucide:tag" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="servicePanel hidden" id="servicePanel-seo">
<p className="text-xs font-medium text-white/60">SEO Websites (Service Page Copy)</p>
<h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">SEO website design that’s built to rank and convert</h3>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                SEO isn’t a plugin. It’s structure, speed, and intent. We build SEO-friendly page systems so each service and location page
                can rank without sacrificing design quality.
              </p>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Who it’s for</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    Local and national businesses that want consistent leads from search in the USA and UK.
                  </p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Problems it solves</p>
<p className="mt-2 text-xs text-white/65 leading-relaxed">
                    Thin pages, poor internal linking, slow site performance, weak on-page targeting, and unclear content hierarchy.
                  </p>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
                  Plan an SEO Build
                  <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 hover:text-white hover:border-white/20 transition" href="#process">
                  See the process
                  <iconify-icon className="text-base" icon="lucide:git-branch" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<p className="mt-6 text-xs text-white/50 leading-relaxed">
              Internal linking suggestions: connect each service page to relevant case studies, pricing packages, process, and FAQ.
            </p>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20">
<div className="grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5 reveal">
<p className="text-xs font-medium text-cyan-200/90">Why Webdesigncult</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
            Built for buyers.<br className="hidden sm:block"/> Designed for trust.
          </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            Your website has one job: move the right people to the right action.
            We combine conversion strategy, premium design, and performance engineering—so the final product isn’t just “nice.”
            It’s measurable.
          </p>
</div>
<div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:message-square" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-semibold tracking-tight">Messaging that sells</p>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              We translate what you do into a value proposition your audience understands immediately—then reinforce it with proof.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:layers" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-semibold tracking-tight">Design systems, not one-offs</p>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              Consistent components across pages mean faster edits, better UX, and a premium feel across every touchpoint.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:shield" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-semibold tracking-tight">Professional QA</p>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              Accessibility checks, mobile behavior testing, and launch validation so you don’t lose leads to avoidable issues.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:timer" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-semibold tracking-tight">Speed as a feature</p>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              Faster pages increase conversions, reduce ad waste, and support SEO. We treat performance as part of the design.
            </p>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 scroll-mt-24" id="process">
<div className="reveal">
<p className="text-xs font-medium text-cyan-200/90">Process</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
          A clear workflow that keeps projects moving
        </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
          You’ll always know what’s happening, what’s next, and what we need from you.
          Transparent milestones, direct communication, and decisions backed by conversion logic.
        </p>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-12">
<div className="lg:col-span-7 grid gap-4">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start gap-4">
<div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/20 text-sm font-semibold tracking-tight">01</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Discovery &amp; Strategy</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  We clarify your offer, ideal customer, competitors, and conversion goal.
                  Deliverable: a messaging brief + page plan that removes guesswork.
                </p>
<p className="mt-3 text-xs text-white/55">Includes: intake form, kickoff call, content plan, conversion priorities.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start gap-4">
<div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/20 text-sm font-semibold tracking-tight">02</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">UX &amp; Wireframing</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  We map the user journey and build wireframes that prioritize clarity and action.
                  This is where conversions are won—before visuals.
                </p>
<p className="mt-3 text-xs text-white/55">Includes: layout hierarchy, CTA placement, proof sections, objection handling.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start gap-4">
<div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/20 text-sm font-semibold tracking-tight">03</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Visual Design</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Premium UI crafted around a modern system: typography, spacing, and components.
                  You’ll get a cohesive style that looks expensive and feels effortless.
                </p>
<p className="mt-3 text-xs text-white/55">Includes: design system, responsive previews, iterative revisions.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start gap-4">
<div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/20 text-sm font-semibold tracking-tight">04</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Development</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Built clean, responsive, and fast—WordPress/Divi or a custom build depending on your needs.
                  Structured for SEO and easy ongoing edits.
                </p>
<p className="mt-3 text-xs text-white/55">Includes: performance optimization, technical SEO basics, QA.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start gap-4">
<div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/20 text-sm font-semibold tracking-tight">05</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Launch &amp; Optimization</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                  We launch with a checklist, monitor for issues, and provide next-step recommendations to improve conversion rate and SEO.
                </p>
<p className="mt-3 text-xs text-white/55">Includes: analytics setup guidance, redirect plan (if redesign), post-launch support window.</p>
</div>
</div>
</div>
</div>
<aside className="lg:col-span-5 reveal">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/20 p-6">
<h3 className="text-xl font-semibold tracking-tight">What you can expect</h3>
<ul className="mt-4 space-y-3 text-sm text-white/70">
<li className="flex gap-2"><iconify-icon className="text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Clear timelines and scope—no surprises.</span></li>
<li className="flex gap-2"><iconify-icon className="text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Direct feedback loops with fast turnaround.</span></li>
<li className="flex gap-2"><iconify-icon className="text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Conversion rationale behind key decisions.</span></li>
<li className="flex gap-2"><iconify-icon className="text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Performance and SEO foundations baked in.</span></li>
</ul>
<div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
<p className="text-xs font-medium text-white/60">Timeline guidance</p>
<p className="mt-2 text-sm text-white/75 leading-relaxed">
                Landing pages: <span className="text-white/90 font-medium">7–14 days</span>.<br/>
                Full websites: <span className="text-white/90 font-medium">2–6 weeks</span>.<br/>
                E‑commerce: <span className="text-white/90 font-medium">4–8 weeks</span>.
              </p>
</div>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
              Start with a Strategy Call
              <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</aside>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 scroll-mt-24" id="work">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between reveal">
<div>
<p className="text-xs font-medium text-cyan-200/90">Portfolio</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
            Featured work with measurable wins
          </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
            Case-study style snapshots showing how we improve conversion, clarity, and speed.
            Want examples specific to your niche? Ask on the call.
          </p>
</div>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 hover:text-white hover:border-white/20 transition" href="#contact">
          Request niche examples
          <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">B2B Consulting Site Rebuild</h3>
<p className="mt-2 text-xs text-white/60">Problem → Solution → Result</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:building-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-4 space-y-3 text-sm text-white/70 leading-relaxed">
<p><span className="text-white/90 font-medium">Problem:</span> traffic was steady, but leads were inconsistent and the offer was unclear above the fold.</p>
<p><span className="text-white/90 font-medium">Solution:</span> new page hierarchy, proof-led sections, and a CTA system tied to specific outcomes.</p>
<p><span className="text-white/90 font-medium">Result:</span> improved lead quality and a smoother booking flow.</p>
</div>
<div className="mt-5 grid grid-cols-3 gap-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">Load time</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↓ 41%</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">Bookings</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↑ 2.1x</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">Bounce</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↓ 18%</p>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/20 transition" href="#contact">
            Build something like this
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">E‑Commerce Product Launch</h3>
<p className="mt-2 text-xs text-white/60">Problem → Solution → Result</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:shopping-cart" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-4 space-y-3 text-sm text-white/70 leading-relaxed">
<p><span className="text-white/90 font-medium">Problem:</span> ads were expensive and product pages didn’t answer objections fast enough.</p>
<p><span className="text-white/90 font-medium">Solution:</span> redesigned product template, trust modules, and speed optimization on mobile.</p>
<p><span className="text-white/90 font-medium">Result:</span> stronger add-to-cart performance and improved conversion efficiency.</p>
</div>
<div className="mt-5 grid grid-cols-3 gap-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">ATC rate</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↑ 27%</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">Mobile LCP</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↓ 0.9s</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">CPA</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↓ 14%</p>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/20 transition" href="#contact">
            Improve conversion rate
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Local SEO Service Pages</h3>
<p className="mt-2 text-xs text-white/60">Problem → Solution → Result</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3">
<iconify-icon className="text-2xl text-cyan-200" icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-4 space-y-3 text-sm text-white/70 leading-relaxed">
<p><span className="text-white/90 font-medium">Problem:</span> ranking pages were thin, inconsistent, and not designed to convert.</p>
<p><span className="text-white/90 font-medium">Solution:</span> scalable service page template with strong internal linking and conversion blocks.</p>
<p><span className="text-white/90 font-medium">Result:</span> more qualified inbound leads and better clarity for buyers.</p>
</div>
<div className="mt-5 grid grid-cols-3 gap-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">Pages</p>
<p className="mt-1 text-sm font-semibold tracking-tight">+18</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">CTR</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↑ 11%</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
<p className="text-xs text-white/60">Leads</p>
<p className="mt-1 text-sm font-semibold tracking-tight">↑ 1.6x</p>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/20 transition" href="#contact">
            Build SEO pages that convert
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20">
<div className="reveal">
<p className="text-xs font-medium text-cyan-200/90">Testimonials</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
          What clients say when results show up
        </h2>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<blockquote className="text-sm text-white/80 leading-relaxed">
            “The new site made our offer obvious. Leads didn’t just increase—our calls got shorter because the website pre-sold the value.”
          </blockquote>
<figcaption className="mt-4 flex items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight">Founder, B2B Services</p>
<p className="text-xs text-white/60">USA</p>
</div>
<div className="flex gap-1 text-cyan-200/80">
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<blockquote className="text-sm text-white/80 leading-relaxed">
            “Speed improved immediately. Our mobile experience finally feels premium and customers actually reach checkout.”
          </blockquote>
<figcaption className="mt-4 flex items-center justify-between gap-4">
<div <p="" className="text-sm font-semibold tracking-tight">Owner, E‑Commerce Brand
<p className="text-xs text-white/60">UK</p>
</div>
<div aria-label="5 out of 5 stars" className="flex gap-1 text-cyan-200/80">
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<blockquote className="text-sm text-white/80 leading-relaxed">
            “Communication was fast and the process was clear. We launched on time—and the new landing page outperformed the old one in week one.”
          </blockquote>
<figcaption className="mt-4 flex items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight">Marketing Lead, SaaS</p>
<p className="text-xs text-white/60">USA</p>
</div>
<div aria-label="5 out of 5 stars" className="flex gap-1 text-cyan-200/80">
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</figcaption>
</figure>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 scroll-mt-24" id="pricing">
<div className="reveal">
<p className="text-xs font-medium text-cyan-200/90">Pricing</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
          Packages built for clarity (and clean launches)
        </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
          Choose a package based on your goal. Every build is designed to convert, optimized to load fast, and structured for SEO.
          Need something custom? We’ll scope it on the call.
        </p>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">

<article className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<header className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Landing Page Sprint</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                Ideal for offers, lead gen, and paid traffic campaigns.
              </p>
</div>
<span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/70">7–14 days</span>
</header>
<p className="mt-5 text-3xl font-semibold tracking-tight">
            from $1,500 <span className="text-sm font-medium text-white/50">/ £1,200</span>
</p>
<ul className="mt-5 space-y-3 text-sm text-white/70">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Conversion-first structure</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Mobile-first design</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Basic SEO setup</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Analytics-ready (GA4 guidance)</span></li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/20 transition" href="#contact">
            Get a landing page quote
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>

<article className="relative rounded-3xl border border-cyan-300/25 bg-gradient-to-b from-cyan-300/10 via-white/5 to-black/20 p-6 reveal">
<div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-3 py-1 text-xs font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10">
            Most popular
          </div>
<header className="flex items-start justify-between gap-4 pt-2">
<div>
<h3 className="text-lg font-semibold tracking-tight">Business Website</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                A full site built to rank and convert: strategy, design, and build.
              </p>
</div>
<span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/70">2–6 weeks</span>
</header>
<p className="mt-5 text-3xl font-semibold tracking-tight">
            from $3,500 <span className="text-sm font-medium text-white/50">/ £2,800</span>
</p>
<ul className="mt-5 space-y-3 text-sm text-white/70">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Discovery + page plan</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Up to 5 core pages</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>SEO-friendly structure + internal linking</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Performance optimization (Core Web Vitals focus)</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>WordPress/Divi or custom build</span></li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-4 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
            Book a free strategy call
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<p className="mt-3 text-xs text-white/55 leading-relaxed">
            Best for service businesses, consultants, agencies, and local SEO.
          </p>
</article>

<article className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<header className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">E‑Commerce Build</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
                Built for product clarity, trust signals, and checkout flow.
              </p>
</div>
<span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/70">4–8 weeks</span>
</header>
<p className="mt-5 text-3xl font-semibold tracking-tight">
            from $6,000 <span className="text-sm font-medium text-white/50">/ £4,800</span>
</p>
<ul className="mt-5 space-y-3 text-sm text-white/70">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Storefront + key templates</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Product page CRO modules</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Performance optimization on mobile</span></li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-cyan-200" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon><span>Analytics + event plan guidance</span></li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/20 transition" href="#contact">
            Get an e‑commerce estimate
            <iconify-icon className="text-base" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-12">
<div className="lg:col-span-8 reveal">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold tracking-tight">Add-ons (optional)</h3>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Copy polishing</p>
<p className="mt-1 text-xs text-white/65 leading-relaxed">We refine your copy for clarity, flow, and stronger CTAs.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Local SEO page system</p>
<p className="mt-1 text-xs text-white/65 leading-relaxed">Service + location templates for scalable rankings.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Speed optimization only</p>
<p className="mt-1 text-xs text-white/65 leading-relaxed">Core Web Vitals tuning for existing WordPress/Divi sites.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<p className="text-sm font-semibold tracking-tight">Ongoing support</p>
<p className="mt-1 text-xs text-white/65 leading-relaxed">Monthly care plans available after launch.</p>
</div>
</div>
</div>
</div>
<aside className="lg:col-span-4 reveal">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/20 p-6">
<h3 className="text-lg font-semibold tracking-tight">Not sure what you need?</h3>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              Tell us your goal and current situation. We’ll recommend the fastest path to results—no overselling.
            </p>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-4 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" href="#contact">
              Book a free call
              <iconify-icon className="text-base" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<p className="mt-3 text-xs text-white/55">
              Typically 15–20 minutes. USA &amp; UK friendly times.
            </p>
</div>
</aside>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 scroll-mt-24" id="faq">
<div className="reveal">
<p className="text-xs font-medium text-cyan-200/90">FAQ</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
          Answers before you ask
        </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
          Transparent, straightforward, and designed to help you choose the right next step.
        </p>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<button aria-expanded="false" className="faqBtn flex w-full items-start justify-between gap-4 text-left">
<span>
<p className="text-sm font-semibold tracking-tight">Do you write the copy?</p>
<p className="mt-2 text-sm text-white/70 leading-relaxed faqBody hidden">
                We can. Many clients provide a rough draft or notes, and we refine it into conversion-friendly website copy.
                If you want fully done-for-you copy, we’ll scope it as an add-on.
              </p>
</span>
<iconify-icon className="faqIcon mt-1 text-xl text-white/70" icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<button aria-expanded="false" className="faqBtn flex w-full items-start justify-between gap-4 text-left">
<span>
<p className="text-sm font-semibold tracking-tight">What platforms do you build on?</p>
<p className="mt-2 text-sm text-white/70 leading-relaxed faqBody hidden">
                Most builds are WordPress/Divi for easy editing, but we can also deliver a lightweight custom static build if speed is the top priority.
                We’ll recommend what fits your team and budget.
              </p>
</span>
<iconify-icon className="faqIcon mt-1 text-xl text-white/70" icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<button aria-expanded="false" className="faqBtn flex w-full items-start justify-between gap-4 text-left">
<span>
<p className="text-sm font-semibold tracking-tight">Will my site be SEO-ready?</p>
<p className="mt-2 text-sm text-white/70 leading-relaxed faqBody hidden">
                Yes. We implement clean structure, headings, internal linking suggestions, and performance improvements—plus metadata placeholders.
                Ongoing SEO campaigns are separate, but your foundation will be solid.
              </p>
</span>
<iconify-icon className="faqIcon mt-1 text-xl text-white/70" icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<button aria-expanded="false" className="faqBtn flex w-full items-start justify-between gap-4 text-left">
<span>
<p className="text-sm font-semibold tracking-tight">Do you work with USA and UK time zones?</p>
<p className="mt-2 text-sm text-white/70 leading-relaxed faqBody hidden">
                Yes. We routinely schedule across EST/PST and GMT/BST. We’ll pick a rhythm that keeps the project moving without meeting overload.
              </p>
</span>
<iconify-icon className="faqIcon mt-1 text-xl text-white/70" icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<button aria-expanded="false" className="faqBtn flex w-full items-start justify-between gap-4 text-left">
<span>
<p className="text-sm font-semibold tracking-tight">What do you need from me to start?</p>
<p className="mt-2 text-sm text-white/70 leading-relaxed faqBody hidden">
                A short intake form, your core offer details, and any existing assets (logo, brand colors, preferred sites, current analytics if available).
                If you don’t have everything, that’s fine—we’ll guide you.
              </p>
</span>
<iconify-icon className="faqIcon mt-1 text-xl text-white/70" icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 reveal">
<button aria-expanded="false" className="faqBtn flex w-full items-start justify-between gap-4 text-left">
<span>
<p className="text-sm font-semibold tracking-tight">Do you offer support after launch?</p>
<p className="mt-2 text-sm text-white/70 leading-relaxed faqBody hidden">
                Yes. Every project includes a short post-launch support window. After that, you can choose an optional care plan for updates,
                backups, security, and ongoing improvements.
              </p>
</span>
<iconify-icon className="faqIcon mt-1 text-xl text-white/70" icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 scroll-mt-24" id="about">
<div className="grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5 reveal">
<p className="text-xs font-medium text-cyan-200/90">About</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
            A small team with a serious standard
          </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            Webdesigncult is a premium studio focused on one thing: websites that turn attention into action.
            We don’t ship generic templates. We build sharp positioning, clean UI systems, and performance that supports SEO and conversion.
          </p>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            You’ll get direct communication, clear milestones, and a site that actually earns its place in your business.
          </p>
</div>
<div className="lg:col-span-7 grid gap-4 sm:grid-cols-2 reveal">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:rocket" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Built to launch</p>
<p className="text-xs text-white/60">Deadlines + focus</p>
</div>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              We keep scope tight and decisions simple, so you ship on time and start capturing leads faster.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Quality controls</p>
<p className="text-xs text-white/60">No sloppy launches</p>
</div>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              Mobile testing, accessibility checks, and performance tuning are part of our baseline—not “extras.”
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:mouse-pointer" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Conversion logic</p>
<p className="text-xs text-white/60">CRO mindset</p>
</div>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              Every page is designed around buyer questions: clarity, proof, objections, and the next step.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
<iconify-icon className="text-xl text-cyan-200" icon="lucide:bolt" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Speed as default</p>
<p className="text-xs text-white/60">Performance-first</p>
</div>
</div>
<p className="mt-3 text-sm text-white/70 leading-relaxed">
              We minimize bloat, compress assets, and keep components lean for fast, stable browsing.
            </p>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 pb-16 scroll-mt-24" id="contact">
<div className="grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5 reveal">
<p className="text-xs font-medium text-cyan-200/90">Contact</p>
<h2 className="mt-2 font-[Bebas_Neue] text-4xl sm:text-5xl tracking-tight leading-[1]">
            Let’s build something that earns attention
          </h2>
<p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            Tell us what you sell, who you sell it to, and what “success” means (leads, bookings, sales).
            We’ll reply with next steps—usually within 24 hours.
          </p>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs font-medium text-white/60">Email</p>
<a className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition" href="mailto:hello@webdesigncult.com">
                hello@webdesigncult.com
                <iconify-icon className="text-base text-cyan-200" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs font-medium text-white/60">Location</p>
<p className="mt-1 text-sm text-white/75">Serving USA &amp; UK (remote)</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs font-medium text-white/60">Response time</p>
<p className="mt-1 text-sm text-white/75">Typically within 24 hours (Mon–Fri)</p>
</div>
</div>
</div>
<div className="lg:col-span-7 reveal">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Request a free strategy call</h3>
<p className="mt-2 text-sm text-white/70 leading-relaxed">
              Share a few details. We’ll reply with available times and (if you want) a quick 5-point teardown of your current site.
            </p>
<form className="mt-6 grid gap-4 sm:grid-cols-2" id="contactForm" novalidate="">
<div className="sm:col-span-1">
<label className="text-xs font-medium text-white/70" htmlFor="name">Name</label>
<input autocomplete="name" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="name" name="name" placeholder="Your name" required=""/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-white/70" htmlFor="email">Email</label>
<input autocomplete="email" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-white/70" htmlFor="company">Company / Brand</label>
<input autocomplete="organization" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="company" name="company" placeholder="Company name"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-medium text-white/70" htmlFor="website">Website (optional)</label>
<input autocomplete="url" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="website" inputmode="url" name="website" placeholder="https://..." type="url"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-medium text-white/70" htmlFor="goal">Primary goal</label>
<select className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="goal" name="goal">
<option className="bg-[#0B0E11]">More leads / bookings</option>
<option className="bg-[#0B0E11]">Sell products (e‑commerce)</option>
<option className="bg-[#0B0E11]">Improve speed / Core Web Vitals</option>
<option className="bg-[#0B0E11]">Redesign / repositioning</option>
<option className="bg-[#0B0E11]">Landing page for ads</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-medium text-white/70" htmlFor="message">Project details</label>
<textarea className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/30" id="message" name="message" placeholder="What do you sell, who is it for, and what needs to change?" required="" rows="5"></textarea>
<p className="mt-2 text-xs text-white/50">By submitting, you agree to be contacted about your request. No spam.</p>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-[#0B0E11] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition" type="submit">
                  Send request
                  <iconify-icon className="text-base" icon="lucide:send" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p aria-live="polite" className="text-xs text-white/60" id="formStatus" role="status"></p>
</div>
</form>
</div>
<div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-6 reveal">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm font-semibold tracking-tight">Prefer email?</p>
<p className="mt-1 text-sm text-white/70">Send a link + your goal and we’ll reply with next steps.</p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/20 transition" href="mailto:hello@webdesigncult.com?subject=Webdesigncult%20Strategy%20Call%20Request">
                Email Webdesigncult
                <iconify-icon className="text-base text-cyan-200" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/10 backdrop-blur supports-[backdrop-filter]:bg-black/5">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<a className="inline-flex items-center gap-3" href="#home">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
<span className="font-semibold tracking-tight text-sm">WC</span>
</div>
<div className="leading-tight">
<p className="text-sm font-semibold tracking-tight">Webdesigncult</p>
<p className="text-xs text-white/60">Websites That Convert. Design That Dominates.</p>
</div>
</a>
<p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
            Premium web design agency serving USA &amp; UK businesses. Conversion-first UX, SEO-ready structure, and performance-by-default builds.
          </p>
<div className="mt-5 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="#contact">
              Book a call
              <iconify-icon className="text-base text-cyan-200" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-white/20 transition" href="mailto:hello@webdesigncult.com">
              Email
              <iconify-icon className="text-base text-cyan-200" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 grid gap-8 sm:grid-cols-3">
<div>
<p className="text-sm font-semibold tracking-tight">Navigate</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#services">Services</a></li>
<li><a className="hover:text-white transition" href="#work">Work</a></li>
<li><a className="hover:text-white transition" href="#process">Process</a></li>
<li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition" href="#faq">FAQ</a></li>
<li><a className="hover:text-white transition" href="#about">About</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Services</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#servicesDetail">Web Design</a></li>
<li><a className="hover:text-white transition" href="#servicesDetail">WordPress / Divi</a></li>
<li><a className="hover:text-white transition" href="#servicesDetail">E‑Commerce</a></li>
<li><a className="hover:text-white transition" href="#servicesDetail">SEO Websites</a></li>
<li><a className="hover:text-white transition" href="#contact">Landing Pages</a></li>
<li><a className="hover:text-white transition" href="#contact">Redesign + Speed</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Notes</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><span className="text-white/60">Email:</span> <a className="hover:text-white transition" href="mailto:hello@webdesigncult.com">hello@webdesigncult.com</a></li>
<li className="text-white/60">Serving: USA &amp; UK</li>
<li className="text-white/60">Response: 24h (Mon–Fri)</li>
</ul>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-white/50">© <span id="year"></span> Webdesigncult. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white transition" href="#contact">Privacy</a>
<span className="h-4 w-px bg-white/10"></span>
<a className="hover:text-white transition" href="#contact">Terms</a>
</div>
</div>
</div>
</footer>

<button aria-label="Back to top" className="hidden fixed bottom-5 right-5 z-50 rounded-2xl border border-white/10 bg-black/30 p-3 text-white/80 backdrop-blur hover:text-white hover:border-white/20 transition" id="toTop">
<iconify-icon className="text-xl" icon="lucide:arrow-up" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>



    </>
  );
}
