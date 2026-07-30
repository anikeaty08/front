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
<h1 className="text-lg font-medium text-gray-900">example.com - AI Recommendations</h1>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#content">
                                        Content Analysis
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#ai-recommendations">
                                        AI Recommendations
                                    </a>
</nav>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex items-center">
<h3 className="text-lg font-medium text-gray-900">AI Analysis Summary</h3>
<span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
<svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" fillRule="evenodd"></path>
</svg>
                                        Powered by AI
                                    </span>
</div>
</div>
<div className="px-6 py-5">
<div className="flex flex-col md:flex-row">
<div className="w-full">
<p className="text-sm text-gray-600 mb-4">
                                            Our AI has analyzed your website comprehensively and identified several opportunities for improvement. Based on your business type, target audience, and industry benchmarks, here are our actionable recommendations prioritized by impact and implementation effort.
                                        </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
<div className="bg-brand-light rounded-lg p-4">
<div className="flex items-start">
<div className="flex-shrink-0">
<svg className="h-10 w-10 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-gray-900">High Impact</h4>
<p className="mt-1 text-xs text-gray-500">5 recommendations that can provide significant improvements</p>
</div>
</div>
</div>
<div className="bg-brand-light rounded-lg p-4">
<div className="flex items-start">
<div className="flex-shrink-0">
<svg className="h-10 w-10 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-gray-900">Medium Effort</h4>
<p className="mt-1 text-xs text-gray-500">Most recommendations require moderate technical effort</p>
</div>
</div>
</div>
<div className="bg-brand-light rounded-lg p-4">
<div className="flex items-start">
<div className="flex-shrink-0">
<svg className="h-10 w-10 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-sm font-medium text-gray-900">Time to Implement</h4>
<p className="mt-1 text-xs text-gray-500">Estimated 3-4 weeks to implement all recommendations</p>
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
<h3 className="text-lg font-medium text-gray-900">Priority Recommendations</h3>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
<i className="fa-solid fa-plus mr-1"></i> Add All to Tasks
                                </button>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div className="border border-brand-primary rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-brand-light border-b border-brand-primary flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-brand-primary text-white mr-3">
<i className="fa-solid fa-1 text-sm"></i>
</span>
<h4 className="font-medium text-gray-900">Optimize Mobile Experience</h4>
</div>
<div className="flex items-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                                                    High Priority
                                                </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    UX/UI
                                                </span>
</div>
</div>
<div className="px-4 py-4">
<div className="flex flex-col lg:flex-row">
<div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
<h5 className="text-sm font-semibold text-gray-800 mb-2">AI Analysis</h5>
<p className="text-sm text-gray-600 mb-3">
                                                        Your mobile experience shows significant issues that are likely causing a high bounce rate (currently at 78% on mobile vs 42% on desktop). Mobile users face navigation difficulties, form interaction problems, and slow page load times.
                                                    </p>
<h5 className="text-sm font-semibold text-gray-800 mb-2">Recommendation</h5>
<p className="text-sm text-gray-600 mb-3">
                                                        Implement a comprehensive mobile optimization strategy:
                                                    </p>
<ul className="list-disc pl-5 text-sm text-gray-600 mb-3 space-y-1">
<li>Redesign navigation for touch interfaces (hamburger menu is currently too small)</li>
<li>Increase tap target sizes for all interactive elements (minimum 44×44px)</li>
<li>Optimize form fields for mobile input (currently too small and clustered)</li>
<li>Implement responsive images with correct sizing</li>
<li>Reduce JavaScript execution time on mobile devices</li>
</ul>
<h5 className="text-sm font-semibold text-gray-800 mb-2">Expected Impact</h5>
<div className="flex items-center mb-3">
<span className="text-sm text-gray-600 mr-2">Bounce Rate Reduction:</span>
<div className="relative w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-green-500" style={{width: `25%`}}></div>
</div>
<span className="text-sm text-gray-600 ml-2">~25%</span>
</div>
<div className="flex items-center mb-3">
<span className="text-sm text-gray-600 mr-2">Conversion Rate Improvement:</span>
<div className="relative w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-green-500" style={{width: `35%`}}></div>
</div>
<span className="text-sm text-gray-600 ml-2">~35%</span>
</div>
<div className="flex items-center">
<span className="text-sm text-gray-600 mr-2">Mobile Traffic Retention:</span>
<div className="relative w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-green-500" style={{width: `42%`}}></div>
</div>
<span className="text-sm text-gray-600 ml-2">~42%</span>
</div>
</div>
<div className="lg:w-80 flex flex-col">
<div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
<div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
<h5 className="text-xs font-medium text-gray-700">Implementation Difficulty</h5>
</div>
<div className="p-3">
<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
<div className="bg-yellow-500 h-2.5 rounded-full" style={{width: `60%`}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Medium</span>
</div>
</div>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
<div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
<h5 className="text-xs font-medium text-gray-700">Estimated Time</h5>
</div>
<div className="p-3">
<p className="text-sm font-medium text-gray-800">3-5 days</p>
</div>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
<div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
<h5 className="text-xs font-medium text-gray-700">Resources Required</h5>
</div>
<div className="p-3 space-y-2">
<div className="flex items-center">
<span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
<span className="text-xs text-gray-700">Front-end Developer</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
<span className="text-xs text-gray-700">UX Designer</span>
</div>
</div>
</div>
<button className="mt-auto flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-brand-dark">
<i className="fa-solid fa-plus mr-1.5"></i> Add to Tasks
                                                    </button>
</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 mr-3">
<i className="fa-solid fa-2 text-sm"></i>
</span>
<h4 className="font-medium text-gray-900">Implement Clear Call-to-Actions</h4>
</div>
<div className="flex items-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mr-2">
                                                    Medium Priority
                                                </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                    Conversion
                                                </span>
</div>
</div>
<div className="px-4 py-4">
<div className="flex flex-col lg:flex-row">
<div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
<h5 className="text-sm font-semibold text-gray-800 mb-2">AI Analysis</h5>
<p className="text-sm text-gray-600 mb-3">
                                                        Your website lacks clear, compelling call-to-action buttons that guide users toward conversion goals. Current CTAs have low visibility, inconsistent styling, and vague messaging ("Click Here", "Submit", "Learn More").
                                                    </p>
<h5 className="text-sm font-semibold text-gray-800 mb-2">Recommendation</h5>
<p className="text-sm text-gray-600 mb-3">
                                                        Redesign your call-to-action strategy:
                                                    </p>
<ul className="list-disc pl-5 text-sm text-gray-600 mb-3 space-y-1">
<li>Create a visual hierarchy with primary and secondary CTAs</li>
<li>Use action-oriented, specific language (e.g., "Start Your Free Trial", "Get Your Quote Today")</li>
<li>Apply consistent, high-contrast colors that stand out</li>
<li>Position CTAs at logical points in the user journey</li>
<li>Add subtle animations or hover effects to increase engagement</li>
</ul>
<h5 className="text-sm font-semibold text-gray-800 mb-2">Expected Impact</h5>
<div className="flex items-center mb-3">
<span className="text-sm text-gray-600 mr-2">Click-through Rate:</span>
<div className="relative w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-green-500" style={{width: `40%`}}></div>
</div>
<span className="text-sm text-gray-600 ml-2">~40%</span>
</div>
<div className="flex items-center">
<span className="text-sm text-gray-600 mr-2">Form Completions:</span>
<div className="relative w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-green-500" style={{width: `30%`}}></div>
</div>
<span className="text-sm text-gray-600 ml-2">~30%</span>
</div>
</div>
<div className="lg:w-80 flex flex-col">
<div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
<div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
<h5 className="text-xs font-medium text-gray-700">Implementation Difficulty</h5>
</div>
<div className="p-3">
<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
<div className="bg-green-500 h-2.5 rounded-full" style={{width: `30%`}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Easy</span>
</div>
</div>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
<div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
<h5 className="text-xs font-medium text-gray-700">Estimated Time</h5>
</div>
<div className="p-3">
<p className="text-sm font-medium text-gray-800">1-2 days</p>
</div>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
<div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
<h5 className="text-xs font-medium text-gray-700">Resources Required</h5>
</div>
<div className="p-3 space-y-2">
<div className="flex items-center">
<span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
<span className="text-xs text-gray-700">Front-end Developer</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
<span className="text-xs text-gray-700">Content Writer</span>
</div>
</div>
</div>
</div></div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
