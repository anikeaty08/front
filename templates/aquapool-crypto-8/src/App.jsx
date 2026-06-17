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



    if (window.lucide) {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-40 -left-40 w-72 h-72 bg-sky-100/70 rounded-full blur-3xl"></div>
<div className="absolute -bottom-32 -right-24 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl"></div>
</div>

<div className="relative flex-1 flex flex-col">

<header className="w-full border-b border-sky-100/80 bg-sky-50/70 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex sm:h-20 h-16 items-center justify-between">

<div className="flex items-center gap-2.5">
<div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm shadow-sky-100 border border-sky-100">
<span className="text-sky-500 text-lg font-normal tracking-tight" style={{fontFamily: '\'Pacifico\', cursive'}}>A</span>
</div>
<div className="flex flex-col">
<span className="text-base sm:text-lg font-medium tracking-tight text-slate-900" style={{fontFamily: '\'Pacifico\', cursive'}}>
                AquaPool
              </span>
<span className="text-[11px] sm:text-xs text-slate-500">Calm crypto mining, cool pool vibes</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Dashboard</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Pools</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Payouts</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Docs</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full border border-sky-100 bg-white/80 text-xs sm:text-sm text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-slate-900 transition-all shadow-sm">
<svg className="lucide lucide-life-buoy w-4 h-4 mr-1.5 text-sky-400" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
              Support
            </button>
<button className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-sky-400 text-white text-xs sm:text-sm font-medium tracking-tight shadow-sm shadow-sky-200 border border-sky-300 hover:bg-sky-400/90 hover:border-sky-400 transition-all">
<svg className="lucide lucide-log-in w-4 h-4 mr-1.5 text-white" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Launch app
            </button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<section className="sm:px-6 lg:px-8 sm:pt-16 sm:pb-24 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-14 items-center">

<div className="">
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-sky-100 bg-white/70 text-[11px] sm:text-xs text-sky-700 mb-4 shadow-sm">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Live: 2,184 miners relaxing in the pool
            </span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-4">
              A crypto mining pool<br className="hidden sm:block"/>
              that feels like a day at the pool.
            </h1>
<p className="text-sm sm:text-base text-slate-600 max-w-xl mb-6">
              Dive into steady rewards with a smooth, low-stress mining pool. Cool blue dashboards, gentle gradients, and smart routing keep your hashrate floating where it matters most.
            </p>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
<button className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-full bg-sky-400 text-white text-sm font-medium tracking-tight shadow-md shadow-sky-200 border border-sky-300 hover:bg-sky-400/90 hover:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 transition-all">
<svg className="lucide lucide-waves w-4 h-4 mr-2 text-white" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
                Start mining in 2 minutes
              </button>
<button className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-sky-100 bg-white/80 text-sm text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 transition-all">
<svg className="lucide lucide-play-circle w-4 h-4 mr-1.5 text-sky-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Watch overview
              </button>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<div className="flex -space-x-2">
<img alt="Miner avatar 1" className="h-7 w-7 rounded-full border-2 border-sky-50 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Miner avatar 2" className="h-7 w-7 rounded-full border-2 border-sky-50 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Miner avatar 3" className="h-7 w-7 rounded-full border-2 border-sky-50 object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="h-7 w-7 rounded-full border-2 border-sky-50 bg-pink-50 text-[10px] flex items-center justify-center text-pink-500 font-medium tracking-tight">
                  +2k
                </div>
</div>
<p className="text-xs text-slate-500">
                98.4% uptime · PPS+ payouts · Zero-fee first 30 days
              </p>
</div>
</div>

<div className="relative">

<div className="absolute inset-0 -top-6 -right-4 bg-sky-100/60 blur-2xl rounded-full"></div>
<div className="relative bg-white/85 backdrop-blur-md border border-sky-100 rounded-3xl shadow-lg shadow-sky-100/80 p-4 sm:p-5">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-2xl bg-sky-100 flex items-center justify-center border border-sky-200 shadow-sm">
<svg className="lucide lucide-wallet-cards w-4 h-4 text-sky-500" data-lucide="wallet-cards" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight text-slate-900">Aqua ETH Pool</span>
<span className="text-[11px] text-slate-500">calm-hash-0247</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 text-[11px]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Stable
                </span>
</div>

<div className="relative mb-4">
<div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white border border-sky-100">

<div className="absolute inset-x-0 bottom-0 h-3/5 bg-sky-200/80"></div>

<div className="absolute inset-x-0 bottom-10 h-8 bg-sky-200/70 opacity-80 rounded-full blur-xl"></div>
<div className="absolute inset-x-0 bottom-6 h-8 bg-sky-100/80 opacity-90 rounded-full blur-xl"></div>
<div className="absolute inset-x-0 bottom-3 h-7 bg-sky-50/90 opacity-90 rounded-full blur-xl"></div>

<div className="absolute inset-3 rounded-2xl border border-white/40 pointer-events-none"></div>
<div className="absolute inset-3 rounded-2xl bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.5)_1px,_transparent_0)] [background-size:10px_10px] opacity-40"></div>

<div className="absolute left-6 top-5 h-8 w-8 rounded-full bg-yellow-200 border border-yellow-300/70 flex items-center justify-center shadow-sm shadow-yellow-100 hover:-translate-y-0.5 hover:shadow-md transition-transform">
<span className="text-xs font-medium tracking-tight text-yellow-800">Ξ</span>
</div>
<div className="absolute right-4 top-9 h-7 w-7 rounded-full bg-orange-100 border border-orange-200/80 flex items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-transform">
<span className="text-[11px] font-medium tracking-tight text-orange-800">BTC</span>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-3 h-7 w-7 rounded-full bg-pink-200 border border-pink-300/80 flex items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-transform">
<span className="text-[11px] font-medium tracking-tight text-pink-900">SOL</span>
</div>

<div className="absolute right-3 bottom-5 flex flex-col items-center">
<div className="h-12 w-5 rounded-full border-2 border-slate-200 border-l-transparent border-t-transparent"></div>
<div className="h-0.5 w-5 bg-slate-200 mb-1"></div>
<div className="h-0.5 w-5 bg-slate-200"></div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-1">
<div className="h-6 w-10 rounded-xl bg-sky-900/80 border border-sky-700/60 flex items-center justify-center shadow-sm shadow-sky-900/30">
<svg className="lucide lucide-cpu w-3.5 h-3.5 text-sky-100" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="h-4 w-1.5 rounded-full bg-pink-300 border border-pink-400/80 shadow-sm"></div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-4">
<div className="rounded-2xl border border-sky-100 bg-sky-50/70 px-3 py-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-[11px] text-slate-500">Pool hashrate</span>
<svg className="lucide lucide-activity w-3.5 h-3.5 text-sky-500" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<p className="text-sm font-semibold tracking-tight text-slate-900">4.23 TH/s</p>
<p className="text-[11px] text-emerald-600 flex items-center gap-1 mt-0.5">
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    +3.4% today
                  </p>
</div>
<div className="rounded-2xl border border-pink-100 bg-pink-50/80 px-3 py-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-[11px] text-slate-500">24h rewards</span>
<svg className="lucide lucide-coins w-3.5 h-3.5 text-pink-500" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<p className="text-sm font-semibold tracking-tight text-slate-900">0.842 ETH</p>
<p className="text-[11px] text-slate-500 mt-0.5">Avg 0.035 ETH/hr</p>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="rounded-2xl border border-sky-100 bg-white/75 px-3 py-2.5">
<div className="flex items-center justify-between mb-1.5">
<span className="text-[11px] text-slate-500">Reward flow</span>
<span className="text-[11px] text-slate-500">Last 6 hours</span>
</div>
<div className="h-14 flex items-end gap-1">
<div className="flex-1 rounded-t-full bg-sky-100 hover:bg-sky-200 transition-colors" style={{height: '35%'}}></div>
<div className="flex-1 rounded-t-full bg-sky-200 hover:bg-sky-300 transition-colors" style={{height: '55%'}}></div>
<div className="flex-1 rounded-t-full bg-sky-100 hover:bg-sky-200 transition-colors" style={{height: '40%'}}></div>
<div className="flex-1 rounded-t-full bg-sky-300 hover:bg-sky-400 transition-colors" style={{height: '80%'}}></div>
<div className="flex-1 rounded-t-full bg-sky-200 hover:bg-sky-300 transition-colors" style={{height: '60%'}}></div>
<div className="flex-1 rounded-t-full bg-sky-100 hover:bg-sky-200 transition-colors" style={{height: '45%'}}></div>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-sky-100 bg-sky-50/80 px-3 py-2.5">
<div>
<p className="text-[11px] text-slate-500 mb-0.5">Mode</p>
<p className="text-xs font-medium tracking-tight text-slate-900 flex items-center gap-1.5">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</span>
                      Chill &amp; steady (PPS+)
                    </p>
</div>
<button className="inline-flex items-center px-2.5 py-1 rounded-full bg-white text-[11px] text-slate-700 border border-sky-100 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-700 transition-all">
<svg className="lucide lucide-settings-2 w-3.5 h-3.5 mr-1.5 text-slate-500" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                    Adjust pool
                  </button>
</div>
</div>
</div>

<div className="hidden sm:flex absolute -bottom-6 -right-2 bg-white/90 backdrop-blur-md border border-pink-100 rounded-2xl shadow-md shadow-pink-100 px-3 py-2.5 items-center gap-3">
<div className="h-7 w-7 rounded-xl bg-pink-100 flex items-center justify-center border border-pink-200">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-pink-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-slate-500">New to mining?</span>
<span className="text-[11px] font-medium tracking-tight text-slate-900">Copy ready-made configs</span>
</div>
<button className="text-[11px] text-pink-600 hover:text-pink-700 hover:underline font-medium tracking-tight">
                Quick join
              </button>
</div>
</div>
</div>

<div className="mt-14 border-t border-sky-100 pt-8 grid md:grid-cols-3 gap-6">
<div className="flex gap-3">
<div className="h-9 w-9 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100">
<svg className="lucide lucide-droplets w-4 h-4 text-sky-500" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-0.5">Smooth payout flow</h3>
<p className="text-xs text-slate-600">
                PPS+ payouts every hour, visible as gentle “waves” in your dashboard, not sudden spikes.
              </p>
</div>
</div>
<div className="flex gap-3">
<div className="h-9 w-9 rounded-2xl bg-pink-50 flex items-center justify-center border border-pink-100">
<svg className="lucide lucide-shield-check w-4 h-4 text-pink-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-0.5">Guarded &amp; transparent</h3>
<p className="text-xs text-slate-600">
                Global servers, double-checked shares, and clear fee breakdowns. No murky depths.
              </p>
</div>
</div>
<div className="flex gap-3">
<div className="h-9 w-9 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100">
<svg className="lucide lucide-sun w-4 h-4 text-amber-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-0.5">Cool rigs, calm UI</h3>
<p className="text-xs text-slate-600">
                Heat-aware insights and a soothing interface that keeps your focus where it should be.
              </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-sky-100 bg-sky-50/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
<p>© <span className="font-medium tracking-tight text-slate-700" style={{fontFamily: '\'Pacifico\', cursive'}}>AquaPool</span> · Made for calm miners.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-800 transition-colors" href="#">Status</a>
<a className="hover:text-slate-800 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-800 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
