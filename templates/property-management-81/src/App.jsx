import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="max-w-[1400px] mx-auto mb-16">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-semibold tracking-tighter text-sm">PR</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Owner Dashboard &amp; Operations</h1>
</div>
<p className="text-sm text-slate-500 max-w-2xl">Executive-grade dashboard providing immediate operational visibility across all properties, financials, and AI-driven insights.</p>
</header>
<main className="max-w-[1400px] mx-auto space-y-24">

<section>
<div className="mb-6 space-y-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Frames 1-4: Main Dashboard, Alerts &amp; AI Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-slate-600 bg-white p-4 rounded-lg border border-slate-200">
<div><span className="font-medium text-slate-900">Purpose:</span> Executive overview of portfolio health.</div>
<div><span className="font-medium text-slate-900">Alerts (Frame 2):</span> Top banner for urgent actions.</div>
<div><span className="font-medium text-slate-900">AI (Frame 3):</span> Embedded contextual insights panel.</div>
<div><span className="font-medium text-slate-900">Filter (Frame 4):</span> Global portfolio switcher in nav.</div>
</div>
</div>

<div className="border border-slate-300 rounded-xl shadow-xl bg-white overflow-hidden flex h-[900px] relative text-slate-900 font-sans text-sm">

<aside className="w-64 bg-[#F8FAFC] border-r border-slate-200 flex flex-col shrink-0 hidden md:flex">
<div className="h-14 flex items-center px-4 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center text-white font-semibold tracking-tighter text-[10px]">PR</div>
<span className="text-sm font-semibold tracking-tight">PRPTY.</span>
</div>
</div>
<div className="p-3">
<button className="flex w-full items-center justify-between gap-2 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-sm shadow-sm hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-2 truncate">
<div className="h-5 w-5 rounded bg-slate-900 flex items-center justify-center text-[10px] font-semibold text-white">A</div>
<span className="font-medium text-slate-900 truncate text-xs">All Properties</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<nav className="flex-1 overflow-y-auto no-scrollbar py-2 px-2 space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium rounded-md bg-slate-200/60 text-indigo-600 relative" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-indigo-600 rounded-r-full -ml-2"></div>
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon> Dashboard
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-200/50 transition-colors" href="#">
<iconify-icon className="text-lg opacity-70" icon="solar:buildings-2-linear"></iconify-icon> Properties
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-200/50 transition-colors" href="#">
<iconify-icon className="text-lg opacity-70" icon="solar:users-group-rounded-linear"></iconify-icon> Tenants
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-200/50 transition-colors" href="#">
<iconify-icon className="text-lg opacity-70" icon="solar:document-text-linear"></iconify-icon> Leases
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-200/50 transition-colors" href="#">
<iconify-icon className="text-lg opacity-70" icon="solar:wallet-money-linear"></iconify-icon> Financials
                        </a>
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-200/50 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg opacity-70" icon="solar:wrench-linear"></iconify-icon> Maintenance
                            </div>
<span className="bg-rose-100 text-rose-700 py-0.5 px-1.5 rounded text-[10px] font-semibold">3</span>
</a>
</nav>
</aside>

<div className="flex-1 flex flex-col min-w-0 bg-slate-50">

<header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
<div className="flex items-center gap-4 text-sm text-slate-500">
<iconify-icon className="text-lg cursor-pointer hover:text-slate-900 md:hidden" icon="solar:hamburger-menu-linear"></iconify-icon>
<div className="flex items-center gap-2">
<span className="font-medium text-slate-900">Portfolio Overview</span>
<span className="text-slate-300">/</span>
<div className="flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors">
<span>This Month (Oct)</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors">
<iconify-icon className="mr-1.5" icon="solar:add-circle-linear"></iconify-icon> Quick Action
                            </button>
<div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
<button className="relative text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-rose-500 border border-white"></span>
</button>
<img alt="User Profile" className="h-7 w-7 rounded-full bg-slate-200 ring-1 ring-slate-200 object-cover cursor-pointer" src="https://i.pravatar.cc/100?img=11"/>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

<div className="bg-rose-50 border border-rose-200 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-rose-900">Urgent Actions Required</h3>
<p className="text-xs text-rose-700 mt-0.5">3 properties have severe water damage reports. 2 units are past due over 30 days.</p>
</div>
</div>
<button className="shrink-0 inline-flex items-center justify-center rounded-md bg-rose-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-rose-500 transition-colors">
                                Review Issues
                            </button>
</div>

<div className="bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 rounded-lg p-4 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none"></div>
<div className="flex items-start gap-3 relative z-10">
<div className="h-6 w-6 rounded flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Portfolio Insights</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white/80 border border-indigo-50 rounded-md p-2.5 shadow-sm text-xs text-slate-700">
<span className="font-medium text-indigo-700">Retention Risk:</span> 2 leases at Oakwood expire in 14 days without renewal intent.
                                        </div>
<div className="bg-white/80 border border-indigo-50 rounded-md p-2.5 shadow-sm text-xs text-slate-700">
<span className="font-medium text-indigo-700">Cost Anomaly:</span> Maintenance costs increased 18% this month at Stark Tower.
                                        </div>
<div className="flex items-center">
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
                                                Ask AI about portfolio <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-6 gap-4">

<div className="col-span-2 lg:col-span-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Units</p>
<span className="text-2xl font-semibold text-slate-900 tabular-nums tracking-tight">142</span>
</div>
<div className="col-span-2 lg:col-span-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Occupancy</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tabular-nums tracking-tight">94%</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+2%</span>
</div>
</div>

<div className="col-span-2 lg:col-span-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Expected Rent (Oct)</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tabular-nums tracking-tight">$312,450</span>
</div>
</div>
<div className="col-span-2 lg:col-span-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-[82%]"></div>
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Collected</p>
<span className="text-2xl font-semibold text-slate-900 tabular-nums tracking-tight">$256k</span>
</div>
<div className="col-span-2 lg:col-span-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute bottom-0 left-0 h-1 bg-rose-500 w-[18%]"></div>
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Overdue</p>
<span className="text-2xl font-semibold text-rose-600 tabular-nums tracking-tight">$56k</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Occupancy Snapshot</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View All</button>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700">Oakwood Residences (48 units)</span>
<span className="text-slate-500 tabular-nums">100% Occupied</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-500 w-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700">Stark Tower (82 units)</span>
<span className="text-slate-500 tabular-nums">92% Occupied</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-500 w-[92%] border-r border-white"></div>
<div className="h-full bg-slate-300 w-[8%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700">Sunnyvale Complex (12 units)</span>
<span className="text-slate-500 tabular-nums">75% Occupied</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-500 w-[75%] border-r border-white"></div>
<div className="h-full bg-amber-400 w-[8%] border-r border-white" title="Maintenance"></div>
<div className="h-full bg-slate-300 w-[17%]"></div>
</div>
</div>
<div className="pt-2 flex gap-4 text-[10px] text-slate-500 font-medium">
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Occupied (134)</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Vacant (7)</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Maintenance (1)</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="p-5 border-b border-slate-200 flex items-center justify-between">
<h3 className="text-sm font-semibold text-slate-900">Upcoming Renewals</h3>
<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">6 within 30 days</span>
</div>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50/80">
<tr>
<th className="py-2.5 pl-5 pr-3 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500" scope="col">Tenant / Unit</th>
<th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500" scope="col">Ends In</th>
<th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500" scope="col">Current Rent</th>
<th className="relative py-2.5 pl-3 pr-5" scope="col"><span className="sr-only">Actions</span></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white text-sm">
<tr className="hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 pl-5 pr-3">
<div className="font-medium text-slate-900">Michael Chang</div>
<div className="text-xs text-slate-500">Unit 4B, Stark Tower</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-amber-600 font-medium">12 Days</td>
<td className="whitespace-nowrap px-3 py-3 text-slate-600 tabular-nums">$3,200</td>
<td className="whitespace-nowrap py-3 pl-3 pr-5 text-right">
<button className="text-xs font-medium text-indigo-600 border border-indigo-200 bg-indigo-50 px-2 py-1 rounded hover:bg-indigo-100 transition-colors">Renew Offer</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap py-3 pl-5 pr-3">
<div className="font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Unit 112, Oakwood</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-amber-600 font-medium">18 Days</td>
<td className="whitespace-nowrap px-3 py-3 text-slate-600 tabular-nums">$2,150</td>
<td className="whitespace-nowrap py-3 pl-3 pr-5 text-right">
<button className="text-xs font-medium text-indigo-600 border border-indigo-200 bg-indigo-50 px-2 py-1 rounded hover:bg-indigo-100 transition-colors">Renew Offer</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-slate-50 border-t border-slate-200 p-2 text-center">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">View All Renewals</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Maintenance</h3>
<iconify-icon className="text-slate-400" icon="solar:wrench-linear"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-rose-50 rounded-lg p-3 border border-rose-100">
<p className="text-[10px] font-semibold text-rose-600 uppercase tracking-wider mb-1">Urgent</p>
<span className="text-xl font-semibold text-rose-700 tabular-nums tracking-tight">3</span>
</div>
<div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
<p className="text-[10px] font-semibold text-amber-600 uppercase tracking-wider mb-1">In Progress</p>
<span className="text-xl font-semibold text-amber-700 tabular-nums tracking-tight">8</span>
</div>
</div>
<button className="w-full text-xs font-medium text-slate-700 border border-slate-200 bg-white px-3 py-2 rounded-md hover:bg-slate-50 transition-colors shadow-sm">
                                        Review Open Tickets
                                    </button>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Activity Feed</h3>
</div>
<div className="relative pl-4 border-l border-slate-200 space-y-5">

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-white"></div>
<p className="text-xs font-medium text-slate-900">Rent Payment Received</p>
<p className="text-[10px] text-slate-500 mt-0.5">$3,200 from Unit 4B, Stark Tower</p>
<span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-rose-500 ring-4 ring-white"></div>
<p className="text-xs font-medium text-slate-900">Maintenance: Urgent</p>
<p className="text-[10px] text-slate-500 mt-0.5">Water leak reported in Unit 12, Sunnyvale</p>
<span className="text-[10px] text-slate-400 mt-1 block">5 hours ago</span>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-white"></div>
<p className="text-xs font-medium text-slate-900">Lease Signed</p>
<p className="text-[10px] text-slate-500 mt-0.5">New tenant onboarding for Unit 201</p>
<span className="text-[10px] text-slate-400 mt-1 block">Yesterday</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</section>

<section>
<div className="mb-6 space-y-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Frames 5, 6, 7: Dashboard Data States</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 bg-white p-4 rounded-lg border border-slate-200">
<div><span className="font-medium text-slate-900">Empty (Frame 5):</span> First-time user experience.</div>
<div><span className="font-medium text-slate-900">Loading (Frame 6):</span> Pulse skeleton respecting layout.</div>
<div><span className="font-medium text-slate-900">Error (Frame 7):</span> Graceful partial data failure.</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">

<div className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden flex flex-col relative">
<div className="p-4 border-b border-slate-200 bg-white"><div className="h-4 w-24 bg-slate-200 rounded"></div></div>
<div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3 border border-indigo-100">
<iconify-icon className="text-2xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">No properties yet</h3>
<p className="text-xs text-slate-500 mb-4 max-w-[200px]">Get started by adding your first building or importing a CSV.</p>
<button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors">
                            Add Property
                        </button>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden flex flex-col relative p-4 space-y-4">
<div className="flex gap-4 mb-2">
<div className="h-6 w-32 bg-slate-200 rounded animate-pulse"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-20 bg-white border border-slate-100 rounded-lg p-3 flex flex-col justify-between">
<div className="h-2 w-16 bg-slate-200 rounded animate-pulse"></div>
<div className="h-6 w-12 bg-slate-200 rounded animate-pulse"></div>
</div>
<div className="h-20 bg-white border border-slate-100 rounded-lg p-3 flex flex-col justify-between">
<div className="h-2 w-16 bg-slate-200 rounded animate-pulse"></div>
<div className="h-6 w-12 bg-slate-200 rounded animate-pulse"></div>
</div>
</div>
<div className="flex-1 bg-white border border-slate-100 rounded-lg p-4 space-y-4">
<div className="h-3 w-1/4 bg-slate-200 rounded animate-pulse"></div>
<div className="h-2 w-full bg-slate-100 rounded animate-pulse"></div>
<div className="h-2 w-5/6 bg-slate-100 rounded animate-pulse"></div>
<div className="h-2 w-4/6 bg-slate-100 rounded animate-pulse"></div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden flex flex-col relative">
<div className="p-4 border-b border-slate-200 bg-white flex justify-between items-center">
<span className="text-sm font-semibold">Financials</span>
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
</div>
<div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white m-4 rounded-lg border border-rose-100 border-dashed">
<iconify-icon className="text-xl text-rose-400 mb-2" icon="solar:close-circle-linear"></iconify-icon>
<h3 className="text-xs font-semibold text-slate-900 mb-1">Failed to load data</h3>
<p className="text-[10px] text-slate-500 mb-3">We couldn't sync your recent banking transactions.</p>
<button className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded hover:bg-slate-200 transition-colors">
                            Retry Connection
                        </button>
</div>
</div>
</div>
</section>

<section>
<div className="mb-6 space-y-3">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Frames 8, 9, 10: Overlays (Actions, Notifications, AI)</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 bg-white p-4 rounded-lg border border-slate-200">
<div><span className="font-medium text-slate-900">Quick Actions (Frame 8):</span> High-frequency task creation.</div>
<div><span className="font-medium text-slate-900">Notifications (Frame 9):</span> Right-drawer activity stream.</div>
<div><span className="font-medium text-slate-900">AI Panel (Frame 10):</span> Conversational operational queries.</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">

<div className="border border-slate-200 rounded-xl bg-slate-50 flex justify-center pt-8 relative overflow-hidden">

<div className="absolute top-0 inset-x-0 h-14 bg-white border-b border-slate-200 flex justify-end px-4 items-center">
<button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm ring-2 ring-indigo-600/20">
<iconify-icon className="mr-1.5" icon="solar:add-circle-linear"></iconify-icon> Quick Action
                        </button>
</div>

<div className="bg-white border border-slate-200 rounded-lg shadow-lg w-56 mt-10 flex flex-col overflow-hidden z-10 h-max">
<div className="px-3 py-2 border-b border-slate-100 bg-slate-50/50">
<span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Create New</span>
</div>
<div className="p-1">
<a className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-slate-400 text-sm" icon="solar:buildings-2-linear"></iconify-icon> Property
                            </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-slate-400 text-sm" icon="solar:home-2-linear"></iconify-icon> Unit
                            </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-slate-400 text-sm" icon="solar:user-linear"></iconify-icon> Tenant
                            </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-slate-400 text-sm" icon="solar:document-text-linear"></iconify-icon> Lease Agreement
                            </a>
</div>
<div className="px-3 py-2 border-y border-slate-100 bg-slate-50/50">
<span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Record</span>
</div>
<div className="p-1">
<a className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-slate-400 text-sm" icon="solar:wallet-money-linear"></iconify-icon> Manual Payment
                            </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors" href="#">
<iconify-icon className="text-slate-400 text-sm" icon="solar:wrench-linear"></iconify-icon> Maintenance Ticket
                            </a>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-slate-900/20 relative overflow-hidden flex justify-end">
<div className="w-72 bg-white h-full shadow-2xl flex flex-col border-l border-slate-200">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
<h3 className="text-sm font-semibold text-slate-900">Notifications</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">Mark all read</button>
</div>
<div className="flex-1 overflow-y-auto p-0">

<div className="px-4 py-3 border-b border-slate-100 bg-indigo-50/30 flex gap-3 relative">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500"></div>
<div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Overdue Rent: Unit 12B</p>
<p className="text-[10px] text-slate-500 mt-0.5 text-balance">Payment of $1,200 is 5 days late. Automated reminder sent.</p>
<span className="text-[9px] font-medium text-indigo-600 mt-1 block">10 mins ago</span>
</div>
</div>

<div className="px-4 py-3 border-b border-slate-100 bg-white flex gap-3 opacity-75">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Document Uploaded</p>
<p className="text-[10px] text-slate-500 mt-0.5 text-balance">Sarah Jenkins uploaded 'Proof of Insurance'.</p>
<span className="text-[9px] font-medium text-slate-400 mt-1 block">Yesterday</span>
</div>
</div>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-slate-900/20 relative overflow-hidden flex justify-end">
<div className="w-80 bg-white h-full shadow-2xl flex flex-col border-l border-slate-200">
<div className="px-4 py-3 border-b border-indigo-100 bg-gradient-to-r from-indigo-50 to-white flex items-center justify-between shrink-0">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center text-indigo-600 bg-white shadow-sm ring-1 ring-indigo-100">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Ask Portfolio AI</h3>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">

<div className="flex justify-end">
<div className="bg-indigo-600 text-white rounded-lg rounded-tr-sm px-3 py-2 max-w-[85%] shadow-sm">
                                    Which leases are expiring next month?
                                </div>
</div>

<div className="flex justify-start gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 mt-1">
<iconify-icon className="text-[10px]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="bg-slate-50 border border-slate-100 text-slate-700 rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%]">
<p className="mb-2">You have 2 leases expiring in November:</p>
<ul className="space-y-1.5">
<li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Unit 4B, Stark Tower (Nov 12)</li>
<li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Unit 112, Oakwood (Nov 18)</li>
</ul>
<button className="mt-2 text-indigo-600 font-medium hover:underline flex items-center gap-1">Draft renewal offers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="p-3 border-t border-slate-200 bg-white shrink-0">
<div className="relative">
<input className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs shadow-sm bg-slate-50" placeholder="Type a question..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-indigo-600 w-6 h-6 rounded flex items-center justify-center hover:bg-indigo-500 transition-colors shadow-sm">
<iconify-icon className="text-sm" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
