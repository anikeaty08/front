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
      
<section className="mt-16 mb-10 mx-auto max-w-4xl text-center px-4">
<h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">What our users say</h1>
<p className="max-w-2xl text-lg text-white/80 mx-auto">Creators around the world love Serendipity. Hear from our happy community.</p>
</section>
<section className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3 mb-16">
<div className="bg-white/10 rounded-xl p-7 shadow-xl flex flex-col items-center border border-white/10 hover:scale-105 transition">
<img alt="Amelia Artist" className="w-16 h-16 rounded-full border-2 border-pink-400 shadow mb-4" src="https://randomuser.me/api/portraits/women/86.jpg" />
<div className="text-xl font-bold mb-1">Amelia Artist</div>
<div className="text-sm text-pink-400 font-semibold mb-3">Illustrator</div>
<p className="text-white/90 italic mb-1">“Serendipity unlocked my creativity. The quality and speed are just astonishing!”</p>
</div>
<div className="bg-white/10 rounded-xl p-7 shadow-xl flex flex-col items-center border border-white/10 hover:scale-105 transition">
<img alt="Ben Creator" className="w-16 h-16 rounded-full border-2 border-blue-400 shadow mb-4" src="https://randomuser.me/api/portraits/men/61.jpg" />
<div className="text-xl font-bold mb-1">Ben Creator</div>
<div className="text-sm text-blue-400 font-semibold mb-3">Designer</div>
<p className="text-white/90 italic mb-1">“The AI features are so intuitive. I finished a month’s work in days. Incredible.”</p>
</div>
<div className="bg-white/10 rounded-xl p-7 shadow-xl flex flex-col items-center border border-white/10 hover:scale-105 transition">
<img alt="Sophie Pixel" className="w-16 h-16 rounded-full border-2 border-purple-400 shadow mb-4" src="https://randomuser.me/api/portraits/women/55.jpg" />
<div className="text-xl font-bold mb-1">Sophie Pixel</div>
<div className="text-sm text-purple-300 font-semibold mb-3">Photographer</div>
<p className="text-white/90 italic mb-1">“I’ve never seen better upscaling and generative results. The whole experience inspires me every day.”</p>
</div>
</section>
<footer className="text-center text-white/60 text-sm pb-8 mt-auto">
    © 2024 Serendipity — Unleash your imagination.
  </footer>

    </>
  );
}
