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
      

<header className="flex justify-between items-center px-6 pt-12 pb-4 bg-[#F8F9FB] z-10 shrink-0">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.08)] border border-slate-100/80 text-slate-700 transition-transform active:scale-95">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<h1 className="text-base font-semibold tracking-tight absolute left-1/2 -translate-x-1/2 text-slate-800">Order Details</h1>
<div className="bg-white/60 px-2.5 py-1.5 rounded-lg border border-slate-200/50 backdrop-blur-sm">
<span className="text-xs font-medium text-slate-600 tracking-tight">Order #519004628</span>
</div>
</header>

<main className="flex-1 overflow-y-auto px-6 pb-32 space-y-6 scroll-smooth" style={{scrollbarWidth: 'none'}}>

<section className="bg-white rounded-[15px] p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] border border-slate-100/60">
<div className="flex justify-between items-start pb-4 border-b border-slate-50">
<div>
<p className="text-xs text-slate-400 font-medium mb-1">Order Date</p>
<p className="text-sm font-medium text-slate-800">Feb 20, 2024</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 font-medium mb-1">Estimated Arrival</p>
<p className="text-sm font-medium text-slate-800">Feb 24 - Feb 26</p>
</div>
</div>
<div className="flex items-center justify-between pt-4">
<span className="text-sm font-medium text-slate-500">Group Members</span>
<div className="flex -space-x-2.5">
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-20" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center shadow-sm relative z-0">
<span className="text-xs font-medium text-slate-500">+1</span>
</div>
</div>
</div>
</section>

<section className="space-y-4">

<div className="bg-white rounded-[15px] p-4 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] border border-slate-100/60 transition-colors hover:border-violet-100">

<div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-50/80">
<img alt="Amina" className="w-7 h-7 rounded-full object-cover border border-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-sm font-medium text-slate-700">Amina 👑</span>
</div>

<div className="flex gap-4">
<div className="w-20 h-20 shrink-0 rounded-[12px] bg-slate-50 border border-slate-100 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center flex-1 py-0.5">
<h3 className="text-base font-medium text-slate-800 mb-1 leading-snug tracking-tight">Vince Camuto Shirt</h3>
<p className="text-xs text-slate-400 font-medium mb-auto">Size: FR 38 / M • White</p>
<p className="text-sm font-semibold text-[#7C3AED] mt-2 tracking-tight">12,500 FCFA</p>
</div>
</div>
</div>

<div className="bg-white rounded-[15px] p-4 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] border border-slate-100/60 transition-colors hover:border-violet-100">

<div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-50/80">
<img alt="David" className="w-7 h-7 rounded-full object-cover border border-slate-100" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="text-sm font-medium text-slate-700">David</span>
</div>

<div className="flex gap-4">
<div className="w-20 h-20 shrink-0 rounded-[12px] bg-slate-50 border border-slate-100 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center flex-1 py-0.5">
<h3 className="text-base font-medium text-slate-800 mb-1 leading-snug tracking-tight">Leather Crossbody</h3>
<p className="text-xs text-slate-400 font-medium mb-auto">One Size • Camel Brown</p>
<p className="text-sm font-semibold text-[#7C3AED] mt-2 tracking-tight">32,290 FCFA</p>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-[15px] p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] border border-slate-100/60 mt-2">
<div className="space-y-3.5 pb-4 border-b border-slate-100/80 text-sm">
<div className="flex justify-between items-center text-slate-500">
<span>Subtotal <span className="text-xs text-slate-400 ml-1">(4 Items)</span></span>
<span className="font-medium text-slate-800">44,790 FCFA</span>
</div>
<div className="flex justify-between items-center text-slate-500">
<span>Estimated Shipping</span>
<span className="font-medium text-slate-800">5,000 FCFA</span>
</div>
<div className="flex justify-between items-center text-emerald-500">
<span>Group Discount</span>
<span className="font-medium bg-emerald-50 px-2 py-0.5 rounded-md">-1,500 FCFA</span>
</div>
</div>
<div className="flex justify-between items-end pt-4">
<span className="text-sm text-slate-500 font-medium mb-1">Grand Total</span>
<span className="text-xl font-semibold text-[#7C3AED] tracking-tight">48,290 FCFA</span>
</div>
</section>

<button className="w-full mt-2 bg-[#EA580C] hover:bg-[#d94a08] text-white py-4 rounded-[14px] text-sm font-medium shadow-[0_8px_20px_-6px_rgba(234,88,12,0.3)] transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]">
<iconify-icon icon="solar:document-download-linear" strokeWidth="1.5" width="20"></iconify-icon>
            Download Group Invoice
        </button>
</main>

<nav className="absolute bottom-0 w-full bg-white border-t border-slate-100/80 px-6 pt-3 pb-8 flex justify-between items-center z-20 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.05)] backdrop-blur-md bg-white/95">
<button className="flex flex-col items-center justify-center w-12 h-12 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center justify-center w-12 h-12 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center justify-center w-12 h-12 text-[#7C3AED] relative transition-colors">
<div className="absolute top-1 w-1 h-1 bg-[#7C3AED] rounded-full"></div>
<iconify-icon className="mt-1" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center justify-center w-12 h-12 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

    </>
  );
}
