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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && window.lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Scroll progress
      const progressEl = document.getElementById('scroll-progress');
      function setProgress() {
        const h = document.documentElement;
        const st = h.scrollTop || document.body.scrollTop;
        const sh = h.scrollHeight - h.clientHeight;
        progressEl.style.width = (sh ? (st / sh) * 100 : 0) + '%';
      }
      setProgress();
      window.addEventListener('scroll', setProgress, { passive: true });
      window.addEventListener('resize', setProgress);

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = String(new Date().getFullYear());

      // Filtering + Search
      const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
      const quickAI = document.getElementById('quick-ai');
      const clearFilters = document.getElementById('clear-filters');
      const searchInput = document.getElementById('search');
      const emptyState = document.getElementById('empty');
      const emptyReset = document.getElementById('empty-reset');
      const cards = Array.from(document.querySelectorAll('#cards-grid article'));

      let activeFilter = 'all';
      let query = '';

      function setActiveButton() {
        filterButtons.forEach(btn => {
          const on = btn.getAttribute('data-filter') === activeFilter;
          btn.setAttribute('aria-pressed', String(on));
          if (on) {
            btn.classList.add('ring-2','ring-purple-400/40');
          } else {
            btn.classList.remove('ring-2','ring-purple-400/40');
          }
        });
      }

      function applyFilters() {
        const q = query.trim().toLowerCase();
        let visible = 0;
        cards.forEach(card => {
          const tags = (card.getAttribute('data-tags') || '').toLowerCase();
          const name = (card.querySelector('h3')?.textContent || '').toLowerCase();
          const matchesTag = activeFilter === 'all' ? true : tags.split(',').includes(activeFilter);
          const matchesQuery = !q || name.includes(q) || tags.includes(q);
          const show = matchesTag && matchesQuery;
          card.style.display = show ? '' : 'none';
          if (show) visible++;
        });
        emptyState.classList.toggle('hidden', visible !== 0);
      }

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          activeFilter = btn.getAttribute('data-filter') || 'all';
          setActiveButton();
          applyFilters();
        });
      });

      quickAI?.addEventListener('click', () => {
        activeFilter = 'ai';
        setActiveButton();
        applyFilters();
      });

      clearFilters?.addEventListener('click', () => {
        activeFilter = 'all';
        query = '';
        searchInput.value = '';
        setActiveButton();
        applyFilters();
      });

      emptyReset?.addEventListener('click', () => {
        activeFilter = 'all';
        query = '';
        searchInput.value = '';
        setActiveButton();
        applyFilters();
      });

      searchInput?.addEventListener('input', (e) => {
        query = e.target.value || '';
        applyFilters();
      });

      // Init
      setActiveButton();
      applyFilters();
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0" style="background-image:
        radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.14) 0, rgba(255,255,255,0.14) 1px, transparent 1px),
        radial-gradient(1px 1px at 40% 10%, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 1px, transparent 1px),
        radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px),
        radial-gradient(1px 1px at 20% 70%, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px),
        radial-gradient(1px 1px at 85% 65%, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 1px, transparent 1px)"></div>
<div className="absolute inset-0 opacity-70" style="background:
        radial-gradient(600px 400px at 50% 0%, rgba(124,58,237,0.12), transparent 55%),
        radial-gradient(500px 320px at 80% 20%, rgba(59,130,246,0.10), transparent 60%),
        radial-gradient(700px 420px at 10% 30%, rgba(56,189,248,0.08), transparent 60%)"></div>
</div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 w-0 z-50" id="scroll-progress" style={{width: '0%'}}></div>

<header className="fixed top-0 inset-x-0 z-40 bg-black/70 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-12 flex items-center justify-center">
<a className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 rounded-md px-2 py-1" href="#directory">
<svg className="w-[18px] h-[18px] text-yellow-300" data-lucide="crown" fill="none" height="18" stroke="currentColor" viewbox="0 0 24 24" width="18"></svg>
<span className="text-sm sm:text-base text-yellow-300 tracking-tight" style={{fontWeight: '600'}}>StateoftheWorld.Forum</span>
</a>
</div>
</div>
</header>
<main className="pt-20 sm:pt-24">

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-500/10 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
<span className="text-[11px] uppercase text-purple-200">AI</span>
</div>
<h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl tracking-tight" style={{fontWeight: '600'}}>Community Directory</h1>
<p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">Explore the people shaping the state of our world—across Human, Nature, AI, and Cosmic intelligences.</p>

<div className="mt-8">
<h2 className="font-[Playfair Display] text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase text-yellow-300">Digital Delegates</h2>
<div className="mx-auto mt-2 h-[2px] w-32 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

<div className="flex flex-wrap items-center gap-2">
<button aria-pressed="true" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-purple-400/40" data-filter="all">
<svg className="w-3.5 h-3.5" data-lucide="sparkles"></svg>
                All
              </button>
<button className="group inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-200 hover:bg-purple-500/15 transition focus:outline-none focus:ring-2 focus:ring-purple-400/40" data-filter="ai">
<svg className="w-3.5 h-3.5" data-lucide="cpu"></svg>
                AI
              </button>
<button className="group inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-xs text-red-200 hover:bg-red-500/15 transition" data-filter="human">
<svg className="w-3.5 h-3.5" data-lucide="user"></svg>
                Human
              </button>
<button className="group inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1.5 text-xs text-green-200 hover:bg-green-500/15 transition" data-filter="nature">
<svg className="w-3.5 h-3.5" data-lucide="leaf"></svg>
                Nature
              </button>
<button className="group inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-200 hover:bg-blue-500/15 transition" data-filter="cosmic">
<svg className="w-3.5 h-3.5" data-lucide="orbit"></svg>
                Cosmic
              </button>

<button className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500/15 to-blue-500/10 px-3 py-1.5 text-xs text-purple-200 hover:from-purple-500/20 hover:to-blue-500/15 transition" id="quick-ai">
<svg className="w-3.5 h-3.5" data-lucide="filter"></svg>
                Show only AI
              </button>
</div>

<div className="flex items-center gap-2 w-full md:w-auto">
<div className="relative flex-1 md:w-80">
<div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
<svg className="w-4 h-4 text-gray-400" data-lucide="search"></svg>
</div>
<input className="w-full rounded-xl bg-white/5 border border-white/10 pl-8 pr-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/30" id="search" placeholder="Search by name or tag…" type="text"/>
</div>
<button className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 hover:bg-white/10 transition" id="clear-filters">
<svg className="w-3.5 h-3.5" data-lucide="undo-2"></svg>
                Reset
              </button>
</div>
</div>
</div>
</section>

<section className="mt-8 pb-16" id="directory">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" id="cards-grid">


<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-purple-400/30 transition-all" data-tags="ai,human">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(168,85,247,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Dr. Amina Sol" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Dr. Amina Sol</h3>
<p className="text-xs text-gray-400">Speaker • Neural Governance</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-200">AI</span>
<span className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[11px] text-red-200">Human</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-green-400/30 transition-all" data-tags="nature,human">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(34,197,94,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Leo Varga" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Leo Varga</h3>
<p className="text-xs text-gray-400">Delegate • Regen Policy</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-2.5 py-1 text-[11px] text-green-200">Nature</span>
<span className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[11px] text-red-200">Human</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-blue-400/30 transition-all" data-tags="cosmic,ai">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(59,130,246,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Selene Ito" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Selene Ito</h3>
<p className="text-xs text-gray-400">Speaker • Interstellar Ethics</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-200">Cosmic</span>
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-200">AI</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-red-400/30 transition-all" data-tags="human">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(239,68,68,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Rafael Kumar" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=161&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Rafael Kumar</h3>
<p className="text-xs text-gray-400">Delegate • Urban Resilience</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[11px] text-red-200">Human</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-green-400/30 transition-all" data-tags="nature,cosmic">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(34,197,94,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Mira Okoye" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Mira Okoye</h3>
<p className="text-xs text-gray-400">Speaker • Bioregional Futures</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-2.5 py-1 text-[11px] text-green-200">Nature</span>
<span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-200">Cosmic</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-purple-400/30 transition-all" data-tags="ai">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(168,85,247,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Kenji Morozov" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Kenji Morozov</h3>
<p className="text-xs text-gray-400">Delegate • Alignment Systems</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-200">AI</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-blue-400/30 transition-all" data-tags="cosmic">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(59,130,246,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Alina Torres" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=162&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Alina Torres</h3>
<p className="text-xs text-gray-400">Speaker • Deep Space Commons</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-200">Cosmic</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-green-400/30 transition-all" data-tags="human,nature">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(34,197,94,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Elias Haddad" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Elias Haddad</h3>
<p className="text-xs text-gray-400">Delegate • Water Diplomacy</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[11px] text-red-200">Human</span>
<span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-2.5 py-1 text-[11px] text-green-200">Nature</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-purple-400/30 transition-all" data-tags="ai,cosmic">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(168,85,247,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Noor Al‑Khalid" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=163&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Noor Al‑Khalid</h3>
<p className="text-xs text-gray-400">Speaker • Oracular Models</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-200">AI</span>
<span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-200">Cosmic</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-green-400/30 transition-all" data-tags="nature">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(34,197,94,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Petra Novak" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=161&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Petra Novak</h3>
<p className="text-xs text-gray-400">Delegate • Wild Corridors</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-2.5 py-1 text-[11px] text-green-200">Nature</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-purple-400/30 transition-all" data-tags="human,ai">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(168,85,247,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Zane Chen" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=164&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Zane Chen</h3>
<p className="text-xs text-gray-400">Speaker • Civic AI</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[11px] text-red-200">Human</span>
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-200">AI</span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4 hover:border-blue-400/30 transition-all" data-tags="cosmic,nature">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style="background:
                radial-gradient(320px 220px at 50% 0%, rgba(59,130,246,0.10), transparent 60%)"></div>
<div className="flex flex-col items-center text-center">
<img alt="Aurora Reyes" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=161&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-3 text-lg tracking-tight" style={{fontWeight: '600'}}>Aurora Reyes</h3>
<p className="text-xs text-gray-400">Delegate • Night Sky Rights</p>
<div className="mt-3 flex flex-wrap justify-center gap-2">
<span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-200">Cosmic</span>
<span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-2.5 py-1 text-[11px] text-green-200">Nature</span>
</div>
</div>
</article>
</div>

<div className="hidden mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center" id="empty">
<div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
<svg className="w-5 h-5 text-gray-300" data-lucide="binoculars"></svg>
</div>
<p className="mt-3 text-sm">No matches. Try a different filter or search term.</p>
<button className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 hover:bg-white/10 transition" id="empty-reset">
<svg className="w-3.5 h-3.5" data-lucide="undo-2"></svg>
              Reset filters
            </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="inline-flex items-center gap-2">
<svg className="w-4 h-4 text-yellow-300" data-lucide="crown"></svg>
<span className="text-sm text-gray-300 tracking-tight" style={{fontWeight: '500'}}>StateoftheWorld.Forum</span>
</div>
<p className="text-xs text-gray-500">© <span id="year">2025</span> All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
