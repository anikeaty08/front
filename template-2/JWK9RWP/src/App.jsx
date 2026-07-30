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



      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      menuBtn?.addEventListener('click', () => {
        const open = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !open);
        menuBtn.innerHTML = open ? '<i data-lucide="x" class="w-5 h-5"></i>' : '<i data-lucide="menu" class="w-5 h-5"></i>';
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Reveal on scroll (fade + slide + blur)
      const revealEls = document.querySelectorAll('.reveal');
      const setInitialReveal = () => {
        revealEls.forEach(el => {
          el.classList.remove('opacity-100','translate-y-0','blur-0');
          el.classList.add('opacity-0','translate-y-4','blur-sm','transition','duration-700','ease-out');
        });
      };

      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0','translate-y-4','blur-sm');
            e.target.classList.add('opacity-100','translate-y-0');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });

      revealEls.forEach(el => io.observe(el));
      setInitialReveal();

      // Parallax
      const parallaxEls = document.querySelectorAll('[data-parallax-speed]');
      const header = document.getElementById('site-header');
      const progress = document.getElementById('progress');

      const applyParallax = (y) => {
        parallaxEls.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0;
          const offset = y * speed;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        });
      };

      const onScroll = () => {
        const y = window.scrollY || window.pageYOffset;

        // Header shadow
        if (header) {
          header.style.filter = y > 8 ? 'drop-shadow(0 10px 30px rgba(0,0,0,0.35))' : 'none';
        }

        // Progress bar
        if (progress) {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          const pct = Math.max(0, Math.min(100, (y / h) * 100));
          progress.style.width = pct + '%';
        }

        // Parallax transform
        applyParallax(y);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    
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
      

<div className="hidden md:flex items-center justify-between px-6 lg:px-10 py-2 bg-neutral-900/70 text-neutral-300 text-sm border-b border-neutral-800">
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-2"><svg className="lucide lucide-phone w-4 h-4 text-neutral-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Main: (703) 665‑1600</span>
<span className="hidden lg:inline-flex items-center gap-2"><svg className="lucide lucide-headset w-4 h-4 text-neutral-400" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg></span></div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400"> <span className="hidden lg:inline-flex items-center gap-2"><svg className="lucide lucide-headset w-4 h-4 text-neutral-400" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg> Sales: (703) 300‑7584</span></span>
</div>
</div>

<div className="fixed top-0 left-0 h-0.5 z-[80] bg-red-500" style={{width: `0%`}}></div>

<header className="fixed top-0 inset-x-0 z-50" id="site-header" style={{filter: `none`}}>
<div className="max-w-7xl mr-auto ml-auto">
<nav className="lg:mx-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] transition-all bg-neutral-900/70 border-neutral-800/70 border rounded-b-2xl mr-3 ml-3 backdrop-blur">
<div className="flex lg:px-6 pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-between">

<a className="flex items-center gap-3 group shrink-0" href="#">
<img alt="Deployable Technologies" className="h-7 sm:h-8 w-auto object-contain" decoding="async" src="https://i0.wp.com/deployabletechnologies.com/wp-content/uploads/2021/12/DTI-Logo-Inverted.png?resize=300%2C157&ssl=1" style={{}} />
<span className="sr-only">Deployable Technologies</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
                  Products <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="pointer-events-none absolute left-0 mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
<div className="w-[560px] p-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl grid grid-cols-2 gap-3">
<a className="p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition flex items-start gap-3" href="#">
<svg className="lucide lucide-cpu w-5 h-5 text-red-500 mt-0.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div>
<p className="text-sm text-white font-medium">FieldFab Expeditionary 3D Printer</p>
<p className="text-xs text-neutral-400">Ruggedized additive manufacturing for deployed teams.</p>
</div>
</a>
<a className="p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition flex items-start gap-3" href="#">
<svg className="lucide lucide-server w-5 h-5 text-red-500 mt-0.5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<div>
<p className="text-sm text-white font-medium">Secure Tactical Laptops</p>
<p className="text-xs text-neutral-400">Hardened compute for mission-critical operations.</p>
</div>
</a>
<a className="p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition flex items-start gap-3" href="#">
<svg className="lucide lucide-shield-half w-5 h-5 text-red-500 mt-0.5" data-lucide="shield-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 22V2"></path></svg>
<div>
<p className="text-sm text-white font-medium">Edge Network Suite (DENS)</p>
<p className="text-xs text-neutral-400">Resilient, modular comms for the field.</p>
</div>
</a>
<a className="p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition flex items-start gap-3" href="#">
<svg className="lucide lucide-hard-drive w-5 h-5 text-red-500 mt-0.5" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
<div>
<p className="text-sm text-white font-medium">Raider Micro Blade</p>
<p className="text-xs text-neutral-400">Ultra‑light modular compute architecture.</p>
</div>
</a>
</div>
</div>
</div>
<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
                  Services <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="pointer-events-none absolute left-0 mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
<div className="w-[460px] p-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl grid grid-cols-1 gap-3">
<a className="p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition flex items-start gap-3" href="#">
<svg className="lucide lucide-badge-check w-5 h-5 text-red-500 mt-0.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<p className="text-sm text-white font-medium">System Integration</p>
<p className="text-xs text-neutral-400">Authorized integrator for enterprise and federal programs.</p>
</div>
</a>
<a className="p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition flex items-start gap-3" href="#">
<svg className="lucide lucide-radio w-5 h-5 text-red-500 mt-0.5" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
<div>
<p className="text-sm text-white font-medium">Secure Communications</p>
<p className="text-xs text-neutral-400">SATCOM, RF, and expeditionary mesh deployments.</p>
</div>
</a>
</div>
</div>
</div>
<a className="hover:text-white transition text-sm text-neutral-300" href="#about">About DTI</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#events">Events</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="px-4 py-2 rounded-lg border border-neutral-700 text-sm hover:border-neutral-600 transition" href="#contact">Request a Demo</a>
<a className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm transition" href="#products">Explore</a>
</div>

<button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-800 hover:border-neutral-700" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="hidden lg:hidden border-t border-neutral-800 px-4 py-4 space-y-2" id="mobileMenu">
<a className="block px-3 py-2 rounded-md hover:bg-neutral-800/60" href="#products">Products</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-800/60" href="#services">Services</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-800/60" href="#about">About</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-800/60" href="#events">Events</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-800/60" href="#contact">Contact</a>
<div className="pt-2 flex gap-2">
<a className="flex-1 text-center px-3 py-2 rounded-md border border-neutral-700 hover:border-neutral-600" href="#contact">Demo</a>
<a className="flex-1 text-center px-3 py-2 rounded-md bg-red-600 hover:bg-red-500" href="#products">Explore</a>
</div>
</div>
</nav>
</div>
</header>
<main className="relative">

<section className="relative overflow-hidden min-h-screen pt-32 pb-24 scale-100">
<div className="absolute inset-0">

<img alt="Futuristic technology background" className="w-full h-full object-cover opacity-70" data-parallax-speed="0.25" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1800&q=80" style={{willChange: `transform`, transform: `translate3d(0px, 0px, 0px)`}} />
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-950/80 to-neutral-950"></div><div className="relative mt-6">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40">
<div className="flex items-center animate-scroll-left space-x-16 px-6 py-3 md:py-4">
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">Ampere Computing</span>
</div>
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">General Dynamics Mission Systems</span>
</div>
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">ROGUE</span>
</div>
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">Craitor</span>
</div>
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">Ampere Computing</span>
</div>
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">General Dynamics Mission Systems</span>
</div>
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">ROGUE</span>
</div>
<div className="flex items-center justify-center min-w-[220px] h-12 md:h-14">
<span className="text-neutral-300 font-medium text-base md:text-lg tracking-wide">Craitor</span>
</div>
</div>
<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
</div>
</div>
</div><div className="absolute inset-x-0 bottom-0 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-8">
<h3 className="text-xl font-medium text-white tracking-tight">Trusted by Industry Leaders</h3>
<p className="text-sm text-neutral-400 mt-1">Partnering with leading organizations to deliver mission-critical solutions</p>
</div>
</div>
<div className="relative overflow-hidden">
<div className="flex animate-scroll-left space-x-16">

<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">Ampere Computing</div>
</div>
<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">General Dynamics</div>
</div>
<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">ROGUE</div>
</div>
<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">Craitor</div>
</div>

<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">Ampere Computing</div>
</div>
<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">General Dynamics</div>
</div>
<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">ROGUE</div>
</div>
<div className="flex items-center justify-center min-w-[200px] h-16 px-6">
<div className="text-neutral-300 font-medium text-lg tracking-wide">Craitor</div>
</div>
</div>
</div>

<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10"></div>
</div>
</div>
<div className="relative max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl py-24 lg:py-32">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-300 reveal transition-all duration-700 transition ease-out opacity-100 translate-y-0">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
              NEW — Authorized System Integrator
            </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 reveal transition-all duration-700 transition ease-out opacity-100 translate-y-0">Deployable Technologies</h1>
<p className="max-w-2xl text-neutral-300 mt-4 reveal transition-all duration-700 transition ease-out opacity-100 translate-y-0">Mission critical solutions... delivering tomorrow`s technologies, today.</p>
<div className="mt-8 flex flex-wrap gap-3 reveal transition-all duration-700 transition ease-out opacity-100 translate-y-0">
<a className="hover:bg-red-500 transition transform hover:-translate-y-0.5 text-sm text-white bg-red-600 rounded-xl pt-3 pr-5 pb-3 pl-5" href="#products">See More</a>
</div>

</div>
</div>

<div className="pointer-events-none absolute right-6 bottom-6 md:right-10 md:bottom-10" data-parallax-speed="-0.08" style={{willChange: `transform`, transform: `translate3d(0px, 0px, 0px)`}}>
<div className="px-4 py-2 rounded-lg bg-neutral-900/70 border border-neutral-800 backdrop-blur text-xs text-neutral-300 shadow-lg">
<span className="inline-flex items-center gap-2"><svg className="lucide lucide-award w-4 h-4 text-red-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> DoD‑focused solutions</span>
</div>
</div>
</section>


<section className="relative lg:py-20 pt-16 pb-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<h2 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight">News</h2>
<ul className="mt-6 space-y-3">

<li className="group hover:border-neutral-700 hover:bg-neutral-900/60 transition reveal bg-neutral-900/40 border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 duration-700 ease-out opacity-0 translate-y-4 blur-sm">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wide bg-red-600/10 text-red-400 border border-red-700/30">New</span>
<a className="text-sm text-neutral-200 group-hover:text-white" href="#">Authorized System Integrator for Supermicro to build systems for federal government</a>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</li>
<li className="group hover:border-neutral-700 hover:bg-neutral-900/60 transition reveal delay-100 bg-neutral-900/40 border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 duration-700 ease-out opacity-0 translate-y-4 blur-sm">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wide bg-red-600/10 text-red-400 border border-red-700/30">Update</span>
<a className="text-sm text-neutral-200 group-hover:text-white" href="#">Agreement with Viasat to sell and integrate systems for DoD and Intelligence Agencies</a>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</li>
<li className="group hover:border-neutral-700 hover:bg-neutral-900/60 transition reveal delay-200 bg-neutral-900/40 border-neutral-800 border rounded-xl mt-5 mb-5 pt-4 pr-4 pb-4 pl-4 duration-700 ease-out opacity-0 translate-y-4 blur-sm">
<div className="flex gap-4 items-center justify-between">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wide bg-red-600/10 text-red-400 border border-red-700/30">Release</span>
<a className="text-sm text-neutral-200 group-hover:text-white" href="#">Introducing the Raider Micro Blade — our lightest modular compute system</a>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</li>
<li className="group hover:border-neutral-700 hover:bg-neutral-900/60 transition reveal delay-300 bg-neutral-900/40 border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 duration-700 ease-out opacity-0 translate-y-4 blur-sm">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wide bg-red-600/10 text-red-400 border border-red-700/30">Partnership</span>
<a className="text-sm text-neutral-200 group-hover:text-white" href="#">Teaming with Ampere Computing for next‑gen edge compute</a>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</li><li className="group hover:border-neutral-700 hover:bg-neutral-900/60 transition reveal delay-100 bg-neutral-900/40 border-neutral-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 duration-700 ease-out opacity-0 translate-y-4 blur-sm">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wide bg-red-600/10 text-red-400 border border-red-700/30">Update</span>
<a className="text-sm text-neutral-200 group-hover:text-white" href="#">Agreement with Viasat to sell and integrate systems for DoD and Intelligence Agencies</a>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</li>
</ul>
</div>

<div className="lg:col-span-1" id="events">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Events</h2>
<div className="bg-neutral-900/40 border-neutral-800 border rounded-xl mt-8 pt-4 pr-4 pb-4 pl-4 reveal transition-all duration-700 transition ease-out opacity-0 translate-y-4 blur-sm">
<ul className="divide-y divide-neutral-800">
<li className="py-3 flex items-center justify-between">
<div className="">
<p className="text-sm text-white">SOF Week</p>
<p className="text-xs text-neutral-400">Tampa, FL — May</p>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-red-600/10 text-red-400 border border-red-700/30">Exhibitor</span>
</li>
<li className="py-3 flex items-center justify-between">
<div className="">
<p className="text-sm text-white">AFCEA West</p>
<p className="text-xs text-neutral-400">San Diego, CA — Feb</p>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-red-600/10 text-red-400 border border-red-700/30">Exhibitor</span>
</li>
<li className="py-3 flex items-center justify-between">
<div className="">
<p className="text-sm text-white">AUSA</p>
<p className="text-xs text-neutral-400">Washington, DC — Oct</p>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-red-600/10 text-red-400 border border-red-700/30">Exhibitor</span>
</li>
<li className="py-3 flex items-center justify-between">
<div className="">
<p className="text-sm text-white">Sea Air Space</p>
<p className="text-xs text-neutral-400">National Harbor, MD — Apr</p>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-red-600/10 text-red-400 border border-red-700/30">Exhibitor</span>
</li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">Full calendar <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<section className="relative lg:py-20 border-neutral-900/80 border-t pt-16 pb-16" id="products">
<div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="flex items-end justify-between">
<h2 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight">Products</h2>
<a className="text-sm text-neutral-300 hover:text-white transition flex items-center gap-1" href="#">All products <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
<a className="group rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 transition reveal duration-700 ease-out opacity-0 translate-y-4 blur-sm" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Gemini system" className="w-full h-full group-hover:scale-105 transition duration-700 object-contain" src="https://i0.wp.com/deployabletechnologies.com/wp-content/uploads/2023/05/Gemini.jpg?w=800&q=80" style={{}} />
<div className="absolute left-3 top-3 px-2 py-1 rounded-md bg-neutral-900/70 border border-neutral-800 text-[10px] uppercase tracking-wide text-neutral-300">Gemini</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Gemini</h3>
<p className="text-sm text-neutral-400 mt-1">Rugged, flexible platform for wireless communications supporting IoBT applications.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm text-red-400">View specs</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
<a className="group rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 transition reveal duration-700 ease-out opacity-0 translate-y-4 blur-sm" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="SHREDBOX device" className="w-full h-full group-hover:scale-105 transition duration-700 object-contain scale-90" src="https://i0.wp.com/deployabletechnologies.com/wp-content/uploads/2024/03/1000009509.jpg?w=800&q=80" style={{}} />
<div className="absolute left-3 top-3 px-2 py-1 rounded-md bg-neutral-900/70 border border-neutral-800 text-[10px] uppercase tracking-wide text-neutral-300">Data Sanitization</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">SHREDBOX</h3>
<p className="text-sm text-neutral-400 mt-1">The ShredBox enables users to destroy hard drives and get a record of doing so.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm text-red-400">View specs</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
<a className="group rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 transition reveal duration-700 ease-out opacity-0 translate-y-4 blur-sm" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Tactical gateways and CSfC devices" className="w-full h-full group-hover:scale-105 transition duration-700 object-contain" src="https://i0.wp.com/deployabletechnologies.com/wp-content/uploads/2023/05/New-Pecoms.jpg?w=719&q=80" style={{}} />
<div className="absolute left-3 top-3 px-2 py-1 rounded-md bg-neutral-900/70 border border-neutral-800 text-[10px] uppercase tracking-wide text-neutral-300">Gateways</div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-semibold text-white tracking-tight">PECOMS</h3>
<p className="text-sm text-neutral-400 mt-1">Portable Edge Communications</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm text-red-400">View specs</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative py-16 lg:py-20" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Mission Services</h2>
<p className="mt-2 text-neutral-400">From rapid prototyping to full‑scale field deployments, we deliver end‑to‑end capability.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 reveal transition-all duration-700 transition ease-out opacity-0 translate-y-4 blur-sm">
<svg className="lucide lucide-box w-6 h-6 text-red-500" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<h3 className="mt-3 text-base font-medium text-white">Ruggedization</h3>
<p className="mt-1 text-sm text-neutral-400">Mechanical design, sealing, shock isolation, EMI/EMC strategies.</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 reveal transition-all duration-700 delay-100 transition ease-out opacity-0 translate-y-4 blur-sm">
<svg className="lucide lucide-git-branch w-6 h-6 text-red-500" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<h3 className="mt-3 text-base font-medium text-white">Systems Integration</h3>
<p className="mt-1 text-sm text-neutral-400">Certified integration with compute, RF, SATCOM, and power.</p>
</div>
<div className="bg-neutral-900/40 border-neutral-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 reveal transition-all duration-700 delay-200 transition ease-out opacity-0 translate-y-4 blur-sm">
<svg className="lucide lucide-satellite w-6 h-6 text-red-500" data-lucide="satellite" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"></path><path d="M16.5 7.5 19 5"></path><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"></path><path d="M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></svg>
<h3 className="mt-3 text-base font-medium text-white">Comms Engineering</h3>
<p className="mt-1 text-sm text-neutral-400">Link planning, spectrum, and secure transport architectures.</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 reveal transition-all duration-700 delay-300 transition ease-out opacity-0 translate-y-4 blur-sm">
<svg className="lucide lucide-life-buoy w-6 h-6 text-red-500" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
<h3 className="mt-3 text-base font-medium text-white">Lifecycle Support</h3>
<p className="mt-1 text-sm text-neutral-400">Sustainment, training, and on‑site field support worldwide.</p>
</div>
</div>
</div>
</section>

<section className="relative lg:py-20 border-neutral-900/80 border-t pt-16 pb-16" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">About DTI</h2>
<p className="mt-3 text-neutral-300">Deployable Technologies builds expeditionary compute and communications for teams operating at the edge. We partner with industry leaders to deliver secure, reliable, and rapidly deployable capabilities.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 reveal transition-all duration-700 transition ease-out opacity-0 translate-y-4 blur-sm">
<p className="text-3xl font-semibold tracking-tight text-white">20+</p>
<p className="text-xs text-neutral-400">Years delivering mission systems</p>
</div>
<div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 reveal transition-all duration-700 delay-100 transition ease-out opacity-0 translate-y-4 blur-sm">
<p className="text-3xl font-semibold tracking-tight text-white">1000s</p>
<p className="text-xs text-neutral-400">Deployed units</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[16/10] overflow-hidden bg-neutral-900/40 bg-[url(https://images.unsplash.com/photo-1542903660-eedba2cda473?w=1600&q=80)] bg-cover border-neutral-800 border rounded-2xl">
</div>
</div>
</div>
</div>
</section>

<section className="relative lg:py-20 pt-16 pb-16" id="contact">
<div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 border rounded-2xl">
<div className="grid md:grid-cols-2">
<div className="lg:p-10 pt-8 pr-8 pb-8 pl-8">
<h3 className="text-2xl font-semibold tracking-tight text-white reveal transition-all duration-700 transition ease-out opacity-0 translate-y-4 blur-sm">Plan a demo or field trial</h3>
<p className="mt-2 text-neutral-400 reveal transition-all duration-700 delay-100 transition ease-out opacity-0 translate-y-4 blur-sm">Get hands‑on with FieldFab, Raider, and DENS. Our engineering team will tailor configurations to your mission.</p>
<div className="mt-6 space-y-3 reveal transition-all duration-700 delay-200 transition ease-out opacity-0 translate-y-4 blur-sm">
<div className="flex items-center gap-3 text-neutral-300"><svg className="lucide lucide-map-pin w-5 h-5 text-red-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 20700 Loudoun County Parkway — Ashburn, VA 20147, Suite 172</div>
<div className="flex items-center gap-3 text-neutral-300"><svg className="lucide lucide-phone w-5 h-5 text-red-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Main: (703) 665‑1600 • Toll‑free: (855) DEPLOY‑NOW</div>
<a className="flex items-center gap-3 text-neutral-300 hover:text-white transition" href="mailto:Sales@DeployableTechnologies.com"><svg className="lucide lucide-mail w-5 h-5 text-red-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Sales@DeployableTechnologies.com</a>
</div>
<div className="flex gap-3 mt-8 reveal transition-all duration-700 delay-300 transition ease-out opacity-0 translate-y-4 blur-sm">
<a className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm transition" href="#">Schedule</a>
<a className="px-5 py-3 rounded-xl border border-neutral-700 hover:border-neutral-600 text-sm transition" href="#products">Product briefs</a>
</div>
</div>
<div className="relative bg-[url(https://i0.wp.com/deployabletechnologies.com/wp-content/uploads/2022/06/pcb-management.jpg?w=640&q=80)] bg-cover">
<img alt="Minimal lab" className="w-full h-full object-cover opacity-70" data-parallax-speed="0.15" src="https://i0.wp.com/deployabletechnologies.com/wp-content/uploads/2022/06/pcb-management.jpg?w=640&q=80" style={{willChange: `transform`, transform: `translate3d(0px, 0px, 0px)`}} />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900/80">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row md:items-start gap-8 items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Deployable Technologies" className="h-8 w-auto object-contain px-10" decoding="async" src="https://i0.wp.com/deployabletechnologies.com/wp-content/uploads/2021/12/DTI-Logo-Inverted.png?resize=300%2C157&ssl=1" style={{}} />
<div>
<p className="text-sm text-white">Deployable Technologies LLC</p>
<p className="text-xs text-neutral-400">Content copyright © 2003–2025</p>
</div>
</div>
<div className="text-xs text-neutral-400">
            DTI disclaims any proprietary interest in the trademarks, pictures and names of others. The information and specifications on this website are subject to change without notice.
          </div>
</div>
</div>
</footer>




    </>
  );
}
