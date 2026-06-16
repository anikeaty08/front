import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm hidden md:hidden" id="mobile-menu-overlay"></div>

<aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full hidden md:flex shrink-0 z-30 transition-all duration-300">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2.5 group cursor-pointer">
<div className="text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">WorkenAI</span>
</div>
</div>

<div className="p-4 pb-2">
<button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-lg shadow-sm transition-all active:scale-[0.98] group">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">New Project</span>
</button>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-4 space-y-8">

<div className="space-y-1">
<div className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Workspace</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-slate-50 text-blue-600 rounded-md ring-1 ring-slate-200/50" href="#">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Ongoing Projects
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Compare Models
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Team Management
                </a>
</div>

<div className="space-y-1">
<div className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Intelligence</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Observability
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Guardrails
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:library-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Prompt Library
                </a>
</div>
</nav>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group">
<div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 font-medium text-xs shadow-sm">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Jane Doe</p>
<p className="text-xs text-slate-500 truncate">jane@worken.ai</p>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:settings-linear" width="20"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-slate-50/50">

<header className="h-16 glass-effect border-b border-slate-200/80 sticky top-0 z-20 flex items-center justify-between px-4 sm:px-8">
<div className="flex items-center gap-4">

<button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<nav className="hidden sm:flex items-center text-sm font-medium text-slate-500">
<span className="hover:text-slate-800 cursor-pointer transition-colors">Workspace</span>
<iconify-icon className="mx-2 text-slate-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">Projects</span>
</nav>
</div>

<div className="flex items-center gap-3">
<div className="relative hidden sm:block group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="pl-10 pr-4 py-1.5 text-sm bg-white border border-slate-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Search projects..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden lg:inline-flex items-center h-5 px-1.5 text-[10px] font-medium text-slate-400 bg-slate-50 border border-slate-200 rounded">⌘K</kbd>
</div>
</div>
<button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Ongoing Projects</h1>
<p className="text-slate-500 text-sm mt-1">Manage and monitor your AI development workflows.</p>
</div>

<div className="sm:hidden w-full">
<input className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg" placeholder="Search..." type="text"/>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/60">

<div className="flex bg-slate-100 p-1 rounded-lg self-start sm:self-auto">
<button className="px-4 py-1.5 text-sm font-medium text-slate-800 bg-white shadow-sm rounded-md transition-all">All Projects</button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 rounded-md transition-all">Personal</button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 rounded-md transition-all">Team</button>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="hidden sm:inline">Sort by:</span>
<button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition-colors">
                                Last Activity
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
<div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block"></div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                            Filter
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all sm:hidden">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                            New
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer flex flex-col h-60">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-slate-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Q3 Financial Analysis</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Analyzing revenue streams against Q2 projections using updated context data.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
                                    GPT-4 Turbo
                                </span>
</div>
<div className="text-xs text-slate-400 font-medium">2h ago</div>
</div>

<div className="absolute bottom-5 right-16 flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-emerald-100 border border-white text-[10px] flex items-center justify-center text-emerald-700">AK</div>
<div className="w-6 h-6 rounded-full bg-amber-100 border border-white text-[10px] flex items-center justify-center text-amber-700">M</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer flex flex-col h-60">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
<iconify-icon icon="solar:code-circle-linear" width="22"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-slate-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Auth Service Refactor</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Migrating legacy authentication flows to OAuth 2.0 standards with strict guardrails.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon>
                                    Claude 3.5
                                </span>
</div>
<div className="text-xs text-slate-400 font-medium">5h ago</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer flex flex-col h-60">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100">
<iconify-icon icon="solar:pen-new-square-linear" width="22"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-slate-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Launch Campaign Copy</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Generating variations for social media posts targeting Series A founders.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
                                    Llama 3
                                </span>
</div>
<div className="text-xs text-slate-400 font-medium">1d ago</div>
</div>

<div className="absolute bottom-5 right-5 flex">
<div className="w-6 h-6 rounded-full bg-slate-100 border border-white text-[10px] flex items-center justify-center text-slate-600">JD</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer flex flex-col h-60 opacity-80 hover:opacity-100">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
<iconify-icon icon="solar:database-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
<span className="text-xs text-slate-400 font-medium">Paused</span>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Customer Dataset Cleaning</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Removing duplicates and normalizing address fields for the CRM migration.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
                                    GPT-3.5
                                </span>
</div>
<div className="text-xs text-slate-400 font-medium">3d ago</div>
</div>
</div>

<button className="group relative bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer flex flex-col h-60 items-center justify-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon className="text-slate-400 group-hover:text-blue-600" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-700 mb-1">Create New Project</h3>
<p className="text-xs text-slate-400 max-w-[200px]">Start a new thread, compare models, or analyze documents.</p>
</button>
</div>

<div className="pt-8 border-t border-slate-200/60">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Recent Model Comparisons</h2>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                            View all
                            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

<div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-2 mb-2">
<div className="flex -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-700 shadow-sm z-10">G4</div>
<div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-700 shadow-sm">C3</div>
</div>
<span className="text-xs font-medium text-slate-500">vs. Baseline</span>
</div>
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Legal Contract Summary</h4>
<div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> 0.4s faster</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:dollar-minimalistic-linear" width="12"></iconify-icon> $0.02 saved</span>
</div>
</div>

<div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-2 mb-2">
<div className="flex -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-700 shadow-sm z-10">L3</div>
<div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-700 shadow-sm">M</div>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Python Code Gen Accuracy</h4>
<div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1 text-emerald-600"><iconify-icon icon="solar:graph-up-linear" width="12"></iconify-icon> 12% better</span>
</div>
</div>

<div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-400">Benchmark Test</span>
</div>
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Customer Sentiment Analysis</h4>
<div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon> Yesterday</span>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-12 py-6 text-center text-xs text-slate-400 border-t border-slate-200/50">
<p>© 2024 WorkenAI Inc. All rights reserved.</p>
</footer>
</div>
</main>

    </>
  );
}
