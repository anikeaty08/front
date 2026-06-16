import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons with 1.5 stroke width
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    function setMenuState(el, open) {
      el.setAttribute('data-open', open ? 'true' : 'false');
      el.style.opacity = open ? '1' : '0';
      el.style.transform = open ? 'scale(1)' : 'scale(0.98)';
      el.style.pointerEvents = open ? 'auto' : 'none';
      if (!el.style.transition) el.style.transition = 'opacity .12s ease, transform .12s ease';
      if (!el.style.transformOrigin) el.style.transformOrigin = 'top right';
    }

    // Initialize menus to closed state
    document.querySelectorAll('.menu').forEach(m => setMenuState(m, m.getAttribute('data-open') === 'true'));

    // Sort menu
    const sortBtn = document.getElementById('sortBtn');
    const sortMenu = document.getElementById('sortMenu');
    sortBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenuState(sortMenu, sortMenu.getAttribute('data-open') !== 'true');
    });

    // Dream dropdown
    const dreamBtn = document.getElementById('dreamBtn');
    const dreamMenu = document.getElementById('dreamMenu');
    dreamBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenuState(dreamMenu, dreamMenu.getAttribute('data-open') !== 'true');
    });

    // Deploy dropdowns
    document.querySelectorAll('.deployBtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-menu');
        const menu = document.getElementById(id);
        const open = menu.getAttribute('data-open') === 'true';
        document.querySelectorAll('.menu').forEach(m => setMenuState(m, false));
        setMenuState(menu, !open);
      });
    });

    // Global click to close
    window.addEventListener('click', () => {
      document.querySelectorAll('.menu').forEach(m => setMenuState(m, false));
    });

    // Prevent menu closing when clicking inside
    document.querySelectorAll('.menu').forEach(m => m.addEventListener('click', e => e.stopPropagation()));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">

<aside className="border-r border-neutral-800 bg-neutral-900/60 backdrop-blur sticky top-0 h-screen hidden md:flex flex-col">
<div className="px-5 py-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500"></div>
<div>
<div className="text-[15px] font-semibold tracking-tight">Techman Robot</div>
<div className="text-[12px] text-neutral-400">QCT Physical AI Platform</div>
</div>
</div>
<div className="px-4">
<button className="w-full flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800" id="wsBtn">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="package"></i>
<span className="font-medium">Xplore I</span>
</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
</div>
<nav className="mt-4 flex-1 px-2 space-y-1 text-[14px]">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 bg-white/5 text-neutral-100" href="#">
<i className="h-4 w-4 text-indigo-400" data-lucide="sparkles"></i>
<span className="font-medium">Skill</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-300" data-lucide="database"></i>
<span className="font-medium">Dataset</span>
</a>
<div className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-wide text-neutral-500">Validation</div>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-300" data-lucide="box"></i>
<span className="font-medium">USD Content</span>
</a>
<div className="px-3 pt-3 pb-1 text-[11px] uppercase tracking-wide text-neutral-500">Advanced Training</div>
<div className="relative">
<button className="w-full flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/5 text-neutral-300" id="dreamBtn">
<span className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-400" data-lucide="laptop-2"></i>
<span className="font-medium">Dream Model</span>
</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="menu absolute left-3 right-3 mt-1 rounded-lg border border-neutral-800 bg-neutral-900/90 shadow-lg shadow-black/40 p-1" data-open="false" id="dreamMenu" style={{opacity: '0', transform: 'scale(.98)', pointerEvents: 'none', transformOrigin: 'top right', transition: 'opacity .12s ease, transform .12s ease'}}>
<a className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm text-neutral-200" href="#">
<i className="h-4 w-4 text-neutral-400" data-lucide="wand-2"></i> Generate
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 text-sm text-neutral-200" href="#">
<i className="h-4 w-4 text-neutral-400" data-lucide="settings"></i> Configure
            </a>
</div>
</div>
</nav>
<div className="mt-auto p-4 border-t border-neutral-800">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-[13px] font-medium truncate">Alex Chen</div>
<div className="text-[12px] text-neutral-400 truncate">alex.chen@qct.ai</div>
</div>
<button className="ml-auto p-2 rounded-md hover:bg-white/5">
<i className="h-4 w-4 text-neutral-400" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<main className="flex flex-col">

<header className="sticky top-0 z-30 backdrop-blur bg-neutral-900/60 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="md:hidden p-2 rounded-md hover:bg-white/5">
<i className="h-5 w-5 text-neutral-300" data-lucide="menu"></i>
</button>
<div className="hidden md:flex items-center gap-2 text-neutral-400">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
<span className="text-sm">Back</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative hidden sm:block">
<i className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-sm w-64 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50" placeholder="Search skills..." type="text"/>
</div>
<button className="p-2 rounded-md hover:bg-white/5">
<i className="h-5 w-5 text-neutral-400" data-lucide="bell"></i>
</button>
<img alt="" className="h-8 w-8 rounded-full object-cover sm:hidden" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<section className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-[24px] sm:text-[26px] font-semibold tracking-tight">Skill</h1>
<div className="mt-2 flex items-center gap-3 text-sm">
<div className="flex items-center gap-1.5">
<span className="text-neutral-400">Filter:</span>
<button className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[12px] font-medium hover:bg-neutral-800">
<i className="h-3.5 w-3.5 text-neutral-400" data-lucide="filter"></i>
                    Category
                  </button>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 text-[11px]">
                    QC1
                    <i className="h-3 w-3" data-lucide="x"></i>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 text-[11px]">
                    ST7
                    <i className="h-3 w-3" data-lucide="x"></i>
</span>
</div>
<button className="hidden sm:inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] text-neutral-300 hover:bg-white/5">
<i className="h-3.5 w-3.5" data-lucide="sliders-horizontal"></i>
                  All Filters
                </button>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<button className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800" id="sortBtn">
<i className="h-4 w-4 text-neutral-400" data-lucide="arrow-up-down"></i>
<span className="font-medium">Sort: Newest</span>
</button>
<div className="menu absolute right-0 mt-2 w-44 rounded-lg border border-neutral-800 bg-neutral-900/90 shadow-lg shadow-black/40 p-1" data-open="false" id="sortMenu" style={{opacity: '0', transform: 'scale(.98)', pointerEvents: 'none', transformOrigin: 'top right', transition: 'opacity .12s ease, transform .12s ease'}}>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">Newest</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">Oldest</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">A → Z</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">Z → A</button>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90">
<i className="h-4 w-4" data-lucide="plus"></i>
                New Skill
              </button>
</div>
</div>

<div className="mt-5 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="bg-neutral-900 text-neutral-400">
<tr className="text-left">
<th className="px-5 py-3 font-medium">Name</th>
<th className="px-5 py-3 font-medium">Category</th>
<th className="px-5 py-3 font-medium">Skill Level</th>
<th className="px-5 py-3 font-medium">Created Date</th>
<th className="px-5 py-3 font-medium">Progress</th>
<th className="px-5 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800">

<tr className="hover:bg-white/5">
<td className="px-5 py-4">
<div className="flex items-center gap-2 min-w-[240px]">
<i className="h-4 w-4 text-neutral-500" data-lucide="check-circle-2"></i>
<div className="truncate font-medium">QC1_ST7_Assemble Robot_TM20_01</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-indigo-500/10 text-indigo-300 px-2 py-0.5 text-[11px] border border-indigo-500/20">QC1</span>
<span className="inline-flex items-center rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-[11px] border border-emerald-500/20">ST7</span>
</div>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center rounded-md bg-neutral-800 text-neutral-300 px-2 py-0.5 text-[12px]">—</span>
</td>
<td className="px-5 py-4 text-neutral-400">Jun 14, 2025</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<span className="text-neutral-300">Training… 75%</span>
<div className="h-2 w-28 rounded-full bg-neutral-800">
<div className="h-2 w-[75%] rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600"></div>
</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 justify-end">
<button className="rounded-md border border-neutral-800 px-3 py-1.5 hover:bg-neutral-800 text-sm font-medium">Evaluate</button>
<div className="relative">
<button className="deployBtn inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800" data-menu="deploy-1">
                            Deploy
                            <i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="menu absolute right-0 mt-2 w-40 rounded-lg border border-neutral-800 bg-neutral-900/90 shadow-lg shadow-black/40 p-1" data-open="false" id="deploy-1" style={{opacity: '0', transform: 'scale(.98)', pointerEvents: 'none', transformOrigin: 'top right', transition: 'opacity .12s ease, transform .12s ease'}}>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-neutral-400" data-lucide="beaker"></i> Staging
                            </button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-indigo-400" data-lucide="rocket"></i> Production
                            </button>
</div>
</div>
</div>
</td>
</tr>

<tr className="hover:bg-white/5">
<td className="px-5 py-4">
<div className="flex items-center gap-2 min-w-[240px]">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle-2"></i>
<div className="truncate font-medium">QC1_ST7_Assemble Server_EGX741-1U_02</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-indigo-500/10 text-indigo-300 px-2 py-0.5 text-[11px] border border-indigo-500/20">QC1</span>
<span className="inline-flex items-center rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-[11px] border border-emerald-500/20">ST7</span>
</div>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-[12px] border border-emerald-500/20">Skilled</span>
</td>
<td className="px-5 py-4 text-neutral-400">Jun 14, 2025</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 text-emerald-400">
<i className="h-4 w-4" data-lucide="check"></i>
                        Completed
                      </div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 justify-end">
<button className="rounded-md border border-neutral-800 px-3 py-1.5 hover:bg-neutral-800 text-sm font-medium">Evaluate</button>
<div className="relative">
<button className="deployBtn inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800" data-menu="deploy-2">
                            Deploy
                            <i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="menu absolute right-0 mt-2 w-40 rounded-lg border border-neutral-800 bg-neutral-900/90 shadow-lg shadow-black/40 p-1" data-open="false" id="deploy-2" style={{opacity: '0', transform: 'scale(.98)', pointerEvents: 'none', transformOrigin: 'top right', transition: 'opacity .12s ease, transform .12s ease'}}>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-neutral-400" data-lucide="beaker"></i> Staging
                            </button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-indigo-400" data-lucide="rocket"></i> Production
                            </button>
</div>
</div>
</div>
</td>
</tr>

<tr className="hover:bg-white/5">
<td className="px-5 py-4">
<div className="flex items-center gap-2 min-w-[240px]">
<i className="h-4 w-4 text-amber-400" data-lucide="check-circle-2"></i>
<div className="truncate font-medium">QC1_ST7_Assemble Server_EGX741-1U_01</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-indigo-500/10 text-indigo-300 px-2 py-0.5 text-[11px] border border-indigo-500/20">QC1</span>
<span className="inline-flex items-center rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-[11px] border border-emerald-500/20">ST7</span>
</div>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center rounded-md bg-amber-500/10 text-amber-300 px-2 py-0.5 text-[12px] border border-amber-500/20">Working</span>
</td>
<td className="px-5 py-4 text-neutral-400">Jun 13, 2025</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 text-emerald-400">
<i className="h-4 w-4" data-lucide="check"></i>
                        Completed
                      </div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 justify-end">
<button className="rounded-md border border-neutral-800 px-3 py-1.5 hover:bg-neutral-800 text-sm font-medium">Evaluate</button>
<div className="relative">
<button className="deployBtn inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800" data-menu="deploy-3">
                            Deploy
                            <i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="menu absolute right-0 mt-2 w-40 rounded-lg border border-neutral-800 bg-neutral-900/90 shadow-lg shadow-black/40 p-1" data-open="false" id="deploy-3" style={{opacity: '0', transform: 'scale(.98)', pointerEvents: 'none', transformOrigin: 'top right', transition: 'opacity .12s ease, transform .12s ease'}}>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-neutral-400" data-lucide="beaker"></i> Staging
                            </button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-indigo-400" data-lucide="rocket"></i> Production
                            </button>
</div>
</div>
</div>
</td>
</tr>

<tr className="hover:bg-white/5">
<td className="px-5 py-4">
<div className="flex items-center gap-2 min-w-[240px]">
<i className="h-4 w-4 text-rose-400" data-lucide="check-circle-2"></i>
<div className="truncate font-medium">QC1_ST7_Fold_Carton_01</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-indigo-500/10 text-indigo-300 px-2 py-0.5 text-[11px] border border-indigo-500/20">QC1</span>
<span className="inline-flex items-center rounded-md bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-[11px] border border-emerald-500/20">ST7</span>
</div>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center rounded-md bg-rose-500/10 text-rose-300 px-2 py-0.5 text-[12px] border border-rose-500/20">Learning</span>
</td>
<td className="px-5 py-4 text-neutral-400">Jun 13, 2025</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 text-emerald-400">
<i className="h-4 w-4" data-lucide="check"></i>
                        Completed
                      </div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 justify-end">
<button className="rounded-md border border-neutral-800 px-3 py-1.5 hover:bg-neutral-800 text-sm font-medium">Evaluate</button>
<div className="relative">
<button className="deployBtn inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800" data-menu="deploy-4">
                            Deploy
                            <i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="menu absolute right-0 mt-2 w-40 rounded-lg border border-neutral-800 bg-neutral-900/90 shadow-lg shadow-black/40 p-1" data-open="false" id="deploy-4" style={{opacity: '0', transform: 'scale(.98)', pointerEvents: 'none', transformOrigin: 'top right', transition: 'opacity .12s ease, transform .12s ease'}}>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-neutral-400" data-lucide="beaker"></i> Staging
                            </button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-white/5 text-neutral-200">
<i className="inline h-4 w-4 mr-2 text-indigo-400" data-lucide="rocket"></i> Production
                            </button>
</div>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-5 py-3 border-t border-neutral-800 text-sm text-neutral-400">
<div>4 results</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded-md hover:bg-white/5">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<span className="text-neutral-300">1</span>
<button className="px-2 py-1 rounded-md hover:bg-white/5">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="hidden mt-10 rounded-xl border border-dashed border-neutral-700 p-8 text-center">
<div className="mx-auto h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center">
<i className="h-5 w-5 text-neutral-400" data-lucide="sparkles"></i>
</div>
<h2 className="mt-4 text-[22px] font-semibold tracking-tight">No skills yet</h2>
<p className="mt-2 text-neutral-400 text-sm">Create a new skill to start training and deploying to your robot fleet.</p>
<button className="mt-4 inline-flex items-center gap-2 rounded-md bg-neutral-100 text-neutral-900 px-3.5 py-2 text-sm font-semibold hover:bg-neutral-200">
<i className="h-4 w-4" data-lucide="plus"></i> New Skill
            </button>
</div>
</div>
</section>

<footer className="border-t border-neutral-800 bg-neutral-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm text-neutral-500">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span>Edge Robotics Cluster</span>
</div>
<div>© 2025 QCT</div>
</div>
</footer>
</main>
</div>





    </>
  );
}
