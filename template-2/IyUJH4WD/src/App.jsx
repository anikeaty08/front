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
      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">

<div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800 lg:border-l dark:border-neutral-800 lg:border-b dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M5 7l5 5-5 5"></path><path d="M12 19h7"></path></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">Built for creators</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        Whether you're coding, designing, or dreaming big — we built this with you in mind.
      </p>
</div>

<div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800 lg:border-b dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M7 16c0-2 2-6 5-6s5 4 5 6"></path><path d="M7 8c0 2 2 6 5 6s5-4 5-6"></path></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">Intuitive by design</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        Simple to start, powerful as you grow. No manual needed.
      </p>
</div>

<div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800 lg:border-b dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M12 19V5"></path><path d="M17 7c0-2.761-2.239-5-5-5s-5 2.239-5 5c0 2.761 2.239 5 5 5s5 2.239 5 5c0 2.761-2.239 5-5 5s-5-2.239-5-5"></path></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">Transparent pricing</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        Straightforward pricing. No surprises, no hidden fees, no credit card to explore.
      </p>
</div>

<div className="flex flex-col py-10 relative group dark:border-neutral-800 lg:border-b dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M7 16a4 4 0 1 1 4-4h1a5 5 0 1 1 9 1.5A5.001 5.001 0 0 1 17 21H6a5 5 0 0 1 1-9.9A4 4 0 0 1 7 16z"></path></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">Reliability you can count on</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        Our systems are engineered for 99.99% uptime — and we take that seriously.
      </p>
</div>

<div className="flex flex-col lg:border-l lg:border-r py-10 relative group dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M19 11h-6a2 2 0 0 1-2-2V4"></path><path d="M16 8l-3-3-3 3"></path><circle cx="19" cy="19" r="2"></circle><circle cx="5" cy="5" r="2"></circle></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">Flexible user access</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        Invite your team, share safely, and manage permissions without limitations.
      </p>
</div>

<div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="9"></circle><path d="M10 10a2 2 0 1 1 4 0c0 2-1.5 2.5-2.5 3"></path><rect height="1" rx=".5" width="1" x="11.5" y="17"></rect></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">Support that never sleeps</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        Real humans, real help — available 24/7. Or ask our AI assistant anytime.
      </p>
</div>

<div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M6 10V4m0 0h3m-3 0H3"></path><path d="M18 14v-6m0 0h3m-3 0h-3"></path><path d="M6 20v-4m0 0h3m-3 0H3"></path><path d="M13 21l6-9h-6l6-9"></path></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">Risk-free guarantee</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        Not satisfied? We’ll make it right or refund you. No hard feelings.
      </p>
</div>

<div className="flex flex-col py-10 relative group dark:border-neutral-800">
<div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">

<svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M12 21s-8-6.7-8-11.5A4.5 4.5 0 0 1 12 4.5A4.5 4.5 0 0 1 20 9.5C20 14.3 12 21 12 21z"></path></svg>
</div>
<div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200 origin-center"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">So much more</span>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        From tiny features to powerful integrations — we’ve got a lot we haven’t bragged about yet.
      </p>
</div>
</div>

    </>
  );
}
