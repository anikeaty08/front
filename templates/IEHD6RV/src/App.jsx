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
      document.addEventListener('DOMContentLoaded', function () {
        try { lucide.createIcons(); } catch (e) { /* noop */ }
      });

      // Timezone clock
      function updateClock() {
        const timeEl = document.getElementById('tz-time');
        const offEl = document.getElementById('tz-offset');
        const now = new Date();
        if (timeEl) {
          timeEl.textContent = now.toLocaleTimeString([], { hour12: false });
        }
        if (offEl) {
          const parts = new Intl.DateTimeFormat([], { timeZoneName: 'short' }).formatToParts(now);
          const abbr = parts.find(p => p.type === 'timeZoneName')?.value || 'Local';
          offEl.textContent = `(${abbr})`;
        }
      }
      updateClock();
      setInterval(updateClock, 1000);

      // Footer year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Contact form (demo)
      const form = document.getElementById('contact-form');
      const toast = document.getElementById('toast');
      function showToast() {
        if (!toast) return;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 2600);
      }
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          showToast();
          form.reset();
        });
      }

      // Subscribe (demo)
      const sub = document.getElementById('subscribe');
      if (sub) {
        sub.addEventListener('submit', (e) => {
          e.preventDefault();
          showToast();
          sub.reset();
        });
      }

      // Back to top
      document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          if (a.textContent?.toLowerCase().includes('back to top')) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[1300px]"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ojBMr9PbDiBpKIrmzIHh"></div>
</div>

<div className="relative w-full overflow-hidden">
<div className="flex w-full mr-auto ml-auto justify-center">
</div>
</div>

<section className="relative w-full sm:px-6 md:px-10 mt-12 mr-auto mb-12 ml-auto pr-4 pl-4 max-w-7xl">
<div className="relative -mt-2 w-full shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white/90 border-neutral-200/70 rounded-[40px] border-t backdrop-blur-xl">
<div className="sm:px-6 md:px-10 pt-8 pr-4 pb-10 pl-4">

<header className="w-full">
<header className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-black tracking-tight">RELAY</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
<a className="hover:text-black transition-colors font-medium" href="#">Solutions</a>
<a className="hover:text-black transition-colors font-medium" href="#">Platform</a>
<a className="hover:text-black transition-colors font-medium" href="#">Resources</a>
<a className="hover:text-black transition-colors font-medium" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="inline-flex items-center justify-center text-sm font-medium text-white bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-full px-6 py-2.5 shadow-sm ring-1 ring-black/10 hover:from-neutral-700 hover:to-neutral-800 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/20" role="button">Sign In</button>
</div>
</header>
</header>

<h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] text-4xl font-normal text-neutral-900 tracking-tighter">
We're Relay,<img alt="Alex portrait" className="inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af757665-5346-4907-89cf-3b2b013be82e_320w.jpg"/> a studio crafting digital experiences <img alt="Design interface preview" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f5a1c4ed-b9c4-4c15-94bd-68b789282cda_320w.jpg"/> and brands
</h1>

<p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-[85ch]">
            From idea to production. Product strategy, engineering, and delivery — paired with obsessive attention to performance, DX, and accessibility.
          </p>

<div className="mt-6 flex flex-wrap gap-2.5">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-800 text-xs px-3 py-1.5 ring-1 ring-neutral-200">
<svg className="lucide lucide-code-2 w-3.5 h-3.5 text-neutral-600" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
              TypeScript-first
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-800 text-xs px-3 py-1.5 ring-1 ring-neutral-200">
<svg className="lucide lucide-rocket w-3.5 h-3.5 text-neutral-600" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Edge-ready
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-800 text-xs px-3 py-1.5 ring-1 ring-neutral-200">
<svg className="lucide lucide-cpu w-3.5 h-3.5 text-neutral-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
              AI-native
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-800 text-xs px-3 py-1.5 ring-1 ring-neutral-200">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-neutral-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Secure by default
            </span>
</div>

<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="group inline-flex items-center justify-center gap-3 text-base font-medium text-white bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-full px-6 py-3 shadow-lg shadow-neutral-900/20 ring-1 ring-black/10 transition duration-150 ease-out hover:-translate-y-0.5" href="#contact">
              Start a project
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
<a className="inline-flex items-center justify-center text-base font-medium text-neutral-800 bg-neutral-100/60 border border-neutral-200 rounded-full px-6 py-3 hover:bg-neutral-100" href="#work">
              View work
            </a>
</div>

<section className="sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6" style={{position: 'relative', overflow: 'hidden'}}>

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm font-normal text-zinc-500 font-geist" style={{}}>Next Generation Technology</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-geist font-medium tracking-tighter" style={{}}>Introducing our AI-powered workforce.</h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Advanced Intelligence</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Seamless Workflow</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Infinite Scale</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 font-medium tracking-tight font-geist" style={{}}>Experience the future today</p>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>Discover how our intelligent AI agents revolutionize productivity and transform business operations at every scale.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist" style={{}}>
                                Explore Capabilities
                                <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8 font-geist" style={{}}>
            Our breakthrough technology merges <span className="font-medium text-zinc-100 font-geist" style={{}}>artificial intelligence excellence</span>
            with enterprise-grade solutions that evolve with your business needs.
          </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d09277c-88d3-4681-8a06-18307469ce9f_800w.jpg)] bg-cover hover:scale-105 transition-transform duration-500" style={{}}>
</div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-brain h-3.5 w-3.5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Deep Learning</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>CogniCore.AI</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e60f1bd-bde0-4ec4-8c23-24383a8b650a_800w.jpg)] bg-cover hover:scale-105 transition-transform duration-500" style={{}}>
</div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Process Engine</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>FlowMaster</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac4a631c-975f-4482-9cef-2a1f99a48178_800w.jpg)] bg-cover hover:scale-105 transition-transform duration-500" style={{}}>
</div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Data Intelligence</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>DataMind Pro</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0129262d-84f8-4262-b816-efd622faf4e8_800w.jpg)] bg-cover hover:scale-105 transition-transform duration-500">
</div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Cyber Defense</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>SecureGuard AI</p>
</div>
</article>
</div>
</div>
</section>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 mx-auto pt-12 pr-4 pb-6 pl-4 max-w-7xl" id="work">
<div className="flex items-end justify-between mb-6 sm:mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">(01) Ship Log</p>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">Recent builds we’re proud of.</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full px-4 py-2" href="#work">
          Explore all
          <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80">
<img alt="SaaS analytics platform" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a64e6770-50ba-4159-829d-d5f20fab2595_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">SaaS • Analytics</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Telemetry Cloud</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
<div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Telemetry Cloud</h3>
<p className="text-sm text-white/90 leading-relaxed mb-4">Advanced analytics platform for SaaS companies. Real-time insights, custom dashboards, and predictive analytics to drive growth.</p>
<div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Live Project
        </div>
</div>
</div>
</div>
<div className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm cursor-pointer h-80">
<img alt="Developer portal" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc543ce0-b776-4e3a-a6d5-933229659050_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">DevEx • Docs</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Launchpad Portal</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="absolute inset-0 backdrop-blur-md bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
<div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Launchpad Portal</h3>
<p className="text-sm text-white/90 leading-relaxed mb-4">Comprehensive developer experience platform with interactive documentation, API testing, and seamless onboarding flows.</p>
<div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
          In Development
        </div>
</div>
</div>
</div>
<div className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm cursor-pointer h-80">
<img alt="AI code assistant" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/51178af2-893c-4b8c-98ab-8023bddbc403_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">AI • Product</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Pair AI</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="absolute inset-0 backdrop-blur-md bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
<div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Pair AI</h3>
<p className="text-sm text-white/90 leading-relaxed mb-4">Intelligent code assistant with context-aware suggestions, automated testing, and collaborative programming features.</p>
<div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Beta Release
        </div>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm cursor-pointer h-80">
<img alt="Billing platform" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1459a924-0e1f-45a6-a3e5-87850677a537_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Fintech • Platform</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">LedgerFlow</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
<div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">LedgerFlow</h3>
<p className="text-sm text-white/90 leading-relaxed mb-4">Modern billing platform with automated invoicing, subscription management, and real-time financial reporting for growing businesses.</p>
<div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Production Ready
        </div>
</div>
</div>
</div>
<div className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm cursor-pointer h-80">
<img alt="Mobile CI/CD" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d5e0510-9196-4a94-b2d3-5e95eddcbce9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Infra • DevOps</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Runway Pipelines</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="absolute inset-0 backdrop-blur-md bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
<div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Runway Pipelines</h3>
<p className="text-sm text-white/90 leading-relaxed mb-4">Advanced CI/CD pipeline for mobile applications with automated testing, deployment orchestration, and rollback capabilities.</p>
<div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Enterprise Scale
        </div>
</div>
</div>
</div>
<div className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm cursor-pointer h-80">
<img alt="Realtime collaboration" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8e6a60a-b3fb-4b34-83c2-ead36a2abc7f_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Realtime • Collab</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Syncboard</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="absolute inset-0 backdrop-blur-md bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
<div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Syncboard</h3>
<p className="text-sm text-white/90 leading-relaxed mb-4">Real-time collaboration platform with live cursors, shared workspaces, and conflict-free synchronization across teams.</p>
<div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
          Coming Soon
        </div>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow" href="#work">
          View all work
          <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 mx-auto pt-12 pr-4 pb-12 pl-4 max-w-7xl">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="relative z-10 px-5 py-5 sm:p-8 md:p-12">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-white/80 text-xs">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>What we do</span>
</div>
<h2 className="text-5xl sm:text-6xl md:text-7xl text-white font-semibold tracking-tight leading-[1.05]">Capabilities.</h2>
</div>
<div className="mt-8 bg-white/5 backdrop-blur-3xl rounded-2xl ring-1 ring-white/10 overflow-hidden">

<details className="group open:bg-white/5" open="">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(001)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-semibold tracking-tight">Full‑stack product development</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus w-4 h-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 flex items-start gap-4">
<div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
<img alt="Product dev" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1d73ea37-684c-4cd9-97fd-02bf2d7528d4_320w.jpg" style={{}}/>
</div>
<div className="">
<h3 className="text-white font-semibold tracking-tight">From spec to shipping</h3>
<p className="text-neutral-300 text-sm mt-1">Architecture, data, APIs, and slick UIs. We own delivery and keep velocity high with tight CI/CD.</p>
</div>
</div>
<div className="lg:col-span-5">
<p className="text-white/80 text-xs">Toolbox</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">TypeScript</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">React</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">Node</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">Postgres</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">GraphQL</span>
<span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1">+ more</span>
</div>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-amber-400 transition" href="#contact">
                    Get started
                    <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(002)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-semibold tracking-tight">Frontend systems &amp; performance</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus w-4 h-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-[90ch]">Design systems, accessibility, animations, and Lighthouse 95+. We build maintainable interfaces that feel instant.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(003)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-semibold tracking-tight">AI integrations &amp; agents</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus w-4 h-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-[90ch]">Retrieval, function calling, evals, and production monitoring. We make AI useful, reliable, and fast.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(004)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-semibold tracking-tight">Cloud &amp; DevOps</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus w-4 h-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-[90ch]">Infra-as-code, observability, and autoscaling across clouds. Zero-downtime releases and strong security posture.</p>
</div>
</details>
</div>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 max-w-7xl mx-auto pt-12 pr-4 pb-12 pl-4">
<div className="flex items-end justify-between mb-6 sm:mb-8">
<div>
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">(02) Platform</p>
<h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">Scale your business operations.</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full px-4 py-2" href="#contact">
      Explore platform
      <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

<article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-200">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-600 text-xs px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Revenue Engine
        </span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-4">Revenue &amp; Analytics</h3>
<p className="text-neutral-600 text-base leading-relaxed mb-6 flex-1">Transform your business with intelligent revenue tracking, predictive analytics, and automated growth optimization.</p>
<div className="grid grid-cols-2 gap-3">
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-neutral-800 bg-zinc-100 rounded-xl pt-2 pr-3.5 pb-2 pl-3.5">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 text-neutral-700" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
          Real-time Metrics
        </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-neutral-800 bg-zinc-100 rounded-xl pt-2 pr-3.5 pb-2 pl-3.5">
<svg className="lucide lucide-target w-4 h-4 text-neutral-700" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          Growth Targets
        </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-neutral-800 bg-zinc-100 rounded-xl pt-2 pr-3.5 pb-2 pl-3.5">
<svg className="lucide lucide-zap w-4 h-4 text-neutral-700" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          Auto Optimization
        </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-neutral-800 bg-zinc-100 rounded-xl pt-2 pr-3.5 pb-2 pl-3.5">
<svg className="lucide lucide-shield-check w-4 h-4 text-neutral-700" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Secure Platform
        </span>
</div>
</article>

<article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-200">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 text-amber-600 text-xs px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
          Collaboration Hub
        </span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-4">Team Collaboration</h3>
<p className="text-neutral-600 text-base leading-relaxed mb-6 flex-1">Streamline teamwork with unified workspaces, real-time collaboration, and intelligent project management.</p>

<div className="mt-auto relative">
<div className="absolute inset-x-6 -top-1.5 h-12 rounded-xl bg-zinc-100/60 ring-1 ring-neutral-200"></div>
<div className="relative">
<div className="flex items-center gap-3 rounded-2xl bg-zinc-100 ring-1 ring-neutral-200 p-4">
<div className="flex -space-x-2">
<img alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg" style={{}}/>
<img alt="Team member" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc935cb1-ef8c-4e13-8bce-c3fd8e402f63_320w.jpg" style={{}}/>
<div className="h-8 w-8 rounded-full bg-neutral-200 ring-2 ring-white flex items-center justify-center">
<span className="text-xs font-medium text-neutral-600">+3</span>
</div>
</div>
<div className="min-w-0 flex-1">
<p className="text-neutral-900 font-medium tracking-tight text-sm">Team Alpha</p>
<p className="text-xs text-neutral-600">5 active projects • Online</p>
</div>
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
</div>
</div>
</div>
</article>

<article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-200">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center gap-2 rounded-full bg-indigo-400/10 text-indigo-600 text-xs px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
          AI Intelligence
        </span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-4">AI-Powered Insights</h3>
<p className="text-neutral-600 text-base leading-relaxed mb-6 flex-1">Leverage artificial intelligence for predictive analytics, automated decision-making, and strategic insights.</p>

<div className="mt-auto">
<div className="rounded-2xl bg-zinc-100 ring-1 ring-neutral-200 p-4">
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-medium text-neutral-900 flex items-center gap-2">
</p><div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></div>
              AI Analysis
            <p></p>
<span className="text-xs font-medium text-indigo-600">Active</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/60 ring-1 ring-neutral-200">
<span className="text-sm text-neutral-600 flex items-center gap-2">
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                Performance Score
              </span>
<span className="text-sm font-medium text-neutral-900">94%</span>
</div>
<div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/60 ring-1 ring-neutral-200">
<span className="text-sm text-neutral-600 flex items-center gap-2">
<svg className="lucide lucide-lightbulb w-3.5 h-3.5 text-amber-500" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                Recommendations
              </span>
<span className="text-sm font-medium text-neutral-900">12 new</span>
</div>
</div>
</div>
</div>
</article>
</div>

<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-neutral-50 rounded-2xl ring-1 ring-neutral-200">
<div className="">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Ready to transform your operations?</h3>
<p className="text-sm text-neutral-600 mt-1">Join thousands of businesses scaling with our platform.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 px-4 py-2.5 text-sm text-neutral-700 hover:shadow transition" href="#work">
        View case studies
      </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-800 transition shadow" href="#contact">
        Get started
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<footer className="w-full sm:px-6 md:px-10 mx-auto pt-12 pr-4 pb-10 pl-4 max-w-7xl">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-badge-check w-5 h-5 text-white/80" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-2xl font-semibold text-white tracking-tight">Relay Dev Studio</h3>
</div>
<p className="text-white/70 max-w-3xl">We build ambitious products with small, senior teams. Tell us a bit about your project and we’ll get back within one business day.</p>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2.5 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Booking Q4
                      </div>
<h4 className="text-white font-semibold tracking-tight">Start a project</h4>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Senior engineers and designers only — no handoffs, no fluff.</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Transparent weekly demos, metrics, and delivery plans.</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Security, accessibility, and performance baked-in.</span>
</li>
</ul>
<div className="flex items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 text-white hover:text-amber-300 transition" href="mailto:hello@relay.dev">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                          hello@relay.dev
                        </a>
<span className="text-white/20">•</span>
<a className="inline-flex items-center gap-2 text-white hover:text-amber-300 transition" href="tel:+14155551234">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                          +1 (415) 555‑1234
                        </a>
</div>
</div>
<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4" id="contact-form">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1" htmlFor="name">Your name</label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1" htmlFor="email">Email</label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1" htmlFor="company">Company</label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" id="company" name="company" placeholder="Acme Inc." type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1" htmlFor="project-type">Project type</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" id="project-type" name="projectType">
<option className="bg-neutral-900" value="product">New product build</option>
<option className="bg-neutral-900" value="feature">Feature delivery</option>
<option className="bg-neutral-900" value="advisory">Advisory / audit</option>
<option className="bg-neutral-900" value="ai">AI integration</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-white/80 mb-1" htmlFor="message">What are you building?</label>
<textarea className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" id="message" name="message" placeholder="A few sentences about your goals, timeline, and success metrics." rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex gap-2 text-xs text-white/70 items-center">
<input className="h-4 w-4 rounded bg-white/10 border-white/20 text-amber-400 focus:ring-amber-400/60" id="nda" name="nda" type="checkbox"/>
<label className="" htmlFor="nda">Please send an NDA</label>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-2 ring-1 ring-amber-300 hover:bg-amber-300 transition text-sm font-medium text-neutral-900 bg-amber-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                            Send request
                          </button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
<div className="">
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Services</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className=""><a className="text-neutral-300 hover:text-white transition inline-flex items-center gap-2" href="#work"> Product Development</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition inline-flex items-center gap-2" href="#work"> Frontend Systems</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition inline-flex items-center gap-2" href="#work"> AI &amp; Agents</a></li>
<li className=""><a className="hover:text-white transition inline-flex items-center gap-2 text-neutral-300" href="#work"> Cloud &amp; DevOps</a></li>
</ul>
</div>
<div>
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Resources</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white transition" href="#work">Case Studies</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#">Playgrounds</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#">Open Source</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#">Guides</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Company</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white transition" href="#">About</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#">Principles</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#contact">Contact</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="uppercase text-xs text-white/80 tracking-[0.2em]">Stay in touch</h4>
<form className="mt-3 flex items-center gap-2" id="subscribe">
<div className="relative flex-1">
<svg className="lucide lucide-mail w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-xs text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-9" name="subscribeEmail" placeholder="you@example.com" required="" type="email"/>
</div>
<button className="inline-flex gap-2 ring-1 ring-white/80 hover:bg-amber-300 hover:ring-amber-200 transition text-xs font-medium text-neutral-900 bg-white rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 items-center" type="submit">
                  
                  Join
                </button>
</form>
<div className="mt-4 flex items-center gap-3">
<a aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-github w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-twitter w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-linkedin w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<p className="text-white/60 text-sm">© <span id="year">2025</span> Relay Dev Studio. All rights reserved.</p>
<div className="flex items-center gap-4 text-white/60 text-sm">
<a className="hover:text-white transition" href="#">Privacy</a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition" href="#">Terms</a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition inline-flex items-center gap-1" href="#">
<svg className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg> Back to top
              </a>
</div>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"></div>
<div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl"></div>
</div>
</footer>

<div aria-live="polite" className="hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50" id="toast" role="status">
<div className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 text-white px-4 py-3 ring-1 ring-white/10 shadow-xl">
<svg className="lucide lucide-check-circle2 w-5 h-5 text-emerald-400" data-lucide="check-circle2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">Thanks — we’ll be in touch shortly.</span>
</div>
</div>


    </>
  );
}
