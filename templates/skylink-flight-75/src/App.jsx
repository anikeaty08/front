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
      

<aside className="w-64 bg-sky-600 flex flex-col justify-between hidden md:flex transition-all duration-300 shadow-xl shadow-sky-900/10 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-sky-500/30">
<div className="flex items-center gap-2 text-white">
<span className="iconify w-6 h-6" data-icon="lucide:plane" data-strokeWidth="1.5"></span>
<span className="text-lg font-semibold tracking-tighter">SKYLINK</span>
</div>
</div>

<nav className="mt-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white shadow-sm ring-1 ring-white/10" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sky-100 hover:bg-sky-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:search" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Book Flight</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sky-100 hover:bg-sky-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:ticket" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">My Bookings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sky-100 hover:bg-sky-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:bell-ring" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Price Alerts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sky-100 hover:bg-sky-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Analytics</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-sky-500/30">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sky-100 hover:bg-sky-500 hover:text-white transition-colors duration-200" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:settings" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Settings</span>
</a>
<div className="mt-4 flex items-center gap-3 px-3 py-2 text-sky-200">
<div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-xs font-medium text-white border border-sky-400">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">John Doe</span>
<span className="text-[10px] opacity-80">Pro Member</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-sky-50/50">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4 flex-1">
<button className="md:hidden text-slate-500 hover:text-sky-600">
<span className="iconify w-6 h-6" data-icon="lucide:menu" data-strokeWidth="1.5"></span>
</button>

<div className="relative w-full max-w-md hidden md:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<span className="iconify w-4 h-4" data-icon="lucide:search" data-strokeWidth="1.5"></span>
</span>
<input className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400" placeholder="Search booking ID, flight number..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600 cursor-pointer hover:border-sky-300 transition-colors">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:calendar" data-strokeWidth="1.5"></span>
<span>Oct 24, 2023</span>
</div>

<button className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500">
<span className="iconify w-5 h-5" data-icon="lucide:bell" data-strokeWidth="1.5"></span>
<span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex justify-between items-end">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Dashboard Overview</h1>
<p className="text-sm text-slate-500 mt-1">Welcome back, John. Here's your flight activity.</p>
</div>
<button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
<span className="iconify w-4 h-4" data-icon="lucide:download" data-strokeWidth="1.5"></span>
                        Export Report
                    </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Bookings</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">1,284</h3>
</div>
<div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
<span className="iconify w-5 h-5" data-icon="lucide:briefcase" data-strokeWidth="1.5"></span>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<span className="text-emerald-500 flex items-center font-medium">
<span className="iconify w-3 h-3 mr-1" data-icon="lucide:trending-up"></span>
                                +12.5%
                            </span>
<span className="text-slate-400 ml-2">from last month</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Upcoming Flights</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">8</h3>
</div>
<div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
<span className="iconify w-5 h-5" data-icon="lucide:plane-takeoff" data-strokeWidth="1.5"></span>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<span className="text-slate-400">Next: LHR → JFK (Oct 28)</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Saved Routes</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">14</h3>
</div>
<div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
<span className="iconify w-5 h-5" data-icon="lucide:bookmark" data-strokeWidth="1.5"></span>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<span className="text-sky-600 font-medium cursor-pointer hover:underline">View all routes</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Avg. Ticket Price</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">$432</h3>
</div>
<div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
<span className="iconify w-5 h-5" data-icon="lucide:credit-card" data-strokeWidth="1.5"></span>
</div>
</div>
<div className="mt-4 flex items-center text-xs">
<span className="text-emerald-500 flex items-center font-medium">
<span className="iconify w-3 h-3 mr-1" data-icon="lucide:arrow-down"></span>
                                -2.1%
                            </span>
<span className="text-slate-400 ml-2">seasonal drop</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-sky-50/30">
<h2 className="text-base font-semibold text-slate-800 flex items-center gap-2">
<span className="iconify text-sky-500" data-icon="lucide:search" data-strokeWidth="2"></span>
                            Find Flights
                        </h2>
<div className="flex bg-slate-100 p-0.5 rounded-lg">
<button className="px-3 py-1 text-xs font-medium bg-white text-slate-900 shadow-sm rounded-md transition-all">Round trip</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 rounded-md transition-all">One way</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 rounded-md transition-all">Multi-city</button>
</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">

<div className="md:col-span-3 space-y-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">From</label>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:plane-takeoff"></span>
</span>
<input className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all shadow-sm" type="text" value="New York (JFK)"/>
</div>
</div>

<div className="hidden md:flex md:col-span-1 justify-center pb-2">
<button className="p-2 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 text-slate-400 hover:text-sky-600 transition-all">
<span className="iconify w-5 h-5" data-icon="lucide:arrow-left-right"></span>
</button>
</div>

<div className="md:col-span-3 space-y-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">To</label>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:map-pin"></span>
</span>
<input className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all shadow-sm" placeholder="City or Airport" type="text"/>
</div>
</div>

<div className="md:col-span-2 space-y-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">Departure</label>
<div className="relative group">
<input className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all shadow-sm relative z-10 bg-transparent" type="date"/>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-4 h-4" data-icon="lucide:calendar"></span>
</div>
</div>

<div className="md:col-span-3 grid grid-cols-2 gap-2">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">Travelers</label>
<div className="relative">
<select className="w-full pl-3 pr-8 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all shadow-sm appearance-none">
<option>1 Adult</option>
<option>2 Adults</option>
<option>2 Ad, 1 Ch</option>
</select>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-3 h-3" data-icon="lucide:users"></span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500 ml-1">Class</label>
<div className="relative">
<select className="w-full pl-3 pr-8 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all shadow-sm appearance-none">
<option>Economy</option>
<option>Business</option>
<option>First</option>
</select>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-3 h-3" data-icon="lucide:chevron-down"></span>
</div>
</div>
</div>
</div>
<div className="px-6 pb-6 pt-2">
<button className="w-full md:w-auto md:min-w-[200px] float-right bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 px-6 rounded-lg shadow-md shadow-sky-200 hover:shadow-lg transition-all flex items-center justify-center gap-2">
<span className="iconify w-4 h-4" data-icon="lucide:search"></span>
                            Search Flights
                         </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Recent Searches</h3>
<button className="text-xs text-sky-600 font-medium hover:underline">Clear History</button>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-4 hover:border-sky-300 transition-colors group cursor-pointer shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs tracking-tighter">
                                        DL
                                    </div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Delta Airlines</h4>
<p className="text-xs text-slate-500">Flight DL402 • Boeing 737</p>
</div>
</div>
<div className="flex-1 flex justify-center items-center px-4">
<div className="text-right">
<p className="text-sm font-semibold text-slate-800">08:00</p>
<p className="text-xs text-slate-400">JFK</p>
</div>
<div className="mx-3 flex flex-col items-center w-24">
<span className="text-[10px] text-slate-400 mb-1">2h 45m</span>
<div className="w-full h-[1px] bg-slate-300 relative">
<div className="absolute -top-1 right-0 w-2 h-2 bg-slate-300 rounded-full"></div>
<div className="absolute -top-1 left-0 w-2 h-2 bg-white border border-slate-300 rounded-full"></div>
</div>
<span className="text-[10px] text-emerald-500 mt-1 font-medium">Non-stop</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-800">10:45</p>
<p className="text-xs text-slate-400">MIA</p>
</div>
</div>
<div className="text-right flex sm:flex-col justify-between items-center sm:items-end gap-2">
<p className="text-lg font-semibold text-sky-600">$185</p>
<button className="px-4 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-600 border border-slate-200 rounded-md transition-colors">
                                        Book Now
                                    </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-4 hover:border-sky-300 transition-colors group cursor-pointer shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs tracking-tighter">
                                        AA
                                    </div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">American Airlines</h4>
<p className="text-xs text-slate-500">Flight AA105 • Airbus A320</p>
</div>
</div>
<div className="flex-1 flex justify-center items-center px-4">
<div className="text-right">
<p className="text-sm font-semibold text-slate-800">14:30</p>
<p className="text-xs text-slate-400">LHR</p>
</div>
<div className="mx-3 flex flex-col items-center w-24">
<span className="text-[10px] text-slate-400 mb-1">7h 20m</span>
<div className="w-full h-[1px] bg-slate-300 relative">
<div className="absolute -top-1 right-0 w-2 h-2 bg-slate-300 rounded-full"></div>
<div className="absolute -top-1 left-0 w-2 h-2 bg-white border border-slate-300 rounded-full"></div>
</div>
<span className="text-[10px] text-slate-400 mt-1">1 Stop</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-800">21:50</p>
<p className="text-xs text-slate-400">DXB</p>
</div>
</div>
<div className="text-right flex sm:flex-col justify-between items-center sm:items-end gap-2">
<p className="text-lg font-semibold text-sky-600">$540</p>
<button className="px-4 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-600 border border-slate-200 rounded-md transition-colors">
                                        Book Now
                                    </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-4 hover:border-sky-300 transition-colors group cursor-pointer shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-xs tracking-tighter">
                                        UA
                                    </div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">United Airlines</h4>
<p className="text-xs text-slate-500">Flight UA88 • Boeing 777</p>
</div>
</div>
<div className="flex-1 flex justify-center items-center px-4">
<div className="text-right">
<p className="text-sm font-semibold text-slate-800">09:15</p>
<p className="text-xs text-slate-400">SFO</p>
</div>
<div className="mx-3 flex flex-col items-center w-24">
<span className="text-[10px] text-slate-400 mb-1">5h 30m</span>
<div className="w-full h-[1px] bg-slate-300 relative">
<div className="absolute -top-1 right-0 w-2 h-2 bg-slate-300 rounded-full"></div>
<div className="absolute -top-1 left-0 w-2 h-2 bg-white border border-slate-300 rounded-full"></div>
</div>
<span className="text-[10px] text-emerald-500 mt-1 font-medium">Non-stop</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-800">17:45</p>
<p className="text-xs text-slate-400">JFK</p>
</div>
</div>
<div className="text-right flex sm:flex-col justify-between items-center sm:items-end gap-2">
<p className="text-lg font-semibold text-sky-600">$320</p>
<button className="px-4 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-600 border border-slate-200 rounded-md transition-colors">
                                        Book Now
                                    </button>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-slate-900">Price Trends</h3>
<span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">Last 7 Days</span>
</div>
<div className="relative h-40 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-300">
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-200 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 C20,70 20,90 40,60 C60,30 80,40 100,20" fill="none" stroke="#0ea5e9" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"></stop>
</lineargradient>
<path d="M0,80 C20,70 20,90 40,60 C60,30 80,40 100,20 V100 H0 Z" fill="url(#chartGradient)" stroke="none"></path>

<circle className="fill-sky-500 stroke-white stroke-2" cx="40" cy="60" r="2"></circle>
<circle className="fill-sky-500 stroke-white stroke-2" cx="100" cy="20" r="2"></circle>
</svg>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Monthly Activity</h3>
<div className="flex items-end justify-between h-32 gap-2">

<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-sky-100 rounded-t-sm h-12 relative group-hover:bg-sky-200 transition-colors"></div>
<span className="text-[10px] text-slate-400">J</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-sky-100 rounded-t-sm h-16 relative group-hover:bg-sky-200 transition-colors"></div>
<span className="text-[10px] text-slate-400">F</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-sky-100 rounded-t-sm h-10 relative group-hover:bg-sky-200 transition-colors"></div>
<span className="text-[10px] text-slate-400">M</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-sky-500 rounded-t-sm h-24 relative shadow-md shadow-sky-200">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded transition-opacity">
                                            24
                                        </div>
</div>
<span className="text-[10px] font-medium text-sky-600">A</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-sky-100 rounded-t-sm h-20 relative group-hover:bg-sky-200 transition-colors"></div>
<span className="text-[10px] text-slate-400">M</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-sky-100 rounded-t-sm h-14 relative group-hover:bg-sky-200 transition-colors"></div>
<span className="text-[10px] text-slate-400">J</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>

    </>
  );
}
