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
      
<div className="flex h-screen w-full relative">

<div className="absolute inset-0 pointer-events-none pcb-bg z-0"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-900 to-transparent opacity-50"></div>

<aside className="lg:w-64 flex flex-col bg-slate-950/80 w-20 h-full z-20 border-slate-800/60 border-r backdrop-blur-sm justify-between">
<div className="">

<div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-slate-800/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
<iconify-icon className="text-white text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<span className="hidden lg:block text-lg font-medium tracking-tighter text-white">NEXUS<span className="text-cyan-500">PCB</span></span>
</div>
</div>

<nav className="mt-8 px-4 space-y-2">
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-cyan-400" icon="solar:widget-2-linear"></iconify-icon>
<span className="hidden lg:block">Workbench</span>
</a>

<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-md transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] group" href="#">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:library-linear"></iconify-icon>
<span className="hidden lg:block">Templates</span>
<div className="ml-auto hidden lg:block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></div>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-cyan-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="hidden lg:block">Variations</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-cyan-400" icon="solar:gallery-wide-linear"></iconify-icon>
<span className="hidden lg:block">Assets</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-cyan-400" icon="solar:tuning-square-2-linear"></iconify-icon>
<span className="hidden lg:block">Config</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-slate-800/60">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-900 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="hidden lg:block overflow-hidden">
<p className="text-xs font-medium text-white truncate">Dev Unit 01</p>
<p className="text-[10px] text-emerald-500 truncate tracking-wide uppercase">Online</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative z-10 blur-[2px] lg:blur-0 transition-all duration-300" id="main-interface">

<header className="flex lg:px-8 bg-slate-950/50 h-16 border-slate-800/60 border-b pr-6 pl-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-6">
<div className="text-xs font-mono text-cyan-600 border border-cyan-900/50 px-2 py-0.5 rounded bg-cyan-950/20">
                        SYS.V.4.3
                    </div>

<div className="hidden md:flex items-center gap-2">
<div className="flex items-center gap-2 text-cyan-400">
<div className="w-5 h-5 rounded-full border border-cyan-500 flex items-center justify-center text-[10px] font-bold">1</div>
<span className="text-xs font-medium tracking-tight">Template</span>
</div>
<div className="w-8 h-px bg-slate-800"></div>
<div className="flex items-center gap-2 text-slate-500">
<div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-bold">2</div>
<span className="text-xs font-medium tracking-tight">Configure</span>
</div>
<div className="w-8 h-px bg-slate-800"></div>
<div className="flex items-center gap-2 text-slate-500">
<div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-bold">3</div>
<span className="text-xs font-medium tracking-tight">Export</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors">
<iconify-icon icon="solar:import-linear"></iconify-icon>
                        Load JSON
                    </button>
<button className="relative p-2 text-slate-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium px-4 py-2 rounded transition-all">
<iconify-icon className="text-sm" icon="solar:diskette-linear"></iconify-icon>
                        SAVE
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto h-full">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="relative flex-1 bg-slate-900/40 border border-slate-800 rounded-lg overflow-hidden flex flex-col min-h-[500px]">

<div className="h-10 border-b border-slate-800 bg-slate-900/80 px-4 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<div className="text-[10px] font-mono text-slate-600">Waiting for input...</div>
</div>

<div className="flex-1 relative flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="text-center opacity-30">
<iconify-icon className="text-6xl text-slate-600 mb-4" icon="solar:programming-linear"></iconify-icon>
<p className="text-sm text-slate-500 font-mono">SELECT A TEMPLATE TO BEGIN</p>
</div>
</div>
</div>

<div className="bg-slate-900/30 border border-slate-800 p-1 rounded-lg flex items-center gap-2 opacity-50">
<div className="pl-3 text-slate-600">
<iconify-icon className="text-lg" icon="solar:command-linear"></iconify-icon>
</div>
<input className="border-none outline-none placeholder-slate-700 text-sm text-slate-500 font-mono bg-transparent w-full pt-3 pr-3 pb-3 pl-3" disabled="" placeholder="Load template to enable prompt..." type="text"/>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-5 backdrop-blur-md flex-1">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Properties
                            </h3>
<div className="h-full flex items-center justify-center text-slate-600 text-xs font-mono">
                                No context selected
                            </div>
</div>
</div>
</div>
</div>
</main>

<div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
<div className="modal-content w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">

<div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
<div>
<h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:library-linear"></iconify-icon>
                            Initialize Project Sequence
                        </h2>
<p className="text-xs text-slate-500 mt-1">Select a starting framework for your interface.</p>
</div>
<button className="text-slate-500 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-48 border-r border-slate-800 bg-slate-950/50 p-4 space-y-1 overflow-y-auto">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-white bg-slate-800 rounded border border-slate-700 flex justify-between items-center">
                            All Templates
                            <span className="text-[10px] text-slate-400">12</span>
</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded transition-colors">
                            Dashboards
                        </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded transition-colors">
                            Landing Pages
                        </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded transition-colors">
                            Mobile Apps
                        </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded transition-colors">
                            E-Commerce
                        </button>
</div>

<div className="flex-1 p-6 overflow-y-auto bg-slate-900/50">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative bg-slate-800/40 border border-cyan-500/50 rounded-lg overflow-hidden hover:bg-slate-800 transition-all cursor-pointer ring-1 ring-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
<div className="absolute top-2 right-2 z-10">
<div className="bg-cyan-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Selected</div>
</div>
<div className="h-32 bg-slate-950 relative border-b border-slate-700/50 flex items-center justify-center overflow-hidden">

<div className="w-3/4 h-3/4 border border-slate-800 bg-slate-900 rounded grid grid-cols-3 gap-1 p-2 opacity-80 group-hover:scale-105 transition-transform duration-500">
<div className="col-span-1 bg-slate-800 rounded h-full"></div>
<div className="col-span-2 space-y-1">
<div className="h-4 bg-slate-800 rounded w-full"></div>
<div className="h-12 bg-slate-800/50 rounded w-full"></div>
<div className="grid grid-cols-2 gap-1 h-8">
<div className="bg-cyan-900/30 rounded border border-cyan-900/50"></div>
<div className="bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<h3 className="text-sm font-semibold text-slate-200">SaaS Analytics v2</h3>
<iconify-icon className="text-slate-500" icon="solar:chart-2-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Data-heavy dashboard with sidebar navigation and widget grid system.</p>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-400">React</span>
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-400">Tailwind</span>
</div>
</div>
</div>

<div className="group relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition-all cursor-pointer">
<div className="h-32 bg-slate-900/50 relative border-b border-slate-800 flex items-center justify-center overflow-hidden">
<div className="w-3/4 h-3/4 border border-slate-800 bg-slate-900 rounded flex flex-col p-2 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="h-2 w-1/3 bg-slate-700 rounded mb-2"></div>
<div className="h-16 w-full bg-slate-800 rounded border border-dashed border-slate-700"></div>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<h3 className="text-sm font-semibold text-slate-200">Modern Landing</h3>
<iconify-icon className="text-slate-500" icon="solar:laptop-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-4">High conversion hero section with feature grid and pricing tables.</p>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-400">Marketing</span>
</div>
</div>
</div>

<div className="group relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition-all cursor-pointer">
<div className="h-32 bg-slate-900/50 relative border-b border-slate-800 flex items-center justify-center overflow-hidden">
<div className="w-24 h-40 border border-slate-800 bg-slate-900 rounded-lg p-1 opacity-60 group-hover:opacity-100 transition-opacity transform rotate-0">
<div className="h-full w-full bg-slate-800/50 rounded"></div>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<h3 className="text-sm font-semibold text-slate-200">Mobile Crypto App</h3>
<iconify-icon className="text-slate-500" icon="solar:smartphone-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-4">Dark mode mobile interface optimized for financial data and trading.</p>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-400">Mobile</span>
</div>
</div>
</div>

<div className="group relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition-all cursor-pointer">
<div className="h-32 bg-slate-900/50 relative border-b border-slate-800 flex items-center justify-center overflow-hidden">
<div className="w-3/4 h-3/4 border border-slate-800 bg-slate-900 rounded grid grid-cols-2 gap-2 p-2 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="bg-slate-800/50 rounded"></div>
<div className="bg-slate-800/50 rounded"></div>
<div className="bg-slate-800/50 rounded"></div>
<div className="bg-slate-800/50 rounded"></div>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between mb-2">
<h3 className="text-sm font-semibold text-slate-200">Grid Gallery</h3>
<iconify-icon className="text-slate-500" icon="solar:gallery-round-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-4">Masonry layout for image heavy content and portfolios.</p>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-400">Media</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex justify-between items-center">
<div className="flex items-center gap-2 text-[10px] text-slate-500">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
<span>Loading a template will reset current workspace.</span>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">Cancel</button>
<button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-medium rounded shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2">
                            Load Sequence
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
