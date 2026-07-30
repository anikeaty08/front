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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 bg-neutral-900/80 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-3 group" href="index.html">
<div className="h-9 w-9 shrink-0 rounded-md border border-neutral-800 bg-neutral-900 shadow-sm flex items-center justify-center">
<span className="text-[13px] tracking-tight font-semibold text-neutral-100">MM</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-[18px] sm:text-[19px] tracking-tight font-semibold text-neutral-100">Magda Meijer</span>
<span className="text-[12px] text-neutral-400 font-medium">Ceramic Art</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a aria-current="page" className="text-[14px] font-medium text-neutral-100 underline underline-offset-4" href="index.html">Home</a>
<a className="text-[14px] font-medium text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="gallery.html">Gallery</a>
<a className="text-[14px] font-medium text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="about.html">About</a>
<a className="text-[14px] font-medium text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="commissions.html">Commissions</a>
<a className="text-[14px] font-medium text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="contact.html">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-[14px] font-medium text-neutral-100 hover:border-neutral-700 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" href="gallery.html">
<svg className="lucide lucide-image h-4 w-4" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
              View Gallery
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-3.5 py-2 text-[14px] font-medium hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" href="commissions.html">
<svg className="lucide lucide-feather h-4 w-4" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
              Commission
            </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 p-2 text-neutral-300 hover:text-neutral-100 hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" id="menuButton">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-800 bg-neutral-900" id="mobileNav">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<nav className="grid gap-2">
<a aria-current="page" className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-neutral-800 text-[15px] font-medium text-neutral-200" href="index.html">
              Home <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-neutral-800 text-[15px] font-medium text-neutral-200" href="gallery.html">
              Gallery <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-neutral-800 text-[15px] font-medium text-neutral-200" href="about.html">
              About <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-neutral-800 text-[15px] font-medium text-neutral-200" href="commissions.html">
              Commissions <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-neutral-800 text-[15px] font-medium text-neutral-200" href="contact.html">
              Contact <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 sm:py-18 lg:py-22 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[12px] font-medium text-neutral-300">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Hand-sculpted originals
            </div>
<h1 className="text-[34px] sm:text-[42px] lg:text-[54px] leading-[1.05] font-semibold text-neutral-100 tracking-tight mt-4">
              Ceramic portraits celebrating strength, grace, and exotic beauty
            </h1>
<p className="mt-4 text-[16px] sm:text-[17px] leading-7 text-neutral-400">
              Each piece is a one-of-a-kind sculpture capturing character and presence. Explore the collection or commission a bespoke portrait.
            </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-4 py-2.5 text-[14px] font-medium hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" href="gallery.html">
<svg className="lucide lucide-gallery-horizontal h-4.5 w-4.5" data-lucide="gallery-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3v18"></path><rect height="18" rx="2" width="12" x="6" y="3"></rect><path d="M22 3v18"></path></svg>
                Explore Gallery
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-[14px] font-medium text-neutral-100 hover:border-neutral-700 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" href="about.html">
<svg className="lucide lucide-user h-4.5 w-4.5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Meet the Artist
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-6">
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="text-[22px] font-semibold tracking-tight text-neutral-100">50+</div>
<div className="text-[13px] text-neutral-400">Original sculptures</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="text-[22px] font-semibold tracking-tight text-neutral-100">15 yrs</div>
<div className="text-[13px] text-neutral-400">Studio practice</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
<div className="text-[22px] font-semibold tracking-tight text-neutral-100">Custom</div>
<div className="text-[13px] text-neutral-400">Commissioned portraits</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] w-full rounded-2xl border border-neutral-800 bg-neutral-900 shadow-sm overflow-hidden">
<img alt="Ceramic woman portrait in warm tones" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-3 shadow-sm">
<svg className="lucide lucide-hand h-5 w-5 text-neutral-300" data-lucide="hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
<p className="text-[13px] text-neutral-300">
                Hand-built stoneware with layered glazes
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-14 lg:py-18 border-t border-neutral-800 bg-neutral-950" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-[28px] sm:text-[34px] tracking-tight font-semibold text-neutral-100">Featured Sculptures</h2>
<p className="mt-1 text-[15px] text-neutral-400">Selected works of exotic female forms — elegant, expressive, and timeless.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button aria-label="Previous" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-neutral-100 hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" id="prevBtn">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-neutral-100 hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" id="nextBtn">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-6 relative">

<div className="sm:hidden absolute -top-12 right-0 flex items-center gap-2">
<button aria-label="Previous" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-neutral-100 hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" id="prevBtnM">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-neutral-100 hover:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" id="nextBtnM">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="overflow-hidden rounded-2xl border border-neutral-800">
<ul className="flex gap-6 p-4 sm:p-6 md:p-7 transition-transform duration-500 ease-out will-change-transform" id="carouselTrack" style={{transform: `translateX(0px)`}}>

<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Ceramic portrait sculpture with strong gaze" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1400&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Elysia</h3>
<span className="text-[12px] text-neutral-400">2024</span>
</div>
<p className="text-[12px] text-neutral-400">Stoneware, satin glaze</p>
</div>
</div>
</li>
<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Elegant ceramic bust with intricate texture" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Saffron Muse</h3>
<span className="text-[12px] text-neutral-400">2023</span>
</div>
<p className="text-[12px] text-neutral-400">Porcelain, oxide wash</p>
</div>
</div>
</li>
<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Textured ceramic woman portrait with serene expression" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1400&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Zahara</h3>
<span className="text-[12px] text-neutral-400">2022</span>
</div>
<p className="text-[12px] text-neutral-400">Stoneware, matte glaze</p>
</div>
</div>
</li>
<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Sculpted ceramic figure with dramatic profile" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1400&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Aurelia</h3>
<span className="text-[12px] text-neutral-400">2024</span>
</div>
<p className="text-[12px] text-neutral-400">Porcelain, satin glaze</p>
</div>
</div>
</li>
<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Ceramic portrait with intricate hair details" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Sabine</h3>
<span className="text-[12px] text-neutral-400">2021</span>
</div>
<p className="text-[12px] text-neutral-400">Stoneware, oxide patina</p>
</div>
</div>
</li>
<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Modern ceramic bust with expressive glaze" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Nocturne</h3>
<span className="text-[12px] text-neutral-400">2020</span>
</div>
<p className="text-[12px] text-neutral-400">Porcelain, iron wash</p>
</div>
</div>
</li>
<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Abstract ceramic female head sculpture" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Orion’s Muse</h3>
<span className="text-[12px] text-neutral-400">2023</span>
</div>
<p className="text-[12px] text-neutral-400">Stoneware, ash glaze</p>
</div>
</div>
</li>
<li className="min-w-[82%] sm:min-w-[48%] md:min-w-[32%]">
<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Timeless ceramic woman bust with smooth finish" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-x-3 bottom-3 rounded-lg bg-neutral-900/85 backdrop-blur px-3 py-2 border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">Aria</h3>
<span className="text-[12px] text-neutral-400">2021</span>
</div>
<p className="text-[12px] text-neutral-400">Porcelain, clear glaze</p>
</div>
</div>
</li>
</ul>
</div>

<div className="mt-5 flex items-center justify-center gap-2" id="dots"></div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-[26px] sm:text-[30px] tracking-tight font-semibold text-neutral-100">The artist</h3>
<p className="mt-3 text-[15px] leading-7 text-neutral-400">
              Magda Meijer sculpts ceramic portraits inspired by the elegance and strength of exotic women. Her studio practice blends meticulous hand-building with layered glazes, producing tactile surfaces and emotive forms.
            </p>
<p className="mt-3 text-[15px] leading-7 text-neutral-400">
              Works have been featured in private collections and curated exhibitions. Each piece invites the viewer to contemplate presence, cultural identity, and quiet power.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-4 py-2.5 text-[14px] font-medium hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" href="commissions.html">
<svg className="lucide lucide-pen-tool h-4.5 w-4.5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
                Commission a piece
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-[14px] font-medium text-neutral-100 hover:border-neutral-700 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" href="contact.html">
<svg className="lucide lucide-mail h-4.5 w-4.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Get in touch
              </a>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[3/4] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Hands shaping clay" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="aspect-[3/4] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 translate-y-6">
<img alt="Ceramic tools and workbench" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20 border-t border-neutral-800 bg-neutral-950" id="commissions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h3 className="text-[26px] sm:text-[30px] tracking-tight font-semibold text-neutral-100">Commission a portrait</h3>
<p className="mt-3 text-[15px] text-neutral-400">
              Create a bespoke ceramic portrait capturing the essence of someone meaningful. Limited monthly slots to ensure focus and quality.
            </p>
</div>
<div className="lg:col-span-2">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-2 text-neutral-200">
<svg className="lucide lucide-camera h-5 w-5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-[15px] font-medium">Reference session</span>
</div>
<p className="mt-2 text-[14px] text-neutral-400">Work from photos or an in-studio sitting.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-2 text-neutral-200">
<svg className="lucide lucide-layers h-5 w-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-[15px] font-medium">Material & finish</span>
</div>
<p className="mt-2 text-[14px] text-neutral-400">Choose stoneware or porcelain, matte or satin glaze.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-2 text-neutral-200">
<svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-[15px] font-medium">Timeline</span>
</div>
<p className="mt-2 text-[14px] text-neutral-400">Typical lead time 6–10 weeks.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-2 text-neutral-200">
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[15px] font-medium">Care & authenticity</span>
</div>
<p className="mt-2 text-[14px] text-neutral-400">Signed certificate and care guidance included.</p>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-4 py-2.5 text-[14px] font-medium hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" href="contact.html">
<svg className="lucide lucide-message-circle h-4.5 w-4.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Start a commission
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<h3 className="text-[26px] sm:text-[30px] tracking-tight font-semibold text-neutral-100">Visit the studio</h3>
<p className="mt-2 text-[15px] text-neutral-400">Studio visits by appointment. Please reach out to schedule a viewing or discuss a commission.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-3 text-neutral-200">
<svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="text-[15px] font-medium hover:underline underline-offset-4" href="mailto:studio@magdameijer.com">studio@magdameijer.com</a>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-3 text-neutral-200">
<svg className="lucide lucide-phone h-5 w-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="text-[15px] font-medium hover:underline underline-offset-4" href="tel:+0000000000">+00 000 000 000</a>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-3 text-neutral-200">
<svg className="lucide lucide-map-pin h-5 w-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-[15px] font-medium">By appointment — Amsterdam</span>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="flex items-center gap-3 text-neutral-200">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<a className="text-[15px] font-medium hover:underline underline-offset-4" href="#">@magdameijer.art</a>
</div>
</div>
</div>
</div>
<div className="md:col-span-1">
<div className="aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Sunlit ceramics studio interior" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-800 bg-neutral-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

<a className="flex items-center gap-3 group" href="index.html">
<div className="h-9 w-9 shrink-0 rounded-md border border-neutral-800 bg-neutral-900 shadow-sm flex items-center justify-center">
<span className="text-[13px] tracking-tight font-semibold text-neutral-100">MM</span>
</div>
<div className="flex flex-col leading-none"></div></a></div></div></footer>
    </>
  );
}
