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
<img alt="User avatar" className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
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
<div className="flex items-center">
<img alt="Site favicon" className="w-6 h-6 mr-3" src="https://www.google.com/s2/favicons?domain=example.com"/>
<div>
<h1 className="text-lg font-medium text-gray-900">example.com</h1>
<p className="text-sm text-gray-500">SEO Analysis Results</p>
</div>
</div>
<span className="ml-4 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">Score: 42/100</span>
</div>
<div className="flex items-center space-x-4">
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-download mr-1.5"></i>
                            Export SEO Report
                        </button>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-plus mr-1.5"></i>
                            Create SEO Tasks
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#security">
                                        Security
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#uiux">
                                        UI/UX Design
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#content">
                                        Content Copy
                                    </a>
</nav>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-bold text-gray-900 flex items-center">
<i className="fa-solid fa-search text-red-600 mr-3"></i>
                                            SEO Analysis
                                        </h2>
<p className="text-gray-600 mt-1">Search Engine Optimization audit with actionable recommendations</p>
</div>
<div className="text-right">
<div className="text-4xl font-bold text-red-600">42</div>
<div className="text-sm text-gray-500">Poor Score</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-red-900">Critical Issues</h4>
<i className="fa-solid fa-exclamation-triangle text-red-600"></i>
</div>
<div className="text-2xl font-bold text-red-600">6</div>
<p className="text-xs text-red-700">Fix immediately</p>
</div>
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-yellow-900">Warnings</h4>
<i className="fa-solid fa-exclamation-circle text-yellow-600"></i>
</div>
<div className="text-2xl font-bold text-yellow-600">8</div>
<p className="text-xs text-yellow-700">Needs attention</p>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-green-900">Passed</h4>
<i className="fa-solid fa-check-circle text-green-600"></i>
</div>
<div className="text-2xl font-bold text-green-600">12</div>
<p className="text-xs text-green-700">Working well</p>
</div>
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-blue-900">Opportunities</h4>
<i className="fa-solid fa-lightbulb text-blue-600"></i>
</div>
<div className="text-2xl font-bold text-blue-600">5</div>
<p className="text-xs text-blue-700">Growth potential</p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200 bg-red-50">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-red-900 flex items-center">
<i className="fa-solid fa-exclamation-triangle mr-2"></i>
                                        Critical SEO Issues (6)
                                    </h3>
<span className="text-sm text-red-700">Fix these first for maximum impact</span>
</div>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center mb-3">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-tags text-red-600 text-sm"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Missing Meta Description</h4>
<p className="text-sm text-gray-500">HomePage and 3 other pages</p>
</div>
</div>
<div className="ml-11">
<p className="text-sm text-gray-700 mb-3">
                                                    Your homepage and 3 other critical pages are missing meta descriptions. This impacts click-through rates from search results and can hurt your rankings.
                                                </p>
<div className="bg-gray-50 border-l-4 border-red-500 p-3 mb-3">
<h5 className="text-sm font-medium text-gray-900 mb-2">Recommendation:</h5>
<ul className="text-sm text-gray-700 space-y-1">
<li>• Add unique meta descriptions (150-160 characters each)</li>
<li>• Include primary keywords naturally</li>
<li>• Write compelling copy that encourages clicks</li>
<li>• Avoid duplicate descriptions across pages</li>
</ul>
</div>
<div className="flex items-center space-x-4 text-sm">
<span className="text-red-600 font-medium">Impact: High</span>
<span className="text-gray-500">Effort: 15 minutes</span>
<span className="text-gray-500">Pages affected: 4</span>
</div>
</div>
</div>
<div className="flex space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-brand-primary bg-brand-light rounded-md hover:bg-brand-primary hover:text-white">
                                                View Pages
                                            </button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                                                Create Task
                                            </button>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center mb-3">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-heading text-red-600 text-sm"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Duplicate Title Tags</h4>
<p className="text-sm text-gray-500">5 pages with identical titles</p>
</div>
</div>
<div className="ml-11">
<p className="text-sm text-gray-700 mb-3">
                                                    Multiple pages share the same title tag "Welcome to Our Website", which confuses search engines and reduces your ranking potential.
                                                </p>
<div className="bg-gray-50 border-l-4 border-red-500 p-3 mb-3">
<h5 className="text-sm font-medium text-gray-900 mb-2">Recommendation:</h5>
<ul className="text-sm text-gray-700 space-y-1">
<li>• Create unique titles for each page (50-60 characters)</li>
<li>• Include page-specific keywords</li>
<li>• Follow format: "Primary Keyword | Brand Name"</li>
<li>• Make titles descriptive and compelling</li>
</ul>
</div>
<div className="flex items-center space-x-4 text-sm">
<span className="text-red-600 font-medium">Impact: High</span>
<span className="text-gray-500">Effort: 20 minutes</span>
<span className="text-gray-500">Pages affected: 5</span>
</div>
</div>
</div>
<div className="flex space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-brand-primary bg-brand-light rounded-md hover:bg-brand-primary hover:text-white">
                                                View Pages
                                            </button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                                                Create Task
                                            </button>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center mb-3">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-image text-red-600 text-sm"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Missing Alt Text on Images</h4>
<p className="text-sm text-gray-500">23 images without alt attributes</p>
</div>
</div>
<div className="ml-11">
<p className="text-sm text-gray-700 mb-3">
                                                    23 images are missing alt text, which hurts accessibility and prevents search engines from understanding your content.
                                                </p>
<div className="bg-gray-50 border-l-4 border-red-500 p-3 mb-3">
<h5 className="text-sm font-medium text-gray-900 mb-2">Recommendation:</h5>
<ul className="text-sm text-gray-700 space-y-1">
<li>• Add descriptive alt text to all images</li>
<li>• Include relevant keywords naturally</li>
<li>• Keep descriptions concise but informative</li>
<li>• Use empty alt="" for decorative images only</li>
</ul>
</div>
<div className="flex items-center space-x-4 text-sm">
<span className="text-red-600 font-medium">Impact: High</span>
<span className="text-gray-500">Effort: 45 minutes</span>
<span className="text-gray-500">Images affected: 23</span>
</div>
</div>
</div>
<div className="flex space-x-2">
<button className="px-3 py-1.5 text-sm font-medium text-brand-primary bg-brand-light rounded-md hover:bg-brand-primary hover:text-white">
                                                View Images
                                            </button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                                                Create Task
                                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200 bg-yellow-50">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-yellow-900 flex items-center">
<i className="fa-solid fa-exclamation-circle mr-2"></i>
                                        SEO Warnings (8)
                                    </h3>
<span className="text-sm text-yellow-700">Should be addressed for better performance</span>
</div>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center mb-3">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-ruler-horizontal text-yellow-600 text-sm"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Title Tags Too Long</h4>
<p className="text-sm text-gray-500">3 pages exceed 60 characters</p>
</div>
</div>
<div className="ml-11">
<p className="text-sm text-gray-700 mb-3">
                                                    Some title tags are too long and may be truncated in search results, reducing click-through rates.
                                                </p>
<div className="flex items-center space-x-4 text-sm">
<span className="text-yellow-600 font-medium">Impact: Medium</span>
<span className="text-gray-500">Effort: 10 minutes</span>
</div>
</div>
</div>
<button className="px-3 py-1.5 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-md hover:bg-yellow-200">
                                            View Details
                                        </button>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center mb-3">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-heading text-yellow-600 text-sm"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Multiple H1 Tags</h4>
<p className="text-sm text-gray-500">2 pages have multiple H1 tags</p>
</div>
</div>
<div className="ml-11">
<p className="text-sm text-gray-700 mb-3">
                                                    Pages should have only one H1 tag to clearly indicate the main topic to search engines.
                                                </p>
<div className="flex items-center space-x-4 text-sm">
<span className="text-yellow-600 font-medium">Impact: Medium</span>
<span className="text-gray-500">Effort: 5 minutes</span>
</div>
</div>
</div>
<button className="px-3 py-1.5 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-md hover:bg-yellow-200">
                                            View Details
                                        </button>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-blue-900 flex items-center">
<i className="fa-solid fa-lightbulb mr-2"></i>
                                        SEO Opportunities (5)
                                    </h3>
<span className="text-sm text-blue-700">Growth potential to improve rankings</span>
</div>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center mb-3">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-code text-blue-600 text-sm"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Add Schema Markup</h4>
<p className="text-sm text-gray-500">Enhance search result appearance</p>
</div>
</div>
<div className="ml-11">
<p className="text-sm text-gray-700 mb-3">
                                                    Adding structured data can help your pages appear with rich snippets in search results, potentially increasing click-through rates.
                                                </p>
<div className="flex items-center space-x-4 text-sm">
<span className="text-blue-600 font-medium">Impact: Medium</span>
<span className="text-gray-500">Effort: 2 hours</span>
</div>
</div>
</div>
<button className="px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                                            Learn More
                                        </button>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center mb-3">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<i className="fa-solid fa-link text-blue-600 text-sm"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Improve Internal Linking</h4>
<p className="text-sm text-gray-500">Better content connection opportunities</p>
</div>
</div>
<div className="ml-11">
<p className="text-sm text-gray-700 mb-3">
                                                    Strategic internal linking can help distribute page authority and improve user navigation throughout your site.
                                                </p>
<div className="flex items-center space-x-4 text-sm">
<span className="text-blue-600 font-medium">Impact: Medium</span>
<span className="text-gray-500">Effort: 1 hour</span>
</div>
</div>
</div>
</div></div></div></div></div></div></main></div></div>
    </>
  );
}
