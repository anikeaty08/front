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
      

<nav className="flex-col hidden md:flex bg-slate-50 w-64 border-slate-200 border-r justify-between z-20">
<div className="pt-4 pr-4 pb-4 pl-4 overflow-y-auto">

<div className="flex items-center gap-2 mb-8 px-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-xs tracking-tighter">TS</div>
<span className="font-semibold tracking-tight text-slate-900">TimeSlotControl</span>
</div>

<div className="space-y-1">
<div className="px-2 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Warehouse</div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-white hover:shadow-sm hover:text-slate-900 transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" height="18" icon="solar:widget-linear" width="18"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-white shadow-sm border border-slate-200/60 text-slate-900 rounded-lg transition-all" href="#">
<iconify-icon className="text-indigo-600" height="18" icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span className="font-medium">Schedule</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 rounded-lg hover:bg-white hover:shadow-sm hover:text-slate-900 transition-all group justify-between" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" height="18" icon="solar:inbox-linear" width="18"></iconify-icon>
<span className="font-medium">Requests</span>
</div>
<span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-1.5 py-0.5 rounded-md">4</span>
</a>
</div>
<div className="mt-8 space-y-1">
<div className="px-2 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Entities</div>
<a className="flex items-center gap-3 hover:bg-white hover:shadow-sm hover:text-slate-900 transition-all group text-slate-600 rounded-lg pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="font-medium">Clients</span>
</a>
<a className="flex items-center gap-3 hover:bg-white hover:shadow-sm hover:text-slate-900 transition-all group text-slate-600 rounded-lg pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" height="18" icon="solar:delivery-linear" width="18"></iconify-icon>
<span className="font-medium">Carriers</span>
</a>
</div>
<div className="mt-8 space-y-1">
<div className="px-2 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">System</div>
<a className="flex items-center gap-3 hover:bg-white hover:shadow-sm hover:text-slate-900 transition-all group text-slate-600 rounded-lg pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" height="18" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span className="font-medium">User Mgmt</span>
</a>
<a className="flex items-center gap-3 hover:bg-white hover:shadow-sm hover:text-slate-900 transition-all group text-slate-600 rounded-lg pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" height="18" icon="solar:settings-linear" width="18"></iconify-icon>
<span className="font-medium">Settings</span>
</a>
</div>
</div>
<div className="p-4 border-t border-slate-200 bg-slate-50">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium text-xs border border-indigo-200">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">John Doe</span>
<span className="text-[10px] text-slate-500">Warehouse Worker</span>
</div>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="flex shrink-0 bg-white h-14 z-10 border-slate-200 border-b pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center text-slate-500 gap-2 text-xs font-medium">
<span className="hover:text-slate-900 cursor-pointer">Prague Main Logistics</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-900">Schedule</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
<button className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-medium text-slate-900">Day</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Week</button>
</div>
<button className="flex items-center justify-center w-8 h-8 text-slate-500 hover:text-slate-900">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative">

<div className="flex-1 overflow-y-auto bg-white relative">

<div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-slate-100 px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-slate-100 rounded text-slate-500"><iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon></button>
<span className="text-sm font-semibold text-slate-900 tracking-tight">Today, Oct 24</span>
<button className="p-1 hover:bg-slate-100 rounded text-slate-500"><iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon></button>
</div>
<div className="flex gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Confirmed</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Requested</div>
</div>
</div>

<div className="p-6 pt-2">

<div className="flex border-b border-slate-100 mb-2 sticky top-12 bg-white z-0">
<div className="w-24 shrink-0 py-2 text-xs font-medium text-slate-400">Gate</div>
<div className="flex-1 grid grid-cols-12 gap-1 text-center">
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">08:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">09:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">10:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">11:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">12:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">13:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">14:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">15:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">16:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">17:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">18:00</div>
<div className="py-2 text-xs text-slate-400 border-l border-slate-50">19:00</div>
</div>
</div>

<div className="flex items-center py-3 border-b border-slate-50">
<div className="w-24 shrink-0">
<div className="font-semibold text-slate-900">Gate A1</div>
<div className="text-[10px] text-slate-400">Standard</div>
</div>
<div className="flex-1 relative h-10 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
<div className="absolute left-[16%] w-[24%] top-1 bottom-1 bg-emerald-50 border border-emerald-200 rounded text-emerald-700 px-2 flex flex-col justify-center">
<span className="text-[10px] font-bold leading-tight truncate">Allegro / P&amp;G</span>
</div>
</div>
</div>

<div className="flex items-center py-3 border-b border-slate-50">
<div className="w-24 shrink-0">
<div className="font-semibold text-slate-900">Gate B1</div>
<div className="text-[10px] text-slate-400">Large Truck</div>
</div>
<div className="flex-1 relative h-10 bg-slate-50/50 rounded-lg border border-slate-100 overflow-hidden">
<div className="absolute left-[50%] w-[24%] top-1 bottom-1 bg-white border border-indigo-500 rounded text-indigo-700 px-2 flex flex-col justify-center shadow-md">
<span className="text-[10px] font-bold leading-tight truncate">Allegro / TonerRL</span>
</div>
</div>
</div>
</div>
</div>


<div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/10 backdrop-blur-sm p-4">
<div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg flex flex-col max-h-full">

<div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
<iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 tracking-tight">Create New Account</h3>
<p className="text-xs text-slate-500">Invite a new user to the organization</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>

<div className="p-6 overflow-y-auto space-y-5">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block p-2.5 outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Sarah" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block p-2.5 outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Connor" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block pl-9 p-2.5 outline-none transition-all placeholder:text-slate-400" placeholder="sarah@company.com" type="email"/>
</div>
</div>
<hr className="border-slate-100"/>

<div className="space-y-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Access Control</h4>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Role</label>
<select className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block p-2.5 outline-none transition-all">
<option value="admin">Administrator (Full Access)</option>
<option selected="" value="dispatcher">Dispatcher (Schedule Management)</option>
<option value="warehouse">Warehouse Worker (View Only)</option>
<option value="carrier">Carrier (External Request)</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Assigned Facility</label>
<select className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block p-2.5 outline-none transition-all">
<option>Prague Main Logistics</option>
<option>Brno Distribution Center</option>
<option>Ostrava Depot</option>
</select>
</div>

<div className="bg-slate-50 rounded-lg p-3 border border-slate-200 space-y-2 mt-2">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" id="perm1" type="checkbox"/>
<iconify-icon className="absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-slate-700 cursor-pointer select-none" htmlFor="perm1">Approve Reservations</label>
</div>
<iconify-icon className="text-slate-300" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" id="perm2" type="checkbox"/>
<iconify-icon className="absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-slate-700 cursor-pointer select-none" htmlFor="perm2">Manage Gates</label>
</div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" id="perm3" type="checkbox"/>
<iconify-icon className="absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-slate-700 cursor-pointer select-none" htmlFor="perm3">System Settings</label>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 bg-slate-50 border-t border-slate-200 rounded-b-xl flex justify-end gap-3">
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-all">Cancel</button>
<button className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 shadow-sm shadow-slate-300/50 transition-all flex items-center gap-2">
<span>Send Invitation</span>
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<aside className="w-[420px] bg-white border-l border-slate-200 flex flex-col h-full opacity-40 blur-[1px] pointer-events-none">
<div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 shrink-0 bg-slate-50/50">
<h2 className="font-semibold text-slate-900">Reservation #4922</h2>
</div>
<div className="p-6">
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100"></div>
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100 mt-4"></div>
</div>
</aside>
</div>
</main>

    </>
  );
}
