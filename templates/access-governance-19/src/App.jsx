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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple View Switching Logic for Presentation
        function switchView(viewId) {
            // Hide all sections
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            // Show selected
            document.getElementById(viewId).classList.add('active');

            // Update Nav State
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('active');
                el.querySelector('iconify-icon').classList.remove('text-indigo-600');
                el.querySelector('iconify-icon').classList.add('text-slate-400');
            });
            const activeNav = document.getElementById('nav-' + viewId);
            activeNav.classList.add('active');
            activeNav.querySelector('iconify-icon').classList.remove('text-slate-400');
            
            // Update Title
            const titles = {
                'users': 'User Management',
                'roles': 'Role Management',
                'registry': 'Feature Registry',
                'guardrails': 'Guardrails',
                'audit': 'Audit Logs'
            };
            document.getElementById('page-title').innerText = titles[viewId];
        }

        // Demo: Hook up the Save button to the modal
        document.querySelector('button .solar\\:disk-linear').parentElement.addEventListener('click', () => {
             document.getElementById('modal-overlay').classList.remove('hidden');
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
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20">

<div className="h-14 flex items-center px-4 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-semibold tracking-tighter">C</div>
<span className="font-semibold tracking-tight text-slate-900">CORE</span>
<span className="bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded border border-slate-200 ml-1 font-medium">ADMIN</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
<p className="px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Management</p>
<button className="nav-item w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors group" id="nav-users" onclick="switchView('users')">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="font-medium">User Management</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors group active" id="nav-roles" onclick="switchView('roles')">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" height="18" icon="solar:shield-user-linear" width="18"></iconify-icon>
<span className="font-medium">Role Management</span>
</button>
<p className="px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-6">System &amp; Compliance</p>
<button className="nav-item w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors group" id="nav-registry" onclick="switchView('registry')">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" height="18" icon="solar:list-check-linear" width="18"></iconify-icon>
<span className="font-medium">Feature Registry</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors group" id="nav-guardrails" onclick="switchView('guardrails')">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" height="18" icon="solar:lock-keyhole-linear" width="18"></iconify-icon>
<span className="font-medium">Policy Guardrails</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors group" id="nav-audit" onclick="switchView('audit')">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" height="18" icon="solar:clipboard-list-linear" width="18"></iconify-icon>
<span className="font-medium">Audit Logs</span>
</button>
</nav>

<div className="p-3 border-t border-slate-200">
<div className="flex items-center gap-3 px-1">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-xs font-medium">SA</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">Super Admin</p>
<p className="text-[10px] text-slate-500 truncate">ops.lead@core.sys</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon height="16" icon="solar:logout-2-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen min-w-0 overflow-hidden bg-slate-50 relative">

<header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
<div className="flex items-center gap-2 text-slate-500">
<span className="text-xs">Admin Module</span>
<iconify-icon className="text-slate-300" height="12" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-xs font-medium text-slate-900" id="page-title">Role Management</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 border border-emerald-100 rounded text-emerald-700">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-semibold tracking-tight uppercase">Production</span>
</div>
</div>
</header>

<div className="flex-1 overflow-auto p-6 scroll-smooth">

<section className="view-section max-w-6xl mx-auto" id="users">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-lg font-medium text-slate-900 tracking-tight">Users</h1>
<p className="text-xs text-slate-500 mt-1">Manage system access, roles, and operational teams.</p>
</div>
<button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors shadow-sm">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
                        Create User
                    </button>
</div>

<div className="bg-white border border-slate-200 rounded-t-lg p-3 flex flex-wrap gap-3 items-center">
<div className="relative w-64">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-slate-400" placeholder="Search by name or email..." type="text"/>
</div>
<select className="px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 focus:outline-none focus:border-indigo-500">
<option>All Teams</option>
<option>Finance</option>
<option>Operations</option>
<option>Risk</option>
</select>
<select className="px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 focus:outline-none focus:border-indigo-500">
<option>All Statuses</option>
<option>Active</option>
<option>Inactive</option>
</select>
</div>

<div className="bg-white border-x border-b border-slate-200 rounded-b-lg overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 text-xs font-medium text-slate-500 border-b border-slate-200">
<tr>
<th className="px-4 py-3 w-1/3">User</th>
<th className="px-4 py-3">Team</th>
<th className="px-4 py-3">Role</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3">Last Login</th>
<th className="px-4 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-medium">JD</div>
<div>
<p className="font-medium text-slate-900">John Doe</p>
<p className="text-slate-500">john.d@core.sys</p>
</div>
</div>
</td>
<td className="px-4 py-3 text-slate-600">Finance</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded border border-slate-200 bg-white text-slate-600 font-medium">Finance Manager</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium"><span className="w-1 h-1 rounded-full bg-emerald-500"></span>Active</span></td>
<td className="px-4 py-3 text-slate-500 font-mono">Oct 24, 14:32</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-slate-400 hover:text-indigo-600" title="Edit User"><iconify-icon icon="solar:pen-linear" width="16"></iconify-icon></button>
<button className="p-1 text-slate-400 hover:text-amber-600" title="Deactivate"><iconify-icon icon="solar:forbidden-circle-linear" width="16"></iconify-icon></button>
</div>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-medium">AS</div>
<div>
<p className="font-medium text-slate-900">Alice Smith</p>
<p className="text-slate-500">alice.s@core.sys</p>
</div>
</div>
</td>
<td className="px-4 py-3 text-slate-600">Operations</td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded border border-slate-200 bg-white text-slate-600 font-medium">OPS Agent</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium"><span className="w-1 h-1 rounded-full bg-slate-400"></span>Inactive</span></td>
<td className="px-4 py-3 text-slate-500 font-mono">Sep 12, 09:15</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:pen-linear" width="16"></iconify-icon></button>
<button className="p-1 text-slate-400 hover:text-red-600" title="Force Logout"><iconify-icon icon="solar:logout-2-linear" width="16"></iconify-icon></button>
</div>
</td>
</tr>
</tbody>
</table>

<div className="bg-slate-50 border-t border-slate-200 px-4 py-2 flex items-center justify-between">
<span className="text-xs text-slate-500">Showing 1-10 of 42</span>
<div className="flex gap-1">
<button className="px-2 py-1 border border-slate-200 rounded bg-white text-slate-400 hover:text-slate-600 disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 border border-slate-200 rounded bg-white text-slate-600 hover:text-slate-900">Next</button>
</div>
</div>
</div>
</section>

<section className="view-section active h-full flex flex-col" id="roles">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 flex-shrink-0">
<div>
<h1 className="text-lg font-medium text-slate-900 tracking-tight">Role Management</h1>
<p className="text-xs text-slate-500 mt-1">Configure granular access controls and RBAC policies.</p>
</div>
<div className="flex gap-2">

<span className="text-xs text-slate-400 self-center mr-2">Unsaved changes</span>
<button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded text-xs font-medium transition-colors shadow-sm">
<iconify-icon height="16" icon="solar:disk-linear" width="16"></iconify-icon>
                            Save Changes
                        </button>
</div>
</div>
<div className="flex flex-1 gap-6 overflow-hidden min-h-0">

<div className="w-64 flex-shrink-0 flex flex-col bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<div className="p-3 border-b border-slate-200 flex justify-between items-center bg-slate-50">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Roles</span>
<button className="text-indigo-600 hover:text-indigo-700"><iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon></button>
</div>
<div className="overflow-y-auto flex-1 p-2 space-y-1">

<button className="w-full text-left px-3 py-2 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-between group">
<div>
<p className="text-xs font-medium text-indigo-900">Finance Manager</p>
<p className="text-[10px] text-indigo-500">4 Users</p>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</button>

<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between group transition-colors">
<div>
<p className="text-xs font-medium text-slate-700">OPS Agent</p>
<p className="text-[10px] text-slate-400">12 Users</p>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</button>

<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between group transition-colors">
<div>
<p className="text-xs font-medium text-slate-700">Risk Analyst</p>
<p className="text-[10px] text-slate-400">2 Users</p>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</button>

<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between group transition-colors opacity-70">
<div>
<p className="text-xs font-medium text-slate-700">Auditor (External)</p>
<p className="text-[10px] text-slate-400">0 Users</p>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</button>
</div>
</div>

<div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">

<div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
<div className="flex justify-between items-start">
<div className="space-y-2">
<div className="flex items-center gap-3">
<h2 className="text-base font-semibold text-slate-900">Finance Manager</h2>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Active Role</span>
</div>
<p className="text-xs text-slate-500 max-w-lg">
                                        Handles all payment processing, refund approvals, and ledger reconciliation. 
                                        Restricted from operational user management.
                                    </p>
</div>
<div className="flex items-center gap-2">
<label className="text-xs font-medium text-slate-700">Role Status</label>

<div className="relative inline-block w-9 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-emerald-500 appearance-none cursor-pointer transition-all duration-200 checked:bg-emerald-500 checked:border-emerald-500" id="role-status" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-emerald-200 cursor-pointer" htmlFor="role-status"></label>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-auto bg-white relative">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 text-xs font-semibold text-slate-500 sticky top-0 z-10 shadow-sm border-b border-slate-200">
<tr>
<th className="px-6 py-3 bg-slate-50 w-1/4">Feature Module</th>
<th className="px-4 py-3 bg-slate-50 text-center w-20">View</th>
<th className="px-4 py-3 bg-slate-50 text-center w-20">Create</th>
<th className="px-4 py-3 bg-slate-50 text-center w-20">Edit</th>
<th className="px-4 py-3 bg-slate-50 text-center w-20">Approve</th>
<th className="px-4 py-3 bg-slate-50 text-center w-20">Delete</th>
<th className="px-4 py-3 bg-slate-50 text-center w-20">Export</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-slate-100">

<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:user-id-linear"></iconify-icon>
                                                Customer Profiles
                                            </div>
</td>

<td className="px-4 py-3 text-center">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 cursor-pointer" type="checkbox"/>
</td>

<td className="px-4 py-3 text-center">
<input className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 cursor-pointer" type="checkbox"/>
</td>

<td className="px-4 py-3 text-center">
<input className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 cursor-pointer" type="checkbox"/>
</td>

<td className="px-4 py-3 text-center group relative cursor-not-allowed">
<iconify-icon className="text-slate-300 inline-block" icon="solar:lock-keyhole-linear"></iconify-icon>
</td>

<td className="px-4 py-3 text-center cursor-not-allowed">
<iconify-icon className="text-slate-300 inline-block" icon="solar:lock-keyhole-linear"></iconify-icon>
</td>

<td className="px-4 py-3 text-center">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 cursor-pointer" type="checkbox"/>
</td>
</tr>

<tr className="hover:bg-slate-50 bg-slate-50/30">
<td className="px-6 py-4 font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:card-transfer-linear"></iconify-icon>
                                                Payments
                                            </div>
</td>
<td className="px-4 py-3 text-center"><input checked="" className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
<td className="px-4 py-3 text-center"><input className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
<td className="px-4 py-3 text-center"><input className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
<td className="px-4 py-3 text-center"><input className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
<td className="px-4 py-3 text-center"><iconify-icon className="text-slate-300" icon="solar:lock-keyhole-linear"></iconify-icon></td>
<td className="px-4 py-3 text-center"><input checked="" className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
</tr>

<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:bill-check-linear"></iconify-icon>
                                                Refunds &amp; Disputes
                                            </div>
</td>
<td className="px-4 py-3 text-center"><input checked="" className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
<td className="px-4 py-3 text-center"><input checked="" className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
<td className="px-4 py-3 text-center"><input checked="" className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>

<td className="px-4 py-3 text-center bg-indigo-50/50">
<input checked="" className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/>
</td>
<td className="px-4 py-3 text-center"><iconify-icon className="text-slate-300" icon="solar:lock-keyhole-linear"></iconify-icon></td>
<td className="px-4 py-3 text-center"><input checked="" className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
</tr>

<tr className="hover:bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:settings-linear"></iconify-icon>
                                                System Config
                                            </div>
</td>
<td className="px-4 py-3 text-center"><input className="rounded border-slate-300 text-indigo-600 h-4 w-4" type="checkbox"/></td>
<td className="px-4 py-3 text-center"><iconify-icon className="text-slate-300" icon="solar:lock-keyhole-linear"></iconify-icon></td>
<td className="px-4 py-3 text-center"><iconify-icon className="text-slate-300" icon="solar:lock-keyhole-linear"></iconify-icon></td>
<td className="px-4 py-3 text-center"><iconify-icon className="text-slate-300" icon="solar:lock-keyhole-linear"></iconify-icon></td>
<td className="px-4 py-3 text-center"><iconify-icon className="text-slate-300" icon="solar:lock-keyhole-linear"></iconify-icon></td>
<td className="px-4 py-3 text-center"><iconify-icon className="text-slate-300" icon="solar:lock-keyhole-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="view-section max-w-4xl mx-auto" id="registry">
<div className="mb-6">
<h1 className="text-lg font-medium text-slate-900 tracking-tight">Feature &amp; Permission Registry</h1>
<p className="text-xs text-slate-500 mt-1">System-defined constants. Read-only view for audit purposes.</p>
</div>
<div className="space-y-4">

<div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
<div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
<span className="font-medium text-slate-700">Financial Ledger</span>
<span className="text-[10px] text-slate-400 font-mono">MOD_FIN_001</span>
</div>
<div className="divide-y divide-slate-100">
<div className="px-4 py-3 flex justify-between items-center hover:bg-slate-50">
<div>
<div className="flex items-center gap-2">
<span className="font-mono text-[10px] text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">LEDGER_VIEW</span>
<span className="text-xs text-slate-700">View General Ledger</span>
</div>
<p className="text-[10px] text-slate-500 mt-1 pl-1">Allows read-only access to historical transaction data.</p>
</div>
<span className="text-[10px] text-slate-400">Assigned to 3 Roles</span>
</div>
<div className="px-4 py-3 flex justify-between items-center hover:bg-slate-50">
<div>
<div className="flex items-center gap-2">
<span className="font-mono text-[10px] text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">LEDGER_EXPORT</span>
<span className="text-xs text-slate-700">Export Ledger Data</span>
</div>
<p className="text-[10px] text-slate-500 mt-1 pl-1">Allows downloading CSV/PDF reports.</p>
</div>
<span className="text-[10px] text-slate-400">Assigned to 1 Role</span>
</div>
</div>
</div>
</div>
</section>

<section className="view-section max-w-4xl mx-auto" id="guardrails">
<div className="mb-6">
<h1 className="text-lg font-medium text-slate-900 tracking-tight">Policy Guardrails</h1>
<p className="text-xs text-slate-500 mt-1">Non-overridable system rules enforced at the kernel level.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 items-start">
<iconify-icon className="text-amber-600 mt-0.5 flex-shrink-0" icon="solar:shield-warning-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-amber-900">Refund Approval Hierarchy</h3>
<p className="text-xs text-amber-800 mt-1 leading-relaxed">
                                Approvals for refunds &gt; $5,000 are strictly restricted to the <span className="font-semibold">Finance Manager</span> role. This policy cannot be bypassed by Super Admins.
                            </p>
</div>
</div>

<div className="bg-slate-100 border border-slate-200 rounded-lg p-4 flex gap-3 items-start opacity-75">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0" icon="solar:lock-keyhole-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-slate-800">PII Data Export</h3>
<p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                Bulk export of PII (Personally Identifiable Information) is disabled for all roles except <span className="font-semibold">Compliance Officer</span>.
                            </p>
</div>
</div>
</div>
</section>

<section className="view-section max-w-6xl mx-auto" id="audit">
<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-lg font-medium text-slate-900 tracking-tight">Audit Logs</h1>
<p className="text-xs text-slate-500 mt-1">Immutable record of all administrative actions.</p>
</div>
<button className="text-indigo-600 text-xs font-medium hover:underline">Download CSV</button>
</div>
<div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 text-xs font-medium text-slate-500 border-b border-slate-200">
<tr>
<th className="px-4 py-3 whitespace-nowrap">Timestamp (IST)</th>
<th className="px-4 py-3">Actor</th>
<th className="px-4 py-3">Action</th>
<th className="px-4 py-3">Target Entity</th>
<th className="px-4 py-3 w-1/3">Details (Diff)</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-slate-100 font-mono">

<tr className="hover:bg-slate-50">
<td className="px-4 py-3 text-slate-500">2023-10-24 14:30:22</td>
<td className="px-4 py-3 text-slate-700">super.admin</td>
<td className="px-4 py-3"><span className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-100 text-[10px]">ROLE_UPDATE</span></td>
<td className="px-4 py-3 text-slate-600">Role: Finance Manager</td>
<td className="px-4 py-3 text-slate-500 truncate">
                                    Enabled <span className="text-slate-800">REFUND_APPROVE</span> permission
                                </td>
</tr>

<tr className="hover:bg-slate-50">
<td className="px-4 py-3 text-slate-500">2023-10-24 12:15:10</td>
<td className="px-4 py-3 text-slate-700">super.admin</td>
<td className="px-4 py-3"><span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">USER_CREATE</span></td>
<td className="px-4 py-3 text-slate-600">User: Jane Doe</td>
<td className="px-4 py-3 text-slate-500 truncate">
                                    Assigned to <span className="text-slate-800">Operations</span> team
                                </td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</main>

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 hidden flex items-center justify-center" id="modal-overlay">
<div className="bg-white rounded-lg shadow-xl border border-slate-200 w-full max-w-md overflow-hidden">
<div className="p-4 border-b border-slate-100 bg-slate-50">
<h3 className="text-sm font-semibold text-slate-900">Confirm Policy Change</h3>
</div>
<div className="p-6">
<p className="text-xs text-slate-600 mb-4">
                    You are enabling <strong>Refund Approvals</strong> for the <strong>Finance Manager</strong> role. 
                    This will allow 4 users to process refunds immediately.
                </p>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Reason for change <span className="text-red-500">*</span></label>
<textarea className="w-full border border-slate-200 rounded p-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none h-20 placeholder-slate-400" placeholder="Required for audit logs..."></textarea>
</div>
</div>
<div className="bg-slate-50 p-4 flex justify-end gap-2 border-t border-slate-100">
<button className="px-3 py-1.5 rounded text-xs font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-200 transition-colors" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Cancel</button>
<button className="px-3 py-1.5 rounded text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-colors">Confirm Update</button>
</div>
</div>
</div>


    </>
  );
}
