import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
ios: {
bg: '#F5F5F7',
card: '#FFFFFF',
text: '#1D1D1F',
subtext: '#86868B',
darkBg: '#000000',
darkCard: '#1C1C1E',
darkText: '#F5F5F7',
}
},
boxShadow: {
'ios': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'ios-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[280px] flex flex-col justify-between flex-shrink-0 z-30 relative ml-2 my-2 rounded-2xl">

<div className="absolute inset-0 bg-white/80 dark:bg-ios-darkCard/80 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl shadow-sm"></div>
<div className="relative z-10 h-full flex flex-col p-4">

<div className="px-3 pt-4 pb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black shadow-lg">
<iconify-icon icon="solar:command-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<h1 className="text-lg font-bold tracking-tighter leading-none text-black dark:text-white font-geist">NOVARA</h1>
<span className="text-[10px] font-medium tracking-widest uppercase text-gray-500 font-geist" style={{}}>Workspace</span>
</div>
</div>
</div>

<div className="space-y-6 flex-1 overflow-y-auto hide-scrollbar">
<div>
<p className="px-3 text-[10px] font-semibold text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest font-geist" style={{}}>Main</p>
<nav className="space-y-1">
<a className="nav-item active flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors font-geist" href="#">
<iconify-icon className="text-black dark:text-white opacity-80" icon="solar:widget-bold-duotone" width="20"></iconify-icon>
                            Dashboard
                        </a>
<a className="nav-item text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors font-geist" href="#" style={{}}>
<iconify-icon className="opacity-70" icon="solar:users-group-rounded-bold-duotone" width="20"></iconify-icon>
                            Agents
                        </a>
<a className="nav-item text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors font-geist" href="#" style={{}}>
<iconify-icon className="opacity-70" icon="solar:phone-bold-duotone" width="20"></iconify-icon>
                            Calls
                        </a>
</nav>
</div>
<div>
<p className="px-3 text-[10px] font-semibold text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest font-geist" style={{}}>Analytics</p>
<nav className="space-y-1">
<a className="nav-item text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group" href="#" style={{}}>
<div className="flex items-center gap-3 font-geist">
<iconify-icon className="opacity-70" icon="solar:chart-2-bold-duotone" width="20"></iconify-icon>
                                Reports
                            </div>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</a>
<a className="nav-item text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors font-geist" href="#" style={{}}>
<iconify-icon className="opacity-70" icon="solar:wallet-money-bold-duotone" width="20"></iconify-icon>
                            Finance
                        </a>
</nav>
</div>
</div>

<div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 space-y-3" style={{}}>
<button className="w-full nav-item flex items-center gap-3 px-3 py-2 rounded-xl transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-600" style={{}}>
<img alt="User" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-gray-900 dark:text-white truncate font-geist" style={{}}>John Doe</p>
<p className="text-[10px] text-gray-400 truncate font-geist" style={{}}>Admin</p>
</div>
<iconify-icon className="text-gray-400 group-hover:text-black dark:group-hover:text-white" icon="solar:settings-bold-duotone" style={{}}></iconify-icon>
</button>

<div className="dark:bg-white/5 flex bg-gray-100/50 rounded-lg pt-1 pr-1 pb-1 pl-1 relative">
<div className="absolute w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white dark:bg-gray-700 rounded-[6px] shadow-sm top-1 left-1 transition-all duration-300 dark:translate-x-full dark:left-auto dark:right-1" id="toggle-indicator" style={{}}></div>
<button className="flex-1 py-1.5 flex justify-center relative z-10 text-gray-500 dark:text-gray-400 active:text-black" onclick="document.documentElement.classList.remove('dark'); document.documentElement.classList.add('light')" style={{}}>
<iconify-icon icon="solar:sun-bold-duotone" width="16"></iconify-icon>
</button>
<button className="flex-1 py-1.5 flex justify-center relative z-10 text-gray-500 dark:text-gray-400 active:text-white" onclick="document.documentElement.classList.add('dark'); document.documentElement.classList.remove('light')" style={{}}>
<iconify-icon icon="solar:moon-bold-duotone" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">

<header className="h-16 px-8 flex items-center justify-between flex-shrink-0 z-20">

<div className="flex items-center gap-2 text-sm">
<span className="text-gray-400 dark:text-gray-500 font-geist" style={{}}>Overview</span>
<span className="text-gray-300 dark:text-gray-700 font-geist" style={{}}>/</span>
<span className="font-semibold text-gray-900 dark:text-white font-geist" style={{}}>Dashboard</span>
</div>

<div className="flex items-center gap-4">

<div className="relative group w-64">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" style={{}}>
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="block w-full pl-9 pr-3 py-2 border-none rounded-xl leading-5 bg-white dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 sm:text-sm shadow-sm transition-all" placeholder="Search..." style={{}} type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-xl bg-white dark:bg-white/10 text-gray-500 hover:text-black dark:hover:text-white shadow-sm hover:shadow transition-all relative" style={{}}>
<iconify-icon icon="solar:bell-bold-duotone" width="18"></iconify-icon>
<span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
</button>
<button className="btn-ios px-4 py-2 rounded-xl text-xs font-semibold shadow-lg shadow-gray-200 dark:shadow-none flex items-center gap-2 transition-transform active:scale-95 font-geist" style={{}}>
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        New Campaign
                    </button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden p-8 pt-2">
<div className="max-w-[1400px] mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="border-gradient rounded-3xl p-5 shadow-ios hover:shadow-ios-hover transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white" style={{}}>
<iconify-icon icon="solar:call-chat-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 font-geist">+12%</span>
</div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400 font-geist" style={{}}>Total Calls</p>
<h3 className="text-2xl tracking-tight text-gray-900 dark:text-white mt-1 font-space-grotesk font-semibold" style={{}}>1,248</h3>
</div>

<div className="border-gradient rounded-3xl p-5 shadow-ios hover:shadow-ios-hover transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white" style={{}}>
<iconify-icon icon="solar:clock-circle-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 font-geist">-5%</span>
</div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400 font-geist" style={{}}>Avg Duration</p>
<h3 className="text-2xl tracking-tight text-gray-900 dark:text-white mt-1 font-space-grotesk font-semibold" style={{}}>4m 12s</h3>
</div>

<div className="border-gradient rounded-3xl p-5 shadow-ios hover:shadow-ios-hover transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white" style={{}}>
<iconify-icon icon="solar:user-speak-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400 font-geist" style={{}}>0%</span>
</div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400 font-geist" style={{}}>Active Agents</p>
<h3 className="text-2xl tracking-tight text-gray-900 dark:text-white mt-1 font-space-grotesk font-semibold" style={{}}>24</h3>
</div>

<div className="rounded-3xl p-5 bg-black text-white dark:bg-white dark:text-black shadow-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 dark:bg-gray-200 rounded-full blur-3xl -mr-16 -mt-16 opacity-50" style={{}}></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="p-2.5 rounded-xl bg-white/10 dark:bg-black/5 backdrop-blur-sm">
<iconify-icon icon="solar:wallet-bold-duotone" width="20"></iconify-icon>
</div>
</div>
<div className="">
<p className="text-sm font-medium opacity-70 font-geist">Revenue</p>
<h3 className="text-2xl tracking-tight mt-1 font-space-grotesk font-semibold" style={{}}>$12,450</h3>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border-gradient rounded-3xl p-6 shadow-ios">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight font-geist" style={{}}>Analytics</h3>
<p className="text-xs text-gray-500 mt-1 font-geist" style={{}}>Engagement over time</p>
</div>
<div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-lg" style={{}}>
<button className="px-3 py-1 bg-white dark:bg-gray-700 rounded-md shadow-sm text-xs font-semibold text-black dark:text-white font-geist" style={{}}>Weekly</button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors font-geist" style={{}}>Monthly</button>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-3 px-2">

<div className="w-full bg-gray-100 dark:bg-white/5 rounded-t-lg h-[40%] hover:bg-gray-300 dark:hover:bg-white/20 transition-all cursor-pointer relative group" style={{}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity font-geist">40%</div>
</div>
<div className="w-full bg-gray-100 dark:bg-white/5 rounded-t-lg h-[65%] hover:bg-gray-300 dark:hover:bg-white/20 transition-all cursor-pointer relative group" style={{}}></div>
<div className="w-full bg-gray-100 dark:bg-white/5 rounded-t-lg h-[45%] hover:bg-gray-300 dark:hover:bg-white/20 transition-all cursor-pointer relative group" style={{}}></div>

<div className="w-full bg-gradient-to-t from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 rounded-t-lg h-[80%] relative shadow-lg shadow-gray-200 dark:shadow-none" style={{}}>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl flex flex-col items-center min-w-[60px] font-geist" style={{}}>
                                    2,400
                                    <div className="w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-100 dark:border-gray-700 absolute -bottom-1 rotate-45" style={{}}></div>
</div>
</div>
<div className="w-full bg-gray-100 dark:bg-white/5 rounded-t-lg h-[55%] hover:bg-gray-300 dark:hover:bg-white/20 transition-all cursor-pointer relative group" style={{}}></div>
<div className="w-full bg-gray-100 dark:bg-white/5 rounded-t-lg h-[35%] hover:bg-gray-300 dark:hover:bg-white/20 transition-all cursor-pointer relative group" style={{}}></div>
<div className="w-full bg-gray-100 dark:bg-white/5 rounded-t-lg h-[70%] hover:bg-gray-300 dark:hover:bg-white/20 transition-all cursor-pointer relative group" style={{}}></div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-medium text-gray-400 uppercase tracking-wider px-2" style={{}}>
<span className="font-geist">Mon</span><span className="font-geist">Tue</span><span className="font-geist">Wed</span><span className="font-geist">Thu</span><span className="font-geist">Fri</span><span className="font-geist">Sat</span><span className="font-geist">Sun</span>
</div>
</div>

<div className="space-y-6">

<div className="border-gradient rounded-3xl p-6 shadow-ios h-full flex flex-col">
<h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 font-geist" style={{}}>Agent Status</h3>
<div className="flex-1 flex items-center justify-center relative">
<div className="relative w-40 h-40">
<svg className="w-full h-full rotate-[-90deg]" viewbox="0 0 36 36">
<path className="text-gray-100 dark:text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" style={{}}></path>
<path className="text-gray-800 dark:text-white" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="70, 100" strokeLinecap="round" strokeWidth="4" style={{}}></path>
<path className="text-gray-400 dark:text-gray-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="20, 100" stroke-dashoffset="-75" strokeLinecap="round" strokeWidth="4" style={{}}></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl text-gray-900 dark:text-white tracking-tighter font-space-grotesk font-semibold" style={{}}>92%</span>
<span className="text-[10px] text-gray-400 uppercase font-semibold font-geist" style={{}}>Online</span>
</div>
</div>
</div>
<div className="mt-6 flex justify-between px-4">
<div className="text-center">
<span className="block w-2 h-2 bg-gray-900 dark:bg-white rounded-full mx-auto mb-1" style={{}}></span>
<span className="text-xs text-gray-500 font-geist" style={{}}>Busy</span>
</div>
<div className="text-center">
<span className="block w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-1" style={{}}></span>
<span className="text-xs text-gray-500 font-geist" style={{}}>Idle</span>
</div>
<div className="text-center">
<span className="block w-2 h-2 bg-gray-100 dark:bg-white/10 rounded-full mx-auto mb-1" style={{}}></span>
<span className="text-xs text-gray-500 font-geist" style={{}}>Offline</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">

<div className="lg:col-span-2 border-gradient rounded-3xl overflow-hidden shadow-ios flex flex-col">
<div className="px-6 py-5 border-b border-gray-100 dark:border-white/5 flex justify-between items-center" style={{}}>
<h3 className="text-base font-bold text-gray-900 dark:text-white font-geist" style={{}}>Recent Calls</h3>
<button className="text-xs font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors font-geist" style={{}}>See All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-gray-50/50 dark:bg-white/5" style={{}}>
<tr className="text-xs text-gray-500 font-medium" style={{}}>
<th className="px-6 py-3 font-medium font-geist">Caller</th>
<th className="px-6 py-3 font-medium font-geist">Status</th>
<th className="px-6 py-3 font-medium font-geist">Duration</th>
<th className="px-6 py-3 font-medium text-right font-geist">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50 dark:divide-white/5" style={{}}>
<tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" style={{}}>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold font-geist" style={{}}>JD</div>
<span className="font-medium text-gray-900 dark:text-white font-geist" style={{}}>John Doe</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300 border border-transparent dark:border-white/10 font-geist" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-gray-400" style={{}}></span> Completed
                                            </span>
</td>
<td className="px-6 py-4 text-gray-500 font-geist" style={{}}>12m 30s</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-black dark:hover:text-white" style={{}}><iconify-icon icon="solar:menu-dots-bold-duotone" width="20"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" style={{}}>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<span className="font-medium text-gray-900 dark:text-white font-geist" style={{}}>Sarah Smith</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black text-white dark:bg-white dark:text-black font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> Active
                                            </span>
</td>
<td className="px-6 py-4 text-gray-500 font-geist" style={{}}>04m 12s</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-black dark:hover:text-white" style={{}}><iconify-icon icon="solar:menu-dots-bold-duotone" width="20"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="rounded-3xl p-6 bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-black shadow-xl relative overflow-hidden flex flex-col justify-between group" style={{}}>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-700 dark:bg-gray-400 rounded-full mix-blend-overlay blur-3xl opacity-50" style={{}}></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-600 dark:bg-gray-300 rounded-full mix-blend-overlay blur-3xl opacity-30" style={{}}></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/20 dark:bg-black/10 backdrop-blur flex items-center justify-center mb-4">
<iconify-icon className="text-white dark:text-black" icon="solar:stars-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight font-geist">Pro Plan</h3>
<p className="text-sm text-gray-300 dark:text-gray-600 mt-2 leading-relaxed font-geist" style={{}}>Unlock advanced AI analytics and unlimited agent seats.</p>
</div>
<button className="relative z-10 w-full py-3 bg-white dark:bg-black text-black dark:text-white text-sm font-bold rounded-xl mt-6 hover:scale-[1.02] transition-transform active:scale-[0.98] font-geist">
                            Upgrade Now
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
