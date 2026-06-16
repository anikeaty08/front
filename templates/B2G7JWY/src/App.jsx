import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#6366f1',
                        secondary: '#f59e0b',
                        accent: '#10b981',
                        dark: '#1f2937'
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
      

<div className="fixed inset-0 z-40 lg:hidden hidden" id="sidebar-overlay">
<div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
</div>

<nav className="fixed top-0 left-0 z-50 w-72 h-full bg-white shadow-xl border-r border-gray-200 transform -translate-x-full lg:translate-x-0 transition-transform duration-300">

<div className="flex items-center justify-center h-20 px-6 border-b border-gray-100">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
<i className="fas fa-chart-line text-white text-lg"></i>
</div>
<span className="text-xl font-bold text-gray-900">AuditFlow</span>
</div>
</div>

<div className="px-4 py-6 overflow-y-auto h-full">
<div className="space-y-2">

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="dashboard.html">
<i className="fas fa-home w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">Dashboard</span>
</a>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="all-audits.html">
<i className="fas fa-list w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">All Audits</span>
<span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full group-hover:bg-white group-hover:text-primary">24</span>
</a>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="new-audit.html">
<i className="fas fa-plus-circle w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">New Audit</span>
</a>

<a className="flex items-center px-4 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl shadow-lg" href="audit-results.html">
<i className="fas fa-chart-bar w-5 h-5 mr-3"></i>
<span className="font-medium">Audit Results</span>
</a>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="report-generator.html">
<i className="fas fa-file-alt w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">Report Generator</span>
</a>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="white-label.html">
<i className="fas fa-palette w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">White Label</span>
</a>
<div className="border-t border-gray-200 my-4"></div>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="tasks.html">
<i className="fas fa-tasks w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">Tasks</span>
<span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full group-hover:bg-white group-hover:text-red-600">8</span>
</a>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="team.html">
<i className="fas fa-users w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">Team</span>
</a>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="billing.html">
<i className="fas fa-credit-card w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">Billing</span>
</a>

<a className="flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 group" href="settings.html">
<i className="fas fa-cog w-5 h-5 mr-3 group-hover:scale-110 transition-transform"></i>
<span className="font-medium">Settings</span>
</a>
</div>

<div className="absolute bottom-6 left-4 right-4">
<div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border">
<div className="flex items-center space-x-3">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/1.jpg"/>
<div className="flex-1">
<h4 className="font-semibold text-gray-900 text-sm">Prince Reuben</h4>
<p className="text-xs text-gray-500">Product Owner</p>
<div className="flex items-center space-x-1 mt-1">
<div className="w-2 h-2 bg-accent rounded-full"></div>
<span className="text-xs text-accent font-medium">Pro Plan</span>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="fas fa-ellipsis-h"></i>
</button>
</div>
</div>
</div>
</div>
</nav>

<div className="lg:ml-72">

<header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
<div className="px-6 py-4">
<div className="flex items-center justify-between">

<div className="flex items-center space-x-4">
<button className="lg:hidden text-gray-500 hover:text-gray-700">
<i className="fas fa-bars text-xl"></i>
</button>
<div>
<h1 className="text-2xl font-bold text-gray-900">Website Analysis Report</h1>
<p className="text-sm text-gray-500 mt-1">Complete audit results for example.com</p>
</div>
</div>

<div className="flex items-center space-x-3">
<button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
<i className="fas fa-download mr-2"></i>
                            Export PDF
                        </button>
<button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
<i className="fas fa-share-alt mr-2"></i>
                            Share
                        </button>
<button className="flex items-center px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-primary transition-all">
<i className="fas fa-redo mr-2"></i>
                            Re-run Audit
                        </button>
</div>
</div>
</div>
</header>

<main className="p-6">

<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-4">
<img alt="Site favicon" className="w-16 h-16 rounded-xl shadow-md" src="https://www.google.com/s2/favicons?domain=example.com&amp;sz=64"/>
<div>
<h2 className="text-3xl font-bold text-gray-900">example.com</h2>
<p className="text-gray-500 mt-1">Analyzed on December 15, 2024 at 2:34 PM</p>
<div className="flex items-center space-x-4 mt-2">
<span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Needs Improvement</span>
<span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Landing Page</span>
</div>
</div>
</div>
<div className="text-center">
<div className="relative inline-flex items-center justify-center w-24 h-24">
<svg className="w-24 h-24 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" stroke-dasharray="72, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-2xl font-bold text-secondary">72</span>
</div>
</div>
<p className="text-sm text-gray-600 mt-2">Overall Score</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-8">
<div className="border-b border-gray-200">
<div className="flex overflow-x-auto scrollbar-hide">
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-primary text-primary bg-blue-50">
<i className="fas fa-chart-pie mr-2"></i>Overview
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-search mr-2"></i>SEO Analysis
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-tachometer-alt mr-2"></i>Performance
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-universal-access mr-2"></i>Accessibility
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-shield-alt mr-2"></i>Security
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-balance-scale mr-2"></i>Legal
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-sitemap mr-2"></i>Navigation
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-paint-brush mr-2"></i>UI/UX
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-file-text mr-2"></i>Content
                        </button>
<button className="flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
<i className="fas fa-chart-line mr-2"></i>Conversion
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-white/20 rounded-xl">
<i className="fas fa-exclamation-triangle text-2xl"></i>
</div>
<div className="text-right">
<p className="text-red-100 text-sm">Critical</p>
<p className="text-3xl font-bold">6</p>
</div>
</div>
<p className="text-red-100">Issues requiring immediate attention</p>
<div className="mt-4 flex items-center text-red-100">
<span className="text-sm">View details</span>
<i className="fas fa-arrow-right ml-2"></i>
</div>
</div>

<div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-white/20 rounded-xl">
<i className="fas fa-exclamation-circle text-2xl"></i>
</div>
<div className="text-right">
<p className="text-yellow-100 text-sm">Warnings</p>
<p className="text-3xl font-bold">11</p>
</div>
</div>
<p className="text-yellow-100">Medium priority improvements</p>
<div className="mt-4 flex items-center text-yellow-100">
<span className="text-sm">Review now</span>
<i className="fas fa-arrow-right ml-2"></i>
</div>
</div>

<div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-white/20 rounded-xl">
<i className="fas fa-check-circle text-2xl"></i>
</div>
<div className="text-right">
<p className="text-green-100 text-sm">Passed</p>
<p className="text-3xl font-bold">28</p>
</div>
</div>
<p className="text-green-100">Tests performing well</p>
<div className="mt-4 flex items-center text-green-100">
<span className="text-sm">Great job!</span>
<i className="fas fa-thumbs-up ml-2"></i>
</div>
</div>

<div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-white/20 rounded-xl">
<i className="fas fa-lightbulb text-2xl"></i>
</div>
<div className="text-right">
<p className="text-blue-100 text-sm">Opportunities</p>
<p className="text-3xl font-bold">15</p>
</div>
</div>
<p className="text-blue-100">Growth potential areas</p>
<div className="mt-4 flex items-center text-blue-100">
<span className="text-sm">Explore</span>
<i className="fas fa-arrow-right ml-2"></i>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
<h3 className="text-xl font-bold text-gray-900 mb-6">Performance Analysis</h3>
<div className="space-y-6">

<div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
<i className="fas fa-search text-white"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900">SEO Optimization</h4>
<p className="text-sm text-gray-600">Search engine performance</p>
</div>
</div>
<div className="text-center">
<div className="relative w-16 h-16">
<svg className="w-16 h-16 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#fee2e2" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ef4444" stroke-dasharray="48, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-lg font-bold text-red-600">48</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
<i className="fas fa-bolt text-white"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900">Site Performance</h4>
<p className="text-sm text-gray-600">Loading speed &amp; optimization</p>
</div>
</div>
<div className="text-center">
<div className="relative w-16 h-16">
<svg className="w-16 h-16 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#fef3c7" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" stroke-dasharray="64, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-lg font-bold text-yellow-600">64</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
<i className="fas fa-universal-access text-white"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900">Accessibility</h4>
<p className="text-sm text-gray-600">WCAG compliance</p>
</div>
</div>
<div className="text-center">
<div className="relative w-16 h-16">
<svg className="w-16 h-16 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#dcfce7" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22c55e" stroke-dasharray="89, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-lg font-bold text-green-600">89</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
<i className="fas fa-shield-alt text-white"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900">Security</h4>
<p className="text-sm text-gray-600">Safety &amp; protection</p>
</div>
</div>
<div className="text-center">
<div className="relative w-16 h-16">
<svg className="w-16 h-16 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#dbeafe" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3b82f6" stroke-dasharray="76, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-lg font-bold text-blue-600">76</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
<h3 className="text-lg font-bold text-gray-900 mb-4">Priority Issues</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3 p-3 bg-red-50 rounded-xl border border-red-100">
<div className="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
<div className="flex-1">
<h4 className="font-medium text-red-900 text-sm">Missing Meta Tags</h4>
<p className="text-xs text-red-700 mt-1">Critical for search rankings</p>
<span className="inline-block text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full mt-2">High Impact</span>
</div>
</div>
<div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
<div className="w-3 h-3 bg-yellow-500 rounded-full mt-1.5"></div>
<div className="flex-1">
<h4 className="font-medium text-yellow-900 text-sm">Slow Image Loading</h4>
<p className="text-xs text-yellow-700 mt-1">Affects user experience</p>
<span className="inline-block text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full mt-2">Medium Impact</span>
</div>
</div>
<div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
<div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
<div className="flex-1">
<h4 className="font-medium text-blue-900 text-sm">Mobile Optimization</h4></div></div></div></div></div></div></main></div>
    </>
  );
}
