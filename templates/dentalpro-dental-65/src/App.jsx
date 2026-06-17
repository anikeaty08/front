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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      
<div className="max-w-[1600px] mx-auto bg-slate-50/80 rounded-[32px] p-4 md:p-6 lg:p-8 shadow-sm border border-slate-200/60 flex flex-col gap-8">

<header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-start">

<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-sm">
<i className="h-5 w-5" data-lucide="shield-plus"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">DentalPro</span>
</div>

<nav className="hidden lg:flex items-center gap-1 bg-white px-2 py-1.5 rounded-full border border-slate-200 shadow-sm">
<a className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors" href="#">Overview</a>
<a className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-5 py-2 rounded-full text-sm font-medium transition-colors" href="#">Patients</a>
<a className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-5 py-2 rounded-full text-sm font-medium transition-colors" href="#">Appointments</a>
<a className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-5 py-2 rounded-full text-sm font-medium transition-colors" href="#">Treatments</a>
<a className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-5 py-2 rounded-full text-sm font-medium transition-colors" href="#">Billing</a>
<a className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 px-5 py-2 rounded-full text-sm font-medium transition-colors" href="#">Reports</a>
</nav>
</div>

<div className="flex items-center gap-5 w-full md:w-auto justify-between md:justify-end">
<div className="flex items-center gap-4 text-slate-500">
<button className="relative hover:text-slate-900 transition-colors">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute 0 right-0 top-0 h-2 w-2 rounded-full bg-rose-500 border-2 border-slate-50"></span>
</button>
<button className="hover:text-slate-900 transition-colors">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
<button className="flex items-center gap-3 bg-white pl-2 pr-4 py-2 rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors text-left">
<div className="h-9 w-9 bg-indigo-100 text-indigo-700 font-medium rounded-full flex items-center justify-center text-sm">
                        Be
                    </div>
<div className="hidden sm:block">
<div className="text-sm font-semibold text-slate-900 leading-tight">Be Confidency</div>
<div className="text-xs text-slate-500">helloconfidency@gmail.com</div>
</div>
<i className="h-4 w-4 text-slate-400 ml-2" data-lucide="chevron-down"></i>
</button>
</div>
</header>

<section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 flex items-center gap-2">
                    Welcome, Be Confidency! <span className="text-2xl">👋</span>
</h1>
<p className="text-base text-slate-500 mt-2">Here's an overview of your practice today</p>
</div>
<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
<div className="relative flex-grow lg:flex-grow-0">
<i className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full lg:w-64 pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all" placeholder="Search here..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
                    February 28, 2026
                    <i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
</button>
<button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-sm shadow-blue-600/20 text-sm font-medium transition-colors">
<i className="h-4 w-4" data-lucide="plus"></i>
                    Quick Action
                </button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-500">Appointment,s Today</span>
<i className="h-5 w-5 text-slate-400" data-lucide="calendar-check"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-4xl font-semibold tracking-tight text-slate-900">18</span>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
<i className="h-3 w-3" data-lucide="trending-up"></i> +2
                        </div>
<span className="text-xs text-slate-400 font-medium">from yesterday</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="bg-emerald-50/50 rounded-xl p-3 flex flex-col gap-1 border border-emerald-100/50">
<span className="text-xs font-medium text-slate-500">Completed</span>
<span className="text-base font-semibold text-slate-800">03</span>
</div>
<div className="bg-amber-50/50 rounded-xl p-3 flex flex-col gap-1 border border-amber-100/50">
<span className="text-xs font-medium text-slate-500">Waiting</span>
<span className="text-base font-semibold text-slate-800">05</span>
</div>
<div className="bg-rose-50/50 rounded-xl p-3 flex flex-col gap-1 border border-rose-100/50">
<span className="text-xs font-medium text-slate-500">No-show</span>
<span className="text-base font-semibold text-slate-800">01</span>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-500">Today's Revenue</span>
<i className="h-5 w-5 text-slate-400" data-lucide="wallet"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-4xl font-semibold tracking-tight text-slate-900">€3,450</span>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
<i className="h-3 w-3" data-lucide="trending-up"></i> +2
                        </div>
<span className="text-xs text-slate-400 font-medium">vs last week</span>
</div>
</div>
<div className="bg-indigo-50/60 rounded-xl px-4 py-3 flex justify-between items-center mt-4 border border-indigo-100/50">
<span className="text-sm font-medium text-slate-600">Pending Payments</span>
<span className="text-sm font-semibold text-slate-800">€820</span>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-500">Outstanding Balance</span>
<i className="h-5 w-5 text-slate-400" data-lucide="circle-dollar-sign"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-4xl font-semibold tracking-tight text-slate-900">€7,280</span>
</div>
</div>
<div className="bg-amber-50/60 rounded-xl px-4 py-3 flex justify-between items-center mt-4 border border-amber-100/50">
<span className="text-sm font-medium text-slate-600">Unpaid Invoices</span>
<span className="text-sm font-semibold text-slate-800">14</span>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-500">Active Treatment Plans</span>
<i className="h-5 w-5 text-slate-400" data-lucide="clipboard-list"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-4xl font-semibold tracking-tight text-slate-900">42</span>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
<i className="h-3 w-3" data-lucide="trending-up"></i> +2
                        </div>
<span className="text-xs text-slate-400 font-medium">from yesterday</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="bg-blue-50/50 rounded-xl px-3 py-2 flex flex-col gap-1 border border-blue-100/50">
<span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Awaiting Approval</span>
<span className="text-base font-semibold text-slate-800">06</span>
</div>
<div className="bg-orange-50/50 rounded-xl px-3 py-2 flex flex-col gap-1 border border-orange-100/50">
<span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Expiring Soon</span>
<span className="text-base font-semibold text-slate-800">03</span>
</div>
</div>
</div>
</section>

<main className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Today's Schedule</h2>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700" href="#">View All</a>
</div>

<div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100 relative">
<button className="p-1 text-slate-400 hover:text-slate-800 bg-white shadow-sm border border-slate-100 rounded-full z-10 absolute -left-3"><i className="h-5 w-5" data-lucide="chevron-left"></i></button>
<div className="flex-1 overflow-x-auto flex items-center justify-between gap-2 px-6 scrollbar-hide">

<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-xs font-medium text-slate-400 mb-1">Fri</span>
<span className="text-sm font-semibold text-slate-800">27</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-xs font-medium text-slate-400 mb-1">Sat</span>
<span className="text-sm font-semibold text-slate-800">28</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-xs font-medium text-slate-400 mb-1">Sun</span>
<span className="text-sm font-semibold text-slate-800">1</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] bg-blue-600 text-white cursor-pointer shadow-md shadow-blue-500/20">
<span className="text-xs font-medium mb-1 opacity-90">Mon</span>
<span className="text-sm font-semibold">2</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-xs font-medium text-slate-400 mb-1">Wed</span>
<span className="text-sm font-semibold text-slate-800">3</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-xs font-medium text-slate-400 mb-1">Thu</span>
<span className="text-sm font-semibold text-slate-800">4</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-xs font-medium text-slate-400 mb-1">Fri</span>
<span className="text-sm font-semibold text-slate-800">6</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-xs font-medium text-slate-400 mb-1">Sat</span>
<span className="text-sm font-semibold text-slate-800">7</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors hidden sm:flex">
<span className="text-xs font-medium text-slate-400 mb-1">Sun</span>
<span className="text-sm font-semibold text-slate-800">8</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors hidden sm:flex">
<span className="text-xs font-medium text-slate-400 mb-1">Mon</span>
<span className="text-sm font-semibold text-slate-800">9</span>
</div>
<div className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl min-w-[50px] cursor-pointer hover:bg-slate-50 transition-colors hidden md:flex">
<span className="text-xs font-medium text-slate-400 mb-1">Tue</span>
<span className="text-sm font-semibold text-slate-800">10</span>
</div>
</div>
<button className="p-1 text-slate-400 hover:text-slate-800 bg-white shadow-sm border border-slate-100 rounded-full z-10 absolute -right-3"><i className="h-5 w-5" data-lucide="chevron-right"></i></button>
</div>

<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="text-xs font-medium text-slate-400 border-b border-slate-100">
<th className="pb-4 pr-4 font-medium w-16">Time</th>
<th className="pb-4 px-4 font-medium">Patient Name</th>
<th className="pb-4 px-4 font-medium">Treatment</th>
<th className="pb-4 px-4 font-medium">Dentist</th>
<th className="pb-4 px-4 font-medium text-center">Room</th>
<th className="pb-4 px-4 font-medium">Status</th>
<th className="pb-4 pl-4 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-50/80">

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 pr-4 text-slate-500 font-medium">09:00</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="font-medium text-slate-800">Marco Bianchi</span>
</div>
</td>
<td className="py-4 px-4 text-slate-600">Routing Checkup</td>
<td className="py-4 px-4 text-slate-600">Dr. Rossi</td>
<td className="py-4 px-4 text-center font-medium text-slate-800">1</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100/50">Confirmed</span>
</td>
<td className="py-4 pl-4 text-right">
<button className="text-slate-400 hover:text-slate-800"><i className="h-5 w-5" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 pr-4 text-slate-500 font-medium">09:30</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704c"/>
<span className="font-medium text-slate-800">Marin Jabri</span>
</div>
</td>
<td className="py-4 px-4 text-slate-600">Root Canal</td>
<td className="py-4 px-4 text-slate-600">Dr. Bianchi</td>
<td className="py-4 px-4 text-center font-medium text-slate-800">2</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-50 text-amber-600 border border-amber-100/50">Waiting</span>
</td>
<td className="py-4 pl-4 text-right">
<button className="text-slate-400 hover:text-slate-800"><i className="h-5 w-5" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 pr-4 text-slate-500 font-medium">10:00</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704e"/>
<span className="font-medium text-slate-800">Luca Ferrari</span>
</div>
</td>
<td className="py-4 px-4 text-slate-600">Teeth Whitening</td>
<td className="py-4 px-4 text-slate-600">Dr. Rossi</td>
<td className="py-4 px-4 text-center font-medium text-slate-800">1</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100/50">Confirmed</span>
</td>
<td className="py-4 pl-4 text-right">
<button className="text-slate-400 hover:text-slate-800"><i className="h-5 w-5" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 pr-4 text-slate-500 font-medium">10:30</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704f"/>
<span className="font-medium text-slate-800">Giulia Esposi</span>
</div>
</td>
<td className="py-4 px-4 text-slate-600">Crown Placement</td>
<td className="py-4 px-4 text-slate-600">Dr. Bianchi</td>
<td className="py-4 px-4 text-center font-medium text-slate-800">2</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-rose-50 text-rose-600 border border-rose-100/50">Cancelled</span>
</td>
<td className="py-4 pl-4 text-right">
<button className="text-slate-400 hover:text-slate-800"><i className="h-5 w-5" data-lucide="more-horizontal"></i></button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 pr-4 text-slate-500 font-medium">11:00</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704b"/>
<span className="font-medium text-slate-800">Alessan Dro</span>
</div>
</td>
<td className="py-4 px-4 text-slate-600">Filling</td>
<td className="py-4 px-4 text-slate-600">Dr. Ionly</td>
<td className="py-4 px-4 text-center font-medium text-slate-800">4</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100/50">Confirmed</span>
</td>
<td className="py-4 pl-4 text-right">
<button className="text-slate-400 hover:text-slate-800"><i className="h-5 w-5" data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex-1">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Revenue Overview</h2>
<div className="flex bg-slate-50 p-1 rounded-full border border-slate-100">
<button className="px-3 py-1 text-xs font-medium bg-slate-900 text-white rounded-full shadow-sm">Daily</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 rounded-full transition-colors">Weekly</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 rounded-full transition-colors">Monthly</button>
</div>
</div>
<div className="mb-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">€1,425.50</span>
</div>

<div className="relative h-48 w-full mt-4">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] font-medium text-slate-400 py-1">
<span>€6.0K</span>
<span>€4.5K</span>
<span>€3.0K</span>
<span>€1.5K</span>
<span>€0.0K</span>
</div>

<div className="absolute right-0 top-0 h-full flex flex-col justify-between text-[11px] font-medium text-slate-400 py-1 text-right">
<span>75%</span>
<span>50%</span>
<span>25%</span>
<span>10%</span>
<span>0%</span>
</div>

<div className="absolute left-10 right-10 top-2 bottom-6">

<div className="absolute inset-0 flex flex-col justify-between">
<div className="w-full border-t border-slate-100/60 border-dashed h-0"></div>
<div className="w-full border-t border-slate-100/60 border-dashed h-0"></div>
<div className="w-full border-t border-slate-100/60 border-dashed h-0"></div>
<div className="w-full border-t border-slate-100/60 border-dashed h-0"></div>
<div className="w-full border-t border-slate-100/60 border-dashed h-0"></div>
</div>

<svg className="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M 0,20 C 20,15 40,30 60,30 C 80,30 90,15 100,10" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M 0,45 C 20,40 40,40 60,25 C 80,25 90,35 100,40" fill="none" stroke="#2563eb" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M 0,45 C 20,40 40,40 60,25 C 80,25 90,35 100,40 L 100,100 L 0,100 Z" fill="url(#blue-gradient)" opacity="0.1"></path>

<path d="M 0,60 C 20,70 40,65 60,70 C 80,75 90,65 100,60" fill="none" stroke="#f59e0b" stroke-dasharray="3,3" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M 0,75 C 20,95 40,95 60,95 C 80,95 90,90 100,95" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="1.5"></path>
<defs>
<lineargradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#2563eb"></stop>
<stop offset="100%" stop-color="#2563eb" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#e2e8f0" stroke-dasharray="2,2" strokeWidth="1" x1="60" x2="60" y1="20" y2="100"></line>

<circle cx="60" cy="30" fill="#10b981" r="2.5"></circle>
<circle cx="60" cy="25" fill="#2563eb" r="2.5"></circle>
<circle cx="60" cy="70" fill="#f59e0b" r="2.5"></circle>
<circle cx="60" cy="95" fill="#6366f1" r="2.5"></circle>
</svg>

<div className="absolute left-[62%] top-[30%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-3 w-48 z-10">
<div className="text-xs font-medium text-slate-800 mb-2">Wednesday</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center text-[11px]">
<span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
<span className="text-slate-500">Collected Revenue:</span>
<span className="ml-auto font-semibold text-slate-800">€3,450</span>
</div>
<div className="flex items-center text-[11px]">
<span className="h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
<span className="text-slate-500">Insurance Pending:</span>
<span className="ml-auto font-semibold text-slate-800">€1,200</span>
</div>
<div className="flex items-center text-[11px]">
<span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
<span className="text-slate-500">Pending Payments:</span>
<span className="ml-auto font-semibold text-slate-800">€650</span>
</div>
<div className="flex items-center text-[11px]">
<span className="h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
<span className="text-slate-500">Collected Revenue:</span>
<span className="ml-auto font-semibold text-slate-800">85%</span>
</div>
</div>
</div>
</div>

<div className="absolute left-10 right-10 bottom-0 flex justify-between text-[11px] font-medium text-slate-400">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
<h3 className="text-base font-semibold text-slate-900">Patient Alerts</h3>
<div className="flex items-start gap-3 mt-1">
<div className="bg-amber-50 text-amber-500 p-1.5 rounded-lg shrink-0 mt-0.5 border border-amber-100/50">
<i className="h-4 w-4" data-lucide="triangle-alert"></i>
</div>
<p className="text-[13px] font-medium text-slate-700 leading-snug">2 Patients require medical history update</p>
</div>
<div className="flex items-start gap-3 mt-1 opacity-40">
<div className="bg-blue-50 text-blue-500 p-1.5 rounded-lg shrink-0 mt-0.5 border border-blue-100/50">
<i className="h-4 w-4" data-lucide="file-text"></i>
</div>
<p className="text-[13px] font-medium text-slate-700 leading-snug">4 Pending consent forms</p>
</div>
</div>

<div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100 flex flex-col justify-between">
<h3 className="text-base font-semibold text-slate-900 mb-2">Low Stock Warning</h3>
<div className="mt-auto">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-slate-700">Anesthetic Cartridges</span>
</div>
<div className="flex items-center gap-3">
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-500 w-[15%] h-full rounded-full"></div>
</div>
<span className="text-xs font-semibold text-slate-500 whitespace-nowrap">5 left</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
