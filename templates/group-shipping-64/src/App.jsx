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
      

<main className="w-full max-w-[390px] h-[844px] bg-[#fafafc] rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-8 ring-slate-900 overflow-hidden relative flex flex-col">

<header className="bg-[#fafafc]/90 backdrop-blur-xl sticky top-0 z-20 border-b border-slate-200/60">

<div className="flex items-center justify-between px-6 pt-16 pb-4">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">My Box</h1>
<div className="flex items-center gap-3 text-slate-600">
<button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors active:scale-95">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full transition-colors active:scale-95">
<iconify-icon className="text-xl" icon="solar:filter-linear"></iconify-icon>
</button>
</div>
</div>

<div className="px-6 pb-4 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2 w-max">
<button className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-sm">All Orders</button>
<button className="bg-white text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide hover:bg-slate-50 transition-colors">Solo Orders</button>
<button className="bg-white text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide hover:bg-slate-50 transition-colors">Group Orders</button>
<button className="bg-white text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide hover:bg-slate-50 transition-colors">Delivered</button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-5 pb-32 space-y-6 bg-slate-50/50">

<article className="bg-white rounded-[24px] shadow-sm border border-slate-200/75 overflow-hidden flex flex-col hover:border-slate-300 transition-colors">

<div className="w-full h-36 relative bg-slate-100 overflow-hidden">
<img alt="Vince Camuto Fashion" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

<div className="absolute top-4 left-4">
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
<iconify-icon className="text-purple-600 text-sm" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-900 tracking-wide">Group Order</span>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="text-white">
<p className="text-xs font-normal opacity-80 mb-0.5">Estimated Arrival</p>
<p className="text-sm font-semibold tracking-tight">Feb 24 - Feb 26</p>
</div>
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-slate-800" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-6 h-6 rounded-full border border-slate-800" src="https://i.pravatar.cc/100?img=2"/>
<div className="w-6 h-6 rounded-full border border-slate-800 bg-slate-800/80 backdrop-blur flex items-center justify-center text-xs font-medium text-white">+2</div>
</div>
</div>
</div>

<div className="p-5 space-y-5">

<div className="flex items-start justify-between">
<div>
<h2 className="text-base font-semibold text-slate-900 tracking-tight">Vince Camuto</h2>
<p className="text-xs text-slate-500 font-normal mt-0.5">#519004628 <span className="mx-1">•</span> 4 Items</p>
</div>
<span className="text-sm font-semibold tracking-tight text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">44,790 FCFA</span>
</div>

<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-normal text-slate-500">Current Status</span>
<span className="text-xs font-medium text-purple-700 bg-purple-100/50 px-2.5 py-1 rounded-md">In Preparation</span>
</div>

<div className="relative flex items-center justify-between px-1">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-200 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[33%] h-[2px] bg-purple-600 rounded-full"></div>

<div className="relative z-10 w-5 h-5 rounded-full bg-purple-600 border-[3px] border-slate-50 flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>

<div className="relative z-10 w-5 h-5 rounded-full bg-white border-[2px] border-purple-600 flex items-center justify-center shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
</div>

<div className="relative z-10 w-5 h-5 rounded-full bg-white border-[2px] border-slate-200 flex items-center justify-center"></div>

<div className="relative z-10 w-5 h-5 rounded-full bg-white border-[2px] border-slate-200 flex items-center justify-center"></div>
</div>

<div className="flex justify-between mt-2.5 text-xs font-medium text-slate-400">
<span className="text-purple-600">Paid</span>
<span className="text-purple-600 -ml-2">Prep</span>
<span className="ml-1">Transit</span>
<span>Delivered</span>
</div>
</div>

<button className="w-full py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium transition-colors flex items-center justify-center gap-2 group shadow-sm">
                        View Order Details
                        <iconify-icon className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-600 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</article>

<article className="bg-white rounded-[24px] shadow-sm border border-slate-200/75 overflow-hidden flex flex-col hover:border-slate-300 transition-colors">

<div className="w-full h-36 relative bg-slate-100 overflow-hidden">
<img alt="Polo Ralph Lauren Menswear" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

<div className="absolute top-4 left-4">
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
<iconify-icon className="text-slate-700 text-sm" icon="solar:user-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-900 tracking-wide">Solo Order</span>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="text-white">
<p className="text-xs font-normal opacity-80 mb-0.5">Estimated Arrival</p>
<p className="text-sm font-semibold tracking-tight">Feb 18 - Feb 20</p>
</div>
</div>
</div>

<div className="p-5 space-y-5">

<div className="flex items-start justify-between">
<div>
<h2 className="text-base font-semibold text-slate-900 tracking-tight">Polo Ralph Lauren</h2>
<p className="text-xs text-slate-500 font-normal mt-0.5">#519003310 <span className="mx-1">•</span> 1 Item</p>
</div>
<span className="text-sm font-semibold tracking-tight text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">125,500 FCFA</span>
</div>

<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-normal text-slate-500">Current Status</span>
<span className="text-xs font-medium text-purple-700 bg-purple-100/50 px-2.5 py-1 rounded-md">In Transit</span>
</div>

<div className="relative flex items-center justify-between px-1">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-200 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[66%] h-[2px] bg-purple-600 rounded-full"></div>

<div className="relative z-10 w-5 h-5 rounded-full bg-purple-600 border-[3px] border-slate-50 flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>

<div className="relative z-10 w-5 h-5 rounded-full bg-purple-600 border-[3px] border-slate-50 flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>

<div className="relative z-10 w-5 h-5 rounded-full bg-white border-[2px] border-purple-600 flex items-center justify-center shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
</div>

<div className="relative z-10 w-5 h-5 rounded-full bg-white border-[2px] border-slate-200 flex items-center justify-center"></div>
</div>

<div className="flex justify-between mt-2.5 text-xs font-medium text-slate-400">
<span className="text-purple-600">Paid</span>
<span className="text-purple-600 -ml-2">Prep</span>
<span className="text-purple-600 ml-1">Transit</span>
<span>Delivered</span>
</div>
</div>

<button className="w-full py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium transition-colors flex items-center justify-center gap-2 group shadow-sm">
                        Track Live Location
                        <iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:routing-2-linear"></iconify-icon>
</button>
</div>
</article>
</div>

<nav className="absolute bottom-0 w-full bg-white/80 backdrop-blur-2xl border-t border-slate-200/50 pb-8 pt-4 px-8 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
<ul className="flex items-center justify-between">

<li>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors active:scale-95">
<iconify-icon className="text-[24px]" icon="solar:home-2-linear"></iconify-icon>
</button>
</li>

<li>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors active:scale-95">
<iconify-icon className="text-[24px]" icon="solar:users-group-rounded-linear"></iconify-icon>
</button>
</li>

<li>
<button className="flex flex-col items-center gap-1.5 text-purple-600 relative active:scale-95 transition-transform">
<iconify-icon className="text-[26px] drop-shadow-[0_2px_12px_rgba(147,51,234,0.4)]" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="w-1.5 h-1.5 rounded-full bg-purple-600 absolute -bottom-3 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></span>
</button>
</li>

<li>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors active:scale-95">
<iconify-icon className="text-[24px]" icon="solar:wallet-linear"></iconify-icon>
</button>
</li>
</ul>
</nav>
</main>

    </>
  );
}
