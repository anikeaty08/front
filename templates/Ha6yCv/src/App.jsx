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
      
<header className="bg-white border-b border-gray-100">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<a className="text-2xl font-bold text-indigo-600" href="#">angle</a>
<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Need help?</a>
</div>
</div>
</div>
</header>
<main className="container mx-auto px-6 py-12 max-w-5xl">
<div className="text-center mb-12">
<h1 className="text-3xl font-bold mb-3">Welcome to Angle</h1>
<p className="text-xl text-gray-600">Let's get you set up in just a few steps</p>
</div>

<div className="flex justify-between items-center mb-12 relative">
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 z-0"></div>
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 z-0" style={{width: '33%'}}></div>
<div className="z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium mb-2">1</div>
<span className="text-sm font-medium text-indigo-600">Account</span>
</div>
<div className="z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-medium mb-2">2</div>
<span className="text-sm font-medium text-gray-400">Preferences</span>
</div>
<div className="z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 font-medium mb-2">3</div>
<span className="text-sm font-medium text-gray-400">Project</span>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
<h2 className="text-xl font-semibold mb-6">Create your account</h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">First name</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="firstName" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">Last name</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="lastName" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Work email</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="email" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
<div className="relative">
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="password" type="password"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600" type="button">
<i className="fas fa-eye"></i>
</button>
</div>
<div className="mt-2 flex items-center gap-2">
<div className="h-1 w-1/4 bg-red-400 rounded"></div>
<div className="h-1 w-1/4 bg-gray-200 rounded"></div>
<div className="h-1 w-1/4 bg-gray-200 rounded"></div>
<div className="h-1 w-1/4 bg-gray-200 rounded"></div>
<span className="text-xs text-gray-500 ml-2">Weak</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Company name</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="company" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="size">Company size</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="size">
<option value="">Select an option</option>
<option value="1-10">1-10 employees</option>
<option value="11-50">11-50 employees</option>
<option value="51-200">51-200 employees</option>
<option value="201-500">201-500 employees</option>
<option value="501+">501+ employees</option>
</select>
</div>
</form>
</div>
<div className="flex items-center justify-between">
<a className="text-indigo-600 font-medium hover:text-indigo-700" href="#">
<i className="fas fa-arrow-left mr-2"></i> Back
      </a>
<button className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">
        Continue <i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</main>
<footer className="mt-auto py-6">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-sm text-gray-500">© 2023 Angle. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-sm text-gray-500 hover:text-indigo-600" href="#">Terms</a>
<a className="text-sm text-gray-500 hover:text-indigo-600" href="#">Privacy</a>
<a className="text-sm text-gray-500 hover:text-indigo-600" href="#">Contact</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
