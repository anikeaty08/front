import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#09090b', // zinc-950
surface: '#18181b',    // zinc-900
border: '#27272a',     // zinc-800
subtle: '#71717a',     // zinc-500
text: '#e4e4e7',       // zinc-200
primary: '#fff',
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 md:w-64 border-r border-border flex flex-col bg-background z-20 shrink-0">

<div className="h-16 flex items-center px-0 md:px-6 justify-center md:justify-start border-b border-border/40">
<div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shrink-0">
<span className="text-background font-bold tracking-tighter text-sm">TP</span>
</div>
<span className="ml-3 font-semibold tracking-tight text-white hidden md:block">Top Picks</span>
</div>

<nav className="flex-1 py-6 px-2 md:px-3 space-y-1">
<a className="flex items-center gap-3 px-2 md:px-3 py-2 rounded-md bg-surface text-white group" href="#">
<i className="w-5 h-5" data-lucide="list-ordered"></i>
<span className="hidden md:block text-sm font-medium">Top Lists</span>
</a>
<a className="flex items-center gap-3 px-2 md:px-3 py-2 rounded-md text-subtle hover:text-white hover:bg-surface/50 transition-all group" href="#">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="hidden md:block text-sm font-medium">Tier Maker</span>
</a>
<a className="flex items-center gap-3 px-2 md:px-3 py-2 rounded-md text-subtle hover:text-white hover:bg-surface/50 transition-all group" href="#">
<i className="w-5 h-5" data-lucide="layout-template"></i>
<span className="hidden md:block text-sm font-medium">Templates</span>
</a>
<div className="pt-4 mt-4 border-t border-border/40 hidden md:block px-3">
<p className="text-xxs font-semibold text-subtle uppercase tracking-wider mb-2">My Library</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-subtle hover:text-white hover:bg-surface/50 transition-all" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
<span className="text-sm">Best Burgers NYC</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-subtle hover:text-white hover:bg-surface/50 transition-all" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-sm">2024 Anime Tier</span>
</a>
</div>
</div>
</nav>

<div className="p-4 border-t border-border/40 hidden md:flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400">
                JD
            </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">John Doe</span>
<span className="text-xxs text-subtle">Pro Plan</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 md:flex-row overflow-hidden">

<div className="flex-1 flex flex-col border-r border-border/40 bg-background relative overflow-hidden">

<header className="h-16 flex items-center justify-between px-6 border-b border-border/40 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-sm font-medium text-subtle">Editor</h1>
<div className="h-4 w-px bg-border"></div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-white">Top 5 List</span>
<i className="w-4 h-4 text-subtle cursor-pointer" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-subtle hover:text-white transition-colors">Clear</button>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="save"></i>
                        Save
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-2xl mx-auto space-y-8">

<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-subtle">List Title</label>
<input className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-lg font-medium text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" type="text" value="Top 5 Sci-Fi Movies"/>
</div>

<div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
<button className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-medium border border-white shrink-0">Movies</button>
<button className="px-3 py-1.5 rounded-full bg-surface text-subtle hover:text-zinc-300 text-xs font-medium border border-border hover:border-zinc-600 transition-colors shrink-0">Music</button>
<button className="px-3 py-1.5 rounded-full bg-surface text-subtle hover:text-zinc-300 text-xs font-medium border border-border hover:border-zinc-600 transition-colors shrink-0">Food</button>
<button className="px-3 py-1.5 rounded-full bg-surface text-subtle hover:text-zinc-300 text-xs font-medium border border-border hover:border-zinc-600 transition-colors shrink-0">Travel</button>
<button className="px-3 py-1.5 rounded-full bg-surface text-subtle hover:text-zinc-300 text-xs font-medium border border-border hover:border-zinc-600 transition-colors shrink-0">Gaming</button>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-subtle">Rankings</label>
<button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-down"></i>
                                Reverse
                            </button>
</div>

<div className="group flex items-center gap-3 bg-surface/50 p-2 rounded-lg border border-border hover:border-zinc-600 transition-colors">
<div className="drag-handle p-2 text-zinc-600 hover:text-zinc-400 cursor-grab">
<i className="w-4 h-4" data-lucide="grip-vertical"></i>
</div>
<div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md text-white font-bold text-sm shrink-0">1</div>
<div className="w-10 h-10 bg-zinc-800 rounded-md border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group/img">
<img alt="Blade Runner" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 bg-black/40 transition-opacity">
<i className="w-4 h-4 text-white" data-lucide="image-plus"></i>
</div>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-zinc-200 focus:outline-none placeholder-zinc-600" placeholder="Item name..." type="text" value="Blade Runner 2049"/>
<button className="p-2 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="group flex items-center gap-3 bg-surface/50 p-2 rounded-lg border border-border hover:border-zinc-600 transition-colors">
<div className="drag-handle p-2 text-zinc-600 hover:text-zinc-400 cursor-grab">
<i className="w-4 h-4" data-lucide="grip-vertical"></i>
</div>
<div className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-md text-zinc-400 font-bold text-sm shrink-0">2</div>
<div className="w-10 h-10 bg-zinc-800 rounded-md border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group/img">
<img alt="Interstellar" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 bg-black/40 transition-opacity">
<i className="w-4 h-4 text-white" data-lucide="image-plus"></i>
</div>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-zinc-200 focus:outline-none placeholder-zinc-600" placeholder="Item name..." type="text" value="Interstellar"/>
<button className="p-2 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="group flex items-center gap-3 bg-surface/50 p-2 rounded-lg border border-border hover:border-zinc-600 transition-colors">
<div className="drag-handle p-2 text-zinc-600 hover:text-zinc-400 cursor-grab">
<i className="w-4 h-4" data-lucide="grip-vertical"></i>
</div>
<div className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-md text-zinc-400 font-bold text-sm shrink-0">3</div>
<div className="w-10 h-10 bg-zinc-800 rounded-md border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group/img">
<img alt="Dune" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 bg-black/40 transition-opacity">
<i className="w-4 h-4 text-white" data-lucide="image-plus"></i>
</div>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-zinc-200 focus:outline-none placeholder-zinc-600" placeholder="Item name..." type="text" value="Dune: Part Two"/>
<button className="p-2 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="group flex items-center gap-3 bg-surface/50 p-2 rounded-lg border border-border hover:border-zinc-600 transition-colors">
<div className="drag-handle p-2 text-zinc-600 hover:text-zinc-400 cursor-grab">
<i className="w-4 h-4" data-lucide="grip-vertical"></i>
</div>
<div className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-md text-zinc-400 font-bold text-sm shrink-0">4</div>
<div className="w-10 h-10 bg-zinc-800 rounded-md border border-zinc-700 flex items-center justify-center shrink-0 cursor-pointer hover:bg-zinc-700 transition-colors group/img">
<i className="w-4 h-4 text-zinc-600 group-hover/img:text-zinc-400" data-lucide="image"></i>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-zinc-200 focus:outline-none placeholder-zinc-600" placeholder="Type item name..." type="text" value=""/>
<button className="p-2 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="group flex items-center gap-3 bg-surface/50 p-2 rounded-lg border border-border hover:border-zinc-600 transition-colors">
<div className="drag-handle p-2 text-zinc-600 hover:text-zinc-400 cursor-grab">
<i className="w-4 h-4" data-lucide="grip-vertical"></i>
</div>
<div className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-md text-zinc-400 font-bold text-sm shrink-0">5</div>
<div className="w-10 h-10 bg-zinc-800 rounded-md border border-zinc-700 flex items-center justify-center shrink-0 cursor-pointer hover:bg-zinc-700 transition-colors group/img">
<i className="w-4 h-4 text-zinc-600 group-hover/img:text-zinc-400" data-lucide="image"></i>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-zinc-200 focus:outline-none placeholder-zinc-600" placeholder="Type item name..." type="text" value=""/>
<button className="p-2 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<button className="w-full py-3 rounded-lg border border-dashed border-zinc-700 text-zinc-500 text-xs font-medium hover:text-zinc-300 hover:border-zinc-500 hover:bg-surface/30 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
                            Add Item
                        </button>
</div>

<div className="pt-6 border-t border-border/40 space-y-4">
<h3 className="text-xs font-medium text-subtle">Customization</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-zinc-400">Theme Color</label>
<div className="flex items-center gap-2">
<button className="w-6 h-6 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-offset-zinc-900 ring-blue-500"></button>
<button className="w-6 h-6 rounded-full bg-purple-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-purple-500/50 transition-all"></button>
<button className="w-6 h-6 rounded-full bg-emerald-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-emerald-500/50 transition-all"></button>
<button className="w-6 h-6 rounded-full bg-orange-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-orange-500/50 transition-all"></button>
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center cursor-pointer border border-white/20">
<i className="w-3 h-3 text-white" data-lucide="plus"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400">Layout</label>
<div className="flex items-center bg-surface border border-border rounded-lg p-1">
<button className="flex-1 py-1 px-2 rounded-md bg-zinc-700 text-white text-xs font-medium shadow-sm">List</button>
<button className="flex-1 py-1 px-2 rounded-md text-zinc-500 hover:text-zinc-300 text-xs font-medium">Grid</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<aside className="w-full md:w-[480px] lg:w-[540px] bg-zinc-950 flex flex-col border-l border-border/40 shrink-0">

<div className="h-16 flex items-center justify-between px-6 border-b border-border/40 bg-zinc-950/50 backdrop-blur-sm z-10">
<div className="flex bg-surface rounded-lg border border-border p-1">
<button className="p-1.5 rounded bg-zinc-700 text-white shadow-sm">
<i className="w-4 h-4" data-lucide="smartphone"></i>
</button>
<button className="p-1.5 rounded text-zinc-500 hover:text-zinc-300">
<i className="w-4 h-4" data-lucide="rectangle-vertical"></i>
</button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-border hover:bg-zinc-800 text-xs font-medium text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="image"></i>
                        PNG
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-medium shadow-lg shadow-indigo-500/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="clapperboard"></i>
                        Export Video
                    </button>
</div>
</div>

<div className="flex-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-zinc-900 relative flex items-center justify-center p-8 overflow-hidden">

<div className="w-[320px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-zinc-900 bg-zinc-950 relative aspect-[9/16] flex flex-col">

<div className="h-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 relative shrink-0">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="inline-block px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-medium text-white mb-2">Movies</span>
<h2 className="text-xl font-bold text-white leading-tight shadow-black drop-shadow-md">Top 5 Sci-Fi Movies</h2>
</div>
</div>

<div className="flex-1 p-4 space-y-3 overflow-hidden bg-zinc-950/80 backdrop-blur-xl">

<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
<img className="w-10 h-10 rounded object-cover shadow-sm" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col min-w-0">
<span className="text-xs font-bold text-white truncate">Blade Runner 2049</span>
<span className="text-[10px] text-zinc-500">Masterpiece</span>
</div>
<span className="ml-auto text-2xl font-black text-white/10 italic pr-2">1</span>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/50 border border-white/5">
<img className="w-10 h-10 rounded object-cover shadow-sm" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-zinc-200 truncate">Interstellar</span>
</div>
<span className="ml-auto text-xl font-black text-white/5 italic pr-2">2</span>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/50 border border-white/5">
<img className="w-10 h-10 rounded object-cover shadow-sm" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-zinc-200 truncate">Dune: Part Two</span>
</div>
<span className="ml-auto text-xl font-black text-white/5 italic pr-2">3</span>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/30 border border-white/5 border-dashed">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center">
<span className="text-zinc-600 text-xs">?</span>
</div>
<div className="w-24 h-2 rounded bg-zinc-800/50"></div>
<span className="ml-auto text-xl font-black text-white/5 italic pr-2">4</span>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/30 border border-white/5 border-dashed">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center">
<span className="text-zinc-600 text-xs">?</span>
</div>
<div className="w-24 h-2 rounded bg-zinc-800/50"></div>
<span className="ml-auto text-xl font-black text-white/5 italic pr-2">5</span>
</div>
</div>

<div className="p-3 border-t border-white/5 flex items-center justify-between bg-zinc-950">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded bg-white text-black flex items-center justify-center text-[8px] font-bold">TP</div>
<span className="text-[10px] text-zinc-500">TopPicks.app</span>
</div>
<span className="text-[10px] text-zinc-600">@johndoe</span>
</div>

<div className="absolute bottom-20 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg cursor-pointer hover:scale-105 transition-transform group">
<i className="w-4 h-4 text-white fill-white group-hover:scale-90 transition-transform" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-zinc-900/90 backdrop-blur border border-border px-4 py-2 rounded-full shadow-xl">
<button className="text-white hover:text-indigo-400 transition-colors"><i className="w-4 h-4 fill-current" data-lucide="skip-back"></i></button>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"><i className="w-4 h-4 fill-current ml-0.5" data-lucide="play"></i></button>
<div className="w-32 h-1 bg-zinc-700 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-indigo-500"></div>
</div>
<span className="text-[10px] font-mono text-zinc-400">0:04 / 0:15</span>
</div>
</div>
</aside>
</main>


    </>
  );
}
