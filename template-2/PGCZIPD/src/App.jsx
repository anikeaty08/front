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



tailwind.config={darkMode:'class',theme:{extend:{fontFamily:{sans:['Inter','ui-sans-serif','system-ui']},colors:{brand:'#3b82f6',surface:{900:'#090909',800:'#111111',700:'#181818'}},borderRadius:{xl2:'1.5rem'}}}};


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
      
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div className="max-w-lg">
<span className="badge inline-flex items-center gap-2 mb-6 border border-white/5">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        Enterprise Infrastructure
      </span>
<h1 className="sm:text-4xl lg:text-7xl leading-tight text-3xl font-normal text-white font-instrument-serif mb-6">Built on enterprise-grade foundations<br className="hidden sm:block" /></h1>
<p className="sm:text-lg leading-relaxed max-w-md text-base font-light text-gray-400 mb-12">
        NexusFlow combines cutting-edge technology with battle-tested infrastructure. 
        Every component is engineered for reliability, security, and performance at global scale.
      </p>
<div className="space-y-8 sm:space-y-10">
<div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6">
<h3 className="flex items-center gap-2 text-xl text-white font-instrument-serif">
            Quantum Sync Engine
          </h3>
<p className="text-gray-400 text-sm leading-relaxed">
            Advanced real-time synchronization with sub-millisecond latency. 
            Powered by distributed computing and intelligent caching algorithms.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6">
<h3 className="flex items-center gap-2 text-xl text-white font-instrument-serif">
            Zero-Trust Security
          </h3>
<p className="text-gray-400 text-sm leading-relaxed">
            End-to-end encryption with AES-256, multi-factor authentication, 
            and continuous threat monitoring across all endpoints.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6">
<h3 className="flex items-center gap-2 text-xl text-white font-instrument-serif">
            Auto-scaling Infrastructure
          </h3>
<p className="text-gray-400 text-sm leading-relaxed">
            Kubernetes-native architecture that scales from 10 to 10 million users. 
            Smart resource allocation with 99.99% uptime guarantee.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6">
<h3 className="flex items-center gap-2 text-xl text-white font-instrument-serif">
            Global Edge Network
          </h3>
<p className="leading-relaxed text-sm text-gray-400">
            250+ edge locations worldwide with intelligent routing. 
            CDN optimization ensures lightning-fast performance globally.
          </p>
</div>
</div>

<div className="flex flex-wrap gap-8 sm:gap-12 mt-16">
<div className="flex flex-col items-center gap-3 grayscale">
<div className="w-14 h-14 flex items-center justify-center text-xs font-semibold text-blue-300 bg-gradient-to-tl from-slate-900 to-slate-700 rounded-full">
<svg className="lucide lucide-shield w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="text-xs font-medium text-gray-400">Secure</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale">
<div className="w-14 h-14 flex items-center justify-center text-xs font-semibold text-blue-300 bg-gradient-to-tl from-slate-900 to-slate-700 rounded-full">
<svg className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-xs font-medium text-gray-400">Stable</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale">
<div className="w-14 h-14 flex items-center justify-center text-xs font-semibold text-blue-300 bg-gradient-to-tl from-slate-900 to-slate-700 rounded-full">
<svg className="lucide lucide-heart-pulse w-5 h-5" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<span className="text-xs font-medium text-gray-400">Healthy</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale">
<div className="w-14 h-14 flex items-center justify-center text-xs font-semibold text-blue-300 bg-gradient-to-tl from-slate-900 to-slate-700 rounded-full">
<svg className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<span className="text-xs font-medium text-gray-400">Acclaimed</span>
</div>
</div>
</div>

<div className="relative">
<div className="h-[400px] sm:h-[500px] lg:h-[800px] flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1636760243166-c2c0c62ba633?w=2160&q=80)] bg-cover rounded-xl2">
<div className="text-center">
<div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl mr-auto mb-4 ml-auto backdrop-blur-md grayscale">
<svg className="lucide lucide-cpu w-10 h-10 sm:w-12 sm:h-12 text-blue-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-white font-semibold mb-2">Core Architecture</h3>
<p className="text-sm text-white/50 bg-black/50 rounded-lg pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">Microservices running on distributed infrastructure</p>
</div>
</div>

<div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-lg backdrop-blur-md grayscale">
<svg className="lucide lucide-database w-5 h-5 text-blue-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="absolute bottom-8 left-8 w-12 h-12 flex items-center justify-center rounded-lg backdrop-blur-md grayscale">
<svg className="lucide lucide-cloud w-5 h-5 text-purple-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
</div>
</div>
</section>


    </>
  );
}
