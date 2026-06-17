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
      
<section className="bg-white font-serif min-h-screen flex items-center justify-center">
<div className="container mx-auto">
<div className="flex justify-center">
<div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
<div className="bg-white p-8 rounded-lg shadow-lg">
<div className="text-center mb-8">
<h1 className="text-3xl font-bold text-gray-800 mb-2">Create an Account</h1>
<p className="text-gray-600">Join our community today</p>
</div>
<form>
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="password" placeholder="••••••••" required="" type="password"/>
<p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirm-password">Confirm Password</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" id="confirm-password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center">
<input className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" id="terms" required="" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="terms">
                                        I agree to the <a className="text-green-600 hover:text-green-500" href="#">Terms of Service</a> and <a className="text-green-600 hover:text-green-500" href="#">Privacy Policy</a>
</label>
</div>
<button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-200" type="submit">
                                    Create Account
                                </button>
</div>
</form>
<div className="mt-6 text-center">
<p className="text-sm text-gray-600">
                                Already have an account? <a className="text-green-600 hover:text-green-500 font-medium" href="#">Sign in</a>
</p>
</div>
<div className="mt-8 pt-5 border-t border-gray-200">
<p className="text-sm text-center text-gray-500">Or sign up with</p>
<div className="mt-3 flex justify-center space-x-4">
<button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
<svg aria-hidden="true" className="h-5 w-5 mr-2" fill="currentColor" viewbox="0 0 24 24">
<path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
</svg>
                                    Google
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
