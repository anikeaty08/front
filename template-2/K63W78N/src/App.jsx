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
      
<div className="relative z-10 max-w-4xl mx-auto px-6">
<div className="glass-effect rounded-3xl p-12 text-center shadow-2xl slide-animate">
<h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Dynamic Gradient
            </h1>
<p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the mesmerizing flow of colors as they dance across your screen in perfect harmony.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white/20 hover:bg-white/30 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30">
                    Get Started
                </button>
<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full border-2 border-white/50 transition-all duration-300">
                    Learn More
                </button>
</div>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-effect rounded-2xl p-6 text-center slide-animate">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
<p className="text-white/80 text-sm">Optimized performance for smooth animations</p>
</div>
<div className="glass-effect rounded-2xl p-6 text-center slide-animate">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-white font-semibold mb-2">Responsive Design</h3>
<p className="text-white/80 text-sm">Beautiful on every device and screen size</p>
</div>
<div className="glass-effect rounded-2xl p-6 text-center slide-animate">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-white font-semibold mb-2">Made with Love</h3>
<p className="text-white/80 text-sm">Crafted with attention to every detail</p>
</div>
</div>
</div>

    </>
  );
}
