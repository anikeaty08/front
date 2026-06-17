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
      

<div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl border border-neutral-200/60 overflow-hidden flex flex-col max-h-[90vh] animate-sequence">

<div className="bg-neutral-50 border-b border-neutral-100 px-4 py-3 flex items-center gap-4 shrink-0 z-10">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-white border border-neutral-200 px-3 py-1 rounded-md flex items-center gap-2 w-full max-w-xs shadow-sm">
<span className="iconify text-neutral-400" data-icon="lucide:lock" data-width="12"></span>
<span className="text-xs text-neutral-400 font-medium tracking-wide">acme.inc/features</span>
</div>
</div>
<div className="w-14"></div> 
</div>

<div className="overflow-y-auto custom-scroll flex-1 relative bg-white">

<nav className="flex justify-between items-center px-8 py-6 border-b border-neutral-100/50 sticky top-0 bg-white/90 backdrop-blur-sm z-20">
<div className="text-lg font-medium tracking-tight text-neutral-900 uppercase">Acme</div>
<div className="hidden sm:flex gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Product</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Resources</a>
</div>
<button className="bg-neutral-900 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-neutral-800 transition-colors">Get Started</button>
</nav>

<main className="px-6 py-12 sm:px-12 sm:py-20 max-w-4xl mx-auto">

<div className="text-center mb-16 sm:mb-24 animate-sequence">
<h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                        Architecting <span className="italic text-blue-500 font-normal">intelligence</span><br/> for the modern web.
                    </h1>
<p className="text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto font-normal leading-relaxed">
                        A suite of tools designed for clarity, precision, and speed. Built for teams that value craftsmanship.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 rounded-lg overflow-hidden animate-sequence">

<div className="group feature-card p-8 sm:p-12 border-b md:border-b-0 md:border-r border-neutral-200 hover:bg-neutral-50/50 flex flex-col h-full">
<div className="mb-8 flex justify-between items-start">
<div className="p-3 bg-neutral-100 rounded-lg text-neutral-900 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="iconify text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-3 tracking-tight">Real-time Insights</h3>
<p className="text-base text-neutral-500 leading-relaxed font-normal mb-8">
                            Visualize data flows instantly. Our adaptive rendering engine processes millions of points without latency.
                        </p>

<div className="mt-auto relative h-24 w-full flex items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-1/5 bg-neutral-200 rounded-t-sm h-[40%] group-hover:bg-blue-200 group-hover:h-[60%] transition-all duration-500 delay-75"></div>
<div className="w-1/5 bg-neutral-300 rounded-t-sm h-[60%] group-hover:bg-blue-300 group-hover:h-[85%] transition-all duration-500 delay-100"></div>
<div className="w-1/5 bg-neutral-200 rounded-t-sm h-[30%] group-hover:bg-blue-200 group-hover:h-[45%] transition-all duration-500 delay-150"></div>
<div className="w-1/5 bg-neutral-300 rounded-t-sm h-[75%] group-hover:bg-blue-400 group-hover:h-[90%] transition-all duration-500 delay-200"></div>
<div className="w-1/5 bg-neutral-200 rounded-t-sm h-[50%] group-hover:bg-blue-200 group-hover:h-[70%] transition-all duration-500 delay-250"></div>
</div>
</div>

<div className="group feature-card p-8 sm:p-12 border-b border-neutral-200 hover:bg-neutral-50/50 flex flex-col h-full">
<div className="mb-8 flex justify-between items-start">
<div className="p-3 bg-neutral-100 rounded-lg text-neutral-900 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="iconify text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-3 tracking-tight">Global Edge</h3>
<p className="text-base text-neutral-500 leading-relaxed font-normal mb-8">
                            Deploy to 35 regions in seconds. State replication happens automatically at the edge closer to your users.
                        </p>

<div className="mt-auto relative h-24 w-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<div className="relative w-full h-full">
<div className="absolute top-1/2 left-1/4 w-2 h-2 bg-neutral-300 rounded-full group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-500"></div>
<div className="absolute top-1/3 left-1/2 w-2 h-2 bg-neutral-300 rounded-full group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-500 delay-75"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-neutral-300 rounded-full group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-500 delay-150"></div>

<svg className="absolute inset-0 w-full h-full text-neutral-200 group-hover:text-blue-200 transition-colors duration-500" style={{strokeDasharray: '4'}}>
<line stroke="currentColor" strokeWidth="1" x1="25%" x2="50%" y1="50%" y2="33%"></line>
<line stroke="currentColor" strokeWidth="1" x1="50%" x2="75%" y1="33%" y2="66%"></line>
</svg>
</div>
</div>
</div>

<div className="group feature-card p-8 sm:p-12 border-b md:border-b-0 md:border-r border-neutral-200 hover:bg-neutral-50/50 flex flex-col h-full">
<div className="mb-8 flex justify-between items-start">
<div className="p-3 bg-neutral-100 rounded-lg text-neutral-900 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="iconify text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-3 tracking-tight">Vault Security</h3>
<p className="text-base text-neutral-500 leading-relaxed font-normal mb-8">
                            Enterprise-grade encryption at rest and in transit. Manage permissions with granular access controls.
                        </p>

<div className="mt-auto relative h-16 w-full flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-2">
<div className="w-10 h-6 bg-neutral-200 rounded-full relative group-hover:bg-blue-500 transition-colors duration-300">
<div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all duration-300 group-hover:translate-x-4"></div>
</div>
<span className="text-xs font-medium text-neutral-400 group-hover:text-blue-500 transition-colors">2FA On</span>
</div>
</div>
</div>

<div className="group feature-card p-8 sm:p-12 hover:bg-neutral-50/50 flex flex-col h-full">
<div className="mb-8 flex justify-between items-start">
<div className="p-3 bg-neutral-100 rounded-lg text-neutral-900 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="iconify text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-3 tracking-tight">Scalable API</h3>
<p className="text-base text-neutral-500 leading-relaxed font-normal mb-8">
                            Built on a serverless architecture that scales from zero to infinity. Pay only for what you execute.
                        </p>

<div className="mt-auto relative w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 space-y-2">
<div className="h-1.5 w-3/4 bg-neutral-200 rounded-full group-hover:bg-blue-200 group-hover:w-full transition-all duration-500"></div>
<div className="h-1.5 w-1/2 bg-neutral-200 rounded-full group-hover:bg-blue-300 group-hover:w-2/3 transition-all duration-500 delay-75"></div>
<div className="h-1.5 w-2/3 bg-neutral-200 rounded-full group-hover:bg-blue-200 group-hover:w-3/4 transition-all duration-500 delay-150"></div>
</div>
</div>
</div>

<div className="mt-20 sm:mt-24 text-center pb-10 animate-sequence">
<button className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-neutral-600 hover:text-blue-600 transition-colors duration-300">
<span>Explore Documentation</span>
<span className="iconify transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</main>
</div>
</div>

    </>
  );
}
