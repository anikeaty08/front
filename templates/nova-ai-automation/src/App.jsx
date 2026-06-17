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



          lucide.createIcons();
        


          lucide.createIcons();
        


              window.togglePricing = (plan) => {
                  const btnAnnually = document.getElementById('btn-annually');
                  const btnMonthly = document.getElementById('btn-monthly');
                  const priceBasic = document.getElementById('price-basic');
                  const pricePro = document.getElementById('price-pro');

                  // Define styles
                  const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/20'];
                  const inactiveClasses = ['text-neutral-400', 'hover:text-white'];

                  if (plan === 'annually') {
                      // Update buttons
                      btnAnnually.classList.add(...activeClasses);
                      btnAnnually.classList.remove(...inactiveClasses);
                      btnMonthly.classList.remove(...activeClasses);
                      btnMonthly.classList.add(...inactiveClasses);

                      // Update prices (approx 20% discount logic)
                      priceBasic.innerText = '$399';
                      pricePro.innerText = '$799';
                  } else {
                      // Update buttons
                      btnMonthly.classList.add(...activeClasses);
                      btnMonthly.classList.remove(...inactiveClasses);
                      btnAnnually.classList.remove(...activeClasses);
                      btnAnnually.classList.add(...inactiveClasses);

                      // Update prices
                      priceBasic.innerText = '$480';
                      pricePro.innerText = '$960';
                  }
              }
            


          lucide.createIcons();
        


      lucide.createIcons();
    
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
      <div className="absolute top-0 w-full h-screen -z-10 blur-md bg-cover bg-center" data-alpha-mask="16" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd9a9fe3-e356-4096-82ff-b68159488a2a_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 16%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 16%, transparent)'}}></div>
<div className="" id="wrapper">

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
</div>


<nav className="fixed z-50 pt-3 pr-4 pl-4 top-0 right-0 left-0">
<div className="max-w-7xl mx-auto bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-xl px-6 h-16 flex items-center justify-between">

<a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="/home"></a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-light text-neutral-300" href="/services">
            Services
          </a>
<a className="hover:text-white transition-colors text-sm font-light text-neutral-300" href="/benefits">
            Benefits
          </a>
<a className="hover:text-white transition-colors text-sm font-light text-neutral-300" href="/plans">
            Plans
          </a>
<a className="hover:text-white transition-colors text-sm font-light text-neutral-300" href="#">
            Contact
          </a>
</div>

<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium transition-all group" href="#">
<span className="">Book Demo</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>

<button className="md:hidden text-neutral-400 hover:text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>
<main className="flex-grow flex flex-col min-h-screen relative justify-center">


<section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10 group cursor-default hover:border-white/20 transition-colors">
<svg className="lucide lucide-layout-grid w-3.5 h-3.5 text-neutral-400 mr-2" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-xs font-normal text-neutral-300 tracking-wide">
            NexAuto - Enterprise AI
          </span>
</div>

<h1 className="max-w-5xl mx-auto text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.1] font-semibold text-white tracking-tight mb-8">
          Elevate operations with
          <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
            Next-Gen AI Integration
          </span>
</h1>

<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
          Unlock unprecedented efficiency with scalable automation tailored for
          the modern enterprise
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 font-medium text-white shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-indigo-500/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto" href="#">
<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
<div className="relative h-full w-8 bg-white/20"></div>
</div>
<span className="flex items-center gap-2">
              Explore Solutions
              <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</a>
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto" href="#">
<span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="flex items-center gap-2 relative">
              View Pricing
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>

<div className="mt-24 w-full max-w-4xl border-t border-white/5 pt-12">
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 w-auto text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span className="font-semibold text-lg tracking-tight">Vertex</span>
</div>

<div className="h-8 w-auto text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<circle className="" cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="2"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
<span className="font-semibold text-lg tracking-tight">Orbit</span>
</div>

<div className="h-8 w-auto text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<rect fill="none" height="18" rx="2" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3"></rect>
<circle cx="8.5" cy="8.5" r="1.5"></circle>
<circle cx="15.5" cy="8.5" r="1.5"></circle>
</svg>
<span className="font-semibold text-lg tracking-tight">Quantum</span>
</div>

<div className="h-8 w-auto text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<span className="font-semibold text-lg tracking-tight">Echo</span>
</div>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 z-10 bg-black w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">
<style>
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        </style>
<div className="max-w-3xl mx-auto text-center mb-20">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<span className="text-xs font-medium text-neutral-400 tracking-wide">
              Methodology
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Engineered for Scale
          </h2>
<p className="text-lg text-neutral-400 font-light max-w-lg mx-auto leading-relaxed">
            Our proven framework ensures rapid deployment and sustainable
            growth.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-8">

<div className="md:col-span-2 group flex flex-col p-6 rounded-[2rem] bg-[#111] border border-white/5 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
<div className="relative w-full aspect-[16/10] mb-8 rounded-xl bg-[#1A1A1A] border border-white/5 overflow-hidden flex flex-col shadow-2xl group-hover:border-white/10 transition-colors">

<div className="h-8 w-full bg-[#1A1A1A] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
<div className="w-2 h-2 rounded-full bg-[#FF5F57]"></div>
<div className="w-2 h-2 rounded-full bg-[#FEBC2E]"></div>
<div className="w-2 h-2 rounded-full bg-[#28C840]"></div>
</div>

<div className="flex-1 p-4 grid grid-cols-2 gap-4 bg-[#141414]">
<div className="bg-[#1f1f1f] rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden border border-white/5">
<div className="flex items-end gap-1.5 h-12 mt-auto px-1">
<div className="w-full bg-indigo-500/20 h-4 rounded-sm"></div>
<div className="w-full bg-indigo-500/40 h-8 rounded-sm"></div>
<div className="w-full bg-indigo-500/60 h-6 rounded-sm"></div>
<div className="w-full bg-indigo-500 h-10 rounded-sm"></div>
</div>
<div className="space-y-2 mt-2">
<div className="h-1 w-full bg-white/10 rounded-full"></div>
<div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
<div className="h-1 w-4/5 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="bg-[#1f1f1f] rounded-lg flex items-center justify-center relative overflow-hidden border border-white/5 group-hover:bg-[#252525] transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg className="lucide lucide-target w-12 h-12 text-neutral-500 group-hover:text-indigo-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
<div className="absolute bottom-3 right-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-mouse-pointer-2 w-4 h-4 text-white stroke-black" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 19 3.48-6.96L22 10.45l-10-8.5-6 15 4 1Z"></path>
</svg>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">
      Consultation &amp; Audit
    </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
      We evaluate your current infrastructure to pinpoint inefficiencies
      and automation opportunities.
    </p>
</div>

<div className="md:col-span-2 group flex flex-col hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_forwards] [animation-delay:200ms] opacity-0 border-white/5 border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 bg-[#111]">
<style>
      @keyframes code-type {
        0% {
          max-width: 0
        }

        100% {
          max-width: 100%
        }
      }
    </style>
<div className="relative w-full aspect-[16/10] mb-8 rounded-xl bg-[#1A1A1A] border border-white/5 overflow-hidden flex flex-col shadow-2xl group-hover:border-white/10 transition-colors">

<div className="h-8 w-full bg-[#1A1A1A] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
<div className="w-2 h-2 rounded-full bg-[#FF5F57]"></div>
<div className="w-2 h-2 rounded-full bg-[#FEBC2E]"></div>
<div className="w-2 h-2 rounded-full bg-[#28C840]"></div>
</div>

<div className="flex-1 p-5 bg-[#141414] font-mono text-[10px] text-neutral-500 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]/90 z-10"></div>
<div className="flex gap-3 opacity-60">
<span className="text-neutral-700 select-none">1</span>
<span className="overflow-hidden whitespace-nowrap inline-block align-bottom max-w-0 animate-[code-type_0.8s_steps(20,end)_forwards] [animation-delay:800ms]">
            import {
            <span className="text-indigo-400">automate</span>
            } from 'core';
          </span>
</div>
<div className="flex gap-3 opacity-60">
<span className="text-neutral-700 select-none">2</span>
<span></span>
</div>
<div className="flex gap-3 opacity-80">
<span className="text-neutral-700 select-none">3</span>
<span className="overflow-hidden whitespace-nowrap inline-block align-bottom max-w-0 animate-[code-type_0.8s_steps(20,end)_forwards] [animation-delay:1600ms]">
            const flow =
            <span className="text-yellow-500">await</span>
<span className="text-indigo-400">automate</span>
            ({
          </span>
</div>
<div className="flex gap-3 opacity-80">
<span className="text-neutral-700 select-none">4</span>
<span className="pl-4 overflow-hidden whitespace-nowrap inline-block align-bottom max-w-0 animate-[code-type_0.4s_steps(15,end)_forwards] [animation-delay:2400ms]">
            mode:
            <span className="text-green-500">'enterprise'</span>
            ,
          </span>
</div>
<div className="flex gap-3 opacity-80">
<span className="text-neutral-700 select-none">5</span>
<span className="pl-4 overflow-hidden whitespace-nowrap inline-block align-bottom max-w-0 animate-[code-type_0.3s_steps(10,end)_forwards] [animation-delay:2800ms]">
            minify: true,
          </span>
</div>
<div className="flex gap-3 opacity-80">
<span className="text-neutral-700 select-none">6</span>
<span className="overflow-hidden whitespace-nowrap inline-block align-bottom max-w-0 animate-[code-type_0.1s_steps(5,end)_forwards] [animation-delay:3100ms]">
            });
          </span>
</div>
<div className="flex gap-3 mt-1">
<span className="text-neutral-700 select-none">7</span>
<span className="opacity-0 animate-[fadeIn_0.01s_forwards] [animation-delay:3200ms]">
<span className="w-2 h-3.5 bg-indigo-500/80 animate-pulse block"></span>
</span>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">
      Implementation &amp; QA
    </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
      Our engineers build custom workflows, rigorously testing for
      stability across all scenarios.
    </p>
</div>

<div className="md:col-span-2 group flex flex-col hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_forwards] [animation-delay:400ms] opacity-0 border-white/5 border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 bg-[#111]">
<div className="relative w-full aspect-[16/10] mb-8 rounded-xl bg-[#1A1A1A] border border-white/5 overflow-hidden flex flex-col shadow-2xl group-hover:border-white/10 transition-colors">

<div className="h-8 w-full bg-[#1A1A1A] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
<div className="w-2 h-2 rounded-full bg-[#FF5F57]"></div>
<div className="w-2 h-2 rounded-full bg-[#FEBC2E]"></div>
<div className="w-2 h-2 rounded-full bg-[#28C840]"></div>
</div>

<div className="flex-1 p-3 grid grid-cols-5 gap-3 bg-[#141414]">

<div className="col-span-2 flex flex-col gap-1 py-1 pr-1 border-r border-white/5">
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-[10px] text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-shield" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
            Security
          </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-[10px] text-white bg-white/10 font-medium">
<svg className="lucide lucide-list" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="8" x2="21" y1="6" y2="6"></line>
<line x1="8" x2="21" y1="12" y2="12"></line>
<line x1="8" x2="21" y1="18" y2="18"></line>
<line x1="3" x2="3.01" y1="6" y2="6"></line>
<line x1="3" x2="3.01" y1="12" y2="12"></line>
<line x1="3" x2="3.01" y1="18" y2="18"></line>
</svg>
            Efficiency
          </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-[10px] text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-gauge" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
            Speed
          </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-[10px] text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-crosshair" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
            Accuracy
          </div>
</div>

<div className="col-span-3 bg-[#1f1f1f] rounded-lg p-3 flex flex-col items-center justify-center text-center relative border border-white/5">
<span className="text-[10px] text-neutral-500 self-start mb-2 font-mono">
            Status:
          </span>
<div className="flex-1 flex flex-col items-center justify-center w-full gap-3 mt-1">
<svg className="lucide lucide-refresh-cw w-6 h-6 text-neutral-400 group-hover:text-indigo-400 animate-[spin_3s_linear_infinite] transition-colors duration-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M8 21H3v-5"></path>
</svg>
<div className="w-full h-1 bg-neutral-700/50 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-indigo-500 rounded-full animate-[shimmer_2s_infinite] relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
</div>
</div>
<span className="text-[10px] text-neutral-400 font-mono">
              Optimizing...
            </span>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">
      Deployment &amp; Support
    </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
      Seamless integration into your production environment with
      continuous monitoring and updates.
    </p>
</div>

<div className="md:col-span-3 group flex flex-col p-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] [animation-delay:600ms]">
<div className="relative w-full aspect-[2/1] mb-6 rounded-2xl bg-[#111] border border-white/5 p-4 flex gap-4 overflow-hidden group-hover:bg-[#131313] transition-colors">

<div className="w-1/4 bg-[#161616] rounded-xl border border-white/5 p-3 flex flex-col gap-2">
<div className="text-[10px] text-neutral-500 mb-1">Filters :</div>
<div className="px-2 py-1.5 rounded-lg bg-[#252525] text-white text-[10px] font-medium border border-white/5">
          Work Efficiency
        </div>
<div className="px-2 py-1.5 rounded-lg text-neutral-500 text-[10px] hover:bg-white/5 transition-colors cursor-pointer">
          Cost Reduction
        </div>
<div className="px-2 py-1.5 rounded-lg text-neutral-500 text-[10px] hover:bg-white/5 transition-colors cursor-pointer">
          Automated Tasks
        </div>
<div className="px-2 py-1.5 rounded-lg text-neutral-500 text-[10px] hover:bg-white/5 transition-colors cursor-pointer">
          Lead Nurturing
        </div>
</div>

<div className="flex-1 bg-[#161616] rounded-xl border border-white/5 p-4 relative flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-[11px] text-white font-medium">
            Work Efficiency
          </span>
<span className="text-[11px] text-emerald-500 font-medium">
            +23%
          </span>
</div>
<div className="flex-1 flex items-end px-2 pb-2">

<svg className="w-full h-auto overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 20 L60 22 L70 15 L80 18 L90 5 L100 8" fill="none" stroke="#6366f1" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 20 L60 22 L70 15 L80 18 L90 5 L100 8 L100 40 L0 40 Z" fill="url(#gradient-chart)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient-chart" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="flex justify-between text-[8px] text-neutral-600 mt-2 px-1">
<span>Day 1</span>
<span>Day 2</span>
<span>Day 3</span>
<span>Day 4</span>
<span>Day 5</span>
<span>Day 6</span>
<span>Day 7</span>
</div>
</div>

<div className="w-1/4 bg-[#161616] rounded-xl border border-white/5 p-3 flex flex-col">
<div className="text-[10px] text-neutral-500 mb-2">Overall :</div>
<div className="text-3xl font-medium text-neutral-300 mb-2">
          48.9%
        </div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mb-3">
<div className="w-[48%] h-full bg-indigo-500 rounded-full"></div>
</div>
<p className="text-[8px] text-neutral-500 leading-relaxed mb-auto">
          Overall now you have 48.9% better system as compared to
          previous week
        </p>
<button className="w-full py-1.5 rounded-lg bg-[#222] border border-white/5 text-[10px] text-neutral-400 hover:text-white hover:bg-[#2a2a2a] transition-colors mt-2">
          Export
        </button>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">Data Insights</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
      Extract actionable insights from complex data sets to drive
      informed decisions and accelerate business growth.
    </p>
</div>

<div className="md:col-span-3 group flex flex-col p-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] [animation-delay:800ms]">
<div className="relative w-full aspect-[2/1] mb-6 rounded-2xl bg-[#111] border border-white/5 p-4 flex gap-4 overflow-hidden group-hover:bg-[#131313] transition-colors">

<div className="w-1/4 bg-[#161616] rounded-xl border border-white/5 p-3 flex flex-col justify-between">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-neutral-300">On Call..</span>
</div>
<div className="flex items-center gap-2 opacity-60">
<svg className="lucide lucide-mic" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
<span className="text-[10px] text-neutral-400">Mic On</span>
</div>
<div className="flex items-center gap-2 p-1.5 rounded bg-white/5 border border-white/5">
<svg className="lucide lucide-video-off text-neutral-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196a.5.5 0 0 1-.752.435L16 13.5V16a2 2 0 0 1-2 2h-4.25"></path>
<path d="m2 2 20 20"></path>
</svg>
<span className="text-[10px] text-neutral-400">Video Off</span>
</div>
<div className="flex items-center gap-2 opacity-60">
<svg className="lucide lucide-subtitles" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13h4"></path>
<path d="M15 13h2"></path>
<path d="M7 9h2"></path>
<path d="M13 9h4"></path>
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<span className="text-[10px] text-neutral-400">Caption On</span>
</div>
</div>
<button className="w-full h-8 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-phone-off" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
<line x1="22" x2="2" y1="2" y2="22"></line>
</svg>
</button>
</div>

<div className="flex-1 grid grid-cols-2 gap-2">
<div className="bg-[#1f1f1f] rounded-lg flex flex-col items-center justify-center p-2 relative overflow-hidden group/tile">
<div className="w-8 h-6 flex items-center justify-center gap-0.5">
<div className="w-1 h-3 bg-indigo-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 h-5 bg-indigo-500 rounded-full animate-[pulse_1s_ease-in-out_0.2s_infinite]"></div>
<div className="w-1 h-4 bg-indigo-500 rounded-full animate-[pulse_1s_ease-in-out_0.4s_infinite]"></div>
<div className="w-1 h-2 bg-indigo-500 rounded-full animate-[pulse_1s_ease-in-out_0.1s_infinite]"></div>
</div>
<span className="text-[9px] text-neutral-400 mt-2">
            AI Developer
          </span>
</div>
<div className="bg-[#1f1f1f] rounded-lg flex flex-col items-center justify-center p-2 relative">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center mb-1">
<svg className="text-neutral-400 lucide lucide-user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-[9px] text-neutral-400 mt-1">
            Sales expert
          </span>
</div>
<div className="bg-[#1f1f1f] rounded-lg flex flex-col items-center justify-center p-2 relative">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center mb-1">
<svg className="text-neutral-400 lucide lucide-user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-[9px] text-neutral-400 mt-1">
            Marketing expert
          </span>
</div>
<div className="bg-[#1f1f1f] rounded-lg flex flex-col items-center justify-center p-2 relative">
<div className="w-8 h-6 flex items-center justify-center gap-0.5">
<div className="w-0.5 h-2 bg-indigo-400/50 rounded-full"></div>
<div className="w-0.5 h-4 bg-indigo-400/50 rounded-full"></div>
<div className="w-0.5 h-2 bg-indigo-400/50 rounded-full"></div>
</div>
<span className="text-[9px] text-neutral-400 mt-2">You</span>
</div>
</div>

<div className="w-1/4 bg-[#161616] rounded-xl border border-white/5 p-3 flex flex-col gap-2">
<div className="text-[10px] text-neutral-300 mb-1">
          Note Taking...
        </div>
<div className="space-y-1.5 opacity-30">
<div className="h-1 w-full bg-white rounded-full"></div>
<div className="h-1 w-3/4 bg-white rounded-full"></div>
<div className="h-1 w-5/6 bg-white rounded-full"></div>
<div className="h-1 w-full bg-white rounded-full"></div>
<div className="h-1 w-2/3 bg-white rounded-full"></div>
<div className="h-1 w-full bg-white rounded-full"></div>
<div className="h-1 w-4/5 bg-white rounded-full"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Consulting</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
      Work with our experts to develop personalized AI strategies that
      streamline operations and deliver impactful results.
    </p>
</div>
</div>

</section>
<section className="z-10 sm:px-6 lg:px-8 bg-black w-full max-w-7xl border-white/5 border-t mx-auto px-4 py-24 relative overflow-hidden">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center mb-24 relative z-10">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md shadow-lg shadow-black/20">
<span className="text-xs font-medium text-neutral-300 tracking-wide">
              Capabilities
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Solutions that drive impact
          </h2>
<p className="text-lg text-neutral-400 font-light max-w-lg mx-auto leading-relaxed">
            Custom-built strategies to accelerate your business trajectory
            through intelligent automation.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">

<div className="group flex flex-col p-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl shadow-black/50">
<div className="relative w-full aspect-[4/3] mb-6 rounded-2xl bg-[#111] border border-white/5 overflow-hidden flex flex-col justify-between p-4 group-hover:bg-[#131313] transition-colors">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-500"></div>

<div className="space-y-4 z-10 mt-2 relative">

<div className="flex gap-3 max-w-[90%] animate-[fadeIn_0.5s_ease-out]">
<div className="w-8 h-8 rounded-xl bg-[#222] flex items-center justify-center border border-white/5 shrink-0 shadow-inner">
<svg className="text-white lucide lucide-bot" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="space-y-2 py-1">
<div className="h-1.5 w-24 bg-white/20 rounded-full"></div>
<div className="h-1.5 w-32 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-20 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="flex flex-row-reverse gap-3 max-w-[90%] ml-auto group-hover:-translate-y-1 transition-transform duration-500 delay-100">
<div className="w-8 h-8 rounded-xl bg-[#222] flex items-center justify-center border border-white/5 shrink-0 shadow-inner">
<svg className="text-neutral-400 lucide lucide-user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="p-3 bg-white/5 rounded-2xl rounded-tr-sm border border-white/5">
<div className="h-1.5 w-20 bg-white/40 rounded-full"></div>
</div>
</div>
</div>

<div className="mt-auto relative z-10 pt-4">
<div className="w-full bg-[#1A1A1A] border border-white/10 rounded-full h-11 pl-4 pr-1.5 flex items-center justify-between group-hover:border-white/20 transition-colors shadow-lg">
<span className="text-[11px] text-neutral-500 font-light tracking-wide">
                    Ask me something..
                  </span>
<button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors border border-white/5">
<svg className="text-white lucide lucide-send" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
              AI Customer Support
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
              Automate support tickets and inquiries with context-aware AI
              agents available 24/7.
            </p>
</div>

<div className="group flex flex-col p-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl shadow-black/50">
<div className="relative w-full aspect-[4/3] mb-6 rounded-2xl bg-[#111] border border-white/5 overflow-hidden p-4 group-hover:bg-[#131313] transition-colors">

<div className="absolute top-4 left-0 right-0 flex justify-center z-20">
<div className="bg-[#1A1A1A] border border-white/10 rounded-full px-3 py-1 text-[10px] text-neutral-300 font-medium shadow-lg backdrop-blur-sm">
                  Generate
                </div>
</div>

<div className="grid grid-cols-3 gap-3 h-full mt-2 relative z-10">

<div className="bg-[#161616] rounded-xl border border-white/5 p-3 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-7 h-7 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center border border-[#0A66C2]/10">
<svg className="text-[#0A66C2]" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</div>
<div className="space-y-2 opacity-50">
<div className="h-1 w-full bg-white/20 rounded-full"></div>
<div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
<div className="h-1 w-full bg-white/20 rounded-full"></div>
<div className="h-1 w-1/2 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="bg-[#161616] rounded-xl border border-white/5 p-3 flex flex-col gap-3 mt-5 group-hover:-translate-y-2 transition-transform duration-500 delay-75 shadow-lg">
<div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
<svg className="text-white" fill="currentColor" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
</svg>
</div>
<div className="space-y-2 opacity-50">
<div className="h-1 w-full bg-white/20 rounded-full"></div>
<div className="h-1 w-2/3 bg-white/20 rounded-full"></div>
<div className="h-1 w-full bg-white/20 rounded-full"></div>
</div>
</div>

<div className="bg-[#161616] rounded-xl border border-white/5 p-3 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500 delay-100">
<div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
<svg className="text-neutral-400 lucide lucide-globe" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="space-y-2 opacity-50">
<div className="h-1 w-full bg-white/20 rounded-full"></div>
<div className="h-1 w-4/5 bg-white/20 rounded-full"></div>
<div className="h-1 w-full bg-white/20 rounded-full"></div>
<div className="h-1 w-1/2 bg-white/20 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#111] to-transparent pointer-events-none z-20"></div>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
              Automated Content
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
              Scale your marketing efforts with AI-generated posts, blogs, and
              copy that converts.
            </p>
</div>

<div className="group flex flex-col p-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl shadow-black/50">
<div className="relative w-full aspect-[4/3] mb-6 rounded-2xl bg-[#111] border border-white/5 overflow-hidden flex flex-col p-4 group-hover:bg-[#131313] transition-colors">

<div className="flex flex-col gap-2 relative z-0">

<div className="flex items-center justify-between p-2.5 rounded-xl bg-[#161616] border border-white/5 opacity-40">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white font-medium">
                      JD
                    </div>
<div className="flex flex-col">
<span className="text-[11px] text-white font-medium">
                        Jack Daniel
                      </span>
<span className="text-[9px] text-neutral-500">Founder</span>
</div>
</div>
<svg className="text-neutral-600 lucide lucide-chevron-down" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>

<div className="flex flex-col p-3 rounded-2xl bg-[#1A1A1A] border border-white/10 relative overflow-hidden shadow-lg">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white relative border border-white/5 font-medium">
                        JR
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#1A1A1A]"></div>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-white font-medium">
                          Justin Rocks
                        </span>
<span className="text-[9px] text-neutral-500">
                          Marketing head
                        </span>
</div>
</div>
<svg className="text-neutral-400 lucide lucide-chevron-up" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="bg-black/20 p-2 rounded-lg">
<div className="text-[9px] text-neutral-500 mb-0.5">
                        E-mail
                      </div>
<div className="text-[10px] text-neutral-300 truncate font-light">
                        justin@main.com
                      </div>
</div>
<div className="bg-black/20 p-2 rounded-lg">
<div className="text-[9px] text-neutral-500 mb-0.5">
                        Phone
                      </div>
<div className="text-[10px] text-neutral-300 font-light">
                        +1(812)98XXX
                      </div>
</div>
<div className="bg-black/20 p-2 rounded-lg">
<div className="text-[9px] text-neutral-500 mb-0.5">
                        Company
                      </div>
<div className="text-[10px] text-neutral-300 font-light">
                        XYZ LLC
                      </div>
</div>
<div className="bg-black/20 p-2 rounded-lg">
<div className="text-[9px] text-neutral-500 mb-0.5">
                        Verified
                      </div>
<div className="text-[10px] text-emerald-500 font-medium">
                        Yes
                      </div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
<button className="bg-[#1f1f1f]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium px-5 py-2 rounded-full hover:bg-white/10 transition-all hover:scale-105 shadow-xl">
                  Generate Leads
                </button>
</div>

<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#111] to-transparent pointer-events-none z-10"></div>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
              Smart Outreach
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
              Pinpoint ideal prospects and automate your outreach pipelines for
              higher conversion.
            </p>
</div>
</div>

</section>
<section className="overflow-hidden bg-black border-white/5 border-t py-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col items-center text-center mb-16 md:mb-24">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<span className="text-xs font-medium text-neutral-400 tracking-wide">
                Benefits
              </span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Maximize efficiency and impact
            </h2>
<p className="text-lg text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
              Discover how our autonomous AI agents transform your enterprise
              operations to deliver measurable value.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 gap-x-6 gap-y-6">

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-colors duration-300" onmousemove="const rect=this.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;this.style.setProperty('--x',`${x}px`);this.style.setProperty('--y',`${y}px`);" style={{'--x': '0px', '--y': '0px'}}>

<div className="absolute inset-0 z-0 rounded-[2rem] border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{WebkitMaskImage: 'radial-gradient(250px circle at var(--x) var(--y), black, transparent)', maskImage: 'radial-gradient(250px circle at var(--x) var(--y), black, transparent)'}}></div>

<div className="absolute inset-0 z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trending-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
<polyline points="16 17 22 17 22 11"></polyline>
</svg>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">
                  Cost reduction
                </h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Optimize business processes and streamline operations with
                  intelligent automation to significantly minimize overhead and
                  maximize ROI.
                </p>
</div>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-colors duration-300" onmousemove="const rect=this.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;this.style.setProperty('--x',`${x}px`);this.style.setProperty('--y',`${y}px`);" style={{'--x': '0px', '--y': '0px'}}>

<div className="absolute inset-0 z-0 rounded-[2rem] border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{WebkitMaskImage: 'radial-gradient(250px circle at var(--x) var(--y), black, transparent)', maskImage: 'radial-gradient(250px circle at var(--x) var(--y), black, transparent)'}}></div>

<div className="absolute inset-0 z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">
                  Improved outcomes
                </h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Leverage powerful data-driven insights and AI-powered
                  strategies to enhance business performance and achieve
                  superior outcomes.
                </p>
</div>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-colors duration-300" onmousemove="const rect=this.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;this.style.setProperty('--x',`${x}px`);this.style.setProperty('--y',`${y}px`);" style={{'--x': '185.3359375px', '--y': '156px'}}>

<div className="absolute inset-0 z-0 rounded-[2rem] border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{WebkitMaskImage: 'radial-gradient(250px circle at var(--x) var(--y), black, transparent)', maskImage: 'radial-gradient(250px circle at var(--x) var(--y), black, transparent)'}}></div>

<div className="absolute inset-0 z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">
                  Increased productivity
                </h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Enhance team performance and output by automating redundant
                  tasks, refining processes, and speeding up core business
                  functions.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-black border-white/5 border-t py-24 relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<style>
            @keyframes marquee-up {
                from { transform: translateY(0); }
                to { transform: translateY(-50%); }
            }
            @keyframes marquee-down {
                from { transform: translateY(-50%); }
                to { transform: translateY(0); }
            }
            .animate-marquee-up {
                animation: marquee-up 60s linear infinite;
            }
            .animate-marquee-down {
                animation: marquee-down 60s linear infinite;
            }
            .mask-gradient-y {
                mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
            }
            /* Pause on hover */
            .hover-pause:hover .animate-marquee-up,
            .hover-pause:hover .animate-marquee-down {
                animation-play-state: paused;
            }
          </style>

<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Loved by teams worldwide
              </h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
                Join thousands of forward-thinking companies building the future
                with NexAuto's intelligent automation platform.
              </p>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs text-white font-medium">
                  +2k
                </div>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-500 gap-0.5">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<span className="text-neutral-500 text-xs mt-1">
                  Rated 4.9/5 by customers
                </span>
</div>
</div>
</div>

<div className="md:hidden space-y-6">

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10">
<div className="flex items-center gap-3 mb-4">
<img alt="Rachel Jones" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">Rachel Jones</div>
<div className="text-neutral-500 text-xs">CTO, TechFlow</div>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                "The automation capabilities have completely transformed our
                internal workflows. It's literally like having an extra team
                working 24/7."
              </p>
</div>

<div className="p-1 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden">
<div className="relative h-48 w-full rounded-xl overflow-hidden mb-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b15071a-c7df-4dfa-8dbb-15f0299f809e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
<p className="text-white text-sm font-medium leading-snug">
                    "Security was our main concern, but NexAuto's
                    enterprise-grade protocols exceeded our compliance
                    requirements."
                  </p>
</div>
</div>
<div className="flex items-center gap-3 p-4">
<img alt="Marcus Kane" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-xs font-medium">Marcus Kane</div>
<div className="text-neutral-500 text-[10px]">
                    VP Ops, Solaris
                  </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10">
<p className="text-neutral-300 text-sm leading-relaxed font-light mb-6">
                "We saw a 400% ROI in the first quarter alone. The lead
                generation bots are incredibly nuanced and effective."
              </p>
<div className="flex items-center gap-3">
<img alt="Sarah Lee" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">Sarah Lee</div>
<div className="text-neutral-500 text-xs">Director, OmniCorp</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-indigo-900/10 border border-indigo-500/20">
<div className="mb-6 text-indigo-400">
<svg className="opacity-50" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699L9.01699 21H2.01699L2.01699 11L11.017 2L20.017 11L20.017 21L14.017 21ZM12.017 14C12.017 14 12.017 14 12.017 14C12.017 14 12.017 14 12.017 14Z"></path>
</svg>
</div>
<p className="text-white text-lg font-normal leading-relaxed mb-6">
                "Implementation was seamless. Their team handled the migration
                perfectly."
              </p>
<div className="flex items-center gap-3">
<img alt="David Torres" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">David Torres</div>
<div className="text-indigo-300/80 text-xs">
                    Head of Product, Aether
                  </div>
</div>
</div>
</div>
</div>

<div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 h-[700px] overflow-hidden mask-gradient-y hover-pause relative">

<div className="flex flex-col gap-6 animate-marquee-up">


<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="Rachel Jones" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">
                        Rachel Jones
                      </div>
<div className="text-neutral-500 text-xs">CTO, TechFlow</div>
</div>
</div>
<svg className="text-[#0A66C2] opacity-80" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                  "The automation capabilities have completely transformed our
                  internal workflows. It's literally like having an extra team
                  working 24/7. We've cut operational costs by 40% in just two
                  months."
                </p>
</div>

<div className="p-6 rounded-2xl bg-indigo-900/10 border border-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300">
<div className="mb-6 text-indigo-400">
<svg className="opacity-50" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699L9.01699 21H2.01699L2.01699 11L11.017 2L20.017 11L20.017 21L14.017 21ZM12.017 14C12.017 14 12.017 14 12.017 14C12.017 14 12.017 14 12.017 14Z"></path>
</svg>
</div>
<p className="text-white text-lg font-normal leading-relaxed mb-6">
                  "Implementation was seamless. Their team handled the migration
                  perfectly without any downtime."
                </p>
<div className="flex items-center gap-3">
<img alt="David Torres" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">
                      David Torres
                    </div>
<div className="text-indigo-300/80 text-xs">
                      Head of Product, Aether
                    </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="Rachel Jones" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">
                        Rachel Jones
                      </div>
<div className="text-neutral-500 text-xs">CTO, TechFlow</div>
</div>
</div>
<svg className="text-[#0A66C2] opacity-80" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                  "The automation capabilities have completely transformed our
                  internal workflows. It's literally like having an extra team
                  working 24/7. We've cut operational costs by 40% in just two
                  months."
                </p>
</div>
<div className="p-6 rounded-2xl bg-indigo-900/10 border border-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300">
<div className="mb-6 text-indigo-400">
<svg className="opacity-50" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699L9.01699 21H2.01699L2.01699 11L11.017 2L20.017 11L20.017 21L14.017 21ZM12.017 14C12.017 14 12.017 14 12.017 14C12.017 14 12.017 14 12.017 14Z"></path>
</svg>
</div>
<p className="text-white text-lg font-normal leading-relaxed mb-6">
                  "Implementation was seamless. Their team handled the migration
                  perfectly without any downtime."
                </p>
<div className="flex items-center gap-3">
<img alt="David Torres" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">
                      David Torres
                    </div>
<div className="text-indigo-300/80 text-xs">
                      Head of Product, Aether
                    </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 animate-marquee-down">


<div className="p-1 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
<div className="relative h-48 w-full rounded-xl overflow-hidden mb-0">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
<p className="text-white text-sm font-medium leading-snug">
                      "Security was our main concern, but NexAuto's
                      enterprise-grade protocols exceeded our compliance
                      requirements."
                    </p>
</div>
</div>
<div className="flex items-center gap-3 p-4">
<img alt="Marcus Kane" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-xs font-medium">
                      Marcus Kane
                    </div>
<div className="text-neutral-500 text-[10px]">
                      VP Ops, Solaris
                    </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="Elena Aris" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">
                        Elena Aris
                      </div>
<div className="text-neutral-500 text-xs">CMO, Vortex</div>
</div>
</div>
<svg className="text-white opacity-40" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                  "The content generation engine maintains our brand voice
                  perfectly while scaling our output by 10x. It's been a game
                  changer for our content strategy."
                </p>
</div>

<div className="p-1 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
<div className="relative h-48 w-full rounded-xl overflow-hidden mb-0">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24c2884b-4d2b-4046-aad1-e60712a5eec0_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
<p className="text-white text-sm font-medium leading-snug">
                      "Security was our main concern, but NexAuto's
                      enterprise-grade protocols exceeded our compliance
                      requirements."
                    </p>
</div>
</div>
<div className="flex items-center gap-3 p-4">
<img alt="Marcus Kane" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-xs font-medium">
                      Marcus Kane
                    </div>
<div className="text-neutral-500 text-[10px]">
                      VP Ops, Solaris
                    </div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="Elena Aris" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">
                        Elena Aris
                      </div>
<div className="text-neutral-500 text-xs">CMO, Vortex</div>
</div>
</div>
<svg className="text-white opacity-40" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                  "The content generation engine maintains our brand voice
                  perfectly while scaling our output by 10x. It's been a game
                  changer for our content strategy."
                </p>
</div>
</div>

<div className="hidden lg:flex flex-col gap-6 animate-marquee-up">


<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light mb-6">
                  "We saw a 400% ROI in the first quarter alone. The lead
                  generation bots are incredibly nuanced and effective."
                </p>
<div className="flex items-center gap-3">
<img alt="Sarah Lee" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">Sarah Lee</div>
<div className="text-neutral-500 text-xs">
                      Director, OmniCorp
                    </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300">
<p className="text-neutral-300 text-sm leading-relaxed font-light mb-6">
                  "Best decision we made this year. The platform is intuitive
                  and the support is world-class. Highly recommended for any
                  scaling enterprise."
                </p>
<div className="flex items-center gap-3">
<img alt="Alex Chen" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">Alex Chen</div>
<div className="text-neutral-500 text-xs">Founder, Nexus</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 text-yellow-500 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light mb-6">
                  "We saw a 400% ROI in the first quarter alone. The lead
                  generation bots are incredibly nuanced and effective."
                </p>
<div className="flex items-center gap-3">
<img alt="Sarah Lee" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">Sarah Lee</div>
<div className="text-neutral-500 text-xs">
                      Director, OmniCorp
                    </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300">
<p className="text-neutral-300 text-sm leading-relaxed font-light mb-6">
                  "Best decision we made this year. The platform is intuitive
                  and the support is world-class. Highly recommended for any
                  scaling enterprise."
                </p>
<div className="flex items-center gap-3">
<img alt="Alex Chen" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<div className="text-white text-sm font-medium">Alex Chen</div>
<div className="text-neutral-500 text-xs">Founder, Nexus</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-black border-white/5 border-t pt-32 pb-32 relative">
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Flexible plans for growth
            </h2>
<p className="text-lg text-neutral-400">
              Transparent pricing designed to fit your requirements.
            </p>

<div className="mt-8 inline-flex items-center p-1 rounded-lg bg-[#1A1A1A] border border-white/10">
<button className="px-6 py-2 rounded-md text-neutral-400 hover:text-white text-sm font-medium transition-colors" id="btn-annually" onclick="window.togglePricing('annually')">
                Annually
              </button>
<button className="px-6 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-colors" id="btn-monthly" onclick="window.togglePricing('monthly')">
                Monthly
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6">
<svg className="text-neutral-300 lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Basic</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-semibold text-white tracking-tight" id="price-basic">
                    $480
                  </span>
<span className="text-neutral-400 text-sm">/month</span>
</div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                  Essential tools and features for starting your journey with
                  ease.
                </p>
<button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group/btn mb-8">
                  Go with this plan
                  <svg className="lucide lucide-arrow-up-right group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<div className="space-y-4 mt-auto">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Basic workflow automation
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Basic chatbot development
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      60 content request
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">E-mail support</span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      1 consultation a month
                    </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6">
<svg className="text-neutral-300 lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
                  Professional
                </h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-semibold text-white tracking-tight" id="price-pro">
                    $960
                  </span>
<span className="text-neutral-400 text-sm">/month</span>
</div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                  Advanced capabilities designed to meet growing business needs.
                </p>
<button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group/btn mb-8">
                  Go with this plan
                  <svg className="lucide lucide-arrow-up-right group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<div className="space-y-4 mt-auto">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Advance workflow automation
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Advance chatbot development
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      150 content request
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">E-mail support</span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      2 consultation a month
                    </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6">
<svg className="text-neutral-300 lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprises</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-semibold text-white tracking-tight">
                    Custom
                  </span>
</div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                  Comprehensive solutions tailored for large-scale business
                  success.
                </p>
<button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group/btn mb-8">
                  Schedule a call
                  <svg className="lucide lucide-arrow-up-right group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<div className="space-y-4 mt-auto">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Custom workflow automation
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Custom chatbot development
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Unlimited content request
                    </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
<svg className="text-neutral-300" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-neutral-300">
                        Unlimited consultation a month
                      </span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>

</section>
<section className="py-32 bg-black border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center px-4">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black/80 to-black pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            Ready to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">
              scale up?
            </span>
</h2>
<p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light">
            Join the fastest growing companies leveraging NexAuto for
            uncompromised efficiency.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="#">
              Get Started Now
            </a>
<a className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium text-lg hover:bg-white/5 transition-colors w-full sm:w-auto" href="#">
              Contact Sales
            </a>
</div>
</div>
</section>
<footer className="overflow-hidden bg-black pt-24 pb-12 relative">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-4 flex flex-col">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-xs font-light">
          Empowering enterprises with next-generation AI automation.
          Scalable, secure, and intelligent.
        </p>
<div className="flex gap-3">
<a className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<svg className="lucide lucide-github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mt-8 lg:mt-0">

<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Product</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li className="">
<a className="hover:text-purple-400 transition-colors" href="#">Features</a>
</li>
<li className="">
<a className="hover:text-purple-400 transition-colors" href="#">Integrations</a>
</li>
<li className="">
<a className="hover:text-purple-400 transition-colors" href="#">Pricing</a>
</li>
<li className="">
<a className="hover:text-purple-400 transition-colors" href="#">Changelog</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li>
<a className="hover:text-purple-400 transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Blog</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Careers</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Customers</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Resources</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Documentation</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Community</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Help Center</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">API Reference</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Privacy</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Terms</a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">Security</a>
</li>
</ul>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-neutral-500 text-xs font-light">
        © 2024 NexAuto Inc. All rights reserved.
      </div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white text-xs transition-colors" href="#">
          Privacy Policy
        </a>
<a className="text-neutral-500 hover:text-white text-xs transition-colors" href="#">
          Terms of Service
        </a>
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-[10px] text-neutral-300 font-medium">Systems Normal</span>
</div>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
