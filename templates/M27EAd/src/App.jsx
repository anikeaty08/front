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
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Components</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Pricing</a>
<a className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600" href="#">Documentation</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Sign in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700" href="#">Get started</a>
</div>
</div>
</div>
</header>
<div className="flex flex-col md:flex-row min-h-screen">

<aside className="w-full md:w-64 bg-white border-r border-gray-100 p-6">
<div className="mb-8">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Getting Started</h3>
<ul className="space-y-2">
<li><a className="text-indigo-600 font-medium" href="#">Introduction</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Installation</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Quick Start</a></li>
</ul>
</div>
<div className="mb-8">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Components</h3>
<ul className="space-y-2">
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Buttons</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Forms</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Cards</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Navigation</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Modals</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Tables</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Resources</h3>
<ul className="space-y-2">
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Templates</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">Customization</a></li>
<li><a className="text-gray-700 hover:text-indigo-600" href="#">API Reference</a></li>
</ul>
</div>
</aside>

<main className="flex-1 p-6 md:p-10 bg-gray-50">
<div className="max-w-3xl">
<div className="flex items-center mb-2">
<span className="text-sm text-gray-500">Getting Started</span>
<i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
<span className="text-sm text-indigo-600">Introduction</span>
</div>
<h1 className="text-3xl font-bold mb-6">Introduction to Angle</h1>
<div className="prose max-w-none">
<p className="text-lg text-gray-600 mb-6">
            Angle is a comprehensive design system that provides everything you need to create beautiful user interfaces. This documentation will help you get started and make the most out of Angle.
          </p>
<h2 className="text-xl font-semibold mt-8 mb-4">What is Angle?</h2>
<p className="mb-4">
            Angle is a professional UI kit and design system that comes with hundreds of carefully crafted components and templates. It's built to help developers and designers create consistent, high-quality interfaces faster.
          </p>
<div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm my-6">
<h3 className="font-medium text-lg mb-3">Key Features</h3>
<ul className="space-y-2">
<li className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
<span>200+ modular UI components</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
<span>Responsive design system</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
<span>Pre-built templates for common use cases</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
<span>Comprehensive documentation</span>
</li>
</ul>
</div>
<h2 className="text-xl font-semibold mt-8 mb-4">Getting Started</h2>
<p className="mb-4">
            To start using Angle, you need to install it in your project. You can do this using npm or yarn:
          </p>
<pre><code>npm install angle-ui
# or
yarn add angle-ui</code></pre>
<p className="mt-6 mb-4">
            After installation, you can import components like this:
          </p>
<pre><code>import { Button, Card } from 'angle-ui';

function App() {
  return (
    &lt;div&gt;
      &lt;Card&gt;
        &lt;h2&gt;Hello World&lt;/h2&gt;
        &lt;p&gt;This is a sample card component from Angle.&lt;/p&gt;
        &lt;Button variant="primary"&gt;Learn More&lt;/Button&gt;
      &lt;/Card&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2 className="text-xl font-semibold mt-8 mb-4">Design Principles</h2>
<p className="mb-6">
            Angle is built on the following design principles:
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-white p-6 rounded-lg border border-gray-200">
<h3 className="font-medium mb-2">Consistency</h3>
<p className="text-gray-600 text-sm">All components follow the same design language for a cohesive user experience.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-gray-200">
<h3 className="font-medium mb-2">Flexibility</h3>
<p className="text-gray-600 text-sm">Components are customizable to fit your project's unique requirements.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-gray-200">
<h3 className="font-medium mb-2">Accessibility</h3>
<p className="text-gray-600 text-sm">Built with accessibility in mind to ensure your apps work for everyone.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-gray-200">
<h3 className="font-medium mb-2">Performance</h3>
<p className="text-gray-600 text-sm">Optimized for speed and efficiency without sacrificing quality.</p>
</div>
</div>
<div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 my-8">
<h3 className="font-medium text-indigo-700 mb-2">Next Steps</h3>
<p className="text-indigo-600 mb-4">Ready to dive deeper? Check out these resources:</p>
<ul className="space-y-2">
<li><a className="text-indigo-600 hover:underline" href="#">Installation Guide</a> - Detailed setup instructions</li>
<li><a className="text-indigo-600 hover:underline" href="#">Component API</a> - Complete component documentation</li>
<li><a className="text-indigo-600 hover:underline" href="#">Examples</a> - Real-world usage examples</li>
</ul>
</div>
</div>
</div>
</main>
</div>
<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-lg font-semibold mb-4">Product</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Features</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Pricing</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Resources</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Documentation</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Tutorials</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Support</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Company</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">About</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Legal</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Privacy</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
<p className="text-gray-400">© 2023 Angle. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-twitter"></i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-github"></i></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
