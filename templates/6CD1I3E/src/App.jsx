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
      
      // Icon render
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // View management
      const views = ['splash-1','splash-2','splash-3','auth','home','business','confirm'];
      const showView = (key) => {
        views.forEach(v => {
          const el = document.getElementById('view-' + v);
          if (!el) return;
          if (v === key) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
        // Re-render icons if necessary
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      };

      // Auto-advance splash
      let splashTimer;
      const startSplash = () => {
        clearTimeout(splashTimer);
        showView('splash-1');
        splashTimer = setTimeout(() => { showView('splash-2'); 
          splashTimer = setTimeout(() => { showView('splash-3'); }, 1400);
        }, 1400);
      };
      startSplash();

      // Navigation
      document.body.addEventListener('click', (e) => {
        const navBtn = e.target.closest('[data-navigate]');
        if (navBtn) {
          const to = navBtn.getAttribute('data-navigate');
          if (to === 'splash-1' || to === 'splash-2' || to === 'splash-3') startSplash();
          else showView(to);
        }
      });

      // Signup -> Home
      const btnSignup = document.getElementById('btnSignup');
      if (btnSignup) {
        btnSignup.addEventListener('click', () => {
          showView('home');
        });
      }

      // TOS custom checkbox
      const tosCheck = document.getElementById('tosCheck');
      const tosIcon = document.getElementById('tosIcon');
      if (tosCheck) {
        tosCheck.addEventListener('click', () => {
          const isOn = tosIcon.classList.toggle('hidden') === false;
          tosCheck.classList.toggle('ring-emerald-400/40', isOn);
          tosCheck.classList.toggle('bg-emerald-500/20', isOn);
        });
      }

      // Sector chips (visual toggle)
      document.querySelectorAll('.sector-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.sector-chip').forEach(c => c.classList.remove('bg-white','text-[#0b0e12]'));
          document.querySelectorAll('.sector-chip').forEach(c => c.classList.add('bg-white/5','ring-1','ring-white/10','text-white'));
          chip.classList.remove('bg-white/5','ring-1','ring-white/10','text-white');
          chip.classList.add('bg-white','text-[#0b0e12]');
        });
      });

      // Capture business selection
      let current = {
        business: '',
        service: '',
        price: '',
        day: 'Bugün',
        time: ''
      };

      document.body.addEventListener('click', (e) => {
        const bizBtn = e.target.closest('[data-business]');
        if (bizBtn) {
          current.business = bizBtn.getAttribute('data-business');
          document.getElementById('bizName').textContent = current.business;
          document.getElementById('barService').textContent = 'Hizmet seçiniz';
          document.getElementById('barMeta').textContent = 'Tarih · Saat';
          current.service = ''; current.time = '';
          // hide booking bar
          toggleBookingBar(false);
          showView('business');
        }
      });

      // Service selection
      document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.service-card').forEach(c => c.classList.remove('ring-emerald-400/40','bg-emerald-500/10'));
          card.classList.add('ring-emerald-400/40','bg-emerald-500/10');
          current.service = card.getAttribute('data-service');
          current.price = card.getAttribute('data-price');
          updateBar();
        });
      });

      // Day chips
      document.querySelectorAll('.day-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.day-chip').forEach(c => {
            c.classList.remove('bg-white','text-[#0b0e12]');
            c.classList.add('bg-white/5','ring-1','ring-white/10','text-white');
          });
          chip.classList.remove('bg-white/5','ring-1','ring-white/10','text-white');
          chip.classList.add('bg-white','text-[#0b0e12]');
          current.day = chip.getAttribute('data-day');
          updateBar();
        });
      });

      // Time slots
      const timeGrid = document.getElementById('timeGrid');
      timeGrid.addEventListener('click', (e) => {
        const slot = e.target.closest('.time-slot');
        if (!slot) return;
        timeGrid.querySelectorAll('.time-slot').forEach(s => s.classList.remove('bg-white','text-[#0b0e12]'));
        timeGrid.querySelectorAll('.time-slot').forEach(s => s.classList.add('bg-white/5','text-white'));
        slot.classList.remove('bg-white/5','text-white');
        slot.classList.add('bg-white','text-[#0b0e12]');
        current.time = slot.textContent.trim();
        updateBar();
      });

      function updateBar() {
        const meta = [];
        if (current.day) meta.push(current.day);
        if (current.time) meta.push(current.time);
        document.getElementById('barService').textContent = current.service || 'Hizmet seçiniz';
        document.getElementById('barMeta').textContent = meta.length ? meta.join(' · ') : 'Tarih · Saat';
        toggleBookingBar(Boolean(current.service && current.time));
      }

      function toggleBookingBar(show) {
        const bar = document.getElementById('bookingBar');
        if (show) {
          bar.classList.remove('opacity-0','translate-y-2','pointer-events-none');
        } else {
          bar.classList.add('opacity-0','translate-y-2','pointer-events-none');
        }
      }

      // Confirm
      const btnConfirm = document.getElementById('btnConfirm');
      if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
          document.getElementById('cBiz').textContent = current.business || '—';
          document.getElementById('cService').textContent = current.service ? `${current.service} · ${current.price} TL` : '—';
          document.getElementById('cDate').textContent = current.day || '—';
          document.getElementById('cTime').textContent = current.time || '—';
          showView('confirm');
        });
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
      
<div className="min-h-screen w-full flex sm:p-6 pt-0 pr-0 pb-0 pl-0 items-center justify-center">
<div className="relative w-full max-w-md bg-[#0d1117] sm:rounded-2xl sm:ring-1 sm:ring-white/10 overflow-hidden">

<div className="hidden sm:block absolute inset-x-0 top-0 h-10 bg-gradient-to-b to-transparent pointer-events-none from-white/5"></div>

<div className="relative" id="app-views">

<section className="min-h-[100dvh] flex flex-col items-center justify-between hidden" id="view-splash-1">
<div aria-hidden="true" className="absolute inset-0 opacity-[0.08] pointer-events-none">
<div className="absolute -top-32 -left-24 w-80 h-80 rounded-full blur-3xl bg-orange-400"></div>
<div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full blur-3xl bg-yellow-400"></div>
</div>
<header className="w-full px-6 pt-12 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/10 ring-white/15">
<span className="text-sm font-semibold tracking-tight">AR</span>
</div>
<span className="text-sm text-white/60">Randevu</span>
</div>
<button className="text-xs transition-colors text-white/60 hover:text-white" data-navigate="auth">Atla</button>
</header>
<main className="flex-1 w-full px-6 grid place-items-center">
<div className="w-full text-center space-y-6">
<div className="mx-auto w-24 h-24 rounded-2xl ring-1 grid place-items-center bg-white/5 ring-white/10">
<svg className="lucide lucide-calendar-clock w-10 h-10 text-white/90" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<div className="space-y-2">
<h1 className="text-3xl tracking-tight font-semibold">Randevun Her Zaman Yanında</h1>
<p className="text-sm leading-relaxed text-white/60">Tek uygulama ile tüm sektörlerdeki işletmelerden hızlıca randevu al.</p>
</div>
</div>
</main>
<footer className="w-full px-6 pb-8">
<div className="flex items-center justify-between">
<div className="flex gap-1.5">
<span className="h-1.5 w-6 rounded-full bg-white/80"></span>
<span className="h-1.5 w-6 rounded-full bg-white/20"></span>
<span className="h-1.5 w-6 rounded-full bg-white/20"></span>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#0b0e12] text-sm font-medium focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/30 bg-white hover:bg-white/90" data-navigate="splash-2">
                  Devam Et
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</footer>
</section>

<section className="min-h-[100dvh] flex flex-col items-center justify-between hidden" id="view-splash-2">
<div aria-hidden="true" className="absolute inset-0 opacity-[0.08] pointer-events-none">
<div className="absolute -top-20 right-10 w-72 h-72 rounded-full blur-3xl bg-green-400"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl bg-indigo-400"></div>
</div>
<header className="w-full px-6 pt-12 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/10 ring-white/15">
<span className="text-sm font-semibold tracking-tight">AR</span>
</div>
<span className="text-sm text-white/60">Randevu</span>
</div>
<button className="text-xs transition-colors text-white/60 hover:text-white" data-navigate="auth">Atla</button>
</header>
<main className="flex-1 w-full px-6 grid place-items-center">
<div className="w-full text-center space-y-6">
<div className="mx-auto w-24 h-24 rounded-2xl ring-1 grid place-items-center bg-white/5 ring-white/10">
<svg className="lucide lucide-sparkles w-10 h-10 text-white/90" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="space-y-2">
<h2 className="text-3xl tracking-tight font-semibold">Sektörleri Keşfet</h2>
<p className="text-sm leading-relaxed text-white/60">Güzellikten sağlığa, oto servisten eğitime; dilediğin alanda uygun saatleri bul.</p>
</div>
</div>
</main>
<footer className="w-full px-6 pb-8">
<div className="flex items-center justify-between">
<div className="flex gap-1.5">
<span className="h-1.5 w-6 rounded-full bg-white/20"></span>
<span className="h-1.5 w-6 rounded-full bg-white/80"></span>
<span className="h-1.5 w-6 rounded-full bg-white/20"></span>
</div>
<button className="inline-flex gap-2 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/30 text-sm font-medium text-[#0b0e12] rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 items-center hover:bg-white/90 bg-white" data-navigate="splash-3">
                  Devam Et
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</footer>
</section>

<section className="min-h-[100dvh] flex flex-col items-center justify-between" id="view-splash-3">
<div aria-hidden="true" className="absolute inset-0 opacity-[0.08] pointer-events-none">
<div className="absolute top-10 left-6 w-72 h-72 rounded-full blur-3xl bg-amber-400"></div>
<div className="absolute -bottom-20 right-6 w-72 h-72 rounded-full blur-3xl bg-orange-400"></div>
</div>
<header className="w-full px-6 pt-12 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/10 ring-white/15">
<span className="text-sm font-semibold tracking-tight">AR</span>
</div>
<span className="text-sm text-white/60">Randevu</span>
</div>
<button className="text-xs transition-colors text-white/60 hover:text-white" data-navigate="auth">Atla</button>
</header>
<main className="flex-1 w-full px-6 grid place-items-center">
<div className="w-full text-center space-y-6">
<div className="mx-auto w-24 h-24 rounded-2xl ring-1 grid place-items-center bg-white/5 ring-white/10">
<svg className="lucide lucide-shield-check w-10 h-10 text-white/90" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="space-y-2">
<h2 className="text-3xl tracking-tight font-semibold">Kolay ve Güvenli</h2>
<p className="text-sm leading-relaxed text-white/60">Şeffaf fiyatlar, gerçek yorumlar ve tek dokunuşla onaylanan randevular.</p>
</div>
</div>
</main>
<footer className="w-full px-6 pb-8">
<div className="flex items-center justify-between">
<div className="flex gap-1.5">
<span className="h-1.5 w-6 rounded-full bg-white/20"></span>
<span className="h-1.5 w-6 rounded-full bg-white/20"></span>
<span className="h-1.5 w-6 rounded-full bg-white/80"></span>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#0b0e12] text-sm font-medium focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/30 bg-white hover:bg-white/90" data-navigate="auth">
                  Başla
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</footer>
</section>

<section className="hidden min-h-[100dvh] flex flex-col" id="view-auth">
<header className="w-full px-6 pt-10 pb-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white" data-navigate="splash-1">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg> Geri
              </button>
<div className="h-8 w-8 rounded-lg grid place-items-center ring-1 bg-white/10 ring-white/15">
<span className="text-xs font-semibold tracking-tight">AR</span>
</div>
</header>
<main className="flex-1 px-6 space-y-6">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight font-semibold">Hızlı randevu için kaydol</h2>
<p className="text-sm text-white/60">Bilgilerini gir, birkaç saniyede hesabını oluştur.</p>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs text-white/60">Ad Soyad</label>
<div className="flex items-center gap-2 px-3 py-3 rounded-xl ring-1 focus-within:ring-white/30 bg-white/5 ring-white/10">
<svg className="lucide lucide-user w-4 h-4 text-white/60" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" placeholder="Örn. Ayşe Yılmaz" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-white/60">Telefon</label>
<div className="flex items-center gap-2 px-3 py-3 rounded-xl ring-1 focus-within:ring-white/30 bg-white/5 ring-white/10">
<svg className="lucide lucide-phone w-4 h-4 text-white/60" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" inputmode="tel" placeholder="+90 5xx xxx xx xx" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-white/60">E-posta</label>
<div className="flex items-center gap-2 px-3 py-3 rounded-xl ring-1 focus-within:ring-white/30 bg-white/5 ring-white/10">
<svg className="lucide lucide-mail w-4 h-4 text-white/60" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" placeholder="ornek@mail.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-white/60">Şifre</label>
<div className="flex items-center gap-2 px-3 py-3 rounded-xl ring-1 focus-within:ring-white/30 bg-white/5 ring-white/10">
<svg className="lucide lucide-lock w-4 h-4 text-white/60" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<input className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" placeholder="••••••••" type="password"/>
<button className="text-xs text-white/60 hover:text-white">Göster</button>
</div>
</div>
<div className="flex items-start gap-3 pt-1">
<div className="relative flex items-center justify-center w-5 h-5 rounded-md ring-1 cursor-pointer group bg-white/5 ring-white/15" id="tosCheck">
<svg className="lucide lucide-check w-3.5 h-3.5 hidden text-white" data-lucide="check" fill="none" height="24" id="tosIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-xs text-white/60">Kullanım koşullarını ve gizlilik politikasını kabul ediyorum.</p>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[#0b0e12] text-sm font-medium focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/30 bg-white hover:bg-white/90" id="btnSignup">
                  Hesap Oluştur
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center gap-3">
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-xs text-white/40">veya</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl ring-1 text-sm bg-white/5 ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-apple w-4 h-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg> Apple
                  </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl ring-1 text-sm bg-white/5 ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Google
                  </button>
</div>
<p className="text-center text-xs text-white/60">Hesabın var mı? <button className="hover:underline text-white">Giriş yap</button></p>
</div>
</main>
</section>

<section className="hidden min-h-[100dvh] flex flex-col" id="view-home">
<header className="sticky top-0 z-10 bg-[#0d1117]/75 backdrop-blur border-b border-white/10">
<div className="px-6 pt-5 pb-4 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/10 ring-white/15">
<span className="text-sm font-semibold tracking-tight">AR</span>
</div>
<div className="text-left">
<p className="text-xs text-white/50">Merhaba</p>
<p className="text-sm font-medium">Ayşe</p>
</div>
</div>
<button className="relative">
<svg className="lucide lucide-bell w-5 h-5 text-white/80" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ring-2 ring-[#0d1117] bg-orange-400"></span>
</button>
</div>
<div className="flex items-center gap-2 px-3 py-3 rounded-xl ring-1 focus-within:ring-white/30 bg-white/5 ring-white/10">
<svg className="lucide lucide-search w-4 h-4 text-white/60" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" placeholder="Şehir, sektör veya işletme ara" type="search"/>
<button className="text-xs text-white/60 hover:text-white">Filtre</button>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="sector-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[#0b0e12] text-xs font-medium bg-white hover:bg-white/90" data-sector="Hepsi">Hepsi</button>
<button className="sector-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-sector="Güzellik">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg> Güzellik
                  </button>
<button className="sector-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-sector="Sağlık">
<svg className="lucide lucide-heart-pulse w-4 h-4" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> Sağlık
                  </button>
<button className="sector-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-sector="Oto Servis">
<svg className="lucide lucide-car w-4 h-4" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg> Oto Servis
                  </button>
<button className="sector-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-sector="Fitness">
<svg className="lucide lucide-dumbbell w-4 h-4" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg> Fitness
                  </button>
<button className="sector-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-sector="Eğitim">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Eğitim
                  </button>
<button className="sector-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-sector="Ev Hiz.">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Ev Hiz.
                  </button>
</div>
</div>
</header>
<main className="flex-1 px-6 py-5 space-y-5">
<div className="space-y-2">
<h3 className="text-lg tracking-tight font-semibold">Yakınındaki işletmeler</h3>
<p className="text-xs text-white/50">Bugün ve yarın için uygun saatler</p>
</div>
<div className="space-y-3" id="businessList">

<article className="rounded-2xl ring-1 transition group p-3 bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex gap-3">
<img alt="" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div className="min-w-0">
<h4 className="text-sm font-medium truncate">Glow Beauty Studio</h4>
<p className="text-xs truncate text-white/50">Güzellik · Beşiktaş</p>
</div>
<div className="flex items-center gap-1 text-xs text-white/70">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8
                        </div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 1.2 km
                        </div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-orange-500/15 ring-1 ring-orange-500/30 text-orange-300">14:30</span>
<button className="text-xs px-3 py-1.5 rounded-lg text-[#0b0e12] bg-white hover:bg-white/90" data-business="Glow Beauty Studio" data-navigate="business">Randevu Al</button>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl ring-1 transition group p-3 bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex gap-3">
<img alt="" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div className="min-w-0">
<h4 className="text-sm font-medium truncate">Derman Klinik</h4>
<p className="text-xs truncate text-white/50">Sağlık · Kadıköy</p>
</div>
<div className="flex items-center gap-1 text-xs text-white/70">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.6
                        </div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 3.8 km
                        </div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-orange-500/15 ring-1 ring-orange-500/30 text-orange-300">16:15</span>
<button className="text-xs px-3 py-1.5 rounded-lg text-[#0b0e12] bg-white hover:bg-white/90" data-business="Derman Klinik" data-navigate="business">Randevu Al</button>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl ring-1 transition group p-3 bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex gap-3">
<img alt="" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div className="min-w-0">
<h4 className="text-sm font-medium truncate">AutoFix Servis</h4>
<p className="text-xs truncate text-white/50">Oto Servis · Şişli</p>
</div>
<div className="flex items-center gap-1 text-xs text-white/70">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.7
                        </div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 2.4 km
                        </div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-orange-500/15 ring-1 ring-orange-500/30 text-orange-300">11:00</span>
<button className="text-xs px-3 py-1.5 rounded-lg text-[#0b0e12] bg-white hover:bg-white/90" data-business="AutoFix Servis" data-navigate="business">Randevu Al</button>
</div>
</div>
</div>
</div>
</article>
</div>
<div className="pt-2">
<h3 className="text-lg tracking-tight font-semibold mb-3">Öne çıkanlar</h3>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-3">
<p className="text-sm font-medium truncate">PowerGym</p>
<p className="text-xs text-white/50">Fitness · Maslak</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-3">
<p className="text-sm font-medium truncate">Mentor Akademi</p>
<p className="text-xs text-white/50">Eğitim · Ataşehir</p>
</div>
</div>
</div>
</div>
</main>

<nav className="sticky bottom-0 z-10 bg-[#0d1117]/75 backdrop-blur border-t border-white/10">
<div className="grid grid-cols-4">
<button className="py-3 text-center text-xs text-white">
<div className="flex items-center justify-center gap-1.5">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    Ana
                  </div>
</button>
<button className="py-3 text-center text-xs text-white/70 hover:text-white">
<div className="flex items-center justify-center gap-1.5">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Keşfet
                  </div>
</button>
<button className="py-3 text-center text-xs text-white/70 hover:text-white">
<div className="flex items-center justify-center gap-1.5">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Randevular
                  </div>
</button>
<button className="py-3 text-center text-xs text-white/70 hover:text-white">
<div className="flex items-center justify-center gap-1.5">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Profil
                  </div>
</button>
</div>
</nav>
</section>

<section className="hidden min-h-[100dvh] flex flex-col" id="view-business">
<div className="relative">
<img alt="" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from0d1117] via-transparent to-transparent"></div>
<header className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur ring-1 text-sm bg-black/40 ring-white/15 text-white hover:bg-black/50" data-navigate="home">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg> Geri
                </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur ring-1 text-sm bg-black/40 ring-white/15 text-white/80 hover:text-white">
<svg className="lucide lucide-share-2 w-4 h-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</header>
</div>
<main className="flex-1 px-6 py-5 space-y-5">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-xl tracking-tight font-semibold" id="bizName">İşletme</h3>
<p className="text-xs text-white/60">Açık · Bugün 20:00</p>
</div>
<div className="inline-flex items-center gap-1 text-xs text-white/70">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8 (320)
                </div>
</div>
<div className="flex items-center gap-3 text-xs text-white/60">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Beşiktaş
                </div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Doğrulanmış
                </div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-tag w-3.5 h-3.5" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Kuaför
                </div>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium tracking-tight">Hizmet Seç</h4>
<div className="grid grid-cols-2 gap-3">
<button className="service-card text-left p-3 rounded-xl ring-1 bg-white/5 ring-white/10 hover:ring-white/20" data-price="450" data-service="Saç Kesim">
<p className="text-sm font-medium">Saç Kesim</p>
<p className="text-xs text-white/50">45 dk · 450 TL</p>
</button>
<button className="service-card text-left p-3 rounded-xl ring-1 bg-white/5 ring-white/10 hover:ring-white/20" data-price="600" data-service="Cilt Bakım">
<p className="text-sm font-medium">Cilt Bakım</p>
<p className="text-xs text-white/50">60 dk · 600 TL</p>
</button>
<button className="service-card text-left p-3 rounded-xl ring-1 bg-white/5 ring-white/10 hover:ring-white/20" data-price="350" data-service="Manikür">
<p className="text-sm font-medium">Manikür</p>
<p className="text-xs text-white/50">40 dk · 350 TL</p>
</button>
<button className="service-card text-left p-3 rounded-xl ring-1 bg-white/5 ring-white/10 hover:ring-white/20" data-price="250" data-service="Fön">
<p className="text-sm font-medium">Fön</p>
<p className="text-xs text-white/50">30 dk · 250 TL</p>
</button>
</div>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium tracking-tight">Tarih</h4>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1" id="dayScroller">
<button className="day-chip inline-flex flex-col items-center justify-center min-w-[64px] px-2 py-2 rounded-lg text-[#0b0e12] text-xs font-medium bg-white" data-day="Bugün">
<span>Bugün</span><span className="text-[11px] opacity-80">Sal</span>
</button>
<button className="day-chip inline-flex flex-col items-center justify-center min-w-[64px] px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-day="Yarın">
<span>Yarın</span><span className="text-[11px] text-white/60">Çar</span>
</button>
<button className="day-chip inline-flex flex-col items-center justify-center min-w-[64px] px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-day="Per">
<span>Per</span><span className="text-[11px] text-white/60">27</span>
</button>
<button className="day-chip inline-flex flex-col items-center justify-center min-w-[64px] px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-day="Cum">
<span>Cum</span><span className="text-[11px] text-white/60">28</span>
</button>
<button className="day-chip inline-flex flex-col items-center justify-center min-w-[64px] px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-day="Cts">
<span>Cts</span><span className="text-[11px] text-white/60">29</span>
</button>
<button className="day-chip inline-flex flex-col items-center justify-center min-w-[64px] px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:ring-white/20" data-day="Paz">
<span>Paz</span><span className="text-[11px] text-white/60">30</span>
</button>
</div>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium tracking-tight">Saat</h4>
<div className="grid grid-cols-4 gap-2" id="timeGrid">

<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">10:30</button>
<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">11:15</button>
<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">12:00</button>
<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">12:45</button>
<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">13:30</button>
<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">14:30</button>
<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">15:15</button>
<button className="time-slot text-xs px-2.5 py-2 rounded-lg ring-1 bg-white/5 ring-white/10 hover:ring-white/20">16:00</button>
</div>
</div>
</main>

<div className="sticky bottom-0 inset-x-0 translate-y-2 opacity-0 pointer-events-none transition p-4" id="bookingBar">
<div className="flex items-center justify-between gap-3 p-3 rounded-2xl ring-1 backdrop-blur bg-white/10 ring-white/15">
<div className="text-xs">
<p className="font-medium" id="barService">Hizmet</p>
<p className="text-white/60" id="barMeta">Tarih · Saat</p>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#0b0e12] text-sm font-medium bg-white hover:bg-white/90" id="btnConfirm">
                  Onayla
                  <svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</div>
</div>
</section>

<section className="hidden min-h-[100dvh] flex flex-col" id="view-confirm">
<header className="w-full px-6 pt-10 pb-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white" data-navigate="home">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg> Ana sayfa
              </button>
<div className="h-8 w-8 rounded-lg grid place-items-center ring-1 bg-white/10 ring-white/15">
<span className="text-xs font-semibold tracking-tight">AR</span>
</div>
</header>
<main className="flex-1 px-6 py-6">
<div className="mx-auto max-w-sm text-center space-y-5">
<div className="w-16 h-16 mx-auto rounded-2xl bg-orange-500/15 ring-1 ring-orange-500/30 grid place-items-center">
<svg className="lucide lucide-party-popper w-8 h-8 text-emerald-300" data-lucide="party-popper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
</div>
<div className="space-y-1">
<h3 className="text-2xl tracking-tight font-semibold">Randevun Hazır!</h3>
<p className="text-sm text-white/60">Aşağıdaki detayları takvimine ekleyebilir veya paylaşabilirsin.</p>
</div>
<div className="text-left space-y-3 rounded-2xl ring-1 p-4 bg-white/5 ring-white/10">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">İşletme</span>
<span className="font-medium" id="cBiz">—</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Hizmet</span>
<span className="font-medium" id="cService">—</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Tarih</span>
<span className="font-medium" id="cDate">—</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Saat</span>
<span className="font-medium" id="cTime">—</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="px-4 py-3 rounded-xl ring-1 text-sm bg-white/5 ring-white/10 hover:ring-white/20" data-navigate="home">Ana Sayfa</button>
<button className="px-4 py-3 rounded-xl text-[#0b0e12] text-sm inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90">
                    Takvime Ekle <svg className="lucide lucide-calendar-plus w-4 h-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</button>
</div>
</div>
</main>
</section>
</div>
</div>
</div>


    </>
  );
}
