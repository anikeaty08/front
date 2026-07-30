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
      
<div className="max-w-4xl mx-auto">
<h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Interactive Icon Components</h1>
<div className="flex flex-wrap gap-8 justify-center">

<div className="icon-component">
<div className="icon icon-solid"></div>
<div className="icon">
<div className="icon-logo">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#635BFF"></path>
<path d="M16 20H24M13 16L27 24M13 24L27 16" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="icon-label">Payments</div>
</div>

<div className="icon-component">
<div className="icon icon-solid"></div>
<div className="icon">
<div className="icon-logo">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#0A2540"></path>
<rect height="12" rx="2" stroke="white" strokeWidth="2" width="16" x="12" y="14"></rect>
<path d="M16 22H24" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<path d="M16 18H20" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="icon-label">Billing</div>
</div>

<div className="icon-component">
<div className="icon icon-solid"></div>
<div className="icon">
<div className="icon-logo">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#00D4FF"></path>
<path d="M14 16H26M14 20H26M14 24H20" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="icon-label">Connect</div>
</div>

<div className="icon-component">
<div className="icon icon-solid"></div>
<div className="icon">
<div className="icon-logo">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#ED5F74"></path>
<circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2"></circle>
<circle cx="20" cy="20" r="4" stroke="white" strokeWidth="2"></circle>
<circle cx="20" cy="20" fill="white" r="1"></circle>
</svg>
</div>
</div>
<div className="icon-label">Radar</div>
</div>

<div className="icon-component">
<div className="icon icon-solid"></div>
<div className="icon">
<div className="icon-logo">
<svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#74E4A2"></path>
<circle cx="20" cy="16" r="4" stroke="white" strokeWidth="2"></circle>
<path d="M12 28C12 24.6863 15.5817 22 20 22C24.4183 22 28 24.6863 28 28" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="icon-label">Identity</div>
</div>
</div>
</div>

    </>
  );
}
