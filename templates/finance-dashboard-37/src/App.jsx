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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 -z-10 pointer-events-none"></div>
<div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vh] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 -z-10 pointer-events-none"></div>
<div className="fixed bottom-[-20%] left-[20%] w-[40vw] h-[40vh] bg-rose-100/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 -z-10 pointer-events-none"></div>

<div className="flex md:p-5 lg:p-6 w-full h-full max-w-[1800px] z-10 mr-auto ml-auto pt-3 pr-3 pb-3 pl-3 relative gap-x-6 gap-y-6">

<aside className="w-64 bg-white/70 backdrop-blur-xl rounded-[24px] border border-white shadow-sm hidden lg:flex flex-col overflow-hidden relative">

<div className="px-6 py-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-blue-500 to-rose-400 p-[2px]">
<div className="w-full h-full bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-blue-600 rounded-full"></div>
</div>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Balance</span>
</div>

<nav className="px-4 pb-6 flex-1 flex flex-col gap-1 overflow-y-auto">
<div className="text-xs font-medium text-slate-400 px-3 mb-2 uppercase tracking-wider mt-2">Main Menu</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-50/80 text-blue-700 font-medium text-base transition-colors group" href="#">
<i className="w-5 h-5 text-blue-600" data-lucide="layout-dashboard" strokeWidth="1.5"></i> 
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium text-base transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-slate-700 transition-colors" data-lucide="arrow-left-right" strokeWidth="1.5"></i> 
                    Transactions
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium text-base transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-slate-700 transition-colors" data-lucide="bar-chart-3" strokeWidth="1.5"></i> 
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium text-base transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-slate-700 transition-colors" data-lucide="file-text" strokeWidth="1.5"></i> 
                    Reports
                </a>
<div className="text-xs font-medium text-slate-400 px-3 mt-6 mb-2 uppercase tracking-wider">Preferences</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium text-base transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-slate-700 transition-colors" data-lucide="settings" strokeWidth="1.5"></i> 
                    Settings
                </a>
</nav>

<div className="p-4 mt-auto">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-base hover:bg-slate-800 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i> New Transfer
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

<header className="md:p-4 flex gap-4 shrink-0 bg-white/70 border-white border rounded-[24px] mb-6 pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-xl gap-x-4 gap-y-4 items-center justify-between">

<button className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>

<div className="flex items-center bg-slate-50/80 hover:bg-slate-100/80 transition-colors rounded-xl px-4 py-2 flex-1 max-w-md border border-slate-100 focus-within:border-blue-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
<i className="w-4 h-4 text-slate-400 mr-3" data-lucide="search" strokeWidth="1.5"></i>
<input className="bg-transparent border-none outline-none w-full text-base placeholder:text-slate-400 text-slate-700" placeholder="Search transactions, accounts..." type="text"/>
<div className="hidden sm:flex items-center gap-1 bg-white px-1.5 py-0.5 rounded shadow-sm border border-slate-200 text-xs text-slate-400 font-medium tracking-tight">
<i className="w-3 h-3" data-lucide="command" strokeWidth="1.5"></i> K
                    </div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors">
<i className="w-5 h-5" data-lucide="help-circle" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
<div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
<button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium text-sm shadow-sm">
                            TT
                        </div>
<i className="w-4 h-4 text-slate-400 hidden sm:block" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto pr-2 -mr-2 pb-10 flex flex-col gap-8 custom-scrollbar">

<div className="flex flex-col sm:flex-row sm:items-end shrink-0 gap-x-4 gap-y-4 justify-between">
<div className="">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Welcome back, Thanh Tran</h1>
<p className="text-slate-500 text-base mt-1.5">Monitor and control what happens with your money today.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-base font-medium hover:bg-slate-50 shadow-sm transition-colors">
<i className="w-4 h-4 text-slate-400" data-lucide="calendar" strokeWidth="1.5"></i> All time <i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-base font-medium hover:bg-slate-50 shadow-sm transition-colors">
<i className="w-4 h-4 text-slate-400" data-lucide="download" strokeWidth="1.5"></i> Export
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 shrink-0">

<div className="bg-white/70 backdrop-blur-xl rounded-[20px] p-5 border border-white shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-500 font-medium text-base">Total Balance</span>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
<i className="w-4 h-4" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-auto">
<div className="text-3xl font-semibold tracking-tight text-slate-900">$124,563.00</div>
<div className="flex items-center gap-2 mt-2">
<span className="flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-sm font-medium">
<i className="w-3 h-3 mr-1" data-lucide="trending-up" strokeWidth="1.5"></i> 12.5%
                                </span>
<span className="text-slate-400 text-sm">vs last month</span>
</div>
</div>
</div>

<div className="flex flex-col bg-white/70 border-white border rounded-[20px] pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-500 font-medium text-base">Total Income</span>
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<i className="w-4 h-4" data-lucide="arrow-down-left" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-auto">
<div className="text-3xl font-semibold tracking-tight text-slate-900">$48,230.50</div>
<div className="flex items-center gap-2 mt-2">
<span className="flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-sm font-medium">
<i className="w-3 h-3 mr-1" data-lucide="trending-up" strokeWidth="1.5"></i> 4.2%
                                </span>
<span className="text-slate-400 text-sm">vs last month</span>
</div>
</div>
</div>

<div className="bg-white/70 backdrop-blur-xl rounded-[20px] p-5 border border-white shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-500 font-medium text-base">Total Expenses</span>
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-auto">
<div className="text-3xl font-semibold tracking-tight text-slate-900">$18,402.10</div>
<div className="flex items-center gap-2 mt-2">
<span className="flex items-center text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md text-sm font-medium">
<i className="w-3 h-3 mr-1" data-lucide="trending-up" strokeWidth="1.5"></i> 8.1%
                                </span>
<span className="text-slate-400 text-sm">vs last month</span>
</div>
</div>
</div>

<div className="flex flex-col bg-neutral-50 border-indigo-100/50 border rounded-[20px] pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl justify-between">
<div className="flex items-center gap-2 text-indigo-700 mb-3">
<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
<i className="w-3 h-3" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-sm">Quick Insight</span>
</div>
<div className="mt-auto">
<p className="text-base font-medium text-slate-800 leading-snug">
                                Marketing expenses are up <span className="text-rose-600 font-semibold text-lg">15%</span> this week. <br/>
<a className="text-indigo-600 hover:text-indigo-700 text-sm inline-flex items-center mt-2 group" href="#">
                                    View breakdown <i className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 shrink-0">

<div className="xl:col-span-2 bg-white/70 backdrop-blur-xl rounded-[24px] p-6 border border-white shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Cash Flow</h2>

<div className="flex bg-slate-100/80 p-1 rounded-lg border border-slate-200/50 shadow-inner">
<button className="px-4 py-1.5 rounded-md bg-white shadow-sm text-sm font-medium text-slate-900">Monthly</button>
<button className="hover:text-slate-700 transition-colors text-sm font-medium text-slate-500 rounded-md pt-1.5 pr-4 pb-1.5 pl-4">Weekly</button>
</div>
</div>

<div className="flex-1 min-h-[260px] w-full relative flex items-end pt-4 pb-8 pl-12 pr-4">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 pb-8 pr-2 w-12 text-right font-medium">
<span className="">$60k</span><span className="">$45k</span><span className="">$30k</span><span>$15k</span><span>$0</span>
</div>
<div className="absolute left-12 right-4 top-0 h-full flex flex-col justify-between pb-8 pointer-events-none">
<div className="w-full border-t border-slate-200/60 mt-2"></div>
<div className="w-full border-t border-slate-200/60"></div>
<div className="w-full border-t border-slate-200/60"></div>
<div className="w-full border-t border-slate-200/60"></div>
<div className="w-full border-t border-slate-200 mt-auto"></div>
</div>

<div className="w-full h-full flex justify-between items-end relative z-10 px-2 gap-2 sm:gap-4">

<div className="flex-1 flex justify-center items-end gap-1 sm:gap-2 h-full group relative">
<div className="w-1/2 max-w-[24px] bg-blue-500 rounded-t-md h-[40%] transition-opacity group-hover:opacity-80"></div>
<div className="w-1/2 max-w-[24px] bg-slate-200 rounded-t-md h-[25%] transition-opacity group-hover:opacity-80"></div>
<span className="absolute -bottom-7 text-sm text-slate-400 font-medium">Jan</span>
</div>

<div className="flex-1 flex justify-center items-end gap-1 sm:gap-2 h-full group relative">
<div className="w-1/2 max-w-[24px] bg-blue-500 rounded-t-md h-[55%] transition-opacity group-hover:opacity-80"></div>
<div className="w-1/2 max-w-[24px] bg-slate-200 rounded-t-md h-[30%] transition-opacity group-hover:opacity-80"></div>
<span className="absolute -bottom-7 text-sm text-slate-400 font-medium">Feb</span>
</div>

<div className="flex-1 flex justify-center items-end gap-1 sm:gap-2 h-full group relative">
<div className="w-1/2 max-w-[24px] bg-blue-500 rounded-t-md h-[45%] transition-opacity group-hover:opacity-80"></div>
<div className="w-1/2 max-w-[24px] bg-slate-200 rounded-t-md h-[40%] transition-opacity group-hover:opacity-80"></div>
<span className="absolute -bottom-7 text-sm text-slate-400 font-medium">Mar</span>
</div>

<div className="flex-1 flex justify-center items-end gap-1 sm:gap-2 h-full group relative">
<div className="w-1/2 max-w-[24px] bg-blue-500 rounded-t-md h-[70%] transition-opacity group-hover:opacity-80 relative">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded hidden group-hover:block whitespace-nowrap shadow-md z-20">$42,000</div>
</div>
<div className="w-1/2 max-w-[24px] bg-slate-200 rounded-t-md h-[35%] transition-opacity group-hover:opacity-80"></div>
<span className="absolute -bottom-7 text-sm text-slate-900 font-medium">Apr</span>
</div>

<div className="flex-1 flex justify-center items-end gap-1 sm:gap-2 h-full group relative">
<div className="w-1/2 max-w-[24px] bg-blue-200 rounded-t-md h-[85%] transition-opacity group-hover:opacity-80"></div>
<div className="w-1/2 max-w-[24px] bg-slate-100 rounded-t-md h-[45%] transition-opacity group-hover:opacity-80"></div>
<span className="absolute -bottom-7 text-sm text-slate-400 font-medium">May</span>
</div>

<div className="flex-1 flex justify-center items-end gap-1 sm:gap-2 h-full group relative hidden sm:flex">
<div className="w-1/2 max-w-[24px] bg-blue-200 rounded-t-md h-[60%] transition-opacity group-hover:opacity-80"></div>
<div className="w-1/2 max-w-[24px] bg-slate-100 rounded-t-md h-[30%] transition-opacity group-hover:opacity-80"></div>
<span className="absolute -bottom-7 text-sm text-slate-400 font-medium">Jun</span>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-blue-500"></div>
<span className="text-sm font-medium text-slate-600">Income</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-slate-200"></div>
<span className="text-sm font-medium text-slate-600">Expenses</span>
</div>
</div>
</div>

<div className="bg-white/70 backdrop-blur-xl rounded-[24px] p-6 border border-white shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Expenses by Category</h2>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex flex-col gap-5 flex-1 justify-center">

<div className="group cursor-pointer">
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-800">Payroll</div>
<div className="text-sm text-slate-400">45% of total</div>
</div>
</div>
<span className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">$8,280</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-500 h-full rounded-full" style={{width: '45%'}}></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-800">Software &amp; IT</div>
<div className="text-sm text-slate-400">25% of total</div>
</div>
</div>
<span className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">$4,600</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-full rounded-full" style={{width: '25%'}}></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
<i className="w-4 h-4" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-800">Marketing</div>
<div className="text-sm text-slate-400">20% of total</div>
</div>
</div>
<span className="text-base font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">$3,680</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-rose-400 h-full rounded-full" style={{width: '20%'}}></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
<i className="w-4 h-4" data-lucide="building" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-800">Office</div>
<div className="text-sm text-slate-400">10% of total</div>
</div>
</div>
<span className="text-base font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">$1,842</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-amber-400 h-full rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 shrink-0">

<div className="xl:col-span-2 bg-white/70 backdrop-blur-xl rounded-[24px] p-6 border border-white shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Recent Transactions</h2>
<button className="text-blue-600 font-medium text-sm hover:text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
                                View all
                            </button>
</div>
<div className="flex flex-col">

<div className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_1fr_auto] gap-4 px-2 pb-3 border-b border-slate-100 text-sm font-medium text-slate-400 hidden sm:grid">
<div>Transaction</div>
<div>Category</div>
<div>Date</div>
<div className="text-right">Amount</div>
</div>
<div className="flex flex-col gap-1 mt-2">

<div className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_1fr_auto] items-center gap-4 p-3 hover:bg-slate-50/80 rounded-xl transition-colors -mx-3 cursor-pointer group border border-transparent hover:border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200/50">
<i className="w-5 h-5" data-lucide="figma" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-900">Figma Inc.</div>
<div className="text-sm text-slate-500 sm:hidden">Software • Today</div>
</div>
</div>
<div className="text-base text-slate-500 hidden sm:block">Software</div>
<div className="text-base text-slate-500 hidden sm:block">Today, 10:24 AM</div>
<div className="text-right">
<div className="text-base font-medium text-slate-900">-$45.00</div>
<div className="text-sm text-slate-400 hidden sm:block">Completed</div>
</div>
</div>

<div className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_1fr_auto] items-center gap-4 p-3 hover:bg-slate-50/80 rounded-xl transition-colors -mx-3 cursor-pointer group border border-transparent hover:border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 border border-emerald-200/50">
<i className="w-5 h-5" data-lucide="arrow-down-left" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-900">Stripe Payout</div>
<div className="text-sm text-slate-500 sm:hidden">Revenue • Yesterday</div>
</div>
</div>
<div className="text-base text-slate-500 hidden sm:block">Revenue</div>
<div className="text-base text-slate-500 hidden sm:block">Yesterday, 3:12 PM</div>
<div className="text-right">
<div className="text-base font-medium text-emerald-600">+$12,450.00</div>
<div className="text-sm text-slate-400 hidden sm:block">Completed</div>
</div>
</div>

<div className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_1fr_auto] items-center gap-4 p-3 hover:bg-slate-50/80 rounded-xl transition-colors -mx-3 cursor-pointer group border border-transparent hover:border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200/50">
<i className="w-5 h-5" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-900">Blue Bottle Coffee</div>
<div className="text-sm text-slate-500 sm:hidden">Meals • Apr 12</div>
</div>
</div>
<div className="text-base text-slate-500 hidden sm:block">Meals</div>
<div className="text-base text-slate-500 hidden sm:block">Apr 12, 2024</div>
<div className="text-right">
<div className="text-base font-medium text-slate-900">-$12.50</div>
<div className="text-sm text-slate-400 hidden sm:block">Completed</div>
</div>
</div>

<div className="grid grid-cols-[1fr_auto] sm:grid-cols-[2fr_1fr_1fr_auto] items-center gap-4 p-3 hover:bg-slate-50/80 rounded-xl transition-colors -mx-3 cursor-pointer group border border-transparent hover:border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200/50">
<i className="w-5 h-5" data-lucide="cloud" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-900">AWS Services</div>
<div className="text-sm text-slate-500 sm:hidden">Infrastructure • Apr 10</div>
</div>
</div>
<div className="text-base text-slate-500 hidden sm:block">Infrastructure</div>
<div className="text-base text-slate-500 hidden sm:block">Apr 10, 2024</div>
<div className="text-right">
<div className="text-base font-medium text-slate-900">-$1,240.00</div>
<div className="text-sm text-amber-500 hidden sm:block">Pending</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white/70 backdrop-blur-xl rounded-[24px] p-6 border border-white shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">My Accounts</h2>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex flex-col gap-3">

<div className="p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#0052FF]/10 flex items-center justify-center text-[#0052FF]">
<i className="w-5 h-5" data-lucide="landmark" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-900">Chase Business</div>
<div className="text-sm text-slate-400 font-mono tracking-widest mt-0.5">**** 4211</div>
</div>
</div>
<button className="text-slate-300 group-hover:text-slate-500 transition-colors">
<i className="w-5 h-5" data-lucide="more-vertical" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-end justify-between">
<div className="text-2xl font-semibold tracking-tight text-slate-900">$84,302.50</div>
<div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Active</div>
</div>
</div>

<div className="p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-900">Ramp Corporate</div>
<div className="text-sm text-slate-400 font-mono tracking-widest mt-0.5">**** 8832</div>
</div>
</div>
<button className="text-slate-300 group-hover:text-slate-500 transition-colors">
<i className="w-5 h-5" data-lucide="more-vertical" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-sm text-slate-500 mb-0.5">Current Balance</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$12,400.00</div>
</div>
<div className="text-sm font-medium text-slate-500 text-right">
                                        Limit: $50k
                                    </div>
</div>
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
