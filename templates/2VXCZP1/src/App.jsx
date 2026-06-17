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



    // Activate Lucide icons
    lucide.createIcons();

    // Toggle password visibility
    document.getElementById('togglePw').addEventListener('click', () => {
      const pw = document.getElementById('password');
      const icon = document.querySelector('#togglePw svg');
      if (pw.type === 'password') {
        pw.type = 'text';
        icon.setAttribute('data-lucide', 'eye-off');
      } else {
        pw.type = 'password';
        icon.setAttribute('data-lucide', 'eye');
      }
      lucide.createIcons();
    });
  
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
      
<div className="min-h-screen flex flex-col lg:flex-row">

<section className="flex-1 flex items-center justify-center pt-8 pr-8 pb-8 pl-8">
<div className="w-full max-w-md">
<div className="flex flex-col gap-6">

<div className="animate-element w-12 h-12 rounded-3xl glass-border flex items-center justify-center">
<svg className="w-6 h-6 stroke-violet-400" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="4"></circle>
<path className="" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.071-7.071l-1.414 1.414M6.343 17.657l-1.414 1.414m0-14.142l1.414 1.414m11.314 11.314l1.414 1.414"></path>
</svg>
</div>

<h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight">
<span className="font-light text-white tracking-tighter">Welcome</span>
</h1>
<p className="animate-element animate-delay-200 text-zinc-400">Access your account and continue your journey with us</p>

<form className="space-y-5">
<div className="animate-element animate-delay-300">
<label className="text-sm font-medium text-zinc-400">Email Address</label>
<div className="glass-border rounded-2xl mt-2">
<input className="w-full bg-transparent text-sm pt-4 pr-4 pb-4 pl-4 rounded-2xl" placeholder="Enter your email address" type="email"/>
</div>
</div>
<div className="animate-element animate-delay-400">
<label className="text-sm font-medium text-zinc-400">Password</label>
<div className="glass-border rounded-2xl mt-2 relative">
<input className="w-full bg-transparent text-sm pt-4 pr-12 pb-4 pl-4 rounded-2xl" id="password" placeholder="Enter your password" type="password"/>
<button className="absolute inset-y-0 right-3 flex items-center" id="togglePw" type="button">
<svg className="lucide lucide-eye w-5 h-5 stroke-zinc-500 hover:stroke-zinc-300 transition-colors" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</div>
<div className="animate-element animate-delay-500 flex items-center justify-between text-sm">
<label className="flex items-center gap-3 cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-zinc-300">Keep me signed in</span>
</label>
<a className="hover:underline text-violet-400 transition-colors" href="#">Reset password</a>
</div>
<button className="animate-element animate-delay-600 w-full rounded-2xl bg-white py-4 font-medium text-zinc-900 hover:bg-zinc-100 transition-colors" type="submit">Sign In</button>
</form>

<div className="animate-element animate-delay-700 relative flex items-center justify-center">
<span className="w-24 border-t border-zinc-800"></span>
<span className="px-4 text-sm text-zinc-500">Or continue with</span>
<span className="w-24 border-t border-zinc-800"></span>
</div>

<button className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 glass-border rounded-2xl py-4 hover:bg-zinc-900/30 transition-colors">
<svg className="h-5 w-5" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
</svg>
            Continue with Google
          </button>
<p className="animate-element animate-delay-900 text-center text-sm text-zinc-500">
            New to our platform? <a className="text-violet-400 hover:underline transition-colors" href="#">Create Account</a>
</p>
</div>
</div>
</section>

<section className="hidden lg:block flex-1 relative">
<div className="animate-slide-right animate-delay-300 absolute inset-0 bg-[url(https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80)] bg-cover rounded-3xl mt-4 mr-4 mb-4 ml-4"></div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-8">

<div className="animate-testimonial animate-delay-1000 flex items-start gap-3 rounded-3xl bg-zinc-800/40 backdrop-blur-xl border border-white/10 p-5 w-64">
<img alt="avatar" className="h-10 w-10 object-cover rounded-2xl" src="https://randomuser.me/api/portraits/women/57.jpg"/>
<div className="text-sm leading-snug">
<p className="flex items-center gap-1 font-medium">
              Sarah Chen
            </p>
<p className="text-zinc-400">@sarahdigital</p>
<p className="mt-1 text-zinc-300">Amazing platform! The user experience is seamless and the features are exactly what I needed.</p>
</div>
</div>

<div className="animate-testimonial animate-delay-1200 hidden xl:flex items-start gap-3 rounded-3xl bg-zinc-800/40 backdrop-blur-xl border border-white/10 p-5 w-64">
<img alt="avatar" className="h-10 w-10 object-cover rounded-2xl" src="https://randomuser.me/api/portraits/men/64.jpg"/>
<div className="text-sm leading-snug">
<p className="flex items-center gap-1 font-medium">
              Marcus Johnson
            </p>
<p className="text-zinc-400">@marcustech</p>
<p className="mt-1 text-zinc-300">This service has transformed how I work. Clean design, powerful features, and excellent support.</p>
</div>
</div>

<div className="animate-testimonial animate-delay-1400 hidden 2xl:flex items-start gap-3 rounded-3xl bg-zinc-800/40 backdrop-blur-xl border border-white/10 p-5 w-64">
<img alt="avatar" className="h-10 w-10 rounded-2xl object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="text-sm leading-snug">
<p className="flex items-center gap-1 font-medium">
              David Martinez
            </p>
<p className="text-zinc-400">@davidcreates</p>
<p className="mt-1 text-zinc-300">I've tried many platforms, but this one stands out. Intuitive, reliable, and genuinely helpful for productivity.</p>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
