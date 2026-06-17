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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="spline-container absolute top-0 left-0 w-full h-full z-0">
<iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe>
</div>
</div>
<div className="overflow-hidden relative">


<header className="relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<a className="flex items-center gap-2" href="#">
<img alt="Water Logo" className="w-[100px] h-8 object-cover rounded" data-element-src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfd11ad9-7276-443d-aaea-710749f28066_1600w.png" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfd11ad9-7276-443d-aaea-710749f28066_1600w.png"/>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
<a className="hover:text-white transition font-geist" href="#">
                Features
              </a>
<a className="hover:text-white transition font-geist" href="#">
                Solutions
              </a>
<a className="hover:text-white transition font-geist" href="#">
                Integrations
              </a>
<a className="hover:text-white transition font-geist" href="#">
                Pricing
              </a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-sm text-white/80 hover:text-white transition font-geist" href="#">
                Sign in
              </a>
<a className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition font-geist" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m10 17 5-5-5-5"></path>
<path d="M15 12H3"></path>
<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
</svg>
                Create account
              </a>
</div>
</div>
</div>
</header>

<section className="sm:pt-14 mb-[100px] pt-10 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="xl:ml-auto xl:mr-auto xl:mt-20 xl:mb-28 text-center max-w-3xl mt-20 mr-auto mb-28 ml-auto">
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-emerald-500/10 px-3 py-1.5 text-[13px] text-emerald-200">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
<span className="font-geist">
                For startups to global finance teams
              </span>
</div>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-medium tracking-tight font-geist mt-5">
              Unlock the true power of
              <span className="lg:italic font-medium text-emerald-300 font-instrument-serif">
                cashflow intelligence
              </span>
</h1>
<p className="mt-5 text-base sm:text-lg text-white/70 font-geist">
              Keep every account, ledger, and payment stream aligned. Monitor,
              forecast, and act— all from a single, secure workspace designed
              for speed and clarity.
            </p>
<div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
<div className="btn-wrapper">
<button aria-label="Discover the product" className="btn px-4 py-3 focus:outline-none" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">D</span>
<span className="btn-letter">i</span>
<span className="btn-letter">s</span>
<span className="btn-letter">c</span>
<span className="btn-letter">o</span>
<span className="btn-letter">v</span>
<span className="btn-letter">e</span>
<span className="btn-letter">r</span>
</div>
<div className="txt-2">
<span className="btn-letter">E</span>
<span className="btn-letter">x</span>
<span className="btn-letter">p</span>
<span className="btn-letter">l</span>
<span className="btn-letter">o</span>
<span className="btn-letter">r</span>
<span className="btn-letter">i</span>
<span className="btn-letter">n</span>
<span className="btn-letter">g</span>
</div>
</div>
</button>
</div>
<div className="inline-block group text-sm rounded-full relative">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white border-gradient before:rounded-full text-xs font-semibold text-white/70 tracking-tight bg-white/5 rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative backdrop-blur-xl items-center justify-center">
<span className="z-10 text-sm font-medium rounded-full mr-2 relative">
                    Learn more
                  </span>
<span aria-hidden="true" className="-translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 text-xs opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>

<div className="relative mt-12 sm:mt-16">
<div className="mx-auto max-w-6xl rounded-2xl border-gradient before:rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl">

<div className="flex sm:px-6 border-gradient before:rounded-none pt-4 pr-4 pb-4 pl-4 items-center justify-between" style={{}}>
<div className="flex items-center gap-3" style={{}}>
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9224ba63-793b-4edd-80e4-b2512cde1f9c_320w.jpg"/>
<div className="">
<p className="text-sm font-medium font-geist">
                      Good morning, Aria
                    </p>
<p className="text-xs text-white/60 font-geist">Overview</p>
</div>
</div>
<div className="flex items-center gap-3 text-white/80" style={{}}>
<button className="p-2 rounded-full hover:bg-white/10 transition">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</button>
<button className="p-2 rounded-full hover:bg-white/10 transition">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
</button>
<button className="p-2 rounded-full hover:bg-white/10 transition">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>
</div>

<div className="sm:px-6 pt-5 pr-4 pb-5 pl-4" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

<div className="lg:col-span-2 rounded-xl border-gradient before:rounded-xl bg-white/5 p-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="">
<p className="text-sm text-white/70 font-geist">
                          Total Balance
                        </p>
<div className="mt-1 flex items-baseline gap-2">
<p className="text-3xl sm:text-4xl tracking-tight font-geist font-medium">
                            $842,910.23
                          </p>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-xs text-emerald-300 font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                            +12.7% this month
                          </span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-medium text-black hover:bg-emerald-300 transition font-geist">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
                          Transfer
                        </button>
<button className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition font-geist">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7 7 17"></path>
<path d="M17 17H7V7"></path>
</svg>
                          Request
                        </button>
</div>
</div>

<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60 font-geist">
                            USD Wallet
                          </p>
<span className="text-[10px] text-emerald-300 font-geist">
                            +3.1%
                          </span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight font-geist">
                          $312,870
                        </p>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60 font-geist">
                            EUR Wallet
                          </p>
<span className="text-[10px] text-emerald-300 font-geist">
                            +1.4%
                          </span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight font-geist">
                          €154,260
                        </p>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60 font-geist">
                            GBP Wallet
                          </p>
<span className="text-[10px] text-red-300 font-geist">
                            -0.6%
                          </span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight font-geist">
                          £98,540
                        </p>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60 font-geist">Crypto</p>
<span className="text-[10px] text-emerald-300 font-geist">
                            +7.9%
                          </span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight font-geist">
                          ₿12.04
                        </p>
</div>
</div>
</div>

<div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-geist">Income vs Spend</p>
<button className="inline-flex items-center gap-1 rounded-full border-gradient before:rounded-full px-2 py-1 text-xs text-white/70 hover:bg-white/10 transition font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                        Last 12 mo
                      </button>
</div>
<div className="mt-4">
<div className="grid grid-cols-12 items-end gap-1 h-28">
<div className="h-6 bg-white/15 rounded"></div>
<div className="h-10 bg-white/15 rounded"></div>
<div className="h-8 bg-white/15 rounded"></div>
<div className="h-16 bg-white/15 rounded"></div>
<div className="h-20 bg-white/15 rounded"></div>
<div className="h-14 bg-white/15 rounded"></div>
<div className="h-24 bg-white/20 rounded"></div>
<div className="h-12 bg-white/15 rounded"></div>
<div className="h-18 bg-white/15 rounded"></div>
<div className="h-24 bg-white/20 rounded"></div>
<div className="h-9 bg-white/15 rounded"></div>
<div className="h-22 bg-white/20 rounded"></div>
</div>
<div className="mt-3 flex items-center justify-between text-[11px] text-white/60">
<span className="font-geist">$0</span>
<span className="font-geist">$50k</span>
<span className="font-geist">$100k</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3">
<p className="text-xs text-white/60 font-geist">
                          Total Income
                        </p>
<div className="mt-1 flex items-baseline gap-2">
<p className="text-xl font-semibold tracking-tight font-geist">
                            $126,400
                          </p>
</div>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3">
<p className="text-xs text-white/60 font-geist">
                          Total Spend
                        </p>
<div className="mt-1 flex items-baseline gap-2">
<p className="text-xl font-semibold tracking-tight font-geist">
                            $78,950
                          </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<p className="text-sm font-geist">Payouts</p>
</div>
<span className="text-xs text-white/60 font-geist">
                      $42,300
                    </span>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
<p className="text-sm font-geist">Collections</p>
</div>
<span className="text-xs text-white/60 font-geist">
                      $39,120
                    </span>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<p className="text-sm font-geist">Risk Score</p>
</div>
<span className="text-xs text-emerald-300 font-geist">A+</span>
</div>
<div className="rounded-lg border-gradient before:rounded-lg bg-white/5 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
<p className="text-sm font-geist">Automation</p>
</div>
<span className="text-xs text-white/60 font-geist">
                      27 runs
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-6xl">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center py-10">
<div className="rounded-2xl border-gradient before:rounded-2xl bg-white/5 px-6 py-6">
<p className="text-3xl tracking-tight font-geist font-medium">
                  212+
                </p>
<p className="mt-1 text-sm text-white/70 font-geist">
                  Bank &amp; ERP integrations
                </p>
</div>
<div className="rounded-2xl border-gradient before:rounded-2xl bg-white/5 px-6 py-6">
<p className="text-3xl tracking-tight font-geist font-medium">
                  3.8M+
                </p>
<p className="mt-1 text-sm text-white/70 font-geist">
                  Transactions reconciled / day
                </p>
</div>
<div className="rounded-2xl border-gradient before:rounded-2xl bg-white/5 px-6 py-6">
<p className="text-3xl tracking-tight font-geist font-medium">
                  176
                </p>
<p className="mt-1 text-sm text-white/70 font-geist">
                  Countries supported
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 sm:pb-20 lg:px-8 lg:pt-20 lg:mt-40 lg:mb-40 max-w-7xl mt-20 mr-auto mb-20 ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="mx-auto max-w-4xl text-center">
<span className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-emerald-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-emerald-200 font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
            Global Network
          </span>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-geist font-medium">
            Join 12,000+ finance leaders from 85+ countries
          </h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 font-geist">
            Connect with CFOs, finance teams, and treasury experts transforming
            how modern companies manage cashflow and financial operations.
          </p>
<div className="mt-4 sm:mt-6">
<a className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-black shadow-lg shadow-emerald-900/25 hover:bg-emerald-300 transition-colors font-geist" href="#">
              Join Our Network
              <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="relative mt-8 sm:mt-12">
<style>
            @keyframes marquee-left{from{transform:translateX(0)}to{transform:translateX(-50%)}}
          </style>
<div className="mx-auto max-w-6xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg"/>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Finance professional" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 sm:mt-40 sm:ml-auto sm:mr-auto sm:mb-40 max-w-7xl mt-10 mr-auto mb-8 ml-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-white/60 font-geist">
                Intelligence Platform
              </span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2 font-geist">
                Financial operations that think ahead.
              </h2>
<div className="mt-8 relative">
<div className="hidden sm:flex flex-col gap-4 relative text-neutral-300 bg-transparent pr-4 pl-4">
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-black border-emerald-400 border-2 rounded-full mt-0.5">
<div className="w-1.5 h-1.5 absolute top-0.5 left-0.5 bg-emerald-400 rounded-full"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-emerald-300 font-geist">
                          Real-time reconciliation
                        </span>
<p className="text-xs text-white/60 mt-1 font-geist">
                          AI-powered transaction matching across 200+ accounts
                        </p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-teal-400 bg-black z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-teal-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-teal-300 font-geist">
                          Predictive cashflow
                        </span>
<p className="text-xs text-white/60 mt-1 font-geist">
                          30-day ML forecasts with 98.5% accuracy
                        </p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-cyan-400 bg-black z-10 relative mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-cyan-300 font-geist">
                          Automated workflows
                        </span>
<p className="text-xs text-white/60 mt-1 font-geist">
                          Smart rules that adapt to your finance operations
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight font-geist">
                  Intelligent by design
                </p>
<p className="text-sm text-white/70 mt-1 max-w-sm font-geist">
                  From treasury management to payment orchestration, every
                  feature is built to give you clarity and control at enterprise
                  scale.
                </p>
<a className="inline-flex items-center justify-center gap-2 h-10 hover:bg-emerald-300 transition text-sm font-medium text-black bg-emerald-400 rounded-full mt-4 px-4 max-w-sm font-geist" href="#features">
                  Explore capabilities
                  <span className="inline-flex h-2 w-2 rounded-full bg-black"></span>
</a>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 relative">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-gradient before:rounded-2xl rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/01296f44-0b19-41ad-b7cb-1d401455f1af_800w.jpg)]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">
                  Treasury
                </span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">
                  Multi-currency ops
                </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d8ff092-132d-4cec-88a1-ac20bce98b33_800w.jpg)] bg-cover border-gradient before:rounded-2xl rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur font-geist">
<svg className="w-[14px] h-[14px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">
                  Payments
                </span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">
                  Smart collections
                </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-gradient before:rounded-2xl rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf8a505e-077b-4767-a4a6-5f049de93919_800w.jpg)]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur font-geist">
<svg className="w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">
                  Teams
                </span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">
                  Role-based access
                </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-gradient before:rounded-2xl rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7d84a3f-8703-4f20-b660-fd8965a83b5c_800w.jpg)]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="17" x2="22" y1="8" y2="13"></line>
<line x1="22" x2="17" y1="8" y2="13"></line>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">
                  Analytics
                </span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">
                  Executive dashboards
                </p>
</div>
</article>
</div>
</div>
</section>
<section className="sm:px-6 sm:ml-auto sm:mr-auto sm:mt-40 sm:mb-40 max-w-7xl mt-10 mr-auto mb-8 ml-auto px-4">
<div className="relative sm:mt-12 overflow-hidden bg-white/5 backdrop-blur-xl border-gradient before:rounded-[40px] rounded-[40px]">
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl sm:text-2xl text-neutral-100 font-geist tracking-tight font-medium">
                Featured Financial Solutions
              </h2>
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors font-geist" href="#">
<span className="font-geist">View all</span>
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="relative aspect-[16/10]">
<img alt="Futuristic Metallic Atom Symbol on Black" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af757665-5346-4907-89cf-3b2b013be82e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-white bg-cyan-600/90 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 font-geist">
                    Popular
                  </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist">
                        Multi-Currency Treasury
                      </h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                        Global Operations
                      </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-neutral-100 font-geist">
                        Enterprise
                      </div>
<div className="text-[11px] text-neutral-400 font-geist">
                        150+ currencies • Real-time FX
                      </div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                      View demo
                    </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</article>
<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="relative aspect-[16/10]">
<img alt="Glowing Abstract Light Sphere on Black" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8ffd6d5d-0003-4e89-95a9-651662896da6_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-white bg-indigo-900/90 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 font-geist">
                    Advanced
                  </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist">
                        Automated Reconciliation
                      </h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                        All Regions
                      </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-neutral-100 font-geist">
                        Premium
                      </div>
<div className="text-[11px] text-neutral-400 font-geist">
                        AI-powered • 99.8% accuracy
                      </div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                      View demo
                    </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</article>
<article className="group overflow-hidden bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="relative aspect-[16/10]">
<img alt="Floating Bitcoin and Ethereum coins on black background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5607922-3e3a-4da8-958a-13f3bb19c07c_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 text-[11px] font-medium text-indigo-900 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 font-geist">
                    Live Now
                  </div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 font-geist">
                        Cash Flow Forecasting
                      </h3>
<p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-geist">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                        SMB to Enterprise
                      </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-neutral-100 font-geist">
                        Standard
                      </div>
<div className="text-[11px] text-neutral-400 font-geist">
                        30-day predictions • ML models
                      </div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 border border-white/10 font-geist">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="19" r="3"></circle>
<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
<circle cx="18" cy="5" r="3"></circle>
</svg>
                      Get started
                    </button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-neutral-200 hover:bg-white/10">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
</div>
</article>
</div>
</div>
</div>
</section>
<section className="sm:px-6 sm:ml-auto sm:mr-auto sm:mt-40 sm:mb-40 max-w-7xl mt-16 mr-auto mb-16 ml-auto px-4">
<div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border-gradient before:rounded-[40px] rounded-[40px]">
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]"></div>
<div className="absolute -top-16 -right-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 sm:p-16 pt-12 pr-8 pb-12 pl-8 text-center">
<span className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-200 font-geist">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
              Ready to transform your finance operations?
            </span>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-geist font-medium text-white">
              Start your journey to financial clarity
            </h2>
<p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-geist">
              Join thousands of finance teams using Quantivo to streamline
              operations, forecast with confidence, and scale with ease.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
<a className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-300 transition font-geist shadow-lg shadow-emerald-900/25" href="#">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
                Get started free
              </a>
<a className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition font-geist" href="#">
                Schedule a demo
                <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>
</div>



<footer className="sm:px-6 md:px-10 md:pt-20 md:pb-20 w-full max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-10 pl-4">
<div className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl border-gradient before:rounded-3xl">
<div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<h3 className="text-2xl font-medium text-white tracking-tight font-geist">
                  Water
                </h3>
</div>
<p className="text-white/70 max-w-3xl font-geist">
                Financial intelligence for modern companies. Connect your
                accounts, automate reconciliation, and forecast with confidence.
              </p>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2.5 py-1 text-xs font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Available 24/7
                    </div>
<h4 className="text-white font-medium tracking-tight font-geist">
                      Get in touch
                    </h4>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-emerald-400 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">
                          Enterprise-grade security and compliance
                        </span>
</li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-emerald-400 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">
                          Dedicated implementation support
                        </span>
</li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-emerald-400 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">
                          Flexible pricing for teams of all sizes
                        </span>
</li>
</ul>
<div className="flex items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 text-white hover:text-emerald-300 transition font-geist" href="mailto:hello@water.io">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
                        hello@quantivo.io
                      </a>
</div>
</div>
<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist" htmlFor="name">
                        Your name
                      </label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist" htmlFor="email">
                        Email
                      </label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist" htmlFor="company">
                        Company
                      </label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist" id="company" name="company" placeholder="Acme Inc." type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist" htmlFor="interest">
                        I'm interested in
                      </label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist" id="interest" name="interest">
<option className="bg-black" value="demo">
                          Scheduling a demo
                        </option>
<option className="bg-black" value="pricing">
                          Pricing information
                        </option>
<option className="bg-black" value="integration">
                          Integration support
                        </option>
<option className="bg-black" value="enterprise">
                          Enterprise solutions
                        </option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist" htmlFor="message">
                        Message
                      </label>
<textarea className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 font-geist" id="message" name="message" placeholder="Tell us about your financial operations needs..." rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-end">
<button className="inline-flex gap-2 ring-1 ring-emerald-300 hover:bg-emerald-300 transition text-sm font-medium text-black bg-emerald-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center font-geist" type="submit">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
                        Send message
                      </button>
</div>
</form>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
<div>
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em] font-geist">
                Product
              </h4>
<ul className="mt-3 space-y-2 text-sm">
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Features
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Integrations
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Security
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Pricing
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em] font-geist">
                Solutions
              </h4>
<ul className="mt-3 space-y-2 text-sm">
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Startups
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Enterprise
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Treasury
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Accounting
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em] font-geist">
                Company
              </h4>
<ul className="mt-3 space-y-2 text-sm">
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    About
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Careers
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#contact">
                    Contact
                  </a>
</li>
<li>
<a className="text-neutral-300 hover:text-white transition font-geist" href="#">
                    Press
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="uppercase text-xs text-white/80 tracking-[0.2em] font-geist">
                Stay updated
              </h4>
<form className="mt-3 flex items-center gap-2">
<div className="relative flex-1">
<svg className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-xs text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-9 font-geist" name="subscribeEmail" placeholder="you@example.com" required="" type="email"/>
</div>
<button className="inline-flex gap-2 ring-1 ring-white/80 hover:bg-emerald-400 hover:ring-emerald-300 transition text-xs font-medium text-black bg-white rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 items-center font-geist" type="submit">
                  Join
                </button>
</form>
<div className="mt-4 flex items-center gap-3">
<a aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<p className="text-white/60 text-sm font-geist">
              © 2025 Water. All rights reserved.
            </p>
<div className="flex items-center gap-4 text-white/60 text-sm">
<a className="hover:text-white transition font-geist" href="#">
                Privacy
              </a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition font-geist" href="#">
                Terms
              </a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition inline-flex items-center gap-1 font-geist" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
                Back to top
              </a>
</div>
</div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"></div>
<div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
</footer>

    </>
  );
}
