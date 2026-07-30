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
      
<section className="py-20 bg-white dark:bg-transparent relative z-10">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-14 text-center">
<h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">How It Works</h2>
<p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300">Follow these easy steps to optimize your workflow, from onboarding to continuous improvement.</p>
</div>

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 relative">

<div className="hidden md:block absolute left-0 right-0 top-8 z-0 h-0.5 bg-gradient-to-r from-indigo-200 via-teal-200 to-indigo-200 mx-16"></div>

<div className="relative z-10 flex flex-col items-center text-center flex-1 group">
<div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-indigo-400 via-teal-400 to-blue-400 rounded-full shadow-lg border-4 border-white dark:border-black transition-transform group-hover:scale-105">
<span className="text-2xl font-bold text-white">1</span>
</div>
<h3 className="text-lg font-semibold mb-2">Sign Up & Connect</h3>
<p className="text-gray-600 dark:text-gray-300">Create your account and easily link your repositories. Get up and running in minutes.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center flex-1 group">
<div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-indigo-400 via-teal-400 to-blue-400 rounded-full shadow-lg border-4 border-white dark:border-black transition-transform group-hover:scale-105">
<span className="text-2xl font-bold text-white">2</span>
</div>
<h3 className="text-lg font-semibold mb-2">Configure Flow</h3>
<p className="text-gray-600 dark:text-gray-300">Select or customize your testing workflow to fit your team’s needs.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center flex-1 group">
<div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-indigo-400 via-teal-400 to-blue-400 rounded-full shadow-lg border-4 border-white dark:border-black transition-transform group-hover:scale-105">
<span className="text-2xl font-bold text-white">3</span>
</div>
<h3 className="text-lg font-semibold mb-2">Run & Monitor</h3>
<p className="text-gray-600 dark:text-gray-300">Execute tests automatically on each commit or PR and track results live.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center flex-1 group">
<div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-indigo-400 via-teal-400 to-blue-400 rounded-full shadow-lg border-4 border-white dark:border-black transition-transform group-hover:scale-105">
<span className="text-2xl font-bold text-white">4</span>
</div>
<h3 className="text-lg font-semibold mb-2">Review & Improve</h3>
<p className="text-gray-600 dark:text-gray-300">Analyze reports, gather insights, and evolve your QA process for best results.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
