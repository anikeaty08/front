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
      
<section className="py-20 px-4 flex flex-col items-center">
<div className="max-w-2xl mx-auto text-center mb-14">
<span className="inline-block mb-6 rounded-lg px-3 py-1 border border-white/20 bg-white/10">
<span className="uppercase tracking-widest text-xs font-bold text-blue-500" style={{letterSpacing: '0.1em'}}>
          Features
        </span>
</span>
<h2 className="headline mb-4 text-gray-900 font-normal">
        Unlock efficiency<br/>
        with <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-orange-400 bg-clip-text text-transparent font-normal">AI-powered tools</span>
</h2>
<p className="text-lg font-normal mb-4 text-gray-700">
        Discover how our platform accelerates your workflow at every stage.
      </p>
</div>
<div className="w-full max-w-5xl grid gap-8 md:grid-cols-3">

<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100 p-8 flex flex-col items-center hover:scale-105 transition">
<div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-300 flex items-center justify-center text-white text-2xl shadow-lg">

<svg className="h-8 w-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12L9 18m6 0l-6-6m6 6l6 6m-6-6l-6-6m6 6a9 9 0 110-18 9 9 0 010 18z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-gray-900" style={{fontFamily: '\'Clash Display\', sans-serif'}}>Generate Instantly</h3>
<p className="text-gray-700 text-base">
          Transform your ideas into interactive prototypes in seconds with AI-assisted generation.
        </p>
</div>

<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100 p-8 flex flex-col items-center hover:scale-105 transition">
<div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white text-2xl shadow-lg">

<svg className="h-8 w-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7V3m8 4V3m-4 4V3m4 18v-4m-8 4v-4m4 4v-4m-7.07-7.07a7 7 0 018.486 0l.07.07a7 7 0 010 9.9l-.07.07a7 7 0 01-8.486 0l-.07-.07a7 7 0 010-9.9l.07-.07z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-gray-900" style={{fontFamily: '\'Clash Display\', sans-serif'}}>Seamless Integration</h3>
<p className="text-gray-700 text-base">
          Easily connect with your favorite tools and platforms for a unified workflow.
        </p>
</div>

<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100 p-8 flex flex-col items-center hover:scale-105 transition">
<div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-pink-300 to-orange-400 flex items-center justify-center text-white text-2xl shadow-lg">

<svg className="h-8 w-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21V10M12 21V3m-8 18v-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-gray-900" style={{fontFamily: '\'Clash Display\', sans-serif'}}>Insights &amp; Analytics</h3>
<p className="text-gray-700 text-base">
          Monitor usage and performance with real-time analytics and actionable insights.
        </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block rounded-lg px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 hover:brightness-110 transition text-white font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200" href="/signup" style={{fontSize: '16px'}}>
        Start your free trial
      </a>
</div>
</section>

    </>
  );
}
