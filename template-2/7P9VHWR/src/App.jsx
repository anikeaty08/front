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
      
<section className="relative w-full max-w-3xl mx-auto bg-gradient-to-b from-[#172554]/90 via-[#13151A]/95 to-[#090A0D]/95 border border-[#24304b] rounded-2xl shadow-2xl ring-glow shine overflow-hidden py-14 px-6 md:px-14 z-10">
<div className="absolute top-0 left-0 w-full h-1.5 gradient-bar"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<span className="inline-flex items-center px-3 py-1 bg-blue-700/10 text-blue-400 font-semibold text-xs rounded-full mb-4 pulse-animation">
<svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>
        ABOUT
      </span>
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 drop-shadow-lg mb-5">
        Built for teams who care about impact
      </h2>
<p className="text-base md:text-lg text-slate-300 max-w-2xl mb-8">
        At Linear, we believe in making software development as frictionless and enjoyable as possible. Our mission is to empower teams to build better products, faster—by providing tools that are beautiful, blazingly fast, and designed for focus.
      </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-8">

<div className="flex-shrink-0 mb-6 md:mb-0">
<img alt="Team" className="w-28 h-28 rounded-2xl shadow-lg border-2 border-blue-700/30 object-cover bg-[#151725]/70" src="https://avatars.githubusercontent.com/u/715145?s=200&v=4" />
</div>

<div className="text-left md:text-left max-w-md">
<h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center">
<svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
            Our story
          </h3>
<p className="text-slate-400 text-sm mb-5">
            Founded by product people and engineers, Linear started as a response to the frustrating tools we used every day. Today, we’re a fully remote company committed to quality, transparency, and thoughtful design.
          </p>
<ul className="space-y-3">
<li className="flex items-center text-slate-300 text-sm">
<span className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-animation"></span>
              Remote-first & global
            </li>
<li className="flex items-center text-slate-300 text-sm">
<span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Passionate about design and engineering
            </li>
<li className="flex items-center text-slate-300 text-sm">
<span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
              Focused on customer success
            </li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col items-center">
<a className="inline-block px-7 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 hover:from-blue-700 hover:to-indigo-500 text-white font-bold rounded-lg text-base shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200" href="#">
          Meet the team
        </a>
<span className="mt-4 text-xs text-slate-400 text-center">Want to join us? <a className="text-blue-300 underline hover:text-blue-400" href="#">We're hiring</a></span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 gradient-bar"></div>
</section>

    </>
  );
}
