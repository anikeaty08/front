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
      

<aside className="w-72 bg-zinc-950 flex flex-col h-full border-r border-zinc-800 shrink-0 transition-all duration-300">

<div className="h-16 flex items-center px-6 border-b border-zinc-800">
<div className="flex items-center gap-2.5 text-white">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#009444]/10 border border-[#009444]/20 text-[#009444]">
</div>
<span className="text-lg font-medium tracking-tight">LocalStalls Logo</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8 sidebar-scroll" style={{}}>

<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-md hover:text-zinc-100 hover:bg-zinc-800 transition-colors group" href="#">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard w-5 h-5 stroke-[1.5] group-hover:text-white transition-colors" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                    Dashboard
                </a>
<a className="flex items-center gap-3 transition-colors group text-sm font-medium text-white bg-zinc-800 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Booking Requests</a>
</div>
</nav>

<div className="p-4 border-t border-zinc-800 bg-zinc-950" style={{}}>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer group">
<img alt="Profile" className="w-10 h-10 rounded-full border border-zinc-700" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Olivia Rhye</p>
<p className="text-xs text-zinc-400 truncate">olivia@localstalls.com</p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-zinc-100">
<div className="lg:p-10 bg-zinc-100 max-w-[1600px] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 space-y-8">

<div className="bg-white border-b border-zinc-200 -mt-8 -mx-8 lg:-mt-10 lg:-mx-10 shadow-sm">

<div className="flex flex-col md:flex-row md:items-center pt-6 pr-6 pb-6 pl-10 gap-x-4 gap-y-4 justify-between">
<div className="flex items-center gap-3">
<h1 className="text-xl font-medium tracking-tight text-zinc-900">Booking Requests</h1>
<div className="relative group">
<button aria-label="Show info" className="flex items-center justify-center text-zinc-400 hover:text-zinc-600 transition-colors focus:outline-none focus:text-[#007a38]">
<svg className="lucide lucide-info w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
<div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-[240px] px-3 py-2 bg-zinc-800 text-white text-xs font-medium rounded-lg shadow-xl opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 pointer-events-none">
                        Review and manage pending stall applications.
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></div>
</div>
</div>
<div className="w-px h-4 bg-zinc-300 mx-1"></div>
<button className="text-sm font-medium text-[#007a38] hover:text-[#00632d] transition-colors">Help</button>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="pl-9 pr-4 py-2 w-64 text-sm bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all shadow-sm placeholder:text-zinc-400" placeholder="Filter requests..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm">
<svg className="lucide lucide-download w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line className="" x1="12" x2="12" y1="15" y2="3"></line></svg>
    Export
</button>
<button className="p-2 text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line className="" x1="21" x2="16" y1="20" y2="20"></line><line className="" x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line className="" x1="16" x2="16" y1="18" y2="22"></line></svg>
</button>
</div>
</div>

<div className="bg-[#ffffff] border-zinc-200 border-t pt-4 pr-6 pb-4 pl-10">
<div className="flex flex-wrap gap-x-3 gap-y-3 items-center">
<button className="flex items-center justify-between gap-2 px-3 py-1.5 w-72 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 shadow-sm transition-colors group">
<div className="flex items-center gap-2">
<svg className="lucide lucide-ticket w-4 h-4 text-zinc-500 group-hover:text-zinc-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                        Event
                    </div>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 shadow-sm transition-colors group">
<svg className="lucide lucide-calendar w-4 h-4 text-zinc-500 group-hover:text-zinc-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path className="" d="M3 10h18"></path></svg>
                    Event Date
                    <svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 shadow-sm transition-colors group">
<svg className="lucide lucide-tag w-4 h-4 text-zinc-500 group-hover:text-zinc-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                    Category
                    <svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 shadow-sm transition-colors group">
<svg className="lucide lucide-thumbs-up w-4 h-4 text-zinc-500 group-hover:text-zinc-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                    Shortlisted
                    <svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="h-6 w-px bg-zinc-300/50 mx-1"></div>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors flex items-center gap-1.5 px-2">
<svg className="lucide lucide-x w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                    Clear filters
                </button>
</div>
</div>

<div className="bg-white border-zinc-200 border-t pr-6 pl-10">
<div className="flex -mb-px gap-x-8 gap-y-8">
<button className="py-3 text-sm font-medium text-[#007a38] border-b-2 border-[#007a38]">All Requests</button>
<button className="py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 border-b-2 border-transparent transition-colors">New Vendors</button>
<button className="py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 border-b-2 border-transparent transition-colors">Existing Vendors</button>
</div>
</div>
</div>

<div className="overflow-hidden bg-white border-zinc-200 border rounded-xl mx-0 px-0 shadow-sm">

<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="">
<tr className="border-b border-zinc-200 bg-white">
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Vendor</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Event</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Category</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Type</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Event Dates</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="hover:bg-zinc-50/60 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-900">Eli's Kitchen</span>
<span className="px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium bg-[#ebfdf4] text-[#007a38] border border-[#dcfce7]/50">NEW</span>
</div>
<div className="text-sm text-zinc-500 mt-0.5">Eli Johnson</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-zinc-700">Kallangur Twilight Markets</td>
<td className="px-6 py-4 text-sm text-zinc-600">Food Truck</td>
<td className="px-6 py-4 text-sm text-zinc-600">Stall</td>
<td className="px-6 py-4 text-sm text-zinc-600">09 May 2026</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 text-zinc-500 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-zinc-800 hover:bg-zinc-50 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200" title="View"><svg className="lucide lucide-eye w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
<button className="p-2 text-[#007a38] bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-[#007a38] hover:bg-[#ebfdf4] hover:border-[#007a38]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#007a38]/20" title="Approve"><svg className="lucide lucide-thumbs-up w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg></button>
<button className="p-2 text-red-600 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-red-700 hover:bg-red-50 hover:border-red-200 transition-all focus:outline-none focus:ring-2 focus:ring-red-200" title="Reject"><svg className="lucide lucide-trash-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50/60 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-900">Big Sin Poutine</span>
<span className="px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium bg-[#ebfdf4] text-[#007a38] border border-[#dcfce7]/50">NEW</span>
</div>
<div className="text-sm text-zinc-500 mt-0.5">Sarah Smith</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-zinc-700">Moreton Bay Christmas</td>
<td className="px-6 py-4 text-sm text-zinc-600">General Stall</td>
<td className="px-6 py-4 text-sm text-zinc-600">Stall &amp; Extras</td>
<td className="px-6 py-4 text-sm text-zinc-600">07 Mar 2026, 08 Mar 2026</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 text-zinc-500 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-zinc-800 hover:bg-zinc-50 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200" title="View"><svg className="lucide lucide-eye w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
<button className="p-2 text-[#007a38] bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-[#007a38] hover:bg-[#ebfdf4] hover:border-[#007a38]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#007a38]/20" title="Approve"><svg className="lucide lucide-thumbs-up w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg></button>
<button className="p-2 text-red-600 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-red-700 hover:bg-red-50 hover:border-red-200 transition-all focus:outline-none focus:ring-2 focus:ring-red-200" title="Reject"><svg className="lucide lucide-trash-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50/60 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-900">Flavours of Eataly</span>
</div>
<div className="text-sm text-zinc-500 mt-0.5">Mario Rossi</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-zinc-700">Moreton Bay Christmas</td>
<td className="px-6 py-4 text-sm text-zinc-600">Food Truck</td>
<td className="px-6 py-4 text-sm text-zinc-600">Stall</td>
<td className="px-6 py-4 text-sm text-zinc-600">11 Dec 2026, 12 Dec 2026, + 2 more</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 text-zinc-500 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-zinc-800 hover:bg-zinc-50 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200" title="View"><svg className="lucide lucide-eye w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
<button className="p-2 text-[#007a38] bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-[#007a38] hover:bg-[#ebfdf4] hover:border-[#007a38]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#007a38]/20" title="Approve"><svg className="lucide lucide-thumbs-up w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path className="" d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg></button>
<button className="p-2 text-red-600 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-red-700 hover:bg-red-50 hover:border-red-200 transition-all focus:outline-none focus:ring-2 focus:ring-red-200" title="Reject"><svg className="lucide lucide-trash-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50/60 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-900">CHEF 365</span>
<span className="px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium bg-[#ebfdf4] text-[#007a38] border border-[#dcfce7]/50">NEW</span>
</div>
<div className="text-sm text-zinc-500 mt-0.5">John Chef</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-zinc-700">Kallangur Twilight Markets</td>
<td className="px-6 py-4 text-sm text-zinc-600">Stall</td>
<td className="px-6 py-4 text-sm text-zinc-600">Extras</td>
<td className="px-6 py-4 text-sm text-zinc-600">07 Mar 2026</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 text-zinc-500 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-zinc-800 hover:bg-zinc-50 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200" title="View"><svg className="lucide lucide-eye w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
<button className="p-2 text-[#007a38] bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-[#007a38] hover:bg-[#ebfdf4] hover:border-[#007a38]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#007a38]/20" title="Approve"><svg className="lucide lucide-thumbs-up w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 10v12"></path><path className="" d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg></button>
<button className="p-2 text-red-600 bg-white border border-zinc-200 rounded-lg shadow-sm hover:text-red-700 hover:bg-red-50 hover:border-red-200 transition-all focus:outline-none focus:ring-2 focus:ring-red-200" title="Reject"><svg className="lucide lucide-trash-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-zinc-200 flex items-center justify-between">
<p className="text-sm text-zinc-500">Showing <span className="font-medium text-zinc-900">1</span> to <span className="font-medium text-zinc-900">4</span> of <span className="font-medium text-zinc-900">42</span> results</p>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-sm font-medium text-zinc-600 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 shadow-sm transition-colors disabled:opacity-50">Previous</button>
<button className="px-3 py-1.5 text-sm font-medium text-zinc-600 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 shadow-sm transition-colors">Next</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
