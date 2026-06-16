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
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="bg-slate-900 text-white p-1 rounded-md">
<span className="iconify" data-height="18" data-icon="lucide:archive" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-semibold tracking-tight text-sm">RFTMS <span className="text-slate-400 font-normal">Admin</span></span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:layout-dashboard" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:file-text" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Record Files
            </a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Administration</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-md" href="#">
<span className="iconify" data-height="18" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Staff &amp; Users
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:building-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Departments
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:settings-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
                System Config
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:shield-check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Access Logs
            </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">MA</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Main Admin</span>
<span className="text-xs text-slate-500">sbca.gov.pk</span>
</div>
<button className="ml-auto text-slate-400 hover:text-slate-600">
<span className="iconify" data-height="16" data-icon="lucide:log-out" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden">

<header className="h-16 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex items-center justify-between px-6 z-10">
<div className="flex flex-col">
<nav className="flex text-xs text-slate-500 mb-0.5 space-x-2">
<span>Administration</span>
<span>/</span>
<span className="text-slate-900 font-medium">User Management</span>
</nav>
<h1 className="text-lg font-semibold tracking-tight text-slate-900">Organization Settings</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-height="16" data-icon="lucide:search" data-width="16"></span>
<input className="pl-9 pr-4 py-1.5 text-sm bg-slate-100 border-none rounded-md focus:ring-2 focus:ring-slate-200 focus:bg-white transition-all w-64 placeholder:text-slate-400" placeholder="Search users or depts..." type="text"/>
</div>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-md relative">
<span className="iconify" data-height="18" data-icon="lucide:bell" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Total Users</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">142</h3>
<div className="flex items-center gap-1 mt-2 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
<span className="iconify" data-height="12" data-icon="lucide:trending-up" data-width="12"></span>
<span>12 active now</span>
</div>
</div>
<div className="p-2 bg-slate-50 rounded-md text-slate-400">
<span className="iconify" data-height="20" data-icon="lucide:users" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Departments</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">8</h3>
<p className="text-xs text-slate-500 mt-2">Design, IT, Record Room...</p>
</div>
<div className="p-2 bg-slate-50 rounded-md text-slate-400">
<span className="iconify" data-height="20" data-icon="lucide:network" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Companies Config</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">3</h3>
<div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>All systems operational</span>
</div>
</div>
<div className="p-2 bg-slate-50 rounded-md text-slate-400">
<span className="iconify" data-height="20" data-icon="lucide:briefcase" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<section className="space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<h2 className="text-base font-semibold text-slate-900">Staff Directory</h2>
<span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">User Management</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors shadow-sm">
<span className="iconify" data-height="14" data-icon="lucide:filter" data-width="14"></span>
                                Filter
                            </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-sm">
<span className="iconify" data-height="14" data-icon="lucide:plus" data-width="14"></span>
                                Add User
                            </button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50/50 border-b border-slate-200">
<tr>
<th className="py-3 px-4 font-medium text-slate-500 w-10">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
<span className="iconify hidden text-white" data-icon="lucide:check" data-width="10"></span>
</div>
</label>
</th>
<th className="py-3 px-4 font-medium text-slate-500">User</th>
<th className="py-3 px-4 font-medium text-slate-500">Role</th>
<th className="py-3 px-4 font-medium text-slate-500">Department</th>
<th className="py-3 px-4 font-medium text-slate-500">Status</th>
<th className="py-3 px-4 font-medium text-slate-500">Last Active</th>
<th className="py-3 px-4 text-right font-medium text-slate-500">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
<span className="iconify hidden text-white" data-icon="lucide:check" data-width="10"></span>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold">AH</div>
<div>
<div className="font-medium text-slate-900">Ahmed Hassan</div>
<div className="text-xs text-slate-500">ahmed.h@sbca.gov.pk</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-1.5 text-slate-600">
<span className="iconify text-slate-400" data-icon="lucide:shield" data-width="14"></span>
<span>Manager</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200">
                                                Record Room
                                            </span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                                            </span>
</td>
<td className="py-3 px-4 text-xs text-slate-500">2 mins ago</td>
<td className="py-3 px-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
<span className="iconify hidden text-white" data-icon="lucide:check" data-width="10"></span>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-semibold">SK</div>
<div>
<div className="font-medium text-slate-900">Sana Khan</div>
<div className="text-xs text-slate-500">sana.k@sbca.gov.pk</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-1.5 text-slate-600">
<span className="iconify text-slate-400" data-icon="lucide:user" data-width="14"></span>
<span>Staff</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200">
                                                Town Planning
                                            </span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                                            </span>
</td>
<td className="py-3 px-4 text-xs text-slate-500">Yesterday</td>
<td className="py-3 px-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
<span className="iconify hidden text-white" data-icon="lucide:check" data-width="10"></span>
</div>
</label>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-semibold">MR</div>
<div>
<div className="font-medium text-slate-500">Mohsin Raza</div>
<div className="text-xs text-slate-400">mohsin@sbca.gov.pk</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-1.5 text-slate-400">
<span className="iconify text-slate-400" data-icon="lucide:user" data-width="14"></span>
<span>Staff</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-500 border border-slate-200">
                                                Legal Dept
                                            </span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Inactive
                                            </span>
</td>
<td className="py-3 px-4 text-xs text-slate-500">Oct 24, 2023</td>
<td className="py-3 px-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
<span>Showing 3 of 142 staff members</span>
<div className="flex gap-1">
<button className="px-2 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50">Prev</button>
<button className="px-2 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50">Next</button>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900">Departments</h2>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                                Manage All <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-md">
<span className="iconify" data-height="18" data-icon="lucide:folder-open" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500 transition-colors" data-icon="lucide:more-vertical" data-width="16"></span>
</div>
<h3 className="font-medium text-slate-900 text-sm">Record Room</h3>
<p className="text-xs text-slate-500 mt-1">Files, Tracking, Archive</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
<span>24 Staff</span>
</div>
</div>

<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="p-2 bg-blue-50 text-blue-600 rounded-md">
<span className="iconify" data-height="18" data-icon="lucide:building" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500 transition-colors" data-icon="lucide:more-vertical" data-width="16"></span>
</div>
<h3 className="font-medium text-slate-900 text-sm">Town Planning</h3>
<p className="text-xs text-slate-500 mt-1">Approval, Maps</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
<span>18 Staff</span>
</div>
</div>

<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="p-2 bg-orange-50 text-orange-600 rounded-md">
<span className="iconify" data-height="18" data-icon="lucide:scale" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="iconify text-slate-300 group-hover:text-slate-500 transition-colors" data-icon="lucide:more-vertical" data-width="16"></span>
</div>
<h3 className="font-medium text-slate-900 text-sm">Legal Dept</h3>
<p className="text-xs text-slate-500 mt-1">Litigation, Notices</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
<span>7 Staff</span>
</div>
</div>

<div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300 hover:bg-slate-100 transition-all cursor-pointer flex flex-col items-center justify-center text-center h-full min-h-[140px]">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-2 shadow-sm">
<span className="iconify text-slate-500" data-icon="lucide:plus" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-600">Add Department</span>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900">Company Configuration</h2>
<span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-200">Multi-tenant</span>
</div>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 space-y-6">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
<span className="text-white font-bold text-sm">SB</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900">SBCA Main HQ</h3>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-slate-300 appearance-none cursor-pointer checked:right-0 checked:border-slate-900" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<p className="text-xs text-slate-500 mt-1">Primary record configuration. Controls 80% of data flow.</p>
<div className="flex gap-2 mt-3">
<span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-medium">Default</span>
<span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-medium">Admin: Root</span>
</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
<span className="text-slate-700 font-bold text-sm">RD</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900">Regional District 1</h3>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-slate-300 appearance-none cursor-pointer checked:right-0 checked:border-emerald-600" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-emerald-600 cursor-pointer" htmlFor="toggle2"></label>
</input></div>
</div>
<p className="text-xs text-slate-500 mt-1">Isolated file tracking for District South.</p>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs font-medium text-indigo-600 hover:underline">Edit Config</button>
<span className="text-slate-300">|</span>
<button className="text-xs font-medium text-slate-500 hover:text-slate-700">View Logs</button>
</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<button className="w-full py-2 border border-dashed border-slate-300 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                Configure New Entity
                             </button>
</div>
</section>
</div>

<div className="text-center pt-8 pb-4">
<p className="text-[10px] text-slate-400">RFTMS v1.0.2 © 2023 SBCA Record Room Management System. All rights reserved.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
