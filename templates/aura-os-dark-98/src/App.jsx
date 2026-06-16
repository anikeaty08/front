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
      

<aside className="w-[260px] flex-shrink-0 app-sidebar flex flex-col justify-between z-30 py-6">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
<svg fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="font-semibold text-lg tracking-tight text-white">Master AI</span>
</div>
<div className="flex-1 px-3 space-y-1">
<div className="px-3 pb-2 pt-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Platform</div>
<button className="nav-item active w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-left">
<span className="iconify" data-height="18" data-icon="lucide:layout-dashboard" data-width="18" strokeWidth="1.5"></span>
                Dashboard
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-left">
<span className="iconify" data-height="18" data-icon="lucide:folder-kanban" data-width="18" strokeWidth="1.5"></span>
                My Projects
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-left">
<span className="iconify" data-height="18" data-icon="lucide:globe" data-width="18" strokeWidth="1.5"></span>
                Public Ventures
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-left">
<span className="iconify" data-height="18" data-icon="lucide:users" data-width="18" strokeWidth="1.5"></span>
                Team
            </button>
<div className="mt-8 px-3 pb-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Settings</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-left">
<span className="iconify" data-height="18" data-icon="lucide:settings" data-width="18" strokeWidth="1.5"></span>
                Configuration
            </button>
</div>
<div className="px-4 space-y-4">
<div className="px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-between">
<span className="text-xs text-gray-400 font-medium">Gemini 2 Flash Exp</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
</div>
<div className="border-t border-[#242838] pt-4 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-[#242838] flex items-center justify-center text-[10px] font-bold text-white border border-white/10">MH</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-white leading-none">Mahmoud Hijazi</p>
<p className="text-[10px] truncate text-gray-500 mt-1">Pro Plan</p>
</div>
<button className="text-gray-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-[#0B0C15]">

<header className="h-16 w-full flex items-center justify-between px-8 border-b border-[#242838] bg-[#0B0C15]/80 backdrop-blur-sm z-20">
<div className="flex items-center gap-4">
<h2 className="text-sm font-medium text-gray-400">Dashboard / <span className="text-white">Overview</span></h2>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="iconify text-gray-400" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border border-[#0B0C15]"></span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 lg:p-12 scroll-smooth">
<div className="max-w-6xl mx-auto space-y-12">

<section>
<div className="flex justify-between items-end mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-white">My Projects</h2>
<button className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1">
                            View All <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

<button className="group relative flex flex-col items-center justify-center h-[200px] rounded-[20px] border border-blue-500/30 bg-gradient-to-b from-[#3B6CEA] to-[#1A56DB] p-6 text-center transition-all hover:shadow-[0_0_40px_rgba(59,108,234,0.15)] hover:border-blue-400/50" onclick="document.getElementById('new-venture-modal').classList.remove('hidden')">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:plus" data-width="20" strokeWidth="2.5"></span>
</div>
<h3 className="font-semibold text-white tracking-tight">Create New Venture</h3>
<p className="mt-2 text-xs text-blue-100/70">Launch a new AI-driven campaign</p>
</button>

<div className="panel-card p-6 rounded-[20px] flex flex-col justify-between h-[200px] group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 text-indigo-400">
<span className="iconify" data-icon="lucide:building-2" data-width="16"></span>
</div>
<span className="iconify text-gray-600 hover:text-white transition-colors" data-icon="lucide:more-horizontal" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Venture Title</h3>
<p className="text-sm text-gray-500 mt-1">Led by Musa Akangbe</p>
</div>
<div className="space-y-4 relative z-10">
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-gray-400">Progress</span>
<span className="text-white">30%</span>
</div>
<div className="w-full h-1.5 rounded-full progress-track overflow-hidden">
<div className="h-full w-[30%] rounded-full progress-fill"></div>
</div>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-3">
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-[#151723] bg-gray-700 avatar-ring" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-6 h-6 rounded-full border border-[#151723] bg-gray-700 avatar-ring" src="https://i.pravatar.cc/100?img=47"/>
<div className="w-6 h-6 rounded-full border border-[#151723] bg-[#242838] flex items-center justify-center text-[8px] text-gray-400 avatar-ring">+2</div>
</div>
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Active</span>
</div>
</div>
</div>

<div className="panel-card p-6 rounded-[20px] flex flex-col justify-between h-[200px] group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 text-orange-400">
<span className="iconify" data-icon="lucide:book-open" data-width="16"></span>
</div>
<span className="iconify text-gray-600 hover:text-white transition-colors" data-icon="lucide:more-horizontal" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Fin. Literacy KSA</h3>
<p className="text-sm text-gray-500 mt-1">Led by Sarah Jenkins</p>
</div>
<div className="space-y-4 relative z-10">
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-gray-400">Progress</span>
<span className="text-white">75%</span>
</div>
<div className="w-full h-1.5 rounded-full progress-track overflow-hidden">
<div className="h-full w-[75%] rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]"></div>
</div>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-3">
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-[#151723] bg-gray-700 avatar-ring" src="https://i.pravatar.cc/100?img=12"/>
</div>
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">Review</span>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex justify-between items-end mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-white">Public Ventures</h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-lg border border-[#242838] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
</button>
<button className="w-8 h-8 rounded-lg border border-[#242838] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:arrow-up-down" data-width="14"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="panel-card p-6 rounded-[20px] flex flex-col justify-between h-[180px] group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-white tracking-tight leading-tight">Home Buying in<br/>Saudi Arabia</h3>
<div className="px-2 py-1 rounded-full bg-[#1F2437] text-[10px] font-medium text-gray-300 border border-white/5">Public</div>
</div>
<p className="text-sm text-gray-500 mt-2 line-clamp-2">Automated real estate acquisition framework for international investors.</p>
</div>
<div className="flex justify-between items-end relative z-10">
<div className="flex items-center gap-2 text-xs text-gray-400">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
<span>2.4k followers</span>
</div>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</div>
<div className="col-span-1 md:col-span-2 border border-dashed border-[#242838] rounded-[20px] bg-[#0B0C15] flex flex-col items-center justify-center h-[180px] text-center p-6">
<div className="w-10 h-10 rounded-full bg-[#151723] flex items-center justify-center mb-3 text-gray-600">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</div>
<h3 className="text-sm font-medium text-gray-300">Browse Global Registry</h3>
<p className="text-xs text-gray-600 mt-1 max-w-xs">Discover public AI ventures from the global community or create your own.</p>
</div>
</div>
</section>
</div>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center" id="new-venture-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="document.getElementById('new-venture-modal').classList.add('hidden')"></div>

<div className="relative bg-[#151723] border border-[#242838] rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all overflow-hidden flex flex-col max-h-[90vh]">

<div className="px-8 pt-8 pb-4 flex items-center justify-between">
<h2 className="text-2xl font-medium tracking-tight text-white">Create Venture</h2>
<button className="text-gray-500 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5" onclick="document.getElementById('new-venture-modal').classList.add('hidden')">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>

<div className="px-8 pb-8 space-y-6 overflow-y-auto">

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-300">Venture/Project Name</label>
<div className="custom-input rounded-lg flex items-center h-12 px-4 w-full">
<input className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-gray-500" placeholder="" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-300">Add Google Drive Link</label>
<div className="custom-input rounded-lg flex items-center h-12 px-4 w-full gap-2">
<span className="iconify text-gray-500" data-icon="lucide:link" data-width="16"></span>
<input className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-gray-500" placeholder="Add new link" type="text"/>
</div>
<div className="flex items-start gap-2 mt-2">
<span className="iconify text-orange-500 mt-0.5 flex-shrink-0" data-icon="lucide:alert-circle" data-width="14"></span>
<p className="text-xs text-orange-500/90 font-medium leading-tight">A google drive folder needs to be created prior to creating this venture</p>
</div>
</div>

<div className="space-y-4 pt-2">

<div className="selection-card selected rounded-xl p-4 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#1F2437] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Public</h4>
<p className="text-xs text-gray-500 mt-0.5">Anyone at Stryber can view</p>
</div>
</div>

<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
<span className="iconify text-white" data-icon="lucide:check" data-width="12" strokeWidth="3"></span>
</div>
</div>

<div className="selection-card rounded-xl p-4 flex items-center justify-between cursor-pointer group opacity-60 hover:opacity-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#1F2437] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:lock" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Private</h4>
<p className="text-xs text-gray-500 mt-0.5">Only you can view</p>
</div>
</div>

<div className="w-5 h-5 rounded-full border border-gray-600 bg-transparent"></div>
</div>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
                    These settings can be changed at any time by clicking the <span className="font-mono text-gray-400">&gt;</span> icon in the top bar
                </p>

<button className="w-full bg-[#3B6CEA] hover:bg-blue-600 text-white font-medium h-12 rounded-xl transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 mt-4">
                    Create
                </button>
</div>
</div>
</div>

    </>
  );
}
