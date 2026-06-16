import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-slate-50/50 border-r border-slate-200 flex flex-col h-full flex-shrink-0">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">SBCA<span className="text-slate-400 font-normal">RMS</span></span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-900 bg-white border border-slate-200 shadow-sm rounded-md font-medium group" href="#">
<iconify-icon className="text-slate-900" icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-normal" href="#">
<iconify-icon icon="lucide:folder-search" strokeWidth="1.5" width="16"></iconify-icon>
                File Tracking
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-normal" href="#">
<iconify-icon icon="lucide:grid" strokeWidth="1.5" width="16"></iconify-icon>
                Rack Management
            </a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Administration</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-normal" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
                Users &amp; Roles
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-normal" href="#">
<iconify-icon icon="lucide:building" strokeWidth="1.5" width="16"></iconify-icon>
                Departments
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-normal" href="#">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="16"></iconify-icon>
                Company Config
            </a>
</nav>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-medium text-xs">
                    SA
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Super Admin</p>
<p className="text-xs text-slate-500 truncate">admin@sbca.gov.pk</p>
</div>
<iconify-icon className="text-slate-400 cursor-pointer" icon="lucide:more-vertical" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">

<header className="h-16 flex items-center justify-between px-8 border-b border-slate-100 bg-white z-10">
<div className="flex items-center gap-4 text-sm text-slate-500">
<span className="hover:text-slate-900 cursor-pointer">Home</span>
<iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="font-medium text-slate-900">Dashboard Overview</span>
</div>
<div className="flex items-center gap-4">

<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600" icon="lucide:search" width="16"></iconify-icon>
<input className="w-64 pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-slate-300 transition-all placeholder:text-slate-400" placeholder="Search file no, plot, or rack..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-slate-400 bg-white border border-slate-200 rounded shadow-sm">⌘K</kbd>
</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900">System Status</h1>
<p className="text-sm text-slate-500 mt-1">Real-time overview of SBCA record movements and storage.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 shadow-sm transition-all">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
                        Export Report
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 shadow-sm transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                        New Entry
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_-4px_rgba(6,81,237,0.05)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:files" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">24,592</div>
<div className="text-sm text-slate-500 mt-1">Total Active Records</div>
</div>

<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_-4px_rgba(6,81,237,0.05)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:arrow-right-left" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500">Active</span>
</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">145</div>
<div className="text-sm text-slate-500 mt-1">Files Checked Out</div>
</div>

<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_-4px_rgba(6,81,237,0.05)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon icon="lucide:server" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full">High</span>
</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">88%</div>
<div className="text-sm text-slate-500 mt-1">Rack Capacity Full</div>
</div>

<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_-4px_rgba(6,81,237,0.05)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
<iconify-icon icon="lucide:alert-circle" width="18"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium tracking-tight text-slate-900">12</div>
<div className="text-sm text-slate-500 mt-1">Overdue Returns</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h3 className="font-medium text-slate-900">Recent Movement</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50/50">
<tr>
<th className="px-6 py-3 font-medium text-xs text-slate-400 uppercase tracking-wider">File No.</th>
<th className="px-6 py-3 font-medium text-xs text-slate-400 uppercase tracking-wider">Category</th>
<th className="px-6 py-3 font-medium text-xs text-slate-400 uppercase tracking-wider">Department</th>
<th className="px-6 py-3 font-medium text-xs text-slate-400 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 font-medium text-xs text-slate-400 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">SBCA-2023-889</div>
<div className="text-xs text-slate-500">Plot A-21, Gulshan</div>
</td>
<td className="px-6 py-4 text-slate-600">
                                            Residential
                                        </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-slate-600">Town Planning</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                                Checked Out
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">SBCA-2023-902</div>
<div className="text-xs text-slate-500">Plot C-11, North Nazim</div>
</td>
<td className="px-6 py-4 text-slate-600">
                                            Commercial
                                        </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-slate-600">Design Section</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                In Rack R-02
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">SBCA-2023-741</div>
<div className="text-xs text-slate-500">Plot B-99, Clifton</div>
</td>
<td className="px-6 py-4 text-slate-600">
                                            High Rise
                                        </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-slate-600">Legal</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                                Archived
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">SBCA-2023-112</div>
<div className="text-xs text-slate-500">Plot F-5, DHA</div>
</td>
<td className="px-6 py-4 text-slate-600">
                                            Amenity
                                        </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-slate-600">Town Planning</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                In Rack R-05
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-slate-900">Rack Status: R-01</h3>
<button className="p-1 rounded hover:bg-slate-100">
<iconify-icon className="text-slate-400" icon="lucide:settings" width="14"></iconify-icon>
</button>
</div>
<div className="text-xs text-slate-500 mb-4">Room A, Floor 2 (Town Planning)</div>
<div className="grid grid-cols-4 gap-2 mb-4">

<div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-700 font-medium cursor-pointer hover:bg-emerald-500/30">A1</div>
<div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-700 font-medium cursor-pointer hover:bg-emerald-500/30">A2</div>
<div className="h-8 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-[10px] text-amber-700 font-medium cursor-pointer hover:bg-amber-500/30">A3</div>
<div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-700 font-medium cursor-pointer hover:bg-emerald-500/30">A4</div>
<div className="h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-medium cursor-pointer hover:bg-slate-200">B1</div>
<div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-700 font-medium cursor-pointer hover:bg-emerald-500/30">B2</div>
<div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-700 font-medium cursor-pointer hover:bg-emerald-500/30">B3</div>
<div className="h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-medium cursor-pointer hover:bg-slate-200">B4</div>
<div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-700 font-medium cursor-pointer hover:bg-emerald-500/30">C1</div>
<div className="h-8 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-700 font-medium cursor-pointer hover:bg-emerald-500/30">C2</div>
<div className="h-8 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-[10px] text-amber-700 font-medium cursor-pointer hover:bg-amber-500/30">C3</div>
<div className="h-8 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-[10px] text-amber-700 font-medium cursor-pointer hover:bg-amber-500/30">C4</div>
</div>
<div className="flex items-center gap-4 text-[10px] text-slate-500">
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400"></div>Occupied</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-slate-300"></div>Empty</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-400"></div>Reserved</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white p-6 shadow-sm">
<h3 className="font-medium text-slate-900 mb-4">Quick Actions</h3>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 group transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
<iconify-icon icon="lucide:user-plus" width="16"></iconify-icon>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Add User</div>
<div className="text-xs text-slate-500">Create staff account</div>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-indigo-400" icon="lucide:chevron-right" width="14"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 group transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
<iconify-icon icon="lucide:archive" width="16"></iconify-icon>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Add Rack</div>
<div className="text-xs text-slate-500">Configure storage</div>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-indigo-400" icon="lucide:chevron-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
