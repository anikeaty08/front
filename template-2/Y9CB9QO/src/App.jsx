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
      
<div className="max-w-7xl mx-auto px-4 py-12">

<header className="mb-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center">
<div>
<h1 className="text-3xl font-semibold text-gray-900 mb-2">Updates</h1>
<p className="text-gray-500">Stay informed about the latest changes and releases</p>
</div>
<div className="mt-4 md:mt-0 flex items-center space-x-4">
<div className="relative">
<input className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500" placeholder="Search updates..." type="text" />
<svg className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<button className="px-4 py-2 bg-rose-500 text-white text-sm font-medium rounded-md hover:bg-rose-600 transition-colors">
            Subscribe
          </button>
</div>
</div>
</header>

<div className="flex flex-wrap items-center mb-8 space-x-0 space-y-2 md:space-x-4 md:space-y-0">
<span className="text-sm font-medium text-gray-500">Filter by:</span>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-rose-100 text-rose-700 text-sm font-medium rounded-md">
          All Updates
        </button>
<button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-50">
          Features
        </button>
<button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-50">
          Bug Fixes
        </button>
<button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-50">
          Performance
        </button>
<button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-50">
          API Changes
        </button>
</div>
</div>

<div className="bento-grid">

<div className="bento-card full-span p-6 md:p-8 bg-gradient-to-r from-rose-50 to-white">
<div className="flex flex-col md:flex-row gap-6">
<div className="md:w-2/3">
<div className="flex items-center space-x-2 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                New Release
              </span>
<span className="text-sm text-gray-500">May 12, 2023</span>
</div>
<h2 className="text-2xl font-semibold text-gray-900 mb-4">Version 3.0 - Major Platform Redesign</h2>
<p className="text-gray-600 mb-6">
              We're excited to announce our biggest update yet. Version 3.0 introduces a completely redesigned interface, enhanced performance, and powerful new features to help you work more efficiently.
            </p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-800" href="#">
                Learn more about v3.0
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                View changelog
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
<div className="md:w-1/3 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-rose-500 flex items-center justify-center text-white">
<span className="text-2xl font-bold">3.0</span>
</div>
</div>
</div>
</div>

<div className="bento-card p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Feature
          </span>
<span className="text-sm text-gray-500">May 5, 2023</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Enhanced Analytics Dashboard</h3>
<p className="text-gray-600 mb-4">
          Gain deeper insights with our completely redesigned analytics dashboard, featuring customizable widgets and real-time data processing.
        </p>
<a className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-800" href="#">
          Learn more
          <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="bento-card p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2">
<div className="flex items-center space-x-2 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Performance
              </span>
<span className="text-sm text-gray-500">April 28, 2023</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Optimized Loading Times</h3>
<p className="text-gray-600 mb-4">
              We've completely rewritten our core rendering engine, reducing initial load times by up to 60% and improving overall application responsiveness.
            </p>
<div className="flex items-center space-x-4">
<div className="text-center">
<div className="text-xl font-semibold text-rose-600">60%</div>
<div className="text-xs text-gray-500">Faster Loading</div>
</div>
<div className="text-center">
<div className="text-xl font-semibold text-rose-600">45%</div>
<div className="text-xs text-gray-500">Less Memory</div>
</div>
<div className="text-center">
<div className="text-xl font-semibold text-rose-600">3x</div>
<div className="text-xs text-gray-500">Faster Rendering</div>
</div>
</div>
</div>
<div className="flex items-center justify-center">
<div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
<svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="bento-card p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            API Changes
          </span>
<span className="text-sm text-gray-500">April 20, 2023</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">RESTful API Improvements</h3>
<p className="text-gray-600 mb-4">
          We've extended our API with additional endpoints and improved documentation, making it easier to integrate with third-party services.
        </p>
<pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto mb-4"><code>GET /api/v3/analytics/summary
Authorization: Bearer {"{"}token{"}"}
Accept: application/json</code></pre>
<a className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-800" href="#">
          View API documentation
          <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="bento-card p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Integrations
          </span>
<span className="text-sm text-gray-500">April 15, 2023</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">New Third-Party Integrations</h3>
<p className="text-gray-600 mb-4">
          Connect with your favorite tools seamlessly with our new integration system.
        </p>
<div className="flex flex-wrap gap-2 mb-4">
<div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">S</div>
<div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">A</div>
<div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">G</div>
<div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">D</div>
<div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">+</div>
</div>
</div>

<div className="bento-card full-span p-6">
<div className="flex items-center justify-between mb-6">
<div>
<div className="flex items-center space-x-2 mb-1">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Bug Fixes
              </span>
<span className="text-sm text-gray-500">April 10, 2023</span>
</div>
<h3 className="text-lg font-semibold text-gray-900">Notable Bug Fixes</h3>
</div>
<button className="text-sm text-gray-500 hover:text-gray-700">View all fixes</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-gray-50 rounded-lg p-4">
<h4 className="font-medium text-gray-900 mb-2">User Authentication</h4>
<p className="text-sm text-gray-600">Fixed an issue where some users would be logged out unexpectedly during long sessions.</p>
</div>
<div className="bg-gray-50 rounded-lg p-4">
<h4 className="font-medium text-gray-900 mb-2">Data Export</h4>
<p className="text-sm text-gray-600">Resolved a bug that caused CSV exports to fail when containing certain special characters.</p>
</div>
<div className="bg-gray-50 rounded-lg p-4">
<h4 className="font-medium text-gray-900 mb-2">Mobile Layout</h4>
<p className="text-sm text-gray-600">Fixed responsive layout issues on smaller devices with specific viewport dimensions.</p>
</div>
</div>
</div>

<div className="bento-card p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            Accessibility
          </span>
<span className="text-sm text-gray-500">April 5, 2023</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Improved Accessibility</h3>
<p className="text-gray-600 mb-4">
          Enhanced keyboard navigation, screen reader support, and improved color contrast throughout the application.
        </p>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-emerald-500"></div>
<span className="text-xs text-gray-500">WCAG 2.1 AA Compliant</span>
</div>
</div>

<div className="bento-card p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            Coming Soon
          </span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Roadmap Preview</h3>
<p className="text-gray-600 mb-6">
          Get a sneak peek at what we're working on for upcoming releases. Your feedback helps us prioritize features!
        </p>
<div className="space-y-3">
<div className="flex items-center">
<div className="w-1/4 text-sm font-medium text-gray-900">June 2023</div>
<div className="w-3/4 bg-gray-100 rounded-full h-2.5">
<div className="bg-rose-500 h-2.5 rounded-full" style={{width: `80%`}}></div>
</div>
</div>
<div className="flex items-center">
<div className="w-1/4 text-sm font-medium text-gray-900">August 2023</div>
<div className="w-3/4 bg-gray-100 rounded-full h-2.5">
<div className="bg-rose-500 h-2.5 rounded-full" style={{width: `45%`}}></div>
</div>
</div>
<div className="flex items-center">
<div className="w-1/4 text-sm font-medium text-gray-900">October 2023</div>
<div className="w-3/4 bg-gray-100 rounded-full h-2.5">
<div className="bg-rose-500 h-2.5 rounded-full" style={{width: `20%`}}></div>
</div>
</div>
</div>
</div>

<div className="bento-card full-span p-6">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="text-center md:text-left mb-6 md:mb-0">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Want to be notified about future updates?</h3>
<p className="text-gray-600">Sign up for our newsletter to get the latest updates delivered straight to your inbox.</p>
</div>
<div className="flex w-full md:w-auto">
<input className="w-full md:w-64 px-4 py-2.5 border border-gray-200 rounded-l-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500" placeholder="Enter your email" type="email" />
<button className="px-4 py-2.5 bg-rose-500 text-white font-medium rounded-r-md hover:bg-rose-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
</div>
</div>
</div>
</div>

<footer className="mt-16 pt-8 border-t border-gray-200">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="text-sm text-gray-500 mb-4 md:mb-0">
          © 2023 Company, Inc. All rights reserved.
        </div>
<div className="flex items-center space-x-6">
<a className="text-sm text-gray-500 hover:text-gray-700" href="#">Releases</a>
<a className="text-sm text-gray-500 hover:text-gray-700" href="#">Documentation</a>
<a className="text-sm text-gray-500 hover:text-gray-700" href="#">Status</a>
<a className="text-sm text-gray-500 hover:text-gray-700" href="#">Support</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
