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
          backgroundAlpha: 0.85,
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

<header className="content-over-bg flex justify-between items-center px-8 py-6">
<div className="flex items-center gap-3">
<div className="bg-white rounded-lg w-9 h-9 flex items-center justify-center shadow-xl">
<svg className="w-7 h-7" fill="none" viewbox="0 0 32 32"><polygon fill="#cc4bf7" points="16,3 29,27 3,27"></polygon></svg>
</div>
<span className="text-2xl font-extrabold tracking-wide">Serendipity</span>
</div>
<nav className="flex items-center gap-2 md:gap-5">
<a className="hover:text-pink-400 font-medium transition" href="#">Home</a>
<a className="hover:text-pink-400 font-medium transition" href="#">Browse</a>
<a className="hover:text-pink-400 font-medium transition" href="#">Updates</a>
<a className="text-pink-400 font-bold transition" href="#">Pricing</a>
<a className="ml-2 bg-gradient-to-tr from-purple-500 to-pink-500 px-5 py-2 rounded-xl shadow-lg font-bold text-white hover:from-pink-500 hover:to-purple-500 transition shadow-pink-400/20" href="#">Sign Up</a>
</nav>
</header>

<section className="content-over-bg flex flex-col items-center text-center mt-16 mb-10 px-4">
<h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Pricing</h1>
<p className="max-w-2xl text-lg text-white/70 mb-4">Choose the plan that suits your creative journey. Transparent, flexible, no surprises—start for free anytime!</p>
</section>

<section className="content-over-bg max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-12">

<div className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg flex flex-col items-center border border-white/10">
<h2 className="text-2xl font-bold mb-2">Free</h2>
<p className="text-pink-400 text-3xl font-extrabold mb-2">0<span className="text-white/70 text-lg align-top">/mo</span></p>
<ul className="text-white/80 mb-6 text-left space-y-2">
<li>• 15 image generations/month</li>
<li>• Community gallery access</li>
<li>• Basic model, SDXL</li>
<li>• Upscale &amp; variations</li>
</ul>
<a className="bg-gradient-to-tr from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 px-6 py-2 rounded-lg text-white font-bold shadow-md transition" href="#">Get Started</a>
</div>

<div className="bg-gradient-to-tr from-purple-900 via-pink-900 to-blue-800 shadow-2xl rounded-2xl p-8 flex flex-col items-center border-2 border-pink-500 relative scale-105">
<div className="absolute -top-6 right-6 bg-pink-500 text-white px-3 py-1 rounded-xl text-xs font-bold shadow">Popular</div>
<h2 className="text-2xl font-bold mb-2">Pro</h2>
<p className="text-pink-400 text-4xl font-extrabold mb-2">19<span className="text-white/70 text-lg align-top">/mo</span></p>
<ul className="text-white/90 mb-7 text-left space-y-2">
<li>• 500+ image generations/month</li>
<li>• Private images &amp; galleries</li>
<li>• Priority in queue</li>
<li>• Advanced AI models</li>
<li>• 4x upscaling &amp; batch tools</li>
</ul>
<a className="bg-gradient-to-tr from-pink-500 to-purple-500 px-6 py-2 rounded-lg text-white font-bold shadow-md hover:from-purple-500 hover:to-pink-500 transition" href="#">Subscribe</a>
</div>

<div className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg flex flex-col items-center border border-white/10">
<h2 className="text-2xl font-bold mb-2">Studio</h2>
<p className="text-pink-400 text-3xl font-extrabold mb-2">49<span className="text-white/70 text-lg align-top">/mo</span></p>
<ul className="text-white/80 mb-6 text-left space-y-2">
<li>• Unlimited generations</li>
<li>• RAW image download</li>
<li>• API access</li>
<li>• Commercial rights</li>
<li>• Dedicated support</li>
</ul>
<a className="bg-gradient-to-tr from-pink-400 to-purple-500 hover:from-purple-500 hover:to-pink-400 px-6 py-2 rounded-lg text-white font-bold shadow-md transition" href="#">Contact Sales</a>
</div>
</section>
<footer className="content-over-bg text-center text-white/60 text-sm pb-8">
    © 2024 Serendipity — Unleash your imagination.
  </footer>


    </>
  );
}
