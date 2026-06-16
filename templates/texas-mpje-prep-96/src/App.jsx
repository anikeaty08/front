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
      

<aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col justify-between h-full flex-shrink-0 z-20">
<div className="p-6">

<div className="flex items-center gap-2 mb-10">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-medium tracking-tighter text-sm">TX</span>
</div>
<span className="text-base font-medium tracking-tight text-slate-900">MPJE<span className="text-slate-400 font-normal">PREP</span></span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50/50 rounded-lg transition-all group" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:document-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Practice Exams</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Flashcards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>TX Law Library</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Performance</span>
</a>
</nav>
<div className="mt-8">
<p className="px-3 text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Study Lists</p>
<nav className="space-y-1">
<a className="flex items-center justify-between px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-all" href="#">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
<span>C-II Regulations</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-all" href="#">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
<span>Sterile Compounding</span>
</div>
</a>
</nav>
</div>
</div>
<div className="p-4 border-t border-gray-100">
<a className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-gray-200 flex items-center justify-center text-xs font-medium text-slate-600">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Jane Doe</p>
<p className="text-xs text-slate-400 truncate">Exam Date: Oct 24</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:settings-linear"></iconify-icon>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 border-b border-gray-100 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-8 z-10">

<div className="md:hidden mr-4">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-4 text-sm text-slate-400">
<span>Dashboard</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-slate-900 font-medium">Overview</span>
</div>
<div className="flex items-center gap-6">

<div className="hidden md:flex items-center gap-3">
<span className="text-xs font-medium text-slate-500">Focus Mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>
<div className="h-4 w-px bg-gray-200 mx-2"></div>
<button className="relative text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white translate-x-1/2 -translate-y-1/2"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-2">Good morning, Jane.</h1>
<p className="text-slate-500 text-sm">You have <span className="text-slate-900 font-medium">14 days</span> until your Texas MPJE exam. Keep the momentum going.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white border border-gray-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:history-linear"></iconify-icon>
                            History
                        </button>
<button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm shadow-slate-200 flex items-center gap-2">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                            Resume Session
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32 relative overflow-hidden group">
<div className="z-10">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Overall Mastery</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-900 tracking-tight">72%</span>
<span className="text-xs text-emerald-600 flex items-center gap-0.5 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-md">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 2.4%
                                </span>
</div>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full mt-auto z-10">
<div className="bg-indigo-600 h-1.5 rounded-full w-[72%]"></div>
</div>

<iconify-icon className="absolute -right-4 -bottom-4 text-gray-50 opacity-50 group-hover:scale-110 transition-transform" icon="solar:cup-star-linear" width="100"></iconify-icon>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32 relative overflow-hidden">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Questions Bank</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-900 tracking-tight">482</span>
<span className="text-sm text-slate-400">/ 1,200</span>
</div>
</div>
<p className="text-xs text-slate-400">Completed 45 questions today.</p>
<iconify-icon className="absolute -right-4 -bottom-4 text-gray-50 opacity-50" icon="solar:file-check-linear" width="100"></iconify-icon>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between h-32 relative overflow-hidden">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Focus Area</p>
<div className="flex items-center gap-2 mt-1">
<div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:danger-circle-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 leading-tight">Class C Pharmacies</p>
<p className="text-xs text-red-500 font-medium">42% Accuracy</p>
</div>
</div>
</div>
<button className="text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1 mt-auto">
                            Start targeted quiz <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-slate-900">Study Modules</h2>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900">View all</button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-all cursor-pointer group shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
<iconify-icon icon="solar:pill-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Dangerous Drugs &amp; Controlled Substances</h3>
<p className="text-xs text-slate-500 mt-0.5">TCSA &amp; Federal CSA integration</p>
</div>
</div>
<div className="text-right">
<span className="text-lg font-medium text-slate-900">84%</span>
</div>
</div>

<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden flex">
<div className="bg-indigo-600 h-full" style={{width: '84%'}}></div>
</div>
<div className="flex justify-between mt-3">
<p className="text-xs text-slate-400">12 Sub-topics • Last studied 2h ago</p>
<span className="text-xs font-medium text-indigo-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Continue <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-all cursor-pointer group shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Pharmacy Operations &amp; Licensing</h3>
<p className="text-xs text-slate-500 mt-0.5">Class A, C, &amp; Remote Services</p>
</div>
</div>
<div className="text-right">
<span className="text-lg font-medium text-slate-900">65%</span>
</div>
</div>
<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden flex">
<div className="bg-orange-500 h-full" style={{width: '65%'}}></div>
</div>
<div className="flex justify-between mt-3">
<p className="text-xs text-slate-400">8 Sub-topics • Last studied yesterday</p>
<span className="text-xs font-medium text-orange-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Continue <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-all cursor-pointer group shadow-sm opacity-75 hover:opacity-100">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Prescription Requirements</h3>
<p className="text-xs text-slate-500 mt-0.5">Labeling, Transfers &amp; Counseling</p>
</div>
</div>
<div className="text-right">
<span className="text-lg font-medium text-slate-900">22%</span>
</div>
</div>
<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden flex">
<div className="bg-slate-400 h-full" style={{width: '22%'}}></div>
</div>
<div className="flex justify-between mt-3">
<p className="text-xs text-slate-400">5 Sub-topics • Last studied 3 days ago</p>
<span className="text-xs font-medium text-slate-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Start <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-indigo-900 text-white rounded-xl p-5 shadow-lg relative overflow-hidden">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-medium text-indigo-100">Daily Goal</h3>
<iconify-icon className="text-orange-400" icon="solar:fire-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-medium tracking-tight">45</span>
<span className="text-sm text-indigo-300 mb-1">/ 60 questions</span>
</div>
<p className="text-xs text-indigo-200">You're on a 5-day streak! Finish 15 more to keep it up.</p>
</div>

<div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-indigo-700 opacity-50"></div>
<div className="absolute -right-2 -top-2 w-24 h-24 rounded-full border border-indigo-600 opacity-50"></div>
</div>

<div>
<h2 className="text-sm font-medium text-slate-900 mb-4 px-1">Recommended for You</h2>
<div className="space-y-3">
<div className="group flex gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate group-hover:text-emerald-700 transition-colors">TX Specific: Inventories</p>
<p className="text-xs text-slate-500 truncate">15 Questions • 10 Mins</p>
</div>
<div className="self-center">
<iconify-icon className="text-slate-300 group-hover:text-emerald-500 transition-colors" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="group flex gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:case-minimalistic-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate group-hover:text-blue-700 transition-colors">Practitioner Relationships</p>
<p className="text-xs text-slate-500 truncate">Flashcards • 25 Cards</p>
</div>
<div className="self-center">
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-100 pt-6">
<h2 className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-4">Recent Quizzes</h2>
<ul className="space-y-4">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div>
<p className="text-xs font-medium text-slate-700">Federal Law Mock</p>
<p className="text-[10px] text-slate-400">Oct 09, 2:30 PM</p>
</div>
</div>
<span className="text-xs font-medium text-slate-900 bg-gray-100 px-2 py-1 rounded">88%</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div>
<p className="text-xs font-medium text-slate-700">Sterile Compounding</p>
<p className="text-[10px] text-slate-400">Oct 08, 9:15 AM</p>
</div>
</div>
<span className="text-xs font-medium text-slate-900 bg-gray-100 px-2 py-1 rounded">65%</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<footer className="mt-12 mb-6 text-center">
<p className="text-xs text-slate-300">© 2023 Texas MPJE Prep. Content updated for 2024 regulations.</p>
</footer>
</div>
</main>

    </>
  );
}
