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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Simple View Switching Logic
        function switchView(viewName) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.remove('active');
            });

            // Remove active state from nav
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.classList.remove('active');
            });

            // Show selected view
            const selectedView = document.getElementById('view-' + viewName);
            if(selectedView) {
                selectedView.classList.add('active');
            }

            // Set active nav
            const selectedNav = document.getElementById('nav-' + viewName);
            if(selectedNav) {
                selectedNav.classList.add('active');
            }

            // Update Breadcrumbs
            const breadcrumbContainer = document.getElementById('header-breadcrumbs');
            
            // Map view names to nice titles
            const titles = {
                'overview': 'Overview',
                'team': 'My Team',
                'matrix': 'Skill Matrix',
                'personas': 'Personas',
                'learning': 'Learning Path',
                'certifications': 'Certifications',
                'reviews': 'Reviews'
            };

            const parent = ['personas', 'learning', 'certifications', 'reviews'].includes(viewName) ? 'Growth' : 'Platform';
            const title = titles[viewName] || 'Dashboard';
            
            breadcrumbContainer.innerHTML = `
                <span class="text-zinc-500">${parent}</span>
                <iconify-icon icon="lucide:chevron-right" width="14" class="text-zinc-700"></iconify-icon>
                <span class="text-white font-medium">${title}</span>
            `;
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
      

<aside className="w-64 border-r flex flex-col justify-between backdrop-blur-xl shrink-0 transition-all duration-300 border-black/5 bg-zinc-50/50">
<div className="">

<div className="h-16 flex items-center px-6 border-b border-black/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs tracking-tighter bg-black text-white">LTS</div>
<span className="text-sm font-semibold tracking-tight text-black">Lumovy HRM</span>
</div>
</div>

<nav className="p-3 space-y-1">
<div className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-zinc-400">Platform</div>
<button className="nav-item active w-full group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all text-left border border-transparent hover:bg-black/5 hover:text-black" id="nav-overview" onclick="switchView('overview')">
<iconify-icon className="text-zinc-500 transition-colors" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                    Overview
                </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all text-left border border-transparent hover:bg-black/5 hover:text-black" id="nav-team" onclick="switchView('team')">
<iconify-icon className="text-zinc-500 transition-colors" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                    My Team
                </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all text-left border border-transparent hover:bg-black/5 hover:text-black" id="nav-matrix" onclick="switchView('matrix')">
<iconify-icon className="text-zinc-500 transition-colors" icon="lucide:target" strokeWidth="1.5" width="18"></iconify-icon>
                    Skill Matrix
                </button>
<div className="mt-6 px-3 py-2 text-xs font-medium uppercase tracking-wider text-zinc-400">Growth</div>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all text-left border border-transparent hover:bg-black/5 hover:text-black" id="nav-personas" onclick="switchView('personas')">
<iconify-icon className="text-zinc-500 transition-colors" icon="lucide:user-cog" strokeWidth="1.5" width="18"></iconify-icon>
                    Personas
                </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all text-left border border-transparent hover:bg-black/5 hover:text-black" id="nav-learning" onclick="switchView('learning')">
<iconify-icon className="text-zinc-500 transition-colors" icon="lucide:book-open" strokeWidth="1.5" width="18"></iconify-icon>
                    Learning Path
                </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all text-left border border-transparent hover:bg-black/5 hover:text-black" id="nav-certifications" onclick="switchView('certifications')">
<iconify-icon className="text-zinc-500 transition-colors" icon="lucide:award" strokeWidth="1.5" width="18"></iconify-icon>
                    Certifications
                </button>
<button className="nav-item w-full group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all text-left border border-transparent hover:bg-black/5 hover:text-black" id="nav-reviews" onclick="switchView('reviews')">
<iconify-icon className="text-zinc-500 transition-colors" icon="lucide:file-text" strokeWidth="1.5" width="18"></iconify-icon>
                    Reviews
                </button>
</nav>
</div>

<div className="p-4 border-t border-black/5">
<button className="flex items-center gap-3 w-full p-2 rounded-md transition-colors text-left hover:bg-black/5">
<img alt="Profile" className="w-8 h-8 rounded-full border border-black/10" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-black">Alex Morgan</p>
<p className="text-xs text-zinc-500 truncate">Engineering Lead</p>
</div>
<iconify-icon className="text-zinc-400" icon="lucide:chevrons-up-down"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-zinc-50">

<header className="flex sticky shrink-0 bg-zinc-50/80 h-16 z-20 border-black/5 border-b pr-8 pl-8 top-0 backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-4 text-sm" id="header-breadcrumbs">

<span className="text-zinc-500">Platform</span>
<iconify-icon className="text-zinc-300" icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="font-medium text-black">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" icon="lucide:search" width="16"></iconify-icon>
<input className="border rounded-full pl-9 pr-4 py-1.5 text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-zinc-900 transition-all w-64 bg-zinc-100/50 border-black/5 text-black" placeholder="Search..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="text-[10px] border rounded px-1.5 py-0.5 text-zinc-400 border-zinc-200">⌘ K</span>
</div>
</div>
<button className="relative w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-black/5 text-zinc-600 hover:text-black">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-zinc-50"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth">
<div className="max-w-6xl mx-auto pb-12">

<div className="view-section active fade-in space-y-8" id="view-overview">

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-8 border rounded-xl p-6 relative overflow-hidden group bg-zinc-100/20 border-black/5">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="flex gap-6">
<div className="relative">
<img className="w-20 h-20 rounded-xl border shadow-lg object-cover border-black/10" src="https://i.pravatar.cc/150?u=2"/>
<div className="absolute -bottom-2 -right-2 rounded-lg p-1 border bg-zinc-50 border-black/10">
<div className="w-6 h-6 bg-indigo-500/20 rounded flex items-center justify-center">
<iconify-icon className="text-indigo-600" icon="lucide:code-2" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="">
<h1 className="text-2xl font-semibold tracking-tight mb-1 text-black">Adil Khurshed</h1>
<p className="text-zinc-500 text-sm mb-4">Principal Software Engineer • .Net and Cloud</p>
<div className="flex gap-3">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium bg-black/5 border-black/5 text-zinc-700">
<iconify-icon className="text-zinc-500" icon="lucide:map-pin" width="12"></iconify-icon>
                                                San Francisco, CA
                                            </div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium bg-black/5 border-black/5 text-zinc-700">
<iconify-icon className="text-zinc-500" icon="lucide:clock" width="12"></iconify-icon>
                                                12y 1m Tenure
                                            </div>
</div>
</div>
</div>
<div className="text-right">
<div className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-1">Current Level</div>
<div className="text-xl font-semibold tracking-tight text-black">L2 </div>
</div>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<div><span className="text-sm font-medium text-black">Progression to Staff Engineer (L4)</span></div>
<span className="text-sm font-medium text-indigo-600">72%</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-zinc-200">
<div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 w-[72%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<p className="text-xs text-zinc-500 mt-2">Estimated promotion window: <span className="text-zinc-700">Q3 2024</span></p>
</div>
</div>

<div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4">
<div className="border rounded-xl p-5 flex flex-col justify-center bg-zinc-100/20 border-black/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Skill Score</span>
<iconify-icon className="text-emerald-500" icon="lucide:trending-up" width="16"></iconify-icon>
</div>
<div className="text-3xl font-semibold tracking-tight text-black">8.4<span className="text-lg font-normal text-zinc-400">/10</span></div>
<p className="text-xs text-zinc-500 mt-1">Top 15% of Senior Engineers</p>
</div>
<div className="border rounded-xl p-5 flex flex-col justify-center bg-zinc-100/20 border-black/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Mentorship</span>
<iconify-icon className="text-blue-500" icon="lucide:users-2" width="16"></iconify-icon>
</div>
<div className="text-3xl font-semibold tracking-tight text-black">2</div>
<p className="text-xs text-zinc-500 mt-1">Active mentees assigned</p>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-8">

<div className="col-span-12 lg:col-span-7 space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-black">Career Path Analysis</h2>
<button className="text-xs font-medium text-zinc-500 transition-colors border-b border-dashed hover:text-black border-zinc-300 hover:border-black" onclick="switchView('personas')">View Full Ladder</button>
</div>
<div className="relative border rounded-xl p-1 bg-zinc-100/20 border-black/5">
<div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent to-transparent hidden md:block via-zinc-200"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-full p-1.5 z-10 hidden md:block bg-zinc-50 border-zinc-200">
<iconify-icon className="text-zinc-500" icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-5 rounded-lg border bg-zinc-100/40 border-black/5">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs font-bold uppercase tracking-wider text-zinc-600">Current Persona</span>
</div>
<h3 className="text-base font-semibold mb-1 text-black">Principal Software Engineer</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 min-h-[40px]">Responsible for core feature development, code reviews, and mentoring junior devs.</p>
</div>

<div className="p-5 rounded-lg bg-gradient-to-br border border-indigo-500/20 relative overflow-hidden from-zinc-100/40 to-indigo-50/10">
<div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 blur-xl"></div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Target Persona</span>
</div>
<h3 className="text-base font-semibold mb-1 text-black">Senior Architect</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 min-h-[40px]">Focuses on cross-team architecture, technical strategy, and solving complex scalability issues.</p>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium tracking-tight mb-4 text-black">Gap Analysis &amp; Actions</h2>
<div className="space-y-3">
<label className="custom-checkbox flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer group border-black/5 bg-zinc-100/20 hover:bg-zinc-100/40">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors group-hover:border-zinc-500 border-zinc-300 bg-zinc-100">
<iconify-icon className="hidden" icon="lucide:check" width="12"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-zinc-700">Lead a major architectural migration</span>
<span className="text-[10px] uppercase font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Achieved</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Migrate Core Service to .NET 8</p>
</div>
</label>
<label className="custom-checkbox flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer group border-black/5 bg-zinc-100/20 hover:bg-zinc-100/40">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors group-hover:border-zinc-500 border-zinc-300 bg-zinc-100">
<iconify-icon className="hidden" icon="lucide:check" width="12"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-zinc-700">Cloud Architecture Certification</span>
<span className="text-[10px] uppercase font-bold text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Skill Gap</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Azure Solutions Architect Expert certification.</p>
</div>
</label>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 space-y-6">
<div className="border rounded-xl p-6 h-full bg-zinc-100/20 border-black/5">
<h2 className="text-lg font-medium tracking-tight mb-6 flex items-center gap-2 text-black">
<iconify-icon className="text-zinc-500" icon="lucide:radar"></iconify-icon>
                                    Skill Metric Breakdown
                                </h2><div className="mb-6">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-sm font-medium text-black">Team Leadership and delivery</div>
</div>
<div className="text-right">
<span className="text-sm font-bold text-black">4.8</span><span className="text-xs text-zinc-400">/5.0</span>
</div>
</div>
<div className="relative h-2 w-full rounded-full overflow-hidden bg-zinc-200">
<div className="absolute h-full bg-emerald-500 w-[96%] rounded-full z-10"></div>
<div className="absolute top-0 bottom-0 w-0.5 bg-indigo-500 left-[80%] z-20"></div>
</div>
</div><div className="mb-6">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-sm font-medium text-black">DevOps &amp; CI/CD</div>
</div>
<div className="text-right">
<span className="text-sm font-bold text-black">4</span><span className="text-xs text-zinc-400">/5.0</span>
</div>
</div>
<div className="relative h-2 w-full rounded-full overflow-hidden bg-zinc-200">
<div className="absolute h-full bg-emerald-500 w-[96%] rounded-full z-10"></div>
<div className="absolute top-0 bottom-0 w-0.5 bg-indigo-500 left-[80%] z-20"></div>
</div>
</div>
<div className="mb-6">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-sm font-medium text-black">Azure Architect</div>
</div>
<div className="text-right">
<span className="text-sm font-bold text-black">4</span><span className="text-xs text-zinc-400">/5.0</span>
</div>
</div>
<div className="relative h-2 w-full rounded-full overflow-hidden bg-zinc-200">
<div className="absolute h-full bg-emerald-500 w-[96%] rounded-full z-10"></div>
<div className="absolute top-0 bottom-0 w-0.5 bg-indigo-500 left-[80%] z-20"></div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-sm font-medium text-black">React / Frontend</div>
</div>
<div className="text-right">
<span className="text-sm font-bold text-black">4.8</span><span className="text-xs text-zinc-400">/5.0</span>
</div>
</div><div className="relative h-2 w-full rounded-full overflow-hidden bg-zinc-200">
<div className="absolute h-full bg-zinc-500 w-[84%] rounded-full z-10"></div>
<div className="absolute top-0 bottom-0 w-0.5 bg-indigo-500 left-[90%] z-20"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section fade-in" id="view-team">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-black">Engineering Team</h1>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm transition-colors bg-zinc-100 border-black/5 text-zinc-600 hover:text-black">
<iconify-icon icon="lucide:filter" width="16"></iconify-icon>
                                Filter
                            </button>
<button className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-zinc-800">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                                Add Member
                            </button>
</div>
</div>
<div className="border rounded-xl overflow-hidden bg-zinc-100/20 border-black/5">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b text-xs text-zinc-500 uppercase tracking-wider border-black/5">
<th className="px-6 py-4 font-medium">Employee</th>
<th className="px-6 py-4 font-medium">Role &amp; Level</th>
<th className="px-6 py-4 font-medium">Skill Score</th>
<th className="px-6 py-4 font-medium">Last Review</th>
<th className="px-6 py-4 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y text-sm divide-black/5">

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full border object-cover bg-zinc-200 border-black/5" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<div className="font-medium group-hover:text-indigo-400 transition-colors text-black">Alex Morgan</div>
<div className="text-xs text-zinc-500">alex@nexus.com</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-zinc-700">Senior Engineer</div>
<div className="text-xs text-zinc-500 mt-0.5">Level 3 • Full Stack</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="font-medium text-black">8.4</span>
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-zinc-200">
<div className="h-full bg-emerald-500 w-[84%]"></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-zinc-500">Oct 24, 2023</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Active</span>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full border object-cover bg-zinc-200 border-black/5" src="https://i.pravatar.cc/150?u=2"/>
<div>
<div className="font-medium group-hover:text-indigo-400 transition-colors text-black">Sarah Chen</div>
<div className="text-xs text-zinc-500">sarah@nexus.com</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-zinc-700">Product Designer</div>
<div className="text-xs text-zinc-500 mt-0.5">Level 4 • UX/UI</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="font-medium text-black">9.1</span>
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-zinc-200">
<div className="h-full bg-indigo-500 w-[91%]"></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-zinc-500">Nov 12, 2023</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Active</span>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full border object-cover bg-zinc-200 border-black/5" src="https://i.pravatar.cc/150?u=3"/>
<div>
<div className="font-medium group-hover:text-indigo-400 transition-colors text-black">Michael Ross</div>
<div className="text-xs text-zinc-500">mike@nexus.com</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-zinc-700">Junior Engineer</div>
<div className="text-xs text-zinc-500 mt-0.5">Level 1 • Backend</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="font-medium text-black">6.2</span>
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-zinc-200">
<div className="h-full bg-amber-500 w-[62%]"></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-zinc-500">Sep 01, 2023</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border bg-zinc-200 text-zinc-600 border-black/10">On Leave</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section fade-in" id="view-matrix">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-black">Team Skill Matrix</h1>
<p className="text-sm text-zinc-500 mt-1">Assessment based on Q4 2023 performance reviews</p>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-zinc-200"></span> 0 - None</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-100"></span> 1-2 Beginner</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> 3-4 Advanced</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> 5 Expert</div>
</div>
</div>
<div className="border rounded-xl overflow-hidden p-1 bg-zinc-100/20 border-black/5">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="sticky left-0 z-10 backdrop-blur p-4 border-b border-r text-xs text-zinc-500 uppercase font-medium min-w-[200px] bg-zinc-100/90 border-black/5">Employee</th>
<th className="p-4 border-b text-xs text-zinc-500 uppercase font-medium text-center border-black/5 bg-zinc-100/50">React</th>
<th className="p-4 border-b text-xs text-zinc-500 uppercase font-medium text-center border-black/5 bg-zinc-100/50">Node.js</th>
<th className="p-4 border-b text-xs text-zinc-500 uppercase font-medium text-center border-black/5 bg-zinc-100/50">Python</th>
<th className="p-4 border-b text-xs text-zinc-500 uppercase font-medium text-center border-black/5 bg-zinc-100/50">AWS/Cloud</th>
<th className="p-4 border-b text-xs text-zinc-500 uppercase font-medium text-center border-black/5 bg-zinc-100/50">Design</th>
<th className="p-4 border-b text-xs text-zinc-500 uppercase font-medium text-center border-black/5 bg-zinc-100/50">Leadership</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="transition-colors hover:bg-black/5">
<td className="sticky left-0 z-10 backdrop-blur p-4 border-r border-b bg-zinc-100/80 border-black/5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-black/5" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="font-medium text-black">Alex Morgan</span>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
</tr>

<tr className="transition-colors hover:bg-black/5">
<td className="sticky left-0 z-10 backdrop-blur p-4 border-r border-b bg-zinc-100/80 border-black/5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-black/5" src="https://i.pravatar.cc/150?u=2"/>
<span className="font-medium text-black">Sarah Chen</span>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
</tr>

<tr className="transition-colors hover:bg-black/5">
<td className="sticky left-0 z-10 backdrop-blur p-4 border-r border-b bg-zinc-100/80 border-black/5">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-black/5" src="https://i.pravatar.cc/150?u=3"/>
<span className="font-medium text-black">Michael Ross</span>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
<td className="p-4 border-b text-center border-black/5">
<div className="flex justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-100"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div><div className="w-2 h-2 rounded-full bg-zinc-200"></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section fade-in" id="view-personas">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-black">Engineering Career Ladder</h1>
<p className="text-sm text-zinc-500 mt-1">Defined expectations and competencies for each role.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium rounded-md bg-black text-white">IC Track</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-md border bg-zinc-100 border-black/5 hover:bg-zinc-200 text-zinc-600">Management Track</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border rounded-xl p-6 group transition-all bg-zinc-100/20 border-black/5 hover:border-black/10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-bold text-zinc-500 uppercase tracking-wider border px-2 py-1 rounded border-black/10">L2</span>
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-black">Mid-Level Engineer</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Capable of delivering features with minimal guidance. Writes clean, testable code and participates in code reviews.</p>
<div className="space-y-3">
<div className="flex items-start gap-2 text-sm text-zinc-600">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="lucide:arrow-right-circle" width="14"></iconify-icon>
<span>Owns small to medium features end-to-end</span>
</div>
<div className="flex items-start gap-2 text-sm text-zinc-600">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-400" icon="lucide:arrow-right-circle" width="14"></iconify-icon>
<span>Debugs production issues independently</span>
</div>
</div>
</div>

<div className="border border-indigo-500/30 rounded-xl p-6 relative overflow-hidden ring-1 ring-indigo-500/30 bg-zinc-100/40">
<div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-bold uppercase tracking-wider border border-indigo-500/20 bg-indigo-500/10 px-2 py-1 rounded text-indigo-600">L3 • Current</span>
<iconify-icon className="text-indigo-600" icon="lucide:user" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-black">Senior Engineer</h3>
<p className="text-sm mb-6 leading-relaxed text-zinc-600">Technical leader for the team. Designs systems, mentors juniors, and drives best practices.</p>
<div className="space-y-3">
<div className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:check" width="14"></iconify-icon>
<span>System design ownership</span>
</div>
<div className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:check" width="14"></iconify-icon>
<span>Mentors 1-2 junior engineers</span>
</div>
<div className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:check" width="14"></iconify-icon>
<span>Drives incident resolution</span>
</div>
</div>
</div>

<div className="border rounded-xl p-6 group transition-all border-dashed bg-zinc-100/20 border-black/5 hover:border-black/10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-bold text-zinc-500 uppercase tracking-wider border px-2 py-1 rounded border-black/10">L4</span>
<iconify-icon className="group-hover:text-white transition-colors text-zinc-400" icon="lucide:target" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-black">Staff Engineer</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Solves complex cross-team technical challenges. Sets technical strategy and architecture standards.</p>
<div className="space-y-3">
<div className="flex items-start gap-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-300" icon="lucide:circle" width="14"></iconify-icon>
<span>Cross-team architectural influence</span>
</div>
<div className="flex items-start gap-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-300" icon="lucide:circle" width="14"></iconify-icon>
<span>Strategic technical planning</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section fade-in" id="view-learning">
<div className="text-center py-20">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border bg-zinc-100 border-black/5">
<iconify-icon className="text-zinc-500" icon="lucide:book-open" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-medium mb-2 text-black">Learning Path</h2>
<p className="text-zinc-500">Your personalized curriculum is currently being updated.</p>
</div>
</div>

<div className="view-section fade-in" id="view-certifications">
<h1 className="text-2xl font-semibold tracking-tight mb-6 text-black">Certifications</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-emerald-500/20 rounded-xl p-5 flex flex-col justify-between h-48 relative overflow-hidden bg-zinc-100/20">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
<div>
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-emerald-500" icon="lucide:cloud" width="24"></iconify-icon>
<span className="text-[10px] font-bold text-emerald-500 uppercase bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Active</span>
</div>
<h3 className="text-base font-medium text-black">AWS Certified Solutions Architect</h3>
<p className="text-xs text-zinc-500 mt-1">Validation Number: AWS-99212</p>
</div>
<div className="text-xs text-zinc-500">
                                Expires: <span className="text-zinc-700">Dec 2025</span>
</div>
</div>

<div className="border rounded-xl p-5 flex flex-col justify-between h-48 relative overflow-hidden group bg-zinc-100/20 border-black/5">
<div>
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-indigo-600" icon="lucide:shield" width="24"></iconify-icon>
<span className="text-[10px] font-bold uppercase bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 text-indigo-600">In Progress</span>
</div>
<h3 className="text-base font-medium text-black">CISSP Security Professional</h3>
<p className="text-xs text-zinc-500 mt-1">Advanced Security Architecture</p>
</div>
<div className="w-full">
<div className="flex justify-between text-xs mb-1 text-zinc-600">
<span>Course Progress</span>
<span>45%</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-zinc-200">
<div className="h-full bg-indigo-500 w-[45%] rounded-full"></div>
</div>
</div>
</div>

<div className="border border-dashed rounded-xl p-5 flex flex-col justify-center items-center h-48 text-center transition-colors cursor-pointer group bg-zinc-100/20 border-black/10 hover:bg-zinc-100/40">
<div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors bg-zinc-200">
<iconify-icon className="text-zinc-600" icon="lucide:plus" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-black">Browse Catalog</h3>
<p className="text-xs text-zinc-500 mt-1 px-4">Find new certifications aligned with your career path.</p>
</div>
</div>
</div>

<div className="view-section fade-in" id="view-reviews">
<h1 className="text-2xl font-semibold tracking-tight mb-8 text-black">Performance Reviews</h1>
<div className="relative border-l ml-3 space-y-8 border-black/10">

<div className="relative pl-8">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-500 outline outline-4 outline-zinc-50"></div>
<div className="border rounded-xl p-5 bg-zinc-100/20 border-black/5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium text-black">2023 Year End Review</h3>
<p className="text-xs text-zinc-500">Conducted on Dec 15, 2023 by Sarah Conner</p>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded border bg-black/5 border-black/5">
<iconify-icon className="text-amber-600" icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs font-bold text-black">Exceeds Expectations</span>
</div>
</div>
<p className="text-sm leading-relaxed mb-4 text-zinc-600">Alex has shown exceptional growth this year, particularly in driving the backend migration project. Technical skills are top-notch. Areas for improvement include delegating more effectively to junior team members.</p>
<button className="text-xs font-medium flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                                    Read Full Report <iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full outline outline-4 bg-zinc-300 outline-zinc-50"></div>
<div className="border rounded-xl p-5 opacity-75 hover:opacity-100 transition-opacity bg-zinc-100/20 border-black/5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium text-black">2023 Mid-Year Check-in</h3>
<p className="text-xs text-zinc-500">Conducted on Jun 10, 2023</p>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded border bg-black/5 border-black/5">
<span className="text-xs font-bold text-zinc-700">Meets Expectations</span>
</div>
</div>
<p className="text-sm leading-relaxed mb-4 text-zinc-600">Solid performance in Q1/Q2. Deliverables were on time. Focus for next half is improving documentation habits.</p>
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
