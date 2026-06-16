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
      

<nav className="hidden md:flex flex-col w-64 border-r border-gray-200 bg-white fixed h-full z-10">
<div className="p-6">
<div className="flex items-center gap-2 font-semibold tracking-tight text-gray-900">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white text-xs">P</div>
<span>PLANNER</span>
</div>
</div>
<div className="flex-1 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Team Capacity
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:calendar-mark-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Sprints
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Settings
            </a>
</div>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">John Doe</span>
<span className="text-xs text-gray-500">Product Owner</span>
</div>
</div>
</div>
</nav>

<main className="flex-1 md:ml-64 p-6 md:p-12 max-w-7xl mx-auto w-full">

<header className="mb-10">
<div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
<span>Engineering</span>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
<span>Planning</span>
</div>
<div className="flex justify-between items-end">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Capacity Planning</h1>
<p className="text-gray-500 mt-2 text-sm max-w-xl">Manage team availability and sprint velocity forecasts.</p>
</div>
<div className="hidden md:flex gap-3">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-all shadow-sm">
<iconify-icon icon="solar:export-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        Export
                    </button>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-all shadow-sm">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        Create Sprint
                    </button>
</div>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<section className="lg:col-span-1 space-y-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<h2 className="font-semibold text-gray-900 text-sm tracking-tight flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Team Members
                        </h2>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">5 Members</span>
</div>
<div className="divide-y divide-gray-50">

<div className="p-4 group hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=a"/>
<div>
<p className="text-sm font-medium text-gray-900">Alex M.</p>
<p className="text-xs text-gray-400">Frontend</p>
</div>
</div>
<button className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="bg-gray-50 rounded-md p-2 flex items-center justify-between border border-gray-100">
<span className="text-xs text-gray-500 font-medium">Daily Capacity</span>
<div className="flex items-center gap-2">
<input className="w-12 text-right text-sm font-medium bg-transparent border-b border-gray-300 focus:border-gray-900 focus:ring-0 p-0" type="number" value="6.5"/>
<span className="text-xs text-gray-400">hrs</span>
</div>
</div>
</div>

<div className="p-4 group hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-semibold">SK</div>
<div>
<p className="text-sm font-medium text-gray-900">Sarah K.</p>
<p className="text-xs text-gray-400">Backend</p>
</div>
</div>
<button className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="bg-gray-50 rounded-md p-2 flex items-center justify-between border border-gray-100">
<span className="text-xs text-gray-500 font-medium">Daily Capacity</span>
<div className="flex items-center gap-2">
<input className="w-12 text-right text-sm font-medium bg-transparent border-b border-gray-300 focus:border-gray-900 focus:ring-0 p-0" type="number" value="7.0"/>
<span className="text-xs text-gray-400">hrs</span>
</div>
</div>
</div>

<div className="p-4 group hover:bg-gray-50 transition-colors">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=d"/>
<div>
<p className="text-sm font-medium text-gray-900">David R.</p>
<p className="text-xs text-gray-400">Design</p>
</div>
</div>
<button className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="bg-gray-50 rounded-md p-2 flex items-center justify-between border border-gray-100">
<span className="text-xs text-gray-500 font-medium">Daily Capacity</span>
<div className="flex items-center gap-2">
<input className="w-12 text-right text-sm font-medium bg-transparent border-b border-gray-300 focus:border-gray-900 focus:ring-0 p-0" type="number" value="5.0"/>
<span className="text-xs text-gray-400">hrs</span>
</div>
</div>
</div>

<div className="p-3">
<button className="w-full py-2 border border-dashed border-gray-300 rounded-md text-sm text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                Add Member
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex items-start gap-3 mb-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:bolt-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Additional Capacity</h3>
<p className="text-xs text-gray-500 mt-1">Unpredicted capacity from external help or availability.</p>
</div>
</div>
<div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
<span className="text-sm text-gray-600">Extra Hours</span>
<div className="flex items-center gap-2">
<button className="text-gray-400 hover:text-gray-900 flex items-center justify-center w-6 h-6 rounded hover:bg-gray-200 transition-colors">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</button>
<input className="w-10 text-center text-sm font-semibold text-gray-900 bg-transparent border-none focus:ring-0 p-0" type="number" value="12"/>
<button className="text-gray-400 hover:text-gray-900 flex items-center justify-center w-6 h-6 rounded hover:bg-gray-200 transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="lg:col-span-2">
<div className="flex items-center justify-between mb-4">
<h2 className="font-semibold text-gray-900 text-sm tracking-tight flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:list-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Sprint List
                    </h2>
<div className="flex gap-2">
<span className="text-xs font-medium text-gray-500">View:</span>
<button className="text-xs font-medium text-gray-900 border-b border-gray-900">List</button>
<button className="text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors">Calendar</button>
</div>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm ring-1 ring-gray-900/5 overflow-hidden">
<div className="p-1 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
<div className="p-5">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Sprint 24</h3>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            Active
                                        </span>
</div>
<p className="text-sm text-gray-500">Core Feature Implementation &amp; Bug Bash</p>
</div>
<div className="text-right">
<div className="flex items-baseline justify-end gap-1">
<input className="block w-20 text-2xl font-semibold text-gray-900 tracking-tight text-right bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-900 focus:ring-0 p-0 transition-colors" type="number" value="85"/>
<span className="text-sm text-gray-400 font-normal">pts</span>
</div>
<span className="text-xs text-gray-500">Total Capacity</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Start Date</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-200 text-sm shadow-sm focus:border-gray-900 focus:ring-gray-900 py-1.5 pl-3 pr-2 text-gray-700 font-medium" type="date" value="2023-10-01"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">End Date</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-200 text-sm shadow-sm focus:border-gray-900 focus:ring-gray-900 py-1.5 pl-3 pr-2 text-gray-700 font-medium" type="date" value="2023-10-14"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Workdays</label>
<div className="flex items-center h-[34px] px-3 bg-gray-50 rounded-md border border-gray-200 text-gray-500 text-sm">
<iconify-icon className="mr-2 opacity-50" icon="solar:calendar-date-linear" width="16"></iconify-icon>
                                        10 Days
                                    </div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sprint Goal</label>
<textarea className="block w-full rounded-md border-gray-200 shadow-sm focus:border-gray-900 focus:ring-gray-900 text-sm resize-none py-2 px-3 placeholder:text-gray-400" placeholder="Describe the main focus..." rows="2">Complete the user authentication flow and setup initial database schema.</textarea>
</div>
</div>
<div className="px-5 py-3 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=a"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">SK</div>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=d"/>
<span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-gray-100 text-[10px] text-gray-500 font-medium">+2</span>
</div>
<span className="text-xs text-gray-400 font-medium">Auto-calculated from team settings</span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm opacity-90 hover:opacity-100 transition-opacity">
<div className="p-5">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-semibold text-gray-700 tracking-tight">Sprint 25</h3>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                            Planned
                                        </span>
</div>
<p className="text-sm text-gray-400">Backlog cleanup &amp; Reporting module</p>
</div>
<div className="text-right">
<div className="flex items-baseline justify-end gap-1">
<input className="block w-20 text-2xl font-semibold text-gray-700 tracking-tight text-right bg-transparent border-b border-transparent hover:border-gray-200 focus:border-gray-900 focus:ring-0 p-0 transition-colors" type="number" value="72" />
<span className="text-sm text-gray-400 font-normal">pts</span>
</input></div>
<span className="text-xs text-gray-400">Forecast</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">Start Date</label>
<input className="block w-full rounded-md border-gray-200 text-sm shadow-sm focus:border-gray-900 focus:ring-gray-900 py-1.5 pl-3 pr-2 text-gray-600 bg-white" type="date" value="2023-10-15"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">End Date</label>
<input className="block w-full rounded-md border-gray-200 text-sm shadow-sm focus:border-gray-900 focus:ring-gray-900 py-1.5 pl-3 pr-2 text-gray-600 bg-white" type="date" value="2023-10-29"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wide">Workdays</label>
<div className="flex items-center h-[34px] px-3 bg-gray-50 rounded-md border border-gray-200 text-gray-400 text-sm">
<iconify-icon className="mr-2 opacity-50" icon="solar:calendar-date-linear" width="16"></iconify-icon>
                                        10 Days
                                    </div>
</div>
</div>
</div>

<div className="px-5 py-3 border-t border-gray-100 bg-gray-50/30">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-gray-600">Sprint Specific Adjustment</span>
</div>
<div className="flex items-center gap-2">
<input className="w-16 text-right text-xs rounded border-gray-200 focus:border-gray-900 focus:ring-0 py-1" placeholder="+0" type="text"/>
<span className="text-xs text-gray-400">pts</span>
</div>
</div>
</div>
</div>

<button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:bg-white transition-all group">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium">Plan Next Sprint</span>
</button>
</div>
</section>
</div>
</main>

    </>
  );
}
