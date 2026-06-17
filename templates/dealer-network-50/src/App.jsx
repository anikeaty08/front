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
      
<div className="iphone-mockup flex flex-col">
<div className="notch"></div>

<div className="status-bar text-sm py-4">
<div>9:41</div>
<div className="flex gap-2">
<svg fill="none" height="16" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28Z" fill="black"></path>
</svg>
<svg fill="none" height="16" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5H7V7H17V5Z" fill="black"></path>
<path d="M17 9H7V11H17V9Z" fill="black"></path>
</svg>
</div>
</div>

<div className="px-6 pt-2 pb-6 flex flex-col items-center flex-grow page-content overflow-y-auto">

<div className="orbit mb-6 mt-2">
<div className="orbit-circle orbit-1"></div>
<div className="orbit-circle orbit-2"></div>
<div className="orbit-circle orbit-3"></div>
<div className="orbit-circle orbit-4"></div>

<div className="main-btn">
<iconify-icon height="48" icon="solar:bolt-linear" style={{color: 'white'}} width="48"></iconify-icon>
</div>

<div className="orbital-element orbital-1">
<div className="orbital-item">
<iconify-icon height="22" icon="solar:lightbulb-linear" width="22"></iconify-icon>
</div>
</div>
<div className="orbital-element orbital-2">
<div className="orbital-item">
<iconify-icon height="22" icon="solar:plug-circle-linear" width="22"></iconify-icon>
</div>
</div>
<div className="orbital-element orbital-3">
<div className="orbital-item">
<iconify-icon height="22" icon="solar:box-linear" width="22"></iconify-icon>
</div>
</div>
<div className="orbital-element orbital-4">
<div className="orbital-item">
<iconify-icon height="22" icon="solar:gift-linear" width="22"></iconify-icon>
</div>
</div>
<div className="orbital-element orbital-5">
<div className="orbital-item">
<iconify-icon height="22" icon="solar:user-id-linear" width="22"></iconify-icon>
</div>
</div>
<div className="orbital-element orbital-6">
<div className="orbital-item">
<iconify-icon height="22" icon="solar:wrench-linear" width="22"></iconify-icon>
</div>
</div>
<div className="orbital-element orbital-7">
<div className="orbital-item">
<iconify-icon height="22" icon="solar:routing-2-linear" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col flex-grow justify-end w-full pb-4">
<h1 className="space-grotesk text-3xl font-semibold tracking-tight text-center mb-3 leading-tight text-gray-900 title-anim">Welcome to JIVAH</h1>
<p className="text-sm text-center text-gray-600 mb-8 px-2 leading-relaxed desc-anim">
<strong className="font-semibold text-gray-900 block mb-1">Powering your life.</strong>
          Join our dealer network to manage schemes, redeem rewards, book service requests, and access our premium electrical catalog.
        </p>

<button className="w-full bg-[#1732a4] text-white text-sm py-4 px-6 rounded-full font-medium mb-4 shadow-lg hover:bg-blue-800 active:scale-95 transition-all cursor-pointer btn-anim" onclick="alert('Navigating to Dealer Registration...')">
          JOIN AS DEALER
        </button>

<p className="text-xs text-gray-500 text-center max-w-xs mx-auto mb-2 privacy-anim">
          Learn about our dealer terms, KYC verification, and points redemption policies.
        </p>
</div>
</div>

<div className="absolute bottom-2 left-0 right-0 flex justify-center">
<div className="home-indicator"></div>
</div>
</div>

    </>
  );
}
