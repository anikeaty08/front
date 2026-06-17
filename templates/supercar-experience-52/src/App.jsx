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



    (function () {
      const html = document.documentElement;
      const $ = (id) => document.getElementById(id);
    
      function getMenu()     { return $("mobileMenu"); }
      function getBackdrop() { return $("mobileMenuBackdrop"); }
      function getPanel()    { return $("mobileMenuPanel"); }
    
      // -----------------------------
      // Mobile menu: animated open/close (RIGHT DRAWER)
      // -----------------------------
      function setMenuOpen(open) {
        const menu = getMenu();
        const backdrop = getBackdrop();
        const panel = getPanel();
        if (!menu || !backdrop || !panel) return;
    
        if (menu.__hideTimer) clearTimeout(menu.__hideTimer);
    
        if (open) {
          // show overlay node
          menu.classList.remove("hidden");
    
          // allow clicks + lock scroll
          menu.classList.remove("pointer-events-none");
          menu.classList.add("pointer-events-auto");
          html.classList.add("overflow-hidden");
    
          requestAnimationFrame(() => {
            // overlay fade in
            menu.classList.remove("opacity-0");
            menu.classList.add("opacity-100");
    
            // backdrop fade in
            backdrop.classList.remove("opacity-0");
            backdrop.classList.add("opacity-100");
    
            // panel slide+fade in (from right)
            panel.classList.remove("opacity-0", "translate-x-6", "scale-[0.985]");
            panel.classList.add("opacity-100", "translate-x-0", "scale-100");
          });
    
        } else {
          // overlay fade out
          menu.classList.remove("opacity-100");
          menu.classList.add("opacity-0");
    
          // backdrop fade out
          backdrop.classList.remove("opacity-100");
          backdrop.classList.add("opacity-0");
    
          // panel slide+fade out (to right)
          panel.classList.remove("opacity-100", "translate-x-0", "scale-100");
          panel.classList.add("opacity-0", "translate-x-6", "scale-[0.985]");
    
          // disable clicks + unlock scroll immediately
          menu.classList.remove("pointer-events-auto");
          menu.classList.add("pointer-events-none");
          html.classList.remove("overflow-hidden");
    
          // hide after transition
          menu.__hideTimer = setTimeout(() => {
            menu.classList.add("hidden");
          }, 520);
        }
      }
    
      // Global for inline onclick on hamburger/backdrop
      window.toggleMobileMenu = function (force) {
        const menu = getMenu();
        if (!menu) {
          console.warn("Missing #mobileMenu element.");
          return;
        }
    
        const open = (typeof force === "boolean")
          ? force
          : menu.classList.contains("hidden"); // toggle
    
        setMenuOpen(open);
      };
    
      // Close on any link click inside menu (CAPTURE)
      function closeOnMenuLink(e) {
        const menu = getMenu();
        if (!menu || menu.classList.contains("hidden")) return;
    
        const link = e.target.closest("a");
        if (!link || !menu.contains(link)) return;
    
        const href = link.getAttribute("href") || "";
    
        // close immediately
        setMenuOpen(false);
    
        // smooth scroll for hash links
        if (href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          requestAnimationFrame(() => {
            target?.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", href);
          });
        }
      }
    
      document.addEventListener("click", closeOnMenuLink, true);
      document.addEventListener("pointerup", closeOnMenuLink, true);
    
      // ESC closes
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenuOpen(false);
      });
    })();
  


        function updateJourney(stepIndex) {
            // Update Progress Bar
            const totalSteps = 4;
            const progress = (stepIndex / (totalSteps - 1)) * 100;
            const progressBar = document.getElementById('journey-progress');
            if (progressBar) progressBar.style.width = `${progress}%`;

            // Update Buttons
            document.querySelectorAll('.journey-step-btn').forEach((btn, idx) => {
                const indicator = btn.querySelector('.step-indicator');
                const label = btn.querySelector('.step-label');
                
                if (idx === stepIndex) {
                    // Active State
                    indicator.className = 'step-indicator w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 bg-red-600 text-white shadow-xl shadow-red-600/20 scale-110 z-20 relative ring-4 ring-white';
                    label.className = 'step-label absolute top-16 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-red-600 transition-colors duration-300';
                    btn.setAttribute('aria-selected', 'true');
                } else if (idx < stepIndex) {
                    // Completed State
                    indicator.className = 'step-indicator w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 bg-red-600 text-white z-20 relative ring-4 ring-white';
                    label.className = 'step-label absolute top-16 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest text-zinc-400 transition-colors duration-300';
                    btn.setAttribute('aria-selected', 'false');
                } else {
                    // Inactive State
                    indicator.className = 'step-indicator w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 bg-white border border-zinc-200 text-zinc-400 hover:border-red-600 hover:text-red-600 z-20 relative ring-4 ring-white shadow-sm';
                    label.className = 'step-label absolute top-16 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest text-zinc-400 transition-colors duration-300';
                    btn.setAttribute('aria-selected', 'false');
                }
            });

            // Update Content Panels
            document.querySelectorAll('.journey-content-panel').forEach((panel, idx) => {
                if (idx === stepIndex) {
                    panel.classList.remove('hidden', 'opacity-0', 'translate-y-4');
                    panel.classList.add('block', 'opacity-100', 'translate-y-0');
                } else {
                    panel.classList.add('hidden', 'opacity-0', 'translate-y-4');
                    panel.classList.remove('block', 'opacity-100', 'translate-y-0');
                }
            });

            // Update Image
            const images = [
                'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80',
                'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80',
                'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80',
                'https://images.unsplash.com/photo-1544614471-eb69c6cf9113?w=2160&q=80'
            ];
            const imgEl = document.getElementById('journey-main-image');
            if (imgEl) {
                imgEl.style.opacity = '0';
                setTimeout(() => {
                    imgEl.src = images[stepIndex];
                    imgEl.onload = () => { imgEl.style.opacity = '1'; };
                }, 200);
            }
        }
      


              // --- Desktop image sources per step ---
              const JOURNEY_IMAGES = [
                {
                  src: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80",
                  alt: "Configure step image"
                },
                {
                  src: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80",
                  alt: "Deposit step image"
                },
                {
                  src: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80",
                  alt: "Briefing step image"
                },
                {
                  src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
                  alt: "Drive step image"
                }
              ];
            
              function setJourneyImage(index) {
                const img = document.getElementById("journey-main-image");
                if (!img) return;
            
                const item = JOURNEY_IMAGES[index];
                if (!item) return;
            
                if (img.dataset.currentSrc === item.src) return;
            
                // fade out (requires img has transition for opacity)
                img.classList.add("opacity-0");
            
                // preload to avoid flash
                const pre = new Image();
                pre.src = item.src;
                pre.onload = () => {
                  img.src = item.src;
                  img.alt = item.alt;
                  img.dataset.currentSrc = item.src;
            
                  requestAnimationFrame(() => {
                    img.classList.remove("opacity-0"); // fade in
                  });
                };
              }
            
              // --- Global state for panel animation ---
              window.__journeyState = window.__journeyState || { active: 0, animating: false, queued: null };
            
              function updateJourney(activeIndex) {
                // --- STEPPER (icons + labels + progress) ---
                const steps = document.querySelectorAll(".journey-step-btn");
                const progress = document.getElementById("journey-progress");
                const total = steps.length;
            
                const removeIndicator = [
                  "bg-red-600","text-white","shadow-xl","shadow-red-600/20",
                  "bg-white","bg-[#FAFAFA]",
                  "text-red-600","text-red-600/70","text-zinc-400",
                  "border","border-2","border-red-600","border-red-600/60","border-zinc-200",
                  "shadow-sm",
                  "scale-110",
                  "ring-4","ring-white","ring-[#FAFAFA]","ring-red-600/10"
                ];
            
                const removeLabel = [
                  "text-red-600","text-red-600/70","text-zinc-400",
                  "font-bold","font-semibold","uppercase"
                ];
            
                const upcomingIndicator  = ["bg-[#FAFAFA]","border","border-zinc-200","text-zinc-400","shadow-sm","ring-4","ring-[#FAFAFA]"];
                const completedIndicator = ["bg-[#FAFAFA]","border","border-red-600/60","text-red-600/70","shadow-sm","ring-4","ring-[#FAFAFA]"];
                const activeIndicator    = ["bg-[#FAFAFA]","border-2","border-red-600","text-red-600","shadow-sm","ring-4","ring-red-600/10"];
            
                const upcomingLabel   = ["text-zinc-400","font-semibold"];
                const completedLabel  = ["text-red-600/70","font-semibold"];
                const activeLabel     = ["text-red-600","font-bold","uppercase"];
            
                steps.forEach((btn, i) => {
                  const indicator = btn.querySelector(".step-indicator");
                  const label = btn.querySelector(".step-label");
                  if (!indicator || !label) return;
            
                  indicator.classList.remove(...removeIndicator);
                  label.classList.remove(...removeLabel);
            
                  if (i < activeIndex) {
                    indicator.classList.add(...completedIndicator);
                    label.classList.add(...completedLabel);
                  } else if (i === activeIndex) {
                    indicator.classList.add(...activeIndicator);
                    label.classList.add(...activeLabel);
                  } else {
                    indicator.classList.add(...upcomingIndicator);
                    label.classList.add(...upcomingLabel);
                  }
                });
            
                const pct = total > 1 ? (activeIndex / (total - 1)) * 100 : 0;
                if (progress) progress.style.width = pct + "%";
            
                // --- Update desktop image ---
                setJourneyImage(activeIndex);
            
                // --- CONTENT PANELS (robust slide + fade, safe on rapid clicks) ---
                const panels = Array.from(document.querySelectorAll(".journey-content-panel"));
                if (!panels.length) return;
            
                const state = window.__journeyState;
                const nextIndex = activeIndex;
            
                // if animating, remember only the last click
                if (state.animating) {
                  state.queued = nextIndex;
                  return;
                }
            
                const currentIndex = state.active;
                if (currentIndex === nextIndex) return;
            
                const currentPanel = panels[currentIndex];
                const nextPanel = panels[nextIndex];
                if (!currentPanel || !nextPanel) return;
            
                const forward = nextIndex > currentIndex;
            
                const show = (p) => { p.classList.remove("hidden"); p.classList.add("block"); };
                const hide = (p) => { p.classList.add("hidden"); p.classList.remove("block"); };
            
                // Ensure current is visible
                show(currentPanel);
            
                // Prepare next panel offscreen + transparent
                show(nextPanel);
                nextPanel.style.transform = forward ? "translate3d(-100%,0,0)" : "translate3d(100%,0,0)";
                nextPanel.style.opacity = "0";
            
                // Start animation
                state.animating = true;
            
                requestAnimationFrame(() => {
                  // current exits
                  currentPanel.style.transform = forward ? "translate3d(100%,0,0)" : "translate3d(-100%,0,0)";
                  currentPanel.style.opacity = "0";
            
                  // next enters
                  nextPanel.style.transform = "translate3d(0,0,0)";
                  nextPanel.style.opacity = "1";
                });
            
                const onDone = (e) => {
                  if (e.propertyName !== "transform") return;
                  currentPanel.removeEventListener("transitionend", onDone);
            
                  hide(currentPanel);
            
                  // reset current so it's clean for next time
                  currentPanel.style.transform = "translate3d(0,0,0)";
                  currentPanel.style.opacity = "0";
            
                  state.active = nextIndex;
                  state.animating = false;
            
                  // run last queued click (if any)
                  if (state.queued !== null && state.queued !== state.active) {
                    const q = state.queued;
                    state.queued = null;
                    updateJourney(q);
                  } else {
                    state.queued = null;
                  }
                };
            
                currentPanel.addEventListener("transitionend", onDone);
              }
            
              // init
              window.__journeyState = { active: 0, animating: false, queued: null };
              updateJourney(0);
            


      // =========================
  // 0) SUPABASE INIT
  // =========================
  const SUPABASE_URL = "https://cfebfvyafsrkxmpnpmce.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmZWJmdnlhZnNya3htcG5wbWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1OTQ2MzcsImV4cCI6MjA4NTE3MDYzN30.qVa34-2sx2vlukaNeinA4AjxBUkLvDQphO3rukhH2Wc";
  window.sb = window.sb || window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // =========================
  // 1) HELPERS
  // =========================
  function moneyEUR(n){ return "€" + Number(n || 0).toFixed(0); }
  function depositEUR(n){ return moneyEUR((Number(n || 0)) / 2); }
  function getImageUrl(row){ return row.image_url || row.image || row.hero_image || ""; }

  function normalizeChips(row){
    const raw = row.chips ?? row.tags ?? row.labels ?? [];
    let chips = [];
    if (Array.isArray(raw)) chips = raw.filter(Boolean);
    else if (typeof raw === "string") chips = raw.split(",").map(s => s.trim()).filter(Boolean);

    if (row.engine) chips.unshift(String(row.engine));
    if (row.convertible === true) chips.unshift("Convertible");

    // dedupe
    chips = [...new Set(chips)];
    return chips;
  }

  function isComingSoon(car){
    const st = String(car.status || "").toLowerCase();
    // prefer explicit status, fallback to active=false
    return st === "coming_soon" || st === "coming soon" || car.active === false;
  }

  // =========================
  // 2) STATE
  // =========================
  let allCars = [];
  let activeFilter = "all";
  let activeSort = "popular";

  // Compare state (persist)
  const STORAGE_KEY = "compareCars_v1";
  const compare = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  function persistCompare(){ localStorage.setItem(STORAGE_KEY, JSON.stringify([...compare])); }

  // =========================
  // 3) ELEMENTS
  // =========================
  const countEl = document.getElementById("carsCount");
  const emptyEl = document.getElementById("carsEmpty");

  const pager = document.getElementById("carsPages");
  const controls = document.getElementById("carsPagerControls");
  const prevBtn = document.getElementById("carsPrev");
  const nextBtn = document.getElementById("carsNext");
  const dotsEl = document.getElementById("carsDots");
  const pageNowEl = document.getElementById("carsPageNow");
  const pageTotalEl = document.getElementById("carsPageTotal");

  const compareBar = document.getElementById("compareBar");
  const compareCountEl = document.getElementById("compareCount");
  const compareOpenBtn = document.getElementById("compareOpen");
  const compareClearBtn = document.getElementById("compareClear");

  const compareOverlay = document.getElementById("compareOverlay");
  const compareBackdrop = document.getElementById("compareBackdrop");
  const compareClose = document.getElementById("compareClose");
  const compareList = document.getElementById("compareList");
  const compareEmptyState = document.getElementById("compareEmptyState");

  // =========================
  // 4) FILTER + SORT
  // =========================
  function setFilter(value){
    activeFilter = value;

    document.querySelectorAll(".car-filter").forEach(btn => {
      const on = btn.dataset.filter === value;

      btn.classList.toggle("bg-zinc-900", on);
      btn.classList.toggle("text-white", on);
      btn.classList.toggle("shadow-md", on);

      btn.classList.toggle("bg-white", !on);
      btn.classList.toggle("text-zinc-600", !on);
      btn.classList.toggle("border", !on);
      btn.classList.toggle("border-zinc-200", !on);
    });

    renderCars();
  }

  function passesFilter(c){
    if (activeFilter === "all") return true;

    if (activeFilter === "2" || activeFilter === "4"){
      return Number(c.seats) === Number(activeFilter);
    }

    if (activeFilter === "convertible"){
      const chips = normalizeChips(c).map(x => String(x).toLowerCase());
      return chips.includes("convertible") || c.convertible === true;
    }

    return true;
  }

  function sortCars(list){
    const cars = [...list];

    if (activeSort === "price_asc") return cars.sort((a,b) => (a.price_from ?? 0) - (b.price_from ?? 0));
    if (activeSort === "price_desc") return cars.sort((a,b) => (b.price_from ?? 0) - (a.price_from ?? 0));
    if (activeSort === "name_asc") return cars.sort((a,b) => String(a.name ?? "").localeCompare(String(b.name ?? "")));

    return cars.sort((a,b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  }

  // =========================
  // 5) COMPARE UI
  // =========================
  function setCompareBar(){
    // coming soon never allowed in compare -> cleanup
    for (const id of [...compare]){
      const car = allCars.find(x => String(x.id) === String(id));
      if (!car || isComingSoon(car)) compare.delete(id);
    }
    persistCompare();

    const count = compare.size;
    compareCountEl.textContent = count;

    if (count > 0) compareBar.classList.remove("hidden");
    else compareBar.classList.add("hidden");

    compareOpenBtn.textContent = count > 0 ? `Compare (${count})` : "Compare";
  }

  function openCompare(){
    const selected = allCars.filter(c => compare.has(c.id) && !isComingSoon(c));

    compareEmptyState.classList.toggle("hidden", selected.length !== 0);
    compareList.innerHTML = "";

    if (selected.length){
      compareList.innerHTML = selected.map(c => {
        const img = getImageUrl(c);
        return `
          <div class="border border-zinc-200 rounded-2xl p-3 bg-zinc-50">
            <div class="aspect-[16/10] rounded-xl overflow-hidden bg-zinc-100 mb-3">
              ${img ? `<img src="${img}" alt="${c.name || ""}" class="w-full h-full object-cover">` : ""}
            </div>

            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-semibold text-zinc-900">${c.name || ""}</p>
                <p class="text-xs text-zinc-500">${c.seats || "—"} seats</p>
              </div>

              <button type="button"
                class="compare-remove text-xs font-semibold text-zinc-500 hover:text-red-600"
                data-id="${c.id}">
                Remove
              </button>
            </div>

            <div class="mt-3 border-t border-zinc-200/60 pt-3 space-y-2">
              <div class="flex items-center justify-between text-xs text-zinc-600">
                <span>From</span>
                <span class="font-semibold text-zinc-900">${moneyEUR(c.price_from)}</span>
              </div>
              <div class="flex items-center justify-between text-xs text-zinc-600">
                <span>Deposit (50%)</span>
                <span class="font-semibold text-green-600">${depositEUR(c.price_from)}</span>
              </div>
            </div>

            <button type="button"
              class="mt-3 w-full py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-red-600 transition-colors car-book"
              data-id="${c.id}">
              Configure &amp; Book
            </button>
          </div>
        `;
      }).join("");

      compareList.querySelectorAll(".compare-remove").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          compare.delete(id);
          persistCompare();
          setCompareBar();
          renderCars();
          openCompare();
        });
      });

      compareList.querySelectorAll(".car-book").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          const car = allCars.find(x => String(x.id) === String(id));
          if (!car) return;
          if (typeof window.openBooking === "function") window.openBooking(car.name, car.price_from);
        });
      });
    }

    compareOverlay.classList.remove("hidden");
  }

  function closeCompare(){
    compareOverlay.classList.add("hidden");
  }

  compareOpenBtn.addEventListener("click", openCompare);
  compareClose.addEventListener("click", closeCompare);
  compareBackdrop.addEventListener("click", closeCompare);

  compareClearBtn.addEventListener("click", () => {
    compare.clear();
    persistCompare();
    setCompareBar();
    renderCars();
    closeCompare();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !compareOverlay.classList.contains("hidden")) closeCompare();
  });

  // =========================
  // 6) PAGER (desktop pages of 6, mobile swipe by 1)
  // =========================
  const DESKTOP_PAGE_SIZE = 6;
  let pageCount = 1;
  let currentPage = 0;
  let scrollTicking = false;
  let lastMobile = isMobile();

  function isMobile(){
    return window.matchMedia("(max-width: 767px)").matches;
  }

  function chunk(arr, size){
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  function buildDots(total){
    dotsEl.innerHTML = "";
    for (let i = 0; i < total; i++){
      const b = document.createElement("button");
      b.type = "button";
      b.className = "w-2.5 h-2.5 rounded-full border border-zinc-300 transition";
      b.addEventListener("click", () => scrollToPage(i, true));
      dotsEl.appendChild(b);
    }
  }

  function pageLeft(i){
    const el = pager.children[i];
    return el ? el.offsetLeft : 0;
  }

  function findNearestIndex(){
    const x = pager.scrollLeft;
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < pager.children.length; i++){
      const d = Math.abs(pageLeft(i) - x);
      if (d < bestDist){ bestDist = d; bestIdx = i; }
    }
    return bestIdx;
  }

  function updatePagerUI(){
    pageNowEl.textContent = String(currentPage + 1);
    pageTotalEl.textContent = String(pageCount);

    [...dotsEl.children].forEach((dot, idx) => {
      dot.classList.toggle("bg-zinc-900", idx === currentPage);
      dot.classList.toggle("border-zinc-900", idx === currentPage);
      dot.classList.toggle("bg-transparent", idx !== currentPage);
    });

    prevBtn.disabled = currentPage <= 0;
    nextBtn.disabled = currentPage >= pageCount - 1;
  }

  function scrollToPage(idx, smooth){
    const clamped = Math.max(0, Math.min(idx, pageCount - 1));
    currentPage = clamped;
    pager.scrollTo({ left: pageLeft(clamped), behavior: smooth ? "smooth" : "auto" });
    updatePagerUI();
  }

  prevBtn.addEventListener("click", () => scrollToPage(currentPage - 1, true));
  nextBtn.addEventListener("click", () => scrollToPage(currentPage + 1, true));

  pager.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      currentPage = Math.max(0, Math.min(findNearestIndex(), pageCount - 1));
      updatePagerUI();
      scrollTicking = false;
    });
  });

  window.addEventListener("resize", () => {
    const m = isMobile();
    if (m !== lastMobile){
      lastMobile = m;
      renderCars();
      scrollToPage(0, false);
    } else {
      scrollToPage(currentPage, false);
    }
  });

  // =========================
  // 7) CARD HTML + EVENTS
  // =========================
  function cardHTML(car){
  const coming = isComingSoon(car);
  const img = getImageUrl(car);

  const chips = coming ? [] : normalizeChips(car);
  const seatsLabel = (!coming && car.seats) ? `${car.seats} Seats` : null;
  const hasSeatsAlready = seatsLabel ? chips.some(c => String(c).toLowerCase() === seatsLabel.toLowerCase()) : false;
  const finalChips = coming ? [] : [...chips, ...(seatsLabel && !hasSeatsAlready ? [seatsLabel] : [])]
    .filter(Boolean).slice(0, 3);

  const checked = (!coming && compare.has(car.id)) ? "checked" : "";

  // “Disabled” feel
  const wrapClass = coming
    ? "bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm group relative flex flex-col h-full opacity-70"
    : "bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group relative flex flex-col h-full";

  const imgClass = coming
    ? "w-full h-full object-cover grayscale saturate-50"
    : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700";

  const badgeHtml = coming
    ? `<div class="absolute top-4 left-4 z-10 flex gap-2">
         <span class="bg-red-600/95 backdrop-blur text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
           Coming soon
         </span>
       </div>`
    : (car.badge ? `<div class="absolute top-4 left-4 z-10 flex gap-2">
          <span class="bg-zinc-900/90 backdrop-blur text-white px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
            ${car.badge}
          </span>
        </div>` : "");

  // ✨ TRIK: u coming soon necháme stejné sekce, ale dáme je "invisible", aby tlačítko sedělo stejně vysoko
  const hideButKeepSpace = coming ? "invisible" : "";

  return `
    <div class="${wrapClass}">
      <div class="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
        ${badgeHtml}
        ${img
          ? `<img src="${img}" alt="${car.name || ""}" class="${imgClass}">`
          : `<div class="w-full h-full flex items-center justify-center text-zinc-400 text-sm">No image</div>`
        }
      </div>

      <div class="px-4 pb-4 flex flex-col flex-1">
        <div class="flex-1">
          <div class="flex justify-between items-start mb-2">
            <div class="min-w-0">
              <h3 class="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                ${car.name || ""}
              </h3>

              <!-- Chips block (keeps height even for coming soon) -->
              <div class="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem] ${hideButKeepSpace}">
                ${finalChips.map(ch => `
                  <span class="text-xs text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">${ch}</span>
                `).join("")}
              </div>
            </div>

            <!-- Price block placeholder -->
            <div class="text-right shrink-0 pl-3 ${hideButKeepSpace}">
              <span class="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
              <div class="text-lg font-bold text-zinc-900">${moneyEUR(car.price_from)}</div>
            </div>
          </div>

          <!-- Deposit placeholder -->
          <div class="${hideButKeepSpace}">
            <hr class="border-zinc-100 my-4">
            <div class="flex items-center justify-between text-xs text-zinc-500 mb-4">
              <span>Deposit (50%)</span>
              <span class="font-medium text-green-600">${depositEUR(car.price_from)} due now</span>
            </div>
          </div>

          ${coming ? `
            <button type="button"
              class="w-full py-3 bg-red-600 text-white rounded-xl text-sm font-semibold cursor-default select-none"
              disabled>
              Coming soon
            </button>
          ` : `
            <button type="button"
              class="car-book w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
              data-id="${car.id}">
              Configure &amp; Book
            </button>
          `}
        </div>

        <!-- Compare row placeholder (keeps button alignment!) -->
        <label class="flex items-center justify-center gap-2 mt-4 select-none ${coming ? "invisible pointer-events-none" : "cursor-pointer group/compare"}">
          <input type="checkbox"
            class="car-compare accent-zinc-900 rounded-sm w-3 h-3"
            data-id="${car.id}"
            ${checked}>
          <span class="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
        </label>
      </div>
    </div>
  `;
}


  function bindCardEvents(){
    // book
    pager.querySelectorAll(".car-book").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const car = allCars.find(c => String(c.id) === String(id));
        if (!car || isComingSoon(car)) return;

        if (typeof window.openBooking === "function") {
          window.openBooking(car.name, car.price_from);
        } else {
          console.warn("window.openBooking() not found.");
        }
      });
    });

    // compare
    pager.querySelectorAll(".car-compare").forEach(chk => {
      chk.addEventListener("change", () => {
        const id = chk.dataset.id;
        const car = allCars.find(c => String(c.id) === String(id));
        if (!id || !car || isComingSoon(car)){
          chk.checked = false;
          compare.delete(id);
          persistCompare();
          setCompareBar();
          return;
        }

        if (chk.checked) compare.add(id);
        else compare.delete(id);

        persistCompare();
        setCompareBar();
      });
    });
  }

  function cleanupCompareAgainstData(){
    for (const id of [...compare]){
      const car = allCars.find(x => String(x.id) === String(id));
      if (!car || isComingSoon(car)) compare.delete(id);
    }
    persistCompare();
    setCompareBar();
  }

  // =========================
  // 8) RENDER (desktop pages of 6, mobile swipe by 1)
  // =========================
  function renderCars(){
    if (!pager) return;

    const visible = allCars.filter(passesFilter);

    // coming soon always at bottom
    const available = visible.filter(c => !isComingSoon(c));
    const coming = visible.filter(c => isComingSoon(c));

    const availableSorted = sortCars(available);

    // coming soon sort by sort_order then name
    const comingSorted = [...coming].sort((a,b) => {
      const ao = a.sort_order ?? 0, bo = b.sort_order ?? 0;
      if (ao !== bo) return ao - bo;
      return String(a.name ?? "").localeCompare(String(b.name ?? ""));
    });

    const ordered = [...availableSorted, ...comingSorted];

    if (countEl) countEl.textContent = `Showing ${ordered.length} cars`;

    if (!ordered.length){
      pager.innerHTML = "";
      controls.classList.add("hidden");
      dotsEl.innerHTML = "";
      pageCount = 1; currentPage = 0;
      if (emptyEl) emptyEl.classList.remove("hidden");
      return;
    }
    if (emptyEl) emptyEl.classList.add("hidden");

    const mobile = isMobile();
    const pages = mobile ? ordered.map(c => [c]) : chunk(ordered, DESKTOP_PAGE_SIZE);

    pageCount = pages.length;
    currentPage = 0;

    // controls visibility
    if (pageCount > 1){
      controls.classList.remove("hidden");
      buildDots(pageCount);
    } else {
      controls.classList.add("hidden");
      dotsEl.innerHTML = "";
    }

    // layout
    pager.className = mobile
      ? "flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-3"
      : "flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar";

    pager.innerHTML = pages.map((cars) => {
      if (mobile){
        // one car per slide + peek
        return `
          <div class="snap-start shrink-0" style="width: calc(100% - 64px);">
            ${cardHTML(cars[0])}
          </div>
        `;
      }

      // desktop page grid
      return `
        <div class="snap-start shrink-0 w-full">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${cars.map(cardHTML).join("")}
          </div>
        </div>
      `;
    }).join("");

    cleanupCompareAgainstData();
    bindCardEvents();

    updatePagerUI();
    scrollToPage(0, false);
  }

  // =========================
  // 9) LOAD DATA
  // =========================
  async function loadCars(){
    // IMPORTANT:
    // - If your RLS policy currently allows only active=true, coming soon rows won't be visible.
    // - This query loads all rows; visibility depends on your RLS policy.
    const { data, error } = await window.sb
      .from("cars")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error){
      console.error("Supabase loadCars error:", error);
      if (countEl) countEl.textContent = "Failed to load cars";
      pager.innerHTML = "";
      if (emptyEl) emptyEl.classList.remove("hidden");
      controls.classList.add("hidden");
      return;
    }

    allCars = Array.isArray(data) ? data : [];
    renderCars();
  }

  // =========================
  // 10) INIT
  // =========================
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".car-filter").forEach(btn => {
      btn.addEventListener("click", () => setFilter(btn.dataset.filter));
    });

    const sortSel = document.getElementById("carsSort");
    if (sortSel){
      sortSel.addEventListener("change", (e) => {
        activeSort = e.target.value || "popular";
        renderCars();
      });
    }

    setFilter("all");
    setCompareBar();
    loadCars();
  });
    


    // --- Logic for Modal / Booking SPA ---
              const overlay = document.getElementById('booking-overlay');
              const modalTitle = document.getElementById('modal-car-title');
              const modalTotal = document.getElementById('modal-total-price');
              const modalDeposit = document.getElementById('modal-deposit-price');
        
              let currentBasePrice = 0;
        
              function openBooking(carName, price) {
                  modalTitle.innerText = carName;
                  currentBasePrice = price;
                  updatePrices(price);
        
                  document.body.classList.add('modal-open');
                  overlay.classList.remove('closed');
                  overlay.classList.add('open');
              }
        
              function closeBooking() {
                  document.body.classList.remove('modal-open');
                  overlay.classList.remove('open');
                  overlay.classList.add('closed');
              }
        
              function updatePrices(total) {
                  modalTotal.innerText = '€' + total;
                  modalDeposit.innerText = '€' + (total / 2);
              }
        
              // Close modal on outside click
              overlay.addEventListener('click', (e) => {
                  if (e.target === overlay) closeBooking();
              });
        
              // --- Settings Drawer Logic ---
              function toggleSettings() {
                  const panel = document.getElementById('settings-panel');
                  if (panel.classList.contains('opacity-0')) {
                      panel.classList.remove('opacity-0', 'scale-90');
                  } else {
                      panel.classList.add('opacity-0', 'scale-90');
                  }
              }
        
              // --- Intersection Observer for Animations ---
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.style.opacity = '1';
                          entry.target.style.transform = 'translateY(0)';
                      }
                  });
              }, { threshold: 0.1 });
        
              // Apply animations to sections (excluding hero car which has custom anim)
              document.querySelectorAll('section:not(:first-of-type) > div').forEach((el) => {
                  el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                  el.style.opacity = '0';
                  el.style.transform = 'translateY(20px)';
                  observer.observe(el);
              });
  


    (() => {
  const tablist   = document.getElementById("heroTabs");
  const indicator = document.getElementById("heroTabIndicator");
  const tabs      = tablist ? Array.from(tablist.querySelectorAll('[role="tab"]')) : [];
  const panels    = Array.from(document.querySelectorAll('#heroServiceSwitcher [role="tabpanel"]'));
  if (!tablist || !indicator || !tabs.length || !panels.length) return;

  const heroCarDesktop = document.getElementById("heroCarDesktop");
  const heroCarMobile  = document.getElementById("heroCarMobile");

  [heroCarDesktop, heroCarMobile].filter(Boolean).forEach(img => {
    img.dataset.currentSrc = img.getAttribute("src") || "";
  });

  const ACTIVE_TAB = "text-zinc-900 font-semibold";
  const INACTIVE_TAB = "text-zinc-500 font-medium";

  function moveIndicatorToTab(tabEl) {
    const listRect = tablist.getBoundingClientRect();
    const tabRect  = tabEl.getBoundingClientRect();
    indicator.style.width = tabRect.width + "px";
    indicator.style.transform = `translateX(${tabRect.left - listRect.left}px)`;
  }

  let heroCarToken = 0;

  // ✅ FIXED: jeden token na jeden klik, update obou img
  function setHeroCar(src) {
  if (!src) return;
  
  const imgs = [heroCarDesktop, heroCarMobile].filter(Boolean);
  if (!imgs.length) return;
  
  // když už všechny mají stejné src, nic nedělej
  if (imgs.every(img => img.dataset.currentSrc === src)) return;
  
  const token = ++heroCarToken;
  
  // preload aby to nebylo prázdné / broken
  const pre = new Image();
  pre.onload = () => {
  if (token !== heroCarToken) return;
  
  imgs.forEach(img => {
  img.src = src;
  img.dataset.currentSrc = src;
  });
  };
  
  pre.onerror = () => {
  if (token !== heroCarToken) return;
  console.warn("Hero car failed to load:", src);
  };
  
  pre.src = src;
  }

  function setActive(key, focus = false) {
    tabs.forEach((t) => {
      const isActive = t.dataset.tab === key;
      t.setAttribute("aria-selected", isActive ? "true" : "false");

      t.classList.remove("text-zinc-900","font-semibold","text-zinc-500","font-medium");
      t.classList.add(...(isActive ? ACTIVE_TAB : INACTIVE_TAB).split(" "));

      if (isActive) {
        moveIndicatorToTab(t);
        if (focus) t.focus();
      }
    });

    panels.forEach((p) => p.classList.toggle("hidden", p.dataset.panel !== key));
  }

  // Click
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      setActive(t.dataset.tab);
      setHeroCar(t.dataset.img);
    });
  });

  // Keyboard
  tablist.addEventListener("keydown", (e) => {
    const currentIndex = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
    if (currentIndex < 0) return;

    let nextIndex = currentIndex;
    if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (e.key === "ArrowLeft")  nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;

    if (nextIndex !== currentIndex) {
      e.preventDefault();
      const nextTab = tabs[nextIndex];
      setActive(nextTab.dataset.tab, true);
      setHeroCar(nextTab.dataset.img);
    }
  });

  const onResize = () => {
    const active = tabs.find((t) => t.getAttribute("aria-selected") === "true") || tabs[0];
    moveIndicatorToTab(active);
  };
  window.addEventListener("resize", onResize, { passive: true });

  // Init
  requestAnimationFrame(() => {
    setActive("testdrive");
    setHeroCar(document.getElementById("heroTab-testdrive")?.dataset.img);
    onResize();
  });
})();
  


    (() => {
  const scroller = document.getElementById("journeyMobileScroller");
  const bar      = document.getElementById("journeyMobileProgress");
  const current  = document.getElementById("journeyMobileCurrent");
  const totalEl  = document.getElementById("journeyMobileTotal");

  if (!scroller || !bar) return;

  const cards = Array.from(scroller.querySelectorAll(".journey-mobile-card"));
  if (!cards.length) return;

  const total = cards.length;
  if (totalEl) totalEl.textContent = String(total).padStart(2, "0");

  function setIndex(i) {
    i = Math.max(0, Math.min(total - 1, i));
    const pct = ((i + 1) / total) * 100;

    bar.style.width = pct + "%";
    if (current) current.textContent = String(i + 1).padStart(2, "0");
  }

  // 1) Nejčistší: IntersectionObserver (karta "nejvíc ve viewportu" = aktivní)
  const io = new IntersectionObserver((entries) => {
    let best = null;
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
    }
    if (!best) return;

    const idx = cards.indexOf(best.target);
    if (idx !== -1) setIndex(idx);
  }, {
    root: scroller,
    threshold: [0.55, 0.65, 0.75, 0.85, 0.95]
  });

  cards.forEach((c) => io.observe(c));

  // 2) Fallback: po do-scrollování (kdyby někde IO blblo)
  let timer = null;
  scroller.addEventListener("scroll", () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      const center = scroller.scrollLeft + scroller.clientWidth / 2;

      let bestI = 0;
      let bestD = Infinity;
      cards.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cCenter - center);
        if (d < bestD) { bestD = d; bestI = i; }
      });

      setIndex(bestI);
    }, 80);
  }, { passive: true });

  // init (krok 1)
  requestAnimationFrame(() => setIndex(0));
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
      


<div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
</div>

<header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
<div className="flex pt-5 px-4 justify-center">
<div className="pointer-events-auto w-full max-w-[1240px] h-[64px] md:h-[72px] rounded-full border border-zinc-200/70 backdrop-blur-xl shadow-lg shadow-zinc-200/40 relative transition-all px-2 md:pl-6 md:pr-2 liquid-pill" id="pill-header-bg">

<div className="md:hidden h-full grid grid-cols-3 items-center">

<div className="flex items-center justify-start">
<a className="h-10 px-4 rounded-full bg-zinc-900 text-white text-sm font-semibold flex items-center justify-center shadow-md shadow-zinc-200 hover:bg-zinc-800 transition-colors" href="#cars">
              Book Now
            </a>
</div>

<div className="flex items-center justify-center">
<a className="flex items-center justify-center" href="#">
<img alt="Test Drive" className="h-8 w-auto block shrink-0 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abdd6e5e-c0db-4551-a9b9-0fb69a9afdc9_3840w.png" style={{}}/>
</a>
</div>

<div className="flex items-center justify-end gap-2">
<a aria-label="Contact via WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-full border transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-zinc-50 border-zinc-100 text-zinc-600 hover:text-green-600 hover:border-green-200 hover:bg-green-50" href="https://wa.me/123">
<iconify-icon icon="logos:whatsapp-icon" width="18"></iconify-icon>
</a>
<button aria-label="Open menu" className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-200 border-zinc-200 hover:bg-zinc-50" onclick="toggleMobileMenu()" type="button">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:flex h-full items-center justify-between">

<a className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 rounded-full py-2" href="#">
<img alt="Test Drive" className="h-9 w-auto block shrink-0 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95442532-21f7-46ca-85a5-ae536c60da1e_320w.png"/>
</a>

<nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
<a className="nav-link text-sm font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-zinc-200 rounded-md text-zinc-600 hover:text-zinc-900" href="#cars">Cars</a>
<a className="nav-link text-sm font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-zinc-200 rounded-md text-zinc-600 hover:text-zinc-900" href="#imola">Imola
              Track</a>
<a className="nav-link text-sm font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-zinc-200 rounded-md text-zinc-600 hover:text-zinc-900" href="#local">Guide</a>
<a className="nav-link text-sm font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-zinc-200 rounded-md text-zinc-600 hover:text-zinc-900" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-2 md:gap-3">
<button aria-label="Change Language" className="hidden md:flex items-center gap-2 h-10 px-4 rounded-full border border-transparent text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200 hover:border-zinc-200 hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900">
<iconify-icon className="text-base" icon="solar:globe-linear"></iconify-icon>
<span>EN</span>
</button>
<a aria-label="Contact via WhatsApp" className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-zinc-50 border-zinc-100 text-zinc-600 hover:text-green-600 hover:border-green-200 hover:bg-green-50" href="https://wa.me/123">
<iconify-icon className="" icon="logos:whatsapp-icon" width="18"></iconify-icon>
</a>
<a className="md:h-11 md:px-7 hover:-translate-y-0.5 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 hover:bg-zinc-800 shadow-zinc-200 text-sm font-semibold text-white bg-zinc-900 h-10 rounded-full pr-5 pl-5 shadow-md" href="#cars">
<span className="">Book Now</span>
</a>
<button aria-label="Open menu" className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors ml-1 focus:outline-none focus:ring-2 focus:ring-zinc-200 border-zinc-200 hover:bg-zinc-50" onclick="toggleMobileMenu()" type="button">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<div className="hidden lg:hidden fixed inset-0 z-[60] opacity-0 pointer-events-none ease-out" id="mobileMenu">

<button aria-label="Close menu" className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 ease-out" id="mobileMenuBackdrop" onclick="toggleMobileMenu(false)" type="button"></button>

<div className="absolute top-0 right-0 z-[61] h-[100dvh] w-[min(420px,100%)] rounded-none sm:rounded-l-3xl bg-white/90 backdrop-blur-xl border-l border-zinc-200 shadow-2xl p-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] opacity-0 translate-x-6 scale-[0.985] transition-[transform,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform" id="mobileMenuPanel">
<div className="flex items-center justify-between px-2 pb-2">
<span className="text-sm font-semibold text-zinc-900">Menu</span>
<button aria-label="Close menu" className="w-10 h-10 rounded-full border border-zinc-200 hover:bg-zinc-50" onclick="toggleMobileMenu(false)" type="button">✕</button>
</div>
<nav className="flex flex-col gap-1 p-2">
<a className="px-4 py-3 rounded-xl hover:bg-zinc-50 text-sm font-medium text-zinc-900" href="#cars">Cars</a>
<a className="px-4 py-3 rounded-xl hover:bg-zinc-50 text-sm font-medium text-zinc-900" href="#imola">Imola
          Track</a>
<a className="px-4 py-3 rounded-xl hover:bg-zinc-50 text-sm font-medium text-zinc-900" href="#local">Guide</a>
<a className="px-4 py-3 rounded-xl hover:bg-zinc-50 text-sm font-medium text-zinc-900" href="#faq">FAQ</a>
<div className="mt-2 pt-3 border-t border-zinc-200 flex gap-2">
<a className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-sm font-semibold text-center" href="https://wa.me/123">
            WhatsApp
          </a>
<a className="flex-1 px-4 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-sm font-semibold text-center" href="#cars">
            Book Now
          </a>
</div>
</nav>
</div>
</div>


<main className="">


<section className="min-h-[100dvh] flex overflow-hidden w-full relative items-center bg-zinc-50" style={{}}>

<div className="absolute inset-0 z-0">
<img alt="Minimal Studio Architecture" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d12c8706-4f3d-4d31-839b-8e8641beabdc_3840w.png" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-r to-transparent from-white via-white/80"></div>
<div className="bg-gradient-to-t via-transparent to-transparent from-zinc-50 opacity-80 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="hidden md:block z-10 md:w-[65%] lg:w-[60%] pointer-events-none animate-enter w-[90%] max-w-[1400px] absolute right-0 bottom-0 translate-x-12 lg:translate-x-0 md:-translate-y-10 lg:-translate-y-6">
<img alt="Ferrari F8 Tributo Side View" className="w-full h-auto object-contain drop-shadow-2xl select-none" data-current-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d86a095-c367-4bae-bd44-c2f354f5b0df_1600w.png" draggable="false" id="heroCarDesktop" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d86a095-c367-4bae-bd44-c2f354f5b0df_1600w.png"/>
</div>

<div className="flex flex-col w-full h-full max-w-[1280px] z-20 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative justify-center">
<div className="animate-enter max-w-xl space-y-10" style={{animationDelay: '100ms'}}>

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur border shadow-sm bg-white/80 border-zinc-200/60" style={{}}>
<span className="flex text-amber-400" style={{}}>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</span>
<span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-600" style={{}}>
                TrustPilot 4.9/5 • 500+ Reviews
              </span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-6xl font-semibold text-zinc-900 tracking-tighter">Drive.
            <br/> <span className="text-zinc-400">Your Dream.</span></h1>

<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-500 max-w-md max-h-fit">
            Experience the raw power of Italian engineering where it was born.
            Transparent pricing, professional guides, unforgettable roads.
          </p>

<div className="md:hidden w-full mt-0 mb-0 pr-1 pl-1">
<div className="relative w-full aspect-[16/8] overflow-visible pointer-events-none">
<img alt="Ferrari" className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl scale-[1.7] origin-center" data-current-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d86a095-c367-4bae-bd44-c2f354f5b0df_1600w.png" id="heroCarMobile" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d86a095-c367-4bae-bd44-c2f354f5b0df_1600w.png"/>
</div>
</div>

<div className="space-y-8">

<div className="space-y-6" id="heroServiceSwitcher">

<div aria-label="Choose experience" className="relative inline-flex w-full max-w-[520px] bg-zinc-100/80 border border-zinc-200/40 rounded-full p-0.5 overflow-hidden" id="heroTabs" role="tablist">
<span aria-hidden="true" className="absolute top-0.5 bottom-0.5 left-0.5 rounded-full bg-white shadow-sm transition-[transform,width] duration-300 ease-[cubic-bezier(.22,1,.36,1)]" id="heroTabIndicator" style={{width: '111.38px', transform: 'translateX(225.313px)'}}></span>
<button aria-selected="false" className="hero-tab relative z-10 flex-1 px-4 py-2 text-xs rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d86a095-c367-4bae-bd44-c2f354f5b0df_1600w.png" data-tab="testdrive" id="heroTab-testdrive" role="tab" type="button">
    Test Drive
  </button>
<button aria-selected="false" className="hero-tab z-10 flex-1 transition-colors hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 text-xs rounded-full pt-2 pr-4 pb-2 pl-4 relative" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/942cc8b1-85ae-4f90-b9ae-b12ee2c038fe_1600w.png?w=800&amp;q=80" data-tab="imola" id="heroTab-imola" role="tab" type="button">
    Imola Track
  </button>
<button aria-selected="true" className="hero-tab flex-1 transition-colors hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 text-xs z-10 rounded-full pt-2 pr-4 pb-2 pl-4 relative" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2f6442c-8982-4e83-9881-064b53e6b25d_1600w.png?w=800&amp;q=80" data-tab="groups" id="heroTab-groups" role="tab" type="button">
    Groups
  </button>
</div>

<div className="relative">
<div aria-labelledby="heroTab-testdrive" className="space-y-2" data-panel="testdrive" id="heroPanel-testdrive" role="tabpanel">
<p className="text-sm font-semibold text-zinc-900 text-left">Test Drive in Maranello</p>
<ul className="text-xs text-zinc-500 space-y-1">
<li className="">• Choose your supercar</li>
<li className="">• Curated routes with the best views around Maranello</li>
<li className="">• Pro co-pilot guidance for a safe experience</li>
</ul>
</div>
<div aria-labelledby="heroTab-imola" className="space-y-2" data-panel="imola" id="heroPanel-imola" role="tabpanel">
<p className="text-sm font-semibold text-zinc-900">Imola Track Experience</p>
<ul className="text-xs text-zinc-500 space-y-1">
<li>• Track-focused driving session</li>
<li>• Briefing + safety-first coaching</li>
<li>• Limited slots (premium option)</li>
</ul>
</div>
<div aria-labelledby="heroTab-groups" className="space-y-2" data-panel="groups" id="heroPanel-groups" role="tabpanel">
<p className="text-sm font-semibold text-zinc-900">Groups &amp; Agencies</p>
<ul className="text-xs text-zinc-500 space-y-1">
<li>• Corporate events + tour operators</li>
<li>• Multi-car scheduling &amp; dedicated support</li>
<li>• Optional extras: photos / video / museum</li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
<a className="px-8 py-4 rounded-2xl text-sm font-semibold transition-all hover:scale-[1.02] shadow-xl bg-red-600 text-white hover:bg-red-700 shadow-red-200/50" href="#cars" style={{}}>
                Select Your Car
              </a>
<span className="text-xs font-medium px-2 flex items-center gap-2 text-zinc-400" style={{}}>
<iconify-icon className="text-base" icon="solar:card-check-linear"></iconify-icon>
                  Pay 50% now, 50% on the day.
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-zinc-50 pt-121 pb-0 relative" id="journey-section">


<div className="max-w-[1280px] mx-auto px-6 relative z-10" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>

<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
<div className="max-w-xl">
<span className="inline-flex items-center gap-2 mb-3">
<span className="h-px w-8 bg-red-600"></span>
<span className="text-xs font-bold tracking-widest uppercase text-red-600">The Journey</span>
</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
              How it Works
            </h2>
<p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md">
              From configuration to the finish line, we’ve streamlined the experience so you can focus on the drive.
            </p>
</div>
<div className="hidden md:flex gap-4">
<button className="group flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-red-600 transition-colors" onclick="document.getElementById('cars').scrollIntoView({behavior: 'smooth'})">
<span>Book your slot</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

<div className="lg:col-span-6 flex flex-col pt-4">

<div className="relative flex justify-between items-center mb-28 mx-4">

<div className="pointer-events-none absolute top-6 left-0 w-full h-px bg-zinc-200"></div>

<div className="pointer-events-none absolute top-6 left-0 h-px bg-red-600 transition-all duration-500 ease-out" id="journey-progress" style={{width: '0%'}}></div>

<button aria-label="Step 1 Configure" className="journey-step-btn group relative focus:outline-none" onclick="updateJourney(0)" type="button">
<div className="step-indicator w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 hover:border-red-600 hover:text-red-600 z-20 relative bg-[#FAFAFA] border-2 border-red-600 text-red-600 shadow-sm ring-4 ring-red-600/10">1</div>
<span className="step-label absolute top-16 left-1/2 -translate-x-1/2 text-[10px] tracking-widest transition-colors duration-300 whitespace-nowrap text-red-600 font-bold uppercase">
                    Configure
                  </span>
</button>

<button aria-label="Step 2 Secure Deposit" className="journey-step-btn group relative focus:outline-none" onclick="updateJourney(1)" type="button">
<div className="step-indicator flex transition-all duration-300 hover:border-red-600 hover:text-red-600 text-base font-semibold w-12 h-12 z-20 rounded-full relative items-center justify-center bg-[#FAFAFA] border border-zinc-200 text-zinc-400 shadow-sm ring-4 ring-[#FAFAFA]">2</div>
<span className="step-label absolute top-16 left-1/2 -translate-x-1/2 text-[10px] tracking-widest transition-colors duration-300 whitespace-nowrap text-zinc-400 font-semibold">Deposit</span>
</button>

<button aria-label="Step 3 Briefing" className="journey-step-btn group relative focus:outline-none" onclick="updateJourney(2)" type="button">
<div className="step-indicator w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 hover:border-red-600 hover:text-red-600 z-20 relative bg-[#FAFAFA] border border-zinc-200 text-zinc-400 shadow-sm ring-4 ring-[#FAFAFA]">3</div>
<span className="step-label absolute top-16 left-1/2 -translate-x-1/2 text-[10px] tracking-widest transition-colors duration-300 whitespace-nowrap text-zinc-400 font-semibold">Briefing</span>
</button>

<button aria-label="Step 4 Drive" className="journey-step-btn group relative focus:outline-none" onclick="updateJourney(3)" type="button">
<div className="step-indicator w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 hover:border-red-600 hover:text-red-600 z-20 relative bg-[#FAFAFA] border border-zinc-200 text-zinc-400 shadow-sm ring-4 ring-[#FAFAFA]">4</div>
<span className="step-label absolute top-16 left-1/2 -translate-x-1/2 text-[10px] tracking-widest transition-colors duration-300 whitespace-nowrap text-zinc-400 font-semibold">Drive</span>
</button>
</div>


<div className="relative min-h-[360px] overflow-hidden">

<div className="journey-content-panel absolute inset-0 w-full block transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform translate-x-0 opacity-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
                  Simple Configurator
                </div>
<h3 className="text-3xl font-semibold mb-4 text-zinc-900 tracking-tight">Configure your drive</h3>
<p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Select your dream car from our fleet of 20+ latest models. Choose your duration (10min to 2h) and add
                  optional video recording.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Transparent pricing per model, no hidden fees.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Passenger options available for family trips.</span>
</li>
</ul>
<div className="flex items-center gap-4">
<a className="hover:bg-zinc-800 hover:-translate-y-0.5 transition-all shadow-zinc-200 text-sm font-semibold text-white bg-zinc-900 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#cars">
                    Check Availability
                  </a>
<span className="text-xs text-zinc-400 font-medium">Takes ~2 minutes</span>
</div>
</div>

<div className="journey-content-panel absolute inset-0 w-full hidden transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform translate-x-0 opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                  Secure Booking
                </div>
<h3 className="text-3xl font-semibold mb-4 text-zinc-900 tracking-tight">Secure 50% Deposit</h3>
<p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Lock in your specific time slot with just a 50% deposit online. The remaining balance is paid on
                  arrival at our HQ.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Fully refundable up to 24h before drive.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Instant confirmation via email &amp; WhatsApp.</span>
</li>
</ul>
<div className="flex items-center gap-4">
<a className="px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-zinc-200" href="#cars">
                    Book Your Slot
                  </a>
</div>
</div>

<div className="journey-content-panel absolute inset-0 w-full hidden transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform translate-x-0 opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:user-speak-linear"></iconify-icon>
                  Pro Instructors
                </div>
<h3 className="text-3xl font-semibold mb-4 text-zinc-900 tracking-tight">Meet &amp; Briefing</h3>
<p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Arrive at our HQ near the Museo Ferrari. Meet your professional instructor for a 10-minute briefing on
                  the car's
                  controls and the route.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>English, Italian, and French speaking guides.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Learn the paddle shifters and driving modes.</span>
</li>
</ul>
<div className="flex items-center gap-4">
<a className="px-6 py-3 rounded-full border border-zinc-200 text-zinc-900 text-sm font-semibold hover:bg-zinc-50 hover:-translate-y-0.5 transition-all" href="#local">
                    View Location
                  </a>
</div>
</div>

<div className="journey-content-panel absolute inset-0 w-full hidden transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform translate-x-0 opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:flag-bold-duotone"></iconify-icon>
                  Start Your Engine
                </div>
<h3 className="text-3xl font-semibold mb-4 text-zinc-900 tracking-tight">The Drive</h3>
<p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Hit the start button and feel the V8 roar. Drive through the historic streets of Maranello and the
                  winding hills of Emilia-Romagna.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Instructor co-pilot for safety and tips.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-red-600 text-lg mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Optional 4K internal/external video recording.</span>
</li>
</ul>
<div className="flex items-center gap-4">
<a className="px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-zinc-200" href="#cars">
                    Select Car
                  </a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 h-full min-h-[500px] relative">

<svg className="absolute -top-10 -right-10 w-full h-full text-zinc-200/50 pointer-events-none -z-10" fill="none" viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<path d="M50 350C50 350 100 50 350 50" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="1.5">
</path>
</svg>
<div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-200 border-4 border-white relative group">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60"></div>
<img alt="Process Step Image" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" id="journey-main-image" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute bottom-8 left-8 z-20">
<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg">
<div className="flex items-center gap-3 text-white">
<div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
<iconify-icon className="ml-1 text-white" icon="solar:play-bold"></iconify-icon>
</div>
<div>
<p className="text-[10px] font-bold uppercase tracking-wider opacity-90">Experience</p>
<p className="text-sm font-semibold">The Maranello Dream</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:hidden space-y-8">

<div className="flex items-center gap-2 mb-6 px-1">
<span className="text-xs font-bold text-red-600" id="journeyMobileCurrent">01</span>
<div className="h-0.5 flex-1 bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full bg-red-600 transition-[width] duration-300 ease-out" id="journeyMobileProgress" style={{width: '25%'}}></div>
</div>
<span className="text-xs font-medium text-zinc-300" id="journeyMobileTotal">04</span>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 no-scrollbar" id="journeyMobileScroller">

<div className="journey-mobile-card snap-center shrink-0 w-[85vw] bg-white rounded-2xl border border-zinc-100 shadow-xl shadow-zinc-200/50 overflow-hidden">
<div className="aspect-[4/3] bg-zinc-100 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold shadow-md text-red-600">
                  1</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Configure</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Choose car, duration, and extras. Transparent
                  pricing.</p>
<a className="w-full py-3 rounded-xl border border-zinc-200 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-zinc-50" href="#cars">
                  Start Booking
                </a>
</div>
</div>

<div className="journey-mobile-card snap-center shrink-0 w-[85vw] bg-white rounded-2xl border border-zinc-100 shadow-xl shadow-zinc-200/50 overflow-hidden">
<div className="aspect-[4/3] bg-zinc-100 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold shadow-md">
                  2</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Secure Deposit</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Pay only 50% online to lock your slot securely.
                </p>
<a className="w-full py-3 rounded-xl border border-zinc-200 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-zinc-50" href="#cars">
                  Book Now
                </a>
</div>
</div>

<div className="journey-mobile-card snap-center shrink-0 w-[85vw] bg-white rounded-2xl border border-zinc-100 shadow-xl shadow-zinc-200/50 overflow-hidden">
<div className="aspect-[4/3] bg-zinc-100 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold shadow-md">
                  3</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Briefing</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Briefing with pro instructor. Meet at Museo
                  Ferrari.</p>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  Maranello HQ
                </div>
</div>
</div>

<div className="journey-mobile-card snap-center shrink-0 w-[85vw] bg-white rounded-2xl border border-zinc-100 shadow-xl shadow-zinc-200/50 overflow-hidden">
<div className="aspect-[4/3] bg-zinc-100 relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold shadow-md">
                  4</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Drive</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Experience the legend. Video recording available.
                </p>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
<iconify-icon icon="solar:flag-bold"></iconify-icon>
                  Ready to go
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 pt-10 pb-24" id="cars">
<div className="max-w-[1280px] mx-auto px-6" style={{transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)', opacity: '1', transform: 'translateY(0px)'}}>

<div className="z-30 mb-6 -mx-6 px-6 py-4 glass-panel md:rounded-2xl md:mx-0 border-y md:border border-zinc-200/50 flex flex-col md:flex-row justify-between items-center gap-4">

<div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
<button className="car-filter whitespace-nowrap px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-medium shadow-md" data-filter="all" type="button">
          All Cars
        </button>
<button className="car-filter whitespace-nowrap px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-lg text-xs font-medium hover:border-zinc-300" data-filter="2" type="button">
          2 Seats
        </button>
<button className="car-filter whitespace-nowrap px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-lg text-xs font-medium hover:border-zinc-300" data-filter="4" type="button">
          4 Seats
        </button>
<button className="car-filter whitespace-nowrap px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-lg text-xs font-medium hover:border-zinc-300" data-filter="convertible" type="button">
          Convertible
        </button>
</div>

<div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
<p className="text-xs text-zinc-500" id="carsCount">Showing 7 cars</p>
<div className="relative">
<select className="pl-3 pr-8 py-2 bg-transparent text-xs font-medium text-zinc-600 border border-zinc-200/60 rounded-lg focus:ring-0 focus:outline-none cursor-pointer" id="carsSort">
<option value="popular">Sort by: Popular</option>
<option value="price_asc">Price: Low to High</option>
<option value="price_desc">Price: High to Low</option>
<option value="name_asc">Name: A → Z</option>
</select>
</div>
</div>
</div>

<div className="mb-4 flex items-center justify-between gap-3" id="carsPagerControls">
<div className="flex items-center gap-2">
<button aria-label="Previous" className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center transition disabled:opacity-40" disabled="" id="carsPrev" type="button">
          ‹
        </button>
<button aria-label="Next" className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center transition disabled:opacity-40" id="carsNext" type="button">
          ›
        </button>
<div className="text-xs text-zinc-500 ml-2">
<span id="carsPageNow">1</span> / <span id="carsPageTotal">7</span>
</div>
</div>
<div className="flex items-center gap-2" id="carsDots">
<button className="w-2.5 h-2.5 rounded-full border border-zinc-300 transition" type="button"></button><button className="w-2.5 h-2.5 rounded-full border border-zinc-300 transition" type="button"></button><button className="w-2.5 h-2.5 rounded-full border border-zinc-300 transition" type="button"></button><button className="w-2.5 h-2.5 rounded-full border border-zinc-300 transition" type="button"></button><button className="w-2.5 h-2.5 rounded-full border border-zinc-300 transition" type="button"></button><button className="w-2.5 h-2.5 rounded-full border border-zinc-300 transition" type="button"></button><button className="w-2.5 h-2.5 rounded-full border border-zinc-300 transition" type="button"></button>
</div>
</div>

<div className="relative" id="carsPager">
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-3" id="carsPages" style={{WebkitOverflowScrolling: 'touch'}}>
<div className="snap-start shrink-0" style={{width: 'calc(100% - 64px)'}}>
<div className="bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group relative flex flex-col h-full">
<div className="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
<img alt="McLaren 720s Performance
" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://cfebfvyafsrkxmpnpmce.supabase.co/storage/v1/object/public/Assets/cars/Mclaren_720S_02.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-1">
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div className="min-w-0">
<h3 className="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                          McLaren 720s Performance

                        </h3>

<div className="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem]">
<span className="text-xs text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">2 Seats</span>
</div>
</div>

<div className="text-right shrink-0 pl-3">
<span className="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
<div className="text-lg font-bold text-zinc-900">€190</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
<span>Deposit (50%)</span>
<span className="font-medium text-green-600">€95 due now</span>
</div>
</div>
<button className="car-book w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2" data-id="bab13efb-7c04-4b11-8ef8-0bd631c4acbf" type="button">
              Configure &amp; Book
            </button>
</div>

<label className="flex items-center justify-center gap-2 mt-4 select-none cursor-pointer group/compare">
<input className="car-compare accent-zinc-900 w-3 h-3 rounded-sm" data-id="bab13efb-7c04-4b11-8ef8-0bd631c4acbf" type="checkbox"/>
<span className="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
</label>
</div>
</div>
</div>
<div className="snap-start shrink-0" style={{width: 'calc(100% - 64px)'}}>
<div className="bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group relative flex flex-col h-full">
<div className="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
<img alt="Ferrari Roma Spider" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://cfebfvyafsrkxmpnpmce.supabase.co/storage/v1/object/public/Assets/cars/Ferrari_Roma_01.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-1">
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div className="min-w-0">
<h3 className="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                          Ferrari Roma Spider
                        </h3>

<div className="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem]">
<span className="text-xs text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">2 Seats</span>
</div>
</div>

<div className="text-right shrink-0 pl-3">
<span className="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
<div className="text-lg font-bold text-zinc-900">€170</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
<span>Deposit (50%)</span>
<span className="font-medium text-green-600">€85 due now</span>
</div>
</div>
<button className="car-book w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2" data-id="9f7dabe2-9e48-48ab-bea9-51ad2170fdaf" type="button">
              Configure &amp; Book
            </button>
</div>

<label className="flex items-center justify-center gap-2 mt-4 select-none cursor-pointer group/compare">
<input className="car-compare accent-zinc-900 rounded-sm w-3 h-3" data-id="9f7dabe2-9e48-48ab-bea9-51ad2170fdaf" type="checkbox"/>
<span className="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
</label>
</div>
</div>
</div>
<div className="snap-start shrink-0" style={{width: 'calc(100% - 64px)'}}>
<div className="bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group relative flex flex-col h-full">
<div className="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
<div className="absolute top-4 left-4 z-10 flex gap-2">
<span className="bg-zinc-900/90 backdrop-blur text-white px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
            Best Seller
          </span>
</div>
<img alt="Ferrari Portofino M
" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://cfebfvyafsrkxmpnpmce.supabase.co/storage/v1/object/public/Assets/cars/Ferrari_portofino_M_01.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-1">
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div className="min-w-0">
<h3 className="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                          Ferrari Portofino M

                        </h3>

<div className="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem]">
<span className="text-xs text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">4 Seats</span>
</div>
</div>

<div className="text-right shrink-0 pl-3">
<span className="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
<div className="text-lg font-bold text-zinc-900">€140</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
<span>Deposit (50%)</span>
<span className="font-medium text-green-600">€70 due now</span>
</div>
</div>
<button className="car-book w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2" data-id="a3c23c87-dbd7-4dbc-b36e-3bbb39e236b4" type="button">
              Configure &amp; Book
            </button>
</div>

<label className="flex items-center justify-center gap-2 mt-4 select-none cursor-pointer group/compare">
<input className="car-compare accent-zinc-900 rounded-sm w-3 h-3" data-id="a3c23c87-dbd7-4dbc-b36e-3bbb39e236b4" type="checkbox"/>
<span className="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
</label>
</div>
</div>
</div>
<div className="snap-start shrink-0" style={{width: 'calc(100% - 64px)'}}>
<div className="bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group relative flex flex-col h-full">
<div className="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
<img alt="Ferrari Portofino" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://cfebfvyafsrkxmpnpmce.supabase.co/storage/v1/object/public/Assets/cars/Ferrari_portofino_01.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-1">
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div className="min-w-0">
<h3 className="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                          Ferrari Portofino
                        </h3>

<div className="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem]">
<span className="text-xs text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">4 Seats</span>
</div>
</div>

<div className="text-right shrink-0 pl-3">
<span className="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
<div className="text-lg font-bold text-zinc-900">€120</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
<span>Deposit (50%)</span>
<span className="font-medium text-green-600">€60 due now</span>
</div>
</div>
<button className="car-book w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2" data-id="c3c9b49b-ebed-4778-9b22-47204555a50d" type="button">
              Configure &amp; Book
            </button>
</div>

<label className="flex items-center justify-center gap-2 mt-4 select-none cursor-pointer group/compare">
<input className="car-compare accent-zinc-900 rounded-sm w-3 h-3" data-id="c3c9b49b-ebed-4778-9b22-47204555a50d" type="checkbox"/>
<span className="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
</label>
</div>
</div>
</div>
<div className="snap-start shrink-0" style={{width: 'calc(100% - 64px)'}}>
<div className="bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group relative flex flex-col h-full">
<div className="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
<img alt="Lamborghini Huracan Performante Spyder
" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://cfebfvyafsrkxmpnpmce.supabase.co/storage/v1/object/public/Assets/cars/Lamborghini_huracan_01.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-1">
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div className="min-w-0">
<h3 className="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                          Lamborghini Huracan Performante Spyder

                        </h3>

<div className="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem]">
<span className="text-xs text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">2 Seats</span>
</div>
</div>

<div className="text-right shrink-0 pl-3">
<span className="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
<div className="text-lg font-bold text-zinc-900">€180</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
<span>Deposit (50%)</span>
<span className="font-medium text-green-600">€90 due now</span>
</div>
</div>
<button className="car-book w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2" data-id="ca535afd-155a-43cc-8a74-7fc818f1302f" type="button">
              Configure &amp; Book
            </button>
</div>

<label className="flex items-center justify-center gap-2 mt-4 select-none cursor-pointer group/compare">
<input className="car-compare accent-zinc-900 rounded-sm w-3 h-3" data-id="ca535afd-155a-43cc-8a74-7fc818f1302f" type="checkbox"/>
<span className="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
</label>
</div>
</div>
</div>
<div className="snap-start shrink-0" style={{width: 'calc(100% - 64px)'}}>
<div className="bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm group relative flex flex-col h-full opacity-70">
<div className="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
<div className="absolute top-4 left-4 z-10 flex gap-2">
<span className="bg-red-600/95 backdrop-blur text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
           Coming soon
         </span>
</div>
<img alt="Ferrari SF90" className="w-full h-full object-cover grayscale saturate-50" src="https://cfebfvyafsrkxmpnpmce.supabase.co/storage/v1/object/public/Assets/cars/ferrari_sf90_01.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-1">
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div className="min-w-0">
<h3 className="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                          Ferrari SF90
                        </h3>

<div className="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem] invisible">
</div>
</div>

<div className="text-right shrink-0 pl-3 invisible">
<span className="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
<div className="text-lg font-bold text-zinc-900">€220</div>
</div>
</div>

<div className="invisible">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
<span>Deposit (50%)</span>
<span className="font-medium text-green-600">€110 due now</span>
</div>
</div>
<button className="w-full py-3 bg-red-600 text-white rounded-xl text-sm font-semibold cursor-default select-none" disabled="" type="button">
              Coming soon
            </button>
</div>

<label className="flex items-center justify-center gap-2 mt-4 select-none invisible pointer-events-none">
<input className="car-compare accent-zinc-900 rounded-sm w-3 h-3" data-id="82d4bf55-6420-43f5-944d-b94cfeca8aab" type="checkbox"/>
<span className="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
</label>
</div>
</div>
</div>
<div className="snap-start shrink-0" style={{width: 'calc(100% - 64px)'}}>
<div className="bg-white rounded-[2rem] p-2 border border-zinc-100 shadow-sm group relative flex flex-col h-full opacity-70">
<div className="aspect-[4/3] rounded-[1.5rem] bg-zinc-100 overflow-hidden relative mb-4">
<div className="absolute top-4 left-4 z-10 flex gap-2">
<span className="bg-red-600/95 backdrop-blur text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
           Coming soon
         </span>
</div>
<img alt="Lamborghini Aventador SVJ" className="w-full h-full object-cover grayscale saturate-50" src="https://cfebfvyafsrkxmpnpmce.supabase.co/storage/v1/object/public/Assets/cars/Lamborghini_aventador_SVJ_01.jpg"/>
</div>
<div className="px-4 pb-4 flex flex-col flex-1">
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div className="min-w-0">
<h3 className="text-lg font-semibold tracking-tight leading-snug h-[3.2rem] overflow-hidden">
                          Lamborghini Aventador SVJ
                        </h3>

<div className="flex flex-wrap items-center gap-2 mt-2 min-h-[1.6rem] invisible">
</div>
</div>

<div className="text-right shrink-0 pl-3 invisible">
<span className="text-[10px] text-zinc-400 uppercase tracking-wide">From</span>
<div className="text-lg font-bold text-zinc-900">€230</div>
</div>
</div>

<div className="invisible">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
<span>Deposit (50%)</span>
<span className="font-medium text-green-600">€115 due now</span>
</div>
</div>
<button className="w-full py-3 bg-red-600 text-white rounded-xl text-sm font-semibold cursor-default select-none" disabled="" type="button">
              Coming soon
            </button>
</div>

<label className="flex items-center justify-center gap-2 mt-4 select-none invisible pointer-events-none">
<input className="car-compare accent-zinc-900 rounded-sm w-3 h-3" data-id="f61d03e9-4351-43be-8387-78e77501ac38" type="checkbox"/>
<span className="text-[10px] text-zinc-400 group-hover/compare:text-zinc-600">
            Add to Compare
          </span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 text-center" id="carsEmpty">
<p className="text-sm text-zinc-500">No cars found.</p>
</div>
</div>
</section>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] hidden w-[min(720px,calc(100%-24px))]" id="compareBar">
<div className="bg-white/90 backdrop-blur border border-zinc-200 shadow-xl rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
<div className="text-sm font-medium text-zinc-700">
          Selected: <span className="font-semibold text-zinc-900" id="compareCount">0</span>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors" id="compareOpen">Compare</button>
<button className="px-4 py-2 rounded-xl border border-zinc-200 text-sm font-semibold hover:bg-zinc-50 transition-colors" id="compareClear">
        Clear
      </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="compareOverlay">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" id="compareBackdrop"></div>
<div className="absolute left-1/2 top-1/2 w-[min(980px,calc(100%-24px))] -translate-x-1/2 -translate-y-1/2">
<div className="bg-white rounded-3xl border border-zinc-200 shadow-2xl overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-zinc-900">Compare cars</p>
<p className="text-xs text-zinc-500">Pick cars using “Add to Compare”</p>
</div>
<button aria-label="Close compare" className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors" id="compareClose">
          ✕
        </button>
</div>
<div className="p-5">
<div className="hidden text-sm text-zinc-500 py-10 text-center" id="compareEmptyState">
              Select at least 1 car to compare.
            </div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="compareList"></div>
</div>
</div>
</div>
</div>




<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="imola">

<svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q50,20 100,80" fill="none" stroke="white" strokeWidth="1"></path>
</svg>
<div className="max-w-[1280px] mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="">
<div className="inline-block px-3 py-1 bg-red-600/20 text-red-500 border border-red-600/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Pro Experience
          </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Imola Racetrack
          </h2>
<p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
            Take the Ferrari 488 Challenge to the limit on a professional F1
            circuit. Includes telemetry, briefing, and 3 full laps.
          </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">Full Telemetry</h4>
<p className="text-xs text-zinc-500">
                  Analyze your braking and acceleration points.
                </p>
</div>
</div>
</div>
<div className="flex gap-4">
<a className="px-6 py-3 bg-white text-zinc-900 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors" href="https://wa.me/123">
              Book via WhatsApp
            </a>
<button className="px-6 py-3 border border-zinc-700 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">
                        View Tech Specs
                      </button>
</div>
</div>

<div className="bg-zinc-800/50 backdrop-blur rounded-[2rem] p-8 border border-zinc-700">
<div className="flex justify-between items-end mb-8">
<div>
<span className="text-sm text-zinc-400 block mb-1">
                          Total Package
                        </span>
<span className="text-4xl font-bold">€750</span>
</div>
<span className="text-xs bg-zinc-700 px-2 py-1 rounded text-zinc-300">
                        All Inclusive
                      </span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
              3 Laps Imola
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
              Video Included
            </li>
</ul>
<p className="text-[10px] text-zinc-500 text-center">
            Requires international racing license or equivalent experience.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="local">
<div className="max-w-[1280px] mx-auto px-6" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
              Complete Your Day
            </h2>
<p className="text-sm text-zinc-500">
              Curated recommendations by our local team.
            </p>
</div>
<a className="text-sm font-medium text-zinc-900 hover:text-red-600 flex items-center gap-1" href="#">
            View All
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden mb-3">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="text-sm font-semibold text-zinc-900">
              Ristorante Cavallino
            </h3>
<p className="text-xs text-zinc-500 mb-2">
              Historic restaurant opposite the factory.
            </p>
<span className="text-[10px] bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded text-zinc-600">
                        3 min walk
                      </span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden mb-3">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2f6442c-8982-4e83-9881-064b53e6b25d_1600w.png?w=800&amp;q=80"/>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Museo Ferrari</h3>
<p className="text-xs text-zinc-500 mb-2">
              The official museum of the prancing horse.
            </p>
<span className="text-[10px] bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded text-zinc-600">
                        Meeting Point
                      </span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden mb-3">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/942cc8b1-85ae-4f90-b9ae-b12ee2c038fe_1600w.png?w=800&amp;q=80"/>
</div>
<h3 className="text-sm font-semibold text-zinc-900">
              Hotel Maranello Village
            </h3>
<p className="text-xs text-zinc-500 mb-2">
              4-star themed hotel for enthusiasts.
            </p>
<span className="text-[10px] bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded text-zinc-600">
                        10 min drive
                      </span>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-8 border-t border-zinc-100">

<div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-900 text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Groups &amp; Agencies</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed max-w-sm">
          Custom packages for tour operators and corporate events. Includes
          museum tickets, lunch, and factory tours.
        </p>
<button className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors">
                    Request Corporate PDF
                  </button>
</div>

<div className="space-y-4" id="faq" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h3 className="text-lg font-semibold mb-4">Frequently Asked</h3>
<details className="group bg-white p-4 rounded-xl border border-zinc-200 shadow-sm open:shadow-md cursor-pointer transition-all">
<summary className="flex justify-between items-center text-sm font-medium list-none">
            Cancellation Policy
            <iconify-icon className="transition group-open:rotate-180 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-3 text-xs text-zinc-500 leading-relaxed space-y-1">
<p>• &gt; 10 days: 100% Refund</p>
<p>• 48 hours: 50% Refund</p>
<p>• &lt; 24 hours: No Refund</p>
<p className="text-zinc-900 font-medium pt-1">
              Heavy Rain: Full refund if driving is unsafe.
            </p>
</div>
</details>
<details className="group bg-white p-4 rounded-xl border border-zinc-200 shadow-sm open:shadow-md cursor-pointer transition-all">
<summary className="flex justify-between items-center text-sm font-medium list-none">
            Driver Requirements
            <iconify-icon className="transition group-open:rotate-180 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-3 text-xs text-zinc-500 leading-relaxed">
            Must be 21+ years old with a valid license held for at least 1
            year. Non-EU citizens require an International Driving Permit or
            official translation.
          </div>
</details>
</div>
</section>
</main>

<footer className="bg-zinc-900 text-white py-16 border-t border-zinc-800">
<div className="max-w-[1280px] mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-bold tracking-tighter uppercase mb-6 block" href="#">
            Test Drive.it
          </a>
<p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            The premium Ferrari driving experience in Maranello. Safe,
            transparent, and unforgettable.
          </p>
</div>
<div>
<h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-zinc-500">
            Contact
          </h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li>Via Alfredo Dino Ferrari 15</li>
<li>41053 Maranello MO, Italy</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-zinc-500">
            Legal
          </h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li>
<a className="hover:text-white" href="#">Terms &amp; Conditions</a>
</li>
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex justify-between items-center text-xs text-zinc-500">
<p>© 2024 Test Drive Maranello. All rights reserved.</p>
<div className="flex gap-3 opacity-50 grayscale">
<iconify-icon icon="logos:visa" width="24"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="24"></iconify-icon>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-zinc-900/40 backdrop-blur-sm closed flex justify-end" id="booking-overlay">
<div className="w-full md:w-[550px] bg-white h-full shadow-2xl flex flex-col overflow-y-auto relative" id="booking-panel">

<div className="sticky top-0 bg-white/90 backdrop-blur z-20 px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900" id="modal-car-title">
            Ferrari F8 Tributo
          </h2>
<p className="text-xs text-zinc-500">Complete your configuration</p>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors" onclick="closeBooking()">
<iconify-icon className="text-zinc-600 text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 space-y-8 pb-32">

<section>
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            1. Select Duration
          </h3>
<div className="grid grid-cols-3 gap-3" style={{opacity: '0', transform: 'translateY(20px)'}}>
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="duration" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-3 text-center hover:border-zinc-300 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
<span className="block text-sm font-semibold">10 Mins</span>
<span className="block text-[10px] opacity-60">~9km</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="duration" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-3 text-center hover:border-zinc-300 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
<span className="block text-sm font-semibold">20 Mins</span>
<span className="block text-[10px] opacity-60">~18km</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="duration" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-3 text-center hover:border-zinc-300 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
<span className="block text-sm font-semibold">30 Mins</span>
<span className="block text-[10px] opacity-60">Mountain</span>
</div>
</label>
</div>
</section>

<section>
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            2. Date &amp; Time
          </h3>
<div className="grid grid-cols-2 gap-4" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<input className="w-full bg-zinc-50 border border-zinc-200 text-sm rounded-xl px-4 py-3 focus:ring-1 focus:ring-zinc-900 outline-none text-zinc-600" type="date"/>
<select className="w-full bg-zinc-50 border border-zinc-200 text-sm rounded-xl px-4 py-3 focus:ring-1 focus:ring-zinc-900 outline-none text-zinc-600">
<option>09:00 AM</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>02:00 PM</option>
<option>03:00 PM</option>
</select>
</div>
</section>

<section>
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            3. Extras
          </h3>
<div className="space-y-3" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<label className="flex items-center justify-between p-3 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<input className="accent-zinc-900 w-4 h-4 rounded" type="checkbox"/>
<div>
<span className="block text-sm font-medium text-zinc-900">
                              Video Recording
                            </span>
<span className="block text-[10px] text-zinc-500">
                              HD Interior + Exterior view on USB.
                            </span>
</div>
</div>
<span className="text-sm font-semibold text-zinc-900">+€20</span>
</label>
<label className="flex items-center justify-between p-3 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<input className="accent-zinc-900 w-4 h-4 rounded" type="checkbox"/>
<div>
<span className="block text-sm font-medium text-zinc-900">
                              Passenger
                            </span>
<span className="block text-[10px] text-zinc-500">
                              Bring a friend in the back seat.
                            </span>
</div>
</div>
<span className="text-sm font-semibold text-zinc-900">+€20</span>
</label>
</div>
</section>

<div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
<h4 className="flex items-center gap-2 text-xs font-semibold text-blue-900 mb-2">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
            Requirements
          </h4>
<ul className="text-[11px] text-blue-800/80 space-y-1">
<li>• Valid Driving License (min 1 year).</li>
<li>• International Permit required for Non-EU.</li>
</ul>
</div>
</div>

<div className="mt-auto sticky bottom-0 bg-white border-t border-zinc-100 p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-center mb-4">
<div>
<span className="text-xs text-zinc-500 block">Total</span>
<span className="text-xl font-bold text-zinc-900" id="modal-total-price">
                        €160
                      </span>
</div>
<div className="text-right">
<span className="text-xs text-zinc-500 block">Due Now (50%)</span>
<span className="text-xl font-bold text-green-600" id="modal-deposit-price">
                        €80
                      </span>
</div>
</div>
<button className="w-full py-4 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2 shadow-lg">
                    Proceed to Payment
                    <iconify-icon icon="solar:card-linear"></iconify-icon>
</button>
</div>
</div>
</div>




    </>
  );
}
