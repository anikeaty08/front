import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[1600px] bg-[#F9F8F4] min-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-white/40">

<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-stone-200/30 rounded-full blur-[100px] pointer-events-none"></div>

<header className="relative z-10 px-8 py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
<div>
<h1 className="text-3xl font-medium tracking-tight text-stone-900">Kernwerk Dashboard</h1>
<p className="text-stone-500 text-lg mt-1 font-light">Welcome back, Admin</p>
</div>

<nav className="bg-white/60 backdrop-blur-md border border-stone-200/50 rounded-full px-2 py-2 flex items-center shadow-sm overflow-x-auto max-w-full">
<a className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all" href="#">Overview</a>
<a className="hover:text-stone-900 transition-all whitespace-nowrap text-sm font-medium text-stone-600 rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="#">Challenges</a>
<a className="text-stone-600 hover:text-stone-900 px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap" href="#">Exercises</a>
<a className="text-stone-600 hover:text-stone-900 px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap" href="#">Users</a>
<a className="text-stone-600 hover:text-stone-900 px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap" href="#">Media</a>
<a className="flex items-center justify-center w-10 h-10 ml-2 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors" href="#">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</a>
<div className="relative ml-2">
<div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0 border-2 border-white"></div>
<a className="flex items-center justify-center w-10 h-10 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors" href="#">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</a>
</div>
<a className="ml-2 w-10 h-10 rounded-full bg-stone-300 overflow-hidden border border-stone-200" href="#">
<img alt="Admin" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</a>
</nav>
</header>

<div className="relative z-10 px-8 pb-4 flex flex-wrap gap-12 items-end">

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1 text-stone-500">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium uppercase tracking-wider">Total Active Users</span>
</div>
<div className="text-5xl font-light tracking-tighter text-stone-900">12,408</div>
</div>

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1 text-stone-500">
<svg className="lucide lucide-trophy w-4 h-4" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<span className="text-sm font-medium uppercase tracking-wider">Running Challenges</span>
</div>
<div className="text-5xl font-light tracking-tighter text-stone-900">4</div>
</div>

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1 text-stone-500">
<svg className="lucide lucide-dumbbell w-4 h-4" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
<span className="text-sm font-medium uppercase tracking-wider">Exercises</span>
</div>
<div className="text-5xl font-light tracking-tighter text-stone-900">342</div>
</div>

<div className="ml-auto flex items-center gap-4 bg-white/40 px-6 py-3 rounded-2xl border border-stone-100">
<div>
<span className="block text-sm text-stone-500">Video Uploads</span>
<span className="block text-xl font-medium text-stone-800">85% <span className="text-sm font-normal text-stone-400">storage used</span></span>
</div>

<div className="w-24 h-2 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-stone-800 w-[85%]"></div>
</div>
</div>
</div>

<main className="relative z-10 p-8 pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 pb-12">

<div className="md:col-span-4 lg:col-span-3 bg-[#F2EFE9] rounded-[2rem] p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full group">
<div className="relative w-full aspect-[4/5] rounded-[1.8rem] overflow-hidden">
<img alt="Challenge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="bg-yellow-400 text-stone-900 text-xs font-semibold px-2 py-1 rounded-md mb-2 inline-block">ACTIVE</span>
<h3 className="text-2xl font-medium tracking-tight">Summer Strength</h3>
<p className="text-white/80 text-sm mt-1">Mixed Modality • Advanced</p>
</div>
</div>
<div className="p-5 flex justify-between items-center">
<div>
<p className="text-stone-500 text-sm">Participants</p>
<p className="text-stone-900 font-medium text-lg">2,109</p>
</div>
<button className="bg-white text-stone-900 border border-stone-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm">
                        Manage
                    </button>
</div>
</div>

<div className="md:col-span-5 lg:col-span-6 flex flex-col gap-6">

<div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] border border-white/50 relative overflow-hidden">
<div className="flex justify-between items-start mb-8">
<div className="">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Challenge Participation</h3>
<p className="text-stone-500 mt-1">Weekly active users vs completions</p>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 hover:bg-white transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-stone-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="flex items-end justify-between h-40 gap-4 px-2">

<div className="w-full flex flex-col gap-2 items-center group cursor-pointer">
<div className="w-full bg-stone-200 h-24 rounded-t-xl relative overflow-hidden group-hover:bg-stone-300 transition-colors"></div>
<span className="text-xs text-stone-400 font-medium">Mon</span>
</div>
<div className="w-full flex flex-col gap-2 items-center group cursor-pointer">
<div className="w-full bg-stone-200 h-16 rounded-t-xl group-hover:bg-stone-300 transition-colors"></div>
<span className="text-xs text-stone-400 font-medium">Tue</span>
</div>
<div className="w-full flex flex-col gap-2 items-center group cursor-pointer">
<div className="w-full bg-stone-800 h-32 rounded-t-xl relative overflow-hidden group-hover:bg-stone-700 transition-colors">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    420 Users
                                </div>
</div>
<span className="text-xs text-stone-800 font-medium">Wed</span>
</div>
<div className="w-full flex flex-col gap-2 items-center group cursor-pointer">
<div className="w-full bg-stone-200 h-28 rounded-t-xl group-hover:bg-stone-300 transition-colors"></div>
<span className="text-xs text-stone-400 font-medium">Thu</span>
</div>
<div className="w-full flex flex-col gap-2 items-center group cursor-pointer">
<div className="w-full bg-yellow-400 h-36 rounded-t-xl relative shadow-[0_0_20px_rgba(250,204,21,0.4)] group-hover:bg-yellow-300 transition-colors"></div>
<span className="text-xs text-stone-800 font-medium">Fri</span>
</div>
<div className="w-full flex flex-col gap-2 items-center group cursor-pointer">
<div className="w-full bg-stone-200 h-20 rounded-t-xl group-hover:bg-stone-300 transition-colors"></div>
<span className="text-xs text-stone-400 font-medium">Sat</span>
</div>
<div className="w-full flex flex-col gap-2 items-center group cursor-pointer">
<div className="w-full bg-stone-200 h-12 rounded-t-xl group-hover:bg-stone-300 transition-colors"></div>
<span className="text-xs text-stone-400 font-medium">Sun</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#FFFAE5] rounded-[2rem] p-6 shadow-sm border border-yellow-100 relative">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium text-stone-800">Completion Rate</h3>
<button className="text-stone-400 hover:text-stone-600">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="flex items-center gap-6">

<div className="relative w-32 h-32">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#E5E1D0" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="#FACC15" stroke-dasharray="251.2" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-medium text-stone-900">76%</span>
<span className="text-xs text-stone-500">Avg</span>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<span className="text-sm text-stone-600">Completed</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-stone-200"></div>
<span className="text-sm text-stone-600">Dropped</span>
</div>
<button className="mt-2 bg-white px-4 py-2 rounded-xl text-xs font-medium border border-stone-200/50 shadow-sm text-stone-800">View Report</button>
</div>
</div>
</div>

<div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 shadow-sm border border-white/50 flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-stone-800 mb-4">Quick Actions</h3>
<div className="space-y-3">
<button className="w-full flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-yellow-50 hover:text-yellow-700 transition-colors group">
<div className="bg-white p-2 rounded-lg shadow-sm group-hover:shadow-none transition-shadow">
<svg className="lucide lucide-plus w-4 h-4 text-stone-800" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-sm font-medium">New Challenge</span>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors group">
<div className="bg-white p-2 rounded-lg shadow-sm group-hover:shadow-none transition-shadow">
<svg className="lucide lucide-dumbbell w-4 h-4 text-stone-800" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<span className="text-sm font-medium">Add Exercise</span>
</button>
</div>
</div>
<div className="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center">
<span className="text-xs text-stone-400 font-medium">SYSTEM STATUS</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs text-stone-600">Operational</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-3 bg-[#1A1A1A] rounded-[2rem] p-6 text-white flex flex-col relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex justify-between items-center mb-8 relative z-10">
<h3 className="text-lg font-normal tracking-wide text-stone-200">Recent Logs</h3>
<span className="text-sm text-stone-500">24h</span>
</div>
<div className="space-y-6 relative z-10 flex-1 overflow-y-auto pr-2">

<div className="flex gap-4 group cursor-pointer">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-upload-cloud w-4 h-4" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-stone-200 group-hover:text-yellow-400 transition-colors">New Video Upload</p>
<p className="text-xs text-stone-500 mt-0.5">Push_up_adv.mp4</p>
<p className="text-[10px] text-stone-600 mt-1">10:42 AM • Admin</p>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-stone-200 group-hover:text-green-400 transition-colors">Challenge Published</p>
<p className="text-xs text-stone-500 mt-0.5">"30 Day Core"</p>
<p className="text-[10px] text-stone-600 mt-1">09:15 AM • Content Mgr</p>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-stone-200 group-hover:text-blue-400 transition-colors">New User Spike</p>
<p className="text-xs text-stone-500 mt-0.5">+150 signups via Promo</p>
<p className="text-[10px] text-stone-600 mt-1">Yesterday</p>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-alert-circle w-4 h-4" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-stone-200 group-hover:text-red-400 transition-colors">Safety Flag</p>
<p className="text-xs text-stone-500 mt-0.5">Comment reported</p>
<p className="text-[10px] text-stone-600 mt-1">Yesterday</p>
</div>
</div>
</div>

<div className="mt-auto pt-6 border-t border-white/10">
<button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium text-stone-300 transition-colors flex items-center justify-center gap-2">
<span>View Audit Logs</span>
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="md:col-span-12 bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-sm border border-stone-200/50">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Recent Exercises</h3>
<div className="flex gap-3">
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-xs font-medium text-stone-600 border border-stone-200">
<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> Strength
                        </span>
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-xs font-medium text-stone-600 border border-stone-200">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Mobility
                        </span>
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-xs font-medium text-stone-600 border border-stone-200">
<div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Cardio
                        </span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-stone-400 text-xs uppercase tracking-wider border-b border-stone-100">
<th className="pb-4 pl-2 font-medium">Exercise Name</th>
<th className="pb-4 font-medium">Category</th>
<th className="pb-4 font-medium">Difficulty</th>
<th className="pb-4 font-medium">Equip</th>
<th className="pb-4 font-medium">Status</th>
<th className="pb-4 pr-2 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="text-stone-700 text-base">

<tr className="group hover:bg-white/50 transition-colors">
<td className="py-4 pl-2 border-b border-stone-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-stone-200 flex-shrink-0 overflow-hidden">
<img alt="" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60"/>
</div>
<span className="font-medium group-hover:text-black">Barbell Squat</span>
</div>
</td>
<td className="py-4 border-b border-stone-100"><span className="text-sm">Strength / Legs</span></td>
<td className="py-4 border-b border-stone-100"><span className="text-sm px-2 py-1 bg-red-50 text-red-600 rounded-md text-xs font-medium">Advanced</span></td>
<td className="py-4 border-b border-stone-100"><span className="text-sm text-stone-500">Barbell</span></td>
<td className="py-4 border-b border-stone-100">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500 fill-green-100" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">Published</span>
</div>
</td>
<td className="py-4 pr-2 border-b border-stone-100 text-right">
<button className="text-stone-400 hover:text-stone-800 transition-colors"><svg className="lucide lucide-edit-3 w-4 h-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg></button>
</td>
</tr>

<tr className="group hover:bg-white/50 transition-colors">
<td className="py-4 pl-2 border-b border-stone-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-stone-200 flex-shrink-0 overflow-hidden">
<img alt="" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60"/>
</div>
<span className="font-medium group-hover:text-black">Plank Hold</span>
</div>
</td>
<td className="py-4 border-b border-stone-100"><span className="text-sm">Core / Stability</span></td>
<td className="py-4 border-b border-stone-100"><span className="text-sm px-2 py-1 bg-green-50 text-green-600 rounded-md text-xs font-medium">Beginner</span></td>
<td className="py-4 border-b border-stone-100"><span className="text-sm text-stone-500">None</span></td>
<td className="py-4 border-b border-stone-100">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500 fill-green-100" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">Published</span>
</div>
</td>
<td className="py-4 pr-2 border-b border-stone-100 text-right">
<button className="text-stone-400 hover:text-stone-800 transition-colors"><svg className="lucide lucide-edit-3 w-4 h-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg></button>
</td>
</tr>

<tr className="group hover:bg-white/50 transition-colors">
<td className="py-4 pl-2 border-b border-stone-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-stone-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
<svg className="lucide lucide-image w-5 h-5 text-stone-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<span className="font-medium group-hover:text-black">Kettlebell Swing</span>
</div>
</td>
<td className="py-4 border-b border-stone-100"><span className="text-sm">Conditioning</span></td>
<td className="py-4 border-b border-stone-100"><span className="text-sm px-2 py-1 bg-yellow-50 text-yellow-600 rounded-md text-xs font-medium">Intermediate</span></td>
<td className="py-4 border-b border-stone-100"><span className="text-sm text-stone-500">Kettlebell</span></td>
<td className="py-4 border-b border-stone-100">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-circle-dashed w-4 h-4 text-stone-400" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg>
<span className="text-sm text-stone-500">Draft</span>
</div>
</td>
<td className="py-4 pr-2 border-b border-stone-100 text-right">
<button className="text-stone-400 hover:text-stone-800 transition-colors"><svg className="lucide lucide-edit-3 w-4 h-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>


    </>
  );
}
