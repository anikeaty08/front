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
<h1 className="text-lg font-medium text-gray-900">example.com - Navigation Analysis</h1>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#legal">
                                        Legal
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#navigation">
                                        Navigation
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
<h3 className="text-lg font-medium text-gray-900">Navigation &amp; Structure Overview</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Medium Risk
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
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" stroke-dasharray="68, 100" strokeWidth="3"></path>
<text fill="#374151" fontSize="8" font-weight="bold" text-anchor="middle" x="18" y="20.5">68%</text>
</svg>
</div>
<div className="text-center mt-2">
<h4 className="text-sm font-medium text-gray-900">Overall Navigation Score</h4>
<p className="text-xs text-gray-500 mt-1">Based on UX standards and best practices</p>
</div>
</div>
</div>
<div className="w-full lg:w-2/3">
<h4 className="text-sm font-medium text-gray-900 mb-4">Navigation Category Scores</h4>
<div className="grid grid-cols-1 gap-4">

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Menu Structure</h5>
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
<h5 className="text-sm font-medium text-gray-900">Mobile Navigation</h5>
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

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">Internal Linking</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                        Needs Improvement
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 60/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<div>
<h5 className="text-sm font-medium text-gray-900">URL Structure</h5>
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
<h5 className="text-sm font-medium text-gray-900">Site Search</h5>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Poor
                                                    </span>
</div>
<div className="mt-2">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-700">Score: 40/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{width: '40%'}}></div>
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
<h3 className="text-lg font-medium text-gray-900">Site Structure Visualization</h3>
</div>
<div className="px-6 py-5">
<div className="flex justify-center">

<div className="w-full max-w-4xl">
<svg className="w-full" viewbox="0 0 800 400">

<g>
<circle cx="400" cy="50" fill="#4984FF" r="30"></circle>
<text fill="white" fontSize="12" text-anchor="middle" x="400" y="55">Home</text>
</g>

<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="200" y1="80" y2="150"></line>
<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="400" y1="80" y2="150"></line>
<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="600" y1="80" y2="150"></line>

<g>
<circle cx="200" cy="150" fill="#93C5FD" r="25"></circle>
<text fill="white" fontSize="10" text-anchor="middle" x="200" y="155">About</text>
</g>
<g>
<circle cx="400" cy="150" fill="#93C5FD" r="25"></circle>
<text fill="white" fontSize="10" text-anchor="middle" x="400" y="155">Products</text>
</g>
<g>
<circle cx="600" cy="150" fill="#93C5FD" r="25"></circle>
<text fill="white" fontSize="10" text-anchor="middle" x="600" y="155">Contact</text>
</g>

<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="300" y1="175" y2="250"></line>
<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="400" y1="175" y2="250"></line>
<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="500" y1="175" y2="250"></line>

<g>
<circle cx="300" cy="250" fill="#BFDBFE" r="20"></circle>
<text fill="#1E40AF" fontSize="8" text-anchor="middle" x="300" y="254">Product A</text>
</g>
<g>
<circle cx="400" cy="250" fill="#BFDBFE" r="20"></circle>
<text fill="#1E40AF" fontSize="8" text-anchor="middle" x="400" y="254">Product B</text>
</g>
<g>
<circle cx="500" cy="250" fill="#BFDBFE" r="20"></circle>
<text fill="#1E40AF" fontSize="8" text-anchor="middle" x="500" y="254">Product C</text>
</g>

<line stroke="#CBD5E1" strokeWidth="2" x1="200" x2="150" y1="175" y2="250"></line>
<line stroke="#CBD5E1" strokeWidth="2" x1="200" x2="230" y1="175" y2="250"></line>

<g>
<circle cx="150" cy="250" fill="#BFDBFE" r="20"></circle>
<text fill="#1E40AF" fontSize="8" text-anchor="middle" x="150" y="254">Team</text>
</g>
<g>
<circle cx="230" cy="250" fill="#BFDBFE" r="20"></circle>
<text fill="#1E40AF" fontSize="8" text-anchor="middle" x="230" y="254">History</text>
</g>

<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="370" y1="270" y2="320"></line>
<line stroke="#CBD5E1" strokeWidth="2" x1="400" x2="430" y1="270" y2="320"></line>

<g>
<circle cx="370" cy="320" fill="#DBEAFE" r="15"></circle>
<text fill="#1E40AF" fontSize="7" text-anchor="middle" x="370" y="323">Details</text>
</g>
<g>
<circle cx="430" cy="320" fill="#DBEAFE" r="15"></circle>
<text fill="#1E40AF" fontSize="7" text-anchor="middle" x="430" y="323">Specs</text>
</g>

<g transform="translate(650, 320)">
<rect fill="white" height="70" rx="4" stroke="#CBD5E1" width="120" x="0" y="0"></rect>
<text fontSize="10" font-weight="bold" text-anchor="middle" x="60" y="15">Legend</text>
<circle cx="15" cy="30" fill="#4984FF" r="6"></circle>
<text fontSize="8" x="25" y="33">Home Page</text>
<circle cx="15" cy="45" fill="#93C5FD" r="6"></circle>
<text fontSize="8" x="25" y="48">Main Category</text>
<circle cx="15" cy="60" fill="#BFDBFE" r="6"></circle>
<text fontSize="8" x="25" y="63">Sub Page</text>
</g>
</svg>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-lg font-medium text-gray-900">Navigation Issues</h3>
</div>
<div className="px-6 py-5">
<div className="space-y-6">

<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-exclamation text-yellow-600"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-yellow-800">Mobile Navigation Issues</h3>
<div className="mt-2 text-sm text-yellow-700">
<p>Your mobile hamburger menu is difficult to tap (target size is 24px, recommended is 44px) and the dropdown animation is slow (850ms, recommended is under 300ms).</p>
</div>
<div className="mt-4">
<div className="flex">
<button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="button">
                                                            See Details
                                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-triangle-exclamation text-red-600"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-red-800">Missing Search Functionality</h3>
<div className="mt-2 text-sm text-red-700">
<p>Your website lacks a search function, which makes it difficult for users to find specific content. This significantly impacts user experience and can lead to higher bounce rates.</p>
</div>
<div className="mt-4">
<div className="flex">
<button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="button">
                                                            Add Search Feature
                                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="flex">
<div className="flex-shrink-0">
<i className="fa-solid fa-circle-exclamation text-yellow-600"></i>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-yellow-800">Poor Internal Linking Structure</h3>
<div className="mt-2 text-sm text-yellow-700">
<p>Your internal linking structure needs improvement. We found 12 orphaned pages (not linked from any other page) and your click depth is too high for key pages (5+ clicks from homepage).</p>
</div>
<div className="mt-3">
<p className="text-sm text-yellow-700"><strong>Orphaned Pages:</strong></p>
<ul className="mt-1 text-sm text-yellow-700 space-y-1 list-disc list-inside pl-2">
<li>/about/press</li>
<li>/products/discontinued/product-x</li>
<li>/blog/author/john-smith</li>
<li>9</li></ul></div></div></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
