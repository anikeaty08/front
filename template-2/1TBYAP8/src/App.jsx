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



    // Background image entrance
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.getElementById('features-bg-image').classList.add('animated');
      }, 80);
      
      // Animate text elements
      gsap.to(".fade-up", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: {
          amount: 0.6,
          each: 0.15
        },
        delay: 0.15
      });
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
      

<section className="relative w-full min-h-[820px] bg-zinc-950 border-t border-zinc-800 py-24 px-4 flex items-center overflow-hidden">

<img alt="Landscape" className="bg-landscape" id="features-bg-image" loading="lazy" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80" />

<div className="bg-overlay"></div>

<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8 w-full">
<div>
<div className="fade-up uppercase tracking-widest text-zinc-300 text-xs font-light mb-2" style={{letterSpacing: `0.13em`}}>
          Why Choose Nordik
        </div>
<h2 className="fade-up text-3xl md:text-5xl font-light tracking-wide text-white mb-2" style={{letterSpacing: `0.06em`}}>
          Signature Features
        </h2>
<p className="fade-up text-zinc-200 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Every detail is designed for a seamless retreat. Experience comfort, adventure, and tranquility—redefined.
        </p>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

<div className="fade-up flex flex-col items-center bg-zinc-950/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-800 p-8 h-full transition hover:-translate-y-2 hover:shadow-2xl duration-200">
<div className="mb-5">
<img alt="Luxury Tents Icon" className="w-16 h-16 feature-icon rounded-xl bg-zinc-800/60 p-3" src="https://img.icons8.com/ios-filled/100/ffffff/camping-tent.png" />
</div>
<h3 className="text-xl font-light text-white mb-2 tracking-wide" style={{letterSpacing: `0.03em`}}>
            Luxury Tents
          </h3>
<p className="text-zinc-300 text-base font-light">
            Spacious, beautifully furnished tents with plush bedding, private decks, and panoramic views. Wake up to the sounds of nature in style.
          </p>
</div>

<div className="fade-up flex flex-col items-center bg-zinc-950/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-800 p-8 h-full transition hover:-translate-y-2 hover:shadow-2xl duration-200">
<div className="mb-5">
<img alt="Private Firepits Icon" className="w-16 h-16 feature-icon rounded-xl bg-zinc-800/60 p-3" src="https://img.icons8.com/ios-filled/100/ffffff/fire-element.png" />
</div>
<h3 className="text-xl font-light text-white mb-2 tracking-wide" style={{letterSpacing: `0.03em`}}>
            Private Firepits
          </h3>
<p className="text-zinc-300 text-base font-light">
            Enjoy your own firepit for cozy evenings under the stars—perfect for marshmallows, storytelling, and warming up after a day’s adventure.
          </p>
</div>

<div className="fade-up flex flex-col items-center bg-zinc-950/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-800 p-8 h-full transition hover:-translate-y-2 hover:shadow-2xl duration-200">
<div className="mb-5">
<img alt="Fast Wi-Fi Icon" className="w-16 h-16 feature-icon rounded-xl bg-zinc-800/60 p-3" src="https://img.icons8.com/ios-filled/100/ffffff/wi-fi.png" />
</div>
<h3 className="text-xl font-light text-white mb-2 tracking-wide" style={{letterSpacing: `0.03em`}}>
            Seamless Connectivity
          </h3>
<p className="text-zinc-300 text-base font-light">
            Stay connected with high-speed Wi-Fi at every site, so you can share moments or unplug on your terms—always by choice.
          </p>
</div>
</div>
<div className="fade-up mt-10">
<a className="inline-block bg-white text-black font-light text-base px-8 py-3 rounded-full shadow hover:bg-zinc-100 transition" href="#" style={{fontFamily: `'League Spartan',sans-serif`, fontWeight: `300`}}>
          Reserve Your Stay
        </a>
</div>
</div>
</section>


    </>
  );
}
