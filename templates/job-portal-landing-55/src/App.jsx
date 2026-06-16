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
      

<nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shrink-0">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="bg-indigo-600 rounded-lg p-1.5 text-white">
<i className="w-5 h-5" data-lucide="accessibility"></i>
</div>
<span className="text-xl font-medium tracking-tight text-slate-900">Starteryou</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="flex flex-col items-center gap-1 group" href="#">
<i className="w-5 h-5 text-indigo-600 transition-colors" data-lucide="briefcase"></i>
<span className="text-xs font-medium text-indigo-600">Jobs</span>
</a>
<a className="flex flex-col items-center gap-1 group text-slate-400 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<span className="text-xs font-medium">Education</span>
</a>
<a className="flex flex-col items-center gap-1 group text-slate-400 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="calendar"></i>
<span className="text-xs font-medium">Events</span>
</a>
<a className="flex flex-col items-center gap-1 group text-slate-400 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="car"></i>
<span className="text-xs font-medium">Ride Share</span>
</a>
<a className="flex flex-col items-center gap-1 group text-slate-400 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-xs font-medium">Profile</span>
</a>
</div>

<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md border border-gray-200 transition-all">
<i className="w-4 h-4" data-lucide="settings"></i>
                    Settings
                </button>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md shadow-sm transition-all">
<i className="w-4 h-4" data-lucide="log-out"></i>
                    Logout
                </button>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-6 py-6 overflow-hidden">

<header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 gap-6 shrink-0">
<div>
<h1 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Job Portal</h1>
<p className="text-base text-slate-500">Find your next opportunity from thousands of listings.</p>
</div>

<div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="search"></i>
<input className="w-full sm:w-80 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" placeholder="Search for job titles..." type="text"/>
</div>
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="map-pin"></i>
<input className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" placeholder="Location" type="text"/>
</div>
</div>
</header>

<section className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-200 pb-4 mb-6 gap-4 shrink-0">

<div className="flex items-center gap-1 bg-gray-100/50 p-1 rounded-lg border border-gray-200/50">
<button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-white text-indigo-600 shadow-sm text-sm font-medium border border-gray-200 transition-all">
                    Recommended
                    <span className="bg-indigo-100 text-indigo-700 text-xs py-0.5 px-1.5 rounded-full font-semibold">780</span>
</button>
<button className="px-4 py-1.5 rounded-md text-slate-500 hover:text-slate-700 hover:bg-gray-100 text-sm font-medium transition-all">
                    Applied
                </button>
<button className="px-4 py-1.5 rounded-md text-slate-500 hover:text-slate-700 hover:bg-gray-100 text-sm font-medium transition-all">
                    Saved
                </button>
</div>

<div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
<span className="text-sm font-medium text-slate-500 whitespace-nowrap">Filter By:</span>
<div className="relative">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:border-gray-300 shadow-sm transition-all whitespace-nowrap">
                        Work Location
                        <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="relative">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:border-gray-300 shadow-sm transition-all whitespace-nowrap">
                        Job Type
                        <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="relative">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:border-gray-300 shadow-sm transition-all whitespace-nowrap">
                        Experience Levels
                        <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</section>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">

<div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto pr-2 pb-10">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm animate-pulse">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-gray-200"></div>
<div className="w-6 h-6 rounded bg-gray-200"></div>
</div>
<div>
<div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
<div className="flex items-center gap-2 mb-4">
<div className="h-4 bg-gray-100 rounded w-1/3"></div>
<div className="h-4 bg-gray-100 rounded w-16"></div>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="h-4 bg-gray-100 rounded w-20"></div>
<div className="h-4 bg-gray-100 rounded w-20"></div>
</div>
<div className="h-3 bg-gray-100 rounded w-24"></div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm animate-pulse">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-gray-200"></div>
<div className="w-6 h-6 rounded bg-gray-200"></div>
</div>
<div>
<div className="h-5 bg-gray-200 rounded w-2/3 mb-3"></div>
<div className="flex items-center gap-2 mb-4">
<div className="h-4 bg-gray-100 rounded w-1/4"></div>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="h-4 bg-gray-100 rounded w-16"></div>
<div className="h-4 bg-gray-100 rounded w-24"></div>
</div>
<div className="h-3 bg-gray-100 rounded w-20"></div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm animate-pulse">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-gray-200"></div>
<div className="w-6 h-6 rounded bg-gray-200"></div>
</div>
<div>
<div className="h-5 bg-gray-200 rounded w-5/6 mb-3"></div>
<div className="flex items-center gap-2 mb-4">
<div className="h-4 bg-gray-100 rounded w-1/3"></div>
<div className="h-4 bg-gray-100 rounded w-12"></div>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="h-4 bg-gray-100 rounded w-20"></div>
<div className="h-4 bg-gray-100 rounded w-16"></div>
</div>
<div className="h-3 bg-gray-100 rounded w-28"></div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm animate-pulse">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-gray-200"></div>
<div className="w-6 h-6 rounded bg-gray-200"></div>
</div>
<div>
<div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
<div className="flex items-center gap-2 mb-4">
<div className="h-4 bg-gray-100 rounded w-24"></div>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="h-4 bg-gray-100 rounded w-20"></div>
<div className="h-4 bg-gray-100 rounded w-20"></div>
</div>
<div className="h-3 bg-gray-100 rounded w-24"></div>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden">

<div className="p-8 border-b border-gray-100 flex justify-between items-start">
<div className="flex gap-6 w-full">

<div className="w-20 h-20 rounded-xl bg-slate-900 text-white shrink-0 flex items-center justify-center shadow-sm">
<i className="w-10 h-10" data-lucide="layers"></i>
</div>

<div className="w-full animate-pulse">
<div className="h-8 bg-gray-200 rounded w-2/3 mb-3"></div>
<div className="h-5 bg-gray-100 rounded w-1/4 mb-5"></div>
<div className="flex items-center gap-4">
<div className="h-4 bg-gray-100 rounded w-20"></div>
<div className="h-4 bg-gray-100 rounded w-24"></div>
</div>
</div>
</div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
<button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="bookmark"></i>
</button>
</div>
</div>

<div className="overflow-y-auto flex-1 p-8">

<div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 mb-10 animate-pulse">
<div>
<div className="h-3 bg-gray-100 rounded w-24 mb-2"></div>
<div className="h-5 bg-gray-200 rounded w-32"></div>
</div>
<div>
<div className="h-3 bg-gray-100 rounded w-24 mb-2"></div>
<div className="h-5 bg-gray-200 rounded w-32"></div>
</div>
<div>
<div className="h-3 bg-gray-100 rounded w-24 mb-2"></div>
<div className="h-5 bg-gray-200 rounded w-40"></div>
</div>
<div>
<div className="h-3 bg-gray-100 rounded w-24 mb-2"></div>
<div className="h-5 bg-gray-200 rounded w-28"></div>
</div>
<div>
<div className="h-3 bg-gray-100 rounded w-24 mb-2"></div>
<div className="h-5 bg-gray-200 rounded w-20"></div>
</div>
</div>

<div className="mb-12">
<button className="flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base font-medium shadow-sm transition-all w-full sm:w-auto">
                            Apply for this Job
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="space-y-4 animate-pulse">
<div className="h-6 bg-gray-200 rounded w-48 mb-6"></div>
<div className="h-4 bg-gray-100 rounded w-full"></div>
<div className="h-4 bg-gray-100 rounded w-full"></div>
<div className="h-4 bg-gray-100 rounded w-5/6"></div>
<div className="h-4 bg-gray-100 rounded w-11/12"></div>
<div className="h-4 bg-gray-100 rounded w-full mt-6"></div>
<div className="h-4 bg-gray-100 rounded w-10/12"></div>
<div className="h-4 bg-gray-100 rounded w-full"></div>
<div className="h-4 bg-gray-100 rounded w-full mt-6"></div>
<div className="h-4 bg-gray-100 rounded w-3/4"></div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
