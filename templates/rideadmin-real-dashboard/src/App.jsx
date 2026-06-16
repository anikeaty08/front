import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width globally
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex shrink-0">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-green-600" data-lucide="car-front"></i>
<span className="text-xl font-semibold tracking-tight text-gray-900">RideAdmin</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
<div>
<div className="text-xs font-medium text-gray-400 mb-3 px-2 uppercase tracking-wider">Operations</div>
<div className="space-y-1">
<a className="flex items-center px-2 py-2.5 bg-green-50/60 text-green-700 rounded-lg group" href="#">
<i className="w-5 h-5 mr-3 text-green-600" data-lucide="activity"></i>
<span className="text-base font-medium">Live Dashboard</span>
</a>
<a className="flex items-center px-2 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="map"></i>
<span className="text-base font-medium">Heatmap</span>
</a>
<a className="flex items-center px-2 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="route"></i>
<span className="text-base font-medium">Active Trips</span>
</a>
</div>
</div>
<div>
<div className="text-xs font-medium text-gray-400 mb-3 px-2 uppercase tracking-wider">Management</div>
<div className="space-y-1">
<a className="flex items-center px-2 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="users"></i>
<span className="text-base font-medium">Drivers</span>
</a>
<a className="flex items-center px-2 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="car"></i>
<span className="text-base font-medium">Fleet</span>
</a>
</div>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10">

<div className="flex items-center gap-6">

<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition-colors">
<i className="w-4 h-4 text-green-600" data-lucide="car-taxi-front"></i>
<span className="text-base font-medium">Taxi</span>
<span className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100 font-medium">Pro</span>
<i className="w-4 h-4 text-gray-400 ml-1" data-lucide="chevrons-up-down"></i>
</button>
<div className="h-4 w-px bg-gray-300"></div>
<div className="flex items-center text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">Operations</span>
<i className="w-4 h-4 mx-1 text-gray-400" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Live Dashboard</span>
</div>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-gray-400 hover:text-gray-600 relative rounded-full hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center text-white font-medium text-sm shadow-sm ring-2 ring-white">
                    JS
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-[1600px] mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">City Operations</h1>
<p className="text-base text-gray-500 mt-1">Real-time overview of supply, demand, and network health.</p>
</div>
<div className="flex items-center gap-3">

<div className="relative">
<select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 block w-full pl-3 pr-10 py-2 font-medium cursor-pointer shadow-sm">
<option>All Cities</option>
<option>Damascus</option>
<option>Aleppo</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="relative">
<select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 block w-full pl-3 pr-10 py-2 font-medium cursor-pointer shadow-sm">
<option>All Ride Types</option>
<option>Economy</option>
<option>Premium</option>
<option>Carpool</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
                            Today
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-gray-500">Active Trips</h3>
<div className="p-1.5 bg-blue-50 rounded-md"><i className="w-4 h-4 text-blue-600" data-lucide="navigation"></i></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">1,248</span>
</div>
<div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
<i className="w-3.5 h-3.5 text-green-500" data-lucide="trending-up"></i>
<span className="text-green-600 font-medium">+12%</span> vs last hr
                        </div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-gray-500">Online Drivers</h3>
<div className="p-1.5 bg-green-50 rounded-md"><i className="w-4 h-4 text-green-600" data-lucide="users"></i></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">1,890</span>
</div>
<div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
<span className="text-gray-600">845 available</span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-gray-500 flex items-center gap-1.5">S/D Ratio <i className="w-3.5 h-3.5 text-gray-400" data-lucide="info"></i></h3>
<div className="p-1.5 bg-yellow-50 rounded-md"><i className="w-4 h-4 text-yellow-600" data-lucide="scale"></i></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">1.12</span>
</div>
<div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
<span className="text-yellow-600 font-medium">Shortage trending</span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm ring-1 ring-red-500/10">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-gray-500">Pending Requests</h3>
<div className="p-1.5 bg-red-50 rounded-md"><i className="w-4 h-4 text-red-600" data-lucide="clock"></i></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">752</span>
</div>
<div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
<i className="w-3.5 h-3.5 text-red-500" data-lucide="trending-up"></i>
<span className="text-red-600 font-medium">+28%</span> vs last hr
                        </div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-gray-500">Avg Wait Time</h3>
<div className="p-1.5 bg-gray-50 rounded-md"><i className="w-4 h-4 text-gray-600" data-lucide="hourglass"></i></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">4.2m</span>
<span className="text-sm text-gray-500 font-medium">P50</span>
</div>
<div className="mt-2 text-sm text-gray-500 flex items-center gap-1 justify-between">
<span>P90: <span className="text-gray-900 font-medium">8.5m</span></span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-gray-500">Avg ETA</h3>
<div className="p-1.5 bg-gray-50 rounded-md"><i className="w-4 h-4 text-gray-600" data-lucide="map-pin"></i></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">6.8m</span>
<span className="text-sm text-gray-500 font-medium">P50</span>
</div>
<div className="mt-2 text-sm text-gray-500 flex items-center gap-1 justify-between">
<span>P90: <span className="text-gray-900 font-medium">12.1m</span></span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Performance Indicators</h2>
<span className="text-sm text-gray-500">Last Hour</span>
</div>
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 flex-1">
<div className="space-y-2">
<div className="text-sm font-medium text-gray-500">Completion Rate</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">92.4%</span>
</div>

<div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '92.4%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="text-sm font-medium text-gray-500">Cancellation Rate</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">4.1%</span>
<span className="text-xs text-red-600 flex items-center"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> 0.5%</span>
</div>
<div className="text-xs text-gray-400 mt-1">2.1% Cust • 2.0% Drv</div>
</div>
<div className="space-y-2">
<div className="text-sm font-medium text-gray-500">Acceptance Rate</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">88.7%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '88.7%'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="text-sm font-medium text-gray-500">Avg Trip Duration</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">18.5m</span>
</div>
</div>
<div className="space-y-2">
<div className="text-sm font-medium text-gray-500">Avg Trip Distance</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">8.2 km</span>
</div>
</div>
<div className="space-y-2">
<div className="text-sm font-medium text-gray-500">Revenue per Hour</div>
<div className="flex items-end gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">SAR 4,250</span>
</div>
<div className="text-xs text-gray-400 mt-1">Gross Bookings</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-gray-900 flex items-center gap-2">
                                System Alerts
                                <span className="flex h-2 w-2 relative ml-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
</h2>
</div>
<div className="p-2 flex-1 overflow-y-auto">
<ul className="space-y-1">

<li>
<a className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<div className="mt-0.5 p-1.5 bg-red-100 text-red-600 rounded-md shrink-0">
<i className="w-4 h-4" data-lucide="shield-alert"></i>
</div>
<div>
<div className="text-base font-medium text-gray-900">2 Active SOS Incidents</div>
<div className="text-sm text-gray-500 mt-0.5">Downtown &amp; Airport regions. Response team notified.</div>
<div className="text-xs text-red-600 font-medium mt-1">Requires immediate action</div>
</div>
</a>
</li>

<li>
<a className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<div className="mt-0.5 p-1.5 bg-orange-100 text-orange-600 rounded-md shrink-0">
<i className="w-4 h-4" data-lucide="users-minus"></i>
</div>
<div>
<div className="text-base font-medium text-gray-900">Driver Shortage in 3 Zones</div>
<div className="text-sm text-gray-500 mt-0.5">University, Westside, Financial District.</div>
</div>
</a>
</li>

<li>
<a className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<div className="mt-0.5 p-1.5 bg-blue-100 text-blue-600 rounded-md shrink-0">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<div>
<div className="text-base font-medium text-gray-900">High Surge Active</div>
<div className="text-sm text-gray-500 mt-0.5">Airport zone hit 2.5x multiplier.</div>
</div>
</a>
</li>

<li>
<div className="flex items-start gap-3 p-3">
<div className="mt-0.5 p-1.5 bg-yellow-100 text-yellow-600 rounded-md shrink-0">
<i className="w-4 h-4" data-lucide="file-warning"></i>
</div>
<div>
<div className="text-base font-medium text-gray-900">45 Document Expiries</div>
<div className="text-sm text-gray-500 mt-0.5">12 urgent (next 24h), 33 warnings (7 days).</div>
</div>
</div>
</li>

<li>
<div className="flex items-start gap-3 p-3">
<div className="mt-0.5 p-1.5 bg-gray-100 text-gray-600 rounded-md shrink-0">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<div>
<div className="text-base font-medium text-gray-900">System Health Stable</div>
<div className="text-sm text-gray-500 mt-0.5">API latency 45ms. 0.01% error rate.</div>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Zone Breakdown</h2>
<button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="download"></i> Export CSV
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 group">
<div className="flex items-center gap-1">Zone Name <i className="w-3 h-3 text-gray-300 group-hover:text-gray-500" data-lucide="arrow-down-up"></i></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 group">
<div className="flex items-center gap-1">Online Drv <i className="w-3 h-3 text-gray-300 group-hover:text-gray-500" data-lucide="arrow-down-up"></i></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 group">
<div className="flex items-center gap-1">Active Trips <i className="w-3 h-3 text-gray-300 group-hover:text-gray-500" data-lucide="arrow-down-up"></i></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 group">
<div className="flex items-center gap-1">Pending (10m) <i className="w-3 h-3 text-gray-300 group-hover:text-gray-500" data-lucide="arrow-down-up"></i></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 group">
<div className="flex items-center gap-1">S/D Ratio <i className="w-3 h-3 text-gray-300 group-hover:text-gray-500" data-lucide="arrow-down-up"></i></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 group">
<div className="flex items-center gap-1">Avg ETA <i className="w-3 h-3 text-gray-300 group-hover:text-gray-500" data-lucide="arrow-down-up"></i></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Surge</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<a className="text-base font-medium text-gray-900 group-hover:text-green-600 transition-colors" href="#">Downtown</a>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">
                                        245 <i className="inline w-3.5 h-3.5 text-green-500 ml-1" data-lucide="trending-up"></i>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">198</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">45</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">1.8</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">4.2m</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">None</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-50 border border-green-100">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-green-700">Balanced</span>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<a className="text-base font-medium text-gray-900 group-hover:text-green-600 transition-colors" href="#">Airport</a>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">
                                        85 <i className="inline w-3.5 h-3.5 text-red-500 ml-1" data-lucide="trending-down"></i>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">112</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 font-medium">145</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 font-medium">0.6</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-red-600 font-medium">12.5m</td>
<td className="px-6 py-4 whitespace-nowrap">
<button className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 transition-colors">
                                            2.5x <i className="w-3 h-3 ml-1" data-lucide="pencil"></i>
</button>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 border border-red-100">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-red-700">Critical</span>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<a className="text-base font-medium text-gray-900 group-hover:text-green-600 transition-colors" href="#">University</a>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">
                                        120 <i className="inline w-3.5 h-3.5 text-gray-400 ml-1" data-lucide="minus"></i>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">105</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">95</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">1.1</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">8.0m</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">None</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-yellow-50 border border-yellow-100">
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<span className="text-sm font-medium text-yellow-700">Shortage</span>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<a className="text-base font-medium text-gray-900 group-hover:text-green-600 transition-colors" href="#">Suburbs North</a>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">
                                        65 <i className="inline w-3.5 h-3.5 text-green-500 ml-1" data-lucide="trending-up"></i>
</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">12</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">2</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">3.5</td>
<td className="px-6 py-4 whitespace-nowrap text-base text-gray-600">2.1m</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">None</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm font-medium text-blue-700">Oversupply</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="h-8"></div>
</div>
</div>
</main>


    </>
  );
}
