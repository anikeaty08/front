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



    // Optional: Password show/hide logic is handled inline in the checkbox
  
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
      
<div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
<h2 className="text-4xl font-semibold text-gray-800 font-playfair text-center mb-2">Create your account</h2>
<p className="text-2xl text-gray-500 font-playfair text-center mb-6">Sign up to get started</p>
<form className="space-y-5">
<div className="">
</div>
<div className="">
<label className="block text-gray-600 font-medium mb-1" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-300 outline-none transition" id="email" name="email" placeholder="name@email.com" required="" type="email"/>
<p className="text-xs text-gray-400 mt-1">We'll never share your email with anyone else.</p>
</div>
<div>
<label className="block text-gray-600 font-medium mb-1" htmlFor="password">Password</label>
<input autocomplete="new-password" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-300 outline-none transition" id="password" name="password" placeholder="Enter a strong password" required="" type="password"/>
<ul className="text-xs text-gray-400 mt-2 ml-1 list-disc list-inside space-y-0.5">
<li>At least 8 characters</li>
<li>Contains a number</li>
<li>Contains an uppercase letter</li>
<li>Contains a special character</li>
</ul>
</div>
<div className="flex items-start">
<input className="rounded border-gray-300 text-gray-600 focus:ring-2 focus:ring-gray-400 mt-1" id="terms" name="terms" required="" type="checkbox"/>
<label className="ml-2 text-sm text-gray-600 select-none" htmlFor="terms">
          I agree to the
          <a className="text-gray-800 underline hover:text-gray-900" href="#">Terms of Service</a>
          and
          <a className="text-gray-800 underline hover:text-gray-900" href="#">Privacy Policy</a>.
        </label>
</div>
<button className="custom-btn w-full mt-3" type="submit">Sign Up</button>
</form>
<div className="flex items-center mt-8 mb-4">
<div className="flex-grow h-px bg-gray-200"></div>
<span className="px-2 text-gray-400 text-sm">Or</span>
<div className="flex-grow h-px bg-gray-200"></div>
</div>
<button className="w-full flex items-center justify-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg shadow-sm font-medium text-blue-700 hover:bg-blue-100 transition">
<svg className="w-5 h-5 mr-2" fill="currentColor" viewbox="0 0 24 24"><path d="M21.805 10.023h-9.765v3.952h5.701c-.246 1.262-1.475 3.709-5.701 3.709-3.432 0-6.22-2.837-6.22-6.22s2.788-6.22 6.22-6.22c1.955 0 3.269.835 4.022 1.558l2.74-2.67c-1.726-1.609-3.968-2.605-6.762-2.605-5.602 0-10.15 4.548-10.15 10.15s4.548 10.15 10.15 10.15c5.826 0 9.678-4.096 9.678-9.869 0-.662-.075-1.168-.169-1.644z"></path></svg>
      Sign up with Google
    </button>
<p className="text-sm text-gray-500 text-center mt-6">
      Already have an account?
      <a className="text-gray-800 font-medium underline hover:text-gray-900 transition" href="#">Sign in</a>
</p>
</div>


    </>
  );
}
