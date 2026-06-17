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
      

<aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-zinc-200 flex-shrink-0 flex flex-col h-auto md:h-full z-20">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tighter">H</div>
<span className="text-zinc-900 font-semibold tracking-tight text-sm">HARIRI LAW</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-200/50" href="#">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Risk Audit
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Policy Review
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Claims &amp; Urgent
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Referrals
            </a>
</nav>
<div className="p-4 border-t border-zinc-100">
<div className="bg-zinc-900 text-white rounded-xl p-4 relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10 transform translate-x-2 -translate-y-2">
<iconify-icon icon="solar:plain-3-linear" strokeWidth="1.5" width="60"></iconify-icon>
</div>
<h3 className="text-xs font-medium tracking-tight mb-1">Need an Agent?</h3>
<p className="text-[10px] text-zinc-400 mb-3 leading-relaxed">We can refer you to trusted insurance professionals.</p>
<button className="w-full bg-white text-zinc-900 text-[10px] font-semibold py-1.5 rounded shadow-sm hover:bg-zinc-100 transition-colors">Contact Us</button>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative bg-[#FAFAFA]">

<header className="sticky top-0 z-10 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200 px-6 h-16 flex items-center justify-between">
<div>
<h1 className="text-zinc-900 font-semibold text-sm tracking-tight">Adulting 101: Personal Risk Audit</h1>
<p className="text-xs text-zinc-500 mt-0.5">Injury • Lemon Law • Workers' Comp</p>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors px-3 py-1.5 border border-zinc-200 rounded-full bg-white shadow-sm">
<iconify-icon icon="solar:printer-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Print Guide
                </button>
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600">
                    JD
                </div>
</div>
</header>
<div className="p-6 max-w-6xl mx-auto space-y-8 pb-20">

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Risk Audit</span>
</div>
<h3 className="text-zinc-900 font-medium text-sm tracking-tight mb-1">Protect Your Future</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Liability coverage protects your future wages from garnishment. Insurance protects assets you've already built.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Net Worth</span>
</div>
<h3 className="text-zinc-900 font-medium text-sm tracking-tight mb-1">Asset Threshold</h3>
<p className="text-xs text-zinc-500 leading-relaxed">If (Assets - Debts) &gt; $150K, you are a target for lawsuits exceeding standard policy limits.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Emergency</span>
</div>
<h3 className="text-zinc-900 font-medium text-sm tracking-tight mb-1">Do Not Admit Fault</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Statements can be used against you. Contact counsel before giving recorded statements.</p>
</div>
</section>

<section className="space-y-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="flex items-center justify-between">
<h2 className="text-zinc-900 font-semibold text-base tracking-tight">5 Essential Questions</h2>
<span className="text-xs text-zinc-400">Interactive Checklist</span>
</div>
<div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">

<div className="p-5 hover:bg-zinc-50/50 transition-colors group">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0 pt-1">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900">Auto Insurance</h3>
<label className="flex items-center cursor-pointer">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
<span className="ml-3 text-xs font-medium text-zinc-500">I have &gt; state min</span>
</label>
</div>
<p className="text-sm text-zinc-600">Do you have more than state minimum liability (15/30K)? Recommended: 100/300K or 250/500K.</p>
<div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mt-3 flex gap-3">
<iconify-icon className="text-amber-600 flex-shrink-0 mt-0.5" icon="solar:danger-triangle-linear" width="16"></iconify-icon>
<div>
<p className="text-xs font-medium text-amber-900 mb-1">Risk Alert</p>
<p className="text-xs text-amber-800 leading-relaxed">State minimums barely cover a fender bender. One serious accident could lead to wage garnishment.</p>
<div className="mt-2 text-xs font-semibold text-amber-900 flex items-center gap-1">
                                            Action: <span className="font-normal text-amber-800">Increase to 100/300K or 250/500K.</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-5 hover:bg-zinc-50/50 transition-colors group">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0 pt-1">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900">Home &amp; Renters</h3>
<label className="flex items-center cursor-pointer">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
<span className="ml-3 text-xs font-medium text-zinc-500">Limits &gt; $300k</span>
</label>
</div>
<p className="text-sm text-zinc-600">Do you have at least $300K in personal liability coverage?</p>
<div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 mt-3 flex gap-3">
<iconify-icon className="text-emerald-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
<div>
<p className="text-xs font-medium text-emerald-900 mb-1">Good Coverage</p>
<p className="text-xs text-emerald-800 leading-relaxed">This provides a solid baseline for lawsuits involving injuries on your property (slip-and-fall, dog bites).</p>
<div className="mt-2 text-xs font-semibold text-emerald-900 flex items-center gap-1">
                                            Next Step: <span className="font-normal text-emerald-800">Review annually. Document safety measures (cameras).</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-5 hover:bg-zinc-50/50 transition-colors group">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0 pt-1">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:umbrella-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900">Umbrella Policy</h3>
<label className="flex items-center cursor-pointer">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
<span className="ml-3 text-xs font-medium text-zinc-500">I have Umbrella</span>
</label>
</div>
<p className="text-sm text-zinc-600">Is your net worth (assets - debts) over $150K? You need an extra layer of protection.</p>
<div className="text-xs text-zinc-500 pt-1">
<span className="inline-flex items-center px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-600">Cost: ~$150-$300 / year</span>
</div>
</div>
</div>
</div>

<div className="p-5 hover:bg-zinc-50/50 transition-colors group">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0 pt-1">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:shield-user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900">Uninsured Motorist (UM/UIM)</h3>
<label className="flex items-center cursor-pointer">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
<span className="ml-3 text-xs font-medium text-zinc-500">Limits Match</span>
</label>
</div>
<p className="text-sm text-zinc-600">Do your UM/UIM limits match your liability limits? This pays YOU if hit by an uninsured driver.</p>
</div>
</div>
</div>
</div>
</section>

<section className="animate-fade-in" style={{animationDelay: '0.2s'}}>
<h2 className="text-zinc-900 font-semibold text-base tracking-tight mb-4">Cost of Being Safe vs. Sorry</h2>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-50 border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500 font-medium">
<th className="px-6 py-4">Coverage Type</th>
<th className="px-6 py-4">Basic Liability (15K/30K)</th>
<th className="px-6 py-4">Recommended (100K/300K+)</th>
<th className="px-6 py-4">Est. Monthly Diff</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 text-sm">
<tr className="hover:bg-zinc-50/50">
<td className="px-6 py-4 font-medium text-zinc-900">Auto Insurance</td>
<td className="px-6 py-4 text-zinc-500">Baseline</td>
<td className="px-6 py-4 text-zinc-700">Excellent</td>
<td className="px-6 py-4 font-medium text-emerald-600">+$20-40/mo</td>
</tr>
<tr className="hover:bg-zinc-50/50">
<td className="px-6 py-4 font-medium text-zinc-900">Home/Renters</td>
<td className="px-6 py-4 text-zinc-500">$100k Limit</td>
<td className="px-6 py-4 text-zinc-700">$300k-$500k Limit</td>
<td className="px-6 py-4 font-medium text-emerald-600">+$5-15/mo</td>
</tr>
<tr className="hover:bg-zinc-50/50">
<td className="px-6 py-4 font-medium text-zinc-900">Umbrella Policy</td>
<td className="px-6 py-4 text-zinc-500">N/A</td>
<td className="px-6 py-4 text-zinc-700">$1M - $2M Coverage</td>
<td className="px-6 py-4 font-medium text-emerald-600">+$10-25/mo</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="animate-fade-in" style={{animationDelay: '0.3s'}}>
<h2 className="text-zinc-900 font-semibold text-base tracking-tight mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    When to Call Us Immediately
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white border-l-4 border-l-rose-500 border-y border-r border-zinc-200 rounded-r-xl p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-zinc-900" icon="solar:car-crash-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900 text-sm">Car Accident</h3>
</div>
<div className="space-y-3">
<div className="flex gap-3 text-xs">
<iconify-icon className="text-rose-500 flex-shrink-0" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">Don't admit fault or give recorded statements without counsel.</span>
</div>
<div className="flex gap-3 text-xs">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">We will protect your rights and negotiate to maximize recovery.</span>
</div>
</div>
</div>

<div className="bg-white border-l-4 border-l-rose-500 border-y border-r border-zinc-200 rounded-r-xl p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-zinc-900" icon="solar:medical-kit-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900 text-sm">Injury at Work</h3>
</div>
<div className="space-y-3">
<div className="flex gap-3 text-xs">
<iconify-icon className="text-rose-500 flex-shrink-0" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">Don't delay reporting or assume it's "not serious enough". Strict deadlines apply.</span>
</div>
<div className="flex gap-3 text-xs">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">We navigate claims and ensure you get full benefits.</span>
</div>
</div>
</div>

<div className="bg-white border-l-4 border-l-rose-500 border-y border-r border-zinc-200 rounded-r-xl p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-zinc-900" icon="solar:bomb-emoji-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900 text-sm">Defective Product / Lemon</h3>
</div>
<div className="space-y-3">
<div className="flex gap-3 text-xs">
<iconify-icon className="text-rose-500 flex-shrink-0" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">Don't accept repeated "fixes" without documenting everything.</span>
</div>
<div className="flex gap-3 text-xs">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">We build your case to pursue refund, replacement, or compensation.</span>
</div>
</div>
</div>

<div className="bg-white border-l-4 border-l-rose-500 border-y border-r border-zinc-200 rounded-r-xl p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-zinc-900" icon="solar:gavel-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-medium text-zinc-900 text-sm">Threatened with Lawsuit</h3>
</div>
<div className="space-y-3">
<div className="flex gap-3 text-xs">
<iconify-icon className="text-rose-500 flex-shrink-0" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">Don't communicate directly with the claimant. Notify insurer immediately.</span>
</div>
<div className="flex gap-3 text-xs">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-zinc-600">We coordinate with your insurer to provide legal defense.</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 pt-8 pb-4 text-center">
<div className="flex justify-center gap-6 mb-4">
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
<p className="text-[10px] text-zinc-400 max-w-lg mx-auto leading-relaxed">
                    This guide is for educational purposes and does not constitute legal advice. Consult with a licensed attorney for your specific situation.
                    <br/><br/>
                    © 2023 Hariri Law. All rights reserved.
                </p>
</footer>
</div>
</main>

    </>
  );
}
