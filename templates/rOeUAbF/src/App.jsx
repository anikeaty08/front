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
      
<nav className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">
<div className="flex">
<div className="flex-shrink-0 flex items-center">
<span className="text-xl font-bold text-gray-900">Stellar<span className="text-blue-600">.</span></span>
</div>
<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
<a className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="#">Home</a>
<a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="#">Projects</a>
<a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="#">Team</a>
<a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" href="#">Contact</a>
</div>
</div>
<div className="hidden sm:ml-6 sm:flex sm:items-center">
<button className="bg-blue-600 px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-blue-700">Get in touch</button>
</div>
<div className="-mr-2 flex items-center sm:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" type="button">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</nav>
<main>
<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
<span className="block">Design that makes a</span>
<span className="block gradient-text">difference</span>
</h1>
<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We create thoughtful digital experiences that connect people with products and brands they love.
        </p>
<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
<div className="rounded-md shadow">
<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10" href="#">
              View our work
            </a>
</div>
<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10" href="#">
              Learn more
            </a>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="p-6">
<div className="flex items-center">
<div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="ml-3 text-lg font-medium text-gray-900">UI/UX Design</h3>
</div>
<div className="mt-4 text-base text-gray-500">
              Creating intuitive interfaces that delight users and solve real problems through thoughtful design.
            </div>
</div>
</div>
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="p-6">
<div className="flex items-center">
<div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="ml-3 text-lg font-medium text-gray-900">Brand Identity</h3>
</div>
<div className="mt-4 text-base text-gray-500">
              Developing distinctive visual identities that communicate your brand's unique story and values.
            </div>
</div>
</div>
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="p-6">
<div className="flex items-center">
<div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="ml-3 text-lg font-medium text-gray-900">Web Development</h3>
</div>
<div className="mt-4 text-base text-gray-500">
              Building fast, responsive, and accessible websites that provide exceptional user experiences.
            </div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
