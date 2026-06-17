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
      
<div className="relative min-h-screen">

<div className="fixed inset-0 z-0">
<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/" width="100%"></iframe>
</div>

<div className="fixed inset-0 z-5 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 border-white/10 border rounded-full px-6 py-3 shadow-xl backdrop-blur-md animate-fade-in delay-100">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
<svg className="lucide lucide-database w-4 h-4 text-white" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<span className="ml-3 text-sm font-medium">Lore</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm text-gray-300 ml-12">
<a className="hover:text-white transition-colors duration-300" href="#">Newsletter</a>
<a className="hover:text-white transition-colors duration-300" href="#">Archives</a>
<a className="hover:text-white transition-colors duration-300" href="#">Market</a>
</div>
<div className="flex items-center space-x-4 ml-12">
<a className="hidden md:inline-block hover:text-white transition-colors duration-300 text-sm font-medium" href="#" id="aura-emccp84lb">Sign In</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl" href="#">
                        Subscribe
                    </a>
</div>
</div>
</nav>

<div className="relative z-10 flex flex-col md:pt-40 md:pb-40 min-h-screen text-center pt-32 pr-6 pb-32 pl-6 items-center justify-center">

<div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

<div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20 animate-slide-up delay-200">
<svg className="lucide lucide-trending-up w-4 h-4 text-blue-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-medium text-gray-200">Data Center Intelligence</span>
</div>

<h1 className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-tight max-w-5xl animate-blur-in delay-300">
                The future of
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    data centers
                </span>
                starts here
            </h1>

<p className="text-lg md:text-xl text-gray-300 max-w-3xl mt-8 leading-relaxed animate-slide-up delay-400">
                Get exclusive insights into data center acquisitions, market trends, and infrastructure deals. 
                Join 12,000+ industry professionals who trust Lore for critical intelligence.
            </p>

<div className="mt-12 w-full max-w-md animate-blur-in delay-500">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<input className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300" placeholder="Enter your email" type="email"/>
<svg className="lucide lucide-mail absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Subscribe
                    </button>
</div>
<p className="text-xs text-gray-400 mt-3 animate-fade-in delay-600">
                    Weekly insights • No spam • Unsubscribe anytime
                </p>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl animate-slide-up delay-700">
<div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="text-2xl font-medium text-white mb-1">$2.4B</div>
<div className="text-sm text-gray-400">Deals Tracked</div>
</div>
<div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="text-2xl font-medium text-white mb-1">12K+</div>
<div className="text-sm text-gray-400">Subscribers</div>
</div>
<div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
<div className="text-2xl font-medium text-white mb-1">98%</div>
<div className="text-sm text-gray-400">Open Rate</div>
</div>
</div>

<div className="mt-16 animate-fade-in delay-800">
<p className="text-sm text-gray-500 mb-6">Trusted by professionals at</p>
<div className="flex items-center justify-center space-x-8 opacity-60">
<div className="text-sm font-medium">Digital Realty</div>
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="text-sm font-medium">Equinix</div>
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="text-sm font-medium">CyrusOne</div>
<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="text-sm font-medium">CoreSite</div>
</div>
</div>
</div>
</div>


    </>
  );
}
