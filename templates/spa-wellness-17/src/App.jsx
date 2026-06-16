import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // State
      const state = {
        tab: 'spa', // 'spa' | 'wellness'
        date: '',
        time: '',
        duration: 60,
        guests: 1,
        treatment: {
          name: 'Signature Massage',
          price: {45: 95, 60: 130, 90: 175}
        },
        therapistPref: 'any',
        addons: { aroma: false, sauna: false },
        wclass: { name: 'Morning Yoga Flow', price: 32 },
        intensity: 'gentle',
        selectedSlot: null
      };

      // Elements
      const tabSpa = document.getElementById('tabSpa');
      const tabWellness = document.getElementById('tabWellness');
      const spaOptions = document.getElementById('spaOptions');
      const wellnessOptions = document.getElementById('wellnessOptions');

      const dateEl = document.getElementById('date');
      const timeEl = document.getElementById('time');

      const durationBtn = document.getElementById('durationBtn');
      const durationMenu = document.getElementById('durationMenu');
      const durationText = document.getElementById('durationText');

      const treatmentBtn = document.getElementById('treatmentBtn');
      const treatmentMenu = document.getElementById('treatmentMenu');
      const treatmentText = document.getElementById('treatmentText');

      const classBtn = document.getElementById('classBtn');
      const classMenu = document.getElementById('classMenu');
      const classText = document.getElementById('classText');

      const prefBtns = document.querySelectorAll('.pref-btn');
      const levelBtns = document.querySelectorAll('.level-btn');

      const minusGuest = document.getElementById('minusGuest');
      const plusGuest = document.getElementById('plusGuest');
      const guestCount = document.getElementById('guestCount');
      const guestsLabel = document.getElementById('guestsLabel');

      const addonAroma = document.getElementById('addonAroma');
      const addonSauna = document.getElementById('addonSauna');

      const resetBtn = document.getElementById('resetBtn');
      const searchBtn = document.getElementById('searchBtn');
      const results = document.getElementById('results');
      const spaResultList = document.getElementById('spaResultList');
      const wellnessResultList = document.getElementById('wellnessResultList');
      const noResults = document.getElementById('noResults');

      const summaryTitle = document.getElementById('summaryTitle');
      const summaryTotal = document.getElementById('summaryTotal');
      const bookSticky = document.getElementById('bookSticky');

      const confirmSheet = document.getElementById('confirmSheet');
      const closeSheet = document.getElementById('closeSheet');
      const sheetBackdrop = document.getElementById('sheetBackdrop');
      const sheetTitle = document.getElementById('sheetTitle');
      const sheetMeta = document.getElementById('sheetMeta');
      const sheetPrice = document.getElementById('sheetPrice');
      const sheetGuests = document.getElementById('sheetGuests');
      const sheetWhen = document.getElementById('sheetWhen');
      const sheetAddons = document.getElementById('sheetAddons');
      const confirmBtn = document.getElementById('confirmBtn');

      // Helpers
      function fmtMoney(n) {
        return '$' + n.toFixed(0);
      }
      function plural(n, one, many) {
        return n === 1 ? one : many;
      }
      function closeAllMenus() {
        durationMenu.classList.add('hidden');
        treatmentMenu.classList.add('hidden');
        classMenu.classList.add('hidden');
      }
      function updateGuests(delta) {
        state.guests = Math.min(6, Math.max(1, state.guests + delta));
        guestCount.textContent = state.guests;
        guestsLabel.textContent = `${state.guests} ${plural(state.guests, 'adult', 'adults')}`;
        updateSummary();
      }
      function currentBasePrice() {
        if (state.tab === 'spa') {
          return state.treatment.price[state.duration] || 0;
        }
        return state.wclass.price || 0;
      }
      function addonsPerGuest() {
        let add = 0;
        if (state.tab === 'spa') {
          if (state.addons.aroma) add += 12;
          if (state.addons.sauna) add += 18;
        }
        return add;
      }
      function computeTotal() {
        const base = currentBasePrice();
        const perGuest = base + addonsPerGuest();
        return perGuest * state.guests;
      }
      function updateSummary() {
        const total = computeTotal();
        if ((state.tab === 'spa' && state.treatment.name) || (state.tab === 'wellness' && state.wclass.name)) {
          const title = state.tab === 'spa'
            ? `${state.treatment.name} · ${state.duration} min`
            : `${state.wclass.name} · ${state.intensity[0].toUpperCase() + state.intensity.slice(1)}`;
          summaryTitle.textContent = title;
          summaryTotal.textContent = fmtMoney(total);
          bookSticky.disabled = false;
        } else {
          summaryTitle.textContent = 'Select details to view total';
          summaryTotal.textContent = '—';
          bookSticky.disabled = true;
        }
      }
      function setActive(elList, el) {
        elList.forEach(b => {
          b.classList.remove('bg-slate-900', 'text-white', 'font-medium', 'shadow-sm');
          b.classList.add('text-slate-700');
        });
        el.classList.add('bg-slate-900', 'text-white', 'font-medium', 'shadow-sm');
      }
      function setTab(tab) {
        state.tab = tab;
        if (tab === 'spa') {
          spaOptions.classList.remove('hidden');
          wellnessOptions.classList.add('hidden');
          document.getElementById('spaResultList').classList.toggle('hidden', false);
          document.getElementById('wellnessResultList').classList.add('hidden');
          tabSpa.classList.add('bg-white','shadow-sm','border','border-slate-200','text-slate-900');
          tabWellness.classList.remove('bg-white','shadow-sm','border','border-slate-200','text-slate-900');
          tabWellness.classList.add('text-slate-600');
        } else {
          spaOptions.classList.add('hidden');
          wellnessOptions.classList.remove('hidden');
          document.getElementById('spaResultList').classList.add('hidden');
          document.getElementById('wellnessResultList').classList.toggle('hidden', false);
          tabWellness.classList.add('bg-white','shadow-sm','border','border-slate-200','text-slate-900');
          tabSpa.classList.remove('bg-white','shadow-sm','border','border-slate-200','text-slate-900');
          tabSpa.classList.add('text-slate-600');
        }
        updateSummary();
        // Clear results on tab switch for clarity
        results.classList.add('hidden');
      }
      function makeSpaCards() {
        spaResultList.innerHTML = '';
        const slots = ['09:30', '11:00', '14:30', '16:00', '18:30'];
        const base = currentBasePrice();
        const add = addonsPerGuest();
        const perGuest = base + add;
        const total = perGuest * state.guests;

        slots.forEach((t, i) => {
          const el = document.createElement('div');
          el.className = 'rounded-xl border border-slate-200 bg-white p-3 flex items-center gap-3';
          el.innerHTML = `
            <img class="w-14 h-14 rounded-lg object-cover border border-slate-200" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" alt="Treatment">
            <div class="min-w-0 flex-1">
              <div class="text-[15px] font-medium tracking-tight truncate">${state.treatment.name} · ${state.duration} min</div>
              <div class="text-[12px] text-slate-500">${state.date || 'Select date'} · ${t} · ${state.guests} ${plural(state.guests, 'guest', 'guests')}</div>
            </div>
            <div class="text-right">
              <div class="text-[13px] text-slate-500">from</div>
              <div class="text-[15px] font-medium tracking-tight">${fmtMoney(total)}</div>
              <button data-when="${t}" class="mt-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-[13px] hover:bg-slate-50">Book</button>
            </div>
          `;
          spaResultList.appendChild(el);
        });
      }
      function makeWellnessCards() {
        wellnessResultList.innerHTML = '';
        const classes = [
          {time: '07:30', name: state.wclass.name, spots: 6},
          {time: '12:15', name: state.wclass.name, spots: 4},
          {time: '17:45', name: state.wclass.name, spots: 8},
        ];
        const total = computeTotal();
        classes.forEach(c => {
          const el = document.createElement('div');
          el.className = 'rounded-xl border border-slate-200 bg-white p-3 flex items-center gap-3';
          el.innerHTML = `
            <img class="w-14 h-14 rounded-lg object-cover border border-slate-200" src="https://images.unsplash.com/photo-1518617840859-acd8788f1df9?q=80&w=1200&auto=format&fit=crop" alt="Class">
            <div class="min-w-0 flex-1">
              <div class="text-[15px] font-medium tracking-tight truncate">${c.name} — ${state.intensity[0].toUpperCase()+state.intensity.slice(1)}</div>
              <div class="text-[12px] text-slate-500">${state.date || 'Select date'} · ${c.time} · ${c.spots} spots</div>
            </div>
            <div class="text-right">
              <div class="text-[13px] text-slate-500">per ${plural(state.guests, 'guest','guests')}</div>
              <div class="text-[15px] font-medium tracking-tight">${fmtMoney(total)}</div>
              <button data-when="${c.time}" class="mt-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-[13px] hover:bg-slate-50">Book</button>
            </div>
          `;
          wellnessResultList.appendChild(el);
        });
      }
      function openSheet(slotTime) {
        state.selectedSlot = slotTime;
        const title = state.tab === 'spa'
          ? `${state.treatment.name} · ${state.duration} min`
          : `${state.wclass.name} · ${state.intensity[0].toUpperCase()+state.intensity.slice(1)}`;

        sheetTitle.textContent = title;
        sheetMeta.textContent = `${state.guests} ${plural(state.guests, 'guest', 'guests')} · ${state.tab === 'spa' ? 'Therapist: ' + (state.therapistPref === 'any' ? 'No preference' : state.therapistPref) : 'Studio 1'}`;
        sheetPrice.textContent = fmtMoney(computeTotal());
        sheetGuests.textContent = `${state.guests} ${plural(state.guests, 'adult', 'adults')}`;
        const whenStr = `${state.date || 'Date TBD'} at ${slotTime || (state.time || '—')}`;
        sheetWhen.textContent = whenStr;

        let addonStr = 'None';
        if (state.tab === 'spa') {
          const arr = [];
          if (state.addons.aroma) arr.push('Aromatherapy');
          if (state.addons.sauna) arr.push('Thermal suite');
          addonStr = arr.length ? arr.join(' + ') : 'None';
        }
        sheetAddons.textContent = addonStr;

        confirmSheet.classList.remove('hidden');
      }

      // Init values
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth()+1).padStart(2,'0');
      const dd = String(today.getDate()).padStart(2,'0');
      dateEl.value = `${yyyy}-${mm}-${dd}`;
      state.date = dateEl.value;
      timeEl.value = '11:00';
      state.time = timeEl.value;
      // Pref default
      setActive(prefBtns, prefBtns[0]);
      // Intensity default
      setActive(levelBtns, levelBtns[0]);
      updateSummary();

      // Events
      tabSpa.addEventListener('click', () => setTab('spa'));
      tabWellness.addEventListener('click', () => setTab('wellness'));

      dateEl.addEventListener('change', e => { state.date = e.target.value; });
      timeEl.addEventListener('change', e => { state.time = e.target.value; });

      // Duration menu
      durationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        durationMenu.classList.toggle('hidden');
        treatmentMenu.classList.add('hidden');
        classMenu.classList.add('hidden');
      });
      durationMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const d = parseInt(btn.dataset.duration,10);
          state.duration = d;
          durationText.textContent = `${d} min`;
          durationMenu.classList.add('hidden');
          updateSummary();
        });
      });

      // Treatment menu
      treatmentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        treatmentMenu.classList.toggle('hidden');
        durationMenu.classList.add('hidden');
        classMenu.classList.add('hidden');
      });
      treatmentMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          state.treatment = {
            name: btn.dataset.treatment,
            price: {
              45: parseFloat(btn.dataset.price45),
              60: parseFloat(btn.dataset.price60),
              90: parseFloat(btn.dataset.price90)
            }
          };
          treatmentText.textContent = state.treatment.name;
          treatmentMenu.classList.add('hidden');
          updateSummary();
        });
      });

      // Class menu
      classBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        classMenu.classList.toggle('hidden');
        durationMenu.classList.add('hidden');
        treatmentMenu.classList.add('hidden');
      });
      classMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          state.wclass = { name: btn.dataset.class, price: parseFloat(btn.dataset.cprice) };
          classText.textContent = state.wclass.name;
          classMenu.classList.add('hidden');
          updateSummary();
        });
      });

      document.addEventListener('click', closeAllMenus);

      // Pref buttons
      prefBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          state.therapistPref = btn.dataset.pref;
          setActive(prefBtns, btn);
          updateSummary();
        });
      });
      // Intensity buttons
      levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          state.intensity = btn.dataset.level;
          setActive(levelBtns, btn);
          updateSummary();
        });
      });

      // Guests
      minusGuest.addEventListener('click', () => updateGuests(-1));
      plusGuest.addEventListener('click', () => updateGuests(1));

      // Addons
      addonAroma.addEventListener('change', (e) => { state.addons.aroma = e.target.checked; updateSummary(); });
      addonSauna.addEventListener('change', (e) => { state.addons.sauna = e.target.checked; updateSummary(); });

      // Reset
      resetBtn.addEventListener('click', () => {
        setTab('spa');
        dateEl.value = `${yyyy}-${mm}-${dd}`;
        state.date = dateEl.value;
        timeEl.value = '11:00';
        state.time = timeEl.value;
        state.duration = 60;
        durationText.textContent = '60 min';
        state.treatment = { name: 'Signature Massage', price: {45:95,60:130,90:175} };
        treatmentText.textContent = state.treatment.name;
        setActive(prefBtns, prefBtns[0]);
        addonAroma.checked = false;
        addonSauna.checked = false;
        state.addons = { aroma:false, sauna:false };
        state.guests = 1;
        guestCount.textContent = '1';
        guestsLabel.textContent = '1 adult';
        state.wclass = { name: 'Morning Yoga Flow', price: 32 };
        classText.textContent = state.wclass.name;
        setActive(levelBtns, levelBtns[0]);
        results.classList.add('hidden');
        updateSummary();
      });

      // Search availability
      searchBtn.addEventListener('click', () => {
        if (state.tab === 'spa') {
          makeSpaCards();
          spaResultList.classList.remove('hidden');
          wellnessResultList.classList.add('hidden');
        } else {
          makeWellnessCards();
          spaResultList.classList.add('hidden');
          wellnessResultList.classList.remove('hidden');
        }
        results.classList.remove('hidden');
        noResults.classList.add('hidden');

        // Attach book handlers each time
        document.querySelectorAll('#spaResultList button[data-when], #wellnessResultList button[data-when]').forEach(btn => {
          btn.addEventListener('click', () => {
            openSheet(btn.dataset.when);
          });
        });
      });

      // Sticky immediate book (opens sheet with chosen manual time if no slot chosen)
      bookSticky.addEventListener('click', () => {
        openSheet(state.time || '—');
      });

      // Close sheet
      [closeSheet, sheetBackdrop].forEach(el => el.addEventListener('click', () => {
        confirmSheet.classList.add('hidden');
      }));

      // Confirm
      confirmBtn.addEventListener('click', () => {
        confirmBtn.textContent = 'Processing...';
        confirmBtn.disabled = true;
        setTimeout(() => {
          confirmBtn.textContent = 'Confirmed ✓';
          // Keep it simple; hide after short delay
          setTimeout(() => {
            confirmSheet.classList.add('hidden');
            confirmBtn.textContent = 'Confirm & pay';
            confirmBtn.disabled = false;
          }, 800);
        }, 900);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md mx-auto min-h-screen flex flex-col">

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
<div className="px-4 py-3 flex items-center gap-3">
<button aria-label="Back" className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 active:scale-[0.98] transition">

<svg className="w-5 h-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 18 9 12 15 6" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
</button>
<div className="flex-1 text-center">
<div className="text-[22px] leading-6 tracking-tight font-semibold">Spa &amp; Wellness</div>
<div className="text-[11px] text-slate-500">Hotel Aurora — Level 2</div>
</div>
<button aria-label="Help" className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 active:scale-[0.98] transition">

<svg className="w-5 h-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line strokeLinecap="round" x1="12" x2="12" y1="16" y2="12"></line>
<line strokeLinecap="round" x1="12" x2="12.01" y1="8" y2="8"></line>
</svg>
</button>
</div>
</header>

<section className="px-4 pt-3">
<div className="relative overflow-hidden rounded-2xl border border-slate-200">
<img alt="Spa ambience" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-3">
<div className="flex items-center gap-2">
<div className="px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-[11px] text-slate-700 font-medium">Open 7:00–22:00</div>
<div className="px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-[11px] text-slate-700 font-medium">Guests &amp; Visitors</div>
</div>
</div>
</div>
</section>

<nav className="px-4 mt-4">
<div className="grid grid-cols-2 p-1 rounded-xl border border-slate-200 bg-slate-50">
<button className="tab-btn spa active col-span-1 py-2 rounded-lg text-sm font-medium tracking-tight bg-white shadow-sm border border-slate-200 text-slate-900" id="tabSpa">Spa</button>
<button className="tab-btn wellness col-span-1 py-2 rounded-lg text-sm font-medium tracking-tight text-slate-600 hover:text-slate-900" id="tabWellness">Wellness</button>
</div>
</nav>

<main className="px-4 mt-4 pb-28">
<section className="rounded-2xl border border-slate-200 bg-white shadow-[0_1px_0_#0000000a]" id="card">
<div className="p-4 border-b border-slate-200">
<h2 className="text-xl tracking-tight font-semibold">Check availability</h2>
<p className="text-[13px] text-slate-500 mt-0.5">Choose details to see available times.</p>
</div>

<div className="p-4 space-y-4">

<div className="flex items-center gap-3">
<div className="flex-shrink-0 p-2 rounded-lg border border-slate-200 bg-white">

<svg className="w-5 h-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<line strokeLinecap="round" x1="16" x2="16" y1="2" y2="6"></line>
<line strokeLinecap="round" x1="8" x2="8" y1="2" y2="6"></line>
<line strokeLinecap="round" x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<label className="flex-1">
<span className="block text-[12px] text-slate-500">Date</span>
<input className="w-full mt-0.5 px-3 py-2 rounded-lg border border-slate-200 text-[15px] focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-300" id="date" type="date"/>
</label>
</div>

<div className="grid grid-cols-2 gap-3">
<label className="col-span-1">
<span className="block text-[12px] text-slate-500">Start time</span>
<div className="mt-0.5 flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 focus-within:ring-4 focus-within:ring-slate-100 focus-within:border-slate-300">

<svg className="w-4.5 h-4.5 stroke-slate-600" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
<input className="flex-1 text-[15px] focus:outline-none" id="time" type="time"/>
</div>
</label>
<label className="col-span-1">
<span className="block text-[12px] text-slate-500">Duration</span>
<div className="mt-0.5 relative">
<button className="w-full px-3 py-2 rounded-lg border border-slate-200 text-left text-[15px] flex items-center justify-between hover:bg-slate-50" id="durationBtn">
<span id="durationText">60 min</span>

<svg className="w-4.5 h-4.5 stroke-slate-600" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
</button>
<div className="absolute z-20 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden hidden" id="durationMenu">
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-duration="45">45 min</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-duration="60">60 min</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-duration="90">90 min</button>
</div>
</div>
</label>
</div>

<div>
<span className="block text-[12px] text-slate-500">Guests</span>
<div className="mt-0.5 flex items-center justify-between rounded-lg border border-slate-200 px-2 py-2">
<div className="flex items-center gap-2">

<svg className="w-5 h-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="8" cy="7" r="4"></circle>
<path d="M20 8a4 4 0 0 1-3 3.87"></path>
</svg>
<span className="text-[15px]" id="guestsLabel">1 adult</span>
</div>
<div className="flex items-center gap-1.5">
<button className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 active:scale-[0.98]" id="minusGuest">−</button>
<span className="w-8 text-center text-[15px]" id="guestCount">1</span>
<button className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 active:scale-[0.98]" id="plusGuest">+</button>
</div>
</div>
</div>

<div className="space-y-3" id="spaOptions">

<div>
<span className="block text-[12px] text-slate-500">Treatment</span>
<div className="mt-0.5 relative">
<button className="w-full px-3 py-2 rounded-lg border border-slate-200 text-left text-[15px] flex items-center justify-between hover:bg-slate-50" id="treatmentBtn">
<span id="treatmentText">Signature Massage</span>
<svg className="w-4.5 h-4.5 stroke-slate-600" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
</button>
<div className="absolute z-20 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden hidden max-h-64 overflow-y-auto" id="treatmentMenu">
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-price45="95" data-price60="130" data-price90="175" data-treatment="Signature Massage">Signature Massage</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-price45="110" data-price60="145" data-price90="190" data-treatment="Deep Tissue">Deep Tissue</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-price45="105" data-price60="140" data-price90="185" data-treatment="Aromatherapy">Aromatherapy</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-price45="120" data-price60="155" data-price90="210" data-treatment="Radiance Facial">Radiance Facial</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-price45="95" data-price60="130" data-price90="175" data-treatment="Body Polish">Body Polish</button>
</div>
</div>
</div>

<div>
<span className="block text-[12px] text-slate-500">Therapist preference</span>
<div className="mt-1 grid grid-cols-3 gap-2">
<button className="pref-btn col-span-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-[14px] font-medium tracking-tight hover:bg-slate-50 active:scale-[0.98] ring-0" data-pref="any">No pref.</button>
<button className="pref-btn col-span-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-[14px] text-slate-700 hover:bg-slate-50" data-pref="female">Female</button>
<button className="pref-btn col-span-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-[14px] text-slate-700 hover:bg-slate-50" data-pref="male">Male</button>
</div>
</div>

<div>
<span className="block text-[12px] text-slate-500">Add-ons</span>
<div className="mt-1 space-y-2">

<label className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<input className="peer hidden" id="addonAroma" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900 transition">

<svg className="w-3.5 h-3.5 stroke-white hidden peer-checked:block" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
</span>
<span className="text-[14px]">Aromatherapy blend</span>
</div>
<span className="text-[13px] text-slate-500">+ $12</span>
</label>
<label className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<input className="peer hidden" id="addonSauna" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900 transition">
<svg className="w-3.5 h-3.5 stroke-white hidden peer-checked:block" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
</span>
<span className="text-[14px]">Thermal suite pass</span>
</div>
<span className="text-[13px] text-slate-500">+ $18</span>
</label>
</div>
</div>
</div>

<div className="space-y-3 hidden" id="wellnessOptions">
<div>
<span className="block text-[12px] text-slate-500">Class</span>
<div className="mt-0.5 relative">
<button className="w-full px-3 py-2 rounded-lg border border-slate-200 text-left text-[15px] flex items-center justify-between hover:bg-slate-50" id="classBtn">
<span id="classText">Morning Yoga Flow</span>
<svg className="w-4.5 h-4.5 stroke-slate-600" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
</svg>
</button>
<div className="absolute z-20 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden hidden max-h-64 overflow-y-auto" id="classMenu">
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-className="Morning Yoga Flow" data-cprice="32">Morning Yoga Flow</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-className="Mat Pilates" data-cprice="35">Mat Pilates</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-className="Breathwork &amp; Reset" data-cprice="28">Breathwork &amp; Reset</button>
<button className="w-full px-3 py-2 text-left text-[15px] hover:bg-slate-50" data-className="HIIT Express" data-cprice="30">HIIT Express</button>
</div>
</div>
</div>
<div>
<span className="block text-[12px] text-slate-500">Intensity</span>
<div className="mt-1 grid grid-cols-3 gap-2">
<button className="level-btn col-span-1 px-3 py-2 rounded-lg border border-slate-200 text-[14px] hover:bg-slate-50" data-level="gentle">Gentle</button>
<button className="level-btn col-span-1 px-3 py-2 rounded-lg border border-slate-200 text-[14px]" data-level="moderate">Moderate</button>
<button className="level-btn col-span-1 px-3 py-2 rounded-lg border border-slate-200 text-[14px]" data-level="energizing">Energizing</button>
</div>
</div>
</div>

<div className="pt-1 flex items-center justify-between gap-2">
<button className="px-3 py-2 rounded-lg border border-slate-200 text-[14px] hover:bg-slate-50" id="resetBtn">Reset</button>
<button className="flex-1 px-4 py-2.5 rounded-lg bg-slate-900 text-white text-[15px] font-medium tracking-tight hover:bg-slate-800 active:scale-[0.99]" id="searchBtn">
<span className="inline-flex items-center gap-2">

<svg className="w-4.5 h-4.5 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line strokeLinecap="round" x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
                  Find availability
                </span>
</button>
</div>
</div>
</section>

<section className="mt-5 hidden" id="results">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg tracking-tight font-semibold">Available times</h3>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-[13px] hover:bg-slate-50" id="filtersBtn">
              Filters
            </button>
</div>

<div className="space-y-3" id="spaResultList">

</div>

<div className="space-y-3 hidden" id="wellnessResultList">

</div>
<p className="text-[14px] text-slate-500 mt-2 hidden" id="noResults">No slots match your filters. Try a different time or duration.</p>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur" id="stickyBar">
<div className="mx-auto w-full max-w-md px-4 py-3 flex items-center justify-between">
<div className="min-w-0">
<div className="text-[13px] text-slate-500 truncate" id="summaryTitle">Select details to view total</div>
<div className="text-[17px] tracking-tight font-semibold" id="summaryTotal">—</div>
</div>
<button className="px-4 py-2.5 rounded-lg bg-slate-900 text-white text-[15px] font-medium tracking-tight disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 active:scale-[0.99]" disabled="" id="bookSticky">
            Book now
          </button>
</div>
</div>

<div className="fixed inset-x-0 bottom-0 z-50 hidden" id="confirmSheet">
<div className="absolute inset-0 bg-black/25" id="sheetBackdrop"></div>
<div className="relative mx-auto w-full max-w-md rounded-t-2xl bg-white border border-slate-200 shadow-2xl">
<div className="px-4 pt-3 pb-2 border-b border-slate-200 flex items-center justify-between">
<div className="text-lg tracking-tight font-semibold">Confirm booking</div>
<button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50" id="closeSheet">

<svg className="w-5 h-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line strokeLinecap="round" x1="18" x2="6" y1="6" y2="18"></line>
<line strokeLinecap="round" x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<div className="p-4 space-y-4">
<div className="flex items-start gap-3">
<img alt="Treatment preview" className="w-14 h-14 rounded-lg object-cover border border-slate-200" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-[15px] font-medium tracking-tight truncate" id="sheetTitle"></div>
<div className="text-[13px] text-slate-500" id="sheetMeta"></div>
</div>
<div className="ml-auto text-[15px] font-medium tracking-tight" id="sheetPrice"></div>
</div>
<div className="rounded-xl border border-slate-200 divide-y divide-slate-200">
<div className="px-3 py-2 text-[14px] flex items-center justify-between">
<span className="text-slate-600">Guests</span>
<span className="font-medium" id="sheetGuests"></span>
</div>
<div className="px-3 py-2 text-[14px] flex items-center justify-between">
<span className="text-slate-600">Date &amp; time</span>
<span className="font-medium" id="sheetWhen"></span>
</div>
<div className="px-3 py-2 text-[14px] flex items-center justify-between">
<span className="text-slate-600">Add-ons</span>
<span className="font-medium" id="sheetAddons"></span>
</div>
</div>
<button className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white text-[15px] font-medium tracking-tight hover:bg-slate-800 active:scale-[0.99]" id="confirmBtn">
              Confirm &amp; pay
            </button>
<p className="text-[12px] text-slate-500 text-center">You’ll receive a confirmation email and calendar invite.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
