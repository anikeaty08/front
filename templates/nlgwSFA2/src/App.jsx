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
      
<div className="w-[300px] h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
<div className="w-full h-full bg-gray-900 flex flex-col">
<div className="flex-1 p-3 overflow-y-auto">
<div className="bg-gray-800 p-3 rounded-xl mb-3">
<div className="flex justify-between items-center mb-2">
<h1 className="text-lg font-bold text-white">NYC → SFO</h1>
<div className="bg-gray-700/60 px-2 py-0.5 rounded-full text-xs text-emerald-400 border border-gray-600">
              Confirmed
            </div>
</div>
<div className="text-xs text-gray-400">June 15 - 22, 2023 • Ref: ABC123</div>
</div>
<div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden mb-3 shadow-sm">
<div className="p-2 border-b border-gray-700 bg-gray-800/80 flex items-center">
<div className="w-6 h-6 rounded-full bg-indigo-900 flex items-center justify-center mr-2 border border-indigo-700">
<span className="text-indigo-400 font-bold text-xs">UA</span>
</div>
<div className="text-sm text-white">
<span className="font-medium">Outbound • </span>
<span className="text-gray-400">United Airlines UA1234</span>
</div>
</div>
<div className="p-2 flex justify-between relative">
<div className="text-center">
<div className="text-xl font-bold text-white">JFK</div>
<div className="text-xs text-gray-400">New York</div>
<div className="text-base font-medium mt-1 text-white">08:30</div>
<div className="text-xs text-gray-400">Jun 15</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-2">
<div className="text-xs text-gray-400 mb-1">5h 45m</div>
<div className="w-full h-0.5 bg-gray-700 relative">
<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs text-gray-400 mt-1">Direct</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-white">SFO</div>
<div className="text-xs text-gray-400">San Francisco</div>
<div className="text-base font-medium mt-1 text-white">11:15</div>
<div className="text-xs text-gray-400">Jun 15</div>
</div>
</div>
<div className="bg-gray-800/80 p-2 text-xs grid grid-cols-3 gap-2 border-t border-gray-700">
<div>
<span className="text-gray-400">Terminal: </span>
<span className="font-medium text-white">4</span>
</div>
<div>
<span className="text-gray-400">Class: </span>
<span className="font-medium text-white">Economy</span>
</div>
<div>
<span className="text-gray-400">Seat: </span>
<span className="font-medium text-white">23A</span>
</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden mb-3 shadow-sm">
<div className="p-2 border-b border-gray-700 bg-gray-800/80 flex items-center">
<div className="w-6 h-6 rounded-full bg-indigo-900 flex items-center justify-center mr-2 border border-indigo-700">
<span className="text-indigo-400 font-bold text-xs">UA</span>
</div>
<div className="text-sm text-white">
<span className="font-medium">Return • </span>
<span className="text-gray-400">United Airlines UA2468</span>
</div>
</div>
<div className="p-2 flex justify-between relative">
<div className="text-center">
<div className="text-xl font-bold text-white">SFO</div>
<div className="text-xs text-gray-400">San Francisco</div>
<div className="text-base font-medium mt-1 text-white">14:45</div>
<div className="text-xs text-gray-400">Jun 22</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-2">
<div className="text-xs text-gray-400 mb-1">5h 35m</div>
<div className="w-full h-0.5 bg-gray-700 relative">
<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="text-xs text-gray-400 mt-1">Direct</div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-white">JFK</div>
<div className="text-xs text-gray-400">New York</div>
<div className="text-base font-medium mt-1 text-white">23:20</div>
<div className="text-xs text-gray-400">Jun 22</div>
</div>
</div>
<div className="bg-gray-800/80 p-2 text-xs grid grid-cols-3 gap-2 border-t border-gray-700">
<div>
<span className="text-gray-400">Terminal: </span>
<span className="font-medium text-white">2</span>
</div>
<div>
<span className="text-gray-400">Class: </span>
<span className="font-medium text-white">Economy</span>
</div>
<div>
<span className="text-gray-400">Seat: </span>
<span className="font-medium text-white">18F</span>
</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg border border-gray-700 p-2 mb-3">
<div className="text-sm font-medium mb-1 text-white">Passenger Information</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="text-gray-400">Name:</div>
<div className="font-medium text-right text-white">Sarah Johnson</div>
<div className="text-gray-400">Passport:</div>
<div className="font-medium text-right text-white">P12345678</div>
<div className="text-gray-400">Frequent Flyer:</div>
<div className="font-medium text-right text-white">UA123456</div>
</div>
</div>
</div>
<div className="p-3 border-t border-gray-800">
<div className="flex gap-2">
<button className="flex-1 bg-blue-900 text-blue-300 py-2 rounded-lg text-sm font-medium border border-blue-800">
            Check-in
          </button>
<button className="flex-1 bg-gray-800 text-gray-300 py-2 rounded-lg text-sm font-medium border border-gray-700">
            Add to Wallet
          </button>
</div>
</div>
<div className="pb-1 flex justify-center">
<div className="w-[134px] h-[5px] bg-gray-600 rounded-full"></div>
</div>
</div>
</div>

    </>
  );
}
