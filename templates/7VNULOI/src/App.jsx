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

    // Animate fade-ups
    function handleScrollFade() {
      document.querySelectorAll('.fade-up').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) el.classList.add('visible');
      });
    }
    window.addEventListener('scroll', handleScrollFade);
    window.addEventListener('DOMContentLoaded', handleScrollFade);
  
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
      

<section className="max-w-5xl mx-auto px-4 sm:px-8 py-20">
<div className="text-center mb-14">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">How it Works</h2>
<p className="max-w-xl mx-auto text-base text-gray-400">
        Automate your workflow with IntegratelyX in just a few steps. No code or complexity—just seamless productivity.
      </p>
</div>
<ol className="relative flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-0">

<li className="step fade-up flex-1 flex flex-col items-center text-center focus:outline-none" tabindex="0">
<span aria-label="Connect Apps" className="step-icon flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 border-2 border-indigo-600/30 text-indigo-400 mb-4 transition-all">
<i className="w-6 h-6" data-lucide="plug"></i>
</span>
<span className="sr-only">Step 1</span>
<h3 className="text-lg font-semibold mb-1 tracking-tight">Connect Your Apps</h3>
<p className="text-gray-400 text-sm max-w-xs">
          Securely link your favorite tools—Slack, GitHub, Notion, and 400+ more.
        </p>
</li>

<div className="hidden md:block h-1 w-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full mx-1"></div>

<li className="step fade-up flex-1 flex flex-col items-center text-center focus:outline-none" tabindex="0">
<span aria-label="Design Flows" className="step-icon flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 border-2 border-purple-600/30 text-purple-400 mb-4 transition-all">
<i className="w-6 h-6" data-lucide="wand-2"></i>
</span>
<span className="sr-only">Step 2</span>
<h3 className="text-lg font-semibold mb-1 tracking-tight">Design Flows</h3>
<p className="text-gray-400 text-sm max-w-xs">
          Use our drag &amp; drop builder to create custom automations—no coding required.
        </p>
</li>
<div className="hidden md:block h-1 w-12 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full mx-1"></div>

<li className="step fade-up flex-1 flex flex-col items-center text-center focus:outline-none" tabindex="0">
<span aria-label="Deploy &amp; Automate" className="step-icon flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 border-2 border-green-600/30 text-green-400 mb-4 transition-all">
<i className="w-6 h-6" data-lucide="zap"></i>
</span>
<span className="sr-only">Step 3</span>
<h3 className="text-lg font-semibold mb-1 tracking-tight">Deploy &amp; Automate</h3>
<p className="text-gray-400 text-sm max-w-xs">
          Activate your flows and watch tasks run automatically—save hours every week.
        </p>
</li>
</ol>
<div className="flex justify-center mt-14">
<a className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 hover:scale-105 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500" href="#">
<i className="w-5 h-5" data-lucide="rocket"></i>
        Get Started in Minutes
      </a>
</div>
</section>


    </>
  );
}
