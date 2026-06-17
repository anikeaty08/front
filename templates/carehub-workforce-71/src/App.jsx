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
      

<div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-neutral-200 flex flex-col z-50">
<div className="h-16 flex items-center px-6 border-b border-neutral-200">
<div className="text-xl font-semibold tracking-tight">CareHub</div>
</div>
<nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-md transition-colors" href="#dashboard">
<i className="w-5 h-5" data-lucide="layout-dashboard" style={{strokeWidth: '1.5'}}></i>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#post-shifts">
<i className="w-5 h-5" data-lucide="plus-circle" style={{strokeWidth: '1.5'}}></i>
                Post Shifts
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#manage-shifts">
<i className="w-5 h-5" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
                Manage Shifts
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#timesheets">
<i className="w-5 h-5" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                Timesheets
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#workers">
<i className="w-5 h-5" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
                Worker Directory
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#invoices">
<i className="w-5 h-5" data-lucide="receipt" style={{strokeWidth: '1.5'}}></i>
                Invoice Processing
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#incidents">
<i className="w-5 h-5" data-lucide="alert-triangle" style={{strokeWidth: '1.5'}}></i>
                Incident Log
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#reports">
<i className="w-5 h-5" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
                Reports &amp; Analytics
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#settings">
<i className="w-5 h-5" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
                Settings
            </a>
</nav>
<div className="p-4 border-t border-neutral-200">
<div className="flex items-center gap-3">
<img alt="User" className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900 truncate">Sarah Mitchell</div>
<div className="text-xs text-neutral-500">Admin</div>
</div>
</div>
</div>
</div>

<div className="ml-64 min-h-screen">

<header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-8 sticky top-0 z-40">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Dashboard</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors">
                    Quick Post Shift
                </button>
</div>
</header>

<main className="p-8">

<div className="mb-8">
<h2 className="text-lg font-semibold text-neutral-900 mb-4 tracking-tight">Status Summary</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="bg-white border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 cursor-pointer transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-600">Open Shifts</div>
<div className="p-2 bg-blue-50 rounded-md">
<i className="w-4 h-4 text-blue-600" data-lucide="circle" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold text-neutral-900 tracking-tight">24</div>
<div className="text-xs text-neutral-500 mt-1">+3 from yesterday</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 cursor-pointer transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-600">Pending Approval</div>
<div className="p-2 bg-amber-50 rounded-md">
<i className="w-4 h-4 text-amber-600" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold text-neutral-900 tracking-tight">12</div>
<div className="text-xs text-neutral-500 mt-1">Awaiting review</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 cursor-pointer transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-600">Upcoming</div>
<div className="p-2 bg-green-50 rounded-md">
<i className="w-4 h-4 text-green-600" data-lucide="calendar-check" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold text-neutral-900 tracking-tight">38</div>
<div className="text-xs text-neutral-500 mt-1">Next 7 days</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 cursor-pointer transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-600">In Progress</div>
<div className="p-2 bg-purple-50 rounded-md">
<i className="w-4 h-4 text-purple-600" data-lucide="activity" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold text-neutral-900 tracking-tight">6</div>
<div className="text-xs text-neutral-500 mt-1">Currently active</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 cursor-pointer transition-colors">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-600">Completed</div>
<div className="p-2 bg-neutral-100 rounded-md">
<i className="w-4 h-4 text-neutral-600" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold text-neutral-900 tracking-tight">156</div>
<div className="text-xs text-neutral-500 mt-1">This month</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-1">
<div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-base font-semibold text-neutral-900 tracking-tight">Urgent Items</h3>
</div>
<div className="divide-y divide-neutral-200">
<div className="px-5 py-4 hover:bg-neutral-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="p-2 bg-red-50 rounded-md mt-0.5">
<i className="w-4 h-4 text-red-600" data-lucide="alert-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900">Unfilled Shift in 8 hours</div>
<div className="text-xs text-neutral-500 mt-1">Night Shift - RN Required</div>
<div className="text-xs text-red-600 font-medium mt-1">Critical Priority</div>
</div>
</div>
</div>
<div className="px-5 py-4 hover:bg-neutral-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="p-2 bg-amber-50 rounded-md mt-0.5">
<i className="w-4 h-4 text-amber-600" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900">3 Timesheets Due Today</div>
<div className="text-xs text-neutral-500 mt-1">Pending approval deadline</div>
</div>
</div>
</div>
<div className="px-5 py-4 hover:bg-neutral-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="p-2 bg-blue-50 rounded-md mt-0.5">
<i className="w-4 h-4 text-blue-600" data-lucide="inbox" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900">2 New Booking Requests</div>
<div className="text-xs text-neutral-500 mt-1">Awaiting confirmation</div>
</div>
</div>
</div>
<div className="px-5 py-4 hover:bg-neutral-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="p-2 bg-purple-50 rounded-md mt-0.5">
<i className="w-4 h-4 text-purple-600" data-lucide="shield-alert" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900">1 Incident Under Review</div>
<div className="text-xs text-neutral-500 mt-1">Reported 2 days ago</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<h3 className="text-base font-semibold text-neutral-900 tracking-tight">Staffing Overview</h3>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors">
                                    This Week
                                </button>
<button className="px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-md transition-colors">
                                    Next Week
                                </button>
</div>
</div>
<div className="p-5">
<div className="grid grid-cols-7 gap-2">
<div className="text-center">
<div className="text-xs font-medium text-neutral-500 mb-2">MON</div>
<div className="text-sm font-medium text-neutral-900 mb-2">Jan 20</div>
<div className="aspect-square bg-green-100 border border-green-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-300 transition-colors">
<div className="text-center">
<div className="text-lg font-semibold text-green-700">98%</div>
</div>
</div>
<div className="text-xs text-neutral-500 mt-2">24/24</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-neutral-500 mb-2">TUE</div>
<div className="text-sm font-medium text-neutral-900 mb-2">Jan 21</div>
<div className="aspect-square bg-green-100 border border-green-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-300 transition-colors">
<div className="text-center">
<div className="text-lg font-semibold text-green-700">100%</div>
</div>
</div>
<div className="text-xs text-neutral-500 mt-2">22/22</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-neutral-500 mb-2">WED</div>
<div className="text-sm font-medium text-neutral-900 mb-2">Jan 22</div>
<div className="aspect-square bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-amber-300 transition-colors">
<div className="text-center">
<div className="text-lg font-semibold text-amber-700">75%</div>
</div>
</div>
<div className="text-xs text-neutral-500 mt-2">18/24</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-neutral-500 mb-2">THU</div>
<div className="text-sm font-medium text-neutral-900 mb-2">Jan 23</div>
<div className="aspect-square bg-red-100 border border-red-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-red-300 transition-colors">
<div className="text-center">
<div className="text-lg font-semibold text-red-700">45%</div>
</div>
</div>
<div className="text-xs text-neutral-500 mt-2">11/24</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-neutral-500 mb-2">FRI</div>
<div className="text-sm font-medium text-neutral-900 mb-2">Jan 24</div>
<div className="aspect-square bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-amber-300 transition-colors">
<div className="text-center">
<div className="text-lg font-semibold text-amber-700">68%</div>
</div>
</div>
<div className="text-xs text-neutral-500 mt-2">15/22</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-neutral-500 mb-2">SAT</div>
<div className="text-sm font-medium text-neutral-900 mb-2">Jan 25</div>
<div className="aspect-square bg-neutral-100 border border-neutral-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-neutral-300 transition-colors">
<div className="text-center">
<div className="text-lg font-semibold text-neutral-700">—</div>
</div>
</div>
<div className="text-xs text-neutral-500 mt-2">0/20</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-neutral-500 mb-2">SUN</div>
<div className="text-sm font-medium text-neutral-900 mb-2">Jan 26</div>
<div className="aspect-square bg-neutral-100 border border-neutral-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-neutral-300 transition-colors">
<div className="text-center">
<div className="text-lg font-semibold text-neutral-700">—</div>
</div>
</div>
<div className="text-xs text-neutral-500 mt-2">0/18</div>
</div>
</div>
<div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-neutral-200">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div>
<span className="text-xs text-neutral-600">Full Coverage (90%+)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-amber-100 border border-amber-200 rounded"></div>
<span className="text-xs text-neutral-600">Partial (60-89%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-red-100 border border-red-200 rounded"></div>
<span className="text-xs text-neutral-600">Critical (&lt;60%)</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-neutral-200">
<div className="flex items-center gap-2">
<button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors">
                                        Quick Post for Thursday
                                    </button>
<button className="flex-1 px-4 py-2 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors">
                                        View All Shifts
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

<div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-base font-semibold text-neutral-900 tracking-tight">Financial Summary</h3>
</div>
<div className="p-5">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<div className="text-xs font-medium text-neutral-500 mb-1">Current Month Spend</div>
<div className="text-2xl font-semibold text-neutral-900 tracking-tight">£48,650</div>
<div className="flex items-center gap-1 mt-1">
<i className="w-3 h-3 text-green-600" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs text-green-600 font-medium">+8.2% vs last month</span>
</div>
</div>
<div>
<div className="text-xs font-medium text-neutral-500 mb-1">Budget Remaining</div>
<div className="text-2xl font-semibold text-neutral-900 tracking-tight">£21,350</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-xs text-neutral-500">30% of monthly budget</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
<div className="flex items-center gap-3">
<div className="p-2 bg-white rounded-md">
<i className="w-4 h-4 text-red-600" data-lucide="alert-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Outstanding Invoices</div>
<div className="text-xs text-neutral-500">5 invoices overdue</div>
</div>
</div>
<div className="text-sm font-semibold text-neutral-900">£12,450</div>
</div>
<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
<div className="flex items-center gap-3">
<div className="p-2 bg-white rounded-md">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Recent Payments</div>
<div className="text-xs text-neutral-500">Last 7 days</div>
</div>
</div>
<div className="text-sm font-semibold text-neutral-900">£8,920</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-neutral-200">
<div className="text-xs font-medium text-neutral-500 mb-3">Spending Trend (Last 6 Months)</div>
<div className="flex items-end justify-between gap-2 h-24">
<div className="flex-1 bg-neutral-200 rounded-t" style={{height: '45%'}}></div>
<div className="flex-1 bg-neutral-200 rounded-t" style={{height: '52%'}}></div>
<div className="flex-1 bg-neutral-200 rounded-t" style={{height: '65%'}}></div>
<div className="flex-1 bg-neutral-200 rounded-t" style={{height: '58%'}}></div>
<div className="flex-1 bg-neutral-200 rounded-t" style={{height: '71%'}}></div>
<div className="flex-1 bg-neutral-900 rounded-t" style={{height: '82%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-base font-semibold text-neutral-900 tracking-tight">Recent Activity</h3>
</div>
<div className="divide-y divide-neutral-200 max-h-96 overflow-y-auto">
<div className="px-5 py-3 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-green-50 rounded-md mt-0.5">
<i className="w-3.5 h-3.5 text-green-600" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-neutral-900">Shift approved for <span className="font-medium">Emma Roberts</span></div>
<div className="text-xs text-neutral-500 mt-0.5">2 minutes ago</div>
</div>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-blue-50 rounded-md mt-0.5">
<i className="w-3.5 h-3.5 text-blue-600" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-neutral-900">New shift posted for <span className="font-medium">Night Shift - Thursday</span></div>
<div className="text-xs text-neutral-500 mt-0.5">15 minutes ago</div>
</div>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-purple-50 rounded-md mt-0.5">
<i className="w-3.5 h-3.5 text-purple-600" data-lucide="file-check" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-neutral-900">Timesheet submitted by <span className="font-medium">Michael Chen</span></div>
<div className="text-xs text-neutral-500 mt-0.5">1 hour ago</div>
</div>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-amber-50 rounded-md mt-0.5">
<i className="w-3.5 h-3.5 text-amber-600" data-lucide="dollar-sign" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-neutral-900">Invoice #INV-2401 processed - <span className="font-medium">£2,450</span></div>
<div className="text-xs text-neutral-500 mt-0.5">2 hours ago</div>
</div>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-green-50 rounded-md mt-0.5">
<i className="w-3.5 h-3.5 text-green-600" data-lucide="user-check" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-neutral-900">Worker <span className="font-medium">Sarah Johnson</span> completed shift</div>
<div className="text-xs text-neutral-500 mt-0.5">3 hours ago</div>
</div>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-red-50 rounded-md mt-0.5">
<i className="w-3.5 h-3.5 text-red-600" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-neutral-900">Shift cancelled - Worker unavailable</div>
<div className="text-xs text-neutral-500 mt-0.5">5 hours ago</div>
</div>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition-colors">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-blue-50 rounded-md mt-0.5">
<i className="w-3.5 h-3.5 text-blue-600" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm text-neutral-900">Rating submitted for <span className="font-medium">David Martinez</span> - 5 stars</div>
<div className="text-xs text-neutral-500 mt-0.5">6 hours ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="hidden" id="post-shifts">
<header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-8 sticky top-0 z-40">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Post New Shift</h1>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-md transition-colors">
                        Save as Draft
                    </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors">
                        Post Shift
                    </button>
</div>
</header>
<main className="p-8">
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white border border-neutral-200 rounded-lg p-6">
<h3 className="text-base font-semibold text-neutral-900 mb-4 tracking-tight">Shift Basics</h3>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Date</label>
<input className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" type="date" value="2024-01-25"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Shift Type</label>
<select className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
<option>Day Shift</option>
<option>Night Shift</option>
<option>Evening Shift</option>
<option>Weekend Shift</option>
</select>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Start Time</label>
<input className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" type="time" value="08:00"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">End Time</label>
<input className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" type="time" value="16:00"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Duration</label>
<input className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md bg-neutral-50" readonly="" type="text" value="8 hours"/>
</div>
</div>
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900" id="overnight" type="checkbox"/>
<label className="text-sm text-neutral-700" htmlFor="overnight">Mark as overnight shift</label>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Worker Type</label>
<select className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
<option>Registered Nurse (RN)</option>
<option>Healthcare Assistant (HCA)</option>
<option>Support Worker</option>
<option>Senior Care Worker</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Skill Level</label>
<select className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
<option>Entry Level</option>
<option>Intermediate</option>
<option>Advanced</option>
<option>Expert</option>
</select>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-6">
<h3 className="text-base font-semibold text-neutral-900 mb-4 tracking-tight">Requirements</h3>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="shirt" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-700">Uniform Required</span>
</div>
<div className="w-10 h-6 bg-neutral-900 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="pill" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-700">Medication Admin</span>
</div>
<div className="w-10 h-6 bg-neutral-200 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="heart-pulse" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-700">First Aid</span>
</div>
<div className="w-10 h-6 bg-neutral-900 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-700">PMVA Certified</span>
</div>
<div className="w-10 h-6 bg-neutral-200 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Specialty Skills</label>
<select className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
<option>None Required</option>
<option>Dementia Care</option>
<option>Mental Health</option>
<option>Learning Disabilities</option>
<option>Palliative Care</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Notes</label>
<textarea className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none" placeholder="Add any specific requirements or notes for this shift..." rows="3"></textarea>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-6">
<h3 className="text-base font-semibold text-neutral-900 mb-4 tracking-tight">Compensation</h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Hourly Rate</label>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500">£</span>
<input className="w-full pl-8 pr-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" step="0.50" type="number" value="15.50"/>
</div>
<div className="text-sm text-neutral-500">/hour</div>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs text-neutral-500">Suggested rates:</span>
<button className="px-2 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors">£14.50</button>
<button className="px-2 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors">£15.50</button>
<button className="px-2 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors">£17.00</button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Break Duration</label>
<select className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
<option>No break</option>
<option>15 minutes (unpaid)</option>
<option>30 minutes (unpaid)</option>
<option>30 minutes (paid)</option>
<option>1 hour (unpaid)</option>
</select>
</div>
<div className="p-4 bg-neutral-50 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-600">Hours worked</span>
<span className="text-sm font-medium text-neutral-900">8.0 hours</span>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-600">Break deduction</span>
<span className="text-sm font-medium text-neutral-900">-0.5 hours</span>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-600">Billable hours</span>
<span className="text-sm font-medium text-neutral-900">7.5 hours</span>
</div>
<div className="pt-2 mt-2 border-t border-neutral-200">
<div className="flex items-center justify-between">
<span className="text-base font-semibold text-neutral-900">Total Cost</span>
<span className="text-xl font-semibold text-neutral-900 tracking-tight">£116.25</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-6">
<h3 className="text-base font-semibold text-neutral-900 mb-4 tracking-tight">Templates</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<button className="flex-1 px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-md transition-colors text-left flex items-center justify-between">
<span>Apply Existing Template</span>
<i className="w-4 h-4" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-md transition-colors">
                                            Save as Template
                                        </button>
</div>
<div className="text-xs text-neutral-500">Quick access to frequently used shift configurations</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white border border-neutral-200 rounded-lg p-5 sticky top-24">
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Shift Summary</h4>
<div className="space-y-3 text-sm">
<div className="flex items-start justify-between">
<span className="text-neutral-600">Date</span>
<span className="font-medium text-neutral-900 text-right">Thu, Jan 25</span>
</div>
<div className="flex items-start justify-between">
<span className="text-neutral-600">Time</span>
<span className="font-medium text-neutral-900 text-right">08:00 - 16:00</span>
</div>
<div className="flex items-start justify-between">
<span className="text-neutral-600">Type</span>
<span className="font-medium text-neutral-900 text-right">Day Shift</span>
</div>
<div className="flex items-start justify-between">
<span className="text-neutral-600">Worker</span>
<span className="font-medium text-neutral-900 text-right">RN - Advanced</span>
</div>
<div className="pt-3 border-t border-neutral-200">
<div className="flex items-center justify-between">
<span className="text-neutral-900 font-medium">Total Cost</span>
<span className="text-lg font-semibold text-neutral-900">£116.25</span>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-neutral-200 space-y-2">
<button className="w-full px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors">
                                        Post Shift
                                    </button>
<button className="w-full px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-md transition-colors">
                                        Post Multiple (Series)
                                    </button>
<button className="w-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 rounded-md transition-colors">
                                        Save as Draft
                                    </button>
</div>
<div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-amber-600 mt-0.5" data-lucide="alert-triangle" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="text-xs font-medium text-amber-900">Rate Notice</div>
<div className="text-xs text-amber-700 mt-0.5">This rate is £1.50 below the standard for this role</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
