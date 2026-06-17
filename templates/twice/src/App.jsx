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



      // Lucide icons
      lucide.createIcons();

      // Chart.js line chart
      const ctx = document.getElementById('lineChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 160);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.35)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['1D','2D','3D','4D','5D','6D','7D'],
            datasets: [{
              label: 'Value',
              data: [453.53, 600.12, 540.2, 720.15, 680.33, 740.12, 633.25],
              borderColor: 'rgba(99,102,241,1)',
              backgroundColor: gradient,
              fill: true,
              tension: 0.45,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 3
            }]
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              x: { display: false },
              y: { display: false }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                displayColors: false,
                padding: 10
              }
            }
          }
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[500px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="EH5tNRKA5YpikZQFtxiO"></div>
</div>
<div className="relative isolate overflow-hidden">


<header className="max-w-7xl mr-auto ml-auto pt-6 pr-6 pl-6">
<div className="flex items-center justify-between">
<a className="text-xl font-semibold text-white tracking-tight" href="/">Twice</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
<a className="hover:text-white transition" href="/features">Features</a>
<a className="hover:text-white transition" href="/pricing">Pricing</a>
<a className="hover:text-white transition" data-element-id="aura-emfuzgo8w" href="/about">About</a>
<a className="hover:text-white transition" href="/support">Support</a>
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-semibold text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-full pt-[10px] pr-[20px] pb-[10px] pl-[20px] top-0 right-0 bottom-0 left-0 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center" onclick="window.location.href='/signup'" role="button">

<span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist rounded-full">Get Started</span>

<span className="absolute z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium font-geist opacity-0 rounded-full top-0 right-0 bottom-0 left-0 blur-md">Start free</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-full"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-full"></span>
</button>
</nav>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>

<section className="sm:pt-20 lg:pt-28 relative max-w-7xl mr-auto ml-auto pt-14 pr-6 pb-16 pl-6">
<div className="grid gap-10 lg:grid-cols-12 lg:gap-12 mt-80 mb-20">

<div className="lg:col-span-7 opacity-0 translate-y-8 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 0.2s forwards'}}>
<h1 className="sm:text-5xl lg:text-7xl leading-[1.05] text-4xl font-semibold text-white tracking-tighter opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 0.4s forwards'}}>
              Double your financial potential with Twice
            </h1>
<p className="sm:text-2xl leading-relaxed text-base text-slate-200/80 max-w-xl mt-5 opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 0.6s forwards'}}>
              Smart investing made simple. Twice helps you grow your wealth with intelligent strategies, real-time insights, and institutional-grade security.
            </p>
<div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3 opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 0.8s forwards'}}>
<div className="relative inline-block group text-sm rounded-full">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-slate-900 hover:from-emerald-300 hover:to-teal-300 text-xs font-semibold text-slate-900 tracking-tight bg-gradient-to-r from-emerald-400 to-teal-400 ring-white/20 ring-1 rounded-full pt-[10px] pr-[17px] pb-[10px] pl-[17px] shadow-lg items-center justify-center" data-element-id="aura-emfuzgybs" onclick="window.location.href='/signup'" role="button" style={{}}>
<span className="relative z-10 text-sm font-normal rounded-full">Start investing</span><svg className="lucide lucide-arrow-right ml-2 w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(110, 231, 183, .55), rgba(94, 234, 212, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<a className="inline-flex items-center gap-2 hover:text-white transition text-sm text-slate-200/80" data-element-id="aura-emfuzh553" href="/features">
                See how it works
                <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-5 opacity-0 translate-x-8 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 1.0s forwards'}}>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">

<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-md opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 1.2s forwards'}}>
<p className="text-xs text-slate-200/60 font-sans">Assets under management</p>
<p className="mt-2 text-2xl font-sans font-semibold tracking-tighter" style={{}}>$2.4B</p>
<div className="mt-6 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-emerald-300/90 text-xs font-sans">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    +18.2%
                  </span>
<span className="text-[11px] text-slate-300/60 font-sans">Updated • Today</span>
</div>
</div>

<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-md opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 1.4s forwards'}}>
<p className="text-xs text-slate-200/60 font-sans">Active investors</p>
<p className="mt-2 text-2xl font-sans font-semibold tracking-tighter" style={{}}>125K+</p>
<div className="mt-5 flex -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-slate-900/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b04946aa-7f63-4464-8d11-6baf14b654ae_320w.jpg"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-slate-900/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/56f28c73-d426-4a0d-9eb4-0915f5c7ed46_800w.jpg"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-slate-900/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5a54f4dd-684d-4ac4-b96c-ca3af05c5572_320w.jpg"/>
</div>
<p className="mt-3 text-[11px] text-slate-300/60 font-sans">Updated · Dec 24</p>
</div>

<div className="sm:col-span-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-md opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 1.6s forwards'}}>
<div className="flex items-center justify-between">
<div className="">
<p className="text-xs text-slate-200/60 font-sans">Portfolio performance</p>
<p className="mt-1 text-xl font-semibold tracking-tight font-sans">$12,847.32</p>
<div className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-300/90 font-sans">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +31.24%
                    </div>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="mt-4 h-40">
<div className="w-full h-full relative bg-gradient-to-t from-indigo-500/5 to-transparent rounded-lg overflow-hidden">

<div className="absolute inset-0 flex items-end justify-between px-2 pb-2">

<div className="flex flex-col items-center gap-1 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.0s forwards'}}>
<div className="w-8 bg-gradient-to-t from-indigo-400 to-indigo-300 rounded-t-sm" style={{height: '45px'}}></div>
<span className="text-xs text-slate-400/60">Mon</span>
</div>
<div className="flex flex-col items-center gap-1 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.1s forwards'}}>
<div className="w-8 bg-gradient-to-t from-indigo-400 to-indigo-300 rounded-t-sm" style={{height: '72px'}}></div>
<span className="text-xs text-slate-400/60">Tue</span>
</div>
<div className="flex flex-col items-center gap-1 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.2s forwards'}}>
<div className="w-8 bg-gradient-to-t from-indigo-400 to-indigo-300 rounded-t-sm" style={{height: '58px'}}></div>
<span className="text-xs text-slate-400/60">Wed</span>
</div>
<div className="flex flex-col items-center gap-1 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.3s forwards'}}>
<div className="w-8 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-sm" style={{height: '95px'}}></div>
<span className="text-xs text-slate-400/60">Thu</span>
</div>
<div className="flex flex-col items-center gap-1 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.4s forwards'}}>
<div className="w-8 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-sm" style={{height: '85px'}}></div>
<span className="text-xs text-slate-400/60">Fri</span>
</div>
<div className="flex flex-col items-center gap-1 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.5s forwards'}}>
<div className="w-8 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-sm" style={{height: '102px'}}></div>
<span className="text-xs text-slate-400/60">Sat</span>
</div>
<div className="flex flex-col items-center gap-1 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.6s forwards'}}>
<div className="w-8 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-sm" style={{height: '88px'}}></div>
<span className="text-xs text-slate-400/60">Sun</span>
</div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="h-full w-full opacity-20">
<div className="absolute top-1/4 left-0 right-0 h-px bg-slate-300/30"></div>
<div className="absolute top-2/4 left-0 right-0 h-px bg-slate-300/30"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-slate-300/30"></div>
</div>
</div>

</div>
</div>
<div className="mt-3 flex items-center gap-3 text-[11px] text-slate-300/70 opacity-0 translate-y-4" style={{animation: 'fadeSlideIn 0.6s ease-out 2.8s forwards'}}>
<span className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 font-sans">1D</span>
<span className="px-2 py-1 rounded-full bg-white/0 hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 cursor-pointer font-sans">1W</span>
<span className="px-2 py-1 rounded-full bg-white/0 hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 cursor-pointer font-sans">1M</span>
<span className="px-2 py-1 rounded-full bg-white/0 hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 cursor-pointer font-sans">6M</span>
<span className="px-2 py-1 rounded-full bg-white/0 hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 cursor-pointer font-sans">1Y</span>
<span className="px-2 py-1 rounded-full bg-white/0 hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 cursor-pointer font-sans">Max</span>
</div>
</div>

<div className="sm:col-span-2 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-md opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeSlideIn 0.8s ease-out 1.8s forwards'}}>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
<div className="sm:col-span-2 flex items-center rounded-xl bg-white/80 px-3 py-2 text-slate-900">
<svg className="lucide lucide-wallet mr-2 h-4 w-4 text-slate-700" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<input className="w-full bg-transparent placeholder-slate-500 text-sm outline-none" placeholder="Enter investment amount" type="text"/>
</div>
<button className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-black transition font-sans">
                    Invest
                    <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
<style>
            @keyframes fadeSlideIn {
              from {
                opacity: 0;
                transform: translateY(32px) translateX(0px);
                filter: blur(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0) translateX(0);
                filter: blur(0);
              }
            }
          </style>
</div>

<div className="mt-12 grid gap-4 md:grid-cols-2">
<div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2 text-xs text-slate-300/70 font-sans">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Bank-level security
            </div>
<p className="mt-2 text-lg font-medium tracking-tight text-white/90 font-sans">Your investments are protected with military-grade encryption.</p>
</div>
<div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md">
<div className="flex items-center gap-2 text-xs text-slate-300/70 font-sans">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              AI-powered insights
            </div>
<p className="mt-2 text-lg font-medium tracking-tight text-white/90 font-sans">Smart algorithms optimize your portfolio for maximum returns.</p>
</div>
</div>
<img alt="3D abstract render" className="absolute -z-10 inset-0 opacity-20 w-full h-full object-cover rounded-lg mt-2 mb-2 blur-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/071b8bd7-1a5a-4cf8-a548-32681a2cfe1f_320w.jpg"/></section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<section className="sm:pt-20 lg:pt-28 max-w-7xl mr-auto ml-auto pt-14 pr-6 pb-20 pl-6">
<div className="text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-300/20">
<svg className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
      Testimonials
    </span>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">What investors are saying</h2>
<p className="mt-3 text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto">Trusted by 125K+ investors, from first-time savers to seasoned professionals.</p>
</div>
<div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-200/80">
<div className="inline-flex items-center gap-2 text-sm">
<svg className="lucide lucide-building h-4 w-4" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
      Goldman Sachs
    </div>
<div className="inline-flex items-center gap-2 text-sm">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
      BlackRock
    </div>
<div className="inline-flex items-center gap-2 text-sm">
<svg className="lucide lucide-credit-card h-4 w-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
      JP Morgan
    </div>
<div className="inline-flex items-center gap-2 text-sm">
<svg className="lucide lucide-briefcase h-4 w-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
      Vanguard
    </div>
</div>
<div className="sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 relative mt-8">
<figure className="transition hover:bg-white/10 flex flex-col min-h-[260px] relative bg-white/5 ring-white/10 ring-1 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white/90">"Doubled my returns"</h3>
<blockquote className="leading-relaxed text-sm text-slate-300/85 mt-2">Twice's AI recommendations helped me optimize my portfolio. I've seen consistent growth that outperforms traditional investing.</blockquote>
<figcaption className="mt-auto pt-5 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9628222c-a1ff-484a-b5dc-3f3f3623bf4c_320w.jpg"/>
<div className="">
<p className="text-sm font-medium text-white/90">Sarah Chen</p>
<p className="text-[11px] text-slate-400/80">Software Engineer</p>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/10 flex flex-col min-h-[260px]">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white/90">"Incredibly intuitive"</h3>
<blockquote className="mt-2 text-sm leading-relaxed text-slate-300/85">The interface makes complex investing simple. I finally understand where my money goes and how it grows.</blockquote>
<figcaption className="mt-auto pt-5 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7c3a8ea5-37e4-4f38-9c88-c9b19de178d8_320w.jpg"/>
<div>
<p className="text-sm font-medium text-white/90">Marcus Johnson</p>
<p className="text-[11px] text-slate-400/80">Marketing Director</p>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/10 flex flex-col min-h-[260px]">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white/90">"Peace of mind"</h3>
<blockquote className="mt-2 text-sm leading-relaxed text-slate-300/85">Set it and forget it. Twice handles rebalancing automatically while I focus on my business.</blockquote>
<figcaption className="mt-auto pt-5 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9235a13b-aab0-4c2e-b0bd-6a170ec14e9d_320w.jpg"/>
<div>
<p className="text-sm font-medium text-white/90">Lisa Rodriguez</p>
<p className="text-[11px] text-slate-400/80">Entrepreneur</p>
</div>
</figcaption>
</figure>
<figure className="transition hover:bg-white/10 flex flex-col min-h-[260px] bg-white/5 ring-white/10 ring-1 rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="sm:text-lg text-base font-medium text-white/90 tracking-tight">"Best decision ever"</h3>
<blockquote className="mt-2 text-sm leading-relaxed text-slate-300/85">Switched from my bank's investment options to Twice. The difference in returns speaks for itself.</blockquote>
<figcaption className="mt-auto pt-5 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900/50 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/22d2277a-29cd-4e60-937f-9bd0a18e220d_320w.jpg"/>
<div className="">
<p className="text-sm font-medium text-white/90">David Kim</p>
<p className="text-[11px] text-slate-400/80">Financial Analyst</p>
</div>
</figcaption>
</figure>
<img alt="3D abstract render" className="absolute -z-10 inset-0 opacity-50 w-full h-full object-cover rounded-lg mt-2 mb-2 blur-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/337b57ea-a0c1-4cbe-818e-23653e7f4459_320w.jpg"/></div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition" href="#">
      See all reviews
      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-14 pr-6 pb-20 pl-6 sm:pt-20 lg:pt-28">
<div className="text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-indigo-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-indigo-300 ring-1 ring-indigo-300/20">
<svg className="lucide lucide-credit-card h-3.5 w-3.5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
            Pricing
          </span>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Simple, transparent pricing</h2>
<p className="mt-3 text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto">Start free, scale as you grow. No hidden fees, no surprises.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md">
<div className="text-center">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="mt-2 flex items-baseline justify-center">
<span className="text-3xl font-semibold tracking-tight text-white">$0</span>
<span className="ml-1 text-sm text-slate-400">/month</span>
</div>
<p className="mt-2 text-sm text-slate-300/80">Perfect for beginners</p>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Up to $10K investments
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Basic portfolio analytics
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Email support
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Mobile app access
              </li>
</ul>
<button className="hover:bg-white/20 transition text-sm font-medium text-white bg-white/10 w-full ring-white/20 ring-1 rounded-xl mt-6 pt-3 pr-4 pb-3 pl-4 cursor-pointer" data-element-id="aura-emfuzhq5f" onclick="window.location.href='/pricing'" role="button">
              Get started
            </button>
</div>

<div className="rounded-2xl bg-gradient-to-b from-indigo-500/10 to-purple-500/10 p-6 ring-1 ring-indigo-400/20 backdrop-blur-md relative">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="inline-flex items-center gap-1 rounded-full bg-indigo-400 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-900">
                Most popular
              </span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-white">Professional</h3>
<div className="mt-2 flex items-baseline justify-center">
<span className="text-3xl font-semibold tracking-tight text-white">$29</span>
<span className="ml-1 text-sm text-slate-400">/month</span>
</div>
<p className="mt-2 text-sm text-slate-300/80">For serious investors</p>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited investments
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Advanced AI insights
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Priority support
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Tax optimization
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Custom portfolios
              </li>
</ul>
<button className="hover:bg-indigo-600 transition text-sm font-medium text-white bg-indigo-500 w-full rounded-xl mt-6 pt-3 pr-4 pb-3 pl-4 shadow-lg cursor-pointer" data-element-id="aura-emfuzhi53" onclick="window.location.href='/pricing'" role="button">
              Start pro trial
            </button>
</div>

<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md">
<div className="text-center">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<div className="mt-2 flex items-baseline justify-center">
<span className="text-3xl font-semibold tracking-tight text-white">$99</span>
<span className="ml-1 text-sm text-slate-400">/month</span>
</div>
<p className="mt-2 text-sm text-slate-300/80">For institutions</p>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Multi-account management
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                White-label solutions
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Dedicated account manager
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Custom integrations
              </li>
<li className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                SLA guarantee
              </li>
</ul>
<button className="hover:bg-white/20 transition text-sm font-medium text-white bg-white/10 w-full ring-white/20 ring-1 rounded-xl mt-6 pt-3 pr-4 pb-3 pl-4 cursor-pointer" data-element-id="aura-emfuzhnc6" onclick="window.location.href='/pricing'" role="button">
              Contact sales
            </button>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<section className="max-w-7xl mr-auto ml-auto pt-14 pr-6 pb-20 pl-6 sm:pt-20 lg:pt-28">
<div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

<div className="lg:col-span-6">
<span className="inline-flex items-center gap-1 rounded-full bg-indigo-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-indigo-300 ring-1 ring-indigo-300/20">
<svg className="lucide lucide-map h-3.5 w-3.5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
        Roadmap
      </span>
<h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">Building the future of intelligent investing</h2>
<p className="mt-4 text-sm sm:text-base text-slate-300/85 max-w-xl">Follow our journey as we revolutionize personal finance. Every milestone brings us closer to making sophisticated investing accessible to everyone.</p>
<div className="mt-8 rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
<img alt="3D abstract render" className="sm:h-72 lg:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/94edd402-9c35-4bc4-8b86-bffe7980c318_1600w.jpg"/>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative pl-6">

<span aria-hidden="true" className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gradient-to-b from-indigo-400 via-indigo-400/40 to-transparent"></span>

<div className="relative right-[18.5px] pt-6 pb-6 pl-6">
<span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20"></span>
<p className="text-[11px] uppercase tracking-wide text-slate-400/80">Q1 2025</p>
<h3 className="mt-1 text-lg sm:text-xl font-medium tracking-tight text-white/90">AI Portfolio Optimizer Launch</h3>
<p className="mt-1 text-sm text-slate-300/80">Advanced machine learning algorithms for personalized portfolio recommendations and risk assessment.</p>
</div>
<div className="relative pt-6 pb-6 pl-6 right-[18.5px]">
<span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20"></span>
<p className="text-[11px] uppercase tracking-wide text-slate-400/80">Q2 2025</p>
<h3 className="mt-1 text-lg sm:text-xl font-medium tracking-tight text-white/90">Social Trading Features</h3>
<p className="mt-1 text-sm text-slate-300/80">Follow successful investors, copy strategies, and build community-driven investment insights.</p>
</div>
<div className="relative right-[18.5px] pt-6 pb-6 pl-6">
<span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20"></span>
<p className="text-[11px] uppercase tracking-wide text-slate-400/80">Q3 2025</p>
<h3 className="mt-1 text-lg sm:text-xl font-medium tracking-tight text-white/90">Cryptocurrency Integration</h3>
<p className="text-sm text-slate-300/80 mt-1">Native support for Bitcoin, Ethereum, and major altcoins with DeFi yield farming opportunities.</p>
</div>
<div className="relative right-[18.5px] pt-6 pb-6 pl-6">
<span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20"></span>
<p className="text-[11px] uppercase tracking-wide text-slate-400/80">Q4 2025</p>
<h3 className="mt-1 text-lg sm:text-xl font-medium tracking-tight text-white/90">Global Market Expansion</h3>
<p className="mt-1 text-sm text-slate-300/80">International markets access including European and Asian stock exchanges.</p>
</div>
<div className="relative right-[18.5px] pt-6 pb-6 pl-6">
<span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20"></span>
<p className="text-[11px] uppercase tracking-wide text-slate-400/80">Q1 2026</p>
<h3 className="mt-1 text-lg sm:text-xl font-medium tracking-tight text-white/90">Advanced Analytics Suite</h3>
<p className="mt-1 text-sm text-slate-300/80">Professional-grade tools including backtesting, scenario analysis, and institutional research.</p>
</div>
<div className="mt-2 pl-6 relative right-[18.5px]">
<a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 transition" href="#">
            View complete roadmap
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-purple-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-purple-300 ring-1 ring-purple-300/20">
<svg className="lucide lucide-help-circle h-3.5 w-3.5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
            FAQ
          </span>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Frequently asked questions</h2>
<p className="mt-3 text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto">Everything you need to know about Twice and intelligent investing.</p>
</div>
<div className="relative max-w-3xl mt-10 mr-auto ml-auto space-y-4">
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-lg font-medium text-white">How does Twice's AI optimization work?</h3>
<svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6">
<p className="text-slate-300/85 leading-relaxed">Our AI analyzes thousands of market variables, your risk tolerance, and investment goals to create personalized portfolio recommendations. The system continuously monitors and rebalances your investments to maximize returns while minimizing risk.</p>
</div>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-lg font-medium text-white">Is my money safe with Twice?</h3>
<svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6">
<p className="text-slate-300/85 leading-relaxed">Absolutely. Your funds are protected by SIPC insurance up to $500K, and we use bank-level encryption and security protocols. We're also regulated by the SEC and undergo regular third-party security audits.</p>
</div>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-lg font-medium text-white">What's the minimum investment amount?</h3>
<svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6">
<p className="text-slate-300/85 leading-relaxed">You can start investing with as little as $1. Our fractional shares feature allows you to build a diversified portfolio regardless of your budget. There are no minimum balance requirements.</p>
</div>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-lg font-medium text-white">Can I withdraw my money anytime?</h3>
<svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6">
<p className="text-slate-300/85 leading-relaxed">Yes, you can withdraw your money at any time without penalties. Withdrawals typically process within 3-5 business days. Keep in mind that frequent trading may impact your long-term returns.</p>
</div>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-lg font-medium text-white">How much does Twice cost?</h3>
<svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6">
<p className="text-slate-300/85 leading-relaxed">Twice offers a free tier for portfolios up to $10K. Our Professional plan is $29/month for unlimited investing with advanced features. Enterprise pricing starts at $99/month for institutional clients.</p>
</div>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-lg font-medium text-white">Do you offer tax optimization?</h3>
<svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6">
<p className="text-slate-300/85 leading-relaxed">Yes, our Professional and Enterprise plans include tax-loss harvesting and optimization strategies. We automatically identify opportunities to minimize your tax burden while maintaining your target allocation.</p>
</div>
</details>
<img alt="3D abstract render" className="absolute -z-10 inset-0 opacity-50 w-full h-full object-cover rounded-lg mt-2 mb-2 blur-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0f8e8ac3-0766-4194-8869-99007184ab6d_320w.jpg"/></div>
<div className="mt-10 text-center">
<p className="text-slate-300/80 mb-4">Still have questions?</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200 transition" href="#">
            Contact our support team
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<footer className="max-w-7xl mx-auto px-6 pt-20 pb-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">Twice</h3>
<p className="text-slate-300/80 max-w-md mb-6">Double your financial potential with intelligent investing. Built for everyone, trusted by professionals.</p>
<div className="flex items-center gap-4">
<a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-twitter h-5 w-5 text-slate-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-linkedin h-5 w-5 text-slate-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-github h-5 w-5 text-slate-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-300/80">
<li><a className="hover:text-white transition" href="#">Features</a></li>
<li><a className="hover:text-white transition" href="#">Pricing</a></li>
<li><a className="hover:text-white transition" href="#">Security</a></li>
<li><a className="hover:text-white transition" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-300/80">
<li><a className="hover:text-white transition" href="#">About</a></li>
<li><a className="hover:text-white transition" href="#">Blog</a></li>
<li><a className="hover:text-white transition" href="#">Careers</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">© 2024 Twice. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm text-slate-400">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
<a className="hover:text-white transition" href="#">Cookie Policy</a>
</div>
</div>
</footer>
</div>





    </>
  );
}
