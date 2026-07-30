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



    // Custom dropdown functionality
    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
      const button = dropdown.querySelector('button');
      const options = dropdown.querySelectorAll('.dropdown-options div');
      const selected = dropdown.querySelector('.-selected');
      const input = dropdown.querySelector('input[type="hidden"]');
      button.addEventListener('click', () => {
        dropdown.classList.toggle('open');
      });
      options.forEach(option => {
        option.addEventListener('click', () => {
          selected.textContent = option.textContent;
          selected.classList.remove('text-zinc-400');
          input.value = option.dataset.value;
          dropdown.classList.remove('open');
        });
      });
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
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
      

<div className="bg-iframe">
<iframe frameborder="0" height="100%" src="https://my.spline.design/iphone15procopy-pmwnMexXbAOzhjJgYVtuY6kv/" width="100%"></iframe>
</div>
<div className="overlay"></div>
<div className="flex items-center justify-center min-h-screen relative z-10 px-2">
<div className="w-full max-w-md bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-800 p-0 animate-fade-blur-slide delay-0">

<nav className="flex justify-between items-center gap-1 px-8 pt-8 pb-4">
<div className="flex flex-col items-center flex-1 animate-fade-blur-slide delay-1">
<div className="step-circle active h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
<span className="text-xs text-blue-400 mt-1">Account</span>
</div>
<span className="h-0.5 bg-zinc-700 flex-1 mx-1 mt-4 animate-fade-blur-slide delay-1"></span>
<div className="flex flex-col items-center flex-1 animate-fade-blur-slide delay-2">
<div className="step-circle h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-zinc-800">2</div>
<span className="text-xs text-zinc-300 mt-1">Workspace</span>
</div>
<span className="h-0.5 bg-zinc-700 flex-1 mx-1 mt-4 animate-fade-blur-slide delay-2"></span>
<div className="flex flex-col items-center flex-1 animate-fade-blur-slide delay-3">
<div className="step-circle h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-zinc-800">3</div>
<span className="text-xs text-zinc-300 mt-1">Integration</span>
</div>
<span className="h-0.5 bg-zinc-700 flex-1 mx-1 mt-4 animate-fade-blur-slide delay-3"></span>
<div className="flex flex-col items-center flex-1 animate-fade-blur-slide delay-4">
<div className="step-circle h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium bg-zinc-800">4</div>
<span className="text-xs text-zinc-300 mt-1">Finish</span>
</div>
</nav>

<div className="px-8 pt-4 pb-8">
<div className="flex flex-col items-center mb-6 animate-fade-blur-slide delay-5">
<svg className="h-9 w-9 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
<path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
</svg>
<h1 className="mt-2 text-2xl font-light tracking-tight">Welcome to Neural AI</h1>
<p className="text-zinc-400 text-sm mt-1">Let's get your account set up</p>
</div>
<form className="space-y-5">
<div className="animate-fade-blur-slide delay-6">
<label className="block text-sm text-zinc-400 mb-1" htmlFor="name">Full Name</label>
<input className="w-full bg-black/30 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="name" placeholder="Your Name" type="text" />
</div>
<div className="animate-fade-blur-slide delay-7">
<label className="block text-sm text-zinc-400 mb-1" htmlFor="email">Work Email</label>
<input className="w-full bg-black/30 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="email" placeholder="you@email.com" type="email" />
</div>
<div className="animate-fade-blur-slide delay-8">
<label className="block text-sm text-zinc-400 mb-1" htmlFor="password">Password</label>
<input className="w-full bg-black/30 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="password" placeholder="••••••••" type="password" />
<p className="mt-1 text-xs text-zinc-500">8+ characters, 1 uppercase, 1 number, 1 special</p>
</div>
<div className="animate-fade-blur-slide delay-8">
<label className="block text-sm text-zinc-400 mb-1">Industry</label>
<div className="custom-dropdown" id="industry-dropdown">
<button className="w-full bg-black/30 border border-zinc-700 rounded-md px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-blue-400" type="button">
<span className="dropdown-selected text-zinc-400">Select your industry</span>
<svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="dropdown-options mt-1 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg">
<div className="py-1">
<div className="px-4 py-2 hover:bg-zinc-800 cursor-pointer" data-value="tech">Technology</div>
<div className="px-4 py-2 hover:bg-zinc-800 cursor-pointer" data-value="finance">Finance</div>
<div className="px-4 py-2 hover:bg-zinc-800 cursor-pointer" data-value="healthcare">Healthcare</div>
<div className="px-4 py-2 hover:bg-zinc-800 cursor-pointer" data-value="education">Education</div>
<div className="px-4 py-2 hover:bg-zinc-800 cursor-pointer" data-value="retail">Retail</div>
<div className="px-4 py-2 hover:bg-zinc-800 cursor-pointer" data-value="other">Other</div>
</div>
</div>
<input id="industry-input" name="industry" type="hidden" />
</div>
</div>
<div className="animate-fade-blur-slide delay-8">
<label className="flex items-start text-sm text-zinc-400">
<input className="mt-1 bg-black/30 border border-zinc-700 rounded focus:ring-blue-400" type="checkbox" />
<span className="ml-2">I agree to the <a className="text-blue-400 hover:text-blue-300" href="#">Terms</a> & <a className="text-blue-400 hover:text-blue-300" href="#">Privacy</a></span>
</label>
</div>
<div className="flex justify-end pt-2 animate-fade-blur-slide delay-8">
<button className="px-6 py-2 bg-blue-500 rounded-md hover:bg-blue-400 transition-colors font-medium" type="submit">
              Continue
            </button>
</div>
</form>
<div className="mt-6 text-xs text-zinc-500 text-center animate-fade-blur-slide delay-8">
          Need help? <a className="text-blue-400 hover:text-blue-300" href="#">Contact support</a>
</div>
</div>
</div>
</div>


    </>
  );
}
