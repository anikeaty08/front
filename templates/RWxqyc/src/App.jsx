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
<h1 className="text-3xl font-bold mb-3">Create your first project</h1>
<p className="text-xl text-gray-600">Get started with your new project in seconds</p>
</div>

<div className="flex justify-between items-center mb-12 relative">
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 z-0"></div>
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 z-0" style={{width: '100%'}}></div>
<div className="z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium mb-2">
<i className="fas fa-check text-sm"></i>
</div>
<span className="text-sm font-medium text-indigo-600">Account</span>
</div>
<div className="z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium mb-2">
<i className="fas fa-check text-sm"></i>
</div>
<span className="text-sm font-medium text-indigo-600">Preferences</span>
</div>
<div className="z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium mb-2">3</div>
<span className="text-sm font-medium text-indigo-600">Project</span>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
<h2 className="text-xl font-semibold mb-6">Project details</h2>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="projectName">Project name</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="projectName" placeholder="My Awesome Project" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">Description (optional)</label>
<textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" id="description" placeholder="Brief description of your project" rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Choose a template</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border-2 border-indigo-600 bg-indigo-50 rounded-lg overflow-hidden cursor-pointer">
<div className="aspect-video bg-gray-100 relative overflow-hidden">
<img alt="Dashboard Template" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-2 right-2 bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
<i className="fas fa-check text-xs"></i>
</div>
</div>
<div className="p-3">
<h3 className="font-medium">Dashboard</h3>
<p className="text-xs text-gray-600">Admin interface with analytics</p>
</div>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-600 hover:bg-indigo-50 cursor-pointer transition">
<div className="aspect-video bg-gray-100 relative overflow-hidden">
<img alt="Landing Page Template" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-3">
<h3 className="font-medium">Landing Page</h3>
<p className="text-xs text-gray-600">Conversion-focused design</p>
</div>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-600 hover:bg-indigo-50 cursor-pointer transition">
<div className="aspect-video bg-gray-100 relative overflow-hidden">
<img alt="Authentication Template" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-3">
<h3 className="font-medium">Authentication</h3>
<p className="text-xs text-gray-600">Sign in and sign up flows</p>
</div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Invite team members (optional)</label>
<div className="flex items-center">
<input className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" placeholder="Email address" type="email"/>
<button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md font-medium hover:bg-indigo-700">
              Invite
            </button>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<a className="text-indigo-600 font-medium hover:text-indigo-700" href="#">
<i className="fas fa-arrow-left mr-2"></i> Back
      </a>
<button className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">
        Create project
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
