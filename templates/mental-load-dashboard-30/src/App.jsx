import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('closed')) {
                menu.classList.remove('closed');
                menu.classList.add('open');
            } else {
                menu.classList.remove('open');
                menu.classList.add('closed');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden closed w-full h-full" id="mobile-menu">
<div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900">
<div className="h-2 w-2 rounded-full bg-white"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Load</span>
</div>
<button className="rounded-md p-2 text-slate-500 hover:bg-slate-50" onclick="toggleMenu()">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<nav className="flex-1 space-y-1 p-4">
<a className="flex items-center gap-3 rounded-md bg-slate-50 px-3 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200" href="#">
<i className="h-5 w-5 text-slate-900" data-lucide="home"></i>
                Home
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="brain-circuit"></i>
                Mental Inventory
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="users"></i>
                Household &amp; Team
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="bar-chart-2"></i>
                Analytics
            </a>
</nav>
<div className="border-t border-slate-100 p-4">
<button className="flex w-full items-center gap-3 rounded-md p-2 hover:bg-slate-50 text-left transition-colors">
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">S</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Sarah Miller</p>
<p className="text-xs text-slate-400">sarah@example.com</p>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
</button>
</div>
</div>

<aside className="hidden w-64 flex-col border-r border-slate-200/60 bg-white px-4 py-6 md:flex">
<div className="mb-8 flex items-center gap-2 px-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900">
<div className="h-2 w-2 rounded-full bg-white"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Load</span>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 rounded-md bg-slate-50 px-3 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-200" href="#">
<i className="h-4 w-4 text-slate-900" data-lucide="home"></i>
                Home
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="brain-circuit"></i>
                Mental Inventory
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="users"></i>
                Household &amp; Team
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="bar-chart-2"></i>
                Analytics
            </a>
</nav>
<div className="mt-auto">
<button className="mt-4 flex w-full items-center gap-2 rounded-md border border-slate-200 p-2 hover:bg-slate-50 text-left transition-colors">
<div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">S</div>
<div className="flex-1 overflow-hidden">
<p className="truncate text-xs font-medium text-slate-900">Sarah Miller</p>
<p className="truncate text-[10px] text-slate-400">sarah@example.com</p>
</div>
<i className="h-3 w-3 text-slate-400" data-lucide="settings-2"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200/60 bg-white/50 px-4 md:px-8 backdrop-blur-sm z-10">
<div className="flex items-center gap-3">

<button className="md:hidden -ml-2 rounded-md p-2 text-slate-500 hover:bg-slate-100" onclick="toggleMenu()">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>

<div className="flex items-center gap-2 md:hidden">
<div className="flex h-5 w-5 items-center justify-center rounded bg-slate-900">
<div className="h-1.5 w-1.5 rounded-full bg-white"></div>
</div>
</div>
<span className="text-xs font-medium text-slate-400">October 24, 2023</span>
</div>
<div className="flex items-center gap-2 md:gap-3">
<button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<i className="h-4 w-4" data-lucide="help-circle"></i>
</button>
<div className="h-4 w-px bg-slate-200 mx-1"></div>
<button className="relative rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<i className="h-4 w-4" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 pb-24 md:pb-8">
<div className="mx-auto max-w-4xl space-y-8 md:space-y-12">

<div className="animate-fade-in space-y-2 pt-2">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Good morning, Sarah.</h1>
<p className="text-base md:text-lg text-slate-500 font-light max-w-2xl">
                        Your mental load is invisible, but it doesn't have to be heavy.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 animate-fade-in delay-100">

<button className="card-hover group flex flex-col items-start text-left rounded-xl border border-slate-200 bg-white p-5 md:p-6 hover:border-indigo-200 transition-all h-full">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
<i className="h-5 w-5" data-lucide="mic"></i>
</div>
<h3 className="text-base font-semibold text-slate-900">Brain Dump</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">
                            Offload your mental sticky notes. We'll sort them.
                        </p>
<div className="mt-auto pt-6 flex items-center text-xs font-medium text-indigo-600 group-hover:translate-x-1 transition-transform">
                            Start capture <i className="ml-1 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</button>

<button className="card-hover group flex flex-col items-start text-left rounded-xl border border-slate-200 bg-white p-5 md:p-6 hover:border-amber-200 transition-all h-full">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform duration-300">
<i className="h-5 w-5" data-lucide="battery-charging"></i>
</div>
<h3 className="text-base font-semibold text-slate-900">Energy Check-in</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">
                            Log your capacity. We'll adjust recommendations.
                        </p>
<div className="mt-auto pt-6 flex items-center text-xs font-medium text-amber-600 group-hover:translate-x-1 transition-transform">
                            Log status <i className="ml-1 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</button>

<button className="card-hover group flex flex-col items-start text-left rounded-xl border border-slate-200 bg-white p-5 md:p-6 hover:border-emerald-200 transition-all h-full">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
<i className="h-5 w-5" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-base font-semibold text-slate-900">View Distribution</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">
                            See the breakdown of your household load.
                        </p>
<div className="mt-auto pt-6 flex items-center text-xs font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                            Open dashboard <i className="ml-1 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</button>
</div>

<div className="animate-fade-in delay-200">
<div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
<div className="space-y-4 w-full md:max-w-md">
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Daily Insight</h3>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                "The mental load isn't just about doing the tasks—it's the anticipation, the monitoring, and the decision making. Tracking the invisible work is the first step to sharing it."
                            </p>
<div className="flex items-center gap-2 pt-2">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="h-6 w-6 rounded-full bg-slate-300 border-2 border-white"></div>
</div>
<span className="text-xs text-slate-400">Used by 12k+ partners today</span>
</div>
</div>

<div className="relative h-28 w-full md:h-32 md:w-64 shrink-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="rounded-full bg-indigo-50 p-3 ring-1 ring-indigo-100">
<i className="h-6 w-6 text-indigo-500" data-lucide="waves"></i>
</div>
<span className="text-xs font-medium text-slate-400">Waiting for input...</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200/60 animate-fade-in delay-200 pb-8 md:pb-0">
<div className="flex items-start gap-3 rounded-lg p-3 hover:bg-white hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-slate-100">
<i className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" data-lucide="sparkles"></i>
<div>
<h4 className="text-sm font-medium text-slate-900">Did you know?</h4>
<p className="text-xs text-slate-500 mt-1">Anticipating a task takes 20% of the energy of actually doing it.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg p-3 hover:bg-white hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-slate-100">
<i className="h-4 w-4 mt-0.5 text-indigo-500 shrink-0" data-lucide="share-2"></i>
<div>
<h4 className="text-sm font-medium text-slate-900">Invite your partner</h4>
<p className="text-xs text-slate-500 mt-1">Sync calendars to automatically detect shared visible load.</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
