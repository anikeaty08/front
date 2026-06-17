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
      
<div className="relative min-h-screen w-full">

<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
<div className="absolute inset-0 hero-gradient"></div>
</div>

<header className="relative z-10 w-full border-b border-white/16">
<div className="flex justify-between items-center p-4">
<div className="flex items-center">
<a className="text-white" href="#">
<svg className="w-24 h-auto" fill="none" height="40" viewbox="0 0 148 43" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M14 19L28 19L28 33L14 33L14 19Z" fill="#03D967"></path>
<path d="M14 5L28 5L28 19L14 19L14 5Z" fill="#03D967"></path>
<path d="M14 19L14 33L0 33L0 19L14 19Z" fill="white"></path>
<path d="M14 5L14 19L0 19L0 5L14 5Z" fill="white"></path>
<path d="M28 19L42 19L42 33L28 33L28 19Z" fill="white"></path>
<path d="M28 5L42 5L42 19L28 19L28 5Z" fill="white"></path>
<path d="M56 14H52V32H56V14Z" fill="white"></path>
<path d="M70 14H66V32H70V14Z" fill="white"></path>
<path d="M84 14H80V32H84V14Z" fill="white"></path>
<path d="M56 14H60C65 14 68 17 68 23C68 29 65 32 60 32H56V14Z" fill="white"></path>
<path d="M70 14H74C79 14 82 17 82 23C82 29 79 32 74 32H70V14Z" fill="white"></path>
<path d="M84 14H88C93 14 96 17 96 23C96 29 93 32 88 32H84V14Z" fill="white"></path>
<path d="M107 14H103V32H107V14Z" fill="white"></path>
<path d="M107 14H111C116 14 119 17 119 23C119 29 116 32 111 32H107V14Z" fill="white"></path>
<path d="M123 14H127C132 14 135 17 135 23C135 29 132 32 127 32H123V14Z" fill="white"></path>
<path d="M139 14H143C148 14 151 17 151 23C151 29 148 32 143 32H139V14Z" fill="white"></path>
</svg>
</a>
</div>
<div className="flex items-center space-x-4">
<div className="brand-pill px-3 py-1 rounded-full flex items-center">
<span className="text-white/80 text-xs">Enterprise-grade AI customer intelligence</span>
</div>
<button className="text-white p-2">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</header>

<main className="relative z-10 px-5 pt-8 pb-12 flex flex-col items-center">
<div className="text-center max-w-md mx-auto">
<h1 className="gradient-text text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                    Empower your content, expand your business.
                </h1>
<p className="text-white text-base sm:text-lg mb-8">
                    At Powerling, we provide AI-enabled technology with human expertise. Boost your ROI with smarter content strategies.
                </p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
<button className="btn-primary rounded-full py-3 px-6 flex items-center justify-center">
<span>Explore Solutions</span>
<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="btn-secondary rounded-full py-3 px-6 flex items-center justify-center">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Talk to an Expert</span>
</button>
</div>
</div>
</main>

<section className="relative z-10 px-5 pb-12 mt-12">
<div className="max-w-md mx-auto">
<p className="text-white text-center text-sm mb-6">Connecting the world's greatest companies to their customers:</p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">

<div className="bg-black/20 rounded-lg p-4 flex items-center justify-center w-36 h-14">
<span className="text-white text-xs">Breville</span>
</div>
<div className="bg-black/20 rounded-lg p-4 flex items-center justify-center w-36 h-14">
<span className="text-white text-xs">Atlassian</span>
</div>
<div className="bg-black/20 rounded-lg p-4 flex items-center justify-center w-36 h-14">
<span className="text-white text-xs">Okta</span>
</div>
<div className="bg-black/20 rounded-lg p-4 flex items-center justify-center w-36 h-14">
<span className="text-white text-xs">Canva</span>
</div>
<div className="bg-black/20 rounded-lg p-4 flex items-center justify-center w-36 h-14">
<span className="text-white text-xs">Zapier</span>
</div>
<div className="bg-black/20 rounded-lg p-4 flex items-center justify-center w-36 h-14">
<span className="text-white text-xs">Gitlab</span>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
