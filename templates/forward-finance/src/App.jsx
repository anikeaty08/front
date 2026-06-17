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
        


      // Parallax script
      document.addEventListener('scroll', function() {
        const bg = document.getElementById('parallax-bg');
        if(bg) {
          const scrollPosition = window.scrollY;
          // transform y based on scroll. Move slower than scroll (0.5)
          bg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div>
</div>

<div className="relative w-full h-[800px] overflow-hidden bg-stone-950 hero-container">

<div className="absolute bottom-12 left-8 z-30 hidden lg:flex items-center gap-3">
<span className="font-mono text-xs text-orange-500">01</span>
<div className="w-px h-8 bg-white/20"></div>
<span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
          SystemReady
        </span>
</div>


<div className="-top-[10%] will-change-transform w-full h-[120%] absolute top-0 right-0 bottom-0 left-0" id="parallax-bg" style={{transform: 'translateY(0)'}}>
<img alt="Virtual Bank Interior" className="opacity-60 mix-blend-screen w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91eb3e35-da41-4e14-936d-223af7b74ef5_3840w.webp"/>
</div>

<nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-30">
<div className="glass-nav flex max-w-4xl border-white/10 border rounded-full mx-auto px-2 py-2 shadow-2xl items-center justify-between">

<div className="hidden md:flex items-center gap-1 px-4">
<a className="text-[11px] font-medium text-white/80 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-white/10 transition-all flex items-center gap-1.5 font-mono" href="#">
<svg aria-hidden="true" data-icon="lucide:wallet" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</g>
</svg>
              Wallet
            </a>
<a className="text-[11px] font-medium text-white/80 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-white/10 transition-all flex items-center gap-1.5 font-mono" href="#">
<svg aria-hidden="true" data-icon="lucide:box" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
</g>
</svg>
              Assets
            </a>
<a className="text-[11px] hover:text-white uppercase hover:bg-white/10 transition-all flex items-center gap-1.5 font-medium text-white/80 tracking-wider rounded-full pt-1.5 pr-3 pb-1.5 pl-3 hidden lg:flex font-mono" href="#">
<svg aria-hidden="true" className="" data-icon="lucide:layers" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path className="" d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
              Vaults
            </a>
</div>

<div className="flex-1 md:text-center md:flex-none">
<span className="text-white font-semibold tracking-[0.2em] text-lg px-6 uppercase font-mono">
              Forward
            </span>
</div>

<div className="hidden md:flex items-center gap-1 px-4">
<a className="text-[11px] hover:text-white uppercase hover:bg-white/10 transition-all flex items-center gap-1.5 hidden lg:flex font-medium text-white/80 tracking-wider rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-mono" href="#">
              Transfers
            </a>
<a className="text-[11px] font-medium text-white/80 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-white/10 transition-all flex items-center gap-1.5 font-mono" href="#">
              Protocol
            </a>
<a className="text-[11px] font-medium text-white/80 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-white/10 transition-all flex items-center gap-1.5 font-mono" href="#">
              Access
            </a>
</div>

<button className="md:hidden p-2 text-white">
<svg aria-hidden="true" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
<div className="flex flex-col items-center text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-medium text-white/70 uppercase tracking-widest">
              Mainnet Live
            </span>
</div>
<h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter leading-[0.9] drop-shadow-2xl">
            KINETIC LIQUIDITY
          </h1>
<p className="max-w-md text-white/60 text-sm sm:text-base font-mono leading-relaxed mt-4">
            The first fully programmable financial stack for the machine
            economy.
          </p>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-950/80 pointer-events-none z-10"></div>
</div>

<main className="w-full bg-white relative z-10">

<div className="absolute inset-0 w-full max-w-[1400px] mx-auto pointer-events-none z-0 hidden lg:block">
<div className="absolute top-0 bottom-0 left-0 w-px bg-stone-100"></div>
<div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-stone-100"></div>
<div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-stone-100"></div>
<div className="absolute top-0 bottom-0 right-0 w-px bg-stone-100"></div>
</div>

<div className="border-b border-stone-200 relative z-10">
<h2 className="text-[13vw] sm:text-[14vw] leading-[0.85] font-bold text-stone-950 text-center tracking-tighter pt-8 sm:pt-4 pb-4 sm:pb-2 select-none overflow-hidden opacity-10">
          FORWARD
        </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[400px] max-w-[1400px] mx-auto relative z-10">

<div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-stone-200 p-8 lg:p-12 flex flex-col justify-between relative group">

<div className="absolute top-6 left-6 font-mono text-[10px] text-stone-400 opacity-50">
            02
          </div>
<div className="h-full flex flex-col justify-start pt-8">
<div className="w-full h-px bg-stone-200 mb-8 hidden lg:block opacity-0"></div>

<h2 className="font-mono text-3xl sm:text-4xl text-stone-400 leading-tight tracking-tight max-w-sm group-hover:text-stone-800 transition-colors duration-500">
              Momentum, Captured in Real Time.
            </h2>
</div>

<div className="hidden lg:block mt-12 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
</g>
</svg>
</div>
</div>

<div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-stone-200 p-8 lg:p-12 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm relative">
<button className="group relative w-full aspect-[4/3] max-w-xs lg:max-w-none flex flex-col justify-between bg-[#F2F1EF] rounded-xl p-6 sm:p-8 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-stone-100">

<div className="relative z-10 text-left">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-950 text-white mb-4">
<svg aria-hidden="true" data-icon="lucide:terminal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-stone-950 uppercase tracking-tight mb-2">
                Launch Terminal
              </h3>
<p className="font-mono text-xs text-stone-500 leading-relaxed max-w-[200px]">
                Access the kinetic grid. Low latency execution.
              </p>
</div>
<div className="relative z-10 self-end">
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-[#EBE9E4] to-[#F5F4F2] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>
</div>

<div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center space-y-8 relative">

<div className="absolute top-6 right-6 font-mono text-[10px] text-stone-300">
            #4F92
          </div>
<p className="font-mono text-xs sm:text-sm text-stone-600 leading-7">
            Forward is the operating system for capital. We've dismantled the
            friction of traditional banking to build a protocol that moves at
            the speed of information.
          </p>
<p className="font-mono text-xs sm:text-sm text-stone-400 leading-7">
            Identity verification is instantaneous. Settlement is atomic. From
            global transfers to asset custody, Forward provides a unified
            interface for the programmable economy.
          </p>
<div className="pt-4 flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">

<svg aria-hidden="true" data-icon="simple-icons:bitcoin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105C1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153l-1.315-.33l-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127l-1.32-.33l-.54 2.165q-.428-.1-.84-.2l-1.815-.45l-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314c.015.02-.96-.24-.96-.24l-.66 1.51l1.71.426l.93.242l-.54 2.19l1.32.327l.54-2.17c.36.1.705.19 1.05.273l-.51 2.154l1.32.33l.545-2.19c2.24.427 3.93.257 4.64-1.774c.57-1.637-.03-2.58-1.217-3.196c.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37m.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" data-icon="simple-icons:ethereum" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.944 17.97L4.58 13.62L11.943 24l7.37-10.38l-7.372 4.35zM12.056 0L4.69 12.223l7.365 4.354l7.365-4.35z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" data-icon="logos:stripe" height="1em" role="img" viewbox="0 0 512 214" width="2.4em" xmlns="http://www.w3.org/2000/svg">
<path d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774" fill="#635BFF"></path>
</svg>
<svg aria-hidden="true" data-icon="simple-icons:ycombinator" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24V0h24v24zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>

<section className="z-20 bg-[#08090A] w-full border-stone-800/50 border-t pt-24 pb-24 relative">

<div className="absolute inset-0 w-full max-w-[1400px] mx-auto pointer-events-none z-0 hidden lg:block">
<div className="absolute top-0 bottom-0 left-0 w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 right-0 w-px bg-white/5"></div>
</div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

<div className="max-w-3xl mb-16 lg:mb-24">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
<span className="font-mono text-xs text-amber-500/80 uppercase tracking-widest">
                Developer Primitives
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F2F2F3] tracking-tight leading-[1.1] mb-6">
              Direct access to the financial metal layer.
            </h2>
<p className="text-lg text-[#8A8F98] leading-relaxed max-w-2xl">
              Bypass legacy aggregators. Integrate directly with the core
              settlement engine via our high-performance REST and gRPC APIs.
            </p>
<div className="mt-8 flex flex-wrap gap-4">
<button className="group inline-flex items-center justify-center bg-[#F2F2F3] text-[#08090A] px-6 py-3 rounded text-sm font-medium tracking-wide transition-all hover:bg-white hover:scale-105">
<span className="mr-2">Read the Docs</span>
<svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center border border-white/10 text-[#F2F2F3] px-6 py-3 rounded text-sm font-medium tracking-wide hover:bg-white/5 transition-colors">
                Get API Keys
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 bg-neutral-900 border-white/5 border">

<div className="group overflow-hidden md:border-r lg:p-12 transition-colors hover:bg-white/[0.02] border-white/5 border-b pt-8 pr-8 pb-8 pl-8 relative">
<div className="mb-10 flex h-32 items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">

<svg className="transition-transform duration-500 group-hover:-translate-y-2" fill="none" height="120" viewbox="0 0 200 150" width="160" xmlns="http://www.w3.org/2000/svg">

<path className="" d="M100 130L30 90L100 50L170 90L100 130Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M30 90V100L100 140V130L30 90Z" fill="#131418" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M170 90V100L100 140V130L170 90Z" fill="#0F1014" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>

<path d="M100 115L45 83L100 52L155 83L100 115Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>

<path d="M85 75L115 75" stroke="#fbbf24" strokeLinecap="round" strokeWidth="1.5" transform="rotate(-5 100 75) translate(0 -10)"></path>
<path d="M75 85L125 85" stroke="rgba(255,255,255,0.3)" strokeLinecap="round" strokeWidth="1.5" transform="rotate(-5 100 85) translate(0 -10)"></path>
<path d="M80 95L120 95" stroke="rgba(255,255,255,0.3)" strokeLinecap="round" strokeWidth="1.5" transform="rotate(-5 100 95) translate(0 -10)"></path>
</svg>
</div>
<div className="">
<h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-500 mb-3">
                  Endpoints
                </h3>
<h4 className="text-xl font-medium text-[#F2F2F3] mb-3">
                  Rest &amp; GraphQL
                </h4>
<p className="text-base text-[#8A8F98] leading-relaxed">
                  Full programmatic control over accounts, transfers, and asset
                  custody via standardized endpoints.
                </p>
</div>
</div>

<div className="group relative overflow-hidden border-b border-white/5 md:border-r p-8 lg:p-12 transition-colors hover:bg-white/[0.02]">
<div className="mb-10 flex h-32 items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">

<svg className="transition-transform duration-500 group-hover:-translate-y-2" fill="none" height="120" viewbox="0 0 200 150" width="160" xmlns="http://www.w3.org/2000/svg">

<path className="" d="M70 100L40 85L70 70L100 85L70 100Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M40 85V95L70 110V100L40 85Z" fill="#131418" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M100 85V95L70 110V100L100 85Z" fill="#0F1014" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>

<path d="M140 70L110 55L140 40L170 55L140 70Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M110 55V65L140 80V70L110 55Z" fill="#131418" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M170 55V65L140 80V70L170 55Z" fill="#0F1014" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>

<path d="M100 85L110 65" stroke="#fbbf24" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<circle cx="100" cy="85" fill="#fbbf24" r="2"></circle>
<circle cx="110" cy="65" fill="#fbbf24" r="2"></circle>
</svg>
</div>
<div>
<h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-500 mb-3">
                  Events
                </h3>
<h4 className="text-xl font-medium text-[#F2F2F3] mb-3">
                  Real-time Webhooks
                </h4>
<p className="text-base text-[#8A8F98] leading-relaxed">
                  Subscribe to transaction lifecycle events with sub-millisecond
                  latency notifications.
                </p>
</div>
</div>

<div className="group relative overflow-hidden border-b border-white/5 p-8 lg:p-12 transition-colors hover:bg-white/[0.02]">
<div className="mb-10 flex h-32 items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">

<svg className="transition-transform duration-500 group-hover:-translate-y-2" fill="none" height="120" viewbox="0 0 200 150" width="160" xmlns="http://www.w3.org/2000/svg">

<g className="translate-y-4">
<path d="M100 110L40 80L100 50L160 80L100 110Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path d="M40 80V88L100 118V110L40 80Z" fill="#131418" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path d="M160 80V88L100 118V110L160 80Z" fill="#0F1014" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
</g>

<g className="-translate-y-4">
<path d="M100 100L40 70L100 40L160 70L100 100Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"></path>
<path d="M40 70V75L100 105V100L40 70Z" fill="#131418" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"></path>
<path d="M160 70V75L100 105V100L160 70Z" fill="#0F1014" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"></path>

<path d="M100 40L160 70L100 100" fill="none" stroke="rgba(245,158,11,0.1)" strokeWidth="1"></path>
</g>
</svg>
</div>
<div className="">
<h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-500 mb-3">
                  Libraries
                </h3>
<h4 className="text-xl font-medium text-[#F2F2F3] mb-3">
                  Typed SDKs
                </h4>
<p className="text-base text-[#8A8F98] leading-relaxed">
                  Official libraries for Node.js, Python, Go, and Rust. Fully
                  typed for rapid integration.
                </p>
</div>
</div>

<div className="group relative overflow-hidden border-b border-white/5 md:border-b-0 md:border-r p-8 lg:p-12 transition-colors hover:bg-white/[0.02]">
<div className="mb-10 flex h-32 items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">

<svg className="transition-transform duration-500 group-hover:-translate-y-2" fill="none" height="100" viewbox="0 0 200 150" width="120" xmlns="http://www.w3.org/2000/svg">

<path d="M140 90L100 110L60 90L100 70L140 90Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M60 90V110L100 130V110L60 90Z" fill="#131418" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M140 90V110L100 130V110L140 90Z" fill="#0F1014" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>

<path d="M100 85L100 95" stroke="#fbbf24" strokeLinecap="round" strokeWidth="2"></path>

<path d="M80 70V60C80 50 120 50 120 60V70" stroke="rgba(255,255,255,0.15)" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="">
<h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-500 mb-3">
                  Security
                </h3>
<h4 className="text-xl font-medium text-[#F2F2F3] mb-3">
                  Scoped Keys
                </h4>
<p className="text-base text-[#8A8F98] leading-relaxed">
                  Granular permissioning system allowing for least-privilege API
                  access tokens.
                </p>
</div>
</div>

<div className="group relative overflow-hidden border-b border-white/5 md:border-b-0 md:border-r p-8 lg:p-12 transition-colors hover:bg-white/[0.02]">
<div className="mb-10 flex h-32 items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">

<svg className="transition-transform duration-500 group-hover:-translate-y-2" fill="none" height="100" viewbox="0 0 200 150" width="120" xmlns="http://www.w3.org/2000/svg">

<path d="M130 90L100 105L70 90L100 75L130 90Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path className="" d="M70 90V110L100 125V105L70 90Z" fill="#131418" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<path d="M130 90V110L100 125V105L130 90Z" fill="#0F1014" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>

<circle cx="100" cy="90" fill="rgba(245,158,11,0.1)" r="10" stroke="#fbbf24" strokeWidth="1.5" transform="scale(1, 0.5)"></circle>
</svg>
</div>
<div className="">
<h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-500 mb-3">
                  Testing
                </h3>
<h4 className="text-xl font-medium text-[#F2F2F3] mb-3">
                  Instant Sandbox
                </h4>
<p className="text-base text-[#8A8F98] leading-relaxed">
                  One-click ephemeral testnets that mirror production state for
                  confident deployment.
                </p>
</div>
</div>

<div className="group relative overflow-hidden border-b md:border-b-0 border-white/5 p-8 lg:p-12 transition-colors hover:bg-white/[0.02]">
<div className="mb-10 flex h-32 items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">

<svg className="transition-transform duration-500 group-hover:-translate-y-2" fill="none" height="100" viewbox="0 0 200 150" width="120" xmlns="http://www.w3.org/2000/svg">

<path d="M150 90L100 115L50 90L100 65L150 90Z" fill="#0B0C0E" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>

<path d="M75 102.5L125 77.5" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></path>
<path d="M75 77.5L125 102.5" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></path>

<path d="M100 90L110 85V65L100 70V90Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1"></path>
<path d="M100 90L90 85V65L100 70V90Z" fill="#d97706" stroke="#fbbf24" strokeWidth="1"></path>
<path d="M100 70L110 65L100 60L90 65L100 70Z" fill="#fcd34d" stroke="#fbbf24" strokeWidth="1"></path>
</svg>
</div>
<div className="">
<h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-500 mb-3">
                  Observability
                </h3>
<h4 className="text-xl font-medium text-[#F2F2F3] mb-3">
                  Traceable Logs
                </h4>
<p className="text-base text-[#8A8F98] leading-relaxed">
                  Complete request/response logging and error tracing built
                  directly into the dashboard.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden text-[#8A8F98] bg-[#08090A] w-full z-20 border-stone-800/50 border-t pt-24 pb-24 relative">

<div className="absolute top-12 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/20 tracking-widest uppercase">
          03 — Infrastructure
        </div>

<div className="absolute inset-0 w-full max-w-[1400px] mx-auto pointer-events-none z-0 hidden lg:block">
<div className="absolute top-0 bottom-0 left-0 w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 right-0 w-px bg-white/5"></div>
</div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-5 flex flex-col justify-center space-y-12">

<div className="space-y-6">
<div className="flex items-center gap-2 text-amber-400">
<svg aria-hidden="true" className="" data-icon="lucide:cpu" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</g>
</svg>
<span className="font-mono text-xs uppercase tracking-wider">
                    Core Dynamics
                  </span>
</div>
<h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#F2F2F3] tracking-tight leading-[1.05]">
                  Hyper-Scale Engine
                </h2>
<p className="text-lg sm:text-xl leading-relaxed max-w-lg text-[#8A8F98]">
                  Built on a lattice of high-frequency nodes. Forward ensures
                  your liquidity is never dormant, always active.
                </p>
</div>

<div className="space-y-8 border-t border-white/5 pt-8">

<div className="group cursor-pointer">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-[#F2F2F3] mb-2 group-hover:text-amber-400 transition-colors">
                      Velocity Protocol
                    </h3>
</div>
<p className="text-base text-[#8A8F98] leading-7 max-w-sm">
                    Zero-latency settlement layer designed for high-volume
                    institutional throughput.
                  </p>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-center mb-2">
<h3 className="text-lg font-medium text-[#F2F2F3] group-hover:text-amber-400 transition-colors">
                      Biometric Enclave
                    </h3>
<svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-base text-[#8A8F98] leading-7 max-w-sm">
                    Hardware-level security verified by unique biological
                    signatures.
                  </p>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-[#F2F2F3] mb-2 group-hover:text-amber-400 transition-colors">
                      Elastic Ledger
                    </h3>
</div>
<p className="text-base text-[#8A8F98] leading-7 max-w-sm">
                    Infinite horizontal scaling to support millions of
                    concurrent connections.
                  </p>
</div>
</div>
</div>

<div className="overflow-hidden select-none lg:col-span-7 lg:h-[800px] bg-neutral-900 h-[600px] border-white/5 border rounded-xl relative">

<div className="schematic-grid opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 bottom-0 left-[35%] w-px bg-white/5 border-r border-dashed border-white/5"></div>

<div className="absolute top-[35%] left-0 right-0 h-px bg-white/5 border-b border-dashed border-white/5"></div>

<div className="absolute bottom-[20%] left-0 left-[35%] h-px bg-white/5 border-b border-dashed border-white/5"></div>

<div className="absolute top-0 right-0 w-[65%] h-[35%] flex items-center justify-center border-l border-b border-white/5 p-8">
<div className="relative w-full h-full bg-[#131418] border border-white/5 rounded flex flex-col justify-end p-6 overflow-hidden">

<div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/5 flex items-center justify-center">
<div className="w-12 h-12 rounded-full border border-white/5 animate-pulse bg-white/5"></div>
</div>
<div className="space-y-1 z-10">
<div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-2">
                      Node Status
                    </div>
<div className="text-sm font-mono text-white/80 uppercase tracking-widest">
                      Forward Mainnet
                    </div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent translate-y-[-100%] animate-[scan_4s_ease-in-out_infinite]"></div>
</div>
</div>

<div className="absolute top-[20%] left-[8%]">
<div className="border border-white/5 rounded p-4 bg-[#0B0C0E] w-32 shadow-2xl">
<div className="flex justify-center mb-2 text-white/20">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<div className="text-center font-mono text-xl text-[#F2F2F3] tracking-tight">
                    100.00%
                  </div>
<div className="flex justify-center mt-2 text-white/20">
<div className="h-1 w-4 bg-emerald-500/50 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>

<div className="absolute top-[25%] right-[68%] -rotate-90 origin-right">
<span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
                  Uptime Metric
                </span>
</div>

<div className="absolute bottom-[28%] left-[8%]">
<div className="border border-white/5 rounded p-3 bg-[#0B0C0E] w-12 h-24 flex flex-col items-center justify-between shadow-2xl">
<svg aria-hidden="true" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</g>
</svg>
<div className="w-6 h-10 bg-[#1A1C20] rounded-full p-1 relative">
<div className="w-4 h-4 bg-amber-500 rounded-full absolute bottom-1 left-1 shadow-lg shadow-amber-500/50"></div>
</div>
</div>
</div>

<div className="absolute bottom-[35%] left-[38%] -rotate-90 origin-left">
<div className="flex flex-col gap-2">
<span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em]">
                    Cold Storage
                  </span>
<span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em]">
                    SOC 2 Type II
                  </span>
<span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em]">
                    256-Bit Encrypt
                  </span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-[35%] h-[20%] border-t border-r border-white/5 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.05) 5px, rgba(255,255,255,0.05) 6px)'}}></div>

<div className="absolute bottom-[25%] right-[5%] w-32 h-20">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    Graph API
                  </span>
</div>
<div className="grid grid-cols-8 gap-1.5 opacity-30">

<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex items-center gap-2">
<div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-orange-500"></div>
<span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.1em] max-w-[150px] leading-tight">
                  PredictiveAnalytics
                </span>
</div>

<div className="absolute top-0 bottom-0 right-0 w-8 border-l border-white/5 flex items-end justify-center pb-6">
<span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] -rotate-90 whitespace-nowrap">
                  Global Infrastructure
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white w-full border-t border-stone-200 pt-24 pb-24 relative z-10 text-stone-950">

<div className="absolute top-12 left-1/2 -translate-x-1/2 font-mono text-[10px] text-stone-400 tracking-widest uppercase">
          04 — Economics
        </div>

<div className="absolute inset-0 w-full max-w-[1400px] mx-auto pointer-events-none z-0 hidden lg:block">
<div className="absolute top-0 bottom-0 left-0 w-px bg-stone-100"></div>
<div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-stone-100"></div>
<div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-stone-100"></div>
<div className="absolute top-0 bottom-0 right-0 w-px bg-stone-100"></div>
</div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

<div className="max-w-3xl mb-20">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-950 tracking-tight leading-[1.05] mb-6">
              Predictable scaling.
            </h2>
<p className="text-lg text-stone-500 max-w-xl leading-relaxed">
              Pay only for the throughput you consume. No hidden fees for idle
              connections or cold storage.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">

<div className="lg:border-r border-stone-200 lg:pr-12 flex flex-col h-full relative group">
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
<span className="text-[10px] font-mono uppercase tracking-wide text-stone-600">
                    Sandbox
                  </span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-stone-950">
                    $0
                  </span>
<span className="text-stone-400 font-mono text-sm">/mo</span>
</div>
<p className="text-stone-500 text-sm leading-6">
                  For prototyping and integration testing.
                </p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-stone-950 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">
                    Up to 100k API calls/mo
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-stone-950 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">
                    Testnet Access only
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-stone-950 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">Community Support</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded border border-stone-200 text-stone-950 text-sm font-medium bg-white hover:bg-stone-50 hover:border-stone-300 transition-all text-left flex justify-between items-center group-hover:border-stone-400">
                Start Building
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
</button>
</div>

<div className="lg:px-12 lg:border-r border-stone-200 flex flex-col h-full relative group">

<div className="absolute top-0 left-6 right-6 h-px bg-orange-500 hidden lg:block"></div>
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-wide text-orange-700">
                    Production
                  </span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-stone-950">
                    $499
                  </span>
<span className="text-stone-400 font-mono text-sm">/mo</span>
</div>
<p className="text-stone-500 text-sm leading-6">
                  High-frequency trading &amp; settlement.
                </p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-950 font-medium">
                    10M API calls/mo included
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-950 font-medium">
                    Sub-50ms latency guarantee
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">
                    Dedicated IP Whitelisting
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">
                    24/7 Priority Support
                  </span>
</div>
</div>
<button className="w-full py-3 px-4 rounded bg-stone-950 text-white text-sm font-medium hover:bg-stone-800 transition-all text-left flex justify-between items-center shadow-lg shadow-stone-900/10">
                Get Access
                <span>→</span>
</button>
</div>

<div className="lg:pl-12 flex flex-col h-full relative group">
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-stone-950"></span>
<span className="text-[10px] font-mono uppercase tracking-wide text-stone-600">
                    Volume
                  </span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-stone-950">
                    Custom
                  </span>
</div>
<p className="text-stone-500 text-sm leading-6">
                  For global exchanges and banks.
                </p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-stone-950 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">
                    Unlimited Throughput
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-stone-950 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">
                    On-premise Deployment
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-stone-950 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">
                    Dedicated Account Manager
                  </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-stone-950 mt-0.5 shrink-0" data-icon="lucide:check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-stone-600">SLA Contracts</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded border border-stone-200 text-stone-950 text-sm font-medium bg-white hover:bg-stone-50 hover:border-stone-300 transition-all text-left flex justify-between items-center group-hover:border-stone-400">
                Contact Sales
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
</button>
</div>
</div>

<div className="mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;q=80"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;q=80"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;q=80"/>
</div>
</div>
<p className="text-sm text-stone-500">
                Trusted by 200+ engineering teams.
              </p>
</div>
<a className="text-sm font-medium text-stone-950 border-b border-stone-300 hover:border-stone-950 transition-colors pb-0.5" href="#">
              Download the Integration Guide
            </a>
</div>
</div>
</section>
<section className="bg-[#F5F5F4] w-full border-t border-stone-200 py-32 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-stone-200/50 backdrop-blur-sm border border-stone-300 text-stone-600 mb-8 shadow-sm">
<svg className="w-6 h-6" data-icon="lucide:terminal-square" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 11 2-2-2-2"></path>
<path d="M11 13h4"></path>
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
</svg>
</div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tighter leading-none mb-8">
            Ready to rewrite
            <span className="text-stone-400">the settlement layer?</span>
</h2>
<p className="text-lg md:text-xl text-stone-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Join the network of forward-thinking institutions. Obtain your API
            keys and start building on the testnet in less than 5 minutes.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded bg-stone-900 text-white font-medium hover:bg-black transition-all shadow-xl shadow-stone-900/10 flex items-center gap-2 hover:scale-105 active:scale-95 duration-200">
<span>Start Integration</span>
<svg className="w-4 h-4 text-stone-400" data-icon="lucide:chevron-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<button className="h-12 px-8 rounded border border-stone-300 text-stone-600 font-medium hover:bg-white hover:text-stone-900 transition-all bg-white/50 backdrop-blur-sm">
              Talk to Sales
            </button>
</div>
<div className="mt-12 flex items-center justify-center gap-6 opacity-40 grayscale mix-blend-multiply">
<span className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Compliance Ready
            </span>
<div className="w-1 h-1 rounded-full bg-stone-400"></div>
<span className="font-mono text-xs uppercase tracking-widest text-stone-500">
              SOC2 Type II
            </span>
<div className="w-1 h-1 rounded-full bg-stone-400"></div>
<span className="font-mono text-xs uppercase tracking-widest text-stone-500">
              ISO 27001
            </span>
</div>
</div>
</section>
<footer className="bg-[#050505] w-full border-t border-white/10 pt-20 pb-10 relative overflow-hidden text-[#8A8F98]">

<div className="absolute inset-0 w-full max-w-[1400px] mx-auto pointer-events-none z-0 hidden lg:block opacity-30">
<div className="absolute top-0 bottom-0 left-0 w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-white/5"></div>
<div className="absolute top-0 bottom-0 right-0 w-px bg-white/5"></div>
</div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">

<div className="col-span-2 lg:col-span-2 pr-8">
<a className="inline-block text-white font-bold text-xl tracking-tighter mb-6" href="#">
                FORWARD
              </a>
<p className="text-sm leading-7 text-[#8A8F98] max-w-xs mb-8">
                The programmable financial stack for the machine economy. Moving
                value as easily as information.
              </p>
<div className="flex items-center gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg className="w-[20px] h-[20px]" data-icon="lucide:twitter" data-icon-replaced="true" data-icon-set="lucide" data-lucide="link" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg className="w-[20px] h-[20px]" data-icon="lucide:github" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg className="" data-icon="lucide:linkedin" data-icon-replaced="true" data-icon-set="lucide" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="">
<h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                Product
              </h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Payments
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Treasury
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Issuing
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Capital
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Connect
                  </a>
</li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                Developers
              </h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Documentation
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    API Reference
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Status
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Libraries
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Changelog
                  </a>
</li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                Company
              </h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                    About
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Customers
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
<span className="text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded ml-1">
                    Hiring
                  </span>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Blog
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Press
                  </a>
</li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                Legal
              </h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Terms
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Security
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Cookies
                  </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-white/30 font-mono">
              © 2024 Forward Financial Technologies Inc.
            </div>
<div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-[10px] font-mono text-white/60 uppercase tracking-wider">
                Systems Operational
              </span>
</div>
</div>

<div className="absolute -bottom-12 -right-10 pointer-events-none select-none opacity-[0.03] overflow-hidden">
<span className="text-[180px] font-bold leading-none tracking-tighter text-white whitespace-nowrap">
              FORWARD
            </span>
</div>
</div>
</footer>
</main>


    </>
  );
}
