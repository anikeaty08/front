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
      
<div className="max-w-[1600px] mx-auto p-6 lg:p-12 xl:p-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col space-y-10">

<div className="flex items-center space-x-3">
<div className="flex items-center space-x-2 bg-[#1A1A1A] border border-white/5 rounded-full px-3 py-1.5 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium tracking-widest text-slate-300">LIVE</span>
</div>
<span className="text-sm text-slate-500 font-medium">Monitoring 324,118 subscriptions</span>
</div>

<h1 className="text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95]">
<span className="text-[#F2EFE9]">See every <br/> subscription</span> <br/>
<span className="text-white">your company <br/> pays for.</span>
</h1>

<p className="text-xl lg:text-2xl font-normal leading-relaxed text-slate-400 max-w-xl">
                    Connect your finance stack, inboxes, and SSO once. Observ discovers every recurring charge, predicts renewals, and spots wasteful spend before it hits the card.
                </p>

<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="group flex items-center justify-center space-x-3 bg-[#FCD365] hover:bg-[#ebc358] text-black px-8 py-4 rounded-full transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
<span className="font-medium text-lg">Book a 20-minute demo</span>
</button>
<button className="flex items-center justify-center space-x-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full transition-all duration-300">
<div className="bg-slate-500 rounded-full p-0.5">
<i className="w-3 h-3 text-black stroke-[3]" data-lucide="check"></i>
</div>
<span className="font-medium text-lg">Start free trial</span>
</button>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Trusted by finance &amp; IT teams worldwide.</span>
<span className="text-sm text-slate-500">3,900+ renewals caught before auto-charge.</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 pt-6 border-t border-white/5">
<div className="flex items-center space-x-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Bank-grade security · SOC2 in progress</span>
</div>
<div className="hidden sm:block w-px h-4 bg-white/10"></div>
<span>Works with Stripe, NetSuite, Gmail, Okta, and more.</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">

<div className="col-span-1 sm:col-span-2 relative h-72 sm:h-80 rounded-[2rem] overflow-hidden mesh-gradient group">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="relative h-full flex flex-col justify-center px-8 sm:px-12">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#111] leading-[0.9]">
                            RENT<br/>
                            SOFTWARE<br/>
                            CLOUD<br/>
                            SAVINGS
                        </h2>
</div>
</div>

<div className="col-span-1 h-80 sm:h-96 rounded-[2rem] bg-[#0A0A0A] border border-white/5 overflow-hidden relative group">

<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none"></div>
<img alt="Smart Watch" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>

<div className="col-span-1 h-80 sm:h-96 rounded-[2rem] bg-[#111] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>

<div className="flex justify-between items-start z-10">
<span className="text-xs font-medium tracking-widest text-slate-400 uppercase">Growth Curve</span>
<div className="flex items-center space-x-1 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
<span className="text-xs font-medium text-emerald-400">+18.4%</span>
</div>
</div>

<div className="flex flex-col space-y-4 mt-4">
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Analytics</span>
<span className="text-white">$5,842</span>
</div>

<div className="flex items-end justify-between h-24 gap-1.5">
<div className="w-full bg-white/5 rounded-t-sm h-[30%] hover:bg-[#FCD365] transition-colors duration-300"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[50%] hover:bg-[#FCD365] transition-colors duration-300"></div>
<div className="w-full bg-[#FCD365] rounded-t-sm h-[70%] shadow-[0_0_15px_rgba(252,211,101,0.3)]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[45%] hover:bg-[#FCD365] transition-colors duration-300"></div>
<div className="w-full bg-[#FCD365] rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(252,211,101,0.3)]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[60%] hover:bg-[#FCD365] transition-colors duration-300"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[40%] hover:bg-[#FCD365] transition-colors duration-300"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[55%] hover:bg-[#FCD365] transition-colors duration-300"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[35%] hover:bg-[#FCD365] transition-colors duration-300"></div>
</div>
</div>

<div className="mt-4 z-10">
<h3 className="text-lg font-medium text-white mb-2">Optimize your financial growth.</h3>
<p className="text-sm text-slate-500 leading-relaxed">Understand where your money moves, and give finance a live strategy.</p>
</div>
</div>

<div className="col-span-1 sm:col-span-2 rounded-[2rem] bg-[#0E0E0E] border border-white/5 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">

<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-yellow-500/5 blur-[60px] rounded-full pointer-events-none"></div>
<div className="flex items-start gap-5 z-10">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FCD365] flex items-center justify-center text-black shadow-[0_0_20px_rgba(252,211,101,0.2)] hover:scale-105 transition-transform cursor-pointer">
<i className="w-5 h-5 fill-current ml-0.5 stroke-none" data-lucide="play"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Observ</h3>
<p className="text-base text-slate-500 max-w-xs">Make your money move like a system, not a spreadsheet.</p>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 z-10 w-full md:w-auto">
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-slate-300 bg-white/5 text-center hover:bg-white/10 transition cursor-default">Finance</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-slate-300 bg-white/5 text-center hover:bg-white/10 transition cursor-default">Insight</span>
<span className="px-4 py-2 rounded-full bg-[#FCD365] text-black text-xs font-semibold text-center shadow-lg shadow-yellow-500/20 cursor-default">Analytics</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-slate-300 bg-white/5 text-center hover:bg-white/10 transition cursor-default">Growth</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-slate-300 bg-white/5 text-center hover:bg-white/10 transition cursor-default sm:col-span-2 md:col-span-1">Data</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
