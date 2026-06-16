import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({
        attrs: { "stroke-width": 1.5 }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 text-white flex items-center justify-center text-[13px] font-semibold tracking-tight select-none">EH</div>
<div className="hidden sm:flex flex-col">
<h1 className="text-[20px] sm:text-[22px] tracking-tight font-semibold leading-tight">Shifting Dashboard</h1>
<p className="text-sm text-neutral-500">Operations overview and scheduling</p>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-72 h-10 pl-10 pr-3 rounded-md bg-white border border-neutral-200 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300" placeholder="Search projects, clients, crew…" type="text"/>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10">
<i className="h-4 w-4" data-lucide="filter"></i>
              Filters
              <i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-md bg-neutral-900 text-white text-[14px] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20">
<i className="h-4 w-4" data-lucide="plus"></i>
              New Project
            </button>
</div>
<div className="h-9 w-[1px] bg-neutral-200"></div>
<button className="relative h-9 w-9 rounded-full overflow-hidden ring-1 ring-neutral-200 hover:ring-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10">
<img alt="Admin" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
<div className="flex items-start justify-between">
<div>
<p className="text-[12px] uppercase tracking-wide text-neutral-500">Revenue (MTD)</p>
<h2 className="text-[26px] tracking-tight font-semibold mt-1">$124,560</h2>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-600 text-[13px]">
<i className="h-3.5 w-3.5" data-lucide="trending-up"></i>
                8.4%
              </span>
<span className="text-[13px] text-neutral-500">vs last month</span>
</div>
</div>
<div className="h-10 w-10 rounded-md bg-neutral-50 border border-neutral-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="dollar-sign"></i>
</div>
</div>
<div className="mt-4 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900" style={{width: '62%'}}></div>
</div>
<div className="mt-2 text-[12px] text-neutral-500">62% of monthly target</div>
</div>

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
<div className="flex items-start justify-between">
<div>
<p className="text-[12px] uppercase tracking-wide text-neutral-500">Expenses (MTD)</p>
<h2 className="text-[26px] tracking-tight font-semibold mt-1">$79,240</h2>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-rose-600 text-[13px]">
<i className="h-3.5 w-3.5" data-lucide="trending-up"></i>
                3.2%
              </span>
<span className="text-[13px] text-neutral-500">vs last month</span>
</div>
</div>
<div className="h-10 w-10 rounded-md bg-neutral-50 border border-neutral-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="receipt"></i>
</div>
</div>
<div className="mt-4 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-300" style={{width: '48%'}}></div>
</div>
<div className="mt-2 text-[12px] text-neutral-500">48% of monthly budget</div>
</div>

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
<div className="flex items-start justify-between">
<div>
<p className="text-[12px] uppercase tracking-wide text-neutral-500">Gross Margin</p>
<h2 className="text-[26px] tracking-tight font-semibold mt-1">36.4%</h2>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-600 text-[13px]">
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i>
                On track
              </span>
<span className="text-[13px] text-neutral-500">Target 35%</span>
</div>
</div>
<div className="h-10 w-10 rounded-md bg-neutral-50 border border-neutral-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="bar-chart-3"></i>
</div>
</div>
<div className="mt-4 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500" style={{width: '36%'}}></div>
</div>
<div className="mt-2 text-[12px] text-neutral-500">Monthly rolling average</div>
</div>

<div className="rounded-xl bg-white border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
<div className="flex items-start justify-between">
<div>
<p className="text-[12px] uppercase tracking-wide text-neutral-500">Upcoming Moves (7d)</p>
<h2 className="text-[26px] tracking-tight font-semibold mt-1">27</h2>
<div className="mt-3 flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-[13px] text-neutral-600">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span> On schedule
                <span className="text-neutral-900 font-medium">18</span>
</span>
<span className="inline-flex items-center gap-1 text-[13px] text-neutral-600">
<span className="h-2 w-2 rounded-full bg-amber-500"></span> At risk
                <span className="text-neutral-900 font-medium">7</span>
</span>
<span className="inline-flex items-center gap-1 text-[13px] text-neutral-600">
<span className="h-2 w-2 rounded-full bg-rose-500"></span> Delayed
                <span className="text-neutral-900 font-medium">2</span>
</span>
</div>
</div>
<div className="h-10 w-10 rounded-md bg-neutral-50 border border-neutral-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="truck"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<div className="flex-1 h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full bg-emerald-500" style={{width: '66%'}}></div>
</div>
<div className="flex-1 h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full bg-amber-500" style={{width: '26%'}}></div>
</div>
<div className="flex-1 h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full bg-rose-500" style={{width: '8%'}}></div>
</div>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 space-y-6">

<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<div className="px-5 py-4 flex items-center justify-between border-b border-neutral-200">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-700" data-lucide="clipboard-list"></i>
<h3 className="text-[18px] tracking-tight font-semibold">Active Projects</h3>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10">Export</button>
<button className="h-9 px-3 rounded-md bg-neutral-900 text-white text-[14px] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20">Add</button>
</div>
</div>
<div className="divide-y divide-neutral-200">

<div className="px-5 py-4 flex items-center gap-4 hover:bg-neutral-50">
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="truncate font-medium">3BHK — Sharma Residence</p>
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[12px] border border-emerald-200 text-emerald-700 bg-emerald-50">On schedule</span>
</div>
<div className="text-[13px] text-neutral-500 mt-1 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i> Oct 21, 9:00
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> South Delhi → Gurugram
                  </span>
</div>
</div>
<div className="w-28 text-right">
<p className="font-medium">$1,650</p>
<p className="text-[12px] text-neutral-500">Margin 32%</p>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50">View</button>
<button className="h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="px-5 py-4 flex items-center gap-4 hover:bg-neutral-50">
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="truncate font-medium">2BHK — Khan Apartment</p>
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[12px] border border-amber-200 text-amber-700 bg-amber-50">At risk</span>
</div>
<div className="text-[13px] text-neutral-500 mt-1 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i> Oct 22, 12:00
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Noida → Ghaziabad
                  </span>
</div>
</div>
<div className="w-28 text-right">
<p className="font-medium">$980</p>
<p className="text-[12px] text-neutral-500">Margin 28%</p>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50">View</button>
<button className="h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="px-5 py-4 flex items-center gap-4 hover:bg-neutral-50">
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="truncate font-medium">Villa — Rao Family</p>
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[12px] border border-rose-200 text-rose-700 bg-rose-50">Delayed</span>
</div>
<div className="text-[13px] text-neutral-500 mt-1 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i> Oct 19, 10:00
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Faridabad → Gurugram
                  </span>
</div>
</div>
<div className="w-28 text-right">
<p className="font-medium">$2,400</p>
<p className="text-[12px] text-neutral-500">Margin 31%</p>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50">Resolve</button>
<button className="h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
<div className="px-5 py-3 bg-neutral-50/60 border-t border-neutral-200 text-[13px] text-neutral-600 flex items-center justify-between">
<span>Showing 3 of 8 projects</span>
<button className="text-neutral-900 hover:underline">View all</button>
</div>
</div>

<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-neutral-200">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-700" data-lucide="calendar"></i>
<div>
<h3 className="text-[18px] tracking-tight font-semibold">Calendar — October 2025</h3>
<p className="text-[13px] text-neutral-500">View project statuses and take quick actions</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50">Status
                <i className="inline h-4 w-4 ml-1 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50">Crew
                <i className="inline h-4 w-4 ml-1 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<button className="h-9 px-3 rounded-md bg-neutral-900 text-white text-[14px] hover:bg-neutral-800">Today</button>
</div>
</div>

<div className="grid grid-cols-7 border-b border-neutral-200 bg-neutral-50/60">
<div className="px-4 py-2 text-[12px] text-neutral-600">Mon</div>
<div className="px-4 py-2 text-[12px] text-neutral-600">Tue</div>
<div className="px-4 py-2 text-[12px] text-neutral-600">Wed</div>
<div className="px-4 py-2 text-[12px] text-neutral-600">Thu</div>
<div className="px-4 py-2 text-[12px] text-neutral-600">Fri</div>
<div className="px-4 py-2 text-[12px] text-neutral-600">Sat</div>
<div className="px-4 py-2 text-[12px] text-neutral-600">Sun</div>
</div>

<div className="grid grid-cols-7 auto-rows-[140px] sm:auto-rows-[160px]">


<div className="border-b border-r border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">29</span>
</div>
</div>

<div className="border-b border-r border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">30</span>
</div>
</div>

<div className="border-b border-r border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">1</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border border-neutral-200 text-neutral-600 bg-white">Light</span>
</div>
<div className="mt-2 space-y-2">
<div className="group rounded-md border border-emerald-200 bg-emerald-50 p-2 hover:border-emerald-300">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<p className="truncate text-[13px] font-medium">Sharma Residence</p>
</div>
<span className="text-[12px] text-neutral-600">09:00</span>
</div>
<div className="mt-2 flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 h-7 px-2 rounded border border-neutral-200 bg-white text-[12px] hover:bg-neutral-50">
<i className="h-3.5 w-3.5" data-lucide="phone"></i> Call
                    </button>
<button className="inline-flex items-center gap-1 h-7 px-2 rounded border border-neutral-200 bg-white text-[12px] hover:bg-neutral-50">
<i className="h-3.5 w-3.5" data-lucide="mail"></i> Msg
                    </button>
<button className="inline-flex items-center gap-1 h-7 px-2 rounded bg-neutral-900 text-white text-[12px] hover:bg-neutral-800">
<i className="h-3.5 w-3.5" data-lucide="users"></i> Assign
                    </button>
</div>
</div>
</div>
</div>

<div className="border-b border-r border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">2</span>
</div>
<div className="mt-2 space-y-2">
<div className="rounded-md border border-amber-200 bg-amber-50 p-2">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
<p className="truncate text-[13px] font-medium">Khan Apartment</p>
</div>
<span className="text-[12px] text-neutral-600">12:00</span>
</div>
<div className="mt-2 flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 h-7 px-2 rounded border border-neutral-200 bg-white text-[12px] hover:bg-neutral-50">
<i className="h-3.5 w-3.5" data-lucide="edit"></i> Reschedule
                    </button>
<button className="inline-flex items-center gap-1 h-7 px-2 rounded border border-neutral-200 bg-white text-[12px] hover:bg-neutral-50">
<i className="h-3.5 w-3.5" data-lucide="users"></i> Crew
                    </button>
</div>
</div>
</div>
</div>

<div className="border-b border-r border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">3</span>
</div>
<div className="mt-2 space-y-2">
<div className="rounded-md border border-rose-200 bg-rose-50 p-2">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
<p className="truncate text-[13px] font-medium">Rao Family Villa</p>
</div>
<span className="text-[12px] text-neutral-600">10:00</span>
</div>
<div className="mt-2 flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 h-7 px-2 rounded bg-neutral-900 text-white text-[12px] hover:bg-neutral-800">
<i className="h-3.5 w-3.5" data-lucide="check"></i> Mark Done
                    </button>
<button className="inline-flex items-center gap-1 h-7 px-2 rounded border border-neutral-200 bg-white text-[12px] hover:bg-neutral-50">
<i className="h-3.5 w-3.5" data-lucide="edit"></i> Resolve
                    </button>
</div>
</div>
</div>
</div>

<div className="border-b border-r border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">4</span>
</div>
<div className="mt-2 space-y-2">
<div className="rounded-md border border-neutral-200 bg-white p-2">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-2 w-2 rounded-full bg-neutral-400"></span>
<p className="truncate text-[13px] font-medium">Deep Clean — Pre-move</p>
</div>
<span className="text-[12px] text-neutral-600">15:00</span>
</div>
<div className="mt-2 flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 h-7 px-2 rounded border border-neutral-200 bg-white text-[12px] hover:bg-neutral-50">
<i className="h-3.5 w-3.5" data-lucide="users"></i> Assign
                    </button>
</div>
</div>
</div>
</div>

<div className="border-b border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">5</span>
</div>
</div>


<template id="week-template"></template>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">6</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">7</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">8</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">9</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">10</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">11</span></div>
<div className="border-b border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">12</span></div>

<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">13</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">14</span></div>
<div className="border-b border-r border-neutral-200 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">15</span>
</div>
<div className="mt-2 space-y-2">
<div className="rounded-md border border-emerald-200 bg-emerald-50 p-2">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 min-w-0">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<p className="truncate text-[13px] font-medium">Office Move — Gupta &amp; Co.</p>
</div>
<span className="text-[12px] text-neutral-600">09:30</span>
</div>
<div className="mt-2 flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 h-7 px-2 rounded border border-neutral-200 bg-white text-[12px] hover:bg-neutral-50">
<i className="h-3.5 w-3.5" data-lucide="users"></i> Crew
                    </button>
<button className="inline-flex items-center gap-1 h-7 px-2 rounded bg-neutral-900 text-white text-[12px] hover:bg-neutral-800">
<i className="h-3.5 w-3.5" data-lucide="check"></i> Start
                    </button>
</div>
</div>
</div>
</div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">16</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">17</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">18</span></div>
<div className="border-b border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">19</span></div>

<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">20</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">21</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">22</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">23</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">24</span></div>
<div className="border-b border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">25</span></div>
<div className="border-b border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">26</span></div>

<div className="border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">27</span></div>
<div className="border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">28</span></div>
<div className="border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">29</span></div>
<div className="border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">30</span></div>
<div className="border-r border-neutral-200 p-3"><span className="text-[12px] text-neutral-500">31</span></div>
<div className="border-r border-neutral-200 p-3 opacity-60"><span className="text-[12px] text-neutral-400">1</span></div>
<div className="p-3 opacity-60"><span className="text-[12px] text-neutral-400">2</span></div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<div className="px-5 py-4 flex items-center justify-between border-b border-neutral-200">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-700" data-lucide="check-square"></i>
<h3 className="text-[18px] tracking-tight font-semibold">Immediate To-Do</h3>
</div>
<button className="h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
<ul className="divide-y divide-neutral-200">

<li className="px-5 py-3 flex items-start gap-3 hover:bg-neutral-50">
<label className="flex items-start gap-3 w-full cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="mt-0.5 h-5 w-5 rounded-md border border-neutral-300 grid place-items-center bg-white peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors">
<i className="h-3.5 w-3.5 text-transparent peer-checked:text-white" data-lucide="check"></i>
</span>
<div className="flex-1">
<p className="text-[14px] font-medium">Confirm elevator booking — Sharma Residence</p>
<p className="text-[12px] text-neutral-500 mt-0.5">Due today, 1:00 PM</p>
</div>
</label>
<button className="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="edit"></i>
</button>
</li>

<li className="px-5 py-3 flex items-start gap-3 hover:bg-neutral-50">
<label className="flex items-start gap-3 w-full cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="mt-0.5 h-5 w-5 rounded-md border border-neutral-300 grid place-items-center bg-white peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors">
<i className="h-3.5 w-3.5 text-transparent peer-checked:text-white" data-lucide="check"></i>
</span>
<div className="flex-1">
<p className="text-[14px] font-medium">Share revised quote — Khan Apartment</p>
<p className="text-[12px] text-neutral-500 mt-0.5">Due today, 3:30 PM</p>
</div>
</label>
<button className="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="mail"></i>
</button>
</li>

<li className="px-5 py-3 flex items-start gap-3 hover:bg-neutral-50">
<label className="flex items-start gap-3 w-full cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="mt-0.5 h-5 w-5 rounded-md border border-neutral-300 grid place-items-center bg-white peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors">
<i className="h-3.5 w-3.5 text-transparent peer-checked:text-white" data-lucide="check"></i>
</span>
<div className="flex-1">
<p className="text-[14px] font-medium">Confirm packing material availability</p>
<p className="text-[12px] text-neutral-500 mt-0.5">Due tomorrow, 10:00 AM</p>
</div>
</label>
<button className="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="box"></i>
</button>
</li>
</ul>
<div className="px-5 py-3 bg-neutral-50/60 border-t border-neutral-200 text-[13px]">
<button className="text-neutral-900 hover:underline">View all tasks</button>
</div>
</div>

<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<div className="px-5 py-4 flex items-center justify-between border-b border-neutral-200">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-700" data-lucide="users"></i>
<h3 className="text-[18px] tracking-tight font-semibold">Crew Availability</h3>
</div>
<button className="h-9 px-3 rounded-md border border-neutral-200 bg-white text-[14px] hover:bg-neutral-50">
              Manage
            </button>
</div>
<div className="divide-y divide-neutral-200">

<div className="px-5 py-3 flex items-center gap-3">
<img alt="Crew 1" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="truncate font-medium">Rahul Verma</p>
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[12px] border border-emerald-200 text-emerald-700 bg-emerald-50">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Available
                  </span>
</div>
<p className="text-[12px] text-neutral-500">Shift: 8:00 — 16:00</p>
</div>
<div className="w-28">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full bg-emerald-500" style={{width: '80%'}}></div>
</div>
<p className="text-[11px] text-neutral-500 mt-1">Capacity 80%</p>
</div>
<button className="h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="phone"></i>
</button>
</div>

<div className="px-5 py-3 flex items-center gap-3">
<img alt="Crew 2" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="truncate font-medium">Neha Sharma</p>
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[12px] border border-amber-200 text-amber-700 bg-amber-50">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> On move
                  </span>
</div>
<p className="text-[12px] text-neutral-500">Sharma Residence</p>
</div>
<div className="w-28">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full bg-amber-500" style={{width: '55%'}}></div>
</div>
<p className="text-[11px] text-neutral-500 mt-1">Capacity 55%</p>
</div>
<button className="h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="mail"></i>
</button>
</div>

<div className="px-5 py-3 flex items-center gap-3">
<img alt="Crew 3" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" src="https://images.unsplash.com/photo-1544005316-04ce1f9c41b1?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="truncate font-medium">Arjun Patel</p>
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[12px] border border-neutral-200 text-neutral-700 bg-white">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-400"></span> Off
                  </span>
</div>
<p className="text-[12px] text-neutral-500">Rest day</p>
</div>
<div className="w-28">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full bg-neutral-300" style={{width: '15%'}}></div>
</div>
<p className="text-[11px] text-neutral-500 mt-1">Capacity 15%</p>
</div>
<button className="h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center">
<i className="h-4 w-4" data-lucide="calendar"></i>
</button>
</div>
</div>
<div className="px-5 py-3 bg-neutral-50/60 border-t border-neutral-200 text-[13px] flex items-center justify-between">
<span className="text-neutral-600">4 crews available now</span>
<button className="text-neutral-900 hover:underline">Schedule crew</button>
</div>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<button className="flex items-center gap-3 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 px-4 py-3 text-left">
<div className="h-9 w-9 rounded-md bg-neutral-50 border border-neutral-200 grid place-items-center">
<i className="h-5 w-5" data-lucide="file-text"></i>
</div>
<div>
<p className="font-medium">Generate invoice</p>
<p className="text-[12px] text-neutral-500">Sharma Residence • $1,650</p>
</div>
</button>
<button className="flex items-center gap-3 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 px-4 py-3 text-left">
<div className="h-9 w-9 rounded-md bg-neutral-50 border border-neutral-200 grid place-items-center">
<i className="h-5 w-5" data-lucide="credit-card"></i>
</div>
<div>
<p className="font-medium">Record payment</p>
<p className="text-[12px] text-neutral-500">Khan Apartment • Pending</p>
</div>
</button>
<button className="flex items-center gap-3 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 px-4 py-3 text-left">
<div className="h-9 w-9 rounded-md bg-neutral-50 border border-neutral-200 grid place-items-center">
<i className="h-5 w-5" data-lucide="layout-dashboard"></i>
</div>
<div>
<p className="font-medium">View ops board</p>
<p className="text-[12px] text-neutral-500">Real-time crew allocation</p>
</div>
</button>
</section>
</main>
<footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-[13px] text-neutral-500">© 2025 Eleganthouse Ops</p>
<div className="flex items-center gap-4 text-[13px] text-neutral-600">
<a className="hover:text-neutral-900 hover:underline" href="#">Privacy</a>
<a className="hover:text-neutral-900 hover:underline" href="#">Terms</a>
<a className="hover:text-neutral-900 hover:underline" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
