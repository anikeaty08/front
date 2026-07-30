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
      
<div className="max-w-md w-full bg-[#151515] rounded-xl overflow-hidden shadow-2xl border border-[#232323]">

<div className="px-6 pt-6 pb-4 border-b border-[#232323]">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<h2 className="text-gray-200 font-medium text-sm">Getting Started</h2>
</div>
<span className="text-xs text-gray-500">Step 1 of 4</span>
</div>
</div>

<div className="px-6 py-8">
<div className="flex flex-col items-center text-center mb-6">
<div className="bg-blue-500/10 p-3 rounded-full mb-4">
<svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h1 className="text-2xl font-semibold text-white mb-2">Welcome to the platform!</h1>
<p className="text-gray-400 text-sm">Let's get you set up in just a few simple steps. It'll only take a minute.</p>
</div>

<div className="flex justify-between items-center mb-8 px-2">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white font-medium">1</div>
<p className="text-xs text-blue-400 mt-1">Profile</p>
</div>
<div className="h-[2px] flex-grow bg-[#232323] mx-1">
<div className="h-full w-0 bg-blue-500"></div>
</div>
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-[#232323] flex items-center justify-center text-xs text-gray-400 font-medium">2</div>
<p className="text-xs text-gray-500 mt-1">Team</p>
</div>
<div className="h-[2px] flex-grow bg-[#232323] mx-1"></div>
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-[#232323] flex items-center justify-center text-xs text-gray-400 font-medium">3</div>
<p className="text-xs text-gray-500 mt-1">Goals</p>
</div>
<div className="h-[2px] flex-grow bg-[#232323] mx-1"></div>
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-[#232323] flex items-center justify-center text-xs text-gray-400 font-medium">4</div>
<p className="text-xs text-gray-500 mt-1">Finish</p>
</div>
</div>
</div>

<div className="px-6 py-4 bg-[#171717] space-y-4">
<div>
<label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Full Name</label>
<input className="w-full bg-[#232323] border border-[#333333] rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" type="text" />
</div>
<div>
<label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Job Title</label>
<input className="w-full bg-[#232323] border border-[#333333] rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" type="text" />
</div>
<div>
<label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Profile Picture</label>
<div className="flex items-center space-x-3">
<div className="w-12 h-12 rounded-full bg-[#232323] flex items-center justify-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<button className="px-3 py-1.5 bg-[#232323] hover:bg-[#2a2a2a] text-gray-300 text-sm rounded-md">Upload</button>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-[#232323] flex justify-between">
<button className="px-4 py-2 border border-[#333333] text-gray-300 text-sm rounded-md hover:bg-[#1a1a1a]">Skip</button>
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md">Continue</button>
</div>
</div>

    </>
  );
}
