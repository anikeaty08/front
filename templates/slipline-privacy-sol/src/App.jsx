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
  


    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('animate');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // Cursor glow follows mouse
    const cursor = document.querySelector('.grid-lines_cursor-position');
    window.addEventListener('mousemove', (e) => {
      if (!cursor) return;
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    // Subscribe mock
    function handleSubscribe() {
      const email = document.querySelector('#subscribeForm input[type="email"]').value;
      if (!email) return;
      alert('Thanks! We will keep you posted at ' + email);
      document.querySelector('#subscribeForm').reset();
    }

    // Demo handlers
    document.getElementById('swapNow')?.addEventListener('click', () => {
      alert('This is a demo preview. Open the live app to execute a private swap.');
    });
    document.getElementById('connectWallet')?.addEventListener('click', () => {
      alert('Wallet connection is available in the live app.');
    });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('nav button.md\\:hidden');
    const mobilePanel = document.getElementById('mobileMenuPanel');
    mobileBtn?.addEventListener('click', () => {
      mobilePanel?.classList.toggle('hidden');
    });
    document.querySelectorAll('#mobileMenuPanel a').forEach((a) => {
      a.addEventListener('click', () => mobilePanel?.classList.add('hidden'));
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0dd9b13b-ea30-4e17-8a26-53d1f9d1c6d3_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="wrapper">

<div className="pre-footer_grid">
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
</div>
<div className="grid-lines">
<div className="grid-lines_cursor-position" style={{transform: 'translate3d(578px, 469px, 0px)'}}>
<div className="grid-lines_cursor"></div>
</div>
</div>

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<nav className="fixed [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-50 top-6 left-0 right-0 w-full flex justify-center px-4 animate">
<div className="flex md:gap-x-8 md:gap-y-8 bg-zinc-900/80 w-full max-w-4xl border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur-xl gap-x-4 gap-y-4 items-center">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span aria-label="Slipline Privacy logo" className="bg-center md:w-[120px] md:h-[36px] w-[900px] h-[35px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d9f5f8b9-a105-410e-9153-e3fdf3a5481c_320w.png)] bg-contain" title="Slipline Privacy"></span>
</div>
<div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm flex-1 justify-center">
<a className="hover:text-white transition whitespace-nowrap text-zinc-400 font-manrope" href="#work">App</a>
<a className="hover:text-white transition whitespace-nowrap text-zinc-400 font-manrope" href="#services">Features</a>
<a className="hover:text-white transition whitespace-nowrap text-zinc-400 font-manrope" href="#about">Docs</a>
<a className="hover:text-white transition whitespace-nowrap text-zinc-400 font-manrope" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition bg-white hover:bg-zinc-200 text-zinc-900 whitespace-nowrap" href="#app">
<span className="font-manrope">Launch App</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path className="" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path>
</svg>
</a>

<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 transition ml-auto">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line className="" x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>

<div className="bg-center md:pt-32 md:pb-20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/43756ec6-1534-45d2-a0b3-50e049d7cb6d_1600w.jpg)] bg-cover z-10 pt-24 pb-12 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>
<div className="lg:px-8 max-w-7xl mt-12 md:mt-20 mr-auto mb-20 md:mb-40 ml-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

<div className="lg:col-span-7 sm:space-y-6 space-y-4">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="border-gradient inline-flex before:rounded-full bg-white/5 rounded-full pt-2 pr-3 sm:pr-4 pb-2 pl-3 sm:pl-4 backdrop-blur-lg gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-3 items-center">
<span className="text-[10px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 font-sans text-zinc-300">
                  Solana‑native Privacy
                  <svg aria-hidden="true" className="iconify text-white iconify--solar sm:w-4 sm:h-4" data-icon="solar:star-bold-duotone" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</span>
</div>
</div>
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate text-4xl font-medium tracking-tighter font-manrope drop-shadow-lg" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 40%, transparent)'}}>
              Private Solana<br/>
<span className="bg-clip-text font-medium text-transparent tracking-tighter font-manrope bg-gradient-to-br from-white to-[#ffcd75] pr-1">Swaps</span><br/>
              For Everyone
            </h1>
<p className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll sm:text-lg animate text-base text-neutral-50/70 max-w-xl border-slate-950" style={{}}>Slipline Privacy is a non‑custodial protocol for shielded swaps on Solana. Zero knowledge privacy, MEV protection, and lightning fast finality.</p>
<div className="flex flex-col sm:flex-row sm:gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate gap-x-3 gap-y-3">
<button className="group inline-flex transition-all duration-300 hover:shadow-lg hover:bg-zinc-200 text-sm font-medium text-zinc-900 bg-white rounded-full pt-3 sm:pt-4 pr-6 sm:pr-8 pb-3 sm:pb-4 pl-6 sm:pl-8 shadow-[5.7px_5.7px_8.6px_rgba(0,_0,_0,_0.07),_13.7px_13.7px_10.9px_rgba(0,_0,_0,_0.099),_25.7px_25.7px_20.5px_rgba(0,_0,_0,_0.123),_45.8px_45.8px_36.6px_rgba(0,_0,_0,_0.147),_85.8px_85.8px_68.5px_rgba(0,_0,_0,_0.176),_205px_205px_163.4px_rgba(0,_0,_0,_0.246)] gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-3 items-center justify-center" onclick="location.href='#app'">
<span className="font-manrope">Launch App</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
<button className="group inline-flex hover:text-white transition-all duration-300 hover:border-white hover:bg-white/5 sm:pt-4 sm:pr-8 sm:pb-4 sm:pl-8 sm:gap-x-3 sm:gap-y-3 text-sm font-medium text-slate-950 border-slate-950/20 border rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="location.href='#about'">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:book-bold-duotone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 6.5c0-1.886 0-2.828.586-3.414S5.114 2.5 7 2.5h9c1.886 0 2.828 0 3.414.586S20 4.614 20 6.5v11c0 1.886 0 2.828-.586 3.414S17.886 21.5 16 21.5H7c-1.886 0-2.828 0-3.414-.586S3 19.386 3 17.5z" fill="currentColor" opacity=".5"></path><path d="M7 5.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
<span className="font-manrope">Read Docs</span>
</button>
</div>
</div>

<div className="lg:col-span-5 space-y-4 sm:space-y-6">
<div className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-gradient before:rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)]" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-6 sm:pt-8 pr-6 sm:pr-8 pb-6 sm:pb-8 pl-6 sm:pl-8 relative animate">
<div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ring-1 flex items-center justify-center bg-white/10 ring-white/20">
<svg aria-hidden="true" className="iconify text-white iconify--solar sm:w-6 sm:h-6" data-icon="solar:target-bold-duotone" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75m-7.222.75a10 10 0 0 1 0-1.5H5a.75.75 0 0 1 0 1.5zm10.722 9.222a10 10 0 0 1-1.5 0V19a.75.75 0 0 1 1.5 0zm9.222-10.722a10 10 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5zM12.75 2.028V5a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0" fill="currentColor"></path>
</svg>
</div>
<div className="">
<div className="sm:text-3xl text-2xl font-medium tracking-tighter font-manrope" style={{}}>$240k+</div>
<div className="text-xs sm:text-sm text-white/70 font-sans">Private Swaps</div>
</div>
</div>
<div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm text-white/70 font-sans">MEV Protection</span>
<span className="sm:text-sm text-xs">98%</span>
</div>
<div className="h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r rounded-full from-white to-white/70" style={{width: '98%'}}></div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent my-3 sm:my-4"></div>
<div className="flex justify-between mb-3 sm:mb-4 gap-2">
<div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
<div className="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium">65k</div>
<div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-wide font-sans">TPS</div>
</div>
<div className="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
<div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
<div className="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium">400ms</div>
<div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-wide font-sans">Finality</div>
</div>
<div className="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
<div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
<div className="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium">0.05%</div>
<div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-wide font-sans">Fee</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5 sm:gap-2">
<span className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-zinc-300 cursor-pointer transition-all duration-300 hover:-translate-y-px font-sans">
<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse"></div>
                    MAINNET
                  </span>
<span className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-zinc-300 cursor-pointer transition-all duration-300 hover:-translate-y-px font-sans">
<svg className="iconify iconify--solar sm:w-3 sm:h-3" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
                    AUDITED
                  </span>
</div>
</div>
</div>
<div className="overflow-hidden transition-all duration-300 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll border-gradient before:rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)] animate" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
<div className="pt-6 sm:pt-8 pr-6 sm:pr-8 pb-6 sm:pb-8 pl-6 sm:pl-8 relative">
<h3 className="text-base sm:text-lg mb-3 sm:mb-4 font-sans">Ecosystem</h3>
<div className="overflow-hidden relative">
<style>
                    @keyframes marquee-logos {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  </style>
<div className="" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex gap-4 sm:gap-6 will-change-transform" style={{animation: 'marquee-logos 30s linear infinite'}}>
<div className="flex gap-4 sm:gap-6 shrink-0">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
</div>
<div className="flex gap-4 sm:gap-6 shrink-0">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="z-10 pt-40 pb-40 relative" id="work"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="sm:p-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-zinc-900 border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm text-zinc-500 font-sans">Protocol Highlights</span>
<h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 tracking-tighter font-manrope font-medium">
                  Built for Privacy
                </h2>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:add-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span className="text-sm font-sans">Private Swaps</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:add-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span className="text-sm font-sans">Shielded Transfers</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:add-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span className="text-sm font-sans">Audited Contracts</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 tracking-tight font-sans">Privacy‑first architecture</p>
<p className="mt-1 text-sm text-zinc-400 font-sans">Shielded pools and zero‑knowledge proofs protect your intent and balances from surveillance and MEV.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm hover:bg-zinc-200 transition font-sans" onclick="location.href='#about'">
                    View Whitepaper
                    <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8 font-sans">
                    Built on <span className="text-zinc-100 font-sans">Solana’s high throughput</span> for near‑instant finality and low fees — without compromising privacy.
                  </p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/23d07165-9ba6-4b77-a837-caa04d0a6bc4_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:widget-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5" fill="currentColor" opacity=".5"></path><path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" fill="currentColor"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">Swap Engine</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">Shielded Swap UI</p>
</div>
</article>
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e4556094-7c69-47af-afb3-2cdc3a8d7888_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:smartphone-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.052 2c1.68 0 3.01 0 4.052.142c1.072.147 1.94.456 2.624 1.152s.988 1.58 1.132 2.67c.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123c-.144 1.09-.448 1.974-1.132 2.67s-1.552 1.005-2.624 1.152C15.063 22 13.732 22 12.052 22h-.104c-1.68 0-3.01 0-4.052-.142c-1.072-.147-1.94-.456-2.624-1.152s-.988-1.58-1.132-2.67C4 16.976 4 15.622 4 13.913v-3.826c0-1.71 0-3.064.14-4.123c.144-1.09.448-1.974 1.132-2.67S6.824 2.29 7.896 2.142C8.937 2 10.268 2 11.948 2z" fill="currentColor" opacity=".5"></path><path d="M8.571 18.511c0-.385.307-.697.686-.697h5.486c.378 0 .685.312.685.697a.69.69 0 0 1-.685.698H9.257a.69.69 0 0 1-.686-.698" fill="currentColor"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">Mobile SDK</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">Wallet SDK</p>
</div>
</article>
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c29ef9f2-d2fc-4c96-bae5-78968abb3d99_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chart-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M14 20.5V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5z" fill="currentColor" fill-rule="evenodd"></path><path d="M8 8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H8zm12 5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H20z" fill="currentColor" opacity=".7"></path><path d="M1.75 20.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z" fill="currentColor" opacity=".5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">ZK Explorer</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">Proof Explorer</p>
</div>
</article>
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/98cd380a-5e47-4702-a897-48609885618b_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:palette-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path><path d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path><path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path><path d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">CPI Privacy</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">Cross‑Program Privacy</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative" id="services">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
<div className="">
<p className="text-sm text-zinc-400 font-sans">Why Slipline</p>
<h2 className="text-4xl md:text-5xl text-white tracking-tighter font-manrope font-medium">
            Features
          </h2>
<p className="text-lg text-zinc-300 max-w-2xl mt-4 font-sans">
            Shielded swaps, zero‑knowledge proofs, and MEV protection — purpose‑built for Solana performance.
          </p>
</div>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="relative lg:col-span-2 ring-1 ring-white/10 p-10 overflow-hidden bg-zinc-950 border-zinc-900 rounded-3xl shadow-lg">
<div className="absolute -left-10 -top-16 h-64 w-64 bg-gradient-to-tr rounded-full blur-3xl from-white/10 to-white/5"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:palette-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path><path d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path><path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path><path d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl md:text-3xl text-zinc-100 tracking-tighter font-manrope font-medium">Core Protocol</h3>
</div>
<p className="text-zinc-300 max-w-2xl font-sans">
              Shielded pools and zero‑knowledge proofs protect identities and balances. Non‑custodial by design, optimized for Solana finality and throughput.
            </p>
<div className="mt-8 grid grid-cols-5 gap-4 md:gap-6">
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:eye-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">ZK Proofs</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:widget-2-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 6.634a4.634 4.634 0 1 1 9.268 0a4.634 4.634 0 0 1-9.268 0" fill="currentColor" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M12.732 17.366a4.634 4.634 0 1 1 9.269 0a4.634 4.634 0 0 1-9.269 0" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5" fill="currentColor"></path><path d="M13 6.5c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" fill="currentColor" opacity=".5"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Shielded Pools</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:layers-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="currentColor"></path><path clip-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" fill="currentColor" fill-rule="evenodd"></path><path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="currentColor" opacity=".7"></path><path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" fill="currentColor" opacity=".4"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">MEV Protection</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:users-group-rounded-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="6" fill="currentColor" opacity=".4" r="3"></circle><ellipse cx="16" cy="17" fill="currentColor" opacity=".4" rx="5" ry="3"></ellipse><circle cx="9.001" cy="6" fill="currentColor" r="4"></circle><ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></ellipse></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Non‑custodial</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Open Source</span>
</div>
</div>
</div>
<div className="lg:col-span-1">
<article className="relative bg-zinc-900 border-white/10 border rounded-3xl p-6 h-full">
<div className="flex items-center justify-between">
<h3 className="text-white text-xl tracking-tight font-sans">Integrations</h3>
<span className="text-[11px] text-zinc-300 font-sans">Pro</span>
</div>
<p className="mt-2 text-sm text-zinc-300 font-sans">Plug into the Solana stack with robust developer tooling.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Solana Programs</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Anchor/TypeScript SDK</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Wallet Adapter</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">RPC Providers</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="                  M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white transition font-sans" href="#about">
                  View Developer Docs
                  <svg aria-hidden="true" className="iconify" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53V11H4a.75.75 0 0 0 0 1.5z" fill="currentColor"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-zinc-900 text-sm hover:bg-zinc-200 transition font-sans" href="#app">
                  Try the App
                </a>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="z-10 relative pt-24 pb-32" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-sm text-zinc-400 font-sans">Documentation</span>
<h2 className="mt-2 text-4xl md:text-5xl tracking-tighter font-manrope font-medium">
              Build with Slipline
            </h2>
<p className="mt-4 text-zinc-300 font-sans">
              Integrate private swaps and shielded transfers in minutes. Use our Anchor/TypeScript SDK, wallet adapter, and audited Solana programs.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
<svg className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.53 7.47a.75.75 0 0 1 0 1.06L10.56 14.5l-3.09-3.09a.75.75 0 0 1 1.06-1.06l2.03 2.03l5.37-5.37a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</span>
<div className="">
<p className="text-sm text-zinc-200 font-sans">Zero‑knowledge by default</p>
<p className="text-sm text-zinc-400 font-sans">Shield intents and balances while preserving composability.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
<svg className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.53 7.47a.75.75 0 0 1 0 1.06L10.56 14.5l-3.09-3.09a.75.75 0 0 1 1.06-1.06l2.03 2.03l5.37-5.37a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</span>
<div className="">
<p className="text-sm text-zinc-200 font-sans">Anchor SDK</p>
<p className="text-sm text-zinc-400 font-sans">Typed clients for smooth dev‑experience across web and mobile.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
<svg className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.53 7.47a.75.75 0 0 1 0 1.06L10.56 14.5l-3.09-3.09a.75.75 0 0 1 1.06-1.06l2.03 2.03l5.37-5.37a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</span>
<div className="">
<p className="text-sm text-zinc-200 font-sans">Audited, open source</p>
<p className="text-sm text-zinc-400 font-sans">Transparent, verifiable code. Community‑driven improvements.</p>
</div>
</li>
</ul>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white text-zinc-900 text-sm hover:bg-zinc-200 transition font-sans" href="#contact">
                Talk to Team
                <svg className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53V11H4a.75.75 0 0 0 0 1.5z" fill="currentColor"></path></svg>
</a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white/10 ring-1 ring-white/15 text-zinc-200 text-sm hover:bg-white/15 transition font-sans" href="#app">
                Try a Private Swap
              </a>
</div>
</div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="relative border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 rounded-2xl overflow-hidden">
<div className="absolute -top-24 -right-24 h-72 w-72 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-400/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-400/80"></span>
</div>
<span className="text-xs text-zinc-400 font-mono">example.ts</span>
</div>
<pre className="text-[12px] md:text-sm leading-relaxed overflow-x-auto p-4 md:p-6 bg-transparent text-zinc-200 font-geist-mono"><code>
// Initialize Slipline client
import { Connection, Keypair } from '@solana/web3.js';
import { SliplineClient } from '@slipline/sdk';

const conn = new Connection('https://api.mainnet-beta.solana.com');
const wallet = Keypair.generate();

const client = await SliplineClient.init({
  connection: conn,
  wallet,
});

// Execute a private swap
const tx = await client.swap({
  fromMint: 'So11111111111111111111111111111111111111112', // SOL
  toMint:   'Es9vMFrzaCER...USDz',                       // USDC
  amount:   0.25,                                       // 0.25 SOL
  shielded: true,                                       // privacy on
});

console.log('Sent private swap:', tx.signature);
</code></pre>
<div className="px-4 md:px-6 pb-5 flex items-center justify-between">
<span className="text-xs text-zinc-400 font-sans">ZK shield enabled • MEV protected</span>
<a className="inline-flex items-center gap-1 text-xs text-zinc-200 hover:text-white transition font-sans" href="#about">
                  Full API Reference
                  <svg className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53V11H4a.75.75 0 0 0 0 1.5z" fill="currentColor"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 relative pt-8 pb-28" id="app">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="relative border border-white/10 rounded-3xl bg-zinc-900/70 backdrop-blur-xl overflow-hidden">
<div className="absolute -left-24 -top-24 h-64 w-64 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between">
<h3 className="text-xl sm:text-2xl tracking-tight font-manrope font-medium">Private Swap</h3>
<span className="text-[11px] text-zinc-300 font-sans">Demo</span>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<label className="text-xs text-zinc-400 font-sans">From</label>
<div className="mt-2 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800/70 hover:bg-zinc-800 transition ring-1 ring-white/10">
<img alt="SOL" className="w-4 h-4 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-sm font-sans">SOL</span>
</button>
<input className="flex-1 bg-transparent outline-none text-right text-lg font-medium placeholder:text-zinc-500" inputmode="decimal" placeholder="0.00" type="number"/>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<label className="text-xs text-zinc-400 font-sans">To</label>
<div className="mt-2 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800/70 hover:bg-zinc-800 transition ring-1 ring-white/10">
<img alt="USDC" className="w-4 h-4 rounded-full" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="text-sm font-sans">USDC</span>
</button>
<input className="flex-1 bg-transparent outline-none text-right text-lg font-medium placeholder:text-zinc-500" disabled="" placeholder="Auto"/>
</div>
</div>
</div>
<div className="my-5 flex items-center justify-center">
<button aria-label="Switch tokens" className="group inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 ring-1 ring-white/10 hover:bg-white/15 transition">
<svg className="w-4.5 h-4.5 group-hover:rotate-180 transition-transform" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.5 7l4-4l1.5 1.5L7.5 7H20v2H4.5zM20 17l-4 4l-1.5-1.5L16.5 17H4v-2h16z" fill="currentColor"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-zinc-400 font-sans">Expected Output</p>
<p className="text-sm text-zinc-100 font-sans mt-1">≈ 22.41 USDC</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-zinc-400 font-sans">Route</p>
<p className="text-sm text-zinc-100 font-sans mt-1">Shielded Pool</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-zinc-400 font-sans">Fee</p>
<p className="text-sm text-zinc-100 font-sans mt-1">0.05%</p>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-zinc-900 text-sm hover:bg-zinc-200 transition font-sans" id="connectWallet">
                Connect Wallet
              </button>
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/10 text-zinc-200 text-sm hover:bg-white/15 transition font-sans" id="swapNow">
                Swap Privately
              </button>
</div>
</div>
</div>
<p className="text-xs text-zinc-500 text-center mt-3 font-sans">Demo preview. Connect your wallet in the live app to execute swaps.</p>
</div>
</section>

<section className="z-10 pt-10 pb-24 relative" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 sm:p-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h3 className="text-3xl md:text-4xl tracking-tighter font-manrope font-medium">Stay private. Build boldly.</h3>
<p className="mt-2 text-zinc-300 font-sans">Get updates on releases, audits, and integration guides.</p>
<form className="mt-6 flex flex-col sm:flex-row gap-3" id="subscribeForm" onsubmit="event.preventDefault(); handleSubscribe();">
<input aria-label="Email address" className="flex-1 h-12 px-4 rounded-full bg-white/10 ring-1 ring-white/10 outline-none placeholder:text-zinc-500 focus:ring-white/20" placeholder="you@privacy.xyz" required="" type="email"/>
<button className="h-12 px-6 rounded-full bg-white text-zinc-900 text-sm hover:bg-zinc-200 transition font-sans" type="submit">Subscribe</button>
</form>
<div className="mt-4 text-xs text-zinc-500 font-sans">We respect your privacy. Unsubscribe anytime.</div>
</div>
<div className="lg:pl-6">
<div className="grid grid-cols-2 gap-3">
<a className="group rounded-2xl p-4 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="mailto:team@slipline.xyz">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/10">
<svg className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4l-8 5L4 8V6l8 5l8-5z" fill="currentColor"></path></svg>
</span>
<span className="text-sm font-sans">Email</span>
</div>
<p className="mt-2 text-xs text-zinc-400 font-sans">team@slipline.xyz</p>
</a>
<a className="group rounded-2xl p-4 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/10">
<svg className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675c0-.177 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646a4.118 4.118 0 0 0 1.804-2.27a8.224 8.224 0 0 1-2.606.996A4.107 4.107 0 0 0 15.448 4c-2.266 0-4.104 1.837-4.104 4.103c0 .322.036.636.106.936C7.69 8.9 4.066 6.97 1.64 4.148a4.077 4.077 0 0 0-.556 2.064c0 1.425.725 2.683 1.828 3.42a4.093 4.093 0 0 1-1.859-.513v.052c0 1.99 1.416 3.65 3.292 4.028a4.1 4.1 0 0 1-1.853.07a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" fill="currentColor"></path></svg>
</span>
<span className="text-sm font-sans">X (Twitter)</span>
</div>
<p className="mt-2 text-xs text-zinc-400 font-sans">@slipline</p>
</a>
<a className="group rounded-2xl p-4 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/10">
<svg className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 26.477 2 2 6.484 2 12.014c0 4.425 2.8658.18 6.839 9.504c.5.091.682-.217.682-.482c0237-.009-.866-.013-1.701c-2.782.605-3.37-1.342-.37-1.342c-.454-1.155-1.11-1.463-1.11-1.463c-.908-.62.069-.607.069-.607c1.004.07 1.532 1.031 1.532 1.031c.892 1.53 2.341 1.088 2.91.833c.091-.647.35-1.087.636-1.337c-2.221-.253-4.555-1.113-4.555-4.952c0-1.094.39-1.99 1.029-2.69c-.103-.253-.446-1.272.098-2.65c0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336a9.56 9.56 0 0 1 2.5.336c1.909-1.296 2.748-1.026 2.748-1.026c.545 1.378.202 2.397.099 2.65c.64.7 1.028 1.596 1.028 2.69c0 3.848-2.337 4.696-4.565 4.944c.359.31.679.92.679 1.855c0 1.338-.012 2.418-.012 2.746c0 .268.18.578.688.48C19.138 20.19 22 16.436 22 12.014C22 6.484 17.523 2 12 2Z" fill="currentColor"></path></svg>
</span>
<span className="text-sm font-sans">GitHub</span>
</div>
<p className="mt-2 text-xs text-zinc-400 font-sans">slipline/slipline</p>
</a>
<a className="group rounded-2xl p-4 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/10">
<svg className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-2.5 0-4.5 2-4.5 4.5V10H6a1 1 0 0 0-1 1v7.5A2.5 2.5 0 0 0 7.5 21h9A2.5 2.5 0 0 0 19 18.5V11a1 1 0 0 0-1-1h-1.5V7.5C16.5 5 14.5 3 12 3m0 2a2.5 2.5 0 0 1 2.5 2.5V10h-5V7.5A2.5 2.5 0 0 1 12 5" fill="currentColor"></path></svg>
</span>
<span className="text-sm font-sans">Security</span>
</div>
<p className="mt-2 text-xs text-zinc-400 font-sans">Audits &amp; disclosures</p>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="z-10 relative border-t border-white/10 pt-10 pb-14">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-3">
<span aria-label="Slipline Privacy logo" className="bg-center w-[100px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d9f5f8b9-a105-410e-9153-e3fdf3a5481c_320w.png)] bg-contain" title="Slipline Privacy"></span>
<span className="text-sm text-zinc-400 font-sans">Solana‑native private swaps</span>
</div>
<nav className="flex flex-wrap items-center gap-4 text-sm">
<a className="text-zinc-400 hover:text-white transition font-sans" href="#work">App</a>
<a className="text-zinc-400 hover:text-white transition font-sans" href="#services">Features</a>
<a className="text-zinc-400 hover:text-white transition font-sans" href="#about">Docs</a>
<a className="text-zinc-400 hover:text-white transition font-sans" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-6 text-xs text-zinc-500 font-sans">
          © <span id="year">2025</span> Slipline Privacy. All rights reserved.
        </div>
</div>
</footer>
</div>

<div className="fixed inset-x-0 top-20 z-50 px-4 hidden" id="mobileMenuPanel">
<div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl p-4">
<div className="grid grid-cols-2 gap-2 text-sm">
<a className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 transition font-sans" href="#work">App</a>
<a className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 transition font-sans" href="#services">Features</a>
<a className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 transition font-sans" href="#about">Docs</a>
<a className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 transition font-sans" href="#contact">Contact</a>
</div>
<a className="mt-3 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-900 text-sm hover:bg-zinc-200 transition font-sans" href="#app">
        Launch App
      </a>
</div>
</div>

<style>html { scroll-behavior: smooth; }</style>


    </>
  );
}
