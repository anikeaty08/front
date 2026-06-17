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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}

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
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="bg-gray-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-medium tracking-tight text-sm">
                    FM
                </div>
<span className="font-semibold text-gray-900 tracking-tight text-sm">FileMaster</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="lucide:folder" strokeWidth="1.5" width="18"></iconify-icon>
                All Files
            </a>
<div className="px-3 py-2">
<div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Admin Controls</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg transition-colors mb-1" href="#">
<iconify-icon className="text-gray-900" height="18" icon="lucide:bar-chart-3" strokeWidth="1.5" width="18"></iconify-icon>
                    Reports &amp; Audit
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                    Staff Management
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="lucide:settings-2" strokeWidth="1.5" width="18"></iconify-icon>
                    Settings
                </a>
</div>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200"></div>
<div>
<p className="text-sm font-medium text-gray-900">Admin User</p>
<p className="text-xs text-gray-500">Super Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="glass-header h-16 border-b border-gray-200 flex items-center justify-between px-6 z-10">
<div>
<h1 className="text-lg font-semibold text-gray-900 tracking-tight">Reports &amp; Audit</h1>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
<iconify-icon height="14" icon="lucide:calendar" strokeWidth="1.5" width="14"></iconify-icon>
                    Last 30 Days
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 border border-gray-900 rounded-md hover:bg-gray-800 transition-all shadow-sm">
<iconify-icon height="14" icon="lucide:download" strokeWidth="1.5" width="14"></iconify-icon>
                    Export CSV
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-start justify-between">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Daily Movement</p>
<h3 className="mt-2 text-2xl font-semibold text-gray-900 tracking-tight">142</h3>
<div className="mt-1 flex items-center text-xs">
<span className="text-emerald-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon> 12%
                                    </span>
<span className="text-gray-400 ml-1.5">vs yesterday</span>
</div>
</div>
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-gray-900" icon="lucide:arrow-left-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-start justify-between">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Monthly Issuance</p>
<h3 className="mt-2 text-2xl font-semibold text-gray-900 tracking-tight">1,204</h3>
<div className="mt-1 flex items-center text-xs">
<span className="text-emerald-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon> 4%
                                    </span>
<span className="text-gray-400 ml-1.5">vs last month</span>
</div>
</div>
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-gray-900" icon="lucide:file-output" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-red-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
<div className="flex items-start justify-between relative z-10">
<div>
<p className="text-xs font-medium text-red-600 uppercase tracking-wide">Overdue &amp; Unreturned</p>
<h3 className="mt-2 text-2xl font-semibold text-gray-900 tracking-tight">8</h3>
<div className="mt-1 flex items-center text-xs">
<span className="text-red-600 font-medium">Action Required</span>
</div>
</div>
<div className="p-2 bg-white rounded-lg border border-red-100 shadow-sm">
<iconify-icon className="text-red-600" icon="lucide:alert-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-start justify-between mb-2">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Physical Storage</p>
<h3 className="mt-2 text-2xl font-semibold text-gray-900 tracking-tight">84%</h3>
</div>
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-gray-900" icon="lucide:archive" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-gray-900 h-1.5 rounded-full" style={{width: '84%'}}></div>
</div>
<div className="mt-2 flex justify-between text-xs text-gray-500">
<span>4,200 Files</span>
<span>Cap: 5,000</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-gray-900">Movement Trend (Issuance/Return)</h3>
<div className="flex gap-2">
<span className="flex items-center gap-1.5 text-xs text-gray-500"><span className="w-2 h-2 rounded-full bg-gray-900"></span>Issued</span>
<span className="flex items-center gap-1.5 text-xs text-gray-500"><span className="w-2 h-2 rounded-full bg-gray-300"></span>Returned</span>
</div>
</div>

<div className="relative h-48 w-full">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-t border-dashed border-gray-100 w-full h-0"></div>
<div className="border-t border-dashed border-gray-100 w-full h-0"></div>
<div className="border-t border-dashed border-gray-100 w-full h-0"></div>
<div className="border-t border-dashed border-gray-100 w-full h-0"></div>
<div className="border-t border-gray-100 w-full h-0"></div>
</div>

<div className="absolute inset-0 flex items-end justify-between px-2 gap-2">

<div className="w-full flex gap-1 items-end h-full justify-center group">
<div className="w-2 bg-gray-300 rounded-t-sm h-[30%] group-hover:bg-gray-400 transition-colors"></div>
<div className="w-2 bg-gray-900 rounded-t-sm h-[45%] group-hover:bg-gray-700 transition-colors relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">45 Files</div>
</div>
</div>

<div className="w-full flex gap-1 items-end h-full justify-center group">
<div className="w-2 bg-gray-300 rounded-t-sm h-[40%]"></div>
<div className="w-2 bg-gray-900 rounded-t-sm h-[60%]"></div>
</div>

<div className="w-full flex gap-1 items-end h-full justify-center group">
<div className="w-2 bg-gray-300 rounded-t-sm h-[25%]"></div>
<div className="w-2 bg-gray-900 rounded-t-sm h-[35%]"></div>
</div>

<div className="w-full flex gap-1 items-end h-full justify-center group">
<div className="w-2 bg-gray-300 rounded-t-sm h-[55%]"></div>
<div className="w-2 bg-gray-900 rounded-t-sm h-[75%]"></div>
</div>

<div className="w-full flex gap-1 items-end h-full justify-center group">
<div className="w-2 bg-gray-300 rounded-t-sm h-[45%]"></div>
<div className="w-2 bg-gray-900 rounded-t-sm h-[50%]"></div>
</div>

<div className="w-full flex gap-1 items-end h-full justify-center group">
<div className="w-2 bg-gray-300 rounded-t-sm h-[20%]"></div>
<div className="w-2 bg-gray-900 rounded-t-sm h-[30%]"></div>
</div>

<div className="w-full flex gap-1 items-end h-full justify-center group">
<div className="w-2 bg-gray-300 rounded-t-sm h-[60%]"></div>
<div className="w-2 bg-gray-900 rounded-t-sm h-[85%]"></div>
</div>
</div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<h3 className="text-sm font-semibold text-gray-900 mb-6">Department-wise Usage</h3>
<div className="space-y-5">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-gray-700">Finance &amp; Accounts</span>
<span className="text-gray-500">45%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-gray-900 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-gray-700">Human Resources</span>
<span className="text-gray-500">28%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-gray-900 h-1.5 rounded-full opacity-60" style={{width: '28%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-gray-700">Legal Department</span>
<span className="text-gray-500">15%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-gray-900 h-1.5 rounded-full opacity-40" style={{width: '15%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-gray-700">Administration</span>
<span className="text-gray-500">12%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-gray-900 h-1.5 rounded-full opacity-20" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Audit Logs</h3>
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">Accountability Trail</span>
</div>
<div className="flex gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1.5 text-gray-400" icon="lucide:search" width="14"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 w-48 transition-colors text-gray-600" placeholder="Search logs..." type="text"/>
</div>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50">Filter</button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/50">
<th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider w-12 text-center">
<input className="rounded border-gray-300 text-gray-900 focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5" type="checkbox"/>
</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">File Details</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Issued By (Staff)</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Requested By (User)</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-3 px-6 text-center">
<input className="rounded border-gray-300 text-gray-900 focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Tax Returns 2023</span>
<span className="text-xs text-gray-400 font-mono">FIN-2023-004</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100/50">
<iconify-icon icon="lucide:check-circle-2" width="12"></iconify-icon> Returned
                                            </span>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">AK</div>
<span className="text-sm text-gray-700">Ahmed Khan</span>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">SJ</div>
<span className="text-sm text-gray-700">Sara J. (Legal)</span>
</div>
</td>
<td className="py-3 px-4">
<span className="text-xs text-gray-500">Today, 10:42 AM</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-xs text-gray-400">Completed</span>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-3 px-6 text-center">
<input className="rounded border-gray-300 text-gray-900 focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Project Alpha Blueprints</span>
<span className="text-xs text-gray-400 font-mono">ENG-2024-892</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100/50">
<iconify-icon icon="lucide:arrow-right-circle" width="12"></iconify-icon> Issued
                                            </span>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">BR</div>
<span className="text-sm text-gray-700">Bilal Raza</span>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">MK</div>
<span className="text-sm text-gray-700">M. Kamal (Eng)</span>
</div>
</td>
<td className="py-3 px-4">
<span className="text-xs text-gray-500">Today, 09:15 AM</span>
</td>
<td className="py-3 px-4 text-right">
<span className="text-xs text-blue-600 font-medium">Active</span>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors bg-red-50/10">
<td className="py-3 px-6 text-center">
<input className="rounded border-gray-300 text-gray-900 focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Audit Report Q1</span>
<span className="text-xs text-gray-400 font-mono">AUD-2023-112</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-50 text-red-700 text-xs font-medium border border-red-100/50">
<iconify-icon icon="lucide:alert-triangle" width="12"></iconify-icon> Overdue
                                            </span>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">AK</div>
<span className="text-sm text-gray-700">Ahmed Khan</span>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">ZA</div>
<span className="text-sm text-gray-700">Zainab Ali (HR)</span>
</div>
</td>
<td className="py-3 px-4">
<span className="text-xs text-red-500 font-medium">3 Days Ago</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-xs text-gray-900 underline decoration-gray-300 hover:decoration-gray-900">Remind</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-3 px-6 text-center">
<input className="rounded border-gray-300 text-gray-900 focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Employee Contracts</span>
<span className="text-xs text-gray-400 font-mono">HR-2024-001</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
<iconify-icon icon="lucide:file-search" width="12"></iconify-icon> Requested
                                            </span>
</td>
<td className="py-3 px-4">
<span className="text-xs text-gray-400 italic">Pending Approval</span>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-600">OM</div>
<span className="text-sm text-gray-700">Omar M. (HR)</span>
</div>
</td>
<td className="py-3 px-4">
<span className="text-xs text-gray-500">Yesterday, 4:00 PM</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-800">Approve</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
<span className="text-xs text-gray-500">Showing 4 of 128 logs</span>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600 disabled:opacity-50">
<iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon>
</button>
<button className="p-1 rounded hover:bg-gray-200 text-gray-600">
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-12 mb-6 text-center">
<p className="text-[10px] text-gray-400 uppercase tracking-widest">Confidential System • Reports Generated Automatically</p>
</footer>
</div>
</main>

    </>
  );
}
