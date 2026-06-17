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
      

<nav className="w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-width="18"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">OptiMenu</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Features</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Integrations</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Customers</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm" href="#">
                        Start Trial
                    </a>
</div>
</div>
</div>
</nav>

<main className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="flex flex-col items-start max-w-2xl animate-fade-up">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        New: Smart Inventory Sync
                    </div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        One Dashboard to Manage All Your <span className="text-emerald-600">Delivery Menus</span>
</h1>

<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Update prices, availability, and dishes across UberEats, DoorDash, and others instantly. Reduce order errors and increase margins with a single click.
                    </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-200" href="#">
                            Get a Free Demo
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200" href="#">
<span className="iconify mr-2 text-slate-400" data-icon="lucide:play-circle" data-width="18"></span>
                            See How It Works
                        </a>
</div>

<div className="pt-8 border-t border-slate-200 w-full">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Trusted by modern kitchens</p>
<div className="flex flex-wrap gap-x-6 gap-y-3">
<div className="flex items-center gap-2 text-sm font-medium text-slate-600">
<div className="bg-emerald-100 text-emerald-600 p-0.5 rounded-full">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
                                Real-time Sync
                            </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-600">
<div className="bg-emerald-100 text-emerald-600 p-0.5 rounded-full">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
                                0% Commission
                            </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-600">
<div className="bg-emerald-100 text-emerald-600 p-0.5 rounded-full">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
                                Analytics Included
                            </div>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center animate-fade-up delay-200">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-3xl border border-slate-200/50 -rotate-3 scale-95 shadow-xl"></div>

<div className="relative w-72 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-900 rotate-0 z-10 transform transition-transform hover:-translate-y-1 duration-500">

<div className="bg-slate-50 h-full w-full rounded-[2rem] overflow-hidden flex flex-col relative">

<div className="h-6 w-full flex justify-between items-center px-6 pt-2">
<span className="text-[10px] font-medium text-slate-900">9:41</span>
<div className="flex gap-1">
<div className="w-10 h-3 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="px-5 pt-4 pb-4">
<div className="flex justify-between items-center mb-4">
<div>
<h3 className="text-sm font-semibold text-slate-900">Lunch Menu</h3>
<p className="text-[10px] text-slate-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Live on 4 platforms
                                        </p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
</div>
</div>

<div className="h-8 bg-white border border-slate-200 rounded-lg w-full mb-2 flex items-center px-3 gap-2">
<span className="iconify text-slate-400" data-icon="lucide:search" data-width="14"></span>
<div className="h-2 w-20 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4 space-y-3">

<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex gap-3 items-center">
<div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
<span className="iconify text-orange-500" data-icon="lucide:pizza" data-width="20"></span>
</div>
<div className="flex-1">
<div className="h-3 w-24 bg-slate-800 rounded-full mb-1.5"></div>
<div className="h-2 w-12 bg-emerald-100 rounded-full"></div>
</div>
<div className="text-right">
<span className="text-xs font-semibold text-slate-900">$18</span>
<div className="mt-1 w-8 h-4 bg-emerald-500 rounded-full relative ml-auto">
<div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex gap-3 items-center">
<div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
<span className="iconify text-red-500" data-icon="lucide:soup" data-width="20"></span>
</div>
<div className="flex-1">
<div className="h-3 w-20 bg-slate-800 rounded-full mb-1.5"></div>
<div className="h-2 w-12 bg-emerald-100 rounded-full"></div>
</div>
<div className="text-right">
<span className="text-xs font-semibold text-slate-900">$12</span>
<div className="mt-1 w-8 h-4 bg-emerald-500 rounded-full relative ml-auto">
<div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex gap-3 items-center opacity-60">
<div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
<span className="iconify text-yellow-600" data-icon="lucide:croissant" data-width="20"></span>
</div>
<div className="flex-1">
<div className="h-3 w-16 bg-slate-400 rounded-full mb-1.5"></div>
<div className="h-2 w-16 bg-slate-100 rounded-full"></div>
</div>
<div className="text-right">
<span className="text-xs font-semibold text-slate-400">$6</span>
<div className="mt-1 w-8 h-4 bg-slate-200 rounded-full relative ml-auto">
<div className="absolute left-0.5 top-0.5 h-3 w-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex gap-3 items-center">
<div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
<span className="iconify text-green-600" data-icon="lucide:salad" data-width="20"></span>
</div>
<div className="flex-1">
<div className="h-3 w-24 bg-slate-800 rounded-full mb-1.5"></div>
<div className="h-2 w-10 bg-emerald-100 rounded-full"></div>
</div>
<div className="text-right">
<span className="text-xs font-semibold text-slate-900">$14</span>
<div className="mt-1 w-8 h-4 bg-emerald-500 rounded-full relative ml-auto">
<div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="h-14 bg-white border-t border-slate-100 flex justify-around items-center px-2">
<div className="p-2 text-emerald-600"><span className="iconify" data-icon="lucide:home" data-width="20"></span></div>
<div className="p-2 text-slate-300"><span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span></div>
<div className="p-2 text-slate-300"><span className="iconify" data-icon="lucide:settings" data-width="20"></span></div>
</div>
</div>
</div>

<div className="absolute top-12 right-0 md:-right-8 bg-white p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-48 animate-fade-up delay-300 z-20">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Sync Complete</p>
<p className="text-[10px] text-slate-500">Just now</p>
</div>
</div>
<div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-50">

<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">U</div>
<div className="w-6 h-6 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">D</div>
<div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">G</div>
</div>
<span className="text-[10px] font-medium text-emerald-600">All Active</span>
</div>
</div>

<div className="absolute bottom-24 -left-4 md:left-4 bg-white p-3 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-3 animate-fade-up delay-300 z-20">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Orders Today</span>
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-slate-900">142</span>
<span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
<span className="iconify mr-0.5" data-icon="lucide:trending-up" data-width="10"></span>
                                    12%
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
