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
      
<div className="bg-slate-900 rounded-xl shadow-2xl shadow-purple-900/30 overflow-hidden max-w-sm w-full border border-slate-700/70 transition-all duration-300 hover:shadow-purple-700/40 hover:border-slate-600/90">

<div className="relative">

<div className="w-full h-52 bg-slate-800 flex items-center justify-center">
<svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="absolute top-3 left-3 bg-slate-800/70 backdrop-blur-sm text-slate-200 text-xs font-medium px-3 py-1 rounded-full border border-slate-600/50">
                New Feature
            </div>
</div>

<div className="p-6">
<p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-2">
                Productivity Suite
            </p>
<h2 className="text-xl font-semibold text-slate-100 mb-3 leading-tight">
                Streamline Your Workflow
            </h2>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                Unlock new levels of efficiency and collaboration with our cutting-edge tools designed for modern teams.
            </p>

<a className="inline-block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/30 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75" href="#">
                Get Started
            </a>
</div>

<div className="bg-slate-900/70 px-6 py-4 border-t border-slate-700/70">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="hover:text-slate-300 transition-colors">Updated 3h ago</span>
<div className="flex items-center space-x-2">
<div className="flex items-center space-x-1 group cursor-pointer">
<svg className="h-4 w-4 text-slate-500 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fillRule="evenodd"></path>
</svg>
<span className="group-hover:text-slate-300 transition-colors">277</span>
</div>
<div className="flex items-center space-x-1 group cursor-pointer">
<svg className="h-4 w-4 text-slate-500 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="group-hover:text-slate-300 transition-colors">15</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
