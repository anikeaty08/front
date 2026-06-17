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



        // Initialize Lucide icons with customized stroke width to match thin/clean aesthetic
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Simple script to auto-resize textarea based on content
        const textarea = document.querySelector('textarea');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
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
      

<aside className="w-64 flex-shrink-0 border-r border-slate-100 bg-[#fcfcfc] flex flex-col h-full hidden md:flex">
<div className="p-4 flex flex-col h-full">

<div className="flex items-center justify-between mb-6 px-1">
<div className="flex items-center gap-2 cursor-pointer">
<div className="bg-blue-600 rounded-full w-8 h-[22px] flex items-center justify-center text-white shrink-0">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</div>
<span className="text-lg font-medium text-slate-800 tracking-tight">Wonderchat<sup className="text-xs">+</sup></span>
</div>
<button className="hover:text-slate-600 transition-colors text-slate-400 bg-white border rounded pt-1 pr-1 pb-1 pl-1">
<i className="w-4 h-4" data-lucide="sidebar"></i>
</button>
</div>

<div className="bg-slate-100 p-1 rounded-lg flex mb-6 relative">
<button className="flex-1 text-center py-1.5 bg-white shadow-sm rounded-md text-slate-700 font-medium text-sm transition-all">
                    Agents
                </button>
<button className="flex-1 text-center py-1.5 text-slate-500 hover:text-slate-700 font-medium text-sm transition-all relative">
                    Workspace
                    <span className="absolute -top-1.5 right-1 bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full border-2 border-[#fcfcfc] leading-none">New</span>
</button>
</div>

<nav className="space-y-1 mb-8">
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-blue-600 font-medium group" href="#">
<i className="w-5 h-5 shrink-0 group-hover:scale-105 transition-transform" data-lucide="plus-circle"></i>
                    New chat
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal" href="#">
<i className="w-5 h-5 shrink-0 text-slate-500" data-lucide="search"></i>
                    Search Chat
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal" href="#">
<i className="w-5 h-5 shrink-0 text-slate-500" data-lucide="book-open"></i>
                    Knowledge library
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal" href="#">
<i className="w-5 h-5 shrink-0 text-slate-500" data-lucide="inbox"></i>
                    Agents
                </a>
</nav>

<div className="flex items-center gap-2 px-3 mb-3">
<div className="h-px bg-slate-200 flex-1"></div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Recents</span>
<div className="h-px bg-slate-200 flex-1"></div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar space-y-0.5 -mx-2 px-2">

<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal group" href="#">
<div className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="user"></i>
</div>
<span className="truncate">Parental leave policy test</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal group" href="#">
<div className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="truncate">Diversity and inclusion in...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal group" href="#">
<div className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="user"></i>
</div>
<span className="truncate">Work-life balance strate...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal group" href="#">
<div className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="user"></i>
</div>
<span className="truncate">Team building activities...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal group" href="#">
<div className="w-5 h-5 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="user"></i>
</div>
<span className="truncate">Remote work flexibility g...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal group" href="#">
<div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="user"></i>
</div>
<span className="truncate">Employee wellness prog...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-slate-600 font-normal group" href="#">
<div className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="user"></i>
</div>
<span className="truncate">Performance review pro...</span>
</a>
</div>

<div className="mt-4 pt-4 flex items-center justify-between px-2 text-slate-400">
<button className="hover:text-slate-600 transition-colors"><i className="w-5 h-5" data-lucide="circle"></i></button>
<button className="hover:text-slate-600 transition-colors"><i className="w-5 h-5" data-lucide="circle"></i></button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-white overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 shrink-0 w-full z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-800">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<span className="font-medium text-slate-800 text-lg">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<span className="bg-purple-50 text-purple-600 px-2.5 py-1 rounded-md text-sm font-medium tracking-tight">Turbo</span>
<button className="hover:bg-slate-50 transition-colors flex border-slate-200 border rounded-lg pt-1 pr-3 pb-1 pl-3 shadow-sm gap-x-2 gap-y-2 items-center">
<img alt="User" className="w-5 h-5 rounded-full bg-slate-200 object-cover" src="https://i.pravatar.cc/150?u=yassir"/>
<span className="text-base font-medium text-slate-600">Yassir UX</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-4 pb-12 pt-20 flex flex-col items-center w-full">
<div className="w-full max-w-[800px] flex flex-col items-center">

<h1 className="text-4xl tracking-tight text-slate-700 font-medium mb-10 text-center">
                    How i can help, Vera
                </h1>

<div className="w-full bg-white border border-slate-200 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] rounded-[20px] p-3 flex flex-col gap-3 min-h-[160px] transition-all hover:border-slate-300 focus-within:border-blue-300 focus-within:shadow-[0_4px_24px_-8px_rgba(37,99,235,0.1)]">

<div className="flex flex-wrap gap-2 px-1">
<div className="flex items-center gap-2.5 border border-slate-200 rounded-lg px-3 py-2 bg-white shadow-sm w-max hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="bg-blue-600 rounded p-1 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="file-spreadsheet"></i>
</div>
<span className="text-sm font-medium text-slate-700">spreadsheet.xlsx</span>
<button className="text-slate-400 hover:text-slate-600 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>

<textarea className="w-full px-2 py-2 outline-none resize-none text-lg text-slate-700 placeholder:text-slate-400 bg-transparent flex-1" placeholder="Ask anything" rows="1"></textarea>

<div className="flex items-center justify-between px-2 pt-2">
<button className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="flex items-center gap-4">
<span className="text-sm text-slate-500 font-medium cursor-pointer hover:text-slate-700 transition-colors">Auto</span>
<button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

<div className="border border-slate-100 bg-white rounded-2xl p-5 hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all cursor-pointer group flex flex-col items-start text-left">
<div className="w-8 h-8 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<h3 className="text-base font-medium text-slate-800 mb-1.5 w-full truncate">HR Onboarding Agent</h3>
<p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">A HR onboarding expert trained on your employee...</p>
</div>

<div className="border border-slate-100 bg-white rounded-2xl p-5 hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all cursor-pointer group flex flex-col items-start text-left">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<h3 className="text-base font-medium text-slate-800 mb-1.5 w-full truncate">Project Management...</h3>
<p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">A project management tool that assists teams in orga...</p>
</div>

<div className="border border-slate-100 bg-white rounded-2xl p-5 hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all cursor-pointer group flex flex-col items-start text-left">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<h3 className="text-base font-medium text-slate-800 mb-1.5 w-full truncate">Sales Analytics Tool</h3>
<p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">A data analytics application that helps sales teams tra...</p>
</div>

<div className="border border-slate-100 bg-white rounded-2xl p-5 hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all cursor-pointer group flex flex-col items-start text-left">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<h3 className="text-base font-medium text-slate-800 mb-1.5 w-full truncate">Remote Team Collabo...</h3>
<p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">A digital workspace where remote teams can collabo...</p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
