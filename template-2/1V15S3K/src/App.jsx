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
      
<div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 relative text-white p-10 flex flex-col justify-center overflow-hidden">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
<defs>

<pattern height="60" id="diagonalPattern" patternunits="userSpaceOnUse" width="60" x="0" y="0">
<line opacity="0.15" stroke="#fff" strokeWidth="0.8" x1="0" x2="60" y1="0" y2="60"></line>
<line opacity="0.15" stroke="#fff" strokeWidth="0.8" x1="-60" x2="0" y1="0" y2="60"></line>
<line opacity="0.15" stroke="#fff" strokeWidth="0.8" x1="60" x2="120" y1="0" y2="60"></line>
</pattern>

<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="vignette" r="75%">
<stop offset="40%" stop-color="#000" stop-opacity="0"></stop>
<stop offset="100%" stop-color="#000" stop-opacity="0.8"></stop>
</radialgradient>
</defs>

<rect fill="#0a0a0a" height="1080" width="1920" x="0" y="0"></rect>

<rect fill="url(#diagonalPattern)" height="1080" width="1920" x="0" y="0"></rect>

<rect className="" fill="url(#vignette)" height="1080" width="1920" x="0" y="0"></rect>
</svg>
<div className="relative z-10 max-w-md space-y-8">
<h1 className="leading-tight text-5xl font-light tracking-tight mb-4">Welcome</h1>
<p className="leading-relaxed text-base text-gray-300 mb-6">Join thousands of users who trust us with their digital experience. Create, collaborate, and innovate with our cutting-edge tools.</p>
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<div className="text-xl font-semibold">50K+</div>
<div className="text-xs text-gray-400">Active Users</div>
</div>
<div className="">
<div className="text-xl font-semibold">99.9%</div>
<div className="text-xs text-gray-400">Uptime</div>
</div>
<div className="">
<div className="text-xl font-semibold">24/7</div>
<div className="text-xs text-gray-400">Support</div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 px-10 py-10">
<div className="max-w-md">
<h2 className="text-3xl font-normal text-gray-900 tracking-tight mb-1">Create your account</h2>
<p className="text-sm text-gray-600 mb-6">Sign up to get started</p>
<form className="space-y-5">
<div className="">
<label className="block text-gray-700 font-medium mb-1.5 text-sm" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition text-sm text-gray-900 bg-white border-gray-200 border rounded-xl px-3.5 py-2.5" id="email" name="email" placeholder="name@email.com" required type="email" />
<p className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</p>
</div>
<div className="">
<label className="block text-gray-700 font-medium mb-1.5 text-sm" htmlFor="password">Password</label>
<input autocomplete="new-password" className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" id="password" name="password" placeholder="Enter a strong password" required type="password" />
<ul className="text-xs text-gray-500 mt-1.5 space-y-0.5">
<li className="">• At least 8 characters</li>
<li className="">• Contains a number</li>
<li className="">• Contains an uppercase letter</li>
<li className="">• Contains a special character</li>
</ul>
</div>
<div className="flex items-start">
<input className="rounded border-gray-300 text-black focus:ring-2 focus:ring-black mt-0.5" id="terms" name="terms" required type="checkbox" />
<label className="ml-2.5 text-xs text-gray-600 select-none" htmlFor="terms">
                I agree to the
                <a className="text-black underline hover:text-gray-700" href="#">Terms of Service</a>
                and
                <a className="text-black underline hover:text-gray-700" href="#">Privacy Policy</a>.
              </label>
</div>
<button className="custom-btn w-full rounded-xl" type="submit">Sign Up</button>
</form>
<div className="flex items-center mt-6 mb-5">
<div className="flex-grow h-px bg-gray-200"></div>
<span className="px-3 text-gray-500 text-xs">Or</span>
<div className="flex-grow h-px bg-gray-200"></div>
</div>
<button className="w-full flex items-center justify-center px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition text-sm">
<svg className="w-4 h-4 mr-2.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M21.805 10.023h-9.765v3.952h5.701c-.246 1.262-1.475 3.709-5.701 3.709-3.432 0-6.22-2.837-6.22-6.22s2.788-6.22 6.22-6.22c1.955 0 3.269.835 4.022 1.558l2.74-2.67c-1.726-1.609-3.968-2.605-6.762-2.605-5.602 0-10.15 4.548-10.15 10.15s4.548 10.15 10.15 10.15c5.826 0 9.678-4.096 9.678-9.869 0-.662-.075-1.168-.169-1.644z"></path>
</svg>
            Sign up with Google
          </button>
<p className="text-xs text-gray-600 text-center mt-5">
            Already have an account?
            <a className="text-black font-medium underline hover:text-gray-700 transition" href="#">Sign in</a>
</p>
</div>
</div>
</div>
</div>

    </>
  );
}
