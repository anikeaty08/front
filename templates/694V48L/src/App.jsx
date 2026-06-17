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



    lucide.createIcons();

    // Mobile nav
    const menuBtn=document.getElementById('menu-button');
    const mobileMenu=document.getElementById('mobile-menu');
    menuBtn?.addEventListener('click',()=>{
      const hidden=mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded',String(!hidden));
      menuBtn.firstElementChild?.classList.toggle('rotate-90');
    });

    // Theme toggle
    const themeToggle=document.getElementById('theme-toggle');
    const root=document.documentElement;
    const applyTheme=(mode)=>{mode==='dark'?root.classList.add('dark'):root.classList.remove('dark');};
    const initTheme=()=>{const stored=localStorage.theme;if(stored){applyTheme(stored);}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){applyTheme('dark');}};
    initTheme();
    themeToggle?.addEventListener('click',()=>{
      const dark=root.classList.toggle('dark');
      localStorage.theme=dark?'dark':'light';
      themeToggle.querySelector('[data-lucide="sun"]').classList.toggle('hidden',!dark);
      themeToggle.querySelector('[data-lucide="moon"]').classList.toggle('hidden',dark);
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 bg-neutral-900 text-white px-3 py-1 rounded" href="#main">Skip to content</a>

<header className="w-full bg-white dark:bg-neutral-800 shadow-sm dark:shadow-none">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 h-12">
<div className="flex items-center gap-2 fade-up" style={{animationDelay: '.05s'}}>
<img alt="" aria-hidden="true" className="h-6 w-6 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=64&amp;q=80"/>
<p className="text-[10px] leading-4 uppercase font-medium text-neutral-700 dark:text-neutral-300">Access provided by<br/>University of Oxford</p>
</div>
<div aria-hidden="true" className="h-4 w-px bg-neutral-500/60 fade-up" style={{animationDelay: '.1s'}}></div>
<button aria-label="Search" className="fade-up focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded" style={{animationDelay: '.15s'}}>
<i aria-hidden="true" className="w-5 h-5 stroke-[2]" data-lucide="search"></i>
</button>
<button aria-label="Toggle dark mode" className="fade-up focus-visible:ring-2 focus-visible:ring-red-600 rounded" id="theme-toggle" style={{animationDelay: '.18s'}}>
<i className="w-5 h-5 stroke-[2] hidden" data-lucide="sun"></i>
<i className="w-5 h-5 stroke-[2]" data-lucide="moon"></i>
</button>
<a className="uppercase font-semibold text-[12px] leading-6 fade-up hover:text-neutral-900 dark:hover:text-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 rounded" href="#" style={{animationDelay: '.2s'}}>Log in</a>
<a className="uppercase font-semibold text-[12px] leading-6 text-white bg-red-600 hover:bg-red-700 rounded-full px-4 py-1.5 fade-up focus-visible:ring-2 focus-visible:ring-red-600" href="#" style={{animationDelay: '.25s'}}>Become a Member</a>
</div>
<nav aria-label="Primary" className="border-t border-b border-neutral-200 dark:border-neutral-700">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
<div className="flex items-center gap-6">
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="lg:hidden focus-visible:ring-2 focus-visible:ring-red-600 rounded" id="menu-button">
<i aria-hidden="true" className="w-6 h-6 stroke-[2]" data-lucide="menu"></i>
</button>
<h1 className="sr-only">Science Portal</h1>
<img alt="" aria-hidden="true" className="h-8 w-auto fade-up" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=240&amp;q=80" style={{animationDelay: '.05s'}}/>
</div>
<ul className="hidden lg:flex items-center gap-6 uppercase font-semibold text-[12px] leading-6 *:fade-up" role="list">
<li style={{animationDelay: '.1s'}}><a aria-current="page" className="hover:text-neutral-900 dark:hover:text-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1" href="#">News</a></li>
<li style={{animationDelay: '.15s'}}><a className="hover:text-neutral-900 dark:hover:text-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1" href="#">Careers</a></li>
<li style={{animationDelay: '.2s'}}><a className="hover:text-neutral-900 dark:hover:text-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1" href="#">Commentary</a></li>
<li style={{animationDelay: '.25s'}}><a className="relative group hover:text-neutral-900 dark:hover:text-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1" href="#">Journals<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-red-600 group-hover:w-full group-focus-visible:w-full transition-all duration-200"></span></a></li>
<li style={{animationDelay: '.3s'}}><a className="text-red-600 px-1 hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-600 rounded" href="#">COVID-19</a></li>
<li style={{animationDelay: '.35s'}}><a className="text-red-600 hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1" href="#">Get Our E-Alerts</a></li>
</ul>
<button aria-label="Search" className="lg:hidden focus-visible:ring-2 focus-visible:ring-red-600 rounded">
<i aria-hidden="true" className="w-6 h-6 stroke-[2]" data-lucide="search"></i>
</button>
</div>
<div className="lg:hidden hidden border-b border-neutral-200 dark:border-neutral-700" id="mobile-menu">
<ul className="flex flex-col gap-4 p-4 uppercase font-semibold text-[12px] leading-6" role="list">
<li><a className="block focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1 py-1" href="#">News</a></li>
<li><a className="block focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1 py-1" href="#">Careers</a></li>
<li><a className="block focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1 py-1" href="#">Commentary</a></li>
<li><a className="block focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1 py-1" href="#">Journals</a></li>
<li><a className="block text-red-600 rounded px-1 py-1 focus-visible:ring-2 focus-visible:ring-red-600" href="#">COVID-19</a></li>
<li><a className="block text-red-600 rounded px-1 py-1 focus-visible:ring-2 focus-visible:ring-red-600" href="#">Get Our E-Alerts</a></li>
</ul>
</div>
</nav>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10" id="main">

<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<section aria-labelledby="featured-section-heading" className="md:col-span-2 flex flex-col gap-8">

<article aria-labelledby="featured-article-heading" className="relative overflow-hidden rounded-lg shadow-sm bg-neutral-50 dark:bg-neutral-800 fade-up motion-safe:hover:shadow-md group" style={{animationDelay: '.05s'}}>
<img alt="Colorful wild bird perched on a branch" className="w-full h-80 sm:h-[464px] object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1501706362039-c6e809c43f1e?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-6 px-6">
<div className="flex items-center text-[10px] font-semibold uppercase text-white tracking-wider"><span>Science</span><span aria-hidden="true" className="mx-2 h-3 w-px bg-white/40"></span><span>1 Oct 2020</span></div>
<h2 className="text-[22px] leading-tight tracking-tight font-semibold text-white mt-1" id="featured-article-heading">An unexpected audience</h2>
<p className="mt-2 text-[10px] text-gray-300 uppercase font-normal">By Elias Garcia-Pelegrin, Alexandra K. Schnell, et al.</p>
</div>
</article>

<h3 className="sr-only" id="featured-section-heading">Related stories</h3>
<ul aria-labelledby="featured-section-heading" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
<li className="fade-up" style={{animationDelay: '.1s'}}>
<a className="group block focus-visible:ring-2 focus-visible:ring-red-600 rounded motion-safe:hover:shadow-md" href="#">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"><span className="text-red-600">Health</span><span aria-hidden="true" className="h-3 w-px bg-neutral-300"></span><span className="text-neutral-500 dark:text-neutral-400 font-medium">13 Jun 2024</span></div>
<h4 className="text-[17px] leading-6 tracking-tight font-semibold group-hover:text-red-600 group-hover:underline transition-colors">Breakthrough vaccine shows promise against common cold viruses</h4>
<p className="text-[10px] uppercase font-medium text-neutral-600 dark:text-neutral-400">By Jane Doe, et al.</p>
</div>
</a>
</li>
<li className="fade-up" style={{animationDelay: '.15s'}}>
<a className="group block focus-visible:ring-2 focus-visible:ring-red-600 rounded overflow-hidden shadow-sm motion-safe:hover:shadow-md" href="#">
<img alt="Interior of a particle accelerator facility" className="w-full h-32 sm:h-36 object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d4d?w=600&amp;q=80"/>
<div className="p-4 flex flex-col gap-3">
<div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"><span className="text-red-600">Physics</span><span aria-hidden="true" className="h-3 w-px bg-neutral-300"></span><span className="text-neutral-500 dark:text-neutral-400 font-medium">12 Jun 2024</span></div>
<h4 className="text-[18px] leading-snug tracking-tight font-semibold group-hover:text-red-600 group-hover:underline transition-colors">New particle accelerator sets record for collision energy</h4>
<p className="text-[10px] uppercase font-medium text-neutral-600 dark:text-neutral-400">By John Smith</p>
</div>
</a>
</li>
<li className="fade-up" style={{animationDelay: '.2s'}}>
<a className="group block focus-visible:ring-2 focus-visible:ring-red-600 rounded motion-safe:hover:shadow-md" href="#">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"><span className="text-red-600">Technology</span><span aria-hidden="true" className="h-3 w-px bg-neutral-300"></span><span className="text-neutral-500 dark:text-neutral-400 font-medium">11 Jun 2024</span></div>
<h4 className="text-[17px] leading-6 tracking-tight font-semibold group-hover:text-red-600 group-hover:underline transition-colors">Quantum computers edge closer to solving real-world problems</h4>
<p className="text-[10px] uppercase font-medium text-neutral-600 dark:text-neutral-400">By John Smith</p>
</div>
</a>
</li>
</ul>
</section>

<aside aria-label="Side content" className="md:col-span-1 flex flex-col gap-10">

<div aria-label="Spotlights" className="flex flex-col gap-8">
<article className="group overflow-hidden rounded-lg shadow-sm bg-neutral-50 dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-red-600 motion-safe:hover:shadow-md">
<a className="block focus:outline-none" href="#">
<img alt="Interior view of a modern particle accelerator" className="w-full h-40 object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d4d?w=800&amp;q=80"/>
<div className="p-4">
<span className="uppercase text-xs font-semibold text-red-600">Physics</span><span className="text-neutral-500 dark:text-neutral-400 text-xs ml-2">• Jun 12, 2024</span>
<h4 className="font-semibold tracking-tight text-lg mt-1 leading-snug group-hover:underline group-hover:text-red-600 transition-colors">New particle accelerator sets record for collision energy</h4>
<p className="text-neutral-600 dark:text-neutral-400 text-xs font-medium mt-2">By John Smith</p>
</div>
</a>
</article>
<article className="group overflow-hidden rounded-lg shadow-sm bg-neutral-50 dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-red-600 motion-safe:hover:shadow-md">
<a className="block focus:outline-none" href="#">
<img alt="View of melting Arctic sea ice from above" className="w-full h-40 object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&amp;q=80"/>
<div className="p-4">
<span className="uppercase text-xs font-semibold text-red-600">Climate</span><span className="text-neutral-500 dark:text-neutral-400 text-xs ml-2">• Jun 10, 2024</span>
<h4 className="font-semibold tracking-tight text-lg mt-1 leading-snug group-hover:underline group-hover:text-red-600 transition-colors">Arctic sea ice hits lowest June extent in satellite record</h4>
<p className="text-neutral-600 dark:text-neutral-400 text-xs font-medium mt-2">By Sarah Lee</p>
</div>
</a>
</article>
</div>

<div aria-labelledby="latest-heading" className="flex flex-col gap-6">
<h3 className="text-lg font-semibold tracking-tight" id="latest-heading">Latest News</h3>
<ul className="border-t border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-200 dark:divide-neutral-700" role="list">
<li className="py-4"><a className="flex flex-col group focus-visible:ring-2 focus-visible:ring-red-600 rounded" href="#"><span className="text-xs text-neutral-500 dark:text-neutral-400">2h ago</span><span className="font-medium leading-snug group-hover:underline group-hover:text-red-600 transition-colors">Mars helicopter completes 60th flight amid dusty conditions</span></a></li>
<li className="py-4"><a className="flex flex-col group focus-visible:ring-2 focus-visible:ring-red-600 rounded" href="#"><span className="text-xs text-neutral-500 dark:text-neutral-400">3h ago</span><span className="font-medium leading-snug group-hover:underline group-hover:text-red-600 transition-colors">FDA approves first gene-editing therapy for rare blood disorder</span></a></li>
<li className="py-4"><a className="flex flex-col group focus-visible:ring-2 focus-visible:ring-red-600 rounded" href="#"><span className="text-xs text-neutral-500 dark:text-neutral-400">5h ago</span><span className="font-medium leading-snug group-hover:underline group-hover:text-red-600 transition-colors">Researchers map entire human brain cell by cell in stunning detail</span></a></li>
<li className="py-4"><a className="flex flex-col group focus-visible:ring-2 focus-visible:ring-red-600 rounded" href="#"><span className="text-xs text-neutral-500 dark:text-neutral-400">6h ago</span><span className="font-medium leading-snug group-hover:underline group-hover:text-red-600 transition-colors">New bio-inspired material heals itself in minutes at room temperature</span></a></li>
</ul>
</div>
</aside>
</div>

<section aria-labelledby="quote-heading" className="max-w-5xl mx-auto mt-16 lg:mt-24 px-4 fade-up" style={{animationDelay: '.05s'}}>
<div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg py-16 px-6 sm:px-12 flex flex-col items-center text-center gap-6">
<svg aria-hidden="true" className="stroke-red-600 stroke-[1.5]" data-lucide="quote" height="48" width="48"></svg>
<h2 className="text-[28px] leading-[38px] tracking-tight font-semibold text-neutral-900 dark:text-neutral-50 max-w-3xl" id="quote-heading">Racism, climate denial, and COVID-19 are major crises standing in the way of a prosperous future for the United States…</h2>
<p className="uppercase text-[10px] font-semibold tracking-wider text-neutral-700 dark:text-neutral-400">H. Holden Thorp • Editorial</p>
</div>
</section>

<section aria-labelledby="first-release-heading" className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 lg:mt-28">

<div className="md:col-span-2">

<div className="flex items-center gap-4 fade-up" style={{animationDelay: '.05s'}}>
<h3 className="text-[24px] leading-7 tracking-tight font-semibold uppercase" id="first-release-heading">First Release</h3>
<div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-600"></div>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up" style={{animationDelay: '.1s'}}>

<article className="flex flex-col gap-4 rounded-lg shadow-sm bg-white dark:bg-neutral-800 hover:shadow-md transition-shadow p-6 focus-within:ring-2 focus-within:ring-red-600">
<div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"><span className="text-red-600">Biology</span><span aria-hidden="true" className="h-3 w-px bg-neutral-300"></span><span className="text-neutral-500 dark:text-neutral-400 font-medium">13 Jun 2024</span></div>
<h4 className="text-[18px] leading-snug tracking-tight font-semibold hover:underline hover:text-red-600 transition-colors">CRISPR-based sensor rapidly detects antibiotic resistance genes</h4>
<p className="text-[10px] uppercase font-medium text-neutral-600 dark:text-neutral-400">By Jane Doe</p>
</article>

<article className="flex flex-col gap-4 rounded-lg shadow-sm bg-white dark:bg-neutral-800 hover:shadow-md transition-shadow p-6 focus-within:ring-2 focus-within:ring-red-600">
<div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"><span className="text-red-600">Chemistry</span><span aria-hidden="true" className="h-3 w-px bg-neutral-300"></span><span className="text-neutral-500 dark:text-neutral-400 font-medium">12 Jun 2024</span></div>
<h4 className="text-[18px] leading-snug tracking-tight font-semibold hover:underline hover:text-red-600 transition-colors">Self-assembling polymers enable ultra-thin flexible batteries</h4>
<p className="text-[10px] uppercase font-medium text-neutral-600 dark:text-neutral-400">By Carlos Nguyen</p>
</article>

<article className="flex flex-col gap-4 rounded-lg shadow-sm bg-white dark:bg-neutral-800 hover:shadow-md transition-shadow p-6 focus-within:ring-2 focus-within:ring-red-600">
<div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"><span className="text-red-600">Earth Science</span><span aria-hidden="true" className="h-3 w-px bg-neutral-300"></span><span className="text-neutral-500 dark:text-neutral-400 font-medium">11 Jun 2024</span></div>
<h4 className="text-[18px] leading-snug tracking-tight font-semibold hover:underline hover:text-red-600 transition-colors">Sub-surface magma plumbing revealed beneath dormant volcanoes</h4>
<p className="text-[10px] uppercase font-medium text-neutral-600 dark:text-neutral-400">By Amina El-Sayed</p>
</article>
</div>

<div className="mt-12 flex justify-center fade-up" style={{animationDelay: '.15s'}}>
<button className="uppercase font-semibold text-[12px] leading-6 px-6 py-2 border border-neutral-300 dark:border-neutral-600 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 focus-visible:ring-2 focus-visible:ring-red-600">+ More First Release Papers</button>
</div>
</div>

<div className="md:col-span-1"></div>
</section>
</main>


    </>
  );
}
