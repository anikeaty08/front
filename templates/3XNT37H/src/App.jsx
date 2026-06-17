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
<h1 className="text-lg font-medium text-gray-900">example.com - Conversion Optimization</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Medium Risk</span>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#security">
                                        Security
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#conversion">
                                        Conversion Optimization
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

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="p-5">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-bullseye text-brand-primary text-2xl"></i>
</div>
<div className="ml-5 w-0 flex-1">
<dl>
<dt className="text-sm font-medium text-gray-500 truncate">Conversion Score</dt>
<dd className="text-lg font-medium text-gray-900">72/100</dd>
</dl>
</div>
</div>
</div>
<div className="bg-gray-50 px-5 py-3">
<div className="text-sm">
<span className="font-medium text-yellow-600">Needs optimization</span>
</div>
</div>
</div>
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="p-5">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-mouse-pointer text-green-500 text-2xl"></i>
</div>
<div className="ml-5 w-0 flex-1">
<dl>
<dt className="text-sm font-medium text-gray-500 truncate">CTAs Found</dt>
<dd className="text-lg font-medium text-gray-900">8</dd>
</dl>
</div>
</div>
</div>
<div className="bg-gray-50 px-5 py-3">
<div className="text-sm">
<span className="font-medium text-green-600">Good coverage</span>
</div>
</div>
</div>
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="p-5">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-route text-blue-500 text-2xl"></i>
</div>
<div className="ml-5 w-0 flex-1">
<dl>
<dt className="text-sm font-medium text-gray-500 truncate">Funnel Steps</dt>
<dd className="text-lg font-medium text-gray-900">5</dd>
</dl>
</div>
</div>
</div>
<div className="bg-gray-50 px-5 py-3">
<div className="text-sm">
<span className="font-medium text-blue-600">Optimal length</span>
</div>
</div>
</div>
<div className="bg-white overflow-hidden shadow rounded-lg">
<div className="p-5">
<div className="flex items-center">
<div className="flex-shrink-0">
<i className="fa-solid fa-chart-line text-purple-500 text-2xl"></i>
</div>
<div className="ml-5 w-0 flex-1">
<dl>
<dt className="text-sm font-medium text-gray-500 truncate">Est. Conv. Rate</dt>
<dd className="text-lg font-medium text-gray-900">2.4%</dd>
</dl>
</div>
</div>
</div>
<div className="bg-gray-50 px-5 py-3">
<div className="text-sm">
<span className="font-medium text-gray-600">Industry average</span>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Conversion Funnel Analysis</h3>
<p className="text-sm text-gray-500 mt-1">Visual representation of your user journey and potential drop-off points</p>
</div>
<div className="px-6 py-5">
<div className="flex justify-center mb-6">

<div className="w-full max-w-4xl">
<div className="relative">

<div className="space-y-4">

<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-lg overflow-hidden" style={{height: '60px'}}>
<div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-between px-6" style={{width: '100%'}}>
<span className="text-white font-medium">1. Landing Page Visit</span>
<span className="text-white text-sm">100% (1,000 visitors)</span>
</div>
</div>
</div>

<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-lg overflow-hidden" style={{height: '55px'}}>
<div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-between px-6" style={{width: '85%'}}>
<span className="text-white font-medium">2. Show Interest (Scroll/Engage)</span>
<span className="text-white text-sm">85% (850 visitors)</span>
</div>
</div>
<div className="ml-4 text-sm text-red-600 font-medium">-15%</div>
</div>

<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-lg overflow-hidden" style={{height: '50px'}}>
<div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-between px-6" style={{width: '60%'}}>
<span className="text-white font-medium">3. Consideration (CTA Click)</span>
<span className="text-white text-sm">60% (600 visitors)</span>
</div>
</div>
<div className="ml-4 text-sm text-red-600 font-medium">-25%</div>
</div>

<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-lg overflow-hidden" style={{height: '45px'}}>
<div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-between px-6" style={{width: '35%'}}>
<span className="text-white font-medium">4. Intent (Form Start)</span>
<span className="text-white text-sm">35% (350 visitors)</span>
</div>
</div>
<div className="ml-4 text-sm text-red-600 font-medium">-25%</div>
</div>

<div className="flex items-center">
<div className="w-full bg-gray-200 rounded-lg overflow-hidden" style={{height: '40px'}}>
<div className="h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-between px-6" style={{width: '24%'}}>
<span className="text-white font-medium">5. Conversion</span>
<span className="text-white text-sm">2.4% (24 conversions)</span>
</div>
</div>
<div className="ml-4 text-sm text-red-600 font-medium">-10.6%</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<h4 className="text-sm font-medium text-red-800 mb-2">Highest Drop-off Point</h4>
<p className="text-sm text-red-700">Interest → Consideration (25% drop)</p>
<p className="text-xs text-red-600 mt-1">Users are not clicking CTAs effectively</p>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<h4 className="text-sm font-medium text-green-800 mb-2">Best Performing Step</h4>
<p className="text-sm text-green-700">Intent → Conversion (89.4% retention)</p>
<p className="text-xs text-green-600 mt-1">Strong form completion rate</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Call-to-Action Analysis</h3>
<p className="text-sm text-gray-500 mt-1">Detailed breakdown of all CTAs and their effectiveness</p>
</div>
<div className="px-6 py-5">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTA Location</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Text</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visibility</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contrast</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hero Section</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"Get Started Free"</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Excellent
                                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.8:1</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92/100</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Optimized
                                                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Features Section</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"Try It Now"</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        Fair
                                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.2:1</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">68/100</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        Needs Work
                                                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pricing Section</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"Choose Plan"</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Good
                                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.1:1</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">84/100</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Optimized
                                                    </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Footer</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"Get Started"</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Poor
                                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.1:1</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45/100</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Critical
                                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Trust Signals</h3>
</div>
<div className="px-6 py-5">
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<i className="fa-solid fa-shield-halved text-green-500 mr-3"></i>
<span className="text-sm font-medium text-gray-900">SSL Certificate</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Present
                                            </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<i className="fa-solid fa-award text-green-500 mr-3"></i>
<span className="text-sm font-medium text-gray-900">Customer Testimonials</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                4 Found
                                            </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<i className="fa-solid fa-star text-yellow-500 mr-3"></i>
<span className="text-sm font-medium text-gray-900">Customer Reviews</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Missing
                                            </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<i className="fa-solid fa-building text-green-500 mr-3"></i>
<span className="text-sm font-medium text-gray-900">Company Information</span>
</div>
</div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
