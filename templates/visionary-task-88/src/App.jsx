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



        // Micro-interaction: Task Completion Logic
        function toggleTask(checkbox) {
            const row = checkbox.closest('.task-row');
            
            // Add bounce animation to checkbox
            checkbox.nextElementSibling.style.animation = 'checkBounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            setTimeout(() => {
                checkbox.nextElementSibling.style.animation = '';
            }, 300);

            if (checkbox.checked) {
                row.classList.add('completed');
                row.classList.add('opacity-50');
            } else {
                row.classList.remove('completed');
                row.classList.remove('opacity-50');
            }
        }

        // Initialize with entrance animation staggered
        document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.task-row');
            items.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.animation = `fadeIn 0.5s ease forwards ${index * 50 + 400}ms`;
            });
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
      

<aside className="w-full md:w-64 bg-[#FAFAFA] border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col justify-between z-20 flex-shrink-0 animate-enter">
<div className="p-4 md:p-6">

<div className="flex items-center gap-3 mb-8 cursor-pointer group">
<div className="w-8 h-8 bg-zinc-900 text-white rounded-lg flex items-center justify-center text-xs font-medium tracking-tighter shadow-lg shadow-zinc-200 group-hover:scale-105 transition-transform duration-300">
                    V/B
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-zinc-900">Workspace</span>
<span className="text-xs text-zinc-500 font-normal">Visionary &amp; BSource</span>
</div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-all group active:scale-95" href="#">
<iconify-icon className="text-lg text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:inbox-linear"></iconify-icon>
                    Inbox
                    <span className="ml-auto text-[10px] text-zinc-400 font-medium">4</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-900 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] border border-zinc-200/50 rounded-md font-medium group active:scale-95" href="#">
<iconify-icon className="text-lg" icon="solar:clipboard-list-linear"></iconify-icon>
                    All Tasks
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-all group active:scale-95" href="#">
<iconify-icon className="text-lg text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:calendar-linear"></iconify-icon>
                    Calendar
                </a>
</nav>

<div className="mt-8">
<h3 className="px-3 text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">Companies</h3>
<div className="space-y-1">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-600 rounded-md hover:bg-zinc-100 transition-colors group">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_0_1px_rgba(99,102,241,0.2)]"></span>
                        Visionary
                        <iconify-icon className="ml-auto opacity-0 group-hover:opacity-100 text-zinc-400" icon="solar:menu-dots-linear"></iconify-icon>
</button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-600 rounded-md hover:bg-zinc-100 transition-colors group">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_1px_rgba(16,185,129,0.2)]"></span>
                        BSource
                        <iconify-icon className="ml-auto opacity-0 group-hover:opacity-100 text-zinc-400" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-zinc-100 cursor-pointer transition-colors">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-400 border border-white shadow-sm"></div>
<span className="text-xs font-medium text-zinc-700">Alex M.</span>
<iconify-icon className="ml-auto text-zinc-400 text-lg hover:rotate-90 transition-transform duration-500" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-white md:rounded-l-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.02)] z-10 animate-enter delay-100">

<header className="h-16 border-b border-zinc-100 flex items-center justify-between px-6 md:px-10 flex-shrink-0 bg-white/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-zinc-400 text-sm">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">All Projects</span>
</div>
<span className="text-zinc-200">/</span>
<h1 className="text-sm font-medium text-zinc-900 tracking-tight">Active Sprint</h1>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center bg-zinc-50 p-1 rounded-lg border border-zinc-200/60">
<button className="px-3 py-1 bg-white border border-zinc-200/50 rounded-md shadow-sm text-xs font-medium text-zinc-900 flex items-center gap-2 transition-all hover:border-zinc-300">
<iconify-icon icon="solar:list-linear"></iconify-icon> List
                    </button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-2 transition-colors rounded-md hover:bg-zinc-100">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Board
                    </button>
</div>
<div className="h-4 w-[1px] bg-zinc-200 mx-1"></div>
<button className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-base" icon="solar:filter-linear"></iconify-icon>
                    Filter
                </button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-50 text-zinc-900 transition-colors border border-transparent hover:border-zinc-200">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:px-10 md:py-8" id="taskListContainer">

<div className="mb-10 animate-enter delay-200">
<div className="flex items-center gap-2 mb-4 group cursor-pointer">
<div className="p-1 rounded bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-800 transition-colors">
<iconify-icon className="text-sm" icon="solar:gallery-round-linear"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-zinc-900">To Do</h2>
<span className="text-xs text-zinc-400 font-normal ml-1">3</span>
<div className="flex-1 h-[1px] bg-zinc-100 ml-4"></div>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer" icon="solar:add-linear"></iconify-icon>
</div>
<div className="space-y-[1px]">

<div className="group relative flex items-center gap-4 py-3 px-2 -mx-2 hover:bg-zinc-50/80 rounded-lg transition-colors task-row">
<label className="relative flex items-center justify-center cursor-pointer group/check p-1">
<input className="task-checkbox peer sr-only" onclick="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all duration-200 flex items-center justify-center group-hover/check:border-zinc-400">
<iconify-icon className="text-white text-[10px] opacity-0 transform scale-50 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-900 font-normal truncate task-title">Website entrance animation</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] uppercase tracking-wide text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100/50 font-medium">Visionary</span>
<span className="text-[10px] text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:branching-paths-down-linear"></iconify-icon> Design
                                </span>
</div>
</div>
<div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[8px] font-medium text-zinc-600">JP</div>
</div>
<span className="text-xs text-zinc-400 font-medium whitespace-nowrap">Today</span>
</div>
</div>

<div className="group relative flex items-center gap-4 py-3 px-2 -mx-2 hover:bg-zinc-50/80 rounded-lg transition-colors task-row">
<label className="relative flex items-center justify-center cursor-pointer group/check p-1">
<input className="task-checkbox peer sr-only" onclick="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all duration-200 flex items-center justify-center group-hover/check:border-zinc-400">
<iconify-icon className="text-white text-[10px] opacity-0 transform scale-50 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-900 font-normal truncate task-title">Safety page content review</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] uppercase tracking-wide text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100/50 font-medium">Visionary</span>
</div>
</div>
<div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<span className="text-xs text-zinc-400 font-medium whitespace-nowrap">Tomorrow</span>
</div>
</div>

<div className="group relative flex items-center gap-4 py-3 px-2 -mx-2 hover:bg-zinc-50/80 rounded-lg transition-colors task-row">
<label className="relative flex items-center justify-center cursor-pointer group/check p-1">
<input className="task-checkbox peer sr-only" onclick="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all duration-200 flex items-center justify-center group-hover/check:border-zinc-400">
<iconify-icon className="text-white text-[10px] opacity-0 transform scale-50 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-900 font-normal truncate task-title">Finalize all homepage pins</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] uppercase tracking-wide text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50 font-medium">BSource</span>
<span className="text-[10px] text-orange-500 flex items-center gap-1 font-medium bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100/50">
                                    High Priority
                                </span>
</div>
</div>
<div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-800 text-white flex items-center justify-center text-[8px] font-medium">AM</div>
<span className="text-xs text-orange-500 font-medium whitespace-nowrap">Due 2 days</span>
</div>
</div>
</div>
</div>

<div className="mb-10 animate-enter delay-300">
<div className="flex items-center gap-2 mb-4 group cursor-pointer">
<div className="p-1 rounded bg-blue-50 text-blue-500 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-zinc-900">In Progress</h2>
<span className="text-xs text-zinc-400 font-normal ml-1">3</span>
<div className="flex-1 h-[1px] bg-zinc-100 ml-4"></div>
</div>
<div className="space-y-[1px]">

<div className="group relative flex items-center gap-4 py-3 px-2 -mx-2 hover:bg-zinc-50/80 rounded-lg transition-colors task-row border-l-2 border-transparent hover:border-blue-400/50">
<label className="relative flex items-center justify-center cursor-pointer group/check p-1">
<input className="task-checkbox peer sr-only" onclick="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all duration-200 flex items-center justify-center group-hover/check:border-zinc-400">
<iconify-icon className="text-white text-[10px] opacity-0 transform scale-50 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-900 font-normal truncate task-title">Finish the About page</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] uppercase tracking-wide text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50 font-medium">BSource</span>
<div className="h-1 w-16 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4"></div>
</div>
</div>
</div>
<div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-medium">KD</div>
<span className="text-xs text-zinc-400 font-medium whitespace-nowrap">Oct 24</span>
</div>
</div>

<div className="group relative flex items-center gap-4 py-3 px-2 -mx-2 hover:bg-zinc-50/80 rounded-lg transition-colors task-row">
<label className="relative flex items-center justify-center cursor-pointer group/check p-1">
<input className="task-checkbox peer sr-only" onclick="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all duration-200 flex items-center justify-center group-hover/check:border-zinc-400">
<iconify-icon className="text-white text-[10px] opacity-0 transform scale-50 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-900 font-normal truncate task-title">Add all projects to portfolio</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] uppercase tracking-wide text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100/50 font-medium">Visionary</span>
</div>
</div>
<div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<span className="text-xs text-zinc-400 font-medium whitespace-nowrap">Oct 25</span>
</div>
</div>

<div className="group relative flex items-center gap-4 py-3 px-2 -mx-2 hover:bg-zinc-50/80 rounded-lg transition-colors task-row">
<label className="relative flex items-center justify-center cursor-pointer group/check p-1">
<input className="task-checkbox peer sr-only" onclick="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all duration-200 flex items-center justify-center group-hover/check:border-zinc-400">
<iconify-icon className="text-white text-[10px] opacity-0 transform scale-50 transition-all duration-200" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-900 font-normal truncate task-title">Complete the Community forms</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] uppercase tracking-wide text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50 font-medium">BSource</span>
</div>
</div>
<div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[8px] font-medium text-zinc-600">JP</div>
<span className="text-xs text-zinc-400 font-medium whitespace-nowrap">Oct 26</span>
</div>
</div>
</div>
</div>

<button className="w-full py-3 px-4 rounded-lg border border-dashed border-zinc-300 text-sm text-zinc-400 font-normal hover:bg-zinc-50 hover:text-zinc-600 hover:border-zinc-400 transition-all flex items-center justify-center gap-2 group active:scale-[0.99]">
<iconify-icon className="text-lg group-hover:rotate-90 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
                Create new task
            </button>
</div>

<button className="md:hidden absolute bottom-6 right-6 w-12 h-12 bg-zinc-900 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-30">
<iconify-icon className="text-2xl" icon="solar:add-linear"></iconify-icon>
</button>
</main>


    </>
  );
}
