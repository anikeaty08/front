import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-200 bg-white flex flex-col hidden md:flex z-10">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="text-xl font-medium tracking-tighter text-zinc-900">SYS<span className="text-zinc-400">OPS</span></div>
</div>
<div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
<div className="px-3 mb-2">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Overview</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-zinc-100/80 text-zinc-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg text-zinc-700" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Staff Directory
            </a>
<div className="px-3 mt-6 mb-2">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Workflows</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                Automations
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
                Data Sync
            </a>
</div>
<div className="p-4 border-t border-zinc-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-600 hover:text-zinc-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#fafafa]">

<header className="h-16 border-b border-zinc-200 bg-white/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
<div className="flex items-center gap-2 text-zinc-500 w-full max-w-md">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-0 py-1" placeholder="Search staff, automations..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-600 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-zinc-900 rounded-full"></span>
</button>
<div className="h-8 w-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-medium ml-2">
                    A
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-10">
<div className="max-w-6xl mx-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900 mb-1">Command Center</h1>
<p className="text-sm text-zinc-500 font-normal">Manage team access and automated operations.</p>
</div>

<div className="flex items-center gap-3 bg-white border border-zinc-200 px-4 py-2.5 rounded-xl shadow-sm">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Privacy Mode</span>
<span className="text-xs text-zinc-500 font-normal">Hide sensitive store data</span>
</div>

<button aria-checked="true" className="relative inline-flex h-5 w-9 ml-3 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-900 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out translate-x-4"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 flex flex-col gap-6">

<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
<h2 className="text-sm font-medium text-zinc-900">Active Personnel</h2>
<button className="text-xs font-medium text-zinc-900 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> Add Staff
                                </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-zinc-50/50">
<tr>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100">Employee</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100">Role</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100">Access Level</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">ED</div>
<div>
<div className="font-medium text-zinc-900">Elena Davis</div>
<div className="text-xs text-zinc-500 font-normal">elena@company.com</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-zinc-600 font-normal">Operations Manager</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 bg-zinc-100 px-2 py-1 rounded border border-zinc-200/50">Admin</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs text-zinc-600 font-normal">Active</span>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">MR</div>
<div>
<div className="font-medium text-zinc-900">Marcus Reed</div>
<div className="text-xs text-zinc-500 font-normal">marcus@company.com</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-zinc-600 font-normal">Inventory Specialist</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 bg-white px-2 py-1 rounded border border-zinc-200/80">Standard</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs text-zinc-600 font-normal">Active</span>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-50 border border-zinc-200 border-dashed flex items-center justify-center text-xs font-medium text-zinc-400">SJ</div>
<div>
<div className="font-medium text-zinc-500">Sarah Jenkins</div>
<div className="text-xs text-zinc-400 font-normal">sarah@company.com</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-zinc-400 font-normal">Support Agent</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 bg-white px-2 py-1 rounded border border-zinc-200/80 opacity-60">Restricted</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-400 font-normal">Offline</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="border border-zinc-200/80 bg-zinc-50/30 rounded-2xl p-6 relative overflow-hidden group">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-zinc-900">Live Store Analytics</h3>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
</span>
<span className="text-xs font-medium text-zinc-500">Syncing</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 filter blur-[6px] opacity-40 select-none pointer-events-none transition-all duration-500">
<div className="bg-white p-4 rounded-xl border border-zinc-200">
<div className="text-xs text-zinc-500 mb-1">Daily Revenue</div>
<div className="text-xl font-medium text-zinc-900">$12,450.00</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200">
<div className="text-xs text-zinc-500 mb-1">Active Orders</div>
<div className="text-xl font-medium text-zinc-900">142</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200">
<div className="text-xs text-zinc-500 mb-1">Conversion</div>
<div className="text-xl font-medium text-zinc-900">3.2%</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/40 backdrop-blur-[1px]">
<iconify-icon className="text-2xl text-zinc-400 mb-2" icon="solar:eye-closed-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-zinc-900 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">Metrics hidden by Privacy Mode</p>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<h2 className="text-sm font-medium text-zinc-900">Active Automations</h2>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:border-zinc-300 transition-colors group">
<div className="mt-1 h-8 w-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:user-plus-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-medium text-zinc-900 truncate">Staff Onboarding</h3>

<button aria-checked="false" className="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-200 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out translate-x-0"></span>
</button>
</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed mb-3">Auto-provisions accounts and sends welcome packets to new hires.</p>
<div className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:history-linear"></iconify-icon> Last run: 2d ago
                                </div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:border-zinc-300 transition-colors">
<div className="mt-1 h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-medium text-zinc-900 truncate">Inventory Sync</h3>

<button aria-checked="true" className="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-900 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out translate-x-3"></span>
</button>
</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed mb-3">Reconciles local warehouse stock with remote storefronts hourly.</p>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:history-linear"></iconify-icon> Last run: 12m ago
                                </div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:border-zinc-300 transition-colors">
<div className="mt-1 h-8 w-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-medium text-zinc-900 truncate">Weekly Report Gen</h3>

<button aria-checked="true" className="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-900 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out translate-x-3"></span>
</button>
</div>
<p className="text-xs text-zinc-500 font-normal leading-relaxed mb-3">Compiles staff performance and task completion metrics.</p>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:history-linear"></iconify-icon> Next run: Friday
                                </div>
</div>
</div>

<button className="w-full mt-2 py-3 border border-dashed border-zinc-300 rounded-xl text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> Create Workflow
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
