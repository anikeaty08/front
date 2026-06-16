import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu open button behavior (header scope)
        const openBtn = document.getElementById('mobile-open');
        const aside = document.querySelector('[data-aside]');
        openBtn?.addEventListener('click', () => {
          aside?.classList.remove('-translate-x-full');
        });
      


      const closeBtn = document.getElementById('mobile-close');
      const aside = document.querySelector('[data-aside]');
      closeBtn?.addEventListener('click', () => {
        aside?.classList.add('-translate-x-full');
      });

      // Menu button functionality
      const menuBtn = document.getElementById('sidebar-menu-btn');
      const dropdown = document.getElementById('sidebar-dropdown');
      
      menuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown?.classList.toggle('hidden');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!dropdown?.contains(e.target) && !menuBtn?.contains(e.target)) {
          dropdown?.classList.add('hidden');
        }
      });

      // Re-init Lucide icons for dropdown
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    


    // Scroll-triggered merge animation
      const card1 = document.getElementById('hero-card-1');
      const card2 = document.getElementById('hero-card-2');
      const card3 = document.getElementById('hero-card-3');

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 500;
        const progress = Math.min(scrollY / threshold, 1);

        // Card 1 (Left): Move to center and straighten
        const card1X = -280 * (1 - progress);
        const card1Rot = -12 * (1 - progress);
        const card1Opacity = 1 - (progress * 1);
        card1.style.transform = `translateX(${card1X}px) translateY(0px) rotateZ(${card1Rot}deg) scale(${1 - progress * 0.05})`;
        card1.style.opacity = card1Opacity;

        // Card 2 (Center): Stay centered, slightly scale up
        card2.style.transform = `translateX(0px) translateY(0px) rotateZ(0deg) scale(${1.05 + progress * 0.05})`;
        card2.style.opacity = 1;
        card2.style.zIndex = 3;

        // Card 3 (Right): Move to center and straighten
        const card3X = 280 * (1 - progress);
        const card3Rot = 12 * (1 - progress);
        const card3Opacity = 1 - (progress * 1);
        card3.style.transform = `translateX(${card3X}px) translateY(0px) rotateZ(${card3Rot}deg) scale(${1 - progress * 0.05})`;
        card3.style.opacity = card3Opacity;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
  


    // Section-level: reveal animation on intersection for hero and badges
    const section = document.currentScript.closest('section');
    const els = section.querySelectorAll('h1, p, a, .inline-flex');
    els.forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transform = 'translateY(10px)';
      n.style.transition = `opacity 600ms ${(i * 30)}ms cubic-bezier(.2,.7,.2,1), transform 600ms ${(i * 30)}ms cubic-bezier(.2,.7,.2,1)`;
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          els.forEach((n) => {
            n.style.opacity = '1';
            n.style.transform = 'translateY(0)';
          });
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(section);
  


          // Collapse hero cards on scroll
          const card1 = document.getElementById('card-1');
          const card2 = document.getElementById('card-2');
          const card3 = document.getElementById('card-3');

          const onScrollCollapse = () => {
            const scrollY = window.scrollY;
            const threshold = 300;
            const progress = Math.min(scrollY / threshold, 1);

            if (card1 && card2 && card3) {
              // Card 1: stay in place
              card1.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateX(${progress * 0}px) translateY(${progress * 0}px) scale(${1 - progress * 0.05})`;
              card1.style.transition = 'transform 0.3s ease-out';

              // Card 2: collapse onto card 1
              card2.style.transform = `translateY(${progress * -8 * 16}px) scale(${1 - progress * 0.05})`;
              card2.style.transition = 'transform 0.3s ease-out';

              // Card 3: collapse onto card 1
              card3.style.transform = `translateX(${progress * -100}%) translateY(${progress * -6 * 16}px) scale(${1 - progress * 0.05})`;
              card3.style.transition = 'transform 0.3s ease-out';
            }
          };

          document.addEventListener('scroll', onScrollCollapse, { passive: true });
          onScrollCollapse();
        


    // Re-initialize Lucide icons for dynamically rendered content
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  


      import { createIcons } from "https://cdn.jsdelivr.net/npm/lucide@latest/+esm";
      createIcons();

      const cards = document.querySelectorAll('.card-hover-stack');
      cards.forEach((card, index) => {
        let tx = 0;
        let rz = 0;
        if (index === 0) {
          tx = -140;
          rz = -8;
        } else if (index === 2) {
          tx = 140;
          rz = 8;
        }
        card.style.setProperty('--tx', `${tx}px`);
        card.style.setProperty('--rz', `${rz}deg`);
      });

      const toTopBtn = document.querySelector('[data-scrolltop]');
      toTopBtn?.addEventListener('click', () => {
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch {
          window.scrollTo(0, 0);
        }
      });
    


    import { createIcons } from "https://cdn.jsdelivr.net/npm/lucide@latest/+esm";
    createIcons();

    const root = document.currentScript.closest('[data-element-id="aura-emhsbiri73bf5rdtm"]');
    const stack = root.querySelector('[data-card-stack]');
    const left = root.querySelector('[data-card="left"]');
    const right = root.querySelector('[data-card="right"]');
    const toTopBtn = root.querySelector('[data-scrolltop]');

    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
    const map = (v, inMin, inMax, outMin, outMax) => ((v - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

    const setTransform = (x, y) => {
      const rect = stack.getBoundingClientRect();
      const rx = clamp(map(x, 0, rect.width, -10, 10), -10, 10);
      const ry = clamp(map(y, 0, rect.height, 6, -6), -8, 8);

      left.style.transform = `translateX(-140px) rotateZ(-8deg) rotateY(${rx / 2}deg) rotateX(${ry}deg)`;
      right.style.transform = `translateX(140px) rotateZ(8deg) rotateY(${rx / 2}deg) rotateX(${ry}deg)`;
    };

    const reset = () => {
      left.style.transform = `translateX(-140px) rotateZ(-8deg)`;
      right.style.transform = `translateX(140px) rotateZ(8deg)`;
    };

    stack.addEventListener('mousemove', (e) => {
      const rect = stack.getBoundingClientRect();
      setTransform(e.clientX - rect.left, e.clientY - rect.top);
    }, { passive: true });

    stack.addEventListener('mouseleave', reset);

    toTopBtn?.addEventListener('click', () => {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
    });
  


    // Re-initialize Lucide icons for dynamically rendered content
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  


      import { createIcons } from "https://cdn.jsdelivr.net/npm/lucide@latest/+esm";
      createIcons();
    


      const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-in'); observer.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); document.querySelectorAll('[data-animate-on-scroll]').forEach(el => { observer.observe(el); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 w-full h-screen -z-10 bg-cover bg-center opacity-60" data-alpha-mask="40" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1aa813b3-2a85-4e60-9b3c-256572f920ab_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 40%, transparent)'}}></div>


<header className="md:hidden fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 bg-neutral-950/80 border-b border-white/10">
<div className="flex items-center justify-between px-4 py-3">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-white/5 active:scale-[.98] transition" id="mobile-open">
<i className="h-5 w-5" data-lucide="panel-left"></i>
          Menu
        </button>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-300">Alexia Rivera</span>
<span className="size-1.5 rounded-full bg-emerald-400"></span>
</div>
</div>

</header>
<div className="relative md:flex md:gap-0">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"></div>

<aside className="fixed z-50 md:z-30 md:max-w-sm md:w-96 md:translate-x-0 -translate-x-full transition-transform duration-300 ease-out w-[86%] h-screen max-w-fit top-0 left-0" data-aside="">
<div className="flex flex-col md:pt-6 md:px-4 h-full max-w-fit border-white/10 rounded-[20px] border-r mt-4 mr-0 mb-0 ml-0 pt-14 pr-6 pb-6 pl-6 relative shadow-md backdrop-blur-xl gap-x-y-6 gap-y-6" style={{background: 'radial-gradient(120% 80% at 50% 0%, rgba(124,58,237,0.12) 0%, rgba(17,17,22,0.92) 38%, rgba(10,10,14,0.94) 100%)'}}>

<div className="hidden md:flex items-center gap-2 absolute left-3 top-3">
<span className="size-3 rounded-full bg-red-400 shadow-sm"></span>
<span className="size-3 rounded-full bg-amber-400 shadow-sm"></span>
<span className="size-3 rounded-full bg-green-400 shadow-sm"></span>
</div>

<button className="md:hidden absolute right-3 top-3 inline-flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-neutral-300 hover:bg-white/5 transition-colors" id="mobile-close">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
<div className="hidden md:flex items-center gap-2 absolute right-3 top-3">
<button className="inline-flex items-center rounded-md bg-white/5 ring-1 ring-white/10 p-2 text-neutral-300 hover:bg-white/10 transition-colors" id="sidebar-menu-btn">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chevron-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="inline-flex items-center rounded-md bg-white/5 ring-1 ring-white/10 p-2 text-neutral-300 hover:bg-white/10 transition-colors">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(212, 212, 212)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="hidden absolute right-3 top-16 bg-neutral-900/95 backdrop-blur-xl ring-1 ring-white/10 rounded-xl shadow-2xl p-2 min-w-[200px] z-50" id="sidebar-dropdown">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="h-4 w-4" data-lucide="settings"></i>
<span className="font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="h-4 w-4" data-lucide="user"></i>
<span className="font-medium">Profile</span>
</a>
<div className="h-px bg-white/10 my-2"></div>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="h-4 w-4" data-lucide="help-circle"></i>
<span className="font-medium">Help</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="h-4 w-4" data-lucide="log-out"></i>
<span className="font-medium">Log Out</span>
</a>
</div>


<div className="mt-2">
<div className="flex items-center gap-3">
<div className="relative inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 32">
<path d="M16 3l5.5 5.5L16 14l-5.5-5.5L16 3Z" fill="currentColor" opacity=".95" stroke="none"></path>
<path d="M16 18l5.5 5.5L16 29l-5.5-5.5L16 18Z" fill="currentColor" opacity=".8" stroke="none"></path>
</svg>
</div>
<div className="leading-tight">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac0cdfcf-79ef-4006-a067-2ad36bd2dd6d_1600w.png)] bg-cover rounded" href="#"></a>
<p className="text-xs text-neutral-400">Reliability at Every Step.</p>
</div>
</div>
</div>

<nav className="flex flex-col relative pl-2" style={{-TotalRadio: '6'}}>
<input checked="" className="absolute opacity-0 pointer-events-none" id="nav-1" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-2" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-3" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-4" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-5" name="nav" type="radio"/>
<input className="absolute opacity-0 pointer-events-none" id="nav-6" name="nav" type="radio"/>
<div className="absolute left-0 top-0 bottom-0 w-px" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(27, 27, 27, 1) 50%, rgba(0, 0, 0, 0) 100%)'}}>
<div className="relative w-full transition-transform duration-500" style={{height: 'calc(100% / var(--total-radio))', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(124, 58, 237) 50%, rgba(0, 0, 0, 0) 100%)'}}>
<div className="absolute h-3/5 w-[300%] top-1/2 -translate-y-1/2" style={{background: 'rgba(124, 58, 237, 1)', filter: 'blur(10px)'}}></div>
<div className="w-[150px] h-full absolute left-0" style={{background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.11) 0%, rgba(0, 0, 0, 0) 100%)'}}></div>
</div>
</div>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-1">
<span className="inline-flex items-center gap-3">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="font-medium tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif'}}>Dashboard</span>
</span>
<span className="pointer-events-none rounded-full bg-black/20 px-2 py-0.5 text-[10px] text-neutral-300 ring-1 ring-white/10">Home</span>
</label>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-2">
<span className="inline-flex items-center gap-3">
<i className="h-4 w-4" data-lucide="list-checks"></i>
<span className="font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Blog</span>
</span>
<i className="h-4 w-4 opacity-70" data-lucide="chevron-down"></i>
</label>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-3">
<span className="inline-flex items-center gap-3">
<i className="h-4 w-4" data-lucide="truck"></i>
<span className="font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Freight Management</span>
</span>
</label>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-4">
<span className="inline-flex items-center gap-3">
<i className="h-4 w-4" data-lucide="database"></i>
<span className="font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Shop</span>
</span>
<span className="inline-flex items-center rounded-full bg-violet-500/20 ring-1 ring-violet-400/30 px-2 py-0.5 text-[10px] text-violet-300">4</span>
</label>
<label className="cursor-pointer flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-5">
<span className="inline-flex items-center gap-3">
<i className="h-4 w-4" data-lucide="bar-chart-2"></i>
<span className="font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Gallery</span>
</span>
<span className="inline-flex items-center gap-1 bg-violet-500/20 rounded-full ring-violet-400/30 ring-1 pt-1.5 pr-1.5 pb-1.5 pl-1.5">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="image" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(196, 181, 253)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</span>
</label>
<div className="my-4 h-px w-full bg-white/10"></div>
<label className="cursor-pointer flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-neutral-400 hover:text-white ring-1 ring-transparent transition-colors" htmlFor="nav-6">
<i className="h-4 w-4" data-lucide="headphones"></i>
<span className="font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Support</span>
</label>
</nav>

<div className="mt-auto">
<div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight text-white" style={{fontFamily: 'Inter, ui-sans-serif'}}>Tracked Packages</h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white/5 ring-1 ring-white/10 px-2 py-1 text-xs text-neutral-200 hover:bg-white/10 transition">
            
            4H
          </button>
</div>
<div className="mt-3 rounded-[18px] ring-1 ring-white/10 bg-gradient-to-t from-violet-600/15 to-transparent p-4 relative overflow-hidden">
<div className="overflow-hidden bg-neutral-950/60 w-full h-48 max-w-[260px] rounded-xl ring-white/10 ring-1 mr-auto ml-auto relative shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]">
<div className="rounded-full absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(70% 70% at 50% 60%, rgba(139,92,246,0.25), transparent 70%)'}}></div>
<svg className="w-[134px] h-[134px] absolute top-8 right-0 bottom-0 left-0" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(245, 245, 245)', width: '134px', height: '134px'}} viewbox="0 0 200 200">
<circle className="" cx="100" cy="100" fill="none" r="98" stroke="rgba(255,255,255,0.08)" strokeWidth="1"></circle>
<g stroke="rgba(255,255,255,0.08)" strokeWidth="0.5">
<circle cx="100" cy="100" fill="none" r="60"></circle>
<circle cx="100" cy="100" fill="none" r="30"></circle>
</g>
<path d="M20 130 C60 90, 80 160, 120 120 S170 70, 185 110" fill="none" stroke="url(#pulse-gradient)" stroke-dasharray="6 6" strokeWidth="3">
<animate attributename="stroke-dashoffset" dur="3s" from="0" repeatcount="indefinite" to="240"></animate>
</path>
<path d="M20 130 C60 90, 80 160, 120 120 S170 70, 185 110" fill="none" stroke="rgba(147,112,219,0.4)" stroke-dasharray="6 6" strokeWidth="2"></path>
<g fill="#c4b5fd" stroke="rgba(124,58,237,0.8)" strokeWidth="2">
<circle cx="60" cy="110" r="4">
<animate attributename="r" dur="1.5s" repeatcount="indefinite" values="4;6;4"></animate>
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0.8;1;0.8"></animate>
</circle>
<circle cx="120" cy="120" r="4">
<animate attributename="r" begin="0.5s" dur="1.5s" repeatcount="indefinite" values="4;6;4"></animate>
<animate attributename="opacity" begin="0.5s" dur="1.5s" repeatcount="indefinite" values="0.8;1;0.8"></animate>
</circle>
<circle cx="165" cy="95" r="4">
<animate attributename="r" begin="1s" dur="1.5s" repeatcount="indefinite" values="4;6;4"></animate>
<animate attributename="opacity" begin="1s" dur="1.5s" repeatcount="indefinite" values="0.8;1;0.8"></animate>
</circle>
</g>
<g fill="rgba(255,255,255,0.6)" fontFamily="Inter, ui-sans-serif" fontSize="10">
<text x="98" y="14">N</text>
<text x="98" y="194">S</text>
<text x="186" y="104">E</text>
<text x="8" y="104">W</text>
</g>
</svg>
<div className="absolute right-[22%] top-[46%]">
<span className="relative inline-flex">
<span className="absolute inline-flex h-6 w-6 rounded-full bg-violet-500/25 blur-md"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-white ring-2 ring-violet-400/60"></span>
</span>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 -bottom-6 h-20" style={{background: 'radial-gradient(60% 80% at 50% 0%, rgba(139,92,246,0.45), transparent 70%)', filter: 'blur(20px)'}}></div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40" style={{background: 'radial-gradient(60% 100% at 50% 100%, rgba(124,58,237,0.38), rgba(124,58,237,0.1) 60%, transparent 80%)', filter: 'blur(24px)'}}></div>
<style>
      input[name="nav"]:nth-of-type(1):checked ~ nav > div > div {
        transform: translateY(0);
      }
      input[name="nav"]:nth-of-type(2):checked ~ nav > div > div {
        transform: translateY(100%);
      }
      input[name="nav"]:nth-of-type(3):checked ~ nav > div > div {
        transform: translateY(200%);
      }
      input[name="nav"]:nth-of-type(4):checked ~ nav > div > div {
        transform: translateY(300%);
      }
      input[name="nav"]:nth-of-type(5):checked ~ nav > div > div {
        transform: translateY(400%);
      }
      input[name="nav"]:nth-of-type(6):checked ~ nav > div > div {
        transform: translateY(600%);
      }
      input[name="nav"]:checked + label {
        color: rgba(124, 58, 237, 1);
      }
    </style>
</div>
<style className="">
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes ping {
      0% { transform: scale(1); opacity: 0.25; }
      75%, 100% { transform: scale(1.5); opacity: 0; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }
  </style>
</aside>

<main className="flex-1 md:ml-72">
<section className="md:px-10 lg:px-16 md:pt-10 cursor-pointer pt-28 pr-6 pb-0 pl-6 relative" data-animate-section="hero" onclick="window.location.href='/#hero'" role="button">

<div className="max-w-3xl">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
      Based in Barcelona
    </span>
<h1 className="sm:text-6xl md:text-7xl animate-in text-5xl font-semibold text-white tracking-tight mt-6" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>Alexia Rivera</h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-300 mt-4 animate-in" data-animate-on-scroll="" style={{fontFamily: 'Inter, ui-sans-serif'}}>
      Visual storyteller capturing the essence of places and people.
      From bustling city streets to serene mountain peaks, every frame
      tells a story worth remembering.
    </p>
<div className="mt-6 flex flex-wrap gap-3 animate-in" data-animate-on-scroll="">
<a className="inline-flex items-center gap-2 hover:bg-white/20 transition text-sm font-medium text-white tracking-tight bg-white/10 rounded-full ring-white/10 ring-1 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        View Portfolio
      </a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-100 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4" href="#">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        Get in Touch
      </a>
</div>
</div>

<div className="absolute right-16 top-16 pointer-events-none opacity-60">
<div className="container-loader">
<div className="aro" style={{-S: '0'}}></div>
<div className="aro" style={{-S: '1'}}></div>
<div className="aro" style={{-S: '2'}}></div>
<div className="aro" style={{-S: '3'}}></div>
<div className="aro" style={{-S: '4'}}></div>
<div className="aro" style={{-S: '5'}}></div>
</div>
</div>

<div className="sm:h-[700px] flex h-[600px] mt-14 relative items-center justify-center" style={{perspective: '1200px'}}>

<div className="absolute w-64 sm:w-80 aspect-[3/4] rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 overflow-hidden shadow-2xl" id="hero-card-1" style={{transform: 'translateX(-280px) translateY(0px) rotateZ(-12deg) scale(1)', zIndex: '1', opacity: '1'}}>
<img alt="Alpine valley with granite peak" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a8c42df7-3d2a-452c-8609-33696606ae50_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="">
<p className="text-sm font-medium tracking-tight text-white">Dolomite Ridge</p>
<p className="text-xs text-neutral-300">36 photos</p>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] text-neutral-200">
<i className="h-3.5 w-3.5" data-lucide="mountain"></i>
        Alps
      </div>
</div>
</div>

<div className="absolute w-64 sm:w-80 aspect-[3/4] rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 overflow-hidden shadow-2xl" id="hero-card-2" style={{transform: 'translateX(0px) translateY(0px) rotateZ(0deg) scale(1.05)', zIndex: '3', opacity: '1', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px'}}>
<img alt="Minimal portrait in orange light" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/26b97548-f299-44e5-94a5-2757f54f3ef5_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="">
<p className="text-sm font-medium tracking-tight text-white">Amber Portraits</p>
<p className="text-xs text-neutral-300">22 photos</p>
</div>
<div className="inline-flex gap-1 text-[10px] text-neutral-200 bg-white/10 rounded-full pt-1 pr-2 pb-1 pl-2 backdrop-blur-md gap-x-1 gap-y-1 items-center">

        People
      </div>
</div>
</div>

<div className="absolute w-64 sm:w-80 aspect-[3/4] rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 overflow-hidden shadow-2xl" id="hero-card-3" style={{transform: 'translateX(280px) translateY(0px) rotateZ(12deg) scale(1)', zIndex: '2', opacity: '1'}}>
<img alt="Snowy village at dusk in the mountains" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/20ab0cf5-a1bf-4421-bdd9-e8f2963f8f28_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="">
<p className="text-sm font-medium tracking-tight text-white">Zermatt Nights</p>
<p className="text-xs text-neutral-300">41 photos</p>
</div>
<div className="inline-flex text-[10px] text-neutral-200 bg-white/10 rounded-full pt-1 pr-2 pb-1 pl-2 backdrop-blur-md gap-x-1 gap-y-1 items-center">

        Cityscape
      </div>
</div>
</div>

</div>

<div className="mt-12 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
<div className="inline-flex gap-2 bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
    
    12 international awards
  </div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">

    15+ years experience
  </div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">

    New work dropping in 5 days
  </div>
</div>
<style>
    .container-loader {
      width: 300px;
      height: 300px;
      position: relative;
      transform-style: preserve-3d;
      transform: perspective(500px) rotateX(60deg);
    }

    .container-loader .aro {
      position: absolute;
      inset: calc(var(--s) * 10px);
      box-shadow: inset 0 0 80px dodgerblue;
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      animation: standalone 3s infinite ease-in-out both;
      animation-delay: calc(var(--s) * -0.1s);
    }

    @keyframes standalone {
      0%,
      100% {
        transform: translateZ(-100px) scaleX(-1);
      }
      50% {
        transform: translateZ(100px) scaleX(1);
      }
    }
  </style>

</section>

<section className="md:px-10 lg:px-16 overflow-hidden pt-16 pr-6 pb-16 pl-6 relative" data-animate-section="portraits" style={{maskImage: 'linear-gradient(90deg, transparent, black 50%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 50%, black 70%, transparent)'}}>
<div className="max-w-3xl">
<h2 className="font-semibold tracking-tight text-4xl sm:text-5xl text-white animate-in" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
      Portrait Stories
    </h2>
<p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed animate-in" data-animate-on-scroll="" style={{fontFamily: 'Inter, ui-sans-serif'}}>
      A cinematic gallery where the subject stays in focus while
      memories drift softly in the background.
    </p>
</div>

<div aria-hidden="true" className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(80% 60% at 50% 40%, rgba(255,255,255,0.06), transparent 60%)'}}></div>
</div>

<div className="relative mt-16 h-[540px] sm:h-[620px] lg:h-[700px] flex items-center justify-center animate-in" data-animate-on-scroll="" id="cinema-stage" style={{perspective: '1400px', transformStyle: 'preserve-3d'}}>

<div className="flex absolute inset-0 items-center justify-center" id="bg-track" style={{overflow: 'visible'}}>
<div className="flex gap-6 items-center justify-center" id="scrolling-container" style={{animation: 'scrollRightToLeft 40s linear infinite'}}>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Soft portrait on a beach at dusk" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4ad192a4-d049-45ab-a69c-6de6c857af95_800w.webp"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Portrait in warm ambient light" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e31a34f-3d28-472a-acfa-a6946e1fb4a4_800w.webp"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Urban portrait at night" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/007bfe22-41b5-4205-8fca-20f150ac65c3_800w.webp"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Minimal studio portrait" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1a547482-750d-4395-80aa-aaa0985d73ef_800w.webp"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Portrait in golden hour" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/02308c18-f0eb-4b0d-a5a3-de2bfd79dae8_800w.jpg"/>
<div className="bg-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Portrait with dramatic lighting" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e2bf0a2e-bf4e-4e77-8b0f-06fa236805b3_800w.jpg"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>

<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Soft portrait on a beach at dusk" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5316d315-a42c-4088-8125-0168a22b6108_800w.jpg"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Portrait in warm ambient light" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3f1ce1e-0214-4406-9122-f084f36f4fc8_800w.jpg"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Urban portrait at night" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4239f65-c647-458d-b02f-57640ce3f623_800w.jpg"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Minimal studio portrait" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dde0f7e7-d701-4a25-8459-61f8941c9082_800w.webp"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Portrait in golden hour" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/02f1afb2-6dc1-4e90-a72e-c9e5742e1863_800w.webp"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
<figure className="bg-card w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl flex-shrink-0" style={{filter: 'blur(3px) brightness(0.6) saturate(0.9)', opacity: '0.5'}}>
<img alt="Portrait with dramatic lighting" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/74190566-db9a-4e8d-a7f1-861414d36aa7_800w.webp"/>
<div className="absolute inset-0 bg-black/50"></div>
</figure>
</div>
</div>

<div className="absolute z-30 flex items-center justify-center inset-0 pointer-events-none">
<figure className="mx-auto w-64 sm:w-80 lg:w-[28rem] aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 shadow-2xl" style={{transform: 'translateZ(120px)', boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)'}}>
<img alt="Subject facing a roaring waterfall, bright jacket against mist" className="size-full object-cover absolute inset-0 w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7af84a6b-08df-48d8-93c9-11f1f36cb8cd_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/50 via-black/10 to-transparent absolute inset-0"></div>
</figure>
</div>
</div>
<style>
    @keyframes scrollRightToLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    #scrolling-container:hover {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      #scrolling-container {
        animation: none !important;
      }
    }
  </style>
</section>
<section className="md:px-10 lg:px-16 overflow-hidden pt-16 pr-6 pb-0 pl-6 relative" data-animate-section="prints" style={{maskImage: 'linear-gradient(180deg, transparent, black 35%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 35%, black 65%, transparent)'}}>

<div className="max-w-3xl mx-auto text-center">
<h2 className="font-semibold tracking-tight text-4xl sm:text-5xl text-white" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
              Prints
            </h2>
<p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed" data-animate-on-scroll="" style={{fontFamily: 'Inter, ui-sans-serif'}}>
              Transform your walls with the beauty of my photography.
            </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 hover:text-white transition active:scale-[.98]" data-animate-on-scroll="" href="#" style={{fontFamily: 'Inter, ui-sans-serif'}}>
                View Print Store
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute -top-10 right-0 w-[70%] h-[60%] opacity-30" style={{background: 'radial-gradient(80% 60% at 80% 0%, rgba(255,255,255,0.18), transparent 60%)'}}></div>
<div className="absolute inset-0" style={{background: 'repeating-linear-gradient(15deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 10px)', maskImage: 'radial-gradient(150% 80% at 50% 0%, black 0%, transparent 60%)', WebkitMaskImage: 'radial-gradient(150% 80% at 50% 0%, black 0%, transparent 60%)', opacity: '.12'}}></div>
</div>

<div className="mt-14 relative" data-animate-on-scroll="" style={{maskImage: 'linear-gradient(180deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 50%, black 50%, transparent)'}}>

<div className="pointer-events-none absolute inset-0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)'}}></div>
<div className="sm:h-[620px] lg:h-[680px] overflow-hidden h-[560px] max-w-6xl mr-auto ml-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full gap-x-6 gap-y-6">

<div className="relative h-full overflow-hidden">
<div className="flex flex-col gap-6 will-change-transform" style={{animation: 'colUp 28s linear infinite'}}>

<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Desert dunes at golden hour" className="size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d69ec5d5-dc2c-410c-892e-afd3a24c8c4e_800w.webp"/>
</figure>
<figure className="overflow-hidden aspect-[16/10] bg-neutral-900/50 ring-white/10 ring-1 rounded-2xl shadow-2xl">
<img alt="Coastal cliffs at dusk" className="size-full w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a3b735bd-fc16-4990-9954-3912ff7e89b7_800w.jpg"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Foggy forest morning" className="size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7af84a6b-08df-48d8-93c9-11f1f36cb8cd_800w.jpg"/>
</figure>

<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Desert dunes at golden hour (duplicate)" className="size-full object-cover" src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&amp;q=80"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[16/10]">
<img alt="Coastal cliffs at dusk (duplicate)" className="size-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&amp;q=80"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Foggy forest morning (duplicate)" className="size-full object-cover" src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1200&amp;q=80"/>
</figure>
</div>
</div>

<div className="overflow-hidden h-full relative">
<div className="flex flex-col gap-6 will-change-transform gap-x-6 gap-y-6" style={{animation: 'colDown 32s linear infinite'}}>

<figure className="overflow-hidden aspect-[16/10] bg-neutral-900/50 ring-white/10 ring-1 rounded-2xl shadow-2xl">
<img alt="Monument valley at twilight" className="size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/552372ea-1984-46f9-b097-6c7333af706f_800w.webp"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Tokyo tower at night" className="size-full w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46bbb147-bb49-4dc2-9a4d-48f56b0dc37c_800w.jpg"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[16/10]">
<img alt="Glacier pool from above" className="size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/503f5e84-40c9-4010-80cd-86af53c72d05_800w.jpg"/>
</figure>

<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[16/10]">
<img alt="Monument valley at twilight (duplicate)" className="size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b7558e2-3162-43fd-ab5b-846ccb4b80b4_800w.jpg"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Tokyo tower at night (duplicate)" className="size-full object-cover" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&amp;q=80"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[16/10]">
<img alt="Glacier pool from above (duplicate)" className="size-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&amp;q=80"/>
</figure>
</div>
</div>

<div className="relative h-full overflow-hidden">
<div className="flex flex-col gap-6 will-change-transform" style={{animation: 'colUp 30s linear infinite'}}>

<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Red pagoda at night" className="size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/51a6204f-9b17-4489-bc18-48806292f457_800w.jpg"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[16/10]">
<img alt="Alpine lake at sunrise" className="size-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&amp;q=80"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Snowy mountain range" className="size-full object-cover" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&amp;q=80"/>
</figure>

<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Red pagoda at night (duplicate)" className="size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e31a34f-3d28-472a-acfa-a6946e1fb4a4_800w.webp"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[16/10]">
<img alt="Alpine lake at sunrise (duplicate)" className="size-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&amp;q=80"/>
</figure>
<figure className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
<img alt="Snowy mountain range (duplicate)" className="size-full object-cover" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&amp;q=80"/>
</figure>
</div>
</div>
</div>
</div>
</div>
<style>
            @keyframes colUp {
              0%   { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            @keyframes colDown {
              0%   { transform: translateY(-50%); }
              100% { transform: translateY(0); }
            }
            @media (hover: hover) {
              /* Pause animation when hovering any column */
              [data-element-id="aura-emhs6eqnz1ist2q6q"] .relative.h-full:hover > div {
                animation-play-state: paused !important;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              [data-element-id="aura-emhs6eqnz1ist2q6q"] div[style*="animation"] {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
              }
            }
          </style>
</section>
<section className="md:px-10 lg:px-16 overflow-visible pt-24 pr-6 pb-16 pl-6 relative" data-animate-section="featured">
<div className="max-w-7xl mr-auto ml-auto">
<div className="max-w-3xl mb-16">
<h2 className="font-semibold tracking-tight text-4xl sm:text-5xl text-white" data-animate-on-scroll="" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
      Featured Work
    </h2>
<p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed" data-animate-on-scroll="" style={{fontFamily: 'Inter, ui-sans-serif'}}>
      A curated selection of my most celebrated captures from around
      the world.
    </p>
</div>
<div className="masonry-grid" data-animate-on-scroll="">
<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Northern lights over mountain range" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&amp;q=80"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30 px-3 py-1 text-xs text-emerald-300 mb-3 w-fit">
<i className="h-3.5 w-3.5" data-lucide="award"></i>
            Award Winner
          </span>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Arctic Dreams
          </h3>
<p className="text-sm text-neutral-300 mb-4">
            Lofoten Islands, Norway · 2023
          </p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 ring-1 ring-white/20 px-4 py-2 text-sm text-white transition w-fit">
<i className="h-4 w-4" data-lucide="eye"></i>
            View Details
          </button>
</div>
</div>
</figure>
<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Neon-lit Tokyo street at night" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&amp;q=80"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Neon Nights
          </h3>
<p className="text-sm text-neutral-300 mb-4">Tokyo, Japan · 2024</p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 ring-1 ring-white/20 px-4 py-2 text-sm text-white transition w-fit">
<i className="h-4 w-4" data-lucide="eye"></i>
            View Details
          </button>
</div>
</div>
</figure>
<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Misty forest path" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&amp;q=80"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Ethereal Path
          </h3>
<p className="text-sm text-neutral-300 mb-4">
            Black Forest, Germany · 2023
          </p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 ring-1 ring-white/20 px-4 py-2 text-sm text-white transition w-fit">
<i className="h-4 w-4" data-lucide="eye"></i>
            View Details
          </button>
</div>
</div>
</figure>
<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Desert sand dunes panorama" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1800&amp;q=80"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Golden Silence
          </h3>
<p className="text-sm text-neutral-300 mb-4">
            Sahara Desert, Morocco · 2022
          </p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 ring-1 ring-white/20 px-4 py-2 text-sm text-white transition w-fit">
<i className="h-4 w-4" data-lucide="eye"></i>
            View Details
          </button>
</div>
</div>
</figure>
<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Icelandic waterfall" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&amp;q=80"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Frozen Falls
          </h3>
<p className="text-sm text-neutral-300 mb-4">Iceland · 2024</p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 ring-1 ring-white/20 px-4 py-2 text-sm text-white transition w-fit">
<i className="h-4 w-4" data-lucide="eye"></i>
            View Details
          </button>
</div>
</div>
</figure>
<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Venice canal reflections" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&amp;q=80"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Venetian Mirror
          </h3>
<p className="text-sm text-neutral-300 mb-4">Venice, Italy · 2023</p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 ring-1 ring-white/20 px-4 py-2 text-sm text-white transition w-fit">
<i className="h-4 w-4" data-lucide="eye"></i>
            View Details
          </button>
</div>
</div>
</figure>
<figure className="masonry-item group relative overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 shadow-2xl hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-500 rounded-3xl" style={{perspective: '1000px'}}>
<div className="masonry-inner transition-all duration-500">
<img alt="Mountain summit at sunrise" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&amp;q=80"/>
<div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" style={{transform: 'translateZ(50px)'}}>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
            Peak Light
          </h3>
<p className="text-sm text-neutral-300 mb-4">Swiss Alps · 2022</p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 ring-1 ring-white/20 px-4 py-2 text-sm text-white transition w-fit">
<i className="h-4 w-4" data-lucide="eye"></i>
            View Details
          </button>
</div>
</div>
</figure>
</div>
<div className="text-center mt-12" data-animate-on-scroll="">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-3 text-sm font-medium tracking-tight transition active:scale-[.98]" href="#">
<i className="h-4.5 w-4.5" data-lucide="grid-3x3"></i>
      Explore Full Gallery
    </a>
</div>
<style>
    .masonry-grid {
      column-count: 1;
      column-gap: 1.5rem;
    }
    
    @media (min-width: 640px) {
      .masonry-grid {
        column-count: 2;
      }
    }
    
    @media (min-width: 1024px) {
      .masonry-grid {
        column-count: 3;
      }
    }
    
    .masonry-item {
      break-inside: avoid;
      margin-bottom: 1.5rem;
      display: inline-block;
      width: 100%;
      transform-style: preserve-3d;
    }
    
    .masonry-inner {
      position: relative;
      transform-style: preserve-3d;
    }
    
    .masonry-item:hover .masonry-inner {
      transform: rotateY(-5deg) rotateX(5deg) translateZ(20px);
    }
    
    .masonry-overlay {
      transform-style: preserve-3d;
    }
    
    @media (prefers-reduced-motion: reduce) {
      .masonry-item:hover .masonry-inner {
        transform: none;
      }
    }
  </style>

</div>
</section><section className="md:px-10 lg:px-16 overflow-hidden bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e73e3ff1-b75b-4b03-ab0d-e7e72b6fcd89_1600w.jpg)] bg-cover pt-24 pr-6 pb-16 pl-6 relative" data-animate-section="featured" style={{maskImage: 'linear-gradient(90deg, transparent, black 40%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 40%, black 75%, transparent)'}}>
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mt-44" data-animate-on-scroll="">

<div className="m sm:px-6 max-w-7xl rounded-none mr-auto ml-auto pr-4 pl-4 relative">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-3xl" style={{background: 'radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.06), transparent 70%), linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.04) 100%)'}}></div>

<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
      Let's Connect
    </h2>

<div className="mt-4 mb-4 inline-flex flex-wrap items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm text-neutral-200" href="#">
      
        Twitter
      </a>
<a className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm text-neutral-200" href="#">
      
        Instagram
      </a>
<a className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm text-neutral-200" href="mailto:hello@orion.studio">
      
        Email
      </a>
</div>

<div className="flex overflow-visible [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-gradient-to-b from-white/5 to-white/0 h-[80vh] border-white/10 border rounded-3xl relative backdrop-blur-none items-center justify-center">

<figure className="card-hover-stack absolute w-64 sm:w-80 lg:w-[28rem] aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl will-change-transform transition-all duration-400" style="
      --dx:-90px; --dy:0px; --rz:-6deg;
      left:50%; top:50%;
      transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) rotateZ(var(--rz));
      background-color:#2b223f;
    ">
<img alt="Portrait with orange jacket in snowy mountains" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f08499a4-d78c-459b-a6da-59884185df4b_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-900/80">
<div className="filledbar-custom h-full transition-all duration-600" style={{width: '0%', background: 'linear-gradient(90deg, #6831cfab, #a777ff 100%)'}}></div>
</div>
</figure>

<figure className="card-hover-stack absolute w-64 sm:w-80 lg:w-[28rem] aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl will-change-transform transition-all duration-400" style="
      --dx:90px; --dy:0px; --rz:6deg;
      left:50%; top:50%;
      transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) rotateZ(var(--rz));
      background-color:#2b223f;
    ">
<img alt="Mountain landscape" className="absolute inset-0 size-full object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f04c45a8-5b56-4e24-8f84-49b2f5c552d8_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-900/80">
<div className="filledbar-custom h-full transition-all duration-600" style={{width: '0%', background: 'linear-gradient(90deg, #6831cfab, #a777ff 100%)'}}></div>
</div>
</figure>
</div>

<div className="sm:mt-12 sm:px-4 text-neutral-300 bg-black/50 w-full max-w-5xl rounded-xl ring-white/10 ring-1 mt-12 mr-auto ml-auto pt-4 pr-3 pb-4 pl-3 backdrop-blur">
<div className="flex items-center justify-between">
<div className="hidden sm:flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 ring-1 ring-white/10 bg-white/5 text-xs">
<i className="h-3.5 w-3.5" data-lucide="mail"></i>
            hello@orion.studio
          </span>
<span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 ring-1 ring-white/10 bg-white/5 text-xs">
<i className="h-3.5 w-3.5" data-lucide="instagram"></i>
            @orion.photo
          </span>
</div>
<button className="inline-flex gap-1.5 hover:bg-white/10 transition text-xs bg-white/5 ring-white/10 ring-1 rounded-md ml-auto pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center" data-scrolltop="" id="#hero">
<span className="">Scroll to Top</span>
<i className="w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="chevron-up" strokeWidth="2" style={{color: 'rgb(212, 212, 212)', width: '14px', height: '14px'}}></i>
</button>
<span className="hidden sm:inline text-xs text-neutral-400 ml-4">© 2025 Orion Studio</span>
</div>
</div>
<style className="">
      .card-hover-stack {
        box-shadow: -1rem 0 3rem rgba(0, 0, 0, 0.267);
      }
      
      .card-hover-stack:hover {
        transform: translateX(var(--tx, 0)) translateY(-20px) rotateZ(var(--rz, 0deg)) !important;
        text-shadow: 2px 2px 8px #6e5b94;
      }
      
      .card-hover-stack:hover .filledbar-custom {
        width: 100% !important;
      }
      
      .card-hover-stack:hover ~ .card-hover-stack {
        left: 50px !important;
        transform: translateX(var(--tx, 0)) rotateX(-15deg) rotateY(10deg) rotateZ(var(--rz, 0deg)) !important;
      }
      .card-hover-stack:hover {
  transform:
    translate(calc(-50% + var(--dx)), calc(-50% + var(--dy) - 20px))
    rotateZ(var(--rz)) !important;
}
    </style>

</div>


</div>
<style>
    .masonry-grid {
      column-count: 1;
      column-gap: 1.5rem;
    }
    
    @media (min-width: 640px) {
      .masonry-grid {
        column-count: 2;
      }
    }
    
    @media (min-width: 1024px) {
      .masonry-grid {
        column-count: 3;
      }
    }
    
    .masonry-item {
      break-inside: avoid;
      margin-bottom: 1.5rem;
      display: inline-block;
      width: 100%;
      transform-style: preserve-3d;
    }
    
    .masonry-inner {
      position: relative;
      transform-style: preserve-3d;
    }
    
    .masonry-item:hover .masonry-inner {
      transform: rotateY(-5deg) rotateX(5deg) translateZ(20px);
    }
    
    .masonry-overlay {
      transform-style: preserve-3d;
    }
    
    @media (prefers-reduced-motion: reduce) {
      .masonry-item:hover .masonry-inner {
        transform: none;
      }
    }
  </style>

</div>
</section>
</main>

</div>


<style>
      @media (max-width: 767px) { #card-1, #card-2, #card-3 { transform: translateX(0) translateY(0) scale(1) !important; position: relative !important; margin-bottom: 1.5rem; } .grid.grid-cols-1.sm\:grid-cols-3 { grid-template-columns: 1fr !important; } #cinema-stage { height: auto !important; perspective: none !important; } #cinema-stage .bg-card { position: relative !important; transform: none !important; filter: none !important; opacity: 1 !important; margin-bottom: 1rem; } #cinema-stage .absolute.z-30 { position: relative !important; margin-bottom: 1rem; } #bg-track { display: none; } } [data-animate-on-scroll] { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1); } [data-animate-on-scroll].animate-in { opacity: 1; transform: translateY(0); }
    </style>


    </>
  );
}
