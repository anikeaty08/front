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
      

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-5 shrink-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2.5 text-slate-900 font-semibold tracking-tight text-base">
<div className="w-7 h-7 bg-indigo-600 rounded-md flex items-center justify-center text-white shadow-sm shadow-indigo-200">
<iconify-icon icon="solar:satellite-linear" width="18"></iconify-icon>
</div>
                Orbital<span className="text-slate-400 font-normal">Fleet</span>
</div>
<div className="h-5 w-px bg-gray-200"></div>
<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 text-xs font-medium text-slate-900 bg-gray-100/80 rounded-md flex items-center gap-2" href="#">
<iconify-icon icon="solar:bus-linear" width="14"></iconify-icon>
                    Live Fleet
                </a>
<a className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md transition-all flex items-center gap-2" href="#">
<iconify-icon icon="solar:chart-2-linear" width="14"></iconify-icon>
                    Analytics
                </a>
<a className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md transition-all flex items-center gap-2" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
                    Drivers
                </a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-slate-400 hover:text-slate-600 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-100 to-blue-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-xs ml-1">
                JD
            </div>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-80 bg-white border-r border-gray-200 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">

<div className="p-3 border-b border-gray-100 space-y-3">
<div className="relative group">
<div className="absolute left-2.5 top-2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-400 font-medium" placeholder="Search vehicle ID, driver..." type="text"/>
</div>
<div className="flex items-center justify-between px-1">
<div className="flex gap-4 text-xs font-medium text-slate-500">
<button className="text-slate-900 border-b-2 border-slate-900 pb-0.5">All (42)</button>
<button className="hover:text-slate-700 pb-0.5">Moving</button>
<button className="hover:text-slate-700 pb-0.5">Idle</button>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="bg-indigo-50/40 border-l-2 border-indigo-600 p-3 hover:bg-indigo-50/60 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="bg-white p-1 rounded shadow-sm border border-indigo-100 text-indigo-600">
<iconify-icon icon="solar:delivery-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-xs font-bold text-slate-900 leading-tight">VH-8821</h3>
<p className="text-[10px] text-indigo-600 font-medium mt-0.5">Live Tracking</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white border border-indigo-100 text-indigo-700 text-[10px] font-semibold shadow-sm">
<span className="w-1 h-1 rounded-full bg-indigo-600 animate-pulse"></span>
                            Active
                        </span>
</div>
<div className="grid grid-cols-2 gap-2 mt-3 bg-white/50 p-2 rounded border border-indigo-100/50">
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon className="text-indigo-500" icon="solar:speedometer-linear" width="12"></iconify-icon>
<span className="font-medium text-slate-700">74 km/h</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon className="text-emerald-500" icon="solar:battery-charge-linear" width="12"></iconify-icon>
<span className="font-medium text-slate-700">82%</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="12"></iconify-icon>
<span className="truncate">I-95 Northbound</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:user-linear" width="12"></iconify-icon>
<span className="truncate">M. Ross</span>
</div>
</div>
<div className="mt-2 flex gap-1">
<button className="flex-1 py-1 text-[10px] font-medium bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-center shadow-sm shadow-indigo-200">
                            View Cam
                        </button>
<button className="flex-1 py-1 text-[10px] font-medium bg-white border border-gray-200 text-slate-600 rounded hover:bg-gray-50 transition-colors text-center">
                            History
                        </button>
</div>
</div>

<div className="p-3 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<div className="bg-gray-100 p-1 rounded text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon icon="solar:truck-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-700 leading-tight">TRK-004</h3>
<p className="text-[10px] text-slate-400 mt-0.5">Stopped 2h ago</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-slate-500 text-[10px] font-medium bg-gray-100">
                            Idle
                        </span>
</div>
</div>

<div className="p-3 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<div className="bg-gray-100 p-1 rounded text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon icon="solar:bus-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-700 leading-tight">BUS-102</h3>
<p className="text-[10px] text-slate-400 mt-0.5">Moving • Route 4A</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-emerald-700 bg-emerald-50 text-[10px] font-medium border border-emerald-100/50">
                            Moving
                        </span>
</div>
</div>

<div className="p-3 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<div className="bg-gray-100 p-1 rounded text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon icon="solar:sedan-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-700 leading-tight">SDN-991</h3>
<p className="text-[10px] text-slate-400 mt-0.5">Offline</p>
</div>
</div>
<iconify-icon className="text-slate-300" icon="solar:cloud-cross-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="p-3 border-t border-gray-200 bg-gray-50/50">
<div className="flex items-center justify-between">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Fleet Status</span>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">98% Operational</span>
</div>
<div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden flex">
<div className="w-[70%] bg-indigo-500 h-full"></div>
<div className="w-[20%] bg-emerald-500 h-full"></div>
<div className="w-[10%] bg-amber-400 h-full"></div>
</div>
</div>
</aside>

<div className="flex-1 relative map-bg overflow-hidden isolate">

<div className="absolute inset-0 pointer-events-none opacity-40">

<svg className="text-slate-300 stroke-current" fill="none" height="100%" preserveaspectratio="none" viewbox="0 0 800 600" width="100%">
<path d="M-100,300 C150,250 300,400 500,300 S800,100 1000,300" stroke-dasharray="8 8" strokeWidth="2"></path>
<path d="M200,600 C300,500 400,500 500,600" strokeWidth="2"></path>
<path className="opacity-50" d="M400,0 C400,100 300,200 400,300" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute inset-0 pointer-events-none">
<svg className="drop-shadow-lg" height="100%" width="100%">

<path className="opacity-40" d="M200,450 Q300,400 400,350 T600,300" fill="none" stroke="#6366f1" stroke-dasharray="4 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>

<path d="M600,300 L650,280" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>

<div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
<div className="glass rounded-md shadow-sm border border-gray-200/50 flex flex-col overflow-hidden">
<button className="p-1.5 hover:bg-gray-50 border-b border-gray-100 text-slate-600">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 hover:bg-gray-50 text-slate-600">
<iconify-icon icon="solar:minus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="absolute top-4 right-4 z-10 flex gap-2">
<button className="glass px-3 py-1.5 rounded-md shadow-sm border border-gray-200/50 text-xs font-medium text-slate-600 hover:text-indigo-600 flex items-center gap-2">
<iconify-icon icon="solar:layers-linear" width="14"></iconify-icon>
                    Map Layers
                 </button>
</div>

<div className="absolute top-16 right-4 w-64 bg-slate-900 rounded-lg shadow-xl border border-slate-700/50 overflow-hidden z-20 group">
<div className="relative aspect-video bg-slate-800">

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-slate-500" icon="solar:videocamera-linear" width="32"></iconify-icon>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>

<div className="absolute top-2 left-2 flex items-center gap-1.5">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-[10px] font-medium text-white shadow-black drop-shadow-md">LIVE • CAM 01</span>
</div>
<button className="absolute top-2 right-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded p-0.5 transition-all opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:maximize-square-linear" width="14"></iconify-icon>
</button>
<div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
<div className="text-[10px] text-slate-300 leading-tight">
<div className="font-mono">REC: 14:02:11</div>
<div>Driver: M. Ross</div>
</div>
<iconify-icon className="text-white/80" icon="solar:sound-high-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-[46.5%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer">
<div className="relative group">
<div className="w-10 h-10 bg-indigo-600 rounded-full border-[3px] border-white shadow-xl flex items-center justify-center text-white relative z-20 transition-transform group-hover:scale-110">
<iconify-icon icon="solar:delivery-linear" width="20"></iconify-icon>
</div>

<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-100 transition-opacity z-20">
                        VH-8821 • 74 km/h
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
</div>

<div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20 z-10"></div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="glass rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 backdrop-blur-md p-4 flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-500">

<button className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-colors shrink-0">
<iconify-icon icon="solar:pause-linear" width="16"></iconify-icon>
</button>
<div className="flex flex-col gap-0.5 shrink-0">
<span className="text-xs font-bold text-slate-800">History Playback</span>
<span className="text-[10px] text-slate-500 font-mono">10:45 AM - 02:30 PM</span>
</div>

<div className="flex-1 relative h-8 flex items-center group">

<div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full z-10 ring-2 ring-white cursor-help" title="Harsh Braking"></div>
<div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full z-10 ring-2 ring-white cursor-help" title="Delivery Completed"></div>
<input className="relative z-20 focus:outline-none" max="100" min="0" type="range" value="75"/>

<div className="absolute left-[75%] bottom-full mb-2 -translate-x-1/2 hidden group-hover:block">
<div className="bg-slate-800 text-white text-[10px] py-1 px-2 rounded shadow-lg whitespace-nowrap">
                                14:02 PM • I-95 Exit 4
                            </div>
</div>
</div>
<div className="h-8 w-px bg-gray-200 mx-2"></div>

<div className="flex items-center gap-2 shrink-0">
<span className="text-[10px] font-medium text-slate-500">Speed</span>
<select className="text-xs font-semibold text-slate-700 bg-gray-100 border-none rounded py-1 px-2 focus:ring-0 cursor-pointer hover:bg-gray-200 transition-colors">
<option>1x</option>
<option>2x</option>
<option selected="">4x</option>
</select>
</div>

<button className="text-slate-400 hover:text-slate-600 ml-2">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

    </>
  );
}
