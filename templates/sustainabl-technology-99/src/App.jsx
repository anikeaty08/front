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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 h-px w-[92%] bg-gradient-to-r from-transparent via-emerald-200 to-transparent pointer-events-none z-40"></div>

<header className="relative z-30">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<nav className="flex md:h-20 h-16 items-center justify-between">

<a aria-label="Ambiosfera Home" className="group inline-flex items-center gap-3" href="#">
<span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-emerald-500/20 bg-emerald-500/10 shadow-sm">
<span className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/20 to-sky-400/10"></span>
<span className="relative text-emerald-700 text-sm font-semibold tracking-tight font-geist">A</span>
</span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 font-geist">Ambiosfera</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 font-geist" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 font-geist" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 font-geist" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-sky-600 text-white text-sm font-medium px-4 py-2.5 shadow-sm hover:from-emerald-700 hover:to-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white font-geist" href="#contact">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Get in touch
            </a>
<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 ring-1 ring-slate-300 hover:ring-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white" id="mobileToggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<div className="md:hidden hidden" id="mobileMenu">
<div className="mt-2 rounded-xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
<a className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 font-geist" href="#solutions">Solutions</a>
<a className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 font-geist" href="#about">About Us</a>
<a className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-t border-slate-200 font-geist" href="#contact">Contact</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-20 h-72 w-72 bg-emerald-300/30 blur-3xl rounded-full"></div>
<div className="absolute top-16 -right-28 h-80 w-80 bg-sky-300/30 blur-3xl rounded-full"></div>
<div className="absolute -bottom-24 left-1/3 h-72 w-72 bg-teal-300/20 blur-3xl rounded-full"></div>
</div>
<div className="mx-auto max-w-7xl px-6 md:px-8 relative">
<div className="grid lg:grid-cols-2 gap-10 md:gap-14 md:py-20 pt-14 pb-14 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full ring-1 ring-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 font-geist">
<svg className="lucide lucide-leaf w-3.5 h-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              Sustainable Innovation
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 font-geist font-medium" style={{}}>
              Technology that powers efficient, intelligent, and greener spaces
            </h1>
<p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600 font-geist">
              Ambiosfera builds advanced solutions for environmental monitoring, energy optimization, and smart buildings—helping organizations reduce costs, cut emissions, and operate with confidence.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-sky-600 text-white text-sm font-medium px-5 py-3.5 shadow-sm hover:from-emerald-700 hover:to-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white font-geist" href="#solutions">
                Explore Solutions
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg text-emerald-700 ring-1 ring-emerald-500/30 bg-white hover:bg-emerald-50 text-sm font-medium px-5 py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white font-geist" href="#contact">
                Talk to us
                <svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</a>
</div>

<div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-gauge w-4 h-4 text-emerald-600" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="text-xs font-medium font-geist">Efficiency</span>
</div>
<p className="mt-2 text-2xl tracking-tight text-slate-900 font-geist font-medium" style={{}}>25-40%</p>
<p className="text-xs text-slate-500 font-geist">Avg. energy savings</p>
</div>
<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-factory w-4 h-4 text-emerald-600" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
<span className="text-xs font-medium font-geist">Deployments</span>
</div>
<p className="mt-2 text-2xl tracking-tight text-slate-900 font-geist font-medium" style={{}}>120+</p>
<p className="text-xs text-slate-500 font-geist">Sites optimized</p>
</div>
<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-leaf w-4 h-4 text-emerald-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-xs font-medium font-geist">Emissions</span>
</div>
<p className="mt-2 text-2xl tracking-tight text-slate-900 font-geist font-medium" style={{}}>-30k tCO₂</p>
<p className="text-xs text-slate-500 font-geist">Carbon avoided</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden ring-slate-200 ring-1 rounded-2xl shadow-sm">
<img alt="Futuristic sustainable cityscape with smart energy systems" className="sm:h-[420px] w-full h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bc31fd3f-b6b3-4e9f-bf5d-29182fef1421_1600w.jpg"/>
<div className="absolute inset-0 pointer-events-none mix-blend-overlay">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="20" id="grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15,23,42,0.10)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-0 right-0 m-3 inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur ring-1 ring-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 font-geist">
<svg className="lucide lucide-cpu w-3.5 h-3.5 text-emerald-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                IoT + AI
              </div>
</div>

<div className="hidden lg:flex absolute -left-4 -bottom-6 flex-col gap-3">
<div className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm px-3 py-2">
<svg className="lucide lucide-battery-charging w-4 h-4 text-emerald-600" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
<span className="text-xs font-medium text-slate-700 font-geist">Smart energy</span>
</div>
<div className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm px-3 py-2">
<svg className="lucide lucide-thermometer-sun w-4 h-4 text-emerald-600" data-lucide="thermometer-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a4 4 0 0 0-2 7.5"></path><path d="M12 3v2"></path><path d="m6.6 18.4-1.4 1.4"></path><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path><path d="M4 13H2"></path><path d="M6.34 7.34 4.93 5.93"></path></svg>
<span className="text-xs font-medium text-slate-700 font-geist">Comfort control</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative md:py-24 pt-16 pb-16">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 font-geist font-medium" style={{}}>Solutions</h2>
<p className="text-slate-600 font-geist max-w-2xl mt-3">
              Integrated platforms that connect energy, sensors, and automation—delivering measurable sustainability outcomes.
            </p>
</div>
<div className="inline-flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 ring-1 ring-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1.5 font-geist">
<svg className="lucide lucide-leaf w-3.5 h-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> Environment
            </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 ring-1 ring-sky-100 text-sky-700 text-xs font-medium px-3 py-1.5 font-geist">
<svg className="lucide lucide-building-2 w-3.5 h-3.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg> Buildings
            </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 ring-1 ring-teal-100 text-teal-700 text-xs font-medium px-3 py-1.5 font-geist">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Energy
            </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-10">

<article className="group relative rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 transition-colors h-full lg:col-span-7 overflow-hidden">
<div className="relative h-40 sm:h-48 w-full overflow-hidden">
<img alt="Control room dashboard for energy optimization" className="group-hover:opacity-95 transition-opacity w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur px-3 py-1.5 ring-1 ring-slate-200 text-xs font-medium text-slate-700 font-geist">
<svg className="w-3.5 h-3.5 text-emerald-600" data-lucide="gauge" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                Energy Optimization
              </div>
</div>
<div className="p-6 h-full flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 font-geist">Energy Optimization Platform</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-600 font-geist">
                Real-time analytics, predictive control, and tariff-aware scheduling that reduce consumption without compromising comfort.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  ML-driven setpoint optimization
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Demand response &amp; peak shaving
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Portfolio benchmarking
                </li>
</ul>
<div className="mt-6 border-t border-slate-200 pt-4">
<p className="text-xs text-slate-500 font-geist">Featured</p>
</div>
</div>
</article>

<article className="group relative rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 transition-colors h-full lg:col-span-5 overflow-hidden">
<div className="relative h-36 sm:h-40 w-full overflow-hidden">
<img alt="Smart building automation panel and sensors" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur px-3 py-1.5 ring-1 ring-slate-200 text-xs font-medium text-slate-700 font-geist">
<svg className="w-3.5 h-3.5 text-sky-700" data-lucide="building-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                Building Automation
              </div>
</div>
<div className="p-6 h-full flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 font-geist">Smart Building Automation</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-600 font-geist">
                Interoperable controls that unify HVAC, lighting, and occupancy systems for healthier, responsive buildings.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Open protocols (BACnet, Modbus, MQTT)
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Occupancy &amp; indoor air quality insights
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Secure remote management
                </li>
</ul>
</div>
</article>

<article className="group relative rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 transition-colors h-full lg:col-span-5 overflow-hidden">
<div className="relative h-36 sm:h-40 w-full overflow-hidden">
<img alt="Environmental sensors and field monitoring" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur px-3 py-1.5 ring-1 ring-slate-200 text-xs font-medium text-slate-700 font-geist">
<svg className="w-3.5 h-3.5 text-teal-700" data-lucide="radar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
                Environmental Sensing
              </div>
</div>
<div className="p-6 h-full flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 font-geist">Environmental Sensing &amp; Insights</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-600 font-geist">
                Scalable IoT sensor networks for air, water, and noise monitoring—turning raw signals into actionable intelligence.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Edge analytics &amp; alerts
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  API-first data platform
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  ESG &amp; compliance reporting
                </li>
</ul>
</div>
</article>

<article className="group relative rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 transition-colors h-full lg:col-span-5 overflow-hidden">
<div className="relative h-36 sm:h-40 w-full overflow-hidden">
<img alt="Battery storage and electric vehicle charging" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur px-3 py-1.5 ring-1 ring-slate-200 text-xs font-medium text-slate-700 font-geist">
<svg className="w-3.5 h-3.5 text-emerald-700" data-lucide="battery-charging" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
                Storage &amp; Grid
              </div>
</div>
<div className="p-6 h-full flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 font-geist">Storage &amp; Grid Integration</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-600 font-geist">
                Optimize batteries, EV charging, and on-site generation with market signals to unlock flexibility and revenue.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Forecasting &amp; arbitrage
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  V2G &amp; smart charging
                </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Resilience strategies
                </li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="about">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 font-geist">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-emerald-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              About Ambiosfera
            </div>
<h2 className="mt-4 text-3xl md:text-4xl tracking-tight text-slate-900 font-geist font-medium" style={{}}>Engineering a positive climate future</h2>
<p className="mt-4 text-slate-600 font-geist">
              We blend environmental science, data engineering, and human-centered design to create systems that are both powerful and elegant. Our teams partner with asset owners, cities, and operators to deliver results that endure.
            </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-flask-conical w-4 h-4 text-emerald-600" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
<span className="text-xs font-medium font-geist">Research</span>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist">Pilots with universities and labs to validate impact.</p>
</div>
<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-binary w-4 h-4 text-emerald-600" data-lucide="binary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="4" x="14" y="14"></rect><rect height="6" rx="2" width="4" x="6" y="4"></rect><path d="M6 20h4"></path><path d="M14 10h4"></path><path d="M6 14h2v6"></path><path d="M14 4h2v6"></path></svg>
<span className="text-xs font-medium font-geist">Design</span>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist">Open, modular architecture built for longevity.</p>
</div>
<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-wrench w-4 h-4 text-emerald-600" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="text-xs font-medium font-geist">Deployment</span>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist">Secure rollouts with training and lifecycle services.</p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-4">
<div className="inline-flex items-center gap-2 rounded-lg bg-white ring-1 ring-slate-200 px-3 py-2 text-sm text-slate-700 font-geist">
<svg className="lucide lucide-lock w-4 h-4 text-emerald-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Privacy by design
              </div>
<div className="inline-flex items-center gap-2 rounded-lg bg-white ring-1 ring-slate-200 px-3 py-2 text-sm text-slate-700 font-geist">
<svg className="lucide lucide-shield w-4 h-4 text-emerald-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                Security-first
              </div>
<div className="inline-flex items-center gap-2 rounded-lg bg-white ring-1 ring-slate-200 px-3 py-2 text-sm text-slate-700 font-geist">
<svg className="lucide lucide-plug-zap w-4 h-4 text-emerald-600" data-lucide="plug-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path><path d="m2 22 3-3"></path><path d="M7.5 13.5 10 11"></path><path d="M10.5 16.5 13 14"></path><path d="m18 3-4 4h6l-4 4"></path></svg>
                Interoperable
              </div>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
<img alt="Team working on smart building and environmental technologies" className="w-full h-[360px] object-cover" src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg bg-white/90 backdrop-blur px-3 py-1.5 ring-1 ring-slate-200 text-xs font-medium text-slate-700 font-geist">
<svg className="lucide lucide-users w-3.5 h-3.5 text-emerald-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Multidisciplinary teams
              </div>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="contact">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid lg:grid-cols-3 gap-10 md:gap-14">
<div className="lg:col-span-1">
<h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 font-geist font-medium" style={{}}>Let’s build the future responsibly</h2>
<p className="mt-3 text-slate-600 font-geist">
              Tell us about your goals. Our team will respond within 2 business days.
            </p>
<div className="mt-6 space-y-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
<svg className="lucide lucide-mail w-5 h-5 text-emerald-700" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</span>
<div>
<p className="text-sm font-medium text-slate-700 font-geist">Email</p>
<a className="text-sm text-emerald-700 hover:underline font-geist" href="mailto:hello@ambiosfera.com">hello@ambiosfera.com</a>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/20">
<svg className="lucide lucide-phone w-5 h-5 text-sky-700" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465 A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</span>
<div>
<p className="text-sm font-medium text-slate-700 font-geist">Phone</p>
<a className="text-sm text-emerald-700 hover:underline font-geist" href="tel:+1234567890">+1 (234) 567-890</a>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 ring-1 ring-teal-500/20">
<svg className="lucide lucide-map-pin w-5 h-5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</span>
<div>
<p className="text-sm font-medium text-slate-700 font-geist">HQ</p>
<p className="text-sm text-slate-600 font-geist">120 Greenway Ave, Suite 400, Lisbon</p>
</div>
</div>
</div>
<div className="mt-6 inline-flex items-center gap-3">
<a aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50" href="#">
<svg className="lucide lucide-linkedin w-4.5 h-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="X" className="inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50" href="#">
<svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Github" className="inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50" href="#">
<svg className="lucide lucide-github w-4.5 h-4.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="lg:col-span-2">
<form className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm p-6 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="text-sm font-medium text-slate-700 font-geist" htmlFor="name">Full name</label>
<div className="mt-2 relative">
<span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path></svg></span></div></div></div></form></div></div></div></section>
    </>
  );
}
