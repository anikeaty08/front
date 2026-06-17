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
      
      // Icons
      lucide.createIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Simple login simulation
      const loginOverlay = document.getElementById('loginOverlay');
      document.getElementById('loginBtn').addEventListener('click', () => {
        loginOverlay.classList.add('hidden');
      });
      document.getElementById('loginBtnHdr').addEventListener('click', () => {
        loginOverlay.classList.remove('hidden');
      });

      // Mobile nav (placeholder action)
      document.getElementById('mobileNavBtn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Filter dropdown
      const filterBtn = document.getElementById('filterBtn');
      const filterDropdown = document.getElementById('filterDropdown');
      filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterDropdown.classList.toggle('hidden');
      });
      document.addEventListener('click', (e) => {
        if (!filterDropdown.contains(e.target) && !filterBtn.contains(e.target)) {
          filterDropdown.classList.add('hidden');
        }
      });
      // Filter chips
      const chips = document.querySelectorAll('.filter-chip');
      const cards = document.querySelectorAll('.video-card');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('bg-white','text-black'));
          chips.forEach(c => c.classList.add('border','border-[color:var(--brand-line)]'));
          chip.classList.add('bg-white','text-black');
          chip.classList.remove('border','border-[color:var(--brand-line)]');
          const cat = chip.dataset.filter;
          cards.forEach(card => {
            const match = cat === 'All' || card.dataset.category === cat;
            card.classList.toggle('hidden', !match);
          });
          filterDropdown.classList.add('hidden');
        });
      });

      // Theme toggle (kept monochrome, flips base surfaces subtly)
      const themeToggle = document.getElementById('themeToggle');
      let lightMode = false;
      themeToggle.addEventListener('click', () => {
        lightMode = !lightMode;
        document.documentElement.style.setProperty('--brand-bg', lightMode ? '#ffffff' : '#0a0a0a');
        document.documentElement.style.setProperty('--brand-elev', lightMode ? '#f7f7f7' : '#111111');
        document.documentElement.style.setProperty('--brand-line', lightMode ? '#e5e5e5' : '#1f1f1f');
        document.documentElement.style.setProperty('--brand-text', lightMode ? '#0a0a0a' : '#ffffff');
        document.documentElement.style.setProperty('--brand-muted', lightMode ? '#6b7280' : '#a3a3a3');
        // Move dot
        const dot = themeToggle.querySelector('.toggle-dot');
        if (lightMode) {
          dot.style.transform = 'translateX(16px)';
        } else {
          dot.style.transform = 'translateX(0px)';
        }
      });

      // Chart.js - Keep canvas wrapped to avoid growth bug
      const ctx = document.getElementById('progressChart');
      const data = {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          label: 'Minutes',
          data: [12, 24, 36, 18, 42, 56, 30],
          borderColor: '#ffffff',
          backgroundColor: 'rgba(255,255,255,0.08)',
          fill: true,
          tension: 0.35,
          pointRadius: 2.5,
          pointBackgroundColor: '#ffffff'
        }]
      };
      new Chart(ctx, {
        type: 'line',
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.9)',
              borderColor: 'rgba(255,255,255,0.15)',
              borderWidth: 1,
              padding: 10,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } }
            }
          }
        }
      });
    
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
      

<div className="min-h-screen flex flex-col">

<header className="border-b border-[color:var(--brand-line)] bg-[color:var(--brand-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--brand-bg)]/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between gap-4">

<div className="flex items-center gap-3">
<img alt="MISBAH SALAM — The Brand Strategist" className="h-8 w-8 rounded-sm object-cover border border-[color:var(--brand-line)] bg-white" id="brandLogo" src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-[13px] uppercase tracking-[0.22em] text-white/90">Brand Masters Club</p>
<p className="text-[12px] text-[color:var(--brand-muted)]">by MISBAH SALAM</p>
</div>
</div>

<div className="hidden md:flex items-center gap-3 flex-1 max-w-xl">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<i className="w-4 h-4" data-lucide="search"></i>
</span>
<input className="w-full bg-[color:var(--brand-elev)] border border-[color:var(--brand-line)] text-sm/none rounded-lg pl-9 pr-3 py-2.5 placeholder:text-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/20" id="globalSearch" placeholder="Search videos, sessions, resources…" type="text"/>
</div>

<button className="group relative inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] hover:bg-white hover:text-black transition focus-ring" id="themeToggle">
<span className="relative inline-flex w-9 h-5 items-center rounded-full toggle-track bg-white/10 group-hover:bg-black/10">
<span className="toggle-dot translate-x-1 inline-block h-4 w-4 rounded-full bg-white group-hover:bg-black"></span>
</span>
<span className="hidden sm:inline">Theme</span>
</button>
</div>

<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] hover:bg-white hover:text-black transition focus-ring" id="loginBtnHdr">
<i className="w-4 h-4" data-lucide="log-in"></i>
<span className="hidden sm:inline">Sign in</span>
</button>
<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] focus-ring" id="mobileNavBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<div className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

<section className="relative overflow-hidden rounded-2xl border border-[color:var(--brand-line)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-transparent">
<div className="grid md:grid-cols-2">
<div className="p-8 sm:p-10 lg:p-12">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Welcome to Brand Masters Club</h1>
<p className="mt-3 text-[15px] text-[color:var(--brand-muted)]">
                  A focused community by Misbah Salam for founders and marketers to master brand strategy, creative direction, and modern go‑to‑market.
                </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg bg-white text-black hover:opacity-90 transition focus-ring" href="#videos">
<i className="w-4 h-4" data-lucide="play"></i>
                    Continue learning
                  </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] hover:bg-white hover:text-black transition focus-ring" href="#mentorship">
<i className="w-4 h-4" data-lucide="user-round"></i>
                    Book mentorship
                  </a>
</div>

<div className="mt-8 grid grid-cols-3 gap-4">
<div className="rounded-xl border border-[color:var(--brand-line)] p-4 bg-[color:var(--brand-elev)]/40">
<p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Members</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">1,240</p>
</div>
<div className="rounded-xl border border-[color:var(--brand-line)] p-4 bg-[color:var(--brand-elev)]/40">
<p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Videos</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">86</p>
</div>
<div className="rounded-xl border border-[color:var(--brand-line)] p-4 bg-[color:var(--brand-elev)]/40">
<p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Hours Mentored</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">430+</p>
</div>
</div>
</div>
<div className="relative min-h-[260px] md:min-h-full">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1617727553252-c1f293304bfe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-l from-[color:var(--brand-bg)]/40 to-transparent"></div>
</div>
</div>
</section>

<section className="mt-12" id="mentorship">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Mentorship &amp; Services</h2>
<p className="text-[15px] text-[color:var(--brand-muted)] mt-1">Focused guidance and hands-on collaboration to build a resilient brand.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white" href="#">
                Explore all
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<article className="group rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6 hover:bg-[color:var(--brand-elev)] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[color:var(--brand-line)] flex items-center justify-center bg-white text-black">
<i className="w-5 h-5" data-lucide="compass"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Visionary Brand Mentorship</h3>
</div>
<p className="mt-3 text-[15px] text-[color:var(--brand-muted)]">
                  One‑on‑one guidance to navigate branding, marketing, and business challenges with clarity and confidence.
                </p>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white text-black hover:opacity-90 focus-ring">
<i className="w-4 h-4" data-lucide="calendar"></i> Book a session
                  </button>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-[color:var(--brand-line)] hover:bg-white hover:text-black focus-ring">
<i className="w-4 h-4" data-lucide="info"></i> Learn more
                  </button>
</div>
</article>

<article className="group rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6 hover:bg-[color:var(--brand-elev)] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[color:var(--brand-line)] flex items-center justify-center bg-white text-black">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Brand Consultancy</h3>
</div>
<p className="mt-3 text-[15px] text-[color:var(--brand-muted)]">
                  Comprehensive solutions to build, scale, and refine your brand for long‑term success.
                </p>
<div className="mt-5">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white text-black hover:opacity-90 focus-ring">
<i className="w-4 h-4" data-lucide="file-stack"></i> Start a project
                  </button>
</div>
</article>

<article className="group rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6 hover:bg-[color:var(--brand-elev)] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[color:var(--brand-line)] flex items-center justify-center bg-white text-black">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Brand Strategy Development</h3>
</div>
<p className="mt-3 text-[15px] text-[color:var(--brand-muted)]">
                  Tailored strategies to define your brand’s purpose, voice, and positioning.
                </p>
<div className="mt-5">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-[color:var(--brand-line)] hover:bg-white hover:text-black focus-ring">
<i className="w-4 h-4" data-lucide="layers"></i> View framework
                  </button>
</div>
</article>

<article className="group rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6 hover:bg-[color:var(--brand-elev)] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[color:var(--brand-line)] flex items-center justify-center bg-white text-black">
<i className="w-5 h-5" data-lucide="megaphone"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Marketing — Media Planning</h3>
</div>
<p className="mt-3 text-[15px] text-[color:var(--brand-muted)]">
                  Redesigning and optimizing strategies to align with the ever‑evolving consumer landscape.
                </p>
<div className="mt-5">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white text-black hover:opacity-90 focus-ring">
<i className="w-4 h-4" data-lucide="line-chart"></i> Plan a campaign
                  </button>
</div>
</article>

<article className="group rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6 hover:bg-[color:var(--brand-elev)] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[color:var(--brand-line)] flex items-center justify-center bg-white text-black">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Workshops &amp; Education</h3>
</div>
<p className="mt-3 text-[15px] text-[color:var(--brand-muted)]">
                  Courses and sessions on building a winning brand strategy, designed for entrepreneurs.
                </p>
<div className="mt-5">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-[color:var(--brand-line)] hover:bg-white hover:text-black focus-ring">
<i className="w-4 h-4" data-lucide="book-open"></i> Browse courses
                  </button>
</div>
</article>

<article className="group rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6 hover:bg-[color:var(--brand-elev)] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-[color:var(--brand-line)] flex items-center justify-center bg-white text-black">
<i className="w-5 h-5" data-lucide="clock-9"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Community Office Hours</h3>
</div>
<p className="mt-3 text-[15px] text-[color:var(--brand-muted)]">
                  Weekly live Q&amp;A with Misbah Salam. Bring your deck, creative, or roadmap for feedback.
                </p>
<div className="mt-5">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white text-black hover:opacity-90 focus-ring">
<i className="w-4 h-4" data-lucide="video"></i> Save my seat
                  </button>
</div>
</article>
</div>
</section>

<section className="mt-12" id="videos">
<div className="flex items-end justify-between gap-4 flex-wrap">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Latest Videos</h2>
<p className="text-[15px] text-[color:var(--brand-muted)] mt-1">Curated sessions and lessons exclusive to the community.</p>
</div>

<div className="flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] hover:bg-white hover:text-black transition focus-ring" id="filterBtn">
<i className="w-4 h-4" data-lucide="filter"></i>
                    Filter
                  </button>

<div className="hidden absolute right-0 mt-2 w-56 rounded-xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] shadow-xl p-2" id="filterDropdown">
<p className="px-2 pt-2 pb-1 text-[11px] uppercase tracking-[0.18em] text-white/60">Category</p>
<div className="p-1 grid grid-cols-2 gap-1">
<button className="filter-chip px-2.5 py-1.5 rounded-lg text-sm bg-white text-black" data-filter="All">All</button>
<button className="filter-chip px-2.5 py-1.5 rounded-lg text-sm border border-[color:var(--brand-line)]" data-filter="Strategy">Strategy</button>
<button className="filter-chip px-2.5 py-1.5 rounded-lg text-sm border border-[color:var(--brand-line)]" data-filter="Branding">Branding</button>
<button className="filter-chip px-2.5 py-1.5 rounded-lg text-sm border border-[color:var(--brand-line)]" data-filter="Marketing">Marketing</button>
<button className="filter-chip px-2.5 py-1.5 rounded-lg text-sm border border-[color:var(--brand-line)]" data-filter="Workshops">Workshops</button>
<button className="filter-chip px-2.5 py-1.5 rounded-lg text-sm border border-[color:var(--brand-line)]" data-filter="Case Study">Case Study</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="videoGrid">

<article className="video-card group rounded-2xl border border-[color:var(--brand-line)] overflow-hidden bg-[color:var(--brand-elev)]/40" data-category="Branding">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg bg-white text-black shadow focus-ring">
<i className="w-4 h-4" data-lucide="play"></i> Play
                  </button>
<span className="absolute top-3 right-3 text-[12px] px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/90">12:34</span>
</div>
<div className="p-4">
<h3 className="font-semibold tracking-tight">Identity Systems: From Logo to Language</h3>
<p className="mt-1 text-[13px] text-[color:var(--brand-muted)]">Translate vision into consistent brand assets.</p>
</div>
</article>
<article className="video-card group rounded-2xl border border-[color:var(--brand-line)] overflow-hidden bg-[color:var(--brand-elev)]/40" data-category="Strategy">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg bg-white text-black shadow focus-ring">
<i className="w-4 h-4" data-lucide="play"></i> Play
                  </button>
<span className="absolute top-3 right-3 text-[12px] px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/90">18:21</span>
</div>
<div className="p-4">
<h3 className="font-semibold tracking-tight">Positioning Deep‑Dive: Niche to Category</h3>
<p className="mt-1 text-[13px] text-[color:var(--brand-muted)]">Craft a defendable market narrative.</p>
</div>
</article>
<article className="video-card group rounded-2xl border border-[color:var(--brand-line)] overflow-hidden bg-[color:var(--brand-elev)]/40" data-category="Marketing">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg bg-white text-black shadow focus-ring">
<i className="w-4 h-4" data-lucide="play"></i> Play
                  </button>
<span className="absolute top-3 right-3 text-[12px] px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/90">09:50</span>
</div>
<div className="p-4">
<h3 className="font-semibold tracking-tight">Media Planning 2025: Full‑Funnel Blueprint</h3>
<p className="mt-1 text-[13px] text-[color:var(--brand-muted)]">Efficient reach and creative sequencing.</p>
</div>
</article>
<article className="video-card group rounded-2xl border border-[color:var(--brand-line)] overflow-hidden bg-[color:var(--brand-elev)]/40" data-category="Workshops">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg bg-white text-black shadow focus-ring">
<i className="w-4 h-4" data-lucide="play"></i> Play
                  </button>
<span className="absolute top-3 right-3 text-[12px] px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/90">42:12</span>
</div>
<div className="p-4">
<h3 className="font-semibold tracking-tight">Workshop: Building a Messaging Map</h3>
<p className="mt-1 text-[13px] text-[color:var(--brand-muted)]">Align teams with crisp copy pillars.</p>
</div>
</article>
<article className="video-card group rounded-2xl border border-[color:var(--brand-line)] overflow-hidden bg-[color:var(--brand-elev)]/40" data-category="Case Study">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg bg-white text-black shadow focus-ring">
<i className="w-4 h-4" data-lucide="play"></i> Play
                  </button>
<span className="absolute top-3 right-3 text-[12px] px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/90">25:03</span>
</div>
<div className="p-4">
<h3 className="font-semibold tracking-tight">Case Study: Rebrand to Category Leader</h3>
<p className="mt-1 text-[13px] text-[color:var(--brand-muted)]">From lagging metrics to market momentum.</p>
</div>
</article>
<article className="video-card group rounded-2xl border border-[color:var(--brand-line)] overflow-hidden bg-[color:var(--brand-elev)]/40" data-category="Strategy">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg bg-white text-black shadow focus-ring">
<i className="w-4 h-4" data-lucide="play"></i> Play
                  </button>
<span className="absolute top-3 right-3 text-[12px] px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/90">31:47</span>
</div>
<div className="p-4">
<h3 className="font-semibold tracking-tight">Pricing Architecture: Good‑Better‑Best</h3>
<p className="mt-1 text-[13px] text-[color:var(--brand-muted)]">Model your value and margins.</p>
</div>
</article>
</div>
</section>

<section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6">
<h3 className="text-lg font-semibold tracking-tight">Your Learning Progress</h3>
<p className="text-[13px] text-[color:var(--brand-muted)] mt-1">Keep momentum week over week.</p>
<div className="mt-4 rounded-xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] p-4">
<div>
<div>
<div>
<div className="relative">
<div className="h-56">
<canvas id="progressChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-sm">
<div className="text-white/80">Weekly watch time</div>
<div className="text-[color:var(--brand-muted)]">Goal: 2h</div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)]/40 p-6">
<h3 className="text-lg font-semibold tracking-tight">Community Announcements</h3>
<div className="mt-4 divide-y divide-[color:var(--brand-line)]">
<div className="py-4 flex items-start gap-3">
<div className="h-9 w-9 rounded-lg border border-[color:var(--brand-line)] bg-white text-black flex items-center justify-center">
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<div>
<p className="font-medium">New Course: Strategic Narrative Sprint</p>
<p className="text-[13px] text-[color:var(--brand-muted)]">A 5‑day framework to clarify your story and GTM. Enrolment opens Monday.</p>
</div>
</div>
<div className="py-4 flex items-start gap-3">
<div className="h-9 w-9 rounded-lg border border-[color:var(--brand-line)] bg-white text-black flex items-center justify-center">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
<div>
<p className="font-medium">Office Hours moved to Thursday</p>
<p className="text-[13px] text-[color:var(--brand-muted)]">We’ll review landing pages and creative briefs this week.</p>
</div>
</div>
<div className="py-4 flex items-start gap-3">
<div className="h-9 w-9 rounded-lg border border-[color:var(--brand-line)] bg-white text-black flex items-center justify-center">
<i className="w-4 h-4" data-lucide="file-archive"></i>
</div>
<div>
<p className="font-medium">Template Drop: Messaging Map v2</p>
<p className="text-[13px] text-[color:var(--brand-muted)]">Download the latest editable deck in Resources.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-12 py-8 border-t border-[color:var(--brand-line)] text-[13px] text-white/60">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
<p>© <span id="year"></span> Brand Masters Club — Misbah Salam</p>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Support</a>
</div>
</div>
</footer>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4" id="loginOverlay">
<div className="w-full max-w-md rounded-2xl border border-[color:var(--brand-line)] bg-[color:var(--brand-elev)] p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-md border border-[color:var(--brand-line)] bg-white" src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[13px] uppercase tracking-[0.22em] text-white/90">Brand Masters Club</p>
<p className="text-[12px] text-[color:var(--brand-muted)]">by MISBAH SALAM</p>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Sign in to continue</h3>
<p className="text-[13px] text-[color:var(--brand-muted)] mt-1">Access the community, videos, and sessions.</p>
<form className="mt-5 space-y-3">
<div>
<label className="block text-sm mb-1">Email</label>
<input className="w-full bg-[color:var(--brand-elev)] border border-[color:var(--brand-line)] rounded-lg px-3 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm mb-1">Password</label>
<input className="w-full bg-[color:var(--brand-elev)] border border-[color:var(--brand-line)] rounded-lg px-3 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between text-[13px]">
<label className="inline-flex items-center gap-2 cursor-pointer">
<span className="relative inline-flex items-center">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-white/10 border border-[color:var(--brand-line)] peer-checked:bg-white relative transition">
<span className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white peer-checked:translate-x-4 transition"></span>
</span>
</span>
              Remember me
            </label>
<a className="text-white/80 hover:text-white" href="#">Forgot?</a>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-4 py-2.5 text-sm font-medium hover:opacity-90 focus-ring" id="loginBtn" type="button">
<i className="w-4 h-4" data-lucide="log-in"></i>
            Sign in
          </button>
</form>
<p className="mt-4 text-[12px] text-[color:var(--brand-muted)]">By continuing you agree to our Terms and Privacy Policy.</p>
</div>
</div>


    </>
  );
}
