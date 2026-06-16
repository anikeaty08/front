import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col justify-between">
<div className="p-4 space-y-6">

<div className="flex items-center gap-2 px-2">
<div className="h-8 w-8 bg-zinc-950 rounded-lg flex items-center justify-center text-white">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<span className="font-semibold tracking-tight text-sm">Nexus</span>
<span className="text-[10px] bg-zinc-100 text-zinc-500 border border-zinc-200 px-1.5 py-0.5 rounded-md font-medium">BETA</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium bg-zinc-100 text-zinc-900 rounded-md group" href="#">
<i className="w-4 h-4 text-zinc-900" data-lucide="layout-grid"></i>
                    Overview
                </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="box"></i>
                    Deployments
                </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="bar-chart-3"></i>
                    Analytics
                </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="users"></i>
                    Team members
                </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="settings"></i>
                    Settings
                </a>
</nav>

<div className="space-y-2">
<h3 className="px-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Projects</h3>
<nav className="space-y-1">
<a className="flex items-center justify-between px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md group" href="#">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span>marketing-site</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md group" href="#">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span>dashboard-app</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md group" href="#">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<span>api-gateway</span>
</div>
</a>
</nav>
</div>
</div>

<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 px-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-400 flex items-center justify-center text-[10px] font-bold text-white border border-white shadow-sm">
                    JS
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">John Smith</span>
<span className="text-xs text-zinc-500">Pro Plan</span>
</div>
<button className="ml-auto text-zinc-400 hover:text-zinc-600">
<i className="w-4 h-4" data-lucide="chevrons-up-down"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white">

<header className="h-14 border-b border-zinc-200 flex items-center justify-between px-4 sm:px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-500">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-900 cursor-pointer transition-colors">acme-corp</span>
<span className="text-zinc-300">/</span>
<span className="font-medium text-zinc-900">dashboard</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<i className="absolute left-2.5 top-1.5 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="h-8 w-64 pl-9 pr-4 bg-zinc-50 border border-zinc-200 rounded-md text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:bg-white transition-all" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1.5 flex items-center gap-0.5">
<kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-500">
<span className="text-xs">⌘</span>K
                        </kbd>
</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
<button className="h-8 px-3 flex items-center gap-2 rounded-md bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
<span className="hidden sm:inline">New Project</span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-4 sm:p-8 space-y-8 bg-zinc-50/50">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your projects and view performance metrics.</p>
</div>
<div className="flex items-center gap-2">
<select className="h-8 pl-3 pr-8 bg-white border border-zinc-200 rounded-md text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200 hover:border-zinc-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px] bg-no-repeat bg-[right_10px_center]">
<option>Last 7 days</option>
<option>Last 30 days</option>
<option>Last 90 days</option>
</select>
<button className="h-8 px-3 text-sm font-medium text-zinc-600 bg-white border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
                        Download
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors group">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-zinc-500">Total Revenue</span>
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" data-lucide="dollar-sign"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-zinc-900">$45,231.89</span>
<span className="text-xs font-medium text-emerald-600">+20.1%</span>
</div>
<p className="text-xs text-zinc-400 mt-1">from last month</p>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors group">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-zinc-500">Subscriptions</span>
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" data-lucide="users"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-zinc-900">+2350</span>
<span className="text-xs font-medium text-emerald-600">+180.1%</span>
</div>
<p className="text-xs text-zinc-400 mt-1">from last month</p>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors group">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-zinc-500">Active Now</span>
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" data-lucide="activity"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-zinc-900">+573</span>
<span className="text-xs font-medium text-emerald-600">+201</span>
</div>
<p className="text-xs text-zinc-400 mt-1">since last hour</p>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors group">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-zinc-500">Deployment Rate</span>
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" data-lucide="git-pull-request"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-zinc-900">98.5%</span>
<span className="text-xs font-medium text-rose-500">-1.2%</span>
</div>
<p className="text-xs text-zinc-400 mt-1">vs average</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

<div className="lg:col-span-4 bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-semibold text-zinc-900">Revenue Overview</h3>
<p className="text-sm text-zinc-500">Daily revenue for the current month.</p>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2 mt-4 px-2">

<div className="w-full bg-zinc-50 rounded-sm h-[40%] hover:bg-zinc-800 transition-colors group relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">$1,200</div>
</div>
<div className="w-full bg-zinc-900 rounded-sm h-[70%] hover:bg-zinc-800 transition-colors group relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">$2,450</div>
</div>
<div className="w-full bg-zinc-50 rounded-sm h-[50%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[30%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[60%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[80%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[45%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[55%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[90%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[65%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[75%] hover:bg-zinc-800 transition-colors group relative"></div>
<div className="w-full bg-zinc-50 rounded-sm h-[40%] hover:bg-zinc-800 transition-colors group relative"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-zinc-400 font-medium">
<span>Jan 1</span>
<span>Jan 8</span>
<span>Jan 15</span>
<span>Jan 22</span>
<span>Jan 29</span>
</div>
</div>

<div className="lg:col-span-3 bg-white rounded-xl border border-zinc-200 shadow-sm flex flex-col">
<div className="p-6 border-b border-zinc-100">
<h3 className="text-base font-semibold text-zinc-900">Recent Activity</h3>
<p className="text-sm text-zinc-500">You made 265 sales this month.</p>
</div>
<div className="flex-1 p-6 space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-medium text-zinc-700">
                                    OM
                                </div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-zinc-900">Olivia Martin</p>
<p className="text-xs text-zinc-500">olivia.martin@email.com</p>
</div>
</div>
<div className="text-sm font-medium text-zinc-900">+$1,999.00</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-medium text-zinc-700">
                                    JL
                                </div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-zinc-900">Jackson Lee</p>
<p className="text-xs text-zinc-500">jackson.lee@email.com</p>
</div>
</div>
<div className="text-sm font-medium text-zinc-900">+$39.00</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-medium text-zinc-700">
                                    IN
                                </div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-zinc-900">Isabella Nguyen</p>
<p className="text-xs text-zinc-500">isabella.nguyen@email.com</p>
</div>
</div>
<div className="text-sm font-medium text-zinc-900">+$299.00</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-medium text-zinc-700">
                                    WK
                                </div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-zinc-900">William Kim</p>
<p className="text-xs text-zinc-500">will@email.com</p>
</div>
</div>
<div className="text-sm font-medium text-zinc-900">+$99.00</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-medium text-zinc-700">
                                    SD
                                </div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-zinc-900">Sofia Davis</p>
<p className="text-xs text-zinc-500">sofia.davis@email.com</p>
</div>
</div>
<div className="text-sm font-medium text-zinc-900">+$39.00</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-100 flex items-center justify-between">
<div>
<h3 className="text-base font-semibold text-zinc-900">Products</h3>
<p className="text-sm text-zinc-500">Manage your product inventory and status.</p>
</div>
<button className="p-2 hover:bg-zinc-50 rounded-md text-zinc-500 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-zinc-500 uppercase bg-zinc-50/50 border-b border-zinc-100 font-medium">
<tr>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Name</th>
<th className="px-6 py-3">Price</th>
<th className="px-6 py-3 hidden md:table-cell">Total Sales</th>
<th className="px-6 py-3 hidden lg:table-cell">Created at</th>
<th className="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100/50">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                        Active
                                    </span>
</td>
<td className="px-6 py-4 font-medium text-zinc-900">Laser Lemonade Machine</td>
<td className="px-6 py-4 text-zinc-500">$499.99</td>
<td className="px-6 py-4 text-zinc-500 hidden md:table-cell">120</td>
<td className="px-6 py-4 text-zinc-500 hidden lg:table-cell">Jul 12, 2023 10:42 AM</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200/50">
<div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                                        Draft
                                    </span>
</td>
<td className="px-6 py-4 font-medium text-zinc-900">Hypernova Headphones</td>
<td className="px-6 py-4 text-zinc-500">$129.99</td>
<td className="px-6 py-4 text-zinc-500 hidden md:table-cell">0</td>
<td className="px-6 py-4 text-zinc-500 hidden lg:table-cell">Oct 18, 2023 03:21 PM</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100/50">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                        Active
                                    </span>
</td>
<td className="px-6 py-4 font-medium text-zinc-900">AeroGlow Desk Lamp</td>
<td className="px-6 py-4 text-zinc-500">$39.99</td>
<td className="px-6 py-4 text-zinc-500 hidden md:table-cell">450</td>
<td className="px-6 py-4 text-zinc-500 hidden lg:table-cell">Nov 29, 2023 08:15 AM</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


    </>
  );
}
