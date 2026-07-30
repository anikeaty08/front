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



tailwind.config={darkMode:'class',theme:{extend:{fontFamily:{sans:['Inter','ui-sans-serif','system-ui']},colors:{brand:'#3b82f6',surface:{900:'#0a0a0b',800:'#121214',700:'#1a1a1d'}},borderRadius:{xl2:'1.5rem'}}}};


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
      
<section className="max-w-7xl sm:px-6 lg:px-8 lg:py-24 bg-white/5 border-white/5 border rounded-2xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div className="space-y-8">
<div className="">
<span className="inline-flex items-center gap-2 text-xs bg-white/5 border-white/5 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
          Infrastructure & Security
        </span>
<h1 className="sm:text-4xl lg:text-7xl leading-tight text-3xl font-light text-white tracking-tighter mb-6">
          Enterprise-grade<br />
<span className="text-blue-400">foundations</span>
</h1><p className="sm:text-lg max-w-lg leading-relaxed text-base font-light text-gray-400">TechFlow leverages cutting-edge infrastructure and military-grade security protocols to deliver           unmatched performance, reliability, and data protection for modern enterprises.</p>
</div>
<div className="border-white/5 border-b mt-8 mb-8"></div>
<div className="space-y-8">
<div className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-6 items-start">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 rounded-xl">
<svg className="lucide lucide-zap w-4 h-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-sm font-medium text-white">Quantum Sync Engine</h3>
</div>
<div className="">
<p className="text-sm font-light text-gray-400 mb-2">Advanced distributed computing with sub-millisecond latency and 99.99% uptime guarantee.</p>
<div className="flex gap-2 text-xs">
<span className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded">Edge Computing</span>
<span className="px-2 py-1 bg-green-500/10 text-green-300 rounded">Auto-scaling</span>
</div>
</div>
</div>
<div className="border-b border-white/5"></div><div className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-6 items-start">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 rounded-xl">
<svg className="lucide lucide-shield-check w-4 h-4 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="flex items-center gap-1 text-sm font-medium text-white">
              Zero-Trust Security
            </h3>
</div>
<div className="">
<p className="text-sm font-light text-gray-400 mb-2">Multi-layered security architecture with end-to-end encryption, biometric authentication, and AI threat detection.</p><div className="flex gap-2 text-xs">
<span className="text-red-300 bg-red-500/10 rounded pt-1 pr-2 pb-1 pl-2">AES-256</span><span className="text-purple-300 bg-purple-500/10 rounded pt-1 pr-2 pb-1 pl-2">AI Monitoring</span>
</div>
</div>
</div>
<div className="border-b border-white/5"></div>
<div className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-6 items-start">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 rounded-xl">
<svg className="lucide lucide-globe w-4 h-4 text-blue-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-sm font-medium text-white">Global Infrastructure</h3>
</div>
<div className="">
<p className="text-sm font-light text-gray-400 mb-2">Distributed across 45+ data centers worldwide with intelligent load balancing and disaster recovery protocols.</p>
<div className="flex gap-2 text-xs">
<span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 rounded">Multi-Region</span>
<span className="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded">CDN Optimized</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="right-board h-[300px] lg:h-[400px] flex items-center justify-center relative bg-[url(https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=2160&q=80)] bg-cover rounded-xl2">
<div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-gray-500">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          System Status: Operational
        </div>
</div><div className="bg-white/5 border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<h4 className="flex items-center gap-2 opacity-50 text-sm font-normal text-white mb-4">
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
          Compliance & Certifications
        </h4>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 flex items-center justify-center bg-white/5 border-white/5 border rounded-xl">
<svg className="lucide lucide-shield w-5 h-5 text-blue-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white">SOC 2 Type II</div>
<div className="text-xs text-gray-500">Security & Availability</div>
</div>
</div><div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/5">
<svg className="lucide lucide-heart-pulse w-5 h-5 text-red-400" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white">HIPAA</div>
<div className="text-xs text-gray-500">Healthcare Ready</div>
</div>
</div><div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/5">
<svg className="lucide lucide-eye w-5 h-5 text-green-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white">GDPR</div>
<div className="text-xs text-gray-500">Data Protection</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/5">
<svg className="lucide lucide-building-2 w-5 h-5 text-purple-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white">ISO 27001</div>
<div className="text-xs text-gray-500">Information Security</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
