import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
<a className="flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-r-lg font-medium" href="#dashboard">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Dashboard
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#all-audits">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>All Audits
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#new-audit">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>New Audit
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#audit-results">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Audit Results
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#report-generator">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Report Generator
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#white-label">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>White Label
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#tasks">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Tasks
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#team">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Team
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#billing">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Billing
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#settings">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Settings
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

<section className="p-8" id="dashboard">
<div className="mb-8">
<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
<p className="text-gray-500 mt-1">Welcome back, Prince! Here's an overview of your website audits.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">Total Audits</p>
<p className="text-2xl font-bold text-gray-900 mt-1">32</p>
</div>
<div className="bg-blue-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 flex items-center text-sm">
<span className="text-green-500 font-medium flex items-center">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              8% 
            </span>
<span className="text-gray-500 ml-1">from last month</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">Remaining Credits</p>
<p className="text-2xl font-bold text-gray-900 mt-1">17</p>
</div>
<div className="bg-purple-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 flex items-center text-sm">
<span className="text-yellow-500 font-medium">70% of monthly allowance</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">Average Score</p>
<p className="text-2xl font-bold text-gray-900 mt-1">74.3%</p>
</div>
<div className="bg-green-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 flex items-center text-sm">
<span className="text-green-500 font-medium flex items-center">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              3.2% 
            </span>
<span className="text-gray-500 ml-1">from last month</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">Issues Fixed</p>
<p className="text-2xl font-bold text-gray-900 mt-1">124</p>
</div>
<div className="bg-red-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 flex items-center text-sm">
<span className="text-green-500 font-medium flex items-center">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              12% 
            </span>
<span className="text-gray-500 ml-1">from last month</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-center mb-6">
<h2 className="font-bold text-lg text-gray-900">Recent Audits</h2>
<a className="text-sm text-blue-600 hover:text-blue-800 font-medium" href="#all-audits">View all</a>
</div>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead>
<tr>
<th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
<th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
<th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
<th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-8 w-8 rounded bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xs">E</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">example.com</p>
</div>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Today, 10:30 AM</td>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<span className="text-sm font-medium text-gray-900">83%</span>
<span className="ml-2 inline-block w-16 bg-gray-200 rounded-full h-2">
<span className="bg-green-500 h-2 rounded-full block" style={{width: '83%'}}></span>
</span>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
</td>
<td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-blue-600 hover:text-blue-900" href="#audit-results">View</a>
</td>
</tr>
<tr>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-8 w-8 rounded bg-purple-100 flex items-center justify-center text-purple-800 font-bold text-xs">M</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">myshop.io</p>
</div>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Yesterday, 3:42 PM</td>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<span className="text-sm font-medium text-gray-900">67%</span>
<span className="ml-2 inline-block w-16 bg-gray-200 rounded-full h-2">
<span className="bg-yellow-500 h-2 rounded-full block" style={{width: '67%'}}></span>
</span>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
</td>
<td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-blue-600 hover:text-blue-900" href="#audit-results">View</a>
</td>
</tr>
<tr>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-8 w-8 rounded bg-green-100 flex items-center justify-center text-green-800 font-bold text-xs">W</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">widgetco.com</p>
</div>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Jul 25, 2023</td>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<span className="text-sm font-medium text-gray-900">92%</span>
<span className="ml-2 inline-block w-16 bg-gray-200 rounded-full h-2">
<span className="bg-green-500 h-2 rounded-full block" style={{width: '92%'}}></span>
</span>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
</td>
<td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-blue-600 hover:text-blue-900" href="#audit-results">View</a>
</td>
</tr>
<tr>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-8 w-8 rounded bg-pink-100 flex items-center justify-center text-pink-800 font-bold text-xs">T</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">techblog.net</p>
</div>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">Jul 23, 2023</td>
<td className="px-3 py-4 whitespace-nowrap">
<div className="flex items-center">
<span className="text-sm font-medium text-gray-900">54%</span>
<span className="ml-2 inline-block w-16 bg-gray-200 rounded-full h-2">
<span className="bg-red-500 h-2 rounded-full block" style={{width: '54%'}}></span>
</span>
</div>
</td>
<td className="px-3 py-4 whitespace-nowrap">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
</td>
<td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-blue-600 hover:text-blue-900" href="#audit-results">View</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-center mb-6">
<h2 className="font-bold text-lg text-gray-900">Recent Activity</h2>
<button className="text-sm text-gray-500 hover:text-gray-700">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flow-root">
<ul className="-mb-8">
<li>
<div className="relative pb-8">
<span aria-hidden="true" className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></span>
<div className="relative flex items-start space-x-3">
<div className="relative">
<div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="min-w-0 flex-1">
<div>
<p className="text-sm text-gray-800 font-medium">New audit completed</p>
<p className="mt-0.5 text-sm text-gray-500">example.com</p>
</div>
<div className="mt-2 text-sm text-gray-700">
<p>Score: 83%</p>
</div>
<div className="mt-2 text-xs text-gray-500">
<span>Today, 10:30 AM</span>
</div></div></div></div></li></ul></div></div></div></section></main>
    </>
  );
}
