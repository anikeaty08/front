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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // --- Simple, stable "multi-page" navigation (hash-based) ---
      const pages = Array.from(document.querySelectorAll("[data-page]"));
      const navLinks = Array.from(document.querySelectorAll(".nav-link"));

      function setActiveNav(hash) {
        const id = hash?.replace("#", "") || "home";

        pages.forEach((p) => {
          const show = p.id === id;
          p.classList.toggle("hidden", !show);
        });

        navLinks.forEach((a) => {
          const href = a.getAttribute("href") || "";
          const isActive = href === `#${id}`;
          a.classList.toggle("bg-slate-900/10", isActive);
          a.classList.toggle("text-slate-900", isActive);
          a.classList.toggle("text-slate-700", !isActive);
        });

        // Move focus to top of the page section for accessibility
        const section = document.getElementById(id);
        if (section) {
          section.setAttribute("tabindex", "-1");
          section.focus({ preventScroll: true });
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }

      window.addEventListener("hashchange", () => setActiveNav(location.hash));
      setActiveNav(location.hash);

      // --- Shop filters ---
      const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
      const shopCards = Array.from(document.querySelectorAll("#shop [data-category]"));
      const shopFilterLabel = document.getElementById("shopFilterLabel");

      function applyShopFilter(filter) {
        const f = filter || "all";
        shopCards.forEach((card) => {
          const cat = card.getAttribute("data-category");
          const show = f === "all" || cat === f;
          card.classList.toggle("hidden", !show);
        });

        filterBtns.forEach((b) => {
          const active = (b.getAttribute("data-filter") || "") === f;
          b.classList.toggle("bg-slate-900", active);
          b.classList.toggle("text-[#F6F0E6]", active);
          b.classList.toggle("border-slate-900", active);
          b.classList.toggle("bg-white/70", !active);
          b.classList.toggle("border-slate-900/15", !active);
          b.classList.toggle("text-slate-900", !active);
        });

        const label = f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1);
        if (shopFilterLabel) shopFilterLabel.textContent = `Showing: ${label}`;
      }

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          applyShopFilter(btn.getAttribute("data-filter"));
        });
      });

      // Allow "Shop by pet" tiles to preselect filter on the Shop page
      const shopTiles = Array.from(document.querySelectorAll("[data-shop-filter]"));
      shopTiles.forEach((tile) => {
        tile.addEventListener("click", () => {
          const filter = tile.getAttribute("data-shop-filter") || "all";
          // Defer so hash navigation completes
          setTimeout(() => applyShopFilter(filter), 50);
        });
      });

      // --- Forms: demo confirmations ---
      function showMsg(el, text) {
        if (!el) return;
        el.textContent = text;
        el.classList.remove("hidden");
      }

      const homeEmailBtn = document.getElementById("homeEmailBtn");
      const homeEmail = document.getElementById("homeEmail");
      const homeEmailMsg = document.getElementById("homeEmailMsg");
      if (homeEmailBtn && homeEmail) {
        homeEmailBtn.addEventListener("click", () => {
          const val = homeEmail.value.trim();
          if (!val || !val.includes("@")) {
            showMsg(homeEmailMsg, "Please enter a valid email address.");
            homeEmailMsg.classList.remove("text-[#2F6B4F]");
            homeEmailMsg.classList.add("text-rose-700");
            return;
          }
          homeEmailMsg.classList.remove("text-rose-700");
          homeEmailMsg.classList.add("text-[#2F6B4F]");
          showMsg(homeEmailMsg, "Thanks! You’re signed up for updates.");
          homeEmail.value = "";
        });
      }

      const groomingForm = document.getElementById("groomingForm");
      const groomingMsg = document.getElementById("groomingMsg");
      if (groomingForm) {
        groomingForm.addEventListener("submit", (e) => {
          e.preventDefault();
          showMsg(groomingMsg, "Request received! We’ll call you to confirm an appointment time.");
          groomingForm.reset();
        });
      }

      const contactForm = document.getElementById("contactForm");
      const contactMsg = document.getElementById("contactMsg");
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          showMsg(contactMsg, "Message sent (demo). Thanks — we’ll get back to you as soon as we can.");
          contactForm.reset();
        });
      }

      // Default shop filter state
      applyShopFilter("all");

      // Footer year
      const year = document.getElementById("year");
      if (year) year.textContent = new Date().getFullYear();
    
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
      

<div className="border-b border-slate-900/10 bg-[#F6F0E6]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 pb-3 gap-x-2 gap-y-2">
<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700">
<span className="inline-flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              La Puente, California
            </span>
<span className="hidden sm:inline text-slate-900/20">•</span>
<a className="inline-flex items-center gap-2 hover:text-slate-900" href="tel:+1-626-000-0000">
<iconify-icon className="" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              (626) 000-0000
            </a>
<span className="hidden sm:inline text-slate-900/20">•</span>
<span className="inline-flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Mon–Sat 10–7, Sun 11–5
            </span>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-slate-700 hover:text-slate-900" href="#contact">Questions? Contact us</a>
<span className="text-slate-900/20">|</span>
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 hover:text-slate-900" href="https://instagram.com" rel="noreferrer" target="_blank">
<iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Instagram
            </a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#F6F0E6]/95 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex pt-4 pb-4 items-center justify-between">
<a className="inline-flex items-center gap-3" href="#home">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F6B4F] text-[#F6F0E6] shadow-sm">
<span className="text-sm font-semibold tracking-tight">VP</span>
</div>
<div className="leading-tight">
<div className="text-base font-semibold tracking-tight text-slate-900">Valley Pet &amp; Supply</div>
<div className="text-xs text-slate-600">La Puente, CA</div>
</div>
</a>
<nav className="hidden lg:flex gap-1 gap-x-1 gap-y-1 items-center">
<a className="nav-link rounded-full px-4 py-2 text-sm font-medium hover:bg-slate-900/5 hover:text-slate-900 bg-slate-900/10 text-slate-900" data-nav="home" href="#home">Home</a>
<a className="nav-link hover:bg-slate-900/5 hover:text-slate-900 text-sm font-medium text-slate-700 rounded-full pt-2 pr-4 pb-2 pl-4" data-nav="shop" href="#shop">Shop</a>
<a className="nav-link rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900/5 hover:text-slate-900" data-nav="grooming" href="#grooming">Grooming</a>
<a className="nav-link rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900/5 hover:text-slate-900" data-nav="animals" href="#live-animals">Live Animals</a>
<a className="nav-link rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900/5 hover:text-slate-900" data-nav="care" href="#pet-care">Pet Care</a>
<a className="nav-link rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900/5 hover:text-slate-900" data-nav="about" href="#about">About</a>
<a className="nav-link rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-900/5 hover:text-slate-900" data-nav="contact" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#2F6B4F] px-4 py-2 text-sm font-semibold text-[#F6F0E6] shadow-sm hover:bg-[#285C44]" href="#shop">
              Shop Supplies
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-[#F6F0E6] shadow-sm hover:bg-slate-800" href="#grooming">
              Book Grooming
            </a>
</div>
</div>

<div className="lg:hidden pb-4">
<div className="grid grid-cols-4 gap-2">
<a className="nav-link flex items-center justify-center rounded-xl bg-slate-900/10 px-3 py-2 text-xs font-medium text-slate-900 hover:bg-slate-900/10" data-nav="home" href="#home">Home</a>
<a className="nav-link flex items-center justify-center rounded-xl bg-slate-900/5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-900/10" data-nav="shop" href="#shop">Shop</a>
<a className="nav-link flex items-center justify-center rounded-xl bg-slate-900/5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-900/10" data-nav="grooming" href="#grooming">Grooming</a>
<a className="nav-link flex items-center justify-center rounded-xl bg-slate-900/5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-900/10" data-nav="animals" href="#live-animals">Animals</a>
<a className="nav-link flex items-center justify-center rounded-xl bg-slate-900/5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-900/10" data-nav="care" href="#pet-care">Pet Care</a>
<a className="nav-link flex items-center justify-center rounded-xl bg-slate-900/5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-900/10" data-nav="about" href="#about">About</a>
<a className="nav-link col-span-2 flex items-center justify-center rounded-xl bg-[#2F6B4F] px-3 py-2 text-xs font-semibold text-[#F6F0E6] hover:bg-[#285C44] text-slate-700" data-nav="contact" href="#contact">Contact</a>
</div>
</div>
</div>
</header>
<main className="">

<section className="page-section" data-page="" id="home" tabindex="-1">

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid sm:py-12 lg:grid-cols-12 lg:gap-10 lg:py-14 pt-10 pb-10 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/50 px-3 py-1 text-xs font-medium text-slate-700"><span className="inline-flex h-2 w-2 rounded-full bg-[#2F6B4F]"></span>
                Your local pet store with professional grooming</div>
<h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Everything your pet needs — all in one place.</h1>
<p className="mt-4 text-base text-slate-700 sm:text-lg">Pet supplies, grooming, live animals, and clear guidance — from a local team you can count on in La Puente.</p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 hover:bg-[#285C44] font-semibold text-[#F6F0E6] bg-[#2F6B4F] rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#shop">
<iconify-icon icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Shop Supplies
                </a>
<a className="" href="https://app.squareup.com/appointments/book/jnl67uks4etywa/LS57ECHY67F9E/start" rel="nofollow" style="
background-color: #28384d;
border: none;
color: white;
height: 40px;
text-transform: uppercase;
font-family: 'Square Market', sans-serif;
letter-spacing: 1px;
line-height: 38px;
padding: 0 28px;
border-radius: 32px;
font-weight: 500;
font-size: 14px;
cursor: pointer;
display: inline-block;" target="_top">Book now</a>
</div>
<div className="mt-7 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Trusted locally
                  </div>
<div className="mt-1 text-xs text-slate-600">Friendly, no-pressure support in-store.</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Comfort-first care
                  </div>
<div className="mt-1 text-xs text-slate-600">Patient grooming with gentle handling.</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Real guidance
                  </div>
<div className="mt-1 text-xs text-slate-600">Straight answers you can trust.</div>
</div>
</div>
</div>
<div className="lg:col-span-6">

<div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/40 shadow-sm">
<div className="aspect-[4/3] w-full">
<img alt="Dog being groomed on a grooming table indoors" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9163bc36-607a-4a27-aab6-5287f3e2dbcf_1600w.png"/>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<div className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 text-xs text-slate-700 shadow-sm"><iconify-icon className="text-[#2F6B4F]" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Professional grooming with a calm, comfort-first approach</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white/40">
<div className="aspect-[4/3]">
<img alt="Pet supplies shelves inside a pet store" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white/40">
<div className="aspect-[4/3]">
<img alt="Pet owner holding a small dog indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white/40">
<div className="aspect-[4/3]">
<img alt="Cat indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-900/10 bg-white/30">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 sm:py-14">
<div className="flex flex-col gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Trusted by local pet parents</h2>
<p className="text-sm text-slate-700 sm:text-base">A dependable local store that helps pet care feel simpler — and more supported.</p>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-3">
<div className="rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-600">Community</div>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Local, consistent help</div>
<div className="mt-2 text-sm text-slate-700">Ask questions, compare options, and leave with what truly fits your pet.</div>
</div>
<div className="rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-600">Grooming</div>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Comfort-first grooming</div>
<div className="mt-2 text-sm text-slate-700">Gentle handling, clear communication, and a clean, comfortable result.</div>
</div>
<div className="rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-600">Advice</div>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Straightforward guidance</div>
<div className="mt-2 text-sm text-slate-700">Practical tips for feeding, habitats, grooming routines, and more.</div>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 sm:py-14">
<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Shop by Pet</h2>
<p className="mt-2 text-sm text-slate-700 sm:text-base">We’ll help you choose the right pet and get set up with the essentials — habitat, nutrition, and ongoing care tips.
                  Availability changes quickly; please call to confirm.</p>
</div>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6B4F] hover:text-[#285C44] sm:mt-0" href="#shop">Browse all supplies
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
<a className="group rounded-3xl border border-slate-900/10 bg-white/50 p-5 shadow-sm hover:bg-white/70" data-shop-filter="dog" href="#shop">
<div className="flex items-center justify-between">
<div className="text-base font-semibold tracking-tight text-slate-900">Dog</div>
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:dog-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-2 text-xs text-slate-600">Food, treats, collars, toys.</div>
</a>
<a className="group rounded-3xl border border-slate-900/10 bg-white/50 p-5 shadow-sm hover:bg-white/70" data-shop-filter="cat" href="#shop">
<div className="flex items-center justify-between">
<div className="text-base font-semibold tracking-tight text-slate-900">Cat</div>
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:cat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-2 text-xs text-slate-600">Litter, scratchers, wet &amp; dry.</div>
</a>
<a className="group rounded-3xl border border-slate-900/10 bg-white/50 p-5 shadow-sm hover:bg-white/70" data-shop-filter="bird" href="#shop">
<div className="flex items-center justify-between">
<div className="text-base font-semibold tracking-tight text-slate-900">Bird</div>
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:bird-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-2 text-xs text-slate-600">Seed, pellets, cages, perches.</div>
</a>
<a className="group rounded-3xl border border-slate-900/10 bg-white/50 p-5 shadow-sm hover:bg-white/70" data-shop-filter="reptile" href="#shop">
<div className="flex items-center justify-between">
<div className="text-base font-semibold tracking-tight text-slate-900">Reptile</div>
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:bug-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-2 text-xs text-slate-600">Heat, lighting, habitat basics.</div>
</a>
<a className="group rounded-3xl border border-slate-900/10 bg-white/50 p-5 shadow-sm hover:bg-white/70" data-shop-filter="small" href="#shop">
<div className="flex items-center justify-between">
<div className="text-base font-semibold tracking-tight text-slate-900">Small Pets</div>
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:rabbit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-2 text-xs text-slate-600">Bedding, hay, chews, homes.</div>
</a>
</div>
</div>
</div>

<div className="border-y border-slate-900/10 bg-white/30">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid sm:py-14 lg:grid-cols-12 lg:gap-10 pt-12 pb-12 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-5">
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/40 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Professional dog grooming indoors" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
<div className="lg:col-span-7">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Grooming that’s calm, clean, and truly caring</h2>
<p className="mt-3 text-sm text-slate-700 sm:text-base">From baths and tidy trims to coat care and nail work, we focus on comfort and clear communication.
                  If your pet is anxious, let us know — we’ll go at their pace.</p>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Bath &amp; blow-dry
                    </div>
<div className="mt-1 text-xs text-slate-600">Clean coat, fresh scent, gentle handling.</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Trim &amp; tidy
                    </div>
<div className="mt-1 text-xs text-slate-600">Comfortable shaping based on your goals.</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-[#F6F0E6] shadow-sm hover:bg-slate-800" href="#grooming">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Book Grooming
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/15 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80" href="#contact">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Call for questions
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 sm:py-14">
<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Live Animals</h2>
<p className="mt-2 text-sm text-slate-700 sm:text-base">
                  We help you choose the right pet and set you up with essentials — habitat, nutrition, and ongoing care tips.
                  Availability changes quickly; call to confirm.
                </p>
</div>
<a className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2F6B4F] px-5 py-3 text-sm font-semibold text-[#F6F0E6] shadow-sm hover:bg-[#285C44] sm:mt-0" href="#live-animals">See animal info
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/50 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Colorful birds indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507477338202-487281e6c27e?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-base font-semibold tracking-tight text-slate-900">Birds</div>
<div className="mt-1 text-xs text-slate-600">Ask about cage sizing and daily enrichment.</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/50 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Small pet hamster indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-base font-semibold tracking-tight text-slate-900">Small Pets</div>
<div className="mt-1 text-xs text-slate-600">We’ll help you choose a safe, comfortable habitat setup.</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/50 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Reptile in a terrarium indoors" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-5">
<div className="text-base font-semibold tracking-tight text-slate-900">Reptiles</div>
<div className="mt-1 text-xs text-slate-600">Clear heat &amp; UVB guidance you can feel confident about.</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/50 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Freshwater aquarium fish indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-base font-semibold tracking-tight text-slate-900">Fish</div>
<div className="mt-1 text-xs text-slate-600">Ask about water testing and cycling basics.</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-900/10 bg-white/30">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 sm:py-14">
<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Loved by local pet parents</h2>
<p className="mt-2 text-sm text-slate-700 sm:text-base">A neighborhood store where you can get honest help and feel confident in your next step.</p>
</div>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6B4F] hover:text-[#285C44] sm:mt-0" href="#contact">Ask a question
                  <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-3">
<div className="rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900">“They took their time with my anxious pup.”</div>
<div className="mt-2 text-sm text-slate-700">The groomer was gentle and explained everything. My dog came home calm and clean.</div>
<div className="mt-3 text-xs font-medium text-slate-600">— Local customer, La Puente</div>
</div>
<div className="rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900">“Best spot for supplies and advice.”</div>
<div className="mt-2 text-sm text-slate-700">They helped me pick food and didn’t upsell. It felt honest and helpful.</div>
<div className="mt-3 text-xs font-medium text-slate-600">— Valley neighbor</div>
</div>
<div className="rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900">“Great guidance for our first reptile setup.”</div>
<div className="mt-2 text-sm text-slate-700">They walked us through heat and UVB and what to buy first. Super clear and kind.</div>
<div className="mt-3 text-xs font-medium text-slate-600">— New pet owner</div>
</div>
</div>
<div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/55 p-5 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold text-slate-900">Want updates on new arrivals and grooming openings?</div>
<div className="mt-1 text-xs text-slate-600">Occasional emails — no spam.</div>
</div>
<div className="flex w-full gap-2 sm:w-auto">
<input className="w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="homeEmail" placeholder="Email address" type="email"/>
<button className="shrink-0 rounded-2xl bg-[#2F6B4F] px-4 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-[#285C44]" id="homeEmailBtn">
                      Sign up
                    </button>
</div>
</div>
<div className="mt-3 hidden text-xs font-medium text-[#2F6B4F]" id="homeEmailMsg"></div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" data-page="" id="shop">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 sm:py-12 lg:py-14">
<div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-4">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900">Shop</div>
<h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Browse supplies (no checkout)</h1>
<p className="mt-3 text-sm text-slate-700 sm:text-base">Browse by category to plan your visit. To confirm availability or pricing, please call or stop by the store.</p>
<div className="mt-5 rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Need help choosing?
                    </div>
<p className="mt-1 text-xs text-slate-600">Share your pet’s age, size, and goals — we’ll point you to the best options.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6B4F] hover:text-[#285C44]" href="#contact">Contact the store
                      <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
<div className="mt-6">
<div className="text-xs font-semibold text-slate-700">Quick filters</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="filter-btn rounded-2xl border px-4 py-3 text-xs font-semibold hover:bg-white bg-slate-900 text-[#F6F0E6] border-slate-900" data-filter="all">All</button>
<button className="filter-btn rounded-2xl border border-slate-900/15 bg-white/70 px-4 py-3 text-xs font-semibold text-slate-900 hover:bg-white" data-filter="dog">Dog</button>
<button className="filter-btn rounded-2xl border border-slate-900/15 bg-white/70 px-4 py-3 text-xs font-semibold text-slate-900 hover:bg-white" data-filter="cat">Cat</button>
<button className="filter-btn rounded-2xl border border-slate-900/15 bg-white/70 px-4 py-3 text-xs font-semibold text-slate-900 hover:bg-white" data-filter="bird">Bird</button>
<button className="filter-btn rounded-2xl border border-slate-900/15 bg-white/70 px-4 py-3 text-xs font-semibold text-slate-900 hover:bg-white" data-filter="reptile">Reptile</button>
<button className="filter-btn rounded-2xl border border-slate-900/15 bg-white/70 px-4 py-3 text-xs font-semibold text-slate-900 hover:bg-white" data-filter="small">Small Pets</button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-8">
<div className="flex items-end justify-between gap-3">
<div>
<div className="text-sm font-semibold text-slate-900">Featured categories</div>
<div className="mt-1 text-xs text-slate-600" id="shopFilterLabel">Showing: All</div>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white/55 px-4 py-3 text-xs text-slate-700"><iconify-icon className="text-[#2F6B4F]" icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Call to confirm availability</div>
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-2">
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm" data-category="dog">
<div className="aspect-[16/10]">
<img alt="Dog food bags and supplies indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Dog Supplies</h2>
<div className="text-xs font-medium text-slate-600">Food • Treats • Gear</div>
</div>
<p className="mt-2 text-sm text-slate-700">Nutrition, leashes, collars, toys, crates, and grooming essentials.</p>
<div className="mt-4 flex gap-2">
<a className="rounded-full bg-[#2F6B4F] px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="#contact">Ask about brands</a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-5 py-3 text-xs font-semibold text-slate-900 hover:bg-white" href="#grooming">Grooming add-ons</a>
</div>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm" data-category="cat">
<div className="aspect-[16/10]">
<img alt="Cat supplies indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Cat Supplies</h2>
<div className="text-xs font-medium text-slate-600">Litter • Food • Enrichment</div>
</div>
<p className="mt-2 text-sm text-slate-700">Litter solutions, wet &amp; dry food, scratchers, beds, and everyday care.</p>
<div className="mt-4 flex gap-2">
<a className="rounded-full bg-[#2F6B4F] px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="#contact">Get recommendations</a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-5 py-3 text-xs font-semibold text-slate-900 hover:bg-white" href="#pet-care">Care tips</a>
</div>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm" data-category="bird">
<div className="aspect-[16/10]">
<img alt="Bird cage and accessories indoors" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Bird Supplies</h2>
<div className="text-xs font-medium text-slate-600">Feed • Cages • Toys</div>
</div>
<p className="mt-2 text-sm text-slate-700">Seed and pellets, perches, toys, and guidance on safe cage sizing.</p>
<div className="mt-4 flex gap-2">
<a className="rounded-full bg-[#2F6B4F] px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="#contact">Ask what’s best</a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-5 py-3 text-xs font-semibold text-slate-900 hover:bg-white" href="#live-animals">Live birds</a>
</div>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm" data-category="reptile">
<div className="aspect-[16/10]">
<img alt="Reptile terrarium setup indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Reptile Supplies</h2>
<div className="text-xs font-medium text-slate-600">Heat • UVB • Substrate</div>
</div>
<p className="mt-2 text-sm text-slate-700">Heating and lighting basics, habitat accessories, and setup guidance.</p>
<div className="mt-4 flex gap-2">
<a className="rounded-full bg-[#2F6B4F] px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="#contact">Setup help</a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-5 py-3 text-xs font-semibold text-slate-900 hover:bg-white" href="#pet-care">Beginner guide</a>
</div>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm sm:col-span-2" data-category="small">
<div className="aspect-[16/8]">
<img alt="Small pet supplies and habitat indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Small Pet Supplies</h2>
<div className="text-xs font-medium text-slate-600">Bedding • Hay • Homes</div>
</div>
<p className="mt-1 text-sm text-slate-700">Bedding, hay, chews, and habitat needs for hamsters, guinea pigs, rabbits, and more.</p>
<div className="mt-4 flex flex-col gap-2 sm:flex-row">
<a className="rounded-full bg-[#2F6B4F] px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-[#285C44] text-center" href="#contact">Ask about safe habitat sizing</a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-5 py-3 text-xs font-semibold text-slate-900 hover:bg-white text-center" href="#live-animals">See live animals</a>
</div>
</div>
</article>
</div>
<div className="mt-6 rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold text-slate-900">Not sure what to buy first?</div>
<div className="mt-1 text-xs text-slate-600">We can recommend a starter list for new pets or new routines.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-slate-800" href="#pet-care">
<iconify-icon icon="solar:book-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Read Pet Care
                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" data-page="" id="grooming">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 sm:py-12 lg:py-14">
<div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700">
<iconify-icon className="text-[#2F6B4F]" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Professional grooming
                  </div>
<h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Grooming that puts comfort first</h1>
<p className="mt-3 text-sm text-slate-700 sm:text-base">Regular grooming supports skin and coat health, reduces shedding and matting, and helps keep nails, ears, and paws in great shape.
                    We take a calm, patient approach — especially for nervous pets.</p>
<div className="mt-6 rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">Starting prices</div>
<div className="mt-2 grid gap-2 text-sm text-slate-700">
<div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3">
<span className="font-medium">Small dogs</span><span className="font-semibold text-slate-900">$45+</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3">
<span className="font-medium">Medium dogs</span><span className="font-semibold text-slate-900">$65+</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3">
<span className="font-medium">Large dogs</span><span className="font-semibold text-slate-900">$85+</span>
</div>
</div>
<div className="mt-2 text-xs text-slate-600">Final pricing depends on coat condition, size, and the style you request.</div>
</div>
<div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/60 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Typical services
                    </div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Bath, blow-dry, brush-out
                      </li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Haircut / trim and tidy (by request)
                      </li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Nail trim
                      </li>
</ul>
</div>
</div>
<div className="mt-4 overflow-hidden rounded-3xl border border-slate-900/10 bg-white/40 shadow-sm">
<div className="aspect-[16/10]">
<img alt="Calm dog being brushed during grooming indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Request a grooming appointment</h2>
<p className="mt-2 text-sm text-slate-700 sm:text-base">Submit a request and we’ll confirm by phone. For same-day questions, calling is the fastest option.</p>
</div>
<div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<form className="mt-6 grid gap-4 sm:grid-cols-2" id="groomingForm">
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="gName">Your name</label>
<input className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="gName" placeholder="Full name" required="" type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="gPhone">Phone</label>
<input className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="gPhone" placeholder="(626) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="gPet">Pet type</label>
<select className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="gPet">
<option>Dog</option>
<option>Cat</option>
<option>Other (call us)</option>
</select>
</div>
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="gSize">Size</label>
<select className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="gSize">
<option>Small</option>
<option>Medium</option>
<option>Large</option>
</select>
</div>
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="gDate">Preferred day</label>
<input className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="gDate" type="date"/>
</div>
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="gService">Service</label>
<select className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="gService">
<option>Bath &amp; brush</option>
<option>Full groom (bath + haircut)</option>
<option>Nails only</option>
<option>Not sure (recommend)</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-slate-700" htmlFor="gNotes">Notes</label>
<textarea className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="gNotes" placeholder="Example: nervous with dryers, wants a shorter summer cut, sensitive skin" rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-600">Submitting this form requests an appointment. We’ll confirm availability by phone.</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-[#F6F0E6] shadow-sm hover:bg-slate-800" type="submit">
<iconify-icon icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Send Request
                      </button>
</div>
<div className="sm:col-span-2 hidden rounded-2xl border border-[#2F6B4F]/20 bg-[#2F6B4F]/10 p-4 text-sm font-medium text-[#285C44]" id="groomingMsg"></div>
</form>
</div>
<div className="mt-4 rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold text-slate-900">Prefer to book by phone?</div>
<div className="mt-1 text-xs text-slate-600">We’re happy to answer questions and recommend the right service.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F6B4F] px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="tel:+1-626-000-0000">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Call (626) 000-0000
                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" data-page="" id="live-animals">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 sm:py-12 lg:py-14">
<div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-4">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700">
<iconify-icon className="text-[#2F6B4F]" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Thoughtful matching + care guidance
                  </div>
<h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Live Animals</h1>
<p className="mt-3 text-sm text-slate-700 sm:text-base">Availability changes quickly. Call the store for the current selection, pricing, and care questions — we’ll help you choose responsibly.</p>
<div className="mt-5 rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-[#2F6B4F]" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Call for availability
                    </div>
<p className="mt-1 text-xs text-slate-600">These care notes are general — ask us for specifics.</p>
<a className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-slate-800" href="tel:+1-626-000-0000">(626) 000-0000</a>
</div>
</div>
</div>
<div className="lg:col-span-8">
<div className="flex items-end justify-between gap-3">
<div>
<div className="text-sm font-semibold text-slate-900">Animal categories</div>
<div className="mt-1 text-xs text-slate-600">Care notes are general — ask us for specifics.</div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#2F6B4F] hover:text-[#285C44]" href="#pet-care">Beginner care guides
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm">
<div className="aspect-[16/10]">
<img alt="Pet birds indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507477338202-487281e6c27e?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Birds</h2>
<span className="text-xs font-medium text-slate-600">Call for availability</span>
</div>
<p className="mt-2 text-sm text-slate-700">Daily enrichment, proper perch sizing, and a balanced diet matter most.</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm">
<div className="aspect-[16/10]">
<img alt="Reptile in terrarium indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Reptiles</h2>
<span className="text-xs font-medium text-slate-600">Call for availability</span>
</div>
<p className="mt-2 text-sm text-slate-700">Correct heat and UVB lighting make a big difference in long-term health.</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm">
<div className="aspect-[16/10]">
<img alt="Aquarium fish indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Fish</h2>
<span className="text-xs font-medium text-slate-600">Call for availability</span>
</div>
<p className="mt-2 text-sm text-slate-700">Ask about tank cycling, water testing, and compatible species.</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm">
<div className="aspect-[16/10]">
<img alt="Guinea pig indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Guinea Pigs</h2>
<span className="text-xs font-medium text-slate-600">Call for availability</span>
</div>
<p className="mt-2 text-sm text-slate-700">Hay-first diet, roomy habitat, and gentle handling basics.</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm">
<div className="aspect-[16/10]">
<img alt="Hamster indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Hamsters</h2>
<span className="text-xs font-medium text-slate-600">Call for availability</span>
</div>
<p className="mt-2 text-sm text-slate-700">Deep bedding, a safe wheel, and a quiet spot at home help.</p>
</div>
</article>
<article className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/55 shadow-sm">
<div className="aspect-[16/10]">
<img alt="Rabbit indoors" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Rabbits</h2>
<span className="text-xs font-medium text-slate-600">Call for availability</span>
</div>
<p className="mt-2 text-sm text-slate-700">Hay and space matter — we’ll help you set up responsibly.</p>
</div>
</article>
</div>
<div className="mt-6 rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold text-slate-900">New pet, new setup?</div>
<div className="mt-1 text-xs text-slate-600">We can walk you through a starter list before you purchase.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F6B4F] px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="#contact">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Get guidance
                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" data-page="" id="pet-care">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 sm:py-12 lg:py-14">
<div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-4">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700">
<iconify-icon className="text-[#2F6B4F]" icon="solar:book-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Practical tips
                  </div>
<h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Pet Care</h1>
<p className="mt-3 text-sm text-slate-700 sm:text-base">Clear, beginner-friendly guidance for everyday care. For medical concerns, always consult a veterinarian.</p>
<div className="mt-5 rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">Want personalized help?</div>
<div className="mt-1 text-xs text-slate-600">Bring a photo of your pet or habitat and we’ll recommend practical next steps.</div>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6B4F] hover:text-[#285C44]" href="#contact">
                      Contact the team
                      <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="lg:col-span-8">
<div className="grid gap-4">
<article className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Feeding basics that keep it simple</h2>
<p className="mt-2 text-sm text-slate-700">Start with a consistent routine and adjust based on your pet’s energy, age, and body condition. If you’re switching foods, transition gradually.</p>
</div>
<div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:bowl-spoon-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">Dogs</div>
<div className="mt-1 text-xs text-slate-600">Match food to life stage; watch treat portions.</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">Cats</div>
<div className="mt-1 text-xs text-slate-600">Hydration matters; wet food can support routine.</div>
</div>
</div>
</article>
<article className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Grooming between appointments</h2>
<p className="mt-2 text-sm text-slate-700">A short brushing routine helps reduce matting and keeps the coat comfortable.</p>
</div>
<div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Brush gently — especially behind ears and under legs.
                      </li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Keep nails trimmed to support comfort and mobility.
                      </li>
<li className="flex items-start gap-2"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Nervous pet? Keep sessions short and reward calm behavior.</li>
</ul>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<a className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-slate-800 text-center" href="#grooming">Book Grooming</a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white text-center" href="#shop">Shop care items</a>
</div>
</article>
<article className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">New pet checklist (quick)</h2>
<p className="mt-2 text-sm text-slate-700">Before bringing a pet home, make sure the basics are ready: a safe space, proper food, and a care routine you can keep up with.</p>
</div>
<div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">Habitat</div>
<div className="mt-1 text-xs text-slate-600">Size and safety first. Avoid cramped setups.</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">Routine</div>
<div className="mt-1 text-xs text-slate-600">Keep feeding, cleaning, and enrichment consistent.</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">Support</div>
<div className="mt-1 text-xs text-slate-600">Establish care with a trusted vet and ask questions early.</div>
</div>
</div>
</article>
<div className="rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold text-slate-900">Have a specific question?</div>
<div className="mt-1 text-xs text-slate-600">We’ll share practical options for your pet and budget.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F6B4F] px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="#contact">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Contact us
                      </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" data-page="" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 sm:py-12 lg:py-14">
<div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700">
<iconify-icon className="text-[#2F6B4F]" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Local. Honest. Pet-first.
                  </div>
<h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About Valley Pet &amp; Supply</h1>
<p className="mt-3 text-sm text-slate-700 sm:text-base">Valley Pet &amp; Supply is a trusted local pet store serving La Puente with care, honesty, and real support.
                    We’re here for everyday needs — supplies, grooming, and the questions that come up along the way.</p>
<p className="mt-3 text-sm text-slate-700 sm:text-base">Our goal is simple: help you make choices you feel good about, with clear recommendations and a welcoming in-store experience.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">What we believe</div>
<div className="mt-1 text-xs text-slate-600">A smoother visit for you and your pet.</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="text-sm font-semibold text-slate-900">What you get</div>
<div className="mt-1 text-xs text-slate-600">Helpful guidance without pressure.</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-2 sm:flex-row">
<a className="rounded-full bg-[#2F6B4F] px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-[#285C44] text-center" href="#contact">Contact us</a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white text-center" href="#shop">Browse supplies</a>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/40 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Pet store interior shelves and products indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-semibold text-slate-900">What we do</div>
<div className="mt-1 text-xs text-slate-600">Four core ways we support you.</div>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-3 text-sm text-slate-700">
<li className="flex items-start gap-2"><span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Bring your pet’s approximate weight and age (or a recent photo).</li>
<li className="flex items-start gap-2"><span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        For grooming, tell us about any sensitivities (ears, paws, dryers).</li>
<li className="flex items-start gap-2"><span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        For new habitats, share your space and budget — we’ll recommend a starter list.</li>
</ul>
<div className="mt-5 rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Our promise</div>
<div className="mt-1 text-xs text-slate-600">Clear recommendations, a calm approach, and respect for your pet’s comfort.</div>
</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/40 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Pet owner holding a small dog indoors" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/40 shadow-sm">
<div className="aspect-[4/3]">
<img alt="Dog being groomed indoors" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-semibold text-slate-900">Visit tips</div>
<div className="mt-1 text-xs text-slate-600">A smoother visit for you and your pet.</div>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:route-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<ul className="mt-4 space-y-3 text-sm text-slate-700">
<li className="flex items-start gap-2">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        Bring your pet’s approximate weight and age (or a recent photo).
                      </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        For grooming, tell us about any sensitivities (ears, paws, dryers).
                      </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                        For new habitats, share your space/budget and we’ll make a starter list.
                      </li>
</ul>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<a className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-slate-800 text-center" href="#shop">
                        Browse Supplies
                      </a>
<a className="rounded-full border border-slate-900/15 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white text-center" href="#grooming">
                        Grooming Services
                      </a>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-base font-semibold tracking-tight text-slate-900">Proud to serve La Puente and nearby communities</div>
<div className="mt-1 text-xs text-slate-600">Friendly help, everyday essentials, and a groomer you can trust.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F6B4F] px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="#contact">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Get in touch
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" data-page="" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 sm:py-12 lg:py-14">
<div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700">
<iconify-icon className="text-[#2F6B4F]" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Contact + hours
                  </div>
<h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Contact</h1>
<p className="mt-3 text-sm text-slate-700 sm:text-base">For availability, pricing, and same-day grooming questions, calling is the fastest option. For general questions, send a message below.</p>
<div className="mt-6 grid gap-3">
<a className="group flex items-center justify-between rounded-2xl border border-slate-900/10 bg-[#F6F0E6] px-4 py-4 hover:bg-white/70" href="tel:+1-626-000-0000">
<div className="flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-slate-900">(626) 000-0000</div>
<div className="text-xs text-slate-600">Tap to call</div>
</div>
</div>
<iconify-icon className="text-slate-500 group-hover:text-slate-900" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<div className="w-full">
<div className="text-sm font-semibold text-slate-900">Hours</div>
<div className="mt-2 grid gap-2 text-xs text-slate-700">
<div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3">
<span>Mon–Sat</span><span className="font-semibold text-slate-900">10:00 AM – 7:00 PM</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3">
<span>Sunday</span><span className="font-semibold text-slate-900">11:00 AM – 5:00 PM</span>
</div>
</div>
<div className="mt-2 text-[11px] text-slate-600">Holiday hours may vary — please call to confirm.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-900/10 bg-[#F6F0E6] p-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<div className="w-full">
<div className="text-sm font-semibold text-slate-900">Location</div>
<div className="mt-1 text-xs text-slate-600">La Puente, CA (add your exact street address)</div>
<a className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#2F6B4F] hover:text-[#285C44]" href="https://maps.google.com/?q=La%20Puente%2C%20CA" rel="noreferrer" target="_blank">
                            Open in Google Maps
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/60 p-4">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold text-slate-900">Follow along</div>
<div className="mt-1 text-xs text-slate-600">New arrivals, grooming openings, and store updates.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-xs font-semibold text-[#F6F0E6] hover:bg-slate-800" href="https://instagram.com" rel="noreferrer" target="_blank">
<iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Instagram
                      </a>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Send a message</h2>
<p className="mt-2 text-sm text-slate-700 sm:text-base">This form doesn’t send an email (demo). It will show a confirmation message so you can connect it later.</p>
</div>
<div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F6B4F]/10">
<iconify-icon className="text-[#2F6B4F]" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<form className="mt-6 grid gap-4 sm:grid-cols-2" id="contactForm">
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="cName">Name</label>
<input className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="cName" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-slate-700" htmlFor="cPhone">Phone (optional)</label>
<input className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="cPhone" placeholder="(626) 000-0000" type="tel"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-slate-700" htmlFor="cEmail">Email</label>
<input className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="cEmail" placeholder="you@email.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-slate-700" htmlFor="cTopic">Topic</label>
<select className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="cTopic">
<option>Supplies / Brands</option>
<option>Grooming</option>
<option>Live animals availability</option>
<option>Pet care question</option>
<option>Other</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-slate-700" htmlFor="cMsg">Message</label>
<textarea className="mt-2 w-full rounded-2xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F]/30" id="cMsg" placeholder="How can we help?" required="" rows="5"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-600">For urgent questions, please call during store hours.</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-[#F6F0E6] shadow-sm hover:bg-slate-800" type="submit">
<iconify-icon icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Send message
                      </button>
</div>
<div className="sm:col-span-2 hidden rounded-2xl border border-[#2F6B4F]/20 bg-[#2F6B4F]/10 p-4 text-sm font-medium text-[#285C44]" id="contactMsg"></div>
</form>
</div>
<div className="mt-4 overflow-hidden rounded-3xl border border-slate-900/10 bg-white/40 shadow-sm">
<div className="aspect-[16/9] w-full">
<iframe className="h-full w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=La%20Puente%2C%20CA&amp;output=embed" title="Map to La Puente, CA"></iframe>
</div>
</div>
<div className="mt-4 rounded-3xl border border-slate-900/10 bg-[#F6F0E6] p-6 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold text-slate-900">Heading in today?</div>
<div className="mt-1 text-xs text-slate-600">When possible, we can set items aside — call to ask.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F6B4F] px-6 py-3 text-sm font-semibold text-[#F6F0E6] hover:bg-[#285C44]" href="tel:+1-626-000-0000">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Call ahead
                    </a>
</div>
</div>
</div>
</div>
<div className="mt-10 border-t border-slate-900/10 pt-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-600">
<span className="font-semibold text-slate-900">Valley Pet &amp; Supply</span> • La Puente, CA •
                  <a className="hover:text-slate-900" href="tel:+1-626-000-0000">(626) 000-0000</a>
</div>
<div className="flex items-center gap-3 text-xs">
<a className="hover:text-slate-900" href="#home">Home</a>
<span className="text-slate-900/20">•</span>
<a className="hover:text-slate-900" href="#shop">Shop</a>
<span className="text-slate-900/20">•</span>
<a className="hover:text-slate-900" href="#grooming">Grooming</a>
<span className="text-slate-900/20">•</span>
<a className="hover:text-slate-900" href="#contact">Contact</a>
</div>
</div>
<div className="mt-2 text-[11px] text-slate-600">
                © <span id="year">2026</span> Valley Pet &amp; Supply. This is a demo site layout (no checkout, no backend).
              </div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
