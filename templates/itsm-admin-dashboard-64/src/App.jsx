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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-col hidden lg:flex">
<div className="p-6">
<div className="flex items-center gap-2">
<div className="size-8 bg-emerald-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter uppercase">ITSM</span>
</div>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<div className="py-2">
<p className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg group" href="#">
<iconify-icon className="text-lg" icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon>
                    Tickets
                    <span className="ml-auto text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">24</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                    Assets
                </a>
</div>
<div className="py-2 border-t border-slate-100 mt-2">
<p className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Operations</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
                    Team / Agents
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                    Analytics
                </a>
</div>
</nav>
<div className="p-4 border-t border-slate-100 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
                Notifications
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg group transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings
            </a>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-4">
<iconify-icon className="text-lg" icon="solar:logout-linear" strokeWidth="1.5"></iconify-icon>
                Logout
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
<div className="flex items-center gap-4 flex-1 max-w-xl">
<div className="relative w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Search ticket ID, asset, or customer..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors relative">
<iconify-icon className="text-xl" icon="solar:notification-lines-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-semibold text-slate-900 leading-none">Sarah Jenkins</p>
<p className="text-[10px] text-slate-500 font-medium">System Administrator</p>
</div>
<div className="size-9 bg-slate-100 border border-slate-200 rounded-full overflow-hidden">
<img alt="Avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">

<div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
<span>Dashboard</span>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-900 font-medium">Overview</span>
</div>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Service Management Overview</h1>
<p className="text-sm text-slate-500 mt-1">Real-time monitoring of support tickets and system performance.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-colors">
<iconify-icon className="text-lg" icon="solar:printer-linear"></iconify-icon>
                        Export Report
                    </button>
<button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 flex items-center gap-2 transition-all shadow-sm shadow-emerald-200">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                        New Ticket
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="size-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:ticket-linear"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                            12%
                        </span>
</div>
<p className="text-xs font-medium text-slate-500">Total Tickets</p>
<p className="text-xl font-semibold text-slate-900 mt-1">1,284</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="size-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:fire-linear"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                            4%
                        </span>
</div>
<p className="text-xs font-medium text-slate-500">Open</p>
<p className="text-xl font-semibold text-slate-900 mt-1">42</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="size-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:re-routing-linear"></iconify-icon>
</div>
</div>
<p className="text-xs font-medium text-slate-500">In Progress</p>
<p className="text-xl font-semibold text-slate-900 mt-1">18</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="size-8 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
</div>
<p className="text-xs font-medium text-slate-500">Pending</p>
<p className="text-xl font-semibold text-slate-900 mt-1">09</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="size-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<p className="text-xs font-medium text-slate-500">Closed</p>
<p className="text-xl font-semibold text-slate-900 mt-1">1,215</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="size-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
</div>
<p className="text-xs font-medium text-slate-500">Avg. Res.</p>
<p className="text-xl font-semibold text-slate-900 mt-1">2.4h</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-10">
<h3 className="font-semibold text-slate-900 tracking-tight">Ticket Activity Trend</h3>
<select className="text-xs border border-slate-200 bg-slate-50 rounded-md px-2 py-1 font-medium text-slate-600 focus:ring-0 focus:outline-none">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
</select>
</div>
<div className="h-[200px] w-full relative">

<div className="absolute inset-0 flex flex-col justify-between -top-4">
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
</div>

<div className="absolute inset-0 flex items-end justify-between px-4 gap-4 md:gap-8">
<div className="w-full bg-emerald-100 hover:bg-emerald-500 transition-colors rounded-t-sm h-[45%] relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">42</span>
</div>
<div className="w-full bg-emerald-100 hover:bg-emerald-500 transition-colors rounded-t-sm h-[65%] relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">58</span>
</div>
<div className="w-full bg-emerald-100 hover:bg-emerald-500 transition-colors rounded-t-sm h-[35%] relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">31</span>
</div>
<div className="w-full bg-emerald-100 hover:bg-emerald-500 transition-colors rounded-t-sm h-[85%] relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">76</span>
</div>
<div className="w-full bg-emerald-100 hover:bg-emerald-500 transition-colors rounded-t-sm h-[55%] relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">49</span>
</div>
<div className="w-full bg-emerald-100 hover:bg-emerald-500 transition-colors rounded-t-sm h-[20%] relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">18</span>
</div>
<div className="w-full bg-emerald-100 hover:bg-emerald-500 transition-colors rounded-t-sm h-[25%] relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">22</span>
</div>
</div>

<div className="absolute bottom-[-28px] left-0 w-full flex justify-between text-[10px] text-slate-400 font-semibold px-4">
<span className="w-full text-center">MON</span>
<span className="w-full text-center">TUE</span>
<span className="w-full text-center">WED</span>
<span className="w-full text-center">THU</span>
<span className="w-full text-center">FRI</span>
<span className="w-full text-center">SAT</span>
<span className="w-full text-center">SUN</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="font-semibold text-slate-900 tracking-tight mb-6">Status Distribution</h3>
<div className="flex flex-col items-center justify-center">
<div className="size-44 rounded-full border-[12px] border-emerald-500 border-l-red-500 border-t-blue-500 border-r-amber-400 relative flex items-center justify-center">
<div className="text-center">
<p className="text-2xl font-semibold text-slate-900">1,284</p>
<p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Tickets</p>
</div>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-8 w-full">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-red-500"></span>
<span className="text-xs text-slate-500">Open</span>
</div>
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-blue-500"></span>
<span className="text-xs text-slate-500">Progress</span>
</div>
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-amber-400"></span>
<span className="text-xs text-slate-500">Pending</span>
</div>
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500">Closed</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
<h3 className="font-semibold text-slate-900 tracking-tight">Active Support Tickets</h3>
<div className="flex gap-2">
<button className="text-xs font-medium text-emerald-600 hover:underline">View all</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50/50 text-slate-500 text-[10px] uppercase tracking-wider font-semibold">
<tr>
<th className="px-6 py-4">Ticket ID</th>
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Subject</th>
<th className="px-6 py-4">Asset</th>
<th className="px-6 py-4">Priority</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Assignee</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">SR-4829</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-semibold">JD</div>
<span>John Doe</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600 max-w-[200px] truncate">VPN Connectivity Issue - London Office</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-medium">
<iconify-icon icon="solar:server-linear"></iconify-icon>
                                        LHR-SRV-04
                                    </span>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-50 text-red-600 rounded-md text-[10px] font-semibold">
                                        High
                                    </span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-semibold ring-1 ring-blue-100">
                                        In Progress
                                    </span>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2">
<img alt="" className="size-6 rounded-full ring-2 ring-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">SR-4828</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-semibold">MS</div>
<span>Maria Santos</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600 max-w-[200px] truncate">New Employee Onboarding - Marketing</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-medium">
<iconify-icon icon="solar:laptop-linear"></iconify-icon>
                                        Software
                                    </span>
</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md text-[10px] font-semibold">
                                        Medium
                                    </span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-red-50 text-red-600 rounded-full text-[10px] font-semibold ring-1 ring-red-100">
                                        Open
                                    </span>
</td>
<td className="px-6 py-4 text-slate-400 italic text-xs">Unassigned</td>
<td className="px-6 py-4 text-right">
<button className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

<div className="flex-1 flex flex-col min-w-0 border-r border-slate-100">
<div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="size-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-semibold">JD</div>
<div>
<h3 className="font-semibold text-slate-900 leading-tight">Ticket #SR-4829 - Connectivity Issue</h3>
<p className="text-xs text-slate-500">Raised 2 hours ago by John Doe • Priority: High</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 p-8 overflow-y-auto space-y-6 max-h-[400px]">
<div className="flex gap-4 max-w-[85%]">
<div className="size-8 rounded-full bg-slate-200 shrink-0 overflow-hidden">
<img alt="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"/>
</div>
<div className="space-y-1">
<div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none">
<p className="text-sm text-slate-700">Hey team, I'm unable to connect to the LHR-SRV-04 server from my local machine. I've tried resetting my VPN but it still hangs at 'Authenticating'. Can you take a look?</p>
</div>
<span className="text-[10px] text-slate-400 ml-1">Today, 09:42 AM</span>
</div>
</div>
<div className="flex gap-4 max-w-[85%] ml-auto flex-row-reverse">
<div className="size-8 rounded-full bg-emerald-600 shrink-0 flex items-center justify-center text-[10px] text-white font-semibold">SJ</div>
<div className="space-y-1 text-right">
<div className="bg-emerald-600 p-4 rounded-2xl rounded-tr-none text-left">
<p className="text-sm text-white">Hi John, I'm checking the firewall logs now. There was a scheduled maintenance on that gateway earlier. I'll get back to you in 10 minutes.</p>
</div>
<span className="text-[10px] text-slate-400 mr-1">Today, 10:15 AM</span>
</div>
</div>
</div>
<div className="p-6 border-t border-slate-100 mt-auto">
<div className="bg-slate-50 rounded-xl border border-slate-200 p-3">
<textarea className="w-full bg-transparent border-none text-sm focus:ring-0 resize-none h-24 text-slate-700" placeholder="Type your reply here..."></textarea>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200">
<div className="flex items-center gap-1">
<button className="p-2 text-slate-400 hover:bg-slate-200 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:attachment-linear"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:bg-slate-200 rounded-lg transition-colors">
<iconify-icon className="text-lg" icon="solar:face-smile-linear"></iconify-icon>
</button>
</div>
<button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-sm">
                                    Send Reply
                                    <iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<aside className="w-full lg:w-80 bg-white p-6 space-y-8">
<div>
<h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Ticket Status</h4>
<div className="space-y-4">
<div>
<label className="text-xs font-medium text-slate-500 block mb-1.5">Current Status</label>
<select className="w-full text-sm bg-blue-50 border border-blue-100 text-blue-700 rounded-lg px-3 py-2 font-semibold focus:outline-none">
<option>In Progress</option>
<option>Open</option>
<option>Pending</option>
<option>Closed</option>
</select>
</div>
<div>
<label className="text-xs font-medium text-slate-500 block mb-1.5">Priority</label>
<div className="flex gap-2">
<button className="flex-1 py-2 text-xs font-semibold rounded-lg border border-red-200 bg-red-50 text-red-600">High</button>
<button className="flex-1 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-500">Med</button>
<button className="flex-1 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-500">Low</button>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100">
<h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Assignment</h4>
<div className="flex items-center gap-3 mb-4">
<img alt="" className="size-8 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-[10px] text-slate-500">Assigned 20m ago</p>
</div>
</div>
<button className="w-full py-2 text-xs font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">Reassign Agent</button>
</div>
<div className="pt-8 border-t border-slate-100">
<h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Customer Info</h4>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Email</span>
<span className="text-slate-900 font-medium">j.doe@company.com</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Company</span>
<span className="text-slate-900 font-medium">Acme Corp</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Asset</span>
<span className="text-emerald-600 font-medium hover:underline cursor-pointer">LHR-SRV-04</span>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>

    </>
  );
}
