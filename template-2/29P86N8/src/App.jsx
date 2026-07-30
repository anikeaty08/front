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
<a className="nav-link flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-r-lg font-medium" href="#" onClick={(e) => { showPage('dashboard') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Dashboard
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('all-audits') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>All Audits
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('new-audit') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>New Audit
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('audit-results') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Audit Results
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('report-generator') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Report Generator
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('white-label') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>White Label
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('tasks') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Tasks
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('team') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Team
            </a>
</li>
<li>
<a className="nav-link flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100" href="#" onClick={(e) => { showPage('billing') }}>
<svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Billing
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

<div className="page px-8 py-8" id="dashboard-page">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
<p className="text-gray-500 mt-1">Welcome back! Here's your audit overview.</p>
</div>
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition" onClick={(e) => { showPage('new-audit') }}>
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
<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
</div>
<div className="mt-2">
<span className="text-green-600 text-sm flex items-center">
<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path></svg>
              12% from last month
            </span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500 text-sm font-medium">This Month</p>
<p className="text-3xl font-bold text-gray-900 mt-1">42</p>
</div>
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
</div>
</div>
<div className="mt-2">
<span className="text-green-600 text-sm flex items-center">
<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path></svg>
              8% from last month
            </span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500 text-sm font-medium">Avg Score</p>
<p className="text-3xl font-bold text-gray-900 mt-1">78</p>
</div>
<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
</div>
<div className="mt-2">
<span className="text-green-600 text-sm flex items-center">
<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path></svg>
              3 points improvement
            </span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500 text-sm font-medium">Active Tasks</p>
<p className="text-3xl font-bold text-gray-900 mt-1">14</p>
</div>
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
<svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path clip-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" fillRule="evenodd"></path></svg>
</div>
</div>
<div className="mt-2">
<span className="text-yellow-600 text-sm flex items-center">
<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M10 3a1 1 0 01.707.293l1 1a1 1 0 01-1.414 1.414L10 5.414 8.707 6.707a1 1 0 01-1.414-1.414l1-1A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" fillRule="evenodd"></path></svg>
              2 tasks due today
            </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<h2 className="text-lg font-bold text-gray-900 mb-4">Audit Activity</h2>
<canvas height="220" id="activityChart"></canvas>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border">
<h2 className="text-lg font-bold text-gray-900 mb-4">Score Distribution</h2>
<canvas height="220" id="scoreChart"></canvas>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border mb-8">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center justify-between">
<h2 className="text-xl font-bold text-gray-900">Recent Audits</h2>
<button className="text-blue-600 hover:text-blue-700 font-medium" onClick={(e) => { showPage('all-audits') }}>View All</button>
</div>
</div>
<div className="p-6">
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fillRule="evenodd"></path></svg>
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
<button className="text-blue-600 hover:text-blue-700 font-medium" onClick={(e) => { showPage('audit-results') }}>View</button>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fillRule="evenodd"></path></svg>
</div>
<div>
<h3 className="font-semibold text-gray-900">mysite.org</h3>
<p className="text-sm text-gray-500">Completed 1 day ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">74 Score</span>
</div>
<button className="text-blue-600 hover:text-blue-700 font-medium" onClick={(e) => { showPage('audit-results') }}>View</button>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fillRule="evenodd"></path></svg>
</div>
<div>
<h3 className="font-semibold text-gray-900">storefront.net</h3>
<p className="text-sm text-gray-500">Completed 3 days ago</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">89 Score</span>
</div>
<button className="text-blue-600 hover:text-blue-700 font-medium" onClick={(e) => { showPage('audit-results') }}>View</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center justify-between">
<h2 className="text-xl font-bold text-gray-900">Recent Tasks</h2>
<button className="text-blue-600 hover:text-blue-700 font-medium" onClick={(e) => { showPage('tasks') }}>View All</button>
</div>
</div>
<div className="p-6">
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<input className="w-5 h-5 rounded text-blue-600" type="checkbox" />
<span className="text-gray-800">Fix meta descriptions on example.com</span>
</div>
<span className="text-sm text-red-600 font-medium">Due today</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<input className="w-5 h-5 rounded text-blue-600" type="checkbox" />
<span className="text-gray-800">Optimize images on mysite.org</span>
</div>
<span className="text-sm text-gray-500 font-medium">Due in 2 days</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<input className="w-5 h-5 rounded text-blue-600" type="checkbox" />
<span className="text-gray-800">Improve mobile responsiveness</span>
</div>
<span className="text-sm text-gray-500 font-medium">Due in 5 days</span>
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
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition" onClick={(e) => { showPage('new-audit') }}>New Audit</button>
<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">Export</button>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
<div className="flex flex-wrap items-center gap-4">
<div className="flex-1 min-w-[200px]">
<input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search audits..." type="text" />
</div>
<div>
<select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
<option>All Status</option>
<option>Completed</option>
<option>In Progress</option>
<option>Failed</option>
</select>
</div>
<div>
<select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
<option>Last 30 days</option>
<option>Last 7 days</option>
<option>Last 3 months</option></select></div></div></div></div></main>
    </>
  );
}
