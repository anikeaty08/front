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
      

<div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col relative border border-slate-200/50">

<div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-br from-violet-100/40 via-transparent to-orange-100/30 pointer-events-none"></div>

<header className="flex items-center justify-between px-6 pt-8 pb-4 relative z-10">
<button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-sm">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center">
<h1 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight">Order Detail</h1>
<span className="inline-block mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full shadow-[0_2px_4px_rgba(16,185,129,0.05)]">
                    Group Goal Met!
                </span>
</div>
<div className="w-8"></div> 
</header>

<main className="flex-1 flex flex-col px-6 pb-2 overflow-y-auto relative z-10">

<div className="flex items-center gap-4 p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-8">
<div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center border border-slate-200/60 shadow-inner text-2xl text-slate-400 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
<iconify-icon className="relative z-10 drop-shadow-sm" icon="solar:bag-3-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h2 className="text-sm font-semibold text-slate-900 tracking-tight leading-none">Amina's Bag</h2>
<span className="inline-flex items-center gap-1.5 mt-0.5 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100/50 px-2 py-1 rounded-full w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.4)]"></span>
                        In Transit to Douala
                    </span>
</div>
</div>

<div className="mb-8 pl-1">

<div className="relative flex gap-4 pb-7">

<div className="absolute left-4 top-8 bottom-0 w-[2px] bg-emerald-500 -ml-[1px]"></div>

<div className="relative z-10 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white shadow-sm">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>

<div className="flex-1 pt-1.5">
<p className="font-medium text-sm text-slate-900">Paid by the group</p>
</div>
</div>

<div className="relative flex gap-4 pb-7">

<div className="absolute left-4 top-8 bottom-0 w-[2px] bg-emerald-500 -ml-[1px]"></div>

<div className="relative z-10 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white ring-4 ring-white shadow-sm">
<iconify-icon className="text-sm" icon="solar:cart-check-linear"></iconify-icon>
</div>

<div className="flex-1 pt-1">
<p className="font-semibold text-sm text-slate-900 tracking-tight">Goal Reached &amp; Purchased in China</p>

<div className="mt-2.5 bg-white p-3 rounded-xl border border-emerald-100 shadow-[0_2px_12px_rgba(16,185,129,0.04)] relative overflow-hidden">

<div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="flex justify-between text-xs mb-2 font-medium relative z-10">
<span className="text-emerald-700">Goal Completed</span>
<span className="text-emerald-700 font-semibold tracking-tight">5kg <span className="text-emerald-600/60 font-medium">/ 5kg</span></span>
</div>
<div className="w-full h-1.5 bg-emerald-50 rounded-full overflow-hidden shadow-inner relative z-10">
<div className="w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" style={{backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex gap-4 pb-7">

<div className="absolute left-4 top-8 bottom-0 w-[2px] bg-slate-100 -ml-[1px]"></div>

<div className="relative z-10 w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white ring-4 ring-white shadow-[0_0_0_4px_rgba(251,191,36,0.15)] animate-[pulse_2s_infinite]">
<iconify-icon className="text-sm" icon="solar:plain-linear"></iconify-icon>
</div>

<div className="flex-1 pt-1.5">
<p className="font-semibold text-sm text-slate-900 tracking-tight">Embarked on KOLI Flight N°42</p>
</div>
</div>

<div className="relative flex gap-4 pb-7">

<div className="absolute left-4 top-8 bottom-0 w-[2px] bg-slate-100 -ml-[1px]"></div>

<div className="relative z-10 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 ring-4 ring-white">
<iconify-icon className="text-sm" icon="solar:document-text-linear"></iconify-icon>
</div>

<div className="flex-1 pt-1.5">
<p className="font-medium text-sm text-slate-400">Customs clearance</p>
</div>
</div>

<div className="relative flex gap-4">

<div className="relative z-10 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 ring-4 ring-white">
<iconify-icon className="text-sm" icon="solar:home-smile-linear"></iconify-icon>
</div>

<div className="flex-1 pt-1.5">
<p className="font-medium text-sm text-slate-400">Ready for withdrawal</p>
</div>
</div>
</div>

<div className="flex flex-col gap-2.5 mb-2">

<div className="flex items-center justify-between px-4 py-3.5 bg-slate-50/80 rounded-2xl border border-slate-100">
<span className="text-sm font-medium text-slate-500">Order Number</span>
<span className="text-sm font-semibold text-slate-900 tracking-tight">#519004628</span>
</div>

<div className="flex items-center justify-between px-4 py-3.5 bg-white rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center text-violet-500">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600">Pickup Point</span>
</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">Akwa</span>
</div>

<div className="mt-1 flex items-start gap-2 px-4 py-3 bg-slate-50/50 rounded-xl border border-slate-100/80">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs font-medium text-slate-500 leading-relaxed">
                        QR Code will be generated upon arrival in Douala
                    </p>
</div>
</div>
</main>

<footer className="px-6 pb-8 pt-4 bg-white relative z-20 border-t border-slate-100/50 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.05)]">
<button className="w-full bg-white text-slate-700 border border-slate-200/80 font-medium text-sm py-3.5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]">
<iconify-icon className="text-lg text-slate-400" icon="solar:document-download-linear"></iconify-icon>
<span className="tracking-tight">Download Invoice</span>
</button>
</footer>
</div>

<style>
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
    </style>

    </>
  );
}
