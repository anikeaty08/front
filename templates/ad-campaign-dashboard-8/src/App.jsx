import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#0B0C0E',
surface: '#121418',
border: '#22262E',
primary: '#EEEEEE',
secondary: '#888888',
accent: '#3B82F6',
},
fontSize: {
xxs: '0.65rem',
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
      

<aside className="w-64 border-r border-border bg-surface/50 hidden md:flex flex-col justify-between h-screen fixed left-0 top-0 z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-border/50">
<div className="flex items-center gap-2 text-primary">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm">ADFLOW</span>
</div>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-primary bg-white/5 rounded-md border border-white/5 group transition-all" href="#">
<iconify-icon className="text-white" icon="solar:widget-2-linear" width="18"></iconify-icon>
<span className="font-medium">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:megaphone-linear" width="18"></iconify-icon>
<span>Campaigns</span>
<span className="ml-auto text-xxs bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">2 Live</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:chart-2-linear" width="18"></iconify-icon>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:wallet-money-linear" width="18"></iconify-icon>
<span>Monetization</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-border/50">
<div className="glass-panel p-3 rounded-lg bg-gradient-to-b from-white/5 to-transparent">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-white">Ad Requests</span>
<div className="flex items-center gap-1.5">
<span className="relative w-1.5 h-1.5 bg-emerald-500 rounded-full live-indicator"></span>
<span className="text-xxs text-emerald-400">Live</span>
</div>
</div>
<div className="flex items-end gap-1 h-8 mt-2">
<div className="w-1 bg-white/10 h-[40%] rounded-t-sm"></div>
<div className="w-1 bg-white/10 h-[70%] rounded-t-sm"></div>
<div className="w-1 bg-white/10 h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-white/20 h-[80%] rounded-t-sm"></div>
<div className="w-1 bg-white/30 h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-emerald-500 h-[90%] rounded-t-sm shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
<a className="flex items-center gap-3 mt-4 px-2 py-2 text-sm text-secondary hover:text-white transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xs text-white">JD</div>
<span className="truncate">John Doe</span>
<iconify-icon className="ml-auto" icon="solar:settings-linear" width="16"></iconify-icon>
</a>
</div>
</aside>

<main className="flex-1 md:ml-64 h-screen overflow-y-auto relative scroll-smooth">

<header className="md:hidden h-14 border-b border-border flex items-center justify-between px-4 bg-background/80 backdrop-blur sticky top-0 z-30">
<span className="font-semibold tracking-tight text-white">ADFLOW</span>
<button className="text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>
<div className="max-w-7xl mx-auto p-6 md:p-8 space-y-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<h1 className="text-2xl text-primary font-semibold tracking-tight">Real-time Overview</h1>
<span className="flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</div>
<p className="text-sm text-secondary">Monitoring active ad placements and live traffic.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-secondary hover:text-white transition-colors">
                        Export Report
                    </button>
<button className="group flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        New Placement
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-panel p-5 rounded-xl border-l-4 border-l-emerald-500/50">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-secondary">Active Viewers</span>
<div className="w-2 h-2 rounded-full bg-emerald-500 live-indicator relative"></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-semibold tracking-tight">842</span>
<span className="text-xs text-emerald-400 flex items-center gap-0.5 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                            +42 now
                        </span>
</div>
</div>
<div className="glass-panel p-5 rounded-xl">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-secondary">CTR (Last Hour)</span>
<iconify-icon className="text-gray-500" icon="solar:cursor-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-semibold tracking-tight">2.4%</span>
<span className="text-xs text-emerald-400 flex items-center gap-0.5">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> 0.3%
                        </span>
</div>
</div>
<div className="glass-panel p-5 rounded-xl">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-secondary">Revenue Est.</span>
<iconify-icon className="text-gray-500" icon="solar:dollar-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-semibold tracking-tight">$12.40</span>
<span className="text-xs text-secondary">Today</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Running Campaigns</h3>
<div className="flex gap-2">
<button className="p-1.5 text-secondary hover:text-white rounded hover:bg-white/5">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="border border-border rounded-xl overflow-hidden bg-surface/30">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border text-xs text-secondary bg-white/[0.02]">
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 font-medium">Placement</th>
<th className="px-5 py-3 font-medium">Type</th>
<th className="px-5 py-3 font-medium text-right">Views</th>
<th className="px-5 py-3 font-medium text-right">Settings</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-border">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="relative w-2 h-2">
<div className="absolute w-full h-full bg-emerald-500 rounded-full animate-ping opacity-75"></div>
<div className="relative w-full h-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-emerald-400 text-xs font-medium">Live</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex flex-col">
<span className="text-white font-medium">Homepage Header</span>
<span className="text-xs text-secondary font-mono">ID: 8821-X</span>
</div>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Banner</span>
</td>
<td className="px-5 py-4 text-right text-white font-mono text-xs">1,204/hr</td>
<td className="px-5 py-4 text-right">
<button className="text-secondary hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="relative w-2 h-2">
<div className="absolute w-full h-full bg-emerald-500 rounded-full animate-ping opacity-75"></div>
<div className="relative w-full h-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-emerald-400 text-xs font-medium">Live</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex flex-col">
<span className="text-white font-medium">Blog Sidebar</span>
<span className="text-xs text-secondary font-mono">ID: 9942-Y</span>
</div>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Native</span>
</td>
<td className="px-5 py-4 text-right text-white font-mono text-xs">840/hr</td>
<td className="px-5 py-4 text-right">
<button className="text-secondary hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
<span className="text-orange-400 text-xs font-medium">Paused</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex flex-col">
<span className="text-secondary font-medium">Exit Intent Popup</span>
<span className="text-xs text-secondary font-mono">ID: 1102-Z</span>
</div>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">Popup</span>
</td>
<td className="px-5 py-4 text-right text-secondary font-mono text-xs">0/hr</td>
<td className="px-5 py-4 text-right">
<button className="text-secondary hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="lg:col-span-1">
<div className="glass-panel rounded-xl overflow-hidden flex flex-col h-full">
<div className="p-4 border-b border-border bg-white/[0.02] flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Live Site Preview</h3>
<span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded uppercase tracking-wide border border-red-500/20">Rec</span>
</div>

<div className="flex-1 p-4 bg-[#050505] relative group">

<div className="bg-gray-800/50 rounded-lg p-2 mb-4 flex items-center gap-2 opacity-50">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 bg-black/50 rounded h-4 w-full"></div>
</div>

<div className="space-y-3 opacity-30 blur-[1px]">
<div className="h-20 bg-gray-700 rounded-lg w-full animate-pulse"></div>
<div className="flex gap-3">
<div className="h-32 bg-gray-700 rounded-lg w-2/3 animate-pulse delay-75"></div>
<div className="h-32 bg-gray-700 rounded-lg w-1/3 animate-pulse delay-100"></div>
</div>
<div className="h-10 bg-gray-700 rounded-lg w-full animate-pulse"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10">
<div className="bg-surface border border-indigo-500/30 rounded-lg shadow-[0_0_30px_rgba(79,70,229,0.15)] overflow-hidden">

<div className="p-4 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 flex items-center gap-3 relative">
<div className="absolute top-0 right-0 bg-white/10 px-1.5 py-0.5 text-[8px] text-white/50 rounded-bl">Ad</div>
<div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0 shadow-lg">
<iconify-icon className="text-indigo-600" icon="solar:rocket-2-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-white">AdFlow Premium</div>
<div className="text-[10px] text-gray-300">Boost your revenue today.</div>
</div>
<button className="ml-auto text-[10px] bg-white text-black px-2 py-1 rounded font-medium hover:bg-gray-200">
                                            Open
                                        </button>
</div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap border border-white/10 flex items-center gap-1">
<iconify-icon icon="solar:eye-linear"></iconify-icon> Showing to User ID: 99281
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
</div>

    </>
  );
}
