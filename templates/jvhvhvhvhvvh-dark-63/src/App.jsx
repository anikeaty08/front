import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // App State
      const state = {
        current: 'home',
        cars: [],
        form: {
          carMake: '',
          plateNumber: '',
          emirate: '',
          emirateLabel: '',
          selectedHours: ''
        }
      };

      // Elements
      const screens = {
        home: document.getElementById('screen-home'),
        aeroTags: document.getElementById('screen-aeroTags'),
        parking: document.getElementById('screen-parking'),
        utilities: document.getElementById('screen-utilities')
      };
      const navItems = Array.from(document.querySelectorAll('.nav-item'));

      // Navigation
      function showScreen(nextId) {
        if (state.current === nextId) return;
        const prev = screens[state.current];
        const next = screens[nextId];

        // Out (fade + slide)
        prev.classList.add('opacity-0', 'translate-x-3', 'pointer-events-none');
        // In
        next.classList.remove('pointer-events-none');
        next.classList.add('opacity-0', '-translate-x-3');
        next.classList.remove('hidden');

        requestAnimationFrame(() => {
          next.classList.remove('opacity-0', '-translate-x-3');
          next.classList.add('opacity-100', 'translate-x-0');
        });

        // Cleanup after transition
        setTimeout(() => {
          Object.values(screens).forEach(s => {
            if (s !== next) {
              s.classList.add('pointer-events-none');
              s.classList.remove('translate-x-0', 'opacity-100');
              s.classList.add('opacity-0');
            }
          });
          state.current = nextId;
          updateNavActive();
        }, 220);
      }

      function updateNavActive() {
        navItems.forEach(btn => {
          const active = btn.dataset.target === state.current;
          btn.classList.toggle('active', active);
        });
      }

      navItems.forEach(btn => {
        btn.addEventListener('click', () => showScreen(btn.dataset.target));
      });

      // Also support quick actions
      document.querySelectorAll('[data-nav-target]').forEach(el => {
        el.addEventListener('click', () => showScreen(el.getAttribute('data-nav-target')));
      });

      // Start at Home
      updateNavActive();

      // Filter dropdown (AeroTags)
      const filterBtn = document.getElementById('filterBtn');
      const filterMenu = document.getElementById('filterMenu');
      const filterLabel = document.getElementById('filterLabel');
      filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterMenu.classList.toggle('hidden');
      });
      filterMenu.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', () => {
          filterLabel.textContent = item.dataset.filter;
          filterMenu.classList.add('hidden');
        });
      });
      document.addEventListener('click', () => filterMenu.classList.add('hidden'));

      // Parking Form inputs
      const carMakeInput = document.getElementById('carMake');
      const plateInput = document.getElementById('plateNumber');
      const emirateBtn = document.getElementById('emirateSelectBtn');
      const emirateMenu = document.getElementById('emirateMenu');
      const emirateLabel = document.getElementById('emirateLabel');
      const addCarBtn = document.getElementById('addCar');
      const savedCars = document.getElementById('savedCars');
      const carsList = document.getElementById('carsList');
      const clearCarsBtn = document.getElementById('clearCars');
      const hoursPicker = document.getElementById('hoursPicker');
      const continueBtn = document.getElementById('continueParking');
      const continueHint = document.getElementById('continueHint');

      const emirateMap = {
        abu_dhabi: 'AD',
        ajman: 'AJ',
        dubai: 'DXB',
        sharjah: 'SHJ'
      };

      function validateContinue() {
        const ok = state.form.carMake.trim() && state.form.plateNumber.trim() && state.form.emirate && state.form.selectedHours;
        continueBtn.disabled = !ok;
        continueHint.textContent = ok ? 'Ready to proceed.' : 'Fill car, plate, emirate and hours.';
      }

      carMakeInput.addEventListener('input', e => {
        state.form.carMake = e.target.value;
        validateContinue();
      });
      plateInput.addEventListener('input', e => {
        state.form.plateNumber = e.target.value.toUpperCase();
        validateContinue();
      });

      emirateBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        emirateMenu.classList.toggle('hidden');
      });
      emirateMenu.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', () => {
          state.form.emirate = item.dataset.emirate;
          state.form.emirateLabel = item.dataset.label;
          emirateLabel.textContent = item.dataset.label;
          emirateMenu.classList.add('hidden');
          validateContinue();
        });
      });
      document.addEventListener('click', () => emirateMenu.classList.add('hidden'));

      // Hours picker chips
      hoursPicker.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
          hoursPicker.querySelectorAll('.chip').forEach(c => {
            c.classList.remove('ring-blue-400', 'bg-blue-600/20', 'text-blue-200');
            c.classList.add('bg-neutral-900/80', 'ring-white/10', 'text-neutral-300');
          });
          chip.classList.remove('bg-neutral-900/80', 'ring-white/10', 'text-neutral-300');
          chip.classList.add('ring-blue-400', 'bg-blue-600/20', 'text-blue-200');
          state.form.selectedHours = chip.dataset.hours;
          validateContinue();
        });
      });

      // Add Car
      addCarBtn.addEventListener('click', () => {
        const { carMake, plateNumber, emirate, emirateLabel } = state.form;
        if (!carMake || !plateNumber || !emirate) {
          showToast('Enter car, plate & emirate');
          return;
        }
        state.cars.push({ carMake, plateNumber, emirate, emirateLabel });
        renderCars();
        showToast('Saved car');
      });

      function renderCars() {
        if (state.cars.length === 0) {
          savedCars.classList.add('hidden');
          carsList.innerHTML = '';
          return;
        }
        savedCars.classList.remove('hidden');
        carsList.innerHTML = state.cars.map((c, idx) => `
          <div class="flex items-center justify-between rounded-md bg-neutral-950/70 ring-1 ring-white/10 px-3 py-2">
            <div class="text-[12px]">
              <span class="text-neutral-200">${c.carMake}</span>
              <span class="mx-1 text-neutral-500">·</span>
              <span class="text-neutral-300">${c.plateNumber}</span>
              <span class="mx-1 text-neutral-500">·</span>
              <span class="text-neutral-400">${c.emirateLabel}</span>
            </div>
            <button data-remove="${idx}" class="text-[12px] text-red-400 hover:text-red-300">Remove</button>
          </div>
        `).join('');

        carsList.querySelectorAll('[data-remove]').forEach(btn => {
          btn.addEventListener('click', () => {
            const i = Number(btn.getAttribute('data-remove'));
            state.cars.splice(i, 1);
            renderCars();
          });
        });
      }

      clearCarsBtn.addEventListener('click', () => {
        state.cars = [];
        renderCars();
      });

      // Continue + Modal
      const parkingModal = document.getElementById('parkingModal');
      const parkingModalCard = document.getElementById('parkingModalCard');
      const formatPreview = document.getElementById('formatPreview');
      const closeModalBtn = document.getElementById('closeModal');
      const editModalBtn = document.getElementById('editModal');
      const confirmSmsBtn = document.getElementById('confirmSms');

      function openModal() {
        const code = emirateMap[state.form.emirate] || '—';
        const plate = state.form.plateNumber.replace(/\s+/g, '');
        const hrs = state.form.selectedHours || '—';
        const preview = `PARK ${code} ${plate} ${hrs}`;
        formatPreview.textContent = preview;

        const smsBody = encodeURIComponent(preview);
        confirmSmsBtn.href = `sms:+971600000000?&body=${smsBody}`;

        parkingModal.classList.remove('hidden');
        requestAnimationFrame(() => {
          parkingModalCard.classList.remove('opacity-0', 'scale-95');
          parkingModalCard.classList.add('opacity-100', 'scale-100');
        });
      }

      function closeModal() {
        parkingModalCard.classList.add('opacity-0', 'scale-95');
        parkingModalCard.classList.remove('opacity-100', 'scale-100');
        setTimeout(() => {
          parkingModal.classList.add('hidden');
        }, 160);
      }

      continueBtn.addEventListener('click', () => {
        if (continueBtn.disabled) return;
        openModal();
      });
      closeModalBtn.addEventListener('click', closeModal);
      editModalBtn.addEventListener('click', closeModal);
      parkingModal.addEventListener('click', (e) => {
        if (e.target === parkingModal) closeModal();
      });

      // Toast helper
      const toast = document.getElementById('toast');
      let toastTimer = null;
      function showToast(message) {
        toast.querySelector('div').textContent = message;
        toast.classList.remove('opacity-0');
        toast.classList.add('opacity-100', '-translate-y-1');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.add('opacity-0');
          toast.classList.remove('opacity-100', '-translate-y-1');
        }, 1600);
      }

      // Subtle pulse on header action
      const themePulse = document.getElementById('themePulse');
      themePulse.addEventListener('click', () => {
        showToast('Synced');
        themePulse.classList.add('ring-2', 'ring-blue-500/40');
        setTimeout(() => themePulse.classList.remove('ring-2', 'ring-blue-500/40'), 400);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto w-full max-w-md min-h-screen flex flex-col relative">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/5">
<div className="px-4 py-3 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded bg-blue-600/20 ring-1 ring-blue-500/30 flex items-center justify-center">
<span className="text-[11px] tracking-tight text-blue-300" style={{letterSpacing: '-0.02em'}}>AT</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-[13px] text-neutral-300">AeroTag</span>
<span className="text-[11px] text-neutral-500">Manage tags, parking &amp; utilities</span>
</div>
</div>

<div className="flex items-center gap-3">
<button aria-label="Sync" className="h-8 w-8 rounded-md bg-neutral-900/80 border border-white/5 hover:border-blue-500/40 hover:bg-neutral-900 transition-colors duration-200 flex items-center justify-center" id="themePulse">
<i className="w-4 h-4 text-neutral-300" data-lucide="activity"></i>
</button>
<img alt="Avatar" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<main className="flex-1 relative overflow-hidden" id="screens">

<section className="absolute inset-0 overflow-y-auto will-change-transform transition-all duration-300 ease-out" data-screen="home" id="screen-home">

<div className="px-4 pt-5 pb-6" style={{background: 'linear-gradient(180deg, #1E88E5 0%, #1565C0 100%)'}}>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white/90" data-lucide="sun"></i>
<span className="text-white/90 text-sm">Good Morning</span>
</div>
<h1 className="mt-1 text-2xl tracking-tight font-semibold text-white/95">Ajith Surendran</h1>
</div>
<img alt="Hero" className="h-16 w-16 rounded-lg ring-1 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mt-4 grid grid-cols-4 gap-2">
<button className="group flex flex-col items-center justify-center gap-1 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-blue-400/40 hover:bg-white/10 transition-colors py-3">
<i className="w-5 h-5 text-white/90" data-lucide="scan"></i>
<span className="text-[11px] text-white/80">Scan</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-blue-400/40 hover:bg-white/10 transition-colors py-3">
<i className="w-5 h-5 text-white/90" data-lucide="plus"></i>
<span className="text-[11px] text-white/80">New Tag</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-blue-400/40 hover:bg-white/10 transition-colors py-3" data-nav-target="parking">
<i className="w-5 h-5 text-white/90" data-lucide="car"></i>
<span className="text-[11px] text-white/80">Parking</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-blue-400/40 hover:bg-white/10 transition-colors py-3" data-nav-target="utilities">
<i className="w-5 h-5 text-white/90" data-lucide="grid"></i>
<span className="text-[11px] text-white/80">Tools</span>
</button>
</div>
</div>

<div className="px-4 pb-28 -mt-3 space-y-3">

<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 p-4 hover:ring-blue-500/30 transition-colors">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-blue-600/10 ring-1 ring-blue-500/30 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-blue-300" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Upcoming feature</h3>
<p className="mt-1 text-[13px] leading-relaxed text-neutral-400">Schedule QR changes<br/>Set different URLs by time of day</p>
</div>
</div>
</div>

<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Quick Status</h3>
<span className="text-[11px] text-neutral-500">Live</span>
</div>
<div className="grid grid-cols-2 gap-2">

<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3 hover:ring-blue-500/30 transition">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="tag"></i>
<span className="text-[12px] text-neutral-400">Total AeroTags</span>
</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-neutral-100">0</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3 hover:ring-blue-500/30 transition">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="check-circle"></i>
<span className="text-[12px] text-neutral-400">Activated Tags</span>
</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-neutral-100">0</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3 hover:ring-blue-500/30 transition">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="scan"></i>
<span className="text-[12px] text-neutral-400">Scans till date</span>
</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-neutral-100">0</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3 hover:ring-blue-500/30 transition">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="user"></i>
<span className="text-[12px] text-neutral-400">Account Role</span>
</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-neutral-100">Customer</div>
</div>
</div>
</div>

<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Recent AeroTags</h3>
<button className="text-[12px] text-blue-300 hover:text-blue-200 hover:underline decoration-blue-400/50">View all</button>
</div>
<div className="mt-2 flex items-center gap-2 text-neutral-500 text-[13px]">
<i className="w-4 h-4" data-lucide="info"></i>
<span>No AeroTags available</span>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 overflow-y-auto will-change-transform transition-all duration-300 ease-out opacity-0 pointer-events-none" data-screen="aeroTags" id="screen-aeroTags">
<div className="px-4 pt-4 pb-28 space-y-3">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-300" data-lucide="tag"></i>
<h2 className="text-xl tracking-tight font-semibold text-neutral-100">AeroTags</h2>
</div>
<button className="rounded-md bg-neutral-900 border border-white/10 px-2.5 py-1.5 text-[12px] text-neutral-300 hover:border-blue-500/40 hover:text-white transition">Create</button>
</div>

<div className="flex items-center gap-2">
<div className="flex-1 relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" data-lucide="search"></i>
                &lt; id="searchAeroTags" type="text" placeholder="Search AeroTags" className="w-full pl-9 pr-3 h-10 rounded-lg bg-neutral-900/80 text-[13px] text-neutral-200 placeholder-neutral-500 ring-1 ring-white/10 focus:ring-blue-500/40 outline-none transition" /&gt;
              </div>

<div className="relative">
<button className="h-10 px-3 rounded-lg bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white flex items-center gap-2" id="filterBtn">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
<span id="filterLabel">All</span>
</button>
<div className="hidden absolute right-0 mt-2 w-40 rounded-lg bg-neutral-900 ring-1 ring-white/10 shadow-lg overflow-hidden" id="filterMenu">
<button className="w-full text-left px-3 py-2 text-[13px] text-neutral-300 hover:bg-white/5" data-filter="All">All</button>
<button className="w-full text-left px-3 py-2 text-[13px] text-neutral-300 hover:bg-white/5" data-filter="Active">Active</button>
<button className="w-full text-left px-3 py-2 text-[13px] text-neutral-300 hover:bg-white/5" data-filter="Inactive">Inactive</button>
</div>
</div>
</div>

<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 p-4" id="aeroTagList">
<div className="flex items-center gap-2 text-neutral-500 text-[13px]">
<i className="w-4 h-4" data-lucide="info"></i>
<span>No AeroTags available</span>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 overflow-y-auto will-change-transform transition-all duration-300 ease-out opacity-0 pointer-events-none" data-screen="parking" id="screen-parking">
<div className="px-4 pt-4 pb-28 space-y-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-300" data-lucide="car"></i>
<h2 className="text-xl tracking-tight font-semibold text-neutral-100">Parking</h2>
</div>
<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
<p className="text-[13px] text-neutral-400 leading-relaxed">
                Enter a valid UAE vehicle license plate to continue.<br/>
                Ensure your device is connected to a UAE phone number from Etisalat or Du.
              </p>
</div>

<form className="space-y-3" id="parkingForm">

<div>
<label className="block text-[12px] text-neutral-400 mb-1" htmlFor="carMake">Car</label>
<input className="w-full h-11 rounded-lg bg-neutral-900/80 text-[13px] text-neutral-200 placeholder-neutral-500 ring-1 ring-white/10 focus:ring-blue-500/40 outline-none transition px-3" id="carMake" placeholder="Mg" type="text"/>
</div>

<div>
<label className="block text-[12px] text-neutral-400 mb-1" htmlFor="plateNumber">Plate</label>
<input className="w-full h-11 rounded-lg bg-neutral-900/80 text-[13px] text-neutral-200 placeholder-neutral-500 ring-1 ring-white/10 focus:ring-blue-500/40 outline-none transition px-3 uppercase tracking-wide" id="plateNumber" placeholder="AA 73609" type="text"/>
</div>

<div className="relative">
<label className="block text-[12px] text-neutral-400 mb-1">Emirate</label>
<button className="w-full h-11 rounded-lg bg-neutral-900/80 text-[13px] text-neutral-300 ring-1 ring-white/10 hover:ring-blue-500/40 transition px-3 flex items-center justify-between" id="emirateSelectBtn" type="button">
<span id="emirateLabel">Select Emirate</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-10 left-0 right-0 mt-2 rounded-lg bg-neutral-900 ring-1 ring-white/10 shadow-lg overflow-hidden" id="emirateMenu">
<button className="w-full text-left px-3 py-2 text-[13px] text-neutral-300 hover:bg-white/5" data-emirate="abu_dhabi" data-label="Abu Dhabi · أبوظبي">Abu Dhabi · أبوظبي</button>
<button className="w-full text-left px-3 py-2 text-[13px] text-neutral-300 hover:bg-white/5" data-emirate="ajman" data-label="Ajman · عجمان">Ajman · عجمان</button>
<button className="w-full text-left px-3 py-2 text-[13px] text-neutral-300 hover:bg-white/5" data-emirate="dubai" data-label="Dubai · دبي">Dubai · دبي</button>
<button className="w-full text-left px-3 py-2 text-[13px] text-neutral-300 hover:bg-white/5" data-emirate="sharjah" data-label="Sharjah · الشارقة">Sharjah · الشارقة</button>
</div>
</div>

<div className="pt-1">
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-neutral-900 ring-1 ring-white/10 text-[13px] text-neutral-200 hover:ring-blue-500/40 hover:text-white transition" id="addCar" type="button">
<i className="w-4 h-4" data-lucide="plus-circle"></i>
<span>Add car</span>
</button>
</div>

<div className="hidden rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-3 space-y-2" id="savedCars">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-400">Saved cars</span>
<button className="text-[12px] text-neutral-400 hover:text-red-400" id="clearCars" type="button">Clear</button>
</div>
<div className="grid grid-cols-1 gap-2" id="carsList"></div>
</div>

<div>
<label className="block text-[12px] text-neutral-400 mb-1">Select parking duration (hours)</label>
<div className="flex flex-wrap gap-2" id="hoursPicker">

<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="1" type="button">1</button>
<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="2" type="button">2</button>
<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="3" type="button">3</button>
<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="4" type="button">4</button>
<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="5" type="button">5</button>
<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="6" type="button">6</button>
<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="12" type="button">12</button>
<button className="chip px-3 h-9 rounded-full bg-neutral-900/80 ring-1 ring-white/10 text-[13px] text-neutral-300 hover:ring-blue-500/40 hover:text-white transition" data-hours="24" type="button">24</button>
</div>
</div>

<div className="pt-1">
<button className="w-full h-11 rounded-lg text-[14px] font-medium tracking-tight text-neutral-900 disabled:text-neutral-700" disabled="" id="continueParking" style={{backgroundColor: '#1E88E5'}} type="button">
                  Continue
                </button>
<p className="mt-2 text-[12px] text-neutral-500" id="continueHint">Fill car, plate, emirate and hours.</p>
</div>
</form>
</div>

<div className="hidden absolute inset-0 z-50" id="parkingModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-x-4 bottom-4 rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4 shadow-xl origin-bottom scale-95 opacity-0 transition-all duration-200" id="parkingModalCard">
<div className="flex items-start justify-between">
<div>
<h4 className="text-[15px] font-semibold tracking-tight text-neutral-100">Parking Format</h4>
<p className="mt-1 text-[12px] text-neutral-400">Send the SMS in the exact format below</p>
</div>
<button className="h-8 w-8 rounded-md bg-neutral-950/60 ring-1 ring-white/10 hover:ring-blue-500/40 flex items-center justify-center" id="closeModal">
<i className="w-4 h-4 text-neutral-300" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 rounded-lg bg-neutral-950/70 ring-1 ring-white/10 p-3">
<code className="text-[13px] text-neutral-100" id="formatPreview">PARK — — —</code>
</div>
<div className="mt-2 text-[12px] text-neutral-500">
                Example: <span className="text-neutral-300">PARK AD AA73609 2</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="h-10 rounded-lg bg-neutral-900 ring-1 ring-white/10 text-[13px] text-neutral-200 hover:ring-blue-500/40" id="editModal">Edit</button>
<a className="h-10 rounded-lg text-center flex items-center justify-center text-[13px] font-medium tracking-tight text-neutral-900 hover:opacity-95" href="#" id="confirmSms" style={{backgroundColor: '#FFC107'}}>Confirm &amp; Open SMS</a>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 overflow-y-auto will-change-transform transition-all duration-300 ease-out opacity-0 pointer-events-none" data-screen="utilities" id="screen-utilities">
<div className="px-4 pt-4 pb-28 space-y-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-300" data-lucide="grid"></i>
<h2 className="text-xl tracking-tight font-semibold text-neutral-100">Utilities</h2>
</div>
<div className="rounded-xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
<p className="text-[13px] text-neutral-400">(Utilities content placeholder)</p>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4 text-left hover:ring-blue-500/40 transition">
<i className="w-5 h-5 text-neutral-300" data-lucide="link"></i>
<div className="mt-2 text-[13px] text-neutral-200">Shorten URL</div>
<div className="text-[11px] text-neutral-500">Coming soon</div>
</button>
<button className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4 text-left hover:ring-blue-500/40 transition">
<i className="w-5 h-5 text-neutral-300" data-lucide="share-2"></i>
<div className="mt-2 text-[13px] text-neutral-200">Share Profile</div>
<div className="text-[11px] text-neutral-500">Quick card</div>
</button>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 inset-x-0 z-40">
<div className="mx-auto max-w-md">
<div className="h-[68px] bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-t border-white/5">
<div className="grid grid-cols-4 h-full">
<button className="nav-item group flex flex-col items-center justify-center gap-1" data-target="home">
<i className="w-5 h-5 text-neutral-300 group-[.active]:text-blue-400" data-lucide="home"></i>
<span className="text-[11px] text-neutral-400 group-[.active]:text-blue-400">Home</span>
</button>
<button className="nav-item group flex flex-col items-center justify-center gap-1" data-target="aeroTags">
<i className="w-5 h-5 text-neutral-300 group-[.active]:text-blue-400" data-lucide="tag"></i>
<span className="text-[11px] text-neutral-400 group-[.active]:text-blue-400">AeroTags</span>
</button>
<button className="nav-item group flex flex-col items-center justify-center gap-1" data-target="parking">
<i className="w-5 h-5 text-neutral-300 group-[.active]:text-blue-400" data-lucide="car"></i>
<span className="text-[11px] text-neutral-400 group-[.active]:text-blue-400">Parking</span>
</button>
<button className="nav-item group flex flex-col items-center justify-center gap-1" data-target="utilities">
<i className="w-5 h-5 text-neutral-300 group-[.active]:text-blue-400" data-lucide="grid"></i>
<span className="text-[11px] text-neutral-400 group-[.active]:text-blue-400">Utilities</span>
</button>
</div>
</div>
</div>
</nav>

<div className="pointer-events-none fixed bottom-20 left-1/2 -translate-x-1/2 z-50 opacity-0 transition-all duration-300" id="toast">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 px-3 py-2 text-[13px] text-neutral-200 shadow-lg">
          Saved car
        </div>
</div>
</div>


    </>
  );
}
