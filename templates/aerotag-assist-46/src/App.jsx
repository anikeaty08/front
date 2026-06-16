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
      

<div className="min-h-screen w-full">

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99] transition" id="btnSidebar">
<svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-[11px] tracking-[-0.02em] font-semibold">AT</div>
<div className="text-[15px] sm:text-[16px] font-medium tracking-[-0.01em]">AeroTag Assist</div>
</a>

<nav className="hidden lg:flex items-center gap-1 ml-4">
<a className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200" href="#">Dashboard</a>

<div className="relative group">
<button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm text-slate-900 bg-slate-50 border border-slate-200 hover:bg-slate-100" id="topStaffBtn">
<svg className="w-4.5 h-4.5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span>Staff</span>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto absolute left-0 mt-2 w-60 bg-white border border-slate-200 rounded-lg shadow-lg p-1">
<button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50" data-section="staffing">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white">
<svg className="w-[18px] h-[18px] text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight">Staffing</div>
<div className="text-[12px] text-slate-500">Assign staff to departments with auto-assignment</div>
</div>
</button>
<button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50" data-section="analytics">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white">
<svg className="w-[18px] h-[18px] text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M13 17V9"></path>
<path d="M18 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight">Performance Analytics</div>
<div className="text-[12px] text-slate-500">Trends, KPIs, and leaderboards</div>
</div>
</button>
</div>
</div>
<a className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200" href="#">Orders</a>
<a className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200" href="#">Departments</a>
</nav>
</div>

<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2">
<div className="relative">
<svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="pl-9 pr-3 py-2 w-64 rounded-md border border-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-300 text-sm placeholder:text-slate-400" placeholder="Search staff, tasks..." type="text"/>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-sm">
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
<path d="M3 9h18"></path>
</svg>
<span>Filters</span>
</button>
</div>
<button className="relative h-10 w-10 rounded-md border border-slate-200 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center">
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
<span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-blue-600 text-white text-[11px] flex items-center justify-center leading-none border border-white">3</span>
</button>
<div className="h-10 w-[1px] bg-slate-200 mx-1"></div>
<button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 hover:border-slate-300">
<img alt="avatar" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<div className="text-[13px] font-medium tracking-tight">Alex Morgan</div>
<div className="text-[11px] text-slate-500 -mt-0.5">Admin</div>
</div>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</header>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 py-6">

<aside className="lg:sticky lg:top-[68px] lg:self-start bg-white border border-slate-200 rounded-xl p-3 lg:p-4 shadow-sm hidden lg:block" id="sidebar">
<div className="text-[12px] uppercase tracking-[0.08em] text-slate-500 px-2 mb-2">Navigation</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200" href="#">
<svg className="w-[18px] h-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7"></path><path d="M9 22V12h6v10"></path></svg>
              Dashboard
            </a>
<div className="px-2 py-2 rounded-lg border border-slate-200 bg-slate-50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-sm font-medium tracking-tight">
<svg className="w-[18px] h-[18px] text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                  Staff
                </div>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="mt-2 pl-[30px] flex flex-col gap-1">
<button className="text-left px-2 py-1.5 rounded-md text-sm text-slate-900 bg-white border border-slate-200 hover:bg-slate-50" data-section="staffing">Staffing</button>
<button className="text-left px-2 py-1.5 rounded-md text-sm text-slate-700 hover:bg-white hover:border-slate-200 hover:bg-slate-50 border border-transparent" data-section="analytics">Performance Analytics</button>
</div>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200" href="#">
<svg className="w-[18px] h-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M3 12h18"></path><path d="M3 17h18"></path></svg>
              Orders
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200" href="#">
<svg className="w-[18px] h-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7h18"></path></svg>
              Departments
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200" href="#">
<svg className="w-[18px] h-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 2.7l.06.06c.48.48 1.16.66 1.82.33.55-.27 1-.78 1-1.39V1a2 2 0 1 1 4 0v.09c0 .61.45 1.12 1 1.39.66.33 1.34.15 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.48.48-.66 1.16-.33 1.82.27.55.78 1 1.39 1H21a2 2 0 1 1 0 4h-.09c-.61 0-1.12.45-1.39 1z"></path></svg>
              Settings
            </a>
</nav>
<div className="mt-6">
<div className="text-[12px] uppercase tracking-[0.08em] text-slate-500 px-2 mb-2">Automation</div>
<div className="p-3 rounded-lg border border-slate-200">
<div className="flex items-center justify-between">
<div>
<div className="text-[13px] font-medium tracking-tight">Auto-assign tasks</div>
<div className="text-[12px] text-slate-500">Dispatch based on staff availability</div>
</div>

<button className="h-6 w-11 rounded-full border border-slate-200 bg-slate-200 relative transition hover:ring-4 hover:ring-slate-100" id="toggleAutoAssign">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow border border-slate-200 transition"></span>
</button>
</div>
<div className="mt-3 flex items-center gap-2 text-[12px] text-slate-600">
<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                Round-robin with fairness window
              </div>
</div>
</div>
</aside>

<main className="min-w-0">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-4">
<div>
<h1 className="text-[22px] sm:text-[26px] md:text-[28px] font-semibold tracking-tight">Staff Management</h1>
<p className="text-[13px] text-slate-600 mt-1">Assign staff to departments such as room service and housekeeping. Tasks are auto-assigned based on live availability when guests place orders.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50" id="btnDeptFilter">
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18"></path><path d="M7 10h10"></path><path d="M10 15h4"></path></svg>
                  Departments
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="hidden absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg p-2" id="deptDropdown">
<div className="px-2 py-1.5 text-[12px] uppercase tracking-[0.08em] text-slate-500">Filter by department</div>
<div className="space-y-1.5">

<label className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-slate-50">
<span className="relative inline-flex items-center justify-center h-4.5 w-4.5 rounded border border-slate-300 bg-white">
<input className="peer sr-only" data-dept="Room Service" type="checkbox"/>
<svg className="absolute opacity-0 peer-checked:opacity-100 text-blue-600 transition" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
<span className="text-sm text-slate-700">Room Service</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-slate-50">
<span className="relative inline-flex items-center justify-center h-4.5 w-4.5 rounded border border-slate-300 bg-white">
<input className="peer sr-only" data-dept="Housekeeping" type="checkbox"/>
<svg className="absolute opacity-0 peer-checked:opacity-100 text-blue-600 transition" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
<span className="text-sm text-slate-700">Housekeeping</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-slate-50">
<span className="relative inline-flex items-center justify-center h-4.5 w-4.5 rounded border border-slate-300 bg-white">
<input className="peer sr-only" data-dept="Concierge" type="checkbox"/>
<svg className="absolute opacity-0 peer-checked:opacity-100 text-blue-600 transition" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
<span className="text-sm text-slate-700">Concierge</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-slate-50">
<span className="relative inline-flex items-center justify-center h-4.5 w-4.5 rounded border border-slate-300 bg-white">
<input className="peer sr-only" data-dept="Maintenance" type="checkbox"/>
<svg className="absolute opacity-0 peer-checked:opacity-100 text-blue-600 transition" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
<span className="text-sm text-slate-700">Maintenance</span>
</label>
</div>
<div className="mt-2 flex items-center justify-between px-2">
<button className="text-[12px] px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-50" id="deptClear">Clear</button>
<button className="text-[12px] px-2 py-1 rounded-md bg-slate-900 text-white hover:opacity-90" id="deptApply">Apply</button>
</div>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50" id="btnShiftFilter">
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V3"></path><path d="m16 12 5-1"></path><path d="m3 11 5 1"></path><path d="M12 21v-5"></path></svg>
                  Shift: All
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg p-1" id="shiftDropdown">
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm" data-shift="All">All</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm" data-shift="Morning">Morning</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm" data-shift="Evening">Evening</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm" data-shift="Night">Night</button>
</div>
</div>
<div className="h-6 w-[1px] bg-slate-200"></div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:opacity-90 active:scale-[0.99]" id="btnAddStaff">
<svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                Add Staff
              </button>
</div>
</div>

<section className="space-y-6" id="section-staffing">

<div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4.5 h-4.5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>
<div className="text-[14px] font-medium tracking-tight">Auto-assignment policy</div>
</div>
<div className="flex items-center gap-2">
<div className="text-[12px] text-slate-600">Mode</div>
<div className="inline-flex p-1 rounded-md border border-slate-200 bg-slate-50">
<button className="px-3 py-1.5 text-[12px] rounded bg-white border border-slate-200" data-policy="round">Round-robin</button>
<button className="px-3 py-1.5 text-[12px] rounded text-slate-700 hover:bg-white hover:border-slate-200 border border-transparent" data-policy="least">Least busy</button>
<button className="px-3 py-1.5 text-[12px] rounded text-slate-700 hover:bg-white hover:border-slate-200 border border-transparent" data-policy="skill">Skill-based</button>
</div>
</div>
</div>
<div className="p-4 sm:p-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-3 rounded-lg border border-slate-200">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium tracking-tight">Availability window</div>
<span className="text-[12px] text-slate-600">last 10 min</span>
</div>
<div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 rounded-full" style={{width: '68%'}}></div>
</div>
<p className="text-[12px] text-slate-600 mt-2">Staff are considered available if idle within the window.</p>
</div>
<div className="p-3 rounded-lg border border-slate-200">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium tracking-tight">Fairness</div>
<span className="text-[12px] text-slate-600">balanced</span>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-600 rounded-full" style={{width: '50%'}}></div></div>
<span className="text-[12px] text-slate-600 w-10 text-right">50%</span>
</div>
<p className="text-[12px] text-slate-600 mt-2">Distributes orders to avoid overloading the same staff.</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4.5 h-4.5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7h18"></path></svg>
<div className="text-[14px] font-medium tracking-tight">Departments</div>
</div>
<button className="text-[12px] px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-50">Manage</button>
</div>
<div className="p-4 space-y-3">

<div className="flex items-center justify-between p-2 rounded-md border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-slate-200 bg-white flex items-center justify-center">
<svg className="w-[18px] h-[18px] text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v4H3z"></path><path d="M5 7v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"></path></svg>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight">Room Service</div>
<div className="text-[12px] text-slate-600">6 staff • 2 on task • SLA 12m</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 rounded-full" style={{width: '62%'}}></div></div>
<span className="text-[12px] text-slate-700">62% load</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-md border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-slate-200 bg-white flex items-center justify-center">
<svg className="w-[18px] h-[18px] text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.5-2.5 6-2.5 8.5 0"></path><path d="M12 12c-2.5-2.5-6-2.5-8.5 0"></path><path d="M12 12v8"></path></svg>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight">Housekeeping</div>
<div className="text-[12px] text-slate-600">8 staff • 3 on task • SLA 18m</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-600 rounded-full" style={{width: '48%'}}></div></div>
<span className="text-[12px] text-slate-700">48% load</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-md border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-slate-200 bg-white flex items-center justify-center">
<svg className="w-[18px] h-[18px] text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 8-4 8 4"></path><path d="M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"></path></svg>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight">Concierge</div>
<div className="text-[12px] text-slate-600">4 staff • 1 on task • SLA 8m</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full" style={{width: '33%'}}></div></div>
<span className="text-[12px] text-slate-700">33% load</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4.5 h-4.5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className="text-[14px] font-medium tracking-tight">Staffing</div>
</div>
<div className="text-[12px] text-slate-600">24 total staff • 6 available</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Staff</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Department</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Status</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Current Task</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Load</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Skills</th>
<th className="text-right px-4 py-2.5 font-medium text-slate-700">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">

<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="staff" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[13px] font-medium tracking-tight">Jamie Reynolds</div>
<div className="text-[12px] text-slate-500">Room Service</div>
</div>
</div>
</td>
<td className="px-4 py-3">

<div className="relative inline-block">
<button className="dept-select inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">
<span className="text-[12px]">Room Service</span>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dept-menu hidden absolute z-10 mt-1 w-44 bg-white border border-slate-200 rounded-md shadow-lg p-1">
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Room Service</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Housekeeping</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Concierge</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Maintenance</button>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<span className="text-[12px] text-slate-700">Available</span>
</div>
</td>
<td className="px-4 py-3">
<div className="text-[12px] text-slate-700">—</div>
</td>
<td className="px-4 py-3">
<div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-600 rounded-full" style={{width: '18%'}}></div></div>
</td>
<td className="px-4 py-3">
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded border border-slate-200 text-[11px]">Food Safety</span>
<span className="px-2 py-0.5 rounded border border-slate-200 text-[11px]">Beverage</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-[12px]">Assign now</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="staff" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[13px] font-medium tracking-tight">Priya Shah</div>
<div className="text-[12px] text-slate-500">Housekeeping</div>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="relative inline-block">
<button className="dept-select inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">
<span className="text-[12px]">Housekeeping</span>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dept-menu hidden absolute z-10 mt-1 w-44 bg-white border border-slate-200 rounded-md shadow-lg p-1">
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Room Service</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Housekeeping</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Concierge</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Maintenance</button>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-2.5 w-2.5 rounded-full bg-amber-500"></span>
<span className="text-[12px] text-slate-700">On task</span>
</div>
</td>
<td className="px-4 py-3">
<div className="text-[12px] text-slate-700">Room 1202 — Turnover</div>
</td>
<td className="px-4 py-3">
<div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full" style={{width: '54%'}}></div></div>
</td>
<td className="px-4 py-3">
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded border border-slate-200 text-[11px]">Sanitation</span>
<span className="px-2 py-0.5 rounded border border-slate-200 text-[11px]">Laundry</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-[12px]">Reassign</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="staff" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[13px] font-medium tracking-tight">Liam Chen</div>
<div className="text-[12px] text-slate-500">Concierge</div>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="relative inline-block">
<button className="dept-select inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">
<span className="text-[12px]">Concierge</span>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dept-menu hidden absolute z-10 mt-1 w-44 bg-white border border-slate-200 rounded-md shadow-lg p-1">
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Room Service</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Housekeeping</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Concierge</button>
<button className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-50 text-[13px]">Maintenance</button>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-2.5 w-2.5 rounded-full bg-rose-500"></span>
<span className="text-[12px] text-slate-700">Busy</span>
</div>
</td>
<td className="px-4 py-3">
<div className="text-[12px] text-slate-700">VIP pickup — 10:45</div>
</td>
<td className="px-4 py-3">
<div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-rose-500 rounded-full" style={{width: '88%'}}></div></div>
</td>
<td className="px-4 py-3">
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded border border-slate-200 text-[11px]">Transport</span>
<span className="px-2 py-0.5 rounded border border-slate-200 text-[11px]">Guest Care</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-[12px]">Queue task</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
<div className="text-[12px] text-slate-600">Showing 1–3 of 24</div>
<div className="flex items-center gap-2">
<button className="h-8 w-8 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center justify-center">
<svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="text-[12px]">1/8</div>
<button className="h-8 w-8 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center justify-center">
<svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4.5 h-4.5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9 6 9-6"></path><path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"></path></svg>
<div className="text-[14px] font-medium tracking-tight">Incoming Orders</div>
</div>
<button className="text-[12px] px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-50">Simulate</button>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between p-2 rounded-md border border-slate-200">
<div>
<div className="text-[13px] font-medium tracking-tight">Room 804 — Extra Towels</div>
<div className="text-[12px] text-slate-600">Housekeeping • 2 min ago</div>
</div>
<span className="text-[12px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Assigned: Priya</span>
</div>
<div className="flex items-center justify-between p-2 rounded-md border border-slate-200">
<div>
<div className="text-[13px] font-medium tracking-tight">Room 1202 — Omelette</div>
<div className="text-[12px] text-slate-600">Room Service • just now</div>
</div>
<span className="text-[12px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Searching...</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4.5 h-4.5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>
<div className="text-[14px] font-medium tracking-tight">SLA Monitors</div>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-4">
<div className="p-3 rounded-lg border border-slate-200">
<div className="text-[12px] text-slate-600">Room Service</div>
<div className="mt-1 text-[20px] font-semibold tracking-tight">11m</div>
<div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600" style={{width: '55%'}}></div></div>
</div>
<div className="p-3 rounded-lg border border-slate-200">
<div className="text-[12px] text-slate-600">Housekeeping</div>
<div className="mt-1 text-[20px] font-semibold tracking-tight">18m</div>
<div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-500" style={{width: '72%'}}></div></div>
</div>
<div className="p-3 rounded-lg border border-slate-200">
<div className="text-[12px] text-slate-600">Concierge</div>
<div className="mt-1 text-[20px] font-semibold tracking-tight">8m</div>
<div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-600" style={{width: '40%'}}></div></div>
</div>
<div className="p-3 rounded-lg border border-slate-200">
<div className="text-[12px] text-slate-600">Maintenance</div>
<div className="mt-1 text-[20px] font-semibold tracking-tight">22m</div>
<div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-rose-500" style={{width: '84%'}}></div></div>
</div>
</div>
</div>
</div>
</section>
<section className="hidden space-y-6" id="section-analytics">

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">Performance Analytics</div>
<div className="flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50" id="btnDateRange">
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
                      Last 7 days
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg p-1" id="dateDropdown">
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Today</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Last 7 days</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Last 30 days</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Quarter to date</button>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50" id="btnDeptAnalytics">
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7h18"></path></svg>
                      All departments
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg p-1" id="deptAnalyticsDropdown">
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">All</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Room Service</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Housekeeping</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Concierge</button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-sm">Maintenance</button>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 hover:bg-slate-50">
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14 2-2 2 4 4 2-2z"></path><path d="M7.5 10.5 3 21l10.5-4.5L21 7.5 16.5 3z"></path></svg>
                    Export
                  </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-1">
<div className="p-4 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-600">Tasks Completed</div>
<svg className="w-4.5 h-4.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l6 6L21 6"></path></svg>
</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight">1,248</div>
<div className="mt-3 h-12 relative">
<div className="absolute inset-0 flex items-end gap-1.5">
<div className="h-[35%] w-full bg-emerald-100 rounded"></div>
<div className="h-[55%] w-full bg-emerald-200 rounded"></div>
<div className="h-[45%] w-full bg-emerald-100 rounded"></div>
<div className="h-[70%] w-full bg-emerald-300 rounded"></div>
<div className="h-[60%] w-full bg-emerald-200 rounded"></div>
<div className="h-[85%] w-full bg-emerald-400 rounded"></div>
<div className="h-[80%] w-full bg-emerald-300 rounded"></div>
</div>
</div>
<div className="mt-2 text-[12px] text-emerald-700">+18% WoW</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-600">Avg Response Time</div>
<svg className="w-4.5 h-4.5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V3"></path><path d="m16 12 5-1"></path><path d="m3 11 5 1"></path><path d="M12 21v-5"></path></svg>
</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight">12m 14s</div>
<div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-500" style={{width: '52%'}}></div></div>
<div className="mt-2 text-[12px] text-amber-700">-6% WoW</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-600">CSAT</div>
<svg className="w-4.5 h-4.5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight">4.6/5</div>
<div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-yellow-500" style={{width: '92%'}}></div></div>
<div className="mt-2 text-[12px] text-yellow-700">Top 10% percentile</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-600">Utilization</div>
<svg className="w-4.5 h-4.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight">67%</div>
<div className="mt-3 h-12 grid grid-cols-6 gap-1.5">
<div className="bg-blue-100 rounded"></div>
<div className="bg-blue-300 rounded"></div>
<div className="bg-blue-200 rounded"></div>
<div className="bg-blue-400 rounded"></div>
<div className="bg-blue-300 rounded"></div>
<div className="bg-blue-200 rounded"></div>
</div>
<div className="mt-2 text-[12px] text-blue-700">+3% WoW</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="col-span-2 bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">Tasks by Department</div>
<div className="text-[12px] text-slate-600">Last 7 days</div>
</div>
<div className="mt-4 h-56 relative">

<div className="absolute inset-x-0 bottom-8 left-4 right-4 flex items-end justify-between gap-4">
<div className="w-full bg-blue-200 rounded-t" style={{height: '40%'}}></div>
<div className="w-full bg-emerald-300 rounded-t" style={{height: '68%'}}></div>
<div className="w-full bg-amber-300 rounded-t" style={{height: '35%'}}></div>
<div className="w-full bg-rose-300 rounded-t" style={{height: '55%'}}></div>
</div>

<div className="absolute bottom-0 left-0 right-0 flex items-center justify-between text-[12px] text-slate-600 px-4">
<span>Room Service</span><span>Housekeeping</span><span>Concierge</span><span>Maintenance</span>
</div>
<div className="absolute top-0 bottom-8 left-0 right-0">
<div className="h-full w-full grid grid-rows-4">
<div className="border-t border-slate-100"></div>
<div className="border-t border-slate-100"></div>
<div className="border-t border-slate-100"></div>
<div className="border-t border-slate-100"></div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">Response Time Trend</div>
<div className="text-[12px] text-slate-600">Median</div>
</div>
<div className="mt-4 h-56 relative">

<div className="absolute inset-0">
<div className="h-full w-full grid grid-rows-4">
<div className="border-t border-slate-100"></div>
<div className="border-t border-slate-100"></div>
<div className="border-t border-slate-100"></div>
<div className="border-t border-slate-100"></div>
</div>
</div>
<div className="absolute inset-4">
<div className="h-full w-full relative">
<div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 to-transparent rounded-lg mask-[linear-gradient(to_bottom,black,transparent_85%)]"></div>
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 100 40">
<polyline fill="none" points="0,30 10,28 20,26 30,21 40,24 50,18 60,20 70,17 80,15 90,16 100,12" stroke="#2563eb" strokeWidth="1.5"></polyline>
</svg>
</div>
</div>
</div>
<div className="mt-3 text-[12px] text-slate-600">Down 6% vs last period</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4.5 h-4.5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>
<div className="text-[14px] font-medium tracking-tight">Top Performers</div>
</div>
<div className="text-[12px] text-slate-600">Completion rate • Response time • CSAT</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Staff</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Department</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Tasks</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">Avg Response</th>
<th className="text-left px-4 py-2.5 font-medium text-slate-700">CSAT</th>
<th className="text-right px-4 py-2.5 font-medium text-slate-700">Trend</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-[13px] font-medium tracking-tight">Ava Patel</div>
</div>
</td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">Room Service</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">182</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">9m 40s</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">4.9</span></td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center gap-1 text-emerald-600 text-[12px]">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                            12%
                          </div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-[13px] font-medium tracking-tight">Noah Garcia</div>
</div>
</td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">Housekeeping</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">163</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">12m 12s</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">4.7</span></td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center gap-1 text-amber-600 text-[12px]">
<svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                            4%
                          </div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-[13px] font-medium tracking-tight">Sophia Rossi</div>
</div>
</td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">Concierge</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">141</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">8m 58s</span></td>
<td className="px-4 py-3"><span className="text-[12px] text-slate-700">4.8</span></td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center gap-1 text-emerald-600 text-[12px]">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></div></td></tr></tbody></table></div></div></div></section></main></div></div></div>
    </>
  );
}
