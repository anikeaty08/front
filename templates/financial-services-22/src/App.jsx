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
      
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

<div className="max-w-3xl mx-auto text-center space-y-6 mb-16 sm:mb-20">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                Financial Services
            </h1>
<p className="text-lg text-gray-600 leading-relaxed">
                We help banks, credit unions, and wealth managers sharpen growth priorities, streamline operating models, and strengthen risk control without adding another layer of bureaucracy.
            </p>
</div>

<div className="max-w-4xl mx-auto mb-16 sm:mb-20">
<div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-8">We help with:</h2>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="mt-1 bg-gray-100 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-gray-700" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-gray-600 leading-relaxed">Designing embedded finance propositions that align with evolving customer needs, behaviors, and regulatory constraints</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-gray-100 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-gray-700" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-gray-600 leading-relaxed">Building growth and revenue strategies across deposits, interchange, and fees</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-gray-100 rounded-full p-1.5 shrink-0">
<i className="w-4 h-4 text-gray-700" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-gray-600 leading-relaxed">Leading go-to-market and sales enablement across segments, channels, and partnerships</span>
</li>
</ul>
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-start sm:items-center gap-4 flex-col sm:flex-row">
<div className="bg-white border border-gray-200 rounded-xl p-2 shrink-0 shadow-sm">
<i className="w-5 h-5 text-gray-700" data-lucide="target" strokeWidth="1.5"></i>
</div>
<p className="text-base text-gray-700 leading-relaxed">
<span className="font-medium text-gray-900">Typical outcomes:</span> increased customer retention, stronger unit economics, and faster product launches.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-colors shadow-sm gap-2">
                View Financial Services More Insights
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-gray-900 border border-gray-200 text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
                Contact Us
            </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative h-[420px] rounded-3xl overflow-hidden flex flex-col justify-end p-6 sm:p-8 bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" href="#">
<img alt="Speech at a forum" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex items-start">
<span className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-medium">
                            Public Sector &amp; Nonprofits
                        </span>
</div>
<div className="space-y-3">
<p className="text-white/70 text-xs font-medium uppercase tracking-widest">Perspective</p>
<h3 className="text-white text-xl font-semibold leading-tight tracking-tight">DAVOS 2026: Carney's doctrine for a middle-power Canada</h3>
</div>
</div>
</a>

<a className="group relative h-[420px] rounded-3xl overflow-hidden flex flex-col justify-end p-6 sm:p-8 bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" href="#">
<img alt="AI Robot" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1565&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex items-start">
<span className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-medium">
                            Technology &amp; Digital Platforms
                        </span>
</div>
<div className="space-y-3">
<p className="text-white/70 text-xs font-medium uppercase tracking-widest">Perspective</p>
<h3 className="text-white text-xl font-semibold leading-tight tracking-tight">Can a governed AI agent be part of your Chief of Staff function?</h3>
</div>
</div>
</a>

<a className="group relative h-[420px] rounded-3xl overflow-hidden flex flex-col justify-end p-6 sm:p-8 bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" href="#">
<img alt="Power lines at sunset" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex items-start">
<span className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-medium">
                            Energy &amp; Utilities
                        </span>
</div>
<div className="space-y-3">
<p className="text-white/70 text-xs font-medium uppercase tracking-widest">Case Study</p>
<h3 className="text-white text-xl font-semibold leading-tight tracking-tight">Strengthening electrical reliability for a leading energy pipeline operator</h3>
</div>
</div>
</a>
</div>
</main>



    </>
  );
}
