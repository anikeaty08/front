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
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
<div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

<div className="px-6 py-5 border-b border-gray-200">
<h1 className="text-xl font-semibold text-gray-900">Send an e-Transfer</h1>
</div>

<div className="p-6 space-y-5">

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="amount">Amount</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500">$</span>
</div>
<input className="block w-full pl-7 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" id="amount" placeholder="0.00" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="recipient">Recipient</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" id="recipient">
<option disabled="" selected="" value="">Select a recipient</option>
<option value="contact1">Sarah Johnson</option>
<option value="contact2">Michael Chen</option>
<option value="contact3">Alex Rodriguez</option>
<option value="new">+ Add new recipient</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="h-5 w-5 text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="scheduled">Scheduled for</label>
<div className="flex space-x-2">
<div className="flex-1">
<input checked="" className="hidden peer" id="send-now" name="schedule" type="radio"/>
<label className="flex items-center justify-center py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 cursor-pointer peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-600 hover:bg-gray-50" htmlFor="send-now">
              Send now
            </label>
</div>
<div className="flex-1">
<input className="hidden peer" id="schedule" name="schedule" type="radio"/>
<label className="flex items-center justify-center py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 cursor-pointer peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-600 hover:bg-gray-50" htmlFor="schedule">
              Schedule
            </label>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="source">From account</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" id="source">
<option value="checking">Checking Account - $2,546.63</option>
<option value="savings">Savings Account - $8,921.15</option>
<option value="joint">Joint Account - $4,370.28</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<svg className="h-5 w-5 text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>

<div className="py-3 px-4 bg-gray-50 rounded-md text-sm text-gray-600 flex justify-between items-center">
<span>Service fee</span>
<span className="font-medium">$1.50</span>
</div>
</div>

<div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
<button className="px-4 py-2 mr-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button">
        Cancel
      </button>
<button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">
        Confirm Transfer
      </button>
</div>
</div>
</div>

    </>
  );
}
