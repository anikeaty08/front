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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'sf': ['"SF Pro Display"', 'sans-serif'],
                    },
                    colors: {
                        'apple-gray': {
                            50: '#f9f9f9',
                            100: '#f3f3f3',
                            200: '#e5e5e5',
                            300: '#d2d2d2',
                            400: '#a0a0a0',
                            500: '#737373',
                            600: '#525252',
                            700: '#404040',
                            800: '#262626',
                            900: '#171717',
                        },
                        'apple-blue': {
                            500: '#0071e3',
                            600: '#0058b9',
                        }
                    }
                }
            }
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
      

<aside className="w-64 border-r border-apple-gray-200 h-screen sticky top-0 overflow-y-auto hidden md:block">

<div className="p-6 border-b border-apple-gray-200">
<h1 className="text-xl font-semibold">Developer</h1>
</div>

<nav className="p-4">
<div className="mb-6">
<h2 className="text-apple-gray-500 text-xs font-medium uppercase tracking-wider mb-3 px-2">Getting Started</h2>
<ul>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-blue-500 font-medium" href="#">
                            Overview
                        </a>
</li>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Installation
                        </a>
</li>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Quick Start
                        </a>
</li>
</ul>
</div>
<div className="mb-6">
<h2 className="text-apple-gray-500 text-xs font-medium uppercase tracking-wider mb-3 px-2">Core Concepts</h2>
<ul>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Architecture
                        </a>
</li>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Data Management
                        </a>
</li>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Security
                        </a>
</li>
</ul>
</div>
<div className="mb-6">
<h2 className="text-apple-gray-500 text-xs font-medium uppercase tracking-wider mb-3 px-2">API Reference</h2>
<ul>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Authentication
                        </a>
</li>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Endpoints
                        </a>
</li>
<li className="mb-1">
<a className="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50" href="#">
                            Error Handling
                        </a>
</li>
</ul>
</div>
</nav>
</aside>

<div className="md:hidden fixed bottom-4 right-4 z-50">
<button className="bg-apple-blue-500 text-white p-3 rounded-full shadow-lg">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<main className="flex-1 min-w-0 overflow-auto">

<header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-apple-gray-200 z-10">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="md:hidden font-semibold">Developer</div>
<div className="flex items-center space-x-4">
<div className="relative">
<input className="w-full md:w-64 bg-apple-gray-100 border border-apple-gray-200 rounded-lg py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-apple-blue-500" placeholder="Search documentation..." type="text"/>
<svg className="w-4 h-4 text-apple-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<a className="text-apple-gray-600 hover:text-apple-gray-900" href="#">Feedback</a>
</div>
</div>
</div>
</header>

<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<nav className="text-sm mb-6">
<ol className="flex items-center space-x-2">
<li><a className="text-apple-gray-500 hover:text-apple-gray-700" href="#">Home</a></li>
<li className="text-apple-gray-500 flex items-center">
<svg className="w-3 h-3 mx-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<a className="text-apple-gray-500 hover:text-apple-gray-700" href="#">Getting Started</a>
</li>
<li className="text-apple-gray-500 flex items-center">
<svg className="w-3 h-3 mx-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-apple-gray-900">Overview</span>
</li>
</ol>
</nav>

<div className="mb-8">
<h1 className="text-3xl font-semibold mb-2">Overview</h1>
<p className="text-apple-gray-500">Learn the basics of our platform and get started quickly</p>
</div>

<div className="prose max-w-none">
<p className="text-lg mb-6">
                    Our platform provides a comprehensive set of tools and APIs to help you build amazing applications. This guide will help you understand the core concepts and get started quickly.
                </p>
<h2 className="text-2xl font-medium mt-8 mb-4">Key Features</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="bg-apple-gray-50 rounded-xl p-5">
<div className="flex items-start">
<div className="bg-apple-blue-500/10 p-2 rounded-lg mr-4">
<svg className="w-6 h-6 text-apple-blue-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-lg mb-1">Fast Integration</h3>
<p className="text-apple-gray-600 text-sm">
                                    Integrate with your existing systems quickly using our simple API.
                                </p>
</div>
</div>
</div>

<div className="bg-apple-gray-50 rounded-xl p-5">
<div className="flex items-start">
<div className="bg-apple-blue-500/10 p-2 rounded-lg mr-4">
<svg className="w-6 h-6 text-apple-blue-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-lg mb-1">Secure by Design</h3>
<p className="text-apple-gray-600 text-sm">
                                    Enterprise-grade security with end-to-end encryption.
                                </p>
</div>
</div>
</div>
</div>
<h2 className="text-2xl font-medium mt-8 mb-4">Getting Started</h2>
<p className="mb-4">
                    To get started with our platform, follow these simple steps:
                </p>
<div className="bg-apple-gray-50 rounded-xl p-6 mb-6">
<ol className="list-decimal list-inside space-y-3 text-apple-gray-800">
<li>
<span className="font-medium">Create an account</span>
<p className="text-apple-gray-600 text-sm ml-5 mt-1">
                                Sign up for a free account to get your API keys.
                            </p>
</li>
<li>
<span className="font-medium">Install the SDK</span>
<p className="text-apple-gray-600 text-sm ml-5 mt-1">
                                Install our SDK using your preferred package manager.
                            </p>
</li>
<li>
<span className="font-medium">Configure your application</span>
<p className="text-apple-gray-600 text-sm ml-5 mt-1">
                                Add your API keys to your application configuration.
                            </p>
</li>
<li>
<span className="font-medium">Make your first API call</span>
<p className="text-apple-gray-600 text-sm ml-5 mt-1">
                                Follow our examples to make your first API call.
                            </p>
</li>
</ol>
</div>
<h2 className="text-2xl font-medium mt-8 mb-4">Code Example</h2>
<div className="bg-apple-gray-900 rounded-xl p-4 mb-6 overflow-x-auto">
<pre className="text-white text-sm"><code>// Initialize the SDK
const client = new ApiClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Make a request
const response = await client.resources.create({
  name: 'Example Resource',
  type: 'document',
  data: {
    content: 'Hello world!'
  }
});

console.log(response);</code></pre>
</div>
<h2 className="text-2xl font-medium mt-8 mb-4">Next Steps</h2>
<p className="mb-4">
                    Now that you have a basic understanding of our platform, you can:
                </p>
<ul className="list-disc list-inside space-y-2 mb-8 text-apple-gray-800">
<li>Explore the <a className="text-apple-blue-500 hover:text-apple-blue-600" href="#">API reference</a> to learn about all available endpoints</li>
<li>Check out our <a className="text-apple-blue-500 hover:text-apple-blue-600" href="#">tutorials</a> for step-by-step guides</li>
<li>Join our <a className="text-apple-blue-500 hover:text-apple-blue-600" href="#">community forum</a> to ask questions and share ideas</li>
</ul>
</div>

<div className="border-t border-apple-gray-200 mt-12 pt-6">
<div className="flex justify-between">
<a className="text-apple-blue-500 hover:text-apple-blue-600 flex items-center" href="#">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        Installation
                    </a>
<a className="text-apple-blue-500 hover:text-apple-blue-600 flex items-center" href="#">
                        Quick Start
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
</main>

    </>
  );
}
