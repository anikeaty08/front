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
      
<div className="fixed top-0 left-0 w-full aurora-container" style={{height: '200px'}}>

<div className="absolute top-0 left-0 aurora-layer w-full opacity-70" style={{height: '80px', filter: 'blur(20px)'}}></div>
<div className="absolute left-0 aurora-layer w-full opacity-80" style={{top: '30px', height: '60px', filter: 'blur(15px)'}}></div>
<div className="absolute left-0 aurora-layer w-full opacity-60" style={{top: '60px', height: '50px', filter: 'blur(25px)'}}></div>

<div className="absolute left-0 w-full opacity-50" style={{top: '90px', height: '40px', background: 'linear-gradient(90deg, transparent 0%, rgba(255, 148, 180, 0.8) 50%, transparent 100%)', filter: 'blur(12px)', animation: 'aurora-flow 6s ease-in-out infinite'}}></div>
<div className="absolute left-0 w-full opacity-40" style={{top: '120px', height: '35px', background: 'linear-gradient(-90deg, transparent 0%, rgba(58, 41, 255, 0.9) 50%, transparent 100%)', filter: 'blur(15px)', animation: 'aurora-flow 8s ease-in-out infinite reverse'}}></div>


<div className="absolute top-0 left-0 w-full opacity-40" style={{height: '70px', background: 'linear-gradient(300deg, transparent 0%, rgba(58, 41, 255, 0.5) 30%, rgba(255, 148, 180, 0.4) 70%, transparent 100%)', filter: 'blur(30px)', animation: 'aurora-wave 16s ease-in-out infinite'}}></div>
</div>

    </>
  );
}
