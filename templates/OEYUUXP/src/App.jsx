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
<a className="flex items-center px-4 py-3 text-white bg-brand-primary rounded-md" href="audit-results.html">
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
<h1 className="text-lg font-medium text-gray-900">example.com - Best Practices Analysis</h1>
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
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" href="#accessibility">
                                        Accessibility
                                    </a>
<a className="whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm border-brand-primary text-brand-primary" href="#best-practices">
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
<h3 className="text-lg font-medium text-gray-900">Best Practices Score</h3>
</div>
<div className="px-6 py-5">
<div className="flex flex-col md:flex-row items-center">
<div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
<div className="relative w-32 h-32">

<svg className="w-full h-full" viewbox="0 0 36 36">
<path className="stroke-current text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
<path className="stroke-current text-yellow-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="67, 100" strokeLinecap="round" strokeWidth="3"></path>
<text className="text-4xl font-bold text-gray-800" text-anchor="middle" x="18" y="20.5">67</text>
</svg>
</div>
<div className="text-center mt-2">
<span className="text-sm font-medium text-yellow-700">Average</span>
</div>
</div>
<div className="flex-1">
<p className="text-sm text-gray-600 mb-4">
                                            Your website's best practices score is 67/100, which is average. We've found several opportunities to improve your site's security, code quality, and modern web standards compliance. Addressing these issues will enhance user experience and make your site more reliable.
                                        </p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Critical</p>
<p className="text-xl font-semibold text-red-600">2</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">High</p>
<p className="text-xl font-semibold text-orange-600">4</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Medium</p>
<p className="text-xl font-semibold text-yellow-600">7</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Low</p>
<p className="text-xl font-semibold text-blue-600">5</p>
</div>
<div className="bg-brand-light rounded-lg p-3 text-center">
<p className="text-xs text-gray-500 mb-1">Passing</p>
<p className="text-xl font-semibold text-green-600">16</p>
</div>
</div>
<div className="flex flex-wrap -mx-2">
<div className="px-2 w-1/2 md:w-1/3 mb-4">
<div className="bg-brand-light rounded-lg p-3">
<p className="text-xs text-gray-500 mb-1">Security</p>
<p className="text-lg font-semibold text-gray-800">Medium</p>
<div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>
<div className="px-2 w-1/2 md:w-1/3 mb-4">
<div className="bg-brand-light rounded-lg p-3">
<p className="text-xs text-gray-500 mb-1">Code Quality</p>
<p className="text-lg font-semibold text-gray-800">Good</p>
<div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
<div className="px-2 w-1/2 md:w-1/3 mb-4">
<div className="bg-brand-light rounded-lg p-3">
<p className="text-xs text-gray-500 mb-1">Modern Standards</p>
<p className="text-lg font-semibold text-gray-800">Poor</p>
<div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
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
<h3 className="text-lg font-medium text-gray-900">Security Issues</h3>
<span className="px-3 py-1 text-sm font-medium text-white bg-orange-500 rounded-full">6 Issues</span>
</div>
<div className="px-6 py-5">
<div className="space-y-4">

<div className="border border-red-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 mr-3">
<i className="fa-solid fa-xmark text-xs"></i>
</span>
<h4 className="font-medium text-red-800">Insecure SSL/TLS Configuration</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                Critical
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                Your site is using outdated TLS 1.0/1.1 protocols, which have known vulnerabilities and are no longer considered secure.
                                            </p>
<div className="bg-gray-50 rounded px-3 py-2 text-xs font-mono text-gray-800 mb-3 overflow-x-auto">
<span className="text-red-500">- TLS 1.0 enabled</span><br/>
<span className="text-red-500">- TLS 1.1 enabled</span><br/>
<span className="text-green-500">+ TLS 1.2 enabled</span><br/>
<span className="text-red-500">- TLS 1.3 not enabled</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: </span>
<span className="text-xs font-medium text-red-600">High</span>
</div>
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                                    View Details
                                                </button>
</div>
</div>
</div>

<div className="border border-orange-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-orange-50 border-b border-orange-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-3">
<i className="fa-solid fa-triangle-exclamation text-xs"></i>
</span>
<h4 className="font-medium text-orange-800">Missing Content Security Policy</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                High
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                Your site is missing a Content Security Policy (CSP) header, which helps prevent XSS attacks and data injection.
                                            </p>
<div className="bg-gray-50 rounded px-3 py-2 text-xs font-mono text-gray-800 mb-3 overflow-x-auto">
                                                Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' https://trusted-cdn.com; img-src 'self' data: https://*; connect-src 'self' https://api.example.com;
                                            </div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: </span>
<span className="text-xs font-medium text-orange-600">Medium</span>
</div>
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                                    View Details
                                                </button>
</div>
</div>
</div>

<div className="border border-orange-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-orange-50 border-b border-orange-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-3">
<i className="fa-solid fa-triangle-exclamation text-xs"></i>
</span>
<h4 className="font-medium text-orange-800">Vulnerable JavaScript Libraries</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                High
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                Your site is using outdated JavaScript libraries with known security vulnerabilities.
                                            </p>
<div className="space-y-2 mb-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center">
<span className="font-medium">jQuery</span>
<span className="ml-2 text-red-600">v1.11.3</span>
</div>
<span className="text-green-600">Latest: v3.6.4</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
</div>
<p className="text-xs text-gray-500">
                                                    CVE-2020-11023: Potential XSS vulnerability in .val() method
                                                </p>
</div>
<div className="space-y-2 mb-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center">
<span className="font-medium">Bootstrap</span>
<span className="ml-2 text-orange-600">v4.3.1</span>
</div>
<span className="text-green-600">Latest: v5.3.0</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-orange-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
<p className="text-xs text-gray-500">
                                                    Minor security issues in older versions
                                                </p>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: </span>
<span className="text-xs font-medium text-orange-600">Medium</span>
</div>
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                                    View All Libraries
                                                </button>
</div>
</div>
</div>
<div className="text-center">
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                            Show All Security Issues (3 more)
                                        </button>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg overflow-hidden mb-6">
<div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">Code Quality Issues</h3>
<span className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded-full">7 Issues</span>
</div>
<div className="px-6 py-5">
<div className="space-y-4">

<div className="border border-yellow-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-yellow-50 border-b border-yellow-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-3">
<i className="fa-solid fa-circle-exclamation text-xs"></i>
</span>
<h4 className="font-medium text-yellow-800">Unminified JavaScript and CSS</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Medium
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                Several JavaScript and CSS files are not minified, increasing page load time.
                                            </p>
<div className="space-y-2 mb-3">
<div className="flex items-center justify-between text-xs">
<span className="font-medium text-gray-700">/js/main.js</span>
<div>
<span className="text-red-600">320KB</span>
<span className="text-gray-500 mx-1">→</span>
<span className="text-green-600">94KB</span>
<span className="text-gray-500 ml-1">(71% reduction)</span>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="font-medium text-gray-700">/css/styles.css</span>
<div>
<span className="text-red-600">146KB</span>
<span className="text-gray-500 mx-1">→</span>
<span className="text-green-600">67KB</span>
<span className="text-gray-500 ml-1">(54% reduction)</span>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="font-medium text-gray-700">/js/plugins.js</span>
<div>
<span className="text-red-600">87KB</span>
<span className="text-gray-500 mx-1">→</span>
<span className="text-green-600">32KB</span>
<span className="text-gray-500 ml-1">(63% reduction)</span>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-xs font-medium text-gray-500">Impact: </span>
<span className="text-xs font-medium text-yellow-600">Medium</span>
</div>
<button className="text-sm font-medium text-brand-primary hover:text-brand-dark">
                                                    View All Files
                                                </button>
</div>
</div>
</div>

<div className="border border-yellow-200 rounded-lg overflow-hidden">
<div className="px-4 py-3 bg-yellow-50 border-b border-yellow-200 flex items-center justify-between">
<div className="flex items-center">
<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-3">
<i className="fa-solid fa-circle-exclamation text-xs"></i>
</span>
<h4 className="font-medium text-yellow-800">Render-Blocking Resources</h4>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Medium
                                            </span>
</div>
<div className="px-4 py-3">
<p className="text-sm text-gray-600 mb-2">
                                                Your site has resources that block the first paint of your page, delaying user interaction.
                                            </p></div></div></div></div></div></div></div></main></div></div>
    </>
  );
}
