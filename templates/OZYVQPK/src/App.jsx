import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
<h1 className="text-lg font-medium text-gray-900">example.com - Content Copy Analysis</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Needs Improvement</span>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#content">
                                        Content Copy
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#conversion">
                                        Conversion Optimization
                                    </a>
</nav>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Content Quality Analysis</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Needs Improvement
                                    </span>
</div>
</div>
<div className="px-6 py-5">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="flex flex-col items-center justify-center">
<div className="relative w-32 h-32">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" stroke-dasharray="62, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-bold text-gray-900">62</div>
<div className="text-xs text-gray-500">Score</div>
</div>
</div>
</div>
<h4 className="text-sm font-medium text-gray-900 mt-2">Content Score</h4>
<p className="text-xs text-gray-500 text-center mt-1">Several areas need attention</p>
</div>

<div className="lg:col-span-2">
<h4 className="text-sm font-medium text-gray-900 mb-4">Content Quality Metrics</h4>
<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Readability</p>
<p className="text-2xl font-bold text-green-600">78%</p>
</div>
<div className="p-2 bg-green-100 rounded-lg">
<i className="fa-solid fa-book-open text-green-600"></i>
</div>
</div>
<p className="text-xs text-gray-500 mt-2">Grade 8 reading level - good accessibility</p>
</div>
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Clarity</p>
<p className="text-2xl font-bold text-orange-600">65%</p>
</div>
<div className="p-2 bg-orange-100 rounded-lg">
<i className="fa-solid fa-lightbulb text-orange-600"></i>
</div>
</div>
<p className="text-xs text-gray-500 mt-2">Some sections lack clear messaging</p>
</div>
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Engagement</p>
<p className="text-2xl font-bold text-red-600">48%</p>
</div>
<div className="p-2 bg-red-100 rounded-lg">
<i className="fa-solid fa-heart text-red-600"></i>
</div>
</div>
<p className="text-xs text-gray-500 mt-2">Content lacks emotional connection</p>
</div>
<div className="bg-gray-50 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Action-Oriented</p>
<p className="text-2xl font-bold text-orange-600">55%</p>
</div>
<div className="p-2 bg-orange-100 rounded-lg">
<i className="fa-solid fa-bullseye text-orange-600"></i>
</div>
</div>
<p className="text-xs text-gray-500 mt-2">Could use stronger calls to action</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Section-by-Section Analysis</h3>
<p className="text-sm text-gray-500 mt-1">Detailed review of content across different page sections</p>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<h4 className="text-base font-medium text-gray-900">Hero Section</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Critical
                                                </span>
</div>
<div className="mt-3 bg-gray-50 rounded-lg p-4">
<p className="text-sm font-medium text-gray-900 mb-2">Current Headline:</p>
<p className="text-sm text-gray-600 italic">"Welcome to Our Platform - Your Digital Solution"</p>
</div>
<div className="mt-4">
<h5 className="text-sm font-medium text-gray-900 mb-2">Issues Identified:</h5>
<ul className="text-sm text-gray-600 space-y-1">
<li className="flex items-center">
<i className="fa-solid fa-exclamation-triangle text-red-500 mr-2"></i>
                                                        Headline is too generic and doesn't communicate value
                                                    </li>
<li className="flex items-center">
<i className="fa-solid fa-exclamation-triangle text-red-500 mr-2"></i>
                                                        No clear problem/solution statement
                                                    </li>
<li className="flex items-center">
<i className="fa-solid fa-exclamation-triangle text-red-500 mr-2"></i>
                                                        Missing benefit-focused messaging
                                                    </li>
</ul>
</div>
<div className="mt-4 bg-green-50 rounded-lg p-4">
<h5 className="text-sm font-medium text-green-900 mb-2">Recommended Improvements:</h5>
<div className="space-y-2 text-sm text-green-800">
<p><strong>Option A:</strong> "Increase Your Website Conversions by 40% in 30 Days"</p>
<p><strong>Option B:</strong> "Transform Website Visitors Into Paying Customers"</p>
<p><strong>Option C:</strong> "The AI-Powered Tool That Doubles Your Lead Generation"</p>
</div>
</div>
</div>
<div className="ml-4">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
<span className="text-2xl font-bold text-red-600">32</span>
</div>
<p className="text-xs text-center text-gray-500 mt-1">Score</p>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<h4 className="text-base font-medium text-gray-900">Features Section</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Moderate
                                                </span>
</div>
<div className="mt-4">
<h5 className="text-sm font-medium text-gray-900 mb-2">Issues Identified:</h5>
<ul className="text-sm text-gray-600 space-y-1">
<li className="flex items-center">
<i className="fa-solid fa-exclamation-triangle text-yellow-500 mr-2"></i>
                                                        Features focus on "what" instead of "why it matters"
                                                    </li>
<li className="flex items-center">
<i className="fa-solid fa-exclamation-triangle text-yellow-500 mr-2"></i>
                                                        Technical jargon may confuse non-technical users
                                                    </li>
<li className="flex items-center">
<i className="fa-solid fa-exclamation-triangle text-yellow-500 mr-2"></i>
                                                        Missing emotional benefits and outcomes
                                                    </li>
</ul>
</div>
<div className="mt-4 bg-yellow-50 rounded-lg p-4">
<h5 className="text-sm font-medium text-yellow-900 mb-2">Recommended Changes:</h5>
<div className="space-y-3 text-sm">
<div>
<p className="font-medium text-yellow-900">Current: "Advanced Analytics Dashboard"</p>
<p className="text-yellow-800">Better: "See exactly where you're losing customers and fix it in minutes"</p>
</div>
<div>
<p className="font-medium text-yellow-900">Current: "Automated Reporting System"</p>
<p className="text-yellow-800">Better: "Get actionable insights delivered to your inbox weekly"</p>
</div>
</div>
</div>
</div>
<div className="ml-4">
<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
<span className="text-2xl font-bold text-yellow-600">64</span>
</div>
<p className="text-xs text-center text-gray-500 mt-1">Score</p>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<h4 className="text-base font-medium text-gray-900">About Section</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Good
                                                </span>
</div>
<div className="mt-4">
<h5 className="text-sm font-medium text-gray-900 mb-2">Strengths:</h5>
<ul className="text-sm text-gray-600 space-y-1">
<li className="flex items-center">
<i className="fa-solid fa-check-circle text-green-500 mr-2"></i>
                                                        Clear company story and mission
                                                    </li>
<li className="flex items-center">
<i className="fa-solid fa-check-circle text-green-500 mr-2"></i>
                                                        Includes team credentials and experience
                                                    </li>
</ul>
</div>
<div className="mt-4">
<h5 className="text-sm font-medium text-gray-900 mb-2">Minor Improvements:</h5>
<ul className="text-sm text-gray-600 space-y-1">
<li className="flex items-center">
<i className="fa-solid fa-lightbulb text-blue-500 mr-2"></i>
                                                        Add more customer success stories
                                                    </li>
<li className="flex items-center">
<i className="fa-solid fa-lightbulb text-blue-500 mr-2"></i>
                                                        Include specific achievements with numbers
                                                    </li>
</ul>
</div>
</div>
<div className="ml-4">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
<span className="text-2xl font-bold text-green-600">81</span>
</div>
<p className="text-xs text-center text-gray-500 mt-1">Score</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Priority Content Recommendations</h3>
<p className="text-sm text-gray-500 mt-1">Ordered by impact on user engagement and conversions</p>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
<span className="text-sm font-medium text-red-600">1</span>
</div>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-gray-900">Rewrite Hero Headline &amp; Subheading</h4>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Critical Impact
                                                </span>
</div>
<p className="text-sm text-gray-600 mt-2">
                                                Your current headline doesn't communicate value or grab attention. The subheading is too generic and doesn't explain what makes you different.
                                            </p>
<div className="mt-4 bg-gray-50 rounded-lg p-4">
<h5 className="text-sm font-medium text-gray-900 mb-3">Before &amp; After Examples:</h5>
<div className="space-y-4">
<div>
<div className="flex items-center mb-2">
<span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded">BEFORE</span>
</div>
<p className="text-sm text-gray-600 italic">"Welcome to Our Platform - Your Digital Solution"</p>
<p className="text-xs text-gray-500 mt-1">Generic, doesn't explain value or create urgency</p>
</div>
<div>
<div className="flex items-center mb-2">
<span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">AFTER</span>
</div>
<p className="text-sm text-gray-800 font-medium">"Turn Website Visitors Into Customers With AI-Powered Optimization"</p>
<p className="text-sm text-gray-600 mt-1">"Join 2,500+ businesses using our platform to increase conversions by 40% in their first month"</p>
<p className="text-xs text-gray-500 mt-1">Clear benefit, social proof, specific outcome</p>
</div>
</div>
</div>
<div className="mt-4 flex items-center space-x-4">
<span className="text-sm text-gray-500">Estimated impact: +35-50% engagement</span>
<span className="text-sm text-gray-500">Implementation time: 30 minutes</span>
</div>
</div>
</div>
</div>

<div className="px-6 py-5">
<div className="flex items-start">
<div className="flex-shrink-0">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
<span className="text-sm font-medium text-yellow-600">2</span>
</div>
</div>
<div className="ml-4 flex-1">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-gray-900">Transform Feature Lists Into Benefit Stories</h4>
</div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
