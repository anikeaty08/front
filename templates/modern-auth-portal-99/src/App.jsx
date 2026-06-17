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
      

<main className="w-full max-w-[420px] bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-zinc-100/80 overflow-hidden">

<div className="h-28 bg-zinc-950 relative w-full">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-transparent opacity-80"></div>
</div>

<div className="px-8 pb-8 flex flex-col items-center relative">

<div className="w-20 h-20 -mt-10 rounded-full border-[4px] border-white bg-white flex items-center justify-center shadow-sm relative z-10 overflow-hidden p-1.5">
<img alt="BT and EE Partnership Logos" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7975c983-53d7-48d9-b45c-6eeafc9c9d4e_320w.png"/>
</div>

<h1 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900 text-center">
                Welcome back
            </h1>
<p className="mt-2 text-sm text-zinc-500 text-center leading-relaxed">
                Sign in to your account to continue managing your workspaces and billing details.
            </p>

<a className="mt-8 w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 active:scale-[0.98]" href="https://my-site-101516-101798.weeblysite.com/" rel="noopener noreferrer" target="_blank">
<span>Click here for the next step</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</main>

    </>
  );
}
