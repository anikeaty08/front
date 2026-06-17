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



      // Initialize icons with consistent stroke width
      function initIcons() {
        try { lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } catch (e) {}
      }
      initIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Sidebar mobile drawer
      const menuBtn = document.getElementById('menuBtn');
      const drawer = document.getElementById('mobileDrawer');
      const backdrop = document.getElementById('drawerBackdrop');
      const closeDrawer = document.getElementById('closeDrawer');

      function openDrawer() {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      }
      function hideDrawer() {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
      menuBtn?.addEventListener('click', openDrawer);
      closeDrawer?.addEventListener('click', hideDrawer);
      backdrop?.addEventListener('click', hideDrawer);

      // Mirror desktop sidebar into mobile
      const desktopNav = document.getElementById('sidebarNav');
      const mobileNavList = document.getElementById('mobileNavList');
      if (desktopNav && mobileNavList) {
        mobileNavList.innerHTML = desktopNav.innerHTML;
        initIcons();
      }

      // Build Table of Contents
      const toc = document.getElementById('toc');
      const content = document.querySelector('[data-docs-content]');
      const headings = content ? Array.from(content.querySelectorAll('h2, h3')) : [];
      const slugify = (str) => str.toLowerCase().trim().replace(/[^a-z0-9\s\-]/g, '').replace(/\s+/g, '-');

      headings.forEach((h) => {
        // Assign IDs and add anchor button
        if (!h.id) h.id = slugify(h.textContent || 'section');
        const anchorBtn = document.createElement('a');
        anchorBtn.href = `#${h.id}`;
        anchorBtn.className = 'ml-2 opacity-0 group-hover:opacity-100 transition';
        anchorBtn.innerHTML = '<i data-lucide="link-2" class="h-4 w-4 text-neutral-400"></i>';
        // Wrap heading text to apply group hover
        const wrap = document.createElement('span');
        wrap.className = 'group inline-flex items-center';
        while (h.firstChild) wrap.appendChild(h.firstChild);
        h.appendChild(wrap);
        h.appendChild(anchorBtn);
      });
      initIcons();

      if (toc) {
        headings.forEach((h) => {
          const level = h.tagName === 'H3' ? 3 : 2;
          const link = document.createElement('a');
          link.href = `#${h.id}`;
          link.textContent = h.textContent?.replace(/#$/, '') || '';
          link.className = (level === 2)
            ? 'block text-neutral-300 hover:text-white transition'
            : 'block pl-4 text-neutral-400 hover:text-neutral-200 transition';
          const item = document.createElement('div');
          item.appendChild(link);
          toc.appendChild(item);
        });
      }

      // Scrollspy
      const links = toc ? Array.from(toc.querySelectorAll('a')) : [];
      const map = new Map(headings.map((h) => [h.id, links.find((l) => l.getAttribute('href') === `#${h.id}`)]));

      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const link = map.get(id);
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove('text-white'));
            link.classList.add('text-white');
          }
        });
      }, { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] });

      headings.forEach((h) => obs.observe(h));

      // Smooth scroll for internal links
      function smoothScroll(e) {
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
          history.replaceState(null, '', href);
          hideDrawer();
        }
      }
      document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', smoothScroll));

      // Mobile search toggles focus
      const mobileSearch = document.getElementById('mobileSearch');
      mobileSearch?.addEventListener('click', () => openDrawer());
    
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl"></div>
<div className="absolute top-1/2 -right-20 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="flex items-center justify-between h-14">
<a className="inline-flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">UC</span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-200 group-hover:text-white transition">Unplugged Collective</span>
<span className="text-[11px] text-neutral-500 ml-2 hidden sm:inline">Docs</span>
</a>
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-[260px] rounded-lg bg-white/[0.04] border border-white/10 pl-8 pr-3 py-1.5 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-white/20 transition" placeholder="Search docs…" type="search"/>
</div>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-white/[0.08] transition" href="#">
<i className="h-4 w-4" data-lucide="plus"></i>
              Join
            </a>
</div>
<div className="md:hidden flex items-center gap-2">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5" id="mobileSearch">
<i className="h-5 w-5" data-lucide="search"></i>
<span className="sr-only">Search</span>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
<span className="sr-only">Open menu</span>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 hidden bg-black/50" id="drawerBackdrop"></div>
<aside className="fixed inset-y-0 left-0 z-50 w-[80%] max-w-xs -translate-x-full md:hidden transition-transform duration-300 ease-out bg-neutral-950/95 backdrop-blur border-r border-white/10" id="mobileDrawer">
<div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">UC</span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-200">Docs</span>
</div>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5" id="closeDrawer">
<i className="h-5 w-5" data-lucide="x"></i>
<span className="sr-only">Close</span>
</button>
</div>
<div className="p-3 border-b border-white/10">
<div className="relative">
<i className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full rounded-lg bg-white/[0.04] border border-white/10 pl-8 pr-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-white/20 transition" placeholder="Search docs…" type="search"/>
</div>
</div>
<nav className="p-3 overflow-y-auto h-[calc(100%-7rem)]">
<ul className="space-y-1 text-sm" id="mobileNavList">

</ul>
</nav>
</aside>

<div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10">
<div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-6">

<aside className="hidden lg:block">
<div className="sticky top-[86px] rounded-xl border border-white/10 bg-white/[0.03]">
<div className="p-3 border-b border-white/10">
<div className="relative">
<i className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full rounded-lg bg-white/[0.04] border border-white/10 pl-8 pr-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-white/20 transition" placeholder="Search docs…" type="search"/>
</div>
</div>
<nav className="px-2 py-2">
<ul className="space-y-1 text-sm" id="sidebarNav">
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#overview"><i className="h-4 w-4" data-lucide="sparkles"></i><span>Overview</span></a></li>
<li className="mt-2 px-2 text-[11px] uppercase tracking-[0.08em] text-neutral-500">Pages</li>
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#homepage"><i className="h-4 w-4" data-lucide="home"></i><span>Homepage</span></a></li>
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#about"><i className="h-4 w-4" data-lucide="heart"></i><span>About</span></a></li>
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#features"><i className="h-4 w-4" data-lucide="layers"></i><span>Features</span></a></li>
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#community"><i className="h-4 w-4" data-lucide="users"></i><span>Community Hub</span></a></li>
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#resources"><i className="h-4 w-4" data-lucide="book-open"></i><span>Resources / Blog</span></a></li>
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#membership"><i className="h-4 w-4" data-lucide="badge-check"></i><span>Membership / CTA</span></a></li>
<li className="mt-2 px-2 text-[11px] uppercase tracking-[0.08em] text-neutral-500">Content</li>
<li><a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] text-neutral-300 hover:text-white" href="#microcopy"><i className="h-4 w-4" data-lucide="quote"></i><span>UI Microcopy</span></a></li>
</ul>
</nav>
</div>
</aside>

<main className="min-w-0" id="content">

<div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-sky-400" data-lucide="book"></i>
<div>
<h1 className="text-xl md:text-2xl font-semibold tracking-tight">Unplugged Collective — Documentation</h1>
<p className="text-xs text-neutral-400">Brand, pages, and interface copy for a modern digital wellness community.</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-3 py-1.5 text-xs font-medium hover:bg-white/90 transition" href="#membership">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                Join the Collective
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-white/[0.06] transition" href="#resources">
<i className="h-4 w-4" data-lucide="compass"></i>
                Explore Resources
              </a>
</div>
</div>

<article className="mt-6 space-y-12" data-docs-content="">

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="overview">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-emerald-400" data-lucide="sparkles"></i>
                    Brand Concept
                  </h2>
<p className="mt-2 text-sm text-neutral-300">
                    Unplugged Collective (Tagline: “Reconnect With Life, Not Just Wi‑Fi.”)
                  </p>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="rounded-lg px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30 bg-emerald-500/10">Approachable</span>
<span className="rounded-lg px-2.5 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/30 bg-sky-500/10">Modern</span>
<span className="rounded-lg px-2.5 py-1 text-[11px] font-medium text-violet-300 ring-1 ring-violet-500/30 bg-violet-500/10">Community‑first</span>
</div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-base font-semibold tracking-tight">Why this works</h3>
<p className="mt-2 text-sm text-neutral-400">
                    “Unplugged” → instantly communicates digital detox.
                    “Collective” → emphasizes community, support, and shared journey.
                  </p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-base font-semibold tracking-tight">Tone</h3>
<p className="mt-2 text-sm text-neutral-400">Modern, warm, and non‑judgmental. Inspires balance without sounding preachy.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-base font-semibold tracking-tight">Tagline</h3>
<p className="mt-2 text-sm text-neutral-200">“Reconnect With Life, Not Just Wi‑Fi.”</p>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="homepage">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-sky-400" data-lucide="home"></i>
                Homepage Hero
              </h2>
<div className="mt-4 space-y-6">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-lg font-semibold tracking-tight">Headline</h3>
<p className="mt-2 text-neutral-200 text-base">“Step Back From Screens. Step Into Life.”</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-lg font-semibold tracking-tight">Subtext</h3>
<p className="mt-2 text-sm text-neutral-300">
                    Unplugged Collective is a digital detox community that helps you reclaim your time, focus, and joy. Join challenges, share wins, and build healthier habits—together.
                  </p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition" href="#membership">
<span>Join the Collective</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/[0.06] transition" href="#resources">
<span>Take the 7‑Day Detox Challenge</span>
<i className="h-4 w-4" data-lucide="flag"></i>
</a>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="about">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-rose-400" data-lucide="heart"></i>
                About Us
              </h2>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-lg font-semibold tracking-tight">Our Mission</h3>
<p className="mt-2 text-sm text-neutral-300">
                    We’re here to help you create mindful boundaries with technology so you can reconnect with the things that truly matter—relationships, creativity, nature, and self‑care.
                  </p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-lg font-semibold tracking-tight">Our Story</h3>
<p className="mt-2 text-sm text-neutral-300">
                    Unplugged Collective began with a group of friends who realized they were spending more time scrolling than living. What started as weekly phone‑free meetups has grown into a global community of people choosing presence over endless pings.
                  </p>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="features">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-amber-400" data-lucide="layers"></i>
                What You’ll Find Inside the Collective
              </h2>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4.5 w-4.5" data-lucide="hourglass"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">Daily Detox Challenges</h3>
<p className="text-sm text-neutral-400">Small steps to reset your screen time.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4.5 w-4.5" data-lucide="library"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">Mindful Resources</h3>
<p className="text-sm text-neutral-400">Articles, guides, and toolkits for digital wellness.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4.5 w-4.5" data-lucide="users"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">Community Support</h3>
<p className="text-sm text-neutral-400">Join groups for accountability and encouragement.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4.5 w-4.5" data-lucide="trees"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">Offline Events</h3>
<p className="text-sm text-neutral-400">Nature walks, journaling circles, and screen‑free hangouts.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3 md:col-span-2">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4.5 w-4.5" data-lucide="trophy"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">Progress Tracking</h3>
<p className="text-sm text-neutral-400">Celebrate milestones as you reclaim your time.</p>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="community">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-emerald-400" data-lucide="map"></i>
                Spaces That Keep You Grounded
              </h2>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex items-start gap-3">
<i className="h-5 w-5 text-neutral-300" data-lucide="ban"></i>
<div>
<h3 className="text-base font-semibold tracking-tight">Screen‑Free Saturdays</h3>
<p className="text-sm text-neutral-400">Weekly commitment to 24 hours offline.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex items-start gap-3">
<i className="h-5 w-5 text-neutral-300" data-lucide="moon"></i>
<div>
<h3 className="text-base font-semibold tracking-tight">Sleep Well Group</h3>
<p className="text-sm text-neutral-400">Evening routines &amp; tips for healthier nights.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex items-start gap-3">
<i className="h-5 w-5 text-neutral-300" data-lucide="pen-line"></i>
<div>
<h3 className="text-base font-semibold tracking-tight">Mindful Journaling Circle</h3>
<p className="text-sm text-neutral-400">Share reflections and creative writing.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex items-start gap-3">
<i className="h-5 w-5 text-neutral-300" data-lucide="mountain"></i>
<div>
<h3 className="text-base font-semibold tracking-tight">Nature Seekers</h3>
<p className="text-sm text-neutral-400">Hike, walk, and explore offline adventures.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex items-start gap-3 md:col-span-2">
<i className="h-5 w-5 text-neutral-300" data-lucide="handshake"></i>
<div>
<h3 className="text-base font-semibold tracking-tight">Accountability Buddies</h3>
<p className="text-sm text-neutral-400">Pair up with someone to stay consistent.</p>
</div>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-white/[0.06] transition" href="#membership">
                  Not ready to unplug alone? Find your people here.
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="resources">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-sky-400" data-lucide="book-open"></i>
                Your Path to Digital Wellness
              </h2>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-base font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="beaker"></i> Articles
                  </h3>
<p className="mt-2 text-sm text-neutral-400">The science of screen addiction &amp; how to reset your brain.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-base font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="list-checks"></i> Guides
                  </h3>
<p className="mt-2 text-sm text-neutral-400">How to create a phone‑free morning routine.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-base font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="goal"></i> Challenges
                  </h3>
<p className="mt-2 text-sm text-neutral-400">7‑Day Digital Detox Starter Challenge.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<h3 className="text-base font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="star"></i> Success Stories
                  </h3>
<p className="mt-2 text-sm text-neutral-400">Members who found balance—and what worked for them.</p>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="membership">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-amber-400" data-lucide="badge-check"></i>
                Are You Ready to Unplug?
              </h2>
<p className="mt-3 text-sm text-neutral-300">
                Small steps today lead to big changes tomorrow. Join thousands of members who are choosing life over likes, presence over pings, and peace over endless notifications.
              </p>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition" href="#">
<span>Join for Free</span>
<i className="h-4 w-4" data-lucide="user-plus"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/[0.06] transition" href="#resources">
<span>Start Your First Challenge</span>
<i className="h-4 w-4" data-lucide="rocket"></i>
</a>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<i className="h-5 w-5 text-emerald-400" data-lucide="check-circle"></i>
<p className="text-sm text-neutral-300">Access to all challenges &amp; groups</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<i className="h-5 w-5 text-emerald-400" data-lucide="users"></i>
<p className="text-sm text-neutral-300">Supportive accountability community</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<i className="h-5 w-5 text-emerald-400" data-lucide="calendar-range"></i>
<p className="text-sm text-neutral-300">Offline event invites</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 flex gap-3">
<i className="h-5 w-5 text-emerald-400" data-lucide="files"></i>
<p className="text-sm text-neutral-300">Exclusive digital wellness resources</p>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6" id="microcopy">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight inline-flex items-center gap-2">
<i className="h-5 w-5 text-violet-400" data-lucide="quote"></i>
                Microcopy Ideas (UI/UX)
              </h2>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-md ring-1 ring-white/15 bg-white/5 text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="log-in"></i>
                    Onboarding Welcome
                  </div>
<p className="mt-3 text-sm text-neutral-200">“You’ve taken the first step to reclaim your time—let’s keep going.”</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-md ring-1 ring-white/15 bg-white/5 text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="inbox"></i>
                    Empty State
                  </div>
<p className="mt-3 text-sm text-neutral-200">“No challenges yet—pick one and start unplugging 📵.”</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
<div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-md ring-1 ring-white/15 bg-white/5 text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="award"></i>
                    Progress Badge
                  </div>
<p className="mt-3 text-sm text-neutral-200">“Congrats! You’ve just earned your first 24hr Unplugged Streak 🌟.”</p>
</div>
</div>
</section>
</article>

<div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Design together. Unplug intentionally.</h3>
<p className="text-sm text-neutral-400 mt-1">Build healthier habits with a community that keeps you grounded.</p>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-3.5 py-2 text-sm font-medium hover:bg-white/90 transition" href="#membership">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                  Get Started
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-neutral-200 hover:bg-white/[0.06] transition" href="#resources">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Read Guides
                </a>
</div>
</div>
</div>
</main>

<aside className="hidden lg:block">
<div className="sticky top-[86px] rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="list-tree"></i>
<span className="text-xs font-medium tracking-tight text-neutral-300">On this page</span>
</div>
<nav className="text-sm space-y-2" id="toc">

</nav>
</div>
</aside>
</div>

<footer className="mt-10 py-6 border-t border-white/10 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="inline-flex items-center gap-2">
<span>© <span id="year">2025</span> Unplugged Collective</span>
<span className="text-neutral-600">•</span>
<a className="hover:text-neutral-300 transition" href="#">Status</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300 transition" href="#">Terms</a>
<a className="hover:text-neutral-300 transition" href="#">Privacy</a>
</div>
</footer>
</div>



    </>
  );
}
