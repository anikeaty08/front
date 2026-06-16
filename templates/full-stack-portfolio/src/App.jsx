import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize the menu functionality once DOM is loaded
      document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById('overlay');
        const menuOpenBtn = document.getElementById('menu-open');
        const menuCloseBtn = document.getElementById('menu-close');
        const overlayBg = document.getElementById('overlay-bg');
        const menuLinks = document.querySelectorAll('.menuLink');

        function openMenu() {
          overlay.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
          overlay.classList.add('hidden');
          document.body.style.overflow = '';
        }

        // Open menu
        menuOpenBtn.addEventListener('click', openMenu);

        // Close menu - multiple ways
        menuCloseBtn.addEventListener('click', closeMenu);
        overlayBg.addEventListener('click', closeMenu);
        
        // Close menu when clicking menu links
        menuLinks.forEach(link => {
          link.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
            closeMenu();
          }
        });

        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<a className="group inline-flex items-center gap-3" href="#top">
<span className="block h-2 w-2 rounded-full bg-[#bac4b8]/80 group-hover:bg-[#bac4b8] transition"></span>
<span className="text-xs tracking-[0.2em] uppercase text-[#bac4b8]/70 group-hover:text-[#bac4b8] transition">Full‑Stack Developer</span>
</a>
<button className="text-xs tracking-[0.2em] uppercase text-[#bac4b8]/90 hover:text-[#d8e0d6] transition" id="menu-open">
            Menu
          </button>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 hidden" id="overlay">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" id="overlay-bg"></div>
<div className="relative z-10 h-full">
<div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
<div className="flex h-full items-start justify-end">
<div className="w-full md:w-[480px] lg:w-[520px] border-l border-neutral-800/80 bg-[#141414]">
<div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-neutral-800/80">
<p className="text-xs tracking-[0.2em] uppercase text-[#bac4b8]/60">Navigation</p>
<button className="text-xs tracking-[0.2em] uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" id="menu-close">Close</button>
</div>
<div className="px-6 sm:px-8 py-10 space-y-10">
<nav className="space-y-6">
<a className="menuLink flex items-center justify-between text-2xl tracking-tight text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#work" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>
                    WORK
                    <svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="menuLink flex items-center justify-between text-2xl tracking-tight text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#services" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>
                    SERVICES
                    <svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="menuLink flex items-center justify-between text-2xl tracking-tight text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#clients" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>
                    CLIENTS &amp; RECOGNITION
                    <svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="menuLink flex items-center justify-between text-2xl tracking-tight text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#contact" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>
                    CONTACT
                    <svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</nav>
<div className="space-y-4">
<p className="text-xs tracking-[0.2em] uppercase text-[#bac4b8]/60">Availability</p>
<p className="text-sm uppercase text-[#bac4b8]">Open for Q1–Q2</p>
</div>
<div className="space-y-4">
<p className="text-xs tracking-[0.2em] uppercase text-[#bac4b8]/60">Social</p>
<div className="flex flex-col gap-3">
<a className="group inline-flex items-center gap-2 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#">
<svg className="lucide lucide-mail h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                      Email
                    </a>
<a className="group inline-flex items-center gap-2 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#">
<svg className="lucide lucide-twitter h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      Twitter
                    </a>
<a className="group inline-flex items-center gap-2 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#">
<svg className="lucide lucide-linkedin h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      Linkedin
                    </a>
<a className="group inline-flex items-center gap-2 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#">
<svg className="lucide lucide-github h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      Github
                    </a>
</div>
</div>
<div className="pt-6 border-t border-neutral-800/80">
<p className="text-[10px] uppercase tracking-[0.25em] text-[#bac4b8]/60">All Rights Reserved © 2025</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="relative min-h-screen snap-start" id="top">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
<div className="grid grid-cols-12 gap-x-8 gap-y-12">

<div className="col-span-12 lg:col-span-6">
<div className="relative">

<div className="mb-4">
<p className="text-[11px] leading-5 tracking-[0.18em] uppercase text-[#bac4b8]">Adrian Nova</p>
</div>
<div aria-label="Horizontal hero slides" className="flex overflow-x-auto snap-x snap-mandatory gap-8" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="snap-start shrink-0 min-w-[92vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[52vw] xl:min-w-[48vw]">
<div className="leading-none text-[#bac4b8]">
<h1 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      FULL‑STACK
                    </h1>
<h1 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] -mt-4 tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      DEVELOPER
                    </h1>
</div>
</div>

<div className="snap-start shrink-0 min-w-[92vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[52vw] xl:min-w-[48vw]">
<div className="leading-none text-[#bac4b8]">
<h2 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      MOTION &amp;
                    </h2>
<h2 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] -mt-4 tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      INTERACTION
                    </h2>
</div>
</div>

<div className="snap-start shrink-0 min-w-[92vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[52vw] xl:min-w-[48vw]">
<div className="leading-none text-[#bac4b8]">
<h2 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      PRODUCT
                    </h2>
<h2 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] -mt-4 tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      PLATFORMS
                    </h2>
</div>
</div>

<div className="snap-start shrink-0 min-w-[92vw] sm:min-w-[75vw] md:min-w-[60vw] lg:min-w-[52vw] xl:min-w-[48vw]">
<div className="leading-none text-[#bac4b8]">
<h2 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      HANDS‑ON
                    </h2>
<h2 className="text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[9.8vw] xl:text-[8.8vw] -mt-4 tracking-tight" style={{fontFamily: 'Impact, \'Arial Black\', sans-serif', fontWeight: '900', letterSpacing: '-0.04em', transform: 'scaleX(0.68)', transformOrigin: 'left center'}}>
                      BUILDER
                    </h2>
</div>
</div>
</div>
<div className="mt-6 max-w-md">
<p className="text-[11px] leading-5 tracking-[0.18em] uppercase text-[#bac4b8]/80">
                  Full‑stack developer &amp; builder delivering motion‑rich web experiences end‑to‑end — interfaces, performant APIs, and reliable infra.
                </p>
</div>
<div className="mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]/60">
<svg className="lucide lucide-arrow-left-right h-4 w-4" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
                Swipe horizontally
              </div>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
<a className="group inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#work">
                  Work <svg className="lucide lucide-arrow-right h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#services">
                  Services <svg className="lucide lucide-arrow-right h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center gap-2 text:[11px] text-[11px] tracking-[0.18em] uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#clients">
                  Clients <svg className="lucide lucide-arrow-right h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#contact">
                  Contact <svg className="lucide lucide-arrow-right h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-12">
<p className="text:[10px] text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]/60">Full‑Stack — Available Apr. 2025</p>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-6">
<div className="group relative overflow-hidden border border-neutral-900">
<img alt="Portrait of male developer Adrian Nova" className="w-full h-[420px] sm:h-[520px] object-cover object-center grayscale group-hover:grayscale-0 transition" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bg-gradient-to-t from-black/60 to-transparent top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="block h-2 w-2 rounded-full bg-emerald-400"></span>
<p className="text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]">Adrian Nova — Full‑Stack Developer</p>
</div>
<p className="text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]/70">Remote — Worldwide</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative snap-start" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="flex items-end justify-between mb-10">
<h2 className="text-4xl sm:text-5xl tracking-tight text-[#bac4b8]" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Selected Work</h2>
<p className="text-[11px] tracking-[0.2em] uppercase text-[#bac4b8]/60">06 CASES</p>
</div>
<div className="divide-y divide-neutral-900 border-y border-neutral-900">

<a className="group grid grid-cols-12 gap-x-6 py-6 items-center" href="#">
<div className="col-span-6 md:col-span-6">
<p className="text-xl tracking-tight text-[#bac4b8] group-hover:text-[#d8e0d6] transition" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Headless Commerce Experience</p>
<p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[#bac4b8]/60">Full‑Stack / Payments</p>
</div>
<div className="col-span-4 md:col-span-4">
<p className="text-sm uppercase text-[#bac4b8]">Ecommerce</p>
</div>
<div className="col-span-2 md:col-span-2 flex items-center justify-end gap-2">
<p className="text-sm uppercase text-[#bac4b8]/70">2025</p>
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="group grid grid-cols-12 gap-x-6 py-6 items-center" href="#">
<div className="col-span-6 md:col-span-6">
<p className="text-xl tracking-tight text-[#bac4b8] group-hover:text-[#d8e0d6] transition" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Interactive Streaming Microsite</p>
<p className="mt-1 text:[11px] text-[11px] tracking-[0.2em] uppercase text-[#bac4b8]/60">SSR / Edge / Media</p>
</div>
<div className="col-span-4 md:col-span-4">
<p className="text-sm uppercase text-[#bac4b8]">Entertainment</p>
</div>
<div className="col-span-2 md:col-span-2 flex items-center justify-end gap-2">
<p className="text-sm uppercase text-[#bac4b8]/70">2024</p>
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="group grid grid-cols-12 gap-x-6 py-6 items-center" href="#">
<div className="col-span-6 md:col-span-6">
<p className="text-xl tracking-tight text-[#bac4b8] group-hover:text-[#d8e0d6] transition" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Realtime Brand Dashboard</p>
<p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[#bac4b8]/60">WebSocket / Caching</p>
</div>
<div className="col-span-4 md:col-span-4">
<p className="text-sm uppercase text-[#bac4b8]">Analytics</p>
</div>
<div className="col-span-2 md:col-span-2 flex items-center justify-end gap-2">
<p className="text-sm uppercase text-[#bac4b8]/70">2024</p>
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="group grid grid-cols-12 gap-x-6 py-6 items-center" href="#">
<div className="col-span-6 md:col-span-6">
<p className="text-xl tracking-tight text-[#bac4b8] group-hover:text-[#d8e0d6] transition" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Wellness Platform MVP</p>
<p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[#bac4b8]/60">API / Auth</p>
</div>
<div className="col-span-4 md:col-span-4">
<p className="text-sm uppercase text-[#bac4b8]">Product</p>
</div>
<div className="col-span-2 md:col-span-2 flex items-center justify-end gap-2">
<p className="text-sm uppercase text-[#bac4b8]/70">2023</p>
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="group grid grid-cols-12 gap-x-6 py-6 items-center" href="#">
<div className="col-span-6 md:col-span-6">
<p className="text-xl tracking-tight text-[#bac4b8] group-hover:text-[#d8e0d6] transition" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Product Launch Platform</p>
<p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[#bac4b8]/60">CMS / CDN</p>
</div>
<div className="col-span-4 md:col-span-4">
<p className="text-sm uppercase text-[#bac4b8]">Brand</p>
</div>
<div className="col-span-2 md:col-span-2 flex items-center justify-end gap-2">
<p className="text-sm uppercase text-[#bac4b8]/70">2023</p>
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="group grid grid-cols-12 gap-x-6 py-6 items-center" href="#">
<div className="col-span-6 md:col-span-6">
<p className="text-xl tracking-tight text-[#bac4b8] group-hover:text-[#d8e0d6] transition" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Data‑Driven Editorial Platform</p>
<p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[#bac4b8]/60">Data Viz / SSR</p>
</div>
<div className="col-span-4 md:col-span-4">
<p className="text-sm uppercase text-[#bac4b8]">Publishing</p>
</div>
<div className="col-span-2 md:col-span-2 flex items-center justify-end gap-2">
<p className="text-sm uppercase text-[#bac4b8]/70">2022</p>
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
</div>
</div>
</section>

<section className="relative snap-start" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-12 gap-x-8 gap-y-12">
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight text-[#bac4b8]" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Capabilities</h3>
<p className="mt-4 text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70 max-w-xs">From quick prototypes to production builds across frontend, backend, and ops.</p>
</div>
<div className="col-span-12 md:col-span-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="space-y-3">
<p className="text-sm uppercase text-[#bac4b8]">Frontend Engineering</p>
<ul className="space-y-2">
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Design systems</li>
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Component patterns</li>
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Accessibility</li>
</ul>
</div>
<div className="space-y-3">
<p className="text-sm uppercase text-[#bac4b8]">Backend &amp; APIs</p>
<ul className="space-y-2">
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">REST / GraphQL</li>
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Auth &amp; security</li>
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Databases &amp; caching</li>
</ul>
</div>
<div className="space-y-3">
<p className="text-sm uppercase text-[#bac4b8]">Platform &amp; Ops</p>
<ul className="space-y-2">
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">CI/CD &amp; testing</li>
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Performance</li>
<li className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Observability</li>
</ul>
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative overflow-hidden">
<div className="absolute inset-x-0 bottom-0 p-4">
<p className="text-xs tracking-[0.25em] uppercase text-[#bac4b8]">Minimal</p>
</div><img alt="Minimal Mountain" className="group-hover:grayscale-0 transition w-full h-44 object-cover grayscale" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&amp;q=80" style={{}}/>
</div>
<div className="group relative overflow-hidden">
<img alt="Render Desk" className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4">
<p className="text-xs tracking-[0.25em] uppercase text-[#bac4b8]">Studio</p>
</div>
</div>
<div className="group relative overflow-hidden">
<img alt="Interface" className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4">
<p className="text-xs tracking-[0.25em] uppercase text-[#bac4b8]">Interface</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative snap-start" id="clients">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-12 gap-x-8">
<div className="col-span-12 md:col-span-4">
<h3 className="text-3xl tracking-tight text-[#bac4b8] mb-6" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Clients</h3>
<ul className="space-y-2">
<li className="text-sm uppercase text-[#bac4b8]">Google</li>
<li className="text-sm uppercase text-[#bac4b8]">Instagram</li>
<li className="text-sm uppercase text-[#bac4b8]">Netflix</li>
<li className="text-sm uppercase text-[#bac4b8]">Twitch</li>
<li className="text-sm uppercase text-[#bac4b8]">Rappi</li>
<li className="text-sm uppercase text-[#bac4b8]">Fuseproject</li>
<li className="text-sm uppercase text-[#bac4b8]">Jacques Marie Mage</li>
</ul>
</div>
<div className="col-span-12 md:col-span-4 mt-12 md:mt-0">
<h3 className="text-3xl tracking-tight text-[#bac4b8] mb-6" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Engineering Honors</h3>
<ul className="space-y-2">
<li className="text-sm uppercase text-[#bac4b8]">3 — Open Source Projects Maintained</li>
<li className="text-sm uppercase text-[#bac4b8]">5 — Conference Talks</li>
<li className="text-sm uppercase text-[#bac4b8]">12 — GitHub Trending Repos</li>
<li className="text-sm uppercase text-[#bac4b8]">8 — Technical Articles Published</li>
<li className="text-sm uppercase text-[#bac4b8]">2 — Patent Filings</li>
<li className="text-sm uppercase text-[#bac4b8]">15 — Community Mentorships</li>
</ul>
</div>
<div className="col-span-12 md:col-span-4 mt-12 md:mt-0">
<h3 className="text-3xl tracking-tight text-[#bac4b8] mb-6" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Community Recognition</h3>
<ul className="space-y-2">
<li className="text-sm uppercase text-[#bac4b8]">4 — Hackathon Wins</li>
<li className="text-sm uppercase text-[#bac4b8]">6 — Meetups Organized</li>
<li className="text-sm uppercase text-[#bac4b8]">1 — Engineering Podcast Guest</li>
<li className="text-sm uppercase text-[#bac4b8]">22 — Stack Overflow Answers</li>
<li className="text-sm uppercase text-[#bac4b8]">3 — Open Source Grants</li>
</ul>
</div>
</div>
<div className="mt-16 flex items-center justify-between">
<p className="text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]/60">Built in‑house — References on request</p>
<a className="group inline-flex items-center gap-2" href="#contact">
<span className="text-[11px] tracking-[0.2em] uppercase text-[#bac4b8] group-hover:text-[#d8e0d6] transition">Start a project</span>
<svg className="lucide lucide-send h-4 w-4 text-[#bac4b8]/60 group-hover:text-[#bac4b8] transition" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative snap-start" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-12 gap-x-8 gap-y-12 items-start">
<div className="col-span-12 md:col-span-6">
<h3 className="text-4xl tracking-tight text-[#bac4b8] mb-6" style={{fontFamily: '\'Bebas Neue\', Inter, sans-serif'}}>Let's Build</h3>
<p className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70 max-w-md">Share goals, references and timing. Replies within 48 hours.</p>
<div className="mt-10 space-y-4">
<a className="group inline-flex items-center gap-3 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="mailto:hello@example.com">
<svg className="lucide lucide-mail h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@example.com
              </a>
<a className="group inline-flex items-center gap-3 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#">
<svg className="lucide lucide-twitter h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                Twitter
              </a>
<a className="group inline-flex items-center gap-3 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#">
<svg className="lucide lucide-linkedin h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                Linkedin
              </a>
<a className="group inline-flex items-center gap-3 text-sm uppercase text-[#bac4b8] hover:text-[#d8e0d6] transition" href="#">
<svg className="lucide lucide-github h-5 w-5 text-[#bac4b8]/60 group-hover:text-[#bac4b8]" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                Github
              </a>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<div className="group relative overflow-hidden border border-neutral-900">
<img alt="Minimal Portrait" className="w-full h-[360px] object-cover object-top grayscale group-hover:grayscale-0 transition" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9cc23948-cfe5-4f3d-9621-720fba8e3408_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<p className="text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]">Full‑Stack Developer</p>
<p className="text-[10px]tracking-[0.25em] uppercase text-[#bac4b8]/70">Available Q1–Q2 2025</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="block h-2 w-2 rounded-full bg-[#bac4b8]/80"></span>
<p className="text-[11px] tracking-[0.18em] uppercase text-[#bac4b8]/70">Adrian Nova — Full‑Stack Developer</p>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
<p className="text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]/60">Remote — Worldwide</p>
<p className="text-[10px] tracking-[0.25em] uppercase text-[#bac4b8]/60">All Rights Reserved © 2025</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
