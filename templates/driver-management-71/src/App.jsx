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
      

<nav className="w-16 h-full border-r border-slate-200 flex flex-col items-center py-6 bg-white z-20 shadow-sm">
<div className="mb-8 font-bold tracking-tighter text-emerald-800 text-lg">GE</div>
<div className="flex flex-col gap-6 w-full items-center">
<button className="text-slate-400 hover:text-emerald-700 transition-colors p-2">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</button>
<button className="text-emerald-700 bg-emerald-50 rounded-lg p-2">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-emerald-700 transition-colors p-2">
<iconify-icon height="24" icon="solar:chart-2-linear" width="24"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-emerald-700 transition-colors p-2">
<iconify-icon height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</button>
</div>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-slate-400 hover:text-emerald-700 transition-colors p-2">
<iconify-icon height="24" icon="solar:settings-linear" width="24"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-xs text-white font-medium">
                AD
            </div>
</div>
</nav>

<main className="flex-1 flex overflow-hidden">

<div className="w-80 bg-white border-r border-slate-200 flex flex-col z-10">
<div className="p-4 border-b border-slate-100">
<div className="flex items-center justify-between mb-4">
<h2 className="font-semibold text-slate-900">Drivers</h2>
<button className="text-emerald-700 hover:bg-emerald-50 p-1.5 rounded transition">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Search name, VIN, ID..." type="text"/>
</div>

<div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
<span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 cursor-pointer">All</span>
<span className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100 cursor-pointer">Pending</span>
<span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 cursor-pointer">Active</span>
<span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 cursor-pointer">Suspended</span>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer group bg-emerald-50/30 border-l-2 border-l-emerald-600">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">

<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-slate-900 truncate">Faisal Al-Sayed</h3>
<span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-medium">Active</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<p className="text-xs text-slate-500 truncate">Toyota Camry • LGD-284</p>
</div>
</div>
</div>
</div>

<div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer group border-l-2 border-l-transparent">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-slate-900 truncate">Omar Khalil</h3>
<span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-medium">Doc Review</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<p className="text-xs text-slate-500 truncate">Registration Pending</p>
</div>
</div>
</div>
</div>

<div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer group border-l-2 border-l-transparent">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<span className="font-bold text-xs">YA</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-slate-900 truncate">Youssef Ahmed</h3>
<span className="text-[10px] text-red-700 bg-red-50 px-1.5 py-0.5 rounded font-medium">Suspended</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<p className="text-xs text-red-500 truncate">Safety Incident #992</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-slate-50 h-full overflow-y-auto p-6">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-slate-200 p-1">
<img className="w-full h-full object-cover rounded-lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Faisal Al-Sayed</h1>
<iconify-icon className="text-emerald-500" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:phone-linear"></iconify-icon> +966 54 123 4567
                            </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Joined Oct 2023
                            </span>
<span className="flex items-center gap-1 text-emerald-700 font-medium">
<iconify-icon icon="solar:crown-star-linear"></iconify-icon> Tier: Gold
                            </span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg shadow-sm hover:bg-slate-50 text-sm font-medium flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon> Message
                    </button>
<button className="px-3 py-2 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 text-sm font-medium flex items-center gap-2">
                        Actions
                        <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-8 space-y-6">

<div className="grid grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Safety Score</div>
<div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                98 <span className="text-[10px] font-normal text-emerald-600 bg-emerald-50 px-1.5 rounded">+2%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Acceptance Rate</div>
<div className="text-xl font-bold text-slate-900">84%</div>
<div className="text-[10px] text-amber-600 mt-1">Below target (90%)</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Driver Wallet</div>
<div className="text-xl font-bold text-slate-900">SAR 1,240</div>
<div className="text-[10px] text-slate-400 mt-1">Next payout: Tue</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Hours Online</div>
<div className="text-xl font-bold text-slate-900">32h <span className="text-xs font-normal text-slate-400">/ 60h</span></div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '55%'}}></div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="border-b border-slate-100 px-4">
<div className="flex gap-6">
<button className="py-4 text-sm font-medium text-emerald-700 border-b-2 border-emerald-600">Overview</button>
<button className="py-4 text-sm font-medium text-slate-500 hover:text-slate-800 transition">Documents <span className="bg-amber-100 text-amber-700 px-1.5 rounded text-[10px] ml-1">1 review</span></button>
<button className="py-4 text-sm font-medium text-slate-500 hover:text-slate-800 transition">Vehicle</button>
<button className="py-4 text-sm font-medium text-slate-500 hover:text-slate-800 transition">Trips &amp; Logs</button>
</div>
</div>

<div className="p-6">

<div className="mb-8">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Lifecycle Status</h3>
<div className="flex items-center w-full">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-1 ring-4 ring-white border border-emerald-200">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-emerald-700">Pending</span>
</div>
<div className="h-0.5 flex-1 bg-emerald-500"></div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white mb-1 shadow-md ring-4 ring-emerald-50">
<iconify-icon icon="solar:user-check-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-emerald-700">Active</span>
</div>
<div className="h-0.5 flex-1 bg-slate-200"></div>
<div className="flex flex-col items-center opacity-50">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-1 border border-slate-200">
<iconify-icon icon="solar:forbidden-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-500">Suspended</span>
</div>
<div className="h-0.5 flex-1 bg-slate-200"></div>
<div className="flex flex-col items-center opacity-50">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-1 border border-slate-200">
<iconify-icon icon="solar:close-square-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-500">Blocked</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Required Documents</h3>
<button className="text-xs text-emerald-700 font-medium hover:underline">View all uploads</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-3 border border-slate-200 rounded-lg flex items-start gap-3 bg-slate-50/50">
<div className="p-2 bg-emerald-100 text-emerald-700 rounded-md">
<iconify-icon icon="solar:card-id-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-700">National ID / Iqama</span>
<span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200">Verified</span>
</div>
<p className="text-xs text-slate-400">Expires: 12 Oct 2025</p>
</div>
</div>

<div className="p-3 border border-amber-200 rounded-lg flex items-start gap-3 bg-amber-50/50">
<div className="p-2 bg-amber-100 text-amber-700 rounded-md">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-700">Vehicle Insurance</span>
<span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded border border-amber-200">Appeal</span>
</div>
<p className="text-xs text-slate-500">Resubmitted 2h ago. "Blurry image fixed."</p>
<div className="flex gap-2 mt-2">
<button className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded shadow-sm hover:text-emerald-700">View</button>
<button className="text-[10px] bg-emerald-600 text-white px-2 py-1 rounded shadow-sm hover:bg-emerald-700">Approve</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-semibold text-slate-900">Primary Vehicle</h3>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Sedan • 2022</span>
</div>
<div className="flex gap-6 items-center">
<div className="w-32 h-20 bg-slate-100 rounded-lg flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:car-linear" width="40"></iconify-icon>
</div>
<div className="flex-1 grid grid-cols-2 gap-y-4 gap-x-8">
<div>
<div className="text-[10px] uppercase text-slate-400 font-medium tracking-wider">Model</div>
<div className="text-sm font-medium text-slate-800">Toyota Camry SE</div>
</div>
<div>
<div className="text-[10px] uppercase text-slate-400 font-medium tracking-wider">Plate</div>
<div className="text-sm font-medium text-slate-800">LGD-284</div>
</div>
<div>
<div className="text-[10px] uppercase text-slate-400 font-medium tracking-wider">VIN</div>
<div className="text-sm font-family-mono text-slate-600">JT1B32K...8921</div>
</div>
<div>
<div className="text-[10px] uppercase text-slate-400 font-medium tracking-wider">Services</div>
<div className="flex gap-1 mt-1">
<span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] border border-emerald-100 rounded">Taxi</span>
<span className="px-1.5 py-0.5 bg-purple-50 text-purple-700 text-[10px] border border-purple-100 rounded">Comfort</span>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100">
<h4 className="text-xs font-medium text-slate-700 mb-2">Feature Catalog</h4>
<div className="flex gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-slate-200 bg-white text-xs text-slate-600">
<iconify-icon icon="solar:wheelchair-linear"></iconify-icon> Wheelchair
                                </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-xs text-emerald-700">
<iconify-icon icon="solar:cat-linear"></iconify-icon> Pet Friendly
                                </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-slate-200 bg-white text-xs text-slate-400 opacity-50 line-through decoration-slate-400">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> EV
                                </span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-6">

<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:wallet-money-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-slate-400 text-xs font-medium mb-1">Current Balance</h3>
<div className="text-3xl font-bold tracking-tight mb-4">SAR 1,240.50</div>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-xs">
<span className="text-slate-400">Pending Trips</span>
<span>SAR 120.00</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">Deductions (Commission)</span>
<span className="text-red-400">- SAR 45.00</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">Incentives (Wk 42)</span>
<span className="text-emerald-400">+ SAR 50.00</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-semibold transition">Payout Now</button>
<button className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white">
<iconify-icon icon="solar:history-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Service Eligibility</h3>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-emerald-50 text-emerald-700">
<iconify-icon icon="solar:taxi-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">Standard Taxi</span>
<span className="text-[10px] text-slate-400">Base Commission 15%</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-purple-50 text-purple-700">
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">Premium / XL</span>
<span className="text-[10px] text-slate-400">Requires 4.8+ Rating</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
</label>
</div>
<div className="flex items-center justify-between opacity-60">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-blue-50 text-blue-700">
<iconify-icon icon="solar:plane-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">Airport Pickup</span>
<span className="text-[10px] text-red-500">Permit Expired</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" disabled="" type="checkbox"/>
<div className="w-8 h-4 bg-slate-200 rounded-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3"></div>
</label>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-3">Operating Rules</h3>
<div className="mb-4">
<span className="text-xs text-slate-500 block mb-1">Assigned Region</span>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded border border-slate-200 bg-slate-50 text-xs text-slate-600">Riyadh North</span>
<span className="px-2 py-1 rounded border border-slate-200 bg-slate-50 text-xs text-slate-600">Airport Zone</span>
</div>
</div>
<div>
<span className="text-xs text-slate-500 block mb-1">Fatigue Monitoring</span>
<div className="flex justify-between items-end mb-1">
<span className="text-xs font-medium text-slate-700">8h 45m shift</span>
<span className="text-[10px] text-amber-600">Warning</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
<p className="text-[10px] text-slate-400 mt-1">Must rest in 1h 15m</p>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-900">Loyalty Points</h3>
<p className="text-[10px] text-slate-500">Redeemable for fuel/maintenance</p>
</div>
<div className="text-right">
<span className="text-lg font-bold text-emerald-700 block">4,200</span>
<span className="text-[10px] text-emerald-600">PTS</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
