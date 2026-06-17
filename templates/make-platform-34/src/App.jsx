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



        // Navigation Logic
        function switchTab(tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            
            // Show target
            const target = document.getElementById(tabId);
            if(target) target.classList.remove('hidden');
            else console.warn('Tab ID not found:', tabId);

            // Update Sidebar Active State
            document.querySelectorAll('.nav-item').forEach(item => {
                const icon = item.querySelector('.icon-nav');
                item.classList.remove('bg-slate-100', 'text-indigo-700');
                item.classList.add('text-slate-600');
                if(icon) {
                    icon.classList.remove('text-indigo-600');
                    icon.classList.add('text-slate-400');
                }

                if(item.dataset.target === tabId) {
                    item.classList.remove('text-slate-600');
                    item.classList.add('bg-slate-100', 'text-indigo-700');
                    if(icon) {
                        icon.classList.remove('text-slate-400');
                        icon.classList.add('text-indigo-600');
                    }
                }
            });

            // Update Header Title
            const titles = {
                'dashboard': 'Overview',
                'rfqs': 'RFQs & Tenders',
                'rfq-create': 'New RFQ',
                'orders': 'Purchase Orders',
                'vendors': 'Vendor Directory',
                'settings': 'Access Control & Settings',
                'reports': 'Analytics',
                'approvals': 'Approvals Queue',
                'proposals': 'Proposal Analysis',
                'contracts': 'Contracts Repository'
            };
            const headerTitle = document.getElementById('header-title');
            if(headerTitle) headerTitle.textContent = titles[tabId] || 'Portal';

            // Scroll to top
            document.getElementById('main-scroll').scrollTop = 0;
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            switchTab('dashboard');
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
      

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col z-20 h-full flex-shrink-0 relative">

<div className="h-14 flex items-center px-5 border-b border-slate-100">
<div className="flex items-center gap-2 text-indigo-700">
<div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:hexagon" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">NEXUS<span className="text-slate-400 font-normal">PROCURE</span></span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5" id="sidebar-nav">
<div className="px-3 mb-2 mt-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Workspace</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-slate-100 text-indigo-700 rounded-md group transition-all" data-target="dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="icon-nav text-indigo-600" icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
                Overview
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md group transition-all" data-target="rfqs" onclick="switchTab('rfqs')">
<iconify-icon className="icon-nav text-slate-400 group-hover:text-slate-600" icon="lucide:files" strokeWidth="1.5" width="16"></iconify-icon>
                RFQs &amp; Tenders
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md group transition-all" data-target="orders" onclick="switchTab('orders')">
<iconify-icon className="icon-nav text-slate-400 group-hover:text-slate-600" icon="lucide:shopping-cart" strokeWidth="1.5" width="16"></iconify-icon>
                Purchase Orders
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md group transition-all" data-target="approvals" onclick="switchTab('approvals')">
<iconify-icon className="icon-nav text-slate-400 group-hover:text-slate-600" icon="lucide:check-circle-2" strokeWidth="1.5" width="16"></iconify-icon>
                Approvals
                <span className="ml-auto bg-indigo-50 text-indigo-600 py-0.5 px-1.5 rounded-md text-[10px] font-bold">3</span>
</button>
<div className="px-3 mt-6 mb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Network</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md group transition-all" data-target="vendors" onclick="switchTab('vendors')">
<iconify-icon className="icon-nav text-slate-400 group-hover:text-slate-600" icon="lucide:building-2" strokeWidth="1.5" width="16"></iconify-icon>
                Vendor Directory
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md group transition-all" data-target="contracts" onclick="switchTab('contracts')">
<iconify-icon className="icon-nav text-slate-400 group-hover:text-slate-600" icon="lucide:scroll-text" strokeWidth="1.5" width="16"></iconify-icon>
                Contracts
            </button>
<div className="px-3 mt-6 mb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Admin &amp; Analytics</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md group transition-all" data-target="reports" onclick="switchTab('reports')">
<iconify-icon className="icon-nav text-slate-400 group-hover:text-slate-600" icon="lucide:bar-chart-3" strokeWidth="1.5" width="16"></iconify-icon>
                Reporting
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md group transition-all" data-target="settings" onclick="switchTab('settings')">
<iconify-icon className="icon-nav text-slate-400 group-hover:text-slate-600" icon="lucide:shield-check" strokeWidth="1.5" width="16"></iconify-icon>
                Access &amp; Roles
            </button>
</nav>

<div className="p-3 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-50 transition-colors text-left group" onclick="switchTab('settings')">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 border border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-600">EM</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-slate-900 truncate">Elvin Mammadov</p>
<p className="text-[10px] text-slate-500 truncate">Senior Procurement Lead</p>
</div>
<iconify-icon className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50/50">

<header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shrink-0">

<div className="flex items-center gap-2 text-xs">
<span className="text-slate-400 hover:text-slate-600 cursor-pointer">Portal</span>
<iconify-icon className="text-slate-300" icon="lucide:chevron-right" width="10"></iconify-icon>
<span className="font-medium text-slate-900" id="header-title">Dashboard</span>
</div>

<div className="flex items-center gap-3">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" icon="lucide:search" width="14"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 bg-slate-100 border-transparent focus:bg-white border focus:border-indigo-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 w-64 transition-all text-slate-900 placeholder:text-slate-400" placeholder="Search RFQs, Vendors, POs..." type="text"/>
<div className="absolute right-2 top-2 text-[10px] text-slate-400 border border-slate-200 rounded px-1 hidden group-focus-within:block bg-white">⌘K</div>
</div>
<div className="h-4 w-px bg-slate-200 mx-1"></div>
<button className="relative text-slate-500 hover:text-indigo-600 transition-colors p-1.5 rounded-md hover:bg-slate-50">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-white"></span>
</button>
<button className="text-slate-500 hover:text-indigo-600 transition-colors p-1.5 rounded-md hover:bg-slate-50">
<iconify-icon icon="lucide:help-circle" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth" id="main-scroll">

<div className="tab-content space-y-6" id="dashboard">
<div className="flex justify-between items-end">
<div>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Overview</h1>
<p className="text-xs text-slate-500 mt-1">Welcome back, here's what's happening in your procurement workspace today.</p>
</div>
<div className="flex gap-2">
<select className="text-xs bg-white border border-slate-200 rounded-md px-2 py-1.5 text-slate-600 focus:outline-none">
<option>Last 30 Days</option>
<option>This Quarter</option>
<option>YTD</option>
</select>
<button className="text-xs font-medium bg-indigo-600 text-white px-3 py-1.5 rounded-md shadow-sm hover:bg-indigo-700 transition-colors flex items-center gap-1.5" onclick="switchTab('rfqs')">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> New Request
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><iconify-icon icon="lucide:file-clock" width="18"></iconify-icon></div>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+12%</span>
</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">24</div>
<div className="text-xs text-slate-500">Active RFQs</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><iconify-icon icon="lucide:alert-circle" width="18"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-500">Urgent</span>
</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">3</div>
<div className="text-xs text-slate-500">Pending Approvals</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><iconify-icon icon="lucide:truck" width="18"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-500">Logistics</span>
</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">18</div>
<div className="text-xs text-slate-500">In-Transit Orders</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><iconify-icon icon="lucide:wallet" width="18"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-500">Spend</span>
</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">$142k</div>
<div className="text-xs text-slate-500">Total Spend (Oct)</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Recent Activity</h3>
<button className="text-xs text-indigo-600 font-medium hover:underline" onclick="switchTab('rfqs')">View All RFQs</button>
</div>
<div className="divide-y divide-slate-100">

<div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer" onclick="switchTab('orders')">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
<iconify-icon icon="lucide:package-check" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900">Delivery Confirmed: PO-2023-992</p>
<p className="text-xs text-slate-500">TechSource Inc. • Office Monitors</p>
</div>
<span className="text-xs text-slate-400">2h ago</span>
</div>

<div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer" onclick="switchTab('proposals')">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon icon="lucide:file-input" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900">New Proposal Received</p>
<p className="text-xs text-slate-500">Global Logistics Ltd applied to "Q4 Transport"</p>
</div>
<span className="text-xs text-slate-400">5h ago</span>
</div>

<div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer" onclick="switchTab('approvals')">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
<iconify-icon icon="lucide:user-check" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900">Approval Required: New Vendor</p>
<p className="text-xs text-slate-500">SoftServe Systems waiting for compliance check</p>
</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 shadow-sm">Review</button>
<span className="text-xs text-slate-400">1d ago</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4">My Tasks</h3>
<div className="space-y-3">
<label className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 cursor-pointer transition-colors">
<input className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<div>
<p className="text-sm font-medium text-slate-700">Approve Budget for IT</p>
<p className="text-[10px] text-slate-400">Due Today</p>
</div>
</label>
<label className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 cursor-pointer transition-colors">
<input className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<div>
<p className="text-sm font-medium text-slate-700">Review Compliance Docs</p>
<p className="text-[10px] text-slate-400">Due Tomorrow</p>
</div>
</label>
<label className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 cursor-pointer transition-colors">
<input checked="" className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<div>
<p className="text-sm font-medium text-slate-500 line-through">Send RFP Invitations</p>
<p className="text-[10px] text-slate-400">Completed</p>
</div>
</label>
</div>
<button className="w-full mt-4 text-xs text-indigo-600 font-medium py-2 border border-dashed border-indigo-200 rounded-lg hover:bg-indigo-50">+ Add Task</button>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="rfqs">
<div className="flex justify-between items-center">
<h2 className="text-lg font-semibold text-slate-900">RFQs &amp; Tenders</h2>
<div className="flex gap-2">
<div className="relative">
<input className="pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 w-48" placeholder="Filter by ID, Title..." type="text"/>
<iconify-icon className="absolute left-2.5 top-2 text-slate-400" icon="lucide:search" width="14"></iconify-icon>
</div>
<button className="px-3 py-1.5 text-xs font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700" onclick="switchTab('rfq-create')">Create RFQ</button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">
<tr>
<th className="px-6 py-3 w-16">ID</th>
<th className="px-6 py-3">Title</th>
<th className="px-6 py-3">Category</th>
<th className="px-6 py-3">Deadline</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Proposals</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 cursor-pointer group" onclick="switchTab('proposals')">
<td className="px-6 py-3 text-slate-500 font-mono text-xs">#RFQ-902</td>
<td className="px-6 py-3">
<div className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">IT Infrastructure Upgrade</div>
<div className="text-xs text-slate-400">Hardware • HQ</div>
</td>
<td className="px-6 py-3 text-slate-600 text-xs">IT Equipment</td>
<td className="px-6 py-3 text-slate-600 text-xs">Nov 15, 2023</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100 uppercase">Open</span></td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<span className="text-xs text-slate-500 font-medium">3</span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 cursor-pointer group">
<td className="px-6 py-3 text-slate-500 font-mono text-xs">#RFQ-881</td>
<td className="px-6 py-3">
<div className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Office Supplies Q4</div>
<div className="text-xs text-slate-400">Stationery • Operations</div>
</td>
<td className="px-6 py-3 text-slate-600 text-xs">General Supplies</td>
<td className="px-6 py-3 text-slate-600 text-xs">Oct 30, 2023</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200 uppercase">Closed</span></td>
<td className="px-6 py-3 text-right">
<span className="text-xs text-slate-400">5 Proposals</span>
</td>
</tr>
<tr className="hover:bg-slate-50 cursor-pointer group" onclick="switchTab('rfq-create')">
<td className="px-6 py-3 text-slate-500 font-mono text-xs">#RFQ-905</td>
<td className="px-6 py-3">
<div className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Cloud Migration Services</div>
<div className="text-xs text-slate-400">Services • Global</div>
</td>
<td className="px-6 py-3 text-slate-600 text-xs">Professional Svcs</td>
<td className="px-6 py-3 text-slate-600 text-xs">Dec 01, 2023</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100 uppercase">Draft</span></td>
<td className="px-6 py-3 text-right">
<span className="text-xs text-slate-400">-</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden max-w-4xl mx-auto space-y-6" id="rfq-create">
<div className="flex items-center gap-3">
<button className="p-1 rounded-md hover:bg-slate-200 text-slate-500" onclick="switchTab('rfqs')"><iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon></button>
<h2 className="text-lg font-semibold text-slate-900">Create New RFQ</h2>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Title</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="e.g. Annual Software Licensing 2024" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Internal Department</label>
<select className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none">
<option>Information Technology</option>
<option>Marketing</option>
<option>Operations</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Budget Allocation Code</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" type="text" value="IT-2023-OPEX-004"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Submission Deadline</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" type="date"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Access Level</label>
<select className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none">
<option>Public (Open Tender)</option>
<option>Invite Only (Restricted)</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Description &amp; Requirements</label>
<textarea className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none resize-none" placeholder="Detailed specifications..." rows="4"></textarea>
</div>
<div className="border-t border-slate-100 pt-5 flex justify-end gap-3">
<button className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 border border-slate-200 rounded-lg" onclick="switchTab('rfqs')" type="button">Save Draft</button>
<button className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm" onclick="switchTab('rfqs')" type="button">Publish RFQ</button>
</div>
</form>
</div>
</div>

<div className="tab-content hidden space-y-6" id="proposals">
<div className="flex items-center gap-3 mb-2">
<button className="text-slate-400 hover:text-slate-600" onclick="switchTab('rfqs')"><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon></button>
<div>
<h2 className="text-lg font-semibold text-slate-900">Bid Comparison</h2>
<p className="text-xs text-slate-500">RFQ-902: IT Infrastructure Upgrade</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="lg:col-span-1 space-y-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Evaluation Criteria</h3>
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-600"><span>Price (40%)</span> <span>Auto</span></div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="bg-slate-400 h-full w-2/5"></div></div>
<div className="flex justify-between text-xs text-slate-600 mt-2"><span>Tech Spec (30%)</span> <span>Manual</span></div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="bg-slate-400 h-full w-3/10"></div></div>
<div className="flex justify-between text-xs text-slate-600 mt-2"><span>Timeline (20%)</span> <span>Auto</span></div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="bg-slate-400 h-full w-1/5"></div></div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead>
<tr className="bg-slate-50 border-b border-slate-200">
<th className="px-6 py-4 font-medium text-slate-500 w-1/4">Feature</th>
<th className="px-6 py-4 w-1/4 bg-indigo-50/40 border-x border-indigo-100">
<div className="font-bold text-slate-900">TechSource Inc.</div>
<div className="text-[10px] text-emerald-600 font-bold uppercase mt-1">Top Match</div>
</th>
<th className="px-6 py-4 w-1/4">
<div className="font-bold text-slate-900">Global Systems</div>
</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-600">Total Cost</td>
<td className="px-6 py-4 font-bold text-emerald-700 bg-indigo-50/40 border-x border-indigo-100">$142,500</td>
<td className="px-6 py-4 text-slate-900">$158,200</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-600">Delivery Time</td>
<td className="px-6 py-4 text-slate-800 bg-indigo-50/40 border-x border-indigo-100">14 Days</td>
<td className="px-6 py-4 text-slate-800">21 Days</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-600">Warranty</td>
<td className="px-6 py-4 text-slate-800 bg-indigo-50/40 border-x border-indigo-100">3 Years (On-site)</td>
<td className="px-6 py-4 text-slate-800">2 Years (Standard)</td>
</tr>
<tr className="bg-slate-50 border-t border-slate-200">
<td className="px-6 py-4 font-medium text-slate-600">Action</td>
<td className="px-6 py-4 bg-indigo-50/40 border-x border-indigo-100">
<button className="w-full py-1.5 bg-indigo-600 text-white text-xs font-medium rounded shadow-sm hover:bg-indigo-700" onclick="switchTab('orders')">Award Contract</button>
</td>
<td className="px-6 py-4">
<button className="w-full py-1.5 bg-white border border-slate-300 text-slate-600 text-xs font-medium rounded hover:bg-slate-50">View Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="orders">
<div className="flex justify-between items-center">
<h2 className="text-lg font-semibold text-slate-900">Purchase Orders</h2>
<button className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 text-slate-600 rounded-md hover:bg-slate-50">Export Report</button>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-6">
<div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-6">
<div>
<div className="flex items-center gap-3">
<h3 className="text-lg font-bold text-slate-900">PO-2023-992</h3>
<span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">In Transit</span>
</div>
<p className="text-xs text-slate-500 mt-1">Vendor: TechSource Inc. • Amount: $12,500</p>
</div>
<button className="text-xs text-indigo-600 font-medium hover:underline">Download Invoice</button>
</div>
<div className="relative">
<div className="absolute top-3 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="absolute top-3 left-0 w-2/3 h-0.5 bg-indigo-600 -z-10"></div>
<div className="flex justify-between text-xs">
<div className="text-center w-20">
<div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-2 ring-4 ring-white"><iconify-icon icon="lucide:check" width="14"></iconify-icon></div>
<span className="font-medium text-slate-900">Created</span>
<div className="text-[10px] text-slate-400">Oct 20</div>
</div>
<div className="text-center w-20">
<div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-2 ring-4 ring-white"><iconify-icon icon="lucide:check" width="14"></iconify-icon></div>
<span className="font-medium text-slate-900">Approved</span>
<div className="text-[10px] text-slate-400">Oct 21</div>
</div>
<div className="text-center w-20">
<div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-2 ring-4 ring-white"><iconify-icon icon="lucide:truck" width="14"></iconify-icon></div>
<span className="font-medium text-slate-900">Shipped</span>
<div className="text-[10px] text-slate-400">Oct 24</div>
</div>
<div className="text-center w-20">
<div className="w-7 h-7 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-2 ring-4 ring-white"><iconify-icon icon="lucide:box" width="14"></iconify-icon></div>
<span className="font-medium text-slate-400">Delivered</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">
<tr>
<th className="px-6 py-3">PO Number</th>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3">Vendor</th>
<th className="px-6 py-3 text-right">Amount</th>
<th className="px-6 py-3 text-center">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="px-6 py-3 font-mono text-xs text-indigo-600 font-medium">PO-2023-991</td>
<td className="px-6 py-3 text-slate-500 text-xs">Oct 18, 2023</td>
<td className="px-6 py-3 text-slate-800">OfficeDepot LLC</td>
<td className="px-6 py-3 text-right font-medium text-slate-900">$450.00</td>
<td className="px-6 py-3 text-center"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">PAID</span></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-3 font-mono text-xs text-indigo-600 font-medium">PO-2023-990</td>
<td className="px-6 py-3 text-slate-500 text-xs">Oct 15, 2023</td>
<td className="px-6 py-3 text-slate-800">Global Systems</td>
<td className="px-6 py-3 text-right font-medium text-slate-900">$2,300.00</td>
<td className="px-6 py-3 text-center"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">PAID</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden space-y-6" id="vendors">
<div className="flex justify-between items-center">
<h2 className="text-lg font-semibold text-slate-900">Vendor Directory</h2>
<button className="px-3 py-1.5 text-xs font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800 flex items-center gap-2">
<iconify-icon icon="lucide:user-plus" width="14"></iconify-icon> Invite Vendor
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer" onclick="switchTab('approvals')">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm">TS</div>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded border border-emerald-100">Active</span>
</div>
<h3 className="font-bold text-slate-900">TechSource Inc.</h3>
<p className="text-xs text-slate-500 mb-4">IT Hardware • Since 2020</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
<span className="text-slate-500">Rating</span>
<div className="flex items-center gap-1 text-slate-900 font-semibold">
<iconify-icon className="text-yellow-400 fill-current" icon="lucide:star" width="12"></iconify-icon> 4.8
                            </div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">GS</div>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded border border-emerald-100">Active</span>
</div>
<h3 className="font-bold text-slate-900">Global Systems</h3>
<p className="text-xs text-slate-500 mb-4">Logistics • Since 2021</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
<span className="text-slate-500">Rating</span>
<div className="flex items-center gap-1 text-slate-900 font-semibold">
<iconify-icon className="text-yellow-400 fill-current" icon="lucide:star" width="12"></iconify-icon> 4.2
                            </div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-8" id="settings">
<div className="border-b border-slate-200 pb-4">
<h2 className="text-lg font-semibold text-slate-900">Settings &amp; Access Control</h2>
<div className="flex gap-6 mt-4">
<button className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 pb-1">Team &amp; Roles</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-1">Security Audit</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-1">Integrations</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-bold text-slate-900">Team Members</h3>
<button className="text-xs text-indigo-600 font-medium border border-indigo-200 px-2 py-1 rounded hover:bg-indigo-50">+ Invite User</button>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between pb-4 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">EM</div>
<div>
<p className="text-sm font-medium text-slate-900">Elvin Mammadov <span className="text-xs font-normal text-slate-400">(You)</span></p>
<p className="text-xs text-slate-500">elvin@company.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Admin</span>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="lucide:settings-2" width="14"></iconify-icon></button>
</div>
</div>

<div className="flex items-center justify-between pb-4 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">JS</div>
<div>
<p className="text-sm font-medium text-slate-900">John Smith</p>
<p className="text-xs text-slate-500">john@company.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Editor</span>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="lucide:settings-2" width="14"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
<h3 className="text-sm font-bold text-slate-900">Role Permissions: <span className="font-normal text-indigo-600">Admin</span></h3>
</div>
<table className="w-full text-left text-sm">
<thead className="border-b border-slate-100">
<tr>
<th className="px-6 py-3 font-medium text-slate-500 text-xs">Module</th>
<th className="px-6 py-3 font-medium text-slate-500 text-center text-xs">View</th>
<th className="px-6 py-3 font-medium text-slate-500 text-center text-xs">Edit</th>
<th className="px-6 py-3 font-medium text-slate-500 text-center text-xs">Delete</th>
<th className="px-6 py-3 font-medium text-slate-500 text-center text-xs">Approve</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-3 text-slate-700 font-medium">RFQs</td>
<td className="px-6 py-3 text-center text-emerald-500"><iconify-icon icon="lucide:check" width="16"></iconify-icon></td>
<td className="px-6 py-3 text-center text-emerald-500"><iconify-icon icon="lucide:check" width="16"></iconify-icon></td>
<td className="px-6 py-3 text-center text-emerald-500"><iconify-icon icon="lucide:check" width="16"></iconify-icon></td>
<td className="px-6 py-3 text-center text-emerald-500"><iconify-icon icon="lucide:check" width="16"></iconify-icon></td>
</tr>
<tr>
<td className="px-6 py-3 text-slate-700 font-medium">Purchase Orders</td>
<td className="px-6 py-3 text-center text-emerald-500"><iconify-icon icon="lucide:check" width="16"></iconify-icon></td>
<td className="px-6 py-3 text-center text-emerald-500"><iconify-icon icon="lucide:check" width="16"></iconify-icon></td>
<td className="px-6 py-3 text-center text-slate-300"><iconify-icon icon="lucide:minus" width="16"></iconify-icon></td>
<td className="px-6 py-3 text-center text-emerald-500"><iconify-icon icon="lucide:check" width="16"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-indigo-900 rounded-xl p-6 text-white shadow-lg h-fit">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-indigo-300" icon="lucide:eye" width="20"></iconify-icon>
<h3 className="font-bold">View As</h3>
</div>
<p className="text-xs text-indigo-200 mb-6">Preview the portal as a different user role to verify permissions.</p>
<div className="space-y-3">
<label className="flex items-center gap-3 p-3 bg-indigo-800/50 rounded-lg cursor-pointer border border-indigo-500 ring-2 ring-indigo-400">
<div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-sm font-medium">Admin (Current)</span>
</label>
<label className="flex items-center gap-3 p-3 bg-indigo-800/20 rounded-lg cursor-pointer hover:bg-indigo-800/40 border border-transparent">
<div className="w-4 h-4 rounded-full border border-indigo-400"></div>
<span className="text-sm font-medium text-indigo-200">Vendor</span>
</label>
<label className="flex items-center gap-3 p-3 bg-indigo-800/20 rounded-lg cursor-pointer hover:bg-indigo-800/40 border border-transparent">
<div className="w-4 h-4 rounded-full border border-indigo-400"></div>
<span className="text-sm font-medium text-indigo-200">Approver</span>
</label>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="reports">
<h2 className="text-lg font-semibold text-slate-900">Analytics &amp; Reports</h2>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
<h3 className="text-sm font-bold text-slate-900 mb-6">Monthly Spending Analysis (AZN)</h3>

<div className="flex items-end justify-between h-64 gap-2 pt-4 pb-2 border-b border-slate-200">
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-indigo-100 rounded-t-sm h-32 relative chart-bar group-hover:bg-indigo-200">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">12k</div>
</div>
<span className="text-xs text-slate-500">Jan</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-indigo-100 rounded-t-sm h-40 relative chart-bar group-hover:bg-indigo-200">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">15k</div>
</div>
<span className="text-xs text-slate-500">Feb</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-indigo-100 rounded-t-sm h-24 relative chart-bar group-hover:bg-indigo-200">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">9k</div>
</div>
<span className="text-xs text-slate-500">Mar</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-indigo-600 rounded-t-sm h-56 relative chart-bar shadow-lg shadow-indigo-200">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-indigo-600">22k</div>
</div>
<span className="text-xs font-bold text-indigo-600">Oct</span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-6" id="approvals">
<h2 className="text-lg font-semibold text-slate-900">Pending Approvals</h2>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex gap-6">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="lucide:building-2" width="32"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-bold text-slate-900">TechnoServe Ltd.</h3>
<span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-100">NEEDS APPROVAL</span>
</div>
<p className="text-sm text-slate-600 mt-1">Vendor Application • Tax ID: 998231 • IT Services</p>
<div className="mt-4 flex gap-3">
<button className="px-4 py-2 bg-emerald-600 text-white text-xs font-medium rounded hover:bg-emerald-700">Approve</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded hover:bg-slate-50">View Documents</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-red-600 text-xs font-medium rounded hover:bg-red-50">Reject</button>
</div>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col items-center justify-center h-64 text-slate-400" id="contracts">
<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="lucide:lock" width="24"></iconify-icon>
</div>
<p className="text-sm">Secure Document Storage</p>
<button className="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-medium rounded" onclick="switchTab('dashboard')">Back to Dashboard</button>
</div>
</div>
</main>


    </>
  );
}
