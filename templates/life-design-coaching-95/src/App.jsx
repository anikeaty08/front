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
  


            function toggleService(index) {
                for (let i = 1; i <= 5; i++) {
                    const isSelected = i === index;
                    
                    const desktopImg = document.getElementById(`service-desktop-img-${i}`);
                    if (desktopImg) desktopImg.style.opacity = isSelected ? '1' : '0';
                    
                    const content = document.getElementById(`service-content-${i}`);
                    if (content) content.className = isSelected 
                        ? 'grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out' 
                        : 'grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out';
                    
                    const inner = document.getElementById(`service-inner-${i}`);
                    if (inner) {
                        inner.className = isSelected
                            ? 'pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100'
                            : 'pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100';
                    }

                    const title = document.getElementById(`service-title-${i}`);
                    if (title) {
                        title.className = isSelected
                            ? 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 transition-colors mb-4'
                            : 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4';
                    }
                    
                    const num = document.getElementById(`service-num-${i}`);
                    if (num) {
                        num.className = isSelected
                            ? 'text-xl font-mono text-neutral-900 transition-colors pt-2'
                            : 'text-xl font-mono text-neutral-400 transition-colors pt-2';
                    }

                    const icon = document.getElementById(`service-icon-${i}`);
                    if (icon) {
                        icon.className = isSelected
                            ? 'w-10 h-10 rounded-full border border-neutral-900 bg-neutral-900 text-white flex items-center justify-center transition-all ml-4 shrink-0'
                            : 'w-10 h-10 rounded-full border border-neutral-200 bg-transparent text-neutral-400 flex items-center justify-center transition-all ml-4 shrink-0';
                        
                        const svg = icon.querySelector('span');
                        if (svg) {
                            if(isSelected) {
                                svg.setAttribute('data-icon', 'solar:minus-linear');
                                svg.className = 'iconify transition-transform duration-300 rotate-0';
                            } else {
                                svg.setAttribute('data-icon', 'solar:arrow-left-linear');
                                svg.className = 'iconify transition-transform duration-300 -rotate-90';
                            }
                        }
                    }
                }
            }
        
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
      

<div className="aura-background-component fixed top-0 w-full h-screen z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div></div>

<nav className="fixed z-50 flex transition-all duration-300 w-full pr-4 pl-4 top-6 right-0 left-0 justify-center">
<div className="flex shadow-black/50 bg-zinc-900/60 w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="flex items-center gap-2 text-xl font-medium tracking-tight text-white hover:opacity-80 transition-opacity" href="#">
<span className="font-instrument italic text-2xl">Upgrade Formula.</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="transition-colors hover:text-white flex items-center gap-1 group" href="#methodology">
                Methodology
                <svg aria-hidden="true" className="iconify opacity-0 group-hover:opacity-100 transition-opacity text-[#ccf655] iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
<a className="transition-colors hover:text-white group flex items-center gap-1" href="#analysis">
                The Process
            </a>
<a className="transition-colors hover:text-white group flex items-center gap-1" href="#fit">
                Suitability
            </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-[#ccf655] text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#bce34d] transition-colors shadow-[0_0_20px_rgba(204,246,85,0.3)]" href="#">
    Get Started
</a>
<button className="md:hidden p-3 rounded-full hover:bg-white/10 text-white hover:text-[#ccf655] transition-colors">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:hamburger-menu-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</nav>

<header className="min-h-[100vh] overflow-hidden flex flex-col lg:pt-32 lg:pb-20 selection:bg-[#FACC15] selection:text-black group text-white bg-[#050505] w-full pt-20 pb-12 relative">
<style>
        .beam-h {
            position: absolute; left: 0; right: 0; height: 1px; background: rgba(255,255,255,0.03); overflow: hidden;
        }
        .beam-h::after {
            content: ''; position: absolute; top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(to right, transparent, #FACC15, transparent);
            transform: translateX(-100%);
            animation: beam-slide 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .beam-v {
            position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255,255,255,0.03); overflow: hidden;
        }
        .beam-v::after {
            content: ''; position: absolute; top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(to bottom, transparent, #FACC15, transparent);
            transform: translateY(-100%);
            animation: beam-drop 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes beam-slide { 0% { transform: translateX(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateX(100%); opacity: 0; } }
        @keyframes beam-drop { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(100%); opacity: 0; } }
        
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .stars {
            background-image: 
                radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
                radial-gradient(1.5px 1.5px at 40px 70px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
                radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0)),
                radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
                radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 200px 200px;
            animation: stars-move 120s linear infinite;
            opacity: 0.15;
        }
        @keyframes stars-move {
            from { transform: translateY(0); }
            to { transform: translateY(-200px); }
        }
    </style>

<div className="bg-[#050505] z-0 absolute top-0 right-0 bottom-0 left-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FACC15]/10 via-[#050505]/10 to-transparent blur-[120px] pointer-events-none"></div>

<div className="absolute inset-0 stars pointer-events-none"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black_40%,transparent_100%)] pointer-events-none"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 flex-grow min-h-screen z-10 w-full max-w-[1600px] mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-start">

<div className="lg:col-span-12 flex flex-col lg:mt-0 text-center w-full mt-20 relative items-center justify-start">


<div className="flex flex-col items-center w-full max-w-5xl mx-auto mb-24 lg:mb-32 relative z-10 fade-in-up">

<div className="flex items-center gap-3 mb-10 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full shadow-[0_0_10px_#FACC15] animate-pulse"></div>
<span className="uppercase text-[10px] text-[#FACC15] tracking-[0.25em] font-mono leading-none pt-0.5">System v2.0 // Ready</span>
</div>

<h1 className="md:text-7xl lg:text-8xl bg-clip-text leading-[0.95] text-5xl font-medium text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 max-w-4xl mr-auto ml-auto py-4" style={{animationDelay: '100ms'}}>
            System Upgrade
        </h1>

<p className="text-lg md:text-xl text-neutral-400 font-light max-w-lg leading-relaxed mb-12" style={{animationDelay: '200ms'}}>
<span className="text-white font-normal">(The Operating System for Life Design)</span>. Constructing the ethereal through parametric design and brutalist principles.
        </p>

<div className="flex flex-wrap gap-4 justify-center items-center" style={{animationDelay: '300ms'}}>
<a className="group relative px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wider overflow-hidden hover:bg-[#FACC15] transition-colors duration-300 border border-transparent rounded-sm" href="#methodology">
<span className="relative z-10 flex items-center gap-2">
                    Start Audit
                    <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<div className="px-8 py-4 border border-white/10 text-neutral-500 font-mono text-xs uppercase tracking-wider flex items-center gap-3 hover:border-[#FACC15]/30 hover:text-neutral-300 transition-colors cursor-default rounded-sm bg-white/[0.02]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                System Nominal
            </div>
</div>
</div>


<div className="w-full border-t border-white/10 pt-16 pb-20 max-w-[1400px] fade-in-up delay-300">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x-0 lg:divide-x divide-white/5">

<div className="group flex flex-col gap-3 items-center lg:items-start px-8 transition-all duration-300 hover:bg-white/[0.02] py-4 rounded-xl lg:rounded-none">
<div className="p-2 rounded-md bg-white/5 text-neutral-500 group-hover:text-[#FACC15] group-hover:bg-[#FACC15]/10 transition-colors mb-2">
<svg className="lucide lucide-trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<span className="text-4xl lg:text-6xl font-light tracking-tighter text-white group-hover:text-[#FACC15] transition-colors duration-300">88%</span>
<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Ticket Savings</span>
</div>

<div className="group flex flex-col gap-3 items-center lg:items-start px-8 transition-all duration-300 hover:bg-white/[0.02] py-4 rounded-xl lg:rounded-none">
<div className="p-2 rounded-md bg-white/5 text-neutral-500 group-hover:text-[#FACC15] group-hover:bg-[#FACC15]/10 transition-colors mb-2">
<svg className="lucide lucide-calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<span className="text-4xl lg:text-6xl font-light tracking-tighter text-white group-hover:text-[#FACC15] transition-colors duration-300">29</span>
<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Years Intel</span>
</div>

<div className="group flex flex-col gap-3 items-center lg:items-start px-8 transition-all duration-300 hover:bg-white/[0.02] py-4 rounded-xl lg:rounded-none">
<div className="p-2 rounded-md bg-white/5 text-neutral-500 group-hover:text-[#FACC15] group-hover:bg-[#FACC15]/10 transition-colors mb-2">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<span className="text-4xl lg:text-6xl font-light tracking-tighter text-white group-hover:text-[#FACC15] transition-colors duration-300">7M+</span>
<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Upgrades Served</span>
</div>

<div className="group flex flex-col gap-3 items-center lg:items-start px-8 transition-all duration-300 hover:bg-white/[0.02] py-4 rounded-xl lg:rounded-none">
<div className="p-2 rounded-md bg-white/5 text-neutral-500 group-hover:text-[#FACC15] group-hover:bg-[#FACC15]/10 transition-colors mb-2">
<svg className="lucide lucide-graduation-cap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<span className="text-3xl lg:text-4xl font-light tracking-tight text-white group-hover:text-[#FACC15] transition-colors duration-300 mt-2 lg:mt-3">Ingenious</span>
<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Princeton Endorsed</span>
</div>
</div>
</div>


<div className="flex flex-col gap-8 fade-in-up delay-500 w-full border-white/10 border-t pt-10 relative gap-x-8 gap-y-8 items-center">
<style>
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll-logos {
                animation: scroll 80s linear infinite;
            }
            .animate-scroll-logos:hover {
                animation-play-state: paused;
            }
        </style>
<div className="flex flex-col gap-2 text-center items-center z-10 relative">
<span className="text-[10px] uppercase text-neutral-600 tracking-[0.25em] font-mono">Media &amp; Press</span>
<h3 className="text-xl font-medium tracking-tight text-white">Mr. Upgrade <span className="text-neutral-500">Featured in</span></h3>
</div>
<div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] py-4">
<div className="flex gap-8 animate-scroll-logos w-max gap-x-8 gap-y-8">

<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796e3d5b5b5650852fb_Logo-2.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796153519d347bbc865_Logo.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796aafce92af6414635_Logo-13.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796a287ba2d1c4d16bf_Logo-10.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796f378151d1005cbbc_Logo-6.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796f510c8be8edab14f_Logo-14.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab7966f2b675073f1f125_Logo-12.png"/>
</div>

<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796e3d5b5b5650852fb_Logo-2.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796153519d347bbc865_Logo.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796aafce92af6414635_Logo-13.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796a287ba2d1c4d16bf_Logo-10.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796f378151d1005cbbc_Logo-6.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab796f510c8be8edab14f_Logo-14.png"/>
</div>
<div className="h-48 px-16 border border-white/5 bg-white/[0.02] rounded-lg flex items-center justify-center shrink-0 hover:border-white/20 hover:bg-white/10 transition-all cursor-default group backdrop-blur-sm">
<img alt="Logo" className="max-h-24 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/671763b0529ac23ada64e728/681ab7966f2b675073f1f125_Logo-12.png"/>
</div>
</div>
</div>
</div>
</div>
</div><div className="flex flex-col min-h-screen lg:px-12 selection:bg-[#FACC15] selection:text-black z-20 overflow-hidden transition-all duration-500 group bg-zinc-900/60 w-full max-w-[1600px] border-white/10 border ring-white/5 ring-1 rounded-3xl mr-auto ml-auto pt-24 pr-6 pb-12 pl-6 relative shadow-2xl backdrop-blur-xl justify-between">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] opacity-50"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[#FACC15]/5 blur-[120px] rounded-full mix-blend-screen opacity-60"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FACC15]/5 blur-[100px] rounded-full mix-blend-screen opacity-40"></div>
</div>

<div className="flex w-full justify-start relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 hover:border-[#FACC15]/30 transition-colors cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15] animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Mission Protocol</span>
</div>
</div>

<div className="max-w-[95rem] mt-auto mb-auto relative z-10 py-12">
<h2 className="text-4xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.0] md:leading-[0.95] tracking-tighter font-medium text-white/20 select-none transition-all duration-700">
<span className="text-white drop-shadow-lg">We are a systems architecture firm</span> dedicated to transforming how the world's elite 
            <span className="text-white hover:text-[#FACC15] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.02] transition-all duration-300 cursor-default inline-block origin-bottom font-semibold">structure reality</span>. 
            With a collective of data engineers and behavioral scientists, we build 
            <span className="text-white hover:text-[#FACC15] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.02] transition-all duration-300 cursor-default inline-block origin-bottom font-semibold">operating systems</span> 
            that empower 
            <span className="text-white hover:text-[#FACC15] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.02] transition-all duration-300 cursor-default inline-block origin-bottom font-semibold">sovereign individuals</span> 
            to audit, optimize, and scale their output with 
            <span className="text-white hover:text-[#FACC15] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.02] transition-all duration-300 cursor-default inline-block origin-bottom font-semibold">algorithmic precision</span>.
        </h2>
</div>

</div>

<div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-[#050505]/80 backdrop-blur-md z-20">
<div className="beam-h top-0"></div>
</div>
</header>

<section className="bg-white pt-24 pr-6 pb-24 pl-6" id="methodology">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">System Fragmentation</h2>
<p className="text-neutral-500 max-w-md">Your life isn't failing. Your integration strategy is.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-neutral-200">

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:layers-minimalistic-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path><path d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" strokeLinecap="round"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">System Chaos</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        You run 12 different apps for tasks, habits, and finance with zero data integration. Friction is eating your bandwidth.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:scale-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path d="M11 2c-4.055.007-6.178.107-7.536 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.464 8.536C4.93 21.999 7.286 21.999 12 21.999s7.071 0 8.535-1.464c1.358-1.357 1.457-3.48 1.464-7.536"></path><path d="m13 11l9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8" strokeLinejoin="round"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Success Imbalance</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        You operate like a Fortune 500 CEO at the office and an amateur at home. The disparity creates cognitive dissonance.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:danger-triangle-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022z" stroke="currentColor" strokeWidth="1.5"></path><path d="M12 8v5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><circle cx="12" cy="16" fill="currentColor" r="1"></circle></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Framework Fatigue</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        You consume productivity content endlessly but execute rarely. You are over-educated and under-optimized.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pr-6 pb-24 pl-6 bg-white border-neutral-200" id="analysis">
<div className="max-w-7xl mx-auto">
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-20">The Architecture</span>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative gap-x-12 gap-y-12 items-start">

<div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-neutral-100">
<div className="relative w-full h-full">
<img alt="Audit" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 z-10" id="service-desktop-img-1" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2160&amp;q=80" style={{}}/>
<img alt="Engineering" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-2" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2160&amp;q=80" style={{}}/>
<img alt="Options" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-3" src="https://images.unsplash.com/photo-1529236183275-4fd5465466bf?w=2160&amp;q=80"/>
<img alt="Decision" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-4" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2160&amp;q=80" style={{}}/>
<img alt="Protocols" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-5" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-20 pointer-events-none from-neutral-900/20"></div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(1)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-900" id="service-num-1">01</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-900" id="service-title-1">Baseline Audit</h3>
<div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-900 bg-neutral-900 text-white" id="service-icon-1">
<span className="iconify transition-transform duration-300 rotate-0" data-icon="solar:minus-linear" data-width="18"></span>
</div>
</div>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-1">
<div className="overflow-hidden">
<div className="pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100" id="service-inner-1">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Radical honesty about current resource allocation. Data over feelings. A clear balance sheet of your time and energy.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(2)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-2">02</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-500" id="service-title-2">Desires Engineering</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-2">
<svg aria-hidden="true" className="iconify transition-transform duration-300 -rotate-90 iconify--solar" data-icon="solar:arrow-left-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-2">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-2">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Separating mimetic desires (what society wants) from authentic objectives. Establishing 3 core North Star metrics.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(3)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-3">03</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-500" id="service-title-3">Option Generation</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-3">
<svg aria-hidden="true" className="iconify transition-transform duration-300 -rotate-90 iconify--solar" data-icon="solar:arrow-left-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-3">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-3">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Divergent thinking strategies to map every possible path to the objective. A probability map of potential futures.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(4)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-4">04</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-500" id="service-title-4">Decision Matrix</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-4">
<svg aria-hidden="true" className="iconify transition-transform duration-300 -rotate-90 iconify--solar" data-icon="solar:arrow-left-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-4">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-4">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Applying algorithmic logic to remove emotional bias from major choices. Irreversible commitment to one path.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(5)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-5">05</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-500" id="service-title-5">Implementation Protocols</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-5">
<svg aria-hidden="true" className="iconify transition-transform duration-300 -rotate-90 iconify--solar" data-icon="solar:arrow-left-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-5">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-5">
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                                Automating execution. Building the environment that makes failure impossible. A self-correcting daily system.
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 border-b bg-white border-neutral-200">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-neutral-100">
<img alt="Founder" className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-md border bg-white/90 border-white/20">
<p className="text-xs font-medium text-neutral-900">Engineering Logic</p>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
                    Why trust a hacker with <span className="text-neutral-400">life design?</span>
</h2>
<div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-neutral-600">
<p>
                        Most coaches offer motivation. I offer mechanics. Drawing from 15 years in high-stakes travel hacking and systems engineering, I apply the same ruthless optimization to lifestyle design.
                    </p>
<p>
                        If you can optimize a flight itinerary to save $10,000, you can optimize your calendar to save 10 years. The logic is identical; only the variables change.
                    </p>
</div>
<div className="mt-10 flex gap-4">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify text-green-600 iconify--solar" data-icon="solar:check-circle-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg> 32k → 3k Cost
                     </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify text-green-600 iconify--solar" data-icon="solar:check-circle-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg> Data Driven
                     </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify text-green-600 iconify--solar" data-icon="solar:check-circle-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg> Zero "Vibes"
                     </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="fit">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Is This For You?</h2>
<p className="text-neutral-400">We filter for fit, not volume.</p>
</div>
<div className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white">Read Manifesto</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-[#ccf655]">TARGET PROFILE</span>
<h3 className="text-lg font-medium mb-3 text-white">Engineering Precision</h3>
<p className="text-sm leading-relaxed text-neutral-400 mb-6">You want mechanics, not advice. You value data over emotions in decision making.</p>
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[#ccf655]">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:check-read-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-[#ccf655]">TARGET PROFILE</span>
<h3 className="text-lg font-medium mb-3 text-white">Radical Honesty</h3>
<p className="text-sm leading-relaxed text-neutral-400 mb-6">You are willing to deconstruct your current beliefs and rebuild from zero.</p>
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[#ccf655]">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:check-read-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">ANTI-PROFILE</span>
<h3 className="text-lg font-medium mb-3 text-neutral-300">Motivation Seekers</h3>
<p className="text-sm leading-relaxed text-neutral-500 mb-6">If you are looking for "good vibes" or a quick fix, close this tab immediately.</p>
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-600">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:close-circle-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</div>
</div>

<div className="border-l pl-6 relative border-neutral-800 bg-neutral-800/20 rounded-r-lg">
<span className="font-mono text-xs mb-4 block text-white">NEXT STEP</span>
<h3 className="text-3xl font-medium mb-1 text-white">Start</h3>
<p className="text-sm font-medium mb-3 text-neutral-300">5-Minute Diagnostic</p>
<p className="text-sm leading-relaxed text-neutral-400 mb-6">Get your baseline score instantly. No email required to view.</p>
<button className="text-xs px-4 py-2 rounded bg-white text-neutral-900 hover:bg-neutral-200 transition-colors uppercase tracking-wide font-semibold" id="diagnostic">Begin Audit</button>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-widest uppercase block mb-6 font-instrument italic" href="#">Upgrade Formula.</a>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        The operating system for life design. Systems over feelings. Mechanics over motivation.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">System</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="#">Diagnostic</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Blueprint</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Protocols</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="solar:globe-linear" data-width="14"></span> Global Remote
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:letter-linear" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></path><path d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8" strokeLinecap="round"></path></g></svg> system@upgradeformula.com
                        </li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
<p className="text-xs text-neutral-400">© 2024 Upgrade Formula. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:cat-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.1 10.66c1.111 1.314.88 2.922.88 4.34c0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563c-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5S4.02 5.563 4.02 7.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66" strokeLinecap="round"></path><path d="M12.826 16c0 .173-.361.313-.807.313c-.445 0-.806-.14-.806-.313s.361-.312.806-.312s.807.14.807.312Zm2.674-2.406c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Zm-6 0c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Z"></path><path d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094m1.774 3.594c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094m-1.774 3.594c.484-.313 1.613-1.094 2.42-1.094" strokeLinecap="round"></path></g></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
