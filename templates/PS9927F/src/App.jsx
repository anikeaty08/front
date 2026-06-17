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
<h1 className="text-lg font-medium text-gray-900">example.com - Performance Analysis</h1>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#performance">
                                        Performance
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#accessibility">
                                        Accessibility
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
<h3 className="text-lg font-medium text-gray-900">Performance Score Overview</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Moderate
                                    </span>
</div>
</div>
<div className="px-6 py-5">
<div className="flex flex-col lg:flex-row">
<div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:pr-6 flex justify-center">
<div className="flex flex-col items-center">
<div className="relative w-48 h-48">
<svg className="w-full h-full" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" stroke-dasharray="100, 100" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eab308" stroke-dasharray="71, 100" strokeWidth="3"></path>
<text fill="#374151" fontSize="8" font-weight="bold" text-anchor="middle" x="18" y="20.5">71%</text>
</svg>
</div>
<div className="text-center mt-2">
<h4 className="text-sm font-medium text-gray-900">Overall Performance Score</h4>
<p className="text-xs text-gray-500 mt-1">Based on Google Lighthouse metrics</p>
</div>
</div>
</div>
<div className="w-full lg:w-2/3">
<h4 className="text-sm font-medium text-gray-900 mb-4">Core Web Vitals</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Largest Contentful Paint (LCP)</h5>
<p className="text-xs text-gray-500">Measures loading performance</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Poor
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">4.8s</span>
<span className="text-xs font-medium text-gray-700">Target: &lt; 2.5s</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">First Input Delay (FID)</h5>
<p className="text-xs text-gray-500">Measures interactivity</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Good
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">68ms</span>
<span className="text-xs font-medium text-gray-700">Target: &lt; 100ms</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '32%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Cumulative Layout Shift (CLS)</h5>
<p className="text-xs text-gray-500">Measures visual stability</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        Needs Improvement
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">0.18</span>
<span className="text-xs font-medium text-gray-700">Target: &lt; 0.1</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">First Contentful Paint (FCP)</h5>
<p className="text-xs text-gray-500">Measures perceived load speed</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        Needs Improvement
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">2.3s</span>
<span className="text-xs font-medium text-gray-700">Target: &lt; 1.8s</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '65%'}}></div>
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
<h3 className="text-lg font-medium text-gray-900">Page Load Breakdown</h3>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Resource Waterfall</h4>
<div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
<div className="min-w-max">
<div className="flex items-center text-xs text-gray-500 mb-2">
<div className="w-40">Resource</div>
<div className="flex-1">Time (seconds)</div>
<div className="w-24 text-right">Size</div>
</div>

<div className="space-y-3">

<div className="flex items-center">
<div className="w-40 flex items-center">
<span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
<span className="text-xs truncate" title="example.com">HTML</span>
</div>
<div className="flex-1 relative h-5">
<div className="absolute inset-y-0 left-0 bg-blue-200" style={{width: '10%'}}></div>
<div bg-blue-500"="" className="absolute inset-y-0 left-10%" style={{width: '8%'}}></div>
<div className="absolute inset-y-0 flex items-center text-xs text-gray-700" style={{left: '20%'}}>
                                                                420ms
                                                            </div>
</div>
<div className="w-24 text-xs text-right">32 KB</div>
</div>

<div className="flex items-center">
<div className="w-40 flex items-center">
<span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
<span className="text-xs truncate" title="styles.css">CSS</span>
</div>
<div className="flex-1 relative h-5">
<div className="absolute inset-y-0 left-[18%] bg-purple-200" style={{width: '12%'}}></div>
<div className="absolute inset-y-0 left-[30%] bg-purple-500" style={{width: '15%'}}></div>
<div className="absolute inset-y-0 flex items-center text-xs text-gray-700" style={{left: '47%'}}>
                                                                680ms
                                                            </div>
</div>
<div className="w-24 text-xs text-right">156 KB</div>
</div>

<div className="flex items-center">
<div className="w-40 flex items-center">
<span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
<span className="text-xs truncate" title="main.js">JS (main)</span>
</div>
<div className="flex-1 relative h-5">
<div className="absolute inset-y-0 left-[45%] bg-yellow-200" style={{width: '8%'}}></div>
<div className="absolute inset-y-0 left-[53%] bg-yellow-500" style={{width: '20%'}}></div>
<div className="absolute inset-y-0 flex items-center text-xs text-gray-700" style={{left: '75%'}}>
                                                                1.2s
                                                            </div>
</div>
<div className="w-24 text-xs text-right">384 KB</div>
</div>

<div className="flex items-center">
<div className="w-40 flex items-center">
<span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
<span className="text-xs truncate" title="hero.jpg">Hero Image</span>
</div>
<div className="flex-1 relative h-5">
<div className="absolute inset-y-0 left-[20%] bg-green-200" style={{width: '5%'}}></div>
<div className="absolute inset-y-0 left-[25%] bg-green-500" style={{width: '50%'}}></div>
<div className="absolute inset-y-0 flex items-center text-xs text-gray-700" style={{left: '77%'}}>
                                                                2.8s
                                                            </div>
</div>
<div className="w-24 text-xs text-right">1.2 MB</div>
</div>

<div className="flex items-center">
<div className="w-40 flex items-center">
<span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
<span className="text-xs truncate" title="analytics.js">Analytics</span>
</div>
<div className="flex-1 relative h-5">
<div className="absolute inset-y-0 left-[50%] bg-red-200" style={{width: '15%'}}></div>
<div className="absolute inset-y-0 left-[65%] bg-red-500" style={{width: '10%'}}></div>
<div className="absolute inset-y-0 flex items-center text-xs text-gray-700" style={{left: '77%'}}>
                                                                750ms
                                                            </div>
</div>
<div className="w-24 text-xs text-right">86 KB</div>
</div>

<div className="flex items-center">
<div className="w-40 flex items-center">
<span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
<span className="text-xs truncate" title="fonts.gstatic.com">Web Font</span>
</div>
<div className="flex-1 relative h-5">
<div className="absolute inset-y-0 left-[35%] bg-pink-200" style={{width: '10%'}}></div>
<div className="absolute inset-y-0 left-[45%] bg-pink-500" style={{width: '20%'}}></div>
<div className="absolute inset-y-0 flex items-center text-xs text-gray-700" style={{left: '67%'}}>
                                                                1.1s
                                                            </div>
</div>
<div className="w-24 text-xs text-right">248 KB</div>
</div>
</div>

<div className="flex flex-wrap items-center mt-4 text-xs">
<span className="flex items-center mr-4 mb-2">
<span className="w-3 h-3 bg-gray-200 mr-1"></span>
                                                        Waiting (TTFB)
                                                    </span>
<span className="flex items-center mr-4 mb-2">
<span className="w-3 h-3 bg-gray-500 mr-1"></span>
                                                        Downloading
                                                    </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Page Weight by Resource Type</h4>
<div className="bg-gray-50 p-4 rounded-lg">
<div className="h-48 flex items-center justify-center">

<div className="relative w-36 h-36 rounded-full overflow-hidden">
<div className="absolute inset-0 border-4 border-transparent border-t-green-500 border-r-green-500 border-b-green-500" style={{transform: 'rotate(45deg)'}}></div>
<div className="absolute inset-0 border-4 border-transparent border-b-yellow-500 border-l-yellow-500" style={{transform: 'rotate(45deg)'}}></div>
<div className="absolute inset-0 border-4 border-transparent border-t-purple-500 border-l-purple-500" style={{transform: 'rotate(45deg)'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center">
<span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
<span className="text-xs">Images: 58% (1.8MB)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
<span className="text-xs">JavaScript: 28% (872KB)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
<span className="text-xs">CSS: 8% (245KB)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
<span className="text-xs">Other: 6% (187KB)</span>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Critical Requests</h4>
<div className="bg-gray-50 p-4 rounded-lg">
<div className="space-y-3">
<div className="flex items-center">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-800 text-xs font-medium mr-3">1</span>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">Render-blocking CSS</p>
<p className="text-xs text-gray-500">styles.css (156 KB)</p>
</div>
<span className="text-xs text-gray-500">680ms</span>
</div>
<div className="flex items-center">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-800 text-xs font-medium mr-3">2</span>
<div className="flex-1">
</div></div></div></div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
