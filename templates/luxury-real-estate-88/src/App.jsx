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



        // Initialize Lucide icons
        lucide.createIcons();

        // Smooth Scroll
        const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);

        gsap.registerPlugin(ScrollTrigger);

        // Entrance
        gsap.to('.hero-title-l, .hero-title-r', { y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1 });

        // Hero Parallax
        gsap.to('.hero-img', { scale: 1.15, y: '10%', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });

        // Horizontal Scroll
        const horizWrap = document.querySelector('.horiz-wrap');
        gsap.to(horizWrap, {
            x: () => -(horizWrap.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: { trigger: '#horiz-scroll', start: "top top", end: () => `+=${horizWrap.scrollWidth}`, pin: true, scrub: 1 }
        });

        // Stacked Cards Animation
        const cards = gsap.utils.toArray('.card-item');
        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                gsap.to(card.querySelector('.card-inner'), {
                    scale: 0.9, opacity: 0.6, y: -40, scrollTrigger: { trigger: cards[i+1], start: "top bottom", end: "top 20%", scrub: true }
                });
            }
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconMenu = document.getElementById('icon-menu');
        const iconClose = document.getElementById('icon-close');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                document.body.classList.add('menu-open');
                iconMenu.classList.add('opacity-0');
                iconClose.classList.remove('opacity-0');
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                document.body.classList.remove('menu-open');
                iconMenu.classList.remove('opacity-0');
                iconClose.classList.add('opacity-0');
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
      
<div className="noise"></div>

<div className="fixed inset-0 z-40 bg-[#111111] text-white transform translate-x-full flex flex-col items-center justify-center" id="mobile-menu">
<nav className="flex flex-col gap-10 text-center">
<a className="display-font text-4xl font-normal tracking-tight hover:text-[#b19777] transition-colors" href="#">Portfolio</a>
<a className="display-font text-4xl font-normal tracking-tight hover:text-[#b19777] transition-colors" href="#">Joint Ventures</a>
<a className="display-font text-4xl font-normal tracking-tight hover:text-[#b19777] transition-colors" href="#">About</a>
<a className="display-font text-4xl font-normal tracking-tight hover:text-[#b19777] transition-colors" href="#">Contact</a>
</nav>
<div className="absolute bottom-12 text-xs uppercase tracking-[0.25em] text-white/30">
            Equinox Developments
        </div>
</div>
<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-10 flex justify-between items-center z-50 mix-blend-exclusion text-white">
<div className="flex items-center md:flex-1">
<img alt="Equinox Developments" className="md:h-24 w-auto h-12 object-contain invert brightness-0" src="https://res.cloudinary.com/dhrg7qai8/image/upload/v1769853905/ED-Logo-horizontal_ez5rg2.png"/>
</div>
<div className="hidden md:flex gap-12 text-xs font-normal tracking-[0.25em] uppercase">
<a className="hover:text-[#b19777] transition-colors" href="#">Portfolio</a>
<a className="hover:text-[#b19777] transition-colors" href="#">Joint Ventures</a>
<a className="hover:text-[#b19777] transition-colors" href="#">About</a>
<a className="hover:text-[#b19777] transition-colors" href="#">Contact</a>
</div>
<div className="flex md:flex-1 justify-end">

<button className="z-50 group flex items-center justify-center md:hidden w-10 h-10 relative text-white" id="menu-btn">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5] absolute transition-opacity duration-300" fill="none" height="24" id="icon-menu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-6 h-6 stroke-[1.5] absolute opacity-0 transition-opacity duration-300" fill="none" height="24" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</button>
</div>
</nav>
<div className="wrapper">
<section className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0 w-full h-full hero-img-wrap">
<img alt="Luxury Living" className="brightness-[0.4] hero-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-exclusion py-32 px-6 md:px-12">
<div className="overflow-hidden self-start">
<h1 className="hero-text-huge hero-title-l translate-y-full block font-medium tracking-tight">
                        EQUI
                    </h1>
</div>

<div className="overflow-hidden self-end pr-4 md:pr-10">
<h1 className="hero-text-huge hero-title-r translate-y-full block italic font-light tracking-tight">
                        NOX
                    </h1>
</div>
</div>
<div className="absolute bottom-12 left-6 md:left-12 text-white mix-blend-exclusion flex flex-col gap-1">
<span className="text-xs uppercase tracking-[0.3em] font-normal text-[#b19777]">
                    Premium Real Estate
                </span>
<span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    Harare • Zimbabwe
                </span>
</div>
</section>
<section className="py-40 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] relative z-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-black/5 pt-8">
<span className="text-xs font-normal tracking-[0.2em] text-[#b19777]">01 — THE VISION</span>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="display-font text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight max-w-5xl text-black">
                        We don't just build structures; we curate lifestyles. Pioneering luxury townhouses and high-value joint ventures in Zimbabwe's most prime locations.
                    </h2>
</div>
</div>
</section>
<section className="stack-section pb-40">
<div className="px-6 md:px-20 mb-24 flex justify-between items-end">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-2 h-2 rounded-full bg-[#b19777]"></div>
<span className="text-xs font-normal uppercase tracking-[0.25em] text-gray-400">
                            Available Listings
                        </span>
</div>
<h2 className="display-font text-4xl md:text-5xl font-normal tracking-tight leading-none uppercase">
                        Featured
                        <br/>
                        Developments
                    </h2>
</div>
<div className="hidden md:block">
<button className="group flex items-center gap-4 text-xs font-normal uppercase tracking-[0.2em] hover:text-[#b19777] transition-colors">
                        Explore Portfolio
                        <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="stack-container px-4 md:px-20">

<div className="card-item group">
<div className="card-inner flex flex-col md:grid md:grid-cols-[1.2fr_1fr] rounded-2xl border border-black/5">

<div className="h-[280px] md:h-full w-full relative overflow-hidden order-1 md:order-2">
<img alt="Highland Views" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col p-8 md:p-12 lg:p-16 order-2 md:order-1 bg-white relative">

<div className="flex justify-between items-start mb-6 md:mb-12">
<span className="text-[10px] tracking-[0.2em] text-[#b19777] uppercase font-medium mt-2">
                                    Highlands
                                </span>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#111] group-hover:text-white group-hover:border-[#111] transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="mb-4">
<h3 className="display-font text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#111] mb-2 uppercase">
                                    The Ridge Estate
                                </h3>
<span className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium block">
                                    Harare North
                                </span>
</div>

<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-10 max-w-md">
                                A collection of 12 bespoke cluster homes blending modern architectural lines with the rugged beauty of the Mashonaland landscape.
                            </p>

<div className="mt-auto pt-6 border-t border-black/5 flex gap-3">
<span className="px-5 py-2.5 bg-[#F9F9F9] rounded-full text-[10px] tracking-widest uppercase text-gray-500 font-medium">
                                    Residential
                                </span>
<span className="px-5 py-2.5 bg-[#F9F9F9] rounded-full text-[10px] tracking-widest uppercase text-gray-500 font-medium">
                                    Selling
                                </span>
</div>
</div>
</div>
</div>

<div className="card-item group">
<div className="card-inner flex flex-col md:grid md:grid-cols-[1.2fr_1fr] rounded-2xl border border-black/5">

<div className="h-[280px] md:h-full w-full relative overflow-hidden order-1 md:order-2">
<img alt="Borrowdale Brooke" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col p-8 md:p-12 lg:p-16 order-2 md:order-1 bg-white relative">

<div className="flex justify-between items-start mb-6 md:mb-12">
<span className="text-[10px] tracking-[0.2em] text-[#b19777] uppercase font-medium mt-2">
                                    Borrowdale
                                </span>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#111] group-hover:text-white group-hover:border-[#111] transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="mb-4">
<h3 className="display-font text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#111] mb-2 uppercase">
                                    Brooke Golf Estate
                                </h3>
<span className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium block">
                                    Harare North
                                </span>
</div>

<p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-10 max-w-md">
                                Exclusive golf-estate living featuring 6 luxury double-storey townhouses. Floor-to-ceiling glass captures the essence of fairway living.
                            </p>

<div className="mt-auto pt-6 border-t border-black/5 flex gap-3">
<span className="px-5 py-2.5 bg-[#F9F9F9] rounded-full text-[10px] tracking-widest uppercase text-gray-500 font-medium">
                                    Joint Venture
                                </span>
<span className="px-5 py-2.5 bg-[#F9F9F9] rounded-full text-[10px] tracking-widest uppercase text-gray-500 font-medium">
                                    Completed
                                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen overflow-hidden bg-[var(--c-bg)] border-t border-black/5" id="horiz-scroll">
<div className="horiz-wrap flex h-full w-[300vw]">
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/5">
<span className="text-xs font-normal text-[#b19777] mb-8 tracking-[0.3em]">01 — EXPERTISE</span>
<h2 className="display-font text-6xl md:text-8xl font-normal tracking-tight uppercase">Joint Ventures</h2>
<p className="mt-10 max-w-sm text-gray-500 text-lg font-light">Unlocking land value through transparent, high-yield development structures.</p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/5 bg-white">
<span className="text-xs font-normal text-[#b19777] mb-8 tracking-[0.3em]">02 — EXPERTISE</span>
<h2 className="display-font text-6xl md:text-8xl font-normal tracking-tight uppercase">Luxury Living</h2>
<p className="mt-10 max-w-sm text-gray-500 text-lg font-light">Architectural excellence paired with sustainable, secure environments.</p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-[#f4f4f4]">
<span className="text-xs font-normal text-[#b19777] mb-8 tracking-[0.3em]">03 — EXPERTISE</span>
<h2 className="display-font text-6xl md:text-8xl font-normal tracking-tight uppercase">Project Mgmt</h2>
<p className="mt-10 max-w-sm text-gray-500 text-lg font-light">End-to-end management from conceptual feasibility to final handover.</p>
</div>
</div>
</section>
<section className="py-56 bg-[#0A0A0A] text-white relative z-20 overflow-hidden">
<div className="px-6 md:px-20 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-20">
<div className="">
<span className="text-xs font-normal text-[#b19777] block mb-10 tracking-[0.3em]">CAPABILITIES</span>
<h2 className="display-font text-5xl md:text-7xl font-normal tracking-tight leading-none uppercase">
                        Areas of
                        <br/>
                        Excellence
                    </h2>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-center border-b border-white/10 py-10 group hover:pl-6 transition-all duration-500 cursor-pointer">
<span className="text-xl font-normal text-gray-300 group-hover:text-[#b19777] transition-colors">Cluster Home Design</span>
<svg aria-hidden="true" className="lucide lucide-home w-6 h-6 stroke-[1.5] text-white/20 group-hover:text-[#b19777] transition-colors" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="flex justify-between items-center border-b border-white/10 py-10 group hover:pl-6 transition-all duration-500 cursor-pointer">
<span className="text-xl font-normal text-gray-300 group-hover:text-[#b19777] transition-colors">Commercial Partnerships</span>
<svg aria-hidden="true" className="lucide lucide-users w-6 h-6 stroke-[1.5] text-white/20 group-hover:text-[#b19777] transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex justify-between items-center border-b border-white/10 py-10 group hover:pl-6 transition-all duration-500 cursor-pointer">
<span className="text-xl font-normal text-gray-300 group-hover:text-[#b19777] transition-colors">Land Acquisition</span>
<svg aria-hidden="true" className="lucide lucide-map-pin w-6 h-6 stroke-[1.5] text-white/20 group-hover:text-[#b19777] transition-colors" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
</div>
</section>
</div>
<footer className="footer-sticky">
<div className="absolute inset-0 z-0 opacity-10 grayscale">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center w-full max-w-5xl px-6">
<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-16">
<div className="w-2 h-2 rounded-full bg-[#b19777] animate-pulse"></div>
<span className="text-xs uppercase tracking-[0.3em] text-gray-300 font-normal">
                    Joint Venture Opportunities Available
                </span>
</div>
<a className="block group" href="mailto:info@equinox.co.zw">
<h2 className="display-font text-[12vw] leading-[0.8] font-normal tracking-tighter text-white group-hover:text-[#b19777] transition-colors duration-700">
                    LET'S BUILD
                </h2>
<div className="h-[1px] w-0 group-hover:w-full bg-[#b19777] mx-auto transition-all duration-1000 mt-10"></div>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-40 text-left border-t border-white/10 pt-20">
<div className="flex flex-col gap-8">
<span className="text-xs uppercase tracking-[0.3em] text-[#b19777]">Social</span>
<div className="flex flex-col gap-3 text-gray-400 text-sm">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
<div className="flex flex-col gap-8">
<span className="text-xs uppercase tracking-[0.3em] text-[#b19777]">Location</span>
<p className="text-gray-400 text-sm leading-relaxed">Borrowdale Road<br/>Harare, Zimbabwe</p>
</div>
<div className="flex flex-col gap-8">
<span className="text-xs uppercase tracking-[0.3em] text-[#b19777]">Inquiries</span>
<div className="flex flex-col gap-3 text-gray-400 text-sm">
<a className="hover:text-white transition-colors" href="mailto:info@equinox.co.zw">info@equinox.co.zw</a>
<a className="hover:text-white transition-colors" href="tel:+26312345678">+263 77 123 4567</a>
</div>
</div>
<div className="flex flex-col justify-end">
<span className="text-xs text-gray-500 uppercase tracking-[0.3em]">
                        © 2024 EQUINOX
                    </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
