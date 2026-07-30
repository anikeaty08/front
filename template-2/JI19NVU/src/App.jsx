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
      

<aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between z-20">
<div>
<div className="flex items-center gap-2 px-6 py-6 border-b">
<div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-xl">AI</div>
<span className="font-bold text-lg text-gray-700">AuditPro</span>
</div>
<nav className="mt-5 flex-1">
<ul className="space-y-1">
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#dashboard">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Dashboard
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#all-audits">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>All Audits
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#new-audit">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>New Audit
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#audit-results">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Audit Results
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#report-generator">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Report Generator
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#white-label">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>White Label
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-r-lg font-medium" href="#tasks">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Tasks
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#team">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Team
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#billing">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Billing
            </a>
</li>
<li>
<a className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#settings">
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Settings
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
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</aside>

<main className="ml-64 min-h-screen">

<section className="p-8" id="tasks">
<div className="mb-8 flex items-center justify-between">
<div>
<h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
<p className="text-gray-500 mt-1">Manage your website improvement tasks and track progress</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium text-sm flex items-center gap-2 hover:bg-gray-50">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            Filter
          </button>
<button className="px-4 py-2 bg-blue-600 rounded-lg text-white font-medium text-sm flex items-center gap-2 hover:bg-blue-700">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            Add Task
          </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">Total Tasks</p>
<p className="text-2xl font-bold text-gray-900 mt-1">48</p>
</div>
<div className="bg-blue-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 text-sm text-gray-500">
<span>Across all websites</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">In Progress</p>
<p className="text-2xl font-bold text-gray-900 mt-1">16</p>
</div>
<div className="bg-yellow-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 text-sm text-gray-500">
<span>33.3% of total tasks</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">Completed</p>
<p className="text-2xl font-bold text-gray-900 mt-1">27</p>
</div>
<div className="bg-green-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 text-sm text-gray-500">
<span>56.25% of total tasks</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm p-6 border">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-500">Priority Tasks</p>
<p className="text-2xl font-bold text-gray-900 mt-1">5</p>
</div>
<div className="bg-red-100 p-2 rounded-lg">
<svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mt-2 text-sm text-gray-500">
<span>Require immediate attention</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border mb-8">

<div className="border-b px-6 flex items-center">
<button className="px-4 py-4 text-sm font-medium text-blue-600 border-b-2 border-blue-600">All Tasks</button>
<button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">My Tasks</button>
<button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">Team Tasks</button>
<button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">Completed</button>
<div className="ml-auto flex items-center gap-2">
<div className="relative">
<input className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search tasks..." type="text" />
<svg className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<select className="py-2 pl-3 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
<option>Sort by</option>
<option>Priority</option>
<option>Due Date</option>
<option>Website</option>
<option>Status</option>
</select>
</div>
</div>

<div className="p-6">
<div className="overflow-x-auto">
<table className="min-w-full">
<thead>
<tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
<th className="px-4 py-3 w-6">
<input className="rounded text-blue-600 focus:ring-blue-500 border-gray-300" type="checkbox" />
</th>
<th className="px-4 py-3">Task</th>
<th className="px-4 py-3">Website</th>
<th className="px-4 py-3">Priority</th>
<th className="px-4 py-3">Category</th>
<th className="px-4 py-3">Due Date</th>
<th className="px-4 py-3">Assigned To</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">

<tr className="hover:bg-gray-50">
<td className="px-4 py-4">
<input className="rounded text-blue-600 focus:ring-blue-500 border-gray-300" type="checkbox" />
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div>
<p className="text-sm font-medium text-gray-900">Optimize page loading speed</p>
<p className="text-xs text-gray-500 mt-1">Compress images and minimize CSS/JS files</p>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xs mr-2">E</div>
<span className="text-sm text-gray-800">example.com</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">High</span>
</td>
<td className="px-4 py-4">
<span className="text-sm text-gray-700">Performance</span>
</td>
<td className="px-4 py-4">
<span className="text-sm text-red-600 font-medium">Jul 30, 2023</span>
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xs">PR</div>
<span className="text-sm text-gray-700 ml-2">Prince R.</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
</td>
<td className="px-4 py-4 text-right">
<button className="text-gray-400 hover:text-blue-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="px-4 py-4">
<input className="rounded text-blue-600 focus:ring-blue-500 border-gray-300" type="checkbox" />
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div>
<p className="text-sm font-medium text-gray-900">Add missing meta descriptions</p>
<p className="text-xs text-gray-500 mt-1">Create unique meta descriptions for 12 product pages</p>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div className="h-6 w-6 rounded bg-purple-100 flex items-center justify-center text-purple-800 font-bold text-xs mr-2">M</div>
<span className="text-sm text-gray-800">myshop.io</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Medium</span>
</td>
<td className="px-4 py-4">
<span className="text-sm text-gray-700">SEO</span>
</td>
<td className="px-4 py-4">
<span className="text-sm text-gray-700">Aug 5, 2023</span>
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center text-white font-bold text-xs">JD</div>
<span className="text-sm text-gray-700 ml-2">John D.</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
</td>
<td className="px-4 py-4 text-right">
<button className="text-gray-400 hover:text-blue-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="px-4 py-4">
<input checked className="rounded text-blue-600 focus:ring-blue-500 border-gray-300" type="checkbox" />
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div>
<p className="text-sm font-medium text-gray-900 line-through">Fix broken links on about page</p>
<p className="text-xs text-gray-500 mt-1 line-through">Update internal links and fix 404 errors</p>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div className="h-6 w-6 rounded bg-green-100 flex items-center justify-center text-green-800 font-bold text-xs mr-2">W</div>
<span className="text-sm text-gray-800">widgetco.com</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Medium</span>
</td>
<td className="px-4 py-4">
<span className="text-sm text-gray-700">Content</span>
</td>
<td className="px-4 py-4">
<span className="text-sm text-gray-700">Jul 25, 2023</span>
</td>
<td className="px-4 py-4">
<div className="flex items-center">
<div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xs">PR</div>
<span className="text-sm text-gray-700 ml-2">Prince R.</span>
</div>
</td>
<td className="px-4 py-4">
</td></tr></tbody></table></div></div></div></section></main>
    </>
  );
}
