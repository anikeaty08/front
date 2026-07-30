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



  window.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    // Staggered fade-in
    document.querySelectorAll('[data-animate]').forEach((el, idx) => {
      el.style.opacity = 0;
      el.style.animation = `fadeInUp .7s cubic-bezier(.4,0,.2,1) forwards`;
      el.style.animationDelay = `${idx * 0.1}s`;
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
      <div className="video-background-container fixed top-0 w-full h-screen -z-10"><video autoPlay className="w-full h-full object-cover" id="aura-video" loop muted playsInline src="https://cdn.midjourney.com/video/97467a22-a69b-4e04-8a75-7a2be32b4dc6/2.mp4"></video></div>

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-40 -left-56 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/70 to-transparent rounded-full blur-3xl"></div>
<div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-gradient-to-br from-fuchsia-200/60 to-transparent rounded-full blur-2xl"></div>
<div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/60 to-transparent rounded-full blur-3xl"></div>
<div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/60 to-transparent rounded-full blur-3xl"></div>
</div>

<main className="relative z-10 max-w-3xl px-6 text-center space-y-8">


<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight" data-animate="" style={{animationDelay: `.1s`}}>
      Build faster.<br className="sm:hidden" /> Ship smarter.
    </h1>

<p className="mx-auto max-w-xl text-lg sm:text-xl font-medium" data-animate="" style={{animationDelay: `.2s`}}>
      Vertex gives modern teams the tools to prototype, collaborate and launch in record time — without the busywork.
    </p>

<div className="flex flex-col sm:flex-row gap-4 items-center justify-center" data-animate="" style={{animationDelay: `.3s`}}>
<a className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-gray-900 text-white shadow hover:bg-gray-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800" href="#">
        
        Get started
      </a>
<a className="inline-flex items-center gap-2 ring-1 ring-gray-300 hover:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 text-base font-semibold text-gray-900 bg-neutral-50 rounded-lg pt-3 pr-6 pb-3 pl-6" href="#" id="aura-emd6ie5gs">
        
        Watch demo
      </a>
</div>

<p className="mx-auto max-w-lg text-sm sm:text-base text-gray-600" data-animate="" style={{animationDelay: `.4s`}}>
      No credit card required. Cancel anytime. Available on web, iOS and Android.
    </p>
</main>


    </>
  );
}
