import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 h-full sidebar-glass flex flex-col justify-between p-6 z-50">
<div>

<div className="flex items-center gap-3 mb-10 px-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<span className="font-bold text-lg tracking-tighter">L.</span>
</div>
<h1 className="font-semibold text-lg tracking-tight">Lumina</h1>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-slate-100 text-slate-900 rounded-xl transition-all font-medium text-sm" href="#">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-medium text-sm" href="#">
<i className="w-4 h-4" data-lucide="calendar-check"></i>
                    Attendance
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-medium text-sm" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                    Employees
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-medium text-sm" href="#">
<i className="w-4 h-4" data-lucide="banknote"></i>
                    Payroll
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-medium text-sm" href="#">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
                    Reports
                </a>
</nav>
</div>

<div>
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white mb-6 shadow-xl shadow-slate-900/10 relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
<div className="relative z-10">
<i className="w-4 h-4 mb-2 text-yellow-300" data-lucide="sparkles"></i>
<p className="text-xs font-semibold">Pro Plan</p>
<p className="text-[10px] text-slate-400 mt-1">Your team is growing.</p>
</div>
</div>
<div className="flex items-center gap-3 px-2">
<img alt="Profile" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1">
<p className="text-xs font-bold text-slate-900">Isabelle M.</p>
<p className="text-[10px] text-slate-500">Product Designer</p>
</div>
<button className="text-slate-400 hover:text-slate-900"><i className="w-4 h-4" data-lucide="settings"></i></button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-8 py-4 z-40">
<div className="flex items-center gap-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Dashboard</h2>
<span className="text-slate-300">/</span>
<span className="text-sm text-slate-500 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="h-10 bg-white rounded-xl flex items-center px-4 border border-slate-200/60 shadow-sm focus-within:ring-1 focus-within:ring-slate-200 w-64 transition-all">
<i className="w-4 h-4 text-slate-400 mr-2" data-lucide="search"></i>
<input className="bg-transparent w-full text-xs outline-none placeholder:text-slate-400 text-slate-900" placeholder="Search anything..." type="text"/>
</div>
<button className="h-10 w-10 bg-white rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 relative">
<i className="w-4 h-4" data-lucide="bell"></i>
<div className="w-2 h-2 bg-red-500 rounded-full absolute top-2.5 right-3 border border-white"></div>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 pt-2 hide-scroll">
<div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">

<div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

<div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex justify-between items-center">

<div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="relative z-10 max-w-md">
<h3 className="text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Tuesday, Oct 24</h3>
<h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Good Morning, Isabelle</h1>
<p className="text-slate-500 text-sm leading-relaxed mb-6">You have 3 pending tasks and an upcoming meeting at 2:00 PM. Your attendance streak is excellent this month.</p>
<div className="flex items-center gap-3">
<div className="h-10 px-4 rounded-xl bg-green-50 flex items-center gap-2 border border-green-100">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-semibold text-green-700">Online • Punched In</span>
</div>
<span className="text-xs text-slate-400 font-medium">Since 09:00 AM</span>
</div>
</div>

<div className="relative z-10 mr-4 group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-white shadow-xl flex flex-col items-center justify-center relative border border-slate-100 active:scale-95 transition-all">
<i className="w-8 h-8 text-slate-900 mb-1 group-hover:scale-110 transition-transform" data-lucide="fingerprint"></i>
<span className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">Break</span>

<svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
<circle cx="50%" cy="50%" fill="none" r="46%" stroke="#f1f5f9" strokeWidth="3"></circle>
<circle cx="50%" cy="50%" fill="none" r="46%" stroke="#0f172a" stroke-dasharray="200" stroke-dashoffset="40" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<p className="text-sm font-semibold text-slate-900">Attendance</p>
<p className="text-xs text-slate-500 mt-1">08:42 hrs today</p>
</div>

<div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-3">
<i className="w-5 h-5" data-lucide="calendar-off"></i>
</div>
<p className="text-sm font-semibold text-slate-900">Leave Balance</p>
<p className="text-xs text-slate-500 mt-1">12 days remaining</p>
</div>

<div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<p className="text-sm font-semibold text-slate-900">Team</p>
<p className="text-xs text-slate-500 mt-1">14 Members active</p>
</div>

<div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
<div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
<i className="w-5 h-5" data-lucide="check-square"></i>
</div>
<p className="text-sm font-semibold text-slate-900">My Tasks</p>
<p className="text-xs text-slate-500 mt-1">3 Pending Review</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 h-full flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-bold text-slate-900">Work Location</h3>
<button className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1">
                                View History <i className="w-3 h-3" data-lucide="chevron-right"></i>
</button>
</div>
<div className="flex gap-6 h-full">

<div className="flex-1 rounded-3xl overflow-hidden relative shadow-inner bg-slate-100 min-h-[200px]">
<svg className="absolute inset-0 w-full h-full opacity-10" height="100%" width="100%">
<pattern height="20" id="grid-desk" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid-desk)" height="100%" width="100%"></rect>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="glass px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-slate-800">San Francisco HQ</span>
</div>
</div>
</div>

<div className="w-48 flex flex-col justify-center gap-4">
<div className="bg-slate-50 p-4 rounded-2xl">
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Clock In</span>
<p className="text-base font-semibold text-slate-900 mt-1">09:00 AM</p>
</div>
<div className="bg-slate-50 p-4 rounded-2xl">
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Avg Hours</span>
<p className="text-base font-semibold text-slate-900 mt-1">8h 30m</p>
</div>
<div className="bg-slate-50 p-4 rounded-2xl">
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Overtime</span>
<p className="text-base font-semibold text-green-600 mt-1">+ 2h 15m</p>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

<div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl shadow-slate-900/10 relative overflow-hidden">
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Net Pay • October</p>
<h1 className="text-3xl font-bold tracking-tight">$4,250<span className="text-lg text-slate-500 font-normal">.00</span></h1>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="download"></i>
</div>
</div>

<div className="h-16 w-full flex items-end gap-1 mb-6 opacity-80">
<div className="flex-1 bg-white/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-white/20 rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-white/20 rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-white/20 rounded-t-sm h-[80%]"></div>
<div className="flex-1 bg-white rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
</div>
<button className="w-full py-3 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors">
                            View Payslip Details
                        </button>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex-1">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Up Next</h3>
<div className="space-y-4">

<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold uppercase">Nov</span>
<span className="text-lg font-bold leading-none">14</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Company Retreat</p>
<p className="text-xs text-slate-500">All Hands • 10:00 AM</p>
</div>
</div>

<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold uppercase">Nov</span>
<span className="text-lg font-bold leading-none">16</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Design Review</p>
<p className="text-xs text-slate-500">Google Meet • 02:00 PM</p>
</div>
</div>

<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold uppercase">Nov</span>
<span className="text-lg font-bold leading-none">18</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Project Deadline</p>
<p className="text-xs text-slate-500">Lumina V2 • EOD</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Recent Tasks</h3>
<div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start gap-3 shadow-sm mb-2">
<div className="mt-0.5 w-4 h-4 border-2 border-slate-300 rounded hover:border-slate-900 cursor-pointer transition-colors bg-white"></div>
<div>
<p className="text-xs font-semibold text-slate-900 line-through text-slate-400">Update User Profile</p>
<p className="text-[10px] text-slate-400 mt-0.5">Completed Today</p>
</div>
</div>
<div className="bg-white p-3 rounded-xl border border-slate-100 flex items-start gap-3 shadow-sm">
<div className="mt-0.5 w-4 h-4 border-2 border-slate-300 rounded hover:border-slate-900 cursor-pointer transition-colors"></div>
<div>
<p className="text-xs font-semibold text-slate-900">Review Q3 Design</p>
<p className="text-[10px] text-slate-400 mt-0.5">High Priority</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 mb-4 text-center">
<p className="text-xs text-slate-400">© 2023 Lumina HRMS Enterprise. All rights reserved.</p>
</div>
</div>
</main>


    </>
  );
}
