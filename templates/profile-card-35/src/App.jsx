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



        lucide.createIcons();
    
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
      

<div className="flex flex-col items-center w-full max-w-sm">

<div className="relative w-full bg-neutral-100 rounded-3xl shadow-lg p-8 border border-neutral-200 overflow-hidden">

<div className="absolute top-6 left-6 text-neutral-400 font-mono text-sm select-none">[u]</div>

<div className="flex justify-center mt-6 mb-10">
<div className="relative w-64 h-64 rounded-full shadow-xl flex items-center justify-center group cursor-pointer">

<div className="absolute inset-0 rounded-full cd-gradient opacity-90 shadow-inner"></div>

<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-black/10 pointer-events-none"></div>

<div className="absolute inset-0 rounded-full border-[0.5px] border-white/20"></div>


<div className="absolute w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center shadow-2xl z-10">

<div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center border-2 border-white/50 shadow-sm">

<div className="w-6 h-6 bg-neutral-400/30 rounded-full border border-neutral-400/50 shadow-inner backdrop-blur-sm"></div>
</div>
</div>

<div className="absolute inset-0 rounded-full transition-transform duration-1000 ease-out group-hover:rotate-12"></div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="flex items-center gap-3">

<img alt="User Avatar" className="w-7 h-7 rounded-full object-cover ring-2 ring-neutral-100 grayscale-[0.1]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=100&amp;h=100&amp;q=80"/>

<h2 className="text-xl font-medium text-neutral-900 tracking-tight">alexsmith123</h2>
</div>

<p className="text-base text-neutral-400 font-normal">Joined 10.10.2025</p>
</div>
</div>

<button className="mt-8 text-base font-semibold text-neutral-900 hover:text-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-200 rounded-lg px-4 py-2">
            Edit profile
        </button>
</div>


    </>
  );
}
