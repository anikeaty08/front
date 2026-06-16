import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Scrollable section functionality
    document.addEventListener('DOMContentLoaded', function() {
      const container = document.getElementById('scrollable-container');
      const leftBtn = document.getElementById('scroll-left');
      const rightBtn = document.getElementById('scroll-right');
      
      if (!container || !leftBtn || !rightBtn) return;
      
      const scrollAmount = 320; // Card width + gap
      
      function updateButtons() {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        leftBtn.disabled = scrollLeft <= 0;
        rightBtn.disabled = scrollLeft >= scrollWidth - clientWidth - 10;
      }
      
      leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
      
      rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
      
      container.addEventListener('scroll', updateButtons);
      
      // Initial button state
      updateButtons();
      
      // Initialize lucide icons for this section
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  


      // Init icons
      window.lucide && window.lucide.createIcons();

      const header = document.querySelector('header');
      const nav = document.getElementById('site-nav');
      const megaPC = document.getElementById('mega-pc');

      let hideTimer;

      function showMega(panel) {
        if (!panel) return;
        panel.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
        panel.classList.add('opacity-100');
      }
      function hideMega(panel) {
        if (!panel) return;
        panel.classList.add('opacity-0', 'pointer-events-none');
        // Delay setting invisible to allow fade-out
        setTimeout(() => panel.classList.add('invisible'), 150);
      }

      // Desktop hover/focus handling
      if (nav) {
        nav.addEventListener('pointerenter', (e) => {
          const target = e.target.closest('[data-mega]');
          if (!target) return;
          const type = target.getAttribute('data-mega');
          clearTimeout(hideTimer);
          if (type === 'pc') {
            showMega(megaPC);
            target.setAttribute('aria-expanded', 'true');
          } else {
            hideMega(megaPC);
            const expanded = nav.querySelector('[aria-expanded="true"]');
            if (expanded) expanded.setAttribute('aria-expanded', 'false');
          }
        });

        nav.addEventListener('pointerover', (e) => {
          const target = e.target.closest('[data-mega]');
          if (!target) return;
          const type = target.getAttribute('data-mega');
          if (type === 'pc') {
            clearTimeout(hideTimer);
            showMega(megaPC);
            target.setAttribute('aria-expanded', 'true');
          }
        });

        header.addEventListener('mouseleave', () => {
          hideTimer = setTimeout(() => {
            hideMega(megaPC);
            const expanded = nav.querySelector('[aria-expanded="true"]');
            if (expanded) expanded.setAttribute('aria-expanded', 'false');
          }, 120);
        });
      }

      // Mobile panel toggle
      const mobileToggle = document.getElementById('mobile-toggle');
      const mobilePanel = document.getElementById('mobile-panel');
      if (mobileToggle && mobilePanel) {
        mobileToggle.addEventListener('click', () => {
          const open = mobilePanel.classList.toggle('hidden') === false;
          mobileToggle.setAttribute('aria-expanded', String(open));
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.setAttribute('data-lucide', open ? 'x' : 'menu');
            window.lucide.createIcons();
          }
        });

        // Mobile accordion for PC
        const accTrigger = mobilePanel.querySelector('[data-accordion="pc"]');
        const accPanel = accTrigger?.nextElementSibling;
        accTrigger?.addEventListener('click', () => {
          const expanded = accPanel.classList.toggle('hidden') === false;
          const chevron = accTrigger.querySelector('[data-lucide="chevron-down"]');
          if (chevron) chevron.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
        });
      }

      // Close mega on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          hideMega(megaPC);
          const expanded = nav?.querySelector('[aria-expanded="true"]');
          if (expanded) expanded.setAttribute('aria-expanded', 'false');
        }
      });

      // Additional Lucide init for new cards
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative z-50">

<div className="w-full bg-black/95 border-b border-neutral-900/70" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-sm ring-1 ring-lime-400/70" style={{}}>
<span className="h-4 w-4 rounded-full bg-lime-400/90 shadow-[0_0_12px_theme(colors.lime.400)]" style={{}}></span>
</span>
<span className="hidden sm:block text-[18px] font-bold text-white/90 tracking-tight font-geist-mono" style={{}}>RAZER</span>
</a>

<nav className="hidden md:flex gap-8 text-[15px] items-center" id="site-nav">
<button className="nav-link hover:text-lime-400 hover:bg-lime-400/10 transition text-white/80 tracking-tight font-geist-mono rounded-md pt-2 pr-3 pb-2 pl-3" data-mega="none" style={{}} type="button">Store</button>
<button aria-expanded="false" aria-haspopup="true" className="nav-link hover:text-lime-400 hover:bg-lime-400/10 transition font-medium text-white tracking-tight font-geist-mono rounded-md pt-2 pr-3 pb-2 pl-3" data-mega="pc" style={{}} type="button">PC</button>
<button className="nav-link hover:text-lime-400 hover:bg-lime-400/10 transition text-white/80 tracking-tight font-geist-mono rounded-md pt-2 pr-3 pb-2 pl-3" data-mega="none" style={{}} type="button">Console</button>
<button className="nav-link text-white/80 hover:text-lime-400 hover:bg-lime-400/10 transition whitespace-nowrap font-geist-mono tracking-tight px-3 py-2 rounded-md" data-mega="none" style={{}} type="button">Furniture &amp; Lifestyle</button>
<button className="nav-link text-white/80 hover:text-lime-400 hover:bg-lime-400/10 transition whitespace-nowrap font-geist-mono tracking-tight px-3 py-2 rounded-md" data-mega="none" style={{}} type="button">Gold &amp; Silver</button>
<button className="nav-link text-white/80 hover:text-lime-400 hover:bg-lime-400/10 transition font-geist-mono tracking-tight px-3 py-2 rounded-md" data-mega="none" style={{}} type="button">Community</button>
<button className="nav-link text-white/80 hover:text-lime-400 hover:bg-lime-400/10 transition font-geist-mono tracking-tight px-3 py-2 rounded-md" data-mega="none" style={{}} type="button">Support</button>
</nav>

<div className="flex items-center gap-3 md:gap-4">
<button aria-label="Search" className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40" style={{}}>
<svg className="lucide lucide-search h-5 w-5 text-white/85" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Cart" className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40" style={{}}>
<svg className="lucide lucide-shopping-cart h-5 w-5 text-white/85" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>

<button aria-controls="mobile-panel" aria-expanded="false" aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40" id="mobile-toggle" style={{}}>
<svg className="lucide lucide-menu h-6 w-6 text-white/90" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="transition duration-200 absolute left-0 right-0 top-14 bg-neutral-900/95 border-b shadow-2xl border-lime-500/60 opacity-100 opacity-0 pointer-events-none invisible" id="mega-pc" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-8 overflow-x-auto py-4 text-[15px]">
<span className="whitespace-nowrap font-medium font-geist-mono tracking-tight text-lime-400" style={{}}>Laptops &amp; Accessories</span>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Mice</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Mats</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Keyboards</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Controllers</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Headsets</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Speakers</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Chairs</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Content Creation</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>PC Components</button>
<button className="whitespace-nowrap text-white/85 hover:text-white font-geist-mono tracking-tight" style={{}}>Software</button>
</div>

<div className="h-px w-full bg-neutral-800" style={{}}></div>

<div className="grid grid-cols-5 gap-2 pt-6 pb-6 max-w-4xl mx-auto" id="aura-emeytmnob">

<a className="group relative flex flex-col items-center gap-2 p-3 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40" href="#" style={{}}>
<div className="relative">
<svg className="lucide lucide-laptop h-12 w-12 text-white/90" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
<span className="absolute -right-2 -top-2 rounded-sm bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium text-white/90 ring-1 ring-neutral-700 font-geist-mono tracking-tight" style={{}}>AMD</span>
</div>
<div className="text-center">
<p className="text-[14px] font-medium text-white/90 font-geist-mono tracking-tight" style={{}}>Blade 14</p>
<span className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 font-geist-mono tracking-tight bg-lime-500/15 text-lime-400 ring-lime-500/40" style={{}}>NEW</span>
</div>
</a>

<a className="group relative flex flex-col items-center gap-2 p-3 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40" href="#" style={{}}>
<div className="relative">
<svg className="lucide lucide-laptop h-12 w-12 text-white/90" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
<span className="absolute -right-2 -top-2 rounded-sm bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium text-white/90 ring-1 ring-neutral-700 font-geist-mono tracking-tight" style={{}}>AMD</span>
</div>
<div className="text-center">
<p className="text-[14px] font-medium text-white/90 font-geist-mono tracking-tight" style={{}}>Blade 16</p>
<span className="inline-flex items-center text-[11px] ring-1 ring-lime-500/40 font-medium text-lime-400 tracking-tight font-geist-mono bg-lime-500/15 rounded-full mt-1 pt-0.5 pr-2 pb-0.5 pl-2" style={{}}>NEW</span>
</div>
</a>

<a className="group relative flex flex-col items-center gap-2 p-3 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40" href="#" style={{}}>
<div className="relative">
<svg className="lucide lucide-laptop h-12 w-12 text-white/90" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
</div>
<div className="text-center">
<p className="text-[14px] font-medium text-white/90 font-geist-mono tracking-tight" style={{}}>Blade 18</p>
<span className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 font-geist-mono tracking-tight bg-lime-500/15 text-lime-400 ring-lime-500/40" style={{}}>NEW</span>
</div>
</a>

<a className="group relative flex flex-col items-center gap-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40 rounded-md pt-3 pr-3 pb-3 pl-3" href="#" style={{}}>
<div className="relative flex items-center">
<svg className="lucide lucide-arrow-left-right h-12 w-12 text-white/90" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
<div className="text-center">
<p className="text-[14px] font-medium text-white/90 tracking-tight font-geist-mono" style={{}}>Compare</p>
</div>
</a>

<a className="group relative flex flex-col items-center gap-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400/40 rounded-md pt-3 pr-3 pb-3 pl-3" href="#" style={{}}>
<div className="relative flex items-center">
<svg className="lucide lucide-plug h-12 w-12 text-white/90" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
</div>
<div className="text-center">
<p className="text-[14px] font-medium text-white/90 tracking-tight font-geist-mono" style={{}}>Accessories</p>
</div>
</a>
</div>
</div>
<div className="h-[2px] w-full bg-lime-500/70 shadow-[0_0_18px_theme(colors.lime.500/60)]" style={{}}></div>
</div>

<div className="md:hidden hidden border-b border-neutral-900/70 bg-neutral-950" id="mobile-panel" style={{}}>
<div className="px-4 py-3 space-y-1">
<button className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[16px] text-white/90 hover:bg-white/5" data-accordion="pc">
<span className="font-geist-mono tracking-tight" style={{}}>PC</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-white/80 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden pl-3">
<div className="py-2 grid grid-cols-2 gap-2 text-[14px]">
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Laptops &amp; Accessories</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Mice</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Mats</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Keyboards</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Controllers</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Headsets</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Speakers</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Chairs</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Content Creation</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>PC Components</a>
<a className="px-2 py-1 rounded hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Software</a>
</div>
</div>
<a className="block px-2 py-2 rounded-md text-[16px] text-white/80 hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Store</a>
<a className="block px-2 py-2 rounded-md text-[16px] text-white/80 hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Console</a>
<a className="block px-2 py-2 rounded-md text-[16px] text-white/80 hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Mobile</a>
<a className="block px-2 py-2 rounded-md text-[16px] text-white/80 hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Furniture &amp; Lifestyle</a>
<a className="block px-2 py-2 rounded-md text-[16px] text-white/80 hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Gold &amp; Silver</a>
<a className="block px-2 py-2 rounded-md text-[16px] text-white/80 hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Community</a>
<a className="block px-2 py-2 rounded-md text-[16px] text-white/80 hover:bg-white/5 font-geist-mono tracking-tight" href="#" style={{}}>Support</a>
</div>
</div>
</header>
<main className="">

<section className="relative overflow-hidden sm:pt-20 sm:pb-24 pt-16 pb-16" id="gaming-laptops">
<div className="mx-auto max-w-7xl px-6">

<div className="text-center">
<h1 className="sm:text-5xl md:text-6xl drop-shadow-[0_0_25px_rgba(16,185,129,0.35)] text-4xl font-bold text-lime-400 tracking-wide font-geist-mono" style={{}}>
              GAMING LAPTOPS
            </h1>
<p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-zinc-400 font-geist-mono tracking-tight" style={{}}>
              Peak performance meets ultra‑portable design. Power your play, work, and creativity with machines tuned for high FPS, brilliant displays, and all‑day efficiency.
            </p>

<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 hover:bg-sky-500 transition text-sm font-medium text-white bg-sky-600 rounded-none pt-2.5 pr-4 pb-2.5 pl-4" href="#">
<svg className="lucide lucide-app-window h-4 w-4" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
<span className="font-geist-mono tracking-tight" style={{}}>Windows | Get to know Windows 11</span>
</a>
</div>
</div>

<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300" style={{}}>
<svg className="lucide lucide-cpu h-3.5 w-3.5 text-lime-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-geist-mono tracking-tight" style={{}}>Latest-gen CPUs</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300" style={{}}>
<svg className="lucide lucide-gpu h-3.5 w-3.5 text-lime-400" data-lucide="gpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 21V3"></path><path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"></path><path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"></path><circle cx="16" cy="11" r="2"></circle><circle cx="8" cy="11" r="2"></circle></svg>
<span className="font-geist-mono tracking-tight" style={{}}>High-end GPUs</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300" style={{}}>
<svg className="lucide lucide-monitor h-3.5 w-3.5 text-lime-400" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<span className="font-geist-mono tracking-tight" style={{}}>240Hz+ Displays</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300" style={{}}>
<svg className="lucide lucide-battery-charging h-3.5 w-3.5 text-lime-400" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
<span className="font-geist-mono tracking-tight" style={{}}>Fast charge</span>
</div>
</div>

<div className="mt-14 grid grid-cols-1 gap-10 items-center">
<div className="relative w-full max-w-none mx-auto">
<img alt="Gaming laptops showcase" className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b8246183-6cc4-4d79-9ee5-b7c14bc80f44_1600w.jpg" style={{}}/>
<div className="absolute inset-0 rounded-xl default"></div><div className="absolute inset-0 default bg-gradient-to-br from-neutral-950/90 via-transparent to-neutral-950/80 rounded-xl" style={{background: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(10, 10, 10, 0.8) 20%, rgba(10, 10, 10, 0.4) 50%, transparent 70%)'}}></div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<div className="relative z-10 max-w-6xl sm:pt-20 md:pt-4 mr-auto ml-auto pt-16">

<div className="flex flex-col items-center text-center">
<span className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[13px] font-medium font-geist-mono tracking-tight border-lime-400/30 bg-lime-400/10 text-lime-400" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-lime-400" style={{}}></span>
              New
            </span>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-geist-mono font-bold" style={{}}>
              Razer Blade 14
            </h1>
<p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-400 font-geist-mono tracking-tight" style={{}}>
              Ultra-Portable 14-Inch Gaming Laptop
            </p>
<div className="mt-6 flex items-center gap-8">
<a className="group inline-flex items-center sm:text-base text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#" style={{}}>
                Learn More
                <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="group inline-flex items-center text-sm sm:text-base font-medium font-geist-mono tracking-tight text-lime-400" href="#" style={{}}>
                Buy Now
                <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="relative sm:mt-12 md:mt-16 w-full max-w-6xl mt-10 mr-auto ml-auto">

<div className="absolute inset-0 mx-auto h-[32rem] max-h-[60vh] w-[90%] rounded-[100%] blur-3xl bg-lime-500/5" style={{}}></div>

<div className="relative flex h-[420px] sm:h-[520px] md:h-[560px] mr-auto ml-auto items-center justify-center">

<img alt="Gaming laptop background" className="absolute inset-0 w-full h-full opacity-60 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/24e67c5e-c9f2-4046-8d9e-b21f332cb3ae_1600w.jpg" style={{}}/>

<div className="relative origin-center -rotate-12 sm:-rotate-[14deg] drop-shadow-[0_10)] z-10">
</div>

<div className="relative -ml-8 origin-center rotate-12 sm:rotate-[14deg] z-10">
</div>
</div>

<div className="mx-auto mt-2 h-16 w-3/4 rounded-full bg-black/50 blur-2xl"></div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-12 pt-10 pr-4 pb-10 pl-4">
<header className="max-w-6xl mx-auto mb-10">
<h1 className="sm:text-4xl text-3xl font-bold tracking-tight font-geist-mono text-center" style={{}}>THE RAZER BLADE FAMILY</h1>
</header>
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 h-[520px]" style={{}}>

<img alt="Laptop illuminated in a dark scene" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fd8cc52f-a7ea-4697-bc05-8c4ae56c02ca_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" style={{}}></div>

<div className="absolute inset-0 p-6 sm:p-8 pointer-events-none group-hover:pointer-events-auto">

<div className="absolute inset-0 group-hover:bg-[#44D62C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

<div className="relative h-full flex flex-col">

<div className="text-center pt-8 pb-4">

<h3 className="text-2xl sm:text-3xl tracking-tight group-hover:text-black text-white uppercase font-geist-mono font-bold" style={{}}>Razer Blade 14</h3>

<p className="mt-2 text-neutral-300 font-medium group-hover:hidden font-geist-mono tracking-tight" style={{}}>Thin Out The Competition</p>

<p className="mt-2 text-black font-medium hidden group-hover:block font-geist-mono tracking-tight" style={{}}>
                    Ultra‑Portable 14‑Inch Gaming Laptop with NVIDIA GeForce RTX 50 Series and AMD Ryzen AI 9 365 Processor.
                  </p>
</div>

<div className="flex-1"></div>

<div className="absolute bottom-0 right-0 group-hover:hidden">
<div className="w-10 h-10 bg-[#44D62C] rounded-full flex items-center justify-center">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-black" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>

<div className="w-full justify-center gap-4 pb-4 sm:pb-6 hidden group-hover:flex">
<button className="inline-flex gap-2 sm:px-6 h-12 hover:-translate-y-0.5 active:translate-y-0 transition w-32 whitespace-nowrap font-semibold text-black tracking-tight border-black border-2 rounded-xl pr-5 pl-5 items-center justify-center">
<span className="tracking-tight font-geist-mono" style={{}}>LEARN MORE</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-12 rounded-xl bg-black text-[#44D62C] font-semibold tracking-tight hover:bg-black/90 hover:-translate-y-0.5 active:translate-y-0 transition w-32">
<span className="font-geist-mono tracking-tight" style={{}}>BUY NOW</span>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 h-[520px]" style={{}}>
<img alt="Minimal 3D render glowing object" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/75f2331b-fe97-40f1-8665-7805f7a2d74c_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" style={{}}></div>
<div className="absolute inset-0 p-6 sm:p-8 pointer-events-none group-hover:pointer-events-auto">
<div className="absolute inset-0 group-hover:bg-[#44D62C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
<div className="relative h-full flex flex-col">
<div className="text-center pt-8 pb-4">
<h3 className="text-2xl sm:text-3xl tracking-tight group-hover:text-black text-white uppercase font-geist-mono font-bold" style={{}}>Razer Blade 16</h3>
<p className="mt-2 text-neutral-300 font-medium group-hover:hidden font-geist-mono tracking-tight" style={{}}>Slimmer. Smarter. Sharper.</p>
<p className="mt-2 text-black font-medium hidden group-hover:block font-geist-mono tracking-tight" style={{}}>
                    Desktop‑class performance in a 16‑inch form factor. Up to RTX 4090 Laptop GPU and 240Hz QHD+ display.
                  </p>
</div>
<div className="flex-1"></div>

<div className="absolute bottom-0 right-0 group-hover:hidden">
<div className="w-10 h-10 bg-[#44D62C] rounded-full flex items-center justify-center">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-black" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>
<div className="w-full justify-center gap-4 pb-4 sm:pb-6 hidden group-hover:flex">
<button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-12 rounded-xl border-2 border-black text-black font-semibold tracking-tight hover:-translate-y-0.5 active:translate-y-0 transition w-32 whitespace-nowrap">
<span className="font-geist-mono tracking-tight" style={{}}>LEARN MORE</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-12 rounded-xl bg-black text-[#44D62C] font-semibold tracking-tight hover:bg-black/90 hover:-translate-y-0.5 active:translate-y-0 transition w-32">
<span className="font-geist-mono tracking-tight" style={{}}>BUY NOW</span>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 h-[520px]" style={{}}>
<img alt="Futuristic device on a desk" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6dcd5c4a-a18a-4365-9041-291f3fbb73e1_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" style={{}}></div>
<div className="absolute inset-0 p-6 sm:p-8 pointer-events-none group-hover:pointer-events-auto">
<div className="absolute inset-0 rounded-3xl group-hover:bg-[#44D62C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative h-full flex flex-col">
<div className="text-center pt-8 pb-4">
<h3 className="text-2xl sm:text-3xl tracking-tight group-hover:text-black text-white uppercase font-geist-mono font-bold" style={{}}>Razer Blade 18</h3>
<p className="mt-2 text-neutral-300 font-medium group-hover:hidden font-geist-mono tracking-tight" style={{}}>The Most Powerful Blader Ever</p>
<p className="mt-2 text-black font-medium hidden group-hover:block font-geist-mono tracking-tight" style={{}}>
                    The ultimate desktop replacement with massive cooling headroom and panoramic 18‑inch display.
                  </p>
</div>
<div className="flex-1"></div>

<div className="absolute bottom-0 right-0 group-hover:hidden">
<div className="w-10 h-10 bg-[#44D62C] rounded-full flex items-center justify-center">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-black" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>
<div className="w-full justify-center gap-4 pb-4 sm:pb-6 hidden group-hover:flex">
<button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-12 rounded-xl border-2 border-black text-black font-semibold tracking-tight hover:-translate-y-0.5 active:translate-y-0 transition w-32 whitespace-nowrap">
<span className="font-geist-mono tracking-tight" style={{}}>LEARN MORE</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-12 rounded-xl bg-black text-[#44D62C] font-semibold tracking-tight hover:bg-black/90 hover:-translate-y-0.5 active:translate-y-0 transition w-32">
<span className="font-geist-mono tracking-tight" style={{}}>BUY NOW</span>
</button>
</div>
</div>
</div>
</article>
</div>
</section><section className="sm:px-6 lg:px-12 pt-10 pr-4 pb-10 pl-4">
<header className="max-w-6xl mx-auto mb-10">
<h2 className="sm:text-4xl uppercase text-3xl font-bold tracking-tight font-geist-mono text-center">
      The Razer Advantage
    </h2>
</header>
<div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-auto ml-auto">

<article className="group overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] h-[480px] flex flex-col bg-neutral-900/60 border-white/5 border rounded-2xl">
<div className="relative aspect-[16/11] md:aspect-[16/12] overflow-hidden">
<img alt="CNC milling a metal unibody" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1592659762303-90081d34b277?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
</div>
<div className="flex-1 flex flex-col pt-4 pr-6 pb-4 pl-6">
<h3 className="md:text-xl uppercase text-lg font-bold tracking-tight font-geist-mono">
        Anodized Aluminum Unibody
      </h3>
<p className="md:text-base leading-tight text-xs text-zinc-300 tracking-tighter font-geist-mono mt-3">CNC‑milled from a single aluminum block, the chassis achieves optimal strength‑to‑weight ratio and is anodized with a matte black finish for a smooth surface.</p>
</div>
</article>

<article className="group overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] h-[480px] flex flex-col bg-neutral-900/60 border-white/5 border rounded-2xl">
<div className="relative aspect-[16/11] md:aspect-[16/12] overflow-hidden">
<img alt="High-performance processor chip" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/34539b54-ca5a-4ab5-9a6e-0388332c5712_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
</div>
<div className="flex-1 flex flex-col pt-4 pr-6 pb-4 pl-6">
<h3 className="md:text-xl uppercase text-lg font-bold tracking-tight font-geist-mono">
        Best‑in‑Class Processors
      </h3>
<p className="md:text-base leading-tight text-xs text-zinc-300 tracking-tighter font-geist-mono mt-3">
        Powered by the latest processors, Razer Blades are designed to perform the most resource‑heavy tasks flawlessly, delivering supreme performance straight out of the box.
      </p>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,00.6)] h-[480px] flex flex-col">
<div className="relative aspect-[16/11] md:aspect-[16/12] overflow-hidden">
<img alt="Exploded view of laptop cooling components" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aaccc7c2-5ffc-4028-9a09-3207d25c6310_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
</div>
<div className="flex-1 flex flex-col pt-4 pr-6 pb-4 pl-6">
<h3 className="md:text-xl uppercase text-lg font-bold tracking-tight font-geist-mono">
        Innovative Cooling System
      </h3>
<p className="md:text-base leading-tight text-xs text-zinc-300 tracking-tighter font-geist-mono mt-3">
        Vaporized liquid cooling, custom fans, and integrated heat exchangers manage heat efficiently so the Razer Blade always performs at its peak.
      </p>
</div>
</article>
</div>
</section><section className="w-full">
<section className="relative overflow-hidden md:py-10 pt-20">

<div className="pointer-events-none absolute inset-0">
<div className="absolute left-1/2 top-0 -translate-x-1/2 h-[28rem] w-[44rem] rounded-full bg-lime-400/10 blur-[128px]"></div>
</div>
<div className="relative max-w-6xl mr-auto ml-auto pr-6 pl-6 space-y-4">
<div className="text-center space-y-4">
<h1 className="uppercase text-5xl font-bold tracking-tighter font-geist-mono">NVIDIA® GEFORCE RTX™ 50 Series Laptop GPU</h1>
<h2 className="md:text-xl text-lg font-bold tracking-tight font-geist-mono mt-7">
    Maximum Performance. Minimal Size.
  </h2>
<p className="md:text-base leading-tight text-xs text-zinc-300 tracking-tighter font-geist-mono mt-6 mr-auto ml-auto pr-20 pl-20">
    While many devices share similar components, what truly sets this system apart is precision engineering
    that pushes the limits of modern graphics. By maximizing total graphics power (TGP) and delivering
    exceptional power density, it achieves best‑in‑class performance without sacrificing portability—keeping
    you ahead of the curve.
  </p>
<a className="group inline-flex items-center justify-center gap-1 mt-8 text-lime-400 font-medium font-geist-mono tracking-tight" href="#">
    Learn More
    <svg className="lucide lucide-chevron-right h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="flex mt-12 justify-center">
<div className="flex items-stretch overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/60 shadow-lg backdrop-blur">
<div className="hidden sm:block w-1.5 bg-lime-400"></div>
<div className="flex items-center gap-4 px-5 py-4">

<div className="grid h-10 w-10 place-items-center rounded-md bg-lime-400">
<svg className="lucide lucide-gpu h-6 w-6 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 21V3"></path><path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"></path><path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"></path><circle cx="16" cy="11" r="2"></circle><circle cx="8" cy="11" r="2"></circle></svg>
</div>
<div className="min-w-0">
<p className="text-sm text-zinc-300 font-geist-mono tracking-tight">GEFORCE RTX</p>
<p className="text-base font-medium text-white font-geist-mono tracking-tight">Powering advanced AI graphics</p>
</div>
<div className="ml-4 hidden sm:flex items-center gap-2 text-lime-400 text-sm font-medium font-geist-mono tracking-tight">
<span className="">AI Ready</span>
<svg className="lucide lucide-cpu h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>
</div>
</div>
</div>
</section><div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
<img alt="Gaming setup showcase" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0c17a17-3fb2-4984-901f-302034deb527_3840w.jpg" style={{}}/>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 relative"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" id="asset-video-1756582072796" loop="" muted="" playsinline="" src="https://assets2.razerzone.com/images/pnx.assets/12ea9df6441d247876900fec849f859d/laptop-category-nvidia-video-looping.mp4"></video></div>

<div className="absolute inset-0 flex items-center justify-center relative"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" id="asset-video-1756581995749" loop="" muted="" playsinline="" src="https://assets2.razerzone.com/images/pnx.assets/12ea9df6441d247876900fec849f859d/laptop-category-nvidia-video-looping.mp4"></video>
</div>
</div>
</section><section className="sm:px-6 lg:px-12 pt-10 pr-4 pb-10 pl-4">
<header className="max-w-6xl mx-auto mb-10">
<h2 className="sm:text-4xl uppercase text-3xl font-bold tracking-tight font-geist-mono text-center">EXPAND YOUR CREATIVITY</h2>
</header>
<div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-auto ml-auto">

<article className="group overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] h-[480px] flex flex-col bg-neutral-900/60 border-white/5 border rounded-2xl">
<div className="relative aspect-[16/11] md:aspect-[16/12] overflow-hidden">
<img alt="CNC milling a metal unibody" className="absolute inset-0 h-full w-full transition duration-700 ease-out group-hover:scale-[1.03] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/10dd46c9-2ab8-44be-8554-48514ed069b9_800w.jpg" style={{}}/>
<div className="group overflow-hidden rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] h-[480px] flex flex-col"></div>
</div>
<div className="flex-1 flex flex-col pt-4 pr-6 pb-4 pl-6">
<h3 className="md:text-xl uppercase text-lg font-bold tracking-tight font-geist-mono">RAZER USB C DOCK</h3>
<p className="md:text-base leading-tight text-xs text-zinc-300 tracking-tighter font-geist-mono mt-3">Maximize your port selection on-the-go with the versatile Razer USB-C Dock, designed to keep all your devices seamlessly connected.</p>
<a className="group inline-flex items-center mt-3 text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
        Learn More
        <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] h-[480px] flex flex-col">
<div className="relative aspect-[16/11] md:aspect-[16/12] overflow-hidden">
<img alt="High-performance processor chip" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9804d997-8edd-47c0-b648-15e25a079a6f_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
</div>
<div className="flex-1 flex flex-col pt-4 pr-6 pb-4 pl-6">
<h3 className="md:text-xl uppercase text-lg font-bold tracking-tight font-geist-mono">THUNDERBOLT™ 4 DOCK</h3>
<p className="md:text-base leading-tight text-xs text-zinc-300 tracking-tighter font-geist-mono mt-3">Unlock maximum connectivity with a universal Thunderbolt™ 4 dock fitted with 10 ports to support all your devices.</p>
<a className="group inline-flex items-center mt-3 text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
        Learn More
        <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,00.6)] h-[480px] flex flex-col">
<div className="relative aspect-[16/11] md:aspect-[16/12] overflow-hidden">
<img alt="Exploded view of laptop cooling components" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e273ace6-e5c4-4733-8e4f-219baded6641_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
</div>
<div className="flex-1 flex flex-col pt-4 pr-6 pb-4 pl-6">
<h3 className="md:text-xl uppercase text-lg font-bold tracking-tight font-geist-mono">RAZER CABLES &amp; CHARGERS</h3>
<p className="md:text-base leading-tight text-xs text-zinc-300 tracking-tighter font-geist-mono mt-3">Always be powered and plugged in to play no matter where you are with our genuine Razer adapters and cords.</p>
<a className="group inline-flex items-center mt-3 text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
        Learn More
        <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.24"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</article>
</div>
</section><section className="sm:px-6 lg:px-12 relative pt-16 pr-4 pb-16 pl-4">
<h2 className="sm:text-4xl uppercase text-3xl font-bold tracking-tight font-geist-mono text-center pt-5 pb-5">WHY CHOOSE RAZER</h2>
<div className="max-w-6xl relative mr-auto ml-auto">

<button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-lime-400 hover:bg-lime-300 transition-colors duration-200 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="scroll-left">
<svg className="lucide lucide-chevron-left w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>

<button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hover:bg-lime-300 transition-colors duration-200 flex disabled:opacity-50 disabled:cursor-not-allowed bg-lime-400 rounded-full shadow-lg items-center justify-center" id="scroll-right">
<svg className="lucide lucide-chevron-right h-5 w-5 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>

<div className="overflow-x-auto scrollbar-hide mx-12" id="scrollable-container">
<div className="flex gap-6 pb-2" style={{width: 'max-content'}}>

<article className="group relative w-80 h-96 rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden flex-shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative h-full flex flex-col p-6">
<div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-zap h-6 w-6 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-xl font-bold tracking-tight font-geist-mono uppercase mb-3">MULTIPLY THE MAYHEM</h3>
<p className="leading-relaxed text-sm text-zinc-300 tracking-tight font-geist-mono mb-4">
              Experience unprecedented performance with multi-threaded processing that handles the most demanding games, streaming, and creative workflows simultaneously.
            </p>
<div className="flex-1"></div>
<a className="group inline-flex items-center text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
              Explore Performance
              <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>

<article className="group relative w-80 h-96 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden flex-shrink-0 bg-neutral-900/60 border-white/5 border rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-headphones h-6 w-6 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
</svg>
</div>
<h3 className="text-xl font-bold tracking-tight font-geist-mono uppercase mb-3">INDUSTRY LEADING SUPPORT</h3>
<p className="text-sm text-zinc-300 tracking-tight font-geist-mono leading-relaxed mb-4">
              24/7 technical support, comprehensive warranty coverage, and a global network of certified service centers ensure you're never left behind.
            </p>
<div className="flex-1"></div>
<a className="group inline-flex items-center text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
              Get Support
              <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>

<article className="group relative w-80 h-96 rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden flex-shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative h-full flex flex-col p-6">
<div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-book-open h-6 w-6 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path className="" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
</div>
<h3 className="text-xl font-bold tracking-tight font-geist-mono uppercase mb-3">BUYERS GUIDE</h3>
<p className="text-sm text-zinc-300 tracking-tight font-geist-mono leading-relaxed mb-4">
              Make informed decisions with our comprehensive buying guide. Compare specs, understand performance tiers, and find the perfect Blade for your needs.
            </p>
<div className="flex-1"></div>
<a className="group inline-flex items-center text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
              View Guide
              <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>

<article className="group relative w-80 h-96 rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden flex-shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative h-full flex flex-col p-6">
<div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-award h-6 w-6 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="6"></circle>
<path d="M15.477 12-5 3 1.523-9.11"></path>
</svg>
</div>
<h3 className="text-xl font-bold tracking-tight font-geist-mono uppercase mb-3">ELITE PERFORMANCE</h3>
<p className="text-sm text-zinc-300 tracking-tight font-geist-mono leading-relaxed mb-4">
              Engineered for esports professionals and content creators who demand nothing less than peak performance in every frame, render, and stream.
            </p>
<div className="flex-1"></div>
<a className="group inline-flex items-center text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
              See Benchmarks
              <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>

<article className="group relative w-80 h-96 rounded-2xl bg-neutral-900/60 border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden flex-shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative h-full flex flex-col p-6">
<div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-users h-6 w-6 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-xl font-bold tracking-tight font-geist-mono uppercase mb-3">GLOBAL GAMING COMMUNITY</h3>
<p className="text-sm text-zinc-300 tracking-tight font-geist-mono leading-relaxed mb-4">
              Join millions of gamers worldwide. Access exclusive events, tournaments, beta programs, and connect with fellow enthusiasts in the Razer ecosystem.
            </p>
<div className="flex-1"></div>
<a className="group inline-flex items-center text-sm font-medium text-lime-400 tracking-tight font-geist-mono" href="#">
              Join Community
              <svg className="lucide lucide-chevron-right ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>
</div>
</div>
</div>

<style>
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  </style>
</section><footer className="bg-black border-t border-neutral-800/50">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="lg:py-16 pt-12 pb-12">
<div className="grid grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-4 lg:grid-cols-6">

<div className="">
<h3 className="text-sm font-semibold text-white mb-4 font-geist-mono tracking-tight uppercase">Shop</h3>
<ul className="space-y-3 text-sm">
<li className=""><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">RazerStores</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">RazerCafe</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Store Locator</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Purchase Programs</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Education</a></li>
<li className=""><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Razer Silver Rewards</a></li>
</ul>
</div>

<div className="">
<h3 className="uppercase text-sm font-semibold text-white tracking-tight font-geist-mono mb-4">Explore</h3>
<ul className="text-sm space-y-3">
<li className=""><a className="hover:text-lime-400 transition-colors text-neutral-400 tracking-tight font-geist-mono" href="#">Technology</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors text-neutral-400 tracking-tight font-geist-mono" href="#">Chroma RGB</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors text-neutral-400 tracking-tight font-geist-mono" href="#">Concepts</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors text-neutral-400 tracking-tight font-geist-mono" href="#">Esports</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors text-neutral-400 tracking-tight font-geist-mono" href="#">Collabs</a></li>
<li className=""></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4 font-geist-mono tracking-tight uppercase">Support</h3>
<ul className="space-y-3 text-sm">
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Get Help</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors text-neutral-400 tracking-tight font-geist-mono" href="#">Warranty</a></li>
<li className=""><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">RazerStore Support</a></li>
<li className=""><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">RazerCare</a></li>
<li className=""><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Manage Razer ID</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors text-neutral-400 tracking-tight font-geist-mono" href="#">Accessibility</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4 font-geist-mono tracking-tight uppercase">Company</h3>
<ul className="space-y-3 text-sm">
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">About Us</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Careers</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">zVentures</a></li>
<li className=""><a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Contact Us</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4 font-geist-mono tracking-tight uppercase">Follow Us</h3>
<div className="flex flex-wrap gap-3 lg:flex-col lg:gap-4">
<a aria-label="Facebook" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 hover:border-lime-400 hover:bg-lime-400/10 transition-all" href="#">
<svg className="text-neutral-400 group-hover:text-lime-400 transition-colors" fill="currentColor" height="16" viewbox="0 0 24 24" width="16">
<path d="M13.5 10.5V8.4c0-.6.4-.9 1-1h1.6V5h-2.2C11.6 5 10 6.5 10 8.7v1.8H8v2.7h2V19h3v-4.5h2.1l.4-2.7h-2.5z"></path>
</svg>
</a>
<a aria-label="Instagram" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 hover:border-lime-400 hover:bg-lime-400/10 transition-all" href="#">
<svg className="text-neutral-400 group-hover:text-lime-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24" width="16">
<rect height="18" rx="5" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.2"></circle>
<circle cx="17.3" cy="6.7" fill="currentColor" r="1.1" stroke="none"></circle>
</svg>
</a>
<a aria-label="YouTube" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 hover:border-lime-400 hover:bg-lime-400/10 transition-all" href="#">
<svg className="text-neutral-400 group-hover:text-lime-400 transition-colors" fill="currentColor" height="16" viewbox="0 0 24 24" width="16">
<path d="M23 12s0-3.3-.4-4.9c-.2-.8-.8-1.5-1.6-1.7C19 4.8 12 4.8 12 4.8s-7 0-9 .6c-.8.2-1.4.9-1.6 1.7C1 8.7 1 12 1 12s0 3.3.4 4.9c.2.8.8 1.5 1.6 1.7 2 .6 9 .6 9 .6s7 0 9-.6c.8-.2 1.4-.9 1.6-1.7.4-1.6.4-4.9.4-4.9zM10 15.5v-7l6 3.5-6 3.5z"></path>
</svg>
</a>
<a aria-label="Twitter" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 hover:border-lime-400 hover:bg-lime-400/10 transition-all" href="#">
<svg className="text-neutral-400 group-hover:text-lime-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M4 4l16 16M20 4L4 20"></path>
</svg>
</a>
<a aria-label="TikTok" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 hover:border-lime-400 hover:bg-lime-400/10 transition-all" href="#">
<svg className="text-neutral-400 group-hover:text-lime-400 transition-colors" fill="currentColor" height="16" viewbox="0 0 24 24" width="16">
<path d="M21 8.5c-2.7 0-5.1-1.7-6-4h-3.2v11.5a3 3 0 1 1-3-3c.3 0 .6 0 .9.1V10a6 6 0 1 0 6 6V8.7c1.4 1.1 3.1 1.8 5 1.8V8.5z"></path>
</svg>
</a>
<a aria-label="Discord" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 hover:border-lime-400 hover:bg-lime-400/10 transition-all" href="#">
<svg className="text-neutral-400 group-hover:text-lime-400 transition-colors" fill="currentColor" height="16" viewbox="0 0 24 24" width="16">
<path d="M20 4.5c-1.7-.8-3.5-1.2-5.3-1.4l-.3.6c1.8.4 3.4 1 4.8 1.9-2-.9-4-1.4-6.2-1.4s-4.2.5-6.2 1.4c1.4-.9 3-1.5 4.8-1.9l-.3-.6C7.5 3.3 5.7 3.7 4 4.5 2.5 7 2 9.5 2 12c0 0 1.3 1.9 4.8 2.2.4-.6.7-1.2.9-1.9-1.3-.4-2.3-1-2.3-1.9 0-2.8 4.3-3 6.6-3s6.6.2 6.6 3c0 .9-1 1.5-2.3 1.9.2.7.5 1.3.9 1.9C20.7 13.9 22 12 22 12c0-2.5-.5-5-2-7.5zM9.2 13.5c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5zm5.6 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5z"></path>
</svg>
</a>
</div>
</div>

<div className="col-span-2 lg:col-span-1 flex items-start">
<div className="text-center lg:text-right">
<p className="uppercase text-xs font-bold text-lime-400 tracking-tight font-geist-mono">
              FOR GAMERS.
              BY GAMERS.™
            </p>
</div>
</div>
</div>

<div className="border-neutral-800/50 border-t mt-4 mb-4 pt-4">
<div className="max-w-md justify-center">
<h4 className="text-white font-semibold mb-3 font-geist-mono tracking-tight uppercase">Stay Connected</h4>
<p className="text-sm text-neutral-400 tracking-tight font-geist-mono mb-4">Get the latest updates on new products and exclusive offers.</p>
<div className="flex gap-2">
<input className="flex-1 px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400 font-geist-mono tracking-tight" placeholder="Enter your email" type="email"/>
<button className="px-4 py-2 bg-lime-400 hover:bg-lime-300 text-black font-medium text-sm rounded-lg transition-colors font-geist-mono tracking-tight">
              Subscribe
            </button>
</div>
</div>
</div>

<div className="mt-12 pt-6 border-t border-neutral-800/50 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
<p className="text-sm text-neutral-500 font-geist-mono tracking-tight">
          Copyright © 2025 Razer Inc. All rights reserved.
        </p>
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
<nav className="flex items-center gap-4 text-sm">
<a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Legal Terms</a>
<span className="text-neutral-600">|</span>
<a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Privacy Policy</a>
<span className="text-neutral-600">|</span>
<a className="text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">Cookie Settings</a>
</nav>
<div className="flex items-center gap-2 text-sm">
<span className="text-neutral-300 font-geist-mono tracking-tight">United States</span>
<span className="text-neutral-600">|</span>
<a className="inline-flex items-center gap-1 text-neutral-400 hover:text-lime-400 transition-colors font-geist-mono tracking-tight" href="#">
              Change Location
              <svg className="lucide lucide-chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>
</main>





    </>
  );
}
