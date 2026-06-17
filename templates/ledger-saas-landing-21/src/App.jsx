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
      

<nav className="fixed inset-x-0 top-6 mx-auto max-w-5xl z-50 px-6">
<div className="flex items-center justify-between bg-white/70 backdrop-blur-lg border border-emerald-200/50 rounded-full px-4 py-3 shadow-sm">
<div className="flex items-center gap-2 px-2">
<span className="text-lg font-semibold tracking-tight font-manrope">Chronicle</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">System</a>
<a className="text-sm font-medium text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Services</a>
<a className="text-sm font-medium text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Rates</a>
<a className="text-sm font-medium text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Guides</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-emerald-600 hover:text-emerald-900 transition-colors font-manrope" href="#">Sign
                    in</a>
<button className="bg-emerald-950 hover:bg-emerald-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-all flex items-center gap-2 shadow-sm font-manrope">
                    Start free trial
                </button>
</div>
</div>
</nav>

<section className="overflow-hidden pt-40 pb-20 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100 via-white to-white -z-10">
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full mb-8">
<span className="flex h-2 w-2 rounded-full bg-cyan-500"></span>
<span className="text-xs font-medium text-emerald-600 font-manrope">Chronicle 2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight text-emerald-950 mb-6 max-w-4xl mx-auto leading-tight font-montserrat font-medium">
                Monetary accuracy for
                <span className="text-emerald-400 font-montserrat font-medium">contemporary organizations.</span>
</h1>
<p className="text-lg md:text-xl text-emerald-500 mb-10 max-w-2xl mx-auto leading-relaxed font-montserrat font-medium">
                The comprehensive solution to monitor chargeable hours, handle expenditures, and streamline professional
                billing with complete precision.
            </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-md mx-auto mb-20">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<iconify-icon className="text-emerald-400 text-lg group-focus-within:text-emerald-900 transition-colors" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-white border border-emerald-200 rounded-full pl-12 pr-4 py-3.5 text-sm font-medium text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-emerald-400 shadow-sm" placeholder="Provide business email" type="email"/>
</div>
<button className="w-full sm:w-auto bg-emerald-950 hover:bg-emerald-800 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md font-manrope">
                    Begin now
                    <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="relative max-w-6xl mx-auto bg-white border border-emerald-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[800px] text-left">

<header className="h-14 bg-white border-b border-emerald-100 flex items-center justify-between px-6 shrink-0 z-20">
<div className="flex items-center gap-6">
<h2 className="text-sm font-semibold text-emerald-900 tracking-tight font-manrope">Generate Bill
                        </h2>
</div>
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs font-medium text-emerald-500 group-hover:text-emerald-900 transition-colors font-manrope">Generate additional</span>
</label>
<div className="w-px h-4 bg-emerald-200"></div>
<button className="bg-emerald-950 hover:bg-emerald-800 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors font-manrope">
                            Dispatch Bill
                        </button>
<button className="text-emerald-400 hover:text-emerald-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:close-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>
<div className="flex flex-1 overflow-hidden bg-emerald-50/50">

<div className="w-80 bg-white border-r border-emerald-100 flex flex-col hide-scrollbar overflow-y-auto">
<div className="p-6 space-y-8">

<div className="space-y-4">
<div className="relative group">
<label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-emerald-500 z-10 font-manrope">Client</label>
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<iconify-icon className="text-emerald-400 group-focus-within:text-emerald-900 transition-colors" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-white border border-emerald-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-emerald-900 focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all shadow-sm" type="text" value="Apex Industries"/>
</div>
<div className="relative">
<label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-emerald-500 z-10 font-manrope">Format</label>
<select className="w-full bg-white border border-emerald-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-emerald-900 focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all shadow-sm appearance-none cursor-pointer">
<option className="font-manrope">Conventional Services</option>
<option className="font-manrope">Subscription</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-emerald-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex p-1 bg-emerald-100/80 rounded-xl border border-emerald-200/50">
<button className="flex-1 bg-white text-emerald-900 text-xs font-medium py-2 rounded-lg shadow-sm border border-emerald-200/50 font-manrope">One-time</button>
<button className="flex-1 text-emerald-500 hover:text-emerald-900 text-xs font-medium py-2 rounded-lg transition-colors font-manrope">Periodic</button>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-xs font-medium text-emerald-900 font-manrope">Auto-deliver
                                        </div>
<div className="text-xs text-emerald-500 font-manrope">Email when created</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-emerald-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-900"></div>
</label>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-emerald-900 uppercase tracking-wider font-manrope">
                                        Timeline</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="relative group">
<label className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-emerald-500 z-10 font-manrope">Created</label>
<input className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2.5 text-sm font-medium text-emerald-900 focus:outline-none focus:border-emerald-900 transition-all shadow-sm" type="text" value="Oct 12"/>
</div>
<div className="relative group">
<label className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-emerald-500 z-10 font-manrope">Payable</label>
<input className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2.5 text-sm font-medium text-emerald-900 focus:outline-none focus:border-emerald-900 transition-all shadow-sm" type="text" value="Nov 11"/>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-emerald-900 uppercase tracking-wider font-manrope">
                                        Entries</h3>
<button className="text-xs font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-1 font-manrope">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> Include
                                    </button>
</div>
<div className="border border-emerald-200 rounded-xl overflow-hidden bg-white shadow-sm">
<div className="flex items-center px-3 py-2 bg-emerald-50 border-b border-emerald-200 text-xs font-medium text-emerald-500">
<div className="flex-1 font-manrope">Details</div>
<div className="w-16 text-right font-manrope">Total</div>
</div>
<div className="px-3 py-3 border-b border-emerald-100">
<div className="text-sm font-medium text-emerald-900 font-manrope">System
                                            Engineering</div>
<div className="flex justify-between items-center mt-1">
<div className="text-xs text-emerald-500 font-manrope">120 hrs @ $150</div>
<div className="text-sm font-medium text-emerald-900 font-manrope">$18,000</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-auto p-6 border-t border-emerald-100 bg-white">
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-emerald-200 text-xs font-medium text-emerald-600 hover:bg-emerald-50 transition-colors font-manrope">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Options
                                </button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-emerald-200 text-xs font-medium text-emerald-600 hover:bg-emerald-50 transition-colors font-manrope">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon> View
                                </button>
</div>
</div>
</div>

<div className="flex-1 p-8 flex justify-center hide-scrollbar overflow-y-auto relative">

<div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-emerald-200 p-12 min-h-full flex flex-col">
<div className="flex justify-between items-start mb-16">
<div>
<div className="text-xl tracking-tight text-emerald-950 mb-1 font-montserrat font-medium">
                                        Chronicle Ltd.</div>
<div className="text-xs text-emerald-500 leading-relaxed font-manrope">
                                        100 Commerce Ave, Floor 300<br/>San Francisco, CA 94105<br/>accounts@chronicle.ltd
                                    </div>
</div>
<div className="text-right">
<div className="text-2xl tracking-tight text-emerald-950 mb-2 font-montserrat font-medium">
                                        BILL</div>
<div className="text-sm text-emerald-500 space-y-1">
<div className="font-manrope">
<span className="font-medium text-emerald-700 font-manrope">Ref:</span>
                                            BIL-2024-089</div>
<div className="font-manrope">
<span className="font-medium text-emerald-700 font-manrope">Issued:</span> Oct
                                            12, 2024</div>
<div className="font-manrope">
<span className="font-medium text-emerald-700 font-manrope">Payable:</span> Nov
                                            11, 2024</div>
</div>
</div>
</div>
<div className="mb-12">
<div className="text-xs font-medium text-emerald-500 uppercase tracking-wider mb-2 font-manrope">
                                    Invoice To</div>
<div className="text-sm font-medium text-emerald-950 font-manrope">Apex Industries</div>
<div className="text-sm text-emerald-500 mt-1 leading-relaxed font-manrope">
                                    Attn: Finance Department<br/>456 Enterprise Boulevard<br/>Austin, TX 78701
                                </div>
</div>
<div className="flex-1">
<div className="flex items-center border-b border-emerald-950 pb-3 mb-4 text-xs font-medium text-emerald-950 uppercase tracking-wider">
<div className="flex-1 font-manrope">Details</div>
<div className="w-20 text-center font-manrope">Units</div>
<div className="w-24 text-right font-manrope">Price</div>
<div className="w-24 text-right font-manrope">Total</div>
</div>
<div className="flex items-start py-3 border-b border-emerald-100 text-sm">
<div className="flex-1 pr-4">
<div className="font-medium text-emerald-900 font-manrope">System Architecture &amp;
                                            Engineering</div>
<div className="text-xs text-emerald-500 mt-1 font-manrope">Stage 1 deployment
                                            including foundational infrastructure and user verification modules.</div>
</div>
<div className="w-20 text-center text-emerald-600 font-manrope">120</div>
<div className="w-24 text-right text-emerald-600 font-manrope">$150.00</div>
<div className="w-24 text-right font-medium text-emerald-950 font-manrope">$18,000.00
                                    </div>
</div>
<div className="flex items-start py-3 border-b border-emerald-100 text-sm">
<div className="flex-1 pr-4">
<div className="font-medium text-emerald-900 font-manrope">Periodic Infrastructure
                                            Support</div>
<div className="text-xs text-emerald-500 mt-1 font-manrope">Premium cloud
                                            infrastructure and round-the-clock availability tracking.</div>
</div>
<div className="w-20 text-center text-emerald-600 font-manrope">1</div>
<div className="w-24 text-right text-emerald-600 font-manrope">$450.00</div>
<div className="w-24 text-right font-medium text-emerald-950 font-manrope">$450.00</div>
</div>
</div>
<div className="mt-8 border-t border-emerald-200 pt-6 flex justify-end">
<div className="w-64 space-y-3">
<div className="flex justify-between text-sm text-emerald-600">
<span className="font-manrope">Net Amount</span>
<span className="font-manrope">$18,450.00</span>
</div>
<div className="flex justify-between text-sm text-emerald-600">
<span className="font-manrope">Levy (0%)</span>
<span className="font-manrope">$0.00</span>
</div>
<div className="flex justify-between text-lg font-semibold text-emerald-950 pt-3 border-t border-emerald-200">
<span className="font-manrope">Amount Payable</span>
<span className="font-manrope">$18,450.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-emerald-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-emerald-400 uppercase tracking-widest mb-8 font-manrope">
                Enabling finances for top-tier organizations</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60">
<span className="text-xl tracking-tighter text-emerald-900 font-montserrat font-medium">APEX Corp</span>
<span className="text-xl tracking-tighter text-emerald-900 font-montserrat font-medium">Nebula</span>
<span className="text-xl tracking-tighter text-emerald-900 font-montserrat font-medium">Titan</span>
<span className="text-xl tracking-tighter text-emerald-900 font-montserrat font-medium">Vertex</span>
<span className="text-xl tracking-tighter text-emerald-900 font-montserrat font-medium">Nexus</span>
</div>
</div>
</section>

<section className="py-24 bg-emerald-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl tracking-tight text-emerald-950 mb-4 font-montserrat font-medium">
                        Crafted for complete precision.</h2>
<p className="text-base text-emerald-500 leading-relaxed font-manrope">Scattered information causes
                        obstacles. Chronicle consolidates your monetary stack into one cohesive, reliable foundation.
                    </p>
</div>
<a className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-1 transition-colors font-manrope" href="#">
                    Discover framework <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 bg-white border border-emerald-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all duration-300">
<div>
<div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-emerald-900" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-emerald-950 mb-3 font-montserrat font-medium">
                            Enterprise-level protection.</h3>
<p className="text-sm text-emerald-500 leading-relaxed font-manrope">Advanced encryption layers and
                            SOC2 Type II certification guarantees your monetary data remains secure.</p>
</div>
</div>

<div className="col-span-1 bg-emerald-950 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group">

<div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 flex items-center justify-center">
<div className="w-64 h-64 border border-white/20 rounded-full absolute animate-[spin_20s_linear_infinite]">
</div>
<div className="w-48 h-48 border border-white/20 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]">
</div>
<div className="w-32 h-32 border border-white/20 rounded-full absolute"></div>
</div>
<div className="relative z-10">
<span className="inline-block px-2.5 py-1 bg-white/10 text-white rounded-full text-xs font-medium mb-4 backdrop-blur-md border border-white/10 font-manrope">Instant Synchronization</span>
<h3 className="text-xl tracking-tight text-white font-montserrat font-medium">Operate at lightning
                            velocity.</h3>
</div>
</div>

<div className="col-span-1 bg-white border border-emerald-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-emerald-300 transition-all duration-300">
<div className="text-xs font-medium text-emerald-500 uppercase tracking-widest mb-6 font-manrope">
                        Platform Dependability</div>
<div className="relative w-40 h-40 flex items-center justify-center mb-6">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#f4f4f5" strokeWidth="4"></circle>
<circle className="transition-all duration-1000" cx="50" cy="50" fill="none" r="45" stroke="#09090b" stroke-dasharray="283" stroke-dashoffset="1" strokeWidth="4">
</circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-4xl tracking-tight text-emerald-950 font-montserrat font-medium">99.9<span className="text-2xl font-montserrat font-medium">%</span></span>
</div>
</div>
<p className="text-sm text-emerald-500 font-manrope">Assured availability commitment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight text-emerald-950 mb-4 max-w-2xl font-montserrat font-medium">
                    Optimized processes for every facet of your enterprise.</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 bg-emerald-50 border border-emerald-200 rounded-3xl p-8 flex flex-col h-[500px]">
<div className="mb-8">
<h3 className="text-lg font-semibold tracking-tight text-emerald-950 mb-2 font-manrope">Hour
                            Monitoring</h3>
<p className="text-sm text-emerald-500 font-manrope">Seamless logging to record every chargeable
                            moment.</p>
</div>
<div className="flex-1 bg-white border border-emerald-200 rounded-2xl shadow-sm p-4 relative overflow-hidden">

<div className="flex justify-between items-center mb-4 pb-2 border-b border-emerald-100">
<span className="text-xs font-semibold text-emerald-900 font-manrope">Current Day</span>
<div className="flex gap-1">
<div className="w-6 h-6 rounded flex items-center justify-center bg-emerald-100">
<iconify-icon className="text-xs" icon="solar:alt-arrow-left-linear"></iconify-icon>
</div>
<div className="w-6 h-6 rounded flex items-center justify-center bg-emerald-100">
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="relative h-full text-xs">
<div className="absolute left-10 right-0 top-4 h-px bg-emerald-100"></div>
<div className="absolute left-10 right-0 top-16 h-px bg-emerald-100"></div>
<div className="absolute left-10 right-0 top-28 h-px bg-emerald-100"></div>
<div className="absolute left-0 top-2 text-emerald-400 font-manrope">9 AM</div>
<div className="absolute left-0 top-14 text-emerald-400 font-manrope">10 AM</div>
<div className="absolute left-0 top-26 text-emerald-400 font-manrope">11 AM</div>

<div className="absolute left-12 right-2 top-6 h-16 bg-cyan-50 border border-cyan-100 rounded-md p-2">
<div className="font-medium text-cyan-900 font-manrope">Team Meeting</div>
<div className="text-cyan-700/70 mt-0.5 font-manrope">Apex Industries</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-emerald-50 border border-emerald-200 rounded-3xl p-8 flex flex-col h-[500px]">
<div className="mb-8 max-w-md">
<h3 className="text-lg font-semibold tracking-tight text-emerald-950 mb-2 font-manrope">Document
                            Repository</h3>
<p className="text-sm text-emerald-500 font-manrope">Protected storage for agreements, receipts, and
                            work products.</p>
</div>
<div className="flex-1 bg-white border border-emerald-200 rounded-2xl shadow-sm p-4 flex gap-4 overflow-hidden">

<div className="w-40 border-r border-emerald-100 pr-4 flex flex-col gap-2">
<button className="w-full flex items-center justify-center gap-2 bg-emerald-950 text-white text-xs font-medium py-2 rounded-lg mb-2 font-manrope">
<iconify-icon icon="solar:upload-linear"></iconify-icon> Transfer
                            </button>
<div className="text-xs font-medium text-emerald-900 bg-emerald-100 px-2 py-1.5 rounded font-manrope">
                                All Documents</div>
<div className="text-xs font-medium text-emerald-500 hover:text-emerald-900 px-2 py-1.5 rounded cursor-pointer font-manrope">
                                Agreements</div>
<div className="text-xs font-medium text-emerald-500 hover:text-emerald-900 px-2 py-1.5 rounded cursor-pointer font-manrope">
                                Bills</div>
</div>

<div className="flex-1">
<div className="flex gap-4">
<div className="w-32 border border-emerald-200 rounded-xl p-3 bg-emerald-50">
<iconify-icon className="text-2xl text-emerald-400 mb-2" icon="solar:folder-with-files-linear"></iconify-icon>
<div className="text-xs font-medium text-emerald-900 truncate font-manrope">Q3 Reports
                                    </div>
<div className="text-xs text-emerald-500 mt-1 font-manrope">12 files</div>
</div>
<div className="w-32 border border-emerald-200 rounded-xl p-3 bg-emerald-50">
<iconify-icon className="text-2xl text-emerald-400 mb-2" icon="solar:folder-with-files-linear"></iconify-icon>
<div className="text-xs font-medium text-emerald-900 truncate font-manrope">Customer
                                        Resources</div>
<div className="text-xs text-emerald-500 mt-1 font-manrope">4 files</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-50 border-t border-emerald-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl tracking-tight text-emerald-950 font-montserrat font-medium">Endorsed by
                    professionals.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-emerald-200 rounded-2xl p-8 shadow-sm">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-emerald-700 leading-relaxed mb-8 font-manrope">"Chronicle eliminated all the
                        hassle from our payment process. It's rapid, precise, and aesthetically mirrors the excellence
                        of our own output."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-xs font-medium text-emerald-500 font-manrope">
                            TS</div>
<div>
<div className="text-sm font-medium text-emerald-900 font-manrope">Talia Stevens</div>
<div className="text-xs text-emerald-500 font-manrope">CEO, Creative Studio</div>
</div>
</div>
</div>

<div className="bg-white border border-emerald-200 rounded-2xl p-8 shadow-sm">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-emerald-700 leading-relaxed mb-8 font-manrope">"We transitioned from an
                        outdated platform. The velocity at which Chronicle performs lets our staff concentrate solely on
                        work products, not paperwork."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-xs font-medium text-emerald-500 font-manrope">
                            JJ</div>
<div>
<div className="text-sm font-medium text-emerald-900 font-manrope">Jordan James</div>
<div className="text-xs text-emerald-500 font-manrope">Director, Metricon</div>
</div>
</div>
</div>

<div className="bg-white border border-emerald-200 rounded-2xl p-8 shadow-sm">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-900 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-emerald-700 leading-relaxed mb-8 font-manrope">"The API connection is
                        seamless. We linked Chronicle straight into our internal panel and it hasn't faltered once in
                        over twelve months."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-xs font-medium text-emerald-500 font-manrope">
                            ST</div>
<div>
<div className="text-sm font-medium text-emerald-900 font-manrope">Sam Taylor</div>
<div className="text-xs text-emerald-500 font-manrope">CTO, DevScale</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight text-emerald-950 mb-4 font-montserrat font-medium">
                    Clear-cut rates.</h2>
<p className="text-base text-emerald-500 max-w-xl mx-auto font-manrope">Begin at no cost, scale up when you
                    require enhanced capabilities and group collaboration.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white border border-emerald-200 rounded-3xl p-8 flex flex-col shadow-sm">
<h3 className="text-xl text-emerald-950 mb-2 font-montserrat font-medium">Starter</h3>
<p className="text-sm text-emerald-500 mb-6 h-10 font-manrope">For solo practitioners beginning out.</p>
<div className="mb-8">
<span className="text-4xl tracking-tight text-emerald-950 font-montserrat font-medium">$0</span>
<span className="text-sm text-emerald-500 font-manrope">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-emerald-600 font-manrope">
<iconify-icon className="text-emerald-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 3 Current clients
                        </li>
<li className="flex items-start gap-3 text-sm text-emerald-600 font-manrope">
<iconify-icon className="text-emerald-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Standard billing
                        </li>
<li className="flex items-start gap-3 text-sm text-emerald-600 font-manrope">
<iconify-icon className="text-emerald-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 30-day records
                        </li>
</ul>
<button className="w-full bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-900 text-sm font-medium py-3 rounded-full transition-colors font-manrope">Begin Now</button>
</div>

<div className="bg-emerald-950 rounded-3xl p-8 flex flex-col shadow-xl relative overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 right-0 p-4">
<span className="bg-white/10 text-white text-xs font-medium px-2 py-1 rounded border border-white/10 font-manrope">Preferred</span>
</div>
<h3 className="text-xl text-white mb-2 font-montserrat font-medium">Professional</h3>
<p className="text-sm text-emerald-400 mb-6 h-10 font-manrope">For expanding groups and firms.</p>
<div className="mb-8">
<span className="text-4xl tracking-tight text-white font-montserrat font-medium">$29</span>
<span className="text-sm text-emerald-400 font-manrope">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-emerald-300 font-manrope">
<iconify-icon className="text-white text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Boundless clients
                        </li>
<li className="flex items-start gap-3 text-sm text-emerald-300 font-manrope">
<iconify-icon className="text-white text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Personalized bill styling
                        </li>
<li className="flex items-start gap-3 text-sm text-emerald-300 font-manrope">
<iconify-icon className="text-white text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Automated periodic charging
                        </li>
</ul>
<button className="w-full bg-white hover:bg-emerald-100 text-emerald-900 text-sm font-medium py-3 rounded-full transition-colors font-manrope">Begin Free Trial</button>
</div>

<div className="bg-white border border-emerald-200 rounded-3xl p-8 flex flex-col shadow-sm">
<h3 className="text-xl text-emerald-950 mb-2 font-montserrat font-medium">Corporate</h3>
<p className="text-sm text-emerald-500 mb-6 h-10 font-manrope">Tailored processes for major operations.
                    </p>
<div className="mb-8">
<span className="text-4xl tracking-tight text-emerald-950 font-montserrat font-medium">Bespoke</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-emerald-600 font-manrope">
<iconify-icon className="text-emerald-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Personal account
                            executive
                        </li>
<li className="flex items-start gap-3 text-sm text-emerald-600 font-manrope">
<iconify-icon className="text-emerald-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Tailored API connection
                        </li>
<li className="flex items-start gap-3 text-sm text-emerald-600 font-manrope">
<iconify-icon className="text-emerald-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Bulk pricing
                        </li>
</ul>
<button className="w-full bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-900 text-sm font-medium py-3 rounded-full transition-colors font-manrope">Reach Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-emerald-50 border border-emerald-200 rounded-[3rem] p-12 md:p-20 text-center shadow-sm">
<h2 className="text-3xl md:text-5xl tracking-tight text-emerald-950 mb-6 font-montserrat font-medium">
                    Prepared to enhance your invoicing?</h2>
<p className="text-lg text-emerald-500 mb-10 max-w-xl mx-auto font-manrope">Become part of countless
                    professionals who have removed administrative hurdles with Chronicle.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-emerald-950 hover:bg-emerald-800 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all font-manrope">
                        Begin 14-day complimentary trial
                    </button>
<button className="bg-white border border-emerald-200 hover:bg-emerald-50 text-emerald-900 text-sm font-medium px-8 py-3.5 rounded-full transition-all font-manrope">
                        Speak with sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-emerald-200 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<span className="text-lg font-semibold tracking-tight text-emerald-950 mb-4 block font-manrope">Chronicle</span>
<p className="text-sm text-emerald-500 max-w-xs mb-6 font-manrope">The contemporary benchmark for
                        monetary administration and hour monitoring.</p>
<div className="flex gap-4">
<a className="text-emerald-400 hover:text-emerald-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-emerald-400 hover:text-emerald-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-emerald-950 mb-4 font-manrope">Offering</h4>
<ul className="space-y-3">
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Capabilities</a>
</li>
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Rates</a>
</li>
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Updates</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-emerald-950 mb-4 font-manrope">Organization</h4>
<ul className="space-y-3">
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Overview</a>
</li>
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Articles</a>
</li>
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Opportunities</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-emerald-950 mb-4 font-manrope">Compliance</h4>
<ul className="space-y-3">
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Confidentiality</a>
</li>
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Conditions</a>
</li>
<li><a className="text-sm text-emerald-500 hover:text-emerald-900 transition-colors font-manrope" href="#">Protection</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-emerald-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-emerald-400 font-manrope">© 2026 Chronicle Ltd. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-emerald-400 font-manrope">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    All platforms functioning
                </div>
</div>
</div>
</footer>

    </>
  );
}
