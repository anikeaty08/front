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
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#dashboard">
<i className="fa-solid fa-gauge-high mr-3"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#all-audits">
<i className="fa-solid fa-list-check mr-3"></i>
<span>All Audits</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#new-audit">
<i className="fa-solid fa-plus mr-3"></i>
<span>New Audit</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#audit-results">
<i className="fa-solid fa-chart-simple mr-3"></i>
<span>Audit Results</span>
</a>
<a className="flex items-center px-4 py-3 text-white bg-brand-primary rounded-md" href="#report-generator">
<i className="fa-solid fa-file-lines mr-3"></i>
<span>Report Generator</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#white-label">
<i className="fa-solid fa-tag mr-3"></i>
<span>White Label Settings</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#tasks">
<i className="fa-solid fa-list-check mr-3"></i>
<span>Tasks</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#team">
<i className="fa-solid fa-users mr-3"></i>
<span>Team</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#billing">
<i className="fa-solid fa-credit-card mr-3"></i>
<span>Billing</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary rounded-md" href="#settings">
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
<div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
<div className="max-w-lg w-full lg:max-w-xs">
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3">
<i className="fa-solid fa-search text-gray-400"></i>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary sm:text-sm" placeholder="Search" type="search"/>
</div>
</div>
</div>
<div className="flex items-center">
<button className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
<i className="fa-solid fa-bell"></i>
</button>
<button className="p-1 ml-3 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
<i className="fa-solid fa-question-circle"></i>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-gray-50">

<div className="py-6 px-4 sm:px-6 lg:px-8" id="report-generator">
<div className="mb-8">
<h1 className="text-2xl font-bold text-gray-900">Report Generator</h1>
<p className="mt-1 text-sm text-gray-500">Create and customize reports from your audit results</p>
</div>
<div className="bg-white shadow rounded-lg overflow-hidden">
<div className="p-6 border-b border-gray-200">
<h2 className="text-lg font-medium text-gray-900">Select Audit to Generate Report</h2>
<div className="mt-4">
<label className="block text-sm font-medium text-gray-700" htmlFor="audit-select">Select Audit</label>
<select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md" id="audit-select">
<option disabled="" selected="" value="">Choose an audit</option>
<option value="1">example.com (Aug 15, 2023)</option>
<option value="2">test-site.org (Aug 11, 2023)</option>
<option value="3">mywebsite.net (Aug 8, 2023)</option>
</select>
</div>
</div>
<div className="p-6 border-b border-gray-200 bg-gray-50">
<h2 className="text-lg font-medium text-gray-900 mb-4">Report Settings</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h3 className="text-md font-medium text-gray-700 mb-2">Report Sections</h3>
<div className="space-y-2">
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="section-overview" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="section-overview">Overview</label>
</div>
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="section-seo" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="section-seo">SEO Analysis</label>
</div>
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="section-performance" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="section-performance">Performance</label>
</div>
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="section-content" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="section-content">Content Analysis</label>
</div>
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="section-accessibility" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="section-accessibility">Accessibility</label>
</div>
<div className="flex items-center">
<input className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="section-security" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="section-security">Security Analysis</label>
</div>
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="section-recommendations" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="section-recommendations">AI Recommendations</label>
</div>
</div>
</div>
<div>
<h3 className="text-md font-medium text-gray-700 mb-2">Report Format</h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="report-format">Format</label>
<select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md" id="report-format">
<option value="pdf">PDF Document</option>
<option value="html">HTML Document</option>
<option value="csv">CSV Data Export</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="report-detail">Detail Level</label>
<select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md" id="report-detail">
<option value="summary">Summary</option>
<option selected="" value="standard">Standard</option>
<option value="detailed">Detailed</option>
<option value="technical">Technical (Advanced)</option>
</select>
</div>
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="include-charts" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="include-charts">Include Charts &amp; Visualizations</label>
</div>
<div className="flex items-center">
<input checked="" className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" id="include-screenshots" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="include-screenshots">Include Screenshots</label>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-b border-gray-200">
<h2 className="text-lg font-medium text-gray-900 mb-4">Branding Options</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-700" htmlFor="report-title">Report Title</label>
<input className="mt-1 focus:ring-brand-primary focus:border-brand-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="report-title" placeholder="Website Audit Report" type="text" value="Website Audit Report"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="report-intro">Introduction Text</label>
<textarea className="mt-1 focus:ring-brand-primary focus:border-brand-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="report-intro" placeholder="This report provides an analysis of your website's performance, SEO, and user experience." rows="3">This report provides a comprehensive analysis of your website's performance, SEO, and user experience, with actionable recommendations for improvement.</textarea>
</div>
</div>
<div>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-700">Company Logo</label>
<div className="mt-1 flex items-center">
<div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
<i className="fa-solid fa-image"></i>
</div>
<button className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary" type="button">
                                                Change
                                            </button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700">Theme Color</label>
<div className="mt-1 flex items-center space-x-3">
<span className="inline-block h-8 w-8 rounded-full border-2 border-white shadow-sm bg-brand-primary cursor-pointer"></span>
<span className="inline-block h-8 w-8 rounded-full border-2 border-white shadow-sm bg-green-500 cursor-pointer"></span>
<span className="inline-block h-8 w-8 rounded-full border-2 border-white shadow-sm bg-indigo-600 cursor-pointer"></span>
<span className="inline-block h-8 w-8 rounded-full border-2 border-white shadow-sm bg-red-500 cursor-pointer"></span>
<span className="inline-block h-8 w-8 rounded-full border-2 border-white shadow-sm bg-purple-600 cursor-pointer"></span>
<span className="inline-block h-8 w-8 rounded-full border-2 border-white shadow-sm bg-gray-800 cursor-pointer"></span>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-b border-gray-200">
<h2 className="text-lg font-medium text-gray-900 mb-4">Delivery Options</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center text-center">
<div className="h-12 w-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-3">
<i className="fa-solid fa-download text-xl"></i>
</div>
<h3 className="text-sm font-medium text-gray-900">Download Report</h3>
<p className="mt-1 text-xs text-gray-500">Save the report to your computer</p>
<button className="mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary" type="button">
                                        Download
                                    </button>
</div>
<div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center text-center">
<div className="h-12 w-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-3">
<i className="fa-solid fa-envelope text-xl"></i>
</div>
<h3 className="text-sm font-medium text-gray-900">Email Report</h3>
<p className="mt-1 text-xs text-gray-500">Send the report to an email address</p>
<button className="mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary" type="button">
                                        Send Email
                                    </button>
</div>
<div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center text-center">
<div className="h-12 w-12 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mb-3">
<i className="fa-solid fa-link text-xl"></i>
</div>
<h3 className="text-sm font-medium text-gray-900">Create Shareable Link</h3>
<p className="mt-1 text-xs text-gray-500">Generate a public URL to share the report</p>
<button className="mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary" type="button">
                                        Generate Link
                                    </button>
</div>
</div>
</div>
<div className="p-6 flex justify-end space-x-3">
<button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary" type="button">
                                Preview Report
                            </button>
<button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary" type="button">
                                Generate Report
                            </button>
</div>
</div>
<div className="mt-8 bg-white shadow rounded-lg p-6">
<h2 className="text-lg font-medium text-gray-900 mb-4">Recently Generated Reports</h2>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Report Name</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Website</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Generated</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Format</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Actions</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            SEO Performance Report
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            example.com
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Aug 15, 2023
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            PDF
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
<button className="text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-download"></i>
</button>
<button className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-envelope"></i>
</button>
<button className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-link"></i>
</button>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Technical Audit Report
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            test-site.org
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Aug 11, 2023
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            HTML
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
<button className="text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-download"></i>
</button>
<button className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-envelope"></i>
</button>
<button className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-link"></i>
</button>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Performance Analysis
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            mywebsite.net
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Aug 8, 2023
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            PDF
                                        </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
<button className="text-brand-primary hover:text-brand-dark">
<i className="fa-solid fa-download"></i>
</button>
<button className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-envelope"></i>
</button>
<button className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-link"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
