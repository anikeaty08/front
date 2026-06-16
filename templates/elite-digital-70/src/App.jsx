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
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    }
    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };
    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  // Mobile menu logic
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobile = document.getElementById('closeMobile');

  if (mobileBtn && mobileMenu && closeMobile) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simple toggle logic for mobile menu if it existed in full structure
      alert('Mobile menu clicked'); 
    });
  }

  // Initialize icons
  lucide.createIcons();
  
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0" style={{}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div></div>
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


<div className="h-full overflow-y-auto w-full transition-opacity duration-500" id="landing-view">
<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between">
<a className="flex items-center gap-2" href="/">
<img alt="Limited" className="w-auto h-12" src="https://i.ibb.co/ZRc2kt2R/logotype.png"/>
</a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#manifesto">Philosophy</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#ecosystem">Ecosystem</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#pricing">Investment</a>
<div className="relative inline-block group text-xs rounded-full">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex" href="#application">
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Apply Now</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</a>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
            Menu
          </button>
</nav>

<section className="z-10 sm:pt-20 md:pt-48 md:pb-24 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto">
            Scale with Strategy.<br/>Designed by Limited.
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
             We don't just build websites; we build limited-edition digital assets that outperform the market. Stop paying for "pretty" and start investing in "profitable."
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center">
<a className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center" href="#application">
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Start Your Project</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Apply Now</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" href="#ecosystem">
              Explore Ecosystem
            </a>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-12 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Trusted by a limited circle of high-growth founders</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png)] bg-cover rounded invert opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
</div>
</section>

<section className="relative py-24 border-y border-white/5 bg-white/[0.02]" id="manifesto">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center">
<h2 className="text-xs font-semibold tracking-wider text-emerald-500 uppercase font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">The Manifesto</h2>
<h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
          The Hard Truth: <br/>Your Website is Leaking Money.
        </h3>
<div className="mt-10 relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<svg aria-hidden="true" className="absolute top-6 left-6 h-8 w-8 text-white/20 transform -translate-x-2 -translate-y-2" fill="currentColor" viewbox="0 0 32 32">
<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
</svg>
<p className="relative text-lg sm:text-xl text-white/80 font-geist leading-relaxed">
             Most agencies sell you a digital brochure that looks pretty but sells nothing. You don't need 'just a website.' You need a conversion system. We don't guess; we engineer outcomes based on data. Stop paying for hours worked, and start investing in results delivered.
           </p>
<div className="mt-6 flex items-center justify-center gap-3">
<div className="h-px w-12 bg-white/20"></div>
<span className="text-sm font-medium text-white/50 font-geist">Limited Strategy Team</span>
<div className="h-px w-12 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">The Limited Standard</h2>
<p className="mt-4 text-white/60 font-geist max-w-2xl mx-auto">Do not compare price. Compare speed, efficiency, and revenue impact.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-6 opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0">
<h3 className="text-xl font-medium text-white/50 font-geist">Traditional Agencies</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">6-12 Week Turnaround</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Bloated Code &amp; Slow Load Times</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Focus on "Winning Awards"</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Radio Silence for Weeks</span>
</li>
</ul>
</div>

<div className="relative p-8 rounded-2xl border border-emerald-500/30 bg-emerald-900/10 flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
<div className="absolute -top-3 -right-3">
<span className="relative flex h-6 w-6">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 items-center justify-center">
<svg className="lucide lucide-check text-black" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
</div>
<h3 className="text-xl font-medium text-white font-geist">Limited</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">7-14 Day Sprints</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">Performance First Architecture</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">Focus on Revenue &amp; ROI</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">Daily Updates &amp; Transparency</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="ecosystem">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">Total Ecosystem</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{}}>Ecosystem of Value</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">The three pillars of a high-converting digital asset.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
<svg className="lucide lucide-code-2 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">Clean Code Architecture</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">Speed is a feature. We build on lightweight frameworks that load instantly. Google loves it, users love it, and your bounce rate drops to zero.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
<svg className="lucide lucide-brain-circuit text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 1 19.5 5"></path><path d="M12 18a3 3 0 0 0-3-3"></path></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">Psychology-Led Design</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">We don't just pick colors. We design user flows that psychologically guide your visitor to the 'Buy' button. Every pixel has a purpose.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
<svg className="lucide lucide-trending-up text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">SEO &amp; Scalability</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">Built to rank. Built to scale. Your site is technically optimized for search engines from Day 1. Don't chase traffic, attract it.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll mt-6">
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
<img alt="NexChain Project" className="absolute right-0 top-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg"/>
<div className="p-8 sm:p-12 relative z-20 h-full flex flex-col justify-center max-w-xl">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">Case Study</span>
</div>
<h3 className="text-3xl sm:text-4xl font-geist tracking-tighter">NexChain Infrastructure</h3>
<p className="mt-4 text-base sm:text-lg text-white/70 font-geist">See how we transformed a fragmented crypto brand into a market authority, increasing conversion by 200% in 30 days.</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-lg px-4 py-2 hover:bg-neutral-200 transition font-geist" href="#">
                View Case Study
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">From Concept to Cash Flow</h2>
<p className="mt-4 text-white/60 font-geist">The path to your new digital asset.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-bold font-geist text-white">01</span>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-2">Audit &amp; Strategy</h3>
<p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">We identify the bottlenecks in your current funnel and map out the revenue opportunities.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-emerald-500/50 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<span className="text-xl font-bold font-geist text-emerald-400">02</span>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-2">Sprint Build</h3>
<p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">High-intensity design and development phase. No bloat, just rapid execution of the agreed strategy.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-bold font-geist text-white">03</span>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-2">Launch &amp; Scale</h3>
<p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">Deploying your asset and optimizing for conversions. We hand over the keys to a revenue engine.</p>
</div>
</div>
</div>
</section>

<section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="pricing">
<div className="relative">

<div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal font-geist">Investment</span>
</div>
<h2 className="text-[40px] sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tighter" style={{}}>Invest in Assets, Not Expenses.</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-geist">
            Lean pricing for high-impact results. No hidden fees. No bloated contracts.
          </p>
</div>

<div className="relative max-w-[1400px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg text-white font-medium tracking-tight font-geist">The Launchpad</h3>
<p className="text-xs text-white/50 font-geist">Solopreneurs &amp; Validating Ideas.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tighter">₹1,999</p>
<span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ One-time</span>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-geist">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Delivery: 48 Hours
              </div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">1 High-Impact Landing Page</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Mobile-First Architecture</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Fast Load Speed (&lt; 2s)</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">WhatsApp Chat Integration</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition font-geist border border-white/10" href="#application">Start Now</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg text-white font-medium tracking-tight font-geist">The Brand Core</h3>
<p className="text-xs text-white/50 font-geist">Small Businesses &amp; Service Providers.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tighter">₹5,999</p>
<span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ One-time</span>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-geist">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Delivery: 5-7 Days
              </div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Up to 5 Strategic Pages</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Custom CMS (Manage it yourself)</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Basic SEO Setup (Google Indexing)</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Social Media Integration</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition font-geist border border-white/10" href="#application">Build Brand</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll flex flex-col h-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%)'}}></div>
<div className="relative flex flex-col gap-1 mb-6">
<div className="flex items-center justify-between">
<h3 className="text-lg text-white font-semibold tracking-tight font-geist">The Growth Engine</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-emerald-950 bg-emerald-400 font-geist">Best Value</span>
</div>
<p className="text-xs text-emerald-200/60 font-geist">Scaling Startups &amp; Serious Players.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tighter">₹14,999</p>
<span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ One-time</span>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-200 font-geist">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Delivery: 10-14 Days
              </div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white font-medium font-geist">Up to 15 Pages + Blog</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white font-medium font-geist">Conversion-Focused Design</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white font-medium font-geist">Advanced Analytics Dashboard</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white font-medium font-geist">Speed Optimization (90+ Score)</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white font-medium font-geist">1 Year Free Hosting</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-emerald-500 text-black text-xs font-semibold hover:bg-emerald-400 transition font-geist shadow-[0_0_20px_rgba(16,185,129,0.3)]" href="#application">Scale Now</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg text-white font-medium tracking-tight font-geist">The E-Commerce Suite</h3>
<p className="text-xs text-white/50 font-geist">DTC Brands &amp; Online Retail.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tighter">₹24,999+</p>
<span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ Custom Scope</span>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-geist">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Delivery: Custom
              </div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Full Store Setup (Unlimited Products)</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Payment Gateway Integration</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Cart Abandonment Recovery</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Automated Email Notifications</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check text-emerald-400 mt-0.5 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm text-white/80 font-geist">Priority Support</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition font-geist border border-white/10" href="#application">Get Quote</a>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg)] bg-cover relative py-24" id="application">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="sm:px-6 lg:px-8 max-w-3xl mr-auto ml-auto pr-4 pl-4 relative z-10">
<div className="text-center mb-10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Application</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter text-white">Start Your Project</h2>
<p className="mt-4 text-lg text-white/70 font-geist">Direct Line to Leadership. No account managers, just experts.</p>
</div>
<form className="bg-black/50 border border-white/10 p-6 sm:p-10 rounded-2xl backdrop-blur-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="name">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="name" placeholder="Your Name" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="budget">Estimated Budget</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist appearance-none" id="budget">
<option className="bg-black text-white/70">Select Range</option>
<option className="bg-black">$3k - $5k</option>
<option className="bg-black">$5k - $10k</option>
<option className="bg-black">$10k+</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="goal">Primary Goal</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist appearance-none" id="goal">
<option className="bg-black text-white/70">Select Goal</option>
<option className="bg-black">Brand Authority</option>
<option className="bg-black">Lead Generation</option>
<option className="bg-black">Direct Sales / E-com</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="details">Project Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="details" placeholder="Tell us about your vision..." rows="3"></textarea>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500 px-8 py-4 text-sm font-semibold text-black hover:bg-emerald-400 transition font-geist shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto justify-center" type="button">
                    Submit Application
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</section>

<footer className="xl:mt-0 border-white/10 border-t relative bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="/">
<img alt="Limited" className="h-6 w-auto" src="https://i.ibb.co/ZRc2kt2R/logotype.png"/>
</a>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">We build conversion-focused digital experiences for brands that demand the best. The spots are almost gone. Act now.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Agency</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#manifesto">Philosophy</a></li>
<li><a className="hover:text-white font-geist" href="#ecosystem">Ecosystem</a></li>
<li><a className="hover:text-white font-geist" href="#pricing">Investment</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#">Terms of Service</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> Limited. All Rights Reserved.</p>
</div>
</div>
</footer>
</div>



    </>
  );
}
