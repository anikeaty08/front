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
      

<aside className="w-64 border-r bg-[#09090b] flex flex-col flex-shrink-0 sticky top-0 h-screen hidden md:flex border-white/10">
<div className="h-16 flex items-center px-6 border-b border-white/5">
<span className="text-lg font-medium tracking-tight text-white">TaskFlow</span>
</div>
<nav className="flex-1 overflow-y-auto pt-4 pr-3 pb-4 pl-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors bg-white/5 text-blue-400" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors text-neutral-400 hover:text-neutral-100 hover:bg-white/5" href="#users">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Users</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors text-neutral-400 hover:text-neutral-100 hover:bg-white/5" href="#tasks">
<iconify-icon className="text-lg" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Tasks</span>
</a>
</nav>
<div className="p-3 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-neutral-400 hover:text-cyan-400 hover:bg-white/5">
<iconify-icon className="text-lg" icon="solar:logout-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Logout</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="md:hidden h-16 border-b flex items-center justify-between px-4 sticky top-0 bg-[#09090b]/80 backdrop-blur-md z-10 border-white/10">
<span className="text-lg font-medium tracking-tight text-white">TaskFlow</span>
<button className="p-2 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>
<div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 space-y-12">

<section className="max-w-6xl mx-auto space-y-6" id="dashboard">
<div className="flex flex-col gap-1">
<h1 className="text-2xl font-medium tracking-tight text-white">Overview</h1>
<p className="text-sm text-neutral-500">Monitor your team's task management metrics.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white/[0.02] border rounded-xl p-5 flex flex-col justify-between border-white/10">
<div className="flex items-start justify-between">
<span className="text-sm font-normal text-neutral-400">Total Users</span>
<iconify-icon className="text-neutral-500 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="mt-4">
<span className="text-3xl font-medium tracking-tight text-white">135</span>
<div className="mt-2 flex items-center gap-2 text-xs">
<span className="flex items-center gap-1 text-indigo-400">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                    120 active
                                </span>
<span className="text-neutral-600">·</span>
<span className="flex items-center gap-1 text-neutral-500">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                                    15 inactive
                                </span>
</div>
</div>
</div>

<div className="bg-white/[0.02] border rounded-xl p-5 flex flex-col justify-between border-white/10">
<div className="flex items-start justify-between">
<span className="text-sm font-normal text-neutral-400">Total Tasks</span>
<iconify-icon className="text-neutral-500 text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="mt-4">
<span className="text-3xl font-medium tracking-tight text-white">1,248</span>
<p className="mt-2 text-xs text-neutral-500 flex items-center gap-1">
<iconify-icon className="text-indigo-400" icon="solar:trend-up-linear"></iconify-icon>
<span className="text-indigo-400">+12%</span> from last month
                            </p>
</div>
</div>

<div className="bg-white/[0.02] border rounded-xl p-5 flex flex-col justify-between border-white/10">
<div className="flex items-start justify-between">
<span className="text-sm font-normal text-neutral-400">In Progress</span>
<iconify-icon className="text-lg text-blue-400" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="mt-4">
<span className="text-3xl font-medium tracking-tight text-white">342</span>
<p className="mt-2 text-xs text-neutral-500">Currently active tasks</p>
</div>
</div>

<div className="bg-white/[0.02] border rounded-xl p-5 flex flex-col justify-between border-white/10">
<div className="flex items-start justify-between">
<span className="text-sm font-normal text-neutral-400">Completed</span>
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="mt-4">
<span className="text-3xl font-medium tracking-tight text-white">890</span>
<p className="mt-2 text-xs text-neutral-500 flex items-center gap-1">
<iconify-icon className="text-indigo-400" icon="solar:trend-up-linear"></iconify-icon>
<span className="text-indigo-400">+5%</span> completion rate
                            </p>
</div>
</div>
</div>

<div className="bg-white/[0.02] border rounded-xl p-6 border-white/10">
<h2 className="text-base font-medium mb-6 text-white">Task Breakdown</h2>
<div className="flex flex-col md:flex-row items-center gap-8 justify-center md:justify-start pl-0 md:pl-10 py-4">

<div className="relative w-40 h-40 rounded-full flex items-center justify-center" style={{background: 'conic-gradient(#9333ea 0% 65%, #3f3f46 65% 85%, #27272a 85% 100%)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)'}}>

<div className="absolute w-28 h-28 bg-[#0e0e11] rounded-full flex items-center justify-center border border-white/5">
<div className="text-center">
<span className="block text-xl font-medium tracking-tight text-white">1.2k</span>
<span className="block text-xs text-neutral-500">Total</span>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-blue-600"></div>
<span className="text-sm w-24 text-neutral-300">Completed</span>
<span className="text-sm font-medium text-white">65%</span>
</div>
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<span className="text-sm w-24 text-neutral-300">In Progress</span>
<span className="text-sm font-medium text-white">20%</span>
</div>
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full border bg-neutral-800 border-white/10"></div>
<span className="text-sm w-24 text-neutral-300">Pending</span>
<span className="text-sm font-medium text-white">15%</span>
</div>
</div>
</div>
</div>
</section>

<hr className="max-w-6xl mx-auto border-white/5"/>

<section className="max-w-6xl mx-auto space-y-4" id="users">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-lg font-medium tracking-tight text-white">Users</h2>
<p className="text-sm text-neutral-500">Manage system access and roles.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white bg-blue-600">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
                        Add User
                    </button>
</div>
<div className="border rounded-xl overflow-hidden bg-white/[0.01] border-white/10">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="text-xs bg-white/[0.02] border-b font-normal text-neutral-400 border-white/10">
<tr>
<th className="px-6 py-3 font-normal" scope="col">Username</th>
<th className="px-6 py-3 font-normal" scope="col">Email</th>
<th className="px-6 py-3 font-normal" scope="col">Role</th>
<th className="px-6 py-3 font-normal" scope="col">Status</th>
<th className="px-6 py-3 font-normal text-right" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-neutral-200">Alex Morgan</td>
<td className="px-6 py-4 text-neutral-400">alex.m@taskflow.inc</td>
<td className="px-6 py-4 text-neutral-400">Admin</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">Active</span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-neutral-500 transition-colors hover:text-neutral-300" title="Deactivate">
<iconify-icon className="text-lg" icon="solar:forbidden-circle-linear"></iconify-icon>
</button>
<button className="text-neutral-500 transition-colors hover:text-cyan-400" title="Delete">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-neutral-200">Jordan Lee</td>
<td className="px-6 py-4 text-neutral-400">jordan.lee@taskflow.inc</td>
<td className="px-6 py-4 text-neutral-400">Manager</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">Active</span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-neutral-500 transition-colors hover:text-neutral-300" title="Deactivate">
<iconify-icon className="text-lg" icon="solar:forbidden-circle-linear"></iconify-icon>
</button>
<button className="text-neutral-500 transition-colors hover:text-cyan-400" title="Delete">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-neutral-200">Taylor Swift</td>
<td className="px-6 py-4 text-neutral-400">taylor.s@taskflow.inc</td>
<td className="px-6 py-4 text-neutral-400">User</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-500/10 border border-neutral-500/20 text-neutral-400">Inactive</span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-neutral-500 transition-colors hover:text-indigo-400" title="Activate">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</button>
<button className="text-neutral-500 transition-colors hover:text-cyan-400" title="Delete">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-3 border-t flex items-center justify-between text-xs border-white/5">
<span className="text-neutral-500">Showing 1 to 3 of 135 users</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded-md text-neutral-500 disabled:opacity-50 hover:text-white hover:bg-white/5" disabled="">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-7 h-7 rounded-md flex items-center justify-center font-medium bg-white/10 text-white">1</button>
<button className="w-7 h-7 rounded-md flex items-center justify-center text-neutral-400 hover:bg-white/5">2</button>
<button className="w-7 h-7 rounded-md flex items-center justify-center text-neutral-400 hover:bg-white/5">3</button>
<span className="px-1 text-neutral-600">...</span>
<button className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/5">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<hr className="max-w-6xl mx-auto border-white/5"/>

<section className="max-w-6xl mx-auto space-y-4 pb-10" id="tasks">
<div className="flex flex-col gap-1">
<h2 className="text-lg font-medium tracking-tight text-white">Recent Tasks</h2>
<p className="text-sm text-neutral-500">Overview of all created tasks.</p>
</div>
<div className="border rounded-xl overflow-hidden bg-white/[0.01] border-white/10">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="text-xs bg-white/[0.02] border-b font-normal text-neutral-400 border-white/10">
<tr>
<th className="px-6 py-3 font-normal" scope="col">Title</th>
<th className="px-6 py-3 font-normal" scope="col">Status</th>
<th className="px-6 py-3 font-normal" scope="col">Created By</th>
<th className="px-6 py-3 font-normal" scope="col">Created At</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-neutral-200">Design new landing page</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">In Progress</span>
</td>
<td className="px-6 py-4 text-neutral-400">alex.m@taskflow.inc</td>
<td className="px-6 py-4 text-neutral-500">Oct 24, 2023</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-neutral-200">Update API documentation</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-500/10 border border-neutral-500/20 text-neutral-400">Pending</span>
</td>
<td className="px-6 py-4 text-neutral-400">jordan.lee@taskflow.inc</td>
<td className="px-6 py-4 text-neutral-500">Oct 23, 2023</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium line-through text-neutral-500 text-neutral-200">Fix navigation bug on mobile</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border bg-white/5 text-neutral-300 border-white/10">Completed</span>
</td>
<td className="px-6 py-4 text-neutral-400">alex.m@taskflow.inc</td>
<td className="px-6 py-4 text-neutral-500">Oct 21, 2023</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-neutral-200">Database migration setup</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">In Progress</span>
</td>
<td className="px-6 py-4 text-neutral-400">sarah.k@taskflow.inc</td>
<td className="px-6 py-4 text-neutral-500">Oct 20, 2023</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-3 border-t flex items-center justify-between text-xs border-white/5">
<span className="text-neutral-500">Showing 1 to 4 of 1,248 tasks</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded-md text-neutral-500 disabled:opacity-50 hover:text-white hover:bg-white/5" disabled="">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-7 h-7 rounded-md flex items-center justify-center font-medium bg-white/10 text-white">1</button>
<button className="w-7 h-7 rounded-md flex items-center justify-center text-neutral-400 hover:bg-white/5">2</button>
<button className="w-7 h-7 rounded-md flex items-center justify-center text-neutral-400 hover:bg-white/5">3</button>
<span className="px-1 text-neutral-600">...</span>
<button className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/5">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
