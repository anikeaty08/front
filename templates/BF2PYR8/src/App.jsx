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
      const grid = document.getElementById('calendar-grid');
      const selectedLabel = document.getElementById('selected-label');
      const fmt12 = document.getElementById('fmt-12');
      const fmt24 = document.getElementById('fmt-24');
      const timeBtn = document.getElementById('time-dropdown-btn');
      const timeMenu = document.getElementById('time-menu');
      const timeText = document.getElementById('selected-time');

      function formatTime(hhmm, is24) {
        const [h, m] = hhmm.split(':').map(Number);
        if (is24) return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
        const ampm = h >= 12 ? 'pm' : 'am';
        const h12 = ((h + 11) % 12) + 1;
        return `${h12}:${String(m).padStart(2,'0')}${ampm}`;
      }

      let is24h = false;
      let currentTime = '17:00';

      // Day selection
      grid?.addEventListener('click', (e) => {
        const btn = e.target.closest('.day-btn');
        if (!btn) return;
        grid.querySelectorAll('.day-btn').forEach(b => {
          b.classList.remove('bg-white','text-black','border-white');
          b.classList.add('bg-white/10','text-white/80','border-white/10');
          b.removeAttribute('aria-pressed');
        });
        btn.classList.remove('bg-white/10','text-white/80','border-white/10');
        btn.classList.add('bg-white','text-black','border-white');
        btn.setAttribute('aria-pressed','true');

        // Update label (weekday abbrev not computed; map by date for this static month)
        const dateStr = btn.getAttribute('data-day'); // 2025-09-DD
        const dd = dateStr?.slice(-2) || '01';
        // Static mapping since September 2025 starts Monday
        const weekdayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        // Compute weekday quickly with Date (supported)
        const d = new Date(dateStr);
        const wk = weekdayNames[d.getDay()];
        selectedLabel.textContent = `${wk} ${dd}`;
      });

      // Time format toggle
      function setFormat(use24) {
        is24h = use24;
        fmt12.classList.toggle('bg-white/10', !use24);
        fmt12.classList.toggle('text-white', !use24);
        fmt12.classList.toggle('text-white/80', use24);
        fmt24.classList.toggle('bg-white/10', use24);
        fmt24.classList.toggle('text-white', use24);
        fmt24.classList.toggle('text-white/80', !use24);
        timeText.textContent = formatTime(currentTime, is24h);
        // Update menu items
        document.querySelectorAll('#time-menu .time-opt').forEach(opt => {
          const val = opt.getAttribute('data-time');
          opt.textContent = formatTime(val, is24h);
        });
      }
      fmt12?.addEventListener('click', () => setFormat(false));
      fmt24?.addEventListener('click', () => setFormat(true));
      setFormat(false);

      // Time dropdown
      timeBtn?.addEventListener('click', () => {
        timeMenu.classList.toggle('hidden');
      });
      document.addEventListener('click', (e) => {
        if (!timeMenu.contains(e.target) && !timeBtn.contains(e.target)) {
          timeMenu.classList.add('hidden');
        }
      });
      timeMenu?.addEventListener('click', (e) => {
        const opt = e.target.closest('.time-opt');
        if (!opt) return;
        currentTime = opt.getAttribute('data-time') || '17:00';
        timeText.textContent = formatTime(currentTime, is24h);
        timeMenu.classList.add('hidden');
      });
    })();
  


      // Initialize Lucide icons
      lucide.createIcons();

      // Mobile menu toggle
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      
      mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Reading list functionality
      const listBtn = document.getElementById('list-btn');
      const listDrawer = document.getElementById('list-drawer');
      const listClose = document.getElementById('list-close');
      const listBackdrop = document.getElementById('list-backdrop');
      
      function openList() {
        listDrawer.classList.remove('hidden');
        setTimeout(() => {
          listBackdrop.classList.remove('opacity-0');
          listDrawer.querySelector('aside').classList.remove('translate-x-full');
        }, 10);
      }
      
      function closeList() {
        listBackdrop.classList.add('opacity-0');
        listDrawer.querySelector('aside').classList.add('translate-x-full');
        setTimeout(() => {
          listDrawer.classList.add('hidden');
        }, 300);
      }
      
      listBtn?.addEventListener('click', openList);
      listClose?.addEventListener('click', closeList);
      listBackdrop?.addEventListener('click', closeList);
    
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
      

<div className="absolute -z-10 inset-0 overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[900px] w-[1200px] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(1200px 600px at 50% 30%, #111827 10%, #9CA3AF 40%, transparent 70%)'}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="h-16 flex items-center justify-between gap-4">

<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[110px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c2eea25b-e832-4b0b-ad0d-e5f906b20722_800w.jpg)] bg-cover rounded" href="#"></a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#top" style={{}}>Top</a>
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#world" style={{}}>World</a>
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#business" style={{}}>Business</a>
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#tech" style={{}}>Tech</a>
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#sports" style={{}}>Sports</a>
<a className="text-sm text-rose-600 hover:text-rose-700 transition font-geist" href="#opinion" style={{}}>Opinion</a>
</nav>

<div className="hidden lg:flex flex-1 max-w-xl mx-6">
<div className="relative w-full">
<input className="w-full h-10 pr-10 pl-10 rounded-xl border border-black/5 bg-white/70 backdrop-blur placeholder-black/40 text-sm outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition" placeholder="Search topics, reporters, keywords…" type="text"/>
<div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-black/50">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="absolute right-2 inset-y-0 my-auto inline-flex items-center justify-center h-7 px-2 rounded-lg bg-black/5 text-xs text-black/60 hover:text-black hover:bg-black/10 transition font-geist" style={{}}>⌘K</button>
</div>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 h-9 px-4 text-sm transition">
<span className="font-geist" style={{}}>Subscribe</span>
</button>
<button aria-label="Reading list" className="relative inline-flex items-center justify-center rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 h-9 w-9 transition" id="list-btn">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 min-w-[16px] px-1 rounded-full bg-black text-white text-[10px] leading-none font-geist" id="list-count" style={{}}>0</span>
</button>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 h-9 w-9 transition" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden pb-3">
<div className="relative">
<input className="w-full h-10 pr-10 pl-10 rounded-xl border border-black/5 bg-white/70 backdrop-blur placeholder-black/40 text-sm outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition" placeholder="Search topics, reporters, keywords…" type="text"/>
<div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-black/50">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-black/5 bg-white/80 backdrop-blur" id="mobile-menu">
<div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
<nav className="grid grid-cols-2 gap-3">
<a className="text-sm px-4 py-3 rounded-xl border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#top" style={{}}>Top</a>
<a className="text-sm px-4 py-3 rounded-xl border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#world" style={{}}>World</a>
<a className="text-sm px-4 py-3 rounded-xl border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#business" style={{}}>Business</a>
<a className="text-sm px-4 py-3 rounded-xl border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#tech" style={{}}>Tech</a>
<a className="text-sm px-4 py-3 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 transition font-geist" href="#opinion" style={{}}>Opinion</a>
<a className="text-sm px-4 py-3 rounded-xl border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#contact" style={{}}>Contact</a>
</nav>
</div>
</div>
</header>

<div className="w-full max-w-7xl mt-6 mr-auto ml-auto pt-6 pr-5 pb-6 pl-6">
<div className="grid lg:grid-cols-2 gap-8 items-stretch">

<div className="flex flex-col rounded-3xl pt-4 pr-4 pb-4 pl-4">
<div className="flex gap-4 items-center">
<div className="">
<h2 className="text-3xl font-semibold text-black tracking-tight font-playfair">Good morning!</h2>
<p className="text-sm text-black/60 font-geist">Tuesday, September 8, 2025</p>
</div>
</div>
</div>

<div className="flex flex-col text-white bg-black rounded-3xl pt-4 pr-8 pb-4 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-3xl font-medium font-playfair">San Francisco</h3>
<p className="text-white/80 text-sm font-geist">Current conditions</p>
</div>
<div className="text-right">
<div className="text-3xl font-bold font-playfair">72°</div>
<p className="text-white/80 text-sm font-geist">Partly cloudy</p>
</div>
</div>



</div>
</div>
</div><section className="sm:px-8 max-w-7xl mr-auto mb-16 ml-auto pr-6 pl-6">
<div className="">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="">
<h1 className="sm:text-7xl lg:text-8xl leading-[1.02] text-5xl font-semibold text-black tracking-tighter font-playfair" style={{}}>
              Stories that shape the day
            </h1>
<p className="sm:text-2xl leading-relaxed text-xl text-black/60 font-geist mt-6" style={{}}>Independent reporting. Clear analysis. Delivered daily.</p>
<div className="flex flex-wrap gap-4 mt-10 items-center">
<button className="inline-flex gap-2 hover:bg-black/80 transition-all font-medium text-white font-geist bg-black h-12 rounded-xl pr-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center" style={{}}>Read top stories<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
<a className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition font-geist" href="#briefings" style={{}}>
                Today's briefings
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/50 backdrop-blur px-4 py-3">
<svg className="lucide lucide-radio w-5 h-5 text-emerald-600" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-sm text-black/70 font-geist" style={{}}>Live updates</span>
</div>
<div className="flex gap-3 bg-white/50 border-black/5 border rounded-xl pt-3 pr-4 pb-3 pl-4 backdrop-blur items-center">
<svg className="lucide lucide-badge-check w-5 h-5 text-blue-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-black/70 font-geist" style={{}}>Verified sources</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/50 backdrop-blur px-4 py-3">
<svg className="lucide lucide-shield w-5 h-5 text-purple-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm text-black/70 font-geist" style={{}}>Ad‑free reading</span>
</div>
</div>
</div>
<div className="">
<div className="relative rounded-3xl overflow-hidden border border-black/5 bg-white/30 backdrop-blur" id="lead">
<img alt="Feature story" className="w-full h-[480px] sm:h-[480px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/45edcc86-1205-4adc-a717-8b568c63a038_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/50 backdrop-blur px-4 py-2 border border-black/5">
<span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-sm text-black/80 font-geist font-medium" style={{}}>Breaking: Global markets rally</span>
</div>
<a className="inline-flex items-center gap-2 text-sm rounded-xl bg-white/50 backdrop-blur px-4 py-2 border border-black/5 text-black/70 hover:bg-white/70 transition font-geist" href="#featured" style={{}}>
                  Quick read
                  <svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full max-w-7xl mt-6 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="text-base font-normal text-zinc-400 tracking-normal font-geist">Trusted by leading organizations worldwide</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1e2db11a-d050-445a-ae50-626bf19c24f1_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca43984b-3298-41bb-871b-d113545c657c_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b7784dba-9e18-4808-a0ec-f83e70d3d626_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb3d7a9c-a966-419c-927b-d8a323b690d6_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91f94445-e4f6-4e41-a0f5-c16583a2be35_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/efb5aaa5-7295-499c-b5ea-3d0d954b26b7_320w.jpg)] bg-cover rounded invert" href="#"></a>
</div>
</div><section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-black/5">
<div className="flex items-center gap-3">
<h2 className="text-4xl sm:text-5xl text-black tracking-tighter font-playfair font-semibold" style={{}}>Top Stories</h2>
<span className="text-lg text-black/50 font-geist" style={{}}>Today</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" id="filter-btn" style={{}}>
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
              Filters
            </button>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-black/5 bg-white text-sm text-black/70 font-geist" style={{}}>Politics</span>
<span className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-black/5 bg-white text-sm text-black/70 font-geist" style={{}}>Markets</span>
<span className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-black/5 bg-white text-sm text-black/70 font-geist" style={{}}>AI</span>
</div>
</div>
</div>
</section>

<section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="py-12 sm:py-16">

<article className="mb-12 rounded-3xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
<div className="grid lg:grid-cols-2 gap-0">
<div className="relative">
<img alt="Central bank signals cautious path ahead" className="w-full h-[300px] lg:h-[400px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/90daf43d-8c04-45d9-9051-7d3565c3aa2f_1600w.jpg" style={{}}/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs border border-emerald-500/20 font-geist" style={{}}>Featured Analysis</div>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<h3 className="lg:text-3xl text-2xl font-bold text-black tracking-tight font-playfair mb-4" style={{}}>Central bank signals cautious path ahead</h3>
<p className="text-lg text-black/60 font-geist mb-6" style={{}}>Markets surge as policymakers emphasize data‑driven decisions, signaling potential shifts in monetary policy that could reshape global economic trends.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-black/50">
<span className="inline-flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    8 min read
                  </span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>2h ago</span>
</div>
<button aria-label="Save article" className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/5 bg-white text-black/70 hover:bg-black/5 transition">
<svg className="lucide lucide-bookmark-plus w-4 h-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</div>
</div>
</div>
</article>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Major tech conference spotlights AI safety" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b09edb96-3dec-42df-a853-a26504074cdc_800w.jpg" style={{}}/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-black text-white text-xs font-geist" style={{}}>Exclusive</div>
<button aria-label="Save article" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/5 text-black/70 hover:text-black hover:bg-white transition">
<svg className="lucide lucide-bookmark-plus w-4 h-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-black tracking-tight font-playfair mb-3" style={{}}>Major tech conference spotlights AI safety</h3>
<p className="text-base text-black/60 font-geist mb-4" style={{}}>Leaders agree on standards as new models debut.</p>
<div className="flex items-center gap-4 text-sm text-black/50">
<span className="inline-flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
          6 min read
        </span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>1h ago</span>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Inside the race to build greener cities" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c5e0f68-9177-47ca-8112-0432df616b78_800w.jpg" style={{}}/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-700 text-xs border border-rose-500/20 font-geist" style={{}}>Opinion</div>
<button aria-label="Save article" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/5 text-black/70 hover:text-black hover:bg-white transition">
<svg className="lucide lucide-bookmark-plus w-4 h-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-black tracking-tight font-playfair mb-3" style={{}}>Inside the race to build greener cities</h3>
<p className="text-base text-black/60 font-geist mb-4" style={{}}>Designing resilient infrastructure for a changing climate.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-black/50">
<span className="font-geist" style={{}}>By L. Chen</span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>9 min read</span>
</div>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Launch day: a new era for small rockets" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c400061e-82c2-4351-af3d-3b4ddf196917_800w.jpg" style={{}}/>
<button aria-label="Save article" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/5 text-black/70 hover:text-black hover:bg-white transition">
<svg className="lucide lucide-bookmark-plus w-4 h-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-black tracking-tight font-playfair mb-3" style={{}}>Launch day: a new era for small rockets</h3>
<p className="text-base text-black/60 font-geist mb-4" style={{}}>Cheaper rides to orbit are changing who gets to build in space.</p>
<div className="flex items-center gap-4 text-sm text-black/50">
<span className="font-geist" style={{}}>By Staff</span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>5 min read</span>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="City council passes sweeping housing bill" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1cb9518f-c33c-4059-9178-ab17144a9c0d_800w.jpg" style={{}}/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs border border-emerald-500/20 font-geist" style={{}}>Local</div>
<button aria-label="Save article" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/5 text-black/70 hover:text-black hover:bg-white transition">
<svg className="lucide lucide-bookmark-plus w-4 h-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-black tracking-tight font-playfair mb-3" style={{}}>City council passes sweeping housing bill</h3>
<p className="text-base text-black/60 font-geist mb-4" style={{}}>Zoning reforms aim to increase affordability by 2027.</p>
<div className="flex items-center gap-4 text-sm text-black/50">
<span className="font-geist" style={{}}>By M. Patel</span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>7 min read</span>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Championship preview: defense wins games" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7dded3d-c16d-4d2e-9973-a3804dda283e_800w.jpg"/>
<button aria-label="Save article" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/5 text-black/70 hover:text-black hover:bg-white transition">
<svg className="lucide lucide-bookmark-plus w-4 h-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-black tracking-tight font-playfair mb-3" style={{}}>Championship preview: defense wins games</h3>
<p className="text-base text-black/60 font-geist mb-4" style={{}}>What the numbers say ahead of tonight's final.</p>
<div className="flex items-center gap-4 text-sm text-black/50">
<span className="font-geist" style={{}}>By A. Rivera</span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>4 min read</span>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
<div className="relative">
<img alt="Global climate summit reaches breakthrough deal" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec1166fb-0157-4617-8708-91d13d7911d7_800w.jpg"/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs border border-emerald-500/20 font-geist" style={{}}>Climate</div>
<button aria-label="Save article" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/5 text-black/70 hover:text-black hover:bg-white transition">
<svg className="lucide lucide-bookmark-plus w-4 h-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-black tracking-tight font-playfair mb-3" style={{}}>Global climate summit reaches breakthrough deal</h3>
<p className="text-base text-black/60 font-geist mb-4" style={{}}>Historic agreement sets new emission targets and funding commitments.</p>
<div className="flex items-center gap-4 text-sm text-black/50">
<span className="font-geist" style={{}}>By K. Johnson</span>
<span className="font-geist" style={{}}>•</span>
<span className="font-geist" style={{}}>12 min read</span>
</div>
</div>
</article>
</div>

<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-black/5 bg-white text-black/70 hover:bg-black/5 transition font-geist" style={{}}>
            Load more stories
            <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</section><section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="py-12 sm:py-16">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
<div className="max-w-3xl">
<h2 className="sm:text-5xl text-4xl font-semibold text-black tracking-tighter font-playfair" style={{}}>Schedule a call</h2>
<p className="mt-6 text-lg text-black/60 font-geist" style={{}}>Pick a date and time to book a 15‑minute briefing. We'll send a calendar invite after you confirm.</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-base font-medium text-black font-geist" style={{}}>Quick briefings</h3>
<p className="text-sm text-black/60 font-geist" style={{}}>Get up to speed on today's most important stories in just 15 minutes</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-base font-medium text-black font-geist" style={{}}>Expert analysis</h3>
<p className="text-sm text-black/60 font-geist" style={{}}>Direct access to our editorial team for personalized news insights</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-base font-medium text-black font-geist" style={{}}>Flexible scheduling</h3>
<p className="text-sm text-black/60 font-geist" style={{}}>Choose from morning, afternoon, or evening slots that work for you</p>
</div>
</div>
</div>
<div className="mt-8">
<button className="inline-flex gap-2 hover:bg-black/80 transition-all font-medium text-white font-geist bg-black h-12 rounded-xl pr-6 pl-6 items-center" style={{}}>
      Book your session
      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="mt-3 text-sm text-black/50 font-geist" style={{}}>No commitment required. Cancel or reschedule anytime.</p>
</div>
</div>
<div className="">
<div className="overflow-hidden text-white/80 bg-black border-black/5 border rounded-3xl shadow-2xl">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">

<div className="flex items-center justify-between">
<div className="flex items-baseline gap-2">
<h3 className="text-xl font-semibold tracking-tight font-geist text-white" style={{}}>September 2025</h3>
</div>
<div className="flex items-center gap-2">
<button aria-label="Previous month" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80" disabled="">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next month" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80" disabled="">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="mt-4 grid grid-cols-7 text-xs uppercase tracking-wider text-white/60 font-geist">
<div className="h-10 flex items-center justify-center" style={{}}>Sun</div>
<div className="h-10 flex items-center justify-center" style={{}}>Mon</div>
<div className="h-10 flex items-center justify-center" style={{}}>Tue</div>
<div className="h-10 flex items-center justify-center" style={{}}>Wed</div>
<div className="h-10 flex items-center justify-center" style={{}}>Thu</div>
<div className="h-10 flex items-center justify-center" style={{}}>Fri</div>
<div className="h-10 flex items-center justify-center" style={{}}>Sat</div>
</div>

<div className="grid grid-cols-7 gap-2 sm:gap-3" id="calendar-grid">

<div className="h-12"></div>


<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-01" style={{}}>1</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-02" style={{}}>2</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-03" style={{}}>3</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-04" style={{}}>4</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-05" style={{}}>5</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-06" style={{}}>6</button>

<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-07" style={{}}>7</button>
<button aria-pressed="true" className="day-btn inline-flex items-center justify-center h-12 rounded-xl border text-sm font-geist bg-white text-black border-white" data-day="2025-09-08" style={{}}>8</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-09" style={{}}>9</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-10" style={{}}>10</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-11" style={{}}>11</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-12" style={{}}>12</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-13" style={{}}>13</button>

<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-14" style={{}}>14</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-15" style={{}}>15</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-16" style={{}}>16</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-17" style={{}}>17</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-18" style={{}}>18</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-19" style={{}}>19</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-20" style={{}}>20</button>

<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-21" style={{}}>21</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-22" style={{}}>22</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-23" style={{}}>23</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-24" style={{}}>24</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-25" style={{}}>25</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-26" style={{}}>26</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-27" style={{}}>27</button>

<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-28" style={{}}>28</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-29" style={{}}>29</button>
<button className="day-btn inline-flex items-center justify-center h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 text-sm font-geist" data-day="2025-09-30" style={{}}>30</button>

<div className="h-12"></div>
<div className="h-12"></div>
<div className="h-12"></div>
<div className="h-12"></div>
</div>

<div className="mt-6 flex items-center justify-between">
<div className="text-white font-geist text-base" id="selected-label" style={{}}>Mon 08</div>
<div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/10 border border-white/10">
<button className="timefmt-btn px-3 h-8 rounded-lg text-sm font-geist bg-white/10 text-white" id="fmt-12" style={{}}>12h</button>
<button className="timefmt-btn px-3 h-8 rounded-lg text-sm font-geist text-white/80 hover:bg-white/10" id="fmt-24" style={{}}>24h</button>
</div>
</div>

<div className="mt-3">
<div className="h-12 rounded-xl border border-white/15 bg-black/40 text-white/80 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-white/60" data-lucide="clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist text-white" id="selected-time" style={{}}>5:00pm</span>
</div>
<div className="relative">
<button className="inline-flex items-center gap-1 h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-geist" id="time-dropdown-btn" style={{}}>
                    Change
                    <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="hidden absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-black/90 backdrop-blur p-1 shadow-2xl" id="time-menu">
<button className="time-opt w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-white/10 font-geist" data-time="09:00" style={{}}>9:00am</button>
<button className="time-opt w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-white/10 font-geist" data-time="09:30" style={{}}>9:30am</button>
<button className="time-opt w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-white/10 font-geist" data-time="10:00" style={{}}>10:00am</button>
<button className="time-opt w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-white/10 font-geist" data-time="14:00" style={{}}>2:00pm</button>
<button className="time-opt w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-white/10 font-geist" data-time="17:00" style={{}}>5:00pm</button>
<button className="time-opt w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-white/10 font-geist" data-time="17:30" style={{}}>5:30pm</button>
</div>
</div>
</div>
<p className="mt-2 text-xs text-white/60 font-geist" style={{}}>Times shown in your local timezone.</p>
</div>

<div className="mt-6">
<button className="w-full inline-flex items-center justify-center h-12 rounded-xl bg-white text-black hover:bg-white font-geist text-sm" style={{}}>
                Confirm booking
              </button>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="max-w-7xl mx-auto px-6 sm:px-8" id="about">
<div className="py-20 sm:py-28">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-4">
<h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight font-playfair" style={{}}>Our mission</h2>
</div>
<div className="lg:col-span-8">
<p className="sm:text-4xl lg:text-5xl leading-tight text-3xl font-semibold text-black tracking-tight font-playfair mb-8" style={{}}>
              We publish reporting that informs, not inflames—clarity over noise, context over hot takes.
            </p>
<p className="text-xl text-black/60 leading-relaxed font-geist" style={{}}>
              Our newsroom blends on‑the‑ground reporting with data journalism. Every story is edited for accuracy and relevance, with quick briefings for busy readers and deep dives when the moment calls for it.
            </p>
</div>
</div>
<div className="mt-16 rounded-3xl overflow-hidden border border-black/5">
<img alt="Newsroom" className="w-full h-80 sm:h-[480px] lg:h-[600px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a2ea7890-be3d-4b5b-8c4b-3f0752c6105d_3840w.jpg" style={{}}/>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
<div className="relative overflow-hidden bg-white border border-black/5 rounded-3xl">
<div className="relative z-10 p-8 sm:p-12 md:p-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-black/5">
<div className="lg:col-span-4">
<div className="flex gap-3 mb-6 items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[110px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c2eea25b-e832-4b0b-ad0d-e5f906b20722_800w.jpg)] bg-cover rounded" href="#"></a>
</div>
<p className="text-xl text-black/70 font-geist max-w-3xl mb-10" style={{}}>Independent journalism, delivered. Morning briefings, weekend reads, and live coverage when it matters.</p>
<div className="rounded-3xl border border-black/5 bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-xl p-8 sm:p-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-3 py-2 text-sm font-geist" style={{}}>
<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Morning briefings, free
                    </div>
<h4 className="text-2xl text-white font-semibold tracking-tight font-playfair" style={{}}>Stay informed</h4>
<ul className="space-y-3 text-base text-white/70">
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Key headlines in under 5 minutes.
                      </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Weekend deep dives.
                      </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        No spam, unsubscribe anytime.
                      </li>
</ul>
<form className="flex gap-3 pt-2">
<input className="flex-1 h-12 px-4 rounded-xl border border-white/20 bg-black/20 text-sm placeholder-white/40 text-white outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 backdrop-blur" placeholder="you@domain.com" required="" type="email"/>
<button className="inline-flex items-center gap-2 h-12 px-5 rounded-xl ring-1 ring-white/20 text-sm text-white bg-black/20 hover:bg-white hover:text-black transition font-geist" style={{}}>
                        Join
                        <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
<div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium font-geist mb-4" style={{}}>Sections</h5>
<ul className="space-y-3 text-base text-white/70">
<li><a className="hover:text-white transition font-geist" href="#world" style={{}}>World</a></li>
<li><a className="hover:text-white transition font-geist" href="#business" style={{}}>Business</a></li>
<li><a className="hover:text-white transition font-geist" href="#tech" style={{}}>Tech</a></li>
<li><a className="hover:text-white transition font-geist" href="#sports" style={{}}>Sports</a></li>
</ul>
</div>
<div>
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium font-geist mb-4" style={{}}>Resources</h5>
<ul className="space-y-3 text-base text-white/70">
<li><a className="hover:text-white transition font-geist" href="#newsletter" style={{}}>Newsletter</a></li>
<li><a className="hover:text-white transition font-geist" href="#apps" style={{}}>Mobile Apps</a></li>
<li><a className="hover:text-white transition font-geist" href="#alerts" style={{}}>News Alerts</a></li>
<li><a className="hover:text-white transition font-geist" href="#contact" style={{}}>Contact</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium font-geist mb-4" style={{}}>Company</h5>
<ul className="space-y-3 text-base text-white/70">
<li><a className="hover:text-white transition font-geist" href="#about" style={{}}>About</a></li>
<li><a className="hover:text-white transition font-geist" href="#careers" style={{}}>Careers</a></li>
<li><a className="hover:text-white transition font-geist" href="#ethics" style={{}}>Ethics</a></li>
<li><a className="hover:text-white transition font-geist" href="#press" style={{}}>Press</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-4 text-base text-black/60">
<span className="font-geist" style={{}}>© 2025 Header</span>
<span className="hidden sm:inline text-black/20 font-geist" style={{}}>|</span>
<a className="hover:text-black transition font-geist" href="#privacy" style={{}}>Privacy</a>
<span className="text-black/20 font-geist" style={{}}>/</span>
<a className="hover:text-black transition font-geist" href="#terms" style={{}}>Terms</a>
</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://instagram.com" rel="noreferrer" target="_blank">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter/X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://twitter.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 16 16" width="20"><path d="M12.6 1.7h2.1l-4.6 5.2 5.4 7.4h-4.2L8.9 9.8l-3.9 4.5H2.9l4.9-5.6L2.6 1.7h4.3l3 4.1 2.7-3.1z"></path></svg>
</a>
<a aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://youtube.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20"><path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.8 3 12 3 12 3s-6.8 0-8.7.4A4 4 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a4 4 0 0 0 2.8 2.8C5.2 21 12 21 12 21s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5v-7L16 12z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="list-drawer">
<div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity" id="list-backdrop"></div>
<aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl border-l border-black/5 transform translate-x-full transition-transform">
<div className="flex h-full flex-col">
<header className="flex items-center justify-between px-6 h-16 border-b border-black/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bookmark w-5 h-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<h3 className="text-base font-medium tracking-tight font-geist" style={{}}>Reading list</h3>
</div>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/5 bg-white text-black/70 hover:bg-black/5 transition" id="list-close">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</header>
<div className="flex-1 px-6 py-12 text-center text-black/60" id="list-empty">
<div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 text-black/60">
<svg className="lucide lucide-archive w-6 h-6" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
</div>
<p className="text-base font-geist" style={{}}>Your reading list is empty.</p>
</div>
</div>
</aside>
</div>


    </>
  );
}
