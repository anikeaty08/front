import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-md mx-auto min-h-screen pb-12">

<header className="sticky top-0 z-20 bg-gray-50/90 backdrop-blur-md px-5 py-4 flex items-center gap-4 border-b border-gray-200/50">
<button className="p-1 -ml-1 text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<h1 className="text-lg font-semibold tracking-tight text-zinc-900">Attendance</h1>
</header>
<main className="px-5 pt-6 space-y-6">

<div className="bg-gray-200/60 p-1 rounded-xl flex items-center text-sm font-medium">
<button className="flex-1 bg-white text-zinc-900 shadow-sm rounded-lg py-2.5 transition-all duration-200">
                    Detailed Attendance
                </button>
<button className="flex-1 text-zinc-500 hover:text-zinc-900 py-2.5 transition-colors duration-200">
                    Overview
                </button>
</div>

<div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform">
<div className="flex items-center gap-3.5">
<div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
<i className="w-5 h-5 text-zinc-500" data-lucide="calendar"></i>
</div>
<span className="text-base font-medium text-zinc-900">December 2025</span>
</div>
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down"></i>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-40">
<div className="flex items-start gap-3">
<div className="text-rose-500 bg-rose-50 p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="frown"></i>
</div>
<span className="text-sm font-semibold text-zinc-900 pt-0.5 leading-tight">Sick Leave</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-end text-sm">
<span className="text-zinc-500">Used</span>
<span className="font-semibold text-zinc-900">2/2 days</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-full rounded-full"></div>
</div>
<p className="text-xs font-medium text-rose-600">Monthly limit reached</p>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-40">
<div className="flex items-start gap-3">
<div className="text-indigo-500 bg-indigo-50 p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<span className="text-sm font-semibold text-zinc-900 pt-0.5 leading-tight">Annual Leave</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-end text-sm">
<span className="text-zinc-500">Used</span>
<span className="font-semibold text-zinc-900">2/2 days</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-full rounded-full"></div>
</div>
<p className="text-xs font-medium text-zinc-400">Monthly limit reached</p>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-40">
<div className="flex items-start gap-3">
<div className="text-sky-500 bg-sky-50 p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<span className="text-sm font-semibold text-zinc-900 pt-0.5 leading-tight">Work from Home</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-end text-sm">
<span className="text-zinc-500">Used</span>
<span className="font-semibold text-zinc-900">2/6 days</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-sky-500 w-1/3 rounded-full"></div>
</div>
<p className="text-xs font-medium text-zinc-500">4 days remaining</p>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-40">
<div className="flex items-start gap-3">
<div className="text-emerald-500 bg-emerald-50 p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<span className="text-sm font-semibold text-zinc-900 pt-0.5 leading-tight">Field Visit</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-end text-sm">
<span className="text-zinc-500">Used</span>
<span className="font-semibold text-zinc-900">2/10 days</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-1/5 rounded-full"></div>
</div>
<p className="text-xs font-medium text-zinc-500">8 days remaining</p>
</div>
</div>
</div>

<div className="pt-2">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900 mb-4 px-1">Remaining Yearly Balance</h2>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-500">Sick Leave</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">8</span>
</div>
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<i className="w-5 h-5" data-lucide="frown"></i>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-500">Annual Leave</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">12</span>
</div>
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-500">WFH</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">9</span>
</div>
<div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-500">Field Visit</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">5</span>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
