import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize icons
    function mountIcons() {
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
    }

    // Option switching
    const optA = document.getElementById('optA');
    const optB = document.getElementById('optB');
    const optC = document.getElementById('optC');
    const sA = document.getElementById('optionA');
    const sB = document.getElementById('optionB');
    const sC = document.getElementById('optionC');
    const bottomNav = document.getElementById('bottomNav');

    function setActiveOption(key) {
      // Sections
      sA.classList.add('hidden');
      sB.classList.add('hidden');
      sC.classList.add('hidden');
      // Buttons
      [optA, optB, optC].forEach(b => b.className = 'col-span-1 h-10 rounded-lg bg-white/5 text-white text-sm font-medium outline outline-1 outline-white/10 hover:bg-white/10 transition');
      // Toggle by key
      if (key === 'A') {
        sA.classList.remove('hidden');
        optA.className = 'group col-span-1 h-10 rounded-lg bg-white text-neutral-900 text-sm font-medium outline outline-1 outline-neutral-200 hover:outline-neutral-300 transition flex items-center justify-center gap-2';
        bottomNav.classList.remove('hidden');
      } else if (key === 'B') {
        sB.classList.remove('hidden');
        optB.className = 'col-span-1 h-10 rounded-lg bg-white text-neutral-900 text-sm font-medium outline outline-1 outline-neutral-200 hover:outline-neutral-300 transition';
        bottomNav.classList.add('hidden');
      } else {
        sC.classList.remove('hidden');
        optC.className = 'col-span-1 h-10 rounded-lg bg-white text-neutral-900 text-sm font-medium outline outline-1 outline-neutral-200 hover:outline-neutral-300 transition';
        bottomNav.classList.add('hidden');
      }
      mountIcons();
    }

    optA.addEventListener('click', () => setActiveOption('A'));
    optB.addEventListener('click', () => setActiveOption('B'));
    optC.addEventListener('click', () => setActiveOption('C'));

    // Simple audio progress mocks
    function wirePlay(btnId, progId) {
      const btn = document.getElementById(btnId);
      const bar = document.getElementById(progId);
      let playing = false;
      let progress = 0;
      let timer = null;

      function tick() {
        if (!playing) return;
        progress = Math.min(100, progress + 1);
        bar.style.width = progress + '%';
        if (progress >= 100) {
          playing = false;
          btn.innerHTML = '<i data-lucide="play" class="w-5 h-5"></i>';
          mountIcons();
          clearInterval(timer);
        }
      }

      btn.addEventListener('click', () => {
        playing = !playing;
        if (playing) {
          btn.innerHTML = '<i data-lucide="pause" class="w-5 h-5"></i>';
          mountIcons();
          timer = setInterval(tick, 80);
        } else {
          btn.innerHTML = '<i data-lucide="play" class="w-5 h-5"></i>';
          mountIcons();
          clearInterval(timer);
        }
      });
    }

    // Sidebar interactions
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
      sidebar.classList.remove('-translate-x-full');
      sidebarOverlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closeSidebar() {
      sidebar.classList.add('-translate-x-full');
      sidebarOverlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    openSidebarBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSidebar();
    });

    document.addEventListener('DOMContentLoaded', () => {
      setActiveOption('A');
      mountIcons();
      wirePlay('playA', 'progA');
      wirePlay('playB', 'progB');
      wirePlay('playC', 'progC');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
<div className="max-w-screen-sm mx-auto px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition" id="openSidebar">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="text-xl tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>BLAVITY</div>
</div>
<div className="flex items-center gap-1">
<button aria-label="Search" className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<a className="ml-1 px-3 h-8 inline-flex items-center rounded-md text-sm font-medium bg-white/10 hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/40 transition" href="#login">Log In</a>
</div>
</div>

<div className="border-t border-white/10 bg-neutral-900/80">
<div className="max-w-screen-sm mx-auto px-4 py-2">
<div className="grid grid-cols-3 gap-2">
<button className="group col-span-1 h-10 rounded-lg bg-white text-neutral-900 text-sm font-medium outline outline-1 outline-neutral-200 hover:outline-neutral-300 transition flex items-center justify-center gap-2" id="optA">
<span className="w-2 h-2 rounded-full bg-orange-500 group-hover:bg-orange-600 transition"></span>
<span>Option A</span>
</button>
<button className="col-span-1 h-10 rounded-lg bg-white/5 text-white text-sm font-medium outline outline-1 outline-white/10 hover:bg-white/10 transition" id="optB">Option B</button>
<button className="col-span-1 h-10 rounded-lg bg-white/5 text-white text-sm font-medium outline outline-1 outline-white/10 hover:bg-white/10 transition" id="optC">Option C</button>
</div>
</div>
</div>
</header>
<main className="max-w-screen-sm mx-auto px-4 pb-28">

<section className="mt-4">
<div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-semibold bg-orange-100 text-orange-700 tracking-tight">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          LIVE
        </span>
<p className="text-[13px] leading-tight text-neutral-700" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>
          Senate passes historic civil rights legislation • Black-owned businesses see record growth • New HBCU scholarship program announced
        </p>
</div>
</section>



<section className="space-y-6 pt-4" id="optionA">

<article className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
<div className="relative">
<img alt="Art exhibition" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-neutral-900">Featured Story</span>
<h1 className="mt-2 text-2xl tracking-tight font-semibold text-white">
              Revolutionary Art Exhibition Celebrates Black Excellence Across Generations
            </h1>
<p className="mt-1 text-sm text-white/90" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>
              A groundbreaking exhibition showcases 400 years of achievement with contemporary voices alongside historical masters.
            </p>
<div className="mt-1 text-xs text-white/80">By Maya Johnson • 2h • 5 min read</div>
</div>
</div>
</article>

<div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg tracking-tight font-semibold">Daily Briefing</h2>
<p className="text-xs text-neutral-600" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>Top stories and analysis • 8 min</p>
</div>
<button aria-label="Play audio" className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 focus-visible:ring-2 focus-visible:ring-black/30 transition" id="playA">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
</div>
<div className="mt-3 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-[0%] bg-neutral-900 transition-[width] duration-300" id="progA"></div>
</div>
<div className="mt-2 flex justify-between text-[11px] text-neutral-500">
<span>0:00</span><span>08:00</span>
</div>
</div>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Your 5 Must-Reads</h3>
<div className="flex gap-2 overflow-auto">
<button className="px-3 h-8 rounded-full text-xs font-medium bg-neutral-900 text-white">All</button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300">Entertainment</button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300">Health</button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300">Blavity U</button>
</div>
</div>

<details className="group rounded-xl border border-neutral-200 bg-white p-3 shadow-sm hover:shadow-md transition">
<summary className="list-none cursor-pointer">
<div className="flex items-center gap-3">
<img alt="" className="w-20 h-20 rounded-lg object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-[11px] font-medium text-orange-700">Entertainment</div>
<h4 className="text-base font-semibold tracking-tight">Award Season Predictions: Black Excellence Shines</h4>
<p className="text-sm text-neutral-600 mt-0.5 line-clamp-2" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>
                  This year's award shows are set to celebrate unprecedented talent across film, music, and television.
                </p>
<div className="mt-1 text-xs text-neutral-500">By Sarah Johnson • 2h</div>
</div>
<i className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="mt-3 pt-3 border-t border-neutral-100">
<p className="text-sm text-neutral-700" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>
              From groundbreaking performances to revolutionary storytelling, this season promises a celebration of diversity and talent...
            </p>
<div className="mt-3 flex items-center gap-2">
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
              </button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="bookmark"></i> Save
              </button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="message-circle"></i> 24
              </button>
</div>
</div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white p-3 shadow-sm hover:shadow-md transition">
<summary className="list-none cursor-pointer">
<div className="flex items-center gap-3">
<img alt="" className="w-20 h-20 rounded-lg object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-[11px] font-medium text-orange-700">Health</div>
<h4 className="text-base font-semibold tracking-tight">Mental Health Resources Expand in Black Communities</h4>
<p className="text-sm text-neutral-600 mt-0.5 line-clamp-2" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>
                  New initiatives address stigma and improve access to culturally competent care.
                </p>
<div className="mt-1 text-xs text-neutral-500">By Dr. Marcus Williams • 4h</div>
</div>
<i className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="mt-3 pt-3 border-t border-neutral-100">
<p className="text-sm text-neutral-700" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>
              Community-based programs and telehealth services are widening the path to care while honoring cultural context...
            </p>
<div className="mt-3 flex items-center gap-2">
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
              </button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="bookmark"></i> Save
              </button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200 hover:border-neutral-300 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="message-circle"></i> 18
              </button>
</div>
</div>
</details>
</section>

<section className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition">
<h3 className="text-lg tracking-tight font-semibold">Stay Connected</h3>
<p className="text-sm text-neutral-600 mt-1" style={{fontFamily: '\'Work Sans\', Inter, system-ui, -apple-system, \'Segoe UI\', Roboto, sans-serif'}}>
          What the Culture's Talking About — First in Your Inbox.
        </p>
<div className="mt-3 flex gap-2">
<input className="flex-1 h-10 px-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-300" placeholder="Enter your email" type="email"/>
<button className="h-10 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-sm">
            Subscribe
          </button>
</div>
</section>
</section>



<section className="hidden space-y-6 pt-4" id="optionB">

<div className="relative">
<div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none">

<a className="min-w-[85%] snap-start rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition" href="#">
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-neutral-900">Culture</span>
<h2 className="mt-2 text-2xl tracking-tight font-semibold text-white">
                  A New Wave of Black Creators Redefines Design
                </h2>
</div>
</div>
</a>

<a className="min-w-[85%] snap-start rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition" href="#">
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-neutral-900">Business</span>
<h2 className="mt-2 text-2xl tracking-tight font-semibold text-white">
                  Black-Owned Startups See Record Early-Stage Funding
                </h2>
</div>
</div>
</a>

<a className="min-w-[85%] snap-start rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition" href="#">
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-neutral-900">Blavity U</span>
<h2 className="mt-2 text-2xl tracking-tight font-semibold text-white">
                  HBCU Scholarships: The 2025 Guide
                </h2>
</div>
</div>
</a>
</div>
</div>

<div className="flex gap-2 overflow-x-auto">
<button className="px-3 h-8 rounded-full text-xs font-medium bg-neutral-900 text-white">Top</button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200">Entertainment</button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200">Politics</button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200">Wellness</button>
<button className="px-3 h-8 rounded-full text-xs font-medium border border-neutral-200">Business</button>
</div>

<div className="space-y-3">
<article className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm hover:shadow-md transition">
<div className="flex gap-3">
<img alt="" className="w-24 h-24 rounded-lg object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-[11px] font-medium text-orange-700">Home</div>
<h3 className="text-base font-semibold tracking-tight">Black Homeownership Reaches New Milestones</h3>
<p className="text-sm text-neutral-600 mt-0.5 line-clamp-2" style={{fontFamily: '\'Work Sans\', Inter'}}>Innovative programs help families achieve homeownership despite systemic challenges.</p>
<div className="mt-1 text-xs text-neutral-500">By Alicia Davis • 6h</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="px-3 h-8 rounded-md text-xs font-medium bg-neutral-900 text-white inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="play"></i> Listen
            </button>
<button className="px-3 h-8 rounded-md text-xs font-medium border border-neutral-200 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="bookmark-plus"></i> Save
            </button>
</div>
</article>
<article className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm hover:shadow-md transition">
<div className="flex gap-3">
<img alt="" className="w-24 h-24 rounded-lg object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="text-[11px] font-medium text-orange-700">Health</div>
<h3 className="text-base font-semibold tracking-tight">Plant-Based Recipes for Soul Food Classics</h3>
<p className="text-sm text-neutral-600 mt-0.5 line-clamp-2" style={{fontFamily: '\'Work Sans\', Inter'}}>Healthy twists that honor flavor and tradition.</p>
<div className="mt-1 text-xs text-neutral-500">By Chef Maya Robinson • 10h</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="px-3 h-8 rounded-md text-xs font-medium border border-neutral-200 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
            </button>
<button className="px-3 h-8 rounded-md text-xs font-medium border border-neutral-200 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="message-circle"></i> 67
            </button>
</div>
</article>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition">
<div className="flex items-center gap-3">
<button aria-label="Play audio" className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition" id="playB">
<i className="w-5 h-5" data-lucide="play"></i>
</button>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight">Today's Briefing</div>
<div className="text-xs text-neutral-600" style={{fontFamily: '\'Work Sans\', Inter'}}>July 15, 2025 • 8 min</div>
<div className="mt-2 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-[0%] bg-neutral-900 transition-[width] duration-300" id="progB"></div>
</div>
</div>
<button aria-label="Archive" className="p-2 rounded-md border border-neutral-200 hover:border-neutral-300">
<i className="w-5 h-5" data-lucide="calendar-range"></i>
</button>
</div>
</div>

<div className="fixed left-0 right-0 bottom-4 z-40 flex justify-center pointer-events-none">
<div className="pointer-events-auto w-[92%] rounded-2xl border border-neutral-200 bg-white shadow-lg p-3">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
<i className="w-4 h-4 text-orange-700" data-lucide="mail"></i>
</div>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight">Get the Brief</div>
<div className="text-[11px] text-neutral-600" style={{fontFamily: '\'Work Sans\', Inter'}}>Culture’s top stories in your inbox</div>
</div>
<button className="px-3 h-8 rounded-md text-xs font-medium text-white bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Subscribe
            </button>
</div>
</div>
</div>
</section>



<section className="hidden space-y-6 pt-4" id="optionC">

<div className="rounded-xl border border-neutral-200 bg-white p-2 shadow-sm">
<div className="grid grid-cols-4 gap-2">
<button className="h-9 rounded-md text-xs font-medium bg-neutral-900 text-white">Latest</button>
<button className="h-9 rounded-md text-xs font-medium border border-neutral-200">Culture</button>
<button className="h-9 rounded-md text-xs font-medium border border-neutral-200">Briefing</button>
<button className="h-9 rounded-md text-xs font-medium border border-neutral-200">Blavity U</button>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white divide-y divide-neutral-100 shadow-sm">

<div className="p-3 flex gap-3">
<img alt="" className="w-20 h-20 rounded-lg object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-[11px] font-medium text-orange-700">Politics</div>
<h4 className="text-base font-semibold tracking-tight">New Policy Announcement Impacts Small Businesses</h4>
<div className="mt-1 text-xs text-neutral-500">By Sarah Johnson • 30m</div>
</div>
<button className="p-1.5 rounded-md border border-neutral-200 hover:border-neutral-300 h-fit">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="p-3">
<div className="h-20 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-[12px] text-neutral-600">
            320x100 Sponsored
          </div>
</div>

<div className="p-3 flex gap-3">
<img alt="" className="w-20 h-20 rounded-lg object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="text-[11px] font-medium text-orange-700">Culture</div>
<h4 className="text-base font-semibold tracking-tight">Weekend Festival Celebrates Diversity Across Cities</h4>
<div className="mt-1 text-xs text-neutral-500">By Marcus Williams • 1h</div>
</div>
<button className="p-1.5 rounded-md border border-neutral-200 hover:border-neutral-300 h-fit">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="p-3 flex gap-3">
<img alt="" className="w-20 h-20 rounded-lg object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="text-[11px] font-medium text-orange-700">Business</div>
<h4 className="text-base font-semibold tracking-tight">Tech Startup Success Story: Series A Milestone</h4>
<div className="mt-1 text-xs text-neutral-500">By Alicia Davis • 2h</div>
</div>
<button className="p-1.5 rounded-md border border-neutral-200 hover:border-neutral-300 h-fit">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<details className="group rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
<summary className="list-none cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="audio-lines"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Daily Briefing</div>
<div className="text-[11px] text-neutral-600" style={{fontFamily: '\'Work Sans\', Inter'}}>Play latest • 8 min</div>
</div>
</div>
<i className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-3">
<button aria-label="Play audio" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition" id="playC">
<i className="w-4 h-4" data-lucide="play"></i>
</button>
<div className="flex-1">
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-[0%] bg-neutral-900 transition-[width] duration-300" id="progC"></div>
</div>
<div className="mt-1 flex justify-between text-[11px] text-neutral-500"><span>0:00</span><span>08:00</span></div>
</div>
<button className="px-3 h-8 rounded-md text-xs font-medium border border-neutral-200 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="calendar"></i> Archive
            </button>
</div>
</div>
</details>

<div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
<i className="w-4 h-4 text-orange-700" data-lucide="mail"></i>
</div>
<div>
<div className="text-lg font-semibold tracking-tight">Stay Connected</div>
<div className="text-xs text-neutral-600" style={{fontFamily: '\'Work Sans\', Inter'}}>What the Culture’s Talking About</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<input className="flex-1 h-10 px-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-300" placeholder="Enter your email" type="email"/>
<button className="h-10 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            Subscribe
          </button>
</div>
</div>
</section>
</main>

<nav className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-neutral-200" id="bottomNav">
<div className="max-w-screen-sm mx-auto grid grid-cols-5">
<a className="flex flex-col items-center justify-center py-2 text-neutral-900" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[11px] mt-1 font-medium">Home</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-neutral-500 hover:text-neutral-900 transition" href="#">
<i className="w-5 h-5" data-lucide="radio"></i>
<span className="text-[11px] mt-1 font-medium">Briefing</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-neutral-500 hover:text-neutral-900 transition" href="#">
<i className="w-5 h-5" data-lucide="grid"></i>
<span className="text-[11px] mt-1 font-medium">Topics</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-neutral-500 hover:text-neutral-900 transition" href="#">
<i className="w-5 h-5" data-lucide="search"></i>
<span className="text-[11px] mt-1 font-medium">Search</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-neutral-500 hover:text-neutral-900 transition" href="#">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[11px] mt-1 font-medium">Profile</span>
</a>
</div>
</nav>

<div className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm hidden" id="sidebarOverlay"></div>
<aside className="fixed top-0 left-0 z-[60] h-full w-[88%] max-w-sm -translate-x-full transition-transform duration-300 bg-neutral-950 text-white shadow-xl border-r border-white/10" id="sidebar">

<div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
<div className="text-lg tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>BLAVITY</div>
<button aria-label="Close menu" className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition" id="closeSidebar">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="h-[calc(100%-56px)] overflow-y-auto px-4 py-3 space-y-6">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium tracking-tight">B</div>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight">Welcome</div>
<div className="text-xs text-white/70" style={{fontFamily: '\'Work Sans\', Inter'}}>Sign in for a personalized feed</div>
</div>
<a className="px-3 h-8 rounded-md text-xs font-medium bg-white text-neutral-900 hover:bg-white/90 transition" href="#login">Log In</a>
</div>

<div className="relative">
<i className="w-4 h-4 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full h-10 pl-9 pr-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/50 text-sm" placeholder="Search articles, topics, creators" type="search"/>
</div>

<nav className="space-y-1">
<div className="text-[11px] uppercase tracking-wide text-white/40">Navigate</div>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10 outline outline-1 outline-white/5" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-sm font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="radio"></i>
<span className="text-sm font-medium">Briefing</span>
</a>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="grid"></i>
<span className="text-sm font-medium">Topics</span>
</a>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="bookmark"></i>
<span className="text-sm font-medium">Saved</span>
</a>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="text-sm font-medium">Notifications</span>
</a>
</nav>

<div className="space-y-2">
<div className="text-[11px] uppercase tracking-wide text-white/40">Quick Topics</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 h-8 rounded-full text-xs font-medium bg-white text-neutral-900 hover:bg-white/90">Top</button>
<button className="px-3 h-8 rounded-full text-xs font-medium outline outline-1 outline-white/15 hover:outline-white/25">Entertainment</button>
<button className="px-3 h-8 rounded-full text-xs font-medium outline outline-1 outline-white/15 hover:outline-white/25">Politics</button>
<button className="px-3 h-8 rounded-full text-xs font-medium outline outline-1 outline-white/15 hover:outline-white/25">Wellness</button>
<button className="px-3 h-8 rounded-full text-xs font-medium outline outline-1 outline-white/15 hover:outline-white/25">Business</button>
<button className="px-3 h-8 rounded-full text-xs font-medium outline outline-1 outline-white/15 hover:outline-white/25">Blavity U</button>
</div>
</div>

<div className="space-y-1">
<div className="text-[11px] uppercase tracking-wide text-white/40">More</div>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="mic-2"></i>
<span className="text-sm font-medium">Podcasts</span>
</a>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="calendar-range"></i>
<span className="text-sm font-medium">Events</span>
</a>
<a className="flex items-center gap-3 px-2 h-10 rounded-md hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
<span className="text-sm font-medium">Newsletters</span>
</a>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-full bg-orange-200/20 text-orange-400 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight">Get the Brief</div>
<div className="text-[11px] text-white/70" style={{fontFamily: '\'Work Sans\', Inter'}}>Culture’s top stories in your inbox</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<input className="flex-1 h-9 px-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/50 text-xs" placeholder="Your email" type="email"/>
<button className="h-9 px-3 rounded-md text-xs font-medium text-white bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            Subscribe
          </button>
</div>
</div>

<div className="pt-2 border-t border-white/10 text-[11px] text-white/50" style={{fontFamily: '\'Work Sans\', Inter'}}>
        © 2025 Blavity Media Group
      </div>
</div>
</aside>


    </>
  );
}
