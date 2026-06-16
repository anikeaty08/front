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
      

<nav className="fixed z-50 bg-gray-50 border-zinc-100 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:plane-top-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                    AEROHUB
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Flights</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Parking</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Shops &amp; Dining</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Map</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="pl-10 pr-4 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-zinc-300 w-48 transition-all font-normal placeholder:text-zinc-400" placeholder="Search flights..." type="text"/>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
<span>EN</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 pt-24 pr-6 pb-20 pl-6">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
<div className="lg:col-span-7 flex flex-col bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-black/10 via-black/0 to-black/10 justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 w-fit mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 tracking-tight">System Operational • Security wait: 5m</span>
</div>
<h1 className="md:text-6xl leading-[1.1] text-5xl font-medium text-zinc-900 tracking-tight mb-6">
                        The seamless way <br/> to travel the world.
                    </h1>
<p className="leading-relaxed text-lg font-normal text-zinc-500 max-w-lg mb-8">
                        Real-time flight tracking, smart parking booking, and terminal guides designed for the modern traveler.
                    </p>

<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 p-2 max-w-xl">
<div className="flex gap-1 mb-2 p-1">
<button className="flex-1 py-2 text-sm font-medium rounded-lg bg-zinc-50 text-zinc-900 shadow-sm border border-zinc-200/50">Book Flight</button>
<button className="flex-1 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 transition-colors">Flight Status</button>
<button className="flex-1 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 transition-colors">Parking</button>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="col-span-2 sm:col-span-1 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-zinc-300 transition-all hover:border-zinc-300" placeholder="From" type="text" value="San Francisco (SFO)"/>
<label className="absolute -top-2 left-3 px-1 bg-white text-[10px] uppercase tracking-wider font-semibold text-zinc-400">From</label>
</div>
<div className="col-span-2 sm:col-span-1 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:map-point-wave-linear" width="18"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-zinc-300 transition-all hover:border-zinc-300" placeholder="To destination" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1 relative">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-300 transition-all hover:border-zinc-300" type="date"/>
</div>
<div className="col-span-2 sm:col-span-1 relative">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<select className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-300 transition-all hover:border-zinc-300 appearance-none">
<option>1 Passenger</option>
<option>2 Passengers</option>
<option>3 Passengers</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<button className="w-full mt-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-zinc-200 flex items-center justify-center gap-2 group">
                            Search Flights
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-white rounded-2xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-zinc-200 overflow-hidden h-full flex flex-col">
<div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
<h3 className="font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:signpost-2-linear" width="20"></iconify-icon>
                                Live Departures
                            </h3>
<a className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                                View all <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="flex-1 overflow-y-auto flight-scroll max-h-[400px]">
<table className="w-full text-left border-collapse">
<thead className="bg-white sticky top-0 z-10 text-xs text-zinc-400 font-medium uppercase tracking-wider">
<tr className="">
<th className="px-5 py-3 font-medium border-b border-zinc-100">Time</th>
<th className="px-5 py-3 font-medium border-b border-zinc-100">Dest</th>
<th className="px-5 py-3 font-medium border-b border-zinc-100">Flight</th>
<th className="px-5 py-3 font-medium border-b border-zinc-100 text-right">Gate</th>
<th className="px-5 py-3 font-medium border-b border-zinc-100 text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-50">
<tr className="group hover:bg-zinc-50/80 transition-colors cursor-default">
<td className="px-5 py-4 font-semibold text-zinc-900">09:45</td>
<td className="px-5 py-4 text-zinc-600">London LHR</td>
<td className="px-5 py-4 text-zinc-400 text-xs">BA 284</td>
<td className="px-5 py-4 text-zinc-900 font-mono text-right">A12</td>
<td className="px-5 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">Boarding</span>
</td>
</tr>
<tr className="group hover:bg-zinc-50/80 transition-colors cursor-default">
<td className="px-5 py-4 font-semibold text-zinc-900">10:15</td>
<td className="px-5 py-4 text-zinc-600">Tokyo NRT</td>
<td className="px-5 py-4 text-zinc-400 text-xs">JL 057</td>
<td className="px-5 py-4 text-zinc-900 font-mono text-right">B04</td>
<td className="px-5 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200">On Time</span>
</td>
</tr>
<tr className="group hover:bg-zinc-50/80 transition-colors cursor-default">
<td className="px-5 py-4 font-semibold text-zinc-900">10:30</td>
<td className="px-5 py-4 text-zinc-600">New York JFK</td>
<td className="px-5 py-4 text-zinc-400 text-xs">DL 402</td>
<td className="px-5 py-4 text-zinc-900 font-mono text-right">A08</td>
<td className="px-5 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-600 border border-amber-100">Delayed</span>
</td>
</tr>
<tr className="group hover:bg-zinc-50/80 transition-colors cursor-default">
<td className="px-5 py-4 font-semibold text-zinc-900">11:00</td>
<td className="px-5 py-4 text-zinc-600">Dubai DXB</td>
<td className="px-5 py-4 text-zinc-400 text-xs">EK 202</td>
<td className="px-5 py-4 text-zinc-900 font-mono text-right">C22</td>
<td className="px-5 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200">On Time</span>
</td>
</tr>
<tr className="group hover:bg-zinc-50/80 transition-colors cursor-default">
<td className="px-5 py-4 font-semibold text-zinc-900">11:45</td>
<td className="px-5 py-4 text-zinc-600">Paris CDG</td>
<td className="px-5 py-4 text-zinc-400 text-xs">AF 089</td>
<td className="px-5 py-4 text-zinc-900 font-mono text-right">A15</td>
<td className="px-5 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200">On Time</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="mb-12">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Terminal Services</h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-5 bg-white rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:car-linear" width="60"></iconify-icon>
</div>
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-4 border border-zinc-100">
<iconify-icon icon="solar:car-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-1">Pre-book Parking</h3>
<p className="text-xs text-zinc-500 mb-3">Save up to 40% online</p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
<span>Available spots: 240</span>
</div>
</div>

<div className="group hover:border-zinc-300 transition-all hover:shadow-sm cursor-pointer bg-slate-50 border-zinc-200 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-4 border border-zinc-100">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-1">Security Fast Track</h3>
<p className="text-xs text-zinc-500 mb-3">Skip the regular queues</p>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span className="">Wait time: &lt; 5 mins</span>
</div>
</div>

<div className="group p-5 bg-white rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm cursor-pointer">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-4 border border-zinc-100">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-1">Executive Lounges</h3>
<p className="text-xs text-zinc-500 mb-3">Relax before you fly</p>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<span>Open 24/7</span>
</div>
</div>

<div className="group hover:border-zinc-300 transition-all hover:shadow-sm cursor-pointer bg-white border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-4 border border-zinc-100">
<iconify-icon className="" icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 mb-1">Shop &amp; Collect</h3>
<p className="text-xs text-zinc-500 mb-3">Duty free made easy</p>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<span>Pick up on return</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Download the AeroHub App</h2>
<p className="text-zinc-400 mb-6 font-normal max-w-sm">Get real-time gate changes, wayfinding navigation, and exclusive retail offers directly to your pocket.</p>
<div className="flex gap-3">
<button className="bg-white text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:apple-linear" width="18"></iconify-icon>
                                App Store
                            </button>
<button className="bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                                Google Play
                            </button>
</div>
</div>
<div className="flex gap-4 justify-end">

<div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl backdrop-blur-sm w-48">
<div className="flex items-center justify-between mb-4 border-b border-zinc-700 pb-2">
<span className="text-xs text-zinc-400">Flight BA 284</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">On Time</span>
</div>
<div className="flex justify-between items-center mb-1">
<span className="text-xl font-semibold text-white">SFO</span>
<iconify-icon className="text-zinc-500 rotate-90" icon="solar:plane-linear" width="16"></iconify-icon>
<span className="text-xl font-semibold text-white">LHR</span>
</div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-3">
<span>09:45</span>
<span>20:15</span>
</div>
<div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Passenger Info</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Arrivals &amp; Departures</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Connecting Flights</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Security Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Special Assistance</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Transport &amp; Parking</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Book Parking</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Car Rental</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Public Transport</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Taxis</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Corporate</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About AeroHub</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press Centre</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Help Centre</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Lost Property</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Feedback</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-900">
<div className="w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:plane-top-linear" width="12"></iconify-icon>
</div>
                    AEROHUB
                </div>
<div className="text-xs text-zinc-400">
                    © 2023 AeroHub Airport Ltd. All rights reserved.
                </div>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a> 
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:chat-round-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
