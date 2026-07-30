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
<i className="fa-solid fa-tasks mr-3"></i>
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
<h1 className="text-lg font-medium text-gray-900">example.com - Sections Analysis</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Score: 82/100</span>
</div>
<div className="flex items-center space-x-4">
<button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
<i className="fa-solid fa-download mr-1.5"></i>
                            Export PDF
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#security">
                                        Security
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#legal">
                                        Legal
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#navigation">
                                        Navigation
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#sections">
                                        Sections
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

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-check text-green-600"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Sections Found</p>
<p className="text-2xl font-semibold text-gray-900">8</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center">
<i className="fa-solid fa-star text-brand-primary"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Avg Engagement</p>
<p className="text-2xl font-semibold text-gray-900">68%</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-triangle-exclamation text-yellow-600"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Issues Found</p>
<p className="text-2xl font-semibold text-gray-900">3</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-lightbulb text-purple-600"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Recommendations</p>
<p className="text-2xl font-semibold text-gray-900">5</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 bg-green-50">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
<i className="fa-solid fa-home text-green-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Hero Section</h3>
<p className="text-sm text-gray-500">Above the fold content</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Excellent
                                            </span>
<span className="text-2xl font-bold text-green-600">95/100</span>
</div>
</div>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
<i className="fa-solid fa-eye text-blue-500 mr-2"></i>
                                                Observations
                                            </h4>
<div className="space-y-3">
<div className="flex items-start">
<i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Clear Value Proposition</p>
<p className="text-xs text-gray-500">Headline clearly communicates what you do within 3 seconds</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Strong Call-to-Action</p>
<p className="text-xs text-gray-500">Primary CTA button stands out with high contrast</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Visual Hierarchy</p>
<p className="text-xs text-gray-500">Elements are properly sized and positioned for scanning</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Mobile Responsive</p>
<p className="text-xs text-gray-500">Hero adapts well to different screen sizes</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Loading Time</p>
<p className="text-xs text-gray-500">Hero image takes 2.3s to load (recommended: {"<"}2s)</p>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
<i className="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>
                                                Recommendations
                                            </h4>
<div className="space-y-3">
<div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
<div className="flex items-start">
<i className="fa-solid fa-image text-yellow-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-yellow-800">Optimize Hero Image</p>
<p className="text-xs text-yellow-700 mt-1">Compress image size by 60% using WebP format</p>
<div className="mt-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                                                    High Impact
                                                                </span>
</div>
</div>
</div>
</div>
<div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
<div className="flex items-start">
<i className="fa-solid fa-plus text-blue-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-blue-800">Add Social Proof</p>
<p className="text-xs text-blue-700 mt-1">Include customer logos or testimonial snippet</p>
<div className="mt-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                                    Medium Impact
                                                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 bg-green-50">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
<i className="fa-solid fa-list text-green-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Features Section</h3>
<p className="text-sm text-gray-500">Product/service highlights</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Good
                                            </span>
<span className="text-2xl font-bold text-green-600">85/100</span>
</div>
</div>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
<i className="fa-solid fa-eye text-blue-500 mr-2"></i>
                                                Observations
                                            </h4>
<div className="space-y-3">
<div className="flex items-start">
<i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Benefit-Focused Content</p>
<p className="text-xs text-gray-500">Features explain "what's in it for me" clearly</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Good Visual Support</p>
<p className="text-xs text-gray-500">Icons help break up text and add visual interest</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Too Many Features</p>
<p className="text-xs text-gray-500">9 features shown, recommended maximum is 6</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">No Priority Indication</p>
<p className="text-xs text-gray-500">All features appear equally important</p>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
<i className="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>
                                                Recommendations
                                            </h4>
<div className="space-y-3">
<div className="p-3 bg-red-50 rounded-lg border border-red-200">
<div className="flex items-start">
<i className="fa-solid fa-minus text-red-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-red-800">Reduce Feature Count</p>
<p className="text-xs text-red-700 mt-1">Show only top 3-6 most important features</p>
<div className="mt-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
                                                                    High Impact
                                                                </span>
</div>
</div>
</div>
</div>
<div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
<div className="flex items-start">
<i className="fa-solid fa-star text-blue-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-blue-800">Add Feature Hierarchy</p>
<p className="text-xs text-blue-700 mt-1">Make one feature primary with larger size/emphasis</p>
<div className="mt-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                                    Medium Impact
                                                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 bg-yellow-50">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
<i className="fa-solid fa-question text-yellow-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">FAQ Section</h3>
<p className="text-sm text-gray-500">Frequently asked questions</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Needs Improvement
                                            </span>
<span className="text-2xl font-bold text-yellow-600">65/100</span>
</div>
</div>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
<i className="fa-solid fa-eye text-blue-500 mr-2"></i>
                                                Observations
                                            </h4>
<div className="space-y-3">
<div className="flex items-start">
<i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Clean Design</p>
<p className="text-xs text-gray-500">Accordion style is user-friendly and space-efficient</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-circle-xmark text-red-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Too Few Questions</p>
<p className="text-xs text-gray-500">Only 3 FAQs, industry standard is 8-12</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-circle-xmark text-red-500 mr-2 mt-0.5 text-sm"></i>
<div>
<p className="text-sm text-gray-700 font-medium">Missing Key Topics</p>
<p className="text-xs text-gray-500">No questions about pricing, support, or implementation</p>
</div>
</div>
<div className="flex items-start">
<i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2 mt-0.5 text-sm"></i>
<div></div></div></div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
