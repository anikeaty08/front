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
      <div className="fixed inset-0 flex items-center justify-center z-50">

<div className="fixed inset-0 bg-black bg-opacity-80"></div>

<div className="relative z-10 bg-white w-full max-w-2xl mx-4 rounded-xl shadow-lg">
<button aria-label="Close" className="absolute top-3 right-3 text-gray-400 hover:text-black focus:outline-none" onclick="/* Your closing logic */" type="button">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="p-6 sm:p-8">

<div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4">
<div className="flex-1">
<div className="text-base text-gray-800"><span className="font-semibold">Author:</span> @nickname123</div>
<div className="text-sm text-gray-500"><span className="font-semibold">Full Post:</span> Here is the full post description, containing any extra relevant info about this submission.</div>
</div>
</div>

<div className="w-full mb-4">
<label className="block text-sm font-semibold text-black mb-2">Video Preview</label>
<div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black shadow mb-2">
<video className="w-full h-full object-contain bg-black" controls="" poster="https://placehold.co/600x338" src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
</div>
</div>

<div className="mb-4">
<div className="text-sm text-gray-800">
<span className="font-semibold">User Comment:</span> 
          This is the user's comment about their submission!
        </div>
</div>

<form>
<label className="block text-sm font-medium text-black mb-1" htmlFor="admin-message">Feedback/Reason (optional)</label>
<textarea className="w-full border border-gray-300 rounded-md p-2 mb-5 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" id="admin-message" placeholder="Type your feedback or reason here..." rows="3"></textarea>
<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

<button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-sm transition-colors" type="submit">Approve</button>

<button className="flex-1 bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded shadow-sm transition-colors" type="button">Reject</button>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
