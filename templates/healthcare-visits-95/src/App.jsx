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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
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
      

<nav className="flex shrink-0 bg-white w-full h-14 border-gray-200 border-b pr-4 pl-4 items-center justify-between">

<div className="flex gap-2 cursor-pointer hover:bg-gray-50 transition-colors rounded-md pt-1.5 pr-2 pb-1.5 pl-2 gap-x-2 gap-y-2 items-center">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<span className="text-sm text-slate-700 font-poppins">QA ACME health</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</div>

<div className="flex items-center gap-5">

<div className="flex -space-x-1.5">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white text-[10px] text-white z-30 font-poppins">
            E
          </div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 ring-2 ring-white text-[10px] text-white z-20 font-poppins">
            J
          </div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-800 ring-2 ring-white text-[10px] text-white z-10 font-poppins">
            M
          </div>
</div>

<div className="flex items-center gap-4 text-slate-500">
<button className="hover:text-slate-900 transition-colors">
<i className="h-4 w-4" data-lucide="link"></i>
</button>
<button className="hover:text-slate-900 transition-colors">
<i className="h-4 w-4" data-lucide="help-circle"></i>
</button>
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs text-white cursor-pointer ring-2 ring-transparent hover:ring-indigo-100 transition-all font-poppins">
            DR
          </div>
</div>
</div>
</nav>

<div className="flex flex-1 overflow-hidden">

<aside className="shrink-0 flex flex-col bg-slate-50/50 w-[60px] border-gray-200 border-r pt-4 pb-4 gap-x-6 gap-y-6 items-center">

<button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm hover:bg-slate-800 transition-colors">
<i className="h-5 w-5" data-lucide="home" fill="currentColor" strokeWidth="0"></i>
</button>

<div className="flex flex-col gap-6 text-slate-400">
<button className="hover:text-slate-900 transition-colors">
<i className="h-5 w-5" data-lucide="calendar"></i>
</button>
<button className="hover:text-slate-900 transition-colors">
<i className="h-5 w-5" data-lucide="message-square"></i>
</button>
<button className="hover:text-slate-900 transition-colors">
<i className="h-5 w-5" data-lucide="users"></i>
</button>
<button className="hover:text-slate-900 transition-colors">
<i className="h-5 w-5" data-lucide="pie-chart"></i>
</button>
<button className="hover:text-slate-900 transition-colors">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white">

<header className="flex shrink-0 pt-6 pr-8 pb-6 pl-8 items-center justify-between">
<div className="flex items-center gap-2">
<h1 className="text-2xl tracking-tight text-slate-900 font-poppins font-semibold">
              Visits
            </h1>
<i className="h-5 w-5 text-slate-400 mt-1 cursor-pointer" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center gap-4 text-slate-600">
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
<i className="h-5 w-5" data-lucide="search"></i>
</button>
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
<i className="h-5 w-5" data-lucide="filter"></i>
</button>
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-x-auto px-8 pb-8">
<div className="flex gap-6 h-full gap-x-6 gap-y-6 items-start">

<div className="flex-1 min-w-[380px] flex flex-col bg-slate-50/80 rounded-2xl max-h-full overflow-hidden border border-slate-100">

<div className="p-5 pb-3 flex justify-between items-start shrink-0">
<div className="flex flex-col gap-1">
<h3 className="text-base text-slate-900 font-poppins">
                    Bookings
                  </h3>
<span className="text-sm text-slate-500 font-poppins">
                    13 bookings left today
                  </span>
</div>
<button className="text-slate-400 hover:text-slate-700 transition-colors mt-0.5">
<i className="h-5 w-5" data-lucide="plus"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-3">

<div className="flex flex-col gap-3 hover:border-slate-300 transition-colors cursor-pointer bg-white border-slate-200 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] gap-x-3 gap-y-3">
<div className="flex items-start justify-between">
<h4 className="text-base text-slate-900 font-poppins">
                      Customer
                    </h4>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="bell"></i>
<div className="h-6 w-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
</div>
</div>
<div className="flex flex-col text-sm text-slate-500 gap-1 mt-1">
<span className="truncate font-poppins">
                      demo+dxp6PfOtBj@waitwhile.com ·
                    </span>
<span className="truncate font-poppins">
                      Customer ID DEMO-OtYihWLCut ·
                    </span>
<div className="flex items-center gap-2 mt-1 text-slate-700">
<i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
<span className="font-poppins">Today, 1:00 AM – 2:00 AM</span>
</div>
</div>
<div className="flex items-center mt-1">
<div className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-2 py-1.5 text-sm text-slate-700">
<div className="bg-red-600 rounded-[3px] text-[9px] text-white px-1 py-0.5 leading-none font-poppins">
                        PI
                      </div>
<span className="font-poppins">Polio (IPV)</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-3 hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<h4 className="text-base text-slate-900 font-poppins">
                      Customer
                    </h4>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="bell"></i>
<div className="h-6 w-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
</div>
</div>
<div className="flex flex-col text-sm text-slate-500 gap-1 mt-1">
<span className="truncate font-poppins">
                      demo+be417a5XMN@waitwhile.com ·
                    </span>
<span className="truncate font-poppins">
                      Customer ID DEMO-m7fRkmFk9q ·
                    </span>
<div className="flex items-center gap-2 mt-1 text-slate-700">
<i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
<span className="font-poppins">Today, 2:00 AM – 3:00 AM</span>
</div>
</div>
<div className="flex items-center mt-1">
<div className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-2 py-1.5 text-sm text-slate-700">
<div className="bg-red-600 rounded-[3px] text-[9px] text-white px-1 py-0.5 leading-none font-poppins">
                        TV
                      </div>
<span className="font-poppins">Typhoid Vaccine</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-3 hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<h4 className="text-base text-slate-900 font-poppins">
                      Customer
                    </h4>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="bell"></i>
<div className="h-6 w-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
</div>
</div>
<div className="flex flex-col text-sm text-slate-500 gap-1 mt-1">
<span className="truncate font-poppins">
                      demo+rL3hZWq4lj@waitwhile.com ·
                    </span>
<span className="truncate font-poppins">
                      Customer ID DEMO-AXjMBaKWyR ·
                    </span>
<div className="flex items-center gap-2 mt-1 text-slate-700">
<i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
<span className="font-poppins">Today, 2:00 AM – 3:00 AM</span>
</div>
</div>
<div className="flex items-center mt-1">
<div className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-2 py-1.5 text-sm text-slate-700">
<div className="bg-amber-500 rounded-[3px] text-[9px] text-white px-1 py-0.5 leading-none font-poppins">
                        SZ
                      </div>
<span className="font-poppins">
                        Shingles (Zoster Vaccine)
                      </span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-3 hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<h4 className="text-base text-slate-900 font-poppins">
                      Customer
                    </h4>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="bell"></i>
<div className="h-6 w-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
</div>
</div>
<div className="flex flex-col text-sm text-slate-500 gap-1 mt-1">
<span className="truncate font-poppins">
                      demo+Ppn3CJUaFE@waitwhile.com ·
                    </span>
<span className="truncate font-poppins">
                      Customer ID DEMO-jQrqh0B0IQ ·
                    </span>
<div className="flex items-center gap-2 mt-1 text-slate-700">
<i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
<span className="font-poppins">Today, 3:00 AM – 4:00 AM</span>
</div>
</div>
<div className="flex items-center mt-1">
<div className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-2 py-1.5 text-sm text-slate-700">
<div className="bg-red-600 rounded-[3px] text-[9px] text-white px-1 py-0.5 leading-none font-poppins">
                        PI
                      </div>
<span className="font-poppins">Polio (IPV)</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-3 hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<h4 className="text-base text-slate-900 font-poppins">
                      Customer
                    </h4>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="bell"></i>
<div className="h-6 w-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
</div>
</div>
<div className="flex flex-col text-sm text-slate-500 gap-1 mt-1">
<span className="truncate font-poppins">
                      demo+nmt5eI5ffA@waitwhile.com ·
                    </span>
<span className="truncate font-poppins">
                      Customer ID DEMO-Q1S4DwWmYi ·
                    </span>
<div className="flex items-center gap-2 mt-1 text-slate-700">
<i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
<span className="font-poppins">Today, 4:00 AM – 5:00 AM</span>
</div>
</div>
<div className="flex items-center mt-1">
<div className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-2 py-1.5 text-sm text-slate-700">
<div className="bg-red-600 rounded-[3px] text-[9px] text-white px-1 py-0.5 leading-none font-poppins">
                        PI
                      </div>
<span className="font-poppins">Polio (IPV)</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 min-w-[380px] flex flex-col bg-slate-50/80 rounded-2xl max-h-full overflow-hidden border border-slate-100">
<div className="flex shrink-0 pt-5 pr-5 pb-3 pl-5 items-start justify-between">
<div className="flex flex-col gap-1">
<h3 className="text-base text-slate-900 font-poppins">
                    Waitlist
                  </h3>
<div className="text-sm flex items-center gap-1.5">
<span className="text-emerald-600 font-poppins">Open</span>
<span className="text-slate-400 font-poppins">·</span>
<span className="text-slate-500 font-poppins">
                      2w wait · 2 parties (3 customers)
                    </span>
</div>
</div>
<button className="text-slate-400 hover:text-slate-700 transition-colors mt-0.5">
<i className="h-5 w-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-3">

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-3 hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<h4 className="text-base text-slate-900 font-poppins">
<span className="text-slate-400 mr-1">1.</span>
                      Ulfis
                    </h4>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="bell"></i>
<div className="h-6 w-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
</div>
</div>
<div className="text-sm text-slate-500 mt-0.5">
<span className="font-poppins">2 people · Waited 1 day</span>
</div>
<div className="flex flex-wrap items-center gap-2 mt-1">
<div className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
<div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-800 text-[8px] text-white font-poppins">
                        M
                      </div>
<span className="font-poppins">Mike</span>
</div>
<div className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 font-poppins">
                      First available
                    </div>
<div className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
<div className="h-2.5 w-1.5 rounded-[1px] bg-slate-800"></div>
<span className="font-poppins">COVID-19 Booster</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-3 hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-start justify-between">
<h4 className="text-base text-slate-900 font-poppins">
<span className="text-slate-400 mr-1">2.</span>
                      Christina
                    </h4>
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="bell"></i>
<div className="h-6 w-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
</div>
</div>
<div className="text-sm text-slate-500 mt-0.5">
<span className="font-poppins">Waited 19 hours</span>
</div>
<div className="flex flex-wrap items-center gap-2 mt-1">
<div className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
<div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[8px] text-white font-poppins">
                        E
                      </div>
<span className="font-poppins">Emily</span>
</div>
<div className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 font-poppins">
                      First available
                    </div>
<div className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
<i className="h-3 w-3" data-lucide="thumbs-up"></i>
<span className="font-poppins">Confirmed</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 min-w-[380px] flex flex-col bg-slate-50/80 rounded-2xl h-full border border-slate-100">
<div className="p-5 pb-3 flex justify-between items-start">
<div className="flex flex-col gap-1">
<h3 className="text-base text-slate-900 font-poppins">Serving</h3>
<span className="text-sm text-slate-500 font-poppins">
                    0 parties
                  </span>
</div>
<button className="text-slate-400 hover:text-slate-700 transition-colors mt-0.5">
<i className="h-5 w-5" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="flex-1 min-w-[380px] flex flex-col bg-slate-50/80 rounded-2xl h-full border border-slate-100">
<div className="p-5 pb-3 flex justify-between items-start">
<div className="flex flex-col gap-1">
<h3 className="text-base text-slate-900 font-poppins">
                    Completed
                  </h3>
<span className="text-sm text-slate-500 font-poppins">
                    0 parties today
                  </span>
</div>
<button className="text-slate-400 hover:text-slate-700 transition-colors mt-0.5">
<i className="h-5 w-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
