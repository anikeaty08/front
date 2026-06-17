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



        // Initialize Lucide icons
        lucide.createIcons();

        // Navigation
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.section-content');
        const pageTitle = document.querySelector('.page-title');

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href').substring(1);
                
                // Update active nav item
                navItems.forEach(nav => {
                    nav.classList.remove('active', 'bg-gray-50', 'text-gray-900', 'border-gray-900');
                    nav.classList.add('text-gray-600', 'border-transparent');
                });
                item.classList.add('active', 'bg-gray-50', 'text-gray-900', 'border-gray-900');
                item.classList.remove('text-gray-600', 'border-transparent');
                
                // Show target section
                sections.forEach(section => {
                    section.classList.add('hidden');
                });
                document.getElementById(targetId).classList.remove('hidden');
                
                // Update page title
                const titles = {
                    'dashboard': 'Dashboard',
                    'post-shifts': 'Post Shifts',
                    'manage-shifts': 'Manage Shifts',
                    'timesheets': 'Timesheets',
                    'workers': 'Worker Directory',
                    'invoices': 'Invoice Processing',
                    'incidents': 'Incident Log',
                    'reports': 'Reports & Analytics',
                    'settings': 'Settings'
                };
                pageTitle.textContent = titles[targetId] || 'Dashboard';
                
                // Reinitialize icons
                lucide.createIcons();
            });
        });

        // Tab switching for Manage Shifts
        const shiftTabs = document.querySelectorAll('.shift-tab');
        shiftTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                shiftTabs.forEach(t => {
                    t.classList.remove('text-gray-900', 'border-gray-900');
                    t.classList.add('text-gray-600', 'border-transparent');
                });
                tab.classList.add('text-gray-900', 'border-gray-900');
                tab.classList.remove('text-gray-600', 'border-transparent');
            });
        });

        // Tab switching for Timesheets
        const timesheetTabs = document.querySelectorAll('.timesheet-tab');
        timesheetTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                timesheetTabs.forEach(t => {
                    t.classList.remove('text-gray-900', 'border-gray-900');
                    t.classList.add('text-gray-600', 'border-transparent');
                });
                tab.classList.add('text-gray-900', 'border-gray-900');
                tab.classList.remove('text-gray-600', 'border-transparent');
            });
        });

        // Tab switching for Workers
        const workerTabs = document.querySelectorAll('.worker-tab');
        workerTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                workerTabs.forEach(t => {
                    t.classList.remove('text-gray-900', 'border-gray-900');
                    t.classList.add('text-gray-600', 'border-transparent');
                });
                tab.classList.add('text-gray-900', 'border-gray-900');
                tab.classList.remove('text-gray-600', 'border-transparent');
            });
        });

        // Tab switching for Invoices
        const invoiceTabs = document.querySelectorAll('.invoice-tab');
        invoiceTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                invoiceTabs.forEach(t => {
                    t.classList.remove('text-gray-900', 'border-gray-900');
                    t.classList.add('text-gray-600', 'border-transparent');
                });
                tab.classList.add('text-gray-900', 'border-gray-900');
                tab.classList.remove('text-gray-600', 'border-transparent');
            });
        });

        // Tab switching for Incidents
        const incidentTabs = document.querySelectorAll('.incident-tab');
        incidentTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                incidentTabs.forEach(t => {
                    t.classList.remove('text-gray-900', 'border-gray-900');
                    t.classList.add('text-gray-600', 'border-transparent');
                });
                tab.classList.add('text-gray-900', 'border-gray-900');
                tab.classList.remove('text-gray-600', 'border-transparent');
            });
        });
    
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

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
<div className="h-16 flex items-center px-6 border-b border-gray-200">
<div className="text-xl font-semibold tracking-tight">CareHub</div>
</div>
<nav className="flex-1 overflow-y-auto py-4">
<a className="nav-item active flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 border-l-2 border-gray-900" href="#dashboard">
<i data-lucide="layout-dashboard" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Dashboard
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#post-shifts">
<i data-lucide="plus-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Post Shifts
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#manage-shifts">
<i data-lucide="calendar" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Manage Shifts
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#timesheets">
<i data-lucide="clock" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Timesheets
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#workers">
<i data-lucide="users" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Worker Directory
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#invoices">
<i data-lucide="file-text" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Invoice Processing
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#incidents">
<i data-lucide="alert-triangle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Incident Log
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#reports">
<i data-lucide="bar-chart-2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Reports &amp; Analytics
                </a>
<a className="nav-item flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent" href="#settings">
<i data-lucide="settings" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                    Settings
                </a>
</nav>
</aside>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
<h1 className="text-2xl font-semibold tracking-tight page-title">Dashboard</h1>
<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
<i data-lucide="bell" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-gray-200">
<img alt="User" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div className="text-sm">
<div className="font-medium">John Smith</div>
<div className="text-xs text-gray-500">Care Manager</div>
</div>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">

<div className="section-content p-8" id="dashboard">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<button className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-gray-600">Open Shifts</div>
<i className="text-blue-500" data-lucide="circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="text-3xl font-semibold tracking-tight">24</div>
<div className="text-xs text-gray-500 mt-1">Awaiting applications</div>
</button>
<button className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-gray-600">Pending Approval</div>
<i className="text-amber-500" data-lucide="clock" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="text-3xl font-semibold tracking-tight">12</div>
<div className="text-xs text-gray-500 mt-1">Requires action</div>
</button>
<button className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-gray-600">Upcoming</div>
<i className="text-green-500" data-lucide="calendar" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="text-3xl font-semibold tracking-tight">67</div>
<div className="text-xs text-gray-500 mt-1">Next 7 days</div>
</button>
<button className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-gray-600">In Progress</div>
<i className="text-purple-500" data-lucide="play-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="text-3xl font-semibold tracking-tight">8</div>
<div className="text-xs text-gray-500 mt-1">Currently active</div>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

<div className="lg:col-span-1">
<div className="bg-white border border-gray-200 rounded-lg">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center gap-2">
<i className="text-red-500" data-lucide="alert-circle" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<h2 className="text-base font-semibold">Urgent Items</h2>
</div>
</div>
<div className="divide-y divide-gray-200">
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">3 shifts unfilled</div>
<div className="text-xs text-gray-500 mt-0.5">Within 24 hours • Night Shift RN</div>
</div>
<div className="text-xs text-gray-400">2h</div>
</div>
</div>
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">5 timesheets pending</div>
<div className="text-xs text-gray-500 mt-0.5">Due in 6 hours</div>
</div>
<div className="text-xs text-gray-400">4h</div>
</div>
</div>
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">2 new booking requests</div>
<div className="text-xs text-gray-500 mt-0.5">Awaiting review</div>
</div>
<div className="text-xs text-gray-400">1h</div>
</div>
</div>
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">1 incident reported</div>
<div className="text-xs text-gray-500 mt-0.5">Medication error • Requires investigation</div>
</div>
<div className="text-xs text-gray-400">30m</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="bg-white border border-gray-200 rounded-lg">
<div className="p-6 border-b border-gray-200 flex items-center justify-between">
<h2 className="text-base font-semibold">Staffing Overview</h2>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2">
<i data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                        Quick Post
                                    </button>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-4">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
<i data-lucide="chevron-left" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
<div className="text-sm font-medium">Week of Dec 18-24, 2023</div>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
<i data-lucide="chevron-right" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="grid grid-cols-7 gap-2">
<div className="text-center">
<div className="text-xs font-medium text-gray-500 mb-2">Mon</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-3 hover:border-green-300 cursor-pointer transition-colors">
<div className="text-xs font-medium text-green-700 mb-1">100%</div>
<div className="text-xs text-gray-600">18/18</div>
</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-gray-500 mb-2">Tue</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-3 hover:border-green-300 cursor-pointer transition-colors">
<div className="text-xs font-medium text-green-700 mb-1">95%</div>
<div className="text-xs text-gray-600">17/18</div>
</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-gray-500 mb-2">Wed</div>
<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 hover:border-amber-300 cursor-pointer transition-colors">
<div className="text-xs font-medium text-amber-700 mb-1">72%</div>
<div className="text-xs text-gray-600">13/18</div>
</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-gray-500 mb-2">Thu</div>
<div className="bg-red-50 border border-red-200 rounded-lg p-3 hover:border-red-300 cursor-pointer transition-colors">
<div className="text-xs font-medium text-red-700 mb-1">55%</div>
<div className="text-xs text-gray-600">10/18</div>
</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-gray-500 mb-2">Fri</div>
<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:border-gray-300 cursor-pointer transition-colors">
<div className="text-xs font-medium text-gray-600 mb-1">—</div>
<div className="text-xs text-gray-600">0/18</div>
</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-gray-500 mb-2">Sat</div>
<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:border-gray-300 cursor-pointer transition-colors">
<div className="text-xs font-medium text-gray-600 mb-1">—</div>
<div className="text-xs text-gray-600">0/16</div>
</div>
</div>
<div className="text-center">
<div className="text-xs font-medium text-gray-500 mb-2">Sun</div>
<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:border-gray-300 cursor-pointer transition-colors">
<div className="text-xs font-medium text-gray-600 mb-1">—</div>
<div className="text-xs text-gray-600">0/16</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
<div className="flex items-center gap-2 text-xs">
<div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div>
<span className="text-gray-600">Full (90-100%)</span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="w-3 h-3 bg-amber-100 border border-amber-200 rounded"></div>
<span className="text-gray-600">Partial (60-89%)</span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="w-3 h-3 bg-red-100 border border-red-200 rounded"></div>
<span className="text-gray-600">Critical (&lt;60%)</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="bg-white border border-gray-200 rounded-lg">
<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold">Financial Summary</h2>
</div>
<div className="p-6">
<div className="grid grid-cols-2 gap-6 mb-6">
<div>
<div className="text-xs font-medium text-gray-500 mb-1">Month Spend</div>
<div className="text-2xl font-semibold tracking-tight">£48,240</div>
<div className="text-xs text-green-600 mt-1">↓ 8% vs last month</div>
</div>
<div>
<div className="text-xs font-medium text-gray-500 mb-1">Budget vs Actual</div>
<div className="text-2xl font-semibold tracking-tight">89%</div>
<div className="text-xs text-gray-500 mt-1">£54,000 budget</div>
</div>
</div>
<div className="space-y-3 pt-4 border-t border-gray-200">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Outstanding Invoices</div>
<div className="text-sm font-medium">£12,450</div>
</div>
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Recent Payments</div>
<div className="text-sm font-medium text-green-600">£8,200</div>
</div>
</div>
<button className="w-full mt-6 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                    View Full Report
                                </button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg">
<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold">Recent Activity</h2>
</div>
<div className="divide-y divide-gray-200">
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="text-green-600" data-lucide="check" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">Shift approved</div>
<div className="text-xs text-gray-500 mt-0.5">Sarah Johnson • Night RN • Dec 20, 22:00-06:00</div>
<div className="text-xs text-gray-400 mt-1">2 minutes ago</div>
</div>
</div>
</div>
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="text-blue-600" data-lucide="user-plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">New application received</div>
<div className="text-xs text-gray-500 mt-0.5">Michael Brown • HCA • Dec 21, 14:00-22:00</div>
<div className="text-xs text-gray-400 mt-1">15 minutes ago</div>
</div>
</div>
</div>
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="text-purple-600" data-lucide="file-text" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">Timesheet submitted</div>
<div className="text-xs text-gray-500 mt-0.5">Emma Davis • 8 hours • Awaiting approval</div>
<div className="text-xs text-gray-400 mt-1">1 hour ago</div>
</div>
</div>
</div>
<div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="text-amber-600" data-lucide="plus-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium">Shift posted</div>
<div className="text-xs text-gray-500 mt-0.5">Night RN • Dec 22, 22:00-06:00 • £28/hr</div>
<div className="text-xs text-gray-400 mt-1">2 hours ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="post-shifts">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="bg-white border border-gray-200 rounded-lg">

<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold mb-6">Shift Basics</h2>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="date" value="2023-12-20"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Shift Type</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>Day Shift</option>
<option>Night Shift</option>
<option>Twilight</option>
<option>Long Day</option>
</select>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="time" value="08:00"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="time" value="20:00"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" readonly="" type="text" value="12 hours"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Worker Type</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>Registered Nurse</option>
<option>Healthcare Assistant</option>
<option>Senior Care Worker</option>
<option>Support Worker</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Skill Level</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>Entry Level</option>
<option>Intermediate</option>
<option>Advanced</option>
<option>Expert</option>
</select>
</div>
</div>
</div>
</div>

<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold mb-6">Requirements</h2>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" type="checkbox"/>
<span className="text-sm font-medium">Uniform Required</span>
</label>
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<input checked="" className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" type="checkbox"/>
<span className="text-sm font-medium">Medication Trained</span>
</label>
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" type="checkbox"/>
<span className="text-sm font-medium">First Aid</span>
</label>
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" type="checkbox"/>
<span className="text-sm font-medium">PMVA Certified</span>
</label>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Specialty Skills</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>None</option>
<option>Dementia Care</option>
<option>End of Life Care</option>
<option>Mental Health</option>
<option>Learning Disabilities</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
<textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Enter any additional requirements or information..." rows="3"></textarea>
</div>
</div>
</div>

<div className="p-6">
<h2 className="text-base font-semibold mb-6">Compensation</h2>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
<div className="relative">
<span className="absolute left-3 top-2 text-sm text-gray-500">£</span>
<input className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" step="0.50" type="number" value="28.00"/>
</div>
<div className="text-xs text-gray-500 mt-1">Suggested: £26-£32</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Break Duration</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>Unpaid - 30 min</option>
<option>Unpaid - 60 min</option>
<option>Paid - 30 min</option>
<option>Paid - 60 min</option>
</select>
</div>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Total Hours</span>
<span className="text-sm font-medium">11.5 hrs</span>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-600">Rate</span>
<span className="text-sm font-medium">£28.00/hr</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-gray-300">
<span className="text-base font-semibold">Total Cost</span>
<span className="text-base font-semibold">£322.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 mt-6">
<button className="flex-1 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                        Post Shift
                                    </button>
<button className="px-4 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                        Save Draft
                                    </button>
<button className="px-4 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                        Post Multiple
                                    </button>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white border border-gray-200 rounded-lg sticky top-8">
<div className="p-6 border-b border-gray-200 flex items-center justify-between">
<h2 className="text-base font-semibold">Templates</h2>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900">
<i data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="divide-y divide-gray-200">
<button className="w-full p-4 text-left hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between">
<div className="flex-1 min-w-0">
<div className="text-sm font-medium mb-1">Night RN Standard</div>
<div className="text-xs text-gray-500">22:00-06:00 • £28/hr • Medication</div>
</div>
<i className="text-gray-400 mt-0.5" data-lucide="chevron-right" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
</button>
<button className="w-full p-4 text-left hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between">
<div className="flex-1 min-w-0">
<div className="text-sm font-medium mb-1">Day HCA</div>
<div className="text-xs text-gray-500">08:00-20:00 • £16/hr • Basic</div>
</div>
<i className="text-gray-400 mt-0.5" data-lucide="chevron-right" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
</button>
<button className="w-full p-4 text-left hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between">
<div className="flex-1 min-w-0">
<div className="text-sm font-medium mb-1">Weekend Senior</div>
<div className="text-xs text-gray-500">12:00-20:00 • £22/hr • PMVA</div>
</div>
<i className="text-gray-400 mt-0.5" data-lucide="chevron-right" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
</button>
</div>
<div className="p-4">
<button className="w-full px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                            Manage Templates
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="manage-shifts">
<div className="bg-white border border-gray-200 rounded-lg">

<div className="border-b border-gray-200">
<div className="flex items-center px-6 overflow-x-auto">
<button className="shift-tab px-4 py-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900 whitespace-nowrap" data-tab="open">
                                    Open <span className="ml-1.5 px-2 py-0.5 bg-gray-100 text-xs rounded-full">24</span>
</button>
<button className="shift-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 whitespace-nowrap" data-tab="pending">
                                    Pending <span className="ml-1.5 px-2 py-0.5 bg-amber-100 text-xs rounded-full">12</span>
</button>
<button className="shift-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 whitespace-nowrap" data-tab="upcoming">
                                    Upcoming <span className="ml-1.5 px-2 py-0.5 bg-green-100 text-xs rounded-full">67</span>
</button>
<button className="shift-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 whitespace-nowrap" data-tab="progress">
                                    In Progress <span className="ml-1.5 px-2 py-0.5 bg-purple-100 text-xs rounded-full">8</span>
</button>
<button className="shift-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 whitespace-nowrap" data-tab="completed">
                                    Completed
                                </button>
<button className="shift-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 whitespace-nowrap" data-tab="cancelled">
                                    Cancelled
                                </button>
</div>
</div>

<div className="p-6 border-b border-gray-200">
<div className="flex items-center gap-4 flex-wrap">
<div className="flex-1 min-w-[300px]">
<div className="relative">
<i className="absolute left-3 top-2.5 text-gray-400" data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Search shifts..." type="text"/>
</div>
</div>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>All Shifts</option>
<option>Day Shift</option>
<option>Night Shift</option>
<option>Long Day</option>
</select>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>All Workers</option>
<option>RN</option>
<option>HCA</option>
<option>Senior</option>
</select>
<input className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="date"/>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
<i className="inline mr-2" data-lucide="filter" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                    More Filters
                                </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-gray-200 bg-gray-50">
<th className="px-6 py-3 text-left">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded" type="checkbox"/>
</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date &amp; Time</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Worker Type</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Worker</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded" type="checkbox"/>
</td>
<td className="px-6 py-4 text-sm font-medium">#2847</td>
<td className="px-6 py-4 text-sm">
<div className="font-medium">Dec 20, 2023</div>
<div className="text-gray-500">22:00 - 06:00</div>
</td>
<td className="px-6 py-4 text-sm">Registered Nurse</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Open</span>
</td>
<td className="px-6 py-4 text-sm text-gray-500">Unassigned</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="eye" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="edit-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="trash-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded" type="checkbox"/>
</td>
<td className="px-6 py-4 text-sm font-medium">#2846</td>
<td className="px-6 py-4 text-sm">
<div className="font-medium">Dec 21, 2023</div>
<div className="text-gray-500">08:00 - 16:00</div>
</td>
<td className="px-6 py-4 text-sm">Healthcare Assistant</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Pending</span>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex items-center gap-2">
<img alt="Worker" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<span>Sarah Johnson</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded hover:bg-green-700 transition-colors">
                                                    Approve
                                                </button>
<button className="px-3 py-1.5 border border-gray-300 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                                                    Reject
                                                </button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded" type="checkbox"/>
</td>
<td className="px-6 py-4 text-sm font-medium">#2845</td>
<td className="px-6 py-4 text-sm">
<div className="font-medium">Dec 19, 2023</div>
<div className="text-gray-500">14:00 - 22:00</div>
</td>
<td className="px-6 py-4 text-sm">Senior Care Worker</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Open</span>
</td>
<td className="px-6 py-4 text-sm text-gray-500">Unassigned</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="eye" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="edit-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="trash-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded" type="checkbox"/>
</td>
<td className="px-6 py-4 text-sm font-medium">#2844</td>
<td className="px-6 py-4 text-sm">
<div className="font-medium">Dec 22, 2023</div>
<div className="text-gray-500">22:00 - 06:00</div>
</td>
<td className="px-6 py-4 text-sm">Registered Nurse</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Urgent</span>
</td>
<td className="px-6 py-4 text-sm text-gray-500">Unassigned</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="eye" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="edit-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
<i data-lucide="trash-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-6 border-t border-gray-200 flex items-center justify-between">
<div className="text-sm text-gray-600">Showing 1-10 of 24 shifts</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                    Previous
                                </button>
<button className="px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg">1</button>
<button className="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">2</button>
<button className="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">3</button>
<button className="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                    Next
                                </button>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="timesheets">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-3">
<div className="bg-white border border-gray-200 rounded-lg">

<div className="border-b border-gray-200">
<div className="flex items-center px-6">
<button className="timesheet-tab px-4 py-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900" data-tab="pending">
                                            Pending Approval <span className="ml-1.5 px-2 py-0.5 bg-amber-100 text-xs rounded-full">5</span>
</button>
<button className="timesheet-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="processed">
                                            Processed
                                        </button>
</div>
</div>

<div className="p-6 space-y-4">
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-start gap-4 mb-4">
<img alt="Worker" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-semibold">Sarah Johnson</h3>
<span className="text-sm text-gray-500">#TS-2847</span>
</div>
<div className="text-sm text-gray-600 mb-2">Registered Nurse • Dec 18, 2023</div>
<div className="flex items-center gap-4 text-sm">
<span className="text-gray-600">22:00 - 06:00</span>
<span className="text-gray-400">•</span>
<span className="text-gray-600">Night Shift</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
<div>
<div className="text-xs font-medium text-gray-500 mb-1">Scheduled Hours</div>
<div className="text-lg font-semibold">8.0 hrs</div>
</div>
<div>
<div className="text-xs font-medium text-gray-500 mb-1">Claimed Hours</div>
<div className="text-lg font-semibold text-amber-600">8.5 hrs</div>
</div>
</div>
<div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
<div className="flex items-start gap-2">
<i className="text-amber-600 mt-0.5" data-lucide="info" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-amber-800 mb-1">Worker Note:</div>
<div className="text-xs text-amber-700">Shift extended by 30 minutes due to handover delay with incoming staff.</div>
</div>
</div>
</div>
<div className="mb-4">
<div className="text-xs font-medium text-gray-700 mb-2">Rate this shift:</div>
<div className="flex items-center gap-1">
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                                                Approve
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                                Query
                                            </button>
<button className="px-4 py-2 border border-red-300 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors">
                                                Reject
                                            </button>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-start gap-4 mb-4">
<img alt="Worker" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-semibold">Michael Brown</h3>
<span className="text-sm text-gray-500">#TS-2846</span>
</div>
<div className="text-sm text-gray-600 mb-2">Healthcare Assistant • Dec 18, 2023</div>
<div className="flex items-center gap-4 text-sm">
<span className="text-gray-600">08:00 - 20:00</span>
<span className="text-gray-400">•</span>
<span className="text-gray-600">Long Day</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
<div>
<div className="text-xs font-medium text-gray-500 mb-1">Scheduled Hours</div>
<div className="text-lg font-semibold">12.0 hrs</div>
</div>
<div>
<div className="text-xs font-medium text-gray-500 mb-1">Claimed Hours</div>
<div className="text-lg font-semibold text-green-600">12.0 hrs</div>
</div>
</div>
<div className="mb-4">
<div className="text-xs font-medium text-gray-700 mb-2">Rate this shift:</div>
<div className="flex items-center gap-1">
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
<button className="p-1 text-gray-300 hover:text-amber-400">
<i data-lucide="star" style={{width: '18px', height: '18px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                                                Approve
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                                Query
                                            </button>
<button className="px-4 py-2 border border-red-300 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors">
                                                Reject
                                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white border border-gray-200 rounded-lg sticky top-8">
<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold">Metrics</h2>
</div>
<div className="p-6 space-y-6">
<div>
<div className="text-xs font-medium text-gray-500 mb-2">Avg Processing Time</div>
<div className="text-2xl font-semibold tracking-tight">2.4 hrs</div>
<div className="text-xs text-green-600 mt-1">↓ 12% vs last week</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="text-xs font-medium text-gray-500 mb-2">Approval Rate</div>
<div className="text-2xl font-semibold tracking-tight">96%</div>
<div className="w-full bg-gray-200 rounded-full h-2 mt-2">
<div className="bg-green-600 h-2 rounded-full" style={{width: '96%'}}></div>
</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="text-xs font-medium text-gray-500 mb-3">This Week</div>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="text-gray-600">Approved</span>
<span className="font-medium">42</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Queried</span>
<span className="font-medium">3</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Rejected</span>
<span className="font-medium">1</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="workers">
<div className="bg-white border border-gray-200 rounded-lg">

<div className="border-b border-gray-200">
<div className="flex items-center px-6">
<button className="worker-tab px-4 py-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900" data-tab="core">
                                    Core/Regular <span className="ml-1.5 px-2 py-0.5 bg-gray-100 text-xs rounded-full">48</span>
</button>
<button className="worker-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="favorites">
                                    Favorites <span className="ml-1.5 px-2 py-0.5 bg-gray-100 text-xs rounded-full">12</span>
</button>
<button className="worker-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="barred">
                                    Barred <span className="ml-1.5 px-2 py-0.5 bg-gray-100 text-xs rounded-full">3</span>
</button>
</div>
</div>

<div className="p-6 border-b border-gray-200">
<div className="flex items-center gap-4 flex-wrap">
<div className="flex-1 min-w-[300px]">
<div className="relative">
<i className="absolute left-3 top-2.5 text-gray-400" data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Search workers..." type="text"/>
</div>
</div>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>All Skills</option>
<option>Medication</option>
<option>PMVA</option>
<option>First Aid</option>
</select>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>All Ratings</option>
<option>5 Stars</option>
<option>4+ Stars</option>
<option>3+ Stars</option>
</select>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
<i className="inline mr-2" data-lucide="sliders" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                    Advanced
                                </button>
</div>
</div>

<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all">
<div className="flex items-start gap-4 mb-4">
<img alt="Worker" className="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">Sarah Johnson</h3>
<div className="text-sm text-gray-600 mb-2">Registered Nurse</div>
<div className="flex items-center gap-1">
<i className="text-amber-400" data-lucide="star" style={{width: '14px', height: '14px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
<span className="text-sm font-medium">4.9</span>
<span className="text-xs text-gray-500">(127)</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5 mb-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Medication</span>
<span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">Dementia</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">First Aid</span>
</div>
<div className="space-y-2 text-sm mb-4">
<div className="flex items-center justify-between">
<span className="text-gray-600">Shifts Completed</span>
<span className="font-medium">127</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Last Shift</span>
<span className="font-medium">2 days ago</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                            View Profile
                                        </button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="message-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="calendar-plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all">
<div className="flex items-start gap-4 mb-4">
<img alt="Worker" className="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">Michael Brown</h3>
<div className="text-sm text-gray-600 mb-2">Healthcare Assistant</div>
<div className="flex items-center gap-1">
<i className="text-amber-400" data-lucide="star" style={{width: '14px', height: '14px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
<span className="text-sm font-medium">4.8</span>
<span className="text-xs text-gray-500">(94)</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5 mb-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">PMVA</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">First Aid</span>
</div>
<div className="space-y-2 text-sm mb-4">
<div className="flex items-center justify-between">
<span className="text-gray-600">Shifts Completed</span>
<span className="font-medium">94</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Last Shift</span>
<span className="font-medium">Yesterday</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                            View Profile
                                        </button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="message-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="calendar-plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all">
<div className="flex items-start gap-4 mb-4">
<img alt="Worker" className="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">Emma Davis</h3>
<div className="text-sm text-gray-600 mb-2">Senior Care Worker</div>
<div className="flex items-center gap-1">
<i className="text-amber-400" data-lucide="star" style={{width: '14px', height: '14px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
<span className="text-sm font-medium">5.0</span>
<span className="text-xs text-gray-500">(68)</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5 mb-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Medication</span>
<span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">Dementia</span>
<span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">EOL Care</span>
</div>
<div className="space-y-2 text-sm mb-4">
<div className="flex items-center justify-between">
<span className="text-gray-600">Shifts Completed</span>
<span className="font-medium">68</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Last Shift</span>
<span className="font-medium">1 week ago</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                            View Profile
                                        </button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="message-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="calendar-plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all">
<div className="flex items-start gap-4 mb-4">
<img alt="Worker" className="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">James Wilson</h3>
<div className="text-sm text-gray-600 mb-2">Support Worker</div>
<div className="flex items-center gap-1">
<i className="text-amber-400" data-lucide="star" style={{width: '14px', height: '14px', strokeWidth: '1.5', fill: 'currentColor'}}></i>
<span className="text-sm font-medium">4.7</span>
<span className="text-xs text-gray-500">(52)</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5 mb-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">PMVA</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Mental Health</span>
</div>
<div className="space-y-2 text-sm mb-4">
<div className="flex items-center justify-between">
<span className="text-gray-600">Shifts Completed</span>
<span className="font-medium">52</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-600">Last Shift</span>
<span className="font-medium">3 days ago</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                            View Profile
                                        </button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="message-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="calendar-plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="invoices">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-3">
<div className="bg-white border border-gray-200 rounded-lg">

<div className="border-b border-gray-200">
<div className="flex items-center px-6">
<button className="invoice-tab px-4 py-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900" data-tab="pending">
                                            Pending Payment <span className="ml-1.5 px-2 py-0.5 bg-red-100 text-xs rounded-full">8</span>
</button>
<button className="invoice-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="partial">
                                            Partially Paid <span className="ml-1.5 px-2 py-0.5 bg-amber-100 text-xs rounded-full">2</span>
</button>
<button className="invoice-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="paid">
                                            Paid
                                        </button>
<button className="invoice-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="disputed">
                                            Disputed
                                        </button>
</div>
</div>

<div className="divide-y divide-gray-200">
<div className="p-6 hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between mb-4">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-base font-semibold">INV-2847</h3>
<span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Due in 2 days</span>
</div>
<div className="text-sm text-gray-600">CareStaff Solutions Ltd</div>
</div>
<div className="text-right">
<div className="text-xl font-semibold tracking-tight">£2,450.00</div>
<div className="text-xs text-gray-500">Inc. VAT</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 text-sm mb-4">
<div>
<div className="text-xs text-gray-500 mb-1">Issue Date</div>
<div className="font-medium">Dec 1, 2023</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Due Date</div>
<div className="font-medium text-red-600">Dec 20, 2023</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Shifts</div>
<div className="font-medium">18 shifts</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                                Process Payment
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                                View Details
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
<i className="inline mr-2" data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                                Download
                                            </button>
</div>
</div>
<div className="p-6 hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between mb-4">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-base font-semibold">INV-2846</h3>
<span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Due tomorrow</span>
</div>
<div className="text-sm text-gray-600">Healthcare Heroes Agency</div>
</div>
<div className="text-right">
<div className="text-xl font-semibold tracking-tight">£3,280.00</div>
<div className="text-xs text-gray-500">Inc. VAT</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 text-sm mb-4">
<div>
<div className="text-xs text-gray-500 mb-1">Issue Date</div>
<div className="font-medium">Nov 28, 2023</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Due Date</div>
<div className="font-medium text-red-600">Dec 19, 2023</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Shifts</div>
<div className="font-medium">24 shifts</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                                Process Payment
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                                View Details
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
<i className="inline mr-2" data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                                Download
                                            </button>
</div>
</div>
<div className="p-6 hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between mb-4">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-base font-semibold">INV-2845</h3>
<span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Due in 5 days</span>
</div>
<div className="text-sm text-gray-600">Premier Care Staff</div>
</div>
<div className="text-right">
<div className="text-xl font-semibold tracking-tight">£1,890.00</div>
<div className="text-xs text-gray-500">Inc. VAT</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 text-sm mb-4">
<div>
<div className="text-xs text-gray-500 mb-1">Issue Date</div>
<div className="font-medium">Dec 3, 2023</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Due Date</div>
<div className="font-medium">Dec 23, 2023</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Shifts</div>
<div className="font-medium">14 shifts</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                                Process Payment
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                                View Details
                                            </button>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
<i className="inline mr-2" data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                                Download
                                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white border border-gray-200 rounded-lg sticky top-8">
<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold">Summary</h2>
</div>
<div className="p-6 space-y-6">
<div>
<div className="text-xs font-medium text-gray-500 mb-2">Outstanding Total</div>
<div className="text-2xl font-semibold tracking-tight text-red-600">£12,450</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="text-xs font-medium text-gray-500 mb-3">Due This Week</div>
<div className="text-lg font-semibold tracking-tight">£5,730</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="text-xs font-medium text-gray-500 mb-3">Monthly Spend</div>
<div className="h-32 flex items-end gap-1">
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '60%'}}></div>
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '75%'}}></div>
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '55%'}}></div>
<div className="flex-1 bg-gray-900 rounded-t" style={{height: '85%'}}></div>
</div>
<div className="text-xs text-gray-500 mt-2">£48,240 this month</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="text-xs font-medium text-gray-500 mb-2">Budget Usage</div>
<div className="text-lg font-semibold tracking-tight mb-2">89%</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-amber-500 h-2 rounded-full" style={{width: '89%'}}></div>
</div>
<div className="text-xs text-gray-500 mt-2">£6,000 remaining</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="incidents">
<div className="mb-6">
<button className="px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
<i className="inline mr-2" data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                            Report New Incident
                        </button>
</div>
<div className="bg-white border border-gray-200 rounded-lg">

<div className="border-b border-gray-200">
<div className="flex items-center px-6">
<button className="incident-tab px-4 py-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900" data-tab="reported">
                                    Reported <span className="ml-1.5 px-2 py-0.5 bg-red-100 text-xs rounded-full">3</span>
</button>
<button className="incident-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="investigating">
                                    Investigating <span className="ml-1.5 px-2 py-0.5 bg-amber-100 text-xs rounded-full">5</span>
</button>
<button className="incident-tab px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900" data-tab="resolved">
                                    Resolved
                                </button>
</div>
</div>

<div className="p-6 border-b border-gray-200">
<div className="flex items-center gap-4 flex-wrap">
<div className="flex-1 min-w-[300px]">
<div className="relative">
<i className="absolute left-3 top-2.5 text-gray-400" data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Search incidents..." type="text"/>
</div>
</div>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>All Types</option>
<option>Medication Error</option>
<option>Fall/Injury</option>
<option>Behavior</option>
<option>Safeguarding</option>
</select>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>All Severity</option>
<option>Critical</option>
<option>High</option>
<option>Medium</option>
<option>Low</option>
</select>
<input className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="date"/>
</div>
</div>

<div className="divide-y divide-gray-200">
<div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-red-600" data-lucide="alert-triangle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-base font-semibold">INC-2847</h3>
<span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Critical</span>
<span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Investigating</span>
</div>
<div className="text-sm text-gray-600">Medication Error</div>
</div>
<div className="text-sm text-gray-500">2 hours ago</div>
</div>
<p className="text-sm text-gray-700 mb-3">Incorrect dosage administered during evening medication round. Patient observed, vitals monitored.</p>
<div className="grid grid-cols-4 gap-4 text-sm">
<div>
<div className="text-xs text-gray-500 mb-1">Worker</div>
<div className="font-medium">Sarah Johnson</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Date &amp; Time</div>
<div className="font-medium">Dec 18, 21:30</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Investigator</div>
<div className="font-medium">John Smith</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Days Open</div>
<div className="font-medium">2 days</div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-amber-600" data-lucide="alert-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-base font-semibold">INC-2846</h3>
<span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">High</span>
<span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Reported</span>
</div>
<div className="text-sm text-gray-600">Fall/Injury</div>
</div>
<div className="text-sm text-gray-500">5 hours ago</div>
</div>
<p className="text-sm text-gray-700 mb-3">Resident slipped in bathroom. Minor bruising observed, no serious injury. Accident form completed.</p>
<div className="grid grid-cols-4 gap-4 text-sm">
<div>
<div className="text-xs text-gray-500 mb-1">Worker</div>
<div className="font-medium">Michael Brown</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Date &amp; Time</div>
<div className="font-medium">Dec 18, 14:15</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Investigator</div>
<div className="font-medium text-gray-400">Unassigned</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Days Open</div>
<div className="font-medium">1 day</div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-blue-600" data-lucide="users" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-base font-semibold">INC-2845</h3>
<span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Medium</span>
<span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Investigating</span>
</div>
<div className="text-sm text-gray-600">Behavior</div>
</div>
<div className="text-sm text-gray-500">1 day ago</div>
</div>
<p className="text-sm text-gray-700 mb-3">Verbal altercation between residents during lunch. De-escalated by staff. Both parties calm.</p>
<div className="grid grid-cols-4 gap-4 text-sm">
<div>
<div className="text-xs text-gray-500 mb-1">Worker</div>
<div className="font-medium">Emma Davis</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Date &amp; Time</div>
<div className="font-medium">Dec 17, 12:30</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Investigator</div>
<div className="font-medium">Jane Williams</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Days Open</div>
<div className="font-medium">3 days</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="reports">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
<option>Last 30 Days</option>
<option>Last 90 Days</option>
<option>This Year</option>
<option>Custom Range</option>
</select>
<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
<i className="inline mr-2" data-lucide="calendar" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                Compare Period
                            </button>
</div>
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
<i className="inline mr-2" data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                            Create Custom Report
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white border border-gray-200 rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-600">Shift Fill Rate</h3>
<i className="text-green-600" data-lucide="trending-up" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div className="relative w-32 h-32 mx-auto mb-4">
<svg className="w-full h-full transform -rotate-90">
<circle cx="64" cy="64" fill="none" r="56" stroke="#e5e7eb" strokeWidth="8"></circle>
<circle cx="64" cy="64" fill="none" r="56" stroke="#10b981" stroke-dasharray="351.86" stroke-dashoffset="35.186" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">90%</div>
</div>
</div>
</div>
<div className="text-xs text-gray-500 text-center">↑ 5% vs last month</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-600">Avg Time to Fill</h3>
<i className="text-blue-600" data-lucide="clock" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-2">4.2 hrs</div>
<div className="text-xs text-green-600 mb-4">↓ 18% improvement</div>
<div className="h-20 flex items-end gap-1">
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '60%'}}></div>
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '75%'}}></div>
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '50%'}}></div>
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '65%'}}></div>
<div className="flex-1 bg-gray-200 rounded-t" style={{height: '45%'}}></div>
<div className="flex-1 bg-blue-600 rounded-t" style={{height: '40%'}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-600">Worker Reliability</h3>
<i className="text-purple-600" data-lucide="user-check" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-2">96%</div>
<div className="text-xs text-gray-500 mb-4">Completion rate</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600">Completed</span>
<span className="font-medium">245</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600">No-shows</span>
<span className="font-medium text-red-600">8</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600">Late arrivals</span>
<span className="font-medium text-amber-600">12</span>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-600">Cost Analysis</h3>
<i className="text-amber-600" data-lucide="pound-sterling" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-2">£48,240</div>
<div className="text-xs text-gray-500 mb-4">This month</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600">Budget</span>
<span className="font-medium">£54,000</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-600">Remaining</span>
<span className="font-medium text-green-600">£5,760</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-amber-500 h-2 rounded-full" style={{width: '89%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg mb-8">
<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold">Standard Reports</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
<button className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-blue-600" data-lucide="calendar-check" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">Shift Fill Rate Report</h3>
<p className="text-sm text-gray-600 mb-2">Detailed analysis of shift coverage and fill rates by department and time period</p>
<div className="text-xs text-gray-500">Last generated: Dec 15, 2023</div>
</div>
</div>
</button>
<button className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-green-600" data-lucide="users" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">Worker Performance</h3>
<p className="text-sm text-gray-600 mb-2">Individual worker metrics including reliability, ratings, and shift completion</p>
<div className="text-xs text-gray-500">Last generated: Dec 16, 2023</div>
</div>
</div>
</button>
<button className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-amber-600" data-lucide="pound-sterling" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">Financial Summary</h3>
<p className="text-sm text-gray-600 mb-2">Cost breakdowns, budget tracking, and invoice status overview</p>
<div className="text-xs text-gray-500">Last generated: Dec 17, 2023</div>
</div>
</div>
</button>
<button className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all text-left">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-red-600" data-lucide="alert-triangle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-base font-semibold mb-1">Incident Analysis</h3>
<p className="text-sm text-gray-600 mb-2">Trends, severity distribution, and resolution times for all incidents</p>
<div className="text-xs text-gray-500">Last generated: Dec 18, 2023</div>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="section-content hidden p-8" id="settings">
<div className="max-w-4xl mx-auto">
<div className="bg-white border border-gray-200 rounded-lg">
<div className="p-6 border-b border-gray-200">
<h2 className="text-xl font-semibold">Settings</h2>
</div>
<div className="p-6">
<div className="space-y-6">
<div>
<h3 className="text-base font-semibold mb-4">Organization Details</h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="text" value="Sunrise Care Home"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="email" value="admin@sunrisecare.com"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" type="tel" value="+44 20 1234 5678"/>
</div>
</div>
</div>
</div>
<div className="pt-6 border-t border-gray-200">
<h3 className="text-base font-semibold mb-4">Notifications</h3>
<div className="space-y-3">
<label className="flex items-center gap-3">
<input checked="" className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" type="checkbox"/>
<span className="text-sm">Email notifications for new shift applications</span>
</label>
<label className="flex items-center gap-3">
<input checked="" className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" type="checkbox"/>
<span className="text-sm">Alert when shifts are unfilled 24 hours before</span>
</label>
<label className="flex items-center gap-3">
<input className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" type="checkbox"/>
<span className="text-sm">Daily summary reports</span>
</label>
</div>
</div>
<div className="pt-6 border-t border-gray-200">
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                            Save Changes
                                        </button>
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
