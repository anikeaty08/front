import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

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
        window.__inViewIO.observe(el);
      });
    };

    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  // Mobile menu interactions
  (function () {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('mobileMenuClose');

    function openMenu() {
      menu.classList.remove('hidden');
      menu.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overflow-hidden');
    }
    function closeMenu() {
      menu.classList.add('hidden');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('overflow-hidden');
    }

    if (toggle && menu) {
      toggle.addEventListener('click', openMenu);
    }
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    menu?.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.classList.contains('hidden')) closeMenu(); });

    // Footer year
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[1100px]"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div></div>

<div className="fixed inset-0 -z-10" style={{}}>
<div className="bg-gradient-to-b from-purple-900/20 via-black to-black absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
</div>
<style className="">
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>

<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between">
<a className="text-2xl font-semibold tracking-tight font-geist" href="/">AutomateItPlease</a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#originals">Growth System</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#library">Results</a>
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#plans">Services</a>
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="/#faq">FAQ</a>

<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="https://www.automateitplease.com/slack-bot">Slack Bot</a>
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="https://www.automateitplease.com/clay-calculator">Clay Calculator</a>
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="https://www.automateitplease.com/free-resources">Free Resources</a>
<div className="relative inline-block group text-xs rounded-full">
<button className="relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full">
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Book Strategy Call</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 text-xs rounded-full" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
        Menu
      </button>
</nav>

<section className="z-10 sm:pt-20 md:pt-32 md:pb-32 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">

<div className="flex [animation:fadeSlideIn_1s_ease-out_0.1s_both] mb-6 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex -space-x-3">
<img alt="Agency Owner 1" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/59145a03-3960-4b58-b8bf-d24d645b070f_320w.webp"/>
<img alt="Agency Owner 2" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d92dd0bd-e18b-4459-903b-30cf16d2eae8_320w.webp"/>
<img alt="Agency Owner 3" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aa3dc352-fe25-42df-b2e7-3e73fc0e2cd1_320w.webp"/>
<img alt="Agency Owner 4" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/36101c71-d212-4acb-b02c-6071aad3e6f4_800w.webp"/>
<img alt="Agency Owner 5" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e609d3b8-62f1-4b0b-afd1-81402d269b00_800w.webp"/>
</div>
<div className="flex flex-col items-start opacity-50">
<div className="flex items-center">
<svg className="w-[16px] h-[16px] fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-1 text-xs font-medium text-white/70 font-geist">Rated 4.9 • Trusted by 150+ agencies</p>
</div>
</div>
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto" style={{}}>
        Close 30% More Deals While Working 20% Less.
      </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
        Custom automation systems for agencies. 40% faster proposal-to-close, 15+ hours saved per team member per week—without extra staff or burnout. 90-day results guarantee.
      </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center" id="cta">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Book Strategy Call</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">15‑min demo + Q&amp;A</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" href="#library">
          See integration options
        </a>
</div>

<div className="relative mt-16 [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-white/10">
<img alt="Featured case study" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/122a4553-2c4e-49d5-86de-7643c3cbec75_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 text-xs font-medium text-red-200 font-geist">NEW CASE STUDY</span>
<h3 className="text-3xl font-semibold mt-3 tracking-tight font-geist">Proposal-to-Close Automation</h3>
<p className="text-white/80 mt-2 max-w-xl font-geist">40% faster deal velocity and 15+ hours saved per rep within 60 days—no new hires.</p>
</div>
</div>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-24 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Integrates with your existing stack</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="text-white/40 text-2xl font-semibold font-geist">Slack</div>
<div className="text-white/40 text-2xl font-semibold font-geist">n8n</div>
<div className="text-white/40 text-2xl font-semibold font-geist">Smartlead</div>
<div className="text-white/40 text-2xl font-semibold font-geist">Google Sheets</div>
<div className="text-white/40 text-2xl font-semibold font-geist">CRM</div>
<div className="text-white/40 text-2xl font-semibold font-geist">Webhooks</div>
</div>
</section>

<section className="overflow-hidden relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl md:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-geist tracking-tighter" style={{}}>Built for agencies: systems, not software.</h2>
<p className="mt-4 text-base text-white/70 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll font-geist">We architect custom automation systems that transform workflows end-to-end—proposal-to-close, onboarding, client access, and ops—so your team scales without burnout.</p>
<div className="flex [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-6 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm font-medium bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 backdrop-blur font-geist" href="#library">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
            Learn more
          </a>
<a className="inline-flex items-center gap-2 hover:bg-purple-500 transition text-sm font-medium text-white bg-purple-600 rounded-lg pt-2 pr-4 pb-2 pl-4 font-geist" href="#cta">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            See integration options
          </a>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll relative">
<img alt="Automation system preview" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cef612fc-fed9-43fc-896c-6df5524216b5_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="originals">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">Agency Growth System</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{}}>Your Agency Growth System</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">Close 30% more deals and save 15+ hours per rep per week through custom workflows built around your operations.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="relative">
<img alt="Operations overhaul" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/55bc760f-a9a7-4d7b-b54b-bbcaf6148ee1_1600w.webp"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-red-400/30 bg-red-400/15 px-2 py-0.5 text-[11px] font-medium text-red-200 font-geist">WHITE-LABELED</span>
<span className="text-xs text-white/60 font-geist">90-day rollout • End-to-end</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-geist tracking-tighter" style={{}}>Complete operations overhaul</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">From sequencers and pipelines to onboarding and handovers—custom automation systems that remove bottlenecks and scale your delivery.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#cta">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Book strategy call
          </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/5 border-white/10 border rounded-lg px-4 py-2 hover:bg-white/10 font-geist" href="#library">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
            See integration options
          </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            Proposal-to-close accelerators
          </h3>
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/15 px-2 py-0.5 text-[11px] font-medium text-purple-200 font-geist">40% faster</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
            Shorten cycles from first call to signed agreement with smart sequencing, automated follow-ups, and instant next-step nudges.
          </p>
<ul className="mt-4 space-y-2 text-sm text-white/70 font-geist">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-purple-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
              Auto-sequenced proposals and reminders
            </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-purple-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
              Calendar + CRM stage sync to prevent stalls
            </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-purple-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
              One-click send for contracts and invoices
            </li>
</ul>
<div className="mt-5">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 font-geist" href="#library">
              View playbook
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.55s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            Onboarding &amp; handover automation
          </h3>
<span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">Zero chaos</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
          Turn “sold” into “live” without Slack pings and spreadsheet hunts. Roles, checklists, access, and timelines—fully orchestrated.
        </p>
<ul className="mt-4 space-y-2 text-sm text-white/70 font-geist">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Auto-kickoff with roles, assets, permissions
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            SLA timers and nudges to keep momentum
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Unified source of truth across teams
          </li>
</ul>
<div className="mt-5">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 font-geist" href="#cta">
            Book a walkthrough
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            AE productivity toolkit
          </h3>
<span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/15 px-2 py-0.5 text-[11px] font-medium text-blue-200 font-geist">+15 hrs/week</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
          Inbox zero, task automation, and “next best action” surfaced in Slack—so reps sell, not shuffle tabs.
        </p>
<ul className="mt-4 space-y-2 text-sm text-white/70 font-geist">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-blue-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            One-tap follow-ups and notes sync
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-blue-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Pipeline hygiene assistants
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-blue-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Meeting recaps to CRM automatically
          </li>
</ul>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.65s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            Client portals &amp; access
          </h3>
<span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/15 px-2 py-0.5 text-[11px] font-medium text-amber-200 font-geist">Self-serve</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
          Branded portals that surface progress, requests, and assets—reducing update calls and back-and-forth emails.
        </p>
<ul className="mt-4 space-y-2 text-sm text-white/70 font-geist">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Secure sharing and role-based access
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Live status and approvals
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Email-less requests and intake forms
          </li>
</ul>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            Lead routing &amp; CRM hygiene
          </h3>
<span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/15 px-2 py-0.5 text-[11px] font-medium text-cyan-200 font-geist">No-leak CRM</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
          Fair lead distribution, dedupe, and SLAs so nothing slips. Your pipeline becomes a prediction, not a guess.
        </p>
<ul className="mt-4 space-y-2 text-sm text-white/70 font-geist">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Territory logic and round-robin routing
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Auto-enrichment and duplicate control
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Stale deal reactivation
          </li>
</ul>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.75s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            Reporting &amp; RevOps telemetry
          </h3>
<span className="inline-flex items-center rounded-full border border-fuchsia-400/30 bg-fuchsia-400/15 px-2 py-0.5 text-[11px] font-medium text-fuchsia-200 font-geist">Realtime</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
          One version of the truth for leaders: velocity, coverage, conversion, and capacity—streamed to Slack and dashboards.
        </p>
<ul className="mt-4 space-y-2 text-sm text-white/70 font-geist">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Deal velocity &amp; cycle time tracking
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Forecast coverage with alerts
          </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
            Capacity signals for hiring
          </li>
</ul>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-24 pl-6 relative" id="library">
<div className="mb-10 text-center">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">Results</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">Proven impact in 90 days</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">Handpicked outcomes from recent rollouts across agency sales and delivery.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 [animation:fadeSlideIn_1s_ease-out_0.35s_both] animate-on-scroll">
<div className="text-4xl font-semibold tracking-tight font-geist">−40%</div>
<p className="mt2 text-sm text-white/70 font-geist">Time from proposal to close</p>
<p className="mt-3 text-sm text-white/60 font-geist">Sequencing + instant next steps kept deals moving without manual follow-ups.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="text-4xl font-semibold tracking-tight font-geist">+30%</div>
<p className="mt-2 text-sm text-white/70 font-geist">Win rate uplift</p>
<p className="mt-3 text-sm text-white/60 font-geist">Fewer handoffs, faster approvals, and cleaner CRM yields better conversion.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 [animation:fadeSlideIn_1s_ease-out_0.45s_both] animate-on-scroll">
<div className="text-4xl font-semibold tracking-tight font-geist">15–20 hrs</div>
<p className="mt-2 text-sm text-white/70 font-geist">Saved per rep per week</p>
<p className="mt-3 text-sm text-white/60 font-geist">Admin, notes, and scheduling automated so reps keep selling.</p>
</div>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">

<article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<img alt="Agency pipeline view" className="w-full aspect-[16/9] object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1344&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/15 px-2 py-0.5 text-[11px] font-medium text-purple-200 font-geist">Sales Ops</span>
<span className="text-xs text-white/60 font-geist">7-week deployment</span>
</div>
<h3 className="mt-3 text-2xl font-geist tracking-tight">Sequenced proposals with Slack nudges</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Reduced approval time from 6 days to 2.1 days, and cut no-shows by 38%.</p>
</div>
</article>
<article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.55s_both] animate-on-scroll">
<img alt="Automated onboarding" className="w-full aspect-[16/9] object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1344&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">Delivery Ops</span>
<span className="text-xs text-white/60 font-geist">6-week deployment</span>
</div>
<h3 className="mt-3 text-2xl font-geist tracking-tight">Automated onboarding &amp; handovers</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Spin-up in 24h with roles, tasks, and access—no back-and-forth.</p>
</div>
</article>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-24 pl-6 relative" id="resources">
<div className="mb-8 text-center">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">Free resources</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">Templates and tools to ship faster</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">Grab ready-to-use assets. See them all on the Free Resources page.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<a className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors [animation:fadeSlideIn_1s_ease-out_0.35s_both] animate-on-scroll" href="https://www.automateitplease.com/slack-bot">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-geist">Slack Bot for Deal Nudges</h3>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/80 font-geist">Free</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Automated next-step nudges in channels and DMs, synced with your CRM.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 font-geist">
<span>Open</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>
<a className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll" href="https://www.automateitplease.com/clay-calculator">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-geist">Clay Credit Calculator</h3>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/80 font-geist">Free</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Estimate credit usage by list size, attributes, and enrichment depth.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 font-geist">
<span>Open</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" stroke<linejoin="round" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>
<a className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors [animation:fadeSlideIn_1s_ease-out_0.45s_both] animate-on-scroll" href="https://www.automateitplease.com/free-resources#smartlead-dashboard">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-geist">Smartlead Dashboard Example</h3>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/80 font-geist">Template</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Track deliverability, warmup, send volumes, and reply rates with a ready-to-clone dashboard.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 font-geist">
<span>Open</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors font-geist" href="https://www.automateitplease.com/free-resources">
      View all free resources
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</section>

<div aria-hidden="true" className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" data-close=""></div>
<nav aria-label="Mobile" className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-neutral-950 border-l border-white/10 p-6 overflow-y-auto">
<div className="flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight font-geist" href="/">AutomateItPlease</a>
<button aria-label="Close menu" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="mobileMenuClose">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-6 grid gap-2">
<a className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 font-geist" href="#originals">Growth System</a>
<a className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 font-geist" href="#library">Results</a>
<a className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 font-geist" href="#plans">Services</a>
<a className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 font-geist" href="/#faq">FAQ</a>

<a className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 font-geist" href="https://www.automateitplease.com/slack-bot">Slack Bot</a>
<a className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 font-geist" href="https://www.automateitplease.com/clay-calculator">Clay Calculator</a>
<a className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 font-geist" href="https://www.automateitplease.com/free-resources">Free Resources</a>
</div>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors font-geist" href="#cta">
        Book Strategy Call
      </a>
</div>
</nav>
</div>

<footer className="border-t border-white/10">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-6 py-12">
<div className="grid gap-8 md:grid-cols-3">
<div>
<a className="text-2xl font-semibold tracking-tight font-geist" href="/">AutomateItPlease</a>
<p className="mt-3 text-sm text-white/60 font-geist">Automation systems that help agencies close more and work less.</p>
</div>
<nav aria-label="Footer" className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
<div>
<h4 className="text-sm font-medium text-white/80 font-geist">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70 font-geist">
<li><a className="hover:text-white" href="#originals">Growth System</a></li>
<li><a className="hover:text-white" href="#library">Results</a></li>
<li><a className="hover:text-white" href="#plans">Services</a></li>
<li><a className="hover:text-white" href="/#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white/80 font-geist">Free</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70 font-geist">
<li><a className="hover:text-white" href="https://www.automateitplease.com/slack-bot">Slack Bot</a></li>
<li><a className="hover:text-white" href="https://www.automateitplease.com/clay-calculator">Clay Calculator</a></li>
<li><a className="hover:text-white" href="https://www.automateitplease.com/free-resources#smartlead-dashboard">Smartlead Dashboard</a></li>
<li><a className="hover:text-white" href="https://www.automateitplease.com/free-resources">All Resources</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white/80 font-geist">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70 font-geist">
<li><a className="hover:text-white" href="#cta">Book Strategy Call</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white/80 font-geist">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70 font-geist">
<li><a className="hover:text-white" href="#">Privacy</a></li>
<li><a className="hover:text-white" href="#">Terms</a></li>
</ul>
</div>
</nav>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/50 font-geist">© <span id="year"></span> AutomateItPlease. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-white/50 font-geist">
<a className="hover:text-white/80" href="#originals">Growth System</a>
<a className="hover:text-white/80" href="#library">Results</a>
<a className="hover:text-white/80" href="#plans">Services</a>
<a className="hover:text-white/80" href="/#faq">FAQ</a>

<a className="hover:text-white/80" href="https://www.automateitplease.com/slack-bot">Slack Bot</a>
<a className="hover:text-white/80" href="https://www.automateitplease.com/clay-calculator">Clay Calculator</a>
<a className="hover:text-white/80" href="https://www.automateitplease.com/free-resources">Free Resources</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
