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
<h1 className="text-lg font-medium text-gray-900">example.com - UI/UX Design Analysis</h1>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#uiux">
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
<h3 className="text-lg font-medium text-gray-900">UI/UX Design Score Overview</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
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
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f97316" strokeDasharray="62, 100" strokeWidth="3"></path>
<text fill="#374151" fontSize="8" font-weight="bold" text-anchor="middle" x="18" y="20.5">62%</text>
</svg>
</div>
<div className="text-center mt-2">
<h4 className="text-sm font-medium text-gray-900">Overall UI/UX Score</h4>
<p className="text-xs text-gray-500 mt-1">Based on 35 design factors analyzed</p>
</div>
</div>
</div>
<div className="w-full md:w-2/3">
<h4 className="text-sm font-medium text-gray-900 mb-4">UI/UX Score Breakdown</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Visual Design</span>
<span className="text-xs font-medium text-gray-700">68%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: `68%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Color, typography, imagery, aesthetics</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">User Interface</span>
<span className="text-xs font-medium text-gray-700">76%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `76%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Layout, buttons, forms, navigation</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">User Experience</span>
<span className="text-xs font-medium text-gray-700">52%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: `52%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Usability, journey mapping, interaction design</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Responsiveness</span>
<span className="text-xs font-medium text-gray-700">64%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: `64%`}}></div>
</div>
<p className="text-xs text-gray-500 mt-1">Mobile-friendly, adaptability, breakpoints</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Design Consistency Analysis</h3>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Color Palette</h4>
<div className="bg-gray-50 rounded-lg p-4">
<p className="text-sm text-gray-500 mb-3">We detected inconsistent color usage across your website. Here are the primary colors used:</p>
<div className="flex flex-wrap gap-2 mb-4">
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-md bg-blue-600"></div>
<span className="text-xs text-gray-500 mt-1">#2563EB</span>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-md bg-blue-500"></div>
<span className="text-xs text-gray-500 mt-1">#3B82F6</span>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-md bg-indigo-500"></div>
<span className="text-xs text-gray-500 mt-1">#6366F1</span>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-md bg-gray-800"></div>
<span className="text-xs text-gray-500 mt-1">#1F2937</span>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-md bg-gray-700"></div>
<span className="text-xs text-gray-500 mt-1">#374151</span>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-md bg-gray-100"></div>
<span className="text-xs text-gray-500 mt-1">#F3F4F6</span>
</div>
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-md bg-red-500"></div>
<span className="text-xs text-gray-500 mt-1">#EF4444</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-start">
<svg className="h-5 w-5 text-yellow-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path>
</svg>
<p className="ml-2 text-xs text-gray-700">Inconsistent blue shades (#2563EB, #3B82F6) appear on different pages</p>
</div>
<div className="flex items-start">
<svg className="h-5 w-5 text-yellow-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path>
</svg>
<p className="ml-2 text-xs text-gray-700">Red accent color is used inconsistently and may reduce brand recognition</p>
</div>
</div>
<div className="mt-4">
<button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-brand-primary bg-brand-light hover:bg-brand-light/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                                    Generate color palette recommendation
                                                </button>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Typography</h4>
<div className="bg-gray-50 rounded-lg p-4">
<p className="text-sm text-gray-500 mb-3">We detected 4 different font families across your website:</p>
<div className="space-y-4 mb-4">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium" style={{fontFamily: `'Inter', sans-serif`}}>Inter</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                            Primary
                                                        </span>
</div>
<p className="text-xs text-gray-600">Used on 67% of text elements (headings, body text)</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium" style={{fontFamily: `'Roboto', sans-serif`}}>Roboto</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                            Secondary
                                                        </span>
</div>
<p className="text-xs text-gray-600">Used on 18% of text elements (buttons, navigation)</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium" style={{fontFamily: `'Open Sans', sans-serif`}}>Open Sans</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                            Inconsistent
                                                        </span>
</div>
<p className="text-xs text-gray-600">Used on 12% of text elements (only on blog pages)</p>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium" style={{fontFamily: `'Arial', sans-serif`}}>Arial</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                            Inconsistent
                                                        </span>
</div>
<p className="text-xs text-gray-600">Used on 3% of text elements (footer links)</p>
</div>
</div>
<div className="mt-4">
<button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-brand-primary bg-brand-light hover:bg-brand-light/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                                    Generate typography recommendation
                                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">UI/UX Issues</h3>
<div>
<select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-brand-primary focus:ring-brand-primary">
<option>All Issues (19)</option>
<option>Critical (3)</option>
<option>Important (7)</option>
<option>Moderate (9)</option>
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
<h4 className="text-sm font-medium text-gray-900">Low Contrast Text</h4>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Critical
                                                    </span>
</div>
<p className="mt-1 text-sm text-gray-500">Light gray text (#D1D5DB) on white background fails WCAG 2.1 AA contrast requirements on 8 pages. This affects readability for many users.</p>
<div className="mt-2 flex flex-col sm:flex-row sm:items-center">
<div className="flex items-center text-sm text-gray-500 sm:mr-6">
<svg className="h-5 w-5 text-red-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path>
</svg>
<span>Contrast ratio: 2.3:1 (needs 4.5:1)</span>
</div>
<div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
<svg className="h-5 w-5 text-yellow-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fillRule="evenodd"></path>
</svg>
<span>Affects 4,200+ visitors/month</span>
</div>
</div>
<div className="mt-3 flex">
<button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-brand-primary bg-brand-light hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                                        View affected elements
                                                    </button>
<button className="ml-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                        Suggest color alternatives
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
<div className="ml-4 flex-1"></div></div></li></ul></div></div></div></div></main></div></div>
    </>
  );
}
