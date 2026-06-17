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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Utilities
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const $ = (sel, root = document) => root.querySelector(sel);

    // Dynamic year
    $("#year").textContent = new Date().getFullYear();

    // ---- Quick callback form (demo) ----
    const quickForm = $("#quickForm");
    const quickMsg = $("#quickMsg");
    quickForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(quickForm);
      const name = (fd.get("name") || "").toString().trim();
      const phone = (fd.get("phone") || "").toString().trim();
      quickMsg.textContent = `Ευχαριστούμε, ${name || "!"} Θα σας καλέσουμε σύντομα στο ${phone || "τηλέφωνο που δηλώσατε"}.`;
      quickMsg.classList.remove("hidden");
      quickForm.reset();
      setTimeout(() => quickMsg.classList.add("hidden"), 7000);
    });

    // ---- Contact form (demo) ----
    const contactForm = $("#contactForm");
    const contactMsg = $("#contactMsg");
    contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const cname = (fd.get("cname") || "").toString().trim();
      contactMsg.textContent = `Το μήνυμά σας καταχωρήθηκε${cname ? ", " + cname : ""}. Θα επικοινωνήσουμε σύντομα.`;
      contactMsg.classList.remove("hidden");
      contactForm.reset();
      setTimeout(() => contactMsg.classList.add("hidden"), 7000);
    });

    // ---- Before/After sliders ----
    $$("[data-ba='wrap']").forEach((wrap) => {
      const before = $("[data-ba='before']", wrap);
      const divider = $("[data-ba='divider']", wrap);
      const range = $("[data-ba='range']", wrap);

      const setPos = (val) => {
        const pct = Math.max(0, Math.min(100, Number(val)));
        before.style.width = pct + "%";
        divider.style.left = pct + "%";
      };

      range.addEventListener("input", (e) => setPos(e.target.value));
      setPos(range.value);
    });

    // ---- Projects map + list ----
    const projects = [
      { id: "p1", title: "Διαμέρισμα • Εσωτερικό", region: "thess", type: "home", space: "inside", area: "Κέντρο", meta: "Θεσσαλονίκη", desc: "Προετοιμασία τοίχων/οροφών, στοκαρίσματα και βαφή με σατινέ τελείωμα.", x: 32, y: 40 },
      { id: "p2", title: "Κατάστημα • Πρόσοψη", region: "thess", type: "pro", space: "outside", area: "Καλαμαριά", meta: "Θεσσαλονίκη", desc: "Εξωτερική βαφή πρόσοψης με υλικά αντοχής στον ήλιο και την υγρασία.", x: 42, y: 52 },
      { id: "p3", title: "Μονοκατοικία • Εξωτερικό", region: "chalk", type: "home", space: "outside", area: "Ν. Μουδανιά", meta: "Χαλκιδική", desc: "Σωστή προετοιμασία, αστάρι όπου απαιτήθηκε και τελικό χρώμα υψηλής αντοχής.", x: 68, y: 64 },
      { id: "p4", title: "Airbnb • Ανακαίνιση χρωμάτων", region: "thess", type: "pro", space: "inside", area: "Τούμπα", meta: "Θεσσαλονίκη", desc: "Φρεσκάρισμα για άμεση παράδοση, καθαρή εκτέλεση και γρήγορο στέγνωμα.", x: 38, y: 35 },
      { id: "p5", title: "Εξοχικό • Εσωτερικό", region: "chalk", type: "home", space: "inside", area: "Ν. Καλλικράτεια", meta: "Χαλκιδική", desc: "Εσωτερικά βαψίματα με έμφαση στην καθαριότητα και τις λεπτομέρειες.", x: 74, y: 46 },
      { id: "p6", title: "Γραφείο • Εσωτερικό", region: "thess", type: "pro", space: "inside", area: "Πυλαία", meta: "Θεσσαλονίκη", desc: "Οργάνωση εργασιών εκτός ωραρίου για ελάχιστη όχληση της λειτουργίας.", x: 46, y: 38 }
    ];

    const pinsLayer = $("#pinsLayer");
    const projectsList = $("#projectsList");
    const searchProjects = $("#searchProjects");
    const countLabel = $("#countLabel");
    const emptyState = $("#emptyState");

    const detailsBox = $("#projectDetails");
    const pdTitle = $("#pdTitle");
    const pdMeta = $("#pdMeta");
    const pdDesc = $("#pdDesc");
    const closeDetails = $("#closeDetails");

    let activeFilters = { region: "all", type: null, space: null };
    let activeProjectId = null;

    const filterBtns = $$(".filterBtn");
    const resetFiltersBtn = $("#resetFilters");

    function normalize(str) {
      return (str || "")
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }

    function matchesFilters(p) {
      if (activeFilters.region !== "all" && p.region !== activeFilters.region) return false;
      if (activeFilters.type && p.type !== activeFilters.type) return false;
      if (activeFilters.space && p.space !== activeFilters.space) return false;

      const q = normalize(searchProjects?.value || "");
      if (!q) return true;

      const hay = normalize([p.title, p.area, p.meta, p.region, p.type, p.space].join(" "));
      return hay.includes(q);
    }

    function setBtnStates() {
      filterBtns.forEach((b) => {
        const f = b.dataset.filter;
        const v = b.dataset.value;

        let selected = false;
        if (f === "region") selected = activeFilters.region === v;
        if (f === "type") selected = activeFilters.type === v;
        if (f === "space") selected = activeFilters.space === v;

        b.classList.toggle("bg-stone-900", selected);
        b.classList.toggle("text-white", selected);
        b.classList.toggle("border-stone-900", selected);

        if (!selected) {
          b.classList.add("bg-white", "text-stone-900", "border-stone-200");
          b.classList.remove("bg-stone-900", "text-white", "border-stone-900");
        } else {
          b.classList.remove("bg-white", "text-stone-900", "border-stone-200");
        }
      });
    }

    function renderPins(list) {
      pinsLayer.innerHTML = "";
      list.forEach((p) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "group absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-200 bg-white p-2 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300 transition";
        btn.style.left = p.x + "%";
        btn.style.top = p.y + "%";
        btn.setAttribute("aria-label", `Έργο: ${p.title} (${p.area})`);
        btn.dataset.projectId = p.id;

        const dot = document.createElement("span");
        dot.className = "block h-3 w-3 rounded-full bg-stone-900 group-hover:bg-stone-700 transition-colors";
        btn.appendChild(dot);

        btn.addEventListener("click", () => openProject(p.id));
        pinsLayer.appendChild(btn);
      });
    }

    function renderList(list) {
      projectsList.innerHTML = "";

      list.forEach((p) => {
        const item = document.createElement("button");
        item.type = "button";
        item.dataset.projectId = p.id;
        item.className =
          "w-full text-left rounded-2xl border border-stone-200 bg-white p-4 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300 transition";

        const top = document.createElement("div");
        top.className = "flex items-start justify-between gap-3";

        const left = document.createElement("div");
        const t = document.createElement("p");
        t.className = "text-sm font-semibold text-stone-900";
        t.textContent = p.title;

        const m = document.createElement("p");
        m.className = "mt-1 text-xs text-stone-600";
        m.textContent = `${p.area} • ${p.meta}`;

        left.appendChild(t);
        left.appendChild(m);

        const badge = document.createElement("span");
        badge.className =
          "shrink-0 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] font-semibold text-stone-700";
        badge.textContent = p.space === "inside" ? "Εσωτερικός" : "Εξωτερικός";

        top.appendChild(left);
        top.appendChild(badge);

        const desc = document.createElement("p");
        desc.className = "mt-3 text-xs text-stone-700";
        desc.textContent = p.desc;

        item.appendChild(top);
        item.appendChild(desc);

        item.addEventListener("click", () => openProject(p.id));
        projectsList.appendChild(item);
      });
    }

    function openProject(id) {
      const p = projects.find((x) => x.id === id);
      if (!p) return;
      activeProjectId = id;

      pdTitle.textContent = p.title;
      pdMeta.textContent = `${p.area} • ${p.meta}`;
      pdDesc.textContent = p.desc;

      detailsBox.classList.remove("hidden");
      detailsBox.scrollIntoView({ behavior: "smooth", block: "nearest" });

      Highlight selected pin
      $$("button[data-project-id]", pinsLayer).forEach((pin) => {
        const selected = pin.dataset.projectId === id;
        pin.classList.toggle("ring-2", selected);
        pin.classList.toggle("ring-stone-300", selected);
      });
    }

    closeDetails?.addEventListener("click", () => {
      detailsBox.classList.add("hidden");
      activeProjectId = null;
      $$("button[data-project-id]", pinsLayer).forEach((pin) => {
        pin.classList.remove("ring-2", "ring-stone-300");
      });
    });

    function refreshProjects() {
      setBtnStates();
      const filtered = projects.filter(matchesFilters);

      renderPins(filtered);
      renderList(filtered);

      countLabel.textContent = `${filtered.length} έργα`;
      emptyState.classList.toggle("hidden", filtered.length !== 0);

      // If active project is filtered out, hide details
      if (activeProjectId && !filtered.some((p) => p.id === activeProjectId)) {
        detailsBox.classList.add("hidden");
        activeProjectId = null;
      }
    }

    filterBtns.forEach((b) => {
      b.addEventListener("click", () => {
        const f = b.dataset.filter;
        const v = b.dataset.value;

        if (f === "region") {
          activeFilters.region = v; // "all" supported
        } else if (f === "type") {
          activeFilters.type = activeFilters.type === v ? null : v;
        } else if (f === "space") {
          activeFilters.space = activeFilters.space === v ? null : v;
        }

        refreshProjects();
      });
    });

    resetFiltersBtn?.addEventListener("click", () => {
      activeFilters = { region: "all", type: null, space: null };
      if (searchProjects) searchProjects.value = "";
      refreshProjects();
    });

    searchProjects?.addEventListener("input", () => refreshProjects());

    // Initial render
    refreshProjects();

    // ---- Quote wizard ----
    const quoteForm = $("#quoteForm");
    const quoteMsg = $("#quoteMsg");
    const steps = $$(".quoteStep", quoteForm);
    const prevBtn = $("#prevBtn");
    const nextBtn = $("#nextBtn");
    const submitBtn = $("#submitBtn");
    const stepLabel = $("#stepLabel");
    const progressBar = $("#progressBar");
    const sqmRange = $("#sqm");
    const sqmLabel = $("#sqmLabel");
    const estimateLine = $("#estimateLine");

    let step = 1;
    const totalSteps = 4;

    function getFormValue(name) {
      const el = quoteForm.querySelector(`[name="${name}"]:checked`) || quoteForm.querySelector(`[name="${name}"]`);
      if (!el) return "";
      return el.value || "";
    }

    function calcEstimate() {
      const jobType = getFormValue("jobType");     // home|pro
      const spaceType = getFormValue("spaceType"); // inside|outside
      const sqm = Number(sqmRange?.value || 80);

      // Simple pricing model (indicative)
      let base = spaceType === "outside" ? 6.5 : 5.0; // €/m²
      if (jobType === "pro") base += 0.7; // slightly higher for commercial constraints
      // soft volume effect
      const volumeDiscount = sqm >= 160 ? 0.9 : sqm >= 110 ? 0.95 : 1.0;

      const low = Math.round(sqm * base * 0.95 * volumeDiscount);
      const high = Math.round(sqm * base * 1.25 * volumeDiscount);

      // Add a small minimum to avoid absurdly low outputs
      const low2 = Math.max(low, 250);
      const high2 = Math.max(high, 380);

      return { low: low2, high: high2, sqm, base };
    }

    function updateEstimateText() {
      const { low, high, sqm } = calcEstimate();
      estimateLine.textContent = `Περίπου ${low}€ – ${high}€ (για ~${sqm} m²)`;
    }

    function showStep(n) {
      step = Math.max(1, Math.min(totalSteps, n));
      steps.forEach((s) => s.classList.toggle("hidden", Number(s.dataset.step) !== step));

      stepLabel.textContent = `Βήμα ${step} από ${totalSteps}`;
      progressBar.style.width = `${(step / totalSteps) * 100}%`;

      prevBtn.classList.toggle("hidden", step === 1);
      nextBtn.classList.toggle("hidden", step === totalSteps);
      submitBtn.classList.toggle("hidden", step !== totalSteps);

      // Update estimate when reaching step 4 (and also if data changes)
      if (step === 4) updateEstimateText();
    }

    function validateStep(n) {
      // Validate only required inputs within the current step
      const current = steps.find((s) => Number(s.dataset.step) === n);
      const required = $$("input[required], select[required], textarea[required]", current);

      for (const el of required) {
        if (el.type === "radio") {
          const groupName = el.name;
          const checked = quoteForm.querySelector(`input[name="${groupName}"]:checked`);
          if (!checked) {
            el.focus();
            return false;
          }
        } else if (!el.value) {
          el.focus();
          return false;
        }
      }
      return true;
    }

    prevBtn?.addEventListener("click", () => showStep(step - 1));
    nextBtn?.addEventListener("click", () => {
      if (!validateStep(step)) return;
      showStep(step + 1);
    });

    // Update sqm label + estimate
    sqmRange?.addEventListener("input", () => {
      sqmLabel.textContent = sqmRange.value;
      if (step === 4) updateEstimateText();
    });

    // Recalculate estimate if previous choices change
    quoteForm?.addEventListener("change", () => {
      if (step === 4) updateEstimateText();
    });

    quoteForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validateStep(4)) return;

      const fd = new FormData(quoteForm);
      const fullName = (fd.get("fullName") || "").toString().trim();
      const phone = (fd.get("contactPhone") || "").toString().trim();
      const area = (fd.get("quoteArea") || "").toString().trim();
      const { low, high } = calcEstimate();

      quoteMsg.textContent =
        `Ευχαριστούμε${fullName ? ", " + fullName : ""}! Η ενδεικτική εκτίμηση είναι ${low}€–${high}€. ` +
        `Θα επικοινωνήσουμε στο ${phone} για δωρεάν εκτίμηση στον χώρο σας (${area}).`;
      quoteMsg.classList.remove("hidden");

      // Reset wizard back to step 1
      quoteForm.reset();
      sqmLabel.textContent = "80";
      if (sqmRange) sqmRange.value = 80;
      showStep(1);

      setTimeout(() => quoteMsg.classList.add("hidden"), 9000);
    });

    // Init wizard
    showStep(1);

    // ---- Smooth anchor offset consideration ----
    // Simple helper to improve anchor behavior (optional)
    // (Kept minimal; Tailwind-only design)
  
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
      

<div className="border-b border-stone-200 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-stone-50">
<span className="font-semibold tracking-tight text-stone-900" style={{fontFamily: 'Noto Serif, serif'}}>ΒΣ</span>
</div>
<div className="leading-tight">
<p className="text-sm font-semibold text-stone-900 tracking-tight" style={{fontFamily: 'Noto Serif, serif'}}>Βαψίματα Θεσσαλονίκης</p>
<p className="text-xs text-stone-600">Κατοικίες &amp; επαγγελματικοί χώροι • Θεσσαλονίκη &amp; Χαλκιδική</p>
</div>
</div>
<div className="hidden items-center gap-2 sm:flex">
<a className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50" href="#quote">
<iconify-icon height="18" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Online Προσφορά
          </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-stone-800" href="tel:+3069XXXXXXXX" id="callTop">
<iconify-icon height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Καλέστε: 69ΧΧ ΧΧΧ ΧΧΧ
          </a>
</div>
</div>
</div>
</div>

<div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 backdrop-blur sm:hidden">
<div className="mx-auto max-w-6xl px-4 py-3">
<div className="grid grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-3 text-sm font-semibold text-stone-900 shadow-sm" href="#quote">
<iconify-icon height="18" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Online Προσφορά
        </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-3 py-3 text-sm font-semibold text-white shadow-sm" href="tel:+3069XXXXXXXX" id="callSticky">
<iconify-icon height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Κλήση τώρα
        </a>
</div>
<p className="mt-2 text-center text-xs text-stone-600">Δωρεάν εκτίμηση στον χώρο σας • Θεσσαλονίκη &amp; Χαλκιδική</p>
</div>
</div>

<header className="relative">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700">
<iconify-icon height="16" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            Θεσσαλονίκη • Χαλκιδική
          </div>
<h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl" style={{fontFamily: 'Noto Serif, serif'}}>
            Βαψίματα Κατοικιών &amp; Επαγγελματικών Χώρων στη Θεσσαλονίκη
          </h1>
<p className="mt-4 text-base text-stone-700 sm:text-lg">
            Καθαρή δουλειά. Συνεπείς χρόνοι. Τίμιες τιμές.<br className="hidden sm:block"/>
            Με σεβασμό στο σπίτι και στον χώρο σας.
          </p>
<div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-4 text-base font-semibold text-white shadow-sm hover:bg-stone-800" href="tel:+3069XXXXXXXX" id="callHero">
<iconify-icon height="20" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Καλέστε μας τώρα: 69ΧΧ ΧΧΧ ΧΧΧ
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-base font-semibold text-stone-900 shadow-sm hover:bg-stone-50" href="#quote">
<iconify-icon height="20" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Λάβετε Προσφορά Online σε 2 Λεπτά
            </a>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-stone-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="20" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Αξιοπιστία</p>
<p className="mt-1 text-xs text-stone-600">Γραπτή προσφορά, καθαροί όροι.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="20" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Συνεπείς χρόνοι</p>
<p className="mt-1 text-xs text-stone-600">Τηρούμε τις ημερομηνίες.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="20" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Σεβασμός στον χώρο</p>
<p className="mt-1 text-xs text-stone-600">Προστασία, καθαριότητα, λεπτομέρεια.</p>
</div>
</div>
</div>
</div>
<p className="mt-5 text-xs text-stone-600">
            Δωρεάν εκτίμηση στον χώρο σας. Οι περισσότεροι πελάτες μας έρχονται από συστάσεις.
          </p>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-sm font-semibold text-stone-900 tracking-tight" style={{fontFamily: 'Noto Serif, serif'}}>Γρήγορη Επικοινωνία</p>
<p className="mt-1 text-xs text-stone-600">Θα σας καλέσουμε στο συντομότερο δυνατό.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="22" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</div>
<form className="mt-4 grid gap-3" id="quickForm">
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Ονοματεπώνυμο</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="name" placeholder="π.χ. Γιώργος Παπαδόπουλος" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Τηλέφωνο</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" inputmode="tel" name="phone" placeholder="π.χ. 69ΧΧ ΧΧΧ ΧΧΧ" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Περιοχή</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="area" placeholder="π.χ. Καλαμαριά, Πυλαία, Ν. Μουδανιά"/>
</label>
<button className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800" type="submit">
<iconify-icon height="18" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Ζητήστε να σας καλέσουμε
              </button>
<p className="hidden rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800" id="quickMsg"></p>
<p className="text-xs text-stone-600">
                Εναλλακτικά: <a className="font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4" href="tel:+3069XXXXXXXX">καλέστε απευθείας</a>.
              </p>
</form>
</div>
<div className="mt-4 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
<div className="flex items-start gap-3">
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="22" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Εγγύηση Ποιότητας</p>
<p className="mt-1 text-xs text-stone-600">Παραδίδουμε καθαρό και ολοκληρωμένο αποτέλεσμα, με υπευθυνότητα και σεβασμό.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-t border-stone-200 bg-white" id="process">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl" style={{fontFamily: 'Noto Serif, serif'}}>Πώς Δουλεύουμε</h2>
<p className="mt-3 text-sm text-stone-700 sm:text-base">Απλά, καθαρά και οργανωμένα — χωρίς εκπλήξεις.</p>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-5">

<div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700">
              1
              <span className="text-stone-400">/</span>
              5
            </div>
<div className="rounded-2xl border border-stone-200 bg-white p-2">
<iconify-icon height="20" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-sm font-semibold text-stone-900">Δωρεάν Εκτίμηση &amp; Προσφορά</h3>
<ul className="mt-3 space-y-2 text-xs text-stone-700">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Επίσκεψη στον χώρο</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Κατανόηση επιθυμιών &amp; προϋπολογισμού</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Αναλυτική γραπτή προσφορά</span></li>
</ul>
<p className="mt-3 text-xs font-semibold text-stone-800">Ξέρετε από την αρχή τι θα γίνει και πόσο.</p>
</div>

<div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700">
              2
              <span className="text-stone-400">/</span>
              5
            </div>
<div className="rounded-2xl border border-stone-200 bg-white p-2">
<iconify-icon height="20" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-sm font-semibold text-stone-900">Συμφωνία &amp; Προγραμματισμός</h3>
<ul className="mt-3 space-y-2 text-xs text-stone-700">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Υπογραφή συμφωνητικού</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Προκαταβολή</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Καθορισμός χρονοδιαγράμματος</span></li>
</ul>
<p className="mt-3 text-xs font-semibold text-stone-800">Τηρούμε τις ημερομηνίες που συμφωνούμε.</p>
</div>

<div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700">
              3
              <span className="text-stone-400">/</span>
              5
            </div>
<div className="rounded-2xl border border-stone-200 bg-white p-2">
<iconify-icon height="20" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-sm font-semibold text-stone-900">Προετοιμασία &amp; Προστασία Χώρου</h3>
<ul className="mt-3 space-y-2 text-xs text-stone-700">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Κάλυψη επίπλων &amp; δαπέδων</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Στοκάρισμα, επισκευές, τρίψιμο</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Καθαρό και ασφαλές εργοτάξιο</span></li>
</ul>
<p className="mt-3 text-xs font-semibold text-stone-800">Καθαρή δουλειά ξεκινά από σωστή προετοιμασία.</p>
</div>

<div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700">
              4
              <span className="text-stone-400">/</span>
              5
            </div>
<div className="rounded-2xl border border-stone-200 bg-white p-2">
<iconify-icon height="20" icon="solar:paint-roller-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-sm font-semibold text-stone-900">Επαγγελματική Εφαρμογή Βαφής</h3>
<ul className="mt-3 space-y-2 text-xs text-stone-700">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Αστάρι όπου απαιτείται</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Πολλαπλές στρώσεις</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Προσεγμένες λεπτομέρειες</span></li>
</ul>
<p className="mt-3 text-xs font-semibold text-stone-800">Ποιοτικά υλικά για αντοχή στον χρόνο.</p>
</div>

<div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-700">
              5
              <span className="text-stone-400">/</span>
              5
            </div>
<div className="rounded-2xl border border-stone-200 bg-white p-2">
<iconify-icon height="20" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="mt-4 text-sm font-semibold text-stone-900">Τελικός Έλεγχος &amp; Παράδοση</h3>
<ul className="mt-3 space-y-2 text-xs text-stone-700">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Κοινός έλεγχος του έργου</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Διορθώσεις όπου χρειάζεται</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></span><span>Τελική εξόφληση</span></li>
</ul>
<p className="mt-3 text-xs font-semibold text-stone-800">Δεν φεύγουμε αν δεν είστε 100% ικανοποιημένοι.</p>
</div>
</div>

<div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8">
<div className="flex items-start justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-xl font-semibold tracking-tight text-stone-950 sm:text-2xl" style={{fontFamily: 'Noto Serif, serif'}}>Γιατί να μας επιλέξετε</h3>
<p className="mt-2 text-sm text-stone-700 sm:text-base">Τοπική, οργανωμένη ομάδα με έμφαση στη συνέπεια, την καθαριότητα και τη διαφάνεια.</p>
</div>
<div className="hidden sm:block rounded-2xl border border-stone-200 bg-stone-50 p-3">
<iconify-icon height="26" icon="solar:medal-ribbons-star-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
<div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-white p-2">
<iconify-icon height="18" icon="solar:buildings-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Τοπική επιχείρηση</p>
<p className="mt-1 text-xs text-stone-600">Θεσσαλονίκη, με έργα σε όλο τον νομό.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-white p-2">
<iconify-icon height="18" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Πολυετής εμπειρία</p>
<p className="mt-1 text-xs text-stone-600">Λύσεις που αντέχουν στον χρόνο.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-white p-2">
<iconify-icon height="18" icon="solar:broom-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Καθαρή &amp; οργανωμένη εργασία</p>
<p className="mt-1 text-xs text-stone-600">Προστασία χώρου, τάξη, λεπτομέρεια.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-white p-2">
<iconify-icon height="18" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Τήρηση συμφωνιών</p>
<p className="mt-1 text-xs text-stone-600">Χρονοδιάγραμμα και ενημέρωση.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-white p-2">
<iconify-icon height="18" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Διαφάνεια στο κόστος</p>
<p className="mt-1 text-xs text-stone-600">Γραπτή προσφορά, χωρίς “κρυφά”.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<div className="mt-0.5 rounded-xl border border-stone-200 bg-white p-2">
<iconify-icon height="18" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Συστάσεις</p>
<p className="mt-1 text-xs text-stone-600">Οι περισσότεροι πελάτες μας έρχονται από στόμα σε στόμα.</p>
</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800" href="tel:+3069XXXXXXXX">
<iconify-icon height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Καλέστε: 69ΧΧ ΧΧΧ ΧΧΧ
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50" href="#quote">
<iconify-icon height="18" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Υπολογίστε Προσφορά Online
          </a>
<p className="text-xs text-stone-600">Δωρεάν εκτίμηση στον χώρο σας.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-stone-200 bg-stone-50" id="gallery">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl" style={{fontFamily: 'Noto Serif, serif'}}>Έργα μας</h2>
<p className="mt-2 text-sm text-stone-700 sm:text-base">Δείτε τη διαφορά πριν και μετά. Σύρετε τη γραμμή και δείτε τη μεταμόρφωση.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-stone-600">
<iconify-icon height="16" icon="solar:mouse-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
          Σύρετε ή χρησιμοποιήστε το slider
        </div>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-2">

<div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-sm font-semibold text-stone-900">Κατοικία • Εσωτερικός χώρος</p>
<p className="mt-1 text-xs text-stone-600">Θεσσαλονίκη (κέντρο)</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">
              Before / After
            </div>
</div>
<div className="mt-4">
<div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-100" data-ba="wrap">

<div className="relative">
<div className="h-64 w-full sm:h-72" style="background:
                  linear-gradient(135deg, rgba(15,23,42,0.05), rgba(15,23,42,0.0)),
                  radial-gradient(circle at 30% 20%, rgba(120,113,108,0.25), transparent 55%),
                  linear-gradient(0deg, rgba(255,255,255,0.92), rgba(255,255,255,0.92));
                ">
<div className="flex h-full w-full items-end justify-between p-4">
<div className="rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm">
                      Μετά: φωτεινό, ομοιόμορφο, καθαρό τελείωμα
                    </div>
<div className="hidden sm:block rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm">
                      Σατινέ • Αντοχή στον καθαρισμό
                    </div>
</div>
</div>
</div>

<div className="absolute inset-0 overflow-hidden" data-ba="before" style={{width: '50%'}}>
<div className="h-64 w-full sm:h-72" style="background:
                  linear-gradient(135deg, rgba(15,23,42,0.10), rgba(15,23,42,0.02)),
                  repeating-linear-gradient(90deg, rgba(120,113,108,0.12), rgba(120,113,108,0.12) 0.5rem, rgba(120,113,108,0.06) 0.5rem, rgba(120,113,108,0.06) 1rem),
                  linear-gradient(0deg, rgba(245,245,244,0.95), rgba(245,245,244,0.95));
                ">
<div className="flex h-full w-full items-end justify-start p-4">
<div className="rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm">
                      Πριν: φθορές, κιτρινίλες, ανομοιομορφίες
                    </div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-y-0" data-ba="divider" style={{left: '50%'}}>
<div className="absolute inset-y-0 -ml-px w-px bg-stone-900/40"></div>
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2">
<div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 shadow-sm">
<iconify-icon height="16" icon="solar:double-alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-semibold text-stone-800">Σύρετε</span>
<iconify-icon height="16" icon="solar:double-alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute inset-x-4 bottom-4">
<input aria-label="Before After Slider" className="w-full accent-stone-800" data-ba="range" max="100" min="0" type="range" value="50"/>
</div>
</div>
<p className="mt-3 text-xs text-stone-600">Στόχος: καθαρό τελείωμα και σωστή προετοιμασία, χωρίς δυσάρεστες εκπλήξεις.</p>
</div>
</div>

<div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-sm font-semibold text-stone-900">Επαγγελματικός χώρος • Πρόσοψη</p>
<p className="mt-1 text-xs text-stone-600">Χαλκιδική</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">
              Before / After
            </div>
</div>
<div className="mt-4">
<div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-100" data-ba="wrap">

<div className="h-64 w-full sm:h-72" style="background:
                linear-gradient(135deg, rgba(15,23,42,0.08), rgba(15,23,42,0.0)),
                radial-gradient(circle at 70% 30%, rgba(120,113,108,0.22), transparent 55%),
                linear-gradient(0deg, rgba(255,255,255,0.92), rgba(255,255,255,0.92));
              ">
<div className="flex h-full w-full items-end justify-between p-4">
<div className="rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm">
                    Μετά: ομοιόμορφη πρόσοψη, καθαρή εικόνα
                  </div>
<div className="hidden sm:block rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm">
                    Εξωτερικό • Αντοχή στον ήλιο
                  </div>
</div>
</div>

<div className="absolute inset-0 overflow-hidden" data-ba="before" style={{width: '50%'}}>
<div className="h-64 w-full sm:h-72" style="background:
                  linear-gradient(135deg, rgba(15,23,42,0.12), rgba(15,23,42,0.02)),
                  radial-gradient(circle at 20% 60%, rgba(120,113,108,0.22), transparent 55%),
                  repeating-linear-gradient(0deg, rgba(120,113,108,0.12), rgba(120,113,108,0.12) 0.5rem, rgba(120,113,108,0.06) 0.5rem, rgba(120,113,108,0.06) 1rem),
                  linear-gradient(0deg, rgba(245,245,244,0.95), rgba(245,245,244,0.95));
                ">
<div className="flex h-full w-full items-end justify-start p-4">
<div className="rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm">
                      Πριν: ξεθώριασμα &amp; ανομοιομορφίες
                    </div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-y-0" data-ba="divider" style={{left: '50%'}}>
<div className="absolute inset-y-0 -ml-px w-px bg-stone-900/40"></div>
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2">
<div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 shadow-sm">
<iconify-icon height="16" icon="solar:double-alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-semibold text-stone-800">Σύρετε</span>
<iconify-icon height="16" icon="solar:double-alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-x-4 bottom-4">
<input aria-label="Before After Slider" className="w-full accent-stone-800" data-ba="range" max="100" min="0" type="range" value="50"/>
</div>
</div>
<p className="mt-3 text-xs text-stone-600">Σωστή επιλογή υλικών και εφαρμογή για αντοχή σε εξωτερικές συνθήκες.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-stone-200 bg-white" id="projects">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl" style={{fontFamily: 'Noto Serif, serif'}}>Χάρτης Έργων</h2>
<p className="mt-2 text-sm text-stone-700 sm:text-base">
            Δείτε ενδεικτικά έργα σε Θεσσαλονίκη και Χαλκιδική. Φιλτράρετε ανά τύπο έργου.
          </p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
<p className="text-xs font-semibold text-stone-800">Σύνολο:</p>
<p className="text-sm font-semibold text-stone-950" id="countLabel">0 έργα</p>
</div>
</div>

<div className="mt-6 rounded-3xl border border-stone-200 bg-stone-50 p-4 sm:p-5">
<div className="grid gap-3 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-3">
<p className="text-xs font-semibold text-stone-800">Περιοχή</p>
<div aria-label="Περιοχή" className="mt-2 flex flex-wrap gap-2" role="group">
<button className="filterBtn rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm" data-filter="region" data-value="all">Όλα</button>
<button className="filterBtn rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm" data-filter="region" data-value="thess">Θεσσαλονίκη</button>
<button className="filterBtn rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm" data-filter="region" data-value="chalk">Χαλκιδική</button>
</div>
</div>
<div className="lg:col-span-6">
<p className="text-xs font-semibold text-stone-800">Φίλτρα έργου</p>
<div aria-label="Φίλτρα έργου" className="mt-2 flex flex-wrap gap-2" role="group">
<button className="filterBtn rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm" data-filter="type" data-value="home">Κατοικία</button>
<button className="filterBtn rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm" data-filter="type" data-value="pro">Επαγγελματικός Χώρος</button>
<button className="filterBtn rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm" data-filter="space" data-value="inside">Εσωτερικός</button>
<button className="filterBtn rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm" data-filter="space" data-value="outside">Εξωτερικός</button>
</div>
<p className="mt-2 text-xs text-stone-600">Πατήστε ξανά ένα φίλτρο για αφαίρεση. “Όλα” μηδενίζει την περιοχή.</p>
</div>
<div className="lg:col-span-3 lg:flex lg:justify-end">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50 lg:w-auto" id="resetFilters">
<iconify-icon height="18" icon="solar:restart-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Επαναφορά φίλτρων
            </button>
</div>
</div>
</div>
<div className="mt-6 grid gap-6 lg:grid-cols-12">

<div className="lg:col-span-7">
<div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-semibold text-stone-900">Ενδεικτικός χάρτης έργων</p>
<p className="mt-1 text-xs text-stone-600">Επιλέξτε ένα σημείο για λεπτομέρειες.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="22" icon="solar:map-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</div>

<div className="mt-4 relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50" id="mapCanvas" style={{aspectRatio: '16 / 10'}}>
<div className="absolute inset-0" style="background:
                radial-gradient(circle at 25% 30%, rgba(120,113,108,0.25), transparent 55%),
                radial-gradient(circle at 70% 70%, rgba(15,23,42,0.08), transparent 60%),
                linear-gradient(0deg, rgba(255,255,255,0.65), rgba(255,255,255,0.65));
              "></div>
<div className="absolute left-4 top-4 rounded-xl border border-stone-200 bg-white/90 px-3 py-2 text-xs font-semibold text-stone-700 shadow-sm">
                Θεσσαλονίκη ↔ Χαλκιδική (ενδεικτικά)
              </div>

<div className="absolute inset-0" id="pinsLayer"></div>
<div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
<div className="rounded-xl border border-stone-200 bg-white/90 px-3 py-2 text-xs text-stone-700 shadow-sm">
<span className="font-semibold">Σημείωση:</span> ο χάρτης είναι ενδεικτικός για προβολή έργων.
                </div>
<div className="rounded-xl border border-stone-200 bg-white/90 px-3 py-2 text-xs text-stone-700 shadow-sm">
<span className="font-semibold">Εργα:</span> κατοικίες &amp; επαγγελματικοί χώροι
                </div>
<div className="rounded-xl border border-stone-200 bg-white/90 px-3 py-2 text-xs text-stone-700 shadow-sm">
<span className="font-semibold">Κάλυψη:</span> Θεσσαλονίκη &amp; Χαλκιδική
                </div>
</div>
</div>
<div className="mt-4 hidden rounded-2xl border border-stone-200 bg-stone-50 p-4" id="projectDetails">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-semibold text-stone-900" id="pdTitle"></p>
<p className="mt-1 text-xs text-stone-600" id="pdMeta"></p>
</div>
<button className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm hover:bg-stone-50" id="closeDetails">
                  Κλείσιμο
                </button>
</div>
<p className="mt-3 text-xs text-stone-700" id="pdDesc"></p>
<div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-4 py-3 text-xs font-semibold text-white shadow-sm hover:bg-stone-800" href="tel:+3069XXXXXXXX">
<iconify-icon height="16" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Καλέστε για παρόμοιο έργο
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-xs font-semibold text-stone-900 shadow-sm hover:bg-stone-50" href="#quote">
<iconify-icon height="16" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Online προσφορά
                </a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-semibold text-stone-900">Λίστα έργων</p>
<p className="mt-1 text-xs text-stone-600">Πατήστε ένα έργο για εμφάνιση στον χάρτη.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="22" icon="solar:list-check-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Αναζήτηση (π.χ. “Καλαμαριά”)</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" id="searchProjects" placeholder="Αναζήτηση περιοχής ή τύπου..." />
</input></label>
</div>
<div className="mt-3 grid gap-3" id="projectsList"></div>
<p className="mt-3 hidden rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-xs text-stone-700" id="emptyState">
                Δεν βρέθηκαν έργα με τα τρέχοντα φίλτρα/αναζήτηση.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-stone-200 bg-stone-50" id="team">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl" style={{fontFamily: 'Noto Serif, serif'}}>Η Ομάδα μας</h2>
<p className="mt-2 text-sm text-stone-700 sm:text-base">Άνθρωποι με εμπειρία και μεράκι. Προσωπική επίβλεψη και καθαρή επικοινωνία.</p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-2xl border border-stone-200 bg-stone-50" style="background:
              radial-gradient(circle at 30% 30%, rgba(120,113,108,0.25), transparent 55%),
              linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,1));
            "></div>
<div>
<p className="text-base font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Noto Serif, serif'}}>[Όνομα Ιδιοκτήτη]</p>
<p className="mt-1 text-xs font-semibold text-stone-700">Ιδιοκτήτης – Επικεφαλής Έργων</p>
</div>
</div>
<p className="mt-4 text-sm text-stone-700">
            Με πολυετή εμπειρία στα βαψίματα κατοικιών και επαγγελματικών χώρων.
            Αναλαμβάνει προσωπικά την εκτίμηση και την επίβλεψη κάθε έργου.
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Εκτίμηση στον χώρο</span>
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Επίβλεψη</span>
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Οργάνωση</span>
</div>
</div>

<div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-2xl border border-stone-200 bg-stone-50" style="background:
              radial-gradient(circle at 60% 40%, rgba(120,113,108,0.25), transparent 55%),
              linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,1));
            "></div>
<div>
<p className="text-base font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Noto Serif, serif'}}>[Όνομα Μέλους Ομάδας]</p>
<p className="mt-1 text-xs font-semibold text-stone-700">Εξειδικευμένος Τεχνίτης</p>
</div>
</div>
<p className="mt-4 text-sm text-stone-700">
            Εμπειρία σε επιφάνειες, επισκευές και λεπτομέρειες φινιρίσματος.
            Έμφαση στην καθαριότητα και τη σωστή προετοιμασία.
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Στοκαρίσματα</span>
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Φινίρισμα</span>
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Λεπτομέρεια</span>
</div>
</div>

<div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-2xl border border-stone-200 bg-stone-50" style="background:
              radial-gradient(circle at 40% 70%, rgba(120,113,108,0.25), transparent 55%),
              linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,1));
            "></div>
<div>
<p className="text-base font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Noto Serif, serif'}}>[Όνομα Μέλους Ομάδας]</p>
<p className="mt-1 text-xs font-semibold text-stone-700">Τεχνίτης Εφαρμογών</p>
</div>
</div>
<p className="mt-4 text-sm text-stone-700">
            Υπεύθυνος για σωστή εφαρμογή, ομοιόμορφες στρώσεις και καθαρή παράδοση.
            Εργάζεται με μεθοδικότητα και σεβασμό στον χώρο.
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Εφαρμογή</span>
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Ακμές</span>
<span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">Παράδοση</span>
</div>
</div>
</div>
<div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="max-w-2xl">
<p className="text-base font-semibold tracking-tight text-stone-950 sm:text-lg" style={{fontFamily: 'Noto Serif, serif'}}>Θέλετε να μιλήσουμε για τον χώρο σας;</p>
<p className="mt-1 text-sm text-stone-700">Ένα σύντομο τηλεφώνημα αρκεί για να κλείσουμε δωρεάν εκτίμηση.</p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800" href="tel:+3069XXXXXXXX">
<iconify-icon height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Καλέστε τώρα
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50" href="#quote">
<iconify-icon height="18" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Online Προσφορά
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-stone-200 bg-white" id="contact">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl" style={{fontFamily: 'Noto Serif, serif'}}>Επικοινωνήστε μαζί μας</h2>
<p className="mt-2 text-sm text-stone-700 sm:text-base">Επιλέξτε τον τρόπο που σας εξυπηρετεί. Το τηλέφωνο είναι ο πιο άμεσος.</p>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-12">

<div className="lg:col-span-5">
<div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xl font-semibold tracking-tight text-stone-950 sm:text-2xl" style={{fontFamily: 'Noto Serif, serif'}}>Καλέστε τώρα</p>
<p className="mt-2 text-sm text-stone-700">Μιλήστε απευθείας μαζί μας για εκτίμηση και διαθέσιμες ημερομηνίες.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-3">
<iconify-icon height="26" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
</div>
<a className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-stone-900 px-6 py-5 text-lg font-semibold text-white shadow-sm hover:bg-stone-800" href="tel:+3069XXXXXXXX">
<iconify-icon height="22" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
              69ΧΧ ΧΧΧ ΧΧΧ
            </a>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-stone-200 bg-white p-4">
<p className="text-xs font-semibold text-stone-800">Δωρεάν εκτίμηση</p>
<p className="mt-1 text-xs text-stone-600">Στον χώρο σας, με προτάσεις &amp; υλικά.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-4">
<p className="text-xs font-semibold text-stone-800">Γραπτή προσφορά</p>
<p className="mt-1 text-xs text-stone-600">Καθαρά βήματα, καθαρό κόστος.</p>
</div>
</div>
<p className="mt-4 text-xs text-stone-600">
              Αν δεν απαντήσουμε άμεσα, αφήστε το τηλέφωνό σας και θα σας καλέσουμε.
            </p>
</div>

<div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
<div className="flex items-start gap-3">
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-2">
<iconify-icon height="22" icon="solar:flame-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-base font-semibold tracking-tight text-stone-950 sm:text-lg" style={{fontFamily: 'Noto Serif, serif'}}>Κλείστε σήμερα δωρεάν εκτίμηση</p>
<p className="mt-2 text-sm text-stone-700">
                  Οι διαθέσιμες ημερομηνίες κλείνονται γρήγορα, ειδικά πριν τις γιορτές και το καλοκαίρι.
                </p>
<div className="mt-4 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800" href="tel:+3069XXXXXXXX">
<iconify-icon height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Καλέστε τώρα
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50" href="#quote">
<iconify-icon height="18" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Άμεση online προσφορά
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7" id="quote">
<div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xl font-semibold tracking-tight text-stone-950 sm:text-2xl" style={{fontFamily: 'Noto Serif, serif'}}>Online Προσφορά σε 2 λεπτά</p>
<p className="mt-2 text-sm text-stone-700">Απαντήστε σε λίγες ερωτήσεις και θα έχετε μια ενδεικτική εκτίμηση. Για τελική τιμή, γίνεται δωρεάν επίσκεψη.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
<iconify-icon height="26" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
</div>
<div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<div className="flex items-center justify-between gap-4">
<p className="text-xs font-semibold text-stone-700">Πρόοδος</p>
<p className="text-xs font-semibold text-stone-900" id="stepLabel">Βήμα 1 από 4</p>
</div>
<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
<div className="h-2 rounded-full bg-stone-900" id="progressBar" style={{width: '25%'}}></div>
</div>
</div>
<form className="mt-6" id="quoteForm">

<div className="grid gap-5">

<div className="quoteStep" data-step="1">
<p className="text-sm font-semibold text-stone-900">Τύπος έργου</p>
<div className="mt-3 grid gap-3 sm:grid-cols-2">
<label className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm hover:bg-stone-50">
<input className="mt-1" name="jobType" required="" type="radio" value="home" />
<div>
<p className="text-sm font-semibold text-stone-900">Κατοικία</p>
<p className="mt-1 text-xs text-stone-600">Διαμέρισμα, μονοκατοικία, εξοχικό.</p>
</div>
</input></label>
<label className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm hover:bg-stone-50">
<input className="mt-1" name="jobType" required="" type="radio" value="pro"/>
<div>
<p className="text-sm font-semibold text-stone-900">Επαγγελματικός χώρος</p>
<p className="mt-1 text-xs text-stone-600">Γραφείο, κατάστημα, Airbnb/ενοικιαζόμενο.</p>
</div>
</label>
</div>
</div>

<div className="quoteStep hidden" data-step="2">
<p className="text-sm font-semibold text-stone-900">Εσωτερικός ή εξωτερικός χώρος</p>
<div className="mt-3 grid gap-3 sm:grid-cols-2">
<label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm hover:bg-stone-50">
<input className="mt-1" name="spaceType" required="" type="radio" value="inside"/>
<div>
<p className="text-sm font-semibold text-stone-900">Εσωτερικός</p>
<p className="mt-1 text-xs text-stone-600">Τοίχοι, οροφές, μικροεπισκευές.</p>
</div>
</label>
<label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm hover:bg-stone-50">
<input className="mt-1" name="spaceType" required="" type="radio" value="outside"/>
<div>
<p className="text-sm font-semibold text-stone-900">Εξωτερικός</p>
<p className="mt-1 text-xs text-stone-600">Πρόσοψη, μπαλκόνια, αντοχή σε ήλιο/υγρασία.</p>
</div>
</label>
</div>
</div>

<div className="quoteStep hidden" data-step="3">
<p className="text-sm font-semibold text-stone-900">Περίπου τετραγωνικά (m²)</p>
<p className="mt-1 text-xs text-stone-600">Ενδεικτικά. Η τελική τιμή προκύπτει μετά από δωρεάν εκτίμηση.</p>
<div className="mt-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs font-semibold text-stone-700">Επιφάνεια</p>
<p className="text-sm font-semibold text-stone-900"><span id="sqmLabel">80</span> m²</p>
</div>
<input className="mt-3 w-full accent-stone-800" id="sqm" max="250" min="20" name="sqm" type="range" value="80"/>
<div className="mt-2 flex justify-between text-xs text-stone-500">
<span>20</span><span>250</span>
</div>
</div>
<div className="mt-3 grid gap-3 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Περιοχή</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="quoteArea" placeholder="π.χ. Ευκαρπία, Τούμπα, Ν. Καλλικράτεια" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Χρονικό διάστημα</span>
<select className="w-full appearance-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-300" name="timing" required="">
<option selected="" value="">Επιλέξτε…</option>
<option value="soon">Μέσα στις επόμενες 2–3 εβδομάδες</option>
<option value="month">Μέσα στον επόμενο μήνα</option>
<option value="later">Σε 2+ μήνες</option>
</select>
</label>
</div>
</div>

<div className="quoteStep hidden" data-step="4">
<p className="text-sm font-semibold text-stone-900">Στοιχεία επικοινωνίας</p>
<p className="mt-1 text-xs text-stone-600">Θα σας στείλουμε την ενδεικτική εκτίμηση και θα προτείνουμε δωρεάν επίσκεψη.</p>
<div className="mt-3 grid gap-3 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Ονοματεπώνυμο</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="fullName" placeholder="π.χ. Μαρία Ιωάννου" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Τηλέφωνο</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" inputmode="tel" name="contactPhone" placeholder="π.χ. 69ΧΧ ΧΧΧ ΧΧΧ" required=""/>
</label>
<label className="grid gap-1 sm:col-span-2">
<span className="text-xs font-semibold text-stone-700">Email (προαιρετικό)</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="email" placeholder="π.χ. onoma@email.gr" type="email"/>
</label>
<label className="grid gap-1 sm:col-span-2">
<span className="text-xs font-semibold text-stone-700">Σχόλιο (προαιρετικό)</span>
<textarea className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="notes" placeholder="π.χ. Υπάρχουν υγρασίες, θέλουμε αλλαγή χρώματος, χρειάζονται επισκευές..." rows="4"></textarea>
</label>
</div>
<div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4">
<p className="text-xs font-semibold text-stone-800">Ενδεικτική εκτίμηση</p>
<p className="mt-2 text-sm font-semibold text-stone-950" id="estimateLine"></p>
<p className="mt-1 text-xs text-stone-600">Η τελική τιμή εξαρτάται από προετοιμασία, πρόσβαση, υλικά και κατάσταση επιφανειών.</p>
</div>
</div>
</div>

<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="hidden inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50" id="prevBtn" type="button">
<iconify-icon height="18" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Πίσω
                </button>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:flex-1">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50" href="tel:+3069XXXXXXXX">
<iconify-icon height="18" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Προτιμώ τηλέφωνο
                  </a>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800" id="nextBtn" type="button">
                    Επόμενο
                    <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="hidden inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800" id="submitBtn" type="submit">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Αποστολή
                  </button>
</div>
</div>
<p className="mt-4 hidden rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800" id="quoteMsg"></p>
</form>
</div>

<div className="mt-6 rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xl font-semibold tracking-tight text-stone-950 sm:text-2xl" style={{fontFamily: 'Noto Serif, serif'}}>Στείλτε μας μήνυμα</p>
<p className="mt-2 text-sm text-stone-700">Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.</p>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-3">
<iconify-icon height="26" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
</div>
<form className="mt-5 grid gap-3" id="contactForm">
<div className="grid gap-3 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Ονοματεπώνυμο</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="cname" placeholder="π.χ. Δημήτρης Κ." required=""/>
<span className="text-xs font-semibold text-stone-700">Τηλέφωνο</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" inputmode="tel" name="cphone" placeholder="π.χ. 69ΧΧ ΧΧΧ ΧΧΧ" required=""/>
</label>
</div>
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Θέμα</span>
<input className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="csubject" placeholder="π.χ. Βάψιμο διαμερίσματος, εξωτερική πρόσοψη..."/>
</label>
<label className="grid gap-1">
<span className="text-xs font-semibold text-stone-700">Μήνυμα</span>
<textarea className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300" name="cmessage" placeholder="Γράψτε λίγες λεπτομέρειες (περιοχή, περίπου τ.μ., προθεσμία, αν υπάρχουν επισκευές)..." required="" rows="5"></textarea>
</label>
<div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800 transition-colors" type="submit">
<iconify-icon height="18" icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Αποστολή μηνύματος
                </button>
<p className="text-xs text-stone-600">
                  Επείγον; <a className="font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4" href="tel:+3069XXXXXXXX">καλέστε μας</a>.
                </p>
</div>
<p className="hidden rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800" id="contactMsg"></p>
</form>
</div>
</div>
</div>

<div className="mt-10 rounded-3xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
<div className="max-w-3xl">
<p className="text-base font-semibold tracking-tight text-stone-950 sm:text-lg" style={{fontFamily: 'Noto Serif, serif'}}>Μικρά γράμματα (με διαφάνεια)</p>
<p className="mt-2 text-sm text-stone-700">
              Η online προσφορά είναι <span className="font-semibold">ενδεικτική</span> και υπολογίζεται βάσει τ.μ. και βασικών παραμέτρων.
              Για τελική τιμή απαιτείται δωρεάν αυτοψία (κατάσταση επιφανειών, πρόσβαση, υλικά, ύψη, προστασίες).
            </p>
</div>
<div className="rounded-2xl border border-stone-200 bg-white p-4">
<p className="text-xs font-semibold text-stone-800">Ωράριο</p>
<p className="mt-1 text-xs text-stone-600">Δευ–Σαβ: 09:00–19:00</p>
<p className="mt-2 text-xs font-semibold text-stone-800">Περιοχές</p>
<p className="mt-1 text-xs text-stone-600">Θεσσαλονίκη • Χαλκιδική</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-stone-200 bg-white pb-24 sm:pb-0">
<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-stone-50">
<span className="font-semibold tracking-tight text-stone-900" style={{fontFamily: 'Noto Serif, serif'}}>ΒΣ</span>
</div>
<div className="leading-tight">
<p ="font-family:="" className="text-sm font-semibold text-stone-900 tracking-tight" noto="" serif,="" serif;"="">Βαψίματα Θεσσαλονίκης</p>
<p className="text-xs text-stone-600">Κατοικίες &amp; επαγγελματικοί χώροι</p>
</div>
</div>
<p className="mt-4 text-sm text-stone-700 max-w-md">
            Παραδοσιακή, αξιόπιστη δουλειά με σύγχρονη οργάνωση. Καθαρή προετοιμασία, ποιοτικά υλικά, συνεπές χρονοδιάγραμμα.
          </p>
<div className="mt-5 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-stone-800 transition-colors" href="tel:+3069XXXXXXXX">
<iconify-icon height="16" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              69ΧΧ ΧΧΧ ΧΧΧ
            </a>
<a className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm hover:bg-stone-50 transition-colors" href="#quote">
<iconify-icon height="16" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Online προσφορά
            </a>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-6 sm:grid-cols-3">
<div>
<p className="text-xs font-semibold text-stone-800">Υπηρεσίες</p>
<ul className="mt-3 space-y-2 text-sm text-stone-700">
<li className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-stone-400"></span>Εσωτερικά βαψίματα</li>
<li className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-stone-400"></span>Εξωτερικές προσόψεις</li>
<li className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-stone-400"></span>Στοκαρίσματα/επισκευές</li>
<li className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-stone-400"></span>Επαγγελματικοί χώροι</li>
</ul>
</div>
<div>
<p className="text-xs font-semibold text-stone-800">Πληροφορίες</p>
<ul className="mt-3 space-y-2 text-sm text-stone-700">
<li><a className="hover:underline underline-offset-4 decoration-stone-300" href="#process">Πώς δουλεύουμε</a></li>
<li><a className="hover:underline underline-offset-4 decoration-stone-300" href="#gallery">Έργα</a></li>
<li><a className="hover:underline underline-offset-4 decoration-stone-300" href="#projects">Χάρτης έργων</a></li>
<li><a className="hover:underline underline-offset-4 decoration-stone-300" href="#contact">Επικοινωνία</a></li>
</ul>
</div>
<div>
<p className="text-xs font-semibold text-stone-800">Στοιχεία</p>
<div className="mt-3 space-y-3 text-sm text-stone-700">
<div className="flex items-start gap-2">
<iconify-icon height="18" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Θεσσαλονίκη &amp; Χαλκιδική</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon height="18" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Δευ–Σαβ 09:00–19:00</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon height="18" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Γραπτή προσφορά &amp; συμφωνητικό</span>
</div>
</div>
</div>
</div>
<div className="mt-8 rounded-3xl border border-stone-200 bg-stone-50 p-5 sm:p-6">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm font-semibold text-stone-900">Θέλετε γρήγορη απάντηση;</p>
<p className="mt-1 text-xs text-stone-600">Πατήστε για κλήση ή υπολογίστε online προσφορά.</p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-stone-800 transition-colors" href="tel:+3069XXXXXXXX">
<iconify-icon height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Κλήση
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50 transition-colors" href="#quote">
<iconify-icon height="18" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Online προσφορά
                </a>
</div>
</div>
</div>
<p className="mt-6 text-xs text-stone-500">
            © <span id="year"></span> Βαψίματα Θεσσαλονίκης. Όλα τα δικαιώματα διατηρούνται.
          </p>
</div>
</div>
</div>
</footer>


    </>
  );
}
