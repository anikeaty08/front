import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icons
    document.addEventListener('DOMContentLoaded', function () {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle (persists)
    const themeToggle = document.getElementById('themeToggle');
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
    if (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      updateThemeIcon();
    });

    function updateThemeIcon() {
      const icon = themeToggle.querySelector('i');
      icon.setAttribute('data-lucide', document.documentElement.classList.contains('dark') ? 'sun' : 'moon');
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Newsletter
    function subscribeNewsletter(form) {
      const note = document.getElementById('newsletterNote');
      note.classList.remove('hidden');
      form.reset();
      setTimeout(() => note.classList.add('hidden'), 3000);
    }
    window.subscribeNewsletter = subscribeNewsletter;

    // Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.post-card');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        const cat = btn.dataset.filter;
        cards.forEach(card => {
          const match = cat === 'all' || card.dataset.category === cat;
          card.classList.toggle('hidden', !match);
        });
      });
    });

    // Like + Bookmark toggles
    function toggleIconState(button, onIcon, offIcon, onClass = 'text-rose-500', offClass = '') {
      const i = button.querySelector('i');
      const isOn = button.getAttribute('data-on') === 'true';
      button.setAttribute('data-on', String(!isOn));
      i.setAttribute('data-lucide', isOn ? offIcon : onIcon);
      button.classList.toggle(onClass, !isOn);
      if (offClass) button.classList.toggle(offClass, isOn);
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    document.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', () => toggleIconState(btn, 'heart', 'heart', 'text-rose-500'));
    });

    document.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', () => toggleIconState(btn, 'bookmark-check', 'bookmark'));
    });

    // Share stub
    document.querySelectorAll('.share-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const card = btn.closest('.post-card');
        const title = card ? card.querySelector('h3')?.textContent?.trim() : document.title;
        const url = location.href;
        if (navigator.share) {
          try { await navigator.share({ title, url }); } catch {}
        } else {
          navigator.clipboard?.writeText(url);
          btn.classList.add('bg-gray-100', 'dark:bg-gray-900');
          setTimeout(() => btn.classList.remove('bg-gray-100', 'dark:bg-gray-900'), 800);
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/70 backdrop-blur border-b border-gray-200/70 dark:border-gray-800/80">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center tracking-tight text-sm font-semibold">TB</div>
<span className="text-base font-medium tracking-tight">Traverse</span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition" href="#">Destinations</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition" href="#">Guides</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition" href="#">Gear</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition" href="#">About</a>
</nav>

<div className="flex items-center gap-2">
<div className="hidden md:flex items-center">
<div className="relative">
<span className="absolute inset-y-0 left-2 flex items-center text-gray-400 dark:text-gray-500">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input __gchrome_uniqueid="3" className="pl-8 pr-3 py-2 w-64 text-sm rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-gray-700" placeholder="Search stories..." type="search"/>
</div>
</div>
<button aria-label="Toggle theme" className="p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10" id="themeToggle">
<svg className="lucide lucide-sun w-[20px] h-[20px]" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; button:nth-of-type(1) &gt; svg:nth-of-type(1)" data-icon-replaced="true" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(243, 244, 246)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<button aria-label="Open menu" className="md:hidden p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden pb-4">
<div className="relative">
<span className="absolute inset-y-0 left-2 flex items-center text-gray-400 dark:text-gray-500">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input __gchrome_uniqueid="4" className="pl-8 pr-3 py-2 w-full text-sm rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-gray-700" placeholder="Search stories..." type="search"/>
</div>
</div>

<div className="hidden md:hidden pb-4 border-t border-gray-200 dark:border-gray-800" id="mobileMenu">
<nav className="pt-4 grid gap-2">
<a className="px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium" href="#">Destinations</a>
<a className="px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium" href="#">Guides</a>
<a className="px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium" href="#">Gear</a>
<a className="px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium" href="#">About</a>
</nav>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6">

<section className="py-10 md:py-12">
<div className="grid md:grid-cols-3 gap-6">

<article className="md:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group">
<div className="relative">
<img alt="Mountain sunrise in Patagonia" className="w-full h-72 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 p-6 md:p-8">
<div className="flex items-center gap-2 mb-3">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur">Adventure</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-gray-800 backdrop-blur">Patagonia</span>
</div>
<h1 className="text-3xl md:text-4xl tracking-tight font-semibold text-white">Chasing First Light in the Andes</h1>
<p className="mt-2 md:mt-3 text-sm md:text-base text-white/80 max-w-2xl">A sunrise scramble above El Chaltén that reminded me why thin air and cold hands are always worth it.</p>
<div className="mt-4 flex items-center gap-4 text-white/80">
<div className="flex items-center gap-2">
<img alt="Author" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="text-sm font-medium">Ava Reed</span>
</div>
<span className="text-sm">Aug 22 • 7 min read</span>
</div>
</div>
</div>
</article>

<div className="grid gap-6">
<article className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group">
<div className="relative">
<img alt="Tokyo night street" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&amp;w=1834&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 p-5">
<div className="flex items-center gap-2 mb-2">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur">City</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-gray-800 backdrop-blur">Japan</span>
</div>
<h2 className="text-xl tracking-tight font-semibold text-white">Midnight Ramen Runs in Tokyo</h2>
</div>
</div>
</article>
<article className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group">
<div className="relative">
<img alt="Tropical beach and palms" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 p-5">
<div className="flex items-center gap-2 mb-2">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur">Nature</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-gray-800 backdrop-blur">Bali</span>
</div>
<h2 className="text-xl tracking-tight font-semibold text-white">A Week of Sunrises in Uluwatu</h2>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-2">
<div className="flex flex-wrap items-center gap-2">
<button aria-pressed="true" className="filter-btn px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition aria-[pressed=true]:bg-gray-900 aria-[pressed=true]:text-white aria-[pressed=true]:border-gray-900 dark:aria-[pressed=true]:bg-white dark:aria-[pressed=true]:text-gray-900 dark:aria-[pressed=true]:border-white" data-filter="all">All</button>
<button className="filter-btn px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" data-filter="City">City</button>
<button className="filter-btn px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" data-filter="Nature">Nature</button>
<button className="filter-btn px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" data-filter="Food">Food</button>
<button className="filter-btn px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" data-filter="Culture">Culture</button>
<button className="filter-btn px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" data-filter="Adventure">Adventure</button>
</div>
<div className="h-px bg-gray-100 dark:bg-gray-900 mt-4"></div>
</section>

<section className="md:py-10 grid lg:grid-cols-12 pt-8 pb-8 gap-x-8 gap-y-8" data-element-locator="html &gt; body:nth-of-type(1) &gt; main:nth-of-type(1) &gt; section:nth-of-type(3)">

<div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">

<article className="post-card rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-sm transition" data-category="City">
<div className="relative">
<img alt="New York skyline at golden hour" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">City</div>
<button aria-label="Like" className="absolute top-3 right-3 like-btn p-2 rounded-md bg-white/90 text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Rooftops and Reflections in Manhattan</h3>
<p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">A quieter path through the West Side, chasing light on glass towers and hidden gardens.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-xs text-gray-600 dark:text-gray-400">Jun 9 • 5 min</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Bookmark" className="bookmark-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button aria-label="Share" className="share-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-share-2 h-5 w-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>
</div>
</article>
<article className="post-card rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-sm transition" data-category="Nature">
<div className="relative">
<img alt="Misty forest trail" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">Nature</div>
<button aria-label="Like" className="absolute top-3 right-3 like-btn p-2 rounded-md bg-white/90 text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Fog Lessons on the Pacific Crest</h3>
<p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">When the horizon disappears, the rhythm of your steps becomes the story.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-xs text-gray-600 dark:text-gray-400">Jul 14 • 6 min</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Bookmark" className="bookmark-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button aria-label="Share" className="share-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-share-2 h-5 w-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>
</div>
</article>
<article className="post-card rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-sm transition" data-category="Food">
<div className="relative">
<img alt="Colorful market food spread" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">Food</div>
<button aria-label="Like" className="absolute top-3 right-3 like-btn p-2 rounded-md bg-white/90 text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Markets that Taste like Oaxaca</h3>
<p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">Following the smoke of tlayudas and the rhythm of marimbas through the Zócalo.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="text-xs text-gray-600 dark:text-gray-400">May 2 • 4 min</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Bookmark" className="bookmark-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button aria-label="Share" className="share-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-share-2 h-5 w-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>
</div>
</article>
<article className="post-card rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-sm transition" data-category="Culture">
<div className="relative">
<img alt="Colorful temple festival" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">Culture</div>
<button aria-label="Like" className="absolute top-3 right-3 like-btn p-2 rounded-md bg-white/90 text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Festivals of Light in Chiang Mai</h3>
<p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">Lanterns, river offerings, and the quiet after the crowd fades.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-xs text-gray-600 dark:text-gray-400">Nov 4 • 8 min</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Bookmark" className="bookmark-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button aria-label="Share" className="share-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-share-2 h-5 w-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>
</div>
</article>
<article className="post-card rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-sm transition" data-category="Adventure">
<div className="relative">
<img alt="Hiker on ridge at sunrise" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">Adventure</div>
<button aria-label="Like" className="absolute top-3 right-3 like-btn p-2 rounded-md bg-white/90 text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">How to Pack for One-Bag Trekking</h3>
<p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">Dialing in a kit that disappears on trail but shines at camp.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-xs text-gray-600 dark:text-gray-400">Mar 18 • 9 min</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Bookmark" className="bookmark-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button aria-label="Share" className="share-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-share-2 h-5 w-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>
</div>
</article>
<article className="post-card rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-sm transition" data-category="City">
<div className="relative">
<img alt="Lisbon tram on a hill" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">City</div>
<button aria-label="Like" className="absolute top-3 right-3 like-btn p-2 rounded-md bg-white/90 text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Azulejo Mornings in Lisbon</h3>
<p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">Tiles, trams, and tart mornings that taste like cinnamon.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-xs text-gray-600 dark:text-gray-400">Apr 1 • 3 min</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Bookmark" className="bookmark-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button aria-label="Share" className="share-btn p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<svg className="lucide lucide-share-2 h-5 w-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>
</div>
</article>
</div>

<aside className="lg:col-span-4 space-y-6">

<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900">
<svg className="lucide lucide-send h-5 w-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Get new stories</h3>
</div>
<p className="text-sm text-gray-600 dark:text-gray-400">No spam. Just thoughtful travel once a week.</p>
<form __gchrome_uniqueid="1" className="mt-4 grid gap-3" onsubmit="event.preventDefault(); subscribeNewsletter(this);">
<input __gchrome_uniqueid="2" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10" placeholder="you@example.com" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900 hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/20" type="submit">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm font-medium">Subscribe</span>
</button>
<div className="hidden text-xs text-green-600 dark:text-green-400" id="newsletterNote">Thanks! Check your inbox to confirm.</div>
</form>
</div>

<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
<div className="flex items-center gap-3">
<img alt="Author" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-base font-semibold tracking-tight">About the author</h4>
<p className="text-xs text-gray-600 dark:text-gray-400">Ava Reed • Field notes and photo essays</p>
</div>
</div>
<p className="mt-3 text-sm text-gray-700 dark:text-gray-300">I travel slow, carry light, and write stories that smell like sea spray and pine. This blog is my map of little moments.</p>
<div className="mt-4 flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium transition" href="#">
<svg className="lucide lucide-camera h-4 w-4" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg> Photos
            </a>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium transition" href="#">
<svg className="lucide lucide-map h-4 w-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> Map
            </a>
</div>
</div>

<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
<svg className="lucide lucide-flame h-5 w-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Trending now</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<img alt="Iceland road" className="h-14 w-20 rounded-md object-cover border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div>
<a className="text-sm font-medium hover:underline" href="#">Ring Road in 5 Days</a>
<p className="text-xs text-gray-600 dark:text-gray-400">Iceland • 6 min</p>
</div>
</li>
<li className="flex items-center gap-3">
<img alt="Bali cliff" className="h-14 w-20 rounded-md object-cover border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div>
<a className="text-sm font-medium hover:underline" href="#">Hidden Cliffs of Uluwatu</a>
<p className="text-xs text-gray-600 dark:text-gray-400">Indonesia • 4 min</p>
</div>
</li>
<li className="flex items-center gap-3">
<img alt="Kyoto shrine" className="h-14 w-20 rounded-md object-cover border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div>
<a className="text-sm font-medium hover:underline" href="#">Quiet Mornings in Kyoto</a>
<p className="text-xs text-gray-600 dark:text-gray-400">Japan • 5 min</p>
</div>
</li>
</ul>
</div>

<div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg tracking-tight font-semibold">Field gallery</h3>
<a className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition" href="#">View all</a>
</div>
<div className="grid grid-cols-3 gap-2">
<img alt="Sand dunes" className="h-24 w-full object-cover rounded-md border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Sailing boat" className="h-24 w-full object-cover rounded-md border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Snowy peak" className="h-24 w-full object-cover rounded-md border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Forest" className="h-24 w-full object-cover rounded-md border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Desert road" className="h-24 w-full object-cover rounded-md border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Coastline" className="h-24 w-full object-cover rounded-md border border-gray-200 dark:border-gray-800" src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</aside>
</section>

<section className="my-8 md:my-12 rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 bg-gray-50 dark:bg-gray-900">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h3 className="text-xl md:text-2xl tracking-tight font-semibold">Plan your next escape</h3>
<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get curated itineraries, packing lists, and gear suggestions.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-gray-900/10" href="#">
<svg className="lucide lucide-compass h-5 w-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm font-medium">Explore guides</span>
</a>
<a className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-white/50 dark:hover:bg-gray-800/50 transition text-sm font-medium" href="#">
<svg className="lucide lucide-map-pin h-5 w-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Destinations
          </a>
</div>
</div>
</section>
</main>

<footer className="mt-12 border-t border-gray-200 dark:border-gray-800">
<div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center tracking-tight text-sm font-semibold">TB</div>
<span className="text-base font-medium tracking-tight">Traverse</span>
</div>
<p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-lg">Stories that make you want to close your laptop and catch the next sunrise somewhere new.</p>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight mb-3">Navigate</h5>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition" href="#">Home</a></li>
<li><a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition" href="#">Destinations</a></li>
<li><a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition" href="#">Guides</a></li>
<li><a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight mb-3">Elsewhere</h5>
<div className="flex items-center gap-2">
<a aria-label="Instagram" className="p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" href="#">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter" className="p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="RSS" className="p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition" href="#">
<svg className="lucide lucide-rss h-5 w-5" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</a>
</div>
</div>
</div>
<div className="h-px bg-gray-100 dark:bg-gray-900"></div>
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 dark:text-gray-400">
<p>© <span id="year">2025</span> Traverse. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-gray-900 dark:hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-gray-900 dark:hover:text-white transition" href="#">Terms</a>
<a className="hover:text-gray-900 dark:hover:text-white transition" href="#">Cookies</a>
</div>
</div>
</footer>


    </>
  );
}
