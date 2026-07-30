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
<div className="flex items-center">
<img alt="Site favicon" className="w-6 h-6 mr-3" src="https://www.google.com/s2/favicons?domain=example.com" />
<div>
<h1 className="text-lg font-medium text-gray-900">example.com</h1>
<p className="text-sm text-gray-500">Completed 2 minutes ago</p>
</div>
</div>
<span className="ml-4 px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">Needs Improvement</span>
</div>
<div className="flex items-center space-x-4">
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-download mr-1.5"></i>
                            Export PDF
                        </button>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-share mr-1.5"></i>
                            Share
                        </button>
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-redo mr-1.5"></i>
                            Re-run Audit
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#overview">
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#security">
                                        Security
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#legal">
                                        Legal
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#navigation">
                                        Navigation
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#sections">
                                        Sections
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#uiux">
                                        UI/UX Design
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#content">
                                        Content Copy
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#conversion">
                                        Conversion Optimization
                                    </a>
</nav>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-bold text-gray-900">Website Audit Overview</h2>
<p className="text-gray-600 mt-1">Comprehensive analysis completed on January 15, 2024</p>
</div>
<div className="text-right">
<div className="text-3xl font-bold text-yellow-600">67</div>
<div className="text-sm text-gray-500">Overall Score</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="flex flex-col items-center justify-center">
<div className="relative w-40 h-40">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" strokeDasharray="67, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-3xl font-bold text-gray-900">67</div>
<div className="text-sm text-gray-500">/ 100</div>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-gray-900 mt-4">Website Health Score</h3>
<p className="text-sm text-gray-500 text-center mt-1">Needs improvement across multiple areas</p>
</div>

<div className="lg:col-span-2">
<h4 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h4>
<div className="grid grid-cols-2 gap-4">
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-red-900">Critical Issues</p>
<p className="text-2xl font-bold text-red-600">8</p>
</div>
<div className="p-2 bg-red-100 rounded-lg">
<i className="fa-solid fa-exclamation-triangle text-red-600"></i>
</div>
</div>
<p className="text-xs text-red-700 mt-2">Require immediate attention</p>
</div>
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-yellow-900">Warnings</p>
<p className="text-2xl font-bold text-yellow-600">14</p>
</div>
<div className="p-2 bg-yellow-100 rounded-lg">
<i className="fa-solid fa-exclamation-circle text-yellow-600"></i>
</div>
</div>
<p className="text-xs text-yellow-700 mt-2">Should be addressed soon</p>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-green-900">Passed Checks</p>
<p className="text-2xl font-bold text-green-600">23</p>
</div>
<div className="p-2 bg-green-100 rounded-lg">
<i className="fa-solid fa-check-circle text-green-600"></i>
</div>
</div>
<p className="text-xs text-green-700 mt-2">Working well</p>
</div>
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-blue-900">Opportunities</p>
<p className="text-2xl font-bold text-blue-600">12</p>
</div>
<div className="p-2 bg-blue-100 rounded-lg">
<i className="fa-solid fa-lightbulb text-blue-600"></i>
</div>
</div>
<p className="text-xs text-blue-700 mt-2">Growth potential identified</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

<div className="bg-white shadow rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center">
<div className="p-2 bg-red-100 rounded-lg mr-3">
<i className="fa-solid fa-search text-red-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">SEO</h3>
<p className="text-sm text-gray-500">Search Engine Optimization</p>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-red-600">42</div>
<div className="text-xs text-gray-500">Poor</div>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-600 h-2 rounded-full" style={{width: `42%`}}></div>
</div>
<div className="mt-3 text-sm text-gray-600">
<span className="text-red-600 font-medium">6 critical issues</span> found
                                </div>
</div>

<div className="bg-white shadow rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center">
<div className="p-2 bg-yellow-100 rounded-lg mr-3">
<i className="fa-solid fa-bolt text-yellow-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Performance</h3>
<p className="text-sm text-gray-500">Speed & Loading</p>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-yellow-600">68</div>
<div className="text-xs text-gray-500">Fair</div>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-600 h-2 rounded-full" style={{width: `68%`}}></div>
</div>
<div className="mt-3 text-sm text-gray-600">
<span className="text-yellow-600 font-medium">4.2s</span> load time
                                </div>
</div>

<div className="bg-white shadow rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center">
<div className="p-2 bg-green-100 rounded-lg mr-3">
<i className="fa-solid fa-universal-access text-green-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Accessibility</h3>
<p className="text-sm text-gray-500">WCAG Compliance</p>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-green-600">84</div>
<div className="text-xs text-gray-500">Good</div>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-600 h-2 rounded-full" style={{width: `84%`}}></div>
</div>
<div className="mt-3 text-sm text-gray-600">
<span className="text-green-600 font-medium">3 minor issues</span> to fix
                                </div>
</div>

<div className="bg-white shadow rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center">
<div className="p-2 bg-yellow-100 rounded-lg mr-3">
<i className="fa-solid fa-shield-halved text-yellow-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Security</h3>
<p className="text-sm text-gray-500">Safety & Protection</p>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-yellow-600">71</div>
<div className="text-xs text-gray-500">Fair</div>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-600 h-2 rounded-full" style={{width: `71%`}}></div>
</div>
<div className="mt-3 text-sm text-gray-600">
<span className="text-yellow-600 font-medium">SSL</span> enabled
                                </div>
</div>

<div className="bg-white shadow rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center">
<div className="p-2 bg-yellow-100 rounded-lg mr-3">
<i className="fa-solid fa-palette text-yellow-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">UI/UX Design</h3>
<p className="text-sm text-gray-500">User Experience</p>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-yellow-600">59</div>
<div className="text-xs text-gray-500">Fair</div>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-600 h-2 rounded-full" style={{width: `59%`}}></div>
</div>
<div className="mt-3 text-sm text-gray-600">
<span className="text-yellow-600 font-medium">Mobile</span> needs work
                                </div>
</div>

<div className="bg-white shadow rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center">
<div className="p-2 bg-red-100 rounded-lg mr-3">
<i className="fa-solid fa-file-text text-red-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Content</h3>
<p className="text-sm text-gray-500">Copy & Messaging</p>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-red-600">45</div>
<div className="text-xs text-gray-500">Poor</div>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-600 h-2 rounded-full" style={{width: `45%`}}></div>
</div>
<div className="mt-3 text-sm text-gray-600">
<span className="text-red-600 font-medium">Headlines</span> need work
                                </div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Priority Actions</h3>
<p className="text-sm text-gray-500 mt-1">Issues ordered by impact and ease of implementation</p>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
<i className="fa-solid fa-exclamation text-red-600 text-sm"></i>
</div>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-gray-900">Add Missing Meta Description</h4>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Critical
                                                    </span>
<span className="text-sm text-gray-500">SEO</span>
</div>
</div>
<p className="text-sm text-gray-600 mt-1">
                                                Your homepage is missing a meta description, which impacts search engine rankings and click-through rates.
                                            </p>
<div className="flex items-center mt-3 space-x-4">
<span className="text-sm text-gray-500">Impact: High</span>
<span className="text-sm text-gray-500">Effort: 5 minutes</span>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium">
                                                    View Details →
                                                </button>
</div>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
<i className="fa-solid fa-clock text-yellow-600 text-sm"></i>
</div>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-gray-900">Optimize Image Sizes</h4>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        High
                                                    </span>
<span className="text-sm text-gray-500">Performance</span>
</div>
</div>
<p className="text-sm text-gray-600 mt-1">
                                                12 images are oversized and slowing down page load times. Could save 2.3MB in total.
                                            </p>
<div className="flex items-center mt-3 space-x-4">
<span className="text-sm text-gray-500">Impact: High</span>
<span className="text-sm text-gray-500">Effort: 30 minutes</span>
<button className="text-sm text-brand-primary hover:text-brand-dark font-medium">
                                                    View Details →
                                                </button>
</div>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
</div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
