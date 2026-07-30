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
<h1 className="text-lg font-medium text-gray-900">example.com - SEO Analysis</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#seo">
                                        SEO Analysis
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#performance">
                                        Performance
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#accessibility">
                                        Accessibility
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#best-practices">
                                        Best Practices
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
<h3 className="text-lg font-medium text-gray-900">SEO Score Overview</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Good
                                    </span>
</div>
</div>
<div className="px-6 py-5">
<div className="flex flex-col md:flex-row">
<div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6">
<div className="flex flex-col items-center">
<div className="relative w-48 h-48">
<svg className="w-full h-full" viewBox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeDasharray="100, 100" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeDasharray="75, 100" strokeWidth="3"></path>
<text fill="#374151" fontSize="8" font-weight="bold" text-anchor="middle" x="18" y="20.5">75%</text>
</svg>
</div>
<div className="text-center mt-2">
<h4 className="text-sm font-medium text-gray-900">Overall SEO Score</h4>
<p className="text-xs text-gray-500 mt-1">Based on 52 SEO factors analyzed</p>
</div>
</div>
</div>
<div className="w-full md:w-2/3">
<h4 className="text-sm font-medium text-gray-900 mb-4">SEO Score Breakdown</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">On-Page SEO</span>
<span className="text-xs font-medium text-gray-700">82%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `82%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Meta tags, headings, content</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Technical SEO</span>
<span className="text-xs font-medium text-gray-700">65%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: `65%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Site structure, indexability, mobile</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Keyword Optimization</span>
<span className="text-xs font-medium text-gray-700">78%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `78%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Usage, density, competition</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Off-Page SEO</span>
<span className="text-xs font-medium text-gray-700">72%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `72%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Backlinks, social signals, authority</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">SEO Issues</h3>
<div>
<select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-brand-primary focus:ring-brand-primary">
<option>All Issues (23)</option>
<option>Critical (4)</option>
<option>Important (8)</option>
<option>Moderate (11)</option>
</select>
</div>
</div>
</div>
<div className="overflow-hidden">
<ul className="divide-y divide-gray-200">

<li>
<div className="px-6 py-5 flex items-start">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 flex-shrink-0">
<span className="text-red-600 text-sm font-medium">C</span>
</span>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-gray-900">Missing Meta Descriptions</h4>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Critical
                                                    </span>
</div>
<p className="mt-1 text-sm text-gray-500">12 pages are missing meta descriptions, including your homepage. Meta descriptions are crucial for CTR from search results.</p>
<div className="mt-3 flex">
<button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-brand-primary bg-brand-light hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                                        View affected pages
                                                    </button>
<button className="ml-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                        Fix automatically
                                                    </button>
</div>
</div>
</div>
</li>

<li>
<div className="px-6 py-5 flex items-start">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 flex-shrink-0">
<span className="text-amber-600 text-sm font-medium">I</span>
</span>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-gray-900">Duplicate Title Tags</h4>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                                        Important
                                                    </span>
</div>
<p className="mt-1 text-sm text-gray-500">3 pages have identical title tags. Each page should have a unique, descriptive title to avoid SEO penalties and improve user experience.</p>
<div className="mt-3 flex">
<button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-brand-primary bg-brand-light hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                                        View affected pages
                                                    </button>
<button className="ml-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                        Fix automatically
                                                    </button>
</div>
</div>
</div>
</li>

<li>
<div className="px-6 py-5 flex items-start">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-100 flex-shrink-0">
<span className="text-yellow-600 text-sm font-medium">M</span>
</span>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-gray-900">Image Alt Text Missing</h4>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        Moderate
                                                    </span>
</div>
<p className="mt-1 text-sm text-gray-500">28 images across your site are missing alt text. Alt text improves accessibility and gives search engines context about your images.</p>
<div className="mt-3 flex">
<button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-brand-primary bg-brand-light hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                                        View affected images
                                                    </button>
<button className="ml-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                        Generate AI alt text
                                                    </button>
</div>
</div>
</div>
</li>
</ul>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Keyword Analysis</h3>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Primary Keywords</h4>
<div className="bg-gray-50 rounded-lg p-4">
<div className="space-y-4">
<div>
<div className="flex justify-between items-center mb-1">
<div className="flex items-center">
<span className="text-sm font-medium text-gray-900">"website audit tool"</span>
<span className="ml-2 text-xs text-gray-500">Search volume: 5.2K/mo</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                            Strong
                                                        </span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `92%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Used in title, headings, and content with good density</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<div className="flex items-center">
<span className="text-sm font-medium text-gray-900">"SEO analysis tool"</span>
<span className="ml-2 text-xs text-gray-500">Search volume: 3.8K/mo</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                            Moderate
                                                        </span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: `65%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Used in content but missing from headings</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<div className="flex items-center">
<span className="text-sm font-medium text-gray-900">"website performance checker"</span>
<span className="ml-2 text-xs text-gray-500">Search volume: 2.1K/mo</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                            Weak
                                                        </span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: `38%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Low usage across site, needs optimization</p>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Keyword Opportunities</h4>
<div className="bg-gray-50 rounded-lg p-4">
<p className="text-sm text-gray-700 mb-4">These keywords are relevant to your business but currently underutilized:</p>
<ul className="space-y-3">
<li className="flex justify-between">
<div>
<span className="text-sm font-medium text-gray-900">"free website audit"</span>
<p className="text-xs text-gray-500">Search volume: 8.2K/mo | Competition: Medium</p>
</div>
<button className="inline-flex items-center px-2 py-1 text-xs font-medium rounded text-brand-primary border border-brand-primary hover:bg-brand-light">
                                                        Add to tracking
                                                    </button>
</li>
<li className="flex justify-between">
<div>
<span className="text-sm font-medium text-gray-900">"landing page optimization"</span>
<p className="text-xs text-gray-500">Search volume: 4.5K/mo | Competition: High</p>
</div>
<button className="inline-flex items-center px-2 py-1 text-xs font-medium rounded text-brand-primary border border-brand-primary hover:bg-brand-light">
                                                        Add to tracking
                                                    </button>
</li>
<li className="flex justify-between">
<div>
<span className="text-sm font-medium text-gray-900">"website speed checker"</span>
<p className="text-xs text-gray-500">Search volume: 6.1K/mo | Competition: Low</p>
</div>
<button className="inline-flex items-center px-2 py-1 text-xs font-medium rounded text-brand-primary border border-brand-primary hover:bg-brand-light">
                                                        Add to tracking
                                                    </button>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Technical SEO Health</h3>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-green-50 p-4 rounded-lg border border-green-100">
<div className="flex items-center">
<div className="flex-shrink-0">
<svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-gray-900">XML Sitemap</h4>
<p className="text-sm text-gray-500">Valid and submitted</p>
</div>
</div>
</div>
<div className="bg-green-50 p-4 rounded-lg border border-green-100">
<div className="flex items-center">
<div className="flex-shrink-0">
</div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
