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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"] },
colors: {
cream: { 25: "#FFFCF6", 50: "#F8F2E7", 100: "#F5F0E6", 200: "#EDE3D3" },
bark: { 50: "#F6F1EA", 100: "#E7D7C6", 200: "#D2B89A", 300: "#B88F6B", 400: "#9C6E4C", 500: "#7F563A", 600: "#67462F", 700: "#533826", 800: "#3E2A1C" },
leaf: { 50: "#EFF7F1", 100: "#DCEFE0", 200: "#B7DCC2", 300: "#86C2A0", 400: "#57A47C", 500: "#3D8764", 600: "#2F6B4F", 700: "#25543F", 800: "#1D4030" },
clay: { 50: "#FFF2ED", 100: "#FFE1D6", 200: "#FFC3AD", 300: "#FF9A78", 400: "#F4754D", 500: "#D85A35" }
},
boxShadow: {
soft: "0 14px 45px -20px rgba(62,42,28,.35), 0 10px 24px -18px rgba(31,41,55,.35)",
card: "0 18px 55px -30px rgba(15,23,42,.45), 0 8px 22px -18px rgba(15,23,42,.25)"
}
}
}
}



                {
                  "@context": "https://schema.org",
                  "@type": "PetStore",
                  "name": "Valley Pet & Supply",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1234 Valley Blvd",
                    "addressLocality": "La Puente",
                    "addressRegion": "CA",
                    "postalCode": "91744",
                    "addressCountry": "US"
                  },
                  "telephone": "+1-626-555-0147",
                  "areaServed": ["La Puente", "City of Industry", "West Covina", "Hacienda Heights"],
                  "url": "https://example.com",
                  "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1200&q=80"
                }
              


    const pages = ["home","shop","grooming","animals","blog","about","gallery","contact","book"];

    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    function setActiveNav(target){
      // highlight active nav buttons
      $$(".nav-btn").forEach(btn => {
        if(btn.dataset.nav === target){
          btn.classList.add("bg-bark-800","text-cream-25");
          btn.classList.remove("bg-white","text-bark-800");
        } else {
          // only style nav items that are clearly "pill-like"
          if(btn.classList.contains("rounded-full") || btn.classList.contains("rounded-2xl")){
            btn.classList.remove("bg-bark-800","text-cream-25");
          }
        }
      });
    }

    function showPage(name, opts={scrollTop:true}){
      pages.forEach(p => {
        const el = $("#page-" + p);
        if(!el) return;
        el.classList.toggle("hidden", p !== name);
      });

      // close mobile menu on navigation
      const mm = $("#mobileMenu");
      if(mm && !mm.classList.contains("hidden")) mm.classList.add("hidden");
      $("#openMobile")?.setAttribute("aria-expanded","false");

      // update hash for shareability (simple)
      history.replaceState(null, "", "#" + name);

      // special case: book should route to grooming and scroll to form for conversion
      if(name === "book"){
        showPage("grooming", {scrollTop:false});
        setActiveNav("grooming");
        setTimeout(() => {
          $("#groomForm")?.scrollIntoView({behavior:"smooth", block:"start"});
          toast("Fill the form — we’ll confirm by phone/text.");
        }, 120);
        return;
      }

      setActiveNav(name);

      if(opts.scrollTop){
        window.scrollTo({top: 0, behavior: "smooth"});
      }
    }

    // Mobile menu toggle
    $("#openMobile")?.addEventListener("click", () => {
      const mm = $("#mobileMenu");
      if(!mm) return;
      mm.classList.toggle("hidden");
      const expanded = !mm.classList.contains("hidden");
      $("#openMobile").setAttribute("aria-expanded", String(expanded));
    });

    // Navigation buttons
    $$(".nav-btn").forEach(btn => {
      const target = btn.dataset.nav;
      if(!target) return;
      btn.addEventListener("click", () => showPage(target));
    });

    // "Shop by pet" buttons on home
    $$("[data-go-shop]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.goShop;
        showPage("shop");
        setTimeout(() => applyCategory(cat), 80);
      });
    });

    // Shop category filtering + search/chips
    const productGrid        = $("#productGrid");
    const searchInput = $("#shopSearch");
    const sortSelect = $("#shopSort");
    const catButtons = $$(".shop-cat-btn");
    const chipButtons = $$(".chip-btn");
    const clearChipsBtn = $("#clearChips");

    let activeCategory = "all";
    let activeChips = new Set();
    let searchQuery = "";

    function normalize(str){ return (str || "").toLowerCase().trim(); }

    function applyCategory(cat){
      activeCategory = cat || "all";

      // Button styles
      catButtons.forEach(b => {
        const isActive = b.dataset.shopCat === activeCategory;
        b.classList.toggle("bg-bark-800", isActive);
        b.classList.toggle("text-cream-25", isActive);
        b.classList.toggle("ring-black/5", isActive);
        b.classList.toggle("shadow-sm", isActive);

        b.classList.toggle("bg-white", !isActive);
        b.classList.toggle("text-bark-800", !isActive);
        b.classList.toggle("ring-bark-100", !isActive);
      });

      filterProducts();
      toast(activeCategory === "all" ? "Showing all supplies." : `Filtered: ${activeCategory} supplies.`);
    }

    function toggleChip(tag){
      const t = normalize(tag);
      if(!t) return;
      if(activeChips.has(t)) activeChips.delete(t);
      else activeChips.add(t);

      chipButtons.forEach(btn => {
        const isOn = activeChips.has(normalize(btn.dataset.chip));
        btn.classList.toggle("bg-bark-800", isOn);
        btn.classList.toggle("text-cream-25", isOn);
        btn.classList.toggle("ring-black/5", isOn);
        btn.classList.toggle("shadow-sm", isOn);
        btn.classList.toggle("bg-white", !isOn);
        btn.classList.toggle("text-bark-700", !isOn);
        btn.classList.toggle("ring-bark-100", !isOn);
      });

      filterProducts();
    }

    function clearChips(){
      activeChips.clear();
      chipButtons.forEach(btn => {
        btn.classList.remove("bg-bark-800","text-cream-25","ring-black/5","shadow-sm");
        btn.classList.add("bg-white","text-bark-700","ring-bark-100");
      });
      filterProducts();
      toast("Filters cleared.");
    }

    function getCards(){
      return $$(".product-card", productGrid || document);
    }

    function matchesFilters(card){
      const cat = normalize(card.dataset.cat);
      const tags = normalize(card.dataset.tags).split(/\s+/).filter(Boolean);
      const text = normalize(card.textContent);

      const catOk = activeCategory === "all" || cat === normalize(activeCategory);
      const chipsOk = activeChips.size === 0 || Array.from(activeChips).every(c => tags.includes(c));
      const searchOk = !searchQuery || text.includes(searchQuery) || tags.join(" ").includes(searchQuery);
      return catOk && chipsOk && searchOk;
    }

    function sortCards(cards){
      const mode = sortSelect?.value || "recommended";

      // soft sort using tags; keeps layout stable with minimal "jump"
      const score = (card) => {
        const tags = new Set(normalize(card.dataset.tags).split(/\s+/).filter(Boolean));
        const base = 0;
        const rec = tags.has("recommended") ? 40 : 0;
        const pop = tags.has("popular") ? 30 : 0;
        const nw  = tags.has("new") ? 20 : 0;
        const ess = tags.has("essentials") ? 10 : 0;

        if(mode === "recommended") return base + rec + pop + ess + nw;
        if(mode === "popular") return base + pop + rec + ess + nw;
        if(mode === "new") return base + nw + rec + pop + ess;
        if(mode === "essentials") return base + ess + rec + pop + nw;
        return base + rec + pop + ess + nw;
      };

      return cards.slice().sort((a,b) => score(b) - score(a));
    }

    function updateEmptyState(visibleCount){
      let empty = $("#shopEmptyState");
      if(!productGrid) return;

      if(!empty){
        empty = document.createElement("div");
        empty.id = "shopEmptyState";
        empty.className = "hidden sm:col-span-2 xl:col-span-3 rounded-[2rem] bg-white/70 p-8 ring-1 ring-bark-100 shadow-sm";
        empty.innerHTML = `
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-3">
              <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
                <i data-lucide="search-x" class="h-6 w-6 text-bark-700"></i>
              </span>
              <div>
                <div class="text-xl font-semibold tracking-tight text-bark-900">No matches</div>
                <div class="mt-2 text-lg text-bark-600">Try clearing filters, or tell us what you’re looking for and we’ll point you to the best in-store options.</div>
              </div>
            </div>
            <div class="flex flex-col gap-2 sm:flex-row">
              <button type="button" class="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" onclick="clearChips(); if(document.querySelector('#shopSearch')) document.querySelector('#shopSearch').value=''; searchQuery=''; filterProducts();">
                <i data-lucide="x" class="h-4 w-4"></i><span class="text-base sm:text-sm">Clear</span>
              </button>
              <button data-nav="contact" class="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700">
                <i data-lucide="send" class="h-4 w-4"></i><span class="text-base sm:text-sm">Message us</span>
              </button>
            </div>
          </div>
        `;
        productGrid.appendChild(empty);
      }

      empty.classList.toggle("hidden", visibleCount !== 0);
      lucide.createIcons();
      // Re-bind nav button inside empty state
      $$(".nav-btn", empty).forEach(btn => {
        const target = btn.dataset.nav;
        if(!target) return;
        btn.addEventListener("click", () => showPage(target));
      });
    }

    function filterProducts(){
      if(!productGrid) return;
      const cards = getCards();

      let visible = 0;
      cards.forEach(card => {
        const ok = matchesFilters(card);
        card.classList.toggle("hidden", !ok);
        if(ok) visible++;
      });

      // Sort by moving nodes (only within the visible set + keep empty state at end)
      const visibleCards = cards.filter(c => !c.classList.contains("hidden"));
      const sorted = sortCards(visibleCards);

      // Append in sorted order
      sorted.forEach(c => productGrid.appendChild(c));

      // Keep empty state last
      const empty = $("#shopEmptyState");
      if(empty) productGrid.appendChild(empty);

      updateEmptyState(visible);
    }

    // Events: categories
    catButtons.forEach(btn => {
      btn.addEventListener("click", () => applyCategory(btn.dataset.shopCat));
    });

    // Events: chips
    chipButtons.forEach(btn => {
      btn.addEventListener("click", () => toggleChip(btn.dataset.chip));
    });
    clearChipsBtn?.addEventListener("click", clearChips);

    // Events: search & sort
    searchInput?.addEventListener("input", (e) => {
      searchQuery = normalize(e.target.value);
      filterProducts();
    });
    sortSelect?.addEventListener("change", filterProducts);

    // Grooming form submission (simple, local demo)
    function submitGrooming(){
      const name = $("#gName")?.value?.trim() || "there";
      const pet = $("#gPet")?.value || "pet";
      const day = $("#gDay")?.value || "ASAP";
      const windowPref = $("#gWindow")?.value || "any time";

      // Basic validation hint for phone format (keeps UX gentle)
      const phone = $("#gPhone")?.value?.trim() || "";
      const digits = phone.replace(/\D/g,"");
      if(digits.length < 10){
        toast("Please enter a valid phone number so we can confirm your request.");
        $("#gPhone")?.focus();
        return;
      }

      toast(`Thanks, ${name}! We’ll reach out soon to confirm your ${pet.toLowerCase()} grooming (${day}, ${windowPref}).`);
      $("#groomForm")?.reset();
    }

    // Toast helpers
    let toastTimer = null;
    function toast(msg){
      const el = $("#toast");
      const msgEl = $("#toastMsg");
      if(!el || !msgEl) return;
      msgEl.textContent = msg;
      el.classList.remove("hidden");
      el.classList.add("animate-[fadeIn_.2s_ease-out]");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(hideToast, 3600);
    }

    function hideToast(){
      const el = $("#toast");
      if(!el) return;
      el.classList.add("hidden");
    }

    // Initial load: icons, year, hash routing
    lucide.createIcons();
    $("#year").textContent = new Date().getFullYear();

    // Fix typo-ish icon URL usage across certain images not needed; handle hash navigation
    const initial = (location.hash || "#home").replace("#","");
    if(pages.includes(initial)){
      showPage(initial, {scrollTop:false});
    } else {
      showPage("home", {scrollTop:false});
      history.replaceState(null, "", "#home");
    }

    // Improve keyboard UX: close mobile menu with Escape
    document.addEventListener("keydown", (e) => {
      if(e.key !== "Escape") return;
      const mm = $("#mobileMenu");
      if(mm && !mm.classList.contains("hidden")){
        mm.classList.add("hidden");
        $("#openMobile")?.setAttribute("aria-expanded","false");
        $("#openMobile")?.focus();
      }
      // close toast on Escape
      hideToast();
    });

    // If user navigates via back/forward and hash changes
    window.addEventListener("hashchange", () => {
      const target = (location.hash || "#home").replace("#","");
      if(pages.includes(target)) showPage(target, {scrollTop:false});
    });

    // Make product grid ready on load
    if(productGrid){
      filterProducts();
    }
  
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
      

<div className="bg-bark-800 text-cream-25">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
<i className="h-4 w-4" data-lucide="map-pin"></i>
</span>
<span className="text-base sm:text-sm">La Puente, California</span>
<span className="hidden text-white/35 sm:inline">•</span>
<span className="text-base sm:text-sm">Supplies • Grooming • Live Animals</span>
</div>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cream-25 ring-1 ring-white/15 hover:bg-white/15" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-base sm:text-sm">(626) 555-0147</span>
</a>
<button className="nav-btn inline-flex items-center gap-2 rounded-full bg-clay-300 px-4 py-2 text-sm font-medium text-bark-800 ring-1 ring-black/5 hover:bg-clay-200" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
<span className="text-base sm:text-sm">Book Grooming</span>
</button>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-bark-100/70 bg-cream-100/85 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-3">
<button className="nav-btn group flex items-center gap-3 text-left" data-nav="home">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200 shadow-sm">
<i className="h-5 w-5 text-leaf-700" data-lucide="paw-print"></i>
</span>
<div className="leading-tight">
<div className="text-lg font-semibold tracking-tight text-bark-800">Valley Pet &amp; Supply</div>
<div className="text-xs text-bark-500">La Puente • Friendly help, every visit</div>
</div>
</button>
<nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="home">Home</button>
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="shop">Shop</button>
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="grooming">Grooming</button>
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="animals">Live Animals</button>
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="blog">Pet Care Tips</button>
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="about">About</button>
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="gallery">Gallery</button>
<button className="nav-btn inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-bark-700 hover:bg-white/60" data-nav="contact">Visit</button>
</nav>
<div className="flex items-center gap-2">
<button className="nav-btn hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="shop">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-base sm:text-sm">Shop Supplies</span>
</button>
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-2xl bg-white p-2.5 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25 lg:hidden" id="openMobile">
<i className="h-5 w-5 text-bark-800" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden border-t border-bark-100/70 bg-cream-100/95 backdrop-blur lg:hidden" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-2">
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="home">Home</button>
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="shop">Shop</button>
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="grooming">Grooming</button>
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="animals">Live Animals</button>
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="blog">Pet Care Tips</button>
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="about">About</button>
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="gallery">Gallery</button>
<button className="nav-btn w-full rounded-2xl bg-white/70 px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-white" data-nav="contact">Visit</button>
</div>
<div className="mt-3 flex gap-2">
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="shop">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-base sm:text-sm">Shop</span>
</button>
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-clay-300 px-4 py-3 text-sm font-medium text-bark-900 ring-1 ring-black/5 shadow-sm hover:bg-clay-200" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
<span className="text-base sm:text-sm">Book</span>
</button>
</div>
</div>
</div>
</header>
<main className="min-h-[70vh]">

<section className="page" id="page-home">

<section className="relative overflow-hidden" id="home">
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-leaf-100/80 blur-3xl"></div>
<div className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-clay-100/80 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-[30rem] w-[30rem] rounded-full bg-bark-100/60 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20">
<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="sparkles"></i>
<span className="text-base sm:text-sm">From Instagram to in-store — we’ll help you choose with confidence</span>
</div>
<h1 className="mt-6 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">
                Everything Your Pet Needs. All in One Place.
              </h1>
<p className="mt-4 text-lg text-bark-600 max-w-xl">
                We love pets as much as you do. Shop trusted food and essentials, book gentle grooming your pet can actually enjoy, and get real guidance for new habitats — right here in La Puente.
              </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="shop">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-base sm:text-sm">Shop Supplies</span>
</button>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-clay-300 px-6 py-3 text-sm font-medium text-bark-900 shadow-soft ring-1 ring-black/5 hover:bg-clay-200" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
<span className="text-base sm:text-sm">Book Grooming</span>
</button>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="map"></i>
<span className="text-base sm:text-sm">Visit Today</span>
</button>
</div>
<div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl bg-white/70 p-4 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-center gap-2 text-bark-800">
<i className="h-4 w-4 text-leaf-700" data-lucide="badge-check"></i>
<div className="text-sm font-medium"><span className="text-base sm:text-sm">Trusted Picks</span></div>
</div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Food you can feel good about</span></div>
</div>
<div className="rounded-2xl bg-white/70 p-4 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-center gap-2 text-bark-800">
<i className="h-4 w-4 text-leaf-700" data-lucide="scissors"></i>
<div className="text-sm font-medium"><span className="text-base sm:text-sm">Gentle Grooming</span></div>
</div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Comfort-first handling</span></div>
</div>
<div className="rounded-2xl bg-white/70 p-4 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-center gap-2 text-bark-800">
<i className="h-4 w-4 text-leaf-700" data-lucide="store"></i>
<div className="text-sm font-medium"><span className="text-base sm:text-sm">Local &amp; Helpful</span></div>
</div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Ask anything — no judgment</span></div>
</div>
<div className="rounded-2xl bg-white/70 p-4 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-center gap-2 text-bark-800">
<i className="h-4 w-4 text-leaf-700" data-lucide="fish"></i>
<div className="text-sm font-medium"><span className="text-base sm:text-sm">Live Animals</span></div>
</div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Care notes &amp; setup help</span></div>
</div>
</div>
<div className="mt-6 rounded-[2rem] bg-gradient-to-br from-leaf-100 to-cream-50 p-5 ring-1 ring-leaf-200 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="message-square"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Not sure what to buy?</span></div>
<div className="mt-1 text-sm text-bark-700"><span className="text-base sm:text-sm">Tell us your pet + goals — we’ll build a quick in-store shopping list.</span></div>
</div>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="contact">
<i className="h-4 w-4" data-lucide="send"></i>
<span className="text-base sm:text-sm">Message Us</span>
</button>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative">
<div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-white/50 to-white/10 blur-2xl"></div>
<div className="relative overflow-hidden rounded-[2.5rem] bg-white ring-1 ring-bark-100 shadow-card">
<div className="grid gap-0 lg:grid-cols-12">
<div className="relative lg:col-span-7">
<img alt="Happy dog in a warm, friendly pet store vibe" className="h-72 w-full object-cover sm:h-80 lg:h-full" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bark-900/40 via-bark-900/0 to-bark-900/0"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-cream-25/90 px-3 py-1.5 text-sm font-medium text-bark-800 ring-1 ring-bark-100">
<i className="h-4 w-4 text-clay-500" data-lucide="sparkles"></i>
<span className="text-base sm:text-sm">New arrivals + grooming glow-ups</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-cream-25/90 px-3 py-1.5 text-sm font-medium text-bark-800 ring-1 ring-bark-100">
<i className="h-4 w-4 text-clay-500" data-lucide="heart"></i>
<span className="text-base sm:text-sm">Comfort-first care</span>
</span>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="p-6 sm:p-7">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-bark-700"><span className="text-base sm:text-sm">Visit ready</span></div>
<span className="inline-flex items-center gap-1 rounded-full bg-leaf-100 px-3 py-1 text-sm font-medium text-leaf-800 ring-1 ring-leaf-200">
<span className="h-1.5 w-1.5 rounded-full bg-leaf-500"></span>
<span className="text-base sm:text-sm">Open today</span>
</span>
</div>
<div className="mt-5 grid gap-3">
<div className="rounded-2xl bg-cream-50 p-4 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-leaf-700" data-lucide="calendar-clock"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Grooming fills quickly</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Request your time window now — we confirm fast.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-4 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-leaf-700" data-lucide="shopping-basket"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Shop by pet, not by aisle</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Food, treats, toys, habitats — curated for you.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-4 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-leaf-700" data-lucide="book-open"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Care tips included</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Leave with a plan — not just a bag.</span></div>
</div>
</div>
</div>
</div>
<button className="nav-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-plus"></i>
<span className="text-base sm:text-sm">Request Grooming Appointment</span>
</button>
<div className="mt-4 text-xs text-bark-500">
<span className="text-base sm:text-sm">Prefer to call? </span>
<a className="font-medium text-bark-700 hover:text-bark-900" href="tel:+16265550147"><span className="text-base sm:text-sm">(626) 555-0147</span></a>
</div>
</div>
</div>
</div>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="shield-check"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Warm, trustworthy help</span></div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">Real recommendations for real pets.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-clay-100 ring-1 ring-clay-200">
<i className="h-5 w-5 text-clay-500" data-lucide="map-pin"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Local to La Puente</span></div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">Easy parking and quick trips.</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-bark-900 sm:text-3xl">A pet store that feels like a friend’s recommendation</h2>
<p className="mt-3 text-lg text-bark-600">
              If you found us on Instagram — welcome. In-store, you’ll get the same vibe: warm, helpful, and focused on what’s actually best for your pet.
            </p>
<div className="mt-6 grid gap-3">
<div className="flex gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="users"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Community-first service</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">We learn your pet’s name — and your go-to brands.</span></div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="stethoscope"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Care-forward recommendations</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">We help you pick based on goals: digestion, coat, energy, age.</span></div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="badge-check"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Trusted staples + better choices</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">From everyday essentials to premium nutrition options.</span></div>
</div>
</div>
</div>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="shop">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-base sm:text-sm">Shop by Pet</span>
</button>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-base sm:text-sm">Visit in La Puente</span>
</button>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<figure className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card">
<img alt="Friendly dog receiving gentle care" className="h-56 w-full object-cover sm:h-64" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bark-900/55 to-transparent p-4">
<div className="text-sm font-medium text-cream-25"><span className="text-base sm:text-sm">Gentle handling</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">Comfort-first grooming</span></div>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card">
<img alt="Happy cat close-up for welcoming local pet store" className="h-56 w-full object-cover sm:h-64" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bark-900/55 to-transparent p-4">
<div className="text-sm font-medium text-cream-25"><span className="text-base sm:text-sm">Better nutrition support</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">We help you compare ingredients</span></div>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card sm:col-span-2">
<img alt="Pet store shelf display vibe with warm natural tones" className="h-60 w-full object-cover sm:h-72" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bark-900/55 to-transparent p-4">
<div className="flex flex-wrap items-center justify-between gap-2">
<div>
<div className="text-sm font-medium text-cream-25"><span className="text-base sm:text-sm">Curated supplies across pets</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">Food, treats, toys, habitats, and essentials</span></div>
</div>
<button className="nav-btn inline-flex items-center gap-2 rounded-full bg-cream-25/90 px-4 py-2 text-sm font-medium text-bark-900 ring-1 ring-bark-100 hover:bg-cream-25" data-nav="shop">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
<span className="text-base sm:text-sm">Browse categories</span>
</button>
</div>
</figcaption>
</figure>
</div>
</div>
</div>
</section>

<section aria-labelledby="shop-by-pet" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-bark-900 sm:text-3xl" id="shop-by-pet">Shop by pet</h2>
<p className="mt-2 text-lg text-bark-600">Tap your pet to see the essentials — then come in for tailored recommendations.</p>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="shop">
<i className="h-4 w-4" data-lucide="layers"></i>
<span className="text-base sm:text-sm">See all categories</span>
</button>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
<button className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card text-left" data-go-shop="dog">
<img alt="Dog supplies" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-bark-900/0 to-bark-900/0"></div>
<div className="absolute bottom-0 w-full p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-cream-25"><span className="text-base sm:text-sm">Dog</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">Food, treats, toys</span></div>
</div>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-25/90 ring-1 ring-bark-100">
<i className="h-4 w-4 text-bark-900" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card text-left" data-go-shop="cat">
<img alt="Cat supplies" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-bark-900/0 to-bark-900/0"></div>
<div className="absolute bottom-0 w-full p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-cream-25"><span className="text-base sm:text-sm">Cat</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">Litter, nutrition, enrichment</span></div>
</div>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-25/90 ring-1 ring-bark-100">
<i className="h-4 w-4 text-bark-900" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card text-left" data-go-shop="bird">
<img alt="Bird supplies" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-bark-900/0 to-bark-900/0"></div>
<div className="absolute bottom-0 w-full p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-cream-25"><span className="text-base sm:text-sm">Bird</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">Pellets, seed, cages</span></div>
</div>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-25/90 ring-1 ring-bark-100">
<i className="h-4 w-4 text-bark-900" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card text-left" data-go-shop="reptile">
<img alt="Reptile supplies" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-bark-900/0 to-bark-900/0"></div>
<div className="absolute bottom-0 w-full p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-cream-25"><span className="text-base sm:text-sm">Reptile</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">Heat, UVB, habitats</span></div>
</div>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-25/90 ring-1 ring-bark-100">
<i className="h-4 w-4 text-bark-900" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card text-left" data-go-shop="small">
<img alt="Small pet supplies" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bark-900/60 via-bark-900/0 to-bark-900/0"></div>
<div className="absolute bottom-0 w-full p-4">
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-cream-25"><span className="text-base sm:text-sm">Small Pets</span></div>
<div className="text-xs text-cream-25/80"><span className="text-base sm:text-sm">Hay, bedding, chews</span></div>
</div>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-25/90 ring-1 ring-bark-100">
<i className="h-4 w-4 text-bark-900" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</button>
</div>
<div className="mt-6 rounded-[2rem] bg-white/70 p-6 ring-1 ring-bark-100 shadow-sm">
<div className="grid gap-4 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-8">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="badge-percent"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Get local deals + new arrivals (from our Instagram, but organized)</span></div>
<p className="mt-1 text-lg text-bark-600">
                    Join for seasonal specials, grooming reminders, and availability updates. Helpful messages only.
                  </p>
</div>
</div>
</div>
<div className="lg:col-span-4">
<form className="flex flex-col gap-2 sm:flex-row" onsubmit="event.preventDefault(); toast('You’re in! Watch for local promos and reminders.');">
<label className="sr-only" htmlFor="emailSignup">Email</label>
<input className="w-full flex-1 rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 placeholder:text-bark-400 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="emailSignup" placeholder="you@email.com" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" type="submit">
<i className="h-4 w-4" data-lucide="mail"></i>
<span className="text-base sm:text-sm">Join</span>
</button>
</form>
<div className="mt-2 text-xs text-bark-500"><span className="text-base sm:text-sm">Unsubscribe anytime. Zero spam.</span></div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="rounded-[2.5rem] bg-gradient-to-br from-white/70 to-cream-50 p-6 ring-1 ring-bark-100 shadow-card sm:p-8">
<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<h2 className="text-2xl font-semibold tracking-tight text-bark-900 sm:text-3xl">Grooming your pet will feel good about</h2>
<p className="mt-3 text-lg text-bark-600">
                Grooming isn’t just “looking cute.” It supports skin health, reduces shedding, prevents matting, and helps catch issues early — especially in warm SoCal weather.
              </p>
<div className="mt-6 grid gap-3">
<div className="flex gap-3 rounded-2xl bg-white p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-clay-500" data-lucide="sparkles"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Cleaner coat, calmer home</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Less shedding, less odor — easier cuddles.</span></div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-white p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-leaf-700" data-lucide="heart-handshake"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Gentle, patient handling</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Great for first-timers and nervous pets.</span></div>
</div>
</div>
</div>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="grooming">
<i className="h-4 w-4" data-lucide="info"></i>
<span className="text-base sm:text-sm">See grooming details</span>
</button>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
<span className="text-base sm:text-sm">Book Appointment</span>
</button>
</div>
<div className="mt-6 rounded-2xl bg-cream-50 p-4 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-bark-700" data-lucide="clock-3"></i>
<p className="text-sm text-bark-600">
<span className="text-base sm:text-sm">Pro tip: The earlier you request your window, the easier it is to get your preferred day.</span>
</p>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<div className="flex items-center justify-between p-4">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Before</span></div>
<span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="clock"></i>
<span className="text-base sm:text-sm">Overgrown</span>
</span>
</div>
<img alt="Before grooming photo style" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<div className="flex items-center justify-between p-4">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">After</span></div>
<span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3 py-1 text-sm font-medium text-leaf-800 ring-1 ring-leaf-200">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span className="text-base sm:text-sm">Fresh</span>
</span>
</div>
<img alt="After grooming photo style" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="sm:col-span-2 rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-100 ring-1 ring-clay-200">
<i className="h-5 w-5 text-clay-500" data-lucide="message-square"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">“They were so patient with my anxious pup.”</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">We communicate clearly and move at your pet’s pace.</span></div>
<div className="mt-3 flex items-center gap-2 text-sm text-bark-700">
<i className="h-4 w-4 text-clay-500" data-lucide="star"></i>
<i className="h-4 w-4 text-clay-500" data-lucide="star"></i>
<i className="h-4 w-4 text-clay-500" data-lucide="star"></i>
<i className="h-4 w-4 text-clay-500" data-lucide="star"></i>
<i className="h-4 w-4 text-clay-500" data-lucide="star"></i>
<span className="ml-1 text-xs text-bark-500"><span className="text-base sm:text-sm">Local review</span></span>
</div>
<div className="mt-4 flex flex-col gap-2 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-plus"></i>
<span className="text-base sm:text-sm">Request a grooming window</span>
</button>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="grooming">
<i className="h-4 w-4" data-lucide="list"></i>
<span className="text-base sm:text-sm">See what’s included</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-bark-900 sm:text-3xl">Live animals — with real setup guidance</h2>
<p className="mt-3 text-lg text-bark-600">
              Availability changes quickly, and every animal has different needs. We’ll help you build a safe, comfortable habitat and choose the right food and lighting from day one.
            </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="animals">
<i className="h-4 w-4" data-lucide="search"></i>
<span className="text-base sm:text-sm">See Live Animals</span>
</button>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone-call"></i>
<span className="text-base sm:text-sm">Call for availability</span>
</a>
</div>
<div className="mt-6 rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="book-open"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Care notes included</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Feeding, habitat basics, and safe handling — explained simply.</span></div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Birds available" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Birds</span></div>
<a className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-base sm:text-sm">Call</span>
</a>
</div>
<p className="mt-2 text-lg text-bark-600">We’ll help you choose cage sizing, perches, and a balanced diet.</p>
</div>
</div>
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Small pets available" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Hamsters &amp; Small Pets</span></div>
<a className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-base sm:text-sm">Call</span>
</a>
</div>
<p className="mt-2 text-lg text-bark-600">We’ll recommend safer bedding, wheel sizing, and enrichment.</p>
</div>
</div>
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Reptiles available" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Reptiles</span></div>
<a className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-base sm:text-sm">Call</span>
</a>
</div>
<p className="mt-2 text-lg text-bark-600">We’ll help you set heat gradients and UVB correctly.</p>
</div>
</div>
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Fish available" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-5">
<div className="flex items-center justify-between gap-3">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Fish</span></div>
<a className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-base sm:text-sm">Call</span>
</a>
</div>
<p className="mt-2 text-lg text-bark-600">We’ll walk you through cycling and water testing basics.</p>
</div>
</div>
</div>
<div className="mt-4 rounded-[2rem] bg-gradient-to-br from-clay-100 to-cream-50 p-6 ring-1 ring-clay-200 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-clay-200">
<i className="h-5 w-5 text-clay-500" data-lucide="shield"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Bring your tank/cage size</span></div>
<div className="mt-1 text-sm text-bark-700"><span className="text-base sm:text-sm">We’ll confirm the right habitat, lighting, and diet before you commit.</span></div>
</div>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="shop">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-base sm:text-sm">Shop habitats</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-6">
<div className="flex items-end justify-between gap-3">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-bark-900 sm:text-3xl">Community moments</h2>
<p className="mt-2 text-lg text-bark-600">The store where your pet becomes part of the neighborhood.</p>
</div>
<button className="nav-btn hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="gallery">
<i className="h-4 w-4" data-lucide="images"></i>
<span className="text-base sm:text-sm">View gallery</span>
</button>
</div>
<div className="mt-6 rounded-[2rem] bg-white/70 p-6 ring-1 ring-bark-100 shadow-card">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-100 ring-1 ring-clay-200">
<i className="h-5 w-5 text-clay-500" data-lucide="instagram"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Instagram</span></div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">@valleypetandsupply</span></div>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-cream-25" onclick="toast('Add your real Instagram link to this button.');" type="button">
<i className="h-4 w-4" data-lucide="user-plus"></i>
<span className="text-base sm:text-sm">Follow</span>
</button>
</div>
<div aria-label="Instagram feed preview" className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
<div className="aspect-square overflow-hidden rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<img alt="Pet photo 1" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<img alt="Pet photo 2" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square overflow-hidden rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<img alt="Pet photo 3" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="hidden sm:block aspect-square overflow-hidden rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<img alt="Pet photo 4" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="mt-5 rounded-2xl bg-cream-50 p-4 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-bark-600" data-lucide="tag"></i>
<p className="text-sm text-bark-600">
<span className="text-base sm:text-sm">Tag us and we’ll feature your pet. It helps local families find a store they can trust.</span>
</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card p-6 sm:p-8">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-xl font-semibold tracking-tight text-bark-900">What locals say</h3>
<p className="mt-2 text-lg text-bark-600">The quickest way to trust a shop is to hear from your neighbors.</p>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-2 text-sm font-medium text-leaf-800 ring-1 ring-leaf-200">
<i className="h-4 w-4 text-clay-500" data-lucide="star"></i>
<span className="text-base sm:text-sm">Loved locally</span>
</div>
</div>
<div className="mt-6 grid gap-4">
<blockquote className="rounded-[1.75rem] bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="message-square"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">“They helped me pick the right food in minutes.”</span></div>
<p className="mt-2 text-lg text-bark-600">No pressure — just clear options for my dog’s stomach sensitivity.</p>
<div className="mt-3 flex items-center gap-1 text-clay-500">
<i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i>
</div>
</div>
</div>
<span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-base sm:text-sm">La Puente</span>
</span>
</div>
</blockquote>
<blockquote className="rounded-[1.75rem] bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="scissors"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">“Grooming was gentle — my dog came out calm.”</span></div>
<p className="mt-2 text-lg text-bark-600">They explained everything and gave a realistic pickup window.</p>
<div className="mt-3 flex items-center gap-1 text-clay-500">
<i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i>
</div>
</div>
</div>
</blockquote>
<div className="rounded-[1.75rem] bg-gradient-to-br from-leaf-100 to-cream-50 p-5 ring-1 ring-leaf-200">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="party-popper"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Ready for your first visit?</span></div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">We’ll help you find what you need quickly.</span></div>
</div>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-base sm:text-sm">Get directions</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-bark-900 sm:text-3xl">Pet Care Tips</h2>
<p className="mt-2 text-lg text-bark-600">Quick, practical guides designed for local pet parents — and easy to follow.</p>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="blog">
<i className="h-4 w-4" data-lucide="book-open"></i>
<span className="text-base sm:text-sm">Read all posts</span>
</button>
</div>
<div className="mt-7 grid gap-4 lg:grid-cols-3">
<article className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Puppy nutrition blog cover" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="bone"></i>
<span className="text-base sm:text-sm">Nutrition</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Best food for puppies: what to look for</h3>
<p className="mt-2 text-lg text-bark-600">Protein, DHA, and ingredient clarity — without the marketing fluff.</p>
<button className="nav-btn mt-5 inline-flex items-center gap-2 text-sm font-medium text-bark-800 hover:text-bark-900" data-nav="blog">
<span className="text-base sm:text-sm">Read more</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
<article className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Dog grooming blog cover" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="scissors"></i>
<span className="text-base sm:text-sm">Grooming</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">How often should you groom your dog?</h3>
<p className="mt-2 text-lg text-bark-600">Simple schedules by coat type — plus at-home upkeep tips.</p>
<button className="nav-btn mt-5 inline-flex items-center gap-2 text-sm font-medium text-bark-800 hover:text-bark-900" data-nav="blog">
<span className="text-base sm:text-sm">Read more</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
<article className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Reptile care blog cover" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="turtle"></i>
<span className="text-base sm:text-sm">Reptiles</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Beginner reptile care guide: the essentials</h3>
<p className="mt-2 text-lg text-bark-600">Heat, UVB, humidity — and the mistakes we help you avoid.</p>
<button className="nav-btn mt-5 inline-flex items-center gap-2 text-sm font-medium text-bark-800 hover:text-bark-900" data-nav="blog">
<span className="text-base sm:text-sm">Read more</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
</div>
<div className="mt-6 rounded-[2rem] bg-white/70 p-6 ring-1 ring-bark-100 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="map-pin"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Visiting from nearby?</span></div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">We’re a quick stop for La Puente, Industry, West Covina, and surrounding areas.</span></div>
</div>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="contact">
<i className="h-4 w-4" data-lucide="navigation"></i>
<span className="text-base sm:text-sm">Plan your visit</span>
</button>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-shop">
<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-24 right-1/3 h-[30rem] w-[30rem] rounded-full bg-leaf-100/70 blur-3xl"></div>
<div className="absolute -bottom-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-clay-100/70 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="shopping-bag"></i>
<span className="text-base sm:text-sm">Shop by pet — curated for real needs</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">Shop</h1>
<p className="mt-3 text-lg text-bark-600 max-w-2xl">
                Looking for a <span className="font-medium text-bark-800">pet store in La Puente</span> with better guidance? Start with your pet type and we’ll help you choose the right food, treats, enrichment, and habitat essentials.
              </p>
</div>
<div className="flex flex-col gap-2 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-base sm:text-sm">Visit to shop in-store</span>
</button>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
<span className="text-base sm:text-sm">Book grooming</span>
</button>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-12">

<aside className="lg:col-span-3">
<div className="rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Categories</span></div>
<span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="filter"></i>
<span className="text-base sm:text-sm">Filter</span>
</span>
</div>
<div className="mt-4 grid gap-2">
<button className="shop-cat-btn w-full rounded-2xl bg-bark-800 px-4 py-3 text-left text-sm font-medium text-cream-25 shadow-sm ring-1 ring-black/5" data-shop-cat="all">
<span className="text-base sm:text-sm">All supplies</span>
</button>
<button className="shop-cat-btn w-full rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-cream-25" data-shop-cat="dog">
<span className="text-base sm:text-sm">Dog Supplies</span>
</button>
<button className="shop-cat-btn w-full rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-cream-25" data-shop-cat="cat">
<span className="text-base sm:text-sm">Cat Supplies</span>
</button>
<button className="shop-cat-btn w-full rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-cream-25" data-shop-cat="bird">
<span className="text-base sm:text-sm">Bird Supplies</span>
</button>
<button className="shop-cat-btn w-full rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-cream-25" data-shop-cat="reptile">
<span className="text-base sm:text-sm">Reptile Supplies</span>
</button>
<button className="shop-cat-btn w-full rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-cream-25" data-shop-cat="small">
<span className="text-base sm:text-sm">Small Pet Supplies</span>
</button>
</div>
<div className="mt-5 rounded-2xl bg-cream-50 p-4 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-bark-700" data-lucide="lightbulb"></i>
<p className="text-sm text-bark-600">
<span className="text-base sm:text-sm">Bring a photo of your current food label or habitat — we’ll help you upgrade without wasting money.</span>
</p>
</div>
</div>
</div>
<div className="mt-4 rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Featured this week</span></div>
<p className="mt-2 text-lg text-bark-600">The picks we recommend most often for healthier routines.</p>
<div className="mt-4 grid gap-3">
<div className="rounded-2xl bg-white p-4 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="badge-check"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Sensitive stomach picks</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Limited ingredient, gentle proteins.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-clay-100 ring-1 ring-clay-200">
<i className="h-5 w-5 text-clay-500" data-lucide="sparkles"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Best-selling chews</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Longer-lasting enrichment options.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="fish"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Aquarium quick-start</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Filters, conditioners, test kits.</span></div>
</div>
</div>
</div>
</div>
<button className="nav-btn mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-base sm:text-sm">Come shop in-store</span>
</button>
</div>
</aside>

<div className="lg:col-span-9">
<div className="rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="scan-search"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Find what you need</span></div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">Search and filter — then ask us for the best match.</span></div>
</div>
</div>
<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
<label className="sr-only" htmlFor="shopSearch">Search products</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bark-500" data-lucide="search"></i>
<input autocomplete="off" className="w-full min-w-[16rem] rounded-2xl bg-white py-3 pl-10 pr-4 text-sm text-bark-900 placeholder:text-bark-400 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="shopSearch" placeholder="Search: puppy food, litter, UVB..." type="search"/>
</div>
<label className="sr-only" htmlFor="shopSort">Sort</label>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bark-500" data-lucide="arrow-up-down"></i>
<select className="w-full rounded-2xl bg-white py-3 pl-10 pr-9 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="shopSort">
<option value="recommended">Recommended</option>
<option value="popular">Most popular</option>
<option value="new">New arrivals</option>
<option value="essentials">Essentials first</option>
</select>
</div>
</div>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="text-xs font-medium text-bark-600"><span className="text-base sm:text-sm">Quick filters:</span></span>
<button className="chip-btn inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" data-chip="food" type="button">
<i className="h-4 w-4 text-leaf-700" data-lucide="utensils"></i><span className="text-base sm:text-sm">Food</span>
</button>
<button className="chip-btn inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" data-chip="treats" type="button">
<i className="h-4 w-4 text-clay-500" data-lucide="bone"></i><span className="text-base sm:text-sm">Treats</span>
</button>
<button className="chip-btn inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" data-chip="toys" type="button">
<i className="h-4 w-4 text-clay-500" data-lucide="sparkles"></i><span className="text-base sm:text-sm">Toys</span>
</button>
<button className="chip-btn inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" data-chip="habitat" type="button">
<i className="h-4 w-4 text-leaf-700" data-lucide="home"></i><span className="text-base sm:text-sm">Habitats</span>
</button>
<button className="chip-btn inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" data-chip="health" type="button">
<i className="h-4 w-4 text-leaf-700" data-lucide="heart-pulse"></i><span className="text-base sm:text-sm">Health</span>
</button>
<button className="ml-auto inline-flex items-center gap-2 rounded-full bg-cream-50 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 hover:bg-cream-25" id="clearChips" type="button">
<i className="h-4 w-4" data-lucide="x"></i><span className="text-base sm:text-sm">Clear</span>
</button>
</div>
</div>
<div aria-label="Product recommendations" className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" id="productGrid">

<article className="product-card rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden" data-cat="dog" data-tags="food essentials popular">
<img alt="Dog food bag and bowl" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3 py-1 text-sm font-medium text-leaf-800 ring-1 ring-leaf-200">
<i className="h-4 w-4 text-leaf-700" data-lucide="badge-check"></i><span className="text-base sm:text-sm">Staple pick</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="dog"></i><span className="text-base sm:text-sm">Dog</span>
</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Everyday Nutrition (Dry &amp; Wet)</h3>
<p className="mt-2 text-lg text-bark-600">We’ll help you choose by age, energy level, allergies, and budget.</p>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" onclick="toast('Ask us in-store: we can compare ingredients and match goals in minutes.');" type="button">
<i className="h-4 w-4" data-lucide="sparkles"></i><span className="text-base sm:text-sm">Get a recommendation</span>
</button>
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i><span className="text-base sm:text-sm">Visit</span>
</button>
</div>
</div>
</article>
<article className="product-card rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden" data-cat="cat" data-tags="food essentials recommended">
<img alt="Cat food and cat" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1604542031658-5799ca5d7936?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-clay-100 px-3 py-1 text-sm font-medium text-bark-800 ring-1 ring-clay-200">
<i className="h-4 w-4 text-clay-500" data-lucide="sparkles"></i><span className="text-base sm:text-sm">Staff favorite</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="cat"></i><span className="text-base sm:text-sm">Cat</span>
</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Coat &amp; Digestive Support</h3>
<p className="mt-2 text-lg text-bark-600">Sensitive tummy? Hairball control? We’ll pick the right formula.</p>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" onclick="toast('Bring a photo of your current label — we’ll compare ingredients together.');" type="button">
<i className="h-4 w-4" data-lucide="scan"></i><span className="text-base sm:text-sm">Compare labels</span>
</button>
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="navigation"></i><span className="text-base sm:text-sm">Directions</span>
</button>
</div>
</div>
</article>
<article className="product-card rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden" data-cat="reptile" data-tags="habitat essentials new">
<img alt="Reptile terrarium setup" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-6">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3 py-1 text-sm font-medium text-leaf-800 ring-1 ring-leaf-200">
<i className="h-4 w-4 text-leaf-700" data-lucide="sun"></i><span className="text-base sm:text-sm">UVB &amp; heat</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="lizard"></i><span className="text-base sm:text-sm">Reptile</span>
</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Habitat Setup (Done Right)</h3>
<p className="mt-2 text-lg text-bark-600">We’ll help you build the right heat gradient and lighting plan.</p>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i><span className="text-base sm:text-sm">Call for help</span>
</a>
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="animals">
<i className="h-4 w-4" data-lucide="search"></i><span className="text-base sm:text-sm">Live animals</span>
</button>
</div>
</div>
</article>
<article className="product-card rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden" data-cat="bird" data-tags="food habitat recommended">
<img alt="Bird supplies and care" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="bird"></i><span className="text-base sm:text-sm">Bird</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3 py-1 text-sm font-medium text-leaf-800 ring-1 ring-leaf-200">
<i className="h-4 w-4 text-leaf-700" data-lucide="leaf"></i><span className="text-base sm:text-sm">Balanced diet</span>
</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Pellets, Seed &amp; Enrichment</h3>
<p className="mt-2 text-lg text-bark-600">We’ll help you choose safer treats, perches, and cage essentials.</p>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" onclick="toast('Tell us your bird type + cage size — we’ll build a simple checklist.');" type="button">
<i className="h-4 w-4" data-lucide="list-checks"></i><span className="text-base sm:text-sm">Get checklist</span>
</button>
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i><span className="text-base sm:text-sm">Visit</span>
</button>
</div>
</div>
</article>
<article className="product-card rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden" data-cat="small" data-tags="habitat essentials popular">
<img alt="Small pet bedding and habitat" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="rabbit"></i><span className="text-base sm:text-sm">Small pets</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full bg-clay-100 px-3 py-1 text-sm font-medium text-bark-800 ring-1 ring-clay-200">
<i className="h-4 w-4 text-clay-500" data-lucide="shield"></i><span className="text-base sm:text-sm">Safer picks</span>
</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Bedding, Hay &amp; Chews</h3>
<p className="mt-2 text-lg text-bark-600">We’ll guide you toward safer bedding and correct wheel sizing.</p>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone-call"></i><span className="text-base sm:text-sm">Call us</span>
</a>
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="navigation"></i><span className="text-base sm:text-sm">Directions</span>
</button>
</div>
</div>
</article>
</div>
<div className="mt-5 rounded-[2rem] bg-gradient-to-br from-leaf-100 to-cream-50 p-6 ring-1 ring-leaf-200 shadow-sm">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="message-circle"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Want a fast “what should I buy?” answer?</span></div>
<p className="mt-1 text-lg text-bark-700">Tell us your pet + budget + goal. We’ll suggest a simple, no-waste list for your next visit.</p>
</div>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="contact">
<i className="h-4 w-4" data-lucide="send"></i><span className="text-base sm:text-sm">Message us</span>
</button>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-grooming">
<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/4 h-[30rem] w-[30rem] rounded-full bg-clay-100/70 blur-3xl"></div>
<div className="absolute -bottom-40 right-1/4 h-[34rem] w-[34rem] rounded-full bg-leaf-100/70 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="scissors"></i>
<span className="text-base sm:text-sm">Comfort-first grooming in La Puente</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">Grooming</h1>
<p className="mt-3 text-lg text-bark-600 max-w-2xl">
                Our grooming approach is calm, patient, and clear. Request a time window, we confirm quickly, and you’ll get a realistic pickup estimate — so you’re never left guessing.
              </p>
</div>
<div className="flex flex-col gap-2 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
<span className="text-base sm:text-sm">Request appointment</span>
</button>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-base sm:text-sm">Call: (626) 555-0147</span>
</a>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="rounded-[2.5rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Freshly groomed dog" className="h-64 w-full object-cover sm:h-72" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="p-6 sm:p-8">
<h2 className="text-2xl font-semibold tracking-tight text-bark-900 sm:text-3xl">What’s included</h2>
<p className="mt-2 text-lg text-bark-600">Packages vary by coat type and size, but here’s what most visits include.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-leaf-700" data-lucide="droplets"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Bath + blow dry</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Coat cleaned and dried comfortably.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-clay-500" data-lucide="scissors"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Trim / tidy</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Breed-inspired or lifestyle cut.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-clay-500" data-lucide="sparkles"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Brush-out</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">Helps reduce shedding and matting.</span></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-bark-100">
<i className="h-5 w-5 text-leaf-700" data-lucide="heart-pulse"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Wellness check-in</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">We flag anything unusual early.</span></div>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-gradient-to-br from-leaf-100 to-cream-50 p-5 ring-1 ring-leaf-200">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-leaf-800" data-lucide="info"></i>
<p className="text-sm text-bark-700">
<span className="text-base sm:text-sm">For anxious pets, we move slower and communicate clearly. If something isn’t safe or comfortable, we’ll tell you and adjust the plan.</span>
</p>
</div>
</div>
</div>
</div>
</div>
<aside className="lg:col-span-5">
<div className="rounded-[2.5rem] bg-white/70 p-6 ring-1 ring-bark-100 shadow-card sm:p-8">
<div className="flex items-center gap-3">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-100 ring-1 ring-clay-200">
<i className="h-6 w-6 text-clay-500" data-lucide="calendar-plus"></i>
</span>
<div>
<h3 className="text-xl font-semibold tracking-tight text-bark-900">Request a grooming window</h3>
<p className="mt-1 text-lg text-bark-600">We confirm by phone/text.</p>
</div>
</div>
<form className="mt-6 grid gap-3" id="groomForm" onsubmit="event.preventDefault(); submitGrooming();">
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gName"><span className="text-base sm:text-sm">Your name</span></label>
<input className="mt-1 w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gName" placeholder="Alex" required=""/>
</div>
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gPhone"><span className="text-base sm:text-sm">Phone</span></label>
<input className="mt-1 w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gPhone" inputmode="tel" placeholder="(626) 555-0123" required=""/>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gPet"><span className="text-base sm:text-sm">Pet</span></label>
<select className="mt-1 w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gPet">
<option>Dog</option>
<option>Cat</option>
</select>
</div>
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gSize"><span className="text-base sm:text-sm">Size</span></label>
<select className="mt-1 w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gSize">
<option>Small</option>
<option>Medium</option>
<option>Large</option>
</select>
</div>
</div>
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gService"><span className="text-base sm:text-sm">Service</span></label>
<select className="mt-1 w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gService">
<option>Bath + brush</option>
<option>Full groom (bath + haircut)</option>
<option>Nails only</option>
<option>Not sure (help me choose)</option>
</select>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gDay"><span className="text-base sm:text-sm">Preferred day</span></label>
<select className="mt-1 w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gDay">
<option>ASAP</option>
<option>Weekday</option>
<option>Weekend</option>
</select>
</div>
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gWindow"><span className="text-base sm:text-sm">Time window</span></label>
<select className="mt-1 w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gWindow">
<option>Morning</option>
<option>Midday</option>
<option>Afternoon</option>
</select>
</div>
</div>
<div>
<label className="text-sm font-medium text-bark-700" htmlFor="gNotes"><span className="text-base sm:text-sm">Notes (optional)</span></label>
<textarea className="mt-1 w-full resize-none rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="gNotes" placeholder="Anxious, mats, allergies, first grooming…" rows="3"></textarea>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
<span className="text-base sm:text-sm">Send request</span>
</button>
<p className="text-xs text-bark-500">
<span className="text-base sm:text-sm">We’ll confirm availability and pricing by phone/text. Prefer to call now? </span>
<a className="font-medium text-bark-700 hover:text-bark-900" href="tel:+16265550147"><span className="text-base sm:text-sm">(626) 555-0147</span></a>
</p>
</form>
</div>
</aside>
</div>
</section>
</section>

<section className="page hidden" id="page-animals">
<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/3 h-[30rem] w-[30rem] rounded-full bg-leaf-100/70 blur-3xl"></div>
<div className="absolute -bottom-40 right-1/3 h-[34rem] w-[34rem] rounded-full bg-bark-100/60 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="fish"></i>
<span className="text-base sm:text-sm">Availability changes quickly — call for today’s list</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">Live Animals</h1>
<p className="mt-3 text-lg text-bark-600 max-w-2xl">
                We prioritize responsible setups. Bring your tank/cage size (or a photo) and we’ll confirm the right habitat, lighting, diet, and safe handling basics.
              </p>
</div>
<div className="flex flex-col gap-2 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone-call"></i>
<span className="text-base sm:text-sm">Call for availability</span>
</a>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="shop">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-base sm:text-sm">Shop habitats</span>
</button>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Birds in a bright enclosure" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="p-6">
<h2 className="text-xl font-semibold tracking-tight text-bark-900">Birds</h2>
<p className="mt-2 text-lg text-bark-600">Cage sizing, pellets vs seed, enrichment, and safe perches.</p>
<div className="mt-5 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i><span className="text-base sm:text-sm">Call</span>
</a>
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" onclick="toast('Ask us about: cage size, pellet transition, and enrichment toys.');" type="button">
<i className="h-4 w-4" data-lucide="help-circle"></i><span className="text-base sm:text-sm">What to ask</span>
</button>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Small pets in habitat" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="p-6">
<h2 className="text-xl font-semibold tracking-tight text-bark-900">Small Pets</h2>
<p className="mt-2 text-lg text-bark-600">Wheel sizing, safer bedding, chew enrichment, and diet basics.</p>
<div className="mt-5 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i><span className="text-base sm:text-sm">Call</span>
</a>
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" onclick="toast('Bring a photo of your enclosure — we’ll recommend upgrades that matter most.');" type="button">
<i className="h-4 w-4" data-lucide="camera"></i><span className="text-base sm:text-sm">Bring a photo</span>
</button>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Reptile closeup" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="p-6">
<h2 className="text-xl font-semibold tracking-tight text-bark-900">Reptiles</h2>
<p className="mt-2 text-lg text-bark-600">Heat gradient, UVB, humidity, and feeding routines.</p>
<div className="mt-5 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i><span className="text-base sm:text-sm">Call</span>
</a>
<button className="nav-btn inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="shop">
<i className="h-4 w-4" data-lucide="sun"></i><span className="text-base sm:text-sm">UVB &amp; heat</span>
</button>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Aquarium fish" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="p-6">
<h2 className="text-xl font-semibold tracking-tight text-bark-900">Fish</h2>
<p className="mt-2 text-lg text-bark-600">Cycling basics, test kits, filters, and stocking guidance.</p>
<div className="mt-5 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i><span className="text-base sm:text-sm">Call</span>
</a>
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" onclick="toast('If you’re new: ask about cycling + water testing (we’ll make it simple).');" type="button">
<i className="h-4 w-4" data-lucide="droplet"></i><span className="text-base sm:text-sm">New to fish?</span>
</button>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-gradient-to-br from-clay-100 to-cream-50 p-6 ring-1 ring-clay-200 shadow-card">
<div className="flex items-start gap-3">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-clay-200">
<i className="h-6 w-6 text-clay-500" data-lucide="shield-check"></i>
</span>
<div>
<h3 className="text-xl font-semibold tracking-tight text-bark-900">Responsible setup support</h3>
<p className="mt-2 text-lg text-bark-700">We’ll help you match the right animal to the right habitat — and avoid common mistakes.</p>
<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i><span className="text-base sm:text-sm">Visit for guidance</span>
</button>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i><span className="text-base sm:text-sm">Call first</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-blog">
<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-24 right-1/4 h-[30rem] w-[30rem] rounded-full bg-bark-100/60 blur-3xl"></div>
<div className="absolute -bottom-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-leaf-100/70 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="book-open"></i>
<span className="text-base sm:text-sm">Practical tips, written for real pet parents</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">Pet Care Tips</h1>
<p className="mt-3 text-lg text-bark-600 max-w-2xl">Easy guides you can actually use — plus what we recommend in-store in La Puente.</p>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-base sm:text-sm">Visit for personalized help</span>
</button>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="grid gap-4 lg:grid-cols-3">
<article className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Puppy nutrition" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="bone"></i><span className="text-base sm:text-sm">Nutrition</span>
</div>
<h2 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Puppy food basics (without the hype)</h2>
<p className="mt-2 text-lg text-bark-600">How to choose protein, DHA, and the right calories for growth.</p>
<button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-bark-800 hover:text-bark-900" onclick="toast('Blog posts are placeholders — wire up to your CMS or add static pages.');" type="button">
<span className="text-base sm:text-sm">Read</span><i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
<article className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Grooming schedule" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="scissors"></i><span className="text-base sm:text-sm">Grooming</span>
</div>
<h2 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">A simple grooming schedule by coat type</h2>
<p className="mt-2 text-lg text-bark-600">What to do at home vs what to book — especially in warm weather.</p>
<button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-bark-800 hover:text-bark-900" onclick="toast('Blog posts are placeholders — wire up to your CMS or add static pages.');" type="button">
<span className="text-base sm:text-sm">Read</span><i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
<article className="rounded-[2rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Reptile habitat essentials" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-bark-700 ring-1 ring-bark-100">
<i className="h-4 w-4" data-lucide="turtle"></i><span className="text-base sm:text-sm">Reptiles</span>
</div>
<h2 className="mt-4 text-xl font-semibold tracking-tight text-bark-900">Beginner reptile setup checklist</h2>
<p className="mt-2 text-lg text-bark-600">Heat, UVB, hides, substrate — what matters most first.</p>
<button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-bark-800 hover:text-bark-900" onclick="toast('Blog posts are placeholders — wire up to your CMS or add static pages.');" type="button">
<span className="text-base sm:text-sm">Read</span><i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
</div>
<div className="mt-6 rounded-[2rem] bg-white/70 p-6 ring-1 ring-bark-100 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="mail"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Get helpful tips + local promos</span></div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">Short emails only. Unsubscribe anytime.</span></div>
</div>
</div>
<form className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row" onsubmit="event.preventDefault(); toast('Subscribed!');">
<label className="sr-only" htmlFor="blogEmail">Email</label>
<input className="w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 placeholder:text-bark-400 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="blogEmail" placeholder="you@email.com" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" type="submit">
<i className="h-4 w-4" data-lucide="arrow-right"></i><span className="text-base sm:text-sm">Join</span>
</button>
</form>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-about">
<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="store"></i>
<span className="text-base sm:text-sm">Local, friendly, and practical</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">About Valley Pet &amp; Supply</h1>
<p className="mt-3 text-lg text-bark-600 max-w-2xl">
              We’re a neighborhood pet store in La Puente, CA focused on helping you make confident choices — without pressure or upsells. Whether you need better nutrition, gentle grooming, or a first-time habitat setup, we’ll walk you through it.
            </p>
<div className="mt-6 grid gap-3">
<div className="flex gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="heart-handshake"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">No judgment, just help</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">From first-time pet parents to experienced keepers.</span></div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-100 ring-1 ring-clay-200">
<i className="h-5 w-5 text-clay-500" data-lucide="sparkles"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Curated, not cluttered</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">We stock what we can stand behind.</span></div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="map-pin"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Proudly serving nearby cities</span></div>
<div className="mt-1 text-sm text-bark-600"><span className="text-base sm:text-sm">La Puente • City of Industry • West Covina • Hacienda Heights</span></div>
</div>
</div>
</div>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" data-nav="contact">
<i className="h-4 w-4" data-lucide="navigation"></i><span className="text-base sm:text-sm">Visit the store</span>
</button>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="grooming">
<i className="h-4 w-4" data-lucide="scissors"></i><span className="text-base sm:text-sm">Grooming</span>
</button>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-[2.5rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<img alt="Cozy pet store vibe" className="h-72 w-full object-cover sm:h-[28rem]" src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="p-6 sm:p-8">
<h2 className="text-2xl font-semibold tracking-tight text-bark-900">Our promise</h2>
<p className="mt-2 text-lg text-bark-600">We’ll always tell you the simplest next best step for your pet.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-leaf-700" data-lucide="check"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Ingredient clarity and options by budget</span></p>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-leaf-700" data-lucide="check"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Comfort-first grooming handling</span></p>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-leaf-700" data-lucide="check"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Habitat setup guidance for beginners</span></p>
</div>
</div>
<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-leaf-700" data-lucide="check"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Fast, friendly help in-store</span></p>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-gradient-to-br from-clay-100 to-cream-50 p-5 ring-1 ring-clay-200">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-clay-500" data-lucide="sparkles"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">If you found us through Instagram, tell us what post brought you in — we’ll help you recreate that setup in-store.</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-gallery">
<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="images"></i>
<span className="text-base sm:text-sm">A quick look inside</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">Gallery</h1>
<p className="mt-3 text-lg text-bark-600 max-w-2xl">Warm, local, and pet-focused. Tag us for a chance to be featured.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-2xl bg-bark-800 px-6 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" onclick="toast('Connect this to your real Instagram profile or embed.');" type="button">
<i className="h-4 w-4" data-lucide="instagram"></i><span className="text-base sm:text-sm">View on Instagram</span>
</button>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<img alt="Happy dog portrait" className="h-64 w-full rounded-[2rem] object-cover ring-1 ring-bark-100 shadow-card" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<img alt="Cat close-up" className="h-64 w-full rounded-[2rem] object-cover ring-1 ring-bark-100 shadow-card" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<img alt="Small pet close-up" className="h-64 w-full rounded-[2rem] object-cover ring-1 ring-bark-100 shadow-card" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<img alt="Reptile" className="h-64 w-full rounded-[2rem] object-cover ring-1 ring-bark-100 shadow-card" src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<img alt="Aquarium fish" className="h-64 w-full rounded-[2rem] object-cover ring-1 ring-bark-100 shadow-card" src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<img alt="Store vibes" className="h-64 w-full rounded-[2rem] object-cover ring-1 ring-bark-100 shadow-card" src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
</section>
</section>

<section className="page hidden" id="page-contact">
<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-28 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-leaf-100/70 blur-3xl"></div>
<div className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-clay-100/80 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-bark-700 ring-1 ring-bark-100 shadow-sm">
<i className="h-4 w-4 text-leaf-700" data-lucide="map-pin"></i>
<span className="text-base sm:text-sm">Visit Valley Pet &amp; Supply in La Puente, CA</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-bark-900 sm:text-5xl">Plan your visit</h1>
<p className="mt-3 text-lg text-bark-600 max-w-2xl">
                Quick trips, real help. Come in for supplies, grooming, or live animal setup guidance — and leave with a plan that fits your pet and budget.
              </p>
<div className="mt-6 grid gap-3">
<div className="rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="map-pin"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Address</span></div>
<p className="mt-1 text-lg text-bark-600">1234 Valley Blvd, La Puente, CA 91744</p>
<button className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-800 ring-1 ring-bark-100 hover:bg-cream-25" onclick="toast('Replace the address + link with your real Google Maps URL.');" type="button">
<i className="h-4 w-4" data-lucide="navigation"></i><span className="text-base sm:text-sm">Open in Maps</span>
</button>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="clock"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Hours</span></div>
<p className="mt-1 text-lg text-bark-600">Mon–Sat: 10am–7pm • Sun: 11am–6pm</p>
<p className="mt-2 text-sm text-bark-600"><span className="text-base sm:text-sm">Holiday hours may vary — call ahead to confirm.</span></p>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-white/70 p-5 ring-1 ring-bark-100 shadow-sm">
<div className="flex items-start gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50 ring-1 ring-bark-100">
<i className="h-5 w-5 text-bark-700" data-lucide="phone"></i>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Call us</span></div>
<p className="mt-1 text-lg text-bark-600">(626) 555-0147</p>
<div className="mt-3 flex flex-col gap-2 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-bark-800 px-5 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone-call"></i><span className="text-base sm:text-sm">Tap to call</span>
</a>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i><span className="text-base sm:text-sm">Book grooming</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-[2.5rem] bg-white ring-1 ring-bark-100 shadow-card overflow-hidden">
<div className="aspect-[4/3] w-full bg-cream-50">
<iframe className="h-full w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=La%20Puente%20CA&amp;output=embed" title="Map to Valley Pet &amp; Supply (placeholder)"></iframe>
</div>
<div className="p-6 sm:p-8">
<h2 className="text-2xl font-semibold tracking-tight text-bark-900">Fast trip checklist</h2>
<p className="mt-2 text-lg text-bark-600">Bring one of these and we can help you even faster:</p>
<ul className="mt-5 grid gap-3 sm:grid-cols-2">
<li className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-bark-700" data-lucide="camera"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Photo of current food label</span></p>
</div>
</li>
<li className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-bark-700" data-lucide="ruler"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Tank/cage dimensions</span></p>
</div>
</li>
<li className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-bark-700" data-lucide="clipboard"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Pet age + weight</span></p>
</div>
</li>
<li className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-bark-700" data-lucide="heart-pulse"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Goals (coat, digestion, energy)</span></p>
</div>
</li>
</ul>
<div className="mt-6 rounded-2xl bg-gradient-to-br from-leaf-100 to-cream-50 p-5 ring-1 ring-leaf-200">
<div className="flex items-start gap-3">
<i className="mt-1 h-4 w-4 text-leaf-800" data-lucide="sparkles"></i>
<p className="text-sm text-bark-700"><span className="text-base sm:text-sm">Instagram visitors: tell us what you saw and we’ll help you find it quickly (or a better match).</span></p>
</div>
</div>
</div>
</div>


</div>
</div>
</div>
</section>
</section>

<section className="page hidden" id="page-book">
<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="rounded-[2.5rem] bg-white/70 p-6 ring-1 ring-bark-100 shadow-card sm:p-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-bark-900 sm:text-4xl">Book Grooming</h1>
<p className="mt-2 text-lg text-bark-600">Fill this out and we’ll confirm by phone/text.</p>
</div>
<button className="nav-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="grooming">
<i className="h-4 w-4" data-lucide="arrow-left"></i><span className="text-base sm:text-sm">See grooming details</span>
</button>
</div>
<div className="mt-6">

<div className="rounded-2xl bg-cream-50 p-5 ring-1 ring-bark-100">
<p className="text-sm text-bark-700">
<span className="text-base sm:text-sm">Tip: The booking form lives on the Grooming page. </span>
<button className="nav-btn font-medium text-bark-900 underline underline-offset-4" data-nav="grooming">Go there now</button>
<span className="text-base sm:text-sm"> (we’ll auto-scroll to it).</span>
</p>
</div>
</div>
</div>
</section>
</section>
</main>

<footer className="border-t border-bark-100/70 bg-cream-100">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 ring-1 ring-leaf-200">
<i className="h-5 w-5 text-leaf-700" data-lucide="paw-print"></i>
</span>
<div>
<div className="text-lg font-semibold tracking-tight text-bark-900">Valley Pet &amp; Supply</div>
<div className="text-sm text-bark-600"><span className="text-base sm:text-sm">Pet store • Grooming • Live animals — La Puente, CA</span></div>
</div>
</div>
<p className="mt-4 text-lg text-bark-600 max-w-xl">
            Friendly, practical guidance and curated essentials — for dogs, cats, birds, reptiles, fish, and small pets.
          </p>
<div className="mt-5 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" href="tel:+16265550147">
<i className="h-4 w-4" data-lucide="phone"></i><span className="text-base sm:text-sm">(626) 555-0147</span>
</a>
<button className="nav-btn inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-800 ring-1 ring-bark-100 shadow-sm hover:bg-cream-25" data-nav="contact">
<i className="h-4 w-4" data-lucide="map-pin"></i><span className="text-base sm:text-sm">Directions</span>
</button>
<button className="nav-btn inline-flex items-center gap-2 rounded-full bg-bark-800 px-4 py-2 text-sm font-medium text-cream-25 ring-1 ring-black/5 shadow-soft hover:bg-bark-700" data-nav="book">
<i className="h-4 w-4" data-lucide="calendar-check"></i><span className="text-base sm:text-sm">Book grooming</span>
</button>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Explore</span></div>
<div className="mt-3 grid gap-2 text-sm">
<button className="nav-btn text-left text-bark-700 hover:text-bark-900" data-nav="shop"><span className="text-base sm:text-sm">Shop</span></button>
<button className="nav-btn text-left text-bark-700 hover:text-bark-900" data-nav="grooming"><span className="text-base sm:text-sm">Grooming</span></button>
<button className="nav-btn text-left text-bark-700 hover:text-bark-900" data-nav="animals"><span className="text-base sm:text-sm">Live Animals</span></button>
<button className="nav-btn text-left text-bark-700 hover:text-bark-900" data-nav="blog"><span className="text-base sm:text-sm">Pet Care Tips</span></button>
</div>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Store</span></div>
<div className="mt-3 grid gap-2 text-sm text-bark-700">
<div><span className="text-base sm:text-sm">1234 Valley Blvd</span></div>
<div><span className="text-base sm:text-sm">La Puente, CA 91744</span></div>
<div className="pt-2">
<span className="text-base sm:text-sm">Hours: Mon–Sat 10–7 • Sun 11–6</span>
</div>
</div>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-bark-900"><span className="text-base sm:text-sm">Stay in the loop</span></div>
<p className="mt-3 text-sm text-bark-600"><span className="text-base sm:text-sm">Local promos + new arrivals. Helpful only.</span></p>
<form className="mt-3 flex gap-2" onsubmit="event.preventDefault(); toast('Thanks — you’re subscribed!');">
<label className="sr-only" htmlFor="footerEmail">Email</label>
<input className="w-full rounded-2xl bg-white px-4 py-3 text-sm text-bark-900 placeholder:text-bark-400 ring-1 ring-bark-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf-300" id="footerEmail" placeholder="you@email.com" required="" type="email"/>
<button className="inline-flex items-center justify-center rounded-2xl bg-bark-800 px-4 py-3 text-sm font-medium text-cream-25 shadow-soft ring-1 ring-black/5 hover:bg-bark-700" type="submit">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-bark-100/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-bark-500"><span className="text-base sm:text-sm">© <span id="year"></span> Valley Pet &amp; Supply. All rights reserved.</span></div>
<div className="flex flex-wrap items-center gap-3 text-xs text-bark-500">
<button className="hover:text-bark-800" onclick="toast('Add your privacy policy URL.');" type="button"><span className="text-base sm:text-sm">Privacy</span></button>
<button className="hover:text-bark-800" onclick="toast('Add your terms URL.');" type="button"><span className="text-base sm:text-sm">Terms</span></button>
</div>
</div>
</div>
</footer>

<div className="pointer-events-none fixed bottom-5 left-1/2 z-50 hidden w-[min(92vw,520px)] -translate-x-1/2" id="toast">
<div className="pointer-events-auto rounded-2xl bg-bark-900/90 px-4 py-3 text-cream-25 shadow-card ring-1 ring-white/10 backdrop-blur">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</span>
<div className="flex-1">
<div className="text-sm font-medium" id="toastMsg"><span className="text-base sm:text-sm">Hello!</span></div>
<div className="mt-1 text-xs text-cream-25/75"><span className="text-base sm:text-sm">Tip: Replace placeholder links and business info with your real details.</span></div>
</div>
<button aria-label="Close toast" className="rounded-xl bg-white/10 p-2 ring-1 ring-white/10 hover:bg-white/15" onclick="hideToast()" type="button">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
</div>
</div>




    </>
  );
}
