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
      

<aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between z-20">
<div>
<div className="flex items-center gap-2 px-6 py-6 border-b">
<div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-xl">AI</div>
<span className="font-bold text-lg text-gray-700">AuditPro</span>
</div>
<nav className="mt-5 flex-1">
<ul className="space-y-1">
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Dashboard
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>All Audits
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>New Audit
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-r-lg font-medium" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Audit Results
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Report Generator
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>White Label
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Tasks
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Team
            </a>
</li>
</ul>
</nav>
</div>
<div className="px-6 py-4 border-t">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">PR</div>
<div>
<p className="font-semibold text-gray-800 text-sm">Prince Reuben</p>
<p className="text-xs text-gray-500">Pro Plan</p>
</div>
<button className="ml-auto text-gray-400 hover:text-blue-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</aside>
<main className="ml-64 min-h-screen">
<div className="px-8 py-8">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-3xl font-bold text-gray-900">Audit Results: example.com</h1>
<p className="text-gray-500 mt-1">Analysis completed on May 24, 2023 • 2:45 PM</p>
</div>
<div className="flex gap-3">
<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Export PDF
          </button>
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:shadow-lg transition flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Create Tasks
          </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">

<div className="bg-white rounded-2xl shadow-sm border p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-medium text-gray-500">Overall Score</h3>
<div className="text-4xl font-bold text-gray-900 mt-1">85<span className="text-xl text-gray-400">/100</span></div>
</div>
<div className="bg-green-100 rounded-lg px-2.5 py-1.5 text-sm font-medium text-green-800">Good</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2.5">
<div className="bg-green-500 h-2.5 rounded-full" style={{width: `85%`}}></div>
</div>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<div>Poor</div>
<div>Average</div>
<div>Good</div>
<div>Excellent</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-medium text-gray-500">Performance</h3>
<div className="text-4xl font-bold text-gray-900 mt-1">78<span className="text-xl text-gray-400">/100</span></div>
</div>
<div className="bg-yellow-100 rounded-lg px-2.5 py-1.5 text-sm font-medium text-yellow-800">Average</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2.5">
<div className="bg-yellow-500 h-2.5 rounded-full" style={{width: `78%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-3">5 issues identified that need attention</p>
</div>

<div className="bg-white rounded-2xl shadow-sm border p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-medium text-gray-500">SEO</h3>
<div className="text-4xl font-bold text-gray-900 mt-1">92<span className="text-xl text-gray-400">/100</span></div>
</div>
<div className="bg-green-100 rounded-lg px-2.5 py-1.5 text-sm font-medium text-green-800">Excellent</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2.5">
<div className="bg-green-500 h-2.5 rounded-full" style={{width: `92%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-3">2 issues identified that need attention</p>
</div>

<div className="bg-white rounded-2xl shadow-sm border p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-medium text-gray-500">Accessibility</h3>
<div className="text-4xl font-bold text-gray-900 mt-1">81<span className="text-xl text-gray-400">/100</span></div>
</div>
<div className="bg-green-100 rounded-lg px-2.5 py-1.5 text-sm font-medium text-green-800">Good</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2.5">
<div className="bg-green-500 h-2.5 rounded-full" style={{width: `81%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-3">7 issues identified that need attention</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border overflow-hidden">
<div className="px-6 py-5 border-b">
<h2 className="text-lg font-bold text-gray-900">Issues Summary</h2>
</div>
<div className="p-6">
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-red-50 rounded-xl p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-xs text-red-600 font-medium">Critical</div>
<div className="text-2xl font-bold text-gray-900">5</div>
</div>
</div>
</div>
<div className="bg-yellow-50 rounded-xl p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
<svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-xs text-yellow-600 font-medium">Warnings</div>
<div className="text-2xl font-bold text-gray-900">12</div>
</div>
</div>
</div>
<div className="bg-blue-50 rounded-xl p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-xs text-blue-600 font-medium">Notices</div>
<div className="text-2xl font-bold text-gray-900">8</div>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-12 h-2 bg-red-500 rounded-full"></div>
<div className="text-sm text-gray-600 flex-1">Performance Issues</div>
<div className="text-sm font-medium text-gray-800">9 issues</div>
</div>
<div className="flex items-center gap-4">
<div className="w-24 h-2 bg-yellow-500 rounded-full"></div>
<div className="text-sm text-gray-600 flex-1">SEO Issues</div>
<div className="text-sm font-medium text-gray-800">5 issues</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-2 bg-purple-500 rounded-full"></div>
<div className="text-sm text-gray-600 flex-1">Accessibility Issues</div>
<div className="text-sm font-medium text-gray-800">7 issues</div>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-2 bg-blue-500 rounded-full"></div>
<div className="text-sm text-gray-600 flex-1">Best Practices Issues</div>
<div className="text-sm font-medium text-gray-800">4 issues</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
<div className="px-6 py-5 border-b">
<h2 className="text-lg font-bold text-gray-900">Page Information</h2>
</div>
<div className="p-6">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-xs text-gray-500 mb-1">URL</div>
<div className="text-sm text-gray-900 font-medium">https://example.com</div>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-xs text-gray-500 mb-1">Load Time</div>
<div className="text-sm text-gray-900 font-medium">2.4 seconds</div>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-xs text-gray-500 mb-1">Page Size</div>
<div className="text-sm text-gray-900 font-medium">1.8 MB</div>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-xs text-gray-500 mb-1">HTTP Requests</div>
<div className="text-sm text-gray-900 font-medium">42 requests</div>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-xs text-gray-500 mb-1">Security</div>
<div className="text-sm text-gray-900 font-medium">HTTPS Enabled</div>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-xs text-gray-500 mb-1">Mobile Friendly</div>
<div className="text-sm text-gray-900 font-medium">Yes (Score: 88/100)</div>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border overflow-hidden mb-8">
<div className="px-6 py-5 border-b flex justify-between items-center">
<h2 className="text-lg font-bold text-gray-900">Critical Issues (5)</h2>
<button className="text-blue-600 text-sm font-medium hover:text-blue-800">Fix All Issues</button>
</div>
<div className="divide-y">

<div className="p-6">
<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex-1">
<h3 className="text-base font-semibold text-gray-900 mb-1">Large JavaScript Bundle Size</h3>
<p className="text-sm text-gray-600 mb-3">Your main JavaScript bundle is 2.4MB uncompressed, which is significantly slowing down page load times.</p>
<div className="bg-gray-50 rounded-lg p-4 mb-4">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-gray-900">Impact on Performance</div>
<div className="text-sm text-gray-500">High</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
<div className="mb-4">
<h4 className="text-sm font-medium text-gray-900 mb-2">How to Fix:</h4>
<ul className="list-disc text-sm text-gray-600 pl-5 space-y-1">
<li>Split your JavaScript into smaller chunks</li>
<li>Implement code splitting and lazy loading</li>
<li>Remove unused dependencies and code</li>
<li>Minify and compress JavaScript files</li>
</ul>
</div>
<div className="flex gap-3">
<button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700">Fix Issue</button>
<button className="border border-gray-300 text-gray-700 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50">Learn More</button>
</div>
</div>
</div>
</div>
</div></div></div></main>
    </>
  );
}
