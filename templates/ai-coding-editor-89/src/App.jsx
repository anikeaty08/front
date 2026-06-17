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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
bg: '#030B1A',
accent: '#2EE6B3',
dark: '#0D1526'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
}
}
}
}

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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

<div className="absolute bottom-[-10%] left-[-50%] w-[200%] h-[120%] opacity-80 grid-container">
<div className="gradient-flow"></div>
</div>


<div className="absolute inset-0 opacity-40">
<svg className="w-full h-full" fill="none" preserveaspectratio="xMidYMax slice" viewbox="0 0 1440 900">
<g fill="none" stroke="rgba(255,255,255,0.3)" stroke-dasharray="4 6" strokeWidth="1">

<path d="M-100,1000 C100,900 400,800 1600,600"></path>
<path d="M-100,1050 C100,950 400,850 1600,650"></path>
<path d="M-100,1100 C100,1000 400,900 1600,700"></path>
<path d="M-100,1150 C100,1050 400,950 1600,750"></path>
<path d="M-100,950 C100,850 400,750 1600,550"></path>
<path d="M-100,900 C100,800 400,700 1600,500"></path>
<path d="M-100,850 C100,750 400,650 1600,450"></path>
<path d="M-100,800 C100,700 400,600 1600,400"></path>
<path d="M-100,750 C100,650 400,550 1600,350" opacity="0.5"></path>
<path d="M-100,700 C100,600 400,500 1600,300" opacity="0.3"></path>
</g>

<g fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1">
<line x1="20%" x2="20%" y1="0" y2="100%"></line>
<line x1="40%" x2="40%" y1="0" y2="100%"></line>
<line x1="60%" x2="60%" y1="0" y2="100%"></line>
<line x1="80%" x2="80%" y1="0" y2="100%"></line>
</g>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#030B1A] via-transparent to-[#030B1A]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#030B1A] via-transparent to-[#030B1A]"></div>
</div>

<nav className="fixed top-0 w-full z-50 flex items-center justify-between pl-8 bg-brand-bg/0 backdrop-blur-sm h-16">

<div className="flex items-center gap-2">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L9 18L12 10L15 18L20 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xl font-normal tracking-tight text-white">WindStand</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-wider text-gray-300">
<a className="hover:text-white flex items-center gap-1 group" href="#">
                PRODUCTS 
                <iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<a className="hover:text-white flex items-center gap-1 group" href="#">
                ENTERPRISE 
                <iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<a className="hover:text-white" href="#">PRICING</a>
<a className="hover:text-white" href="#">BLOG</a>
<a className="hover:text-white flex items-center gap-1 group" href="#">
                RESOURCES 
                <iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<a className="hover:text-white flex items-center gap-1 group" href="#">
                COMPANY 
                <iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
</div>

<div className="flex items-center h-full">
<button className="p-2 mr-6 text-gray-300 hover:text-white rounded-full border border-gray-600/50 hover:border-gray-400 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:user-rounded-linear" width="20"></iconify-icon>
</button>
<a className="hidden sm:flex h-full px-8 items-center bg-[#2EE6B3] text-[#030B1A] text-[11px] font-bold tracking-wider hover:bg-[#25cca0] transition-colors" href="#">
                DOWNLOAD
            </a>
</div>
</nav>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10 text-center sm:px-6 lg:px-8">

<div className="max-w-4xl mx-auto space-y-4">
<h1 className="text-5xl md:text-[5rem] lg:text-[5.5rem] font-light leading-[1.05] tracking-tight text-white">
                Where developers <br/>
                are doing their best work.
            </h1>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 mt-12 mb-16">

<button className="group flex items-center gap-3 bg-[#2EE6B3] text-[#030B1A] px-6 py-4 rounded hover:bg-[#25cca0] transition-all duration-200">

<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24">
<path d="M17.05 19.33c.31.84-.2 2.38-1.24 2.38h-.12c-.44 0-1.14-.38-1.74-.38-.64 0-1.46.4-2.02.4-1.38 0-2.48-1.34-3.08-2.52-1.28-2.52-.3-6.14 2.1-6.14.98 0 1.62.46 2.14.46.52 0 1.34-.5 2.4-.5.98 0 1.76.4 2.22.92-1.92 1.1-1.6 4.3.44 5.38zM14.77 10.99c.64-.78.96-1.7.8-2.58-.9.04-1.88.52-2.4 1.14-.52.6-.88 1.54-.76 2.44.96.06 1.78-.36 2.36-1z"></path>
</svg>
<span className="text-lg font-medium tracking-tight">Download for macOS</span>
</button>

<button className="flex items-center gap-2 px-8 py-4 text-white transition-colors border rounded bg-white/5 border-white/10 hover:bg-white/10">
<span className="text-lg font-medium tracking-tight">Explore Features</span>
</button>
</div>

<div className="flex items-start max-w-2xl gap-4 px-4 text-left sm:items-center sm:text-center">

<div className="flex-shrink-0 mt-2 sm:mt-0 w-1.5 h-1.5 bg-[#2EE6B3]"></div>
<p className="text-lg font-light leading-relaxed text-gray-200 sm:text-xl">
                Windsurf is the most intuitive AI coding experience, built to keep you—and your team—in flow.
            </p>
</div>
</main>

    </>
  );
}
