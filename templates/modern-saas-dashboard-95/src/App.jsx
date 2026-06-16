import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="h-14 flex items-center px-5 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
<iconify-icon height="14" icon="lucide:zap" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-tight text-gray-900">Nexus</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
<div className="px-2 mb-2">
<p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Platform</p>
</div>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group" href="#">
<iconify-icon className="text-gray-500 group-hover:text-gray-900" height="16" icon="lucide:layout-grid" strokeWidth="1.5" width="16"></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="16" icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
                Projects
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="16" icon="lucide:check-square" strokeWidth="1.5" width="16"></iconify-icon>
                Tasks
                <span className="ml-auto text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full border border-gray-200">12</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="16" icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
                Team
            </a>
<div className="px-2 mt-6 mb-2">
<p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Settings</p>
</div>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="16" icon="lucide:settings" strokeWidth="1.5" width="16"></iconify-icon>
                General
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="16" icon="lucide:credit-card" strokeWidth="1.5" width="16"></iconify-icon>
                Billing
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-md transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-xs font-medium text-gray-600 border border-gray-200">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Jane Doe</p>
<p className="text-xs text-gray-500 truncate">jane@nexus.com</p>
</div>
<iconify-icon className="text-gray-400" height="14" icon="lucide:chevrons-up-down" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-gray-50/50">

<header className="h-14 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900">
<iconify-icon height="20" icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<nav className="hidden sm:flex items-center text-sm text-gray-500">
<span className="hover:text-gray-900 transition-colors cursor-pointer">Dashboard</span>
<iconify-icon className="mx-2 text-gray-400" height="14" icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-gray-900 font-medium">Overview</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors" height="14" icon="lucide:search" strokeWidth="1.5" width="14"></iconify-icon>
<input className="h-8 pl-8 pr-3 text-sm bg-gray-50 border border-gray-200 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 transition-all placeholder:text-gray-400" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden sm:inline-block px-1.5 h-4 text-[10px] font-medium text-gray-500 bg-white border border-gray-200 rounded items-center justify-center leading-3">⌘K</kbd>
</div>
</div>
<button className="relative text-gray-500 hover:text-gray-900 transition-colors p-1.5 rounded-md hover:bg-gray-100">
<iconify-icon height="18" icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-6 md:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Overview</h1>
<p className="text-sm text-gray-500 mt-1">Manage your projects and team performance.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 font-medium flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                             System Operational
                        </span>
<div className="h-4 w-px bg-gray-200"></div>
<button className="h-8 px-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                            Filter
                        </button>
<button className="h-8 px-3 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-all shadow-sm flex items-center gap-2">
<iconify-icon height="14" icon="lucide:plus" strokeWidth="2" width="14"></iconify-icon>
                            New Project
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 bg-white rounded-lg border border-gray-200/75 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-500">Total Revenue</span>
<iconify-icon className="text-gray-400" height="16" icon="lucide:dollar-sign" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">$45,231</span>
<span className="text-xs font-medium text-emerald-600 flex items-center">
                                +20.1%
                                <iconify-icon height="12" icon="lucide:arrow-up-right" strokeWidth="2" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="p-4 bg-white rounded-lg border border-gray-200/75 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-500">Active Users</span>
<iconify-icon className="text-gray-400" height="16" icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">2,350</span>
<span className="text-xs font-medium text-emerald-600 flex items-center">
                                +4.5%
                                <iconify-icon height="12" icon="lucide:arrow-up-right" strokeWidth="2" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="p-4 bg-white rounded-lg border border-gray-200/75 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-500">Bounce Rate</span>
<iconify-icon className="text-gray-400" height="16" icon="lucide:activity" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">42.3%</span>
<span className="text-xs font-medium text-red-600 flex items-center">
                                -1.2%
                                <iconify-icon height="12" icon="lucide:arrow-down-right" strokeWidth="2" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="p-4 bg-white rounded-lg border border-gray-200/75 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-500">Active Sessions</span>
<iconify-icon className="text-gray-400" height="16" icon="lucide:timer" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">12m 30s</span>
<span className="text-xs font-medium text-gray-400 flex items-center">
                                0.0%
                            </span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-lg border border-gray-200/75 shadow-sm p-5">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-gray-900">Revenue Growth</h3>
<div className="flex bg-gray-100 rounded-md p-0.5">
<button className="px-2.5 py-0.5 text-xs font-medium text-gray-900 bg-white rounded shadow-sm">12m</button>
<button className="px-2.5 py-0.5 text-xs font-medium text-gray-500 hover:text-gray-900">30d</button>
<button className="px-2.5 py-0.5 text-xs font-medium text-gray-500 hover:text-gray-900">7d</button>
</div>
</div>

<div className="relative h-64 w-full flex items-end justify-between gap-2 px-2">
<div className="absolute inset-0 grid grid-rows-4 w-full h-full pointer-events-none">
<div className="border-t border-gray-50 border-dashed w-full"></div>
<div className="border-t border-gray-50 border-dashed w-full"></div>
<div className="border-t border-gray-50 border-dashed w-full"></div>
<div className="border-t border-gray-50 border-dashed w-full"></div>
</div>

<div className="w-full bg-gray-100 rounded-t-sm h-[40%] hover:bg-gray-200 transition-colors relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$12k</div>
</div>
<div className="w-full bg-gray-100 rounded-t-sm h-[55%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[45%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[70%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-900 rounded-t-sm h-[60%] shadow-lg shadow-gray-900/10 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$24k</div>
</div>
<div className="w-full bg-gray-100 rounded-t-sm h-[75%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[65%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[85%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[50%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[60%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[90%] hover:bg-gray-200 transition-colors relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[80%] hover:bg-gray-200 transition-colors relative group"></div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white rounded-lg border border-gray-200/75 shadow-sm p-5">
<h3 className="text-sm font-medium text-gray-900 mb-4">Project Status</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<span className="text-sm text-gray-600">Backlog</span>
</div>
<span className="text-xs font-medium text-gray-400">12</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
<span className="text-sm text-gray-600">In Progress</span>
</div>
<span className="text-xs font-medium text-gray-400">4</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<span className="text-sm text-gray-600">Review</span>
</div>
<span className="text-xs font-medium text-gray-400">2</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm text-gray-600">Completed</span>
</div>
<span className="text-xs font-medium text-gray-400">24</span>
</div>
</div>
</div>
<div className="bg-white rounded-lg border border-gray-200/75 shadow-sm p-5">
<h3 className="text-sm font-medium text-gray-900 mb-4">Quick Deployment</h3>
<label className="flex items-center justify-between cursor-pointer custom-switch mb-3">
<span className="text-sm text-gray-600">Auto-deploy</span>
<input className="hidden" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full relative transition-colors duration-200 ease-in-out">
<span className="w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-transform duration-200 ease-in-out"></span>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer custom-switch">
<span className="text-sm text-gray-600">Notifications</span>
<input checked="" className="hidden" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full relative transition-colors duration-200 ease-in-out">
<span className="w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-transform duration-200 ease-in-out"></span>
</div>
</label>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200/75 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<h3 className="text-sm font-medium text-gray-900">Recent Projects</h3>
<button className="text-xs text-gray-500 hover:text-gray-900 font-medium">View all</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-50 text-xs text-gray-500 uppercase tracking-wider bg-gray-50/50">
<th className="px-5 py-3 font-medium w-12">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white transition-all hover:border-gray-400">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</th>
<th className="px-5 py-3 font-medium">Project</th>
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 font-medium">Users</th>
<th className="px-5 py-3 font-medium text-right">Revenue</th>
<th className="px-5 py-3 font-medium w-10"></th>
</tr>
</thead>
<tbody className="text-sm text-gray-600 divide-y divide-gray-50">
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3.5">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white transition-all hover:border-gray-400">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-5 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">
<iconify-icon height="16" icon="lucide:box" width="16"></iconify-icon>
</div>
<div>
<p className="font-medium text-gray-900">Linear App Redesign</p>
<p className="text-xs text-gray-400">Updated 2m ago</p>
</div>
</div>
</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                            In Progress
                                        </span>
</td>
<td className="px-5 py-3.5">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3"/>
</div>
</td>
<td className="px-5 py-3.5 text-right font-medium text-gray-900">$12,000</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="16" icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3.5">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white transition-all hover:border-gray-400">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-5 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">
<iconify-icon height="16" icon="lucide:smartphone" width="16"></iconify-icon>
</div>
<div>
<p className="font-medium text-gray-900">Mobile API Integration</p>
<p className="text-xs text-gray-400">Updated 1h ago</p>
</div>
</div>
</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                            Completed
                                        </span>
</td>
<td className="px-5 py-3.5">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=4"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5"/>
</div>
</td>
<td className="px-5 py-3.5 text-right font-medium text-gray-900">$8,500</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="16" icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3.5">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white transition-all hover:border-gray-400">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-5 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">
<iconify-icon height="16" icon="lucide:globe" width="16"></iconify-icon>
</div>
<div>
<p className="font-medium text-gray-900">SaaS Dashboard Template</p>
<p className="text-xs text-gray-400">Updated 4h ago</p>
</div>
</div>
</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                            In Progress
                                        </span>
</td>
<td className="px-5 py-3.5">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=6"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-medium text-gray-500">+2</div>
</div>
</td>
<td className="px-5 py-3.5 text-right font-medium text-gray-900">$24,000</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="16" icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<footer className="text-center text-xs text-gray-400 py-8">
                    © 2023 Nexus Inc. All rights reserved.
                </footer>
</div>
</div>
</main>

    </>
  );
}
