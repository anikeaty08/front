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
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#dashboard">
<i className="fa-solid fa-gauge-high mr-3"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#all-audits">
<i className="fa-solid fa-list-check mr-3"></i>
<span>All Audits</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#new-audit">
<i className="fa-solid fa-plus mr-3"></i>
<span>New Audit</span>
</a>
<a className="flex items-center px-4 py-3 text-white bg-brand-primary rounded-md" href="#audit-results">
<i className="fa-solid fa-chart-simple mr-3"></i>
<span>Audit Results</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#report-generator">
<i className="fa-solid fa-file-lines mr-3"></i>
<span>Report Generator</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#white-label">
<i className="fa-solid fa-tag mr-3"></i>
<span>White Label Settings</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#tasks">
<i className="fa-solid fa-list-check mr-3"></i>
<span>Tasks</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#team">
<i className="fa-solid fa-users mr-3"></i>
<span>Team</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#billing">
<i className="fa-solid fa-credit-card mr-3"></i>
<span>Billing</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#settings">
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
<h1 className="text-lg font-medium text-gray-900">example.com - Accessibility Analysis</h1>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#overview">
                                        Overview
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#seo">
                                        SEO Analysis
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#performance">
                                        Performance
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#accessibility">
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
<h3 className="text-lg font-medium text-gray-900">Accessibility Score</h3>
</div>
<div className="px-6 py-5">
<div className="flex flex-col md:flex-row items-center">
<div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
<div className="relative w-32 h-32">

<svg className="w-full h-full" viewBox="0 0 36 36">
<path className="stroke-current text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
<path className="stroke-current text-orange-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="52, 100" strokeLinecap="round" strokeWidth="3"></path>
<text className="text-4xl font-bold text-gray-800" text-anchor="middle" x="18" y="20.5">52</text>
</svg>
</div>
<div className="text-center mt-2">
<span className="text-sm font-medium text-orange-700">Poor</span>
</div>
</div>
<div className="flex-1">
<p className="text-sm text-gray-600 mb-4">
                                            Your website's accessibility score is 52/100, which is poor. This means your site may present significant barriers to users with disabilities. We've found 28 issues across 5 categories that should be addressed to improve accessibility.
                                        </p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Critical</p>
<p className="text-xl font-semibold text-red-600">6</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">High</p>
<p className="text-xl font-semibold text-orange-600">9</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Medium</p>
<p className="text-xl font-semibold text-yellow-600">8</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Low</p>
<p className="text-xl font-semibold text-blue-600">5</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Passing</p>
<p className="text-xl font-semibold text-green-600">12</p>
</div>
</div>
<div className="flex flex-wrap -mx-2">
<div className="px-2 w-1/2 md:w-1/3 mb-4">
<div className="bg-brand-light rounded-lg p-3">
<p className="text-xs text-gray-500 mb-1">WCAG Conformance</p>
<p className="text-lg font-semibold text-gray-800">Level A</p>
<div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: `45%`}}></div>
</div>
</div>
</div>
<div className="px-2 w-1/2 md:w-1/3 mb-4">
<div className="bg-brand-light rounded-lg p-3">
<p className="text-xs text-gray-500 mb-1">Color Contrast</p>
<p className="text-lg font-semibold text-gray-800">Poor</p>
<div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: `30%`}}></div>
</div>
</div>
</div>
<div className="px-2 w-1/2 md:w-1/3 mb-4">
<div className="bg-brand-light rounded-lg p-3">
<p className="text-xs text-gray-500 mb-1">Screen Readers</p>
<p className="text-lg font-semibold text-gray-800">Medium</p>
<div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-yellow-500 h-1.5 rounded-full" style={{width: `65%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">Critical Issues</h3>
<span className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-full">6 Issues</span>
</div>
<div className="px-6 py-5">
<div className="space-y-4">

<div className="border border-red-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 mr-3">
<i className="fa-solid fa-xmark text-xs"></i>
</span>
<h4 className="font-medium text-red-800">Missing Alt Text on Images</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                WCAG 1.1.1
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                We found 12 images without alt text, which makes them inaccessible to screen reader users.
                                            </p>
<div className="bg-gray-50 rounded px-3 py-2 text-xs font-mono text-gray-800 mb-3 overflow-x-auto">
                                                {"<"}img src="/images/hero-banner.jpg"{">"}<br />
                                                {"<"}img src="/images/product-1.jpg"{">"}<br />
                                                {"<"}img src="/images/icon-service.png"{">"}<br />
<span className="text-gray-400">+ 9 more</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: </span>
<span className="text-xs font-medium text-red-600">High</span>
</div>
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                                    View All Occurrences
                                                </button>
</div>
</div>
</div>

<div className="border border-red-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 mr-3">
<i className="fa-solid fa-xmark text-xs"></i>
</span>
<h4 className="font-medium text-red-800">Insufficient Color Contrast</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                WCAG 1.4.3
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                Text color contrast is too low in multiple areas, making content difficult to read for users with low vision.
                                            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
<div className="bg-[#F1F1F1] p-3 rounded">
<div className="flex items-center mb-2">
<div className="w-4 h-4 bg-[#BBBBBB] rounded mr-2"></div>
<span className="text-xs">#BBBBBB on #F1F1F1</span>
</div>
<p className="text-xs text-[#BBBBBB]">Ratio: 1.8:1 (Needs 4.5:1)</p>
</div>
<div className="bg-[#2D7DD2] p-3 rounded">
<div className="flex items-center mb-2">
<div className="w-4 h-4 bg-[#97CCF6] rounded mr-2"></div>
<span className="text-xs text-white">#97CCF6 on #2D7DD2</span>
</div>
<p className="text-xs text-[#97CCF6]">Ratio: 2.1:1 (Needs 4.5:1)</p>
</div>
<div className="bg-white p-3 rounded">
<div className="flex items-center mb-2">
<div className="w-4 h-4 bg-[#CCCCCC] rounded mr-2"></div>
<span className="text-xs">#CCCCCC on #FFFFFF</span>
</div>
<p className="text-xs text-[#CCCCCC]">Ratio: 1.5:1 (Needs 4.5:1)</p>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: </span>
<span className="text-xs font-medium text-red-600">High</span>
</div>
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                                    View All Occurrences
                                                </button>
</div>
</div>
</div>

<div className="border border-red-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 mr-3">
<i className="fa-solid fa-xmark text-xs"></i>
</span>
<h4 className="font-medium text-red-800">No Form Labels</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                WCAG 3.3.2
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                Form fields are missing proper labels, making them difficult to understand for screen reader users.
                                            </p>
<div className="bg-gray-50 rounded px-3 py-2 text-xs font-mono text-gray-800 mb-3 overflow-x-auto">
                                                {"<"}input type="text" placeholder="Name" class="form-input"{">"}<br />
                                                {"<"}input type="email" placeholder="Email" class="form-input"{">"}<br />
                                                {"<"}textarea placeholder="Message" class="form-textarea"{">"}{"<"}/textarea{">"}
                                            </div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: </span>
<span className="text-xs font-medium text-red-600">High</span>
</div>
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                                    View All Occurrences
                                                </button>
</div>
</div>
</div>
<div className="text-center">
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                            Show All Critical Issues (3 more)
                                        </button>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">AI Recommendations</h3>
</div>
<div className="px-6 py-5">
<div className="prose max-w-none text-gray-600">
<p>Based on our analysis, here are key accessibility improvements to prioritize:</p>
<ol className="space-y-4 mt-4">
<li className="flex">
<span className="font-medium text-red-600 mr-2">1.</span>
<div>
<p className="font-medium text-gray-900">Add descriptive alt text to all images</p>
<p className="text-sm mt-1">All non-decorative images should have descriptive alt text. For example, instead of "product image", use "Red leather office chair with adjustable armrests".</p>
</div>
</li>
<li className="flex">
<span className="font-medium text-red-600 mr-2">2.</span>
<div>
<p className="font-medium text-gray-900">Fix color contrast issues</p>
<p className="text-sm mt-1">Update your color palette to ensure text has at least a 4.5:1 contrast ratio with its background. Consider using tools like WebAIM's Contrast Checker during design.</p>
</div>
</li>
<li className="flex">
<span className="font-medium text-orange-600 mr-2">3.</span>
<div>
<p className="font-medium text-gray-900">Add proper form labels</p>
<p className="text-sm mt-1">Replace placeholder-only forms with proper {"<"}label{">"} elements that are programmatically associated with their inputs using the "for" attribute.</p>
</div>
</li>
<li className="flex">
<span className="font-medium text-orange-600 mr-2">4.</span>
<div>
<p className="font-medium text-gray-900">Add keyboard focus indicators</p>
<p className="text-sm mt-1">Ensure all interactive elements have visible focus indicators for keyboard users. Never use outline: none without an alternative focus style.</p>
</div>
</li>
<li className="flex">
<span className="font-medium text-yellow-600 mr-2">5.</span>
<div>
<p className="font-medium text-gray-900">Fix heading hierarchy</p>
<p className="text-sm mt-1">Maintain a logical heading structure (h1, h2, h3, etc.) that follows document outline. Avoid skipping heading levels or using headings for styling purposes only.</p>
</div>
</li>
</ol>
<div className="mt-6 p-4 bg-brand-light rounded-lg">
<p className="font-medium text-gray-900">Compliance Impact</p>
<p className="text-sm mt-1">Addressing these issues would improve your WCAG compliance from Level A (partial) to Level AA, significantly reducing legal risk and improving usability for all users.</p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">Accessibility Testing</h3>
<button className="px-3 py-1.5 text-sm font-medium text-brand-primary bg-brand-light rounded-md hover:bg-brand-light/80">
                                    Run Manual Test
                                </button>
</div>
<div className="px-6 py-5">
<div className="mb-4">
<p className="text-sm text-gray-600">
                                        For comprehensive accessibility testing, we recommend the following additional manual tests:
                                    </p>
</div>
<div className="space-y-3">
<div className="flex items-start">
<div className="flex-shrink-0 mt-0.5">
<input className="h-4 w-4 text-brand-primary rounded border-gray-300 focus:ring-brand-primary" id="keyboard" type="checkbox" />
</div>
<label className="ml-3" htmlFor="keyboard">
<span className="text-sm font-medium text-gray-700">Keyboard Navigation Test</span>
<p className="text-xs text-gray-500">Test if all interactive elements can be accessed and operated using only a keyboard.</p>
</label>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-0.5">
<input className="h-4 w-4 text-brand-primary rounded border-gray-300 focus:ring-brand-primary" id="screenreader" type="checkbox" />
</div>
<label className="ml-3" htmlFor="screenreader"></label></div></div></div></div></div></div></main></div></div>
    </>
  );
}
