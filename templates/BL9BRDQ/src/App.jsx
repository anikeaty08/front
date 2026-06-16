import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
<h1 className="text-lg font-medium text-gray-900">example.com - Sections Analysis</h1>
<span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Low Risk</span>
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

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Page Sections Overview</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Good Structure
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
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" stroke-dasharray="82, 100" strokeWidth="3"></path>
<text fill="#374151" fontSize="8" font-weight="bold" text-anchor="middle" x="18" y="20.5">82%</text>
</svg>
</div>
<div className="text-center mt-2">
<h4 className="text-sm font-medium text-gray-900">Overall Sections Score</h4>
<p className="text-xs text-gray-500 mt-1">Based on best practices and user engagement metrics</p>
</div>
</div>
</div>
<div className="w-full lg:w-2/3">
<div className="mb-4">
<h4 className="text-sm font-medium text-gray-900 mb-2">Key Findings</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-center">
<i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
<span>All critical sections are present (Hero, Features, CTA, Testimonials)</span>
</li>
<li className="flex items-center">
<i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
<span>Good vertical rhythm with consistent spacing (32px-48px)</span>
</li>
<li className="flex items-center">
<i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
<span>Proper section hierarchy follows user decision journey</span>
</li>
<li className="flex items-center">
<i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2"></i>
<span>FAQ section could be expanded (only 3 questions currently)</span>
</li>
<li className="flex items-center">
<i className="fa-solid fa-triangle-exclamation text-yellow-500 mr-2"></i>
<span>About section appears too late in page flow (recommendation: move higher)</span>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Section Performance</h4>
<div className="space-y-3">

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Hero Section</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                            Excellent
                                                        </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 95/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Features Section</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                            Good
                                                        </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 85/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Testimonials Section</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                            Good
                                                        </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 80/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">CTA Section</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                            Good
                                                        </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 88/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">FAQ Section</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                            Needs Improvement
                                                        </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 65/100</span>
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
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Visual Page Flow</h3>
</div>
<div className="px-6 py-5">
<div className="flex justify-center mb-6">

<div className="w-full max-w-4xl">
<div className="relative overflow-x-auto pb-4">
<div className="w-full" style={{minWidth: '700px'}}>
<div className="flex space-x-3 items-stretch h-96">

<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-brand-primary rounded-md" style={{height: '90%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">90%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">Hero</div>
</div>
<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-brand-primary rounded-md" style={{height: '75%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">75%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">Features</div>
</div>
<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-brand-primary rounded-md" style={{height: '60%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">60%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">Social Proof</div>
</div>
<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-brand-primary rounded-md" style={{height: '72%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">72%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">Benefits</div>
</div>
<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-yellow-500 rounded-md" style={{height: '40%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">40%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">About</div>
</div>
<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-yellow-500 rounded-md" style={{height: '35%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">35%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">FAQ</div>
</div>
<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-brand-primary rounded-md" style={{height: '85%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">85%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">CTA</div>
</div>
<div className="flex flex-col items-center justify-start w-20">
<div className="text-xs text-gray-500 mb-1">Attention</div>
<div className="relative w-full h-full bg-gray-100 rounded-md">
<div className="absolute bottom-0 w-full bg-brand-primary rounded-md" style={{height: '55%'}}></div>
<div className="absolute bottom-0 w-full h-full flex items-center justify-center">
<span className="text-xs font-medium text-white">55%</span>
</div>
</div>
<div className="text-xs font-medium text-gray-700 mt-2">Footer</div>
</div>
</div>

<div className="h-8 relative mt-2">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-30 rounded-md"></div>
</div>

<div className="flex justify-between text-xs text-gray-500 mt-1">
<span>Top of page</span>
<span>Bottom of page</span>
</div>
</div>
</div>

<div className="flex justify-center mt-4">
<div className="grid grid-cols-2 gap-4 text-sm">
<div className="flex items-center">
<div className="w-4 h-4 bg-brand-primary rounded mr-2"></div>
<span>Good engagement (&gt;50%)</span>
</div>
<div className="flex items-center">
<div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
<span>Low engagement (&lt;50%)</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 p-4 bg-gray-50 rounded-lg">
<h4 className="text-sm font-medium text-gray-900 mb-2">Page Flow Analysis</h4>
<p className="text-sm text-gray-600 mb-3">
                                        Your page follows a logical flow with strong attention at key conversion points (Hero and CTA). However, we detected attention drop in the About and FAQ sections, likely due to their position and content design.
                                    </p>
</div></div></div></div></div></main></div></div>
    </>
  );
}
