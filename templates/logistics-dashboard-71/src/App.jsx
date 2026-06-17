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
      

<nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-20">
<button className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group">
<iconify-icon className="text-gray-400 group-hover:-translate-x-0.5 transition-transform" icon="solar:arrow-left-linear" width="18"></iconify-icon>
            Back to Directory
        </button>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-medium text-sm border border-violet-200">
                KO
            </div>
</div>
</nav>

<main className="flex-1 w-full max-w-[1440px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8">

<header className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
<div className="space-y-4 w-full lg:w-auto">

<div className="flex flex-wrap items-center gap-3">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                        Relay Hub: Akwa Central Hub
                        <span className="text-gray-400 font-medium text-lg ml-1">(RP-001)</span>
</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active
                    </span>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-500 font-normal">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="16"></iconify-icon>
                        Boulevard de la Liberté, Douala
                    </div>
<span className="hidden sm:inline text-gray-300">•</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:calendar-linear" width="16"></iconify-icon>
                        Registered on: Oct 12, 2025
                    </div>
</div>

<div className="flex flex-wrap items-center gap-2 pt-1">
<a className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors" href="#">
<iconify-icon className="text-violet-500" icon="solar:document-text-linear" width="14"></iconify-icon>
                        Business License.pdf
                    </a>
<a className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors" href="#">
<iconify-icon className="text-violet-500" icon="solar:document-text-linear" width="14"></iconify-icon>
                        Tax ID.pdf
                    </a>
<a className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors" href="#">
<iconify-icon className="text-violet-500" icon="solar:user-id-linear" width="14"></iconify-icon>
                        Manager ID.pdf
                    </a>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 text-sm font-medium text-violet-700 bg-violet-50/50 hover:bg-violet-100 transition-colors rounded-xl border border-transparent">
<iconify-icon icon="solar:pen-linear" width="18"></iconify-icon>
                    Edit Profile
                </button>
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 text-sm font-medium text-violet-600 bg-white border-2 border-violet-200 hover:border-violet-500 hover:bg-violet-50 hover:shadow-sm transition-all rounded-xl">
<iconify-icon icon="solar:qr-code-linear" width="18"></iconify-icon>
                    Generate Store QR
                </button>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden h-[440px]">
<div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center sticky top-0 z-10">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
<h2 className="text-sm font-semibold text-gray-900">Pending Collection</h2>
</div>
<div className="flex items-baseline gap-1 text-gray-900">
<span className="text-2xl font-semibold tracking-tight">45</span>
<span className="text-xs text-gray-500 font-medium">Colis</span>
</div>
</div>
<div className="p-3 overflow-y-auto inventory-scroll flex-1 space-y-1">

<div className="p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100 flex justify-between items-center">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200/60">
<iconify-icon className="text-gray-500" icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">KLI-8924-A</p>
<p className="text-xs text-gray-500 mt-0.5">Jean Dupont</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex px-2 py-0.5 rounded text-[0.65rem] font-medium bg-gray-100 text-gray-600 mb-1">Arr: Oct 24</span>
<p className="text-xs text-gray-400">2 days ago</p>
</div>
</div>

<div className="p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100 flex justify-between items-center">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200/60">
<iconify-icon className="text-gray-500" icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">KLI-9102-C</p>
<p className="text-xs text-gray-500 mt-0.5">Marie Claire T.</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex px-2 py-0.5 rounded text-[0.65rem] font-medium bg-gray-100 text-gray-600 mb-1">Arr: Oct 25</span>
<p className="text-xs text-gray-400">Yesterday</p>
</div>
</div>

<div className="p-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100 flex justify-between items-center">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200/60">
<iconify-icon className="text-gray-500" icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">KLI-7731-B</p>
<p className="text-xs text-gray-500 mt-0.5">Paul Biya</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex px-2 py-0.5 rounded text-[0.65rem] font-medium bg-gray-100 text-gray-600 mb-1">Arr: Oct 26</span>
<p className="text-xs text-emerald-600 font-medium">Today</p>
</div>
</div>
</div>
<div className="p-3 border-t border-gray-100 bg-white">
<button className="w-full py-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">View All 45 Packages</button>
</div>
</div>

<div className="flex flex-col bg-[#fef2f2] rounded-2xl border border-red-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden h-[440px]">
<div className="px-5 py-4 border-b border-red-100/50 bg-red-50/50 flex justify-between items-center sticky top-0 z-10">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
<h2 className="text-sm font-semibold text-red-900">Overdue Stock <span className="text-xs font-normal text-red-500 ml-1">&gt;15 Days</span></h2>
</div>
<div className="flex items-baseline gap-1 text-red-900">
<span className="text-2xl font-semibold tracking-tight">08</span>
<span className="text-xs text-red-500 font-medium">Colis</span>
</div>
</div>
<div className="p-3 overflow-y-auto inventory-scroll flex-1 space-y-2">

<div className="bg-white p-3.5 rounded-xl border border-red-100 shadow-sm flex justify-between items-center hover:border-red-200 transition-colors group">
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2">
<p className="text-sm font-semibold text-gray-900">KLI-1029-Z</p>
<span className="px-1.5 py-0.5 rounded text-[0.65rem] font-semibold bg-red-50 text-red-600">21 Days</span>
</div>
<p className="text-xs text-gray-600 font-medium">Samuel Eto'o</p>
<p className="text-[0.65rem] text-gray-400 mt-1">Arr: Sep 12</p>
</div>
<button className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white border border-emerald-100 hover:border-emerald-500 transition-all shadow-sm" title="Contact via WhatsApp">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="18"></iconify-icon>
</button>
</div>

<div className="bg-white p-3.5 rounded-xl border border-red-100 shadow-sm flex justify-between items-center hover:border-red-200 transition-colors group">
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2">
<p className="text-sm font-semibold text-gray-900">KLI-3310-F</p>
<span className="px-1.5 py-0.5 rounded text-[0.65rem] font-semibold bg-red-50 text-red-600">18 Days</span>
</div>
<p className="text-xs text-gray-600 font-medium">Binta Diallo</p>
<p className="text-[0.65rem] text-gray-400 mt-1">Arr: Sep 15</p>
</div>
<button className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white border border-emerald-100 hover:border-emerald-500 transition-all shadow-sm" title="Contact via WhatsApp">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="18"></iconify-icon>
</button>
</div>

<div className="bg-white p-3.5 rounded-xl border border-red-100 shadow-sm flex justify-between items-center hover:border-red-200 transition-colors group">
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2">
<p className="text-sm font-semibold text-gray-900">KLI-0021-Y</p>
<span className="px-1.5 py-0.5 rounded text-[0.65rem] font-semibold bg-red-50 text-red-600">16 Days</span>
</div>
<p className="text-xs text-gray-600 font-medium">Cedric N.</p>
<p className="text-[0.65rem] text-gray-400 mt-1">Arr: Sep 17</p>
</div>
<button className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white border border-emerald-100 hover:border-emerald-500 transition-all shadow-sm" title="Contact via WhatsApp">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">

<div className="p-5 border-b border-gray-200 space-y-5 bg-gray-50/30">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm shrink-0">
<iconify-icon icon="solar:box-minimalistic-linear" width="22"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2.5">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Withdrawn Today</h2>
<span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">12 Scanned Out</span>
</div>
<p className="text-xs text-gray-500 mt-0.5">Real-time log of all packages handed over to customers.</p>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl transition-all shadow-sm shrink-0">
<iconify-icon className="text-gray-500" icon="solar:download-linear" width="16"></iconify-icon>
                        Download CSV/PDF
                    </button>
</div>

<div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">

<div className="relative flex-1 min-w-[280px]">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-gray-400 shadow-sm" placeholder="Search Order ID, Name, or WhatsApp..." type="text"/>
</div>

<div className="flex items-center bg-gray-100/80 p-1 rounded-xl border border-gray-200/60 overflow-x-auto inventory-scroll shrink-0">
<button className="whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold bg-white rounded-lg shadow-sm text-gray-900 border border-gray-200/50">All Day</button>
<button className="whitespace-nowrap px-3.5 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Morning Shift</button>
<button className="whitespace-nowrap px-3.5 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Afternoon Shift</button>
<button className="whitespace-nowrap px-3.5 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Last Hour</button>
</div>
<div className="flex items-center gap-3 shrink-0">

<button className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
<iconify-icon className="text-gray-400" icon="solar:user-linear" width="16"></iconify-icon>
                            Any Agent
                            <iconify-icon className="text-gray-400 ml-1" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>

<button className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
<iconify-icon className="text-gray-400" icon="solar:scale-linear" width="16"></iconify-icon>
                            Weight &gt; 5kg
                            <iconify-icon className="text-gray-400 ml-1" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="overflow-x-auto inventory-scroll min-h-[360px]">
<table className="w-full text-left text-sm border-collapse min-w-[900px]">
<thead className="bg-gray-50/80 text-gray-500 font-medium sticky top-0 z-10 shadow-[inset_0_-1px_0_#e5e7eb] backdrop-blur-sm">
<tr>
<th className="px-6 py-3.5">Package Identity</th>
<th className="px-6 py-3.5">Logistics &amp; Weight</th>
<th className="px-6 py-3.5">Withdrawal Verification</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="even:bg-gray-50/50 hover:bg-gray-50/80 transition-colors group">

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-semibold shrink-0 border border-violet-200/50">
                                        JD
                                    </div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2.5">
<span className="font-bold text-gray-900">#KLI-8942</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[0.65rem] font-semibold bg-gray-100 text-gray-700 border border-gray-200 tracking-wide uppercase">Shein</span>
</div>
<span className="text-xs text-gray-500 font-medium">Jean Dupont</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:scale-linear" width="16"></iconify-icon>
                                        1.2 kg
                                    </div>
<div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
<span className="inline-flex items-center gap-1 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:box-linear" width="14"></iconify-icon> Bin A-12</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>Arr: Oct 24 (2 days)</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center justify-between gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                                            14:32
                                        </div>
<span className="text-xs text-gray-500">Scanned by <span className="font-semibold text-gray-700">Marc J.</span></span>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60 shadow-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="16"></iconify-icon>
                                        Handed Over
                                    </span>
</div>
</td>
</tr>

<tr className="even:bg-gray-50/50 hover:bg-gray-50/80 transition-colors group">

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-semibold shrink-0 border border-orange-200/50">
                                        SL
                                    </div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2.5">
<span className="font-bold text-gray-900">#KLI-5591</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[0.65rem] font-semibold bg-orange-50 text-orange-700 border border-orange-200/60 tracking-wide uppercase">Temu</span>
</div>
<span className="text-xs text-gray-500 font-medium">Sara Lopez</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:scale-linear" width="16"></iconify-icon>
                                        4.5 kg
                                    </div>
<div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
<span className="inline-flex items-center gap-1 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:box-linear" width="14"></iconify-icon> Bin C-05</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>Arr: Oct 25 (1 day)</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center justify-between gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                                            13:15
                                        </div>
<span className="text-xs text-gray-500">Scanned by <span className="font-semibold text-gray-700">Sara L.</span></span>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60 shadow-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="16"></iconify-icon>
                                        Handed Over
                                    </span>
</div>
</td>
</tr>

<tr className="even:bg-gray-50/50 hover:bg-gray-50/80 transition-colors group">

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold shrink-0 border border-blue-200/50">
                                        AB
                                    </div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2.5">
<span className="font-bold text-gray-900">#KLI-0992</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[0.65rem] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 tracking-wide uppercase">AliExpress</span>
</div>
<span className="text-xs text-gray-500 font-medium">Amadou B.</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:scale-linear" width="16"></iconify-icon>
                                        0.8 kg
                                    </div>
<div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
<span className="inline-flex items-center gap-1 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:box-linear" width="14"></iconify-icon> Bin D-33</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>Arr: Oct 26 (Today)</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center justify-between gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                                            10:45
                                        </div>
<span className="text-xs text-gray-500">Scanned by <span className="font-semibold text-gray-700">Marc J.</span></span>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60 shadow-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="16"></iconify-icon>
                                        Handed Over
                                    </span>
</div>
</td>
</tr>

<tr className="even:bg-gray-50/50 hover:bg-gray-50/80 transition-colors group">

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-xs font-semibold shrink-0 border border-gray-200/50">
                                        CT
                                    </div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2.5">
<span className="font-bold text-gray-900">#KLI-7731</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[0.65rem] font-semibold bg-gray-100 text-gray-700 border border-gray-200 tracking-wide uppercase">Shein</span>
</div>
<span className="text-xs text-gray-500 font-medium">Claire T.</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:scale-linear" width="16"></iconify-icon>
                                        2.1 kg
                                    </div>
<div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
<span className="inline-flex items-center gap-1 text-gray-600"><iconify-icon className="text-gray-400" icon="solar:box-linear" width="14"></iconify-icon> Bin B-05</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span>Arr: Oct 25 (1 day)</span>
</div>
</div>
</td>

<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center justify-between gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                                            09:20
                                        </div>
<span className="text-xs text-gray-500">Scanned by <span className="font-semibold text-gray-700">Paul T.</span></span>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60 shadow-sm">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="16"></iconify-icon>
                                        Handed Over
                                    </span>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-3.5 border-t border-gray-200 bg-gray-50/50 flex items-center justify-between text-xs text-gray-500 font-medium">
                Showing 4 of 12 packages withdrawn today
                <div className="flex items-center gap-1">
<button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-400 transition-colors cursor-not-allowed" disabled="">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="space-y-4 pt-4 border-t border-gray-200/60">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:shield-user-linear" width="20"></iconify-icon>
                    Scanner Access Control
                </h2>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">3 Active Agents</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center text-sm font-semibold relative">
                            MJ
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Marc Johnson</p>
<p className="text-xs text-gray-500 truncate flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:phone-linear" width="12"></iconify-icon>
                                +237 655 123 456
                            </p>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<span className="text-xs font-medium text-gray-600">Scan Privileges</span>

<button aria-checked="true" className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-violet-500 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4"></span>
</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center text-sm font-semibold relative">
                            SL
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Sara Lopez</p>
<p className="text-xs text-gray-500 truncate flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:phone-linear" width="12"></iconify-icon>
                                +237 677 890 123
                            </p>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<span className="text-xs font-medium text-gray-600">Scan Privileges</span>

<button aria-checked="true" className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-violet-500 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-4"></span>
</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group opacity-75">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 border border-gray-200 flex items-center justify-center text-sm font-semibold relative grayscale">
                            PT
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-400 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Paul Talla</p>
<p className="text-xs text-gray-500 truncate flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:phone-linear" width="12"></iconify-icon>
                                +237 699 444 555
                            </p>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<span className="text-xs font-medium text-gray-500">Scan Privileges</span>

<button aria-checked="false" className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
</button>
</div>
</div>

<button className="border-2 border-dashed border-gray-300 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-violet-50/50 hover:border-violet-300 transition-colors text-gray-500 hover:text-violet-600 min-h-[142px] group bg-gray-50/30">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 group-hover:border-violet-200 flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium">Authorize New Agent</span>
</button>
</div>
</section>
</main>

    </>
  );
}
