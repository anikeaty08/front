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
      

<div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
<div className="tracking-tighter font-medium text-zinc-100 text-lg">CODE<span className="text-indigo-500">/</span>PATH</div>
<button @click="sidebarOpen = !sidebarOpen" className="text-zinc-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex h-screen w-full">

<aside :className="sidebarOpen ? 'translate-x-0' : '-translate-x-full'" className="fixed inset-y-0 left-0 z-40 w-64 bg-[#0a0a0a] border-r border-white/5 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col justify-between">
<div>

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="tracking-tighter font-medium text-zinc-100 text-lg flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white text-xs font-mono font-bold">C</div>
                        CODEPATH
                    </div>
</div>

<nav className="p-4 space-y-1">
<p className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-2">Platform</p>
<a :className="currentTab === 'learning' ? 'bg-white/5 text-zinc-100' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'" @click.prevent="currentTab = 'learning'" className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all" href="#">
<iconify-icon :className="currentTab === 'learning' ? 'text-indigo-400' : ''" className="text-zinc-500 group-hover:text-zinc-300" icon="solar:code-square-linear" width="20"></iconify-icon>
                        My Learning
                    </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:folder-with-files-linear" width="20"></iconify-icon>
                        Projects
                    </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                        Community
                    </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:cup-star-linear" width="20"></iconify-icon>
                        Challenges
                    </a>
<p className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-6">Settings</p>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:user-circle-linear" width="20"></iconify-icon>
                        Profile
                    </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:settings-linear" width="20"></iconify-icon>
                        Preferences
                    </a>
</nav>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition cursor-pointer">
<img alt="Avatar" className="w-8 h-8 rounded-full ring-1 ring-white/10" src="https://ui-avatars.com/api/?name=Alex+Dev&amp;background=27272a&amp;color=a1a1aa"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Alex Dev</span>
<span className="text-xs text-zinc-500">Pro Member</span>
</div>
</div>
</div>
</aside>

<main @click="sidebarOpen = false" className="flex-1 h-screen overflow-y-auto relative">
<div className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-20"></div>
<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-8 lg:py-12">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 mt-10 lg:mt-0">
<div>
<h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Welcome back, Alex</h1>
<p className="text-zinc-500 mt-1 text-sm">You're on a 12-day coding streak. Keep it up!</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-white/10 rounded-full">
<iconify-icon className="text-orange-500" icon="solar:fire-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">12 Days</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-white/10 rounded-full">
<iconify-icon className="text-yellow-500" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">4,250 XP</span>
</div>
</div>
</header>

<section className="mb-12">
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
<iconify-icon className="rotate-12 translate-x-10 -translate-y-10 text-indigo-500" icon="solar:programming-linear" width="200"></iconify-icon>
</div>
<div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between relative z-10">
<div className="flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">In Progress</span>
<span className="text-xs text-zinc-500 font-mono">React Hooks Deep Dive</span>
</div>
<h2 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">Advanced State Management</h2>
<p className="text-sm text-zinc-400 max-w-lg mb-6 leading-relaxed">Master the use of useReducer and useContext to manage complex application state without external libraries.</p>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                                        Continue Lesson
                                    </button>
<div className="flex flex-col gap-1 w-32">
<div className="flex justify-between text-[10px] text-zinc-500">
<span>Progress</span>
<span>65%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[65%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="hidden md:block w-80 bg-[#0d0d0d] rounded-lg border border-white/5 p-4 font-mono text-xs shadow-2xl">
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="space-y-1 text-zinc-500">
<div className="flex"><span className="w-4 text-zinc-700 select-none">1</span><span className="text-purple-400 ml-2">const</span> <span className="text-blue-400 ml-1">Store</span> = <span className="text-yellow-300">create</span>((<span className="text-orange-300">set</span>) =&gt; ({</div>
<div className="flex"><span className="w-4 text-zinc-700 select-none">2</span><span className="ml-6 text-zinc-300">bears:</span> <span className="text-green-400">0</span>,</div>
<div className="flex"><span className="w-4 text-zinc-700 select-none">3</span><span className="ml-6 text-blue-300">increase</span>: () =&gt; <span className="text-yellow-300">set</span>((<span className="text-orange-300">state</span>) =&gt; ({</div>
<div className="flex"><span className="w-4 text-zinc-700 select-none">4</span><span className="ml-10 text-zinc-300">bears:</span> state.bears + <span className="text-green-400">1</span></div>
<div className="flex"><span className="w-4 text-zinc-700 select-none">5</span><span className="ml-6">}))</span></div>
<div className="flex"><span className="w-4 text-zinc-700 select-none">6</span>}))</div>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white tracking-tight">Recommended Paths</h3>
<a className="text-xs text-zinc-500 hover:text-white transition" href="#">View all</a>
</div>

<div className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/5 bg-[#0f0f10] hover:border-zinc-700 transition duration-300 hover:shadow-lg hover:shadow-black/20">
<div className="w-full sm:w-32 h-32 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-[1.02] transition">
<iconify-icon className="text-blue-400" icon="solar:server-square-linear" width="40"></iconify-icon>
</div>
<div className="flex flex-col justify-between flex-1 py-1">
<div>
<div className="flex justify-between items-start">
<h4 className="text-base font-medium text-zinc-200 group-hover:text-white transition">Fullstack Modern Web</h4>
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer transition" icon="solar:bookmark-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Learn Next.js, TypeScript, Tailwind CSS and Supabase by building a real-world e-commerce application.</p>
</div>
<div className="flex items-center gap-4 mt-4">
<div className="flex items-center gap-1 text-xs text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                        24h
                                    </div>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
                                        Intermediate
                                    </div>
<div className="flex -space-x-2 ml-auto">
<div className="w-6 h-6 rounded-full border border-[#0f0f10] bg-zinc-800 text-[8px] flex items-center justify-center text-zinc-400">+4k</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/5 bg-[#0f0f10] hover:border-zinc-700 transition duration-300 hover:shadow-lg hover:shadow-black/20">
<div className="w-full sm:w-32 h-32 rounded-lg bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/10 flex items-center justify-center shrink-0 group-hover:scale-[1.02] transition">
<iconify-icon className="text-emerald-400" icon="solar:database-linear" width="40"></iconify-icon>
</div>
<div className="flex flex-col justify-between flex-1 py-1">
<div>
<div className="flex justify-between items-start">
<h4 className="text-base font-medium text-zinc-200 group-hover:text-white transition">Data Structures &amp; Algo</h4>
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer transition" icon="solar:bookmark-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Master the fundamentals of computer science. Prepare for technical interviews with Python.</p>
</div>
<div className="flex items-center gap-4 mt-4">
<div className="flex items-center gap-1 text-xs text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                        32h
                                    </div>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
                                        Advanced
                                    </div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-5 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Daily Challenge</h3>
<span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full">Hard</span>
</div>
<p className="text-xs text-zinc-400 mb-4">Reverse a linked list without using recursion.</p>

<div className="space-y-2 mb-4">
<label className="flex items-start gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group">
<div className="relative flex items-center mt-0.5">
<input className="peer h-4 w-4 appearance-none rounded border border-zinc-600 bg-transparent checked:border-indigo-500 checked:bg-indigo-500 transition" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition">Understand Node structure</span>
</label>
<label className="flex items-start gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group">
<div className="relative flex items-center mt-0.5">
<input className="peer h-4 w-4 appearance-none rounded border border-zinc-600 bg-transparent checked:border-indigo-500 checked:bg-indigo-500 transition" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition">Implement iterative pointer reversal</span>
</label>
</div>
<button className="w-full py-2 rounded-lg border border-zinc-700 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition">Start Challenge</button>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-[#0f0f10]">
<h3 className="text-sm font-medium text-white mb-4">Skill Progress</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-1">
<span>Frontend</span>
<span>82%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full">
<div className="h-full bg-indigo-500 w-[82%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-1">
<span>Backend</span>
<span>45%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full">
<div className="h-full bg-cyan-500 w-[45%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-1">
<span>DevOps</span>
<span>15%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full">
<div className="h-full bg-pink-500 w-[15%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-[#0f0f10]">
<h3 className="text-sm font-medium text-white mb-4">Daily Goal</h3>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Practice Minutes</span>
<span className="text-xs font-mono text-white">45m</span>
</div>
<input className="w-full" max="120" min="15" type="range" value="45"/>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-zinc-400">Reminders</span>

<button :className="on ? 'bg-indigo-600' : 'bg-zinc-700'" @click="on = !on" className="w-9 h-5 rounded-full bg-indigo-600 relative transition-colors duration-200 focus:outline-none" x-data="{ on: true }">
<span :className="on ? 'translate-x-4' : 'translate-x-0'" className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-200"></span>
</button>
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
