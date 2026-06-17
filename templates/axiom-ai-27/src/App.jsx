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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


  // One shared observer; safe to call initInViewAnimations() multiple times
  (function () {
    const once = true;

    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    }

    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el); // observing twice is a no-op
      });
    };

    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  (() => {
    try { lucide.createIcons(); } catch (e) {}

    // Billing toggle
    const toggle = document.getElementById('billingToggle');
    const knob = document.getElementById('billingKnob');
    let annual = true; // default to Annual as shown in the image

    const priceEls = document.querySelectorAll('[data-monthly][data-annual]');
    const periodEls = document.querySelectorAll('[data-period]');
    const badge = document.getElementById('annualBadge');

    function renderBilling() {
      priceEls.forEach(el => { el.textContent = annual ? el.dataset.annual : el.dataset.monthly; });
      periodEls.forEach(el => { el.textContent = annual ? '/yr' : '/mo'; });
      knob.style.transform = annual ? 'translateX(32px)' : 'translateX(0px)';
      badge && (badge.style.opacity = annual ? '1' : '0.65');
    }
    toggle?.addEventListener('click', () => { annual = !annual; renderBilling(); });
    renderBilling();

    // FAQ toggles
    document.querySelectorAll('[data-faq]').forEach(card => {
      const btn = card.querySelector('[data-faq-btn]');
      const ans = card.querySelector('[data-faq-answer]');
      const plus = card.querySelector('[data-faq-plus]');
      const minus = card.querySelector('[data-faq-minus]');
      btn?.addEventListener('click', () => {
        const open = ans.classList.toggle('hidden');
        const isOpen = !open;
        plus.classList.toggle('hidden', isOpen);
        minus.classList.toggle('hidden', !isOpen);
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });
  })();



      lucide.createIcons();

      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      let open = false;
      menuBtn?.addEventListener('click', () => {
        open = !open;
        mobileNav.style.opacity = open ? '1' : '0';
        mobileNav.style.transform = open ? 'scale(1)' : 'scale(0.95)';
        mobileNav.style.visibility = open ? 'visible' : 'hidden';
      });

      const flare = document.getElementById('flare');
      window.addEventListener('mousemove', (e) => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX / w - 0.5) * 30;
        const y = (e.clientY / h - 0.5) * 18;
        flare.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      }, { passive: true });
    
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>
<header className="z-20 relative">
<div className="flex md:px-8 max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="/">
<span className="text-base tracking-tight text-white/90 font-sans" style={{}}>STEVEMARTIN</span>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="uppercase hover:text-white/90 text-xs text-white/70 tracking-[0.18em]" href="/case">Case Studies</a>
<a className="uppercase hover:text-white/90 text-xs text-white/70 tracking-[0.18em]" href="/journal" style={{}}>Journal</a>
<a className="uppercase hover:text-white/90 text-xs text-white/70 tracking-[0.18em]" href="/contact">Contact</a>
</nav>
<div className="hidden md:flex">
<a className="inline-flex items-center gap-2 uppercase hover:bg-white/5 text-xs text-white/90 tracking-[0.18em] border-white/15 border rounded-md pt-2 pr-4 pb-2 pl-4" href="/signin">
              Get Started
              <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<button className="md:hidden inline-flex text-white/80 bg-white/5 w-10 h-10 border-white/15 border rounded-xl items-center justify-center" id="menuBtn">
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="fixed z-20 origin-top transition bg-black/80 opacity-0 invisible border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 top-20 right-4 left-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur scale-95" id="mobileNav" style={{opacity: '0', transform: 'scale(0.95)', visibility: 'hidden'}}>
<div className="flex flex-col gap-4">
<a className="hover:bg-white/5 text-sm text-white/85 rounded-md pt-2 pr-3 pb-2 pl-3" href="/case" style={{}}>Case Studies</a>
<a className="hover:bg-white/5 text-sm text-white/85 rounded-md pt-2 pr-3 pb-2 pl-3" href="/journal" style={{}}>Journal</a>
<a className="hover:bg-white/5 text-sm text-white/85 rounded-md pt-2 pr-3 pb-2 pl-3" href="/contact" style={{}}>Contact</a>
<a className="inline-flex items-center justify-center gap-2 uppercase hover:bg-white/5 text-xs text-white/90 tracking-[0.18em] border-white/15 border rounded-md mt-2 pt-2 pr-4 pb-2 pl-4" href="/signin">
              Get Started
              <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>
<div className="z-10 relative">
<div className="grid grid-cols-1 grid-rows-[minmax(0,1fr)] md:px-8 md:pb-24 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20 min-h-[calc(100vh-96px)] max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-16 pl-6 gap-x-12 gap-y-12 items-center">
<div className="col-span-7 flex flex-col justify-center" style={{animation: 'fadeSlideIn 1.2s ease-out forwards'}}>
<style>
    @keyframes fadeSlideIn {
      0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
      100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
    }
  </style>
<h1 className="sm:text-6xl lg:font-normal lg:text-8xl text-5xl font-medium text-white tracking-tighter font-manrope drop-shadow-xl" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>Campaigns that Learn. Websites that Convert.<br className="hidden sm:block"/></h1>
<p 75="" className="leading-relaxed text-lg text-white/85 max-w-2xl mt-6" leading-relaxed="" max-w-2xl="" mt-4"="" style={{animation: '1s ease-out 0.4s 1 normal both running fadeSlideIn'}} text-base="" text-white="">
    From research and strategy to conversion‑driven design, content automation, and analytics, Steve Martin helps teams move from idea to impact—without losing control or velocity.
  </p>
<div className="flex flex-col sm:flex-row sm:items-center mt-10 gap-x-4 gap-y-4" style={{animation: 'fadeSlideIn 1s ease-out 0.8s both'}}>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/90 text-sm text-black tracking-tight bg-white rounded-xl pt-3 pr-5 pb-3 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
      Book Strategy Call
      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 text-sm text-white/90 tracking-tight bg-white/5 border-white/15 border rounded-xl pt-3 pr-5 pb-3 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
      See Portfolio
      <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>
<div className="col-span-7 md:col-span-5 self-end w-full justify-self-end" style={{animation: 'fadeSlideIn 1s ease-out 0.9s both'}}>
<div className="max-w-xl border-white/10 border rounded-3xl ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl">
<p className="leading-relaxed text-xl font-normal text-white/90 tracking-tight" style={{}}>A modular stack for ingestion, reasoning, and safe execution. Start small, scale to production, and stay in control at every step.</p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 font-sans" style={{}}>
<svg className="lucide lucide-chevron-right h-3.5 w-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Ingest
                </span>
<span className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/5 border-white/10 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3" style={{}}>
<svg className="lucide lucide-chevron-right h-3.5 w-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Reason
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 font-sans" style={{}}>
<svg className="lucide lucide-chevron-right h-3.5 w-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Orchestrate
                </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 font-sans" style={{}}>
<svg className="lucide lucide-chevron-right h-3.5 w-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Measure
                </span>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
<section className="isolate overflow-hidden min-h-[1000px] md:h-screen relative">
<img alt="Abstract 3D render background" className="pointer-events-none sm:max-h-full w-full h-full max-h-[600px] object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7dab73b-a64e-4634-a1c4-23db2c706e19_3840w.jpg" style={{maskImage: 'linear-gradient(to bottom, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent)'}}/>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,255,255,0.06),transparent),linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.35))]"></div>
<div className="z-10 flex flex-col md:px-8 h-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative gap-x-10 gap-y-10 justify-center">
<div className="max-w-3xl">
<h2 className="sm:text-5xl lg:text-6xl animate-on-scroll text-4xl font-medium text-white tracking-tight font-manrope drop-shadow-xl" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
      Intelligent marketing. Proven results.
    </h2>
<p className="sm:text-lg leading-relaxed animate-on-scroll text-base text-white/85 max-w-2xl mt-5" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
      Ship with complete confidence through transparent metrics, human oversight, and continuous improvement—built for teams that need results.
    </p>
<style>
  /* Default: paused */
  .animate-on-scroll { animation-play-state: paused !important; }
  /* Activated by JS */
  .animate-on-scroll.animate { animation-play-state: running !important; }
</style>

</div>
<div className="grid gap-6 lg:grid-cols-3 gap-x-6 gap-y-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>

<div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.18em] text-white/60">Performance highlights</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/70 ring-1 ring-white/10">
<svg className="lucide lucide-activity h-3 w-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Active
        </span>
</div>
<p className="mt-4 text-lg leading-relaxed text-white/90">
        Enterprise AI adoption increased by <span className="text-emerald-400">84%</span> this year
      </p>
<div className="mt-6">
<div className="relative h-24 w-full rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent">
<div className="absolute inset-x-0 bottom-6 h-[2px] bg-white/10"></div>
<div className="absolute left-1/2 bottom-6 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.15)]"></div>
<div className="absolute inset-x-0 top-4 flex justify-between px-2 text-[10px] text-white/50">
<span className="">2025</span><span>2024</span><span className="">2023</span><span className="">2022</span><span className="">2021</span>
</div>
</div>
<div className="mt-5">
<div className="text-4xl font-medium tracking-tight text-white">$45B</div>
<div className="text-sm text-white/60">Market Value</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 bg-black/60 p-2 backdrop-blur-xl">
<div className="relative overflow-hidden rounded-2xl bg-white/5">
<img alt="Identity verification" className="h-56 w-full object-cover sm:h-64" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9697d77-7cef-47f0-802d-d73dbea68da3_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-[radial-gradient(60%_30%_at_50%_55%,rgba(163,230,53,0.25),transparent)]"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="h-1 w-3/4 rounded bg-lime-400 shadow-[0_0_30px_rgba(132,204,22,0.45)]"></div>
</div>

<div className="pointer-events-none absolute inset-0 grid grid-cols-6 grid-rows-6">
<div className="col-span-6 row-span-6 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:16.666%_100%,100%_16.666%]"></div>
</div>
<div className="absolute left-4 top-4 rounded-md bg-black/60 px-2 py-1 text-xs text-white/85 ring-1 ring-white/10">
          Match confirmed
        </div>
<div className="p-4">
<div className="mt-2 text-base font-medium text-white/90">Smart Recognition</div>
<div className="text-sm text-white/60">Advanced Processing</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
<p className="text-lg leading-relaxed text-white/90">
        Achieving <span className="text-lime-400">92%</span> accuracy rate, our platform delivers consistent enterprise-grade performance.
      </p>
<div className="mt-6">
<div className="text-sm text-white/70">Performance Overview</div>
<div className="mt-4 space-y-4">

<div className="">
<div className="flex items-baseline justify-between">
<span className="text-sm text-white/80">Completed</span>
<span className="text-base text-white/90">78%</span>
</div>
<div className="mt-2 h-3 w-full rounded-full bg-white/10">
<div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
</div>
</div>

<div className="">
<div className="flex items-baseline justify-between">
<span className="text-sm text-white/80">Processing</span>
<span className="text-base text-white/90">14%</span>
</div>
<div className="mt-2 h-3 w-full rounded-full bg-white/10">
<div className="h-3 w-[14%] rounded-full bg-gradient-to-r from-sky-400 to-blue-500"></div>
</div>
</div>

<div className="">
<div className="flex items-baseline justify-between">
<span className="text-sm text-white/80">Pending</span>
<span className="text-base text-white/90">8%</span>
</div>
<div className="mt-2 h-3 w-full rounded-full bg-white/10">
<div className="relative h-3 w-[8%] overflow-hidden rounded-full bg-white/10">
<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.2)_0_6px,rgba(255,255,255,0.05)_6px_12px)]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-3 text-xs text-white/60">
<svg className="lucide lucide-shield-check h-4 w-4 text-white/70" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        Quality-assured workflows
      </div>
</div>
</div>

<div className="flex flex-wrap text-white/50 mt-4 gap-x-8 gap-y-4 items-center animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.8s both'}}>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-network h-3.5 w-3.5" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</span>
      TechFlow
    </span>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-flame h-3.5 w-3.5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</span>
      InnovateLab
    </span>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-diamond h-3.5 w-3.5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</span>
      DataCraft
    </span>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</span>
      CloudMind
    </span>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-code-2 h-3.5 w-3.5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</span>
      DevCore
    </span>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
</section><section className="isolate overflow-hidden h-screen relative">
<img alt="Atmospheric mountain landscape" className="pointer-events-none absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bca741b3-96ce-43a2-8fc0-931f321709e3_3840w.jpg" style={{}}/>
<div className="z-10 flex h-full relative items-center">
<div className="md:px-8 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<span className="inline-flex items-center gap-2 text-[11px] uppercase ring-white/10 ring-1 animate-on-scroll text-white/70 tracking-[0.18em] bg-white/5 rounded-full pt-1 pr-3 pb-1 pl-3" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<svg className="lucide lucide-quote h-3.5 w-3.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
        Customer Story
      </span>
<p className="sm:text-4xl md:text-5xl animate-on-scroll text-3xl font-medium text-white tracking-tight font-manrope mt-6 drop-shadow-xl" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
        “Steve helped us stand up a conversion‑focused site and an AI‑assisted content engine in weeks—not months. We shipped faster and scaled our inbound while keeping quality high.”
      </p>
<div className="flex animate-on-scroll mt-6 gap-x-3 gap-y-3 items-center justify-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-user h-4.5 w-4.5 text-white/80" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<div className="text-left">
<div className="text-sm font-medium text-white/90">Mara Chen</div>
<div className="text-xs text-white/60">VP, Data Platform at Vertex Labs</div>
</div>
</div>
</div>
</div><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_40%,rgba(0,0,0,0.05),rgba(0,0,0,0.7)),linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.35))]"></div>
<div className="absolute inset-x-0 bottom-8 z-10">
<div className="flex flex-wrap animate-on-scroll text-white/55 max-w-5xl mr-auto ml-auto gap-x-10 gap-y-4 items-center justify-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-activity h-3.5 w-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
        PulseOne
      </span>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-brain h-3.5 w-3.5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</span>
        Mindspace
      </span>
<span className="inline-flex items-center gap-2 text-sm">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-waves h-3.5 w-3.5" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</span>
        Serenity
      </span>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
</section><section className="isolate overflow-hidden pt-24 pb-24 relative">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="z-10 md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center">
<h2 className="sm:text-5xl text-4xl font-medium text-white tracking-tight font-manrope animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>Pricing Plans</h2>
<div className="flex mt-6 gap-x-4 gap-y-4 items-center justify-center animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<span className="text-sm text-white/70">Monthly</span>
<button className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 transition" id="billingToggle">
<span className="inline-flex h-6 w-6 translate-x-8 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition will-change-transform" id="billingKnob" style={{transform: 'translateX(32px)'}}></span>
</button>
<span className="text-sm text-white/70">Annual
          <span className="ml-2 inline-flex items-center rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300 ring-1 ring-amber-300/20" id="annualBadge" style={{opacity: '1'}}>Save 20%</span>
</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-3 mt-10 gap-x-6 gap-y-6">

<div className="animate-on-scroll border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm uppercase tracking-[0.18em] text-white/60">Starter</div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-medium tracking-tight text-white">$0</div>
<div className="text-sm text-white/50" data-period="">/yr</div>
</div>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium tracking-tight text-black hover:bg-white/90">
          Start Building
        </button>
<ul className="mt-6 space-y-3 text-sm text-white/75">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Up to 1K API calls per month
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Basic data ingestion pipelines
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Web console access
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Community support
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Basic monitoring &amp; alerts
          </li>
</ul>
</div>

<div className="border-white/10 border ring-amber-300/10 ring-1 rounded-3xl pt-2 pr-2 pb-2 pl-2 relative backdrop-blur-xl animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent">
<div className="absolute inset-0">
<img alt="Premium background" className="h-48 w-full rounded-t-2xl object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4e1d3b-35ab-4746-b256-e27b9e31b7b5_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(251,191,36,0.25),transparent_60%)]"></div>
</div>
<div className="relative p-6">
<div className="flex items-start justify-between">
<div className="">
<div className="text-sm uppercase tracking-[0.18em] text-white/70">Professional</div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-medium tracking-tight text-white" data-annual="$470" data-monthly="$49">$470</div>
<div className="text-sm text-white/60" data-period="">/yr</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2 py-1 text-[10px] text-amber-300 ring-1 ring-amber-300/25">
<svg className="lucide lucide-star h-3.5 w-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Most Popular
              </span>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-amber-300 to-amber-400 px-4 py-3 text-sm font-medium tracking-tight text-black shadow-[0_10px_30px_rgba(251,191,36,0.25)] hover:from-amber-200 hover:to-amber-300">
              Upgrade to Pro
            </button>
<ul className="mt-6 space-y-3 text-sm text-white/85">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Unlimited API calls
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Advanced reasoning models &amp; orchestration
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Performance analytics &amp; insights
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Custom workflows &amp; integrations
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Priority support with SLA
              </li>
</ul>
</div>
</div>
</div>

<div className="animate-on-scroll border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm uppercase tracking-[0.18em] text-white/60">Enterprise</div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-medium tracking-tight text-white">Custom</div>
<div className="text-sm text-white/50" data-period="">/yr</div>
</div>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium tracking-tight text-white/90 hover:bg-white/10">
          Contact Sales
        </button>
<ul className="mt-6 space-y-3 text-sm text-white/75">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            On‑premises &amp; private cloud deployment
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Advanced security &amp; compliance controls
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Dedicated support team &amp; onboarding
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Team management &amp; usage analytics
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Custom model training &amp; fine‑tuning
          </li>
</ul>
</div>
</div>
<p className="animate-on-scroll text-xs text-white/50 text-center mt-6" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>All plans include 14-day free trial. No setup fees.</p>
</div>
</section><section className="isolate overflow-hidden pt-24 pb-24 relative">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
<h3 className="sm:text-4xl animate-on-scroll text-3xl font-medium text-white tracking-tight font-manrope text-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>Frequently Asked Questions</h3>
<div className="grid md:grid-cols-2 animate-on-scroll mt-10 gap-x-4 gap-y-4" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-2" data-faq="">
<button aria-expanded="false" className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left" data-faq-btn="">
<span className="text-sm md:text-base text-white/85">How quickly can I deploy AI models to production?</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-plus h-4 w-4 text-white/70" data-faq-plus="" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus hidden h-4 w-4 text-white/70" data-faq-minus="" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-4 pb-4 text-sm text-white/70 hidden" data-faq-answer="">
          With Axiom's modular architecture, most teams deploy their first AI workflow within hours. Our pre-built pipelines and safety guardrails accelerate time-to-production by 3x compared to building from scratch.
        </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-2" data-faq="">
<button aria-expanded="false" className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left" data-faq-btn="">
<span className="text-sm md:text-base text-white/85">What security measures protect my data?</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-plus h-4 w-4 text-white/70" data-faq-plus="" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus hidden h-4 w-4 text-white/70" data-faq-minus="" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-4 pb-4 text-sm text-white/70 hidden" data-faq-answer="">
          All data is encrypted in transit and at rest with enterprise-grade security. You maintain full control over data retention, access, and deletion. Enterprise plans include on-premises deployment options for maximum security.
        </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-2" data-faq="">
<button aria-expanded="false" className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left" data-faq-btn="">
<span className="text-sm md:text-base text-white/85">Which AI models and frameworks are supported?</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-plus h-4 w-4 text-white/70" data-faq-plus="" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus hidden h-4 w-4 text-white/70" data-faq-minus="" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-4 pb-4 text-sm text-white/70 hidden" data-faq-answer="">
          Axiom supports all major language models (GPT, Claude, Gemini), computer vision frameworks (PyTorch, TensorFlow), and cloud providers (AWS, Azure, GCP). Custom model integration is available for Enterprise customers.
        </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-2" data-faq="">
<button aria-expanded="false" className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left" data-faq-btn="">
<span className="text-sm md:text-base text-white/85">How does performance monitoring work?</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-plus h-4 w-4 text-white/70" data-faq-plus="" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus hidden h-4 w-4 text-white/70" data-faq-minus="" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-4 pb-4 text-sm text-white/70 hidden" data-faq-answer="">
          Real-time dashboards track accuracy, latency, cost, and model drift. Automated alerts notify you of performance issues, and built-in A/B testing helps optimize results across diverse environments and use cases.
        </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-2" data-faq="">
<button aria-expanded="false" className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left" data-faq-btn="">
<span className="text-sm md:text-base text-white/85">Can Axiom integrate with existing systems?</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-plus h-4 w-4 text-white/70" data-faq-plus="" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus hidden h-4 w-4 text-white/70" data-faq-minus="" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-4 pb-4 text-sm text-white/70 hidden" data-faq-answer="">
          Yes. Axiom provides REST APIs, webhooks, and pre-built connectors for popular databases, CRMs, and workflow tools. Our platform adapts to your existing infrastructure without requiring major changes.
        </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-2" data-faq="">
<button aria-expanded="false" className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left" data-faq-btn="">
<span className="text-sm md:text-base text-white/85">What support options are available?</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-plus h-4 w-4 text-white/70" data-faq-plus="" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus hidden h-4 w-4 text-white/70" data-faq-minus="" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-4 pb-4 text-sm text-white/70 hidden" data-faq-answer="">
          All users access community forums and documentation. Professional plans include priority support with SLA guarantees. Enterprise customers receive dedicated account managers and onboarding assistance.
        </div>
</div>
</div>
</div>
</section><footer className="isolate overflow-hidden bg-black border-white/10 border-t relative">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.02),transparent_60%)]"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
<div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

<div className="col-span-5">
<a className="flex items-center gap-3" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-asterisk h-5 w-5 text-white/90" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white/90">Axiom</span>
</a>
<p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
          Intelligence, Reconstructed. Build AI systems that learn, adapt, and scale with complete transparency and control.
        </p>
<div className="mt-6 flex items-center gap-4">
<a className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white/90" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white/90" href="#">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white/90" href="#">
<svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div className="col-span-7 grid grid-cols-2 gap-8 md:grid-cols-4">

<div>
<h4 className="text-sm font-medium text-white/90">Product</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Features</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Console</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">API</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Integrations</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Security</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white/90">Solutions</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-white/70 hover:text-white/90" href="#">Enterprise</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Startups</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Developers</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Research</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white/90">Resources</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Documentation</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Guides</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Blog</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Case Studies</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Community</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white/90">Company</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">About</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Careers</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Press</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Contact</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90" href="#">Support</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<h4 className="text-base font-medium text-white/90">Stay updated</h4>
<p className="mt-1 text-sm text-white/70">Get the latest AI insights and product updates.</p>
</div>
<div className="flex gap-3">
<input className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 backdrop-blur focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 md:w-64" placeholder="Enter your email" type="email"/>
<button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
            Subscribe
            <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
<p className="text-xs text-white/50">© 2024 Axiom Technologies. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-white/50">
<a className="hover:text-white/70" href="#">Privacy Policy</a>
<a className="hover:text-white/70" href="#">Terms of Service</a>
<a className="hover:text-white/70" href="#">Cookie Policy</a>
<div className="flex items-center gap-1">
<svg className="lucide lucide-shield-check h-3.5 w-3.5 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          SOC 2 Compliant
        </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
