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
      

<nav className="container mx-auto px-6 py-6 content">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight font-semibold">Visionary</span>
</div>
<div className="hidden md:flex space-x-10 text-sm">
<a className="hover:text-indigo-300 transition-colors" href="#">Work</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Features</a>
<a className="hover:text-indigo-300 transition-colors" href="#">About</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Contact</a>
</div>
<div>
<button className="text-sm border border-indigo-500/30 rounded-md px-4 py-2 hover:bg-indigo-500/10 transition-all">
          Let's Talk
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent content"></div>

<div className="min-h-screen flex flex-col">
<div className="container mx-auto px-6 py-16 md:py-24 content">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="mb-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-none">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Features</span> 
            that elevate your brand
          </h1>
<p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-normal">
            Discover how our comprehensive suite of tools and services can transform your digital presence and drive meaningful results.
          </p>
</div>
</div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
<div className="h-12 w-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
<p className="text-gray-400 text-sm">We craft distinctive visual languages that set your brand apart and resonate with your target audience.</p>
</div>

<div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group md:col-span-2">
<div className="h-12 w-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Responsive Web Design</h3>
<p className="text-gray-400 text-sm">Our expertly crafted websites adapt seamlessly to all devices, ensuring an optimal user experience no matter how your customers engage with your brand.</p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full">Mobile-first</span>
<span className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full">Cross-browser</span>
<span className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full">Performance-optimized</span>
</div>
</div>

<div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group md:col-span-2">
<div className="h-12 w-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
<p className="text-gray-400 text-sm">We create intuitive, engaging interfaces that guide users effortlessly through your digital products, increasing satisfaction and conversion rates.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="flex items-center">
<div className="h-2 w-2 bg-indigo-400 rounded-full mr-2"></div>
<span className="text-sm text-gray-300">User Research</span>
</div>
<div className="flex items-center">
<div className="h-2 w-2 bg-indigo-400 rounded-full mr-2"></div>
<span className="text-sm text-gray-300">Wireframing</span>
</div>
<div className="flex items-center">
<div className="h-2 w-2 bg-indigo-400 rounded-full mr-2"></div>
<span className="text-sm text-gray-300">Prototyping</span>
</div>
<div className="flex items-center">
<div className="h-2 w-2 bg-indigo-400 rounded-full mr-2"></div>
<span className="text-sm text-gray-300">Usability Testing</span>
</div>
</div>
</div>

<div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
<div className="h-12 w-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Motion Design</h3>
<p className="text-gray-400 text-sm">Dynamic animations and transitions that breathe life into your digital presence and create memorable interactions.</p>
</div>

<div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
<div className="h-12 w-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Custom Development</h3>
<p className="text-gray-400 text-sm">Tailor-made solutions built with cutting-edge technologies to meet your specific business requirements.</p>
</div>

<div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group md:col-span-2">
<div className="h-12 w-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Digital Strategy</h3>
<p className="text-gray-400 text-sm">Comprehensive digital roadmaps aligned with your business goals to maximize your online potential and drive sustainable growth.</p>
<div className="mt-6 bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/20">
<p className="text-xs text-indigo-200">Our strategic approach has helped clients achieve an average of 43% increase in digital engagement and 28% growth in conversion rates.</p>
</div>
</div>
</div>

<div className="mt-20 text-center">
<h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to transform your digital presence?</h2>
<p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">Let's collaborate to create exceptional digital experiences that drive results.</p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md px-8 py-3 transition-all">
          Get in touch
        </button>
</div>
</div>
</div>

    </>
  );
}
