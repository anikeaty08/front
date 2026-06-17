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
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<a aria-label="Interior Design Studio Home" className="inline-flex items-center" href="#">
<svg aria-hidden="true" className="h-8 w-8" fill="none" viewbox="0 0 32 32">
<rect fill="#0f172a" height="28" rx="7" width="28" x="2" y="2"></rect>
<rect fill="white" height="18" rx="1.5" width="3" x="9" y="7"></rect>
<path d="M14.5 7c6 0 10 4 10 9s-4 9-10 9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
<span className="sr-only">Interior Design Studio</span>
</a>
<div className="hidden sm:flex items-center gap-3 text-slate-500 text-sm">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin" strokeWidth="1.5"></i>
              Malaysia
            </span>
<span className="text-slate-300">|</span>
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="clock" strokeWidth="1.5"></i>
              1–2 weeks turnaround
            </span>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3.5 py-2 text-sm font-medium hover:bg-emerald-500 hover:shadow-sm hover:-translate-y-0.5 transition-all" href="https://wa.me/60123456789?text=Hi%20there!%20I%27m%20interested%20in%20a%203D%20interior%20design%20quote.%20Property%20type%3A%20%5BCondo%2FLanded%2FNew%5D%2C%20Size%3A%20%5Bsqm%2Fsf%5D.%20Preferred%20style%3A%20%5BModern%2FJapandi%2FMinimal%5D.">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
            Free Quote on WhatsApp
          </a>
</div>
</div>
</header>
<main className="">

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-slate-900">
                See Your Dream Home Before You Renovate.
              </h1>
<p className="text-lg text-slate-600 max-w-xl">
                Affordable 3D interior design &amp; rendering service in Malaysia. Get a clear vision before spending tens of thousands on renovation.
              </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
<a className="inline-flex justify-center items-center gap-2 hover:bg-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all text-base font-medium text-white bg-emerald-600 rounded-md pt-3 pr-5 pb-3 pl-5" href="https://wa.me/60123456789?text=Hi%20there!%20I%27m%20interested%20in%20a%203D%20interior%20design%20quote.%20Property%20type%3A%20%5BCondo%2FLanded%2FNew%5D%2C%20Size%3A%20%5Bsqm%2Fsf%5D.%20Preferred%20style%3A%20%5BModern%2FJapandi%2FMinimal%5D.">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                  Get Free Quote on WhatsApp
                </a>
<button className="inline-flex justify-center items-center gap-2 rounded-md border border-slate-300 text-slate-700 px-5 py-3 text-base font-medium hover:bg-slate-50 hover:border-slate-400 transition-all" id="lead-magnet-open">
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
                  Download 5 Style Boards (Free)
                </button>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="Client" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Client" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Client" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-sm text-slate-600">
                  Trusted by 200+ Malaysian homeowners
                </div>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<div className="bg-slate-100 relative">

<div className="relative aspect-[16/10]">
<img alt="Empty room before renovation" className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-100 object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="3D render" className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Completed renovation" className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 object-cover" id="stage-real" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
</div>

<div className="p-3 sm:p-4 border-t border-slate-200 bg-white flex items-center justify-between">
<div className="text-sm text-slate-600 hidden sm:block">Preview stages:</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="stage-tab inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50" data-stage="empty">
<i className="w-4 h-4" data-lucide="box" strokeWidth="1.5"></i>
                        Empty
                      </button>
<button className="stage-tab inline-flex gap-2 hover:bg-slate-50 text-sm font-medium text-slate-700 border-slate-300 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center" data-stage="render">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
                        3D Render
                      </button>
<button className="stage-tab inline-flex gap-2 hover:bg-slate-50 text-sm font-medium text-slate-700 border-slate-300 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center" data-stage="real">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
                        Real
                      </button>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-3 right-3 bg-white rounded-md shadow px-3 py-2 border border-slate-200 text-xs text-slate-600">
                95% accurate to real-life renovation
              </div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-4">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">
                Renovations cost RM50k–200k. Don’t guess.
              </h2>
<p className="text-slate-600">
                Without proper design, you risk wasting money on wrong furniture, mismatched finishes, or layouts that don’t work.
              </p>
<ul className="space-y-3 text-slate-700">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-500 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
                  Wrong sofa size blocking walkway
                </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-500 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
                  Dark tiles + low lighting = gloomy rooms
                </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-500 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
                  Overbuilt carpentry that eats budget
                </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-500 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
                  Layout regrets you can’t undo
                </li>
</ul>
</div>
<div className="">
<div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="Renovation stress" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-md px-3 py-2 text-sm text-slate-700 border border-slate-200">
                  Avoid costly mistakes with clear visuals.
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Your renovation insurance.</h2>
<p className="mt-3 text-slate-600">We deliver 3D rendering, furniture layout, material selection, and lighting concepts—so you build once, the right way.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="view" strokeWidth="1.5"></i>
</div>
<div className="font-medium text-slate-900">Visualize</div>
</div>
<p className="mt-3 text-sm text-slate-600">Photoreal 3D renders show exactly how your space will look and feel.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="undo-2" strokeWidth="1.5"></i>
</div>
<div className="font-medium text-slate-900">Revise</div>
</div>
<p className="mt-3 text-sm text-slate-600">Iterate furniture, finishes, and layout before a single wall is built.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="font-medium text-slate-900">Build with confidence</div>
</div>
<p className="mt-3 text-sm text-slate-600">Our designs are 95% accurate to real-life renovation outcomes.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Portfolio</h2>
<p className="mt-2 text-slate-600">Before → 3D Render → Real Renovation</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 border border-slate-300 rounded-md px-3 py-2 hover:bg-slate-50" href="https://wa.me/60123456789?text=Can%20you%20send%20more%20portfolio%20samples%20on%20WhatsApp%3F">
<i className="w-4 h-4" data-lucide="images" strokeWidth="1.5"></i>
              Request more
            </a>
</div>
<div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<div className="p-3 border-b border-slate-200 flex items-center justify-between">
<div className="font-medium text-slate-900">Living Room</div>
<div className="text-xs text-slate-600">RM888</div>
</div>
<div className="p-3">
<div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
<img alt="Empty living room" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500" data-portfolio="empty-1" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="3D render living room" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="render-1" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Real living room" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="real-1" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="empty-1">
<i className="w-3.5 h-3.5" data-lucide="box" strokeWidth="1.5"></i> Empty
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="render-1">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i> 3D Render
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="real-1">
<i className="w-3.5 h-3.5" data-lucide="home" strokeWidth="1.5"></i> Real
                  </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<div className="p-3 border-b border-slate-200 flex items-center justify-between">
<div className="font-medium text-slate-900">Bedroom</div>
<div className="text-xs text-slate-600">RM888</div>
</div>
<div className="p-3">
<div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
<img alt="Empty bedroom" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500" data-portfolio="empty-2" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="3D render bedroom" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="render-2" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Real bedroom" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="real-2" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="empty-2">
<i className="w-3.5 h-3.5" data-lucide="box" strokeWidth="1.5"></i> Empty
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="render-2">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i> 3D Render
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="real-2">
<i className="w-3.5 h-3.5" data-lucide="home" strokeWidth="1.5"></i> Real
                  </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<div className="p-3 border-b border-slate-200 flex items-center justify-between">
<div className="font-medium text-slate-900">Kitchen</div>
<div className="text-xs text-slate-600">RM2,499</div>
</div>
<div className="p-3">
<div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
<img alt="Empty kitchen" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500" data-portfolio="empty-3" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="3D render kitchen" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="render-3" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Real kitchen" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="real-3" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="empty-3">
<i className="w-3.5 h-3.5" data-lucide="box" strokeWidth="1.5"></i> Empty
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="render-3">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i> 3D Render
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="real-3">
<i className="w-3.5 h-3.5" data-lucide="home" strokeWidth="1.5"></i> Real
                  </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<div className="p-3 border-b border-slate-200 flex items-center justify-between">
<div className="font-medium text-slate-900">Café Concept</div>
<div className="text-xs text-slate-600">RM2,499</div>
</div>
<div className="p-3">
<div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
<img alt="Empty cafe" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500" data-portfolio="empty-4" src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="3D render cafe" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="render-4" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Real cafe" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="real-4" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="empty-4">
<i className="w-3.5 h-3.5" data-lucide="box" strokeWidth="1.5"></i> Empty
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="render-4">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i> 3D Render
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="real-4">
<i className="w-3.5 h-3.5" data-lucide="home" strokeWidth="1.5"></i> Real
                  </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<div className="p-3 border-b border-slate-200 flex items-center justify-between">
<div className="font-medium text-slate-900">Condo Set</div>
<div className="text-xs text-slate-600">Full Home RM2,499</div>
</div>
<div className="p-3">
<div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
<img alt="Empty condo" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500" data-portfolio="empty-5" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="3D render condo" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="render-5" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Real condo" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="real-5" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="empty-5">
<i className="w-3.5 h-3.5" data-lucide="box" strokeWidth="1.5"></i> Empty
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="render-5">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i> 3D Render
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="real-5">
<i className="w-3.5 h-3.5" data-lucide="home" strokeWidth="1.5"></i> Real
                  </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<div className="p-3 border-b border-slate-200 flex items-center justify-between">
<div className="font-medium text-slate-900">Dining Area</div>
<div className="text-xs text-slate-600">RM888</div>
</div>
<div className="p-3">
<div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
<img alt="Empty dining" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500" data-portfolio="empty-6" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="3D render dining" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="render-6" src="https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Real dining" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" data-portfolio="real-6" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="empty-6">
<i className="w-3.5 h-3.5" data-lucide="box" strokeWidth="1.5"></i> Empty
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="render-6">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i> 3D Render
                  </button>
<button className="portfolio-tab inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" data-target="real-6">
<i className="w-3.5 h-3.5" data-lucide="home" strokeWidth="1.5"></i> Real
                  </button>
</div>
</div>
</div>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-3 text-base font-medium hover:bg-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all" href="https://wa.me/60123456789?text=I%27d%20like%20a%20free%20quote%20after%20viewing%20your%20portfolio.">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
              Get Free Quote on WhatsApp
            </a>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Packages &amp; Pricing</h2>
<p className="mt-2 text-slate-600">Book now, pay 50% deposit only.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow">
<div className="text-sm text-slate-500">Starter</div>
<div className="mt-2 text-3xl tracking-tight font-semibold text-slate-900">RM888</div>
<div className="mt-1 text-sm text-slate-600">1 room render, 2 revisions</div>
<ul className="mt-6 space-y-3 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Furniture layout</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Material &amp; color palette</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Lighting concept</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 text-slate-800 px-4 py-2.5 text-sm font-medium hover:bg-slate-50" href="https://wa.me/60123456789?text=I%27d%20like%20the%20Starter%20package%20(RM888).">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                Choose Starter
              </a>
<div className="mt-3 text-xs text-slate-500">50% deposit · balance on delivery</div>
</div>

<div className="relative rounded-2xl border-2 border-slate-900 p-6 bg-slate-900 text-white shadow-sm">
<div className="absolute -top-3 right-6 bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-md shadow">Best Value</div>
<div className="text-sm/5 text-slate-300">Home Essentials</div>
<div className="text-3xl font-semibold tracking-tight mt-2">RM2,499</div>
<div className="mt-1 text-sm text-slate-300">3 rooms, 3 revisions</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i> Living + Bedroom + Kitchen</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i> Material board &amp; finishes list</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i> Contractor-ready visuals</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-slate-100" href="https://wa.me/60123456789?text=I%27m%20interested%20in%20Home%20Essentials%20(RM2%2C499).">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                Choose Home Essentials
              </a>
<div className="mt-3 text-xs text-slate-300">50% deposit · balance on delivery</div>
</div>

<div className="relative rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow">
<div className="text-sm text-slate-500">Full Home</div>
<div className="mt-2 text-3xl tracking-tight font-semibold text-slate-900">From RM5,000</div>
<div className="mt-1 text-sm text-slate-600">Full house + free 360° view</div>
<ul className="mt-6 space-y-3 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Entire home layouts</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Unlimited rooms scope</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Free 360° panorama</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 text-slate-800 px-4 py-2.5 text-sm font-medium hover:bg-slate-50" href="https://wa.me/60123456789?text=Tell%20me%20more%20about%20the%20Full%20Home%20package%20(RM5%2C000%2B).">
<i className="w-4 h-4" data-lucide="messages-square" strokeWidth="1.5"></i>
                Discuss Full Home
              </a>
<div className="mt-3 text-xs text-slate-500">Custom scope · 50% deposit</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 bg-slate-50 pt-14 pb-14">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Why Choose Us</h2>
<ul className="mt-6 space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-900 mt-0.5" data-lucide="flag" strokeWidth="1.5"></i>
<div>
<div className="font-medium text-slate-900">Local Malaysian team</div>
<div className="text-sm text-slate-600">We understand local styles, materials, and budgets.</div>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-900 mt-0.5" data-lucide="timer" strokeWidth="1.5"></i>
<div>
<div className="font-medium text-slate-900">Faster turnaround</div>
<div className="text-sm text-slate-600">Receive designs in 1–2 weeks.</div>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-900 mt-0.5" data-lucide="wallet" strokeWidth="1.5"></i>
<div>
<div className="font-medium text-slate-900">Affordable</div>
<div className="text-sm text-slate-600">Clear pricing. Better value than big studios.</div>
</div>
</li>
</ul>
<div className="mt-8">
<div className="text-xs uppercase tracking-wide text-slate-500">Partners</div>
<div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-3">
<div className="h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 text-sm tracking-tight">RK</div>
<div className="h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 text-sm tracking-tight">HB</div>
<div className="h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 text-sm tracking-tight">MN</div>
<div className="h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 text-sm tracking-tight">AT</div>
<div className="h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 text-sm tracking-tight">GK</div>
<div className="h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-700 text-sm tracking-tight">UP</div>
</div>
</div>
</div>

<div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-slate-200 p-5 bg-white">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-slate-900">Ain, PJ</div>
<div className="text-xs text-slate-500">Condo, 850 sf</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-700">Couldn’t believe how close the final reno looked to the render. Saved us from buying the wrong dining set!</p>
<div className="mt-3 flex gap-1">
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-5 bg-white">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-slate-900">Hafiz, Shah Alam</div>
<div className="text-xs text-slate-500">Landed, 2,100 sf</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-700">They worked fast and the lighting plan made a huge difference. Worth every ringgit.</p>
<div className="mt-3 flex gap-1">
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-amber-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-5 bg-white sm:col-span-2">
<div className="flex items-center gap-3">
<img alt="Client" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-slate-900">Mei, KL</div>
<div className="text-xs text-slate-500">New condo, 700 sf</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-700">We chatted on WhatsApp and got our first draft within a week. Very responsive to changes.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">How It Works</h2>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-xl border border-slate-200 p-6 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-input" strokeWidth="1.5"></i>
</div>
<div className="font-medium text-slate-900">1. Share plan &amp; style</div>
</div>
<p className="mt-3 text-sm text-slate-600">Send floor plan and inspiration via WhatsApp.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-check-2" strokeWidth="1.5"></i>
</div>
<div className="font-medium text-slate-900">2. Proposal &amp; pricing</div>
</div>
<p className="mt-3 text-sm text-slate-600">We share scope, timeline, and fixed quote.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div className="font-medium text-slate-900">3. 50% deposit</div>
</div>
<p className="mt-3 text-sm text-slate-600">Secure your slot. Limited slots monthly.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-5 h-5" data-lucide="house" strokeWidth="1.5"></i>
</div>
<div className="font-medium text-slate-900">4. Get 3D in 1–2 weeks</div>
</div>
<p className="mt-3 text-sm text-slate-600">We deliver renders and iterate with you.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-900">Real messages from clients</h3>
<div className="mt-6 space-y-4">
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="text-[13px] text-slate-500 mb-2">WhatsApp</div>
<div className="space-y-2">
<div className="max-w-[80%] rounded-lg bg-emerald-50 border border-emerald-100 p-3 text-sm text-slate-800">
                      The render looks exactly like our final living room! Thank you!
                    </div>
<div className="max-w-[80%] ml-auto rounded-lg bg-slate-100 border border-slate-200 p-3 text-sm text-slate-800">
                      So happy to hear! We’ll send the finishes list to your contractor.
                    </div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="text-[13px] text-slate-500 mb-2">WhatsApp</div>
<div className="space-y-2">
<div className="max-w-[80%] rounded-lg bg-emerald-50 border border-emerald-100 p-3 text-sm text-slate-800">
                      Fast turnaround and great lighting plan. 10/10.
                    </div>
<div className="max-w-[80%] ml-auto rounded-lg bg-slate-100 border border-slate-200 p-3 text-sm text-slate-800">
                      Appreciate it! We’ll finalise your kitchen this week.
                    </div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-900">1-minute client video</h3>
<div className="mt-4 rounded-xl overflow-hidden border border-slate-200 bg-white">
<div className="aspect-video relative">
<img alt="Client video testimonial" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<button aria-label="Play" className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center border border-slate-200 hover:bg-white transition">
<i className="w-6 h-6 text-slate-900" data-lucide="play" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-4 text-sm text-slate-600">Hear how we transformed a 900 sf condo in KL—on time and on budget.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">FAQ</h2>
</div>
<div className="mt-6 grid lg:grid-cols-2 gap-6">
<details className="rounded-xl border border-slate-200 bg-white p-5 group open:shadow-sm">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium text-slate-900">Why pay for design when contractor can build?</span>
<i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-3 text-sm text-slate-700">Contractors build—designers plan. Renders prevent costly changes and guesswork. You’ll know the exact layout, finishes, and lighting before you start.</p>
</details>
<details className="rounded-xl border border-slate-200 bg-white p-5 group open:shadow-sm">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium text-slate-900">Will the render look the same in real life?</span>
<i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-3 text-sm text-slate-700">Yes—our visuals are 95% accurate. We match locally available materials and lighting specs your contractor can follow.</p>
</details>
<details className="rounded-xl border border-slate-200 bg-white p-5 group open:shadow-sm">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium text-slate-900">How many revisions are included?</span>
<i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-3 text-sm text-slate-700">Starter includes 2, Essentials includes 3. Extra revisions can be added if needed.</p>
</details>
<details className="rounded-xl border border-slate-200 bg-white p-5 group open:shadow-sm">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium text-slate-900">What if I don’t like the design?</span>
<i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-3 text-sm text-slate-700">We’ll refine based on your feedback. If it’s not a fit, we’ll share source files for a smooth handoff.</p>
</details>
<details className="rounded-xl border border-slate-200 bg-white p-5 group open:shadow-sm">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium text-slate-900">Can I pay in instalments?</span>
<i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-3 text-sm text-slate-700">Yes—50% deposit to start, remaining upon delivery. For Full Home, we can split into milestones.</p>
</details>
<details className="rounded-xl border border-slate-200 bg-white p-5 group open:shadow-sm">
<summary className="list-none cursor-pointer flex items-center justify-between">
<span className="font-medium text-slate-900">Do you handle renovation too?</span>
<i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-3 text-sm text-slate-700">We focus on design. We can connect you with partner contractors on request.</p>
</details>
</div>
</div>
</section>

<section className="py-10 bg-slate-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-white">Free: 5 Interior Style Boards</h3>
<p className="mt-2 text-slate-300 text-sm">Modern, Japandi</p></div></div></div></section></main>
    </>
  );
}
