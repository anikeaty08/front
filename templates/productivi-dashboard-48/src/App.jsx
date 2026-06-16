import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<aside className="hidden md:flex flex-col w-64 border-r z-10 relative shadow-[4px_0_24px_rgba(0,0,0,0.02)] bg-black border-neutral-800/60">
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.2)] bg-neutral-100">
<span className="font-semibold text-xs tracking-tighter font-geist-mono text-black">PR</span>
</div>
<span className="font-semibold text-base tracking-tight font-geist-mono text-neutral-100">ProTrack</span>
</div>
<nav className="flex-1 px-4 py-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all shadow-sm ring-1 font-geist-mono bg-neutral-900/80 text-neutral-100 ring-white/5" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 font-medium text-sm transition-all font-geist-mono hover:text-neutral-100 hover:bg-neutral-950" href="#">
<iconify-icon className="text-lg" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                All Lists &amp; Habits
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 font-medium text-sm transition-all font-geist-mono hover:text-neutral-100 hover:bg-neutral-950" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                Analytics
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 font-medium text-sm transition-all font-geist-mono hover:text-neutral-100 hover:bg-neutral-950" href="#">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                Projects
            </a>
</nav>
<div className="p-4 border-t border-neutral-800/60">
<button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg transition-colors text-left hover:bg-neutral-950">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr border shadow-sm flex items-center justify-center overflow-hidden from-neutral-700 to-neutral-900 border-neutral-800">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium font-geist-mono text-neutral-100">Alex Doe</span>
<span className="text-xs text-neutral-500 font-geist-mono">Free Plan</span>
</div>
<iconify-icon className="ml-auto text-neutral-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="flex lg:px-10 sticky z-20 h-16 border-b pr-6 pl-6 top-0 backdrop-blur-md items-center justify-between bg-black/80 border-neutral-800/60">
<div className="flex items-center gap-6">
<button className="md:hidden text-neutral-500">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-1 p-1 rounded-lg ring-1 bg-neutral-900/50 ring-neutral-800/60">
<button className="px-3 py-1.5 text-sm font-medium rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 font-geist-mono bg-black text-neutral-100 ring-white/5">Overview</button>
<button className="px-3 py-1.5 text-sm font-medium text-neutral-500 transition-colors font-geist-mono hover:text-neutral-100">Habits</button>
<button className="px-3 py-1.5 text-sm font-medium text-neutral-500 transition-colors font-geist-mono hover:text-neutral-100">Work Log</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:bg-white transition-all w-48 placeholder:text-neutral-400 bg-neutral-900/50 border-neutral-800" placeholder="Search tasks..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border transition-colors relative border-neutral-800 hover:bg-neutral-950 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 pb-24">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl tracking-tight font-geist-mono font-semibold text-neutral-100">Good morning, Alex</h1>
<p className="text-sm text-neutral-500 mt-1 font-geist-mono">Here is your productivity overview for today.</p>
</div>
<button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_2px_8px_rgba(0,0,0,0.15)] ring-1 ring-inset active:scale-95 font-geist-mono bg-neutral-100 hover:bg-neutral-200 text-black ring-black/10">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                        Log Activity
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="rounded-2xl p-5 border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] relative overflow-hidden group bg-black border-neutral-800/60">
<div className="absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl group-hover:bg-green-400/20 transition-colors bg-green-600/10"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-sm font-medium text-neutral-500 font-geist-mono">Productivity Score</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center ring-1 bg-green-950 text-green-400 ring-green-400/10">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-3xl tracking-tight font-geist-mono font-semibold text-neutral-100">86</span>
<span className="text-sm font-medium flex items-center font-geist-mono text-green-400">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 4%
                            </span>
</div>
<div className="w-full rounded-full h-1.5 mt-4 overflow-hidden relative z-10 bg-neutral-900">
<div className="h-1.5 rounded-full shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)] w-[86%] bg-neutral-100"></div>
</div>
</div>

<div className="rounded-2xl p-5 border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] relative overflow-hidden group bg-black border-neutral-800/60">
<div className="absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-colors bg-blue-600/10"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-sm font-medium text-neutral-500 font-geist-mono">Tasks Completed</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center ring-1 bg-blue-950 text-blue-400 ring-blue-400/10">
<iconify-icon icon="solar:check-square-linear"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-3xl tracking-tight font-geist-mono font-semibold text-neutral-100">24</span>
<span className="text-sm font-medium font-geist-mono text-neutral-600">/ 30 this week</span>
</div>

<div className="flex items-end gap-1 h-6 mt-3 opacity-70">
<div className="w-full rounded-t-sm h-[30%] bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[50%] bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[40%] bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[70%] bg-neutral-800"></div>
<div className="w-full rounded-t-sm h-[100%] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] bg-neutral-100"></div>
<div className="w-full rounded-t-sm h-[10%] bg-neutral-900"></div>
<div className="w-full rounded-t-sm h-[10%] bg-neutral-900"></div>
</div>
</div>

<div className="rounded-2xl p-5 border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] relative overflow-hidden group bg-black border-neutral-800/60">
<div className="absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl group-hover:bg-orange-400/20 transition-colors bg-orange-600/10"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-sm font-medium text-neutral-500 font-geist-mono">Habit Streak</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center ring-1 bg-orange-950 text-orange-400 ring-orange-400/10">
<iconify-icon icon="solar:fire-linear"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-3xl tracking-tight font-geist-mono font-semibold text-neutral-100">12</span>
<span className="text-sm font-medium font-geist-mono text-neutral-600">days in a row</span>
</div>
<div className="flex gap-1.5 mt-4 relative z-10">
<div className="w-full h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
<div className="w-full h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
<div className="w-full h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
<div className="w-full h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
<div className="w-full h-1.5 rounded-full bg-neutral-900"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 flex flex-col bg-black border-neutral-800/60">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="text-base font-semibold tracking-tight font-geist-mono text-neutral-100">Weekly Output</h2>
<p className="text-xs text-neutral-500 mt-0.5 font-geist-mono">Hours logged per day across all projects</p>
</div>
<div className="flex items-center gap-2 rounded-lg p-1 border bg-neutral-950 border-neutral-800/60">
<button className="px-2.5 py-1 text-xs font-medium text-neutral-500 transition-colors rounded font-geist-mono hover:text-neutral-100">Day</button>
<button className="px-2.5 py-1 text-xs font-medium shadow-sm ring-1 rounded font-geist-mono bg-black ring-white/5 text-neutral-100">Week</button>
<button className="px-2.5 py-1 text-xs font-medium text-neutral-500 transition-colors rounded font-geist-mono hover:text-neutral-100">Month</button>
</div>
</div>

<div className="flex-1 relative rounded-xl border p-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-end min-h-[240px] bg-neutral-950/50 border-neutral-900">

<div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-40">
<div className="border-t w-full border-neutral-800"></div>
<div className="border-t w-full border-neutral-800"></div>
<div className="border-t w-full border-neutral-800"></div>
<div className="border-t w-full border-neutral-800"></div>
<div className="border-t border-transparent w-full"></div>
</div>

<div className="relative z-10 flex items-end justify-between w-full h-[200px] gap-2 sm:gap-4 px-2 sm:px-6">

<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">

<div className="absolute -top-10 text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 font-geist-mono bg-neutral-100 text-black">4.5 hrs</div>

<div className="w-full max-w-[40px] rounded-t-md h-[50%] relative overflow-hidden ring-1 ring-inset transition-all group-hover:bg-neutral-200 bg-neutral-800/50 ring-white/5">
<div className="absolute bottom-0 w-full rounded-t-md shadow-[inset_0_2px_0_rgba(255,255,255,0.6)] h-full transition-colors group-hover:bg-neutral-400 bg-neutral-700"></div>
</div>
<span className="text-xs font-medium font-geist-mono text-neutral-600">Mon</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="absolute -top-10 text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 font-geist-mono bg-neutral-100 text-black">6.2 hrs</div>
<div className="w-full max-w-[40px] rounded-t-md h-[70%] relative overflow-hidden ring-1 ring-inset transition-all group-hover:bg-neutral-200 bg-neutral-800/50 ring-white/5">
<div className="absolute bottom-0 w-full rounded-t-md shadow-[inset_0_2px_0_rgba(255,255,255,0.6)] h-full transition-colors group-hover:bg-neutral-400 bg-neutral-700"></div>
</div>
<span className="text-xs font-medium font-geist-mono text-neutral-600">Tue</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="absolute -top-10 text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 font-geist-mono bg-neutral-100 text-black">8.0 hrs</div>
<div className="overflow-hidden ring-inset transition-all bg-neutral-800/50 w-full h-[95%] max-w-[40px] rounded-t-md ring-lime-600/5 ring-1 relative -skew-y-5">

<div className="bg-neutral-100 w-full h-full rounded-t-md absolute bottom-0 shadow-[inset_0_2px_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.2)] scale-75 skew-y-15"></div>
</div>
<span className="text-xs font-semibold font-geist-mono text-neutral-100">Wed</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="absolute -top-10 text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 font-geist-mono bg-neutral-100 text-black">3.1 hrs</div>
<div className="w-full max-w-[40px] rounded-t-md h-[40%] relative overflow-hidden ring-1 ring-inset transition-all group-hover:bg-neutral-200 bg-neutral-800/50 ring-white/5">
<div className="absolute bottom-0 w-full rounded-t-md shadow-[inset_0_2px_0_rgba(255,255,255,0.6)] h-full transition-colors group-hover:bg-neutral-400 bg-neutral-700"></div>
</div>
<span className="text-xs font-medium font-geist-mono text-neutral-600">Thu</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="absolute -top-10 text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 font-geist-mono bg-neutral-100 text-black">5.5 hrs</div>
<div className="w-full max-w-[40px] rounded-t-md h-[60%] relative overflow-hidden ring-1 ring-inset transition-all group-hover:bg-neutral-200 bg-neutral-800/50 ring-white/5">
<div className="absolute bottom-0 w-full rounded-t-md shadow-[inset_0_2px_0_rgba(255,255,255,0.6)] h-full transition-colors group-hover:bg-neutral-400 bg-neutral-700"></div>
</div>
<span className="text-xs font-medium font-geist-mono text-neutral-600">Fri</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[40px] rounded-t-md h-[10%] relative overflow-hidden ring-1 ring-inset border border-dashed bg-neutral-900/30 ring-white/5 border-neutral-700"></div>
<span className="text-xs font-medium font-geist-mono text-neutral-700">Sat</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[40px] rounded-t-md h-[5%] relative overflow-hidden ring-1 ring-inset border border-dashed bg-neutral-900/30 ring-white/5 border-neutral-700"></div>
<span className="text-xs font-medium font-geist-mono text-neutral-700">Sun</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="border rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] p-6 flex-1 bg-black border-neutral-800/60">
<div className="flex items-center justify-between mb-5">
<h2 className="text-base font-semibold tracking-tight font-geist-mono text-neutral-100">Daily Focus</h2>
<iconify-icon className="text-neutral-600" icon="solar:clock-circle-linear"></iconify-icon>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium text-neutral-500 mb-2">
<span className="font-geist-mono">Deep Work</span>
<span className="font-geist-mono text-neutral-100">4h 20m</span>
</div>
<div className="h-2 w-full rounded-full overflow-hidden flex shadow-inner bg-neutral-900">
<div className="h-full w-[60%] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] bg-neutral-100"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-neutral-500 mb-2">
<span className="font-geist-mono">Meetings</span>
<span className="font-geist-mono text-neutral-100">1h 30m</span>
</div>
<div className="h-2 w-full rounded-full overflow-hidden flex shadow-inner bg-neutral-900">
<div className="h-full w-[25%] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] bg-neutral-600"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-neutral-500 mb-2">
<span className="font-geist-mono">Learning</span>
<span className="font-geist-mono text-neutral-100">45m</span>
</div>
<div className="h-2 w-full rounded-full overflow-hidden flex shadow-inner bg-neutral-900">
<div className="h-full w-[15%] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] bg-neutral-700"></div>
</div>
</div>
</div>
</div>

<div className="border rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] p-6 h-[180px] flex flex-col justify-between bg-black border-neutral-800/60">
<div className="flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight font-geist-mono text-neutral-100">Yearly Consistency</h2>
<p className="text-xs mt-0.5 font-geist-mono text-neutral-600">2023 Activity</p>
</div>
<span className="text-xs font-medium px-2 py-1 rounded border font-geist-mono bg-neutral-900 text-neutral-400 border-neutral-800">248 days</span>
</div>

<div className="grid grid-cols-12 gap-1 mt-4">

<div className="grid grid-rows-5 gap-1">
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-100"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1">
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1">
<div className="w-full aspect-square rounded-sm bg-neutral-100"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-200"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1">
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="aspect-square w-full rounded-sm -translate-y-2 -skew-y-15 bg-neutral-900" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
</div>
<div className="grid grid-rows-5 gap-1">
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
<div className="w-full aspect-square bg-neutral-500 rounded-sm"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-100"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-200"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
</div>
<div className="grid grid-rows-5 gap-1">
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1">
<div className="w-full aspect-square rounded-sm bg-neutral-100"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-100"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-200"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
</div>
<div className="grid grid-rows-5 gap-1 opacity-50 hidden sm:grid">
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1 opacity-40 hidden sm:grid">
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1 opacity-30 hidden sm:grid">
<div className="w-full aspect-square rounded-sm bg-neutral-600"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-100"></div>
<div className="w-full aspect-square bg-neutral-500 rounded-sm"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1 opacity-20 hidden md:grid">
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-800"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
<div className="grid grid-rows-5 gap-1 opacity-10 hidden md:grid">
<div className="w-full aspect-square rounded-sm bg-neutral-100"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-700"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
<div className="w-full aspect-square rounded-sm bg-neutral-900"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

<div className="border rounded-2xl p-6 shadow-sm bg-black border-neutral-800/60">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold tracking-tight font-geist-mono text-neutral-100">Today's Habits</h2>
<a className="text-xs font-medium text-neutral-500 flex items-center gap-1 transition-colors font-geist-mono hover:text-neutral-100" href="#">
                                View Full List <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="space-y-2">

<label className="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors border border-transparent group hover:bg-neutral-950 hover:border-neutral-900">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-md border peer-checked:bg-neutral-900 peer-checked:border-neutral-900 flex items-center justify-center transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border-neutral-700">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-black" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-center">
<span className="text-sm font-medium peer-checked:text-neutral-400 peer-checked:line-through transition-all font-geist-mono text-neutral-300">Morning Meditation (15m)</span>
<span className="text-xs font-medium text-neutral-500 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-geist-mono bg-neutral-900">Done</span>
</div>
</label>

<label className="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors border border-transparent group hover:bg-neutral-950 hover:border-neutral-900">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-md border peer-checked:bg-neutral-900 peer-checked:border-neutral-900 flex items-center justify-center transition-all shadow-sm border-neutral-700 bg-black">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-black" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-center">
<span className="text-sm font-medium peer-checked:text-neutral-400 peer-checked:line-through transition-all font-geist-mono text-neutral-300">Read 20 pages</span>
<span className="text-xs font-medium text-orange-500 border px-2 py-0.5 rounded font-geist-mono bg-orange-950 border-orange-900">Pending</span>
</div>
</label>

<label className="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors border border-transparent group hover:bg-neutral-950 hover:border-neutral-900">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-md border peer-checked:bg-neutral-900 peer-checked:border-neutral-900 flex items-center justify-center transition-all shadow-sm border-neutral-700 bg-black">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-sm transition-opacity text-black" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-center">
<span className="text-sm font-medium peer-checked:text-neutral-400 peer-checked:line-through transition-all font-geist-mono text-neutral-300">Write weekly review</span>
</div>
</label>
</div>
</div>

<div className="border rounded-2xl p-6 shadow-sm bg-black border-neutral-800/60">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold tracking-tight font-geist-mono text-neutral-100">Recent Work Log</h2>
<button className="w-6 h-6 rounded flex items-center justify-center transition-colors hover:bg-neutral-900 text-neutral-600">
<iconify-icon icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<div className="space-y-5">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 bg-blue-950 border-blue-900 text-blue-400">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium font-geist-mono text-neutral-100">Drafted Q3 Marketing Copy</h4>
<p className="text-xs text-neutral-500 mt-1 font-geist-mono">Project: Apollo Website • 2 hours ago</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 bg-purple-950 border-purple-900 text-purple-400">
<iconify-icon icon="solar:code-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium font-geist-mono text-neutral-100">Fixed authentication bug</h4>
<p className="text-xs text-neutral-500 mt-1 font-geist-mono">Project: Core App • 4 hours ago</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 bg-neutral-900 border-neutral-800 text-neutral-400">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium font-geist-mono text-neutral-100">Team Sync &amp; Planning</h4>
<p className="text-xs text-neutral-500 mt-1 font-geist-mono">Internal • Yesterday</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
