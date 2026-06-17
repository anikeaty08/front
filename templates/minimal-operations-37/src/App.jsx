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
      
<main className="max-w-[600px] mx-auto px-6 pt-16 pb-24 w-full text-base font-normal">
<div className="mb-16">
<div className="flex justify-between items-baseline mb-6">
<div className="tracking-tight">JP COMMAND</div>
<a className="text-sm text-gray-400 hover:text-gray-800 transition-colors" href="#">Notes</a>
</div>
<p>You are the bottleneck.</p>
</div>
<div className="mb-16">
<p className="mb-6">Everything runs through your inbox.</p>
<p>It breaks at scale.</p>
</div>
<div className="mb-16">
<p className="mb-6">Decisions slow</p>
<p className="mb-6">Ownership blurs</p>
<p className="mb-6">Control erodes</p>
<p>The system depends on you.</p>
</div>
<div className="mb-16">
<p>I remove you as a point of failure.</p>
</div>
<div className="mb-16">
<p className="mb-6">No new tools</p>
<p className="mb-6">No change in habits</p>
<p>Runs in Outlook or Gmail</p>
</div>
<div className="mb-16">
<p className="mb-6">Decisions move without you</p>
<p className="mb-6">Clear ownership</p>
<p className="mb-6">No lost information</p>
<p>Control without involvement</p>
</div>
<div>
<p className="mb-6">If it does not work, I continue until it does.</p>
<p>
<a className="hover:underline" href="#">Request diagnostic</a>
</p>
</div>
</main>

    </>
  );
}
