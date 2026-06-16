import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Page Navigation Logic
        function switchPage(pageId) {
            // 1. Hide all views
            const views = document.querySelectorAll('.page-view');
            views.forEach(view => {
                view.classList.remove('active');
            });

            // 2. Show target view
            const target = document.getElementById('view-' + pageId);
            if (target) {
                target.classList.add('active');
            }

            // 3. Update Sidebar Active State
            const navButtons = document.querySelectorAll('aside nav button');
            navButtons.forEach(btn => {
                btn.classList.remove('bg-gray-100', 'text-gray-900');
                btn.classList.add('text-gray-600', 'hover:bg-gray-50');
                
                // Reset icon color
                const icon = btn.querySelector('.iconify');
                if(icon) {
                    icon.classList.remove('text-gray-900');
                    icon.classList.add('text-gray-400');
                }
            });

            const activeBtn = document.getElementById('nav-' + pageId);
            if (activeBtn) {
                activeBtn.classList.remove('text-gray-600', 'hover:bg-gray-50');
                activeBtn.classList.add('bg-gray-100', 'text-gray-900');
                
                // Active icon color
                const icon = activeBtn.querySelector('.iconify');
                if(icon) {
                    icon.classList.remove('text-gray-400');
                    icon.classList.add('text-gray-900');
                }
            }

            // 4. Update Header Titles
            const titleEl = document.getElementById('page-title');
            const subTitleEl = document.getElementById('page-subtitle');
            const actionsEl = document.getElementById('header-actions');
            
            // Clear actions
            actionsEl.innerHTML = '';

            const titles = {
                'dashboard': ['Dashboard', 'Overview'],
                'members': ['Members', 'Directory'],
                'transactions': ['Transactions', 'Payments'],
                'communications': ['Communications', 'Inbox'],
                'classifications': ['Classifications', 'Categories'],
                'reports': ['Reports', 'Analytics'],
                'fields': ['System', 'Field Manager'],
                'settings': ['System', 'Settings']
            };

            if (titles[pageId]) {
                titleEl.textContent = titles[pageId][0];
                subTitleEl.textContent = titles[pageId][1];
            }

            // Dynamic Header Actions
            if (pageId === 'members') {
                actionsEl.innerHTML = `
                <button class="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 shadow-sm transition-colors">
                    <span class="iconify" data-icon="lucide:download" data-width="14"></span>
                    Export List
                </button>
                <button class="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 shadow-sm transition-colors">
                    <span class="iconify" data-icon="lucide:plus" data-width="14"></span>
                    New Member
                </button>`;
            } else if (pageId === 'dashboard') {
                 actionsEl.innerHTML = `
                 <span class="text-xs text-gray-500 mr-2">Last updated: Just now</span>
                <button class="p-2 text-gray-500 hover:bg-gray-50 border border-gray-200 rounded-md">
                    <span class="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
                </button>`;
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            switchPage('members'); // Default to Members view as per previous request
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">
<div className="h-14 flex items-center px-6 border-b border-gray-100">
<span className="font-semibold text-lg tracking-tight">JRA<span className="text-gray-400">ADMIN</span></span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" id="nav-dashboard" onclick="switchPage('dashboard')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:layout-dashboard" data-width="18" strokeWidth="1.5"></span>
                Dashboard
            </button>

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group transition-colors" id="nav-members" onclick="switchPage('members')">
<span className="iconify text-gray-900" data-icon="lucide:users" data-width="18" strokeWidth="1.5"></span>
                Members
            </button>

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" id="nav-transactions" onclick="switchPage('transactions')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:credit-card" data-width="18" strokeWidth="1.5"></span>
                Transactions
            </button>

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" id="nav-communications" onclick="switchPage('communications')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:message-square" data-width="18" strokeWidth="1.5"></span>
                Communications
            </button>

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" id="nav-classifications" onclick="switchPage('classifications')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:tag" data-width="18" strokeWidth="1.5"></span>
                Classifications
            </button>

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" id="nav-reports" onclick="switchPage('reports')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:bar-chart-3" data-width="18" strokeWidth="1.5"></span>
                Reports
            </button>
<div className="pt-4 mt-4 border-t border-gray-100">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">System</p>

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" id="nav-fields" onclick="switchPage('fields')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:sliders-horizontal" data-width="18" strokeWidth="1.5"></span>
                    Field Manager
                </button>

<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" id="nav-settings" onclick="switchPage('settings')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:settings" data-width="18" strokeWidth="1.5"></span>
                    Settings
                </button>
</div>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">AD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Admin User</span>
<span className="text-xs text-gray-500">admin@jra.jo</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white">

<header className="h-14 flex items-center justify-between px-6 border-b border-gray-200 bg-white flex-shrink-0 z-10">
<div className="flex items-center gap-4">
<h1 className="text-sm font-semibold text-gray-900" id="page-title">Members</h1>
<span className="text-gray-300">/</span>
<span className="text-sm text-gray-500" id="page-subtitle">Overview</span>
</div>
<div className="flex items-center gap-3" id="header-actions">

</div>
</header>

<div className="flex-1 overflow-hidden relative">

<div className="page-view overflow-y-auto p-6 bg-gray-50" id="view-dashboard">
<div className="grid grid-cols-4 gap-4 mb-6">
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1">45,200 <span className="text-sm font-normal text-gray-500">JOD</span></h3>
</div>
<span className="iconify text-green-500 bg-green-50 p-1.5 rounded-md" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 w-[70%]"></div>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Active Members</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1">1,162</h3>
</div>
<span className="iconify text-blue-500 bg-blue-50 p-1.5 rounded-md" data-icon="lucide:users" data-width="20"></span>
</div>
<div className="mt-4 flex gap-1">
<div className="h-1 bg-green-500 w-[80%] rounded-full"></div>
<div className="h-1 bg-orange-400 w-[15%] rounded-full"></div>
<div className="h-1 bg-red-500 w-[5%] rounded-full"></div>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Renewal</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1">86</h3>
</div>
<span className="iconify text-orange-500 bg-orange-50 p-1.5 rounded-md" data-icon="lucide:alert-circle" data-width="20"></span>
</div>
<p className="mt-4 text-xs text-gray-500">12 expiring this week</p>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">New Applications</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1">14</h3>
</div>
<span className="iconify text-purple-500 bg-purple-50 p-1.5 rounded-md" data-icon="lucide:file-plus" data-width="20"></span>
</div>
<p className="mt-4 text-xs text-gray-500">Requires review</p>
</div>
</div>
<div className="grid grid-cols-2 gap-6">

<div className="bg-white border border-gray-200 rounded-lg shadow-sm">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-gray-900">Recent Activity</h3>
<button className="text-xs text-gray-500 hover:text-gray-900">View All</button>
</div>
<div className="divide-y divide-gray-50">
<div className="px-5 py-3 flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
<div>
<p className="text-sm text-gray-900 font-medium">Payment Received</p>
<p className="text-xs text-gray-500">Sufra Restaurant paid 250 JOD via Visa</p>
<span className="text-[10px] text-gray-400 mt-1 block">2 mins ago</span>
</div>
</div>
<div className="px-5 py-3 flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
<div>
<p className="text-sm text-gray-900 font-medium">New Member Application</p>
<p className="text-xs text-gray-500">Romero Group applied for membership</p>
<span className="text-[10px] text-gray-400 mt-1 block">1 hour ago</span>
</div>
</div>
<div className="px-5 py-3 flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-gray-300"></div>
<div>
<p className="text-sm text-gray-900 font-medium">System Backup</p>
<p className="text-xs text-gray-500">Automated daily backup completed</p>
<span className="text-[10px] text-gray-400 mt-1 block">4 hours ago</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-gray-900">Expiring Soon</h3>
<button className="text-xs text-gray-500 hover:text-gray-900">Send Reminders</button>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-gray-50/50 text-xs text-gray-500 uppercase">
<tr>
<th className="px-5 py-2 font-medium">Member</th>
<th className="px-5 py-2 font-medium">Date</th>
<th className="px-5 py-2 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">
<tr>
<td className="px-5 py-3 font-medium text-gray-900">Blue Fig</td>
<td className="px-5 py-3 text-red-600 text-xs">Oct 01 (Expired)</td>
<td className="px-5 py-3 text-right"><button className="text-xs text-blue-600 hover:underline">Email</button></td>
</tr>
<tr>
<td className="px-5 py-3 font-medium text-gray-900">Cantaloupe</td>
<td className="px-5 py-3 text-orange-600 text-xs">Tomorrow</td>
<td className="px-5 py-3 text-right"><button className="text-xs text-blue-600 hover:underline">Email</button></td>
</tr>
<tr>
<td className="px-5 py-3 font-medium text-gray-900">Vinaigrette</td>
<td className="px-5 py-3 text-gray-500 text-xs">In 3 days</td>
<td className="px-5 py-3 text-right"><button className="text-xs text-blue-600 hover:underline">Email</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page-view active" id="view-members">
<div className="flex-1 flex overflow-hidden">

<div className="flex-1 flex flex-col bg-white min-w-0 border-r border-gray-200">
<div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-100 bg-gray-50/50">
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="text-xs text-gray-500 font-medium">Total Members</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">1,248</div>
<div className="mt-1 text-xs text-green-600 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +12 this month
                                </div>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="text-xs text-gray-500 font-medium">Pending Renewal</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">86</div>
<div className="mt-1 text-xs text-orange-600 flex items-center gap-1">
<span className="iconify" data-icon="lucide:alert-circle" data-width="12"></span> Action required
                                </div>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="text-xs text-gray-500 font-medium">Revenue (YTD)</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">JOD 45,200</div>
</div>
</div>
<div className="p-4 border-b border-gray-200 flex gap-3 items-center">
<div className="relative flex-1 max-w-sm">
<span className="absolute left-2.5 top-2 text-gray-400 iconify" data-icon="lucide:search" data-width="16"></span>
<input className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 placeholder:text-gray-400" placeholder="Search members..." type="text"/>
</div>
<div className="h-6 w-px bg-gray-200 mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:border-gray-300">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span> Status
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:border-gray-300">
<span className="iconify" data-icon="lucide:tag" data-width="14"></span> Category
                            </button>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 sticky top-0 z-10">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Restaurant</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Category</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Renewal</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="bg-gray-50/80 group cursor-pointer border-l-2 border-l-gray-900">
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Sufra Restaurant</span>
<span className="text-xs text-gray-500">Jabal Amman</span>
</div>
</td>
<td className="px-6 py-3 text-sm text-gray-600">Tourist (5 Star)</td>
<td className="px-6 py-3 text-sm text-gray-600">Dec 31, 2023</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">Active</span>
</td>
<td className="px-6 py-3 text-right">
<span className="iconify text-gray-400" data-icon="lucide:chevron-right" data-width="16"></span>
</td>
</tr>
<tr className="hover:bg-gray-50 group cursor-pointer border-l-2 border-l-transparent">
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Romero Group</span>
<span className="text-xs text-gray-500">Abdoun Circle</span>
</div>
</td>
<td className="px-6 py-3 text-sm text-gray-600">Chain / Group</td>
<td className="px-6 py-3 text-sm text-gray-600">Nov 15, 2023</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-700">Pending</span>
</td>
<td className="px-6 py-3 text-right"></td>
</tr>
<tr className="hover:bg-gray-50 group cursor-pointer border-l-2 border-l-transparent">
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Blue Fig</span>
<span className="text-xs text-gray-500">Abdoun</span>
</div>
</td>
<td className="px-6 py-3 text-sm text-gray-600">Tourist (4 Star)</td>
<td className="px-6 py-3 text-sm text-gray-600">Oct 01, 2023</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">Expired</span>
</td>
<td className="px-6 py-3 text-right"></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="w-[480px] bg-white flex flex-col border-l border-gray-200 overflow-hidden shadow-lg z-10">
<div className="p-6 pb-2 bg-white">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mb-3 border border-gray-200">
<span className="iconify" data-icon="lucide:store" data-width="24"></span>
</div>
<div className="flex gap-2">
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md"><span className="iconify" data-icon="lucide:mail" data-width="16"></span></button>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md"><span className="iconify" data-icon="lucide:edit-3" data-width="16"></span></button>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Sufra Restaurant</h2>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm text-gray-500">ID: #JRA-8821</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="text-sm text-green-600 font-medium">Active Member</span>
</div>
<div className="mt-6 flex gap-6 border-b border-gray-200">
<button className="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">Profile</button>
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-200">Transactions</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8">
<section>
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">General Information</h3>
<div className="grid grid-cols-2 gap-y-4 gap-x-4">
<div><label className="block text-xs text-gray-500 mb-1">Contact</label><p className="text-sm font-medium text-gray-900">Omar Ghaith</p></div>
<div><label className="block text-xs text-gray-500 mb-1">Phone</label><p className="text-sm font-medium text-gray-900">+962 79 000 0000</p></div>
<div className="col-span-2"><label className="block text-xs text-gray-500 mb-1">Address</label><p className="text-sm font-medium text-gray-900">Rainbow Street, Bldg 24, Jabal Amman</p></div>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-3"><h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Communication Log</h3></div>
<div className="space-y-3">
<div className="flex gap-3 items-start"><div className="mt-0.5 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100"><span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span></div><div className="flex-1 border-b border-gray-100 pb-3"><div className="flex justify-between"><span className="text-xs font-semibold text-gray-900">Outbound</span><span className="text-[10px] text-gray-400">2 days ago</span></div><p className="text-xs text-gray-600 mt-1 line-clamp-2">Sent renewal reminder letter #REF-2024-001.</p></div></div>
</div>
</section>
</div>
<div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-red-600 bg-white border border-gray-200 rounded-md hover:bg-red-50">Deactivate</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">Save</button>
</div>
</div>
</div>
</div>

<div className="page-view flex-1 bg-white" id="view-transactions">
<div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
<div className="flex gap-3">
<div className="relative w-64">
<span className="absolute left-2.5 top-2 text-gray-400 iconify" data-icon="lucide:search" data-width="16"></span>
<input className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Search transactions..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span> Date Range
                        </button>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span> Add Payment
                    </button>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 sticky top-0">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Ref ID</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Member</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Type</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Date</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b text-right">Amount</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b text-center">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50">
<td className="px-6 py-3 text-sm font-mono text-gray-500">TRX-00921</td>
<td className="px-6 py-3 text-sm font-medium text-gray-900">Sufra Restaurant</td>
<td className="px-6 py-3 text-sm text-gray-600">Annual Subscription</td>
<td className="px-6 py-3 text-sm text-gray-600">Jan 12, 2024</td>
<td className="px-6 py-3 text-sm font-medium text-gray-900 text-right">250.00 JOD</td>
<td className="px-6 py-3 text-center"><span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">Paid</span></td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3 text-sm font-mono text-gray-500">TRX-00922</td>
<td className="px-6 py-3 text-sm font-medium text-gray-900">Romero Group</td>
<td className="px-6 py-3 text-sm text-gray-600">Affiliation Fee</td>
<td className="px-6 py-3 text-sm text-gray-600">Jan 10, 2024</td>
<td className="px-6 py-3 text-sm font-medium text-gray-900 text-right">100.00 JOD</td>
<td className="px-6 py-3 text-center"><span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">Pending</span></td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-3 text-sm font-mono text-gray-500">TRX-00918</td>
<td className="px-6 py-3 text-sm font-medium text-gray-900">Hashem</td>
<td className="px-6 py-3 text-sm text-gray-600">Annual Subscription</td>
<td className="px-6 py-3 text-sm text-gray-600">Jan 02, 2024</td>
<td className="px-6 py-3 text-sm font-medium text-gray-900 text-right">150.00 JOD</td>
<td className="px-6 py-3 text-center"><span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">Paid</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="page-view flex-1 bg-white" id="view-communications">
<div className="flex h-full">

<div className="w-80 border-r border-gray-200 flex flex-col">
<div className="p-4 border-b border-gray-200">
<input className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Search emails..." type="text"/>
</div>
<div className="flex-1 overflow-y-auto">
<div className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer bg-blue-50/30">
<div className="flex justify-between mb-1">
<span className="text-sm font-semibold text-gray-900">Sufra Restaurant</span>
<span className="text-xs text-gray-400">10:42 AM</span>
</div>
<p className="text-xs text-gray-800 font-medium truncate">Re: Renewal Invoice #INV-2024</p>
<p className="text-xs text-gray-500 truncate mt-0.5">Please find attached the payment receipt for the...</p>
</div>
<div className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
<div className="flex justify-between mb-1">
<span className="text-sm font-semibold text-gray-900">Blue Fig</span>
<span className="text-xs text-gray-400">Yesterday</span>
</div>
<p className="text-xs text-gray-600 truncate">Application Status Update</p>
<p className="text-xs text-gray-500 truncate mt-0.5">We are still waiting for the health inspection...</p>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-gray-50/30">
<div className="p-6 border-b border-gray-200 bg-white">
<div className="flex justify-between items-start">
<div>
<h2 className="text-lg font-semibold text-gray-900">Re: Renewal Invoice #INV-2024</h2>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Inbound</span>
<span className="text-xs text-gray-500">From: <span className="text-gray-900">info@sufra-jo.com</span></span>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 text-gray-400 hover:bg-gray-100 rounded"><span className="iconify" data-icon="lucide:reply" data-width="16"></span></button>
<button className="p-2 text-gray-400 hover:bg-gray-100 rounded"><span className="iconify" data-icon="lucide:trash-2" data-width="16"></span></button>
</div>
</div>
</div>
<div className="p-8 flex-1 overflow-y-auto">
<div className="prose prose-sm max-w-none text-gray-800">
<p>Dear JRA Team,</p>
<p>Please find attached the payment receipt for the annual renewal. Let us know if you need anything else.</p>
<p>Regards,<br/>Omar</p>
</div>
<div className="mt-8 border border-gray-200 bg-white rounded-md p-3 w-64 flex items-center gap-3">
<div className="bg-red-50 text-red-600 p-2 rounded"><span className="iconify" data-icon="lucide:file-text" data-width="20"></span></div>
<div className="overflow-hidden">
<p className="text-sm font-medium text-gray-900 truncate">receipt_jan24.pdf</p>
<p className="text-xs text-gray-500">240 KB</p>
</div>
</div>
</div>
<div className="p-4 border-t border-gray-200 bg-white">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">
<span className="iconify" data-icon="lucide:reply" data-width="16"></span> Reply
                             </button>
</div>
</div>
</div>
</div>

<div className="page-view p-8 bg-gray-50 overflow-y-auto" id="view-classifications">
<div className="max-w-4xl mx-auto">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-semibold text-gray-900">Membership Categories</h2>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm">Add Category</button>
</div>
<div className="grid grid-cols-3 gap-6">

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm relative group hover:border-gray-300 transition-all">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-400 hover:text-gray-600"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4 border border-purple-100">
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
</div>
<h3 className="font-semibold text-gray-900">Tourist Restaurant</h3>
<p className="text-sm text-gray-500 mt-1">1-5 Star rated establishments.</p>
<div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
<span className="text-xs font-medium text-gray-500">Fee: 250 JOD</span>
<span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">412 Members</span>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm relative group hover:border-gray-300 transition-all">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-400 hover:text-gray-600"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
<span className="iconify" data-icon="lucide:utensils" data-width="20"></span>
</div>
<h3 className="font-semibold text-gray-900">Popular Restaurant</h3>
<p className="text-sm text-gray-500 mt-1">Local cuisine and fast service.</p>
<div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
<span className="text-xs font-medium text-gray-500">Fee: 150 JOD</span>
<span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">620 Members</span>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm relative group hover:border-gray-300 transition-all">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-400 hover:text-gray-600"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4 border border-orange-100">
<span className="iconify" data-icon="lucide:coffee" data-width="20"></span>
</div>
<h3 className="font-semibold text-gray-900">Coffee Shop</h3>
<p className="text-sm text-gray-500 mt-1">Cafes and beverage service.</p>
<div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
<span className="text-xs font-medium text-gray-500">Fee: 200 JOD</span>
<span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">180 Members</span>
</div>
</div>
</div>
</div>
</div>

<div className="page-view p-8 bg-gray-50 overflow-y-auto" id="view-reports">
<div className="max-w-3xl mx-auto space-y-6">
<h2 className="text-lg font-semibold text-gray-900">System Reports</h2>
<div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100 shadow-sm">

<div className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-gray-600">
<span className="iconify" data-icon="lucide:pie-chart" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Membership Status Distribution</h3>
<p className="text-xs text-gray-500">Breakdown of active, pending, and expired members.</p>
</div>
</div>
<button className="text-xs font-medium text-gray-700 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-100">Generate CSV</button>
</div>

<div className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-gray-600">
<span className="iconify" data-icon="lucide:banknote" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Financial Statement (YTD)</h3>
<p className="text-xs text-gray-500">Detailed transaction log for the current fiscal year.</p>
</div>
</div>
<button className="text-xs font-medium text-gray-700 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-100">Download PDF</button>
</div>

<div className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-gray-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Geographic Distribution</h3>
<p className="text-xs text-gray-500">Members grouped by governorate and district.</p>
</div>
</div>
<button className="text-xs font-medium text-gray-700 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-100">Generate CSV</button>
</div>
</div>
</div>
</div>

<div className="page-view p-8 bg-gray-50 overflow-y-auto" id="view-fields">
<div className="max-w-4xl mx-auto">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-lg font-semibold text-gray-900">Custom Field Manager</h2>
<p className="text-sm text-gray-500">Add custom data fields to member profiles.</p>
</div>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm">Add New Field</button>
</div>
<div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
<table className="w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Label</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Type</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Variable Name</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="px-6 py-4 text-sm font-medium text-gray-900">Seating Capacity</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">Number</span></td>
<td className="px-6 py-4 text-sm font-mono text-gray-500">capacity_count</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-red-600"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span></button>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-sm font-medium text-gray-900">Website URL</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">Text</span></td>
<td className="px-6 py-4 text-sm font-mono text-gray-500">website_url</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-red-600"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span></button>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-sm font-medium text-gray-900">Health Inspection Date</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">Date</span></td>
<td className="px-6 py-4 text-sm font-mono text-gray-500">last_inspection</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-red-600"><span className="iconify" data-icon="lucide:trash-2" data-width="14"></span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page-view p-8 bg-gray-50 overflow-y-auto" id="view-settings">
<div className="max-w-2xl mx-auto space-y-8">

<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">SMTP Configuration</h3>
<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Mail Host</label>
<input className="w-full text-sm border-gray-300 rounded-md border px-3 py-2" type="text" value="mail.jra.jo"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Port</label>
<input className="w-full text-sm border-gray-300 rounded-md border px-3 py-2" type="text" value="587"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Username</label>
<input className="w-full text-sm border-gray-300 rounded-md border px-3 py-2" type="text" value="system@jra.jo"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
<input className="w-full text-sm border-gray-300 rounded-md border px-3 py-2" type="password" value="**********"/>
</div>
<div className="pt-2 flex justify-end">
<button className="text-xs font-medium text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">Test Connection</button>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-gray-900">Auto-Renewal Reminders</h4>
<p className="text-xs text-gray-500">Automatically send emails 30 days before expiry.</p>
</div>
<div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
</div>
<div className="border-t border-gray-100 my-4"></div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-gray-900">Public Directory</h4>
<p className="text-xs text-gray-500">Show active members on public website.</p>
</div>
<div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 shadow-sm">Save Changes</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
