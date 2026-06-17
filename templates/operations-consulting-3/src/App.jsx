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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<main className="max-w-[700px] mx-auto px-6 w-full">
<h1 className="pt-24 mb-8 text-sm font-medium tracking-tight text-black/60 uppercase">JP COMMAND</h1>
<section className="min-h-[75dvh] flex flex-col justify-center">
<div className="text-lg md:text-xl font-normal space-y-2">
<p>Email is your operating system.</p>
<p>It is failing.</p>
</div>
</section>
<section className="min-h-[100dvh] flex flex-col justify-center">
<h2 className="text-base font-medium mb-12">Problem</h2>
<div className="text-lg md:text-xl font-normal space-y-3">
<p className="mb-8">At scale:</p>
<p>Delayed decisions</p>
<p>No visibility</p>
<p>Partner overload</p>
</div>
</section>
<section className="min-h-[100dvh] flex flex-col justify-center">
<h2 className="text-base font-medium mb-12">Intervention</h2>
<div className="text-lg md:text-xl font-normal space-y-3">
<p className="mb-8">We redesign your operating system.</p>
<p>Structure</p>
<p>Ownership</p>
<p>Stable workflows</p>
</div>
</section>
<section className="min-h-[100dvh] flex flex-col justify-center">
<h2 className="text-base font-medium mb-12">Result</h2>
<div className="text-lg md:text-xl font-normal space-y-3">
<p>Decisions on time</p>
<p>Full visibility</p>
<p>Partners out of operations</p>
</div>
</section>
<section className="min-h-[100dvh] flex flex-col justify-center">
<h2 className="text-base font-medium mb-12">Engagement</h2>
<div className="text-lg md:text-xl font-normal space-y-3">
<p>Fixed in 5 days.</p>
<p>If not, we continue until it is.</p>
</div>
</section>
<section className="min-h-[100dvh] flex flex-col justify-center items-start">
<a className="text-lg md:text-xl font-medium hover:opacity-50 cursor-pointer" href="#">
                Request access
            </a>
</section>
</main>

    </>
  );
}
