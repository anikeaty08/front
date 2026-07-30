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
      
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            primary: '#4984FF',
                            light: '#EBF2FF',
                            dark: '#3570F4'
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
      
<div className="flex h-screen overflow-hidden">

<aside className="hidden md:flex md:flex-shrink-0">
<div className="flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
<div className="flex items-center justify-center h-16 px-4 border-b border-gray-100">
<span className="text-xl font-bold text-brand-primary">AuditPro</span>
</div>
<div className="flex flex-col flex-1 overflow-y-auto">
<nav className="flex-1 px-2 py-4 space-y-1">
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="dashboard.html">
<i className="fa-solid fa-gauge-high mr-3"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="all-audits.html">
<i className="fa-solid fa-list-check mr-3"></i>
<span>All Audits</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="new-audit.html">
<i className="fa-solid fa-plus mr-3"></i>
<span>New Audit</span>
</a>
<a className="flex items-center px-4 py-3 bg-brand-light text-brand-primary rounded-md" href="audit-results.html">
<i className="fa-solid fa-chart-simple mr-3"></i>
<span>Audit Results</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="report-generator.html">
<i className="fa-solid fa-file-lines mr-3"></i>
<span>Report Generator</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="white-label.html">
<i className="fa-solid fa-tag mr-3"></i>
<span>White Label Settings</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="tasks.html">
<i className="fa-solid fa-list-check mr-3"></i>
<span>Tasks</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="team.html">
<i className="fa-solid fa-users mr-3"></i>
<span>Team</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="billing.html">
<i className="fa-solid fa-credit-card mr-3"></i>
<span>Billing</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="settings.html">
<i className="fa-solid fa-gear mr-3"></i>
<span>Settings</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center">
<img alt="User avatar" className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">Prince Reuben</p>
<p className="text-xs text-gray-500">Pro Plan</p>
</div>
</div>
</div>
</div>
</aside>
<div className="flex flex-col flex-1 overflow-hidden">

<header className="w-full">
<div className="relative z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
<button className="px-4 text-gray-500 md:hidden">
<i className="fa-solid fa-bars"></i>
</button>
<div className="flex items-center">
<h1 className="text-lg font-medium text-gray-900">example.com - Security Analysis</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Caution</span>
</div>
<div className="flex items-center space-x-4">
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-download mr-1.5"></i>
                            Export
                        </button>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-file-lines mr-1.5"></i>
                            Generate Report
                        </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="px-4 py-5 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="border-b border-gray-200">
<nav className="flex -mb-px overflow-x-auto">
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="audit-results.html">
                                        Overview
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#seo">
                                        SEO Analysis
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#performance">
                                        Performance
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#accessibility">
                                        Accessibility
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#security">
                                        Security
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#uiux">
                                        UI/UX Design
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#content">
                                        Content Analysis
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#ai-recommendations">
                                        AI Recommendations
                                    </a>
</nav>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Security Score Overview</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Moderate Risk
                                    </span>
</div>
</div>
<div className="px-6 py-5">
<div className="flex flex-col lg:flex-row">
<div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:pr-6 flex justify-center">
<div className="flex flex-col items-center">
<div className="relative w-48 h-48">
<svg className="w-full h-full" viewBox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeDasharray="100, 100" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eab308" strokeDasharray="65, 100" strokeWidth="3"></path>
<text fill="#374151" fontSize="8" font-weight="bold" text-anchor="middle" x="18" y="20.5">65%</text>
</svg>
</div>
<div className="text-center mt-2">
<h4 className="text-sm font-medium text-gray-900">Overall Security Score</h4>
<p className="text-xs text-gray-500 mt-1">Based on modern web security standards</p>
</div>
</div>
</div>
<div className="w-full lg:w-2/3">
<h4 className="text-sm font-medium text-gray-900 mb-4">Security Category Scores</h4>
<div className="grid grid-cols-1 gap-4">

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">HTTPS & Transport Security</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Secure
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 95/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `95%`}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Content Security Policy</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Missing
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 0/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: `0%`}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Cookie Security</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        Needs Improvement
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 60/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: `60%`}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">X-Frame-Options & Clickjacking Protection</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Secure
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 100/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `100%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Security Issues Found</h3>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-triangle-exclamation text-red-600"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-red-800">Missing Content Security Policy (CSP)</h3>
<div className="mt-2 text-sm text-red-700">
<p>Your website doesn't implement a Content Security Policy, leaving it vulnerable to XSS attacks.</p>
</div>
<div className="mt-4">
<div className="flex">
<button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="button">
                                                            Learn how to fix
                                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-exclamation text-yellow-600"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-yellow-800">Insecure Cookie Settings</h3>
<div className="mt-2 text-sm text-yellow-700">
<p>Some cookies don't have the 'Secure' and 'HttpOnly' flags set. This makes them vulnerable to theft via man-in-the-middle attacks.</p>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center">
<i className="fa-solid fa-cookie text-yellow-600 mr-2"></i>
<code className="text-xs bg-yellow-100 px-2 py-1 rounded">sessionid</code>
<span className="text-xs ml-2">missing HttpOnly flag</span>
</div>
<div className="flex items-center">
<i className="fa-solid fa-cookie text-yellow-600 mr-2"></i>
<code className="text-xs bg-yellow-100 px-2 py-1 rounded">user_preferences</code>
<span className="text-xs ml-2">missing Secure flag</span>
</div>
</div>
<div className="mt-4">
<div className="flex">
<button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="button">
                                                            Learn how to fix
                                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-exclamation text-yellow-600"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-yellow-800">Mixed Content</h3>
<div className="mt-2 text-sm text-yellow-700">
<p>Your HTTPS site is loading resources over HTTP, which can be intercepted and modified by attackers.</p>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center">
<i className="fa-solid fa-file-image text-yellow-600 mr-2"></i>
<code className="text-xs bg-yellow-100 px-2 py-1 rounded">http://example.com/images/banner.jpg</code>
</div>
<div className="flex items-center">
<i className="fa-solid fa-code text-yellow-600 mr-2"></i>
<code className="text-xs bg-yellow-100 px-2 py-1 rounded">http://analytics.example.com/script.js</code>
</div>
</div>
<div className="mt-4">
<div className="flex">
<button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="button">
                                                            Learn how to fix
                                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Passed Security Checks</h3>
</div>
<div className="divide-y divide-gray-200">
<div className="px-6 py-4">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-check-circle text-green-500"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-gray-800">HTTPS Implementation</h3>
<p className="text-sm text-gray-500">Your site correctly uses HTTPS with a valid SSL certificate</p>
</div>
</div>
</div>
<div className="px-6 py-4">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-check-circle text-green-500"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-gray-800">X-Frame-Options Header</h3>
<p className="text-sm text-gray-500">Properly configured to prevent clickjacking attacks</p>
</div>
</div>
</div>
<div className="px-6 py-4">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-check-circle text-green-500"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-gray-800">X-Content-Type-Options</h3>
<p className="text-sm text-gray-500">Properly set to 'nosniff' to prevent MIME type confusion attacks</p>
</div>
</div>
</div>
<div className="px-6 py-4">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-check-circle text-green-500"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-gray-800">No Server Information Leakage</h3>
<p className="text-sm text-gray-500">Your server does not expose version information in headers</p>
</div>
</div>
</div>
<div className="px-6 py-4">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-check-circle text-green-500"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-gray-800">HTTP Strict Transport Security (HSTS)</h3>
<p className="text-sm text-gray-500">HSTS is properly configured to ensure secure connections</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">AI-Generated Security Recommendations</h3>
</div>
<div className="px-6 py-5">
<div className="space-y-4">
<div className="rounded-md bg-blue-50 p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-robot text-blue-600"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-blue-800">Priority Fixes</h3>
<div className="mt-2 text-sm text-blue-700">
<ol className="list-decimal pl-5 space-y-2">
<li>Implement a Content Security Policy (CSP) to prevent XSS attacks. Start with a policy that restricts script sources to your own domain.</li>
<li>Set the Secure and HttpOnly flags on all cookies that contain sensitive information, especially session cookies.</li>
<li>Update all mixed content references to use HTTPS instead of HTTP to prevent man-in-the-middle attacks.</li>
</ol>
</div>
</div>
</div>
</div>
<div className="p-4 border border-gray-200 rounded-md">
<h4 className="text-sm font-medium text-gray-900 mb-2">Example Content Security Policy</h4>
<div className="bg-gray-50 p-3 rounded overflow-x-auto">
<pre className="text-xs text-gray-800">Content-Security-Policy: default-src 'self'; 
script-src 'self' https://trusted-cdn.com; 
style-src 'self' https://trusted-cdn.com; 
img-src 'self' https://trusted-cdn.com data:; 
font-src 'self' https://trusted-cdn.com; 
connect-src 'self'; 
media-src 'self'; 
object-src 'none'; 
frame-src 'self'; 
worker-src 'self'; 
frame-ancestors 'self'; 
form-action 'self'; 
upgrade-insecure-requests;</pre>
</div>
</div>
<div className="p-4 border border-gray-200 rounded-md">
<h4 className="text-sm font-medium text-gray-900 mb-2">Example Secure Cookie Settings</h4>
<div className="bg-gray-50 p-3 rounded overflow-x-auto">
<pre className="text-xs text-gray-800">Set-Cookie: sessionid=abc123; Path=/; Secure; HttpOnly; SameSite=Lax
Set-Cookie: user_preferences=dark_mode; Path=/; Secure; SameSite=Lax</pre>
</div>
</div>
<div className="mt-4"></div></div></div></div></div></div></main></div></div>
    </>
  );
}
