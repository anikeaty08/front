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
      

<aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col justify-between z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<span className="iconify text-teal-600 mr-2" data-height="24" data-icon="lucide:activity" data-width="24"></span>
<span className="text-slate-900 font-semibold tracking-tight text-lg">WaslMed Care</span>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-50 rounded-lg group border border-slate-200/60 shadow-sm" href="#">
<span className="iconify text-teal-600" data-icon="lucide:layout-dashboard" data-width="20"></span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors group" href="#">
<span className="iconify group-hover:text-slate-700" data-icon="lucide:users" data-width="20"></span>
                    Patients List
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors group" href="#">
<span className="iconify group-hover:text-slate-700" data-icon="lucide:stethoscope" data-width="20"></span>
                    Devices &amp; IoT
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors group" href="#">
<span className="iconify group-hover:text-slate-700" data-icon="lucide:file-bar-chart" data-width="20"></span>
                    Clinical Reports
                </a>
</nav>
</div>
<div className="p-4 border-t border-slate-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="20"></span>
                Settings
            </a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-semibold">DR</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Dr. Reynolds</span>
<span className="text-[10px] text-slate-400">ICU Lead</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">

<div className="flex items-center gap-6">
<div className="lg:hidden mr-2">
<span className="iconify text-slate-500" data-icon="lucide:menu" data-width="24"></span>
</div>
<div className="flex items-center gap-3">
<h1 className="text-lg font-semibold text-slate-900 tracking-tight">John Doe</h1>
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">ID: 9821-A</span>
</div>
<div className="hidden md:flex h-6 w-px bg-slate-200"></div>
<div className="hidden md:flex items-center gap-6 text-sm text-slate-500">
<div className="flex flex-col leading-none gap-1">
<span className="text-[10px] uppercase tracking-wider text-slate-400">Age/Sex</span>
<span className="font-medium text-slate-700">45M</span>
</div>
<div className="flex flex-col leading-none gap-1">
<span className="text-[10px] uppercase tracking-wider text-slate-400">Weight</span>
<span className="font-medium text-slate-700">82.4 kg</span>
</div>
<div className="flex flex-col leading-none gap-1">
<span className="text-[10px] uppercase tracking-wider text-slate-400">Bed</span>
<span className="font-medium text-slate-700">ICU-04</span>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-xs font-medium">System Synced</span>
</div>
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-6 custom-scroll">
<div className="max-w-[1920px] mx-auto space-y-6">

<div className="bg-white rounded-xl border-l-4 border-amber-500 shadow-sm ring-1 ring-slate-200 p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="p-2 bg-amber-50 rounded-lg text-amber-600 shrink-0">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="24"></span>
</div>
<div>
<h3 className="text-slate-900 font-medium text-sm lg:text-base">Predictive Alert: Occlusion Risk</h3>
<p className="text-slate-500 text-sm mt-0.5">Analysis indicates 85% probability of line occlusion in Pump #2 within 15 minutes.</p>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors focus:ring-2 focus:ring-slate-200 focus:outline-none">Dismiss</button>
<button className="flex-1 md:flex-none px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors shadow-sm focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 focus:outline-none">Adjust Flow</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-white p-5 rounded-xl shadow-sm ring-1 ring-slate-200 relative overflow-hidden group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-rose-50 text-rose-500 rounded-md">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="18"></span>
</div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Heart Rate</span>
</div>
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-1.5 py-0.5 rounded">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> Normal
                            </span>
</div>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">86</span>
<span className="text-sm text-slate-400 font-medium">bpm</span>
</div>

<div className="h-10 mt-4 -mx-2">
<svg className="w-full h-full stroke-rose-400 fill-none" preserveaspectratio="none" viewbox="0 0 100 25">
<path d="M0,15 Q10,12 20,15 T40,15 T60,5 T80,15 T100,12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="fill-rose-50 stroke-none" d="M0,15 Q10,12 20,15 T40,15 T60,5 T80,15 T100,12 V25 H0 Z" style={{opacity: '0.5'}}></path>
</svg>
</div>
</div>

<div className="bg-white p-5 rounded-xl shadow-sm ring-1 ring-slate-200 relative overflow-hidden group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-sky-50 text-sky-500 rounded-md">
<span className="iconify" data-icon="lucide:droplets" data-width="18"></span>
</div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">SpO2</span>
</div>
<span className="text-xs font-medium text-slate-400">
                                Last: 99%
                            </span>
</div>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">98</span>
<span className="text-sm text-slate-400 font-medium">%</span>
</div>

<div className="h-10 mt-4 -mx-2">
<svg className="w-full h-full stroke-sky-400 fill-none" preserveaspectratio="none" viewbox="0 0 100 25">
<path d="M0,10 L20,10 L30,10 L40,12 L50,10 L80,10 L100,10" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white p-5 rounded-xl shadow-sm ring-1 ring-slate-200 relative overflow-hidden group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-indigo-50 text-indigo-500 rounded-md">
<span className="iconify" data-icon="lucide:activity" data-width="18"></span>
</div>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Blood Pressure</span>
</div>
<span className="text-xs font-medium text-slate-400">MAP: 93</span>
</div>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">120/80</span>
<span className="text-sm text-slate-400 font-medium">mmHg</span>
</div>

<div className="h-10 mt-4 -mx-2">
<svg className="w-full h-full stroke-indigo-400 fill-none" preserveaspectratio="none" viewbox="0 0 100 25">
<path d="M0,20 C20,20 30,5 50,15 S80,10 100,18" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 bg-white rounded-xl shadow-sm ring-1 ring-slate-200 flex flex-col">
<div className="p-5 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:syringe" data-width="20"></span>
<h2 className="text-base font-medium text-slate-900">Active Infusions</h2>
</div>
<button className="text-xs font-medium text-teal-600 hover:text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg transition-colors">
                                + Add Pump
                            </button>
</div>
<div className="p-0 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400 bg-slate-50/50">
<th className="px-6 py-3 font-medium">Drug Name</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Dose (ml/hr)</th>
<th className="px-6 py-3 font-medium w-1/3">Volume Remaining</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">
                                            Insulin (Regular)
                                            <div className="text-xs text-slate-400 font-normal mt-0.5">Concentration: 1 unit/mL</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Running
                                            </span>
</td>
<td className="px-6 py-4 font-medium text-slate-700">2.5</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full" style={{width: '85%'}}></div>
</div>
<span className="text-xs font-medium text-slate-500 w-12 text-right">850ml</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600 group-hover:bg-slate-200/50 p-1.5 rounded transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">
                                            Norepinephrine
                                            <div className="text-xs text-slate-400 font-normal mt-0.5">Concentration: 4 mg/250 mL</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Warning
                                            </span>
</td>
<td className="px-6 py-4 font-medium text-slate-700">12.0</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '15%'}}></div>
</div>
<span className="text-xs font-medium text-amber-600 w-12 text-right">Low</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600 group-hover:bg-slate-200/50 p-1.5 rounded transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">
                                            Fentanyl
                                            <div className="text-xs text-slate-400 font-normal mt-0.5">Concentration: 50 mcg/mL</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Running
                                            </span>
</td>
<td className="px-6 py-4 font-medium text-slate-700">50.0</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full" style={{width: '60%'}}></div>
</div>
<span className="text-xs font-medium text-slate-500 w-12 text-right">60ml</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600 group-hover:bg-slate-200/50 p-1.5 rounded transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">
                                            Propofol
                                            <div className="text-xs text-slate-400 font-normal mt-0.5">Concentration: 10 mg/mL</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Paused
                                            </span>
</td>
<td className="px-6 py-4 font-medium text-slate-400">0.0</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full" style={{width: '90%'}}></div>
</div>
<span className="text-xs font-medium text-slate-500 w-12 text-right">450ml</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600 group-hover:bg-slate-200/50 p-1.5 rounded transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="lg:col-span-4 bg-white rounded-xl shadow-sm ring-1 ring-slate-200 flex flex-col">
<div className="p-5 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:activity-square" data-width="20"></span>
<h2 className="text-base font-medium text-slate-900">Renal Function</h2>
</div>
<span className="text-xs text-slate-400">Last 4 Hours</span>
</div>
<div className="p-6 flex-1 flex flex-col">

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-[10px] uppercase tracking-wide text-slate-400 font-medium block mb-1">UF Goal</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold text-slate-900">250</span>
<span className="text-xs text-slate-500">ml/hr</span>
</div>
</div>
<div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
<span className="text-[10px] uppercase tracking-wide text-blue-500 font-medium block mb-1">Actual</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold text-blue-700">242</span>
<span className="text-xs text-blue-500">ml/hr</span>
</div>
</div>
</div>

<div className="relative flex-1 min-h-[160px] w-full bg-slate-50 rounded-lg border border-slate-100 p-4">

<div className="absolute top-3 left-4 flex items-center gap-2">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
<span className="text-[10px] text-slate-500">Goal</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-[10px] text-slate-500">Actual</span>
</div>
</div>

<svg className="w-full h-full pt-6" preserveaspectratio="none" viewbox="0 0 200 100">

<line stroke="#e2e8f0" stroke-dasharray="4" strokeWidth="1" x1="0" x2="200" y1="25" y2="25"></line>
<line stroke="#e2e8f0" stroke-dasharray="4" strokeWidth="1" x1="0" x2="200" y1="50" y2="50"></line>
<line stroke="#e2e8f0" stroke-dasharray="4" strokeWidth="1" x1="0" x2="200" y1="75" y2="75"></line>

<line stroke="#94a3b8" stroke-dasharray="4" strokeWidth="2" x1="0" x2="200" y1="30" y2="30"></line>

<path d="M0,40 C30,35 50,32 80,30 S120,34 150,31 S180,28 200,32" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="2"></path>

<path d="M0,40 C30,35 50,32 80,30 S120,34 150,31 S180,28 200,32 V100 H0 Z" fill="#eff6ff" opacity="0.5" stroke="none"></path>
</svg>
</div>
<div className="mt-4 flex justify-end">
<a className="text-xs font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1" href="#">
                                    View Full History 
                                    <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<button className="lg:hidden fixed bottom-6 right-6 h-14 w-14 bg-teal-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-colors z-50">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</button>

    </>
  );
}
