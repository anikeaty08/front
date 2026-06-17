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
      
<div className="relative w-full max-w-[1400px] h-[90vh] md:h-[850px] overflow-hidden bg-[#0a0a0a] border border-white/5 rounded-2xl shadow-[0_0_60px_-15px_rgba(0,194,255,0.05)] flex flex-col">
<div className="flex items-center justify-between border-b border-white/5 px-4 py-4 bg-transparent">
<div className="flex items-center gap-2.5">
<span className="h-3 w-3 rounded-full bg-neutral-800"></span>
<span className="h-3 w-3 rounded-full bg-neutral-800"></span>
<span className="h-3 w-3 rounded-full bg-neutral-800"></span>
</div>
<div className="flex items-center gap-6 text-neutral-500">
<i className="w-5 h-5 hover:text-white transition-colors cursor-pointer" data-lucide="bell" strokeWidth="1.5"></i>
<i className="w-5 h-5 hover:text-white transition-colors cursor-pointer" data-lucide="search" strokeWidth="1.5"></i>
<div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer pl-6 border-l border-white/5">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-base">Art on Steel</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
<aside className="hidden lg:flex lg:col-span-3 bg-[#050505]/50 border-r border-white/5 flex-col overflow-hidden">
<div className="p-6 border-b border-white/5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-[#111] px-3 py-2 text-base text-neutral-300">
<i className="w-4 h-4 text-sky-400" data-lucide="layers" strokeWidth="1.5"></i>
                            Emails in Sequence
                        </div>
<button className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="filter" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-2">
<div className="group relative p-4 rounded-xl bg-[#111] border border-white/10 shadow-[0_0_20px_-10px_rgba(0,194,255,0.1)] cursor-pointer">
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-sky-400" data-lucide="mail" strokeWidth="1.5"></i>
<div className="flex-1 min-w-0">
<h4 className="text-base text-white truncate">Thanks! Welcome to the Steel Art Revolution...</h4>
<div className="flex justify-between items-center mt-3">
<span className="text-sm text-neutral-500">44.7% Open</span>
<span className="text-base text-amber-400">R115.6K</span>
</div>
</div>
</div>
</div>
<div className="group relative p-4 rounded-xl hover:bg-[#111] border border-transparent hover:border-white/5 cursor-pointer transition-all">
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
<div className="flex-1 min-w-0">
<h4 className="text-base text-neutral-400 truncate group-hover:text-neutral-200 transition-colors">3 Reasons WHY PEOPLE Love Steel Art</h4>
<div className="flex justify-between items-center mt-3">
<span className="text-sm text-neutral-600">24.3% Open</span>
<span className="text-base text-neutral-500 group-hover:text-amber-400/70 transition-colors">R4.8K</span>
</div>
</div>
</div>
</div>
<div className="group relative p-4 rounded-xl hover:bg-[#111] border border-transparent hover:border-white/5 cursor-pointer transition-all">
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
<div className="flex-1 min-w-0">
<h4 className="text-base text-neutral-400 truncate group-hover:text-neutral-200 transition-colors">The Secret Process Of 'Art On Steel'</h4>
<div className="flex justify-between items-center mt-3">
<span className="text-sm text-neutral-600">21.5% Open</span>
<span className="text-base text-neutral-500 group-hover:text-amber-400/70 transition-colors">R3.1K</span>
</div>
</div>
</div>
</div>
<div className="group relative p-4 rounded-xl hover:bg-[#111] border border-transparent hover:border-white/5 cursor-pointer transition-all">
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
<div className="flex-1 min-w-0">
<h4 className="text-base text-neutral-400 truncate group-hover:text-neutral-200 transition-colors">Top 3 Unexpected Living Spaces That NEED Steel Art</h4>
<div className="flex justify-between items-center mt-3">
<span className="text-sm text-neutral-600">34.0% Open</span>
<span className="text-base text-neutral-500 group-hover:text-amber-400/70 transition-colors">R6.1K</span>
</div>
</div>
</div>
</div>
<div className="group relative p-4 rounded-xl hover:bg-[#111] border border-transparent hover:border-white/5 cursor-pointer transition-all">
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
<div className="flex-1 min-w-0">
<h4 className="text-base text-neutral-400 truncate group-hover:text-neutral-200 transition-colors">[Time Sensitive] A gift for you inside!</h4>
<div className="flex justify-between items-center mt-3">
<span className="text-sm text-neutral-600">43.8% Open</span>
<span className="text-base text-neutral-500 group-hover:text-amber-400/70 transition-colors">R20.6K</span>
</div>
</div>
</div>
</div>
</div>
</aside>
<main className="col-span-1 lg:col-span-6 flex flex-col overflow-hidden relative">
<header className="pt-10 px-10 pb-4 border-b border-white/5 bg-gradient-to-b from-[#111]/30 to-transparent">
<div className="flex items-start justify-between mb-8">
<div>
<div className="text-sm text-sky-500 mb-3 uppercase tracking-widest font-medium">Email Series</div>
<h1 className="text-3xl tracking-tight text-white flex items-center gap-4">
                                Welcome series - newsletter
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#111] text-neutral-400 border border-white/10">
                                    Paused
                                    <i className="w-4 h-4 ml-1.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</h1>
</div>
</div>
<div className="flex items-center gap-8 mt-10">
<button className="text-base text-sky-400 border-b-2 border-sky-400 pb-3 px-1 transition-colors">Dashboard</button>
<button className="text-base text-neutral-500 hover:text-neutral-300 transition-colors pb-3 px-1 border-b-2 border-transparent">People</button>
<button className="text-base text-neutral-500 hover:text-neutral-300 transition-colors pb-3 px-1 border-b-2 border-transparent">Emails</button>
<button className="text-base text-neutral-500 hover:text-neutral-300 transition-colors pb-3 px-1 border-b-2 border-transparent">Settings</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-10 space-y-10">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight text-white">Revenue Overview</h2>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/5 bg-[#111] hover:bg-[#151515] text-base text-neutral-300 transition-colors">
<i className="w-4 h-4 text-neutral-500" data-lucide="calendar" strokeWidth="1.5"></i>
                            Mar 18, 2021 — Nov 24, 2021
                            <i className="w-4 h-4 ml-1 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<div className="h-80 relative flex flex-col justify-end w-full mt-6 bg-[#0c0c0c] p-6 rounded-2xl border border-white/5">
<div className="absolute left-6 top-6 bottom-10 w-16 flex flex-col justify-between text-sm text-neutral-600">
<span>R10k</span>
<span>R7.5k</span>
<span>R5k</span>
<span>R2.5k</span>
<span>R0</span>
</div>
<div className="absolute left-24 right-6 top-6 bottom-10 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>
<div className="absolute right-6 top-6 flex items-center gap-6 text-base">
<div className="flex items-center gap-2 text-neutral-500">
<div className="w-2.5 h-2.5 bg-neutral-800 rounded-sm"></div>
                                Base Revenue
                            </div>
<div className="flex items-center gap-2 text-white">
<div className="w-2.5 h-2.5 bg-sky-500 rounded-sm shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                                Automated
                            </div>
</div>
<div className="absolute left-24 right-6 bottom-10 h-[calc(100%-64px)] flex items-end justify-between gap-1 md:gap-2">
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '15%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '25%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '35%'}}></div>
<div className="w-full bg-sky-500 rounded-t-sm z-10 shadow-[0_0_15px_rgba(14,165,233,0.3)]" style={{height: '55%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '20%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '45%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '30%'}}></div>
<div className="w-full bg-sky-500 rounded-t-sm z-10 shadow-[0_0_15px_rgba(14,165,233,0.3)]" style={{height: '75%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '40%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '60%'}}></div>
<div className="w-full bg-sky-500 rounded-t-sm z-10 shadow-[0_0_15px_rgba(14,165,233,0.3)]" style={{height: '90%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '50%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '35%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '45%'}}></div>
<div className="w-full bg-sky-500 rounded-t-sm z-10 shadow-[0_0_15px_rgba(14,165,233,0.3)]" style={{height: '65%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '25%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '40%'}}></div>
<div className="w-full bg-sky-500 rounded-t-sm z-10 shadow-[0_0_15px_rgba(14,165,233,0.3)]" style={{height: '80%'}}></div>
<div className="w-full bg-neutral-800 rounded-t-sm transition-all hover:bg-neutral-700" style={{height: '35%'}}></div>
</div>
<div className="absolute left-24 right-6 bottom-2 h-6 flex justify-between text-sm text-neutral-600 pt-2">
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
<span>Sep</span>
<span>Oct</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 pt-6">
<div className="flex flex-col items-start justify-center p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:bg-[#111] transition-colors relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-sm text-neutral-500 flex items-center gap-2 mb-3">
                                Total Revenue
                                <i className="w-4 h-4 text-neutral-600" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
<div className="text-4xl tracking-tight text-white">
                                R163,421
                            </div>
</div>
<div className="flex flex-col items-start justify-center p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:bg-[#111] transition-colors relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-sm text-neutral-500 flex items-center gap-2 mb-3">
                                Active People
                                <i className="w-4 h-4 text-neutral-600" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
<div className="text-4xl tracking-tight text-white">
                                2,263
                            </div>
</div>
<div className="flex flex-col items-start justify-center p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:bg-[#111] transition-colors relative overflow-hidden group">
<div className="text-sm text-neutral-500 flex items-center gap-2 mb-3">
                                Rev per Person
                                <i className="w-4 h-4 text-neutral-600" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
<div className="text-4xl tracking-tight text-white">
                                R72.21
                            </div>
</div>
<div className="flex flex-col items-start justify-center p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:bg-[#111] transition-colors relative overflow-hidden group">
<div className="text-sm text-neutral-500 flex items-center gap-2 mb-3">
                                Total Orders
                                <i className="w-4 h-4 text-neutral-600" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
<div className="text-4xl tracking-tight text-white">
                                127
                            </div>
</div>
<div className="flex flex-col items-start justify-center p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:bg-[#111] transition-colors relative overflow-hidden group">
<div className="text-sm text-neutral-500 flex items-center gap-2 mb-3">
                                Avg Order Value
                                <i className="w-4 h-4 text-neutral-600" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
<div className="text-4xl tracking-tight text-white">
                                R1,286
                            </div>
</div>
<div className="flex flex-col items-start justify-center p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:bg-[#111] transition-colors relative overflow-hidden group">
<div className="text-sm text-neutral-500 flex items-center gap-2 mb-3">
                                Time to Purchase
                                <i className="w-4 h-4 text-neutral-600" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
<div className="text-4xl tracking-tight text-white">
                                5d 11h
                            </div>
</div>
</div>
</div>
</main>
<aside className="hidden lg:flex lg:col-span-3 bg-[#050505]/50 border-l border-white/5 flex-col overflow-hidden">
<div className="p-6 border-b border-white/5">
<h2 className="text-base text-white flex items-center gap-3">
<i className="w-5 h-5 text-sky-400" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
                        Email Performance
                    </h2>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-10">
<div className="space-y-4">
<div className="text-sm text-neutral-500 uppercase tracking-widest font-medium">Selected Email</div>
<h3 className="text-2xl tracking-tight text-white leading-snug">Thanks! Welcome to the Steel Art Revolution...</h3>
<div className="text-sm text-sky-400 mt-2 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span> Active
                        </div>
</div>
<div className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-base text-neutral-400">Generated</span>
<span className="text-base text-amber-400">R115,693</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-base text-neutral-400">Orders</span>
<span className="text-base text-white">96</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-base text-neutral-400">Rev / Order</span>
<span className="text-base text-white">R1,205</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-base text-neutral-400">Sent</span>
<span className="text-base text-white">1,824</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-base text-neutral-400">Open Rate</span>
<div className="flex items-center gap-4">
<span className="text-base text-white">44.7%</span>
<div className="w-20 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-sky-500 rounded-full" style={{width: '44.7%'}}></div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-base text-neutral-400">Click Rate</span>
<div className="flex items-center gap-4">
<span className="text-base text-white">5.9%</span>
<div className="w-20 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-sky-600 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
</div>
</div>
<div className="space-y-4 pt-4">
<h4 className="text-sm text-neutral-500 uppercase tracking-widest font-medium mb-4">Quick Actions</h4>
<button className="w-full flex items-center justify-between px-5 py-3.5 bg-[#111] hover:bg-[#1a1a1a] border border-white/5 rounded-xl text-base text-white transition-all group">
<span className="flex items-center gap-3">
<i className="w-5 h-5 text-neutral-500 group-hover:text-sky-400 transition-colors" data-lucide="edit-2" strokeWidth="1.5"></i> 
                                Edit Content
                            </span>
<i className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full flex items-center justify-between px-5 py-3.5 bg-[#111] hover:bg-[#1a1a1a] border border-white/5 rounded-xl text-base text-white transition-all group">
<span className="flex items-center gap-3">
<i className="w-5 h-5 text-neutral-500 group-hover:text-sky-400 transition-colors" data-lucide="eye" strokeWidth="1.5"></i> 
                                Preview Email
                            </span>
<i className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</aside>
</div>
</div>


    </>
  );
}
