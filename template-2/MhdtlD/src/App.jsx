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
      const selected = dropdown.querySelector('.dropdown-selected');
      const input = dropdown.querySelector('input[type="hidden"]');
      
      button.addEventListener('click', () => {
        dropdown.classList.toggle('open');
      });
      
      options.forEach(option => {
        option.addEventListener('click', () => {
          selected.textContent = option.textContent;
          selected.classList.remove('text-gray-400');
          input.value = option.dataset.value;
          dropdown.classList.remove('open');
        });
      });
      
      // Close dropdown when clicking outside
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
      

<div className="spline-bg">
<iframe frameborder="0" height="100%" src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/" width="100%"></iframe>
</div>
<div className="overlay"></div>
<div className="flex flex-col md:flex-row min-h-screen relative z-10">

<div className="w-full md:w-1/3 lg:w-1/4 bg-black/40 backdrop-blur-lg border-r border-gray-800">

<div className="p-6 border-b border-gray-800">
<div className="flex items-center">
<svg className="h-7 w-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
<path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
</svg>
<span className="ml-3 text-lg tracking-tight">Neural</span>
</div>
<h1 className="mt-6 text-xl font-light">Welcome to Neural AI</h1>
<p className="mt-2 text-sm text-gray-400">Complete your setup in just a few steps</p>
</div>

<div className="p-6">
<div className="flex items-center mb-6">
<div className="step-indicator active h-8 w-8 rounded-full flex items-center justify-center text-sm">1</div>
<div className="ml-4">
<p className="text-blue-400">Account Setup</p>
<p className="text-xs text-gray-400">Basic information</p>
</div>
</div>
<div className="flex items-center mb-6">
<div className="step-indicator h-8 w-8 rounded-full flex items-center justify-center text-sm bg-gray-800">2</div>
<div className="ml-4">
<p className="text-gray-300">Workspace</p>
<p className="text-xs text-gray-400">Configure your environment</p>
</div>
</div>
<div className="flex items-center mb-6">
<div className="step-indicator h-8 w-8 rounded-full flex items-center justify-center text-sm bg-gray-800">3</div>
<div className="ml-4">
<p className="text-gray-300">Data Integration</p>
<p className="text-xs text-gray-400">Connect your data sources</p>
</div>
</div>
<div className="flex items-center">
<div className="step-indicator h-8 w-8 rounded-full flex items-center justify-center text-sm bg-gray-800">4</div>
<div className="ml-4">
<p className="text-gray-300">Preferences</p>
<p className="text-xs text-gray-400">Customize your experience</p>
</div>
</div>
</div>

<div className="mt-auto p-6 border-t border-gray-800">
<div className="flex items-center">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-2 text-sm text-gray-400">Need help?</span>
<a className="ml-2 text-sm text-blue-400 hover:text-blue-300" href="#">Contact support</a>
</div>
</div>
</div>

<div className="w-full md:w-2/3 lg:w-3/4 p-6 md:p-10 lg:p-16 overflow-y-auto">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl font-light mb-2">Account Setup</h2>
<p className="text-gray-400 mb-8">Let's get to know you better</p>
<form className="space-y-6">

<div className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-gray-400 mb-1" htmlFor="first-name">First Name</label>
<input className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="first-name" type="text" />
</div>
<div>
<label className="block text-sm text-gray-400 mb-1" htmlFor="last-name">Last Name</label>
<input className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="last-name" type="text" />
</div>
</div>
<div>
<label className="block text-sm text-gray-400 mb-1" htmlFor="email">Work Email</label>
<input className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="email" type="email" />
</div>
<div>
<label className="block text-sm text-gray-400 mb-1" htmlFor="password">Create Password</label>
<input className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="password" type="password" />
<p className="mt-1 text-xs text-gray-500">Must be at least 8 characters with 1 uppercase, 1 number and 1 special character</p>
</div>
</div>

<div className="pt-4 border-t border-gray-800">
<h3 className="text-lg font-light mb-4">Company Information</h3>
<div className="space-y-4">
<div>
<label className="block text-sm text-gray-400 mb-1" htmlFor="company">Company Name</label>
<input className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400" id="company" type="text" />
</div>

<div>
<label className="block text-sm text-gray-400 mb-1">Industry</label>
<div className="custom-dropdown" id="industry-dropdown">
<button className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-blue-400" type="button">
<span className="dropdown-selected text-gray-400">Select your industry</span>
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="dropdown-options mt-1 bg-gray-900 border border-gray-700 rounded-md shadow-lg">
<div className="py-1">
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="tech">Technology</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="finance">Finance</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="healthcare">Healthcare</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="education">Education</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="manufacturing">Manufacturing</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="retail">Retail</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="other">Other</div>
</div>
</div>
<input id="industry-input" name="industry" type="hidden" />
</div>
</div>

<div>
<label className="block text-sm text-gray-400 mb-1">Company Size</label>
<div className="custom-dropdown" id="size-dropdown">
<button className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-blue-400" type="button">
<span className="dropdown-selected text-gray-400">Select company size</span>
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="dropdown-options mt-1 bg-gray-900 border border-gray-700 rounded-md shadow-lg">
<div className="py-1">
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="1-10">1-10 employees</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="11-50">11-50 employees</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="51-200">51-200 employees</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="201-500">201-500 employees</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="501-1000">501-1000 employees</div>
<div className="px-4 py-2 hover:bg-gray-800 cursor-pointer" data-value="1000+">1000+ employees</div>
</div>
</div>
<input id="size-input" name="company-size" type="hidden" />
</div>
</div>
</div>
</div>

<div className="pt-4 border-t border-gray-800">
<label className="flex items-start">
<input className="mt-1 bg-black/30 border border-gray-700 rounded focus:ring-blue-400" type="checkbox" />
<span className="ml-2 text-sm text-gray-400">
                I agree to the <a className="text-blue-400 hover:text-blue-300" href="#">Terms of Service</a> and <a className="text-blue-400 hover:text-blue-300" href="#">Privacy Policy</a>
</span>
</label>
</div>

<div className="flex justify-between pt-6">
<button className="px-6 py-2 border border-gray-700 rounded-md hover:bg-white/5 transition-colors" type="button">
              Back
            </button>
<button className="px-6 py-2 bg-blue-500 rounded-md hover:bg-blue-400 transition-colors" type="submit">
              Continue
            </button>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
