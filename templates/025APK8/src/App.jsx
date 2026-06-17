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

<main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
<div className="px-4 py-5 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">

<div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
<div className="border-b border-gray-200">
<nav className="flex -mb-px overflow-x-auto">
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary bg-brand-light/50" href="#overview">
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

<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl font-bold mb-4">Website Health Report</h1>
<p className="text-blue-100 text-lg mb-6">
                                        Your website has been analyzed across 57 different checkpoints. Here's what we found.
                                    </p>
<div className="flex items-center space-x-6">
<div>
<div className="text-3xl font-bold">67/100</div>
<div className="text-sm text-blue-100">Overall Score</div>
</div>
<div>
<div className="text-3xl font-bold">22</div>
<div className="text-sm text-blue-100">Issues Found</div>
</div>
<div>
<div className="text-3xl font-bold">23</div>
<div className="text-sm text-blue-100">Passed Tests</div>
</div>
</div>
</div>
<div className="flex justify-center">
<div className="relative">
<svg className="w-48 h-48 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ffffff" stroke-dasharray="67, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-4xl font-bold">67</div>
<div className="text-sm opacity-80">Score</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">Critical Issues</p>
<p className="text-3xl font-bold text-red-600">8</p>
<p className="text-xs text-red-500 mt-1">High Priority</p>
</div>
<div className="p-3 bg-red-100 rounded-full">
<i className="fa-solid fa-exclamation-triangle text-red-600 text-xl"></i>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">Warnings</p>
<p className="text-3xl font-bold text-yellow-600">14</p>
<p className="text-xs text-yellow-500 mt-1">Medium Priority</p>
</div>
<div className="p-3 bg-yellow-100 rounded-full">
<i className="fa-solid fa-exclamation-circle text-yellow-600 text-xl"></i>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">Passed Tests</p>
<p className="text-3xl font-bold text-green-600">23</p>
<p className="text-xs text-green-500 mt-1">Working Well</p>
</div>
<div className="p-3 bg-green-100 rounded-full">
<i className="fa-solid fa-check-circle text-green-600 text-xl"></i>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-600">Opportunities</p>
<p className="text-3xl font-bold text-blue-600">12</p>
<p className="text-xs text-blue-500 mt-1">Growth Potential</p>
</div>
<div className="p-3 bg-blue-100 rounded-full">
<i className="fa-solid fa-lightbulb text-blue-600 text-xl"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

<div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
<h3 className="text-xl font-bold text-gray-900 mb-6">Performance Breakdown</h3>
<div className="space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-search text-red-600"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">SEO Optimization</h4>
<p className="text-sm text-gray-500">Search Engine Performance</p>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-32 bg-gray-200 rounded-full h-3">
<div className="bg-red-500 h-3 rounded-full" style={{width: '42%'}}></div>
</div>
<span className="font-bold text-red-600 w-8">42</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-bolt text-yellow-600"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">Site Performance</h4>
<p className="text-sm text-gray-500">Loading Speed &amp; Optimization</p>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-32 bg-gray-200 rounded-full h-3">
<div className="bg-yellow-500 h-3 rounded-full" style={{width: '68%'}}></div>
</div>
<span className="font-bold text-yellow-600 w-8">68</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-universal-access text-green-600"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">Accessibility</h4>
<p className="text-sm text-gray-500">WCAG Compliance</p>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-32 bg-gray-200 rounded-full h-3">
<div className="bg-green-500 h-3 rounded-full" style={{width: '84%'}}></div>
</div>
<span className="font-bold text-green-600 w-8">84</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-shield-halved text-blue-600"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">Security</h4>
<p className="text-sm text-gray-500">Safety &amp; Protection</p>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-32 bg-gray-200 rounded-full h-3">
<div className="bg-blue-500 h-3 rounded-full" style={{width: '71%'}}></div>
</div>
<span className="font-bold text-blue-600 w-8">71</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-palette text-purple-600"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">UI/UX Design</h4>
<p className="text-sm text-gray-500">User Experience</p>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-32 bg-gray-200 rounded-full h-3">
<div className="bg-yellow-500 h-3 rounded-full" style={{width: '59%'}}></div>
</div>
<span className="font-bold text-yellow-600 w-8">59</span>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-file-text text-indigo-600"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">Content Quality</h4>
<p className="text-sm text-gray-500">Copy &amp; Messaging</p>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-32 bg-gray-200 rounded-full h-3">
<div className="bg-red-500 h-3 rounded-full" style={{width: '45%'}}></div>
</div>
<span className="font-bold text-red-600 w-8">45</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-lg p-6">
<h3 className="text-xl font-bold text-gray-900 mb-6">Top Priority Issues</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
<div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
<div className="flex-1">
<h4 className="font-medium text-gray-900 text-sm">Missing Meta Description</h4>
<p className="text-xs text-gray-600 mt-1">Critical for SEO ranking</p>
<span className="text-xs text-red-600 font-medium">High Impact</span>
</div>
</div>
<div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
<div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
<div className="flex-1">
<h4 className="font-medium text-gray-900 text-sm">Large Image Files</h4>
<p className="text-xs text-gray-600 mt-1">Slowing page load by 3.2s</p>
<span className="text-xs text-red-600 font-medium">High Impact</span>
</div>
</div>
<div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
<div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
<div className="flex-1">
<h4 className="font-medium text-gray-900 text-sm">Missing Alt Text</h4>
<p className="text-xs text-gray-600 mt-1">8 images affected</p>
<span className="text-xs text-yellow-600 font-medium">Medium Impact</span>
</div>
</div>
<div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
<div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
<div className="flex-1">
<h4 className="font-medium text-gray-900 text-sm">Mobile Responsiveness</h4>
<p className="text-xs text-gray-600 mt-1">Layout breaks on small screens</p>
<span className="text-xs text-yellow-600 font-medium">Medium Impact</span>
</div>
</div>
<button className="w-full text-center text-sm text-brand-primary hover:text-brand-dark font-medium mt-4">
                                        View All Issues →
                                    </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-lg p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-gray-900">Recommended Action Plan</h3>
<span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                    4 Week Plan
                                </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border border-red-200 rounded-lg p-4 bg-red-50">
<div className="flex items-center justify-between mb-3">
<h4 className="font-bold text-red-900">Week 1</h4>
<span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">Critical</span>
</div>
<ul className="space-y-2 text-sm text-red-800">
<li>• Add meta descriptions</li>
<li>• Optimize images</li>
<li>• Fix broken links</li>
</ul>
<div className="mt-3 text-xs text-red-600">
                                        Estimated Impact: +15 points
                                    </div>
</div>

<div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
<div className="flex items-center justify-between mb-3">
<h4 className="font-bold text-yellow-900">Week 2</h4>
<span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">High</span>
</div>
<ul className="space-y-2 text-sm text-yellow-800">
<li>• Add alt text to images</li>
<li>• Improve mobile layout</li>
<li>• Fix color contrast</li>
</ul>
<div className="mt-3 text-xs text-yellow-600">
                                        Estimated Impact: +12 points
                                    </div>
</div>

<div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
<div className="flex items-center justify-between mb-3">
<h4 className="font-bold text-blue-900">Week 3</h4>
</div></div></div></div></div></div></main></div></div>
    </>
  );
}
