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
      
<div className="w-full max-w-sm bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/40 shadow-lg p-4">

<div className="flex items-center justify-between mb-6 animate-fade-in" style={{animationDelay: `0.1s`}}>
<h2 className="text-xl font-bold -tracking-tight text-gray-100">Course Progress</h2>
</div>

<div className="relative h-[150px] mb-6">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs font-bold text-gray-400">
<span className="animate-fade-in" style={{animationDelay: `0.3s`}}>100%</span>
<span className="animate-fade-in" style={{animationDelay: `0.4s`}}>50%</span>
<span className="animate-fade-in" style={{animationDelay: `0.5s`}}>0%</span>
</div>

<div className="absolute left-[55px] right-0 top-[6px] h-[126px] flex flex-col justify-between">
<div className="w-full h-px bg-gray-700/50 animate-fade-in" style={{animationDelay: `0.6s`}}></div>
<div className="w-full h-px bg-gray-700/50 animate-fade-in" style={{animationDelay: `0.7s`}}></div>
<div className="w-full h-px bg-gray-700/50 animate-fade-in" style={{animationDelay: `0.8s`}}></div>
</div>

<div className="absolute left-[55px] right-0 top-[6px] h-[126px]">

<div className="absolute inset-0 flex items-end justify-between">
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `63px`, animationDelay: `1.0s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `87px`, animationDelay: `1.1s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `51px`, animationDelay: `1.2s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `74px`, animationDelay: `1.3s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `45px`, animationDelay: `1.4s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `69px`, animationDelay: `1.5s`}}></div>
<div className="w-3 bg-purple-500 rounded-sm animate-grow-up" style={{'--final-height': `87px`, animationDelay: `1.6s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `57px`, animationDelay: `1.7s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `74px`, animationDelay: `1.8s`}}></div>
<div className="w-3 bg-gray-600 rounded-sm animate-grow-up" style={{'--final-height': `45px`, animationDelay: `1.9s`}}></div>
</div>

<svg className="absolute inset-0" preserveaspectratio="none" viewBox="0 0 220 126">
<path className="animate-draw-line" d="M10,80 L40,55 L70,95 L100,80 L130,100 L160,82 L190,50 L220,65" fill="none" stroke="#A855F7" strokeLinecap="round" strokeWidth="2" style={{animationDelay: `2.1s`}}></path>

<circle className="animate-pop-in" cx="10" cy="80" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `2.3s`}}></circle>
<circle className="animate-pop-in" cx="40" cy="55" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `2.4s`}}></circle>
<circle className="animate-pop-in" cx="70" cy="95" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `2.5s`}}></circle>
<circle className="animate-pop-in" cx="100" cy="80" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `2.6s`}}></circle>
<circle className="animate-pop-in" cx="130" cy="100" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `2.7s`}}></circle>
<circle className="animate-pop-in" cx="160" cy="82" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `2.8s`}}></circle>
<circle className="animate-pop-in" cx="190" cy="50" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `2.9s`}}></circle>
<circle className="animate-pop-in" cx="220" cy="65" fill="#1E293B" r="3" stroke="#A855F7" style={{animationDelay: `3.0s`}}></circle>
</svg>
</div>

<div className="absolute top-0 right-[80px] bg-gray-700/90 backdrop-blur-lg border border-gray-600/40 rounded-lg shadow-lg p-1 flex items-center gap-1 animate-fade-in" style={{animationDelay: `3.2s`}}>
<div className="w-5 h-5 flex items-center justify-center">
<svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="#A855F7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-100">5 lessons</p>
<p className="text-xs text-gray-300">CSS Animation Module</p>
</div>
</div>
</div>

<div className="flex items-center gap-2 mb-6 animate-fade-in" style={{animationDelay: `3.4s`}}>
<span className="text-xl font-bold text-gray-100">75%</span>
<p className="text-sm text-gray-300 leading-tight">
        You're completing lessons 75% 
        faster than the average student
      </p>
</div>

<button className="w-full gradient-button text-white font-bold py-2.5 px-4 rounded-lg shadow-lg transition-all animate-fade-in" style={{animationDelay: `3.6s`}}>
      Continue Learning
    </button>
</div>

    </>
  );
}
