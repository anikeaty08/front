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



        // Add toggle sound effect (optional)
        const toggles = document.querySelectorAll('.toggle-checkbox');
        toggles.forEach(toggle => {
            toggle.addEventListener('change', () => {
                // You could add a subtle click sound here
                console.log(`Toggle switched: ${toggle.id} is now ${toggle.checked ? 'ON' : 'OFF'}`);
            });
        });
    
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
      
<div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
<h1 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h1>
<div className="space-y-6">

<div className="flex items-center justify-between">
<div>
<h2 className="text-gray-800 font-medium">Airplane Mode</h2>
<p className="text-gray-500 text-sm">Disable wireless connections</p>
</div>
<div className="relative">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus:outline-none" id="toggle1" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer w-12" htmlFor="toggle1"></label>
</div>
</div>

<div className="flex items-center justify-between">
<div>
<h2 className="text-gray-800 font-medium">Wi-Fi</h2>
<p className="text-gray-500 text-sm">Connected to Home Network</p>
</div>
<div className="relative">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus:outline-none" id="toggle2" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer w-12" htmlFor="toggle2"></label>
</div>
</div>

<div className="flex items-center justify-between">
<div>
<h2 className="text-gray-800 font-medium">Bluetooth</h2>
<p className="text-gray-500 text-sm">Discoverable to nearby devices</p>
</div>
<div className="relative">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus:outline-none" id="toggle3" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer w-12" htmlFor="toggle3"></label>
</div>
</div>

<div className="flex items-center justify-between">
<div>
<h2 className="text-gray-800 font-medium">Do Not Disturb</h2>
<p className="text-gray-500 text-sm">Silence notifications</p>
</div>
<div className="relative">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus:outline-none" id="toggle4" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer w-12" htmlFor="toggle4"></label>
</div>
</div>

<div className="flex items-center justify-between">
<div>
<h2 className="text-gray-800 font-medium">Dark Mode</h2>
<p className="text-gray-500 text-sm">Use dark system appearance</p>
</div>
<div className="relative">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer focus:outline-none" id="toggle5" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer w-12" htmlFor="toggle5"></label>
</div>
</div>
</div>
</div>


    </>
  );
}
