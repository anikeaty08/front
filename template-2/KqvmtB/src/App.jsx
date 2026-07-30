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
      
<div className="flex flex-col space-y-6">

<div className="bg-blue-500 rounded-3xl p-6 md:p-10">
<div className="mb-8">
<h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Join Studio Craft.<br />
                    Elevate Your Design Journey.
                </h1>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm">
<div className="flex flex-col space-y-4">
<div className="w-12 h-12 flex items-center justify-center">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-black text-lg font-medium">Create your account and unlock a world of design excellence.</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
<div className="mb-6">
<h2 className="text-2xl md:text-3xl font-bold text-black">Sign Up</h2>
<p className="text-gray-600 mt-2">Fill in your details to create an account</p>
</div>
<form className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
<input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" id="firstName" name="firstName" placeholder="Enter your first name" required type="text" />
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
<input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" id="lastName" name="lastName" placeholder="Enter your last name" required type="text" />
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
<input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" id="email" name="email" placeholder="Enter your email" required type="email" />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
<input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" id="password" name="password" placeholder="Create a password" required type="password" />
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
<input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required type="password" />
</div>
</div>

<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500" id="terms" name="terms" required type="checkbox" />
</div>
<div className="ml-3 text-sm">
<label className="text-gray-600" htmlFor="terms">I agree to the <a className="text-blue-600 hover:underline" href="#">Terms of Service</a> and <a className="text-blue-600 hover:underline" href="#">Privacy Policy</a></label>
</div>
</div>

<button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors" type="submit">
                    Create Account
                </button>

<div className="text-center">
<p className="text-gray-600">Already have an account? <a className="text-blue-600 font-medium hover:underline" href="#">Sign in</a></p>
</div>
</form>
</div>

<div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
<div className="text-center mb-6">
<p className="text-gray-600">Or sign up with</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
<span className="font-medium">Continue with Google</span>
</button>
<button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" fill="#1877F2"></path></svg>
<span className="font-medium">Continue with Facebook</span>
</button>
</div>
</div>
</div>

    </>
  );
}
