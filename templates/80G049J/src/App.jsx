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



        try {
          const ctx = document.getElementById('workChart');
          if (ctx) {
            new Chart(ctx, {
              type: 'line',
              data: {
                labels: Array.from({ length: 12 }, (_, i) => i + 1),
                datasets: [{
                  data: [65,75,80,85,90,88,95,92,98,94,96,100],
                  backgroundColor: 'rgba(129, 140, 248, 0.15)',
                  borderColor: 'rgba(129, 140, 248, 0.9)',
                  borderWidth: 2,
                  fill: true,
                  tension: 0.4,
                  pointRadius: 0,
                  pointHoverRadius: 6
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: { display: false, grid: { display: false } },
                  y: { display: false, grid: { display: false }, suggestedMin: 60, suggestedMax: 105 }
                },
                plugins: {
                  legend: { display: false },
                  tooltip: { enabled: false }
                }
              }
            });
          }
        } catch (e) { console.log('Chart init error', e); }
      


      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu toggle
      const openBtn = document.querySelector('button[aria-label="Open menu"]');
      const closeBtn = document.getElementById('closeMenu');
      const menu = document.getElementById('mobileMenu');

      function toggleMenu(show) {
        if (!menu) return;
        menu.classList.toggle('hidden', !show);
        document.body.style.overflow = show ? 'hidden' : '';
      }

      if (openBtn) openBtn.addEventListener('click', () => toggleMenu(true));
      if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
      if (menu) menu.addEventListener('click', (e) => {
        if (e.target === menu) toggleMenu(false);
      });
      // Close on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu(false);
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
      <div className="absolute top-0 w-full -z-10 h-[920px] bg-cover bg-center blur-3xl" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/72c90007-7638-4902-8dda-5a6c20e92741_3840w.jpg")'}}></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>

<div className="relative w-full overflow-hidden">
<div className="flex w-full mr-auto ml-auto justify-center"></div>
</div>

<section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto pr-4 pl-4">

<header className="w-full">
<header className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-white tracking-tight font-geist" style={{fontFamily: '"Playfair Display", serif'}}>SANO</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-medium font-geist" href="#work" style={{}}>Work</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="#services" style={{}}>Services</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="#approach" style={{}}>Approach</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="#contact" style={{}}>Contact</a>
</nav>
<button aria-label="Start your project" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center rounded-full" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[90px] w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 pt-3 pr-5 pb-3 pl-5 rounded-full">
<span className="rounded-full">Start Project</span>
</span>
</button>
</header>
</header>

<h1 className="max-w-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] text-4xl text-white tracking-tighter font-jakarta text-center mr-auto ml-auto" style={{fontFamily: '"Playfair Display", serif'}}>
        Crafting experiences that
        <img alt="Product UI" className="inline-block align-middle h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.4),_0_6.7px_5.3px_rgba(0,_0,_0,_0.5),_0_12.5px_10px_rgba(0,_0,_0,_0.6),_0_22.3px_17.9px_rgba(0,_0,_0,_0.7),_0_41.8px_33.4px_rgba(0,_0,_0,_0.8),_0_100px_80px_rgba(0,_0,_0,_0.9)] object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0a473d29-c41a-4b27-8102-9ad8acbb63ad_320w.jpg"/>
        engage, convert &amp; 
        <img alt="Brand system" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.4),_0_6.7px_5.3px_rgba(0,_0,_0,_0.5),_0_12.5px_10px_rgba(0,_0,_0,_0.6),_0_22.3px_17.9px_rgba(0,_0,_0,_0.7),_0_41.8px_33.4px_rgba(0,_0,_0,_0.8),_0_100px_80px_rgba(0,_0,_0,_0.9)] object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1f56ad85-7802-45dd-a754-700c9bec23d4_320w.jpg"/> scale.
      </h1>

<p className="sm:text-3xl max-w-3xl text-base text-neutral-200 font-jakarta text-center mt-4 mr-auto ml-auto" style={{}}>
        SANO partners with ambitious companies to craft brand identities, product experiences, and digital platforms that drive meaningful growth—from concept to launch.
      </p>

<div className="flex flex-wrap gap-2.5 mt-24 justify-center">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-pen-tool w-[14px] h-[14px] text-white/90" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
          Product Strategy
        </span>
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/15 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-shapes w-[14px] h-[14px] text-white/90" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
          Brand Identity
        </span>
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/15 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-code-2 w-[14px] h-[14px] text-white/90" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
          Custom Development
        </span>
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/15 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-film w-[14px] h-[14px] text-white/90" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
          Visual Storytelling
        </span>
</div>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 justify-center">
<div className="inline-block bg-transparent">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'); @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; } @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; } .shiny-cta { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 1.25rem 2.5rem; font-size: 1.125rem; line-height: 1.2; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; } @keyframes border-spin { to { --gradient-angle: 360deg; } } .shiny-cta:active { transform: translateY(1px); } .shiny-cta::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; } .shiny-cta::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; } .shiny-cta span { position: relative; z-index: 2; display: inline-block; } .shiny-cta span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; } @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} } @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
  </style>
<button className="shiny-cta focus:outline-none">
<span className="text-base">Let's Talk</span>
</button>
</div>
<a className="inline-flex items-center justify-center hover:bg-white/10 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.3),_0_6.7px_5.3px_rgba(0,_0,_0,_0.35),_0_12.5px_10px_rgba(0,_0,_0,_0.4)] text-base font-medium text-white/90 font-geist bg-white/5 border-white/10 border rounded-full pr-8 pl-8 backdrop-blur h-[62px]" href="#work" style={{backdropFilter: 'blur(12px)'}}>
          View Portfolio
        </a>
</div>
</section>

<section className="sm:p-8 max-w-7xl bg-neutral-900/60 border-white/10 border rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6">

<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-neutral-400 font-geist" style={{}}>Portfolio showcase</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white mt-2 tracking-tighter font-jakarta" style={{fontFamily: '"Playfair Display", serif'}}>
              Projects that define categories and drive growth.
            </h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-neutral-900 via-white/10 to-neutral-900"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-300 bg-transparent px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Brand Identity</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Product Design</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Web Development</span>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight font-geist" style={{}}>Impactful results across industries</p>
<p className="text-sm text-neutral-300 mt-1 max-w-sm font-geist" style={{}}>
                From startup MVPs to enterprise transformations, our projects consistently deliver measurable outcomes and user engagement that drives business growth.
              </p>
<a className="w-full inline-flex items-center justify-center gap-2 h-10 hover:bg-emerald-600/90 transition text-sm font-normal text-white bg-emerald-600 rounded-full mt-4 pr-4 pl-4 max-w-sm font-geist" href="#work" style={{}}>
                View all projects
                <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<div className="flex flex-col gap-4">


<article className="relative overflow-hidden aspect-[4/3] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a220f7cc-86a4-4e98-991e-398cfdbf47ed_800w.jpg)] bg-cover border-white/10 rounded-2xl">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-activity h-3.5 w-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
</div><div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" id="aura-emf9pfre4"></div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur font-geist" style={{}}>Health</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Helix Care</p>
</div>
</article><article className="relative overflow-hidden aspect-[4/5] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a9ddffac-8763-44e6-a0ea-2da86ce6a11e_800w.jpg)] bg-cover border-white/10 rounded-2xl" id="aura-emf9pfy28">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" id="aura-emf9pfwtm"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur font-geist" style={{}}>Branding</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Arcadia OS</p>
</div>
</article>
</div>

<div className="flex flex-col gap-4">


<article className="relative overflow-hidden aspect-[4/5] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfac57a9-160d-4853-8c21-ffb99f850bbe_800w.jpg)] bg-cover border-white/10 rounded-2xl" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-clapperboard h-3.5 w-3.5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur font-geist" style={{}}>Motion</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Lumen AI</p>
</div>
</article><article className="relative overflow-hidden aspect-[4/3] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/34fc7e4d-d070-40c9-89e3-92fd627bfdee_800w.jpg)] bg-cover border-white/10 rounded-2xl" id="aura-emf9pg4y2">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" id="aura-emf9pg20m"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-layout-dashboard w-[14px] h-[14px] text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect className="" height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur font-geist" style={{}}>Product</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>
                  Nimbus Finance
                </p>
</div>
</article>
</div>
</div>
</div>
</section>
<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/70 font-geist" style={{fontFamily: '"Playfair Display", serif'}}>
        What we do best
      </p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter font-jakarta" style={{fontFamily: '"Playfair Display", serif'}}>
        Strategy, design, and engineering—tightly integrated
      </h2>
<p className="sm:text-lg max-w-[85ch] text-base text-neutral-300 mt-4 font-geist" style={{}}>
        We deliver end-to-end: from brand platforms and design systems to production-ready interfaces and high-performance marketing sites.
      </p>
</div>
</div>
<div className="space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative overflow-hidden bg-neutral-900 border-white/10 border rounded-2xl">
<div className="relative overflow-hidden">
<img alt="Sprint workshop" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70ea4bbd-c103-404b-bff1-cab817e4f4d6_1600w.jpg" style={{}}/>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center text-xs font-medium text-emerald-200 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-3 py-1 font-geist" style={{}}>SPRINTS</span>
<span className="text-xs text-neutral-300 font-geist" style={{}}>End-to-end product</span>
</div>
<h3 className="text-2xl sm:text-4xl text-white mt-3 tracking-tighter font-jakarta" style={{}}>
            Design sprints that move from idea to shipped
          </h3>
<p className="text-sm sm:text-base text-neutral-300 mt-2 font-geist" style={{}}>
            We structure work in focused sprints: align on outcomes, explore broadly, converge through testing, and deliver production-ready designs with handoff or code.
          </p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#services" style={{}}>
<svg className="lucide lucide-list-checks h-4 w-4" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
              See process
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#work" style={{}}>
<svg className="lucide lucide-folder-open h-4 w-4" data-lucide="folder-open" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 20h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-7.5a2 2 0 0 1-1.6-.8L9 8H4a2 2 0 0 0-2 2v1"></path><path d="m2 13 .34-1.36A2 2 0 0 1 4.28 10h15.44a2 2 0 0 1 1.94 1.64L22 13"></path></svg>
              View case study
            </a>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-200 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10 font-geist" style={{}}>
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Research &amp; synthesis
            </span>
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-200 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10 font-geist" style={{}}>
<svg className="lucide lucide-component w-3.5 h-3.5" data-lucide="component" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
              Prototyping
            </span>
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-200 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10 font-geist" style={{}}>
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Usability testing
            </span>
</div>
</div>
</div>

<article className="group relative bg-neutral-900 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium font-geist" style={{}}>Design Systems at Scale</h3>
<span className="text-[11px] text-neutral-300 font-geist" style={{}}>v1.4</span>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Token-driven UI kits and accessible components for product velocity.</p>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="flex flex-col items-center gap-1">
<span className="h-8 w-8 rounded-lg ring-1 ring-white/10" style={{background: 'linear-gradient(135deg,#22c55e,#16a34a)'}}></span>
<span className="text-[10px] text-neutral-400 font-geist" style={{}}>Brand</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="h-8 w-8 rounded-lg ring-1 ring-white/10" style={{background: 'linear-gradient(135deg,#60a5fa,#2563eb)'}}></span>
<span className="text-[10px] text-neutral-400 font-geist" style={{}}>Primary</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="h-8 w-8 rounded-lg ring-1 ring-white/10" style={{background: 'linear-gradient(135deg,#a78bfa,#7c3aed)'}}></span>
<span className="text-[10px] text-neutral-400 font-geist" style={{}}>Accent</span>
</div>
</div>
<pre className="mt-4 text-xs leading-relaxed text-neutral-200 bg-neutral-900 ring-1 ring-white/10 rounded-xl p-4 overflow-x-auto font-mono"><code className="font-geist" style={{}}>tokens: {
  colors: { 
    brand: '#10B981',
    surface: '#0A0A0A' 
  },
  radius: { xl: 24 }
}</code></pre>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-200 bg-emerald-500/10 rounded-full px-2 py-1 ring-1 ring-emerald-400/20 font-geist" style={{}}>
<svg className="lucide lucide-a11y w-3.5 h-3.5" data-lucide="a11y" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="4" r="1"></circle><path d="m18 19 1-7-5 1-3-3-4 1"></path><path d="M2 19h7"></path><path d="M13 19h9"></path></svg>
            WCAG AA
          </span>
<a className="text-sm text-white/90 hover:text-white underline underline-offset-4 decoration-white/30 font-geist" href="#services" style={{}}>Explore</a>
</div>
</article>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="group relative bg-neutral-900 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium font-geist" style={{}}>Performance Analytics</h3>
<span className="text-[11px] text-neutral-300 font-geist" style={{}}>Live</span>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Ship fast sites with impeccable Core Web Vitals and SEO.</p>
<div className="mt-5 grid grid-cols-3 gap-4">
<div className="flex flex-col items-center gap-2">
<div className="relative h-12 w-12 rounded-full p-[2px]" style={{backgroundImage: 'conic-gradient(#10b981 99%, rgba(255,255,255,.08) 0)'}}>
<div className="absolute inset-0.5 rounded-full bg-neutral-900"></div>
<div className="absolute inset-1.5 rounded-full bg-neutral-950 flex items-center justify-center text-xs font-semibold text-emerald-400 font-geist" style={{}}>99</div>
</div>
<span className="text-[10px] text-neutral-300 font-geist" style={{}}>Performance</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="relative h-12 w-12 rounded-full p-[2px]" style={{backgroundImage: 'conic-gradient(#10b981 100%, rgba(255,255,255,.08) 0)'}}>
<div className="absolute inset-0.5 rounded-full bg-neutral-900"></div>
<div className="absolute inset-1.5 rounded-full bg-neutral-950 flex items-center justify-center text-xs font-semibold text-emerald-400 font-geist" style={{}}>100</div>
</div>
<span className="text-[10px] text-neutral-300 font-geist" style={{}}>Best Practices</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="relative h-12 w-12 rounded-full p-[2px]" style={{backgroundImage: 'conic-gradient(#10b981 98%, rgba(255,255,255,.08) 0)'}}>
<div className="absolute inset-0.5 rounded-full bg-neutral-900"></div>
<div className="absolute inset-1.5 rounded-full bg-neutral-950 flex items-center justify-center text-xs font-semibold text-emerald-400 font-geist" style={{}}>98</div>
</div>
<span className="text-[10px] text-neutral-300 font-geist" style={{}}>SEO</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-[11px] text-indigo-200 bg-indigo-500/10 rounded-full px-2 py-1 ring-1 ring-indigo-400/20 font-geist" style={{}}>
<svg className="lucide lucide-rocket w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(199, 210, 254)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16h8"></path><path d="M7 11h12"></path><path d="M7 6h3"></path></svg>
            Edge-optimized
          </span>
<a className="text-sm text-white/90 hover:text-white underline underline-offset-4 decoration-white/30 font-geist" href="#work" style={{}}>See examples</a>
</div>
</article>

<div className="lg:col-span-2 group relative overflow-hidden bg-neutral-900 border-white/10 border rounded-2xl">
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center text-xs font-medium text-purple-200 bg-purple-500/10 border border-purple-400/20 rounded-full px-3 py-1 font-geist" style={{}}>ENGINEERING</span>
<span className="text-xs text-neutral-300 font-geist" style={{}}>Production-ready code</span>
</div>
<span className="inline-flex items-center gap-1 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
              Live deployment
            </span>
</div>
<h3 className="text-2xl sm:text-4xl text-white tracking-tighter font-jakarta" style={{}}>
            Design engineering that bridges vision and reality
          </h3>
<p className="text-sm sm:text-base text-neutral-300 mt-2 mb-6 font-geist" style={{}}>
            We translate designs into scalable, performant code with modern frameworks and best practices—ready for production from day one.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
<div className="rounded-xl bg-gradient-to-br from-purple-950 to-purple-900 ring-1 ring-purple-400/20 p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-code-2 text-purple-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="text-sm font-medium text-purple-200 font-geist" style={{}}>Modern Stack</span>
</div>
<p className="text-xs text-purple-300 font-geist" style={{}}>React, Next.js, TypeScript, Tailwind CSS</p>
</div>
<div className="rounded-xl bg-gradient-to-br from-indigo-950 to-indigo-900 ring-1 ring-indigo-400/20 p-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-zap text-indigo-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium text-indigo-200 font-geist" style={{}}>Performance</span>
</div>
<p className="text-xs text-indigo-300 font-geist" style={{}}>Optimized builds, lazy loading, edge deployment</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#services" style={{}}>
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m10 14 9-9"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              View tech stack
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#work" style={{}}>
<svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5 0-1.2-.5-2.3-1.3-3.2.4-1 .4-2.2 0-3.2 0 0-1.3 0-3 1.5-2.6-.7-5.4-.7-8 0C6.7 7.1 5.4 7.1 5.4 7.1c-.4 1-.4 2.2 0 3.2C4.6 11.2 4.1 12.3 4.1 13.5c0 3.5 3 5.5 6 5.5-.4.6-.6 1.4-.6 2.2V22"></path></svg>
              Code examples
            </a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative overflow-hidden bg-neutral-900 border-white/10 border rounded-2xl">
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center text-xs font-medium text-orange-200 bg-orange-500/10 border border-orange-400/20 rounded-full px-3 py-1 font-geist" style={{}}>STRATEGY</span>
<span className="text-xs text-neutral-300 font-geist" style={{}}>Brand &amp; product alignment</span>
</div>
</div>
<h3 className="text-2xl sm:text-4xl text-white tracking-tighter font-jakarta" style={{}}>
            Strategic thinking that aligns teams and drives outcomes
          </h3>
<p className="text-sm sm:text-base text-neutral-300 mt-2 mb-6 font-geist" style={{}}>
            We start with understanding your business goals, user needs, and market context to ensure every design decision moves you forward.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-950 to-orange-900 ring-1 ring-orange-400/20">
<div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full mb-3">
<svg className="lucide lucide-target" data-lucide="target" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h4 className="font-medium text-orange-200 text-sm font-geist" style={{}}>Research</h4>
<p className="text-xs text-orange-300 font-geist" style={{}}>User interviews, market analysis, competitive audit</p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-950 to-emerald-900 ring-1 ring-emerald-400/20">
<div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-500 text-white rounded-full mb-3">
<svg className="lucide lucide-lightbulb" data-lucide="lightbulb" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 21h6"></path><path d="M12 3a9 9 0 0 1 9 9c0 2.5-1 4.8-2.6 6.5l-.4.5c-.3.4-.7.7-1.1.9-.8.4-1.7.6-2.6.6H9.7c-.9 0-1.8-.2-2.6-.6-.4-.2-.8-.5-1.1-.9l-.4-.5C4 16.8 3 14.5 3 12a9 9 0 0 1 9-9z"></path><path d="M12 7v5"></path></svg>
</div>
<h4 className="font-medium text-emerald-200 text-sm font-geist" style={{}}>Strategy</h4>
<p className="text-xs text-emerald-300 font-geist" style={{}}>Product roadmaps, feature prioritization</p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-950 to-blue-900 ring-1 ring-blue-400/20">
<div className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full mb-3">
<svg className="lucide lucide-users" data-lucide="users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h4 className="font-medium text-blue-200 text-sm font-geist" style={{}}>Alignment</h4>
<p className="text-xs text-blue-300 font-geist" style={{}}>Stakeholder workshops, design principles</p>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#services" style={{}}>
<svg className="lucide lucide-compass h-4 w-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"></path><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36Z"></path></svg>
              Our approach
            </a>
</div>
</div>
</div>

<article className="group relative bg-neutral-900 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium font-geist" style={{}}>Quality Assurance</h3>
<span className="text-[11px] text-neutral-300 font-geist" style={{}}>100%</span>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Rigorous testing and quality checks at every stage.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200 font-geist" style={{}}>Design Review</span>
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200 font-geist" style={{}}>User Testing</span>
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200 font-geist" style={{}}>Code Quality</span>
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2">
<span className="text-sm text-neutral-200 font-geist" style={{}}>Performance Audit</span>
<svg className="lucide lucide-clock text-orange-400" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-200 bg-emerald-500/10 rounded-full px-2 py-1 ring-1 ring-emerald-400/20 font-geist" style={{}}>
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Quality Guaranteed
          </span>
</div>
</article>
</div>
</div>
</section><section className="relative z-10 max-w-8xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pb-20 max-w-7xl">
<div className="relative overflow-hidden sm:p-8 bg-neutral-900 ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400 font-geist" style={{}}>(01) Innovation</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white mt-2 tracking-tighter font-jakarta" style={{fontFamily: '"Playfair Display", serif'}}>
              Driving Success with Quantum Labs
            </h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-[42ch] font-geist" style={{}}>
            Quantum Labs empowers startups and enterprises with cutting-edge solutions to accelerate growth, optimize performance, and scale seamlessly—delivering innovation, reliability, and exponential results.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="lg:col-span-2 group relative overflow-hidden bg-neutral-900 border-white/10 border rounded-2xl p-6">
<div className="flex items-start justify-between mb-4">
<h3 className="text-white text-xl sm:text-2xl tracking-tighter font-jakarta" style={{}}>Real-Time Performance Analytics</h3>
<span className="text-lg font-semibold text-emerald-400 font-geist" style={{}}>99.2%</span>
</div>
<p className="text-sm text-neutral-300 mb-6 font-geist" style={{}}>
              Monitor system performance, user engagement, and business metrics with our advanced analytics dashboard.
            </p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="relative h-[180px] rounded-xl bg-gradient-to-br from-blue-950 to-indigo-900 ring-1 ring-indigo-800/50 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-8 opacity-20">
<div className="border-r border-indigo-800/60"></div>
<div className="border-r border-indigo-800/60"></div>
<div className="border-r border-indigo-800/60"></div>
<div className="border-r border-indigo-800/60"></div>
<div className="border-r border-indigo-800/60"></div>
<div className="border-r border-indigo-800/60"></div>
<div className="border-r border-indigo-800/60"></div>
<div className=""></div>
</div>
<div className="absolute left-4 top-4 flex -space-x-2">
<img alt="team member 1" className="h-8 w-8 ring-2 ring-neutral-900 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/184099c3-3f6c-4f6f-a05a-830150bf75c1_320w.jpg" style={{}}/>
<img alt="team member 2" className="h-8 w-8 ring-2 ring-neutral-900 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/292b814a-2c70-4f95-a74d-5a101fc0b698_320w.jpg" style={{}}/>
<img alt="team member 3" className="h-8 w-8 ring-2 ring-neutral-900 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9e675575-668c-4087-8408-fa06dd33c5f0_320w.jpg"/>
</div>
<div className="absolute left-4 bottom-4">
<span className="inline-flex items-center gap-2 text-[11px] text-indigo-200 bg-white/5 rounded-full px-3 py-1.5 ring-1 ring-indigo-400/20 font-geist" style={{}}>
<svg className="lucide lucide-trending-up w-3.5 h-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    Performance Insights
                  </span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-950 to-emerald-900 ring-1 ring-emerald-700/40 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-emerald-500"></span>
<span className="text-sm text-emerald-200 font-medium font-geist" style={{}}>System Health Check</span>
</div>
<span className="text-[11px] text-emerald-300 font-geist" style={{}}>Active</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-950 to-orange-900 ring-1 ring-orange-700/40 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-orange-500"></span>
<span className="text-sm text-orange-200 font-medium font-geist" style={{}}>Load Balancing</span>
</div>
<span className="text-[11px] text-orange-300 font-geist" style={{}}>Optimizing</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-purple-950 to-purple-900 ring-1 ring-purple-700/40 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-purple-500"></span>
<div className="flex flex-col">
<span className="text-sm text-purple-200 font-medium font-geist" style={{}}>Data Processing</span>
<span className="text-[10px] text-purple-300 font-geist" style={{}}>Real-time stream analysis active</span>
</div>
</div>
<span className="text-[11px] text-purple-300 font-geist" style={{}}>Live</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-200 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10 font-geist" style={{}}>
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Powered by AI
              </span>
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-200 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10 font-geist" style={{}}>
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Secure &amp; Compliant
              </span>
</div>
</article>

<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium font-geist" style={{}}>Smart Automation Hub</h3>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Streamline workflows and boost productivity with intelligent automation.</p>
<div className="ring-1 ring-white/10 bg-neutral-900 rounded-xl mt-6 pt-4 pr-4 pb-4 pl-4 overflow-hidden">
<div className="relative h-[120px]">
<div className="">
<canvas className="w-full overflow-hidden" height="480" id="workChart" style={{display: 'block', boxSizing: 'border-box', height: '240px', width: '286px'}} width="572"></canvas>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-[11px] text-indigo-200 bg-indigo-500/10 rounded-full px-2 py-1 ring-1 ring-indigo-400/20 font-geist" style={{}}>
<svg className="lucide lucide-cpu w-3.5 h-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                Auto-Scaling
              </span>
</div>
</article>

<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium font-geist" style={{}}>Enterprise Integration</h3>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Seamlessly connect with your existing tech stack and third-party services.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2">
<span className="text-sm text-neutral-200 font-geist" style={{}}>01 API Gateway Setup</span>
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2">
<span className="text-sm text-neutral-200 font-geist" style={{}}>02 Data Synchronization</span>
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-orange-500/30 bg-orange-500/10 px-3 py-2">
<span className="text-sm text-neutral-200 font-geist" style={{}}>03 Security Protocols</span>
<svg className="lucide lucide-clock text-orange-400" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-neutral-900/60 px-3 py-2">
<span className="text-sm text-neutral-200 font-geist" style={{}}>04 Performance Optimization</span>
<svg className="lucide lucide-clock text-neutral-500" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</article>

<article className="lg:col-span-2 group relative overflow-hidden bg-neutral-900 border-white/10 border rounded-2xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white text-xl sm:text-2xl tracking-tighter font-jakarta" style={{}}>Advanced Security &amp; Compliance</h3>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-200 bg-emerald-500/10 rounded-full px-2 py-1 ring-1 ring-emerald-400/20 font-geist" style={{}}>
<svg className="lucide lucide-shield w-3.5 h-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  Enterprise Grade
                </span>
<span className="text-lg font-semibold text-neutral-200 font-geist" style={{}}>SOC 2 Certified</span>
</div>
</div>
<p className="text-sm text-neutral-300 mb-6 font-geist" style={{}}>
              Protect your data and maintain compliance with industry-leading security measures and automated governance tools.
            </p>
<div className="grid grid-cols-3 gap-4">
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-red-950 to-red-900 ring-1 ring-red-700/40">
<div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full mb-2">
<svg className="lucide lucide-lock" data-lucide="lock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h4 className="font-medium text-red-200 text-sm font-geist" style={{}}>Encryption</h4>
<p className="text-xs text-red-300 font-geist" style={{}}>End-to-end AES-256</p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-950 to-green-900 ring-1 ring-green-700/40">
<div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mb-2">
<svg className="lucide lucide-eye" data-lucide="eye" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h4 className="font-medium text-green-200 text-sm font-geist" style={{}}>Monitoring</h4>
<p className="text-xs text-green-300 font-geist" style={{}}>24/7 threat detection</p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-950 to-blue-900 ring-1 ring-blue-700/40">
<div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2">
<svg className="lucide lucide-file-check" data-lucide="file-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h4 className="font-medium text-blue-200 text-sm font-geist" style={{}}>Compliance</h4>
<p className="text-xs text-blue-300 font-geist" style={{}}>GDPR, HIPAA ready</p>
</div>
</div>
</article>
</div>

<div className="mt-10">
<div className="relative">
<div className="h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0"></div>
<div className="mt-6 grid grid-cols-5 text-[11px] text-neutral-300 font-sans">
<div className="flex items-center gap-2 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                DISCOVERY
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                PLANNING
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                DEVELOPMENT
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
                TESTING
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
                DEPLOYMENT
              </div>
</div>
</div>
</div>
</div>


</section>




<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-24 pl-4" id="contact">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,.08),transparent_45%)]"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
<p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-geist" style={{}}>Partner with us</p>
<h2 className="mt-2 text-3xl sm:text-4xl text-white tracking-tighter font-jakarta" style={{fontFamily: '"Playfair Display", serif'}}>Let’s build what’s next</h2>
<p className="mt-3 text-sm text-neutral-300 font-geist" style={{}}>Tell us about your goals, timeline, and constraints. We’ll reply within 24 hours.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-neutral-200 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Senior‑only team, no handoffs
              </li>
<li className="flex items-center gap-3 text-neutral-200 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Flexible engagement: sprint or retainer
              </li>
<li className="flex items-center gap-3 text-neutral-200 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                From‑to‑one to scale
              </li>
</ul>
</div>
<form action="#" aria-label="Contact form" className="p-6 sm:p-10 space-y-4" method="post">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300 font-geist" style={{}}>Name</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="name" placeholder="Jane Doe" required="" type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300 font-geist" style={{}}>Email</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="email" placeholder="jane@company.com" required="" type="email"/>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300 font-geist" style={{}}>Company</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="company" placeholder="Acme Inc." type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300 font-geist" style={{}}>Budget</span>
<select className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="budget">
<option className="bg-neutral-900 font-geist" style={{}} value="">Select a range</option>
<option className="bg-neutral-900 font-geist" style={{}}>$15k–$30k</option>
<option className="bg-neutral-900 font-geist" style={{}}>$30k–$75k</option>
<option className="bg-neutral-900 font-geist" style={{}}>$75k+</option>
</select>
</label>
</div>
<label className="block">
<span className="text-sm text-neutral-300 font-geist" style={{}}>Project details</span>
<textarea className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="message" placeholder="What are you building? What outcomes matter?" required="" rows="4"></textarea>
</label>
<label className="mt-2 inline-flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-neutral-900 text-emerald-500 focus:ring-emerald-500/50" required="" type="checkbox"/>
<span className="text-xs text-neutral-400 font-geist" style={{}}>I agree to the processing of my information in line with the privacy policy.</span>
</label>
<div className="pt-2">
<button className="inline-flex items-center justify-center text-base font-medium text-white bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-600 rounded-full h-12 px-6 ring-1 ring-emerald-400/30 shadow-[0_6px_24px_-8px_rgba(16,185,129,0.5)] transition-all font-geist" style={{}} type="submit">
                Request intro
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="sm:p-8 bg-zinc-900/50 border-zinc-800 border rounded-3xl mt-10 mr-4 mb-10 ml-4 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="">
<h3 className="text-4xl text-zinc-100 font-geist font-medium tracking-tighter" style={{}}>
        Ready to transform your workflows with intelligent automation?
        <span className="underline decoration-zinc-600 underline-offset-4 font-geist font-medium tracking-tighter" style={{}}>Let's get started</span>.
      </h3>
<div className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/622fbc3c-5896-4f6c-a4ba-809a830e1143_320w.jpg)] bg-cover border-zinc-700 border rounded-full items-center justify-center">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight text-zinc-100 font-geist" style={{}}>Alex Rivera</p>
<p className="text-xs text-zinc-500 font-geist" style={{}}>AI Solutions Lead</p>
</div>
</div>
<div className="mt-10 space-y-2">
<p className="text-sm text-zinc-400 font-geist" style={{}}>support@sanoai.com</p>
<a className="inline-flex items-center gap-3 text-2xl sm:text-3xl text-zinc-100 underline decoration-zinc-600 underline-offset-4 font-geist font-medium tracking-tighter" href="mailto:hello@sanoai.com" style={{}}>
<span className="inline-flex h-7 w-7 items-center justify-center text-zinc-900 bg-zinc-100 rounded-full">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
          hello@sanoai.com
        </a>
</div>
</div>

<div className="">
<h4 className="text-2xl sm:text-3xl text-zinc-100 font-geist font-medium tracking-tighter" style={{}}>Stay Updated</h4>
<form className="mt-6 space-y-6">
<div className="">
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Your name *" type="text"/>
</div>
<div className="">
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Email *" type="email"/>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist" style={{}} type="submit">
                                Subscribe
                                <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
<p className="text-sm text-zinc-500 font-geist" style={{}}>Get weekly insights on workflow automation and AI trends.
          </p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<p className="text-xs text-zinc-500 font-normal font-geist" style={{}}>Quick Links</p>
<ul className="mt-3 space-y-2">
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Platform</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Features</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Pricing</a></li>
<li><a className="text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>Docs</a></li>
</ul>
</div>
<div>
<p className="text-xs text-zinc-500 font-normal font-geist" style={{}}>Connect</p>
<ul className="mt-3 space-y-2">
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>
                GitHub
                <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path>
<path d="M10 14 21 3"></path>
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>
                Discord
                <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path>
<path d="M10 14 21 3"></path>
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-zinc-100 hover:underline underline-offset-4 font-geist" href="#" style={{}}>
                Twitter
                <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path>
<path d="M10 14 21 3"></path>
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium tracking-tight font-geist" style={{}}>SANO</span>
</div>
<p className="text-xs text-zinc-500 font-geist" style={{}}>© <span className="font-normal font-geist" style={{}}>2024</span>
      SANO — All rights reserved</p>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative ml-auto h-full w-[85%] max-w-sm bg-neutral-950 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-white font-semibold font-geist" style={{fontFamily: '"Playfair Display", serif'}}>SANO</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15" id="closeMenu">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<nav className="mt-6 flex flex-col gap-2 text-base">
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#work" style={{}}>Work</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#services" style={{}}>Services</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#approach" style={{}}>Approach</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#contact" style={{}}>Contact</a>
</nav>
<div className="mt-6">
<a className="inline-flex items-center justify-center w-full text-sm text-white bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-600 rounded-full h-11 px-6 ring-1 ring-emerald-400/30 font-geist" href="#contact" style={{}}>Get Started</a>
</div>
</div>
</div>



    </>
  );
}
