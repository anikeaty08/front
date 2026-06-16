import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<div className="flex h-screen w-full overflow-hidden">

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col justify-between z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<span className="text-xl font-semibold tracking-tighter text-slate-900">ZIVRA</span>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-slate-50 text-indigo-600 rounded-lg group transition-all" href="/">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg group transition-all" href="/patients">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Patients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg group transition-all" href="/session">
<iconify-icon icon="solar:clipboard-list-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Sessions</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg group transition-all" href="/games">
<iconify-icon icon="solar:gamepad-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">XR Games</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg group transition-all" href="/inbox">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Inbox</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-slate-100">
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all" href="/settings">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-medium">Dr</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Dr. S. Miller</span>
<span className="text-[10px] text-slate-400">Senior Therapist</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-lg font-medium tracking-tight text-slate-900">Clinical Overview</h1>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-transparent border-none text-xs w-48 ml-2 focus:outline-none placeholder:text-slate-400" placeholder="Search patients..." type="text"/>
</div>

<div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer hover:border-slate-300 transition-colors">
<iconify-icon className="text-slate-500" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-700">This Week</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>

<button className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-500 transition-colors">
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></div>
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto scroller p-4 sm:p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Patients</span>
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3">
<span className="text-3xl font-medium tracking-tight text-slate-900">42</span>
<div className="flex items-center text-emerald-600 text-xs mb-1.5 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
<span>12%</span>
</div>
</div>
<p className="text-xs text-slate-400 mt-1">Total engaged in therapy</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Sessions Today</span>
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:health-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3">
<span className="text-3xl font-medium tracking-tight text-slate-900">14</span>
<div className="flex items-center text-emerald-600 text-xs mb-1.5 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
<span>5%</span>
</div>
</div>
<p className="text-xs text-slate-400 mt-1">Scheduled vs completed</p>
</div>

<div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Compensations</span>
<div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
<iconify-icon icon="solar:bone-broken-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3">
<span className="text-3xl font-medium tracking-tight text-slate-900">8</span>
<span className="text-xs text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full font-medium mb-1.5">Needs Review</span>
</div>
<p className="text-xs text-slate-400 mt-1">Shoulder elevation alerts</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Avg Duration</span>
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-3">
<span className="text-3xl font-medium tracking-tight text-slate-900">24<span className="text-lg text-slate-400 font-normal ml-0.5">m</span></span>
<div className="flex items-center text-slate-400 text-xs mb-1.5 font-medium bg-slate-50 px-1.5 py-0.5 rounded">
<span>0%</span>
</div>
</div>
<p className="text-xs text-slate-400 mt-1">Per session time</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto">

<div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
<div className="p-5 border-b border-slate-100 flex justify-between items-center">
<h2 className="text-sm font-semibold text-slate-900">Recent Sessions</h2>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1" href="/sessions">
                                    View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50">
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide w-1/3">Patient</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Game</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Duration</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Compensation</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-100">
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3.5 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">JD</div>
<div>
<p className="font-medium text-slate-900">John Doe</p>
<p className="text-[10px] text-slate-400">Today, 10:30 AM</p>
</div>
</div>
</td>
<td className="py-3.5 px-5 text-slate-600">Balloon Burst</td>
<td className="py-3.5 px-5 text-slate-600">15 min</td>
<td className="py-3.5 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-medium border border-rose-100">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                                    Detected
                                                </div>
</td>
<td className="py-3.5 px-5 text-right">
<button className="text-xs font-medium text-slate-500 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 px-3 py-1 rounded bg-white transition-all">Details</button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3.5 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-600">AS</div>
<div>
<p className="font-medium text-slate-900">Alice Smith</p>
<p className="text-[10px] text-slate-400">Today, 09:15 AM</p>
</div>
</div>
</td>
<td className="py-3.5 px-5 text-slate-600">Shelf Stacker</td>
<td className="py-3.5 px-5 text-slate-600">22 min</td>
<td className="py-3.5 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                    Optimal
                                                </div>
</td>
<td className="py-3.5 px-5 text-right">
<button className="text-xs font-medium text-slate-500 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 px-3 py-1 rounded bg-white transition-all">Details</button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3.5 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">RB</div>
<div>
<p className="font-medium text-slate-900">Robert Brown</p>
<p className="text-[10px] text-slate-400">Yesterday, 4:00 PM</p>
</div>
</div>
</td>
<td className="py-3.5 px-5 text-slate-600">Balloon Burst</td>
<td className="py-3.5 px-5 text-slate-600">18 min</td>
<td className="py-3.5 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                    Minor
                                                </div>
</td>
<td className="py-3.5 px-5 text-right">
<button className="text-xs font-medium text-slate-500 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 px-3 py-1 rounded bg-white transition-all">Details</button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3.5 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">EM</div>
<div>
<p className="font-medium text-slate-900">Eva Martinez</p>
<p className="text-[10px] text-slate-400">Yesterday, 2:30 PM</p>
</div>
</div>
</td>
<td className="py-3.5 px-5 text-slate-600">Painting</td>
<td className="py-3.5 px-5 text-slate-600">12 min</td>
<td className="py-3.5 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                    Optimal
                                                </div>
</td>
<td className="py-3.5 px-5 text-right">
<button className="text-xs font-medium text-slate-500 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 px-3 py-1 rounded bg-white transition-all">Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
<div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-xl">
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="solar:shield-warning-linear" width="18"></iconify-icon>
<h2 className="text-sm font-semibold text-slate-900">Priority Alerts</h2>
</div>
<span className="bg-rose-100 text-rose-600 text-[10px] font-bold px-1.5 py-0.5 rounded">3 NEW</span>
</div>
<div className="p-4 space-y-3 overflow-y-auto">

<div className="p-3 border border-rose-200 bg-rose-50/30 rounded-lg flex flex-col gap-2 relative">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-rose-500 rounded-r"></div>
<div className="flex justify-between items-start pl-3">
<div>
<p className="text-sm font-medium text-slate-900">John Doe</p>
<p className="text-xs text-rose-600 font-medium">Shoulder Elevation</p>
</div>
<span className="text-[10px] font-medium bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded">High Severity</span>
</div>
<div className="pl-3 flex justify-between items-center mt-1">
<span className="text-[10px] text-slate-400">Today, 10:42 AM</span>
<button className="text-[10px] font-medium text-rose-600 hover:underline">Review Session</button>
</div>
</div>

<div className="p-3 border border-amber-200 bg-amber-50/30 rounded-lg flex flex-col gap-2 relative">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-amber-500 rounded-r"></div>
<div className="flex justify-between items-start pl-3">
<div>
<p className="text-sm font-medium text-slate-900">Marcus L.</p>
<p className="text-xs text-amber-600 font-medium">Trunk Compensation</p>
</div>
<span className="text-[10px] font-medium bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Medium</span>
</div>
<div className="pl-3 flex justify-between items-center mt-1">
<span className="text-[10px] text-slate-400">Yesterday</span>
<button className="text-[10px] font-medium text-amber-600 hover:underline">Review Session</button>
</div>
</div>

<div className="p-3 border border-slate-200 bg-white rounded-lg flex flex-col gap-2 relative group hover:border-indigo-200 transition-colors">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-slate-300 rounded-r group-hover:bg-indigo-400 transition-colors"></div>
<div className="flex justify-between items-start pl-3">
<div>
<p className="text-sm font-medium text-slate-900">Sarah Connor</p>
<p className="text-xs text-slate-500">Range of Motion</p>
</div>
<span className="text-[10px] font-medium bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Low</span>
</div>
<div className="pl-3 flex justify-between items-center mt-1">
<span className="text-[10px] text-slate-400">2 days ago</span>
<button className="text-[10px] font-medium text-indigo-600 hover:underline">Review Session</button>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 lg:col-span-2">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-sm font-semibold text-slate-900">Session Activity</h3>
<p className="text-xs text-slate-400">Number of completed sessions (Last 7 Days)</p>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs text-slate-500">Completed</span>
</div>
</div>

<div className="flex items-end justify-between h-40 gap-2 sm:gap-4 px-2">

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-sm h-full relative flex items-end overflow-hidden group-hover:bg-slate-50 transition-colors">
<div className="w-full bg-indigo-500/80 group-hover:bg-indigo-500 transition-all rounded-t-sm" style={{height: '40%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none transition-opacity">12</div>
</div>
<span className="text-[10px] text-slate-400">Mon</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-sm h-full relative flex items-end overflow-hidden group-hover:bg-slate-50 transition-colors">
<div className="w-full bg-indigo-500/80 group-hover:bg-indigo-500 transition-all rounded-t-sm" style={{height: '65%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none transition-opacity">24</div>
</div>
<span className="text-[10px] text-slate-400">Tue</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-sm h-full relative flex items-end overflow-hidden group-hover:bg-slate-50 transition-colors">
<div className="w-full bg-indigo-500/80 group-hover:bg-indigo-500 transition-all rounded-t-sm" style={{height: '55%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none transition-opacity">18</div>
</div>
<span className="text-[10px] text-slate-400">Wed</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-sm h-full relative flex items-end overflow-hidden group-hover:bg-slate-50 transition-colors">
<div className="w-full bg-indigo-500/80 group-hover:bg-indigo-500 transition-all rounded-t-sm" style={{height: '80%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none transition-opacity">30</div>
</div>
<span className="text-[10px] text-slate-400">Thu</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-sm h-full relative flex items-end overflow-hidden group-hover:bg-slate-50 transition-colors">
<div className="w-full bg-indigo-500/80 group-hover:bg-indigo-500 transition-all rounded-t-sm" style={{height: '45%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none transition-opacity">15</div>
</div>
<span className="text-[10px] text-slate-400">Fri</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-sm h-full relative flex items-end overflow-hidden group-hover:bg-slate-50 transition-colors">
<div className="w-full bg-indigo-500/80 group-hover:bg-indigo-500 transition-all rounded-t-sm" style={{height: '25%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none transition-opacity">8</div>
</div>
<span className="text-[10px] text-slate-400">Sat</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[40px] bg-slate-100 rounded-t-sm h-full relative flex items-end overflow-hidden group-hover:bg-slate-50 transition-colors">
<div className="w-full bg-indigo-500/80 group-hover:bg-indigo-500 transition-all rounded-t-sm" style={{height: '15%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none transition-opacity">4</div>
</div>
<span className="text-[10px] text-slate-400">Sun</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Game Preferences</h3>
<p className="text-xs text-slate-400 mb-6">Most played therapy modules</p>
<div className="flex-1 flex flex-col items-center justify-center">

<div className="relative w-40 h-40 rounded-full pie-chart flex items-center justify-center mb-6">

<div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center z-10 shadow-sm">
<span className="text-2xl font-semibold text-slate-900">112</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wide">Sessions</span>
</div>
</div>

<div className="w-full space-y-2">
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></div>
<span className="text-slate-600">Balloon Burst</span>
</div>
<span className="font-medium text-slate-900">65%</span>
</div>
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-sm bg-indigo-300"></div>
<span className="text-slate-600">Shelf Stacker</span>
</div>
<span className="font-medium text-slate-900">20%</span>
</div>
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-sm bg-slate-200"></div>
<span className="text-slate-600">Other Games</span>
</div>
<span className="font-medium text-slate-900">15%</span>
</div>
</div>
</div>
</div>
</div>

</div>


<div className="max-w-7xl mx-auto mt-8 mb-4 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100 pt-4">
<span>© 2024 ZIVRA Therapeutics. HIPAA Compliant.</span>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Support</a>
</div>
</div>
</div>

</main>
</div>

    </>
  );
}
