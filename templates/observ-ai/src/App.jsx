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
      

<div className="aura-background-component top-0 w-full -z-10 absolute hue-rotate-90 brightness-150 h-[1100px] saturate-0" data-alpha-mask="15" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 15%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 15%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<header className="w-full border-b border-neutral-900/80">
<div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between gap-6">

<div className="inline-flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-3xl border border-amber-300/70 bg-neutral-950 shadow-[0_0_0_1px_rgba(250,204,21,0.5)]">
<span className="text-[11px] font-semibold tracking-[0.28em] text-amber-300">
              OB
            </span>
</div>
<span className="text-xs font-medium tracking-[0.26em] text-neutral-200 uppercase">
            Observ
          </span>
</div>

<nav className="hidden md:flex items-center gap-8 text-[13px] text-neutral-300">
<button className="hover:text-neutral-50 transition-colors">
            Product
          </button>
<button className="hover:text-neutral-50 transition-colors">
            Pricing
          </button>
<button className="hover:text-neutral-50 transition-colors">
            Customers
          </button>
<button className="hover:text-neutral-50 transition-colors">
            Docs
          </button>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-neutral-800 px-4 py-1.5 text-[13px] text-neutral-200 bg-neutral-950 hover:border-neutral-500 hover:bg-neutral-900 transition-colors">
            Log in
          </button>
<button className="inline-flex items-center rounded-full bg-amber-300 text-neutral-950 px-5 py-2 text-[13px] font-medium shadow-[0_16px_40px_rgba(251,191,36,0.55)] hover:bg-amber-200 transition-colors">
            Get started
          </button>
</div>
</div>
</header>
<main className="flex-1 w-full">

<section className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 w-full max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 gap-x-12 gap-y-12 items-center">

<div className="w-full lg:w-[56%] flex flex-col items-start">

<div className="flex flex-col mb-10 gap-x-4 gap-y-4 items-start">
<div className="inline-flex items-center gap-3">
</div>
<div className="inline-flex text-[11px] text-neutral-200 bg-gradient-to-br from-white/10 to-white/0 rounded-full px-4 py-1.5 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]"></div>
<span className="uppercase tracking-[0.22em] text-neutral-400">Live</span>
<span className="h-3 w-px bg-neutral-800"></span>
<span className="text-neutral-200">Monitoring 324,118 subscriptions</span>
</div>
</div>

<div className="space-y-6">
<h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] leading-[0.9] font-semibold tracking-tight text-amber-100">
              See every subscription
              <span className="block text-neutral-50">your company pays for.</span>
</h1>
<p className="text-[17px] sm:text-[18px] md:text-[20px] leading-relaxed text-neutral-300 max-w-xl">
              Connect your finance stack, inboxes, and SSO once. Observ discovers every recurring charge, predicts renewals, and spots wasteful spend before it hits the card.
            </p>
</div>

<div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
<button className="inline-flex text-[15px] hover:bg-amber-200 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80 font-medium text-neutral-950 bg-amber-300 rounded-full pt-3.5 pr-7 pb-3.5 pl-7 shadow-[0_20px_45px_rgba(251,191,36,0.7)] gap-x-2 gap-y-2 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}} type="button">
<svg className="lucide w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="calendar-bold-duotone" fill="none" height="20" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(10, 10, 10)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724" fill="#0a0a0a"></path><path d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" fill="#0a0a0a" opacity=".5"></path><path d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="#0a0a0a"></path></svg>
<span className="">Book a 20‑minute demo</span>
</button>
<button className="inline-flex text-[15px] hover:bg-neutral-900 hover:border-neutral-500 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80 text-neutral-100 bg-gradient-to-br from-white/10 to-white/0 rounded-full px-6 py-3 gap-x-2 gap-y-2 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}} type="button">
<svg className="lucide w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="check-circle-bold-duotone" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(245, 245, 245)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#f5f5f5" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="#f5f5f5"></path></svg>
<span className="">Start free trial</span>
</button>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[12px] text-neutral-400">
<div className="flex -space-x-2">
<img alt="Customer avatar" className="h-10 w-10 rounded-full border border-neutral-900 object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Customer avatar" className="h-10 w-10 rounded-full border border-neutral-900 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Customer avatar" className="h-10 w-10 rounded-full border border-neutral-900 object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="space-y-0.5">
<p className="text-[13px] text-neutral-200">
                Trusted by finance &amp; IT teams worldwide.
              </p>
<p className="text-[12px] text-neutral-500">
                3,900+ renewals caught before auto‑charge.
              </p>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[12px] text-neutral-400">
<div className="inline-flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Bank‑grade security · SOC2 in progress</span>
</div>
<span className="hidden sm:inline h-3 w-px bg-neutral-800"></span>
<span>Works with Stripe, NetSuite, Gmail, Okta, and more.</span>
</div>
</div>

<div className="w-full lg:w-[44%] grid grid-cols-2 gap-4 sm:gap-5">

<div className="col-span-2 sm:px-8 sm:py-10 flex bg-center text-neutral-950 bg-amber-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b18c9b8-d29b-416a-9c49-ea59f1d4b3b9_1600w.jpg)] bg-cover rounded-3xl pt-8 pr-6 pb-8 pl-6 items-end" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 65%, transparent)'}}>
<div className="space-y-1 leading-none">
<p className="text-[26px] sm:text-[34px] md:text-[40px] font-semibold tracking-tight">
                RENT
              </p>
<p className="text-[26px] sm:text-[34px] md:text-[40px] font-semibold tracking-tight">
                SOFTWARE
              </p>
<p className="text-[26px] sm:text-[34px] md:text-[40px] font-semibold tracking-tight">
                CLOUD
              </p>
<p className="text-[26px] sm:text-[34px] md:text-[40px] font-semibold tracking-tight">
                SAVINGS
              </p>
</div>
</div>

<div className="rounded-3xl overflow-hidden bg-neutral-800">
<img alt="Finance leader" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3691aee0-4fca-4e6a-8972-df1f5a6373ad_800w.webp"/>
</div>

<div className="flex flex-col bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-3xl pt-6 pr-5 pb-6 pl-5 justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="space-y-3">
<div className="flex items-center justify-between text-[11px] text-neutral-300">
<span className="uppercase tracking-[0.22em] text-amber-200">
                  Growth curve
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  +18.4%
                </span>
</div>
<div className="rounded-2xl border border-neutral-700 bg-neutral-900 px-3 py-3">
<div className="flex items-center justify-between text-[11px] text-neutral-300 mb-3">
<span className="">Analytics</span>
<span className="font-medium">$5,842</span>
</div>
<div className="grid grid-cols-12 gap-1 h-20 items-end">
<div className="h-4 rounded-md bg-amber-400/70"></div>
<div className="h-6 rounded-md bg-amber-400/70"></div>
<div className="h-10 rounded-md bg-amber-400/70"></div>
<div className="h-8 rounded-md bg-amber-400/70"></div>
<div className="h-14 rounded-md bg-amber-400/70"></div>
<div className="h-16 rounded-md bg-amber-400/70"></div>
<div className="h-20 rounded-md bg-amber-400"></div>
<div className="h-12 rounded-md bg-amber-400/70"></div>
<div className="h-10 rounded-md bg-amber-400/70"></div>
<div className="h-8 rounded-md bg-amber-400/70"></div>
<div className="h-6 rounded-md bg-amber-400/70"></div>
<div className="h-5 rounded-md bg-amber-400/70"></div>
</div>
</div>
<p className="mt-3 text-[15px] font-medium tracking-tight text-neutral-50">
                Optimize your financial growth.
              </p>
<p className="text-[12px] text-neutral-400">
                Understand where your money moves, and give finance a live strategy for higher returns.
              </p>
</div>
</div>

<div className="col-span-2 flex flex-col sm:flex-row sm:items-center bg-gradient-to-br from-white/5 to-white/0 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 items-start justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="flex items-center gap-4">
<div className="flex flex-none bg-amber-300 w-11 h-11 rounded-3xl shadow-[0_0_0_1px_rgba(250,204,21,0.4)] items-center justify-center">
<svg className="lucide text-neutral-950 w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="play-bold-duotone" fill="none" height="20" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(10, 10, 10)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z" fill="#0a0a0a" fill-rule="evenodd"></path><path d="m8.597 21.615l12.812-6.968A2.99 2.99 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648" fill="#0a0a0a" opacity=".5"></path></svg>
</div>
<div className="">
<p className="text-[22px] sm:text-[26px] font-semibold tracking-tight text-amber-100">
                  Observ
                </p>
<p className="text-[12px] text-neutral-400">
                  Make your money move like a system, not a spreadsheet.
                </p>
</div>
</div>
<div className="flex flex-wrap gap-2 text-[11px]">
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-100">Finance</span>
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-100">Insight</span>
<span className="px-3 py-1 rounded-full bg-amber-300 text-neutral-950">Analytics</span>
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-100">Growth</span>
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-100">Data</span>
</div>
</div>
</div>
</section>

<section className="w-full border-t border-neutral-900/80">
<div className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-10">

<div className="relative bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 rounded-[2.25rem] border border-neutral-800 shadow-2xl overflow-hidden">

<div className="px-6 pt-4 pb-3 flex items-center justify-between border-b border-neutral-800/70 text-[11px] text-neutral-300">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-neutral-700"></span>
<span className="h-1.5 w-1.5 rounded-full bg-neutral-700"></span>
</div>
<span className="h-3 w-px bg-neutral-800"></span>
<p className="uppercase tracking-[0.22em] text-neutral-500">
                  Observ Workspace
                </p>
</div>
<div className="flex items-center gap-2">
<span className="text-neutral-500">Today · 09:42</span>
<span className="h-3 w-px bg-neutral-800"></span>
<div className="flex items-center gap-1.5 text-[11px]">
<svg className="lucide h-3.5 w-3.5 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<span className="text-neutral-300">Live scan</span>
</div>
</div>
</div>

<div className="p-7 space-y-7">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-2">
<p className="text-[11px] font-medium uppercase tracking-[0.26em] text-amber-200">
                    Subscription overview
                  </p>
<h2 className="text-[26px] sm:text-[30px] font-semibold tracking-tight text-neutral-50">
                    Company‑wide recurring spend, in one live view.
                  </h2>
</div>
<div className="inline-flex gap-2 text-[11px] text-neutral-300 bg-neutral-950 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="uppercase tracking-[0.2em] text-neutral-400">
                    Last 30 days
                  </span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
<div className="flex flex-col bg-emerald-500/5 rounded-2xl pt-3.5 pr-4 pb-3.5 pl-4 justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                    Total spend
                  </p>
<p className="mt-2 text-[20px] font-medium text-neutral-50">$482,930</p>
<div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-300">
<svg className="lucide h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 14l5-5 5 5"></path>
</svg>
<span>+8.4% vs last quarter</span>
</div>
</div>
<div className="flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3.5 pr-4 pb-3.5 pl-4 justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                    Active subscriptions
                  </p>
<p className="mt-2 text-[20px] font-medium text-neutral-50">174</p>
<p className="mt-2 text-[11px] text-neutral-400">18 flagged by AI</p>
</div>
<div className="flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3.5 pr-4 pb-3.5 pl-4 justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                    Upcoming renewals
                  </p>
<p className="mt-2 text-[20px] font-medium text-neutral-50">23</p>
<p className="mt-2 text-[11px] text-amber-300/90">7 high‑impact</p>
</div>
<div className="flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-2xl pt-3.5 pr-4 pb-3.5 pl-4 justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                    Potential savings
                  </p>
<p className="mt-2 text-[20px] font-medium text-neutral-50">$91,200</p>
<p className="text-[11px] text-neutral-400 mt-2">From downgrades &amp; cleanup</p>
</div>
</div>

<div className="bg-neutral-950 rounded-2xl mt-3 pt-5 pr-5 pb-5 pl-5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex items-center justify-between gap-3 mb-4">
<div className="">
<p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                      Spend trajectory
                    </p>
<p className="mt-1 text-[12px] text-neutral-400">
                      AI forecast with renewal &amp; usage signals.
                    </p>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] text-neutral-300">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
<span>Current</span>
<span className="h-3 w-px bg-neutral-800"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="">Optimized</span>
</div>
</div>
<div className="grid grid-cols-12 gap-1.5 h-36 items-end">
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-10 rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-4 rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-12 rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-5 rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[54px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[18px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[62px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-6 rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-16 rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[22px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[70px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[26px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[76px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[30px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[84px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[34px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[96px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[38px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[98px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[46px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[104px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[52px] rounded-md bg-emerald-500/25"></div>
</div>
<div className="flex flex-col justify-end gap-1">
<div className="bg-gradient-to-br from-white/10 to-white/0 h-[108px] rounded-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '6px'}}></div>
<div className="h-[64px] rounded-md bg-emerald-500/25"></div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[10px] text-neutral-500">
<span className="">Now</span>
<span>+3 months</span>
<span className="">+6 months</span>
<span>+12 months</span>
</div>
</div>

<div className="mt-5 border-t border-neutral-800/80 pt-5 space-y-3">
<div className="flex items-center justify-between">
<p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                    Upcoming renewals
                  </p>
<button className="inline-flex text-[11px] hover:border-neutral-600 hover:bg-neutral-900 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80 text-neutral-300 bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}} type="button">
<svg className="lucide h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6H3"></path>
<path d="M10 12H3"></path>
<path d="M21 18H3"></path>
<path d="M21 3v6"></path>
<path d="M18 6h6"></path>
</svg>
<span className="">View all 23</span>
</button>
</div>
<div className="space-y-2.5 text-[12px]">

<div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 px-3.5 py-3 hover:border-amber-300/70 hover:bg-neutral-900 transition">
<div className="flex items-center gap-3">
<div className="flex text-[11px] font-medium text-neutral-200 bg-neutral-800 w-9 h-9 rounded-2xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
                        ST
                      </div>
<div className="">
<p className="text-[14px] font-medium text-neutral-50 tracking-tight">
                          Stripe Enterprise
                        </p>
<p className="text-[11px] text-neutral-400">
                          Owner: Finance · Annual · Payments
                        </p>
</div>
</div>
<div className="hidden sm:flex flex-col items-end gap-0.5">
<p className="text-[14px] text-neutral-50">$92,400 / yr</p>
<p className="text-[11px] text-neutral-500">Renews in 9 days</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] text-amber-300 border border-amber-500/40">
                        High impact
                      </span>
<button className="hidden sm:inline-flex hover:bg-neutral-900 hover:border-neutral-500 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80 text-neutral-200 bg-gradient-to-br from-white/10 to-white/0 w-8 h-8 rounded-full items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}} type="button">
<svg className="lucide h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</button>
</div>
</div>

<div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 px-3.5 py-3 hover:border-amber-300/70 hover:bg-neutral-900 transition">
<div className="flex items-center gap-3">
<div className="flex text-[11px] font-medium text-neutral-200 bg-neutral-800 w-9 h-9 rounded-2xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
                        SL
                      </div>
<div>
<p className="text-[14px] font-medium text-neutral-50 tracking-tight">
                          Slack Plus
                        </p>
<p className="text-[11px] text-neutral-400">
                          Owner: IT · Monthly · Collaboration
                        </p>
</div>
</div>
<div className="hidden sm:flex flex-col items-end gap-0.5">
<p className="text-[14px] text-neutral-50">$8,120 / mo</p>
<p className="text-[11px] text-neutral-500">120 unused seats</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] text-emerald-300 border border-emerald-500/40">
                        AI suggests downgrade
                      </span>
</div>
</div>

<div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 px-3.5 py-3 hover:border-amber-300/70 hover:bg-neutral-900 transition">
<div className="flex items-center gap-3">
<div className="flex text-[11px] font-medium text-neutral-200 bg-neutral-800 w-9 h-9 rounded-2xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
                        AD
                      </div>
<div className="">
<p className="text-[14px] font-medium text-neutral-50 tracking-tight">
                          Adobe Suite
                        </p>
<p className="text-[11px] text-neutral-400">
                          Owner: Design · Annual · Seats
                        </p>
</div>
</div>
<div className="hidden sm:flex flex-col items-end gap-0.5">
<p className="text-[14px] text-neutral-50">$36,060 / yr</p>
<p className="text-[11px] text-neutral-500">Renews in 27 days</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] text-rose-300 border border-rose-500/40">
                        Duplicate vendor
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-gradient-to-br from-white/5 to-white/0 rounded-3xl px-5 py-5 shadow-2xl space-y-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="flex items-center justify-between gap-3">
<p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                  AI alerts
                </p>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-3 py-0.5 text-[11px] text-neutral-300 border border-neutral-800">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
<span>3 open</span>
</span>
</div>
<div className="space-y-3 text-[13px]">
<div className="bg-rose-500/5 rounded-2xl pt-3 pr-3.5 pb-3 pl-3.5 space-y-2" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex items-center justify-between gap-2">
<p className="text-[11px] uppercase tracking-[0.22em] text-rose-300">
                      Spike detected
                    </p>
<span className="text-[11px] text-neutral-400">2m ago</span>
</div>
<p className="text-[15px] font-medium text-neutral-50 tracking-tight">
                    Marketing ad spend +47% this week.
                  </p>
<p className="text-[12px] text-neutral-200">
                    Observ linked 3 new campaign tools with overlapping features.
                  </p>
<button className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-rose-200 hover:text-rose-100 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400/80" type="button">
<span>Review affected vendors</span>
<svg className="lucide h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="bg-neutral-950 rounded-2xl pt-3 pr-3.5 pb-3 pl-3.5 space-y-1.5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                    Shadow tools
                  </p>
<p className="text-[13px] text-neutral-200">
                    12 subscriptions created outside procurement in the last 30 days.
                  </p>
<p className="text-[12px] text-neutral-400">
                    Observ surfaced owners via email + SSO patterns.
                  </p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-white/5 to-white/0 rounded-3xl px-5 py-5 shadow-2xl space-y-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                Set up in under a week
              </p>
<div className="space-y-3 text-[13px]">
<div className="flex items-center justify-between gap-3 pb-3 border-b border-neutral-800">
<div className="flex items-center gap-3">
<div className="flex text-[11px] font-medium text-neutral-200 bg-neutral-800 w-8 h-8 rounded-2xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
                      FS
                    </div>
<div className="">
<p className="text-[14px] text-neutral-50 tracking-tight">Finance systems</p>
<p className="text-[11px] text-neutral-400">Stripe · NetSuite · Xero</p>
</div>
</div>
<span className="text-[11px] text-emerald-300">Connected</span>
</div>
<div className="flex items-center justify-between gap-3 pb-3 border-b border-neutral-800">
<div className="flex items-center gap-3">
<div className="flex text-[11px] font-medium text-neutral-200 bg-neutral-800 w-8 h-8 rounded-2xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
                      ID
                    </div>
<div className="">
<p className="text-[14px] text-neutral-50 tracking-tight">Identity &amp; SSO</p>
<p className="text-[11px] text-neutral-400">Okta · Google Workspace</p>
</div>
</div>
<span className="text-[11px] text-emerald-300">Connected</span>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="flex text-[11px] font-medium text-neutral-200 bg-neutral-800 w-8 h-8 rounded-2xl items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
                      ML
                    </div>
<div className="">
<p className="text-[14px] text-neutral-50 tracking-tight">Inbox &amp; receipts</p>
<p className="text-[11px] text-neutral-400">Gmail · Outlook</p>
</div>
</div>
<span className="text-[11px] text-emerald-300">Ready in 2 clicks</span>
</div>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 text-neutral-950 px-4 py-3 text-[14px] font-medium hover:bg-amber-200 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80" type="button">
<svg className="lucide h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<span>Connect your stack</span>
</button>
</div>
</div>
</div>
</section><section className="w-full border-neutral-900/80 border-t">
<div className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-10">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="space-y-2">
<p className="text-[12px] font-medium uppercase tracking-[0.26em] text-neutral-400">
          Observ 3.2 · New workspace
        </p>
<h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-neutral-50">
          A sharper view of every dollar that leaves your company.
        </h2>
</div>
<button className="inline-flex items-center gap-1.5 text-[13px] text-amber-200 hover:text-amber-100" type="button">
<span className="">Explore what’s new</span>
<svg className="lucide h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-5">

<article className="flex flex-col bg-neutral-900 rounded-[1.75rem] overflow-hidden">
<div className="relative h-60 sm:h-64 overflow-hidden">
<img alt="Dynamic finance dashboard" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38df4875-7ce5-4138-a103-62a35135b438_800w.webp"/>
<div className="bg-gradient-to-t from-neutral-950/80 via-neutral-950/0 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
<button className="inline-flex gap-1.5 text-[11px] text-neutral-50 bg-neutral-900/70 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur gap-x-1.5 gap-y-1.5 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<svg className="lucide h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M9 4v16"></path>
<path d="M4 9h5"></path>
</svg>
<span>Live controls</span>
</button>
<button className="inline-flex text-[11px] text-neutral-100 bg-white/10 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur gap-x-1.5 gap-y-1.5 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<span className="">Focus view</span>
</button>
</div>
</div>
<div className="px-5 pt-5 pb-6 space-y-2">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-50">
            Signal Glass.
          </h3>
<p className="text-[13px] leading-relaxed text-neutral-400">
            A new spend surface that bends around your workflows, surfacing the real‑time impact of every vendor across teams, cards, and entities.
          </p>
</div>
</article>

<article className="flex flex-col bg-neutral-900 rounded-[1.75rem] overflow-hidden">
<div className="sm:h-64 flex bg-neutral-950 h-60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/099f3058-0cbd-498f-84e3-50a646ae50f5_800w.webp)] bg-cover bg-center relative items-center justify-center">
<div className="flex flex-col bg-neutral-900 w-[78%] max-w-xs rounded-[2rem] pt-4 pr-3 pb-4 pl-3 shadow-[0_20px_60px_rgba(0,0,0,0.85)] gap-x-3 gap-y-3" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '2rem'}}>
<div className="flex items-center justify-between text-[10px] text-neutral-400">
<span className="uppercase tracking-[0.22em]">Lock screen</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Live usage
              </span>
</div>
<div className="mt-1">
<p className="text-[40px] font-semibold tracking-tight text-neutral-50 leading-none">
                09:41
              </p>
<p className="text-[11px] text-neutral-500 mt-1">Tue · April 2</p>
</div>
<div className="mt-4 flex items-center justify-between text-[11px] text-neutral-300">
<div className="flex flex-col">
<span className="text-neutral-500">Spend today</span>
<span className="text-[15px] font-medium text-neutral-50">$18,430</span>
</div>
<div className="flex flex-col items-end">
<span className="text-neutral-500">Runway</span>
<span className="text-[15px] font-medium text-emerald-300">+11.2 mo</span>
</div>
</div>
</div>
</div>
<div className="px-5 pt-5 pb-6 space-y-2">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-50">
            Adaptive Lock Metrics.
          </h3>
<p className="text-[13px] leading-relaxed text-neutral-400">
            Bring your key finance indicators to the front of your day. Observ reshapes your top panel as budgets shift, alerts fire, and teams change plan.
          </p>
</div>
</article>

<article className="flex flex-col bg-neutral-900 rounded-[1.75rem] overflow-hidden">
<div className="relative h-60 sm:h-64 overflow-hidden">
<img alt="Notification style interface" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/528dff93-f5f5-4795-b840-34fc7c42a778_800w.webp"/>
<div className="bg-gradient-to-t from-neutral-950/85 via-neutral-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-4 right-4 bottom-4">
<div className="flex flex-col gap-2 text-[11px] text-neutral-50 bg-neutral-950/80 w-full rounded-2xl pt-3 pr-4 pb-3 pl-4 backdrop-blur gap-x-2 gap-y-2" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="uppercase tracking-[0.2em] text-emerald-300">
                    Screening vendor
                  </span>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-100 border border-neutral-700">
<span>View</span>
</button>
</div>
<p className="text-[12px] text-neutral-100">
                Observ is asking <span className="font-medium">Nova Ads</span> to confirm pricing, seats, and renewal terms before your contract auto‑renews.
              </p>
</div>
</div>
</div>
<div className="px-5 pt-5 pb-6 space-y-2">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-50">
            Call‑style vendor screening.
          </h3>
<p className="text-[13px] leading-relaxed text-neutral-400">
            Unknown charges get intercepted like spam calls. Vendors must declare who they are and why they’re billing you before spend reaches your ledger.
          </p>
</div>
</article>

<article className="flex flex-col bg-neutral-900 rounded-[1.75rem] overflow-hidden">
<div className="sm:h-64 flex bg-gradient-to-br from-sky-900 to-emerald-900 h-60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e8e210a-87b7-4974-914c-735c1240cb84_800w.webp)] bg-cover bg-center relative items-center justify-center">
<div className="text-[11px] text-neutral-100 bg-neutral-950/80 w-[82%] max-w-xs rounded-[2rem] pt-5 pr-5 pb-5 pl-5 backdrop-blur space-y-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '2rem'}}>
<div className="flex items-center justify-between">
<span className="uppercase tracking-[0.2em] text-neutral-400">
                Hold assist
              </span>
<span className="text-neutral-400">AI</span>
</div>
<div className="space-y-2">
<p className="text-[12px] text-neutral-300">
                “We’ll keep this renewal on hold and notify you as soon as pricing improves.”
              </p>
<div className="grid grid-cols-3 gap-2 text-[11px]">
<button className="rounded-full bg-emerald-500/20 text-emerald-200 py-1.5 flex items-center justify-center gap-1 border border-emerald-500/40">
<span className="">NEW</span>
</button>
<button className="rounded-full bg-neutral-800 text-neutral-100 py-1.5 flex items-center justify-center gap-1 border border-neutral-700">
<span className="">Pause</span>
</button>
<button className="rounded-full bg-rose-500/20 text-rose-100 py-1.5 flex items-center justify-center gap-1 border border-rose-500/40">
<span>Cancel</span>
</button>
</div>
</div>
<div className="flex items-center justify-between text-[10px] text-neutral-500">
<span className="">Waiting on vendor reply…</span>
<span>3m</span>
</div>
</div>
</div>
<div className="pt-5 pr-5 pb-6 pl-5 space-y-2">
<h3 className="text-[15px] font-semibold tracking-tight text-neutral-50">
            Renewal Hold Assist.
          </h3>
<p className="text-[13px] leading-relaxed text-neutral-400">
            Keep high‑risk renewals in a safe lane. Observ negotiates, pauses, or cancels on your rules, and pings you only when it’s time to decide.
          </p>
</div>
</article>
</div>

<div className="flex items-center justify-between text-[11px] text-neutral-500">
<p>
        Designed for teams managing <span className="text-neutral-200 font-medium">50–5,000 subscriptions</span>.
      </p>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600">
<svg className="lucide h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600">
<svg className="lucide h-3.5 w-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 6 6 6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</section><section className="w-full border-neutral-900/80 border-t">
<div className="w-full max-w-6xl mx-auto px-4 py-16 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-14">

<div className="w-full lg:w-1/2 flex flex-col justify-between gap-10">
<div className="space-y-5">
<p className="text-[13px] font-medium uppercase tracking-[0.26em] text-neutral-400">
          Performance · Proven impact
        </p>
<h2 className="text-[34px] sm:text-[42px] md:text-[46px] font-semibold text-neutral-50 tracking-tight">
          Numbers that prove Observ pays for itself.
        </h2>
<p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-400 max-w-md">
          Concrete results from finance and IT teams that use Observ to track every subscription, prevent surprise renewals, and redirect budget back into growth.
        </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center text-[14px] font-medium tracking-tight rounded-full bg-amber-300 text-neutral-950 px-5 py-2.5 shadow-[0_18px_40px_rgba(251,191,36,0.6)] hover:bg-amber-200 transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80" type="button">
<span>Talk to our team</span>
</button>
<button className="inline-flex items-center justify-center text-[14px] rounded-full px-4 py-2.5 border border-neutral-800 bg-neutral-950 text-neutral-200 hover:border-neutral-600 hover:bg-neutral-900 transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300/80" type="button">
<span className="">See customer outcomes</span>
</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-900">
<div className="space-y-2">
<p className="text-[21px] font-medium tracking-tight text-neutral-50">
            128%
          </p>
<p className="text-[13px] text-neutral-400">
            Average reduction in surprise renewals after 2 quarters.
          </p>
</div>
<div className="space-y-2">
<p className="text-[21px] font-medium tracking-tight text-neutral-50">
            310K+
          </p>
<p className="text-[13px] text-neutral-400">
            Vendor events Observ processes every business day.
          </p>
</div>
<div className="space-y-2">
<p className="text-[21px] font-medium tracking-tight text-neutral-50">
            37 hrs
          </p>
<p className="text-[13px] text-neutral-400">
            Finance &amp; IT time saved per month on manual audits.
          </p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<div className="relative overflow-hidden rounded-[2.25rem] bg-neutral-950 border border-neutral-900/80">

<div className="absolute inset-0 opacity-[0.9]">
<div className="grid grid-cols-2 grid-rows-2 w-full h-full">
<div className="bg-neutral-950"></div>
<div className="bg-neutral-900/60"></div>
<div className="bg-neutral-900/70"></div>
<div className="bg-neutral-900/40"></div>
</div>
<div className="absolute -top-16 -right-10 w-52 h-52 rounded-full bg-gradient-to-b from-neutral-800/40 to-neutral-900/0"></div>
<div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-gradient-to-t from-neutral-800/40 to-neutral-900/0"></div>
</div>

<div className="relative flex flex-col justify-between h-full min-h-[260px] sm:min-h-[320px]">
<div className="px-6 pt-6 flex items-center justify-between text-[12px] text-neutral-400">
<span className="uppercase tracking-[0.24em] text-neutral-500">
              Aggregate savings
            </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Updated weekly</span>
</span>
</div>
<div className="px-6 sm:px-8 pb-8 pt-10 sm:pt-14">
<p className="text-[42px] sm:text-[58px] md:text-[66px] font-semibold tracking-tight text-neutral-50 leading-none">
              $3.1B
            </p>
<p className="mt-3 text-[14px] sm:text-[15px] text-neutral-300 max-w-xs">
              Total spend Observ has redirected or protected through vendor clean‑up, downgrades, and renewal negotiations.
            </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[12px]">
<div className="space-y-1">
<p className="text-neutral-400 uppercase tracking-[0.18em]">
                  Median ROI
                </p>
<p className="text-[19px] font-medium tracking-tight text-emerald-300">
                  7.4×
                </p>
</div>
<div className="space-y-1">
<p className="text-neutral-400 uppercase tracking-[0.18em]">
                  Seats reclaimed
                </p>
<p className="text-[19px] font-medium tracking-tight text-neutral-50">
                  92K
                </p>
</div>
<div className="space-y-1">
<p className="uppercase text-neutral-400 tracking-[0.18em]">Active</p>
<p className="text-[19px] font-medium tracking-tight text-neutral-50">
                  540+
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="w-full border-neutral-900/80 border-t">
<div className="w-full max-w-6xl mx-auto px-4 py-16 lg:py-20 flex flex-col gap-16">

<div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-14">

<div className="space-y-8">
<div className="space-y-4">
<p className="text-[15px] font-medium uppercase tracking-[0.26em] text-neutral-400">
            Get in touch · Work with Observ
          </p>
<h2 className="text-[36px] sm:text-[42px] md:text-[46px] font-semibold text-neutral-50 tracking-tight">
            Talk to us about cleaning up your SaaS spend, from seed stage to global finance teams.
          </h2>
</div>
<button className="inline-flex items-center gap-2 text-[16px] text-neutral-100 group" type="button">
<span className="pb-0.5 border-b border-neutral-600 group-hover:border-neutral-200">
            Let’s start a conversation
          </span>
<svg className="lucide h-5 w-5 text-neutral-300 group-hover:text-neutral-100" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="space-y-6 text-[16px] text-neutral-300">
<div className="space-y-2">
<p className="text-[14px] uppercase tracking-[0.22em] text-neutral-500">
            Contact
          </p>
<div className="space-y-1.5">
<p className="text-neutral-100">General questions</p>
<p className="text-neutral-300">hello@observhq.com</p>
</div>
</div>
<div className="space-y-1.5">
<p className="text-neutral-100">Sales &amp; partnerships</p>
<p className="text-neutral-300">revenue@observhq.com</p>
</div>
<div className="space-y-1.5">
<p className="text-neutral-100">Phone</p>
<p className="text-neutral-300">(+1) 415 555 0188</p>
</div>
<div className="space-y-1.">
<p className="text-neutral-100">Offices</p>
<p className="text-neutral-300">
            210 Townsend St
            San Francisco, CA 94107
          </p>
</div>
<div className="space-y-1.5">
<p className="text-neutral-100">Social</p>
<div className="flex flex-col gap-0.5">
<button className="text-left hover:text-neutral-50 text-[15px]">LinkedIn</button>
<button className="text-left hover:text-neutral-50 text-[15px]">X / Twitter</button>
<button className="text-left hover:text-neutral-50 text-[15px]">GitHub</button>
</div>
</div>
</div>

<div className="space-y-6">
<div className="space-y-3">
<p className="text-[14px] uppercase tracking-[0.22em] text-neutral-500">
            Newsletter
          </p>
<p className="text-[16px] text-neutral-300">
            Subscribe for vendor benchmarks, finance stack breakdowns, and new product drops from Observ.
          </p>
</div>
<form className="space-y-3">
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<div className="flex-1 border-b border-neutral-700 focus-within:border-neutral-300 transition-colors">
<input className="w-full bg-transparent text-[16px] text-neutral-100 placeholder:text-neutral-500 py-2 outline-none" placeholder="Add your work email" type="email"/>
</div>
<button className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[15px] font-medium bg-neutral-100 text-neutral-950 hover:bg-neutral-200 transition-colors" type="submit">
              Subscribe
            </button>
</div>
<p className="text-[14px] text-neutral-500">
            No spam. One concise update every few weeks.
          </p>
</form>
</div>
</div>

<div className="relative h-40 sm:h-44 lg:h-48 w-full">
<div className="absolute bottom-6 left-2 sm:left-0">
<span className="inline-flex px-3 py-1 rounded-full bg-emerald-300 text-[14px] text-neutral-900">
          Renewal strategy
        </span>
</div>
<div className="absolute bottom-10 left-1/4">
<span className="inline-flex px-3 py-1 rounded-full bg-amber-300 text-[14px] text-neutral-950">
          Vendor cleanup
        </span>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2">
<span className="inline-flex px-3 py-1 rounded-full bg-sky-300 text-[14px] text-neutral-950">
          Usage analytics
        </span>
</div>
<div className="absolute bottom-9 right-1/3">
<span className="inline-flex px-3 py-1 rounded-full bg-indigo-300 text-[14px] text-neutral-950">
          Finance automation
        </span>
</div>
<div className="absolute bottom-5 right-4 sm:right-10">
<span className="inline-flex px-3 py-1 rounded-full bg-rose-400 text-[14px] text-neutral-950">
          Seat reclamation
        </span>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-[18%]">
<span className="inline-flex px-3 py-1 rounded-full bg-violet-300 text-[14px] text-neutral-950">
          Shadow IT
        </span>
</div>
<div className="absolute bottom-1 right-1/5">
<span className="inline-flex px-3 py-1 rounded-full bg-sky-500 text-[14px] text-neutral-50">
          Global teams
        </span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[14px] text-neutral-500">
<p className="">
        © Observ 2025. Built for companies managing <span className="text-neutral-200 font-medium">50–10,000 SaaS subscriptions</span>.
      </p>
<div className="flex flex-wrap items-center gap-4 text-[14px]">
<button className="hover:text-neutral-200">Security &amp; compliance</button>
<button className="hover:text-neutral-200">Terms</button>
<button className="hover:text-neutral-200">Privacy</button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
