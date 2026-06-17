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



tailwind.config = {
theme: {
extend: {
colors: {
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
primary: {
DEFAULT: "hsl(var(--primary))",
foreground: "hsl(var(--primary-foreground))",
},
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 1px 3px 0 rgba(0,0,0,0.04)',
'float': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
}
}
}
}

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
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div className="flex flex-col h-full">

<div className="h-16 flex items-center px-5 border-b border-slate-100">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">TaskFlow</span>
</div>
</div>

<div className="p-3 space-y-1 overflow-y-auto flex-1">
<div className="px-3 py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Workspace</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-50 rounded-md border border-slate-100 shadow-sm group" href="#">
<iconify-icon className="text-slate-600 group-hover:text-slate-900" icon="solar:layers-minimalistic-linear"></iconify-icon>
                    All Tasks
                    <span className="ml-auto text-xs font-medium text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">24</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:calendar-linear"></iconify-icon>
                    Today
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:alarm-linear"></iconify-icon>
                    Upcoming
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                    Completed
                </a>
<div className="mt-6 mb-2 px-3 flex items-center justify-between">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tags</span>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-md transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Design System
                    </a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-md transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Q3 Roadmap
                    </a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-md transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        Marketing
                    </a>
</div>
</div>

<div className="p-3 border-t border-slate-100">
<button className="flex items-center gap-3 w-full px-2 py-2 text-left hover:bg-slate-50 rounded-md transition-colors group">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200 shadow-sm" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=fff"/>
<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 truncate">Alex Morrison</p>
<p className="text-xs text-slate-500 truncate">Product Lead</p>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white/50">

<header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">

<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-700">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-base font-semibold text-slate-900 tracking-tight">All Tasks</h1>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex items-center gap-1 bg-slate-50 p-0.5 rounded-lg border border-slate-200">
<button className="px-2 py-1 rounded-md bg-white shadow-sm border border-slate-200 text-slate-900 text-xs font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:kanban-linear" width="14"></iconify-icon>
                        Board
                    </button>
<button className="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors">
<iconify-icon icon="solar:list-linear" width="14"></iconify-icon>
                        List
                    </button>
</div>
</div>


<div className="flex items-center gap-3">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="h-9 pl-9 pr-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 w-64 transition-all" placeholder="Search tasks..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
</div>
</div>
<button className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="h-4 w-px bg-slate-200 mx-1"></div>
<button className="h-9 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm flex items-center gap-2 transition-all active:scale-95">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    New Task
                </button>
</div>
</header>

<div className="h-12 border-b border-slate-200 bg-white flex items-center px-6 gap-3 overflow-x-auto no-scrollbar">
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 border-dashed rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all">
<iconify-icon className="text-slate-400" icon="solar:filter-linear"></iconify-icon>
                Filter
            </button>
<div className="h-4 w-px bg-slate-200"></div>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-transparent rounded-full hover:bg-slate-100 transition-colors">
                Assignee: <span className="text-slate-900">Me</span>
<iconify-icon className="text-slate-400 hover:text-slate-600" icon="solar:close-circle-linear"></iconify-icon>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:tag-linear"></iconify-icon>
                Tags
            </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:sort-vertical-linear"></iconify-icon>
                Sort by: Priority
            </button>
</div>

<div className="flex-1 overflow-x-auto overflow-y-hidden p-6">
<div className="flex h-full gap-6 min-w-max pb-2">

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<h3 className="text-sm font-medium text-slate-700">To Do</h3>
<span className="text-xs text-slate-400 font-medium">3</span>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-3">

<div className="group bg-white p-4 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 hover:shadow-subtle cursor-pointer transition-all relative">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400">APP-120</span>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
<button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded">
<iconify-icon icon="solar:pen-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<h4 className="leading-snug text-sm font-medium text-slate-900 mb-3 ml-2">sIntegrate Stripe payment gateway</h4>
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                    Dev
                                </span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:flag-bold" width="14"></iconify-icon>
<span className="text-xs text-slate-500">Oct 24</span>
</div>
<img className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=fff"/>
</div>
</div>

<div className="group bg-white p-4 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 hover:shadow-subtle cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400">APP-124</span>
<div className="opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded">
<iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900 leading-snug mb-3">Update onboarding email templates</h4>
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                                    Design
                                </span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                    Marketing
                                </span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:flag-linear" width="14"></iconify-icon>
<span className="text-xs text-slate-500">Oct 28</span>
</div>
<div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[8px] font-bold border border-white">JD</div>
</div>
</div>

<div className="group bg-white p-4 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 hover:shadow-subtle cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400">APP-129</span>
</div>
<h4 className="text-sm font-medium text-slate-900 leading-snug mb-3">Fix mobile navigation z-index issue</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:flag-linear" width="14"></iconify-icon>
<span className="text-xs text-slate-500">No date</span>
</div>
<img className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=fff"/>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
<h3 className="text-sm font-medium text-slate-700">In Progress</h3>
<span className="text-xs text-slate-400 font-medium">2</span>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-3">

<div className="group bg-white p-4 rounded-xl border-l-2 border-l-blue-500 border-y border-r border-slate-200 shadow-card hover:shadow-subtle cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400">APP-118</span>
<div className="opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded">
<iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900 leading-snug mb-3">Refactor authentication hook</h4>
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                    Dev
                                </span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:flag-bold" width="14"></iconify-icon>
<span className="text-xs text-red-600 font-medium">Tomorrow</span>
</div>
<img className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=fff"/>
</div>
</div>

<div className="group bg-white p-4 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 hover:shadow-subtle cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400">APP-110</span>
</div>
<h4 className="text-sm font-medium text-slate-900 leading-snug mb-3">User dashboard analytics widget</h4>
<div className="w-full bg-slate-100 h-1.5 rounded-full mb-3 overflow-hidden">
<div className="bg-blue-500 h-full rounded-full" style={{width: '65%'}}></div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:flag-bold" width="14"></iconify-icon>
<span className="text-xs text-slate-500">Nov 02</span>
</div>
<div className="flex -space-x-1.5">
<img className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://ui-avatars.com/api/?name=Sarah+K&amp;background=6366f1&amp;color=fff"/>
<img className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=fff"/>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full opacity-80">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<h3 className="text-sm font-medium text-slate-700">Blocked</h3>
<span className="text-xs text-slate-400 font-medium">1</span>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-3">
<div className="group bg-white p-4 rounded-xl border border-slate-200 shadow-card hover:shadow-subtle cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400">APP-102</span>
</div>
<h4 className="text-sm font-medium text-slate-900 leading-snug mb-3">API Rate Limiting logic</h4>
<div className="px-2 py-1.5 bg-red-50 rounded text-xs text-red-700 mb-3 flex items-start gap-1.5 leading-tight">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
                                Waiting on Backend Team schema update
                            </div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:flag-linear" width="14"></iconify-icon>
<span className="text-xs text-slate-500">Oct 20</span>
</div>
<div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[8px] font-bold border border-white">JD</div>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<h3 className="text-sm font-medium text-slate-700">Completed</h3>
<span className="text-xs text-slate-400 font-medium">12</span>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-3">
<div className="group bg-slate-50/50 p-4 rounded-xl border border-slate-200/60 shadow-none hover:bg-white hover:border-slate-200 hover:shadow-subtle cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400 line-through">APP-98</span>
<div className="text-emerald-500">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
<h4 className="text-sm font-medium text-slate-500 leading-snug mb-3 line-through">Setup CI/CD pipeline</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">Oct 15</span>
</div>
<img className="w-5 h-5 rounded-full border border-white shadow-sm grayscale opacity-50" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=fff"/>
</div>
</div>
<div className="group bg-slate-50/50 p-4 rounded-xl border border-slate-200/60 shadow-none hover:bg-white hover:border-slate-200 hover:shadow-subtle cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold text-slate-400 line-through">APP-95</span>
<div className="text-emerald-500">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
<h4 className="text-sm font-medium text-slate-500 leading-snug mb-3 line-through">Initial project scaffolding</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-100">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">Oct 10</span>
</div>
<img className="w-5 h-5 rounded-full border border-white shadow-sm grayscale opacity-50" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=fff"/>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full opacity-50 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-4 px-1 invisible">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<h3 className="text-sm font-medium text-slate-700">New</h3>
</div>
<button className="h-10 w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 text-slate-500 hover:border-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Add Status</span>
</button>
</div>
</div>
</div>
</main>




    </>
  );
}
