import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
950: '#09090b',
}
}
}
}
}



        // Simple interactions
        document.addEventListener('DOMContentLoaded', () => {
            const playBtn = document.querySelector('button[title="Pause"]'); // Or play
            // Visual toggle for play/pause icon logic could go here
            console.log("StreamLine loaded");
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
<span className="text-zinc-950 font-semibold tracking-tighter text-lg">S</span>
</div>
<span className="text-white font-medium tracking-tight text-lg">StreamLine</span>
</div>

<div className="hidden md:flex items-center relative max-w-sm w-full mx-8">
<iconify-icon className="absolute left-3 text-zinc-500" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all placeholder:text-zinc-600" placeholder="Find creators, games, or events..." type="text"/>
<div className="absolute right-3 flex items-center gap-1">
<span className="text-xs text-zinc-600 border border-zinc-800 rounded px-1.5 py-0.5">⌘K</span>
</div>
</div>

<div className="flex items-center gap-4">
<button className="relative group">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-700 flex items-center justify-center cursor-pointer hover:border-zinc-500 transition-colors">
<span className="text-xs font-medium text-white">JD</span>
</div>
</div>
</div>
</nav>

<main className="flex-1 max-w-screen-2xl mx-auto w-full p-4 sm:p-6 lg:p-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="relative group w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-zinc-800">

<img alt="Stream Background" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

<div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/10 backdrop-blur-md border border-red-500/20 px-3 py-1 rounded-full z-10">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</div>
<span className="text-xs font-semibold text-red-500 tracking-wide uppercase">Live</span>
</div>

<div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full z-10">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium text-white">12.4k</span>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 z-20">

<div className="w-full h-1 bg-white/20 rounded-full cursor-pointer relative group/slider">
<div className="absolute h-full bg-red-500 w-[98%] rounded-full"></div>
<div className="absolute right-[2%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-lg"></div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="text-white hover:text-red-400 transition-colors">
<iconify-icon icon="solar:pause-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<div className="flex items-center gap-2 group/vol">
<iconify-icon className="text-white" icon="solar:volume-high-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300">
<div className="h-1 bg-white/30 rounded-full w-16 ml-2 cursor-pointer">
<div className="h-full bg-white w-3/4 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-300 hover:text-white transition-colors" title="Settings">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-zinc-300 hover:text-white transition-colors" title="Theater Mode">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-zinc-300 hover:text-white transition-colors" title="Fullscreen">
<iconify-icon icon="solar:full-screen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 border-b border-zinc-800 pb-6">
<div className="flex justify-between items-start gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 ring-2 ring-zinc-950 overflow-hidden">
<img alt="Avatar" src="https://ui-avatars.com/api/?name=Tech+Talks&amp;background=random&amp;color=fff"/>
</div>
<div>
<h1 className="text-2xl font-medium tracking-tight text-white leading-tight">Future of Interface Design: 2024 Summit</h1>
<p className="text-zinc-400 text-sm mt-1 flex items-center gap-2">
<span className="text-white font-medium hover:underline cursor-pointer">DesignWeekly</span>
<span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
<span>Technology</span>
</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
                                Share
                            </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black border border-white text-sm font-medium hover:bg-zinc-200 transition-all">
<iconify-icon icon="solar:heart-linear" strokeWidth="2" width="18"></iconify-icon>
                                Follow
                            </button>
</div>
</div>
<div className="flex gap-2 mt-2">
<span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:border-zinc-700 cursor-pointer transition-colors">UI/UX</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:border-zinc-700 cursor-pointer transition-colors">Coding</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:border-zinc-700 cursor-pointer transition-colors">Conference</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col h-full">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden flex flex-col h-full max-h-[800px]">

<div className="flex border-b border-zinc-800">
<button className="flex-1 py-3 text-sm font-medium text-white border-b-2 border-white bg-zinc-900/50">Schedule</button>
<button className="flex-1 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Live Chat</button>
</div>

<div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Up Next</h3>

<div className="relative pl-4 border-l border-zinc-800 space-y-8">

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-4 ring-zinc-950"></div>
<div className="p-3 -mt-3 -ml-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-all">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-red-400">Now Playing</span>
<iconify-icon className="text-zinc-500" icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white line-clamp-1">Keynote: The Age of AI</h4>
<p className="text-xs text-zinc-400 mt-0.5">Sarah Connor • Main Stage</p>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-800 border border-zinc-600 ring-4 ring-zinc-950 group-hover:bg-zinc-600 transition-colors"></div>
<div className="pl-2 group-hover:pl-3 transition-all duration-300">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-zinc-400">14:30</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500">30m</span>
</div>
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Tailwind CSS Tricks</h4>
<p className="text-xs text-zinc-500 mt-0.5">Adam W. • Dev Stage</p>
</div>
<button className="absolute right-0 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white" title="Remind Me">
<iconify-icon icon="solar:alarm-add-linear" width="16"></iconify-icon>
</button>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-800 border border-zinc-600 ring-4 ring-zinc-950 group-hover:bg-zinc-600 transition-colors"></div>
<div className="pl-2 group-hover:pl-3 transition-all duration-300">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-zinc-400">15:15</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500">45m</span>
</div>
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Panel: Web Performance</h4>
<p className="text-xs text-zinc-500 mt-0.5">Vercel Team • Main Stage</p>
</div>
<button className="absolute right-0 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white" title="Remind Me">
<iconify-icon icon="solar:alarm-add-linear" width="16"></iconify-icon>
</button>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-800 border border-zinc-600 ring-4 ring-zinc-950 group-hover:bg-zinc-600 transition-colors"></div>
<div className="pl-2 group-hover:pl-3 transition-all duration-300">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-zinc-400">16:00</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500">1h</span>
</div>
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Q&amp;A Session</h4>
<p className="text-xs text-zinc-500 mt-0.5">Open Floor • Lobby</p>
</div>
</div>

<div className="relative py-4">
<span className="absolute -left-[38px] top-1/2 -translate-y-1/2 bg-zinc-950 px-2 text-xs font-semibold text-zinc-600">TOMORROW</span>
</div>

<div className="relative group cursor-pointer opacity-75">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-800 border border-zinc-700 ring-4 ring-zinc-950"></div>
<div className="pl-2">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-zinc-500">09:00</span>
</div>
<h4 className="text-sm font-medium text-zinc-400">Morning Coffee &amp; Network</h4>
<p className="text-xs text-zinc-600 mt-0.5">Lounge</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-800 text-center">
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-1 w-full">
                                View Full Calendar
                                <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<section className="mt-12">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white tracking-tight">Featured Channels</h2>
<div className="flex gap-2">
<button className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group cursor-pointer">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-zinc-800/50">
<img alt="Code" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 backdrop-blur rounded text-[10px] font-medium text-white">Live</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0"></div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white leading-tight">Rust Programming 101</h3>
<p className="text-xs text-zinc-500 mt-1">CodeMaster</p>
<div className="flex gap-2 mt-1.5">
<span className="text-[10px] bg-zinc-900 text-zinc-500 px-1.5 rounded border border-zinc-800">Dev</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-zinc-800/50">
<img alt="Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-zinc-800/80 backdrop-blur rounded text-[10px] font-medium text-white">45:00</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0"></div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white leading-tight">Abstract Art Review</h3>
<p className="text-xs text-zinc-500 mt-1">CreativeStudio</p>
<div className="flex gap-2 mt-1.5">
<span className="text-[10px] bg-zinc-900 text-zinc-500 px-1.5 rounded border border-zinc-800">Art</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-zinc-800/50">
<img alt="VR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&amp;w=1478&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-zinc-800/80 backdrop-blur rounded text-[10px] font-medium text-white">12:30</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0"></div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white leading-tight">VR Gaming Marathon</h3>
<p className="text-xs text-zinc-500 mt-1">GameHub</p>
<div className="flex gap-2 mt-1.5">
<span className="text-[10px] bg-zinc-900 text-zinc-500 px-1.5 rounded border border-zinc-800">Gaming</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-zinc-800/50">
<img alt="Cyber" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-zinc-800/80 backdrop-blur rounded text-[10px] font-medium text-white">2:00:00</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0"></div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white leading-tight">Cybersecurity Weekly</h3>
<p className="text-xs text-zinc-500 mt-1">NetSec</p>
<div className="flex gap-2 mt-1.5">
<span className="text-[10px] bg-zinc-900 text-zinc-500 px-1.5 rounded border border-zinc-800">Tech</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 mt-12 py-8 bg-zinc-950">
<div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 StreamLine Inc.</p>
<div className="flex gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-300" href="#">Terms</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300" href="#">Privacy</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300" href="#">Cookies</a>
</div>
</div>
</footer>


    </>
  );
}
