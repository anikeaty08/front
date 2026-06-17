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



  lucide.createIcons();
  document.getElementById('year').textContent = new Date().getFullYear();

  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobile = document.getElementById('closeMobile');

  if (mobileBtn && mobileMenu && closeMobile) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.remove('hidden');
      setTimeout(() => lucide.createIcons(), 10);
    });
    closeMobile.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
    });
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
<a className="text-2xl font-semibold tracking-tight font-geist" href="/">CineVault</a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#originals">Originals</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#library">Library</a>
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#plans">Plans</a>
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="/#faq">Faq</a>
<div className="relative inline-block group text-xs rounded-full">
<button className="relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full">
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Start Watching</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 text-xs rounded-full" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
        Menu
      </button>
</nav>

<section className="z-10 sm:pt-20 md:pt-32 md:pb-32 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">

<div className="flex [animation:fadeSlideIn_1s_ease-out_0.1s_both] mb-6 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex -space-x-3">
<img alt="User 1" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/59145a03-3960-4b58-b8bf-d24d645b070f_320w.webp"/>
<img alt="User 2" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d92dd0bd-e18b-4459-903b-30cf16d2eae8_320w.webp"/>
<img alt="User 3" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aa3dc352-fe25-42df-b2e7-3e73fc0e2cd1_320w.webp"/>
<img alt="User 4" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/36101c71-d212-4acb-b02c-6071aad3e6f4_800w.webp"/>
<img alt="User 5" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e609d3b8-62f1-4b0b-afd1-81402d269b00_800w.webp"/>
</div>
<div className="flex flex-col items-start opacity-50">
<div className="flex items-center">
<svg className="w-[16px] h-[16px] fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="fill-current w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-1 text-xs font-medium text-white/70 font-geist">Rated 4.9 • 2M+ members streaming</p>
</div>
</div>
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto" style={{}}>
        Where stories come alive.
      </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
        Stream award-winning originals, timeless classics, and exclusive premieres. 4K HDR, Dolby Atmos, and zero ads. Your next obsession starts here.
      </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center" id="cta">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Start Free Trial</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">7 days free</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" href="#library">
          Browse library
        </a>
</div>

<div className="relative mt-16 [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-white/10">
<img alt="Featured content" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/122a4553-2c4e-49d5-86de-7643c3cbec75_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 text-xs font-medium text-red-200 font-geist">NEW ORIGINAL</span>
<h3 className="text-3xl font-semibold mt-3 tracking-tight font-geist">The Midnight Chronicles</h3>
<p className="text-white/80 mt-2 max-w-xl font-geist">A gripping thriller about secrets buried in the past.</p>
</div>
</div>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-24 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Available on all your devices</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="text-white/40 text-2xl font-semibold font-geist">Apple TV</div>
<div className="text-white/40 text-2xl font-semibold font-geist">Roku</div>
<div className="text-white/40 text-2xl font-semibold font-geist">Fire TV</div>
<div className="text-white/40 text-2xl font-semibold font-geist">Android</div>
<div className="text-white/40 text-2xl font-semibold font-geist">iOS</div>
<div className="text-white/40 text-2xl font-semibold font-geist">Web</div>
</div>
</section>

<section className="overflow-hidden relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl md:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-geist tracking-tighter" style={{}}>Cinema-quality streaming, anywhere.</h2>
<p className="mt-4 text-base text-white/70 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll font-geist">Experience stunning 4K HDR visuals, immersive Dolby Atmos sound, and seamless playback across all your devices—from smartphone to smart TV.</p>
<div className="flex [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-6 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm font-medium bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 backdrop-blur font-geist" href="#library">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
            Explore originals
          </a>
<a className="inline-flex items-center gap-2 hover:bg-purple-500 transition text-sm font-medium text-white bg-purple-600 rounded-lg pt-2 pr-4 pb-2 pl-4 font-geist" href="#cta">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Start watching
          </a>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll relative">
<img alt="Streaming preview" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cef612fc-fed9-43fc-896c-6df5524216b5_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="originals">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">Exclusive content</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{}}>CineVault Originals</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">Award-winning series and films you won't find anywhere else.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="relative">
<img alt="The Last Frontier" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/55bc760f-a9a7-4d7b-b54b-bbcaf6148ee1_1600w.webp"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-red-400/30 bg-red-400/15 px-2 py-0.5 text-[11px] font-medium text-red-200 font-geist">EXCLUSIVE</span>
<span className="text-xs text-white/60 font-geist">8 Episodes • Drama</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-geist tracking-tighter" style={{}}>The Last Frontier</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">In a world on the brink, one family must decide between survival and humanity. A gripping saga of hope against impossible odds.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#cta">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Watch now
          </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/5 border-white/10 border rounded-lg px-4 py-2 hover:bg-white/10 font-geist" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
            My List
          </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            4K HDR Quality
          </h3>
<span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/15 px-2 py-0.5 text-[11px] font-medium text-purple-200 font-geist">4K</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Crystal-clear picture with stunning color and contrast. Every frame looks incredible.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="4K Quality" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c64c01c-d0d4-43bf-89f6-dab5efbeb7e6_800w.webp"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
            Dolby Atmos
          </h3>
<span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/15 px-2 py-0.5 text-[11px] font-medium text-sky-200 font-geist">AUDIO</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Immersive sound that puts you in the center of the action.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Audio quality" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bca741b3-96ce-43a2-8fc0-931f321709e3_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
          No ads, ever
        </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Uninterrupted viewing from start to finish.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Ad-free" className="aspect-video w-full object-cover" src="https://cdn.midjourney.com/902ecee4-212c-4006-91e3-b109efae4250/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
</div>
</div>
<div className="overflow-hidden bg-white/5 border-white/10 border rounded-2xl relative [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
          Download offline
        </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Watch anywhere, anytime—even without internet.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Offline viewing" className="aspect-video w-full object-cover" src="https://cdn.midjourney.com/ddfee27b-679f-4948-a6f7-ba7f4b3e5b40/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
</div>
</div>
<div className="overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
          Watch together
        </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Multiple profiles and simultaneous streams for the whole family.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Family viewing" className="aspect-video w-full object-cover" src="https://cdn.midjourney.com/15b2b4bb-a1a3-42d1-ac48-9fbcdc8f7325/0_0.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden relative" id="library" style={{background: 'linear-gradient(transparent, rgba(139, 92, 246, 0.05), transparent)'}}>
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="max-w-4xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Library</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-geist tracking-tighter">Explore our collection</h2>
<p className="mt-4 text-base text-white/70 font-geist">Thousands of movies, series, and documentaries across every genre.</p>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-10 relative">
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group cursor-pointer">
<img alt="Action" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b8290b10-47f7-4742-bd6d-04aab2249a23_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="text-xl font-semibold tracking-tight font-geist">Action &amp; Adventure</h3>
<p className="text-sm text-white/70 mt-1 font-geist">250+ titles</p>
</div>
</div>
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group cursor-pointer">
<img alt="Drama" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ff11428e-8600-4fea-862f-bcc5de6078ba_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="text-xl font-semibold tracking-tight font-geist">Drama</h3>
<p className="text-sm text-white/70 mt-1 font-geist">400+ titles</p>
</div>
</div>
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group cursor-pointer">
<img alt="Sci-Fi" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e98ad4d6-7494-4107-a0d1-9c281406978e_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="text-xl font-semibold tracking-tight font-geist">Sci-Fi &amp; Fantasy</h3>
<p className="text-sm text-white/70 mt-1 font-geist">180+ titles</p>
</div>
</div>
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group cursor-pointer">
<img alt="Comedy" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0441210e-29f3-4bef-9f5f-8c221a42e895_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="text-xl font-semibold tracking-tight font-geist">Comedy</h3>
<p className="text-sm text-white/70 mt-1 font-geist">320+ titles</p>
</div>
</div>
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group cursor-pointer">
<img alt="Documentary" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/832f71ad-da4b-477d-ad86-c609dd2a3dde_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="text-xl font-semibold tracking-tight font-geist">Documentary</h3>
<p className="text-sm text-white/70 mt-1 font-geist">150+ titles</p>
</div>
</div>
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group cursor-pointer">
<img alt="Thriller" className="w-full aspect-video object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6592102b-3a32-4b30-a86a-8a3159f36968_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<h3 className="text-xl font-semibold tracking-tight font-geist">Thriller &amp; Mystery</h3>
<p className="text-sm text-white/70 mt-1 font-geist">200+ titles</p>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#cta">
          Browse all categories
          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="plans" style={{}}>
<div className="relative">
<div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal font-geist">Subscription Plans</span>
</div>
<h2 className="text-[40px] sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tighter" style={{}}>Choose your plan</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-geist">
        All plans include 4K streaming, offline downloads, and access to all originals. Cancel anytime.
      </p>
</div>
<div className="relative max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(139,92,246,0.14) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Most Popular</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Standard</h3>
<div className="mt-3 flex items-end justify-center gap-3">
<p className="text-4xl sm:text-5xl text-white font-geist tracking-tighter" style={{}}>$12.99</p>
<span className="text-white/70 text-sm mb-1 font-geist">/ month</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
            Perfect for individuals and couples. Stream on up to 2 devices.
          </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">2 Screens</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">4K HDR</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Unlimited streaming</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Download for offline</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">All originals included</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist">Dolby Atmos audio</span>
</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition font-geist" href="#cta">
          Start 7-day free trial
          <svg className="w-4.5 h-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 90% -10%, rgba(239,68,68,0.16) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Best Value</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Premium</h3>
<div className="mt-3 flex items-end justify-center gap-2">
<p className="text-4xl sm:text-5xl text-white font-geist tracking-tighter" style={{}}>$19.99</p>
<span className="text-white/70 text-sm mb-1 font-geist">/ month</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
            For families and power viewers. Stream on up to 4 devices simultaneously.
          </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">4 Screens</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">4K HDR + Atmos</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Everything in Standard</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Early access to new releases</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Behind-the-scenes content</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="w-3.5 h-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist">Priority customer support</span>
</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-gradient-to-r from-purple-600 to-red-600 text-white text-sm font-medium hover:from-purple-500 hover:to-red-500 transition font-geist" href="#cta">
          Start 7-day free trial
          <svg className="w-4.5 h-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</article>
</div>
<p className="mt-6 text-center text-xs text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">All prices in USD. Cancel anytime. No hidden fees.</p>
</div>
</section><section className="overflow-hidden relative" style={{background: 'linear-gradient(transparent, rgba(139, 92, 246, 0.05), transparent)'}}>
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" style={{}}>
<div className="max-w-4xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Testimonials</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-geist tracking-tighter" style={{}}>What viewers are saying</h2>
<p className="mt-4 text-base text-white/70 font-geist">Join millions who've made CineVault their streaming home.</p>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-10 relative">
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Michael" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/781490a8-4e8b-46fa-8468-f92363bd6e2a_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Michael Chen</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Film enthusiast</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"The originals are incredible. Finally a streaming service that prioritizes quality storytelling."</p>
</div>
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Sarah" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Sarah Johnson</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">TV series lover</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"4K quality and no ads? This is what streaming should be."</p>
</div>
<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="David" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1a2f3d28-68b9-4bbd-9af3-d15976adbb7e_320w.webp"/>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">David Park</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Binge watcher</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"Best selection of international films. My whole family loves it."</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden relative" id="faq">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-3xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">FAQ</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter" style={{}}>Frequently asked questions</h2>
<p className="mt-3 text-base text-white/70 font-geist">Can't find what you're looking for? Contact our support team.</p>
</div>
<div className="mt-10 max-w-3xl mx-auto space-y-3 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<details className="group sm:p-5 bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">What devices can I watch on?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">CineVault works on smart TVs, streaming devices (Roku, Apple TV, Fire TV), gaming consoles, iOS and Android phones/tablets, and web browsers.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Can I download content to watch offline?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Yes! All plans include unlimited offline downloads on mobile devices. Perfect for flights, commutes, or anywhere without internet.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">How many profiles can I create?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Create up to 5 personalized profiles per account, each with their own watchlist and recommendations.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Can I cancel anytime?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Absolutely. No commitments, no cancellation fees. You can pause or cancel your subscription anytime from your account settings.</p>
</details>
</div>
<div className="mt-8 text-center [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#cta">
        Start your free trial
      </a>
</div>
</div>
</section>


<footer className="xl:mt-0 border-white/10 border-t mt-10 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<span className="text-2xl font-semibold tracking-tight font-geist">CineVault</span>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">Premium streaming for film and TV lovers. Award-winning originals, timeless classics, and stunning 4K quality—all without ads.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#cta">
            Start watching
          </a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist">Browse</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white font-geist" href="#originals">Originals</a></li>
<li><a className="hover:text-white font-geist" href="#library">Library</a></li>
<li><a className="hover:text-white font-geist" href="#plans">Plans</a></li>
<li><a className="hover:text-white font-geist" href="#">Coming Soon</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white font-geist" href="#">About Us</a></li>
<li><a className="hover:text-white font-geist" href="#">Careers</a></li>
<li><a className="hover:text-white font-geist" href="#">Press</a></li>
<li><a className="hover:text-white font-geist" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span id="year">2025</span> CineVault. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white font-geist" href="#">Privacy</a>
<a className="hover:text-white font-geist" href="#">Terms</a>
<a className="hover:text-white font-geist" href="#">Help Center</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
