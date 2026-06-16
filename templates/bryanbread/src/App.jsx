import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', function() {
      if (window.lucide) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      let open = false;
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          open = !open;
          mobileMenu.classList.toggle('hidden', !open);
          menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
          const icon = menuBtn.querySelector('svg');
          if (icon && window.lucide) {
            icon.replaceWith(window.lucide.createElement(open ? 'x' : 'menu', { size: 20, 'stroke-width': 1.5 }));
          }
        });
      }

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full border-b border-slate-200/80 bg-white">
<div className="mx-auto max-w-7xl px-6">
<p className="py-2.5 text-center text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>
        Fresh loaves daily from 7:00 AM. Preorders close at 5:00 PM the day prior.
      </p>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur border-b bg-white/80 border-slate-200/80">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a aria-label="Bryan Home" className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-sm grid place-items-center ring-1 bg-slate-900 text-white ring-slate-900/10">
<span className="text-sm tracking-tight" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>B</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-[17px] tracking-tight" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Bryan</span>
<span className="text-[12px] text-slate-500 -mt-0.5" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '400'}}>Bread &amp; Pastry</span>
</div>
</a>
<nav aria-label="Primary" className="hidden md:flex items-center gap-8">
<a className="text-[15px] transition-colors text-slate-700 hover:text-slate-900" href="#breads" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Breads</a>
<a className="text-[15px] transition-colors text-slate-700 hover:text-slate-900" href="#story" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Story</a>
<a className="text-[15px] transition-colors text-slate-700 hover:text-slate-900" href="#process" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Process</a>
<a className="text-[15px] transition-colors text-slate-700 hover:text-slate-900" href="#visit" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Visit</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-[14px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:border-slate-400" href="#preorder" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<i className="h-4 w-4" data-lucide="bag"></i>
            Preorder
          </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white hover:bg-slate-100 hover:border-slate-400" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200/80 bg-white" id="mobileMenu">
<div className="mx-auto max-w-7xl px-6 py-4">
<div className="flex flex-col gap-3">
<a className="text-[16px] py-1 text-slate-800 hover:text-slate-900" href="#breads" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Breads</a>
<a className="text-[16px] py-1 text-slate-800 hover:text-slate-900" href="#story" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Story</a>
<a className="text-[16px] py-1 text-slate-800 hover:text-slate-900" href="#process" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Process</a>
<a className="text-[16px] py-1 text-slate-800 hover:text-slate-900" href="#visit" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Visit</a>
<a className="inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-[14px] transition-colors mt-2 w-fit border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:border-slate-400" href="#preorder" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<i className="h-4 w-4" data-lucide="bag"></i>
            Preorder
          </a>
</div>
</div>
</div>
</header>
<main className="">

<section className="relative">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 sm:py-20">
<div className="">
<h1 className="text-4xl sm:text-5xl tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, serif', fontWeight: '600'}}>
              Bread, patiently made.
            </h1>
<p className="mt-4 text-[18px] leading-7 text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '400'}}>
              Naturally leavened loaves using stone‑milled flour, water, and time. Baked every morning in small batches.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 bg-slate-900 text-white hover:bg-slate-800" href="#preorder" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Preorder a loaf
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:border-slate-400" href="#breads" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<i className="h-4 w-4" data-lucide="loaf"></i>
                See today's breads
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
<div className="flex items-start gap-3">
<div className="rounded-md border p-2 border-slate-200 bg-white">
<svg className="lucide lucide-leaf h-4 w-4 text-neutral-700" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div>
<p className="text-[15px] tracking-tight text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Naturally leavened</p>
<p className="text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Wild starter since 2016</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-md border p-2 border-slate-200 bg-white">
<svg className="lucide lucide-wheat h-4 w-4 text-neutral-700" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
</div>
<div>
<p className="text-[15px] tracking-tight text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Stone‑milled</p>
<p className="text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Regional grains</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-md border p-2 border-slate-200 bg-white">
<svg className="lucide lucide-hourglass h-4 w-4 text-neutral-700" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
</div>
<div>
<p className="text-[15px] tracking-tight text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>48‑hour ferment</p>
<p className="text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Depth &amp; keeping quality</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
<img alt="Freshly baked sourdough loaf" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:block">
<div className="rounded-lg border backdrop-blur px-4 py-3 shadow-sm border-slate-200 bg-white/80">
<p className="text-sm text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Scored at dawn — crackling crust, tender crumb.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200/80 bg-white" id="breads">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, serif', fontWeight: '600'}}>Today’s breads</h2>
<p className="mt-2 text-[17px] text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Small‑batch loaves, rotating with the seasons.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-[14px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:border-slate-400" href="#preorder" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-shopping-basket h-4 w-4" data-lucide="shopping-basket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 11-1 9"></path><path d="m19 11-4-7"></path><path d="M2 11h20"></path><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path><path d="M4.5 15.5h15"></path><path d="m5 11 4-7"></path><path d="m9 11 1 9"></path></svg>
            Quick preorder
          </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border overflow-hidden transition-colors border-slate-200 bg-white hover:border-slate-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Country sourdough loaf" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[20px] tracking-tight text-slate-900" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Country Sourdough</h3>
<p className="text-[15px] mt-1 text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Wheat, rye, long ferment</p>
</div>
<span className="text-[15px] text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>$8</span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-600">
<svg className="lucide lucide-sunrise h-4 w-4" data-lucide="sunrise" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 6 4-4 4 4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
<span className="text-sm" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Ready 7:30 AM</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 bg-slate-900 text-white hover:bg-slate-800" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  Add
                </button>
</div>
</div>
</div>

<div className="group rounded-xl border overflow-hidden transition-colors border-slate-200 bg-white hover:border-slate-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Seeded multigrain loaf" className="group-hover:scale-[1.02] transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1599270613570-a620f2e59f75?w=1600&amp;q=80" style={{}}/>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[20px] tracking-tight text-slate-900" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Seeded Multigrain</h3>
<p className="text-[15px] mt-1 text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Sunflower, sesame, flax</p>
</div>
<span className="text-[15px] text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>$9</span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-600">
<svg className="lucide lucide-sunrise h-4 w-4" data-lucide="sunrise" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 6 4-4 4 4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
<span className="text-sm" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Ready 8:00 AM</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 bg-slate-900 text-white hover:bg-slate-800" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  Add
                </button>
</div>
</div>
</div>

<div className="group rounded-xl border overflow-hidden transition-colors border-slate-200 bg-white hover:border-slate-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Olive rosemary batard" className="group-hover:scale-[1.02] transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-[20px] tracking-tight text-slate-900" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Olive Rosemary</h3>
<p className="text-[15px] mt-1 text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Kalamata, herbs, citrus zest</p>
</div>
<span className="text-[15px] text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>$10</span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-600">
<svg className="lucide lucide-sunrise h-4 w-4" data-lucide="sunrise" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 6 4-4 4 4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
<span className="text-sm" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Ready 8:15 AM</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 bg-slate-900 text-white hover:bg-slate-800" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  Add
                </button>
</div>
</div>
</div>
</div>

<p className="mt-6 text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Availability may vary; we bake until sold out.</p>
</div>
</section>

<section className="py-16 sm:py-20" id="story">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, serif', fontWeight: '600'}}>Bryan’s table</h2>
<p className="mt-4 text-[17px] leading-7 text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>
              I bake with restraint: flour, water, salt. Technique and time do the rest. Each loaf is mixed by hand, fermented cold, and baked to a deep, caramel crust.
            </p>
<p className="mt-3 text-[17px] leading-7 text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>
              Grains are sourced from regional mills, often stone‑ground for flavor and nutrition. The result is bread with character — generous crumb, aromatic crust, and balance.
            </p>
<div className="mt-6 flex items-center gap-4">
<div className="h-10 w-10 rounded-full overflow-hidden border border-slate-200">
<img alt="Bryan portrait" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div>
<p className="text-[15px] tracking-tight text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Bryan</p>
<p className="text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Baker &amp; owner</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
<img alt="Hands shaping dough" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200/80 bg-white" id="process">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, serif', fontWeight: '600'}}>Simple process, exacting care</h2>
<div className="mt-8 grid sm:grid-cols-3 gap-6">
<div className="rounded-xl border p-5 border-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="rounded-md border p-2 border-slate-200 bg-white">
<svg className="lucide lucide-wheat h-5 w-5 text-neutral-700" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
</div>
<h3 className="text-[18px] tracking-tight text-slate-900" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Grain</h3>
</div>
<p className="mt-3 text-[15px] text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Stone‑milled, seasonal flours for depth and aroma.</p>
</div>
<div className="rounded-xl border p-5 border-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="rounded-md border p-2 border-slate-200 bg-white">
<svg className="lucide lucide-droplets h-5 w-5 text-neutral-700" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-[18px] tracking-tight text-slate-900" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Water</h3>
</div>
<p className="mt-3 text-[15px] text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Gentle mixing and autolyse to develop structure.</p>
</div>
<div className="rounded-xl border p-5 border-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="rounded-md border p-2 border-slate-200 bg-white">
<svg className="lucide lucide-hourglass h-5 w-5 text-neutral-700" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
</div>
<h3 className="text-[18px] tracking-tight text-slate-900" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Time</h3>
</div>
<p className="mt-3 text-[15px] text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Long, cool fermentation for flavor and keeping.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid md:grid-cols-2 gap-6">
<figure className="rounded-xl border p-6 border-slate-200 bg-white">
<blockquote className="text-[18px] leading-7 text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontStyle: 'italic'}}>
              The crust sings as it cools; the crumb is open and tender. Bryan’s sourdough is a staple at our table.
            </blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200">
<img alt="Customer portrait" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="text-sm text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Elena, regular</div>
</figcaption>
</figure>
<figure className="rounded-xl border p-6 border-slate-200 bg-white">
<blockquote className="text-[18px] leading-7 text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontStyle: 'italic'}}>
              Honest ingredients, disciplined technique. You taste the grain and the patience.
            </blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200">
<img alt="Customer portrait" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="text-sm text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Marcus, chef</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="sm:py-20 bg-white border-slate-200/80 border-t pt-16 pb-16">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div className="rounded-xl border p-6 sm:p-7 border-slate-200 bg-white">
<h3 className="text-2xl tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, serif', fontWeight: '600'}}>Preorder</h3>
<p className="mt-2 text-[16px] text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Pick up tomorrow morning. Limited quantities.</p>
<form className="mt-5 grid sm:grid-cols-2 gap-3">
<div className="sm:col-span-2">
<label className="block text-sm mb-1 text-slate-700" htmlFor="loaf" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Loaf</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border px-3.5 py-2.5 pr-10 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:border-slate-400" id="loaf" style={{fontFamily: '\'EB Garamond\', ui-serif, Georgia, serif', fontWeight: '500'}}>
<option style={{}}>Country Sourdough</option>
<option style={{}}>Seeded Multigrain</option>
<option style={{}}>Olive Rosemary</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm mb-1 text-slate-700" htmlFor="name" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Name</label>
<input className="w-full rounded-md border px-3.5 py-2.5 text-[15px] placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:border-slate-400" id="name" placeholder="Your name" style={{fontFamily: '\'EB Garamond\', ui-serif, Georgia, serif'}} type="text"/>
</div>
<div>
<label className="block text-sm mb-1 text-slate-700" htmlFor="email" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Email</label>
<input className="w-full rounded-md border px-3.5 py-2.5 text-[15px] placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:border-slate-400" id="email" placeholder="you@example.com" style={{fontFamily: '\'EB Garamond\', ui-serif, Georgia, serif'}} type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm mb-1 text-slate-700" htmlFor="note" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Notes (optional)</label>
<textarea className="w-full rounded-md border px-3.5 py-2.5 text-[15px] placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:border-slate-400" id="note" placeholder="Slice? Seed preference? Pickup time…" rows="3" style={{fontFamily: '\'EB Garamond\', ui-serif, Georgia, serif'}}></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between pt-2">
<p className="text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>You’ll receive a confirmation email.</p>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 bg-slate-900 text-white hover:bg-slate-800" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}} type="button">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Submit
                </button>
</div>
</form>
</div>
<div className="rounded-xl border p-6 sm:p-7 border-slate-200 bg-white">
<h3 className="text-2xl tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, serif', fontWeight: '600'}}>Bread letter</h3>
<p className="mt-2 text:[16px] text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Weekly menu and occasional notes on grain, technique, and flavor.</p>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<input className="w-full rounded-md border px-3.5 py-2.5 text-[15px] placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:border-slate-400" placeholder="you@example.com" style={{fontFamily: '\'EB Garamond\', ui-serif, Georgia, serif'}} type="email"/>
<button className="inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text:[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:border-slate-400" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Subscribe
              </button>
</div>
<p className="mt-3 text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>No spam. Unsubscribe anytime.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-16 pb-16">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div className="">
<h2 className="sm:text-4xl text-3xl tracking-tight text-slate-900" style={{fontFamily: '\'Fraunces\', ui-serif, Georgia, serif', fontWeight: '600'}}>Visit the bakehouse</h2>
<p className="text-[17px] mt-3 text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>42 N Bryce Farm Road</p>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-lg border p-4 border-slate-200 bg-white">
<p className="text-[15px] tracking-tight text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Hours</p>
<p className="mt-1 text-sm text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>Wed–Sun, 7:00 AM – 1:00 PM</p>
</div>
<div className="rounded-lg border p-4 border-slate-200 bg-white">
<p className="text-[15px] tracking-tight text-slate-900" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>Contact</p>
<p className="mt-1 text-sm text-slate-700" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>hello@breadbybryan.com</p>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 bg-slate-900 text-white hover:bg-slate-800" href="https://maps.google.com" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Directions
              </a>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:border-slate-400" href="tel:+10000000000" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif', fontWeight: '500'}}>
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Call
              </a>
</div>
</div>
<div className="">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
<img alt="Exterior of the bakehouse" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1523745663588-1bfa973c9b35?w=1600&amp;q=80" style={{}}/>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200/80 bg-white">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-sm grid place-items-center ring-1 bg-slate-900 text-white ring-slate-900/10">
<span className="text-sm tracking-tight" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>B</span>
</div>
<span className="text-[15px] tracking-tight text-slate-800" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif', fontWeight: '600'}}>Bryan</span>
</div>
<p className="text-sm text-slate-600" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>© <span id="year" style={{}}>2025</span> Bryan. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900" href="#" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            Instagram
          </a>
<a className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900" href="#" style={{fontFamily: '"EB Garamond", ui-serif, Georgia, serif'}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Email
          </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
