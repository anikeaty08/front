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
      

<aside className="w-64 bg-[#231d5b] border-r border-[#332A85] flex flex-col hidden md:flex z-10 relative">
<div className="h-16 flex items-center px-6 border-b border-[#332A85]/60">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-white relative overflow-hidden flex items-center justify-center p-0.5">
<div className="w-full h-full border-[3px] border-[#332A85] flex">
<div className="w-1/2 h-full border-r-[3px] border-[#332A85] transform -skew-x-12 translate-x-1"></div>
</div>
</div>
<span className="text-xl tracking-tight text-white">Jamuna Bank</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-[#b4b1df] hover:text-white hover:bg-[#332A85]/50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-[#332A85] rounded-lg transition-colors shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                LDBP Origination
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-[#b4b1df] hover:text-white hover:bg-[#332A85]/50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                Customers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-[#b4b1df] hover:text-white hover:bg-[#332A85]/50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                Reports
            </a>
</nav>
<div className="p-4 border-t border-[#332A85]/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white text-[#332A85] flex items-center justify-center text-sm">
                    JS
                </div>
<div className="flex flex-col">
<span className="text-sm text-white">John Smith</span>
<span className="text-sm text-[#b4b1df]">Branch Officer</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between sticky top-0 z-20">
<div>
<h1 className="text-xl tracking-tight text-slate-900">Customer LDBP Profile</h1>
<p className="text-base text-slate-500 mt-1">View customer details and initiate LDBP from recent LCs.</p>
</div>
<div className="relative max-w-md w-full ml-8">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-24 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#332A85] focus:border-[#332A85] sm:text-base transition-all" placeholder="Enter Account Number..." type="text" value="001-49582-884"/>
<div className="absolute inset-y-0 right-0 flex items-center">
<button className="h-full px-4 text-sm text-white bg-[#332A85] hover:bg-[#251e61] rounded-r-lg transition-colors border border-[#332A85]">
                        Search CBS
                    </button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-5xl mx-auto space-y-8">

<section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<h2 className="text-base tracking-tight text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:user-rounded-linear"></iconify-icon>
                            Customer Information
                        </h2>
<span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm border border-emerald-100">Verified CBS</span>
</div>
<div className="p-6 flex-1 space-y-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
<div>
<span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">Customer Name</span>
<span className="block text-base text-slate-900">Global Textiles Ltd.</span>
</div>
<div>
<span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">Account No</span>
<span className="block text-base text-slate-900 font-mono">001-49582-884</span>
</div>
<div>
<span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">Branch</span>
<span className="block text-base text-slate-900">Motijheel Corporate</span>
</div>
<div className="md:col-span-3">
<span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">Registered Address</span>
<span className="block text-base text-slate-900">124 Industrial Park Ave, Block C, Dhaka, Bangladesh</span>
</div>
</div>

<div className="pt-6 border-t border-slate-100">
<h3 className="text-base text-slate-900 mb-4">Facility Limits (LDBP)</h3>
<div className="space-y-2 max-w-2xl">
<div className="flex justify-between text-base">
<span className="text-slate-500">Total Limit</span>
<span className="text-slate-900">$1,500,000.00</span>
</div>

<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
<div className="h-full bg-[#332A85] rounded-l-full" style={{width: '65%'}}></div>
<div className="h-full bg-emerald-400 rounded-r-full" style={{width: '35%'}}></div>
</div>
<div className="flex justify-between text-sm mt-2">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#332A85]"></div>
<span className="text-slate-600">Used: <span className="text-slate-900">$975,000.00</span></span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-slate-600">Remaining: <span className="text-emerald-700">$525,000.00</span></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<div>
<h2 className="text-base tracking-tight text-slate-900">Recent LC Information</h2>
<p className="text-sm text-slate-500 mt-0.5">Select an active LC to initiate the LDBP process.</p>
</div>
<button className="px-4 py-2 text-sm text-white bg-[#332A85] hover:bg-[#251e61] rounded-lg shadow-sm transition-colors border border-[#332A85] flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                            Create New LDBP
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left whitespace-nowrap">
<thead className="bg-slate-50 border-b border-slate-100">
<tr>
<th className="px-6 py-3 text-sm text-slate-500 uppercase tracking-wider" scope="col">LC Number</th>
<th className="px-6 py-3 text-sm text-slate-500 uppercase tracking-wider" scope="col">Issue Date</th>
<th className="px-6 py-3 text-sm text-slate-500 uppercase tracking-wider text-right" scope="col">Amount</th>
<th className="px-6 py-3 text-sm text-slate-500 uppercase tracking-wider" scope="col">Status</th>
<th className="px-6 py-3 text-sm text-slate-500 uppercase tracking-wider text-right" scope="col">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white text-slate-700">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-mono text-base text-slate-900">LC-2023-7542-LMN</td>
<td className="px-6 py-4 text-base">Oct 15, 2023</td>
<td className="px-6 py-4 text-right text-base text-slate-900">$180,000.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-sm bg-amber-50 text-amber-700 border border-amber-200">Outstanding</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm text-[#332A85] hover:text-[#251e61] font-medium transition-colors">Create LDBP</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-mono text-base text-slate-900">LC-2023-8821-XYZ</td>
<td className="px-6 py-4 text-base">Aug 12, 2023</td>
<td className="px-6 py-4 text-right text-base text-slate-900">$250,000.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-sm bg-slate-100 text-slate-700 border border-slate-200">Settled</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm text-slate-400 hover:text-slate-600 transition-colors">View Details</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-mono text-base text-slate-900">LC-2023-6190-DEF</td>
<td className="px-6 py-4 text-base">Mar 22, 2023</td>
<td className="px-6 py-4 text-right text-base text-slate-900">$545,000.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-sm bg-slate-100 text-slate-700 border border-slate-200">Settled</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm text-slate-400 hover:text-slate-600 transition-colors">View Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
