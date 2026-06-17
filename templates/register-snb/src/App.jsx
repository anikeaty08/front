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
      
<form action="https://formspree.io/f/mqagoenr" className="space-y-4" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm mb-2 font-medium text-gray-800">First Name</label>
<input className="w-full px-4 py-3 rounded-lg" name="first_name" required="" type="text"/>
</div>
<div>
<label className="block text-sm mb-2 font-medium text-gray-800">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg" name="last_name" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm mb-2 font-medium text-gray-800">Email</label>
<input className="w-full px-4 py-3 rounded-lg" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm mb-2 font-medium text-gray-800">Date of Birth</label>
<input className="w-full px-4 py-3 rounded-lg" name="dob" type="text"/>
</div>
<div>
<label className="block text-sm mb-2 font-medium text-gray-800">Full Address</label>
<input className="w-full px-4 py-3 rounded-lg" name="address" type="text"/>
</div>
<div>
<label className="block text-sm mb-2 font-medium text-gray-800">Monthly Income</label>
<input className="w-full px-4 py-3 rounded-lg" name="income" type="text"/>
</div>
<div>
<label className="block text-sm mb-2 font-medium text-gray-800">Details</label>
<textarea className="w-full px-4 py-3 rounded-lg" name="details" rows="6"></textarea>
</div>
<button className="w-full py-3 px-6 rounded-lg font-semibold" type="submit">
    Send
  </button>
</form>

    </>
  );
}
