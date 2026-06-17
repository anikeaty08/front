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



        lucide.createIcons();
    
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
      
<div className="flex h-screen overflow-hidden">

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
<div className="p-6 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-semibold" style={{letterSpacing: '-0.05em'}}>AT</span>
</div>
<div>
<h1 className="text-base font-semibold tracking-tight">AeroTag Assist</h1>
<p className="text-xs text-slate-500">Hotel Management</p>
</div>
</div>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#dashboard">
<i data-lucide="layout-dashboard" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#modules">
<i data-lucide="grid-3x3" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Modules</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg" href="#orders">
<i data-lucide="shopping-bag" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Guest Orders</span>
<span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#employees">
<i data-lucide="users" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Employees</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#analytics">
<i data-lucide="bar-chart-3" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#studio">
<i data-lucide="palette" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Assist Studio</span>
</a>
<div className="pt-4 mt-4 border-t border-slate-200">
<p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Quick Access</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#qr">
<i data-lucide="qr-code" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>QR Codes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#notifications">
<i data-lucide="bell" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Notifications</span>
</a>
</div>
</nav>
<div className="p-4 border-t border-slate-200">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors" href="#settings">
<i data-lucide="settings" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span>Settings</span>
</a>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="bg-white border-b border-slate-200 sticky top-0 z-10">
<div className="px-8 py-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Guest Orders</h2>
<p className="text-sm text-slate-500 mt-1">Monitor and manage all guest service requests in real-time</p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<input className="w-80 px-4 py-2 pl-10 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search orders, rooms, guests..." type="text"/>
<i className="absolute left-3 top-2.5 text-slate-400" data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
<i data-lucide="bell" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<div className="flex items-center gap-2 pl-3 border-l border-slate-200">
<img alt="Admin" className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div className="text-sm">
<p className="font-medium text-slate-900">Admin</p>
<p className="text-xs text-slate-500">Hotel Manager</p>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="p-8 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-sm transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="text-blue-600" data-lucide="clock" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Live</span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Active Orders</p>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">12</p>
<p className="text-xs text-slate-500 mt-2">↑ 3 from last hour</p>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-sm transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
<i className="text-green-600" data-lucide="check-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">Today</span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Completed Today</p>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">84</p>
<p className="text-xs text-slate-500 mt-2">↑ 12% vs yesterday</p>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-sm transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
<i className="text-purple-600" data-lucide="trophy" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">MVP</span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Top Performer</p>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">Riya</p>
<p className="text-xs text-slate-500 mt-2">28 tasks completed</p>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-sm transition-all">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
<i className="text-amber-600" data-lucide="timer" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Avg</span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Avg Completion Time</p>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">7m 42s</p>
<p className="text-xs text-slate-500 mt-2">↓ 1m 15s improvement</p>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200">
<div className="px-6 py-4 border-b border-slate-200">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold text-slate-900">Guest Orders Tracker</h3>
<p className="text-sm text-slate-500 mt-1">Real-time order management and assignment</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
<i data-lucide="filter" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                    Filter
                                </button>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
<i data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                    Export
                                </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                    New Order
                                </button>
</div>
</div>
</div>

<div className="px-6 py-3 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
<button className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg whitespace-nowrap">All Orders (96)</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap">Room Service (38)</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap">Housekeeping (24)</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap">Concierge (15)</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap">Maintenance (12)</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap">Spa &amp; Wellness (7)</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-slate-200 bg-slate-50">
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Order ID</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Room</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Guest</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Module</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Service</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Time</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Assigned To</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Status</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">ETA</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Feedback</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900">#A-101</td>
<td className="px-6 py-4 text-sm text-slate-700">304</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Guest" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-900">Mr. Smith</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-md">
<i data-lucide="utensils" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                            Room Service
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-700">Breakfast Combo</td>
<td className="px-6 py-4 text-sm text-slate-500">08:32 AM</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Employee" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-700">Ahmed</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-md">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                            In Progress
                                        </span>
</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900">10 min</td>
<td className="px-6 py-4">
<div className="flex items-center gap-0.5 text-amber-400">
<span className="text-xs">★★★★☆</span>
</div>
</td>
<td className="px-6 py-4">
<button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
<i data-lucide="more-horizontal" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900">#B-224</td>
<td className="px-6 py-4 text-sm text-slate-700">215</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Guest" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-900">Ms. Maria</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-md">
<i data-lucide="sparkles" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                            Housekeeping
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-700">Towel Replacement</td>
<td className="px-6 py-4 text-sm text-slate-500">09:05 AM</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Employee" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-700">Riya</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-md">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-400">—</td>
<td className="px-6 py-4">
<div className="flex items-center gap-0.5 text-amber-400">
<span className="text-xs">★★★★★</span>
</div>
</td>
<td className="px-6 py-4">
<button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
<i data-lucide="more-horizontal" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900">#C-567</td>
<td className="px-6 py-4 text-sm text-slate-700">412</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Guest" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-900">Mr. Chen</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-teal-700 bg-teal-50 rounded-md">
<i data-lucide="map-pin" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                            Concierge
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-700">Restaurant Booking</td>
<td className="px-6 py-4 text-sm text-slate-500">09:18 AM</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Employee" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-700">Sarah</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-md">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                            In Progress
                                        </span>
</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900">5 min</td>
<td className="px-6 py-4 text-sm text-slate-400">—</td>
<td className="px-6 py-4">
<button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
<i data-lucide="more-horizontal" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900">#D-891</td>
<td className="px-6 py-4 text-sm text-slate-700">128</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Guest" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-900">Mrs. Johnson</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-rose-700 bg-rose-50 rounded-md">
<i data-lucide="wrench" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                            Maintenance
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-700">AC Temperature Issue</td>
<td className="px-6 py-4 text-sm text-slate-500">09:25 AM</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Employee" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-700">Carlos</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-md">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                            Assigned
                                        </span>
</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900">15 min</td>
<td className="px-6 py-4 text-sm text-slate-400">—</td>
<td className="px-6 py-4">
<button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
<i data-lucide="more-horizontal" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900">#E-342</td>
<td className="px-6 py-4 text-sm text-slate-700">503</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Guest" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-900">Mr. Patel</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-md">
<i data-lucide="flower-2" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                            Spa &amp; Wellness
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-700">Massage Appointment</td>
<td className="px-6 py-4 text-sm text-slate-500">09:30 AM</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Employee" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-sm text-slate-700">Emma</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-md">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-400">—</td>
<td className="px-6 py-4">
<div className="flex items-center gap-0.5 text-amber-400">
<span className="text-xs">★★★★★</span>
</div>
</td>
<td className="px-6 py-4">
<button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
<i data-lucide="more-horizontal" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
<p className="text-sm text-slate-600">Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">96</span> orders</p>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Previous</button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg">1</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">2</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">3</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900">Module Performance</h3>
<p className="text-sm text-slate-500 mt-1">Distribution of requests by service type</p>
</div>
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
<i data-lucide="more-horizontal" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-4">
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
<span className="text-sm font-medium text-slate-700">Room Service</span>
</div>
<span className="text-sm font-semibold text-slate-900">38 orders</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
<span className="text-sm font-medium text-slate-700">Housekeeping</span>
</div>
<span className="text-sm font-semibold text-slate-900">24 orders</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-purple-500 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-teal-500 rounded-full"></div>
<span className="text-sm font-medium text-slate-700">Concierge</span>
</div>
<span className="text-sm font-semibold text-slate-900">15 orders</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-teal-500 h-2 rounded-full" style={{width: '16%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-rose-500 rounded-full"></div>
<span className="text-sm font-medium text-slate-700">Maintenance</span>
</div>
<span className="text-sm font-semibold text-slate-900">12 orders</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-rose-500 h-2 rounded-full" style={{width: '12%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
<span className="text-sm font-medium text-slate-700">Spa &amp; Wellness</span>
</div>
<span className="text-sm font-semibold text-slate-900">7 orders</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '7%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900">Employee Leaderboard</h3>
<p className="text-sm text-slate-500 mt-1">Top performers this week</p>
</div>
<button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
<div className="flex items-center justify-center w-8 h-8 bg-amber-400 text-white text-sm font-semibold rounded-lg">1</div>
<img alt="Employee" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-900">Riya Sharma</p>
<p className="text-xs text-slate-500">Housekeeping</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">28 tasks</p>
<p className="text-xs text-amber-600">★ 4.9</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
<div className="flex items-center justify-center w-8 h-8 bg-slate-300 text-white text-sm font-semibold rounded-lg">2</div>
<img alt="Employee" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-900">Ahmed Hassan</p>
<p className="text-xs text-slate-500">Room Service</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">26 tasks</p>
<p className="text-xs text-amber-600">★ 4.8</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
<div className="flex items-center justify-center w-8 h-8 bg-amber-200 text-slate-700 text-sm font-semibold rounded-lg">3</div>
<img alt="Employee" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-900">Sarah Mitchell</p>
<p className="text-xs text-slate-500">Concierge</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">24 tasks</p>
<p className="text-xs text-amber-600">★ 4.9</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors">
<div className="flex items-center justify-center w-8 h-8 bg-slate-100 text-slate-600 text-sm font-semibold rounded-lg">4</div>
<img alt="Employee" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-900">Carlos Rodriguez</p>
<p className="text-xs text-slate-500">Maintenance</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">22 tasks</p>
<p className="text-xs text-amber-600">★ 4.7</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors">
<div className="flex items-center justify-center w-8 h-8 bg-slate-100 text-slate-600 text-sm font-semibold rounded-lg">5</div>
<img alt="Employee" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-900">Emma Thompson</p>
<p className="text-xs text-slate-500">Spa &amp; Wellness</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">20 tasks</p>
<p className="text-xs text-amber-600">★ 5.0</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900">Assist Studio</h3>
<p className="text-sm text-slate-500 mt-1">Customize your guest-facing QR portal interface</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
<i data-lucide="eye" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                Preview
                            </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i data-lucide="save" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                Publish Changes
                            </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="space-y-4">
<h4 className="text-sm font-semibold text-slate-900">Choose Template</h4>
<div className="space-y-3">
<div className="p-3 border-2 border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
<div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-md mb-2"></div>
<p className="text-sm font-medium text-slate-900">Modern Minimalist</p>
<p className="text-xs text-slate-500">Clean and professional</p>
</div>
<div className="p-3 border border-slate-200 rounded-lg hover:border-slate-300 cursor-pointer transition-colors">
<div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-md mb-2"></div>
<p className="text-sm font-medium text-slate-900">Luxury Suite</p>
<p className="text-xs text-slate-500">Premium experience</p>
</div>
<div className="p-3 border border-slate-200 rounded-lg hover:border-slate-300 cursor-pointer transition-colors">
<div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 rounded-md mb-2"></div>
<p className="text-sm font-medium text-slate-900">Coastal Resort</p>
<p className="text-xs text-slate-500">Beach vibes</p>
</div>
</div>
</div>

<div className="lg:col-span-2">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Live Preview</h4>
<div className="border-2 border-slate-200 rounded-xl overflow-hidden bg-slate-50">
<div className="bg-white p-4 border-b border-slate-200">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-red-400 rounded-full"></div>
<div className="w-2 h-2 bg-amber-400 rounded-full"></div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="h-6 bg-slate-100 rounded"></div>
</div>
<div className="p-6 space-y-4">
<div className="text-center">
<div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg mb-4">Welcome, Guest!</div>
<div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
<div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
</div>
<div className="grid grid-cols-3 gap-3 mt-6">
<div className="aspect-square bg-blue-100 rounded-lg p-3 flex flex-col items-center justify-center">
<i className="text-blue-600 mb-1" data-lucide="utensils" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<div className="h-2 bg-blue-200 rounded w-12 mt-2"></div>
</div>
<div className="aspect-square bg-purple-100 rounded-lg p-3 flex flex-col items-center justify-center">
<i className="text-purple-600 mb-1" data-lucide="sparkles" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<div className="h-2 bg-purple-200 rounded w-12 mt-2"></div>
</div>
<div className="aspect-square bg-teal-100 rounded-lg p-3 flex flex-col items-center justify-center">
<i className="text-teal-600 mb-1" data-lucide="map-pin" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<div className="h-2 bg-teal-200 rounded w-12 mt-2"></div>
</div>
</div>
<div className="space-y-2 mt-6">
<div className="h-16 bg-white border border-slate-200 rounded-lg"></div>
<div className="h-16 bg-white border border-slate-200 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
<i className="text-white" data-lucide="qr-code" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Generate QR Codes</h3>
<p className="text-sm text-slate-600 mb-4">Create and download QR codes for each room</p>
<button className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors">Generate Codes</button>
</div>
<div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
<i className="text-white" data-lucide="user-plus" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Add Employee</h3>
<p className="text-sm text-slate-600 mb-4">Onboard new staff members to the system</p>
<button className="w-full px-4 py-2 text-sm font-medium text-purple-600 bg-white rounded-lg hover:bg-purple-50 transition-colors">Add Member</button>
</div>
<div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
<div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
<i className="text-white" data-lucide="file-text" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Export Reports</h3>
<p className="text-sm text-slate-600 mb-4">Download analytics and performance reports</p>
<button className="w-full px-4 py-2 text-sm font-medium text-teal-600 bg-white rounded-lg hover:bg-teal-50 transition-colors">Export Data</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
