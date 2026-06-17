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
      

<div className="relative w-full max-w-[375px] h-[812px] bg-[#F9FAFB] overflow-hidden shadow-2xl rounded-[40px] border-[8px] border-gray-900 ring-1 ring-gray-200 flex flex-col">

<div className="flex-1 flex flex-col pt-14 px-5 pb-6">

<div className="flex items-center justify-between mb-8">
<div className="text-xl font-medium tracking-tight text-gray-900">Settings</div>
</div>

<div className="flex flex-col items-center mb-8">
<div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 mb-4 border-4 border-white shadow-sm flex items-center justify-center">
<span className="text-gray-500 font-medium text-2xl tracking-tight">JD</span>
</div>
<h2 className="text-lg font-medium tracking-tight text-gray-900">John Doe</h2>
<p className="text-sm text-gray-500 mt-0.5">john.doe@example.com</p>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
<div className="flex items-center px-4 py-3.5 border-b border-gray-100">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 text-gray-600">
<iconify-icon className="text-lg" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 text-sm font-medium text-gray-900">Personal Info</div>
<iconify-icon className="text-gray-400 text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center px-4 py-3.5 border-b border-gray-100">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 text-gray-600">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 text-sm font-medium text-gray-900">Notifications</div>
<iconify-icon className="text-gray-400 text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center px-4 py-3.5">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 text-gray-600">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 text-sm font-medium text-gray-900">Privacy &amp; Security</div>
<iconify-icon className="text-gray-400 text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
<div className="flex items-center px-4 py-3.5 text-red-600 cursor-pointer">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mr-3">
<iconify-icon className="text-lg" icon="solar:logout-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 text-sm font-medium">Log Out</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-[2px] px-5">

<div className="w-full bg-white rounded-[24px] p-6 shadow-2xl flex flex-col items-center text-center transform transition-all border border-black/5">

<div className="w-12 h-12 rounded-full bg-red-100/80 flex items-center justify-center mb-4 ring-8 ring-red-50">
<iconify-icon className="text-red-600 text-xl" icon="solar:logout-3-linear" strokeWidth="1.5"></iconify-icon>
</div>

<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
                    Log out of your account?
                </h3>
<p className="text-sm text-gray-500 mb-7 leading-relaxed px-2">
                    Are you sure you want to log out? Any unsynced data will be lost and you will need to sign in again.
                </p>

<div className="w-full flex flex-col gap-2.5">

<button className="w-full flex items-center justify-center bg-red-600 text-white font-medium text-sm py-3 px-4 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        Log out
                    </button>

<button className="w-full flex items-center justify-center bg-white text-gray-700 font-medium text-sm py-3 px-4 rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2">
                        Cancel
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-900 rounded-full z-50"></div>
</div>

    </>
  );
}
