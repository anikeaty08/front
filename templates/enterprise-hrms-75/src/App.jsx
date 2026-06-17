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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-col hidden lg:flex flex-shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-slate-200 shrink-0">
<span className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
                EFLOW
            </span>
</div>

<div className="flex-1 overflow-y-auto py-5 px-3 flex flex-col gap-1 custom-scrollbar">
<p className="px-3 text-xs font-semibold text-slate-400 mb-2 mt-2 uppercase tracking-tight">Main Menu</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-slate-100 text-slate-900 font-medium text-sm transition-colors border border-slate-200/60 shadow-sm" href="#">
<iconify-icon className="text-lg opacity-80" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Employees
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Attendance
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group flex-1" href="#">
<div className="flex items-center gap-3 flex-1">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Leave Management
                </div>
<span className="bg-red-50 text-red-600 py-0.5 px-1.5 rounded text-xs font-medium">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Payroll
            </a>
<p className="px-3 text-xs font-semibold text-slate-400 mb-2 mt-6 uppercase tracking-tight">Organization</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Performance
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:user-plus-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Recruitment
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Reports
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:hierarchy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Structure
            </a>
</div>

<div className="p-4 border-t border-slate-200 mt-auto">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm transition-colors group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-slate-50">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10 sticky top-0">

<button className="lg:hidden text-slate-500 hover:text-slate-700 mr-4">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="flex-1 max-w-xl relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all shadow-sm" placeholder="Search employees, records, or actions (Cmd+K)" type="text"/>
</div>

<div className="flex items-center gap-3 sm:gap-5 ml-auto">
<button className="text-slate-400 hover:text-slate-600 relative p-1.5 rounded-full hover:bg-slate-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
</button>
<div className="w-px h-5 bg-slate-200 hidden sm:block"></div>
<button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white flex items-center justify-center text-xs font-semibold shadow-sm ring-1 ring-slate-900/5">
                        AL
                    </div>
<div className="hidden sm:flex flex-col items-start text-left">
<span className="text-sm font-medium text-slate-900 leading-none">Alex Leung</span>
<span className="text-xs text-slate-500 mt-0.5">HR Director</span>
</div>
<iconify-icon className="text-slate-400 text-sm hidden sm:block" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-4 sm:p-8 space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard Overview</h1>
<p className="text-sm text-slate-500 mt-1">Real-time metrics and pending actions for your organization.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<iconify-icon className="text-slate-400 text-lg" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Oct 24, 2023
                        <iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-sm">
<iconify-icon className="text-slate-300 text-lg" icon="solar:printer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">Export</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-x-0 top-0 h-1 bg-blue-600/10"></div>
<div className="flex items-start justify-between">
<span className="text-sm font-medium text-slate-500">Total Headcount</span>
<div className="p-2 bg-blue-50/50 rounded-md text-blue-600 ring-1 ring-blue-100">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">1,482</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 ring-1 ring-emerald-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12
                        </span>
</div>
<div className="mt-2 text-xs text-slate-400">Active employees across all depts</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-1 bg-emerald-600/10"></div>
<div className="flex items-start justify-between">
<span className="text-sm font-medium text-slate-500">Present Today</span>
<div className="p-2 bg-emerald-50/50 rounded-md text-emerald-600 ring-1 ring-emerald-100">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">1,390</span>
<span className="text-xs font-medium text-slate-500">/ 1,482</span>
</div>
<div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 93.8% Attendance Rate
                    </div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-1 bg-amber-600/10"></div>
<div className="flex items-start justify-between">
<span className="text-sm font-medium text-slate-500">Pending Leaves</span>
<div className="p-2 bg-amber-50/50 rounded-md text-amber-600 ring-1 ring-amber-100">
<iconify-icon className="text-lg" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">24</span>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 ring-1 ring-amber-100">
                            Requires Action
                        </span>
</div>
<div className="mt-2 text-xs text-slate-400">18 Sick, 6 Casual</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-1 bg-purple-600/10"></div>
<div className="flex items-start justify-between">
<span className="text-sm font-medium text-slate-500">Payroll Processing</span>
<div className="p-2 bg-purple-50/50 rounded-md text-purple-600 ring-1 ring-purple-100">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">68%</span>
</div>

<div className="mt-2 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-purple-500 h-1.5 rounded-full" style={{width: '68%'}}></div>
</div>
<div className="mt-2 text-xs text-slate-400 flex justify-between">
<span>Due in 4 days</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-900">Attendance Trends</h2>
<p className="text-xs text-slate-500 mt-0.5">Last 7 days presence vs absence</p>
</div>
<div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg border border-slate-200">
<button className="px-2.5 py-1 text-xs font-medium text-slate-900 bg-white shadow-sm border border-slate-200 rounded-md">Weekly</button>
<button className="px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 rounded-md transition-colors">Monthly</button>
</div>
</div>

<div className="flex-1 w-full min-h-[220px] relative flex flex-col">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-t border-slate-100 w-full h-0"></div>
<div className="border-t border-slate-100 w-full h-0"></div>
<div className="border-t border-slate-100 w-full h-0"></div>
<div className="border-t border-slate-100 w-full h-0"></div>
<div className="border-t border-slate-200 w-full h-0"></div>
</div>

<div className="flex-1 flex items-end justify-between px-2 pt-6 pb-0 z-10 gap-2 sm:gap-4">

<div className="w-full flex justify-center group relative cursor-pointer">

<div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-20 shadow-md whitespace-nowrap">
                                    Present: 92%
                                </div>
<div className="w-full max-w-[40px] bg-blue-100 rounded-t-md relative h-full flex items-end">
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-500 hover:bg-blue-600" style={{height: '92%'}}></div>
</div>
</div>

<div className="w-full flex justify-center group relative cursor-pointer">
<div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-20 shadow-md whitespace-nowrap">
                                    Present: 95%
                                </div>
<div className="w-full max-w-[40px] bg-blue-100 rounded-t-md relative h-full flex items-end">
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-500 hover:bg-blue-600" style={{height: '95%'}}></div>
</div>
</div>

<div className="w-full flex justify-center group relative cursor-pointer">
<div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-20 shadow-md whitespace-nowrap">
                                    Present: 88%
                                </div>
<div className="w-full max-w-[40px] bg-blue-100 rounded-t-md relative h-full flex items-end">
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-500 hover:bg-blue-600" style={{height: '88%'}}></div>
</div>
</div>

<div className="w-full flex justify-center group relative cursor-pointer">
<div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-20 shadow-md whitespace-nowrap">
                                    Present: 96%
                                </div>
<div className="w-full max-w-[40px] bg-blue-100 rounded-t-md relative h-full flex items-end">
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-500 hover:bg-blue-600" style={{height: '96%'}}></div>
</div>
</div>

<div className="w-full flex justify-center group relative cursor-pointer">
<div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-20 shadow-md whitespace-nowrap">
                                    Present: 94%
                                </div>
<div className="w-full max-w-[40px] bg-blue-100 rounded-t-md relative h-full flex items-end">
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-500 hover:bg-blue-600" style={{height: '94%'}}></div>
</div>
</div>

<div className="w-full flex justify-center group relative cursor-pointer">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-md relative h-full flex items-end">
<div className="w-full bg-slate-300 rounded-t-md transition-all duration-500" style={{height: '15%'}}></div>
</div>
</div>

<div className="w-full flex justify-center group relative cursor-pointer">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-md relative h-full flex items-end">
<div className="w-full bg-slate-300 rounded-t-md transition-all duration-500" style={{height: '12%'}}></div>
</div>
</div>
</div>

<div className="flex justify-between mt-3 text-xs font-medium text-slate-400 px-2 sm:px-4">
<span className="w-full text-center">Mon</span>
<span className="w-full text-center">Tue</span>
<span className="w-full text-center">Wed</span>
<span className="w-full text-center">Thu</span>
<span className="w-full text-center">Fri</span>
<span className="w-full text-center text-slate-300">Sat</span>
<span className="w-full text-center text-slate-300">Sun</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
<h2 className="text-base font-semibold tracking-tight text-slate-900 mb-5">Quick Workflows</h2>
<div className="flex-1 space-y-3">

<button className="w-full flex items-center gap-4 p-3 rounded-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all group text-left">
<div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-blue-100 shadow-sm transition-all shrink-0">
<iconify-icon className="text-xl" icon="solar:user-plus-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 truncate">Onboard Employee</p>
<p className="text-xs text-slate-500 truncate mt-0.5">Start new hiring workflow</p>
</div>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<button className="w-full flex items-center gap-4 p-3 rounded-lg border border-slate-200 hover:border-amber-200 hover:bg-amber-50/50 transition-all group text-left relative">

<span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm ring-2 ring-white z-10">24</span>
<div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:text-amber-600 group-hover:border-amber-100 shadow-sm transition-all shrink-0">
<iconify-icon className="text-xl" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 truncate">Review Leave Requests</p>
<p className="text-xs text-slate-500 truncate mt-0.5">Approve or reject applications</p>
</div>
<iconify-icon className="text-slate-300 group-hover:text-amber-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<button className="w-full flex items-center gap-4 p-3 rounded-lg border border-slate-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all group text-left">
<div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:text-purple-600 group-hover:border-purple-100 shadow-sm transition-all shrink-0">
<iconify-icon className="text-xl" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 truncate">Run Payroll Run</p>
<p className="text-xs text-slate-500 truncate mt-0.5">Process current cycle</p>
</div>
<iconify-icon className="text-slate-300 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">All Features &amp; Modules</h2>
<p className="text-sm text-slate-500 mt-0.5">Access and manage all areas of your HRMS platform.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">Employee Directory</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Manage profiles, lifecycle events, and individual employee records.</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-emerald-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Time &amp; Attendance</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Track working hours, timesheets, shifts, and daily presence logs.</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-amber-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">Leave Management</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Process time-off requests, balances, accruals, and company holidays.</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-purple-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">Payroll &amp; Comp</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Generate payslips, manage taxes, bonuses, and salary structures.</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-indigo-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">Performance</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Conduct appraisals, track OKRs, and monitor 360-degree feedback.</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-rose-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-rose-50 group-hover:text-rose-600 group-hover:border-rose-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-plus-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-rose-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-rose-700 transition-colors">Recruitment ATS</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Publish job listings, track candidates, and manage interview stages.</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-cyan-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">Custom Reports</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Build visual dashboards and export compliance analytics data.</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:hierarchy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-orange-700 transition-colors">Org Structure</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Visualize organizational charts, departments, and reporting lines.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">

<div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-900">Recent Employee Activity</h2>
<p className="text-xs text-slate-500 mt-0.5">Latest updates from the organization</p>
</div>

<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all w-40 sm:w-auto" placeholder="Filter..." type="text"/>
</div>
<button className="p-1.5 border border-slate-200 rounded-md text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
<iconify-icon className="text-lg block" icon="solar:filter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap border-collapse">
<thead className="bg-slate-50/80 text-slate-500 font-medium text-xs uppercase tracking-wider">
<tr>
<th className="px-5 py-3 border-b border-slate-200 w-10 text-center">

<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
<iconify-icon className="absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</label>
</th>
<th className="px-5 py-3 border-b border-slate-200">Employee</th>
<th className="px-5 py-3 border-b border-slate-200">Department</th>
<th className="px-5 py-3 border-b border-slate-200">Activity Type</th>
<th className="px-5 py-3 border-b border-slate-200">Date &amp; Time</th>
<th className="px-5 py-3 border-b border-slate-200">Status</th>
<th className="px-5 py-3 border-b border-slate-200 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700">

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-5 py-3 text-center">
<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
<iconify-icon className="absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</label>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-semibold shrink-0">SM</div>
<div>
<p className="font-semibold text-slate-900">Sarah Miller</p>
<p className="text-xs text-slate-500 font-mono">EMP-1042</p>
</div>
</div>
</td>
<td className="px-5 py-3 text-slate-600">Engineering</td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:document-add-linear"></iconify-icon>
                                        Document Upload
                                    </div>
</td>
<td className="px-5 py-3 text-slate-500 text-xs">Today, 09:41 AM</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/50">
                                        Pending Review
                                    </span>
</td>
<td className="px-5 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
<iconify-icon className="text-lg block" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-5 py-3 text-center">
<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
<iconify-icon className="absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</label>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-semibold shrink-0">DJ</div>
<div>
<p className="font-semibold text-slate-900">David Johnson</p>
<p className="text-xs text-slate-500 font-mono">EMP-0891</p>
</div>
</div>
</td>
<td className="px-5 py-3 text-slate-600">Marketing</td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:calendar-mark-linear"></iconify-icon>
                                        Leave Application
                                    </div>
</td>
<td className="px-5 py-3 text-slate-500 text-xs">Yesterday, 04:20 PM</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                                        Approved
                                    </span>
</td>
<td className="px-5 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
<iconify-icon className="text-lg block" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-5 py-3 text-center">
<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
<iconify-icon className="absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</label>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold shrink-0">EK</div>
<div>
<p className="font-semibold text-slate-900">Emily Chen</p>
<p className="text-xs text-slate-500 font-mono">EMP-1102</p>
</div>
</div>
</td>
<td className="px-5 py-3 text-slate-600">Finance</td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:user-circle-linear"></iconify-icon>
                                        Profile Update
                                    </div>
</td>
<td className="px-5 py-3 text-slate-500 text-xs">Oct 22, 11:05 AM</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                        Completed
                                    </span>
</td>
<td className="px-5 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
<iconify-icon className="text-lg block" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
<span className="text-xs text-slate-500 font-medium">Showing 1 to 3 of 45 entries</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors disabled:opacity-50" disabled="">
<iconify-icon className="text-lg block" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded bg-blue-600 text-white text-xs font-semibold shadow-sm">1</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors">2</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors">3</button>
<span className="text-slate-400 text-xs px-1">...</span>
<button className="p-1 rounded text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors">
<iconify-icon className="text-lg block" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>
<style>
        /* Custom minimal scrollbar for sidebar */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background: #cbd5e1;
        }
    </style>

    </>
  );
}
