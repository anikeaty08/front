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



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            indigo: {
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
            },
          },
        }
      }
    }
  
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
      
<div className="w-full max-w-md">

<div className="bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-2xl shadow-xl overflow-hidden">

<div className="p-6 pb-0">
<div className="flex justify-between items-center mb-2">
<h2 className="text-white font-medium text-xl">Welcome to Virtual Card</h2>
<span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Step 1 of 3</span>
</div>
<p className="text-white/70 text-sm mb-6">Let's set up your account in just a few steps</p>
</div>

<div className="px-6 flex space-x-2 mb-6">
<div className="h-1 flex-1 rounded-full bg-white"></div>
<div className="h-1 flex-1 rounded-full bg-white/30"></div>
<div className="h-1 flex-1 rounded-full bg-white/30"></div>
</div>

<div className="bg-white/10 mx-6 rounded-xl p-5 mb-6">
<div className="mb-5">
<label className="block text-white/70 text-xs mb-1">Full Name</label>
<div className="flex items-center bg-white/10 rounded-lg p-3">
<div className="w-5 h-5 rounded-md bg-white/30 mr-3"></div>
<input className="bg-transparent text-white w-full outline-none text-sm placeholder-white/50" placeholder="Enter your name" type="text" />
</div>
</div>
<div className="mb-5">
<label className="block text-white/70 text-xs mb-1">Email Address</label>
<div className="flex items-center bg-white/10 rounded-lg p-3">
<div className="w-5 h-5 rounded-md bg-white/30 mr-3"></div>
<input className="bg-transparent text-white w-full outline-none text-sm placeholder-white/50" placeholder="your.email@example.com" type="email" />
</div>
</div>
<div>
<label className="block text-white/70 text-xs mb-1">Create Password</label>
<div className="flex items-center bg-white/10 rounded-lg p-3">
<div className="w-5 h-5 rounded-md bg-white/30 mr-3"></div>
<input className="bg-transparent text-white w-full outline-none text-sm placeholder-white/50" placeholder="••••••••" type="password" />
</div>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex justify-between text-xs text-white/70 mb-1">
<span>Password strength</span>
<span>Medium</span>
</div>
<div className="h-1.5 w-full bg-white/20 rounded-full">
<div className="h-1.5 bg-white w-1/2 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-white/70 mt-1">
<span>Include special characters</span>
<span>50%</span>
</div>
</div>

<div className="px-6 mb-6">
<label className="flex items-start text-sm">
<input className="mt-0.5 mr-3" type="checkbox" />
<span className="text-white/90">I agree to the <a className="text-white underline" href="#">Terms of Service</a> and <a className="text-white underline" href="#">Privacy Policy</a></span>
</label>
</div>

<div className="px-6 pb-6 space-y-3">
<button className="w-full bg-white text-indigo-600 font-medium py-3 rounded-xl hover:bg-white/90 transition">Continue</button>
<button className="w-full bg-transparent border border-white/20 text-white py-3 rounded-xl hover:bg-white/10 transition">Skip for now</button>
</div>

<div className="bg-white/5 py-4 px-6 text-center">
<p className="text-white/70 text-sm">Already have an account? <a className="text-white font-medium" href="#">Sign in</a></p>
</div>
</div>
</div>

    </>
  );
}
