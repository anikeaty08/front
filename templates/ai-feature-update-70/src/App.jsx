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
      

<header className="h-16 border-b flex items-center justify-between px-6 shrink-0 z-20 bg-white border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-900 text-white">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-gray-900">
          CONCETTO AI Render
        </span>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Documentation
        </button>
<button className="text-sm font-medium px-4 py-2 rounded-lg transition-colors bg-gray-900 hover:bg-gray-800 text-white">
          Log In
        </button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">



<main className="flex-1 overflow-y-auto bg-gray-50/50 relative">
<div className="sm:p-10 max-w-6xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">


<div className="w-full rounded-2xl border p-8 sm:p-12 mb-12 relative overflow-hidden group bg-blue-50/80 border-blue-100">

<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 bg-blue-100"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 shadow-sm bg-white border-blue-100 text-blue-600">
<svg className="lucide lucide-globe-lock w-3 h-3" data-lucide="globe-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"></path><path d="M2 12h8.5"></path><path d="M20 6V4a2 2 0 1 0-4 0v2"></path><rect height="5" rx="1" width="8" x="14" y="6"></rect></svg>
                  Feature Unavailable Globally
                </div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-gray-900">
                  Regional Feature Limitation
                </h1>
<p className="text-lg leading-relaxed max-w-2xl mb-6 text-gray-600">
                  The
                  <span className="font-semibold text-blue-900">
                    Nano Banana Model
                  </span>
                  and specific regional styling tools are currently
                  <span className="text-red-500 font-medium">
                    not supported in the international version
                  </span>
                  . We are optimizing these engines for global deployment.
                </p>
<div className="flex flex-wrap gap-4">
<button className="px-5 py-2.5 border rounded-lg text-sm font-medium transition-all shadow-sm bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600">
                    Notify Me When Available
                  </button>
<a className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200" href="#global-standard">
                    Use CONCETTO Global Version
                    <svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>

<div className="hidden md:flex items-center justify-center shrink-0 w-32 h-32 rounded-2xl border shadow-sm opacity-80 bg-white border-blue-100">
<i className="w-12 h-12 text-blue-200" data-lucide="map-off" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="border-t pt-10 border-gray-200" id="global-standard">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-xl font-semibold tracking-tight mb-2 text-gray-900">
                  CONCETTO Global Version
                </h2>
<p className="text-sm text-gray-500 max-w-lg">
                  While specific regional models are unavailable, our core
                  engine supports all international architectural workflows with
                  high precision.
                </p>
</div>
<div className="flex gap-2 text-xs font-medium text-gray-500 border px-3 py-1.5 rounded-md shadow-sm bg-white border-gray-200">
<span className="w-2 h-2 rounded-full bg-purple-500 mt-1"></span>
                Operational Worldwide
              </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="p-5 rounded-xl border hover:shadow-md transition-all group cursor-default bg-white border-gray-200 hover:border-blue-300">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform bg-blue-50 text-blue-600">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-sm font-semibold mb-1 text-gray-900">
                  Standard Templates
                </h3>
<p className="text-xs text-gray-500 leading-relaxed">
                  Access pre-configured rendering setups for commercial and
                  residential domains compliant with global ISO standards.
                </p>
</div>

<div className="p-5 rounded-xl border hover:shadow-md transition-all group cursor-default bg-white border-gray-200 hover:border-blue-300">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform bg-pink-50 text-pink-600">
<svg className="lucide lucide-wand-2 w-5 h-5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-sm font-semibold mb-1 text-gray-900">
                  Global Prompting
                </h3>
<p className="text-xs text-gray-500 leading-relaxed">
                  Universal architectural terminology translation. No regional
                  dialect processing required for high-fidelity output.
                </p>
</div>

<div className="p-5 rounded-xl border hover:shadow-md transition-all group cursor-default bg-white border-gray-200 hover:border-blue-300">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform bg-purple-50 text-purple-600">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-sm font-semibold mb-1 text-gray-900">
                  Structure Integrity
                </h3>
<p className="text-xs text-gray-500 leading-relaxed">
                  Algorithms designed to prioritize structural logic over
                  stylistic flair, ensuring buildable design visualizations.
                </p>
</div>
</div>

<div className="mt-10 mb-8">
<h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-400">
                Standard Workflow Available
              </h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="flex flex-col items-center text-center gap-3">
<div className="w-full aspect-square rounded-lg border shadow-sm flex items-center justify-center overflow-hidden p-2 group bg-white border-gray-200">
<div className="w-full h-full rounded border flex items-center justify-center group-hover:bg-gray-100 transition-colors bg-gray-50 border-gray-100">
<svg className="lucide lucide-upload-cloud w-6 h-6 text-gray-400" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
</div>
<span className="text-xs font-medium text-gray-600">
                    1. Upload Base
                  </span>
</div>

<div className="flex flex-col items-center text-center gap-3">
<div className="w-full aspect-square rounded-lg border shadow-sm flex items-center justify-center overflow-hidden p-2 group bg-white border-gray-200">
<img alt="Reference" className="w-full h-full object-cover rounded opacity-80" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-gray-600">
                    2. Define Style
                  </span>
</div>

<div className="flex flex-col items-center text-center gap-3 relative">
<div className="w-full aspect-square rounded-lg border shadow-lg flex items-center justify-center overflow-hidden p-4 relative bg-gray-900 border-gray-800">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-pink-500/20"></div>
<span className="text-[10px] text-center leading-tight text-white">
                      Processing Global Engine...
                    </span>
</div>
<span className="text-xs font-medium text-gray-600">
                    3. Processing
                  </span>
</div>

<div className="flex flex-col items-center text-center gap-3">
<div className="w-full aspect-square rounded-lg border shadow-sm flex items-center justify-center overflow-hidden p-2 bg-white border-gray-200">
<img alt="Result" className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-gray-600">
                    4. Final Render
                  </span>
</div>
</div>
</div>
</div>
<footer className="mt-12 text-center text-[10px] text-gray-400">
            © 2024 CONCETTO Global. All rights reserved.
            
            <a className="hover:text-blue-500" href="#">Privacy Policy</a>
            •
            <a className="hover:text-blue-500" href="#">Terms of Service</a>
</footer>
</div>
</main>
</div>


    </>
  );
}
