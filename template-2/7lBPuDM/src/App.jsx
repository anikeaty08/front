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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      
<div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8" x-data="{ sidebarOpen: false }">

<div className="rounded-lg overflow-hidden shadow-xl bg-gray-800 border border-gray-700">

<div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="mx-auto text-gray-400 text-sm">Documentation Explorer</div>
</div>

<div className="flex flex-col md:flex-row">

<div className="md:hidden p-4">
<button className="text-gray-400 hover:text-white focus:outline-none">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="transform md:translate-x-0 transition-transform duration-300 ease-in-out absolute md:relative z-10 md:z-0 w-64 bg-gray-900 md:bg-gray-800 h-[calc(100vh-4rem)] md:h-auto overflow-y-auto border-r border-gray-700">
<nav className="p-4">
<div className="space-y-6">
<div>
<h5 className="text-gray-400 uppercase tracking-wider text-xs font-semibold mb-3">Getting Started</h5>
<ul className="space-y-2">
<li className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `100ms`}}>
<a className="text-blue-400 flex items-center px-2 py-1 rounded-md hover:bg-gray-700" href="#">
<span>Introduction</span>
</a>
</li>
<li className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `200ms`}}>
<a className="text-gray-300 flex items-center px-2 py-1 rounded-md hover:bg-gray-700" href="#">
<span>Installation</span>
</a>
</li>
<li className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `300ms`}}>
<a className="text-gray-300 flex items-center px-2 py-1 rounded-md hover:bg-gray-700" href="#">
<span>Quick Start</span>
</a>
</li>
</ul>
</div>
<div>
<h5 className="text-gray-400 uppercase tracking-wider text-xs font-semibold mb-3">Components</h5>
<ul className="space-y-2">
<li className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `400ms`}}>
<a className="text-gray-300 flex items-center px-2 py-1 rounded-md hover:bg-gray-700" href="#">
<span>Buttons</span>
</a>
</li>
<li className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `500ms`}}>
<a className="text-gray-300 flex items-center px-2 py-1 rounded-md hover:bg-gray-700" href="#">
<span>Cards</span>
</a>
</li>
<li className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `600ms`}}>
<a className="text-gray-300 flex items-center px-2 py-1 rounded-md hover:bg-gray-700" href="#">
<span>Forms</span>
</a>
</li>
</ul>
</div>
</div>
</nav>
</div>

<div className="flex-1 overflow-auto p-4 md:p-6">
<div className="animate-[slideInUp_0.5s_ease-in-out_forwards] opacity-0">
<h1 className="text-3xl font-bold text-white mb-6">Introduction</h1>
<p className="text-gray-300 mb-6">Welcome to our comprehensive documentation. This guide will help you understand the core concepts and get you started with building amazing applications.</p>
<div className="mb-8">
<h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
<ul className="space-y-2 text-gray-300">
<li className="flex items-start">
<svg className="h-6 w-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Responsive design system with dark mode support</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Component-based architecture for reusability</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Comprehensive API with extensive documentation</span>
</li>
</ul>
</div>

<h2 className="text-xl font-semibold text-white mb-4">Component Gallery</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700 opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `200ms`}}>
<div className="p-4">
<h3 className="text-white font-medium mb-2">Buttons</h3>
<p className="text-gray-400 text-sm">Customizable button components with various styles and states.</p>
</div>
<div className="bg-gray-900 p-4 flex flex-wrap gap-2">
<button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Primary</button>
<button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm">Secondary</button>
<button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">Success</button>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700 opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `300ms`}}>
<div className="p-4">
<h3 className="text-white font-medium mb-2">Cards</h3>
<p className="text-gray-400 text-sm">Flexible card layouts for displaying content in a clean format.</p>
</div>
<div className="bg-gray-900 p-4">
<div className="bg-gray-800 border border-gray-700 rounded p-3">
<h4 className="text-white text-sm font-medium">Card Title</h4>
<p className="text-gray-400 text-xs mt-1">This is a sample card with some content inside it.</p>
</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700 opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{animationDelay: `400ms`}}>
<div className="p-4">
<h3 className="text-white font-medium mb-2">Forms</h3>
<p className="text-gray-400 text-sm">Input components with validation and accessibility features.</p>
</div>
<div className="bg-gray-900 p-4">
<div className="space-y-2">
<input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Username" type="text" />
<input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Password" type="password" />
</div>
</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-[pulse_2s_ease-in-out_infinite]">
<h2 className="text-xl font-semibold text-white mb-2">Ready to get started?</h2>
<p className="text-gray-300 mb-4">Check out our installation guide to begin building your next project with our tools.</p>
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium transition-colors duration-300">
                Installation Guide →
              </button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
