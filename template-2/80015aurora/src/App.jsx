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
      

<nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4">
<div className="flex glass-panel transition-all duration-300 cursor-pointer max-w-7xl rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 shadow-sm items-center justify-between" onClick={(e) => { window.location.href='https://drive.google.com/file/d/1bkEw4Sk6Vp1ZssY1rVUPIrp8tKPVHq1n/view?usp=drive_link' }} role="button">
<div className="flex items-center gap-3">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-normal tracking-wide uppercase mt-0.5">
              Property Report
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#overview">
            Overview
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#details">
            Details
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#financials">
            Financials
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#location">
            Location
          </a>
</div>
<div className="flex items-center gap-3">
<button className="p-2.5 rounded-full hover:bg-zinc-100 text-zinc-600 transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="solar:share-linear" width="20"></iconify-icon>
</button>
<button className="hidden md:flex gap-2 hover:bg-zinc-800 transition-colors shadow-zinc-900/5 text-xs font-medium text-white bg-zinc-900 ring-zinc-900/5 ring-1 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg gap-x-2 gap-y-2 items-center">
            Inquire
          </button>
</div>
</div>
</nav>

<div className="bg-white w-full border-zinc-100 border-b pt-36 pr-6 pb-16 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-10 gap-x-10 gap-y-10 items-start justify-between">
<div className="space-y-3">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-zinc-600 text-[11px] font-medium tracking-wide uppercase">
                Off-Market
              </span>
<span className="px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[11px] font-medium tracking-wide uppercase">
                Condo / Townhouse
              </span>
<span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-[11px] font-medium tracking-wide uppercase flex items-center gap-1.5">
<iconify-icon className="" height="14" icon="solar:verified-check-linear" width="14"></iconify-icon>
                Verified
              </span>
</div>
<h1 className="md:text-5xl leading-[1.1] text-3xl font-medium text-zinc-900 tracking-tight">
              Aurora, CO 80015
            </h1>
</div>
<div className="text-left lg:text-right">
<p className="uppercase text-xs font-normal text-zinc-400 tracking-wider mb-1.5">
              Assignment Price
            </p>
<div className="flex items-baseline gap-2 lg:justify-end">
<span className="md:text-6xl text-4xl font-medium text-zinc-900 tracking-tighter">
                $215,000
              </span>
</div>
</div>
</div>

<div className="md:h-[550px] overflow-hidden group cursor-pointer bg-zinc-100 w-full h-[400px] border-zinc-200 border rounded-3xl relative shadow-sm">

<img alt="17335 E Rice Cir Unit C" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98]" src="/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" />

<div className="cursor-pointer bg-center bg-[url(/assets/4d4dcbb2-f485-499d-989c-591267293dc0_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0" onClick={(e) => { window.location.href='/assets/4d4dcbb2-f485-499d-989c-591267293dc0_1600w.png' }} role="button"></div>

<div className="absolute bottom-6 right-6 flex items-center gap-3">
<button className="hover:bg-white transition-all flex gap-2 group/btn text-sm font-medium text-zinc-900 bg-white/90 rounded-full pt-3 pr-5 pb-3 pl-4 shadow-lg backdrop-blur-md gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-zinc-500 group-hover/btn:text-zinc-900 transition-colors" height="18" icon="solar:gallery-linear" width="18"></iconify-icon>
              View Photos (1)
            </button>
<button className="bg-zinc-900/90 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-zinc-900 transition-all flex items-center justify-center">
<iconify-icon className="" height="20" icon="solar:maximize-square-linear" width="20"></iconify-icon>
</button>
</div>

<div className="absolute top-6 left-6">
<span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-lg text-zinc-900 text-[11px] font-medium tracking-wide uppercase shadow-sm border border-white/20">
              Primary View
            </span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-zinc-100">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon height="24" icon="solar:bed-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-zinc-900 font-medium text-xl leading-none">2</p>
<p className="text-zinc-500 text-xs font-normal uppercase tracking-wide mt-1.5">
                Bedrooms
              </p>
</div>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon height="24" icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-zinc-900 font-medium text-xl leading-none">3</p>
<p className="text-zinc-500 text-xs font-normal uppercase tracking-wide mt-1.5">
                Bathrooms
              </p>
</div>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon className="" height="24" icon="solar:ruler-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-zinc-900 font-medium text-xl leading-none">
                1,088
              </p>
<p className="text-zinc-500 text-xs font-normal uppercase tracking-wide mt-1.5">
                Square Feet
              </p>
</div>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-zinc-900 font-medium text-xl leading-none">1983</p>
<p className="text-zinc-500 text-xs font-normal uppercase tracking-wide mt-1.5">
                Year Built
              </p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-8 space-y-16">

<section className="" id="overview">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-6 flex items-center gap-2.5">
<iconify-icon className="text-zinc-400" height="22" icon="solar:document-text-linear" width="22"></iconify-icon>
            Property Overview
          </h3>
<div className="prose prose-lg prose-zinc max-w-none">
<p className="leading-relaxed text-lg font-light text-zinc-600">
              Located in the residential community of Aurora, this
              Condo/Townhouse style residence offers 1,088 square feet of living
              space. Built in 1983, the home features 2 bedrooms and 3 bathrooms
              across 2 stories.
            </p>
<p className="text-zinc-600 leading-relaxed font-light text-lg mt-6">
              The property includes a 78 sqft patio and a 64 sqft porch, perfect
              for outdoor relaxation. Interior comforts include a fireplace,
              central cooling, and forced air gas heating. The lot size is
              approximately 436 square feet (0.01 acres).
            </p>
</div>
</section>

<section className="" id="details">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-8 flex items-center gap-2.5">
<iconify-icon className="text-zinc-400" height="22" icon="solar:layers-linear" width="22"></iconify-icon>
            Building & Construction
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-6">
                Structure
              </h4>
<ul className="space-y-4">
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Construction</span>
<span className="font-normal text-zinc-900">Frame</span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Exterior</span>
<span className="font-normal text-zinc-900">Wood Siding</span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Roof</span>
<span className="font-normal text-zinc-900">
                    Composition Shingle
                  </span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Foundation</span>
<span className="font-normal text-zinc-900">Concrete</span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Stories</span>
<span className="font-normal text-zinc-900">2</span>
</li>
</ul>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-6">
                Interior & Systems
              </h4>
<ul className="space-y-4">
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Heating</span>
<span className="font-normal text-zinc-900">
                    Forced Air (Gas)
                  </span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Cooling</span>
<span className="font-normal text-zinc-900">Central</span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Fireplace</span>
<span className="font-normal text-zinc-900">Yes (1)</span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Area 1st Floor</span>
<span className="font-normal text-zinc-900">512 SqFt</span>
</li>
<li className="flex justify-between items-center text-base py-1.5 border-b border-dashed border-zinc-100 last:border-0">
<span className="text-zinc-500 font-light">Basement</span>
<span className="font-normal text-zinc-900">None</span>
</li>
</ul>
</div>
</div>
<div className="mt-8 bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm">
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-6">
              Exterior Amenities
            </h4>
<div className="flex flex-wrap gap-4">
<div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-base text-zinc-700">
<iconify-icon className="text-zinc-400" height="18" icon="solar:sofa-linear" width="18"></iconify-icon>
                Patio (78 SqFt)
              </div>
<div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-base text-zinc-700">
<iconify-icon className="text-zinc-400" height="18" icon="solar:home-linear" width="18"></iconify-icon>
                Porch (64 SqFt)
              </div>
<div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-base text-zinc-700">
<iconify-icon className="text-zinc-400" height="18" icon="solar:box-linear" width="18"></iconify-icon>
                Utility Building (18 SqFt)
              </div>
</div>
</div>
</section>

<section className="" id="financials">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-8 flex items-center gap-2.5">
<iconify-icon className="text-zinc-400" height="22" icon="solar:wallet-linear" width="22"></iconify-icon>
            Mortgage History
          </h3>
<div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50/80 text-zinc-500 font-normal border-b border-zinc-200">
<tr className="">
<th className="px-6 py-4 font-medium">Lender</th>
<th className="px-6 py-4 font-medium">Amount</th>
<th className="px-6 py-4 font-medium">Rate</th>
<th className="px-6 py-4 font-medium">Date</th>
<th className="px-6 py-4 font-medium">Est. Balance</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-5 font-normal text-zinc-900 text-base">
                    Rocket Mortgage LLC
                  </td>
<td className="px-6 py-5 text-base font-light">$210,000</td>
<td className="px-6 py-5 text-base font-light">7.22%</td>
<td className="px-6 py-5 text-zinc-500 text-base font-light">
                    Nov 29, 2023
                  </td>
<td className="px-6 py-5 font-normal text-zinc-900 text-base">
                    $205,217
                  </td>
</tr>
</tbody>
</table>
</div>
<p className="text-[11px] text-zinc-400 mt-3 uppercase tracking-wide font-normal">
            * Data based on public records.
          </p>
</section>

<section className="">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-8 flex items-center gap-2.5">
<iconify-icon className="text-zinc-400" height="22" icon="solar:bill-list-linear" width="22"></iconify-icon>
            Tax Information
          </h3>
<div className="bg-zinc-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
<div>
<p className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-normal">
                  Tax Year
                </p>
<p className="text-2xl font-medium tracking-tight">2024</p>
</div>
<div>
<p className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-normal">
                  Total Tax
                </p>
<p className="text-2xl font-medium tracking-tight">$1,513</p>
</div>
<div className="">
<p className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-normal">
                  Assessed Value
                </p>
<p className="text-2xl font-medium tracking-tight">$21,819</p>
</div>
<div className="">
<p className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-normal">
                  Market Value
                </p>
<p className="text-2xl font-medium tracking-tight">$349,100</p>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4">
<div className="sticky top-28 space-y-8">

<div className="bg-white rounded-3xl border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] tilt-card p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"></div>
<div className="flex justify-between items-start mb-8">
<div className="">
<p className="uppercase text-xs font-medium text-zinc-400 tracking-wider mb-2" style={{}}>
                  Estimated ARV
                </p>
<p className="text-4xl font-medium tracking-tighter text-zinc-900">
                  $320,965
                </p>
</div>
<div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon height="22" icon="solar:chart-square-linear" width="22"></iconify-icon>
</div>
</div>
<div className="space-y-6 mb-8">

<div className="flex justify-between items-center py-4 border-t border-zinc-100">
<span className="text-sm text-zinc-500 font-normal">
                  Est. Mortgage Balance
                </span>
<span className="text-base font-normal text-zinc-900">
                  $205,427
                </span>
</div>
</div>
<div className="space-y-3">
<button className="hover:bg-zinc-800 transition-all shadow-zinc-900/10 flex gap-2.5 group text-sm font-medium text-white bg-zinc-900 w-full rounded-xl pt-3.5 pb-3.5 shadow-xl gap-x-2.5 gap-y-2.5 items-center justify-center">Contact ‪(914) 713-7797‬</button>
</div>
</div>

<div className="bg-white rounded-3xl border border-zinc-200 p-1.5 shadow-sm">
<div className="relative w-full h-56 bg-zinc-100 rounded-2xl overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity">

<div className="w-full h-full bg-[#f0f0f0]" style={{backgroundImage: `radial-gradient(#cbd5e1 1.5px, transparent 1.5px)`, backgroundSize: `24px 24px`}}></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-5 h-5 bg-indigo-600 rounded-full border-[3px] border-white shadow-lg animate-pulse"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md text-[11px] font-bold whitespace-nowrap text-zinc-900">
                    Subject Property
                  </div>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-medium text-zinc-500 shadow-sm border border-zinc-100">
                Lat: 39.63 • Long: -104.78
              </div>
</div>
<div className="p-4">
<p className="text-xs text-zinc-500 flex items-center gap-1.5 font-normal">
<iconify-icon height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
                Subdivision: Discovery At Quincy Lake Condos
              </p>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-white border-t border-zinc-200 py-16 mt-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs">
<iconify-icon height="14" icon="solar:home-linear" width="14"></iconify-icon>
</div>
</div>
<p className="text-xs text-zinc-400 font-normal">
          APN: 2073-09-2-15-039 • County Land Use Code: 366 • Data updated 2024
        </p>
</div>
</footer>

    </>
  );
}
