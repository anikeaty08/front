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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      

<aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#D21536] rounded-md flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white w-4 h-4 iconify--lucide" data-icon="lucide:plane" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold text-white tracking-tight">SKYLINE<span className="text-zinc-600 font-normal">OS</span></span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">

<div className="px-3 mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-600">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-white shadow-sm group transition-all" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 text-[#D21536] iconify--lucide" data-icon="lucide:layout-dashboard" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
<span className="text-xs font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all group" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 group-hover:text-zinc-300 iconify--lucide" data-icon="lucide:ticket" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium">Bookings</span>
<span className="ml-auto text-[10px] bg-zinc-800 text-zinc-400 py-0.5 px-1.5 rounded-full border border-zinc-700">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all group" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 group-hover:text-zinc-300 iconify--lucide" data-icon="lucide:plane-takeoff" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20M6.36 17.4L4 17l-2-4l1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12L5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.4 2.4 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium">Flights</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all group" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 group-hover:text-zinc-300 iconify--lucide" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="text-xs font-medium">Passengers</span>
</a>

<div className="px-3 mt-8 mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-600">Operations</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all group" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 group-hover:text-zinc-300 iconify--lucide" data-icon="lucide:bar-chart-3" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all group" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 group-hover:text-zinc-300 iconify--lucide" data-icon="lucide:wallet" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
<span className="text-xs font-medium">Finance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all group" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 group-hover:text-zinc-300 iconify--lucide" data-icon="lucide:settings-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
<span className="text-xs font-medium">Settings</span>
</a>
</div>

<div className="p-4 border-t border-zinc-800/50">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-500 flex items-center justify-center text-[10px] text-white font-medium">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">John Doe</span>
<span className="text-[10px] text-zinc-500">Admin</span>
</div>
<svg aria-hidden="true" className="iconify ml-auto w-4 h-4 text-zinc-600 iconify--lucide" data-icon="lucide:chevrons-up-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m7 15l5 5l5-5M7 9l5-5l5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-6 z-20">
<div className="flex items-center gap-4">
<svg aria-hidden="true" className="md:hidden iconify w-6 h-6 text-zinc-400 iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h1 className="text-sm font-medium text-white">Dashboard Overview</h1>
<div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
<div className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<span>Oct 24, 2023 - Nov 24, 2023</span>
</div>
</div>
<div className="flex items-center gap-4">

<div className="relative hidden sm:block">
<svg aria-hidden="true" className="absolute left-2.5 top-1/2 -translate-y-1/2 iconify w-4 h-4 text-zinc-500 iconify--lucide" data-icon="lucide:search" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="bg-zinc-900/50 border border-zinc-800 text-white text-xs rounded-md pl-9 pr-4 py-1.5 w-64 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all placeholder:text-zinc-600" placeholder="Search flights..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-0.5">
<span className="text-[10px] text-zinc-600 border border-zinc-800 bg-zinc-900 rounded px-1 font-mono">⌘</span>
<span className="text-[10px] text-zinc-600 border border-zinc-800 bg-zinc-900 rounded px-1 font-mono">K</span>
</div>
</div>
<button className="relative p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-4.5 h-4.5 iconify--lucide" data-icon="lucide:bell" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#D21536] rounded-full ring-2 ring-zinc-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto lg:p-8 scroll-smooth pt-6 pr-6 pb-6 pl-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col gap-4 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:dollar-sign" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                            +12.5% <svg aria-hidden="true" className="iconify w-3 h-3 iconify--lucide" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</span>
</div>
<div className="">
<div className="text-2xl font-semibold text-white tracking-tight mb-1">$124,592</div>
<div className="text-xs text-zinc-500">Total Revenue</div>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col gap-4 group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:ticket" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                            +4.2% <svg aria-hidden="true" className="iconify w-3 h-3 iconify--lucide" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</span>
</div>
<div className="">
<div className="text-2xl font-semibold text-white tracking-tight mb-1">1,893</div>
<div className="text-xs text-zinc-500">Active Bookings</div>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col gap-4 group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:plane" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-zinc-500 bg-zinc-800/50 px-1.5 py-0.5 rounded-full border border-zinc-700">
                            0% <svg aria-hidden="true" className="iconify w-3 h-3 iconify--lucide" data-icon="lucide:minus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">42</div>
<div className="text-xs text-zinc-500">Fleet Active</div>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col gap-4 group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:alert-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded-full border border-rose-500/20">
                            +2 <svg aria-hidden="true" className="iconify w-3 h-3 iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">3</div>
<div className="text-xs text-zinc-500">Delayed Flights</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Revenue Overview</h3>
<div className="flex items-center gap-2">
<button className="px-2 py-1 text-[10px] font-medium text-white bg-zinc-800 rounded border border-zinc-700">Daily</button>
<button className="px-2 py-1 text-[10px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Weekly</button>
<button className="px-2 py-1 text-[10px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Monthly</button>
</div>
</div>

<div className="h-64 w-full flex items-end gap-2 sm:gap-4">

<div className="hidden sm:flex flex-col justify-between h-full text-[10px] text-zinc-600 pb-6 pr-2">
<span>50k</span>
<span>40k</span>
<span>30k</span>
<span>20k</span>
<span>10k</span>
<span>0</span>
</div>

<div className="flex-1 flex items-end justify-between h-full pb-6 border-b border-zinc-800">
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[40%] hover:bg-[#D21536] transition-all duration-300">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-zinc-700 text-white text-[10px] px-2 py-1 rounded shadow-xl whitespace-nowrap z-10">$24,000</div>
</div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[65%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[45%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[80%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[55%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[30%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[70%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[90%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-zinc-800 rounded-t-sm h-[60%] hover:bg-[#D21536] transition-all duration-300"></div>
<div className="group relative w-full mx-1 bg-[#D21536]/80 rounded-t-sm h-[75%] shadow-[0_0_15px_rgba(210,21,54,0.3)]"></div> 
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 flex flex-col">
<h3 className="text-sm font-medium text-white mb-6">Live Status</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="relative flex-none">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 relative">
<svg aria-hidden="true" className="iconify text-[#D21536] w-4 h-4 iconify--lucide" data-icon="lucide:plane" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-zinc-800"></div>
</div>
<div>
<div className="text-xs font-medium text-white">Flight BA-249 Departed</div>
<div className="text-[10px] text-zinc-500 mt-0.5">LHR → JFK • 2m ago</div>
</div>
</div>
<div className="flex gap-4">
<div className="relative flex-none">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 relative">
<svg aria-hidden="true" className="iconify text-emerald-500 w-4 h-4 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-zinc-800"></div>
</div>
<div>
<div className="text-xs font-medium text-white">Booking #9382 Confirmed</div>
<div className="text-[10px] text-zinc-500 mt-0.5">James Wilson • 15m ago</div>
</div>
</div>
<div className="flex gap-4">
<div className="relative flex-none">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 relative">
<svg aria-hidden="true" className="iconify text-amber-500 w-4 h-4 iconify--lucide" data-icon="lucide:alert-triangle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-[1px] h-full bg-transparent"></div>
</div>
<div>
<div className="text-xs font-medium text-white">Delay Alert: AF-102</div>
<div className="text-[10px] text-zinc-500 mt-0.5">Weather conditions • 42m ago</div>
</div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-800">
<button className="w-full py-2 bg-white text-zinc-950 text-xs font-medium rounded-md hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            View All Activity
                        </button>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
<div className="p-4 border-b border-zinc-800 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Recent Transactions</h3>
<div className="flex gap-2">
<button className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:filter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9.46V19l4 2v-8.54z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:download" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800 bg-zinc-900/50">
<th className="px-4 py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-500">Booking ID</th>
<th className="px-4 py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-500">Passenger</th>
<th className="px-4 py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-500">Route</th>
<th className="px-4 py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-500">Date</th>
<th className="px-4 py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-500">Amount</th>
<th className="px-4 py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-500">Status</th>
<th className="px-4 py-3 text-[10px] uppercase tracking-wider font-medium text-zinc-500">Action</th>
</tr>
</thead>
<tbody className="text-xs">
<tr className="group border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-3 font-mono text-zinc-400">#BK-9382</td>
<td className="px-4 py-3 text-white font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[8px]">JW</div>
                                    James Wilson
                                </td>
<td className="px-4 py-3 text-zinc-400">LHR <span className="text-zinc-600">→</span> JFK</td>
<td className="px-4 py-3 text-zinc-500">Oct 24, 2023</td>
<td className="px-4 py-3 text-white font-medium">$1,240.00</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Confirmed
                                    </span>
</td>
<td className="px-4 py-3">
<button className="text-zinc-500 hover:text-white transition-colors"><svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:more-horizontal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg></button>
</td>
</tr>
<tr className="group border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-3 font-mono text-zinc-400">#BK-9381</td>
<td className="px-4 py-3 text-white font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[8px]">AK</div>
                                    Anna Klein
                                </td>
<td className="px-4 py-3 text-zinc-400">MUC <span className="text-zinc-600">→</span> DXB</td>
<td className="px-4 py-3 text-zinc-500">Oct 23, 2023</td>
<td className="px-4 py-3 text-white font-medium">$850.50</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
<span className="w-1 h-1 rounded-full bg-amber-500"></span> Pending
                                    </span>
</td>
<td className="px-4 py-3">
<button className="text-zinc-500 hover:text-white transition-colors"><svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:more-horizontal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg></button>
</td>
</tr>
<tr className="group border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-3 font-mono text-zinc-400">#BK-9380</td>
<td className="px-4 py-3 text-white font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[8px]">MR</div>
                                    Mark Ross
                                </td>
<td className="px-4 py-3 text-zinc-400">SFO <span className="text-zinc-600">→</span> TYO</td>
<td className="px-4 py-3 text-zinc-500">Oct 23, 2023</td>
<td className="px-4 py-3 text-white font-medium">$2,100.00</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Confirmed
                                    </span>
</td>
<td className="px-4 py-3">
<button className="text-zinc-500 hover:text-white transition-colors"><svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:more-horizontal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg></button>
</td>
</tr>
<tr className="group hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-3 font-mono text-zinc-400">#BK-9379</td>
<td className="px-4 py-3 text-white font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[8px]">SL</div>
                                    Sarah Lee
                                </td>
<td className="px-4 py-3 text-zinc-400">SIN <span className="text-zinc-600">→</span> LHR</td>
<td className="px-4 py-3 text-zinc-500">Oct 22, 2023</td>
<td className="px-4 py-3 text-white font-medium">$920.00</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-rose-500/10 text-rose-500 border border-rose-500/20">
<span className="w-1 h-1 rounded-full bg-rose-500"></span> Cancelled
                                    </span>
</td>
<td className="px-4 py-3">
<button className="text-zinc-500 hover:text-white transition-colors"><svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:more-horizontal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

    </>
  );
}
