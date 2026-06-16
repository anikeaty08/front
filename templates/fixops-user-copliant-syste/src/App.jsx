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
      

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-[#0056b3]">
<iconify-icon height="24" icon="lucide:wrench" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">FixOps</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-slate-50 text-[#0056b3]" href="#">
<iconify-icon height="18" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:ticket" strokeWidth="1.5" width="18"></iconify-icon>
                Tickets
                <span className="ml-auto bg-amber-100 text-amber-700 py-0.5 px-2 rounded-full text-[10px] font-semibold">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:building-2" strokeWidth="1.5" width="18"></iconify-icon>
                Buildings
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                Staff
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:calendar-clock" strokeWidth="1.5" width="18"></iconify-icon>
                Schedule
            </a>
<div className="pt-6 pb-2">
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider">System</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:bar-chart-3" strokeWidth="1.5" width="18"></iconify-icon>
                Reports
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:settings" strokeWidth="1.5" width="18"></iconify-icon>
                Settings
            </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-xs"> JD </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">John Doe</span>
<span className="text-xs text-slate-500">Facility Manager</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-slate-50/50">

<header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-700">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<nav className="hidden sm:flex text-sm font-medium text-slate-500">
<a className="hover:text-slate-900" href="#">Campus Ops</a>
<span className="mx-2 text-slate-300">/</span>
<span className="text-slate-900">Overview</span>
</nav>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" height="16" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] w-64 transition-all placeholder:text-slate-400" placeholder="Search tickets, assets..." type="text"/>
</div>
<button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon height="20" icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
</button>
<button className="bg-[#0056b3] hover:bg-[#004494] text-white px-4 py-1.5 text-sm font-medium rounded-md shadow-sm flex items-center gap-2 transition-all">
<iconify-icon height="16" icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
<span className="hidden sm:inline">New Ticket</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Total Requests</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">1,248</h3>
</div>
<div className="p-2 bg-blue-50 text-[#0056b3] rounded-lg">
<iconify-icon height="20" icon="lucide:inbox" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<span className="text-green-600 font-medium flex items-center gap-1">
<iconify-icon height="14" icon="lucide:arrow-up-right" width="14"></iconify-icon>
                                12%
                            </span>
<span className="text-slate-400 ml-1.5">from last month</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Pending Action</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">42</h3>
</div>
<div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
<iconify-icon height="20" icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<span className="text-amber-600 font-medium flex items-center gap-1">
                                8 High Priority
                            </span>
<span className="text-slate-400 ml-1.5">require attention</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">In Progress</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">18</h3>
</div>
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<iconify-icon height="20" icon="lucide:hammer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<span className="text-slate-400 ml-2">Active Staff</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Avg. Resolution</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">4.2h</h3>
</div>
<div className="p-2 bg-green-50 text-green-600 rounded-lg">
<iconify-icon height="20" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<span className="text-green-600 font-medium flex items-center gap-1">
<iconify-icon height="14" icon="lucide:arrow-down-right" width="14"></iconify-icon>
                                35m
                            </span>
<span className="text-slate-400 ml-1.5">faster than avg</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="p-5 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900 tracking-tight">Recent Maintenance Requests</h2>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 transition-colors">
<iconify-icon height="14" icon="lucide:filter" width="14"></iconify-icon> Filter
                                </button>
<button className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 transition-colors">
<iconify-icon height="14" icon="lucide:download" width="14"></iconify-icon> Export
                                </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-100">
<th className="py-3 px-5 w-10">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all">
<iconify-icon className="text-white hidden" height="12" icon="lucide:check" width="12"></iconify-icon>
</div>
</label>
</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider">Ticket Details</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider">Location</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
<th className="py-3 px-5 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="py-4 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" height="12" icon="lucide:check" width="12"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">HVAC Malfunction</span>
<span className="text-xs text-slate-500">TKT-2024-892</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-slate-600">
                                            Engineering Hall<br/>
<span className="text-xs text-slate-400">Room 304</span>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pending
                                            </span>
</td>
<td className="py-4 px-5">
<span className="text-xs font-medium text-red-600 flex items-center gap-1">
<iconify-icon height="14" icon="lucide:alert-circle" width="14"></iconify-icon> High
                                            </span>
</td>
<td className="py-4 px-5 text-xs text-slate-500">
                                            2 hours ago
                                        </td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-[#0056b3] transition-colors">
<iconify-icon height="18" icon="lucide:more-horizontal" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="py-4 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" height="12" icon="lucide:check" width="12"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Projector Broken</span>
<span className="text-xs text-slate-500">TKT-2024-891</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-slate-600">
                                            Library<br/>
<span className="text-xs text-slate-400">Media Center</span>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> In Progress
                                            </span>
</td>
<td className="py-4 px-5">
<span className="text-xs font-medium text-amber-600">Medium</span>
</td>
<td className="py-4 px-5 text-xs text-slate-500">
                                            5 hours ago
                                        </td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-[#0056b3] transition-colors">
<iconify-icon height="18" icon="lucide:more-horizontal" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="py-4 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" height="12" icon="lucide:check" width="12"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Key Card Access</span>
<span className="text-xs text-slate-500">TKT-2024-889</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-slate-600">
                                            Science Block B<br/>
<span className="text-xs text-slate-400">Main Entrance</span>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<iconify-icon height="10" icon="lucide:check" width="10"></iconify-icon> Resolved
                                            </span>
</td>
<td className="py-4 px-5">
<span className="text-xs font-medium text-slate-500">Low</span>
</td>
<td className="py-4 px-5 text-xs text-slate-500">
                                            Yesterday
                                        </td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-[#0056b3] transition-colors">
<iconify-icon height="18" icon="lucide:more-horizontal" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="py-4 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<iconify-icon className="text-white hidden" height="12" icon="lucide:check" width="12"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Leaking Faucet</span>
<span className="text-xs text-slate-500">TKT-2024-885</span>
</div>
</td>
<td className="py-4 px-5 text-sm text-slate-600">
                                            Student Union<br/>
<span className="text-xs text-slate-400">Restroom 2F</span>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<iconify-icon height="10" icon="lucide:check" width="10"></iconify-icon> Resolved
                                            </span>
</td>
<td className="py-4 px-5">
<span className="text-xs font-medium text-slate-500">Low</span>
</td>
<td className="py-4 px-5 text-xs text-slate-500">
                                            Yesterday
                                        </td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-[#0056b3] transition-colors">
<iconify-icon height="18" icon="lucide:more-horizontal" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
<span className="text-xs text-slate-500">Showing 4 of 1,248 tickets</span>
<div className="flex gap-2">
<button className="px-2 py-1 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Prev</button>
<button className="px-2 py-1 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50">Next</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Technician Availability</h3>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">
                                            MS
                                        </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Mike Smith</span>
<span className="text-xs text-slate-500">Electrical</span>
</div>
</div>
<span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Busy</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">
                                            SJ
                                        </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Sarah Jones</span>
<span className="text-xs text-slate-500">Plumbing</span>
</div>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">Available</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">
                                            DK
                                        </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">David Kim</span>
<span className="text-xs text-slate-500">HVAC</span>
</div>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">On Break</span>
</div>
</div>
<button className="w-full mt-5 text-xs text-[#0056b3] font-medium py-2 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">View All Schedule</button>
</div>

<div className="bg-[#0056b3] text-white rounded-xl shadow-lg p-5 relative overflow-hidden group">

<div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
<h3 className="text-sm font-semibold mb-1 relative z-10">System Status</h3>
<p className="text-xs text-blue-100 mb-4 relative z-10">Campus infrastructure overview.</p>
<div className="space-y-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-blue-100">Network</span>
<span className="flex items-center gap-1 text-xs font-medium bg-green-500/20 px-2 py-0.5 rounded text-green-100 border border-green-500/30">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                                    </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-blue-100">Power Grid</span>
<span className="flex items-center gap-1 text-xs font-medium bg-green-500/20 px-2 py-0.5 rounded text-green-100 border border-green-500/30">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Stable
                                    </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-blue-100">Water Supply</span>
<span className="flex items-center gap-1 text-xs font-medium bg-amber-500/20 px-2 py-0.5 rounded text-amber-100 border border-amber-500/30">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> Warning
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
