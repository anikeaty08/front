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
      

<header className="fixed top-0 left-0 w-full z-50 px-6 py-6 lg:px-12 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto flex items-center gap-2">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">NEXUS</span>
</div>
<nav className="hidden md:flex gap-8 pointer-events-auto bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/60 shadow-sm">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Product</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Developers</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Company</a>
</nav>
<div className="pointer-events-auto">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Log in</button>
</div>
</header>

<main className="flex-grow grid lg:grid-cols-2 w-full min-h-screen relative">

<div className="relative flex flex-col justify-center px-6 pt-24 pb-12 lg:px-24 lg:pt-0 z-10">
<div className="max-w-xl mx-auto lg:mx-0">

<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-slate-200 bg-white shadow-sm mb-8 animate-word" style={{animationDelay: '0s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">v2.0 is now live</span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
<span className="inline-block animate-word" style={{animationDelay: '0.1s'}}>Financial</span>
<span className="inline-block animate-word" style={{animationDelay: '0.2s'}}>infrastructure</span>
<span className="inline-block animate-word" style={{animationDelay: '0.3s'}}>for</span>
<span className="inline-block animate-word" style={{animationDelay: '0.4s'}}>the</span>
<span className="inline-block animate-word text-slate-400" style={{animationDelay: '0.5s'}}>internet</span>
<span className="inline-block animate-word text-slate-400" style={{animationDelay: '0.6s'}}>economy.</span>
</h1>

<p className="text-base text-slate-500 leading-relaxed mb-10 max-w-md animate-word" style={{animationDelay: '0.8s'}}>
                    Millions of companies of all sizes—from startups to Fortune 500s—use Nexus software and APIs to accept payments, send payouts, and manage their businesses online.
                </p>

<div className="flex flex-col sm:flex-row gap-3 animate-word" style={{animationDelay: '1s'}}>
<button className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-blue-200">
                        Start now
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm">
<i className="w-4 h-4 text-slate-400" data-lucide="message-square" strokeWidth="1.5"></i>
                        Contact sales
                    </button>
</div>

<div className="mt-16 pt-8 border-t border-slate-100 animate-word" style={{animationDelay: '1.2s'}}>
<p className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">Trusted by industry leaders</p>
<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1.5">
<div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
<span className="text-sm font-bold tracking-tight text-slate-800">Acme</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full border-2 border-slate-800"></div>
<span className="text-sm font-bold tracking-tight text-slate-800">Global</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-slate-800 border-r-[8px] border-r-transparent"></div>
<span className="text-sm font-bold tracking-tight text-slate-800">Vertex</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative hidden lg:flex items-center justify-center bg-white border-l border-slate-100 overflow-hidden mesh-gradient">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

<div className="relative w-[420px] bg-white rounded-xl shadow-2xl shadow-slate-200/50 border border-slate-200/60 p-6 z-10 animate-word" style={{animationDelay: '1.4s', transformOrigin: 'center center'}}>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Revenue</div>
<div className="text-xs text-slate-500">Last 30 days</div>
</div>
</div>
<button className="p-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
<i className="w-4 h-4 text-slate-400" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>

<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$24,500.00</span>
<span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12.5%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full mt-4 overflow-hidden">
<div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
</div>
</div>

<div className="space-y-4">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-slate-900">Pro Subscription</div>
<div className="text-[10px] text-slate-500">Just now</div>
</div>
</div>
<span className="text-xs font-medium text-slate-900">+$49.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="user-plus" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-slate-900">New User seat</div>
<div className="text-[10px] text-slate-500">2 min ago</div>
</div>
</div>
<span className="text-xs font-medium text-slate-900">+$12.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-slate-900">Withdrawal</div>
<div className="text-[10px] text-slate-500">1 hour ago</div>
</div>
</div>
<span className="text-xs font-medium text-slate-400">-$2,400.00</span>
</div>
</div>

<div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
</div>

<div className="absolute bottom-24 right-24 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-slate-100 w-48 animate-word" style={{animationDelay: '1.6s'}}>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Growth</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div className="flex gap-1 h-8 items-end">
<div className="w-1/5 bg-blue-100 rounded-sm h-[40%]"></div>
<div className="w-1/5 bg-blue-200 rounded-sm h-[60%]"></div>
<div className="w-1/5 bg-blue-300 rounded-sm h-[50%]"></div>
<div className="w-1/5 bg-blue-400 rounded-sm h-[80%]"></div>
<div className="w-1/5 bg-blue-500 rounded-sm h-[100%]"></div>
</div>
</div>
</div>
</main>


    </>
  );
}
