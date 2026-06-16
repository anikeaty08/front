import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between z-20">
<div>
<div className="flex items-center gap-2 px-6 py-6 border-b">
<div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-xl">AI</div>
<span className="font-bold text-lg text-gray-700">AuditPro</span>
</div>
<nav className="mt-5 flex-1">
<ul className="space-y-1">
<li>
<a className="nav-link flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-r-lg font-medium" href="#" onclick="showPage('dashboard')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Dashboard
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('all-audits')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>All Audits
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('new-audit')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>New Audit
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('audit-results')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Audit Results
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('report-generator')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Report Generator
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('white-label')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>White Label
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('tasks')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Tasks
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('team')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Team
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onclick="showPage('billing')">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Billing
            </a>
</li>
</ul>
</nav>
</div>
<div className="px-6 py-4 border-t">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">PR</div>
<div>
<p className="font-semibold text-gray-800 text-sm">Prince Reuben</p>
<p className="text-xs text-gray-500">Pro Plan</p>
</div>
<button className="ml-auto text-gray-400 hover:text-blue-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</aside>
<main className="ml-64 min-h-screen">

<div className="page px-8 py-8" id="dashboard-page">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
<p className="text-gray-500 mt-1">Welcome back! Here's your audit overview.</p>
</div>
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition" onclick="showPage('new-audit')">
          Start New Audit
        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500 text-sm font-medium">Total Audits</p>
<p className="text-3xl font-bold text-gray-900 mt-1">247</p>
</div>
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewbox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500 text-sm font-medium">This Month</p>
<p className="text-3xl font-bold text-gray-900 mt-1">42</p>
</div>
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-green-600" fill="currentColor" viewbox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500 text-sm font-medium">Avg Score</p>
<p className="text-3xl font-bold text-gray-900 mt-1">78</p>
</div>
<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500 text-sm font-medium">Active Tasks</p>
<p className="text-3xl font-bold text-gray-900 mt-1">14</p>
</div>
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-purple-600" fill="currentColor" viewbox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border mb-8">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center justify-between">
<h2 className="text-xl font-bold text-gray-900">Recent Audits</h2>
<button className="text-blue-600 hover:text-blue-700 font-medium" onclick="showPage('all-audits')">View All</button>
</div>
</div>
<div className="p-6">
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewbox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fill-rule="evenodd"></path></svg>
</div>
<div>
<h3 className="font-semibold text-gray-900">example.com</h3>
<p className="text-sm text-gray-500">Completed 2 hours ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">82 Score</span>
</div>
<button className="text-blue-600 hover:text-blue-700 font-medium" onclick="showPage('audit-results')">View</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page px-8 py-8 hidden" id="all-audits-page">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-bold text-gray-900">All Audits</h1>
<p className="text-gray-500 mt-1">View and manage all your website audits.</p>
</div>
<div className="flex gap-3">
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium" onclick="showPage('new-audit')">New Audit</button>
<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">Export</button>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
<div className="flex items-center gap-4">
<input className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search audits..." type="text"/>
<select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
<option>All Status</option>
<option>Completed</option>
<option>In Progress</option>
<option>Failed</option>
</select>
<select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
<option>Last 30 days</option>
<option>Last 7 days</option>
<option>Last 3 months</option>
</select>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border">
<div className="p-6 border-b border-gray-200">
<h2 className="text-xl font-bold text-gray-900">Audit History</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issues</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewbox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-gray-900">example.com</div>
<div className="text-sm text-gray-500">https://example.com</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">82</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7 issues</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<button className="text-blue-600 hover:text-blue-900 mr-4" onclick="showPage('audit-results')">View</button>
<button className="text-gray-600 hover:text-gray-900">Download</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page px-8 py-8 hidden" id="new-audit-page">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-8">
<h1 className="text-3xl font-bold text-gray-900">Start New Audit</h1>
<p className="text-gray-500 mt-2">Enter a website URL to begin comprehensive analysis</p>
</div>
<div className="bg-white rounded-2xl shadow-sm border p-8">
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
<input className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="https://example.com" type="url"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Audit Type</label>
<div className="space-y-3">
<label className="flex items-center">
<input checked="" className="text-blue-600" name="audit-type" type="radio" value="full"/>
<span className="ml-3">Full Audit (SEO, Performance, Accessibility)</span>
</label>
<label className="flex items-center">
<input className="text-blue-600" name="audit-type" type="radio" value="seo"/>
<span className="ml-3">SEO Only</span>
</label>
<label className="flex items-center">
<input className="text-blue-600" name="audit-type" type="radio" value="performance"/>
<span className="ml-3">Performance Only</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Additional Options</label>
<div className="space-y-2">
<label className="flex items-center">
<input className="text-blue-600" type="checkbox"/>
<span className="ml-3 text-sm">Include mobile analysis</span>
</label>
<label className="flex items-center">
<input className="text-blue-600" type="checkbox"/>
<span className="ml-3 text-sm">Deep crawl (up to 50 pages)</span>
</label>
<label className="flex items-center">
<input className="text-blue-600" type="checkbox"/>
<span className="ml-3 text-sm">Competitor comparison</span>
</label>
</div>
</div>
<button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition" onclick="startAudit()" type="button">
              Start Audit
            </button>
</form>
</div>
</div>
</div>

<div className="page px-8 py-8 hidden" id="audit-results-page">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-bold text-gray-900">Audit Results</h1>
<p className="text-gray-500 mt-1">example.com • Completed 2 hours ago</p>
</div>
<div className="flex gap-3">
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700" onclick="showPage('report-generator')">Generate Report</button>
<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">Share</button>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Score</h2>
<p className="text-gray-500">Based on SEO, Performance, and Accessibility</p>
</div>
<div className="flex items-center gap-6">
<div className="relative w-32 h-32">
<svg className="w-32 h-32 transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="2"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" stroke-dasharray="82, 100" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-3xl font-bold text-gray-900">82</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white rounded-2xl shadow-sm border p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-gray-900">SEO</h3>
<span className="text-2xl font-bold text-green-600">85</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-gray-900">Performance</h3>
<span className="text-2xl font-bold text-yellow-600">68</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-yellow-500 h-2 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-gray-900">Accessibility</h3>
<span className="text-2xl font-bold text-green-600">91</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: '91%'}}></div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border p-6">
</div></div></main>
    </>
  );
}
