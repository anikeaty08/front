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
dark: {
950: '#050505',
900: '#0a0a0a',
800: '#121212',
700: '#1c1c1c',
},
brand: {
500: '#6366f1', // Indigo
600: '#4f46e5',
}
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
      

<header className="lg:hidden fixed top-0 w-full z-50 glass-panel border-b border-white/5 px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
<iconify-icon icon="solar:bolt-bold" width="16"></iconify-icon>
</div>
<span className="text-zinc-100 font-medium tracking-tight">RiseAngle</span>
</div>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<aside className="hidden lg:flex flex-col w-72 h-screen fixed left-0 top-0 border-r border-white/5 bg-dark-950/50 backdrop-blur-xl z-40">

<div className="p-6">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center shadow-inner group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white relative z-10" icon="solar:bolt-bold" width="18"></iconify-icon>
</div>
<div>
<span className="text-zinc-100 font-medium text-sm tracking-tight block">RiseAngle</span>
<span className="text-zinc-600 text-xs font-normal">Creator Studio</span>
</div>
</div>
</div>

<nav className="flex-1 px-3 space-y-1 overflow-y-auto py-2">
<div className="px-3 mb-2">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Platform</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-zinc-100 border border-white/5 transition-all group" href="#">
<iconify-icon className="text-brand-500" icon="solar:home-smile-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:clapperboard-edit-linear" width="20"></iconify-icon>
<span className="text-sm">Create Shorts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:calendar-date-linear" width="20"></iconify-icon>
<span className="text-sm">Scheduler</span>
<span className="ml-auto text-xxs bg-brand-500/10 text-brand-400 px-1.5 py-0.5 rounded border border-brand-500/20">BETA</span>
</a>
<div className="pt-6 pb-2 px-3">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Assets</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:folder-with-files-linear" width="20"></iconify-icon>
<span className="text-sm">Library</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:gallery-wide-linear" width="20"></iconify-icon>
<span className="text-sm">Templates</span>
</a>
<div className="pt-6 pb-2 px-3">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Settings</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:settings-linear" width="20"></iconify-icon>
<span className="text-sm">Preferences</span>
</a>
</nav>

<div className="p-4 border-t border-white/5">
<div className="bg-gradient-to-b from-zinc-900 to-black border border-white/5 rounded-xl p-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-center mb-2 relative z-10">
<span className="text-xs font-medium text-zinc-300">Credits</span>
<span className="text-xs text-zinc-500">850/1000</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-gradient-to-r from-brand-600 to-violet-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<button className="mt-3 w-full py-1.5 text-xs font-medium text-zinc-300 hover:text-white border border-white/10 hover:bg-white/5 rounded-lg transition-colors relative z-10">
                    Upgrade Plan
                </button>
</div>
<div className="mt-4 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Aditya</p>
<p className="text-xs text-zinc-500 truncate">Pro Member</p>
</div>
<button className="text-zinc-600 hover:text-zinc-300">
<iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 p-6 lg:p-10 pt-20 lg:pt-8 w-full relative">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
<div>
<h1 className="text-2xl font-semibold text-zinc-100 tracking-tight">Welcome back, Aditya</h1>
<p className="text-sm text-zinc-500 mt-1">Let's create something viral today.</p>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-200"></div>
<button className="relative flex items-center gap-2 bg-dark-900 border border-white/10 hover:border-white/20 text-zinc-300 px-4 py-2 rounded-full text-sm font-medium transition-all">
<iconify-icon className="text-brand-500" icon="solar:add-circle-linear" width="18"></iconify-icon>
                        New Project
                    </button>
</div>
<button className="w-9 h-9 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all relative">
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/5 bg-dark-900/40 p-1 mb-12 group">
<div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-xl overflow-hidden bg-dark-950/80 border border-white/5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
<div className="flex-1 space-y-5 relative z-10">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-zinc-300 backdrop-blur-md">
<span className="flex h-1.5 w-1.5 rounded-full bg-brand-500"></span>
<span>New v2.0 Model Available</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                        Turn text into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-indigo-400">cinematic shorts</span>
</h2>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
                        Describe your idea and our AI generates scripts, visuals, and voiceovers instantly. No editing skills required.
                    </p>
<div className="flex gap-3 pt-2">
<button className="bg-zinc-100 hover:bg-white text-black px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-transform active:scale-95">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                            Generate Video
                        </button>
<button className="px-5 py-2.5 rounded-lg font-medium text-sm text-zinc-300 hover:text-white flex items-center gap-2 transition-colors">
                            View Gallery
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full md:w-[380px] h-[220px] md:h-[240px] flex-shrink-0 perspective-1000">

<div className="absolute right-0 top-0 w-[280px] h-[160px] bg-zinc-900 border border-white/5 rounded-xl rotate-6 translate-x-4 translate-y-4 opacity-40 blur-[1px]"></div>

<div className="absolute right-4 top-4 bottom-4 left-4 bg-[#111113] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-float">

<div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="flex-1 p-4 flex gap-3">

<div className="w-12 h-full bg-white/5 rounded-lg space-y-2 p-1.5">
<div className="w-full aspect-square bg-white/5 rounded-md"></div>
<div className="w-full aspect-square bg-white/5 rounded-md"></div>
<div className="w-full aspect-square bg-white/5 rounded-md"></div>
</div>

<div className="flex-1 space-y-3">
<div className="h-24 w-full bg-gradient-to-br from-brand-900/20 to-zinc-900 rounded-lg border border-white/5 relative overflow-hidden">
<div className="absolute top-2 left-2 w-8 h-8 rounded bg-brand-500/20 flex items-center justify-center">
<iconify-icon className="text-brand-400" icon="solar:play-bold" width="14"></iconify-icon>
</div>

<div className="absolute bottom-0 left-0 right-0 h-8 flex items-end justify-between px-2 pb-2 gap-0.5 opacity-50">
<div className="w-1 bg-brand-500/50 h-3 rounded-full"></div>
<div className="w-1 bg-brand-500/50 h-5 rounded-full"></div>
<div className="w-1 bg-brand-500/50 h-2 rounded-full"></div>
<div className="w-1 bg-brand-500/50 h-6 rounded-full"></div>
<div className="w-1 bg-brand-500/50 h-4 rounded-full"></div>
<div className="w-1 bg-brand-500/50 h-3 rounded-full"></div>
<div className="w-1 bg-brand-500/50 h-5 rounded-full"></div>
<div className="w-1 bg-brand-500/50 h-2 rounded-full"></div>
</div>
</div>
<div className="flex gap-2">
<div className="h-2 w-16 bg-zinc-800 rounded-full"></div>
<div className="h-2 w-10 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-2 -left-2 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 z-20">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-mono text-zinc-300">Rendering...</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="group relative col-span-1 lg:col-span-2 glass-card rounded-xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="bg-dark-900/50 h-full rounded-lg p-6 flex flex-col sm:flex-row gap-6">
<div className="flex-1 z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-100 mb-4 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-1">Instant Video</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                            Create engaging shorts from a single prompt. Perfect for TikTok and Reels.
                        </p>
<a className="inline-flex items-center text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors" href="#">
                            Start creating <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="w-full sm:w-64 h-32 bg-black/40 border border-white/5 rounded-lg self-center relative overflow-hidden flex flex-col justify-center px-4">
<div className="flex items-center gap-2 mb-3 opacity-50">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="h-1.5 w-20 bg-zinc-700 rounded-full"></div>
</div>
<div className="w-full h-8 bg-zinc-800/50 rounded border border-white/5 flex items-center px-2 mb-2">
<span className="text-[10px] text-zinc-500">History of space travel...</span>
<div className="ml-auto w-0.5 h-3 bg-brand-500 animate-pulse"></div>
</div>
<div className="w-20 h-6 bg-brand-600 rounded flex items-center justify-center self-end shadow-lg shadow-brand-900/20">
<span className="text-[9px] font-medium text-white">Generate</span>
</div>
</div>
</div>
</div>

<div className="group relative glass-card rounded-xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1">
<div className="bg-dark-900/50 h-full rounded-lg p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-100 group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-1">Auto-Pilot</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        Schedule content for the next 30 days automatically.
                    </p>

<div className="mt-auto flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="flex-1 h-12 bg-zinc-800/30 rounded border border-white/5 flex flex-col items-center justify-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-6 h-1 bg-zinc-700 rounded-full"></div>
</div>
<div className="flex-1 h-12 bg-brand-500/10 rounded border border-brand-500/20 flex flex-col items-center justify-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
<div className="w-6 h-1 bg-brand-500/40 rounded-full"></div>
</div>
<div className="flex-1 h-12 bg-zinc-800/30 rounded border border-white/5 flex flex-col items-center justify-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-6 h-1 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="group relative glass-card rounded-xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1">
<div className="bg-dark-900/50 h-full rounded-lg p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-100 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-1">AI Script Writer</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Generate viral scripts with hooks that grab attention instantly.
                    </p>
<div className="mt-6 border-t border-white/5 pt-4">
<div className="space-y-2">
<div className="h-1.5 w-3/4 bg-zinc-800 rounded-full"></div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full"></div>
<div className="h-1.5 w-5/6 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="group relative glass-card rounded-xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1">
<div className="bg-dark-900/50 h-full rounded-lg p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-100 group-hover:bg-pink-500/10 group-hover:text-pink-400 transition-colors">
<iconify-icon icon="solar:layers-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-1">Smart Templates</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Choose from 50+ viral styles used by top creators.
                    </p>
<div className="mt-6 flex items-center -space-x-2">
<div className="w-8 h-8 rounded-full border border-dark-900 bg-zinc-800"></div>
<div className="w-8 h-8 rounded-full border border-dark-900 bg-zinc-700"></div>
<div className="w-8 h-8 rounded-full border border-dark-900 bg-zinc-600 flex items-center justify-center text-[10px] text-white font-medium">+40</div>
</div>
</div>
</div>

<div className="group relative glass-card rounded-xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1">
<div className="bg-dark-900/50 h-full rounded-lg p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-100 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-1">Performance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Track views and engagement across all platforms.
                    </p>
<div className="mt-6 flex items-end gap-1 h-8">
<div className="w-1/5 bg-zinc-800 rounded-t h-[40%]"></div>
<div className="w-1/5 bg-zinc-800 rounded-t h-[60%]"></div>
<div className="w-1/5 bg-emerald-500/40 rounded-t h-[80%]"></div>
<div className="w-1/5 bg-zinc-800 rounded-t h-[50%]"></div>
<div className="w-1/5 bg-zinc-800 rounded-t h-[70%]"></div>
</div>
</div>
</div>
</div>

<div className="mb-10">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-zinc-200">Recent Projects</h2>
<button className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
                    View all <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
<div className="rounded-xl border border-white/5 bg-dark-900/30 overflow-hidden">
<table className="w-full text-left text-sm text-zinc-400">
<thead className="bg-white/5 border-b border-white/5 text-xs uppercase font-medium text-zinc-500">
<tr>
<th className="px-6 py-4 font-medium">Project Name</th>
<th className="px-6 py-4 font-medium hidden sm:table-cell">Format</th>
<th className="px-6 py-4 font-medium hidden md:table-cell">Status</th>
<th className="px-6 py-4 font-medium hidden sm:table-cell">Date</th>
<th className="px-6 py-4 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-500" icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-zinc-200 font-medium group-hover:text-brand-400 transition-colors">Space Facts Ep.1</p>
<p className="text-xs text-zinc-600 hidden sm:block">00:59 • 9:16</p>
</div>
</div>
</td>
<td className="px-6 py-4 hidden sm:table-cell">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800/50 border border-white/5 text-xs">
<iconify-icon icon="solar:smartphone-linear" width="12"></iconify-icon> Vertical
                                </span>
</td>
<td className="px-6 py-4 hidden md:table-cell">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-emerald-500 text-xs">Ready</span>
</div>
</td>
<td className="px-6 py-4 hidden sm:table-cell text-zinc-600">2 hours ago</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-white/10 rounded-lg text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-500" icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-zinc-200 font-medium group-hover:text-brand-400 transition-colors">Motivational Quote</p>
<p className="text-xs text-zinc-600 hidden sm:block">00:30 • 9:16</p>
</div>
</div>
</td>
<td className="px-6 py-4 hidden sm:table-cell">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800/50 border border-white/5 text-xs">
<iconify-icon icon="solar:smartphone-linear" width="12"></iconify-icon> Vertical
                                </span>
</td>
<td className="px-6 py-4 hidden md:table-cell">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-amber-500 text-xs">Processing</span>
</div>
</td>
<td className="px-6 py-4 hidden sm:table-cell text-zinc-600">Yesterday</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-white/10 rounded-lg text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>


</div>
</div>
</main>

    </>
  );
}
