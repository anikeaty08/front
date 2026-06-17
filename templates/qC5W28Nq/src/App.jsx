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
          colors: {
            'linear-bg': '#10101f',
            'linear-card': '#1a1a1f',
            'linear-accent': '#5e6ad2',
            'linear-subdued': '#8a8f98'
          }
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
      
<div className="w-full max-w-md bg-linear-card rounded-lg shadow-lg overflow-hidden">

<div className="p-6 border-b border-white/5">
<div className="flex justify-between items-center">
<div>
<h2 className="text-white text-2xl font-medium">Create Account</h2>
<p className="text-linear-subdued text-sm mt-1">Join AirTravel to book and manage your trips</p>
</div>
<div className="bg-linear-accent/10 p-3 rounded-full">
<svg className="h-6 w-6 text-linear-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<form className="p-6">
<div className="space-y-5">

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-linear-subdued text-sm mb-2" htmlFor="first-name">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-linear-accent" id="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-linear-subdued text-sm mb-2" htmlFor="last-name">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-linear-accent" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>

<div>
<label className="block text-linear-subdued text-sm mb-2" htmlFor="email">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-linear-accent" id="email" placeholder="john.doe@example.com" type="email"/>
</div>

<div>
<label className="block text-linear-subdued text-sm mb-2" htmlFor="password">Password</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-linear-accent" id="password" placeholder="••••••••" type="password"/>
<p className="text-linear-subdued text-xs mt-2">Must be at least 8 characters long</p>
</div>

<div>
<label className="block text-linear-subdued text-sm mb-2" htmlFor="confirm-password">Confirm Password</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-linear-accent" id="confirm-password" placeholder="••••••••" type="password"/>
</div>

<div className="flex items-start">
<input className="mt-1 h-4 w-4 rounded bg-white/5 border-white/10 text-linear-accent focus:ring-linear-accent" id="terms" type="checkbox"/>
<label className="ml-2 text-sm text-linear-subdued" htmlFor="terms">
            I agree to the <a className="text-linear-accent hover:underline" href="#">Terms of Service</a> and <a className="text-linear-accent hover:underline" href="#">Privacy Policy</a>
</label>
</div>
</div>

<button className="w-full bg-linear-accent text-white font-medium py-3 px-4 rounded-lg mt-6 hover:bg-linear-accent/90 transition-colors" type="submit">
        Create Account
      </button>
</form>

<div className="p-6 border-t border-white/5 bg-[#10101f]/40 text-center">
<p className="text-linear-subdued">
        Already have an account? <a className="text-linear-accent hover:underline" href="#">Sign In</a>
</p>
</div>
</div>

    </>
  );
}
