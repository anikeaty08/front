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
      
<div className="flex min-h-screen">

<div className="hidden lg:flex lg:w-1/2 bg-[#111827] relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-transparent"></div>

<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#3b82f6]/20 rounded-full blur-2xl"></div>

<div className="relative z-10 flex flex-col justify-between h-full p-12">
<div>
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
</svg>
</div>
<h1 className="text-xl font-semibold text-white">FlowUI</h1>
</div>
<div className="mt-16">
<h2 className="text-3xl font-bold">Start your journey with us</h2>
<p className="mt-4 text-white/70 max-w-md">Join thousands of users who trust our platform for their daily workflow needs.</p>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
<svg className="text-[#3b82f6]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div>
<p className="text-sm text-white/80">"This platform has completely transformed how our team collaborates. The intuitive interface makes everything so much easier."</p>
<div className="mt-3 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-xs font-medium">JD</div>
<span className="text-sm font-medium">Jamie Doe</span>
<span className="text-xs text-white/50">Product Designer</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
<div className="w-full max-w-md">
<div className="text-center lg:text-left">
<h2 className="text-2xl font-bold">Create your account</h2>
<p className="mt-2 text-white/60">Fill in the details below to get started</p>
</div>
<div className="mt-8 space-y-6">

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 h-11 px-5 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
<svg fill="#4285F4" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
<span className="text-sm font-medium">Google</span>
</button>
<button className="flex items-center justify-center gap-2 h-11 px-5 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
<svg fill="white" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
<span className="text-sm font-medium">Facebook</span>
</button>
</div>
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/10"></div>
</div>
<div className="relative flex justify-center">
<span className="px-3 bg-[#0f172a] text-sm text-white/40">or continue with</span>
</div>
</div>

<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-white/80 mb-1" htmlFor="firstName">First Name</label>
<input className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all" id="firstName" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-1" htmlFor="lastName">Last Name</label>
<input className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all" id="lastName" type="text" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-1" htmlFor="email">Email Address</label>
<input className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all" id="email" type="email" />
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-1" htmlFor="password">Password</label>
<input className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all" id="password" type="password" />
<p className="mt-1 text-xs text-white/40">Must be at least 8 characters</p>
</div>
<div className="flex items-start">
<input className="w-4 h-4 mt-1 bg-white/5 border border-white/10 rounded focus:ring-[#3b82f6] focus:ring-offset-[#0f172a]" id="terms" type="checkbox" />
<label className="ml-2 text-sm text-white/60" htmlFor="terms">
                I agree to the <a className="text-[#3b82f6] hover:underline" href="#">Terms of Service</a> and <a className="text-[#3b82f6] hover:underline" href="#">Privacy Policy</a>
</label>
</div>
<button className="w-full h-11 bg-[#3b82f6] rounded-lg text-white font-medium hover:bg-[#2563eb] transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200" type="submit">
              Create Account
            </button>
</form>
<p className="text-center text-sm text-white/60">
            Already have an account? <a className="text-[#3b82f6] hover:underline" href="#">Sign in</a>
</p>
</div>
</div>
</div>
</div>

    </>
  );
}
