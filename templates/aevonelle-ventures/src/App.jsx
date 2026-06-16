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
      
<div className="flex h-screen w-full">

<aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-950/50 pt-6 pb-4">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded border border-slate-700 bg-slate-900 text-orange-500 shadow-lg shadow-orange-900/10">
<span className="font-semibold text-lg tracking-tighter">O</span>
</div>
<span className="text-slate-100 font-medium tracking-tight">Orbit</span>
</div>
<nav className="flex-1 px-3 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-500/5 border border-orange-500/20 text-orange-500 transition-all duration-200" href="#">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Overview</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-all duration-200" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Projects</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-all duration-200" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Team</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-all duration-200" href="#">
<iconify-icon icon="solar:documents-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Documents</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-all duration-200" href="#">
<iconify-icon icon="solar:graph-new-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Analytics</span>
</a>
</nav>
<div className="mt-auto px-3 pt-6 border-t border-slate-800">
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</a>
<div className="mt-4 flex items-center gap-3 px-3 py-3 rounded-lg border border-slate-800 bg-slate-900/40">
<div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-300">
                        JD
                    </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-200 truncate">Jane Doe</p>
<p className="text-[10px] text-slate-500 truncate">jane@orbit.com</p>
</div>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-950/80 backdrop-blur-md z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
<span className="hover:text-slate-300 cursor-pointer transition-colors">Workspace</span>
<iconify-icon className="opacity-50" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-200 font-medium">Overview</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="h-9 w-64 bg-slate-900/50 border border-slate-800 rounded-lg pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<span className="text-[10px] bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-slate-400">⌘K</span>
</div>
</div>
<button className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:text-orange-500 hover:border-orange-500/30 bg-slate-900/50 transition-all">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
<div className="mx-auto max-w-6xl space-y-10">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="">
<h1 className="text-2xl font-medium text-slate-100 tracking-tight max-w-6xl">Performance</h1>
<p className="mt-1 text-sm text-slate-500">Track your key metrics and project status.</p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center rounded-lg border border-slate-800 bg-slate-900/50 p-1">
<button className="rounded px-3 py-1 text-xs font-medium text-slate-100 bg-slate-800 shadow-sm border border-slate-700">7d</button>
<button className="rounded px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 transition-colors">30d</button>
<button className="rounded px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 transition-colors">All</button>
</div>
<button className="flex items-center gap-2 h-8 px-3 rounded-lg border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-300 hover:border-orange-500/30 hover:text-orange-500 transition-all">
<iconify-icon icon="solar:export-linear" width="14"></iconify-icon>
                                Export
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="group relative rounded-xl border border-slate-800 bg-slate-900/20 p-5 hover:border-slate-700 hover:bg-slate-900/40 transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-black/20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Revenue</span>
<iconify-icon className="text-slate-600 group-hover:text-orange-500 transition-colors" icon="solar:dollar-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-100 tracking-tight">$42,500.00</span>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear" width="12"></iconify-icon> 12%
                                </span>
</div>
<div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[70%] rounded-full"></div>
</div>
</div>

<div className="group relative rounded-xl border border-slate-800 bg-slate-900/20 p-5 hover:border-slate-700 hover:bg-slate-900/40 transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-black/20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Users</span>
<iconify-icon className="text-slate-600 group-hover:text-orange-500 transition-colors" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-100 tracking-tight">8,234</span>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear" width="12"></iconify-icon> 5%
                                </span>
</div>
<div className="mt-4 flex gap-1">
<div className="h-1 w-full bg-orange-500 rounded-full opacity-100"></div>
<div className="h-1 w-full bg-orange-500 rounded-full opacity-60"></div>
<div className="h-1 w-full bg-orange-500 rounded-full opacity-30"></div>
<div className="h-1 w-full bg-slate-800 rounded-full"></div>
</div>
</div>

<div className="group relative rounded-xl border border-slate-800 bg-slate-900/20 p-5 hover:border-slate-700 hover:bg-slate-900/40 transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-black/20">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Bounce Rate</span>
<iconify-icon className="text-slate-600 group-hover:text-orange-500 transition-colors" icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-100 tracking-tight">42.3%</span>
<span className="flex items-center text-xs font-medium text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear" width="12"></iconify-icon> 2%
                                </span>
</div>
<div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden flex justify-end">
<div className="h-full bg-slate-600 w-[42%] rounded-full"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 shadow-lg shadow-black/20 backdrop-blur-sm relative overflow-hidden group">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-slate-200">Revenue Growth</h3>
<button className="text-slate-500 hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="h-64 w-full flex items-end justify-between gap-2 px-2 border-b border-slate-800/50 pb-0">

<div className="hover:bg-orange-500/80 transition-all duration-500 group-hover:h-[45%] group/bar bg-slate-800/30 w-full h-[40%] rounded-t-sm relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">$12k</div>
</div>
<div className="w-full bg-slate-800/30 hover:bg-orange-500/80 transition-all duration-500 delay-75 rounded-t-sm h-[65%] group-hover:h-[68%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">$28k</div>
</div>
<div className="w-full bg-slate-800/30 hover:bg-orange-500/80 transition-all duration-500 delay-100 rounded-t-sm h-[50%] group-hover:h-[55%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">$18k</div>
</div>
<div className="w-full bg-slate-800/30 hover:bg-orange-500/80 transition-all duration-500 delay-150 rounded-t-sm h-[80%] group-hover:h-[85%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">$42k</div>
</div>
<div className="w-full bg-slate-800/30 hover:bg-orange-500/80 transition-all duration-500 delay-200 rounded-t-sm h-[60%] group-hover:h-[63%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">$24k</div>
</div>
<div className="w-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)] rounded-t-sm h-[90%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-100 transition-opacity whitespace-nowrap border border-slate-700 shadow-xl">$56k</div>
</div>
<div className="w-full bg-slate-800/30 hover:bg-orange-500/80 transition-all duration-500 delay-300 rounded-t-sm h-[75%] group-hover:h-[78%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">$38k</div>
</div>
</div>
<div className="flex justify-between mt-2 px-2 text-[10px] text-slate-500 font-medium">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span className="text-orange-500">Sat</span><span>Sun</span>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/20 overflow-hidden shadow-lg shadow-black/20">
<div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-200">Recent Transactions</h3>
<button className="text-xs text-orange-500 hover:text-orange-400 font-medium">View All</button>
</div>
<div className="divide-y divide-slate-800/50">

<div className="group flex items-center justify-between px-6 py-4 hover:bg-slate-900/50 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200 transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Stripe Payment</p>
<p className="text-xs text-slate-500">Today, 2:34 PM</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-100">+$120.00</p>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                Completed
                                            </span>
</div>
</div>

<div className="group flex items-center justify-between px-6 py-4 hover:bg-slate-900/50 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200 transition-colors">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Server Upgrade</p>
<p className="text-xs text-slate-500">Yesterday, 9:12 AM</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-100">-$450.00</p>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium bg-slate-700/30 text-slate-400 border border-slate-700">
                                                Processing
                                            </span>
</div>
</div>

<div className="group flex items-center justify-between px-6 py-4 hover:bg-slate-900/50 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200 transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-200">New Subscriber</p>
<p className="text-xs text-slate-500">Oct 24, 4:00 PM</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-100">+$29.00</p>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                Active
                                            </span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 shadow-lg shadow-black/20">
<h3 className="text-sm font-medium text-slate-200 mb-4">Quick Deployment</h3>
<div className="space-y-4">
<label className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50 cursor-pointer hover:border-orange-500/50 transition-all group">
<div className="mt-0.5 relative flex items-center justify-center h-4 w-4 rounded border border-slate-600 bg-transparent group-hover:border-orange-500">
<input className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" name="deploy" type="radio"/>
<div className="h-2 w-2 rounded-sm bg-orange-500 scale-0 peer-checked:scale-100 transition-transform"></div>
</div>
<div>
<span className="block text-sm font-medium text-slate-300 group-hover:text-slate-100">Production</span>
<span className="block text-xs text-slate-500">v2.4.0 (Stable)</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50 cursor-pointer hover:border-orange-500/50 transition-all group">
<div className="mt-0.5 relative flex items-center justify-center h-4 w-4 rounded border border-slate-600 bg-transparent group-hover:border-orange-500">
<input checked="" className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" name="deploy" type="radio"/>
<div className="h-2 w-2 rounded-sm bg-orange-500 scale-0 peer-checked:scale-100 transition-transform"></div>
</div>
<div>
<span className="block text-sm font-medium text-slate-300 group-hover:text-slate-100">Staging</span>
<span className="block text-xs text-slate-500">v2.5.0-beta.1</span>
</div>
</label>
</div>
<button className="mt-4 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-lg shadow shadow-orange-500/20 transition-all active:scale-[0.98]">
                                    Deploy Now
                                </button>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 shadow-lg shadow-black/20">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-slate-200">Storage Usage</h3>
<span className="text-xs text-orange-500 font-medium">Upgrade</span>
</div>
<div className="relative h-32 w-32 mx-auto my-4 flex items-center justify-center">
<svg className="h-full w-full -rotate-90" viewbox="0 0 36 36">

<path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>

<path className="text-orange-500 drop-shadow-[0_0_4px_rgba(249,115,22,0.4)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="75, 100" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-semibold text-slate-100 tracking-tight">75%</span>
<span className="text-[10px] text-slate-500 uppercase font-medium">Used</span>
</div>
</div>
<p className="text-center text-xs text-slate-400">750GB of 1TB used</p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/20 p-5 shadow-lg shadow-black/20">
<h3 className="text-sm font-medium text-slate-200 mb-4">Team Members</h3>
<div className="flex -space-x-2 overflow-hidden mb-4 pl-1">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 grayscale hover:grayscale-0 transition-all duration-300" src="https://i.pravatar.cc/100?img=33"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 grayscale hover:grayscale-0 transition-all duration-300" src="https://i.pravatar.cc/100?img=47"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 grayscale hover:grayscale-0 transition-all duration-300" src="https://i.pravatar.cc/100?img=12"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 grayscale hover:grayscale-0 transition-all duration-300" src="https://i.pravatar.cc/100?img=5"/>
<div className="h-8 w-8 rounded-full ring-2 ring-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-medium text-slate-300 cursor-pointer hover:bg-slate-700 hover:text-white transition-colors">
                                        +3
                                    </div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-dashed border-slate-700 text-xs font-medium text-slate-400 hover:text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-all">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                                    Invite Member
                                </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
