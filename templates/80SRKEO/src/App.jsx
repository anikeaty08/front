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
<h1 className="text-lg font-medium text-gray-900">example.com - Conversion Analysis</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">Conversion Score: 68/100</span>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#conversion">
                                        Conversion
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
<i className="fa-solid fa-bullseye text-green-600"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">CTAs Found</p>
<p className="text-2xl font-semibold text-gray-900">12</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-chart-line text-orange-600"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Est. Conv. Rate</p>
<p className="text-2xl font-semibold text-gray-900">2.4%</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-exclamation-triangle text-red-600"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Friction Points</p>
<p className="text-2xl font-semibold text-gray-900">7</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-arrow-trend-up text-blue-600"></i>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-500">Improvement Potential</p>
<p className="text-2xl font-semibold text-gray-900">+45%</p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
<i className="fa-solid fa-bullseye text-blue-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Call-to-Action Analysis</h3>
<p className="text-sm text-gray-500">Buttons, forms, and conversion elements</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Needs Work
                                        </span>
<span className="text-2xl font-bold text-yellow-600">65/100</span>
</div>
</div>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-4">
<h4 className="text-md font-semibold text-gray-900">Primary CTA - "Get Started Free"</h4>
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Strong
                                            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<p className="text-sm font-medium text-gray-700 mb-2">Visibility</p>
<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-full h-2 mr-2">
<div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
</div>
<span className="text-sm text-gray-600">90%</span>
</div>
<p className="text-xs text-gray-500 mt-1">High contrast, above fold</p>
</div>
<div>
<p className="text-sm font-medium text-gray-700 mb-2">Copy Quality</p>
<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-full h-2 mr-2">
<div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
<span className="text-sm text-gray-600">85%</span>
</div>
<p className="text-xs text-gray-500 mt-1">Action-oriented, benefit clear</p>
</div>
<div>
<p className="text-sm font-medium text-gray-700 mb-2">Urgency</p>
<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-full h-2 mr-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
</div>
<span className="text-sm text-gray-600">60%</span>
</div>
<p className="text-xs text-gray-500 mt-1">Could add scarcity element</p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-4">
<h4 className="text-md font-semibold text-gray-900">Secondary CTAs</h4>
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Average
                                            </span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
<div className="flex items-center">
<div className="w-3 h-3 bg-blue-500 rounded mr-3"></div>
<span className="text-sm font-medium">"Learn More" - Features section</span>
</div>
<div className="flex items-center space-x-2">
<span className="text-xs text-gray-500">Low priority</span>
<div className="w-16 bg-gray-200 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
<div className="flex items-center">
<div className="w-3 h-3 bg-green-500 rounded mr-3"></div>
<span className="text-sm font-medium">"Schedule Demo" - Header</span>
</div>
<div className="flex items-center space-x-2">
<span className="text-xs text-gray-500">Good placement</span>
<div className="w-16 bg-gray-200 rounded-full h-1.5">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200 bg-purple-50">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
<i className="fa-solid fa-wpforms text-purple-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900">Lead Generation Forms</h3>
<p className="text-sm text-gray-500">Contact forms and signup flows</p>
</div>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Poor
                                        </span>
<span className="text-2xl font-bold text-red-600">45/100</span>
</div>
</div>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
<i className="fa-solid fa-exclamation-circle text-red-500 mr-2"></i>
                                            Critical Issues
                                        </h4>
<div className="space-y-3">
<div className="p-3 bg-red-50 rounded-lg border border-red-200">
<div className="flex items-start">
<i className="fa-solid fa-times-circle text-red-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-red-800">Too Many Fields</p>
<p className="text-xs text-red-700 mt-1">Contact form has 8 fields - reduce to 3-4 max</p>
</div>
</div>
</div>
<div className="p-3 bg-red-50 rounded-lg border border-red-200">
<div className="flex items-start">
<i className="fa-solid fa-times-circle text-red-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-red-800">No Trust Signals</p>
<p className="text-xs text-red-700 mt-1">Missing privacy policy link or security badges</p>
</div>
</div>
</div>
<div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
<div className="flex items-start">
<i className="fa-solid fa-exclamation-triangle text-yellow-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-yellow-800">Weak Submit Button</p>
<p className="text-xs text-yellow-700 mt-1">"Submit" is generic - use benefit-focused copy</p>
</div>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
<i className="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>
                                            High-Impact Fixes
                                        </h4>
<div className="space-y-3">
<div className="p-3 bg-green-50 rounded-lg border border-green-200">
<div className="flex items-start">
<i className="fa-solid fa-arrow-up text-green-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-green-800">Reduce to Name, Email, Message</p>
<p className="text-xs text-green-700 mt-1">Could increase conversions by 120%</p>
<div className="mt-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                                                                High Impact
                                                            </span>
</div>
</div>
</div>
</div>
<div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
<div className="flex items-start">
<i className="fa-solid fa-shield-alt text-blue-600 mr-2 mt-0.5"></i>
<div>
<p className="text-sm font-medium text-blue-800">Add Trust Elements</p>
<p className="text-xs text-blue-700 mt-1">Include SSL badge and "We respect your privacy"</p>
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

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900 flex items-center">
<i className="fa-solid fa-filter text-gray-600 mr-2"></i>
                                    Conversion Funnel Analysis
                                </h3>
<p className="text-sm text-gray-500 mt-1">User journey and drop-off points</p>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="text-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
<i className="fa-solid fa-eye text-green-600 text-xl"></i>
</div>
<h4 className="text-sm font-semibold text-gray-900">Landing</h4>
<p className="text-2xl font-bold text-green-600">100%</p>
<p className="text-xs text-gray-500">All visitors</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
<i className="fa-solid fa-mouse-pointer text-blue-600 text-xl"></i>
</div>
<h4 className="text-sm font-semibold text-gray-900">Engagement</h4>
<p className="text-2xl font-bold text-blue-600">68%</p>
<p className="text-xs text-gray-500">Scroll past hero</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
<i className="fa-solid fa-hand-pointer text-yellow-600 text-xl"></i>
</div>
<h4 className="text-sm font-semibold text-gray-900">Interest</h4>
<p className="text-2xl font-bold text-yellow-600">32%</p>
<p className="text-xs text-gray-500">Click CTA button</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
<i className="fa-solid fa-check text-red-600 text-xl"></i>
</div>
<h4 className="text-sm font-semibold text-gray-900">Conversion</h4>
<p className="text-2xl font-bold text-red-600">2.4%</p>
<p className="text-xs text-gray-500">Complete form</p>
</div>
</div>

<div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
<h4 className="text-sm font-semibold text-yellow-800 mb-2 flex items-center">
<i className="fa-solid fa-exclamation-triangle mr-2"></i></h4></div></div></div></div></div></div></main></div></div>
    </>
  );
}
