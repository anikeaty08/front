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



        lucide.createIcons({ strokeWidth: 1.5 });
    
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
      

<aside className="w-[260px] flex-shrink-0 bg-[#fbfbfb] border-r border-gray-200 flex flex-col hidden md:flex">

<div className="h-14 px-4 flex items-center justify-between border-b border-transparent">
<div className="flex items-center gap-2">
<div className="bg-blue-600 text-white rounded-md p-1">
<i className="w-4 h-4" data-lucide="message-square-dashed"></i>
</div>
<div className="flex items-start">
<span className="font-medium tracking-tight text-lg">Wonderchat</span>
<i className="w-3 h-3 text-gray-800 ml-0.5" data-lucide="sparkles"></i>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600 rounded p-1 hover:bg-gray-100">
<i className="w-5 h-5" data-lucide="panel-left-close"></i>
</button>
</div>

<div className="px-4 mt-2">
<div className="bg-gray-100/80 p-1 rounded-lg flex items-center justify-between relative">
<button className="w-1/2 bg-white shadow-sm rounded-md py-1.5 text-sm font-medium text-gray-900">Agents</button>
<button className="w-1/2 py-1.5 text-sm font-normal text-gray-500 hover:text-gray-700 relative">
                    Workspace
                    <span className="absolute -top-1 -right-1 bg-[#f44336] text-white text-[10px] leading-none px-1 py-0.5 rounded-full font-medium">New</span>
</button>
</div>
</div>

<nav className="px-3 mt-5 flex flex-col gap-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-blue-600 rounded-md bg-transparent hover:bg-blue-50 transition-colors" href="#">
<i className="w-[18px] h-[18px]" data-lucide="plus-circle"></i>
<span className="text-sm font-normal">New chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 transition-colors" href="#">
<i className="w-[18px] h-[18px]" data-lucide="search"></i>
<span className="text-sm font-normal">Search Chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 transition-colors" href="#">
<i className="w-[18px] h-[18px]" data-lucide="book-open"></i>
<span className="text-sm font-normal">Knowledge library</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 transition-colors" href="#">
<i className="w-[18px] h-[18px]" data-lucide="bot"></i>
<span className="text-sm font-normal">Agents</span>
</a>
</nav>

<div className="mt-6 flex flex-col flex-1 overflow-hidden">
<div className="px-6 flex items-center justify-center gap-2 mb-2">
<div className="h-px bg-gray-200 flex-1"></div>
<span className="text-xs font-normal text-gray-400">Recents</span>
<div className="h-px bg-gray-200 flex-1"></div>
</div>
<div className="flex-1 overflow-y-auto px-3 pb-4 flex flex-col gap-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group" href="#">
<div className="bg-orange-100 text-orange-500 p-1 rounded-full flex-shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="text-sm font-normal truncate group-hover:text-gray-900">Parental leave policy test</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group" href="#">
<div className="bg-pink-100 text-pink-500 p-1 rounded-full flex-shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="text-sm font-normal truncate group-hover:text-gray-900">Diversity and inclusion in...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group" href="#">
<div className="bg-orange-100 text-orange-500 p-1 rounded-full flex-shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="text-sm font-normal truncate group-hover:text-gray-900">Work-life balance strate...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group" href="#">
<div className="bg-orange-100 text-orange-500 p-1 rounded-full flex-shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="text-sm font-normal truncate group-hover:text-gray-900">Team building activities...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group" href="#">
<div className="bg-blue-100 text-blue-500 p-1 rounded-full flex-shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="text-sm font-normal truncate group-hover:text-gray-900">Remote work flexibility g...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group" href="#">
<div className="bg-red-100 text-red-500 p-1 rounded-full flex-shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="text-sm font-normal truncate group-hover:text-gray-900">Employee wellness prog...</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors group" href="#">
<div className="bg-orange-100 text-orange-500 p-1 rounded-full flex-shrink-0">
<i className="w-3 h-3" data-lucide="users"></i>
</div>
<span className="text-sm font-normal truncate group-hover:text-gray-900">Performance review pro...</span>
</a>
</div>
</div>

<div className="p-4 border-t border-gray-200 flex items-center justify-between">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
<i className="w-5 h-5" data-lucide="circle"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
<i className="w-5 h-5" data-lucide="circle"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-14 border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 bg-white">
<h1 className="text-lg font-medium tracking-tight text-gray-900">Create Agent</h1>
<div className="flex items-center gap-4">
<span className="bg-[#f0e7fe] text-[#7c3aed] text-xs font-medium px-2.5 py-1 rounded-md">Turbo</span>
<div className="flex items-center gap-2 border border-gray-200 rounded-full pl-1 pr-3 py-1 cursor-pointer hover:bg-gray-50 transition-colors">
<img alt="Yassir UX" className="w-6 h-6 rounded-full bg-gray-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Yassir&amp;backgroundColor=e2e8f0"/>
<span className="text-sm font-normal text-gray-700">Yassir UX</span>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 overflow-y-auto bg-white p-8 lg:p-12">
<div className="max-w-2xl">

<div className="flex items-center gap-3 mb-10">
<div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<div className="flex items-center w-full">
<span className="text-indigo-900 font-light text-3xl animate-pulse -mt-1 mr-1">|</span>
<input className="w-full text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 placeholder-gray-300 bg-transparent border-none outline-none focus:ring-0 p-0" placeholder="Agent name" type="text"/>
</div>
</div>

<div className="mb-8">
<label className="block text-base font-medium text-gray-900 mb-2.5">Description</label>
<textarea className="w-full h-24 p-3.5 border border-gray-200 rounded-xl bg-white text-base placeholder-gray-400 outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-50 transition-all resize-none shadow-sm" placeholder="Explain the tasks this agent will help your team accomplish."></textarea>
</div>

<div className="mb-8">
<label className="block text-base font-medium text-gray-900 mb-2.5">AI model</label>
<div className="w-full p-3.5 border border-gray-200 rounded-xl bg-white flex justify-between items-center cursor-pointer hover:border-gray-300 hover:bg-gray-50/50 transition-all shadow-sm group">
<span className="text-base text-gray-500 group-hover:text-gray-700">GPT 5.1</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>

<div>
<label className="block text-base font-medium text-gray-900 mb-2.5">Agent Knowledge</label>
<div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-2 flex flex-col gap-2">

<button className="flex items-center gap-3 p-3 w-full rounded-xl hover:bg-gray-100/80 transition-colors text-left group">
<div className="bg-white border border-gray-200 rounded-md p-1 shadow-sm group-hover:border-gray-300">
<i className="w-4 h-4 text-gray-400" data-lucide="plus"></i>
</div>
<span className="text-base font-medium text-gray-900">Add a file</span>
</button>

<div className="flex items-center justify-between p-3.5 bg-white border border-gray-100 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3">
<div className="text-blue-500">
<i className="w-[22px] h-[22px]" data-lucide="file-spreadsheet"></i>
</div>
<span className="text-base font-medium text-gray-900">spreadsheet.xlsx</span>
</div>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50">
<i className="w-5 h-5" data-lucide="more-vertical"></i>
</button>
</div>

<div className="flex items-center justify-between p-3.5 bg-white border border-gray-100 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3">
<div className="text-blue-500">
<i className="w-[22px] h-[22px]" data-lucide="file-text"></i>
</div>
<span className="text-base font-medium text-gray-900">presentation.pptx</span>
</div>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50">
<i className="w-5 h-5" data-lucide="more-vertical"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-[420px] flex-shrink-0 bg-[#fbfbfb] border-l border-gray-200 flex flex-col hidden lg:flex">
<div className="px-8 pt-8 flex-shrink-0">
<h3 className="text-base font-medium text-gray-500">Agent Preview</h3>
</div>
<div className="flex-1"></div> 

<div className="p-6 pt-0 mt-auto flex-shrink-0">
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col overflow-hidden focus-within:ring-4 focus-within:ring-gray-50 focus-within:border-gray-300 transition-all">
<textarea className="w-full resize-none bg-transparent outline-none p-4 pb-2 placeholder-gray-400 text-base min-h-[70px]" placeholder="Ask anything"></textarea>
<div className="flex justify-between items-center px-3 pb-3">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-[22px] h-[22px]" data-lucide="plus"></i>
</button>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-gray-500">Auto</span>
<button className="bg-[#3b6df6] hover:bg-blue-700 text-white p-2 rounded-lg transition-colors shadow-sm">
<i className="w-[18px] h-[18px]" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
