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
      

<div className="bg-sky-50 p-3 rounded-xl mb-3">
<div className="flex justify-between items-center mb-2">
<h1 className="text-lg font-bold">NYC → SFO</h1>
<div className="bg-white/60 px-2 py-0.5 rounded-full text-xs text-slate-600 border border-slate-200">
        Confirmed
      </div>
</div>
<div className="text-xs text-slate-500">June 15 - 22, 2023 • Ref: ABC123</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-3 shadow-sm">
<div className="p-2 border-b border-slate-100 bg-sky-50/50 flex items-center">
<div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-2 border border-blue-100">
<span className="text-blue-500 font-bold text-xs">UA</span>
</div>
<div className="text-sm">
<span className="font-medium">Outbound • </span>
<span className="text-slate-500">United Airlines UA1234</span>
</div>
</div>

<div className="p-2 flex justify-between relative">
<div className="text-center">
<div className="text-xl font-bold">JFK</div>
<div className="text-xs text-slate-500">New York</div>
<div className="text-base font-medium mt-1">08:30</div>
<div className="text-xs text-slate-500">Jun 15</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-2">
<div className="text-xs text-slate-500 mb-1">5h 45m</div>
<div className="w-full h-0.5 bg-slate-100 relative">
<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-sky-300 rounded-full"></div>
</div>
<div className="text-xs text-slate-500 mt-1">Direct</div>
</div>
<div className="text-center">
<div className="text-xl font-bold">SFO</div>
<div className="text-xs text-slate-500">San Francisco</div>
<div className="text-base font-medium mt-1">11:15</div>
<div className="text-xs text-slate-500">Jun 15</div>
</div>
</div>

<div className="bg-slate-50 p-2 text-xs grid grid-cols-3 gap-2 border-t border-slate-100">
<div>
<span className="text-slate-500">Terminal: </span>
<span className="font-medium">4</span>
</div>
<div>
<span className="text-slate-500">Class: </span>
<span className="font-medium">Economy</span>
</div>
<div>
<span className="text-slate-500">Seat: </span>
<span className="font-medium">23A</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-3 shadow-sm">
<div className="p-2 border-b border-slate-100 bg-sky-50/50 flex items-center">
<div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-2 border border-blue-100">
<span className="text-blue-500 font-bold text-xs">UA</span>
</div>
<div className="text-sm">
<span className="font-medium">Return • </span>
<span className="text-slate-500">United Airlines UA2468</span>
</div>
</div>

<div className="p-2 flex justify-between relative">
<div className="text-center">
<div className="text-xl font-bold">SFO</div>
<div className="text-xs text-slate-500">San Francisco</div>
<div className="text-base font-medium mt-1">14:45</div>
<div className="text-xs text-slate-500">Jun 22</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-2">
<div className="text-xs text-slate-500 mb-1">5h 35m</div>
<div className="w-full h-0.5 bg-slate-100 relative">
<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-sky-300 rounded-full"></div>
</div>
<div className="text-xs text-slate-500 mt-1">Direct</div>
</div>
<div className="text-center">
<div className="text-xl font-bold">JFK</div>
<div className="text-xs text-slate-500">New York</div>
<div className="text-base font-medium mt-1">23:20</div>
<div className="text-xs text-slate-500">Jun 22</div>
</div>
</div>

<div className="bg-slate-50 p-2 text-xs grid grid-cols-3 gap-2 border-t border-slate-100">
<div>
<span className="text-slate-500">Terminal: </span>
<span className="font-medium">2</span>
</div>
<div>
<span className="text-slate-500">Class: </span>
<span className="font-medium">Economy</span>
</div>
<div>
<span className="text-slate-500">Seat: </span>
<span className="font-medium">18F</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-2 mb-3">
<div className="text-sm font-medium mb-1">Passenger Information</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="text-slate-500">Name:</div>
<div className="font-medium text-right">Sarah Johnson</div>
<div className="text-slate-500">Passport:</div>
<div className="font-medium text-right">P12345678</div>
<div className="text-slate-500">Frequent Flyer:</div>
<div className="font-medium text-right">UA123456</div>
</div>
</div>

<div className="flex gap-2">
<button className="flex-1 bg-sky-100 text-sky-600 py-2 rounded-lg text-sm font-medium border border-sky-200">
      Check-in
    </button>
<button className="flex-1 bg-white text-slate-600 py-2 rounded-lg text-sm font-medium border border-slate-200">
      Add to Wallet
    </button>
</div>

    </>
  );
}
