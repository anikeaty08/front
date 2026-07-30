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



        function toggleNotifications() {
            const card = document.getElementById('notifications-card');
            card.classList.toggle('hidden');
            if (!card.classList.contains('hidden')) {
                card.classList.add('blur-fade-in');
            }
        }
    
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
      

<button className="fixed top-6 right-6 bg-white hover:bg-gray-50 text-gray-800 rounded-full p-2.5 shadow-lg z-50 transition-all duration-200" onClick={(e) => { toggleNotifications() }}>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
</svg>
</button>

<div className="fixed top-20 right-6 w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out" id="notifications-card">

<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">Notifications</h3>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                    Mark all as read
                </button>
<button className="text-gray-400 hover:text-gray-600" onClick={(e) => { toggleNotifications() }}>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>

<div className="divide-y divide-gray-100 max-h-[60vh] overflow-y-auto">

<div className="px-6 py-5 bg-blue-50 hover:bg-blue-50/80 transition-colors">
<div className="flex">
<div className="flex-shrink-0 mr-4">
<div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
<svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
</svg>
</div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-gray-900">New sign-in detected</p>
<p className="text-sm text-gray-600 mt-1.5">We detected a new sign-in to your account from Chrome on macOS.</p>
</div>
<div className="ml-4 flex-shrink-0">
<span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
</div>
</div>
<div className="mt-2.5">
<span className="text-xs text-gray-500">2 minutes ago</span>
</div>
</div>
</div>
</div>

<div className="px-6 py-5 hover:bg-gray-50 transition-colors">
<div className="flex">
<div className="flex-shrink-0 mr-4">
<div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
<svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Payment succeeded</p>
<p className="text-sm text-gray-600 mt-1.5">Your payment of $48.00 has been successfully processed for your Pro subscription.</p>
</div>
</div>
<div className="mt-2.5">
<span className="text-xs text-gray-500">Yesterday at 4:30 PM</span>
</div>
</div>
</div>
</div>

<div className="px-6 py-5 hover:bg-gray-50 transition-colors">
<div className="flex">
<div className="flex-shrink-0 mr-4">
<div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
<svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fillRule="evenodd"></path>
</svg>
</div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Security update</p>
<p className="text-sm text-gray-600 mt-1.5">Your account password has been updated. All active sessions have been maintained.</p>
</div>
</div>
<div className="mt-2.5">
<span className="text-xs text-gray-500">3 days ago</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 bg-gray-50 text-center border-t border-gray-100">
<button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                View all notifications
            </button>
</div>
</div>

    </>
  );
}
