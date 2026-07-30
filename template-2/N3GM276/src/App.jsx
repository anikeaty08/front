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
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="audit-results.html">
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
<h1 className="text-lg font-medium text-gray-900">example.com - Content Analysis</h1>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#seo">
                                        SEO Analysis
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#performance">
                                        Performance
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#accessibility">
                                        Accessibility
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="best-practices.html">
                                        Best Practices
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#content">
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
<h3 className="text-lg font-medium text-gray-900">Content Score Overview</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Needs Improvement
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
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#fbbf24" strokeDasharray="68, 100" strokeWidth="3"></path>
<text fill="#374151" fontSize="8" font-weight="bold" text-anchor="middle" x="18" y="20.5">68%</text>
</svg>
</div>
<div className="text-center mt-2">
<h4 className="text-sm font-medium text-gray-900">Overall Content Score</h4>
<p className="text-xs text-gray-500 mt-1">Based on 42 content elements analyzed</p>
</div>
</div>
</div>
<div className="w-full md:w-2/3">
<h4 className="text-sm font-medium text-gray-900 mb-4">Content Score Breakdown</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Readability</span>
<span className="text-xs font-medium text-gray-700">62%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: `62%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Flesch-Kincaid: Grade level 12 (Difficult)</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Engagement</span>
<span className="text-xs font-medium text-gray-700">55%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: `55%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Based on structure, questions, CTAs</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">SEO Optimization</span>
<span className="text-xs font-medium text-gray-700">78%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `78%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Keyword usage, headings, meta data</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Content Freshness</span>
<span className="text-xs font-medium text-gray-700">84%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `84%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Last update: 3 weeks ago</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Key Content Issues</h3>
</div>
<div className="px-6 py-5">
<div className="overflow-hidden">
<div className="space-y-6">

<div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
<div className="flex items-start">
<div className="flex-shrink-0">
<svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-red-800">Readability Too Complex</h4>
<div className="mt-2 text-sm text-red-700">
<p>Your content's readability score indicates it's too complex for the average reader (Grade level 12). This can decrease engagement and increase bounce rates.</p>
</div>
<div className="mt-3">
<button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none">
                                                            View affected pages
                                                        </button>
</div>
</div>
</div>
</div>

<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
<div className="flex items-start">
<div className="flex-shrink-0">
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-yellow-800">Inconsistent Tone of Voice</h4>
<div className="mt-2 text-sm text-yellow-700">
<p>Your content tone varies significantly across pages, from formal/technical to casual. This can confuse users about your brand identity.</p>
</div>
<div className="mt-3">
<button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none">
                                                            View affected pages
                                                        </button>
</div>
</div>
</div>
</div>

<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
<div className="flex items-start">
<div className="flex-shrink-0">
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-yellow-800">Missing Value Propositions</h4>
<div className="mt-2 text-sm text-yellow-700">
<p>Several key pages don't clearly communicate the value proposition or benefits to the user, focusing instead on features without explaining "what's in it for them."</p>
</div>
<div className="mt-3">
<button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none">
                                                            View affected pages
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
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">Page-by-Page Content Analysis</h3>
<div className="flex items-center space-x-2">
<span className="text-sm text-gray-500">Sort by:</span>
<select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-brand-primary focus:ring-brand-primary">
<option>Score (Low to High)</option>
<option>Score (High to Low)</option>
<option>Page Title (A-Z)</option>
<option>Most Recent</option>
</select>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Page</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Content Score</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Word Count</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Reading Time</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Issues</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Actions</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="text-sm font-medium text-gray-900">Homepage</div>
<span className="ml-2 flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">High traffic</span>
</div>
<div className="text-sm text-gray-500">example.com/</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: `45%`}}></div>
</div>
<span className="text-sm text-gray-900">45%</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                385 words
                                            </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                1.9 min
                                            </td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                    5 issues
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<a className="text-brand-primary hover:text-brand-dark" href="#">View Details</a>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="text-sm font-medium text-gray-900">About Us</div>
</div>
<div className="text-sm text-gray-500">example.com/about</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: `72%`}}></div>
</div>
<span className="text-sm text-gray-900">72%</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                790 words
                                            </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                3.2 min
                                            </td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    2 issues
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<a className="text-brand-primary hover:text-brand-dark" href="#">View Details</a>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="text-sm font-medium text-gray-900">Features</div>
<span className="ml-2 flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">High traffic</span>
</div>
<div className="text-sm text-gray-500">example.com/features</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `88%`}}></div>
</div>
<span className="text-sm text-gray-900">88%</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                1,250 words
                                            </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                5.0 min
                                            </td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    0 issues
                                                </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<a className="text-brand-primary hover:text-brand-dark" href="#">View Details</a>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center"></div></td></tr></tbody></table></div></div></div></div></main></div></div>
    </>
  );
}
