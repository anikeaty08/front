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
      
<div className="mx-auto max-w-[393px] w-full px-0 py-10 min-h-screen flex flex-col items-center justify-center">
<div className="w-full max-w-[390px] rounded-3xl shadow-xl bg-white border border-neutral-200">

<div className="w-full flex items-center justify-between px-8 pt-5 pb-2">
<span className="sf-bold text-2xl text-gray-900 tracking-tight">Settings</span>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
<svg fill="none" height="23" stroke="#23272e" strokeWidth="2" width="23"><path d="M6 6l11 11M6 17L17 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="w-full bg-white rounded-2xl mt-2 mb-4 p-0 px-0 pb-1">
<div className="text-[15px] px-6 pt-5 sf-bold text-gray-800 mb-0.5 select-none">Account</div>
<button className="flex w-full items-center justify-between px-6 py-3 bg-transparent hover:bg-gray-50 focus:bg-blue-50 text-[16px] text-gray-700 sf-regular select-none transition">
          Personal information
          <svg fill="none" height="19" stroke="#a1a1aa" strokeWidth="2" width="19"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="section-divider"></div>
<button className="flex w-full items-center justify-between px-6 py-3 bg-transparent hover:bg-gray-50 focus:bg-blue-50 text-[16px] text-gray-700 sf-regular select-none transition">
          Notifications
          <svg fill="none" height="19" stroke="#a1a1aa" strokeWidth="2" width="19"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="section-divider"></div>
<button className="flex w-full items-center justify-between px-6 py-3 bg-transparent hover:bg-gray-50 focus:bg-blue-50 text-[16px] text-gray-700 sf-regular select-none transition">
          Payments and payouts
          <svg fill="none" height="19" stroke="#a1a1aa" strokeWidth="2" width="19"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="section-divider"></div>
<button className="flex w-full items-center justify-between px-6 py-3 bg-transparent hover:bg-gray-50 focus:bg-blue-50 text-[16px] text-gray-700 sf-regular select-none transition">
          Privacy and sharing
          <svg fill="none" height="19" stroke="#a1a1aa" strokeWidth="2" width="19"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="w-full bg-white rounded-2xl my-4 p-0 px-0">
<div className="text-[15px] px-6 pt-5 sf-bold text-gray-800 mb-0.5 select-none">Preferences</div>
<div className="flex w-full items-center justify-between px-6 py-3">
<span className="text-gray-700 sf-regular text-[16px]">Dark Mode</span>
<input className="ios-toggle" disabled type="checkbox" />
</div>
<div className="section-divider"></div>
<div className="flex w-full items-center justify-between px-6 py-3">
<span className="text-gray-700 sf-regular text-[16px]">Newsletter</span>
<input className="ios-toggle" type="checkbox" />
</div>
<div className="section-divider"></div>
<div className="flex w-full items-center justify-between px-6 py-3">
<span className="text-gray-700 sf-regular text-[16px]">Auto updates</span>
<input checked className="ios-toggle" type="checkbox" />
</div>
</div>

<div className="w-full bg-white rounded-2xl my-4 p-0 px-0">
<div className="text-[15px] px-6 pt-5 sf-bold text-gray-800 select-none mb-0.5">Support</div>
<button className="w-full text-left px-6 py-3 hover:bg-gray-50 focus:bg-blue-50 transition">
<div>
<div className="sf-semi text-[15px] text-gray-900 leading-tight mb-0.5">Safety Center</div>
<span className="sf-regular text-[14px] text-gray-500 leading-5">Get the support, tools & info you need to be safe.</span>
</div>
<svg className="float-right -mt-6" fill="none" height="19" stroke="#a1a1aa" strokeWidth="2" width="19"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="section-divider"></div>
<button className="w-full text-left px-6 py-3 hover:bg-gray-50 focus:bg-blue-50 transition">
<div>
<div className="sf-semi text-[15px] text-gray-900 leading-tight mb-0.5">Contact Support</div>
<span className="sf-regular text-[14px] text-gray-500 leading-5">Let our team know about your concerns.</span>
</div>
<svg className="float-right -mt-6" fill="none" height="19" stroke="#a1a1aa" strokeWidth="2" width="19"><path d="M7 5l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="w-full bg-white rounded-2xl mt-4 mb-6 p-0 px-0">
<div className="text-[15px] px-6 pt-5 sf-bold text-gray-800 mb-0.5 select-none">About</div>
<div className="flex justify-between items-center px-6 py-3 sf-regular text-[15px] text-gray-600">
<span>Version</span>
<span>1.0.4</span>
</div>
<div className="section-divider"></div>
<div className="flex justify-between items-center px-6 py-3 sf-regular text-[15px]">
<a className="ios-link" href="#">Help Center</a>
<svg fill="none" height="17" stroke="#a1a1aa" strokeWidth="2" width="17"><path d="M6 5l5 3.5-5 3.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="section-divider"></div>
<div className="flex justify-between items-center px-6 py-3 sf-regular text-[15px]">
<a className="ios-link" href="#">Terms of Service</a>
<svg fill="none" height="17" stroke="#a1a1aa" strokeWidth="2" width="17"><path d="M6 5l5 3.5-5 3.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>

<div className="w-full px-8 pb-8 pt-2">
<button className="w-full py-3 rounded-xl bg-gray-200 text-red-600 font-semibold hover:bg-red-100 focus:outline-none transition sf-semi">Log out</button>
</div>
</div>
</div>

    </>
  );
}
