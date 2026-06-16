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
      

<div className="w-full max-w-md h-screen overflow-hidden flex flex-col relative border-x shadow-2xl bg-slate-950 border-slate-800/50">

<header className="px-6 pt-6 pb-2 flex justify-between items-center z-20 backdrop-blur-md sticky top-0 bg-slate-950/80">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 flex items-center justify-center font-medium text-sm ring-2 shadow-lg shadow-cyan-500/20 to-amber-600 text-white ring-slate-900">
                    JD
                </div>
<div>
<p className="text-xs text-slate-500 font-medium">Good Morning</p>
<h1 className="text-sm font-semibold text-slate-100">John Doe</h1>
</div>
</div>
<button className="h-10 w-10 rounded-full border flex items-center justify-center transition-colors border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-100 hover:bg-slate-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 px-6 relative">

<div className="mt-4 mb-8">
<div className="flex justify-between items-end mb-4">
<h2 className="text-lg font-medium tracking-tight text-slate-100">October 2023</h2>
<button className="transition-colors text-xs font-medium hover:text-cyan-300 text-cyan-400">View Calendar</button>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar py-1">

<div className="flex-shrink-0 w-14 h-20 rounded-2xl border flex flex-col items-center justify-center gap-1 text-slate-500 border-slate-800 bg-slate-900/30">
<span className="text-xs font-medium">Mon</span>
<span className="text-lg font-normal">23</span>
</div>
<div className="flex-shrink-0 w-14 h-20 rounded-2xl border flex flex-col items-center justify-center gap-1 text-slate-500 border-slate-800 bg-slate-900/30">
<span className="text-xs font-medium">Tue</span>
<span className="text-lg font-normal">24</span>
</div>

<div className="flex-shrink-0 w-14 h-20 rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.3)] flex flex-col items-center justify-center gap-1 relative overflow-hidden group bg-cyan-600 text-white">
<div className="absolute inset-0 bg-gradient-to-b to-transparent from-white/10"></div>
<span className="text-xs font-medium opacity-80">Wed</span>
<span className="text-lg font-semibold">25</span>
<div className="h-1 w-1 rounded-full mt-1 bg-white"></div>
</div>

<div className="flex-shrink-0 w-14 h-20 rounded-2xl border flex flex-col items-center justify-center gap-1 border-slate-800 bg-slate-900/30 text-slate-400">
<span className="text-xs font-medium">Thu</span>
<span className="text-lg font-normal">26</span>
</div>
<div className="flex-shrink-0 w-14 h-20 rounded-2xl border flex flex-col items-center justify-center gap-1 border-slate-800 bg-slate-900/30 text-slate-400">
<span className="text-xs font-medium">Fri</span>
<span className="text-lg font-normal">27</span>
</div>
</div>
</div>

<div className="relative w-full rounded-3xl p-1 bg-gradient-to-b border shadow-2xl mb-8 from-slate-800 to-slate-900/50 border-slate-800">
<div className="backdrop-blur-sm rounded-[20px] p-6 flex flex-col items-center justify-center gap-6 relative overflow-hidden bg-slate-950/80">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full"></div>
<div className="flex flex-col items-center z-10">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">Current Time</span>
<div className="text-5xl font-semibold tracking-tighter tabular-nums text-slate-100" id="clock">09:41</div>
<span className="text-xs mt-2 text-slate-400">Shift: 09:00 AM - 06:00 PM</span>
</div>

<div className="w-full h-14 rounded-full border relative flex items-center px-1 overflow-hidden group cursor-pointer shadow-inner bg-slate-900 border-slate-800">
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-sm font-medium text-slate-500 group-hover:text-slate-400 transition-colors">Swipe to Check In</span>
<svg aria-hidden="true" className="iconify ml-2 animate-pulse iconify--lucide text-slate-600" data-height="16" data-icon="lucide:chevrons-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 17l5-5l-5-5m7 10l5-5l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-12 w-12 rounded-full shadow-lg flex items-center justify-center relative z-10 group-hover:translate-x-1 transition-transform duration-300 bg-cyan-600 shadow-cyan-600/20 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:fingerprint" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
</div>
</div>

<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-green-400">Office Area</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">

<div className="p-4 rounded-2xl border flex flex-col gap-3 bg-slate-900/30 border-slate-800">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-slate-800 text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:briefcase" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<span className="text-xs font-semibold text-slate-500">OCT</span>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-100">22</div>
<div className="text-xs text-slate-500 mt-0.5">Days Present</div>
</div>
</div>

<div className="p-4 rounded-2xl border flex flex-col gap-3 bg-slate-900/30 border-slate-800">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-slate-800 text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:clock" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<span className="text-xs font-semibold text-amber-500/80 bg-amber-500/10 px-1.5 py-0.5 rounded">Alert</span>
</div>
<div className="">
<div className="text-2xl font-semibold tracking-tight text-slate-100">02</div>
<div className="text-xs text-slate-500 mt-0.5">Late Arrivals</div>
</div>
</div>
</div>

<div className="">
<div className="flex justify-between items-end mb-4">
<h3 className="text-sm font-medium text-slate-200">Recent Logs</h3>
<button className="text-xs text-slate-500 transition-colors hover:text-slate-300">See All</button>
</div>
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-3 rounded-xl border transition-colors bg-slate-900/20 border-slate-800/50 hover:bg-slate-900/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center border bg-slate-800 text-slate-400 border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:log-in" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200">Check In</span>
<span className="text-xs text-slate-500">Oct 25, 2023</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold tabular-nums text-slate-200">09:41</span>
<span className="text-[10px] text-green-500 font-medium">On Time</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border transition-colors bg-slate-900/20 border-slate-800/50 hover:bg-slate-900/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center border bg-slate-800 text-slate-400 border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:log-out" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200">Check Out</span>
<span className="text-xs text-slate-500">Oct 24, 2023</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold tabular-nums text-slate-200">18:05</span>
<span className="text-[10px] text-slate-500 font-medium">8h 05m</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border transition-colors bg-slate-900/20 border-slate-800/50 hover:bg-slate-900/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center border bg-slate-800 text-slate-400 border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:coffee" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200">Break</span>
<span className="text-xs text-slate-500">Oct 24, 2023</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold tabular-nums text-slate-200">13:00</span>
<span className="text-[10px] text-slate-500 font-medium">45m</span>
</div>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full backdrop-blur-xl border-t pb-6 pt-2 bg-slate-950/80 border-slate-800/50">
<div className="flex justify-around items-center">

<button className="flex flex-col items-center gap-1 p-2 text-cyan-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:home" data-strokeWidth="2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span className="text-[10px] font-medium">Home</span>
</button>

<button className="flex flex-col items-center gap-1 p-2 text-slate-500 transition-colors hover:text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:bar-chart-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium">Report</span>
</button>

<div className="w-12"></div>

<button className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full border shadow-lg flex items-center justify-center group overflow-hidden bg-slate-900 border-slate-800 text-white shadow-black/50">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500 opacity-20 group-hover:opacity-30 transition-opacity to-cyan-700"></div>
<svg aria-hidden="true" className="iconify relative z-10 iconify--lucide" data-height="24" data-icon="lucide:plus" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<button className="flex flex-col items-center gap-1 p-2 text-slate-500 transition-colors hover:text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:calendar" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<span className="text-[10px] font-medium">Schedule</span>
</button>

<button className="flex flex-col items-center gap-1 p-2 text-slate-500 transition-colors hover:text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</nav>
</div>

    </>
  );
}
