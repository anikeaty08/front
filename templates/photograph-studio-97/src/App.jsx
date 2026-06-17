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



      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Booking state
      const state = {
        branch: null,
        service: null,
        price: 0,
        date: null,
        time: null,
      };

      const rupiah = (n) => n ? 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : '-';

      // Step navigation
      const showStep = (n) => {
        document.querySelectorAll('.step').forEach(el => {
          el.classList.toggle('hidden', el.getAttribute('data-step') !== String(n));
        });
        // update indicators
        const indicators = document.querySelectorAll('.step-indicator');
        indicators.forEach((el, i) => {
          const idx = i + 1;
          if (idx <= n) {
            el.classList.add('bg-white/[0.02]');
            el.querySelector('.h-5').classList.add('bg-[#5FA68B]');
            el.querySelector('.h-5').classList.remove('bg-white/10');
            el.querySelector('.h-5').classList.add('text-[#0B0F0E]');
          } else {
            el.querySelector('.h-5').classList.remove('bg-[#5FA68B]', 'text-[#0B0F0E]');
            el.querySelector('.h-5').classList.add('bg-white/10');
          }
        });
      };

      document.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', () => {
          const next = Number(btn.getAttribute('data-next'));
          // minimal validation
          if (next === 2 && !state.branch) { alert('Pilih cabang terlebih dahulu.'); return; }
          if (next === 3 && !state.service) { alert('Pilih layanan terlebih dahulu.'); return; }
          if (next === 4 && !state.date) { alert('Pilih tanggal terlebih dahulu.'); return; }
          if (next === 5 && !state.time) { alert('Pilih jam terlebih dahulu.'); return; }
          showStep(next);
          updateSummary();
        });
      });

      document.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', () => {
          const prev = Number(btn.getAttribute('data-prev'));
          showStep(prev);
          updateSummary();
        });
      });

      // Branch selection
      document.querySelectorAll('.select-branch').forEach(btn => {
        btn.addEventListener('click', () => {
          state.branch = btn.getAttribute('data-branch');
          document.querySelectorAll('.select-branch').forEach(b => b.classList.remove('ring', 'ring-1', 'ring-[#5FA68B]'));
          btn.classList.add('ring', 'ring-1', 'ring-[#5FA68B]');
          updateSidebar();
        });
      });

      // Service selection
      document.querySelectorAll('.select-service').forEach(btn => {
        btn.addEventListener('click', () => {
          state.service = btn.getAttribute('data-service');
          state.price = Number(btn.getAttribute('data-price')) || 0;
          document.querySelectorAll('.select-service').forEach(b => b.classList.remove('ring', 'ring-1', 'ring-[#5FA68B]'));
          btn.classList.add('ring', 'ring-1', 'ring-[#5FA68B]');
          updateSidebar();
        });
      });

      // Calendar
      const monthLabel = document.getElementById('monthLabel');
      const calendarGrid = document.getElementById('calendarGrid');
      let current = new Date();
      current.setDate(1);

      const monthNames = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
      const dayIndexMondayFirst = (d) => (d + 6) % 7; // convert Sunday=0 to Monday=0

      function renderCalendar() {
        const year = current.getFullYear();
        const month = current.getMonth();
        monthLabel.textContent = `${monthNames[month]} ${year}`;
        calendarGrid.innerHTML = '';

        const firstDay = new Date(year, month, 1);
        const startGap = dayIndexMondayFirst(firstDay.getDay());
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // leading blanks
        for (let i = 0; i < startGap; i++) {
          const cell = document.createElement('div');
          cell.className = 'h-12 sm:h-14 border-t border-white/10';
          calendarGrid.appendChild(cell);
        }

        const today = new Date(); today.setHours(0,0,0,0);

        for (let d = 1; d <= daysInMonth; d++) {
          const dateObj = new Date(year, month, d);
          const past = dateObj < today;
          const isSelected = state.date && new Date(state.date).toDateString() === dateObj.toDateString();

          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'h-12 sm:h-14 border-t border-white/10 text-sm';
          btn.classList.add('relative', 'hover:bg-white/5');

          const inner = document.createElement('div');
          inner.className = 'w-full h-full flex items-center justify-center';
          inner.textContent = d;

          if (past) {
            btn.disabled = true;
            inner.classList.add('text-[#4C5A56]');
          } else {
            btn.addEventListener('click', () => {
              state.date = new Date(year, month, d).toISOString();
              // visual
              calendarGrid.querySelectorAll('button').forEach(b => b.classList.remove('bg-[#5FA68B]', 'text-[#0B0F0E]'));
              btn.classList.add('bg-[#5FA68B]', 'text-[#0B0F0E]');
              updateSidebar();
            });
          }

          if (isSelected) {
            btn.classList.add('bg-[#5FA68B]', 'text-[#0B0F0E]');
          }

          btn.appendChild(inner);
          calendarGrid.appendChild(btn);
        }
      }

      document.getElementById('prevMonth').addEventListener('click', () => {
        current.setMonth(current.getMonth() - 1);
        renderCalendar();
      });
      document.getElementById('nextMonth').addEventListener('click', () => {
        current.setMonth(current.getMonth() + 1);
        renderCalendar();
      });

      // Timeslots
      const times = ['09:00','10:30','12:00','13:30','15:00','16:30','18:00'];
      const timeSlotsEl = document.getElementById('timeSlots');

      function renderTimes() {
        timeSlotsEl.innerHTML = '';
        times.forEach(t => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.textContent = t;
          btn.className = 'w-full h-10 rounded-md border border-white/10 hover:bg-white/5 text-sm';
          btn.addEventListener('click', () => {
            state.time = t;
            timeSlotsEl.querySelectorAll('button').forEach(b => b.classList.remove('ring', 'ring-1', 'ring-[#5FA68B]'));
            btn.classList.add('ring', 'ring-1', 'ring-[#5FA68B]');
            updateSidebar();
          });
          timeSlotsEl.appendChild(btn);
        });
      }

      function updateSidebar() {
        document.getElementById('chosenBranch').textContent = state.branch || '-';
        document.getElementById('chosenService').textContent = state.service || '-';
        document.getElementById('chosenDate').textContent = state.date ? new Date(state.date).toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) : '-';
        document.getElementById('chosenTime').textContent = state.time || '-';
        document.getElementById('estimatedPrice').textContent = state.price ? rupiah(state.price) : (state.service ? 'By Request' : '-');
        updateSummary();
      }

      function updateSummary() {
        const s = `
Cabang: ${state.branch || '-'}
Layanan: ${state.service || '-'}
Tanggal: ${state.date ? new Date(state.date).toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) : '-'}
Jam: ${state.time || '-'}
Estimasi: ${state.price ? rupiah(state.price) : (state.service ? 'By Request' : '-')}
        `.trim();
        const summaryEl = document.getElementById('summary');
        if (summaryEl) summaryEl.textContent = s;
      }

      // Booking form submit
      const form = document.getElementById('bookingForm');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!state.branch || !state.service || !state.date || !state.time) {
          alert('Lengkapi pilihan Anda terlebih dahulu.');
          return;
        }
        // simulate submit
        const toast = document.getElementById('toast');
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3200);
        form.reset();
      });

      // Initial renders
      renderCalendar();
      renderTimes();
      updateSidebar();
      document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F0E]/80 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a className="group inline-flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-[#5FA68B] text-[#0B0F0E] flex items-center justify-center tracking-tight font-semibold">S</div>
<div className="flex items-baseline gap-2">
<span className="text-[17px] sm:text-[18px] tracking-tight font-semibold">STUDIO40</span>
<span className="text-xs text-[#A6B5AE]">Jakarta</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-7">
<a className="text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#home">Beranda</a>
<a className="text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#portfolio">Portofolio</a>
<a className="text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#services">Layanan</a>
<a className="text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#pricing">Harga</a>
<a className="text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#branches">Cabang</a>
<a className="text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#booking">Booking</a>
<a className="text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#contact">Kontak</a>
</nav>

<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight bg-[#5FA68B] text-[#0B0F0E] px-4 h-10 rounded-md hover:bg-[#6CB79A] transition-colors outline-none ring-0 hover:outline hover:outline-1 hover:outline-white/15" href="#booking">
<span>Booking Sekarang</span>

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="3" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
</a>
<button aria-label="Buka menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/5 transition-colors outline-none hover:outline hover:outline-1 hover:outline-white/15" id="menuBtn">

<svg className="w-5 h-5 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18M3 12h18M3 18h18"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobileMenu">
<div className="px-4 py-3 flex flex-col gap-3">
<a className="py-2 text-sm text-[#CFE1D9] hover:text-white" href="#home">Beranda</a>
<a className="py-2 text-sm text-[#CFE1D9] hover:text-white" href="#portfolio">Portofolio</a>
<a className="py-2 text-sm text-[#CFE1D9] hover:text-white" href="#services">Layanan</a>
<a className="py-2 text-sm text-[#CFE1D9] hover:text-white" href="#pricing">Harga</a>
<a className="py-2 text-sm text-[#CFE1D9] hover:text-white" href="#branches">Cabang</a>
<a className="py-2 text-sm text-[#CFE1D9] hover:text-white" href="#booking">Booking</a>
<a className="py-2 text-sm text-[#CFE1D9] hover:text-white" href="#contact">Kontak</a>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight font-semibold">
              Studio foto untuk momen paling berarti Anda.
            </h1>
<p className="mt-4 text-[15px] sm:text-base text-[#B7C7C0] max-w-xl">
              Studio40 menghadirkan pengalaman sesi foto yang fokus pada detail, cahaya, dan rasa. Dua cabang di Jakarta: Pesanggrahan &amp; Pos Pengumben.
            </p>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 bg-[#5FA68B] text-[#0B0F0E] px-5 h-11 rounded-md text-sm font-medium tracking-tight hover:bg-[#6CB79A] transition-colors hover:outline hover:outline-1 hover:outline-white/15" href="#booking">
                Mulai Booking
                
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M7 7h10v10"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 px-5 h-11 rounded-md text-sm font-medium tracking-tight border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors" href="#portfolio">
                Lihat Portofolio
                
<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="3" width="18" x="3" y="6"></rect>
<circle cx="12" cy="13" r="4"></circle>
<path d="M9 6l1.5-2h3L15 6"></path>
</svg>
</a>
</div>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
<div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
<div className="text-[22px] tracking-tight font-semibold">1500+</div>
<div className="text-[#9FB2AA]">Sesi terselenggara</div>
</div>
<div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
<div className="text-[22px] tracking-tight font-semibold">4.9/5</div>
<div className="text-[#9FB2AA]">Rata-rata ulasan</div>
</div>
<div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
<div className="text-[22px] tracking-tight font-semibold">2</div>
<div className="text-[#9FB2AA]">Cabang</div>
</div>
<div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
<div className="text-[22px] tracking-tight font-semibold">48h</div>
<div className="text-[#9FB2AA]">Turnaround</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 sm:gap-4">
<img alt="Potret 1" className="h-64 sm:h-80 w-full object-cover rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Potret 2" className="h-64 sm:h-80 w-full object-cover rounded-lg border border-white/10 translate-y-6" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Potret 3" className="h-64 sm:h-80 w-full object-cover rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Potret 4" className="h-64 sm:h-80 w-full object-cover rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Potret 5" className="h-64 sm:h-80 w-full object-cover rounded-lg border border-white/10 translate-y-6" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Potret 6" className="h-64 sm:h-80 w-full object-cover rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold">Portofolio Pilihan</h2>
<p className="text-[#A6B5AE] mt-2 text-[15px]">Rangkaian karya terbaru dari tim Studio40.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-[#CFE1D9] hover:text-white transition-colors" href="#booking">
            Booking sesi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M7 7h10v10"></path>
</svg>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<figure className="group relative rounded-lg overflow-hidden border border-white/10">
<img alt="Editorial 1" className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black/50 to-transparent">
<div>
<div className="text-sm text-white/90">Editorial</div>
<div className="text-[17px] font-medium tracking-tight">Tone Natural</div>
</div>
</figcaption>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-white/10">
<img alt="Couple" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<figcaption className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black/50 to-transparent">
<div>
<div className="text-sm text-white/90">Couple</div>
<div className="text-[17px] font-medium tracking-tight">Intimate &amp; Warm</div>
</div>
</figcaption>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-white/10">
<img alt="Potret" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black/50 to-transparent">
<div>
<div className="text-sm text-white/90">Portrait</div>
<div className="text-[17px] font-medium tracking-tight">Studio Clean</div>
</div>
</figcaption>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-white/10">
<img alt="Produk" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1557053964-937650b63311?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black/50 to-transparent">
<div>
<div className="text-sm text-white/90">Produk</div>
<div className="text-[17px] font-medium tracking-tight">Detail-Driven</div>
</div>
</figcaption>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-white/10">
<img alt="Family" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black/50 to-transparent">
<div>
<div className="text-sm text-white/90">Family</div>
<div className="text-[17px] font-medium tracking-tight">Cozy &amp; Genuine</div>
</div>
</figcaption>
</figure>
<figure className="group relative rounded-lg overflow-hidden border border-white/10">
<img alt="Corporate" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black/50 to-transparent">
<div>
<div className="text-sm text-white/90">Corporate</div>
<div className="text-[17px] font-medium tracking-tight">Clean Profile</div>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold">Layanan</h2>
<p className="text-[#A6B5AE] mt-2 text-[15px]">Paket yang dirancang ringkas, fleksibel, dan transparan.</p>
</div>
<div className="hidden sm:flex gap-2">
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-md border border-white/10 text-xs text-[#CFE1D9]">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 7v6l4 2"></path>
</svg>
              Waktu fleksibel
            </span>
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-md border border-white/10 text-xs text-[#CFE1D9]">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
              Retouch halus
            </span>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold">Personal Portrait</h3>

<svg className="w-5 h-5 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<p className="mt-2 text-sm text-[#A6B5AE]">Satu orang, gaya editorial atau profil profesional.</p>
<ul className="mt-4 space-y-2 text-sm text-[#CFE1D9]">
<li className="flex items-center gap-2">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> 60 menit
                </li>
<li className="flex items-center gap-2">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> 10 foto terpilih (retouch)
                </li>
<li className="flex items-center gap-2">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Semua file preview
                </li>
</ul>
</div>
<div className="mt-5 flex items-center justify-between">
<div>
<div className="text-[13px] text-[#A6B5AE]">Mulai</div>
<div className="text-[18px] tracking-tight font-semibold">Rp 750.000</div>
</div>
<button className="select-service inline-flex items-center gap-2 px-3 h-10 rounded-md bg-white/5 hover:bg-white/10 text-sm" data-price="750000" data-service="Personal Portrait">Pilih</button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold">Family</h3>

<svg className="w-5 h-5 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21a4 4 0 1 0-8 0"></path><circle cx="12" cy="7" r="4"></circle><path d="M22 21a4 4 0 0 0-6-3.46"></path><path d="M8 17.54A4 4 0 0 0 2 21"></path></svg>
</div>
<p className="mt-2 text-sm text-[#A6B5AE]">Keluarga sampai 6 orang, hasil hangat dan natural.</p>
<ul className="mt-4 space-y-2 text-sm text-[#CFE1D9]">
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> 90 menit</li>
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> 15 foto terpilih</li>
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Styling &amp; arahan</li>
</ul>
</div>
<div className="mt-5 flex items-center justify-between">
<div>
<div className="text-[13px] text-[#A6B5AE]">Mulai</div>
<div className="text-[18px] tracking-tight font-semibold">Rp 1.250.000</div>
</div>
<button className="select-service inline-flex items-center gap-2 px-3 h-10 rounded-md bg-white/5 hover:bg-white/10 text-sm" data-price="1250000" data-service="Family">Pilih</button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold">Prewedding</h3>

<svg className="w-5 h-5 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 11.1 12 20l-8.8-8.9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 8.8 5.1Z"></path></svg>
</div>
<p className="mt-2 text-sm text-[#A6B5AE]">Konsep intim di studio, fokus chemistry &amp; detail.</p>
<ul className="mt-4 space-y-2 text-sm text-[#CFE1D9]">
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> 120 menit</li>
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> 20 foto terpilih</li>
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Konsultasi konsep</li>
</ul>
</div>
<div className="mt-5 flex items-center justify-between">
<div>
<div className="text-[13px] text-[#A6B5AE]">Mulai</div>
<div className="text-[18px] tracking-tight font-semibold">Rp 2.500.000</div>
</div>
<button className="select-service inline-flex items-center gap-2 px-3 h-10 rounded-md bg-white/5 hover:bg-white/10 text-sm" data-price="2500000" data-service="Prewedding">Pilih</button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold">Komersial</h3>

<svg className="w-5 h-5 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="18" x="3" y="7"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</div>
<p className="mt-2 text-sm text-[#A6B5AE]">Produk, katalog, profile—custom sesuai kebutuhan.</p>
<ul className="mt-4 space-y-2 text-sm text-[#CFE1D9]">
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Durasi fleksibel</li>
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Tim styling</li>
<li className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Lisensi penggunaan</li>
</ul>
</div>
<div className="mt-5 flex items-center justify-between">
<div>
<div className="text-[13px] text-[#A6B5AE]">Mulai</div>
<div className="text-[18px] tracking-tight font-semibold">Hubungi kami</div>
</div>
<button className="select-service inline-flex items-center gap-2 px-3 h-10 rounded-md bg-white/5 hover:bg-white/10 text-sm" data-price="0" data-service="Komersial (Custom)">Pilih</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold">Harga Transparan</h2>
<p className="text-[#A6B5AE] mt-2 text-[15px] max-w-2xl">Termasuk studio, lighting, arahan pose, dan retouch halus. Untuk kebutuhan khusus, kami siapkan paket custom dengan proposal cepat.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="text-[18px] tracking-tight font-semibold">Add-on</div>
<ul className="mt-3 text-sm text-[#CFE1D9] space-y-2">
<li className="flex items-center justify-between"><span>Makeup Artist</span><span className="text-[#A6B5AE]">Mulai Rp 400.000</span></li>
<li className="flex items-center justify-between"><span>Extra Outfit</span><span className="text-[#A6B5AE]">Rp 150.000</span></li>
<li className="flex items-center justify-between"><span>Ekspress 24 Jam</span><span className="text-[#A6B5AE]">Rp 250.000</span></li>
</ul>
</div>
<div className="rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="text-[18px] tracking-tight font-semibold">Pembayaran</div>
<ul className="mt-3 text-sm text-[#CFE1D9] space-y-2">
<li className="flex items-center gap-2">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> DP 30% untuk mengunci slot
                  </li>
<li className="flex items-center gap-2">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Pelunasan di hari H
                  </li>
<li className="flex items-center gap-2">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5FA68B]"></span> Transfer/QRIS tersedia
                  </li>
</ul>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="text-[18px] tracking-tight font-semibold">Alur Booking</div>
<ol className="mt-4 space-y-4">
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-[#5FA68B] text-[#0B0F0E] flex items-center justify-center text-[12px] font-semibold">1</div>
<div>
<div className="text-sm font-medium tracking-tight">Pilih cabang &amp; layanan</div>
<div className="text-xs text-[#A6B5AE] mt-1">Pesanggrahan atau Pos Pengumben, lalu pilih paket.</div>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-[12px]">2</div>
<div>
<div className="text-sm font-medium tracking-tight">Pilih tanggal &amp; jam</div>
<div className="text-xs text-[#A6B5AE] mt-1">Lihat slot tersedia secara realtime.</div>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-[12px]">3</div>
<div>
<div className="text-sm font-medium tracking-tight">Isi data &amp; konfirmasi</div>
<div className="text-xs text-[#A6B5AE] mt-1">Kami kirim Whatsapp/Email untuk DP &amp; detail.</div>
</div>
</li>
</ol>
<a className="mt-5 inline-flex items-center gap-2 text-sm text-[#CFE1D9] hover:text-white" href="#booking">
              Mulai sekarang
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M7 7h10v10"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="branches">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold">Cabang Studio40</h2>
<p className="text-[#A6B5AE] mt-2 text-[15px]">Pilih cabang terdekat untuk pengalaman terbaik.</p>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-6">

<div className="rounded-lg border border-white/10 overflow-hidden">
<div className="aspect-[16/9] bg-white/5">
<img alt="Studio Pesanggrahan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" />
</img></div>
<div className="p-5 bg-white/[0.02]">
<div className="flex items-center justify-between">
<div>
<div className="text-[18px] tracking-tight font-semibold">Pesanggrahan</div>
<div className="text-sm text-[#A6B5AE]">Jakarta Selatan</div>
</div>
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-md border border-white/10 text-xs text-[#CFE1D9]">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"></path>
<circle cx="12" cy="10" r="2.5"></circle>
</svg>
                  Rute
                </span>
</div>
<div className="mt-3 text-sm text-[#CFE1D9]">Jl. Pesanggrahan, Jakarta Selatan</div>
<div className="mt-2 text-xs text-[#A6B5AE]">Setiap hari 09.00—20.00</div>
<div className="mt-4 flex gap-2">
<button className="select-branch inline-flex items-center gap-2 px-3 h-10 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A]" data-branch="Pesanggrahan">Pilih cabang</button>
<a className="inline-flex items-center gap-2 px-3 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" href="#booking">Cek slot</a>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 overflow-hidden">
<div className="aspect-[16/9] bg-white/5">
<img alt="Studio Pos Pengumben" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
</img></div>
<div className="p-5 bg-white/[0.02]">
<div className="flex items-center justify-between">
<div>
<div className="text-[18px] tracking-tight font-semibold">Pos Pengumben</div>
<div className="text-sm text-[#A6B5AE]">Jakarta Barat</div>
</div>
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-md border border-white/10 text-xs text-[#CFE1D9]">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"></path>
<circle cx="12" cy="10" r="2.5"></circle>
</svg>
                  Rute
                </span>
</div>
<div className="mt-3 text-sm text-[#CFE1D9]">Jl. Pos Pengumben, Jakarta Barat</div>
<div className="mt-2 text-xs text-[#A6B5AE]">Setiap hari 09.00—20.00</div>
<div className="mt-4 flex gap-2">
<button className="select-branch inline-flex items-center gap-2 px-3 h-10 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A]" data-branch="Pos Pengumben">Pilih cabang</button>
<a className="inline-flex items-center gap-2 px-3 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" href="#booking">Cek slot</a>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<div className="text-[18px] tracking-tight font-semibold">Parkir &amp; Akses</div>
<div className="text-sm text-[#A6B5AE] mt-1">Parkir tersedia di kedua cabang. Lift barang &amp; akses kursi roda.</div>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" href="#contact">

<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.5 19.5 0 0 1-8.49-3.07 19.3 19.3 0 0 1-6-6A19.5 19.5 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h2A2 2 0 0 1 8 3.72a12.9 12.9 0 0 0 .7 2.2 2 2 0 0 1-.45 2.11L7 9a16 16 0 0 0 8 8l1-.9a2 2 0 0 1 2.11-.45 12.9 12.9 0 0 0 2.2.7A2 2 0 0 1 22 16.92Z"></path></svg>
                Telepon
              </a>
<a className="inline-flex items-center gap-2 px-4 h-10 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A]" href="#booking">Booking</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="booking">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold">Booking Sesi</h2>
<p className="text-[#A6B5AE] mt-2 text-[15px]">Pilih cabang, layanan, tanggal, jam, lalu isi data Anda.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-[#A6B5AE]">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path></svg>
            Data Anda aman &amp; rahasia.
          </div>
</div>

<div className="mt-6 grid grid-cols-5 gap-2 text-xs">
<div className="step-indicator relative flex items-center gap-2 p-3 rounded-md border border-white/10 bg-white/[0.02]">
<div className="h-5 w-5 rounded-full bg-[#5FA68B] text-[#0B0F0E] flex items-center justify-center text-[11px] font-semibold">1</div>
<div>Pilih Cabang</div>
</div>
<div className="step-indicator relative flex items-center gap-2 p-3 rounded-md border border-white/10 bg-white/5/0">
<div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[11px]">2</div>
<div>Layanan</div>
</div>
<div className="step-indicator relative flex items-center gap-2 p-3 rounded-md border border-white/10 bg-white/5/0">
<div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[11px]">3</div>
<div>Tanggal</div>
</div>
<div className="step-indicator relative flex items-center gap-2 p-3 rounded-md border border-white/10 bg-white/5/0">
<div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[11px]">4</div>
<div>Jam</div>
</div>
<div className="step-indicator relative flex items-center gap-2 p-3 rounded-md border border-white/10 bg-white/5/0">
<div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[11px]">5</div>
<div>Data &amp; Kirim</div>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-[1.3fr,0.7fr] gap-6">

<div className="space-y-4">

<div className="step card rounded-lg border border-white/10 p-5 bg-white/[0.02]" data-step="1">
<div className="flex items-center justify-between">
<div className="text-[18px] tracking-tight font-semibold">Pilih Cabang</div>
<div className="text-xs text-[#A6B5AE]">Langkah 1 dari 5</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<button className="select-branch w-full text-left p-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors" data-branch="Pesanggrahan">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Pesanggrahan</div>
<div className="text-xs text-[#A6B5AE] mt-1">Jakarta Selatan</div>
</div>

<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"></path>
<circle cx="12" cy="10" r="2.5"></circle>
</svg>
</div>
</button>
<button className="select-branch w-full text-left p-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors" data-branch="Pos Pengumben">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Pos Pengumben</div>
<div className="text-xs text-[#A6B5AE] mt-1">Jakarta Barat</div>
</div>
<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"></path>
<circle cx="12" cy="10" r="2.5"></circle>
</svg>
</div>
</button>
</div>
<div className="mt-4 flex justify-end">
<button className="next-step inline-flex items-center gap-2 px-4 h-10 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A]" data-next="2">Lanjut</button>
</div>
</div>

<div className="step card rounded-lg border border-white/10 p-5 bg-white/[0.02] hidden" data-step="2">
<div className="flex items-center justify-between">
<div className="text-[18px] tracking-tight font-semibold">Pilih Layanan</div>
<div className="text-xs text-[#A6B5AE]">Langkah 2 dari 5</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<button className="select-service w-full text-left p-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" data-price="750000" data-service="Personal Portrait">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Personal Portrait</div>
<div className="text-xs text-[#A6B5AE] mt-1">Mulai Rp 750.000</div>
</div>

<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="3" width="18" x="3" y="6"></rect><circle cx="12" cy="13" r="4"></circle></svg>
</div>
</button>
<button className="select-service w-full text-left p-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" data-price="1250000" data-service="Family">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Family</div>
<div className="text-xs text-[#A6B5AE] mt-1">Mulai Rp 1.250.000</div>
</div>

<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21a4 4 0 1 0-8 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</button>
<button className="select-service w-full text-left p-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" data-price="2500000" data-service="Prewedding">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Prewedding</div>
<div className="text-xs text-[#A6B5AE] mt-1">Mulai Rp 2.500.000</div>
</div>

<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 11.1 12 20l-8.8-8.9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 8.8 5.1Z"></path></svg>
</div>
</button>
<button className="select-service w-full text-left p-4 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" data-price="0" data-service="Komersial (Custom)">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Komersial (Custom)</div>
<div className="text-xs text-[#A6B5AE] mt-1">Konsultasi dulu</div>
</div>

<svg className="w-4 h-4 text-[#CFE1D9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="18" x="3" y="7"></rect></svg>
</div>
</button>
</div>
<div className="mt-4 flex justify-between">
<button className="prev-step inline-flex items-center gap-2 px-4 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" data-prev="1">Kembali</button>
<button className="next-step inline-flex items-center gap-2 px-4 h-10 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A]" data-next="3">Lanjut</button>
</div>
</div>

<div className="step card rounded-lg border border-white/10 p-5 bg-white/[0.02] hidden" data-step="3">
<div className="flex items-center justify-between">
<div className="text-[18px] tracking-tight font-semibold">Pilih Tanggal</div>
<div className="text-xs text-[#A6B5AE]">Langkah 3 dari 5</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-sm text-[#CFE1D9]">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="3" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
<span id="monthLabel">Bulan</span>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-md border border-white/10 hover:bg-white/5 flex items-center justify-center" id="prevMonth">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<button className="w-9 h-9 rounded-md border border-white/10 hover:bg-white/5 flex items-center justify-center" id="nextMonth">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-4 border border-white/10 rounded-lg overflow-hidden">
<div className="grid grid-cols-7 text-center text-xs bg-white/[0.03] border-b border-white/10">
<div className="py-2 text-[#A6B5AE]">Sen</div>
<div className="py-2 text-[#A6B5AE]">Sel</div>
<div className="py-2 text-[#A6B5AE]">Rab</div>
<div className="py-2 text-[#A6B5AE]">Kam</div>
<div className="py-2 text-[#A6B5AE]">Jum</div>
<div className="py-2 text-[#A6B5AE]">Sab</div>
<div className="py-2 text-[#A6B5AE]">Min</div>
</div>
<div className="grid grid-cols-7" id="calendarGrid"></div>
</div>
<div className="mt-4 flex justify-between">
<button className="prev-step inline-flex items-center gap-2 px-4 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" data-prev="2">Kembali</button>
<button className="next-step inline-flex items-center gap-2 px-4 h-10 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A]" data-next="4">Lanjut</button>
</div>
</div>

<div className="step card rounded-lg border border-white/10 p-5 bg-white/[0.02] hidden" data-step="4">
<div className="flex items-center justify-between">
<div className="text-[18px] tracking-tight font-semibold">Pilih Jam</div>
<div className="text-xs text-[#A6B5AE]">Langkah 4 dari 5</div>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2" id="timeSlots">

</div>
<div className="mt-4 flex justify-between">
<button className="prev-step inline-flex items-center gap-2 px-4 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" data-prev="3">Kembali</button>
<button className="next-step inline-flex items-center gap-2 px-4 h-10 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A]" data-next="5">Lanjut</button>
</div>
</div>

<div className="step card rounded-lg border border-white/10 p-5 bg-white/[0.02] hidden" data-step="5">
<div className="flex items-center justify-between">
<div className="text-[18px] tracking-tight font-semibold">Data Pemesan</div>
<div className="text-xs text-[#A6B5AE]">Langkah 5 dari 5</div>
</div>
<form className="mt-4 grid sm:grid-cols-2 gap-4" id="bookingForm">
<div className="sm:col-span-1">
<label className="text-xs text-[#A6B5AE]">Nama Lengkap</label>
<input className="mt-1 w-full h-11 px-3 rounded-md bg-[#0F1412] border border-white/10 outline-none focus:border-[#5FA68B] text-sm" name="name" placeholder="Nama Anda" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-[#A6B5AE]">Email</label>
<input className="mt-1 w-full h-11 px-3 rounded-md bg-[#0F1412] border border-white/10 outline-none focus:border-[#5FA68B] text-sm" name="email" placeholder="email@contoh.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-[#A6B5AE]">No. Whatsapp</label>
<input className="mt-1 w-full h-11 px-3 rounded-md bg-[#0F1412] border border-white/10 outline-none focus:border-[#5FA68B] text-sm" name="phone" placeholder="08xxxxxxxxxx" required="" type="tel"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-[#A6B5AE]">Catatan (opsional)</label>
<input className="mt-1 w-full h-11 px-3 rounded-md bg-[#0F1412] border border-white/10 outline-none focus:border-[#5FA68B] text-sm" name="note" placeholder="Preferensi, outfit, dll." type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-[#A6B5AE]">Ringkasan</label>
<div className="mt-1 w-full p-4 rounded-md bg-[#0F1412] border border-white/10 text-sm text-[#CFE1D9]" id="summary">
                    -
                  </div>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<button className="prev-step inline-flex items-center gap-2 px-4 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" data-prev="4" type="button">Kembali</button>
<button className="inline-flex items-center gap-2 px-5 h-11 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm font-medium hover:bg-[#6CB79A]" type="submit">
                    Kirim Booking
                    
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</form>
</div>
</div>

<aside className="space-y-4">
<div className="rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="text-[16px] tracking-tight font-semibold">Pilihan Anda</div>
<div className="mt-3 text-sm text-[#CFE1D9] space-y-2">
<div className="flex items-center justify-between">
<span>Cabang</span>
<span className="text-[#A6B5AE]" id="chosenBranch">-</span>
</div>
<div className="flex items-center justify-between">
<span>Layanan</span>
<span className="text-[#A6B5AE]" id="chosenService">-</span>
</div>
<div className="flex items-center justify-between">
<span>Tanggal</span>
<span className="text-[#A6B5AE]" id="chosenDate">-</span>
</div>
<div className="flex items-center justify-between">
<span>Jam</span>
<span className="text-[#A6B5AE]" id="chosenTime">-</span>
</div>
</div>
<div className="mt-4 border-t border-white/10 pt-4 flex items-center justify-between">
<span className="text-sm">Estimasi</span>
<span className="text-[18px] tracking-tight font-semibold" id="estimatedPrice">-</span>
</div>
</div>
<div className="rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="text-[16px] tracking-tight font-semibold">Butuh bantuan?</div>
<p className="text-xs text-[#A6B5AE] mt-1">Tim kami siap bantu melalui Whatsapp &amp; Email.</p>
<div className="mt-3 flex flex-col gap-2">
<a className="inline-flex items-center gap-2 px-3 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" href="#contact">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-4.2-7.6L22 3l-1 4.9A9 9 0 0 1 21 12Z"></path></svg>
                  Whatsapp
                </a>
<a className="inline-flex items-center gap-2 px-3 h-10 rounded-md border border-white/10 text-sm hover:bg-white/5" href="#contact">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"></path><path d="m22 6-10 7L2 6"></path></svg>
                  Email
                </a>
</div>
</div>
</aside>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 hidden" id="toast">
<div className="inline-flex items-center gap-2 px-4 h-11 rounded-md bg-[#0F1412] border border-white/10 text-sm shadow-lg">

<svg className="w-4 h-4 text-[#5FA68B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9"></circle><path d="M9 12l2 2 4-4"></path></svg>
            Booking terkirim. Kami akan menghubungi Anda.
          </div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold">Pertanyaan Umum</h2>
<div className="mt-6 divide-y divide-white/10 rounded-lg border border-white/10 overflow-hidden">
<details className="group open:bg-white/[0.02]">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">Berapa lama proses retouch?</span>
<svg className="w-4 h-4 text-[#CFE1D9] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-4 text-sm text-[#A6B5AE]">Standar 48 jam kerja. Opsi ekspress 24 jam tersedia.</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">Apakah bisa bawa outfit sendiri?</span>
<svg className="w-4 h-4 text-[#CFE1D9] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-4 text-sm text-[#A6B5AE]">Sangat bisa. Kami juga bantu styling di lokasi.</div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">Bagaimana kebijakan reschedule?</span>
<svg className="w-4 h-4 text-[#CFE1D9] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-4 text-sm text-[#A6B5AE]">Gratis H-2, setelah itu dikenakan biaya reschedule 20%.</div>
</details>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold">Hubungi Studio40</h2>
<p className="text-[#A6B5AE] mt-2 text-[15px]">Kami biasanya merespon dalam 1–3 jam kerja.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<a className="rounded-lg border border-white/10 p-5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors" href="mailto:hello@studio40.id">
<div className="text-sm text-[#CFE1D9] flex items-center gap-2">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"></path><path d="m22 6-10 7L2 6"></path></svg>
                  Email
                </div>
<div className="mt-2 text-[17px] tracking-tight font-medium">hello@studio40.id</div>
</a>
<a className="rounded-lg border border-white/10 p-5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors" href="#">
<div className="text-sm text-[#CFE1D9] flex items-center gap-2">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.5 19.5 0 0 1-8.49-3.07 19.3 19.3 0 0 1-6-6A19.5 19.5 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h2A2 2 0 0 1 8 3.72a12.9 12.9 0 0 0 .7 2.2 2 2 0 0 1-.45 2.11L7 9a16 16 0 0 0 8 8l1-.9a2 2 0 0 1 2.11-.45 12.9 12.9 0 0 0 2.2.7A2 2 0 0 1 22 16.92Z"></path></svg>
                  Whatsapp
                </div>
<div className="mt-2 text-[17px] tracking-tight font-medium">+62 812-0000-0040</div>
</a>
<a className="rounded-lg border border-white/10 p-5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors" href="#">
<div className="text-sm text-[#CFE1D9] flex items-center gap-2">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="5" width="18" x="3" y="3"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17" cy="7" r="1"></circle></svg>
                  Instagram
                </div>
<div className="mt-2 text-[17px] tracking-tight font-medium">@studio40.id</div>
</a>
<div className="rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="text-sm text-[#CFE1D9] flex items-center gap-2">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6l4 2"></path></svg>
                  Jam Operasional
                </div>
<div className="mt-2 text-[17px] tracking-tight font-medium">09.00—20.00 (Setiap hari)</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-5 bg-white/[0.02]">
<div className="text-[18px] tracking-tight font-semibold">Form Pesan Singkat</div>
<form className="mt-4 grid gap-3">
<input className="w-full h-11 px-3 rounded-md bg-[#0F1412] border border-white/10 outline-none focus:border-[#5FA68B] text-sm" placeholder="Nama" type="text"/>
<input className="w-full h-11 px-3 rounded-md bg-[#0F1412] border border-white/10 outline-none focus:border-[#5FA68B] text-sm" placeholder="Email" type="email"/>
<textarea className="w-full px-3 py-2 rounded-md bg-[#0F1412] border border-white/10 outline-none focus:border-[#5FA68B] text-sm" placeholder="Pesan" rows="5"></textarea>
<button className="inline-flex items-center gap-2 px-4 h-11 rounded-md bg-[#5FA68B] text-[#0B0F0E] text-sm hover:bg-[#6CB79A] w-fit" type="button">
                Kirim
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-[#5FA68B] text-[#0B0F0E] flex items-center justify-center tracking-tight font-semibold">S</div>
<div>
<div className="text-[15px] tracking-tight font-semibold">Studio40</div>
<div className="text-xs text-[#A6B5AE]">Pesanggrahan &amp; Pos Pengumben, Jakarta</div>
</div>
</div>
<div className="text-xs text-[#A6B5AE]">© <span id="year"></span> Studio40. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
