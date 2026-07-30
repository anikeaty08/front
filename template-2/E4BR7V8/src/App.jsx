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
      const tz = 'America/Los_Angeles';
      const timeEl = document.getElementById('tz-time');
      const offsetEl = document.getElementById('tz-offset');

      function getGMTOffsetLabel(date) {
        try {
          const fmt = new Intl.DateTimeFormat('en', { timeZone: tz, timeZoneName: 'shortOffset', hour: '2-digit' });
          const parts = fmt.formatToParts(date);
          const tzPart = parts.find(p => p.type === 'timeZoneName');
          if (tzPart && /GMT[+-]\d+/.test(tzPart.value)) return '(' + tzPart.value + ')';
        } catch (e) {}
        try {
          const fmt = new Intl.DateTimeFormat('en', { timeZone: tz, timeZoneName: 'short', hour: '2-digit' });
          const parts = fmt.formatToParts(date);
          const tzPart = parts.find(p => p.type === 'timeZoneName');
          if (tzPart) {
            const m = tzPart.value.match(/GMT[+-]\d+/);
            if (m) return '(' + m[0] + ')';
          }
        } catch (e) {}
        // Fallback: approximate via offset minutes
        const dtf = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const parts = dtf.formatToParts(date);
        const y = parts.find(p => p.type === 'year').value;
        const M = parts.find(p => p.type === 'month').value;
        const d = parts.find(p => p.type === 'day').value;
        const h = parts.find(p => p.type === 'hour').value;
        const m = parts.find(p => p.type === 'minute').value;
        const s = parts.find(p => p.type === 'second').value;
        const localAsUTC = new Date(`${y}-${M}-${d}T${h}:${m}:${s}Z`);
        const minutes = Math.round((localAsUTC - date) / 60000);
        const sign = minutes >= 0 ? '+' : '-';
        const hrs = String(Math.floor(Math.abs(minutes) / 60));
        return `(GMT${sign}${hrs})`;
      }

      function tick() {
        const now = new Date();
        const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        timeEl.textContent = fmt.format(now);
        if (offsetEl && !offsetEl.dataset.locked) {
          offsetEl.textContent = getGMTOffsetLabel(now);
          offsetEl.dataset.locked = 'true';
        }
        setTimeout(tick, 1000);
      }

      tick();
      try { window.lucide && window.lucide.createIcons && window.lucide.createIcons(); } catch (e) {}
    })();
  


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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="pSxbKYCCk7vGhrLFRLrG"></div>
</div>
<section className="relative overflow-hidden">

<div className="relative">
<div className="mx-auto mt-0 flex w-full max-w-4xl justify-center">
<div className="relative flex flex-col items-center">
<div className="h-24 w-7 bg-neutral-700 rounded-b-md mix-blend-multiply"></div>
<div className="-mt-1 h-6 w-12 rounded-md bg-neutral-900 shadow-lg shadow-neutral-900/20"></div>
<div className="-mt-2 h-3 w-8 rounded-b-xl bg-neutral-200 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.15)]"></div>
</div>
</div>
</div>

<div className="relative -mt-2 w-full max-w-4xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white border-neutral-200 rounded-[32px] mr-auto mb-12 ml-auto">
<div className="sm:p-8 md:p-10 pt-6 pr-6 pb-6 pl-6">


<div className="flex gap-4 flex-wrap mb-8 items-center justify-between">
<div className="flex items-center gap-3 text-sm">
<div className="flex items-center gap-2 text-neutral-700">
<svg className="lucide lucide-map-pin h-4 w-4 text-neutral-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">Located in <span className="font-medium text-neutral-800 font-geist">San Francisco</span> • Available Worldwide</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm">
<svg className="lucide lucide-globe h-4 w-4 text-neutral-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-neutral-700 font-geist">Local Time <span className="text-neutral-500" data-locked="true" id="tz-offset">(PST)</span></span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock h-4 w-4 text-neutral-400 hidden sm:block" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist-mono text-xl sm:text-2xl tracking-tight text-neutral-900" id="tz-time">20:56:37</span>
</div>

</div>

<h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-medium tracking-tighter">
                        I'm Alex,<img alt="Alex portrait" className="inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70f42fcd-9df2-4ed0-aaa4-6582ce1171fa_320w.jpg" /> a product designer specialized in startups <img alt="SaaS dashboard preview" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-14 md:w-20 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8ba0c135-da13-4a5f-ac02-43049ab39454_320w.jpg" /> and AI
                    </h1>

<p className="max-w-2xl sm:text-lg text-base text-neutral-600 font-geist mt-4">
          I craft digital experiences that engage users, drive conversions, and deliver measurable results.
        </p>

<div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-8">
<a className="group inline-flex items-center justify-center gap-3 shadow-indigo-600/20 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white font-geist bg-gradient-to-tr from-indigo-600 to-blue-600 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#contact">Start a Project<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span></a>
<a className="inline-flex items-center justify-center transition-colors hover:bg-neutral-100 text-base font-medium text-neutral-800 font-geist bg-neutral-100/60 border-neutral-200 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#work">Portfolio</a>
</div>

<div className="flex text-sm bg-neutral-50/80 rounded-2xl mt-10 pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-neutral-200 px-2.5 py-1 text-xs text-neutral-700">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="font-geist">Available</span>
</span>
<div className="hidden sm:flex items-center gap-2 text-neutral-600">
<svg className="lucide lucide-map-pin h-4 w-4 text-neutral-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist"><span className="font-medium text-neutral-800">Creative Studio</span> • San Francisco, CA</span>
</div>
</div>
<a className="group inline-flex items-center gap-1.5 text-neutral-900" href="tel:+14155551234">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="font-geist tracking-tight text-lg sm:text-xl font-medium">(415) 555-1234</span>
</a>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 ring-1 ring-neutral-200 bg-white rounded-full px-3 py-1.5 text-neutral-800 transition-colors hover:text-indigo-600" href="mailto:hello@creativestudio.com">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-geist font-medium">Contact</span>
</a>
</div>
</div><title className="font-geist">Selected Work</title><section className="mt-10" id="portfolio">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">(01) Selected Work</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium" style={{}}>A few projects I'm proud of.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#work">
          View Portfolio
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `16px`, color: `rgb(64, 64, 64)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Cloud Analytics dashboard project" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">SaaS • Product</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Cloud Analytics</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="E-commerce platform" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60f49edd-2009-43cf-a12a-d82fd91aae5e_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">E-commerce • Platform</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Shop Pro</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Portfolio website" className="h-48 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27aa90c0-b947-4bfd-b8da-7cf0ab291ab1_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Portfolio • Website</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Creative Hub</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Product launch landing page" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b19e7d3a-309c-4d55-9373-80ca043c0f49_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Platform • Website</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Boltshift Launch</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Mobile app design" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a76e4f7e-e0f8-4732-8b99-5b3abe6fd91d_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Mobile • App</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">FitTracker</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Data visualization" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cac77434-d322-40be-a298-4e2198a61175_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Data • Visualization</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">DataFlow</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Design system" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7df94c66-5d1e-4235-a476-1d2d8881a456_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Design • System</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Nexus System</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Brand identity and campaign visuals" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1350108-f0ef-4f66-83ae-fe50447f6f74_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Identity • Campaign</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Quotient Rebrand</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#work">
<img alt="Web application" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68a7825c-0f07-4225-a8e0-d22929426aa3_800w.jpg" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Web • Application</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">TaskFlow Pro</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist" href="#work">
          View All Work
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `16px`, color: `rgb(64, 64, 64)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section><section className="mt-10">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">(02) About Me</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium" style={{}}>Creating with purpose and passion.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#work">
          View Resume
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `16px`, color: `rgb(64, 64, 64)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col gap-4">
<div className="relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm">
<img alt="Alex at work" className="h-80 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70f42fcd-9df2-4ed0-aaa4-6582ce1171fa_800w.jpg" />
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-2xl shadow-sm">
<img alt="Design process" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3a00318-96f3-4f44-961e-a22e2a0b2bc6_800w.jpg" />
</div>
<div className="relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-2xl shadow-sm">
<img alt="Creative workspace" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7de1229a-6a54-423d-a41c-2377d871bf2c_800w.jpg" />
</div>
</div>
</div>

<div className="flex flex-col">
<div className="space-y-6">
<div className="">
<h4 className="text-lg font-medium text-neutral-900 font-geist mb-3">Hello, I'm Alex</h4>
<p className="text-neutral-600 leading-relaxed font-geist">
                I'm a passionate designer and developer based in New York with over 8 years of experience creating digital experiences that matter. I believe great design is not just about making things look beautiful—it's about solving real problems for real people.
              </p>
</div>
<div className="">
<h5 className="text-base font-medium text-neutral-900 font-geist mb-3">My Approach</h5>
<p className="text-neutral-600 leading-relaxed font-geist">
                I combine strategic thinking with creative execution to deliver solutions that drive business results. Every project starts with understanding your users, your goals, and the problems we're solving together.
              </p>
</div>
<div className="">
<h5 className="text-base font-medium text-neutral-900 font-geist mb-3">Skills & Expertise</h5>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-600 font-geist">UI/UX Design</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-600 font-geist">Frontend Development</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-600 font-geist">Product Strategy</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-600 font-geist">Brand Identity</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-600 font-geist">Design Systems</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-600 font-geist">User Research</span>
</div>
</div>
</div>
<div className="">
<h5 className="text-base font-medium text-neutral-900 font-geist mb-3">When I'm Not Designing</h5>
<p className="text-neutral-600 leading-relaxed font-geist">
                You'll find me exploring new coffee shops around the city, hiking upstate, or experimenting with new design tools. I'm always curious about emerging technologies and how they can improve the human experience.
              </p>
</div>
<div className="pt-4">
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 font-geist">8+ Years Experience</span>
<span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 font-geist">50+ Projects Delivered</span>
<span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 font-geist">Based in NYC</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist" href="#contact">
          Let's Work Together
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `16px`, color: `rgb(64, 64, 64)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section><section className="mt-12">
<div className="relative overflow-hidden ring-1 ring-neutral-800 bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-12 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_1600w.jpg)] bg-cover pt-5 pr-5 pb-5 pl-5">

<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-white/80 text-xs">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-geist">What I do</span>
</div>
<div className="flex items-baseline gap-2">
<h2 className="sm:text-6xl md:text-7xl leading-[1.05] text-5xl text-white tracking-tight font-geist font-medium" style={{}}>Services.</h2>
</div>
</div>

<div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl mt-8 backdrop-blur-3xl">

<details className="group open:bg-white/5" open="">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(001)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Device onboarding & setup</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 flex items-start gap-4">
<div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
<img alt="Setup preview" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6bc45e0f-4e92-4170-bbae-4ad83a7d4f83_320w.jpg" />
</div>
<div className="">
<h3 className="text-white font-medium tracking-tight font-geist">Seamless start, tuned for focus</h3>
<p className="text-neutral-300 text-sm mt-1 font-geist">We unbox, configure OS, migrate your notes and docs, and tailor profiles for reading, writing, and deep work.</p>
</div>
</div>
<div className="lg:col-span-5">
<div className="flex items-center justify-between">
<p className="text-white/80 text-xs font-geist">Categories</p>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">E‑ink tuning</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">App profiles</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Cloud sync</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Shortcuts</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Wi‑Fi</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Security</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">Automations</span>
<span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1 font-geist">6+</span>
</div>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-amber-400 transition-colors font-geist" href="#">
            Get started
            <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(002)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Workspace optimization</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist">We map your daily rhythms and build layouts, themes, and quick actions that reduce friction and boost flow.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(003)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Team training</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist">Hands‑on sessions covering best practices, shortcuts, and shared libraries for consistent, efficient work.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px] font-geist">(004)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist">Priority support</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist">Direct line to our team with next‑business‑day replies, replacement fast‑track, and proactive check‑ins.</p>
</div>
</details>
</div>
</div>
</div>
</section><section className="mt-12">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">

<div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">

<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<h3 className="text-2xl font-medium text-white tracking-tight font-geist">Alex Chen</h3>
</div>
<p className="text-neutral-400 text-sm leading-relaxed font-geist max-w-sm">
            Creating exceptional digital experiences that engage users and drive business results. Based in San Francisco, working worldwide.
          </p>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-6 py-3 text-sm font-medium shadow-sm hover:bg-amber-400 transition-colors font-geist" href="#contact">
              Start a Project
              <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4 font-geist">Services</h4>
<ul className="space-y-3">
<li className=""><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">UI/UX Design</a></li>
<li className=""><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Product Strategy</a></li>
<li className=""><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Design Systems</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Brand Identity</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Frontend Development</a></li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4 font-geist">Work</h4>
<ul className="space-y-3">
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Portfolio</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Case Studies</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Process</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="#">Testimonials</a></li>
</ul>
</div>


<div className="lg:col-span-2">
<h4 className="text-white font-medium mb-4 font-geist">Connect</h4>
<ul className="space-y-3">
<li className="">
<a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="mailto:hello@creativestudio.com">hello@creativestudio.com</a>
</li>
<li className="">
<a className="text-neutral-400 hover:text-white transition-colors text-sm font-geist" href="tel:+14155551234">(415) 555-1234</a>
</li>
</ul>

<div className="mt-4 flex items-center gap-3">
<a className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect className="" height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" href="#">
<svg className="lucide lucide-github" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>

<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4 text-sm text-neutral-400 font-geist">
<span className="">© 2024 Creative Studio. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm">
<span className="inline-flex items-center gap-2 text-neutral-400 font-geist">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Available for new projects
          </span>
<span className="text-neutral-500">•</span>
<span className="text-neutral-400 font-geist">San Francisco, CA</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

</section>


    </>
  );
}
