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
sans: ['Manrope', 'sans-serif'],
},
colors: {
indigo: {
500: '#6366f1', // Requested Accent
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      
<div className="flex flex-col lg:flex-row w-full min-h-screen">

<div className="w-full lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-between relative z-10 bg-white">

<nav className="flex items-center gap-12 mb-16 lg:mb-20">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
<iconify-icon height="20" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tighter text-slate-900">VAULTA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
<a className="hover:text-indigo-500 transition-colors" href="#">Product</a>
<a className="hover:text-indigo-500 transition-colors" href="#">Solutions</a>
<a className="hover:text-indigo-500 transition-colors" href="#">Pricing</a>
</div>
</nav>

<main className="max-w-xl">
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50 cursor-default">
<iconify-icon className="text-indigo-500 mr-2" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Financial Intelligence v2.0</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
                    Complete <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700">Financial Visibility</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md font-medium">
                    Streamline your revenue tracking. Monitor income, profit, and churn metrics in real-time with our unified dashboard.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="bg-indigo-500 text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2 group">
                        Start Free Trial
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</main>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 lg:mt-auto pt-10 border-t border-slate-100">

<div className="space-y-2 group cursor-default">
<div className="flex items-center gap-2 text-indigo-500 mb-1">
<iconify-icon height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
<span className="h-px w-8 bg-indigo-100 group-hover:bg-indigo-500 transition-colors"></span>
</div>
<h3 className="text-sm font-bold text-slate-900 tracking-tight">Revenue Sync</h3>
<p className="text-xs text-slate-400 font-medium">Real-time bank connection.</p>
</div>

<div className="space-y-2 group cursor-default">
<div className="flex items-center gap-2 text-indigo-500 mb-1">
<iconify-icon height="20" icon="solar:chart-2-linear" width="20"></iconify-icon>
<span className="h-px w-8 bg-indigo-100 group-hover:bg-indigo-500 transition-colors"></span>
</div>
<h3 className="text-sm font-bold text-slate-900 tracking-tight">Smart Analytics</h3>
<p className="text-xs text-slate-400 font-medium">Predictive profit trends.</p>
</div>

<div className="space-y-2 group cursor-default">
<div className="flex items-center gap-2 text-indigo-500 mb-1">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="h-px w-8 bg-indigo-100 group-hover:bg-indigo-500 transition-colors"></span>
</div>
<h3 className="text-sm font-bold text-slate-900 tracking-tight">Secure Vault</h3>
<p className="text-xs text-slate-400 font-medium">Bank-grade encryption.</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative bg-slate-50 overflow-hidden flex items-center justify-center min-h-[640px] lg:min-h-auto border-l border-slate-100">

<div className="absolute inset-0 bg-noise z-0 opacity-50"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl mix-blend-multiply filter pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply filter pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

<div className="relative w-full max-w-[420px] z-10 scale-[0.85] sm:scale-100 transition-transform duration-700 hover:scale-[1.01]">

<div className="glass-panel rounded-3xl p-6 shadow-2xl shadow-slate-200/50 relative z-20">
<div className="flex justify-between items-center mb-8">
<div>
<span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Net Cashflow</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold text-slate-900 tracking-tight">$124,592.00</span>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:course-up-linear"></iconify-icon>
                                    +12.5%
                                </span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</div>
</div>

<div className="relative h-40 w-full">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="indigoGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,45 C20,45 30,20 50,25 C70,30 80,10 100,5 V50 H0 Z" fill="url(#indigoGradient)"></path>
<path d="M0,45 C20,45 30,20 50,25 C70,30 80,10 100,5" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<line stroke="#e2e8f0" stroke-dasharray="2,2" strokeWidth="0.5" vector-effect="non-scaling-stroke" x1="0" x2="100" y1="25" y2="25"></line>
</svg>

<div className="flex justify-between mt-4 text-[10px] font-semibold text-slate-400">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>

<div className="absolute -top-12 -right-8 w-48 floating-card rounded-2xl p-4 border border-slate-100 z-30 animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-500">Active Users</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-bold text-slate-900 tracking-tight">2,845</span>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">+</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -left-6 w-56 floating-card rounded-2xl p-4 border border-slate-100 z-30">
<div className="flex justify-between items-start mb-2">
<div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:pie-chart-2-linear" width="22"></iconify-icon>
</div>
<span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-100">Q3 Report</span>
</div>
<div>
<p className="text-xs text-slate-400 font-semibold mb-0.5">Net Profit</p>
<p className="text-2xl font-bold text-slate-900 tracking-tight">$48,290</p>
</div>

<div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-indigo-500 h-full rounded-full w-[78%]"></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
