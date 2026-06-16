import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<aside className="w-full md:w-60 border-b md:border-b-0 md:border-r border-white/10 bg-[#000000] flex flex-col h-auto md:h-screen shrink-0 z-20">

<div className="h-14 flex items-center justify-between px-5 border-b border-white/10">
<span className="text-white font-medium tracking-tighter text-lg">relvout</span>
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto hidden md:block">
<div className="px-2 pb-2 text-xs font-medium text-neutral-600 uppercase tracking-widest">Menu</div>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg bg-white/10 text-white text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear"></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
                Projects
            </a>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                Analytics
            </a>
<a className="flex items-center justify-between px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
                    Alerts
                </div>
<span className="bg-white/10 text-white text-xs py-0.5 px-1.5 rounded-md">3</span>
</a>
<div className="px-2 pt-6 pb-2 text-xs font-medium text-neutral-600 uppercase tracking-widest">System</div>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon>
                Databases
            </a>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                Settings
            </a>
</nav>

<div className="p-4 border-t border-white/10 hidden md:block bg-[#050505]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-600 flex items-center justify-center shrink-0 border border-white/10 text-white text-xs font-medium">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-neutral-500 truncate">john@relvout.com</p>
</div>
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-[calc(100vh-3.5rem)] md:h-screen overflow-hidden bg-[#000000] relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-white/5 blur-[100px] pointer-events-none rounded-full"></div>

<header className="h-14 border-b border-white/10 flex items-center justify-between px-4 md:px-8 shrink-0 bg-[#000000]/80 backdrop-blur-md z-10 sticky top-0">

<div className="flex items-center gap-2 text-sm">
<span className="text-neutral-500 hover:text-white cursor-pointer transition-colors">relvout</span>
<span className="text-neutral-700">/</span>
<span className="text-white font-medium">Dashboard</span>
</div>

<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-[#0A0A0A] border border-white/10 rounded-md pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all w-64 placeholder:text-neutral-600 shadow-sm" placeholder="Search resources..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden sm:inline-block border border-white/10 bg-white/5 rounded px-1.5 text-xs text-neutral-500 font-sans">⌘</kbd>
<kbd className="hidden sm:inline-block border border-white/10 bg-white/5 rounded px-1.5 text-xs text-neutral-500 font-sans">K</kbd>
</div>
</div>
<button className="text-neutral-400 hover:text-white transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-white rounded-full border border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 z-0">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white mb-1.5">Infrastructure Overview</h1>
<p className="text-sm text-neutral-500">Monitor your deployments, server health, and traffic metrics.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-white/5 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
                            Last 30 Days
                        </button>
<button className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-neutral-200 transition-all shadow-sm">
<iconify-icon className="text-base" icon="solar:rocket-linear"></iconify-icon>
                            Deploy
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#050505] border border-white/10 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-4xl text-white" icon="solar:server-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-neutral-500 mb-1 relative z-10">Active Instances</h3>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-2xl font-medium tracking-tight text-white">24</span>
<span className="text-xs text-white bg-white/10 px-1.5 py-0.5 rounded border border-white/10">+3 this week</span>
</div>
</div>

<div className="bg-[#050505] border border-white/10 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-4xl text-white" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-neutral-500 mb-1 relative z-10">Requests / min</h3>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-2xl font-medium tracking-tight text-white">14.2k</span>
<span className="text-xs text-neutral-400">avg</span>
</div>
</div>

<div className="bg-[#050505] border border-white/10 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-4xl text-white" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-neutral-500 mb-1 relative z-10">System Uptime</h3>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-2xl font-medium tracking-tight text-white">99.99%</span>
</div>
</div>

<div className="bg-[#050505] border border-white/10 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-4xl text-white" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-neutral-500 mb-1 relative z-10">Est. Monthly Cost</h3>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-2xl font-medium tracking-tight text-white">$432.00</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 bg-[#050505] border border-white/10 rounded-xl flex flex-col">
<div className="p-5 border-b border-white/10 flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-white">Network Traffic</h2>

<div className="flex items-center gap-3 text-sm">
<span className="text-neutral-500">Live Updates</span>
<label className="flex items-center cursor-pointer">
<div className="relative">
<input checked="" className="sr-only group peer" type="checkbox" />
<div className="w-8 h-4.5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 peer-checked:after:bg-black after:border-neutral-400 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-white"></div>
</input></div>
</label>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-end gap-2 h-72">

<div className="flex items-end justify-between h-full w-full gap-1 sm:gap-2 pt-8 relative">

<div className="absolute top-0 w-full border-t border-white/5"></div>
<div className="absolute top-1/2 w-full border-t border-white/5"></div>

<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[30%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-medium">30k</div>
</div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[45%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[25%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[60%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[40%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[80%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[55%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[70%]"></div>
<div className="w-full bg-white text-black hover:bg-neutral-200 transition-colors rounded-t-sm h-[90%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-medium">90k</div>
</div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[65%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[50%]"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-t-sm h-[35%]"></div>
</div>

<div className="flex justify-between text-xs text-neutral-600 mt-2">
<span>00:00</span>
<span>06:00</span>
<span>12:00</span>
<span>18:00</span>
<span>Now</span>
</div>
</div>
</div>

<div className="bg-[#050505] border border-white/10 rounded-xl flex flex-col">
<div className="p-5 border-b border-white/10">
<h2 className="text-base font-medium tracking-tight text-white">Event Log</h2>
</div>
<div className="p-5 flex-1 overflow-y-auto">
<div className="space-y-5">

<div className="flex gap-4 relative">
<div className="absolute left-[15px] top-8 bottom-[-20px] w-px bg-white/10"></div>
<div className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shrink-0 z-10 text-white">
<iconify-icon className="text-sm" icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="pt-1.5">
<p className="text-sm text-white font-medium">Deployment Successful</p>
<p className="text-sm text-neutral-500 mt-0.5">Production branch <span className="text-neutral-300 font-mono text-xs border border-white/10 bg-white/5 px-1 rounded">main</span> deployed.</p>
<p className="text-xs text-neutral-600 mt-1.5">2 mins ago</p>
</div>
</div>

<div className="flex gap-4 relative">
<div className="absolute left-[15px] top-8 bottom-[-20px] w-px bg-white/10"></div>
<div className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shrink-0 z-10 text-white">
<iconify-icon className="text-sm" icon="solar:server-square-update-linear"></iconify-icon>
</div>
<div className="pt-1.5">
<p className="text-sm text-white font-medium">Database Scaled</p>
<p className="text-sm text-neutral-500 mt-0.5">Primary DB auto-scaled to handle spike.</p>
<p className="text-xs text-neutral-600 mt-1.5">45 mins ago</p>
</div>
</div>

<div className="flex gap-4 relative">
<div className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shrink-0 z-10 text-white">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="pt-1.5">
<p className="text-sm text-white font-medium">Team Member Added</p>
<p className="text-sm text-neutral-500 mt-0.5">Sarah Connor joined project <span className="text-white">Skynet</span>.</p>
<p className="text-xs text-neutral-600 mt-1.5">3 hours ago</p>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-white/10 text-center">
<button className="text-xs text-white hover:text-neutral-300 font-medium transition-colors">View All Logs</button>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
<p>© 2023 relvout Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
<a className="hover:text-white transition-colors" href="#">API Status</a>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
