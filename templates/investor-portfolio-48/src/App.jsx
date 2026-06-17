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



      lucide.createIcons({
          attrs: {
              strokeWidth: 1.5
          }
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute left-0 right-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_70%)]"></div>
<div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
</div>

<main className="w-full max-w-[460px] bg-white shadow-2xl shadow-black/50 overflow-hidden relative z-10 sm:rounded-3xl">

<div className="pt-6 pr-6 pb-12 pl-6">


<div className="relative w-full aspect-[1.4] bg-slate-900 overflow-hidden group mb-4 cursor-pointer rounded-xl">
<img alt="Hero" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca8f5d1-d424-4aeb-9dcf-48a4edbe4bea_1600w.webp" style={{}}/>
<div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-end">
<img alt="Profile" className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white/20 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21ece9c2-51c1-4333-9ae2-57f3f2194556_320w.png" style={{}}/>
</div>
<div>
<h1 className="text-[28px] leading-tight font-semibold text-white tracking-tighter" style={{}}>
                Nebus Ventures
              </h1>
<p className="text-[17px] font-medium text-slate-300 tracking-tight max-w-xs mt-1">
                Capital, network &amp; strategic support for the best startups.
              </p>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mb-12">
<div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>

<section className="mb-12">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-6 pl-1">
            Current
          </h4>
<div className="space-y-7">
<div className="flex items-center group cursor-pointer">
<div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-100">
<img alt="Lovable" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/659b876e-c43b-417f-9da5-a44c8fc22c95_320w.png" style={{}}/>
</div>
<div className="ml-4 flex-1 min-w-0">
<h5 className="text-[15px] truncate font-semibold text-slate-900 tracking-tight">
                  Axolt
                </h5>
<p className="text-[13px] truncate font-medium text-slate-500">
                  Advisor + Investor
                </p>
</div>
<button className="ml-3 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors border border-slate-200/50">
                Visit
              </button>
</div>

<div className="flex items-center group cursor-pointer">
<div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-100">
<img alt="Sequoia" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b8c130a-e25c-45f8-8d99-4a3580ae057e_320w.jpg"/>
</div>
<div className="ml-4 flex-1 min-w-0">
<h5 className="text-[15px] truncate font-semibold text-slate-900 tracking-tight">
                  Gunzilla
                </h5>
<p className="text-[13px] truncate font-medium text-slate-500">
                  Investor
                </p>
</div>
<button className="ml-3 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors border border-slate-200/50">
                Visit
              </button>
</div>

<div className="flex items-center group cursor-pointer">
<div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-100">
<img alt="Quick Coffee" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35d4dfe3-0c03-4443-a814-40436be5b233_320w.png"/>
</div>
<div className="ml-4 flex-1 min-w-0">
<h5 className="text-[15px] truncate font-semibold text-slate-900 tracking-tight">
                  Purpose Institute
                </h5>
<p className="text-[13px] truncate font-medium text-slate-500">
                  Advisor &amp; Investor
                </p>
</div>
<button className="ml-3 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors border border-slate-200/50">
                Visit
              </button>
</div>
</div>
</section>

<section className="mb-12">
<div className="flex items-center justify-between mb-6 pl-1 cursor-pointer hover:opacity-70 transition-opacity">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Angel Investments (20+)
            </h4>
<svg className="lucide lucide-chevron-right w-4 h-4 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
<div className="space-y-7">
<div className="flex items-center group cursor-pointer">
<div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-100">
<img alt="Maisa" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&amp;h=100&amp;fit=crop&amp;q=80" style={{}}/>
</div>
<div className="ml-4 flex-1 min-w-0">
<h5 className="text-[15px] font-semibold text-slate-900 truncate tracking-tight">
                  Maisa
                </h5>
<p className="text-[13px] text-slate-500 truncate font-medium">
                  Seed
                </p>
</div>
<button className="ml-3 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors border border-slate-200/50">
                Visit
              </button>
</div>

<div className="flex items-center group cursor-pointer">
<div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-100">
<img alt="Zauber" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
</div>
<div className="ml-4 flex-1 min-w-0">
<h5 className="text-[15px] font-semibold text-slate-900 truncate tracking-tight">
                  Zauber
                </h5>
<p className="text-[13px] text-slate-500 truncate font-medium">
                  Seed
                </p>
</div>
<button className="ml-3 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors border border-slate-200/50">
                Visit
              </button>
</div>

<div className="flex items-center group cursor-pointer">
<div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-100">
<img alt="Superscale" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="ml-4 flex-1 min-w-0">
<h5 className="text-[15px] font-semibold text-slate-900 truncate tracking-tight">
                  Superscale
                </h5>
<p className="text-[13px] text-slate-500 truncate font-medium">
                  Pre-Seed
                </p>
</div>
<button className="ml-3 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors border border-slate-200/50">
                Visit
              </button>
</div>
</div>
</section>
<section className="mb-12">
<h4 className="uppercase text-xs font-medium text-slate-400 tracking-wider mb-6 pl-1">
            Focus Industries
          </h4>
<div className="flex flex-wrap gap-2">
<div className="bg-slate-50 border border-slate-200/50 text-slate-900 px-3.5 py-1.5 rounded-md text-[13px] font-medium">
              Real Estate
            </div>
<div className="bg-slate-50 border border-slate-200/50 text-slate-900 px-3.5 py-1.5 rounded-md text-[13px] font-medium">
              Luxury, Art &amp; Lifestyle
            </div>
<div className="bg-slate-50 border border-slate-200/50 text-slate-900 px-3.5 py-1.5 rounded-md text-[13px] font-medium">
              Crypto &amp; Blockchain
            </div>
<div className="bg-slate-50 border border-slate-200/50 text-slate-900 px-3.5 py-1.5 rounded-md text-[13px] font-medium">
              AI &amp; Automation
            </div>
<div className="bg-slate-50 border border-slate-200/50 text-slate-900 px-3.5 py-1.5 rounded-md text-[13px] font-medium">
              Ecommerce
            </div>
</div>
</section>

<section className="mb-12">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-6 pl-1">
            Resources
          </h4>
<div className="flex gap-4 overflow-x-auto pb-4 -mr-6 pr-6 snap-x no-scrollbar">

<div className="snap-start min-w-[210px] h-[240px] bg-white border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between group cursor-pointer hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<svg className="lucide lucide-briefcase" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<h3 className="text-[16px] font-semibold text-slate-900 tracking-tight leading-tight">
                  Our Work
                </h3>
<p className="text-[13px] text-slate-500 mt-1 font-medium">
                  Companies &amp; Invest
                </p>
</div>
<div className="absolute right-[-10px] bottom-[-10px] opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-20 h-20 border-4 border-slate-100 rounded-full absolute bottom-[-10px] right-[-10px]"></div>
<div className="w-12 h-12 bg-slate-100 rounded-full absolute bottom-[6px] right-[6px]"></div>
</div>
</div>

<div className="snap-start min-w-[210px] h-[240px] bg-white border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between group cursor-pointer hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<svg className="lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-[16px] font-semibold text-slate-900 tracking-tight leading-tight">
                  Way of Working
                </h3>
<p className="text-[13px] text-slate-500 mt-1 font-medium">
                  Design + AI
                </p>
</div>
<div className="absolute right-4 bottom-4 w-12 h-16 bg-slate-50 border border-slate-100 rounded-md group-hover:-translate-y-2 transition-transform duration-500 flex flex-col gap-2 p-1.5 shadow-sm">
<div className="w-full h-1 bg-slate-200 rounded-full"></div>
<div className="w-2/3 h-1 bg-slate-200 rounded-full"></div>
<div className="w-full h-1 bg-slate-200 rounded-full mt-auto"></div>
</div>
</div>

<div className="snap-start min-w-[210px] h-[240px] bg-white border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between group cursor-pointer hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<svg className="lucide lucide-heart-handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
<path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.18 0l2.5 2.15c.5.43.94.58 1.4.25.75-.53.5-1.79-.53-2.6L12 5Z"></path>
</svg>
</div>
<h3 className="text-[16px] font-semibold text-slate-900 tracking-tight leading-tight">
                  Values
                </h3>
<p className="text-[13px] text-slate-500 mt-1 font-medium">
                  Principles &amp; Beliefs
                </p>
</div>
<div className="absolute right-[-10px] bottom-[-10px]">
<svg className="text-slate-50 group-hover:text-emerald-50/50 transition-colors duration-500" fill="none" height="80" viewbox="0 0 100 100" width="80" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8"></circle>
<path d="M50 10V90" stroke="currentColor" strokeWidth="8"></path>
<path d="M10 50H90" stroke="currentColor" strokeWidth="8"></path>
</svg>
</div>
</div>

<div className="snap-start min-w-[210px] h-[240px] bg-white border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between group cursor-pointer hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700">
<svg className="lucide lucide-armchair" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3"></path>
<path d="M6 9v11"></path>
<path d="M18 9v11"></path>
<path d="M6 9h12"></path>
<path d="M4 12v6"></path>
<path d="M20 12v6"></path>
</svg>
</div>
<h3 className="text-[16px] font-semibold text-slate-900 tracking-tight leading-tight">
                  Favorite Things
                </h3>
<p className="text-[13px] text-slate-500 mt-1 font-medium">
                  Tools + Gear
                </p>
</div>
<div className="absolute right-[-5px] bottom-[-5px] opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-14 bg-slate-100 border border-slate-200 rounded-sm -rotate-12 translate-x-2"></div>
<div className="w-12 h-8 bg-slate-200 rounded-sm rotate-6 -translate-y-4"></div>
</div>
</div>
</div>
</section>

<section className="mb-10">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-5 pl-1">
            Contact
          </h4>
<div className="space-y-1">
<div className="flex items-center justify-between py-3 group cursor-default">
<h5 className="text-[15px] font-medium text-slate-900">Mentorship</h5>
<span className="text-[13px] text-slate-400 font-medium">
                Booked out atm
              </span>
</div>

<div className="flex items-center justify-between py-3 group cursor-pointer hover:bg-slate-50 rounded-md -mx-3 px-3 transition-colors">
<h5 className="text-[15px] font-medium text-slate-900">
                Investment Requests
              </h5>
<svg className="lucide lucide-chevron-right w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>

<div className="flex items-center justify-between py-3 group cursor-pointer hover:bg-slate-50 rounded-md -mx-3 px-3 transition-colors">
<h5 className="text-[15px] font-medium text-slate-900">
                Brand Partnerships
              </h5>
<svg className="lucide lucide-chevron-right w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
</section>

<footer className="flex items-center gap-6 text-[13px] font-medium text-blue-600 pl-1">
<a className="hover:text-blue-700 hover:underline transition-all" href="#">
            LinkedIn
          </a>
<a className="hover:text-blue-700 hover:underline transition-all" href="#">
            Twitter
          </a>
<a className="hover:text-blue-700 hover:underline transition-all" href="#">
            Imprint
          </a>
<a className="hover:text-blue-700 hover:underline transition-all" href="#">
            Archive
          </a>
</footer>
</div>
</main>


    </>
  );
}
