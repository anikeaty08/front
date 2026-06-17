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
      

<aside className="w-[260px] bg-[#F9FAFB] border-r border-gray-200 flex flex-col h-full flex-shrink-0">

<div className="h-14 px-4 flex items-center justify-between mt-1">
<div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded-md -ml-1 transition-colors">
<div className="w-6 h-6 bg-[#1e1b4b] rounded-lg flex items-center justify-center text-white font-bold text-xs">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="font-semibold text-gray-800 tracking-tight text-[15px]">Emura's...</span>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevrons-up-down"></i>
</div>
<button className="p-1 hover:bg-gray-200 rounded text-gray-400">
<i className="w-4 h-4" data-lucide="panel-left-close"></i>
</button>
</div>

<div className="px-4 mb-4">
<div className="relative group">
<i className="absolute left-2.5 top-1.5 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full bg-white border border-gray-200 pl-9 pr-8 py-1.5 rounded-md text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-100 shadow-sm transition-all" placeholder="Search" type="text"/>
<div className="absolute right-2 top-1.5 flex items-center gap-0.5 border border-gray-200 rounded px-1 bg-gray-50">
<span className="text-[10px] text-gray-400 font-medium">⌘K</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-2 space-y-6">

<div>
<div className="px-2 mb-1 text-[11px] font-medium text-gray-400 uppercase tracking-wide">Main</div>
<ul className="space-y-0.5">
<li><a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium group" href="#"><i className="w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="home"></i> Home</a></li>
<li><a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium group" href="#"><i className="w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="inbox"></i> Inbox</a></li>
<li><a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium group" href="#"><i className="w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="users"></i> Team</a></li>
<li><a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium group" href="#"><i className="w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="file-text"></i> Docs</a></li>
<li><a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium group justify-between" href="#">
<div className="flex items-center gap-2.5"><i className="w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="more-horizontal"></i> More</div>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-down"></i>
</a></li>
</ul>
</div>

<div>
<div className="px-2 mb-1 text-[11px] font-medium text-gray-400 uppercase tracking-wide">Spaces</div>
<ul className="space-y-0.5">

<li>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium group justify-between" href="#">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-emerald-600 rounded flex items-center justify-center"><i className="w-2.5 h-2.5 text-white" data-lucide="layers"></i></div>
<span>Agency Management</span>
</div>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="plus"></i>
</a>

<div className="ml-2 pl-2 border-l border-gray-200 mt-0.5 space-y-0.5">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium justify-between group" href="#">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="folder-open"></i>
<span className="truncate max-w-[120px]">Small Client P...</span>
</div>
<i className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100" data-lucide="plus"></i>
</a>

<div className="ml-2 pl-2 border-l border-gray-200 space-y-0.5">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-gray-200/80 text-gray-900 font-medium" href="#">
<i className="w-4 h-4 text-gray-600" data-lucide="list-todo"></i> Project 1
                                </a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-gray-200/60 font-medium" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="list-todo"></i> Project 2
                                </a>
</div>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-gray-200/60 font-medium" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="folder"></i> Scope of Work
                            </a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-gray-200/60 font-medium" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="folder"></i> PostSale
                            </a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-gray-200/60 font-medium" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="folder"></i> CRM
                            </a>
</div>
</li>
<li className="px-2 py-1 text-gray-400 flex items-center gap-2 cursor-pointer hover:text-gray-600">
<i className="w-4 h-4" data-lucide="plus"></i> New Space
                    </li>
<li className="pt-2">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium" href="#">
<div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[8px] text-white font-bold">C</div>
<span>Odie Banking</span>
</a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-700 hover:bg-gray-200/60 font-medium" href="#">
<div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center text-[8px] text-white font-bold">D</div>
<span>Dalton Management</span>
</a>
</li>
<li className="px-2 py-1 text-gray-400 flex items-center gap-2 cursor-pointer hover:text-gray-600">
<i className="w-4 h-4" data-lucide="plus"></i> New Space
                    </li>
</ul>
</div>

<div>
<a className="px-2 mb-1 flex items-center gap-2 text-[11px] font-medium text-gray-400 uppercase tracking-wide hover:text-gray-600" href="#">
                    Favorites <i className="w-3 h-3" data-lucide="chevron-right"></i>
</a>
</div>
</div>

<div className="p-4 border-t border-gray-200">
<a className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="help-circle"></i> Help
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-14 px-6 border-b border-gray-100 flex items-center justify-between flex-shrink-0">

<div className="flex items-center gap-2 text-sm text-gray-500">
<div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"><i className="w-2.5 h-2.5 text-white stroke-[3]" data-lucide="check"></i></div>
<span className="hover:text-gray-800 cursor-pointer">Agency Management</span>
<span className="text-gray-300">/</span>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="folder"></i>
<span className="hover:text-gray-800 cursor-pointer">Large Client Project</span>
<span className="text-gray-300">/</span>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="list-todo"></i>
<span className="font-semibold text-gray-900">Phase 3 : Review &amp; Launch</span>
<i className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:bg-gray-100 rounded" data-lucide="chevron-down"></i>
<i className="w-4 h-4 text-gray-400 cursor-pointer ml-1 hover:bg-gray-100 rounded p-0.5" data-lucide="more-horizontal"></i>
</div>

<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="users"></i> Agents
                </button>
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1.5">
<span className="text-yellow-500"><i className="w-3.5 h-3.5 fill-current" data-lucide="sparkles"></i></span> Automate
                </button>
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">Share</button>
</div>
</header>

<div className="px-6 border-b border-gray-200 flex-shrink-0">
<div className="flex items-center h-12 gap-6">
<button className="px-3 py-1 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 bg-white shadow-sm">Add Channel</button>
<div className="h-6 w-px bg-gray-200"></div>
<div className="flex items-center gap-6 h-full">
<button className="h-full flex items-center gap-2 border-b-2 border-purple-600 text-purple-700 font-medium px-1">
<i className="w-4 h-4" data-lucide="list"></i> Tasks
                    </button>
<button className="h-full flex items-center gap-2 border-b-2 border-transparent text-gray-500 hover:text-gray-800 font-medium px-1">
<i className="w-4 h-4" data-lucide="kanban-square"></i> Board
                    </button>
<button className="h-full flex items-center gap-2 border-b-2 border-transparent text-gray-500 hover:text-gray-800 font-medium px-1">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i> Timeline
                    </button>
<button className="flex items-center gap-1 text-gray-500 hover:text-gray-800 px-2 py-1 hover:bg-gray-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i> View
                    </button>
</div>
</div>
</div>

<div className="px-6 py-3 flex items-center justify-between flex-shrink-0">
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded-md border border-dashed border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50 text-sm flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="layers"></i> Group: Status
                </button>
<button className="px-2.5 py-1 rounded-md border border-transparent hover:bg-gray-100 text-gray-600 text-sm flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="git-merge"></i> Subtasks
                </button>
<button className="px-2.5 py-1 rounded-md border border-transparent hover:bg-gray-100 text-gray-600 text-sm flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="columns"></i> Columns
                </button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="list-filter"></i> Filter
                </button>
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i> Closed
                </button>
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="users"></i> Assignee
                </button>
<div className="h-8 w-px bg-gray-200 mx-1"></div>
<button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500"><i className="w-4 h-4" data-lucide="search"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500"><i className="w-4 h-4" data-lucide="settings"></i></button>
<button className="ml-2 px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm font-medium flex items-center gap-1.5 shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> New Project
                </button>
</div>
</div>

<div className="flex-1 overflow-auto px-6 pb-10">

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] text-xs font-medium text-gray-500 border-b border-gray-200 pb-2">
<div className="pl-8">Name</div>
<div>Assignee</div>
<div>Start date</div>
<div>Due date</div>
<div>Priority</div>
<div>Project</div>
<div className="flex justify-end pr-2"><i className="w-4 h-4 text-gray-400" data-lucide="plus-circle"></i></div>
</div>

<div className="mt-4 group">

<div className="sticky top-0 bg-white z-10 flex items-center gap-2 py-1.5 border-b border-transparent group-hover:border-gray-100 transition-colors">
<i className="w-4 h-4 text-gray-400 hover:bg-gray-100 rounded cursor-pointer" data-lucide="chevron-down"></i>
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-bold tracking-wide">TO DO</span>
<span className="text-gray-400 text-xs ml-1">1</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" data-lucide="more-horizontal"></i>
<span className="text-gray-400 hover:text-gray-600 cursor-pointer flex items-center gap-1 text-xs ml-2"><i className="w-3.5 h-3.5" data-lucide="plus"></i> Add Task</span>
</div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 hover:bg-gray-50 text-[14px] text-gray-700 group/row">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="w-4 h-4 rounded-full border-2 border-dashed border-gray-300 flex-shrink-0 cursor-pointer hover:border-gray-400"></div>
<span>Gather Feedback from Internal Stakeholders</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-red-500" data-lucide="signal-high"></i> High</div>
<div className="flex items-center gap-2"><div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[9px] text-white font-bold">C</div> Odie</div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-1.5 pl-9 text-gray-400 hover:text-gray-600 cursor-pointer text-sm">
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="plus"></i> Add Task</div>
</div>
</div>

<div className="mt-6 group relative">

<div className="sticky top-0 bg-white z-10 flex items-center gap-2 py-1.5 border-b border-transparent group-hover:border-gray-100 transition-colors">
<i className="w-4 h-4 text-gray-400 hover:bg-gray-100 rounded cursor-pointer" data-lucide="chevron-down"></i>
<span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-600 text-[11px] font-bold tracking-wide">IN PROGRESS</span>
<span className="text-gray-400 text-xs ml-1">1</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" data-lucide="more-horizontal"></i>
<span className="text-gray-400 hover:text-gray-600 cursor-pointer flex items-center gap-1 text-xs ml-2"><i className="w-3.5 h-3.5" data-lucide="plus"></i> Add Task</span>
</div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 hover:bg-gray-50 text-[14px] text-gray-700 group/row">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="relative w-4 h-4 rounded-full border-2 border-amber-400 flex-shrink-0 cursor-pointer hover:border-amber-500 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-amber-400"></div>
</div>
<span>Gather Feedback from Internal Stakeholders</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="signal-low"></i> Low</div>
<div className="flex items-center gap-2"><div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[9px] text-white font-bold">C</div> Odie</div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 bg-blue-50/30 text-[14px] text-gray-700 group/row relative">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="relative w-4 h-4 rounded-full border-2 border-amber-400 flex-shrink-0 cursor-pointer hover:border-amber-500 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-amber-400"></div>
</div>
<span>Iterate on feedback</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="signal-low"></i> Low</div>
<div className="flex items-center gap-2 relative">

<div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[9px] text-white font-bold">C</div> Dalton
                    </div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>

<div className="absolute top-8 right-[80px] w-56 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-200 z-50 overflow-hidden font-medium text-[13px] text-gray-700">
<div className="flex border-b border-gray-100 p-1">
<button className="flex-1 py-1.5 hover:bg-gray-50 rounded text-center text-xs">Copy Link</button>
<div className="w-px bg-gray-100 my-1"></div>
<button className="flex-1 py-1.5 hover:bg-gray-50 rounded text-center text-xs">Copy ID</button>
<div className="w-px bg-gray-100 my-1"></div>
<button className="flex-1 py-1.5 hover:bg-gray-50 rounded text-center text-xs">New Tab</button>
</div>
<div className="p-1.5">
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-100 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="columns"></i> Add a column
                            </button>
<div className="h-px bg-gray-100 my-1"></div>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-100 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="star"></i> Add to my...
                            </button>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-100 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="pen-line"></i> Rename
                            </button>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-100 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="copy"></i> Duplicated
                            </button>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-100 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="mail"></i> Send email to task
                            </button>
<div className="h-px bg-gray-100 my-1"></div>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-gray-100 rounded-md">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="archive"></i> Archive
                            </button>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-red-50 text-red-600 rounded-md">
<i className="w-3.5 h-3.5 text-red-400" data-lucide="trash-2"></i> Delete
                            </button>
</div>
<div className="p-1.5 border-t border-gray-100">
<button className="w-full py-1.5 bg-gray-900 text-white rounded-md text-xs font-medium hover:bg-gray-800">
                                Sharing &amp; Permissions
                            </button>
</div>
</div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 hover:bg-gray-50 text-[14px] text-gray-700 group/row">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="relative w-4 h-4 rounded-full border-2 border-amber-400 flex-shrink-0 cursor-pointer hover:border-amber-500 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-amber-400"></div>
</div>
<span>Hold launch meeting with client</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-amber-500" data-lucide="signal-medium"></i> Medium</div>
<div className="flex items-center gap-2"><div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[9px] text-white font-bold">C</div> Odie</div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 hover:bg-gray-50 text-[14px] text-gray-700 group/row">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="relative w-4 h-4 rounded-full border-2 border-amber-400 flex-shrink-0 cursor-pointer hover:border-amber-500 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-amber-400"></div>
</div>
<span>Handoff deliverables and documentation to client</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-red-500" data-lucide="signal-high"></i> High</div>
<div className="flex items-center gap-2"><div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[9px] text-white font-bold">C</div> Odie</div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-1.5 pl-9 text-gray-400 hover:text-gray-600 cursor-pointer text-sm">
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="plus"></i> Add Task</div>
</div>
</div>

<div className="mt-6 group">

<div className="sticky top-0 bg-white z-10 flex items-center gap-2 py-1.5 border-b border-transparent group-hover:border-gray-100 transition-colors">
<i className="w-4 h-4 text-gray-400 hover:bg-gray-100 rounded cursor-pointer" data-lucide="chevron-down"></i>
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[11px] font-bold tracking-wide">IN REVIEW</span>
<span className="text-gray-400 text-xs ml-1">2</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" data-lucide="more-horizontal"></i>
<span className="text-gray-400 hover:text-gray-600 cursor-pointer flex items-center gap-1 text-xs ml-2"><i className="w-3.5 h-3.5" data-lucide="plus"></i> Add Task</span>
</div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 hover:bg-gray-50 text-[14px] text-gray-700 group/row">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="relative w-4 h-4 rounded-full border-2 border-blue-500 flex-shrink-0 cursor-pointer hover:border-blue-600 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-blue-500"></div>
</div>
<span>Iterate on feedback</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-red-500" data-lucide="signal-high"></i> High</div>
<div className="flex items-center gap-2"><div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center text-[9px] text-white font-bold">D</div> Dalton</div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 hover:bg-gray-50 text-[14px] text-gray-700 group/row">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="relative w-4 h-4 rounded-full border-2 border-blue-500 flex-shrink-0 cursor-pointer hover:border-blue-600 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-blue-500"></div>
</div>
<span>Handoff deliverables and documentation to client</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-amber-500" data-lucide="signal-medium"></i> Medium</div>
<div className="flex items-center gap-2"><div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[9px] text-white font-bold">C</div> Odie</div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-1.5 pl-9 text-gray-400 hover:text-gray-600 cursor-pointer text-sm">
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="plus"></i> Add Task</div>
</div>
</div>

<div className="mt-6 group">

<div className="sticky top-0 bg-white z-10 flex items-center gap-2 py-1.5 border-b border-transparent group-hover:border-gray-100 transition-colors">
<i className="w-4 h-4 text-gray-400 hover:bg-gray-100 rounded cursor-pointer" data-lucide="chevron-down"></i>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold tracking-wide">ON TRACK</span>
<span className="text-gray-400 text-xs ml-1">1</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" data-lucide="more-horizontal"></i>
<span className="text-gray-400 hover:text-gray-600 cursor-pointer flex items-center gap-1 text-xs ml-2"><i className="w-3.5 h-3.5" data-lucide="plus"></i> Add Task</span>
</div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-2 border-b border-gray-100 hover:bg-gray-50 text-[14px] text-gray-700 group/row">
<div className="flex items-center gap-3 pl-2">
<div className="w-4 flex-shrink-0 opacity-0 group-hover/row:opacity-100 cursor-grab text-gray-300"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="relative w-4 h-4 rounded-full border-2 border-emerald-600 flex-shrink-0 cursor-pointer hover:border-emerald-700 overflow-hidden bg-emerald-600">
<div className="absolute inset-0 flex items-center justify-center"><i className="w-2.5 h-2.5 text-white" data-lucide="check"></i></div>
</div>
<span>Hold launch meeting with client</span>
</div>
<div className="flex items-center"><div className="w-6 h-6 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="user-plus"></i></div></div>
<div className="flex items-center gap-2 text-gray-500"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2 text-red-600 font-medium"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> April 23, 2025</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-gray-400" data-lucide="signal-low"></i> Low</div>
<div className="flex items-center gap-2"><div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center text-[9px] text-white font-bold">C</div> Odie</div>
<div className="flex justify-end pr-2 opacity-0 group-hover/row:opacity-100"><i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i></div>
</div>

<div className="grid grid-cols-[minmax(300px,1fr)_120px_140px_140px_100px_120px_40px] items-center py-1.5 pl-9 text-gray-400 hover:text-gray-600 cursor-pointer text-sm">
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="plus"></i> Add Task</div>
</div>
</div>
</div>
</main>


    </>
  );
}
