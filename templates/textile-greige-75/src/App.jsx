import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // Navigation Logic
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.hidden-section, #dashboard').forEach(el => {
                el.style.display = 'none';
            });
            // Show selected
            document.getElementById(sectionId).style.display = 'block';
            
            // Update Title
            const titles = {
                'dashboard': 'Dashboard',
                'po-greige': 'PO Greige',
                'in-greige': 'IN Greige',
                'stock': 'Stock Greige',
                'joc-entry': 'JOC Entry',
                'joc-pending': 'Pending & Allocation',
                'partai': 'Partai / Batching'
            };
            document.getElementById('page-title').innerText = titles[sectionId] || 'System';
            
            // Re-render icons if needed (sometimes needed for dynamic display changes)
            lucide.createIcons();
        }

        // Rib Input Logic
        function toggleRibInputs() {
            const mode = document.getElementById('rib-mode-select').value;
            const percentInput = document.getElementById('rib-input-percent');
            const kgInput = document.getElementById('rib-input-kg');

            percentInput.classList.add('hidden');
            kgInput.classList.add('hidden');

            if (mode === 'percent') {
                percentInput.classList.remove('hidden');
            } else if (mode === 'kg') {
                kgInput.classList.remove('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-zinc-200 flex flex-col justify-between hidden md:flex z-20">
<div>
<div className="h-14 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white font-semibold text-xs tracking-tighter">S</div>
<span className="font-semibold tracking-tight text-zinc-900">SISTEM<span className="text-zinc-400">GREIGE</span></span>
</div>
</div>
<nav className="p-4 space-y-1">
<div className="px-2 pb-2 text-xs font-medium text-zinc-400 tracking-wider">MAIN</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" onclick="showSection('dashboard')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="layout-dashboard"></i>
<span className="font-medium">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" onclick="showSection('po-greige')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="shopping-cart"></i>
<span className="font-medium">PO Greige</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" onclick="showSection('in-greige')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="arrow-down-left"></i>
<span className="font-medium">IN Greige</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" onclick="showSection('stock')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="package"></i>
<span className="font-medium">Stok Greige</span>
</button>
<div className="px-2 pt-4 pb-2 text-xs font-medium text-zinc-400 tracking-wider">OUTBOUND</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" onclick="showSection('joc-entry')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="file-plus"></i>
<span className="font-medium">JOC Entry</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" onclick="showSection('joc-pending')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="clock"></i>
<span className="font-medium">Pending &amp; Alokasi</span>
<span className="ml-auto bg-amber-100 text-amber-700 py-0.5 px-1.5 rounded-full text-[10px] font-semibold">2</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group" onclick="showSection('partai')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="layers"></i>
<span className="font-medium">Partai / Batching</span>
</button>
<div className="px-2 pt-4 pb-2 text-xs font-medium text-zinc-400 tracking-wider">SYSTEM</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-900 transition-colors group">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="database"></i>
<span className="font-medium">Master Data</span>
</button>
</nav>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-500">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900">Admin User</span>
<span className="text-[10px] text-zinc-500">Role: Administrator</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-zinc-50 overflow-auto">

<header className="h-14 bg-white/80 backdrop-blur-sm border-b border-zinc-200 sticky top-0 z-10 flex items-center justify-between px-6">
<div className="flex items-center gap-4">
<span className="font-semibold text-zinc-900 tracking-tight" id="page-title">Dashboard</span>
<span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Supabase Connected
                </span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 w-64 transition-all" placeholder="Search PO, JOC, Lott..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="p-6 max-w-7xl mx-auto w-full space-y-6 animate-fade-in" id="dashboard">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-4 bg-white rounded-lg border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Total PO Greige</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="shopping-cart"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">124</div>
<div className="mt-2 flex items-center text-xs text-green-600 gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>12 this week</span>
</div>
</div>
<div className="p-4 bg-white rounded-lg border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Stock Greige (Kg)</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="package"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">45,200</div>
<div className="mt-2 text-xs text-zinc-500">Body: 38k | Rib: 7.2k</div>
</div>
<div className="p-4 bg-white rounded-lg border border-zinc-200 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 h-full w-1 bg-amber-500"></div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">JOC Pending</span>
<i className="w-4 h-4 text-amber-500" data-lucide="clock"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">8</div>
<div className="mt-2 text-xs text-zinc-500">Needs Allocation</div>
</div>
<div className="p-4 bg-white rounded-lg border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Siap Partai</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="layers"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">14</div>
<div className="mt-2 text-xs text-zinc-500">Pending Schedule</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white border border-zinc-200 rounded-lg shadow-sm p-5">
<h3 className="font-semibold text-zinc-900 mb-4 tracking-tight">Recent Activity</h3>
<div className="space-y-4">
<div className="flex items-center gap-3 pb-3 border-b border-zinc-50 last:border-0">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="plus"></i></div>
<div className="flex-1">
<p className="text-xs font-medium text-zinc-900">PO-001/I/2025 Created</p>
<p className="text-[10px] text-zinc-500">Supplier: PT. Indotex • 10 mins ago</p>
</div>
</div>
<div className="flex items-center gap-3 pb-3 border-b border-zinc-50 last:border-0">
<div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="check"></i></div>
<div className="flex-1">
<p className="text-xs font-medium text-zinc-900">JOC-2201 Approved for Allocation</p>
<p className="text-[10px] text-zinc-500">Cust: Brand Local • 1 hour ago</p>
</div>
</div>
<div className="flex items-center gap-3 pb-3 border-b border-zinc-50 last:border-0">
<div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="alert-circle"></i></div>
<div className="flex-1">
<p className="text-xs font-medium text-zinc-900">Low Stock Alert: Cotton Combed 30s</p>
<p className="text-[10px] text-zinc-500">Below 500kg threshold • 2 hours ago</p>
</div>
</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-lg shadow-sm p-5">
<h3 className="font-semibold text-zinc-900 mb-4 tracking-tight">Stok Overview</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-600">Combed 30s</span>
<span className="font-medium">85%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[85%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-600">Combed 24s</span>
<span className="font-medium">42%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[42%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-600">PE Soft</span>
<span className="font-medium">12%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[12%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden-section p-6 max-w-7xl mx-auto w-full space-y-6" id="po-greige">
<div className="flex justify-between items-end">
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Purchase Orders</h2>
<p className="text-xs text-zinc-500 mt-1">Manage Greige procurement from suppliers.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md hover:bg-zinc-50 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Export
                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 border border-zinc-900 rounded-md hover:bg-zinc-800 flex items-center gap-2 shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> New PO
                    </button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-5 shadow-sm">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4 border-b border-zinc-100 pb-2">New Order Entry</h3>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">No PO (Auto)</label>
<input className="w-full text-xs p-2 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-500" disabled="" type="text" value="001/I/2025"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Supplier</label>
<select className="w-full text-xs p-2 bg-white border border-zinc-200 rounded-md focus:ring-1 focus:ring-zinc-900">
<option>Select Supplier...</option>
<option>PT. Indotex</option>
<option>CV. Maju Jaya</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Fabric Type</label>
<select className="w-full text-xs p-2 bg-white border border-zinc-200 rounded-md focus:ring-1 focus:ring-zinc-900">
<option>Select Fabric...</option>
<option>Cotton Combed 30s</option>
<option>Cotton Combed 24s</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Status</label>
<select className="w-full text-xs p-2 bg-white border border-zinc-200 rounded-md focus:ring-1 focus:ring-zinc-900">
<option>Draft</option>
<option>Confirmed</option>
</select>
</div>
</div>

<div className="bg-zinc-50/50 rounded-md border border-zinc-200 p-4 mb-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="space-y-3">
<span className="text-xs font-semibold text-zinc-900 flex items-center gap-2"><i className="w-3 h-3" data-lucide="shirt"></i> Body Order</span>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="text-[10px] text-zinc-500">Qty (Roll)</label>
<input className="w-full text-xs p-2 border border-zinc-200 rounded-md focus:outline-none focus:border-zinc-900" placeholder="0" type="number"/>
</div>
<div>
<label className="text-[10px] text-zinc-500">Qty (KG)</label>
<input className="w-full text-xs p-2 border border-zinc-200 rounded-md focus:outline-none focus:border-zinc-900" placeholder="0.00" type="number"/>
</div>
</div>
</div>

<div className="hidden md:block w-px h-full bg-zinc-200 mx-auto"></div>

<div className="space-y-3">
<span className="text-xs font-semibold text-zinc-900 flex items-center gap-2"><i className="w-3 h-3" data-lucide="scissors"></i> Rib Configuration</span>
<div className="space-y-2">
<label className="text-[10px] text-zinc-500">Rib Mode (Mandatory)</label>
<select className="w-full text-xs p-2 bg-white border border-zinc-200 rounded-md focus:ring-1 focus:ring-zinc-900" id="rib-mode-select" onchange="toggleRibInputs()">
<option value="none">No Rib (Body Only)</option>
<option value="percent">Percentage (%)</option>
<option value="kg">Fixed Weight (KG)</option>
</select>
</div>

<div className="hidden" id="rib-input-percent">
<label className="text-[10px] text-zinc-500">Percentage Value</label>
<div className="relative">
<input className="w-full text-xs p-2 border border-zinc-200 rounded-md" placeholder="e.g. 5" type="number"/>
<span className="absolute right-3 top-2 text-xs text-zinc-400">%</span>
</div>
<p className="text-[10px] text-zinc-400 mt-1">Calculates KG automatically based on Body.</p>
</div>
<div className="hidden" id="rib-input-kg">
<label className="text-[10px] text-zinc-500">Fixed Weight</label>
<div className="relative">
<input className="w-full text-xs p-2 border border-zinc-200 rounded-md" placeholder="e.g. 20" type="number"/>
<span className="absolute right-3 top-2 text-xs text-zinc-400">KG</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-end pt-2">
<button className="px-4 py-2 text-xs font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors shadow-sm">
                        Save PO to Supabase
                    </button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-sm">
<table className="w-full text-left">
<thead className="bg-zinc-50 border-b border-zinc-200">
<tr>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">No PO</th>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Date</th>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Supplier</th>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Fabric</th>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider text-right">Qty Body</th>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider text-right">Rib Info</th>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider text-center">Status</th>
<th className="px-4 py-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-zinc-50 group transition-colors">
<td className="px-4 py-3 font-medium text-zinc-900">001/I/2025</td>
<td className="px-4 py-3 text-zinc-500">24 Jan 2025</td>
<td className="px-4 py-3 text-zinc-900">PT. Indotex</td>
<td className="px-4 py-3 text-zinc-600">Combed 30s</td>
<td className="px-4 py-3 text-right font-mono text-zinc-700">1,200 kg</td>
<td className="px-4 py-3 text-right">
<span className="bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded text-[10px]">5% (60kg)</span>
</td>
<td className="px-4 py-3 text-center">
<span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium border border-green-200">Confirmed</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-zinc-400 hover:text-zinc-900"><i className="w-3.5 h-3.5" data-lucide="eye"></i></button>
<button className="text-zinc-400 hover:text-blue-600"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="text-zinc-400 hover:text-zinc-900"><i className="w-3.5 h-3.5" data-lucide="printer"></i></button>
</div>
</td>
</tr>

</tbody>
</table>
<div className="px-4 py-3 border-t border-zinc-200 bg-zinc-50 flex justify-between items-center">
<span className="text-xs text-zinc-500">Showing 1-10 of 124 results</span>
<div className="flex gap-1">
<button className="px-2 py-1 text-xs border border-zinc-200 bg-white rounded hover:bg-zinc-50 disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 text-xs border border-zinc-200 bg-white rounded hover:bg-zinc-50">Next</button>
</div>
</div>
</div>
</div>

<div className="hidden-section p-6 max-w-7xl mx-auto w-full space-y-6" id="joc-entry">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">JOC Entry (Job Order)</h2>
<p className="text-xs text-zinc-500 mt-1">Create Job Orders for customers.</p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-1 space-y-4">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Order Details</h4>
<div className="space-y-3">
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1">Customer</label>
<select className="w-full text-xs p-2.5 bg-zinc-50 border border-zinc-200 rounded-md focus:ring-1 focus:ring-zinc-900">
<option>Select Customer...</option>
<option>Local Brand A</option>
</select>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1">Color &amp; Code</label>
<div className="flex gap-2">
<input className="flex-1 text-xs p-2.5 border border-zinc-200 rounded-md" placeholder="Color Name" type="text"/>
<input className="w-20 text-xs p-2.5 border border-zinc-200 rounded-md" placeholder="Code" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1">Date</label>
<input className="w-full text-xs p-2.5 bg-white border border-zinc-200 rounded-md" type="date"/>
</div>
</div>
</div>
<div className="col-span-1 space-y-4">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Specs &amp; Qty</h4>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1">Gramasi</label>
<input className="w-full text-xs p-2.5 border border-zinc-200 rounded-md" placeholder="110-120" type="text"/>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1">Width</label>
<input className="w-full text-xs p-2.5 border border-zinc-200 rounded-md" placeholder='42"' type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1">Body Qty (KG)</label>
<input className="w-full text-xs p-2.5 border border-zinc-200 rounded-md font-medium text-zinc-900" type="number"/>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1">Rib Config</label>
<div className="flex gap-2">
<select className="w-1/3 text-xs p-2.5 bg-zinc-50 border border-zinc-200 rounded-md">
<option value="percent">%</option>
<option value="kg">KG</option>
</select>
<input className="flex-1 text-xs p-2.5 border border-zinc-200 rounded-md" placeholder="Value" type="number"/>
</div>
</div>
</div>
</div>
<div className="col-span-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200 flex flex-col justify-between">
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2">Summary</h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                                Creating this JOC will enter the <strong className="text-zinc-700">Pending State</strong>. No stock is deducted until Surat Jalan allocation is approved.
                            </p>
</div>
<button className="w-full py-2.5 mt-4 text-xs font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 shadow-sm flex items-center justify-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="save"></i> Create &amp; Move to Pending
                        </button>
</div>
</div>
</div>
</div>

<div className="hidden-section p-6 max-w-7xl mx-auto w-full space-y-6" id="joc-pending">
<div className="flex justify-between items-end">
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Pending &amp; Allocation</h2>
<p className="text-xs text-zinc-500 mt-1">Allocate Surat Jalan to JOCs.</p>
</div>
</div>

<div className="space-y-4">

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<span className="font-mono text-xs font-medium text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded">JOC-2201</span>
<h3 className="font-semibold text-zinc-900 text-sm">Local Brand A - Jet Black</h3>
</div>
<div className="text-xs text-zinc-500 flex gap-4">
<span>Body: 500kg</span>
<span>Rib: 25kg</span>
<span>Combed 30s</span>
</div>
</div>
<div className="flex-1 w-full md:w-auto">

<div className="flex flex-col gap-2">
<div className="relative">
<label className="text-[10px] text-zinc-400 absolute -top-2 left-2 bg-white px-1">SJ Body</label>
<select className="w-full text-xs p-2 border border-zinc-200 rounded-md focus:ring-1 focus:ring-amber-500 border-amber-200 bg-amber-50/10">
<option>Select SJ Body...</option>
<option>SJ-004 (Avail: 1000kg)</option>
</select>
</div>
<div className="relative">
<label className="text-[10px] text-zinc-400 absolute -top-2 left-2 bg-white px-1">SJ Rib</label>
<select className="w-full text-xs p-2 border border-zinc-200 rounded-md">
<option>Select SJ Rib...</option>
<option>SJ-004-R (Avail: 100kg)</option>
</select>
</div>
</div>
</div>
<div className="flex items-center gap-2 border-l border-zinc-100 pl-4">
<button className="p-2 text-zinc-400 hover:text-red-600 transition-colors" title="Hold/Reject">
<i className="w-5 h-5" data-lucide="x-circle"></i>
</button>
<button className="px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 shadow-sm flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i> Approve
                        </button>
</div>
</div>
</div>
</div>

<div className="hidden-section p-6 max-w-7xl mx-auto w-full space-y-6" id="partai">
<div className="flex justify-between items-end">
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Partai &amp; Batching</h2>
<p className="text-xs text-zinc-500 mt-1">Split rolls and assign Lott numbers.</p>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-sm">
<div className="p-4 border-b border-zinc-200 bg-zinc-50 flex justify-between items-center">
<h3 className="text-xs font-semibold text-zinc-900 uppercase">Approved Allocations</h3>
</div>
<div className="p-4 space-y-6">

<div className="border border-zinc-200 rounded-md p-4 relative">
<span className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-medium text-zinc-500">JOC-2201 • Batching Process</span>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
<div>
<label className="text-[10px] font-medium text-zinc-500">No Lott</label>
<input className="w-full text-xs p-2 border border-zinc-200 rounded-md" placeholder="Input Lott" type="text"/>
</div>
<div>
<label className="text-[10px] font-medium text-zinc-500">Tanggal Partai</label>
<input className="w-full text-xs p-2 border border-zinc-200 rounded-md" type="date"/>
</div>
<div className="md:col-span-2">
<label className="text-[10px] font-medium text-zinc-500">Qty Split (Kg)</label>
<div className="flex gap-2">
<input className="flex-1 text-xs p-2 border border-zinc-200 rounded-md font-mono" placeholder="e.g. 25 + 25.1 + 25.3" type="text"/>
<div className="bg-zinc-100 px-3 py-2 text-xs text-zinc-600 rounded-md border border-zinc-200 flex items-center">
                                        Total: <span className="font-bold ml-1">0.0</span>
</div>
</div>
<p className="text-[10px] text-zinc-400 mt-1">Use '+' to split rolls automatically.</p>
</div>
</div>
<div className="mt-4 flex justify-end">
<button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 shadow-sm">
                                Finalize Batch
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden-section p-6 max-w-7xl mx-auto text-center py-20" id="in-greige">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-4">
<i className="w-8 h-8 text-zinc-400" data-lucide="arrow-down-left"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900">IN Greige Module</h3>
<p className="text-zinc-500 text-sm mt-1">Receiving data linked to PO. Ready for backend integration.</p>
</div>
<div className="hidden-section p-6 max-w-7xl mx-auto text-center py-20" id="stock">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-4">
<i className="w-8 h-8 text-zinc-400" data-lucide="package"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900">Stock Management</h3>
<p className="text-zinc-500 text-sm mt-1">Realtime inventory of Greige Body &amp; Rib.</p>
</div>
</main>


    </>
  );
}
