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
      

<aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col h-full z-20">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="text-xs font-semibold">T</span>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">TALENTBRIDGE</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<p className="px-3 text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Dashboard</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-50 rounded-lg group" href="#">
<iconify-icon className="text-zinc-900 group-hover:text-zinc-900 transition-colors" icon="solar:widget-2-linear" width="20"></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg group transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:briefcase-linear" width="20"></iconify-icon>
                Job Matches
                <span className="ml-auto bg-indigo-50 text-indigo-600 text-xs py-0.5 px-2 rounded-full font-medium">8</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg group transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:folder-with-files-linear" width="20"></iconify-icon>
                My Applications
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg group transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
                Mock Interviews
            </a>
<p className="px-3 text-xs font-medium text-zinc-400 mt-8 mb-2 uppercase tracking-wide">Preparation</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg group transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:clipboard-check-linear" width="20"></iconify-icon>
                Assessments
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg group transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:document-text-linear" width="20"></iconify-icon>
                Resume Builder
            </a>
</nav>
<div className="p-4 border-t border-zinc-100">
<button className="flex items-center gap-3 w-full px-3 py-2 hover:bg-zinc-50 rounded-lg transition-colors">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 text-xs font-medium">JD</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
<div className="text-left flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Product Designer</p>
</div>
<iconify-icon className="text-zinc-400" icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 glass border-b border-zinc-200 flex items-center justify-between px-6 z-10 sticky top-0 w-full">
<div className="flex items-center gap-4 lg:hidden">
<button className="p-2 -ml-2 text-zinc-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<span className="text-sm font-semibold tracking-tight text-zinc-900">TALENTBRIDGE</span>
</div>

<div className="hidden lg:flex items-center gap-2 text-sm">
<span className="text-zinc-400">Candidate</span>
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-zinc-900 font-medium">Dashboard</span>
</div>

<div className="flex items-center gap-4 ml-auto">
<div className="hidden md:flex items-center gap-2 bg-white border border-zinc-200 rounded-lg px-3 py-1.5 shadow-sm hover:border-zinc-300 transition-colors cursor-text group w-64">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-zinc-900 w-full placeholder-zinc-400" placeholder="Search jobs, skills..." type="text"/>
<div className="flex items-center gap-0.5">
<kbd className="text-[10px] font-sans text-zinc-400 bg-zinc-50 border border-zinc-200 rounded px-1 min-w-[16px] text-center">⌘</kbd>
<kbd className="text-[10px] font-sans text-zinc-400 bg-zinc-50 border border-zinc-200 rounded px-1 min-w-[16px] text-center">K</kbd>
</div>
</div>
<div className="h-6 w-px bg-zinc-200 mx-1 hidden md:block"></div>
<button className="relative p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Good morning, John</h1>
<p className="text-sm text-zinc-500 mt-1">Here is what’s happening with your job search today.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-zinc-500">Profile Completion</span>
<div className="w-32 h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 w-[85%] rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-900">85%</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:plain-stack-linear" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+2 new</span>
</div>
<div className="space-y-1">
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">12</p>
<p className="text-sm text-zinc-500">Active Applications</p>
</div>
</div>

<div className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">3</p>
<p className="text-sm text-zinc-500">Upcoming Interviews</p>
</div>
</div>

<div className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-0.5 rounded-full">New</span>
</div>
<div>
<p className="text-lg font-medium text-white tracking-tight">Mock Interview</p>
<p className="text-xs text-zinc-400 mt-1">Practice React algorithms with AI.</p>
<button className="mt-3 text-xs font-medium bg-white text-zinc-900 px-3 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors w-max">Start Session</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium text-zinc-900">AI Recommended Jobs</h2>
<button className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                View all <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition-all hover:shadow-sm cursor-pointer">
<div className="flex justify-between items-start gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
<span className="font-bold text-lg tracking-tighter">V</span>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">Senior Frontend Engineer</h3>
<p className="text-sm text-zinc-500 mt-0.5">Vercel · Remote</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">React</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">TypeScript</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">$160k - $220k</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full border border-indigo-100/50">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold">98% Match</span>
</div>
<span className="text-xs text-zinc-400">2h ago</span>
</div>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition-all hover:shadow-sm cursor-pointer">
<div className="flex justify-between items-start gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
<span className="font-bold text-lg tracking-tighter">L</span>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">Product Designer</h3>
<p className="text-sm text-zinc-500 mt-0.5">Linear · San Francisco (Hybrid)</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">Figma</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">Design Systems</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">$140k - $190k</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-100/50">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold">92% Match</span>
</div>
<span className="text-xs text-zinc-400">5h ago</span>
</div>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition-all hover:shadow-sm cursor-pointer">
<div className="flex justify-between items-start gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white shrink-0">
<span className="font-bold text-lg tracking-tighter">S</span>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">Full Stack Developer</h3>
<p className="text-sm text-zinc-500 mt-0.5">Stripe · New York</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">Ruby</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">React</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-100">$180k+</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="flex items-center gap-1.5 bg-zinc-100 text-zinc-600 px-2 py-1 rounded-full border border-zinc-200/50">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold">88% Match</span>
</div>
<span className="text-xs text-zinc-400">1d ago</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-zinc-200 rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900">Filters</h3>
<button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">Reset</button>
</div>
<div className="space-y-5">

<div>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">Job Type</p>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Full-time</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Contract</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Freelance</span>
</label>
</div>
</div>

<div>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">Location</p>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-600">Remote Only</span>
<input className="toggle-checkbox" type="checkbox"/>
</div>
</div>

<div>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">Salary Range</p>
<div className="relative pt-1">
<div className="h-1 bg-zinc-100 rounded-full w-full">
<div className="absolute left-[20%] right-[30%] top-1 h-1 bg-zinc-900 rounded-full"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-zinc-500">
<span>$50k</span>
<span className="text-zinc-900 font-medium">$120k+</span>
<span>$300k</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5">
<h3 className="text-sm font-medium text-zinc-900 mb-4">Resume Parsing</h3>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Analysis Complete</p>
<p className="text-xs text-zinc-500">Updated 2h ago</p>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-600">React.js</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-600">UX Design</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-600">Figma</span>
<button className="px-2 py-0.5 rounded text-[10px] font-medium border border-zinc-200 text-zinc-400 hover:text-zinc-600 hover:border-zinc-300 transition-colors">+</button>
</div>
</div>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>

    </>
  );
}
