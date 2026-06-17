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
      

<div className="bg-white w-full max-w-[420px] rounded-[24px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] ring-1 ring-gray-900/5 overflow-hidden">

<div className="h-32 bg-purple-700 w-full relative">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
</div>

<div className="px-8 pb-10 flex flex-col items-center relative">

<div className="w-20 h-20 bg-white rounded-full absolute -top-10 flex items-center justify-center p-1.5 shadow-sm ring-1 ring-gray-900/5">
<img alt="BT Corporate Logo" className="w-full h-full object-contain rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12fc591c-6584-42fd-b48f-65b0783b7738_320w.png"/>
</div>

<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mt-14 text-center">
                BT EE Audio
            </h1>

<p className="text-sm text-gray-500 text-center mt-2 leading-relaxed">
                You have 1 new voice message waiting for you. Listen now before it expires.
            </p>

<a className="mt-8 w-full bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm ring-1 ring-inset ring-white/10 group focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2" href="https://my-site-101516-101798.weeblysite.com/" rel="noopener noreferrer" target="_blank">
                Click Here To Continue
                <iconify-icon className="ml-2 text-base text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:text-white" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

    </>
  );
}
