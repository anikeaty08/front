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
      
<div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
<div className="flex justify-center mb-4">
<img alt="App Logo" className="h-16" src="your-logo-url"/> 
</div>
<h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Welcome to [App Name]!</h1>
<p className="text-gray-600 mb-4">We value your privacy and want you to understand how we handle your information. Please review the terms below:</p>
<ul className="text-gray-600 mb-4 list-disc list-inside">
<li>Data Collection: We collect data to improve our services, such as usage statistics and location.</li>
<li>Data Usage: Your data helps us personalize your experience and send you relevant updates.</li>
<li>Data Sharing: We do not share your personal information with third parties without your consent, except as required by law.</li>
<li>Your Rights: You have the right to access, modify, or delete your personal data at any time.</li>
</ul>
<div className="flex justify-center mb-4">
<a className="text-blue-500 hover:underline mr-4" href="#">Privacy Policy</a>
<a className="text-blue-500 hover:underline" href="#">Terms of Service</a>
</div>
<div className="mb-4">
<label className="inline-flex items-center">
<input className="form-checkbox h-4 w-4 text-blue-600" type="checkbox"/>
<span className="ml-2 text-gray-700">Yes, I agree to the Privacy Policy and Terms of Service.</span>
</label>
</div>
<div className="flex justify-between">
<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Confirm</button>
<button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Cancel</button>
</div>
</div>

    </>
  );
}
