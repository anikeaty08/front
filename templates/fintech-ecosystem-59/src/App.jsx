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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">

<div className="max-w-3xl mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                The Cikka Ecosystem
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                More than a payments app. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">A financial lifestyle.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 font-normal leading-relaxed max-w-2xl">
                Experience the power of the diagonal ecosystem. Where payments seamlessly flow into rewards and commerce.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="group glass-card rounded-3xl p-8 col-span-1 md:col-span-2 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-purple-400 shadow-lg shadow-purple-900/20">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl text-white font-medium mb-3 tracking-tight">Pay Bills via BBPS</h3>
<p className="text-lg text-slate-400 leading-relaxed">Unified platform for all your credit cards. Clear bills instantly.</p>
</div>
<div className="mt-8 relative z-10">
<div className="flex items-center gap-3 text-sm text-slate-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-purple-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Secure transactions</span>
</div>
</div>
</div>

<div className="glass-card rounded-3xl col-span-1 md:col-span-2 p-8 relative flex flex-col items-center justify-center text-center min-h-[360px] overflow-hidden border-purple-500/20">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border border-purple-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="w-48 h-48 border border-purple-500/20 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
<div className="relative z-10 bg-[#050505] rounded-full p-8 border border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
<h2 className="text-4xl font-medium text-white tracking-tight">CI</h2>
</div>
<div className="relative z-10 mt-6">
<h3 className="text-purple-400 font-medium tracking-widest text-sm uppercase mb-1">Points Engine</h3>
<p className="text-slate-400 text-lg">Powering the ecosystem</p>
</div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -z-0"></div>
</div>

<div className="group glass-card rounded-3xl p-8 col-span-1 md:col-span-2 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-purple-400 shadow-lg shadow-purple-900/20">
<svg className="lucide lucide-gift w-6 h-6" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<h3 className="text-2xl text-white font-medium mb-3 tracking-tight">Earn Instant Points</h3>
<p className="text-lg text-slate-400 leading-relaxed">Real value, no useless coupons. Points credited instantly.</p>
</div>
<div className="mt-8 relative z-10">
<div className="flex items-center gap-3 text-sm text-slate-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-purple-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>1:1 Redemption Value</span>
</div>
</div>
</div>

<div className="group glass-card rounded-3xl p-8 col-span-1 md:col-span-3 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
<div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-white">
<svg className="lucide lucide-shopping-bag w-7 h-7" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Redeem for Real Products</h3>
<p className="text-lg text-slate-400">Electronics, fashion, and more from top tier global brands directly within the app.</p>
</div>
<div className="md:ml-auto shrink-0">
<button className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-slate-700 flex items-center gap-2">
                        Browse Catalog <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="group glass-card rounded-3xl p-8 col-span-1 md:col-span-3 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
<div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-white">
<svg className="lucide lucide-layers w-7 h-7" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">65+ D2C Brands Integrated</h3>
<p className="text-lg text-slate-400">Shop directly. No redirects. A seamless commerce experience integrated with your rewards.</p>
</div>
</div>

<div className="glass-card rounded-3xl p-8 col-span-1 md:col-span-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-purple-900/5 border-purple-500/10">
<div className="flex items-start gap-4">
<div className="mt-1 text-purple-400">
<svg className="lucide lucide-shield-check w-8 h-8" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Zero-cost, instant, secure</h3>
<p className="text-lg text-slate-400">Bank-grade security standards protecting your financial lifestyle.</p>
</div>
</div>
<div className="flex hover:grayscale-0 transition-all duration-500 opacity-50 grayscale gap-x-4 gap-y-4">

<div className="h-8 w-12 bg-white/10 rounded"></div>
<div className="h-8 w-12 bg-white/10 rounded"></div>
<div className="h-8 w-12 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
