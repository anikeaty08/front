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
      

<div className="spline-container fixed top-0 left-0 w-full h-full -z-10 bg-black overflow-hidden">

<iframe className="absolute inset-0 scale-[1.15] origin-center object-cover opacity-90 transition-opacity duration-1000" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7" width="100%"></iframe>

<div className="absolute inset-0 pointer-events-none mix-blend-color" style={{backgroundColor: '#ff00e3', opacity: '0.85'}}></div>

<div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{backgroundColor: '#ff00e3', opacity: '0.3'}}></div>

<div className="absolute inset-0 pointer-events-none mix-blend-multiply" style={{background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.8) 85%, #000000 100%)'}}></div>

<div className="absolute inset-0 pointer-events-none" style={{boxShadow: 'inset 0 0 150px rgba(255, 0, 227, 0.25)'}}></div>
</div>

    </>
  );
}
