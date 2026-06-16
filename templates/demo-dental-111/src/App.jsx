import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({ attrs: { "stroke-width": "1.5" } });

    const yearEl = document.getElementById('year');
    yearEl.textContent = new Date().getFullYear();

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Widget toggle + open on Book actions
    const floatingWidget = document.getElementById('floatingWidget');
    const widgetBody = document.getElementById('widgetBody');
    const toggleWidget = document.getElementById('toggleWidget');
    const openBooking = document.getElementById('openBooking');
    const heroBook = document.getElementById('heroBook');
    const contactBook = document.getElementById('contactBook');

    let widgetOpen = false;
    const setWidgetOpen = (open) => {
      widgetOpen = open;
      widgetBody.classList.toggle('hidden', !open);
    };

    // Start collapsed
    setWidgetOpen(false);

    toggleWidget.addEventListener('click', () => setWidgetOpen(!widgetOpen));
    const openWidgetAndPulse = () => {
      setWidgetOpen(true);
      floatingWidget.scrollIntoView({ block: 'end', behavior: 'smooth' });
      floatingWidget.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-0.25rem)' },
          { transform: 'translateY(0)' }
        ],
        { duration: 500, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
      );
    };
    openBooking.addEventListener('click', openWidgetAndPulse);
    heroBook.addEventListener('click', openWidgetAndPulse);
    contactBook.addEventListener('click', openWidgetAndPulse);

    // Horizontal parallax scroll
    const hScroll = document.getElementById('hScroll');
    const cards = Array.from(document.querySelectorAll('.interior-card'));
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const applyParallax = () => {
      const rect = hScroll.getBoundingClientRect();
      const scrollLeft = hScroll.scrollLeft;
      cards.forEach(card => {
        const depth = parseFloat(card.getAttribute('data-depth') || '0.4');
        const img = card.querySelector('.parallax-img');
        if (!img) return;
        const cardOffset = card.offsetLeft - scrollLeft;
        const centerDelta = (cardOffset + card.clientWidth / 2) - rect.width / 2;
        const translate = Math.max(-28, Math.min(28, -centerDelta * depth * 0.04));
        img.style.transform = `translate3d(${translate}%, 0, 0) scale(1.08)`;
        img.style.transition = prefersReduced ? 'none' : 'transform 240ms ease-out';
      });
    };

    if (!prefersReduced) {
      hScroll.addEventListener('scroll', () => requestAnimationFrame(applyParallax), { passive: true });
      window.addEventListener('resize', () => requestAnimationFrame(applyParallax), { passive: true });
      requestAnimationFrame(applyParallax);
    }

    // Drag to scroll
    let isDown = false, startX = 0, scrollStart = 0;
    hScroll.addEventListener('pointerdown', (e) => {
      isDown = true;
      startX = e.clientX;
      scrollStart = hScroll.scrollLeft;
      hScroll.setPointerCapture(e.pointerId);
    });
    hScroll.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      hScroll.scrollLeft = scrollStart - dx;
    });
    hScroll.addEventListener('pointerup', () => { isDown = false; });
    hScroll.addEventListener('pointercancel', () => { isDown = false; });

    // Scroll buttons
    document.getElementById('scrollLeft').addEventListener('click', () => {
      hScroll.scrollBy({ left: -Math.round(hScroll.clientWidth * 0.8), behavior: 'smooth' });
    });
    document.getElementById('scrollRight').addEventListener('click', () => {
      hScroll.scrollBy({ left: Math.round(hScroll.clientWidth * 0.8), behavior: 'smooth' });
    });

    // Stagger services on enter
    const serviceCards = Array.from(document.querySelectorAll('.service-card'));
    serviceCards.forEach((card) => {
      card.classList.add('opacity-0', 'translate-y-3');
      card.style.transition = 'transform 700ms cubic-bezier(0.2,0.8,0.2,1), opacity 700ms cubic-bezier(0.2,0.8,0.2,1)';
    });

    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = serviceCards.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 90}ms`;
        entry.target.classList.remove('opacity-0', 'translate-y-3');
      });
    }, { threshold: 0.15 });

    serviceCards.forEach(card => servicesObserver.observe(card));

    // Testimonials fade in
    const testimonials = Array.from(document.querySelectorAll('.testimonial'));
    testimonials.forEach((t) => {
      t.style.transition = 'transform 800ms cubic-bezier(0.2,0.8,0.2,1), opacity 800ms cubic-bezier(0.2,0.8,0.2,1)';
    });

    const tObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('opacity-0', 'translate-y-3');
      });
    }, { threshold: 0.18 });

    testimonials.forEach(t => tObserver.observe(t));

    // Reservation system (calendar + free intervals)
    const monthLabel = document.getElementById('monthLabel');
    const calendarGrid = document.getElementById('calendarGrid');
    const slotsGrid = document.getElementById('slotsGrid');
    const slotHint = document.getElementById('slotHint');
    const selectedSummary = document.getElementById('selectedSummary');
    const confirmBtn = document.getElementById('confirmBtn');
    const availabilityBadge = document.getElementById('availabilityBadge');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    const treatmentSelect = document.getElementById('treatmentSelect');
    const doctorSelect = document.getElementById('doctorSelect');

    const state = {
      viewDate: new Date(),
      selectedDateKey: null,
      selectedSlot: null,
      selectedDoctor: doctorSelect.value,
      selectedTreatment: treatmentSelect.value,
      schedule: {}
    };

    const pad = (n) => String(n).padStart(2, '0');
    const dateKey = (d) => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

    function mulberry32(a){ return function(){ let t=a+=0x6D2B79F5; t=Math.imul(t^t>>>15,t|1); t^=t+Math.imul(t^t>>>7,t|61); return ((t^t>>>14)>>>0)/4294967296; } }
    function seededFrom(key, extra='') {
      let h = 2166136261;
      const s = key + '|' + extra;
      for (let i=0; i<s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
      return h >>> 0;
    }

    function buildDaySchedule(key, doctor, treatment) {
      const seed = seededFrom(key, doctor + ':' + treatment);
      const rand = mulberry32(seed);
      const slots = [];
      for (let hour = 9; hour <= 19; hour++) {
        for (let m of [0, 30]) {
          if (hour === 19 && m === 30) continue;
          slots.push(`${pad(hour)}:${pad(m)}`);
        }
      }

      const d = new Date(key + "T12:00:00");
      const weekday = (d.getDay() + 6) % 7; // Mon=0
      const base = weekday < 5 ? 0.52 : 0.68;
      const busy = new Set();
      slots.forEach(s => {
        if (rand() < base) busy.add(s);
      });

      if (weekday < 5) {
        const ensure = 6;
        let attempts = 0;
        while ((slots.length - busy.size) < ensure && attempts < 200) {
          busy.delete(slots[Math.floor(rand() * slots.length)]);
          attempts++;
        }
      }

      const free = slots.filter(s => !busy.has(s));
      return { busy: Array.from(busy), free };
    }

    function getDaySchedule(key) {
      const doctor = state.selectedDoctor;
      const treatment = state.selectedTreatment;
      const cacheKey = key + '|' + doctor + '|' + treatment;
      if (!state.schedule[cacheKey]) state.schedule[cacheKey] = buildDaySchedule(key, doctor, treatment);
      return state.schedule[cacheKey];
    }

    function renderMonth() {
      const d = new Date(state.viewDate);
      d.setDate(1);
      const month = d.getMonth();
      const year = d.getFullYear();

      const fmt = new Intl.DateTimeFormat('ro-RO', { month: 'long', year: 'numeric' });
      monthLabel.textContent = fmt.format(new Date(year, month, 1));

      const firstDay = new Date(year, month, 1);
      const startOffset = (firstDay.getDay() + 6) % 7;
      const startDate = new Date(year, month, 1 - startOffset);

      calendarGrid.innerHTML = '';
      const todayKey = dateKey(new Date());

      for (let i = 0; i < 42; i++) {
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);

        const inMonth = day.getMonth() === month;
        const key = dateKey(day);
        const isToday = key === todayKey;
        const isSelected = key === state.selectedDateKey;

        const schedule = getDaySchedule(key);
        const freeCount = schedule.free.length;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = [
          "group relative flex aspect-square items-center justify-center rounded-xl border text-sm font-semibold shadow-sm transition",
          inMonth ? "bg-white/70" : "bg-slate-50/70",
          "border-slate-200",
          "hover:bg-white",
          isSelected ? "ring-4 ring-sky-500/20 border-sky-300" : "",
        ].join(' ');

        btn.setAttribute('aria-label', `Alege ${key}`);

        const badgeClass = freeCount === 0
          ? "bg-slate-200"
          : freeCount < 6
            ? "bg-amber-400"
            : "bg-sky-400";

        btn.innerHTML = `
          <span class="${inMonth ? "text-slate-900" : "text-slate-400"}">${day.getDate()}</span>
          <span class="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${badgeClass}"></span>
          ${isToday ? `<span class="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-sky-700">Azi</span>` : ``}
        `;

        btn.addEventListener('click', () => {
          state.selectedDateKey = key;
          state.selectedSlot = null;
          confirmBtn.disabled = true;
          availabilityBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-slate-300"></span> În așteptare`;
          selectedSummary.textContent = '—';
          renderMonth();
          renderSlots();
        });

        calendarGrid.appendChild(btn);
      }
    }

    function renderSlots() {
      slotsGrid.innerHTML = '';
      if (!state.selectedDateKey) {
        slotHint.textContent = 'Alege mai întâi o zi';
        return;
      }

      const schedule = getDaySchedule(state.selectedDateKey);
      const free = schedule.free;

      slotHint.textContent = free.length ? `${free.length} intervale libere` : `Nu există intervale libere`;

      const makeSlotBtn = (time, enabled) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        const selected = state.selectedSlot === time;
        btn.className = [
          "inline-flex items-center justify-center rounded-xl border px-2 py-2 text-xs font-semibold shadow-sm transition",
          enabled ? "bg-white/80 hover:bg-white text-slate-900 border-slate-200" : "bg-slate-50 text-slate-400 border-slate-200/80 cursor-not-allowed",
          selected ? "ring-4 ring-sky-500/20 border-sky-300 bg-white" : ""
        ].join(' ');
        btn.textContent = time;

        if (enabled) {
          btn.addEventListener('click', () => {
            state.selectedSlot = time;
            confirmBtn.disabled = false;

            const fmt = new Intl.DateTimeFormat('ro-RO', { weekday: 'short', month: 'short', day: 'numeric' });
            const d = new Date(state.selectedDateKey + "T" + time + ":00");
            selectedSummary.textContent = `${fmt.format(d)} • ${time}`;

            availabilityBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-sky-400"></span> Liber`;
            renderSlots();
          });
        }
        return btn;
      };

      const all = [];
      for (let hour = 9; hour <= 19; hour++) {
        for (let m of [0, 30]) {
          if (hour === 19 && m === 30) continue;
          all.push(`${pad(hour)}:${pad(m)}`);
        }
      }
      const freeSet = new Set(free);
      all.forEach(t => slotsGrid.appendChild(makeSlotBtn(t, freeSet.has(t))));
    }

    prevMonth.addEventListener('click', () => {
      state.viewDate = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth() - 1, 1);
      renderMonth();
      renderSlots();
    });
    nextMonth.addEventListener('click', () => {
      state.viewDate = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth() + 1, 1);
      renderMonth();
      renderSlots();
    });

    treatmentSelect.addEventListener('change', () => {
      state.selectedTreatment = treatmentSelect.value;
      state.selectedSlot = null;
      confirmBtn.disabled = true;
      availabilityBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-slate-300"></span> În așteptare`;
      selectedSummary.textContent = '—';
      renderMonth();
      renderSlots();
    });

    doctorSelect.addEventListener('change', () => {
      state.selectedDoctor = doctorSelect.value;
      state.selectedSlot = null;
      confirmBtn.disabled = true;
      availabilityBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-slate-300"></span> În așteptare`;
      selectedSummary.textContent = '—';
      renderMonth();
      renderSlots();
    });

    confirmBtn.addEventListener('click', () => {
      if (!state.selectedDateKey || !state.selectedSlot) return;
      const d = new Date(state.selectedDateKey + "T" + state.selectedSlot + ":00");
      const fmt = new Intl.DateTimeFormat('ro-RO', { weekday: 'long', month: 'long', day: 'numeric' });

      availabilityBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-emerald-400"></span> Rezervat`;
      confirmBtn.disabled = true;

      selectedSummary.textContent = `${fmt.format(d)} • ${state.selectedSlot}`;

      const cacheKey = state.selectedDateKey + '|' + state.selectedDoctor + '|' + state.selectedTreatment;
      const sched = getDaySchedule(state.selectedDateKey);
      sched.free = sched.free.filter(s => s !== state.selectedSlot);
      sched.busy = Array.from(new Set([...(sched.busy || []), state.selectedSlot]));
      state.schedule[cacheKey] = sched;

      renderSlots();

      floatingWidget.animate(
        [
          { boxShadow: '0 20px 60px -25px rgba(2,6,23,0.35)' },
          { boxShadow: '0 30px 90px -35px rgba(16,185,129,0.35)' },
          { boxShadow: '0 20px 60px -25px rgba(2,6,23,0.35)' }
        ],
        { duration: 900, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
      );

      showToast(`Rezervat: ${fmt.format(d)} la ${state.selectedSlot}`);
      if (window.innerWidth < 640) setWidgetOpen(false);
    });

    // Timezone label
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneLabel = document.getElementById('timezoneLabel');
    timezoneLabel.textContent = tz ? `Ora locală • ${tz}` : 'Ora locală';

    // Toast system
    const toastRoot = document.createElement('div');
    toastRoot.className = 'fixed left-1/2 top-4 z-[80] -translate-x-1/2 px-4 w-full max-w-md pointer-events-none';
    toastRoot.setAttribute('aria-live', 'polite');
    toastRoot.setAttribute('aria-atomic', 'true');
    document.body.appendChild(toastRoot);

    function showToast(message, variant = 'success') {
      const isError = variant === 'error';
      const ring = isError ? 'ring-rose-200 bg-rose-100' : 'ring-emerald-200 bg-emerald-100';
      const title = isError ? 'Eroare' : 'Programare confirmată';
      const icon = isError ? 'x-circle' : 'check-circle-2';

      const el = document.createElement('div');
      el.className = 'pointer-events-none mt-2 rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-xl px-4 py-3 shadow-[0_18px_50px_-25px_rgba(2,6,23,0.45)]';
      el.innerHTML = `
        <div class="flex items-start gap-3">
          <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl ${ring} ring-1">
            <i data-lucide="${icon}" class="h-5 w-5 text-slate-900"></i>
          </span>
          <div class="min-w-0">
            <p class="text-sm font-semibold text-slate-900 tracking-tight">${title}</p>
            <p class="mt-0.5 text-sm text-slate-600">${message}</p>
          </div>
        </div>
      `;
      toastRoot.appendChild(el);
      lucide.createIcons({ attrs: { "stroke-width": "1.5" } });

      el.animate(
        [
          { opacity: 0, transform: 'translateY(-0.5rem) scale(0.98)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' }
        ],
        { duration: 220, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
      );

      setTimeout(() => {
        el.animate(
          [
            { opacity: 1, transform: 'translateY(0) scale(1)' },
            { opacity: 0, transform: 'translateY(-0.5rem) scale(0.98)' }
          ],
          { duration: 200, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
        ).onfinish = () => el.remove();
      }, 2800);
    }

    // Accessibility: ESC closes mobile menu and collapses widget
    window.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      mobileMenu?.classList.add('hidden');
      setWidgetOpen(false);
    });

    // Contact form: configurable endpoint (empty by default)
    const CONTACT_FORM_ENDPOINT = ""; // e.g. "https://your-domain.com/api/contact" or a form service endpoint
    const contactForm = document.getElementById('contactForm');
    const contactSubmit = document.getElementById('contactSubmit');

    if (CONTACT_FORM_ENDPOINT) contactForm.setAttribute('action', CONTACT_FORM_ENDPOINT);

    contactForm.addEventListener('submit', async (e) => {
      // If no endpoint is configured, stop and explain via toast
      if (!CONTACT_FORM_ENDPOINT) {
        e.preventDefault();
        showToast('Nu există un endpoint configurat pentru trimiterea emailului. Setează CONTACT_FORM_ENDPOINT.', 'error');
        return;
      }

      e.preventDefault();

      const formData = new FormData(contactForm);
      contactSubmit.disabled = true;
      contactSubmit.classList.add('opacity-50');

      try {
        const res = await fetch(CONTACT_FORM_ENDPOINT, {
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-4 right-4 z-[60] w-[min(24rem,calc(100vw-2rem))] max-w-sm rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_-25px_rgba(2,6,23,0.35)]" id="floatingWidget">
<div className="flex items-center justify-between gap-3 p-4">
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900">Programează-te</p>
<p className="text-sm text-slate-600">Vezi disponibilitatea live în câteva secunde</p>
</div>
<button aria-label="Comută widgetul de programare" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:bg-white transition" id="toggleWidget">
<i className="h-5 w-5" data-lucide="calendar-clock"></i>
</button>
</div>
<div className="hidden border-t border-slate-200/70 p-4" id="widgetBody">
<div className="grid grid-cols-1 gap-3">

<div className="rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 ring-1 ring-sky-200">
<i className="h-5 w-5 text-slate-900" data-lucide="info"></i>
</span>
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Demo local</p>
<p className="mt-1 text-sm text-slate-600">
                Selecțiile din acest widget sunt doar pe dispozitivul tău. Administratorii nu le văd până când conectezi un sistem real (server / calendar / CRM).
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-2">
<label className="text-xs font-medium text-slate-700">Tratament</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none ring-sky-500/20 focus:ring-4" id="treatmentSelect">
<option value="consult">Consultație</option>
<option value="cleaning">Curățare &amp; igienizare</option>
<option value="fillings">Tratament carii</option>
<option value="ortho">Ortodonție</option>
<option value="implants">Implanturi</option>
<option value="surgery">Chirurgie</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="grid grid-cols-1 gap-2">
<label className="text-xs font-medium text-slate-700">Luna</label>
<div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-2 py-2 shadow-sm">
<button aria-label="Luna anterioară" className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-50 transition" id="prevMonth">
<i className="h-4 w-4 text-slate-700" data-lucide="chevron-left"></i>
</button>
<div className="min-w-0 text-center">
<p className="text-sm font-semibold text-slate-900 tracking-tight" id="monthLabel"></p>
<p className="text-xs text-slate-600" id="timezoneLabel">Ora locală</p>
</div>
<button aria-label="Luna următoare" className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-50 transition" id="nextMonth">
<i className="h-4 w-4 text-slate-700" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 gap-2">
<label className="text-xs font-medium text-slate-700">Medic</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none ring-sky-500/20 focus:ring-4" id="doctorSelect">
<option value="any">Oricare disponibil</option>
<option value="dr-a">Dr. A. Smirnova</option>
<option value="dr-b">Dr. M. Volkov</option>
<option value="dr-c">Dr. E. Petrova</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold text-slate-900">Alege o zi</p>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span> Ocupat
              </span>
<span className="inline-flex items-center gap-1">
<span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span> Liber
              </span>
</div>
</div>
<div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-500">
<div>Lu</div><div>Ma</div><div>Mi</div><div>Jo</div><div>Vi</div><div>Sâ</div><div>Du</div>
</div>
<div className="mt-2 grid grid-cols-7 gap-1" id="calendarGrid"></div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-sm">
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-semibold text-slate-900">Alege o oră</p>
<p className="text-xs text-slate-600" id="slotHint">Alege mai întâi o zi</p>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4" id="slotsGrid"></div>
<div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-white/70 px-3 py-2">
<div className="min-w-0">
<p className="text-xs font-medium text-slate-600">Selectat</p>
<p className="text-sm font-semibold text-slate-900 tracking-tight" id="selectedSummary">—</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700" id="availabilityBadge">
<span className="h-2 w-2 rounded-full bg-slate-300"></span> În așteptare
            </span>
</div>
<button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50" disabled="" id="confirmBtn">
<i className="h-4 w-4" data-lucide="sparkles"></i>
            Confirmă programarea
          </button>
<p className="mt-2 text-xs text-slate-600">
            Vei primi un mesaj de confirmare cu detaliile clinicii.
          </p>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/60 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px--8">
<div className="flex h-16 items-center justify-between gap-4">
<a className="group inline-flex items-center gap-2" href="#home">
<span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-b from-sky-200 to-sky-100 ring-1 ring-sky-200/80 shadow-sm">
<i className="h-5 w-5 text-slate-900" data-lucide="tooth"></i>
</span>
<div className="leading-tight">
<p className="text-sm font-semibold tracking-tight text-slate-900">RS Dent</p>
<p className="text-xs text-slate-600">Clinică modernă</p>
</div>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#services">Servicii</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#interiors">Interioare</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#team">Echipă</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#testimonials">Povești</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition" href="tel:+70000000000">
<i className="h-4 w-4" data-lucide="phone"></i>
            +7 (000) 000-00-00
          </a>
<button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition" id="openBooking">
<i className="h-4 w-4" data-lucide="calendar-plus"></i>
            Programează-te
          </button>
<button aria-label="Deschide meniul" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:bg-white transition" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="hidden pb-4 md:hidden" id="mobileMenu">
<div className="grid gap-2 rounded-2xl border border-slate-200 bg-white/70 p-3">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition" href="#services">Servicii</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition" href="#interiors">Interioare</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition" href="#team">Echipă</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition" href="#testimonials">Povești</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition" href="#contact">Contact</a>
<a className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition inline-flex items-center gap-2" href="tel:+70000000000">
<i className="h-4 w-4" data-lucide="phone"></i>
            Sună la clinică
          </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="home">
<div className="absolute inset-0 -z-10">
<div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-sky-200/70 blur-3xl"></div>
<div className="absolute -bottom-24 right-0 h-72 w-[36rem] rounded-full bg-indigo-200/50 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/60 via-slate-50 to-slate-50"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
<span className="inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
            Stomatologie calmă • Îngrijire de precizie
          </div>
<h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Îmbunătățește-ți zâmbetul într-o clinică creată pentru confort
          </h1>
<p className="mt-4 text-lg text-slate-600">
            Planuri transparente, echipamente moderne și o abordare blândă—gândite pentru timpul și liniștea ta.
          </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition" href="#services">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
              Vezi tratamentele
            </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white transition" id="heroBook">
<i className="h-4 w-4" data-lucide="calendar-check"></i>
              Programează o vizită
            </button>
</div>
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm">
<p className="text-2xl font-semibold tracking-tight text-slate-900">5.000+</p>
<p className="mt-1 text-sm text-slate-600">pacienți tratați cu grijă</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm">
<p className="text-2xl font-semibold tracking-tight text-slate-900">100%</p>
<p className="mt-1 text-sm text-slate-600">instrumente &amp; protocoale moderne</p>
</div>
<div className="hidden rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm sm:block">
<p className="text-2xl font-semibold tracking-tight text-slate-900">În aceeași zi</p>
<p className="mt-1 text-sm text-slate-600">intervale când există disponibilitate</p>
</div>
</div>
</div>
<div className="relative">
<div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-100 via-white to-indigo-100 shadow-[0_30px_80px_-40px_rgba(2,6,23,0.45)]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.25),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.2),transparent_40%)]"></div>
<div className="relative p-6 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900">Prima ta vizită</p>
<p className="mt-1 text-sm text-slate-600">Consultație + diagnostic, cu un plan clar.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2">
<i className="h-4 w-4 text-slate-700" data-lucide="shield-check"></i>
<span className="text-xs font-medium text-slate-700">Steril &amp; sigur</span>
</div>
</div>
<div className="mt-6 grid gap-3">
<div className="group rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 ring-1 ring-sky-200">
<i className="h-5 w-5 text-slate-900" data-lucide="scan-face"></i>
</span>
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900">Diagnostic blând</p>
<p className="text-sm text-slate-600">Imagistică + analiză în câteva minute.</p>
</div>
</div>
</div>
<div className="group rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 ring-1 ring-indigo-200">
<i className="h-5 w-5 text-slate-900" data-lucide="clipboard-list"></i>
</span>
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900">Plan personalizat</p>
<p className="text-sm text-slate-600">Opțiuni, durată și costuri explicate clar.</p>
</div>
</div>
</div>
<div className="group rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 ring-1 ring-slate-200">
<i className="h-5 w-5 text-slate-900" data-lucide="sparkles"></i>
</span>
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900">Confort pe primul loc</p>
<p className="text-sm text-slate-600">Mediu calm și tehnici delicate.</p>
</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 45 min consultație
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Centru
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="credit-card"></i> Plată flexibilă
                </span>
</div>
</div>
</div>
<div className="pointer-events-none absolute -bottom-6 -left-6 hidden rotate-[-8deg] rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur-lg sm:block">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 ring-1 ring-sky-200">
<i className="h-5 w-5 text-slate-900" data-lucide="heart-pulse"></i>
</span>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Prietenos cu anxietatea</p>
<p className="text-sm text-slate-600">Explicăm fiecare pas</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Servicii</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Îngrijire blândă, completă</h2>
<p className="mt-3 text-lg text-slate-600">De la prevenție la proceduri complexe—cu claritate, confort și rezultate.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white transition" href="#interiors">
<i className="h-4 w-4" data-lucide="move-right"></i>
          Vezi clinica
        </a>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<article className="service-card group rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
<div className="flex items-start justify-between gap-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 ring-1 ring-sky-200">
<i className="h-6 w-6 text-slate-900" data-lucide="sparkle"></i>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="timer"></i> 30–60 min
            </span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Prevenție &amp; detartraj</h3>
<p className="mt-2 text-sm text-slate-600">
            Detartraj cu ultrasunete, airflow și recomandări de igienă—cea mai simplă cale spre un zâmbet sănătos.
          </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Îndepărtare pete &amp; lustruire delicată</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Protocoale pentru sensibilitate</li>
</ul>
</article>
<article className="service-card group rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
<div className="flex items-start justify-between gap-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 ring-1 ring-indigo-200">
<i className="h-6 w-6 text-slate-900" data-lucide="shield-plus"></i>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="wand-2"></i> Precizie
            </span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Carii &amp; obturații</h3>
<p className="mt-2 text-sm text-slate-600">
            Compozite moderne potrivite nuanței tale—cu izolare atentă și ajustare fină a ocluziei.
          </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Abordare minim invazivă</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Confort pe termen lung</li>
</ul>
</article>
<article className="service-card group rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
<div className="flex items-start justify-between gap-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200">
<i className="h-6 w-6 text-slate-900" data-lucide="align-horizontal-space-around"></i>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="route"></i> 3–18 luni
            </span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Ortodonție</h3>
<p className="mt-2 text-sm text-slate-600">
            Alignere și aparate dentare cu un plan ușor de înțeles—progres urmărit la fiecare vizită.
          </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Aliniere &amp; estetică</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Controale confortabile</li>
</ul>
</article>
<article className="service-card group rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
<div className="flex items-start justify-between gap-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 ring-1 ring-sky-200">
<i className="h-6 w-6 text-slate-900" data-lucide="anchor"></i>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="layers"></i> Complet
            </span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Implantologie</h3>
<p className="mt-2 text-sm text-slate-600">
            Inserare chirurgicală cu plan protetic—funcție, potrivire și aspect natural.
          </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Planificare ghidată &amp; diagnostic</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Recuperare confortabilă</li>
</ul>
</article>
<article className="service-card group rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
<div className="flex items-start justify-between gap-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 ring-1 ring-indigo-200">
<i className="h-6 w-6 text-slate-900" data-lucide="palette"></i>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Luminozitate
            </span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Estetică dentară</h3>
<p className="mt-2 text-sm text-slate-600">
            Albire, bonding și îmbunătățiri subtile—ca să arate natural, ca tine.
          </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Potrivire naturală a nuanței</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Planificare design zâmbet</li>
</ul>
</article>
<article className="service-card group rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white">
<div className="flex items-start justify-between gap-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200">
<i className="h-6 w-6 text-slate-900" data-lucide="scissors"></i>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">
<i className="h-3.5 w-3.5" data-lucide="activity"></i> Atent
            </span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Chirurgie</h3>
<p className="mt-2 text-sm text-slate-600">
            Extracții și proceduri chirurgicale cu instrucțiuni clare de îngrijire—pentru o vindecare sigură.
          </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Anestezie delicată</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-sky-700" data-lucide="check"></i> Plan de recuperare pas cu pas</li>
</ul>
</article>
</div>
</div>
</section>

<section className="py-14 sm:py-16" id="interiors">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Clinica</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Interioare gândite pentru calm</h2>
<p className="mt-3 text-lg text-slate-600">Derulează orizontal—fiecare cadru are profunzime subtilă.</p>
</div>
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
<i className="h-4 w-4" data-lucide="mouse"></i>
<span>Shift + rotiță sau trackpad</span>
</div>
</div>
<div className="mt-8 rounded-3xl border border-slate-200 bg-white/60 shadow-sm overflow-hidden">
<div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-4 py-3 sm:px-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-rose-400"></span>
<span className="inline-flex h-2 w-2 rounded-full bg-amber-400"></span>
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
</div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Tur orizontal</p>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="hand"></i> trage</span>
<span className="text-slate-300">•</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="scroll"></i> derulează</span>
</div>
</div>
<div className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto p-4 sm:p-5" id="hScroll" style={{scrollSnapType: 'x mandatory'}}>
<div className="interior-card relative w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm sm:w-[60%] lg:w-[42%]" data-depth="0.35">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.35),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.25),transparent_50%)]"></div>
<img alt="Recepția clinicii" className="parallax-img h-72 w-full object-cover opacity-90 sm:h-80 lg:h-96" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-sm font-semibold text-white tracking-tight">Recepție &amp; lounge</p>
<p className="mt-1 text-sm text-white/80">Lumină caldă, flux liniștit, orientare clară.</p>
</div>
</div>
<div className="interior-card relative w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm sm:w-[60%] lg:w-[42%]" data-depth="0.55">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.28),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.28),transparent_55%)]"></div>
<img alt="Cabinet de tratament" className="parallax-img h-72 w-full object-cover opacity-90 sm:h-80 lg:h-96" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-sm font-semibold text-white tracking-tight">Cabinet tratament</p>
<p className="mt-1 text-sm text-white/80">Ergonomie, suprafețe curate, grijă atentă.</p>
</div>
</div>
<div className="interior-card relative w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm sm:w-[60%] lg:w-[42%]" data-depth="0.45">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.25),transparent_50%),radial-gradient(circle_at_70%_40%,rgba(148,163,184,0.25),transparent_55%)]"></div>
<img alt="Sterilizare și echipamente" className="parallax-img h-72 w-full object-cover opacity-90 sm:h-80 lg:h-96" src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-sm font-semibold text-white tracking-tight">Sterilizare &amp; echipamente</p>
<p className="mt-1 text-sm text-white/80">Siguranță și precizie, după protocol.</p>
</div>
</div>
<div className="interior-card relative w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm sm:w-[60%] lg:w-[42%]" data-depth="0.65">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(99,102,241,0.25),transparent_55%)]"></div>
<img alt="Cameră de consultație" className="parallax-img h-72 w-full object-cover opacity-90 sm:h-80 lg:h-96" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-sm font-semibold text-white tracking-tight">Consultații</p>
<p className="mt-1 text-sm text-white/80">Un spațiu calm pentru a alege planul potrivit.</p>
</div>
</div>
</div>
<div className="flex items-center justify-between gap-3 border-t border-slate-200/70 px-4 py-3 sm:px-5">
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="h-4 w-4" data-lucide="layers"></i>
<span>Profunzimea se bazează pe viteza de derulare</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Derulează la stânga" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:bg-white transition" id="scrollLeft">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
</button>
<button aria-label="Derulează la dreapta" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:bg-white transition" id="scrollRight">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16" id="team">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Echipă</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Medici care explică fiecare pas</h2>
<p className="mt-3 text-lg text-slate-600">Comunicare clară, mâini sigure și un mediu calm la fiecare vizită.</p>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-200 to-indigo-200 ring-1 ring-slate-200"></div>
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Dr. A. Smirnova</p>
<p className="text-sm text-slate-600">Terapie • Restaurări</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-600">Tratament minim invaziv, confort și rezultate care durează.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Carii</span>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Estetică</span>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-200 to-sky-200 ring-1 ring-slate-200"></div>
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Dr. M. Volkov</p>
<p className="text-sm text-slate-600">Chirurgie • Implanturi</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-600">Chirurgie după protocol și planificare atentă, cu îngrijire post-operatorie.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Implanturi</span>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Chirurgie</span>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-200 to-sky-200 ring-1 ring-slate-200"></div>
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Dr. E. Petrova</p>
<p className="text-sm text-slate-600">Ortodonție • Aliniere</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-600">Alignere și aparate dentare, cu progres măsurabil și ritm prietenos.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Ortodonție</span>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Mușcătură</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Povești</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Povești de succes ale pacienților</h2>
<p className="mt-3 text-lg text-slate-600">Rezultate reale—cu încredere și claritate.</p>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<figure className="testimonial opacity-0 translate-y-3 rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sky-700">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Igienizare</span>
</div>
<blockquote className="mt-4 text-lg text-slate-700">
            „Cea mai calmă programare pe care am avut-o. Au explicat totul înainte să înceapă.”
          </blockquote>
<figcaption className="mt-4 text-sm font-medium text-slate-900">Pacient A.</figcaption>
<p className="text-sm text-slate-600">Mai puțină sensibilitate după igienizare</p>
</figure>
<figure className="testimonial opacity-0 translate-y-3 rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sky-700">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Obturații</span>
</div>
<blockquote className="mt-4 text-lg text-slate-700">
            „Fără grabă, fără presiune. Obturația se simte natural—mușcătura e perfectă.”
          </blockquote>
<figcaption className="mt-4 text-sm font-medium text-slate-900">Pacient B.</figcaption>
<p className="text-sm text-slate-600">Restaurare orientată pe confort</p>
</figure>
<figure className="testimonial opacity-0 translate-y-3 rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-sm">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sky-700">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">Ortodonție</span>
</div>
<blockquote className="mt-4 text-lg text-slate-700">
            „Urmărirea progresului a făcut totul simplu. Zâmbesc fără să mă mai gândesc.”
          </blockquote>
<figcaption className="mt-4 text-sm font-medium text-slate-900">Pacient C.</figcaption>
<p className="text-sm text-slate-600">Aliniere cu verificări clare</p>
</figure>
</div>
</div>
</section>

<section className="py-14 sm:py-16" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-2">
<div className="rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-sm">
<p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Contact</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Vizitează RS Dent</h2>
<p className="mt-3 text-lg text-slate-600">Te ajutăm să alegi planul potrivit și un interval convenabil.</p>
<div className="mt-6 grid gap-3">
<div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 ring-1 ring-sky-200">
<i className="h-5 w-5 text-slate-900" data-lucide="map-pin"></i>
</span>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Adresă</p>
<p className="text-sm text-slate-600">District Central, Aleea Clinicii 10</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 ring-1 ring-indigo-200">
<i className="h-5 w-5 text-slate-900" data-lucide="clock"></i>
</span>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Program</p>
<p className="text-sm text-slate-600">Luni–Sâmbătă: 09:00–20:00 • Duminică: închis</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 ring-1 ring-slate-200">
<i className="h-5 w-5 text-slate-900" data-lucide="phone"></i>
</span>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Telefon</p>
<p className="text-sm text-slate-600">+7 (000) 000-00-00</p>
</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition" id="contactBook">
<i className="h-4 w-4" data-lucide="calendar-plus"></i>
              Programează-te
            </button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white transition" href="#interiors">
<i className="h-4 w-4" data-lucide="images"></i>
              Tur interioare
            </a>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-sm">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Solicitare rapidă</p>
<p className="mt-2 text-sm text-slate-600">Lasă detaliile—administratorul confirmă cel mai bun interval.</p>

<form action="" className="mt-5 grid gap-3" id="contactForm" method="post">
<div className="grid gap-2">
<label className="text-xs font-medium text-slate-700" htmlFor="cfName">Nume</label>
<input className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none ring-sky-500/20 focus:ring-4" id="cfName" name="name" placeholder="Numele tău" required="" type="text"/>
</div>
<div className="grid gap-2 sm:grid-cols-2">
<div className="grid gap-2">
<label className="text-xs font-medium text-slate-700" htmlFor="cfPhone">Telefon</label>
<input className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none ring-sky-500/20 focus:ring-4" id="cfPhone" name="phone" placeholder="+40 ..." required="" type="tel"/>
</div>
<div className="grid gap-2">
<label className="text-xs font-medium text-slate-700" htmlFor="cfWindow">Interval preferat</label>
<input className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none ring-sky-500/20 focus:ring-4" id="cfWindow" name="preferred_window" placeholder="Dimineața, în timpul săptămânii" type="text"/>
</div>
</div>
<div className="grid gap-2">
<label className="text-xs font-medium text-slate-700" htmlFor="cfMessage">Mesaj</label>
<textarea className="w-full resize-none rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-900 shadow-sm outline-none ring-sky-500/20 focus:ring-4" id="cfMessage" name="message" placeholder="Ce ai vrea să îmbunătățești?" required="" rows="4"></textarea>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition" id="contactSubmit" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
              Trimite solicitarea
            </button>
<p className="text-xs text-slate-600">
              Formularul trimite către un endpoint setat de tine (în acest fișier, <span className="font-semibold">CONTACT_FORM_ENDPOINT</span>).
            </p>
</form>
</div>
</div>
<footer className="mt-10 flex flex-col gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm text-slate-600">© <span id="year"></span> RS Dent. Toate drepturile rezervate.</p>
<div className="flex items-center gap-4 text-sm font-medium text-slate-700">
<a className="hover:text-slate-900 transition" href="#home">Sus</a>
<a className="hover:text-slate-900 transition" href="#services">Servicii</a>
<a className="hover:text-slate-900 transition" href="#contact">Contact</a>
</div>
</footer>
</div>
</section>



    </>
  );
}
