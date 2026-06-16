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
<div className="flex items-center">
<img alt="Site favicon" className="w-6 h-6 mr-3" src="https://www.google.com/s2/favicons?domain=example.com"/>
<div>
<h1 className="text-lg font-medium text-gray-900">example.com</h1>
<p className="text-sm text-gray-500">SEO Analysis Results</p>
</div>
</div>
<span className="ml-4 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">Score: 42/100</span>
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

<main className="flex-1 overflow-y-auto">
<div className="px-4 py-5 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="border-b border-gray-200">
<nav className="flex -mb-px overflow-x-auto">
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="audit-results.html">
                                        Overview
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#seo">
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

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-bold text-gray-900 flex items-center">
<i className="fa-solid fa-search text-red-600 mr-3"></i>
                                            SEO Analysis
                                        </h2>
<p className="text-gray-600 mt-1">Search Engine Optimization assessment and recommendations</p>
</div>
<div className="text-right">
<div className="text-4xl font-bold text-red-600">42</div>
<div className="text-sm text-gray-500">/ 100 Score</div>
<div className="text-xs text-red-600 font-medium mt-1">Needs Major Improvement</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<div className="text-2xl font-bold text-red-600">8</div>
<div className="text-sm text-red-700">Critical Issues</div>
</div>
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
<div className="text-2xl font-bold text-yellow-600">12</div>
<div className="text-sm text-yellow-700">Warnings</div>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<div className="text-2xl font-bold text-green-600">15</div>
<div className="text-sm text-green-700">Passed Checks</div>
</div>
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
<div className="text-2xl font-bold text-blue-600">7</div>
<div className="text-sm text-blue-700">Opportunities</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h3 className="text-lg font-medium text-gray-900 mb-4">SEO Score Breakdown</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-600">Technical SEO</span>
<span className="text-red-600 font-medium">25/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-red-600 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-600">On-Page SEO</span>
<span className="text-yellow-600 font-medium">52/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-600 h-2 rounded-full" style={{width: '52%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-600">Content Quality</span>
<span className="text-yellow-600 font-medium">38/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-600 h-2 rounded-full" style={{width: '38%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-600">Mobile SEO</span>
<span className="text-green-600 font-medium">78/100</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-600 h-2 rounded-full" style={{width: '78%'}}></div>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h3>
<div className="space-y-3">
<div className="flex justify-between">
<span className="text-sm text-gray-600">Page Title</span>
<span className="text-sm text-red-600 font-medium">Missing</span>
</div>
<div className="flex justify-between">
<span className="text-sm text-gray-600">Meta Description</span>
<span className="text-sm text-red-600 font-medium">Missing</span>
</div>
<div className="flex justify-between">
<span className="text-sm text-gray-600">H1 Tags</span>
<span className="text-sm text-yellow-600 font-medium">Multiple</span>
</div>
<div className="flex justify-between">
<span className="text-sm text-gray-600">Alt Text</span>
<span className="text-sm text-red-600 font-medium">67% Missing</span>
</div>
<div className="flex justify-between">
<span className="text-sm text-gray-600">Schema Markup</span>
<span className="text-sm text-red-600 font-medium">Not Found</span>
</div>
<div className="flex justify-between">
<span className="text-sm text-gray-600">XML Sitemap</span>
<span className="text-sm text-green-600 font-medium">Found</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 bg-red-50 border-b border-red-200">
<h3 className="text-lg font-medium text-red-900 flex items-center">
<i className="fa-solid fa-exclamation-triangle mr-2"></i>
                                    Critical SEO Issues (8)
                                </h3>
<p className="text-sm text-red-700 mt-1">These issues significantly impact your search rankings and should be fixed immediately</p>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5 hover:bg-gray-50">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
<h4 className="text-base font-medium text-gray-900">Missing Meta Description</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Critical
                                                </span>
</div>
<p className="text-sm text-gray-600 mt-2 ml-6">
                                                Your homepage doesn't have a meta description. This impacts how your page appears in search results and affects click-through rates.
                                            </p>
<div className="mt-3 ml-6">
<h5 className="text-sm font-medium text-gray-900 mb-2">How to fix:</h5>
<div className="bg-gray-50 p-3 rounded-md">
<code className="text-xs text-gray-800">
                                                        &lt;meta name="description" content="Your 150-160 character description here"&gt;
                                                    </code>
</div>
<p className="text-xs text-gray-500 mt-2">
                                                    Impact: High • Effort: 5 minutes • Priority: Immediate
                                                </p>
</div>
</div>
<button className="ml-4 text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-external-link"></i>
</button>
</div>
</div>

<div className="px-6 py-5 hover:bg-gray-50">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
<h4 className="text-base font-medium text-gray-900">Missing or Duplicate Page Title</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Critical
                                                </span>
</div>
<p className="text-sm text-gray-600 mt-2 ml-6">
                                                3 pages have missing or duplicate title tags. Title tags are crucial for SEO and appear as clickable headlines in search results.
                                            </p>
<div className="mt-3 ml-6">
<h5 className="text-sm font-medium text-gray-900 mb-2">Affected pages:</h5>
<ul className="text-sm text-gray-600 space-y-1">
<li>• /about - Missing title tag</li>
<li>• /contact - Duplicate title with homepage</li>
<li>• /services - Title too short (15 characters)</li>
</ul>
<p className="text-xs text-gray-500 mt-2">
                                                    Impact: High • Effort: 15 minutes • Priority: Immediate
                                                </p>
</div>
</div>
<button className="ml-4 text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-external-link"></i>
</button>
</div>
</div>

<div className="px-6 py-5 hover:bg-gray-50">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
<h4 className="text-base font-medium text-gray-900">Missing Image Alt Text</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Critical
                                                </span>
</div>
<p className="text-sm text-gray-600 mt-2 ml-6">
                                                18 out of 27 images are missing alt text. This hurts accessibility and SEO as search engines can't understand your images.
                                            </p>
<div className="mt-3 ml-6">
<h5 className="text-sm font-medium text-gray-900 mb-2">Missing alt text on:</h5>
<ul className="text-sm text-gray-600 space-y-1">
<li>• Hero section banner image</li>
<li>• Product gallery images (12 images)</li>
<li>• Team member photos (5 images)</li>
</ul>
<p className="text-xs text-gray-500 mt-2">
                                                    Impact: High • Effort: 30 minutes • Priority: This week
                                                </p>
</div>
</div>
<button className="ml-4 text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-external-link"></i>
</button>
</div>
</div>

<div className="px-6 py-5 hover:bg-gray-50">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
<h4 className="text-base font-medium text-gray-900">No Structured Data (Schema)</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Critical
                                                </span>
</div>
<p className="text-sm text-gray-600 mt-2 ml-6">
                                                No structured data markup found. This prevents rich snippets in search results and reduces click-through rates.
                                            </p>
<div className="mt-3 ml-6">
<h5 className="text-sm font-medium text-gray-900 mb-2">Recommended schema types:</h5>
<ul className="text-sm text-gray-600 space-y-1">
<li>• Organization markup for business info</li>
<li>• Product markup for service pages</li>
<li>• LocalBusiness for location data</li>
</ul>
<p className="text-xs text-gray-500 mt-2">
                                                    Impact: Medium • Effort: 2 hours • Priority: This month
                                                </p>
</div>
</div>
<button className="ml-4 text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-external-link"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-4 bg-yellow-50 border-b border-yellow-200">
<h3 className="text-lg font-medium text-yellow-900 flex items-center">
<i className="fa-solid fa-exclamation-circle mr-2"></i>
                                    SEO Warnings (12)
                                </h3>
<p className="text-sm text-yellow-700 mt-1">Issues that should be addressed to improve SEO performance</p>
</div>
<div className="divide-y divide-gray-200">

<div className="px-6 py-5 hover:bg-gray-50">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
<h4 className="text-base font-medium text-gray-900">Multiple H1 Tags</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Warning
                                                </span>
</div>
<p className="text-sm text-gray-600 mt-2 ml-6">
                                                Your homepage has 3 H1 tags. Best practice is to use only one H1 per page for better SEO structure.
                                            </p>
<div className="mt-3 ml-6">
<p className="text-xs text-gray-500">
                                                    Impact: Medium • Effort: 10 minutes • Priority: This week
                                                </p>
</div>
</div>
<button className="ml-4 text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-external-link"></i>
</button>
</div>
</div>

<div className="px-6 py-5 hover:bg-gray-50">
<div className="flex items-start justify-between">
<div className="flex-1">
<div className="flex items-center">
<div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
<h4 className="text-base font-medium text-gray-900">URL Structure Issues</h4>
<span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Warning
                                                </span>
</div>
<p className="text-sm text-gray-600 mt-2 ml-6">
                                                4 pages have URLs longer than 60 characters or contain unnecessary parameters.
                                            </p>
<div className="mt-3 ml-6">
<p className="text-xs text-gray-500">
                                                    Impact: Low • Effort: 30 minutes • Priority: This month
                                                </p>
</div>
</div>
<button className="ml-4 text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-external-link"></i>
</button>
</div>
</div>
</div></div></div></div></main></div></div>
    </>
  );
}
