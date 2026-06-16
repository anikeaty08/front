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
      

<aside className="hidden lg:flex flex-col w-64 h-full border-r border-white/5 bg-[#0D0D0F] pt-8 pb-6 px-6 justify-between animate-enter">
<div>

<div className="mb-10 pl-2">
<h1 className="text-xl font-bold tracking-tight text-[#DDF247] uppercase">Fit Space</h1>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-white/10 rounded-xl transition-all group" href="#">
<i className="w-5 h-5 text-white" data-lucide="layout-dashboard"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="user"></i>
                    Clients
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="users"></i>
                    Groups
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="layout-grid"></i>
                    Templates
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="calendar"></i>
                    Calendar
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="message-circle"></i>
                    Chats
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="help-circle"></i>
                    Help
                </a>
</nav>
</div>

<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white transition-all" href="#">
                Settings
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#FF5A5A] hover:text-[#ff7575] transition-all" href="#">
                Log Out
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="flex items-center justify-between px-8 py-6 z-20 bg-[#0D0D0F]/90 backdrop-blur-sm sticky top-0 animate-enter">

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="relative w-full max-w-md hidden md:block group">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors" data-lucide="search"></i>
<input className="w-full bg-[#1C1C1E] text-sm text-white placeholder-zinc-500 rounded-full pl-11 pr-4 py-3 border border-transparent focus:border-zinc-700 focus:bg-[#27272A] focus:outline-none transition-all" placeholder="Search" type="text"/>
</div>

<div className="flex items-center gap-6">
<button className="relative text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#DDF247] rounded-full border-2 border-[#0D0D0F]"></span>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="mail"></i>
</button>
<div className="flex items-center gap-3 pl-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="text-right hidden sm:block">
<p className="text-sm font-medium text-white">Mike Wilson</p>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 pt-2">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-[1600px] mx-auto">

<div className="xl:col-span-8 space-y-8 animate-enter delay-100">

<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Income report</h2>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                                    Week <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                                    Compare to: Prev week <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-[#DDF247] rounded-3xl p-6 text-black flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium opacity-80">Revenue</span>
<span className="bg-black text-[#DDF247] text-[10px] font-bold px-2 py-1 rounded-full">+17%</span>
</div>
<div className="space-y-1 relative z-10">
<h3 className="text-4xl font-semibold tracking-tight">$ 876,00</h3>
<p className="text-xs font-medium opacity-70 mt-2">$ 645,00 + $ 231,00</p>
</div>
</div>

<div className="bg-[#1C1C1E] rounded-3xl p-6 border border-white/5 flex flex-col justify-between hover:bg-[#27272A] transition-colors duration-300">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-400">Service revenue</span>
<span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full">+7%</span>
</div>
<div className="space-y-1">
<h3 className="text-4xl font-semibold tracking-tight text-white">$ 435,00</h3>
<p className="text-xs font-medium text-zinc-500 mt-2">$ 355,00 + $ 80,00</p>
</div>
</div>

<div className="bg-[#1C1C1E] rounded-3xl p-6 border border-white/5 flex flex-col justify-between hover:bg-[#27272A] transition-colors duration-300">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-zinc-400">Earned today</span>
<span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full">+27%</span>
</div>
<div className="space-y-1">
<h3 className="text-4xl font-semibold tracking-tight text-white">$ 344,00</h3>
<p className="text-xs font-medium text-zinc-500 mt-2">$ 208,00 + $ 136,00</p>
</div>
</div>
</div>
</div>

<div className="space-y-6 pt-4">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Schedule</h2>
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                                This week <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>

<div className="relative w-full overflow-x-auto">
<div className="min-w-[600px]">

<div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr] mb-4 text-center">
<div></div>
<div className="flex flex-col items-center">
<span className="text-xs text-zinc-500 mb-1">Mon</span>
<span className="text-lg font-semibold text-[#DDF247]">18</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-zinc-500 mb-1">Tue</span>
<span className="text-lg font-semibold text-white">19</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-zinc-500 mb-1">Wed</span>
<span className="text-lg font-semibold text-white">20</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-zinc-500 mb-1">Thu</span>
<span className="text-lg font-semibold text-white">21</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-zinc-500 mb-1">Fri</span>
<span className="text-lg font-semibold text-white">22</span>
</div>
</div>

<div className="relative grid-lines border-t border-white/5">

<div className="absolute top-[230px] left-0 right-0 h-[1px] bg-[#38BDF8] z-20 flex items-center">
<div className="w-2 h-2 rounded-full bg-[#38BDF8] -ml-1"></div>
</div>


<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">8 am</div>
<div className="border-l border-white/5"></div> 
<div className="border-l border-white/5"></div> 
<div className="border-l border-white/5 p-1 relative"> 
<div className="absolute top-2 left-1 right-1 bg-[#27272A] rounded-lg p-2 border border-white/5 hover:border-zinc-500 transition-colors cursor-pointer group">
<p className="text-[10px] font-semibold text-white">Lora Montes</p>
<p className="text-[10px] text-zinc-500">8 - 9 am</p>
</div>
</div>
<div className="border-l border-white/5"></div> 
<div className="border-l border-white/5"></div> 
</div>

<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">9 am</div>
<div className="border-l border-white/5 relative p-1"> 
<div className="absolute top-2 left-1 right-1 bg-[#27272A] rounded-lg p-2 border border-white/5 hover:border-zinc-500 transition-colors cursor-pointer">
<p className="text-[10px] font-semibold text-white">Lukas Tapia</p>
<p className="text-[10px] text-zinc-500">9 - 10 am</p>
</div>
</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5 relative p-1"> 
<div className="absolute top-2 left-1 right-1 bg-[#27272A] rounded-lg p-2 border border-white/5 hover:border-zinc-500 transition-colors cursor-pointer">
<p className="text-[10px] font-semibold text-white">Sarah Perry</p>
<p className="text-[10px] text-zinc-500">8 - 9 am</p>
</div>
</div>
</div>

<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">10 am</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5 relative p-1"> 
<div className="absolute top-2 left-1 right-1 bg-[#27272A] rounded-lg p-2 border border-white/5 hover:border-zinc-500 transition-colors cursor-pointer">
<p className="text-[10px] font-semibold text-white">Mark Smith</p>
<p className="text-[10px] text-zinc-500">10 - 11 am</p>
</div>
</div>
<div className="border-l border-white/5"></div>
</div>

<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">11 am</div>
<div className="border-l border-white/5 relative p-1 z-30"> 
<div className="absolute top-2 left-1 right-1 bg-white text-black rounded-lg p-2 shadow-lg cursor-pointer transform hover:scale-105 transition-transform">
<p className="text-[10px] font-bold">Lora Montes</p>
<p className="text-[10px] font-medium opacity-70">11 - 12 am</p>
</div>
</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
</div>

<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">12 pm</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
</div>

<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">1 pm</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5 relative p-1"> 
<div className="absolute top-2 left-1 right-1 bg-[#27272A] rounded-lg p-2 border border-white/5 hover:border-zinc-500 transition-colors cursor-pointer">
<p className="text-[10px] font-semibold text-white">Sarah Perry</p>
<p className="text-[10px] text-zinc-500">1 - 2 pm</p>
</div>
</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5 relative p-1"> 
<div className="absolute top-2 left-1 right-1 bg-[#27272A] rounded-lg p-2 border border-white/5 hover:border-zinc-500 transition-colors cursor-pointer">
<p className="text-[10px] font-semibold text-white">Lukas Tapia</p>
<p className="text-[10px] text-zinc-500">1 - 2 pm</p>
</div>
</div>
<div className="border-l border-white/5"></div>
</div>

<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">2 pm</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
</div>

<div className="h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr]">
<div className="text-xs text-zinc-500 text-right pr-4 -mt-2">3 pm</div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
<div className="border-l border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 space-y-8 animate-enter delay-200">

<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Clients Activity</h2>
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                                All <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
<div className="space-y-6">

<div className="flex gap-4 group cursor-pointer">
<div className="relative flex-shrink-0">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#DDF247] transition-all" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white group-hover:text-[#DDF247] transition-colors">Mark Smith</h4>
<span className="text-xs text-zinc-500">15 min</span>
</div>
<p className="text-xs text-zinc-400 mt-0.5 truncate">Added 2 photos in Food Diary</p>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="relative flex-shrink-0">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#DDF247] transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white group-hover:text-[#DDF247] transition-colors">Sarah Perry</h4>
<span className="text-xs text-zinc-500">1 h</span>
</div>
<p className="text-xs text-zinc-400 mt-0.5">Added 4 photos in Progress photos</p>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="relative flex-shrink-0">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#DDF247] transition-all" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white group-hover:text-[#DDF247] transition-colors">Lukas Tapia</h4>
<span className="text-xs text-zinc-500">2 h</span>
</div>
<p className="text-xs text-zinc-400 mt-0.5">Uploaded a new video</p>
</div>
</div>
</div>
<button className="w-full py-3 bg-[#DDF247] text-black text-xs font-semibold rounded-2xl hover:bg-[#c9db3b] transition-colors">
                            View all
                        </button>
</div>

<div className="bg-[#1C1C1E] rounded-3xl p-6 border border-white/5 space-y-6 hover:border-zinc-700 transition-colors">
<h2 className="text-lg font-semibold tracking-tight">Task Completion</h2>

<div className="relative w-48 h-48 mx-auto">

<svg className="w-full h-full transform -rotate-90">

<circle cx="50%" cy="50%" fill="transparent" r="45%" stroke="#27272A" strokeWidth="12"></circle>

<circle className="chart-circle" cx="50%" cy="50%" fill="transparent" r="45%" stroke="#38BDF8" strokeLinecap="round" strokeWidth="12"></circle>
</svg>

<div className="absolute inset-0 flex items-center justify-center">
<span className="text-3xl font-bold tracking-tight">71%</span>
</div>
</div>

<div className="flex items-center justify-center gap-6">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#38BDF8]"></span>
<span className="text-xs font-medium text-zinc-300">Complete</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#27272A]"></span>
<span className="text-xs font-medium text-zinc-300">Missed</span>
</div>
</div>
<button className="w-full py-3 bg-[#DDF247] text-black text-xs font-semibold rounded-2xl hover:bg-[#c9db3b] transition-colors">
                            View breakdown
                        </button>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>


    </>
  );
}
