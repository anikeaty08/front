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
      

<div className="relative w-full max-w-md bg-[#F8F7FA] overflow-hidden sm:shadow-2xl sm:rounded-[40px] sm:my-8 flex flex-col h-[100dvh] sm:h-auto sm:min-h-[850px]">

<div className="absolute top-[-5%] left-[-10%] w-[350px] h-[350px] bg-purple-300/40 rounded-full mix-blend-multiply filter blur-[90px] pointer-events-none"></div>
<div className="absolute top-[30%] right-[-20%] w-[300px] h-[300px] bg-orange-200/40 rounded-full mix-blend-multiply filter blur-[90px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"></div>

<nav className="relative z-20 flex items-center justify-between p-5 pb-2">
<button className="w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-[0_4px_12px_rgb(0,0,0,0.03)] text-slate-700 transition-transform active:scale-95">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<span className="font-medium tracking-tighter text-lg text-slate-900">KOLI</span>
<button className="w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-[0_4px_12px_rgb(0,0,0,0.03)] text-slate-700 transition-transform active:scale-95">
<iconify-icon icon="solar:menu-dots-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</nav>

<div className="relative z-10 flex-1 overflow-y-auto px-5 pb-32 pt-2">

<div className="relative w-full group">
<img alt="Premium Headphones" className="w-full aspect-[4/5] object-cover rounded-[28px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] bg-white" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none"></div>
</div>

<div className="mt-7">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Sony WH-1000XM5</h1>
<p className="text-sm text-slate-500 mt-1.5 flex items-center gap-1.5">
<iconify-icon className="text-purple-500" icon="solar:verified-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Verified Authentic Cargo
                </p>
</div>

<div className="flex gap-4 mt-6">

<div className="flex-1 p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full pointer-events-none"></div>
<div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100/50">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-slate-500 mb-0.5">Estimated Price</span>
<span className="block text-base font-semibold text-slate-900 tracking-tight">245,000 <span className="text-xs font-medium text-slate-500 ml-0.5">FCFA</span></span>
</div>
</div>

<div className="flex-1 p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full pointer-events-none"></div>
<div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shadow-sm border border-orange-100/50">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-slate-500 mb-0.5">Cargo Weight</span>
<span className="block text-base font-semibold text-slate-900 tracking-tight">0.25 <span className="text-xs font-medium text-slate-500 ml-0.5">kg</span></span>
</div>
</div>
</div>

<div className="mt-8 flex flex-col gap-4">
<h2 className="text-xs font-medium text-slate-400 uppercase tracking-wider pl-1">Shipping Method</h2>

<div className="relative p-5 rounded-[24px] border border-purple-200/80 bg-gradient-to-b from-purple-50/80 to-white/90 backdrop-blur-md shadow-sm overflow-hidden cursor-pointer transition-all">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none"></div>
<div className="relative flex items-start justify-between">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-purple-600 shadow-[0_4px_12px_rgb(0,0,0,0.04)] border border-purple-50">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Group Buying</h3>
<p className="text-xs text-slate-500 mt-0.5">Save up to 20% on shipping</p>
</div>
</div>

<div className="w-5 h-5 rounded-full border-[6px] border-purple-500 bg-white shadow-sm mt-1"></div>
</div>

<div className="mt-5 relative z-10">
<div className="flex justify-between text-xs font-medium mb-2">
<span className="text-purple-700">3/5 Joined</span>
<span className="text-orange-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="12"></iconify-icon>
                                12h left
                            </span>
</div>
<div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden shadow-inner">
<div className="w-[60%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full relative">

<div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="relative p-5 rounded-[24px] border border-slate-200/80 bg-white/70 backdrop-blur-md cursor-pointer transition-all hover:bg-white/90">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 shadow-sm border border-slate-100">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Solo Order</h3>
<p className="text-xs text-slate-500 mt-0.5">Standard immediate processing</p>
</div>
</div>

<div className="w-5 h-5 rounded-full border border-slate-300 bg-slate-50 mt-1"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-5 pt-8 bg-gradient-to-t from-[#F8F7FA] via-[#F8F7FA]/95 to-transparent z-30">

<button className="w-full relative group rounded-[24px] overflow-hidden transition-transform active:scale-[0.98]">

<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 opacity-40 blur-xl transition-opacity group-hover:opacity-60"></div>

<div className="relative w-full py-4.5 px-6 bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 rounded-[24px] flex items-center justify-center gap-2.5 text-white shadow-[0_8px_20px_-6px_rgba(168,85,247,0.6)] border border-white/20">

<div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[24px] pointer-events-none"></div>
<span className="font-medium text-base tracking-wide z-10 py-0.5">Add to Cargo</span>
<iconify-icon className="z-10" icon="solar:cart-large-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</button>
</div>
</div>

    </>
  );
}
