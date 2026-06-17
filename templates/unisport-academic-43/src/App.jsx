import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="shadow-gray-200/50 md:p-10 overflow-hidden bg-white w-full max-w-[1400px] border-gray-100 border rounded-[3rem] pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">

<div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

<nav className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 relative z-10">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white backdrop-blur-sm shadow-sm">
<iconify-icon className="text-xl text-indigo-600" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-2xl tracking-tight font-normal text-gray-900">UniSport</span>
</div>
<div className="flex bg-gray-50 rounded-full p-1.5 shadow-sm border border-gray-200 overflow-x-auto w-full md:w-auto">
<a className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-base font-normal whitespace-nowrap transition-colors" href="#">Dashboard</a>
<a className="px-6 py-2.5 rounded-full text-gray-500 hover:text-gray-900 text-base font-normal whitespace-nowrap transition-colors" href="#">Courses</a>
<a className="px-6 py-2.5 rounded-full text-gray-500 hover:text-gray-900 text-base font-normal whitespace-nowrap transition-colors" href="#">Schedule</a>
<a className="px-6 py-2.5 rounded-full text-gray-500 hover:text-gray-900 text-base font-normal whitespace-nowrap transition-colors" href="#">Facilities</a>
<a className="px-6 py-2.5 rounded-full text-gray-500 hover:text-gray-900 text-base font-normal whitespace-nowrap transition-colors" href="#">Reviews</a>
</div>
<div className="flex gap-4 items-center">
<button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all">
<iconify-icon className="text-xl text-gray-600" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-normal text-gray-600 hidden lg:block">Settings</span>
</button>
<button className="w-11 h-11 rounded-full bg-white hover:bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm transition-all relative">
<iconify-icon className="text-xl text-gray-600" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.6)]"></span>
</button>
<button className="w-11 h-11 rounded-full bg-white hover:bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm transition-all">
<iconify-icon className="text-xl text-gray-600" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<h1 className="text-5xl text-gray-900 tracking-tight font-extralight mb-10">Welcome back, Alex</h1>

<div className="flex flex-wrap items-center justify-between gap-6 mb-10 border-b border-gray-200 pb-8">
<div className="flex flex-wrap items-center gap-8 w-full lg:w-auto">
<div className="flex flex-col gap-2">
<span className="text-base text-gray-500 font-normal">Enrolled</span>
<div className="flex items-center gap-3">
<span className="px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm font-normal shadow-sm">3 Classes</span>
<span className="text-sm font-normal text-gray-600 bg-white border-gray-200 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4">1 Waitlist</span>
</div>
</div>
<div className="hidden md:block w-[1px] h-10 bg-gray-200"></div>
<div className="flex flex-col gap-2 flex-grow">
<span className="text-base font-normal text-gray-500">Weekly Goal</span>
<div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 w-48 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full w-[60%]"></div>
<div className="opacity-20 w-full h-full absolute top-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #ffffff 4px, #ffffff 8px)'}}></div>
</div>
</div>
</div>

<div className="flex items-center gap-12 w-full lg:w-auto justify-between lg:justify-end">
<div className="flex flex-col items-center">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-extralight tracking-tight text-gray-900">12</span>
<iconify-icon className="text-xl text-indigo-600 mb-1" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base text-gray-500 font-normal mt-1">Credits</span>
</div>
<div className="flex flex-col items-center">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-extralight tracking-tight text-gray-900">4</span>
<iconify-icon className="text-xl text-indigo-600 mb-1" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base text-gray-500 font-normal mt-1">Hours/wk</span>
</div>
<div className="flex flex-col items-center">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-extralight tracking-tight text-gray-900">98</span>
<iconify-icon className="text-xl text-indigo-600 mb-1" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base text-gray-500 font-normal mt-1">Attendance %</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-3 space-y-6">

<div className="relative bg-white rounded-[2rem] p-4 shadow-sm border border-gray-200 overflow-hidden h-80 group">
<img alt="Student" className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent rounded-[1.5rem]"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div>
<h3 className="text-white text-2xl font-normal tracking-tight mb-1 relative z-10">Alex Mercer</h3>
<p className="text-gray-200 text-base relative z-10">Kinesiology Major</p>
</div>
<div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-normal text-base relative z-10">
                            Varsity
                        </div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-200">
<div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer group">
<span className="text-base font-normal text-gray-900 group-hover:text-indigo-600 transition-colors">Active Memberships</span>
<iconify-icon className="text-xl text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="border-gray-100 border-b pt-4 pb-4">
<div className="flex justify-between items-center cursor-pointer group mb-4">
<span className="text-base font-normal text-gray-900">Current Courses</span>
<iconify-icon className="text-xl text-gray-400" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl border border-gray-200 shadow-sm">
<div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-3xl" icon="solar:waterdrop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-base font-normal text-gray-900">Adv. Swimming</h4>
<p className="text-sm text-gray-500">Pool A • Tue, Thu</p>
</div>
<button className="p-2 hover:bg-gray-200 rounded-full"><iconify-icon className="text-xl text-gray-400" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>
<div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer group">
<span className="text-base font-normal text-gray-900 group-hover:text-indigo-600 transition-colors">Payment History</span>
<iconify-icon className="text-xl text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex justify-between items-center py-3 cursor-pointer group">
<span className="text-base font-normal text-gray-900 group-hover:text-indigo-600 transition-colors">Medical Forms</span>
<iconify-icon className="text-xl text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-6">

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-200 relative">
<div className="flex justify-between items-start mb-10">
<div className="">
<h2 className="text-xl font-normal text-gray-900 mb-1">Activity Level</h2>
<div className="flex items-baseline gap-2">
<span className="text-4xl tracking-tight font-extralight text-gray-900">4.2h</span>
<span className="text-base text-gray-500">Logged this week</span>
</div>
</div>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
<iconify-icon className="text-xl text-gray-500" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="h-48 flex items-end justify-between px-2 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 opacity-40">
<div className="w-full border-t border-dashed border-gray-300"></div>
<div className="w-full border-t border-dashed border-gray-300"></div>
<div className="w-full border-t border-dashed border-gray-300"></div>
</div>

<div className="flex flex-col items-center gap-3 z-10">
<div className="w-1.5 h-16 rounded-full bg-gray-100 relative">
<div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full bg-gray-300"></div>
</div>
<span className="text-sm font-normal text-gray-500">S</span>
</div>
<div className="flex flex-col items-center gap-3 z-10">
<div className="w-1.5 h-24 rounded-full bg-gray-900 relative">
<div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full bg-gray-900"></div>
</div>
<span className="text-sm font-normal text-gray-500">M</span>
</div>
<div className="flex flex-col items-center gap-3 z-10">
<div className="w-1.5 h-12 rounded-full bg-gray-100 relative">
<div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full bg-gray-300"></div>
</div>
<span className="text-sm font-normal text-gray-500">T</span>
</div>
<div className="flex flex-col items-center gap-3 z-10">
<div className="w-1.5 h-32 rounded-full bg-gray-900 relative">
<div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full bg-gray-900"></div>
</div>
<span className="text-sm font-normal text-gray-500">W</span>
</div>
<div className="flex flex-col items-center gap-3 z-10 relative">

<div className="absolute -top-10 bg-indigo-600 text-white text-xs font-normal px-3 py-1.5 rounded-full whitespace-nowrap z-20 shadow-sm shadow-indigo-600/20">
                                2h 15m
                            </div>
<div className="w-1.5 h-28 rounded-full bg-indigo-600 relative shadow-[0_0_12px_rgba(79,70,229,0.3)]">
<div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full bg-indigo-600"></div>
</div>
<span className="text-sm font-normal text-gray-900">T</span>
</div>
<div className="flex flex-col items-center gap-3 z-10">
<div className="w-1.5 h-10 rounded-full bg-gray-100 relative">
<div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full bg-gray-300"></div>
</div>
<span className="text-sm font-normal text-gray-500">F</span>
</div>
<div className="flex flex-col items-center gap-3 z-10">
<div className="w-1.5 h-6 rounded-full bg-gray-100 relative">
<div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full bg-gray-300"></div>
</div>
<span className="text-sm font-normal text-gray-500">S</span>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="">
<div className="flex justify-between items-center w-full mb-6">
<h2 className="text-xl font-normal text-gray-900">Current Session</h2>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 md:hidden">
<iconify-icon className="text-xl text-gray-500" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:pause-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-40 h-40 flex-shrink-0">
<svg className="w-full h-full transform -rotate-90">
<circle cx="80" cy="80" fill="none" r="70" stroke="#F3F4F6" stroke-dasharray="4 6" strokeWidth="8"></circle>
<circle cx="80" cy="80" fill="none" r="70" stroke="#E5E7EB" strokeWidth="8"></circle>
<circle className="drop-shadow-[0_0_8px_rgba(79,70,229,0.3)]" cx="80" cy="80" fill="none" r="70" stroke="#4F46E5" stroke-dasharray="439.8" stroke-dashoffset="150" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-extralight tracking-tight text-gray-900">45:20</span>
<span className="text-sm text-gray-500 font-normal">Remaining</span>
</div>
</div>
<div className="hidden md:flex flex-col justify-between h-full items-end">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
<iconify-icon className="text-xl text-gray-500" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:bg-indigo-700 transition-colors mt-10">
<iconify-icon className="text-2xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="flex items-center justify-between px-2">
<div>
<h3 className="text-xl font-normal text-gray-900">Program Status</h3>
</div>
<span className="text-3xl font-extralight tracking-tight text-gray-900">42%</span>
</div>
<div className="flex gap-2 h-12 mb-2">
<div className="h-full bg-indigo-600 rounded-l-xl w-[42%] relative group">
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-l-xl">
<span className="text-xs font-normal text-white">Completed</span>
</div>
</div>
<div className="h-full bg-gray-900 w-[25%] relative group">
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10">
<span className="text-xs font-normal text-white">In Progress</span>
</div>
</div>
<div className="h-full bg-gray-50 rounded-r-xl flex-1 relative group border border-gray-200"></div>
</div>
<div className="flex text-base font-normal text-gray-500 justify-between px-1">
<span>42%</span>
<span>25%</span>
<span>33%</span>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-200 relative overflow-hidden mt-6 h-[450px]">
<div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-2xl"></div>
<div className="flex justify-between items-end mb-8 relative z-10">
<h2 className="text-xl font-normal text-gray-900">Upcoming Classes</h2>
<span className="text-3xl font-extralight text-indigo-600 tracking-tight">3/8</span>
</div>
<div className="space-y-6 relative z-10">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mt-1">
<iconify-icon className="text-xl text-gray-400" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-base font-normal line-through text-gray-400">Sports Psychology Online</h4>
<p className="text-sm text-gray-400 mt-1">Sep 13, 08:30</p>
</div>
<div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center mt-2">
<iconify-icon className="text-base text-white" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mt-1">
<iconify-icon className="text-xl text-gray-400" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-base font-normal line-through text-gray-400">Team Strategy Meeting</h4>
<p className="text-sm text-gray-400 mt-1">Sep 13, 10:30</p>
</div>
<div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center mt-2">
<iconify-icon className="text-base text-white" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex items-start gap-4 bg-gray-50 p-3 -mx-3 rounded-2xl border border-gray-200">
<div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mt-1 shadow-[0_0_10px_rgba(79,70,229,0.3)]">
<iconify-icon className="text-xl" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-base font-normal text-gray-900">Weightlifting Form</h4>
<p className="text-sm text-gray-500 mt-1">Sep 13, 13:00 • Gym A</p>
</div>
<div className="w-6 h-6 rounded-full border-2 border-indigo-600 mt-2 cursor-pointer bg-white"></div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mt-1">
<iconify-icon className="text-xl text-gray-400" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-base font-normal text-gray-600">Nutrition Plan Review</h4>
<p className="text-sm text-gray-500 mt-1">Sep 13, 14:45</p>
</div>
<div className="w-6 h-6 rounded-full border-2 border-gray-300 mt-2 hover:border-gray-400 transition-colors cursor-pointer bg-white"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 bg-white rounded-[2.5rem] shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col lg:flex-row gap-8">

<div className="flex-1 relative">

<div className="flex justify-between items-center mb-8 px-2">
<button className="px-5 py-2 rounded-full border border-gray-200 text-base font-normal text-gray-600 bg-white hover:bg-gray-50 transition-colors">August</button>
<h2 className="text-xl font-normal text-gray-900">September 2024</h2>
<button className="px-5 py-2 rounded-full border border-gray-200 text-base font-normal text-gray-600 bg-white hover:bg-gray-50 transition-colors">October</button>
</div>

<div className="flex w-full overflow-x-auto pb-4 custom-scrollbar">
<div className="flex flex-col gap-10 mt-16 pr-6 text-sm text-gray-500 font-normal whitespace-nowrap">
<span>8:00 am</span>
<span>9:00 am</span>
<span>10:00 am</span>
<span>11:00 am</span>
</div>
<div className="flex flex-1 min-w-[600px] relative">

<div className="absolute inset-0 flex justify-between pointer-events-none">
<div className="h-full w-px dotted-line"></div>
<div className="h-full w-px dotted-line"></div>
<div className="h-full w-px dotted-line"></div>
<div className="h-full w-px dotted-line"></div>
<div className="h-full w-px dotted-line"></div>
<div className="h-full w-px dotted-line"></div>
</div>

<div className="w-full flex justify-between absolute top-0 left-0 right-0 -mt-10">
<div className="flex flex-col items-center flex-1"><span className="text-base text-gray-500 font-normal">Mon</span><span className="text-xl font-normal text-gray-900">22</span></div>
<div className="flex flex-col items-center flex-1"><span className="text-base text-gray-500 font-normal">Tue</span><span className="text-xl font-normal text-gray-900">23</span></div>
<div className="flex flex-col items-center flex-1"><span className="text-base text-gray-500 font-normal">Wed</span><span className="text-xl font-normal text-gray-900">24</span></div>
<div className="flex flex-col items-center flex-1"><span className="text-base text-gray-500 font-normal">Thu</span><span className="text-xl font-normal text-gray-900">25</span></div>
<div className="flex flex-col items-center flex-1"><span className="text-base text-gray-500 font-normal">Fri</span><span className="text-xl font-normal text-gray-900">26</span></div>
</div>

<div className="relative w-full h-[240px] mt-12">
<div className="absolute top-[10px] left-[20%] w-[35%] bg-gray-900 border border-gray-800 rounded-2xl p-4 text-white shadow-sm z-10 flex justify-between items-center hover:-translate-y-1 transition-transform cursor-pointer">
<div>
<h4 className="text-base font-normal">Basketball Practice</h4>
<p className="text-xs text-gray-300 mt-1">Gym C • Coach Davis</p>
</div>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-gray-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-gray-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute top-[120px] left-[55%] w-[35%] bg-indigo-600 border border-indigo-500 rounded-2xl p-4 shadow-[0_0_15px_rgba(79,70,229,0.2)] z-10 flex justify-between items-center hover:-translate-y-1 transition-transform cursor-pointer">
<div>
<h4 className="text-base font-normal text-white">Yoga Fundamentals</h4>
<p className="text-xs text-indigo-100 mt-1">Studio 2 • Intro level</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:leaf-linear" strokeWidth="2"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-[400px] flex-shrink-0 bg-white rounded-[2rem] border border-gray-200 shadow-sm p-6 relative overflow-hidden flex flex-col">
<div className="h-32 -mx-6 -mt-6 bg-gray-50 mb-6 relative overflow-hidden border-b border-gray-100">
<iconify-icon className="absolute -right-4 -bottom-4 text-9xl text-gray-200" icon="solar:ball-linear" strokeWidth="1"></iconify-icon>
<div className="absolute top-4 left-6 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-normal text-gray-900 shadow-sm">Featured Course</div>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-normal tracking-tight text-gray-900">Advanced Tennis Techniques</h3>
<div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg border border-gray-200">
<iconify-icon className="text-base text-indigo-600" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-normal text-gray-900">4.9</span>
</div>
</div>
<p className="text-base text-gray-600 mb-6 line-clamp-2">Master your serve, volley, and court positioning in this intensive 8-week program designed for competitive players.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
<iconify-icon className="text-xl text-indigo-600 mb-2" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-normal text-gray-900">8 Weeks</p>
<p className="text-xs text-gray-500">Starts Oct 1</p>
</div>
<div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
<iconify-icon className="text-xl text-indigo-600 mb-2" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-normal text-gray-900">Small Group</p>
<p className="text-xs text-gray-500">Max 12 students</p>
</div>
</div>
<div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
<img alt="Instructor" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-base font-normal text-gray-900">Michael Chen</p>
<p className="text-sm text-gray-500">Head Coach • 42 Reviews</p>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="text-xs text-gray-500 font-normal block mb-1">Student Price</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-normal tracking-tight text-gray-900">$120</span>
<span className="text-sm text-gray-500">/term</span>
</div>
</div>
<button className="bg-indigo-600 text-white px-8 py-3.5 rounded-full text-base font-normal hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
                        Enroll Now
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
