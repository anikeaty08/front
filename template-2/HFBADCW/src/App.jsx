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
      

<div className="lines absolute top-0 left-0 right-0 h-full m-auto pointer-events-none z-0" style={{width: `90vw`}}>
<div className="line line-anim line-1 absolute w-px h-full top-0 left-1/2" style={{marginLeft: `-22.5vw`, background: `rgba(255,255,255,0.07)`}}></div>
<div className="line line-anim line-2 absolute w-px h-full top-0 left-1/2" style={{background: `rgba(255,255,255,0.07)`}}></div>
<div className="line line-anim line-3 absolute w-px h-full top-0 left-1/2" style={{marginLeft: `22.5vw`, background: `rgba(255,255,255,0.07)`}}></div>
</div>

<div className="relative z-10 flex flex-col items-center max-w-2xl text-center mx-auto pt-16 pb-6 px-4 sm:px-8 md:px-12">
<h1 className="md:text-5xl text-4xl font-light text-slate-50 tracking-tight font-geist bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text mb-2 drop-shadow-lg">
      Discover Our Features
    </h1>
<p className="md:text-xl max-w-2xl text-xs font-light text-zinc-400">
      Powerful tools and thoughtful design to help you build, grow, and succeed.
    </p>
</div>

<div className="relative z-10 overflow-hidden py-10">
<div className="scroll-mask-left"></div>
<div className="scroll-mask-right"></div>
<div className="mx-auto max-w-6xl px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="relative max-w-lg w-full overflow-hidden rounded-lg flex flex-col border border-gray-700 bg-white/10 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1 duration-200 group">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative z-10 p-7 flex flex-col gap-4 items-center">
<div className="mb-2">
<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">

<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>
<span className="font-semibold text-lg text-white font-geist">Instant Deployment</span>
<p className="text-gray-400 text-sm font-light text-center leading-snug whitespace-normal">
              Launch your projects in seconds. Our platform provides seamless deployment with zero downtime and automatic scaling to handle any traffic.
            </p>
</div>
</div>

<div className="relative max-w-lg w-full overflow-hidden rounded-lg flex flex-col border border-gray-700 bg-white/10 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1 duration-200 group">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative z-10 p-7 flex flex-col gap-4 items-center">
<div className="mb-2">
<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg">

<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 12l2 2l4 -4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>
<span className="font-semibold text-lg text-white font-geist">Enterprise-Grade Security</span>
<p className="text-gray-400 text-sm font-light text-center leading-snug whitespace-normal">
              Keep your data safe with robust encryption, continuous monitoring, and compliance with the latest industry standards.
            </p>
</div>
</div>

<div className="relative max-w-lg w-full overflow-hidden rounded-lg flex flex-col border border-gray-700 bg-white/10 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1 duration-200 group">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative z-10 p-7 flex flex-col gap-4 items-center">
<div className="mb-2">
<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 shadow-lg">

<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>
<span className="font-semibold text-lg text-white font-geist">Global CDN</span>
<p className="text-gray-400 text-sm font-light text-center leading-snug whitespace-normal">
              Deliver content quickly to users around the world with a lightning-fast global content delivery network.
            </p>
</div>
</div>

<div className="relative max-w-lg w-full overflow-hidden rounded-lg flex flex-col border border-gray-700 bg-white/10 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1 duration-200 group">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative z-10 p-7 flex flex-col gap-4 items-center">
<div className="mb-2">
<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-600 shadow-lg">

<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<path d="M12 2v4m0 12v4m8-8h-4m-8 0H4m14.07-6.07l-2.83 2.83m-8.48 8.48l-2.83 2.83m0-13.66l2.83 2.83m8.48 8.48l2.83 2.83" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>
<span className="font-semibold text-lg text-white font-geist">Modern UI/UX</span>
<p className="text-gray-400 text-sm font-light text-center leading-snug whitespace-normal">
              Enjoy a beautiful, intuitive interface designed for productivity and delight at every touchpoint.
            </p>
</div>
</div>

<div className="relative max-w-lg w-full overflow-hidden rounded-lg flex flex-col border border-gray-700 bg-white/10 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1 duration-200 group">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative z-10 p-7 flex flex-col gap-4 items-center">
<div className="mb-2">
<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 shadow-lg">

<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>
<span className="font-semibold text-lg text-white font-geist">Easy Integrations</span>
<p className="text-gray-400 text-sm font-light text-center leading-snug whitespace-normal">
              Connect with your favorite tools and services in just a few clicks. API-first and Zapier support included.
            </p>
</div>
</div>

<div className="relative max-w-lg w-full overflow-hidden rounded-lg flex flex-col border border-gray-700 bg-white/10 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1 duration-200 group">
<div className="card-gradient-bg rounded-lg"></div>
<div className="relative z-10 p-7 flex flex-col gap-4 items-center">
<div className="mb-2">
<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 shadow-lg">

<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>
<span className="font-semibold text-lg text-white font-geist">24/7 Support</span>
<p className="text-gray-400 text-sm font-light text-center leading-snug whitespace-normal">
              Our expert team is available around the clock to assist with any questions, issues, or feedback.
            </p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
