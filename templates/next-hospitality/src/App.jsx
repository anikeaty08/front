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
  


      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
        }

        // Region dropdown (desktop)
        const regionBtn = document.getElementById('regionBtn');
        const regionMenu = document.getElementById('regionMenu');
        if (regionBtn && regionMenu) {
          regionBtn.addEventListener('click', () => {
            regionMenu.classList.toggle('hidden');
          });
          document.addEventListener('click', (e) => {
            if (!regionBtn.contains(e.target) && !regionMenu.contains(e.target)) {
              regionMenu.classList.add('hidden');
            }
          });
        }

        // Region dropdown (mobile)
        const regionBtnMobile = document.getElementById('regionBtnMobile');
        const regionMenuMobile = document.getElementById('regionMenuMobile');
        if (regionBtnMobile && regionMenuMobile) {
          regionBtnMobile.addEventListener('click', () => {
            regionMenuMobile.classList.toggle('hidden');
          });
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[840px] hue-rotate-180 saturate-50 brightness-50"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="isolate overflow-hidden relative">

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[90px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1131bc6c-07a0-4e1d-bc11-1966f9c994f1_800w.png)] bg-cover rounded" href="#"></a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Events</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Packages</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Destinations</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Help</a>
</nav>

<div className="hidden md:flex items-center gap-3">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors" id="regionBtn">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>Region</span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/95 shadow-2xl backdrop-blur hidden" id="regionMenu">
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/70 hover:text-white">
<span>United States</span>
</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/70 hover:text-white">
<span>Canada</span>
</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/70 hover:text-white">
<span>Mexico</span>
</button>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-neutral-100 transition-colors" href="#">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span>Log in</span>
</a>
</div>

<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-neutral-200" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-neutral-800" id="mobileMenu">
<nav className="py-4 space-y-2">
<a className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">Events</a>
<a className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">Packages</a>
<a className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">Destinations</a>
<a className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">Help</a>
<div className="px-3 pt-2">
<button className="w-full inline-flex items-center justify-between gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-700" id="regionBtnMobile">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    Region
                  </span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-2 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/95 shadow-2xl backdrop-blur hidden" id="regionMenuMobile">
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/70 hover:text-white">
<span>United States</span>
</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/70 hover:text-white">
<span>Canada</span>
</button>
<button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800/70 hover:text-white">
<span>Mexico</span>
</button>
</div>
</div>
<div className="px-3">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-neutral-100" href="#">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                  Log in
                </a>
</div>
</nav>
</div>
</div>
</header>

<section className="relative">

<div className="pointer-events-none -z-10 overflow-hidden absolute top-0 right-0 bottom-0 left-0" style={{}}>
<div className="-left-32 bg-gradient-to-tr from-fuchsia-500/20 to-indigo-500/10 w-64 h-64 rounded-full absolute top-24 blur-3xl" style={{}}></div>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid md:grid-cols-2 items-stretch gap-10 pt-10 md:pt-14">

<div className="relative">
<div className="mx-auto md:mx-0 max-w-xl">
<p className="text-sm font-medium text-teal-400/90">Get closer than ever to</p>
<h1 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">GLOBAL GAMES  CUP 26</h1>
<p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-300">
                  Experience the pinnacle of live sport with curated hospitality: premium seating, chef‑led dining, and seamless access. Now available across all three host nations, including single‑event passes.
                </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="inline-flex gap-2 hover:from-teal-400 hover:to-cyan-500 transition-all text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" href="#">
<svg className="lucide lucide-map h-4 w-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                    Explore Events
                  </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900 hover:border-neutral-700 transition-colors" href="#">
<svg className="lucide lucide-briefcase h-4 w-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                    View Packages
                  </a>
</div>
<div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
<p className="text-sm font-semibold tracking-tight text-white">Official hospitality packages are available now</p>
<p className="text-sm text-neutral-400 mt-2">Reserve verified access directly with Next Hospitality. Choose your city, match, or a complete venue series. Availability is limited across host nations.</p>
<p className="mt-2 text-xs text-neutral-500">
                    Host nation team fixtures may be restricted to series packages in select markets. See FAQs and authorized partners for details.
                  </p>
</div>
</div>
</div>

<div className="parent relative" style={{width: '100%', height: '100%', perspective: '1000px'}}>
<div className="card sm:h-[560px] md:h-full overflow-hidden transition-all duration-700 ease-in-out h-[520px] border-neutral-800 border rounded-[2.5rem] relative" style={{transformStyle: 'preserve-3d', background: 'linear-gradient(135deg, rgb(20, 184, 166) 0%, rgb(16, 185, 129) 100%)', boxShadow: 'rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px'}}>

<div className="glass transition-all duration-700 ease-in-out border-white rounded-[2.5rem] border-b border-l absolute" style={{inset: '8px', borderTopRightRadius: '100%', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%)', transform: 'translate3d(0px, 0px, 25px)', transformStyle: 'preserve-3d', animation: 'glassFloat 4s ease-in-out infinite'}}></div>

<div className="grid grid-cols-6 grid-rows-6 gap-0 absolute top-0 right-0 bottom-0 left-0" style={{transform: 'translate3d(0, 0, 26px)', animation: 'contentSlide 3.5s ease-out forwards', opacity: '0'}}>
<div className="col-span-4 row-span-6 relative">
<img alt="Hospitality setting" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a1f43713-97b5-42cd-b934-83d43014acf1_1600w.webp" style={{animation: 'imageZoom 3s ease-out forwards'}}/>
<div className="bg-gradient-to-tr from-neutral-950/30 via-neutral-950/0 to-neutral-950/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="col-span-2 row-span-6 bg-neutral-950 relative">

<div className="absolute top-0 right-0 h-1/2 w-full" style={{animation: 'blockSlideDown 2.5s ease-out 0.3s forwards', transform: 'translateY(-100%)'}}>
<div className="w-full h-full bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/67b6089f-51dd-4ae9-a6d0-d86e96ef1685_800w.webp)]"></div>
</div>
<div className="absolute bottom-0 right-0 h-1/2 w-full" style={{animation: 'blockSlideUp 2.5s ease-out 0.5s forwards', transform: 'translateY(100%)'}}>
<div className="w-full h-full bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9a3233f-05ee-4e21-9f4c-39326154c905_800w.webp)]"></div>
</div>

<div className="bg-center mix-blend-screen w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e522f996-daf4-4a6f-8da5-c9f908b2f386_800w.webp)] bg-cover rounded-full absolute top-8 left-[-35%]" style={{animation: 'circleFloat1 3s ease-out 1s forwards', opacity: '0', transform: 'scale(0)'}}></div>
<div className="w-48 h-48 bg-cover rounded-full absolute bottom-8 left-[-25%] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/625ef4b8-5b92-48c6-ab48-106a91fbe055_800w.webp)] bg-center" style={{animation: 'circleFloat2 3s ease-out 1.3s forwards', opacity: '0', transform: 'scale(0)'}}></div>
</div>
</div>


<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950/60 px-3 py-1.5 backdrop-blur" style={{transform: 'translate3d(0, 0, 26px)', animation: 'badgeSlideIn 2s ease-out 2.2s forwards', opacity: '0', transform: 'translate3d(-50px, 0, 26px)'}}>
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" style={{animation: 'pulse 2s ease-in-out 3s infinite'}}></span>
<span className="text-xs font-medium text-neutral-200">Verified Access</span>
</div>

<div className="absolute bottom-5 left-5 right-5 rounded-xl border border-neutral-800 bg-neutral-950/70 p-3 backdrop-blur transition-all duration-200 ease-in-out" style={{transform: 'translate3d(0, 0, 26px)', transformStyle: 'preserve-3d', animation: 'statBarSlideUp 2.5s ease-out 2.5s forwards', opacity: '0', transform: 'translate3d(0, 100px, 26px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800">
<svg className="h-4 w-4 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-400">Premium Seats</p>
<p className="text-sm font-semibold tracking-tight text-neutral-100">Sectioned, Hosted, All‑Inclusive</p>
</div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-100 transition-all duration-200 ease-in-out" href="#" style={{transform: 'translate3d(0, 0, 50px)', boxShadow: 'rgba(5, 71, 17, 0.2) -5px 20px 10px 0px'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          Details
        </a>
</div>
</div>
</div>
<style className="">
    @keyframes glassFloat {
      0%, 100% {
        transform: translate3d(0px, 0px, 25px);
      }
      50% {
        transform: translate3d(0px, -5px, 30px);
      }
    }

    @keyframes contentSlide {
      0% {
        opacity: 0;
        transform: translate3d(-30px, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 26px);
      }
    }

    @keyframes imageZoom {
      0% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes blockSlideDown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes blockSlideUp {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes circleFloat1 {
      0% {
        opacity: 0;
        transform: scale(0) rotate(-180deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    @keyframes circleFloat2 {
      0% {
        opacity: 0;
        transform: scale(0) rotate(180deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    @keyframes logoExpand1 {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0px) scale(0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 20px) scale(1);
      }
    }

    @keyframes logoExpand2 {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0px) scale(0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 40px) scale(1);
      }
    }

    @keyframes logoExpand3 {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0px) scale(0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 60px) scale(1);
      }
    }

    @keyframes logoExpand4 {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0px) scale(0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 80px) scale(1);
      }
    }

    @keyframes logoExpand5 {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0px) scale(0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 100px) scale(1);
      }
    }

    @keyframes iconPulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.8;
      }
    }

    @keyframes badgeSlideIn {
      0% {
        opacity: 0;
        transform: translate3d(-50px, 0, 26px);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 26px);
      }
    }

    @keyframes statBarSlideUp {
      0% {
        opacity: 0;
        transform: translate3d(0, 100px, 26px);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 26px);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.7);
      }
      50% {
        opacity: 0.8;
        box-shadow: 0 0 0 6px rgba(45, 212, 191, 0);
      }
    }

    .parent:hover .card {
      transform: rotate3d(1, 1, 0, 30deg);
      box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
    }

    .parent:hover .card .circle2 {
      transform: translate3d(0, 0, 60px) !important;
    }

    .parent:hover .card .circle3 {
      transform: translate3d(0, 0, 80px) !important;
    }

    .parent:hover .card .circle4 {
      transform: translate3d(0, 0, 100px) !important;
    }

    .parent:hover .card .circle5 {
      transform: translate3d(0, 0, 120px) !important;
    }
  </style>
</div>
</div>

<div className="w-full mt-4 pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="uppercase xl:tracking-tight xl:font-light xl:text-xs text-sm font-medium text-zinc-400 tracking-wide">Powering the world’s most focused product teams
    </p>
</div>
<div className="relative overflow-hidden mt-6" style={{position: 'relative'}}>
<style>
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .carousel-track {
      display: flex;
      gap: 1.5rem;
      animation: scroll-left 30s linear infinite;
      will-change: transform;
    }
    .carousel-track:hover {
      animation-play-state: paused;
    }
    .carousel-container {
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
      mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    }
  </style>
<div className="carousel-container">
<div className="carousel-track">
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b9181a49-20ab-4552-b731-976469c0154b_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca43984b-3298-41bb-871b-d113545c657c_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be92aecb-6303-4bbe-9283-ba238ac8b0ee_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9f9002c0-4b36-4d16-b000-15655b25b879_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1040d3ec-8da2-47f6-b134-1341261ccfb9_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b9181a49-20ab-4552-b731-976469c0154b_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca43984b-3298-41bb-871b-d113545c657c_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be92aecb-6303-4bbe-9283-ba238ac8b0ee_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9f9002c0-4b36-4d16-b000-15655b25b879_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1040d3ec-8da2-47f6-b134-1341261ccfb9_320w.jpg)] bg-cover rounded flex-shrink-0" href="#"></a>
</div>
</div>
</div>
</div>
</div>
</section><section className="mt-20 relative">
<div className="pointer-events-none -z-10 overflow-hidden absolute top-0 right-0 bottom-0 left-0" style={{}}>
<div className="bg-gradient-to-tr from-indigo-500/15 to-fuchsia-500/10 w-80 h-80 rounded-full absolute right-1/4 bottom-10 blur-3xl" style={{}}></div>
</div>
<div className="sm:px-6 lg:pl-0 lg:pr-0 max-w-7xl mr-auto ml-auto pr-0 pl-0">
<div className="text-center mb-12">
<p className="text-sm font-medium text-teal-400/90">Gallery</p>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">Moments from the experience</h2>
<p className="mt-4 text-sm text-neutral-400 max-w-2xl mx-auto">Immerse yourself in the atmosphere of world-class hospitality and unforgettable matchday experiences.</p>
</div>
<div className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/40">
<style>
        @keyframes rotate3d {
          from {
            transform: perspective(1000px) rotateX(-15deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-15deg) rotateY(360deg);
          }
        }
        .gallery-carousel {
          animation: rotate3d 25s linear infinite;
          transform-style: preserve-3d;
        }
        .gallery-carousel:hover {
          animation-play-state: paused;
        }
      </style>
<div className="gallery-carousel relative w-28 h-40 sm:w-32 sm:h-48">

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-teal-400/40 shadow-2xl" style={{transform: 'rotateY(0deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl" style={{transform: 'rotateY(36deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ba803fd6-d808-4d88-bd53-2b852a032d0b_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-lime-400/40 shadow-2xl" style={{transform: 'rotateY(72deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/10b50859-ab67-4aaa-b8b6-1b88e1ce814b_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-lime-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-yellow-400/40 shadow-2xl" style={{transform: 'rotateY(108deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/097be7f9-3c50-4d19-97ff-c2cb6a66a1ed_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-2xl" style={{transform: 'rotateY(144deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/373d323a-c5e5-4cd2-ba1e-56f1589a561a_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-orange-400/40 shadow-2xl" style={{transform: 'rotateY(180deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7a78f35-2d5c-490a-bef7-e0150073bc52_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-red-400/40 shadow-2xl" style={{transform: 'rotateY(216deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a2b8af3c-c375-4706-8969-576c22c02b2a_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-pink-400/40 shadow-2xl" style={{transform: 'rotateY(252deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96f458e4-fb35-4b55-8f1b-fa6eb2a3a71f_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-purple-400/40 shadow-2xl" style={{transform: 'rotateY(288deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
</div>

<div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-indigo-400/40 shadow-2xl" style={{transform: 'rotateY(324deg) translateZ(200px)'}}>
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/037c412e-69cb-44a8-b4e4-725a4ccb6873_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2">
<p className="text-xs text-neutral-400 flex items-center gap-2 bg-neutral-900/80 backdrop-blur px-4 py-2 rounded-full border border-neutral-800">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path><path d="M12 6v6l4 2"></path></svg>
          Hover to pause rotation
        </p>
</div>
</div>
</div>
</section>

<section className="sm:p-8 bg-neutral-900/60 max-w-7xl border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">Featured Cities</h2>
<p className="mt-2 text-sm text-neutral-400">Choose a destination and build your hospitality itinerary.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-900 hover:border-neutral-700" href="#">
<svg className="lucide lucide-compass h-4 w-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              View all cities
            </a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50" href="#">
<div className="aspect-[16/9] overflow-hidden">
<img alt="City View" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://cdn.midjourney.com/9045cb32-6300-49c2-8c89-69a4818be054/0_0.png?w=800&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">New York</h3>
<span className="inline-flex items-center gap-1 text-xs text-neutral-400">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Jun–Jul
                  </span>
</div>
<p className="mt-2 text-sm text-neutral-400">Skybox lounges, chef’s tasting menus, curated nightlife.</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50" href="#">
<div className="aspect-[16/9] overflow-hidden">
<img alt="City View" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/1a985241-d750-4b65-836e-ae9b41677a13/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Mexico City</h3>
<span className="inline-flex items-center gap-1 text-xs text-neutral-400">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Jul–Aug
                  </span>
</div>
<p className="mt-2 text-sm text-neutral-400">Modern suites, mezcal pairings, guided cultural tours.</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50" href="#">
<div className="aspect-[16/9] overflow-hidden">
<img alt="City View" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/ca76f814-5d49-44a4-8070-0b8b32799c1a/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Toronto</h3>
<span className="inline-flex items-center gap-1 text-xs text-neutral-400">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Aug–Sep
                  </span>
</div>
<p className="mt-2 text-sm text-neutral-400">Rink‑side clubs, craft cocktails, skyline after‑parties.</p>
</div>
</a>
</div>
</div>
</section><section className="mt-20 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">Hospitality Packages</h2>
<p className="mt-2 text-sm text-neutral-400">Premium experiences designed for every type of sports enthusiast.</p>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-target h-4 w-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          1. Select Package
        </span>
<span className="h-3 w-px bg-neutral-800"></span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-calendar-check h-4 w-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
          2. Pick Your Dates
        </span>
<span className="h-3 w-px bg-neutral-800"></span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-check-circle h-4 w-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          3. Complete Booking
        </span>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-6 gap-y-6">

<div className="overflow-hidden sm:p-7 bg-neutral-900/60 border-slate-700 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative" style={{backgroundColor: 'hsla(240, 15%, 9%, 1)', backgroundImage: 'radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%)', boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset'}}>
<div className="absolute inset-0 pointer-events-none overflow-hidden" style={{zIndex: '-10', borderRadius: '1.5rem'}}>
<div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)', borderRadius: '1.5rem', transform: 'translate(-1px, -1px)', width: 'calc(100% + 2px)', height: 'calc(100% + 2px)'}}>
<div className="absolute top-1/2 left-1/2 w-[200%] h-40" style={{backgroundImage: 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(189, 100%, 50%) 40%, hsl(189, 100%, 50%) 60%, hsla(0, 0%, 40%, 0) 100%)', transform: 'translate(-50%, -50%)', animation: 'rotate 8s linear infinite'}}></div>
</div>
</div>
<span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
    Most Popular
  </span>
<h3 className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-2xl">Essential</h3>
<p className="mt-3 text-sm text-neutral-300">Perfect for first-time visitors who want the complete experience without overwhelming extras.</p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-start gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex-shrink-0 mt-0.5">
<svg className="w-3 h-3 fill-neutral-900" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path>
</svg>
</span>
<span className="text-white">Single match access with reserved premium seating</span>
</li>
<li className="flex items-start gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex-shrink-0 mt-0.5">
<svg className="w-3 h-3 fill-neutral-900" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path>
</svg>
</span>
<span className="text-white">Pre-match buffet with complimentary beverages</span>
</li>
<li className="flex items-start gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex-shrink-0 mt-0.5">
<svg className="w-3 h-3 fill-neutral-900" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path>
</svg>
</span>
<span className="text-white">Priority stadium entry and dedicated lounge access</span>
</li>
</ul>
<div className="mt-6 flex items-end justify-between">
<div className="">
<p className="text-[11px] text-neutral-400">Starting at</p>
<p className="text-xl font-semibold tracking-tight text-white">$895 <span className="text-[11px] font-normal text-neutral-400">USD / per person</span></p>
</div>
<button className="inline-flex hover:from-teal-400 hover:to-cyan-500 transition-all text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" style={{boxShadow: 'inset 0 -2px 25px -4px rgba(255, 255, 255, 0.5)'}}>
      Select
      <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<style>
    @keyframes rotate {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  </style>
</div>

<div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-7">
<h3 className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-2xl">Elite</h3>
<p className="mt-3 text-sm text-neutral-300">Elevated hospitality with chef-curated dining and enhanced amenities throughout your visit.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-dot mt-1 h-5 w-5 text-neutral-500" data-lucide="dot" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
            Multiple match access at your chosen venue
          </li>
<li className="flex items-start gap-2">
<svg 0="" 24="" 24"="" className="lucide lucide-dot mt-1 h-5 w-5 text-neutral-500" data-lucide="dot" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" xmlns="http://www.w3 viewBox="><circle cx="12.1" cy="12.1" r="1"></circle></svg>
            Three-course chef's tasting menu with wine pairings
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-dot mt-1 h-5 w-5 text-neutral-500" data-lucide="dot" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
            Executive lounge access with premium bar service
          </li>
</ul>
<div className="mt-6 flex items-end justify-between">
<div className="">
<p className="text-[11px] text-neutral-500">Starting at$5,450 <span className="text-[11px] font-normal text-neutral-400">USD / per person</span></p>
</div>
<a className="inline-flex gap-2 hover:from-teal-400 hover:to-cyan-500 transition-all text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Select
          </a>
</div>
</div>

<div className="overflow-hidden sm:p-7 bg-neutral-900/60 border-[#ffffff]/20 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-2xl">Ultimate</h3>
<p className="mt-3 text-sm text-neutral-300">The pinnacle of sports hospitality with white-glove service and exclusive behind-the-scenes access.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-dot mt-1 h-5 w-5 text-neutral-500" data-lucide="dot" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
            Full tournament access with pitchside premium seats
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-dot mt-1 h-5 w-5 text-neutral-500" data-lucide="dot" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
            Private chef experiences and sommelier-led tastings
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-dot mt-1 h-5 w-5 text-neutral-500" data-lucide="dot" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
            Dedicated concierge, VIP transportation, trophy access
          </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-dot mt-1 h-5 w-5 text-neutral-500" data-lucide="dot" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
            Champions Club membership with exclusive meet-and-greet
          </li>
</ul>
<div className="mt-6 flex items-end justify-between">
<div className="">
<p className="text-[11px] text-neutral-500">Starting at</p>
<p className="text-xl font-semibold tracking-tight text-white">$18,900 <span className="text-[11px] font-normal text-neutral-400">USD / per person</span></p>
</div>
<a className="inline-flex gap-2 hover:from-teal-400 hover:to-cyan-500 transition-all text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Select
          </a>
</div>
</div>
</div>
<p className="mt-4 text-xs text-neutral-500">All packages include official hospitality credentials and are subject to availability. Pricing varies by venue and match importance.</p>
</div>
</section><section className="sm:p-8 bg-neutral-900/60 max-w-7xl border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-neutral-400">Hospitality</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">
            Premium lounge experiences at every venue.
          </h2>

<div className="mt-8 relative">
<div className="hidden sm:flex flex-col gap-4 relative text-neutral-300 bg-transparent pr-4 pl-4">
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-neutral-900 border-emerald-400 border-2 rounded-full mt-0.5">
<div className="w-1.5 h-1.5 absolute top-0.5 left-0.5 bg-emerald-400 rounded-full"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-emerald-300">Chef-curated dining</span>
<p className="text-xs text-neutral-400 mt-1">Multi-course tasting menus and wine pairings</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-400 to-purple-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-indigo-400 bg-neutral-900 z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-indigo-300">Premium seating</span>
<p className="text-xs text-neutral-400 mt-1">Unobstructed sightlines and VIP section access</p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-purple-400 bg-neutral-900 z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-purple-300">Dedicated concierge</span>
<p className="text-xs text-neutral-400 mt-1">White-glove service throughout your experience</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Five signature spaces</p>
<p className="xl:mb-4 text-sm text-neutral-300 max-w-sm mt-1 mb-4">
              Pitchside Lounge, Executive Suite, Trophy Lounge, Champions Club, and Atlas Pavilion—each designed for immersive matchday luxury.
            </p>
<a className="inline-flex gap-2 hover:from-teal-400 hover:to-cyan-500 transition-all text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" href="#hospitality">
              Compare lounges
              <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc60f4d4-5cc1-4ba1-95b8-5cc652d39cb5_800w.jpg)]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Dining</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Plated menus</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1d01993c-67dd-4a97-ab99-02c5c2950e6f_800w.jpg)]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="w-[14px] h-[14px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Lounge</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Modern comfort</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8b504780-eb86-496a-8705-a914493c5b66_800w.jpg)]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" x2="6" y1="1" y2="4"></line><line x1="10" x2="10" y1="1" y2="4"></line><line x1="14" x2="14" y1="1" y2="4"></line></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Bar</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Signature cocktails</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e8f58e4b-4eb6-4d63-b766-a57b706412db_800w.jpg)]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Access</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Seamless entry</p>
</div>
</article>
</div>
</div>
</section><section className="mt-20 relative">
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 blur-3xl"></div>
<div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 items-center">

<div className="relative">
<div className="overflow-hidden aspect-[16/12] bg-neutral-900/60 border-neutral-800 border rounded-[2rem] relative">
<img alt="Matchday hospitality moment" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/67b6089f-51dd-4ae9-a6d0-d86e96ef1685_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/40 via-neutral-950/10 to-transparent"></div>

<div className="-top-10 -left-10 mix-blend-screen w-48 h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/adf333d6-7074-49d2-8f95-8576241d7cb3_800w.webp)] bg-cover rounded-br-[2.5rem] absolute"></div>
<div className="-top-10 -right-10 mix-blend-screen w-48 h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/29dd1738-85b5-4ee7-87b6-d143dfe38616_800w.webp)] bg-cover rounded-bl-[2.5rem] absolute"></div>
<div className="-bottom-10 -left-10 mix-blend-screen w-48 h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9a3233f-05ee-4e21-9f4c-39326154c905_800w.webp)] bg-cover rounded-tr-[2.5rem] absolute"></div>
<div className="-bottom-10 -right-10 mix-blend-screen w-48 h-48 bg-[url(https://cdn.midjourney.com/271b6c85-ba5f-41e1-8b54-a0730168e58b/0_0.png?w=800&amp;q=80)] bg-contain rounded-tl-[2.5rem] absolute"></div>

</div>
</div>

<div className="">
<p className="text-sm font-medium text-teal-400/90">Why Nova</p>
<h2 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight mt-2">Why choose Next Hospitality?</h2>
<p className="mt-4 text-sm text-neutral-300">
          We design end‑to‑end hospitality for the world’s most anticipated matches and live events—pairing premium
          seating with chef‑led dining, seamless entry, and concierge support. From first inquiry to final whistle,
          Nova turns game day into something unforgettable.
        </p>

<div className="mt-8 flex items-start gap-4">
<span className="inline-block h-8 w-0.5 bg-gradient-to-b from-teal-400 via-indigo-400 to-fuchsia-400 rounded-full"></span>
<div className="">
<p className="text-5xl sm:text-6xl font-bold tracking-tight text-white">2 Million</p>
<p className="mt-1 text-sm text-neutral-400">Global guests hosted annually</p>
</div>
</div>

<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
<div className="flex items-start gap-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800">
<svg className="lucide lucide-shield-check h-4 w-4 text-neutral-200" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight text-white">Verified access</p>
<p className="mt-1 text-xs text-neutral-400">Direct, secure allocations at top venues</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
<div className="flex items-start gap-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800">
<svg className="lucide lucide-concierge-bell h-4 w-4 text-neutral-200" data-lucide="concierge-bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"></path><path d="M20 16a8 8 0 1 0-16 0"></path><path d="M12 4v4"></path><path d="M10 4h4"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight text-white">Concierge support</p>
<p className="mt-1 text-xs text-neutral-400">Advisors who tailor every detail</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
<div className="flex items-start gap-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800">
<svg className="lucide lucide-utensils h-4 w-4 text-neutral-200" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight text-white">Chef‑led dining</p>
<p className="mt-1 text-xs text-neutral-400">Seasonal menus and signature pours</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4">
<div className="flex items-start gap-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800">
<svg className="lucide lucide-sparkles h-4 w-4 text-neutral-200" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight text-white">Seamless entry</p>
<p className="mt-1 text-xs text-neutral-400">Expedited checkpoints and hosted seating</p>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100" href="#">
<svg className="lucide lucide-info h-4 w-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            Learn more about Nova
          </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900 hover:border-neutral-700" href="#">
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            Speak with an advisor
          </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-tr from-neutral-900 to-neutral-900/60">
<div className="grid md:grid-cols-2">
<div className="sm:p-10 lg:p-12 pt-8 pr-8 pb-8 pl-8">
<h3 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight">Design your hospitality plan</h3>
<p className="mt-3 text-sm text-neutral-300">
                  Combine matchdays, dining, and local experiences into one seamless package. Our specialists handle the rest.
                </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100" href="#">
<svg className="lucide lucide-sparkle h-4 w-4" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                    Build my package
                  </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900" href="#">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                    Talk to an advisor
                  </a>
</div>
</div>
<div className="relative">
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Elegant dining" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/463bd02d-5320-42e0-a8a5-4a69ea993e6c_1600w.jpg" style={{}}/>
<div className="bg-gradient-to-l from-neutral-950/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="invisible">.</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-20 border-t border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-teal-500 to-indigo-500 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-sparkles h-5 w-5 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<p className="text-sm text-neutral-400">© <span className="" id="year">2025</span> Next Hospitality. All rights reserved.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Terms</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Privacy</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Contact</a>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
