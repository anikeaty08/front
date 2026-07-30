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
<div className="flex items-center">
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 mr-4" onClick={(e) => { window.history.back() }}>
<i className="fa-solid fa-arrow-left mr-2"></i>
                            Back to SEO Analysis
                        </button>
<div className="flex items-center">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-tags text-red-600 text-sm"></i>
</div>
<div>
<h1 className="text-lg font-medium text-gray-900">Missing Meta Description</h1>
<p className="text-sm text-gray-500">Critical SEO Issue Details</p>
</div>
</div>
</div>
<div className="flex items-center space-x-3">
<span className="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">
<i className="fa-solid fa-exclamation-triangle mr-1"></i>
                            Critical
                        </span>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-plus mr-1.5"></i>
                            Create Task
                        </button>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-share mr-1.5"></i>
                            Share Issue
                        </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="px-4 py-6 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h2 className="text-2xl font-bold text-gray-900 mb-4">Issue Overview</h2>
<p className="text-gray-700 mb-4">
                                            Meta descriptions are HTML attributes that provide concise explanations of web page contents. They appear in search engine results pages (SERPs) below the page title and URL. When missing, search engines will automatically generate snippets from your page content, which may not accurately represent your page or encourage clicks.
                                        </p>
<div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-exclamation-triangle text-red-500"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-red-800">Why This Matters</h3>
<div className="mt-2 text-sm text-red-700">
<ul className="list-disc list-inside space-y-1">
<li>Reduces click-through rates from search results</li>
<li>Missed opportunity to include target keywords</li>
<li>Poor user experience in search results</li>
<li>Search engines may not understand page purpose</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-6">
<h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
<div className="space-y-4">
<div className="flex justify-between">
<span className="text-gray-600">Pages Affected:</span>
<span className="font-medium text-red-600">4 pages</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Impact Level:</span>
<span className="font-medium text-red-600">High</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Fix Time:</span>
<span className="font-medium text-green-600">15 minutes</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Priority:</span>
<span className="font-medium text-red-600">Critical</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">SEO Impact:</span>
<span className="font-medium">CTR & Rankings</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Affected Pages (4)</h3>
<button className="px-3 py-1.5 text-sm font-medium text-brand-primary bg-brand-light rounded-md hover:bg-brand-primary hover:text-white">
                                        Export List
                                    </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Title</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page Type</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traffic</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<i className="fa-solid fa-home text-gray-400 mr-3"></i>
<div>
<div className="text-sm font-medium text-gray-900">Homepage</div>
<div className="text-sm text-gray-500">example.com</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-gray-900">Welcome to Our Website</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Landing Page</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">2,340 visits/month</div>
<div className="text-sm text-gray-500">High priority</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<button className="text-brand-primary hover:text-brand-dark mr-3">View Page</button>
<button className="text-gray-600 hover:text-gray-900">Generate Meta</button>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<i className="fa-solid fa-info-circle text-gray-400 mr-3"></i>
<div>
<div className="text-sm font-medium text-gray-900">About Us</div>
<div className="text-sm text-gray-500">example.com/about</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-gray-900">About Our Company - Learn More</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Info Page</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">891 visits/month</div>
<div className="text-sm text-gray-500">Medium priority</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<button className="text-brand-primary hover:text-brand-dark mr-3">View Page</button>
<button className="text-gray-600 hover:text-gray-900">Generate Meta</button>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<i className="fa-solid fa-shopping-cart text-gray-400 mr-3"></i>
<div>
<div className="text-sm font-medium text-gray-900">Products</div>
<div className="text-sm text-gray-500">example.com/products</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-gray-900">Our Products and Services</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Product Page</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">1,567 visits/month</div>
<div className="text-sm text-gray-500">High priority</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<button className="text-brand-primary hover:text-brand-dark mr-3">View Page</button>
<button className="text-gray-600 hover:text-gray-900">Generate Meta</button>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<i className="fa-solid fa-envelope text-gray-400 mr-3"></i>
<div>
<div className="text-sm font-medium text-gray-900">Contact</div>
<div className="text-sm text-gray-500">example.com/contact</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-gray-900">Contact Us - Get in Touch</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Contact Page</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-gray-900">423 visits/month</div>
<div className="text-sm text-gray-500">Low priority</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<button className="text-brand-primary hover:text-brand-dark mr-3">View Page</button>
<button className="text-gray-600 hover:text-gray-900">Generate Meta</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900 flex items-center">
<i className="fa-solid fa-wrench mr-2 text-blue-600"></i>
                                    How to Fix This Issue
                                </h3>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div>
<h4 className="text-base font-medium text-gray-900 mb-4">Step-by-Step Guide</h4>
<div className="space-y-4">
<div className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</div>
<div>
<h5 className="font-medium text-gray-900">Identify Target Keywords</h5>
<p className="text-sm text-gray-600">Research and identify the primary keyword for each page that lacks a meta description.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</div>
<div>
<h5 className="font-medium text-gray-900">Write Compelling Meta Descriptions</h5>
<p className="text-sm text-gray-600">Craft unique, 150-160 character descriptions that include keywords and encourage clicks.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</div>
<div>
<h5 className="font-medium text-gray-900">Add HTML Meta Tags</h5>
<p className="text-sm text-gray-600">Insert the meta description tags in the {"<"}head{">"} section of each page.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</div>
<div>
<h5 className="font-medium text-gray-900">Test and Validate</h5>
<p className="text-sm text-gray-600">Use SEO tools to verify the meta descriptions appear correctly and meet length requirements.</p>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-base font-medium text-gray-900 mb-4">Code Example</h4>
<div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
<pre className="text-green-400 text-sm"><code>{"<"}head{">"}
  {"<"}meta name="description" 
        content="Discover our innovative products and 
        services designed to help your business grow. 
        Expert solutions with 24/7 support included."{">"}
{"<"}/head{">"}</code></pre>
</div>
<div className="mt-6">
<h4 className="text-base font-medium text-gray-900 mb-3">Best Practices</h4>
<div className="bg-green-50 border-l-4 border-green-500 p-4">
<ul className="text-sm text-green-700 space-y-2">
<li className="flex items-start">
<i className="fa-solid fa-check text-green-600 mr-2 mt-0.5"></i>
                                                        Keep descriptions between 150-160 characters
                                                    </li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-600 mr-2 mt-0.5"></i>
                                                        Include primary keyword naturally
                                                    </li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-600 mr-2 mt-0.5"></i>
                                                        Write unique descriptions for each page
                                                    </li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-600 mr-2 mt-0.5"></i>
                                                        Use action-oriented language
                                                    </li>
<li className="flex items-start">
<i className="fa-solid fa-check text-green-600 mr-2 mt-0.5"></i>
                                                        Avoid duplicate content across pages
                                                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900 flex items-center">
<i className="fa-solid fa-robot mr-2 text-purple-600"></i>
                                    AI-Generated Meta Description Suggestions
                                </h3>
</div>
<div className="divide-y divide-gray-200">
<div className="px-6 py-5">
<div className="flex items-start justify-between mb-3">
<div>
<h4 className="font-medium text-gray-900">Homepage (example.com)</h4>
<p className="text-sm text-gray-500">Based on page content analysis</p>
</div>
<span className="text-sm text-green-600 font-medium">154 characters</span>
</div>
<div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
<p className="text-gray-800">"Transform your business with our innovative solutions. Expert consulting, cutting-edge technology, and 24/7 support to drive your success forward."</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4 text-sm text-gray-600">
<span>Keywords: business, solutions, consulting</span>
<span>Action words: Transform, drive</span>
</div>
<div className="flex space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-purple-700 bg-purple-100 rounded-md hover:bg-purple-200">
                                                Use This
                                            </button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                                                Regenerate
                                            </button>
</div>
</div>
</div>
<div className="px-6 py-5">
<div className="flex items-start justify-between mb-3">
<div>
<h4 className="font-medium text-gray-900">Products Page (example.com/products)</h4>
<p className="text-sm text-gray-500">Based on page content analysis</p>
</div>
<span className="text-sm text-green-600 font-medium">148 characters</span>
</div>
<div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
<p className="text-gray-800">"Explore our comprehensive product lineup designed for modern businesses. Quality, innovation, and reliability in every solution we deliver."</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4 text-sm text-gray-600">
<span>Keywords: products, businesses, solutions</span>
<span>Action words: Explore, deliver</span>
</div>
<div className="flex space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-purple-700 bg-purple-100 rounded-md hover:bg-purple-200">
                                                Use This
                                            </button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                                                Regenerate
                                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Related SEO Issues</h3>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
<div className="flex items-center mb-2">
<i className="fa-solid fa-heading text-yellow-600 mr-2"></i>
<h4 className="font-medium text-yellow-900">Duplicate Title Tags</h4>
</div>
<p className="text-sm text-yellow-700 mb-3">5 pages share identical title tags</p></div></div></div></div></div></div></main></div></div>
    </>
  );
}
