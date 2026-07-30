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
      

<section className="relative z-10 py-20 bg-white dark:bg-transparent">
<div className="mx-auto max-w-5xl px-6">
<div className="mb-14 text-center">
<h2 className="text-balance text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
<p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300">Get started in just a few steps. Streamline your workflow, reduce manual tasks, and deliver quality at speed.</p>
</div>
<ol className="relative border-l border-gray-200 dark:border-gray-700 max-w-3xl mx-auto space-y-12">

<li className="ml-6">
<div className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-300 to-teal-200 rounded-full shadow">
<span className="text-white font-bold text-lg">1</span>
</div>
<div className="flex flex-col gap-2 pl-4">
<h3 className="text-lg font-medium">Sign Up & Connect</h3>
<p className="text-gray-600 dark:text-gray-300">Create your account in seconds and integrate your repositories with a single click. No setup headaches.</p>
</div>
</li>

<li className="ml-6">
<div className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-300 to-teal-200 rounded-full shadow">
<span className="text-white font-bold text-lg">2</span>
</div>
<div className="flex flex-col gap-2 pl-4">
<h3 className="text-lg font-medium">Configure Testing Flow</h3>
<p className="text-gray-600 dark:text-gray-300">Choose from ready-to-use testing templates or customize your workflow. Adapt the checks to fit your team's needs.</p>
</div>
</li>

<li className="ml-6">
<div className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-300 to-teal-200 rounded-full shadow">
<span className="text-white font-bold text-lg">3</span>
</div>
<div className="flex flex-col gap-2 pl-4">
<h3 className="text-lg font-medium">Run & Monitor Results</h3>
<p className="text-gray-600 dark:text-gray-300">Launch tests directly on each commit or pull request. Monitor live results, get alerts, and keep your codebase healthy.</p>
</div>
</li>

<li className="ml-6">
<div className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-300 to-teal-200 rounded-full shadow">
<span className="text-white font-bold text-lg">4</span>
</div>
<div className="flex flex-col gap-2 pl-4">
<h3 className="text-lg font-medium">Review & Iterate</h3>
<p className="text-gray-600 dark:text-gray-300">Dive into insightful reports, catch issues early, and continuously improve your QA processes with actionable feedback.</p>
</div>
</li>
</ol>
</div>
</section>

    </>
  );
}
