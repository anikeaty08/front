import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(tabId) {
            // Hide all view sections
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });

            // Show selected view section
            const view = document.getElementById('view-' + tabId);
            if (view) {
                view.classList.add('active');
            }

            // Update Sidebar Active State
            document.querySelectorAll('.nav-item').forEach(el => {
                // Reset to inactive style
                el.className = 'nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-all border border-transparent';
                
                // Reset icon color
                const icon = el.querySelector('.iconify');
                if(icon) {
                    icon.classList.remove('text-slate-900');
                    icon.classList.add('text-slate-400');
                }
            });

            // Set active style for clicked button
            const activeBtn = document.getElementById('nav-' + tabId);
            if (activeBtn) {
                activeBtn.className = 'nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 text-slate-900 font-medium border border-gray-200/50 transition-all';
                const icon = activeBtn.querySelector('.iconify');
                if(icon) {
                    icon.classList.remove('text-slate-400');
                    icon.classList.add('text-slate-900');
                }
            }

            // Update Header Breadcrumb Title
            const titleMap = {
                'dashboard': 'Dashboard',
                'students': 'Students',
                'universities': 'Universities',
                'applications': 'Applications',
                'reports': 'Reports',
                'history': 'History'
            };
            const headerTitle = document.getElementById('header-title');
            if (headerTitle) {
                headerTitle.textContent = titleMap[tabId] || 'Dashboard';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tighter">AB</div>
<span className="font-semibold text-slate-900 tracking-tight">ABROAD.</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1" id="sidebar-nav">
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Platform</div>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 text-slate-900 font-medium border border-gray-200/50 transition-all" id="nav-dashboard" onclick="switchTab('dashboard')">
<span className="iconify text-slate-900 group-hover:text-slate-900 transition-colors" data-icon="lucide:layout-dashboard" data-width="18"></span>
                Dashboard
            </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-all border border-transparent" id="nav-students" onclick="switchTab('students')">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:users" data-width="18"></span>
                Students
                <span className="ml-auto bg-slate-100 text-slate-600 py-0.5 px-2 rounded-full text-xs font-medium group-hover:bg-white group-hover:shadow-sm">128</span>
</button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-all border border-transparent" id="nav-universities" onclick="switchTab('universities')">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:graduation-cap" data-width="18"></span>
                Universities
            </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-all border border-transparent" id="nav-applications" onclick="switchTab('applications')">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:file-text" data-width="18"></span>
                Applications
            </button>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Analysis</div>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-all border border-transparent" id="nav-reports" onclick="switchTab('reports')">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:pie-chart" data-width="18"></span>
                Reports
            </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-all border border-transparent" id="nav-history" onclick="switchTab('history')">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:history" data-width="18"></span>
                History
            </button>
</nav>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-xs border border-indigo-200">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">Jane Doe</p>
<p className="text-xs text-slate-500 truncate">Senior Counselor</p>
</div>
<span className="iconify text-slate-400 group-hover:text-slate-600" data-icon="lucide:chevron-up" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden p-1 text-slate-500 hover:text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
<span className="hover:text-slate-600 cursor-pointer">CRM</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-slate-900" id="header-title">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="bg-gray-50 border border-gray-200 text-xs rounded-md pl-9 pr-3 py-1.5 w-64 focus:outline-none focus:ring-1 focus:ring-slate-200 focus:border-slate-300 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden group-focus-within:inline-flex h-4 items-center gap-1 rounded border border-gray-200 bg-gray-50 px-1 font-sans text-[10px] font-medium text-gray-500">⌘K</kbd>
</div>
</div>
<div className="h-4 w-px bg-gray-200 mx-1"></div>
<button className="text-slate-400 hover:text-slate-900 transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white translate-x-1/2 -translate-y-1/4"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 bg-gray-50/50">

<div className="view-section active" id="view-dashboard">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-xl font-medium text-slate-900 tracking-tight">Overview</h1>
<p className="text-slate-500 text-xs mt-1">Track your student success and application pipeline.</p>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-lg">
<button className="px-3 py-1 rounded-md bg-white shadow-sm text-xs font-medium text-slate-900">12 Months</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900">30 Days</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900">7 Days</button>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                            New Student
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.04)] hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 border border-indigo-100">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
</div>
<span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                +12% <span className="iconify ml-1" data-icon="lucide:trending-up" data-width="12"></span>
</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">842</div>
<div className="text-xs text-slate-500 font-medium mt-1">Total Students</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.04)] hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600 border border-blue-100">
<span className="iconify" data-icon="lucide:file-check" data-width="18"></span>
</div>
<span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                +5% <span className="iconify ml-1" data-icon="lucide:trending-up" data-width="12"></span>
</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">156</div>
<div className="text-xs text-slate-500 font-medium mt-1">Visa Approvals</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.04)] hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-amber-50 rounded-lg text-amber-600 border border-amber-100">
<span className="iconify" data-icon="lucide:clock" data-width="18"></span>
</div>
<span className="text-xs font-medium text-slate-400">Current</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">42</div>
<div className="text-xs text-slate-500 font-medium mt-1">Pending Offers</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.04)] hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-rose-50 rounded-lg text-rose-600 border border-rose-100">
<span className="iconify" data-icon="lucide:alert-circle" data-width="18"></span>
</div>
<span className="text-xs font-medium text-slate-400">Action Needed</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">8</div>
<div className="text-xs text-slate-500 font-medium mt-1">Missing Documents</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100 flex justify-between items-center">
<h2 className="text-sm font-medium text-slate-900">Recent Students</h2>
<button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium" onclick="switchTab('students')">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="p-4 w-10"><label className="custom-checkbox flex items-center cursor-pointer"><input className="hidden" type="checkbox"/><div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all hover:border-slate-400"><svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg></div></label></th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Student</th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Destination</th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="p-4"><label className="custom-checkbox flex items-center cursor-pointer"><input className="hidden" type="checkbox"/><div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400"><svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg></div></label></td>
<td className="p-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-semibold border border-indigo-100">EL</div><div><div className="text-xs font-medium text-slate-900">Emma Lewis</div><div className="text-[10px] text-slate-400">ID: #8832</div></div></div></td>
<td className="p-4"><div className="flex items-center gap-1.5"><span className="iconify text-slate-400" data-icon="lucide:map-pin" data-width="12"></span><span className="text-xs text-slate-600">UK, London</span></div></td>
<td className="p-4"><span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>Visa Pending</span></td>
</tr>
<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="p-4"><label className="custom-checkbox flex items-center cursor-pointer"><input className="hidden" type="checkbox"/><div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400"><svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg></div></label></td>
<td className="p-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-semibold border border-emerald-100">MJ</div><div><div className="text-xs font-medium text-slate-900">Michael Jones</div><div className="text-[10px] text-slate-400">ID: #8841</div></div></div></td>
<td className="p-4"><div className="flex items-center gap-1.5"><span className="iconify text-slate-400" data-icon="lucide:map-pin" data-width="12"></span><span className="text-xs text-slate-600">Canada, Toronto</span></div></td>
<td className="p-4"><span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>Offer Accepted</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-900">Application Success</h3>
<button className="text-slate-400 hover:text-slate-900"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>
<div className="space-y-4">
<div><div className="flex justify-between text-xs mb-1.5"><span className="text-slate-600">UK (Russell Group)</span><span className="font-medium text-slate-900">85%</span></div><div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-slate-900 rounded-full" style={{width: '85%'}}></div></div></div>
<div><div className="flex justify-between text-xs mb-1.5"><span className="text-slate-600">USA (Ivy League)</span><span className="font-medium text-slate-900">42%</span></div><div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-slate-300 rounded-full" style={{width: '42%'}}></div></div></div>
<div><div className="flex justify-between text-xs mb-1.5"><span className="text-slate-600">Canada</span><span className="font-medium text-slate-900">92%</span></div><div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-slate-900 rounded-full" style={{width: '92%'}}></div></div></div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-students">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-xl font-medium text-slate-900 tracking-tight">Student Directory</h1>
<p className="text-slate-500 text-xs mt-1">Manage all your enrolled students and leads.</p>
</div>
<div className="flex gap-2">
<button className="bg-white border border-gray-200 text-slate-600 px-3 py-2 rounded-lg text-xs font-medium hover:bg-gray-50 flex items-center gap-2"><span className="iconify" data-icon="lucide:upload" data-width="14"></span> Import</button>
<button className="bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-slate-800 flex items-center gap-2"><span className="iconify" data-icon="lucide:plus" data-width="14"></span> Add Student</button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
<div className="relative w-full sm:w-64">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><span className="iconify" data-icon="lucide:search" data-width="14"></span></span>
<input className="w-full bg-gray-50 border border-gray-200 text-xs rounded-md pl-9 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-slate-200 focus:bg-white transition-all" placeholder="Search by name, email..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-slate-700">All</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-500 hover:bg-gray-50">Active</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-500 hover:bg-gray-50">Pending</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-500 hover:bg-gray-50">Archived</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="p-4 w-10"><input className="rounded border-gray-300" type="checkbox"/></th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Intake</th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Assigned To</th>
<th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
<th className="p-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/50">
<td className="p-4 w-10"><input className="rounded border-gray-300" type="checkbox"/></td>
<td className="p-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-semibold border border-indigo-100">EL</div><div><div className="text-xs font-medium text-slate-900">Emma Lewis</div><div className="text-[10px] text-slate-400">ID: #8832</div></div></div></td>
<td className="p-4"><div className="text-xs text-slate-600">emma.l@example.com</div><div className="text-[10px] text-slate-400">+44 7700 900077</div></td>
<td className="p-4"><div className="text-xs text-slate-600">Fall 2024</div></td>
<td className="p-4"><div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-600">JD</div><span className="text-xs text-slate-600">Jane Doe</span></div></td>
<td className="p-4"><span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">Visa Pending</span></td>
<td className="p-4 text-right"><button className="text-slate-400 hover:text-slate-600"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button></td>
</tr>
<tr className="group hover:bg-gray-50/50">
<td className="p-4 w-10"><input className="rounded border-gray-300" type="checkbox"/></td>
<td className="p-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-semibold border border-emerald-100">MJ</div><div><div className="text-xs font-medium text-slate-900">Michael Jones</div><div className="text-[10px] text-slate-400">ID: #8841</div></div></div></td>
<td className="p-4"><div className="text-xs text-slate-600">mike.j@example.com</div><div className="text-[10px] text-slate-400">+1 555 0123</div></td>
<td className="p-4"><div className="text-xs text-slate-600">Spring 2024</div></td>
<td className="p-4"><div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-600">JD</div><span className="text-xs text-slate-600">Jane Doe</span></div></td>
<td className="p-4"><span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Enrolled</span></td>
<td className="p-4 text-right"><button className="text-slate-400 hover:text-slate-600"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section" id="view-universities">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-xl font-medium text-slate-900 tracking-tight">Partner Universities</h1>
<p className="text-slate-500 text-xs mt-1">Browse and manage university partnerships.</p>
</div>
<button className="bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-slate-800 flex items-center gap-2"><span className="iconify" data-icon="lucide:plus" data-width="14"></span> Add Partner</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center text-lg font-bold text-slate-700">IC</div>
<span className="px-2 py-1 bg-gray-50 text-slate-500 rounded text-[10px] font-medium border border-gray-100">UK</span>
</div>
<h3 className="font-medium text-slate-900 mb-1">Imperial College London</h3>
<p className="text-xs text-slate-500 mb-4">Science, Engineering, Medicine, Business</p>
<div className="flex items-center justify-between text-xs pt-4 border-t border-gray-100">
<span className="text-slate-400">Rank: <span className="text-slate-900 font-medium">#6 Global</span></span>
<button className="text-indigo-600 font-medium hover:underline">View Programs</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center text-lg font-bold text-slate-700">UT</div>
<span className="px-2 py-1 bg-gray-50 text-slate-500 rounded text-[10px] font-medium border border-gray-100">Canada</span>
</div>
<h3 className="font-medium text-slate-900 mb-1">University of Toronto</h3>
<p className="text-xs text-slate-500 mb-4">Comprehensive Research University</p>
<div className="flex items-center justify-between text-xs pt-4 border-t border-gray-100">
<span className="text-slate-400">Rank: <span className="text-slate-900 font-medium">#21 Global</span></span>
<button className="text-indigo-600 font-medium hover:underline">View Programs</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center text-lg font-bold text-slate-700">SY</div>
<span className="px-2 py-1 bg-gray-50 text-slate-500 rounded text-[10px] font-medium border border-gray-100">Australia</span>
</div>
<h3 className="font-medium text-slate-900 mb-1">University of Sydney</h3>
<p className="text-xs text-slate-500 mb-4">Australia's first university</p>
<div className="flex items-center justify-between text-xs pt-4 border-t border-gray-100">
<span className="text-slate-400">Rank: <span className="text-slate-900 font-medium">#19 Global</span></span>
<button className="text-indigo-600 font-medium hover:underline">View Programs</button>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-applications">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-xl font-medium text-slate-900 tracking-tight">Active Applications</h1>
<p className="text-slate-500 text-xs mt-1">Monitor application progress across all students.</p>
</div>
<div className="flex items-center bg-gray-100 p-1 rounded-lg">
<button className="px-3 py-1 rounded-md bg-white shadow-sm text-xs font-medium text-slate-900">List View</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900">Kanban</button>
</div>
</div>
<div className="space-y-3">

<div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 w-48">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-semibold">EL</div>
<div>
<div className="text-xs font-medium text-slate-900">Emma Lewis</div>
<div className="text-[10px] text-slate-400">MSc Data Science</div>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-[10px] font-medium text-slate-500 uppercase">Progress</span>
<span className="text-[10px] font-medium text-amber-600">Visa Processing (80%)</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
<div className="w-32 text-right">
<button className="text-xs border border-gray-200 rounded px-2 py-1 text-slate-600 hover:bg-gray-50">View Details</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 w-48">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-xs font-semibold">DK</div>
<div>
<div className="text-xs font-medium text-slate-900">David Kim</div>
<div className="text-[10px] text-slate-400">Biotech Eng.</div>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-[10px] font-medium text-slate-500 uppercase">Progress</span>
<span className="text-[10px] font-medium text-blue-600">Submitted (40%)</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
<div className="w-32 text-right">
<button className="text-xs border border-gray-200 rounded px-2 py-1 text-slate-600 hover:bg-gray-50">View Details</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 w-48">
<div className="w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center text-xs font-semibold">SA</div>
<div>
<div className="text-xs font-medium text-slate-900">Sarah Ahmed</div>
<div className="text-[10px] text-slate-400">B. Arch</div>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-[10px] font-medium text-slate-500 uppercase">Progress</span>
<span className="text-[10px] font-medium text-slate-600">Docs Review (25%)</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-slate-400 h-1.5 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<div className="w-32 text-right">
<button className="text-xs border border-gray-200 rounded px-2 py-1 text-slate-600 hover:bg-gray-50">View Details</button>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-reports">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-xl font-medium text-slate-900 tracking-tight">Performance Reports</h1>
<p className="text-slate-500 text-xs mt-1">Analytics for Q4 2023.</p>
</div>
<button className="text-slate-500 hover:text-slate-900 border border-gray-200 bg-white px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span> Last 30 Days
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-gray-200 rounded-xl p-6">
<h3 className="text-sm font-medium text-slate-900 mb-6">Applications by Country</h3>
<div className="flex items-end gap-2 h-48 pb-2 border-b border-gray-100">

<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="w-full bg-indigo-500 rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: '60%'}}></div>
<span className="text-[10px] text-slate-400 text-center">UK</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="w-full bg-indigo-500 rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: '45%'}}></div>
<span className="text-[10px] text-slate-400 text-center">USA</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="w-full bg-indigo-500 rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: '80%'}}></div>
<span className="text-[10px] text-slate-400 text-center">CAN</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="w-full bg-indigo-500 rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: '30%'}}></div>
<span className="text-[10px] text-slate-400 text-center">AUS</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="w-full bg-indigo-500 rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{height: '20%'}}></div>
<span className="text-[10px] text-slate-400 text-center">EU</span>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6">
<h3 className="text-sm font-medium text-slate-900 mb-6">Conversion Rates</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-500">Inquiry to Application</span>
<span className="font-medium text-slate-900">68%</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{width: '68%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-500">Application to Offer</span>
<span className="font-medium text-slate-900">45%</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{width: '45%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-500">Offer to Visa</span>
<span className="font-medium text-slate-900">92%</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div></div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="view-history">
<div className="max-w-2xl mx-auto">
<div className="mb-8">
<h1 className="text-xl font-medium text-slate-900 tracking-tight">Activity Log</h1>
<p className="text-slate-500 text-xs mt-1">Audit trail of all system actions.</p>
</div>
<div className="relative pl-8 border-l border-gray-200 space-y-8">

<div className="relative">
<span className="absolute -left-[37px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-indigo-100">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
</span>
<div className="flex flex-col gap-1">
<p className="text-sm font-medium text-slate-900">Visa Approved for Michael Jones</p>
<p className="text-xs text-slate-500">System updated status automatically via API integration with Canadian Immigration.</p>
<span className="text-[10px] text-slate-400">Today, 2:30 PM</span>
</div>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-gray-100">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
</span>
<div className="flex flex-col gap-1">
<p className="text-sm font-medium text-slate-900">Emma Lewis created a new application</p>
<p className="text-xs text-slate-500">Applied for MSc Data Science at Imperial College London.</p>
<span className="text-[10px] text-slate-400">Yesterday, 9:15 AM</span>
</div>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-gray-100">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
</span>
<div className="flex flex-col gap-1">
<p className="text-sm font-medium text-slate-900">Document Verification Complete</p>
<p className="text-xs text-slate-500">Sarah Ahmed's transcripts verified by Jane Doe.</p>
<span className="text-[10px] text-slate-400">Oct 24, 2023</span>
</div>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-gray-100">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
</span>
<div className="flex flex-col gap-1">
<p className="text-sm font-medium text-slate-900">Weekly Report Generated</p>
<p className="text-xs text-slate-500">Automated report sent to admin@abroad.com.</p>
<span className="text-[10px] text-slate-400">Oct 20, 2023</span>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-12 pt-6 border-t border-gray-200 text-center">
<p className="text-[10px] text-slate-400">© 2023 Study Abroad CRM. All rights reserved.</p>
</footer>
</div>
</main>


    </>
  );
}
