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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-float opacity-60"></div>
<div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[80px] animate-float animation-delay-2000 opacity-60"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-float animation-delay-4000 opacity-60"></div>
</div>

<div className="w-full h-[100dvh] rounded-none border-none mx-0 sm:max-w-[400px] bg-white sm:rounded-[40px] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden relative sm:border border-slate-100/80 flex flex-col z-10 sm:mx-4 sm:h-[850px] sm:max-h-[90vh]">

<div className="flex justify-between items-center p-5 absolute top-0 w-full z-20 bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm">
<button className="w-10 h-10 rounded-full bg-white/80 border border-slate-100 flex items-center justify-center shadow-sm text-slate-700 transition-transform active:scale-95">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="font-semibold tracking-tighter text-slate-900 text-base">KOLI</div>
<button className="w-10 h-10 rounded-full bg-white/80 border border-slate-100 flex items-center justify-center shadow-sm text-slate-700 transition-transform active:scale-95">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>

<div className="overflow-y-auto hide-scrollbar flex-1 pb-10 sm:pb-8">

<div className="px-4 pt-20 pb-2">
<div className="relative w-full aspect-square sm:rounded-[32px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] bg-slate-50 border border-slate-100/50">
<img alt="Sony Headphones" className="w-full h-full object-cover mix-blend-darken hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="px-6 mt-4 flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-2">
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600 shadow-sm">
<span className="text-yellow-500 leading-none">⭐</span>
<span>4.7/5 globally on Shein</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50/80 border border-purple-100/80 rounded-full text-xs font-medium text-purple-700 shadow-sm">
<iconify-icon className="text-sm" icon="solar:shield-check-linear"></iconify-icon>
<span>Verified by Koli</span>
</div>
</div>
<h1 className="text-2xl font-semibold tracking-tight leading-tight text-slate-900 mt-1">Sony WH-1000XM5 Wireless Noise Canceling</h1>
</div>

<div className="mx-6 mt-6 p-5 rounded-[24px] bg-slate-50 border border-slate-100 shadow-sm relative overflow-hidden">

<div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-slate-200/50 to-transparent rounded-full blur-xl pointer-events-none"></div>
<div className="text-xs font-medium text-slate-500 mb-1 tracking-wide uppercase">Koli Price</div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">245,000 FCFA</div>
<div className="mt-2.5 flex items-start gap-2 text-slate-500">
<iconify-icon className="text-sm shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs leading-relaxed">Margin &amp; Cargo incl. Estimated Freight calculated in cart.</p>
</div>
</div>

<div className="px-6 mt-8 flex flex-col gap-6">

<div>
<div className="flex justify-between items-end mb-3">
<span className="text-sm font-medium text-slate-900">Color</span>
<span className="text-xs text-slate-500 font-medium">Matte Black</span>
</div>
<div className="flex gap-3">

<button className="w-[52px] h-[52px] rounded-[16px] border-2 border-slate-900 p-[3px] flex items-center justify-center transition-all">
<div className="w-full h-full rounded-[10px] bg-[#2A2A2A] shadow-inner"></div>
</button>

<button className="w-[52px] h-[52px] rounded-[16px] border border-slate-200 p-[3px] flex items-center justify-center hover:border-slate-300 transition-all">
<div className="w-full h-full rounded-[10px] bg-[#E5E5E5] shadow-inner"></div>
</button>
<button className="w-[52px] h-[52px] rounded-[16px] border border-slate-200 p-[3px] flex items-center justify-center hover:border-slate-300 transition-all">
<div className="w-full h-full rounded-[10px] bg-[#1A2E44] shadow-inner"></div>
</button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-3">
<span className="text-sm font-medium text-slate-900">Size</span>
<button className="text-xs text-slate-400 font-medium hover:text-slate-600 transition-colors">Size Guide</button>
</div>
<div className="flex gap-3">
<button className="flex-1 py-3 px-4 rounded-[16px] border-2 border-slate-900 text-sm font-medium text-slate-900 bg-white transition-all">
                            Standard
                        </button>
<button className="flex-1 py-3 px-4 rounded-[16px] border border-slate-200 text-sm font-medium text-slate-500 bg-slate-50 hover:bg-slate-100 transition-all">
                            Pro Fit
                        </button>
</div>
</div>
</div>

<div className="px-6 mt-8 flex flex-col gap-3">

<button className="relative w-full rounded-[20px] bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 text-white p-[1px] shadow-[0_8px_30px_-8px_rgba(168,85,247,0.5)] overflow-hidden group transition-transform active:scale-[0.98]">
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-full h-full rounded-[19px] bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center py-4 px-4 gap-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
<span className="font-semibold text-base tracking-tight drop-shadow-sm">🔥 Create a Group (-30%)</span>
</div>
</button>

<button className="w-full rounded-[20px] border border-slate-200 bg-white py-4 px-4 flex items-center justify-center gap-2.5 text-slate-700 shadow-sm hover:bg-slate-50 transition-colors active:scale-[0.98]">
<span className="text-base leading-none">🛒</span>
<span className="font-medium text-sm">Add to solo cart</span>
</button>
</div>

<div className="mx-6 mt-8 p-4 rounded-[20px] bg-slate-50/80 border border-slate-100 flex flex-col gap-4">
<div className="flex items-center gap-3 text-slate-600">
<div className="w-9 h-9 shrink-0 rounded-[12px] bg-white flex items-center justify-center shadow-sm border border-slate-100/80">
<span className="text-base leading-none">✈️</span>
</div>
<span className="text-xs font-medium">Estimated 10-15 days delivery</span>
</div>
<div className="h-px w-full bg-slate-200/60"></div>
<div className="flex items-center gap-3 text-slate-600">
<div className="w-9 h-9 shrink-0 rounded-[12px] bg-white flex items-center justify-center shadow-sm border border-slate-100/80">
<iconify-icon className="text-slate-500" icon="solar:lock-password-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-slate-500">Secure payment by</span>
<div className="flex gap-1.5 flex-wrap">
<div className="bg-yellow-100/80 border border-yellow-200/50 text-yellow-700 text-xs font-semibold tracking-tight px-2 py-0.5 rounded-md uppercase">MoMo</div>
<div className="bg-orange-100/80 border border-orange-200/50 text-orange-700 text-xs font-semibold tracking-tight px-2 py-0.5 rounded-md uppercase">OM</div>
<div className="bg-blue-100/80 border border-blue-200/50 text-blue-700 text-xs font-semibold tracking-tight px-2 py-0.5 rounded-md uppercase">Wave</div>
</div>
</div>
</div>
</div>

<div className="mt-10 mb-2">
<div className="px-6 flex justify-between items-end mb-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">KOLI Trends</h2>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">See all</button>
</div>
<div className="flex overflow-x-auto gap-4 px-6 snap-x hide-scrollbar pb-6 pt-2">

<div className="min-w-[150px] snap-start flex flex-col gap-3 group cursor-pointer">
<div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 relative shadow-sm border border-slate-100/50">
<img alt="Nike Shoes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-slate-900 truncate">Nike Air Max 270</h3>
<p className="text-xs text-slate-500 mt-1 font-medium">85,000 FCFA</p>
</div>
</div>

<div className="min-w-[150px] snap-start flex flex-col gap-3 group cursor-pointer">
<div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 relative shadow-sm border border-slate-100/50">
<img alt="Apple Watch" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-slate-900 truncate">Apple Watch Series 8</h3>
<p className="text-xs text-slate-500 mt-1 font-medium">210,000 FCFA</p>
</div>
</div>

<div className="min-w-[150px] snap-start flex flex-col gap-3 group cursor-pointer pr-6">
<div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 relative shadow-sm border border-slate-100/50">
<img alt="Leather Bag" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="px-1">
<h3 className="text-sm font-medium text-slate-900 truncate">Minimal Handbag</h3>
<p className="text-xs text-slate-500 mt-1 font-medium">45,000 FCFA</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
