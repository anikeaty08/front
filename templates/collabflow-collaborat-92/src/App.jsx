import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 flex-shrink-0 bg-[#0e1116] border-r border-white/5 flex flex-col hidden md:flex">

<div className="h-20 flex items-center px-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/90 text-white shadow-lg shadow-indigo-500/20">
<i className="h-5 w-5" data-lucide="layout-grid" strokeWidth="2"></i>
</div>
<span className="text-base font-semibold tracking-tight text-white">CollabFlow</span>
</div>
</div>

<nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
<a className="group flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/5" href="#">
<i className="h-4 w-4 text-indigo-400" data-lucide="kanban-square"></i>
                Active Board
            </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="clock"></i>
                Recent
            </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="users"></i>
                Team Members
            </a>
<div className="pt-8">
<h3 className="px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-600 mb-2">Settings</h3>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="settings"></i>
                    Preferences
                </a>
</div>
</nav>

<div className="p-4 border-t border-white/5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="log-out"></i>
                Logout
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#090b10] overflow-hidden relative">

<div className="flex-1 overflow-x-auto overflow-y-hidden p-6 md:p-10 flex flex-col">

<header className="flex-shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#11141b] border border-white/5 rounded-2xl p-3 md:px-5 md:py-3 mb-10 shadow-xl shadow-black/20">

<div className="flex items-center gap-4">
<div className="h-10 w-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/10">
<i className="h-5 w-5" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<h1 className="text-white font-semibold text-base leading-none">To Do</h1>
<span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mt-1.5">Board</span>
</div>
</div>

<div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">

<div className="relative flex-1 md:flex-none group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" data-lucide="search"></i>
<input className="w-full md:w-64 bg-[#1a1e26] border border-transparent rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:bg-[#151820] focus:ring-1 focus:ring-indigo-500/20 transition-all" placeholder="Search..." type="text"/>
</div>

<button className="relative text-zinc-400 hover:text-white transition-colors">
<i className="h-5 w-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-[#11141b]"></span>
</button>

<div className="flex items-center gap-3 pl-2 border-l border-white/5">
<span className="hidden md:block text-sm font-medium text-zinc-300">Demo User</span>
<div className="h-9 w-9 rounded-lg bg-zinc-200 text-zinc-900 flex items-center justify-center font-bold text-xs relative ring-2 ring-white/5">
                            DU
                            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-emerald-500 border-2 border-[#11141b] rounded-full"></span>
</div>
</div>
</div>
</header>

<div className="flex-1 flex items-start gap-6 overflow-x-auto pb-4 scrollbar-hide">

<div className="w-80 flex-shrink-0 bg-[#11141b] rounded-2xl p-3 flex flex-col gap-3 border border-white/5 h-auto max-h-full">

<div className="flex items-center justify-between px-2 pt-2 pb-1">
<div className="flex items-center gap-3">
<h2 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">To Do</h2>
<span className="bg-[#1f2430] text-zinc-400 text-[10px] font-bold h-5 min-w-[20px] px-1.5 flex items-center justify-center rounded-full">1</span>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<i className="h-5 w-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex flex-col gap-2 min-h-0 overflow-y-auto">

<div className="group bg-[#161a22] hover:bg-[#1a1e28] p-4 rounded-xl border border-white/5 hover:border-white/10 shadow-sm transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
<i className="h-3 w-3" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm font-medium text-zinc-200 group-hover:text-white">Running</span>
</div>
</div>
</div>

<button className="mt-auto w-full py-2.5 flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-lg transition-all text-sm font-medium">
<i className="h-4 w-4" data-lucide="plus" strokeWidth="2"></i>
                        Add Task
                    </button>
</div>

<div className="w-80 flex-shrink-0 bg-[#11141b] rounded-2xl p-3 flex flex-col gap-3 border border-white/5 h-fit">

<div className="flex items-center justify-between px-2 pt-2 pb-1">
<div className="flex items-center gap-3">
<h2 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">In Progress</h2>
<span className="bg-[#1f2430] text-zinc-400 text-[10px] font-bold h-5 min-w-[20px] px-1.5 flex items-center justify-center rounded-full">0</span>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<i className="h-5 w-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>

<div className="h-32 flex items-center justify-center rounded-xl border border-dashed border-white/5">
<span className="text-xs text-zinc-700 font-medium">No tasks</span>
</div>

<button className="w-full py-2.5 flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-lg transition-all text-sm font-medium">
<i className="h-4 w-4" data-lucide="plus" strokeWidth="2"></i>
                        Add Task
                    </button>
</div>

<button className="w-80 h-14 flex-shrink-0 border border-dashed border-zinc-800 hover:border-zinc-600 hover:bg-white/5 rounded-2xl flex items-center justify-center gap-2 text-zinc-400 hover:text-zinc-200 font-medium transition-all group">
<i className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" data-lucide="plus" strokeWidth="2"></i>
                    Add New Column
                </button>
</div>
</div>
</main>


    </>
  );
}
