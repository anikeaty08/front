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
      
<div className="min-h-screen flex items-center justify-center px-4 py-8">
<div className="w-full max-w-[385px] bg-black rounded-2xl p-6 flex flex-col gap-6 shadow-lg">
<div className="flex flex-col gap-2 w-full">
<h2 className="w-full font-medium text-lg text-white">Modern Smart Home Template & UI Kit</h2>
<p className="w-full text-white text-opacity-70 text-sm leading-5">
            Create stunning smart home app interfaces with this sleek, customizable UI kit. Featuring dashboard designs, thermostat controls, and data visualization widgets, it’s perfect for designers and developers. Fully editable and responsive, this kit streamlines your workflow while delivering a polished, futuristic look.
          </p>
</div>
<div className="flex flex-col gap-2 w-full">
<div className="w-full flex items-center gap-2 bg-gradient-to-r from-indigo-950/60 to-transparent border border-white/20 rounded-xl px-3 py-3">
<div className="flex items-center justify-center w-6 h-6 mr-2">
<span className="inline-block w-3 h-3 rounded-full border border-white"></span>
</div>
<div className="flex-1 flex flex-col gap-1 overflow-hidden">
<div className="flex justify-between items-center w-full">
<span className="text-white font-medium text-base">UI Kit</span>
<span className="text-white font-medium text-base">$29</span>
</div>
<div className="text-white text-opacity-70 text-xs whitespace-normal">
                10 UI components for dashboards, toggles, and data visualizations.
              </div>
</div>
</div>
<div className="w-full flex items-center gap-2 bg-gradient-to-r from-indigo-950/60 to-transparent border border-white/20 rounded-xl px-3 py-3">
<div className="flex items-center justify-center w-6 h-6 mr-2">
<span className="inline-block w-3 h-3 rounded-full border border-white"></span>
</div>
<div className="flex-1 flex flex-col gap-1 overflow-hidden">
<div className="flex justify-between items-center w-full">
<span className="text-white font-medium text-base">Templates</span>
<span className="text-white font-medium text-base">$29</span>
</div>
<div className="text-white text-opacity-70 text-xs whitespace-normal">
                10 ready-to-use screens for dashboards and device management.
              </div>
</div>
</div>
<div className="w-full flex items-center gap-2 bg-gradient-to-r from-indigo-950/60 to-transparent border border-white/20 rounded-xl px-3 py-3">
<div className="flex items-center justify-center w-6 h-6 mr-2">
<span className="inline-block w-3 h-3 rounded-full border border-white"></span>
</div>
<div className="flex-1 flex flex-col gap-1 overflow-hidden">
<div className="flex justify-between items-center w-full">
<span className="text-white font-medium text-base">All the Library</span>
<span className="text-white font-medium text-base">$48</span>
</div>
<div className="text-white text-opacity-70 text-xs whitespace-normal">
                Includes both the UI Kit and Templates (20 resources total) for a complete smart home app.
              </div>
</div>
</div>
</div>
<button className="mt-4 w-full py-3 rounded-xl font-medium text-white text-base shadow-lg transition active:scale-95 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black">
          Pay
        </button>
</div>
</div>

    </>
  );
}
