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
      

<main className="bg-slate-50 w-full max-w-[1600px] rounded-[3rem] shadow-2xl p-6 md:p-10 lg:p-14 overflow-hidden relative">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
<div className="flex items-center gap-6">
<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:shadow-md transition">
<i className="w-6 h-6 text-slate-600" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-serif text-xl italic">
                        Nº
                    </div>
<div>
<h1 className="text-lg font-medium tracking-tight text-slate-900 leading-tight">Financial</h1>
<p className="text-slate-400 text-base font-light">Dashboard</p>
</div>
</div>
</div>
<div className="flex items-center gap-4 md:gap-8 flex-wrap">
<button className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center hover:bg-white transition">
<i className="w-5 h-5 text-slate-600" data-lucide="plus"></i>
</button>
<div className="flex items-center gap-3 pr-4 border-r border-slate-200">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="hidden sm:block">
<p className="text-sm font-medium text-slate-900">Dwayne Tatum</p>
<p className="text-xs text-slate-500">CEO Assistant</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-slate-600" data-lucide="search"></i>
</button>
<span className="text-slate-400 text-sm hidden sm:block">Start searching here ...</span>
</div>
</div>
</header>

<section className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 mb-12">
<div className="flex flex-wrap items-center gap-6 md:gap-8">
<div className="w-20 h-20 rounded-full border border-slate-200 flex flex-col items-center justify-center bg-white">
<span className="text-2xl font-medium tracking-tight">19</span>
</div>
<div className="border-l border-slate-300 h-12 pl-6 flex flex-col justify-center">
<span className="text-base font-medium text-slate-900">Tue,</span>
<span className="text-base text-slate-500">December</span>
</div>
<button className="bg-[#DF543B] hover:bg-[#c94933] text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-lg shadow-orange-200 transition">
<span className="text-sm font-medium">Show my Tasks</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white relative">
<i className="w-5 h-5 text-slate-600" data-lucide="calendar"></i>
<div className="absolute top-2 right-3 w-1.5 h-1.5 bg-[#DF543B] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-8 w-full xl:w-auto justify-between xl:justify-end">
<div className="text-left xl:text-right">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-2">
                        Hey, Need help? <span className="inline-block animate-wave">👋</span>
</h2>
<p className="text-xl md:text-2xl text-slate-300 font-light">| Just ask me anything!</p>
</div>
<button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
<i className="w-6 h-6 text-slate-900" data-lucide="mic"></i>
</button>
</div>
</section>

<div className="flex flex-col lg:flex-row gap-6">

<aside className="hidden lg:flex w-20 bg-white rounded-[3rem] py-8 flex-col items-center justify-between shadow-sm h-[600px] self-start shrink-0">
<div className="h-32 w-1.5 bg-slate-100 rounded-full overflow-hidden relative">
<div className="absolute top-0 w-full h-1/3 bg-slate-200 rounded-full"></div>
</div>
<button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50">
<i className="w-5 h-5 text-slate-800" data-lucide="plus"></i>
</button>
<div className="mt-auto">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
</div>
</aside>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[300px]">
<div className="flex justify-between items-start">
<span className="font-bold text-sm tracking-wide">VISA</span>
<div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
<span className="text-xs text-slate-500">Direct Debits</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-4">
<div className="space-y-1">
<p className="text-xs text-slate-400">Linked to main account</p>
<p className="text-xl font-medium tracking-tight">**** 2719</p>
</div>
<div className="flex gap-2">
<button className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-medium">Receive</button>
<button className="bg-slate-100 text-slate-600 px-6 py-2.5 rounded-full text-xs font-medium">Send</button>
</div>
</div>
<div className="flex justify-between items-end border-t border-slate-50 pt-4">
<div>
<p className="text-xs text-slate-400 mb-1">Monthly regular fee</p>
<p className="text-lg font-medium text-slate-900">$ 25.00</p>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#DF543B] rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="pencil"></i>
</div>
<div className="leading-3">
<p className="text-[10px] text-[#DF543B]">Edit</p>
<p className="text-[10px] text-[#DF543B]">cards limitation</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-[2rem] flex flex-col gap-4 h-[300px]">

<div className="bg-white p-5 rounded-[2rem] flex-1 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center">
<i className="w-4 h-4 text-slate-800" data-lucide="arrow-down-left"></i>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
<span className="text-[10px] text-slate-500">Weekly</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<p className="text-xs text-slate-400 mb-1">Total income</p>
<p className="text-2xl font-medium tracking-tight text-slate-900">$ 23,194.80</p>
</div>
</div>

<div className="bg-white p-5 rounded-[2rem] flex-1 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center">
<i className="w-4 h-4 text-slate-800" data-lucide="arrow-up-right"></i>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
<span className="text-[10px] text-slate-500">Weekly</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-xs text-slate-400 mb-1">Total paid</p>
<p className="text-2xl font-medium tracking-tight text-slate-900">$ 8,145.20</p>
</div>
<div className="flex items-center gap-1">
<div className="w-5 h-5 bg-[#DF543B] rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="trending-up"></i>
</div>
<div className="leading-3">
<p className="text-[9px] text-[#DF543B]">View</p>
<p className="text-[9px] text-[#DF543B]">on chart mode</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 h-[300px]">

<div className="bg-white rounded-[2rem] p-4 flex-1 flex flex-col items-center justify-center gap-2 shadow-sm">
<i className="w-5 h-5 text-slate-800" data-lucide="lock"></i>
<span className="text-xs font-medium text-slate-700">System Lock</span>
</div>

<div className="bg-black rounded-[2rem] p-4 flex-1 flex items-center justify-center relative overflow-hidden">

<div className="relative w-20 h-20">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-[#DF543B]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="36, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<span className="text-xs font-medium">36%</span>
<span className="text-[8px] text-gray-400">Growth rate</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 h-[300px]">

<div className="bg-white rounded-[2rem] p-5 flex-1 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<i className="w-5 h-5 text-slate-800" data-lucide="clock"></i>
</div>
<div>
<p className="text-xl font-medium tracking-tight">13 Days</p>
<p className="text-[10px] text-slate-500 mb-2">109 hours, 23 minutes</p>
<div className="flex gap-1">

<div className="w-2 h-2 rounded-full bg-[#DF543B]"></div>
<div className="w-2 h-2 rounded-full bg-[#DF543B]"></div>
<div className="w-2 h-2 rounded-full bg-[#DF543B]"></div>
<div className="w-2 h-2 rounded-full bg-[#DF543B]"></div>
<div className="w-2 h-2 rounded-full bg-[#DF543B]"></div>
<div className="w-2 h-2 rounded-full bg-[#DF543B]"></div>
<div className="w-2 h-2 rounded-full bg-[#DF543B]"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-5 flex-1 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-center mb-2">
<i className="w-5 h-5 text-slate-800" data-lucide="bar-chart-2"></i>
</div>
<div className="flex items-end gap-3 h-16 w-full justify-center">
<div className="relative w-8 group">
<div className="bg-slate-200 w-full rounded-t-lg h-8 mx-auto"></div>
<span className="text-[9px] text-center block mt-1 text-slate-500">2022</span>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-600 text-[9px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition">Old</div>
</div>
<div className="relative w-8 group">
<div className="bg-[#DF543B] w-full rounded-t-lg h-14 mx-auto relative z-10">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-32 bg-[#DF543B]"></div>
</div>
<span className="text-[9px] text-center block mt-1 text-slate-500">2023</span>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DF543B] text-white text-[9px] px-2 py-0.5 rounded-full z-20">2023</div>
</div>
</div>

<div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-5 pointer-events-none">
<div className="border border-slate-900"></div><div className="border border-slate-900"></div>
<div className="border border-slate-900"></div><div className="border border-slate-900"></div>
<div className="border border-slate-900"></div><div className="border border-slate-900"></div>
<div className="border border-slate-900"></div><div className="border border-slate-900"></div>
</div>
</div>
</div>


<div className="bg-white rounded-[2rem] p-6 shadow-sm h-[320px] flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-slate-900">Annual profits</h3>
<div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
<span className="text-[10px] text-slate-500">2023</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex-1 relative flex items-center justify-center">

<div className="w-56 h-56 bg-red-50 rounded-full flex items-center justify-center relative">
<span className="absolute top-4 text-xs font-medium text-[#DF543B]">$ 14K</span>

<div className="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center relative">
<span className="absolute top-3 text-xs font-medium text-[#DF543B]">$ 9.3K</span>

<div className="w-24 h-24 bg-red-200 rounded-full flex items-center justify-center relative">
<span className="absolute top-2 text-xs font-medium text-[#DF543B]">$ 6.8K</span>

<div className="w-12 h-12 bg-[#DF543B] rounded-full flex items-center justify-center shadow-lg">
<span className="text-xs font-medium text-white">$ 4K</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-[2rem] p-0 md:col-span-2 h-[320px] flex flex-col">

<div className="p-6 pb-2">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-slate-900">Activity manager</h3>
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-white rounded"><i className="w-4 h-4 text-slate-400" data-lucide="more-vertical"></i></button>
<button className="p-1 hover:bg-white rounded"><i className="w-4 h-4 text-slate-400" data-lucide="move"></i></button>
<div className="flex items-center gap-1 text-xs text-slate-500 cursor-pointer">
<i className="w-3 h-3" data-lucide="filter"></i> Filters
                                </div>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 mb-4">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-sm">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<span className="text-xs text-slate-400 mr-auto">Search in activities ...</span>
<div className="flex gap-2">
<span className="px-3 py-1.5 bg-white rounded-full text-[10px] font-medium text-slate-600 shadow-sm border border-slate-100 flex items-center gap-1">
                                    Team <div className="w-1.5 h-1.5 rounded-full bg-[#DF543B]"></div>
</span>
<span className="px-3 py-1.5 bg-white rounded-full text-[10px] font-medium text-slate-600 shadow-sm border border-slate-100 flex items-center gap-1">
                                    Insights <i className="w-3 h-3" data-lucide="x"></i>
</span>
<span className="px-3 py-1.5 bg-white rounded-full text-[10px] font-medium text-slate-600 shadow-sm border border-slate-100 flex items-center gap-1">
                                    Today <i className="w-3 h-3" data-lucide="x"></i>
</span>
</div>
</div>
</div>

<div className="flex-1 overflow-x-auto no-scrollbar px-6 pb-6">
<div className="flex gap-4 min-w-full">

<div className="bg-white rounded-2xl p-4 w-1/3 min-w-[140px] shadow-sm flex flex-col justify-between">
<div>
<p className="text-xl font-medium text-[#DF543B]">$ 43.20 <span className="text-xs text-slate-300 font-normal">USD</span></p>
</div>
<div className="flex items-end justify-between gap-1 h-12 mt-4">
<div className="w-1 bg-slate-200 h-4 rounded-full"></div>
<div className="w-1 bg-[#DF543B] h-6 rounded-full"></div>
<div className="w-1 bg-slate-200 h-3 rounded-full"></div>
<div className="w-1 bg-[#DF543B] h-8 rounded-full"></div>
<div className="w-1 bg-slate-200 h-5 rounded-full"></div>
<div className="w-1 bg-[#DF543B] h-10 rounded-full"></div>
<div className="w-1 bg-slate-200 h-4 rounded-full"></div>
<div className="w-1 bg-slate-200 h-3 rounded-full"></div>
</div>
<div className="flex gap-1 mt-2 justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#DF543B]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 w-1/3 min-w-[160px] shadow-sm">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] font-medium">Business plans</span>
<i className="w-3 h-3 text-slate-400" data-lucide="more-vertical"></i>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-[#DF543B] flex items-center justify-center text-white text-[8px]"><i className="w-3 h-3" data-lucide="landmark"></i></div>
<span className="text-[10px] text-slate-600">Bank loans</span>
<i className="w-3 h-3 text-slate-300 ml-auto" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-[#DF543B] flex items-center justify-center text-white text-[8px]"><i className="w-3 h-3" data-lucide="bar-chart"></i></div>
<span className="text-[10px] text-slate-600">Accounting</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-[#DF543B] flex items-center justify-center text-white text-[8px]"><i className="w-3 h-3" data-lucide="users"></i></div>
<span className="text-[10px] text-slate-600">HR management</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 w-1/3 min-w-[140px] shadow-sm flex flex-col items-center text-center justify-between">
<i className="w-8 h-8 text-[#DF543B]" data-lucide="sun"></i>
<div>
<p className="text-[10px] font-medium text-slate-900 mt-2">Wallet Verification</p>
<p className="text-[8px] text-slate-400 leading-tight mt-1">Enable 2-step verification to secure your wallet.</p>
</div>
<button className="w-full bg-[#DF543B] text-white text-[10px] py-1.5 rounded-lg mt-2">Enable</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 h-[320px]">

<div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[150px]">
<div className="flex justify-between items-start">
<i className="w-5 h-5 text-slate-800" data-lucide="activity"></i>
<p className="text-xl font-medium tracking-tight">$ 16, 073.49</p>
</div>

<div className="h-10 w-full relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 15 Q 10 18, 20 10 T 40 12 T 60 5 T 80 15 T 100 8" fill="none" stroke="#DF543B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-sm font-medium text-slate-900">Main Stocks</p>
<p className="text-[10px] text-slate-500">Extended &amp; Limited</p>
</div>
<span className="bg-red-50 text-[#DF543B] text-[10px] font-medium px-2 py-1 rounded-md">+ 9.3%</span>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[154px]">
<div className="flex justify-between items-start">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
<div className="w-4 h-1.5 bg-slate-800 rounded-full"></div>
</div>
<button className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100">
<i className="w-3 h-3 text-slate-400" data-lucide="x"></i>
</button>
</div>
<div>
<p className="text-[10px] text-slate-400 mb-1">Review rating</p>
<p className="text-sm font-medium text-slate-900 leading-tight">How is your business management going?</p>
</div>
<div className="flex justify-between items-center mt-2">

<button className="w-7 h-7 rounded-full border border-slate-100 flex items-center justify-center hover:border-slate-300 group">
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-500" data-lucide="frown"></i>
</button>
<button className="w-7 h-7 rounded-full border border-slate-100 flex items-center justify-center hover:border-slate-300 group">
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-500 rotate-12" data-lucide="meh"></i>
</button>
<button className="w-7 h-7 rounded-full border border-slate-100 flex items-center justify-center hover:border-slate-300 group">
<div className="w-3 h-[1px] bg-slate-300 group-hover:bg-slate-500"></div>
</button>
<button className="w-7 h-7 rounded-full border border-slate-100 flex items-center justify-center hover:border-slate-300 group">
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-500" data-lucide="smile"></i>
</button>
<button className="w-7 h-7 rounded-full border border-slate-100 flex items-center justify-center hover:border-slate-300 group">
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-500 -rotate-12" data-lucide="smile"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
