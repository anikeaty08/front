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
      
<header className="border-b border-gray-100">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<a className="text-2xl font-bold text-indigo-600" href="#">angle</a>
<nav className="hidden ml-10 md:flex space-x-8">
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Features</a>
<a className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600" href="#">Components</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Pricing</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Documentation</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Sign in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700" href="#">Get started</a>
</div>
</div>
</div>
</header>
<section className="bg-gray-50 py-20">
<div className="container mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-4xl font-bold mb-6">UI Components Library</h1>
<p className="text-xl text-gray-600 mb-10">A comprehensive collection of beautifully crafted UI components to build modern interfaces.</p>
</div>
</div>
</section>
<section className="py-12 border-b border-gray-100">
<div className="container mx-auto px-6">
<div className="flex flex-wrap justify-center gap-4">
<a className="px-5 py-2 bg-indigo-50 text-indigo-600 rounded-full font-medium text-sm hover:bg-indigo-100" href="#buttons">Buttons</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#forms">Forms</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#cards">Cards</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#navigation">Navigation</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#modals">Modals</a>
</div>
</div>
</section>
<section className="py-16" id="buttons">
<div className="container mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl font-bold mb-2">Buttons</h2>
<p className="text-gray-600">Flexible button components with various styles and states.</p>
</div>
<div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
<h3 className="text-lg font-medium mb-6 pb-4 border-b border-gray-100">Primary Buttons</h3>
<div className="flex flex-wrap gap-4 mb-8">
<button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">Default</button>
<button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium opacity-70 cursor-not-allowed">Disabled</button>
<button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 flex items-center gap-2">
<i className="fas fa-plus text-xs"></i> With Icon
          </button>
<button className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">Large</button>
<button className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">Small</button>
</div>
<h3 className="text-lg font-medium mb-6 pb-4 border-b border-gray-100">Secondary Buttons</h3>
<div className="flex flex-wrap gap-4 mb-8">
<button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-md font-medium hover:bg-indigo-50">Default</button>
<button className="px-4 py-2 bg-white text-gray-400 border border-gray-300 rounded-md font-medium cursor-not-allowed">Disabled</button>
<button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-md font-medium hover:bg-indigo-50 flex items-center gap-2">
<i className="fas fa-download text-xs"></i> With Icon
          </button>
</div>
<h3 className="text-lg font-medium mb-6 pb-4 border-b border-gray-100">Text Buttons</h3>
<div className="flex flex-wrap gap-4">
<button className="px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-md">Default</button>
<button className="px-4 py-2 text-gray-400 font-medium cursor-not-allowed">Disabled</button>
<button className="px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-md flex items-center gap-2">
<i className="fas fa-arrow-right text-xs"></i> With Icon
          </button>
</div>
</div>
</div>
</section>
<section className="py-16 bg-gray-50" id="forms">
<div className="container mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl font-bold mb-2">Form Elements</h2>
<p className="text-gray-600">Essential form components for capturing user input.</p>
</div>
<div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
<h3 className="text-lg font-medium mb-6 pb-4 border-b border-gray-100">Text Inputs</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Default Input</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" placeholder="Enter your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Disabled Input</label>
<input className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-500 rounded-md cursor-not-allowed" disabled="" placeholder="Disabled input" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Input with Icon</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="fas fa-search text-gray-400"></i>
</div>
<input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none" placeholder="Search" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Error Input</label>
<input className="w-full px-4 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none" placeholder="Invalid input" type="text"/>
<p className="mt-1 text-sm text-red-600">This field is required</p>
</div>
</div>
<h3 className="text-lg font-medium mb-6 pb-4 border-b border-gray-100">Select &amp; Checkbox</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Select Input</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none">
<option>Select an option</option>
<option>Option 1</option>
<option>Option 2</option>
<option>Option 3</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Checkbox Group</label>
<div className="space-y-2">
<div className="flex items-center">
<input className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-600" id="checkbox1" type="checkbox"/>
<label className="ml-2 text-sm text-gray-700" htmlFor="checkbox1">Option 1</label>
</div>
<div className="flex items-center">
<input className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-600" id="checkbox2" type="checkbox"/>
<label className="ml-2 text-sm text-gray-700" htmlFor="checkbox2">Option 2</label>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16" id="cards">
<div className="container mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl font-bold mb-2">Cards</h2>
<p className="text-gray-600">Versatile card components for displaying content.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
<img alt="Card Image" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2072&amp;q=80"/>
<div className="p-6">
<h3 className="font-medium text-lg mb-2">Basic Card</h3>
<p className="text-gray-600 mb-4">A simple card with image, title and description.</p>
<a className="text-indigo-600 font-medium text-sm hover:text-indigo-700" href="#">Learn more →</a>
</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-lg mb-1">Feature Card</h3>
<p className="text-sm text-gray-500">Without image</p>
</div>
<span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
</div>
<p className="text-gray-600 mb-4">A card variation without an image, ideal for feature highlights.</p>
<div className="flex justify-between items-center">
<a className="text-indigo-600 font-medium text-sm hover:text-indigo-700" href="#">Learn more</a>
<button className="p-2 text-gray-400 hover:text-gray-500">
<i className="fas fa-bookmark"></i>
</button>
</div>
</div>
</div>
<div className="bg-indigo-600 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
<div className="p-6">
<h3 className="font-medium text-lg mb-2 text-white">Colored Card</h3>
<p className="text-indigo-100 mb-4">A card with a colored background for emphasis.</p>
<a className="text-white font-medium text-sm hover:text-indigo-100 inline-flex items-center" href="#">
              Get started <i className="fas fa-arrow-right ml-2 text-xs"></i>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 bg-indigo-600">
<div className="container mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-white mb-6">Ready to build better interfaces?</h2>
<p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Get access to all components and start building your next project today.</p>
<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white rounded-md shadow-sm hover:bg-gray-50" href="#">
          Get started
        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-700 rounded-md shadow-sm hover:bg-indigo-800" href="#">
          View documentation
        </a>
</div>
</div>
</section>
<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-lg font-semibold mb-4">Product</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Features</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Pricing</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Changelog</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Resources</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Documentation</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Tutorials</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Blog</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Support</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Company</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">About</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Careers</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Legal</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Privacy</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Terms</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">License</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400">© 2023 Angle. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-twitter"></i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-github"></i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-linkedin"></i></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
