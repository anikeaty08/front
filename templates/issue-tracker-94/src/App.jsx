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
      

<div className="w-full bg-white border-b border-neutral-200 flex items-center px-4 py-3 z-50 shrink-0">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
</div>
<div className="mx-auto w-1/2 bg-neutral-100 rounded-md py-1 px-3 text-center text-xs text-neutral-400 font-medium flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i>
            app.nexus.com/board/sprint-32
        </div>
<div className="flex gap-4">
<i className="w-4 h-4 text-neutral-400" data-lucide="more-horizontal"></i>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<aside className="w-64 bg-neutral-50 border-r border-neutral-200 flex flex-col shrink-0">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                        N
                    </div>
<span className="font-medium text-sm tracking-tight text-neutral-900">Nexus</span>
</div>
<div className="bg-neutral-200/50 p-1 rounded hover:bg-neutral-200 cursor-pointer transition-colors">
<i className="w-3 h-3 text-neutral-500" data-lucide="chevrons-up-down"></i>
</div>
</div>

<nav className="flex-1 px-3 space-y-6 overflow-y-auto pt-2">

<div className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md group" href="#">
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="inbox"></i>
                        Inbox
                        <span className="ml-auto text-xs bg-neutral-200 text-neutral-600 px-1.5 py-0.5 rounded-full">4</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md group" href="#">
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="target"></i>
                        My Issues
                    </a>
</div>

<div>
<div className="px-2 mb-2 text-xs font-medium text-neutral-400 uppercase tracking-wider">Project Views</div>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-50/60 rounded-md" href="#">
<i className="w-4 h-4 text-indigo-600" data-lucide="kanban-square"></i>
                            Board
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md group" href="#">
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="list"></i>
                            Backlog
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md group" href="#">
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="calendar"></i>
                            Calendar
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md group" href="#">
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" data-lucide="file-text"></i>
                            Documentation
                        </a>
</div>
</div>

<div>
<div className="px-2 mb-2 flex items-center justify-between group cursor-pointer">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Teams</span>
<i className="w-3 h-3 text-neutral-400 opacity-0 group-hover:opacity-100" data-lucide="plus"></i>
</div>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            Core Product
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Marketing
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 rounded-md" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Infrastructure
                        </a>
</div>
</div>
</nav>

<div className="p-4 border-t border-neutral-200">
<div className="flex items-center gap-3 cursor-pointer">
<img alt="User" className="w-8 h-8 rounded-full bg-neutral-200 shadow-sm border border-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900 leading-tight">Alex Morgan</span>
<span className="text-xs text-neutral-500">Product Lead</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-neutral-100">

<header className="bg-white/80 backdrop-blur-sm border-b border-neutral-200 px-6 py-3 flex items-center justify-between shrink-0 sticky top-0 z-30">
<div className="flex items-center gap-4">
<nav className="flex items-center gap-2 text-sm text-neutral-500">
<span className="hover:text-neutral-900 cursor-pointer">Core Product</span>
<i className="w-4 h-4 text-neutral-300" data-lucide="chevron-right"></i>
<span className="font-medium text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded">Sprint 32</span>
</nav>
</div>
<div className="flex items-center gap-4">

<div className="relative group">
<i className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-neutral-500" data-lucide="search"></i>
<input className="pl-9 pr-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-md text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all w-64 shadow-sm" placeholder="Search backlog..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-0.5">
<span className="text-[10px] text-neutral-400 border border-neutral-200 bg-white px-1 rounded shadow-sm">⌘</span>
<span className="text-[10px] text-neutral-400 border border-neutral-200 bg-white px-1 rounded shadow-sm">K</span>
</div>
</div>
<div className="h-4 w-px bg-neutral-200"></div>

<div className="flex items-center gap-1">
<button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-500">
<i className="w-4 h-4" data-lucide="filter"></i>
</button>
<button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-500">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
</button>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-3 py-1.5 rounded-md shadow-sm flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
                        New Issue
                    </button>
</div>
</header>

<div className="flex-1 overflow-x-auto overflow-y-hidden p-6 relative">
<div className="flex h-full gap-6 min-w-max">

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-400"></span>
<span className="text-sm font-medium text-neutral-700">To Do</span>
<span className="text-xs text-neutral-400 font-medium">3</span>
</div>
<button className="text-neutral-400 hover:text-neutral-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-20">

<div className="bg-white p-3 rounded-lg custom-shadow group border border-transparent hover:border-indigo-300 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-neutral-400">COR-124</span>
<div className="w-2 h-2 rounded-full bg-orange-400" title="Medium Priority"></div>
</div>
<h3 className="text-sm font-medium text-neutral-800 mb-3 leading-snug">Design system color palette accessibility audit</h3>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="px-1.5 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-500 bg-neutral-50">Design</div>
</div>
<img className="w-5 h-5 rounded-full bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jude"/>
</div>
</div>

<div className="bg-white p-3 rounded-lg custom-shadow group border border-transparent hover:border-indigo-300 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-neutral-400">COR-129</span>
<div className="w-2 h-2 rounded-full bg-emerald-400" title="Low Priority"></div>
</div>
<h3 className="text-sm font-medium text-neutral-800 mb-3 leading-snug">Update documentation for v2.0 release</h3>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="px-1.5 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-500 bg-neutral-50">Docs</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-4 h-4">
<div className="w-3 h-3 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin absolute"></div>
</div>
<span className="text-sm font-medium text-neutral-700">In Progress</span>
<span className="text-xs text-neutral-400 font-medium">1</span>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-20">

<div className="bg-white p-3 rounded-lg shadow-[0_0_0_2px_rgba(99,102,241,0.6)] custom-shadow cursor-pointer relative">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-indigo-600">COR-120</span>
<div className="w-2 h-2 rounded-full bg-red-500" title="High Priority"></div>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-3 leading-snug">Integrate OAuth 2.0 authentication flow</h3>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="px-1.5 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-500 bg-neutral-50">Backend</div>
<div className="px-1.5 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-500 bg-neutral-50">Auth</div>
</div>
<div className="flex -space-x-1.5">
<img className="w-5 h-5 rounded-full bg-white ring-1 ring-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img className="w-5 h-5 rounded-full bg-white ring-1 ring-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"/>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full opacity-70 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span className="text-sm font-medium text-neutral-700">Done</span>
<span className="text-xs text-neutral-400 font-medium">5</span>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-20">
<div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 group hover:border-neutral-300 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-neutral-400 line-through">COR-110</span>
</div>
<h3 className="text-sm font-medium text-neutral-500 mb-3 leading-snug line-through">Setup CI/CD pipeline</h3>
</div>
<div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 group hover:border-neutral-300 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-neutral-400 line-through">COR-112</span>
</div>
<h3 className="text-sm font-medium text-neutral-500 mb-3 leading-snug line-through">Migration script for legacy data</h3>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full pt-10">
<button className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 px-2">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-sm font-medium">Add Section</span>
</button>
</div>
</div>

<div className="absolute top-4 right-4 bottom-4 w-[600px] bg-white rounded-xl custom-shadow flex flex-col border border-neutral-200/50 z-40 animate-in slide-in-from-right-10 duration-200">

<div className="h-14 border-b border-neutral-100 flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="font-mono text-neutral-400">COR-120</span>
<span className="text-neutral-300">/</span>
<span>Core Product</span>
<span className="text-neutral-300">/</span>
<span className="flex items-center gap-1.5 text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> In Progress
                            </span>
</div>
<div className="flex items-center gap-1">
<button className="p-1.5 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded"><i className="w-4 h-4" data-lucide="share"></i></button>
<button className="p-1.5 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
<button className="p-1.5 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded ml-1"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>

<div className="flex-1 overflow-y-auto">
<div className="px-8 py-8">
<h1 className="text-xl font-semibold text-neutral-900 tracking-tight mb-6">Integrate OAuth 2.0 authentication flow</h1>

<div className="mb-8 group">
<div className="flex items-center gap-1 border-b border-neutral-100 pb-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded"><i className="w-3.5 h-3.5" data-lucide="bold"></i></button>
<button className="p-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded"><i className="w-3.5 h-3.5" data-lucide="italic"></i></button>
<button className="p-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded"><i className="w-3.5 h-3.5" data-lucide="list"></i></button>
<div className="w-px h-3 bg-neutral-200 mx-1"></div>
<button className="p-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded"><i className="w-3.5 h-3.5" data-lucide="link"></i></button>
<button className="p-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded"><i className="w-3.5 h-3.5" data-lucide="code"></i></button>
</div>
<div className="text-sm text-neutral-600 space-y-4 leading-relaxed">
<p>We need to implement the standard OAuth 2.0 flow to allow third-party integrations. This includes setting up the authorization server and defining the scopes.</p>
<ul className="list-disc pl-5 space-y-1">
<li>Define scopes for read/write access.</li>
<li>Implement refresh token rotation.</li>
<li>Update API documentation.</li>
</ul>
<div className="bg-neutral-50 border border-neutral-200 rounded p-3 font-mono text-xs text-neutral-600">
                                        POST /oauth/token<br/>
                                        grant_type=authorization_code
                                    </div>
</div>
</div>

<div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 border-t border-b border-neutral-100 py-6">
<div className="flex flex-col gap-1">
<label className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wide">Assignee</label>
<div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 -ml-1 p-1 rounded">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<span className="text-sm text-neutral-700 font-medium">Alex Morgan</span>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wide">Priority</label>
<div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 -ml-1 p-1 rounded">
<i className="w-3.5 h-3.5 text-red-500 fill-red-500" data-lucide="flag"></i>
<span className="text-sm text-neutral-700 font-medium">High</span>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wide">Due Date</label>
<div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 -ml-1 p-1 rounded">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="calendar-clock"></i>
<span className="text-sm text-neutral-700 font-medium">Oct 24, 2023</span>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wide">Estimate</label>
<div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 -ml-1 p-1 rounded">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="timer"></i>
<span className="text-sm text-neutral-700 font-medium">5 Points</span>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-neutral-900 mb-4">Activity</h4>
<div className="space-y-6">

<div className="flex gap-3">
<img className="w-6 h-6 rounded-full mt-1 bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-neutral-900">Sara Jenkins</span>
<span className="text-[10px] text-neutral-400">2 hours ago</span>
</div>
<p className="text-sm text-neutral-600">I've started drafting the scope definitions. Check the linked doc.</p>
</div>
</div>

<div className="flex gap-3">
<img className="w-6 h-6 rounded-full mt-1 bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-neutral-900">Alex Morgan</span>
<span className="text-[10px] text-neutral-400">Just now</span>
</div>
<p className="text-sm text-neutral-600">Please ensure we cover the edge case for token expiration.</p>
</div>
</div>
</div>

<div className="mt-6 flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-600 text-[10px] text-white flex items-center justify-center font-bold mt-1">A</div>
<div className="flex-1 border border-neutral-200 rounded-lg shadow-sm bg-white focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all overflow-hidden">
<textarea className="w-full p-3 text-sm resize-none focus:outline-none placeholder-neutral-400" placeholder="Leave a comment..." rows="2"></textarea>
<div className="bg-neutral-50 px-2 py-1.5 flex justify-between items-center border-t border-neutral-100">
<div className="flex gap-1">
<button className="p-1 text-neutral-400 hover:text-neutral-600 rounded"><i className="w-3.5 h-3.5" data-lucide="paperclip"></i></button>
<button className="p-1 text-neutral-400 hover:text-neutral-600 rounded"><i className="w-3.5 h-3.5" data-lucide="smile"></i></button>
</div>
<button className="px-2 py-1 bg-neutral-900 text-white text-xs font-medium rounded shadow-sm hover:bg-neutral-800">Comment</button>
</div>
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
