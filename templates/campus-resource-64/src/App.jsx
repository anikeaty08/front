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
      

<div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-medium text-sm">C</div>
<span className="font-semibold text-zinc-900 tracking-tight">CAMPUS</span>
</div>
<button className="p-2 text-zinc-500 hover:bg-gray-50 rounded-lg">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex min-h-screen">

<aside className="hidden md:flex w-64 flex-col fixed inset-y-0 left-0 border-r border-gray-200 bg-white z-40">
<div className="p-6">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-zinc-900 rounded-lg shadow-sm flex items-center justify-center text-white font-medium text-sm">C</div>
<span className="font-semibold text-lg text-zinc-900 tracking-tight">CAMPUS</span>
</div>
</div>
<nav className="flex-1 px-3 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-gray-50 rounded-lg border border-gray-200/60 shadow-sm" href="#">
<iconify-icon className="text-zinc-900" icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="group-hover:text-zinc-900 transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Bookings
                </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="group-hover:text-zinc-900 transition-colors" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Equipment
                    <span className="ml-auto bg-zinc-100 text-zinc-600 py-0.5 px-2 rounded-md text-xs border border-zinc-200">12</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="group-hover:text-zinc-900 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Students
                </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="group-hover:text-zinc-900 transition-colors" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Analytics
                </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 border border-white shadow-sm"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Alex Morgan</span>
<span className="text-xs text-zinc-500">Admin</span>
</div>
<iconify-icon className="ml-auto text-zinc-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 min-h-screen flex flex-col">

<header className="h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-200/60">
<div className="flex items-center text-sm text-zinc-500 gap-2">
<span className="hover:text-zinc-800 cursor-pointer transition-colors">Home</span>
<iconify-icon className="opacity-50" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-900 font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-4">

<div className="relative group hidden sm:block">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 group-focus-within:text-zinc-600 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-64 pl-10 pr-3 py-1.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-zinc-300 focus:border-zinc-300 sm:text-sm transition-all shadow-sm" placeholder="Search resources..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
<span className="text-xs text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5">⌘K</span>
</div>
</div>
<button className="relative p-2 text-zinc-400 hover:text-zinc-900 hover:bg-gray-100 rounded-full transition-all">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-red-500"></span>
</button>
</div>
</header>
<div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto w-full">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Resource Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Manage campus facilities, lab equipment, and library assets.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
                            Filter
                        </button>
<button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 shadow-lg shadow-zinc-200 transition-all flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                            New Booking
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600 border border-blue-100">
<iconify-icon icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Active</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-semibold text-zinc-900">24</h3>
<span className="text-xs font-medium text-zinc-500">bookings</span>
</div>
<div className="mt-2 text-xs text-zinc-500">
<span className="text-green-600 font-medium">+12%</span> vs last week
                        </div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-50 rounded-lg text-purple-600 border border-purple-100">
<iconify-icon icon="solar:laptop-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Inventory</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-semibold text-zinc-900">182</h3>
<span className="text-xs font-medium text-zinc-500">items</span>
</div>
<div className="mt-2 text-xs text-zinc-500">
<span className="text-zinc-400">85% Available</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-50 rounded-lg text-orange-600 border border-orange-100">
<iconify-icon icon="solar:danger-triangle-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Overdue</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-semibold text-zinc-900">3</h3>
<span className="text-xs font-medium text-zinc-500">returns</span>
</div>
<div className="mt-2 text-xs text-zinc-500">
                            Needs attention
                        </div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-teal-50 rounded-lg text-teal-600 border border-teal-100">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Users</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-semibold text-zinc-900">1,204</h3>
<span className="text-xs font-medium text-zinc-500">active</span>
</div>
<div className="mt-2 text-xs text-zinc-500">
                            Current semester
                        </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-zinc-900 tracking-tight">Available Resources</h2>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">View All</a>
</div>
<div className="space-y-3">

<div className="group bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-zinc-300 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-zinc-900">Sony Alpha A7 III Kit</h4>
<p className="text-xs text-zinc-500 mt-0.5">Media Lab • Rack B2</p>
</div>
<div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-zinc-600">Available</span>
</div>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-700 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-zinc-900 transition-colors">
                                        Book Now
                                    </button>
</div>
</div>

<div className="group bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-zinc-300 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:screencast-2-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-zinc-900">Lecture Hall 304</h4>
<p className="text-xs text-zinc-500 mt-0.5">Engineering Block • Capacity 120</p>
</div>
<div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-xs font-medium text-zinc-600">Reserved (2h)</span>
</div>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 border border-gray-100 rounded-lg cursor-not-allowed bg-gray-50">
                                        Waitlist
                                    </button>
</div>
</div>

<div className="group bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-zinc-300 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-zinc-900">MacBook Pro M2</h4>
<p className="text-xs text-zinc-500 mt-0.5">IT Department • Max 48h</p>
</div>
<div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-zinc-600">4 in stock</span>
</div>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-700 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-zinc-900 transition-colors">
                                        Book Now
                                    </button>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-zinc-900 tracking-tight">Your Schedule</h2>
<button className="text-zinc-400 hover:text-zinc-900">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Today, 24 Oct</span>
<span className="text-xs text-zinc-400">2 events</span>
</div>

<div className="divide-y divide-gray-100">
<div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
<div className="flex flex-col items-center gap-1 min-w-[3rem]">
<span className="text-xs font-medium text-zinc-900">09:00</span>
<div className="h-full w-px bg-gray-200 my-1"></div>
</div>
<div className="pb-2">
<h4 className="text-sm font-medium text-zinc-900">Study Room A1</h4>
<p className="text-xs text-zinc-500 mt-1">Group Project Discussion</p>
<div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            1h 30m left
                                        </div>
</div>
</div>
<div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
<div className="flex flex-col items-center gap-1 min-w-[3rem]">
<span className="text-xs font-medium text-zinc-500">14:00</span>
<div className="h-full w-px bg-transparent my-1"></div>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-900">Projector Return</h4>
<p className="text-xs text-zinc-500 mt-1">IT Service Desk</p>
<div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                            Due Today
                                        </div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
<h3 className="text-sm font-semibold text-zinc-900 mb-3">Quick Categories</h3>
<div className="flex flex-wrap gap-2">
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-zinc-600 hover:border-zinc-300 transition-all select-none">
                                        Study Rooms
                                    </div>
</label>
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-zinc-600 hover:border-zinc-300 transition-all select-none">
                                        Laptops
                                    </div>
</label>
<label className="custom-checkbox cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-zinc-600 hover:border-zinc-300 transition-all select-none">
                                        Cameras
                                    </div>
</label>
<label className="custom-checkbox cursor-pointer">
<input checked="" className="hidden" type="checkbox"/>
<div className="px-3 py-1.5 rounded-lg border border-zinc-900 bg-zinc-900 text-xs font-medium text-white shadow-md transition-all select-none">
                                        Laboratories
                                    </div>
</label>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-sm font-semibold text-zinc-900">Recent Transactions</h3>
<div className="flex gap-2">
<button className="p-1 text-zinc-400 hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
<button className="p-1 text-zinc-400 hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-zinc-500">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium text-xs text-zinc-500 uppercase tracking-wider">Item / Resource</th>
<th className="px-6 py-3 font-medium text-xs text-zinc-500 uppercase tracking-wider">User</th>
<th className="px-6 py-3 font-medium text-xs text-zinc-500 uppercase tracking-wider">Date</th>
<th className="px-6 py-3 font-medium text-xs text-zinc-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 font-medium text-xs text-zinc-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3.5 text-zinc-900 font-medium">Physics Lab 101</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold">JD</div>
<span>John Doe</span>
</div>
</td>
<td className="px-6 py-3.5">Oct 24, 2023</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                            Approved
                                        </span>
</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3.5 text-zinc-900 font-medium">Dell XPS 15</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] text-indigo-600 font-bold">AS</div>
<span>Alice Smith</span>
</div>
</td>
<td className="px-6 py-3.5">Oct 23, 2023</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                            Pending
                                        </span>
</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3.5 text-zinc-900 font-medium">3D Printer Filament</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-[10px] text-pink-600 font-bold">MK</div>
<span>Mike Kim</span>
</div>
</td>
<td className="px-6 py-3.5">Oct 22, 2023</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                                            Returned
                                        </span>
</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
<span className="text-xs text-zinc-500">Showing 3 of 128 results</span>
<div className="flex gap-2">
<button className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-zinc-600 hover:bg-gray-50 disabled:opacity-50" disabled="">Previous</button>
<button className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-zinc-600 hover:bg-gray-50">Next</button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
