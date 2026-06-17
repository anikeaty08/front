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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener("DOMContentLoaded", (event) => {
      gsap.registerPlugin(ScrollTrigger);

      // 1. Reveal hidden elements to prevent FOUC
      gsap.set(".gsap-hero, .gsap-hero-image, .gsap-fade-up, .gsap-stagger-item", { visibility: "visible" });

      // 2. Hero Timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl.fromTo(".gsap-hero", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 0.2 }
      )
      .fromTo(".gsap-hero-image", 
        { scale: 0.95, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.2 }, 
        "-=0.8"
      );

      // 3. Simple Fade Up on Scroll
      gsap.utils.toArray(".gsap-fade-up").forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          }
        );
      });

      // 4. Staggered Elements inside Containers (Cards, Services, Methodologies)
      gsap.utils.toArray(".gsap-stagger-container").forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        gsap.fromTo(items, 
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
      });
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
      
<div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-white/[0.04] to-transparent mix-blend-screen"></div>
<header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl transition-all duration-300">
<div className="flex lg:px-8 max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex min-w-0 items-center group" href="#home">
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tighter text-white group-hover:text-white/80 transition-colors">BLUE HOMES</span>
<span className="text-xs font-light text-white/40 tracking-widest uppercase mt-0.5">Interiors</span>
</div>
</a>
<nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
<a className="text-sm font-light text-white/50 transition-colors hover:text-white" href="#home">Home</a>
<a className="text-sm font-light text-white/50 transition-colors hover:text-white" href="#services">Services</a>
<a className="text-sm font-light text-white/50 transition-colors hover:text-white" href="#projects">Projects</a>
<a className="text-sm font-light text-white/50 transition-colors hover:text-white" href="#about">About</a>
<a className="text-sm font-light text-white/50 transition-colors hover:text-white" href="#contact">Contact</a>
</nav>
<div className="hidden lg:flex lg:items-center lg:gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-[#3955E7] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(57,85,231,0.2)]" href="#contact">
          Book Consultation
        </a>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 lg:hidden bg-white/5 text-white/70 hover:bg-white/10 transition-colors" type="button">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</header>
<main className="" id="home">
<section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-center">
<div className="flex flex-col justify-center lg:col-span-6 lg:pr-8">
<div className="max-w-2xl">
<div className="gsap-hero inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 mb-8 backdrop-blur-md">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-400 opacity-75"></span>
<p className="text-xs font-light text-white/70 tracking-wide">Accepting projects in Chennai</p>
</div>
<h1 className="gsap-hero text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
                Premium interiors, <br/><span className="text-white/40 italic font-serif">flawlessly executed.</span>
</h1>
<p className="gsap-hero mt-6 max-w-lg text-base font-light leading-relaxed text-white/50">
                End-to-end design, in-house production, and stress-free execution. Transform your space with a single, accountable team and transparent pricing.
              </p>
<div className="gsap-hero mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-full bg-[#3955E7] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#3955E7]/90 shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]" href="#contact">
                  Book Free Consultation
                </a>
</div>
<div className="gsap-hero mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 text-white/90">
<iconify-icon height="16" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm font-medium">4.9</span>
</div>
<span className="text-xs font-light text-white/40 border-l border-white/10 pl-3">284 verified reviews</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 gsap-hero-image">
<div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] p-2 bg-white/[0.02] border border-white/[0.05] shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[2rem] pointer-events-none"></div>
<img alt="Interior design showcase" className="filter contrast-[1.05] w-full h-full object-cover rounded-[1.5rem] brightness-95" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>
<section className="sm:py-32 border-white/[0.03] border-t pt-24 pb-24 relative" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative gsap-fade-up">
<div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.01]">
<img alt="Interior design workspace" className="hover:opacity-100 transition-opacity duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1a55a47-98f4-454f-b3de-fa92dd937548_1600w.webp"/>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="gsap-fade-up">
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">The Studio</p>
<h2 className="text-3xl font-light tracking-tight sm:text-4xl text-white leading-tight">Built for practical spaces <br/><span className="text-white/50">&amp; polished finishes.</span></h2>
<p className="mt-6 text-sm sm:text-base font-light text-white/50 leading-relaxed max-w-xl">
                We deliver complete design solutions for residential and commercial spaces. Our structure removes third-party friction, supporting planning, production, and execution under one refined workflow.
              </p>
</div>
<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 gsap-stagger-container">
<div className="gsap-stagger-item group border-l border-white/10 pl-5 transition-all hover:border-white/40">
<h3 className="text-sm font-medium text-white group-hover:text-white transition-colors">Transparent Pricing</h3>
<p className="mt-2 text-xs font-light text-white/40 leading-relaxed">Structured packages with zero hidden costs, designed to respect your budget.</p>
</div>
<div className="gsap-stagger-item group border-l border-white/10 pl-5 transition-all hover:border-white/40">
<h3 className="text-sm font-medium text-white group-hover:text-white transition-colors">Flawless Execution</h3>
<p className="mt-2 text-xs font-light text-white/40 leading-relaxed">Execution focused on detail, durability, and a clean, ready-to-use output.</p>
</div>
<div className="gsap-stagger-item group border-l border-white/10 pl-5 transition-all hover:border-white/40">
<h3 className="text-sm font-medium text-white group-hover:text-white transition-colors">Zero Coordination Hassle</h3>
<p className="mt-2 text-xs font-light text-white/40 leading-relaxed">From initial layout to pristine delivery, managed by one accountable team.</p>
</div>
<div className="gsap-stagger-item group border-l border-white/10 pl-5 transition-all hover:border-white/40">
<h3 className="text-sm font-medium text-white group-hover:text-white transition-colors">On-time Delivery</h3>
<p className="mt-2 text-xs font-light text-white/40 leading-relaxed">In-house production guarantees consistency and avoids third-party delays.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 sm:py-32 bg-[#080808] border-y border-white/[0.03]" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto gsap-fade-up">
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">Expertise</p>
<h2 className="text-3xl font-light tracking-tight sm:text-4xl text-white">Curated interior solutions</h2>
<p className="mt-4 text-sm font-light text-white/50">Elevating homes and workspaces through meticulous design and execution.</p>
</div>
<div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gsap-stagger-container">
<article className="gsap-stagger-item group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.12]">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:scale-110 group-hover:text-[#3955E7] transition-all duration-300">
<iconify-icon height="24" icon="solar:sofa-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Home Interiors</h3>
<p className="mt-3 text-xs font-light text-white/40 leading-relaxed">Complete planning and execution for living spaces and entire homes.</p>
</article>
<article className="gsap-stagger-item group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.12]">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:scale-110 group-hover:text-[#3955E7] transition-all duration-300">
<iconify-icon className="" height="24" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Modular Kitchen</h3>
<p className="mt-3 text-xs font-light text-white/40 leading-relaxed">Functional layouts with smart storage, workflow planning, and built-in prep.</p>
</article>
<article className="gsap-stagger-item group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.12]">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:scale-110 group-hover:text-[#3955E7] transition-all duration-300">
<iconify-icon height="24" icon="solar:closet-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Wardrobes</h3>
<p className="mt-3 text-xs font-light text-white/40 leading-relaxed">Space-optimized storage systems designed for layout efficiency.</p>
</article>
<article className="gsap-stagger-item group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.12]">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:scale-110 group-hover:text-[#3955E7] transition-all duration-300">
<iconify-icon height="24" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Commercial</h3>
<p className="mt-3 text-xs font-light text-white/40 leading-relaxed">Interiors for offices, retail, and business environments with practical planning.</p>
</article>
<article className="gsap-stagger-item group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.12] xl:col-span-1 sm:col-span-2 lg:col-span-3 xl:col-start-auto">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:scale-110 group-hover:text-[#3955E7] transition-all duration-300">
<iconify-icon height="24" icon="solar:armchair-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Custom Furniture</h3>
<p className="mt-3 text-xs font-light text-white/40 leading-relaxed">Made-to-fit pieces supported by factory production and finishing control.</p>
</article>
</div>
</div>
</section>
<section className="sm:py-32 pt-24 pb-24" id="projects">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12 gsap-fade-up">
<div className="max-w-xl">
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">Portfolio</p>
<h2 className="text-3xl font-light tracking-tight sm:text-4xl text-white">Spaces we've transformed</h2>
</div>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 gsap-stagger-container">
<article className="gsap-stagger-item group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] relative">
<img alt="Modern living room interior" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/308bab71-1043-42fc-bf12-bd7e3a4c64d8_800w.webp"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/20 z-10 absolute inset-0"></div>
</div>
<div className="pt-4 px-1">
<h3 className="text-sm font-medium text-white group-hover:text-white/80 transition-colors">Modern Living Room</h3>
<p className="mt-1 text-xs font-light text-white/40">Residential</p>
</div>
</article>
<article className="gsap-stagger-item group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] relative">
<img alt="Modular kitchen interior" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1362bf43-6cbf-4af6-83a7-79d85fe927e3_800w.webp"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/20 z-10 absolute inset-0"></div>
</div>
<div className="pt-4 px-1">
<h3 className="text-sm font-medium text-white group-hover:text-white/80 transition-colors">Minimalist Kitchen</h3>
<p className="mt-1 text-xs font-light text-white/40">Kitchen Design</p>
</div>
</article>
<article className="gsap-stagger-item group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] relative">
<img alt="Bedroom wardrobe unit" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44fe7e46-ec8c-4c78-88ed-9a4167999ae9_800w.webp"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/20 z-10 absolute inset-0"></div>
</div>
<div className="pt-4 px-1">
<h3 className="text-sm font-medium text-white group-hover:text-white/80 transition-colors">Bespoke Wardrobe</h3>
<p className="mt-1 text-xs font-light text-white/40">Storage Solutions</p>
</div>
</article>
<article className="gsap-stagger-item group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] relative">
<img alt="Commercial office interior" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1a55a47-98f4-454f-b3de-fa92dd937548_800w.webp"/>
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 bg-black/20 absolute inset-0"></div>
</div>
<div className="pt-4 px-1">
<h3 className="text-sm font-medium text-white group-hover:text-white/80 transition-colors">Executive Office</h3>
<p className="mt-1 text-xs font-light text-white/40">Commercial</p>
</div>
</article>
</div>
</div>
</section>
<section className="py-24 sm:py-32 bg-[#080808] border-y border-white/[0.03] relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 flex flex-col justify-center gsap-fade-up">
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">Methodology</p>
<h2 className="text-3xl font-light tracking-tight sm:text-4xl text-white">A refined process from concept to reality</h2>
<p className="mt-6 text-sm font-light text-white/50 leading-relaxed">
              We've stripped away the complexity of interior design, offering a transparent, linear journey that respects your time and vision.
            </p>
</div>
<div className="lg:col-span-8 gsap-stagger-container">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
<article className="gsap-stagger-item relative pl-8">
<span className="absolute left-0 top-0 text-3xl font-light text-white/10 leading-none">01</span>
<h3 className="text-base font-medium text-white mt-1">Consultation</h3>
<p className="mt-2 text-sm font-light text-white/40 leading-relaxed">Initial discussion to deeply understand your spatial requirements, aesthetic priorities, and budget.</p>
</article>
<article className="gsap-stagger-item relative pl-8">
<span className="absolute left-0 top-0 text-3xl font-light text-white/10 leading-none">02</span>
<h3 className="text-base font-medium text-white mt-1">Design Planning</h3>
<p className="mt-2 text-sm font-light text-white/40 leading-relaxed">Meticulous layout drafting, material selection, and 3D visualization before we begin.</p>
</article>
<article className="gsap-stagger-item relative pl-8">
<span className="absolute left-0 top-0 text-3xl font-light text-white/10 leading-none">03</span>
<h3 className="text-base font-medium text-white mt-1">Execution</h3>
<p className="mt-2 text-sm font-light text-white/40 leading-relaxed">Precision production, seamless site coordination, and installation managed strictly by our team.</p>
</article>
<article className="gsap-stagger-item relative pl-8">
<span className="absolute left-0 top-0 text-3xl font-light text-white/10 leading-none">04</span>
<h3 className="text-base font-medium text-white mt-1">Handover</h3>
<p className="mt-2 text-sm font-light text-white/40 leading-relaxed">Rigorous final review and delivery of a space that is immaculately clean and ready to live in.</p>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 gsap-fade-up">
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">Client Stories</p>
<h2 className="text-3xl font-light tracking-tight text-white">Voices of trust</h2>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3 gsap-stagger-container">
<article className="gsap-stagger-item rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-white/60">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed text-white/70 italic">
                "The team handled the project flawlessly. The workflow felt inherently organized, and the pristine finish quality truly stands out in every corner."
              </p>
</div>
<div className="mt-8 pt-6 border-t border-white/[0.06]">
<h3 className="text-sm font-medium text-white">Ram Prasanth</h3>
<p className="text-xs text-white/40 mt-1">Residential Client</p>
</div>
</article>
<article className="gsap-stagger-item rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-white/60">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed text-white/70 italic">
                "Exceptional coordination and highly practical design ideation. The entire experience was remarkably reliable and thoroughly professional."
              </p>
</div>
<div className="mt-8 pt-6 border-t border-white/[0.06]">
<h3 className="text-sm font-medium text-white">Hare Krishna</h3>
<p className="text-xs text-white/40 mt-1">Commercial Client</p>
</div>
</article>
<article className="gsap-stagger-item rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-white/60">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed text-white/70 italic">
                "The project materialized with impeccably clean finishing. A truly elite option for anyone seeking high-tier home interior work in Chennai."
              </p>
</div>
<div className="mt-8 pt-6 border-t border-white/[0.06]">
<h3 className="text-sm font-medium text-white">Barath Chakkaravarthy</h3>
<p className="text-xs text-white/40 mt-1">Villa Project</p>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-white/[0.03]">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<div className="text-center mb-16 gsap-fade-up">
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">FAQ</p>
<h2 className="text-3xl font-light tracking-tight text-white">Common questions</h2>
</div>
<div className="space-y-6 gsap-stagger-container">
<div className="gsap-stagger-item border-b border-white/[0.06] pb-6">
<h3 className="text-base font-medium text-white">Do you charge for the initial consultation?</h3>
<p className="mt-2 text-sm font-light text-white/50 leading-relaxed">No, our first site visit and consultation are completely free to help us deeply understand your vision and structural requirements.</p>
</div>
<div className="gsap-stagger-item border-b border-white/[0.06] pb-6">
<h3 className="text-base font-medium text-white">What is your typical project timeline?</h3>
<p className="mt-2 text-sm font-light text-white/50 leading-relaxed">Most residential projects are completed within 45 to 60 days from the design sign-off, facilitated by our in-house factory production.</p>
</div>
<div className="gsap-stagger-item border-b border-white/[0.06] pb-6">
<h3 className="text-base font-medium text-white">Do you handle civil and electrical work?</h3>
<p className="mt-2 text-sm font-light text-white/50 leading-relaxed">Yes, we provide true end-to-end services. This includes required civil modifications, false ceiling, painting, and complete electrical routing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="gsap-fade-up rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
<div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
<div>
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">Initiate</p>
<h2 className="text-3xl font-light tracking-tight sm:text-4xl text-white mb-6">Let's discuss your space.</h2>
<p className="text-sm font-light text-white/50 max-w-sm leading-relaxed">
                  Book a free, comprehensive consultation today. We handle residential, commercial, and custom architectural requirements across Chennai.
                </p>
</div>
<div className="mt-16 space-y-8">
<div>
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest mb-2">Location</h3>
<p className="text-sm font-light text-white/70">1st Cross St, MGR Nagar, Lakshmi Nagar,<br/>Velachery, Chennai, TN 600042</p>
</div>
<div>
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest mb-2">Direct Line</h3>
<a className="text-base font-light text-white hover:text-white/70 transition-colors" href="tel:+919677067989">+91 9677067989</a>
</div>
</div>
</div>
<div className="p-10 sm:p-16 lg:p-20 bg-black/20 backdrop-blur-sm flex flex-col justify-center">
<form action="#" className="space-y-6" method="post">
<div className="space-y-1">
<label className="text-xs font-medium text-white/50 pl-1" htmlFor="name">Full Name</label>
<input className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-white/30 focus:bg-white/[0.04]" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-white/50 pl-1" htmlFor="phone">Phone Number</label>
<input className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-white/30 focus:bg-white/[0.04]" id="phone" name="phone" placeholder="+91 00000 00000" required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-white/50 pl-1" htmlFor="message">Project Details</label>
<textarea className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-white/30 focus:bg-white/[0.04] resize-none" id="message" name="message" placeholder="Briefly describe your vision..." rows="4"></textarea>
</div>
<div className="pt-2 flex flex-col gap-3">
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#3955E7] px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#3955E7]/90 shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]" type="submit">
                      Request Free Quote
                    </button>
<a className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-normal text-white transition-colors hover:bg-white/10" href="https://wa.me/919677067989" rel="noopener noreferrer" target="_blank">
<iconify-icon className="mr-2" icon="solar:chat-round-line-linear"></iconify-icon>
                      WhatsApp
                    </a>
</div>
<p className="text-xs font-light text-white/40 text-center mt-2">No commitment required for the initial consultation.</p>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-x-4 bottom-6 z-40 lg:hidden">
<div className="mx-auto flex max-w-sm gap-2 rounded-full border border-white/10 bg-[#0a0a0a]/90 p-2 backdrop-blur-xl shadow-2xl">
<a className="inline-flex flex-1 items-center justify-center rounded-full bg-[#3955E7] px-4 py-3 text-xs font-medium text-white" href="tel:+919677067989">
        Call Studio
      </a>
<a className="inline-flex flex-1 items-center justify-center rounded-full bg-white/10 px-4 py-3 text-xs font-normal text-white" href="https://wa.me/919677067989" rel="noopener noreferrer" target="_blank">
        WhatsApp
      </a>
</div>
</div>
<footer className="border-t border-white/[0.06] bg-[#030303] pb-24 pt-16 lg:pb-16 mt-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
<div className="lg:col-span-1">
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tighter text-white">BLUE HOMES</span>
<span className="text-xs font-light text-white/40 tracking-widest uppercase mt-0.5">Interiors</span>
</div>
<p className="mt-4 text-xs font-light text-white/40 max-w-xs leading-relaxed">
            Crafting sophisticated spaces through meticulous design and flawless execution in Chennai.
          </p>
</div>
<div>
<h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">Sitemap</h3>
<ul className="mt-6 space-y-4 text-sm font-light text-white/50">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#projects">Projects</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Studio</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">Connect</h3>
<ul className="mt-6 space-y-4 text-sm font-light text-white/50">
<li><a className="hover:text-white transition-colors" href="#contact">Contact Form</a></li>
<li><a className="hover:text-white transition-colors" href="tel:+919677067989">+91 9677067989</a></li>
<li><a className="hover:text-white transition-colors" href="https://wa.me/919677067989">WhatsApp</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">Legal</h3>
<ul className="mt-6 space-y-4 text-sm font-light text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li className="pt-4 text-xs text-white/20">© 2024 Blue Homes Interiors.</li>
</ul>
</div>
</div>
</div>
</footer>


    </>
  );
}
