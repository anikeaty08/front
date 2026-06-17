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



        // Initialize Icons
        lucide.createIcons();

        // Navigation Logic
        function switchView(viewId) {
            const views = ['dashboard', 'orders', 'detail', 'crew', 'equipment', 'settings'];
            const navItems = ['nav-dashboard', 'nav-orders', 'nav-crew', 'nav-equipment', 'nav-settings'];

            // Hide all views
            views.forEach(id => {
                const el = document.getElementById(id + '-view');
                if (el) el.classList.add('hidden');
            });

            // Show selected view
            const selectedView = document.getElementById(viewId + '-view');
            if (selectedView) selectedView.classList.remove('hidden');

            // Reset all nav styles
            navItems.forEach(id => {
                const nav = document.getElementById(id);
                if (nav) {
                    nav.classList.remove('bg-blue-50', 'text-blue-700');
                    nav.classList.add('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
                    // Handle specific padding case for crew if needed, or rely on base classes
                }
            });

            // Highlight active nav
            const activeNav = document.getElementById('nav-' + (viewId === 'detail' ? 'orders' : viewId));
            if (activeNav) {
                activeNav.classList.remove('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
                activeNav.classList.add('bg-blue-50', 'text-blue-700');
            }
            
            // Mobile handling
            const sidebar = document.getElementById('sidebar');
            if (!sidebar.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
                toggleSidebar();
            }
        }

        // Sidebar Toggle
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        // Modal Logic
        function openModal(modalId) {
            document.getElementById(modalId).classList.remove('hidden');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
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
      

<div className="lg:hidden fixed top-0 w-full bg-white border-b border-slate-200 z-50 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold tracking-tighter">WQ</div>
<span className="font-semibold text-slate-900 tracking-tight">WeddingQuot.</span>
</div>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-md" onclick="toggleSidebar()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 z-40 flex flex-col pt-16 lg:pt-0" id="sidebar">
<div className="h-16 flex items-center px-6 border-b border-slate-100 hidden lg:flex">
<div className="flex font-bold text-white tracking-tighter bg-slate-900 w-8 h-8 rounded-lg mr-3 items-center justify-center">WQ</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight" style={{}}>Payal Studio</span>
</div>
<nav className="flex-1 overflow-y-auto pt-6 pr-4 pb-6 pl-4 space-y-1">
<a className="nav-item group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700" href="#" id="nav-dashboard" onclick="switchView('dashboard')">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                Dashboard
            </a>
<a className="nav-item group flex items-center gap-3 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium text-slate-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#" id="nav-orders" onclick="switchView('orders')">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
                Orders
            </a>
<a className="nav-item group flex items-center gap-3 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium text-slate-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#" id="nav-crew" onclick="switchView('crew')">
<svg className="lucide lucide-users w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Crew Management
            </a>
<a className="nav-item group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md" href="#" id="nav-equipment" onclick="switchView('equipment')">
<svg className="lucide lucide-camera w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                Equipment
            </a>
<div className="pt-6 mt-6 border-t border-slate-100">
<span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">System</span>
<a className="nav-item group flex items-center gap-3 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium text-slate-600 rounded-md mt-2 pt-2 pr-3 pb-2 pl-3" href="#" id="nav-settings" onclick="switchView('settings')">
<svg className="lucide lucide-settings w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Settings
                </a>
</div>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">JD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Vipul Patel</span>
<span className="text-xs text-slate-500">Owner</span>
</div>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 hidden lg:hidden" id="sidebarOverlay" onclick="toggleSidebar()"></div>

<main className="flex-1 lg:pl-64 flex flex-col h-screen overflow-hidden pt-14 lg:pt-0">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">
<div className="flex-1 max-w-lg">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search h-4 w-4 text-slate-400 group-focus-within:text-blue-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="block w-full pl-10 pr-3 py-1.5 border border-slate-200 rounded-md leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors" placeholder="Search orders, clients, or locations..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4 ml-4">
<button className="relative p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all active:scale-95" onclick="openModal('addOrderModal')">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    New Order
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto lg:p-8 bg-slate-50 pt-6 pr-6 pb-6 pl-6 space-y-8">

<div className="fade-in space-y-8" id="dashboard-view">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Total Revenue</p>
<p className="mt-1 text-2xl font-semibold text-slate-900 tracking-tight">₹2,50,000</p>
</div>
<div className="p-2 bg-emerald-50 rounded-lg">
<svg className="lucide lucide-trending-up w-5 h-5 text-emerald-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
<div className="mt-4 flex items-center text-xs text-emerald-600 font-medium">
<span>+12.5%</span>
<span className="text-slate-400 ml-1">from last month</span>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Pending Balance</p>
<p className="mt-1 text-2xl font-semibold text-slate-900 tracking-tight">₹85,000</p>
</div>
<div className="p-2 bg-amber-50 rounded-lg">
<svg className="lucide lucide-alert-circle w-5 h-5 text-amber-600" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
</div>
<div className="mt-4 flex items-center text-xs text-amber-600 font-medium">
<span>3 Payments</span>
<span className="text-slate-400 ml-1">overdue this week</span>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Upcoming Events</p>
<p className="mt-1 text-2xl font-semibold text-slate-900 tracking-tight">4</p>
</div>
<div className="p-2 bg-blue-50 rounded-lg">
<svg className="lucide lucide-calendar w-5 h-5 text-blue-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
</div>
<div className="mt-4 flex items-center text-xs text-blue-600 font-medium">
<span>Next: Dec 4th</span>
<span className="text-slate-400 ml-1">Patel Wedding</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group" onclick="switchView('detail')">
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Priya &amp; Rahul Wedding</h3>
<p className="text-sm text-slate-500 mt-1 flex items-center gap-1"><svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Palanpur, Gujarat</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                    Pending Balance
                                </span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
<div className="bg-white p-1.5 rounded border border-slate-200 text-center min-w-[3rem]">
<div className="text-[10px] text-red-500 uppercase font-bold">Dec</div>
<div className="text-lg font-bold text-slate-900 leading-none">04</div>
</div>
<div className="flex-1">
<div className="font-medium text-slate-900">Sangeet Ceremony</div>
<div className="text-xs text-slate-500">6:00 PM - 12:00 AM</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group" onclick="switchView('detail')">
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Amit &amp; Sneha Reception</h3>
<p className="text-sm text-slate-500 mt-1 flex items-center gap-1"><svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Ahmedabad, City Club</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                    Fully Paid
                                </span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
<div className="bg-white p-1.5 rounded border border-slate-200 text-center min-w-[3rem]">
<div className="text-[10px] text-red-500 uppercase font-bold">Dec</div>
<div className="text-lg font-bold text-slate-900 leading-none">07</div>
</div>
<div className="flex-1">
<div className="font-medium text-slate-900">Grand Reception</div>
<div className="text-xs text-slate-500">7:00 PM - 12:00 AM</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in space-y-6" id="orders-view">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Order Management</h1>
<p className="text-sm text-slate-500 mt-1">Manage quotations, invoices and deliverables.</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-all">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            Export
                        </button>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm transition-all" onclick="openModal('addOrderModal')">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            New Order
                        </button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500 tracking-wider">
<th className="px-6 py-4 w-12">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
</th>
<th className="px-6 py-4">Order Details</th>
<th className="px-6 py-4">Event Date</th>
<th className="px-6 py-4">Value</th>
<th className="px-6 py-4">Payment</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer" onclick="switchView('detail')">
<td className="px-6 py-4" onclick="event.stopPropagation()">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">PR</div>
<div>
<div className="font-medium text-slate-900">Priya &amp; Rahul</div>
<div className="text-xs text-slate-500">#ORD-2491 • Palanpur</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-slate-600">
                                        Dec 04, 2023
                                        <span className="block text-xs text-slate-400">2 Days Event</span>
</td>
<td className="px-6 py-4 font-medium text-slate-900">₹2,50,000</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Partial
                                        </span>
</td>
<td className="px-6 py-4">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">Confirmed</span>
</td>
<td className="px-6 py-4 text-right" onclick="event.stopPropagation()">
<button className="p-1 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-200">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">AS</div>
<div>
<div className="font-medium text-slate-900">Amit &amp; Sneha</div>
<div className="text-xs text-slate-500">#ORD-2488 • Ahmedabad</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-slate-600">
                                        Nov 28, 2023
                                        <span className="block text-xs text-slate-400">Reception Only</span>
</td>
<td className="px-6 py-4 font-medium text-slate-900">₹80,000</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Paid
                                        </span>
</td>
<td className="px-6 py-4">
<span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">Editing</span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-1 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-200">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="hidden fade-in space-y-6" id="crew-view">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Crew Management</h1>
<p className="text-sm text-slate-500 mt-1">Manage team availability and assignments.</p>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all flex items-center gap-2">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                        Add Member
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-600">AK</div>
<div>
<h3 className="font-semibold text-slate-900">Amit Kumar</h3>
<p className="text-xs text-slate-500">Lead Photographer</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">Available</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-4 text-sm">
<div>
<p className="text-xs text-slate-400">Next Event</p>
<p className="font-medium text-slate-900">Dec 04</p>
</div>
<div>
<p className="text-xs text-slate-400">Events this Month</p>
<p className="font-medium text-slate-900">5 Events</p>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 text-xs font-medium py-2 rounded border border-slate-200 hover:bg-slate-50 text-slate-600">View Schedule</button>
<button className="flex-1 text-xs font-medium py-2 rounded bg-slate-900 text-white hover:bg-slate-800">Assign</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-600">RS</div>
<div>
<h3 className="font-semibold text-slate-900">Ravi Singh</h3>
<p className="text-xs text-slate-500">Cinematographer</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-100">Busy</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-4 text-sm">
<div>
<p className="text-xs text-slate-400">Current Location</p>
<p className="font-medium text-slate-900">Udaipur</p>
</div>
<div>
<p className="text-xs text-slate-400">Return Date</p>
<p className="font-medium text-slate-900">Dec 02</p>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 text-xs font-medium py-2 rounded border border-slate-200 hover:bg-slate-50 text-slate-600">View Schedule</button>
<button className="flex-1 text-xs font-medium py-2 rounded border border-slate-200 text-slate-400 cursor-not-allowed">Assign</button>
</div>
</div>
</div>
</div>

<div className="hidden fade-in space-y-6" id="equipment-view">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Equipment Inventory</h1>
<p className="text-sm text-slate-500 mt-1">Track gear status, repairs and assignments.</p>
</div>
<div className="flex gap-3">
<div className="relative">
<input className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none" placeholder="Search gear..." type="text"/>
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-2.5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all">Add Gear</button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-semibold text-slate-600">Equipment Name</th>
<th className="px-6 py-3 font-semibold text-slate-600">Category</th>
<th className="px-6 py-3 font-semibold text-slate-600">Serial No.</th>
<th className="px-6 py-3 font-semibold text-slate-600">Status</th>
<th className="px-6 py-3 font-semibold text-slate-600 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-900">Sony A7IV Body</td>
<td className="px-6 py-4 text-slate-500">Camera</td>
<td className="px-6 py-4 text-slate-500 font-mono text-xs">SN-892210</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700">In Stock</span></td>
<td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline text-xs">Check Out</button></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-900">Sony GM 85mm f/1.4</td>
<td className="px-6 py-4 text-slate-500">Lens</td>
<td className="px-6 py-4 text-slate-500 font-mono text-xs">SN-110293</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700">In Stock</span></td>
<td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline text-xs">Check Out</button></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-900">DJI Mavic 3 Cine</td>
<td className="px-6 py-4 text-slate-500">Drone</td>
<td className="px-6 py-4 text-slate-500 font-mono text-xs">DJI-99281</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-50 text-red-700">Rented Out</span></td>
<td className="px-6 py-4 text-right"><span className="text-slate-400 text-xs">Due Dec 05</span></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-900">Godox AD400 Pro</td>
<td className="px-6 py-4 text-slate-500">Lighting</td>
<td className="px-6 py-4 text-slate-500 font-mono text-xs">GX-44021</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-700">Maintenance</span></td>
<td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline text-xs">Log Return</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden fade-in space-y-8 max-w-4xl" id="settings-view">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Settings</h1>
<p className="text-sm text-slate-500 mt-1">Manage your company profile and application preferences.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="border-b border-slate-200">
<nav aria-label="Tabs" className="flex gap-6 px-6">
<button className="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">General Profile</button>
<button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300">Billing</button>
<button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300">Notifications</button>
</nav>
</div>
<div className="p-6 space-y-6">
<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
<div className="sm:col-span-4">
<label className="block text-sm font-medium text-slate-700">Company Name</label>
<div className="mt-1">
<input className="block w-full rounded-md border-slate-300 border p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" id="company" name="company" type="text" value="WeddingQuot Studios"/>
</div>
</div>
<div className="sm:col-span-6">
<label className="block text-sm font-medium text-slate-700">About</label>
<div className="mt-1">
<textarea className="block w-full rounded-md border border-slate-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" id="about" name="about" rows="3">Premium wedding photography and cinematography services based in Gujarat.</textarea>
</div>
<p className="mt-2 text-xs text-slate-500">Brief description for your quotations.</p>
</div>
<div className="sm:col-span-3">
<label className="block text-sm font-medium text-slate-700">Email Address</label>
<div className="mt-1">
<input className="block w-full rounded-md border-slate-300 border p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" type="email" value="contact@weddingquot.com"/>
</div>
</div>
<div className="sm:col-span-3">
<label className="block text-sm font-medium text-slate-700">Phone</label>
<div className="mt-1">
<input className="block w-full rounded-md border-slate-300 border p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" type="text" value="+91 98765 43210"/>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-6">
<div className="flex items-center justify-end gap-x-6">
<button className="text-sm font-semibold leading-6 text-slate-900" type="button">Cancel</button>
<button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="submit">Save Changes</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in pb-12" id="detail-view">

<div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
<button className="hover:text-slate-900 flex items-center gap-1" onclick="switchView('orders')">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> Back to Orders
                    </button>
<span>/</span>
<span className="font-medium text-slate-900">#ORD-2491</span>
</div>

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Priya &amp; Rahul Wedding</h1>
<div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
<span className="flex items-center gap-1"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Palanpur, Gujarat</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +91 98765 43210</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> priya.weds.rahul@gmail.com</span>
</div>
</div>
<div className="text-right">
<p className="text-sm text-slate-500">Total Package Value</p>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">₹2,50,000</p>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 space-y-8">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
<h2 className="font-semibold text-slate-900 flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-slate-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Event Schedule &amp; Crew
                                </h2>
<button className="text-xs font-medium text-blue-600 hover:underline" onclick="switchView('crew')">Edit Assignment</button>
</div>

<div className="p-6">
<div className="flex items-center gap-3 mb-6">
<div className="bg-slate-900 text-white px-3 py-1 rounded text-center">
<div className="text-xs font-bold uppercase tracking-wider">Dec</div>
<div className="text-lg font-bold leading-none">04</div>
</div>
<div>
<h3 className="font-medium text-slate-900">Main Wedding Ceremony</h3>
<p className="text-xs text-slate-500">Full day coverage • 9:00 AM Start</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Assigned Crew</h4>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-camera w-4 h-4 text-slate-400" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-slate-700">Lead Photographer</span>
</div>
<span className="font-medium text-slate-900">Amit K.</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-video w-4 h-4 text-slate-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="text-slate-700">Cinematographer</span>
</div>
<span className="font-medium text-slate-900">Raj M.</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-aperture w-4 h-4 text-slate-400" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="text-slate-700">Candid Shooter</span>
</div>
<span className="font-medium text-slate-900">Sneha P.</span>
</li>
</ul>
</div>

<div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
<h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">Extra Requirements</h4>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-blue-900">
<svg className="lucide lucide-check-square w-4 h-4 text-blue-500" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                LED Screen (8x12)
                                            </li>
<li className="flex items-center gap-2 text-sm text-blue-900">
<svg className="lucide lucide-check-square w-4 h-4 text-blue-500" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                Live Streaming Setup
                                            </li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-film w-4 h-4 text-slate-400" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg> Post-Production Status
                            </h2>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-slate-100 pb-3">
<div className="flex items-center gap-3">
<input checked="" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-700 font-medium">FHD Edit Video (3 Hours)</span>
</div>
<span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-md font-medium">Completed</span>
</div>
<div className="flex items-center justify-between border-b border-slate-100 pb-3">
<div className="flex items-center gap-3">
<input className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-700 font-medium">Cinematic Highlight (5 Min)</span>
</div>
<span className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded-md font-medium">In Progress</span>
</div>
</div>
</div>
</div>

<div className="space-y-8">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h2 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
<svg className="lucide lucide-credit-card w-4 h-4 text-slate-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Payment Milestones
                            </h2>
<div className="relative pl-2">

<div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-slate-100"></div>

<div className="relative flex gap-4 mb-8">
<div className="relative z-10 flex-none w-6 h-6 rounded-full bg-emerald-500 border-2 border-white shadow-sm flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-white stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1 -mt-0.5">
<div className="flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Booking Advance</h3>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Paid</span>
</div>
<p className="text-xs text-slate-500 mt-1">30% - ₹75,000</p>
<p className="text-[10px] text-slate-400 mt-0.5">Received on Oct 15</p>
</div>
</div>

<div className="relative flex gap-4 mb-8">
<div className="relative z-10 flex-none w-6 h-6 rounded-full bg-white border-2 border-blue-500 shadow-sm flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
<div className="flex-1 -mt-0.5">
<div className="flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Before Wedding</h3>
<span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Due Today</span>
</div>
<p className="text-xs text-slate-500 mt-1">50% - ₹1,25,000</p>
</div>
</div>
</div>
</div>

<div className="bg-amber-50 rounded-xl border border-amber-100 p-5 relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
<svg className="lucide lucide-shield-alert w-4 h-4" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg> Data Responsibility
                                </h3>
<p className="text-xs text-amber-800 leading-relaxed mb-4">
                                    Company liability for raw data ends on (3 Months). Post-deadline, technical hard drive issues are client's responsibility.
                                </p>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all">
<svg className="lucide lucide-printer w-5 h-5" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg>
<span className="text-xs font-medium">Print Quote</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="text-xs font-medium">Share PDF</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center" id="addOrderModal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeModal('addOrderModal')"></div>
<div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden transform transition-all">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
<h3 className="font-semibold text-slate-900">Create New Order</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeModal('addOrderModal')"><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="p-6 space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Client Name</label>
<input className="w-full text-sm border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2 border" placeholder="e.g. Anjali &amp; Vikram" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Event Date</label>
<input className="w-full text-sm border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2 border" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Location</label>
<input className="w-full text-sm border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2 border" placeholder="City" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Package Value (INR)</label>
<input className="w-full text-sm border-slate-200 rounded-md focus:ring-blue-500 focus:border-blue-500 p-2 border" placeholder="2,50,000" type="number"/>
</div>
</div>
<div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50" onclick="closeModal('addOrderModal')">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-sm">Create Order</button>
</div>
</div>
</div>


    </>
  );
}
