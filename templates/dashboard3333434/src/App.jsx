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
      

<div className="md:hidden fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 flex items-center justify-between p-4">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-white rounded flex items-center justify-center text-neutral-950 font-bold text-xs tracking-tighter">C</div>
<span className="font-semibold text-white tracking-tight">CRM</span>
</div>
<button className="text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>

<aside className="hidden md:flex flex-col w-64 bg-neutral-950 border-r border-neutral-900 h-full fixed left-0 top-0 z-40">

<div className="h-16 flex items-center px-6 border-b border-neutral-900/50">
<div className="flex items-center gap-3">
<div className="h-7 w-7 bg-white rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
<span className="font-bold text-neutral-950 text-sm tracking-tighter">A</span>
</div>
<span className="font-medium text-sm text-neutral-200 tracking-tight">AuthPanel</span>
</div>
</div>

<nav className="flex-1 px-3 py-6 space-y-0.5 overflow-y-auto">
<div className="px-3 mb-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">Platform</div>
<a className="group flex items-center px-3 py-2 text-sm font-medium bg-neutral-900 text-white rounded-md border border-neutral-800/50 shadow-sm relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="iconify mr-3 text-neutral-100" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18"></span>
                Dashboard
            </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<span className="iconify mr-3 text-neutral-500 group-hover:text-neutral-300" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18"></span>
                Users
            </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<span className="iconify mr-3 text-neutral-500 group-hover:text-neutral-300" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="18"></span>
                Authentication
            </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<span className="iconify mr-3 text-neutral-500 group-hover:text-neutral-300" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
                Content CRM
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">Settings</div>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<span className="iconify mr-3 text-neutral-500 group-hover:text-neutral-300" data-icon="lucide:key" data-strokeWidth="1.5" data-width="18"></span>
                API Keys
            </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50 rounded-md transition-all" href="#">
<span className="iconify mr-3 text-neutral-500 group-hover:text-neutral-300" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="18"></span>
                Preferences
            </a>
</nav>

<div className="p-4 border-t border-neutral-900">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-neutral-600 flex items-center justify-center">
<span className="text-xs font-medium text-white">AD</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white group-hover:text-neutral-200 truncate">Admin User</p>
<p className="text-xs text-neutral-500 truncate">admin@crm.io</p>
</div>
<span className="iconify text-neutral-500" data-icon="lucide:chevron-up" data-width="16"></span>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden relative bg-neutral-950">

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.5'}}></div>

<header className="h-16 flex items-center justify-between px-6 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-sm z-10">
<div className="flex items-center gap-4">
<span className="text-neutral-500 text-sm">Dashboard</span>
<span className="text-neutral-700 text-sm">/</span>
<span className="text-neutral-200 text-sm font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">

<div className="relative hidden sm:block group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-neutral-300 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="bg-neutral-900/50 border border-neutral-800 text-neutral-200 text-sm rounded-md pl-9 pr-4 py-1.5 focus:outline-none focus:border-neutral-600 focus:bg-neutral-900 w-64 transition-all placeholder:text-neutral-600" placeholder="Search users..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="hidden sm:inline-flex items-center h-5 border border-neutral-800 rounded bg-neutral-900 px-1.5 font-sans text-[10px] font-medium text-neutral-500">⌘K</kbd>
</div>
</div>
<div className="h-8 w-[1px] bg-neutral-800 mx-2"></div>
<button className="text-neutral-500 hover:text-white transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-neutral-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 z-10 custom-scrollbar">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-xl font-semibold text-white tracking-tight">System Overview</h1>
<p className="text-sm text-neutral-500 mt-1">Monitor user authentication and content metrics.</p>
</div>
<div className="flex gap-3">
<button className="px-3 py-1.5 text-sm font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-md hover:bg-neutral-800 hover:border-neutral-700 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                            Export
                        </button>
<button className="px-3 py-1.5 text-sm font-medium text-neutral-950 bg-white border border-transparent rounded-md hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                            Add User
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-white" data-icon="lucide:users" data-width="64"></span>
</div>
<div className="flex items-center justify-between mb-4">
<span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">Total Users</span>
<span className="text-emerald-500 text-xs font-medium bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +12%
                            </span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">24,592</div>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-2/3 rounded-full"></div>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors group relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">Active Sessions</span>
<span className="text-neutral-500 text-xs font-medium flex items-center gap-1">
                                Live
                                <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-glow"></span>
</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">1,843</div>
<div className="mt-4 flex -space-x-2">
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-neutral-900 grayscale opacity-70" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-neutral-900 grayscale opacity-70" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-neutral-900 grayscale opacity-70" src="https://i.pravatar.cc/100?img=3"/>
<div className="h-6 w-6 rounded-full ring-2 ring-neutral-900 bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400">+42</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors group relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">Security Score</span>
<span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded">High</span>
</div>
<div className="flex items-end gap-2">
<div className="text-2xl font-semibold text-white tracking-tight">98.2%</div>
<span className="text-neutral-500 text-xs mb-1.5">success rate</span>
</div>
<div className="mt-4 flex gap-1">
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500/30 rounded-full"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-neutral-900/20 border border-neutral-800 rounded-lg overflow-hidden flex flex-col">
<div className="p-4 border-b border-neutral-800 flex items-center justify-between">
<h2 className="text-sm font-medium text-white">Recent Authentications</h2>
<div className="flex items-center gap-2">
<button className="text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
</button>
<button className="text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-800 text-xs text-neutral-500 font-medium uppercase tracking-wider bg-neutral-900/30">
<th className="p-4 w-10">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-700 rounded bg-neutral-800 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<span className="iconify text-black hidden" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</th>
<th className="p-4 font-normal">User</th>
<th className="p-4 font-normal">Method</th>
<th className="p-4 font-normal">Status</th>
<th className="p-4 font-normal text-right">Activity</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-neutral-800">

<tr className="group hover:bg-neutral-800/30 transition-colors">
<td className="p-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-700 rounded bg-neutral-800 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<span className="iconify text-black hidden" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400 border border-neutral-700">SC</div>
<div>
<div className="text-neutral-200 font-medium text-sm">Sarah Connors</div>
<div className="text-neutral-500 text-xs">sarah@skynet.com</div>
</div>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify" data-icon="lucide:github" data-width="14"></span>
                                                OAuth
                                            </div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Verified
                                            </span>
</td>
<td className="p-4 text-right text-neutral-500 text-xs">2m ago</td>
</tr>

<tr className="group hover:bg-neutral-800/30 transition-colors">
<td className="p-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-700 rounded bg-neutral-800 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<span className="iconify text-black hidden" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<img alt="User" className="h-8 w-8 rounded-full border border-neutral-700 grayscale opacity-80" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="text-neutral-200 font-medium text-sm">Mike Ross</div>
<div className="text-neutral-500 text-xs">mike@pearson.com</div>
</div>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                                                Magic Link
                                            </div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-800 text-neutral-400 border border-neutral-700">
                                                Pending
                                            </span>
</td>
<td className="p-4 text-right text-neutral-500 text-xs">15m ago</td>
</tr>

<tr className="group hover:bg-neutral-800/30 transition-colors">
<td className="p-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-700 rounded bg-neutral-800 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<span className="iconify text-black hidden" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400 border border-neutral-700">JD</div>
<div>
<div className="text-neutral-200 font-medium text-sm">John Doe</div>
<div className="text-neutral-500 text-xs">john@example.com</div>
</div>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify" data-icon="lucide:key" data-width="14"></span>
                                                SSO
                                            </div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                                Failed
                                            </span>
</td>
<td className="p-4 text-right text-neutral-500 text-xs">1h ago</td>
</tr>

<tr className="group hover:bg-neutral-800/30 transition-colors">
<td className="p-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-700 rounded bg-neutral-800 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<span className="iconify text-black hidden" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
</label>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<img alt="User" className="h-8 w-8 rounded-full border border-neutral-700 grayscale opacity-80" src="https://i.pravatar.cc/150?img=5"/>
<div>
<div className="text-neutral-200 font-medium text-sm">Jessica Lee</div>
<div className="text-neutral-500 text-xs">jess@design.co</div>
</div>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs">
<span className="iconify" data-icon="lucide:chrome" data-width="14"></span>
                                                Google
                                            </div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Verified
                                            </span>
</td>
<td className="p-4 text-right text-neutral-500 text-xs">3h ago</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-neutral-800 bg-neutral-900/30 flex justify-center">
<button className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                                View all logs <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
</div>

<div className="space-y-6">

<div className="bg-neutral-900/20 border border-neutral-800 rounded-lg p-5">
<h3 className="text-sm font-medium text-white mb-4">Security Status</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-400">2FA Adoption</span>
<span className="text-white">64%</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '64%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-400">Password Strength</span>
<span className="text-white">88%</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-5 border-t border-neutral-800">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-500">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="16"></span>
</div>
<div>
<p className="text-xs font-medium text-neutral-200">Unusual Traffic</p>
<p className="text-[11px] text-neutral-500 leading-relaxed mt-0.5">Spike in failed login attempts from IP range 192.168.x.x detected 10m ago.</p>
<button className="mt-2 text-[10px] font-medium text-amber-500 hover:text-amber-400 flex items-center gap-1">
                                            Investigate <span className="iconify" data-icon="lucide:arrow-right" data-width="10"></span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-800 rounded-lg p-5">
<h3 className="text-sm font-medium text-white mb-4">Quick Configuration</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-300">Maintenance Mode</span>
<span className="text-[10px] text-neutral-500">Disable new logins</span>
</div>
<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-neutral-400 border-2 border-neutral-900 appearance-none cursor-pointer transition-all duration-300" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-300">Allow Signups</span>
<span className="text-[10px] text-neutral-500">Public registration</span>
</div>
<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-neutral-900 appearance-none cursor-pointer transition-all duration-300 right-0" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-white cursor-pointer" htmlFor="toggle2"></label>
</input></div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-12 mb-6 border-t border-neutral-900 pt-6 flex items-center justify-between">
<p className="text-xs text-neutral-600">© 2023 SecureAuth Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-neutral-600 hover:text-neutral-400" href="#">Privacy</a>
<a className="text-xs text-neutral-600 hover:text-neutral-400" href="#">Terms</a>
<a className="text-xs text-neutral-600 hover:text-neutral-400" href="#">Status</a>
</div>
</footer>
</div>
</main>

    </>
  );
}
