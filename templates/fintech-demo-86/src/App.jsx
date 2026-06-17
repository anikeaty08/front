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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.6]"></div>

<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50"></div>
</div>

<main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 lg:min-h-screen lg:flex lg:items-center lg:py-0 flex-grow mb-20 lg:mb-0">
<div className="grid lg:grid-cols-12 gap-16 w-full items-center">

<div className="lg:col-span-7 flex flex-col justify-center space-y-10 animate-fade-in">

<div className="space-y-6">

<div className="flex items-center gap-2.5 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-200">
<i className="w-5 h-5" data-lucide="command"></i>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900 font-heading">Novacard</span>
</div>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Financial clarity for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">modern teams.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg font-light leading-relaxed">
                        Automate reconciliation and gain real-time insights with a platform designed for speed.
                    </p>
</div>

<div className="w-full max-w-xl">
<h3 className="text-xs font-semibold text-slate-400 mb-6 font-heading uppercase tracking-wider">How it works</h3>
<div className="space-y-0">

<div className="flex gap-4 step-item group relative">
<div className="flex flex-col items-center step-line">
<div className="relative z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
</div>
<div className="pb-6">
<h4 className="text-sm font-semibold text-slate-900">Book your demo</h4>
<p className="text-sm text-slate-500 mt-1 leading-relaxed max-w-sm">Schedule a 15-min walkthrough with our experts.</p>
</div>
</div>

<div className="flex gap-4 step-item group relative">
<div className="flex flex-col items-center step-line">
<div className="relative z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors">
<i className="w-4 h-4" data-lucide="link" strokeWidth="1.5"></i>
</div>
</div>
<div className="pb-6">
<h4 className="text-sm font-semibold text-slate-900">Connect your accounts</h4>
<p className="text-sm text-slate-500 mt-1 leading-relaxed max-w-sm">Securely link your bank feeds with one click.</p>
</div>
</div>

<div className="flex gap-4 step-item group relative">
<div className="flex flex-col items-center">
<div className="relative z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Start automating</h4>
<p className="text-sm text-slate-500 mt-1 leading-relaxed max-w-sm">Watch 90% of your reconciliation happen on autopilot.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 w-full max-w-xl pt-4">

<div className="glass-card rounded-2xl p-5 col-span-2 sm:col-span-1 relative overflow-hidden group bg-white h-40 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider font-heading">Total Spend</p>
<h3 className="text-xl font-semibold text-slate-900 mt-0.5">$124,500.00</h3>
</div>
<span className="flex items-center text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
<i className="w-2.5 h-2.5 mr-0.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i> 12%
                            </span>
</div>

<div className="relative h-12 w-full mt-2">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 Q 10 30, 20 32 T 40 25 T 60 15 T 80 20 T 100 5" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M0 35 Q 10 30, 20 32 T 40 25 T 60 15 T 80 20 T 100 5 V 40 H 0 Z" fill="url(#gradient)" opacity="0.1" stroke="none"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#4f46e5', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="glass-card rounded-2xl p-5 col-span-2 sm:col-span-1 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl h-40">
<div className="absolute -right-6 -top-6 w-32 h-32 bg-indigo-500/30 blur-2xl rounded-full"></div>
<div className="flex justify-between items-center relative z-10">
<p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider font-heading">Active Card</p>
<i className="w-3.5 h-3.5 text-slate-400 rotate-90" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<div className="mt-auto relative z-10 space-y-3">
<div className="flex items-center space-x-2">
<div className="w-7 h-4 rounded bg-white/10 flex items-center justify-center border border-white/10">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
</div>
<div className="text-xs font-mono text-slate-300 tracking-widest">•••• 4829</div>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-[9px] text-slate-400 uppercase font-heading">Limit</div>
<div className="text-sm font-medium text-white">$50k/mo</div>
</div>
<div className="w-5 h-5 rounded bg-white text-slate-900 flex items-center justify-center">
<i className="w-3 h-3" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-5 col-span-2 sm:col-span-1 relative overflow-hidden bg-white h-40 flex flex-col justify-center">
<div className="flex items-center justify-between mb-2">
<p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider font-heading">Runway</p>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">18 Mo</span>
</div>
<div className="flex items-baseline space-x-2">
<h3 className="text-lg font-semibold text-slate-900">-$32,100</h3>
<span className="text-[10px] text-slate-500">net burn</span>
</div>
<div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 w-2/3 rounded-full"></div>
</div>
<p className="mt-2 text-[9px] text-slate-400">Conservative estimate based on Q3.</p>
</div>

<div className="glass-card rounded-2xl p-5 col-span-2 sm:col-span-1 bg-white flex flex-col justify-between h-40">
<div className="flex justify-between items-center mb-1">
<p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider font-heading">Upcoming Bills</p>
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
<i className="w-2.5 h-2.5" data-lucide="server" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-slate-700">DigitalOcean</span>
</div>
<span className="text-xs font-semibold text-slate-900">$420</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded bg-green-50 text-green-600 flex items-center justify-center">
<i className="w-2.5 h-2.5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-slate-700">Slack</span>
</div>
<span className="text-xs font-semibold text-slate-900">$890</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<i className="w-2.5 h-2.5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-slate-700">Linear</span>
</div>
<span className="text-xs font-semibold text-slate-900">$120</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full animate-fade-in delay-100">
<div className="relative rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-10 overflow-hidden">
<form className="relative z-10 space-y-5">
<div className="space-y-1.5 mb-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Request access</h2>
<p className="text-sm text-slate-500">Fill in your details to get started.</p>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-600" htmlFor="first-name">First name</label>
<input className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-600" htmlFor="last-name">Last name</label>
<input className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-600" htmlFor="company">Company name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" id="company" placeholder="Acme Inc." type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-600" htmlFor="email">Business email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" id="email" placeholder="jane@acme.com" type="email"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-600" htmlFor="phone">Phone number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-600" htmlFor="expense">Monthly expense volume</label>
<div className="relative group">
<select className="appearance-none block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm cursor-pointer" id="expense">
<option disabled="" selected="" value="">Select volume...</option>
<option value="s">Less than $10k</option>
<option value="m">$10k - $50k</option>
<option value="l">$50k - $250k</option>
<option value="xl">$250k+</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex items-center justify-between py-2">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700">US Operations</span>
<span className="text-xs text-slate-400">Do you do business in the US?</span>
</div>
<label className="flex items-center cursor-pointer relative" htmlFor="us-business">
<input className="sr-only" id="us-business" type="checkbox"/>
<div className="toggle-bg w-10 h-6 bg-slate-200 rounded-full transition-colors duration-200 ease-in-out border border-transparent"></div>
<div className="toggle-dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-sm transition-transform duration-200 ease-in-out"></div>
</label>
</div>

<button className="group relative w-full flex justify-center items-center py-3.5 px-4 mt-4 border border-slate-900 text-sm font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 focus:ring-offset-white transition-all duration-200 shadow-md tracking-wide" type="button">
<span>Book Demo</span>
<i className="ml-2 w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-xs text-center text-slate-400 mt-4">
                            By clicking "Book Demo", you agree to our Terms of Service.
                        </p>
</form>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 w-full z-0 overflow-hidden pointer-events-none pb-6 pt-12 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent">
<div className="animate-marquee whitespace-nowrap flex items-center">

<div className="flex items-center space-x-16 mx-8 opacity-40 grayscale">
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="triangle"></i><span className="text-lg font-bold font-heading text-slate-800">Acme Corp</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="hexagon"></i><span className="text-lg font-bold font-heading text-slate-800">Boltshift</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="circle"></i><span className="text-lg font-bold font-heading text-slate-800">Catalog</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="square"></i><span className="text-lg font-bold font-heading text-slate-800">Feather</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6" data-lucide="globe"></i><span className="text-lg font-bold font-heading text-slate-800">GlobalBank</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="box"></i><span className="text-lg font-bold font-heading text-slate-800">Sisyphus</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="layers"></i><span className="text-lg font-bold font-heading text-slate-800">Layers</span></div>
</div>

<div className="flex items-center space-x-16 mx-8 opacity-40 grayscale">
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="triangle"></i><span className="text-lg font-bold font-heading text-slate-800">Acme Corp</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="hexagon"></i><span className="text-lg font-bold font-heading text-slate-800">Boltshift</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="circle"></i><span className="text-lg font-bold font-heading text-slate-800">Catalog</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="square"></i><span className="text-lg font-bold font-heading text-slate-800">Feather</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6" data-lucide="globe"></i><span className="text-lg font-bold font-heading text-slate-800">GlobalBank</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="box"></i><span className="text-lg font-bold font-heading text-slate-800">Sisyphus</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="layers"></i><span className="text-lg font-bold font-heading text-slate-800">Layers</span></div>
</div>

<div className="flex items-center space-x-16 mx-8 opacity-40 grayscale">
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="triangle"></i><span className="text-lg font-bold font-heading text-slate-800">Acme Corp</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="hexagon"></i><span className="text-lg font-bold font-heading text-slate-800">Boltshift</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="circle"></i><span className="text-lg font-bold font-heading text-slate-800">Catalog</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="square"></i><span className="text-lg font-bold font-heading text-slate-800">Feather</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6" data-lucide="globe"></i><span className="text-lg font-bold font-heading text-slate-800">GlobalBank</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="box"></i><span className="text-lg font-bold font-heading text-slate-800">Sisyphus</span></div>
<div className="flex items-center space-x-2"><i className="w-6 h-6 fill-slate-800" data-lucide="layers"></i><span className="text-lg font-bold font-heading text-slate-800">Layers</span></div>
</div>
</div>
</div>


    </>
  );
}
