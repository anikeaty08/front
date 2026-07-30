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
      
<div className="flex flex-col md:flex-row gap-8">

<div className="custom-shadow bg-white rounded-2xl p-6 w-[330px] flex items-center gap-4 fade-in">

<div>
<img alt="Yoshi the Scottish Fold Cat" className="w-20 h-20 rounded-full object-cover bg-slate-100 border-4 border-slate-100" src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=128&q=80&facepad=2" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div>
<h1 className="text-lg font-semibold text-slate-900 heading-tight mb-0.5">Yoshi</h1>
<p className="text-slate-500 text-sm">Scottish fold</p>
</div>
<div className="flex items-center bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-xs font-medium ml-2">
<svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16"><path d="M8 12V4m0 0L4.5 7.5M8 4l3.5 3.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>+1.1%</span>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="bg-slate-100 text-slate-800 text-xs font-medium rounded-full px-3 py-0.5">1 month</span>
<span className="bg-slate-100 text-slate-800 text-xs font-medium rounded-full px-3 py-0.5">861g</span>
<span className="bg-blue-100 text-blue-600 text-xs font-medium rounded-full px-3 py-0.5">Male</span>
</div>
</div>
</div>

<div className="custom-shadow bg-white rounded-2xl p-6 w-[330px] flex items-center gap-4 fade-in">

<div>
<img alt="Mochi the Shiba Inu" className="w-20 h-20 rounded-full object-cover bg-slate-100 border-4 border-slate-100" src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=128&q=80&facepad=2" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div>
<h1 className="text-lg font-semibold text-slate-900 heading-tight mb-0.5">Mochi</h1>
<p className="text-slate-500 text-sm">Shiba Inu</p>
</div>
<div className="flex items-center bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-xs font-medium ml-2">
<svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16"><path d="M8 12V4m0 0L4.5 7.5M8 4l3.5 3.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>+0.8%</span>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="bg-slate-100 text-slate-800 text-xs font-medium rounded-full px-3 py-0.5">2 months</span>
<span className="bg-slate-100 text-slate-800 text-xs font-medium rounded-full px-3 py-0.5">3.2kg</span>
<span className="bg-orange-100 text-orange-600 text-xs font-medium rounded-full px-3 py-0.5">Male</span>
</div>
</div>
</div>

<div className="custom-shadow bg-white rounded-2xl p-6 w-[330px] flex items-center gap-4 fade-in">

<div>
<img alt="Nori the Cockatiel" className="w-20 h-20 rounded-full object-cover bg-slate-100 border-4 border-slate-100" src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=facearea&w=128&q=80&facepad=2" />
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div>
<h1 className="text-lg font-semibold text-slate-900 heading-tight mb-0.5">Nori</h1>
<p className="text-slate-500 text-sm">Cockatiel</p>
</div>
<div className="flex items-center bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-xs font-medium ml-2">
<svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16"><path d="M8 12V4m0 0L4.5 7.5M8 4l3.5 3.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>+0.4%</span>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="bg-slate-100 text-slate-800 text-xs font-medium rounded-full px-3 py-0.5">5 months</span>
<span className="bg-slate-100 text-slate-800 text-xs font-medium rounded-full px-3 py-0.5">93g</span>
<span className="bg-pink-100 text-pink-600 text-xs font-medium rounded-full px-3 py-0.5">Female</span>
</div>
</div>
</div>
</div>

    </>
  );
}
