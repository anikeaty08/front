import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function() {
      const menuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerIcon = document.getElementById('hamburger-icon');
      const closeIcon = document.getElementById('close-icon');
      if (menuButton && mobileMenu && hamburgerIcon && closeIcon) {
        menuButton.addEventListener('click', function() {
          const isMenuOpen = !mobileMenu.classList.contains('hidden');
          if (isMenuOpen) {
            mobileMenu.classList.add('hidden'); hamburgerIcon.classList.remove('hidden'); closeIcon.classList.add('hidden');
          } else {
            mobileMenu.classList.remove('hidden'); hamburgerIcon.classList.add('hidden'); closeIcon.classList.remove('hidden');
          }
        });
        document.addEventListener('click', function(event) {
          if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden'); hamburgerIcon.classList.remove('hidden'); closeIcon.classList.add('hidden');
          }
        });
        window.addEventListener('resize', function() {
          if (window.innerWidth >= 768) {
            mobileMenu.classList.add('hidden'); hamburgerIcon.classList.remove('hidden'); closeIcon.classList.add('hidden');
          }
        });
      }
    })();
  


  // Replace Lucide placeholders
  document.addEventListener('DOMContentLoaded', function() {
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }
  });

  // Year
  (function() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  })();

  // Scroll-in animations
  (function() {
    const items = document.querySelectorAll('[data-animate]');
    if (!('IntersectionObserver' in window) || items.length === 0) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.remove('opacity-0','translate-y-8','blur-md');
          el.classList.add('opacity-100','translate-y-0','blur-0');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
  })();

  // Demo modal open/close
  (function() {
    const modal = document.getElementById('demo-modal');
    const closeBtn = document.getElementById('demo-close');
    const openers = Array.from(document.querySelectorAll('a[href="#demo"], [data-open-demo]'));

    function openModal(e) {
      if (e) e.preventDefault();
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closeModal() {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      // Pause the video by resetting src
      const iframe = modal.querySelector('iframe');
      if (iframe) {
        const src = iframe.getAttribute('src');
        iframe.setAttribute('src', src);
      }
    }

    openers.forEach(btn => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('bg-black/60')) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('hidden') && e.key === 'Escape') closeModal();
      });
    }
  })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>
</div>
<header className="relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-8 pb-8 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
<svg className="lucide lucide-diamond w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="diamond" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<span className="text-[17px] uppercase font-semibold tracking-tighter font-geist">LevelUP</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors font-geist" href="#features">Features</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#how">How It Works</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#pricing">Pricing</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#faq">FAQ</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors xl:bg-blue-700 font-medium text-white font-geist bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">
          Start Free
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>

<button aria-label="Toggle menu" className="md:hidden inline-flex hover:bg-neutral-100 transition-colors bg-neutral-50 w-10 h-10 rounded-full items-center justify-center" id="mobile-menu-button">
<svg className="text-neutral-900" fill="none" height="20" id="hamburger-icon" stroke="currentColor" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
<svg className="text-neutral-900 hidden" fill="none" height="20" id="close-icon" stroke="currentColor" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="M6 6l12 12"></path>
</svg>
</button>
</div>

<div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-50 hidden" id="mobile-menu">
<nav className="pt-6 pr-6 pb-6 pl-6 space-y-4">
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="#features">Features</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="#how">How It Works</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="#pricing">Pricing</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="#faq">FAQ</a>
<div className="pt-4 border-t border-neutral-200">
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors justify-center font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-4 pb-3 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">
            Start Free
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>
</div>
</div>

</header>
<main className="">

<section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

<div className="max-w-xl">

<div className="flex gap-3 mb-6 items-center transition-all duration-700 ease-out opacity-100 translate-y-0 blur-0" data-animate="">
<div className="flex -space-x-2">
<img alt="Student 1" className="ring-2 ring-white w-7 h-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<img alt="Student 2" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<img alt="Student 3" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-neutral-600 font-geist">
<span className="font-medium text-neutral-900 font-geist">200,000+</span> learners leveling up money skills
          </p>
</div>

<h1 className="sm:text-5xl lg:text-[64px] leading-[1.05] text-4xl font-medium tracking-tighter font-geist mb-6 transition-all duration-700 ease-out delay-150 opacity-100 translate-y-0 blur-0" data-animate="">
          Turn money skills into a daily streak
        </h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-600 font-geist mb-8 transition-all duration-700 ease-out delay-300 opacity-100 translate-y-0 blur-0" data-animate="">
          Bite-sized lessons, levels, and leaderboards. Master budgeting, investing, and credit—without the boring.
        </p>

<div className="flex items-center gap-5 mb-12 transition-all duration-700 ease-out delay-[450ms] opacity-100 translate-y-0 blur-0" data-animate="">
<a className="group inline-flex items-center hover:bg-neutral-800 transition-colors xl:bg-blue-700 font-medium text-white bg-neutral-900 rounded-full pt-3 pr-3 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">
<span className="font-geist">Start Free</span>
<span className="ml-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</span>
</a>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-80 font-geist" href="#demo">
            Watch 60s demo
            <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>

<div className="transition-all duration-700 ease-out delay-[600ms] opacity-100 translate-y-0 blur-0" data-animate="">
<p className="text-sm text-neutral-500 font-geist mb-4">Trusted by campuses and creators</p>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden ring-1 ring-black/10 bg-neutral-50 rounded-[28px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<style>
            @keyframes marquee-vertical-hero {
              from { transform: translateY(0); }
              to { transform: translateY(-50%); }
            }
            .animate-marquee-vertical-hero { animation: marquee-vertical-hero 40s linear infinite; }
          </style>
<div className="relative sm:h-[760px] h-[600px] overflow-hidden">
<img alt="App preview background" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1758611974917-f7f7a58b74b0?w=1600&amp;q=80"/>

<div className="absolute top-4 right-4 flex gap-2 z-20 items-center">
<span className="sm:px-4 sm:text-sm ring-white/10 ring-1 text-xs text-white font-geist bg-black/60 rounded-full pt-2 pr-3 pb-2 pl-3 backdrop-blur-md">Budget</span>
<span className="sm:px-4 ring-1 ring-white/10 sm:text-sm text-xs text-white font-geist bg-black/60 rounded-full pt-2 pr-3 pb-2 pl-3 backdrop-blur-md">Invest</span>
<span className="px-3 sm:px-4 py-2 rounded-full bg-black/75 backdrop-blur-md ring-1 ring-white/15 text-xs sm:text-sm text-white font-medium hover:bg-black/85 transition font-geist">Credit</span>
</div>

<div className="absolute inset-0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<div className="animate-marquee-vertical-hero">

<div className="sm:h-[760px] w-full h-[600px] relative">

<div className="absolute left-4 sm:left-6 top-20 sm:top-64 max-w-[260px] sm:max-w-xs">
<div className="flex gap-3 sm:px-5 sm:py-4 ring-white/10 ring-1 bg-black/70 rounded-3xl pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-start">
<img alt="Student headshot" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<p className="text-[13px] sm:text-sm leading-snug text-white/90 font-geist">“I finally stuck to a budget—30-day streak!”</p>
</div>
</div>

<div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2">
<a className="flex gap-3 bg-black/70 ring-white/10 ring-1 rounded-full pt-2 pr-2 pb-2 pl-4 shadow backdrop-blur-md items-center" href="#demo">
<span className="text-[13px] sm:text-sm text-white/90 font-geist">Watch 60s demo</span>
<span aria-label="Play video" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</a>
</div>

<div className="absolute left-4 sm:left-6 bottom-6">
<div className="px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/10 text-[12px] sm:text-xs text-white/90 shadow-sm font-geist">
                      Streaks, levels, and real progress
                    </div>
</div>

<div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-32 w-[230px] sm:w-[260px]">
<div className="bg-black/70 ring-white/10 ring-1 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow backdrop-blur-md">
<p className="font-medium text-white mb-1 tracking-tight font-geist">Leaderboard</p>
<p className="text-[13px] text-white/80 leading-snug mb-3 font-geist">Compete with friends and campus clubs. Keep your streak alive.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Avatar 1" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="Avatar 2" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="Avatar 3" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="Avatar 4" className="h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-1 text-white/80">
<svg className="lucide lucide-trophy h-4 w-4" data-lucide="trophy" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-sm font-medium font-geist">Top 1%</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full sm:h-[760px] h-[600px]">

<div className="absolute left-4 sm:left-6 top-20 sm:top-24 max-w-[260px] sm:max-w-xs">
<div className="flex gap-3 sm:px-5 sm:py-4 bg-black/70 ring-white/10 ring-1 rounded-3xl pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-start">
<img alt="Student headshot" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<p className="text-[13px] sm:text-sm text-white/90 leading-snug font-geist">“Investing finally makes sense.”</p>
</div>
</div>

<div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2">
<a className="flex gap-3 ring-white/10 ring-1 bg-black/70 rounded-full pt-2 pr-2 pb-2 pl-4 shadow-sm backdrop-blur-md items-center" href="#demo">
<span className="text-[13px] sm:text-sm text-white/90 font-geist">Watch 60s demo</span>
<span aria-label="Play video" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</a>
</div>

<div className="absolute left-4 sm:left-6 bottom-6">
<div className="px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/10 text-[12px] sm:text-xs text-white/90 shadow-sm font-geist">
                      Learn by doing—no risk
                    </div>
</div>

<div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-[230px] sm:w-[260px]">
<div className="ring-1 ring-white/10 bg-black/70 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-sm backdrop-blur-md">
<p className="font-medium text-white mb-1 tracking-tight font-geist">Invest Quest</p>
<p className="text-[13px] text-white/80 leading-snug mb-3 font-geist">Simulate portfolios, understand risk, and build confidence.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-line-chart h-4 w-4" data-lucide="line-chart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-sm font-medium font-geist">+12 lessons</span>
</div>
<span className="inline-flex items-center gap-1 text-xs rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/10 font-geist">New</span>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 sm:py-8 relative bg-white max-w-7xl border-black/5 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-12 pr-6 pb-12 pl-6" id="problem">
<div className="max-w-3xl mx-auto text-center transition-all duration-700 ease-out opacity-100 translate-y-0 blur-0" data-animate="">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl font-medium text-neutral-900 tracking-tighter font-geist">Traditional finance education doesn’t stick</h2>
<p className="sm:text-lg text-base text-neutral-600 mt-4 font-geist">89% of students want better financial education—but most tools feel like homework. We make learning fast, fun, and habit-forming.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist bg-neutral-100 ring-1 ring-black/10 h-11 rounded-full pr-4 pl-4">
<svg className="lucide lucide-flame h-4 w-4" data-lucide="flame" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
          Pain score: 8/10
        </span>
<span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist bg-neutral-100 ring-1 ring-black/10 h-11 rounded-full pr-4 pl-4">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          45M young adults need this
        </span>
</div>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden opacity-100 translate-y-0 blur-0" data-animate="">
<div className="bg-black rounded-2xl mx-4 mt-4 overflow-hidden">
<img alt="Boring lectures" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Boring, one-size-fits-all</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist">Content isn’t built for Gen Z attention spans—so it gets ignored.</p>
</div>
</article>
<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden opacity-100 translate-y-0 blur-0" data-animate="">
<div className="bg-black rounded-2xl mx-4 mt-4 overflow-hidden">
<img alt="No feedback" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1635959952534-d99f969554a6?w=800&amp;q=80"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">No streaks, no rewards</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist">Without feedback loops, habits don’t form—and progress stalls.</p>
</div>
</article>
<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden opacity-100 translate-y-0 blur-0" data-animate="">
<div className="bg-black rounded-2xl mx-4 mt-4 overflow-hidden">
<img alt="Costly mistakes" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&amp;q=80"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Costly trial-and-error</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist">Overdrafts, fees, and debt are expensive ways to “learn.”</p>
</div>
</article>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-100 translate-y-0 blur-0" data-animate="">
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">89%</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">students want better financial ed</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">45M</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">young adults to reach</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">25.3%</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">market CAGR in finance apps</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">21.4M+</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">members in r/personalfinance</p>
</div>
</div>
</section>

<section className="sm:px-8 mt-20 mb-20" id="how">
<div className="sm:py-28 max-w-7xl mr-auto ml-auto pt-20 pb-20">
<div className="sm:p-8 sm:py-8 bg-neutral-100/50 border-neutral-200/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6">

<div className="text-center transition-all duration-700 ease-out opacity-100 translate-y-0 blur-0" data-animate="">
<span className="inline-flex items-center ring-1 ring-neutral-200 text-sm font-medium text-neutral-600 font-geist bg-white rounded-full pt-1 pr-3 pb-1 pl-3">Solution Overview</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-normal text-neutral-900 tracking-tighter font-geist mt-4">Finance learning that feels like a game</h2>
<p className="text-neutral-600 max-w-2xl mx-auto mt-3 font-geist">Daily quests, streaks, and levels make budgeting, investing, and credit skills stick—for life.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-10 items-start">

<div className="lg:col-span-5 transition-all duration-700 ease-out delay-150 opacity-100 translate-y-0 blur-0" data-animate="">
<div className="bg-white rounded-[28px] ring-1 ring-black/5 overflow-hidden shadow-lg">
<div className="bg-blue-600 p-6 sm:p-8">
<p className="text-white/90 text-sm font-geist">Value Proposition</p>
<p className="mt-2 text-white text-5xl sm:text-6xl font-semibold tracking-tight font-geist">Learn. Play. Win.</p>
<p className="mt-2 text-white/80 text-sm font-geist">Levels, leaderboards, and rewards—built for students.</p>
</div>
<div className="p-5 sm:p-6">
<div className="sm:p-5 bg-neutral-100/50 ring-black/5 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<h3 className="text-neutral-900 font-semibold tracking-tight font-geist">What you get</h3>
<p className="text-neutral-700 text-sm mt-2 font-geist">Bite-sized modules, simulations, and goal trackers that turn money skills into a habit you can’t put down.</p>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-sparkles text-blue-600 mt-0.5 flex-shrink-0 h-4 w-4" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                      Streaks, XP, and unlockable challenges
                    </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-shield-check text-blue-600 mt-0.5 flex-shrink-0 h-4 w-4" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Risk-free investing simulations
                    </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-goal text-blue-600 mt-0.5 flex-shrink-0 h-4 w-4" data-lucide="goal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 13V2l8 4-8 4"></path><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></path><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></path></svg>
                      Real-world goals and progress bars
                    </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<svg className="lucide lucide-users text-blue-600 mt-0.5 flex-shrink-0 h-4 w-4" data-lucide="users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      Study groups and campus leaderboards
                    </li>
</ul>
</div>
</div>
<div className="pr-5 pb-5 pl-5">
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition xl:bg-blue-700 text-sm font-medium text-white font-geist bg-neutral-900 w-full h-12 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">
                  Start Free
                  <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="lg:col-span-1 flex items-center justify-center transition-all duration-700 ease-out delay-300 opacity-100 translate-y-0 blur-0" data-animate="">
<div className="h-full w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent min-h-96 hidden lg:block"></div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent lg:hidden"></div>
</div>

<div className="lg:col-span-6 space-y-4">
<div className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between transition-all duration-700 ease-out delay-[450ms] opacity-100 translate-y-0 blur-0" data-animate="">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Step 1: Pick your track</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Budget, Invest, or Credit. Start where you need help most.</p>
</div>
<svg className="lucide lucide-target text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="target" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="flex items-center px-5 transition-all duration-700 ease-out delay-[500ms] opacity-100 translate-y-0 blur-0" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>
<div className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between transition-all duration-700 ease-out delay-[550ms] opacity-100 translate-y-0 blur-0" data-animate="">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Step 2: Complete daily quests</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">5–7 minute lessons, streaks, and XP. Stay motivated every day.</p>
</div>
<svg className="lucide lucide-calendar-check text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="calendar-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div className="flex items-center px-5 transition-all duration-700 ease-out delay-[600ms] opacity-100 translate-y-0 blur-0" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>
<div className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between transition-all duration-700 ease-out delay-[650ms] opacity-100 translate-y-0 blur-0" data-animate="">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist">Step 3: Level up and win</p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Unlock advanced modules, compete on leaderboards, and track real goals.</p>
</div>
<svg className="lucide lucide-medal text-neutral-400 h-6 w-6 flex-shrink-0" data-lucide="medal" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 bg-neutral-950 max-w-7xl rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" id="features" style={{position: 'relative', overflow: 'hidden'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-zinc-300 font-geist">Feature Highlights</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-geist font-medium tracking-tighter">Everything you need to win with money.</h2>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-black/5 via-black/10 to-black/5"></div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<p className="text-sm text-zinc-100 font-medium tracking-tight font-geist">Built for streaks and habits</p>
<p className="mt-1 text-sm text-zinc-300 font-geist">Game mechanics keep you motivated: XP, levels, leaderboards, and rewards.</p>
<a className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist" href="#download">
                Start Free
                <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</a>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-200 leading-relaxed sm:text-right sm:pl-8 font-geist">
                Choose your path: Budget Boss, Invest Quest, Credit Climb, or Goal Tracker—then watch your streak grow.
              </p>
</div>
</div>
</div>
</div>

<div className="relative h-[520px] overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<style>
          @keyframes marquee-vertical-features { from { transform: translateY(0); } to { transform: translateY(-50%); } }
          .animate-marquee-vertical-features { animation: marquee-vertical-features 40s linear infinite; }
        </style>
<div className="animate-marquee-vertical-features">
<div className="grid grid-cols-2 gap-4 mb-4">

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-wallet h-3.5 w-3.5" data-lucide="wallet" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Budget Boss</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Smart envelopes &amp; auto-quests</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&amp;w=1200&amp;auto=format&amp;fit=crop)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-line-chart h-3.5 w-3.5" data-lucide="line-chart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Invest Quest</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Simulations that teach risk</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border-black/30 border rounded-2xl">
<div className="bg-[url(https://images.unsplash.com/photo-1635236190542-d43e4d4b9e4b?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-credit-card h-3.5 w-3.5" data-lucide="credit-card" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line className="" x1="2" x2="22" y1="10" y2="10"></line></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Credit Climb</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Alerts, tips, and milestones</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-goal h-3.5 w-3.5" data-lucide="goal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 13V2l8 4-8 4"></path><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></path><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Goal Tracker</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Trips, rent, emergency fund</p>
</div>
</article>
</div>
<div className="grid grid-cols-2 gap-4">

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Study Groups</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Team up with friends</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-black/30 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1200&amp;auto=format&amp;fit=crop)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-black/20">
<svg className="lucide lucide-gift h-3.5 w-3.5" data-lucide="gift" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-black/30 font-geist">Real Rewards</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Perks and partner offers</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 lg:py-24 sm:px-8 mt-20 mb-20 pt-20 pr-6 pb-20 pl-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 font-geist">Start free. Level up when you’re ready.</h2>
<p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto font-geist">
        Try the core experience at no cost. Unlock advanced modules, simulations, and groups on paid plans. Cancel anytime.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] transition-all duration-700 ease-out">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-6 h-6 text-blue-600" data-lucide="sparkles" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<h3 className="text-xl font-medium text-neutral-900 font-geist">Free</h3>
<p className="text-sm text-neutral-500 font-geist">Get started</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">$0</span>
<span className="text-neutral-500 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-neutral-600 font-geist">Core lessons, daily streaks, and basic quests.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Budget basics track
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Streaks and XP
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Limited challenges
          </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">Start Free</a>
</div>

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] transition-all duration-700 ease-out delay-150">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
<svg className="lucide lucide-plus w-6 h-6 text-green-600" data-lucide="plus" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-neutral-900 font-geist">Plus Trial</h3>
<p className="text-sm text-neutral-500 font-geist">Best to try everything</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">$4.99</span>
<span className="text-neutral-500 text-sm font-geist">first month</span>
</div>
<p className="text-sm text-neutral-600 font-geist">Then $9.99/mo. Advanced modules and leaderboards.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Everything in Free
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Invest Quest + Credit Climb
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Campus leaderboards
          </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">Try Plus</a>
</div>

<div className="relative bg-blue-700 rounded-[32px] pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] transition-all duration-700 ease-out delay-300">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<div className="text-xs font-medium text-blue-700 font-geist bg-white border-black/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            Most Popular
          </div>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
<svg className="lucide lucide-crown w-6 h-6 text-blue-700" data-lucide="crown" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white font-geist">Premium</h3>
<p className="text-sm text-blue-200 font-geist">For serious streaks</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-white font-geist">$14.99</span>
<span className="text-blue-200 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-blue-100 font-geist">Everything in Plus, plus Study Groups, Goal Tracker Pro, and insights.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="lucide lucide-check text-blue-200 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Study Groups &amp; campus clubs
          </li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="lucide lucide-check text-blue-200 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Pro goal tracking and reporting
          </li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<svg className="lucide lucide-check text-blue-200 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Priority support
          </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-white/90 transition-colors font-medium text-blue-700 font-geist bg-white w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">Go Premium</a>
</div>

<div className="relative hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] ring-neutral-200 ring-1 bg-white rounded-[32px] pt-8 pr-8 pb-8 pl-8 transition-all duration-700 ease-out delay-[450ms]">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
<svg className="lucide lucide-building-2 w-6 h-6 text-amber-600" data-lucide="building-2" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-neutral-900 font-geist">Campus License</h3>
<p className="text-sm text-neutral-500 font-geist">Institutions</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">Custom</span>
<span className="text-neutral-500 text-sm font-geist">/yr</span>
</div>
<p className="text-sm text-neutral-600 font-geist">Unlimited seats, LMS integration, and tailored curriculum.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Admin analytics &amp; reporting
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Workshops &amp; onboarding
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<svg className="lucide lucide-check text-green-600 flex-shrink-0" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Compliance-ready content
          </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#download">Talk to Sales</a>
</div>
</div>
<div className="text-center mt-12">
<p className="text-neutral-600 mb-6 font-geist">30-day money-back guarantee on Premium. Cancel anytime.</p>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-80 transition-opacity font-geist" href="#faq">
        See FAQs
        <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</section>

<section className="bg-white mt-10" id="social-proof">
<div className="relative overflow-hidden mt-40 mb-20">
<div className="relative z-10 lg:px-8 sm:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-6">
<div className="sm:p-8 bg-neutral-50 ring-neutral-200 ring-1 rounded-[32px] pt-6 pr-6 pb-6 pl-6 shadow-lg" id="download">
<div className="flex items-center justify-between mb-6">
<div className="">
<p className="text-sm text-neutral-500 font-geist">Get the app</p>
<h3 className="mt-2 text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 font-geist">Your money game starts today</h3>
<p className="text-neutral-600 mt-2 font-geist">Join free in 60 seconds. No credit card required.</p>
</div>
</div>
<form action="#" className="space-y-5" method="POST">
<div className="">
<label className="block text-sm text-neutral-700 mb-2 font-geist" htmlFor="ct-email">Email address<span className="text-neutral-400"> *</span></label>
<div className="relative">
<svg className="lucide lucide-mail h-5 w-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-12 pr-4 py-3 text-base rounded-2xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-email" name="email" placeholder="your.email@school.edu" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm text-neutral-700 mb-2 font-geist" htmlFor="ct-campus">Campus (optional)</label>
<input className="w-full pl-4 pr-4 py-3 text-base rounded-2xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-campus" name="campus" placeholder="University / College" type="text"/>
</div>
<button className="inline-flex hover:bg-neutral-800 transition-colors xl:bg-blue-700 text-base font-medium text-white font-geist bg-neutral-900 w-full rounded-2xl pt-4 pr-6 pb-4 pl-6 items-center justify-center" type="submit">
                  Get Download Link
                  <svg className="lucide lucide-send h-5 w-5 ml-2" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<div className="grid grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-black text-white hover:bg-black/90 transition font-geist" href="#">
<svg className="h-4 w-4" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M17.564 23.5c-1.52               0-2 2.316-3.471 2.316zm-3.29-18.9c-.9.12-1.83-.47-2.41-1.16-.64-.72-1.15-1.67-1.01-2.64.98-.06 2.04.55 2.66 1.24.62.68 1.1 1.64.76 2.56z"></path></svg>
<span className="text-sm font-medium">App Store</span>
</a>
<a className="inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-white text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-100 transition font-geist" href="#">
<svg className="h-4 w-4" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2l13 10L3 22V2zm14.5 6.5l3.5 2-3.5 2v-4zm0 7l3.5 2-3.5 2v-4z"></path>
</svg>
<span className="text-sm font-medium">Google Play</span>
</a>
</div>
<p className="text-xs text-neutral-500 text-center mt-3 font-geist">
                  By continuing, you agree to our
                  <a className="underline hover:no-underline" href="#privacy">Privacy Policy</a> and
                  <a className="underline hover:no-underline" href="#terms">Terms</a>.
                </p>
</form>
</div>
</div>

<div className="lg:col-span-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 font-geist">Loved by students and young pros</h3>
<div aria-label="Average rating 4.8 out of 5" className="hidden sm:flex items-center gap-1 text-amber-500">
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<span className="text-sm text-neutral-700 font-geist ml-1">4.8/5</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

<article className="bg-white ring-1 ring-neutral-200 rounded-3xl p-6 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Maya headshot" className="h-10 w-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="font-medium text-neutral-900 font-geist">Maya R.</p>
<p className="text-xs text-neutral-500 font-geist">Sophomore, CSU</p>
</div>
</div>
<blockquote className="mt-4 text-neutral-700 font-geist">“I fixed my budget in 2 weeks and kept a 30-day streak.”</blockquote>
<div aria-hidden="true" className="mt-4 flex items-center gap-1 text-amber-500">
<span className="sr-only">Rating: 5 out of 5</span>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4 opacity-70" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
</div>
</article>

<article className="bg-white ring-1 ring-neutral-200 rounded-3xl p-6 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Aaron headshot" className="h-10 w-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium text-neutral-900 font-geist">Aaron T.</p>
<p className="text-xs text-neutral-500 font-geist">Grad Student</p>
</div>
</div>
<blockquote className="mt-4 text-neutral-700 font-geist">“Finally clicked on credit scores. My score went +72 in 3 months.”</blockquote>
<div aria-hidden="true" className="mt-4 flex items-center gap-1 text-amber-500">
<span className="sr-only">Rating: 5 out of 5</span>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3l-6.16 3.7 1.64-6.98L2 8.9l7.04-.6L12 1.8l2.96 6.5 7.04.6-5.48 5.12 1.64 6.98z"></path></svg>
</div>
</article>

<article className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-6 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
<svg className="lucide lucide-graduation-cap h-4 w-4" data-lucide="graduation-cap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</span>
<div>
<p className="font-medium font-geist">Campus pilot</p>
<p className="text-sm text-white/80 font-geist">1,200+ students</p>
</div>
</div>
<p className="mt-4 text-sm leading-relaxed font-geist">Career center boosted engagement 3.2x with daily quests + leaderboards. Overdraft fees dropped within first month.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white font-geist" href="#pricing">
                  See plans
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>

<article className="bg-white ring-1 ring-neutral-200 rounded-3xl p-6 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Creator avatar" className="h-10 w-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium text-neutral-900 font-geist">@MoneyMornings</p>
<p className="text-xs text-neutral-500 font-geist">YouTube + TikTok</p>
</div>
</div>
<p className="mt-4 text-neutral-700 font-geist">“The only finance app I open every day. Feels like Duolingo for money.”</p>
<div className="mt-4 flex -space-x-2">
<img alt="Subscriber 1" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" loading="lazy" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="Subscriber 2" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="Subscriber 3" className="h-7 w-7 rounded-full ring-2 ring-white object-cover" loading="lazy" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</div>
</article>
</div>
<div className="mt-8 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist bg-neutral-100 ring-1 ring-black/10 h-10 rounded-full px-4">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Data stays private
              </span>
<span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist bg-neutral-100 ring-1 ring-black/10 h-10 rounded-full px-4">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                No ads. Ever.
              </span>
<span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist bg-neutral-100 ring-1 ring-black/10 h-10 rounded-full px-4">
<svg className="lucide lucide-refresh-ccw h-4 w-4" data-lucide="refresh-ccw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
                Cancel anytime
              </span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200 blur-[140px] opacity-30"></div>
<div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-amber-200 blur-[140px] opacity-30"></div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[60] hidden" id="demo-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto my-10 w-[92%] max-w-3xl rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
<div className="flex items-center justify-between px-4 py-3">
<p className="text-white font-geist">LevelUp Money — 60s demo</p>
<button aria-label="Close demo" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20" id="demo-close">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="aspect-video bg-black">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;modestbranding=1" title="LevelUp Money demo video"></iframe>
</div>
</div>
</div>

<section className="lg:px-8 sm:px-8 pt-10 pb-20" id="faq">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 text-center font-geist">Questions, answered</h2>
<p className="text-neutral-600 text-base sm:text-lg mt-3 text-center font-geist">Everything you need to know about trials, privacy, and plans.</p>
<div className="mt-8 space-y-3">
<details className="group bg-white ring-1 ring-neutral-200 rounded-2xl p-5 open:ring-neutral-300">
<summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900 font-geist">
            How does the free plan work?
            <span className="ml-3 text-neutral-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-700 mt-3 text-sm font-geist">Free includes core lessons, daily streaks, and basic quests. No credit card required, cancel anytime.</p>
</details>
<details className="group bg-white ring-1 ring-neutral-200 rounded-2xl p-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900 font-geist">
            Can I cancel or switch plans anytime?
            <span className="ml-3 text-neutral-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-700 mt-3 text-sm font-geist">Yes. Manage your plan in settings. No long-term contracts and no hidden fees.</p>
</details>
<details className="group bg-white ring-1 ring-neutral-200 rounded-2xl p-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900 font-geist">
            What about my data and privacy?
            <span className="ml-3 text-neutral-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-700 mt-3 text-sm font-geist">We never sell your data. We use encryption and follow strict security practices. You control what’s shared.</p>
</details>
<details className="group bg-white ring-1 ring-neutral-200 rounded-2xl p-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900 font-geist">
            Do you partner with campuses or clubs?
            <span className="ml-3 text-neutral-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-700 mt-3 text-sm font-geist">Yes. We offer campus licenses with LMS integration, plus verified club leaderboards and onboarding support.</p>
</details>
<details className="group bg-white ring-1 ring-neutral-200 rounded-2xl p-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900 font-geist">
            Do you earn from affiliate links or offers?
            <span className="ml-3 text-neutral-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-700 mt-3 text-sm font-geist">Sometimes. We clearly label partner offers and only include options we’d recommend to our own friends.</p>
</details>
<details className="group bg-white ring-1 ring-neutral-200 rounded-2xl p-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900 font-geist">
            Who is LevelUp Money for?
            <span className="ml-3 text-neutral-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-700 mt-3 text-sm font-geist">Students, grads, and young pros who want a simple, fun way to master budgeting, investing, and credit.</p>
</details>
<details className="group bg-white ring-1 ring-neutral-200 rounded-2xl p-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900 font-geist">
            What’s your refund policy?
            <span className="ml-3 text-neutral-500 group-open:rotate-180 transition-transform">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-700 mt-3 text-sm font-geist">Premium has a 30-day money-back guarantee. Just contact support and we’ll handle it quickly.</p>
</details>
</div>
</div>
</section>

<section className="sm:px-8">
<div className="max-w-7xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-16 -left-10 h-64 w-64 bg-blue-500/30 blur-[120px] rounded-full"></div>
<div className="absolute -bottom-16 -right-10 h-64 w-64 bg-amber-400/30 blur-[120px] rounded-full"></div>
</div>
<div className="relative px-6 py-14 sm:px-10 sm:py-20 text-center">
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-geist">Your money game starts today</h2>
<p className="mt-3 text-white/80 max-w-2xl mx-auto font-geist">Join free in 60 seconds. No credit card required. Cancel anytime.</p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-neutral-900 font-medium hover:bg-white/90 transition font-geist" href="#download">
            Start Free
            <svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</a>
<button className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/15 transition font-geist" data-open-demo="">
            Watch Demo
            <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">30-day money-back guarantee on Premium.</p>
</div>
</div>
</section>
</main>

<footer className="mt-24 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
<div className="col-span-2">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
<svg className="lucide lucide-diamond w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="diamond" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<span className="text-[17px] uppercase font-semibold tracking-tighter font-geist">LevelUP</span>
</a>
<p className="mt-4 text-sm text-neutral-600 max-w-sm font-geist">A financial literacy app that feels like a game. Learn budgeting, investing, and credit—without the boring.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-200 hover:bg-neutral-100 transition" href="https://twitter.com">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-200 hover:bg-neutral-100 transition" href="https://instagram.com">
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="TikTok" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-200 hover:bg-neutral-100 transition" href="https://tiktok.com">
<svg className="lucide lucide-music h-4 w-4" data-lucide="music" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</a>
</div>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-900 mb-3 font-geist">Product</p>
<ul className="space-y-2 text-sm text-neutral-600 font-geist">
<li className=""><a className="hover:text-neutral-900" href="#features">Features</a></li>
<li className=""><a className="hover:text-neutral-900" href="#how">How It Works</a></li>
<li className=""><a className="hover:text-neutral-900" href="#pricing">Pricing</a></li>
<li><a className="hover:text-neutral-900" href="#download">Download</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-neutral-900 mb-3 font-geist">Company</p>
<ul className="space-y-2 text-sm text-neutral-600 font-geist">
<li><a className="hover:text-neutral-900" href="#">About</a></li>
<li><a className="hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900" href="#social-proof">Customers</a></li>
<li><a className="hover:text-neutral-900" href="#faq">FAQ</a></li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-900 mb-3 font-geist">Support</p>
<ul className="space-y-2 text-sm text-neutral-600 font-geist">
<li className=""><a className="hover:text-neutral-900" href="#">Help Center</a></li>
<li className=""><a className="hover:text-neutral-900" href="#">Contact</a></li>
<li className=""><a className="hover:text-neutral-900" href="#">Status</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-neutral-900 mb-3 font-geist" id="privacy">Legal</p>
<ul className="space-y-2 text-sm text-neutral-600 font-geist">
<li><a className="hover:text-neutral-900" href="#privacy">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900" href="#terms" id="terms">Terms of Service</a></li>
<li><a className="hover:text-neutral-900" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-200 pt-6">
<p className="text-sm text-neutral-600 font-geist">© <span id="year">2025</span> LevelUp Money, Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm text-neutral-600 font-geist">
<a className="hover:text-neutral-900" href="#privacy">Privacy</a>
<span aria-hidden="true" className="">•</span>
<a className="hover:text-neutral-900" href="#terms">Terms</a>
<span aria-hidden="true">•</span>
<a className="hover:text-neutral-900" href="/www.rulz.co">Rulz&amp;Co</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
