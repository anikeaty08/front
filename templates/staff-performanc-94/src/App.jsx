import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Upgrade inline SVGs to lucide for crisp, consistent icons
    document.addEventListener('DOMContentLoaded', () => {
      const icons = [
        'top-search-icon',
        'top-bell-icon',
        'department-icon',
        'date-range-icon',
        'staff-search-icon',
        'filter-lines-icon',
        'clipboard-list-icon',
        'check-circle-icon',
        'badge-check-icon',
        'donut-chart-icon',
        'gauge-icon',
        'hourglass-icon',
        'arrow-right-left-icon',
        'repeat-icon',
        'users-icon'
      ];

      icons.forEach(id => {
        const el = document.getElementById(id);
        if (!el || typeof lucide === 'undefined') return;
        const nameMap = {
          'top-search-icon': 'search',
          'top-bell-icon': 'bell',
          'department-icon': 'building-2',
          'date-range-icon': 'calendar-range',
          'staff-search-icon': 'search',
          'filter-lines-icon': 'sliders-horizontal',
          'clipboard-list-icon': 'clipboard-list',
          'check-circle-icon': 'check-circle-2',
          'badge-check-icon': 'badge-check',
          'donut-chart-icon': 'donut',
          'gauge-icon': 'gauge',
          'hourglass-icon': 'hourglass',
          'arrow-right-left-icon': 'arrow-right-left',
          'repeat-icon': 'repeat-2',
          'users-icon': 'users'
        };
        const iconName = nameMap[id];
        if (!iconName || !lucide[iconName]) return;
        const parent = el.parentElement;
        lucide[iconName].replace(el, { strokeWidth: 1.5, absoluteStrokeWidth: true });
        if (parent && parent.classList.contains('lucide')) {
          parent.classList.remove('lucide', iconName);
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:flex-col lg:w-64 border-r border-slate-200 bg-white">
<div className="flex items-center h-16 px-6 border-b border-slate-200">
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-900">Admin Panel</span>
<span className="text-xs text-slate-500">Powered by AeroTag Assist</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 space-y-2 text-sm">
<div className="px-4 text-xs font-medium uppercase tracking-wide text-slate-500">Main</div>
<a className="mt-1 flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50" href="#">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200">
<span className="h-1 w-1 rounded-full bg-slate-400"></span>
</span>
<span className="text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50" href="#">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200">
<span className="h-1 w-3 rounded bg-slate-400"></span>
</span>
<span className="text-sm">Orders &amp; Bookings</span>
</a>
<div className="mt-2">
<div className="px-4 text-xs font-medium uppercase tracking-wide text-slate-500">Staff</div>
<button className="mt-1 w-full flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
<span className="flex items-center gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-blue-500 bg-blue-50">
<span className="h-3 w-3 rounded-full bg-blue-500"></span>
</span>
<span>Staff</span>
</span>
<svg className="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="mt-1 space-y-0.5">
<a className="block pl-14 pr-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 rounded-r-full" href="#">
              Staffing
            </a>
<a className="block pl-14 pr-4 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-r-full" href="#">
              Staff Performance
            </a>
</div>
</div>
<div className="mt-2">
<div className="px-4 text-xs font-medium uppercase tracking-wide text-slate-500">Tools</div>
<a className="mt-1 flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50" href="#">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200">
<span className="h-3 w-3 border border-slate-400 rounded-sm"></span>
</span>
<span className="text-sm">Assist Studio</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50" href="#">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200">
<span className="h-2 w-4 rounded bg-slate-400"></span>
</span>
<span className="text-sm">AeroTags</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50" href="#">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200">
<span className="h-3 w-3 rounded-full border-2 border-slate-400 border-dashed"></span>
</span>
<span className="text-sm">Settings</span>
</a>
</div>
</nav>
<div className="border-t border-slate-200 p-4">
<button className="w-full flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm font-medium tracking-tight">
              S
            </div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium tracking-tight text-slate-900">Seraphine Dunes</span>
<span className="text-xs text-slate-500">seraphinedunes@gmail.com</span>
</div>
</div>
<svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col">

<header className="h-16 flex items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
<div className="flex flex-1 items-center max-w-xl bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
<svg className="h-4 w-4 text-slate-400" fill="none" id="top-search-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<input className="ml-2 w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Search Orders, Employees etc." type="text"/>
</div>
<button className="ml-4 relative h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50">
<svg className="h-4 w-4 text-slate-600" fill="none" id="top-bell-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
<span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-blue-500 px-1 text-[0.6rem] font-medium text-white">
            8
          </span>
</button>
</header>

<section className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">

<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
<div>
<h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Staff Performance
            </h1>
<p className="mt-1 text-sm sm:text-base text-slate-500 max-w-xl">
              Monitor staff acceptance, completion efficiency, SLA compliance, and transfers with clarity.
            </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">

<div className="relative flex-1 sm:flex-none sm:w-48">
<button className="w-full inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm text-slate-700 hover:border-slate-300 focus:outline-none">
<span className="flex items-center gap-2">
<svg className="h-4 w-4 text-slate-400" fill="none" id="department-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 21v-7a2 2 0 0 1 2-2h3"></path>
<path d="M9 3h6v4H9z"></path>
<path d="M9 7h6l4 4h-5a2 2 0 0 0-2 2v8H7v-4"></path>
</svg>
<span className="truncate text-slate-500">Filter by Department</span>
</span>
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
</div>

<div className="relative flex-1 sm:flex-none sm:w-56">
<button className="w-full inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm text-slate-700 hover:border-slate-300 focus:outline-none">
<span className="flex items-center gap-2">
<svg className="h-4 w-4 text-slate-400" fill="none" id="date-range-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<span className="truncate text-slate-700">Last 7 Days</span>
</span>
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
</div>

<div className="flex-1 min-w-[12rem]">
<div className="flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5">
<svg className="h-4 w-4 text-slate-400" fill="none" id="staff-search-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<input className="ml-2 w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Search staff by name or phone" type="text"/>
<button className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
<svg className="h-3 w-3" fill="none" id="filter-lines-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<line x1="21" x2="14" y1="4" y2="4"></line>
<line x1="10" x2="3" y1="4" y2="4"></line>
<line x1="21" x2="12" y1="12" y2="12"></line>
<line x1="8" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="16" y1="20" y2="20"></line>
<line x1="12" x2="3" y1="20" y2="20"></line>
<circle cx="12" cy="4" r="1"></circle>
<circle cx="8" cy="12" r="1"></circle>
<circle cx="16" cy="20" r="1"></circle>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700 border border-blue-100">
<span>Department: Housekeeping</span>
<svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-600 border border-slate-200">
<span>Date: Last 7 Days</span>
<svg className="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>

<section className="mt-6 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Total Tasks Created</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">1,248</p>
</div>
<div className="h-8 w-8 rounded-full border border-blue-100 bg-blue-50 flex items-center justify-center text-blue-600">
<svg className="h-4 w-4" fill="none" id="clipboard-list-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M9 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"></path>
<line x1="9" x2="15" y1="10" y2="10"></line>
<line x1="9" x2="15" y1="14" y2="14"></line>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-400">Across all departments for the selected period.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Tasks Accepted</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">1,095</p>
</div>
<div className="h-8 w-8 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center text-emerald-600">
<svg className="h-4 w-4" fill="none" id="check-circle-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 11l3 3L22 4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-emerald-600">87.8% of created tasks accepted.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Tasks Completed</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">1,012</p>
</div>
<div className="h-8 w-8 rounded-full border border-sky-100 bg-sky-50 flex items-center justify-center text-sky-600">
<svg className="h-4 w-4" fill="none" id="badge-check-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2l2.09 2.26 3.11-.54.54 3.11L20 9l-2.26 2.09.54 3.11-3.11.54L12 18l-2.09-2.26-3.11.54-.54-3.11L4 9l2.26-2.09-.54-3.11 3.11.54z"></path>
<path d="M9 12l2 2 4-4"></path>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-400">92.4% completion of accepted tasks.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Completion Rate</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">81.1%</p>
</div>
<div className="h-8 w-8 rounded-full border border-indigo-100 bg-indigo-50 flex items-center justify-center text-indigo-600">
<svg className="h-4 w-4" fill="none" id="donut-chart-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a10 10 0 0 1 10 10"></path>
<path d="M12 12L2 12"></path>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-emerald-600">Up 4.3% vs previous period.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">SLA Compliance</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">93.2%</p>
</div>
<div className="h-8 w-8 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center text-emerald-600">
<svg className="h-4 w-4" fill="none" id="gauge-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 14l4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-400">Within defined response and completion SLAs.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Average Handling Time</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">18m 24s</p>
</div>
<div className="h-8 w-8 rounded-full border border-amber-100 bg-amber-50 flex items-center justify-center text-amber-600">
<svg className="h-4 w-4" fill="none" id="hourglass-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 22h14"></path>
<path d="M5 2h14"></path>
<path d="M6 2l.6 3a4 4 0 0 0 1.9 2.7L12 10l3.5-2.3A4 4 0 0 0 17.4 5L18 2"></path>
<path d="M6 22l.6-3a4 4 0 0 1 1.9-2.7L12 14l3.5 2.3a4 4 0 0 1 1.9 2.7l.6 3"></path>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-amber-600">Slightly above target of 15m.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Transfer Requested</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">84</p>
</div>
<div className="h-8 w-8 rounded-full border border-violet-100 bg-violet-50 flex items-center justify-center text-violet-600">
<svg className="h-4 w-4" fill="none" id="arrow-right-left-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 7h13"></path>
<path d="M10 3l6 4-6 4"></path>
<path d="M21 17H8"></path>
<path d="M14 21l-6-4 6-4"></path>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-400">Tasks moved to a different staff member.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Transfer Received</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">79</p>
</div>
<div className="h-8 w-8 rounded-full border border-fuchsia-100 bg-fuchsia-50 flex items-center justify-center text-fuchsia-600">
<svg className="h-4 w-4" fill="none" id="repeat-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="17 1 21 5 17 9"></polyline>
<path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
<polyline points="7 23 3 19 7 15"></polyline>
<path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-400">Tasks taken over from others.</p>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm/5 hover:shadow-sm hover:border-slate-300 transition-all">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-500">Active Staff</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">64</p>
</div>
<div className="h-8 w-8 rounded-full border border-teal-100 bg-teal-50 flex items-center justify-center text-teal-600">
<svg className="h-4 w-4" fill="none" id="users-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="8.5" cy="7" r="4"></circle>
<path d="M20 8v6"></path>
<path d="M23 11h-6"></path>
</svg>
</div>
</div>
<p className="mt-2 text-xs sm:text-sm text-teal-600">Logged in and handling tasks now.</p>
</article>
</section>

<section className="mt-8">
<div className="flex items-center justify-between mb-3">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Staff Performance Overview</h2>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
<span className="hidden sm:inline">Sorted by</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 hover:border-slate-300">
<span>Completion Rate</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
<div className="max-h-[32rem] overflow-auto">
<table className="min-w-full text-sm">
<thead className="sticky top-0 z-10 bg-slate-50">
<tr className="border-b border-slate-200">

<th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Name</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Department</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Tasks Accepted</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Tasks Completed</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 155 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Completion Rate</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>SLA Compliance</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Avg Response Time</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Avg Completion Time</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Late Tasks</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Transfer Requested</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Transfer Received</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
<th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-600" scope="col">
<button className="inline-flex items-center gap-1 hover:text-slate-900">
<span>Status</span>
<svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 15l5 5 5-5"></path>
<path d="M7 9l5-5 5 5"></path>
</svg>
</button>
</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-xs font-medium text-sky-700">
                          JD
                        </div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">John Doe</div>
<div className="text-xs text-slate-500">+971 501234567</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">Room Service</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">142</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">136</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-emerald-600">95.8%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-emerald-600">98.2%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">3m 12s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">14m 05s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">2</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">4</td>
<td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">3</td>
<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-xs font-medium text-emerald-700">
                        Available
                      </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center text-xs font-medium text-rose-700">
                          SA
                        </div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Sara Ali</div>
<div className="text-xs text-slate-500">+971 501234568</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">Housekeeping</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">128</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">114</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-amber-600">89.1%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-emerald-600">94.4%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">4m 01s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">19m 42s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">6</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">9</td>
<td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">8</td>
<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-0.5 text-xs font-medium text-amber-700">
                        Busy
                      </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-700">
                          AK
                        </div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Aamir Khan</div>
<div className="text-xs text-slate-500">+971 501234569</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">Transport</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">94</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">71</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-rose-600">75.5%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-amber-600">86.3%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">5m 18s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">27m 09s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">11</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">3</td>
<td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">5</td>
<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-0.5 text-xs font-medium text-slate-600">
                        Offline
                      </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-medium text-emerald-700">
                          RL
                        </div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Riya Lal</div>
<div className="text-xs text-slate-500">+971 501234570</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">Concierge</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">110</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">104</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-emerald-600">94.5%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-emerald-600">97.1%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">2m 54s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">13m 38s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">1</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">2</td>
<td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">2</td>
<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-xs font-medium text-emerald-700">
                        Available
                      </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="whitespace-nowrap px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-700">
                          KM
                        </div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Kumar Mehta</div>
<div className="text-xs text-slate-500">+971 501234571</div>
</div>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">Engineering</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">76</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">59</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-rose-600">77.6%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-amber-600">88.9%</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">6m 07s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">31m 16s</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">9</td>
<td className="whitespace-nowrap px-3 py-3 text-sm text-slate-700">7</td>
<td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">6</td>
<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-0.5 text-xs font-medium text-amber-700">
                        Busy
                      </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 text-xs text-slate-500">
<div>Showing 5 of 64 staff</div>
<div className="flex items-center gap-1">
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-2 py-1 hover:bg-slate-50">
<svg className="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
</button>
<span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">1</span>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-2 py-1 hover:bg-slate-50">
<svg className="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</button>
</div>
</div>
</div>
</section>
</section>
</main>
</div>


    </>
  );
}
