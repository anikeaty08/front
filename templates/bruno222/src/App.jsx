import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


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



    (function() {
      const container = document.getElementById('card-grid-container');
      if (!container) return;
      const cards = container.querySelectorAll('.card-item');
      let activeCard = null;
      
      cards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
          e.stopPropagation();
          
          if (activeCard === card) {
            resetCards();
            return;
          }
          
          cards.forEach((c) => {
            c.style.filter = 'blur(4px)';
            c.style.opacity = '0.4';
            c.style.transform = '';
            c.style.position = 'relative';
            c.style.zIndex = '1';
            c.style.transition = 'all 0.5s ease-out';
          });
          
          card.style.filter = 'blur(0px)';
          card.style.opacity = '1';
          card.style.transform = 'translate(0, -10px) rotate(0deg) scale(1.15)';
          card.style.position = 'relative';
          card.style.zIndex = '10';
          card.style.transition = 'all 0.5s ease-out';
          
          activeCard = card;
        });
      });
      
      document.addEventListener('click', function(e) {
        if (activeCard && !container.contains(e.target)) {
          resetCards();
        }
      });
      
      function resetCards() {
        cards.forEach((c) => {
          c.style.filter = '';
          c.style.opacity = '';
          c.style.transform = '';
          c.style.position = '';
          c.style.zIndex = '';
        });
        activeCard = null;
      }
    })();
  


  // Mobile menu logic
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeMobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    // Trigger reflow to ensure the transition runs
    void mobileMenu.offsetWidth;
    mobileMenu.classList.remove('opacity-0');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('opacity-0');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }

  if (mobileBtn) mobileBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
  
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div></div>
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


<div className="overflow-y-auto transition-opacity duration-500 w-full h-full" id="landing-view">
<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between gap-4">
<a className="flex items-center gap-2 shrink-0" href="/">
<span className="text-xl font-medium tracking-tight text-white font-geist">22B Studio</span>
</a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center shrink-0">
<a className="hover:text-white text-sm font-normal text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#manifesto">Philosophy</a>
<a className="px-3 py-2 text-sm font-normal text-white/80 hover:text-white font-geist" href="#systems">Systems</a>
<a className="px-3 py-2 text-sm font-normal text-white/80 hover:text-white font-geist" href="#pricing">Pricing</a>
<div className="relative inline-block group text-xs rounded-full">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex" href="#application">
<span className="relative z-10 inline-flex items-center gap-2 font-normal text-xs rounded-full font-geist">Start Your Project</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</a>
</div>
</div>
<div className="flex items-center gap-3 shrink-0">
<a className="relative hidden lg:inline-block group font-geist" href="tel:6195733906">
<div className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="let r=this.getBoundingClientRect();this.style.setProperty('--x',(event.clientX-r.left)+'px');this.style.setProperty('--y',(event.clientY-r.top)+'px')" style={{-X: '188.8125px', -Y: '40px', -O: '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 text-sm font-medium">
      Call or Text: <span className="text-emerald-400 transition-colors">619-573-3906</span>
<svg className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24h14M13 5l7 7-7 7">
</svg>
</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10"></span>
</div>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</a>
<button className="md:hidden inline-flex text-sm font-normal font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center hover:bg-white/10 transition" id="mobileMenuToggle">
<iconify-icon className="text-white" height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
              Menu
            </button>
</div>
</nav>

<section className="z-10 sm:pt-20 md:pt-48 md:pb-24 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tight font-geist opacity-0 max-w-5xl mr-auto ml-auto">
            Scale with Strategy.<br/><span className="text-white/80 text-3xl sm:text-5xl md:text-6xl">No Fluff. Just Results.</span>
</h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
             We build websites and marketing systems that bring you more calls, more jobs, and steady growth. No overcomplicated tech. No agency runaround. Just systems that work.
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center">
<a className="group inline-flex min-w-[140px] items-center justify-center select-none text-[#ffffffaa] cursor-pointer transition-all duration-[400ms] border-[#ffffff22] before:absolute before:-top-[4px] before:-left-[4px] before:w-[calc(100%+8px)] before:h-[calc(100%+8px)] before:rounded-[28px] before:pointer-events-none before:bg-[linear-gradient(0deg,rgba(0,0,0,0.26),rgba(0,0,0,0.67))] before:-z-10 before:transition-all before:duration-[400ms] before:shadow-[0_-8px_8px_-6px_rgba(0,0,0,0)_inset,0_-16px_16px_-8px_rgba(0,0,0,0)_inset,1px_1px_1px_rgba(255,255,255,0.13),2px_2px_2px_rgba(255,255,255,0.06),-1px_-1px_1px_rgba(0,0,0,0.13),-2px_-2px_2px_rgba(0,0,0,0.06)] after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none after:bg-[linear-gradient(0deg,#fff,hsl(210,100%,70%),hsla(210,100%,70%,0.5)_8%,transparent)] after:opacity-0 after:transition-all after:duration-[400ms] hover:border-[hsla(210,100%,80%,0.4)] hover:before:shadow-[0_-8px_8px_-6px_rgba(255,255,255,0.67)_inset,0_-16px_16px_-8px_hsla(210,100%,70%,0.3)_inset,1px_1px_1px_rgba(255,255,255,0.13),2px_2px_2px_rgba(255,255,255,0.06),-1px_-1px_1px_rgba(0,0,0,0.13),-2px_-2px_2px_rgba(0,0,0,0.06)] hover:after:opacity-100 hover:after:[mask-image:linear-gradient(0deg,#fff,transparent)] hover:after:[-webkit-mask-image:linear-gradient(0deg,#fff,transparent)] active:border-[hsla(210,100%,80%,0.7)] active:bg-[hsla(210,50%,20%,0.5)] active:before:shadow-[0_-8px_12px_-6px_rgba(255,255,255,0.67)_inset,0_-16px_16px_-8px_hsla(210,100%,70%,0.8)_inset,1px_1px_1px_rgba(255,255,255,0.27),2px_2px_2px_rgba(255,255,255,0.13),-1px_-1px_1px_rgba(0,0,0,0.13),-2px_-2px_2px_rgba(0,0,0,0.06)] active:after:opacity-100 active:after:[mask-image:linear-gradient(0deg,#fff,transparent)] active:after:[-webkit-mask-image:linear-gradient(0deg,#fff,transparent)] active:after:brightness-200 text-sm font-medium font-geist bg-[#101010] border rounded-[24px] pt-3.5 pr-7 pb-3.5 pl-7 relative shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2),inset_0px_2px_2px_rgba(255,255,255,0.15),inset_0px_4px_4px_rgba(255,255,255,0.1),inset_0px_8px_8px_rgba(255,255,255,0.05),inset_0px_16px_16px_rgba(255,255,255,0.05),0px_-1px_1px_rgba(0,0,0,0.02),0px_-2px_2px_rgba(0,0,0,0.03),0px_-4px_4px_rgba(0,0,0,0.05),0px_-8px_8px_rgba(0,0,0,0.06),0px_-16px_16px_rgba(0,0,0,0.08)]" href="#application">
<span className="transition-all duration-[400ms] group-hover:text-white group-hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.53)] group-active:drop-shadow-[0_0_1px_hsla(210,100%,90%,0.9)] z-10 relative">Lets Talk</span>
</a>
</div>
<div className="mt-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<p className="text-sm font-normal text-white/50 font-geist">
               Or call us directly at <a className="text-white/80 hover:text-white transition underline decoration-white/20 underline-offset-4" href="tel:6195733906">619-573-3906</a>
</p>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-12 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
</section>

<section className="relative py-24 border-y border-white/5 bg-white/[0.02]" id="manifesto">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center">
<h2 className="uppercase animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate text-xs font-medium text-emerald-500 tracking-wider font-geist">The reality</h2>
<h3 className="sm:text-5xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate text-3xl text-white tracking-tight font-geist mt-4">The Hard Truth: <br/>Slow Weeks Aren’t Normal.</h3>
<div className="mt-10 relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate">
<iconify-icon aria-hidden="true" className="absolute top-6 left-6 text-white/20 transform -translate-x-2 -translate-y-2" height="32" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="sm:text-xl leading-relaxed text-lg text-white/80 font-geist relative">Let’s be honest.

Whether you’re a plumber, roofer, or service pro; if your phone isn’t ringing consistently, something’s broken...

Most agencies build pretty websites.
Pretty doesn’t pay the bills.

We build websites that guide people to call you, request a quote, and book the job.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<div className="h-px w-12 bg-white/20"></div>
<span className="text-sm font-normal text-white/50 font-geist">22B Studio</span>
<div className="h-px w-12 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tight">The 22B Studio Standard</h2>
<p className="mt-4 text-white/60 font-geist max-w-2xl mx-auto">Simple. Fast. Built to Bring You Business.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-6 opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0">
<h3 className="text-xl font-normal text-white/50 font-geist tracking-tight">Traditional Agencies</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white/50">
<iconify-icon className="text-red-500/50" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="font-geist">6–12 Week Turnaround</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<iconify-icon className="text-red-500/50" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="font-geist">Overcomplicated &amp; Expensive</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<iconify-icon className="text-red-500/50" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="font-geist">Hard to Reach</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<iconify-icon className="text-red-500/50" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="font-geist">Focused on Looks, Not Leads</span>
</li>
</ul>
</div>

<div className="relative p-8 rounded-2xl border border-emerald-500/30 bg-emerald-900/10 flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
<div className="absolute -top-3 -right-3">
<span className="relative flex h-6 w-6">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 items-center justify-center">
<iconify-icon className="text-black" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
</span>
</div>
<h3 className="text-xl font-normal text-white font-geist tracking-tight">22B Studio</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><iconify-icon className="text-emerald-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon></div>
<span className="font-geist font-normal">7–10 Day Turnaround</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><iconify-icon className="text-emerald-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon></div>
<span className="font-geist font-normal">Built for Results</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><iconify-icon className="text-emerald-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon></div>
<span className="font-geist font-normal">Focused on Revenue &amp; ROI</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full"><iconify-icon className="text-emerald-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon></div>
<span className="font-geist font-normal">Daily Updates &amp; Transparency</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="systems">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-normal text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll animate">Complete System</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tight [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll animate">Everything Your Business Needs</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll animate">The tools and systems that bring you consistent work.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 animate">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
<iconify-icon className="text-blue-400" height="24" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-normal tracking-tight font-geist text-white">High-Converting Website</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">Fast, mobile-ready websites designed to get visitors to call you, request a quote, or book your service.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 animate">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
<iconify-icon className="text-purple-400" height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-normal tracking-tight font-geist text-white">Conversion-Focused Design</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">We guide visitors toward action with strong calls-to-action and clear messaging that turns traffic into paying customers.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 animate">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
<iconify-icon className="text-emerald-400" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-normal tracking-tight font-geist text-white">Marketing &amp; Visibility</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">From SEO to paid ads, we help your business get found by the people already searching for your services.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll mt-6 animate">
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
<img alt="Project Setup" className="absolute right-0 top-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg"/>
<div className="flex flex-col sm:p-12 z-20 bg-neutral-950 w-full pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="mx-auto max-w-3xl text-center mb-10" style={{animation: 'fadeSlideIn 1s ease-out 0.1s both'}}>
<h3 className="sm:text-5xl leading-[1.06] text-3xl font-medium tracking-tight font-geist">More Visibility. More Calls. <span className="block bg-clip-text font-medium text-transparent tracking-tight font-geist bg-gradient-to-r from-white to-neutral-400">More Jobs.</span></h3>
</div>

<div className="w-full max-w-4xl mx-auto relative mb-10" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>

<div className="-top-5 sm:-top-7 sm:left-[5%] z-50 absolute left-[2%]">
<div className="relative">
<span className="inline-flex items-center gap-2 text-xs font-medium text-white font-geist bg-blue-600 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">Visuals <svg className="lucide lucide-arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-600"></span>
</div>
</div>

<div className="-top-4 sm:-top-6 sm:right-[5%] z-50 absolute right-[2%]">
<div className="relative">
<span className="inline-flex items-center gap-2 text-xs font-medium text-white font-geist bg-orange-500 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">Website <svg className="lucide lucide-arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-orange-500"></span>
</div>
</div>

<div className="flex justify-center w-full">
<div className="grid grid-cols-6 gap-2 sm:gap-4 w-full" id="card-grid-container">

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-6 translate-y-2 sm:translate-y-4 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="0">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg transition-shadow duration-500 hover:shadow-2xl"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1769145868/shark_vid_krujxv_3ed0e5.mp4"></video>
<img alt="Artwork card" className="w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-4 sm:translate-y-6 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="1">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
<img alt="3D render card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/834992ee-4e41-489a-a458-8982de74ef17_320w.png"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-3 translate-y-1 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="2">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
<img alt="Minimal shapes card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d41775b-9ffb-42cc-b8be-9ff8e5c5c8b7_320w.png"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-0 -translate-y-2 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="3">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg transition-shadow duration-500 hover:shadow-2xl"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1772842576/hf_20260211_192635_79cccca7-74d8-4cf6-a717-1e5a72745bd6_1_gfvscq.mp4"></video>
<img alt="Abstract red card" className="w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-2 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="4">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg transition-shadow duration-500 hover:shadow-2xl"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1772843565/hf_20260220_070521_6a6c6621-9986-4c8f-9c8b-29f692c76009_1_bzcqmo.mp4"></video>
<img alt="Mountains card" className="w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-6 translate-y-5 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="5">
<div className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
<img alt="Green minimal card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/913b4ee0-f978-43e9-97d9-5ae3a922e240_320w.png"/>
</div>
</div>
</div>
</div>
</div>

<p className="sm:text-base text-sm text-white/70 font-geist text-center max-w-xl mr-auto ml-auto" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>You handle the work. We handle getting the phone to ring.</p>

<div className="mt-8 flex flex-wrap items-center justify-center gap-4" style={{animation: 'fadeSlideIn 1s ease-out 0.7s both'}}>
</div>

</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tight">From Concept to Cash Flow</h2>
<p className="mt-4 text-white/60 font-geist">The path to getting more calls and jobs.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-semibold font-geist text-white">01</span>
</div>
<h3 className="text-xl font-normal tracking-tight text-white font-geist mb-2">Audit &amp; Strategy</h3>
<p className="leading-relaxed text-sm text-white/60 font-geist max-w-xs">We review your current setup and identify what’s holding your business back online.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-emerald-500/50 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<span className="text-xl font-semibold font-geist text-emerald-400">02</span>
</div>
<h3 className="text-xl font-normal tracking-tight text-white font-geist mb-2">Build</h3>
<p className="leading-relaxed text-sm text-white/60 font-geist max-w-xs">We develop a clean, high-performing website and supporting systems.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-semibold font-geist text-white">03</span>
</div>
<h3 className="text-xl font-normal tracking-tight text-white font-geist mb-2">Launch &amp; Optimize</h3>
<p className="leading-relaxed text-sm text-white/60 font-geist max-w-xs">We launch, monitor, and optimize so your business keeps growing.</p>
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
<h2 className="text-4xl sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tight">Simple Pricing. Real Results.</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-geist">
            Choose the level of growth that fits your business.
          </p>
</div>

<div className="relative max-w-[1400px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg text-white font-normal tracking-tight font-geist">Website Launch</h3>
<p className="text-xs text-white/50 font-geist">For owner-operators who need a strong online presence.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tight">$997</p>
<span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ One-time</span>
</div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">5-Page High-Converting Website</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Mobile Optimization</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Basic SEO Setup</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Google Business Profile Optimization</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-normal hover:bg-white/20 transition font-geist border border-white/10" href="#application">Launch My Website</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg text-white font-normal tracking-tight font-geist">Website + Content Engine</h3>
<p className="text-xs text-white/50 font-geist">For businesses that want consistent online presence.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tight">$997</p>
<span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ One-time</span>
</div>
<div className="flex items-end gap-1 mt-1">
<p className="text-2xl lg:text-3xl text-white/90 font-geist tracking-tight">$300</p>
<span className="text-white/40 text-xs mb-1 font-geist uppercase tracking-wide">/ Month</span>
</div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Everything in Website Launch</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Social Media Management</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">12 Posts Per Month</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Short-Form Video Editing</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-normal hover:bg-white/20 transition font-geist border border-white/10" href="#application">Build My Brand</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll flex flex-col h-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%)'}}></div>
<div className="relative flex flex-col gap-1 mb-6">
<div className="flex items-center justify-between">
<h3 className="text-lg text-white font-medium tracking-tight font-geist">Growth Accelerator</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wider text-emerald-950 bg-emerald-400 font-geist">Best Value</span>
</div>
<p className="text-xs text-emerald-200/60 font-geist">For businesses ready to scale.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tight">$1,997</p>
<span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ Setup</span>
</div>
<div className="flex items-end gap-1 mt-1">
<p className="text-2xl lg:text-3xl text-white/90 font-geist tracking-tight">$750</p>
<span className="text-white/40 text-xs mb-1 font-geist uppercase tracking-wide">/ Month</span>
</div>
<p className="text-xs text-white/40 mt-2 font-geist">(Ad spend is separate.)</p>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white font-normal font-geist">Everything Above</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white font-normal font-geist">Google Ads Management</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white font-normal font-geist">Facebook Ads Management</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white font-normal font-geist">Local SEO Optimization</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-emerald-500 text-black text-xs font-medium hover:bg-emerald-400 transition font-geist shadow-[0_0_20px_rgba(16,185,129,0.3)]" href="#application">Scale My Business</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg text-white font-normal tracking-tight font-geist">Full Business System</h3>
<p className="text-xs text-white/50 font-geist">For serious operators who want everything handled.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl text-white font-geist tracking-tight">Custom Quote</p>
</div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Website</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Content &amp; Branding</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Lead Generation</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald-400 mt-0.5 shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-sm text-white/80 font-geist">Virtual Receptionist</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-normal hover:bg-white/20 transition font-geist border border-white/10" href="#application">Get Custom Plan</a>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg)] bg-cover relative py-24" id="application">
<div className="bg-neutral-950/80 absolute inset-0 backdrop-blur-md transition-all duration-300"></div>
<div className="sm:px-6 lg:px-8 max-w-3xl mr-auto ml-auto pr-4 pl-4 relative z-10">
<div className="text-center mb-10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-normal text-white/70 backdrop-blur font-geist">Application</span>
<div className="mt-5 mb-3">
<p className="text-sm font-medium text-emerald-400/90 font-geist flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
              Prefer to talk? Call or text <a className="text-white hover:text-emerald-300 transition underline decoration-white/20 underline-offset-4 ml-1" href="tel:6195733906">619-573-3906</a>
</p>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tight text-white">Start Your Project</h2>
<p className="mt-4 text-lg text-white/70 font-geist">Let’s build a system that brings you more jobs.</p>
</div>
<form className="bg-black/50 border border-white/10 p-6 sm:p-10 rounded-2xl backdrop-blur-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="col-span-1">
<label className="block text-xs font-normal text-white/60 mb-2 font-geist" htmlFor="name">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="name" placeholder="Your Name" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-normal text-white/60 mb-2 font-geist" htmlFor="email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-normal text-white/60 mb-2 font-geist" htmlFor="budget">Estimated Budget</label>
<div className="relative">
<select className="focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition appearance-none text-sm text-white font-geist bg-white/5 w-full border-white/10 border rounded-lg pr-4 pb-3 pl-4" id="budget">
<option className="bg-black text-white/70">Select Range</option>
<option className="bg-black">$1k - $3k</option>
<option className="bg-black">$3k - $5k</option>
<option className="bg-black">$5k+</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1">
<label className="block text-xs font-normal text-white/60 mb-2 font-geist" htmlFor="goal">Primary Goal</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist appearance-none" id="goal">
<option className="bg-black text-white/70">Select Goal</option>
<option className="bg-black">Get More Calls</option>
<option className="bg-black">Book More Jobs</option>
<option className="bg-black">Grow My Fleet</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-normal text-white/60 mb-2 font-geist" htmlFor="details">Project Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="details" placeholder="Tell us about your business..." rows="3"></textarea>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500 px-8 py-4 text-sm font-medium text-black hover:bg-emerald-400 transition font-geist shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto justify-center" type="button">
                    Submit Application
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
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
<span className="text-xl font-medium tracking-tight text-white font-geist">22B Studio</span>
</a>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">We build systems that get results for service businesses. No fluff, just consistent growth.</p>
</div>
<div className="">
<h4 className="text-sm font-medium tracking-tight font-geist text-white">Agency</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#manifesto">Philosophy</a></li>
<li><a className="hover:text-white font-geist" href="#systems">Systems</a></li>
<li><a className="hover:text-white font-geist" href="#pricing">Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium tracking-tight font-geist text-white">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#">Terms of Service</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2026</span> 22B Studio. All Rights Reserved.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex-col bg-black/95 backdrop-blur-xl transition-opacity opacity-0 duration-300" id="mobileMenu">
<div className="flex items-center justify-between p-6 sm:px-8 border-b border-white/10 mt-2">
<span className="text-xl font-medium tracking-tight text-white font-geist">22B Studio</span>
<button className="text-white/70 hover:text-white p-2 transition" id="closeMobileMenu">
<iconify-icon height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<div className="flex flex-col p-8 gap-8 mt-4">
<a className="mobile-link text-2xl font-normal text-white/80 hover:text-white font-geist transition-colors" href="#manifesto">Philosophy</a>
<a className="mobile-link text-2xl font-normal text-white/80 hover:text-white font-geist transition-colors" href="#systems">Systems</a>
<a className="mobile-link text-2xl font-normal text-white/80 hover:text-white font-geist transition-colors" href="#pricing">Pricing</a>
<hr className="border-white/10 mt-4 mb-2"/>
<a className="mobile-link inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/10 px-6 py-4 text-sm font-medium text-white hover:bg-white/20 font-geist transition" href="#application">Start Your Project</a>
<a className="mobile-link inline-flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 font-geist transition gap-2" href="tel:6195733906">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
            619-573-3906
        </a>
</div>
</div>
</div>


    </>
  );
}
