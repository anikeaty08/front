import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
parchment: {
50: "#fbf8f2",
100: "#f7f1e7",
200: "#efe4d1",
300: "#e4d2b2",
400: "#d2b786",
500: "#b99259",
600: "#9a7440",
700: "#7c5b35",
800: "#5b432c",
900: "#3f2f22"
},
espresso: {
700: "#3b2a1f",
800: "#2f2118",
900: "#24180f"
},
olive: {
50: "#f6f7f2",
100: "#ecefe3",
200: "#d8dfc6",
300: "#bccaa0",
400: "#9db07a",
500: "#80945f",
600: "#65764a",
700: "#4f5c39",
800: "#3f492f",
900: "#323a27"
},
gold: {
100: "#fbf3d6",
200: "#f3e3b2",
300: "#e9cf83",
400: "#ddb75a",
500: "#c89a36",
600: "#a97a23"
}
},
boxShadow: {
luxe: "0 18px 50px -25px rgba(36, 24, 15, 0.55), 0 10px 24px -18px rgba(36, 24, 15, 0.35)",
card: "0 18px 55px -45px rgba(36, 24, 15, 0.65), 0 1px 0 rgba(255, 255, 255, 0.55) inset",
soft: "0 14px 40px -35px rgba(36, 24, 15, 0.6)"
}
}
}
}



    // Lucide
    lucide.createIcons({ attrs: { "stroke-width": "1.5" } });

    // Ensure consistent icon sizing
    document.querySelectorAll(".icon svg").forEach(svg => {
      svg.setAttribute("width", "18");
      svg.setAttribute("height", "18");
      svg.setAttribute("aria-hidden", "true");
      svg.classList.add("text-current");
    });

    // Mobile menu
    const btn = document.getElementById("mobileBtn");
    const menu = document.getElementById("mobileMenu");
    btn?.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("hidden");
      const icon = btn.querySelector("[data-lucide]");
      if (icon) icon.setAttribute("data-lucide", isOpen ? "menu" : "x");
      lucide.createIcons({ attrs: { "stroke-width": "1.5" } });
      document.querySelectorAll(".icon svg").forEach(svg => {
        svg.setAttribute("width", "18");
        svg.setAttribute("height", "18");
        svg.setAttribute("aria-hidden", "true");
        svg.classList.add("text-current");
      });
    });

    // Close mobile menu on navigation
    menu?.querySelectorAll("a[href^='#']").forEach(a => {
      a.addEventListener("click", () => {
        if (!menu.classList.contains("hidden")) {
          menu.classList.add("hidden");
          btn?.setAttribute("aria-expanded", "false");
          const icon = btn?.querySelector("[data-lucide]");
          if (icon) icon.setAttribute("data-lucide", "menu");
          lucide.createIcons({ attrs: { "stroke-width": "1.5" } });
          document.querySelectorAll(".icon svg").forEach(svg => {
            svg.setAttribute("width", "18");
            svg.setAttribute("height", "18");
            svg.setAttribute("aria-hidden", "true");
            svg.classList.add("text-current");
          });
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&amp', backgroundSize: '420px', backgroundPosition: 'center', mixBlendMode: 'multiply'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-parchment-50/70 via-parchment-100/60 to-parchment-200/60"></div>
<div className="absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gold-200/20 blur-3xl"></div>
<div className="absolute top-10 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-olive-200/25 blur-3xl"></div>
<div className="absolute bottom-[-9rem] left-[-6rem] h-[34rem] w-[34rem] rounded-full bg-parchment-400/20 blur-3xl"></div>
</div>

<a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-parchment-50 focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-espresso-900 focus:shadow-luxe" href="#main">
    Skip to content
  </a>

<header className="sticky top-0 z-40 border-b border-espresso-900/10 bg-parchment-50/70 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3 rounded-2xl px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60" href="#top">
<div className="grid h-10 w-10 place-items-center rounded-full bg-parchment-100 shadow-soft ring-1 ring-espresso-900/10">
<span className="serif text-base font-medium tracking-tight text-espresso-800">Cb</span>
</div>
<div className="leading-tight">
<div className="serif text-base font-medium tracking-tight text-espresso-900">CoffBae</div>
<div className="text-xs text-espresso-800/70">Where Coffee Meets Comfort</div>
</div>
</a>
<nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#about">About</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#menu">Menu</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#reviews">Reviews</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#ambience">Ambience</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#visit">Visit</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-espresso-900 px-4 py-2 text-sm font-medium text-parchment-50 shadow-soft ring-1 ring-espresso-900/10 hover:bg-espresso-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60" href="#menu">
<span>View Menu</span>
<span className="icon" data-lucide="arrow-right"></span>
</a>
<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden inline-flex items-center justify-center rounded-xl bg-parchment-100 px-3 py-2 text-sm font-medium text-espresso-900 shadow-soft ring-1 ring-espresso-900/10 hover:bg-parchment-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60" id="mobileBtn">
<span className="sr-only">Open menu</span>
<span className="icon" data-lucide="menu"></span>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-espresso-900/10 bg-parchment-50/75 backdrop-blur-xl" id="mobileMenu">
<div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
<div className="grid gap-1">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#about">About</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#menu">Menu</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#reviews">Reviews</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#ambience">Ambience</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-espresso-800/80 hover:text-espresso-900 hover:bg-parchment-100/70 transition-colors" href="#visit">Visit</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-espresso-900 px-4 py-2 text-sm font-medium text-parchment-50 shadow-soft ring-1 ring-espresso-900/10 hover:bg-espresso-800 transition-colors" href="#menu">
<span>View Menu</span>
<span className="icon" data-lucide="arrow-right"></span>
</a>
</div>
</div>
</div>
</header>
<main id="main">

<section className="relative" id="top">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1100px_650px_at_20%_20%,rgba(255,255,255,0.35),rgba(0,0,0,0))]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-parchment-50/10 via-parchment-100/40 to-parchment-100/80"></div>
</div>
<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-16">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full bg-parchment-50/70 px-4 py-2 text-xs font-medium text-espresso-800 shadow-soft ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="map-pin"></span>
<span>Near Christ University • Bangalore</span>
</div>
<h1 className="mt-6 serif text-3xl font-medium tracking-tight text-espresso-900 sm:text-4xl lg:text-5xl">
            CoffBae – Your Cozy Coffee Escape
          </h1>
<p className="mt-4 text-base leading-relaxed text-espresso-800/80 sm:text-lg">
            Artisan coffee, handcrafted mocktails, and fresh pastries served in a calm, old‑world ambience made for working, unwinding, and lingering a little longer.
          </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-espresso-900 px-5 py-3 text-sm font-medium text-parchment-50 shadow-luxe ring-1 ring-espresso-900/10 hover:bg-espresso-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70" href="#menu">
<span>View Menu</span>
<span className="icon" data-lucide="arrow-right"></span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-parchment-50/80 px-5 py-3 text-sm font-medium text-espresso-900 shadow-soft ring-1 ring-espresso-900/15 hover:bg-parchment-100/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70" href="#visit">
<span>Visit Us Today</span>
<span className="icon" data-lucide="navigation"></span>
</a>
</div>
<dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
<div className="rounded-2xl bg-parchment-50/70 p-4 shadow-soft ring-1 ring-espresso-900/10">
<dt className="text-xs font-medium text-espresso-800/70">Mood</dt>
<dd className="mt-1 serif text-lg font-medium tracking-tight text-espresso-900">Cozy &amp; Timeless</dd>
</div>
<div className="rounded-2xl bg-parchment-50/70 p-4 shadow-soft ring-1 ring-espresso-900/10">
<dt className="text-xs font-medium text-espresso-800/70">Specialty</dt>
<dd className="mt-1 serif text-lg font-medium tracking-tight text-espresso-900">Bomboloni</dd>
</div>
<div className="hidden sm:block rounded-2xl bg-parchment-50/70 p-4 shadow-soft ring-1 ring-espresso-900/10">
<dt className="text-xs font-medium text-espresso-800/70">Vibe</dt>
<dd className="mt-1 serif text-lg font-medium tracking-tight text-espresso-900">Work‑friendly</dd>
</div>
</dl>
</div>
<div className="lg:col-span-6">
<div className="relative overflow-hidden rounded-3xl shadow-luxe ring-1 ring-espresso-900/10">
<div className="absolute inset-0 bg-gradient-to-tr from-espresso-900/50 via-espresso-900/10 to-transparent"></div>
<img alt="Warm cozy café interior with wooden tables and ambient lighting" className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[30rem]" loading="eager" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&amp;fit=crop&amp;w=1600&amp;q=70"/>
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-parchment-50/80 px-3 py-2 text-xs font-medium text-espresso-900 shadow-soft ring-1 ring-espresso-900/10 backdrop-blur">
<span className="icon" data-lucide="coffee"></span>
<span>Artisan brews</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-parchment-50/80 px-3 py-2 text-xs font-medium text-espresso-900 shadow-soft ring-1 ring-espresso-900/10 backdrop-blur">
<span className="icon" data-lucide="sparkles"></span>
<span>Handcrafted mocktails</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-parchment-50/80 px-3 py-2 text-xs font-medium text-espresso-900 shadow-soft ring-1 ring-espresso-900/10 backdrop-blur">
<span className="icon" data-lucide="croissant"></span>
<span>Fresh pastries</span>
</span>
</div>
</div>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-parchment-50/70 p-5 shadow-soft ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-olive-100/70 ring-1 ring-olive-300/40">
<span className="icon" data-lucide="wifi"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Comfortable Work Corners</div>
<div className="mt-1 text-sm text-espresso-800/75">Settle in with calm lighting and a quiet, cozy atmosphere.</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-parchment-50/70 p-5 shadow-soft ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-gold-100/70 ring-1 ring-gold-300/40">
<span className="icon" data-lucide="clock"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Slow Luxury Feel</div>
<div className="mt-1 text-sm text-espresso-800/75">Gentle details, warm tones, and a timeless café rhythm.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="about">
<div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<h2 className="serif text-2xl font-medium tracking-tight text-espresso-900 sm:text-3xl">
            About CoffBae
          </h2>
<p className="mt-4 text-base leading-relaxed text-espresso-800/80 sm:text-lg">
            CoffBae is a cozy neighborhood café located near Christ University, Bangalore. Known for expert baristas, handcrafted beverages, and a relaxing old‑world ambience, CoffBae is the perfect place to work, unwind, or catch up with friends.
          </p>
<div className="mt-6 rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="badge-check"></span>
</div>
<div className="leading-tight">
<div className="text-sm font-medium text-espresso-900">Premium, calm, welcoming</div>
<div className="text-sm text-espresso-800/75">Designed for comfort—crafted for taste.</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="group rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="user-round"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Expert Baristas</div>
<div className="mt-1 text-sm text-espresso-800/75">Dialed‑in espresso and thoughtful brewing.</div>
</div>
</div>
</div>
<div className="group rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="coffee"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Premium Coffee &amp; Tea Selection</div>
<div className="mt-1 text-sm text-espresso-800/75">Balanced, aromatic, and curated with care.</div>
</div>
</div>
</div>
<div className="group rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="donut"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Fresh Bomboloni &amp; Pastries</div>
<div className="mt-1 text-sm text-espresso-800/75">Soft, indulgent bites—perfect with espresso.</div>
</div>
</div>
</div>
<div className="group rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="lamp"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Cozy, Aesthetic Ambience</div>
<div className="mt-1 text-sm text-espresso-800/75">Warm lighting, wood tones, and calm corners.</div>
</div>
</div>
</div>
<div className="group sm:col-span-2 rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="users-round"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Popular with Locals</div>
<div className="mt-1 text-sm text-espresso-800/75">A neighborhood favorite near the Christ University back gate.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="menu">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="serif text-2xl font-medium tracking-tight text-espresso-900 sm:text-3xl">Menu Preview</h2>
<p className="mt-3 text-base text-espresso-800/80 sm:text-lg">
            Minimal, elegant favorites—crafted to pair with conversation and calm.
          </p>
</div>
<a className="inline-flex items-center gap-2 self-start rounded-2xl bg-parchment-50/80 px-4 py-2 text-sm font-medium text-espresso-900 shadow-soft ring-1 ring-espresso-900/15 hover:bg-parchment-100/80 transition-colors" href="#visit">
<span className="icon" data-lucide="map"></span>
<span>Find us near Christ University</span>
</a>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-3xl bg-parchment-50/70 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="serif text-xl font-medium tracking-tight text-espresso-900">Signature Coffees</h3>
<p className="mt-2 text-sm text-espresso-800/75">Espresso-led classics with a smooth, rounded finish.</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="coffee"></span>
</div>
</div>
<div className="mt-5 flex items-center justify-between text-sm text-espresso-800/70">
<span>Rich • Balanced • Warm</span>
<span className="inline-flex items-center gap-1 font-medium text-espresso-900/80">
<span>Explore</span>
<span className="icon" data-lucide="arrow-right"></span>
</span>
</div>
</article>
<article className="group rounded-3xl bg-parchment-50/70 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="serif text-xl font-medium tracking-tight text-espresso-900">Mocktails &amp; Coolers</h3>
<p className="mt-2 text-sm text-espresso-800/75">Bright, layered sips—crafted, not crowded.</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="glass-water"></span>
</div>
</div>
<div className="mt-5 flex items-center justify-between text-sm text-espresso-800/70">
<span>Citrus • Herb • Sparkle</span>
<span className="inline-flex items-center gap-1 font-medium text-espresso-900/80">
<span>Explore</span>
<span className="icon" data-lucide="arrow-right"></span>
</span>
</div>
</article>
<article className="group rounded-3xl bg-parchment-50/70 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="serif text-xl font-medium tracking-tight text-espresso-900">Artisan Teas</h3>
<p className="mt-2 text-sm text-espresso-800/75">Comforting blends for slow afternoons.</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="leaf"></span>
</div>
</div>
<div className="mt-5 flex items-center justify-between text-sm text-espresso-800/70">
<span>Floral • Earthy • Soft</span>
<span className="inline-flex items-center gap-1 font-medium text-espresso-900/80">
<span>Explore</span>
<span className="icon" data-lucide="arrow-right"></span>
</span>
</div>
</article>
<article className="group rounded-3xl bg-parchment-50/70 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="serif text-xl font-medium tracking-tight text-espresso-900">Fresh Bomboloni</h3>
<p className="mt-2 text-sm text-espresso-800/75">Pillowy, filled, and made for coffee pairing.</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="donut"></span>
</div>
</div>
<div className="mt-5 flex items-center justify-between text-sm text-espresso-800/70">
<span>Soft • Sweet • Elegant</span>
<span className="inline-flex items-center gap-1 font-medium text-espresso-900/80">
<span>Explore</span>
<span className="icon" data-lucide="arrow-right"></span>
</span>
</div>
</article>
<article className="group rounded-3xl bg-parchment-50/70 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="serif text-xl font-medium tracking-tight text-espresso-900">Snacks &amp; Light Bites</h3>
<p className="mt-2 text-sm text-espresso-800/75">Clean flavors—perfect for mid‑day breaks.</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="utensils"></span>
</div>
</div>
<div className="mt-5 flex items-center justify-between text-sm text-espresso-800/70">
<span>Crisp • Savory • Light</span>
<span className="inline-flex items-center gap-1 font-medium text-espresso-900/80">
<span>Explore</span>
<span className="icon" data-lucide="arrow-right"></span>
</span>
</div>
</article>
<article className="group rounded-3xl bg-parchment-50/70 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="serif text-xl font-medium tracking-tight text-espresso-900">Seasonal Specials</h3>
<p className="mt-2 text-sm text-espresso-800/75">Rotating favorites inspired by cozy evenings.</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="sparkles"></span>
</div>
</div>
<div className="mt-5 flex items-center justify-between text-sm text-espresso-800/70">
<span>Limited • Warm • New</span>
<span className="inline-flex items-center gap-1 font-medium text-espresso-900/80">
<span>Explore</span>
<span className="icon" data-lucide="arrow-right"></span>
</span>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="reviews">
<div className="rounded-[2rem] bg-gradient-to-b from-parchment-50/70 to-parchment-100/60 p-6 shadow-luxe ring-1 ring-espresso-900/10 sm:p-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="serif text-2xl font-medium tracking-tight text-espresso-900 sm:text-3xl">Reviews &amp; Recommendations</h2>
<div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-espresso-800/80">
<div className="inline-flex items-center gap-2 rounded-full bg-parchment-50/70 px-4 py-2 shadow-soft ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="star"></span>
<span className="font-medium text-espresso-900">100% Recommended</span>
<span className="text-espresso-800/70">(6 Reviews)</span>
</div>
<div className="inline-flex items-center gap-1 text-espresso-900/80">
<span className="icon" data-lucide="sparkle"></span>
<span className="text-sm">Soft, premium experiences</span>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-2xl bg-espresso-900 px-4 py-2 text-sm font-medium text-parchment-50 shadow-soft ring-1 ring-espresso-900/10 hover:bg-espresso-800 transition-colors" href="#visit">
<span className="icon" data-lucide="message-circle"></span>
<span>Leave a review</span>
</a>
</div>
<div className="mt-7 grid gap-4 lg:grid-cols-2">

<figure className="group rounded-3xl bg-parchment-50/75 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div aria-label="Five stars" className="flex items-center gap-1 text-gold-600">
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
</div>
<blockquote className="mt-4 text-base leading-relaxed text-espresso-900/85 sm:text-lg">
              “Great experience, Bomboloni was the best! Best coffee.”
            </blockquote>
<figcaption className="mt-4 text-sm font-medium text-espresso-900">— Shampa Kar</figcaption>
</figure>
<figure className="group rounded-3xl bg-parchment-50/75 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div aria-label="Five stars" className="flex items-center gap-1 text-gold-600">
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
</div>
<blockquote className="mt-4 text-base leading-relaxed text-espresso-900/85 sm:text-lg">
              “Great mocktails &amp; snacks!”
            </blockquote>
<figcaption className="mt-4 text-sm font-medium text-espresso-900">— Sujit Singha Roy</figcaption>
</figure>
<figure className="group rounded-3xl bg-parchment-50/75 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div aria-label="Five stars" className="flex items-center gap-1 text-gold-600">
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
</div>
<blockquote className="mt-4 text-base leading-relaxed text-espresso-900/85 sm:text-lg">
              “Perfect place to relax with a cup of coffee.”
            </blockquote>
<figcaption className="mt-4 text-sm font-medium text-espresso-900">— Rohit Thakur</figcaption>
</figure>
<figure className="group rounded-3xl bg-parchment-50/75 p-6 shadow-card ring-1 ring-espresso-900/10 transition-transform duration-500 hover:-translate-y-1">
<div aria-label="Five stars" className="flex items-center gap-1 text-gold-600">
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
<span className="icon" data-lucide="star"></span>
</div>
<blockquote className="mt-4 text-base leading-relaxed text-espresso-900/85 sm:text-lg">
              “Cozy &amp; aesthetic ambience, good for working.”
            </blockquote>
<figcaption className="mt-4 text-sm font-medium text-espresso-900">— Tushita Singh</figcaption>
</figure>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="ambience">
<div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
<div className="lg:col-span-7">
<div className="relative overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-espresso-900/10">
<div className="absolute inset-0 bg-gradient-to-tr from-espresso-900/55 via-espresso-900/15 to-transparent"></div>
<img alt="Cozy café seating with warm lamps and wooden tables" className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[30rem]" loading="lazy" src="https://images.unsplash.com/photo-1522992319-0365e5f11656?auto=format&amp;fit=crop&amp;w=1600&amp;q=70"/>
<div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
<div className="max-w-xl rounded-3xl bg-parchment-50/75 p-5 shadow-card ring-1 ring-espresso-900/10 backdrop-blur">
<p className="serif text-xl font-medium tracking-tight text-espresso-900 sm:text-2xl">
                  “A place where time slows down and coffee tastes better.”
                </p>
<div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-espresso-800/75">
<span className="inline-flex items-center gap-2 rounded-full bg-parchment-50/70 px-3 py-2 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="sofa"></span>
<span>Cozy seating</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-parchment-50/70 px-3 py-2 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="lamp"></span>
<span>Warm lamps</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-parchment-50/70 px-3 py-2 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="table"></span>
<span>Wooden tables</span>
</span>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<h2 className="serif text-2xl font-medium tracking-tight text-espresso-900 sm:text-3xl">
            Ambience, thoughtfully made
          </h2>
<p className="mt-4 text-base leading-relaxed text-espresso-800/80 sm:text-lg">
            From soft lighting to warm textures, CoffBae is designed to feel like an unhurried European café—calm, welcoming, and quietly premium.
          </p>
<div className="mt-6 grid gap-4">
<div className="rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-olive-100/70 ring-1 ring-olive-300/40">
<span className="icon" data-lucide="volume-x"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Calm café soundscape</div>
<div className="mt-1 text-sm text-espresso-800/75">A gentle setting for focus and conversation.</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-gold-100/70 ring-1 ring-gold-300/40">
<span className="icon" data-lucide="sparkles"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Soft, warm details</div>
<div className="mt-1 text-sm text-espresso-800/75">Muted tones with subtle golden accents.</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="smile"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Made for everyday rituals</div>
<div className="mt-1 text-sm text-espresso-800/75">A familiar place to return to, again and again.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id="visit">
<div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
<div className="lg:col-span-5">
<h2 className="serif text-2xl font-medium tracking-tight text-espresso-900 sm:text-3xl">Location &amp; Contact</h2>
<p className="mt-4 text-base text-espresso-800/80 sm:text-lg">
            Visit CoffBae near Christ University for artisan coffee, handcrafted mocktails, and fresh pastries in a warm, cozy ambience.
          </p>
<div className="mt-6 grid gap-4">
<div className="rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="map-pin"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Address</div>
<p className="mt-1 text-sm leading-relaxed text-espresso-800/75">
                    15L2, 1st Main Road, Taverekere, Bhavani Nagar, SG Palya,<br/>
                    Opp. Christ University Back Gate, Bangalore – 560029
                  </p>
</div>
</div>
</div>
<div className="rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="phone"></span>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-espresso-900">Phone</div>
<a className="mt-1 inline-flex items-center gap-2 text-sm text-espresso-800/75 hover:text-espresso-900 transition-colors" href="tel:08089130096">
<span>080891 30096</span>
<span className="icon" data-lucide="arrow-right"></span>
</a>
</div>
</div>
</div>
<div className="rounded-3xl bg-parchment-50/70 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-parchment-100 ring-1 ring-espresso-900/10">
<span className="icon" data-lucide="mail"></span>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-espresso-900">Email</div>
<a className="mt-1 inline-flex items-center gap-2 text-sm text-espresso-800/75 hover:text-espresso-900 transition-colors" href="mailto:coffbae@gmail.com">
<span className="truncate">coffbae@gmail.com</span>
<span className="icon" data-lucide="arrow-right"></span>
</a>
</div>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-r from-parchment-50/70 to-parchment-100/60 p-5 shadow-card ring-1 ring-espresso-900/10">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-gold-100/70 ring-1 ring-gold-300/40">
<span className="icon" data-lucide="navigation"></span>
</div>
<div>
<div className="text-sm font-medium text-espresso-900">Quick directions</div>
<div className="text-sm text-espresso-800/75">Open in maps for the fastest route.</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-espresso-900 px-4 py-2 text-sm font-medium text-parchment-50 shadow-soft ring-1 ring-espresso-900/10 hover:bg-espresso-800 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=CoffBae%2015L2%201st%20Main%20Road%20Taverekere%20SG%20Palya%20Bangalore%20560029" rel="noopener noreferrer" target="_blank">
<span>Open Map</span>
<span className="icon" data-lucide="arrow-up-right"></span>
</a>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="relative overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-espresso-900/10">
<iframe className="h-[22rem] w-full sm:h-[26rem] lg:h-[34rem]" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=15L2,+1st+Main+Road,+Taverekere,+SG+Palya,+Bangalore+560029&amp;output=embed" title="Google Map — CoffBae"></iframe>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-parchment-50/35 via-transparent to-espresso-900/10"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.10]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&amp', backgroundSize: '320px', mixBlendMode: 'multiply'}}></div>
</div>
<p className="mt-4 text-sm text-espresso-800/70">
            Tip: Search “café near Christ University” to find CoffBae quickly.
          </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-espresso-900/10 bg-parchment-50/60">
<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-full bg-parchment-100 shadow-soft ring-1 ring-espresso-900/10">
<span className="serif text-base font-medium tracking-tight text-espresso-800">Cb</span>
</div>
<div>
<div className="serif text-lg font-medium tracking-tight text-espresso-900">CoffBae</div>
<div className="text-xs text-espresso-800/70">Where Coffee Meets Comfort</div>
</div>
</div>
<p className="mt-4 text-base text-espresso-800/80 sm:text-lg">
            A premium, cozy café near Christ University—artisan coffee, handcrafted mocktails, and fresh bomboloni in a warm old‑world ambience.
          </p>
</div>
<div className="lg:col-span-4">
<div className="text-sm font-medium text-espresso-900">Contact</div>
<div className="mt-3 grid gap-2 text-sm text-espresso-800/75">
<div className="inline-flex items-start gap-2">
<span className="mt-0.5 icon" data-lucide="map-pin"></span>
<span>15L2, 1st Main Road, SG Palya, Bangalore – 560029</span>
</div>
<a className="inline-flex items-center gap-2 hover:text-espresso-900 transition-colors" href="tel:08089130096">
<span className="icon" data-lucide="phone"></span>
<span>080891 30096</span>
</a>
<a className="inline-flex items-center gap-2 hover:text-espresso-900 transition-colors" href="mailto:coffbae@gmail.com">
<span className="icon" data-lucide="mail"></span>
<span>coffbae@gmail.com</span>
</a>
</div>
</div>
<div className="lg:col-span-3">
<div className="text-sm font-medium text-espresso-900">Social</div>
<div className="mt-3 flex items-center gap-2">
<a aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-parchment-100 shadow-soft ring-1 ring-espresso-900/10 hover:bg-parchment-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70" href="#">
<span className="icon" data-lucide="instagram"></span>
</a>
<a aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-parchment-100 shadow-soft ring-1 ring-espresso-900/10 hover:bg-parchment-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70" href="#">
<span className="icon" data-lucide="facebook"></span>
</a>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-espresso-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-espresso-800/70">Copyright © CoffBae</div>
<div className="text-xs text-espresso-800/70">Designed for accessibility • Smooth scrolling • Fast and calm</div>
</div>
</div>
</footer>



    </>
  );
}
