import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(tabId, btnElement) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show target view
            document.getElementById('view-' + tabId).classList.remove('hidden');

            // Reset all sidebar buttons
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-gray-100', 'text-gray-900');
                el.classList.add('text-gray-500', 'hover:bg-gray-50', 'hover:text-gray-900');
                
                // Reset icon colors
                const icon = el.querySelector('iconify-icon');
                if(icon) {
                    icon.classList.remove('text-gray-900');
                    icon.classList.add('text-gray-400');
                }
            });

            // Activate clicked button
            if (btnElement) {
                btnElement.classList.remove('text-gray-500', 'hover:bg-gray-50', 'hover:text-gray-900');
                btnElement.classList.add('bg-gray-100', 'text-gray-900');
                
                const activeIcon = btnElement.querySelector('iconify-icon');
                if(activeIcon) {
                    activeIcon.classList.remove('text-gray-400');
                    activeIcon.classList.add('text-gray-900');
                }
            }

            // Update Header Title
            const titles = {
                'dashboard': 'Dashboard',
                'inventory': 'Inventory',
                'assignments': 'Assignments',
                'procurement': 'Procurement',
                'maintenance': 'Maintenance'
            };
            document.getElementById('header-title').innerText = titles[tabId] || 'Dashboard';
        }

        // Modal Toggle Function
        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-gray-900">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-semibold tracking-tighter">ASSETOS</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Platform</div>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg transition-colors text-left" onclick="switchTab('dashboard', this)">
<iconify-icon className="text-gray-900" icon="solar:widget-2-linear" width="20"></iconify-icon>
                Dashboard
            </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-left" onclick="switchTab('inventory', this)">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:laptop-linear" width="20"></iconify-icon>
                Inventory
            </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-left" onclick="switchTab('assignments', this)">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Assignments
            </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-left" onclick="switchTab('procurement', this)">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:bill-list-linear" width="20"></iconify-icon>
                Procurement
            </button>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Management</div>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-left" onclick="switchTab('maintenance', this)">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:wrench-linear" width="20"></iconify-icon>
                Maintenance
                <span className="ml-auto bg-orange-50 text-orange-600 py-0.5 px-2 rounded-full text-xs font-medium">2</span>
</button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-left opacity-60 cursor-not-allowed">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:chart-2-linear" width="20"></iconify-icon>
                Depreciation
            </button>
</nav>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors text-left">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-xs font-medium text-gray-600 border border-gray-200">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Jane Doe</p>
<p className="text-xs text-gray-500 truncate">Admin</p>
</div>
<iconify-icon className="text-gray-400 hover:text-gray-600" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 md:px-8 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="flex items-center text-sm text-gray-500 gap-2">
<span className="hover:text-gray-900 cursor-pointer transition-colors">Assets</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="font-medium text-gray-900" id="header-title">Dashboard</span>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-white transition-all placeholder:text-gray-400" placeholder="Search..." type="text"/>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-1.5 right-2 h-1.5 w-1.5 rounded-full bg-red-500 border border-white"></span>
</button>
<button className="h-8 px-3 flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-lg shadow-sm transition-all" onclick="toggleModal('add-item-modal')">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
<span>New Item</span>
</button>
</div>
</header>

<div className="view-section flex-1 overflow-y-auto p-6 md:p-8" id="view-dashboard">
<div className="max-w-7xl mx-auto space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Overview</h1>
<p className="text-sm text-gray-500 mt-1">Snapshot of your organization's physical and digital assets.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500"><iconify-icon icon="solar:box-linear" width="20"></iconify-icon></div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">12%</span>
</div>
<div className="text-3xl font-medium tracking-tight text-gray-900">1,248</div>
<div className="text-xs text-gray-500 mt-1">Total Assets</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500"><iconify-icon icon="solar:tag-price-linear" width="20"></iconify-icon></div>
</div>
<div className="text-3xl font-medium tracking-tight text-gray-900">$2.4M</div>
<div className="text-xs text-gray-500 mt-1">Total Value</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500"><iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon></div>
<span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">94%</span>
</div>
<div className="text-3xl font-medium tracking-tight text-gray-900">1,102</div>
<div className="text-xs text-gray-500 mt-1">Assigned Assets</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500"><iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon></div>
<span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-100">Action</span>
</div>
<div className="text-3xl font-medium tracking-tight text-gray-900">8</div>
<div className="text-xs text-gray-500 mt-1">Maintenance Required</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-gray-900">Recent Activity</h3>
<a className="text-xs font-medium text-blue-600 hover:text-blue-700" href="#">View All</a>
</div>
<div className="p-6 text-sm text-gray-500 text-center italic">
                        Select a tab from the sidebar to view detailed data.
                    </div>
</div>
</div>
</div>

<div className="view-section hidden flex-1 overflow-y-auto p-6 md:p-8" id="view-inventory">
<div className="max-w-7xl mx-auto space-y-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Inventory</h1>
<p className="text-sm text-gray-500 mt-1">Detailed list of all registered hardware and software.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Export CSV</button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-100 gap-4">
<div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg border border-gray-200 w-fit">
<button className="px-3 py-1.5 text-xs font-medium bg-white text-gray-900 shadow-sm rounded-md border border-gray-200">All</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">In Stock</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">Assigned</button>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon> Filter
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="py-3 px-4 w-12 text-center"><input className="rounded border-gray-300" type="checkbox"/></th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Date</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 text-center"><input className="rounded border-gray-300" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center"><iconify-icon className="text-gray-500" icon="solar:laptop-minimalistic-linear"></iconify-icon></div>
<div><div className="text-sm font-medium text-gray-900">MacBook Pro 16"</div></div>
</div>
</td>
<td className="py-3 px-4"><span className="text-xs font-mono text-gray-600">AST-2941</span></td>
<td className="py-3 px-4"><span className="text-xs text-gray-600">HQ - Floor 3</span></td>
<td className="py-3 px-4"><span className="text-xs text-gray-600">Oct 12, 2023</span></td>
<td className="py-3 px-4"><span className="text-sm text-gray-900 font-medium">$3,499</span></td>
<td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">In Use</span></td>
</tr>
<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 text-center"><input className="rounded border-gray-300" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center"><iconify-icon className="text-gray-500" icon="solar:monitor-linear"></iconify-icon></div>
<div><div className="text-sm font-medium text-gray-900">Dell UltraSharp</div></div>
</div>
</td>
<td className="py-3 px-4"><span className="text-xs font-mono text-gray-600">AST-3301</span></td>
<td className="py-3 px-4"><span className="text-xs text-gray-600">HQ - Floor 3</span></td>
<td className="py-3 px-4"><span className="text-xs text-gray-600">Sep 01, 2023</span></td>
<td className="py-3 px-4"><span className="text-sm text-gray-900 font-medium">$650</span></td>
<td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">In Use</span></td>
</tr>
<tr className="group hover:bg-gray-50/50">
<td className="py-3 px-4 text-center"><input className="rounded border-gray-300" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center"><iconify-icon className="text-gray-500" icon="solar:chair-2-linear"></iconify-icon></div>
<div><div className="text-sm font-medium text-gray-900">Aeron Chair</div></div>
</div>
</td>
<td className="py-3 px-4"><span className="text-xs font-mono text-gray-600">AST-1022</span></td>
<td className="py-3 px-4"><span className="text-xs text-gray-600">Storage B</span></td>
<td className="py-3 px-4"><span className="text-xs text-gray-600">Jan 15, 2022</span></td>
<td className="py-3 px-4"><span className="text-sm text-gray-900 font-medium">$1,450</span></td>
<td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">Repair</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex-1 overflow-y-auto p-6 md:p-8" id="view-assignments">
<div className="max-w-7xl mx-auto space-y-6">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Assignments</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">AL</div>
<div>
<div className="text-sm font-medium text-gray-900">Alex Lawson</div>
<div className="text-xs text-gray-500">Product Design</div>
</div>
<button className="ml-auto text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="border-t border-gray-100 pt-3 space-y-2">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon icon="solar:laptop-linear" width="14"></iconify-icon> MacBook Pro 16"
                                </div>
<span className="text-gray-400">AST-2941</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon icon="solar:monitor-linear" width="14"></iconify-icon> Dell Monitor
                                </div>
<span className="text-gray-400">AST-4412</span>
</div>
</div>
<button className="w-full mt-1 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100">Manage Assets</button>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">SJ</div>
<div>
<div className="text-sm font-medium text-gray-900">Sarah Jenkins</div>
<div className="text-xs text-gray-500">Engineering</div>
</div>
<button className="ml-auto text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="border-t border-gray-100 pt-3 space-y-2">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon icon="solar:laptop-linear" width="14"></iconify-icon> ThinkPad X1
                                </div>
<span className="text-gray-400">AST-1102</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon icon="solar:smartphone-linear" width="14"></iconify-icon> iPhone 14
                                </div>
<span className="text-gray-400">AST-9921</span>
</div>
</div>
<button className="w-full mt-1 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100">Manage Assets</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex-1 overflow-y-auto p-6 md:p-8" id="view-procurement">
<div className="max-w-7xl mx-auto space-y-6">
<div className="flex justify-between items-end">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Procurement</h1>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm hover:bg-gray-800">
<iconify-icon icon="solar:cart-plus-linear" width="14"></iconify-icon> New Order
                    </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">Order ID</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">Vendor</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">Items</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">Date</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">Total</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="py-3 px-4 text-xs font-mono text-gray-900">PO-2024-001</td>
<td className="py-3 px-4 text-xs text-gray-600">Apple Inc.</td>
<td className="py-3 px-4 text-xs text-gray-600">5x MacBook Air M2</td>
<td className="py-3 px-4 text-xs text-gray-600">Oct 24, 2024</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">$5,995.00</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">Processing</span>
</td>
</tr>
<tr>
<td className="py-3 px-4 text-xs font-mono text-gray-900">PO-2024-002</td>
<td className="py-3 px-4 text-xs text-gray-600">Herman Miller</td>
<td className="py-3 px-4 text-xs text-gray-600">12x Aeron Chairs</td>
<td className="py-3 px-4 text-xs text-gray-600">Oct 20, 2024</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">$14,200.00</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Delivered</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden flex-1 overflow-y-auto p-6 md:p-8" id="view-maintenance">
<div className="max-w-7xl mx-auto space-y-6">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Maintenance Tickets</h1>
<div className="space-y-3">

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-orange-200 transition-colors cursor-pointer group">
<div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shrink-0">
<iconify-icon icon="solar:danger-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-gray-900">Laptop Battery Swelling</span>
<span className="text-[10px] font-medium bg-red-100 text-red-700 px-1.5 rounded border border-red-200">Urgent</span>
</div>
<div className="text-xs text-gray-500 mt-1">MacBook Pro 14" (AST-1922) • Reported by Jane Doe • 2 hours ago</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200">In Progress</span>
<iconify-icon className="text-gray-300 group-hover:text-gray-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-gray-300 transition-colors cursor-pointer group">
<div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
<iconify-icon icon="solar:refresh-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-gray-900">OS Update Failure</span>
</div>
<div className="text-xs text-gray-500 mt-1">Dell Workstation (AST-8812) • Reported by IT System • 1 day ago</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200">Pending</span>
<iconify-icon className="text-gray-300 group-hover:text-gray-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center" id="add-item-modal">

<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onclick="toggleModal('add-item-modal')"></div>

<div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden m-4">
<div className="flex items-center justify-between p-5 border-b border-gray-100">
<h3 className="text-base font-semibold text-gray-900">Add New Asset</h3>
<button className="text-gray-400 hover:text-gray-600 transition-colors" onclick="toggleModal('add-item-modal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 space-y-4">
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Asset Name</label>
<input className="block w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:border-gray-900 focus:ring-gray-900 focus:bg-white transition-all p-2.5 placeholder:text-gray-400" placeholder="e.g. MacBook Pro M3" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Category</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border-gray-200 bg-gray-50 text-sm focus:border-gray-900 focus:ring-gray-900 focus:bg-white transition-all p-2.5 pr-8 text-gray-600">
<option>Laptop</option>
<option>Monitor</option>
<option>Peripherals</option>
<option>Furniture</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Tag ID (Auto)</label>
<input className="block w-full rounded-lg border-gray-200 bg-gray-100 text-sm text-gray-500 p-2.5 font-mono cursor-not-allowed" readonly="" type="text" value="AST-5922"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Purchase Date</label>
<input className="block w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:border-gray-900 focus:ring-gray-900 focus:bg-white transition-all p-2.5 text-gray-600" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Value ($)</label>
<input className="block w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:border-gray-900 focus:ring-gray-900 focus:bg-white transition-all p-2.5 placeholder:text-gray-400" placeholder="0.00" type="number"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Status</label>
<div className="flex gap-3">
<label className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-lg p-2.5 flex-1 hover:bg-gray-50 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-50 transition-all">
<input checked="" className="accent-gray-900" name="status" type="radio"/>
<span className="text-xs font-medium text-gray-700">In Stock</span>
</label>
<label className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-lg p-2.5 flex-1 hover:bg-gray-50 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-50 transition-all">
<input className="accent-gray-900" name="status" type="radio"/>
<span className="text-xs font-medium text-gray-700">Assigned</span>
</label>
<label className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-lg p-2.5 flex-1 hover:bg-gray-50 has-[:checked]:border-gray-900 has-[:checked]:bg-gray-50 transition-all">
<input className="accent-gray-900" name="status" type="radio"/>
<span className="text-xs font-medium text-gray-700">Maintenance</span>
</label>
</div>
</div>
</div>
</div>
</div>
<div className="p-5 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50/50">
<button className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors" onclick="toggleModal('add-item-modal')">Cancel</button>
<button className="px-4 py-2 text-xs font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow-sm transition-colors" onclick="toggleModal('add-item-modal')">Add Asset</button>
</div>
</div>
</div>


    </>
  );
}
