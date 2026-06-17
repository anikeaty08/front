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
      

<aside className="hidden md:flex flex-col items-center justify-between w-24 bg-white h-full rounded-[40px] py-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shrink-0 z-20">

<div className="h-12 w-12 bg-[#4A5D4F] rounded-full flex items-center justify-center text-white">
<i className="h-6 w-6 fill-current" data-lucide="zap"></i>
</div>

<nav className="flex flex-col gap-6">
<button className="h-12 w-12 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
<i className="h-5 w-5" data-lucide="layout-grid"></i>
</button>
<button className="h-12 w-12 text-gray-400 hover:text-[#4A5D4F] hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors">
<i className="h-6 w-6" data-lucide="users"></i>
</button>
<button className="h-12 w-12 text-gray-400 hover:text-[#4A5D4F] hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors">
<i className="h-6 w-6" data-lucide="bar-chart-2"></i>
</button>
<button className="h-12 w-12 text-gray-400 hover:text-[#4A5D4F] hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors">
<i className="h-6 w-6" data-lucide="calendar"></i>
</button>
</nav>

<div className="flex flex-col gap-6">
<button className="h-12 w-12 text-gray-400 hover:text-[#4A5D4F] hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors">
<i className="h-6 w-6" data-lucide="settings-2"></i>
</button>
<button className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
<img alt="User" className="h-full w-full object-cover bg-amber-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden no-scrollbar pb-4">

<header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 shrink-0">
<div>
<h1 className="text-4xl font-bold tracking-tight text-[#1a1a1a] mb-2">Hello, Alex!</h1>
<p className="text-lg text-gray-500 font-medium">Here's what's happening with your leads today.</p>
</div>
<div className="flex items-center gap-4">

<div className="bg-white h-16 rounded-full pl-6 pr-2 flex items-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] w-full lg:w-96 transition-shadow hover:shadow-md">
<input className="bg-transparent h-full w-full outline-none text-lg placeholder-gray-400 text-gray-700" placeholder="Search leads..." type="text"/>
<button className="h-12 w-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-black transition-colors">
<i className="h-5 w-5" data-lucide="search"></i>
</button>
</div>

<button className="hidden sm:flex h-16 w-16 bg-white rounded-full items-center justify-center text-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-all relative">
<div className="absolute top-4 right-5 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></div>
<i className="h-6 w-6" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 shrink-0">

<div className="bg-white p-6 rounded-[32px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between h-40 group hover:shadow-lg transition-all">
<div className="flex items-start justify-between">
<div>
<p className="text-gray-500 font-medium mb-1">Total Leads</p>
<h3 className="text-4xl font-bold tracking-tight text-[#1a1a1a]">3</h3>
</div>
<div className="h-12 w-12 rounded-full bg-[#F2F0E9] flex items-center justify-center text-[#1a1a1a]">
<i className="h-6 w-6" data-lucide="users"></i>
</div>
</div>
<div className="flex items-center gap-2">
<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">+2 this week</span>
</div>
</div>

<div className="bg-white p-6 rounded-[32px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between h-40 group hover:shadow-lg transition-all">
<div className="flex items-start justify-between">
<div>
<p className="text-gray-500 font-medium mb-1">New</p>
<h3 className="text-4xl font-bold tracking-tight text-[#1a1a1a]">1</h3>
</div>
<div className="h-12 w-12 rounded-full bg-[#F2F0E9] flex items-center justify-center text-[#1a1a1a]">
<i className="h-6 w-6" data-lucide="zap"></i>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 mt-2">
<div className="bg-[#1a1a1a] h-2 rounded-full w-1/3"></div>
</div>
</div>

<div className="bg-[#4A5D4F] p-6 rounded-[32px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between h-40 group hover:translate-y-[-2px] transition-all relative overflow-hidden text-white">
<div className="absolute top-0 right-0 p-6 opacity-10">
<i className="h-24 w-24" data-lucide="mail"></i>
</div>
<div className="flex items-start justify-between relative z-10">
<div>
<p className="text-green-100/80 font-medium mb-1">Ready to Send</p>
<h3 className="text-4xl font-bold tracking-tight">1</h3>
</div>
</div>
<div className="relative z-10">
<button className="bg-[#6B8071] hover:bg-[#7D9384] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 w-max">
                        Review Now <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<button className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-[32px] flex flex-col items-center justify-center h-40 text-gray-400 hover:border-[#4A5D4F] hover:text-[#4A5D4F] hover:bg-white transition-all group cursor-pointer">
<div className="h-14 w-14 rounded-full bg-[#F2F0E9] group-hover:bg-[#4A5D4F] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
<i className="h-7 w-7" data-lucide="plus"></i>
</div>
<span className="font-semibold text-lg">Add New Lead</span>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">

<div className="lg:col-span-8 bg-white rounded-[32px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] h-fit">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-bold tracking-tight text-[#1a1a1a]">Recent Activity</h2>
<button className="text-gray-400 hover:text-[#1a1a1a] transition-colors">
<i className="h-6 w-6" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex flex-col gap-4">

<div className="group flex items-center justify-between p-4 rounded-3xl hover:bg-[#F9F8F6] transition-colors cursor-pointer border border-transparent hover:border-gray-100">
<div className="flex items-center gap-5">
<div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">J</div>
<div>
<h3 className="text-xl font-bold text-[#1a1a1a]">John Smith</h3>
<p className="text-gray-400 font-medium">TechCorp Inc.</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:flex flex-col items-end">
<span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="clock" strokeWidth="3"></i> New
                                </span>
</div>
<div className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[#1a1a1a] group-hover:text-white group-hover:border-[#1a1a1a] transition-all">
<i className="h-5 w-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-3xl hover:bg-[#F9F8F6] transition-colors cursor-pointer border border-transparent hover:border-gray-100">
<div className="flex items-center gap-5">
<div className="h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold">S</div>
<div>
<h3 className="text-xl font-bold text-[#1a1a1a]">Sarah Chen</h3>
<p className="text-gray-400 font-medium">FinancePlus</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:flex flex-col items-end">
<span className="bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="search" strokeWidth="3"></i> Review
                                </span>
</div>
<div className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[#1a1a1a] group-hover:text-white group-hover:border-[#1a1a1a] transition-all">
<i className="h-5 w-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-3xl hover:bg-[#F9F8F6] transition-colors cursor-pointer border border-transparent hover:border-gray-100">
<div className="flex items-center gap-5">
<div className="h-16 w-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold">A</div>
<div>
<h3 className="text-xl font-bold text-[#1a1a1a]">Ahmad Rizky</h3>
<p className="text-gray-400 font-medium">Logistics Hub</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:flex flex-col items-end">
<span className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="mail" strokeWidth="3"></i> Ready
                                </span>
</div>
<div className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[#1a1a1a] group-hover:text-white group-hover:border-[#1a1a1a] transition-all">
<i className="h-5 w-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-white rounded-[32px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-center flex flex-col items-center justify-center h-full min-h-[300px]">
<div className="h-24 w-24 bg-[#F2F0E9] rounded-full flex items-center justify-center mb-6 text-[#1a1a1a]">
<i className="h-12 w-12" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-bold tracking-tight text-[#1a1a1a] mb-3">Select a Lead</h2>
<p className="text-lg text-gray-400 mb-8 max-w-[200px] leading-relaxed">Click on a person from the list to see their details.</p>
<button className="bg-[#1a1a1a] hover:bg-black text-white px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg w-full">
                        View All Contacts
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
