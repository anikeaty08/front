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


      // Initialize icons
      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js
      const ctx = document.getElementById('revenueChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
              {
                data: [4200, 5300, 4800, 6100, 7200, 8240],
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.05)',
                pointRadius: 0,
                tension: 0.4,
                fill: true,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { 
                enabled: true, 
                displayColors: false, 
                backgroundColor: 'rgba(0,0,0,0.9)', 
                titleColor: '#fff', 
                bodyColor: '#fff',
                borderColor: '#3f3f46',
                borderWidth: 1
              }
            },
            scales: {
              x: { display: false },
              y: { display: false }
            },
            elements: {
              point: {
                hoverRadius: 6,
                hoverBackgroundColor: '#ffffff',
                hoverBorderColor: '#000000',
                hoverBorderWidth: 2
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            }
          }
        });
      }
    


    /* 
      Sequence animation on scroll when visible. Usage:
      1) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
    */
    (function () {
      // Inject CSS for paused/running states
      const style = document.createElement("style");
      style.textContent = `
        /* Default: paused */
        .animate-on-scroll { animation-play-state: paused !important; }
        /* Activated by JS */
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
          window.__inViewIO.observe(el); // observing twice is a no-op
        });
      };
  
      document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
    })();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-15 brightness-50 blur-lg"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="K7xzrAoejHe2lHXqTJzm"></div></div>

<div className="bg-zinc-600 opacity-20 w-2 h-2 rounded-full absolute top-20 left-10"></div>
<div className="absolute top-40 right-20 w-1 h-1 bg-zinc-500 rounded-full opacity-30"></div>
<div className="absolute top-80 left-1/4 w-1.5 h-1.5 bg-zinc-600 rounded-full opacity-25"></div>

<header className="xl:my-8 mt-8 mb-8">
<nav className="flex [animation:fadeSlideIn_1s_ease-out_0.1s_both] lg:bg-zinc-950/40 lg:backdrop-blur-xl lg:border-white/10 lg:pl-8 lg:pt-2 lg:pb-2 lg:pr-2 max-w-7xl border-zinc-800 border rounded-3xl mr-auto ml-auto pt-3 pr-4 pb-3 pl-8 gap-x-6 gap-y-6 items-center justify-between" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; nav:nth-of-type(1)">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b91ee2e8-852b-4a11-a10a-2f4e6a4bbb02_1600w.png)] bg-cover rounded invert" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; a:nth-of-type(1)" href="/home"></a>
<div className="hidden gap-8 md:flex items-center">
<a className="xl:text-base text-sm text-white tracking-tight font-geist" href="/home">Home</a><a className="hover:text-white transition-colors xl:text-base text-sm text-zinc-400 tracking-tight font-geist" href="/features">Features</a>
<a className="hover:text-white transition-colors xl:text-base text-sm text-zinc-400 tracking-tight font-geist" href="/pricing">Pricing</a>
<a className="hover:text-white transition-colors xl:text-base text-sm text-zinc-400 tracking-tight font-geist" href="/resources">Resources</a>
</div>
<a className="inline-flex items-center gap-2 transition hover:border-zinc-700 hover:bg-zinc-900 hover:scale-105 transform xl:text-base text-sm text-white tracking-tight font-geist border-zinc-800 border rounded-xl pt-3 pr-6 pb-3 pl-6" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; a:nth-of-type(2)" href="#get-started">
    Get started
  </a>
</nav>
</header>

<section className="relative">
<div className="lg:px-8 lg:pt-16 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1)">
<div className="text-center">
<div className="inline-flex text-xs text-zinc-300 tracking-tight font-geist bg-zinc-900/30 border-zinc-800/50 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-xl gap-x-2 gap-y-2 items-center [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-violet-400"></span>
  New: Auto-reconcile payments with one click
</div>
<h1 className="sm:text-7xl lg:text-8xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] text-5xl font-light text-white tracking-tighter font-geist mt-8">
  Get Paid
  Faster,<br className=""/><span className="bg-clip-text font-light text-transparent tracking-tighter font-geist bg-gradient-to-r from-zinc-300 via-white to-zinc-300">Stress Less.</span>
</h1>
<p className="[animation:fadeSlideIn_1s_ease-out_0.1s_both] text-lg text-zinc-400 tracking-tight font-geist max-w-2xl mt-6 mr-auto ml-auto">
        A professional invoicing platform that helps you send beautiful invoices, automate reminders, and track
        payments—without the busywork.
      </p>
<div className="flex flex-col gap-4 sm:flex-row sm:justify-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] mt-10 gap-x-4 gap-y-4 items-center">
<a className="tracking-tight font-geist" href="#" id="get-started" onmousedown="this.style.boxShadow='0 0 0.6em .25em var(--glow-color), 0 0 2.5em 2em var(--glow-spread-color), inset 0 0 .5em .25em var(--glow-color)'" onmouseout="this.style.color='var(--glow-color)'; this.style.backgroundColor='var(--btn-color)'; this.style.boxShadow='0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)'" onmouseover="this.style.color='var(--btn-color)'; this.style.backgroundColor='var(--glow-color)'; this.style.boxShadow='0 0 1em .25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)'" onmouseup="this.style.boxShadow='0 0 1em .25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)'" style={{'--glow-color': 'rgb(217, 176, 255)', '--glow-spread-color': 'rgba(191, 123, 255, 0.781)', '--enhanced-glow-color': 'rgb(231, 206, 255)', '--btn-color': 'rgb(100, 61, 136)', border: '.25em solid var(--glow-color)', padding: '1em 3em', color: 'var(--glow-color)', fontSize: '15px', fontWeight: 'bold', backgroundColor: 'var(--btn-color)', borderRadius: '1em', boxShadow: '0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)', textShadow: '0 0 .5em var(--glow-color)', position: 'relative', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
    Start free trial
  </a>
</div>
</div>

<div className="mt-16 relative">
<div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-zinc-800/50 via-zinc-700/50 to-zinc-800/50 blur-2xl">
</div>
<div className="hover:shadow-3xl transition-all duration-700 hover:bg-zinc-950/30 hover:border-white/20 bg-zinc-950/20 border-white/10 border rounded-xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll pt-4 pr-4 pb-4 pl-4 relative shadow-2xl backdrop-blur-xl">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

<aside className="lg:col-span-4 rounded-lg border border-white/10 bg-zinc-900/20 backdrop-blur-xl p-4 hover:bg-zinc-900/30 hover:border-white/20 transition-all duration-500 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex items-center gap-2 text-zinc-400 text-xs mb-3">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="font-geist tracking-tight">Invoices</span>
</div>
<h3 className="text-2xl text-white font-geist font-light tracking-tighter">Create New Invoice</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist tracking-tight">Fill in invoice details</p>
<div className="mt-3 inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 backdrop-blur-sm px-2 py-1 text-xs text-zinc-300 font-geist tracking-tight">
<svg className="lucide lucide-info w-3.5 h-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              You can save unfinished invoice as draft and complete later.
            </div>
<div className="mt-4 space-y-3">

<details className="group rounded-md border border-white/10 bg-zinc-950/20 backdrop-blur-sm open:bg-zinc-900/30 hover:bg-zinc-900/25 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2">
<span className="text-sm text-white font-geist tracking-tight">My Details</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-3 pb-3 space-y-3">
<div className="grid grid-cols-2 gap-3">
<label className="text-xs text-zinc-400 font-geist tracking-tight">Business Name
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="Invoicely Inc." type="text"/>
</label>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Email
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="billing@invoicely.com" type="email"/>
</label>
</div>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Address
              <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="123 Market St, San Francisco, CA" type="text"/>
</label>
</div>
</details>
<details className="group rounded-md border border-white/10 bg-zinc-950/20 backdrop-blur-sm open:bg-zinc-900/30 hover:bg-zinc-900/25 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2">
<span className="text-sm text-white font-geist tracking-tight">Client Details</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-3 pb-3 space-y-3">
<div className="grid grid-cols-2 gap-3">
<label className="text-xs text-zinc-400 font-geist tracking-tight">Client Name
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="Tony Stark" type="text"/>
</label>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Email
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="tony@stark.com" type="email"/>
</label>
</div>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Address
              <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="200 Park Ave, New York, NY" type="text"/>
</label>
</div>
</details>
<details className="group rounded-md border border-white/10 bg-zinc-950/20 backdrop-blur-sm open:bg-zinc-900/30 hover:bg-zinc-900/25 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2">
<span className="text-sm text-white font-geist tracking-tight">Invoice Details</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-3 pb-3 space-y-3">
<div className="grid grid-cols-2 gap-3">
<label className="text-xs text-zinc-400 font-geist tracking-tight">Invoice #
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="INV-12346" type="text"/>
</label>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Project
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="Fillo Product Design" type="text"/>
</label>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="text-xs text-zinc-400 font-geist tracking-tight">Issued Date
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" type="date"/>
</label>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Due Date
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" type="date"/>
</label>
</div>
</div>
</details>
<details className="group rounded-md border border-white/10 bg-zinc-950/20 backdrop-blur-sm open:bg-zinc-900/30 hover:bg-zinc-900/25 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2">
<span className="text-sm text-white font-geist tracking-tight">Payment Details</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-3 pb-3 space-y-3">
<label className="text-xs text-zinc-400 font-geist tracking-tight">Payment Method
              <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="EFT Bank Transfer" type="text"/>
</label>
<div className="grid grid-cols-2 gap-3">
<label className="text-xs text-zinc-400 font-geist tracking-tight">Account Name
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="Invoicely Inc." type="text"/>
</label>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Account Number
                <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="991188343445123" type="text"/>
</label>
</div>
</div>
</details>
<details className="group rounded-md border border-white/10 bg-zinc-950/20 backdrop-blur-sm open:bg-zinc-900/30 hover:bg-zinc-900/25 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2">
<span className="text-sm text-white font-geist tracking-tight">Add Notes</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-3 pb-3">
<textarea className="w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="Add any payment terms or notes for the client." rows="3"></textarea>
</div>
</details>
<details className="group rounded-md border border-white/10 bg-zinc-950/20 backdrop-blur-sm open:bg-zinc-900/30 hover:bg-zinc-900/25 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2">
<span className="text-sm text-white font-geist tracking-tight">Add Signature</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-3 pb-3 text-xs text-zinc-400 font-geist tracking-tight">
                  Upload or draw a signature during final review.
                </div>
</details>
<details className="group rounded-md border border-white/10 bg-zinc-950/20 backdrop-blur-sm open:bg-zinc-900/30 hover:bg-zinc-900/25 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2">
<span className="text-sm text-white font-geist tracking-tight">Email Details</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-3 pb-3 space-y-3">
<label className="text-xs text-zinc-400 font-geist tracking-tight">Subject
              <input className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="Invoice from Invoicely Inc." type="text"/>
</label>
<label className="text-xs text-zinc-400 font-geist tracking-tight">Message
              <textarea className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950/30 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:bg-zinc-950/40 transition-all duration-300" placeholder="Hi Tony, please find your invoice attached. Thanks!" rows="3"></textarea>
</label>
</div>
</details>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white/90 backdrop-blur-sm px-4 py-2 text-sm text-black transition hover:bg-white hover:scale-105 transform font-geist tracking-tight shadow-lg">
<svg className="lucide lucide-save w-4 h-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
          Save Invoice
        </button>
</div>
</aside>

<section className="lg:col-span-8 hover:bg-zinc-900/30 hover:border-white/20 transition-all duration-500 bg-zinc-900/20 border-white/10 border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm text-white font-geist tracking-tight">Preview</span>
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/20 backdrop-blur-sm px-2 py-1 text-xs text-zinc-300 font-geist tracking-tight hover:bg-black/30 transition-colors duration-300">
<svg className="lucide lucide-file-down w-3.5 h-3.5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg> PDF
          </span>
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/20 backdrop-blur-sm px-2 py-1 text-xs text-zinc-300 font-geist tracking-tight hover:bg-black/30 transition-colors duration-300">
<svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Email
          </span>
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/20 backdrop-blur-sm px-2 py-1 text-xs text-zinc-300 font-geist tracking-tight hover:bg-black/30 transition-colors duration-300">
<svg className="lucide lucide-credit-card w-3.5 h-3.5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Online Payment
          </span>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur-sm px-3 py-2 text-sm text-black transition hover:bg-white hover:scale-105 transform font-geist tracking-tight shadow-lg">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
          Save Invoice
        </button>
</div>

<div className="text-black bg-white/95 backdrop-blur-sm border-zinc-200 border rounded-xl mt-4 pt-6 pr-6 pb-6 pl-6 shadow-xl">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-2xl font-geist font-light tracking-tighter">Invoice</h2>
<div className="mt-1 text-sm text-zinc-600 font-geist tracking-tight">#24789</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-2 py-1">
<span className="h-5 w-5 rounded-md bg-white inline-flex items-center justify-center">
<svg className="lucide lucide-file-text w-3.5 h-3.5 text-black" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</span>
<span className="text-sm text-white font-geist tracking-tight">Invoicely</span>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
<div className="">
<div className="text-zinc-500 font-geist tracking-tight">Project</div>
<div className="font-geist tracking-tight">E-commerce Platform</div>
</div>
<div className="">
<div className="text-zinc-500 font-geist tracking-tight">Issued Date</div>
<div className="font-geist tracking-tight">Mar 10, 2025</div>
</div>
<div className="">
<div className="text-zinc-500 font-geist tracking-tight">Due Date</div>
<div className="font-geist tracking-tight">Mar 25, 2025</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
<div className="">
<div className="text-zinc-500 mb-2 font-geist tracking-tight">From</div>
<div className="font-geist tracking-tight">Sarah Thompson</div>
<div className="text-zinc-600 font-geist tracking-tight">Downtown Square, Austin, TX</div>
<div className="text-zinc-600 font-geist tracking-tight">ABN 67890</div>
<div className="text-zinc-600 font-geist tracking-tight">sarah@designco.com</div>
<div className="text-zinc-600 font-geist tracking-tight">+1 512 555 0123</div>
<div className="text-zinc-600 font-geist tracking-tight">designco.com</div>
</div>
<div className="md:text-right">
<div className="text-zinc-500 mb-2 font-geist tracking-tight">To</div>
<div className="font-geist tracking-tight">Alex Rodriguez</div>
<div className="text-zinc-600 font-geist tracking-tight">Tech District, San Francisco, CA</div>
<div className="text-zinc-600 font-geist tracking-tight">alex@techcorp.com</div>
<div className="text-zinc-600 font-geist tracking-tight">(415) 789-4567</div>
<div className="text-zinc-600 font-geist tracking-tight">techcorp.com</div>
</div>
</div>
<div className="mt-6">
<div className="rounded-lg border border-zinc-200">
<div className="grid grid-cols-5 items-center px-4 py-2 text-xs uppercase tracking-wider text-zinc-500">
<div className="col-span-2 font-geist tracking-tight">Description</div>
<div className="text-right font-geist tracking-tight">Units</div>
<div className="text-right font-geist tracking-tight">Price</div>
<div className="text-right font-geist tracking-tight">Tax</div>
</div>
<div className="h-px w-full bg-zinc-200"></div>
<div className="grid grid-cols-5 items-center px-4 py-3 text-sm">
<div className="col-span-2 text-zinc-800 font-geist tracking-tight">Frontend Development</div>
<div className="text-right text-zinc-700 font-geist tracking-tight">1</div>
<div className="text-right text-zinc-800 font-geist tracking-tight">$3,200.00</div>
<div className="text-right text-zinc-800 font-geist tracking-tight">$320.00</div>
</div>
<div className="grid grid-cols-5 items-center px-4 py-3 text-sm border-t border-zinc-200">
<div className="col-span-2 text-zinc-800 font-geist tracking-tight">Backend API Development
          </div>
<div className="text-right text-zinc-700 font-geist tracking-tight">1</div>
<div className="text-right text-zinc-800 font-geist tracking-tight">$2,800.00</div>
<div className="text-right text-zinc-800 font-geist tracking-tight">$280.00</div>
</div>
<div className="grid grid-cols-5 items-center px-4 py-3 text-sm border-t border-zinc-200">
<div className="col-span-2 text-zinc-800 font-geist tracking-tight">UX/UI Design</div>
<div className="text-right text-zinc-700 font-geist tracking-tight">1</div>
<div className="text-right text-zinc-800 font-geist tracking-tight">$1,500.00</div>
<div className="text-right text-zinc-800 font-geist tracking-tight">$150.00</div>
</div>
<div className="border-t border-zinc-200 px-4 py-3">
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-700 font-geist tracking-tight">Total Amount</span>
<span className="text-zinc-900 font-geist tracking-tight">$8,250.00</span>
</div>
</div>
</div>
</div>
<div className="mt-4 rounded-md border border-zinc-200 bg-zinc-50/50 backdrop-blur-sm p-3 text-sm text-zinc-700 font-geist tracking-tight">
      Note: Payment due within 15 days. Additional charges may apply for rushed deliveries or scope changes.
    </div>
<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
<div className="">
<div className="text-zinc-500 mb-2 font-geist tracking-tight">Payment Method</div>
<div className="text-zinc-800 font-geist tracking-tight">Wire Transfer</div>
<div className="text-zinc-600 font-geist tracking-tight">Account Name: Sarah Thompson</div>
<div className="text-zinc-600 font-geist tracking-tight">Routing: 456789</div>
<div className="text-zinc-600 font-geist tracking-tight">Account Number: 1234567890123456</div>
</div>
<div className="md:text-right">
<div className="h-10"></div>
<div className="text-zinc-800 font-geist tracking-tight">Sarah Thompson</div>
<div className="text-zinc-600 font-geist tracking-tight">Note: Tax amount will be handled
          separately as per agreement.</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900/30 backdrop-blur-sm px-4 py-3 hover:bg-zinc-900/40 transition-colors duration-300">
<div className="flex items-center gap-2 text-sm text-zinc-300 font-geist tracking-tight">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
      Secure payments with instant receipts
    </div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 backdrop-blur-sm px-3 py-2 text-sm text-white transition hover:bg-black/30 hover:scale-105 transform font-geist tracking-tight">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Client view
        </button>
</div>
</section>
</div>
</div>
</div>
</div>
</section>

<section className="border-zinc-800 relative" id="features">
<div aura-emg8ge7n7"="" className="lg:px-8 lg:bg-zinc-950/20 lg:backdrop-blur-xl lg:border-white/10 lg:mt-16 lg:mb-16 lg:pb-8 lg:pt-8 lg:gap-y-0 hover:bg-zinc-950/30 hover:border-white/20 transition-all duration-700 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll data-element-id= max-w-7xl border-zinc-800 border rounded-3xl mt-16 mr-auto mb-16 ml-auto pt-8 pr-6 pb-8 pl-6 gap-x-y-0 gap-y-0">
<div className="mx-auto max-w-2xl text-center">
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-0 mt-0 gap-x-8 gap-y-8">

<div className="col-span-1 flex flex-col md:col-span-2 lg:col-span-3 lg:pt-0 lg:mt-0 lg:pb-0 border-zinc-800 mt-0 mb-8 pt-0 pb-0 gap-x-4 gap-y-4">
<div className="flex items-start justify-between">
<h3 className="text-4xl text-white sm:text-5xl font-geist font-light tracking-tighter animate-on-scroll" style={{animation: 'fadeSlideIn_1s_ease-out_0.1s_both'}}>How Invoicely Works</h3>
<a className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors font-geist tracking-tight text-violet-400" href="#">
          Start free trial
          <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<p className="text-lg text-zinc-400 max-w-2xl font-geist tracking-tight">
        Create, send, and track professional invoices in minutes. Get paid faster with automated reminders and instant
        payments.
      </p>
</div>

<div className="relative">
<div className="absolute -top-6 left-6 flex text-lg text-zinc-300 tracking-tight font-geist bg-white/10 backdrop-blur-sm w-12 h-12 border-white/20 border rounded-full shadow-2xl items-center justify-center z-30 font-medium">
        1</div>
<div className="group overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/30 hover:shadow-xl hover:scale-105 bg-zinc-950/20 backdrop-blur-xl border border-white/10 rounded-xl p-8 relative min-h-[400px] flex flex-col transform">
<div className="pointer-events-none opacity-40 absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(260px 200px at 20% 10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(420px 320px at 110% 120%, rgba(63,63,70,0.35), transparent 60%)'}}>
</div>

<div className="z-10 mt-6 relative flex-1">
<div className="rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm p-4 hover:bg-black/30 transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-zinc-500 font-geist tracking-tight">Create Invoice</div>
<div className="w-2 h-2 rounded-full bg-violet-400"></div>
</div>
<div className="space-y-3">
<div className="h-8 rounded border border-white/10 bg-zinc-900/40 backdrop-blur-sm flex items-center px-3 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="text-xs text-zinc-400 font-geist tracking-tight">Client: Tony Stark</div>
</div>
<div className="h-8 rounded border border-white/10 bg-zinc-900/40 backdrop-blur-sm flex items-center px-3 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="text-xs text-zinc-400 font-geist tracking-tight">Project: Web Development</div>
</div>
<div className="h-12 rounded border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-xs text-zinc-300 font-geist tracking-tight hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-plus w-4 h-4 mr-2" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add line items
              </div>
</div>
</div>
</div>
<div className="z-10 mt-auto">
<h4 className="xl:text-xl xl:tracking-wide text-lg text-white tracking-tight font-geist">Create professional
            invoices</h4>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Use customizable templates to create
            invoices that match your brand in seconds.</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 left-6 flex text-lg text-zinc-300 tracking-tight font-geist bg-white/10 backdrop-blur-sm w-12 h-12 border-white/20 border rounded-full shadow-2xl items-center justify-center z-30 font-medium">
        2</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/20 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/30 hover:shadow-xl hover:scale-105 min-h-[400px] flex flex-col transform">
<div className="pointer-events-none absolute inset-0 opacity-40" style={{background: 'radial-gradient(260px 200px at 20% 10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(420px 320px at 110% 120%, rgba(63,63,70,0.35), transparent 60%)'}}>
</div>

<div className="relative z-10 mt-6 flex-1">
<div className="rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm p-4 hover:bg-black/30 transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-zinc-500 font-geist tracking-tight">Send Invoice</div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<div className="w-2 h-2 rounded-full bg-violet-400"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded border border-white/10 bg-zinc-900/40 backdrop-blur-sm hover:bg-zinc-900/50 transition-colors duration-300">
<svg className="lucide lucide-mail w-4 h-4 text-zinc-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="text-xs text-zinc-300 font-geist tracking-tight">Email sent</div>
</div>
<div className="flex items-center gap-3 p-3 rounded border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-eye w-4 h-4 text-violet-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="text-xs font-geist tracking-tight text-violet-300">Client viewed</div>
</div>
</div>
</div>
</div>
<div className="z-10 mt-auto">
<h4 className="xl:text-xl xl:tracking-wide text-lg text-white tracking-tight font-geist">Send &amp; track
            instantly</h4>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Share secure payment links and track when
            clients view your invoices in real-time.</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 left-6 flex text-lg text-zinc-300 tracking-tight font-geist bg-white/10 backdrop-blur-sm w-12 h-12 border-white/20 border rounded-full shadow-2xl items-center justify-center z-30 font-medium">
        3</div>
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/20 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/30 hover:shadow-xl hover:scale-105 min-h-[400px] flex flex-col transform">
<div className="pointer-events-none absolute inset-0 opacity-40" style={{background: 'radial-gradient(260px 200px at 20% 10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(420px 320px at 110% 120%, rgba(63,63,70,0.35), transparent 60%)'}}>
</div>

<div className="relative z-10 mt-6 flex-1">
<div className="rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm p-4 hover:bg-black/30 transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-zinc-500 font-geist tracking-tight">Payment Status</div>
<div className="px-2 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm">
<div className="text-xs font-geist tracking-tight text-violet-400">Paid</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded border border-violet-700/30 bg-violet-500/10 backdrop-blur-sm hover:bg-violet-500/20 transition-colors duration-300">
<div className="flex items-center gap-3">
<svg className="lucide lucide-credit-card w-4 h-4 text-violet-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<div className="text-xs font-geist tracking-tight text-violet-300">Card payment</div>
</div>
<div className="text-xs text-white font-geist tracking-tight">$3,186</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-400 font-geist tracking-tight">
<span>Processing fee</span>
<span>$95.58</span>
</div>
<div className="h-px bg-white/10"></div>
<div className="flex items-center justify-between text-xs text-white font-geist tracking-tight">
<span className="">Net amount</span>
<span>$3,090.42</span>
</div>
</div>
</div>
</div>
<div className="z-10 mt-auto">
<h4 className="xl:text-xl xl:tracking-wide text-lg text-white tracking-tight font-geist">Get paid automatically
          </h4>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Accept payments online with automated
            reminders and instant notifications when paid.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-zinc-800 relative" id="preview">
<div className="lg:px-8 lg:bg-zinc-950/20 lg:backdrop-blur-xl lg:border-white/10 lg:mt-16 lg:mb-16 lg:pb-8 lg:pt-8 lg:gap-y-0 hover:bg-zinc-950/30 hover-all duration-700 max-w-7xl border-zinc-800 border rounded-3xl mt-16 mr-auto mb-16 ml-auto pt-8 pr-6 pb-8 pl-6 gap-x-y-0 gap-y-0 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-12 gap-x-16 gap-y-16 items-center">
<div className="lg:col-span-5">
<h2 className="text-4xl text-white sm:text-5xl font-geist font-light tracking-tighter">A delightful client
        experience</h2>
<p className="mt-4 text-lg text-zinc-400 font-geist tracking-tight">
        Share a secure link, track views, and offer one-click payment. Your clients see exactly what they need—nothing
        more.
      </p>
<ul className="mt-8 space-y-3 text-sm text-zinc-300">
<li className="flex items-start gap-3 font-geist tracking-tight">
<svg className="lucide lucide-check mt-0.5 h-4 w-4 text-violet-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Custom domains and branding
        </li>
<li className="flex items-start gap-3 font-geist tracking-tight">
<svg className="lucide lucide-check mt-0.5 h-4 w-4 text-violet-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          View and accept estimates as invoices
        </li>
<li className="flex items-start gap-3 font-geist tracking-tight">
<svg className="lucide lucide-check mt-0.5 h-4 w-4 text-violet-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Partial payments and deposits
        </li>
</ul>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur-sm px-4 py-2 text-sm text-black transition hover:bg-white hover:scale-105 transform font-geist tracking-tight shadow-lg" href="#">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Open sample invoice
        </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 backdrop-blur-sm px-4 py-2 text-sm text-white transition hover:bg-black/30 hover:scale-105 transform font-geist tracking-tight" href="#">
<svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
          Explore templates
        </a>
</div>
</div>
<div className="lg:col-span-7">
<div className="relative rounded-xl border border-white/10 bg-zinc-950/20 backdrop-blur-xl p-6 hover:border-white/20 hover:bg-zinc-950/30 hover:shadow-2xl transition-all duration-700 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<div className="lg:col-span-2">
<div className="rounded-lg border border-white/10 bg-zinc-900/20 backdrop-blur-sm p-4 hover:bg-zinc-900/30 transition-colors duration-500">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-white font-geist tracking-tight">Invoice to</div>
<div className="text-xs text-zinc-500 font-geist tracking-tight">INV-2024-118</div>
</div>
<div className="text-sm">
<div className="text-white font-geist tracking-tight">Lumen Works</div>
<div className="text-zinc-400 font-geist tracking-tight">hello@lumen.works</div>
</div>
<div className="mt-4 rounded-md bg-black/20 backdrop-blur-sm border border-white/10 p-4 hover:border-white/20 transition-colors duration-300">
<div className="grid grid-cols-5 text-xs text-zinc-500 uppercase tracking-wider">
<div className="col-span-2 font-geist tracking-tight">Item</div>
<div className="text-right font-geist tracking-tight">Qty</div>
<div className="text-right font-geist tracking-tight">Rate</div>
<div className="text-right font-geist tracking-tight">Amount</div>
</div>
<div className="mt-3 h-px w-full bg-white/10"></div>
<div className="mt-3 grid grid-cols-5 items-center text-sm hover:bg-zinc-800/30 rounded p-2 transition-colors duration-300">
<div className="col-span-2 text-zinc-300 font-geist tracking-tight">Web Design</div>
<div className="text-right text-zinc-400 font-geist tracking-tight">1</div>
<div className="text-right text-zinc-400 font-geist tracking-tight">$2,200</div>
<div className="text-right text-white font-geist tracking-tight">$2,200</div>
</div>
<div className="mt-2 grid grid-cols-5 items-center text-sm hover:bg-zinc-800/30 rounded p-2 transition-colors duration-300">
<div className="col-span-2 text-zinc-300 font-geist tracking-tight">Illustrations</div>
<div className="text-right text-zinc-400 font-geist tracking-tight">3</div>
<div className="text-right text-zinc-400 font-geist tracking-tight">$250</div>
<div className="text-right text-white font-geist tracking-tight">$750</div>
</div>
<div className="mt-4 h-px w-full bg-white/10"></div>
<div className="mt-3 space-y-2 text-sm">
<div className="flex items-center justify-between">
<span className="text-zinc-400 font-geist tracking-tight">Subtotal</span>
<span className="text-zinc-300 font-geist tracking-tight">$2,950</span>
</div>
<div className="flex items-center justify-between">
<span className="text-zinc-400 font-geist tracking-tight">Tax (8%)</span>
<span className="text-zinc-300 font-geist tracking-tight">$236</span>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-3">
<span className="text-white font-geist tracking-tight">Total due</span>
<span className="text-white font-geist tracking-tight">$3,186</span>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/20 backdrop-blur-sm p-4 hover:bg-zinc-900/30 hover:scale-105 transition-all duration-500">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-white font-geist tracking-tight">Client view</div>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 backdrop-blur-sm px-2 py-1 text-xs text-blue-400 border border-blue-500/20 font-geist tracking-tight">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> Live
                      </span>
</div>
<p className="text-xs text-zinc-400 mb-4 font-geist tracking-tight">Secure link with status tracking and
                instant payment.</p>
<div className="grid grid-cols-2 gap-2">
<button className="inline-flex items-center justify-center gap-1 rounded-md bg-white/90 backdrop-blur-sm px-3 py-2 text-xs text-black transition hover:bg-white hover:scale-105 transform font-geist tracking-tight shadow-lg">
<svg className="lucide lucide-send w-3 h-3" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Send
                      </button>
<button className="inline-flex items-center justify-center gap-1 rounded-md border border-white/10 bg-black/20 backdrop-blur-sm px-3 py-2 text-xs text-white transition hover:bg-black/30 hover:scale-105 transform font-geist tracking-tight">
<svg className="lucide lucide-copy w-3 h-3" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> Copy
                      </button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/20 backdrop-blur-sm p-4 hover:bg-zinc-900/30 hover:scale-105 transition-all duration-500">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-white font-geist tracking-tight">Payment</div>
<svg className="lucide lucide-credit-card w-4 h-4 text-zinc-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="text-sm">
<div className="flex items-center justify-between mb-3">
<span className="text-zinc-300 font-geist tracking-tight">Card •••• 4242</span>
<span className="text-white font-geist tracking-tight">$3,186.00</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-4 font-geist tracking-tight">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  PSD2 &amp; SCA compliant
                </div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-xs text-white transition hover:scale-105 transform font-geist tracking-tight bg-violet-600/90 backdrop-blur-sm hover:bg-violet-600 shadow-lg">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Pay securely
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="animation:fadeSlideIn_1s_ease-out_0.1s_both animate-on-scroll xl:mb-12 border-zinc-800 mb-12 relative">
<div className="max-w-7xl mr-auto ml-auto">
<div className="overflow-hidden border border-white/10 bg-zinc-950/20 backdrop-blur-xl rounded-3xl hover:bg-zinc-950/30 hover:border-white/20 transition-all duration-700">
<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">

<div className="md:h-56 md:col-span-5 h-40 relative">
<img alt="Cosmic gradient" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 saturate-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84d4c126-3f83-4e29-944c-474f1c66e18b_1600w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center justify-center rounded-md border border-white/20 bg-black/30 backdrop-blur-xl px-2 py-2">
<div className="grid grid-cols-2 gap-0.5">
<span className="h-2.5 w-2.5 rounded-sm bg-white"></span>
<span className="h-2.5 w-2.5 rounded-sm bg-white"></span>
<span className="h-2.5 w-2.5 rounded-sm bg-white"></span>
<span className="h-2.5 w-2.5 rounded-sm bg-transparent border border-white/30"></span>
</div>
</div>
</div>

<div className="flex md:col-span-4 md:p-8 md:bg-zinc-950/30 md:backdrop-blur-xl pt-6 pr-6 pb-6 pl-6 items-start">
<ul className="space-y-4">
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors font-geist tracking-tight" href="/pricing">Pricing</a>
</li>
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors font-geist tracking-tight" href="/changelog">Changelog</a>
</li>
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors font-geist tracking-tight" href="/customers">Customers</a>
</li>
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors font-geist tracking-tight" href="/contact">Contact</a>
</li>
</ul>
</div>

<div className="md:col-span-3 md:p-8 md:bg-zinc-950/30 md:backdrop-blur-xl px-6 py-6">
<a className="text-white text-2xl sm:text-3xl font-geist font-medium tracking-tight hover:opacity-90" href="mailto:hi@invoicely.com">hi@invoicely.com</a>
<div className="mt-6 flex items-center gap-4">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/20 backdrop-blur-sm text-zinc-500 hover:text-white hover:bg-black/30 transition-colors" href="#">
<svg className="" data-icon-replaced="true" fill="none" height="24" strokeWidth="2" style={{width: '17px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.0324 10.0936L21.3178 1.625H19.5914L13.2655 8.9782L8.21307 1.625H2.38567L10.026 12.7443L2.38567 21.625H4.11216L10.7924 13.8598L16.1282 21.625H21.9556L14.032 10.0936H14.0324ZM11.6678 12.8423L10.8936 11.7351L4.73424 2.92468H7.38603L12.3567 10.0349L13.1309 11.1422L19.5922 20.3844H16.9404L11.6678 12.8427V12.8423Z" fill="currentColor"></path>
</svg>
</a>
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/20 backdrop-blur-sm text-zinc-500 hover:text-white hover:bg-black/30 transition-colors" href="#">
<svg className="lucide lucide-instagram lucide-github w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/20 backdrop-blur-sm text-zinc-500 hover:text-white hover:bg-black/30 transition-colors" href="#">
<svg className="lucide lucide-linkedin lucide-youtube w-4 h-4" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="mt-8 text-sm text-zinc-500 font-geist tracking-tight">©
            <span className="font-geist tracking-tight" id="year">2025</span> Invoicely
          </p>
</div>
</div>
</div>
</div>
</footer>




<style>
    /* 
      Sequence animation intro. Usage:
      1) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both]
    */
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


    </>
  );
}
