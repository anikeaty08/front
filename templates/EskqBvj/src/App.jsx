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



    let vantaEffect = null;
    window.addEventListener('DOMContentLoaded', () => {
      if (!vantaEffect) {
        vantaEffect = VANTA.BIRDS({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundAlpha: 0.8,
          color1: 0xcc4bf7,
          color2: 0x4167d7,
          colorMode: "lerp",
          birdSize: 0.7,
          wingSpan: 14.0,
          separation: 42,
          quantity: 4,
          alignment: 25.00,
          cohesion: 7.00,
          backgroundColor: 0x181729
        })
      }
    });
  
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
      
<div id="vanta-bg"></div>
<section className="content-over-bg max-w-6xl mx-auto px-4 pt-16 pb-8">
<h2 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">Meet the Team</h2>
<div className="grid gap-10 md:grid-cols-3">

<div className="bg-white/10 backdrop-blur rounded-2xl p-7 shadow-xl flex flex-col items-center border border-white/10 hover:scale-105 transition">
<img alt="Alex Kim" className="w-20 h-20 rounded-full border-2 border-pink-400 shadow mb-5" src="https://randomuser.me/api/portraits/men/46.jpg"/>
<div className="text-2xl font-bold mb-1">Alex Kim</div>
<div className="text-sm text-pink-400 font-medium mb-3">Product Lead</div>
<p className="text-white/80 text-center mb-2">Brings big ideas to life. Loves animated interfaces, doodling, and matcha.</p>
</div>

<div className="bg-white/10 backdrop-blur rounded-2xl p-7 shadow-xl flex flex-col items-center border border-white/10 hover:scale-105 transition">
<img alt="Jamie Rivera" className="w-20 h-20 rounded-full border-2 border-blue-400 shadow mb-5" src="https://randomuser.me/api/portraits/women/34.jpg"/>
<div className="text-2xl font-bold mb-1">Jamie Rivera</div>
<div className="text-sm text-blue-400 font-medium mb-3">Lead Engineer</div>
<p className="text-white/80 text-center mb-2">Framework enthusiast and code wizard. Hikes mountains and explores new AI models.</p>
</div>

<div className="bg-white/10 backdrop-blur rounded-2xl p-7 shadow-xl flex flex-col items-center border border-white/10 hover:scale-105 transition">
<img alt="Taylor Singh" className="w-20 h-20 rounded-full border-2 border-purple-400 shadow mb-5" src="https://randomuser.me/api/portraits/men/75.jpg"/>
<div className="text-2xl font-bold mb-1">Taylor Singh</div>
<div className="text-sm text-purple-400 font-medium mb-3">Community Manager</div>
<p className="text-white/80 text-center mb-2">Connects creators worldwide. Collector of digital art, and puns.</p>
</div>
</div>
</section>
<footer className="content-over-bg border-t border-white/10 mt-10 pt-8 pb-6 bg-gradient-to-b from-white/5 to-transparent">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
<div className="flex items-center gap-3">
<div className="bg-white rounded-lg w-8 h-8 flex items-center justify-center shadow-lg">
<svg className="w-6 h-6" fill="none" viewbox="0 0 32 32"><polygon fill="#cc4bf7" points="16,3 29,27 3,27"></polygon></svg>
</div>
<span className="text-lg font-extrabold tracking-wide">Serendipity</span>
</div>
<nav className="flex gap-5 text-white/70 text-sm">
<a className="hover:text-pink-400" href="#">Home</a>
<a className="hover:text-pink-400" href="#">Browse</a>
<a className="hover:text-pink-400" href="#">Updates</a>
<a className="hover:text-pink-400" href="#">Pricing</a>
</nav>
<span className="text-xs text-white/50">© 2024 Serendipity — Unleash your imagination.</span>
</div>
</footer>


    </>
  );
}
