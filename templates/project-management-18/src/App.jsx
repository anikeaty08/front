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
      

<aside className="flex h-full flex-shrink-0">

<div className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-8 z-20">

<div className="relative group cursor-pointer">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>

<nav className="flex flex-col gap-6 w-full items-center">
<button className="text-gray-400 hover:text-purple-600 transition-colors p-2 rounded-xl hover:bg-purple-50">
<i className="w-5 h-5" data-lucide="home"></i>
</button>
<button className="text-gray-400 hover:text-purple-600 transition-colors p-2 rounded-xl hover:bg-purple-50">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<button className="text-gray-400 hover:text-purple-600 transition-colors p-2 rounded-xl hover:bg-purple-50 relative">
<i className="w-5 h-5" data-lucide="message-square"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="text-gray-400 hover:text-purple-600 transition-colors p-2 rounded-xl hover:bg-purple-50">
<i className="w-5 h-5" data-lucide="users"></i>
</button>
<button className="text-gray-400 hover:text-purple-600 transition-colors p-2 rounded-xl hover:bg-purple-50">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</button>
</nav>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-gray-400 hover:text-purple-600 transition-colors">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
<button className="text-gray-400 hover:text-purple-600 transition-colors">
<i className="w-5 h-5" data-lucide="log-out"></i>
</button>
</div>
</div>

<div className="w-64 bg-[#FDFDFD] border-r border-gray-100 flex flex-col py-6 px-4 overflow-y-auto no-scrollbar hidden md:flex">

<div className="flex items-center justify-between mb-8 px-2">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-800">Active</span>
<i className="w-3 h-3 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="space-y-6">

<div>
<div className="flex items-center justify-between px-2 mb-2 group cursor-pointer">
<div className="flex items-center gap-2 text-gray-500">
<i className="w-3.5 h-3.5" data-lucide="shopping-bag"></i>
<span className="text-xs font-semibold uppercase tracking-wider">Shopify</span>
</div>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg group transition-all" href="#">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
<span>DentalPro</span>
</div>
<span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
</a>

<div className="ml-6 border-l border-gray-100 pl-3 mt-1 space-y-1">
<a className="block py-1 text-xs text-gray-400 hover:text-purple-600" href="#">Mobile app</a>
<a className="block py-1 text-xs text-gray-400 hover:text-purple-600" href="#">Website</a>
<a className="block py-1 text-xs text-gray-400 hover:text-purple-600" href="#">Brand identity</a>
</div>
</li>
<li>
<a className="flex items-center justify-between px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-lg group" href="#">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
<span>Panabee</span>
</div>
</a>
</li>
</ul>
</div>

<div>
<div className="flex items-center justify-between px-2 mb-2">
<div className="flex items-center gap-2 text-gray-500">
<i className="w-3.5 h-3.5" data-lucide="dribbble"></i>
<span className="text-xs font-semibold uppercase tracking-wider">Dribbble</span>
</div>
<i className="w-3 h-3 text-gray-400" data-lucide="chevron-down"></i>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center justify-between px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-lg group" href="#">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
<span>Coffee House</span>
</div>
</a>
</li>
<li>
<a className="flex items-center justify-between px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-lg group" href="#">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
<span>Medical Centre</span>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#FAFBFC] relative">

<header className="flex-shrink-0 px-8 py-5 flex justify-between items-center bg-transparent">
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<div className="relative">
<i className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="pl-9 pr-4 py-2 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-100 w-64 shadow-sm text-gray-600" placeholder="Search..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=2"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=3"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">+11</div>
</div>
<div className="h-6 w-px bg-gray-200 mx-2"></div>
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="message-square"></i></button>
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="star"></i></button>
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden p-8 pt-2 no-scrollbar">

<div className="w-full bg-gradient-to-br from-[#F4EBF7] via-[#FCEFF9] to-[#FDF4E7] rounded-[32px] p-8 mb-8 shadow-sm relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-8">
<div className="flex items-center gap-3 text-purple-600">
<div className="bg-white/60 p-2 rounded-xl backdrop-blur-sm">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">DentalPro</h1>
<div className="flex items-center gap-8 text-xs font-medium text-gray-500 uppercase tracking-wide">
<div>
<span className="block text-gray-400 mb-1 text-[10px]">Created</span>
                                    Dec 3, 9:52 am
                                </div>
<div>
<span className="block text-gray-400 mb-1 text-[10px]">Due Date</span>
                                    Jan 24, 00:00 am
                                </div>
<div>
<span className="block text-gray-400 mb-1 text-[10px]">Tracked Time</span>
                                    5 days, 39 sec
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-8 border-b border-transparent mb-6">
<button className="text-sm font-medium text-gray-400 hover:text-gray-600 py-2">Overview</button>
<button className="text-sm font-medium text-gray-400 hover:text-gray-600 py-2">List</button>
<button className="text-sm font-semibold text-white bg-[#7B61FF] px-5 py-2 rounded-full shadow-lg shadow-purple-200 transition-all">Dashboard</button>
<button className="text-sm font-medium text-gray-400 hover:text-gray-600 py-2">Timeline</button>
<button className="text-sm font-medium text-gray-400 hover:text-gray-600 py-2">Calendar</button>
</div>

<div className="flex items-center gap-3 mb-8">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-purple-500 hover:border-purple-300 transition-colors">
                    Deadline <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-purple-500 hover:border-purple-300 transition-colors">
                    Department: Web development <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-400 hover:border-gray-300 transition-colors">
                    Priority <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-10">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-gray-700">Ice box</h3>
<span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md text-xs font-medium">3</span>
</div>
<button className="text-gray-400 hover:text-purple-600 hover:bg-purple-50 p-1 rounded"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>

<div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-semibold text-gray-800 leading-snug">Decompose the task of creating popups</h4>
<button className="text-gray-300 group-hover:text-gray-500"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-4">It is necessary to agree with the customer the required number of pop-ups</p>
<div className="flex items-center gap-2 mb-4">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=4"/>
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=5"/>
<span className="text-[10px] text-gray-400 font-medium">Lucy Meller</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-50">
<div className="flex gap-2">
<span className="bg-blue-50 text-blue-500 text-[10px] font-semibold px-2 py-1 rounded-md">Docs</span>
<span className="bg-purple-50 text-purple-500 text-[10px] font-semibold px-2 py-1 rounded-md">Prepare</span>
</div>
<div className="flex gap-3 text-gray-300">
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="paperclip"></i> 3</div>
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="message-circle"></i> 2</div>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-semibold text-gray-800 leading-snug">Draw icons for the "Advantages" block</h4>
<button className="text-gray-300 group-hover:text-gray-500"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-4">The color scheme should be in neutral tones, the size of each icon is 24x24 px</p>
<div className="flex items-center gap-2 mb-4">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=6"/>
<span className="text-[10px] text-gray-400 font-medium">Mike Wilson</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-50">
<div className="flex gap-2">
<span className="bg-orange-50 text-orange-500 text-[10px] font-semibold px-2 py-1 rounded-md">Illustrations</span>
</div>
<div className="flex gap-3 text-gray-300">
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="paperclip"></i> 1</div>
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="message-circle"></i> 2</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-gray-700">In Progress</h3>
<span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md text-xs font-medium">8</span>
</div>
<button className="text-gray-400 hover:text-purple-600 hover:bg-purple-50 p-1 rounded"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>

<div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-semibold text-gray-800 leading-snug">Draw illustrations for the "About Us" block</h4>
<button className="text-gray-300 group-hover:text-gray-500"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-4">The color scheme should be in neutral tones, the size of each image is 700x700 px</p>
<div className="flex items-center gap-2 mb-4">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=7"/>
<span className="text-[10px] text-gray-400 font-medium">Mike Wilson</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-50">
<div className="flex gap-2">
<span className="bg-orange-50 text-orange-500 text-[10px] font-semibold px-2 py-1 rounded-md">Illustrations</span>
</div>
<div className="flex gap-3 text-gray-300">
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="paperclip"></i> 8</div>
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="message-circle"></i> 3</div>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-semibold text-gray-800 leading-snug">Creating a prototype for the section "Doctors"</h4>
<button className="text-gray-300 group-hover:text-gray-500"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-4">It is necessary to develop a card design, which will include a photo, name...</p>
<div className="flex items-center gap-2 mb-4">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=8"/>
<span className="text-[10px] text-gray-400 font-medium">Wi Young</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-50">
<div className="flex gap-2">
<span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2 py-1 rounded-md">Prototype</span>
</div>
<div className="flex gap-3 text-gray-300">
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="paperclip"></i> 24</div>
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="message-circle"></i> 14</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-gray-700">Discussion</h3>
<span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md text-xs font-medium">3</span>
</div>
<button className="text-gray-400 hover:text-purple-600 hover:bg-purple-50 p-1 rounded"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>

<div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-semibold text-gray-800 leading-snug">Authorization page</h4>
<button className="text-gray-300 group-hover:text-gray-500"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-4">It is necessary to agree with the customer the required number of pop-ups</p>
<div className="flex items-center gap-2 mb-4">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=9"/>
<span className="text-[10px] text-gray-400 font-medium">Jenny Rood</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-50">
<div className="flex gap-2">
<span className="bg-green-50 text-green-500 text-[10px] font-semibold px-2 py-1 rounded-md">Coding</span>
</div>
<div className="flex gap-3 text-gray-300">
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="paperclip"></i> 36</div>
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="message-circle"></i> 14</div>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-semibold text-gray-800 leading-snug">Request a price list from the client</h4>
<button className="text-gray-300 group-hover:text-gray-500"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-4">The price list is required to fill the "Services" block</p>
<div className="flex items-center gap-2 mb-4">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=10"/>
<span className="text-[10px] text-gray-400 font-medium">Tom Pelosky</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-50">
<div className="flex gap-2">
<span className="bg-blue-50 text-blue-500 text-[10px] font-semibold px-2 py-1 rounded-md">Docs</span>
<span className="bg-purple-50 text-purple-500 text-[10px] font-semibold px-2 py-1 rounded-md">Prepare</span>
</div>
<div className="flex gap-3 text-gray-300">
<div className="flex items-center gap-1 text-[10px]"><i className="w-3 h-3" data-lucide="message-circle"></i> 2</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="w-96 bg-white border-l border-gray-100 flex-shrink-0 flex flex-col p-6 overflow-y-auto no-scrollbar hidden 2xl:flex">

<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="mb-8">
<h3 className="text-sm font-semibold text-gray-800 mb-4">Your recent project work</h3>
<div className="grid grid-cols-2 gap-4">

<div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 group hover:border-purple-200 transition-colors">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<h4 className="text-xs font-semibold text-gray-800 leading-tight mb-2">Design of the page "Reviews"</h4>
<div className="flex justify-between items-end">
<div className="flex -space-x-1.5">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=11"/>
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=12"/>
</div>
<span className="text-lg font-bold text-purple-600 tracking-tight">71%</span>
</div>
</div>

<div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 group hover:border-green-200 transition-colors">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-3">
<i className="w-4 h-4" data-lucide="flame"></i>
</div>
<h4 className="text-xs font-semibold text-gray-800 leading-tight mb-2">Preparing for UX Testing</h4>
<div className="flex justify-between items-end">
<img className="w-5 h-5 rounded-full border border-white" src="https://i.pravatar.cc/150?u=13"/>
<span className="text-lg font-bold text-green-500 tracking-tight">43%</span>
</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-end gap-2 mb-4">
<h3 className="text-sm font-semibold text-gray-800">Time Management</h3>
</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-2xl font-bold text-gray-900 tracking-tight">36 <span className="text-sm font-medium text-gray-400">h</span></span>
<span className="text-2xl font-bold text-gray-900 tracking-tight">10 <span className="text-sm font-medium text-gray-400">m</span></span>
</div>
<div className="relative w-full h-32 bg-purple-50/30 rounded-xl p-2">

<svg className="w-full h-full overflow-visible" viewbox="0 0 300 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#A78BFA" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#A78BFA" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="300" y1="20" y2="20"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="300" y1="50" y2="50"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="300" y1="80" y2="80"></line>

<path d="M0,70 Q30,60 50,75 T100,50 T150,60 T200,30 T250,30 T300,50" fill="url(#chartGradient)" stroke="#7C3AED" strokeLinecap="round" strokeWidth="2"></path>

<circle cx="280" cy="42" fill="white" r="4" stroke="#111827" strokeWidth="2"></circle>
<rect fill="#111827" height="20" rx="10" width="40" x="260" y="5"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="10" text-anchor="middle" x="280" y="19">Now</text>
<line opacity="0.3" stroke="#111827" stroke-dasharray="2,2" strokeWidth="1" x1="280" x2="280" y1="42" y2="100"></line>
</svg>
<div className="flex justify-between mt-2 px-1">
<span className="text-[10px] text-gray-400">Mon</span>
<span className="text-[10px] text-gray-400">Tue</span>
<span className="text-[10px] text-gray-400">Wed</span>
<span className="text-[10px] text-gray-400">Thu</span>
<span className="text-[10px] text-gray-400">Fri</span>
<span className="text-[10px] text-gray-400">Sat</span>
<span className="text-[10px] text-gray-400">Sun</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-gray-800">Team Chat</h3>
<div className="flex gap-2">
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="video"></i></button>
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="phone"></i></button>
</div>
</div>
<div className="space-y-4 flex-1">

<div className="flex gap-3">
<img className="w-8 h-8 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=15"/>
<div>
<div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none text-xs text-gray-600 leading-relaxed border border-gray-100/50">
                            Can you tell me how the task is progressing?
                        </div>
<span className="text-[10px] text-gray-300 ml-1 mt-1 block">Do you need new texts for articles from me?</span>
<span className="text-[10px] text-purple-400 font-medium mt-1 block">1h ago</span>
</div>
</div>

<div className="flex gap-3">
<img className="w-8 h-8 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=16"/>
<div>
<div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none text-xs text-gray-600 leading-relaxed border border-gray-100/50">
                            In progress, I'll text you later about some tasks
                        </div>
<span className="text-[10px] text-purple-400 font-medium mt-1 block">1h ago</span>
</div>
</div>

<div className="flex gap-3">
<img className="w-8 h-8 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=17"/>
<div>
<div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none text-xs text-gray-600 leading-relaxed border border-gray-100/50">
                            Waiting, ok
                        </div>
<span className="text-[10px] text-purple-400 font-medium mt-1 block">1h ago</span>
</div>
</div>
</div>

<div className="mt-4 relative">
<i className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="paperclip"></i>
<input className="w-full pl-9 pr-9 py-2.5 bg-gray-50 border border-transparent rounded-xl text-xs focus:outline-none focus:bg-white focus:border-purple-200 transition-all placeholder-gray-400" placeholder="Type a message" type="text"/>
<i className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 hover:text-purple-600 cursor-pointer" data-lucide="send"></i>
</div>
</div>
</aside>


    </>
  );
}
