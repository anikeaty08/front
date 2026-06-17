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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563EB', // Brand Blue
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
},
accent: {
orange: '#F97316',
}
}
}
}
}



        // Initialize Icons
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 border-b border-slate-200 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="p-1.5 bg-primary-600 rounded-lg text-white group-hover:scale-105 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-xl font-bold tracking-tighter text-slate-900">ServiceCall</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors" href="#integrations">Integrations</a>
<a className="text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-sm hover:shadow-md" href="#">
                        Start Free Trial
                    </a>

<button className="md:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white to-primary-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-orange text-white text-xs font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
                        Save 20-30 Minutes Per Lead
                    </div>
<h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Stop Wasting Time on <br/>
<span className="text-primary-600">Unqualified Leads</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-2xl text-balance leading-relaxed">
                        Auto-enrich every CRM lead with property data, home equity, energy savings, and rebate eligibility. Know exactly which leads are worth your time before you dial.
                    </p>

<div className="bg-primary-50 border border-primary-100 rounded-xl p-6 mb-8 max-w-xl">
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
<div className="flex items-start gap-3">
<div className="mt-1 text-primary-600"><i className="w-5 h-5" data-lucide="timer"></i></div>
<div>
<div className="text-sm text-slate-500 font-medium">Time Saved</div>
<div className="text-slate-900 font-bold">20-30 min/lead</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-emerald-500"><i className="w-5 h-5" data-lucide="trending-up"></i></div>
<div>
<div className="text-sm text-slate-500 font-medium">Close Rate</div>
<div className="text-slate-900 font-bold">+30-50%</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40" href="#">
                            Start Free Trial
                            <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm hover:border-slate-300" href="#roi">
                            Calculate Your Savings
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">

<div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="grid grid-cols-2 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 shadow-xl rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
<span className="text-xs font-bold text-slate-400 line-through">2-4 days</span>
<i className="w-4 h-4 text-primary-600" data-lucide="arrow-right"></i>
<span className="text-xs font-bold text-primary-600">4 hours</span>
</div>

<div className="bg-slate-50/50 p-6 pt-10 border-r border-slate-100 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-500">
<i className="w-6 h-6" data-lucide="frown"></i>
</div>
<h3 className="text-sm font-bold text-slate-900 mb-4">Without ServiceCall</h3>
<ul className="space-y-3 text-left w-full">
<li className="flex items-start gap-2 text-xs text-slate-500">
<i className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" data-lucide="x"></i>
                                        Manual research
                                    </li>
<li className="flex items-start gap-2 text-xs text-slate-500">
<i className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" data-lucide="x"></i>
                                        2-4 days response
                                    </li>
<li className="flex items-start gap-2 text-xs text-slate-500">
<i className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" data-lucide="x"></i>
                                        30-50% wasted time
                                    </li>
</ul>
</div>

<div className="bg-primary-50/30 p-6 pt-10 flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none"></div>
<div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600 relative z-10">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="text-sm font-bold text-primary-700 mb-4 relative z-10">With ServiceCall</h3>
<ul className="space-y-3 text-left w-full relative z-10">
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<i className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
                                        Instant enrichment
                                    </li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<i className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
                                        4 hour response
                                    </li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<i className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
                                        Focus on qualified
                                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">What If Every Lead Came Pre-Qualified?</h2>
<p className="text-lg text-slate-500">Eliminate the guesswork. See the impact of data-driven lead qualification.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="p-8 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<div className="mb-6 p-3 bg-primary-50 rounded-lg w-fit text-primary-600 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="clock"></i>
</div>
<div className="text-5xl font-bold text-primary-600 tracking-tight mb-2">20m</div>
<div className="text-lg font-semibold text-slate-400 mb-4">Saved Per Lead</div>
<p className="text-sm text-slate-500 leading-relaxed">No more manual property research on county assessor sites or Zillow.</p>
</div>

<div className="p-8 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<div className="mb-6 p-3 bg-primary-50 rounded-lg w-fit text-primary-600 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
<div className="text-5xl font-bold text-primary-600 tracking-tight mb-2">10x</div>
<div className="text-lg font-semibold text-slate-400 mb-4">Faster Response</div>
<p className="text-sm text-slate-500 leading-relaxed">Move from days to hours with accurate virtual estimates.</p>
</div>

<div className="p-8 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<div className="mb-6 p-3 bg-primary-50 rounded-lg w-fit text-primary-600 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="target"></i>
</div>
<div className="text-5xl font-bold text-primary-600 tracking-tight mb-2">40%</div>
<div className="text-lg font-semibold text-slate-400 mb-4">Higher Close Rate</div>
<p className="text-sm text-slate-500 leading-relaxed">Focus your sales team only on qualified, ready-to-buy leads.</p>
</div>

<div className="p-8 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<div className="mb-6 p-3 bg-primary-50 rounded-lg w-fit text-primary-600 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="trending-up"></i>
</div>
<div className="text-5xl font-bold text-primary-600 tracking-tight mb-2">$50k</div>
<div className="text-lg font-semibold text-slate-400 mb-4">Added Revenue</div>
<p className="text-sm text-slate-500 leading-relaxed">Average annual increase from prioritizing high-value jobs.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-primary-50/50" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Everything You Need to Know, Instantly</h2>
<p className="text-xl text-slate-500">Five critical data points delivered automatically to your CRM.</p>
</div>
<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden" x-data="{ tab: 'equity' }">

<div className="flex flex-wrap border-b border-slate-100 bg-slate-50/50">
<button className="flex-1 min-w-[140px] px-6 py-4 text-sm font-semibold text-primary-600 border-b-2 border-primary-600 bg-white focus:outline-none">
                        Home Equity
                    </button>
<button className="flex-1 min-w-[140px] px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none">
                        Property Value
                    </button>
<button className="flex-1 min-w-[140px] px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none">
                        Permit History
                    </button>
<button className="flex-1 min-w-[140px] px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none">
                        Energy Savings
                    </button>
<button className="flex-1 min-w-[140px] px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none">
                        Rebates
                    </button>
</div>

<div className="p-8 lg:p-12">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-6">
<i className="w-3 h-3" data-lucide="clock"></i>
                                Time Saved: 5-8 min
                            </div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Instant Equity Estimation</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                                Never guess a homeowner's budget again. See estimated equity instantly to determine financing eligibility and upsell potential before the appointment.
                            </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-primary-100 p-1 rounded text-primary-600"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Qualify for Financing</h4>
<p className="text-xs text-slate-500 mt-0.5">Know if they qualify for HELOC or financing options.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-primary-100 p-1 rounded text-primary-600"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Upsell Confidence</h4>
<p className="text-xs text-slate-500 mt-0.5">Pitch premium systems to high-equity homeowners.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative">

<div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-slate-100 animate-pulse">
<div className="text-xs text-slate-400 font-medium uppercase mb-1">Estimated Equity</div>
<div className="text-xl font-bold text-emerald-500">$245,000</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-slate-600">Loan Balance</span>
<span className="text-sm font-medium text-slate-600">Home Value</span>
</div>
<div className="h-4 bg-slate-200 rounded-full overflow-hidden flex">
<div className="w-[45%] bg-slate-400 h-full"></div>
<div className="w-[55%] bg-emerald-500 h-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-400">
<span>$305k</span>
<span>$550k</span>
</div>
<hr className="border-slate-200 my-4"/>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<div>
<div className="text-sm font-bold text-slate-900">123 Maple Ave</div>
<div className="text-xs text-slate-500">Last Sold: 2018 ($380k)</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Set It and Forget It</h2>
<p className="text-xl text-slate-500">Connect once, enrich automatically forever.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>
<div className="grid md:grid-cols-3 gap-12">

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:border-primary-500 group-hover:shadow-primary-100 transition-all duration-300">
<i className="w-10 h-10 text-slate-400 group-hover:text-primary-600 transition-colors" data-lucide="plug"></i>
</div>
<div className="absolute top-8 -right-6 hidden md:block text-slate-300">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">1. Connect Your CRM</h3>
<p className="text-sm text-slate-500 max-w-xs mb-3">One-click OAuth integration. Secure and instant.</p>
<span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded">2 minutes</span>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:border-primary-500 group-hover:shadow-primary-100 transition-all duration-300">
<i className="w-10 h-10 text-slate-400 group-hover:text-primary-600 transition-colors" data-lucide="sliders"></i>
</div>
<div className="absolute top-8 -right-6 hidden md:block text-slate-300">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">2. Configure Fields</h3>
<p className="text-sm text-slate-500 max-w-xs mb-3">Map data points directly to your custom fields.</p>
<span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded">3 minutes</span>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:border-primary-500 group-hover:shadow-primary-100 transition-all duration-300">
<i className="w-10 h-10 text-slate-400 group-hover:text-primary-600 transition-colors" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">3. Auto Enrichment</h3>
<p className="text-sm text-slate-500 max-w-xs mb-3">Every new lead is enriched instantly as it arrives.</p>
<span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">Forever ♾</span>
</div>
</div>
</div>

<div className="mt-20 border-t border-slate-100 pt-10">
<p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">Seamlessly integrates with</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-blue-600 rounded"></div> ServiceTitan</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-green-500 rounded-full"></div> Jobber</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-blue-400 rounded-tr-xl rounded-bl-xl"></div> Housecall Pro</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-2"><div className="w-6 h-6 bg-orange-500 rounded"></div> Service Fusion</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-primary-50 to-white" id="roi">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center mb-12">Calculate Your Time Savings</h2>
<div className="bg-white rounded-xl shadow-xl border border-slate-200 p-8 md:p-10">
<div className="grid md:grid-cols-2 gap-10">

<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Leads per month</label>
<div className="relative">
<input className="block w-full rounded-lg border-slate-300 border bg-slate-50 p-3 pl-4 focus:border-primary-500 focus:bg-white focus:ring-primary-500 transition-all outline-none font-semibold text-slate-900" type="number" value="150"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Current close rate (%)</label>
<div className="relative">
<input className="block w-full rounded-lg border-slate-300 border bg-slate-50 p-3 pl-4 focus:border-primary-500 focus:bg-white focus:ring-primary-500 transition-all outline-none font-semibold text-slate-900" type="number" value="25"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 font-medium">%</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Average job value</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 font-medium">$</div>
<input className="block w-full rounded-lg border-slate-300 border bg-slate-50 p-3 pl-8 focus:border-primary-500 focus:bg-white focus:ring-primary-500 transition-all outline-none font-semibold text-slate-900" type="number" value="4500"/>
</div>
</div>
<button className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg mt-4">
                            Calculate Savings
                        </button>
</div>

<div className="bg-primary-50/50 rounded-lg border border-primary-100 p-6 flex flex-col justify-center">
<h4 className="text-lg font-bold text-slate-900 mb-6">With ServiceCall, you could:</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="bg-white p-1.5 rounded-full shadow-sm text-emerald-500 border border-emerald-100">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-slate-700 font-medium">Save <span className="text-slate-900 font-bold">50 hours</span> per month</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white p-1.5 rounded-full shadow-sm text-emerald-500 border border-emerald-100">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-slate-700 font-medium">Close <span className="text-slate-900 font-bold">8</span> additional deals</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white p-1.5 rounded-full shadow-sm text-emerald-500 border border-emerald-100">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-slate-700 font-medium">Generate <span className="text-slate-900 font-bold">$36,000</span> more revenue</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-primary-100 text-center">
<a className="text-primary-600 font-semibold hover:text-primary-700 text-sm inline-flex items-center gap-1" href="#">
                                See your personalized ROI report <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden" id="integrations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-16">Works With Your Existing Tools</h2>
<div className="relative max-w-3xl mx-auto h-[400px] flex items-center justify-center">

<div className="absolute z-20 bg-white p-4 rounded-2xl shadow-xl border border-primary-100 w-24 h-24 flex items-center justify-center">
<div className="bg-primary-600 p-2 rounded-lg text-white">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
</div>

<div className="absolute border border-slate-100 rounded-full w-[280px] h-[280px] z-0"></div>
<div className="absolute border border-slate-100 rounded-full w-[480px] h-[480px] z-0"></div>

<div className="absolute top-10 left-1/4 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
<div className="w-8 h-8 bg-blue-600 rounded"></div>
</div>
<div className="absolute top-4 right-1/3 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
<div className="w-8 h-8 bg-green-500 rounded-full"></div>
</div>
<div className="absolute top-20 right-10 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
<div className="w-8 h-8 bg-blue-400 rounded-tr-xl rounded-bl-xl"></div>
</div>

<div className="absolute bottom-10 right-1/4 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="home"></i>
<span className="text-xs font-bold text-slate-500">Property</span>
</div>
<div className="absolute bottom-6 left-1/3 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="file-text"></i>
<span className="text-xs font-bold text-slate-500">Permits</span>
</div>
<div className="absolute bottom-20 left-10 bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="banknote"></i>
<span className="text-xs font-bold text-slate-500">Rebates</span>
</div>

<div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">

<svg className="w-full h-full" style={{opacity: '0.2'}}>
<line stroke="#2563EB" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="28%" y1="50%" y2="20%"></line>
<line stroke="#2563EB" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="65%" y1="50%" y2="18%"></line>
<line stroke="#2563EB" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="85%" y1="50%" y2="35%"></line>
<line stroke="#94a3b8" strokeWidth="2" x1="50%" x2="70%" y1="50%" y2="80%"></line>
<line stroke="#94a3b8" strokeWidth="2" x1="50%" x2="35%" y1="50%" y2="85%"></line>
<line stroke="#94a3b8" strokeWidth="2" x1="50%" x2="15%" y1="50%" y2="65%"></line>
</svg>
</div>
</div>
<p className="text-slate-500 mt-8 font-medium">No disruption to your workflow. ServiceCall works behind the scenes.</p>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center mb-16">How Contractors Save Time</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="flex text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="flex-1 text-slate-700 mb-6 leading-relaxed">
                        "I used to spend 30 minutes researching every lead. Now it's all there when I open the CRM. I'm closing 3-4 more deals per month."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">

<svg className="w-full h-full text-slate-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Mike Thompson</div>
<div className="text-xs text-slate-500">Thompson HVAC, Dallas TX</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="flex text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="flex-1 text-slate-700 mb-6 leading-relaxed">
                        "The energy savings calculations are a game-changer. I can quote HVAC upgrades with real ROI numbers in seconds, not hours."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<svg className="w-full h-full text-slate-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Jennifer Lopez</div>
<div className="text-xs text-slate-500">Lopez Plumbing, Miami FL</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="flex text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="flex-1 text-slate-700 mb-6 leading-relaxed">
                        "Rebate data alone saves me 15 minutes per call. Customers love hearing '$2,000 tax credit' before I even mention the price."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<svg className="w-full h-full text-slate-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Robert Kim</div>
<div className="text-xs text-slate-500">Kim Electrical, Seattle WA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Pays For Itself in One Extra Deal</h2>
<p className="text-lg text-slate-500">Simple pricing. No hidden fees.</p>
</div>

<div className="max-w-2xl mx-auto mb-16 bg-slate-50 border border-slate-200 rounded-xl p-6">
<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="flex-1 w-full">
<div className="flex justify-between text-xs font-semibold uppercase text-slate-500 mb-2">
<span>Cost</span>
<span>Value</span>
</div>
<div className="h-8 flex w-full rounded-md overflow-hidden">
<div className="w-[10%] bg-slate-300 flex items-center justify-center text-[10px] text-slate-700 font-bold">$299</div>
<div className="w-[90%] bg-emerald-500 flex items-center justify-center text-xs text-white font-bold">$3,000+ (1 Job)</div>
</div>
</div>
<div className="text-center sm:text-right shrink-0">
<div className="text-sm font-medium text-slate-500">Break-even point</div>
<div className="text-lg font-bold text-slate-900">1 deal every 30 leads</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-bold text-slate-900">Starter</h3>
<div className="mt-2 flex items-baseline">
<span className="text-3xl font-bold text-slate-900">$149</span>
<span className="text-slate-500 ml-1">/mo</span>
</div>
<p className="text-sm text-slate-500 mt-2">Save 20+ hours/month</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Up to 100 leads
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Property &amp; Equity Data
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Standard Support
                        </li>
</ul>
<a className="w-full block text-center py-2.5 px-4 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors" href="#">Start Free Trial</a>
</div>

<div className="border-2 border-primary-600 rounded-2xl p-8 shadow-xl bg-white flex flex-col relative transform lg:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-bold text-slate-900">Pro</h3>
<div className="mt-2 flex items-baseline">
<span className="text-3xl font-bold text-slate-900">$299</span>
<span className="text-slate-500 ml-1">/mo</span>
</div>
<p className="text-sm text-emerald-600 font-medium mt-2">Close 3-5 more deals/mo</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Up to 500 leads
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Full Data Suite (5 Sets)
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Rebate Calculator
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Priority Support
                        </li>
</ul>
<a className="w-full block text-center py-2.5 px-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20" href="#">Start Free Trial</a>
</div>

<div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow bg-white flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-bold text-slate-900">Scale</h3>
<div className="mt-2 flex items-baseline">
<span className="text-3xl font-bold text-slate-900">Custom</span>
</div>
<p className="text-sm text-slate-500 mt-2">For multi-location teams</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Unlimited leads
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> API Access
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary-600" data-lucide="check"></i> Dedicated Success Mgr
                        </li>
</ul>
<a className="w-full block text-center py-2.5 px-4 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-center px-4">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Start Saving Time Today</h2>
<p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">Join hundreds of contractors who have automated their lead research. Setup takes 5 minutes.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 text-lg font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-xl" href="#">
                    Start Free Trial
                </a>
</div>
<p className="mt-6 text-sm text-primary-200">30-day free trial · No credit card required</p>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="p-1 bg-primary-600 rounded text-white">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">ServiceCall</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Automated lead enrichment for high-performance home service contractors.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-primary-600" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-primary-600" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">Features</a></li>
<li><a className="hover:text-primary-600" href="#">Integrations</a></li>
<li><a className="hover:text-primary-600" href="#">Pricing</a></li>
<li><a className="hover:text-primary-600" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">About</a></li>
<li><a className="hover:text-primary-600" href="#">Blog</a></li>
<li><a className="hover:text-primary-600" href="#">Careers</a></li>
<li><a className="hover:text-primary-600" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">Privacy</a></li>
<li><a className="hover:text-primary-600" href="#">Terms</a></li>
<li><a className="hover:text-primary-600" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 ServiceCall Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
